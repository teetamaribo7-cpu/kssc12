addSubject({id:'che', topics:[
{t:'Atomic structure and the periodic table', notes:`
<ul><li>Electron configuration fills 1s 2s 2p 3s 3p 4s 3d… Cl = 1s²2s²2p⁶3s²3p⁵; Cl⁻ = 1s²2s²2p⁶3s²3p⁶ (gains 1 e⁻).</li><li>Elements in the same <b>group</b> have the same number of valence electrons (N and P both have 5).</li><li><b>Atomic radius</b> = half the distance between the nuclei of two bonded identical atoms.</li></ul>
<h3>Trends across Period 3 (Na → Cl)</h3><ul><li>Atomic radius <b>decreases</b>: nuclear charge increases while the electrons are in the same shell, so they are pulled closer.</li><li>Electronegativity <b>increases</b>.</li><li>Bond type from the electronegativity difference: large (&gt;1.7) → ionic (Mg–S: 2.57 − 1.30 = 1.27, but a metal + non-metal → ionic); small → covalent.</li></ul>
<h3>Down a group</h3><p>Atomic radius increases (more shells); electronegativity decreases.</p>`,
quiz:[
{q:'Electron configuration of Cl⁻',o:['1s²2s²2p⁶3s²3p⁵','1s²2s²2p⁶3s²3p⁶','1s²2s²2p⁶3s²3p⁴','1s²2s²2p⁶3s²3p⁶4s²'],a:1,e:'Cl gains one electron → 18 electrons.'},
{q:'Which pair have the same number of valence electrons?',o:['Ca and Li','O and F','B and C','N and P'],a:3,e:'Same group (15).'},
{q:'Across Period 3, atomic radius…',o:['increases','decreases','stays the same','doubles'],a:1,e:'Increasing nuclear charge pulls the electrons in.'},
{q:'Across a period, electronegativity…',o:['increases','decreases','is zero','is random'],a:0,e:'Cl is the most electronegative in Period 3.'},
{q:'Number of electrons in Na⁺',o:['11','10','12','1'],a:1,e:'11 − 1.'},
{q:'Down Group 1, atomic radius…',o:['decreases','increases','stays the same','halves'],a:1,e:'More electron shells.'}
]},
{t:'Bonding, shapes and intermolecular forces', notes:`
<ul><li><b>Ionic:</b> a metal transfers electrons to a non-metal (Ca gives 2 e⁻ to O → Ca²⁺ O²⁻). High mp; conducts when molten or dissolved; solid ionic compounds do NOT conduct (the ions are fixed).</li><li><b>Covalent:</b> non-metals <b>share</b> pairs of electrons.</li><li><b>Metallic:</b> electrostatic attraction between positive metal ions and a <b>sea of delocalised electrons</b>. It is non-directional, so layers can slide → malleable and ductile; free electrons → conducts.</li></ul>
<h3>Structures</h3><table><tr><th>Type</th><th>Example</th><th>Properties</th></tr><tr><td>Discrete molecular</td><td>I₂, sulfur, sugar</td><td>Low mp, soft, does not conduct</td></tr><tr><td>Covalent network</td><td>diamond, SiO₂</td><td>Very high mp, hard, does not conduct (except graphite)</td></tr><tr><td>Ionic lattice</td><td>NaCl</td><td>High mp, brittle</td></tr><tr><td>Metallic</td><td>Al, Cu</td><td>Conducts, malleable</td></tr></table>
<h3>Intermolecular forces (weakest → strongest)</h3><p>Dispersion (London) &lt; dipole–dipole &lt; <b>hydrogen bonds</b> (H bonded to N, O or F). Ethanol (H-bonds, bp 78 °C) &gt; dimethyl ether (dipole only, bp −24 °C).</p>
<h3>VSEPR shapes</h3><table><tr><th>Electron regions</th><th>Lone pairs</th><th>Shape</th><th>Angle</th></tr><tr><td>2</td><td>0</td><td>Linear (CO₂)</td><td>180°</td></tr><tr><td>3</td><td>0</td><td>Trigonal planar (BF₃)</td><td>120°</td></tr><tr><td>3</td><td>1</td><td>Bent (SO₂)</td><td>~119°</td></tr><tr><td>4</td><td>0</td><td>Tetrahedral (CH₄)</td><td>109.5°</td></tr><tr><td>4</td><td>1</td><td>Trigonal pyramidal (NH₃)</td><td>107°</td></tr><tr><td>4</td><td>2</td><td>Bent (H₂O)</td><td>104.5°</td></tr></table>
<p>Polarity: CH₂Cl₂ is tetrahedral with polar C–Cl bonds that do not cancel → <b>polar</b>. CCl₄ is symmetrical → non-polar.</p>`,
quiz:[
{q:'When Ca bonds with O…',o:['they share electrons','Ca transfers 2 electrons to O','Ca gains 2 electrons','O loses 2 electrons'],a:1,e:'Ionic bond: Ca²⁺ and O²⁻.'},
{q:'How do ionic substances dissolve in water?',o:['covalent bonds break','they gain electrons from water','they react to form a new compound','polar water molecules surround and separate the ions'],a:3,e:'Ion–dipole attraction pulls the ions out of the lattice.'},
{q:'Shape of SO₂',o:['linear','bent (~119°)','tetrahedral','trigonal planar'],a:1,e:'3 regions with 1 lone pair.'},
{q:'Ethanol boils higher than dimethyl ether because ethanol has…',o:['dispersion forces only','hydrogen bonds','ionic bonds','more electrons'],a:1,e:'O–H gives hydrogen bonding.'},
{q:'Metals are malleable because…',o:['the bonds are directional','layers of ions can slide in the sea of electrons','they have no electrons','they are ionic'],a:1,e:'Metallic bonding is non-directional.'},
{q:'A soft substance that melts at 109 °C and does not conduct is…',o:['metallic','ionic','discrete molecular','covalent network'],a:2,e:'Weak intermolecular forces give a low mp.'},
{q:'Solid NaCl does not conduct because…',o:['it has no ions','its ions are fixed in the lattice','it is covalent','it is a metal'],a:1,e:'It conducts when molten or dissolved (mobile ions).'}
]},
{t:'The mole and stoichiometry', notes:`
<div class="key">n = m/M · n = c × V(L) · number of particles = n × 6.02×10²³</div>
<ul><li>Relative atomic mass = weighted mean mass of an element's isotopes relative to ¹²C = 12.</li><li>Molar mass = mass of 1 mole (g/mol). M[(NH₄)₃PO₄] = 3(14 + 4) + 31 + 4(16) = 149 g/mol.</li><li>Empirical formula = simplest whole-number ratio of atoms; molecular formula = the actual number of atoms.</li></ul>
<h3>Empirical formula method</h3><ol><li>Mass of each element (find the missing one by subtraction).</li><li>Divide each by its molar mass → moles.</li><li>Divide by the smallest number of moles → ratio.</li></ol><p>Ca 3.34 g, H 0.34 g, P 5.18 g, O 10.66 g → 0.0835 : 0.34 : 0.167 : 0.666 → 1 : 4 : 2 : 8 → CaH₄P₂O₈ = Ca(H₂PO₄)₂.</p>
<h3>Limiting reagent</h3><p>Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃. n(Pb²⁺) = 0.025 × 0.2 = 0.005; n(KI) = 0.040 × 0.150 = 0.006. All the Pb would need 0.010 mol KI → KI is limiting → n(PbI₂) = 0.003 mol → 0.003 × 461 = <b>1.38 g</b>.</p>`,
quiz:[
{q:'Molecules in 0.45 mol of Cl₂',o:['6.02×10²³','2.71×10²³','5.42×10²³','0.45×10²³'],a:1,e:'0.45 × 6.02×10²³.'},
{q:'Moles in 6.8 g of NaCl (M = 58.5)',o:['0.116','8.6','397','0.58'],a:0,e:'6.8/58.5.'},
{q:'3.6 g of NaOH in 250 mL. Concentration?',o:['0.09 M','0.36 M','0.0144 M','14.4 M'],a:1,e:'0.09 mol ÷ 0.25 L.'},
{q:'Empirical formula of C₆H₁₂O₆',o:['CHO','CH₂O','C₂H₄O₂','C₆H₁₂O₆'],a:1,e:'Divide by 6.'},
{q:'Molar mass of CO₂',o:['28','44','32','12'],a:1,e:'12 + 32.'},
{q:'The limiting reagent is the one that…',o:['is in excess','is used up first','is a catalyst','has the highest M'],a:1,e:'It limits the amount of product.'},
{q:'The empirical formula shows…',o:['the actual number of atoms','the simplest ratio of atoms','only the ions','the mass'],a:1,e:'The molecular formula shows the actual number.'}
]},
{t:'Titration, analysis and Period 3 compounds', notes:`
<ul><li><b>Standard solution:</b> a solution of accurately known concentration.</li><li><b>Equivalence point:</b> where stoichiometric amounts of acid and base have reacted. <b>End point:</b> where the indicator changes colour.</li><li><b>Gravimetric analysis</b> of a hydrated salt: heat it to constant mass → the mass lost = water of crystallisation.</li></ul>
<p>Vinegar: 10 mL diluted to 250 mL (×25). 25 mL needs 16.0 mL of 0.05 M NaOH → n = 0.0008 mol → c = 0.0008/0.025 = 0.032 M → original = 0.032 × 25 = <b>0.80 M</b>.</p>
<h3>Ion tests</h3><table><tr><th>Ion</th><th>Test</th><th>Result</th></tr><tr><td>Cl⁻</td><td>AgNO₃</td><td>White ppt (AgCl), dissolves in NH₃</td></tr><tr><td>SO₄²⁻</td><td>Ba(NO₃)₂</td><td>White ppt (BaSO₄)</td></tr><tr><td>Pb²⁺</td><td>dil. H₂SO₄ / NaOH</td><td>White PbSO₄; white Pb(OH)₂ dissolves in excess NaOH but not in excess NH₃</td></tr><tr><td>Cu²⁺</td><td>NaOH</td><td>Blue ppt</td></tr><tr><td>Fe³⁺</td><td>NaOH</td><td>Red-brown ppt</td></tr></table>
<h3>Period 3 oxides</h3><p>Na₂O, MgO: basic. Al₂O₃: <b>amphoteric</b> (reacts with acids AND bases). SiO₂, P₄O₁₀, SO₂: acidic. Melting points fall from giant ionic/covalent (MgO, SiO₂) to simple molecular (P₄O₁₀, SO₂), which have only weak intermolecular forces.</p>`,
quiz:[
{q:'Al₂O₃ reacts with both H₂SO₄ and KOH. It is…',o:['acidic','basic','amphoteric','neutral'],a:2,e:'Amphoteric oxides react with both acids and bases.'},
{q:'Which element forms an oxide XO₂?',o:['Li','Si','P','Mg'],a:1,e:'SiO₂.'},
{q:'A white ppt with AgNO₃ that dissolves in NH₃ shows…',o:['SO₄²⁻','Cl⁻','I⁻','CO₃²⁻'],a:1,e:'AgCl.'},
{q:'A standard solution has…',o:['pH 7','an accurately known concentration','no ions','an indicator in it'],a:1,e:'Used in titrations.'},
{q:'The main purpose of gravimetric analysis of a hydrated salt',o:['find the pH','find the ions','find the temperature change','find the water of crystallisation by mass loss'],a:3,e:'Heat to constant mass.'},
{q:'SO₂ has a lower mp than SiO₂ because SO₂ is…',o:['ionic','a simple molecule with weak IMFs','metallic','a giant lattice'],a:1,e:'SiO₂ is a covalent network.'}
]},
{t:'Hydrocarbons, isomers and polymers', notes:`
<table><tr><th>Family</th><th>General formula</th><th>Bond</th><th>Example</th></tr><tr><td>Alkane</td><td>CₙH₂ₙ₊₂</td><td>C–C</td><td>butane CH₃CH₂CH₂CH₃</td></tr><tr><td>Alkene</td><td>CₙH₂ₙ</td><td>C=C</td><td>but-2-ene CH₃CH=CHCH₃</td></tr><tr><td>Alkyne</td><td>CₙH₂ₙ₋₂</td><td>C≡C</td><td>pent-2-yne CH₃CH₂C≡CCH₃</td></tr></table>
<ul><li><b>Unsaturated</b> = contains C=C or C≡C (can undergo addition reactions).</li><li><b>Bromine water</b>: orange → colourless with alkenes and alkynes; stays orange with alkanes.</li><li>CH₃CH=CHCH₃ + Br₂ → CH₃CHBrCHBrCH₃ (2,3-dibromobutane).</li><li><b>Structural isomers</b>: same molecular formula, different structure. C₅H₈ alkynes: pent-1-yne, pent-2-yne, 3-methylbut-1-yne.</li><li><b>Geometric (cis/trans) isomers</b>: need a C=C with two different groups on each carbon (cis-but-2-ene and trans-but-2-ene).</li><li>Ethyne preparation: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.</li></ul>
<h3>Polymers</h3><p>Addition polymer of chloroethene (vinyl chloride, CH₂=CHCl) → PVC, –[CH₂–CH(Cl)]ₙ–. Polythene does not biodegrade (long, strong non-polar C–C chains that microbes cannot break down) → litter in the lagoon and on beaches, harming turtles and fish.</p>
<h3>Alkyl halides</h3><p>Name with the halogen as a prefix and the lowest numbers: CH₃CH₂CH₂I = 1-iodopropane; CH₃CH₂Br = bromoethane; CH₃CH₂CH₂CH₂Cl = 1-chlorobutane. Primary = the C–X carbon is bonded to 1 other carbon; secondary = 2; tertiary = 3.</p>`,
quiz:[
{q:'CH₃CHCHCH₃ (with C=C) is an…',o:['alkane','alkene','alkyne','alcohol'],a:1,e:'Contains C=C.'},
{q:'General formula of an alkene',o:['CₙH₂ₙ₊₂','CₙH₂ₙ','CₙH₂ₙ₋₂','CₙH₂ₙO'],a:1,e:'One C=C.'},
{q:'Bromine water stays orange with…',o:['ethene','ethyne','butane','but-2-ene'],a:2,e:'Alkanes do not react (no light).'},
{q:'The monomer of PVC is…',o:['ethene','chloroethene (vinyl chloride)','propene','styrene'],a:1,e:'CH₂=CHCl.'},
{q:'Name CH₃CH₂CH₂I',o:['iodoethane','1-iodopropane','propyl iodide-2','iodobutane'],a:1,e:'3 carbons, I on C1.'},
{q:'Which can show cis/trans isomerism?',o:['but-1-ene','but-2-ene','ethene','propene'],a:1,e:'Each C of the C=C has two different groups.'},
{q:'Name CH₃CH₂C≡CCH₃',o:['pent-1-yne','pent-2-yne','but-2-yne','pent-2-ene'],a:1,e:'5 carbons, triple bond starting at C2.'}
]},
{t:'Alcohols, aldehydes, ketones, acids and esters', notes:`
<h3>Alcohols (–OH)</h3><table><tr><th>Type</th><th>Acidified K₂Cr₂O₇ (orange)</th><th>Product</th></tr><tr><td>Primary</td><td>turns green</td><td>aldehyde → carboxylic acid</td></tr><tr><td>Secondary</td><td>turns green</td><td>ketone</td></tr><tr><td>Tertiary</td><td>stays orange</td><td>no reaction</td></tr></table>
<h3>Tests for carbonyls</h3><ul><li>2,4-DNPH: orange precipitate with ANY aldehyde or ketone.</li><li>Fehling's / Benedict's: brick-red precipitate with <b>aldehydes only</b>.</li><li>Tollens': silver mirror with <b>aldehydes only</b>.</li><li>Iodoform (I₂/NaOH): yellow precipitate with CH₃CO– (methyl ketones) and CH₃CH(OH)– alcohols (e.g. butan-2-ol → butan-2-one).</li></ul>
<p>Glucose gives positive Fehling's/Benedict's tests → it has an aldehyde group in its open-chain form.</p>
<h3>Carboxylic acids and esters</h3><p>CₙH₂ₙO₂: M = 88 → 14n + 32 = 88 → n = 4 → C₄H₈O₂, butanoic acid CH₃CH₂CH₂COOH.</p><p>Acid + alcohol ⇌ ester + water (conc. H₂SO₄ catalyst, heated under reflux). Ethanoic acid + propan-1-ol → <b>propyl ethanoate</b> CH₃COOCH₂CH₂CH₃ (sweet smell).</p><ul><li>Reflux: condenses volatile reactants and products back into the flask so nothing escapes.</li><li>Water bath: gentle, even heating; the reactants are flammable.</li><li>Conc. H₂SO₄: catalyst and dehydrating agent (removes water, increasing the yield).</li></ul>`,
quiz:[
{q:'Which alcohol does NOT change acidified dichromate?',o:['primary','secondary','tertiary','all do'],a:2,e:'Tertiary alcohols resist oxidation.'},
{q:'A silver mirror with Tollens\' reagent shows…',o:['ketone','aldehyde','alcohol','ester'],a:1,e:'Aldehydes reduce Ag⁺ to Ag.'},
{q:'Ethanoic acid + propanol gives…',o:['ethyl propanoate','propyl ethanoate','propanoic acid','ethanol'],a:1,e:'The alcohol part comes first in the name: propyl ethanoate.'},
{q:'The role of conc. H₂SO₄ in esterification',o:['reactant','catalyst/dehydrating agent','indicator','solvent only'],a:1,e:'It speeds up the reaction and removes water.'},
{q:'Oxidising butan-2-ol gives…',o:['butanal','butanoic acid','butan-2-one','butane'],a:2,e:'Secondary alcohol → ketone.'},
{q:'2,4-DNPH gives an orange precipitate with…',o:['alcohols','aldehydes and ketones','alkanes','esters only'],a:1,e:'A test for the C=O group.'}
]},
{t:'Fats, oils and carbohydrates', notes:`
<ul><li>Saturated fats (butter, ~70% saturated): straight chains pack closely → <b>higher mp</b>, solid at room temperature.</li><li>Unsaturated oils (margarine/vegetable oil): C=C makes kinks → lower mp → softer, spreads easily.</li><li><b>Partial hydrogenation</b> adds H₂ across some C=C bonds → higher mp, firmer, more viscous product. Risk: <b>trans fats</b> form, which raise "bad" LDL cholesterol → heart disease.</li></ul>
<h3>Carbohydrates</h3><ul><li>Glucose C₆H₁₂O₆ exists as an open chain (aldehyde group) and a 6-membered ring.</li><li>Starch: amylose (linear, coils tightly, less soluble) and amylopectin (branched, packs loosely, more soluble).</li><li>Benedict's/Fehling's test → reducing sugars (brick-red precipitate).</li></ul>`,
quiz:[
{q:'Why is butter solid at room temperature?',o:['highly unsaturated','mostly saturated, so chains pack closely','contains water','it is a carbohydrate'],a:1,e:'Saturated fats have higher melting points.'},
{q:'Partial hydrogenation of oil makes it…',o:['more liquid','firmer, with a higher mp','a protein','more unsaturated'],a:1,e:'Some C=C become C–C.'},
{q:'A health risk of partially hydrogenated fat',o:['trans fats raise LDL cholesterol','vitamin overdose','it is radioactive','none'],a:0,e:'Linked to heart disease.'},
{q:'Which spreads more easily straight from the fridge?',o:['butter','margarine','lard','both the same'],a:1,e:'More unsaturated → lower mp.'},
{q:'Glucose gives a brick-red precipitate with Benedict\'s because it has…',o:['a ketone group','an aldehyde group (open chain)','an ester group','a carboxyl group'],a:1,e:'A reducing sugar.'}
]},
{t:'Energy changes and rates of reaction', notes:`
<ul><li><b>Exothermic:</b> releases heat, the temperature rises, ΔH negative (CaO + water: 23 → 39 °C; neutralisation).</li><li><b>Endothermic:</b> absorbs heat, the temperature falls, ΔH positive.</li></ul>
<div class="key">ΔH(reaction) = ΣΔH_f(products) − ΣΔH_f(reactants)</div>
<p>N₂ + 3H₂ → 2NH₃: ΔH = 2(−46.18) − 0 = −92.36 kJ. For 5 mol NH₃: 5 × (−46.18) = −230.9 kJ (released).</p>
<h3>Energy profile diagram</h3><p>X = activation energy (from the reactants up to the peak), Y = ΔH (reactants to products), a higher curve = the uncatalysed path, a lower curve = the catalysed path.</p>
<h3>Collision theory</h3><p>Reactions need collisions with enough energy (≥ Ea) and the correct orientation. The rate increases with: higher concentration, larger surface area (powder), higher temperature, and a catalyst (lowers Ea).</p><p>Mg powder in 2.0 M HCl is faster than ribbon in 0.1 M (larger surface area and more concentrated → more frequent collisions).</p>`,
quiz:[
{q:'The temperature rises from 26 °C to 32 °C. ΔH is…',o:['negative (heat released)','negative (heat absorbed)','positive (absorbed)','positive (released)'],a:0,e:'Exothermic → ΔH < 0.'},
{q:'A catalyst speeds up a reaction by…',o:['raising Ea','lowering Ea','adding heat','increasing ΔH'],a:1,e:'It provides an alternative pathway.'},
{q:'Which is fastest with acid?',o:['Mg ribbon in 0.1 M','Mg powder in 2.0 M','Mg ribbon in 2.0 M','Mg powder in 0.1 M'],a:1,e:'Largest surface area and highest concentration.'},
{q:'ΔH for N₂ + 3H₂ → 2NH₃ (ΔH_f NH₃ = −46.18)',o:['−46.18','−92.36','+92.36','−138.5'],a:1,e:'2 × −46.18.'},
{q:'Endothermic means…',o:['heat is released','heat is absorbed','there is no energy change','light is given out'],a:1,e:'ΔH > 0.'}
]},
{t:'Equilibrium, acids and bases', notes:`
<ul><li><b>Dynamic equilibrium</b> (only in a <b>closed system</b>): the forward and reverse rates are equal, and the concentrations stay constant.</li><li><b>Le Chatelier:</b> the system shifts to oppose a change.<ul><li>Lower temperature → favours the exothermic direction.</li><li>Higher pressure → favours the side with fewer gas moles.</li><li>A catalyst → equilibrium is reached faster; the position does NOT change.</li></ul></li></ul>
<p>2SO₂ + O₂ ⇌ 2SO₃, ΔH = −196 kJ: lowering T to 450 K shifts it RIGHT (more SO₃) but the rate is slower. High pressure would increase the yield, but 2 atm is used because the yield is already high and high pressure is expensive and dangerous (strong equipment, energy cost). V₂O₅ = catalyst.</p>
<h3>Acids and bases</h3><ul><li>Brønsted–Lowry acid = proton (H⁺) donor; base = proton acceptor.</li><li>Strong acids (H₂SO₄, HCl) <b>fully</b> dissociate (lower pH at the same concentration); weak acids (ethanoic acid) partially dissociate.</li><li>NaOH(aq) → Na⁺(aq) + OH⁻(aq) (fully dissociates).</li></ul>
<div class="key">pH = −log[H⁺] · pOH = −log[OH⁻] · pH + pOH = 14</div><p>[OH⁻] = 2.5×10⁻⁴ → pOH = 3.60 → pH = <b>10.40</b>.</p>`,
quiz:[
{q:'Dynamic equilibrium means…',o:['all reactions stop','forward rate = reverse rate and concentrations stay constant','only the forward reaction occurs','more products always form'],a:1,e:'Both reactions continue at equal rates.'},
{q:'Equilibrium can only be reached in…',o:['an open system','a closed system','a vacuum','a beaker'],a:1,e:'Nothing can escape.'},
{q:'For an exothermic reaction, lowering the temperature…',o:['shifts left','shifts right (more product)','has no effect','stops it'],a:1,e:'Favours the exothermic forward direction.'},
{q:'H₂SO₄ is red and ethanoic acid orange with universal indicator (same concentration) because…',o:['H₂SO₄ partially dissociates','H₂SO₄ fully dissociates, giving more H⁺','ethanoic acid fully dissociates','indicator only tests alkali'],a:1,e:'Strong vs weak acid.'},
{q:'pH when [H⁺] = 1×10⁻³ M',o:['3','11','−3','0.001'],a:0,e:'−log(10⁻³).'},
{q:'A Brønsted–Lowry acid is a…',o:['proton acceptor','proton donor','electron donor','hydroxide donor'],a:1,e:'It donates H⁺.'},
{q:'A catalyst changes the equilibrium position.',o:['True','False'],a:1,e:'It only speeds up reaching equilibrium.'}
]},
{t:'Redox and electrolysis', notes:`
<div class="key">OIL RIG: Oxidation Is Loss (of electrons), Reduction Is Gain. Oxidation = increase in oxidation number.</div>
<ul><li><b>Oxidant</b> (oxidising agent) is itself reduced; <b>reductant</b> is itself oxidised.</li><li>Cu²⁺ + Zn → Cu + Zn²⁺: Zn is the reducing agent (it loses electrons).</li><li>2I⁻ + Br₂ → I₂ + 2Br⁻: oxidant Br₂, reductant I⁻.</li><li>Oxidation number of S in S₄O₆²⁻: 4x + 6(−2) = −2 → x = +2.5.</li><li>Acidified K₂Cr₂O₇: orange (Cr₂O₇²⁻) → green (Cr³⁺).</li></ul>
<h3>Permanganate titration</h3><p>MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺. Purple MnO₄⁻ turns colourless; the end point is the first <b>permanent pale pink</b>.</p>
<h3>Electrolysis of CuSO₄ (inert electrodes)</h3><p>Cathode (−): Cu²⁺ + 2e⁻ → Cu (copper is deposited; the blue colour fades). Anode (+): oxygen gas is produced (2H₂O → O₂ + 4H⁺ + 4e⁻).</p>`,
quiz:[
{q:'Oxidation is…',o:['gain of electrons','loss of electrons','gain of neutrons','loss of protons'],a:1,e:'OIL RIG.'},
{q:'Cu²⁺ + Zn → Cu + Zn²⁺. The reducing agent is…',o:['Zn','Cu²⁺','Cu','Zn²⁺'],a:0,e:'Zn loses electrons, reducing Cu²⁺.'},
{q:'Oxidation state of S in SO₄²⁻',o:['+4','+6','−2','+2'],a:1,e:'x + 4(−2) = −2.'},
{q:'The orange-to-green oxidising agent is…',o:['KMnO₄','acidified K₂Cr₂O₇','I₂','Br₂'],a:1,e:'Cr₂O₇²⁻ → Cr³⁺.'},
{q:'In the electrolysis of CuSO₄, copper forms at the…',o:['anode','cathode','both electrodes','neither'],a:1,e:'Cu²⁺ is reduced at the cathode.'},
{q:'An oxidant is…',o:['oxidised','reduced','unchanged','a catalyst'],a:1,e:'It gains electrons.'}
]}
],
papers:[
{y:2025, src:'P2025/KSSC Chemistry 2025.pdf', note:'Answers are checked against the 2025 marking scheme. ⚠ marks show where the official scheme is wrong or the question has an error.',
secs:[
{t:'Section A – Multiple choice (20 × 2 marks)', qs:[
{n:'1.',q:'Electron configuration of Cl⁻',a:'<b>B</b>: 1s²2s²2p⁶3s²3p⁶ (17 + 1 = 18 electrons).'},
{n:'2.',q:'Same number of valence electrons?',a:'<b>D</b>: nitrogen and phosphorus (both Group 15, 5 valence electrons).'},
{n:'3.',q:'What happens when calcium bonds with oxygen?',a:'<b>B</b>: Ca transfers a pair of electrons to O, giving Ca²⁺ and O²⁻.'},
{n:'4.',q:'How do ionic substances dissolve in water?',a:'<b>D</b>: the polar ends of water molecules surround the ions and pull them apart (electrostatic attraction).'},
{n:'5.',q:'Molecules in 0.45 mol of Cl₂?',a:'<b>D</b>: 0.45 × 6.02×10²³ = 2.71×10²³ molecules.'},
{n:'6.',q:'Empirical vs molecular formula?',a:'<b>C</b>: empirical = simplest ratio; molecular = actual number of atoms.'},
{n:'7.',q:'Purpose of gravimetric analysis of a hydrated salt?',a:'<b>D</b>: to find the water of crystallisation from the mass lost on heating.'},
{n:'8.',q:'NaOH(aq) + HCl(aq) → NaCl(?) + H₂O(?)',a:'<b>C</b>: NaCl(aq) + H₂O(l).'},
{n:'9.',q:'3.6 g of NaOH in 250 mL. Concentration?',a:'<b>B</b>: n = 3.6/40 = 0.09 mol; c = 0.09/0.250 = 0.36 mol/L.'},
{n:'10.',q:'A = CH₃CHCHCH₃, B = CH₃CH₂CH₂CH₃, C = CHCCH₂CH₃',a:'<b>C</b>: A alkene (C=C), B alkane, C alkyne (C≡C).'},
{n:'11.',q:'Name X = CH₃CH₂CH₂I, Y = CH₃CH₂Br, Z = CH₃CH₂CH₂CH₂Cl',a:'<b>D</b>: 1-iodopropane, bromoethane, 1-chlorobutane.'},
{n:'12.',q:'Glucose: red-orange precipitate with Fehling\'s and Benedict\'s.',a:'<b>B</b>: glucose has an aldehyde group in its open-chain structure.'},
{n:'13.',q:'Ethanoic acid + propanol (conc. H₂SO₄, reflux) → sweet-smelling product',a:'<b>B</b>: propyl ethanoate, CH₃COOCH₂CH₂CH₃.'},
{n:'14.',q:'Nature of aluminium oxide?',a:'<b>A</b>: amphoteric (reacts with both acid and base).'},
{n:'15.',q:'Which element forms XO₂?',a:'<b>B</b>: silicon (SiO₂).'},
{n:'16.',q:'Temperature rises from 26.0 to 32.2 °C. Enthalpy change?',a:'<b>B</b>: negative, because heat is released (exothermic).'},
{n:'17.',q:'Definition of dynamic equilibrium',a:'<b>B</b>: the forward and reverse reactions occur at the same rate; the concentrations stay constant.'},
{n:'18.',q:'H₂SO₄ red, ethanoic acid orange (equal concentrations)',a:'<b>B</b>: sulfuric acid fully dissociates, producing more H⁺ ions.'},
{n:'19.',q:'Definition of oxidation',a:'<b>B</b>: loss of electrons.'},
{n:'20.',q:'Cu²⁺ + Zn → Cu + Zn²⁺. Reducing agent?',a:'<b>A</b>: Zn (it is oxidised to Zn²⁺, giving electrons to Cu²⁺).'}
]},
{t:'Q21 – Atomic structure and bonding (22 marks)', qs:[
{n:'A1.',q:'Define atomic radius.',a:'Half the distance between the nuclei of two identical atoms that are bonded together.'},
{n:'A2(i).',q:'Trend in atomic radii from Na to Cl.',a:'It <b>decreases</b> (185 → 98 pm). The nuclear charge increases while electrons are added to the same shell, so the outer electrons are pulled closer.'},
{n:'A2(ii).',q:'Type of bond between Mg and S.',a:'<b>Ionic</b>: Mg (a metal, low electronegativity 1.30) transfers 2 electrons to S (non-metal, 2.57) → Mg²⁺S²⁻.'},
{n:'B1.',q:'Define (i) covalent bond (ii) metallic bond.',a:'(i) A bond in which two non-metal atoms share one or more pairs of electrons.\n(ii) The electrostatic attraction between positive metal ions and a "sea" of delocalised electrons.'},
{n:'B2.',q:'Which is a discrete molecular substance? A: soft, mp 109 °C, non-conductor. B: hard, mp 3550 °C, non-conductor.',a:'<b>Substance A</b>. Its low melting point and softness show weak intermolecular forces between separate molecules. (B is a covalent network, e.g. diamond.)'},
{n:'B3.',q:'Explain why aluminium is strong and malleable.',a:'Strong: a giant lattice of Al³⁺ ions held by strong electrostatic attraction to a sea of delocalised electrons.\nMalleable: metallic bonding is non-directional, so layers of ions can slide over each other without breaking the bonds.'},
{n:'B4.',q:'Why does ethanol (78 °C) boil higher than dimethyl ether (−24 °C)?',a:'Ethanol has an O–H group, so it forms strong <b>hydrogen bonds</b> between molecules. Dimethyl ether has no O–H, so it only has weaker dipole–dipole and dispersion forces. More energy is needed to separate ethanol molecules, so its boiling point is higher.'},
{n:'B5.',q:'Zinc or carbon to connect copper wires? Explain with physical properties.',a:'<b>Zinc</b>: it is a metal, so it is a good electrical conductor, and it is malleable and ductile (can be shaped and drawn into wires). Carbon (graphite) is brittle and cannot be bent into connectors.'},
{n:'B6.',q:'Shape and bond angle of SO₂ (VSEPR).',a:'S has 3 electron regions: 2 bonding regions + 1 lone pair → <b>bent (V-shaped)</b>, angle about <b>119°</b> (slightly less than 120° because the lone pair repels more).'},
{n:'B7.',q:'Discuss the polarity of CH₂Cl₂.',a:'Tetrahedral shape. The C–Cl bonds are polar (Cl is more electronegative) and the C–H bonds are almost non-polar. Because the molecule is not symmetrical, the bond dipoles do not cancel → net dipole → CH₂Cl₂ is <b>polar</b>.'}
]},
{t:'Q22 – Quantitative chemistry (24 marks)', qs:[
{n:'A1.',q:'Define (i) relative atomic mass (ii) molar mass.',a:'(i) The weighted mean mass of an atom of an element (its isotopes) relative to 1/12 of the mass of a carbon-12 atom.\n(ii) The mass of one mole of a substance, in g/mol.'},
{n:'A2.',q:'Molar mass of (NH₄)₃PO₄',a:'3 × (14 + 4×1) + 31 + 4 × 16 = 54 + 31 + 64 = <b>149 g/mol</b>'},
{n:'A3.',q:'Moles of NaCl in 6.8 g',a:'n = m/M = 6.8/58.5 = <b>0.116 mol</b>'},
{n:'B1(i).',q:'19.52 g sample: H 0.34 g, P 5.18 g, O 10.66 g (rest Ca). Empirical formula?',a:'Ca = 19.52 − (0.34 + 5.18 + 10.66) = 3.34 g\nMoles: Ca 3.34/40 = 0.0835 · H 0.34/1 = 0.34 · P 5.18/31 = 0.167 · O 10.66/16 = 0.666\nDivide by 0.0835: Ca 1 : H 4 : P 2 : O 8\n<b>EF = CaH₄P₂O₈</b>'},
{n:'B1(ii).',q:'Value of x in Ca(H₂PO₄)ₓ',a:'Ca(H₂PO₄)ₓ = CaH₂ₓPₓO₄ₓ. Matching CaH₄P₂O₈ → <b>x = 2</b>'},
{n:'C1.',q:'Balanced equation: barium chloride + sodium sulfate',a:'BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)'},
{n:'C2(i).',q:'Fe₃O₄ + 4CO → 3Fe + 4CO₂. Mass of Fe from 926.12 g of Fe₃O₄?',a:'M(Fe₃O₄) = 3(55.85) + 4(16) = 231.55 g/mol\nn = 926.12/231.55 = 4.00 mol\nn(Fe) = 3 × 4.00 = 12.0 mol\nm = 12.0 × 55.85 = <b>670.2 g</b>'},
{n:'C2(ii).',q:'Moles of CO₂ produced',a:'n(CO₂) = 4 × n(Fe₃O₄) = 4 × 4.00 = <b>16.0 mol</b>'},
{n:'D1.',q:'25.0 mL of 0.2 M Pb(NO₃)₂ + 40.0 mL of 0.150 M KI. Mass of PbI₂?',a:'n(Pb(NO₃)₂) = 0.0250 × 0.2 = 0.00500 mol\nn(KI) = 0.0400 × 0.150 = 0.00600 mol\nAll the Pb²⁺ would need 2 × 0.005 = 0.010 mol KI, but only 0.006 is present → <b>KI is limiting</b>\nn(PbI₂) = 0.006/2 = 0.00300 mol\nM(PbI₂) = 207.2 + 2(126.9) = 461 g/mol\nm = 0.00300 × 461 = <b>1.38 g</b>'}
]},
{t:'Q23 – Titration and inorganic chemistry (22 marks)', qs:[
{n:'A1.',q:'Define (i) equivalence point (ii) standard solution.',a:'(i) The point in a titration where the acid and base have reacted in exactly the stoichiometric (mole) ratio of the equation.\n(ii) A solution whose concentration is accurately known.'},
{n:'A2.',q:'10 mL of vinegar diluted to 250 mL; 25 mL portion needs 16.0 mL of 0.05 M NaOH. Concentration of the original vinegar?',a:'n(NaOH) = 0.05 × 0.0160 = 8.0×10⁻⁴ mol = n(CH₃COOH) (1:1)\nDiluted c = 8.0×10⁻⁴/0.025 = 0.032 mol/L\nDilution factor = 250/10 = 25\nOriginal c = 0.032 × 25 = <b>0.80 mol/L</b>', flag:'The marking scheme writes "25 × .32". It should be 25 × 0.032 = 0.80 mol/L (the final answer is right).'},
{n:'B1.',q:'Is SiO₂ acidic, basic or amphoteric?',a:'<b>Acidic</b> (reacts with bases, e.g. hot NaOH, to form silicates).'},
{n:'B2.',q:'Formula of phosphorus chloride',a:'<b>PCl₃</b> (phosphorus trichloride). PCl₅ also exists.'},
{n:'B3.',q:'Does solid NaCl conduct? Justify.',a:'<b>No.</b> The Na⁺ and Cl⁻ ions are held in fixed positions in the lattice and cannot move. It conducts only when molten or dissolved.'},
{n:'B4(i).',q:'Why do the melting points of the oxides decrease across the period?',a:'The structure changes from giant ionic (Na₂O, MgO, Al₂O₃) and giant covalent (SiO₂), where strong bonds must be broken, to simple molecular (P₄O₁₀, SO₂), where only weak intermolecular forces must be overcome.'},
{n:'B4(ii).',q:'Why is the mp of SO₂ lower than that of SiO₂?',a:'SiO₂ is a giant covalent network: melting means breaking many strong Si–O covalent bonds. SO₂ is made of small separate molecules held by weak intermolecular (dipole/dispersion) forces, which need little energy to overcome.'},
{n:'C1.',q:'Solution: litmus red; no ppt with Ba(NO₃)₂; white ppt with AgNO₃ that dissolves in excess NH₃. Anion?',a:'<b>Chloride, Cl⁻</b>. The white precipitate is AgCl, which dissolves in excess ammonia. No precipitate with Ba²⁺ rules out SO₄²⁻ and CO₃²⁻.'},
{n:'C2.',q:'Cation? White ppt with NaOH; white ppt with NH₃ (insoluble in excess); white ppt with dilute H₂SO₄. Write the ionic equation with H₂SO₄.',a:'<b>Pb²⁺</b> (lead ion)\nPb²⁺(aq) + SO₄²⁻(aq) → PbSO₄(s)', flag:'The question says the NaOH precipitate "disappeared in excess ammonia". For Pb²⁺, the hydroxide precipitate dissolves in excess NaOH, not in excess ammonia. This is probably a typing error in the paper.'}
]},
{t:'Q24 – Organic chemistry (24 marks)', qs:[
{n:'A1.',q:'Define (i) unsaturation (ii) structural isomerism.',a:'(i) The presence of carbon–carbon double (C=C) or triple (C≡C) bonds, which can take part in addition reactions.\n(ii) Compounds with the same molecular formula but different structural formulae.'},
{n:'A2.',q:'General formula of an alkene',a:'<b>CₙH₂ₙ</b>'},
{n:'A3(i).',q:'Name A: CH₃CH₂C≡CCH₃',a:'<b>Pent-2-yne</b> (2-pentyne)'},
{n:'A3(ii).',q:'Draw all possible isomers of compound A.',a:'Alkyne isomers of C₅H₈:\n• Pent-1-yne: HC≡C–CH₂–CH₂–CH₃\n• Pent-2-yne: CH₃–C≡C–CH₂–CH₃ (compound A itself)\n• 3-Methylbut-1-yne: HC≡C–CH(CH₃)–CH₃', flag:'The marking scheme names "2-methyl-1-butyne", which cannot exist: C2 of but-1-yne is part of the triple bond and has no room for a methyl group. The correct name is 3-methylbut-1-yne.'},
{n:'A3(iii).',q:'Draw the geometric isomers of B: CH₃CH=CHCH₃',a:'<b>cis-but-2-ene</b>: both CH₃ groups on the SAME side of the C=C.\n<b>trans-but-2-ene</b>: the CH₃ groups on OPPOSITE sides.'},
{n:'A3(iv).',q:'Results with bromine water.',a:'A (alkyne) and B (alkene): orange bromine water is <b>decolourised</b> quickly (addition across the multiple bond).\nC (butane, alkane): <b>stays orange</b> (no reaction).'},
{n:'A3(v–vi).',q:'Equation for B + bromine; name the product.',a:'CH₃CH=CHCH₃ + Br₂ → CH₃CHBrCHBrCH₃\nProduct: <b>2,3-dibromobutane</b>'},
{n:'A4.',q:'Equation for the preparation of ethyne.',a:'CaC₂(s) + 2H₂O(l) → C₂H₂(g) + Ca(OH)₂(aq)\n(calcium carbide + water)'},
{n:'B1.',q:'Repeating unit –[CH₂–CH(Cl)]–. Name the monomer and polymer.',a:'Monomer: <b>chloroethene (vinyl chloride), CH₂=CHCl</b>\nPolymer: <b>poly(chloroethene), PVC</b>'},
{n:'B2.',q:'One environmental problem from polythene and why.',a:'Problem: it is non-biodegradable, so it builds up as litter on land, beaches and in the lagoon, and can be swallowed by turtles, fish and seabirds.\nWhy: the long chains of strong, non-polar C–C and C–H bonds cannot be broken down by bacteria or decomposers.'},
{n:'B3.',q:'Name the alkyl halide (skeleton: CH₃–CH(CH₃)–CH(Cl)–CH₂–CH₂–CH₃).',a:'<b>3-chloro-2-methylhexane</b>\n(Longest chain = 6 C; number from the end nearest the substituents: Cl on C3, CH₃ on C2.)', flag:'The question calls it a PRIMARY alkyl halide, but Cl is on a carbon bonded to two other carbons, so it is actually SECONDARY.'}
]},
{t:'Q25 – More organic chemistry (24 marks)', qs:[
{n:'A1(i).',q:'X: dichromate stays orange. Y: turns green + silver mirror. Z: turns green + iodoform ppt. Classify.',a:'X = <b>tertiary</b> (not oxidised)\nY = <b>primary</b> (oxidised to an aldehyde, which gives the silver mirror)\nZ = <b>secondary</b> (oxidised to a ketone; iodoform positive → CH₃CH(OH)– group, i.e. butan-2-ol)'},
{n:'A1(ii).',q:'IUPAC name of the oxidation product of Z.',a:'<b>Butan-2-one</b> (CH₃COCH₂CH₃)'},
{n:'A2.',q:'A: DNPH orange, Fehling\'s brick-red, iodoform negative. B: DNPH orange, Fehling\'s no change, iodoform yellow ppt. Functional groups?',a:'A = <b>aldehyde</b> (C=O shown by DNPH; positive Fehling\'s means it is an aldehyde)\nB = <b>ketone</b> (C=O but negative Fehling\'s; iodoform positive → a methyl ketone)'},
{n:'B1.',q:'Butyl ethanoate preparation: (i) why reflux? (ii) why a water bath? (iii) role of conc. H₂SO₄?',a:'(i) The reactants and ester are volatile. The reflux condenser cools the vapours and returns them to the flask, so nothing escapes and the reaction can be heated for longer.\n(ii) The reactants are flammable; a water bath gives gentle, even heating with no naked flame.\n(iii) Catalyst (speeds up esterification) and dehydrating agent (removes water, shifting the equilibrium towards the ester).'},
{n:'B2.',q:'Straight-chain carboxylic acid, M = 88. Molecular formula (CₙH₂ₙO₂) and structure.',a:'12n + 2n + 32 = 88 → 14n = 56 → n = 4\nMolecular formula: <b>C₄H₈O₂</b> (butanoic acid)\nStructure: CH₃–CH₂–CH₂–COOH'},
{n:'C1.',q:'Sample A (16–18 C, ~70% saturated, mp 35 °C); Sample B (18 C, ~20% saturated, mp 10 °C). Identify them, and say which spreads easily.',a:'A = <b>butter</b>, B = <b>margarine</b>.\nB spreads more easily: it is more unsaturated, so it has a lower melting point (10 °C) and is softer at fridge/room temperature.'},
{n:'C2.',q:'Partial hydrogenation of soybean oil: (i) two physical changes (ii) one nutritional risk.',a:'(i) The melting point increases (it becomes solid/firm at 26 °C), and it becomes more viscous/harder.\n(ii) Trans fats form, raising LDL ("bad") cholesterol and the risk of heart disease.'},
{n:'D.',q:'(i) Draw the ring structure of glucose. (ii) Linear or branched: which is more soluble?',a:'(i) A six-membered ring: 5 carbons and 1 oxygen in the ring; C1 has –OH and –H; C2, C3, C4 have –OH; C5 carries –CH₂OH (C6).\n(ii) <b>Branched</b> (amylopectin-type) is more soluble. Branches stop the chains packing tightly, so water molecules can reach and hydrogen-bond with more –OH groups.'}
]},
{t:'Q26 – Physical chemistry (24 marks)', qs:[
{n:'A1.',q:'Define an endothermic reaction.',a:'A reaction that absorbs heat energy from the surroundings (the temperature falls); ΔH is positive.'},
{n:'A2.',q:'CaO + water: 23 °C → 39 °C. Exothermic or endothermic?',a:'<b>Exothermic</b>: the temperature of the water rises, so heat is released to the surroundings.'},
{n:'A3.',q:'ΔH_f(NH₃) = −46.18 kJ/mol. (i) ΔH for N₂ + 3H₂ → 2NH₃ (ii) heat for 5 mol NH₃.',a:'(i) ΔH = 2(−46.18) − (0 + 0) = <b>−92.36 kJ</b>\n(ii) 5 × (−46.18) = <b>−230.9 kJ</b> (230.9 kJ released)'},
{n:'A4.',q:'Energy profile: identify X, Y, Z.',a:'X = <b>activation energy</b>\nY = <b>enthalpy change (ΔH)</b>\nZ = <b>the uncatalysed reaction pathway</b>'},
{n:'B1.',q:'Exp 1: Mg ribbon + 0.1 M HCl. Exp 2: Mg powder + 2.0 M HCl (same temperature). Which is faster? Explain using collision theory.',a:'<b>Experiment 2.</b> Powder has a much larger surface area, and 2.0 M acid has more H⁺ ions per volume. Both mean more frequent collisions between Mg and H⁺, so there are more successful collisions per second and the rate is faster.'},
{n:'C1.',q:'Can equilibrium be reached in a closed or open system?',a:'A <b>closed</b> system.'},
{n:'C2(i).',q:'2SO₂ + O₂ ⇌ 2SO₃, ΔH = −196 kJ. Effect of lowering the temperature from 856 K to 450 K (at 2 atm).',a:'The equilibrium shifts to the <b>right</b> (more SO₃). The forward reaction is exothermic, so lowering the temperature favours it (Le Chatelier). The rate of reaction becomes slower, though.'},
{n:'C2(ii).',q:'Two reasons for using 2 atm, not 10 atm.',a:'1. The yield at 2 atm is already very high (~99%), so a higher pressure would add very little.\n2. High pressure is expensive (strong equipment, energy for compressors) and more dangerous.\n(A higher pressure WOULD shift the equilibrium right, because there are fewer gas moles on the right.)', flag:'The marking scheme says "if you increase pressure, the yield will diminish". This is wrong: 3 gas moles → 2 gas moles, so higher pressure INCREASES the yield.'},
{n:'C2(iii).',q:'Purpose of V₂O₅.',a:'<b>Catalyst</b>: it speeds up the reaction (lowers the activation energy) so equilibrium is reached faster. It does not change the position of equilibrium.'},
{n:'D1.',q:'Define a Brønsted–Lowry acid.',a:'A proton (H⁺) donor.'},
{n:'D2.',q:'What does universal indicator measure?',a:'The <b>pH</b> (how acidic or alkaline a solution is).'},
{n:'D3.',q:'[OH⁻] = 2.5×10⁻⁴ mol/L. pH?',a:'pOH = −log(2.5×10⁻⁴) = 3.60\npH = 14 − 3.60 = <b>10.40</b>'}
]},
{t:'Q27 – Equilibrium and redox (20 marks)', qs:[
{n:'A1.',q:'How does a soluble hydroxide behave in water? Equation for NaOH.',a:'It dissociates completely into ions, releasing OH⁻ ions (a strong base/alkali).\nNaOH(aq) → Na⁺(aq) + OH⁻(aq)'},
{n:'A2.',q:'CO + 2H₂ ⇌ CH₃OH, ΔH = −90 kJ. Effect of decreasing the temperature on the methanol yield.',a:'The yield <b>increases</b>. The forward reaction is exothermic, so lowering the temperature makes the system shift right (Le Chatelier) to produce heat, forming more methanol.'},
{n:'B1.',q:'Define (i) oxidation (oxidation state) (ii) oxidant.',a:'(i) An increase in oxidation state (number).\n(ii) The species that causes oxidation of another substance and is itself reduced (it gains electrons).'},
{n:'B2.',q:'Oxidation state of S in S₄O₆²⁻',a:'4x + 6(−2) = −2 → 4x = 10 → <b>x = +2.5</b> (an average value)'},
{n:'B3.',q:'2I⁻ + Br₂ → I₂ + 2Br⁻: oxidant and reductant.',a:'Oxidant: <b>Br₂</b> (0 → −1, reduced)\nReductant: <b>I⁻</b> (−1 → 0, oxidised)'},
{n:'B4.',q:'The oxidising agent that turns orange to green in acid.',a:'<b>Acidified potassium dichromate, K₂Cr₂O₇</b> (Cr₂O₇²⁻ → Cr³⁺)'},
{n:'B5.',q:'KMnO₄ titration with Fe²⁺: (i) colour at the end point (ii) half-equations (iii) overall equation.',a:'(i) A faint <b>permanent pink/purple</b> (the first excess of MnO₄⁻).\n(ii) Oxidation: Fe²⁺ → Fe³⁺ + e⁻\nReduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O\n(iii) Multiply the oxidation half-equation by 5 and add:\nMnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺'},
{n:'B6.',q:'Electrolysis of CuSO₄: (i) what happens at the cathode? (ii) gas formed.',a:'(i) Cu²⁺ ions are attracted to the cathode and gain electrons: Cu²⁺ + 2e⁻ → Cu. A pink-brown copper layer forms and the blue colour of the solution fades.\n(ii) <b>Oxygen</b> gas at the anode (with inert electrodes).'}
]}
]},
{y:2024, src:'P2024/2024 KSSC Final Chemistry Exam.pdf', note:'The official marking scheme online is scanned images only, so every answer here is worked out independently. ⚠ marks an error in the paper.',
secs:[
{t:'Section A – Multiple choice (40 marks)', qs:[
{n:'1.',q:'Ionization energy ___ down a group',a:'<b>B</b>: decreases. The outer electron is further from the nucleus and more shielded.'},
{n:'2.',q:'Increasing atomic radius order',a:'<b>D</b>: Be < Li < Na < K. Radius decreases across a period (Be is smaller than Li) and increases down a group.'},
{n:'3.',q:'Why does Group 1 reactivity increase down the group?',a:'<b>B</b>: weaker attraction between the nucleus and the valence electron, so it is lost more easily.'},
{n:'4.',q:'Relative atomic mass is…',a:'<b>C</b>: the average mass of the atoms of an element relative to 1/12 of the mass of a C-12 atom.'},
{n:'5.',q:'Which compound has M = 95.3 g/mol?',a:'<b>C</b>: MgCl₂ = 24.3 + 2(35.5) = 95.3.'},
{n:'6.',q:'85.7% C and 14.3% H. Empirical formula?',a:'C: 85.7/12 = 7.14 and H: 14.3/1 = 14.3, a ratio of 1 : 2 → <b>CH₂ (D)</b>'},
{n:'7.',q:'Mass of Mg that reacts with 25 cm³ of 0.1 mol/L H₂SO₄',a:'Mg + H₂SO₄ → MgSO₄ + H₂ (1 : 1)\nn(acid) = 0.1 × 0.025 = 0.0025 mol = n(Mg)\nm = 0.0025 × 24 = <b>0.06 g (C)</b>'},
{n:'8.',q:'True statement about alkanes',a:'<b>B</b>: boiling point rises as the carbon chain gets longer (stronger intermolecular forces). Alkanes are CₙH₂ₙ₊₂, saturated, and do substitution reactions, not addition.'},
{n:'9.',q:'Monomer of polythene',a:'<b>B</b>: CH₂=CH₂ (ethene).'},
{n:'10.',q:'Name CH₃CH(Cl)CH₂CH(Br)CH₂CH₃',a:'Number from the left to give the lowest locants {2, 4}, then list in alphabetical order: <b>4-bromo-2-chlorohexane (D)</b>'},
{n:'11.',q:'Acidified dichromate: X green, Y no change, Z green',a:'Primary and secondary alcohols turn it from orange to green, while a tertiary alcohol gives no change. So Y is tertiary → <b>C</b> (X primary, Y tertiary, Z secondary).'},
{n:'12.',q:'Starting materials for CH₃COOCH₃',a:'It is methyl ethanoate (an ester) → <b>B</b>: ethanoic acid + methanol.'},
{n:'13.',q:'Alcohol formed when a triglyceride reacts with NaOH',a:'<b>D</b>: glycerol (propane-1,2,3-triol), CH₂OH–CHOH–CH₂OH.'},
{n:'14.',q:'Nature of the oxides of Mg, Al and S',a:'<b>A</b>: MgO basic, Al₂O₃ amphoteric, SO₂/SO₃ acidic.'},
{n:'15.',q:'White ppt with NaOH, and white ppt with HNO₃/AgNO₃',a:'A white AgCl ppt means a <b>chloride</b>, and Zn²⁺ gives a white ppt with NaOH → <b>D: zinc chloride</b>. (Bromide gives a cream ppt, iodide yellow, and sulphate no ppt with AgNO₃.)'},
{n:'16.',q:'Which arrow is the activation energy?',a:'<b>A</b>: I, the energy from the reactants (X + Y) up to the top of the hump.'},
{n:'17.',q:'Which line shows zinc with the largest surface area?',a:'<b>B</b>: line 1, the steepest curve (fastest reaction).'},
{n:'18.',q:'N₂ + 3H₂ ⇌ 2NH₃: effect of increasing pressure',a:'<b>C</b>: more ammonia. The equilibrium shifts to the side with fewer gas moles (4 → 2).'},
{n:'19.',q:'Oxidation number of O in H₂O₂',a:'2(+1) + 2x = 0 → x = <b>−1 (D)</b>. Peroxides are the exception to O = −2.'},
{n:'20.',q:'Oxidising agent in Cl₂ + 2NaBr → 2NaCl + Br₂',a:'<b>A</b>: Cl₂. It gains electrons (is reduced) and oxidises Br⁻ to Br₂.'}
]},
{t:'Q21 – Atomic structure and bonding (24 marks)', qs:[
{n:'A1.',q:'Electron configuration 2.8.1: which period?',a:'Three occupied shells → <b>Period 3</b> (it is sodium).'},
{n:'A2.',q:'Define ionization energy',a:'The <b>energy needed to remove one electron</b> from each atom in one mole of <b>gaseous</b> atoms: X(g) → X⁺(g) + e⁻.'},
{n:'A3.',q:'Boiling point down Group 7?',a:'<b>Increases</b> (F₂ gas → Cl₂ gas → Br₂ liquid → I₂ solid). The molecules get bigger with more electrons, so the <b>van der Waals (intermolecular) forces</b> are stronger and need more energy to overcome.'},
{n:'A4.',q:'Compare the sizes of an iodine atom and an iodide ion',a:'<b>I⁻ is bigger</b>. It has one extra electron but the <b>same nuclear charge</b>, so there is more electron–electron repulsion and each electron is held less tightly. The electron cloud spreads out.'},
{n:'B1.',q:'Bond between Group 1 and Group 7 elements',a:'<b>Ionic bond</b>: electron transfer, e.g. Na⁺Cl⁻.'},
{n:'B2.',q:'Why is graphite softer than diamond?',a:'In graphite each C bonds to only 3 others, making <b>flat layers</b> held together by <b>weak forces</b>, so the layers slide over each other. In diamond each C is covalently bonded to <b>4 others</b> in a rigid 3-D network, which is very hard.'},
{n:'B3.',q:'Why does copper have a high melting point?',a:'Copper has <b>metallic bonding</b>: a giant lattice of positive Cu ions in a <b>sea of delocalised electrons</b>. The strong electrostatic attraction between the ions and the electrons needs a lot of energy to break, so the melting point is high.'},
{n:'B4.',q:'Bonding in Structure A (± spheres) and Structure B (Si–O network). Why is SiO₂\'s melting point high?',a:'A: <b>ionic bonding</b> (a lattice of + and − ions).\nB: <b>covalent bonding</b> in a <b>giant covalent (macromolecular) network</b>.\nSiO₂ melts high because <b>many strong covalent Si–O bonds</b> throughout the whole giant structure must be broken.'},
{n:'C1.',q:'Is water polar?',a:'<b>Polar</b>. It is bent, and O is more electronegative than H, so the dipoles do not cancel.'},
{n:'C2.',q:'Lewis structure of CO₂. Polar or non-polar?',a:'<b>O=C=O</b>: two double bonds, with two lone pairs on each O.\n<b>Non-polar</b>. Each C=O bond is polar, but the molecule is <b>linear (180°)</b>, so the two dipoles point opposite ways and <b>cancel</b>.'},
{n:'C3.',q:'Do solid NaCl and sodium metal conduct electricity?',a:'<b>Solid NaCl: no</b>. Its ions are held in fixed positions in the lattice and cannot move. (It conducts when molten or dissolved.)\n<b>Sodium metal: yes</b>. It has <b>delocalised electrons</b> that move freely through the metal lattice and carry charge.'}
]},
{t:'Q22 – Quantitative chemistry (24 marks)', qs:[
{n:'A1.',q:'Define relative molecular mass and Avogadro\'s number',a:'<b>Relative molecular mass</b>: the sum of the relative atomic masses of all the atoms in a molecule (its mass relative to 1/12 of a C-12 atom).\n<b>Avogadro\'s number</b>: the number of particles in one mole, <b>6.02 × 10²³</b>.'},
{n:'A2.',q:'Mr of Na₂CO₃·10H₂O',a:'2(23) + 12 + 3(16) + 10(18) = 46 + 12 + 48 + 180 = <b>286</b>'},
{n:'A3.',q:'Number of O atoms in 60 g of Na₂CO₃·10H₂O',a:'n = 60/286 = 0.210 mol\nO atoms per formula unit = 3 + 10 = 13\nn(O) = 13 × 0.210 = 2.73 mol\nO atoms = 2.73 × 6.02 × 10²³ = <b>1.64 × 10²⁴</b>'},
{n:'B1.',q:'Empirical vs molecular formula',a:'Empirical: the <b>simplest whole-number ratio</b> of atoms.\nMolecular: the <b>actual number</b> of each atom in a molecule (a whole-number multiple of the empirical formula), e.g. CH₂O vs C₆H₁₂O₆.'},
{n:'B2.',q:'% water in CuSO₄·5H₂O',a:'M = 63.5 + 32 + 64 + 90 = 249.5\n% water = 90/249.5 × 100 = <b>36.1%</b>'},
{n:'B3.',q:'How do you make sure all the water of crystallization is gone?',a:'<b>Heat to constant mass</b>: heat, cool and weigh, and repeat until two weighings give the same mass.'},
{n:'B4.',q:'15.2% Na, 53.0% Br, the rest O. Empirical formula?',a:'O = 100 − 15.2 − 53.0 = 31.8%\nNa: 15.2/23 = 0.661\nBr: 53.0/79.9 = 0.663\nO: 31.8/16 = 1.99\nDivide by 0.661 → 1 : 1 : 3 → <b>NaBrO₃</b> (sodium bromate)'},
{n:'B5.',q:'Mr = 301.8. Molecular formula?',a:'Empirical mass = 23 + 79.9 + 48 = 150.9\n301.8/150.9 = 2 → <b>Na₂Br₂O₆</b>'},
{n:'B6.',q:'Define the mole',a:'The amount of substance containing <b>6.02 × 10²³ particles</b>, the same as the number of atoms in exactly 12 g of carbon-12.'},
{n:'B7.',q:'Particles in 0.5 mol',a:'0.5 × 6.02 × 10²³ = <b>3.01 × 10²³</b>'},
{n:'B8.',q:'Formula of aluminium sulphate',a:'Al³⁺ and SO₄²⁻: swap the charges → <b>Al₂(SO₄)₃</b>'}
]},
{t:'Q23 – Stoichiometry and inorganic chemistry (24 marks)', qs:[
{n:'A1–2.',q:'Fe₂O₃ + HCl → ? Write the products and balance',a:'Acid + metal oxide → salt + water\n<b>Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O</b>'},
{n:'A3.',q:'Mass of FeCl₃ from 60 g of Fe₂O₃',a:'n(Fe₂O₃) = 60/159.7 = 0.376 mol\nn(FeCl₃) = 2 × 0.376 = 0.751 mol\nM(FeCl₃) = 55.8 + 3(35.5) = 162.3\nm = 0.751 × 162.3 = <b>122 g</b>\n⚠ The paper prints Ar(Fe) = 39.9, which is wrong (iron is 55.8). Students using 39.9 get 0.751 × 146.4 = 110 g. Iron\'s value must agree with M(Fe₂O₃) = 159.7.'},
{n:'B(i).',q:'Which oxide is amphoteric?',a:'<b>Al₂O₃</b>'},
{n:'B(ii).',q:'An ionic oxide',a:'<b>Na₂O</b> (or MgO)'},
{n:'B(iii).',q:'Why does phosphorus chloride have a low melting point?',a:'PCl₃/PCl₅ is a <b>simple covalent (molecular)</b> substance. The molecules are held by <b>weak intermolecular forces</b>, which need little energy to overcome.'},
{n:'B(iv).',q:'Equation showing SO₂ is acidic in water',a:'<b>SO₂(g) + H₂O(l) → H₂SO₃(aq)</b> (sulphurous acid)\nH₂SO₃(aq) ⇌ H⁺(aq) + HSO₃⁻(aq), so the solution is acidic (pH < 7).'},
{n:'B(v).',q:'Phosphorus chloride + water',a:'<b>PCl₅(s) + 4H₂O(l) → H₃PO₄(aq) + 5HCl(aq)</b>\n(or PCl₃(l) + 3H₂O(l) → H₃PO₃(aq) + 3HCl(aq)). It gives steamy fumes of HCl, and the solution is strongly acidic.'},
{n:'C1.',q:'Colour of the ppt with Fe²⁺ + NaOH',a:'<b>Green</b> (dirty green) precipitate of Fe(OH)₂.'},
{n:'C2.',q:'Reagents to test for chloride ions',a:'<b>Dilute nitric acid, then silver nitrate solution</b> → white ppt (AgCl).'},
{n:'C3.',q:'Ionic equation for the Fe²⁺ precipitate',a:'<b>Fe²⁺(aq) + 2OH⁻(aq) → Fe(OH)₂(s)</b>'},
{n:'C4.',q:'Distinguish a sulphate from a carbonate',a:'Add <b>dilute HCl</b>: a carbonate <b>fizzes</b>, giving CO₂ that turns limewater milky. A sulphate gives no fizzing.\n(Or add BaCl₂ in acid: a sulphate gives a white ppt that stays.)'}
]},
{t:'Q24 – Organic chemistry (22 marks)', qs:[
{n:'A(i).',q:'Which of P–S are in the same homologous series?',a:'<b>P and Q</b>: both are alkanes.'},
{n:'A(ii).',q:'Which are unsaturated?',a:'<b>R</b> (alkene, C=C) and <b>S</b> (alkyne, C≡C).'},
{n:'A(iii).',q:'IUPAC names of Q and R',a:'Q: longest chain = 5 C (through the CH branch), with a methyl on C2 and an ethyl on C3 → <b>3-ethyl-2-methylpentane</b>\nR: CH₃CH=CHCH₃ with the H atoms on opposite sides → <b>trans-but-2-ene</b> (E-but-2-ene)\n(P is 2,4-dimethylhexane and S is but-1-yne.)'},
{n:'A(iv).',q:'Bromine water + P',a:'<b>No change</b>: it stays orange/brown. P is a saturated alkane, so there is no addition reaction.'},
{n:'A(v).',q:'Draw and name a structural isomer of R',a:'<b>But-1-ene</b>: CH₂=CH–CH₂–CH₃\n(or methylpropene, CH₂=C(CH₃)–CH₃)'},
{n:'A(vi).',q:'R + water (H₂SO₄ catalyst)',a:'Hydration (an addition reaction):\n<b>CH₃–CH=CH–CH₃ + H₂O → CH₃–CH(OH)–CH₂–CH₃</b> (butan-2-ol), with H₂SO₄ as the catalyst'},
{n:'A(vii).',q:'P, Q, R, S with potassium permanganate',a:'P and Q (alkanes): <b>no change</b>, stays purple.\nR and S (unsaturated): <b>purple → colourless</b> (decolourised), because the C=C / C≡C bond is oxidised.'},
{n:'B1.',q:'One use of PVC',a:'Water pipes, electrical cable insulation, raincoats, flooring.'},
{n:'B2.',q:'Polymerisation equation for PVC',a:'<b>n CH₂=CHCl → [–CH₂–CHCl–]ₙ</b>\n(chloroethene → poly(chloroethene))'},
{n:'C1.',q:'Products of 2-pentene + HBr',a:'H and Br can add to either end of the C=C:\n<b>2-bromopentane</b> and <b>3-bromopentane</b>'},
{n:'D(i).',q:'Functional group and IUPAC name of Z: CH₃(CH₂)₅COCH₃',a:'<b>Carbonyl group of a ketone</b> (C=O inside the chain)\nName: <b>octan-2-one</b> (8 C, C=O on C2)'},
{n:'D(ii).',q:'Y (propan-2-ol) + acidified dichromate',a:'Colour change <b>orange → green</b>\nProduct: <b>propanone</b>. A secondary alcohol oxidises to a ketone.'},
{n:'D(iii).',q:'Tollens\' reagent with X (butanal) and Z (octan-2-one)',a:'X (an aldehyde): a <b>silver mirror</b> forms on warming.\nZ (a ketone): <b>no change</b> (no silver mirror).'}
]},
{t:'Q25 – More organic chemistry (22 marks)', qs:[
{n:'A1.',q:'Carboxylic acid with 4 carbons',a:'<b>Butanoic acid</b>, CH₃CH₂CH₂COOH'},
{n:'A2.',q:'Pentanoic acid + NaOH',a:'<b>CH₃(CH₂)₃COOH + NaOH → CH₃(CH₂)₃COONa + H₂O</b>\n(sodium pentanoate + water)'},
{n:'A3.',q:'Why is ethanoic acid weak? Give an equation',a:'It only <b>partially ionises</b> in water (only a few molecules release H⁺):\n<b>CH₃COOH(aq) ⇌ CH₃COO⁻(aq) + H⁺(aq)</b>, and the equilibrium lies to the left.'},
{n:'A4.',q:'Role of sulphuric acid in making an ester',a:'Concentrated H₂SO₄ is a <b>catalyst</b> (it speeds up esterification). It also <b>absorbs water</b> (a dehydrating agent), which shifts the equilibrium to the right and gives more ester.'},
{n:'B1(i).',q:'Family of the olive-oil compound',a:'<b>Triglycerides / lipids (fats and oils)</b>: esters of glycerol and fatty acids.'},
{n:'B1(ii).',q:'Poly- or mono-unsaturated? Why?',a:'Olive oil is mainly <b>mono-unsaturated</b>. Its main fatty acid (oleic acid) has <b>one C=C double bond</b> per chain (one kink in each wavy chain). Polyunsaturated would mean two or more C=C per chain.'},
{n:'B1(iii).',q:'Alcohol formed on hydrolysis with NaOH',a:'<b>Glycerol (propane-1,2,3-triol)</b>:\nCH₂–OH\n|\nCH–OH\n|\nCH₂–OH'},
{n:'B2(i).',q:'Equation for the triglyceride (C₁₇H₃₅, C₁₅H₃₁, C₁₄H₂₉ chains) + NaOH',a:'Saponification:\n<b>triglyceride + 3NaOH → glycerol + C₁₇H₃₅COONa + C₁₅H₃₁COONa + C₁₄H₂₉COONa</b>\n(CH₂OH–CHOH–CH₂OH plus three sodium carboxylate salts, which are the soap)'},
{n:'B2(ii).',q:'How soap removes dirt',a:'1. A soap particle has an <b>ionic head (–COO⁻Na⁺)</b> that is <b>hydrophilic</b> (attracted to water).\n2. It has a long <b>hydrocarbon tail</b> that is <b>hydrophobic</b> and dissolves in grease.\n3. The tails dig into the greasy dirt and the heads stay in the water, surrounding the grease in a <b>micelle</b>.\n4. The heads all carry negative charges, so the micelles repel each other, lift off the cloth and are <b>rinsed away</b>.'},
{n:'C(i).',q:'Functional group in the glucose ring',a:'<b>Hydroxyl (–OH)</b> groups. The ring also contains an ether (C–O–C) link.'},
{n:'C(ii).',q:'Test for the open-chain form of glucose',a:'The open chain has an <b>aldehyde (–CHO)</b> group. Warm it with <b>Benedict\'s (or Fehling\'s) solution</b>: blue → <b>brick-red precipitate</b>. (Or Tollens\' reagent gives a silver mirror.)'}
]},
{t:'Q26 – Physical chemistry (22 marks)', qs:[
{n:'A1.',q:'Define exothermic reaction',a:'A reaction that <b>releases heat energy</b> to the surroundings. ΔH is negative, and the surroundings get warmer.'},
{n:'A2(i).',q:'Exothermic or endothermic? (products higher than reactants)',a:'<b>Endothermic</b>. The <b>products have more energy than the reactants</b>, so energy is taken in and ΔH is positive (arrow ④).'},
{n:'A2(ii).',q:'Draw a catalysed pathway',a:'Draw a <b>lower hump</b> starting at the same reactant level and ending at the same product level. The catalyst lowers the activation energy but does <b>not change ΔH</b>.'},
{n:'A3.',q:'Hess\'s law: CH₄ + NH₃ → HCN + 3H₂',a:'Reverse eq 2: CH₄ → C + 2H₂   ΔH = +84.9\nReverse eq 1 and halve it: NH₃ → ½N₂ + 3/2 H₂   ΔH = +50.9\nHalve eq 3: ½H₂ + C + ½N₂ → HCN   ΔH = +185.15\nAdd them (C, ½N₂ and ½H₂ cancel): CH₄ + NH₃ → HCN + 3H₂\n<b>ΔH = 84.9 + 50.9 + 185.15 = +321.0 kJ/mol</b>'},
{n:'B(i).',q:'How do you speed up CaCO₃ + HCl?',a:'<b>Crush the lump into a powder</b> (smaller pieces). Warming the acid or using more concentrated acid also works.'},
{n:'B(ii).',q:'Collision theory explanation',a:'A powder has a <b>larger surface area</b>, so more particles are exposed to the acid. This gives <b>more collisions per second</b>, so more successful collisions per second and a faster rate.'},
{n:'C1.',q:'Define dynamic equilibrium and Le Chatelier\'s principle',a:'<b>Dynamic equilibrium</b>: the forward and reverse reactions happen at the <b>same rate</b>, so the concentrations stay constant (in a closed system).\n<b>Le Chatelier</b>: if a change is made to a system at equilibrium, the equilibrium <b>shifts to oppose the change</b>.'},
{n:'C2(i).',q:'2NO₂ (brown) ⇌ 2NO + O₂ (colourless): add O₂',a:'The equilibrium <b>shifts left</b> to use up the extra O₂, so more NO₂ forms and the colour gets <b>darker brown</b>.'},
{n:'C2(ii).',q:'Remove NO',a:'The equilibrium <b>shifts right</b> to replace the NO, so more NO₂ decomposes and the colour gets <b>paler (lighter brown)</b>.'},
{n:'C2(iii).',q:'Effect of a catalyst',a:'<b>No effect on the position</b> of equilibrium (same colour). Equilibrium is just reached faster, because both the forward and reverse rates increase equally.'},
{n:'D1.',q:'Conjugate pairs in HClO₄ + H₂SO₄ → ClO₄⁻ + H₃SO₄⁺',a:'HClO₄ gives H⁺ → <b>HClO₄ / ClO₄⁻</b> (acid / conjugate base)\nH₂SO₄ accepts H⁺ → <b>H₃SO₄⁺ / H₂SO₄</b> (conjugate acid / base)'},
{n:'D2.',q:'Water acting as an acid with ammonia',a:'<b>NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</b>\nWater donates a proton (H⁺) to NH₃, so it acts as an acid (it becomes OH⁻).'}
]},
{t:'Q27 – pH and redox (21 marks)', qs:[
{n:'A1.',q:'[OH⁻] in pure water',a:'[H⁺] = [OH⁻] and [H⁺][OH⁻] = 10⁻¹⁴ → <b>[OH⁻] = 1 × 10⁻⁷ mol/L</b>'},
{n:'A2.',q:'[OH⁻] for ammonia of pH 11.9',a:'pOH = 14 − 11.9 = 2.1\n[OH⁻] = 10⁻²·¹ = <b>7.9 × 10⁻³ mol/L</b>'},
{n:'A3.',q:'pH of 0.015 mol/dm³ NaOH',a:'NaOH is a strong base: [OH⁻] = 0.015\npOH = −log(0.015) = 1.82\npH = 14 − 1.82 = <b>12.2</b>'},
{n:'B1.',q:'Define reduction (electrons)',a:'<b>Gain of electrons</b> (OIL RIG: Oxidation Is Loss, Reduction Is Gain).'},
{n:'B2.',q:'Define reducing agent',a:'A substance that <b>donates (loses) electrons</b> to another substance, reducing it. The reducing agent itself is oxidised.'},
{n:'B3(i).',q:'Half equation for chlorine',a:'<b>Cl₂ + 2e⁻ → 2Cl⁻</b>'},
{n:'B3(ii).',q:'Is chlorine reduced or oxidised?',a:'<b>Reduced</b>. It <b>gains electrons</b>, and its oxidation number falls from 0 to −1.'},
{n:'B3(iii).',q:'Half equation for bromide',a:'<b>2Br⁻ → Br₂ + 2e⁻</b> (oxidation)'},
{n:'B3(iv).',q:'Overall ionic equation',a:'Add them (the electrons cancel): <b>Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂</b>'},
{n:'B4.',q:'Reducing and oxidising agents in Fe + CuSO₄ → FeSO₄ + Cu',a:'Reducing agent: <b>Fe</b> (0 → +2, loses electrons).\nOxidising agent: <b>CuSO₄ / Cu²⁺</b> (+2 → 0, gains electrons).'},
{n:'B5(i).',q:'Gas at the anode (concentrated NaCl)',a:'<b>Chlorine</b> (Cl₂): 2Cl⁻ → Cl₂ + 2e⁻'},
{n:'B5(ii).',q:'Cathode half equation',a:'Hydrogen forms (H is less reactive than Na):\n<b>2H₂O + 2e⁻ → H₂ + 2OH⁻</b> (or 2H⁺ + 2e⁻ → H₂)'},
{n:'B5(iii).',q:'Why is electrolysis a redox reaction?',a:'<b>Oxidation</b> (loss of electrons by Cl⁻ at the anode) and <b>reduction</b> (gain of electrons at the cathode) happen at the same time.'}
]}
]}
]});
