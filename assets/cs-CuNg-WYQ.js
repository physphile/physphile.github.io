import{h as y,i as M}from"./index-dsUf1k35.js";function h(_,d){for(var i=0;i<d.length;i++){const o=d[i];if(typeof o!="string"&&!Array.isArray(o)){for(const a in o)if(a!=="default"&&!(a in _)){const u=Object.getOwnPropertyDescriptor(o,a);u&&Object.defineProperty(_,a,u.get?u:{enumerable:!0,get:()=>o[a]})}}}return Object.freeze(Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}},Y=c.exports,p;function v(){return p||(p=1,function(_,d){(function(i,o){_.exports=o(y())})(Y,function(i){function o(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var a=o(i);function u(e){return e>1&&e<5&&~~(e/10)!=1}function t(e,r,f,n){var s=e+" ";switch(f){case"s":return r||n?"pár sekund":"pár sekundami";case"m":return r?"minuta":n?"minutu":"minutou";case"mm":return r||n?s+(u(e)?"minuty":"minut"):s+"minutami";case"h":return r?"hodina":n?"hodinu":"hodinou";case"hh":return r||n?s+(u(e)?"hodiny":"hodin"):s+"hodinami";case"d":return r||n?"den":"dnem";case"dd":return r||n?s+(u(e)?"dny":"dní"):s+"dny";case"M":return r||n?"měsíc":"měsícem";case"MM":return r||n?s+(u(e)?"měsíce":"měsíců"):s+"měsíci";case"y":return r||n?"rok":"rokem";case"yy":return r||n?s+(u(e)?"roky":"let"):s+"lety"}}var m={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,yearStart:4,ordinal:function(e){return e+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"za %s",past:"před %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};return a.default.locale(m,null,!0),m})}(c)),c.exports}var l=v();const k=M(l),L=h({__proto__:null,default:k},[l]);export{L as c};
