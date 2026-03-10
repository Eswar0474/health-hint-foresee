// Only symptoms relevant to the 6 target diseases, verified against training dataset
export const ALL_SYMPTOMS = [
  "itching", "chills", "vomiting", "fatigue", "weight_loss",
  "restlessness", "lethargy", "irregular_sugar_level", "cough", "high_fever",
  "breathlessness", "sweating", "yellowish_skin", "dark_urine", "nausea",
  "loss_of_appetite", "abdominal_pain", "mild_fever", "yellowing_of_eyes",
  "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm",
  "chest_pain", "fast_heart_rate", "obesity", "excessive_hunger",
  "increased_appetite", "polyuria", "family_history", "mucoid_sputum",
  "rusty_sputum", "blood_in_sputum", "headache", "dehydration",
  "weakness_in_limbs",
  // New symptoms
  "dizziness", "muscle_pain", "joint_pain", "back_pain", "mood_swings",
  "anxiety", "irritability", "muscle_wasting", "indigestion", "constipation",
  "diarrhoea", "acidity", "skin_rash", "skin_peeling", "burning_sensation",
  "throat_irritation", "continuous_sneezing", "congestion", "runny_nose",
  "sinus_pressure", "night_sweats", "loss_of_smell", "palpitations",
  "cold_hands_and_feet"
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
  nausea: "Nausea",
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
  polyuria: "Polyuria (Frequent Urination)",
  family_history: "Family History",
  mucoid_sputum: "Mucoid Sputum",
  rusty_sputum: "Rusty Sputum",
  blood_in_sputum: "Blood in Sputum",
  headache: "Headache",
  dehydration: "Dehydration",
  weakness_in_limbs: "Weakness in Limbs",
  dizziness: "Dizziness",
  muscle_pain: "Muscle Pain",
  joint_pain: "Joint Pain",
  back_pain: "Back Pain",
  mood_swings: "Mood Swings",
  anxiety: "Anxiety",
  irritability: "Irritability",
  muscle_wasting: "Muscle Wasting",
  indigestion: "Indigestion",
  constipation: "Constipation",
  diarrhoea: "Diarrhoea",
  acidity: "Acidity",
  skin_rash: "Skin Rash",
  skin_peeling: "Skin Peeling",
  burning_sensation: "Burning Sensation",
  throat_irritation: "Throat Irritation",
  continuous_sneezing: "Continuous Sneezing",
  congestion: "Congestion",
  runny_nose: "Runny Nose",
  sinus_pressure: "Sinus Pressure",
  night_sweats: "Night Sweats",
  loss_of_smell: "Loss of Smell",
  palpitations: "Palpitations",
  cold_hands_and_feet: "Cold Hands & Feet",
};

export const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  "General": ["fatigue", "weight_loss", "restlessness", "lethargy", "malaise", "obesity", "weakness_in_limbs", "dizziness", "muscle_pain", "joint_pain", "back_pain", "muscle_wasting"],
  "Respiratory": ["cough", "breathlessness", "phlegm", "chest_pain", "mucoid_sputum", "rusty_sputum", "blood_in_sputum", "throat_irritation", "continuous_sneezing", "congestion", "runny_nose", "sinus_pressure"],
  "Digestive": ["vomiting", "nausea", "loss_of_appetite", "abdominal_pain", "indigestion", "constipation", "diarrhoea", "acidity"],
  "Fever & Infection": ["chills", "high_fever", "mild_fever", "sweating", "swelled_lymph_nodes", "headache", "dehydration", "night_sweats", "loss_of_smell"],
  "Skin & Appearance": ["itching", "yellowish_skin", "skin_rash", "skin_peeling", "burning_sensation"],
  "Urinary & Metabolic": ["dark_urine", "polyuria", "irregular_sugar_level"],
  "Eyes & Vision": ["blurred_and_distorted_vision", "yellowing_of_eyes"],
  "Circulatory": ["fast_heart_rate", "palpitations", "cold_hands_and_feet"],
  "Mental & Behavioral": ["mood_swings", "anxiety", "irritability"],
  "Other": ["excessive_hunger", "increased_appetite", "family_history"],
};

