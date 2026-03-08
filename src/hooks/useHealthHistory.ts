import { useState, useEffect, useCallback } from "react";

export interface HealthCheck {
  id: string;
  timestamp: number;
  symptoms: string[];
  topResult: string | null;
  topScore: number | null;
}

const STORAGE_KEY = "medipredict_health_history";

function loadHistory(): HealthCheck[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useHealthHistory() {
  const [history, setHistory] = useState<HealthCheck[]>(loadHistory);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const saveCheck = useCallback(
    (symptoms: string[], topResult: string | null, topScore: number | null) => {
      if (symptoms.length === 0) return;
      const entry: HealthCheck = {
        id: crypto.randomUUID(),
        timestamp: Date.now(),
        symptoms,
        topResult,
        topScore,
      };
      setHistory((prev) => [entry, ...prev].slice(0, 50)); // keep last 50
    },
    []
  );

  const deleteCheck = useCallback((id: string) => {
    setHistory((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  return { history, saveCheck, deleteCheck, clearHistory };
}
