(function(t){function e(e){for(var o,u,c=e[0],s=e[1],i=e[2],d=0,p=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/lorem-html/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},1:function(t,e){},"17f2":function(t,e,n){"use strict";var o=n("9a00"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Choose",{on:{add_config:t.addConfig}}),n("Main",{attrs:{counters:t.values}}),n("Footer")],1)},a=[],u=(n("d3b7"),n("ddb0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"choose"},[n("div",{staticClass:"choose-content"},[n("button",{staticClass:"random",on:{click:function(e){return t.randomize()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24",fill:"none",stroke:"#153047","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}},[n("path",{attrs:{d:"M16 3h5v5M4 20L20.2 3.8M21 16v5h-5M15 15l5.1 5.1M4 4l5 5"}})]),t._v(" Randomizzzze ")]),t._l(t.values,(function(e,o){return n("button",{key:o,staticClass:"component",on:{click:function(n){return t.add(e)}}},[t._v(" "+t._s(o)),n("span",[t._v(t._s(e.count))])])}))],2)])}),c=[],s={name:"Choose",data:function(){return{values:{p:{count:0,values:{}},pre:{count:0,values:{}},h1:{count:0,values:{}},h2:{count:0,values:{}},h3:{count:0,values:{}},ol:{count:0,values:{}},ul:{count:0,values:{}},blockquote:{count:0,values:{}},table:{count:0,values:{}}}}},methods:{add:function(t){5===t.count?t.count=0:t.count+=1,this.emitToParent()},emitToParent:function(){var t=JSON.stringify(this.values);this.$emit("add_config",t)},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))},randomize:function(){this.values={p:{count:this.getRandomInt(5),values:{}},pre:{count:this.getRandomInt(5),value:{}},h1:{count:this.getRandomInt(5),values:{}},h2:{count:this.getRandomInt(5),values:{}},h3:{count:this.getRandomInt(5),values:{}},ol:{count:this.getRandomInt(5),values:{}},ul:{count:this.getRandomInt(5),values:{}},blockquote:{count:this.getRandomInt(5),values:{}},table:{count:this.getRandomInt(5),values:{}}},this.emitToParent()}},mounted:function(){this.randomize()}},i=s,l=(n("e8cd"),n("2877")),d=Object(l["a"])(i,u,c,!1,null,"089ec086",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"code"},[n("highlight-code",{attrs:{lang:"xml"}},[t._v(" "+t._s(t.content)+" ")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{id:"code-copy"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})],1),n("div",{staticClass:"escaped"},[n("span",{attrs:{id:"rendered"},domProps:{innerHTML:t._s(t.content)}})])])},m=[],v=(n("a15b"),n("99af"),n("4160"),n("b64b"),n("159b"),n("7c22"));function h(t){for(var e={count:1,format:"html",units:"paragraph",sentenceLowerBound:10,sentenceUpperBound:20},n=[],o=0;o<t;o++)n.push(Object(v["loremIpsum"])(e));return n}function b(t){for(var e={count:1,format:"plain",units:"paragraph",sentenceLowerBound:5,sentenceUpperBound:10},n=[],o=0;o<t;o++)n.push("<pre>"+Object(v["loremIpsum"])(e)+"</pre>");return n}function g(t,e,n,o){for(var r={count:1,format:"plain",units:"sentence",sentenceLowerBound:n,sentenceUpperBound:o},a=[],u=0;u<e;u++)a.push("<"+t+">"+Object(v["loremIpsum"])(r)+"</"+t+">");return a}function O(t,e){for(var n={count:1,format:"plain",units:"sentence",sentenceLowerBound:2,sentenceUpperBound:4},o=[],r=0;r<e;r++){for(var a="",u=0;u<5;u++)a+="<li>"+Object(v["loremIpsum"])(n)+"</li>";o.push("<"+t+">"+a+"</"+t+">")}return o}function y(t){for(var e={count:1,format:"plain",units:"paragraph",sentenceLowerBound:5,sentenceUpperBound:10},n=[],o=0;o<t;o++)n.push("<blockquote>"+Object(v["loremIpsum"])(e)+"</blockquote>");return n}function j(t){for(var e={count:1,format:"plain",units:"sentence",sentenceLowerBound:1,sentenceUpperBound:4},n=[],o=0;o<t;o++){var r=[];r.push("<table>","<tr>","<th>"+Object(v["loremIpsum"])(e)+"</th>","<th>"+Object(v["loremIpsum"])(e)+"</th>","<th>"+Object(v["loremIpsum"])(e)+"</th>","<th>"+Object(v["loremIpsum"])(e)+"</th>","</tr>","<tr>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","</tr>","<tr>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","<td>"+Object(v["loremIpsum"])(e)+"</td>","</tr>","</table>"),n.push(r.join(""))}return n}function w(t){var e=Object.keys(t);return e.forEach((function(e){var n=t[e],o=n.count;switch(e){case"p":n.values=h(o);break;case"pre":n.values=b(o);break;case"h1":n.values=g(e,o,3,6);break;case"h2":n.values=g(e,o,4,8);break;case"h3":n.values=g(e,o,5,10);break;case"ol":n.values=O(e,o,5,10);break;case"ul":n.values=O(e,o,5,10);break;case"blockquote":n.values=y(o);break;case"table":n.values=j(o);break;default:console.error("Aucune balise correspondante");break}t[e]=n})),k(t)}function k(t){var e=Object.keys(t),n=[];return e.forEach((function(e){var o=t[e];n=n.concat(o.values)})),I(n)}function I(t){return t.sort((function(){return Math.random()-.5}))}var _=n("fc4f"),C={name:"Main",props:["counters"],data:function(){return{content:{},html:"<p>lololol</p><ul><li>azeqsd</li><li>wc qzdqd</li><li>sfsefsfsf</li></ul>"}},watch:{immediate:!0,counters:function(t){var e=JSON.parse(t),n=w(e);this.content=_(n.join(""))}}},M=C,x=(n("17f2"),Object(l["a"])(M,f,m,!1,null,null,null)),B=x.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("button",{staticClass:"copy",on:{click:function(e){return t.copyCode()}}},[t._v("Copy HTML"),n("span",{attrs:{id:"animation"}},[t._v("👍")])])])},R=[],L={name:"Footer",methods:{copyCode:function(){var t=document.getElementById("code-copy"),e=document.getElementById("animation");t.style.display="block",t.select();try{var n=document.execCommand("copy");n&&e.classList.add("animation")}catch(o){alert("Oops, unable to copy")}t.style.display="none",window.getSelection().removeAllRanges(),setTimeout((function(){e.classList.remove("animation")}),1e3)}}},z=L,T=(n("c9644"),Object(l["a"])(z,P,R,!1,null,"1f1ec889",null)),q=T.exports,E={name:"app",components:{Main:B,Choose:p,Footer:q},data:function(){return{values:{}}},methods:{addConfig:function(t){this.values=t}}},S=E,U=(n("034f"),Object(l["a"])(S,r,a,!1,null,null,null)),$=U.exports,J=n("c964"),F=n("8dcb"),N=n.n(F);n("9f21");o["a"].config.productionTip=!1,o["a"].use(J["a"],{languages:{xml:N.a}}),new o["a"]({render:function(t){return t($)}}).$mount("#app")},"85ec":function(t,e,n){},"8cda":function(t,e,n){},"9a00":function(t,e,n){},c9644:function(t,e,n){"use strict";var o=n("fb28"),r=n.n(o);r.a},e8cd:function(t,e,n){"use strict";var o=n("8cda"),r=n.n(o);r.a},fb28:function(t,e,n){}});
//# sourceMappingURL=app.35489369.js.map