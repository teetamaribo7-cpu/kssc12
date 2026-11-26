addSubject({id:'ict', topics:[
{t:'Hardware, components and peripherals', notes:`
<table><tr><th>Component</th><th>Job</th></tr>
<tr><td>CPU (processor)</td><td>Carries out instructions; the "brain"</td></tr>
<tr><td>RAM</td><td>Short-term, volatile memory holding the programs and data in use. More RAM → more programs at once, faster</td></tr>
<tr><td>ROM / BIOS / UEFI (firmware)</td><td>Starts the computer (boot) and tests the hardware. Update it for bug fixes and security</td></tr>
<tr><td>Hard drive / SSD</td><td>Long-term storage</td></tr>
<tr><td>Video (graphics) card</td><td>Generates images and sends them to the monitor</td></tr>
<tr><td>Optical CD/DVD drive</td><td>Reads and installs software from discs</td></tr>
<tr><td>Expansion slots</td><td>Add memory or cards to upgrade a PC</td></tr></table>
<h3>Input and output</h3><ul><li>Input: keyboard, pointing devices (mouse, touchpad – move the cursor, select, click), scanner, microphone.</li><li>Output: monitor, printer (hard copy), projector (enlarges images onto a screen for an audience), speakers.</li><li>Printers: laser (toner), inkjet (ink cartridges), <b>impact/dot-matrix (ribbon)</b>, thermal (heat).</li></ul>
<h3>Keyboard</h3><ul><li>Alt + F4 closes the active window or program (it may ask to save).</li><li>Insert switches between insert and overwrite modes.</li><li>The bumps on F and J guide the index fingers to the home row for touch typing.</li></ul>
<h3>Care and environment</h3><p>Keep computers cool, with dust-free airflow and moderate humidity (salt air and heat in Kiribati damage electronics). Use a UPS/surge protector against power cuts. A blank screen showing "No signal" often means a power or cable fault.</p>`,
quiz:[
{q:'To install software from a disc you use the…',o:['USB port','hard drive','graphics card','optical CD/DVD drive'],a:3,e:'It reads the disc.'},
{q:'Which device makes a hard copy?',o:['Printer','Scanner','Monitor','External drive'],a:0,e:'Paper output.'},
{q:'A projector…',o:['records presentations','prints photos','improves audio','enlarges images onto a surface for an audience'],a:3,e:'Output device.'},
{q:'Which printer uses a ribbon?',o:['Laser','Inkjet','Impact (dot matrix)','3D'],a:2,e:'Pins strike an inked ribbon.'},
{q:'RAM is…',o:['permanent storage','temporary working memory','a printer','the BIOS'],a:1,e:'Volatile: it is cleared when the power is off.'},
{q:'Alt + F4 will…',o:['print','close the active window','open a new tab','save'],a:1,e:'Closes the current application.'},
{q:'The main job of a video card',o:['store files','generate and output images to the monitor','connect to Wi-Fi','play sound'],a:1,e:'Graphics.'}
]},
{t:'Operating systems and file management', notes:`
<ul><li>The <b>operating system</b> manages hardware and software: memory, processes, files, devices and the user interface. Examples: Windows, macOS, Linux; mobile: iOS (iPhone), Android.</li><li><b>Multitasking:</b> the OS gives each running application its own area of memory and shares CPU time between them so they do not interfere.</li><li><b>Utilities:</b> antivirus, disk cleanup, backup, compression.</li></ul>
<h3>File management</h3><ul><li>Group related files in folders → easier to find, back up and share.</li><li>Use descriptive names (e.g. "Form6_Chemistry_Notes_2025") → clear contents and less confusion.</li><li>Save regularly (Ctrl + S) and keep backups (USB, cloud) in case of power cuts or crashes.</li></ul>
<h3>Data compression</h3><ul><li><b>Lossless:</b> no data is lost; the original can be restored exactly (ZIP, PNG).</li><li><b>Lossy:</b> some data is removed permanently for smaller files (JPEG, MP3, MP4).</li></ul>`,
quiz:[
{q:'An iPhone runs…',o:['iOS','Chrome OS','Android','Windows Phone'],a:0,e:'Apple\'s mobile OS.'},
{q:'Which is lossy image compression?',o:['MP3','JPEG','Huffman coding','Arithmetic coding'],a:1,e:'MP3 is lossy too, but it is for audio.'},
{q:'Why use descriptive folder names?',o:['to use more space','to make the contents clear and easy to find','to hide files','it is required'],a:1,e:'Organisation.'},
{q:'ZIP files are…',o:['lossy','lossless','images','viruses'],a:1,e:'Files are restored exactly.'},
{q:'Why save your work regularly?',o:['to slow the PC','to avoid losing work in a power cut or crash','to print','to share'],a:1,e:'Protects your progress.'}
]},
{t:'Word processing', notes:`
<ul><li><b>Alignment:</b> left, centre, right, <b>justify</b> (straight left and right edges).</li><li><b>Line spacing:</b> Home → Paragraph → Line spacing → 1.5.</li><li><b>Bullets and numbering</b> for lists.</li><li><b>Page colour:</b> Design tab → Page Color → choose a colour.</li><li><b>Thesaurus</b> (Review tab) finds synonyms; <b>Spell check</b> finds spelling errors; <b>Mail merge</b> makes personalised letters from a list; <b>Word wrap</b> moves text to the next line automatically.</li></ul>
<h3>Tables</h3><ul><li>Shade a row: select the row → Table Design → Shading (or Borders and Shading) → choose a colour.</li><li>Insert a column: click in the column → right-click → Insert → Insert Columns to the Right.</li></ul>`,
quiz:[
{q:'To find synonyms use…',o:['Thesaurus','Word wrap','Mail merge','Spell check'],a:0,e:'Review → Thesaurus.'},
{q:'Text with straight left AND right edges is…',o:['left aligned','centred','justified','right aligned'],a:2,e:'Justify.'},
{q:'Mail merge is used to…',o:['check spelling','make personalised letters from a data list','insert pictures','change the page colour'],a:1,e:'E.g. letters to every parent.'},
{q:'Where do you change the page background colour (Word)?',o:['Insert','Design → Page Color','View','Mailings'],a:1,e:'Design tab.'},
{q:'A list with ● symbols at the start of each line uses…',o:['numbering','bullets','columns','tabs'],a:1,e:'Bullets.'}
]},
{t:'Spreadsheets', notes:`
<ul><li><b>Label</b> = text (e.g. "Total Sales"). <b>Value</b> = a number typed in (static). <b>Formula</b> starts with = and calculates from other cells.</li><li>Cell reference = column letter + row number (D4).</li><li>Functions: =SUM(B4:C4), =AVERAGE(J9:N9), =MAX(), =MIN(), =COUNT(), =IF(B2>=50,"Pass","Fail").</li><li><b>Absolute reference</b> $F$15 does not change when copied (e.g. =$F$15*J8 for a fixed rate). A relative reference (J8) changes.</li><li>Jump to a cell: type it in the <b>Name Box</b>, or press F5/Ctrl + G (Go To).</li><li>Copy a sheet: right-click the tab → Move or Copy → tick "Create a copy" → OK, then rename it.</li><li>Check data against the source: =VLOOKUP(ID, SourceRange, column, FALSE) or =IF(A2=Source!A2,"OK","Check").</li><li>Spreadsheets help decisions: sort, filter, calculate, chart.</li></ul>`,
quiz:[
{q:'A cell containing "Total Sales" is a…',o:['value','label','formula','function'],a:1,e:'Text heading.'},
{q:'Sum of B4 and C4',o:['=B+C','=B4+4C','=SUM(B4:C4)','SUM B4 C4'],a:2,e:'=B4+C4 also works.'},
{q:'$F$15 is…',o:['a relative reference','an absolute reference','a label','an error'],a:1,e:'It stays fixed when copied.'},
{q:'Value vs formula',o:['they are the same','values are static; formulas calculate from other cells','formulas cannot change','values are text'],a:1,e:'A formula updates automatically.'},
{q:'The quickest way to go to H25',o:['scroll','type H25 in the Name Box','print','sort'],a:1,e:'Or F5 → Go To.'},
{q:'=AVERAGE(A1:A5) gives…',o:['the total','the mean','the largest value','the count'],a:1,e:'Sum ÷ count.'}
]},
{t:'Databases and SQL', notes:`
<ul><li>A database stores organised data for easy retrieval and management, and can be used by many users at once.</li><li><b>Table</b> → <b>record</b> (a row = one student) → <b>field</b> (a column = one attribute, e.g. Grade).</li><li><b>Primary key</b>: a unique field for each record (StudentID).</li><li>Accuracy: centralised data plus <b>validation rules</b> (e.g. Age between 10 and 20) reduce errors and duplicates.</li></ul>
<h3>SQL</h3><table><tr><th>Clause</th><th>Purpose</th></tr><tr><td>SELECT</td><td>columns to show</td></tr><tr><td>FROM</td><td>table</td></tr><tr><td>WHERE</td><td><b>filter records by a condition</b></td></tr><tr><td>ORDER BY … ASC/DESC</td><td>sort the results</td></tr></table>
<p>SELECT EmployeeName, Salary FROM Employee WHERE Salary &gt; 50000 AND DOB &lt; #01/01/1990# ORDER BY Salary DESC;</p><p>Aggregates: MAX(), MIN(), SUM(), AVG(), COUNT() → SELECT MAX(Salary) FROM Employee;</p>`,
quiz:[
{q:'Each ROW in a table is…',o:['the whole database','the table structure','one record','an attribute'],a:2,e:'One entry.'},
{q:'Each COLUMN is…',o:['a complete record','one student','the primary key','an attribute (field) of all records'],a:3,e:'E.g. Grade.'},
{q:'WHERE in SQL…',o:['sorts','joins tables','chooses columns','filters records by a condition'],a:3,e:'E.g. WHERE Score > 50.'},
{q:'ORDER BY score DESC…',o:['filters scores','sorts from highest to lowest','deletes rows','groups'],a:1,e:'Descending order.'},
{q:'A primary key must be…',o:['blank','unique for each record','text only','repeated'],a:1,e:'It identifies the record.'},
{q:'How does a database improve accuracy?',o:['hides data','random storage','centralised data with validation rules','uncontrolled edits'],a:2,e:'Fewer errors and duplicates.'}
]},
{t:'Computers in society: ethics, law and security', notes:`
<ul><li><b>Copyright:</b> do not copy software, music or text without permission.</li><li><b>Confidentiality/privacy:</b> businesses must protect client data; leaking it breaks corporate confidentiality and privacy laws.</li><li><b>Security:</b> strong passwords, antivirus, updates (including firmware), backups, firewalls. Watch for phishing and scams.</li><li><b>Programming languages:</b> Python, JavaScript, Java, C++. (HTML/CSS are markup and styling languages; Windows/Linux are operating systems; Word/Excel are applications.)</li><li><b>Culture:</b> acceptance of computers depends on beliefs, language, cost, access to electricity and internet, and digital skills, e.g. on the outer islands compared with South Tarawa.</li><li><b>Health:</b> correct posture, screen breaks, good lighting.</li></ul>`,
quiz:[
{q:'A company leaks client information. It most directly violates…',o:['patent rights','employee rights','copyright','corporate confidentiality'],a:3,e:'Client data must be kept private.'},
{q:'Which are programming languages?',o:['HTML and CSS','Windows and Linux','Python and JavaScript','Word and Excel'],a:2,e:'HTML/CSS are markup and styling.'},
{q:'Updating firmware/BIOS helps to…',o:['slow the PC','fix bugs and improve security','delete files','change the screen colour'],a:1,e:'Patches problems.'},
{q:'A message asking for your password with a fake link is…',o:['phishing','a backup','compression','firmware'],a:0,e:'Never share passwords.'},
{q:'Copying paid software without a licence is…',o:['legal','copyright infringement','compression','encryption'],a:1,e:'Illegal piracy.'}
]}
],
papers:[
{y:2025, note:'The 2025 Computer Studies question paper is not online. These questions come from the 2025 marking scheme, which includes the questions. Diagrams (laptop specs, documents, spreadsheet, query) are not shown.',
secs:[
{t:'Section A – Multiple choice (20 marks)', qs:[
{n:'1.',q:'Install software from a physical disk: which component?',a:'<b>D</b>: optical CD/DVD drive.'},
{n:'2.',q:'For a hard copy of a report, use…',a:'<b>A</b>: a printer.'},
{n:'3.',q:'Function of a projector',a:'<b>D</b>: it enlarges images or video onto a surface for viewing by an audience.'},
{n:'4.',q:'A common sign of a hardware fault caused by power loss',a:'<b>D</b>: the monitor shows "No signal" or stays blank.'},
{n:'5.',q:'The OS on an iPhone',a:'<b>A</b>: iOS.'},
{n:'6.',q:'Which printer uses a ribbon?',a:'<b>C</b>: impact (dot-matrix) printers strike an inked ribbon.'},
{n:'7.',q:'A company leaks client information. Which issue?',a:'<b>D</b>: corporate confidentiality (and client privacy).'},
{n:'8.',q:'Common programming languages',a:'<b>C</b>: Python and JavaScript.'},
{n:'9.',q:'Technique used in lossy IMAGE compression',a:'<b>B</b>: JPEG compression. (MP3 is lossy but for audio; Huffman and arithmetic coding are lossless.)'},
{n:'10.',q:'Find synonyms in a document',a:'<b>A</b>: Thesaurus.'},
{n:'11.',q:'A cell containing "Total Sales" is a…',a:'<b>B</b>: label.'},
{n:'12.',q:'Difference between a value and a formula',a:'<b>D</b>: values are static data; formulas calculate from other cells.'},
{n:'13.',q:'A cell containing =A1 + B1 is…',a:'<b>D</b>: a formula (it begins with =).'},
{n:'14.',q:'Formula in D4 to add B4 and C4',a:'<b>C</b>: =SUM(B4:C4)'},
{n:'15.',q:'How spreadsheets help data-driven decisions',a:'<b>A</b>: by providing tools to sort, filter and calculate easily.'},
{n:'16.',q:'How a database improves accuracy and consistency',a:'<b>C</b>: by centralising data and using validation rules.'},
{n:'17.',q:'Main advantage of a database',a:'<b>A</b>: it makes data retrieval and management easier.'},
{n:'18.',q:'Each row in a database table is…',a:'<b>C</b>: an individual record.'},
{n:'19.',q:'Each column (Student ID, Name, Grade) is…',a:'<b>D</b>: a specific attribute of all students (a field).'},
{n:'20.',q:'Purpose of WHERE in SQL',a:'<b>D</b>: to filter records based on a condition.'}
]},
{t:'Q1 – Hardware and keyboard (16 marks)', qs:[
{n:'a)',q:'Primary role of a video card',a:'To generate the images (graphics, video, user interface) and output them to the monitor.'},
{n:'b)',q:'How a pointing device helps interaction',a:'It lets the user move the on-screen cursor, then point, click, select, drag and open items, giving quick control of the graphical user interface (mouse, touchpad, touch screen).'},
{n:'c)',q:'Why maintain environmental conditions? Name conditions to monitor.',a:'To prevent damage and keep the computer reliable and long-lasting. Monitor: temperature (avoid overheating), humidity and salt air (cause corrosion), dust (blocks fans), airflow/ventilation, and a stable power supply (surges, power cuts).'},
{n:'d)',q:'How the OS runs several applications at once (memory)',a:'Memory management: the OS gives each application its own separate area of RAM and shares CPU time between them, so they run together without overwriting each other\'s data. It can use virtual memory if RAM is full.'},
{n:'e i)',q:'What does Alt + F4 do?',a:'It closes the active application or window. If there is unsaved work, it asks whether to save first.'},
{n:'e ii)',q:'How the Insert key affects editing',a:'It switches between <b>insert mode</b> (new text is added at the cursor and pushes existing text along) and <b>overwrite mode</b> (new text replaces the characters at the cursor).'},
{n:'e iii)',q:'Why F and J have bumps',a:'They are tactile guides: touch typists can feel where to rest their index fingers on the home row without looking, which improves speed and accuracy.'}
]},
{t:'Q2 – Laptop specification case study (16 marks)', qs:[
{n:'a i–ii)',q:'RAM size, and the purpose of RAM',a:'<b>4 GB</b> (from the specification).\nRAM is the computer\'s short-term working memory: it holds the data and instructions the CPU is using right now, so they can be accessed very quickly. This lets several programs run smoothly.'},
{n:'a iii–iv)',q:'Operating system, and its purpose',a:'<b>Windows 10 Home</b>.\nThe OS manages the hardware and software (memory, files, devices, programs) and provides the user interface so the user can run programs.'},
{n:'b)',q:'Benefit of grouping related files in folders',a:'Similar files are kept together, so they are easier to find, open, back up and manage.'},
{n:'c)',q:'Advantage of descriptive folder names',a:'Anyone can tell what is inside without opening the folder, which reduces confusion and saves time.'},
{n:'d)',q:'How extra memory in expansion slots improves performance',a:'More RAM lets more programs and larger files stay in fast memory, so the PC uses slow disk (virtual memory) less. This makes it faster and more responsive.'},
{n:'f)',q:'What is firmware (BIOS), and why update it?',a:'Firmware is software stored on a chip on the motherboard (BIOS/UEFI) that starts the computer and controls basic hardware. Updates fix bugs, add hardware support, improve performance and close security holes.'}
]},
{t:'Q3 – Society, compression, word processing (16 marks)', qs:[
{n:'a)',q:'Why save work regularly?',a:'So that recent changes are not lost if there is a power cut, crash or system failure, and you do not have to redo the work.'},
{n:'b)',q:'How cultural differences affect computer use',a:'Beliefs, traditions, language, education and income affect how people view technology. Some communities adopt computers quickly; others are cautious (e.g. concerns about youth and social media) or have less access (outer islands with limited power and internet). This affects how widely computers are used.'},
{n:'c)',q:'Lossless vs lossy compression with examples',a:'Lossless reduces file size with NO loss of data; the original can be rebuilt exactly (ZIP, PNG, FLAC).\nLossy permanently removes some data, which may lower quality, to make much smaller files (JPEG photos, MP3 music, MP4 video).'},
{n:'d i)',q:'Justify the paragraph with 1.5 line spacing',a:'1. Select (highlight) the paragraph.\n2. Home → Paragraph → click Justify (or Ctrl + J).\n3. Home → Line and Paragraph Spacing → 1.5.'},
{n:'d ii)',q:'One format applied to Paragraph X',a:'<b>Bullets</b> (bulleted list), as shown in the document.'},
{n:'d iii)',q:'Change the page background colour',a:'Design tab → Page Color → choose a colour (or More Colors).'},
{n:'e i)',q:'Shade the header row of the calendar table',a:'Select the header row (Sunday–Saturday) → Table Design → Shading (or right-click → Borders and Shading → Shading) → choose a colour → OK.'},
{n:'e ii)',q:'Insert a new column after "Tuesday"',a:'Click in the Tuesday column → right-click → Insert → Insert Columns to the Right (or Layout → Insert Right).'}
]},
{t:'Q4 – Spreadsheet: PUB electricity bill (16 marks)', qs:[
{n:'a)',q:'Open and close the spreadsheet',a:'Open: double-click the file, or start Excel → File → Open → choose the file.\nClose: File → Close (or click X at the top right; save if asked).'},
{n:'b)',q:'Formula for the TOTAL of the "Box Reading" row (J9:M9)',a:'Click the cell for the answer and type <b>=SUM(J9:M9)</b>, then press Enter.', flag:'The marking scheme writes =SUM(J8:J12), which does not match the range J9:M9 given in the question.'},
{n:'c)',q:'Formula for the AVERAGE of "Net Reading" from Aug to Dec',a:'=AVERAGE(first cell:last cell) on the Net Reading row, e.g. <b>=AVERAGE(J10:N10)</b> if Net Reading is in row 10 from column J (Aug) to N (Dec). Use the row shown in the diagram.'},
{n:'d)',q:'Absolute reference: Rate (F15) × Units (J8)',a:'<b>=$F$15*J8</b>. The $ signs fix F15, so when the formula is copied across the months only J8 changes.'},
{n:'e)',q:'Move quickly to H25 without scrolling',a:'Type H25 in the Name Box (left of the formula bar) and press Enter, or press F5 / Ctrl + G (Go To), type H25 and click OK.'},
{n:'f)',q:'Copy the worksheet "Sales2025" for July–December',a:'Right-click the Sales2025 tab → Move or Copy → tick "Create a copy" → OK. Rename the copy (e.g. "Sales2025 Jul-Dec") and change its data. The original is unchanged.'},
{n:'g)',q:'Compare spreadsheet data with a source document for integrity',a:'Put the source data on another sheet and use a lookup or IF formula to flag differences, e.g.\n=IF(B2=VLOOKUP(A2,Source!A:B,2,FALSE),"OK","CHECK")\nCells showing CHECK are mismatches to correct. (You can also proofread by having two people compare printed copies.)'}
]},
{t:'Q5 – Databases and SQL (16 marks)', qs:[
{n:'a)',q:'Effect of ORDER BY score DESC',a:'It sorts the results by score from highest to lowest (descending).'},
{n:'b)',q:'Advantage of a database for multiple users',a:'Many users can access and update the same up-to-date data at the same time, with controls (permissions, record locking) that keep it consistent and secure.'},
{n:'c i)',q:'Query design: salary > $50,000 AND born before 1 Jan 1990',a:'In Query Design View add the Employee table and the fields EmployeeName, Salary and DOB. Criteria row: Salary <b>>50000</b>; DOB <b>&lt;#01/01/1990#</b> (both on the SAME criteria row = AND). Run.'},
{n:'c iii)',q:'SQL: all employees sorted by salary, descending',a:'SELECT EmployeeName, Salary FROM Employee ORDER BY Salary DESC;'},
{n:'c v)',q:'SQL: maximum salary (aggregate function)',a:'SELECT MAX(Salary) AS MaxSalary FROM Employee;'}
]}
]}
]});
