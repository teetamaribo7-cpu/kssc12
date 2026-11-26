addSubject({id:'mat', topics:[
{t:'Algebra: expanding, factorising, equations', notes:`
<h3>Laws</h3><ul><li>Commutative: a+b=b+a, ab=ba</li><li>Associative: (a+b)+c = a+(b+c)</li><li>Distributive: a(b+c)=ab+ac</li></ul>
<h3>Expanding</h3><p>(2x−1)(3x+5) = 6x² + 10x − 3x − 5 = <b>6x² + 7x − 5</b> (FOIL: First, Outer, Inner, Last)</p>
<h3>Factorising ax²+bx+c</h3><p>Find two numbers that multiply to a×c and add to b. 3x²−5x−2: a×c = −6 → −6 and +1 → 3x²−6x+x−2 = 3x(x−2)+1(x−2) = <b>(3x+1)(x−2)</b></p>
<h3>Quadratic formula</h3><div class="key">x = [−b ± √(b² − 4ac)] / 2a. Discriminant b²−4ac: &gt;0 two roots, =0 one root, &lt;0 no real roots.</div>
<h3>Simultaneous equations</h3><p>Elimination (multiply to match a coefficient, then add/subtract) or substitution (make one variable the subject). <b>Back-substitute</b> to check accuracy.</p>
<h3>Linear inequalities</h3><p>Solve like an equation, but <b>reverse the sign when you multiply or divide by a negative</b>. −10x &gt; 6 → x &lt; −3/5.</p>
<h3>Algebraic fractions</h3><p>Note that n−k = −(k−n). So k/(k−n) − k/(n−k) = k/(k−n) + k/(k−n) = <b>2k/(k−n)</b>.</p>
<h3>Factor theorem</h3><p>If f(a)=0 then (x−a) is a factor. Try factors of the constant term: ±1, ±5, … For 2x³−7x²−14x−5: f(−1)=0, f(5)=0, f(−½)=0 → (x+1)(x−5)(2x+1).</p>`,
quiz:[
{q:'Expand (x+3)(x−5)',o:['x²−2x−15','x²+2x−15','x²−15','x²−8x+15'],a:0,e:'x² −5x +3x −15 = x² −2x −15.'},
{q:'Factorise x² − 9',o:['(x−3)²','(x+3)(x−3)','(x−9)(x+1)','x(x−9)'],a:1,e:'Difference of two squares: a²−b² = (a+b)(a−b).'},
{q:'Factorise 2x² + 7x + 3',o:['(2x+1)(x+3)','(2x+3)(x+1)','(x+7)(2x+3)','(2x−1)(x−3)'],a:0,e:'(2x+1)(x+3) = 2x²+6x+x+3 = 2x²+7x+3.'},
{q:'Solve: x + y = 7 and x − y = 1',o:['x=4, y=3','x=3, y=4','x=5, y=2','x=6, y=1'],a:0,e:'Add: 2x = 8 → x = 4, then y = 3.'},
{q:'Solve −3x > 12',o:['x > −4','x < −4','x > 4','x < 4'],a:1,e:'Divide by −3 and REVERSE the sign: x < −4.'},
{q:'If f(2)=0 for a polynomial f(x), then…',o:['(x+2) is a factor','(x−2) is a factor','f has no roots','2 is the constant term'],a:1,e:'Factor theorem: f(a)=0 ⇔ (x−a) is a factor.'},
{q:'The discriminant of x² − 4x + 4 is…',o:['0','8','−8','32'],a:0,e:'b²−4ac = 16 − 16 = 0 → one repeated root (x=2).'},
{q:'(a+b)+c = a+(b+c) shows the…',o:['Commutative law','Associative law','Distributive law','Identity law'],a:1,e:'Grouping changes → associative.'}
]},
{t:'Indices and logarithms', notes:`
<h3>Index laws</h3><table><tr><td>aᵐ × aⁿ = aᵐ⁺ⁿ</td><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td><td>(aᵐ)ⁿ = aᵐⁿ</td></tr><tr><td>a⁰ = 1</td><td>a⁻ⁿ = 1/aⁿ</td><td>a^(1/n) = ⁿ√a</td></tr></table>
<h3>Equations with the same base</h3><p>(1/4)^(2x+2) = 64^(x+1) → (2⁻²)^(2x+2) = (2⁶)^(x+1) → −4x−4 = 6x+6 → <b>x = −1</b></p>
<h3>Logarithms</h3><div class="key">log_b(a) = c ⇔ b^c = a. Example: log₃₂ 8 = 3/5 ⇔ 32^(3/5) = 8.</div>
<ul><li>log(xy) = log x + log y</li><li>log(x/y) = log x − log y</li><li>log(xⁿ) = n log x</li><li>log_b b = 1, log_b 1 = 0</li><li>Change of base: log_b a = log a / log b</li></ul>
<p>log₂32 + log₂4 − log₂8 − log₂2 = 5 + 2 − 3 − 1 = <b>3</b></p>`,
quiz:[
{q:'Simplify 2³ × 2⁴',o:['2⁷','2¹²','4⁷','2¹'],a:0,e:'Add the indices: 2^(3+4).'},
{q:'5⁻² equals',o:['−25','1/25','−10','25'],a:1,e:'a⁻ⁿ = 1/aⁿ.'},
{q:'log₂ 8 =',o:['2','3','4','16'],a:1,e:'2³ = 8.'},
{q:'Write log₅ 125 = 3 in exponential form',o:['3⁵ = 125','5³ = 125','125³ = 5','5¹²⁵ = 3'],a:1,e:'b^c = a → 5³ = 125.'},
{q:'log 6 − log 2 =',o:['log 3','log 4','log 12','3'],a:0,e:'log(x/y) = log(6/2) = log 3.'},
{q:'Solve 3^x = 81',o:['3','4','27','9'],a:1,e:'81 = 3⁴.'},
{q:'16^(1/2) =',o:['8','4','2','32'],a:1,e:'Square root of 16.'},
{q:'2 log 5 can be written as',o:['log 10','log 25','log 7','log 2.5'],a:1,e:'n log x = log xⁿ.'}
]},
{t:'Coordinate geometry and circles', notes:`
<h3>Formulas</h3><ul><li>Gradient m = (y₂−y₁)/(x₂−x₁) = rate of change</li><li>Distance d = √[(x₂−x₁)² + (y₂−y₁)²]</li><li>Midpoint = ((x₁+x₂)/2, (y₁+y₂)/2)</li><li>Line: y − y₁ = m(x − x₁) or y = mx + c</li></ul>
<div class="key">Parallel lines: m₁ = m₂. Perpendicular lines: m₁ × m₂ = −1.</div>
<h3>Angle of inclination</h3><p>tan θ = m, measured from the positive x-axis. If m &lt; 0, then 90° &lt; θ &lt; 180°. For y = 5x + 1: θ = tan⁻¹5 = 78.7°, so the angle with the y-axis is 90° − 78.7° = 11.3°.</p>
<h3>Circles</h3><p>(x−a)² + (y−b)² = r²: centre (a, b), radius r.</p><p>General form: x² + y² − 8x + 6y − 11 = 0. Complete the square: (x−4)² − 16 + (y+3)² − 9 = 11 → (x−4)² + (y+3)² = 36, so centre (4, −3) and r = 6.</p>`,
quiz:[
{q:'Gradient of the line through (1,2) and (3,8)',o:['2','3','6','1/3'],a:1,e:'(8−2)/(3−1) = 3.'},
{q:'A line perpendicular to y = 2x + 1 has gradient',o:['2','−2','1/2','−1/2'],a:3,e:'m₁m₂ = −1 → −1/2.'},
{q:'Distance between (0,0) and (3,4)',o:['5','7','25','1'],a:0,e:'√(9+16) = 5.'},
{q:'Midpoint of (2,4) and (6,10)',o:['(4,7)','(8,14)','(3,5)','(4,6)'],a:0,e:'((2+6)/2, (4+10)/2).'},
{q:'Centre and radius of (x−2)² + (y+5)² = 49',o:['(2,−5), r=7','(−2,5), r=7','(2,−5), r=49','(2,5), r=7'],a:0,e:'(x−a)² + (y−b)² = r² → a=2, b=−5, r=7.'},
{q:'Two lines are parallel when…',o:['their gradients multiply to −1','they have the same gradient','they have the same y-intercept','they cross at 90°'],a:1,e:'Parallel ⇔ equal gradients.'},
{q:'The gradient of a straight line represents',o:['the area under it','the rate of change','the maximum value','the x-intercept'],a:1,e:'Gradient = rate of change of y with respect to x.'}
]},
{t:'Sequences and series', notes:`
<h3>Arithmetic (common difference d)</h3><ul><li>tₙ = a + (n−1)d</li><li>Sₙ = n/2 [2a + (n−1)d] = n/2 (a + l)</li></ul>
<p>Number of terms in 20, 23, …, 101: 101 = 20 + (n−1)3 → n = 28.</p>
<h3>Geometric (common ratio r)</h3><ul><li>tₙ = a·rⁿ⁻¹</li><li>Sₙ = a(rⁿ − 1)/(r − 1)</li><li>Sum to infinity (|r| &lt; 1): S∞ = a/(1 − r)</li></ul>
<div class="key">To show a sequence is geometric, show that t₂/t₁ = t₃/t₂ = … (the same r). For 2, −1, ½, −¼: r = −½ every time.</div>
<p>Bouncing ball: dropped from 400 m, rebounds 60%. Rebound heights: 240, 144, 86.4, 51.84, 31.104 → 5th bounce = 400 × 0.6⁵ = <b>31.104 m</b>.</p>
<p>The n in tₙ is the <b>position</b> of the term in the sequence.</p>`,
quiz:[
{q:'The 10th term of 3, 7, 11, …',o:['39','40','43','36'],a:0,e:'3 + 9×4 = 39.'},
{q:'Common ratio of 81, 27, 9, …',o:['3','1/3','−3','27'],a:1,e:'27/81 = 1/3.'},
{q:'Sum of first 10 terms of 2, 4, 6, …',o:['110','100','20','55'],a:0,e:'S = 10/2 (2×2 + 9×2) = 5 × 22 = 110.'},
{q:'S∞ of 8, 4, 2, …',o:['14','16','12','∞'],a:1,e:'a/(1−r) = 8/(1−½) = 16.'},
{q:'tₙ = −2ⁿ + 1 gives',o:['−1, −3, −7, −15','−2, −4, −6','3, 5, 9, 17','1, 3, 7, 15'],a:0,e:'n=1: −1; n=2: −3; n=3: −7; n=4: −15.'},
{q:'In tₙ, what does n represent?',o:['the value of the term','the position of the term','the common difference','the sum'],a:1,e:'n is the term number (position).'},
{q:'If t₄ = 4/3 and t₇ = 32/81 in a GP, r =',o:['2/3','3/2','2','4/3'],a:0,e:'r³ = (32/81)÷(4/3) = 8/27 → r = 2/3.'}
]},
{t:'Probability and the normal distribution', notes:`
<h3>Key words</h3><ul><li><b>Experiment/trial</b> – e.g. tossing a coin</li><li><b>Sample space</b> – the list of all outcomes</li><li><b>Event</b> – a specific outcome or set of outcomes, e.g. getting a head</li><li><b>Equally likely</b> – each outcome has the same chance (a fair die)</li></ul>
<div class="key">P(A) = n(A)/n(S), where n(S) = total number of possible outcomes.</div>
<h3>Tree diagrams – without replacement</h3><p>4 landscape (L), 3 portrait (P), pick 2: P(L then P) = 4/7 × 3/6 = 2/7; P(P then L) = 3/7 × 4/6 = 2/7 → P(one of each) = <b>4/7</b>. Multiply along branches, add between branches.</p>
<h3>Normal distribution</h3><p>z = (x − μ)/σ. Use the z-table for the area between 0 and z.</p><p>μ=82, σ=7.5: P(69 &lt; X &lt; 90) → z = −1.733 and 1.067 → 0.4584 + 0.3570 ≈ <b>0.815 (81.5%)</b>.</p>
<p>z-scores let you compare values from <b>different data sets</b> on the same scale.</p>
<p>Empirical rule: about 68% of data lies within 1σ, 95% within 2σ and 99.7% within 3σ.</p>`,
quiz:[
{q:'Which is an EVENT?',o:['Tossing a coin','A list of all outcomes','Getting a head when tossing a coin','The coin'],a:2,e:'An event is a particular outcome (or set of outcomes).'},
{q:'Which involves equally likely outcomes?',o:['A biased coin','Rolling a standard die','A bag of only red balls','A deck with more red cards'],a:1,e:'Each face of a fair die has probability 1/6.'},
{q:'P(rolling an even number on a die)',o:['1/6','1/3','1/2','2/3'],a:2,e:'3 even numbers out of 6.'},
{q:'A bag has 3 red and 2 blue. Two are taken without replacement. P(both red) =',o:['9/25','3/10','6/25','1/2'],a:1,e:'3/5 × 2/4 = 6/20 = 3/10.'},
{q:'z-score of x=70 when μ=60, σ=5',o:['1','2','−2','10'],a:1,e:'(70−60)/5 = 2.'},
{q:'About what % of normal data lies within 1 standard deviation of the mean?',o:['50%','68%','95%','99.7%'],a:1,e:'68–95–99.7 rule.'},
{q:'In P(x) = n(x)/n(S), n(S) is',o:['the successful outcomes','the total number of possible outcomes','one outcome','the number of trials won'],a:1,e:'S is the sample space.'}
]},
{t:'Functions, graphs and transformations', notes:`
<h3>Transformations of y = f(x)</h3><table><tr><th>Equation</th><th>Effect</th></tr>
<tr><td>f(x) + k</td><td>up k</td></tr><tr><td>f(x + k)</td><td><b>left</b> k</td></tr><tr><td>f(x − k)</td><td><b>right</b> k</td></tr><tr><td>a·f(x)</td><td>vertical stretch (a&lt;0 reflects in the x-axis)</td></tr><tr><td>f(bx)</td><td>horizontal compression by factor b</td></tr></table>
<p>f(x) = x² − 2 → f(x+1) = (x+1)² − 2 (shift left 1).</p>
<p>Domain: if f has domain x ≤ 3, then f(x+10) needs x + 10 ≤ 3 → <b>x ≤ −7</b> (vertical shifts do not change the domain).</p>
<h3>Polynomials</h3><p>Cubic = degree 3, e.g. (x−3)(x+1)(x−1). Quadratic y = (x−3)² − 4 has vertex (3, −4), x-intercepts 1 and 5, and y-intercept 5.</p>
<h3>Rational functions</h3><p>f(x) = (3x−2)/(x+2): vertical asymptote x = −2 (the denominator is 0); horizontal asymptote y = 3 (ratio of leading coefficients). As x → ∞, f(x) → 3.</p>
<h3>Odd and even functions</h3><ul><li>Even: f(−x) = f(x), symmetric about the y-axis (x², cos x)</li><li>Odd: f(−x) = −f(x), rotational symmetry about the origin (x, x³, sin x, tan x, 1/x)</li></ul>`,
quiz:[
{q:'y = f(x − 3) moves the graph',o:['up 3','down 3','left 3','right 3'],a:3,e:'x − k → right k.'},
{q:'f(x) = x² − 2 → f(x+1) =',o:['x² − 1','x² − 3','(x+1)² − 2','(x−1)² − 2'],a:2,e:'Replace x with (x+1).'},
{q:'The vertical asymptote of y = 1/(x−4) is',o:['x = 4','y = 4','x = −4','y = 0'],a:0,e:'The denominator is zero at x = 4.'},
{q:'Which is an odd function?',o:['y = x²','y = cos x','y = x³','y = x² + 1'],a:2,e:'(−x)³ = −x³.'},
{q:'Which is a cubic function?',o:['2x² − 3x + 1','∛x + x − 4','1/x³ + 2','(x−3)(x+1)(x−1)'],a:3,e:'Expanding gives degree 3.'},
{q:'Vertex of y = (x − 3)² − 4',o:['(3, −4)','(−3, 4)','(3, 4)','(−3, −4)'],a:0,e:'y = (x−h)² + k has vertex (h, k).'},
{q:'Domain of f is x ≤ 3. Domain of g(x) = f(x+10) − 2?',o:['x ≤ −10','x ≤ −7','x ≥ −10','x ≥ −7'],a:1,e:'x + 10 ≤ 3 → x ≤ −7.'}
]},
{t:'Calculus: differentiation', notes:`
<h3>Rules</h3><div class="key">d/dx (axⁿ) = n·a·xⁿ⁻¹. A constant differentiates to 0.</div>
<p>Write roots and fractions as powers first: f(x) = ∛x + 1/x² = x^(1/3) + x⁻² → f′(x) = ⅓x^(−2/3) − 2x⁻³.</p>
<h3>Gradient of a tangent</h3><p>m = f′(a). For h(x) = x³ − 6x at x = 2: h′(x) = 3x² − 6 → m = 6.</p>
<h3>Normal line</h3><p>The normal is perpendicular to the tangent: m_normal = −1/m_tangent. For y = x² at (−1, 1): m_t = −2, so m_n = ½ and the normal is y = ½x + 3/2.</p>
<h3>Maximum and minimum</h3><p>Set f′(x) = 0. P(x) = −5x² + 300x − 2000 → P′ = −10x + 300 = 0 → x = 30 → P(30) = $2500 (maximum, because the coefficient of x² is negative).</p>`,
quiz:[
{q:'d/dx (x⁵)',o:['5x⁴','x⁴','5x⁵','x⁶/6'],a:0,e:'n xⁿ⁻¹.'},
{q:'d/dx (3x² − 4x + 7)',o:['6x − 4','3x − 4','6x + 7','6x'],a:0,e:'6x − 4 + 0.'},
{q:'d/dx (√x)',o:['½x^(−½)','2√x','x^(½)','−½x^(−½)'],a:0,e:'x^(½) → ½x^(−½).'},
{q:'Gradient of y = x² at x = 3',o:['3','6','9','2'],a:1,e:'y′ = 2x = 6.'},
{q:'A turning point occurs where',o:['f(x) = 0','f′(x) = 0','x = 0','f′(x) = 1'],a:1,e:'The gradient is zero at maxima and minima.'},
{q:'If the tangent gradient is 4, the normal gradient is',o:['4','−4','¼','−¼'],a:3,e:'−1/m.'},
{q:'Maximum of y = −x² + 6x occurs at x =',o:['3','6','−3','0'],a:0,e:'y′ = −2x + 6 = 0 → x = 3.'}
]},
{t:'Calculus: integration and area', notes:`
<div class="key">∫ xⁿ dx = xⁿ⁺¹/(n+1) + c (n ≠ −1). Always add +c for indefinite integrals.</div>
<p>∫ ½x⁴ dx = x⁵/10 + c. ∫(3x³ − √(x⁵)) dx = ∫(3x³ − x^(5/2)) dx = ¾x⁴ − (2/7)x^(7/2) + c.</p>
<h3>Definite integrals</h3><p>∫ₐᵇ f(x) dx = F(b) − F(a). ∫₂⁵ (x² − 4x + 1) dx = [x³/3 − 2x² + x]₂⁵ = (−10/3) − (−10/3) = 0 (equal areas above and below the axis cancel).</p>
<h3>Area between curves</h3><ol><li>Find the intersection points (set the equations equal).</li><li>Area = ∫ (top − bottom) dx on each interval.</li><li>Add the areas of the separate regions (use positive values).</li></ol>
<p>y = x³ − 2x and y = 2x meet at x = −2, 0, 2. The area from −2 to 0 is 4 and from 0 to 2 is 4, so the total is <b>8 units²</b>.</p>`,
quiz:[
{q:'∫ x³ dx',o:['x⁴/4 + c','3x² + c','x⁴ + c','4x⁴ + c'],a:0,e:'Raise the power by 1, divide by the new power.'},
{q:'∫ 6 dx',o:['6x + c','0','6 + c','x⁶ + c'],a:0,e:'The integral of a constant k is kx + c.'},
{q:'∫₀² 3x² dx',o:['8','12','6','4'],a:0,e:'[x³]₀² = 8.'},
{q:'The anti-derivative of ½x⁴',o:['x⁵/10 + c','2x³ + c','5x⁵/2 + c','x⁵ + c'],a:0,e:'½ × x⁵/5.'},
{q:'To find the area between two curves you first find',o:['their gradients','their intersection points','their y-intercepts','their maximum points'],a:1,e:'The intersections give the limits of integration.'},
{q:'∫ x^(½) dx',o:['⅔x^(3/2) + c','½x^(−½) + c','3/2 x^(3/2) + c','x^(3/2) + c'],a:0,e:'x^(3/2)/(3/2).'}
]},
{t:'Trigonometry', notes:`
<h3>Graphs</h3><p>y = A cos(Bx + C) + D: amplitude |A|, period 360°/B, horizontal shift (C &gt; 0 → left), vertical shift D.</p><p>y = −2cos(4x) + 1: amplitude 2, period 90°. y = cos(3x): period 120°. y = cos(x + 60°) is shifted left 60°.</p>
<h3>Radians</h3><p>π rad = 180°. 2.5 rad = 2.5 × 180/π = <b>143.2°</b>.</p>
<h3>Non-right-angled triangles</h3><ul><li>Sine rule: a/sin A = b/sin B (use when you know an angle–side pair)</li><li>Cosine rule: a² = b² + c² − 2bc cos A</li><li>Area = ½ab sin C → ½ × 7 × 9 × sin 60° = <b>27.28 cm²</b></li></ul>
<h3>Bearings</h3><p>Measured clockwise from north. Draw a diagram and use angles on a straight line and the angle sum of 180°.</p>
<h3>Solving trig equations</h3><p>sin(2x − 30°) = −0.86. Reference angle = sin⁻¹(0.86) = 59.32°. Sine is negative in quadrants III and IV: 2x − 30° = 239.32°, 300.68°, 599.32°, 660.68° → x ≈ 134.7°, 165.3°, 314.7°, 345.3°. (The range of 2x − 30° is −30° to 690°.)</p>
<h3>Circle sector and segment</h3><p>Segment area = ½r²(θ − sin θ), with θ in radians. r = 15, θ = 125° = 2.182 rad → 153.3 cm².</p>
<h3>Identities</h3><p>tan x = sin x/cos x, cot x = cos x/sin x, sec x = 1/cos x, sin²x + cos²x = 1.</p>`,
quiz:[
{q:'Period of y = cos(3x)',o:['360°','120°','90°','60°'],a:1,e:'360°/3.'},
{q:'Amplitude of y = −2cos(4x) + 1',o:['−2','2','4','1'],a:1,e:'|A| = 2.'},
{q:'Which is shifted LEFT?',o:['cos(x − 60°)','cos(x + 60°)','2cos x','cos 2x'],a:1,e:'+60° inside the bracket → left.'},
{q:'π/2 radians =',o:['45°','90°','180°','360°'],a:1,e:'π = 180°.'},
{q:'To find angle B from sides a, b and angle A, use',o:['the cosine rule','the sine rule','Pythagoras','the area formula'],a:1,e:'sin B/b = sin A/a.'},
{q:'Area of a triangle with sides 4 and 5 and included angle 30°',o:['5','10','20','2.5'],a:0,e:'½ × 4 × 5 × sin 30° = 5.'},
{q:'sec x equals',o:['1/sin x','1/cos x','1/tan x','cos x/sin x'],a:1,e:'sec = 1/cos.'},
{q:'A negative gradient means the angle with the positive x-axis is',o:['0–90°','90°','90°–180°','180°'],a:2,e:'tan θ < 0 for an obtuse θ.'}
]}
],
papers:[
{y:2025, src:'P2025/KSSC Maths 2025.pdf', note:'Section A has 20 MCQs (1 mark each) and Section B has 10 questions (10 marks each). Total 120.',
secs:[
{t:'Section A – Multiple choice (20 marks)', qs:[
{n:'1.',q:'What does back substitution help confirm? A. equations are linear B. variables eliminated correctly C. accuracy of the solution D. slope-intercept form',a:'<b>C</b>. Substituting your answers back into the original equations checks that the solution is correct.'},
{n:'2.',q:'Which two lines are perpendicular?\nA. y=x+6, y=x−6  B. y+⅔x=1, y=3/2x−4  C. y=½x−2, y=−½x+3  D. y−2x=5, y=2x+2',a:'<b>B</b>. y = −⅔x + 1 has m = −⅔, and the other line has m = 3/2. (−⅔)(3/2) = −1, so they are perpendicular. A and D are parallel; C gives −¼.'},
{n:'3.',q:'The 4th term of a geometric series is 4/3 and the 7th term is 32/81. The common ratio is: A. 2/3 B. 3/2 C. 2 D. 4/3',a:'<b>A</b>. t₇/t₄ = r³ = (32/81) ÷ (4/3) = 96/324 = 8/27 → r = ∛(8/27) = 2/3.'},
{n:'4.',q:'Which is an example of a probability event?',a:'<b>D</b>: getting a head when tossing a coin. (Tossing is the experiment; the list of all outcomes is the sample space.)'},
{n:'5.',q:'f(x) = x² − 2 undergoes f(x+1). The new equation is:',a:'<b>C</b>: (x+1)² − 2. Replace every x with (x+1), which shifts the graph 1 unit left.'},
{n:'6.',q:'The square of the distance between (−2, 3) and (5, 7) is:',a:'<b>A</b>: (5+2)² + (7−3)² = 49 + 16 = 65.'},
{n:'7.',q:'y = cos(3x). What is its period?',a:'<b>B</b>: 360° ÷ 3 = 120°.'},
{n:'8.',q:'Which represents a cubic function?',a:'<b>D</b>: (x−3)(x+1)(x−1) expands to an x³ polynomial.'},
{n:'9.',q:'The general form of the equation of a circle centred at (a, b) with radius r:',a:'<b>C</b>: (x−a)² + (y−b)² = r².'},
{n:'10.',q:'In Tₙ = n(n−2), what does n represent?',a:'<b>D</b>: the position of the term in the sequence.'},
{n:'11.',q:'Which situation involves equally likely events?',a:'<b>B</b>: rolling a standard die (each face has probability 1/6).'},
{n:'12.',q:'The domain of f(x) is x ≤ 3. Domain of g(x) = f(x+10) − 2?',a:'<b>B</b>: x + 10 ≤ 3 → x ≤ −7. (The −2 is a vertical shift and does not change the domain.)'},
{n:'13.',q:'What does the gradient of a straight line represent?',a:'<b>C</b>: the rate of change between two variables.'},
{n:'14.',q:'Which cosine graph is shifted to the left?',a:'<b>B</b>: y = cos(x + 60°) (a plus inside the bracket means left).'},
{n:'15.',q:'log₃₂ 8 = 3/5 in exponential form is:',a:'<b>D</b>: 32^(3/5) = 8. (Check: ⁵√32 = 2 and 2³ = 8.)'},
{n:'16.',q:'A line has a negative gradient. The angle θ with the positive x-axis is:',a:'<b>D</b>: 90° < θ < 180°, because tan θ < 0 for obtuse angles.'},
{n:'17.',q:'Which sequence is generated by Tₙ = −2ⁿ + 1?',a:'<b>A</b>: −2+1 = −1, −4+1 = −3, −8+1 = −7, −16+1 = −15.'},
{n:'18.',q:'In p(x) = n(x)/n(S), what does n(S) represent?',a:'<b>D</b>: the total number of possible outcomes.'},
{n:'19.',q:'The anti-derivative of ½x⁴ is:',a:'<b>A</b>: ½ × x⁵/5 + c = x⁵/10 + c.'},
{n:'20.',q:'Solution set of −2(3x − 1) > 4(x + 2):',a:'<b>A</b>: −6x + 2 > 4x + 8 → −10x > 6 → x < −3/5 (the sign reverses when dividing by −10).'}
]},
{t:'Q1 – Algebra (10 marks)', qs:[
{n:'1A.',q:'Name the property: (a+b)+c = a+(b+c)',a:'<b>Associative property of addition.</b>'},
{n:'1B.',q:'Expand (2x − 1)(3x + 5)',a:'= 6x² + 10x − 3x − 5\n= <b>6x² + 7x − 5</b>'},
{n:'1C.',q:'Solve 3x + 2y = 16 and 2x − y = −1',a:'Multiply the second equation by 2: 4x − 2y = −2\nAdd it to the first: 7x = 14 → <b>x = 2</b>\nSubstitute: 2(2) − y = −1 → 4 − y = −1 → <b>y = 5</b>\nCheck: 3(2) + 2(5) = 16 ✓'},
{n:'1D.',q:'Fully simplify log₂32 + log₂4 − log₂8 − log₂2',a:'= log₂2⁵ + log₂2² − log₂2³ − log₂2\n= 5 + 2 − 3 − 1\n= <b>3</b>\n(Or: log₂[(32×4)/(8×2)] = log₂8 = 3)'},
{n:'1E.',q:'Use the factor theorem to factorise g(x) = 2x³ − 7x² − 14x − 5',a:'g(−1) = −2 − 7 + 14 − 5 = 0 → (x + 1) is a factor\ng(5) = 250 − 175 − 70 − 5 = 0 → (x − 5) is a factor\ng(−½) = −¼ − 7/4 + 7 − 5 = 0 → (2x + 1) is a factor\n<b>g(x) = (x + 1)(x − 5)(2x + 1)</b>'}
]},
{t:'Q2 – Algebra (10 marks)', qs:[
{n:'2A.',q:'Factorise 3x² − 5x − 2',a:'a × c = −6 → the numbers are −6 and +1\n3x² − 6x + x − 2 = 3x(x − 2) + 1(x − 2)\n= <b>(3x + 1)(x − 2)</b>'},
{n:'2B.',q:'Solve (1/4)^(2x+2) = 64^(x+1)',a:'(2⁻²)^(2x+2) = (2⁶)^(x+1)\n2^(−4x−4) = 2^(6x+6)\n−4x − 4 = 6x + 6\n−10x = 10 → <b>x = −1</b>'},
{n:'2C.',q:'Simplify k/(k−n) − k/(n−k)',a:'Since n − k = −(k − n):\nk/(k−n) − k/(n−k) = k/(k−n) + k/(k−n)\n= <b>2k/(k − n)</b>', flag:'The marking scheme stops at (2nk − 2k²)/[(k−n)(n−k)]. That is equivalent but not fully simplified: it cancels to 2k/(k−n).'},
{n:'2D.',q:'h = −5t² + 20t. When is the ball 10 m high? (2 d.p.)',a:'10 = −5t² + 20t → 5t² − 20t + 10 = 0 → t² − 4t + 2 = 0\nt = [4 ± √(16 − 8)]/2 = (4 ± √8)/2 = 2 ± 1.414\n<b>t = 0.59 s</b> (going up) and <b>t = 3.41 s</b> (coming down)'}
]},
{t:'Q3 – Coordinate geometry (10 marks)', qs:[
{n:'3A.',q:'State the condition for two lines to be parallel.',a:'They have the <b>same gradient</b> (m₁ = m₂).'},
{n:'3B.',q:'Find θ, the angle between the line y = 5x + 1 and the y-axis (see diagram).',a:'Angle with the x-axis: tan α = 5 → α = tan⁻¹5 = 78.7°\nθ is measured from the y-axis: θ = 90° − 78.7° = <b>11.3°</b>'},
{n:'3C.',q:'A(2, 3), B(6, 1). Equation of AB in the form y = mx + c.',a:'m = (1 − 3)/(6 − 2) = −2/4 = −½\ny − 3 = −½(x − 2) → y − 3 = −½x + 1\n<b>y = −½x + 4</b>'},
{n:'3D.',q:'Sketch the circle x² + y² − 8x + 6y − 11 = 0',a:'(x² − 8x) + (y² + 6y) = 11\n(x − 4)² − 16 + (y + 3)² − 9 = 11\n(x − 4)² + (y + 3)² = 36\n<b>Centre (4, −3), radius 6.</b>\nSketch: a circle centred at (4, −3), reaching x = −2 to 10 and y = −9 to 3.\nx-intercepts (y=0): (x−4)² = 27 → x = 4 ± 5.20 → −1.20 and 9.20\ny-intercepts (x=0): (y+3)² = 20 → y = −3 ± 4.47 → 1.47 and −7.47'}
]},
{t:'Q4 – Sequences and series (10 marks)', qs:[
{n:'4A.',q:'How many terms in 20, 23, 26, …, 101?',a:'tₙ = a + (n − 1)d → 101 = 20 + (n − 1)(3)\n81 = 3(n − 1) → n − 1 = 27 → <b>n = 28</b>'},
{n:'4B.',q:'d = −5 and S₂₆ = 468. Find the first term.',a:'Sₙ = n/2[2a + (n − 1)d]\n468 = 13[2a + 25(−5)] → 36 = 2a − 125\n2a = 161 → <b>a = 80.5</b>'},
{n:'4C.',q:'A ball is dropped from 400 m and rebounds 60% each time. Height of the 5th bounce?',a:'Rebound heights: 400×0.6 = 240, 144, 86.4, 51.84, 31.104\nh₅ = 400 × 0.6⁵ = <b>31.104 m</b> (≈ 31.1 m)', flag:'The marking scheme lists the 2nd rebound as 114. It should be 144 (240 × 0.6). The final answer 31.104 m is correct.'},
{n:'4D.',q:'GP with S₆ = 1092 and r = 3. Find the 4th term.',a:'S₆ = a(3⁶ − 1)/(3 − 1) = a(728)/2 = 364a\n364a = 1092 → a = 3\nt₄ = a·r³ = 3 × 27 = <b>81</b>'}
]},
{t:'Q5 – Sequences and probability (10 marks)', qs:[
{n:'5A.',q:'Show that 2, −1, ½, −¼, … is geometric.',a:'t₂/t₁ = −1/2 = −½\nt₃/t₂ = ½ ÷ (−1) = −½\nt₄/t₃ = (−¼) ÷ ½ = −½\nThe ratio is constant (r = −½), so the sequence is <b>geometric</b>.'},
{n:'5B(i).',q:'4 landscape (L) and 3 portrait (P) photos; 2 chosen without replacement. Draw a tree diagram.',a:'1st pick: L 4/7, P 3/7\nAfter L: L 3/6, P 3/6\nAfter P: L 4/6, P 2/6\nOutcomes:\nLL = 4/7 × 3/6 = 2/7\nLP = 4/7 × 3/6 = 2/7\nPL = 3/7 × 4/6 = 2/7\nPP = 3/7 × 2/6 = 1/7\n(Check: 2/7 + 2/7 + 2/7 + 1/7 = 1 ✓)'},
{n:'5B(ii).',q:'P(one landscape and one portrait)',a:'P(LP) + P(PL) = 2/7 + 2/7 = <b>4/7</b>'},
{n:'5C.',q:'Scores ~ N(82, 7.5²). Proportion scoring between 69 and 90?',a:'z₁ = (69 − 82)/7.5 = −1.733\nz₂ = (90 − 82)/7.5 = 1.067\nP = P(0<Z<1.733) + P(0<Z<1.067) = 0.4584 + 0.3570\n= <b>0.815 (about 81.5%)</b>'}
]},
{t:'Q6 – Probability and graphs of functions (10 marks)', qs:[
{n:'6A.',q:'Define the term "event".',a:'An event is a specific outcome, or set of outcomes, of a random experiment (e.g. getting a 6 when rolling a die).'},
{n:'6B(i).',q:'f(x) = (3x − 2)/(x + 2). Complete the table for x = −3, −2, −1, 0.',a:'f(−3) = −11/−1 = <b>11</b>\nf(−2) = −8/0 → <b>undefined</b>\nf(−1) = −5/1 = <b>−5</b>\nf(0) = −2/2 = <b>−1</b>'},
{n:'6B(ii–iv).',q:'Sketch f(x), list the asymptotes, and state the behaviour as x → ∞.',a:'Vertical asymptote: <b>x = −2</b>\nHorizontal asymptote: <b>y = 3</b>\nx-intercept: 3x − 2 = 0 → x = ⅔. y-intercept: −1.\nSketch: two branches. Left of x = −2 the curve lies above y = 3 (e.g. (−3, 11)). Right of x = −2 it comes up from −∞, passes (−1, −5), (0, −1), (⅔, 0) and approaches y = 3 from below.\nAs x → ∞, <b>f(x) → 3</b>'},
{n:'6C.',q:'State one equation of an odd function.',a:'e.g. <b>y = x³</b> (also y = x, y = sin x, y = tan x, y = 1/x)'}
]},
{t:'Q7 – Calculus (10 marks)', qs:[
{n:'7A.',q:'Differentiate f(x) = ∛x + 1/x²',a:'f(x) = x^(1/3) + x⁻²\n<b>f′(x) = ⅓x^(−2/3) − 2x⁻³</b> = 1/(3∛x²) − 2/x³'},
{n:'7B.',q:'h(x) = x³ − 6x passes through (2, −8). Find the gradient of the tangent at this point.',a:'h′(x) = 3x² − 6\nAt x = 2: m = 3(4) − 6 = <b>6</b>', flag:'Error in the paper: h(2) = 8 − 12 = −4, so the point (2, −8) is NOT on the curve. Using x = 2, the gradient is 6, as in the marking scheme.'},
{n:'7C(i).',q:'P(x) = −5x² + 300x − 2000. Number of items for maximum profit?',a:'P′(x) = −10x + 300 = 0 → <b>x = 30 items</b>\n(P″ = −10 < 0, so this is a maximum.)'},
{n:'7C(ii).',q:'Find the maximum profit.',a:'P(30) = −5(900) + 300(30) − 2000 = −4500 + 9000 − 2000 = <b>$2500</b>'},
{n:'7D.',q:'Sketch the normal to f(x) = x² at (−1, 1).',a:'f′(x) = 2x → m_tangent = −2\nm_normal = −1/(−2) = ½\ny − 1 = ½(x + 1) → <b>y = ½x + 3/2</b>\nKey points: y-intercept 1.5, x-intercept −3. It meets y = x² again where x² = ½x + 3/2 → 2x² − x − 3 = 0 → x = −1 or x = 3/2, i.e. at (3/2, 9/4).'}
]},
{t:'Q8 – Calculus and trigonometry (10 marks)', qs:[
{n:'8A.',q:'∫(3x³ − √(x⁵)) dx',a:'= ∫(3x³ − x^(5/2)) dx\n= <b>¾x⁴ − (2/7)x^(7/2) + c</b>'},
{n:'8B.',q:'Total area of the shaded regions between y = 2x and y = x³ − 2x.',a:'Intersections: x³ − 2x = 2x → x³ − 4x = 0 → x(x − 2)(x + 2) = 0 → x = −2, 0, 2\nFrom −2 to 0 (cubic on top): ∫(x³ − 4x)dx = [x⁴/4 − 2x²] from −2 to 0 = 0 − (4 − 8) = 4\nFrom 0 to 2 (line on top): ∫(4x − x³)dx = [2x² − x⁴/4] from 0 to 2 = 8 − 4 = 4\nTotal area = 4 + 4 = <b>8 units²</b>'},
{n:'8C.',q:'Evaluate ∫₂⁵ (x² − 4x + 1) dx',a:'[x³/3 − 2x² + x] from 2 to 5\nAt 5: 125/3 − 50 + 5 = −10/3\nAt 2: 8/3 − 8 + 2 = −10/3\nResult = −10/3 − (−10/3) = <b>0</b>'},
{n:'8D.',q:'Amplitude of y = −2cos(4x) + 1',a:'|−2| = <b>2</b>'},
{n:'8E.',q:'Convert 2.5 radians to degrees (1 d.p.)',a:'2.5 × 180/π = <b>143.2°</b>'}
]},
{t:'Q9 – Trigonometry (10 marks)', qs:[
{n:'9A.',q:'Formula for an unknown angle B when sides a, b and angle A are known.',a:'<b>Sine rule:</b> sin B / b = sin A / a'},
{n:'9B.',q:'Area of a triangle with AB = 7 cm, AC = 9 cm, ∠A = 60° (4 s.f.)',a:'Area = ½ × AB × AC × sin A = ½ × 7 × 9 × sin 60°\n= <b>27.28 cm²</b>'},
{n:'9C.',q:'Solve sin(2x − 30°) + 1 = 0.14 for 0° ≤ x ≤ 360°',a:'sin(2x − 30°) = −0.86\nReference angle = sin⁻¹(0.86) = 59.32°\nSine is negative in quadrants III and IV, and 2x − 30° ranges from −30° to 690°:\n2x − 30° = 239.32°, 300.68°, 599.32°, 660.68°\n2x = 269.32°, 330.68°, 629.32°, 690.68°\n<b>x ≈ 134.7°, 165.3°, 314.7°, 345.3°</b>', flag:'The marking scheme rounds the reference angle to 60° early and gives 135°, 165°, 315°, 345°. The accurate values are 134.7°, 165.3°, 314.7° and 345.3°.'},
{n:'9D.',q:'P is directly north of Q. Bearing P→A = 062°, PA = 2.9 km. Bearing Q→A = 036°. Find QA (nearest tenth).',a:'In triangle PQA:\n∠QPA = 180° − 62° = 118° (Q is due south of P)\n∠PQA = 36°\nQA is opposite ∠P and PA is opposite ∠Q:\nQA / sin 118° = 2.9 / sin 36°\nQA = 2.9 × 0.8829 / 0.5878 = <b>4.4 km</b>'}
]},
{t:'Q10 – Mixed (10 marks)', qs:[
{n:'10A.',q:'Transformation from y = sin x to y = sin(x − a)?',a:'A <b>horizontal translation of a units to the right</b>.'},
{n:'10B.',q:'One reason why a z-score helps when comparing values from different data sets.',a:'It puts values on the <b>same standard scale</b> (number of standard deviations from the mean), so values from data sets with different means and spreads can be compared directly.'},
{n:'10C.',q:'Area of the shaded segment (r = 15 cm, angle 125°).',a:'θ = 125° × π/180 = 2.182 rad\nSegment = ½r²(θ − sin θ) = ½(225)(2.182 − 0.8192)\n= 112.5 × 1.3625 = <b>153.3 cm²</b>'},
{n:'10D.',q:'Prove 1/(cot x · cos x · tan x) = sec x',a:'cot x · tan x = (cos x/sin x)(sin x/cos x) = 1\nSo LHS = 1/(1 × cos x) = 1/cos x = <b>sec x</b> = RHS ∎'},
{n:'10E.',q:'Sketch g(x) = (x − 3)² − 4',a:'A U-shaped parabola:\nVertex (3, −4)\nx-intercepts: (x − 3)² = 4 → x = 1 and x = 5\ny-intercept: g(0) = 9 − 4 = 5\nAxis of symmetry: x = 3'}
]}
]},
{y:2024, src:'P2024/2024 KSSC Mathematics Exam.pdf', note:'No correct marking scheme is online. The 2024 "MS" file is a draft of the paper with no answers, so every solution here is worked independently. Section A has 20 MCQs and Section B has 10 questions of 10 marks. Total 120.',
secs:[
{t:'Section A – Multiple choice (20 marks)', qs:[
{n:'1.',q:'Simplify 3(x+4) − 2(2x−3) + 5',a:'<b>C</b>: 3x + 12 − 4x + 6 + 5 = −x + 23.'},
{n:'2.',q:'Midpoint of (−4, 1) and (2, −3)',a:'<b>A</b>: ((−4+2)/2, (1−3)/2) = (−1, −1).'},
{n:'3.',q:'A GP has 5th term 32 and r = ½. First term?',a:'<b>D</b>: a(½)⁴ = 32 → a = 32 × 16 = 512.'},
{n:'4.',q:'Two fair coins are tossed. All possible outcomes?',a:'<b>A</b>: {HH, HT, TH, TT}.'},
{n:'5.',q:'Which function is even?',a:'<b>B</b>: f(x) = 3x² + 2, because f(−x) = f(x).'},
{n:'6.',q:'Gradient of the line through (−3, 4) and (1, −2)',a:'<b>A</b>: (−2 − 4)/(1 + 3) = −6/4 = −3/2.'},
{n:'7.',q:'tan 240°',a:'<b>B</b>: 240° is in quadrant 3, where tan is positive. tan 240° = tan 60° = √3.'},
{n:'8.',q:'Solve 3(2x − 1) ≤ 4x + 5',a:'<b>B</b>: 6x − 3 ≤ 4x + 5 → 2x ≤ 8 → x ≤ 4.'},
{n:'9.',q:'Angle between the positive x-axis and the line through (2, 3) and (6, 1)',a:'<b>D</b>: m = (1 − 3)/(6 − 2) = −½. tan⁻¹(½) = 26.6°, and a negative gradient gives an obtuse angle: 180° − 26.6° = 153.4°.'},
{n:'10.',q:'AP with first term 5, last term 50 and 10 terms. Sum?',a:'<b>B</b>: S = n/2 (a + l) = 10/2 × 55 = 275.'},
{n:'11.',q:'Normal curve with μ = 70 and σ = 10. Where is μ − 2σ?',a:'<b>A</b>: 70 − 20 = 50.'},
{n:'12.',q:'f(x) = (x − 1)² + 3 is reflected in the x-axis',a:'<b>C</b>: −f(x) = −(x − 1)² − 3.'},
{n:'13.',q:'Derivative of g(x) = x³ − 4x² + 6x − 8',a:'<b>A</b>: 3x² − 8x + 6.'},
{n:'14.',q:'Frequency of y = sin(5x − π/3) + 4',a:'<b>A</b>: period = 2π/5, so frequency = 1/period = 5/(2π).'},
{n:'15.',q:'Expand (2x + 3)(x − 4)(x + 1)',a:'<b>A</b>: (x − 4)(x + 1) = x² − 3x − 4. Then (2x + 3)(x² − 3x − 4) = 2x³ − 6x² − 8x + 3x² − 9x − 12 = 2x³ − 3x² − 17x − 12.'},
{n:'16.',q:'(x + 3)² + (y − 4)² = 25 is moved 2 right and 4 down',a:'<b>C</b>: the centre moves from (−3, 4) to (−1, 0), giving (x + 1)² + y² = 25.'},
{n:'17.',q:'Sigma notation for 10 + 8 + 6 + 4 + 2',a:'<b>A</b>: Σ from n=1 to 5 of (12 − 2n). Check: n = 1 gives 10 and n = 5 gives 2.'},
{n:'18.',q:'Anti-derivative of f(x) = 2x + 1 − 1/√(x³) + 10/x³',a:'⚠ <b>None of the options is correct.</b>\n∫x^(−3/2) dx = −2x^(−½), so −∫x^(−3/2) dx = +2x^(−½).\n∫10x⁻³ dx = −5x⁻².\nF(x) = <b>x² + x + 2x^(−½) − 5x⁻² + c</b>.\nOption B has the right x² + x − 5x⁻² parts but a wrong middle term. Choose B in the exam if you must pick one.'},
{n:'19.',q:'Radius 5 cm, arc length 2π cm. Central angle?',a:'<b>B</b>: θ = s/r = 2π/5 rad = 2π/5 × 180°/π = 72°.'},
{n:'20.',q:'Simplify (x² + 5x + 6)/(x² − 9) × (x + 3)/(x + 2)',a:'<b>D</b>: (x + 2)(x + 3)/((x − 3)(x + 3)) × (x + 3)/(x + 2) = (x + 3)/(x − 3).'}
]},
{t:'Q1 – Algebra (10 marks)', qs:[
{n:'1A.',q:'Write as a single fraction: 3/(x − 2) + 4x/(x + 1)',a:'= [3(x + 1) + 4x(x − 2)] / [(x − 2)(x + 1)]\n= <b>(4x² − 5x + 3) / ((x − 2)(x + 1))</b>'},
{n:'1B.',q:'Make x the subject: 4x/5 = y(x + 3)/2',a:'Cross-multiply: 8x = 5y(x + 3) = 5xy + 15y\n8x − 5xy = 15y\nx(8 − 5y) = 15y\n<b>x = 15y / (8 − 5y)</b>'},
{n:'1C.',q:'Solve by elimination: 3x + 2y = 18 and 5x + 4y = 26',a:'Multiply the first equation by 2: 6x + 4y = 36\nSubtract the second: x = 10\n3(10) + 2y = 18 → 2y = −12 → y = −6\n<b>x = 10, y = −6</b> (check: 50 − 24 = 26 ✓)'},
{n:'1D.',q:'Solve 4x² + 5x − 6 = 0 by factoring',a:'ac = −24. Find two numbers with product −24 and sum 5: 8 and −3.\n4x² + 8x − 3x − 6 = 4x(x + 2) − 3(x + 2) = (4x − 3)(x + 2)\n<b>x = ¾ or x = −2</b>'}
]},
{t:'Q2 – Indices, inequalities, logs, cubics (10 marks)', qs:[
{n:'2A.',q:'Simplify √[ (8x^½)^(⅔) / x^(−½) ]',a:'(8x^½)^(⅔) = 8^(⅔) x^(⅓) = 4x^(⅓)\nDivide by x^(−½): 4x^(⅓ + ½) = 4x^(5/6)\nSquare root: <b>2x^(5/12)</b>'},
{n:'2B.',q:'Solve 2x + 3 ≤ 4x − 5 ≤ 3x + 1',a:'Left part: 2x + 3 ≤ 4x − 5 → 8 ≤ 2x → x ≥ 4\nRight part: 4x − 5 ≤ 3x + 1 → x ≤ 6\n<b>4 ≤ x ≤ 6</b>'},
{n:'2C.',q:'Solve log₂(x + 4) − log₂(x − 3) = 3',a:'log₂[(x + 4)/(x − 3)] = 3 → (x + 4)/(x − 3) = 2³ = 8\nx + 4 = 8x − 24 → 7x = 28 → <b>x = 4</b>\nCheck: x − 3 = 1 > 0, so the log is defined ✓'},
{n:'2D.',q:'Find the roots of 2x³ + 3x² − 2x − 3 = 0',a:'Group the terms: x²(2x + 3) − 1(2x + 3) = (2x + 3)(x² − 1) = (2x + 3)(x − 1)(x + 1)\n<b>x = 1, x = −1, x = −3/2</b>\n(Or use the factor theorem: f(1) = 2 + 3 − 2 − 3 = 0.)'}
]},
{t:'Q3 – Limits, intersections, inverse functions (10 marks)', qs:[
{n:'3A.',q:'Define the limit of a function',a:'The limit of f(x) as x approaches a is the value L that f(x) gets closer and closer to as x gets closer to a (from both sides), whether or not f(a) itself exists. It is written lim(x→a) f(x) = L.'},
{n:'3B.',q:'Intersection points of y = 4x² − 12x + 9 and y = 2x + 3',a:'4x² − 12x + 9 = 2x + 3 → 4x² − 14x + 6 = 0 → 2x² − 7x + 3 = 0 → (2x − 1)(x − 3) = 0\nx = ½: y = 2(½) + 3 = 4\nx = 3: y = 9\n<b>(½, 4) and (3, 9)</b>'},
{n:'3C.',q:'g(x) = e^(x/2) + 1. Find g⁻¹(x), then g⁻¹(2) and g⁻¹(4) to 4 sf',a:'Write y = e^(x/2) + 1 and swap x and y: x = e^(y/2) + 1\ne^(y/2) = x − 1 → y/2 = ln(x − 1)\n<b>g⁻¹(x) = 2 ln(x − 1)</b>, for x > 1\ng⁻¹(2) = 2 ln 1 = <b>0</b> (0.000)\ng⁻¹(4) = 2 ln 3 = <b>2.197</b>'},
{n:'3D.',q:'Sketch the graph of g⁻¹(x)',a:'y = 2 ln(x − 1):\n• vertical asymptote at x = 1 (draw a dashed line); domain x > 1\n• x-intercept (2, 0); no y-intercept\n• passes through (1.5, −1.39) and (4, 2.20)\n• increasing, and rises slowly to the right\nLabel the axes, the asymptote and the points.'}
]},
{t:'Q4 – Coordinate geometry and transformations (10 marks)', qs:[
{n:'4A.',q:'Gradient of a line perpendicular to 2x + 3y = 12',a:'y = −⅔x + 4, so m = −⅔.\nPerpendicular gradient = −1/m = <b>3/2</b>'},
{n:'4B.',q:'f(x) = x² and p(x) = −2(x + 3)² + 4. State (i) the vertical scale factor (ii) the reflection',a:'(i) <b>Vertical stretch by a factor of 2</b>\n(ii) <b>Reflection in the x-axis</b> (from the minus sign)\n(p(x) is also shifted 3 left and 4 up.)'},
{n:'4C.',q:'A line y = mx + c is parallel to 5x + y − 3 = 0 and passes through (2, −8). Find c',a:'5x + y − 3 = 0 → y = −5x + 3, so m = −5.\n−8 = −5(2) + c → <b>c = 2</b>\nThe line is y = −5x + 2.'},
{n:'4D.',q:'Prove that X(1, 1), Y(4, 5), Z(7, 1) form an isosceles triangle',a:'XY = √[(4−1)² + (5−1)²] = √(9 + 16) = 5\nYZ = √[(7−4)² + (1−5)²] = √(9 + 16) = 5\nXZ = √[(7−1)² + 0²] = 6\nXY = YZ = 5, so two sides are equal and <b>△XYZ is isosceles</b> ∎'}
]},
{t:'Q5 – Circles and sequences (10 marks)', qs:[
{n:'5A.',q:'Centre and radius of x² + y² + 2x + 6y = 26',a:'Complete the square: (x + 1)² − 1 + (y + 3)² − 9 = 26\n(x + 1)² + (y + 3)² = 36\n<b>Centre (−1, −3), radius 6</b>'},
{n:'5B.',q:'An AP starts k − 3, 2k + 1, 5k − 2, … Find k',a:'Use equal differences: (2k + 1) − (k − 3) = (5k − 2) − (2k + 1)\nk + 4 = 3k − 3 → 2k = 7 → <b>k = 3.5</b>\n(Terms 0.5, 8, 15.5: the difference is 7.5 each time ✓)'},
{n:'5C.',q:'In a GP, t₅ = 32 and t₈ = 256. Find a and r',a:'t₈/t₅ = r³ = 256/32 = 8 → <b>r = 2</b>\nar⁴ = 32 → 16a = 32 → <b>a = 2</b>'},
{n:'5D.',q:'Leen runs 2 km on day 1 and adds 0.5 km each day. On which day does his total first reach 50 km?',a:'Sₙ = n/2 [2(2) + (n − 1)(0.5)] ≥ 50\nn(3.5 + 0.5n)/2 ≥ 50 → n² + 7n − 200 ≥ 0 → n ≥ 10.97\nCheck: S₁₁ = 5.5 × 9 = 49.5 (not yet), S₁₂ = 6 × 9.5 = 57 ✓\n<b>Day 12</b>'}
]},
{t:'Q6 – Series and probability (10 marks)', qs:[
{n:'6A.',q:'A ball is dropped from 10 ft and bounces back 9/10 of its height each time. Total vertical distance travelled?',a:'Down 10 ft first. After that, each bounce goes up and down the same height: 9, 8.1, …\nSum of the heights = 9/(1 − 0.9) = 90 ft\nTotal = 10 + 2 × 90 = <b>190 ft</b>'},
{n:'6B.',q:'Define sample space',a:'The <b>set of all possible outcomes</b> of an experiment, e.g. a die has S = {1, 2, 3, 4, 5, 6}.'},
{n:'6C.',q:'Two dice are rolled. P(sum < 5)?',a:'Pairs: (1,1), (1,2), (2,1), (1,3), (3,1), (2,2) = 6 outcomes out of 36\nP = 6/36 = <b>1/6</b>'},
{n:'6D.',q:'10 red, 15 blue and 25 green marbles, drawn with replacement. How many draws to expect 50 greens?',a:'P(green) = 25/50 = ½\nExpected greens = n × ½ = 50 → <b>n = 100 draws</b>'}
]},
{t:'Q7 – Normal distribution and calculus (10 marks)', qs:[
{n:'7A.',q:'z₁ = −1.8 and z₂ = 0.3. Which is closer to the tail?',a:'Draw a bell curve centred at 0. Mark −1.8 far to the left and 0.3 just right of the centre.\n<b>z₁ = −1.8</b> is closer to the (left) tail, because it is 1.8 SD from the mean compared with 0.3 SD.'},
{n:'7B.',q:'Scores ~ N(500, 100²). Minimum score for the top 10%?',a:'Top 10% → P(Z > z) = 0.10 → z = 1.28 (from the table: 0.3997 ≈ 0.4)\nx = μ + zσ = 500 + 1.28 × 100 = <b>628</b>'},
{n:'7C.',q:'f(x) = x³ − 7x² − x + 2. Find x when the gradient is 4',a:'f′(x) = 3x² − 14x − 1 = 4 → 3x² − 14x − 5 = 0 → (3x + 1)(x − 5) = 0\n<b>x = 5 or x = −⅓</b>'},
{n:'7D.',q:'Stationary point(s) of f(x) = 3x² − 12x + 7',a:'f′(x) = 6x − 12 = 0 → x = 2\nf(2) = 12 − 24 + 7 = −5\n<b>(2, −5)</b>. It is a minimum because f″ = 6 > 0.'}
]},
{t:'Q8 – Differentiation and integration (10 marks)', qs:[
{n:'8A.',q:'dy/dx for y = x^(4/3) − 5/x² + 7x − 1',a:'y = x^(4/3) − 5x⁻² + 7x − 1\n<b>dy/dx = (4/3)x^(1/3) + 10x⁻³ + 7</b>  (= (4/3)∛x + 10/x³ + 7)'},
{n:'8B.',q:'F(x) is the anti-derivative of f(x) = 3x^½ − 4/∛x and F(1) = 7. Find c',a:'F(x) = 3·x^(3/2)/(3/2) − 4·x^(2/3)/(2/3) + c = 2x^(3/2) − 6x^(2/3) + c\nF(1) = 2 − 6 + c = 7 → <b>c = 11</b>'},
{n:'8C.',q:'Use first principles to differentiate f(x) = 3x² − x + 7',a:'f(x + h) = 3x² + 6xh + 3h² − x − h + 7\nf(x + h) − f(x) = 6xh + 3h² − h\nDivide by h: 6x + 3h − 1\nf′(x) = lim(h→0) (6x + 3h − 1) = <b>6x − 1</b>'},
{n:'8D.',q:'Sketch f(x) = 2x³ + x² − 8x − 4 using derivative information',a:'Factorise: x²(2x + 1) − 4(2x + 1) = (2x + 1)(x − 2)(x + 2)\n• x-intercepts: −2, −½, 2; y-intercept: −4\n• f′(x) = 6x² + 2x − 8 = 2(3x + 4)(x − 1) = 0 → x = −4/3 or x = 1\n• Local maximum at (−4/3, 100/27 ≈ 3.70); local minimum at (1, −9)\n• A positive cubic: it starts bottom-left and ends top-right.'}
]},
{t:'Q9 – Area and trigonometry (10 marks)', qs:[
{n:'9A.',q:'Area between f(x) = −2x³ + 6x² − 4x and the x-axis from x = 0 to x = 2',a:'f(x) = −2x(x − 1)(x − 2), so the curve crosses the axis at x = 1. Split the integral there!\n∫ f dx = −x⁴/2 + 2x³ − 2x²\n0 → 1: −½ + 2 − 2 = −½ (below the axis)\n1 → 2: (−8 + 16 − 8) − (−½) = ½\nArea = |−½| + ½ = <b>1 unit²</b>\n⚠ Integrating straight from 0 to 2 gives 0, which is wrong.'},
{n:'9B.',q:'Prove cot²x + 1 = csc²x',a:'Start from sin²x + cos²x = 1 and divide every term by sin²x:\n1 + cos²x/sin²x = 1/sin²x\n<b>1 + cot²x = csc²x</b> ∎'},
{n:'9C.',q:'Arc length for r = 5 cm and θ = 120°',a:'θ = 120° = 2π/3 rad\ns = rθ = 5 × 2π/3 = 10π/3 ≈ <b>10.47 cm</b>'},
{n:'9D.',q:'Solve 3 cos(x − 45°) = −1.5 for 0° ≤ x ≤ 360°',a:'cos(x − 45°) = −0.5\nThe reference angle is 60°. cos is negative in quadrants 2 and 3: x − 45° = 120° or 240°\n<b>x = 165° or x = 285°</b>'}
]},
{t:'Q10 – Trigonometry (10 marks)', qs:[
{n:'10A.',q:'a = 5 cm, b = 7 cm, ∠C = 40°. Which rule finds c?',a:'The <b>cosine rule</b> (two sides and the included angle): c² = a² + b² − 2ab cos C\n(c² = 25 + 49 − 70 cos 40° = 20.38 → c ≈ 4.51 cm)'},
{n:'10B.',q:'Sector area for r = 50 m and θ = 45°',a:'A = θ/360 × πr² = ⅛ × π × 2500 = 312.5π ≈ <b>981.7 m²</b>'},
{n:'10C.',q:'a = 14, b = 19, c = 22. Find angle A to the nearest degree',a:'cos A = (b² + c² − a²)/(2bc) = (361 + 484 − 196)/(2 × 19 × 22) = 649/836 = 0.7763\n<b>A ≈ 39°</b>'},
{n:'10D.',q:'Derive the formula for the area of a segment (radius r, angle θ in radians)',a:'Segment = sector − triangle\nSector area = ½r²θ\nTriangle area (two radii with angle θ) = ½ab sin C = ½r² sin θ\n<b>Segment area = ½r²(θ − sin θ)</b>'}
]}
]},
{y:2023, src:'P2023/MATHEMATICS EXAM 2023.pdf', note:'Worked solutions, checked by calculation and against the MOE rubric. ⚠ marks where the rubric differs from the paper.',
secs:[
{t:'Section A – Multiple choice (20 marks)', qs:[
{n:'1–5',q:'1 m = −½, y-intercept 3 in general form; 2 Quadratic; 3 5² = 25 as a log; 4 3log2 − log4; 5 Point on y = 2x + 1',a:'1 <b>A</b>: y = −½x + 3 → 2y = −x + 6 → 2y + x − 6 = 0\n2 <b>B</b>: y = x(x − 1) = x² − x\n3 <b>D</b>: log₅25 = 2\n4 <b>D</b>: log 8 − log 4 = log(8/4) = log 2\n5 <b>C</b>: (0, 1), since 2(0) + 1 = 1'},
{n:'6–10',q:'6 tan θ for line l; 7 Centre of x² + y² = 16; 8 tₙ₊₁ = tₙ − 2, t₁ = 2; 9 Sum to infinity of 1, p, p²…; 10 3 + 6 + 9',a:'6 <b>B</b>: tan θ = Vy/Vx (rise/run)\n7 <b>D</b>: (0, 0)\n8 <b>A</b>: t₂ = 2 − 2 = 0\n9 <b>D</b>: −1 < p < 1 (|r| < 1)\n10 <b>B</b>: Σ from n=1 to 3 of 3n'},
{n:'11–15',q:'11 P(H) = 0.44, 200 tosses; 12 Mode of N(76.4, 5.2); 13 Within 1 SD; 14 Most data near…; 15 Graph type',a:'11 <b>C</b>: 0.44 × 200 = 88\n12 <b>D</b>: 76.4 kg (mean = median = mode)\n13 <b>C</b>: 68%\n14 <b>C</b>: the middle\n15 <b>C</b>: hyperbolic (y = k/x, two branches)'},
{n:'16–20',q:'16 Domain of the graph starting at (0, 1); 17 Symmetry of y = x; 18 ∫₀¹ x³ dx; 19 Amplitude of 3cos(4x + π); 20 Rule for θ',a:'16 <b>C</b>: x ≥ 0\n17 <b>C</b>: the line y = −x\n18 <b>C</b>: [x⁴/4]₀¹ = ¼\n19 <b>B</b>: 3\n20 <b>B</b>: 12/sin θ = 10/sin 47° (12 is opposite θ, 10 is opposite 47°)'}
]},
{t:'Q1 – Algebra (10 marks)', qs:[
{n:'1A.',q:'Simplify (x − 2)/(12 − 3x²)',a:'12 − 3x² = 3(4 − x²) = 3(2 − x)(2 + x)\n(x − 2) = −(2 − x)\n= <b>−1/(3(x + 2))</b>'},
{n:'1B.',q:'Factorise 5p² − 6p + 1',a:'ac = 5. Two numbers with product 5 and sum −6: −5 and −1\n5p² − 5p − p + 1 = 5p(p − 1) − 1(p − 1) = <b>(5p − 1)(p − 1)</b>'},
{n:'1C.',q:'Solve 4/(1 − x) = 3/(2x)',a:'Cross-multiply: 8x = 3(1 − x) = 3 − 3x\n11x = 3 → <b>x = 3/11 ≈ 0.27</b>'},
{n:'1D.',q:'Solve 2ˣ = 32',a:'32 = 2⁵ → <b>x = 5</b>'},
{n:'1E.',q:'Simplify 8/x² ÷ 2/x − 1/x',a:'Divide first: 8/x² × x/2 = 4/x\n4/x − 1/x = <b>3/x</b>'}
]},
{t:'Q2 – Algebra (10 marks)', qs:[
{n:'2A.',q:'Make x the subject: 1/x + 1/y = 1/f',a:'1/x = 1/f − 1/y = (y − f)/(fy)\n<b>x = fy/(y − f)</b>'},
{n:'2B.',q:'Solve 2x + 3y = 11 and 4x − 2y = 5',a:'Multiply the first by 2: 4x + 6y = 22\nSubtract the second: 8y = 17 → <b>y = 17/8 = 2.125</b>\n2x = 11 − 6.375 = 4.625 → <b>x = 37/16 ≈ 2.31</b>\nCheck: 4(2.3125) − 2(2.125) = 5 ✓\n⚠ The MOE rubric uses 4x − 2y = <b>10</b>, but the paper says <b>5</b>.'},
{n:'2C(i).',q:'Show (x − 1) is a factor of x³ − 2x² − x + 2',a:'f(1) = 1 − 2 − 1 + 2 = <b>0</b>, so by the factor theorem (x − 1) is a factor.'},
{n:'2C(ii).',q:'Factorise completely',a:'Divide by (x − 1): x³ − 2x² − x + 2 = (x − 1)(x² − x − 2)\n= <b>(x − 1)(x − 2)(x + 1)</b>\n(Or group: x²(x − 2) − 1(x − 2) = (x − 2)(x² − 1).)'}
]},
{t:'Q3 – Coordinate geometry (10 marks)', qs:[
{n:'3A.',q:'Where does y = 3x + 1 meet y = 2x − 1?',a:'3x + 1 = 2x − 1 → x = −2; y = 3(−2) + 1 = −5 → <b>(−2, −5)</b>'},
{n:'3B.',q:'Length from (5, 8) to (2, 4)',a:'d = √[(5 − 2)² + (8 − 4)²] = √(9 + 16) = <b>5</b>'},
{n:'3C.',q:'Draw a circle with centre (2, 4) and radius 3',a:'Mark the centre (2, 4). Mark the points 3 units away: (5, 4), (−1, 4), (2, 7), (2, 1). Draw a smooth circle through them (use a compass). Equation: (x − 2)² + (y − 4)² = 9.'},
{n:'3D.',q:'Line l ⟂ y = −2x + 1 through (−2, 0)',a:'m = −2, so the perpendicular gradient = ½\ny − 0 = ½(x + 2) → <b>y = ½x + 1</b> (or x − 2y + 2 = 0)'}
]},
{t:'Q4 – Sequences and series (10 marks)', qs:[
{n:'4A.',q:'AP: a = 3, t₅ = 11. Find d',a:'t₅ = a + 4d → 3 + 4d = 11 → <b>d = 2</b>'},
{n:'4B.',q:'Sum to infinity of 4, 2, 1, ½…',a:'a = 4, r = ½ → S∞ = a/(1 − r) = 4/0.5 = <b>8</b>'},
{n:'4C.',q:'General term of 1, 3, 9, 27, 81',a:'a = 1, r = 3 → <b>tₙ = 3ⁿ⁻¹</b>'},
{n:'4D.',q:'An 85 L container leaks 15, 9, 5.4… litres per year. How much is left after 10 years?',a:'GP with a = 15, r = 9/15 = 0.6\nS₁₀ = 15(1 − 0.6¹⁰)/(1 − 0.6) = 37.5 × 0.99395 = 37.27 L leaked\nRemaining = 85 − 37.27 = <b>47.73 L</b>'}
]},
{t:'Q5 – Normal distribution (10 marks)', qs:[
{n:'5A.',q:'z-score for x = 55, μ = 63, σ = 5',a:'z = (x − μ)/σ = (55 − 63)/5 = <b>−1.6</b> (1.6 SD below the mean)'},
{n:'5B.',q:'Two features of a normal distribution',a:'1. <b>Bell-shaped and symmetric</b> about the mean.\n2. <b>Mean = median = mode</b> (in the centre).\n(Also: the total area is 1; 68% lies within 1 SD, 95% within 2 SD, 99.7% within 3 SD.)'},
{n:'5D.',q:'P(Z < −0.76)',a:'From the table, P(0 < Z < 0.76) = 0.2764\nP(Z < −0.76) = 0.5 − 0.2764 = <b>0.2236</b>'}
]},
{t:'Q6 – Functions and limits (10 marks)', qs:[
{n:'6A.',q:'lim (x→0) (5x² + x)/x',a:'= lim x(5x + 1)/x = lim (5x + 1) = <b>1</b>'},
{n:'6B.',q:'f(x) = x³ → g(x) = x³ + 1',a:'A <b>vertical translation 1 unit up</b>.'},
{n:'6C.',q:'Inverse of y = √(x + 1)/2',a:'Swap x and y: x = √(y + 1)/2 → 2x = √(y + 1) → 4x² = y + 1\n<b>f⁻¹(x) = 4x² − 1</b>, for x ≥ 0'},
{n:'6D.',q:'Sketch f(x) = x² − 2x',a:'x-intercepts: x(x − 2) = 0 → (0, 0) and (2, 0)\ny-intercept: (0, 0)\nTurning point: x = 1, f(1) = −1 → <b>(1, −1)</b>, a minimum\nDraw a U-shaped parabola through these points.'}
]},
{t:'Q7 – Differentiation (10 marks)', qs:[
{n:'7A.',q:'Gradient of the tangent to y = x² at (3, 9)',a:'dy/dx = 2x = 2(3) = <b>6</b>'},
{n:'7B.',q:'Gradient of the normal to y = x² at (−2, 4)',a:'Tangent: 2(−2) = −4\nNormal = −1/(−4) = <b>¼</b>'},
{n:'7C.',q:'Rectangle with 108 m of fencing. Largest area?',a:'2x + 2y = 108 → y = 54 − x\nA = x(54 − x) = 54x − x²\ndA/dx = 54 − 2x = 0 → x = 27, y = 27 (a square)\nA = 27 × 27 = <b>729 m²</b>'}
]},
{t:'Q8 – Trigonometry (10 marks)', qs:[
{n:'8A.',q:'Solve sin θ = ½, 0° ≤ θ ≤ 360°',a:'Reference angle 30°. sin is positive in quadrants 1 and 2 → <b>θ = 30°, 150°</b>'},
{n:'8B.',q:'Ramp at 45° (10 m long), sand pile side at 60°. Find x',a:'The triangle has angles 45°, 60° and 180 − 105 = 75°.\nSine rule: x/sin 45° = 10/sin 60°\nx = 10 sin 45°/sin 60° = <b>8.16 m</b>'},
{n:'8C.',q:'60° in radians',a:'60 × π/180 = <b>π/3</b> (≈ 1.05)'},
{n:'8D.',q:'Segment area: r = 12 cm, θ = 9π/12',a:'θ = 3π/4 (135°)\nA = ½r²(θ − sin θ) = ½ × 144 × (2.356 − 0.707) = 72 × 1.649 = <b>118.73 cm²</b>'}
]},
{t:'Q9 – Statistics (10 marks)', qs:[
{n:'9A.',q:'Continuous or discrete: wake-up time; shoe size',a:'Time to wake up: <b>continuous</b> (measured)\nShoe sizes: <b>discrete</b> (set values)'},
{n:'9B.',q:'Stratified sample of 30 from Science 20, English 50, Maths 80',a:'Total = 150. English = 50/150 × 30 = <b>10 students</b>'},
{n:'9C.',q:'Describe systematic sampling',a:'List the population in order, work out k = population ÷ sample size, pick a random start, then choose <b>every k-th person</b> (e.g. every 5th name on the roll).'},
{n:'9D.',q:'Histogram of heights',a:'x-axis: height (cm), from 120 to 160. y-axis: number of students.\nBars with <b>no gaps</b>: 120–130 → 10, 130–140 → 5, 140–150 → 10, 150–160 → 20.\nTitle: "Distribution of student heights".\n(The printed axis labels on the grid are mixed up: start the x-axis at 120.)'}
]},
{t:'Q10 – Integration (10 marks)', qs:[
{n:'10A.',q:'∫(√x + 1) dx',a:'= <b>(2/3)x^(3/2) + x + c</b>'},
{n:'10B.',q:'∫₁² (3x² + 2x − 1) dx',a:'[x³ + x² − x]₁² = (8 + 4 − 2) − (1 + 1 − 1) = 10 − 1 = <b>9</b>'},
{n:'10C.',q:'Area between y = x and y = x²',a:'They meet at x = 0 and x = 1, and y = x is on top.\nA = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = ½ − ⅓ = <b>1/6 unit²</b>'}
]}
]}
]});