export interface DiseaseProfile {
  name: string;
  symptoms: string[];
  /** Symptom weights: how important each symptom is for this disease */
  weights: Record<string, number>;
  /** Symptoms that are highly specific / pathognomonic for this disease */
  keySymptoms: string[];
  description: string;
  severity: "low" | "medium" | "high";
}

// Disease profiles verified against training CSV data
// Weights: 3 = pathognomonic/unique, 2 = highly discriminative, 1.5 = important, 1 = common, 0.5 = shared/nonspecific
export const DISEASE_PROFILES: DiseaseProfile[] = [
  {
    name: "Diabetes",
    symptoms: ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level", "blurred_and_distorted_vision", "obesity", "excessive_hunger", "increased_appetite", "polyuria", "dizziness", "irritability", "muscle_wasting", "mood_swings"],
    weights: {
      polyuria: 3, irregular_sugar_level: 3, excessive_hunger: 2.5, increased_appetite: 2.5,
      obesity: 2, blurred_and_distorted_vision: 1.5, restlessness: 1.2, lethargy: 1.2,
      weight_loss: 1, fatigue: 0.5, dizziness: 0.8, irritability: 0.7, muscle_wasting: 0.8, mood_swings: 0.7
    },
    keySymptoms: ["polyuria", "irregular_sugar_level", "excessive_hunger", "increased_appetite"],
    description: "A metabolic disease causing high blood sugar levels due to insulin issues.",
    severity: "high",
  },
  {
    name: "Bronchial Asthma",
    symptoms: ["fatigue", "cough", "high_fever", "breathlessness", "family_history", "mucoid_sputum", "throat_irritation", "congestion", "continuous_sneezing"],
    weights: {
      mucoid_sputum: 3, family_history: 2.5, breathlessness: 2, cough: 1.5, high_fever: 1, fatigue: 0.5, throat_irritation: 0.8, congestion: 0.7, continuous_sneezing: 0.6
    },
    keySymptoms: ["mucoid_sputum", "family_history", "breathlessness"],
    description: "A condition in which airways narrow, swell, and produce extra mucus.",
    severity: "medium",
  },
  {
    name: "Jaundice",
    symptoms: ["itching", "vomiting", "fatigue", "weight_loss", "high_fever", "yellowish_skin", "dark_urine", "abdominal_pain", "nausea", "indigestion", "acidity", "skin_rash", "diarrhoea"],
    weights: {
      yellowish_skin: 3, dark_urine: 2.5, itching: 2, nausea: 1.5, abdominal_pain: 1.5,
      vomiting: 1.2, high_fever: 1, weight_loss: 1, fatigue: 0.5, indigestion: 0.7, acidity: 0.6, skin_rash: 0.8, diarrhoea: 0.6
    },
    keySymptoms: ["yellowish_skin", "dark_urine", "itching"],
    description: "Yellowing of the skin and eyes due to high bilirubin levels.",
    severity: "high",
  },
  {
    name: "Tuberculosis",
    symptoms: ["chills", "vomiting", "fatigue", "weight_loss", "cough", "high_fever", "breathlessness", "sweating", "loss_of_appetite", "mild_fever", "yellowing_of_eyes", "swelled_lymph_nodes", "malaise", "phlegm", "chest_pain", "blood_in_sputum"],
    weights: {
      blood_in_sputum: 3, yellowing_of_eyes: 2.5, swelled_lymph_nodes: 2, mild_fever: 2,
      loss_of_appetite: 1.5, malaise: 1.5, phlegm: 1.3, chest_pain: 1.3, cough: 1.2,
      breathlessness: 1, sweating: 1, chills: 1, high_fever: 1, weight_loss: 1,
      vomiting: 0.8, fatigue: 0.5
    },
    keySymptoms: ["blood_in_sputum", "yellowing_of_eyes", "swelled_lymph_nodes"],
    description: "A potentially serious infectious bacterial disease affecting the lungs.",
    severity: "high",
  },
  {
    name: "Pneumonia",
    symptoms: ["chills", "fatigue", "cough", "high_fever", "breathlessness", "sweating", "malaise", "phlegm", "chest_pain", "fast_heart_rate", "rusty_sputum"],
    weights: {
      rusty_sputum: 3, fast_heart_rate: 2.5, malaise: 1.5, phlegm: 1.3, chest_pain: 1.3,
      sweating: 1.2, breathlessness: 1.2, cough: 1, high_fever: 1, chills: 1, fatigue: 0.5
    },
    keySymptoms: ["rusty_sputum", "fast_heart_rate"],
    description: "Infection that inflames air sacs in one or both lungs.",
    severity: "high",
  },
  {
    name: "Heart Attack",
    symptoms: ["vomiting", "breathlessness", "sweating", "chest_pain", "nausea", "weakness_in_limbs"],
    weights: {
      chest_pain: 3, breathlessness: 2.5, sweating: 2, weakness_in_limbs: 2,
      nausea: 1.5, vomiting: 1.5
    },
    keySymptoms: ["chest_pain", "breathlessness", "sweating"],
    description: "Occurs when blood flow to the heart is blocked. Requires immediate medical attention.",
    severity: "high",
  },
];

