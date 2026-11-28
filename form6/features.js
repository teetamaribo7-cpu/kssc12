try{ var _ki=JSON.parse(localStorage.getItem('f6_ki')); if(_ki) STR.ki=_ki; }catch(e){}
// v1.2 features: formula sheets, flashcards, smart review, badges & certificates, timed mock exams, remote messages
var SHEETS = {
  mat: {title:'KSSC Mathematics formulae sheet', imgs:['maths-1','maths-2','maths-3','maths-4']},
  phy: {title:'KSSC Physics equations sheet (g = 10 m/s²)', imgs:['physics-1','physics-2','physics-3']},
  che: {title:'Periodic Table (given in the exam)', imgs:['periodic-1'], wide:true}
};
var WRONG = load('wrong', {});
(function(){ var V={phy:1,che:1,bio:1,mat:1}, done=load('restruct',{}), sc=load('scores',{}), w=load('wrong',{}), ch=false;
  if(load('phy19',0)===1&&!done.phy) done.phy=1;
  Object.keys(V).forEach(function(id){ if((done[id]||0)<V[id]){ Object.keys(sc).forEach(function(k){ if(k.indexOf(id+'|')===0) delete sc[k]; }); Object.keys(w).forEach(function(k){ if(k.indexOf(id+'|')===0) delete w[k]; }); done[id]=V[id]; ch=true; } });
  if(ch){ save('scores',sc); save('wrong',w); save('restruct',done); WRONG=w; if(typeof SC!=='undefined') SC=sc; } })();   // key "subj|t|i" -> 1
var STATS = load('stats', {quizzes:0, perfect:0});

