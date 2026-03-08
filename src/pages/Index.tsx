import { useState, useMemo } from "react";
import SymptomSelector from "@/components/SymptomSelector";
import PredictionResults from "@/components/PredictionResults";
import { predictDiseases } from "@/data/diseaseData";
import { Activity, Stethoscope } from "lucide-react";

const Index = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  const handleToggle = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const results = useMemo(
    () => predictDiseases(selectedSymptoms),
    [selectedSymptoms]
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground">
        <div className="container max-w-6xl mx-auto px-4 py-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
              <Stethoscope className="h-5 w-5" />
            </div>
            <h1 className="font-display text-2xl md:text-3xl font-bold">
              MediPredict
            </h1>
          </div>
          <p className="text-primary-foreground/80 max-w-lg text-sm md:text-base">
            Symptom-based multi-disease prediction system. Select your symptoms to
            identify possible conditions using pattern matching analysis.
          </p>
          <div className="flex items-center gap-2 mt-4 text-primary-foreground/60 text-xs">
            <Activity className="h-3.5 w-3.5" />
            <span>6 diseases • 32 symptoms • Weighted pattern matching engine</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Symptom selector */}
          <div className="lg:col-span-2">
            <div className="sticky top-4">
              <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                Select Symptoms
              </h2>
              <SymptomSelector
                selected={selectedSymptoms}
                onToggle={handleToggle}
                onClear={() => setSelectedSymptoms([])}
              />
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-lg font-semibold text-foreground mb-4">
              Predictions
              {results.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({results.length} results)
                </span>
              )}
            </h2>
            <PredictionResults
              results={results}
              selectedSymptoms={selectedSymptoms}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
