'use strict';
/* anti-clickjacking: never run inside someone else's frame */
if(window.top!==window.self){try{window.top.location=window.self.location}catch{document.documentElement.hidden=true}}

/* ---------- icons ---------- */
const I = {
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21.7l8.8-8.7a5.2 5.2 0 0 0 0-7.4z"/></svg>',
  share:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 14l4-4"/><path d="M3.3 17a10 10 0 1 1 17.4 0"/></svg>',
  fuel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17M3 22h12M15 10h2a2 2 0 0 1 2 2v3a2 2 0 0 0 4 0V8l-3-3"/><path d="M6 9h6"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="6" cy="5" r="2"/><circle cx="18" cy="5" r="2"/><circle cx="12" cy="19" r="2"/><path d="M6 7v4h12V7M12 11v6"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.5 8.5 0 1 1 21 11.5z"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/></svg>',
  up:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11a2.5 2.5 0 0 1 2 2.4V17a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1v-3.6A2.5 2.5 0 0 1 5 11zm2.2 0h9.6l-1.2-3H8.4z"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'
};

/* ---------- car illustrations ---------- */
const SHAPES = {
  Sedan:{b:'M30 140Q30 118 60 114L110 108Q135 78 175 74L240 74Q275 78 295 106L340 112Q372 118 372 140L372 150L30 150Z',
    w:['M122 106Q142 84 175 82L206 82L206 106Z','M216 82L240 82Q262 86 277 106L216 106Z'],wh:[100,300],hl:[362,121],tl:[30,121]},
  SUV:{b:'M26 144L26 100Q28 88 50 84L92 78L118 34Q124 26 140 26L290 26Q304 26 310 38L334 82L354 88Q374 94 374 116L374 150L26 150Z',
    w:['M128 78L146 40L200 40L200 78Z','M210 40L286 40L306 78L210 78Z'],wh:[108,292],hl:[364,108],tl:[28,108]},
  Hatchback:{b:'M40 146L40 110Q44 100 64 98L130 90Q150 62 190 60L268 60Q296 62 306 92L346 100Q368 106 368 130L368 150L40 150Z',
    w:['M140 90Q156 70 190 68L212 68L212 90Z','M222 68L266 68Q286 72 294 90L222 90Z'],wh:[100,300],hl:[358,112],tl:[42,112]},
  Pickup:{b:'M20 146L20 104L150 104L150 96L176 62Q182 58 192 58L250 58Q262 58 270 68L290 100L338 106Q372 112 372 134L372 150L20 150Z',
    w:['M162 98L184 68L222 68L222 98Z','M230 68L250 68L266 98L230 98Z'],wh:[84,302],hl:[362,118],tl:[20,116]}
};
let gid=0;
function carSVG(body,color){
  const s=SHAPES[body]||SHAPES.Sedan,g='cg'+(++gid);
  return `<svg viewBox="0 0 400 200" role="img" aria-label="${body} illustration"><defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".34"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".24"/></linearGradient></defs>
  <ellipse cx="200" cy="178" rx="170" ry="9" fill="#000" opacity=".16"/>
  <path d="${s.b}" fill="${color}"/><path d="${s.b}" fill="url(#${g})"/>
  ${s.w.map(d=>`<path d="${d}" fill="#223042" opacity=".9"/>`).join('')}
  ${s.w.map(d=>`<path d="${d}" fill="#fff" opacity=".12" transform="translate(0 -1)"/>`).join('')}
  <path d="M60 128H350" stroke="#000" stroke-opacity=".12" stroke-width="2" stroke-linecap="round"/>
  <rect x="${s.hl[0]-6}" y="${s.hl[1]}" width="14" height="8" rx="4" fill="#FFE9A8"/>
  <rect x="${s.tl[0]-2}" y="${s.tl[1]}" width="10" height="8" rx="4" fill="#FF5252"/>
  ${s.wh.map(x=>`<circle cx="${x}" cy="150" r="33" fill="#000" opacity=".28"/><circle cx="${x}" cy="150" r="28" fill="#1A1D25"/><circle cx="${x}" cy="150" r="14" fill="#D5D9E0"/><circle cx="${x}" cy="150" r="5" fill="#1A1D25"/>`).join('')}
  </svg>`;
}