// ---------- subject page with sheets + review ----------
VIEWS.subject = function(v, id){
  var m=meta(id), s=SUBJECTS[id]; setTitle(m.name);
  if(!s){ v.innerHTML='<div class="card">This subject is coming soon.</div>'; return; }
  var tab=load('tab_'+id,'t');
  var tabs=[['t','📚 '+L('topics')],['p','📝 '+L('papers')]]; if(SHEETS[id]) tabs.push(['f','📄 Sheet']);
  var h='<div class="tabs">'+tabs.map(function(x){return '<button class="'+(tab===x[0]?'on':'')+'" onclick="save(\'tab_'+id+'\',\''+x[0]+'\');show(\'subject\',\''+id+'\',true)">'+x[1]+'</button>';}).join('')+'</div>';
  if(tab==='t'){
    var nw=Object.keys(WRONG).filter(function(k){return k.indexOf(id+'|')===0;}).length;
    if(nw) h+='<button class="row" style="border-left:5px solid var(--bad)" onclick="show(\'quiz\',{review:\''+id+'\'})"><span style="font-size:22px">🔁</span><span class="grow"><b>Review my mistakes</b><small>'+nw+' question(s) you got wrong – try again</small></span>›</button>';
    if(subjectDone(id)) h+='<button class="row" style="border-left:5px solid var(--gold)" onclick="show(\'cert\',\''+id+'\')"><span style="font-size:22px">🎓</span><span class="grow"><b>Your certificate</b><small>All topics passed – view and screenshot it</small></span>›</button>';
    var row=function(t,i,n){ var r=SC[id+'|'+i]; var pc=r?Math.round(100*r.best):null;
      return '<button class="row" onclick="show(\'topic\',[\''+id+'\','+i+'])"><span class="grow"><b>'+n+' '+esc(t.t)+'</b><small>'+(t.w?'Exam weight '+t.w+'% · ':'')+(t.quiz?t.quiz.length:0)+' quiz questions'+(pc!==null?' · best '+pc+'%'+(pc>=50?' ✅':''):'')+'</small></span>›</button>'; };
    var ST=STRANDS[id];
    if(ST){ ST.forEach(function(g,k){ var done=0; g[1].forEach(function(i){var r=SC[id+'|'+i]; if(r&&r.best>=.5)done++;});
        h+='<details class="strand"'+(k===0?' open':'')+'><summary><span class="sn">Strand '+(k+1)+'</span><b>'+esc(g[0])+'</b><small>'+g[1].length+' topic'+(g[1].length>1?'s':'')+' · '+done+' passed</small></summary>';
        g[1].forEach(function(i,j){ h+=row(s.topics[i],i,/^(Topic \d|[IVX]+\.\d|\d\.\d)/.test(s.topics[i].t)?'':(k+1)+'.'+(j+1)); });
        var nq=0; g[1].forEach(function(i){ nq+=(s.topics[i].quiz||[]).length; }); var sr=SC[id+'|s'+k], sp=sr?Math.round(100*sr.best):null;
        h+='<button class="row strandq" onclick="show(\'quiz\',{strand:\''+id+'\',k:'+k+'})"><span style="font-size:20px">🧩</span><span class="grow"><b>Strand '+(k+1)+' quiz</b><small>'+Math.min(20,nq)+' mixed questions from all topics in this strand'+(sp!==null?' · best '+sp+'%'+(sp>=50?' ✅':''):'')+'</small></span>›</button></details>'; }); }
    else s.topics.forEach(function(t,i){ h+=row(t,i,(i+1)+'.'); });
  } else if(tab==='p'){
    if(!s.papers.length) h+='<div class="card">Past paper solutions are coming soon.</div>';
    s.papers.forEach(function(p,i){ var n=0; p.secs.forEach(function(x){n+=x.qs.length;});
      h+='<button class="row" onclick="show(\'paper\',[\''+id+'\','+i+'])"><span style="font-size:22px">📄</span><span class="grow"><b>KSSC '+m.name+' '+p.y+'</b><small>'+n+' questions with worked solutions · timed exam mode</small></span>›</button>'; });
    var lib=(window.LIBRARY&&LIBRARY[id])||{}, yrs=Object.keys(lib).sort().reverse();
    if(yrs.length){ h+='<h2>All MOE papers 2014–2025</h2><div class="card muted" style="font-size:13px">Original question papers and official marking schemes (opens online). ⚠ Some official marking schemes contain mistakes – the checked solutions above are more reliable.</div>';
      yrs.forEach(function(y){ var d=lib[y];
        h+='<div class="card" style="padding:10px 12px"><b>'+y+'</b><div>'+(d.p||[]).map(function(f,k){return '<a class="pill" href="'+f[1]+'">📄 Paper'+((d.p.length>1)?' '+(k+1):'')+'</a>';}).join('')+
          (d.m||[]).map(function(f,k){return '<a class="pill" href="'+f[1]+'">✅ Marking scheme'+((d.m.length>1)?' '+(k+1):'')+'</a>';}).join('')+
          ((!d.m||!d.m.length)?'<span class="pill" style="opacity:.6">no marking scheme online</span>':'')+'</div></div>'; }); }
  } else {
    var sh=SHEETS[id];
    h+='<div class="card muted" style="font-size:14px">'+sh.title+'. This is the same sheet you get in the exam, so practise using it. Pinch or scroll to zoom.</div>';
    sh.imgs.forEach(function(f){ h+='<div class="card" style="padding:6px;overflow-x:auto"><img src="img/sheets/'+f+'.jpg" style="width:'+(sh.wide?'230%':'100%')+';display:block"></div>'; });
  }
  v.innerHTML=h;
};

