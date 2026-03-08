// Symptom names extracted from the dataset
export const ALL_SYMPTOMS = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering",
  "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue",
  "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", "fatigue",
  "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", "weight_loss",
  "restlessness", "lethargy", "patches_in_throat", "irregular_sugar_level", "cough",
  "high_fever", "sunken_eyes", "breathlessness", "sweating", "dehydration",
  "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea",
  "loss_of_appetite", "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain",
  "diarrhoea", "mild_fever", "yellow_urine", "yellowing_of_eyes", "acute_liver_failure",
  "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision",
  "phlegm", "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose",
  "congestion", "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements",
  "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness",
  "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels",
  "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties", "excessive_hunger",
  "extra_marital_contacts", "drying_and_tingling_lips", "slurred_speech", "knee_pain", "hip_joint_pain",
  "muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", "spinning_movements",
  "loss_of_balance", "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort",
  "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching",
  "toxic_look_typhos", "depression", "irritability", "muscle_pain", "altered_sensorium",
  "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches",
  "watering_from_eyes", "increased_appetite", "polyuria", "family_history", "mucoid_sputum",
  "rusty_sputum", "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion",
  "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen",
  "history_of_alcohol_consumption", "fluid_overload_2", "blood_in_sputum", "prominent_veins_on_calf",
  "palpitations", "painful_walking", "pus_filled_pimples", "blackheads", "scurring",
  "skin_peeling", "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails",
  "blister", "red_sore_around_nose", "yellow_crust_ooze"
] as const;

