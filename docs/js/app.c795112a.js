(function(t){function e(e){for(var n,s,i=e[0],o=e[1],c=e[2],d=0,f=[];d<i.length;d++)s=i[d],r[s]&&f.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},l=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0f43":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"mr-4 mb-4"},[a("div",{staticClass:"mb-2 w-40 h-40 bg-gray-200 border-gray-400",style:{borderWidth:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("border-"+n),value:e}})],1)}),0)},r=[],l=a("2bcf"),s=a("ed08"),i={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:s["b"]}},o=i,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports},"1e22":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-200"},[a("div",{staticClass:"bg-gray-400",style:{maxWidth:t,height:"100px"}})]),a("CanvasBlockLabel",{attrs:{label:"max-w-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},"287a":function(t,e,a){},"2b80":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divide-y -my-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"py-4"},[a("p",{staticClass:"mb-2 text-2xl leading-none",style:{letterSpacing:e}},[t._v("The quick brown fox jumped over the lazy dog.")]),a("CanvasBlockLabel",{attrs:{label:"tracking-"+n,value:e}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},"2bcf":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("div",{staticClass:"tooltip pointer-events-none absolute py-1 px-2 text-sm bg-gray-800 text-white rounded",class:{show:t.showCopyTooltip}},[t._v(t._s(t.copyText))]),a("input",{ref:"label",staticClass:"\n      inline-block\n      appearance-none bg-transparent\n      text-sm text-gray-800\n      font-mono hover:text-teal-600\n      cursor-pointer focus:outline-none\n    ",attrs:{readonly:""},domProps:{value:t.prefixClassName(t.label)},on:{click:t.copy,mouseover:t.showCopy,mouseout:t.hideCopy}}),a("div",{staticClass:"text-sm text-gray-600 break-words"},[t._v("\n    "+t._s(t.value)+"\n  ")])])},r=[],l={inject:["prefixClassName"],props:{label:{type:String,required:!0},value:{type:String,required:!0}},data:function(){return{showCopyTooltip:!1,copyText:"Copy"}},methods:{copy:function(){this.$refs.label.select(),this.copyText="Copied",document.execCommand("copy"),this.$refs.label.blur(),window.getSelection().removeAllRanges()},showCopy:function(){this.copyText="Copy",this.showCopyTooltip=!0},hideCopy:function(){this.showCopyTooltip=!1}}},s=l,i=(a("4d43"),a("2877")),o=Object(i["a"])(s,n,r,!1,null,"261f01a4",null);e["a"]=o.exports},"47a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"lg:flex mb-6"},[a("div",{staticClass:"flex w-full lg:w-auto mb-2 lg:mb-0"},[a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none",class:{"bg-gray-300":"p"===t.selectedProp},on:{click:function(e){t.selectedProp="p"}}},[t._v("Padding")]),a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none",class:{"bg-gray-300":"m"===t.selectedProp},on:{click:function(e){t.selectedProp="m"}}},[t._v("Margin")]),a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none",class:{"bg-gray-300":"-m"===t.selectedProp},on:{click:function(e){t.selectedProp="-m"}}},[t._v("Negative Margin")])]),a("div",{staticClass:"relative w-full lg:w-40 lg:ml-2"},[a("svg",{staticClass:"absolute pointer-events-none",staticStyle:{right:"10px",top:"calc(50% - 6px)"},attrs:{width:"11",height:"11",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z",fill:"#B8C2CC"}})]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.dimensionProp,expression:"dimensionProp"}],staticClass:"h-full w-full px-4 py-2 border bg-white border-gray-400 rounded text-sm appearance-none",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.dimensionProp=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:""}},[t._v("All")]),a("option",{attrs:{value:"t"}},[t._v("Top")]),a("option",{attrs:{value:"r"}},[t._v("Right")]),a("option",{attrs:{value:"b"}},[t._v("Bottom")]),a("option",{attrs:{value:"l"}},[t._v("Left")]),a("option",{attrs:{value:"x"}},[t._v("Horizontal")]),a("option",{attrs:{value:"y"}},[t._v("Vertical")])])])]),a("div",{staticClass:"divide-y -my-4"},t._l(t.spacing,function(e){var n=e.value,r=e.prop;return a("div",{key:r,staticClass:"py-4"},[a("div",{staticClass:"mb-2 bg-gray-400",style:{width:n,height:n}}),a("CanvasBlockLabel",{attrs:{label:""+t.selectedProp+(t.dimensionProp?t.dimensionProp:"")+"-"+r,value:n}})],1)}),0)])},r=[],l=(a("ac6a"),a("456d"),a("55dd"),a("ed08")),s=a("2bcf"),i={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}},data:function(){return{selectedProp:"p",dimensionProp:""}},computed:{spacing:function(){var t=this;return Object.keys(this.data).sort(function(e,a){var n=-1!==t.data[e].indexOf("rem")?Object(l["a"])(t.data[e]):parseFloat(t.data[e]),r=-1!==t.data[a].indexOf("rem")?Object(l["a"])(t.data[a]):parseFloat(t.data[a]);return n-r}).map(function(e){return{prop:e,value:t.data[e]}})}}},o=i,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports},"4d43":function(t,e,a){"use strict";var n=a("287a"),r=a.n(n);r.a},5234:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divide-y -my-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"py-4"},[a("p",{staticClass:"mb-2 leading-none",style:{fontSize:e}},[t._v("\n      The quick brown fox jumped over the lazy dog.\n    ")]),a("CanvasBlockLabel",{attrs:{label:"text-"+n,value:e}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},5264:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-sans",attrs:{id:"app"}},[a("div",{staticClass:"flex justify-between items-center bg-white border-b p-4 text-gray-700 text-xl font-bold"},[t._v("\n    Tailwind Config Viewer\n    "),a("a",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{href:"https://github.com/rogden/tailwind-config-viewer",target:"_blank"}},[a("svg",{staticClass:"fill-current w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("title",[t._v("GitHub")]),a("path",{attrs:{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}})])])]),a("Canvas")],1)},l=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-100"},[t.config?t._e():a("div",{staticClass:"flex items-center justify-center",staticStyle:{height:"calc(100vh - 63px)"}},[a("p",{staticClass:"text-gray-600 text-center font-bold"},[t._v("Loading Config...")])]),t.config?[a("div",{staticClass:"pt-8 px-3 flex"},[a("div",{staticClass:"hidden md:block flex-none h-full overflow-y-auto top-0 sticky max-h-screen"},[a("nav",{staticClass:"w-56 py-12 px-3 h-full"},t._l(t.configTransformed,function(e){return a("a",{key:e.title,staticClass:"block py-2 text-gray-600 hover:text-gray-900 text-base rounded-sm",attrs:{href:"#"+e.title}},[t._v("\n            "+t._s(e.title)+"\n          ")])}),0)]),a("div",t._l(t.configTransformed,function(e){return a("CanvasSection",{key:e.title,attrs:{title:e.title,id:e.title}},[a(t.sectionComponent(e.component),{tag:"component",attrs:{data:e.data,config:t.config}})],1)}),1)])]:t._e()],2)},i=[],o=(a("96cf"),a("3b8d")),c=a("f49a"),u=a.n(c);function d(t){return[{component:"Colors",title:"Colors",data:u()(t.colors)},{component:"Spacing",title:"Spacing",data:t.spacing},{component:"FontSizes",title:"Font Sizes",data:t.fontSize},{component:"FontWeight",title:"Font Weight",data:t.fontWeight},{component:"LetterSpacing",title:"Letter Spacing",data:t.letterSpacing},{component:"LineHeight",title:"Line Height",data:t.lineHeight},{component:"Screens",title:"Screens",data:t.screens},{component:"Shadows",title:"Shadows",data:t.boxShadow},{component:"Opacity",title:"Opacity",data:t.opacity},{component:"BorderRadius",title:"Border Radius",data:t.borderRadius},{component:"BorderWidth",title:"Border Width",data:t.borderWidth},{component:"MinWidth",title:"Min Width",data:t.minWidth},{component:"Width",title:"Width",data:t.width},{component:"MaxWidth",title:"Max Width",data:t.maxWidth},{component:"MinHeight",title:"Min Height",data:t.minHeight},{component:"Height",title:"Height",data:t.height},{component:"MaxHeight",title:"Max Height",data:t.maxHeight}]}var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-12 max-w-full"},[a("h1",{staticClass:"mb-2 text-3xl text-gray-800"},[t._v(t._s(t.title))]),a("div",{staticClass:"bg-white p-6 rounded border-gray-300 border"},[t._t("default")],2)])},p=[],v={props:{title:{type:String,required:!0}}},b=v,g=a("2877"),m=Object(g["a"])(b,f,p,!1,null,null,null),h=m.exports,y={components:{CanvasSection:h},provide:function(){return{prefixClassName:this.prefixClassName}},data:function(){return{config:null,configTransformed:null}},methods:{sectionComponent:function(t){return a("c79b")("./".concat(t,".vue")).default},prefixClassName:function(t){return this.config.prefix?"".concat(this.config.prefix,"-").concat(t):t},fileSelected:function(t){var e=this,a=new FileReader;a.onload=function(t){e.config=JSON.parse(t.target.result),e.configTransformed=d(e.config)},a.readAsText(t.target.files[0])}},mounted:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(window.__TCV_CONFIG.configPath);case 2:return e=t.sent,t.next=5,e.json();case 5:this.config=t.sent,this.configTransformed=d(this.config.theme);case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},x=y,C=Object(g["a"])(x,s,i,!1,null,null,null),_=C.exports,w=_,k={components:{Canvas:w}},O=k,j=(a("034f"),Object(g["a"])(O,r,l,!1,null,null,null)),B=j.exports;a("a2f0");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"64a9":function(t,e,a){},6812:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-400",style:{height:t}}),a("CanvasBlockLabel",{attrs:{label:"max-h-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},"68f4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divide-y -my-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"py-4"},[a("div",{staticClass:"text-lg mb-2",style:{lineHeight:e}},[a("p",[t._v("The quick brown fox jumped over the lazy dog.")]),a("p",[t._v("The quick brown fox jumped over the lazy dog.")])]),a("CanvasBlockLabel",{attrs:{label:"leading-"+n,value:e}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=(a("c60d"),a("2877")),c=Object(o["a"])(i,n,r,!1,null,"2c41cd81",null);e["default"]=c.exports},"70bf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divide-y -my-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"py-4"},[a("p",{staticClass:"mb-2 leading-none text-2xl",style:{fontWeight:e}},[t._v("\n      The quick brown fox jumped over the lazy dog.\n    ")]),a("CanvasBlockLabel",{attrs:{label:"font-"+n,value:e}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},"87b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},[t._l(t.fixedWidths,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-200"},[a("div",{staticClass:"bg-gray-400",style:{width:t.includes("vw")?"100%":t,height:"100px",maxWidth:"100%"}})]),a("CanvasBlockLabel",{attrs:{label:"w-"+e,value:t}})],1)}),t._l(t.percentWidths,function(t,e){return a("div",{key:e,staticClass:"mb-6"},[a("div",{staticClass:"mb-2 bg-gray-200"},[a("div",{staticClass:"bg-gray-400",style:{width:t,maxWidth:"100%",height:"100px"}})]),a("CanvasBlockLabel",{attrs:{label:"w-"+e,value:t}})],1)})],2)},r=[],l=a("bd86"),s=a("cebc"),i=(a("ac6a"),a("456d"),a("2bcf")),o={components:{CanvasBlockLabel:i["a"]},props:{data:{type:Object,required:!0}},computed:{percentWidths:function(){var t=this;return Object.keys(this.data).filter(function(e){return-1!==t.data[e].indexOf("%")}).reduce(function(e,a){return Object(s["a"])({},e,Object(l["a"])({},a,t.data[a]))},{})},fixedWidths:function(){var t=this;return Object.keys(this.data).filter(function(e){return-1===t.data[e].indexOf("%")}).reduce(function(e,a){return Object(s["a"])({},e,Object(l["a"])({},a,t.data[a]))},{})}}},c=o,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,null,null);e["default"]=d.exports},9907:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"mr-4 mb-4"},[a("div",{staticClass:"bg-gray-400 mb-2 w-40 h-40",style:{borderRadius:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("rounded-"+n),value:e}})],1)}),0)},r=[],l=a("2bcf"),s=a("ed08"),i={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:s["b"]}},o=i,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports},a2f0:function(t,e,a){},a36e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-400",style:{maxWidth:t,height:"100px"}}),a("CanvasBlockLabel",{attrs:{label:e+":",value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},bd10:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-200"},[a("div",{staticClass:"bg-gray-400",style:{maxWidth:t,height:"100px"}})]),a("CanvasBlockLabel",{attrs:{label:"min-w-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},c60d:function(t,e,a){"use strict";var n=a("5264"),r=a.n(n);r.a},c79b:function(t,e,a){var n={"./BorderRadius.vue":"9907","./BorderWidth.vue":"0f43","./Colors.vue":"ee61","./FontSizes.vue":"5234","./FontWeight.vue":"70bf","./Height.vue":"e211","./LetterSpacing.vue":"2b80","./LineHeight.vue":"68f4","./MaxHeight.vue":"6812","./MaxWidth.vue":"1e22","./MinHeight.vue":"e3f7","./MinWidth.vue":"bd10","./Opacity.vue":"f7f9","./Screens.vue":"a36e","./Shadows.vue":"e9d1","./Spacing.vue":"47a5","./Width.vue":"87b8"};function r(t){var e=l(t);return a(e)}function l(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=l,t.exports=r,r.id="c79b"},e211:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-400",style:{height:t}}),a("CanvasBlockLabel",{attrs:{label:"h-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},e3f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-4"},t._l(t.data,function(t,e){return a("div",{key:e},[a("div",{staticClass:"mb-2 bg-gray-400",style:{minHeight:t}}),a("CanvasBlockLabel",{attrs:{label:"min-h-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},e9d1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"mb-4 mr-8 w-40"},[a("div",{staticClass:"mb-2 w-40 h-40",style:{boxShadow:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("shadow-"+n),value:e}})],1)}),0)},r=[],l=a("2bcf"),s=a("ed08"),i={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:s["b"]}},o=i,c=a("2877"),u=Object(c["a"])(o,n,r,!1,null,null,null);e["default"]=u.exports},ed08:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return r});a("a481");var n=function(t){return t.replace("-default","")},r=function(t){return parseFloat(t)*parseFloat(getComputedStyle(document.documentElement).fontSize)}},ee61:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex mb-6"},[a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tl rounded-bl border border-gray-400 focus:outline-none",class:{"bg-gray-300":"bg"===t.selectedProp},on:{click:function(e){t.selectedProp="bg"}}},[t._v("Background")]),a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm border-t border-b border-gray-400 focus:outline-none",class:{"bg-gray-300":"text"===t.selectedProp},on:{click:function(e){t.selectedProp="text"}}},[t._v("Text")]),a("button",{staticClass:"w-full lg:w-40 hover:bg-gray-300 py-2 px-4 text-sm rounded-tr rounded-br border border-gray-400 focus:outline-none",class:{"bg-gray-300":"border"===t.selectedProp},on:{click:function(e){t.selectedProp="border"}}},[t._v("Border")])]),a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"mb-4"},[a("div",{staticClass:"mr-4 mb-2 flex-none w-40 h-40 flex items-center justify-center",class:{"border border-gray-300":"text"===t.selectedProp},style:t.tileStyle(e)},["text"===t.selectedProp?a("span",{staticClass:"text-3xl",style:{color:e}},[t._v("Aa")]):t._e()]),a("CanvasBlockLabel",{attrs:{label:t.selectedProp+"-"+n,value:e}})],1)}),0)])},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}},data:function(){return{selectedProp:"bg"}},methods:{tileStyle:function(t){return"bg"===this.selectedProp?{backgroundColor:t}:"border"===this.selectedProp?{border:"2px solid ".concat(t)}:void 0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports},f7f9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(t,e){return a("div",{key:e,staticClass:"mr-4 mb-4"},[a("div",{staticClass:"mb-2 bg-gray-400 w-40 h-40",style:{opacity:t}}),a("CanvasBlockLabel",{attrs:{label:"opacity-"+e,value:t}})],1)}),0)},r=[],l=a("2bcf"),s={components:{CanvasBlockLabel:l["a"]},props:{data:{type:Object,required:!0}}},i=s,o=a("2877"),c=Object(o["a"])(i,n,r,!1,null,null,null);e["default"]=c.exports}});
//# sourceMappingURL=app.c795112a.js.map