// ---------- strands (PSSC/KSSC prescription structure) ----------
var STRANDS={
 eng:[['Reading and language skills',[0,1,2,6]],['Formal writing',[3]],['Literature essay skills',[4,5]],['Literature guide – prescribed texts',[7,8,9,10,11]]],
 mat:[['Topic 1: Algebra (14%)',[0,1,2,3]],['Topic 2: Coordinate geometry (8%)',[4,5]],['Topic 3: Sequences and series (8%)',[6,7]],['Topic 4: Probability (8%)',[8,9]],['Topic 5: Statistics (internal assessment)',[10]],['Topic 6: Graphs of functions (8%)',[11]],['Topic 7: Calculus (12%)',[12,13,14]],['Topic 8: Trigonometry (12%)',[15,16,17]]],
 phy:[['Light and waves (Topics 1–4)',[0,1,2,3]],['Mechanics (Topics 5–12)',[4,5,6,7,8,9,10,11]],['Gases and kinetic theory (Topic 13)',[12]],['Electricity and magnetism (Topics 14–18)',[13,14,15,16,17]],['The atom and radioactivity (Topic 19)',[18]]],
 che:[['I. Atomic structure and bonding (15%)',[0,1,2]],['II. Quantitative chemistry (20%)',[3,4,5,6]],['III. Organic chemistry (28%)',[7,8,9,10,11,12,13]],['IV. Inorganic chemistry (10%)',[14,15]],['V. Principles of physical chemistry (17%)',[16,17,18,19]],['VI. Oxidation and reduction (10%)',[20,21]]],
 bio:[['I. Cellular biology (20%)',[0,1,2,3,4]],['II. Genetics (15%)',[5,6,7,8]],['III. Organism level biology (35%)',[9,10,11,12,13,14,15,16]],['IV. Environmental biology (20%)',[17,18,19,20,21]]],
 ict:[['Topic 1: Desktop computer systems and management (50%)',[0,1,5]],['Topic 2: Using PC applications (50%)',[2,3,4]]],
 eco:[['Basic economic concepts',[0]],['Markets',[1]],['Money and inflation',[2,3]],['International trade and payments',[4]],['Economic functions of government',[5,6]],['Economic development',[7]]],
 acc:[['Section I – Conceptual basis of accounting (10–15%)',[0]],['Section II – Processing (15–20%)',[1,2]],['Section III – Accounting systems (25–30%)',[6,7]],['Section IV – Accounting reports (25–30%)',[3,4]],['Section V – Analysis, interpretation and decisions (10–12%)',[5]]],
 geo:[['Geography skills',[0]],['Section A: Living with natural hazards',[1]],['Section B: Use and management of water resources',[2]],['Section C: Consequences of population growth',[3]],['Section D: Urbanisation and urban environments',[4]],['Section E: Geographic perspectives on tourism',[5]]],
 his:[['History skills',[0]],['Compulsory: the search for security, 1945–1990',[1]],['Options (choose two)',[2,3,4,5,6]]]
};

// ---------- topic page: quiz + flashcards ----------
VIEWS.topic = function(v, a){
  var s=SUBJECTS[a[0]], t=s.topics[a[1]]; setTitle(t.t);
  var ST=STRANDS[a[0]], sn=''; if(ST) ST.forEach(function(g,k){ if(g[1].indexOf(a[1])>=0) sn='Strand '+(k+1)+': '+g[0]; });
  var tmp=document.createElement('div'); tmp.innerHTML=t.notes; var hs=tmp.querySelectorAll('h3');
  if(hs.length>=3){ var toc='<div class="toc"><b>In this topic</b>'; hs.forEach(function(e,k){ e.id='sec'+k; toc+='<a href="javascript:void(0)" onclick="document.getElementById(\'sec'+k+'\').scrollIntoView({behavior:\'smooth\'})">'+e.textContent+'</a>'; }); toc+='</div>'; tmp.insertAdjacentHTML('afterbegin',toc); }
  var h=(sn?'<div class="strandtag">'+esc(sn)+'</div>':'')+'<div class="card notes">'+tmp.innerHTML+'</div>';
  if(t.quiz&&t.quiz.length){
    h+='<button class="btn gold wide" onclick="show(\'quiz\',[\''+a[0]+'\','+a[1]+'])">'+L('startQuiz')+' ('+t.quiz.length+' questions) ›</button>';
    h+='<button class="btn ghost wide" onclick="show(\'flash\',[\''+a[0]+'\','+a[1]+'])">🃏 Flashcards</button>';
  }
  v.innerHTML=h;
};
var FC=null;
VIEWS.flash = function(v, a){
  var t=SUBJECTS[a[0]].topics[a[1]]; setTitle('Flashcards: '+t.t);
  FC={a:a, order:shuffle(t.quiz.map(function(q,i){return i;})), i:0, flip:false}; flashDraw();
};
function flashDraw(){
  var t=SUBJECTS[FC.a[0]].topics[FC.a[1]], q=t.quiz[FC.order[FC.i]];
  var front='<div class="q"><b>'+q.q+'</b></div><p class="muted" style="margin-top:18px">Tap to see the answer</p>';
  var back='<div class="muted" style="font-size:13px">'+q.q+'</div><div style="font-size:20px;margin:12px 0"><b>'+q.o[q.a]+'</b></div><div class="explain">'+(q.e||'')+'</div>';
  $('view').innerHTML='<div class="muted">Card '+(FC.i+1)+' of '+FC.order.length+'</div>'+
    '<div class="card flash" onclick="FC.flip=!FC.flip;flashDraw()">'+(FC.flip?back:front)+'</div>'+
    '<div style="display:flex;gap:8px"><button class="btn ghost" style="flex:1" onclick="if(FC.i>0){FC.i--;FC.flip=false;flashDraw()}">‹ Back</button>'+
    '<button class="btn" style="flex:1" onclick="if(FC.i<FC.order.length-1){FC.i++;FC.flip=false;flashDraw()}else{goBack()}">'+(FC.i<FC.order.length-1?'Next ›':'Finish')+'</button></div>';
}

