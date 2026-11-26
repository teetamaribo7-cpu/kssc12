addSubject({id:'bio', topics:[
{t:'Cells and organelles', notes:`
<table><tr><th>Organelle</th><th>Function</th><th>Plant</th><th>Animal</th></tr>
<tr><td>Nucleus</td><td>Contains DNA; controls the cell</td><td>✓</td><td>✓</td></tr>
<tr><td>Mitochondria</td><td>Aerobic respiration → ATP</td><td>✓</td><td>✓</td></tr>
<tr><td>Ribosomes</td><td>Protein synthesis</td><td>✓</td><td>✓</td></tr>
<tr><td>Cell membrane</td><td>Controls what enters and leaves</td><td>✓</td><td>✓</td></tr>
<tr><td>Chloroplast</td><td>Photosynthesis</td><td>✓</td><td>✗</td></tr>
<tr><td>Cell wall (cellulose)</td><td>Support; prevents bursting</td><td>✓</td><td>✗</td></tr>
<tr><td>Large permanent vacuole</td><td>Stores cell sap; keeps the cell turgid</td><td>✓</td><td>small/temporary</td></tr>
<tr><td>Centrioles</td><td>Cell division</td><td>✗</td><td>✓</td></tr></table>
<div class="key">Mitochondria are in BOTH plant and animal cells, because all living cells need ATP from respiration.</div>`,
quiz:[
{q:'Which organelle is found only in plant cells?',o:['Mitochondrion','Nucleus','Chloroplast','Ribosome'],a:2,e:'Also the cell wall and the large vacuole.'},
{q:'Where is most ATP made?',o:['Nucleus','Mitochondria','Ribosome','Vacuole'],a:1,e:'Aerobic respiration.'},
{q:'Why don\'t plant cells burst in a hypotonic solution?',o:['They have no vacuole','The cellulose cell wall resists the pressure','They lose water','They have centrioles'],a:1,e:'The wall stops the cell expanding further; the cell becomes turgid.'},
{q:'Proteins are made at the…',o:['ribosomes','vacuole','cell wall','chloroplast'],a:0,e:'Translation happens at the ribosomes.'},
{q:'Why do both plant and animal cells have mitochondria?',o:['To photosynthesise','To make energy (ATP) by respiration','To store water','For support'],a:1,e:'Every cell respires.'}
]},
{t:'Transport across membranes', notes:`
<ul><li><b>Diffusion:</b> net movement of particles from high to low concentration (passive).</li><li><b>Osmosis:</b> diffusion of <b>water</b> across a partially permeable membrane, from high water potential (dilute) to low water potential (concentrated).</li><li><b>Facilitated diffusion:</b> movement down a concentration gradient through carrier or channel proteins, with no energy.</li><li><b>Active transport:</b> movement AGAINST a concentration gradient using carrier proteins and <b>ATP</b>.</li></ul>
<h3>Solutions</h3><table><tr><th>Solution</th><th>Plant cell</th><th>Animal cell</th></tr><tr><td>Hypotonic (more dilute)</td><td>Water enters → turgid (the wall prevents bursting)</td><td>Swells and bursts (lysis)</td></tr><tr><td>Isotonic</td><td>No net change (flaccid)</td><td>No change</td></tr><tr><td>Hypertonic (more concentrated)</td><td>Water leaves → plasmolysed</td><td>Shrinks (crenated)</td></tr></table>
<p>Root hair cells take up mineral ions by <b>active transport</b>, because the ion concentration is higher inside the cell than in the soil; diffusion would move ions out.</p>`,
quiz:[
{q:'Osmosis is the movement of…',o:['any particle','water across a partially permeable membrane','ions using ATP','glucose only'],a:1,e:'Water from high to low water potential.'},
{q:'Which process needs ATP?',o:['Diffusion','Osmosis','Facilitated diffusion','Active transport'],a:3,e:'It moves substances against the gradient.'},
{q:'A red blood cell in pure water will…',o:['shrink','burst','stay the same','divide'],a:1,e:'Hypotonic: water enters and there is no wall.'},
{q:'Facilitated diffusion uses…',o:['ATP','carrier/channel proteins','the cell wall','active sites'],a:1,e:'Down the gradient, with no energy.'},
{q:'A plant cell in a hypertonic solution becomes…',o:['turgid','plasmolysed','burst','larger'],a:1,e:'Water leaves; the membrane pulls away from the wall.'}
]},
{t:'Enzymes', notes:`
<ul><li>Enzymes are biological catalysts (proteins) that speed up reactions by lowering the activation energy.</li><li><b>Specific:</b> each enzyme's active site binds only one particular substrate.</li><li><b>Induced fit model:</b> the active site is flexible and changes shape slightly as the substrate binds, to fit it closely.</li></ul>
<h3>Factors affecting rate</h3><ul><li><b>Temperature:</b> the rate rises up to the optimum (~37 °C for human enzymes). Above it, bonds break and the active site changes shape → <b>denatured</b> (permanent).</li><li><b>pH:</b> each enzyme has an optimum pH (pepsin ~2, amylase ~7). Extreme pH denatures it.</li><li><b>Substrate concentration:</b> the rate increases until all active sites are occupied (saturated) → the curve levels off.</li><li><b>Enzyme concentration</b> and <b>surface area</b> of the substrate: more contact → faster.</li></ul>`,
quiz:[
{q:'Enzymes are specific because…',o:['they catalyse any reaction','they are carbohydrates','they work best when frozen','each binds to a particular substrate'],a:3,e:'Complementary active site.'},
{q:'At high substrate concentration the rate levels off because…',o:['the enzyme is denatured','all active sites are occupied','the substrate runs out','the pH falls'],a:1,e:'The enzyme is saturated.'},
{q:'Denaturation means…',o:['the enzyme speeds up','the active site permanently changes shape','the substrate changes','the enzyme reproduces'],a:1,e:'Caused by high temperature or extreme pH.'},
{q:'The induced fit model says the active site is…',o:['rigid','flexible and moulds to the substrate','absent','made of DNA'],a:1,e:'It changes shape slightly.'},
{q:'The optimum temperature of most human enzymes',o:['0 °C','20 °C','37 °C','80 °C'],a:2,e:'Body temperature.'}
]},
{t:'Photosynthesis and respiration', notes:`
<div class="key">Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll)<br>Aerobic respiration: glucose + oxygen → carbon dioxide + water (+ 36–38 ATP)</div>
<h3>Photosynthesis (in chloroplasts)</h3><ul><li><b>Light-dependent reactions</b> (thylakoid membranes): water is split (photolysis) → O₂ released; ATP is made; NADP⁺ is <b>reduced</b> to NADPH.</li><li><b>Calvin cycle</b> (stroma): ATP supplies energy and NADPH supplies electrons/H to reduce CO₂ into G3P → glucose.</li></ul>
<h3>Respiration</h3><table><tr><th></th><th>Aerobic</th><th>Anaerobic (animals)</th><th>Anaerobic (yeast)</th></tr><tr><td>Oxygen</td><td>needed</td><td>not needed</td><td>not needed</td></tr><tr><td>Products</td><td>CO₂ + water</td><td><b>lactic acid</b></td><td><b>ethanol + CO₂</b></td></tr><tr><td>ATP per glucose</td><td>36–38</td><td>2</td><td>2</td></tr></table>
<p>Oxygen is the <b>final electron acceptor</b> in the electron transport chain; it combines with electrons and H⁺ to form water, keeping the chain running so ATP synthase keeps making ATP.</p><p>Sprinter → mainly anaerobic (short, intense effort; the oxygen supply cannot keep up). Marathon runner → mainly aerobic (long, steady effort).</p>`,
quiz:[
{q:'Anaerobic respiration in animals produces…',o:['lactic acid','ethanol and water','CO₂ and water','ethanol and CO₂'],a:0,e:'Yeast makes ethanol + CO₂.'},
{q:'Word equation for aerobic respiration',o:['CO₂ + water → glucose + oxygen','glucose + oxygen → carbon dioxide + water','glucose + CO₂ → water + oxygen','glucose + water → CO₂ + oxygen'],a:1,e:'Releases energy as ATP.'},
{q:'In the light reactions, NADP⁺ is…',o:['split','used to make ATP directly','oxidised','reduced to NADPH'],a:3,e:'It accepts electrons and H⁺.'},
{q:'Yeast respiring without oxygen for 24 h produces…',o:['CO₂ + ethanol','CO₂ + lactic acid','O₂ + ethanol','O₂ + lactic acid'],a:0,e:'Fermentation.'},
{q:'The role of O₂ in the electron transport chain',o:['the first electron donor','the final electron acceptor','it makes glucose','it splits water'],a:1,e:'It forms water.'},
{q:'Where does the Calvin cycle take place?',o:['Thylakoid','Stroma','Mitochondria','Nucleus'],a:1,e:'The light reactions are in the thylakoids.'}
]},
{t:'DNA, protein synthesis and cell division', notes:`
<ul><li>DNA bases: <b>A, T, G, C</b> (A–T, G–C). RNA has <b>U</b> (uracil) instead of T.</li><li>A <b>chromosome</b> contains hundreds of <b>genes</b>, which are sections of <b>DNA</b>.</li><li>Protein synthesis: <b>transcription</b> (DNA → mRNA in the nucleus) → <b>translation</b> (mRNA → amino acid chain at ribosomes) → protein folding.</li></ul>
<h3>Mitosis vs meiosis</h3><table><tr><th></th><th>Mitosis</th><th>Meiosis</th></tr><tr><td>Daughter cells</td><td>2</td><td>4</td></tr><tr><td>Chromosome number</td><td>diploid (2n), same as the parent</td><td>haploid (n), half</td></tr><tr><td>Variation</td><td>genetically identical</td><td>genetically different</td></tr><tr><td>Use</td><td>growth, repair, asexual reproduction</td><td>making gametes</td></tr></table>
<p><b>Crossing over</b>: in prophase I of meiosis, homologous chromosomes pair up and exchange sections of DNA → new combinations of alleles. <b>Independent assortment</b> (random arrangement of pairs) is why siblings look different.</p><p>A cell with 12 chromosomes → gametes have 6 → the zygote has 12.</p>`,
quiz:[
{q:'Which base is NOT in DNA?',o:['Uracil','Adenine','Thymine','Guanine'],a:0,e:'Uracil replaces thymine in RNA.'},
{q:'The correct order in protein synthesis',o:['Replication → Translation → Folding','Transcription → Translation → Folding','Translation → Transcription → Folding','Translation → Replication → Folding'],a:1,e:'DNA → mRNA → protein.'},
{q:'Meiosis produces…',o:['2 identical cells','4 haploid, genetically different cells','4 diploid cells','1 cell'],a:1,e:'For gametes.'},
{q:'Siblings look different mainly because of…',o:['mitosis','binary fission','DNA replication','independent assortment in meiosis'],a:3,e:'Plus crossing over and random fertilisation.'},
{q:'A cell has 46 chromosomes. A gamete has…',o:['46','23','92','12'],a:1,e:'Haploid = half.'},
{q:'A gene is…',o:['made of protein','a section of DNA that codes for a protein','a whole chromosome','a cell'],a:1,e:'Chromosomes carry many genes.'}
]},
{t:'Genetics and inheritance', notes:`
<ul><li><b>Allele</b>: a version of a gene. <b>Dominant</b> (capital letter) shows when present; <b>recessive</b> shows only when there are two copies.</li><li><b>Homozygous</b>: two identical alleles (RR or rr). <b>Heterozygous</b>: two different alleles (Rr).</li><li><b>Genotype</b> = the alleles; <b>phenotype</b> = the observed trait.</li></ul>
<h3>Dihybrid example (2025 paper)</h3><p>RrYy (round yellow) × RRyy (round green). Gametes: RY, Ry, rY, ry × all Ry.</p><table><tr><th></th><th>RY</th><th>Ry</th><th>rY</th><th>ry</th></tr><tr><th>Ry</th><td>RRYy</td><td>RRyy</td><td>RrYy</td><td>Rryy</td></tr></table><p>All offspring are round; half yellow, half green → <b>1 round yellow : 1 round green</b>.</p>
<h3>Genetic modification</h3><p>Benefits: pest-resistant or drought-tolerant crops, higher yields, vitamin-enriched food, insulin made by bacteria. Risks: genes spreading to wild plants, effects on biodiversity, unknown long-term health effects, seed costs for farmers.</p>`,
quiz:[
{q:'Heterozygous means…',o:['two identical alleles','two different alleles for a gene','no alleles','two genes'],a:1,e:'E.g. Rr.'},
{q:'Rr × rr. The proportion of offspring with the recessive phenotype is…',o:['0%','25%','50%','100%'],a:2,e:'Rr, Rr, rr, rr.'},
{q:'Rr × Rr gives a phenotype ratio of…',o:['1:1','3:1','1:2:1','all dominant'],a:1,e:'3 dominant : 1 recessive.'},
{q:'RrYy × RRyy. Phenotypic ratio?',o:['9:3:3:1','3:1','1 round yellow : 1 round green','all round yellow'],a:2,e:'All round (R from parent 2); Yy or yy in equal numbers.'},
{q:'The physical appearance of an organism is its…',o:['genotype','phenotype','allele','gene pool'],a:1,e:'Phenotype.'}
]},
{t:'Plant structure and transport', notes:`
<ul><li><b>Xylem</b>: carries water and minerals up from the roots (dead, hollow, lignified cells).</li><li><b>Phloem</b>: carries sugars (sucrose) from the leaves to the rest of the plant (translocation).</li><li>Dicot stem: vascular bundles arranged in a ring; ground tissue (cortex/pith); sclerenchyma gives support.</li></ul>
<h3>Stomata and guard cells</h3><p>Open: guard cells take in K⁺ ions → water potential falls → water enters by osmosis → the cells swell and curve (thick inner walls) → the pore opens. Close (dark or drought): K⁺ leaves → water leaves → the cells become flaccid → the pore closes.</p><p>If the stomata stayed closed: no CO₂ intake → no photosynthesis; no transpiration → poor water and mineral uptake and overheating; the plant starves and dies.</p>
<h3>Root hair cells</h3><p>Long, thin extension → large surface area; thin wall → short diffusion distance; large vacuole with concentrated sap → water enters by osmosis. Minerals enter by <b>active transport</b> (ATP, against the gradient), unlike water (passive osmosis).</p>
<h3>Plant life cycle</h3><p>Alternation of generations: the sporophyte (2n) makes spores by meiosis; the gametophyte (n) makes gametes by mitosis. In flowering plants the sporophyte is the large, dominant plant.</p>`,
quiz:[
{q:'Xylem transports…',o:['sugar from leaf to root','water and minerals','oxygen','hormones only'],a:1,e:'Upwards from the roots.'},
{q:'Phloem transports…',o:['water','sugars from the leaves','minerals only','CO₂'],a:1,e:'Translocation.'},
{q:'Guard cells open stomata by…',o:['losing water','taking in K⁺ and water','dying','making starch'],a:1,e:'They become turgid.'},
{q:'Root hair cells absorb minerals by…',o:['osmosis','diffusion only','active transport','evaporation'],a:2,e:'Against the concentration gradient.'},
{q:'In a flowering plant\'s life cycle, the gametophyte…',o:['is diploid','forms gametes by mitosis','forms spores by meiosis','is the large plant'],a:1,e:'The sporophyte forms spores by meiosis.'}
]},
{t:'Human nutrition, digestion and gas exchange', notes:`
<ul><li>Ingestion = taking food in (mouth). Digestion = breaking food down (mainly stomach and small intestine). Absorption = small intestine (villi). Egestion = anus.</li><li>Oesophagus: moves food from mouth to stomach by <b>peristalsis</b>.</li><li><b>Fibre</b> stimulates peristalsis and prevents constipation.</li><li><b>Gastric ulcer</b>: a sore in the stomach lining (often <i>H. pylori</i> bacteria, NSAIDs, alcohol, smoking) → pain, bleeding, poor digestion. Prevent: high-fibre diet, water, avoid alcohol and smoking, smaller meals.</li><li>Herbivores: long gut, rumen or caecum with cellulose-digesting microbes, grinding teeth.</li><li><b>Tube gut</b> (mouth → anus) vs <b>sac gut</b> (one opening, e.g. Hydra): one-way flow, specialised regions, continuous feeding.</li></ul>
<h3>Gas exchange</h3><table><tr><th>Animal</th><th>Surface</th></tr><tr><td>Earthworm</td><td>Moist skin (small, low metabolic rate, large SA:V)</td></tr><tr><td>Insect</td><td>Tracheal system (spiracles → tracheae → tracheoles)</td></tr><tr><td>Fish</td><td>Gills: many filaments and lamellae, rich blood supply, <b>countercurrent flow</b></td></tr><tr><td>Human</td><td>Lungs (alveoli)</td></tr></table>
<p>Respiratory sequence: inhalation → gas exchange in the alveoli → transport in the blood → cellular respiration.</p>`,
quiz:[
{q:'Fibre is important because it…',o:['neutralises acid','increases protein absorption','gives extra energy','stimulates peristalsis and prevents constipation'],a:3,e:'It adds bulk.'},
{q:'Correct sequence in the respiratory process',o:['Gas exchange → transport → inhalation → respiration','Inhalation → transport → gas exchange → respiration','Transport → inhalation → gas exchange → respiration','Inhalation → gas exchange → transport → respiration'],a:3,e:'Air in, exchange at the alveoli, carried by blood, used in cells.'},
{q:'Insects exchange gases through…',o:['gills','lungs','the tracheal system','the skin only'],a:2,e:'Spiracles and tracheae.'},
{q:'Countercurrent flow in fish gills…',o:['reduces oxygen uptake','keeps a concentration gradient along the whole gill','stops blood flow','is found in insects'],a:1,e:'Water and blood flow in opposite directions.'},
{q:'Ingestion takes place in the…',o:['stomach','mouth','small intestine','anus'],a:1,e:'Taking in food.'}
]},
{t:'Circulation, reproduction and homeostasis', notes:`
<h3>Circulatory systems</h3><table><tr><th>Open (insects)</th><th>Closed (humans, earthworms)</th></tr><tr><td>Blood (haemolymph) bathes the organs in a body cavity</td><td>Blood stays inside vessels</td></tr><tr><td>Low pressure, slow</td><td>High pressure, fast, can be directed to organs → suits larger, active animals</td></tr></table>
<p>Smoking, obesity and alcohol → <b>plaque narrows the arteries</b> (atherosclerosis) → high blood pressure, heart attack.</p>
<h3>Human reproduction</h3><ul><li>Ovulation (egg released) → fertilisation in the oviduct → zygote → divides (embryo/blastocyst) → <b>implantation</b> in the uterus lining (needs <b>progesterone</b> and oestrogen).</li><li>Placenta: exchange of O₂, nutrients and wastes; makes hormones (progesterone); passes antibodies; acts as a barrier to some pathogens. Umbilical vein → oxygenated blood to the fetus; umbilical arteries → deoxygenated blood back to the placenta.</li></ul>
<h3>Blood glucose control</h3><ul><li>High glucose → pancreas (β cells) releases <b>insulin</b> → liver/muscles store glucose as <b>glycogen</b>.</li><li>Low glucose → pancreas (α cells) releases <b>glucagon</b> → liver breaks glycogen into glucose.</li><li><b>Type 1 diabetes</b>: the pancreas makes little or no insulin (autoimmune). <b>Type 2</b>: cells resist insulin (linked to obesity and diet) – a major problem in Kiribati.</li></ul>
<h3>Kidney</h3><p>Filtration (glomerulus) → selective reabsorption (glucose and ions actively, using ATP) → urine.</p>`,
quiz:[
{q:'A common effect of smoking, obesity and alcohol on the heart',o:['better oxygen transport','lower risk of heart disease','more elastic vessels','arteries narrowed by plaque'],a:3,e:'Atherosclerosis.'},
{q:'Insulin causes the liver to…',o:['release glucose','store glucose as glycogen','make glucagon','make bile'],a:1,e:'It lowers blood glucose.'},
{q:'Type 2 diabetes is mainly caused by…',o:['no pancreas','cells resisting insulin','too much glucagon','infection'],a:1,e:'Linked to lifestyle.'},
{q:'Implantation is when…',o:['the egg is released','the embryo attaches to the uterus lining','sperm meets egg','the baby is born'],a:1,e:'Progesterone maintains the lining.'},
{q:'Which animals have an open circulatory system?',o:['humans','fish','insects','earthworms'],a:2,e:'Haemolymph bathes the organs.'},
{q:'Glucose is reabsorbed in the kidney by…',o:['filtration','active transport','osmosis only','excretion'],a:1,e:'Selective reabsorption uses ATP.'}
]},
{t:'Ecology: populations, communities, ecosystems', notes:`
<ul><li><b>Population size</b>: the number of individuals of one species in an area at a given time. Estimate by quadrats/transects, mark–recapture, or direct counting.</li><li><b>Natality</b> = birth rate; <b>mortality</b> = death rate.</li><li>Survivorship curves: Type I (humans, elephants – most die old), Type II (birds, lizards – constant death rate), Type III (fish, oysters, coconut seeds – huge numbers of offspring, most die young).</li></ul>
<h3>Interactions</h3><ul><li>Mutualism (+/+), commensalism (+/0), parasitism (+/−), predation.</li><li><b>Gause's principle</b> (competitive exclusion): two species competing for the same limited resource cannot coexist – one outcompetes the other.</li><li><b>Zonation</b>: the change in vegetation in bands, with altitude or along a shore. Global warming → zones shift to higher altitudes; species at the top lose habitat.</li></ul>
<h3>Pyramids</h3><ul><li>Pyramid of numbers counts organisms and can be inverted (one tree supports many insects).</li><li>Pyramid of biomass (dry mass) is upright on land because energy and biomass are lost at each level (respiration, heat, waste) – only ~10% passes on.</li></ul>
<h3>Biodiversity</h3><p>The variety of species, genes and ecosystems. Reduced by habitat destruction, overfishing, pollution, invasive species and climate change. High biodiversity → stable ecosystems, food webs with backups, ecosystem services, medicines.</p>`,
quiz:[
{q:'Both organisms benefit in…',o:['predation','mutualism','parasitism','commensalism'],a:1,e:'+/+'},
{q:'Gause\'s principle states…',o:['competition has no effect','two species share a niche forever','species always avoid competition','one species outcompetes the other for the same limited resource'],a:3,e:'Competitive exclusion.'},
{q:'Mark–recapture is used to…',o:['measure pH','estimate population size','count chromosomes','measure biomass'],a:1,e:'N = (M × C)/R.'},
{q:'A Type III survivorship organism',o:['human','elephant','oyster','bird'],a:2,e:'Many offspring, high early mortality.'},
{q:'A pyramid of numbers can be inverted because…',o:['it ignores organism size','energy increases','there are no producers','it uses biomass'],a:0,e:'One big tree can feed thousands of insects.'},
{q:'Bands of vegetation changing with altitude are called…',o:['succession','zonation','migration','mutation'],a:1,e:'Zonation.'}
]}
],
papers:[
{y:2025, src:'P2025/KSSC Biology 2025.pdf', note:'Some questions use diagrams. Open the original paper to see them. ⚠ shows where the official marking scheme is wrong.',
secs:[
{t:'Section A – Multiple choice', qs:[
{n:'1.',q:'Enzymes are specific because:',a:'<b>D</b>: each enzyme binds to a particular substrate (complementary active site).'},
{n:'2.',q:'Which visible feature makes the shark a good predator?',a:'<b>D</b>: large sharp teeth (for catching and tearing prey).'},
{n:'3.',q:'What is produced by anaerobic respiration in animals?',a:'<b>A</b>: lactic acid.'},
{n:'4.',q:'Word equation for aerobic respiration',a:'<b>C</b>: glucose + oxygen → carbon dioxide + water.'},
{n:'5.',q:'Cell organelles I–IV correctly matched (diagram)',a:'<b>B</b>: chloroplast, mitochondria, cell wall, nucleus (per the marking scheme; check the diagram).'},
{n:'6.',q:'Which is not present in DNA?',a:'<b>A</b>: uracil (it is found in RNA).'},
{n:'7.',q:'Relationship between DNA, gene and chromosome',a:'<b>B</b>: a chromosome contains hundreds of genes, which are made of DNA.'},
{n:'8.',q:'Sequence of protein synthesis',a:'<b>D</b>: transcription → translation → protein folding.'},
{n:'9.',q:'Both organisms benefit',a:'<b>B</b>: mutualism.'},
{n:'10.',q:'Sequence of the respiratory process',a:'<b>D</b>: inhalation → gas exchange → transport of gases in blood → cellular respiration.'},
{n:'11.',q:'Role of NADP⁺ in the light reaction',a:'<b>D</b>: it is reduced to form NADPH.'},
{n:'12.',q:'Why siblings look different',a:'<b>D</b>: independent assortment during meiosis.'},
{n:'13.',q:'Dicot stem: labels III, IV, V',a:'<b>B</b>: ground tissue, vascular bundle, sclerenchyma (per the marking scheme; check the diagram).'},
{n:'14.',q:'Functions of structures I and II',a:'<b>B</b>: I (xylem) transports water and minerals; II (phloem) transports sugar from leaf to root.'},
{n:'15.',q:'Sporophyte and gametophyte in flowering plants',a:'<b>B</b>: the gametophyte forms gametes by mitosis; the sporophyte forms spores by meiosis.'},
{n:'16.',q:'Fibre is important because it:',a:'<b>D</b>: stimulates peristalsis and prevents constipation.'},
{n:'17.',q:'Yeast respiration experiment: gas and new compound after 24 h',a:'<b>A</b>: carbon dioxide and ethanol.'},
{n:'18.',q:'Gause\'s principle',a:'<b>D</b>: when two species compete for the same limited resource, one will eventually outcompete the other (competitive exclusion).', flag:'The marking scheme gives A ("competition has no effect"), which contradicts Gause\'s principle. D is correct.'},
{n:'19.',q:'Common effect of smoking, obesity and alcohol on the heart',a:'<b>D</b>: narrowing of the arteries due to plaque formation.', flag:'The marking scheme gives A ("improved oxygen transport"). That is wrong: these factors damage the heart and blood vessels. D is correct.'},
{n:'20.',q:'Food web: which statement is correct?',a:'<b>A</b>: three producers and three herbivores (per the marking scheme; count the organisms in the diagram to check).'}
]},
{t:'B1 – Cellular biology (28 marks)', qs:[
{n:'1A.',q:'Balanced equation for photosynthesis.',a:'6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light energy, chlorophyll)'},
{n:'1B.',q:'(i) Gas X (ii) label the thylakoid (iii) how light-reaction products are used in the Calvin cycle.',a:'(i) <b>Oxygen (O₂)</b>, released from splitting water.\n(ii) The thylakoids are the stacked discs (grana) inside the chloroplast.\n(iii) ATP provides the energy, and NADPH provides electrons/hydrogen (reducing power), to convert CO₂ into G3P (glyceraldehyde-3-phosphate), which is used to make glucose.'},
{n:'2A.',q:'Two roles of oxygen in the electron transport chain.',a:'1. Oxygen is the <b>final electron acceptor</b> at the end of the chain.\n2. It combines with electrons and H⁺ ions to form <b>water</b>. This keeps the electrons flowing and the proton gradient going, so ATP synthase can keep making ATP.'},
{n:'2B.',q:'Compare aerobic and anaerobic respiration: amount of ATP.',a:'Aerobic: about <b>36–38 ATP</b> per glucose (complete breakdown).\nAnaerobic: only <b>2 ATP</b> per glucose (glycolysis only).'},
{n:'2C.',q:'Dominant respiration for (i) a sprinter (ii) a marathon runner.',a:'(i) Sprinter: <b>anaerobic</b> (short, intense effort; the oxygen supply cannot meet the demand).\n(ii) Marathon runner: <b>aerobic</b> (long, steady effort; enough oxygen; much more ATP).'},
{n:'3A.',q:'Kidney: (i) name process 1 (ii) which process requires energy (iii) one substance actively reabsorbed.',a:'(i) <b>Filtration</b> (ultrafiltration in the glomerulus).\n(ii) <b>Reabsorption</b> (selective reabsorption, process 2).\n(iii) <b>Glucose</b> (also amino acids and sodium ions).'},
{n:'3B.',q:'(i) A plant cell in a hypotonic solution (ii) why plant cells don\'t burst but animal cells do.',a:'(i) Water enters by osmosis, the vacuole swells and the cell becomes <b>turgid</b>.\n(ii) Plant cells have a strong cellulose cell wall that resists further expansion. Animal cells have no cell wall, so they keep taking in water and burst (lysis).'},
{n:'3C.',q:'(i) Define facilitated diffusion (ii) one difference between osmosis and diffusion (iii) why root hairs use active transport for minerals.',a:'(i) Passive movement of molecules down their concentration gradient through carrier or channel proteins in the membrane, with no ATP.\n(ii) Osmosis is only the movement of WATER across a partially permeable membrane. Diffusion is the movement of any particles from high to low concentration and needs no membrane.\n(iii) Mineral ions are more concentrated inside the root hair than in the soil, so diffusion would move them OUT. Active transport uses ATP and carrier proteins to move ions IN against the gradient.'},
{n:'4.',q:'Cells 1 and 2: (i) two organelles only in cell 1 (plant) (iii) why both have mitochondria.',a:'(i) <b>Cell wall</b> and <b>chloroplast</b> (also a large permanent vacuole).\n(iii) Both plant and animal cells must respire to release energy (ATP) for living processes, and aerobic respiration happens in the mitochondria.'}
]},
{t:'B2 – Experiment and skills (14 marks)', qs:[
{n:'A.',q:'Describe the induced fit model.',a:'The active site of an enzyme is flexible. When the substrate binds, the active site changes shape slightly to fit around it closely, forming an enzyme–substrate complex. This puts strain on the substrate\'s bonds and lowers the activation energy.'},
{n:'B.',q:'Plot substrate concentration (x) against rate (y).',a:'Points: (0.5, 2.1), (1, 3.9), (2, 6.8), (4, 8.0), (6, 8.2). Label the axes with units, use even scales, and draw a smooth curve that rises steeply and then levels off (plateau about 8.2 mg/min).'},
{n:'C.',q:'Explain the trend.',a:'As substrate concentration increases from 0.5 to 2 g/L, the rate increases steeply (more substrate molecules collide with free active sites). Above about 4 g/L, the rate increases very little and levels off at about 8 mg maltose/min.'},
{n:'D.',q:'Why does the rate level off (induced fit model)?',a:'At high substrate concentration, all the enzyme active sites are occupied (the enzyme is saturated). Each active site must change shape, catalyse and release the product before it can bind another substrate, so adding more substrate cannot increase the rate. The enzyme concentration is now the limiting factor.'},
{n:'E.',q:'One reason the actual rate may be lower than expected at very high substrate concentration.',a:'Product inhibition: a build-up of maltose can block active sites. (Also accepted: substrate inhibition, or the high concentration changing the pH/ionic conditions and slightly altering the enzyme\'s shape.)'}
]},
{t:'B3 – Genetics (21 marks)', qs:[
{n:'1.',q:'Define crossing over.',a:'The exchange of sections of DNA between non-sister chromatids of homologous chromosomes during prophase I of meiosis, producing new combinations of alleles (genetic variation).'},
{n:'2.',q:'Three differences between mitosis and meiosis.',a:'A. Daughter cells: mitosis → <b>2</b>; meiosis → <b>4</b>.\nB. Chromosome number: mitosis → diploid (2n), the same as the parent; meiosis → haploid (n), half.\nC. Variation: mitosis → genetically identical cells; meiosis → genetically different cells (crossing over, independent assortment).', flag:'The marking scheme table lists 1 and 2 daughter cells. Mitosis gives 2 and meiosis gives 4.'},
{n:'3.',q:'A cell undergoing meiosis has 12 chromosomes. (A) Gametes? (B) Zygote?',a:'A. <b>6</b> chromosomes (haploid).\nB. <b>12</b> chromosomes (6 + 6 at fertilisation).'},
{n:'4.',q:'One benefit and one risk of genetic modification.',a:'Benefit: crops resistant to pests, drought or salt (useful for atoll gardens), giving higher yields and less pesticide use. Or: bacteria engineered to make human insulin.\nRisk: modified genes may spread to wild plants, or harm insects and biodiversity. There may also be unknown long-term health effects.'},
{n:'5A.',q:'Define heterozygous.',a:'Having two different alleles of a gene (e.g. Rr): one dominant and one recessive.'},
{n:'5B.',q:'Genotypes of Plant 1 (heterozygous for both) and Plant 2 (homozygous round, green).',a:'Plant 1: <b>RrYy</b>\nPlant 2: <b>RRyy</b>'},
{n:'5C.',q:'Dihybrid Punnett square.',a:'Plant 1 gametes: RY, Ry, rY, ry. Plant 2 gametes: Ry only.\nRY × Ry → RRYy\nRy × Ry → RRyy\nrY × Ry → RrYy\nry × Ry → Rryy'},
{n:'5D.',q:'Expected phenotypic ratio.',a:'RRYy, RrYy → round yellow; RRyy, Rryy → round green\n<b>1 round yellow : 1 round green</b> (50% : 50%)', flag:'The marking scheme gives ¾ round yellow : ¼ round green. That is wrong: there are 2 yellow (Yy) and 2 green (yy) out of 4, so the ratio is 1:1.'}
]},
{t:'B4 – Organism biology (51 marks)', qs:[
{n:'1.1B.',q:'How guard cells control the opening and closing of stomata.',a:'Opening (light): guard cells actively take in K⁺ ions → their water potential falls → water enters by osmosis → they become turgid and bend outwards (the inner wall is thicker) → the stoma opens.\nClosing (dark or water shortage): K⁺ ions leave → water leaves by osmosis → the guard cells become flaccid → the stoma closes, reducing water loss.'},
{n:'1.1C.',q:'What if all stomata stayed closed?',a:'No CO₂ could enter, so photosynthesis would stop and the plant would starve. Transpiration would stop, so water and mineral uptake from the roots would slow and the leaves could overheat. The plant would eventually die.'},
{n:'1.2B.',q:'How is the root hair cell adapted for absorption?',a:'• Long, thin extension → large surface area\n• Thin cell wall and membrane → short diffusion distance\n• Large vacuole with concentrated cell sap → maintains a water potential gradient for osmosis\n• Many mitochondria → ATP for active transport of ions'},
{n:'1.2C.',q:'How does mineral absorption differ from water absorption?',a:'Water enters passively by osmosis (down the water potential gradient, no energy). Minerals are usually more concentrated inside the cell than in the soil, so they must be taken up by active transport, which uses carrier proteins and ATP from respiration.'},
{n:'2A.',q:'Define asexual reproduction and give one example.',a:'Reproduction with only one parent and no gametes; the offspring are genetically identical (clones).\nExample: vegetative propagation, e.g. banana suckers, breadfruit root cuttings or sweet potato vines (also budding in Hydra, binary fission in bacteria).'},
{n:'2B.',q:'One disadvantage of (i) sexual (ii) asexual reproduction.',a:'(i) Sexual: needs two parents (finding a mate or pollinator takes time and energy), and it is slower with fewer offspring.\n(ii) Asexual: no genetic variation, so one disease or environmental change can wipe out the whole population.'},
{n:'3A.',q:'Two ways to prevent gastric ulcers and low-fibre problems.',a:'1. Eat a high-fibre diet (vegetables, fruit, pandanus, whole grains) and drink plenty of water.\n2. Avoid excessive alcohol, smoking and spicy or fatty foods; eat smaller, regular meals. (Also: treat <i>H. pylori</i> infection.)'},
{n:'3B.',q:'How does a gastric ulcer affect the digestive system?',a:'The ulcer is an open sore in the stomach lining. Stomach acid irritates it, causing pain and possible bleeding. It reduces digestion of food (especially protein) and can lead to serious complications such as a perforated stomach.'},
{n:'4A.',q:'Where do ingestion and digestion occur?',a:'Ingestion: the <b>mouth</b>.\nDigestion: the <b>stomach and small intestine</b> (it starts in the mouth with amylase).'},
{n:'4B.',q:'One function of the oesophagus.',a:'It carries food from the mouth to the stomach by peristalsis (waves of muscle contraction).'},
{n:'4C.',q:'One herbivore adaptation for digesting plant material.',a:'A long alimentary canal with a rumen or large caecum containing microbes (bacteria) that produce cellulase to digest cellulose. (Also accepted: flat grinding molars.)'},
{n:'4D.',q:'One advantage of a tube gut over a sac gut.',a:'Food moves one way, so different regions can specialise (digestion, absorption, egestion), and the animal can keep eating while earlier food is still being digested.'},
{n:'5A.',q:'Gas exchange organ: (i) earthworm (ii) insects.',a:'(i) Moist <b>skin</b>\n(ii) <b>Tracheal system</b> (spiracles and tracheae)'},
{n:'5B.',q:'One adaptation of fish for efficient gas exchange.',a:'Countercurrent flow: water flows over the gills in the opposite direction to the blood, keeping a concentration gradient along the whole gill. (Or: many thin lamellae giving a large surface area.)'},
{n:'5C.',q:'One similarity between gas exchange in fish and insects.',a:'Both have a very large surface area (gill lamellae / tracheoles) with thin walls for fast diffusion of O₂ and CO₂.'},
{n:'5D.',q:'Why do earthworms rely on diffusion through the skin?',a:'Earthworms have no lungs or gills. They are small and thin with a large surface area to volume ratio and a low metabolic rate. Their skin is thin and moist, with many capillaries underneath, so diffusion through the skin supplies enough oxygen.'},
{n:'6.',q:'Open vs closed circulatory systems: (B) structural differences (C) one advantage of closed.',a:'B. Open: the blood is not kept in vessels; it is pumped into a body cavity and bathes the organs directly, at low pressure. Closed: the blood stays inside vessels (arteries, capillaries, veins) and is pumped by the heart at high pressure.\nC. A closed system delivers oxygen and nutrients faster and can direct blood to the organs that need it most. This suits larger, more active animals.'},
{n:'7.1.',q:'Fertilisation to implantation: (A) structure X (B) define implantation and give hormones (C) role of process 1.',a:'A. <b>Zygote</b> (the fertilised egg).\nB. Implantation: the embryo (blastocyst) attaches and embeds into the thickened lining of the uterus. Hormones: <b>progesterone</b> and <b>oestrogen</b>.\nC. Process 1 = <b>ovulation</b>: the release of a mature egg from the ovary into the oviduct, so it can be fertilised.'},
{n:'7.2.',q:'Placenta: (A) part (iii) (B) functions of (i) and (ii) (C) two other functions.',a:'A. <b>Umbilical cord</b>.\nB. (i) Umbilical vein: carries oxygenated, nutrient-rich blood from the placenta to the fetus. (ii) Umbilical artery: carries deoxygenated blood and wastes (CO₂, urea) from the fetus to the placenta.\nC. 1. It produces hormones (progesterone, oestrogen) that maintain the pregnancy. 2. It passes the mother\'s antibodies to the fetus (passive immunity) and acts as a barrier to some harmful substances and microbes.'}
]},
{t:'B5 – Environmental biology (28 marks)', qs:[
{n:'1.',q:'Dichotomous key: identify the four insects.',a:'Per the marking scheme: 2a → IV, 2b → II, 3a → III, 3b → I. Follow each pair of statements in the key and choose the one that matches each insect.'},
{n:'2A–B.',q:'Define population size; two estimation methods.',a:'Population size: the total number of individuals of one species living in an area at a particular time.\nMethods: 1. Quadrat sampling (count in sample squares and scale up). 2. Mark–release–recapture (N = first catch × second catch ÷ marked in second catch).'},
{n:'2D.',q:'Define natality and mortality.',a:'Natality: the birth rate (new individuals added by reproduction per unit time).\nMortality: the death rate (individuals lost through death per unit time).'},
{n:'2E.',q:'An example of a Type I and a Type II organism.',a:'Type I: humans (or elephants) – most survive to old age.\nType II: birds (or lizards, rodents) – a roughly constant death rate throughout life.'},
{n:'2F.',q:'How natality and mortality produce the Type III curve.',a:'Type III organisms (e.g. fish, oysters, coral) have very high natality: they release huge numbers of eggs or seeds. Mortality is very high at the early stage (predation, no parental care), so the curve drops steeply at first. The few survivors have low mortality and live a long time, so the curve then flattens.'},
{n:'3A.',q:'(i) Ecological term for the change in vegetation with altitude (ii) the effect of global warming.',a:'(i) <b>Zonation</b>.\n(ii) As temperatures rise, each vegetation zone shifts to higher altitudes. Species adapted to the cold top zones lose habitat and may become extinct, and crops may need to be grown higher up.'},
{n:'4.1.',q:'Pyramids of numbers and biomass: difference, limitation, shape, why biomass is upright, human impact.',a:'A. A pyramid of numbers counts the organisms at each level; a pyramid of biomass shows the dry mass of organisms at each level.\nB. A pyramid of numbers ignores the size of organisms (one tree = one), so it does not show energy flow accurately.\nC. It is not upright because one large producer (a tree) can support many small herbivores (insects), so the second bar is wider than the first.\nD. On land, energy and biomass are lost at each level (respiration, heat, uneaten parts, waste), so each level has less biomass than the one below.\nE. Deforestation or overfishing removes producers or consumers and reduces biomass. (Also: pollution, climate change, coral bleaching.)'},
{n:'4.2.',q:'(A) Define biodiversity (B) one human activity that reduces it (C) why high biodiversity matters.',a:'A. The variety of living things in an area: species diversity, genetic diversity and ecosystem diversity.\nB. Overfishing, habitat destruction (e.g. clearing mangroves, sand mining), pollution, or introducing invasive species.\nC. Many species give an ecosystem stability: if one species declines, others can fill its role in the food web. It also provides services (pollination, nutrient cycling, coastal protection by reefs) and resources (food, medicines).'}
]},
{t:'Section C – Extended responses (2 × 10 marks)', qs:[
{n:'C1.',q:'How pH, temperature, surface area and substrate concentration affect enzyme-controlled reactions (refer to specificity, optimum conditions, denaturation).',a:'<b>Introduction:</b> Enzymes are protein biological catalysts that speed up reactions by lowering the activation energy. Each has an active site with a specific shape.\n<b>Specificity:</b> only a substrate with a complementary shape can bind to the active site (induced fit), forming an enzyme–substrate complex.\n<b>Temperature:</b> as temperature rises, molecules move faster, so there are more collisions and the rate increases up to the optimum (~37 °C in humans). Above the optimum, hydrogen bonds in the enzyme break, the active site changes shape and the enzyme is <b>denatured</b>, so the rate falls sharply.\n<b>pH:</b> each enzyme has an optimum pH (pepsin ~2, salivary amylase ~7). Away from it, charges in the active site change; extreme pH denatures the enzyme.\n<b>Surface area:</b> a larger substrate surface area (e.g. chewed food) exposes more substrate to the enzymes, so there are more collisions and a faster rate.\n<b>Substrate concentration:</b> the rate increases with concentration until all active sites are occupied (saturation), then levels off.\n<b>Conclusion:</b> enzymes work fastest under optimum conditions. Conditions that change the shape of the active site reduce activity, and denaturation is permanent.'},
{n:'C2.',q:'How the liver maintains blood glucose: the roles of the pancreas, insulin and glucagon; Type 1 and Type 2 diabetes.',a:'<b>Introduction:</b> Blood glucose must be kept near 4–7 mmol/L (homeostasis) by negative feedback.\n<b>Pancreas:</b> the islets of Langerhans detect blood glucose. β cells release insulin when glucose is high; α cells release glucagon when it is low.\n<b>Insulin:</b> after a meal, insulin makes liver and muscle cells take up glucose and convert it to <b>glycogen</b> (glycogenesis), lowering blood glucose.\n<b>Glucagon:</b> between meals or during exercise, glucagon makes the liver break glycogen down into glucose (glycogenolysis) and release it into the blood, raising blood glucose.\n<b>Diabetes:</b> Type 1: the immune system destroys the β cells, so little or no insulin is made; it is treated with insulin injections. Type 2: body cells become resistant to insulin (linked to obesity, sugary food and lack of exercise). It is very common in Kiribati and is managed by diet, exercise and medicine. In both types, blood glucose stays high, damaging the eyes, kidneys, nerves and feet.\n<b>Conclusion:</b> the liver, pancreas, insulin and glucagon work together to keep glucose balanced. A healthy lifestyle helps prevent Type 2 diabetes.'}
]}
]}
]});
