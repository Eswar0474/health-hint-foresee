import { useState } from "react";
import { DiseaseProfile, SYMPTOM_LABELS } from "@/data/diseaseData";
import { DISEASE_DETAILS } from "@/data/diseaseDetails";
import {
  AlertTriangle, Shield, Info, ChevronDown, ChevronUp,
  ShieldCheck, TestTube, Apple, Ban
} from "lucide-react";

interface PredictionResultsProps {
  results: { disease: DiseaseProfile; score: number }[];
  selectedSymptoms: string[];
}

const severityConfig = {
  low: { icon: Shield, label: "Low", className: "text-success bg-success/10" },
  medium: { icon: Info, label: "Medium", className: "text-warning bg-warning/10" },
  high: { icon: AlertTriangle, label: "High", className: "text-destructive bg-destructive/10" },
};

export default function PredictionResults({ results, selectedSymptoms }: PredictionResultsProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">
          Select Your Symptoms
        </h3>
        <p className="text-sm text-muted-foreground max-w-xs">
          Choose symptoms from the panel to get disease predictions based on pattern matching.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted-foreground">
        Top {results.length} possible conditions based on your symptoms
      </p>
      {results.map(({ disease, score }, index) => {
        const severity = severityConfig[disease.severity];
        const SeverityIcon = severity.icon;
        const matchedSymptoms = disease.symptoms.filter((s) =>
          selectedSymptoms.includes(s)
        );
        const percentage = Math.round(score * 100);
        const isExpanded = expandedCard === disease.name;
        const details = DISEASE_DETAILS[disease.name];

        return (
          <div
            key={disease.name}
            className="rounded-xl border border-border bg-card shadow-card transition-all hover:shadow-elevated overflow-hidden"
          >
            <div className="p-3 sm:p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-display font-bold text-xs sm:text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {disease.name}
                    </h4>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${severity.className}`}
                    >
                      <SeverityIcon className="h-3 w-3" />
                      {severity.label} Severity
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-display text-2xl font-bold text-primary">
                    {percentage}%
                  </span>
                  <p className="text-xs text-muted-foreground">match</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 bg-muted rounded-full mb-3 overflow-hidden">
                <div
                  className="h-full rounded-full gradient-medical transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="text-sm text-muted-foreground mb-3">
                {disease.description}
              </p>

              {/* Matched symptoms */}
              <div className="space-y-1 mb-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Matching symptoms ({matchedSymptoms.length}/{disease.symptoms.length}):
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {disease.symptoms.map((s) => {
                    const isMatched = selectedSymptoms.includes(s);
                    return (
                      <span
                        key={s}
                        className={`px-2 py-0.5 rounded text-xs ${
                          isMatched
                            ? "bg-primary/15 text-primary font-medium"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {SYMPTOM_LABELS[s] || s}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Expand button */}
              {details && (
                <button
                  onClick={() => setExpandedCard(isExpanded ? null : disease.name)}
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors pt-2 border-t border-border"
                >
                  {isExpanded ? "Hide" : "View"} Precautions, Tests & Diet
                  {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                </button>
              )}
            </div>

            {/* Expanded details */}
            {isExpanded && details && (
              <div className="border-t border-border bg-secondary/30 p-5 space-y-5 animate-in slide-in-from-top-2 duration-200">
                {/* Precautions */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <h5 className="text-sm font-semibold text-foreground">Precautions</h5>
                  </div>
                  <ul className="space-y-1.5">
                    {details.precautions.map((p, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Tests */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <TestTube className="h-4 w-4 text-primary" />
                    <h5 className="text-sm font-semibold text-foreground">Recommended Tests</h5>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {details.tests.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Diet */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Apple className="h-4 w-4 text-success" />
                      <h5 className="text-sm font-semibold text-foreground">Recommended Diet</h5>
                    </div>
                    <ul className="space-y-1.5">
                      {details.diet.recommended.map((d, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-success mt-0.5">✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <Ban className="h-4 w-4 text-destructive" />
                      <h5 className="text-sm font-semibold text-foreground">Foods to Avoid</h5>
                    </div>
                    <ul className="space-y-1.5">
                      {details.diet.avoid.map((d, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-destructive mt-0.5">✗</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="rounded-lg bg-muted/50 border border-border p-4 mt-6">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong>⚠️ Disclaimer:</strong> This tool is for educational purposes only and should not
          be used as a substitute for professional medical advice, diagnosis, or treatment. Always
          consult a qualified healthcare provider.
        </p>
      </div>
    </div>
  );
}