// Compute IDF: symptoms appearing in fewer diseases are more discriminative
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

  const selectedSet = new Set(selectedSymptoms);

  const results = DISEASE_PROFILES.map((disease) => {
    const diseaseSymptomSet = new Set(disease.symptoms);

    const matchedSymptoms = selectedSymptoms.filter((s) => diseaseSymptomSet.has(s));
    const unmatchedSelected = selectedSymptoms.filter((s) => !diseaseSymptomSet.has(s));

    if (matchedSymptoms.length === 0) return { disease, score: 0 };

    // 1. Weighted coverage: fraction of disease's importance covered
    let weightedMatch = 0;
    let totalWeight = 0;
    disease.symptoms.forEach((s) => {
      const w = (disease.weights[s] || 1) * (symptomIDF[s] || 1);
      totalWeight += w;
      if (selectedSet.has(s)) {
        weightedMatch += w;
      }
    });
    const weightedCoverage = totalWeight > 0 ? weightedMatch / totalWeight : 0;

    // 2. Key symptom bonus: matching pathognomonic symptoms is critical
    const keyMatched = disease.keySymptoms.filter((s) => selectedSet.has(s)).length;
    const keyTotal = disease.keySymptoms.length;
    const keyBonus = keyTotal > 0 ? (keyMatched / keyTotal) * 0.15 : 0;

    // 3. Precision: penalize irrelevant symptoms more aggressively
    const relevanceRatio = matchedSymptoms.length / selectedSymptoms.length;
    const precisionFactor = 0.7 + 0.3 * relevanceRatio;

    // 4. Coverage completeness bonus: reward matching high % of disease symptoms
    const rawCoverage = matchedSymptoms.length / disease.symptoms.length;
    const completenessBonus = rawCoverage >= 0.8 ? 0.10 : rawCoverage >= 0.6 ? 0.05 : 0;

    // 5. Specificity bonus: unique symptoms matched
    let specificityBonus = 0;
    matchedSymptoms.forEach((s) => {
      if (symptomDocFreq[s] === 1) specificityBonus += 0.06;
      else if (symptomDocFreq[s] === 2) specificityBonus += 0.03;
    });

    // Final composite score
    const rawScore = (weightedCoverage * 0.70 + keyBonus + completenessBonus + specificityBonus) * precisionFactor;

    // Scale to make scores more meaningful (cap at 0.99)
    const score = Math.min(rawScore, 0.99);

    return { disease, score };
  });

  return results
    .filter((r) => r.score > 0.03)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