// ---------- quiz engine (topic quiz or review of mistakes) ----------
VIEWS.quiz = function(v, a){
  var items=[];
  if(Array.isArray(a)){ var t=SUBJECTS[a[0]].topics[a[1]]; setTitle('Quiz: '+t.t);
    items=t.quiz.map(function(q,i){return {s:a[0],t:a[1],i:i};}); }
  else if(a.strand){ var g=STRANDS[a.strand][a.k]; setTitle('Strand quiz: '+g[0]);
    g[1].forEach(function(ti){ var tp=SUBJECTS[a.strand].topics[ti]; (tp.quiz||[]).forEach(function(q,i){ items.push({s:a.strand,t:ti,i:i}); }); });
    QZ={a:a, items:shuffle(items).slice(0,20), i:0, score:0}; if(!QZ.items.length){ v.innerHTML='<div class="card">No questions yet.</div>'; return; } return quizStep(); }
  else { setTitle('Review: '+meta(a.review).name);
    items=Object.keys(WRONG).filter(function(k){return k.indexOf(a.review+'|')===0;}).map(function(k){var p=k.split('|');return {s:p[0],t:+p[1],i:+p[2]};})
      .filter(function(x){ var tp=SUBJECTS[x.s].topics[x.t]; return tp&&tp.quiz&&tp.quiz[x.i]; }); }
  QZ={a:a, items:shuffle(items).slice(0, Array.isArray(a)?999:20), i:0, score:0};
  if(!QZ.items.length){ v.innerHTML='<div class="card">Nothing to review – well done! 🎉</div>'; return; }
  quizStep();
};
function curQ(){ var it=QZ.items[QZ.i]; return SUBJECTS[it.s].topics[it.t].quiz[it.i]; }
function quizStep(){
  if(QZ.i>=QZ.items.length) return quizEnd();
  var q=curQ(), order=shuffle(q.o.map(function(o,i){return i;}));
  var h='<div class="muted">Question '+(QZ.i+1)+' of '+QZ.items.length+'</div><div class="bar"><i style="width:'+(100*QZ.i/QZ.items.length)+'%"></i></div><div class="card"><div class="q"><b>'+q.q+'</b></div>';
  order.forEach(function(k){ h+='<button class="opt" data-k="'+k+'" onclick="answer(this)">'+q.o[k]+'</button>'; });
  $('view').innerHTML=h+'</div><div id="fb"></div>'; window.scrollTo(0,0);
}
function answer(b){
  var q=curQ(), it=QZ.items[QZ.i], key=it.s+'|'+it.t+'|'+it.i, k=+b.getAttribute('data-k');
  var bs=document.querySelectorAll('.opt'); if(bs[0].disabled) return;
  [].forEach.call(bs,function(x){ x.disabled=true; if(+x.getAttribute('data-k')===q.a) x.classList.add('right'); });
  if(k===q.a){ QZ.score++; if(WRONG[key]){ delete WRONG[key]; save('wrong',WRONG); } }
  else { b.classList.add('wrong'); WRONG[key]=1; save('wrong',WRONG); }
  $('fb').innerHTML='<div class="explain"><b>'+(k===q.a?'✅ Correct!':'❌ Not quite.')+'</b> '+(q.e||'')+'</div><button class="btn wide" onclick="QZ.i++;quizStep()">'+(QZ.i+1<QZ.items.length?'Next ›':'See my score')+'</button>';
}
function quizEnd(){
  var a=QZ.a, n=QZ.items.length, f=QZ.score/n, strand=!Array.isArray(a)&&!!a.strand, review=!Array.isArray(a)&&!strand;
  var subj=strand?a.strand:review?a.review:a[0], topic=strand?'Strand quiz: '+STRANDS[a.strand][a.k][0]:review?'Review of mistakes':SUBJECTS[a[0]].topics[a[1]].t;
  if(!review){ var key=strand?subj+'|s'+a.k:a[0]+'|'+a[1], r=SC[key]||{best:0,tries:0}; r.best=Math.max(r.best,f); r.last=f; r.tries++; SC[key]=r; save('scores',SC); }
  STATS.quizzes++; if(f===1) STATS.perfect++; save('stats',STATS);
  queueResult({date:new Date().toISOString(), device:deviceId(), name:P.name, school:P.school, cls:P.cls, stream:P.stream,
    subject:meta(subj).name, topic:topic, score:QZ.score, total:n, percent:Math.round(100*f)});
  var msg=f>=.8?'Excellent work! 🌟':f>=.5?'Good effort, keep practising 👍':'Read the notes again and retry 💪';
  var done=!review && subjectDone(subj);
  $('view').innerHTML='<div class="card" style="text-align:center"><div class="big">'+QZ.score+' / '+n+'</div><p>'+Math.round(100*f)+'% · '+msg+'</p></div>'+
    (done?'<button class="btn gold wide" onclick="show(\'cert\',\''+subj+'\')">🎓 You passed every topic – get your certificate</button>':'')+
    '<button class="btn wide" onclick="show(\'quiz\','+(strand?'{strand:\''+subj+'\',k:'+a.k+'}':review?'{review:\''+subj+'\'}':'[\''+a[0]+'\','+a[1]+']')+',true)">'+(strand?'New set of questions':'Try again')+'</button><button class="btn ghost wide" onclick="goBack();">Back</button>';
}

