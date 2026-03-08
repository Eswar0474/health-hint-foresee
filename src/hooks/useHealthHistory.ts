import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

export interface HealthCheck {
  id: string;
  timestamp: number;
  symptoms: string[];
  topResult: string | null;
  topScore: number | null;
}

export function useHealthHistory() {
  const { user } = useAuth();
  const [history, setHistory] = useState<HealthCheck[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch history from DB
  useEffect(() => {
    if (!user) {
      setHistory([]);
      return;
    }

    const fetchHistory = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("health_checks")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setHistory(
          data.map((row) => ({
            id: row.id,
            timestamp: new Date(row.created_at).getTime(),
            symptoms: row.symptoms,
            topResult: row.top_result,
            topScore: row.top_score ? Number(row.top_score) : null,
          }))
        );
      }
      setLoading(false);
    };

    fetchHistory();
  }, [user]);

  const saveCheck = useCallback(
    async (symptoms: string[], topResult: string | null, topScore: number | null) => {
      if (!user || symptoms.length === 0) return;

      const { data, error } = await supabase
        .from("health_checks")
        .insert({
          user_id: user.id,
          symptoms,
          top_result: topResult,
          top_score: topScore,
        })
        .select()
        .single();

      if (!error && data) {
        setHistory((prev) => [
          {
            id: data.id,
            timestamp: new Date(data.created_at).getTime(),
            symptoms: data.symptoms,
            topResult: data.top_result,
            topScore: data.top_score ? Number(data.top_score) : null,
          },
          ...prev,
        ]);
      }
    },
    [user]
  );

  const deleteCheck = useCallback(
    async (id: string) => {
      if (!user) return;
      const { error } = await supabase.from("health_checks").delete().eq("id", id);
      if (!error) {
        setHistory((prev) => prev.filter((c) => c.id !== id));
      }
    },
    [user]
  );

  const clearHistory = useCallback(async () => {
    if (!user) return;
    const { error } = await supabase
      .from("health_checks")
      .delete()
      .eq("user_id", user.id);
    if (!error) {
      setHistory([]);
    }
  }, [user]);

  return { history, loading, saveCheck, deleteCheck, clearHistory };
}
