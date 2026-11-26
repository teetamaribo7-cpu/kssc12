addSubject({id:'phy', topics:[
{t:'Light: reflection and mirrors', notes:`
<ul><li><b>Rectilinear propagation:</b> light travels in straight lines. A shadow forms where an opaque object blocks the straight-line rays (umbra = full shadow, penumbra = partial shadow).</li>
<li><b>Law of reflection:</b> angle of incidence = angle of reflection, measured from the normal.</li>
<li><b>Plane mirror image:</b> virtual, upright, same size, as far behind the mirror as the object is in front, and <b>laterally inverted</b> (left and right are swapped).</li>
<li><b>Partial reflection:</b> some light is reflected and some is transmitted at a boundary.</li></ul>
<h3>Real vs virtual images</h3><table><tr><th>Real</th><th>Virtual</th></tr><tr><td>Rays actually meet</td><td>Rays only appear to come from it</td></tr><tr><td>Can be shown on a screen</td><td>Cannot be shown on a screen</td></tr><tr><td>Inverted (concave mirror, object beyond F)</td><td>Upright (object inside F)</td></tr></table>
<h3>Ray diagram for a plane mirror</h3><ol><li>Mark the image the same distance behind the mirror as the object.</li><li>Draw a straight line from the image to the observer's eye (dashed behind the mirror).</li><li>Where it meets the mirror, draw the real ray from the object to that point, then to the eye.</li></ol>`,
quiz:[
{q:'Shadows form because light…',o:['bends around objects','travels in straight lines','is a sound wave','reflects from shadows'],a:1,e:'Rectilinear propagation: opaque objects block the straight rays.'},
{q:'The image in a plane mirror is…',o:['real and inverted','virtual and laterally inverted','real and magnified','virtual and smaller'],a:1,e:'Virtual, upright, same size, laterally inverted.'},
{q:'Angle of incidence = 35°. The angle of reflection is…',o:['55°','35°','70°','145°'],a:1,e:'i = r.'},
{q:'Which image can be shown on a screen?',o:['Virtual','Real','Both','Neither'],a:1,e:'Real rays actually converge there.'},
{q:'Partial reflection means…',o:['all light is absorbed','some light is reflected and some is transmitted','all light is reflected','light bends'],a:1,e:'E.g. light hitting glass.'},
{q:'Angles of incidence and reflection are measured from…',o:['the mirror surface','the normal','the horizontal','the image'],a:1,e:'The normal is perpendicular to the surface.'}
]},
{t:'Refraction, lenses and total internal reflection', notes:`
<div class="key">Snell's law: n₁ sin θ₁ = n₂ sin θ₂. Critical angle: sin C = n₂/n₁ (= 1/n when going into air).</div>
<p>Conditions for total internal reflection: (1) light travels from a denser to a less dense medium (higher n to lower n); (2) the angle of incidence is greater than the critical angle.</p>
<p>Diamond, C = 24.4°: n = 1/sin 24.4° = <b>2.42</b>.</p>
<h3>Lens formula</h3><p>1/f = 1/u + 1/v (convex f &gt; 0, concave f &lt; 0; a negative v means a virtual image). Magnification m = v/u = hᵢ/hₒ.</p>
<p>Example: hₒ = 2.25 mm, u = 8.50 cm, f = 5.50 cm → 1/v = 1/5.5 − 1/8.5 → v = 15.6 cm (real, inverted); m = 1.83 → hᵢ = 4.12 mm.</p>
<p>A concave (diverging) lens always gives a virtual, upright, smaller image, closer to the lens than the object.</p>
<h3>Dispersion</h3><p>White light splits into colours because each colour travels at a different speed in glass (different n). <b>Violet/blue bends most</b> (slowest, highest n); red bends least.</p>`,
quiz:[
{q:'Light goes from air (1.00) into water (1.33) at 20°. Angle of refraction?',o:['14.9°','20.0°','27.1°','40.0°'],a:0,e:'sin r = sin 20°/1.33 = 0.257 → 14.9°.'},
{q:'Total internal reflection needs light to go…',o:['from less dense to denser','from denser to less dense, above the critical angle','at 0°','through a vacuum'],a:1,e:'Both conditions must be met.'},
{q:'Which colour bends most in a prism?',o:['Red','Yellow','Green','Violet/blue'],a:3,e:'It has the shortest wavelength, slowest speed and highest refractive index.'},
{q:'A concave lens forms images that are…',o:['real and inverted','virtual, upright and smaller','real and larger','always at F'],a:1,e:'Diverging lenses only form virtual images.'},
{q:'Critical angle in glass with n = 1.5',o:['41.8°','48.6°','30°','60°'],a:0,e:'sin C = 1/1.5 → 41.8°.'},
{q:'Dispersion happens because colours…',o:['have the same speed in glass','have different speeds in glass','are reflected','are absorbed'],a:1,e:'Different speeds mean different refractive indices.'}
]},
{t:'Waves, sound and interference', notes:`
<ul><li>A wave transfers <b>energy</b> without transferring matter.</li><li>Sound is a longitudinal wave: a disturbance in air <b>pressure</b> (compressions and rarefactions).</li><li>v = fλ.</li><li>Sound is faster in water than in air because the particles are closer together and more tightly bonded, so the vibrations pass on more quickly.</li><li>Water waves moving into <b>shallow</b> water slow down, so the wavelength gets <b>shorter</b> (wavefronts closer together) and they bend (refract) towards the normal.</li></ul>
<h3>Superposition</h3><p>When waves overlap, their displacements add. Crest + crest → <b>constructive</b> (bigger amplitude). Crest + trough → <b>destructive</b>.</p><p>Path difference = nλ → constructive; (n + ½)λ, e.g. 1.5λ → destructive.</p>
<h3>Diffraction</h3><p>Waves spread out through a gap or around an obstacle. It is most noticeable when the gap is about the same size as the wavelength. When diffracted waves meet, they <b>interfere</b>.</p>
<h3>Young's double slit</h3><div class="key">Fringe width Δy = λL/d</div><p>λ = 450 nm, L = 3.25 m, d = 2.50 mm → Δy = 450×10⁻⁹ × 3.25 / 2.5×10⁻³ = <b>5.85×10⁻⁴ m (0.585 mm)</b>.</p><p>Coherent sources have the same frequency and a constant phase difference, so bright and dark fringes stay in fixed places (a stable pattern).</p>
<h3>Nature of light</h3><p>Dual nature: light behaves as a <b>wave</b> (interference, diffraction) and as a <b>particle</b> (photons, photoelectric effect). Newton's corpuscular (particle) model failed to explain interference and diffraction, and it wrongly predicted that light speeds up in water.</p>`,
quiz:[
{q:'A wave transfers…',o:['matter','energy','mass','air'],a:1,e:'Energy, not matter.'},
{q:'Path difference = 1.5λ gives…',o:['constructive','destructive','no interference','diffraction'],a:1,e:'Half-integer multiples of λ cancel.'},
{q:'Fringe width when λ = 600 nm, L = 2 m, d = 1 mm',o:['1.2 mm','0.6 mm','2.4 mm','0.3 mm'],a:0,e:'600e-9×2/1e-3 = 1.2e-3 m.'},
{q:'Waves entering shallow water…',o:['speed up','slow down and the wavelength shortens','stop','increase in frequency'],a:1,e:'Frequency stays the same; v and λ decrease.'},
{q:'Diffraction is greatest when the gap is…',o:['much larger than λ','about equal to λ','zero','curved'],a:1,e:'Gap ≈ wavelength.'},
{q:'v = fλ. f = 50 Hz and λ = 2 m. v =',o:['25 m/s','100 m/s','52 m/s','0.04 m/s'],a:1,e:'50 × 2.'},
{q:'Sound travels faster in…',o:['air','a vacuum','water','space'],a:2,e:'Particles are closer together; sound cannot travel in a vacuum.'}
]},
{t:'Kinematics, vectors and projectiles', notes:`
<ul><li>Displacement–time graph: gradient = <b>velocity</b>. Velocity–time graph: gradient = acceleration, area = displacement.</li><li>Negative displacement = on the opposite side of the reference point. Negative velocity = moving in the opposite direction.</li><li>Average velocity = total displacement ÷ total time.</li></ul>
<div class="key">v = u + at · s = ut + ½at² · v² = u² + 2as · s = (u+v)t/2</div>
<p>Plane: a = 3.20 m/s², t = 8 s, u = 0 → v = 25.6 m/s; s = ½(3.2)(64) = 102.4 m.</p>
<h3>Scalars and vectors</h3><p>Scalar = size only (mass, distance, speed, time, energy). Vector = size + direction (displacement, velocity, force, acceleration, momentum). Add vectors head-to-tail; |R| = √(x² + y²), direction = tan⁻¹(y/x).</p>
<h3>Projectiles</h3><p>Horizontal motion: constant velocity (no horizontal force). Vertical motion: accelerates downward at g. If fired horizontally, the initial vertical velocity = 0.</p><p>From a 45 m cliff: t = √(2h/g) = √(90/10) = <b>3.0 s</b> (KSSC uses g = 10 m/s²).</p>`,
quiz:[
{q:'The gradient of a displacement–time graph is…',o:['acceleration','velocity','distance','force'],a:1,e:'Δs/Δt.'},
{q:'The area under a velocity–time graph gives…',o:['acceleration','displacement','force','speed'],a:1,e:'v × t.'},
{q:'Which is a vector?',o:['Mass','Speed','Velocity','Energy'],a:2,e:'Velocity has a direction.'},
{q:'A car goes from 0 to 20 m/s in 4 s. a =',o:['5 m/s²','80 m/s²','16 m/s²','0.2 m/s²'],a:0,e:'(20−0)/4.'},
{q:'A ball is thrown horizontally. Its initial VERTICAL velocity is…',o:['the same as the horizontal','0','9.8 m/s','unknown'],a:1,e:'There is no vertical component at launch.'},
{q:'In free fall (no air resistance), acceleration is…',o:['constant','increasing','dependent on mass','zero'],a:0,e:'g = 10 m/s² (KSSC value) for all masses.'},
{q:'Resultant of 3 N east and 4 N north',o:['7 N','5 N','1 N','12 N'],a:1,e:'√(9+16) = 5.'}
]},
{t:'Forces, momentum, torque and circular motion', notes:`
<ul><li>Newton 1: if the net force is 0, the object stays <b>at rest</b> or moves at <b>constant velocity</b>.</li><li>Newton 2: F = ma (the gradient of an F–a graph = mass in kg).</li><li>Newton 3: action and reaction are equal and opposite.</li><li>Mass = amount of matter (kg, the same everywhere, a scalar). Weight = gravitational force W = mg (N, changes with location, a vector).</li></ul>
<h3>Torque and equilibrium</h3><p>τ = F × r. Balanced when clockwise moment = anticlockwise moment: w₁r₁ = w₂r₂.</p><p>m₁ = 38 kg → w₁ = 38 × 10 = 380 N; w₂ = 380 × 4.2/3.5 = <b>456 N</b>.</p>
<h3>Momentum</h3><p>p = mv. Momentum is conserved in a <b>closed (isolated) system</b>, in <b>collisions and explosions</b>. Impulse = FΔt = Δp.</p><p>Softball: 0.200 kg, 20.5 m/s in, 57.8 m/s out (opposite direction). Δp = 0.2(57.8 − (−20.5)) = 15.7 kg m/s. F = 15.66/0.05 = 313 N.</p>
<h3>Circular motion</h3><p>The centripetal force points <b>towards the centre</b>. v = 2πr/T, F = mv²/r.</p><p>Universal gravitation: every mass attracts every other mass with F = Gm₁m₂/r². Uses: calculating satellite orbits, the mass of the Earth, tides.</p>`,
quiz:[
{q:'Net force = 0. The object…',o:['must be at rest','is at rest or moving at constant velocity','accelerates','slows down'],a:1,e:'Newton\'s first law.'},
{q:'The gradient of a Force vs acceleration graph equals…',o:['weight','mass','velocity','g'],a:1,e:'F = ma → m = F/a.'},
{q:'Weight changes with location because…',o:['mass changes','gravitational field strength changes','volume changes','density changes'],a:1,e:'W = mg; g varies.'},
{q:'Momentum of 3500 kg truck at 22 m/s',o:['77 000 kg m/s','3522','159','7700'],a:0,e:'3500 × 22.'},
{q:'Centripetal force points…',o:['outwards','towards the centre','along the tangent','upwards'],a:1,e:'Towards the centre of the circle.'},
{q:'Doubling the distance between two masses changes the gravitational force to…',o:['×2','÷2','÷4','×4'],a:2,e:'Inverse-square law.'},
{q:'Impulse equals…',o:['mass × acceleration','change in momentum','force × distance','kinetic energy'],a:1,e:'FΔt = Δp.'}
]},
{t:'Energy, work, springs and heat', notes:`
<ul><li>Work W = Fd cos θ (J). The area under an F–d graph = work done. Work done = energy transferred.</li><li>KE = ½mv². GPE = mgh. Spring: F = kx (Hooke's law), elastic PE = ½kx².</li><li>Elastic collision: total <b>kinetic energy is conserved</b> (as well as momentum).</li></ul>
<p>W = 40 J, F = 18 N, d = 5 m → cos θ = 40/90 → θ = <b>63.6°</b>.</p>
<h3>Heat</h3><table><tr><th>Heat</th><th>Temperature</th></tr><tr><td>Energy transferred because of a temperature difference (J)</td><td>Measure of the average kinetic energy of particles (°C or K)</td></tr><tr><td>Depends on the mass</td><td>Does not depend on the mass</td></tr></table>
<div class="key">Q = mcΔT (heating) · Q = mL (change of state, no temperature change)</div>
<p>Lead: 0.750 kg, c = 128, Q = 2860 J → ΔT = 2860/(0.75×128) = 29.8 °C → final temperature = 23 + 29.8 = <b>52.8 °C</b>.</p><p>Melting 0.5 kg of ice: Q = 0.5 × 3.34×10⁵ = 1.67×10⁵ J.</p>`,
quiz:[
{q:'The area under a force–displacement graph is…',o:['power','work done','momentum','velocity'],a:1,e:'W = Fd.'},
{q:'During a change of state the temperature…',o:['rises','falls','stays constant','doubles'],a:2,e:'The energy goes into breaking bonds (latent heat).'},
{q:'Elastic PE of a spring (k = 200 N/m) stretched 0.1 m',o:['1 J','2 J','10 J','20 J'],a:0,e:'½ × 200 × 0.01 = 1 J.'},
{q:'In an elastic collision, which is conserved?',o:['Only momentum','Only KE','Both momentum and KE','Neither'],a:2,e:'Elastic → KE conserved too.'},
{q:'Heat to warm 2 kg of water by 10 °C (c = 4200)',o:['84 000 J','8400 J','42 000 J','840 J'],a:0,e:'2 × 4200 × 10.'},
{q:'Temperature measures…',o:['total energy','average kinetic energy of particles','heat','mass'],a:1,e:'Average KE.'},
{q:'KE of a 2 kg ball at 3 m/s',o:['9 J','6 J','18 J','3 J'],a:0,e:'½ × 2 × 9.'}
]},
{t:'Gas laws and kinetic theory', notes:`
<ul><li>Gas pressure comes from the <b>collisions</b> of moving molecules with the walls.</li><li>Temperature = measure of the average <b>kinetic</b> energy of the particles.</li><li>K = °C + 273 (758 K = 485 °C; 698 °C = 971 K).</li></ul>
<div class="key">Boyle: P₁V₁ = P₂V₂ (constant T) – pressure is inversely proportional to volume. Pressure law: P₁/T₁ = P₂/T₂ (T in kelvin!). Ideal gas: PV = nRT.</div>
<p>Bicycle pump: pushing the piston does work on the gas. The molecules gain kinetic energy (they bounce off the moving piston faster), so the temperature rises.</p>
<p>n = PV/RT = 2.5 × 92/(0.0821 × 295) = <b>9.50 mol</b>.</p>
<p>Cylinder cooled from 29 °C to 4 °C: P₂ = 3.05×10⁶ × 277/302 = 2.80×10⁶ Pa.</p>`,
quiz:[
{q:'25 °C in kelvin',o:['298 K','248 K','25 K','273 K'],a:0,e:'25 + 273.'},
{q:'At constant temperature, if volume halves, pressure…',o:['halves','doubles','stays the same','quadruples'],a:1,e:'Boyle\'s law.'},
{q:'Gas pressure is caused by…',o:['gravity','molecules colliding with the walls','heat','the container'],a:1,e:'Kinetic theory.'},
{q:'In the gas laws, temperature must be in…',o:['°C','°F','kelvin','joules'],a:2,e:'Absolute temperature.'},
{q:'PV = nRT. What is n?',o:['number of moles','pressure','gas constant','volume'],a:0,e:'Amount of gas in moles.'},
{q:'Compressing air quickly makes it…',o:['colder','hotter','unchanged','liquid'],a:1,e:'Work done on the gas raises the molecules\' KE.'}
]},
{t:'Electricity and circuits', notes:`
<ul><li>Current I = Q/t: the flow of charge (A). Electrons are the charge carriers.</li><li>Voltage (p.d./e.m.f.) = energy per unit charge (V = J/C).</li><li>Power = energy per unit time: P = VI = I²R = V²/R.</li><li>Conventional current flows from + to −. Electrons flow from − to +.</li><li>Good conductors (metals) have many <b>free electrons</b>; insulators have tightly bound electrons.</li><li>Resistors oppose the flow of charge and take energy from it (as heat).</li></ul>
<div class="key">Series: R = R₁ + R₂ + … · Parallel: 1/R = 1/R₁ + 1/R₂ + …</div>
<p>Three 6 Ω in parallel = 2 Ω, plus 6 Ω in series = <b>8 Ω</b>. I = 24/8 = 3 A. V across the series 6 Ω = 3 × 6 = 18 V. Energy in 3 s = VIt = 18 × 3 × 3 = 162 J.</p>
<p>Kettle: P = I²R = 5² × 48 = 1200 W.</p>`,
quiz:[
{q:'Two 4 Ω resistors in parallel',o:['8 Ω','2 Ω','4 Ω','16 Ω'],a:1,e:'1/R = 1/4 + 1/4.'},
{q:'Electrical power is…',o:['charge per time','energy per time','current per charge','voltage per charge'],a:1,e:'P = E/t (watts).'},
{q:'I = 2 A, R = 10 Ω. V =',o:['5 V','20 V','12 V','0.2 V'],a:1,e:'V = IR.'},
{q:'Conventional current flows from…',o:['− to +','+ to −','north to south','neutral to live'],a:1,e:'Electrons flow the opposite way.'},
{q:'Metals conduct well because they have…',o:['many free electrons','many protons','no atoms','heavy nuclei'],a:0,e:'Delocalised electrons carry the charge.'},
{q:'Voltage is…',o:['energy per unit charge','charge per second','force per area','current × time'],a:0,e:'1 V = 1 J/C.'}
]},
{t:'Electromagnetism', notes:`
<ul><li><b>Motor principle:</b> a current-carrying conductor in a magnetic field feels a force (F = BIL). In a coil, opposite sides get opposite forces, producing a turning effect.</li><li>The force is maximum when the wire is perpendicular to the field and <b>zero when parallel</b>.</li><li>Field around a straight wire: circles. Right-hand grip rule. B = μ₀I/(2πr). A dot (•) = current out of the page; a cross (×) = into the page.</li><li>Fleming's right-hand rule (generator): thumb = motion, first finger = field, <b>middle finger = induced current</b>.</li><li><b>Lenz's law:</b> the induced current flows in a direction that opposes the change that caused it.</li><li>Induced e.m.f. in a moving rod: ε = BLv.</li></ul>
<p>F = 0.43 × 7.5 × 0.08 = 0.258 N. r = μ₀I/(2πB) = (4π×10⁻⁷ × 2.5)/(2π × 2.5×10⁻⁵) = 0.020 m. v = ε/(BL) = 0.165/(0.32 × 0.15) = 3.44 m/s.</p>`,
quiz:[
{q:'A wire parallel to a magnetic field feels…',o:['maximum force','zero force','half force','double force'],a:1,e:'F = BIL sin θ, and θ = 0 gives F = 0.'},
{q:'F on a 0.8 m wire, 1.0 A, 0.5 T (perpendicular)',o:['0.2 N','0.4 N','0.8 N','1.6 N'],a:1,e:'0.5 × 1 × 0.8.'},
{q:'In Fleming\'s right-hand rule, the middle finger shows…',o:['motion','field','induced current','force'],a:2,e:'Thumb = motion, First = Field, seCond = Current.'},
{q:'Lenz\'s law says the induced current…',o:['helps the change','opposes the change causing it','is always zero','flows clockwise'],a:1,e:'This follows from conservation of energy.'},
{q:'A dot (•) on a wire means the current is…',o:['into the page','out of the page','zero','alternating'],a:1,e:'Like the tip of an arrow coming at you.'},
{q:'ε = BLv. B = 0.5 T, L = 0.2 m, v = 4 m/s. ε =',o:['0.4 V','4 V','0.1 V','1.6 V'],a:0,e:'0.5 × 0.2 × 4.'}
]},
{t:'Electrostatics, the atom and radioactivity', notes:`
<ul><li>Unit of charge: the <b>coulomb (C)</b>. Rubbing transfers <b>electrons</b> from one material to the other: the one that gains electrons becomes negative, and the one that loses them becomes positive.</li><li>Coulomb's law F = kq₁q₂/r². Doubling r → F ÷ 4.</li><li>Field E = kQ/r². Double Q and double r → E × 2/4 = E/2 (54 → 27 N/C).</li><li>Earth is treated as negatively charged because it has an <b>excess of electrons</b>.</li></ul>
<h3>Rutherford's model</h3><p>Alpha particles were fired at gold foil. Most went straight through (the atom is mostly empty space); a few were deflected strongly. This shows a tiny, dense, <b>positive nucleus</b>, with electrons orbiting around it.</p>
<h3>Radioactivity</h3><ul><li>Isotopes: same number of protons (atomic number), <b>different numbers of neutrons</b>.</li><li>Beta decay: ⁵⁹₂₆Fe → ⁵⁹₂₇Co + ⁰₋₁e (the mass number stays the same, the atomic number goes up by 1).</li><li>Penetrating power: gamma &gt; beta &gt; alpha.</li><li>Dangers: ionising radiation damages cells and DNA → cancer, burns/radiation sickness, birth defects.</li><li>Half-life: the time for half of the nuclei to decay (100 mg → 50 mg = one half-life).</li></ul>`,
quiz:[
{q:'Unit of electric charge',o:['ampere','coulomb','volt','ohm'],a:1,e:'Coulomb (C).'},
{q:'Isotopes have different numbers of…',o:['protons','electrons','neutrons','atomic number'],a:2,e:'Same element, different neutrons.'},
{q:'Most to least penetrating',o:['α > β > γ','γ > β > α','β > α > γ','γ > α > β'],a:1,e:'Gamma passes through the most.'},
{q:'In beta decay the atomic number…',o:['decreases by 2','increases by 1','stays the same','decreases by 1'],a:1,e:'A neutron becomes a proton.'},
{q:'Rutherford\'s experiment showed a dense…',o:['electron cloud','positive nucleus','neutron shell','gas'],a:1,e:'A small, dense, positive nucleus.'},
{q:'80 g of a source with half-life 2 days. Mass after 6 days?',o:['40 g','20 g','10 g','5 g'],a:2,e:'3 half-lives: 80 → 40 → 20 → 10.'},
{q:'Rubbing a balloon on hair transfers…',o:['protons','neutrons','electrons','nuclei'],a:2,e:'Only electrons move.'}
]}
],
papers:[
{y:2025, src:'P2025/KSSC Physics 2025.pdf', note:'There is no official 2025 Physics marking scheme online. These solutions are worked out independently. g = 10 m/s², as on the KSSC Physics equations sheet.',
secs:[
{t:'Q1 – Light (16 marks)', qs:[
{n:'1a i.',q:'Explain how shadows form in terms of rectilinear propagation. (2)',a:'Light travels in straight lines (rectilinear propagation). When an opaque object blocks the light, the rays cannot bend around it, so a dark region (shadow) forms behind the object where no light reaches.'},
{n:'1a ii.',q:'Complete a ray diagram to find the position of the image of the box in the plane mirror. (3)',a:'1. Draw the image of the box the same perpendicular distance BELOW the mirror as the box is above it.\n2. Draw a straight (dashed) line from the image to the observer\'s eye. Where it crosses the mirror is the point of reflection; it must pass around the barrier.\n3. Draw the solid ray from the box to that point on the mirror, then to the eye, with arrows. Angle of incidence = angle of reflection.'},
{n:'1a iii.',q:'What does lateral inversion mean? (1)',a:'The image is reversed from left to right (e.g. your right hand appears as the left hand in the mirror).'},
{n:'1a iv.',q:'Two differences between real and virtual images in concave mirrors. (2)',a:'• A real image is formed where reflected rays actually meet and can be shown on a screen. A virtual image is where rays only appear to come from and cannot be shown on a screen.\n• A real image is inverted (object beyond F). A virtual image is upright and magnified (object between F and the mirror).'},
{n:'1b i.',q:'hₒ = 2.25 mm, u = 8.50 cm, convex lens f = 5.50 cm. Image distance? (3)',a:'1/f = 1/u + 1/v → 1/v = 1/5.50 − 1/8.50\n1/v = (8.50 − 5.50)/(5.50 × 8.50) = 3/46.75\n<b>v = 15.6 cm</b> (on the other side of the lens)'},
{n:'1b ii.',q:'Height of the image. (2)',a:'m = v/u = 15.58/8.50 = 1.83\nhᵢ = m × hₒ = 1.83 × 2.25 = <b>4.12 mm</b> (inverted)'},
{n:'1b iii.',q:'Nature of the image. (1)',a:'<b>Real</b> (and inverted, magnified).'},
{n:'1b iv.',q:'The convex lens is replaced with a concave lens. How does the image distance change? (2)',a:'The image distance <b>decreases</b>: the image forms on the same side as the object, between the lens and F, so it is virtual.\nConcave lens: 1/v = −1/5.5 − 1/8.5 → v = −3.34 cm (3.34 cm from the lens, virtual, upright, smaller).'}
]},
{t:'Q2 – Refraction, waves and the nature of light (16 marks)', qs:[
{n:'2a i.',q:'Two conditions for the critical angle (total internal reflection). (2)',a:'1. Light must travel from a denser medium to a less dense one (higher n to lower n).\n2. The angle of incidence must equal or exceed the critical angle (TIR happens when it is greater).'},
{n:'2a ii.',q:'Diamond to air, critical angle 24.4°. Refractive index of diamond? (2)',a:'n_diamond sin C = n_air sin 90°\nn = 1.00/sin 24.4° = 1/0.4131 = <b>2.42</b>'},
{n:'2b i–ii.',q:'Fill in: wave motion transfers ____; sound is a change in air ____.',a:'i. <b>energy</b>\nii. <b>pressure</b>'},
{n:'2b iii.',q:'Why does sound travel slower in air than in water? (2)',a:'In water the particles are much closer together and more strongly linked than in air, so each particle passes the vibration to the next one more quickly. In air the particles are far apart, so the vibrations are transferred more slowly.'},
{n:'2b iv.',q:'Show what happens to the wavefronts in shallow water. (2)',a:'Draw the wavefronts in shallow water <b>closer together</b> (shorter wavelength) and parallel. The waves slow down, so λ decreases while frequency stays the same. If they arrive at an angle, they also bend towards the normal.'},
{n:'2c i.',q:'What is the dual nature of light? (2)',a:'Light behaves both as a <b>wave</b> (it shows interference, diffraction and polarisation) and as a <b>particle</b> (photons, as in the photoelectric effect).'},
{n:'2c ii.',q:'Two failures of the corpuscular (particle) model. (2)',a:'1. It could not explain interference and diffraction (e.g. the bright and dark fringes in Young\'s experiment).\n2. It predicted that light travels FASTER in water than in air, but experiments show it is slower.'},
{n:'2c iii.',q:'Which colour bends more, red or blue? Why? (2)',a:'<b>Blue bends more.</b> Blue light has a shorter wavelength and travels more slowly in glass than red, so glass has a higher refractive index for blue and blue is refracted more.'}
]},
{t:'Q3 – Superposition, Young\'s experiment, motion graphs (16 marks)', qs:[
{n:'3a i–ii.',q:'Waves A and E (same shape, crest then trough) fully overlap. Draw the resultant and name the interference.',a:'Both waves start with a crest followed by a trough (in phase), so the displacements add. Draw ONE wave of the same wavelength with <b>double the amplitude</b>.\nType: <b>constructive interference</b>.'},
{n:'3a iii.',q:'Two situations where diffraction is likely. (2)',a:'1. Waves passing through a gap about the same size as their wavelength (e.g. sea waves through a gap in a reef or harbour wall).\n2. Waves passing the edge of an obstacle (e.g. hearing sound around a corner of a building).'},
{n:'3a iv.',q:'Phenomenon when two diffracted waves meet. (1)',a:'<b>Interference</b>.'},
{n:'3b i.',q:'d = 2.50 mm, L = 3.25 m, λ = 450 nm. Fringe width? (2)',a:'Δy = λL/d = (450×10⁻⁹ × 3.25)/(2.50×10⁻³)\n= <b>5.85×10⁻⁴ m (0.585 mm)</b>'},
{n:'3b ii.',q:'How do coherent sources form stable interference patterns? (2)',a:'Coherent sources have the same frequency (wavelength) and a constant phase difference. The path difference to each point on the screen therefore never changes, so bright fringes (constructive) and dark fringes (destructive) stay in fixed positions.'},
{n:'3c i.',q:'What does the gradient of a displacement–time graph represent? (1)',a:'<b>Velocity</b>.'},
{n:'3c ii.',q:'Type of motion between 0 s and 3 s. (1)',a:'<b>Constant (uniform) velocity</b>: a straight line from 0 to 12 m, i.e. 4 m/s away from the start.'},
{n:'3c iii.',q:'Average velocity from 0 to 9 s. (2)',a:'Displacement at 9 s = 12 m\nAverage velocity = 12 m/9 s = <b>1.33 m/s</b>'},
{n:'3c iv.',q:'Meaning of negative displacement and negative velocity. (2)',a:'Displacement: the object is on the opposite side of the starting/reference point (behind it).\nVelocity: the object is moving in the opposite (backward) direction.'}
]},
{t:'Q4 – Kinematics, vectors and Newton\'s laws (16 marks)', qs:[
{n:'4a i.',q:'a = 3.20 m/s² for 8 s from rest. Take-off velocity? (2)',a:'v = u + at = 0 + 3.20 × 8 = <b>25.6 m/s</b>'},
{n:'4a ii.',q:'Displacement before take-off. (2)',a:'s = ut + ½at² = 0 + ½ × 3.20 × 8² = <b>102.4 m</b>'},
{n:'4b i.',q:'One scalar and one vector. (2)',a:'Scalar: mass (or speed, distance, time, energy)\nVector: velocity (or force, displacement, acceleration, momentum)'},
{n:'4b ii–iii.',q:'Add vectors I and N on the grid. Find the direction of R. (1 square = 1 cm)',a:'Reading the grid: I ≈ 2 squares right, 4 squares down; N ≈ 4 squares right, 3 squares up.\nDraw N starting from the head of I (head-to-tail). R goes from the tail of I to the head of N.\nR = (2 + 4) right, (−4 + 3) up = 6 right, 1 down\n|R| = √(6² + 1²) = 6.1 cm\nDirection: θ = tan⁻¹(1/6) = <b>9.5° below the horizontal (to the right)</b>', flag:'Check your own grid reading. The method (head-to-tail, then tan⁻¹ of the components) is what earns the marks.'},
{n:'4c i.',q:'Two states of motion when the net force is zero. (2)',a:'1. At rest (stationary).\n2. Moving at constant velocity (constant speed in a straight line).'},
{n:'4c ii.',q:'Gradient of the Force vs acceleration graph and its units. (2)',a:'Gradient = ΔF/Δa = mass. Units: N/(m s⁻²) = <b>kg</b>.\nMethod: choose two points on the line, e.g. gradient = F at 3.75 m/s² ÷ 3.75.', flag:'The force axis on the printed graph has NO numbers, so a numerical value cannot be read. Full marks should go to correct working that shows gradient = mass in kg.'},
{n:'4c iii.',q:'Two differences between weight and mass. (2)',a:'1. Mass is the amount of matter (kg). Weight is the gravitational force on it (N).\n2. Mass is the same everywhere. Weight changes with location (W = mg, and g varies).\n(Also: mass is a scalar, weight is a vector.)'}
]},
{t:'Q5 – Torque, momentum, projectiles (16 marks)', qs:[
{n:'5a i.',q:'Weight of the boy, m₁ = 38 kg. (1)',a:'w₁ = mg = 38 × 10 = <b>380 N</b>'},
{n:'5a ii.',q:'Weight of the girl to balance (r₁ = 4.2 m, r₂ = 3.5 m). (3)',a:'Clockwise moment = anticlockwise moment\nw₁ × r₁ = w₂ × r₂\nw₂ = 380 × 4.2/3.5 = <b>456 N</b>'},
{n:'5b i.',q:'Momentum is always conserved in a ____ or ____. (2)',a:'<b>collision</b> or <b>explosion</b> (in a closed/isolated system).'},
{n:'5b ii.',q:'200 g ball at 20.5 m/s is hit back at 57.8 m/s. Change in momentum? (2)',a:'Take "towards the pitcher" as positive: u = −20.5 m/s, v = +57.8 m/s\nΔp = m(v − u) = 0.200 × (57.8 + 20.5) = <b>15.7 kg m/s</b> towards the pitcher'},
{n:'5b iii.',q:'Contact time 0.05 s. Force on the ball? (2)',a:'F = Δp/Δt = 15.66/0.05 = <b>313 N</b>'},
{n:'5c i.',q:'Vertical component of initial velocity (fired horizontally). (1)',a:'<b>0 m/s</b>'},
{n:'5c ii.',q:'Describe the motion as it moves horizontally into a vertical force field. (2)',a:'Horizontal velocity stays constant (1025 m/s), because there is no horizontal force (ignoring air resistance). Vertically it accelerates downwards at g = 10 m/s². The combined path is a curve (parabola).'},
{n:'5c iii.',q:'Time to hit the water (45 m cliff). (3)',a:'s = ut + ½gt², with u_vertical = 0\n45 = ½ × 10 × t²\nt = √(90/10) = <b>3.0 s</b>'}
]},
{t:'Q6 – Circular motion, gases (16 marks)', qs:[
{n:'6a i.',q:'Direction of the centripetal force. (1)',a:'<b>Towards the centre</b> of the circle.'},
{n:'6a ii.',q:'State the Universal Law of Gravitation and one use. (2)',a:'Every particle of matter attracts every other particle with a force proportional to the product of their masses and inversely proportional to the square of the distance between them: F = Gm₁m₂/r².\nUse: calculating the orbits of satellites and planets (or the mass of the Earth, or explaining tides).'},
{n:'6a iii.',q:'0.2 kg stone, r = 2.5 m, one revolution in 3 s. Centripetal force? (3)',a:'v = 2πr/T = 2π(2.5)/3 = 5.24 m/s\nF = mv²/r = 0.2 × 5.24²/2.5 = <b>2.19 N</b>'},
{n:'6b i.',q:'Fill in: pressure comes from the ____ of molecules; temperature measures average ____ energy.',a:'1. <b>collisions</b>\n2. <b>kinetic</b>'},
{n:'6b ii.',q:'Pressure–volume relationship at constant temperature. (2)',a:'Boyle\'s law: pressure is <b>inversely proportional</b> to volume (PV = constant). If the volume is halved, the pressure doubles, because molecules hit the walls more often.'},
{n:'6b iii.',q:'Why does air in a bicycle pump get hotter when compressed? (2)',a:'The moving piston does work on the gas. Molecules bounce off the inward-moving piston with greater speed, so their average kinetic energy increases. Temperature measures average kinetic energy, so the temperature rises.'},
{n:'6b iv.',q:'758 K = ? °C; 698 °C = ? K (2)',a:'758 − 273 = <b>485 °C</b>\n698 + 273 = <b>971 K</b>'},
{n:'6b v.',q:'Moles in 92 L at 2.5 atm and 295 K (R = 0.0821). (2)',a:'n = PV/RT = (2.5 × 92)/(0.0821 × 295) = 230/24.22 = <b>9.50 mol</b>'}
]},
{t:'Q7 – Work, energy, heat (16 marks)', qs:[
{n:'7a i.',q:'The area under a force–displacement graph represents… (1)',a:'<b>Work done</b>.'},
{n:'7a ii.',q:'Relationship between work done and energy. (1)',a:'Work done = energy transferred (1 J of work transfers 1 J of energy).'},
{n:'7a iii.',q:'F = 18 N, d = 5 m, W = 40 J. Angle between force and displacement? (3)',a:'W = Fd cos θ → cos θ = 40/(18 × 5) = 0.444\nθ = cos⁻¹(0.444) = <b>63.6°</b>'},
{n:'7b i.',q:'Explain an elastic collision. (1)',a:'A collision in which the total kinetic energy is conserved (no KE is lost as heat or sound). Momentum is also conserved.'},
{n:'7b ii.',q:'Plot Force vs extension (0,0), (1.5 cm, 75 N), (3.0, 150), (4.5, 225).',a:'Plot the four points and draw a straight line through the origin. This shows F ∝ x (Hooke\'s law). Gradient = 75/1.5 = 50 N/cm = 5000 N/m.'},
{n:'7b iii.',q:'k = 50 N/m, stretched 5.0 cm. Elastic PE? (2)',a:'E = ½kx² = ½ × 50 × (0.050)² = <b>0.0625 J</b>', flag:'The table gives k = 5000 N/m (50 N per cm), not 50 N/m, so the question contradicts its own data. With the stated 50 N/m the answer is 0.0625 J. With the graph value (5000 N/m) it would be 6.25 J.'},
{n:'7c i.',q:'True or False: during a change of state there is no temperature change. (1)',a:'<b>True</b>. The energy (latent heat) is used to change the state, not to raise the temperature.'},
{n:'7c ii.',q:'Two differences between heat and temperature. (2)',a:'1. Heat is the energy transferred because of a temperature difference (J). Temperature measures how hot something is, i.e. the average kinetic energy of its particles (°C or K).\n2. Heat depends on the mass (a bigger object holds more), but temperature does not.'},
{n:'7c iii.',q:'750 g of lead at 23 °C absorbs 2860 J (c = 128). Final temperature? (3)',a:'Q = mcΔT → ΔT = 2860/(0.750 × 128) = 29.8 °C\nFinal temperature = 23 + 29.8 = <b>52.8 °C</b>'}
]},
{t:'Q8 – Electricity (16 marks)', qs:[
{n:'8a i.',q:'Match Column A to Column B: 1. Current 2. Electron (2)',a:'1. Current → <b>B</b> (caused by the movement/flow of charge)\n2. Electron → <b>C</b> (the carrier of charge)'},
{n:'8a ii.',q:'T/F: 1. Electric charge flows from lower to higher potential. 2. Resistances oppose charge flow and receive energy from it. (2)',a:'1. <b>False</b>. Conventional (positive) charge flows from higher to lower potential. (Electrons, being negative, move from low to high, but the statement as written refers to electric charge/current.)\n2. <b>True</b>'},
{n:'8a iii.',q:'Difference between conventional current and electron flow. (2)',a:'Conventional current flows from the positive (+) terminal to the negative (−) terminal. Electron flow is the actual movement of electrons from negative (−) to positive (+), in the opposite direction.'},
{n:'8a iv.',q:'What makes some materials good conductors and others bad? (2)',a:'Good conductors (metals) have many free (delocalised) electrons that can move easily and carry charge. Bad conductors (insulators such as plastic and rubber) have electrons tightly bound to their atoms, so charge cannot flow.'},
{n:'8b i.',q:'Show that the total resistance is 8 Ω. (3)',a:'Three 6 Ω resistors in parallel: 1/R = 1/6 + 1/6 + 1/6 = 3/6 → R = 2 Ω\nIn series with the fourth 6 Ω: R_total = 2 + 6 = <b>8 Ω</b> ✓'},
{n:'8b ii.',q:'Ammeter reading. (1)',a:'I = V/R = 24/8 = <b>3.0 A</b>'},
{n:'8b iii.',q:'p.d. across the 6.0 Ω in series with the source. (2)',a:'V = IR = 3.0 × 6.0 = <b>18 V</b>'},
{n:'8b iv.',q:'Energy supplied in 3 s to that resistor. (2)',a:'E = VIt = 18 × 3.0 × 3 = <b>162 J</b>'}
]},
{t:'Q9 – Electromagnetism (16 marks)', qs:[
{n:'9a i.',q:'Principle of the electric motor. (2)',a:'A current-carrying conductor placed in a magnetic field experiences a force (motor effect). In a coil, the current flows in opposite directions on the two sides, so the forces are opposite and produce a turning effect (torque). A commutator reverses the current every half turn to keep it rotating.'},
{n:'9a ii.',q:'Coil 6.0 × 8.0 cm, I = 7.5 A, B = 0.43 T. Maximum force on the 8.0 cm wire. (2)',a:'F = BIL = 0.43 × 7.5 × 0.080 = <b>0.258 N</b>'},
{n:'9b i.',q:'The conductor shows a dot. Current into or out of the page? (1)',a:'<b>Out of the page</b> (a dot = the tip of the arrow coming towards you).'},
{n:'9b ii.',q:'Draw one field line and its direction. (2)',a:'Draw a circle around the conductor with an arrow going <b>anticlockwise</b> (right-hand grip rule: thumb out of the page, fingers curl anticlockwise).'},
{n:'9b iii.',q:'I = 2.5 A, B = 2.5×10⁻⁵ T. Distance of point A? (3)',a:'B = μ₀I/(2πr) → r = μ₀I/(2πB)\nr = (4π×10⁻⁷ × 2.5)/(2π × 2.5×10⁻⁵) = <b>0.020 m (2.0 cm)</b>'},
{n:'9c i.',q:'In Fleming\'s right-hand rule, the middle finger represents… (1)',a:'The direction of the <b>induced current</b>.'},
{n:'9c ii.',q:'State Lenz\'s law. (2)',a:'The direction of an induced current (or e.m.f.) is always such that it <b>opposes the change</b> in magnetic flux that produced it.'},
{n:'9c iii.',q:'Rod 15 cm, B = 0.32 T, induced voltage 0.165 V. Speed? (3)',a:'ε = BLv → v = ε/(BL) = 0.165/(0.32 × 0.15) = <b>3.44 m/s</b>'}
]},
{t:'Q10 – Electrostatics, atom, radioactivity (16 marks)', qs:[
{n:'10a i.',q:'Unit of charge. (1)',a:'<b>Coulomb (C)</b>'},
{n:'10a ii.',q:'Describe charging by rubbing. (2)',a:'When two different insulating materials are rubbed together, friction transfers <b>electrons</b> from one to the other. The material that gains electrons becomes negatively charged, and the one that loses electrons becomes equally positively charged. Protons do not move.'},
{n:'10a iii.',q:'E = 54 N/C at 0.22 m. Both charge and distance are doubled. New E? (3)',a:'E = kQ/r² → E_new = k(2Q)/(2r)² = (2/4) kQ/r² = ½E\nE_new = ½ × 54 = <b>27 N/C</b>'},
{n:'10b i.',q:'Brief description of Rutherford\'s model. (2)',a:'The atom has a tiny, dense, positively charged nucleus at its centre, containing almost all of its mass, with electrons orbiting around it. Most of the atom is empty space.'},
{n:'10b ii.',q:'Deflections confirmed the presence of the dense… (1)',a:'<b>(positively charged) nucleus</b>'},
{n:'10c i.',q:'Complete: ⁵⁹₂₆Fe → ? Co + ⁰₋₁e (2)',a:'⁵⁹₂₆Fe → <b>⁵⁹₂₇Co</b> + ⁰₋₁e\n(Mass: 59 = 59 + 0. Charge: 26 = 27 + (−1).)'},
{n:'10c ii.',q:'Two harmful effects of radiation on humans. (2)',a:'1. Ionising radiation damages cells and DNA, which can cause cancer (e.g. leukaemia).\n2. High doses cause radiation sickness and burns, and damage to reproductive cells can cause birth defects in future children.'},
{n:'10c iii.',q:'100 mg of I-131 injected at 8 pm Tuesday; 50 mg left at 3 pm Thursday of the next week. Half-life? (3)',a:'100 mg → 50 mg is exactly ONE half-life.\nTime: Tuesday 8 pm → Thursday of the next week, 8 pm = 9 days; minus 5 hours (3 pm) = 8 days 19 h\n= 211 hours\nHalf-life ≈ <b>211 h ≈ 8.8 days</b> (the accepted value for I-131 is about 8 days)'}
]},
{t:'Section B – Multiple choice (20 × 2 marks)', qs:[
{n:'1.',q:'What is partial reflection?',a:'<b>D</b>: some light is reflected and some is transmitted.'},
{n:'2.',q:'Air → water (1.33) at 20°. Angle of refraction?',a:'<b>A, 14.9°</b>: sin r = sin 20°/1.33 = 0.257.'},
{n:'3.',q:'What causes dispersion of white light?',a:'<b>C</b>: different colours have different speeds in a medium.'},
{n:'4.',q:'Path difference 1.5λ gives…',a:'<b>C</b>: destructive interference (a half-odd multiple of λ).'},
{n:'5.',q:'A van moves in a circle at constant speed. Average and instantaneous velocity?',a:'<b>B</b>: average velocity over a full circle is zero (zero displacement); instantaneous velocity is not zero (its direction keeps changing).'},
{n:'6.',q:'v–t graph: a rectangle above the axis and a triangle below. The SUM of the areas represents…',a:'<b>D</b>: total distance travelled (adding both areas as positive). (Taking the area below as negative would give the displacement.)'},
{n:'7.',q:'3500 kg truck with p = 77 000 kg m/s. Velocity?',a:'<b>C, 22.0 m/s</b>: v = p/m = 77 000/3500.'},
{n:'8.',q:'Acceleration of a free-falling body (no air resistance)?',a:'<b>A</b>: it is constant (g).'},
{n:'9.',q:'Why does weight change with location?',a:'<b>D</b>: the gravitational field strength changes.'},
{n:'10.',q:'Temperature during the change from liquid to gas?',a:'<b>A</b>: remains constant.'},
{n:'11.',q:'Heat to melt 500 g of ice at 0 °C (L = 3.34×10⁵ J/kg)?',a:'<b>D, 1.67×10⁵ J</b>: Q = 0.5 × 3.34×10⁵.'},
{n:'12.',q:'Oxygen at 29.0 °C, 3.05×10⁶ Pa, cooled to 4.00 °C. New pressure?',a:'P₂ = P₁ × T₂/T₁ = 3.05×10⁶ × 277.15/302.15 = <b>2.80×10⁶ Pa</b>', flag:'None of the printed options is correct. Option B (4.21×10⁵ Pa) is what you get by wrongly using °C (3.05×10⁶ × 4/29). Always use kelvin.'},
{n:'13.',q:'Electrical power is…',a:'<b>B</b>: energy (J) per unit time (s).'},
{n:'14.',q:'Kettle: I = 5.0 A, R = 48 Ω. Power?',a:'P = I²R = 25 × 48 = <b>1200 W</b>: option <b>D</b>.', flag:'Option D is printed as "1,200 J". The correct unit for power is W (watts).'},
{n:'15.',q:'A current-carrying wire parallel to a magnetic field feels…',a:'<b>C</b>: zero force.'},
{n:'16.',q:'0.8 m wire, 1.0 A, 0.5 T (perpendicular). Force?',a:'<b>B, 0.4 N</b>: F = BIL.'},
{n:'17.',q:'Why is the Earth considered negatively charged?',a:'<b>C</b>: it has an excess of electrons.'},
{n:'18.',q:'The distance between charges is doubled. Force becomes…',a:'<b>A</b>: divided by four (inverse square).'},
{n:'19.',q:'NOT a characteristic of isotopes?',a:'<b>A</b>: "same number of neutrons" is false; isotopes have different numbers of neutrons.'},
{n:'20.',q:'Penetrating power from most to least?',a:'<b>D</b>: Gamma > Beta > Alpha.'}
]}
]}
]});
