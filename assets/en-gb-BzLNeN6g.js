import{h as m,i as f}from"./index-dsUf1k35.js";function p(o,s){for(var a=0;a<s.length;a++){const e=s[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in o)){const n=Object.getOwnPropertyDescriptor(e,t);n&&Object.defineProperty(o,t,n.get?n:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var u={exports:{}},l=u.exports,i;function c(){return i||(i=1,function(o,s){(function(a,e){o.exports=e(m())})(l,function(a){function e(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var t=e(a),n={name:"en-gb",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekStart:1,yearStart:4,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},ordinal:function(r){var _=["th","st","nd","rd"],d=r%100;return"["+r+(_[(d-20)%10]||_[d]||_[0])+"]"}};return t.default.locale(n,null,!0),n})}(u)),u.exports}var y=c();const M=f(y),h=p({__proto__:null,default:M},[y]);export{h as e};
