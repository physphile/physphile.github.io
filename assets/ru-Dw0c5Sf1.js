import{h as D,i as g}from"./index-dsUf1k35.js";function x(i,m){for(var n=0;n<m.length;n++){const r=m[n];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in i)){const o=Object.getOwnPropertyDescriptor(r,e);o&&Object.defineProperty(i,e,o.get?o:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},b=f.exports,v;function j(){return v||(v=1,function(i,m){(function(n,r){i.exports=r(D())})(b,function(n){function r(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var e=r(n),o="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),d="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),M="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),c="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),y=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function s(t,u,Y){var _,a;return Y==="m"?u?"минута":"минуту":t+" "+(_=+t,a={mm:u?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[Y].split("_"),_%10==1&&_%100!=11?a[0]:_%10>=2&&_%10<=4&&(_%100<10||_%100>=20)?a[1]:a[2])}var l=function(t,u){return y.test(u)?o[t.month()]:d[t.month()]};l.s=d,l.f=o;var p=function(t,u){return y.test(u)?M[t.month()]:c[t.month()]};p.s=c,p.f=M;var h={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:p,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function(t){return t},meridiem:function(t){return t<4?"ночи":t<12?"утра":t<17?"дня":"вечера"}};return e.default.locale(h,null,!0),h})}(f)),f.exports}var L=j();const S=g(L),w=x({__proto__:null,default:S},[L]);export{w as r};
