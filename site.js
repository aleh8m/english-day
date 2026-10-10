(function(){
const LV=[[1,"Starter","A0","🌱","#2fa36b"],[2,"Beginner","A1","🌿","#1e4fa8"],[3,"Elementary","A2","🌳","#8e44ad"],[4,"Intermediate","B1","🚀","#e8707a"],[5,"Upper Intermediate","B2","⛰️","#e08a1e"],[6,"Advanced","C1","🏆","#12307a"]].map(a=>({n:a[0],name:a[1],cefr:a[2],e:a[3],c:a[4]}));
const SK=["vocabulary","grammar","reading","listening","writing","speaking","conversation"],SKN={vocabulary:"Vocabulary",grammar:"Grammar",reading:"Reading",listening:"Listening",writing:"Writing",speaking:"Speaking",conversation:"Conversation"};
const PG=[],P=(id,f,t,ar,lv,sk,ty,goal,soon)=>PG.push({id,f,t,ar,lv,sk:sk.split(","),ty,goal,soon});
P("abc","alphabet.html","ABC Letters","الحروف الإنجليزية",1,"reading","Lesson","Know the 26 letters and their sounds");
P("spell","alphabet.html#spell","Spelling","التهجئة",1,"writing","Practice","Spell simple words from pictures");
P("animals","animals.html","Animals","الحيوانات",1,"vocabulary,listening","Lesson","Name 36 animals and their sounds");
P("numbers","basics.html#numbers","Numbers 1–20","الأرقام",1,"vocabulary","Lesson","",1);
P("colors","basics.html#colors","Colors","الألوان",1,"vocabulary","Lesson","",1);
P("dates","dates.html","Days, Months & Seasons","الأيام والشهور والفصول",2,"vocabulary","Lesson","Say the days, months and seasons");
P("syn","english-day.html#syn","Synonyms","كلمات متشابهة",2,"vocabulary","Lesson","Use words with the same meaning");
P("opp","english-day.html#opp","Opposites","كلمات متضادة",2,"vocabulary","Lesson","Use opposite words");
P("phrases","phrases.html","Top 20 Phrases","أهم 20 عبارة",2,"speaking,vocabulary","Lesson","Use the 20 most useful phrases");
P("greet","greetings.html","Greetings & Introductions","التحيات والتعارف",2,"speaking","Lesson","",1);
P("talk","talk.html","Everyday Conversations","محادثات يومية (20)",3,"conversation,listening,speaking","Conversation","Understand and role-play 20 daily situations");
P("gram1","grammar-basic.html","Present Simple & Continuous","المضارع البسيط والمستمر",3,"grammar","Lesson","",1);
P("read1","stories.html","Short Stories","قصص قصيرة",3,"reading","Lesson","",1);
P("words","words.html","B1 Words (195)","195 كلمة B1",4,"vocabulary,reading","Lesson","Learn 195 key B1 words");
P("verbs","english-day.html#irr","Irregular Verbs","الأفعال الشاذة",4,"grammar","Lesson","Use the past forms of 50 verbs");
P("gram2","tenses.html","Past, Future & Perfect","الأزمنة",4,"grammar","Lesson","",1);
P("gram3","conditionals.html","Conditionals & Passive","الشرط والمبني للمجهول",5,"grammar","Lesson","",1);
P("listen2","listening.html","Listening Stories","قصص استماع",5,"listening","Lesson","",1);
P("gram4","advanced-grammar.html","Advanced Grammar","قواعد متقدمة",6,"grammar","Lesson","",1);
P("real","real-life.html","Real-Life English","إنجليزي الحياة الواقعية",6,"conversation,speaking","Conversation","",1);
P("quiz","quiz.html","Super Quiz","الاختبار الشامل",0,"vocabulary,grammar","Test","Test everything you learned");
P("placement","placement.html","Placement Test","اختبار تحديد المستوى",0,"vocabulary,grammar","Test","Find your level and get a personal path");
const AV=PG.filter(p=>!p.soon),PATH=AV.filter(p=>p.id!="placement"),KEY="eq_v1";
let S;try{S=JSON.parse(localStorage.getItem(KEY))||{}}catch(e){S={}}
S.done=S.done||{};S.seen=S.seen||{};S.pts=S.pts||0;S.days=S.days||[];S.badges=S.badges||[];S.name=S.name||"";S.level=S.level||0;S.last=S.last||"";
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const iso=d=>d.toISOString().slice(0,10),today=()=>iso(new Date());
function streak(){let n=0,d=new Date();if(!S.days.includes(iso(d)))d.setDate(d.getDate()-1);while(S.days.includes(iso(d))){n++;d.setDate(d.getDate()-1)}return n}
const lvName=n=>{const L=LV[n-1];return L.name+(n>1?" · "+L.cefr:" · Kids")};
const sp=k=>{const a=AV.filter(p=>p.sk.includes(k)&&p.id!="placement");return a.length?a.filter(p=>S.done[p.id]).length/a.length:0};
const lp=n=>{const a=AV.filter(p=>p.lv==n);return a.length?a.filter(p=>S.done[p.id]).length/a.length:0};
const overall=()=>PATH.filter(p=>S.done[p.id]).length/PATH.length;
const BG=[["📚","Vocabulary Master",()=>sp("vocabulary")>=.6],["🦸","Grammar Hero",()=>sp("grammar")>=1],["🎧","Listening Expert",()=>sp("listening")>=.6],["🌟","Speaking Star",()=>sp("speaking")>=.6],["🏆","Conversation Champion",()=>sp("conversation")>=1],["🔥","3-Day Streak",()=>streak()>=3],["💯","100 Points",()=>S.pts>=100],["🧭","Placement Explorer",()=>!!S.done.placement]];
function toast(m){let t=document.getElementById("eqt");if(!t){t=document.createElement("div");t.id="eqt";document.body.appendChild(t)}t.textContent=m;t.style.display="block";clearTimeout(t._h);t._h=setTimeout(()=>t.style.display="none",2600)}
function badges(){BG.forEach(b=>{if(!S.badges.includes(b[1])&&b[2]()){S.badges.push(b[1]);toast(`${b[0]} New badge: ${b[1]}!`)}})}
function complete(id,pts=20){if(S.done[id])return;S.done[id]=today();S.pts+=pts;toast(`⭐ +${pts} points! Lesson complete`);badges();save();bar()}
function cur(){const f=(location.pathname.split("/").pop()||"index.html"),h=location.hash;return PG.find(p=>p.f==f+h)||PG.find(p=>p.f==f)}
function visit(){const p=cur();if(!S.days.includes(today()))S.days.push(today());if(p){if(!S.seen[p.id]){S.seen[p.id]=today();S.pts+=5}S.last=p.id}save()}
const next=id=>{const i=PATH.findIndex(p=>p.id==id);return PATH[i+1]||{f:"progress.html",t:"My Progress"}};
function bar(){if(document.body.dataset.chrome!==undefined)return;const p=cur();if(!p)return;let b=document.getElementById("eqbar");if(!b){b=document.createElement("a");b.id="eqbar";document.body.appendChild(b);b.style.cssText="position:fixed;left:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:40;background:#12307a;color:#fff;padding:10px 14px;border-radius:20px;font:bold .85rem system-ui;text-decoration:none;box-shadow:0 3px 8px #0006;max-width:62vw"}const n=next(p.id);b.href=n.f;b.textContent=(S.done[p.id]?"✅ ":"➡️ ")+"Next: "+n.t}
const ck={};document.addEventListener("click",()=>{const p=cur();if(!p)return;ck[p.id]=(ck[p.id]||0)+1;if(ck[p.id]==8)complete(p.id);bar()},true);
const parseW=t=>t.match(/const DATA=`([\s\S]*?)`;/)[1].split("\n").filter(x=>x&&x!="##").map(x=>x.split("|"));
const parseT=t=>t.match(/const RAW=`([\s\S]*?)`;/)[1].split("\n");
const get=u=>fetch(u).then(r=>r.text());
async function daily(){const d=Math.floor(Date.now()/864e5),[w,t]=await Promise.all([get("words.html"),get("talk.html")]),W=parseW(w),T=parseT(t).filter(x=>!x.startsWith("#")&&x.includes("|")).map(x=>x.split("|")),Q=T.filter(x=>x[1].endsWith("?")),St=T.filter(x=>!x[1].endsWith("?")&&x[1].split(" ").length>3);return{word:W[d%W.length],sent:St[(d*7)%St.length],q:Q[(d*5)%Q.length]}}
async function search(q){q=q.toLowerCase().trim();const[w,t]=await Promise.all([get("words.html"),get("talk.html")]),R=parseT(t),has=a=>a.join(" ").toLowerCase().includes(q);
return{les:PG.filter(p=>has([p.t,p.ar,p.goal,p.sk.join(" ")])),words:parseW(w).filter(has).slice(0,12),topics:R.filter(x=>x.startsWith("#")&&has(x.slice(1).split("|"))).map(x=>x.slice(1).split("|")),lines:R.filter(x=>!x.startsWith("#")&&x.includes("|")&&has(x.split("|"))).map(x=>x.split("|")).slice(0,8)}}
const CSS=`:root{--bg:#f4f8fd;--c:#fff;--tx:#12307a;--mu:#5b6f94;--ac:#1e4fa8;--yl:#fbe97a;--bd:#d6e3f5}@media(prefers-color-scheme:dark){:root{--bg:#0e1b36;--c:#16294d;--tx:#eaf2ff;--mu:#9bb0d3;--ac:#6aa5ff;--bd:#27406e}}
body.eq{margin:0;background:var(--bg);color:var(--tx);font-family:system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif}*{box-sizing:border-box}
.eqh{position:sticky;top:0;z-index:30;background:var(--c);box-shadow:0 2px 8px #0002}.eqn{display:flex;align-items:center;gap:8px;padding:8px 12px;max-width:1100px;margin:auto;flex-wrap:wrap}
.lg{font-weight:800;color:var(--ac);text-decoration:none;font-size:1.1rem}#eqnv{display:flex;gap:2px;flex-wrap:wrap;flex:1}#eqnv a{color:var(--tx);text-decoration:none;padding:7px 10px;border-radius:10px;font-weight:600;font-size:.92rem}#eqnv a:hover,#eqnv a.on{background:var(--bd)}
.mb{display:none;background:none;border:0;font-size:1.5rem;color:var(--tx);margin-left:auto}#eqs input{padding:7px 12px;border-radius:20px;border:1px solid var(--bd);background:var(--bg);color:var(--tx);width:150px}
#mega{display:none;border-top:1px solid var(--bd);padding:12px;max-width:1100px;margin:auto;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px}#mega.on{display:grid}#mega a{display:block;color:var(--tx);text-decoration:none;padding:3px 0;font-size:.88rem}#mega a.soon{opacity:.45}
.eqw{max-width:1100px;margin:auto;padding:16px 14px}.card{background:var(--c);border:1px solid var(--bd);border-radius:16px;padding:14px;box-shadow:0 2px 6px #0001}
.btn{display:inline-block;background:var(--ac);color:#fff;border:0;border-radius:12px;padding:11px 18px;font-weight:700;text-decoration:none;cursor:pointer;font-size:1rem;margin:4px}.btn.s{background:var(--yl);color:#12307a}.btn.o{background:transparent;color:var(--ac);border:2px solid var(--ac)}
.pb{height:10px;background:var(--bd);border-radius:8px;overflow:hidden}.pb i{display:block;height:100%;background:linear-gradient(90deg,#2fa36b,#ffd24d);border-radius:8px}.mu{color:var(--mu)}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:12px}.pc{display:block;text-decoration:none;color:var(--tx)}.pc.soon{opacity:.5}.pc .st{font-size:.8rem;font-weight:700;color:var(--ac)}
.eqf{background:#12307a;color:#dce8ff;padding:24px 14px;margin-top:30px}.eqf .in{max-width:1100px;margin:auto;display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:14px}.eqf a{display:block;color:#dce8ff;text-decoration:none;padding:2px 0;font-size:.88rem}.eqf b{color:#fff}
#eqt{position:fixed;top:70px;left:50%;transform:translateX(-50%);background:#12307a;color:#fff;padding:10px 18px;border-radius:20px;font-weight:700;z-index:99;box-shadow:0 4px 12px #0005;display:none}
@media(max-width:700px){.mb{display:block}#eqnv{display:none;width:100%}#eqnv.on{display:flex}#eqs{width:100%}#eqs input{width:100%}}`;
const pl=(p,c)=>`<a ${p.soon?"":`href="${p.f}"`} class="${c||""}${p.soon?" soon":""}">${p.soon?"🔒 ":S.done[p.id]?"✅ ":""}${p.t}</a>`;
const MEGA={levels:()=>LV.map(L=>`<div><b style="color:${L.c}">${L.e} Level ${L.n} · ${L.name}</b>${PG.filter(p=>p.lv==L.n).map(p=>pl(p)).join("")}</div>`).join("")+`<div><a href="hub.html?v=levels"><b>View all levels →</b></a></div>`,
skills:()=>SK.map(k=>`<div><b>${SKN[k]}</b>${PG.filter(p=>p.sk.includes(k)&&p.lv>=0&&p.id!="placement").map(p=>pl(p)).join("")}</div>`).join(""),
practice:()=>`<div><b>Tests</b>${pl(PG.find(p=>p.id=="placement"))}${pl(PG.find(p=>p.id=="quiz"))}</div><div><b>Practice</b>${pl(PG.find(p=>p.id=="spell"))}<a href="hub.html?v=practice">All practice →</a></div>`};
function chrome(){document.body.classList.add("eq");document.body.dataset.chrome="";const st=document.createElement("style");st.textContent=CSS;document.head.appendChild(st);
const f=(location.pathname.split("/").pop()||"index.html"),NAV=[["Home","index.html"],["Learn English","hub.html?v=levels","levels"],["Skills","hub.html?v=skills","skills"],["Practice","hub.html?v=practice","practice"],["Conversation","talk.html"],["Progress","progress.html"]];
const h=document.createElement("header");h.className="eqh";
h.innerHTML=`<div class="eqn"><a class="lg" href="index.html">🌍 English Journey</a><button class="mb" id="eqb">☰</button><nav id="eqnv">${NAV.map(n=>`<a href="${n[1]}" ${n[2]?`data-m="${n[2]}"`:""} class="${n[1]==f?"on":""}">${n[0]}${n[2]?" ▾":""}</a>`).join("")}</nav><form id="eqs"><input name="q" placeholder="🔍 Search words, lessons..."></form></div><div id="mega"></div>`;
document.body.prepend(h);const mg=h.querySelector("#mega");let open="";
h.querySelectorAll("[data-m]").forEach(a=>a.onclick=e=>{e.preventDefault();const k=a.dataset.m;if(open==k){mg.classList.remove("on");open="";return}open=k;mg.innerHTML=MEGA[k]();mg.classList.add("on")});
document.getElementById("eqb").onclick=()=>document.getElementById("eqnv").classList.toggle("on");
h.querySelector("#eqs").onsubmit=e=>{e.preventDefault();const q=e.target.q.value.trim();if(q)location.href="hub.html?v=search&q="+encodeURIComponent(q)};
document.addEventListener("click",e=>{if(!h.contains(e.target)){mg.classList.remove("on");open=""}});
const ft=document.createElement("footer");ft.className="eqf";ft.innerHTML=`<div class="in"><div><b>About</b><a href="sitemap.html">Sitemap</a><a href="english-day.html">🎉 English Day</a></div><div><b>Learning</b><a href="hub.html?v=levels">Learning Levels</a><a href="hub.html?v=skills&s=vocabulary">Vocabulary</a><a href="hub.html?v=skills&s=grammar">Grammar</a></div><div><b>Skills</b><a href="hub.html?v=skills&s=reading">Reading</a><a href="hub.html?v=skills&s=listening">Listening</a><a href="hub.html?v=skills&s=speaking">Speaking</a><a href="talk.html">Conversation</a></div><div><b>Practice</b><a href="hub.html?v=practice">Practice</a><a href="placement.html">Tests</a><a href="progress.html">My Progress</a></div><div><b>Info</b><a href="#">Contact</a><a href="#">Privacy Policy</a><a href="#">Terms</a></div></div>`;document.body.appendChild(ft)}
const card=p=>`<a class="card pc${p.soon?" soon":""}" ${p.soon?"":`href="${p.f}"`}><div><b>${{Lesson:"📘",Practice:"🎯",Conversation:"💬",Test:"🏆"}[p.ty]} ${p.t}</b></div><div dir="auto" class="mu">${p.ar}</div><small class="mu">${p.goal||"Coming soon"}</small><div class="st">${S.done[p.id]?"✅ Done":p.soon?"🔒 Soon":"▶️ Start"}</div></a>`;
window.EQ={LV,PG,SK,SKN,S,AV,PATH,BG,save,cur,complete,badges,streak,sp,lp,overall,lvName,next,chrome,daily,search,card,toast};
visit();badges();save();
if(document.readyState!="loading")bar();else document.addEventListener("DOMContentLoaded",bar);
})();
