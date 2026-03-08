import { useState, useMemo } from "react";
import SymptomSelector from "@/components/SymptomSelector";
import PredictionResults from "@/components/PredictionResults";
import { predictDiseases } from "@/data/diseaseData";
import { Activity, Stethoscope, ListChecks } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

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
        <div className="container max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-10">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-primary-foreground/15 flex items-center justify-center">
                <Stethoscope className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">
                MediPredict
              </h1>
            </div>
            <ThemeToggle />
          </div>
          <p className="text-primary-foreground/80 max-w-lg text-xs sm:text-sm md:text-base">
            Symptom-based multi-disease prediction system. Select your symptoms to
            identify possible conditions using pattern matching analysis.
          </p>
          <div className="flex items-center gap-2 mt-3 sm:mt-4 text-primary-foreground/60 text-[10px] sm:text-xs">
            <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span>6 diseases • 36 symptoms • Weighted pattern matching engine</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container max-w-6xl mx-auto px-3 sm:px-4 py-5 sm:py-8">
        {isMobile ? (
          /* Mobile: full-width results + floating drawer button */
          <div>
            <h2 className="font-display text-base font-semibold text-foreground mb-3">
              Predictions
              {results.length > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  ({results.length} results)
                </span>
              )}
            </h2>
            <PredictionResults results={results} selectedSymptoms={selectedSymptoms} />

            {/* Floating button to open symptom drawer */}
            <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
              <DrawerTrigger asChild>
                <Button
                  className="fixed bottom-5 right-5 z-50 rounded-full h-14 w-14 shadow-elevated gradient-medical text-primary-foreground p-0"
                  size="icon"
                >
                  <ListChecks className="h-6 w-6" />
                  {selectedSymptoms.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
                      {selectedSymptoms.length}
                    </span>
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-h-[85vh]">
                <DrawerHeader className="pb-2">
                  <DrawerTitle className="font-display">Select Symptoms</DrawerTitle>
                </DrawerHeader>
                <div className="px-4 pb-6 overflow-y-auto">
                  <SymptomSelector
                    selected={selectedSymptoms}
                    onToggle={handleToggle}
                    onClear={() => setSelectedSymptoms([])}
                  />
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        ) : (
          /* Desktop: side-by-side layout */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-4">
                <h2 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                  Select Symptoms
                </h2>
                <SymptomSelector
                  selected={selectedSymptoms}
                  onToggle={handleToggle}
                  onClear={() => setSelectedSymptoms([])}
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <h2 className="font-display text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                Predictions
                {results.length > 0 && (
                  <span className="ml-2 text-sm font-normal text-muted-foreground">
                    ({results.length} results)
                  </span>
                )}
              </h2>
              <PredictionResults results={results} selectedSymptoms={selectedSymptoms} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
