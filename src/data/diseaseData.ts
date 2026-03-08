// Only symptoms relevant to the 6 target diseases
export const ALL_SYMPTOMS = [
  "itching", "chills", "vomiting", "fatigue", "weight_loss",
  "restlessness", "lethargy", "irregular_sugar_level", "cough", "high_fever",
  "breathlessness", "sweating", "yellowish_skin", "dark_urine", "loss_of_appetite",
  "abdominal_pain", "mild_fever", "yellowing_of_eyes", "swelled_lymph_nodes", "malaise",
  "blurred_and_distorted_vision", "phlegm", "chest_pain", "fast_heart_rate", "obesity",
  "excessive_hunger", "increased_appetite", "polyuria", "family_history", "mucoid_sputum",
  "rusty_sputum", "blood_in_sputum"
] as const;

export const SYMPTOM_LABELS: Record<string, string> = {
  itching: "Itching",
  chills: "Chills",
  vomiting: "Vomiting",
  fatigue: "Fatigue",
  weight_loss: "Weight Loss",
  restlessness: "Restlessness",
  lethargy: "Lethargy",
  irregular_sugar_level: "Irregular Sugar Level",
  cough: "Cough",
  high_fever: "High Fever",
  breathlessness: "Breathlessness",
  sweating: "Sweating",
  yellowish_skin: "Yellowish Skin",
  dark_urine: "Dark Urine",
  loss_of_appetite: "Loss of Appetite",
  abdominal_pain: "Abdominal Pain",
  mild_fever: "Mild Fever",
  yellowing_of_eyes: "Yellowing of Eyes",
  swelled_lymph_nodes: "Swelled Lymph Nodes",
  malaise: "Malaise",
  blurred_and_distorted_vision: "Blurred & Distorted Vision",
  phlegm: "Phlegm",
  chest_pain: "Chest Pain",
  fast_heart_rate: "Fast Heart Rate",
  obesity: "Obesity",
  excessive_hunger: "Excessive Hunger",
  increased_appetite: "Increased Appetite",
  polyuria: "Polyuria",
  family_history: "Family History",
  mucoid_sputum: "Mucoid Sputum",
  rusty_sputum: "Rusty Sputum",
  blood_in_sputum: "Blood in Sputum",
};

export const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  "General": ["fatigue", "weight_loss", "restlessness", "lethargy", "malaise", "obesity"],
  "Respiratory": ["cough", "breathlessness", "phlegm", "chest_pain", "mucoid_sputum", "rusty_sputum", "blood_in_sputum"],
  "Digestive": ["vomiting", "loss_of_appetite", "abdominal_pain"],
  "Fever & Infection": ["chills", "high_fever", "mild_fever", "sweating", "swelled_lymph_nodes"],
  "Skin & Appearance": ["itching", "yellowish_skin"],
  "Urinary & Metabolic": ["dark_urine", "polyuria", "irregular_sugar_level"],
  "Eyes & Vision": ["blurred_and_distorted_vision", "yellowing_of_eyes"],
  "Circulatory": ["fast_heart_rate"],
  "Other": ["excessive_hunger", "increased_appetite", "family_history"],
};

export interface DiseaseProfile {
  name: string;
  symptoms: string[];
  /** Symptom weights: how important each symptom is (1 = normal, 2 = highly discriminative) */
  weights: Record<string, number>;
  description: string;
  severity: "low" | "medium" | "high";
}

