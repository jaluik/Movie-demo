(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10696bcb"],{"0195":function(t,n,r){r("b0e1"),t.exports=r("836e").Array.isArray},"04be":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"067f":function(t,n,r){t.exports=r("3a22")},"0763":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"0811":function(t,n,r){var e=r("419b"),i=r("0902")("iterator"),o=r("9191");t.exports=r("836e").getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},"0902":function(t,n,r){var e=r("6629")("wks"),i=r("16ef"),o=r("a051").Symbol,c="function"==typeof o,u=t.exports=function(t){return e[t]||(e[t]=c&&o[t]||(c?o:i)("Symbol."+t))};u.store=e},"0bc6":function(t,n,r){var e=r("38cc");t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},"16ef":function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},"1a9a":function(t,n,r){var e=r("fdb5"),i=r("3202"),o=r("ec18");t.exports=function(t){return function(n,r,c){var u,a=e(n),s=i(a.length),f=o(c,s);if(t&&r!=r){while(s>f)if(u=a[f++],u!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}}},"1b3c":function(t,n,r){r("98be"),r("4d6c"),t.exports=r("d317")},"1c04":function(t,n,r){var e=r("38b2"),i=r("7182"),o=r("ba15")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},"1d10":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"26ef":function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},3202:function(t,n,r){var e=r("69fd"),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},"38b2":function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},"38c8":function(t,n,r){var e=r("69fd"),i=r("04be");t.exports=function(t){return function(n,r){var o,c,u=String(i(n)),a=e(r),s=u.length;return a<0||a>=s?t?"":void 0:(o=u.charCodeAt(a),o<55296||o>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):o:t?u.slice(a,a+2):c-56320+(o-55296<<10)+65536)}}},"38cc":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},3967:function(t,n,r){var e=r("4cf4").f,i=r("38b2"),o=r("0902")("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},"3a22":function(t,n,r){var e=r("4cf4"),i=r("0763");t.exports=r("690a")?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},"419b":function(t,n,r){var e=r("6dd6"),i=r("0902")("toStringTag"),o="Arguments"==e(function(){return arguments}()),c=function(t,n){try{return t[n]}catch(r){}};t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=c(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},"471d":function(t,n,r){var e=r("a051"),i=r("836e"),o=r("8232"),c=r("3a22"),u=r("38b2"),a="prototype",s=function(t,n,r){var f,l,d,p=t&s.F,v=t&s.G,y=t&s.S,h=t&s.P,b=t&s.B,g=t&s.W,x=v?i:i[n]||(i[n]={}),m=x[a],w=v?e:y?e[n]:(e[n]||{})[a];for(f in v&&(r=n),r)l=!p&&w&&void 0!==w[f],l&&u(x,f)||(d=l?w[f]:r[f],x[f]=v&&"function"!=typeof w[f]?r[f]:b&&l?o(d,e):g&&w[f]==d?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n[a]=t[a],n}(d):h&&"function"==typeof d?o(Function.call,d):d,h&&((x.virtual||(x.virtual={}))[f]=d,t&s.R&&m&&!m[f]&&c(m,f,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"4cf4":function(t,n,r){var e=r("0bc6"),i=r("54b2"),o=r("eb10"),c=Object.defineProperty;n.f=r("690a")?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return c(t,n,r)}catch(u){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},"4d6c":function(t,n,r){"use strict";var e=r("38c8")(!0);r("750d")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},"4df6":function(t,n){t.exports=!0},"4f1d":function(t,n,r){var e=r("c540"),i=r("b59a");t.exports=Object.keys||function(t){return e(t,i)}},"54b2":function(t,n,r){t.exports=!r("690a")&&!r("7f67")(function(){return 7!=Object.defineProperty(r("d819")("div"),"a",{get:function(){return 7}}).a})},"5ab7":function(t,n,r){var e=r("836e"),i=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},"5fdf":function(t,n,r){var e=r("6dd6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"605f":function(t,n,r){"use strict";var e=r("8070"),i=r("0763"),o=r("3967"),c={};r("3a22")(c,r("0902")("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(c,{next:i(1,r)}),o(t,n+" Iterator")}},6629:function(t,n,r){var e=r("836e"),i=r("a051"),o="__core-js_shared__",c=i[o]||(i[o]={});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r("4df6")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"690a":function(t,n,r){t.exports=!r("7f67")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},"69fd":function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},"6c85":function(t,n,r){t.exports=r("0195")},"6dd6":function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},7182:function(t,n,r){var e=r("04be");t.exports=function(t){return Object(e(t))}},"750d":function(t,n,r){"use strict";var e=r("4df6"),i=r("471d"),o=r("067f"),c=r("3a22"),u=r("9191"),a=r("605f"),s=r("3967"),f=r("1c04"),l=r("0902")("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",y="values",h=function(){return this};t.exports=function(t,n,r,b,g,x,m){a(r,n,b);var w,S,_,L=function(t){if(!d&&t in k)return k[t];switch(t){case v:return function(){return new r(this,t)};case y:return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=n+" Iterator",T=g==y,C=!1,k=t.prototype,j=k[l]||k[p]||g&&k[g],A=j||L(g),P=g?T?L("entries"):A:void 0,M="Array"==n&&k.entries||j;if(M&&(_=f(M.call(new t)),_!==Object.prototype&&_.next&&(s(_,O,!0),e||"function"==typeof _[l]||c(_,l,h))),T&&j&&j.name!==y&&(C=!0,A=function(){return j.call(this)}),e&&!m||!d&&!C&&k[l]||c(k,l,A),u[n]=A,u[O]=h,g)if(w={values:T?A:L(y),keys:x?A:L(v),entries:P},m)for(S in w)S in k||o(k,S,w[S]);else i(i.P+i.F*(d||C),n,w);return w}},7608:function(t,n,r){var e=r("a051").document;t.exports=e&&e.documentElement},"77fe":function(t,n,r){t.exports=r("1b3c")},"78a5":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"city_body"},[r("div",{staticClass:"city_list"},[t.isLoading?r("loading"):r("scroller",{ref:"city_list"},[r("div",[r("div",{staticClass:"city_hot"},[r("h2",[t._v("热门城市")]),r("ul",{staticClass:"clearfix"},t._l(t.hotList,function(n,e){return r("li",{key:e,on:{tap:function(r){return t.handleToCity(n.nm,n.id)}}},[t._v(t._s(n.nm))])}),0)]),r("div",{ref:"city_sort",staticClass:"city_sort"},t._l(t.cityList,function(n){return r("div",{key:n.index},[r("h2",[t._v(t._s(n.index))]),r("ul",t._l(n.list,function(n){return r("li",{key:n.id,on:{tap:function(r){return t.handleToCity(n.nm,n.id)}}},[t._v(t._s(n.nm))])}),0)])}),0)])])],1),r("div",{staticClass:"city_index"},[r("ul",t._l(t.cityList,function(n,e){return r("li",{key:n.id,on:{toustart:function(n){return t.toScrollTop(e)}}},[t._v(t._s(n.index))])}),0)])])},i=[],o=(r("ab56"),r("cc80")),c=r.n(o),u=r("6c85"),a=r.n(u);function s(t){if(a()(t))return t}var f=r("77fe"),l=r.n(f);function d(t,n){var r=[],e=!0,i=!1,o=void 0;try{for(var c,u=l()(t);!(e=(c=u.next()).done);e=!0)if(r.push(c.value),n&&r.length===n)break}catch(a){i=!0,o=a}finally{try{e||null==u["return"]||u["return"]()}finally{if(i)throw o}}return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function v(t,n){return s(t)||d(t,n)||p()}var y={name:"City",data:function(){return{hotList:[],cityList:[],isLoading:!0}},mounted:function(){var t=this,n=window.localStorage.getItem("cityList"),r=window.localStorage.getItem("hotList");n&&r?(this.cityList=JSON.parse(n),this.hotList=JSON.parse(r),this.isLoading=!1):this.axios.get("/api/cityList").then(function(n){if("ok"==n.data.msg){var r=n.data.data.cities,e=t.formatCitylist(r),i=v(e,2);t.cityList=i[0],t.hotList=i[1],t.isLoading=!1,window.localStorage.setItem("cityList",c()(t.cityList)),window.localStorage.setItem("hotList",c()(t.hotList))}})},methods:{formatCitylist:function(t){for(var n=[],r=[],e=0;e<t.length;e++){1==t[e].isHot&&r.push({nm:t[e].nm,id:t[e].id});var i=t[e].py.substring(0,1).toUpperCase();if(c(i))for(var o=0;o<n.length;o++)n[o].index==i&&n[o].list.push({nm:t[e].nm,id:t[e].id});else n.push({index:i,list:[{nm:t[e].nm,id:t[e].id}]})}function c(t){for(var r=0;r<n.length;r++)if(n[r].index==t)return!0;return!1}return n.sort(function(t,n){return t.index>n.index?1:-1}),[n,r]},toScrollTop:function(t){var n=this.$refs.city_sort.getElementsByTagName("h2");this.$refs.city_list.toScrollTop(-n[t].offsetTop)},handleToCity:function(t,n){this.$store.commit("city/CITY_INFO",{nm:t,id:n}),window.localStorage.setItem("nowNm",t),window.localStorage.setItem("nowId",n),this.$router.go(-1)}}},h=y,b=(r("ddbd"),r("17cc")),g=Object(b["a"])(h,e,i,!1,null,"b75eae6a",null);n["default"]=g.exports},"7f3f":function(t,n,r){"use strict";var e=r("9b64"),i=r("26ef"),o=r("9191"),c=r("fdb5");t.exports=r("750d")(Array,"Array",function(t,n){this._t=c(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},"7f67":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},8070:function(t,n,r){var e=r("0bc6"),i=r("cc91"),o=r("b59a"),c=r("ba15")("IE_PROTO"),u=function(){},a="prototype",s=function(){var t,n=r("d819")("iframe"),e=o.length,i="<",c=">";n.style.display="none",r("7608").appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),s=t.F;while(e--)delete s[a][o[e]];return s()};t.exports=Object.create||function(t,n){var r;return null!==t?(u[a]=e(t),r=new u,u[a]=null,r[c]=t):r=s(),void 0===n?r:i(r,n)}},8232:function(t,n,r){var e=r("1d10");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},"836e":function(t,n){var r=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=r)},9191:function(t,n){t.exports={}},"98be":function(t,n,r){r("7f3f");for(var e=r("a051"),i=r("3a22"),o=r("9191"),c=r("0902")("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<u.length;a++){var s=u[a],f=e[s],l=f&&f.prototype;l&&!l[c]&&i(l,c,s),o[s]=o.Array}},"9b64":function(t,n){t.exports=function(){}},a051:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},ab56:function(t,n,r){"use strict";var e=r("2d2c"),i=r("9102"),o=r("aa91"),c=r("201d"),u=[].sort,a=[1,2,3];e(e.P+e.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!r("b139")(u)),"Array",{sort:function(t){return void 0===t?u.call(o(this)):u.call(o(this),i(t))}})},b0e1:function(t,n,r){var e=r("471d");e(e.S,"Array",{isArray:r("5fdf")})},b139:function(t,n,r){"use strict";var e=r("201d");t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},b59a:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},ba15:function(t,n,r){var e=r("6629")("keys"),i=r("16ef");t.exports=function(t){return e[t]||(e[t]=i(t))}},c540:function(t,n,r){var e=r("38b2"),i=r("fdb5"),o=r("1a9a")(!1),c=r("ba15")("IE_PROTO");t.exports=function(t,n){var r,u=i(t),a=0,s=[];for(r in u)r!=c&&e(u,r)&&s.push(r);while(n.length>a)e(u,r=n[a++])&&(~o(s,r)||s.push(r));return s}},cc80:function(t,n,r){t.exports=r("5ab7")},cc91:function(t,n,r){var e=r("4cf4"),i=r("0bc6"),o=r("4f1d");t.exports=r("690a")?Object.defineProperties:function(t,n){i(t);var r,c=o(n),u=c.length,a=0;while(u>a)e.f(t,r=c[a++],n[r]);return t}},d317:function(t,n,r){var e=r("0bc6"),i=r("0811");t.exports=r("836e").getIterator=function(t){var n=i(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return e(n.call(t))}},d697:function(t,n,r){},d819:function(t,n,r){var e=r("38cc"),i=r("a051").document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},ddbd:function(t,n,r){"use strict";var e=r("d697"),i=r.n(e);i.a},eb10:function(t,n,r){var e=r("38cc");t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},ec18:function(t,n,r){var e=r("69fd"),i=Math.max,o=Math.min;t.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},ed52:function(t,n,r){var e=r("6dd6");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},fdb5:function(t,n,r){var e=r("ed52"),i=r("04be");t.exports=function(t){return e(i(t))}}}]);
//# sourceMappingURL=chunk-10696bcb.a19abdbd.js.map