// ---------- badges & certificates ----------
function subjectDone(id){ var s=SUBJECTS[id]; if(!s) return false; for(var i=0;i<s.topics.length;i++){ var r=SC[id+'|'+i]; if(!s.topics[i].quiz||!s.topics[i].quiz.length) continue; if(!r||r.best<0.5) return false; } return true; }
function badges(){
  var b=[], mine=mySubjects();
  if(STATS.quizzes>=1) b.push(['🌱','First quiz']); if(STATS.quizzes>=10) b.push(['📚','10 quizzes']);
  if(STATS.quizzes>=50) b.push(['🔥','50 quizzes']); if(STATS.quizzes>=150) b.push(['🏆','150 quizzes']);
  if(STATS.perfect>=1) b.push(['🎯','Perfect score']); if(STATS.perfect>=10) b.push(['💯','10 perfect scores']);
  var certs=mine.filter(function(m){return subjectDone(m.id);});
  certs.forEach(function(m){ b.push(['🎓',m.name+' certificate']); });
  if(certs.length && certs.length===mine.length) b.push(['👑','All subjects passed']);
  return b;
}
VIEWS.cert = function(v, id){
  var m=meta(id); setTitle('Certificate');
  if(!subjectDone(id)){ v.innerHTML='<div class="card">Pass every topic quiz (50% or more) in '+m.name+' to earn this certificate.</div>'; return; }
  var d=new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  var avg=0,n=0; SUBJECTS[id].topics.forEach(function(t,i){var r=SC[id+'|'+i]; if(r){avg+=r.best;n++;}}); avg=Math.round(100*avg/n);
  v.innerHTML='<div class="cert"><img src="img/logo.svg"><div class="ct">Certificate of Achievement</div><div class="muted">This certifies that</div>'+
   '<div class="cn">'+esc(P.name)+'</div><div>'+esc(P.school)+(P.cls?' · '+esc(P.cls):'')+'</div>'+
   '<div class="muted" style="margin-top:10px">has passed every topic in</div><div class="cs">KSSC Form 6 '+m.name+'</div>'+
   '<div>Average best score: <b>'+avg+'%</b></div><div class="muted" style="margin-top:12px">'+d+'</div><div class="cc">Created by '+esc(CREATOR)+'</div></div>'+
   '<p class="muted" style="text-align:center;font-size:13px">Take a screenshot to save or share your certificate.</p>';
};
VIEWS.progress = function(v){
  setTitle(L('progress')); var h='<div class="card"><b>Badges</b><div style="margin-top:6px">';
  var b=badges(); h+=b.length?b.map(function(x){return '<span class="badge">'+x[0]+' '+esc(x[1])+'</span>';}).join(''):'<span class="muted">Finish your first quiz to earn a badge.</span>';
  h+='</div><div class="muted" style="font-size:13px;margin-top:6px">'+STATS.quizzes+' quizzes done · '+STATS.perfect+' perfect scores</div></div>';
  mySubjects().forEach(function(m){ var s=SUBJECTS[m.id]; if(!s) return; var done=0, sum=0;
    s.topics.forEach(function(t,i){ var r=SC[m.id+'|'+i]; if(r){ done++; sum+=r.best; } });
    var pc=done?Math.round(100*sum/done):0, nw=Object.keys(WRONG).filter(function(k){return k.indexOf(m.id+'|')===0;}).length;
    h+='<div class="card"><b>'+m.ico+' '+m.name+'</b>'+(subjectDone(m.id)?' 🎓':'')+'<div class="muted" style="font-size:14px">'+done+' of '+s.topics.length+' topic quizzes done · average best '+pc+'%'+(nw?' · '+nw+' to review':'')+'</div><div class="bar"><i style="width:'+(s.topics.length?100*done/s.topics.length:0)+'%"></i></div></div>'; });
  var q=load('queue',[]).length;
  v.innerHTML=h+'<p class="muted" style="font-size:13px">'+(q?q+' item(s) waiting to be sent to your teacher (needs internet).':'All results sent.')+'</p>';
};