/* ---------- data ---------- */
const COLORS=[['Orange','#FF5B2E'],['White','#F1F0EC'],['Black','#2A2E38'],['Silver','#AEB4BF'],['Blue','#3170FF'],['Red','#D7263D'],['Green','#2E9162'],['Gray','#707887']];
const day=864e5, now=Date.now();
const SEED=[
 {id:'s1',make:'Toyota',model:'Camry',year:2021,price:18500,km:42000,fuel:'Petrol',trans:'Automatic',body:'Sedan',color:'#F1F0EC',city:'Erbil',seller:'Karwan',phone:'+9647500000001',desc:'One owner, full service history. Clean inside and out, never been in an accident. Just had new tires.',t:now-1*day},
 {id:'s2',make:'Hyundai',model:'Tucson',year:2020,price:21900,km:58000,fuel:'Petrol',trans:'Automatic',body:'SUV',color:'#3170FF',city:'Sulaymaniyah',seller:'Shnyar',phone:'+9647700000002',desc:'Family SUV in great shape. Panoramic roof, leather seats, reverse camera. Selling because we are moving abroad.',t:now-2*day},
 {id:'s3',make:'Kia',model:'Rio',year:2019,price:9800,km:71000,fuel:'Petrol',trans:'Manual',body:'Hatchback',color:'#D7263D',city:'Duhok',seller:'Dilan',phone:'+9647510000003',desc:'Fun and economical city car. Perfect first car — very low fuel use and cheap to insure.',t:now-3*day},
 {id:'s4',make:'Ford',model:'F-150',year:2018,price:27500,km:96000,fuel:'Petrol',trans:'Automatic',body:'Pickup',color:'#2A2E38',city:'Baghdad',seller:'Omar',phone:'+9647800000004',desc:'Powerful and reliable work truck. Bed liner, tow package, and fresh oil change.',t:now-4*day},
 {id:'s5',make:'Tesla',model:'Model 3',year:2022,price:31900,km:24000,fuel:'Electric',trans:'Automatic',body:'Sedan',color:'#AEB4BF',city:'Erbil',seller:'Hana',phone:'+9647500000005',desc:'Long-range model with autopilot. Battery health excellent. Charging cable included.',t:now-5*day},
 {id:'s6',make:'Nissan',model:'Sunny',year:2016,price:6200,km:128000,fuel:'Petrol',trans:'Automatic',body:'Sedan',color:'#707887',city:'Kirkuk',seller:'Ali',phone:'+9647720000006',desc:'Honest old faithful. Runs perfectly, AC is ice cold. Priced to sell quickly.',t:now-6*day},
 {id:'s7',make:'Honda',model:'CR-V',year:2019,price:19200,km:67000,fuel:'Hybrid',trans:'Automatic',body:'SUV',color:'#2E9162',city:'Sulaymaniyah',seller:'Lana',phone:'+9647700000007',desc:'Spacious hybrid SUV, super smooth to drive and very light on fuel. Always garaged.',t:now-8*day},
 {id:'s8',make:'Volkswagen',model:'Golf',year:2017,price:11400,km:89000,fuel:'Diesel',trans:'Manual',body:'Hatchback',color:'#FF5B2E',city:'Duhok',seller:'Rebin',phone:'+9647510000008',desc:'Sporty diesel hatch with plenty of life left. New clutch last year, books and spare key included.',t:now-9*day},
 {id:'s9',make:'Toyota',model:'Hilux',year:2020,price:29800,km:51000,fuel:'Diesel',trans:'Manual',body:'Pickup',color:'#F1F0EC',city:'Basra',seller:'Hassan',phone:'+9647800000009',desc:'Legendary toughness. Double cab, 4x4, serviced on schedule by the dealer.',t:now-11*day}
];
const store={
  get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch{return d}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v));return true}catch{return false}}
};
/* ---------- validation: every stored/entered listing is rebuilt from whitelisted fields ---------- */
const FUELS=['Petrol','Diesel','Hybrid','Electric'],TRANS=['Automatic','Manual'];
const HEX=/^#[0-9a-f]{6}$/i,PHONE=/^\+?[0-9][0-9 ()\-]{5,18}$/,IMG=/^data:image\/jpeg;base64,[A-Za-z0-9+\/]+=*$/,ID=/^[us][a-z0-9]{1,12}$/;
const txt=(v,n)=>String(v??'').replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,n);
const int=(v,lo,hi)=>{v=Math.round(+v);return Number.isFinite(v)&&v>=lo&&v<=hi?v:null};
function clean(c){
  if(!c||typeof c!=='object'||!ID.test(String(c.id)))return null;
  const ph=txt(c.phone,20);
  const o={id:String(c.id),make:txt(c.make,30),model:txt(c.model,40),year:int(c.year,1970,2027),price:int(c.price,100,1e7),km:int(c.km,0,2e6),
    fuel:FUELS.includes(c.fuel)?c.fuel:null,trans:TRANS.includes(c.trans)?c.trans:null,body:Object.hasOwn(SHAPES,c.body)?c.body:null,
    color:HEX.test(c.color)?c.color:null,city:txt(c.city,40),seller:txt(c.seller,40),phone:PHONE.test(ph)?ph:null,desc:txt(c.desc,600),
    photos:(Array.isArray(c.photos)?c.photos:[]).filter(p=>typeof p==='string'&&p.length<450000&&IMG.test(p)).slice(0,4),t:int(c.t,0,4e12)||Date.now()};
  if(!o.make||!o.model||!o.city||!o.seller)return null;
  return Object.values(o).some(v=>v===null)?null:o;
}
const rawMine=store.get('sayara.mine',[]),rawFavs=store.get('sayara.favs',[]);
let mine=(Array.isArray(rawMine)?rawMine:[]).map(clean).filter(Boolean).slice(0,20).map(c=>({...c,mine:true}));
let favs=new Set((Array.isArray(rawFavs)?rawFavs:[]).filter(i=>typeof i==='string'&&ID.test(i)));
const all=()=>[...mine,...SEED];
const byId=id=>all().find(c=>c.id===id);
const F={q:'',make:'',body:'',max:'',sort:'new'};

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const usd=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const num=n=>new Intl.NumberFormat('en-US').format(n);
const title=c=>`${c.make} ${c.model}`;
function toast(msg){const t=$('#toast');t.innerHTML=I.check+esc(msg);t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),2600)}
function media(c,big){
  const ph=c.photos&&c.photos[0];
  return `<div class="media" data-c="${esc(c.color)}">${ph?`<img src="${ph}" alt="${esc(title(c))}" loading="lazy">`:carSVG(c.body,c.color)}</div>`;
}

