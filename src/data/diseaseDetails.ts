export interface DiseaseDetails {
  precautions: string[];
  tests: string[];
  diet: { recommended: string[]; avoid: string[] };
}

export const DISEASE_DETAILS: Record<string, DiseaseDetails> = {
  Diabetes: {
    precautions: [
      "Monitor blood sugar levels regularly",
      "Exercise for at least 30 minutes daily",
      "Maintain a healthy body weight",
      "Take prescribed medications on time",
      "Get regular eye and foot checkups",
      "Stay hydrated and manage stress",
    ],
    tests: [
      "Fasting Blood Sugar (FBS)",
      "HbA1c (Glycated Hemoglobin)",
      "Oral Glucose Tolerance Test (OGTT)",
      "Random Blood Sugar Test",
      "Lipid Profile",
      "Kidney Function Test (Creatinine, BUN)",
    ],
    diet: {
      recommended: [
        "Whole grains (brown rice, oats, quinoa)",
        "Leafy greens and non-starchy vegetables",
        "Lean proteins (fish, chicken, tofu)",
        "Nuts and seeds (almonds, walnuts, chia)",
        "Legumes (lentils, chickpeas, beans)",
        "Low-glycemic fruits (berries, apples, pears)",
      ],
      avoid: [
        "Sugary drinks and sodas",
        "White bread and refined carbs",
        "Fried and processed foods",
        "Sweets, pastries, and candy",
        "Excessive alcohol",
        "High-sugar fruits (mangoes, grapes in excess)",
      ],
    },
  },
  "Bronchial Asthma": {
    precautions: [
      "Avoid known allergens and triggers",
      "Always carry a rescue inhaler",
      "Follow your asthma action plan",
      "Keep living spaces dust-free and well-ventilated",
      "Avoid smoking and secondhand smoke",
      "Get annual flu vaccinations",
    ],
    tests: [
      "Spirometry (Lung Function Test)",
      "Peak Expiratory Flow (PEF) Test",
      "Chest X-Ray",
      "Allergy Skin Prick Test",
      "Blood IgE Levels",
      "Methacholine Challenge Test",
    ],
    diet: {
      recommended: [
        "Fruits rich in Vitamin C (oranges, strawberries)",
        "Omega-3 fatty fish (salmon, mackerel)",
        "Ginger and turmeric (anti-inflammatory)",
        "Green leafy vegetables (spinach, kale)",
        "Garlic and onions",
        "Warm fluids and herbal teas",
      ],
      avoid: [
        "Sulfite-containing foods (dried fruits, wine)",
        "Processed and packaged foods",
        "Dairy products (if triggering mucus)",
        "Cold drinks and ice cream",
        "Artificial preservatives and colorings",
        "Gas-producing foods (beans, cabbage)",
      ],
    },
  },
  Jaundice: {
    precautions: [
      "Get plenty of rest and avoid strenuous activity",
      "Drink adequate fluids to stay hydrated",
      "Avoid alcohol completely",
      "Practice good hygiene and sanitation",
      "Avoid self-medication (especially acetaminophen)",
      "Follow up with liver function tests regularly",
    ],
    tests: [
      "Liver Function Test (LFT)",
      "Total & Direct Bilirubin",
      "Complete Blood Count (CBC)",
      "Hepatitis Panel (A, B, C, E)",
      "Ultrasound of Abdomen",
      "Prothrombin Time (PT/INR)",
    ],
    diet: {
      recommended: [
        "Fresh fruits (papaya, mango, pineapple)",
        "Boiled or steamed vegetables",
        "Sugarcane juice and lemon water",
        "Light soups and broths",
        "Whole grains (rice, oatmeal)",
        "Coconut water for hydration",
      ],
      avoid: [
        "Alcohol and carbonated drinks",
        "Oily, spicy, and fried foods",
        "Red meat and heavy proteins",
        "Processed and canned foods",
        "Saturated fats and butter",
        "Coffee and strong tea",
      ],
    },
  },
  Tuberculosis: {
    precautions: [
      "Complete the full course of TB medication (6–9 months)",
      "Cover mouth when coughing or sneezing",
      "Ensure proper ventilation in living spaces",
      "Isolate during the infectious period",
      "Get regular sputum tests to monitor progress",
      "Maintain good nutrition and rest",
    ],
    tests: [
      "Mantoux Tuberculin Skin Test (TST)",
      "Sputum Smear Microscopy (AFB)",
      "Chest X-Ray",
      "GeneXpert MTB/RIF Test",
      "Interferon-Gamma Release Assay (IGRA)",
      "CT Scan of Chest (if needed)",
    ],
    diet: {
      recommended: [
        "High-protein foods (eggs, fish, chicken, lentils)",
        "Calorie-rich whole grains",
        "Vitamin A & C rich fruits (carrots, oranges)",
        "Green vegetables (broccoli, spinach)",
        "Nuts, seeds, and healthy fats",
        "Milk and dairy products",
      ],
      avoid: [
        "Alcohol and tobacco products",
        "Refined sugar and sweets",
        "Processed and junk food",
        "High-fat fried foods",
        "Caffeine in excess",
        "Raw or undercooked meat",
      ],
    },
  },
  Pneumonia: {
    precautions: [
      "Complete the prescribed antibiotic course",
      "Rest and avoid overexertion",
      "Stay well-hydrated with warm fluids",
      "Use a humidifier to ease breathing",
      "Wash hands frequently to prevent spread",
      "Get pneumococcal and flu vaccines",
    ],
    tests: [
      "Chest X-Ray",
      "Complete Blood Count (CBC)",
      "Sputum Culture & Sensitivity",
      "Blood Culture",
      "Pulse Oximetry",
      "CT Scan of Chest (for complications)",
    ],
    diet: {
      recommended: [
        "Warm soups and broths",
        "Protein-rich foods (eggs, lean chicken)",
        "Vitamin C foods (citrus, bell peppers)",
        "Whole grains for sustained energy",
        "Probiotic-rich yogurt",
        "Warm water with honey and lemon",
      ],
      avoid: [
        "Cold foods and beverages",
        "Dairy products (may increase mucus)",
        "Fried and processed foods",
        "Salty snacks and chips",
        "Alcohol and caffeinated drinks",
        "Sugary foods and desserts",
      ],
    },
  },
  "Heart Attack": {
    precautions: [
      "Call emergency services (911/108) immediately",
      "Chew an aspirin if not allergic (during emergency)",
      "Avoid physical exertion and stay calm",
      "Follow cardiac rehabilitation program post-recovery",
      "Take prescribed heart medications regularly",
      "Monitor blood pressure and cholesterol levels",
    ],
    tests: [
      "ECG / EKG (Electrocardiogram)",
      "Troponin Blood Test (Cardiac Markers)",
      "Echocardiogram",
      "Coronary Angiography",
      "Lipid Profile",
      "Stress Test (Treadmill Test)",
    ],
    diet: {
      recommended: [
        "Omega-3 rich fish (salmon, sardines)",
        "Fresh fruits and vegetables daily",
        "Whole grains (oats, brown rice, whole wheat)",
        "Nuts (almonds, walnuts) in moderation",
        "Olive oil and healthy fats",
        "Legumes and beans",
      ],
      avoid: [
        "Trans fats and hydrogenated oils",
        "Red meat and processed meats",
        "Excessive salt and sodium",
        "Sugary beverages and sweets",
        "Fried and fast foods",
        "Alcohol and smoking (strictly avoid)",
      ],
    },
  },
};