// Symptom display names (human-readable)
export const SYMPTOM_LABELS: Record<string, string> = {
  itching: "Itching",
  skin_rash: "Skin Rash",
  nodal_skin_eruptions: "Nodal Skin Eruptions",
  continuous_sneezing: "Continuous Sneezing",
  shivering: "Shivering",
  chills: "Chills",
  joint_pain: "Joint Pain",
  stomach_pain: "Stomach Pain",
  acidity: "Acidity",
  ulcers_on_tongue: "Ulcers on Tongue",
  muscle_wasting: "Muscle Wasting",
  vomiting: "Vomiting",
  burning_micturition: "Burning Micturition",
  spotting_urination: "Spotting Urination",
  fatigue: "Fatigue",
  weight_gain: "Weight Gain",
  anxiety: "Anxiety",
  cold_hands_and_feets: "Cold Hands & Feet",
  mood_swings: "Mood Swings",
  weight_loss: "Weight Loss",
  restlessness: "Restlessness",
  lethargy: "Lethargy",
  patches_in_throat: "Patches in Throat",
  irregular_sugar_level: "Irregular Sugar Level",
  cough: "Cough",
  high_fever: "High Fever",
  sunken_eyes: "Sunken Eyes",
  breathlessness: "Breathlessness",
  sweating: "Sweating",
  dehydration: "Dehydration",
  indigestion: "Indigestion",
  headache: "Headache",
  yellowish_skin: "Yellowish Skin",
  dark_urine: "Dark Urine",
  nausea: "Nausea",
  loss_of_appetite: "Loss of Appetite",
  pain_behind_the_eyes: "Pain Behind the Eyes",
  back_pain: "Back Pain",
  constipation: "Constipation",
  abdominal_pain: "Abdominal Pain",
  diarrhoea: "Diarrhoea",
  mild_fever: "Mild Fever",
  yellow_urine: "Yellow Urine",
  yellowing_of_eyes: "Yellowing of Eyes",
  acute_liver_failure: "Acute Liver Failure",
  fluid_overload: "Fluid Overload",
  swelling_of_stomach: "Swelling of Stomach",
  swelled_lymph_nodes: "Swelled Lymph Nodes",
  malaise: "Malaise",
  blurred_and_distorted_vision: "Blurred & Distorted Vision",
  phlegm: "Phlegm",
  throat_irritation: "Throat Irritation",
  redness_of_eyes: "Redness of Eyes",
  sinus_pressure: "Sinus Pressure",
  runny_nose: "Runny Nose",
  congestion: "Congestion",
  chest_pain: "Chest Pain",
  weakness_in_limbs: "Weakness in Limbs",
  fast_heart_rate: "Fast Heart Rate",
  pain_during_bowel_movements: "Pain During Bowel Movements",
  pain_in_anal_region: "Pain in Anal Region",
  bloody_stool: "Bloody Stool",
  irritation_in_anus: "Irritation in Anus",
  neck_pain: "Neck Pain",
  dizziness: "Dizziness",
  cramps: "Cramps",
  bruising: "Bruising",
  obesity: "Obesity",
  swollen_legs: "Swollen Legs",
  swollen_blood_vessels: "Swollen Blood Vessels",
  puffy_face_and_eyes: "Puffy Face & Eyes",
  enlarged_thyroid: "Enlarged Thyroid",
  brittle_nails: "Brittle Nails",
  swollen_extremeties: "Swollen Extremities",
  excessive_hunger: "Excessive Hunger",
  extra_marital_contacts: "Extra Marital Contacts",
  drying_and_tingling_lips: "Drying & Tingling Lips",
  slurred_speech: "Slurred Speech",
  knee_pain: "Knee Pain",
  hip_joint_pain: "Hip Joint Pain",
  muscle_weakness: "Muscle Weakness",
  stiff_neck: "Stiff Neck",
  swelling_joints: "Swelling Joints",
  movement_stiffness: "Movement Stiffness",
  spinning_movements: "Spinning Movements",
  loss_of_balance: "Loss of Balance",
  unsteadiness: "Unsteadiness",
  weakness_of_one_body_side: "Weakness of One Body Side",
  loss_of_smell: "Loss of Smell",
  bladder_discomfort: "Bladder Discomfort",
  foul_smell_of_urine: "Foul Smell of Urine",
  continuous_feel_of_urine: "Continuous Feel of Urine",
  passage_of_gases: "Passage of Gases",
  internal_itching: "Internal Itching",
  toxic_look_typhos: "Toxic Look (Typhos)",
  depression: "Depression",
  irritability: "Irritability",
  muscle_pain: "Muscle Pain",
  altered_sensorium: "Altered Sensorium",
  red_spots_over_body: "Red Spots Over Body",
  belly_pain: "Belly Pain",
  abnormal_menstruation: "Abnormal Menstruation",
  dischromic_patches: "Dischromic Patches",
  watering_from_eyes: "Watering from Eyes",
  increased_appetite: "Increased Appetite",
  polyuria: "Polyuria",
  family_history: "Family History",
  mucoid_sputum: "Mucoid Sputum",
  rusty_sputum: "Rusty Sputum",
  lack_of_concentration: "Lack of Concentration",
  visual_disturbances: "Visual Disturbances",
  receiving_blood_transfusion: "Receiving Blood Transfusion",
  receiving_unsterile_injections: "Receiving Unsterile Injections",
  coma: "Coma",
  stomach_bleeding: "Stomach Bleeding",
  distention_of_abdomen: "Distention of Abdomen",
  history_of_alcohol_consumption: "History of Alcohol Consumption",
  fluid_overload_2: "Fluid Overload",
  blood_in_sputum: "Blood in Sputum",
  prominent_veins_on_calf: "Prominent Veins on Calf",
  palpitations: "Palpitations",
  painful_walking: "Painful Walking",
  pus_filled_pimples: "Pus Filled Pimples",
  blackheads: "Blackheads",
  scurring: "Scurring",
  skin_peeling: "Skin Peeling",
  silver_like_dusting: "Silver Like Dusting",
  small_dents_in_nails: "Small Dents in Nails",
  inflammatory_nails: "Inflammatory Nails",
  blister: "Blister",
  red_sore_around_nose: "Red Sore Around Nose",
  yellow_crust_ooze: "Yellow Crust Ooze",
};

