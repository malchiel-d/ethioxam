const quizData = {
  bio: [
    {
      question: "Which one of the following Ethiopian biological research institutes is known for housing a major gene bank in Africa?",
      choices: {
        a: "Addis Ababa University Biology Department",
        b: "Institute of Biodiversity Conservation",
        c: "Aklilu Lemma Institute of Pathobiology",
        d: "Armauer Hansen Research Institute"
      },
      correct: "b"
    },
    {
      question: "A grade 12 student marked two dots close to each other using a pen on a piece of paper and observed them under a microscope. The two dots appeared well separated under the microscope. This was due to",
      choices: {
        a: "resolution",
        b: "magnification",
        c: "staining",
        d: "mounting"
      },
      correct: "a"
    },
    {
      question: "From the following alternatives select the common features that are found both in animal and plant cells.",
      choices: {
        a: "Cell membrane, nucleus, cytoplasm, lysosome and Golgi apparatus",
        b: "Cell membrane, nucleus, cytoplasm, mitochondria and endoplasmic reticulum",
        c: "Cell membrane, nucleus, cytoplasm, chloroplast and Golgi apparatus",
        d: "Cell membrane, nucleus, cytoplasm, large vacuole and Golgi apparatus"
      },
      correct: "b"
    },
    {
      question: "What will happen to the potato slice in group I (hypertonic solution) and group II (hypotonic solution)?",
      choices: {
        a: "Group I: turgid; Group II: flaccid",
        b: "Group I: haemolyzed; Group II: flaccid",
        c: "Group I: flaccid; Group II: turgid",
        d: "Group I: turgid; Group II: no change"
      },
      correct: "c"
    },
    {
      question: "A man eats only vegetables, beans, banana and orange for one week. What nutrients are most likely missed in his meal to be a balanced diet?",
      choices: {
        a: "Carbohydrates",
        b: "Lipids",
        c: "Proteins",
        d: "Minerals"
      },
      correct: "b"
    },
    {
      question: "Which of the following is correct about the process of digestion or absorption of food in the small intestine?",
      choices: {
        a: "Proteins are converted into amino acids by hydrochloric acid and amylase.",
        b: "Bile emulsifies fats to increase surface area for lipase.",
        c: "Water is reabsorbed into the small intestine and wastes are excreted.",
        d: "Glucose and non-hydrolyzed starch are absorbed through the lacteal."
      },
      correct: "b"
    },
    {
      question: "In order to prove enzymatic digestion begins in the mouth, what type of food sample and testing solution should be used?",
      choices: {
        a: "Potato and iodine solution",
        b: "Meat and Benedict's solution",
        c: "Fish and sodium hydroxide solution",
        d: "Bread and copper sulphate solution"
      },
      correct: "a"
    },
    {
      question: "Compared to inhaled air, what are the percentages of nitrogen, oxygen, and carbon dioxide in exhaled air, respectively?",
      choices: {
        a: "80%, 16% and 4%",
        b: "80%, 4% and 16%",
        c: "16%, 4% and 80%",
        d: "4%, 16% and 80%"
      },
      correct: "a"
    },
    {
      question: "Which student setup plans to demonstrate the presence of water vapour and carbon dioxide, respectively?",
      choices: {
        a: "Student II (ice cubes) and III (lime solution)",
        b: "Student I (cobalt chloride) and II (ice cubes)",
        c: "Student II and I",
        d: "Student I (cobalt chloride) and III (lime solution)"
      },
      correct: "d"
    },
    {
      question: "Which part of the human heart is used for forcing oxygenated blood out of the heart and around the body?",
      choices: {
        a: "Right Atrium",
        b: "Right Ventricle",
        c: "Left Ventricle",
        d: "Left Atrium"
      },
      correct: "c"
    },
    {
      question: "If your body cannot make enough red blood cells, which mineral-rich food can correct this?",
      choices: {
        a: "Iron-rich food",
        b: "Calcium-rich food",
        c: "Iodine-rich food",
        d: "Sodium-rich food"
      },
      correct: "a"
    },
    {
      question: "What is the correct way to write the scientific names for human, dog, and housefly?",
      choices: {
        a: "Homo Sapiens, Canis Familiaris, Musca Domestica",
        b: "Homo sapiens, Canis familiaris, Musca domestica",
        c: "homo sapiens, Canis familiaris, Musca domestica",
        d: "Homo sapiens, Canis familiaris, musca domestica"
      },
      correct: "b"
    },
    {
      question: "Identify the typical examples for division Gymnospermae and Angiospermae, respectively.",
      choices: {
        a: "Mosses and ferns",
        b: "Liverworts and palm trees",
        c: "Grasses and legumes",
        d: "Juniper and roses"
      },
      correct: "d"
    },
    {
      question: "Which plants contain a single seed leaf, parallel veins, and scattered vascular bundles?",
      choices: {
        a: "Grasses, orchids, teff and roses",
        b: "Grasses, orchids, teff and beans",
        c: "Grasses, sunflowers, teff and maize",
        d: "Grasses, orchids, teff and maize"
      },
      correct: "d"
    },
    {
      question: "Which statement is correct about a pyramid of biomass?",
      choices: {
        a: "The whole organism at the first level is eaten by those above.",
        b: "Most producer materials turn into new secondary consumers.",
        c: "Much biomass from stage II is used by stage III for energy.",
        d: "Biomass passed on supports a larger number of organisms above."
      },
      correct: "c"
    },
    {
      question: "In the chain Leaves -> Grasshoppers -> Rodents -> Leopards, what happens if rodents significantly decrease?",
      choices: {
        a: "Increase in leopards",
        b: "Fewer grasshoppers",
        c: "No change in leopards",
        d: "Increase in grasshoppers"
      },
      correct: "d"
    },
    {
      question: "Which of the following is NOT a key process involved in the carbon cycle?",
      choices: {
        a: "Evaporation",
        b: "Cellular respiration",
        c: "Photosynthesis",
        d: "Decomposition"
      },
      correct: "a"
    },
    {
      question: "Which statement is correct about mitosis?",
      choices: {
        a: "Division of somatic cells to make half chromosomes.",
        b: "Division of sex cells to make identical doubled cells.",
        c: "Division of somatic cells to make identical daughter cells.",
        d: "Division of sex cells to make different daughter cells."
      },
      correct: "c"
    },
    {
      question: "Which feature is common for both mitosis and meiosis?",
      choices: {
        a: "Replication of DNA and formation of daughter cells.",
        b: "Production of daughter cells identical to parent.",
        c: "Formation of cells with the same chromosome number as parent.",
        d: "Spermatogenesis and oogenesis processes."
      },
      correct: "a"
    },
    {
      question: "Which plant leaf tissues are involved in waterproofing, photosynthesis, and gas exchange, respectively?",
      choices: {
        a: "Guard cells, palisade mesophyll, epidermis",
        b: "Guard cells, palisade mesophyll, spongy mesophyll",
        c: "Waxy cuticle, palisade mesophyll, spongy mesophyll",
        d: "Waxy cuticle, palisade mesophyll, epidermis"
      },
      correct: "c"
    },
    {
      question: "Which is correct about the movement of water in plants?",
      choices: {
        a: "Moves against a water potential gradient.",
        b: "Across phloem tissue by diffusion.",
        c: "Across tissues by osmosis.",
        d: "By using energy until it reaches xylem."
      },
      correct: "c"
    },
    {
      question: "What happens when you remove indole-acetic acid from the main shoot part of a plant?",
      choices: {
        a: "The plant will bush out.",
        b: "It stimulates dropping of leaves.",
        c: "The main shoot elongates.",
        d: "Side shoot growth slows down."
      },
      correct: "a"
    },
    {
      question: "Which list contains only characteristics of animals?",
      choices: {
        a: "Respire, excrete, autotrophic, reproduce",
        b: "Unicellular, excrete, heterotrophic, motility",
        c: "Heterotrophic, excrete, motility, grow",
        d: "Respire, multicellular, autotrophic, reproduce"
      },
      correct: "c"
    },
    {
      question: "Which animal has a closed circulatory system and a centralized nervous system with a brain?",
      choices: {
        a: "Snails",
        b: "Earthworm",
        c: "Squid",
        d: "Hydra"
      },
      correct: "c"
    },
    {
      question: "What does it mean if an animal is poikilothermic?",
      choices: {
        a: "Changes body temperature with environmental condition.",
        b: "Increases metabolic rate during cold/hot conditions.",
        c: "Keeps body temperature constant.",
        d: "Produces heat by activating the hypothalamus."
      },
      correct: "a"
    }
  ],

  phy: [
    {
      question: "Vector quantities are represented by",
      choices: {
        a: "magnitude and direction",
        b: "direction only",
        c: "magnitude only",
        d: "dimensionless values"
      },
      correct: "a"
    },
    {
      question: "According to Newton's first law, an object in motion continues with",
      choices: {
        a: "decreasing speed if net force is zero",
        b: "constant velocity if net force is non-zero",
        c: "increasing speed if net force is non-zero",
        d: "constant velocity if net force is zero"
      },
      correct: "d"
    },
    {
      question: "Which correctly describes the difference between distance and displacement?",
      choices: {
        a: "Distance is vector, displacement is scalar.",
        b: "Distance depends on endpoints, displacement depends on path.",
        c: "Distance >= magnitude of displacement.",
        d: "Distance can be negative, displacement is only positive."
      },
      correct: "c"
    },
    {
      question: "Which is correct about a uniformly accelerated motion?",
      choices: {
        a: "The velocity is constant.",
        b: "The acceleration is constant.",
        c: "The speed is constant but direction changes.",
        d: "Displacement increases at a uniform rate."
      },
      correct: "b"
    },
    {
      question: "Two displacement vectors have magnitudes 4 m and 3 m. Which is NOT a possible resultant magnitude?",
      choices: {
        a: "1 m",
        b: "7 m",
        c: "5 m",
        d: "12 m"
      },
      correct: "d"
    },
    {
      question: "A train accelerates at 5 m/s². If it reaches 30 m/s in 4s, what is its distance from the start after 8s?",
      choices: {
        a: "80 m",
        b: "160 m",
        c: "240 m",
        d: "320 m"
      },
      correct: "c"
    },
    {
      question: "What is a necessary condition for an object to be in linear equilibrium?",
      choices: {
        a: "Net force is non-zero constant.",
        b: "Linear acceleration is zero.",
        c: "Linear speed is constant.",
        d: "Linear acceleration is non-zero constant."
      },
      correct: "b"
    },
    {
      question: "Tiny bumps on surfaces locking together causes which force?",
      choices: {
        a: "Gravitational",
        b: "Electrostatic",
        c: "Normal",
        d: "Frictional"
      },
      correct: "d"
    },
    {
      question: "For a ball thrown vertically upward, which is correct about its downward path?",
      choices: {
        a: "Work done by gravity is negative.",
        b: "Kinetic energy change is positive.",
        c: "Work done by gravity is positive.",
        d: "Potential energy change is positive."
      },
      correct: "c"
    },
    {
      question: "The mechanical energy of an oscillating object is equal to",
      choices: {
        a: "the sum of kinetic and potential energies",
        b: "the sum of kinetic and internal energies",
        c: "the sum of potential and internal energies",
        d: "the difference of kinetic and potential energies"
      },
      correct: "a"
    },
    {
      question: "A 2kg object accelerates at 1.5 m/s² right. If F2=1N (left), what is F1 (right)?",
      choices: {
        a: "2 N",
        b: "1 N",
        c: "3 N",
        d: "4 N"
      },
      correct: "d"
    },
    {
      question: "A 0.10kg ball at 40m/s is struck back at 30m/s. What is the impulse magnitude?",
      choices: {
        a: "3.0 kg m/s",
        b: "4.0 kg m/s",
        c: "7.0 kg m/s",
        d: "1.0 kg m/s"
      },
      correct: "c"
    },
    {
      question: "A force exerted on a simple machine to produce input work is called",
      choices: {
        a: "friction",
        b: "load",
        c: "effort",
        d: "normal"
      },
      correct: "c"
    },
    {
      question: "Which is correct regarding longitudinal waves?",
      choices: {
        a: "Particles vibrate perpendicular to wave motion.",
        b: "Waves on a string are longitudinal.",
        c: "Particles vibrate parallel to wave motion.",
        d: "They comprise a series of crests and troughs."
      },
      correct: "c"
    },
    {
      question: "The apparent weight of a submerged object is",
      choices: {
        a: "weight of fluid displaced",
        b: "weight in air minus buoyant force",
        c: "weight in air",
        d: "fluid weight minus buoyant force"
      },
      correct: "b"
    },
    {
      question: "The actual mechanical advantage (AMA) of an inclined plane is expressed as",
      choices: {
        a: "1 / (cosθ + μ sinθ)",
        b: "1 / (sinθ + μ cosθ)",
        c: "cosθ + μ sinθ",
        d: "sinθ + μ cosθ"
      },
      correct: "b"
    },
    {
      question: "A wheel/axle (radii 40cm/8cm) lifts 60N with 20N effort. What is the efficiency?",
      choices: {
        a: "60%",
        b: "66.7%",
        c: "30%",
        d: "80%"
      },
      correct: "a"
    },
    {
      question: "After a collision, if block A (8kg, 6m/s) changes to 4m/s, what is the new velocity of block B (12kg, 3m/s)?",
      choices: {
        a: "4.33 m/s negative x-axis",
        b: "3.71 m/s negative x-axis",
        c: "3.71 m/s positive x-axis",
        d: "4.33 m/s positive x-axis"
      },
      correct: "d"
    },
    {
      question: "Heat energy required to raise the temperature of a substance by 1°C is",
      choices: {
        a: "latent heat",
        b: "heat capacity",
        c: "quantity of heat",
        d: "specific heat capacity"
      },
      correct: "b"
    },
    {
      question: "Which statement is correct about wave properties?",
      choices: {
        a: "Reflection changes speed and wavelength.",
        b: "Refraction keeps speed the same.",
        c: "Destructive interference increases amplitude.",
        d: "Diffraction is more observable through narrow gaps."
      },
      correct: "d"
    },
    {
      question: "The surface area expansion of a plate is expressed as",
      choices: {
        a: "A = A0(1 + αΔT)",
        b: "A = A0(1 + 3αΔT)",
        c: "A = A0(1 + 2αΔT)",
        d: "A = 2A0(1 + αΔT)"
      },
      correct: "c"
    },
    {
      question: "In a mercury barometer at 103.36 kPa, the mercury column rises to about",
      choices: {
        a: "7.6 m",
        b: "760 cm",
        c: "76 mm",
        d: "76 cm"
      },
      correct: "d"
    },
    {
      question: "Which is correct for an object sinking to 100m depth in seawater?",
      choices: {
        a: "Absolute pressure is 1.13 x 10^6 Pa",
        b: "Gauge pressure is 1.03 x 10^7 Pa",
        c: "Gauge pressure is 1.01 x 10^5 Pa",
        d: "Absolute pressure is 9.30 x 10^5 Pa"
      },
      correct: "a"
    },
    {
      question: "How much heat changes 5kg of ice at -20°C to water at 10°C?",
      choices: {
        a: "2.10 x 10^6 J",
        b: "1.89 x 10^6 J",
        c: "4.20 x 10^5 J",
        d: "1.68 x 10^6 J"
      },
      correct: "a"
    },
    {
      question: "An electric field is defined as a region where",
      choices: {
        a: "neutral particles experience force",
        b: "charged particles experience force",
        c: "particles lose their charge",
        d: "charged particles experience no force"
      },
      correct: "b"
    },
    {
      question: "Which is correct about the speed of sound?",
      choices: {
        a: "Increases as density increases.",
        b: "Liquid speed is less than gas speed.",
        c: "Faster in colder/less dense medium.",
        d: "Solid speed is less than liquid speed."
      },
      correct: "c"
    }
  ]
};
[cite_start]
