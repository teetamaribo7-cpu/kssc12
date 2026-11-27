// KSSC Form 6 app — created by teetamaribo7
var SUBJECTS = {};
var LANG = (function(){ try{ return JSON.parse(localStorage.getItem('f6_lang'))||'en'; }catch(e){ return 'en'; } })();
var STR = {
 en:{hello:'Mauri',next:'Next ›',name:'Your full name',school:'School',cls:'Class',chooseSchool:'— Choose your school —',other:'Other (type it)',stream:'Which stream are you in?',opts:'Choose your optional subject(s)',tick:'Tick one or both.',done:'Done ✓',topics:'Topics',papers:'Past papers',progress:'My progress',leader:'Top 10 students',teacher:'Teacher view',settings:'Settings',startQuiz:'Start quiz',showSol:'Show worked solution',language:'Language',changeName:'Change my name / school / class',changeStream:'Change my stream or subjects',expired:'This version of the app has expired. Please ask your teacher for the new version.'},
 ki:{}
};
function L(k){ return (STR[LANG]&&STR[LANG][k])||STR.en[k]||k; }          // filled by content/*.js through addSubject()
var ALL = [
  {id:'eng', name:'English',     ico:'📘', c:'#2c5fb5'},
  {id:'mat', name:'Mathematics', ico:'📐', c:'#7b3fb0'},
  {id:'phy', name:'Physics',     ico:'⚡', c:'#d35400'},
  {id:'che', name:'Chemistry',   ico:'⚗️', c:'#16a085'},
  {id:'bio', name:'Biology',     ico:'🧬', c:'#27ae60'},
  {id:'ict', name:'ICT / Computer Studies', ico:'💻', c:'#34495e'},
  {id:'eco', name:'Economics',   ico:'📈', c:'#c0392b'},
  {id:'acc', name:'Accounting',  ico:'🧾', c:'#8e6b14'},
  {id:'geo', name:'Geography',   ico:'🌏', c:'#1e8bc3'},
  {id:'his', name:'History',     ico:'🏛️', c:'#7f5539'}
];
var STREAMS = {
  Science:  {core:['eng','mat','phy','che'], options:['bio','ict']},
  Commerce: {core:['eng','mat','eco','acc','ict'], options:[]},
  Arts:     {core:['eng','mat','geo','his','ict'], options:[]}
};
function addSubject(s){ SUBJECTS[s.id]=s; }
function setNotes(id,arr){ var S=SUBJECTS[id]; if(!S) return; arr.forEach(function(h,i){ if(h&&S.topics[i]) S.topics[i].notes=h; }); }

// ---------- storage ----------
function load(k,d){ try{ var v=localStorage.getItem('f6_'+k); return v?JSON.parse(v):d; }catch(e){ return d; } }
function save(k,v){ try{ localStorage.setItem('f6_'+k, JSON.stringify(v)); }catch(e){} }
var P = load('profile', null);   // {name,school,cls,stream,opts:[]}
var SC = load('scores', {});     // key subj|topic -> {best,last,tries}

// ---------- navigation ----------
var stack = [];
function $(id){ return document.getElementById(id); }
function esc(s){ return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); }
function toast(m){ var t=$('toast'); t.textContent=m; t.classList.add('on'); setTimeout(function(){t.classList.remove('on');},2200); }
function show(name, arg, noPush){
  if(!noPush) stack.push([name,arg]);
  $('back').style.visibility = stack.length>1 ? 'visible':'hidden';
  var v=$('view'); v.innerHTML=''; window.scrollTo(0,0);
  (VIEWS[name]||VIEWS.home)(v, arg);
}
function goBack(){
  if(stack.length<=1) return false;
  stack.pop(); var top=stack[stack.length-1]; show(top[0], top[1], true); return true;
}
function setTitle(t){ $('title').textContent=t; }
function mySubjects(){
  if(!P) return [];
  var st=STREAMS[P.stream]; var ids=st.core.concat((P.opts||[]).filter(function(o){return st.options.indexOf(o)>=0;}));
  return ALL.filter(function(s){ return ids.indexOf(s.id)>=0; });
}
function meta(id){ for(var i=0;i<ALL.length;i++) if(ALL[i].id===id) return ALL[i]; }