/* ---------- card + grid ---------- */
function card(c,i){
  const f=favs.has(c.id);
  return `<article class="card" data-id="${c.id}" data-d="${Math.min(i,12)*45}" tabindex="0" aria-label="${esc(title(c))}, ${usd(c.price)}">
    <div class="media-wrap">${media(c)}<span class="tag">${c.year}</span>${c.mine?'<span class="tag mine">Your listing</span>':''}
    <button class="fav" data-act="fav" aria-pressed="${f}" aria-label="${f?'Remove from':'Add to'} favorites">${I.heart}</button></div>
    <div class="card-b">
      <div class="row"><h3>${esc(title(c))}</h3><span class="price">${usd(c.price)}</span></div>
      <div class="meta"><span>${I.gauge}${num(c.km)} km</span><span>${I.fuel}${esc(c.fuel)}</span><span>${I.gear}${esc(c.trans)}</span></div>
      <div class="card-f"><span class="loc">${I.pin}${esc(c.city)}</span><button class="share" data-act="share" aria-label="Share ${esc(title(c))}">${I.share}</button></div>
    </div></article>`;
}
function filtered(){
  let l=all().filter(c=>{
    const q=F.q.trim().toLowerCase();
    if(q&&!`${c.make} ${c.model} ${c.city} ${c.year} ${c.body}`.toLowerCase().includes(q))return false;
    if(F.make&&c.make!==F.make)return false;
    if(F.body&&c.body!==F.body)return false;
    if(F.max&&c.price>+F.max)return false;
    return true});
  const s={new:(a,b)=>b.t-a.t,low:(a,b)=>a.price-b.price,high:(a,b)=>b.price-a.price,year:(a,b)=>b.year-a.year,km:(a,b)=>a.km-b.km}[F.sort];
  return l.sort(s);
}
function render(){
  const l=filtered();
  $('#count').textContent=`${l.length} ${l.length===1?'car':'cars'} found`;
  $('#grid').innerHTML=l.length?l.map(card).join(''):`<div class="empty">${carSVG('Hatchback','#AEB4BF')}<h3>No cars match yet</h3><p>Try removing a filter — or be the first to list one like it.</p><button class="btn btn-primary" data-act="reset">Clear filters</button></div>`;
  $('#liveCount').textContent=`${all().length} cars`;
  const n=favs.size,b=$('#favCount');b.hidden=!n;b.textContent=n;
  $('#bodyChips').querySelectorAll('.chip').forEach(ch=>ch.setAttribute('aria-pressed',String((ch.dataset.body||'')===F.body)));
}
function fillFilters(){
  const makes=[...new Set(all().map(c=>c.make))].sort();
  const mk=(sel,first)=>{const v=sel.value;sel.innerHTML=`<option value="">${first}</option>`+makes.map(m=>`<option>${esc(m)}</option>`).join('');sel.value=makes.includes(v)?v:''};
  mk($('#hMake'),'Any brand');mk($('#fMake'),'All brands');
}