// Symptom weights derived from training data frequency and uniqueness
export const DISEASE_PROFILES: DiseaseProfile[] = [
  {
    name: "Diabetes",
    symptoms: ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level", "blurred_and_distorted_vision", "obesity", "excessive_hunger", "increased_appetite", "polyuria"],
    weights: { polyuria: 2, irregular_sugar_level: 2, excessive_hunger: 2, increased_appetite: 2, obesity: 1.8, blurred_and_distorted_vision: 1.5, restlessness: 1.3, lethargy: 1.3, weight_loss: 1, fatigue: 0.8 },
    description: "A metabolic disease causing high blood sugar levels due to insulin issues.",
    severity: "high",
  },
  {
    name: "Bronchial Asthma",
    symptoms: ["fatigue", "cough", "high_fever", "breathlessness", "family_history", "mucoid_sputum"],
    weights: { mucoid_sputum: 2, family_history: 2, breathlessness: 1.5, cough: 1.2, high_fever: 1, fatigue: 0.8 },
    description: "A condition in which airways narrow, swell, and produce extra mucus.",
    severity: "medium",
  },
  {
    name: "Jaundice",
    symptoms: ["itching", "vomiting", "fatigue", "weight_loss", "high_fever", "yellowish_skin", "dark_urine", "abdominal_pain"],
    weights: { yellowish_skin: 2, dark_urine: 2, itching: 1.8, abdominal_pain: 1.3, vomiting: 1.2, high_fever: 1, weight_loss: 1, fatigue: 0.8 },
    description: "Yellowing of the skin and eyes due to high bilirubin levels.",
    severity: "high",
  },
  {
    name: "Tuberculosis",
    symptoms: ["chills", "vomiting", "fatigue", "weight_loss", "cough", "high_fever", "breathlessness", "sweating", "loss_of_appetite", "mild_fever", "yellowing_of_eyes", "swelled_lymph_nodes", "malaise", "phlegm", "chest_pain", "blood_in_sputum"],
    weights: { blood_in_sputum: 2, yellowing_of_eyes: 1.8, swelled_lymph_nodes: 1.5, mild_fever: 1.5, loss_of_appetite: 1.3, malaise: 1.2, phlegm: 1.2, chest_pain: 1.2, cough: 1.1, breathlessness: 1, sweating: 1, chills: 1, high_fever: 1, weight_loss: 1, vomiting: 0.9, fatigue: 0.8 },
    description: "A potentially serious infectious bacterial disease affecting the lungs.",
    severity: "high",
  },
  {
    name: "Pneumonia",
    symptoms: ["chills", "fatigue", "cough", "high_fever", "breathlessness", "sweating", "malaise", "phlegm", "chest_pain", "fast_heart_rate", "rusty_sputum"],
    weights: { rusty_sputum: 2, fast_heart_rate: 1.8, malaise: 1.3, phlegm: 1.2, chest_pain: 1.2, sweating: 1.1, breathlessness: 1.1, cough: 1, high_fever: 1, chills: 1, fatigue: 0.8 },
    description: "Infection that inflames air sacs in one or both lungs.",
    severity: "high",
  },
  {
    name: "Heart Attack",
    symptoms: ["vomiting", "breathlessness", "sweating", "chest_pain"],
    weights: { chest_pain: 2, breathlessness: 1.8, sweating: 1.5, vomiting: 1.3 },
    description: "Occurs when blood flow to the heart is blocked. Requires immediate medical attention.",
    severity: "high",
  },
];

// Compute IDF: symptoms in fewer diseases are more discriminative
const symptomDocFreq: Record<string, number> = {};
DISEASE_PROFILES.forEach((d) => {
  d.symptoms.forEach((s) => {
    symptomDocFreq[s] = (symptomDocFreq[s] || 0) + 1;
  });
});
const totalDiseases = DISEASE_PROFILES.length;
const symptomIDF: Record<string, number> = {};
Object.entries(symptomDocFreq).forEach(([s, freq]) => {
  symptomIDF[s] = Math.log(totalDiseases / freq) + 1;
});

export function predictDiseases(selectedSymptoms: string[]): { disease: DiseaseProfile; score: number }[] {
  if (selectedSymptoms.length === 0) return [];

  const results = DISEASE_PROFILES.map((disease) => {
    const diseaseSymptomSet = new Set(disease.symptoms);
    const selectedSet = new Set(selectedSymptoms);

    const matchedSymptoms = selectedSymptoms.filter((s) => diseaseSymptomSet.has(s));
    const unmatchedSelected = selectedSymptoms.filter((s) => !diseaseSymptomSet.has(s));
    
    if (matchedSymptoms.length === 0) return { disease, score: 0 };

    // Weighted match score using symptom importance and IDF
    let weightedMatch = 0;
    let totalWeight = 0;
    disease.symptoms.forEach((s) => {
      const w = (disease.weights[s] || 1) * (symptomIDF[s] || 1);
      totalWeight += w;
      if (selectedSet.has(s)) {
        weightedMatch += w;
      }
    });

    // Coverage: what fraction of the disease's weighted symptoms are matched
    const weightedCoverage = totalWeight > 0 ? weightedMatch / totalWeight : 0;

    // Precision penalty: penalize selecting many irrelevant symptoms
    const precisionPenalty = 1 - (unmatchedSelected.length / (selectedSymptoms.length + disease.symptoms.length)) * 0.5;

    // Specificity bonus: matching unique symptoms gives extra credit
    let specificityBonus = 0;
    matchedSymptoms.forEach((s) => {
      if (symptomDocFreq[s] === 1) specificityBonus += 0.08;
      else if (symptomDocFreq[s] === 2) specificityBonus += 0.04;
    });

    // Final score
    const score = Math.min(
      (weightedCoverage * 0.75 + specificityBonus) * precisionPenalty,
      0.99
    );

    return { disease, score };
  });

  return results
    .filter((r) => r.score > 0.02)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