// Symptom categories for better UX
export const SYMPTOM_CATEGORIES: Record<string, string[]> = {
  "General": ["fatigue", "weight_loss", "restlessness", "lethargy", "malaise", "obesity"],
  "Skin & Appearance": ["itching", "yellowish_skin"],
  "Respiratory": ["cough", "breathlessness", "phlegm", "chest_pain", "mucoid_sputum", "rusty_sputum", "blood_in_sputum"],
  "Digestive": ["vomiting", "loss_of_appetite", "abdominal_pain"],
  "Fever & Infection": ["chills", "high_fever", "mild_fever", "sweating", "swelled_lymph_nodes"],
  "Urinary & Metabolic": ["dark_urine", "polyuria", "irregular_sugar_level"],
  "Eyes & Vision": ["blurred_and_distorted_vision", "yellowing_of_eyes"],
  "Circulatory": ["fast_heart_rate"],
  "Other": ["excessive_hunger", "increased_appetite", "family_history"],
};

// Disease profiles: disease name -> array of symptom keys that are typically present
// Derived from the testing dataset (representative symptom patterns per disease)
export interface DiseaseProfile {
  name: string;
  symptoms: string[];
  description: string;
  severity: "low" | "medium" | "high";
}

export const DISEASE_PROFILES: DiseaseProfile[] = [
  { name: "Diabetes", symptoms: ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level", "blurred_and_distorted_vision", "obesity", "excessive_hunger", "increased_appetite", "polyuria"], description: "A metabolic disease causing high blood sugar levels due to insulin issues.", severity: "high" },
  { name: "Bronchial Asthma", symptoms: ["fatigue", "cough", "high_fever", "breathlessness", "family_history", "mucoid_sputum"], description: "A condition in which airways narrow, swell, and produce extra mucus.", severity: "medium" },
  { name: "Jaundice", symptoms: ["itching", "vomiting", "fatigue", "weight_loss", "high_fever", "yellowish_skin", "dark_urine", "abdominal_pain"], description: "Yellowing of the skin and eyes due to high bilirubin levels.", severity: "high" },
  { name: "Tuberculosis", symptoms: ["chills", "vomiting", "fatigue", "weight_loss", "cough", "high_fever", "breathlessness", "sweating", "loss_of_appetite", "mild_fever", "yellowing_of_eyes", "swelled_lymph_nodes", "malaise", "phlegm", "chest_pain", "blood_in_sputum"], description: "A potentially serious infectious bacterial disease affecting the lungs.", severity: "high" },
  { name: "Pneumonia", symptoms: ["chills", "fatigue", "cough", "high_fever", "breathlessness", "sweating", "malaise", "phlegm", "fast_heart_rate", "chest_pain", "rusty_sputum"], description: "Infection that inflames air sacs in one or both lungs.", severity: "high" },
  { name: "Heart Attack", symptoms: ["vomiting", "breathlessness", "sweating", "chest_pain"], description: "Occurs when blood flow to the heart is blocked. Requires immediate medical attention.", severity: "high" },
];

// Prediction function using Jaccard similarity
export function predictDiseases(selectedSymptoms: string[]): { disease: DiseaseProfile; score: number }[] {
  if (selectedSymptoms.length === 0) return [];

  const results = DISEASE_PROFILES.map((disease) => {
    const diseaseSymptomSet = new Set(disease.symptoms);
    const selectedSet = new Set(selectedSymptoms);

    // Intersection
    const intersection = selectedSymptoms.filter((s) => diseaseSymptomSet.has(s)).length;
    // Union
    const union = new Set([...diseaseSymptomSet, ...selectedSet]).size;
    
    // Jaccard similarity
    const jaccard = union > 0 ? intersection / union : 0;
    
    // Also weight by how many of the disease's symptoms are matched
    const coverageOfDisease = disease.symptoms.length > 0 ? intersection / disease.symptoms.length : 0;
    
    // Combined score: weighted average
    const score = jaccard * 0.4 + coverageOfDisease * 0.6;

    return { disease, score };
  });

  return results
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