/* ---------- favorites ---------- */
function saveFavs(){store.set('sayara.favs',[...favs])}
function toggleFav(id,btn){
  if(favs.has(id)){favs.delete(id);toast('Removed from favorites')}else{favs.add(id);toast('Saved to favorites');if(btn){btn.classList.add('pop');setTimeout(()=>btn.classList.remove('pop'),400)}}
  saveFavs();render();renderFavs();
  const d=$('#dDetail');if(d.open&&d.dataset.id===id)openDetail(id,true);
}
function renderFavs(){
  const l=[...favs].map(byId).filter(Boolean);
  $('#favList').innerHTML=l.length?l.map(c=>`<div class="mini" data-id="${c.id}">${media(c)}<div><h4>${esc(title(c))}</h4><div class="price">${usd(c.price)}</div><small>${c.year} · ${esc(c.city)}</small></div><button class="fav" data-act="fav" aria-pressed="true" aria-label="Remove from favorites">${I.heart}</button></div>`).join(''):`<div class="empty">${carSVG('SUV','#FF5B2E')}<h3>Nothing saved yet</h3><p>Tap the heart on any car to keep it here.</p></div>`;
}

/* ---------- share ---------- */
async function share(id){
  const c=byId(id);if(!c)return;
  const url=location.href.split('#')[0]+'#car='+id;
  const data={title:`${title(c)} on Sayara`,text:`${c.year} ${title(c)} — ${usd(c.price)} in ${c.city}`,url};
  try{
    if(navigator.share){await navigator.share(data);return}
    await navigator.clipboard.writeText(url);toast('Link copied — send it to a friend');
  }catch(e){if(e&&e.name==='AbortError')return;
    const ta=document.createElement('textarea');ta.value=url;document.body.append(ta);ta.select();try{document.execCommand('copy');toast('Link copied — send it to a friend')}catch{toast('Copy this link: '+url)}ta.remove()}
}