// ---------- timed mock exam on past papers ----------
var EXAM=load('exam',null), EXAMT=null;
var _paper=VIEWS.paper;
VIEWS.paper = function(v, a){
  _paper(v, a);
  var key=a[0]+'|'+a[1], on=EXAM&&EXAM.key===key;
  var bar=document.createElement('div');
  if(on){ bar.className='exambar'; bar.innerHTML='⏱ <span id="clock"></span><button class="btn gold" style="margin:0 0 0 auto;padding:6px 12px" onclick="endExam()">Finish exam</button>';
    v.classList.add('exam'); tick(); clearInterval(EXAMT); EXAMT=setInterval(tick,1000); }
  else { v.classList.remove('exam'); bar.innerHTML='<button class="btn wide" onclick="startExam(\''+a[0]+'\','+a[1]+')">⏱ Start timed exam (3 hours – solutions hidden until you finish)</button>'; }
  v.insertBefore(bar, v.firstChild);
};
function startExam(s,i){ EXAM={key:s+'|'+i, end:Date.now()+3*3600*1000}; save('exam',EXAM); toast('Exam started – good luck!'); show('paper',[s,i],true); }
function endExam(){ EXAM=null; save('exam',null); clearInterval(EXAMT); toast('Exam finished – solutions are now visible'); var top=stack[stack.length-1]; show(top[0],top[1],true); }
function tick(){ var c=$('clock'); if(!c||!EXAM){ clearInterval(EXAMT); return; } var r=Math.max(0,EXAM.end-Date.now());
  var hh=Math.floor(r/3600000), mm=Math.floor(r%3600000/60000), ss=Math.floor(r%60000/1000);
  c.textContent=hh+':'+(mm<10?'0':'')+mm+':'+(ss<10?'0':'')+ss+' left'; if(r===0){ toast('Time is up!'); endExam(); } }

