import{h as k,i as w}from"./index-dsUf1k35.js";function g(o,c){for(var n=0;n<c.length;n++){const t=c[n];if(typeof t!="string"&&!Array.isArray(t)){for(const i in t)if(i!=="default"&&!(i in o)){const r=Object.getOwnPropertyDescriptor(t,i);r&&Object.defineProperty(o,i,r.get?r:{enumerable:!0,get:()=>t[i]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}},h=u.exports,f;function Y(){return f||(f=1,function(o,c){(function(n,t){o.exports=t(k())})(h,function(n){function t(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var i=t(n);function r(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function a(e,s,M){var _=e+" ";switch(M){case"m":return s?"minuta":"minutę";case"mm":return _+(r(e)?"minuty":"minut");case"h":return s?"godzina":"godzinę";case"hh":return _+(r(e)?"godziny":"godzin");case"MM":return _+(r(e)?"miesiące":"miesięcy");case"yy":return _+(r(e)?"lata":"lat")}}var p="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),m="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),z=/D MMMM/,l=function(e,s){return z.test(s)?p[e.month()]:m[e.month()]};l.s=m,l.f=p;var d={name:"pl",weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),months:l,monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),ordinal:function(e){return e+"."},weekStart:1,yearStart:4,relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"}};return i.default.locale(d,null,!0),d})}(u)),u.exports}var y=Y();const L=w(y),j=g({__proto__:null,default:L},[y]);export{j as p};
