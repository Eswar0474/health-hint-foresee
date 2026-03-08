import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SYMPTOM_CATEGORIES, SYMPTOM_LABELS } from "@/data/diseaseData";
import { Search, X, ChevronDown, ChevronUp } from "lucide-react";

interface SymptomSelectorProps {
  selected: string[];
  onToggle: (symptom: string) => void;
  onClear: () => void;
}

export default function SymptomSelector({ selected, onToggle, onClear }: SymptomSelectorProps) {
  const [search, setSearch] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("General");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return SYMPTOM_CATEGORIES;
    const q = search.toLowerCase();
    const result: Record<string, string[]> = {};
    for (const [cat, symptoms] of Object.entries(SYMPTOM_CATEGORIES)) {
      const filtered = symptoms.filter(
        (s) => (SYMPTOM_LABELS[s] || s).toLowerCase().includes(q)
      );
      if (filtered.length > 0) result[cat] = filtered;
    }
    return result;
  }, [search]);

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search symptoms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 bg-card border-border"
        />
      </div>

      {/* Selected symptoms */}
      {selected.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-muted-foreground">
              Selected ({selected.length})
            </span>
            <button
              onClick={onClear}
              className="text-xs text-destructive hover:underline"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selected.map((s) => (
              <Badge
                key={s}
                variant="default"
                className="cursor-pointer gap-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onToggle(s)}
              >
                {SYMPTOM_LABELS[s] || s}
                <X className="h-3 w-3" />
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      <div className="space-y-1 max-h-[400px] overflow-y-auto pr-1">
        {Object.entries(filteredCategories).map(([category, symptoms]) => (
          <div key={category} className="rounded-lg border border-border overflow-hidden">
            <button
              onClick={() =>
                setExpandedCategory(expandedCategory === category ? null : category)
              }
              className="w-full flex items-center justify-between px-4 py-2.5 bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium text-secondary-foreground"
            >
              <span>{category}</span>
              <span className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  {symptoms.filter((s) => selected.includes(s)).length}/{symptoms.length}
                </span>
                {expandedCategory === category ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </span>
            </button>
            {(expandedCategory === category || search.trim()) && (
              <div className="p-3 flex flex-wrap gap-2">
                {symptoms.map((symptom) => {
                  const isSelected = selected.includes(symptom);
                  return (
                    <button
                      key={symptom}
                      onClick={() => onToggle(symptom)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {SYMPTOM_LABELS[symptom] || symptom}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