// ---------- remote message & update alert from the Google Sheet ----------
function checkNews(){
  var n=load('news',null); showNews(n);
  var last=load('newsAt',0); if(Date.now()-last<3600*1000) return;
  getJSON({action:'config'}, function(d){ if(d&&d.ok){ save('news',d); save('newsAt',Date.now()); showNews(d); } });
}
function verNum(v){ return String(v||'0').split('.').map(function(x){return ('000'+x).slice(-3);}).join(''); }
function showNews(d){
  if(d&&d.ki&&Object.keys(d.ki).length){ STR.ki=d.ki; save('ki',d.ki); }
  var box=$('news'); if(!box||!d) return; var h='';
  if(d.latest && verNum(d.latest)>verNum(APP_VERSION)) h+='<div class="card" style="border-left:5px solid var(--gold)"><b>🆕 New version '+esc(d.latest)+' is available.</b><br><span class="muted">'+esc(d.updateNote||'Get it from your teacher (Zapya/Bluetooth). Your progress will be kept.')+'</span></div>';
  if(d.message) h+='<div class="card" style="border-left:5px solid var(--navy2)"><b>📢 Message</b><br>'+esc(d.message)+'</div>';
  box.innerHTML=h;
}
var _home=VIEWS.home;
VIEWS.home = function(v){ _home(v); if(!P||!P.stream) return; var d=document.createElement('div'); d.id='news'; v.insertBefore(d, v.children[1]||null); checkNews(); };