/* ---------- detail ---------- */
function openDetail(id,keep){
  const c=byId(id);if(!c)return;
  const d=$('#dDetail');d.dataset.id=id;
  const photos=c.photos&&c.photos.length?c.photos:null;
  const f=favs.has(id);
  const digits=String(c.phone).replace(/[^\d]/g,'');
  d.innerHTML=`<button class="x" data-close aria-label="Close">${I.x}</button>
  <div class="detail">
    <div class="gal">
      <div id="gMain">${media({...c,photos:photos&&[photos[0]]})}</div>
      ${photos&&photos.length>1?`<div class="thumbs">${photos.map((p,i)=>`<button data-th="${i}" aria-label="Photo ${i+1}" aria-current="${i===0}"><img src="${p}" alt=""></button>`).join('')}</div>`:''}
    </div>
    <div class="info">
      <div><span class="pill sm">${c.year} · ${esc(c.body)}</span></div>
      <h2>${esc(title(c))}</h2>
      <div class="price">${usd(c.price)}</div>
      <div class="specs">
        <div><small>Mileage</small><b>${num(c.km)} km</b></div><div><small>Fuel</small><b>${esc(c.fuel)}</b></div>
        <div><small>Gearbox</small><b>${esc(c.trans)}</b></div><div><small>Location</small><b>${esc(c.city)}</b></div>
      </div>
      ${c.desc?`<p class="desc">${esc(c.desc)}</p>`:''}
      <div class="seller"><div class="ava">${esc((c.seller||'?')[0].toUpperCase())}</div><div><b>${esc(c.seller)}</b><small>Private seller · ${esc(c.phone)}</small></div></div>
      <div class="actions">
        <a class="btn btn-primary" href="tel:${esc(c.phone.replace(/[^\d+]/g,''))}">${I.phone}Call</a>
        <a class="btn btn-dark" href="https://wa.me/${digits}" target="_blank" rel="noopener noreferrer">${I.chat}Message</a>
      </div>
      <div class="actions">
        <button class="btn btn-ghost" data-act="fav" aria-pressed="${f}"><span class="heart-s${f?' on':''}">${I.heart}</span>${f?'Saved':'Save'}</button>
        <button class="btn btn-ghost" data-act="share">${I.share}Share</button>
        ${c.mine?`<button class="btn btn-ghost danger" data-act="del">${I.trash}Delete</button>`:''}
      </div>
    </div></div>`;
  if(!d.open)d.showModal();
  history.replaceState(null,'','#car='+id);
}

/* ---------- sell ---------- */
let photos=[];
function resize(file){
  return new Promise((res,rej)=>{
    const img=new Image(),u=URL.createObjectURL(file);
    img.onload=()=>{const m=900,k=Math.min(1,m/Math.max(img.width,img.height)),cv=document.createElement('canvas');
      cv.width=img.width*k;cv.height=img.height*k;cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);URL.revokeObjectURL(u);res(cv.toDataURL('image/jpeg',.72))};
    img.onerror=rej;img.src=u});
}
function renderPrev(){
  $('#prev').innerHTML=photos.map((p,i)=>`<div><img src="${p}" alt="Photo ${i+1}"><button type="button" data-rm="${i}" aria-label="Remove photo">×</button></div>`).join('');
}
$('#fphotos').addEventListener('change',async e=>{
  /* only real jpeg/png/webp up to 12 MB; re-encoding through a canvas also strips EXIF/GPS data */
  for(const f of [...e.target.files]){
    if(photos.length>=4)break;
    if(!['image/jpeg','image/png','image/webp'].includes(f.type)||f.size>12e6){toast('Skipped a file — use JPG, PNG or WebP under 12 MB');continue}
    try{photos.push(await resize(f))}catch{toast('Could not read that image')}
  }
  e.target.value='';renderPrev();
});
$('#prev').addEventListener('click',e=>{const b=e.target.closest('[data-rm]');if(b){photos.splice(+b.dataset.rm,1);renderPrev()}});
$('#swatches').innerHTML=COLORS.map(([n,h],i)=>`<span><input type="radio" name="color" id="col${i}" value="${h}" ${i===0?'checked':''}><label for="col${i}" data-c="${h}" title="${n}"><span class="sr">${n}</span></label></span>`).join('');
$('#sellForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=new FormData(e.target),g=k=>String(f.get(k)||'').trim();
  const car=clean({id:'u'+Date.now().toString(36),make:g('make'),model:g('model'),year:g('year'),price:g('price'),km:g('km'),fuel:g('fuel'),trans:g('trans'),body:g('body'),color:g('color'),city:g('city'),seller:g('seller'),phone:g('phone'),desc:g('desc'),photos:[...photos],t:Date.now()});
  if(!car){toast('Please check the form — something looks invalid');return}
  if(mine.length>=20){toast('Limit reached: 20 listings per browser');return}
  const saved=[car,...mine.map(({mine:_,...r})=>r)];
  if(!store.set('sayara.mine',saved)){
    car.photos=[];if(!store.set('sayara.mine',[car,...mine.map(({mine:_,...r})=>r)])){toast('Storage is full — could not save');return}
    toast('Saved without photos (browser storage is full)');
  }
  mine=[{...car,mine:true},...mine];
  e.target.reset();photos=[];renderPrev();
  $('#dSell').close();fillFilters();
  Object.assign(F,{q:'',make:'',body:'',max:'',sort:'new'});syncControls();render();
  $('#browse').scrollIntoView();
  setTimeout(()=>toast('Your car is live on Sayara!'),350);
});
function deleteCar(id){
  if(!confirm('Delete this listing? This cannot be undone.'))return;
  mine=mine.filter(c=>c.id!==id);store.set('sayara.mine',mine.map(({mine:_,...r})=>r));
  favs.delete(id);saveFavs();$('#dDetail').close();fillFilters();render();renderFavs();toast('Listing deleted');
}

