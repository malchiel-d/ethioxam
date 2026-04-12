const quizData = {
  bio : [
  // Question 1
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
  // Question 2
  {
    question: "A grade 12 student marked two dots close to each other using a pen on a piece of paper and observed them under a microscope. The two dots appeared well separated under the microscope. This was due to",
    choices: {
      a: "resolution",
      b: "magnification.",
      c: "staining",
      d: "mounting."
    },
    correct: "a"
  },
  // Question 3
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
  // Question 4
  {
    question: "A biology teacher grouped his students in to two groups and ordered group I to place a slice of potato in hypertonic solution and group II in hypotonic solution. What will happen to the potato slice in group I and group II? For group I, the potato slice will be",
    choices: {
      a: "turgid while for group II it will be flaccid.",
      b: "haemolyzed while for group II it will be flaccid.",
      c: "flaccid while for group II it will be turgid.",
      d: "turgid while for group II there will be no change."
    },
    correct: "c"
  },
  // Question 5
  {
    question: "A man eats only vegetables, beans, banana and orange for one week continuously in his lunch and dinner. For this man, what nutrients are most likely missed in his meal to be a balanced diet?",
    choices: {
      a: "Carbohydrates",
      b: "Lipids",
      c: "Proteins",
      d: "Minerals"
    },
    correct: "b"
  },
  // Question 6
  {
    question: "Which of the following is correct about the process of digestion or absorption of food in the small intestine?",
    choices: {
      a: "Proteins are converted into amino acids by the action of hydrochloric acid and amylase.",
      b: "Bile emulsifies fats to increase the surface area to make it easier for lipase.",
      c: "Water is reabsorbed into the small intestine and metabolic wastes are excreted.",
      d: "Glucose and non-hydrolyzed starch molecules are absorbed through the lacteal."
    },
    correct: "b"
  },
  // Question 7
  {
    question: "In an experiment, students wanted to prove that enzymatic digestion begins in the mouth using certain chewed food coated with their own saliva. In order to get a positive result for their experiment, what type of food sample and testing solution should the students use?",
    choices: {
      a: "Potato and iodine solution",
      b: "Meat and Benedict's solution",
      c: "Fish and sodium hydroxide solution",
      d: "Bread and copper sulphate solution"
    },
    correct: "a"
  },
  // Question 8
  {
    question: "Compared to the inhaled air what are the percentage of nitrogen, oxygen and carbon dioxide gases in exhaled air, respectively?",
    choices: {
      a: "80%, 16% and 4%",
      b: "80%, 4% and 16%",
      c: "16%, 4% and 80%",
      d: "4%, 16% and 80%"
    },
    correct: "a"
  },
  // Question 9
  {
    question: "Three students carried out different experiments in exhaled air as indicted below. Student I - uses cold glass and blue cobalt chloride paper. Student II - uses ice cubes. Student III - uses tube containing lime solution and straw. Based on their setup of their preparation, which student plan to demonstrate the presence of water vapour and carbon dioxide, respectively?",
    choices: {
      a: "II and III",
      b: "I and II",
      c: "II and I",
      d: "I and III"
    },
    correct: "d"
  },
  // Question 10
  {
    question: "Consider the following structure of the human heart. In the above diagram, which part is used for forcing oxygenated blood out of the heart and around the body?",
    diagram: "data/assets/bio/q10.jpg",
    choices: {
      a: "1",
      b: "II",
      c: "III",
      d: "IV"
    },
    correct: "c"
  },
  // Question 11
  {
    question: "If your body cannot make enough red blood cells, which one of the following mineral rich foods can correct this problem?",
    choices: {
      a: "Iron-rich food",
      b: "Calcium-rich food",
      c: "Iodine-rich food",
      d: "Sodium-rich food"
    },
    correct: "a"
  },
  // Question 12
  {
    question: "A biology teacher provided common names of three organisms; human being, dog and housefly to his students to write the correct scientific names of each organism. In which of the following ways should the students write the correct scientific names, respectively?",
    choices: {
      a: "Homo Sapiens, Canis Familiaris and Musca Domestica",
      b: "Homo sapiens, Canis familiaris and Musca domestica",
      c: "homo sapiens, Canis familiaris and Musca domestica",
      d: "Homo sapiens, Canis familiaris and musca domestica"
    },
    correct: "b"
  },
  // Question 13
  {
    question: "Identify the typical examples for division Gymnospermae and Angiospermae, respectively?",
    choices: {
      a: "Mosses and ferns",
      b: "Liverworts and palm trees",
      c: "Grasses and legumes",
      d: "Juniper and roses"
    },
    correct: "d"
  },
  // Question 14
  {
    question: "A student made a collection of plants having flowers and seeds from his locality and compared their embryo, leaves and stems using hand lens. He found that all his collections contain a single seed leaf embryo, long and thin with parallel veins of leaves and stem contains scattered vascular bundles. Which option contains plants that can be categorized under his collection?",
    choices: {
      a: "Grasses, orchids, teff and roses",
      b: "Grasses, orchids, teff and beans",
      c: "Grasses, sunflowers, teff and maize",
      d: "Grasses, orchids, teff and maize"
    },
    correct: "d"
  },
  // Question 15
  {
    question: "Consider the following diagram of pyramid of biomass. Which one of the following statements is correct about the above pyramid of biomass?",
    diagram: "data/assets/bio/q15.jpg",
    choices: {
      a: "The whole organisms at first trophic level is eaten by the organisms above.",
      b: "When organisms in stage II eat the producers, most of the producer's materials are turned into new secondary consumers.",
      c: "Much of the biomass from stage II is used by stage III to release energy for living.",
      d: "At each stage of trophic level, the amount of biomass, which is passed on, supports a large amount of organism in the stage above."
    },
    correct: "c"
  },
  // Question 16
  {
    question: "This item is based on the following diagram of simple food chain. Leaves -> Grasshoppers -> Rodents -> Leopards. What will happen if the number of rodents significantly decrease?",
    choices: {
      a: "an increase in the number of leopards.",
      b: "fewer grasshoppers in the chain.",
      c: "no change in the number of leopard.",
      d: "an increase in the number of grasshoppers."
    },
    correct: "d"
  },
  // Question 17
  {
    question: "Which of the following is NOT a key process involved in carbon cycle?",
    choices: {
      a: "Evaporation",
      b: "Cellular respiration",
      c: "Photosynthesis",
      d: "Decomposition"
    },
    correct: "a"
  },
  // Question 18
  {
    question: "Which of the following is correct about mitosis? It is a division of",
    choices: {
      a: "somatic cells to make daughter cells with half chromosome.",
      b: "sex cells to make identical daughter cells with doubled chromosome",
      c: "somatic cells to make identical daughter cells.",
      d: "sex cells to make different daughter cells."
    },
    correct: "c"
  },
  // Question 19
  {
    question: "Which one of the following features is common for mitosis and meiosis? They both involve",
    choices: {
      a: "replication of DNA and the formation of daughter cells.",
      b: "production of daughter cells identical to the parent cell.",
      c: "formation of cells with the same chromosome number as parent cell.",
      d: "spermatogenesis and oogenesis processes in males and females."
    },
    correct: "a"
  },
  // Question 20
  {
    question: "Which tissues of plant leaves are involved in waterproofing, major photosynthetic and major gas exchange activities, respectively?",
    choices: {
      a: "Guard cells, palisade mesophyll and epidermis",
      b: "Guard cells, palisade mesophyll and spongy mesophyll",
      c: "Waxy cuticle, palisade mesophyll and spongy mesophyll",
      d: "Waxy cuticle, palisade mesophyll and epidermis"
    },
    correct: "c"
  },
  // Question 21
  {
    question: "Which of the following is correct about the movement of water in plants? It moves",
    choices: {
      a: "against a water potential gradient.",
      b: "across the phloem tissue by diffusion.",
      c: "across the tissues of a plant by osmosis.",
      d: "by using energy until it reaches to the xylem."
    },
    correct: "c"
  },
  // Question 22
  {
    question: "What will happen to the growth of the plant when you remove indole-acetic acid from the main shoot part of the plant?",
    choices: {
      a: "The plant will bush out.",
      b: "It stimulates dropping of leaves.",
      c: "The main shoot of the plant elongates.",
      d: "The growth of side shoots will slow down."
    },
    correct: "a"
  },
  // Question 23
  {
    question: "In which one of the following alternatives the whole list contains characteristics of animals?",
    choices: {
      a: "Respire, excrete, autotrophic and reproduce",
      b: "Unicellular, excrete, heterotrophic and motility",
      c: "Heterotrophic, excrete, motility and grow",
      d: "Respire, multicellular, autotrophic and reproduce"
    },
    correct: "c"
  },
  // Question 24
  {
    question: "A grade 11 student observed and identified some animals group having closed circulatory system, centralized nervous system with brain and sensory organs. Based on their identification select one of the following animals that can belong to this group?",
    choices: {
      a: "Snails",
      b: "Earthworm",
      c: "Squid",
      d: "Housefly"
    },
    correct: "c"
  },
  // Question 25
  {
    question: "What does it mean if an animal is poikilothermic? It",
    choices: {
      a: "changes its body temperature with environmental condition.",
      b: "increases its metabolic rate during cold and hot conditions.",
      c: "keeps its body temperature constant regardless of external changes.",
      d: "produces heat when temperature falls by activating the hypothalamus."
    },
    correct: "a"
  },
  // Question 26
  {
    question: "Which one of the following statements is correct about the catalytic activities of enzymes? They",
    choices: {
      a: "change the overall nature of the products.",
      b: "allow reactions in cells to take place quickly.",
      c: "alter themselves at the end of biochemical reactions.",
      d: "increase the energy required to start a reaction."
    },
    correct: "b"
  },
  // Question 27
  {
    question: "Four students draw four different big protein structure posters. The contents of each of their structure are displayed in the following table: I - Polypeptide folded into a-helix and ẞ-sheet, and hydrogen bond; II - Amino acid sequences and peptide bonds; Ⅲ - Multiple folded protein subunits in a multi-subunit complex and haem group; IV - Side chain interaction of amino acids and overall 3-D shape. Based on the above information, which student draw secondary and quaternary structures, respectively?",
    choices: {
      a: "I and III",
      b: "I and IV",
      c: "II and III",
      d: "II and IV"
    },
    correct: "a"
  },
  // Question 28
  {
    question: "How does the induced-fit model explain enzyme specificity? They",
    choices: {
      a: "change the shape of active site slightly to fit substrates precisely.",
      b: "have a rigid active site that can just bind to single substrate.",
      c: "have multiple active sites that can fit to different substrates.",
      d: "bind to whatever the shape of substrate that fits to allosteric site."
    },
    correct: "a"
  },
  // Question 29
  {
    question: "What happens to the substrate molecule when competitive inhibitor binds with an enzyme? It",
    choices: {
      a: "undergoes conformational change.",
      b: "cannot bind with the active site.",
      c: "binds to the allosteric site temporarily.",
      d: "easily binds with the active site."
    },
    correct: "b"
  },
  // Question 30
  {
    question: "What will happen to the reaction if you add a certain inhibitor or activator to the substrate having allosteric enzyme set up?",
    choices: {
      a: "Inhibitor binds to active site to speed up the reaction.",
      b: "Inhibitor binds to regulatory site to increase rate of reaction.",
      c: "Activator binds to active site to initiate the reaction.",
      d: "Activator binds to regulatory site to activate the reaction."
    },
    correct: "d"
  },
  // Question 31
  {
    question: "Which one of the following classes of enzyme and type of reactions they catalyze is correctly matched?",
    choices: {
      a: "Oxidoreductases - transfer functional groups from donor to acceptor",
      b: "Transferases - transfer of electrons from one molecule to another",
      c: "Ligases - catalyze the joining of two molecules",
      d: "Lyases - cleave bonds by other means rather than hydrolysis"
    },
    correct: "c"
  },
  // Question 32
  {
    question: "If a given enzyme works only at temperature range of 20 and 45°C and the potential of hydrogen ions that ranges from 4 to 9. Which one of the following works best during the optimization of these two factors for the enzyme activity?",
    choices: {
      a: "Adjusting the temperature below 20°C makes the enzyme more active.",
      b: "Adjusting the pH above 9 can increase the probability of collisions.",
      c: "Adjusting the temperature between 20°C and 45°C results in little denaturation and increased collisions.",
      d: "The optimum pH under which this enzyme is most active is found below 4."
    },
    correct: "c"
  },
  // Question 33
  {
    question: "All of the following features define a chromosome EXCEPT",
    choices: {
      a: "contains hundreds to thousands of genes.",
      b: "exists in pairs in diploid organisms.",
      c: "made up of DNA and protein.",
      d: "functional unit of inheritance."
    },
    correct: "d"
  },
  // Question 34
  {
    question: "In the final stages of mitosis, during telophase:",
    choices: {
      a: "chromosomes reach opposite poles.",
      b: "spindle fibers shorten.",
      c: "chromosomes uncoil.",
      d: "nuclear envelope reforms."
    },
    correct: "a"
  },
  // Question 35
  {
    question: "Which of the following describes anaphase II of meiosis?",
    choices: {
      a: "Sister chromatids separate.",
      b: "Homologous chromosomes separate.",
      c: "Crossing over occurs.",
      d: "Chromosomes align at the equator."
    },
    correct: "a"
  },
  // Question 36
  {
    question: "Suppose there was a cross between pea plants with flower positions axial (AA) and terminal (aa) and produced F1 generation. What will be the most probable number of heterozygous dominant individuals obtained if 1000 offspring were produced by self-crossing of F1 generation?",
    choices: {
      a: "200",
      b: "750",
      c: "500",
      d: "250"
    },
    correct: "c"
  },
  // Question 37
  {
    question: "If you have a pea plant of unknown genotype with a green pod color, you obtained all green pod colors of offspring phenotype after a test cross. What was the unknown genotype of the parent? It was",
    choices: {
      a: "homozygous dominant.",
      b: "homozygous recessive.",
      c: "heterozygous dominant.",
      d: "incomplete dominant."
    },
    correct: "a"
  },
  // Question 38
  {
    question: "This item is based on the following examples of genetic inheritance patterns. 1. Inflated and pinched pod forms will have inflated pod form. 2. Red cow and white bull will have roan calf. 3. AA and BB blood type people will have a child with AB blood type. 4. Red and white roses will have a pink rose offspring. From the above patterns of inheritance, which of the following are exemplary for non-Mendelian inheritance?",
    choices: {
      a: "1, 2, 3",
      b: "1, 3, 4",
      c: "1, 2, 4",
      d: "2, 3, 4"
    },
    correct: "d"
  },
  // Question 39
  {
    question: "This item is based on the following pedigree diagram for color blindness, X-linked recessive trait. Based on the above diagram, if the family in the second generation has children, what is the probability that they will have carrier female and color blind male, respectively?",
    diagram: "data/assets/bio/q39.jpg",
    choices: {
      a: "¼ and ¼",
      b: "½ and ½",
      c: "¾ and ¼",
      d: "¼ and ½"
    },
    correct: "b"
  },
  // Question 40
  {
    question: "Farmers want to maintain their sheep with long tails for the next generation through similar sheep from their locality in their breeding program. What process do these farmers apply to keep the desired traits in their program?",
    choices: {
      a: "Inbreeding",
      b: "Crossbreeding",
      c: "Genetic engineering",
      d: "Cloning"
    },
    correct: "a"
  },
  // Question 41
  {
    question: "If progesterone remains high after ovulation, what will be the most likely outcome?",
    choices: {
      a: "FSH will be produced rapidly which leads to a new cycle.",
      b: "Oestrogen will be decreased, closing down the lining of the uterus.",
      c: "Uterus lining will be maintained and prepared for pregnancy.",
      d: "Corpus luteum will be regenerated, inhibiting hormone production."
    },
    correct: "c"
  },
  // Question 42
  {
    question: "The most reliable contraceptive method that prevents travelling of ovum from the ovaries through the fallopian tubes, but requires surgery is",
    choices: {
      a: "contraceptive injection.",
      b: "spermicide.",
      c: "intrauterine device.",
      d: "sterilization."
    },
    correct: "d"
  },
  // Question 43
  {
    question: "Among the following, which one increases the risk to be infected by sexually transmitted infections?",
    choices: {
      a: "Have no history of sexually transmitted infections",
      b: "Misuse of drugs that inhibit your judgment",
      c: "Protective sexual contact and medical treatment",
      d: "Consistent use of condoms during intercourse"
    },
    correct: "b"
  },
  // Question 44
  {
    question: "Two women were decided not to have pregnancy in the near future and they were offered two different contraceptive options. In woman I, the material fitted in her uterus did not allow the sperm to fertilize the egg. In woman II, the contraceptive prevented hormone production and the releasing of eggs from the ovaries. Which type of contraceptive methods did woman I and II used, respectively?",
    choices: {
      a: "Sterilization and Injectable contraceptives Depo-Provera",
      b: "Post pill and copper-coated intrauterine device",
      c: "Contraceptive injection and contraceptive implant",
      d: "Copper-coated intrauterine device and contraceptive injection"
    },
    correct: "d"
  },
  // Question 45
  {
    question: "The finding of the study conducted in two different villages showed that there are harmful practices that affect reproductive health. The common practices in village 1 were forcing underage girls to get married based norms and sexual abuse or harassment. In village 2 abduction to make the girl a wife unwillingly was very common. Which one of the following options is correct about the two villages?",
    choices: {
      a: "In village 1, gender-based violence and early marriage are common.",
      b: "In village 1, gender-based violence, kidnapping and female genital mutilation are common.",
      c: "In village 2, kidnapping and female genital mutilation are common.",
      d: "In village 2, gender-based violence and female genital mutilation are common."
    },
    correct: "a"
  },
  // Question 46
  {
    question: "How drinking alcohol can contribute for HIV transmission? By",
    choices: {
      a: "improving the decision making ability of a person",
      b: "driving more willingly to participate in risky behaviors",
      c: "impotency or loss of sexual drive both in male and female",
      d: "increasing rate of the retrovirus multiplication capacity"
    },
    correct: "b"
  },
  // Question 47
  {
    question: "Select the option that the whole lists contain renewable natural resources.",
    choices: {
      a: "Coal, oil, natural gas and minerals",
      b: "Coal, wind, hydro power and biomass",
      c: "Sunlight, wind, hydro power and biomass",
      d: "Sunlight, wind, hydro power and natural gas"
    },
    correct: "c"
  },
  // Question 48
  {
    question: "This item is based on the following list of activities. I. Establishing national parks II. Wild sanctuaries III. Preparing wild life reserves IV. Practicing overgrazing. Which of the above activities CANNOT be used for the conservation of wild life?",
    choices: {
      a: "II",
      b: "I",
      c: "III",
      d: "IV"
    },
    correct: "d"
  },
  // Question 49
  {
    question: "Among the following options, identify the air pollutants that can cause acid rain and its effects, respectively.",
    choices: {
      a: "Carbon dioxide and methane - melting of ice caps and rising of oceans",
      b: "Sulphur dioxides and nitrogen dioxides - damaging plants and water",
      c: "Perflourocarbons - causing skin cancer and cataracts",
      d: "Chloroflourocarbons - increasing UV rays and respiratory disease"
    },
    correct: "b"
  },
  // Question 50
  {
    question: "Which of the following is the cause and effect of global warming, respectively?",
    choices: {
      a: "Greenhouse gases and dropping of sea levels",
      b: "Greenhouse gases and loss of biodiversity",
      c: "Burning of fossil fuels and increase in species diversity",
      d: "Burning of fossil fuels and dropping of sea level"
    },
    correct: "b"
  },
  // Question 51
  {
    question: "What is the primary purpose of creating transgenic organisms? To",
    choices: {
      a: "generate pathogenic organisms that fight against non-pathogenic ones",
      b: "produce organisms that mimic human beings in every aspect of behaviors",
      c: "promote expression of desired genes that improve nutritional quality of organisms",
      d: "produce novel organisms that can affect reproduction across different species"
    },
    correct: "c"
  },
  // Question 52
  {
    question: "What is the role of biology in the investigation of a criminal case? To",
    choices: {
      a: "detect flavor compounds in food and monitor environmental pollutants",
      b: "examine potential sources of evidences using blood, saliva and hair",
      c: "sense pathogens and herbicides using immunochemical detection system",
      d: "determine the production of complex organic compounds using mold fungus"
    },
    correct: "b"
  },
  // Question 53
  {
    question: "How does biological washing powder save energy? Because they",
    choices: {
      a: "use lipase enzyme without other combination for any stain in clothes.",
      b: "are effective in cleaning clothes at lower temperatures without boiling water.",
      c: "are effective in removing dirty ores in clothes without spraying acidic water.",
      d: "use protease enzyme without other combination for any stain in clothes."
    },
    correct: "b"
  },
  // Question 54
  {
    question: "What is biological warfare? The use of",
    choices: {
      a: "selective genes to produce genetically modified organisms",
      b: "cloning technique to make exact genetic copies of an organism",
      c: "bacteria, fungi and viruses as a biological agent to control pests",
      d: "infectious agents with the intent to kill humans, animals or plants"
    },
    correct: "d"
  },
  // Question 55
  {
    question: "Which of the following correctly describes the general features of bacteria? They are unicellular microbes with",
    choices: {
      a: "true nucleus and are omnipresent in nature.",
      b: "rigid cell wall and a diverse mode of nutrition.",
      c: "mitochondria and a special type of chlorophyll.",
      d: "Golgi bodies and genetic materials of a cell."
    },
    correct: "b"
  },
  // Question 56
  {
    question: "Which group of archaea are found in volcanic vents and hot vapors that contain either obligate aerobes, facultative aerobes or obligate anaerobes?",
    choices: {
      a: "Hyperthermophiles",
      b: "Acidophiles",
      c: "Halophiles",
      d: "Psychrophiles"
    },
    correct: "a"
  },
  // Question 57
  {
    question: "From the fungal disease given below, which one is transmitted sexually?",
    choices: {
      a: "Candidiasis",
      b: "Aspergillosis",
      c: "Tineas",
      d: "Dermatophytosis"
    },
    correct: "a"
  },
  // Question 58
  {
    question: "This item is based on the following choices of feeding habit employed by organisms. I. Using nutrients dissolved in the surrounding medium II. Manufacturing own nutrients by photosynthesis III. Depending on other plants or animals for food. Which method/s the protozoan used to get their nutrition? They employed",
    choices: {
      a: "I only.",
      b: "I and II only.",
      c: "II and III only.",
      d: "I, II and III."
    },
    correct: "d"
  },
  // Question 59
  {
    question: "Which one of the following diseases is correctly matched with its symptoms and method of transmission?",
    choices: {
      a: "Chickenpox - runny and stuffy nose - respiratory droplets",
      b: "Measles - paralysis and hydrophobia - bite from infected animals",
      c: "Polio - commonly no sign and symptoms - fecal-oral-route",
      d: "Rabies - swollen and painful protid glands - through infected saliva"
    },
    correct: "c"
  },
  // Question 60
  {
    question: "In order to link a specific microorganism to a specific disease, Koch used mouse as experimental animal. He took a small amount of blood from a diseased mouse and injected into a healthy mouse, the latter quickly developed anthrax. Again he took blood from this second mouse and then injected it into another, again he observed the symptoms of anthrax. What was his first postulate related with this procedure?",
    choices: {
      a: "The same microorganisms are present in every case of the diseases.",
      b: "The isolated microorganisms can cause the same disease to susceptible animal.",
      c: "The same pathogens are isolated and re-cultivated from experimental animal.",
      d: "The microorganisms are isolated from the tissue of a dead animal and pure culture is prepared."
    },
    correct: "b"
  },
  // Question 61
  {
    question: "Sleeping sickness is transmitted by",
    choices: {
      a: "biting of tsetse flies.",
      b: "sexual intercourse.",
      c: "eating contaminated food.",
      d: "droplet infection."
    },
    correct: "a"
  },
  // Question 62
  {
    question: "Considering the diverse application of microorganisms, which of the following best evaluates their overall importance? They have",
    choices: {
      a: "abundant benefits that are essential for life on Earth.",
      b: "a great disadvantage and limited advantage.",
      c: "limited impact on the environment.",
      d: "few applications in the areas of biotechnology and medicine."
    },
    correct: "a"
  },
  // Question 63
  {
    question: "Suppose a clinical nurse used a needle to treat a person with HIV/AIDS. What would be the most appropriate method of controlling such microbial infection?",
    choices: {
      a: "Incineration",
      b: "Tyndallization",
      c: "Sanitization",
      d: "Preservation"
    },
    correct: "a"
  },
  // Question 64
  {
    question: "As a clinical microbiologist, suppose you want to collect microbes from a food sample and isolate them via serial dilution. How do you determine the isolated colonies that grow on artificial media? By",
    choices: {
      a: "counting the number of strains on the plate",
      b: "cross checking with other preserved specimens",
      c: "observing their morphological features",
      d: "inoculating them into other infected animals"
    },
    correct: "c"
  },
  // Question 65
  {
    question: "What is the main difference between anabolism and catabolism in cellular metabolic pathways? Anabolism",
    choices: {
      a: "absorbs energy while catabolism releases energy.",
      b: "is destructive while catabolism is constructive process.",
      c: "occurs during respiration while catabolism occurs in photosynthesis.",
      d: "breaks down macromolecules while catabolism buildups them."
    },
    correct: "a"
  },
  // Question 66
  {
    question: "In a hypothetical scenario where photosynthesis ceased to occur on the earth, the long-term consequences on the continuity of life would be",
    choices: {
      a: "remained unaffected since other sources of energy exist.",
      b: "collapsed that could lead to mass extinction.",
      c: "balanced between CO2 and O2 appropriately.",
      d: "disordered although animal life would flourish."
    },
    correct: "b"
  },
  // Question 67
  {
    question: "What are the roles of grana and stroma in the process of photosynthesis? Grana is a site for",
    choices: {
      a: "cyclic pathway while stroma is a site for non-cyclic pathway.",
      b: "photolysis of water while stroma is a site for carbon fixation.",
      c: "generation of sugar while stroma is a site for photolysis of water.",
      d: "production of NADPH while stroma is a site for chemiosmosis."
    },
    correct: "b"
  },
  // Question 68
  {
    question: "Which one of the following comparisons between cyclic and non-cyclic photophosphorylation is correct? Non-cyclic photophosphorylation",
    choices: {
      a: "produces ATP, NADPH and O2, but cyclic produces ATP and NADPH.",
      b: "uses oxygen as the final electron acceptor, but cyclic uses cytochrome b-c1 complex.",
      c: "uses photosystem I as electron donor, but cyclic uses water as an electron donor.",
      d: "involves both photosystems I and II, but cyclic uses only photosystem I."
    },
    correct: "d"
  },
  // Question 69
  {
    question: "All of the following events happen in the reduction stages of the Calvin cycle EXCEPT",
    choices: {
      a: "combining of CO2 with RuBP.",
      b: "utilization of ATP and NADPH molecules.",
      c: "conversion of 3-PGA into a sugar molecule.",
      d: "donating of electrons to a 3C-intermediates to form G3P."
    },
    correct: "a"
  },
  // Question 70
  {
    question: "What happens in the mitochondrion during the reactions of photorespiration?",
    choices: {
      a: "Glycine is converted to serine with the release of CO2 and NH3.",
      b: "Glycolate is converted to glyoxylate with the release of H2O2.",
      c: "Glycerate is converted to GP with the release of ADP.",
      d: "Phosphoglycolate is converted to glycolate with the release of Pi."
    },
    correct: "a"
  },
  // Question 71
  {
    question: "How does photosynthesis ensure the continuity of life? By",
    choices: {
      a: "constantly adding carbon dioxide to the atmosphere",
      b: "maintaining carbon dioxide and oxygen balance in the atmosphere",
      c: "constantly removing oxygen from the atmosphere",
      d: "adding natural gas and absorbing methane from the atmosphere"
    },
    correct: "b"
  },
  // Question 72
  {
    question: "Which of the following is the difference between substrate level phosphorylation and oxidative phosphorylation? Substrate level phosphorylation",
    choices: {
      a: "occurs in the inner mitochondrial membrane while oxidative phosphorylation occurs in the cytosol.",
      b: "occurs during glycolysis and Kreb's cycle while oxidative phosphorylation occurs during electron transport chain.",
      c: "has the same source of energy as oxidative phosphorylation.",
      d: "occurs in aerobic respiration while oxidative phosphorylation in anaerobic respiration."
    },
    correct: "b"
  },
  // Question 73
  {
    question: "Which one of the following is correct about the energy liberation phase of glycolysis pathway? It",
    choices: {
      a: "hydrolyses two ATP molecules and raises the free energy of glucose.",
      b: "breaks six carbon molecules into two glyceraldehyde-3-phosphate molecules.",
      c: "releases one water molecule and dihydroxyacetone phosphate molecule.",
      d: "produces four ATP, two NADH and two molecules of pyruvate."
    },
    correct: "d"
  },
  // Question 74
  {
    question: "Which one of the following statements describes an event of the process of electron transport system correctly?",
    choices: {
      a: "Oxygen serves as a terminal electron acceptor in the production of ATP.",
      b: "Thirteen ATP molecules are invested when electrons are transferred from NADH/FADH2 to O2.",
      c: "More than 90% of the total ATP is produced by substrate-level phosphorylation.",
      d: "It happens due to the difference in pH as the inside mitochondrial membrane is more acidic."
    },
    correct: "a"
  },
  // Question 75
  {
    question: "In a complete oxidation of glucose molecule, how many net ATP molecules are produced by substrate level phosphorylation?",
    choices: {
      a: "2",
      b: "4",
      c: "8",
      d: "10"
    },
    correct: "b"
  },
  // Question 76
  {
    question: "What is the difference between aerobic and anaerobic respirations?",
    choices: {
      a: "Aerobic respiration ends with different products while the same product results in anaerobic respiration.",
      b: "Proteins are the main respiratory substrate for both aerobic and anaerobic respiration.",
      c: "Aerobic respiration produces much more energy than anaerobic respiration.",
      d: "Glycolysis is the first pathway for aerobic while Kreb's cycle is for anaerobic respiration."
    },
    correct: "c"
  },
  // Question 77
  {
    question: "Which one of the following statements disproves spontaneous generation theory based on a step wise experimental work?",
    choices: {
      a: "Life is an inherent property of the universe and everlasting.",
      b: "Different life forms on the Earth were created by a supreme being within six days.",
      c: "Both macro and micro-organisms could arise from pre-existing organisms.",
      d: "Life has reached to the Earth in the form of spores with falling meteorite."
    },
    correct: "c"
  },
  // Question 78
  {
    question: "Based on comparative anatomy, chimpanzee is the closest relative to humans because of the similarities in their",
    choices: {
      a: "haemoglobin sequence.",
      b: "fossil remains.",
      c: "DNA sequence.",
      d: "pentadactyl limb."
    },
    correct: "c"
  },
  // Question 79
  {
    question: "Which one of the following causes of variation allows infertile hybrids to become fertile in plant evolution?",
    choices: {
      a: "Reproductive isolation",
      b: "Sympatric speciation",
      c: "Polyploidy cell",
      d: "Geographical separation"
    },
    correct: "c"
  },
  // Question 80
  {
    question: "This item is based on the following course of human evolution. 1. Use of fire and other tools 2. Increase in brain size 3. Emergence of Homo sapiens 4. Bipedal walking and arboreal life. Which of the following is the correct order of the above evolutionary time line markers?",
    choices: {
      a: "2, 1, 3, 4",
      b: "1, 3, 4, 2",
      c: "3, 2, 4, 1",
      d: "4, 2, 1, 3"
    },
    correct: "d"
  },
  // Question 81
  {
    question: "This item is based on the following diagram, which illustrates the occurrence of mutation in a certain sequence of nucleotides. The type of mutation that occurred in the above sequence of nucleotides is",
    diagram: "data/assets/bio/q81.jpg",
    choices: {
      a: "deletion.",
      b: "inversion.",
      c: "addition.",
      d: "substitution."
    },
    correct: "a"
  },
  // Question 82
  {
    question: "Which of the following is NOT a common cause of genetic mutation?",
    choices: {
      a: "Exposure to ultra-violet radiation",
      b: "Errors in DNA replication",
      c: "Extensive physical exercise",
      d: "Experiences of using chemical substance"
    },
    correct: "c"
  },
  // Question 83
  {
    question: "Which genetic phenomenon is common for both bottleneck and founder effects?",
    choices: {
      a: "High mutation rate that enhances adaptation",
      b: "Genetic drift that reduces diversity in the population",
      c: "Gene flow that increases inbreed and disease's resistance",
      d: "Natural selection that results from gradual evolutionary changes"
    },
    correct: "b"
  },
  // Question 84
  {
    question: "In a scenario where a male black lion population left its terrestrial territory and joined a white female lion population in an isolated Island to mate, there would be a",
    choices: {
      a: "decrease in black lion population in the isolated Island.",
      b: "genetic variation in terrestrial population due to immigration.",
      c: "random introduction of new alleles into the Island population.",
      d: "change in allele frequencies of terrestrial population but not in Island."
    },
    correct: "c"
  },
  // Question 85
  {
    question: "Which of the following is an example of anthropogenic driving factor that contributes to species extinction?",
    choices: {
      a: "Earth quack",
      b: "Volcanic eruption",
      c: "Expansions of agriculture",
      d: "Outbreak of wild-fire"
    },
    correct: "c"
  },
  // Question 86
  {
    question: "Which one of the following statements is correct about nervous system? It",
    choices: {
      a: "takes air into and out of the body to supply oxygen and remove carbon dioxide.",
      b: "uses blood vessels to transport blood around the body through the heart.",
      c: "consist of cells that produce and secret chemicals into the blood stream via duct.",
      d: "receives and processes sensory information from internal and external parts of the body."
    },
    correct: "d"
  },
  // Question 87
  {
    question: "What is the best justification for the role of voltage-gated ion channels in nerve impulse transmission? They",
    choices: {
      a: "actively respond to membrane potential changes, leading to depolarization.",
      b: "block the ions movement across the membrane to sustain neuron.",
      c: "allow potassium ions diffuse to the inside of the membrane, forming repolarization.",
      d: "produce energy when the sodium ions move to the inside of the axon."
    },
    correct: "a"
  },
  // Question 88
  {
    question: "Which one of the following ions are used to facilitate the release of neurotransmitters to the synaptic cleft before binding to postsynaptic receptor?",
    choices: {
      a: "Calcium ions",
      b: "Magnesium ions",
      c: "Potassium ions",
      d: "Sodium ions"
    },
    correct: "a"
  },
  // Question 89
  {
    question: "Find the correct path way of reflex are that prevents you from physical damage up on the sudden touching of hot plate.",
    choices: {
      a: "Interneuron→ receptor→ motor neuron→ effector",
      b: "Sensory neuron→ motor neuron→ spinal cord→ effector",
      c: "Sensory neuron→ spinal cord→ motor neuron→ effector",
      d: "Interneuron→ spinal cord→ motor neuron→ effector"
    },
    correct: "c"
  },
  // Question 90
  {
    question: "This item is based on the following diagram of anatomy of human eye. Which labeled part is responsible for controlling the diameter of the pupil according to the light source?",
    diagram: "data/assets/bio/q90.jpg",
    choices: {
      a: "I",
      b: "II",
      c: "III",
      d: "IV"
    },
    correct: "d"
  },
  // Question 91
  {
    question: "Select the option that contains the correct match of human ear structure and its function.",
    choices: {
      a: "Eustachian tube - balancing air pressure of the middle ear and throat",
      b: "Semicircular canals - concerned with production of nerve impulse",
      c: "Ear ossicles - concerned with the detection of motion",
      d: "Cochlea - transmits sound from the incus to the auditory nerve"
    },
    correct: "a"
  },
  // Question 92
  {
    question: "This item is based on the following list of events that happen during hearing. I. Transmission of amplified sound waves to the ear ossicles II. Movement of sensory hair as a result of vibration of the fluid in the cochlea III. Transmission of nerve impulse into the brain and response to the sound stimulus IV. The pinna directs sound waves into the eardrum. Based on the above lists, which alternative shows the correct steps of the events of hearing?",
    choices: {
      a: "IV -> III -> II -> I",
      b: "I -> II -> III -> IV",
      c: "I -> IV -> II -> III",
      d: "IV -> I -> II -> III"
    },
    correct: "d"
  },
  // Question 93
  {
    question: "Suppose low metabolic rate, cretinism and retarded mental and physical development are common problems of infants and childhood in a small village. Which condition in the endocrine system results in these problems?",
    choices: {
      a: "Extreme hypothyroidism",
      b: "Malfunction of adrenal cortex",
      c: "Over production of parathyroid hormone",
      d: "Lack of adrenalin production"
    },
    correct: "a"
  },
  // Question 94
  {
    question: "If a woman is admitted to hospital for giving birth, which hormone is helping her in the delivery of her baby and releasing of milk?",
    choices: {
      a: "Vasopressin",
      b: "Aldosterone",
      c: "Oxytocin",
      d: "Progesterone"
    },
    correct: "c"
  },
  // Question 95
  {
    question: "How ultrafiltration takes place in the human kidney? By",
    choices: {
      a: "increasing the concentration of urine in the muscular sac using a collecting duct",
      b: "building the pressure of the knot of blood vessels in the Bowman's capsule",
      c: "diffusing of glucose molecules into the first coiled tubule of microvilli",
      d: "reabsorbing of water into the blood in the second coiled tubule using ADH"
    },
    correct: "b"
  },
  // Question 96
  {
    question: "Assume a patient with type II diabetes gets an advice to practice regular exercise to raise the number of insulin receptors. Then, how does insulin regulate the blood glucose level if it is high in this patient? It stimulates",
    choices: {
      a: "glycolysis, which converts glucose into pyruvate.",
      b: "glycogenesis, which converts glucose into glycogen.",
      c: "lipolysis that converts fatty acid into glucose.",
      d: "gluconeogenesis that creates glucose from amino acids."
    },
    correct: "b"
  },
  // Question 97
  {
    question: "Imagine the water content of the blood is low when you take in much salt with your food. What would happen in your kidney to regulate this situation? Osmoreceptor stimulates the",
    choices: {
      a: "adrenal gland to release adrenalin that increases conversion of glycogen to glucose in the blood.",
      b: "hypothalamus that release aldosterone and sodium ions to reabsorb back into the blood.",
      c: "pituitary gland to release ADH to reabsorb water back into the blood.",
      d: "ADH to release cortisone that promotes resistance to water stress."
    },
    correct: "c"
  },
  // Question 98
  {
    question: "Several current studies point out that very large quantity of greenhouse gases have been added into Earth's atmosphere due to human activities. What would be the most likely responsible gas and its major sources, respectively?",
    choices: {
      a: "Methane - aluminum smelting and semiconductor manufacturing",
      b: "Carbon dioxide - fossil fuel combustion, deforestation, oil and gas usage",
      c: "Sulphur hexafluoride - landfills, rice paddies, digestive tracts of cattle",
      d: "Perfluorocarbons - electric transmission, magnesium and aluminum production"
    },
    correct: "b"
  },
  // Question 99
  {
    question: "The effect of increased climate change on agricultural productivity is associated with",
    choices: {
      a: "land use change and expansion of monoculture farming that yields high productivity.",
      b: "agroforestry system that increases the mixture of multipurpose trees and crops.",
      c: "drought that triggers wild fire, which can consume millions of acres of forest.",
      d: "reduction of available water that leads to decrease in biological resources."
    },
    correct: "d"
  },
  // Question 100
  {
    question: "Which one of the following local community practices in Ethiopia is considered as an environmental action that addresses climate change mitigation? Culture of",
    choices: {
      a: "respecting humanity that promotes eco-tourism industry",
      b: "negotiating mechanism that is led by elders to reduce social unrest",
      c: "planting millions of seedlings following the green legacy initiative",
      d: "treating different diseases with herbal remedies by traditional healers"
    },
    correct: "c"
  }
],
}