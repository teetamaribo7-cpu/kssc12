try{ var _ki=JSON.parse(localStorage.getItem('f6_ki')); if(_ki) STR.ki=_ki; }catch(e){}
// v1.2 features: formula sheets, flashcards, smart review, badges & certificates, timed mock exams, remote messages
var SHEETS = {
  mat: {title:'KSSC Mathematics formulae sheet', imgs:['maths-1','maths-2','maths-3','maths-4']},
  phy: {title:'KSSC Physics equations sheet (g = 10 m/s²)', imgs:['physics-1','physics-2','physics-3']},
  che: {title:'Periodic Table (given in the exam)', imgs:['periodic-1'], wide:true}
};
var WRONG = load('wrong', {});
if(load('phy19',0)!==1){ (function(){ var sc=load('scores',{}),w=load('wrong',{}); Object.keys(sc).forEach(function(k){ if(k.indexOf('phy|')===0) delete sc[k]; }); Object.keys(w).forEach(function(k){ if(k.indexOf('phy|')===0) delete w[k]; }); save('scores',sc); save('wrong',w); WRONG=w; if(typeof SC!=='undefined') SC=sc; save('phy19',1); })(); }   // key "subj|t|i" -> 1
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
        g[1].forEach(function(i,j){ h+=row(s.topics[i],i,/^Topic \d/.test(s.topics[i].t)?'':(k+1)+'.'+(j+1)); }); h+='</details>'; }); }
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
 mat:[['Algebra',[0,1]],['Coordinate geometry',[2]],['Sequences and series',[3]],['Statistics and probability',[4]],['Functions and graphs',[5]],['Calculus',[6,7]],['Trigonometry',[8]]],
 phy:[['Light and waves (Topics 1–4)',[0,1,2,3]],['Mechanics (Topics 5–12)',[4,5,6,7,8,9,10,11]],['Gases and kinetic theory (Topic 13)',[12]],['Electricity and magnetism (Topics 14–18)',[13,14,15,16,17]],['The atom and radioactivity (Topic 19)',[18]]],
 che:[['Atomic structure and bonding',[0,1]],['Quantitative chemistry',[2]],['Inorganic chemistry',[3]],['Organic chemistry',[4,5,6]],['Physical chemistry',[7,8]],['Redox chemistry',[9]]],
 bio:[['Cellular biology',[0,1,2,3]],['Genetics',[4,5]],['Organism biology',[6,7,8]],['Ecology and the environment',[9]]],
 ict:[['Computer systems',[0,1]],['Application software',[2,3,4]],['Computers in society',[5]]],
 eco:[['Basic economic concepts',[0]],['Markets',[1]],['Money and inflation',[2,3]],['International trade and payments',[4]],['Economic functions of government',[5,6]],['Economic development',[7]]],
 acc:[['Conceptual basis',[0]],['Accounting process',[1,2]],['Accounting reports',[3,4]],['Analysis and decisions',[5]],['Accounting systems',[6,7]]],
 geo:[['Geography skills',[0]],['Natural hazards',[1]],['Resources',[2]],['Population',[3]],['Urbanisation',[4]],['Tourism',[5]]],
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
  var a=QZ.a, n=QZ.items.length, f=QZ.score/n, review=!Array.isArray(a);
  var subj=review?a.review:a[0], topic=review?'Review of mistakes':SUBJECTS[a[0]].topics[a[1]].t;
  if(!review){ var key=a[0]+'|'+a[1], r=SC[key]||{best:0,tries:0}; r.best=Math.max(r.best,f); r.last=f; r.tries++; SC[key]=r; save('scores',SC); }
  STATS.quizzes++; if(f===1) STATS.perfect++; save('stats',STATS);
  queueResult({date:new Date().toISOString(), device:deviceId(), name:P.name, school:P.school, cls:P.cls, stream:P.stream,
    subject:meta(subj).name, topic:topic, score:QZ.score, total:n, percent:Math.round(100*f)});
  var msg=f>=.8?'Excellent work! 🌟':f>=.5?'Good effort, keep practising 👍':'Read the notes again and retry 💪';
  var done=!review && subjectDone(subj);
  $('view').innerHTML='<div class="card" style="text-align:center"><div class="big">'+QZ.score+' / '+n+'</div><p>'+Math.round(100*f)+'% · '+msg+'</p></div>'+
    (done?'<button class="btn gold wide" onclick="show(\'cert\',\''+subj+'\')">🎓 You passed every topic – get your certificate</button>':'')+
    '<button class="btn wide" onclick="show(\'quiz\','+(review?'{review:\''+subj+'\'}':'[\''+a[0]+'\','+a[1]+']')+',true)">Try again</button><button class="btn ghost wide" onclick="goBack();">Back</button>';
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
