!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(s){c=!0,i=s}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,n)||a(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){return(n=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,t)}function t(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o=i(e);if(n){var a=i(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return r(this,t)}}function r(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){if(e){if("string"==typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,n):void 0}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,n,t){return n&&l(e.prototype,n),t&&l(e,t),e}(self.webpackChunk_sersol_ngx_leaflet=self.webpackChunk_sersol_ngx_leaflet||[]).push([[203],{203:function(e,n,t){"use strict";t.r(n);var r=t(9152);n.default=r},9152:function(r){var i={exports:{}};function a(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];"object"!=typeof t||Object.isFrozen(t)||a(t)}),e}i.exports=a,i.exports.default=a;var c=i.exports,l=function(){function e(n){s(this,e),void 0===n.data&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}return u(e,[{key:"ignoreMatch",value:function(){this.isMatchIgnored=!0}}]),e}();function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function g(e){var n=Object.create(null);for(var t in e)n[t]=e[t];for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return i.forEach(function(e){for(var t in e)n[t]=e[t]}),n}var d=function(e){return!!e.kind},h=function(){function e(n,t){s(this,e),this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}return u(e,[{key:"addText",value:function(e){this.buffer+=f(e)}},{key:"openNode",value:function(e){if(d(e)){var n=e.kind;n=e.sublanguage?"language-".concat(n):function(e,n){var t=n.prefix;if(e.includes(".")){var r=e.split(".");return["".concat(t).concat(r.shift())].concat(o(r.map(function(e,n){return"".concat(e).concat("_".repeat(n+1))}))).join(" ")}return"".concat(t).concat(e)}(n,{prefix:this.classPrefix}),this.span(n)}}},{key:"closeNode",value:function(e){d(e)&&(this.buffer+="</span>")}},{key:"value",value:function(){return this.buffer}},{key:"span",value:function(e){this.buffer+='<span class="'.concat(e,'">')}}]),e}(),p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}(i,e);var r=t(i);function i(e){var n;return s(this,i),(n=r.call(this)).options=e,n}return u(i,[{key:"addKeyword",value:function(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}},{key:"addText",value:function(e){""!==e&&this.add(e)}},{key:"addSublanguage",value:function(e,n){var t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}},{key:"toHTML",value:function(){return new h(this,this.options).value()}},{key:"finalize",value:function(){return!0}}]),i}(function(){function e(){s(this,e),this.rootNode={children:[]},this.stack=[this.rootNode]}return u(e,[{key:"top",get:function(){return this.stack[this.stack.length-1]}},{key:"root",get:function(){return this.rootNode}},{key:"add",value:function(e){this.top.children.push(e)}},{key:"openNode",value:function(e){var n={kind:e,children:[]};this.add(n),this.stack.push(n)}},{key:"closeNode",value:function(){if(this.stack.length>1)return this.stack.pop()}},{key:"closeAllNodes",value:function(){for(;this.closeNode(););}},{key:"toJSON",value:function(){return JSON.stringify(this.rootNode,null,4)}},{key:"walk",value:function(e){return this.constructor._walk(e,this.rootNode)}}],[{key:"_walk",value:function(e,n){var t=this;return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(function(n){return t._walk(e,n)}),e.closeNode(n)),e}},{key:"_collapse",value:function(n){"string"!=typeof n&&n.children&&(n.children.every(function(e){return"string"==typeof e})?n.children=[n.children.join("")]:n.children.forEach(function(n){e._collapse(n)}))}}]),e}());function b(e){return e?"string"==typeof e?e:e.source:null}function v(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.map(function(e){return b(e)}).join("")}function y(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return"("+(function(e){var n=e[e.length-1];return"object"==typeof n&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}(n).capture?"":"?:")+n.map(function(e){return b(e)}).join("|")+")"}function m(e){return new RegExp(e.toString()+"|").exec("").length-1}var w=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function E(e,n){var t=n.joinWith,r=0;return e.map(function(e){for(var n=r+=1,t=b(e),i="";t.length>0;){var o=w.exec(t);if(!o){i+=t;break}i+=t.substring(0,o.index),t=t.substring(o.index+o[0].length),"\\"===o[0][0]&&o[1]?i+="\\"+String(Number(o[1])+n):(i+=o[0],"("===o[0]&&r++)}return i}).map(function(e){return"(".concat(e,")")}).join(t)}var x="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",_={begin:"\\\\[\\s\\S]",relevance:0},k={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[_]},O={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[_]},S=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=g({scope:"comment",begin:e,end:n,contains:[]},t);r.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});var i=y("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return r.contains.push({begin:v(/[ ]+/,"(",i,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),r},A=S("//","$"),N=S("/\\*","\\*/"),R=S("#","$"),j=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:x,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=/^#![ ]*\//;return e.binary&&(e.begin=v(n,/.*\b/,e.binary,/\b.*/)),g({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":function(e,n){0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:_,APOS_STRING_MODE:k,QUOTE_STRING_MODE:O,PHRASAL_WORDS_MODE:{begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},COMMENT:S,C_LINE_COMMENT_MODE:A,C_BLOCK_COMMENT_MODE:N,HASH_COMMENT_MODE:R,NUMBER_MODE:{scope:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},C_NUMBER_MODE:{scope:"number",begin:x,relevance:0},BINARY_NUMBER_MODE:{scope:"number",begin:"\\b(0b[01]+)",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[_,{begin:/\[/,end:/\]/,relevance:0,contains:[_]}]}]},TITLE_MODE:{scope:"title",begin:"[a-zA-Z]\\w*",relevance:0},UNDERSCORE_TITLE_MODE:{scope:"title",begin:"[a-zA-Z_]\\w*",relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":function(e,n){n.data._beginMatch=e[1]},"on:end":function(e,n){n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function M(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function I(e,n){void 0!==e.className&&(e.scope=e.className,delete e.className)}function T(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=M,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function B(e,n){Array.isArray(e.illegal)&&(e.illegal=y.apply(void 0,o(e.illegal)))}function L(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function P(e,n){void 0===e.relevance&&(e.relevance=1)}var C=function(e,n){if(e.beforeMatch){if(e.starts)throw new Error("beforeMatch cannot be used with starts");var t=Object.assign({},e);Object.keys(e).forEach(function(n){delete e[n]}),e.keywords=t.keywords,e.begin=v(t.beforeMatch,v("(?=",t.begin,")")),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch}},D=["of","and","for","in","not","or","if","then","parent","list","value"];function H(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keyword",r=Object.create(null);return"string"==typeof e?i(t,e.split(" ")):Array.isArray(e)?i(t,e):Object.keys(e).forEach(function(t){Object.assign(r,H(e[t],n,t))}),r;function i(e,t){n&&(t=t.map(function(e){return e.toLowerCase()})),t.forEach(function(n){var t=n.split("|");r[t[0]]=[e,U(t[0],t[1])]})}}function U(e,n){return n?Number(n):function(e){return D.includes(e.toLowerCase())}(e)?0:1}var z={},K=function(e){console.error(e)},W=function(e){for(var n,t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];(n=console).log.apply(n,["WARN: ".concat(e)].concat(r))},X=function(e,n){z["".concat(e,"/").concat(n)]||(console.log("Deprecated as of ".concat(e,". ").concat(n)),z["".concat(e,"/").concat(n)]=!0)},Z=new Error;function G(e,n,t){for(var r=t.key,i=0,o=e[r],a={},c={},s=1;s<=n.length;s++)c[s+i]=o[s],a[s+i]=!0,i+=m(n[s-1]);e[r]=c,e[r]._emit=a,e[r]._multi=!0}function $(e){!function(e){e.scope&&"object"==typeof e.scope&&null!==e.scope&&(e.beginScope=e.scope,delete e.scope)}(e),"string"==typeof e.beginScope&&(e.beginScope={_wrap:e.beginScope}),"string"==typeof e.endScope&&(e.endScope={_wrap:e.endScope}),function(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Z;if("object"!=typeof e.beginScope||null===e.beginScope)throw K("beginScope must be object"),Z;G(e,e.begin,{key:"beginScope"}),e.begin=E(e.begin,{joinWith:""})}}(e),function(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Z;if("object"!=typeof e.endScope||null===e.endScope)throw K("endScope must be object"),Z;G(e,e.end,{key:"endScope"}),e.end=E(e.end,{joinWith:""})}}(e)}function F(n){function t(e,t){return new RegExp(b(e),"m"+(n.case_insensitive?"i":"")+(t?"g":""))}var r=function(){function e(){s(this,e),this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}return u(e,[{key:"addRule",value:function(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=m(e)+1}},{key:"compile",value:function(){0===this.regexes.length&&(this.exec=function(){return null});var e=this.regexes.map(function(e){return e[1]});this.matcherRe=t(E(e,{joinWith:"|"}),!0),this.lastIndex=0}},{key:"exec",value:function(e){this.matcherRe.lastIndex=this.lastIndex;var n=this.matcherRe.exec(e);if(!n)return null;var t=n.findIndex(function(e,n){return n>0&&void 0!==e}),r=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,r)}}]),e}(),i=function(){function n(){s(this,n),this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}return u(n,[{key:"getMatcher",value:function(n){if(this.multiRegexes[n])return this.multiRegexes[n];var t=new r;return this.rules.slice(n).forEach(function(n){var r=e(n,2),i=r[0],o=r[1];return t.addRule(i,o)}),t.compile(),this.multiRegexes[n]=t,t}},{key:"resumingScanAtSamePosition",value:function(){return 0!==this.regexIndex}},{key:"considerAll",value:function(){this.regexIndex=0}},{key:"addRule",value:function(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}},{key:"exec",value:function(e){var n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;var t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{var r=this.getMatcher(0);r.lastIndex=this.lastIndex+1,t=r.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}]),n}();if(n.compilerExtensions||(n.compilerExtensions=[]),n.contains&&n.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return n.classNameAliases=g(n.classNameAliases||{}),function e(r,a){var c,s=r;if(r.isCompiled)return s;[I,L,$,C].forEach(function(e){return e(r,a)}),n.compilerExtensions.forEach(function(e){return e(r,a)}),r.__beforeBegin=null,[T,B,P].forEach(function(e){return e(r,a)}),r.isCompiled=!0;var l=null;return"object"==typeof r.keywords&&r.keywords.$pattern&&(r.keywords=Object.assign({},r.keywords),l=r.keywords.$pattern,delete r.keywords.$pattern),l=l||/\w+/,r.keywords&&(r.keywords=H(r.keywords,n.case_insensitive)),s.keywordPatternRe=t(l,!0),a&&(r.begin||(r.begin=/\B|\b/),s.beginRe=t(r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(s.endRe=t(r.end)),s.terminatorEnd=b(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(s.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=(c=[]).concat.apply(c,o(r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return g(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:V(e)?g(e,{starts:e.starts?g(e.starts):null}):Object.isFrozen(e)?g(e):e}("self"===e?r:e)}))),r.contains.forEach(function(n){e(n,s)}),r.starts&&e(r.starts,a),s.matcher=function(e){var n=new i;return e.contains.forEach(function(e){return n.addRule(e.begin,{rule:e,type:"begin"})}),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(s),s}(n)}function V(e){return!!e&&(e.endsWithParent||V(e.starts))}var q=f,J=g,Y=Symbol("nomatch"),Q=function(n){var t=Object.create(null),r=Object.create(null),i=[],o=!0,a="Could not find the language '{}', did you forget to load/include a language module?",s={disableAutodetect:!0,name:"Plain text",contains:[]},u={ignoreUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:p};function f(e){return u.noHighlightRe.test(e)}function g(e,n,t,r){var i="",o="";"object"==typeof n?(i=e,t=n.ignoreIllegals,o=n.language,r=void 0):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),X("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),o=e,i=n),void 0===t&&(t=!0);var a={code:i,language:o};x("before:highlight",a);var c=a.result?a.result:d(a.language,a.code,t,r);return c.code=a.code,x("after:highlight",c),c}function d(n,r,i,c){var s=Object.create(null);function f(){if(S.keywords){var n=0;S.keywordPatternRe.lastIndex=0;for(var t=S.keywordPatternRe.exec(R),r="";t;){r+=R.substring(n,t.index);var i=_.case_insensitive?t[0].toLowerCase():t[0],o=S.keywords[i];if(o){var a=e(o,2),c=a[0],l=a[1];N.addText(r),r="",s[i]=(s[i]||0)+1,s[i]<=7&&(j+=l),c.startsWith("_")?r+=t[0]:N.addKeyword(t[0],_.classNameAliases[c]||c)}else r+=t[0];n=S.keywordPatternRe.lastIndex,t=S.keywordPatternRe.exec(R)}r+=R.substr(n),N.addText(r)}else N.addText(R)}function g(){null!=S.subLanguage?function(){if(""!==R){var e=null;if("string"==typeof S.subLanguage){if(!t[S.subLanguage])return void N.addText(R);e=d(S.subLanguage,R,!0,A[S.subLanguage]),A[S.subLanguage]=e._top}else e=h(R,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(j+=e.relevance),N.addSublanguage(e._emitter,e.language)}}():f(),R=""}function p(e,n){for(var t=1;void 0!==n[t];)if(e._emit[t]){var r=_.classNameAliases[e[t]]||e[t],i=n[t];r?N.addKeyword(i,r):(R=i,f(),R=""),t++}else t++}function b(e,n){return e.scope&&"string"==typeof e.scope&&N.openNode(_.classNameAliases[e.scope]||e.scope),e.beginScope&&(e.beginScope._wrap?(N.addKeyword(R,_.classNameAliases[e.beginScope._wrap]||e.beginScope._wrap),R=""):e.beginScope._multi&&(p(e.beginScope,n),R="")),S=Object.create(e,{parent:{value:S}})}function v(e,n,t){var r=function(e,n){var t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(r){if(e["on:end"]){var i=new l(e);e["on:end"](n,i),i.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return v(e.parent,n,t)}function y(e){return 0===S.matcher.regexIndex?(R+=e[0],1):(T=!0,0)}function w(e){var n=e[0],t=r.substr(e.index),i=v(S,e,t);if(!i)return Y;var o=S;S.endScope&&S.endScope._wrap?(g(),N.addKeyword(n,S.endScope._wrap)):S.endScope&&S.endScope._multi?(g(),p(S.endScope,e)):o.skip?R+=n:(o.returnEnd||o.excludeEnd||(R+=n),g(),o.excludeEnd&&(R=n));do{S.scope&&!S.isMultiClass&&N.closeNode(),S.skip||S.subLanguage||(j+=S.relevance),S=S.parent}while(S!==i.parent);return i.starts&&b(i.starts,e),o.returnEnd?0:n.length}var E={};function x(e,t){var a=t&&t[0];if(R+=e,null==a)return g(),0;if("begin"===E.type&&"end"===t.type&&E.index===t.index&&""===a){if(R+=r.slice(t.index,t.index+1),!o){var c=new Error("0 width match regex (".concat(n,")"));throw c.languageName=n,c.badRule=E.rule,c}return 1}if(E=t,"begin"===t.type)return function(e){for(var n=e[0],t=e.rule,r=new l(t),i=0,o=[t.__beforeBegin,t["on:begin"]];i<o.length;i++){var a=o[i];if(a&&(a(e,r),r.isMatchIgnored))return y(n)}return t.skip?R+=n:(t.excludeBegin&&(R+=n),g(),t.returnBegin||t.excludeBegin||(R=n)),b(t,e),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!i){var s=new Error('Illegal lexeme "'+a+'" for mode "'+(S.scope||"<unnamed>")+'"');throw s.mode=S,s}if("end"===t.type){var u=w(t);if(u!==Y)return u}if("illegal"===t.type&&""===a)return 1;if(I>1e5&&I>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return R+=a,a.length}var _=m(n);if(!_)throw K(a.replace("{}",n)),new Error('Unknown language: "'+n+'"');var k=F(_),O="",S=c||k,A={},N=new u.__emitter(u);!function(){for(var e=[],n=S;n!==_;n=n.parent)n.scope&&e.unshift(n.scope);e.forEach(function(e){return N.openNode(e)})}();var R="",j=0,M=0,I=0,T=!1;try{for(S.matcher.considerAll();;){I++,T?T=!1:S.matcher.considerAll(),S.matcher.lastIndex=M;var B=S.matcher.exec(r);if(!B)break;var L=x(r.substring(M,B.index),B);M=B.index+L}return x(r.substr(M)),N.closeAllNodes(),N.finalize(),O=N.toHTML(),{language:n,value:O,relevance:j,illegal:!1,_emitter:N,_top:S}}catch(P){if(P.message&&P.message.includes("Illegal"))return{language:n,value:q(r),illegal:!0,relevance:0,_illegalBy:{message:P.message,index:M,context:r.slice(M-100,M+100),mode:P.mode,resultSoFar:O},_emitter:N};if(o)return{language:n,value:q(r),illegal:!1,relevance:0,errorRaised:P,_emitter:N,_top:S};throw P}}function h(n,r){r=r||u.languages||Object.keys(t);var i=function(e){var n={value:q(e),illegal:!1,relevance:0,_top:s,_emitter:new u.__emitter(u)};return n._emitter.addText(e),n}(n),o=r.filter(m).filter(E).map(function(e){return d(e,n,!1)});o.unshift(i);var a=e(o.sort(function(e,n){if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(m(e.language).supersetOf===n.language)return 1;if(m(n.language).supersetOf===e.language)return-1}return 0}),2),c=a[0],l=a[1],f=c;return f.secondBest=l,f}function b(e){var n=function(e){var n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";var t=u.languageDetectRe.exec(n);if(t){var r=m(t[1]);return r||(W(a.replace("{}",t[1])),W("Falling back to no-highlight mode for this block.",e)),r?t[1]:"no-highlight"}return n.split(/\s+/).find(function(e){return f(e)||m(e)})}(e);if(!f(n)){x("before:highlightElement",{el:e,language:n}),!u.ignoreUnescapedHTML&&e.children.length>0&&(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/issues/2886"),console.warn(e));var t=e.textContent,i=n?g(t,{language:n,ignoreIllegals:!0}):h(t);e.innerHTML=i.value,function(e,n,t){var i=n&&r[n]||t;e.classList.add("hljs"),e.classList.add("language-".concat(i))}(e,n,i.language),e.result={language:i.language,re:i.relevance,relevance:i.relevance},i.secondBest&&(e.secondBest={language:i.secondBest.language,relevance:i.secondBest.relevance}),x("after:highlightElement",{el:e,result:i,text:t})}}var v=!1;function y(){"loading"!==document.readyState?document.querySelectorAll(u.cssSelector).forEach(b):v=!0}function m(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function w(e,n){var t=n.languageName;"string"==typeof e&&(e=[e]),e.forEach(function(e){r[e.toLowerCase()]=t})}function E(e){var n=m(e);return n&&!n.disableAutodetect}function x(e,n){var t=e;i.forEach(function(e){e[t]&&e[t](n)})}for(var _ in"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){v&&y()},!1),Object.assign(n,{highlight:g,highlightAuto:h,highlightAll:y,highlightElement:b,highlightBlock:function(e){return X("10.7.0","highlightBlock will be removed entirely in v12.0"),X("10.7.0","Please use highlightElement now."),b(e)},configure:function(e){u=J(u,e)},initHighlighting:function(){y(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")},initHighlightingOnLoad:function(){y(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")},registerLanguage:function(e,r){var i=null;try{i=r(n)}catch(a){if(K("Language definition for '{}' could not be registered.".replace("{}",e)),!o)throw a;K(a),i=s}i.name||(i.name=e),t[e]=i,i.rawDefinition=r.bind(null,n),i.aliases&&w(i.aliases,{languageName:e})},unregisterLanguage:function(e){delete t[e];for(var n=0,i=Object.keys(r);n<i.length;n++){var o=i[n];r[o]===e&&delete r[o]}},listLanguages:function(){return Object.keys(t)},getLanguage:m,registerAliases:w,autoDetection:E,inherit:J,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=function(n){e["before:highlightBlock"](Object.assign({block:n.el},n))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=function(n){e["after:highlightBlock"](Object.assign({block:n.el},n))})}(e),i.push(e)}}),n.debugMode=function(){o=!1},n.safeMode=function(){o=!0},n.versionString="11.0.1",j)"object"==typeof j[_]&&c(j[_]);return Object.assign(n,j),n}({});r.exports=Q}}])}();