// ---------- floating scientific calculator ----------
var CALC={e:'',ans:0,deg:true,shift:false,open:false};
function calcInit(){
  if(document.getElementById('calcBtn')) return;
  var b=document.createElement('button'); b.id='calcBtn'; b.innerHTML='🧮'; b.title='Calculator'; b.onclick=calcToggle; document.body.appendChild(b);
  var p=document.createElement('div'); p.id='calc'; document.body.appendChild(p); calcDraw();
}
function calcToggle(){ CALC.open=!CALC.open; document.getElementById('calc').classList.toggle('on',CALC.open); document.body.classList.toggle('calcon',CALC.open); }
var CK=[['SHIFT','DEG','(',')','DEL','AC'],['sin','cos','tan','π','e','ANS'],['x²','√','xʸ','log','ln','1/x'],['7','8','9','÷','×10ˣ','n!'],['4','5','6','×','%','±'],['1','2','3','−','(−)',''],['0','.','EXP','+','=','']];
function calcLabel(k){ if(!CALC.shift) return k; return {sin:'sin⁻¹',cos:'cos⁻¹',tan:'tan⁻¹','x²':'x³','√':'∛',log:'10ˣ',ln:'eˣ'}[k]||k; }
function calcDraw(){
  var p=document.getElementById('calc'); if(!p) return;
  var h='<div class="cbar"><b>Scientific calculator</b><span>'+(CALC.deg?'DEG':'RAD')+(CALC.shift?' · SHIFT':'')+'</span><button onclick="calcToggle()">✕</button></div><div class="cdisp"><div class="cexp">'+(CALC.e||'&nbsp;')+'</div><div class="cres" id="cres">'+calcFmt(CALC.ans)+'</div></div><div class="ckeys">';
  CK.forEach(function(r){ r.forEach(function(k){ if(!k){h+='<span></span>';return;} var cls=/^[0-9.]$/.test(k)?'n':k==='='?'eq':(k==='AC'||k==='DEL')?'d':(k==='SHIFT'&&CALC.shift)?'on':'';
    h+='<button class="'+cls+'" onclick="calcKey(\''+k+'\')">'+calcLabel(k)+'</button>'; }); });
  p.innerHTML=h+'</div>';
}
function calcFmt(x){ if(typeof x!=='number') return x; if(!isFinite(x)) return 'Math ERROR'; if(x!==0&&(Math.abs(x)>=1e10||Math.abs(x)<1e-6)) return x.toExponential(6).replace(/\.?0+e/,'e').replace('e+','e').replace('e','×10^'); return String(+x.toPrecision(10)); }
function calcKey(k){
  var s=CALC.shift, ins=function(t){ CALC.e+=t; };
  if(k==='SHIFT'){ CALC.shift=!CALC.shift; return calcDraw(); }
  if(k==='DEG'){ CALC.deg=!CALC.deg; return calcDraw(); }
  if(k==='AC'){ CALC.e=''; CALC.ans=CALC.ans; document.getElementById('cres').textContent='0'; CALC.shift=false; return calcDraw(); }
  if(k==='DEL'){ CALC.e=CALC.e.replace(/(sin⁻¹\(|cos⁻¹\(|tan⁻¹\(|sin\(|cos\(|tan\(|log\(|ln\(|√\(|∛\(|Ans|×10\^|.)$/,''); return calcDraw(); }
  if(k==='='){ try{ var v=calcEval(CALC.e); CALC.ans=v; CALC.e=CALC.e; }catch(err){ CALC.ans='Syntax ERROR'; } CALC.shift=false; calcDraw(); return; }
  var map={'sin':s?'sin⁻¹(':'sin(','cos':s?'cos⁻¹(':'cos(','tan':s?'tan⁻¹(':'tan(','π':'π','e':'e','ANS':'Ans','x²':s?'³':'²','√':s?'∛(':'√(','xʸ':'^','log':s?'10^(':'log(','ln':s?'e^(':'ln(','1/x':'⁻¹','÷':'÷','×10ˣ':'×10^','EXP':'×10^','n!':'!','×':'×','%':'%','±':'(−)','−':'−','+':'+','(−)':'(−)','(':'(',')':')'};
  if(CALC.e===''&&/^[÷×−+^²³⁻!%]/.test(map[k]||'')) ins('Ans');
  ins(map[k]!==undefined?map[k]:k); CALC.shift=false; calcDraw();
}
function calcEval(ex){
  var d=CALC.deg?Math.PI/180:1, js=ex;
  js=js.replace(/Ans/g,'('+(typeof CALC.ans==='number'?CALC.ans:0)+')').replace(/×10\^/g,'*10^').replace(/π/g,'(Math.PI)').replace(/(^|[^a-z])e(?![a-z])/g,'$1(Math.E)')
   .replace(/sin⁻¹\(/g,'ASIN(').replace(/cos⁻¹\(/g,'ACOS(').replace(/tan⁻¹\(/g,'ATAN(').replace(/÷/g,'/').replace(/×/g,'*').replace(/−/g,'-').replace(/\(-\)/g,'-').replace(/²/g,'^2').replace(/³/g,'^3').replace(/⁻¹/g,'^(-1)').replace(/%/g,'/100')
   .replace(/sin⁻¹\(/g,'ASIN(').replace(/cos⁻¹\(/g,'ACOS(').replace(/tan⁻¹\(/g,'ATAN(').replace(/sin\(/g,'SIN(').replace(/cos\(/g,'COS(').replace(/tan\(/g,'TAN(')
   .replace(/log\(/g,'LOG(').replace(/ln\(/g,'LN(').replace(/√\(/g,'SQRT(').replace(/∛\(/g,'CBRT(');
  js=js.replace(/(\d+(?:\.\d+)?|\))!/g,function(m,a){ return 'FACT('+a+')'; });
  if(/[^0-9.+\-*/^() A-Z_a-z,]/.test(js)) throw 'bad';
  js=js.replace(/\^/g,'**').replace(/(\d|\))\s*(\(|[A-Z]|Math)/g,'$1*$2');
  var open=(js.match(/\(/g)||[]).length-(js.match(/\)/g)||[]).length; while(open-->0) js+=')';
  var f=new Function('SIN','COS','TAN','ASIN','ACOS','ATAN','LOG','LN','SQRT','CBRT','FACT','return ('+js+');');
  var Z=function(v){return Math.abs(v)<1e-12?0:v;}; var r=f(function(x){return Z(Math.sin(x*d));},function(x){return Z(Math.cos(x*d));},function(x){return Z(Math.tan(x*d));},
    function(x){return Math.asin(x)/d;},function(x){return Math.acos(x)/d;},function(x){return Math.atan(x)/d;},
    Math.log10,Math.log,Math.sqrt,Math.cbrt,function(n){ if(n<0||n%1) return NaN; var r=1; for(var i=2;i<=n;i++) r*=i; return r; });
  return r;
}
document.addEventListener('DOMContentLoaded',calcInit); if(document.readyState!=='loading') setTimeout(calcInit,0);