// ---------- results to Google Sheet ----------
function deviceId(){ var d=load('dev',null); if(!d){ d='D'+Date.now().toString(36)+Math.random().toString(36).slice(2,6); save('dev',d);} return d; }
function queueResult(r){ var q=load('queue',[]); q.push(r); save('queue',q); flush(); }
function pingDevice(){
  if(!P||!P.stream) return; var today=new Date().toISOString().slice(0,10);
  if(load('ping','')===today) return; save('ping',today);
  var q=load('queue',[]); q.push({type:'device',date:new Date().toISOString(),device:deviceId(),name:P.name,school:P.school,cls:P.cls,stream:P.stream,
    subjects:mySubjects().map(function(m){return m.name;}).join(', '),version:APP_VERSION}); save('queue',q);
}
function flush(){
  if(!SHEET_URL) return; var q=load('queue',[]); if(!q.length || !navigator.onLine) return;
  var body=new URLSearchParams({data: JSON.stringify(q)});
  fetch(SHEET_URL,{method:'POST',mode:'no-cors',body:body}).then(function(){ save('queue',[]); }).catch(function(){});
}
window.addEventListener('online', flush);

// ---------- views ----------
var VIEWS = {};
VIEWS.welcome = function(v){
  setTitle('KSSC Form 6');
  var opts='<option value="">'+L('chooseSchool')+'</option>'+SCHOOLS.map(function(x){return '<option>'+esc(x)+'</option>';}).join('')+'<option value="__other">'+L('other')+'</option>';
  v.innerHTML = '<div class="hero"><img src="img/logo.svg" alt="TM logo"><h1>KSSC Form 6</h1>'+
   '<p class="muted">Notes, quizzes and worked past-paper solutions for Form 6 (Year 12) students in Kiribati.</p></div>'+
   '<div class="card"><label>'+L('name')+'</label><input id="n" placeholder="e.g. Teeta Maribo">'+
   '<label>'+L('school')+'</label><select id="ss" onchange="document.getElementById(\'s\').style.display=this.value===\'__other\'?\'block\':\'none\'">'+opts+'</select>'+
   '<input id="s" placeholder="Type your school name" style="display:none">'+
   '<label>'+L('cls')+'</label><input id="c" placeholder="e.g. 6A"></div>'+
   '<button class="btn wide" onclick="saveNames()">'+L('next')+'</button><p class="credit">Created by '+esc(CREATOR)+'</p>';
  if(P){ $('n').value=P.name||''; $('c').value=P.cls||'';
    if(SCHOOLS.indexOf(P.school)>=0) $('ss').value=P.school; else if(P.school){ $('ss').value='__other'; $('s').style.display='block'; $('s').value=P.school; } }
};
function saveNames(){
  var n=$('n').value.trim(), sel=$('ss').value, s=(sel==='__other'?$('s').value:sel).trim(), c=$('c').value.trim();
  if(!n||!s){ toast('Please enter your name and school'); return; }
  P=P||{}; P.name=n; P.school=s; P.cls=c; save('profile',P); show('stream');
}
VIEWS.stream = function(v){
  setTitle('Choose your stream');
  var h='<h1>Which stream are you in?</h1>';
  Object.keys(STREAMS).forEach(function(k){
    var st=STREAMS[k]; var names=st.core.map(function(i){return meta(i).name;}).join(', ');
    if(st.options.length) names+=' + '+st.options.map(function(i){return meta(i).name;}).join(' and/or ');
    h+='<button class="row" onclick="pickStream(\''+k+'\')"><span style="font-size:28px">'+({Science:'🔬',Commerce:'💼',Arts:'🎨'})[k]+'</span><span class="grow"><b>'+k+'</b><small>'+esc(names)+'</small></span>›</button>';
  });
  v.innerHTML=h;
};
function pickStream(k){
  P.stream=k; if(!STREAMS[k].options.length){ P.opts=[]; save('profile',P); save('ping',''); stack=[]; show('home'); }
  else { save('profile',P); show('options'); }
}
VIEWS.options = function(v){
  setTitle('Optional subjects');
  var st=STREAMS[P.stream], cur=P.opts||[];
  var h='<h1>Choose your optional subject(s)</h1><p class="muted">Tick one or both.</p>';
  st.options.forEach(function(o){ var m=meta(o), on=cur.indexOf(o)>=0;
    h+='<label class="chk'+(on?' on':'')+'"><input type="checkbox" value="'+o+'"'+(on?' checked':'')+' onchange="this.parentNode.classList.toggle(\'on\',this.checked)"> <span style="font-size:24px">'+m.ico+'</span> <b>'+m.name+'</b></label>'; });
  v.innerHTML=h+'<button class="btn wide" onclick="saveOpts()">Done ✓</button>';
};
function saveOpts(){
  var o=[].slice.call(document.querySelectorAll('.chk input:checked')).map(function(i){return i.value;});
  if(!o.length){ toast('Please tick at least one'); return; }
  P.opts=o; save('profile',P); save('ping',''); stack=[]; show('home');
}
VIEWS.home = function(v){
  if(!P||!P.stream){ stack=[]; show('welcome'); return; }
  setTitle('KSSC Form 6');
  var h='<div class="card" style="display:flex;gap:12px;align-items:center"><img src="img/logo.svg" style="width:54px;height:54px"><div><b>Mauri, '+esc(P.name.split(' ')[0])+'!</b><br><span class="muted">'+esc(P.stream)+' stream · '+esc(P.school)+'</span></div></div><div class="grid">';
  mySubjects().forEach(function(m){ var s=SUBJECTS[m.id]; var t=s?s.topics.length:0, p=s?s.papers.length:0;
    h+='<button class="subj" style="--c:'+m.c+'" onclick="show(\'subject\',\''+m.id+'\')"><span class="ico">'+m.ico+'</span><b>'+m.name+'</b><small>'+t+' topics · '+p+' papers</small></button>'; });
  h+='</div><button class="row" onclick="show(\'progress\')"><span style="font-size:24px">📊</span><span class="grow"><b>My progress</b><small>Quiz scores for every topic</small></span>›</button>';
  h+='<button class="row" onclick="show(\'leader\')"><span style="font-size:24px">🏆</span><span class="grow"><b>'+L('leader')+'</b><small>Best students from all schools (needs internet)</small></span>›</button>';
  h+='<p class="credit">Created by '+esc(CREATOR)+'</p>';
  v.innerHTML=h; pingDevice(); flush();
};
VIEWS.subject = function(v, id){
  var m=meta(id), s=SUBJECTS[id]; setTitle(m.name);
  if(!s){ v.innerHTML='<div class="card">This subject is coming soon.</div>'; return; }
  var tab=load('tab_'+id,'t');
  var h='<div class="tabs"><button class="'+(tab==='t'?'on':'')+'" onclick="save(\'tab_'+id+'\',\'t\');show(\'subject\',\''+id+'\',true)">📚 Topics</button><button class="'+(tab==='p'?'on':'')+'" onclick="save(\'tab_'+id+'\',\'p\');show(\'subject\',\''+id+'\',true)">📝 Past papers</button></div>';
  if(tab==='t'){
    s.topics.forEach(function(t,i){ var r=SC[id+'|'+i]; var pc=r?Math.round(100*r.best):null;
      h+='<button class="row" onclick="show(\'topic\',[\''+id+'\','+i+'])"><span class="grow"><b>'+(i+1)+'. '+esc(t.t)+'</b><small>'+(t.quiz?t.quiz.length:0)+' quiz questions'+(pc!==null?' · best '+pc+'%':'')+'</small></span>›</button>'; });
  } else {
    if(!s.papers.length) h+='<div class="card">Past paper solutions are coming soon.</div>';
    s.papers.forEach(function(p,i){ var n=0; p.secs.forEach(function(x){n+=x.qs.length;});
      h+='<button class="row" onclick="show(\'paper\',[\''+id+'\','+i+'])"><span style="font-size:22px">📄</span><span class="grow"><b>KSSC '+m.name+' '+p.y+'</b><small>'+n+' questions with worked solutions</small></span>›</button>'; });
  }
  v.innerHTML=h;
};
VIEWS.topic = function(v, a){
  var s=SUBJECTS[a[0]], t=s.topics[a[1]]; setTitle(t.t);
  v.innerHTML='<div class="card notes">'+t.notes+'</div>'+(t.quiz&&t.quiz.length?'<button class="btn gold wide" onclick="show(\'quiz\',[\''+a[0]+'\','+a[1]+'])">Start quiz ('+t.quiz.length+' questions) ›</button>':'');
};
var QZ=null;
function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var x=a[i]; a[i]=a[j]; a[j]=x; } return a; }
VIEWS.quiz = function(v, a){
  var t=SUBJECTS[a[0]].topics[a[1]]; setTitle('Quiz: '+t.t);
  QZ={a:a, qs:shuffle(t.quiz.map(function(q,i){return i;})), i:0, score:0, done:false};
  quizStep();
};
function quizStep(){
  var v=$('view'), t=SUBJECTS[QZ.a[0]].topics[QZ.a[1]];
  if(QZ.i>=QZ.qs.length){ return quizEnd(); }
  var q=t.quiz[QZ.qs[QZ.i]];
  var order=shuffle(q.o.map(function(o,i){return i;}));
  var h='<div class="muted">Question '+(QZ.i+1)+' of '+QZ.qs.length+'</div><div class="bar"><i style="width:'+(100*QZ.i/QZ.qs.length)+'%"></i></div><div class="card"><div class="q"><b>'+q.q+'</b></div>';
  order.forEach(function(k){ h+='<button class="opt" data-k="'+k+'" onclick="answer(this)">'+q.o[k]+'</button>'; });
  v.innerHTML=h+'</div><div id="fb"></div>'; window.scrollTo(0,0);
}
function answer(b){
  var t=SUBJECTS[QZ.a[0]].topics[QZ.a[1]], q=t.quiz[QZ.qs[QZ.i]]; var k=+b.getAttribute('data-k');
  var bs=document.querySelectorAll('.opt'); if(bs[0].disabled) return;
  [].forEach.call(bs,function(x){ x.disabled=true; if(+x.getAttribute('data-k')===q.a) x.classList.add('right'); });
  if(k===q.a){ QZ.score++; } else b.classList.add('wrong');
  $('fb').innerHTML='<div class="explain"><b>'+(k===q.a?'✅ Correct!':'❌ Not quite.')+'</b> '+(q.e||'')+'</div><button class="btn wide" onclick="QZ.i++;quizStep()">'+(QZ.i+1<QZ.qs.length?'Next ›':'See my score')+'</button>';
}
function quizEnd(){
  var a=QZ.a, t=SUBJECTS[a[0]].topics[a[1]], n=QZ.qs.length, f=QZ.score/n, key=a[0]+'|'+a[1];
  var r=SC[key]||{best:0,tries:0}; r.best=Math.max(r.best,f); r.last=f; r.tries++; SC[key]=r; save('scores',SC);
  queueResult({date:new Date().toISOString(), device:deviceId(), name:P.name, school:P.school, cls:P.cls, stream:P.stream,
    subject:meta(a[0]).name, topic:t.t, score:QZ.score, total:n, percent:Math.round(100*f)});
  var msg=f>=.8?'Excellent work! 🌟':f>=.5?'Good effort, keep practising 👍':'Read the notes again and retry 💪';
  $('view').innerHTML='<div class="card" style="text-align:center"><div class="big">'+QZ.score+' / '+n+'</div><p>'+Math.round(100*f)+'% · '+msg+'</p></div>'+
    '<button class="btn wide" onclick="show(\'quiz\',['+JSON.stringify(a[0]).replace(/"/g,"'")+','+a[1]+'],true)">Try again</button><button class="btn ghost wide" onclick="goBack();">Back to notes</button>';
}
VIEWS.paper = function(v, a){
  var m=meta(a[0]), p=SUBJECTS[a[0]].papers[a[1]]; setTitle('KSSC '+m.name+' '+p.y);
  if(!p.link && p.src && window.LINKS && LINKS[p.src]) p.link=LINKS[p.src];
  var h='<div class="card muted" style="font-size:14px">Try each question yourself first, then tap <b>Show worked solution</b>.'+(p.note?'<br>'+p.note:'')+(p.link?'<br><a class="btn ghost" href="'+p.link+'">📥 Open the original paper (needs internet)</a>':'')+'</div>';
  var id=0;
  p.secs.forEach(function(sec){
    h+='<h2>'+esc(sec.t)+'</h2>'+(sec.info?'<div class="card notes">'+sec.info+'</div>':'');
    sec.qs.forEach(function(q){ id++;
      h+='<div class="card"><div class="q"><span class="qnum">'+esc(q.n)+'</span> '+q.q+'</div>'+
        '<button class="btn ghost" onclick="document.getElementById(\'s'+id+'\').classList.toggle(\'show\')">Show worked solution</button>'+
        '<div class="sol" id="s'+id+'"><div class="w">'+q.a+'</div>'+(q.flag?'<div class="flag">⚠ '+q.flag+'</div>':'')+'</div></div>';
    });
  });
  v.innerHTML=h;
};
VIEWS.progress = function(v){
  setTitle('My progress'); var h='';
  mySubjects().forEach(function(m){ var s=SUBJECTS[m.id]; if(!s) return; var done=0, sum=0;
    s.topics.forEach(function(t,i){ var r=SC[m.id+'|'+i]; if(r){ done++; sum+=r.best; } });
    var pc=done?Math.round(100*sum/done):0;
    h+='<div class="card"><b>'+m.ico+' '+m.name+'</b><div class="muted" style="font-size:14px">'+done+' of '+s.topics.length+' topic quizzes done · average best '+pc+'%</div><div class="bar"><i style="width:'+(s.topics.length?100*done/s.topics.length:0)+'%"></i></div></div>'; });
  var q=load('queue',[]).length;
  v.innerHTML=h+'<p class="muted" style="font-size:13px">'+(q?q+' result(s) waiting to be sent to your teacher (needs internet).':'All results sent.')+'</p>';
};
VIEWS.settings = function(v){
  setTitle('Settings');
  var h='';
  if(P&&P.stream) h+='<div class="card"><b>'+esc(P.name)+'</b><br><span class="muted">'+esc(P.school)+(P.cls?' · '+esc(P.cls):'')+' · '+esc(P.stream)+'</span></div>'+
    '<button class="row" onclick="show(\'welcome\')">✏️<span class="grow">'+L('changeName')+'</span>›</button>'+
    '<button class="row" onclick="show(\'stream\')">🔀<span class="grow">'+L('changeStream')+'</span>›</button>';
  h+='<button class="row" onclick="toggleLang()">🌐<span class="grow">'+L('language')+': <b>'+(LANG==='en'?'English':'Te Kiribati')+'</b></span>›</button>';
  h+='<button class="row" onclick="show(\'teacher\')">👩‍🏫<span class="grow">'+L('teacher')+'<small>Teachers only – needs a school PIN</small></span>›</button>';
  h+='<div class="card hero"><img src="img/logo.svg"><h2>KSSC Form 6</h2><p class="muted">Version '+APP_VERSION+'<br>Notes, topic quizzes and worked solutions for KSSC past papers (MOE Kiribati).<br>Solutions are worked out independently and checked against the official marking schemes.</p><b>Created by '+esc(CREATOR)+'</b></div>';
  v.innerHTML=h;
};
function toggleLang(){ LANG = LANG==='en'?'ki':'en'; save('lang',LANG); save('newsAt',0); if(window.checkNews) checkNews(); if(LANG==='ki' && !Object.keys(STR.ki).length) toast('Te Kiribati translation coming soon'); show('settings',null,true); }
function getJSON(params, cb){
  if(!SHEET_URL){ cb(null,'The results sheet is not connected yet.'); return; }
  if(!navigator.onLine){ cb(null,'No internet connection.'); return; }
  var q=Object.keys(params).map(function(k){return k+'='+encodeURIComponent(params[k]);}).join('&');
  fetch(SHEET_URL+'?'+q).then(function(r){return r.json();}).then(function(d){cb(d);}).catch(function(){ cb(null,'Could not reach the results sheet.'); });
}
VIEWS.leader = function(v){
  setTitle(L('leader')); v.innerHTML='<div class="card muted">Loading…</div>'; flush();
  getJSON({action:'top'}, function(d,err){
    if(!d){ v.innerHTML='<div class="card">'+err+'</div>'; return; }
    var h='<div class="card"><table class="lb"><tr><th>#</th><th>Student</th><th>School</th><th>Avg %</th></tr>';
    (d.top||[]).forEach(function(r,i){ h+='<tr><td>'+(i<3?['🥇','🥈','🥉'][i]:(i+1))+'</td><td>'+esc(r.name)+'</td><td>'+esc(r.school)+'</td><td><b>'+r.avg+'</b></td></tr>'; });
    v.innerHTML=h+'</table><p class="muted" style="font-size:13px">Average quiz score (at least 5 quizzes). Updated live from all schools.</p></div>';
  });
};
VIEWS.teacher = function(v){
  setTitle(L('teacher'));
  var opts=SCHOOLS.map(function(x){return '<option>'+esc(x)+'</option>';}).join('');
  v.innerHTML='<div class="card"><label>School</label><select id="ts">'+opts+'</select><label>School PIN</label><input id="tp" type="password" inputmode="numeric" placeholder="PIN from the app creator">'+
    '<button class="btn wide" onclick="loadSchool()">Show my students</button></div><div id="tr"></div>';
  if(P && SCHOOLS.indexOf(P.school)>=0) $('ts').value=P.school;
};
function loadSchool(){
  var out=$('tr'); out.innerHTML='<div class="card muted">Loading…</div>';
  getJSON({action:'school', school:$('ts').value, pin:$('tp').value}, function(d,err){
    if(!d){ out.innerHTML='<div class="card">'+err+'</div>'; return; }
    if(!d.ok){ out.innerHTML='<div class="card">'+esc(d.error||'Wrong PIN')+'</div>'; return; }
    var h='<div class="card"><b>'+esc(d.school)+'</b><br><span class="muted">'+d.students.length+' students · '+d.quizzes+' quizzes · average '+d.avg+'%</span></div>';
    h+='<div class="card"><table class="lb"><tr><th>Student</th><th>Class</th><th>Quizzes</th><th>Avg %</th></tr>';
    d.students.forEach(function(r){ h+='<tr><td>'+esc(r.name)+'</td><td>'+esc(r.cls)+'</td><td>'+r.n+'</td><td><b>'+r.avg+'</b></td></tr>'; });
    h+='</table></div><div class="card"><b>By subject</b><table class="lb">';
    d.subjects.forEach(function(r){ h+='<tr><td>'+esc(r.subject)+'</td><td>'+r.n+' quizzes</td><td><b>'+r.avg+'%</b></td></tr>'; });
    out.innerHTML=h+'</table></div>';
  });
}
function start(){
  stack=[];
  if(new Date() > new Date(EXPIRY+'T23:59:59')){ $('back').style.visibility='hidden'; $('view').innerHTML='<div class="card hero"><img src="img/logo.svg"><h2>KSSC Form 6</h2><p>'+L('expired')+'</p><p class="credit">Created by '+esc(CREATOR)+'</p></div>'; return; }
  show(P&&P.stream?'home':'welcome');
}
window.goBack=goBack;
