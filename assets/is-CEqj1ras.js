import{h as v,i as b}from"./index-dsUf1k35.js";function L(a,o){for(var u=0;u<o.length;u++){const t=o[u];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in a)){const s=Object.getOwnPropertyDescriptor(t,n);s&&Object.defineProperty(a,n,s.get?s:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}},x=m.exports,l;function D(){return l||(l=1,function(a,o){(function(u,t){a.exports=t(v())})(x,function(u){function t(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var n=t(u),s={s:["nokkrar sekúndur","nokkrar sekúndur","nokkrum sekúndum"],m:["mínúta","mínútu","mínútu"],mm:["mínútur","mínútur","mínútum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","dögum"],M:["mánuður","mánuð","mánuði"],MM:["mánuðir","mánuði","mánuðum"],y:["ár","ár","ári"],yy:["ár","ár","árum"]};function r(e,k,p,g){var M=function(i,c,y,Y){var h=Y?0:y?1:2,j=i.length===2&&c%10==1?i[0]:i,_=s[j][h];return i.length===1?_:"%d "+_}(p,e,g,k);return M.replace("%d",e)}var d={name:"is",weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),weekStart:1,weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),ordinal:function(e){return e},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r}};return n.default.locale(d,null,!0),d})}(m)),m.exports}var f=D();const S=b(f),O=L({__proto__:null,default:S},[f]);export{O as i};