/* ---------- wiring ---------- */
function syncControls(){
  $('#q').value=F.q;$('#fMake').value=F.make;$('#fPrice').value=F.max;$('#fSort').value=F.sort;$('#hMake').value=F.make;$('#hPrice').value=F.max;
}
function init(){
  // dynamic styles are applied through the CSSOM (allowed by a strict CSP) instead of inline style="" attributes
  const dyn=n=>{if(n.nodeType!==1)return;const f=el=>{
    if(el.dataset.c&&HEX.test(el.dataset.c))el.style.setProperty('--c',el.dataset.c);
    if(el.dataset.d)el.style.animationDelay=(+el.dataset.d||0)+'ms'};
    f(n);n.querySelectorAll('[data-c],[data-d]').forEach(f)};
  new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(dyn))).observe(document.body,{childList:true,subtree:true});
  dyn($('#swatches')); // swatches are built before init() runs
  // icons
  $('#logoMark').innerHTML=$('#logoMark2').innerHTML=I.car;
  $('#heartIcon').innerHTML=I.heart;$('#plusIcon').innerHTML=I.plus;$('#sIcon').innerHTML=I.search;
  $('#hGo').innerHTML=I.search+'Search';$('#upIcon').innerHTML=I.up;
  $('#x1').innerHTML=$('#x2').innerHTML=I.x;
  $('#t1').innerHTML=I.shield+'Meet sellers directly';$('#t2').innerHTML=I.tag+'Free to list';$('#t3').innerHTML='<span class="heart-red">'+I.heart+'</span>Save &amp; share favorites';
  $('#fc1i').innerHTML=I.car;$('#fc2i').innerHTML=I.tag;
  $('#heroCar').innerHTML=carSVG('SUV','#FBFAF7').replace('aria-label','aria-hidden="true" data-x');
  $('#ctaArt').innerHTML=carSVG('Pickup','#FF5B2E').replace('<svg ','<svg class="art" ');
  $('#yr').textContent=new Date().getFullYear();
  // price options
  const po='<option value="">Any price</option>'+[5000,10000,15000,20000,30000,50000].map(p=>`<option value="${p}">Up to ${usd(p)}</option>`).join('');
  $('#fPrice').innerHTML=po;$('#hPrice').innerHTML=po.replace('Any price','Any price');
  // chips
  $('#bodyChips').innerHTML=[['','All cars',null],['Sedan','Sedan','Sedan'],['SUV','SUV','SUV'],['Hatchback','Hatchback','Hatchback'],['Pickup','Pickup','Pickup']]
    .map(([v,l,b])=>`<button class="chip" data-body="${v}" aria-pressed="${v===''}">${b?carSVG(b,'currentColor').replace(/<ellipse[^>]*>/,'').replace(/<defs>.*?<\/defs>/,'').replace(/fill="url\([^)]*\)"/g,'fill="none"'):''}${l}</button>`).join('');
  fillFilters();renderFavs();render();

  // theme
  const savedTheme=store.get('sayara.theme',null);
  const th=(savedTheme==='dark'||savedTheme==='light')?savedTheme:(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
  const setTheme=t=>{document.documentElement.dataset.theme=t;$('#themeBtn').innerHTML=t==='dark'?I.sun:I.moon;store.set('sayara.theme',t)};
  setTheme(th);$('#themeBtn').onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');

  // hero search
  $('#heroSearch').addEventListener('submit',e=>{e.preventDefault();F.make=$('#hMake').value;F.max=$('#hPrice').value;syncControls();render();$('#browse').scrollIntoView()});
  // filters
  $('#q').oninput=e=>{F.q=e.target.value;render()};
  $('#fMake').onchange=e=>{F.make=e.target.value;$('#hMake').value=F.make;render()};
  $('#fPrice').onchange=e=>{F.max=e.target.value;$('#hPrice').value=F.max;render()};
  $('#fSort').onchange=e=>{F.sort=e.target.value;render()};
  $('#bodyChips').onclick=e=>{const b=e.target.closest('.chip');if(b){F.body=b.dataset.body;render()}};

  // grid events
  $('#grid').addEventListener('click',e=>{
    const a=e.target.closest('[data-act]'),c=e.target.closest('.card');
    if(a&&a.dataset.act==='reset'){Object.assign(F,{q:'',make:'',body:'',max:''});syncControls();render();return}
    if(!c)return;const id=c.dataset.id;
    if(a&&a.dataset.act==='fav')return toggleFav(id,a);
    if(a&&a.dataset.act==='share')return share(id);
    openDetail(id);
  });
  $('#grid').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.classList.contains('card'))openDetail(e.target.dataset.id)});
  $('#favList').addEventListener('click',e=>{
    const m=e.target.closest('.mini');if(!m)return;
    if(e.target.closest('[data-act="fav"]'))return toggleFav(m.dataset.id);
    $('#dFav').close();openDetail(m.dataset.id);
  });
  $('#dDetail').addEventListener('click',e=>{
    const d=$('#dDetail'),id=d.dataset.id,a=e.target.closest('[data-act]'),t=e.target.closest('[data-th]');
    if(t){const c=byId(id);$('#gMain').innerHTML=media({...c,photos:[c.photos[+t.dataset.th]]});d.querySelectorAll('[data-th]').forEach(b=>b.setAttribute('aria-current',String(b===t)));return}
    if(!a)return;
    if(a.dataset.act==='fav')toggleFav(id);
    if(a.dataset.act==='share')share(id);
    if(a.dataset.act==='del')deleteCar(id);
  });
  $('#dDetail').addEventListener('close',()=>history.replaceState(null,'',location.pathname+location.search));

  // dialogs
  document.addEventListener('click',e=>{
    const d=e.target.closest('dialog');
    if(e.target.closest('[data-close]'))return d.close();
    if(e.target instanceof HTMLDialogElement)e.target.close();
  });
  const openSell=()=>$('#dSell').showModal();
  $('#sellBtn').onclick=$('#sellBtn2').onclick=openSell;
  $('#favBtn').onclick=()=>{renderFavs();$('#dFav').showModal()};

  // nav shadow
  addEventListener('scroll',()=>$('#nav').classList.toggle('scrolled',scrollY>8),{passive:true});
  // deep link
  const m=location.hash.match(/car=([\w-]+)/);if(m&&byId(m[1]))openDetail(m[1]);
}
init();
