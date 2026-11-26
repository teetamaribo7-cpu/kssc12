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
]},
{y:2024, src:'P2024/2024 KSSC Computer Studies Exam.pdf', note:'Worked answers. The spreadsheet and database answers use the exact cells and fields shown in the paper. ⚠ marks mistakes in the MOE scheme.',
secs:[
{t:'Section A – Multiple choice (20 marks)', qs:[
{n:'1–5',q:'1 Trade secret/trademark/patent; 2 Two widely used languages; 3 Sends documents over a phone line; 4 Intermittent power; 5 Game streaming',a:'1 <b>b</b> (intellectual property)\n2 <b>d</b> (Java and C++). HTML and CSS are not programming languages.\n3 <b>c</b> (fax)\n4 <b>b</b> (powers on and off randomly)\n5 <b>a</b> (gaming through cloud services)'},
{n:'6–10',q:'6 Resource efficiency of chip-based OS; 7 Extensions; 8 Keys and buttons; 9 CPU performance and memory leaks; 10 Shifts the view up one page',a:'6 <b>d</b> (optimised for low power and limited processing)\n7 <b>b</b> (.pdf, .mdb, .exe)\n8 <b>c</b> (keyboard)\n9 <b>d</b> (memory management)\n10 <b>c</b> (PgUp)'},
{n:'11–15',q:'11 Moves words to the next line; 12 Open existing documents; 13 Non-numeric data; 14 Sorting the D.O.B. column; 15 Proportions of a whole',a:'11 <b>c</b> (word wrapping)\n12 <b>a</b> (Open)\n13 <b>b</b> (labels)\n14 <b>b</b>: ascending (1998 → 1999 → 2000 → 2010, oldest date first)\n15 <b>d</b> (pie)'},
{n:'16–20',q:'16 Central tendency; 17 TRUE/FALSE type; 18 ALTER TABLE … DROP COLUMN; 19 Database table; 20 Retrieve all columns',a:'16 <b>d</b> (AVERAGE)\n17 <b>d</b> (Boolean)\n18 <b>a</b> (deletes a field)\n19 <b>b</b>\n20 <b>a</b>: SELECT * FROM Employees;'}
]},
{t:'Question 1 – Data, software and files (16 marks)', qs:[
{n:'a(i).',q:'How ASCII represents a character; "A" in 8-bit binary',a:'ASCII gives every character a <b>number code</b>, which the computer stores in <b>binary</b> (one byte = 8 bits per character).\n"A" = 65 = <b>01000001</b>'},
{n:'a(ii).',q:'Binary and storing many characters',a:'Each character takes <b>one byte (8 bits)</b>. A word or text is stored as a <b>sequence of bytes</b> in memory, one after another. For example, "HELLO" = 5 characters × 8 bits = <b>40 bits</b> (5 bytes). More characters need more bytes.'},
{n:'b.',q:'Data compression; lossless vs lossy',a:'<b>Compression</b>: making a file <b>smaller</b> so it uses less storage and transfers faster.\n<b>Lossless</b>: no data is lost, and the original can be <b>restored exactly</b> (ZIP, PNG). Used for text and programs.\n<b>Lossy</b>: <b>some detail is removed permanently</b> to make the file much smaller (JPEG, MP3, MP4). Used for photos, music and video.'},
{n:'c(i).',q:'Application software, with an example',a:'Programs that let the user do a <b>specific task</b>, e.g. <b>Microsoft Word</b> (writing), Excel, or Google Chrome.'},
{n:'c(ii).',q:'Relationship between system and application software',a:'<b>System software</b> (the operating system, e.g. Windows) manages the hardware: CPU, memory, files and devices. <b>Application software runs on top of it</b> and asks the OS for these services. For example, when Word saves or prints, it asks Windows, and Windows talks to the disk or printer. Applications cannot work without the system software.'},
{n:'d.',q:'Two basic elements of a GUI',a:'<b>Icons</b>: small pictures that stand for files, programs or commands (e.g. a bin for delete). You click or double-click them.\n<b>Menus</b>: lists of commands (e.g. File → Save, Print).\n(Also: windows, buttons, and the pointer/cursor.)'},
{n:'e(i).',q:'Navigate from Home to Report.pdf',a:'Open <b>Home → Documents → Projects → Project1 → Report.pdf</b>, double-clicking each folder in turn.'},
{n:'e(ii).',q:'Full path to Presentation.pptx',a:'<b>/Home/Documents/Projects/Project2/Presentation.pptx</b>\nFrom Home, open Documents, then Projects, then Project2, and open the file.'}
]},
{t:'Question 2 – Hardware and safe computing (16 marks)', qs:[
{n:'a.',q:'The two modes the INS key toggles',a:'1. <b>Insert mode</b>: typed text is <b>added at the cursor</b> and existing text moves to the right.\n2. <b>Overtype (overwrite) mode</b>: typed text <b>replaces</b> the characters to the right of the cursor.'},
{n:'b.',q:'Main characteristic of ROM',a:'<b>Non-volatile and read-only</b>: its contents (e.g. the BIOS start-up instructions) are <b>kept when the power is off</b> and cannot normally be changed.'},
{n:'c.',q:'How RAM helps processing (note: RAM = Random Access Memory)',a:'RAM holds the <b>programs and data currently in use</b>, so the CPU can read and write them <b>very quickly</b>, much faster than from the hard disk. More RAM lets more programs run smoothly. It is <b>volatile</b>: it is emptied when the power goes off.\n(The paper wrongly says "Read Access Memory". RAM stands for <b>Random</b> Access Memory.)'},
{n:'d.',q:'What is a program and how is it structured?',a:'A <b>set of step-by-step instructions</b> written in a programming language that tells the computer how to do a task. Structure: <b>input → process → output</b>, using <b>sequence</b> (one step after another), <b>selection</b> (IF decisions) and <b>iteration</b> (loops), often split into functions.'},
{n:'e.',q:'Two reasons to save and back up files',a:'1. To avoid <b>losing work</b> after a power cut, crash or accidental deletion.\n2. To <b>recover files</b> after hardware failure, theft or a virus/ransomware attack (keep a copy on a USB drive or in the cloud).'},
{n:'f.',q:'Three reasons to use antivirus software',a:'1. Stops viruses that <b>delete or corrupt files</b>.\n2. Protects <b>personal information</b> (passwords, bank details) from being stolen.\n3. Keeps the computer <b>running fast</b> and stops infections spreading to other computers on the network or via USB drives.'},
{n:'g.',q:'Equity issues for people with disabilities, and two strategies',a:'Issues: people with disabilities may <b>not be able to use</b> standard keyboards, mice or screens (blind, deaf or physically impaired users), and special devices are expensive, so they miss out on education and jobs (a <b>digital divide</b>).\nStrategies: 1. <b>Assistive technology</b>: screen readers, magnifiers, voice control, adapted keyboards. 2. <b>Accessible design and policies</b>: captions, high-contrast or large text, government funding or free devices, and training.'}
]},
{t:'Question 3 – ICT in society and word processing (16 marks)', qs:[
{n:'a.',q:'What is piracy?',a:'<b>Illegally copying, sharing or selling software, music or films</b> without the copyright owner\'s permission.'},
{n:'b.',q:'Three roles of a systems analyst',a:'1. <b>Studies the current system</b> and finds the users\' problems and needs.\n2. <b>Designs a new system</b> (inputs, outputs, files, hardware and software).\n3. <b>Oversees testing, installation and training</b>, and evaluates the system.\nThey connect users and programmers, so organisations get ICT systems that actually solve their problems.'},
{n:'c.',q:'Two effects of virtual offices',a:'Employees: they can <b>work from home</b> (flexible hours, no travel), but may feel isolated, and work and home life can blur.\nOrganisations: <b>lower costs</b> (less office rent) and they can hire people anywhere, but they need good internet and security, and it is harder to supervise staff.'},
{n:'d.',q:'Two reasons why file names and extensions matter',a:'1. A clear <b>name</b> makes the file <b>easy to find and organise</b> later.\n2. The <b>extension</b> (.docx, .xlsx, .jpg) tells the computer <b>which program opens the file</b> and tells users what type of file it is.'},
{n:'e(i).',q:'One format on the title',a:'It is <b>bold</b>, <b>underlined</b> and <b>centred</b> (any one).'},
{n:'e(ii).',q:'Steps to capitalise the "Spell check…" paragraph',a:'1. <b>Select (highlight)</b> the paragraph.\n2. Go to <b>Home → Change Case (Aa)</b> and choose <b>UPPERCASE</b> (or press <b>Shift + F3</b>, or Ctrl + Shift + A).'},
{n:'e(iii).',q:'Steps to insert a table of 2 rows × 3 columns',a:'1. Click where the table should go (and delete the highlighted text).\n2. <b>Insert → Table</b>.\n3. Drag over the grid to choose <b>3 columns × 2 rows</b> (or Insert Table…, Columns = 3, Rows = 2, OK).'},
{n:'e(iv).',q:'Fill in Find and Replace',a:'Find what: <b>Document</b>\nReplace with: <b>Doc</b>\nThen click <b>Replace All</b>.'},
{n:'e(v).',q:'How many words change?',a:'<b>5</b>: "Document B", "documents" (twice), "DOCUMENT" and "document types". Find is not case-sensitive by default and also matches inside "documents".'}
]},
{t:'Question 4 – Spreadsheets (16 marks)', qs:[
{n:'a.',q:'Name of the active worksheet',a:'<b>Question 4</b> (the sheet tab at the bottom).'},
{n:'b.',q:'Data type in D5',a:'<b>Text (label)</b>: "CAT (20%)" is a heading, not a number.'},
{n:'c.',q:'Formula for the average in I22',a:'<b>=AVERAGE(H6:H17)</b> → 71 (848 ÷ 12 = 70.7)'},
{n:'d.',q:'Total for Jack Boom in H9',a:'<b>=SUM(D9:G9)</b> → 15 + 23 + 38 + 8 = 84'},
{n:'e.',q:'Highest score in I20',a:'<b>=MAX(H6:H17)</b> → 91'},
{n:'f.',q:'IF function in I6 with an absolute reference',a:'<b>=IF(H6>=$D$4,"Pass","Fail")</b>\nThe $ signs keep D4 fixed when you copy the formula down the column.'},
{n:'g.',q:'COUNTIF for students getting free fees (D23)',a:'<b>=COUNTIF(J6:J17,"Yes")</b> → 4'},
{n:'h.',q:'Two benefits of spreadsheets in business',a:'1. <b>Automatic calculation</b>: formulas recalculate instantly when data changes, so they are fast and accurate.\n2. <b>Charts, sorting and filtering</b> make it easy to analyse data and spot trends for decisions.'}
]},
{t:'Question 5 – Databases and SQL (16 marks)', qs:[
{n:'a(i).',q:'Number of fields in the Information table',a:'<b>8</b>: Student_ID, Student_FN, Student_SN, Student_Ge, Student_DOB, Boarding_St, Student_Illness, Gurdian_ID.'},
{n:'a(ii).',q:'Field type of Boarding_St',a:'<b>Yes/No (Boolean)</b>: a tick box.'},
{n:'a(iii).',q:'SQL: names of boys admitted to boarding',a:'<b>SELECT Student_FN, Student_SN\nFROM Information\nWHERE Student_Ge = Yes AND Boarding_St = Yes;</b>\n(Student_Ge ticked = male.) Result from the table: Richard, Kaata, Anna.\n⚠ The MOE scheme writes "WHRE" and "==", which are not valid SQL. Use WHERE and a single =.'},
{n:'a(iv).',q:'Delete Student_ID 20004',a:'<b>DELETE FROM Information\nWHERE Student_ID = 20004;</b>'},
{n:'a(v).',q:'Count all students',a:'<b>SELECT COUNT(*) AS TotalStudents\nFROM Information;</b> → 10'},
{n:'b.',q:'Why data integrity matters; two practices',a:'Data integrity means the data is <b>accurate, complete and consistent</b>. Wrong data leads to wrong decisions (e.g. the wrong exam results or medical information).\nPractices: 1. <b>Validation rules</b> (data types, range checks, required fields). 2. <b>Primary keys and relationships</b> (referential integrity) to stop duplicates. Also: regular backups and user access controls.'},
{n:'c(i).',q:'Sort products by name, ascending',a:'<b>SELECT * FROM Products\nORDER BY ProductName ASC;</b>'},
{n:'c(ii).',q:'Resulting Product_ID order',a:'Banana, Cabbage, Cucumber, Orange → <b>13, 11, 12, 14</b>'}
]}
]}
]});
