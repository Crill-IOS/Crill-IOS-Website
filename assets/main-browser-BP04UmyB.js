var r$=Object.defineProperty;var i$=(t,e,n)=>e in t?r$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var s$=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var On=(t,e,n)=>i$(t,typeof e!="symbol"?e+"":e,n);var cL=s$((_t,vt)=>{function Xe(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function Jt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function a$(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function sl(t){return typeof t=="object"&&t!==null&&Xe(t.container)&&Jt(t.reference)&&typeof t.message=="string"}class Y_{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,n){return Xe(e)&&this.isSubtype(e.$type,n)}isSubtype(e,n){if(e===n)return!0;let r=this.subtypes[e];r||(r=this.subtypes[e]={});const i=r[n];if(i!==void 0)return i;{const s=this.computeIsSubtype(e,n);return r[n]=s,s}}getAllSubTypes(e){const n=this.allSubtypes[e];if(n)return n;{const r=this.getAllTypes(),i=[];for(const s of r)this.isSubtype(s,e)&&i.push(s);return this.allSubtypes[e]=i,i}}}function sr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Os(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function X_(t){return sr(t)&&typeof t.fullText=="string"}class Ve{constructor(e,n){this.startFn=e,this.nextFn=n}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){const e=this.iterator();let n=0,r=e.next();for(;!r.done;)n++,r=e.next();return n}toArray(){const e=[],n=this.iterator();let r;do r=n.next(),r.value!==void 0&&e.push(r.value);while(!r.done);return e}toSet(){return new Set(this)}toMap(e,n){const r=this.map(i=>[e?e(i):i,n?n(i):i]);return new Map(r)}toString(){return this.join()}concat(e){return new Ve(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),n=>{let r;if(!n.firstDone){do if(r=this.nextFn(n.first),!r.done)return r;while(!r.done);n.firstDone=!0}do if(r=n.iterator.next(),!r.done)return r;while(!r.done);return gt})}join(e=","){const n=this.iterator();let r="",i,s=!1;do i=n.next(),i.done||(s&&(r+=e),r+=o$(i.value)),s=!0;while(!i.done);return r}indexOf(e,n=0){const r=this.iterator();let i=0,s=r.next();for(;!s.done;){if(i>=n&&s.value===e)return i;s=r.next(),i++}return-1}every(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(!e(r.value))return!1;r=n.next()}return!0}some(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return!0;r=n.next()}return!1}forEach(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;)e(i.value,r),i=n.next(),r++}map(e){return new Ve(this.startFn,n=>{const{done:r,value:i}=this.nextFn(n);return r?gt:{done:!1,value:e(i)}})}filter(e){return new Ve(this.startFn,n=>{let r;do if(r=this.nextFn(n),!r.done&&e(r.value))return r;while(!r.done);return gt})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,n){const r=this.iterator();let i=n,s=r.next();for(;!s.done;)i===void 0?i=s.value:i=e(i,s.value),s=r.next();return i}reduceRight(e,n){return this.recursiveReduce(this.iterator(),e,n)}recursiveReduce(e,n,r){const i=e.next();if(i.done)return r;const s=this.recursiveReduce(e,n,r);return s===void 0?i.value:n(s,i.value)}find(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return r.value;r=n.next()}}findIndex(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;){if(e(i.value))return r;i=n.next(),r++}return-1}includes(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(r.value===e)return!0;r=n.next()}return!1}flatMap(e){return new Ve(()=>({this:this.startFn()}),n=>{do{if(n.iterator){const s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}const{done:r,value:i}=this.nextFn(n.this);if(!r){const s=e(i);if(_l(s))n.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}}while(n.iterator);return gt})}flat(e){if(e===void 0&&(e=1),e<=0)return this;const n=e>1?this.flat(e-1):this;return new Ve(()=>({this:n.startFn()}),r=>{do{if(r.iterator){const a=r.iterator.next();if(a.done)r.iterator=void 0;else return a}const{done:i,value:s}=n.nextFn(r.this);if(!i)if(_l(s))r.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}while(r.iterator);return gt})}head(){const n=this.iterator().next();if(!n.done)return n.value}tail(e=1){return new Ve(()=>{const n=this.startFn();for(let r=0;r<e;r++)if(this.nextFn(n).done)return n;return n},this.nextFn)}limit(e){return new Ve(()=>({size:0,state:this.startFn()}),n=>(n.size++,n.size>e?gt:this.nextFn(n.state)))}distinct(e){return new Ve(()=>({set:new Set,internalState:this.startFn()}),n=>{let r;do if(r=this.nextFn(n.internalState),!r.done){const i=e?e(r.value):r.value;if(!n.set.has(i))return n.set.add(i),r}while(!r.done);return gt})}exclude(e,n){const r=new Set;for(const i of e){const s=n?n(i):i;r.add(s)}return this.filter(i=>{const s=n?n(i):i;return!r.has(s)})}}function o$(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function _l(t){return!!t&&typeof t[Symbol.iterator]=="function"}const l$=new Ve(()=>{},()=>gt),gt=Object.freeze({done:!0,value:void 0});function we(...t){if(t.length===1){const e=t[0];if(e instanceof Ve)return e;if(_l(e))return new Ve(()=>e[Symbol.iterator](),n=>n.next());if(typeof e.length=="number")return new Ve(()=>({index:0}),n=>n.index<e.length?{done:!1,value:e[n.index++]}:gt)}return t.length>1?new Ve(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){const n=e.iterator.next();if(!n.done)return n;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){const n=t[e.collIndex++];_l(n)?e.iterator=n[Symbol.iterator]():n&&typeof n.length=="number"&&(e.array=n)}}while(e.iterator||e.array||e.collIndex<t.length);return gt}):l$}class vl extends Ve{constructor(e,n,r){super(()=>({iterators:r!=null&&r.includeRoot?[[e][Symbol.iterator]()]:[n(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){const a=i.iterators[i.iterators.length-1].next();if(a.done)i.iterators.pop();else return i.iterators.push(n(a.value)[Symbol.iterator]()),a}return gt})}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}}var $f;(function(t){function e(s){return s.reduce((a,o)=>a+o,0)}t.sum=e;function n(s){return s.reduce((a,o)=>a*o,0)}t.product=n;function r(s){return s.reduce((a,o)=>Math.min(a,o))}t.min=r;function i(s){return s.reduce((a,o)=>Math.max(a,o))}t.max=i})($f||($f={}));function Rl(t){return new vl(t,e=>sr(e)?e.content:[],{includeRoot:!0})}function c$(t){return Rl(t).filter(Os)}function u$(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function kf(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Tl(t){if(!t)return;const{offset:e,end:n,range:r}=t;return{range:r,offset:e,end:n,length:n-e}}var hn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})(hn||(hn={}));function d$(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return hn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return hn.After;const n=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,r=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return n&&r?hn.Inside:n?hn.OverlapBack:r?hn.OverlapFront:hn.Outside}function J_(t,e){return d$(t,e)>hn.After}const Q_=/^[\w\p{L}]$/u;function ar(t,e,n=Q_){if(t){if(e>0){const r=e-t.offset,i=t.text.charAt(r);n.test(i)||e--}return lh(t,e)}}function Z_(t,e){if(t){const n=f$(t,!0);if(n&&nm(n,e))return n;if(X_(t)){const r=t.content.findIndex(i=>!i.hidden);for(let i=r-1;i>=0;i--){const s=t.content[i];if(nm(s,e))return s}}}}function nm(t,e){return Os(t)&&e.includes(t.tokenType.name)}function lh(t,e){if(Os(t))return t;if(sr(t)){const n=ev(t,e,!1);if(n)return lh(n,e)}}function wf(t,e){if(Os(t))return t;if(sr(t)){const n=ev(t,e,!0);if(n)return wf(n,e)}}function ev(t,e,n){let r=0,i=t.content.length-1,s;for(;r<=i;){const a=Math.floor((r+i)/2),o=t.content[a];if(o.offset<=e&&o.end>e)return o;o.end<=e?(s=n?o:void 0,r=a+1):i=a-1}return s}function f$(t,e=!0){for(;t.container;){const n=t.container;let r=n.content.indexOf(t);for(;r>0;){r--;const i=n.content[r];if(e||!i.hidden)return i}t=n}}class tv extends Error{constructor(e,n){super(e?`${n} at ${e.range.start.line}:${e.range.start.character}`:n)}}function Ds(t){throw new Error("Error! The input value was not handled.")}const ma="AbstractRule",ga="AbstractType",Jc="Condition",rm="TypeDefinition",Qc="ValueLiteral",xi="AbstractElement";function nv(t){return ie.isInstance(t,xi)}const ya="ArrayLiteral",_a="ArrayType",Mi="BooleanLiteral";function p$(t){return ie.isInstance(t,Mi)}const Li="Conjunction";function h$(t){return ie.isInstance(t,Li)}const Fi="Disjunction";function m$(t){return ie.isInstance(t,Fi)}const va="Grammar",Zc="GrammarImport",Ui="InferredType";function rv(t){return ie.isInstance(t,Ui)}const Hi="Interface";function iv(t){return ie.isInstance(t,Hi)}const eu="NamedArgument",Bi="Negation";function g$(t){return ie.isInstance(t,Bi)}const Ra="NumberLiteral",Ta="Parameter",ji="ParameterReference";function y$(t){return ie.isInstance(t,ji)}const Ki="ParserRule";function tt(t){return ie.isInstance(t,Ki)}const $a="ReferenceType",al="ReturnType";function _$(t){return ie.isInstance(t,al)}const qi="SimpleType";function v$(t){return ie.isInstance(t,qi)}const ka="StringLiteral",kr="TerminalRule";function Vn(t){return ie.isInstance(t,kr)}const Gi="Type";function sv(t){return ie.isInstance(t,Gi)}const tu="TypeAttribute",wa="UnionType",Wi="Action";function xs(t){return ie.isInstance(t,Wi)}const zi="Alternatives";function ch(t){return ie.isInstance(t,zi)}const Vi="Assignment";function en(t){return ie.isInstance(t,Vi)}const Yi="CharacterRange";function R$(t){return ie.isInstance(t,Yi)}const Xi="CrossReference";function Ms(t){return ie.isInstance(t,Xi)}const Ji="EndOfFile";function T$(t){return ie.isInstance(t,Ji)}const Qi="Group";function or(t){return ie.isInstance(t,Qi)}const Zi="Keyword";function Pt(t){return ie.isInstance(t,Zi)}const es="NegatedToken";function $$(t){return ie.isInstance(t,es)}const ts="RegexToken";function k$(t){return ie.isInstance(t,ts)}const ns="RuleCall";function Rn(t){return ie.isInstance(t,ns)}const rs="TerminalAlternatives";function w$(t){return ie.isInstance(t,rs)}const is="TerminalGroup";function b$(t){return ie.isInstance(t,is)}const ss="TerminalRuleCall";function S$(t){return ie.isInstance(t,ss)}const as="UnorderedGroup";function uh(t){return ie.isInstance(t,as)}const os="UntilToken";function C$(t){return ie.isInstance(t,os)}const ls="Wildcard";function A$(t){return ie.isInstance(t,ls)}class av extends Y_{getAllTypes(){return[xi,ma,ga,Wi,zi,ya,_a,Vi,Mi,Yi,Jc,Li,Xi,Fi,Ji,va,Zc,Qi,Ui,Hi,Zi,eu,es,Bi,Ra,Ta,ji,Ki,$a,ts,al,ns,qi,ka,rs,is,kr,ss,Gi,tu,rm,wa,as,os,Qc,ls]}computeIsSubtype(e,n){switch(e){case Wi:case zi:case Vi:case Yi:case Xi:case Ji:case Qi:case Zi:case es:case ts:case ns:case rs:case is:case ss:case as:case os:case ls:return this.isSubtype(xi,n);case ya:case Ra:case ka:return this.isSubtype(Qc,n);case _a:case $a:case qi:case wa:return this.isSubtype(rm,n);case Mi:return this.isSubtype(Jc,n)||this.isSubtype(Qc,n);case Li:case Fi:case Bi:case ji:return this.isSubtype(Jc,n);case Ui:case Hi:case Gi:return this.isSubtype(ga,n);case Ki:return this.isSubtype(ma,n)||this.isSubtype(ga,n);case kr:return this.isSubtype(ma,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return ga;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return ma;case"Grammar:usedGrammars":return va;case"NamedArgument:parameter":case"ParameterReference:parameter":return Ta;case"TerminalRuleCall:rule":return kr;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case xi:return{name:xi,properties:[{name:"cardinality"},{name:"lookahead"}]};case ya:return{name:ya,properties:[{name:"elements",defaultValue:[]}]};case _a:return{name:_a,properties:[{name:"elementType"}]};case Mi:return{name:Mi,properties:[{name:"true",defaultValue:!1}]};case Li:return{name:Li,properties:[{name:"left"},{name:"right"}]};case Fi:return{name:Fi,properties:[{name:"left"},{name:"right"}]};case va:return{name:va,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case Zc:return{name:Zc,properties:[{name:"path"}]};case Ui:return{name:Ui,properties:[{name:"name"}]};case Hi:return{name:Hi,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case eu:return{name:eu,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Bi:return{name:Bi,properties:[{name:"value"}]};case Ra:return{name:Ra,properties:[{name:"value"}]};case Ta:return{name:Ta,properties:[{name:"name"}]};case ji:return{name:ji,properties:[{name:"parameter"}]};case Ki:return{name:Ki,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case $a:return{name:$a,properties:[{name:"referenceType"}]};case al:return{name:al,properties:[{name:"name"}]};case qi:return{name:qi,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case ka:return{name:ka,properties:[{name:"value"}]};case kr:return{name:kr,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case Gi:return{name:Gi,properties:[{name:"name"},{name:"type"}]};case tu:return{name:tu,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case wa:return{name:wa,properties:[{name:"types",defaultValue:[]}]};case Wi:return{name:Wi,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case zi:return{name:zi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Vi:return{name:Vi,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Yi:return{name:Yi,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case Xi:return{name:Xi,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Ji:return{name:Ji,properties:[{name:"cardinality"},{name:"lookahead"}]};case Qi:return{name:Qi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case Zi:return{name:Zi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case es:return{name:es,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case ts:return{name:ts,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case ns:return{name:ns,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case rs:return{name:rs,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case is:return{name:is,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case ss:return{name:ss,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case as:return{name:as,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case os:return{name:os,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case ls:return{name:ls,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}}const ie=new av;function E$(t){for(const[e,n]of Object.entries(t))e.startsWith("$")||(Array.isArray(n)?n.forEach((r,i)=>{Xe(r)&&(r.$container=t,r.$containerProperty=e,r.$containerIndex=i)}):Xe(n)&&(n.$container=t,n.$containerProperty=e))}function Dn(t,e){let n=t;for(;n;){if(e(n))return n;n=n.$container}}function tn(t){const n=tr(t).$document;if(!n)throw new Error("AST node has no document.");return n}function tr(t){for(;t.$container;)t=t.$container;return t}function ic(t,e){if(!t)throw new Error("Node must be an AstNode.");const n=e==null?void 0:e.range;return new Ve(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),r=>{for(;r.keyIndex<r.keys.length;){const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=t[i];if(Xe(s)){if(r.keyIndex++,bf(s,n))return{done:!1,value:s}}else if(Array.isArray(s)){for(;r.arrayIndex<s.length;){const a=r.arrayIndex++,o=s[a];if(Xe(o)&&bf(o,n))return{done:!1,value:o}}r.arrayIndex=0}}r.keyIndex++}return gt})}function Qt(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new vl(t,n=>ic(n,e))}function rr(t,e){if(t){if(e!=null&&e.range&&!bf(t,e.range))return new vl(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new vl(t,n=>ic(n,e),{includeRoot:!0})}function bf(t,e){var n;if(!e)return!0;const r=(n=t.$cstNode)===null||n===void 0?void 0:n.range;return r?J_(r,e):!1}function ov(t){return new Ve(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){const n=e.keys[e.keyIndex];if(!n.startsWith("$")){const r=t[n];if(Jt(r))return e.keyIndex++,{done:!1,value:{reference:r,container:t,property:n}};if(Array.isArray(r)){for(;e.arrayIndex<r.length;){const i=e.arrayIndex++,s=r[i];if(Jt(s))return{done:!1,value:{reference:s,container:t,property:n,index:i}}}e.arrayIndex=0}}e.keyIndex++}return gt})}function lv(t,e){const n=t.getTypeMetaData(e.$type),r=e;for(const i of n.properties)i.defaultValue!==void 0&&r[i.name]===void 0&&(r[i.name]=cv(i.defaultValue))}function cv(t){return Array.isArray(t)?[...t.map(cv)]:t}function q(t){return t.charCodeAt(0)}function nu(t,e){Array.isArray(t)?t.forEach(function(n){e.push(n)}):e.push(t)}function ui(t,e){if(t[e]===!0)throw"duplicate flag "+e;t[e],t[e]=!0}function Tr(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function P$(){throw Error("Internal Error - Should never get here!")}function im(t){return t.type==="Character"}const $l=[];for(let t=q("0");t<=q("9");t++)$l.push(t);const kl=[q("_")].concat($l);for(let t=q("a");t<=q("z");t++)kl.push(t);for(let t=q("A");t<=q("Z");t++)kl.push(t);const sm=[q(" "),q("\f"),q(`
`),q("\r"),q("	"),q("\v"),q("	"),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q("\u2028"),q("\u2029"),q(" "),q(" "),q("　"),q("\uFEFF")],N$=/[0-9a-fA-F]/,ba=/[0-9]/,I$=/[1-9]/;class uv{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");const n=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ui(r,"global");break;case"i":ui(r,"ignoreCase");break;case"m":ui(r,"multiLine");break;case"u":ui(r,"unicode");break;case"y":ui(r,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:r,value:n,loc:this.loc(0)}}disjunction(){const e=[],n=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(n)}}alternative(){const e=[],n=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}Tr(n);const r=this.disjunction();return this.consumeChar(")"),{type:n,value:r,loc:this.loc(e)}}return P$()}quantifier(e=!1){let n;const r=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":const i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let s;this.isDigit()?(s=this.integerIncludingZero(),n={atLeast:i,atMost:s}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&n===void 0)return;Tr(n);break}if(!(e===!0&&n===void 0)&&Tr(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(r),n}atom(){let e;const n=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}if(e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Tr(e))return e.loc=this.loc(n),this.isQuantifier()&&(e.quantifier=this.quantifier()),e}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[q(`
`),q("\r"),q("\u2028"),q("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,n=!1;switch(this.popChar()){case"d":e=$l;break;case"D":e=$l,n=!0;break;case"s":e=sm;break;case"S":e=sm,n=!0;break;case"w":e=kl;break;case"W":e=kl,n=!0;break}if(Tr(e))return{type:"Set",value:e,complement:n}}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=q("\f");break;case"n":e=q(`
`);break;case"r":e=q("\r");break;case"t":e=q("	");break;case"v":e=q("\v");break}if(Tr(e))return{type:"Character",value:e}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:q("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:q(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:const e=this.popChar();return{type:"Character",value:q(e)}}}characterClass(){const e=[];let n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){const r=this.classAtom();if(r.type,im(r)&&this.isRangeDash()){this.consumeChar("-");const i=this.classAtom();if(i.type,im(i)){if(i.value<r.value)throw Error("Range out of order in character class");e.push({from:r.value,to:i.value})}else nu(r.value,e),e.push(q("-")),nu(i.value,e)}else nu(r.value,e)}return this.consumeChar("]"),{type:"Set",complement:n,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:q("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}const n=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:n};return e&&(r.idx=this.groupIdx),r}positiveInteger(){let e=this.popChar();if(I$.test(e)===!1)throw Error("Expecting a positive integer");for(;ba.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(ba.test(e)===!1)throw Error("Expecting an integer");for(;ba.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:q(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return ba.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){const e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let n="";for(let i=0;i<e;i++){const s=this.popChar();if(N$.test(s)===!1)throw Error("Expecting a HexDecimal digits");n+=s}return{type:"Character",value:parseInt(n,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){const e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}}class sc{visitChildren(e){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&(r.type!==void 0?this.visit(r):Array.isArray(r)&&r.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}const O$=/\r?\n/gm,D$=new uv;class x$ extends sc{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){const n=String.fromCharCode(e.value);if(!this.multiline&&n===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const r=ac(n);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitSet(e){if(!this.multiline){const n=this.regex.substring(e.loc.begin,e.loc.end),r=new RegExp(n);this.multiline=!!`
`.match(r)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const n=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}}const ru=new x$;function M$(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),ru.reset(t),ru.visit(D$.pattern(t)),ru.multiline}catch{return!1}}const L$=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function dv(t){const e=typeof t=="string"?new RegExp(t):t;return L$.some(n=>e.test(n))}function ac(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function F$(t,e){const n=U$(t),r=e.match(n);return!!r&&r[0].length>0}function U$(t){typeof t=="string"&&(t=new RegExp(t));const e=t,n=t.source;let r=0;function i(){let s="",a;function o(c){s+=n.substr(r,c),r+=c}function l(c){s+="(?:"+n.substr(r,c)+"|$)",r+=c}for(;r<n.length;)switch(n[r]){case"\\":switch(n[r+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?n[r+2]==="{"?l(n.indexOf("}",r)-r+1):l(6):l(2);break;case"p":case"P":e.unicode?l(n.indexOf("}",r)-r+1):l(2);break;case"k":l(n.indexOf(">",r)-r+1);break;default:l(2);break}break;case"[":a=/\[(?:\\.|.)*?\]/g,a.lastIndex=r,a=a.exec(n)||[],l(a[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":o(1);break;case"{":a=/\{\d+,?\d*\}/g,a.lastIndex=r,a=a.exec(n),a?o(a[0].length):l(1);break;case"(":if(n[r+1]==="?")switch(n[r+2]){case":":s+="(?:",r+=3,s+=i()+"|$)";break;case"=":s+="(?=",r+=3,s+=i()+")";break;case"!":a=r,r+=3,i(),s+=n.substr(a,r-a);break;case"<":switch(n[r+3]){case"=":case"!":a=r,r+=4,i(),s+=n.substr(a,r-a);break;default:o(n.indexOf(">",r)-r+1),s+=i()+"|$)";break}break}else o(1),s+=i()+"|$)";break;case")":return++r,s;default:l(1);break}return s}return new RegExp(i(),t.flags)}function Sf(t){return t.rules.find(e=>tt(e)&&e.entry)}function H$(t){return t.rules.filter(e=>Vn(e)&&e.hidden)}function fv(t,e){const n=new Set,r=Sf(t);if(!r)return new Set(t.rules);const i=[r].concat(H$(t));for(const a of i)pv(a,n,e);const s=new Set;for(const a of t.rules)(n.has(a.name)||Vn(a)&&a.hidden)&&s.add(a);return s}function pv(t,e,n){e.add(t.name),Qt(t).forEach(r=>{if(Rn(r)||n){const i=r.rule.ref;i&&!e.has(i.name)&&pv(i,e,n)}})}function hv(t){if(t.terminal)return t.terminal;if(t.type.ref){const e=_v(t.type.ref);return e==null?void 0:e.terminal}}function B$(t){return t.hidden&&!dv(lc(t))}function mv(t,e){return!t||!e?[]:fh(t,e,t.astNode,!0)}function dh(t,e,n){if(!t||!e)return;const r=fh(t,e,t.astNode,!0);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function fh(t,e,n,r){if(!r){const i=Dn(t.grammarSource,en);if(i&&i.feature===e)return[t]}return sr(t)&&t.astNode===n?t.content.flatMap(i=>fh(i,e,n,!1)):[]}function j$(t,e){return t?yv(t,e,t==null?void 0:t.astNode):[]}function gv(t,e,n){if(!t)return;const r=yv(t,e,t==null?void 0:t.astNode);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function yv(t,e,n){if(t.astNode!==n)return[];if(Pt(t.grammarSource)&&t.grammarSource.value===e)return[t];const r=Rl(t).iterator();let i;const s=[];do if(i=r.next(),!i.done){const a=i.value;a.astNode===n?Pt(a.grammarSource)&&a.grammarSource.value===e&&s.push(a):r.prune()}while(!i.done);return s}function K$(t){var e;const n=t.astNode;for(;n===((e=t.container)===null||e===void 0?void 0:e.astNode);){const r=Dn(t.grammarSource,en);if(r)return r;t=t.container}}function _v(t){let e=t;return rv(e)&&(xs(e.$container)?e=e.$container.$container:tt(e.$container)?e=e.$container:Ds(e.$container)),vv(t,e,new Map)}function vv(t,e,n){var r;function i(s,a){let o;return Dn(s,en)||(o=vv(a,a,n)),n.set(t,o),o}if(n.has(t))return n.get(t);n.set(t,void 0);for(const s of Qt(e)){if(en(s)&&s.feature.toLowerCase()==="name")return n.set(t,s),s;if(Rn(s)&&tt(s.rule.ref))return i(s,s.rule.ref);if(v$(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref))return i(s,s.typeRef.ref)}}function _s(t,e){return t==="?"||t==="*"||or(e)&&!!e.guardCondition}function q$(t){return t==="*"||t==="+"}function Rv(t){return Tv(t,new Set)}function Tv(t,e){if(e.has(t))return!0;e.add(t);for(const n of Qt(t))if(Rn(n)){if(!n.rule.ref||tt(n.rule.ref)&&!Tv(n.rule.ref,e))return!1}else{if(en(n))return!1;if(xs(n))return!1}return!!t.definition}function Ls(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){const e=t.returnType.ref;if(e){if(tt(e))return e.name;if(iv(e)||sv(e))return e.name}}}function oc(t){var e;if(tt(t))return Rv(t)?t.name:(e=Ls(t))!==null&&e!==void 0?e:t.name;if(iv(t)||sv(t)||_$(t))return t.name;if(xs(t)){const n=G$(t);if(n)return n}else if(rv(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function G$(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return oc(t.type.ref)}function W$(t){var e,n,r;return Vn(t)?(n=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&n!==void 0?n:"string":(r=Ls(t))!==null&&r!==void 0?r:t.name}function lc(t){const e={s:!1,i:!1,u:!1},n=Yr(t.definition,e),r=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(n,r)}const ph=/[\s\S]/.source;function Yr(t,e){if(w$(t))return z$(t);if(b$(t))return V$(t);if(R$(t))return J$(t);if(S$(t)){const n=t.rule.ref;if(!n)throw new Error("Missing rule reference.");return yn(Yr(n.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if($$(t))return X$(t);if(C$(t))return Y$(t);if(k$(t)){const n=t.regex.lastIndexOf("/"),r=t.regex.substring(1,n),i=t.regex.substring(n+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),yn(r,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(A$(t))return yn(ph,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function z$(t){return yn(t.elements.map(e=>Yr(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function V$(t){return yn(t.elements.map(e=>Yr(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function Y$(t){return yn(`${ph}*?${Yr(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function X$(t){return yn(`(?!${Yr(t.terminal)})${ph}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function J$(t){return t.right?yn(`[${iu(t.left)}-${iu(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):yn(iu(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function iu(t){return ac(t.value)}function yn(t,e){var n;return(e.wrap!==!1||e.lookahead)&&(t=`(${(n=e.lookahead)!==null&&n!==void 0?n:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Q$(t){const e=[],n=t.Grammar;for(const r of n.rules)Vn(r)&&B$(r)&&M$(lc(r))&&e.push(r.name);return{multilineCommentRules:e,nameRegexp:Q_}}var $v=typeof global=="object"&&global&&global.Object===Object&&global,Z$=typeof self=="object"&&self&&self.Object===Object&&self,sn=$v||Z$||Function("return this")(),Nt=sn.Symbol,kv=Object.prototype,ek=kv.hasOwnProperty,tk=kv.toString,di=Nt?Nt.toStringTag:void 0;function nk(t){var e=ek.call(t,di),n=t[di];try{t[di]=void 0;var r=!0}catch{}var i=tk.call(t);return r&&(e?t[di]=n:delete t[di]),i}var rk=Object.prototype,ik=rk.toString;function sk(t){return ik.call(t)}var ak="[object Null]",ok="[object Undefined]",am=Nt?Nt.toStringTag:void 0;function Yn(t){return t==null?t===void 0?ok:ak:am&&am in Object(t)?nk(t):sk(t)}function Bt(t){return t!=null&&typeof t=="object"}var lk="[object Symbol]";function Fs(t){return typeof t=="symbol"||Bt(t)&&Yn(t)==lk}function cc(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var ee=Array.isArray,om=Nt?Nt.prototype:void 0,lm=om?om.toString:void 0;function wv(t){if(typeof t=="string")return t;if(ee(t))return cc(t,wv)+"";if(Fs(t))return lm?lm.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var ck=/\s/;function uk(t){for(var e=t.length;e--&&ck.test(t.charAt(e)););return e}var dk=/^\s+/;function fk(t){return t&&t.slice(0,uk(t)+1).replace(dk,"")}function It(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var cm=NaN,pk=/^[-+]0x[0-9a-f]+$/i,hk=/^0b[01]+$/i,mk=/^0o[0-7]+$/i,gk=parseInt;function yk(t){if(typeof t=="number")return t;if(Fs(t))return cm;if(It(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=It(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=fk(t);var n=hk.test(t);return n||mk.test(t)?gk(t.slice(2),n?2:8):pk.test(t)?cm:+t}var um=1/0,_k=17976931348623157e292;function vk(t){if(!t)return t===0?t:0;if(t=yk(t),t===um||t===-um){var e=t<0?-1:1;return e*_k}return t===t?t:0}function uc(t){var e=vk(t),n=e%1;return e===e?n?e-n:e:0}function lr(t){return t}var Rk="[object AsyncFunction]",Tk="[object Function]",$k="[object GeneratorFunction]",kk="[object Proxy]";function Sn(t){if(!It(t))return!1;var e=Yn(t);return e==Tk||e==$k||e==Rk||e==kk}var su=sn["__core-js_shared__"],dm=function(){var t=/[^.]+$/.exec(su&&su.keys&&su.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function wk(t){return!!dm&&dm in t}var bk=Function.prototype,Sk=bk.toString;function hr(t){if(t!=null){try{return Sk.call(t)}catch{}try{return t+""}catch{}}return""}var Ck=/[\\^$.*+?()[\]{}|]/g,Ak=/^\[object .+?Constructor\]$/,Ek=Function.prototype,Pk=Object.prototype,Nk=Ek.toString,Ik=Pk.hasOwnProperty,Ok=RegExp("^"+Nk.call(Ik).replace(Ck,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Dk(t){if(!It(t)||wk(t))return!1;var e=Sn(t)?Ok:Ak;return e.test(hr(t))}function xk(t,e){return t==null?void 0:t[e]}function mr(t,e){var n=xk(t,e);return Dk(n)?n:void 0}var Cf=mr(sn,"WeakMap"),fm=Object.create,Mk=function(){function t(){}return function(e){if(!It(e))return{};if(fm)return fm(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Lk(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function Be(){}function Fk(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var Uk=800,Hk=16,Bk=Date.now;function jk(t){var e=0,n=0;return function(){var r=Bk(),i=Hk-(r-n);if(n=r,i>0){if(++e>=Uk)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Kk(t){return function(){return t}}var wl=function(){try{var t=mr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),qk=wl?function(t,e){return wl(t,"toString",{configurable:!0,enumerable:!1,value:Kk(e),writable:!0})}:lr,Gk=jk(qk);function bv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Sv(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function Wk(t){return t!==t}function zk(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function hh(t,e,n){return e===e?zk(t,e,n):Sv(t,Wk,n)}function Cv(t,e){var n=t==null?0:t.length;return!!n&&hh(t,e,0)>-1}var Vk=9007199254740991,Yk=/^(?:0|[1-9]\d*)$/;function dc(t,e){var n=typeof t;return e=e??Vk,!!e&&(n=="number"||n!="symbol"&&Yk.test(t))&&t>-1&&t%1==0&&t<e}function mh(t,e,n){e=="__proto__"&&wl?wl(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Us(t,e){return t===e||t!==t&&e!==e}var Xk=Object.prototype,Jk=Xk.hasOwnProperty;function fc(t,e,n){var r=t[e];(!(Jk.call(t,e)&&Us(r,n))||n===void 0&&!(e in t))&&mh(t,e,n)}function Hs(t,e,n,r){var i=!n;n||(n={});for(var s=-1,a=e.length;++s<a;){var o=e[s],l=void 0;l===void 0&&(l=t[o]),i?mh(n,o,l):fc(n,o,l)}return n}var pm=Math.max;function Qk(t,e,n){return e=pm(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=pm(r.length-e,0),a=Array(s);++i<s;)a[i]=r[e+i];i=-1;for(var o=Array(e+1);++i<e;)o[i]=r[i];return o[e]=n(a),Lk(t,this,o)}}function gh(t,e){return Gk(Qk(t,e,lr),t+"")}var Zk=9007199254740991;function yh(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Zk}function an(t){return t!=null&&yh(t.length)&&!Sn(t)}function Av(t,e,n){if(!It(n))return!1;var r=typeof e;return(r=="number"?an(n)&&dc(e,n.length):r=="string"&&e in n)?Us(n[e],t):!1}function ew(t){return gh(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,a=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,a&&Av(n[0],n[1],a)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var o=n[r];o&&t(e,o,r,s)}return e})}var tw=Object.prototype;function Bs(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||tw;return t===n}function nw(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var rw="[object Arguments]";function hm(t){return Bt(t)&&Yn(t)==rw}var Ev=Object.prototype,iw=Ev.hasOwnProperty,sw=Ev.propertyIsEnumerable,pc=hm(function(){return arguments}())?hm:function(t){return Bt(t)&&iw.call(t,"callee")&&!sw.call(t,"callee")};function aw(){return!1}var Pv=typeof _t=="object"&&_t&&!_t.nodeType&&_t,mm=Pv&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,ow=mm&&mm.exports===Pv,gm=ow?sn.Buffer:void 0,lw=gm?gm.isBuffer:void 0,vs=lw||aw,cw="[object Arguments]",uw="[object Array]",dw="[object Boolean]",fw="[object Date]",pw="[object Error]",hw="[object Function]",mw="[object Map]",gw="[object Number]",yw="[object Object]",_w="[object RegExp]",vw="[object Set]",Rw="[object String]",Tw="[object WeakMap]",$w="[object ArrayBuffer]",kw="[object DataView]",ww="[object Float32Array]",bw="[object Float64Array]",Sw="[object Int8Array]",Cw="[object Int16Array]",Aw="[object Int32Array]",Ew="[object Uint8Array]",Pw="[object Uint8ClampedArray]",Nw="[object Uint16Array]",Iw="[object Uint32Array]",me={};me[ww]=me[bw]=me[Sw]=me[Cw]=me[Aw]=me[Ew]=me[Pw]=me[Nw]=me[Iw]=!0;me[cw]=me[uw]=me[$w]=me[dw]=me[kw]=me[fw]=me[pw]=me[hw]=me[mw]=me[gw]=me[yw]=me[_w]=me[vw]=me[Rw]=me[Tw]=!1;function Ow(t){return Bt(t)&&yh(t.length)&&!!me[Yn(t)]}function hc(t){return function(e){return t(e)}}var Nv=typeof _t=="object"&&_t&&!_t.nodeType&&_t,gs=Nv&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,Dw=gs&&gs.exports===Nv,au=Dw&&$v.process,jn=function(){try{var t=gs&&gs.require&&gs.require("util").types;return t||au&&au.binding&&au.binding("util")}catch{}}(),ym=jn&&jn.isTypedArray,_h=ym?hc(ym):Ow,xw=Object.prototype,Mw=xw.hasOwnProperty;function Iv(t,e){var n=ee(t),r=!n&&pc(t),i=!n&&!r&&vs(t),s=!n&&!r&&!i&&_h(t),a=n||r||i||s,o=a?nw(t.length,String):[],l=o.length;for(var c in t)(e||Mw.call(t,c))&&!(a&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||dc(c,l)))&&o.push(c);return o}function Ov(t,e){return function(n){return t(e(n))}}var Lw=Ov(Object.keys,Object),Fw=Object.prototype,Uw=Fw.hasOwnProperty;function Dv(t){if(!Bs(t))return Lw(t);var e=[];for(var n in Object(t))Uw.call(t,n)&&n!="constructor"&&e.push(n);return e}function Ot(t){return an(t)?Iv(t):Dv(t)}var Hw=Object.prototype,Bw=Hw.hasOwnProperty,Tt=ew(function(t,e){if(Bs(e)||an(e)){Hs(e,Ot(e),t);return}for(var n in e)Bw.call(e,n)&&fc(t,n,e[n])});function jw(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var Kw=Object.prototype,qw=Kw.hasOwnProperty;function Gw(t){if(!It(t))return jw(t);var e=Bs(t),n=[];for(var r in t)r=="constructor"&&(e||!qw.call(t,r))||n.push(r);return n}function vh(t){return an(t)?Iv(t,!0):Gw(t)}var Ww=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,zw=/^\w*$/;function Rh(t,e){if(ee(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Fs(t)?!0:zw.test(t)||!Ww.test(t)||e!=null&&t in Object(e)}var Rs=mr(Object,"create");function Vw(){this.__data__=Rs?Rs(null):{},this.size=0}function Yw(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Xw="__lodash_hash_undefined__",Jw=Object.prototype,Qw=Jw.hasOwnProperty;function Zw(t){var e=this.__data__;if(Rs){var n=e[t];return n===Xw?void 0:n}return Qw.call(e,t)?e[t]:void 0}var eb=Object.prototype,tb=eb.hasOwnProperty;function nb(t){var e=this.__data__;return Rs?e[t]!==void 0:tb.call(e,t)}var rb="__lodash_hash_undefined__";function ib(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Rs&&e===void 0?rb:e,this}function cr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}cr.prototype.clear=Vw;cr.prototype.delete=Yw;cr.prototype.get=Zw;cr.prototype.has=nb;cr.prototype.set=ib;function sb(){this.__data__=[],this.size=0}function mc(t,e){for(var n=t.length;n--;)if(Us(t[n][0],e))return n;return-1}var ab=Array.prototype,ob=ab.splice;function lb(t){var e=this.__data__,n=mc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():ob.call(e,n,1),--this.size,!0}function cb(t){var e=this.__data__,n=mc(e,t);return n<0?void 0:e[n][1]}function ub(t){return mc(this.__data__,t)>-1}function db(t,e){var n=this.__data__,r=mc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Cn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Cn.prototype.clear=sb;Cn.prototype.delete=lb;Cn.prototype.get=cb;Cn.prototype.has=ub;Cn.prototype.set=db;var Ts=mr(sn,"Map");function fb(){this.size=0,this.__data__={hash:new cr,map:new(Ts||Cn),string:new cr}}function pb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function gc(t,e){var n=t.__data__;return pb(e)?n[typeof e=="string"?"string":"hash"]:n.map}function hb(t){var e=gc(this,t).delete(t);return this.size-=e?1:0,e}function mb(t){return gc(this,t).get(t)}function gb(t){return gc(this,t).has(t)}function yb(t,e){var n=gc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function An(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}An.prototype.clear=fb;An.prototype.delete=hb;An.prototype.get=mb;An.prototype.has=gb;An.prototype.set=yb;var _b="Expected a function";function Th(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(_b);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var a=t.apply(this,r);return n.cache=s.set(i,a)||s,a};return n.cache=new(Th.Cache||An),n}Th.Cache=An;var vb=500;function Rb(t){var e=Th(t,function(r){return n.size===vb&&n.clear(),r}),n=e.cache;return e}var Tb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$b=/\\(\\)?/g,kb=Rb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Tb,function(n,r,i,s){e.push(i?s.replace($b,"$1"):r||n)}),e});function wb(t){return t==null?"":wv(t)}function yc(t,e){return ee(t)?t:Rh(t,e)?[t]:kb(wb(t))}function js(t){if(typeof t=="string"||Fs(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function $h(t,e){e=yc(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[js(e[n++])];return n&&n==r?t:void 0}function bb(t,e,n){var r=t==null?void 0:$h(t,e);return r===void 0?n:r}function kh(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var _m=Nt?Nt.isConcatSpreadable:void 0;function Sb(t){return ee(t)||pc(t)||!!(_m&&t&&t[_m])}function wh(t,e,n,r,i){var s=-1,a=t.length;for(n||(n=Sb),i||(i=[]);++s<a;){var o=t[s];n(o)?kh(i,o):r||(i[i.length]=o)}return i}function Et(t){var e=t==null?0:t.length;return e?wh(t):[]}var xv=Ov(Object.getPrototypeOf,Object);function Mv(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function Cb(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function Ab(){this.__data__=new Cn,this.size=0}function Eb(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Pb(t){return this.__data__.get(t)}function Nb(t){return this.__data__.has(t)}var Ib=200;function Ob(t,e){var n=this.__data__;if(n instanceof Cn){var r=n.__data__;if(!Ts||r.length<Ib-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new An(r)}return n.set(t,e),this.size=n.size,this}function Zt(t){var e=this.__data__=new Cn(t);this.size=e.size}Zt.prototype.clear=Ab;Zt.prototype.delete=Eb;Zt.prototype.get=Pb;Zt.prototype.has=Nb;Zt.prototype.set=Ob;function Db(t,e){return t&&Hs(e,Ot(e),t)}function xb(t,e){return t&&Hs(e,vh(e),t)}var Lv=typeof _t=="object"&&_t&&!_t.nodeType&&_t,vm=Lv&&typeof vt=="object"&&vt&&!vt.nodeType&&vt,Mb=vm&&vm.exports===Lv,Rm=Mb?sn.Buffer:void 0,Tm=Rm?Rm.allocUnsafe:void 0;function Lb(t,e){var n=t.length,r=Tm?Tm(n):new t.constructor(n);return t.copy(r),r}function bh(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var a=t[n];e(a,n,t)&&(s[i++]=a)}return s}function Fv(){return[]}var Fb=Object.prototype,Ub=Fb.propertyIsEnumerable,$m=Object.getOwnPropertySymbols,Sh=$m?function(t){return t==null?[]:(t=Object(t),bh($m(t),function(e){return Ub.call(t,e)}))}:Fv;function Hb(t,e){return Hs(t,Sh(t),e)}var Bb=Object.getOwnPropertySymbols,Uv=Bb?function(t){for(var e=[];t;)kh(e,Sh(t)),t=xv(t);return e}:Fv;function jb(t,e){return Hs(t,Uv(t),e)}function Hv(t,e,n){var r=e(t);return ee(t)?r:kh(r,n(t))}function Af(t){return Hv(t,Ot,Sh)}function Kb(t){return Hv(t,vh,Uv)}var Ef=mr(sn,"DataView"),Pf=mr(sn,"Promise"),Cr=mr(sn,"Set"),km="[object Map]",qb="[object Object]",wm="[object Promise]",bm="[object Set]",Sm="[object WeakMap]",Cm="[object DataView]",Gb=hr(Ef),Wb=hr(Ts),zb=hr(Pf),Vb=hr(Cr),Yb=hr(Cf),St=Yn;(Ef&&St(new Ef(new ArrayBuffer(1)))!=Cm||Ts&&St(new Ts)!=km||Pf&&St(Pf.resolve())!=wm||Cr&&St(new Cr)!=bm||Cf&&St(new Cf)!=Sm)&&(St=function(t){var e=Yn(t),n=e==qb?t.constructor:void 0,r=n?hr(n):"";if(r)switch(r){case Gb:return Cm;case Wb:return km;case zb:return wm;case Vb:return bm;case Yb:return Sm}return e});var Xb=Object.prototype,Jb=Xb.hasOwnProperty;function Qb(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Jb.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var bl=sn.Uint8Array;function Zb(t){var e=new t.constructor(t.byteLength);return new bl(e).set(new bl(t)),e}function eS(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var tS=/\w*$/;function nS(t){var e=new t.constructor(t.source,tS.exec(t));return e.lastIndex=t.lastIndex,e}var Am=Nt?Nt.prototype:void 0,Em=Am?Am.valueOf:void 0;function rS(t){return Em?Object(Em.call(t)):{}}function iS(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var sS="[object Boolean]",aS="[object Date]",oS="[object Map]",lS="[object Number]",cS="[object RegExp]",uS="[object Set]",dS="[object String]",fS="[object Symbol]",pS="[object ArrayBuffer]",hS="[object DataView]",mS="[object Float32Array]",gS="[object Float64Array]",yS="[object Int8Array]",_S="[object Int16Array]",vS="[object Int32Array]",RS="[object Uint8Array]",TS="[object Uint8ClampedArray]",$S="[object Uint16Array]",kS="[object Uint32Array]";function wS(t,e,n){var r=t.constructor;switch(e){case pS:return Zb(t);case sS:case aS:return new r(+t);case hS:return eS(t);case mS:case gS:case yS:case _S:case vS:case RS:case TS:case $S:case kS:return iS(t);case oS:return new r;case lS:case dS:return new r(t);case cS:return nS(t);case uS:return new r;case fS:return rS(t)}}function bS(t){return typeof t.constructor=="function"&&!Bs(t)?Mk(xv(t)):{}}var SS="[object Map]";function CS(t){return Bt(t)&&St(t)==SS}var Pm=jn&&jn.isMap,AS=Pm?hc(Pm):CS,ES="[object Set]";function PS(t){return Bt(t)&&St(t)==ES}var Nm=jn&&jn.isSet,NS=Nm?hc(Nm):PS,IS=2,Bv="[object Arguments]",OS="[object Array]",DS="[object Boolean]",xS="[object Date]",MS="[object Error]",jv="[object Function]",LS="[object GeneratorFunction]",FS="[object Map]",US="[object Number]",Kv="[object Object]",HS="[object RegExp]",BS="[object Set]",jS="[object String]",KS="[object Symbol]",qS="[object WeakMap]",GS="[object ArrayBuffer]",WS="[object DataView]",zS="[object Float32Array]",VS="[object Float64Array]",YS="[object Int8Array]",XS="[object Int16Array]",JS="[object Int32Array]",QS="[object Uint8Array]",ZS="[object Uint8ClampedArray]",eC="[object Uint16Array]",tC="[object Uint32Array]",fe={};fe[Bv]=fe[OS]=fe[GS]=fe[WS]=fe[DS]=fe[xS]=fe[zS]=fe[VS]=fe[YS]=fe[XS]=fe[JS]=fe[FS]=fe[US]=fe[Kv]=fe[HS]=fe[BS]=fe[jS]=fe[KS]=fe[QS]=fe[ZS]=fe[eC]=fe[tC]=!0;fe[MS]=fe[jv]=fe[qS]=!1;function ol(t,e,n,r,i,s){var a,o=e&IS;if(a!==void 0)return a;if(!It(t))return t;var l=ee(t);if(l)return a=Qb(t),Fk(t,a);var c=St(t),u=c==jv||c==LS;if(vs(t))return Lb(t);if(c==Kv||c==Bv||u&&!i)return a=u?{}:bS(t),o?jb(t,xb(a,t)):Hb(t,Db(a,t));if(!fe[c])return i?t:{};a=wS(t,c),s||(s=new Zt);var d=s.get(t);if(d)return d;s.set(t,a),NS(t)?t.forEach(function(f){a.add(ol(f,e,n,f,t,s))}):AS(t)&&t.forEach(function(f,y){a.set(y,ol(f,e,n,y,t,s))});var p=Af,h=l?void 0:p(t);return bv(h||t,function(f,y){h&&(y=f,f=t[y]),fc(a,y,ol(f,e,n,y,t,s))}),a}var nC=4;function Qe(t){return ol(t,nC)}function Ks(t){for(var e=-1,n=t==null?0:t.length,r=0,i=[];++e<n;){var s=t[e];s&&(i[r++]=s)}return i}var rC="__lodash_hash_undefined__";function iC(t){return this.__data__.set(t,rC),this}function sC(t){return this.__data__.has(t)}function Nr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new An;++e<n;)this.add(t[e])}Nr.prototype.add=Nr.prototype.push=iC;Nr.prototype.has=sC;function qv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function Ch(t,e){return t.has(e)}var aC=1,oC=2;function Gv(t,e,n,r,i,s){var a=n&aC,o=t.length,l=e.length;if(o!=l&&!(a&&l>o))return!1;var c=s.get(t),u=s.get(e);if(c&&u)return c==e&&u==t;var d=-1,p=!0,h=n&oC?new Nr:void 0;for(s.set(t,e),s.set(e,t);++d<o;){var f=t[d],y=e[d];if(r)var $=a?r(y,f,d,e,t,s):r(f,y,d,t,e,s);if($!==void 0){if($)continue;p=!1;break}if(h){if(!qv(e,function(v,m){if(!Ch(h,m)&&(f===v||i(f,v,n,r,s)))return h.push(m)})){p=!1;break}}else if(!(f===y||i(f,y,n,r,s))){p=!1;break}}return s.delete(t),s.delete(e),p}function lC(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function Ah(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var cC=1,uC=2,dC="[object Boolean]",fC="[object Date]",pC="[object Error]",hC="[object Map]",mC="[object Number]",gC="[object RegExp]",yC="[object Set]",_C="[object String]",vC="[object Symbol]",RC="[object ArrayBuffer]",TC="[object DataView]",Im=Nt?Nt.prototype:void 0,ou=Im?Im.valueOf:void 0;function $C(t,e,n,r,i,s,a){switch(n){case TC:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case RC:return!(t.byteLength!=e.byteLength||!s(new bl(t),new bl(e)));case dC:case fC:case mC:return Us(+t,+e);case pC:return t.name==e.name&&t.message==e.message;case gC:case _C:return t==e+"";case hC:var o=lC;case yC:var l=r&cC;if(o||(o=Ah),t.size!=e.size&&!l)return!1;var c=a.get(t);if(c)return c==e;r|=uC,a.set(t,e);var u=Gv(o(t),o(e),r,i,s,a);return a.delete(t),u;case vC:if(ou)return ou.call(t)==ou.call(e)}return!1}var kC=1,wC=Object.prototype,bC=wC.hasOwnProperty;function SC(t,e,n,r,i,s){var a=n&kC,o=Af(t),l=o.length,c=Af(e),u=c.length;if(l!=u&&!a)return!1;for(var d=l;d--;){var p=o[d];if(!(a?p in e:bC.call(e,p)))return!1}var h=s.get(t),f=s.get(e);if(h&&f)return h==e&&f==t;var y=!0;s.set(t,e),s.set(e,t);for(var $=a;++d<l;){p=o[d];var v=t[p],m=e[p];if(r)var g=a?r(m,v,p,e,t,s):r(v,m,p,t,e,s);if(!(g===void 0?v===m||i(v,m,n,r,s):g)){y=!1;break}$||($=p=="constructor")}if(y&&!$){var k=t.constructor,F=e.constructor;k!=F&&"constructor"in t&&"constructor"in e&&!(typeof k=="function"&&k instanceof k&&typeof F=="function"&&F instanceof F)&&(y=!1)}return s.delete(t),s.delete(e),y}var CC=1,Om="[object Arguments]",Dm="[object Array]",Sa="[object Object]",AC=Object.prototype,xm=AC.hasOwnProperty;function EC(t,e,n,r,i,s){var a=ee(t),o=ee(e),l=a?Dm:St(t),c=o?Dm:St(e);l=l==Om?Sa:l,c=c==Om?Sa:c;var u=l==Sa,d=c==Sa,p=l==c;if(p&&vs(t)){if(!vs(e))return!1;a=!0,u=!1}if(p&&!u)return s||(s=new Zt),a||_h(t)?Gv(t,e,n,r,i,s):$C(t,e,l,n,r,i,s);if(!(n&CC)){var h=u&&xm.call(t,"__wrapped__"),f=d&&xm.call(e,"__wrapped__");if(h||f){var y=h?t.value():t,$=f?e.value():e;return s||(s=new Zt),i(y,$,n,r,s)}}return p?(s||(s=new Zt),SC(t,e,n,r,i,s)):!1}function Eh(t,e,n,r,i){return t===e?!0:t==null||e==null||!Bt(t)&&!Bt(e)?t!==t&&e!==e:EC(t,e,n,r,Eh,i)}var PC=1,NC=2;function IC(t,e,n,r){var i=n.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var a=n[i];if(a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<s;){a=n[i];var o=a[0],l=t[o],c=a[1];if(a[2]){if(l===void 0&&!(o in t))return!1}else{var u=new Zt,d;if(!(d===void 0?Eh(c,l,PC|NC,r,u):d))return!1}}return!0}function Wv(t){return t===t&&!It(t)}function OC(t){for(var e=Ot(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Wv(i)]}return e}function zv(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function DC(t){var e=OC(t);return e.length==1&&e[0][2]?zv(e[0][0],e[0][1]):function(n){return n===t||IC(n,t,e)}}function xC(t,e){return t!=null&&e in Object(t)}function Vv(t,e,n){e=yc(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var a=js(e[r]);if(!(s=t!=null&&n(t,a)))break;t=t[a]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&yh(i)&&dc(a,i)&&(ee(t)||pc(t)))}function MC(t,e){return t!=null&&Vv(t,e,xC)}var LC=1,FC=2;function UC(t,e){return Rh(t)&&Wv(e)?zv(js(t),e):function(n){var r=bb(n,t);return r===void 0&&r===e?MC(n,t):Eh(e,r,LC|FC)}}function HC(t){return function(e){return e==null?void 0:e[t]}}function BC(t){return function(e){return $h(e,t)}}function jC(t){return Rh(t)?HC(js(t)):BC(t)}function Kt(t){return typeof t=="function"?t:t==null?lr:typeof t=="object"?ee(t)?UC(t[0],t[1]):DC(t):jC(t)}function KC(t,e,n,r){for(var i=-1,s=t==null?0:t.length;++i<s;){var a=t[i];e(r,a,n(a),t)}return r}function qC(t){return function(e,n,r){for(var i=-1,s=Object(e),a=r(e),o=a.length;o--;){var l=a[++i];if(n(s[l],l,s)===!1)break}return e}}var GC=qC();function WC(t,e){return t&&GC(t,e,Ot)}function zC(t,e){return function(n,r){if(n==null)return n;if(!an(n))return t(n,r);for(var i=n.length,s=-1,a=Object(n);++s<i&&r(a[s],s,a)!==!1;);return n}}var gr=zC(WC);function VC(t,e,n,r){return gr(t,function(i,s,a){e(r,i,n(i),a)}),r}function YC(t,e){return function(n,r){var i=ee(n)?KC:VC,s=e?e():{};return i(n,t,Kt(r),s)}}var Yv=Object.prototype,XC=Yv.hasOwnProperty,Ph=gh(function(t,e){t=Object(t);var n=-1,r=e.length,i=r>2?e[2]:void 0;for(i&&Av(e[0],e[1],i)&&(r=1);++n<r;)for(var s=e[n],a=vh(s),o=-1,l=a.length;++o<l;){var c=a[o],u=t[c];(u===void 0||Us(u,Yv[c])&&!XC.call(t,c))&&(t[c]=s[c])}return t});function Mm(t){return Bt(t)&&an(t)}var JC=200;function QC(t,e,n,r){var i=-1,s=Cv,a=!0,o=t.length,l=[],c=e.length;if(!o)return l;e.length>=JC&&(s=Ch,a=!1,e=new Nr(e));e:for(;++i<o;){var u=t[i],d=u;if(u=u!==0?u:0,a&&d===d){for(var p=c;p--;)if(e[p]===d)continue e;l.push(u)}else s(e,d,r)||l.push(u)}return l}var _c=gh(function(t,e){return Mm(t)?QC(t,wh(e,1,Mm,!0)):[]});function Ir(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function ze(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:uc(e),Mv(t,e<0?0:e,r)):[]}function $s(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:uc(e),e=r-e,Mv(t,0,e<0?0:e)):[]}function ZC(t){return typeof t=="function"?t:lr}function j(t,e){var n=ee(t)?bv:gr;return n(t,ZC(e))}function eA(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function tA(t,e){var n=!0;return gr(t,function(r,i,s){return n=!!e(r,i,s),n}),n}function Ut(t,e,n){var r=ee(t)?eA:tA;return r(t,Kt(e))}function Xv(t,e){var n=[];return gr(t,function(r,i,s){e(r,i,s)&&n.push(r)}),n}function $t(t,e){var n=ee(t)?bh:Xv;return n(t,Kt(e))}function nA(t){return function(e,n,r){var i=Object(e);if(!an(e)){var s=Kt(n);e=Ot(e),n=function(o){return s(i[o],o,i)}}var a=t(e,n,r);return a>-1?i[s?e[a]:a]:void 0}}var rA=Math.max;function iA(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:uc(n);return i<0&&(i=rA(r+i,0)),Sv(t,Kt(e),i)}var Or=nA(iA);function jt(t){return t&&t.length?t[0]:void 0}function sA(t,e){var n=-1,r=an(t)?Array(t.length):[];return gr(t,function(i,s,a){r[++n]=e(i,s,a)}),r}function L(t,e){var n=ee(t)?cc:sA;return n(t,Kt(e))}function Rt(t,e){return wh(L(t,e))}var aA=Object.prototype,oA=aA.hasOwnProperty,lA=YC(function(t,e,n){oA.call(t,n)?t[n].push(e):mh(t,n,[e])}),cA=Object.prototype,uA=cA.hasOwnProperty;function dA(t,e){return t!=null&&uA.call(t,e)}function K(t,e){return t!=null&&Vv(t,e,dA)}var fA="[object String]";function ft(t){return typeof t=="string"||!ee(t)&&Bt(t)&&Yn(t)==fA}function pA(t,e){return cc(e,function(n){return t[n]})}function je(t){return t==null?[]:pA(t,Ot(t))}var hA=Math.max;function lt(t,e,n,r){t=an(t)?t:je(t),n=n?uc(n):0;var i=t.length;return n<0&&(n=hA(i+n,0)),ft(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&hh(t,e,n)>-1}function Lm(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=0;return hh(t,e,i)}var mA="[object Map]",gA="[object Set]",yA=Object.prototype,_A=yA.hasOwnProperty;function ce(t){if(t==null)return!0;if(an(t)&&(ee(t)||typeof t=="string"||typeof t.splice=="function"||vs(t)||_h(t)||pc(t)))return!t.length;var e=St(t);if(e==mA||e==gA)return!t.size;if(Bs(t))return!Dv(t).length;for(var n in t)if(_A.call(t,n))return!1;return!0}var vA="[object RegExp]";function RA(t){return Bt(t)&&Yn(t)==vA}var Fm=jn&&jn.isRegExp,Tn=Fm?hc(Fm):RA;function $n(t){return t===void 0}function TA(t,e){return t<e}function $A(t,e,n){for(var r=-1,i=t.length;++r<i;){var s=t[r],a=e(s);if(a!=null&&(o===void 0?a===a&&!Fs(a):n(a,o)))var o=a,l=s}return l}function kA(t){return t&&t.length?$A(t,lr,TA):void 0}var wA="Expected a function";function bA(t){if(typeof t!="function")throw new TypeError(wA);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function SA(t,e,n,r){if(!It(t))return t;e=yc(e,t);for(var i=-1,s=e.length,a=s-1,o=t;o!=null&&++i<s;){var l=js(e[i]),c=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=a){var u=o[l];c=void 0,c===void 0&&(c=It(u)?u:dc(e[i+1])?[]:{})}fc(o,l,c),o=o[l]}return t}function CA(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var a=e[r],o=$h(t,a);n(o,a)&&SA(s,yc(a,t),o)}return s}function qt(t,e){if(t==null)return{};var n=cc(Kb(t),function(r){return[r]});return e=Kt(e),CA(t,n,function(r,i){return e(r,i[0])})}function AA(t,e,n,r,i){return i(t,function(s,a,o){n=r?(r=!1,s):e(n,s,a,o)}),n}function st(t,e,n){var r=ee(t)?Cb:AA,i=arguments.length<3;return r(t,Kt(e),n,i,gr)}function vc(t,e){var n=ee(t)?bh:Xv;return n(t,bA(Kt(e)))}function EA(t,e){var n;return gr(t,function(r,i,s){return n=e(r,i,s),!n}),!!n}function Jv(t,e,n){var r=ee(t)?qv:EA;return r(t,Kt(e))}var PA=1/0,NA=Cr&&1/Ah(new Cr([,-0]))[1]==PA?function(t){return new Cr(t)}:Be,IA=200;function Qv(t,e,n){var r=-1,i=Cv,s=t.length,a=!0,o=[],l=o;if(s>=IA){var c=e?null:NA(t);if(c)return Ah(c);a=!1,i=Ch,l=new Nr}else l=e?[]:o;e:for(;++r<s;){var u=t[r],d=e?e(u):u;if(u=u!==0?u:0,a&&d===d){for(var p=l.length;p--;)if(l[p]===d)continue e;e&&l.push(d),o.push(u)}else i(l,d,n)||(l!==o&&l.push(d),o.push(u))}return o}function Nh(t){return t&&t.length?Qv(t):[]}function OA(t,e){return t&&t.length?Qv(t,Kt(e)):[]}function Nf(t){console&&console.error&&console.error(`Error: ${t}`)}function Zv(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function eR(t){const e=new Date().getTime(),n=t();return{time:new Date().getTime()-e,value:n}}function tR(t){function e(){}e.prototype=t;const n=new e;function r(){return typeof n.bar}return r(),r(),t}function DA(t){return xA(t)?t.LABEL:t.name}function xA(t){return ft(t.LABEL)&&t.LABEL!==""}class on{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),j(this.definition,n=>{n.accept(e)})}}class at extends on{constructor(e){super([]),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class Xr extends on{constructor(e){super(e.definition),this.orgText="",Tt(this,qt(e,n=>n!==void 0))}}class pt extends on{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Tt(this,qt(e,n=>n!==void 0))}}class Je extends on{constructor(e){super(e.definition),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}}class kt extends on{constructor(e){super(e.definition),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}}class wt extends on{constructor(e){super(e.definition),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}}class Ce extends on{constructor(e){super(e.definition),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}}class ht extends on{constructor(e){super(e.definition),this.idx=1,Tt(this,qt(e,n=>n!==void 0))}}class mt extends on{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Tt(this,qt(e,n=>n!==void 0))}}class ge{constructor(e){this.idx=1,Tt(this,qt(e,n=>n!==void 0))}accept(e){e.visit(this)}}function MA(t){return L(t,ll)}function ll(t){function e(n){return L(n,ll)}if(t instanceof at){const n={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return ft(t.label)&&(n.label=t.label),n}else{if(t instanceof pt)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Je)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof kt)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof wt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:ll(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ht)return{type:"RepetitionWithSeparator",idx:t.idx,separator:ll(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ce)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof mt)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ge){const n={type:"Terminal",name:t.terminalType.name,label:DA(t.terminalType),idx:t.idx};ft(t.label)&&(n.terminalLabel=t.label);const r=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=Tn(r)?r.source:r),n}else{if(t instanceof Xr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}class Jr{visit(e){const n=e;switch(n.constructor){case at:return this.visitNonTerminal(n);case pt:return this.visitAlternative(n);case Je:return this.visitOption(n);case kt:return this.visitRepetitionMandatory(n);case wt:return this.visitRepetitionMandatoryWithSeparator(n);case ht:return this.visitRepetitionWithSeparator(n);case Ce:return this.visitRepetition(n);case mt:return this.visitAlternation(n);case ge:return this.visitTerminal(n);case Xr:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function LA(t){return t instanceof pt||t instanceof Je||t instanceof Ce||t instanceof kt||t instanceof wt||t instanceof ht||t instanceof ge||t instanceof Xr}function Sl(t,e=[]){return t instanceof Je||t instanceof Ce||t instanceof ht?!0:t instanceof mt?Jv(t.definition,r=>Sl(r,e)):t instanceof at&&lt(e,t)?!1:t instanceof on?(t instanceof at&&e.push(t),Ut(t.definition,r=>Sl(r,e))):!1}function FA(t){return t instanceof mt}function Yt(t){if(t instanceof at)return"SUBRULE";if(t instanceof Je)return"OPTION";if(t instanceof mt)return"OR";if(t instanceof kt)return"AT_LEAST_ONE";if(t instanceof wt)return"AT_LEAST_ONE_SEP";if(t instanceof ht)return"MANY_SEP";if(t instanceof Ce)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}class Rc{walk(e,n=[]){j(e.definition,(r,i)=>{const s=ze(e.definition,i+1);if(r instanceof at)this.walkProdRef(r,s,n);else if(r instanceof ge)this.walkTerminal(r,s,n);else if(r instanceof pt)this.walkFlat(r,s,n);else if(r instanceof Je)this.walkOption(r,s,n);else if(r instanceof kt)this.walkAtLeastOne(r,s,n);else if(r instanceof wt)this.walkAtLeastOneSep(r,s,n);else if(r instanceof ht)this.walkManySep(r,s,n);else if(r instanceof Ce)this.walkMany(r,s,n);else if(r instanceof mt)this.walkOr(r,s,n);else throw Error("non exhaustive match")})}walkTerminal(e,n,r){}walkProdRef(e,n,r){}walkFlat(e,n,r){const i=n.concat(r);this.walk(e,i)}walkOption(e,n,r){const i=n.concat(r);this.walk(e,i)}walkAtLeastOne(e,n,r){const i=[new Je({definition:e.definition})].concat(n,r);this.walk(e,i)}walkAtLeastOneSep(e,n,r){const i=Um(e,n,r);this.walk(e,i)}walkMany(e,n,r){const i=[new Je({definition:e.definition})].concat(n,r);this.walk(e,i)}walkManySep(e,n,r){const i=Um(e,n,r);this.walk(e,i)}walkOr(e,n,r){const i=n.concat(r);j(e.definition,s=>{const a=new pt({definition:[s]});this.walk(a,i)})}}function Um(t,e,n){return[new Je({definition:[new ge({terminalType:t.separator})].concat(t.definition)})].concat(e,n)}function qs(t){if(t instanceof at)return qs(t.referencedRule);if(t instanceof ge)return BA(t);if(LA(t))return UA(t);if(FA(t))return HA(t);throw Error("non exhaustive match")}function UA(t){let e=[];const n=t.definition;let r=0,i=n.length>r,s,a=!0;for(;i&&a;)s=n[r],a=Sl(s),e=e.concat(qs(s)),r=r+1,i=n.length>r;return Nh(e)}function HA(t){const e=L(t.definition,n=>qs(n));return Nh(Et(e))}function BA(t){return[t.terminalType]}const nR="_~IN~_";class jA extends Rc{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,n,r){}walkProdRef(e,n,r){const i=qA(e.referencedRule,e.idx)+this.topProd.name,s=n.concat(r),a=new pt({definition:s}),o=qs(a);this.follows[i]=o}}function KA(t){const e={};return j(t,n=>{const r=new jA(n).startWalking();Tt(e,r)}),e}function qA(t,e){return t.name+e+nR}let cl={};const GA=new uv;function Tc(t){const e=t.toString();if(cl.hasOwnProperty(e))return cl[e];{const n=GA.pattern(e);return cl[e]=n,n}}function WA(){cl={}}const rR="Complement Sets are not supported for first char optimization",Cl=`Unable to use "first char" lexer optimizations:
`;function zA(t,e=!1){try{const n=Tc(t);return If(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===rR)e&&Zv(`${Cl}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let r="";e&&(r=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Nf(`${Cl}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r)}}return[]}function If(t,e,n){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)If(t.value[i],e,n);break;case"Alternative":const r=t.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}const a=s;switch(a.type){case"Character":Ca(a.value,e,n);break;case"Set":if(a.complement===!0)throw Error(rR);j(a.value,l=>{if(typeof l=="number")Ca(l,e,n);else{const c=l;if(n===!0)for(let u=c.from;u<=c.to;u++)Ca(u,e,n);else{for(let u=c.from;u<=c.to&&u<us;u++)Ca(u,e,n);if(c.to>=us){const u=c.from>=us?c.from:us,d=c.to,p=Kn(u),h=Kn(d);for(let f=p;f<=h;f++)e[f]=f}}}});break;case"Group":If(a.value,e,n);break;default:throw Error("Non Exhaustive Match")}const o=a.quantifier!==void 0&&a.quantifier.atLeast===0;if(a.type==="Group"&&Of(a)===!1||a.type!=="Group"&&o===!1)break}break;default:throw Error("non exhaustive match!")}return je(e)}function Ca(t,e,n){const r=Kn(t);e[r]=r,n===!0&&VA(t,e)}function VA(t,e){const n=String.fromCharCode(t),r=n.toUpperCase();if(r!==n){const i=Kn(r.charCodeAt(0));e[i]=i}else{const i=n.toLowerCase();if(i!==n){const s=Kn(i.charCodeAt(0));e[s]=s}}}function Hm(t,e){return Or(t.value,n=>{if(typeof n=="number")return lt(e,n);{const r=n;return Or(e,i=>r.from<=i&&i<=r.to)!==void 0}})}function Of(t){const e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ee(t.value)?Ut(t.value,Of):Of(t.value):!1}class YA extends sc{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){lt(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?Hm(e,this.targetCharCodes)===void 0&&(this.found=!0):Hm(e,this.targetCharCodes)!==void 0&&(this.found=!0)}}function Ih(t,e){if(e instanceof RegExp){const n=Tc(e),r=new YA(t);return r.visit(n),r.found}else return Or(e,n=>lt(t,n.charCodeAt(0)))!==void 0}const ur="PATTERN",cs="defaultMode",Aa="modes";let iR=typeof new RegExp("(?:)").sticky=="boolean";function XA(t,e){e=Ph(e,{useSticky:iR,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(m,g)=>g()});const n=e.tracer;n("initCharCodeToOptimizedIndexMap",()=>{vE()});let r;n("Reject Lexer.NA",()=>{r=vc(t,m=>m[ur]===dt.NA)});let i=!1,s;n("Transform Patterns",()=>{i=!1,s=L(r,m=>{const g=m[ur];if(Tn(g)){const k=g.source;return k.length===1&&k!=="^"&&k!=="$"&&k!=="."&&!g.ignoreCase?k:k.length===2&&k[0]==="\\"&&!lt(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],k[1])?k[1]:e.useSticky?jm(g):Bm(g)}else{if(Sn(g))return i=!0,{exec:g};if(typeof g=="object")return i=!0,g;if(typeof g=="string"){if(g.length===1)return g;{const k=g.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),F=new RegExp(k);return e.useSticky?jm(F):Bm(F)}}else throw Error("non exhaustive match")}})});let a,o,l,c,u;n("misc mapping",()=>{a=L(r,m=>m.tokenTypeIdx),o=L(r,m=>{const g=m.GROUP;if(g!==dt.SKIPPED){if(ft(g))return g;if($n(g))return!1;throw Error("non exhaustive match")}}),l=L(r,m=>{const g=m.LONGER_ALT;if(g)return ee(g)?L(g,F=>Lm(r,F)):[Lm(r,g)]}),c=L(r,m=>m.PUSH_MODE),u=L(r,m=>K(m,"POP_MODE"))});let d;n("Line Terminator Handling",()=>{const m=oR(e.lineTerminatorCharacters);d=L(r,g=>!1),e.positionTracking!=="onlyOffset"&&(d=L(r,g=>K(g,"LINE_BREAKS")?!!g.LINE_BREAKS:aR(g,m)===!1&&Ih(m,g.PATTERN)))});let p,h,f,y;n("Misc Mapping #2",()=>{p=L(r,sR),h=L(s,gE),f=st(r,(m,g)=>{const k=g.GROUP;return ft(k)&&k!==dt.SKIPPED&&(m[k]=[]),m},{}),y=L(s,(m,g)=>({pattern:s[g],longerAlt:l[g],canLineTerminator:d[g],isCustom:p[g],short:h[g],group:o[g],push:c[g],pop:u[g],tokenTypeIdx:a[g],tokenType:r[g]}))});let $=!0,v=[];return e.safeMode||n("First Char Optimization",()=>{v=st(r,(m,g,k)=>{if(typeof g.PATTERN=="string"){const F=g.PATTERN.charCodeAt(0),G=Kn(F);lu(m,G,y[k])}else if(ee(g.START_CHARS_HINT)){let F;j(g.START_CHARS_HINT,G=>{const X=typeof G=="string"?G.charCodeAt(0):G,ye=Kn(X);F!==ye&&(F=ye,lu(m,ye,y[k]))})}else if(Tn(g.PATTERN))if(g.PATTERN.unicode)$=!1,e.ensureOptimizations&&Nf(`${Cl}	Unable to analyze < ${g.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{const F=zA(g.PATTERN,e.ensureOptimizations);ce(F)&&($=!1),j(F,G=>{lu(m,G,y[k])})}else e.ensureOptimizations&&Nf(`${Cl}	TokenType: <${g.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),$=!1;return m},[])}),{emptyGroups:f,patternIdxToConfig:y,charCodeToPatternIdxToConfig:v,hasCustom:i,canBeOptimized:$}}function JA(t,e){let n=[];const r=ZA(t);n=n.concat(r.errors);const i=eE(r.valid),s=i.valid;return n=n.concat(i.errors),n=n.concat(QA(s)),n=n.concat(lE(s)),n=n.concat(cE(s,e)),n=n.concat(uE(s)),n}function QA(t){let e=[];const n=$t(t,r=>Tn(r[ur]));return e=e.concat(nE(n)),e=e.concat(sE(n)),e=e.concat(aE(n)),e=e.concat(oE(n)),e=e.concat(rE(n)),e}function ZA(t){const e=$t(t,i=>!K(i,ur)),n=L(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Ae.MISSING_PATTERN,tokenTypes:[i]})),r=_c(t,e);return{errors:n,valid:r}}function eE(t){const e=$t(t,i=>{const s=i[ur];return!Tn(s)&&!Sn(s)&&!K(s,"exec")&&!ft(s)}),n=L(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ae.INVALID_PATTERN,tokenTypes:[i]})),r=_c(t,e);return{errors:n,valid:r}}const tE=/[^\\][$]/;function nE(t){class e extends sc{constructor(){super(...arguments),this.found=!1}visitEndAnchor(s){this.found=!0}}const n=$t(t,i=>{const s=i.PATTERN;try{const a=Tc(s),o=new e;return o.visit(a),o.found}catch{return tE.test(s.source)}});return L(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ae.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function rE(t){const e=$t(t,r=>r.PATTERN.test(""));return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",type:Ae.EMPTY_MATCH_PATTERN,tokenTypes:[r]}))}const iE=/[^\\[][\^]|^\^/;function sE(t){class e extends sc{constructor(){super(...arguments),this.found=!1}visitStartAnchor(s){this.found=!0}}const n=$t(t,i=>{const s=i.PATTERN;try{const a=Tc(s),o=new e;return o.visit(a),o.found}catch{return iE.test(s.source)}});return L(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ae.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function aE(t){const e=$t(t,r=>{const i=r[ur];return i instanceof RegExp&&(i.multiline||i.global)});return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ae.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[r]}))}function oE(t){const e=[];let n=L(t,s=>st(t,(a,o)=>(s.PATTERN.source===o.PATTERN.source&&!lt(e,o)&&o.PATTERN!==dt.NA&&(e.push(o),a.push(o)),a),[]));n=Ks(n);const r=$t(n,s=>s.length>1);return L(r,s=>{const a=L(s,l=>l.name);return{message:`The same RegExp pattern ->${jt(s).PATTERN}<-has been used in all of the following Token Types: ${a.join(", ")} <-`,type:Ae.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}})}function lE(t){const e=$t(t,r=>{if(!K(r,"GROUP"))return!1;const i=r.GROUP;return i!==dt.SKIPPED&&i!==dt.NA&&!ft(i)});return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ae.INVALID_GROUP_TYPE_FOUND,tokenTypes:[r]}))}function cE(t,e){const n=$t(t,i=>i.PUSH_MODE!==void 0&&!lt(e,i.PUSH_MODE));return L(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Ae.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function uE(t){const e=[],n=st(t,(r,i,s)=>{const a=i.PATTERN;return a===dt.NA||(ft(a)?r.push({str:a,idx:s,tokenType:i}):Tn(a)&&fE(a)&&r.push({str:a.source,idx:s,tokenType:i})),r},[]);return j(t,(r,i)=>{j(n,({str:s,idx:a,tokenType:o})=>{if(i<a&&dE(s,r.PATTERN)){const l=`Token: ->${o.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:Ae.UNREACHABLE_PATTERN,tokenTypes:[r,o]})}})}),e}function dE(t,e){if(Tn(e)){const n=e.exec(t);return n!==null&&n.index===0}else{if(Sn(e))return e(t,0,[],{});if(K(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function fE(t){return Or([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>t.source.indexOf(n)!==-1)===void 0}function Bm(t){const e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function jm(t){const e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function pE(t,e,n){const r=[];return K(t,cs)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+cs+`> property in its definition
`,type:Ae.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),K(t,Aa)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Aa+`> property in its definition
`,type:Ae.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),K(t,Aa)&&K(t,cs)&&!K(t.modes,t.defaultMode)&&r.push({message:`A MultiMode Lexer cannot be initialized with a ${cs}: <${t.defaultMode}>which does not exist
`,type:Ae.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),K(t,Aa)&&j(t.modes,(i,s)=>{j(i,(a,o)=>{if($n(a))r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${o}>
`,type:Ae.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(K(a,"LONGER_ALT")){const l=ee(a.LONGER_ALT)?a.LONGER_ALT:[a.LONGER_ALT];j(l,c=>{!$n(c)&&!lt(i,c)&&r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${a.name}> outside of mode <${s}>
`,type:Ae.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),r}function hE(t,e,n){const r=[];let i=!1;const s=Ks(Et(je(t.modes))),a=vc(s,l=>l[ur]===dt.NA),o=oR(n);return e&&j(a,l=>{const c=aR(l,o);if(c!==!1){const d={message:_E(l,c),type:c.issue,tokenType:l};r.push(d)}else K(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):Ih(o,l.PATTERN)&&(i=!0)}),e&&!i&&r.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ae.NO_LINE_BREAKS_FLAGS}),r}function mE(t){const e={},n=Ot(t);return j(n,r=>{const i=t[r];if(ee(i))e[r]=[];else throw Error("non exhaustive match")}),e}function sR(t){const e=t.PATTERN;if(Tn(e))return!1;if(Sn(e))return!0;if(K(e,"exec"))return!0;if(ft(e))return!1;throw Error("non exhaustive match")}function gE(t){return ft(t)&&t.length===1?t.charCodeAt(0):!1}const yE={test:function(t){const e=t.length;for(let n=this.lastIndex;n<e;n++){const r=t.charCodeAt(n);if(r===10)return this.lastIndex=n+1,!0;if(r===13)return t.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},lastIndex:0};function aR(t,e){if(K(t,"LINE_BREAKS"))return!1;if(Tn(t.PATTERN)){try{Ih(e,t.PATTERN)}catch(n){return{issue:Ae.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(ft(t.PATTERN))return!1;if(sR(t))return{issue:Ae.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function _E(t,e){if(e.issue===Ae.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ae.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function oR(t){return L(t,n=>ft(n)?n.charCodeAt(0):n)}function lu(t,e,n){t[e]===void 0?t[e]=[n]:t[e].push(n)}const us=256;let ul=[];function Kn(t){return t<us?t:ul[t]}function vE(){if(ce(ul)){ul=new Array(65536);for(let t=0;t<65536;t++)ul[t]=t>255?255+~~(t/255):t}}function Gs(t,e){const n=t.tokenTypeIdx;return n===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[n]===!0}function Al(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}let Km=1;const lR={};function Ws(t){const e=RE(t);TE(e),kE(e),$E(e),j(e,n=>{n.isParent=n.categoryMatches.length>0})}function RE(t){let e=Qe(t),n=t,r=!0;for(;r;){n=Ks(Et(L(n,s=>s.CATEGORIES)));const i=_c(n,e);e=e.concat(i),ce(i)?r=!1:n=i}return e}function TE(t){j(t,e=>{uR(e)||(lR[Km]=e,e.tokenTypeIdx=Km++),qm(e)&&!ee(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),qm(e)||(e.CATEGORIES=[]),wE(e)||(e.categoryMatches=[]),bE(e)||(e.categoryMatchesMap={})})}function $E(t){j(t,e=>{e.categoryMatches=[],j(e.categoryMatchesMap,(n,r)=>{e.categoryMatches.push(lR[r].tokenTypeIdx)})})}function kE(t){j(t,e=>{cR([],e)})}function cR(t,e){j(t,n=>{e.categoryMatchesMap[n.tokenTypeIdx]=!0}),j(e.CATEGORIES,n=>{const r=t.concat(e);lt(r,n)||cR(r,n)})}function uR(t){return K(t,"tokenTypeIdx")}function qm(t){return K(t,"CATEGORIES")}function wE(t){return K(t,"categoryMatches")}function bE(t){return K(t,"categoryMatchesMap")}function SE(t){return K(t,"tokenTypeIdx")}const Df={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,n,r,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`}};var Ae;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ae||(Ae={}));const ds={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Df,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(ds);class dt{constructor(e,n=ds){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,s)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;const a=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${a}--> <${i}>`);const{time:o,value:l}=eR(s),c=o>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&c(`${a}<-- <${i}> time: ${o}ms`),this.traceInitIndent--,l}else return s()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Tt({},ds,n);const r=this.config.traceInitPerf;r===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof r=="number"&&(this.traceInitMaxIdent=r,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,s=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===ds.lineTerminatorsPattern)this.config.lineTerminatorsPattern=yE;else if(this.config.lineTerminatorCharacters===ds.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ee(e)?i={modes:{defaultMode:Qe(e)},defaultMode:cs}:(s=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(pE(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(hE(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},j(i.modes,(o,l)=>{i.modes[l]=vc(o,c=>$n(c))});const a=Ot(i.modes);if(j(i.modes,(o,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(JA(o,a))}),ce(this.lexerDefinitionErrors)){Ws(o);let c;this.TRACE_INIT("analyzeTokenTypes",()=>{c=XA(o,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=c.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=c.charCodeToPatternIdxToConfig,this.emptyGroups=Tt({},this.emptyGroups,c.emptyGroups),this.hasCustom=c.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=c.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ce(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){const l=L(this.lexerDefinitionErrors,c=>c.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}j(this.lexerDefinitionWarning,o=>{Zv(o.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(iR?(this.chopInput=lr,this.match=this.matchWithTest):(this.updateLastIndex=Be,this.match=this.matchWithExec),s&&(this.handleModes=Be),this.trackStartLines===!1&&(this.computeNewColumn=lr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Be),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{const o=st(this.canModeBeOptimized,(l,c,u)=>(c===!1&&l.push(u),l),[]);if(n.ensureOptimizations&&!ce(o))throw Error(`Lexer Modes: < ${o.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{WA()}),this.TRACE_INIT("toFastProperties",()=>{tR(this)})})}tokenize(e,n=this.defaultMode){if(!ce(this.lexerDefinitionErrors)){const i=L(this.lexerDefinitionErrors,s=>s.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,n)}tokenizeInternal(e,n){let r,i,s,a,o,l,c,u,d,p,h,f,y,$,v;const m=e,g=m.length;let k=0,F=0;const G=this.hasCustom?0:Math.floor(e.length/10),X=new Array(G),ye=[];let Re=this.trackStartLines?1:void 0,Te=this.trackStartLines?1:void 0;const P=mE(this.emptyGroups),b=this.trackStartLines,T=this.config.lineTerminatorsPattern;let S=0,I=[],E=[];const N=[],Fe=[];Object.freeze(Fe);let x;function C(){return I}function te(_e){const Ue=Kn(_e),Ge=E[Ue];return Ge===void 0?Fe:Ge}const Gt=_e=>{if(N.length===1&&_e.tokenType.PUSH_MODE===void 0){const Ue=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(_e);ye.push({offset:_e.startOffset,line:_e.startLine,column:_e.startColumn,length:_e.image.length,message:Ue})}else{N.pop();const Ue=Ir(N);I=this.patternIdxToConfig[Ue],E=this.charCodeToPatternIdxToConfig[Ue],S=I.length;const Ge=this.canModeBeOptimized[Ue]&&this.config.safeMode===!1;E&&Ge?x=te:x=C}};function Wt(_e){N.push(_e),E=this.charCodeToPatternIdxToConfig[_e],I=this.patternIdxToConfig[_e],S=I.length,S=I.length;const Ue=this.canModeBeOptimized[_e]&&this.config.safeMode===!1;E&&Ue?x=te:x=C}Wt.call(this,n);let xe;const zt=this.config.recoveryEnabled;for(;k<g;){l=null;const _e=m.charCodeAt(k),Ue=x(_e),Ge=Ue.length;for(r=0;r<Ge;r++){xe=Ue[r];const ve=xe.pattern;c=null;const We=xe.short;if(We!==!1?_e===We&&(l=ve):xe.isCustom===!0?(v=ve.exec(m,k,X,P),v!==null?(l=v[0],v.payload!==void 0&&(c=v.payload)):l=null):(this.updateLastIndex(ve,k),l=this.match(ve,e,k)),l!==null){if(o=xe.longerAlt,o!==void 0){const Ee=o.length;for(s=0;s<Ee;s++){const V=I[o[s]],Ke=V.pattern;if(u=null,V.isCustom===!0?(v=Ke.exec(m,k,X,P),v!==null?(a=v[0],v.payload!==void 0&&(u=v.payload)):a=null):(this.updateLastIndex(Ke,k),a=this.match(Ke,e,k)),a&&a.length>l.length){l=a,c=u,xe=V;break}}}break}}if(l!==null){if(d=l.length,p=xe.group,p!==void 0&&(h=xe.tokenTypeIdx,f=this.createTokenInstance(l,k,h,xe.tokenType,Re,Te,d),this.handlePayload(f,c),p===!1?F=this.addToken(X,F,f):P[p].push(f)),e=this.chopInput(e,d),k=k+d,Te=this.computeNewColumn(Te,d),b===!0&&xe.canLineTerminator===!0){let ve=0,We,Ee;T.lastIndex=0;do We=T.test(l),We===!0&&(Ee=T.lastIndex-1,ve++);while(We===!0);ve!==0&&(Re=Re+ve,Te=d-Ee,this.updateTokenEndLineColumnLocation(f,p,Ee,ve,Re,Te,d))}this.handleModes(xe,Gt,Wt,f)}else{const ve=k,We=Re,Ee=Te;let V=zt===!1;for(;V===!1&&k<g;)for(e=this.chopInput(e,1),k++,i=0;i<S;i++){const Ke=I[i],ue=Ke.pattern,ct=Ke.short;if(ct!==!1?m.charCodeAt(k)===ct&&(V=!0):Ke.isCustom===!0?V=ue.exec(m,k,X,P)!==null:(this.updateLastIndex(ue,k),V=ue.exec(e)!==null),V===!0)break}if(y=k-ve,Te=this.computeNewColumn(Te,y),$=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(m,ve,y,We,Ee),ye.push({offset:ve,line:We,column:Ee,length:y,message:$}),zt===!1)break}}return this.hasCustom||(X.length=F),{tokens:X,groups:P,errors:ye}}handleModes(e,n,r,i){if(e.pop===!0){const s=e.push;n(i),s!==void 0&&r.call(this,s)}else e.push!==void 0&&r.call(this,e.push)}chopInput(e,n){return e.substring(n)}updateLastIndex(e,n){e.lastIndex=n}updateTokenEndLineColumnLocation(e,n,r,i,s,a,o){let l,c;n!==void 0&&(l=r===o-1,c=l?-1:0,i===1&&l===!0||(e.endLine=s+c,e.endColumn=a-1+-c))}computeNewColumn(e,n){return e+n}createOffsetOnlyToken(e,n,r,i){return{image:e,startOffset:n,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,n,r,i,s,a){return{image:e,startOffset:n,startLine:s,startColumn:a,tokenTypeIdx:r,tokenType:i}}createFullToken(e,n,r,i,s,a,o){return{image:e,startOffset:n,endOffset:n+o-1,startLine:s,endLine:s,startColumn:a,endColumn:a+o-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,n,r){return e.push(r),n}addTokenUsingMemberAccess(e,n,r){return e[n]=r,n++,n}handlePayloadNoCustom(e,n){}handlePayloadWithCustom(e,n){n!==null&&(e.payload=n)}matchWithTest(e,n,r){return e.test(n)===!0?n.substring(r,e.lastIndex):null}matchWithExec(e,n){const r=e.exec(n);return r!==null?r[0]:null}}dt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";dt.NA=/NOT_APPLICABLE/;function Ar(t){return dR(t)?t.LABEL:t.name}function dR(t){return ft(t.LABEL)&&t.LABEL!==""}const CE="parent",Gm="categories",Wm="label",zm="group",Vm="push_mode",Ym="pop_mode",Xm="longer_alt",Jm="line_breaks",Qm="start_chars_hint";function fR(t){return AE(t)}function AE(t){const e=t.pattern,n={};if(n.name=t.name,$n(e)||(n.PATTERN=e),K(t,CE))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return K(t,Gm)&&(n.CATEGORIES=t[Gm]),Ws([n]),K(t,Wm)&&(n.LABEL=t[Wm]),K(t,zm)&&(n.GROUP=t[zm]),K(t,Ym)&&(n.POP_MODE=t[Ym]),K(t,Vm)&&(n.PUSH_MODE=t[Vm]),K(t,Xm)&&(n.LONGER_ALT=t[Xm]),K(t,Jm)&&(n.LINE_BREAKS=t[Jm]),K(t,Qm)&&(n.START_CHARS_HINT=t[Qm]),n}const qn=fR({name:"EOF",pattern:dt.NA});Ws([qn]);function Oh(t,e,n,r,i,s,a,o){return{image:e,startOffset:n,endOffset:r,startLine:i,endLine:s,startColumn:a,endColumn:o,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function pR(t,e){return Gs(t,e)}const Sr={buildMismatchTokenMessage({expected:t,actual:e,previous:n,ruleName:r}){return`Expecting ${dR(t)?`--> ${Ar(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:n,customUserDescription:r,ruleName:i}){const s="Expecting: ",o=`
but found: '`+jt(e).image+"'";if(r)return s+r+o;{const l=st(t,(p,h)=>p.concat(h),[]),c=L(l,p=>`[${L(p,h=>Ar(h)).join(", ")}]`),d=`one of these possible Token sequences:
${L(c,(p,h)=>`  ${h+1}. ${p}`).join(`
`)}`;return s+d+o}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:n,ruleName:r}){const i="Expecting: ",a=`
but found: '`+jt(e).image+"'";if(n)return i+n+a;{const l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${L(t,c=>`[${L(c,u=>Ar(u)).join(",")}]`).join(" ,")}>`;return i+l+a}}};Object.freeze(Sr);const EE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},nr={buildDuplicateFoundError(t,e){function n(u){return u instanceof ge?u.terminalType.name:u instanceof at?u.nonTerminalName:""}const r=t.name,i=jt(e),s=i.idx,a=Yt(i),o=n(i),l=s>0;let c=`->${a}${l?s:""}<- ${o?`with argument: ->${o}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){const e=L(t.prefixPath,i=>Ar(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){const e=L(t.prefixPath,i=>Ar(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r},buildEmptyRepetitionError(t){let e=Yt(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){const e=t.topLevelRule.name,n=L(t.leftRecursionPath,s=>s.name),r=`${e} --> ${n.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Xr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function PE(t,e){const n=new NE(t,e);return n.resolveRefs(),n.errors}class NE extends Jr{constructor(e,n){super(),this.nameToTopRule=e,this.errMsgProvider=n,this.errors=[]}resolveRefs(){j(je(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){const n=this.nameToTopRule[e.nonTerminalName];if(n)e.referencedRule=n;else{const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:ot.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class IE extends Rc{constructor(e,n){super(),this.topProd=e,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,n=[]){this.found||super.walk(e,n)}walkProdRef(e,n,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){const i=n.concat(r);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ce(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}}class OE extends IE{constructor(e,n){super(e,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,n,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){const i=n.concat(r),s=new pt({definition:i});this.possibleTokTypes=qs(s),this.found=!0}}}class $c extends Rc{constructor(e,n){super(),this.topRule=e,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}}class DE extends $c{walkMany(e,n,r){if(e.idx===this.occurrence){const i=jt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,n,r)}}class Zm extends $c{walkManySep(e,n,r){if(e.idx===this.occurrence){const i=jt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,n,r)}}class xE extends $c{walkAtLeastOne(e,n,r){if(e.idx===this.occurrence){const i=jt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,n,r)}}class eg extends $c{walkAtLeastOneSep(e,n,r){if(e.idx===this.occurrence){const i=jt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,n,r)}}function xf(t,e,n=[]){n=Qe(n);let r=[],i=0;function s(o){return o.concat(ze(t,i+1))}function a(o){const l=xf(s(o),e,n);return r.concat(l)}for(;n.length<e&&i<t.length;){const o=t[i];if(o instanceof pt)return a(o.definition);if(o instanceof at)return a(o.definition);if(o instanceof Je)r=a(o.definition);else if(o instanceof kt){const l=o.definition.concat([new Ce({definition:o.definition})]);return a(l)}else if(o instanceof wt){const l=[new pt({definition:o.definition}),new Ce({definition:[new ge({terminalType:o.separator})].concat(o.definition)})];return a(l)}else if(o instanceof ht){const l=o.definition.concat([new Ce({definition:[new ge({terminalType:o.separator})].concat(o.definition)})]);r=a(l)}else if(o instanceof Ce){const l=o.definition.concat([new Ce({definition:o.definition})]);r=a(l)}else{if(o instanceof mt)return j(o.definition,l=>{ce(l.definition)===!1&&(r=a(l.definition))}),r;if(o instanceof ge)n.push(o.terminalType);else throw Error("non exhaustive match")}i++}return r.push({partialPath:n,suffixDef:ze(t,i)}),r}function hR(t,e,n,r){const i="EXIT_NONE_TERMINAL",s=[i],a="EXIT_ALTERNATIVE";let o=!1;const l=e.length,c=l-r-1,u=[],d=[];for(d.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ce(d);){const p=d.pop();if(p===a){o&&Ir(d).idx<=c&&d.pop();continue}const h=p.def,f=p.idx,y=p.ruleStack,$=p.occurrenceStack;if(ce(h))continue;const v=h[0];if(v===i){const m={idx:f,def:ze(h),ruleStack:$s(y),occurrenceStack:$s($)};d.push(m)}else if(v instanceof ge)if(f<l-1){const m=f+1,g=e[m];if(n(g,v.terminalType)){const k={idx:m,def:ze(h),ruleStack:y,occurrenceStack:$};d.push(k)}}else if(f===l-1)u.push({nextTokenType:v.terminalType,nextTokenOccurrence:v.idx,ruleStack:y,occurrenceStack:$}),o=!0;else throw Error("non exhaustive match");else if(v instanceof at){const m=Qe(y);m.push(v.nonTerminalName);const g=Qe($);g.push(v.idx);const k={idx:f,def:v.definition.concat(s,ze(h)),ruleStack:m,occurrenceStack:g};d.push(k)}else if(v instanceof Je){const m={idx:f,def:ze(h),ruleStack:y,occurrenceStack:$};d.push(m),d.push(a);const g={idx:f,def:v.definition.concat(ze(h)),ruleStack:y,occurrenceStack:$};d.push(g)}else if(v instanceof kt){const m=new Ce({definition:v.definition,idx:v.idx}),g=v.definition.concat([m],ze(h)),k={idx:f,def:g,ruleStack:y,occurrenceStack:$};d.push(k)}else if(v instanceof wt){const m=new ge({terminalType:v.separator}),g=new Ce({definition:[m].concat(v.definition),idx:v.idx}),k=v.definition.concat([g],ze(h)),F={idx:f,def:k,ruleStack:y,occurrenceStack:$};d.push(F)}else if(v instanceof ht){const m={idx:f,def:ze(h),ruleStack:y,occurrenceStack:$};d.push(m),d.push(a);const g=new ge({terminalType:v.separator}),k=new Ce({definition:[g].concat(v.definition),idx:v.idx}),F=v.definition.concat([k],ze(h)),G={idx:f,def:F,ruleStack:y,occurrenceStack:$};d.push(G)}else if(v instanceof Ce){const m={idx:f,def:ze(h),ruleStack:y,occurrenceStack:$};d.push(m),d.push(a);const g=new Ce({definition:v.definition,idx:v.idx}),k=v.definition.concat([g],ze(h)),F={idx:f,def:k,ruleStack:y,occurrenceStack:$};d.push(F)}else if(v instanceof mt)for(let m=v.definition.length-1;m>=0;m--){const g=v.definition[m],k={idx:f,def:g.definition.concat(ze(h)),ruleStack:y,occurrenceStack:$};d.push(k),d.push(a)}else if(v instanceof pt)d.push({idx:f,def:v.definition.concat(ze(h)),ruleStack:y,occurrenceStack:$});else if(v instanceof Xr)d.push(ME(v,f,y,$));else throw Error("non exhaustive match")}return u}function ME(t,e,n,r){const i=Qe(n);i.push(t.name);const s=Qe(r);return s.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:s}}var ke;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(ke||(ke={}));function Dh(t){if(t instanceof Je||t==="Option")return ke.OPTION;if(t instanceof Ce||t==="Repetition")return ke.REPETITION;if(t instanceof kt||t==="RepetitionMandatory")return ke.REPETITION_MANDATORY;if(t instanceof wt||t==="RepetitionMandatoryWithSeparator")return ke.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof ht||t==="RepetitionWithSeparator")return ke.REPETITION_WITH_SEPARATOR;if(t instanceof mt||t==="Alternation")return ke.ALTERNATION;throw Error("non exhaustive match")}function tg(t){const{occurrence:e,rule:n,prodType:r,maxLookahead:i}=t,s=Dh(r);return s===ke.ALTERNATION?kc(e,n,i):wc(e,n,s,i)}function LE(t,e,n,r,i,s){const a=kc(t,e,n),o=yR(a)?Al:Gs;return s(a,r,o,i)}function FE(t,e,n,r,i,s){const a=wc(t,e,i,n),o=yR(a)?Al:Gs;return s(a[0],o,r)}function UE(t,e,n,r){const i=t.length,s=Ut(t,a=>Ut(a,o=>o.length===1));if(e)return function(a){const o=L(a,l=>l.GATE);for(let l=0;l<i;l++){const c=t[l],u=c.length,d=o[l];if(!(d!==void 0&&d.call(this)===!1))e:for(let p=0;p<u;p++){const h=c[p],f=h.length;for(let y=0;y<f;y++){const $=this.LA(y+1);if(n($,h[y])===!1)continue e}return l}}};if(s&&!r){const a=L(t,l=>Et(l)),o=st(a,(l,c,u)=>(j(c,d=>{K(l,d.tokenTypeIdx)||(l[d.tokenTypeIdx]=u),j(d.categoryMatches,p=>{K(l,p)||(l[p]=u)})}),l),{});return function(){const l=this.LA(1);return o[l.tokenTypeIdx]}}else return function(){for(let a=0;a<i;a++){const o=t[a],l=o.length;e:for(let c=0;c<l;c++){const u=o[c],d=u.length;for(let p=0;p<d;p++){const h=this.LA(p+1);if(n(h,u[p])===!1)continue e}return a}}}}function HE(t,e,n){const r=Ut(t,s=>s.length===1),i=t.length;if(r&&!n){const s=Et(t);if(s.length===1&&ce(s[0].categoryMatches)){const o=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===o}}else{const a=st(s,(o,l,c)=>(o[l.tokenTypeIdx]=!0,j(l.categoryMatches,u=>{o[u]=!0}),o),[]);return function(){const o=this.LA(1);return a[o.tokenTypeIdx]===!0}}}else return function(){e:for(let s=0;s<i;s++){const a=t[s],o=a.length;for(let l=0;l<o;l++){const c=this.LA(l+1);if(e(c,a[l])===!1)continue e}return!0}return!1}}class BE extends Rc{constructor(e,n,r){super(),this.topProd=e,this.targetOccurrence=n,this.targetProdType=r}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,n,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=r.concat(i),!0):!1}walkOption(e,n,r){this.checkIsTarget(e,ke.OPTION,n,r)||super.walkOption(e,n,r)}walkAtLeastOne(e,n,r){this.checkIsTarget(e,ke.REPETITION_MANDATORY,n,r)||super.walkOption(e,n,r)}walkAtLeastOneSep(e,n,r){this.checkIsTarget(e,ke.REPETITION_MANDATORY_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}walkMany(e,n,r){this.checkIsTarget(e,ke.REPETITION,n,r)||super.walkOption(e,n,r)}walkManySep(e,n,r){this.checkIsTarget(e,ke.REPETITION_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}}class mR extends Jr{constructor(e,n,r){super(),this.targetOccurrence=e,this.targetProdType=n,this.targetRef=r,this.result=[]}checkIsTarget(e,n){e.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,ke.OPTION)}visitRepetition(e){this.checkIsTarget(e,ke.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,ke.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,ke.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,ke.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,ke.ALTERNATION)}}function ng(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=[];return e}function cu(t){let e=[""];for(let n=0;n<t.length;n++){const r=t[n],i=[];for(let s=0;s<e.length;s++){const a=e[s];i.push(a+"_"+r.tokenTypeIdx);for(let o=0;o<r.categoryMatches.length;o++){const l="_"+r.categoryMatches[o];i.push(a+l)}}e=i}return e}function jE(t,e,n){for(let r=0;r<t.length;r++){if(r===n)continue;const i=t[r];for(let s=0;s<e.length;s++){const a=e[s];if(i[a]===!0)return!1}}return!0}function gR(t,e){const n=L(t,a=>xf([a],1)),r=ng(n.length),i=L(n,a=>{const o={};return j(a,l=>{const c=cu(l.partialPath);j(c,u=>{o[u]=!0})}),o});let s=n;for(let a=1;a<=e;a++){const o=s;s=ng(o.length);for(let l=0;l<o.length;l++){const c=o[l];for(let u=0;u<c.length;u++){const d=c[u].partialPath,p=c[u].suffixDef,h=cu(d);if(jE(i,h,l)||ce(p)||d.length===e){const y=r[l];if(Mf(y,d)===!1){y.push(d);for(let $=0;$<h.length;$++){const v=h[$];i[l][v]=!0}}}else{const y=xf(p,a+1,d);s[l]=s[l].concat(y),j(y,$=>{const v=cu($.partialPath);j(v,m=>{i[l][m]=!0})})}}}}return r}function kc(t,e,n,r){const i=new mR(t,ke.ALTERNATION,r);return e.accept(i),gR(i.result,n)}function wc(t,e,n,r){const i=new mR(t,n);e.accept(i);const s=i.result,o=new BE(e,t,n).startWalking(),l=new pt({definition:s}),c=new pt({definition:o});return gR([l,c],r)}function Mf(t,e){e:for(let n=0;n<t.length;n++){const r=t[n];if(r.length===e.length){for(let i=0;i<r.length;i++){const s=e[i],a=r[i];if((s===a||a.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function KE(t,e){return t.length<e.length&&Ut(t,(n,r)=>{const i=e[r];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}function yR(t){return Ut(t,e=>Ut(e,n=>Ut(n,r=>ce(r.categoryMatches))))}function qE(t){const e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return L(e,n=>Object.assign({type:ot.CUSTOM_LOOKAHEAD_VALIDATION},n))}function GE(t,e,n,r){const i=Rt(t,l=>WE(l,n)),s=iP(t,e,n),a=Rt(t,l=>eP(l,n)),o=Rt(t,l=>YE(l,t,r,n));return i.concat(s,a,o)}function WE(t,e){const n=new VE;t.accept(n);const r=n.allProductions,i=lA(r,zE),s=qt(i,o=>o.length>1);return L(je(s),o=>{const l=jt(o),c=e.buildDuplicateFoundError(t,o),u=Yt(l),d={message:c,type:ot.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:l.idx},p=_R(l);return p&&(d.parameter=p),d})}function zE(t){return`${Yt(t)}_#_${t.idx}_#_${_R(t)}`}function _R(t){return t instanceof ge?t.terminalType.name:t instanceof at?t.nonTerminalName:""}class VE extends Jr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function YE(t,e,n,r){const i=[];if(st(e,(a,o)=>o.name===t.name?a+1:a,0)>1){const a=r.buildDuplicateRuleNameError({topLevelRule:t,grammarName:n});i.push({message:a,type:ot.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function XE(t,e,n){const r=[];let i;return lt(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,r.push({message:i,type:ot.INVALID_RULE_OVERRIDE,ruleName:t})),r}function vR(t,e,n,r=[]){const i=[],s=dl(e.definition);if(ce(s))return[];{const a=t.name;lt(s,t)&&i.push({message:n.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:r}),type:ot.LEFT_RECURSION,ruleName:a});const l=_c(s,r.concat([t])),c=Rt(l,u=>{const d=Qe(r);return d.push(u),vR(t,u,n,d)});return i.concat(c)}}function dl(t){let e=[];if(ce(t))return e;const n=jt(t);if(n instanceof at)e.push(n.referencedRule);else if(n instanceof pt||n instanceof Je||n instanceof kt||n instanceof wt||n instanceof ht||n instanceof Ce)e=e.concat(dl(n.definition));else if(n instanceof mt)e=Et(L(n.definition,s=>dl(s.definition)));else if(!(n instanceof ge))throw Error("non exhaustive match");const r=Sl(n),i=t.length>1;if(r&&i){const s=ze(t);return e.concat(dl(s))}else return e}class xh extends Jr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}}function JE(t,e){const n=new xh;t.accept(n);const r=n.alternations;return Rt(r,s=>{const a=$s(s.definition);return Rt(a,(o,l)=>{const c=hR([o],[],Gs,1);return ce(c)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:s,emptyChoiceIdx:l}),type:ot.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:s.idx,alternative:l+1}]:[]})})}function QE(t,e,n){const r=new xh;t.accept(r);let i=r.alternations;return i=vc(i,a=>a.ignoreAmbiguities===!0),Rt(i,a=>{const o=a.idx,l=a.maxLookahead||e,c=kc(o,t,l,a),u=nP(c,a,t,n),d=rP(c,a,t,n);return u.concat(d)})}class ZE extends Jr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function eP(t,e){const n=new xh;t.accept(n);const r=n.alternations;return Rt(r,s=>s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:s}),type:ot.TOO_MANY_ALTS,ruleName:t.name,occurrence:s.idx}]:[])}function tP(t,e,n){const r=[];return j(t,i=>{const s=new ZE;i.accept(s);const a=s.allProductions;j(a,o=>{const l=Dh(o),c=o.maxLookahead||e,u=o.idx,p=wc(u,i,l,c)[0];if(ce(Et(p))){const h=n.buildEmptyRepetitionError({topLevelRule:i,repetition:o});r.push({message:h,type:ot.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),r}function nP(t,e,n,r){const i=[],s=st(t,(o,l,c)=>(e.definition[c].ignoreAmbiguities===!0||j(l,u=>{const d=[c];j(t,(p,h)=>{c!==h&&Mf(p,u)&&e.definition[h].ignoreAmbiguities!==!0&&d.push(h)}),d.length>1&&!Mf(i,u)&&(i.push(u),o.push({alts:d,path:u}))}),o),[]);return L(s,o=>{const l=L(o.alts,u=>u+1);return{message:r.buildAlternationAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:l,prefixPath:o.path}),type:ot.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:e.idx,alternatives:o.alts}})}function rP(t,e,n,r){const i=st(t,(a,o,l)=>{const c=L(o,u=>({idx:l,path:u}));return a.concat(c)},[]);return Ks(Rt(i,a=>{if(e.definition[a.idx].ignoreAmbiguities===!0)return[];const l=a.idx,c=a.path,u=$t(i,p=>e.definition[p.idx].ignoreAmbiguities!==!0&&p.idx<l&&KE(p.path,c));return L(u,p=>{const h=[p.idx+1,l+1],f=e.idx===0?"":e.idx;return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:h,prefixPath:p.path}),type:ot.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:f,alternatives:h}})}))}function iP(t,e,n){const r=[],i=L(e,s=>s.name);return j(t,s=>{const a=s.name;if(lt(i,a)){const o=n.buildNamespaceConflictError(s);r.push({message:o,type:ot.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:a})}}),r}function sP(t){const e=Ph(t,{errMsgProvider:EE}),n={};return j(t.rules,r=>{n[r.name]=r}),PE(n,e.errMsgProvider)}function aP(t){return t=Ph(t,{errMsgProvider:nr}),GE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}const RR="MismatchedTokenException",TR="NoViableAltException",$R="EarlyExitException",kR="NotAllInputParsedException",wR=[RR,TR,$R,kR];Object.freeze(wR);function El(t){return lt(wR,t.name)}class bc extends Error{constructor(e,n){super(e),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class bR extends bc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=RR}}class oP extends bc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=TR}}class lP extends bc{constructor(e,n){super(e,n),this.name=kR}}class cP extends bc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=$R}}const uu={},SR="InRuleRecoveryException";class uP extends Error{constructor(e){super(e),this.name=SR}}class dP{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=K(e,"recoveryEnabled")?e.recoveryEnabled:kn.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=fP)}getTokenToInsert(e){const n=Oh(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,n,r,i){const s=this.findReSyncTokenType(),a=this.exportLexerState(),o=[];let l=!1;const c=this.LA(1);let u=this.LA(1);const d=()=>{const p=this.LA(0),h=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:c,previous:p,ruleName:this.getCurrRuleFullName()}),f=new bR(h,c,this.LA(0));f.resyncedTokens=$s(o),this.SAVE_ERROR(f)};for(;!l;)if(this.tokenMatcher(u,i)){d();return}else if(r.call(this)){d(),e.apply(this,n);return}else this.tokenMatcher(u,s)?l=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,o));this.importLexerState(a)}shouldInRepetitionRecoveryBeTried(e,n,r){return!(r===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,n)))}getFollowsForInRuleRecovery(e,n){const r=this.getCurrentGrammarPath(e,n);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,n){if(this.canRecoverWithSingleTokenInsertion(e,n))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){const r=this.SKIP_TOKEN();return this.consumeToken(),r}throw new uP("sad sad panda")}canPerformInRuleRecovery(e,n){return this.canRecoverWithSingleTokenInsertion(e,n)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,n){if(!this.canTokenTypeBeInsertedInRecovery(e)||ce(n))return!1;const r=this.LA(1);return Or(n,s=>this.tokenMatcher(r,s))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){const n=this.getCurrFollowKey(),r=this.getFollowSetFromFollowKey(n);return lt(r,e)}findReSyncTokenType(){const e=this.flattenFollowSet();let n=this.LA(1),r=2;for(;;){const i=Or(e,s=>pR(n,s));if(i!==void 0)return i;n=this.LA(r),r++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return uu;const e=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),r=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(r)}}buildFullFollowKeyStack(){const e=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return L(e,(r,i)=>i===0?uu:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){const e=L(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return Et(e)}getFollowSetFromFollowKey(e){if(e===uu)return[qn];const n=e.ruleName+e.idxInCallingRule+nR+e.inRule;return this.resyncFollows[n]}addToResyncTokens(e,n){return this.tokenMatcher(e,qn)||n.push(e),n}reSyncTo(e){const n=[];let r=this.LA(1);for(;this.tokenMatcher(r,e)===!1;)r=this.SKIP_TOKEN(),this.addToResyncTokens(r,n);return $s(n)}attemptInRepetitionRecovery(e,n,r,i,s,a,o){}getCurrentGrammarPath(e,n){const r=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:n}}getHumanReadableRuleStack(){return L(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}}function fP(t,e,n,r,i,s,a){const o=this.getKeyForAutomaticLookahead(r,i);let l=this.firstAfterRepMap[o];if(l===void 0){const p=this.getCurrRuleFullName(),h=this.getGAstProductions()[p];l=new s(h,i).startWalking(),this.firstAfterRepMap[o]=l}let c=l.token,u=l.occurrence;const d=l.isEndOfRule;this.RULE_STACK.length===1&&d&&c===void 0&&(c=qn,u=1),!(c===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(c,u,a)&&this.tryInRepetitionRecovery(t,e,n,c)}const pP=4,Xn=8,CR=1<<Xn,AR=2<<Xn,Lf=3<<Xn,Ff=4<<Xn,Uf=5<<Xn,fl=6<<Xn;function du(t,e,n){return n|e|t}class Mh{constructor(e){var n;this.maxLookahead=(n=e==null?void 0:e.maxLookahead)!==null&&n!==void 0?n:kn.maxLookahead}validate(e){const n=this.validateNoLeftRecursion(e.rules);if(ce(n)){const r=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...n,...r,...i,...s]}return n}validateNoLeftRecursion(e){return Rt(e,n=>vR(n,n,nr))}validateEmptyOrAlternatives(e){return Rt(e,n=>JE(n,nr))}validateAmbiguousAlternationAlternatives(e,n){return Rt(e,r=>QE(r,n,nr))}validateSomeNonEmptyLookaheadPath(e,n){return tP(e,n,nr)}buildLookaheadForAlternation(e){return LE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,UE)}buildLookaheadForOptional(e){return FE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Dh(e.prodType),HE)}}class hP{initLooksAhead(e){this.dynamicTokensEnabled=K(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:kn.dynamicTokensEnabled,this.maxLookahead=K(e,"maxLookahead")?e.maxLookahead:kn.maxLookahead,this.lookaheadStrategy=K(e,"lookaheadStrategy")?e.lookaheadStrategy:new Mh({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){j(e,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{const{alternation:r,repetition:i,option:s,repetitionMandatory:a,repetitionMandatoryWithSeparator:o,repetitionWithSeparator:l}=gP(n);j(r,c=>{const u=c.idx===0?"":c.idx;this.TRACE_INIT(`${Yt(c)}${u}`,()=>{const d=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:c.idx,rule:n,maxLookahead:c.maxLookahead||this.maxLookahead,hasPredicates:c.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),p=du(this.fullRuleNameToShort[n.name],CR,c.idx);this.setLaFuncCache(p,d)})}),j(i,c=>{this.computeLookaheadFunc(n,c.idx,Lf,"Repetition",c.maxLookahead,Yt(c))}),j(s,c=>{this.computeLookaheadFunc(n,c.idx,AR,"Option",c.maxLookahead,Yt(c))}),j(a,c=>{this.computeLookaheadFunc(n,c.idx,Ff,"RepetitionMandatory",c.maxLookahead,Yt(c))}),j(o,c=>{this.computeLookaheadFunc(n,c.idx,fl,"RepetitionMandatoryWithSeparator",c.maxLookahead,Yt(c))}),j(l,c=>{this.computeLookaheadFunc(n,c.idx,Uf,"RepetitionWithSeparator",c.maxLookahead,Yt(c))})})})}computeLookaheadFunc(e,n,r,i,s,a){this.TRACE_INIT(`${a}${n===0?"":n}`,()=>{const o=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=du(this.fullRuleNameToShort[e.name],r,n);this.setLaFuncCache(l,o)})}getKeyForAutomaticLookahead(e,n){const r=this.getLastExplicitRuleShortName();return du(r,e,n)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,n){this.lookAheadFuncsCache.set(e,n)}}class mP extends Jr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const Ea=new mP;function gP(t){Ea.reset(),t.accept(Ea);const e=Ea.dslMethods;return Ea.reset(),e}function rg(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function ig(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function yP(t,e,n){t.children[n]===void 0?t.children[n]=[e]:t.children[n].push(e)}function _P(t,e,n){t.children[e]===void 0?t.children[e]=[n]:t.children[e].push(n)}const vP="name";function ER(t,e){Object.defineProperty(t,vP,{enumerable:!1,configurable:!0,writable:!1,value:e})}function RP(t,e){const n=Ot(t),r=n.length;for(let i=0;i<r;i++){const s=n[i],a=t[s],o=a.length;for(let l=0;l<o;l++){const c=a[l];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}}function TP(t,e){const n=function(){};ER(n,t+"BaseSemantics");const r={visit:function(i,s){if(ee(i)&&(i=i[0]),!$n(i))return this[i.name](i.children,s)},validateVisitor:function(){const i=kP(this,e);if(!ce(i)){const s=L(i,a=>a.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g,`
	`)}`)}}};return n.prototype=r,n.prototype.constructor=n,n._RULE_NAMES=e,n}function $P(t,e,n){const r=function(){};ER(r,t+"BaseSemanticsWithDefaults");const i=Object.create(n.prototype);return j(e,s=>{i[s]=RP}),r.prototype=i,r.prototype.constructor=r,r}var Hf;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(Hf||(Hf={}));function kP(t,e){return wP(t,e)}function wP(t,e){const n=$t(e,i=>Sn(t[i])===!1),r=L(n,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:Hf.MISSING_METHOD,methodName:i}));return Ks(r)}class bP{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=K(e,"nodeLocationTracking")?e.nodeLocationTracking:kn.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Be,this.cstFinallyStateUpdate=Be,this.cstPostTerminal=Be,this.cstPostNonTerminal=Be,this.cstPostRule=Be;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=ig,this.setNodeLocationFromNode=ig,this.cstPostRule=Be,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Be,this.setNodeLocationFromNode=Be,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=rg,this.setNodeLocationFromNode=rg,this.cstPostRule=Be,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Be,this.setNodeLocationFromNode=Be,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Be,this.setNodeLocationFromNode=Be,this.cstPostRule=Be,this.setInitialNodeLocation=Be;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const n=this.LA(1);e.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){const n={name:e,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?(r.endOffset=n.endOffset,r.endLine=n.endLine,r.endColumn=n.endColumn):(r.startOffset=NaN,r.startLine=NaN,r.startColumn=NaN)}cstPostRuleOnlyOffset(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?r.endOffset=n.endOffset:r.startOffset=NaN}cstPostTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];yP(r,n,e),this.setNodeLocationFromToken(r.location,n)}cstPostNonTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];_P(r,n,e),this.setNodeLocationFromNode(r.location,e.location)}getBaseCstVisitorConstructor(){if($n(this.baseCstVisitorConstructor)){const e=TP(this.className,Ot(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if($n(this.baseCstVisitorWithDefaultsConstructor)){const e=$P(this.className,Ot(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class SP{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Nl}LA(e){const n=this.currIdx+e;return n<0||this.tokVectorLength<=n?Nl:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class CP{ACTION(e){return e.call(this)}consume(e,n,r){return this.consumeInternal(n,e,r)}subrule(e,n,r){return this.subruleInternal(n,e,r)}option(e,n){return this.optionInternal(n,e)}or(e,n){return this.orInternal(n,e)}many(e,n){return this.manyInternal(e,n)}atLeastOne(e,n){return this.atLeastOneInternal(e,n)}CONSUME(e,n){return this.consumeInternal(e,0,n)}CONSUME1(e,n){return this.consumeInternal(e,1,n)}CONSUME2(e,n){return this.consumeInternal(e,2,n)}CONSUME3(e,n){return this.consumeInternal(e,3,n)}CONSUME4(e,n){return this.consumeInternal(e,4,n)}CONSUME5(e,n){return this.consumeInternal(e,5,n)}CONSUME6(e,n){return this.consumeInternal(e,6,n)}CONSUME7(e,n){return this.consumeInternal(e,7,n)}CONSUME8(e,n){return this.consumeInternal(e,8,n)}CONSUME9(e,n){return this.consumeInternal(e,9,n)}SUBRULE(e,n){return this.subruleInternal(e,0,n)}SUBRULE1(e,n){return this.subruleInternal(e,1,n)}SUBRULE2(e,n){return this.subruleInternal(e,2,n)}SUBRULE3(e,n){return this.subruleInternal(e,3,n)}SUBRULE4(e,n){return this.subruleInternal(e,4,n)}SUBRULE5(e,n){return this.subruleInternal(e,5,n)}SUBRULE6(e,n){return this.subruleInternal(e,6,n)}SUBRULE7(e,n){return this.subruleInternal(e,7,n)}SUBRULE8(e,n){return this.subruleInternal(e,8,n)}SUBRULE9(e,n){return this.subruleInternal(e,9,n)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,n,r=Il){if(lt(this.definedRulesNames,e)){const a={message:nr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ot.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(a)}this.definedRulesNames.push(e);const i=this.defineRule(e,n,r);return this[e]=i,i}OVERRIDE_RULE(e,n,r=Il){const i=XE(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,n,r);return this[e]=s,s}BACKTRACK(e,n){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{return e.apply(this,n),!0}catch(i){if(El(i))return!1;throw i}finally{this.reloadRecogState(r),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return MA(je(this.gastProductionsCache))}}class AP{initRecognizerEngine(e,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Al,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},K(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ee(e)){if(ce(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ee(e))this.tokensMap=st(e,(s,a)=>(s[a.name]=a,s),{});else if(K(e,"modes")&&Ut(Et(je(e.modes)),SE)){const s=Et(je(e.modes)),a=Nh(s);this.tokensMap=st(a,(o,l)=>(o[l.name]=l,o),{})}else if(It(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=qn;const r=K(e,"modes")?Et(je(e.modes)):je(e),i=Ut(r,s=>ce(s.categoryMatches));this.tokenMatcher=i?Al:Gs,Ws(je(this.tokensMap))}defineRule(e,n,r){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);const i=K(r,"resyncEnabled")?r.resyncEnabled:Il.resyncEnabled,s=K(r,"recoveryValueFunc")?r.recoveryValueFunc:Il.recoveryValueFunc,a=this.ruleShortNameIdx<<pP+Xn;this.ruleShortNameIdx++,this.shortRuleNameToFull[a]=e,this.fullRuleNameToShort[e]=a;let o;return this.outputCst===!0?o=function(...u){try{this.ruleInvocationStateUpdate(a,e,this.subruleIdx),n.apply(this,u);const d=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(d),d}catch(d){return this.invokeRuleCatch(d,i,s)}finally{this.ruleFinallyStateUpdate()}}:o=function(...u){try{return this.ruleInvocationStateUpdate(a,e,this.subruleIdx),n.apply(this,u)}catch(d){return this.invokeRuleCatch(d,i,s)}finally{this.ruleFinallyStateUpdate()}},Object.assign(o,{ruleName:e,originalGrammarAction:n})}invokeRuleCatch(e,n,r){const i=this.RULE_STACK.length===1,s=n&&!this.isBackTracking()&&this.recoveryEnabled;if(El(e)){const a=e;if(s){const o=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(o))if(a.resyncedTokens=this.reSyncTo(o),this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return r(e);else{if(this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,a.partialCstResult=l}throw a}}else{if(i)return this.moveToTerminatedState(),r(e);throw a}}else throw e}optionInternal(e,n){const r=this.getKeyForAutomaticLookahead(AR,n);return this.optionInternalLogic(e,n,r)}optionInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof e!="function"){s=e.DEF;const a=e.GATE;if(a!==void 0){const o=i;i=()=>a.call(this)&&o.call(this)}}else s=e;if(i.call(this)===!0)return s.call(this)}atLeastOneInternal(e,n){const r=this.getKeyForAutomaticLookahead(Ff,e);return this.atLeastOneInternalLogic(e,n,r)}atLeastOneInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const a=n.GATE;if(a!==void 0){const o=i;i=()=>a.call(this)&&o.call(this)}}else s=n;if(i.call(this)===!0){let a=this.doSingleRepetition(s);for(;i.call(this)===!0&&a===!0;)a=this.doSingleRepetition(s)}else throw this.raiseEarlyExitException(e,ke.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,n],i,Ff,e,xE)}atLeastOneSepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(fl,e);this.atLeastOneSepFirstInternalLogic(e,n,r)}atLeastOneSepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const o=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,o,i,eg],o,fl,e,eg)}else throw this.raiseEarlyExitException(e,ke.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(e,n){const r=this.getKeyForAutomaticLookahead(Lf,e);return this.manyInternalLogic(e,n,r)}manyInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const o=n.GATE;if(o!==void 0){const l=i;i=()=>o.call(this)&&l.call(this)}}else s=n;let a=!0;for(;i.call(this)===!0&&a===!0;)a=this.doSingleRepetition(s);this.attemptInRepetitionRecovery(this.manyInternal,[e,n],i,Lf,e,DE,a)}manySepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(Uf,e);this.manySepFirstInternalLogic(e,n,r)}manySepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const o=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,o,i,Zm],o,Uf,e,Zm)}}repetitionSepSecondInternal(e,n,r,i,s){for(;r();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,n,r,i,s],r,fl,e,s)}doSingleRepetition(e){const n=this.getLexerPosition();return e.call(this),this.getLexerPosition()>n}orInternal(e,n){const r=this.getKeyForAutomaticLookahead(CR,n),i=ee(e)?e:e.DEF,a=this.getLaFuncFromCache(r).call(this,i);if(a!==void 0)return i[a].ALT.call(this);this.raiseNoAltException(n,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){const e=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new lP(n,e))}}subruleInternal(e,n,r){let i;try{const s=r!==void 0?r.ARGS:void 0;return this.subruleIdx=n,i=e.apply(this,s),this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName),i}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,n,r){throw El(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:r),delete e.partialCstResult),e}consumeInternal(e,n,r){let i;try{const s=this.LA(1);this.tokenMatcher(s,e)===!0?(this.consumeToken(),i=s):this.consumeInternalError(e,s,r)}catch(s){i=this.consumeInternalRecovery(e,n,s)}return this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i),i}consumeInternalError(e,n,r){let i;const s=this.LA(0);throw r!==void 0&&r.ERR_MSG?i=r.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:n,previous:s,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new bR(i,n,s))}consumeInternalRecovery(e,n,r){if(this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking()){const i=this.getFollowsForInRuleRecovery(e,n);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===SR?r:s}}else throw r}saveRecogState(){const e=this.errors,n=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,n,r){this.RULE_OCCURRENCE_STACK.push(r),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),qn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}}class EP{initErrorHandler(e){this._errors=[],this.errorMessageProvider=K(e,"errorMessageProvider")?e.errorMessageProvider:kn.errorMessageProvider}SAVE_ERROR(e){if(El(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,n,r){const i=this.getCurrRuleFullName(),s=this.getGAstProductions()[i],o=wc(e,s,n,this.maxLookahead)[0],l=[];for(let u=1;u<=this.maxLookahead;u++)l.push(this.LA(u));const c=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:o,actual:l,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new cP(c,this.LA(1),this.LA(0)))}raiseNoAltException(e,n){const r=this.getCurrRuleFullName(),i=this.getGAstProductions()[r],s=kc(e,i,this.maxLookahead),a=[];for(let c=1;c<=this.maxLookahead;c++)a.push(this.LA(c));const o=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:a,previous:o,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new oP(l,this.LA(1),o))}}class PP{initContentAssist(){}computeContentAssist(e,n){const r=this.gastProductionsCache[e];if($n(r))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return hR([r],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){const n=jt(e.ruleStack),i=this.getGAstProductions()[n];return new OE(i,e).startWalking()}}const Sc={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Sc);const sg=!0,ag=Math.pow(2,Xn)-1,PR=fR({name:"RECORDING_PHASE_TOKEN",pattern:dt.NA});Ws([PR]);const NR=Oh(PR,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(NR);const NP={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class IP{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){const n=e>0?e:"";this[`CONSUME${n}`]=function(r,i){return this.consumeInternalRecord(r,e,i)},this[`SUBRULE${n}`]=function(r,i){return this.subruleInternalRecord(r,e,i)},this[`OPTION${n}`]=function(r){return this.optionInternalRecord(r,e)},this[`OR${n}`]=function(r){return this.orInternalRecord(r,e)},this[`MANY${n}`]=function(r){this.manyInternalRecord(e,r)},this[`MANY_SEP${n}`]=function(r){this.manySepFirstInternalRecord(e,r)},this[`AT_LEAST_ONE${n}`]=function(r){this.atLeastOneInternalRecord(e,r)},this[`AT_LEAST_ONE_SEP${n}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)}}this.consume=function(e,n,r){return this.consumeInternalRecord(n,e,r)},this.subrule=function(e,n,r){return this.subruleInternalRecord(n,e,r)},this.option=function(e,n){return this.optionInternalRecord(n,e)},this.or=function(e,n){return this.orInternalRecord(n,e)},this.many=function(e,n){this.manyInternalRecord(e,n)},this.atLeastOne=function(e,n){this.atLeastOneInternalRecord(e,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{const e=this;for(let n=0;n<10;n++){const r=n>0?n:"";delete e[`CONSUME${r}`],delete e[`SUBRULE${r}`],delete e[`OPTION${r}`],delete e[`OR${r}`],delete e[`MANY${r}`],delete e[`MANY_SEP${r}`],delete e[`AT_LEAST_ONE${r}`],delete e[`AT_LEAST_ONE_SEP${r}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,n){return()=>!0}LA_RECORD(e){return Nl}topLevelRuleRecord(e,n){try{const r=new Xr({definition:[],name:e});return r.name=e,this.recordingProdStack.push(r),n.call(this),this.recordingProdStack.pop(),r}catch(r){if(r.KNOWN_RECORDER_ERROR!==!0)try{r.message=r.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}throw r}}optionInternalRecord(e,n){return fi.call(this,Je,e,n)}atLeastOneInternalRecord(e,n){fi.call(this,kt,n,e)}atLeastOneSepFirstInternalRecord(e,n){fi.call(this,wt,n,e,sg)}manyInternalRecord(e,n){fi.call(this,Ce,n,e)}manySepFirstInternalRecord(e,n){fi.call(this,ht,n,e,sg)}orInternalRecord(e,n){return OP.call(this,e,n)}subruleInternalRecord(e,n,r){if(Pl(n),!e||K(e,"ruleName")===!1){const o=new Error(`<SUBRULE${og(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw o.KNOWN_RECORDER_ERROR=!0,o}const i=Ir(this.recordingProdStack),s=e.ruleName,a=new at({idx:n,nonTerminalName:s,label:r==null?void 0:r.LABEL,referencedRule:void 0});return i.definition.push(a),this.outputCst?NP:Sc}consumeInternalRecord(e,n,r){if(Pl(n),!uR(e)){const a=new Error(`<CONSUME${og(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}const i=Ir(this.recordingProdStack),s=new ge({idx:n,terminalType:e,label:r==null?void 0:r.LABEL});return i.definition.push(s),NR}}function fi(t,e,n,r=!1){Pl(n);const i=Ir(this.recordingProdStack),s=Sn(e)?e:e.DEF,a=new t({definition:[],idx:n});return r&&(a.separator=e.SEP),K(e,"MAX_LOOKAHEAD")&&(a.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(a),s.call(this),i.definition.push(a),this.recordingProdStack.pop(),Sc}function OP(t,e){Pl(e);const n=Ir(this.recordingProdStack),r=ee(t)===!1,i=r===!1?t:t.DEF,s=new mt({definition:[],idx:e,ignoreAmbiguities:r&&t.IGNORE_AMBIGUITIES===!0});K(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD);const a=Jv(i,o=>Sn(o.GATE));return s.hasPredicates=a,n.definition.push(s),j(i,o=>{const l=new pt({definition:[]});s.definition.push(l),K(o,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=o.IGNORE_AMBIGUITIES:K(o,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),o.ALT.call(this),this.recordingProdStack.pop()}),Sc}function og(t){return t===0?"":`${t}`}function Pl(t){if(t<0||t>ag){const e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${ag+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}class DP{initPerformanceTracer(e){if(K(e,"traceInitPerf")){const n=e.traceInitPerf,r=typeof n=="number";this.traceInitMaxIdent=r?n:1/0,this.traceInitPerf=r?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=kn.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,n){if(this.traceInitPerf===!0){this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${r}--> <${e}>`);const{time:i,value:s}=eR(n),a=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&a(`${r}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,s}else return n()}}function xP(t,e){e.forEach(n=>{const r=n.prototype;Object.getOwnPropertyNames(r).forEach(i=>{if(i==="constructor")return;const s=Object.getOwnPropertyDescriptor(r,i);s&&(s.get||s.set)?Object.defineProperty(t.prototype,i,s):t.prototype[i]=n.prototype[i]})})}const Nl=Oh(qn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Nl);const kn=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Sr,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Il=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0});var ot;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ot||(ot={}));function lg(t=void 0){return function(){return t}}class zs{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;const n=this.className;this.TRACE_INIT("toFastProps",()=>{tR(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),j(this.definedRulesNames,i=>{const a=this[i].originalGrammarAction;let o;this.TRACE_INIT(`${i} Rule`,()=>{o=this.topLevelRuleRecord(i,a)}),this.gastProductionsCache[i]=o})}finally{this.disableRecording()}});let r=[];if(this.TRACE_INIT("Grammar Resolving",()=>{r=sP({rules:je(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(r)}),this.TRACE_INIT("Grammar Validations",()=>{if(ce(r)&&this.skipValidations===!1){const i=aP({rules:je(this.gastProductionsCache),tokenTypes:je(this.tokensMap),errMsgProvider:nr,grammarName:n}),s=qE({lookaheadStrategy:this.lookaheadStrategy,rules:je(this.gastProductionsCache),tokenTypes:je(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,s)}}),ce(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=KA(je(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,s;(s=(i=this.lookaheadStrategy).initialize)===null||s===void 0||s.call(i,{rules:je(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(je(this.gastProductionsCache))})),!zs.DEFER_DEFINITION_ERRORS_HANDLING&&!ce(this.definitionErrors))throw e=L(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,n){this.definitionErrors=[],this.selfAnalysisDone=!1;const r=this;if(r.initErrorHandler(n),r.initLexerAdapter(),r.initLooksAhead(n),r.initRecognizerEngine(e,n),r.initRecoverable(n),r.initTreeBuilder(n),r.initContentAssist(),r.initGastRecorder(n),r.initPerformanceTracer(n),K(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=K(n,"skipValidations")?n.skipValidations:kn.skipValidations}}zs.DEFER_DEFINITION_ERRORS_HANDLING=!1;xP(zs,[dP,hP,bP,SP,AP,CP,EP,PP,IP,DP]);class MP extends zs{constructor(e,n=kn){const r=Qe(n);r.outputCst=!1,super(e,r)}}function Dr(t,e,n){return`${t.name}_${e}_${n}`}const Gn=1,LP=2,IR=4,OR=5,Vs=7,FP=8,UP=9,HP=10,BP=11,DR=12;class Lh{constructor(e){this.target=e}isEpsilon(){return!1}}class Fh extends Lh{constructor(e,n){super(e),this.tokenType=n}}class xR extends Lh{constructor(e){super(e)}isEpsilon(){return!0}}class Uh extends Lh{constructor(e,n,r){super(e),this.rule=n,this.followState=r}isEpsilon(){return!0}}function jP(t){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};KP(e,t);const n=t.length;for(let r=0;r<n;r++){const i=t[r],s=yr(e,i,i);s!==void 0&&eN(e,i,s)}return e}function KP(t,e){const n=e.length;for(let r=0;r<n;r++){const i=e[r],s=qe(t,i,void 0,{type:LP}),a=qe(t,i,void 0,{type:Vs});s.stop=a,t.ruleToStartState.set(i,s),t.ruleToStopState.set(i,a)}}function MR(t,e,n){return n instanceof ge?Hh(t,e,n.terminalType,n):n instanceof at?ZP(t,e,n):n instanceof mt?VP(t,e,n):n instanceof Je?YP(t,e,n):n instanceof Ce?qP(t,e,n):n instanceof ht?GP(t,e,n):n instanceof kt?WP(t,e,n):n instanceof wt?zP(t,e,n):yr(t,e,n)}function qP(t,e,n){const r=qe(t,e,n,{type:OR});Jn(t,r);const i=Qr(t,e,r,n,yr(t,e,n));return FR(t,e,n,i)}function GP(t,e,n){const r=qe(t,e,n,{type:OR});Jn(t,r);const i=Qr(t,e,r,n,yr(t,e,n)),s=Hh(t,e,n.separator,n);return FR(t,e,n,i,s)}function WP(t,e,n){const r=qe(t,e,n,{type:IR});Jn(t,r);const i=Qr(t,e,r,n,yr(t,e,n));return LR(t,e,n,i)}function zP(t,e,n){const r=qe(t,e,n,{type:IR});Jn(t,r);const i=Qr(t,e,r,n,yr(t,e,n)),s=Hh(t,e,n.separator,n);return LR(t,e,n,i,s)}function VP(t,e,n){const r=qe(t,e,n,{type:Gn});Jn(t,r);const i=L(n.definition,a=>MR(t,e,a));return Qr(t,e,r,n,...i)}function YP(t,e,n){const r=qe(t,e,n,{type:Gn});Jn(t,r);const i=Qr(t,e,r,n,yr(t,e,n));return XP(t,e,n,i)}function yr(t,e,n){const r=$t(L(n.definition,i=>MR(t,e,i)),i=>i!==void 0);return r.length===1?r[0]:r.length===0?void 0:QP(t,r)}function LR(t,e,n,r,i){const s=r.left,a=r.right,o=qe(t,e,n,{type:BP});Jn(t,o);const l=qe(t,e,n,{type:DR});return s.loopback=o,l.loopback=o,t.decisionMap[Dr(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",n.idx)]=o,Me(a,o),i===void 0?(Me(o,s),Me(o,l)):(Me(o,l),Me(o,i.left),Me(i.right,s)),{left:s,right:l}}function FR(t,e,n,r,i){const s=r.left,a=r.right,o=qe(t,e,n,{type:HP});Jn(t,o);const l=qe(t,e,n,{type:DR}),c=qe(t,e,n,{type:UP});return o.loopback=c,l.loopback=c,Me(o,s),Me(o,l),Me(a,c),i!==void 0?(Me(c,l),Me(c,i.left),Me(i.right,s)):Me(c,o),t.decisionMap[Dr(e,i?"RepetitionWithSeparator":"Repetition",n.idx)]=o,{left:o,right:l}}function XP(t,e,n,r){const i=r.left,s=r.right;return Me(i,s),t.decisionMap[Dr(e,"Option",n.idx)]=i,r}function Jn(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Qr(t,e,n,r,...i){const s=qe(t,e,r,{type:FP,start:n});n.end=s;for(const o of i)o!==void 0?(Me(n,o.left),Me(o.right,s)):Me(n,s);const a={left:n,right:s};return t.decisionMap[Dr(e,JP(r),r.idx)]=n,a}function JP(t){if(t instanceof mt)return"Alternation";if(t instanceof Je)return"Option";if(t instanceof Ce)return"Repetition";if(t instanceof ht)return"RepetitionWithSeparator";if(t instanceof kt)return"RepetitionMandatory";if(t instanceof wt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function QP(t,e){const n=e.length;for(let s=0;s<n-1;s++){const a=e[s];let o;a.left.transitions.length===1&&(o=a.left.transitions[0]);const l=o instanceof Uh,c=o,u=e[s+1].left;a.left.type===Gn&&a.right.type===Gn&&o!==void 0&&(l&&c.followState===a.right||o.target===a.right)?(l?c.followState=u:o.target=u,tN(t,a.right)):Me(a.right,u)}const r=e[0],i=e[n-1];return{left:r.left,right:i.right}}function Hh(t,e,n,r){const i=qe(t,e,r,{type:Gn}),s=qe(t,e,r,{type:Gn});return Bh(i,new Fh(s,n)),{left:i,right:s}}function ZP(t,e,n){const r=n.referencedRule,i=t.ruleToStartState.get(r),s=qe(t,e,n,{type:Gn}),a=qe(t,e,n,{type:Gn}),o=new Uh(i,r,a);return Bh(s,o),{left:s,right:a}}function eN(t,e,n){const r=t.ruleToStartState.get(e);Me(r,n.left);const i=t.ruleToStopState.get(e);return Me(n.right,i),{left:r,right:i}}function Me(t,e){const n=new xR(e);Bh(t,n)}function qe(t,e,n,r){const i=Object.assign({atn:t,production:n,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},r);return t.states.push(i),i}function Bh(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function tN(t,e){t.states.splice(t.states.indexOf(e),1)}const Ol={};class Bf{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){const n=UR(e);n in this.map||(this.map[n]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return L(this.configs,e=>e.alt)}get key(){let e="";for(const n in this.map)e+=n+":";return e}}function UR(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(n=>n.stateNumber.toString()).join("_")}`}function nN(t,e){const n={};return r=>{const i=r.toString();let s=n[i];return s!==void 0||(s={atnStartState:t,decision:e,states:{}},n[i]=s),s}}class HR{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,n){this.predicates[e]=n}toString(){let e="";const n=this.predicates.length;for(let r=0;r<n;r++)e+=this.predicates[r]===!0?"1":"0";return e}}const cg=new HR;class rN extends Mh{constructor(e){var n;super(),this.logging=(n=e==null?void 0:e.logging)!==null&&n!==void 0?n:r=>console.log(r)}initialize(e){this.atn=jP(e.rules),this.dfas=iN(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){const{prodOccurrence:n,rule:r,hasPredicates:i,dynamicTokensEnabled:s}=e,a=this.dfas,o=this.logging,l=Dr(r,"Alternation",n),u=this.atn.decisionMap[l].decision,d=L(tg({maxLookahead:1,occurrence:n,prodType:"Alternation",rule:r}),p=>L(p,h=>h[0]));if(ug(d,!1)&&!s){const p=st(d,(h,f,y)=>(j(f,$=>{$&&(h[$.tokenTypeIdx]=y,j($.categoryMatches,v=>{h[v]=y}))}),h),{});return i?function(h){var f;const y=this.LA(1),$=p[y.tokenTypeIdx];if(h!==void 0&&$!==void 0){const v=(f=h[$])===null||f===void 0?void 0:f.GATE;if(v!==void 0&&v.call(this)===!1)return}return $}:function(){const h=this.LA(1);return p[h.tokenTypeIdx]}}else return i?function(p){const h=new HR,f=p===void 0?0:p.length;for(let $=0;$<f;$++){const v=p==null?void 0:p[$].GATE;h.set($,v===void 0||v.call(this))}const y=fu.call(this,a,u,h,o);return typeof y=="number"?y:void 0}:function(){const p=fu.call(this,a,u,cg,o);return typeof p=="number"?p:void 0}}buildLookaheadForOptional(e){const{prodOccurrence:n,rule:r,prodType:i,dynamicTokensEnabled:s}=e,a=this.dfas,o=this.logging,l=Dr(r,i,n),u=this.atn.decisionMap[l].decision,d=L(tg({maxLookahead:1,occurrence:n,prodType:i,rule:r}),p=>L(p,h=>h[0]));if(ug(d)&&d[0][0]&&!s){const p=d[0],h=Et(p);if(h.length===1&&ce(h[0].categoryMatches)){const y=h[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===y}}else{const f=st(h,(y,$)=>($!==void 0&&(y[$.tokenTypeIdx]=!0,j($.categoryMatches,v=>{y[v]=!0})),y),{});return function(){const y=this.LA(1);return f[y.tokenTypeIdx]===!0}}}return function(){const p=fu.call(this,a,u,cg,o);return typeof p=="object"?!1:p===0}}}function ug(t,e=!0){const n=new Set;for(const r of t){const i=new Set;for(const s of r){if(s===void 0){if(e)break;return!1}const a=[s.tokenTypeIdx].concat(s.categoryMatches);for(const o of a)if(n.has(o)){if(!i.has(o))return!1}else n.add(o),i.add(o)}}return!0}function iN(t){const e=t.decisionStates.length,n=Array(e);for(let r=0;r<e;r++)n[r]=nN(t.decisionStates[r],r);return n}function fu(t,e,n,r){const i=t[e](n);let s=i.start;if(s===void 0){const o=mN(i.atnStartState);s=jR(i,BR(o)),i.start=s}return sN.apply(this,[i,s,n,r])}function sN(t,e,n,r){let i=e,s=1;const a=[];let o=this.LA(s++);for(;;){let l=dN(i,o);if(l===void 0&&(l=aN.apply(this,[t,i,o,s,n,r])),l===Ol)return uN(a,i,o);if(l.isAcceptState===!0)return l.prediction;i=l,a.push(o),o=this.LA(s++)}}function aN(t,e,n,r,i,s){const a=fN(e.configs,n,i);if(a.size===0)return dg(t,e,n,Ol),Ol;let o=BR(a);const l=hN(a,i);if(l!==void 0)o.isAcceptState=!0,o.prediction=l,o.configs.uniqueAlt=l;else if(vN(a)){const c=kA(a.alts);o.isAcceptState=!0,o.prediction=c,o.configs.uniqueAlt=c,oN.apply(this,[t,r,a.alts,s])}return o=dg(t,e,n,o),o}function oN(t,e,n,r){const i=[];for(let c=1;c<=e;c++)i.push(this.LA(c).tokenType);const s=t.atnStartState,a=s.rule,o=s.production,l=lN({topLevelRule:a,ambiguityIndices:n,production:o,prefixPath:i});r(l)}function lN(t){const e=L(t.prefixPath,i=>Ar(i)).join(", "),n=t.production.idx===0?"":t.production.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${cN(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r}function cN(t){if(t instanceof at)return"SUBRULE";if(t instanceof Je)return"OPTION";if(t instanceof mt)return"OR";if(t instanceof kt)return"AT_LEAST_ONE";if(t instanceof wt)return"AT_LEAST_ONE_SEP";if(t instanceof ht)return"MANY_SEP";if(t instanceof Ce)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}function uN(t,e,n){const r=Rt(e.configs.elements,s=>s.state.transitions),i=OA(r.filter(s=>s instanceof Fh).map(s=>s.tokenType),s=>s.tokenTypeIdx);return{actualToken:n,possibleTokenTypes:i,tokenPath:t}}function dN(t,e){return t.edges[e.tokenTypeIdx]}function fN(t,e,n){const r=new Bf,i=[];for(const a of t.elements){if(n.is(a.alt)===!1)continue;if(a.state.type===Vs){i.push(a);continue}const o=a.state.transitions.length;for(let l=0;l<o;l++){const c=a.state.transitions[l],u=pN(c,e);u!==void 0&&r.add({state:u,alt:a.alt,stack:a.stack})}}let s;if(i.length===0&&r.size===1&&(s=r),s===void 0){s=new Bf;for(const a of r.elements)Dl(a,s)}if(i.length>0&&!yN(s))for(const a of i)s.add(a);return s}function pN(t,e){if(t instanceof Fh&&pR(e,t.tokenType))return t.target}function hN(t,e){let n;for(const r of t.elements)if(e.is(r.alt)===!0){if(n===void 0)n=r.alt;else if(n!==r.alt)return}return n}function BR(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function dg(t,e,n,r){return r=jR(t,r),e.edges[n.tokenTypeIdx]=r,r}function jR(t,e){if(e===Ol)return e;const n=e.configs.key,r=t.states[n];return r!==void 0?r:(e.configs.finalize(),t.states[n]=e,e)}function mN(t){const e=new Bf,n=t.transitions.length;for(let r=0;r<n;r++){const s={state:t.transitions[r].target,alt:r,stack:[]};Dl(s,e)}return e}function Dl(t,e){const n=t.state;if(n.type===Vs){if(t.stack.length>0){const i=[...t.stack],a={state:i.pop(),alt:t.alt,stack:i};Dl(a,e)}else e.add(t);return}n.epsilonOnlyTransitions||e.add(t);const r=n.transitions.length;for(let i=0;i<r;i++){const s=n.transitions[i],a=gN(t,s);a!==void 0&&Dl(a,e)}}function gN(t,e){if(e instanceof xR)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Uh){const n=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:n}}}function yN(t){for(const e of t.elements)if(e.state.type===Vs)return!0;return!1}function _N(t){for(const e of t.elements)if(e.state.type!==Vs)return!1;return!0}function vN(t){if(_N(t))return!0;const e=RN(t.elements);return TN(e)&&!$N(e)}function RN(t){const e=new Map;for(const n of t){const r=UR(n,!1);let i=e.get(r);i===void 0&&(i={},e.set(r,i)),i[n.alt]=!0}return e}function TN(t){for(const e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function $N(t){for(const e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var jf;(function(t){function e(n){return typeof n=="string"}t.is=e})(jf||(jf={}));var xl;(function(t){function e(n){return typeof n=="string"}t.is=e})(xl||(xl={}));var Kf;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Kf||(Kf={}));var ks;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(ks||(ks={}));var re;(function(t){function e(r,i){return r===Number.MAX_VALUE&&(r=ks.MAX_VALUE),i===Number.MAX_VALUE&&(i=ks.MAX_VALUE),{line:r,character:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&w.uinteger(i.line)&&w.uinteger(i.character)}t.is=n})(re||(re={}));var Q;(function(t){function e(r,i,s,a){if(w.uinteger(r)&&w.uinteger(i)&&w.uinteger(s)&&w.uinteger(a))return{start:re.create(r,i),end:re.create(s,a)};if(re.is(r)&&re.is(i))return{start:r,end:i};throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${a}]`)}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&re.is(i.start)&&re.is(i.end)}t.is=n})(Q||(Q={}));var ws;(function(t){function e(r,i){return{uri:r,range:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.range)&&(w.string(i.uri)||w.undefined(i.uri))}t.is=n})(ws||(ws={}));var qf;(function(t){function e(r,i,s,a){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:a}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.targetRange)&&w.string(i.targetUri)&&Q.is(i.targetSelectionRange)&&(Q.is(i.originSelectionRange)||w.undefined(i.originSelectionRange))}t.is=n})(qf||(qf={}));var Ml;(function(t){function e(r,i,s,a){return{red:r,green:i,blue:s,alpha:a}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.numberRange(i.red,0,1)&&w.numberRange(i.green,0,1)&&w.numberRange(i.blue,0,1)&&w.numberRange(i.alpha,0,1)}t.is=n})(Ml||(Ml={}));var Gf;(function(t){function e(r,i){return{range:r,color:i}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&Q.is(i.range)&&Ml.is(i.color)}t.is=n})(Gf||(Gf={}));var Wf;(function(t){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.string(i.label)&&(w.undefined(i.textEdit)||Ht.is(i))&&(w.undefined(i.additionalTextEdits)||w.typedArray(i.additionalTextEdits,Ht.is))}t.is=n})(Wf||(Wf={}));var zf;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(zf||(zf={}));var Vf;(function(t){function e(r,i,s,a,o,l){const c={startLine:r,endLine:i};return w.defined(s)&&(c.startCharacter=s),w.defined(a)&&(c.endCharacter=a),w.defined(o)&&(c.kind=o),w.defined(l)&&(c.collapsedText=l),c}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.uinteger(i.startLine)&&w.uinteger(i.startLine)&&(w.undefined(i.startCharacter)||w.uinteger(i.startCharacter))&&(w.undefined(i.endCharacter)||w.uinteger(i.endCharacter))&&(w.undefined(i.kind)||w.string(i.kind))}t.is=n})(Vf||(Vf={}));var Ll;(function(t){function e(r,i){return{location:r,message:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&ws.is(i.location)&&w.string(i.message)}t.is=n})(Ll||(Ll={}));var Yf;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Yf||(Yf={}));var Xf;(function(t){t.Unnecessary=1,t.Deprecated=2})(Xf||(Xf={}));var Jf;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&w.string(r.href)}t.is=e})(Jf||(Jf={}));var bs;(function(t){function e(r,i,s,a,o,l){let c={range:r,message:i};return w.defined(s)&&(c.severity=s),w.defined(a)&&(c.code=a),w.defined(o)&&(c.source=o),w.defined(l)&&(c.relatedInformation=l),c}t.create=e;function n(r){var i;let s=r;return w.defined(s)&&Q.is(s.range)&&w.string(s.message)&&(w.number(s.severity)||w.undefined(s.severity))&&(w.integer(s.code)||w.string(s.code)||w.undefined(s.code))&&(w.undefined(s.codeDescription)||w.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(w.string(s.source)||w.undefined(s.source))&&(w.undefined(s.relatedInformation)||w.typedArray(s.relatedInformation,Ll.is))}t.is=n})(bs||(bs={}));var dr;(function(t){function e(r,i,...s){let a={title:r,command:i};return w.defined(s)&&s.length>0&&(a.arguments=s),a}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.title)&&w.string(i.command)}t.is=n})(dr||(dr={}));var Ht;(function(t){function e(s,a){return{range:s,newText:a}}t.replace=e;function n(s,a){return{range:{start:s,end:s},newText:a}}t.insert=n;function r(s){return{range:s,newText:""}}t.del=r;function i(s){const a=s;return w.objectLiteral(a)&&w.string(a.newText)&&Q.is(a.range)}t.is=i})(Ht||(Ht={}));var ir;(function(t){function e(r,i,s){const a={label:r};return i!==void 0&&(a.needsConfirmation=i),s!==void 0&&(a.description=s),a}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.string(i.label)&&(w.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(w.string(i.description)||i.description===void 0)}t.is=n})(ir||(ir={}));var Ye;(function(t){function e(n){const r=n;return w.string(r)}t.is=e})(Ye||(Ye={}));var mn;(function(t){function e(s,a,o){return{range:s,newText:a,annotationId:o}}t.replace=e;function n(s,a,o){return{range:{start:s,end:s},newText:a,annotationId:o}}t.insert=n;function r(s,a){return{range:s,newText:"",annotationId:a}}t.del=r;function i(s){const a=s;return Ht.is(a)&&(ir.is(a.annotationId)||Ye.is(a.annotationId))}t.is=i})(mn||(mn={}));var Ss;(function(t){function e(r,i){return{textDocument:r,edits:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&Cs.is(i.textDocument)&&Array.isArray(i.edits)}t.is=n})(Ss||(Ss={}));var xr;(function(t){function e(r,i,s){let a={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(a.options=i),s!==void 0&&(a.annotationId=s),a}t.create=e;function n(r){let i=r;return i&&i.kind==="create"&&w.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||w.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||w.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(xr||(xr={}));var Mr;(function(t){function e(r,i,s,a){let o={kind:"rename",oldUri:r,newUri:i};return s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)&&(o.options=s),a!==void 0&&(o.annotationId=a),o}t.create=e;function n(r){let i=r;return i&&i.kind==="rename"&&w.string(i.oldUri)&&w.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||w.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||w.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(Mr||(Mr={}));var Lr;(function(t){function e(r,i,s){let a={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(a.options=i),s!==void 0&&(a.annotationId=s),a}t.create=e;function n(r){let i=r;return i&&i.kind==="delete"&&w.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||w.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||w.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(Lr||(Lr={}));var Fl;(function(t){function e(n){let r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i=>w.string(i.kind)?xr.is(i)||Mr.is(i)||Lr.is(i):Ss.is(i)))}t.is=e})(Fl||(Fl={}));class Pa{constructor(e,n){this.edits=e,this.changeAnnotations=n}insert(e,n,r){let i,s;if(r===void 0?i=Ht.insert(e,n):Ye.is(r)?(s=r,i=mn.insert(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.insert(e,n,s)),this.edits.push(i),s!==void 0)return s}replace(e,n,r){let i,s;if(r===void 0?i=Ht.replace(e,n):Ye.is(r)?(s=r,i=mn.replace(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.replace(e,n,s)),this.edits.push(i),s!==void 0)return s}delete(e,n){let r,i;if(n===void 0?r=Ht.del(e):Ye.is(n)?(i=n,r=mn.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=mn.del(e,i)),this.edits.push(r),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}}class fg{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,n){let r;if(Ye.is(e)?r=e:(r=this.nextId(),n=e),this._annotations[r]!==void 0)throw new Error(`Id ${r} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${r}`);return this._annotations[r]=n,this._size++,r}nextId(){return this._counter++,this._counter.toString()}}class kN{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new fg(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(n=>{if(Ss.is(n)){const r=new Pa(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach(n=>{const r=new Pa(e.changes[n]);this._textEditChanges[n]=r})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Cs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");const n={uri:e.uri,version:e.version};let r=this._textEditChanges[n.uri];if(!r){const i=[],s={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(s),r=new Pa(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[e];if(!n){let r=[];this._workspaceEdit.changes[e]=r,n=new Pa(r),this._textEditChanges[e]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new fg,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;ir.is(n)||Ye.is(n)?i=n:r=n;let s,a;if(i===void 0?s=xr.create(e,r):(a=Ye.is(i)?i:this._changeAnnotations.manage(i),s=xr.create(e,r,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a}renameFile(e,n,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let s;ir.is(r)||Ye.is(r)?s=r:i=r;let a,o;if(s===void 0?a=Mr.create(e,n,i):(o=Ye.is(s)?s:this._changeAnnotations.manage(s),a=Mr.create(e,n,i,o)),this._workspaceEdit.documentChanges.push(a),o!==void 0)return o}deleteFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;ir.is(n)||Ye.is(n)?i=n:r=n;let s,a;if(i===void 0?s=Lr.create(e,r):(a=Ye.is(i)?i:this._changeAnnotations.manage(i),s=Lr.create(e,r,a)),this._workspaceEdit.documentChanges.push(s),a!==void 0)return a}}var Qf;(function(t){function e(r){return{uri:r}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)}t.is=n})(Qf||(Qf={}));var Zf;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&w.integer(i.version)}t.is=n})(Zf||(Zf={}));var Cs;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&(i.version===null||w.integer(i.version))}t.is=n})(Cs||(Cs={}));var ep;(function(t){function e(r,i,s,a){return{uri:r,languageId:i,version:s,text:a}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&w.string(i.languageId)&&w.integer(i.version)&&w.string(i.text)}t.is=n})(ep||(ep={}));var Ul;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(n){const r=n;return r===t.PlainText||r===t.Markdown}t.is=e})(Ul||(Ul={}));var Fr;(function(t){function e(n){const r=n;return w.objectLiteral(n)&&Ul.is(r.kind)&&w.string(r.value)}t.is=e})(Fr||(Fr={}));var tp;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(tp||(tp={}));var np;(function(t){t.PlainText=1,t.Snippet=2})(np||(np={}));var rp;(function(t){t.Deprecated=1})(rp||(rp={}));var ip;(function(t){function e(r,i,s){return{newText:r,insert:i,replace:s}}t.create=e;function n(r){const i=r;return i&&w.string(i.newText)&&Q.is(i.insert)&&Q.is(i.replace)}t.is=n})(ip||(ip={}));var sp;(function(t){t.asIs=1,t.adjustIndentation=2})(sp||(sp={}));var ap;(function(t){function e(n){const r=n;return r&&(w.string(r.detail)||r.detail===void 0)&&(w.string(r.description)||r.description===void 0)}t.is=e})(ap||(ap={}));var op;(function(t){function e(n){return{label:n}}t.create=e})(op||(op={}));var lp;(function(t){function e(n,r){return{items:n||[],isIncomplete:!!r}}t.create=e})(lp||(lp={}));var As;(function(t){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function n(r){const i=r;return w.string(i)||w.objectLiteral(i)&&w.string(i.language)&&w.string(i.value)}t.is=n})(As||(As={}));var cp;(function(t){function e(n){let r=n;return!!r&&w.objectLiteral(r)&&(Fr.is(r.contents)||As.is(r.contents)||w.typedArray(r.contents,As.is))&&(n.range===void 0||Q.is(n.range))}t.is=e})(cp||(cp={}));var up;(function(t){function e(n,r){return r?{label:n,documentation:r}:{label:n}}t.create=e})(up||(up={}));var dp;(function(t){function e(n,r,...i){let s={label:n};return w.defined(r)&&(s.documentation=r),w.defined(i)?s.parameters=i:s.parameters=[],s}t.create=e})(dp||(dp={}));var fp;(function(t){t.Text=1,t.Read=2,t.Write=3})(fp||(fp={}));var pp;(function(t){function e(n,r){let i={range:n};return w.number(r)&&(i.kind=r),i}t.create=e})(pp||(pp={}));var hp;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(hp||(hp={}));var mp;(function(t){t.Deprecated=1})(mp||(mp={}));var gp;(function(t){function e(n,r,i,s,a){let o={name:n,kind:r,location:{uri:s,range:i}};return a&&(o.containerName=a),o}t.create=e})(gp||(gp={}));var yp;(function(t){function e(n,r,i,s){return s!==void 0?{name:n,kind:r,location:{uri:i,range:s}}:{name:n,kind:r,location:{uri:i}}}t.create=e})(yp||(yp={}));var _p;(function(t){function e(r,i,s,a,o,l){let c={name:r,detail:i,kind:s,range:a,selectionRange:o};return l!==void 0&&(c.children=l),c}t.create=e;function n(r){let i=r;return i&&w.string(i.name)&&w.number(i.kind)&&Q.is(i.range)&&Q.is(i.selectionRange)&&(i.detail===void 0||w.string(i.detail))&&(i.deprecated===void 0||w.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=n})(_p||(_p={}));var vp;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(vp||(vp={}));var Es;(function(t){t.Invoked=1,t.Automatic=2})(Es||(Es={}));var Rp;(function(t){function e(r,i,s){let a={diagnostics:r};return i!=null&&(a.only=i),s!=null&&(a.triggerKind=s),a}t.create=e;function n(r){let i=r;return w.defined(i)&&w.typedArray(i.diagnostics,bs.is)&&(i.only===void 0||w.typedArray(i.only,w.string))&&(i.triggerKind===void 0||i.triggerKind===Es.Invoked||i.triggerKind===Es.Automatic)}t.is=n})(Rp||(Rp={}));var Tp;(function(t){function e(r,i,s){let a={title:r},o=!0;return typeof i=="string"?(o=!1,a.kind=i):dr.is(i)?a.command=i:a.edit=i,o&&s!==void 0&&(a.kind=s),a}t.create=e;function n(r){let i=r;return i&&w.string(i.title)&&(i.diagnostics===void 0||w.typedArray(i.diagnostics,bs.is))&&(i.kind===void 0||w.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||dr.is(i.command))&&(i.isPreferred===void 0||w.boolean(i.isPreferred))&&(i.edit===void 0||Fl.is(i.edit))}t.is=n})(Tp||(Tp={}));var $p;(function(t){function e(r,i){let s={range:r};return w.defined(i)&&(s.data=i),s}t.create=e;function n(r){let i=r;return w.defined(i)&&Q.is(i.range)&&(w.undefined(i.command)||dr.is(i.command))}t.is=n})($p||($p={}));var kp;(function(t){function e(r,i){return{tabSize:r,insertSpaces:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.uinteger(i.tabSize)&&w.boolean(i.insertSpaces)}t.is=n})(kp||(kp={}));var wp;(function(t){function e(r,i,s){return{range:r,target:i,data:s}}t.create=e;function n(r){let i=r;return w.defined(i)&&Q.is(i.range)&&(w.undefined(i.target)||w.string(i.target))}t.is=n})(wp||(wp={}));var bp;(function(t){function e(r,i){return{range:r,parent:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=n})(bp||(bp={}));var Sp;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(Sp||(Sp={}));var Cp;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(Cp||(Cp={}));var Ap;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}t.is=e})(Ap||(Ap={}));var Ep;(function(t){function e(r,i){return{range:r,text:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&w.string(i.text)}t.is=n})(Ep||(Ep={}));var Pp;(function(t){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&w.boolean(i.caseSensitiveLookup)&&(w.string(i.variableName)||i.variableName===void 0)}t.is=n})(Pp||(Pp={}));var Np;(function(t){function e(r,i){return{range:r,expression:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&(w.string(i.expression)||i.expression===void 0)}t.is=n})(Np||(Np={}));var Ip;(function(t){function e(r,i){return{frameId:r,stoppedLocation:i}}t.create=e;function n(r){const i=r;return w.defined(i)&&Q.is(r.stoppedLocation)}t.is=n})(Ip||(Ip={}));var Hl;(function(t){t.Type=1,t.Parameter=2;function e(n){return n===1||n===2}t.is=e})(Hl||(Hl={}));var Bl;(function(t){function e(r){return{value:r}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&(i.tooltip===void 0||w.string(i.tooltip)||Fr.is(i.tooltip))&&(i.location===void 0||ws.is(i.location))&&(i.command===void 0||dr.is(i.command))}t.is=n})(Bl||(Bl={}));var Op;(function(t){function e(r,i,s){const a={position:r,label:i};return s!==void 0&&(a.kind=s),a}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&re.is(i.position)&&(w.string(i.label)||w.typedArray(i.label,Bl.is))&&(i.kind===void 0||Hl.is(i.kind))&&i.textEdits===void 0||w.typedArray(i.textEdits,Ht.is)&&(i.tooltip===void 0||w.string(i.tooltip)||Fr.is(i.tooltip))&&(i.paddingLeft===void 0||w.boolean(i.paddingLeft))&&(i.paddingRight===void 0||w.boolean(i.paddingRight))}t.is=n})(Op||(Op={}));var Dp;(function(t){function e(n){return{kind:"snippet",value:n}}t.createSnippet=e})(Dp||(Dp={}));var xp;(function(t){function e(n,r,i,s){return{insertText:n,filterText:r,range:i,command:s}}t.create=e})(xp||(xp={}));var Mp;(function(t){function e(n){return{items:n}}t.create=e})(Mp||(Mp={}));var Lp;(function(t){t.Invoked=0,t.Automatic=1})(Lp||(Lp={}));var Fp;(function(t){function e(n,r){return{range:n,text:r}}t.create=e})(Fp||(Fp={}));var Up;(function(t){function e(n,r){return{triggerKind:n,selectedCompletionInfo:r}}t.create=e})(Up||(Up={}));var Hp;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&xl.is(r.uri)&&w.string(r.name)}t.is=e})(Hp||(Hp={}));const wN=[`
`,`\r
`,"\r"];var Bp;(function(t){function e(s,a,o,l){return new bN(s,a,o,l)}t.create=e;function n(s){let a=s;return!!(w.defined(a)&&w.string(a.uri)&&(w.undefined(a.languageId)||w.string(a.languageId))&&w.uinteger(a.lineCount)&&w.func(a.getText)&&w.func(a.positionAt)&&w.func(a.offsetAt))}t.is=n;function r(s,a){let o=s.getText(),l=i(a,(u,d)=>{let p=u.range.start.line-d.range.start.line;return p===0?u.range.start.character-d.range.start.character:p}),c=o.length;for(let u=l.length-1;u>=0;u--){let d=l[u],p=s.offsetAt(d.range.start),h=s.offsetAt(d.range.end);if(h<=c)o=o.substring(0,p)+d.newText+o.substring(h,o.length);else throw new Error("Overlapping edit");c=p}return o}t.applyEdits=r;function i(s,a){if(s.length<=1)return s;const o=s.length/2|0,l=s.slice(0,o),c=s.slice(o);i(l,a),i(c,a);let u=0,d=0,p=0;for(;u<l.length&&d<c.length;)a(l[u],c[d])<=0?s[p++]=l[u++]:s[p++]=c[d++];for(;u<l.length;)s[p++]=l[u++];for(;d<c.length;)s[p++]=c[d++];return s}})(Bp||(Bp={}));let bN=class{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],n=this._content,r=!0;for(let i=0;i<n.length;i++){r&&(e.push(i),r=!1);let s=n.charAt(i);r=s==="\r"||s===`
`,s==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}r&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let n=this.getLineOffsets(),r=0,i=n.length;if(i===0)return re.create(0,e);for(;r<i;){let a=Math.floor((r+i)/2);n[a]>e?i=a:r=a+1}let s=r-1;return re.create(s,e-n[s])}offsetAt(e){let n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;let r=n[e.line],i=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,i),r)}get lineCount(){return this.getLineOffsets().length}};var w;(function(t){const e=Object.prototype.toString;function n(h){return typeof h<"u"}t.defined=n;function r(h){return typeof h>"u"}t.undefined=r;function i(h){return h===!0||h===!1}t.boolean=i;function s(h){return e.call(h)==="[object String]"}t.string=s;function a(h){return e.call(h)==="[object Number]"}t.number=a;function o(h,f,y){return e.call(h)==="[object Number]"&&f<=h&&h<=y}t.numberRange=o;function l(h){return e.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}t.integer=l;function c(h){return e.call(h)==="[object Number]"&&0<=h&&h<=2147483647}t.uinteger=c;function u(h){return e.call(h)==="[object Function]"}t.func=u;function d(h){return h!==null&&typeof h=="object"}t.objectLiteral=d;function p(h,f){return Array.isArray(h)&&h.every(f)}t.typedArray=p})(w||(w={}));var SN=Object.freeze({__proto__:null,get AnnotatedTextEdit(){return mn},get ChangeAnnotation(){return ir},get ChangeAnnotationIdentifier(){return Ye},get CodeAction(){return Tp},get CodeActionContext(){return Rp},get CodeActionKind(){return vp},get CodeActionTriggerKind(){return Es},get CodeDescription(){return Jf},get CodeLens(){return $p},get Color(){return Ml},get ColorInformation(){return Gf},get ColorPresentation(){return Wf},get Command(){return dr},get CompletionItem(){return op},get CompletionItemKind(){return tp},get CompletionItemLabelDetails(){return ap},get CompletionItemTag(){return rp},get CompletionList(){return lp},get CreateFile(){return xr},get DeleteFile(){return Lr},get Diagnostic(){return bs},get DiagnosticRelatedInformation(){return Ll},get DiagnosticSeverity(){return Yf},get DiagnosticTag(){return Xf},get DocumentHighlight(){return pp},get DocumentHighlightKind(){return fp},get DocumentLink(){return wp},get DocumentSymbol(){return _p},get DocumentUri(){return jf},EOL:wN,get FoldingRange(){return Vf},get FoldingRangeKind(){return zf},get FormattingOptions(){return kp},get Hover(){return cp},get InlayHint(){return Op},get InlayHintKind(){return Hl},get InlayHintLabelPart(){return Bl},get InlineCompletionContext(){return Up},get InlineCompletionItem(){return xp},get InlineCompletionList(){return Mp},get InlineCompletionTriggerKind(){return Lp},get InlineValueContext(){return Ip},get InlineValueEvaluatableExpression(){return Np},get InlineValueText(){return Ep},get InlineValueVariableLookup(){return Pp},get InsertReplaceEdit(){return ip},get InsertTextFormat(){return np},get InsertTextMode(){return sp},get Location(){return ws},get LocationLink(){return qf},get MarkedString(){return As},get MarkupContent(){return Fr},get MarkupKind(){return Ul},get OptionalVersionedTextDocumentIdentifier(){return Cs},get ParameterInformation(){return up},get Position(){return re},get Range(){return Q},get RenameFile(){return Mr},get SelectedCompletionInfo(){return Fp},get SelectionRange(){return bp},get SemanticTokenModifiers(){return Cp},get SemanticTokenTypes(){return Sp},get SemanticTokens(){return Ap},get SignatureInformation(){return dp},get StringValue(){return Dp},get SymbolInformation(){return gp},get SymbolKind(){return hp},get SymbolTag(){return mp},get TextDocument(){return Bp},get TextDocumentEdit(){return Ss},get TextDocumentIdentifier(){return Qf},get TextDocumentItem(){return ep},get TextEdit(){return Ht},get URI(){return xl},get VersionedTextDocumentIdentifier(){return Zf},WorkspaceChange:kN,get WorkspaceEdit(){return Fl},get WorkspaceFolder(){return Hp},get WorkspaceSymbol(){return yp},get integer(){return Kf},get uinteger(){return ks}});class CN{constructor(){this.nodeStack=[]}get current(){var e;return(e=this.nodeStack[this.nodeStack.length-1])!==null&&e!==void 0?e:this.rootNode}buildRootNode(e){return this.rootNode=new qR(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){const n=new jh;return n.grammarSource=e,n.root=this.rootNode,this.current.content.push(n),this.nodeStack.push(n),n}buildLeafNode(e,n){const r=new jp(e.startOffset,e.image.length,kf(e),e.tokenType,!n);return r.grammarSource=n,r.root=this.rootNode,this.current.content.push(r),r}removeNode(e){const n=e.container;if(n){const r=n.content.indexOf(e);r>=0&&n.content.splice(r,1)}}addHiddenNodes(e){const n=[];for(const s of e){const a=new jp(s.startOffset,s.image.length,kf(s),s.tokenType,!0);a.root=this.rootNode,n.push(a)}let r=this.current,i=!1;if(r.content.length>0){r.content.push(...n);return}for(;r.container;){const s=r.container.content.indexOf(r);if(s>0){r.container.content.splice(s,0,...n),i=!0;break}r=r.container}i||this.rootNode.content.unshift(...n)}construct(e){const n=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=n;const r=this.nodeStack.pop();(r==null?void 0:r.content.length)===0&&this.removeNode(r)}}class KR{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,n;const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(n=this.container)===null||n===void 0?void 0:n.astNode;if(!r)throw new Error("This node has no associated AST element");return r}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class jp extends KR{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,n,r,i,s=!1){super(),this._hidden=s,this._offset=e,this._tokenType=i,this._length=n,this._range=r}}class jh extends KR{constructor(){super(...arguments),this.content=new Kh(this)}get children(){return this.content}get offset(){var e,n;return(n=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&n!==void 0?n:0}get length(){return this.end-this.offset}get end(){var e,n;return(n=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&n!==void 0?n:0}get range(){const e=this.firstNonHiddenNode,n=this.lastNonHiddenNode;if(e&&n){if(this._rangeCache===void 0){const{range:r}=e,{range:i}=n;this._rangeCache={start:r.start,end:i.end.line<r.start.line?r.start:i.end}}return this._rangeCache}else return{start:re.create(0,0),end:re.create(0,0)}}get firstNonHiddenNode(){for(const e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const n=this.content[e];if(!n.hidden)return n}return this.content[this.content.length-1]}}class Kh extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Kh.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,n,...r){return this.addParents(r),super.splice(e,n,...r)}addParents(e){for(const n of e)n.container=this.parent}}class qR extends jh{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}}const Kp=Symbol("Datatype");function pu(t){return t.$type===Kp}const pg="​",GR=t=>t.endsWith(pg)?t:t+pg;class WR{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;const n=this.lexer.definition,r=e.LanguageMetaData.mode==="production";this.wrapper=new IN(n,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,n){this.wrapper.wrapOr(e,n)}optional(e,n){this.wrapper.wrapOption(e,n)}many(e,n){this.wrapper.wrapMany(e,n)}atLeastOne(e,n){this.wrapper.wrapAtLeastOne(e,n)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class AN extends WR{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new CN,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,n){const r=this.computeRuleType(e),i=this.wrapper.DEFINE_RULE(GR(e.name),this.startImplementation(r,n).bind(this));return this.allRules.set(e.name,i),e.entry&&(this.mainRule=i),i}computeRuleType(e){if(!e.fragment){if(Rv(e))return Kp;{const n=Ls(e);return n??e.name}}}parse(e,n={}){this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=n.rule?this.allRules.get(n.rule):this.mainRule;if(!i)throw new Error(n.rule?`No rule found with name '${n.rule}'`:"No main rule available.");const s=this.doParse(i);return this.nodeBuilder.addHiddenNodes(r.hidden),this.unorderedGroups.clear(),this.lexerResult=void 0,{value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors}}doParse(e){let n=e.call(this.wrapper,{});if(this.stack.length>0&&(n=this.construct()),n===void 0)throw new Error("No result from parser");if(this.stack.length>0)throw new Error("Parser stack is not empty after parsing");return n}startImplementation(e,n){return r=>{const i=!this.isRecording()&&e!==void 0;if(i){const s={$type:e};this.stack.push(s),e===Kp&&(s.value="")}return n(r),i?this.construct():void 0}}extractHiddenTokens(e){const n=this.lexerResult.hidden;if(!n.length)return[];const r=e.startOffset;for(let i=0;i<n.length;i++)if(n[i].startOffset>r)return n.splice(0,i);return n.splice(0,n.length)}consume(e,n,r){const i=this.wrapper.wrapConsume(e,n);if(!this.isRecording()&&this.isValidToken(i)){const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);const a=this.nodeBuilder.buildLeafNode(i,r),{assignment:o,isCrossRef:l}=this.getAssignment(r),c=this.current;if(o){const u=Pt(r)?i.image:this.converter.convert(i.image,a);this.assign(o.operator,o.feature,u,a,l)}else if(pu(c)){let u=i.image;Pt(r)||(u=this.converter.convert(u,a).toString()),c.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,n,r,i,s){let a;!this.isRecording()&&!r&&(a=this.nodeBuilder.buildCompositeNode(i));let o;try{o=this.wrapper.wrapSubrule(e,n,s)}finally{this.isRecording()||(o===void 0&&!r&&(o=this.construct()),o!==void 0&&a&&a.length>0&&this.performSubruleAssignment(o,i,a))}}performSubruleAssignment(e,n,r){const{assignment:i,isCrossRef:s}=this.getAssignment(n);if(i)this.assign(i.operator,i.feature,e,r,s);else if(!i){const a=this.current;if(pu(a))a.value+=e.toString();else if(typeof e=="object"&&e){const l=this.assignWithoutOverride(e,a);this.stack.pop(),this.stack.push(l)}}}action(e,n){if(!this.isRecording()){let r=this.current;if(n.feature&&n.operator){r=this.construct(),this.nodeBuilder.removeNode(r.$cstNode),this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);const s={$type:e};this.stack.push(s),this.assign(n.operator,n.feature,r,r.$cstNode,!1)}else r.$type=e}}construct(){if(this.isRecording())return;const e=this.current;return E$(e),this.nodeBuilder.construct(e),this.stack.pop(),pu(e)?this.converter.convert(e.value,e.$cstNode):(lv(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){const n=Dn(e,en);this.assignmentMap.set(e,{assignment:n,isCrossRef:n?Ms(n.terminal):!1})}return this.assignmentMap.get(e)}assign(e,n,r,i,s){const a=this.current;let o;switch(s&&typeof r=="string"?o=this.linker.buildReference(a,n,i,r):o=r,e){case"=":{a[n]=o;break}case"?=":{a[n]=!0;break}case"+=":Array.isArray(a[n])||(a[n]=[]),a[n].push(o)}}assignWithoutOverride(e,n){for(const[i,s]of Object.entries(n)){const a=e[i];a===void 0?e[i]=s:Array.isArray(a)&&Array.isArray(s)&&(s.push(...a),e[i]=s)}const r=e.$cstNode;return r&&(r.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}}class EN{buildMismatchTokenMessage(e){return Sr.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Sr.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Sr.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Sr.buildEarlyExitMessage(e)}}class zR extends EN{buildMismatchTokenMessage({expected:e,actual:n}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${n.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}}class PN extends WR{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();const n=this.lexer.tokenize(e,{mode:"partial"});return this.tokens=n.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,n){const r=this.wrapper.DEFINE_RULE(GR(e.name),this.startImplementation(n).bind(this));return this.allRules.set(e.name,r),e.entry&&(this.mainRule=r),r}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return n=>{const r=this.keepStackSize();try{e(n)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){const e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,n,r){this.wrapper.wrapConsume(e,n),this.isRecording()||(this.lastElementStack=[...this.elementStack,r],this.nextTokenIndex=this.currIdx+1)}subrule(e,n,r,i,s){this.before(i),this.wrapper.wrapSubrule(e,n,s),this.after(i)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){const n=this.elementStack.lastIndexOf(e);n>=0&&this.elementStack.splice(n)}}get currIdx(){return this.wrapper.currIdx}}const NN={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new zR};class IN extends MP{constructor(e,n){const r=n&&"maxLookahead"in n;super(e,Object.assign(Object.assign(Object.assign({},NN),{lookaheadStrategy:r?new Mh({maxLookahead:n.maxLookahead}):new rN({logging:n.skipValidations?()=>{}:void 0})}),n))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,n,r){return this.RULE(e,n,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,n){return this.consume(e,n,void 0)}wrapSubrule(e,n,r){return this.subrule(e,n,{ARGS:[r]})}wrapOr(e,n){this.or(e,n)}wrapOption(e,n){this.option(e,n)}wrapMany(e,n){this.many(e,n)}wrapAtLeastOne(e,n){this.atLeastOne(e,n)}}function VR(t,e,n){return ON({parser:e,tokens:n,ruleNames:new Map},t),e}function ON(t,e){const n=fv(e,!1),r=we(e.rules).filter(tt).filter(i=>n.has(i));for(const i of r){const s=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(i,fr(s,i.definition))}}function fr(t,e,n=!1){let r;if(Pt(e))r=HN(t,e);else if(xs(e))r=DN(t,e);else if(en(e))r=fr(t,e.terminal);else if(Ms(e))r=YR(t,e);else if(Rn(e))r=xN(t,e);else if(ch(e))r=LN(t,e);else if(uh(e))r=FN(t,e);else if(or(e))r=UN(t,e);else if(T$(e)){const i=t.consume++;r=()=>t.parser.consume(i,qn,e)}else throw new tv(e.$cstNode,`Unexpected element type: ${e.$type}`);return XR(t,n?void 0:jl(e),r,e.cardinality)}function DN(t,e){const n=oc(e);return()=>t.parser.action(n,e)}function xN(t,e){const n=e.rule.ref;if(tt(n)){const r=t.subrule++,i=n.fragment,s=e.arguments.length>0?MN(n,e.arguments):()=>({});return a=>t.parser.subrule(r,JR(t,n),i,e,s(a))}else if(Vn(n)){const r=t.consume++,i=qp(t,n.name);return()=>t.parser.consume(r,i,e)}else if(n)Ds();else throw new tv(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)}function MN(t,e){const n=e.map(r=>gn(r.value));return r=>{const i={};for(let s=0;s<n.length;s++){const a=t.parameters[s],o=n[s];i[a.name]=o(r)}return i}}function gn(t){if(m$(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)||n(r)}else if(h$(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)&&n(r)}else if(g$(t)){const e=gn(t.value);return n=>!e(n)}else if(y$(t)){const e=t.parameter.ref.name;return n=>n!==void 0&&n[e]===!0}else if(p$(t)){const e=!!t.true;return()=>e}Ds()}function LN(t,e){if(e.elements.length===1)return fr(t,e.elements[0]);{const n=[];for(const i of e.elements){const s={ALT:fr(t,i,!0)},a=jl(i);a&&(s.GATE=gn(a)),n.push(s)}const r=t.or++;return i=>t.parser.alternatives(r,n.map(s=>{const a={ALT:()=>s.ALT(i)},o=s.GATE;return o&&(a.GATE=()=>o(i)),a}))}}function FN(t,e){if(e.elements.length===1)return fr(t,e.elements[0]);const n=[];for(const o of e.elements){const l={ALT:fr(t,o,!0)},c=jl(o);c&&(l.GATE=gn(c)),n.push(l)}const r=t.or++,i=(o,l)=>{const c=l.getRuleStack().join("-");return`uGroup_${o}_${c}`},s=o=>t.parser.alternatives(r,n.map((l,c)=>{const u={ALT:()=>!0},d=t.parser;u.ALT=()=>{if(l.ALT(o),!d.isRecording()){const h=i(r,d);d.unorderedGroups.get(h)||d.unorderedGroups.set(h,[]);const f=d.unorderedGroups.get(h);typeof(f==null?void 0:f[c])>"u"&&(f[c]=!0)}};const p=l.GATE;return p?u.GATE=()=>p(o):u.GATE=()=>{const h=d.unorderedGroups.get(i(r,d));return!(h!=null&&h[c])},u})),a=XR(t,jl(e),s,"*");return o=>{a(o),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(r,t.parser))}}function UN(t,e){const n=e.elements.map(r=>fr(t,r));return r=>n.forEach(i=>i(r))}function jl(t){if(or(t))return t.guardCondition}function YR(t,e,n=e.terminal){if(n)if(Rn(n)&&tt(n.rule.ref)){const r=n.rule.ref,i=t.subrule++;return s=>t.parser.subrule(i,JR(t,r),!1,e,s)}else if(Rn(n)&&Vn(n.rule.ref)){const r=t.consume++,i=qp(t,n.rule.ref.name);return()=>t.parser.consume(r,i,e)}else if(Pt(n)){const r=t.consume++,i=qp(t,n.value);return()=>t.parser.consume(r,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);const r=_v(e.type.ref),i=r==null?void 0:r.terminal;if(!i)throw new Error("Could not find name assignment for type: "+oc(e.type.ref));return YR(t,e,i)}}function HN(t,e){const n=t.consume++,r=t.tokens[e.value];if(!r)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(n,r,e)}function XR(t,e,n,r){const i=e&&gn(e);if(!r)if(i){const s=t.or++;return a=>t.parser.alternatives(s,[{ALT:()=>n(a),GATE:()=>i(a)},{ALT:lg(),GATE:()=>!i(a)}])}else return n;if(r==="*"){const s=t.many++;return a=>t.parser.many(s,{DEF:()=>n(a),GATE:i?()=>i(a):void 0})}else if(r==="+"){const s=t.many++;if(i){const a=t.or++;return o=>t.parser.alternatives(a,[{ALT:()=>t.parser.atLeastOne(s,{DEF:()=>n(o)}),GATE:()=>i(o)},{ALT:lg(),GATE:()=>!i(o)}])}else return a=>t.parser.atLeastOne(s,{DEF:()=>n(a)})}else if(r==="?"){const s=t.optional++;return a=>t.parser.optional(s,{DEF:()=>n(a),GATE:i?()=>i(a):void 0})}else Ds()}function JR(t,e){const n=BN(t,e),r=t.parser.getRule(n);if(!r)throw new Error(`Rule "${n}" not found."`);return r}function BN(t,e){if(tt(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let n=e,r=n.$container,i=e.$type;for(;!tt(r);)(or(r)||ch(r)||uh(r))&&(i=r.elements.indexOf(n).toString()+":"+i),n=r,r=r.$container;return i=r.name+":"+i,t.ruleNames.set(e,i),i}}function qp(t,e){const n=t.tokens[e];if(!n)throw new Error(`Token "${e}" not found."`);return n}function jN(t){const e=t.Grammar,n=t.parser.Lexer,r=new PN(t);return VR(e,r,n.definition),r.finalize(),r}function KN(t){const e=qN(t);return e.finalize(),e}function qN(t){const e=t.Grammar,n=t.parser.Lexer,r=new AN(t);return VR(e,r,n.definition)}class GN{constructor(){this.diagnostics=[]}buildTokens(e,n){const r=we(fv(e,!1)),i=this.buildTerminalTokens(r),s=this.buildKeywordTokens(r,i,n);return s.push(...i),s}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){const e=[...this.diagnostics];return this.diagnostics=[],e}buildTerminalTokens(e){return e.filter(Vn).filter(n=>!n.fragment).map(n=>this.buildTerminalToken(n)).toArray()}buildTerminalToken(e){const n=lc(e),r=this.requiresCustomPattern(n)?this.regexPatternFunction(n):n,i={name:e.name,PATTERN:r};return typeof r=="function"&&(i.LINE_BREAKS=!0),e.hidden&&(i.GROUP=dv(n)?dt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){const n=new RegExp(e,e.flags+"y");return(r,i)=>(n.lastIndex=i,n.exec(r))}buildKeywordTokens(e,n,r){return e.filter(tt).flatMap(i=>Qt(i).filter(Pt)).distinct(i=>i.value).toArray().sort((i,s)=>s.value.length-i.value.length).map(i=>this.buildKeywordToken(i,n,!!(r!=null&&r.caseInsensitive)))}buildKeywordToken(e,n,r){const i=this.buildKeywordPattern(e,r),s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,n)};return typeof i=="function"&&(s.LINE_BREAKS=!0),s}buildKeywordPattern(e,n){return n?new RegExp(ac(e.value),"i"):e.value}findLongerAlt(e,n){return n.reduce((r,i)=>{const s=i==null?void 0:i.PATTERN;return s!=null&&s.source&&F$("^"+s.source+"$",e.value)&&r.push(i),r},[])}}class WN{convert(e,n){let r=n.grammarSource;if(Ms(r)&&(r=hv(r)),Rn(r)){const i=r.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,n)}return e}runConverter(e,n,r){var i;switch(e.name.toUpperCase()){case"INT":return pn.convertInt(n);case"STRING":return pn.convertString(n);case"ID":return pn.convertID(n)}switch((i=W$(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return pn.convertNumber(n);case"boolean":return pn.convertBoolean(n);case"bigint":return pn.convertBigint(n);case"date":return pn.convertDate(n);default:return n}}}var pn;(function(t){function e(c){let u="";for(let d=1;d<c.length-1;d++){const p=c.charAt(d);if(p==="\\"){const h=c.charAt(++d);u+=n(h)}else u+=p}return u}t.convertString=e;function n(c){switch(c){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return c}}function r(c){return c.charAt(0)==="^"?c.substring(1):c}t.convertID=r;function i(c){return parseInt(c)}t.convertInt=i;function s(c){return BigInt(c)}t.convertBigint=s;function a(c){return new Date(c)}t.convertDate=a;function o(c){return Number(c)}t.convertNumber=o;function l(c){return c.toLowerCase()==="true"}t.convertBoolean=l})(pn||(pn={}));var De=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zN(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Wn={},En={};Object.defineProperty(En,"__esModule",{value:!0});let Gp;function Wp(){if(Gp===void 0)throw new Error("No runtime abstraction layer installed");return Gp}(function(t){function e(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");Gp=n}t.install=e})(Wp||(Wp={}));En.default=Wp;var Le={};Object.defineProperty(Le,"__esModule",{value:!0});Le.stringArray=Le.array=Le.func=Le.error=Le.number=Le.string=Le.boolean=void 0;function VN(t){return t===!0||t===!1}Le.boolean=VN;function QR(t){return typeof t=="string"||t instanceof String}Le.string=QR;function YN(t){return typeof t=="number"||t instanceof Number}Le.number=YN;function XN(t){return t instanceof Error}Le.error=XN;function JN(t){return typeof t=="function"}Le.func=JN;function ZR(t){return Array.isArray(t)}Le.array=ZR;function QN(t){return ZR(t)&&t.every(e=>QR(e))}Le.stringArray=QN;var nn={};Object.defineProperty(nn,"__esModule",{value:!0});var eT=nn.Emitter=nn.Event=void 0;const ZN=En;var hg;(function(t){const e={dispose(){}};t.None=function(){return e}})(hg||(nn.Event=hg={}));class e0{add(e,n=null,r){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(n),Array.isArray(r)&&r.push({dispose:()=>this.remove(e,n)})}remove(e,n=null){if(!this._callbacks)return;let r=!1;for(let i=0,s=this._callbacks.length;i<s;i++)if(this._callbacks[i]===e)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else r=!0;if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];const n=[],r=this._callbacks.slice(0),i=this._contexts.slice(0);for(let s=0,a=r.length;s<a;s++)try{n.push(r[s].apply(i[s],e))}catch(o){(0,ZN.default)().console.error(o)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}}class Cc{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,n,r)=>{this._callbacks||(this._callbacks=new e0),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,n);const i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,n),i.dispose=Cc._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}}eT=nn.Emitter=Cc;Cc._noop=function(){};var le;Object.defineProperty(Wn,"__esModule",{value:!0});var qh=Wn.CancellationTokenSource=le=Wn.CancellationToken=void 0;const t0=En,n0=Le,zp=nn;var Kl;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:zp.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:zp.Event.None});function e(n){const r=n;return r&&(r===t.None||r===t.Cancelled||n0.boolean(r.isCancellationRequested)&&!!r.onCancellationRequested)}t.is=e})(Kl||(le=Wn.CancellationToken=Kl={}));const r0=Object.freeze(function(t,e){const n=(0,t0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){n.dispose()}}});class mg{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?r0:(this._emitter||(this._emitter=new zp.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}}class i0{get token(){return this._token||(this._token=new mg),this._token}cancel(){this._token?this._token.cancel():this._token=Kl.Cancelled}dispose(){this._token?this._token instanceof mg&&this._token.dispose():this._token=Kl.None}}qh=Wn.CancellationTokenSource=i0;function s0(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}let pl=0,a0=10;function o0(){return pl=performance.now(),new qh}const ql=Symbol("OperationCancelled");function Ys(t){return t===ql}async function rt(t){if(t===le.None)return;const e=performance.now();if(e-pl>=a0&&(pl=e,await s0(),pl=performance.now()),t.isCancellationRequested)throw ql}class Gh{constructor(){this.promise=new Promise((e,n)=>{this.resolve=r=>(e(r),this),this.reject=r=>(n(r),this)})}}class Ps{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){const n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){for(const r of e)if(Ps.isIncremental(r)){const i=nT(r.range),s=this.offsetAt(i.start),a=this.offsetAt(i.end);this._content=this._content.substring(0,s)+r.text+this._content.substring(a,this._content.length);const o=Math.max(i.start.line,0),l=Math.max(i.end.line,0);let c=this._lineOffsets;const u=gg(r.text,!1,s);if(l-o===u.length)for(let p=0,h=u.length;p<h;p++)c[p+o+1]=u[p];else u.length<1e4?c.splice(o+1,l-o,...u):this._lineOffsets=c=c.slice(0,o+1).concat(u,c.slice(l+1));const d=r.text.length-(a-s);if(d!==0)for(let p=o+1+u.length,h=c.length;p<h;p++)c[p]=c[p]+d}else if(Ps.isFull(r))this._content=r.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=gg(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);const n=this.getLineOffsets();let r=0,i=n.length;if(i===0)return{line:0,character:e};for(;r<i;){const a=Math.floor((r+i)/2);n[a]>e?i=a:r=a+1}const s=r-1;return e=this.ensureBeforeEOL(e,n[s]),{line:s,character:e-n[s]}}offsetAt(e){const n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;const r=n[e.line];if(e.character<=0)return r;const i=e.line+1<n.length?n[e.line+1]:this._content.length,s=Math.min(r+e.character,i);return this.ensureBeforeEOL(s,r)}ensureBeforeEOL(e,n){for(;e>n&&tT(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}}var Gl;(function(t){function e(i,s,a,o){return new Ps(i,s,a,o)}t.create=e;function n(i,s,a){if(i instanceof Ps)return i.update(s,a),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=n;function r(i,s){const a=i.getText(),o=Vp(s.map(l0),(u,d)=>{const p=u.range.start.line-d.range.start.line;return p===0?u.range.start.character-d.range.start.character:p});let l=0;const c=[];for(const u of o){const d=i.offsetAt(u.range.start);if(d<l)throw new Error("Overlapping edit");d>l&&c.push(a.substring(l,d)),u.newText.length&&c.push(u.newText),l=i.offsetAt(u.range.end)}return c.push(a.substr(l)),c.join("")}t.applyEdits=r})(Gl||(Gl={}));function Vp(t,e){if(t.length<=1)return t;const n=t.length/2|0,r=t.slice(0,n),i=t.slice(n);Vp(r,e),Vp(i,e);let s=0,a=0,o=0;for(;s<r.length&&a<i.length;)e(r[s],i[a])<=0?t[o++]=r[s++]:t[o++]=i[a++];for(;s<r.length;)t[o++]=r[s++];for(;a<i.length;)t[o++]=i[a++];return t}function gg(t,e,n=0){const r=e?[n]:[];for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);tT(s)&&(s===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,r.push(n+i+1))}return r}function tT(t){return t===13||t===10}function nT(t){const e=t.start,n=t.end;return e.line>n.line||e.line===n.line&&e.character>n.character?{start:n,end:e}:t}function l0(t){const e=nT(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var rT;(()=>{var t={470:i=>{function s(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function a(l,c){for(var u,d="",p=0,h=-1,f=0,y=0;y<=l.length;++y){if(y<l.length)u=l.charCodeAt(y);else{if(u===47)break;u=47}if(u===47){if(!(h===y-1||f===1))if(h!==y-1&&f===2){if(d.length<2||p!==2||d.charCodeAt(d.length-1)!==46||d.charCodeAt(d.length-2)!==46){if(d.length>2){var $=d.lastIndexOf("/");if($!==d.length-1){$===-1?(d="",p=0):p=(d=d.slice(0,$)).length-1-d.lastIndexOf("/"),h=y,f=0;continue}}else if(d.length===2||d.length===1){d="",p=0,h=y,f=0;continue}}c&&(d.length>0?d+="/..":d="..",p=2)}else d.length>0?d+="/"+l.slice(h+1,y):d=l.slice(h+1,y),p=y-h-1;h=y,f=0}else u===46&&f!==-1?++f:f=-1}return d}var o={resolve:function(){for(var l,c="",u=!1,d=arguments.length-1;d>=-1&&!u;d--){var p;d>=0?p=arguments[d]:(l===void 0&&(l=process.cwd()),p=l),s(p),p.length!==0&&(c=p+"/"+c,u=p.charCodeAt(0)===47)}return c=a(c,!u),u?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(l){if(s(l),l.length===0)return".";var c=l.charCodeAt(0)===47,u=l.charCodeAt(l.length-1)===47;return(l=a(l,!c)).length!==0||c||(l="."),l.length>0&&u&&(l+="/"),c?"/"+l:l},isAbsolute:function(l){return s(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,c=0;c<arguments.length;++c){var u=arguments[c];s(u),u.length>0&&(l===void 0?l=u:l+="/"+u)}return l===void 0?".":o.normalize(l)},relative:function(l,c){if(s(l),s(c),l===c||(l=o.resolve(l))===(c=o.resolve(c)))return"";for(var u=1;u<l.length&&l.charCodeAt(u)===47;++u);for(var d=l.length,p=d-u,h=1;h<c.length&&c.charCodeAt(h)===47;++h);for(var f=c.length-h,y=p<f?p:f,$=-1,v=0;v<=y;++v){if(v===y){if(f>y){if(c.charCodeAt(h+v)===47)return c.slice(h+v+1);if(v===0)return c.slice(h+v)}else p>y&&(l.charCodeAt(u+v)===47?$=v:v===0&&($=0));break}var m=l.charCodeAt(u+v);if(m!==c.charCodeAt(h+v))break;m===47&&($=v)}var g="";for(v=u+$+1;v<=d;++v)v!==d&&l.charCodeAt(v)!==47||(g.length===0?g+="..":g+="/..");return g.length>0?g+c.slice(h+$):(h+=$,c.charCodeAt(h)===47&&++h,c.slice(h))},_makeLong:function(l){return l},dirname:function(l){if(s(l),l.length===0)return".";for(var c=l.charCodeAt(0),u=c===47,d=-1,p=!0,h=l.length-1;h>=1;--h)if((c=l.charCodeAt(h))===47){if(!p){d=h;break}}else p=!1;return d===-1?u?"/":".":u&&d===1?"//":l.slice(0,d)},basename:function(l,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');s(l);var u,d=0,p=-1,h=!0;if(c!==void 0&&c.length>0&&c.length<=l.length){if(c.length===l.length&&c===l)return"";var f=c.length-1,y=-1;for(u=l.length-1;u>=0;--u){var $=l.charCodeAt(u);if($===47){if(!h){d=u+1;break}}else y===-1&&(h=!1,y=u+1),f>=0&&($===c.charCodeAt(f)?--f==-1&&(p=u):(f=-1,p=y))}return d===p?p=y:p===-1&&(p=l.length),l.slice(d,p)}for(u=l.length-1;u>=0;--u)if(l.charCodeAt(u)===47){if(!h){d=u+1;break}}else p===-1&&(h=!1,p=u+1);return p===-1?"":l.slice(d,p)},extname:function(l){s(l);for(var c=-1,u=0,d=-1,p=!0,h=0,f=l.length-1;f>=0;--f){var y=l.charCodeAt(f);if(y!==47)d===-1&&(p=!1,d=f+1),y===46?c===-1?c=f:h!==1&&(h=1):c!==-1&&(h=-1);else if(!p){u=f+1;break}}return c===-1||d===-1||h===0||h===1&&c===d-1&&c===u+1?"":l.slice(c,d)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(c,u){var d=u.dir||u.root,p=u.base||(u.name||"")+(u.ext||"");return d?d===u.root?d+p:d+"/"+p:p}(0,l)},parse:function(l){s(l);var c={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return c;var u,d=l.charCodeAt(0),p=d===47;p?(c.root="/",u=1):u=0;for(var h=-1,f=0,y=-1,$=!0,v=l.length-1,m=0;v>=u;--v)if((d=l.charCodeAt(v))!==47)y===-1&&($=!1,y=v+1),d===46?h===-1?h=v:m!==1&&(m=1):h!==-1&&(m=-1);else if(!$){f=v+1;break}return h===-1||y===-1||m===0||m===1&&h===y-1&&h===f+1?y!==-1&&(c.base=c.name=f===0&&p?l.slice(1,y):l.slice(f,y)):(f===0&&p?(c.name=l.slice(1,h),c.base=l.slice(1,y)):(c.name=l.slice(f,h),c.base=l.slice(f,y)),c.ext=l.slice(h,y)),f>0?c.dir=l.slice(0,f-1):p&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};o.posix=o,i.exports=o}},e={};function n(i){var s=e[i];if(s!==void 0)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,n),a.exports}n.d=(i,s)=>{for(var a in s)n.o(s,a)&&!n.o(i,a)&&Object.defineProperty(i,a,{enumerable:!0,get:s[a]})},n.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{let i;n.r(r),n.d(r,{URI:()=>p,Utils:()=>Te}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);const s=/^\w[\w\d+.-]*$/,a=/^\//,o=/^\/\//;function l(P,b){if(!P.scheme&&b)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${P.authority}", path: "${P.path}", query: "${P.query}", fragment: "${P.fragment}"}`);if(P.scheme&&!s.test(P.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(P.path){if(P.authority){if(!a.test(P.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(o.test(P.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}const c="",u="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class p{constructor(b,T,S,I,E,N=!1){On(this,"scheme");On(this,"authority");On(this,"path");On(this,"query");On(this,"fragment");typeof b=="object"?(this.scheme=b.scheme||c,this.authority=b.authority||c,this.path=b.path||c,this.query=b.query||c,this.fragment=b.fragment||c):(this.scheme=function(Fe,x){return Fe||x?Fe:"file"}(b,N),this.authority=T||c,this.path=function(Fe,x){switch(Fe){case"https":case"http":case"file":x?x[0]!==u&&(x=u+x):x=u}return x}(this.scheme,S||c),this.query=I||c,this.fragment=E||c,l(this,N))}static isUri(b){return b instanceof p||!!b&&typeof b.authority=="string"&&typeof b.fragment=="string"&&typeof b.path=="string"&&typeof b.query=="string"&&typeof b.scheme=="string"&&typeof b.fsPath=="string"&&typeof b.with=="function"&&typeof b.toString=="function"}get fsPath(){return m(this)}with(b){if(!b)return this;let{scheme:T,authority:S,path:I,query:E,fragment:N}=b;return T===void 0?T=this.scheme:T===null&&(T=c),S===void 0?S=this.authority:S===null&&(S=c),I===void 0?I=this.path:I===null&&(I=c),E===void 0?E=this.query:E===null&&(E=c),N===void 0?N=this.fragment:N===null&&(N=c),T===this.scheme&&S===this.authority&&I===this.path&&E===this.query&&N===this.fragment?this:new f(T,S,I,E,N)}static parse(b,T=!1){const S=d.exec(b);return S?new f(S[2]||c,G(S[4]||c),G(S[5]||c),G(S[7]||c),G(S[9]||c),T):new f(c,c,c,c,c)}static file(b){let T=c;if(i&&(b=b.replace(/\\/g,u)),b[0]===u&&b[1]===u){const S=b.indexOf(u,2);S===-1?(T=b.substring(2),b=u):(T=b.substring(2,S),b=b.substring(S)||u)}return new f("file",T,b,c,c)}static from(b){const T=new f(b.scheme,b.authority,b.path,b.query,b.fragment);return l(T,!0),T}toString(b=!1){return g(this,b)}toJSON(){return this}static revive(b){if(b){if(b instanceof p)return b;{const T=new f(b);return T._formatted=b.external,T._fsPath=b._sep===h?b.fsPath:null,T}}return b}}const h=i?1:void 0;class f extends p{constructor(){super(...arguments);On(this,"_formatted",null);On(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=m(this)),this._fsPath}toString(T=!1){return T?g(this,!0):(this._formatted||(this._formatted=g(this,!1)),this._formatted)}toJSON(){const T={$mid:1};return this._fsPath&&(T.fsPath=this._fsPath,T._sep=h),this._formatted&&(T.external=this._formatted),this.path&&(T.path=this.path),this.scheme&&(T.scheme=this.scheme),this.authority&&(T.authority=this.authority),this.query&&(T.query=this.query),this.fragment&&(T.fragment=this.fragment),T}}const y={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function $(P,b,T){let S,I=-1;for(let E=0;E<P.length;E++){const N=P.charCodeAt(E);if(N>=97&&N<=122||N>=65&&N<=90||N>=48&&N<=57||N===45||N===46||N===95||N===126||b&&N===47||T&&N===91||T&&N===93||T&&N===58)I!==-1&&(S+=encodeURIComponent(P.substring(I,E)),I=-1),S!==void 0&&(S+=P.charAt(E));else{S===void 0&&(S=P.substr(0,E));const Fe=y[N];Fe!==void 0?(I!==-1&&(S+=encodeURIComponent(P.substring(I,E)),I=-1),S+=Fe):I===-1&&(I=E)}}return I!==-1&&(S+=encodeURIComponent(P.substring(I))),S!==void 0?S:P}function v(P){let b;for(let T=0;T<P.length;T++){const S=P.charCodeAt(T);S===35||S===63?(b===void 0&&(b=P.substr(0,T)),b+=y[S]):b!==void 0&&(b+=P[T])}return b!==void 0?b:P}function m(P,b){let T;return T=P.authority&&P.path.length>1&&P.scheme==="file"?`//${P.authority}${P.path}`:P.path.charCodeAt(0)===47&&(P.path.charCodeAt(1)>=65&&P.path.charCodeAt(1)<=90||P.path.charCodeAt(1)>=97&&P.path.charCodeAt(1)<=122)&&P.path.charCodeAt(2)===58?P.path[1].toLowerCase()+P.path.substr(2):P.path,i&&(T=T.replace(/\//g,"\\")),T}function g(P,b){const T=b?v:$;let S="",{scheme:I,authority:E,path:N,query:Fe,fragment:x}=P;if(I&&(S+=I,S+=":"),(E||I==="file")&&(S+=u,S+=u),E){let C=E.indexOf("@");if(C!==-1){const te=E.substr(0,C);E=E.substr(C+1),C=te.lastIndexOf(":"),C===-1?S+=T(te,!1,!1):(S+=T(te.substr(0,C),!1,!1),S+=":",S+=T(te.substr(C+1),!1,!0)),S+="@"}E=E.toLowerCase(),C=E.lastIndexOf(":"),C===-1?S+=T(E,!1,!0):(S+=T(E.substr(0,C),!1,!0),S+=E.substr(C))}if(N){if(N.length>=3&&N.charCodeAt(0)===47&&N.charCodeAt(2)===58){const C=N.charCodeAt(1);C>=65&&C<=90&&(N=`/${String.fromCharCode(C+32)}:${N.substr(3)}`)}else if(N.length>=2&&N.charCodeAt(1)===58){const C=N.charCodeAt(0);C>=65&&C<=90&&(N=`${String.fromCharCode(C+32)}:${N.substr(2)}`)}S+=T(N,!0,!1)}return Fe&&(S+="?",S+=T(Fe,!1,!1)),x&&(S+="#",S+=b?x:$(x,!1,!1)),S}function k(P){try{return decodeURIComponent(P)}catch{return P.length>3?P.substr(0,3)+k(P.substr(3)):P}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function G(P){return P.match(F)?P.replace(F,b=>k(b)):P}var X=n(470);const ye=X.posix||X,Re="/";var Te;(function(P){P.joinPath=function(b,...T){return b.with({path:ye.join(b.path,...T)})},P.resolvePath=function(b,...T){let S=b.path,I=!1;S[0]!==Re&&(S=Re+S,I=!0);let E=ye.resolve(S,...T);return I&&E[0]===Re&&!b.authority&&(E=E.substring(1)),b.with({path:E})},P.dirname=function(b){if(b.path.length===0||b.path===Re)return b;let T=ye.dirname(b.path);return T.length===1&&T.charCodeAt(0)===46&&(T=""),b.with({path:T})},P.basename=function(b){return ye.basename(b.path)},P.extname=function(b){return ye.extname(b.path)}})(Te||(Te={}))})(),rT=r})();const{URI:it,Utils:pi}=rT;var pe;(function(t){t.basename=pi.basename,t.dirname=pi.dirname,t.extname=pi.extname,t.joinPath=pi.joinPath,t.resolvePath=pi.resolvePath;const e=typeof process=="object"&&(process==null?void 0:process.platform)==="win32";function n(s,a){return(s==null?void 0:s.toString())===(a==null?void 0:a.toString())}t.equals=n;function r(s,a){const o=typeof s=="string"?it.parse(s).path:s.path,l=typeof a=="string"?it.parse(a).path:a.path,c=o.split("/").filter(f=>f.length>0),u=l.split("/").filter(f=>f.length>0);if(e){const f=/^[A-Z]:$/;if(c[0]&&f.test(c[0])&&(c[0]=c[0].toLowerCase()),u[0]&&f.test(u[0])&&(u[0]=u[0].toLowerCase()),c[0]!==u[0])return l.substring(1)}let d=0;for(;d<c.length&&c[d]===u[d];d++);const p="../".repeat(c.length-d),h=u.slice(d).join("/");return p+h}t.relative=r;function i(s){return it.parse(s.toString()).toString()}t.normalize=i})(pe||(pe={}));var B;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(B||(B={}));class c0{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,n=le.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,n)}fromTextDocument(e,n,r){return n=n??it.parse(e.uri),le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromString(e,n,r){return le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromModel(e,n){return this.create(n,{$model:e})}create(e,n,r){if(typeof n=="string"){const i=this.parse(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else if("$model"in n){const i={value:n.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}async createAsync(e,n,r){if(typeof n=="string"){const i=await this.parseAsync(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else{const i=await this.parseAsync(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}createLangiumDocument(e,n,r,i){let s;if(r)s={parseResult:e,uri:n,state:B.Parsed,references:[],textDocument:r};else{const a=this.createTextDocumentGetter(n,i);s={parseResult:e,uri:n,state:B.Parsed,references:[],get textDocument(){return a()}}}return e.value.$document=s,s}async update(e,n){var r,i;const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText,a=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),o=a?a.getText():await this.fileSystemProvider.readFile(e.uri);if(a)Object.defineProperty(e,"textDocument",{value:a});else{const l=this.createTextDocumentGetter(e.uri,o);Object.defineProperty(e,"textDocument",{get:l})}return s!==o&&(e.parseResult=await this.parseAsync(e.uri,o,n),e.parseResult.value.$document=e),e.state=B.Parsed,e}parse(e,n,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n,r)}parseAsync(e,n,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n,r)}createTextDocumentGetter(e,n){const r=this.serviceRegistry;let i;return()=>i??(i=Gl.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,n??""))}}class u0{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return we(this.documentMap.values())}addDocument(e){const n=e.uri.toString();if(this.documentMap.has(n))throw new Error(`A document with the URI '${n}' is already present.`);this.documentMap.set(n,e)}getDocument(e){const n=e.toString();return this.documentMap.get(n)}async getOrCreateDocument(e,n){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,n),this.addDocument(r),r)}createDocument(e,n,r){if(r)return this.langiumDocumentFactory.fromString(n,e,r).then(i=>(this.addDocument(i),i));{const i=this.langiumDocumentFactory.fromString(n,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(this.serviceRegistry.getServices(e).references.Linker.unlink(r),r.state=B.Changed,r.precomputedScopes=void 0,r.diagnostics=void 0),r}deleteDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(r.state=B.Changed,this.documentMap.delete(n)),r}}const hu=Symbol("ref_resolving");class iT{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,n=le.None){for(const r of rr(e.parseResult.value))await rt(n),ov(r).forEach(i=>this.doLink(i,e))}doLink(e,n){var r;const i=e.reference;if(i._ref===void 0){i._ref=hu;try{const s=this.getCandidate(e);if(sl(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){const a=this.loadAstNode(s);i._ref=a??this.createLinkingError(e,s)}else i._ref=void 0}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const a=(r=s.message)!==null&&r!==void 0?r:String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${a}`})}n.references.push(i)}}unlink(e){for(const n of e.references)delete n._ref,delete n._nodeDescription;e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,n,r,i){const s=this,a={$refNode:r,$refText:i,get ref(){var o;if(Xe(this._ref))return this._ref;if(a$(this._nodeDescription)){const l=s.loadAstNode(this._nodeDescription);this._ref=l??s.createLinkingError({reference:a,container:e,property:n},this._nodeDescription)}else if(this._ref===void 0){this._ref=hu;const l=tr(e).$document,c=s.getLinkedNode({reference:a,container:e,property:n});if(c.error&&l&&l.state<B.ComputedScopes)return this._ref=void 0;this._ref=(o=c.node)!==null&&o!==void 0?o:c.error,this._nodeDescription=c.descr,l==null||l.references.push(this)}else if(this._ref===hu)throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);return Xe(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return sl(this._ref)?this._ref:void 0}};return a}getLinkedNode(e){var n;try{const r=this.getCandidate(e);if(sl(r))return{error:r};const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=(n=r.message)!==null&&n!==void 0?n:String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}}loadAstNode(e){if(e.node)return e.node;const n=this.langiumDocuments().getDocument(e.documentUri);if(n)return this.astNodeLocator.getAstNode(n.parseResult.value,e.path)}createLinkingError(e,n){const r=tr(e.container).$document;r&&r.state<B.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:n})}}function sT(t){return typeof t.name=="string"}class d0{getName(e){if(sT(e))return e.name}getNameNode(e){return dh(e.$cstNode,"name")}}class f0{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){const n=K$(e),r=e.astNode;if(n&&r){const i=r[n.feature];if(Jt(i))return i.ref;if(Array.isArray(i)){for(const s of i)if(Jt(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end)return s.ref}}if(r){const i=this.nameProvider.getNameNode(r);if(i&&(i===e||u$(e,i)))return r}}}findDeclarationNode(e){const n=this.findDeclaration(e);if(n!=null&&n.$cstNode){const r=this.nameProvider.getNameNode(n);return r??n.$cstNode}}findReferences(e,n){const r=[];if(n.includeDeclaration){const s=this.getReferenceToSelf(e);s&&r.push(s)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return n.documentUri&&(i=i.filter(s=>pe.equals(s.sourceUri,n.documentUri))),r.push(...i),we(r)}getReferenceToSelf(e){const n=this.nameProvider.getNameNode(e);if(n){const r=tn(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:Tl(n),local:!0}}}}class Wl{constructor(e){if(this.map=new Map,e)for(const[n,r]of e)this.add(n,r)}get size(){return $f.sum(we(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,n){if(n===void 0)return this.map.delete(e);{const r=this.map.get(e);if(r){const i=r.indexOf(n);if(i>=0)return r.length===1?this.map.delete(e):r.splice(i,1),!0}return!1}}get(e){var n;return(n=this.map.get(e))!==null&&n!==void 0?n:[]}has(e,n){if(n===void 0)return this.map.has(e);{const r=this.map.get(e);return r?r.indexOf(n)>=0:!1}}add(e,n){return this.map.has(e)?this.map.get(e).push(n):this.map.set(e,[n]),this}addAll(e,n){return this.map.has(e)?this.map.get(e).push(...n):this.map.set(e,Array.from(n)),this}forEach(e){this.map.forEach((n,r)=>n.forEach(i=>e(i,r,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return we(this.map.entries()).flatMap(([e,n])=>n.map(r=>[e,r]))}keys(){return we(this.map.keys())}values(){return we(this.map.values()).flat()}entriesGroupedByKey(){return we(this.map.entries())}}class yg{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(const[n,r]of e)this.set(n,r)}clear(){this.map.clear(),this.inverse.clear()}set(e,n){return this.map.set(e,n),this.inverse.set(n,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const n=this.map.get(e);return n!==void 0?(this.map.delete(e),this.inverse.delete(n),!0):!1}}class p0{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,n=le.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,n)}async computeExportsForNode(e,n,r=ic,i=le.None){const s=[];this.exportNode(e,s,n);for(const a of r(e))await rt(i),this.exportNode(a,s,n);return s}exportNode(e,n,r){const i=this.nameProvider.getName(e);i&&n.push(this.descriptions.createDescription(e,i,r))}async computeLocalScopes(e,n=le.None){const r=e.parseResult.value,i=new Wl;for(const s of Qt(r))await rt(n),this.processNode(s,e,i);return i}processNode(e,n,r){const i=e.$container;if(i){const s=this.nameProvider.getName(e);s&&r.add(i,this.descriptions.createDescription(e,s,n))}}}class _g{constructor(e,n,r){var i;this.elements=e,this.outerScope=n,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const n=this.caseInsensitive?this.elements.find(r=>r.name.toLowerCase()===e.toLowerCase()):this.elements.find(r=>r.name===e);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}}class h0{constructor(e,n,r){var i;this.elements=new Map,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1;for(const s of e){const a=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(a,s)}this.outerScope=n}getElement(e){const n=this.caseInsensitive?e.toLowerCase():e,r=this.elements.get(n);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=we(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}}class aT{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}}class m0 extends aT{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,n){this.throwIfDisposed(),this.cache.set(e,n)}get(e,n){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(n){const r=n();return this.cache.set(e,r),r}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}}class g0 extends aT{constructor(e){super(),this.cache=new Map,this.converter=e??(n=>n)}has(e,n){return this.throwIfDisposed(),this.cacheForContext(e).has(n)}set(e,n,r){this.throwIfDisposed(),this.cacheForContext(e).set(n,r)}get(e,n,r){this.throwIfDisposed();const i=this.cacheForContext(e);if(i.has(n))return i.get(n);if(r){const s=r();return i.set(n,s),s}else return}delete(e,n){return this.throwIfDisposed(),this.cacheForContext(e).delete(n)}clear(e){if(this.throwIfDisposed(),e){const n=this.converter(e);this.cache.delete(n)}else this.cache.clear()}cacheForContext(e){const n=this.converter(e);let r=this.cache.get(n);return r||(r=new Map,this.cache.set(n,r)),r}}class y0 extends m0{constructor(e,n){super(),n?(this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n,()=>{this.clear()})),this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{i.length>0&&this.clear()}))):this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}}class oT{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new y0(e.shared)}getScope(e){const n=[],r=this.reflection.getReferenceType(e),i=tn(e.container).precomputedScopes;if(i){let a=e.container;do{const o=i.get(a);o.length>0&&n.push(we(o).filter(l=>this.reflection.isSubtype(l.type,r))),a=a.$container}while(a)}let s=this.getGlobalScope(r,e);for(let a=n.length-1;a>=0;a--)s=this.createScope(n[a],s);return s}createScope(e,n,r){return new _g(we(e),n,r)}createScopeForNodes(e,n,r){const i=we(e).map(s=>{const a=this.nameProvider.getName(s);if(a)return this.descriptions.createDescription(s,a)}).nonNullable();return new _g(i,n,r)}getGlobalScope(e,n){return this.globalScopeCache.get(e,()=>new h0(this.indexManager.allElements(e)))}}function lT(t){return typeof t.$comment=="string"}function vg(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}class _0{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,n){const r=n??{},i=n==null?void 0:n.replacer,s=(o,l)=>this.replacer(o,l,r),a=i?(o,l)=>i(o,l,s):s;try{return this.currentDocument=tn(e),JSON.stringify(e,a,n==null?void 0:n.space)}finally{this.currentDocument=void 0}}deserialize(e,n){const r=n??{},i=JSON.parse(e);return this.linkNode(i,i,r),i}replacer(e,n,{refText:r,sourceText:i,textRegions:s,comments:a,uriConverter:o}){var l,c,u,d;if(!this.ignoreProperties.has(e))if(Jt(n)){const p=n.ref,h=r?n.$refText:void 0;if(p){const f=tn(p);let y="";this.currentDocument&&this.currentDocument!==f&&(o?y=o(f.uri,n):y=f.uri.toString());const $=this.astNodeLocator.getAstNodePath(p);return{$ref:`${y}#${$}`,$refText:h}}else return{$error:(c=(l=n.error)===null||l===void 0?void 0:l.message)!==null&&c!==void 0?c:"Could not resolve reference",$refText:h}}else if(Xe(n)){let p;if(s&&(p=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},n)),(!e||n.$document)&&(p!=null&&p.$textRegion)&&(p.$textRegion.documentURI=(u=this.currentDocument)===null||u===void 0?void 0:u.uri.toString())),i&&!e&&(p??(p=Object.assign({},n)),p.$sourceText=(d=n.$cstNode)===null||d===void 0?void 0:d.text),a){p??(p=Object.assign({},n));const h=this.commentProvider.getComment(n);h&&(p.$comment=h.replace(/\r/g,""))}return p??n}else return n}addAstNodeRegionWithAssignmentsTo(e){const n=r=>({offset:r.offset,end:r.end,length:r.length,range:r.range});if(e.$cstNode){const r=e.$textRegion=n(e.$cstNode),i=r.assignments={};return Object.keys(e).filter(s=>!s.startsWith("$")).forEach(s=>{const a=mv(e.$cstNode,s).map(n);a.length!==0&&(i[s]=a)}),e}}linkNode(e,n,r,i,s,a){for(const[l,c]of Object.entries(e))if(Array.isArray(c))for(let u=0;u<c.length;u++){const d=c[u];vg(d)?c[u]=this.reviveReference(e,l,n,d,r):Xe(d)&&this.linkNode(d,n,r,e,l,u)}else vg(c)?e[l]=this.reviveReference(e,l,n,c,r):Xe(c)&&this.linkNode(c,n,r,e,l);const o=e;o.$container=i,o.$containerProperty=s,o.$containerIndex=a}reviveReference(e,n,r,i,s){let a=i.$refText,o=i.$error;if(i.$ref){const l=this.getRefNode(r,i.$ref,s.uriConverter);if(Xe(l))return a||(a=this.nameProvider.getName(l)),{$refText:a??"",ref:l};o=l}if(o){const l={$refText:a??""};return l.error={container:e,property:n,message:o,reference:l},l}else return}getRefNode(e,n,r){try{const i=n.indexOf("#");if(i===0){const l=this.astNodeLocator.getAstNode(e,n.substring(1));return l||"Could not resolve path: "+n}if(i<0){const l=r?r(n):it.parse(n),c=this.langiumDocuments.getDocument(l);return c?c.parseResult.value:"Could not find document for URI: "+n}const s=r?r(n.substring(0,i)):it.parse(n.substring(0,i)),a=this.langiumDocuments.getDocument(s);if(!a)return"Could not find document for URI: "+n;if(i===n.length-1)return a.parseResult.value;const o=this.astNodeLocator.getAstNode(a.parseResult.value,n.substring(i+1));return o||"Could not resolve URI: "+n}catch(i){return String(i)}}}class v0{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.fileNameMap=new Map,this.textDocuments=e==null?void 0:e.workspace.TextDocuments}register(e){const n=e.LanguageMetaData;for(const r of n.fileExtensions)this.fileExtensionMap.has(r)&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileExtensionMap.set(r,e);if(n.fileNames)for(const r of n.fileNames)this.fileNameMap.has(r)&&console.warn(`The file name ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileNameMap.set(r,e);this.languageIdMap.set(n.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var n,r,i;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");const s=(r=(n=this.textDocuments)===null||n===void 0?void 0:n.get(e))===null||r===void 0?void 0:r.languageId;if(s!==void 0){const c=this.languageIdMap.get(s);if(c)return c}const a=pe.extname(e),o=pe.basename(e),l=(i=this.fileNameMap.get(o))!==null&&i!==void 0?i:this.fileExtensionMap.get(a);if(!l)throw s?new Error(`The service registry contains no services for the extension '${a}' for language '${s}'.`):new Error(`The service registry contains no services for the extension '${a}'.`);return l}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}}function fs(t){return{code:t}}var zl;(function(t){t.all=["fast","slow","built-in"]})(zl||(zl={}));class R0{constructor(e){this.entries=new Wl,this.entriesBefore=[],this.entriesAfter=[],this.reflection=e.shared.AstReflection}register(e,n=this,r="fast"){if(r==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(const[i,s]of Object.entries(e)){const a=s;if(Array.isArray(a))for(const o of a){const l={check:this.wrapValidationException(o,n),category:r};this.addEntry(i,l)}else if(typeof a=="function"){const o={check:this.wrapValidationException(a,n),category:r};this.addEntry(i,o)}else Ds()}}wrapValidationException(e,n){return async(r,i,s)=>{await this.handleException(()=>e.call(n,r,i,s),"An error occurred during validation",i,r)}}async handleException(e,n,r,i){try{await e()}catch(s){if(Ys(s))throw s;console.error(`${n}:`,s),s instanceof Error&&s.stack&&console.error(s.stack);const a=s instanceof Error?s.message:String(s);r("error",`${n}: ${a}`,{node:i})}}addEntry(e,n){if(e==="AstNode"){this.entries.add("AstNode",n);return}for(const r of this.reflection.getAllSubTypes(e))this.entries.add(r,n)}getChecks(e,n){let r=we(this.entries.get(e)).concat(this.entries.get("AstNode"));return n&&(r=r.filter(i=>n.includes(i.category))),r.map(i=>i.check)}registerBeforeDocument(e,n=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",n))}registerAfterDocument(e,n=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",n))}wrapPreparationException(e,n,r){return async(i,s,a,o)=>{await this.handleException(()=>e.call(r,i,s,a,o),n,s,i)}}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class cT{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,n={},r=le.None){const i=e.parseResult,s=[];if(await rt(r),(!n.categories||n.categories.includes("built-in"))&&(this.processLexingErrors(i,s,n),n.stopAfterLexingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Lt.LexingError})||(this.processParsingErrors(i,s,n),n.stopAfterParsingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Lt.ParsingError}))||(this.processLinkingErrors(e,s,n),n.stopAfterLinkingErrors&&s.some(a=>{var o;return((o=a.data)===null||o===void 0?void 0:o.code)===Lt.LinkingError}))))return s;try{s.push(...await this.validateAst(i.value,n,r))}catch(a){if(Ys(a))throw a;console.error("An error occurred during validation:",a)}return await rt(r),s}processLexingErrors(e,n,r){var i,s,a;const o=[...e.lexerErrors,...(s=(i=e.lexerReport)===null||i===void 0?void 0:i.diagnostics)!==null&&s!==void 0?s:[]];for(const l of o){const c=(a=l.severity)!==null&&a!==void 0?a:"error",u={severity:mu(c),range:{start:{line:l.line-1,character:l.column-1},end:{line:l.line-1,character:l.column+l.length-1}},message:l.message,data:$0(c),source:this.getSource()};n.push(u)}}processParsingErrors(e,n,r){for(const i of e.parserErrors){let s;if(isNaN(i.token.startOffset)){if("previousToken"in i){const a=i.previousToken;if(isNaN(a.startOffset)){const o={line:0,character:0};s={start:o,end:o}}else{const o={line:a.endLine-1,character:a.endColumn};s={start:o,end:o}}}}else s=kf(i.token);if(s){const a={severity:mu("error"),range:s,message:i.message,data:fs(Lt.ParsingError),source:this.getSource()};n.push(a)}}}processLinkingErrors(e,n,r){for(const i of e.references){const s=i.error;if(s){const a={node:s.container,property:s.property,index:s.index,data:{code:Lt.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};n.push(this.toDiagnostic("error",s.message,a))}}}async validateAst(e,n,r=le.None){const i=[],s=(a,o,l)=>{i.push(this.toDiagnostic(a,o,l))};return await this.validateAstBefore(e,n,s,r),await this.validateAstNodes(e,n,s,r),await this.validateAstAfter(e,n,s,r),i}async validateAstBefore(e,n,r,i=le.None){var s;const a=this.validationRegistry.checksBefore;for(const o of a)await rt(i),await o(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}async validateAstNodes(e,n,r,i=le.None){await Promise.all(rr(e).map(async s=>{await rt(i);const a=this.validationRegistry.getChecks(s.$type,n.categories);for(const o of a)await o(s,r,i)}))}async validateAstAfter(e,n,r,i=le.None){var s;const a=this.validationRegistry.checksAfter;for(const o of a)await rt(i),await o(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}toDiagnostic(e,n,r){return{message:n,range:T0(r),severity:mu(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function T0(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=dh(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=gv(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function mu(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}function $0(t){switch(t){case"error":return fs(Lt.LexingError);case"warning":return fs(Lt.LexingWarning);case"info":return fs(Lt.LexingInfo);case"hint":return fs(Lt.LexingHint);default:throw new Error("Invalid diagnostic severity: "+t)}}var Lt;(function(t){t.LexingError="lexing-error",t.LexingWarning="lexing-warning",t.LexingInfo="lexing-info",t.LexingHint="lexing-hint",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(Lt||(Lt={}));class k0{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,n,r){const i=r??tn(e);n??(n=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if(!n)throw new Error(`Node at path ${s} has no name.`);let a;const o=()=>{var l;return a??(a=Tl((l=this.nameProvider.getNameNode(e))!==null&&l!==void 0?l:e.$cstNode))};return{node:e,name:n,get nameSegment(){return o()},selectionSegment:Tl(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class w0{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,n=le.None){const r=[],i=e.parseResult.value;for(const s of rr(i))await rt(n),ov(s).filter(a=>!sl(a)).forEach(a=>{const o=this.createDescription(a);o&&r.push(o)});return r}createDescription(e){const n=e.reference.$nodeDescription,r=e.reference.$refNode;if(!n||!r)return;const i=tn(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:n.documentUri,targetPath:n.path,segment:Tl(r),local:pe.equals(n.documentUri,i)}}}class b0{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){const n=this.getAstNodePath(e.$container),r=this.getPathSegment(e);return n+this.segmentSeparator+r}return""}getPathSegment({$containerProperty:e,$containerIndex:n}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return n!==void 0?e+this.indexSeparator+n:e}getAstNode(e,n){return n.split(this.segmentSeparator).reduce((i,s)=>{if(!i||s.length===0)return i;const a=s.indexOf(this.indexSeparator);if(a>0){const o=s.substring(0,a),l=parseInt(s.substring(a+1)),c=i[o];return c==null?void 0:c[l]}return i[s]},e)}}class S0{constructor(e){this._ready=new Gh,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new eT,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var n,r;this.workspaceConfig=(r=(n=e.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&r!==void 0?r:!1}async initialized(e){if(this.workspaceConfig){if(e.register){const n=this.serviceRegistry.all;e.register({section:n.map(r=>this.toSectionName(r.LanguageMetaData.languageId))})}if(e.fetchConfiguration){const n=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),r=await e.fetchConfiguration(n);n.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(n=>{const r=e.settings[n];this.updateSectionConfiguration(n,r),this.onConfigurationSectionUpdateEmitter.fire({section:n,configuration:r})})}updateSectionConfiguration(e,n){this.settings[e]=n}async getConfiguration(e,n){await this.ready;const r=this.toSectionName(e);if(this.settings[r])return this.settings[r][n]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var ys;(function(t){function e(n){return{dispose:async()=>await n()}}t.create=e})(ys||(ys={}));class C0{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Wl,this.documentPhaseListeners=new Wl,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=B.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,n={},r=le.None){var i,s;for(const a of e){const o=a.uri.toString();if(a.state===B.Validated){if(typeof n.validation=="boolean"&&n.validation)a.state=B.IndexedReferences,a.diagnostics=void 0,this.buildState.delete(o);else if(typeof n.validation=="object"){const l=this.buildState.get(o),c=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(c){const d=((s=n.validation.categories)!==null&&s!==void 0?s:zl.all).filter(p=>!c.includes(p));d.length>0&&(this.buildState.set(o,{completed:!1,options:{validation:Object.assign(Object.assign({},n.validation),{categories:d})},result:l.result}),a.state=B.IndexedReferences)}}}else this.buildState.delete(o)}this.currentState=B.Changed,await this.emitUpdate(e.map(a=>a.uri),[]),await this.buildDocuments(e,n,r)}async update(e,n,r=le.None){this.currentState=B.Changed;for(const a of n)this.langiumDocuments.deleteDocument(a),this.buildState.delete(a.toString()),this.indexManager.remove(a);for(const a of e){if(!this.langiumDocuments.invalidateDocument(a)){const l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},a);l.state=B.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(a.toString())}const i=we(e).concat(n).map(a=>a.toString()).toSet();this.langiumDocuments.all.filter(a=>!i.has(a.uri.toString())&&this.shouldRelink(a,i)).forEach(a=>{this.serviceRegistry.getServices(a.uri).references.Linker.unlink(a),a.state=Math.min(a.state,B.ComputedScopes),a.diagnostics=void 0}),await this.emitUpdate(e,n),await rt(r);const s=this.sortDocuments(this.langiumDocuments.all.filter(a=>{var o;return a.state<B.Linked||!(!((o=this.buildState.get(a.uri.toString()))===null||o===void 0)&&o.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)}async emitUpdate(e,n){await Promise.all(this.updateListeners.map(r=>r(e,n)))}sortDocuments(e){let n=0,r=e.length-1;for(;n<r;){for(;n<e.length&&this.hasTextDocument(e[n]);)n++;for(;r>=0&&!this.hasTextDocument(e[r]);)r--;n<r&&([e[n],e[r]]=[e[r],e[n]])}return e}hasTextDocument(e){var n;return!!(!((n=this.textDocuments)===null||n===void 0)&&n.get(e.uri))}shouldRelink(e,n){return e.references.some(r=>r.error!==void 0)?!0:this.indexManager.isAffected(e,n)}onUpdate(e){return this.updateListeners.push(e),ys.create(()=>{const n=this.updateListeners.indexOf(e);n>=0&&this.updateListeners.splice(n,1)})}async buildDocuments(e,n,r){this.prepareBuild(e,n),await this.runCancelable(e,B.Parsed,r,a=>this.langiumDocumentFactory.update(a,r)),await this.runCancelable(e,B.IndexedContent,r,a=>this.indexManager.updateContent(a,r)),await this.runCancelable(e,B.ComputedScopes,r,async a=>{const o=this.serviceRegistry.getServices(a.uri).references.ScopeComputation;a.precomputedScopes=await o.computeLocalScopes(a,r)});const i=e.filter(a=>this.shouldLink(a));await this.runCancelable(i,B.Linked,r,a=>this.serviceRegistry.getServices(a.uri).references.Linker.link(a,r)),await this.runCancelable(i,B.IndexedReferences,r,a=>this.indexManager.updateReferences(a,r));const s=e.filter(a=>this.shouldValidate(a));await this.runCancelable(s,B.Validated,r,a=>this.validate(a,r));for(const a of e){const o=this.buildState.get(a.uri.toString());o&&(o.completed=!0)}}prepareBuild(e,n){for(const r of e){const i=r.uri.toString(),s=this.buildState.get(i);(!s||s.completed)&&this.buildState.set(i,{completed:!1,options:n,result:s==null?void 0:s.result})}}async runCancelable(e,n,r,i){const s=e.filter(o=>o.state<n);for(const o of s)await rt(r),await i(o),o.state=n,await this.notifyDocumentPhase(o,n,r);const a=e.filter(o=>o.state===n);await this.notifyBuildPhase(a,n,r),this.currentState=n}onBuildPhase(e,n){return this.buildPhaseListeners.add(e,n),ys.create(()=>{this.buildPhaseListeners.delete(e,n)})}onDocumentPhase(e,n){return this.documentPhaseListeners.add(e,n),ys.create(()=>{this.documentPhaseListeners.delete(e,n)})}waitUntil(e,n,r){let i;if(n&&"path"in n?i=n:r=n,r??(r=le.None),i){const s=this.langiumDocuments.getDocument(i);if(s&&s.state>=e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):r.isCancellationRequested?Promise.reject(ql):new Promise((s,a)=>{const o=this.onBuildPhase(e,()=>{if(o.dispose(),l.dispose(),i){const c=this.langiumDocuments.getDocument(i);s(c==null?void 0:c.uri)}else s(void 0)}),l=r.onCancellationRequested(()=>{o.dispose(),l.dispose(),a(ql)})})}async notifyDocumentPhase(e,n,r){const s=this.documentPhaseListeners.get(n).slice();for(const a of s)try{await a(e,r)}catch(o){if(!Ys(o))throw o}}async notifyBuildPhase(e,n,r){if(e.length===0)return;const s=this.buildPhaseListeners.get(n).slice();for(const a of s)await rt(r),await a(e,r)}shouldLink(e){var n;return(n=this.getBuildOptions(e).eagerLinking)!==null&&n!==void 0?n:!0}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,n){var r,i;const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,a=this.getBuildOptions(e).validation,o=typeof a=="object"?a:void 0,l=await s.validateDocument(e,o,n);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;const c=this.buildState.get(e.uri.toString());if(c){(r=c.result)!==null&&r!==void 0||(c.result={});const u=(i=o==null?void 0:o.categories)!==null&&i!==void 0?i:zl.all;c.result.validationChecks?c.result.validationChecks.push(...u):c.result.validationChecks=[...u]}}getBuildOptions(e){var n,r;return(r=(n=this.buildState.get(e.uri.toString()))===null||n===void 0?void 0:n.options)!==null&&r!==void 0?r:{}}}class A0{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new g0,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,n){const r=tn(e).uri,i=[];return this.referenceIndex.forEach(s=>{s.forEach(a=>{pe.equals(a.targetUri,r)&&a.targetPath===n&&i.push(a)})}),we(i)}allElements(e,n){let r=we(this.symbolIndex.keys());return n&&(r=r.filter(i=>!n||n.has(i))),r.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,n){var r;return n?this.symbolByTypeIndex.get(e,n,()=>{var s;return((s=this.symbolIndex.get(e))!==null&&s!==void 0?s:[]).filter(o=>this.astReflection.isSubtype(o.type,n))}):(r=this.symbolIndex.get(e))!==null&&r!==void 0?r:[]}remove(e){const n=e.toString();this.symbolIndex.delete(n),this.symbolByTypeIndex.clear(n),this.referenceIndex.delete(n)}async updateContent(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,n),s=e.uri.toString();this.symbolIndex.set(s,i),this.symbolByTypeIndex.clear(s)}async updateReferences(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,n);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,n){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i=>!i.local&&n.has(i.targetUri.toString())):!1}}class E0{constructor(e){this.initialBuildOptions={},this._ready=new Gh,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){var n;this.folders=(n=e.workspaceFolders)!==null&&n!==void 0?n:void 0}initialized(e){return this.mutex.write(n=>{var r;return this.initializeWorkspace((r=this.folders)!==null&&r!==void 0?r:[],n)})}async initializeWorkspace(e,n=le.None){const r=await this.performStartup(e);await rt(n),await this.documentBuilder.build(r,this.initialBuildOptions,n)}async performStartup(e){const n=this.serviceRegistry.all.flatMap(a=>a.LanguageMetaData.fileExtensions),r=this.serviceRegistry.all.flatMap(a=>{var o;return(o=a.LanguageMetaData.fileNames)!==null&&o!==void 0?o:[]}),i=[],s=a=>{i.push(a),this.langiumDocuments.hasDocument(a.uri)||this.langiumDocuments.addDocument(a)};return await this.loadAdditionalDocuments(e,s),await Promise.all(e.map(a=>[a,this.getRootFolder(a)]).map(async a=>this.traverseFolder(...a,{fileExtensions:n,fileNames:r},s))),this._ready.resolve(),i}loadAdditionalDocuments(e,n){return Promise.resolve()}getRootFolder(e){return it.parse(e.uri)}async traverseFolder(e,n,r,i){const s=await this.fileSystemProvider.readDirectory(n);await Promise.all(s.map(async a=>{if(this.includeEntry(e,a,r)){if(a.isDirectory)await this.traverseFolder(e,a.uri,r,i);else if(a.isFile){const o=await this.langiumDocuments.getOrCreateDocument(a.uri);i(o)}}}))}includeEntry(e,n,r){const i=pe.basename(n.uri);return i.startsWith(".")?!1:n.isDirectory?i!=="node_modules"&&i!=="out":n.isFile?r.fileExtensions.includes(pe.extname(n.uri))||r.fileNames.includes(pe.basename(n.uri)):!1}}class P0{buildUnexpectedCharactersMessage(e,n,r,i,s){return Df.buildUnexpectedCharactersMessage(e,n,r,i,s)}buildUnableToPopLexerModeMessage(e){return Df.buildUnableToPopLexerModeMessage(e)}}const N0={mode:"full"};class I0{constructor(e){this.errorMessageProvider=e.parser.LexerErrorMessageProvider,this.tokenBuilder=e.parser.TokenBuilder;const n=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(n);const r=Rg(n)?Object.values(n):n,i=e.LanguageMetaData.mode==="production";this.chevrotainLexer=new dt(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})}get definition(){return this.tokenTypes}tokenize(e,n=N0){var r,i,s;const a=this.chevrotainLexer.tokenize(e);return{tokens:a.tokens,errors:a.errors,hidden:(r=a.groups.hidden)!==null&&r!==void 0?r:[],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)}}toTokenTypeDictionary(e){if(Rg(e))return e;const n=uT(e)?Object.values(e.modes).flat():e,r={};return n.forEach(i=>r[i.name]=i),r}}function O0(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function uT(t){return t&&"modes"in t&&"defaultMode"in t}function Rg(t){return!O0(t)&&!uT(t)}function dT(t,e,n){let r,i;typeof t=="string"?(i=e,r=n):(i=t.range.start,r=e),i||(i=re.create(0,0));const s=pT(t),a=Wh(r),o=x0({lines:s,position:i,options:a});return H0({index:0,tokens:o,position:i})}function fT(t,e){const n=Wh(e),r=pT(t);if(r.length===0)return!1;const i=r[0],s=r[r.length-1],a=n.start,o=n.end;return!!(a!=null&&a.exec(i))&&!!(o!=null&&o.exec(s))}function pT(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(O$)}const Tg=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,D0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function x0(t){var e,n,r;const i=[];let s=t.position.line,a=t.position.character;for(let o=0;o<t.lines.length;o++){const l=o===0,c=o===t.lines.length-1;let u=t.lines[o],d=0;if(l&&t.options.start){const h=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);h&&(d=h.index+h[0].length)}else{const h=(n=t.options.line)===null||n===void 0?void 0:n.exec(u);h&&(d=h.index+h[0].length)}if(c){const h=(r=t.options.end)===null||r===void 0?void 0:r.exec(u);h&&(u=u.substring(0,h.index))}if(u=u.substring(0,U0(u)),Yp(u,d)>=u.length){if(i.length>0){const h=re.create(s,a);i.push({type:"break",content:"",range:Q.create(h,h)})}}else{Tg.lastIndex=d;const h=Tg.exec(u);if(h){const f=h[0],y=h[1],$=re.create(s,a+d),v=re.create(s,a+d+f.length);i.push({type:"tag",content:y,range:Q.create($,v)}),d+=f.length,d=Yp(u,d)}if(d<u.length){const f=u.substring(d),y=Array.from(f.matchAll(D0));i.push(...M0(y,f,s,a+d))}}s++,a=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function M0(t,e,n,r){const i=[];if(t.length===0){const s=re.create(n,r),a=re.create(n,r+e.length);i.push({type:"text",content:e,range:Q.create(s,a)})}else{let s=0;for(const o of t){const l=o.index,c=e.substring(s,l);c.length>0&&i.push({type:"text",content:e.substring(s,l),range:Q.create(re.create(n,s+r),re.create(n,l+r))});let u=c.length+1;const d=o[1];if(i.push({type:"inline-tag",content:d,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+d.length+r))}),u+=d.length,o.length===4){u+=o[2].length;const p=o[3];i.push({type:"text",content:p,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+p.length+r))})}else i.push({type:"text",content:"",range:Q.create(re.create(n,s+u+r),re.create(n,s+u+r))});s=l+o[0].length}const a=e.substring(s);a.length>0&&i.push({type:"text",content:a,range:Q.create(re.create(n,s+r),re.create(n,s+r+a.length))})}return i}const L0=/\S/,F0=/\s*$/;function Yp(t,e){const n=t.substring(e).match(L0);return n?e+n.index:t.length}function U0(t){const e=t.match(F0);if(e&&typeof e.index=="number")return e.index}function H0(t){var e,n,r,i;const s=re.create(t.position.line,t.position.character);if(t.tokens.length===0)return new $g([],Q.create(s,s));const a=[];for(;t.index<t.tokens.length;){const c=B0(t,a[a.length-1]);c&&a.push(c)}const o=(n=(e=a[0])===null||e===void 0?void 0:e.range.start)!==null&&n!==void 0?n:s,l=(i=(r=a[a.length-1])===null||r===void 0?void 0:r.range.end)!==null&&i!==void 0?i:s;return new $g(a,Q.create(o,l))}function B0(t,e){const n=t.tokens[t.index];if(n.type==="tag")return mT(t,!1);if(n.type==="text"||n.type==="inline-tag")return hT(t);j0(n,e),t.index++}function j0(t,e){if(e){const n=new yT("",t.range);"inlines"in e?e.inlines.push(n):e.content.inlines.push(n)}}function hT(t){let e=t.tokens[t.index];const n=e;let r=e;const i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(K0(t)),r=e,e=t.tokens[t.index];return new Xp(i,Q.create(n.range.start,r.range.end))}function K0(t){return t.tokens[t.index].type==="inline-tag"?mT(t,!0):gT(t)}function mT(t,e){const n=t.tokens[t.index++],r=n.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){const s=gT(t);return new yu(r,new Xp([s],s.range),e,Q.create(n.range.start,s.range.end))}else{const s=hT(t);return new yu(r,s,e,Q.create(n.range.start,s.range.end))}else{const s=n.range;return new yu(r,new Xp([],s),e,s)}}function gT(t){const e=t.tokens[t.index++];return new yT(e.content,e.range)}function Wh(t){if(!t)return Wh({start:"/**",end:"*/",line:"*"});const{start:e,end:n,line:r}=t;return{start:gu(e,!0),end:gu(n,!1),line:gu(r,!0)}}function gu(t,e){if(typeof t=="string"||typeof t=="object"){const n=typeof t=="string"?ac(t):t.source;return e?new RegExp(`^\\s*${n}`):new RegExp(`\\s*${n}\\s*$`)}else return t}class $g{constructor(e,n){this.elements=e,this.range=n}getTag(e){return this.getAllTags().find(n=>n.name===e)}getTags(e){return this.getAllTags().filter(n=>n.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(const n of this.elements)if(e.length===0)e=n.toString();else{const r=n.toString();e+=kg(e)+r}return e.trim()}toMarkdown(e){let n="";for(const r of this.elements)if(n.length===0)n=r.toMarkdown(e);else{const i=r.toMarkdown(e);n+=kg(n)+i}return n.trim()}}class yu{constructor(e,n,r,i){this.name=e,this.content=n,this.inline=r,this.range=i}toString(){let e=`@${this.name}`;const n=this.content.toString();return this.content.inlines.length===1?e=`${e} ${n}`:this.content.inlines.length>1&&(e=`${e}
${n}`),this.inline?`{${e}}`:e}toMarkdown(e){var n,r;return(r=(n=e==null?void 0:e.renderTag)===null||n===void 0?void 0:n.call(e,this))!==null&&r!==void 0?r:this.toMarkdownDefault(e)}toMarkdownDefault(e){const n=this.content.toMarkdown(e);if(this.inline){const s=q0(this.name,n,e??{});if(typeof s=="string")return s}let r="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?r="*":(e==null?void 0:e.tag)==="bold"?r="**":(e==null?void 0:e.tag)==="bold-italic"&&(r="***");let i=`${r}@${this.name}${r}`;return this.content.inlines.length===1?i=`${i} — ${n}`:this.content.inlines.length>1&&(i=`${i}
${n}`),this.inline?`{${i}}`:i}}function q0(t,e,n){var r,i;if(t==="linkplain"||t==="linkcode"||t==="link"){const s=e.indexOf(" ");let a=e;if(s>0){const l=Yp(e,s);a=e.substring(l),e=e.substring(0,s)}return(t==="linkcode"||t==="link"&&n.link==="code")&&(a=`\`${a}\``),(i=(r=n.renderLink)===null||r===void 0?void 0:r.call(n,e,a))!==null&&i!==void 0?i:G0(e,a)}}function G0(t,e){try{return it.parse(t,!0),`[${e}](${t})`}catch{return t}}class Xp{constructor(e,n){this.inlines=e,this.range=n}toString(){let e="";for(let n=0;n<this.inlines.length;n++){const r=this.inlines[n],i=this.inlines[n+1];e+=r.toString(),i&&i.range.start.line>r.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let n="";for(let r=0;r<this.inlines.length;r++){const i=this.inlines[r],s=this.inlines[r+1];n+=i.toMarkdown(e),s&&s.range.start.line>i.range.start.line&&(n+=`
`)}return n}}class yT{constructor(e,n){this.text=e,this.range=n}toString(){return this.text}toMarkdown(){return this.text}}function kg(t){return t.endsWith(`
`)?`
`:`

`}class W0{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){const n=this.commentProvider.getComment(e);if(n&&fT(n))return dT(n).toMarkdown({renderLink:(i,s)=>this.documentationLinkRenderer(e,i,s),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,n,r){var i;const s=(i=this.findNameInPrecomputedScopes(e,n))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,n);if(s&&s.nameSegment){const a=s.nameSegment.range.start.line+1,o=s.nameSegment.range.start.character+1,l=s.documentUri.with({fragment:`L${a},${o}`});return`[${r}](${l.toString()})`}else return}documentationTagRenderer(e,n){}findNameInPrecomputedScopes(e,n){const i=tn(e).precomputedScopes;if(!i)return;let s=e;do{const o=i.get(s).find(l=>l.name===n);if(o)return o;s=s.$container}while(s)}findNameInGlobalScope(e,n){return this.indexManager.allElements().find(i=>i.name===n)}}class z0{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var n;return lT(e)?e.$comment:(n=Z_(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||n===void 0?void 0:n.text}}class V0{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,n){return Promise.resolve(this.syncParser.parse(e))}}class Y0{constructor(){this.previousTokenSource=new qh,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();const n=o0();return this.previousTokenSource=n,this.enqueue(this.writeQueue,e,n.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,n,r=le.None){const i=new Gh,s={action:n,deferred:i,cancellationToken:r};return e.push(s),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;const e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:n,deferred:r,cancellationToken:i})=>{try{const s=await Promise.resolve().then(()=>n(i));r.resolve(s)}catch(s){Ys(s)?r.resolve(void 0):r.reject(s)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}}class X0{constructor(e){this.grammarElementIdMap=new yg,this.tokenTypeIdMap=new yg,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(n=>Object.assign(Object.assign({},n),{message:n.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}dehydrateLexerReport(e){return e}createDehyrationContext(e){const n=new Map,r=new Map;for(const i of rr(e))n.set(i,{});if(e.$cstNode)for(const i of Rl(e.$cstNode))r.set(i,{});return{astNodes:n,cstNodes:r}}dehydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(r.$cstNode=this.dehydrateCstNode(e.$cstNode,n));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const a=[];r[i]=a;for(const o of s)Xe(o)?a.push(this.dehydrateAstNode(o,n)):Jt(o)?a.push(this.dehydrateReference(o,n)):a.push(o)}else Xe(s)?r[i]=this.dehydrateAstNode(s,n):Jt(s)?r[i]=this.dehydrateReference(s,n):s!==void 0&&(r[i]=s);return r}dehydrateReference(e,n){const r={};return r.$refText=e.$refText,e.$refNode&&(r.$refNode=n.cstNodes.get(e.$refNode)),r}dehydrateCstNode(e,n){const r=n.cstNodes.get(e);return X_(e)?r.fullText=e.fullText:r.grammarSource=this.getGrammarElementId(e.grammarSource),r.hidden=e.hidden,r.astNode=n.astNodes.get(e.astNode),sr(e)?r.content=e.content.map(i=>this.dehydrateCstNode(i,n)):Os(e)&&(r.tokenType=e.tokenType.name,r.offset=e.offset,r.length=e.length,r.startLine=e.range.start.line,r.startColumn=e.range.start.character,r.endLine=e.range.end.line,r.endColumn=e.range.end.character),r}hydrate(e){const n=e.value,r=this.createHydrationContext(n);return"$cstNode"in n&&this.hydrateCstNode(n.$cstNode,r),{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(n,r)}}createHydrationContext(e){const n=new Map,r=new Map;for(const s of rr(e))n.set(s,{});let i;if(e.$cstNode)for(const s of Rl(e.$cstNode)){let a;"fullText"in s?(a=new qR(s.fullText),i=a):"content"in s?a=new jh:"tokenType"in s&&(a=this.hydrateCstLeafNode(s)),a&&(r.set(s,a),a.root=i)}return{astNodes:n,cstNodes:r}}hydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode&&(r.$cstNode=n.cstNodes.get(e.$cstNode));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const a=[];r[i]=a;for(const o of s)Xe(o)?a.push(this.setParent(this.hydrateAstNode(o,n),r)):Jt(o)?a.push(this.hydrateReference(o,r,i,n)):a.push(o)}else Xe(s)?r[i]=this.setParent(this.hydrateAstNode(s,n),r):Jt(s)?r[i]=this.hydrateReference(s,r,i,n):s!==void 0&&(r[i]=s);return r}setParent(e,n){return e.$container=n,e}hydrateReference(e,n,r,i){return this.linker.buildReference(n,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,n,r=0){const i=n.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=n.astNodes.get(e.astNode),sr(i))for(const s of e.content){const a=this.hydrateCstNode(s,n,r++);i.content.push(a)}return i}hydrateCstLeafNode(e){const n=this.getTokenType(e.tokenType),r=e.offset,i=e.length,s=e.startLine,a=e.startColumn,o=e.endLine,l=e.endColumn,c=e.hidden;return new jp(r,i,{start:{line:s,character:a},end:{line:o,character:l}},n,c)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if(e)return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.getKey(e)}createGrammarElementIdMap(){let e=0;for(const n of rr(this.grammar))nv(n)&&this.grammarElementIdMap.set(n,e++)}}function _T(t){return{documentation:{CommentProvider:e=>new z0(e),DocumentationProvider:e=>new W0(e)},parser:{AsyncParser:e=>new V0(e),GrammarConfig:e=>Q$(e),LangiumParser:e=>KN(e),CompletionParser:e=>jN(e),ValueConverter:()=>new WN,TokenBuilder:()=>new GN,Lexer:e=>new I0(e),ParserErrorMessageProvider:()=>new zR,LexerErrorMessageProvider:()=>new P0},workspace:{AstNodeLocator:()=>new b0,AstNodeDescriptionProvider:e=>new k0(e),ReferenceDescriptionProvider:e=>new w0(e)},references:{Linker:e=>new iT(e),NameProvider:()=>new d0,ScopeProvider:e=>new oT(e),ScopeComputation:e=>new p0(e),References:e=>new f0(e)},serializer:{Hydrator:e=>new X0(e),JsonSerializer:e=>new _0(e)},validation:{DocumentValidator:e=>new cT(e),ValidationRegistry:e=>new R0(e)},shared:()=>t.shared}}function vT(t){return{ServiceRegistry:e=>new v0(e),workspace:{LangiumDocuments:e=>new u0(e),LangiumDocumentFactory:e=>new c0(e),DocumentBuilder:e=>new C0(e),IndexManager:e=>new A0(e),WorkspaceManager:e=>new E0(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new Y0,ConfigurationProvider:e=>new S0(e)}}}var Vl;(function(t){t.merge=(e,n)=>Xl(Xl({},e),n)})(Vl||(Vl={}));function Yl(t,e,n,r,i,s,a,o,l){const c=[t,e,n,r,i,s,a,o,l].reduce(Xl,{});return TT(c)}const RT=Symbol("isProxy");function Jp(t){if(t&&t[RT])for(const e of Object.values(t))Jp(e);return t}function TT(t,e){const n=new Proxy({},{deleteProperty:()=>!1,set:()=>{throw new Error("Cannot set property on injected service container")},get:(r,i)=>i===RT?!0:bg(r,i,t,e||n),getOwnPropertyDescriptor:(r,i)=>(bg(r,i,t,e||n),Object.getOwnPropertyDescriptor(r,i)),has:(r,i)=>i in t,ownKeys:()=>[...Object.getOwnPropertyNames(t)]});return n}const wg=Symbol();function bg(t,e,n,r){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===wg)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in n){const i=n[e];t[e]=wg;try{t[e]=typeof i=="function"?i(r):TT(i,r)}catch(s){throw t[e]=s instanceof Error?s:void 0,s}return t[e]}else return}function Xl(t,e){if(e){for(const[n,r]of Object.entries(e))if(r!==void 0){const i=t[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"?t[n]=Xl(i,r):t[n]=r}}return t}class J0{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}const $T={fileSystemProvider:()=>new J0},Q0={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},Z0={AstReflection:()=>new av};function eI(){const t=Yl(vT($T),Z0),e=Yl(_T({shared:t}),Q0);return t.ServiceRegistry.register(e),e}function tI(t){var e;const n=eI(),r=n.serializer.JsonSerializer.deserialize(t);return n.shared.workspace.LangiumDocumentFactory.fromModel(r,it.parse(`memory://${(e=r.name)!==null&&e!==void 0?e:"grammar"}.langium`)),r}var M={},Qp={},_n={},ae={},_r={},zh={},_u={},H={},Sg;function kT(){if(Sg)return H;Sg=1,Object.defineProperty(H,"__esModule",{value:!0}),H.Message=H.NotificationType9=H.NotificationType8=H.NotificationType7=H.NotificationType6=H.NotificationType5=H.NotificationType4=H.NotificationType3=H.NotificationType2=H.NotificationType1=H.NotificationType0=H.NotificationType=H.RequestType9=H.RequestType8=H.RequestType7=H.RequestType6=H.RequestType5=H.RequestType4=H.RequestType3=H.RequestType2=H.RequestType1=H.RequestType=H.RequestType0=H.AbstractMessageSignature=H.ParameterStructures=H.ResponseError=H.ErrorCodes=void 0;const t=Le;var e;(function(b){b.ParseError=-32700,b.InvalidRequest=-32600,b.MethodNotFound=-32601,b.InvalidParams=-32602,b.InternalError=-32603,b.jsonrpcReservedErrorRangeStart=-32099,b.serverErrorStart=-32099,b.MessageWriteError=-32099,b.MessageReadError=-32098,b.PendingResponseRejected=-32097,b.ConnectionInactive=-32096,b.ServerNotInitialized=-32002,b.UnknownErrorCode=-32001,b.jsonrpcReservedErrorRangeEnd=-32e3,b.serverErrorEnd=-32e3})(e||(H.ErrorCodes=e={}));class n extends Error{constructor(T,S,I){super(S),this.code=t.number(T)?T:e.UnknownErrorCode,this.data=I,Object.setPrototypeOf(this,n.prototype)}toJson(){const T={code:this.code,message:this.message};return this.data!==void 0&&(T.data=this.data),T}}H.ResponseError=n;class r{constructor(T){this.kind=T}static is(T){return T===r.auto||T===r.byName||T===r.byPosition}toString(){return this.kind}}H.ParameterStructures=r,r.auto=new r("auto"),r.byPosition=new r("byPosition"),r.byName=new r("byName");class i{constructor(T,S){this.method=T,this.numberOfParams=S}get parameterStructures(){return r.auto}}H.AbstractMessageSignature=i;class s extends i{constructor(T){super(T,0)}}H.RequestType0=s;class a extends i{constructor(T,S=r.auto){super(T,1),this._parameterStructures=S}get parameterStructures(){return this._parameterStructures}}H.RequestType=a;class o extends i{constructor(T,S=r.auto){super(T,1),this._parameterStructures=S}get parameterStructures(){return this._parameterStructures}}H.RequestType1=o;class l extends i{constructor(T){super(T,2)}}H.RequestType2=l;class c extends i{constructor(T){super(T,3)}}H.RequestType3=c;class u extends i{constructor(T){super(T,4)}}H.RequestType4=u;class d extends i{constructor(T){super(T,5)}}H.RequestType5=d;class p extends i{constructor(T){super(T,6)}}H.RequestType6=p;class h extends i{constructor(T){super(T,7)}}H.RequestType7=h;class f extends i{constructor(T){super(T,8)}}H.RequestType8=f;class y extends i{constructor(T){super(T,9)}}H.RequestType9=y;class $ extends i{constructor(T,S=r.auto){super(T,1),this._parameterStructures=S}get parameterStructures(){return this._parameterStructures}}H.NotificationType=$;class v extends i{constructor(T){super(T,0)}}H.NotificationType0=v;class m extends i{constructor(T,S=r.auto){super(T,1),this._parameterStructures=S}get parameterStructures(){return this._parameterStructures}}H.NotificationType1=m;class g extends i{constructor(T){super(T,2)}}H.NotificationType2=g;class k extends i{constructor(T){super(T,3)}}H.NotificationType3=k;class F extends i{constructor(T){super(T,4)}}H.NotificationType4=F;class G extends i{constructor(T){super(T,5)}}H.NotificationType5=G;class X extends i{constructor(T){super(T,6)}}H.NotificationType6=X;class ye extends i{constructor(T){super(T,7)}}H.NotificationType7=ye;class Re extends i{constructor(T){super(T,8)}}H.NotificationType8=Re;class Te extends i{constructor(T){super(T,9)}}H.NotificationType9=Te;var P;return function(b){function T(E){const N=E;return N&&t.string(N.method)&&(t.string(N.id)||t.number(N.id))}b.isRequest=T;function S(E){const N=E;return N&&t.string(N.method)&&E.id===void 0}b.isNotification=S;function I(E){const N=E;return N&&(N.result!==void 0||!!N.error)&&(t.string(N.id)||t.number(N.id)||N.id===null)}b.isResponse=I}(P||(H.Message=P={})),H}var un={},Cg;function wT(){if(Cg)return un;Cg=1;var t;Object.defineProperty(un,"__esModule",{value:!0}),un.LRUCache=un.LinkedMap=un.Touch=void 0;var e;(function(i){i.None=0,i.First=1,i.AsOld=i.First,i.Last=2,i.AsNew=i.Last})(e||(un.Touch=e={}));class n{constructor(){this[t]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var s;return(s=this._head)==null?void 0:s.value}get last(){var s;return(s=this._tail)==null?void 0:s.value}has(s){return this._map.has(s)}get(s,a=e.None){const o=this._map.get(s);if(o)return a!==e.None&&this.touch(o,a),o.value}set(s,a,o=e.None){let l=this._map.get(s);if(l)l.value=a,o!==e.None&&this.touch(l,o);else{switch(l={key:s,value:a,next:void 0,previous:void 0},o){case e.None:this.addItemLast(l);break;case e.First:this.addItemFirst(l);break;case e.Last:this.addItemLast(l);break;default:this.addItemLast(l);break}this._map.set(s,l),this._size++}return this}delete(s){return!!this.remove(s)}remove(s){const a=this._map.get(s);if(a)return this._map.delete(s),this.removeItem(a),this._size--,a.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");const s=this._head;return this._map.delete(s.key),this.removeItem(s),this._size--,s.value}forEach(s,a){const o=this._state;let l=this._head;for(;l;){if(a?s.bind(a)(l.value,l.key,this):s(l.value,l.key,this),this._state!==o)throw new Error("LinkedMap got modified during iteration.");l=l.next}}keys(){const s=this._state;let a=this._head;const o={[Symbol.iterator]:()=>o,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(a){const l={value:a.key,done:!1};return a=a.next,l}else return{value:void 0,done:!0}}};return o}values(){const s=this._state;let a=this._head;const o={[Symbol.iterator]:()=>o,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(a){const l={value:a.value,done:!1};return a=a.next,l}else return{value:void 0,done:!0}}};return o}entries(){const s=this._state;let a=this._head;const o={[Symbol.iterator]:()=>o,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(a){const l={value:[a.key,a.value],done:!1};return a=a.next,l}else return{value:void 0,done:!0}}};return o}[(t=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(s){if(s>=this.size)return;if(s===0){this.clear();return}let a=this._head,o=this.size;for(;a&&o>s;)this._map.delete(a.key),a=a.next,o--;this._head=a,this._size=o,a&&(a.previous=void 0),this._state++}addItemFirst(s){if(!this._head&&!this._tail)this._tail=s;else if(this._head)s.next=this._head,this._head.previous=s;else throw new Error("Invalid list");this._head=s,this._state++}addItemLast(s){if(!this._head&&!this._tail)this._head=s;else if(this._tail)s.previous=this._tail,this._tail.next=s;else throw new Error("Invalid list");this._tail=s,this._state++}removeItem(s){if(s===this._head&&s===this._tail)this._head=void 0,this._tail=void 0;else if(s===this._head){if(!s.next)throw new Error("Invalid list");s.next.previous=void 0,this._head=s.next}else if(s===this._tail){if(!s.previous)throw new Error("Invalid list");s.previous.next=void 0,this._tail=s.previous}else{const a=s.next,o=s.previous;if(!a||!o)throw new Error("Invalid list");a.previous=o,o.next=a}s.next=void 0,s.previous=void 0,this._state++}touch(s,a){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(a!==e.First&&a!==e.Last)){if(a===e.First){if(s===this._head)return;const o=s.next,l=s.previous;s===this._tail?(l.next=void 0,this._tail=l):(o.previous=l,l.next=o),s.previous=void 0,s.next=this._head,this._head.previous=s,this._head=s,this._state++}else if(a===e.Last){if(s===this._tail)return;const o=s.next,l=s.previous;s===this._head?(o.previous=void 0,this._head=o):(o.previous=l,l.next=o),s.next=void 0,s.previous=this._tail,this._tail.next=s,this._tail=s,this._state++}}}toJSON(){const s=[];return this.forEach((a,o)=>{s.push([o,a])}),s}fromJSON(s){this.clear();for(const[a,o]of s)this.set(a,o)}}un.LinkedMap=n;class r extends n{constructor(s,a=1){super(),this._limit=s,this._ratio=Math.min(Math.max(0,a),1)}get limit(){return this._limit}set limit(s){this._limit=s,this.checkTrim()}get ratio(){return this._ratio}set ratio(s){this._ratio=Math.min(Math.max(0,s),1),this.checkTrim()}get(s,a=e.AsNew){return super.get(s,a)}peek(s){return super.get(s,e.None)}set(s,a){return super.set(s,a,e.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}}return un.LRUCache=r,un}var hi={},Ag;function nI(){if(Ag)return hi;Ag=1,Object.defineProperty(hi,"__esModule",{value:!0}),hi.Disposable=void 0;var t;return function(e){function n(r){return{dispose:r}}e.create=n}(t||(hi.Disposable=t={})),hi}var Zn={},Eg;function rI(){if(Eg)return Zn;Eg=1,Object.defineProperty(Zn,"__esModule",{value:!0}),Zn.SharedArrayReceiverStrategy=Zn.SharedArraySenderStrategy=void 0;const t=Wn;var e;(function(a){a.Continue=0,a.Cancelled=1})(e||(e={}));class n{constructor(){this.buffers=new Map}enableCancellation(o){if(o.id===null)return;const l=new SharedArrayBuffer(4),c=new Int32Array(l,0,1);c[0]=e.Continue,this.buffers.set(o.id,l),o.$cancellationData=l}async sendCancellation(o,l){const c=this.buffers.get(l);if(c===void 0)return;const u=new Int32Array(c,0,1);Atomics.store(u,0,e.Cancelled)}cleanup(o){this.buffers.delete(o)}dispose(){this.buffers.clear()}}Zn.SharedArraySenderStrategy=n;class r{constructor(o){this.data=new Int32Array(o,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===e.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}}class i{constructor(o){this.token=new r(o)}cancel(){}dispose(){}}class s{constructor(){this.kind="request"}createCancellationTokenSource(o){const l=o.$cancellationData;return l===void 0?new t.CancellationTokenSource:new i(l)}}return Zn.SharedArrayReceiverStrategy=s,Zn}var dn={},mi={},Pg;function bT(){if(Pg)return mi;Pg=1,Object.defineProperty(mi,"__esModule",{value:!0}),mi.Semaphore=void 0;const t=En;class e{constructor(r=1){if(r<=0)throw new Error("Capacity must be greater than 0");this._capacity=r,this._active=0,this._waiting=[]}lock(r){return new Promise((i,s)=>{this._waiting.push({thunk:r,resolve:i,reject:s}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,t.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;const r=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{const i=r.thunk();i instanceof Promise?i.then(s=>{this._active--,r.resolve(s),this.runNext()},s=>{this._active--,r.reject(s),this.runNext()}):(this._active--,r.resolve(i),this.runNext())}catch(i){this._active--,r.reject(i),this.runNext()}}}return mi.Semaphore=e,mi}var Ng;function iI(){if(Ng)return dn;Ng=1,Object.defineProperty(dn,"__esModule",{value:!0}),dn.ReadableStreamMessageReader=dn.AbstractMessageReader=dn.MessageReader=void 0;const t=En,e=Le,n=nn,r=bT();var i;(function(l){function c(u){let d=u;return d&&e.func(d.listen)&&e.func(d.dispose)&&e.func(d.onError)&&e.func(d.onClose)&&e.func(d.onPartialMessage)}l.is=c})(i||(dn.MessageReader=i={}));class s{constructor(){this.errorEmitter=new n.Emitter,this.closeEmitter=new n.Emitter,this.partialMessageEmitter=new n.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(c){this.errorEmitter.fire(this.asError(c))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(c){this.partialMessageEmitter.fire(c)}asError(c){return c instanceof Error?c:new Error(`Reader received error. Reason: ${e.string(c.message)?c.message:"unknown"}`)}}dn.AbstractMessageReader=s;var a;(function(l){function c(u){let d,p;const h=new Map;let f;const y=new Map;if(u===void 0||typeof u=="string")d=u??"utf-8";else{if(d=u.charset??"utf-8",u.contentDecoder!==void 0&&(p=u.contentDecoder,h.set(p.name,p)),u.contentDecoders!==void 0)for(const $ of u.contentDecoders)h.set($.name,$);if(u.contentTypeDecoder!==void 0&&(f=u.contentTypeDecoder,y.set(f.name,f)),u.contentTypeDecoders!==void 0)for(const $ of u.contentTypeDecoders)y.set($.name,$)}return f===void 0&&(f=(0,t.default)().applicationJson.decoder,y.set(f.name,f)),{charset:d,contentDecoder:p,contentDecoders:h,contentTypeDecoder:f,contentTypeDecoders:y}}l.fromOptions=c})(a||(a={}));class o extends s{constructor(c,u){super(),this.readable=c,this.options=a.fromOptions(u),this.buffer=(0,t.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new r.Semaphore(1)}set partialMessageTimeout(c){this._partialMessageTimeout=c}get partialMessageTimeout(){return this._partialMessageTimeout}listen(c){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=c;const u=this.readable.onData(d=>{this.onData(d)});return this.readable.onError(d=>this.fireError(d)),this.readable.onClose(()=>this.fireClose()),u}onData(c){try{for(this.buffer.append(c);;){if(this.nextMessageLength===-1){const d=this.buffer.tryReadHeaders(!0);if(!d)return;const p=d.get("content-length");if(!p){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(d))}`));return}const h=parseInt(p);if(isNaN(h)){this.fireError(new Error(`Content-Length value must be a number. Got ${p}`));return}this.nextMessageLength=h}const u=this.buffer.tryReadBody(this.nextMessageLength);if(u===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{const d=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(u):u,p=await this.options.contentTypeDecoder.decode(d,this.options);this.callback(p)}).catch(d=>{this.fireError(d)})}}catch(u){this.fireError(u)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,t.default)().timer.setTimeout((c,u)=>{this.partialMessageTimer=void 0,c===this.messageToken&&(this.firePartialMessage({messageToken:c,waitingTime:u}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}}return dn.ReadableStreamMessageReader=o,dn}var fn={},Ig;function sI(){if(Ig)return fn;Ig=1,Object.defineProperty(fn,"__esModule",{value:!0}),fn.WriteableStreamMessageWriter=fn.AbstractMessageWriter=fn.MessageWriter=void 0;const t=En,e=Le,n=bT(),r=nn,i="Content-Length: ",s=`\r
`;var a;(function(u){function d(p){let h=p;return h&&e.func(h.dispose)&&e.func(h.onClose)&&e.func(h.onError)&&e.func(h.write)}u.is=d})(a||(fn.MessageWriter=a={}));class o{constructor(){this.errorEmitter=new r.Emitter,this.closeEmitter=new r.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(d,p,h){this.errorEmitter.fire([this.asError(d),p,h])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(d){return d instanceof Error?d:new Error(`Writer received error. Reason: ${e.string(d.message)?d.message:"unknown"}`)}}fn.AbstractMessageWriter=o;var l;(function(u){function d(p){return p===void 0||typeof p=="string"?{charset:p??"utf-8",contentTypeEncoder:(0,t.default)().applicationJson.encoder}:{charset:p.charset??"utf-8",contentEncoder:p.contentEncoder,contentTypeEncoder:p.contentTypeEncoder??(0,t.default)().applicationJson.encoder}}u.fromOptions=d})(l||(l={}));class c extends o{constructor(d,p){super(),this.writable=d,this.options=l.fromOptions(p),this.errorCount=0,this.writeSemaphore=new n.Semaphore(1),this.writable.onError(h=>this.fireError(h)),this.writable.onClose(()=>this.fireClose())}async write(d){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(d,this.options).then(h=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(h):h).then(h=>{const f=[];return f.push(i,h.byteLength.toString(),s),f.push(s),this.doWrite(d,f,h)},h=>{throw this.fireError(h),h}))}async doWrite(d,p,h){try{return await this.writable.write(p.join(""),"ascii"),this.writable.write(h)}catch(f){return this.handleError(f,d),Promise.reject(f)}}handleError(d,p){this.errorCount++,this.fireError(d,p,this.errorCount)}end(){this.writable.end()}}return fn.WriteableStreamMessageWriter=c,fn}var gi={},Og;function aI(){if(Og)return gi;Og=1,Object.defineProperty(gi,"__esModule",{value:!0}),gi.AbstractMessageBuffer=void 0;const t=13,e=10,n=`\r
`;class r{constructor(s="utf-8"){this._encoding=s,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(s){const a=typeof s=="string"?this.fromString(s,this._encoding):s;this._chunks.push(a),this._totalLength+=a.byteLength}tryReadHeaders(s=!1){if(this._chunks.length===0)return;let a=0,o=0,l=0,c=0;e:for(;o<this._chunks.length;){const h=this._chunks[o];for(l=0;l<h.length;){switch(h[l]){case t:switch(a){case 0:a=1;break;case 2:a=3;break;default:a=0}break;case e:switch(a){case 1:a=2;break;case 3:a=4,l++;break e;default:a=0}break;default:a=0}l++}c+=h.byteLength,o++}if(a!==4)return;const u=this._read(c+l),d=new Map,p=this.toString(u,"ascii").split(n);if(p.length<2)return d;for(let h=0;h<p.length-2;h++){const f=p[h],y=f.indexOf(":");if(y===-1)throw new Error(`Message header must separate key and value using ':'
${f}`);const $=f.substr(0,y),v=f.substr(y+1).trim();d.set(s?$.toLowerCase():$,v)}return d}tryReadBody(s){if(!(this._totalLength<s))return this._read(s)}get numberOfBytes(){return this._totalLength}_read(s){if(s===0)return this.emptyBuffer();if(s>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===s){const c=this._chunks[0];return this._chunks.shift(),this._totalLength-=s,this.asNative(c)}if(this._chunks[0].byteLength>s){const c=this._chunks[0],u=this.asNative(c,s);return this._chunks[0]=c.slice(s),this._totalLength-=s,u}const a=this.allocNative(s);let o=0,l=0;for(;s>0;){const c=this._chunks[l];if(c.byteLength>s){const u=c.slice(0,s);a.set(u,o),o+=s,this._chunks[l]=c.slice(s),this._totalLength-=s,s-=s}else a.set(c,o),o+=c.byteLength,this._chunks.shift(),this._totalLength-=c.byteLength,s-=c.byteLength}return a}}return gi.AbstractMessageBuffer=r,gi}var vu={},Dg;function oI(){return Dg||(Dg=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.ConnectionOptions=t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.RequestCancellationReceiverStrategy=t.IdCancellationReceiverStrategy=t.ConnectionStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=t.NullLogger=t.ProgressType=t.ProgressToken=void 0;const e=En,n=Le,r=kT(),i=wT(),s=nn,a=Wn;var o;(function(T){T.type=new r.NotificationType("$/cancelRequest")})(o||(o={}));var l;(function(T){function S(I){return typeof I=="string"||typeof I=="number"}T.is=S})(l||(t.ProgressToken=l={}));var c;(function(T){T.type=new r.NotificationType("$/progress")})(c||(c={}));class u{constructor(){}}t.ProgressType=u;var d;(function(T){function S(I){return n.func(I)}T.is=S})(d||(d={})),t.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var p;(function(T){T[T.Off=0]="Off",T[T.Messages=1]="Messages",T[T.Compact=2]="Compact",T[T.Verbose=3]="Verbose"})(p||(t.Trace=p={}));var h;(function(T){T.Off="off",T.Messages="messages",T.Compact="compact",T.Verbose="verbose"})(h||(t.TraceValues=h={})),function(T){function S(E){if(!n.string(E))return T.Off;switch(E=E.toLowerCase(),E){case"off":return T.Off;case"messages":return T.Messages;case"compact":return T.Compact;case"verbose":return T.Verbose;default:return T.Off}}T.fromString=S;function I(E){switch(E){case T.Off:return"off";case T.Messages:return"messages";case T.Compact:return"compact";case T.Verbose:return"verbose";default:return"off"}}T.toString=I}(p||(t.Trace=p={}));var f;(function(T){T.Text="text",T.JSON="json"})(f||(t.TraceFormat=f={})),function(T){function S(I){return n.string(I)?(I=I.toLowerCase(),I==="json"?T.JSON:T.Text):T.Text}T.fromString=S}(f||(t.TraceFormat=f={}));var y;(function(T){T.type=new r.NotificationType("$/setTrace")})(y||(t.SetTraceNotification=y={}));var $;(function(T){T.type=new r.NotificationType("$/logTrace")})($||(t.LogTraceNotification=$={}));var v;(function(T){T[T.Closed=1]="Closed",T[T.Disposed=2]="Disposed",T[T.AlreadyListening=3]="AlreadyListening"})(v||(t.ConnectionErrors=v={}));class m extends Error{constructor(S,I){super(I),this.code=S,Object.setPrototypeOf(this,m.prototype)}}t.ConnectionError=m;var g;(function(T){function S(I){const E=I;return E&&n.func(E.cancelUndispatched)}T.is=S})(g||(t.ConnectionStrategy=g={}));var k;(function(T){function S(I){const E=I;return E&&(E.kind===void 0||E.kind==="id")&&n.func(E.createCancellationTokenSource)&&(E.dispose===void 0||n.func(E.dispose))}T.is=S})(k||(t.IdCancellationReceiverStrategy=k={}));var F;(function(T){function S(I){const E=I;return E&&E.kind==="request"&&n.func(E.createCancellationTokenSource)&&(E.dispose===void 0||n.func(E.dispose))}T.is=S})(F||(t.RequestCancellationReceiverStrategy=F={}));var G;(function(T){T.Message=Object.freeze({createCancellationTokenSource(I){return new a.CancellationTokenSource}});function S(I){return k.is(I)||F.is(I)}T.is=S})(G||(t.CancellationReceiverStrategy=G={}));var X;(function(T){T.Message=Object.freeze({sendCancellation(I,E){return I.sendNotification(o.type,{id:E})},cleanup(I){}});function S(I){const E=I;return E&&n.func(E.sendCancellation)&&n.func(E.cleanup)}T.is=S})(X||(t.CancellationSenderStrategy=X={}));var ye;(function(T){T.Message=Object.freeze({receiver:G.Message,sender:X.Message});function S(I){const E=I;return E&&G.is(E.receiver)&&X.is(E.sender)}T.is=S})(ye||(t.CancellationStrategy=ye={}));var Re;(function(T){function S(I){const E=I;return E&&n.func(E.handleMessage)}T.is=S})(Re||(t.MessageStrategy=Re={}));var Te;(function(T){function S(I){const E=I;return E&&(ye.is(E.cancellationStrategy)||g.is(E.connectionStrategy)||Re.is(E.messageStrategy))}T.is=S})(Te||(t.ConnectionOptions=Te={}));var P;(function(T){T[T.New=1]="New",T[T.Listening=2]="Listening",T[T.Closed=3]="Closed",T[T.Disposed=4]="Disposed"})(P||(P={}));function b(T,S,I,E){const N=I!==void 0?I:t.NullLogger;let Fe=0,x=0,C=0;const te="2.0";let Gt;const Wt=new Map;let xe;const zt=new Map,_e=new Map;let Ue,Ge=new i.LinkedMap,ve=new Map,We=new Set,Ee=new Map,V=p.Off,Ke=f.Text,ue,ct=P.New;const vr=new s.Emitter,Zr=new s.Emitter,ei=new s.Emitter,ti=new s.Emitter,ni=new s.Emitter,xt=E&&E.cancellationStrategy?E.cancellationStrategy:ye.Message;function ri(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function Js(R){return R===null?"res-unknown-"+(++C).toString():"res-"+R.toString()}function Qs(){return"not-"+(++x).toString()}function Zs(R,A){r.Message.isRequest(A)?R.set(ri(A.id),A):r.Message.isResponse(A)?R.set(Js(A.id),A):R.set(Qs(),A)}function ea(R){}function ii(){return ct===P.Listening}function si(){return ct===P.Closed}function ln(){return ct===P.Disposed}function ai(){(ct===P.New||ct===P.Listening)&&(ct=P.Closed,Zr.fire(void 0))}function ta(R){vr.fire([R,void 0,void 0])}function na(R){vr.fire(R)}T.onClose(ai),T.onError(ta),S.onClose(ai),S.onError(na);function oi(){Ue||Ge.size===0||(Ue=(0,e.default)().timer.setImmediate(()=>{Ue=void 0,ra()}))}function li(R){r.Message.isRequest(R)?sa(R):r.Message.isNotification(R)?oa(R):r.Message.isResponse(R)?aa(R):la(R)}function ra(){if(Ge.size===0)return;const R=Ge.shift();try{const A=E==null?void 0:E.messageStrategy;Re.is(A)?A.handleMessage(R,li):li(R)}finally{oi()}}const ia=R=>{try{if(r.Message.isNotification(R)&&R.method===o.type.method){const A=R.params.id,O=ri(A),U=Ge.get(O);if(r.Message.isRequest(U)){const oe=E==null?void 0:E.connectionStrategy,de=oe&&oe.cancelUndispatched?oe.cancelUndispatched(U,ea):void 0;if(de&&(de.error!==void 0||de.result!==void 0)){Ge.delete(O),Ee.delete(A),de.id=U.id,Qn(de,R.method,Date.now()),S.write(de).catch(()=>N.error("Sending response for canceled message failed."));return}}const he=Ee.get(A);if(he!==void 0){he.cancel(),Rr(R);return}else We.add(A)}Zs(Ge,R)}finally{oi()}};function sa(R){if(ln())return;function A(Z,$e,se){const He={jsonrpc:te,id:R.id};Z instanceof r.ResponseError?He.error=Z.toJson():He.result=Z===void 0?null:Z,Qn(He,$e,se),S.write(He).catch(()=>N.error("Sending response failed."))}function O(Z,$e,se){const He={jsonrpc:te,id:R.id,error:Z.toJson()};Qn(He,$e,se),S.write(He).catch(()=>N.error("Sending response failed."))}function U(Z,$e,se){Z===void 0&&(Z=null);const He={jsonrpc:te,id:R.id,result:Z};Qn(He,$e,se),S.write(He).catch(()=>N.error("Sending response failed."))}da(R);const he=Wt.get(R.method);let oe,de;he&&(oe=he.type,de=he.handler);const Ie=Date.now();if(de||Gt){const Z=R.id??String(Date.now()),$e=k.is(xt.receiver)?xt.receiver.createCancellationTokenSource(Z):xt.receiver.createCancellationTokenSource(R);R.id!==null&&We.has(R.id)&&$e.cancel(),R.id!==null&&Ee.set(Z,$e);try{let se;if(de)if(R.params===void 0){if(oe!==void 0&&oe.numberOfParams!==0){O(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines ${oe.numberOfParams} params but received none.`),R.method,Ie);return}se=de($e.token)}else if(Array.isArray(R.params)){if(oe!==void 0&&oe.parameterStructures===r.ParameterStructures.byName){O(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,Ie);return}se=de(...R.params,$e.token)}else{if(oe!==void 0&&oe.parameterStructures===r.ParameterStructures.byPosition){O(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,Ie);return}se=de(R.params,$e.token)}else Gt&&(se=Gt(R.method,R.params,$e.token));const He=se;se?He.then?He.then(nt=>{Ee.delete(Z),A(nt,R.method,Ie)},nt=>{Ee.delete(Z),nt instanceof r.ResponseError?O(nt,R.method,Ie):nt&&n.string(nt.message)?O(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${nt.message}`),R.method,Ie):O(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,Ie)}):(Ee.delete(Z),A(se,R.method,Ie)):(Ee.delete(Z),U(se,R.method,Ie))}catch(se){Ee.delete(Z),se instanceof r.ResponseError?A(se,R.method,Ie):se&&n.string(se.message)?O(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${se.message}`),R.method,Ie):O(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,Ie)}}else O(new r.ResponseError(r.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,Ie)}function aa(R){if(!ln())if(R.id===null)R.error?N.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):N.error("Received response message without id. No further error information provided.");else{const A=R.id,O=ve.get(A);if(fa(R,O),O!==void 0){ve.delete(A);try{if(R.error){const U=R.error;O.reject(new r.ResponseError(U.code,U.message,U.data))}else if(R.result!==void 0)O.resolve(R.result);else throw new Error("Should never happen.")}catch(U){U.message?N.error(`Response handler '${O.method}' failed with message: ${U.message}`):N.error(`Response handler '${O.method}' failed unexpectedly.`)}}}}function oa(R){if(ln())return;let A,O;if(R.method===o.type.method){const U=R.params.id;We.delete(U),Rr(R);return}else{const U=zt.get(R.method);U&&(O=U.handler,A=U.type)}if(O||xe)try{if(Rr(R),O)if(R.params===void 0)A!==void 0&&A.numberOfParams!==0&&A.parameterStructures!==r.ParameterStructures.byName&&N.error(`Notification ${R.method} defines ${A.numberOfParams} params but received none.`),O();else if(Array.isArray(R.params)){const U=R.params;R.method===c.type.method&&U.length===2&&l.is(U[0])?O({token:U[0],value:U[1]}):(A!==void 0&&(A.parameterStructures===r.ParameterStructures.byName&&N.error(`Notification ${R.method} defines parameters by name but received parameters by position`),A.numberOfParams!==R.params.length&&N.error(`Notification ${R.method} defines ${A.numberOfParams} params but received ${U.length} arguments`)),O(...U))}else A!==void 0&&A.parameterStructures===r.ParameterStructures.byPosition&&N.error(`Notification ${R.method} defines parameters by position but received parameters by name`),O(R.params);else xe&&xe(R.method,R.params)}catch(U){U.message?N.error(`Notification handler '${R.method}' failed with message: ${U.message}`):N.error(`Notification handler '${R.method}' failed unexpectedly.`)}else ei.fire(R)}function la(R){if(!R){N.error("Received empty message.");return}N.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);const A=R;if(n.string(A.id)||n.number(A.id)){const O=A.id,U=ve.get(O);U&&U.reject(new Error("The received response has neither a result nor an error property."))}}function Mt(R){if(R!=null)switch(V){case p.Verbose:return JSON.stringify(R,null,4);case p.Compact:return JSON.stringify(R);default:return}}function ca(R){if(!(V===p.Off||!ue))if(Ke===f.Text){let A;(V===p.Verbose||V===p.Compact)&&R.params&&(A=`Params: ${Mt(R.params)}

`),ue.log(`Sending request '${R.method} - (${R.id})'.`,A)}else cn("send-request",R)}function ua(R){if(!(V===p.Off||!ue))if(Ke===f.Text){let A;(V===p.Verbose||V===p.Compact)&&(R.params?A=`Params: ${Mt(R.params)}

`:A=`No parameters provided.

`),ue.log(`Sending notification '${R.method}'.`,A)}else cn("send-notification",R)}function Qn(R,A,O){if(!(V===p.Off||!ue))if(Ke===f.Text){let U;(V===p.Verbose||V===p.Compact)&&(R.error&&R.error.data?U=`Error data: ${Mt(R.error.data)}

`:R.result?U=`Result: ${Mt(R.result)}

`:R.error===void 0&&(U=`No result returned.

`)),ue.log(`Sending response '${A} - (${R.id})'. Processing request took ${Date.now()-O}ms`,U)}else cn("send-response",R)}function da(R){if(!(V===p.Off||!ue))if(Ke===f.Text){let A;(V===p.Verbose||V===p.Compact)&&R.params&&(A=`Params: ${Mt(R.params)}

`),ue.log(`Received request '${R.method} - (${R.id})'.`,A)}else cn("receive-request",R)}function Rr(R){if(!(V===p.Off||!ue||R.method===$.type.method))if(Ke===f.Text){let A;(V===p.Verbose||V===p.Compact)&&(R.params?A=`Params: ${Mt(R.params)}

`:A=`No parameters provided.

`),ue.log(`Received notification '${R.method}'.`,A)}else cn("receive-notification",R)}function fa(R,A){if(!(V===p.Off||!ue))if(Ke===f.Text){let O;if((V===p.Verbose||V===p.Compact)&&(R.error&&R.error.data?O=`Error data: ${Mt(R.error.data)}

`:R.result?O=`Result: ${Mt(R.result)}

`:R.error===void 0&&(O=`No result returned.

`)),A){const U=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";ue.log(`Received response '${A.method} - (${R.id})' in ${Date.now()-A.timerStart}ms.${U}`,O)}else ue.log(`Received response ${R.id} without active response promise.`,O)}else cn("receive-response",R)}function cn(R,A){if(!ue||V===p.Off)return;const O={isLSPMessage:!0,type:R,message:A,timestamp:Date.now()};ue.log(O)}function Nn(){if(si())throw new m(v.Closed,"Connection is closed.");if(ln())throw new m(v.Disposed,"Connection is disposed.")}function pa(){if(ii())throw new m(v.AlreadyListening,"Connection is already listening")}function ha(){if(!ii())throw new Error("Call listen() first.")}function In(R){return R===void 0?null:R}function ci(R){if(R!==null)return R}function _(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function Pe(R,A){switch(R){case r.ParameterStructures.auto:return _(A)?ci(A):[In(A)];case r.ParameterStructures.byName:if(!_(A))throw new Error("Received parameters by name but param is not an object literal.");return ci(A);case r.ParameterStructures.byPosition:return[In(A)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function Ne(R,A){let O;const U=R.numberOfParams;switch(U){case 0:O=void 0;break;case 1:O=Pe(R.parameterStructures,A[0]);break;default:O=[];for(let he=0;he<A.length&&he<U;he++)O.push(In(A[he]));if(A.length<U)for(let he=A.length;he<U;he++)O.push(null);break}return O}const W={sendNotification:(R,...A)=>{Nn();let O,U;if(n.string(R)){O=R;const oe=A[0];let de=0,Ie=r.ParameterStructures.auto;r.ParameterStructures.is(oe)&&(de=1,Ie=oe);let Z=A.length;const $e=Z-de;switch($e){case 0:U=void 0;break;case 1:U=Pe(Ie,A[de]);break;default:if(Ie===r.ParameterStructures.byName)throw new Error(`Received ${$e} parameters for 'by Name' notification parameter structure.`);U=A.slice(de,Z).map(se=>In(se));break}}else{const oe=A;O=R.method,U=Ne(R,oe)}const he={jsonrpc:te,method:O,params:U};return ua(he),S.write(he).catch(oe=>{throw N.error("Sending notification failed."),oe})},onNotification:(R,A)=>{Nn();let O;return n.func(R)?xe=R:A&&(n.string(R)?(O=R,zt.set(R,{type:void 0,handler:A})):(O=R.method,zt.set(R.method,{type:R,handler:A}))),{dispose:()=>{O!==void 0?zt.delete(O):xe=void 0}}},onProgress:(R,A,O)=>{if(_e.has(A))throw new Error(`Progress handler for token ${A} already registered`);return _e.set(A,O),{dispose:()=>{_e.delete(A)}}},sendProgress:(R,A,O)=>W.sendNotification(c.type,{token:A,value:O}),onUnhandledProgress:ti.event,sendRequest:(R,...A)=>{Nn(),ha();let O,U,he;if(n.string(R)){O=R;const Z=A[0],$e=A[A.length-1];let se=0,He=r.ParameterStructures.auto;r.ParameterStructures.is(Z)&&(se=1,He=Z);let nt=A.length;a.CancellationToken.is($e)&&(nt=nt-1,he=$e);const Vt=nt-se;switch(Vt){case 0:U=void 0;break;case 1:U=Pe(He,A[se]);break;default:if(He===r.ParameterStructures.byName)throw new Error(`Received ${Vt} parameters for 'by Name' request parameter structure.`);U=A.slice(se,nt).map(n$=>In(n$));break}}else{const Z=A;O=R.method,U=Ne(R,Z);const $e=R.numberOfParams;he=a.CancellationToken.is(Z[$e])?Z[$e]:void 0}const oe=Fe++;let de;he&&(de=he.onCancellationRequested(()=>{const Z=xt.sender.sendCancellation(W,oe);return Z===void 0?(N.log(`Received no promise from cancellation strategy when cancelling id ${oe}`),Promise.resolve()):Z.catch(()=>{N.log(`Sending cancellation messages for id ${oe} failed`)})}));const Ie={jsonrpc:te,id:oe,method:O,params:U};return ca(Ie),typeof xt.sender.enableCancellation=="function"&&xt.sender.enableCancellation(Ie),new Promise(async(Z,$e)=>{const se=Vt=>{Z(Vt),xt.sender.cleanup(oe),de==null||de.dispose()},He=Vt=>{$e(Vt),xt.sender.cleanup(oe),de==null||de.dispose()},nt={method:O,timerStart:Date.now(),resolve:se,reject:He};try{await S.write(Ie),ve.set(oe,nt)}catch(Vt){throw N.error("Sending request failed."),nt.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError,Vt.message?Vt.message:"Unknown reason")),Vt}})},onRequest:(R,A)=>{Nn();let O=null;return d.is(R)?(O=void 0,Gt=R):n.string(R)?(O=null,A!==void 0&&(O=R,Wt.set(R,{handler:A,type:void 0}))):A!==void 0&&(O=R.method,Wt.set(R.method,{type:R,handler:A})),{dispose:()=>{O!==null&&(O!==void 0?Wt.delete(O):Gt=void 0)}}},hasPendingResponse:()=>ve.size>0,trace:async(R,A,O)=>{let U=!1,he=f.Text;O!==void 0&&(n.boolean(O)?U=O:(U=O.sendNotification||!1,he=O.traceFormat||f.Text)),V=R,Ke=he,V===p.Off?ue=void 0:ue=A,U&&!si()&&!ln()&&await W.sendNotification(y.type,{value:p.toString(R)})},onError:vr.event,onClose:Zr.event,onUnhandledNotification:ei.event,onDispose:ni.event,end:()=>{S.end()},dispose:()=>{if(ln())return;ct=P.Disposed,ni.fire(void 0);const R=new r.ResponseError(r.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(const A of ve.values())A.reject(R);ve=new Map,Ee=new Map,We=new Set,Ge=new i.LinkedMap,n.func(S.dispose)&&S.dispose(),n.func(T.dispose)&&T.dispose()},listen:()=>{Nn(),pa(),ct=P.Listening,T.listen(ia)},inspect:()=>{(0,e.default)().console.log("inspect")}};return W.onNotification($.type,R=>{if(V===p.Off||!ue)return;const A=V===p.Verbose||V===p.Compact;ue.log(R.message,A?R.verbose:void 0)}),W.onNotification(c.type,R=>{const A=_e.get(R.token);A?A(R.value):ti.fire(R)}),W}t.createMessageConnection=b}(vu)),vu}var xg;function Zp(){return xg||(xg=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressType=t.ProgressToken=t.createMessageConnection=t.NullLogger=t.ConnectionOptions=t.ConnectionStrategy=t.AbstractMessageBuffer=t.WriteableStreamMessageWriter=t.AbstractMessageWriter=t.MessageWriter=t.ReadableStreamMessageReader=t.AbstractMessageReader=t.MessageReader=t.SharedArrayReceiverStrategy=t.SharedArraySenderStrategy=t.CancellationToken=t.CancellationTokenSource=t.Emitter=t.Event=t.Disposable=t.LRUCache=t.Touch=t.LinkedMap=t.ParameterStructures=t.NotificationType9=t.NotificationType8=t.NotificationType7=t.NotificationType6=t.NotificationType5=t.NotificationType4=t.NotificationType3=t.NotificationType2=t.NotificationType1=t.NotificationType0=t.NotificationType=t.ErrorCodes=t.ResponseError=t.RequestType9=t.RequestType8=t.RequestType7=t.RequestType6=t.RequestType5=t.RequestType4=t.RequestType3=t.RequestType2=t.RequestType1=t.RequestType0=t.RequestType=t.Message=t.RAL=void 0,t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=void 0;const e=kT();Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return e.Message}}),Object.defineProperty(t,"RequestType",{enumerable:!0,get:function(){return e.RequestType}}),Object.defineProperty(t,"RequestType0",{enumerable:!0,get:function(){return e.RequestType0}}),Object.defineProperty(t,"RequestType1",{enumerable:!0,get:function(){return e.RequestType1}}),Object.defineProperty(t,"RequestType2",{enumerable:!0,get:function(){return e.RequestType2}}),Object.defineProperty(t,"RequestType3",{enumerable:!0,get:function(){return e.RequestType3}}),Object.defineProperty(t,"RequestType4",{enumerable:!0,get:function(){return e.RequestType4}}),Object.defineProperty(t,"RequestType5",{enumerable:!0,get:function(){return e.RequestType5}}),Object.defineProperty(t,"RequestType6",{enumerable:!0,get:function(){return e.RequestType6}}),Object.defineProperty(t,"RequestType7",{enumerable:!0,get:function(){return e.RequestType7}}),Object.defineProperty(t,"RequestType8",{enumerable:!0,get:function(){return e.RequestType8}}),Object.defineProperty(t,"RequestType9",{enumerable:!0,get:function(){return e.RequestType9}}),Object.defineProperty(t,"ResponseError",{enumerable:!0,get:function(){return e.ResponseError}}),Object.defineProperty(t,"ErrorCodes",{enumerable:!0,get:function(){return e.ErrorCodes}}),Object.defineProperty(t,"NotificationType",{enumerable:!0,get:function(){return e.NotificationType}}),Object.defineProperty(t,"NotificationType0",{enumerable:!0,get:function(){return e.NotificationType0}}),Object.defineProperty(t,"NotificationType1",{enumerable:!0,get:function(){return e.NotificationType1}}),Object.defineProperty(t,"NotificationType2",{enumerable:!0,get:function(){return e.NotificationType2}}),Object.defineProperty(t,"NotificationType3",{enumerable:!0,get:function(){return e.NotificationType3}}),Object.defineProperty(t,"NotificationType4",{enumerable:!0,get:function(){return e.NotificationType4}}),Object.defineProperty(t,"NotificationType5",{enumerable:!0,get:function(){return e.NotificationType5}}),Object.defineProperty(t,"NotificationType6",{enumerable:!0,get:function(){return e.NotificationType6}}),Object.defineProperty(t,"NotificationType7",{enumerable:!0,get:function(){return e.NotificationType7}}),Object.defineProperty(t,"NotificationType8",{enumerable:!0,get:function(){return e.NotificationType8}}),Object.defineProperty(t,"NotificationType9",{enumerable:!0,get:function(){return e.NotificationType9}}),Object.defineProperty(t,"ParameterStructures",{enumerable:!0,get:function(){return e.ParameterStructures}});const n=wT();Object.defineProperty(t,"LinkedMap",{enumerable:!0,get:function(){return n.LinkedMap}}),Object.defineProperty(t,"LRUCache",{enumerable:!0,get:function(){return n.LRUCache}}),Object.defineProperty(t,"Touch",{enumerable:!0,get:function(){return n.Touch}});const r=nI();Object.defineProperty(t,"Disposable",{enumerable:!0,get:function(){return r.Disposable}});const i=nn;Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return i.Emitter}});const s=Wn;Object.defineProperty(t,"CancellationTokenSource",{enumerable:!0,get:function(){return s.CancellationTokenSource}}),Object.defineProperty(t,"CancellationToken",{enumerable:!0,get:function(){return s.CancellationToken}});const a=rI();Object.defineProperty(t,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return a.SharedArraySenderStrategy}}),Object.defineProperty(t,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return a.SharedArrayReceiverStrategy}});const o=iI();Object.defineProperty(t,"MessageReader",{enumerable:!0,get:function(){return o.MessageReader}}),Object.defineProperty(t,"AbstractMessageReader",{enumerable:!0,get:function(){return o.AbstractMessageReader}}),Object.defineProperty(t,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return o.ReadableStreamMessageReader}});const l=sI();Object.defineProperty(t,"MessageWriter",{enumerable:!0,get:function(){return l.MessageWriter}}),Object.defineProperty(t,"AbstractMessageWriter",{enumerable:!0,get:function(){return l.AbstractMessageWriter}}),Object.defineProperty(t,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return l.WriteableStreamMessageWriter}});const c=aI();Object.defineProperty(t,"AbstractMessageBuffer",{enumerable:!0,get:function(){return c.AbstractMessageBuffer}});const u=oI();Object.defineProperty(t,"ConnectionStrategy",{enumerable:!0,get:function(){return u.ConnectionStrategy}}),Object.defineProperty(t,"ConnectionOptions",{enumerable:!0,get:function(){return u.ConnectionOptions}}),Object.defineProperty(t,"NullLogger",{enumerable:!0,get:function(){return u.NullLogger}}),Object.defineProperty(t,"createMessageConnection",{enumerable:!0,get:function(){return u.createMessageConnection}}),Object.defineProperty(t,"ProgressToken",{enumerable:!0,get:function(){return u.ProgressToken}}),Object.defineProperty(t,"ProgressType",{enumerable:!0,get:function(){return u.ProgressType}}),Object.defineProperty(t,"Trace",{enumerable:!0,get:function(){return u.Trace}}),Object.defineProperty(t,"TraceValues",{enumerable:!0,get:function(){return u.TraceValues}}),Object.defineProperty(t,"TraceFormat",{enumerable:!0,get:function(){return u.TraceFormat}}),Object.defineProperty(t,"SetTraceNotification",{enumerable:!0,get:function(){return u.SetTraceNotification}}),Object.defineProperty(t,"LogTraceNotification",{enumerable:!0,get:function(){return u.LogTraceNotification}}),Object.defineProperty(t,"ConnectionErrors",{enumerable:!0,get:function(){return u.ConnectionErrors}}),Object.defineProperty(t,"ConnectionError",{enumerable:!0,get:function(){return u.ConnectionError}}),Object.defineProperty(t,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return u.CancellationReceiverStrategy}}),Object.defineProperty(t,"CancellationSenderStrategy",{enumerable:!0,get:function(){return u.CancellationSenderStrategy}}),Object.defineProperty(t,"CancellationStrategy",{enumerable:!0,get:function(){return u.CancellationStrategy}}),Object.defineProperty(t,"MessageStrategy",{enumerable:!0,get:function(){return u.MessageStrategy}});const d=En;t.RAL=d.default}(_u)),_u}Object.defineProperty(zh,"__esModule",{value:!0});const Xt=Zp();class Ac extends Xt.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return Ac.emptyBuffer}fromString(e,n){return new TextEncoder().encode(e)}toString(e,n){return n==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(n).decode(e)}asNative(e,n){return n===void 0?e:e.slice(0,n)}allocNative(e){return new Uint8Array(e)}}Ac.emptyBuffer=new Uint8Array(0);class lI{constructor(e){this.socket=e,this._onData=new Xt.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Xt.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Xt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Xt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Xt.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}}class cI{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Xt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Xt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Xt.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,n){if(typeof e=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}}const uI=new TextEncoder,ST=Object.freeze({messageBuffer:Object.freeze({create:t=>new Ac(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(uI.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new lI(t),asWritableStream:t=>new cI(t)}),console,timer:Object.freeze({setTimeout(t,e,...n){const r=setTimeout(t,e,...n);return{dispose:()=>clearTimeout(r)}},setImmediate(t,...e){const n=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(n)}},setInterval(t,e,...n){const r=setInterval(t,e,...n);return{dispose:()=>clearInterval(r)}}})});function eh(){return ST}(function(t){function e(){Xt.RAL.install(ST)}t.install=e})(eh||(eh={}));zh.default=eh;(function(t){var e=De&&De.__createBinding||(Object.create?function(l,c,u,d){d===void 0&&(d=u);var p=Object.getOwnPropertyDescriptor(c,u);(!p||("get"in p?!c.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,d,p)}:function(l,c,u,d){d===void 0&&(d=u),l[d]=c[u]}),n=De&&De.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.BrowserMessageWriter=t.BrowserMessageReader=void 0,zh.default.install();const i=Zp();n(Zp(),t);class s extends i.AbstractMessageReader{constructor(c){super(),this._onData=new i.Emitter,this._messageListener=u=>{this._onData.fire(u.data)},c.addEventListener("error",u=>this.fireError(u)),c.onmessage=this._messageListener}listen(c){return this._onData.event(c)}}t.BrowserMessageReader=s;class a extends i.AbstractMessageWriter{constructor(c){super(),this.port=c,this.errorCount=0,c.addEventListener("error",u=>this.fireError(u))}write(c){try{return this.port.postMessage(c),Promise.resolve()}catch(u){return this.handleError(u,c),Promise.reject(u)}}handleError(c,u){this.errorCount++,this.fireError(c,u,this.errorCount)}end(){}}t.BrowserMessageWriter=a;function o(l,c,u,d){return u===void 0&&(u=i.NullLogger),i.ConnectionStrategy.is(d)&&(d={connectionStrategy:d}),(0,i.createMessageConnection)(l,c,u,d)}t.createMessageConnection=o})(_r);var Mg=_r,CT={},Vh=zN(SN),J={};Object.defineProperty(J,"__esModule",{value:!0});J.ProtocolNotificationType=J.ProtocolNotificationType0=J.ProtocolRequestType=J.ProtocolRequestType0=J.RegistrationType=J.MessageDirection=void 0;const Ur=_r;var Lg;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Lg||(J.MessageDirection=Lg={}));class dI{constructor(e){this.method=e}}J.RegistrationType=dI;class fI extends Ur.RequestType0{constructor(e){super(e)}}J.ProtocolRequestType0=fI;class pI extends Ur.RequestType{constructor(e){super(e,Ur.ParameterStructures.byName)}}J.ProtocolRequestType=pI;class hI extends Ur.NotificationType0{constructor(e){super(e)}}J.ProtocolNotificationType0=hI;class mI extends Ur.NotificationType{constructor(e){super(e,Ur.ParameterStructures.byName)}}J.ProtocolNotificationType=mI;var AT={},Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.objectLiteral=Se.typedArray=Se.stringArray=Se.array=Se.func=Se.error=Se.number=Se.string=Se.boolean=void 0;function gI(t){return t===!0||t===!1}Se.boolean=gI;function ET(t){return typeof t=="string"||t instanceof String}Se.string=ET;function yI(t){return typeof t=="number"||t instanceof Number}Se.number=yI;function _I(t){return t instanceof Error}Se.error=_I;function vI(t){return typeof t=="function"}Se.func=vI;function PT(t){return Array.isArray(t)}Se.array=PT;function RI(t){return PT(t)&&t.every(e=>ET(e))}Se.stringArray=RI;function TI(t,e){return Array.isArray(t)&&t.every(e)}Se.typedArray=TI;function $I(t){return t!==null&&typeof t=="object"}Se.objectLiteral=$I;var Ec={};Object.defineProperty(Ec,"__esModule",{value:!0});Ec.ImplementationRequest=void 0;const Fg=J;var Ug;(function(t){t.method="textDocument/implementation",t.messageDirection=Fg.MessageDirection.clientToServer,t.type=new Fg.ProtocolRequestType(t.method)})(Ug||(Ec.ImplementationRequest=Ug={}));var Pc={};Object.defineProperty(Pc,"__esModule",{value:!0});Pc.TypeDefinitionRequest=void 0;const Hg=J;var Bg;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Hg.MessageDirection.clientToServer,t.type=new Hg.ProtocolRequestType(t.method)})(Bg||(Pc.TypeDefinitionRequest=Bg={}));var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.DidChangeWorkspaceFoldersNotification=Hr.WorkspaceFoldersRequest=void 0;const Jl=J;var jg;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Jl.MessageDirection.serverToClient,t.type=new Jl.ProtocolRequestType0(t.method)})(jg||(Hr.WorkspaceFoldersRequest=jg={}));var Kg;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Jl.MessageDirection.clientToServer,t.type=new Jl.ProtocolNotificationType(t.method)})(Kg||(Hr.DidChangeWorkspaceFoldersNotification=Kg={}));var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.ConfigurationRequest=void 0;const qg=J;var Gg;(function(t){t.method="workspace/configuration",t.messageDirection=qg.MessageDirection.serverToClient,t.type=new qg.ProtocolRequestType(t.method)})(Gg||(Nc.ConfigurationRequest=Gg={}));var Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.ColorPresentationRequest=Br.DocumentColorRequest=void 0;const Ql=J;var Wg;(function(t){t.method="textDocument/documentColor",t.messageDirection=Ql.MessageDirection.clientToServer,t.type=new Ql.ProtocolRequestType(t.method)})(Wg||(Br.DocumentColorRequest=Wg={}));var zg;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Ql.MessageDirection.clientToServer,t.type=new Ql.ProtocolRequestType(t.method)})(zg||(Br.ColorPresentationRequest=zg={}));var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.FoldingRangeRefreshRequest=jr.FoldingRangeRequest=void 0;const Zl=J;var Vg;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Zl.MessageDirection.clientToServer,t.type=new Zl.ProtocolRequestType(t.method)})(Vg||(jr.FoldingRangeRequest=Vg={}));var Yg;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=Zl.MessageDirection.serverToClient,t.type=new Zl.ProtocolRequestType0(t.method)})(Yg||(jr.FoldingRangeRefreshRequest=Yg={}));var Ic={};Object.defineProperty(Ic,"__esModule",{value:!0});Ic.DeclarationRequest=void 0;const Xg=J;var Jg;(function(t){t.method="textDocument/declaration",t.messageDirection=Xg.MessageDirection.clientToServer,t.type=new Xg.ProtocolRequestType(t.method)})(Jg||(Ic.DeclarationRequest=Jg={}));var Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.SelectionRangeRequest=void 0;const Qg=J;var Zg;(function(t){t.method="textDocument/selectionRange",t.messageDirection=Qg.MessageDirection.clientToServer,t.type=new Qg.ProtocolRequestType(t.method)})(Zg||(Oc.SelectionRangeRequest=Zg={}));var xn={};Object.defineProperty(xn,"__esModule",{value:!0});xn.WorkDoneProgressCancelNotification=xn.WorkDoneProgressCreateRequest=xn.WorkDoneProgress=void 0;const kI=_r,ec=J;var ey;(function(t){t.type=new kI.ProgressType;function e(n){return n===t.type}t.is=e})(ey||(xn.WorkDoneProgress=ey={}));var ty;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=ec.MessageDirection.serverToClient,t.type=new ec.ProtocolRequestType(t.method)})(ty||(xn.WorkDoneProgressCreateRequest=ty={}));var ny;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=ec.MessageDirection.clientToServer,t.type=new ec.ProtocolNotificationType(t.method)})(ny||(xn.WorkDoneProgressCancelNotification=ny={}));var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.CallHierarchyOutgoingCallsRequest=Mn.CallHierarchyIncomingCallsRequest=Mn.CallHierarchyPrepareRequest=void 0;const Kr=J;var ry;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Kr.MessageDirection.clientToServer,t.type=new Kr.ProtocolRequestType(t.method)})(ry||(Mn.CallHierarchyPrepareRequest=ry={}));var iy;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Kr.MessageDirection.clientToServer,t.type=new Kr.ProtocolRequestType(t.method)})(iy||(Mn.CallHierarchyIncomingCallsRequest=iy={}));var sy;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Kr.MessageDirection.clientToServer,t.type=new Kr.ProtocolRequestType(t.method)})(sy||(Mn.CallHierarchyOutgoingCallsRequest=sy={}));var ut={};Object.defineProperty(ut,"__esModule",{value:!0});ut.SemanticTokensRefreshRequest=ut.SemanticTokensRangeRequest=ut.SemanticTokensDeltaRequest=ut.SemanticTokensRequest=ut.SemanticTokensRegistrationType=ut.TokenFormat=void 0;const wn=J;var ay;(function(t){t.Relative="relative"})(ay||(ut.TokenFormat=ay={}));var Ns;(function(t){t.method="textDocument/semanticTokens",t.type=new wn.RegistrationType(t.method)})(Ns||(ut.SemanticTokensRegistrationType=Ns={}));var oy;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=wn.MessageDirection.clientToServer,t.type=new wn.ProtocolRequestType(t.method),t.registrationMethod=Ns.method})(oy||(ut.SemanticTokensRequest=oy={}));var ly;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=wn.MessageDirection.clientToServer,t.type=new wn.ProtocolRequestType(t.method),t.registrationMethod=Ns.method})(ly||(ut.SemanticTokensDeltaRequest=ly={}));var cy;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=wn.MessageDirection.clientToServer,t.type=new wn.ProtocolRequestType(t.method),t.registrationMethod=Ns.method})(cy||(ut.SemanticTokensRangeRequest=cy={}));var uy;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=wn.MessageDirection.serverToClient,t.type=new wn.ProtocolRequestType0(t.method)})(uy||(ut.SemanticTokensRefreshRequest=uy={}));var Dc={};Object.defineProperty(Dc,"__esModule",{value:!0});Dc.ShowDocumentRequest=void 0;const dy=J;var fy;(function(t){t.method="window/showDocument",t.messageDirection=dy.MessageDirection.serverToClient,t.type=new dy.ProtocolRequestType(t.method)})(fy||(Dc.ShowDocumentRequest=fy={}));var xc={};Object.defineProperty(xc,"__esModule",{value:!0});xc.LinkedEditingRangeRequest=void 0;const py=J;var hy;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=py.MessageDirection.clientToServer,t.type=new py.ProtocolRequestType(t.method)})(hy||(xc.LinkedEditingRangeRequest=hy={}));var Ze={};Object.defineProperty(Ze,"__esModule",{value:!0});Ze.WillDeleteFilesRequest=Ze.DidDeleteFilesNotification=Ze.DidRenameFilesNotification=Ze.WillRenameFilesRequest=Ze.DidCreateFilesNotification=Ze.WillCreateFilesRequest=Ze.FileOperationPatternKind=void 0;const Dt=J;var my;(function(t){t.file="file",t.folder="folder"})(my||(Ze.FileOperationPatternKind=my={}));var gy;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolRequestType(t.method)})(gy||(Ze.WillCreateFilesRequest=gy={}));var yy;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolNotificationType(t.method)})(yy||(Ze.DidCreateFilesNotification=yy={}));var _y;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolRequestType(t.method)})(_y||(Ze.WillRenameFilesRequest=_y={}));var vy;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolNotificationType(t.method)})(vy||(Ze.DidRenameFilesNotification=vy={}));var Ry;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolNotificationType(t.method)})(Ry||(Ze.DidDeleteFilesNotification=Ry={}));var Ty;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Dt.MessageDirection.clientToServer,t.type=new Dt.ProtocolRequestType(t.method)})(Ty||(Ze.WillDeleteFilesRequest=Ty={}));var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.MonikerRequest=Ln.MonikerKind=Ln.UniquenessLevel=void 0;const $y=J;var ky;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(ky||(Ln.UniquenessLevel=ky={}));var wy;(function(t){t.$import="import",t.$export="export",t.local="local"})(wy||(Ln.MonikerKind=wy={}));var by;(function(t){t.method="textDocument/moniker",t.messageDirection=$y.MessageDirection.clientToServer,t.type=new $y.ProtocolRequestType(t.method)})(by||(Ln.MonikerRequest=by={}));var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.TypeHierarchySubtypesRequest=Fn.TypeHierarchySupertypesRequest=Fn.TypeHierarchyPrepareRequest=void 0;const qr=J;var Sy;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=qr.MessageDirection.clientToServer,t.type=new qr.ProtocolRequestType(t.method)})(Sy||(Fn.TypeHierarchyPrepareRequest=Sy={}));var Cy;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=qr.MessageDirection.clientToServer,t.type=new qr.ProtocolRequestType(t.method)})(Cy||(Fn.TypeHierarchySupertypesRequest=Cy={}));var Ay;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=qr.MessageDirection.clientToServer,t.type=new qr.ProtocolRequestType(t.method)})(Ay||(Fn.TypeHierarchySubtypesRequest=Ay={}));var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.InlineValueRefreshRequest=Gr.InlineValueRequest=void 0;const tc=J;var Ey;(function(t){t.method="textDocument/inlineValue",t.messageDirection=tc.MessageDirection.clientToServer,t.type=new tc.ProtocolRequestType(t.method)})(Ey||(Gr.InlineValueRequest=Ey={}));var Py;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=tc.MessageDirection.serverToClient,t.type=new tc.ProtocolRequestType0(t.method)})(Py||(Gr.InlineValueRefreshRequest=Py={}));var Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.InlayHintRefreshRequest=Un.InlayHintResolveRequest=Un.InlayHintRequest=void 0;const Wr=J;var Ny;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Wr.MessageDirection.clientToServer,t.type=new Wr.ProtocolRequestType(t.method)})(Ny||(Un.InlayHintRequest=Ny={}));var Iy;(function(t){t.method="inlayHint/resolve",t.messageDirection=Wr.MessageDirection.clientToServer,t.type=new Wr.ProtocolRequestType(t.method)})(Iy||(Un.InlayHintResolveRequest=Iy={}));var Oy;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Wr.MessageDirection.serverToClient,t.type=new Wr.ProtocolRequestType0(t.method)})(Oy||(Un.InlayHintRefreshRequest=Oy={}));var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0});Ct.DiagnosticRefreshRequest=Ct.WorkspaceDiagnosticRequest=Ct.DocumentDiagnosticRequest=Ct.DocumentDiagnosticReportKind=Ct.DiagnosticServerCancellationData=void 0;const NT=_r,wI=Se,zr=J;var Dy;(function(t){function e(n){const r=n;return r&&wI.boolean(r.retriggerRequest)}t.is=e})(Dy||(Ct.DiagnosticServerCancellationData=Dy={}));var xy;(function(t){t.Full="full",t.Unchanged="unchanged"})(xy||(Ct.DocumentDiagnosticReportKind=xy={}));var My;(function(t){t.method="textDocument/diagnostic",t.messageDirection=zr.MessageDirection.clientToServer,t.type=new zr.ProtocolRequestType(t.method),t.partialResult=new NT.ProgressType})(My||(Ct.DocumentDiagnosticRequest=My={}));var Ly;(function(t){t.method="workspace/diagnostic",t.messageDirection=zr.MessageDirection.clientToServer,t.type=new zr.ProtocolRequestType(t.method),t.partialResult=new NT.ProgressType})(Ly||(Ct.WorkspaceDiagnosticRequest=Ly={}));var Fy;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=zr.MessageDirection.serverToClient,t.type=new zr.ProtocolRequestType0(t.method)})(Fy||(Ct.DiagnosticRefreshRequest=Fy={}));var be={};Object.defineProperty(be,"__esModule",{value:!0});be.DidCloseNotebookDocumentNotification=be.DidSaveNotebookDocumentNotification=be.DidChangeNotebookDocumentNotification=be.NotebookCellArrayChange=be.DidOpenNotebookDocumentNotification=be.NotebookDocumentSyncRegistrationType=be.NotebookDocument=be.NotebookCell=be.ExecutionSummary=be.NotebookCellKind=void 0;const Is=Vh,Ft=Se,rn=J;var th;(function(t){t.Markup=1,t.Code=2;function e(n){return n===1||n===2}t.is=e})(th||(be.NotebookCellKind=th={}));var nh;(function(t){function e(i,s){const a={executionOrder:i};return(s===!0||s===!1)&&(a.success=s),a}t.create=e;function n(i){const s=i;return Ft.objectLiteral(s)&&Is.uinteger.is(s.executionOrder)&&(s.success===void 0||Ft.boolean(s.success))}t.is=n;function r(i,s){return i===s?!0:i==null||s===null||s===void 0?!1:i.executionOrder===s.executionOrder&&i.success===s.success}t.equals=r})(nh||(be.ExecutionSummary=nh={}));var nc;(function(t){function e(s,a){return{kind:s,document:a}}t.create=e;function n(s){const a=s;return Ft.objectLiteral(a)&&th.is(a.kind)&&Is.DocumentUri.is(a.document)&&(a.metadata===void 0||Ft.objectLiteral(a.metadata))}t.is=n;function r(s,a){const o=new Set;return s.document!==a.document&&o.add("document"),s.kind!==a.kind&&o.add("kind"),s.executionSummary!==a.executionSummary&&o.add("executionSummary"),(s.metadata!==void 0||a.metadata!==void 0)&&!i(s.metadata,a.metadata)&&o.add("metadata"),(s.executionSummary!==void 0||a.executionSummary!==void 0)&&!nh.equals(s.executionSummary,a.executionSummary)&&o.add("executionSummary"),o}t.diff=r;function i(s,a){if(s===a)return!0;if(s==null||a===null||a===void 0||typeof s!=typeof a||typeof s!="object")return!1;const o=Array.isArray(s),l=Array.isArray(a);if(o!==l)return!1;if(o&&l){if(s.length!==a.length)return!1;for(let c=0;c<s.length;c++)if(!i(s[c],a[c]))return!1}if(Ft.objectLiteral(s)&&Ft.objectLiteral(a)){const c=Object.keys(s),u=Object.keys(a);if(c.length!==u.length||(c.sort(),u.sort(),!i(c,u)))return!1;for(let d=0;d<c.length;d++){const p=c[d];if(!i(s[p],a[p]))return!1}}return!0}})(nc||(be.NotebookCell=nc={}));var Uy;(function(t){function e(r,i,s,a){return{uri:r,notebookType:i,version:s,cells:a}}t.create=e;function n(r){const i=r;return Ft.objectLiteral(i)&&Ft.string(i.uri)&&Is.integer.is(i.version)&&Ft.typedArray(i.cells,nc.is)}t.is=n})(Uy||(be.NotebookDocument=Uy={}));var Vr;(function(t){t.method="notebookDocument/sync",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.RegistrationType(t.method)})(Vr||(be.NotebookDocumentSyncRegistrationType=Vr={}));var Hy;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=Vr.method})(Hy||(be.DidOpenNotebookDocumentNotification=Hy={}));var By;(function(t){function e(r){const i=r;return Ft.objectLiteral(i)&&Is.uinteger.is(i.start)&&Is.uinteger.is(i.deleteCount)&&(i.cells===void 0||Ft.typedArray(i.cells,nc.is))}t.is=e;function n(r,i,s){const a={start:r,deleteCount:i};return s!==void 0&&(a.cells=s),a}t.create=n})(By||(be.NotebookCellArrayChange=By={}));var jy;(function(t){t.method="notebookDocument/didChange",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=Vr.method})(jy||(be.DidChangeNotebookDocumentNotification=jy={}));var Ky;(function(t){t.method="notebookDocument/didSave",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=Vr.method})(Ky||(be.DidSaveNotebookDocumentNotification=Ky={}));var qy;(function(t){t.method="notebookDocument/didClose",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=Vr.method})(qy||(be.DidCloseNotebookDocumentNotification=qy={}));var Mc={};Object.defineProperty(Mc,"__esModule",{value:!0});Mc.InlineCompletionRequest=void 0;const Gy=J;var Wy;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=Gy.MessageDirection.clientToServer,t.type=new Gy.ProtocolRequestType(t.method)})(Wy||(Mc.InlineCompletionRequest=Wy={}));(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSymbolRequest=t.CodeActionResolveRequest=t.CodeActionRequest=t.DocumentSymbolRequest=t.DocumentHighlightRequest=t.ReferencesRequest=t.DefinitionRequest=t.SignatureHelpRequest=t.SignatureHelpTriggerKind=t.HoverRequest=t.CompletionResolveRequest=t.CompletionRequest=t.CompletionTriggerKind=t.PublishDiagnosticsNotification=t.WatchKind=t.RelativePattern=t.FileChangeType=t.DidChangeWatchedFilesNotification=t.WillSaveTextDocumentWaitUntilRequest=t.WillSaveTextDocumentNotification=t.TextDocumentSaveReason=t.DidSaveTextDocumentNotification=t.DidCloseTextDocumentNotification=t.DidChangeTextDocumentNotification=t.TextDocumentContentChangeEvent=t.DidOpenTextDocumentNotification=t.TextDocumentSyncKind=t.TelemetryEventNotification=t.LogMessageNotification=t.ShowMessageRequest=t.ShowMessageNotification=t.MessageType=t.DidChangeConfigurationNotification=t.ExitNotification=t.ShutdownRequest=t.InitializedNotification=t.InitializeErrorCodes=t.InitializeRequest=t.WorkDoneProgressOptions=t.TextDocumentRegistrationOptions=t.StaticRegistrationOptions=t.PositionEncodingKind=t.FailureHandlingKind=t.ResourceOperationKind=t.UnregistrationRequest=t.RegistrationRequest=t.DocumentSelector=t.NotebookCellTextDocumentFilter=t.NotebookDocumentFilter=t.TextDocumentFilter=void 0,t.MonikerRequest=t.MonikerKind=t.UniquenessLevel=t.WillDeleteFilesRequest=t.DidDeleteFilesNotification=t.WillRenameFilesRequest=t.DidRenameFilesNotification=t.WillCreateFilesRequest=t.DidCreateFilesNotification=t.FileOperationPatternKind=t.LinkedEditingRangeRequest=t.ShowDocumentRequest=t.SemanticTokensRegistrationType=t.SemanticTokensRefreshRequest=t.SemanticTokensRangeRequest=t.SemanticTokensDeltaRequest=t.SemanticTokensRequest=t.TokenFormat=t.CallHierarchyPrepareRequest=t.CallHierarchyOutgoingCallsRequest=t.CallHierarchyIncomingCallsRequest=t.WorkDoneProgressCancelNotification=t.WorkDoneProgressCreateRequest=t.WorkDoneProgress=t.SelectionRangeRequest=t.DeclarationRequest=t.FoldingRangeRefreshRequest=t.FoldingRangeRequest=t.ColorPresentationRequest=t.DocumentColorRequest=t.ConfigurationRequest=t.DidChangeWorkspaceFoldersNotification=t.WorkspaceFoldersRequest=t.TypeDefinitionRequest=t.ImplementationRequest=t.ApplyWorkspaceEditRequest=t.ExecuteCommandRequest=t.PrepareRenameRequest=t.RenameRequest=t.PrepareSupportDefaultBehavior=t.DocumentOnTypeFormattingRequest=t.DocumentRangesFormattingRequest=t.DocumentRangeFormattingRequest=t.DocumentFormattingRequest=t.DocumentLinkResolveRequest=t.DocumentLinkRequest=t.CodeLensRefreshRequest=t.CodeLensResolveRequest=t.CodeLensRequest=t.WorkspaceSymbolResolveRequest=void 0,t.InlineCompletionRequest=t.DidCloseNotebookDocumentNotification=t.DidSaveNotebookDocumentNotification=t.DidChangeNotebookDocumentNotification=t.NotebookCellArrayChange=t.DidOpenNotebookDocumentNotification=t.NotebookDocumentSyncRegistrationType=t.NotebookDocument=t.NotebookCell=t.ExecutionSummary=t.NotebookCellKind=t.DiagnosticRefreshRequest=t.WorkspaceDiagnosticRequest=t.DocumentDiagnosticRequest=t.DocumentDiagnosticReportKind=t.DiagnosticServerCancellationData=t.InlayHintRefreshRequest=t.InlayHintResolveRequest=t.InlayHintRequest=t.InlineValueRefreshRequest=t.InlineValueRequest=t.TypeHierarchySupertypesRequest=t.TypeHierarchySubtypesRequest=t.TypeHierarchyPrepareRequest=void 0;const e=J,n=Vh,r=Se,i=Ec;Object.defineProperty(t,"ImplementationRequest",{enumerable:!0,get:function(){return i.ImplementationRequest}});const s=Pc;Object.defineProperty(t,"TypeDefinitionRequest",{enumerable:!0,get:function(){return s.TypeDefinitionRequest}});const a=Hr;Object.defineProperty(t,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return a.WorkspaceFoldersRequest}}),Object.defineProperty(t,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return a.DidChangeWorkspaceFoldersNotification}});const o=Nc;Object.defineProperty(t,"ConfigurationRequest",{enumerable:!0,get:function(){return o.ConfigurationRequest}});const l=Br;Object.defineProperty(t,"DocumentColorRequest",{enumerable:!0,get:function(){return l.DocumentColorRequest}}),Object.defineProperty(t,"ColorPresentationRequest",{enumerable:!0,get:function(){return l.ColorPresentationRequest}});const c=jr;Object.defineProperty(t,"FoldingRangeRequest",{enumerable:!0,get:function(){return c.FoldingRangeRequest}}),Object.defineProperty(t,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return c.FoldingRangeRefreshRequest}});const u=Ic;Object.defineProperty(t,"DeclarationRequest",{enumerable:!0,get:function(){return u.DeclarationRequest}});const d=Oc;Object.defineProperty(t,"SelectionRangeRequest",{enumerable:!0,get:function(){return d.SelectionRangeRequest}});const p=xn;Object.defineProperty(t,"WorkDoneProgress",{enumerable:!0,get:function(){return p.WorkDoneProgress}}),Object.defineProperty(t,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return p.WorkDoneProgressCreateRequest}}),Object.defineProperty(t,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return p.WorkDoneProgressCancelNotification}});const h=Mn;Object.defineProperty(t,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return h.CallHierarchyIncomingCallsRequest}}),Object.defineProperty(t,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return h.CallHierarchyOutgoingCallsRequest}}),Object.defineProperty(t,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return h.CallHierarchyPrepareRequest}});const f=ut;Object.defineProperty(t,"TokenFormat",{enumerable:!0,get:function(){return f.TokenFormat}}),Object.defineProperty(t,"SemanticTokensRequest",{enumerable:!0,get:function(){return f.SemanticTokensRequest}}),Object.defineProperty(t,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return f.SemanticTokensDeltaRequest}}),Object.defineProperty(t,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return f.SemanticTokensRangeRequest}}),Object.defineProperty(t,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return f.SemanticTokensRefreshRequest}}),Object.defineProperty(t,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return f.SemanticTokensRegistrationType}});const y=Dc;Object.defineProperty(t,"ShowDocumentRequest",{enumerable:!0,get:function(){return y.ShowDocumentRequest}});const $=xc;Object.defineProperty(t,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return $.LinkedEditingRangeRequest}});const v=Ze;Object.defineProperty(t,"FileOperationPatternKind",{enumerable:!0,get:function(){return v.FileOperationPatternKind}}),Object.defineProperty(t,"DidCreateFilesNotification",{enumerable:!0,get:function(){return v.DidCreateFilesNotification}}),Object.defineProperty(t,"WillCreateFilesRequest",{enumerable:!0,get:function(){return v.WillCreateFilesRequest}}),Object.defineProperty(t,"DidRenameFilesNotification",{enumerable:!0,get:function(){return v.DidRenameFilesNotification}}),Object.defineProperty(t,"WillRenameFilesRequest",{enumerable:!0,get:function(){return v.WillRenameFilesRequest}}),Object.defineProperty(t,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return v.DidDeleteFilesNotification}}),Object.defineProperty(t,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return v.WillDeleteFilesRequest}});const m=Ln;Object.defineProperty(t,"UniquenessLevel",{enumerable:!0,get:function(){return m.UniquenessLevel}}),Object.defineProperty(t,"MonikerKind",{enumerable:!0,get:function(){return m.MonikerKind}}),Object.defineProperty(t,"MonikerRequest",{enumerable:!0,get:function(){return m.MonikerRequest}});const g=Fn;Object.defineProperty(t,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return g.TypeHierarchyPrepareRequest}}),Object.defineProperty(t,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return g.TypeHierarchySubtypesRequest}}),Object.defineProperty(t,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return g.TypeHierarchySupertypesRequest}});const k=Gr;Object.defineProperty(t,"InlineValueRequest",{enumerable:!0,get:function(){return k.InlineValueRequest}}),Object.defineProperty(t,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return k.InlineValueRefreshRequest}});const F=Un;Object.defineProperty(t,"InlayHintRequest",{enumerable:!0,get:function(){return F.InlayHintRequest}}),Object.defineProperty(t,"InlayHintResolveRequest",{enumerable:!0,get:function(){return F.InlayHintResolveRequest}}),Object.defineProperty(t,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return F.InlayHintRefreshRequest}});const G=Ct;Object.defineProperty(t,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return G.DiagnosticServerCancellationData}}),Object.defineProperty(t,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return G.DocumentDiagnosticReportKind}}),Object.defineProperty(t,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return G.DocumentDiagnosticRequest}}),Object.defineProperty(t,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return G.WorkspaceDiagnosticRequest}}),Object.defineProperty(t,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return G.DiagnosticRefreshRequest}});const X=be;Object.defineProperty(t,"NotebookCellKind",{enumerable:!0,get:function(){return X.NotebookCellKind}}),Object.defineProperty(t,"ExecutionSummary",{enumerable:!0,get:function(){return X.ExecutionSummary}}),Object.defineProperty(t,"NotebookCell",{enumerable:!0,get:function(){return X.NotebookCell}}),Object.defineProperty(t,"NotebookDocument",{enumerable:!0,get:function(){return X.NotebookDocument}}),Object.defineProperty(t,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return X.NotebookDocumentSyncRegistrationType}}),Object.defineProperty(t,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidOpenNotebookDocumentNotification}}),Object.defineProperty(t,"NotebookCellArrayChange",{enumerable:!0,get:function(){return X.NotebookCellArrayChange}}),Object.defineProperty(t,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidChangeNotebookDocumentNotification}}),Object.defineProperty(t,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidSaveNotebookDocumentNotification}}),Object.defineProperty(t,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidCloseNotebookDocumentNotification}});const ye=Mc;Object.defineProperty(t,"InlineCompletionRequest",{enumerable:!0,get:function(){return ye.InlineCompletionRequest}});var Re;(function(_){function Pe(Ne){const W=Ne;return r.string(W)||r.string(W.language)||r.string(W.scheme)||r.string(W.pattern)}_.is=Pe})(Re||(t.TextDocumentFilter=Re={}));var Te;(function(_){function Pe(Ne){const W=Ne;return r.objectLiteral(W)&&(r.string(W.notebookType)||r.string(W.scheme)||r.string(W.pattern))}_.is=Pe})(Te||(t.NotebookDocumentFilter=Te={}));var P;(function(_){function Pe(Ne){const W=Ne;return r.objectLiteral(W)&&(r.string(W.notebook)||Te.is(W.notebook))&&(W.language===void 0||r.string(W.language))}_.is=Pe})(P||(t.NotebookCellTextDocumentFilter=P={}));var b;(function(_){function Pe(Ne){if(!Array.isArray(Ne))return!1;for(let W of Ne)if(!r.string(W)&&!Re.is(W)&&!P.is(W))return!1;return!0}_.is=Pe})(b||(t.DocumentSelector=b={}));var T;(function(_){_.method="client/registerCapability",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolRequestType(_.method)})(T||(t.RegistrationRequest=T={}));var S;(function(_){_.method="client/unregisterCapability",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolRequestType(_.method)})(S||(t.UnregistrationRequest=S={}));var I;(function(_){_.Create="create",_.Rename="rename",_.Delete="delete"})(I||(t.ResourceOperationKind=I={}));var E;(function(_){_.Abort="abort",_.Transactional="transactional",_.TextOnlyTransactional="textOnlyTransactional",_.Undo="undo"})(E||(t.FailureHandlingKind=E={}));var N;(function(_){_.UTF8="utf-8",_.UTF16="utf-16",_.UTF32="utf-32"})(N||(t.PositionEncodingKind=N={}));var Fe;(function(_){function Pe(Ne){const W=Ne;return W&&r.string(W.id)&&W.id.length>0}_.hasId=Pe})(Fe||(t.StaticRegistrationOptions=Fe={}));var x;(function(_){function Pe(Ne){const W=Ne;return W&&(W.documentSelector===null||b.is(W.documentSelector))}_.is=Pe})(x||(t.TextDocumentRegistrationOptions=x={}));var C;(function(_){function Pe(W){const R=W;return r.objectLiteral(R)&&(R.workDoneProgress===void 0||r.boolean(R.workDoneProgress))}_.is=Pe;function Ne(W){const R=W;return R&&r.boolean(R.workDoneProgress)}_.hasWorkDoneProgress=Ne})(C||(t.WorkDoneProgressOptions=C={}));var te;(function(_){_.method="initialize",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(te||(t.InitializeRequest=te={}));var Gt;(function(_){_.unknownProtocolVersion=1})(Gt||(t.InitializeErrorCodes=Gt={}));var Wt;(function(_){_.method="initialized",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(Wt||(t.InitializedNotification=Wt={}));var xe;(function(_){_.method="shutdown",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType0(_.method)})(xe||(t.ShutdownRequest=xe={}));var zt;(function(_){_.method="exit",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType0(_.method)})(zt||(t.ExitNotification=zt={}));var _e;(function(_){_.method="workspace/didChangeConfiguration",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(_e||(t.DidChangeConfigurationNotification=_e={}));var Ue;(function(_){_.Error=1,_.Warning=2,_.Info=3,_.Log=4,_.Debug=5})(Ue||(t.MessageType=Ue={}));var Ge;(function(_){_.method="window/showMessage",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolNotificationType(_.method)})(Ge||(t.ShowMessageNotification=Ge={}));var ve;(function(_){_.method="window/showMessageRequest",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolRequestType(_.method)})(ve||(t.ShowMessageRequest=ve={}));var We;(function(_){_.method="window/logMessage",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolNotificationType(_.method)})(We||(t.LogMessageNotification=We={}));var Ee;(function(_){_.method="telemetry/event",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolNotificationType(_.method)})(Ee||(t.TelemetryEventNotification=Ee={}));var V;(function(_){_.None=0,_.Full=1,_.Incremental=2})(V||(t.TextDocumentSyncKind=V={}));var Ke;(function(_){_.method="textDocument/didOpen",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(Ke||(t.DidOpenTextDocumentNotification=Ke={}));var ue;(function(_){function Pe(W){let R=W;return R!=null&&typeof R.text=="string"&&R.range!==void 0&&(R.rangeLength===void 0||typeof R.rangeLength=="number")}_.isIncremental=Pe;function Ne(W){let R=W;return R!=null&&typeof R.text=="string"&&R.range===void 0&&R.rangeLength===void 0}_.isFull=Ne})(ue||(t.TextDocumentContentChangeEvent=ue={}));var ct;(function(_){_.method="textDocument/didChange",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(ct||(t.DidChangeTextDocumentNotification=ct={}));var vr;(function(_){_.method="textDocument/didClose",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(vr||(t.DidCloseTextDocumentNotification=vr={}));var Zr;(function(_){_.method="textDocument/didSave",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(Zr||(t.DidSaveTextDocumentNotification=Zr={}));var ei;(function(_){_.Manual=1,_.AfterDelay=2,_.FocusOut=3})(ei||(t.TextDocumentSaveReason=ei={}));var ti;(function(_){_.method="textDocument/willSave",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(ti||(t.WillSaveTextDocumentNotification=ti={}));var ni;(function(_){_.method="textDocument/willSaveWaitUntil",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ni||(t.WillSaveTextDocumentWaitUntilRequest=ni={}));var xt;(function(_){_.method="workspace/didChangeWatchedFiles",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolNotificationType(_.method)})(xt||(t.DidChangeWatchedFilesNotification=xt={}));var ri;(function(_){_.Created=1,_.Changed=2,_.Deleted=3})(ri||(t.FileChangeType=ri={}));var Js;(function(_){function Pe(Ne){const W=Ne;return r.objectLiteral(W)&&(n.URI.is(W.baseUri)||n.WorkspaceFolder.is(W.baseUri))&&r.string(W.pattern)}_.is=Pe})(Js||(t.RelativePattern=Js={}));var Qs;(function(_){_.Create=1,_.Change=2,_.Delete=4})(Qs||(t.WatchKind=Qs={}));var Zs;(function(_){_.method="textDocument/publishDiagnostics",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolNotificationType(_.method)})(Zs||(t.PublishDiagnosticsNotification=Zs={}));var ea;(function(_){_.Invoked=1,_.TriggerCharacter=2,_.TriggerForIncompleteCompletions=3})(ea||(t.CompletionTriggerKind=ea={}));var ii;(function(_){_.method="textDocument/completion",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ii||(t.CompletionRequest=ii={}));var si;(function(_){_.method="completionItem/resolve",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(si||(t.CompletionResolveRequest=si={}));var ln;(function(_){_.method="textDocument/hover",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ln||(t.HoverRequest=ln={}));var ai;(function(_){_.Invoked=1,_.TriggerCharacter=2,_.ContentChange=3})(ai||(t.SignatureHelpTriggerKind=ai={}));var ta;(function(_){_.method="textDocument/signatureHelp",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ta||(t.SignatureHelpRequest=ta={}));var na;(function(_){_.method="textDocument/definition",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(na||(t.DefinitionRequest=na={}));var oi;(function(_){_.method="textDocument/references",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(oi||(t.ReferencesRequest=oi={}));var li;(function(_){_.method="textDocument/documentHighlight",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(li||(t.DocumentHighlightRequest=li={}));var ra;(function(_){_.method="textDocument/documentSymbol",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ra||(t.DocumentSymbolRequest=ra={}));var ia;(function(_){_.method="textDocument/codeAction",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ia||(t.CodeActionRequest=ia={}));var sa;(function(_){_.method="codeAction/resolve",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(sa||(t.CodeActionResolveRequest=sa={}));var aa;(function(_){_.method="workspace/symbol",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(aa||(t.WorkspaceSymbolRequest=aa={}));var oa;(function(_){_.method="workspaceSymbol/resolve",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(oa||(t.WorkspaceSymbolResolveRequest=oa={}));var la;(function(_){_.method="textDocument/codeLens",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(la||(t.CodeLensRequest=la={}));var Mt;(function(_){_.method="codeLens/resolve",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(Mt||(t.CodeLensResolveRequest=Mt={}));var ca;(function(_){_.method="workspace/codeLens/refresh",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolRequestType0(_.method)})(ca||(t.CodeLensRefreshRequest=ca={}));var ua;(function(_){_.method="textDocument/documentLink",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ua||(t.DocumentLinkRequest=ua={}));var Qn;(function(_){_.method="documentLink/resolve",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(Qn||(t.DocumentLinkResolveRequest=Qn={}));var da;(function(_){_.method="textDocument/formatting",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(da||(t.DocumentFormattingRequest=da={}));var Rr;(function(_){_.method="textDocument/rangeFormatting",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(Rr||(t.DocumentRangeFormattingRequest=Rr={}));var fa;(function(_){_.method="textDocument/rangesFormatting",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(fa||(t.DocumentRangesFormattingRequest=fa={}));var cn;(function(_){_.method="textDocument/onTypeFormatting",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(cn||(t.DocumentOnTypeFormattingRequest=cn={}));var Nn;(function(_){_.Identifier=1})(Nn||(t.PrepareSupportDefaultBehavior=Nn={}));var pa;(function(_){_.method="textDocument/rename",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(pa||(t.RenameRequest=pa={}));var ha;(function(_){_.method="textDocument/prepareRename",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(ha||(t.PrepareRenameRequest=ha={}));var In;(function(_){_.method="workspace/executeCommand",_.messageDirection=e.MessageDirection.clientToServer,_.type=new e.ProtocolRequestType(_.method)})(In||(t.ExecuteCommandRequest=In={}));var ci;(function(_){_.method="workspace/applyEdit",_.messageDirection=e.MessageDirection.serverToClient,_.type=new e.ProtocolRequestType("workspace/applyEdit")})(ci||(t.ApplyWorkspaceEditRequest=ci={}))})(AT);var Lc={};Object.defineProperty(Lc,"__esModule",{value:!0});Lc.createProtocolConnection=void 0;const zy=_r;function bI(t,e,n,r){return zy.ConnectionStrategy.is(r)&&(r={connectionStrategy:r}),(0,zy.createMessageConnection)(t,e,n,r)}Lc.createProtocolConnection=bI;(function(t){var e=De&&De.__createBinding||(Object.create?function(s,a,o,l){l===void 0&&(l=o);var c=Object.getOwnPropertyDescriptor(a,o);(!c||("get"in c?!a.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(s,l,c)}:function(s,a,o,l){l===void 0&&(l=o),s[l]=a[o]}),n=De&&De.__exportStar||function(s,a){for(var o in s)o!=="default"&&!Object.prototype.hasOwnProperty.call(a,o)&&e(a,s,o)};Object.defineProperty(t,"__esModule",{value:!0}),t.LSPErrorCodes=t.createProtocolConnection=void 0,n(_r,t),n(Vh,t),n(J,t),n(AT,t);var r=Lc;Object.defineProperty(t,"createProtocolConnection",{enumerable:!0,get:function(){return r.createProtocolConnection}});var i;(function(s){s.lspReservedErrorRangeStart=-32899,s.RequestFailed=-32803,s.ServerCancelled=-32802,s.ContentModified=-32801,s.RequestCancelled=-32800,s.lspReservedErrorRangeEnd=-32800})(i||(t.LSPErrorCodes=i={}))})(CT);(function(t){var e=De&&De.__createBinding||(Object.create?function(s,a,o,l){l===void 0&&(l=o);var c=Object.getOwnPropertyDescriptor(a,o);(!c||("get"in c?!a.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(s,l,c)}:function(s,a,o,l){l===void 0&&(l=o),s[l]=a[o]}),n=De&&De.__exportStar||function(s,a){for(var o in s)o!=="default"&&!Object.prototype.hasOwnProperty.call(a,o)&&e(a,s,o)};Object.defineProperty(t,"__esModule",{value:!0}),t.createProtocolConnection=void 0;const r=Mg;n(Mg,t),n(CT,t);function i(s,a,o,l){return(0,r.createMessageConnection)(s,a,o,l)}t.createProtocolConnection=i})(ae);Object.defineProperty(_n,"__esModule",{value:!0});_n.SemanticTokensBuilder=_n.SemanticTokensDiff=_n.SemanticTokensFeature=void 0;const Na=ae,SI=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Na.SemanticTokensRefreshRequest.type),on:e=>{const n=Na.SemanticTokensRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onDelta:e=>{const n=Na.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onRange:e=>{const n=Na.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};_n.SemanticTokensFeature=SI;class IT{constructor(e,n){this.originalSequence=e,this.modifiedSequence=n}computeDiff(){const e=this.originalSequence.length,n=this.modifiedSequence.length;let r=0;for(;r<n&&r<e&&this.originalSequence[r]===this.modifiedSequence[r];)r++;if(r<n&&r<e){let i=e-1,s=n-1;for(;i>=r&&s>=r&&this.originalSequence[i]===this.modifiedSequence[s];)i--,s--;(i<r||s<r)&&(i++,s++);const a=i-r+1,o=this.modifiedSequence.slice(r,s+1);return o.length===1&&o[0]===this.originalSequence[i]?[{start:r,deleteCount:a-1}]:[{start:r,deleteCount:a,data:o}]}else return r<n?[{start:r,deleteCount:0,data:this.modifiedSequence.slice(r)}]:r<e?[{start:r,deleteCount:e-r}]:[]}}_n.SemanticTokensDiff=IT;let CI=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,n,r,i,s){let a=e,o=n;this._dataLen>0&&(a-=this._prevLine,a===0&&(o-=this._prevChar)),this._data[this._dataLen++]=a,this._data[this._dataLen++]=o,this._data[this._dataLen++]=r,this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._prevLine=e,this._prevChar=n}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new IT(this._prevData,this._data).computeDiff()}:this.build()}};_n.SemanticTokensBuilder=CI;var Fc={};Object.defineProperty(Fc,"__esModule",{value:!0});Fc.InlineCompletionFeature=void 0;const AI=ae,EI=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(AI.InlineCompletionRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Fc.InlineCompletionFeature=EI;var Xs={};Object.defineProperty(Xs,"__esModule",{value:!0});Xs.TextDocuments=void 0;const er=ae;class PI{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new er.Emitter,this._onDidOpen=new er.Emitter,this._onDidClose=new er.Emitter,this._onDidSave=new er.Emitter,this._onWillSave=new er.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=er.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,s);const a=Object.freeze({document:s});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let o=this._syncedDocuments.get(i.uri);o!==void 0&&(o=this._configuration.update(o,s,a),this._syncedDocuments.set(i.uri,o),this._onDidChangeContent.fire(Object.freeze({document:o})))})),n.push(e.onDidCloseTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(r.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(e.onWillSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{let s=this._syncedDocuments.get(r.textDocument.uri);return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),er.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}Xs.TextDocuments=PI;var pr={};Object.defineProperty(pr,"__esModule",{value:!0});pr.NotebookDocuments=pr.NotebookSyncFeature=void 0;const At=ae,Vy=Xs,NI=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(At.DidOpenNotebookDocumentNotification.type,n=>{e(n)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(At.DidChangeNotebookDocumentNotification.type,n=>{e(n)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(At.DidSaveNotebookDocumentNotification.type,n=>{e(n)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(At.DidCloseNotebookDocumentNotification.type,n=>{e(n)})}}};pr.NotebookSyncFeature=NI;let OT=class hl{onDidOpenTextDocument(e){return this.openHandler=e,At.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,At.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,At.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return hl.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return hl.NULL_DISPOSE}onDidSaveTextDocument(){return hl.NULL_DISPOSE}};OT.NULL_DISPOSE=Object.freeze({dispose:()=>{}});class II{constructor(e){e instanceof Vy.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Vy.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new At.Emitter,this._onDidChange=new At.Emitter,this._onDidSave=new At.Emitter,this._onDidClose=new At.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){const n=this.notebookCellMap.get(e);return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"?e:e.document,r=this.notebookCellMap.get(n);return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new OT,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(const s of i.cellTextDocuments)n.openTextDocument({textDocument:s});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s===void 0)return;s.version=i.notebookDocument.version;const a=s.metadata;let o=!1;const l=i.change;l.metadata!==void 0&&(o=!0,s.metadata=l.metadata);const c=[],u=[],d=[],p=[];if(l.cells!==void 0){const v=l.cells;if(v.structure!==void 0){const m=v.structure.array;if(s.cells.splice(m.start,m.deleteCount,...m.cells!==void 0?m.cells:[]),v.structure.didOpen!==void 0)for(const g of v.structure.didOpen)n.openTextDocument({textDocument:g}),c.push(g.uri);if(v.structure.didClose)for(const g of v.structure.didClose)n.closeTextDocument({textDocument:g}),u.push(g.uri)}if(v.data!==void 0){const m=new Map(v.data.map(g=>[g.document,g]));for(let g=0;g<=s.cells.length;g++){const k=m.get(s.cells[g].document);if(k!==void 0){const F=s.cells.splice(g,1,k);if(d.push({old:F[0],new:k}),m.delete(k.document),m.size===0)break}}}if(v.textContent!==void 0)for(const m of v.textContent)n.changeTextDocument({textDocument:m.document,contentChanges:m.changes}),p.push(m.document.uri)}this.updateCellMap(s);const h={notebookDocument:s};o&&(h.metadata={old:a,new:s.metadata});const f=[];for(const v of c)f.push(this.getNotebookCell(v));const y=[];for(const v of u)y.push(this.getNotebookCell(v));const $=[];for(const v of p)$.push(this.getNotebookCell(v));(f.length>0||y.length>0||d.length>0||$.length>0)&&(h.cells={added:f,removed:y,changed:{data:d,textContent:$}}),(h.metadata!==void 0||h.cells!==void 0)&&this._onDidChange.fire(h)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s!==void 0){this._onDidClose.fire(s);for(const a of i.cellTextDocuments)n.closeTextDocument({textDocument:a});this.notebookDocuments.delete(i.notebookDocument.uri);for(const a of s.cells)this.notebookCellMap.delete(a.document)}})),At.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}pr.NotebookDocuments=II;var ne={},Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.thenable=Oe.typedArray=Oe.stringArray=Oe.array=Oe.func=Oe.error=Oe.number=Oe.string=Oe.boolean=void 0;function OI(t){return t===!0||t===!1}Oe.boolean=OI;function DT(t){return typeof t=="string"||t instanceof String}Oe.string=DT;function DI(t){return typeof t=="number"||t instanceof Number}Oe.number=DI;function xI(t){return t instanceof Error}Oe.error=xI;function xT(t){return typeof t=="function"}Oe.func=xT;function MT(t){return Array.isArray(t)}Oe.array=MT;function MI(t){return MT(t)&&t.every(e=>DT(e))}Oe.stringArray=MI;function LI(t,e){return Array.isArray(t)&&t.every(e)}Oe.typedArray=LI;function FI(t){return t&&xT(t.then)}Oe.thenable=FI;var yt={};Object.defineProperty(yt,"__esModule",{value:!0});yt.generateUuid=yt.parse=yt.isUUID=yt.v4=yt.empty=void 0;class Yh{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}}class Y extends Yh{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return Y._oneOf(Y._chars)}constructor(){super([Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-","4",Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._oneOf(Y._timeHighBits),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex()].join(""))}}Y._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Y._timeHighBits=["8","9","a","b"];yt.empty=new Yh("00000000-0000-0000-0000-000000000000");function LT(){return new Y}yt.v4=LT;const UI=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function FT(t){return UI.test(t)}yt.isUUID=FT;function HI(t){if(!FT(t))throw new Error("invalid uuid");return new Yh(t)}yt.parse=HI;function BI(){return LT().asHex()}yt.generateUuid=BI;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.attachPartialResult=Hn.ProgressFeature=Hn.attachWorkDone=void 0;const Bn=ae,jI=yt;class zn{constructor(e,n){this._connection=e,this._token=n,zn.Instances.set(this._token,this)}begin(e,n,r,i){let s={kind:"begin",title:e,percentage:n,message:r,cancellable:i};this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,s)}report(e,n){let r={kind:"report"};typeof e=="number"?(r.percentage=e,n!==void 0&&(r.message=n)):r.message=e,this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,r)}done(){zn.Instances.delete(this._token),this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,{kind:"end"})}}zn.Instances=new Map;class Yy extends zn{constructor(e,n){super(e,n),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}}class Xh{constructor(){}begin(){}report(){}done(){}}class Xy extends Xh{constructor(){super(),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}}function KI(t,e){if(e===void 0||e.workDoneToken===void 0)return new Xh;const n=e.workDoneToken;return delete e.workDoneToken,new zn(t,n)}Hn.attachWorkDone=KI;const qI=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var n;super.initialize(e),((n=e==null?void 0:e.window)==null?void 0:n.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(Bn.WorkDoneProgressCancelNotification.type,r=>{let i=zn.Instances.get(r.token);(i instanceof Yy||i instanceof Xy)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Xh:new zn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){const e=(0,jI.generateUuid)();return this.connection.sendRequest(Bn.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Yy(this.connection,e))}else return Promise.resolve(new Xy)}};Hn.ProgressFeature=qI;var rh;(function(t){t.type=new Bn.ProgressType})(rh||(rh={}));class GI{constructor(e,n){this._connection=e,this._token=n}report(e){this._connection.sendProgress(rh.type,this._token,e)}}function WI(t,e){if(e===void 0||e.partialResultToken===void 0)return;const n=e.partialResultToken;return delete e.partialResultToken,new GI(t,n)}Hn.attachPartialResult=WI;var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.ConfigurationFeature=void 0;const zI=ae,VI=Oe,YI=t=>class extends t{getConfiguration(e){return e?VI.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let n={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(zI.ConfigurationRequest.type,n).then(r=>Array.isArray(r)?Array.isArray(e)?r:r[0]:Array.isArray(e)?[]:null)}};Uc.ConfigurationFeature=YI;var Hc={};Object.defineProperty(Hc,"__esModule",{value:!0});Hc.WorkspaceFoldersFeature=void 0;const Ia=ae,XI=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let n=e.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Ia.Emitter,this.connection.onNotification(Ia.DidChangeWorkspaceFoldersNotification.type,r=>{this._onDidChangeWorkspaceFolders.fire(r.event)}))}fillServerCapabilities(e){var r,i;super.fillServerCapabilities(e);const n=(i=(r=e.workspace)==null?void 0:r.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Ia.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Ia.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Hc.WorkspaceFoldersFeature=XI;var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});Bc.CallHierarchyFeature=void 0;const Ru=ae,JI=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Ru.CallHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onIncomingCalls:e=>{const n=Ru.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onOutgoingCalls:e=>{const n=Ru.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Bc.CallHierarchyFeature=JI;var jc={};Object.defineProperty(jc,"__esModule",{value:!0});jc.ShowDocumentFeature=void 0;const QI=ae,ZI=t=>class extends t{showDocument(e){return this.connection.sendRequest(QI.ShowDocumentRequest.type,e)}};jc.ShowDocumentFeature=ZI;var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0});Kc.FileOperationsFeature=void 0;const $r=ae,eO=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification($r.DidCreateFilesNotification.type,n=>{e(n)})}onDidRenameFiles(e){return this.connection.onNotification($r.DidRenameFilesNotification.type,n=>{e(n)})}onDidDeleteFiles(e){return this.connection.onNotification($r.DidDeleteFilesNotification.type,n=>{e(n)})}onWillCreateFiles(e){return this.connection.onRequest($r.WillCreateFilesRequest.type,(n,r)=>e(n,r))}onWillRenameFiles(e){return this.connection.onRequest($r.WillRenameFilesRequest.type,(n,r)=>e(n,r))}onWillDeleteFiles(e){return this.connection.onRequest($r.WillDeleteFilesRequest.type,(n,r)=>e(n,r))}};Kc.FileOperationsFeature=eO;var qc={};Object.defineProperty(qc,"__esModule",{value:!0});qc.LinkedEditingRangeFeature=void 0;const tO=ae,nO=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(tO.LinkedEditingRangeRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0))}};qc.LinkedEditingRangeFeature=nO;var Gc={};Object.defineProperty(Gc,"__esModule",{value:!0});Gc.TypeHierarchyFeature=void 0;const Tu=ae,rO=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Tu.TypeHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onSupertypes:e=>{const n=Tu.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onSubtypes:e=>{const n=Tu.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Gc.TypeHierarchyFeature=rO;var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});Wc.InlineValueFeature=void 0;const Jy=ae,iO=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Jy.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Jy.InlineValueRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Wc.InlineValueFeature=iO;var zc={};Object.defineProperty(zc,"__esModule",{value:!0});zc.FoldingRangeFeature=void 0;const Qy=ae,sO=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Qy.FoldingRangeRefreshRequest.type),on:e=>{const n=Qy.FoldingRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};zc.FoldingRangeFeature=sO;var Vc={};Object.defineProperty(Vc,"__esModule",{value:!0});Vc.InlayHintFeature=void 0;const $u=ae,aO=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest($u.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest($u.InlayHintRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n))),resolve:e=>this.connection.onRequest($u.InlayHintResolveRequest.type,(n,r)=>e(n,r))}}};Vc.InlayHintFeature=aO;var Yc={};Object.defineProperty(Yc,"__esModule",{value:!0});Yc.DiagnosticFeature=void 0;const yi=ae,oO=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(yi.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(yi.DocumentDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(yi.DocumentDiagnosticRequest.partialResult,n))),onWorkspace:e=>this.connection.onRequest(yi.WorkspaceDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(yi.WorkspaceDiagnosticRequest.partialResult,n)))}}};Yc.DiagnosticFeature=oO;var Xc={};Object.defineProperty(Xc,"__esModule",{value:!0});Xc.MonikerFeature=void 0;const lO=ae,cO=t=>class extends t{get moniker(){return{on:e=>{const n=lO.MonikerRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Xc.MonikerFeature=cO;Object.defineProperty(ne,"__esModule",{value:!0});ne.createConnection=ne.combineFeatures=ne.combineNotebooksFeatures=ne.combineLanguagesFeatures=ne.combineWorkspaceFeatures=ne.combineWindowFeatures=ne.combineClientFeatures=ne.combineTracerFeatures=ne.combineTelemetryFeatures=ne.combineConsoleFeatures=ne._NotebooksImpl=ne._LanguagesImpl=ne.BulkUnregistration=ne.BulkRegistration=ne.ErrorMessageTracker=void 0;const D=ae,bt=Oe,ih=yt,z=Hn,uO=Uc,dO=Hc,fO=Bc,pO=_n,hO=jc,mO=Kc,gO=qc,yO=Gc,_O=Wc,vO=zc,RO=Vc,TO=Yc,$O=pr,kO=Xc;function ku(t){if(t!==null)return t}class wO{constructor(){this._messages=Object.create(null)}add(e){let n=this._messages[e];n||(n=0),n++,this._messages[e]=n}sendErrors(e){Object.keys(this._messages).forEach(n=>{e.window.showErrorMessage(n)})}}ne.ErrorMessageTracker=wO;class Zy{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,n){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:n}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}}class bO{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...n){let r={type:D.MessageType.Error,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}showWarningMessage(e,...n){let r={type:D.MessageType.Warning,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}showInformationMessage(e,...n){let r={type:D.MessageType.Info,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}}const e_=(0,hO.ShowDocumentFeature)((0,z.ProgressFeature)(bO));var t_;(function(t){function e(){return new UT}t.create=e})(t_||(ne.BulkRegistration=t_={}));class UT{constructor(){this._registrations=[],this._registered=new Set}add(e,n){const r=bt.string(e)?e:e.method;if(this._registered.has(r))throw new Error(`${r} is already added to this registration`);const i=ih.generateUuid();this._registrations.push({id:i,method:r,registerOptions:n||{}}),this._registered.add(r)}asRegistrationParams(){return{registrations:this._registrations}}}var n_;(function(t){function e(){return new sh(void 0,[])}t.create=e})(n_||(ne.BulkUnregistration=n_={}));class sh{constructor(e,n){this._connection=e,this._unregistrations=new Map,n.forEach(r=>{this._unregistrations.set(r.method,r)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let r of this._unregistrations.values())e.push(r);let n={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){const n=bt.string(e)?e:e.method,r=this._unregistrations.get(n);if(!r)return!1;let i={unregisterations:[r]};return this._connection.sendRequest(D.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},s=>{this._connection.console.info(`Un-registering request handler for ${r.id} failed.`)}),!0}}class r_{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,n,r){return e instanceof UT?this.registerMany(e):e instanceof sh?this.registerSingle1(e,n,r):this.registerSingle2(e,n)}registerSingle1(e,n,r){const i=bt.string(n)?n:n.method,s=ih.generateUuid();let a={registrations:[{id:s,method:i,registerOptions:r||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,a).then(o=>(e.add({id:s,method:i}),e),o=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(o)))}registerSingle2(e,n){const r=bt.string(e)?e:e.method,i=ih.generateUuid();let s={registrations:[{id:i,method:r,registerOptions:n||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,s).then(a=>D.Disposable.create(()=>{this.unregisterSingle(i,r).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),a=>(this.connection.console.info(`Registering request handler for ${r} failed.`),Promise.reject(a)))}unregisterSingle(e,n){let r={unregisterations:[{id:e,method:n}]};return this.connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let n=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,n).then(()=>new sh(this._connection,n.registrations.map(r=>({id:r.id,method:r.method}))),r=>(this.connection.console.info("Bulk registration failed."),Promise.reject(r)))}}class SO{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function n(i){return i&&!!i.edit}let r=n(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,r)}}const i_=(0,mO.FileOperationsFeature)((0,dO.WorkspaceFoldersFeature)((0,uO.ConfigurationFeature)(SO)));class s_{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,n){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?n:void 0}).catch(()=>{})}}class a_{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}}class HT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._LanguagesImpl=HT;const o_=(0,vO.FoldingRangeFeature)((0,kO.MonikerFeature)((0,TO.DiagnosticFeature)((0,RO.InlayHintFeature)((0,_O.InlineValueFeature)((0,yO.TypeHierarchyFeature)((0,gO.LinkedEditingRangeFeature)((0,pO.SemanticTokensFeature)((0,fO.CallHierarchyFeature)(HT)))))))));class BT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._NotebooksImpl=BT;const l_=(0,$O.NotebookSyncFeature)(BT);function jT(t,e){return function(n){return e(t(n))}}ne.combineConsoleFeatures=jT;function KT(t,e){return function(n){return e(t(n))}}ne.combineTelemetryFeatures=KT;function qT(t,e){return function(n){return e(t(n))}}ne.combineTracerFeatures=qT;function GT(t,e){return function(n){return e(t(n))}}ne.combineClientFeatures=GT;function WT(t,e){return function(n){return e(t(n))}}ne.combineWindowFeatures=WT;function zT(t,e){return function(n){return e(t(n))}}ne.combineWorkspaceFeatures=zT;function VT(t,e){return function(n){return e(t(n))}}ne.combineLanguagesFeatures=VT;function YT(t,e){return function(n){return e(t(n))}}ne.combineNotebooksFeatures=YT;function CO(t,e){function n(i,s,a){return i&&s?a(i,s):i||s}return{__brand:"features",console:n(t.console,e.console,jT),tracer:n(t.tracer,e.tracer,qT),telemetry:n(t.telemetry,e.telemetry,KT),client:n(t.client,e.client,GT),window:n(t.window,e.window,WT),workspace:n(t.workspace,e.workspace,zT),languages:n(t.languages,e.languages,VT),notebooks:n(t.notebooks,e.notebooks,YT)}}ne.combineFeatures=CO;function AO(t,e,n){const r=n&&n.console?new(n.console(Zy)):new Zy,i=t(r);r.rawAttach(i);const s=n&&n.tracer?new(n.tracer(s_)):new s_,a=n&&n.telemetry?new(n.telemetry(a_)):new a_,o=n&&n.client?new(n.client(r_)):new r_,l=n&&n.window?new(n.window(e_)):new e_,c=n&&n.workspace?new(n.workspace(i_)):new i_,u=n&&n.languages?new(n.languages(o_)):new o_,d=n&&n.notebooks?new(n.notebooks(l_)):new l_,p=[r,s,a,o,l,c,u,d];function h(m){return m instanceof Promise?m:bt.thenable(m)?new Promise((g,k)=>{m.then(F=>g(F),F=>k(F))}):Promise.resolve(m)}let f,y,$,v={listen:()=>i.listen(),sendRequest:(m,...g)=>i.sendRequest(bt.string(m)?m:m.method,...g),onRequest:(m,g)=>i.onRequest(m,g),sendNotification:(m,g)=>{const k=bt.string(m)?m:m.method;return i.sendNotification(k,g)},onNotification:(m,g)=>i.onNotification(m,g),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:m=>(y=m,{dispose:()=>{y=void 0}}),onInitialized:m=>i.onNotification(D.InitializedNotification.type,m),onShutdown:m=>(f=m,{dispose:()=>{f=void 0}}),onExit:m=>($=m,{dispose:()=>{$=void 0}}),get console(){return r},get telemetry(){return a},get tracer(){return s},get client(){return o},get window(){return l},get workspace(){return c},get languages(){return u},get notebooks(){return d},onDidChangeConfiguration:m=>i.onNotification(D.DidChangeConfigurationNotification.type,m),onDidChangeWatchedFiles:m=>i.onNotification(D.DidChangeWatchedFilesNotification.type,m),__textDocumentSync:void 0,onDidOpenTextDocument:m=>i.onNotification(D.DidOpenTextDocumentNotification.type,m),onDidChangeTextDocument:m=>i.onNotification(D.DidChangeTextDocumentNotification.type,m),onDidCloseTextDocument:m=>i.onNotification(D.DidCloseTextDocumentNotification.type,m),onWillSaveTextDocument:m=>i.onNotification(D.WillSaveTextDocumentNotification.type,m),onWillSaveTextDocumentWaitUntil:m=>i.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,m),onDidSaveTextDocument:m=>i.onNotification(D.DidSaveTextDocumentNotification.type,m),sendDiagnostics:m=>i.sendNotification(D.PublishDiagnosticsNotification.type,m),onHover:m=>i.onRequest(D.HoverRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),onCompletion:m=>i.onRequest(D.CompletionRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCompletionResolve:m=>i.onRequest(D.CompletionResolveRequest.type,m),onSignatureHelp:m=>i.onRequest(D.SignatureHelpRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),onDeclaration:m=>i.onRequest(D.DeclarationRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDefinition:m=>i.onRequest(D.DefinitionRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onTypeDefinition:m=>i.onRequest(D.TypeDefinitionRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onImplementation:m=>i.onRequest(D.ImplementationRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onReferences:m=>i.onRequest(D.ReferencesRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentHighlight:m=>i.onRequest(D.DocumentHighlightRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentSymbol:m=>i.onRequest(D.DocumentSymbolRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onWorkspaceSymbol:m=>i.onRequest(D.WorkspaceSymbolRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onWorkspaceSymbolResolve:m=>i.onRequest(D.WorkspaceSymbolResolveRequest.type,m),onCodeAction:m=>i.onRequest(D.CodeActionRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCodeActionResolve:m=>i.onRequest(D.CodeActionResolveRequest.type,(g,k)=>m(g,k)),onCodeLens:m=>i.onRequest(D.CodeLensRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCodeLensResolve:m=>i.onRequest(D.CodeLensResolveRequest.type,(g,k)=>m(g,k)),onDocumentFormatting:m=>i.onRequest(D.DocumentFormattingRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),onDocumentRangeFormatting:m=>i.onRequest(D.DocumentRangeFormattingRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),onDocumentOnTypeFormatting:m=>i.onRequest(D.DocumentOnTypeFormattingRequest.type,(g,k)=>m(g,k)),onRenameRequest:m=>i.onRequest(D.RenameRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),onPrepareRename:m=>i.onRequest(D.PrepareRenameRequest.type,(g,k)=>m(g,k)),onDocumentLinks:m=>i.onRequest(D.DocumentLinkRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentLinkResolve:m=>i.onRequest(D.DocumentLinkResolveRequest.type,(g,k)=>m(g,k)),onDocumentColor:m=>i.onRequest(D.DocumentColorRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onColorPresentation:m=>i.onRequest(D.ColorPresentationRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onFoldingRanges:m=>i.onRequest(D.FoldingRangeRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onSelectionRanges:m=>i.onRequest(D.SelectionRangeRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onExecuteCommand:m=>i.onRequest(D.ExecuteCommandRequest.type,(g,k)=>m(g,k,(0,z.attachWorkDone)(i,g),void 0)),dispose:()=>i.dispose()};for(let m of p)m.attach(v);return i.onRequest(D.InitializeRequest.type,m=>{e.initialize(m),bt.string(m.trace)&&(s.trace=D.Trace.fromString(m.trace));for(let g of p)g.initialize(m.capabilities);if(y){let g=y(m,new D.CancellationTokenSource().token,(0,z.attachWorkDone)(i,m),void 0);return h(g).then(k=>{if(k instanceof D.ResponseError)return k;let F=k;F||(F={capabilities:{}});let G=F.capabilities;G||(G={},F.capabilities=G),G.textDocumentSync===void 0||G.textDocumentSync===null?G.textDocumentSync=bt.number(v.__textDocumentSync)?v.__textDocumentSync:D.TextDocumentSyncKind.None:!bt.number(G.textDocumentSync)&&!bt.number(G.textDocumentSync.change)&&(G.textDocumentSync.change=bt.number(v.__textDocumentSync)?v.__textDocumentSync:D.TextDocumentSyncKind.None);for(let X of p)X.fillServerCapabilities(G);return F})}else{let g={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let k of p)k.fillServerCapabilities(g.capabilities);return g}}),i.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,f)return f(new D.CancellationTokenSource().token)}),i.onNotification(D.ExitNotification.type,()=>{try{$&&$()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(D.SetTraceNotification.type,m=>{s.trace=D.Trace.fromString(m.value)}),v}ne.createConnection=AO;(function(t){var e=De&&De.__createBinding||(Object.create?function(l,c,u,d){d===void 0&&(d=u);var p=Object.getOwnPropertyDescriptor(c,u);(!p||("get"in p?!c.__esModule:p.writable||p.configurable))&&(p={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,d,p)}:function(l,c,u,d){d===void 0&&(d=u),l[d]=c[u]}),n=De&&De.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProposedFeatures=t.NotebookDocuments=t.TextDocuments=t.SemanticTokensBuilder=void 0;const r=_n;Object.defineProperty(t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return r.SemanticTokensBuilder}});const i=Fc;n(ae,t);const s=Xs;Object.defineProperty(t,"TextDocuments",{enumerable:!0,get:function(){return s.TextDocuments}});const a=pr;Object.defineProperty(t,"NotebookDocuments",{enumerable:!0,get:function(){return a.NotebookDocuments}}),n(ne,t);var o;(function(l){l.all={__brand:"features",languages:i.InlineCompletionFeature}})(o||(t.ProposedFeatures=o={}))})(Qp);var EO=ae;(function(t){var e=De&&De.__createBinding||(Object.create?function(o,l,c,u){u===void 0&&(u=c);var d=Object.getOwnPropertyDescriptor(l,c);(!d||("get"in d?!l.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(o,u,d)}:function(o,l,c,u){u===void 0&&(u=c),o[u]=l[c]}),n=De&&De.__exportStar||function(o,l){for(var c in o)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&e(l,o,c)};Object.defineProperty(t,"__esModule",{value:!0}),t.createConnection=void 0;const r=Qp;n(EO,t),n(Qp,t);let i=!1;const s={initialize:o=>{},get shutdownReceived(){return i},set shutdownReceived(o){i=o},exit:o=>{}};function a(o,l,c,u){let d,p,h,f;o!==void 0&&o.__brand==="features"&&(d=o,o=l,l=c,c=u),r.ConnectionStrategy.is(o)||r.ConnectionOptions.is(o)?f=o:(p=o,h=l,f=c);const y=$=>(0,r.createProtocolConnection)(p,h,$,f);return(0,r.createConnection)(y,s,d)}t.createConnection=a})(M);function c_(t,e){const n={stacks:t,tokens:e};return PO(n),n.stacks.flat().forEach(i=>{i.property=void 0}),JT(n.stacks).map(i=>i[i.length-1])}function Jh(t){const{next:e,cardinalities:n,visited:r,plus:i}=t,s=[],a=e.feature;if(r.has(a))return[];or(a)||r.add(a);let o,l=a;for(;l.$container;)if(or(l.$container)){o=l.$container;break}else if(nv(l.$container))l=l.$container;else break;if(q$(l.cardinality)){const c=Er({next:{feature:l,type:e.type},cardinalities:n,visited:r,plus:i});for(const u of c)i.add(u.feature);s.push(...c)}if(o){const c=o.elements.indexOf(l);c!==void 0&&c<o.elements.length-1&&s.push(...XT({feature:o,type:e.type},c+1,n,r,i)),s.every(u=>_s(u.feature.cardinality,u.feature)||_s(n.get(u.feature))||i.has(u.feature))&&s.push(...Jh({next:{feature:o,type:e.type},cardinalities:n,visited:r,plus:i}))}return s}function ah(t){return Xe(t)&&(t={feature:t}),Er({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Er(t){var e,n,r;const{next:i,cardinalities:s,visited:a,plus:o}=t;if(i===void 0)return[];const{feature:l,type:c}=i;if(or(l))return a.has(l)?[]:(a.add(l),XT(i,0,s,a,o).map(u=>Oa(u,l.cardinality,s)));if(ch(l)||uh(l))return l.elements.flatMap(u=>Er({next:{feature:u,type:c,property:i.property},cardinalities:s,visited:a,plus:o})).map(u=>Oa(u,l.cardinality,s));if(en(l)){const u={feature:l.terminal,type:c,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Er({next:u,cardinalities:s,visited:a,plus:o}).map(d=>Oa(d,l.cardinality,s))}else{if(xs(l))return Jh({next:{feature:l,type:oc(l),property:(n=i.property)!==null&&n!==void 0?n:l.feature},cardinalities:s,visited:a,plus:o});if(Rn(l)&&tt(l.rule.ref)){const u=l.rule.ref,d={feature:u.definition,type:u.fragment||u.dataType?void 0:(r=Ls(u))!==null&&r!==void 0?r:u.name,property:i.property};return Er({next:d,cardinalities:s,visited:a,plus:o}).map(p=>Oa(p,l.cardinality,s))}else return[i]}}function Oa(t,e,n){return n.set(t.feature,e),t}function XT(t,e,n,r,i){var s;const a=[];let o;for(;e<t.feature.elements.length&&(o={feature:t.feature.elements[e++],type:t.type},a.push(...Er({next:o,cardinalities:n,visited:r,plus:i})),!!_s((s=o.feature.cardinality)!==null&&s!==void 0?s:n.get(o.feature),o.feature)););return a}function PO(t){for(const e of t.tokens){const n=JT(t.stacks,e);t.stacks=n}}function JT(t,e){const n=[];for(const r of t)n.push(...NO(r,e));return n}function NO(t,e){const n=new Map,r=new Set(t.map(s=>s.feature).filter(IO)),i=[];for(;t.length>0;){const s=t.pop(),a=Jh({next:s,cardinalities:n,plus:r,visited:new Set}).filter(o=>e?Qh(o.feature,e):!0);for(const o of a)i.push([...t,o]);if(!a.every(o=>_s(o.feature.cardinality,o.feature)||_s(n.get(o.feature))))break}return i}function IO(t){if(t.cardinality==="+")return!0;const e=Dn(t,en);return!!(e&&e.cardinality==="+")}function Qh(t,e){if(Pt(t))return t.value===e.image;if(Rn(t))return OO(t.rule.ref,e);if(Ms(t)){const n=hv(t);if(n)return Qh(n,e)}return!1}function OO(t,e){return tt(t)?ah(t.definition).some(r=>Qh(r.feature,e)):Vn(t)?lc(t).test(e.image):!1}function DO(t){const e=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.triggerCharacters)!==null&&i!==void 0?i:[]}))),n=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:n.length>0?n:void 0}}class QT{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,n,r){const i=[],s=this.buildContexts(e,n.position),a=(c,u)=>{const d=this.fillCompletionItem(c,u);d&&i.push(d)},o=c=>Pt(c.feature)?c.feature.value:c.feature,l=[];for(const c of s)if(await Promise.all(we(c.features).distinct(o).exclude(l).map(u=>this.completionFor(c,u,a))),l.push(...c.features),!this.continueCompletion(i))break;return M.CompletionList.create(this.deduplicateItems(i),!0)}deduplicateItems(e){return we(e).distinct(n=>`${n.kind}_${n.label}_${n.detail}`).toArray()}findFeaturesAt(e,n){const r=e.getText({start:M.Position.create(0,0),end:e.positionAt(n)}),i=this.completionParser.parse(r),s=i.tokens;if(i.tokenIndex===0){const l=Sf(this.grammar),c=ah({feature:l.definition,type:Ls(l)});return s.length>0?(s.shift(),c_(c.map(u=>[u]),s)):c}const a=[...s].splice(i.tokenIndex);return c_([i.elementStack.map(l=>({feature:l}))],a)}*buildContexts(e,n){var r,i;const s=e.parseResult.value.$cstNode;if(!s)return;const a=e.textDocument,o=a.getText(),l=a.offsetAt(n),c={document:e,textDocument:a,offset:l,position:n},u=this.findDataTypeRuleStart(s,l);if(u){const[m,g]=u,k=(r=wf(s,m))===null||r===void 0?void 0:r.astNode;yield Object.assign(Object.assign({},c),{node:k,tokenOffset:m,tokenEndOffset:g,features:this.findFeaturesAt(a,m)})}const{nextTokenStart:d,nextTokenEnd:p,previousTokenStart:h,previousTokenEnd:f}=this.backtrackToAnyToken(o,l);let y=d;l<=d&&h!==void 0&&(y=h);const $=(i=wf(s,y))===null||i===void 0?void 0:i.astNode;let v=!0;if(h!==void 0&&f!==void 0&&f===l&&(yield Object.assign(Object.assign({},c),{node:$,tokenOffset:h,tokenEndOffset:f,features:this.findFeaturesAt(a,h)}),v=this.performNextTokenCompletion(e,o.substring(h,f),h,f),v&&(yield Object.assign(Object.assign({},c),{node:$,tokenOffset:f,tokenEndOffset:f,features:this.findFeaturesAt(a,f)}))),$)v&&(yield Object.assign(Object.assign({},c),{node:$,tokenOffset:d,tokenEndOffset:p,features:this.findFeaturesAt(a,d)}));else{const m=Sf(this.grammar);if(!m)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},c),{tokenOffset:d,tokenEndOffset:p,features:ah(m.definition)})}}performNextTokenCompletion(e,n,r,i){return new RegExp("\\P{L}$","u").test(n)}findDataTypeRuleStart(e,n){var r,i;let s=ar(e,n,this.grammarConfig.nameRegexp),a=!!(!((r=Dn(s==null?void 0:s.grammarSource,tt))===null||r===void 0)&&r.dataType);if(a){for(;a;)s=s==null?void 0:s.container,a=!!(!((i=Dn(s==null?void 0:s.grammarSource,tt))===null||i===void 0)&&i.dataType);if(s)return[s.offset,s.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,n){const r=this.lexer.tokenize(e).tokens;if(r.length===0)return{nextTokenStart:n,nextTokenEnd:n};let i;for(const s of r){if(s.startOffset>=n)return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(s.endOffset>=n)return{nextTokenStart:s.startOffset,nextTokenEnd:s.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=s}return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,n,r){if(Pt(n.feature))return this.completionForKeyword(e,n.feature,r);if(Ms(n.feature)&&e.node)return this.completionForCrossReference(e,n,r)}completionForCrossReference(e,n,r){const i=Dn(n.feature,en);let s=e.node;if(i&&s){n.type&&(s={$type:n.type,$container:s,$containerProperty:n.property},lv(this.astReflection,s));const a={reference:{$refText:""},container:s,property:i.feature};try{for(const o of this.getReferenceCandidates(a,e))r(e,this.createReferenceCompletionItem(o))}catch(o){console.error(o)}}}getReferenceCandidates(e,n){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){const n=this.nodeKindProvider.getCompletionItemKind(e),r=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:n,documentation:r,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;const n=this.documentationProvider.getDocumentation(e.node);if(n)return{kind:"markdown",value:n}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return M.CompletionItemKind.Keyword}filterKeyword(e,n){return new RegExp("\\p{L}","u").test(n.value)}fillCompletionItem(e,n){var r,i;let s;if(typeof n.label=="string")s=n.label;else if("node"in n){const c=this.nameProvider.getName(n.node);if(!c)return;s=c}else if("nodeDescription"in n)s=n.nodeDescription.name;else return;let a;typeof((r=n.textEdit)===null||r===void 0?void 0:r.newText)=="string"?a=n.textEdit.newText:typeof n.insertText=="string"?a=n.insertText:a=s;const o=(i=n.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,s,a);return o?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:o,label:s}:void 0}buildCompletionTextEdit(e,n,r){const s=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(s,n)){const a=e.textDocument.positionAt(e.tokenOffset),o=e.position;return{newText:r,range:{start:a,end:o}}}else return}}class xO{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,n,r){const i=e.parseResult.value;if(i.$cstNode){const s=i.$cstNode,a=ar(s,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(a)return this.collectLocationLinks(a,n)}}collectLocationLinks(e,n){var r;const i=this.findLink(e);if(i)return[M.LocationLink.create(i.targetDocument.textDocument.uri,((r=i.target.astNode.$cstNode)!==null&&r!==void 0?r:i.target).range,i.target.range,i.source.range)]}findLink(e){const n=this.references.findDeclarationNode(e);if(n!=null&&n.astNode){const r=tn(n.astNode);if(n&&r)return{source:e,target:n,targetDocument:r}}}}class MO{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return;const s=ar(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!s)return;const a=this.references.findDeclaration(s);if(a){const o=pe.equals(tn(a).uri,e.uri),l={documentUri:e.uri,includeDeclaration:o};return this.references.findReferences(a,l).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return M.DocumentHighlight.create(e.segment.range)}}class LO{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e,n,r){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,n){const r=n.$cstNode,i=this.nameProvider.getNameNode(n);if(i&&r){const s=this.nameProvider.getName(n);return[{kind:this.nodeKindProvider.getSymbolKind(n),name:s||i.text,range:r.range,selectionRange:i.range,children:this.getChildSymbols(e,n)}]}else return this.getChildSymbols(e,n)||[]}getChildSymbols(e,n){const r=[];for(const i of ic(n)){const s=this.getSymbol(e,i);r.push(...s)}if(r.length>0)return r}}class FO{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let n=!1;e.lsp.LanguageServer.onInitialize(r=>{var i,s;n=!!(!((s=(i=r.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||s===void 0)&&s.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(r=>{n&&this.registerFileWatcher(e)})}registerFileWatcher(e){const n=[],r=we(e.ServiceRegistry.all).flatMap(s=>s.LanguageMetaData.fileExtensions).map(s=>s.startsWith(".")?s.substring(1):s).distinct().toArray();r.length>0&&n.push({globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`});const i=we(e.ServiceRegistry.all).flatMap(s=>{var a;return(a=s.LanguageMetaData.fileNames)!==null&&a!==void 0?a:[]}).distinct().toArray();if(i.length>0&&n.push({globPattern:i.length===1?`**/${i[0]}`:`**/{${i.join(",")}}`}),n.length>0){const s=e.lsp.Connection,a={watchers:n};s==null||s.client.register(M.DidChangeWatchedFilesNotification.type,a)}}fireDocumentUpdate(e,n){e=e.filter(r=>this.serviceRegistry.hasServices(r)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(r=>this.documentBuilder.update(e,n,r))}).catch(r=>{console.error("Workspace initialization failed. Could not perform document update.",r)})}didChangeContent(e){this.fireDocumentUpdate([it.parse(e.document.uri)],[])}didChangeWatchedFiles(e){const n=we(e.changes).filter(i=>i.type!==M.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>it.parse(i.uri)).toArray(),r=we(e.changes).filter(i=>i.type===M.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>it.parse(i.uri)).toArray();this.fireDocumentUpdate(n,r)}}class UO{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e,n,r){const i=[],s=a=>i.push(a);return this.collectFolding(e,s),i}collectFolding(e,n){var r;const i=(r=e.parseResult)===null||r===void 0?void 0:r.value;if(i){if(this.shouldProcessContent(i)){const s=Qt(i).iterator();let a;do if(a=s.next(),!a.done){const o=a.value;this.shouldProcess(o)&&this.collectObjectFolding(e,o,n),this.shouldProcessContent(o)||s.prune()}while(!a.done)}this.collectCommentFolding(e,i,n)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,n,r){const i=n.$cstNode;if(i){const s=this.toFoldingRange(e,i);s&&r(s)}}collectCommentFolding(e,n,r){const i=n.$cstNode;if(i){for(const s of c$(i))if(this.commentNames.includes(s.tokenType.name)){const a=this.toFoldingRange(e,s,M.FoldingRangeKind.Comment);a&&r(a)}}}toFoldingRange(e,n,r){const i=n.range,s=i.start;let a=i.end;if(!(a.line-s.line<2))return this.includeLastFoldingLine(n,r)||(a=e.textDocument.positionAt(e.textDocument.offsetAt({line:a.line,character:0})-1)),M.FoldingRange.create(s.line,a.line,s.character,a.character,r)}includeLastFoldingLine(e,n){if(n===M.FoldingRangeKind.Comment)return!1;const r=e.text,i=r.charAt(r.length-1);return!(i==="}"||i===")"||i==="]")}}class HO{match(e,n){if(e.length===0)return!0;let r=!1,i,s=0;const a=n.length;for(let o=0;o<a;o++){const l=n.charCodeAt(o),c=e.charCodeAt(s);if((l===c||this.toUpperCharCode(l)===this.toUpperCharCode(c))&&(r||(r=i===void 0||this.isWordTransition(i,l)),r&&s++,s===e.length))return!0;i=l}return!1}isWordTransition(e,n){return u_<=e&&e<=d_&&BO<=n&&n<=jO||e===f_&&n!==f_}toUpperCharCode(e){return u_<=e&&e<=d_?e-32:e}}const u_=97,d_=122,BO=65,jO=90,f_=95;class KO{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,n){var r,i;const s=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(s){const a=e.textDocument.offsetAt(n.position),o=ar(s,a,this.grammarConfig.nameRegexp);if(o&&o.offset+o.length>a){const l=this.references.findDeclaration(o);if(l)return this.getAstNodeHoverContent(l);if(Pt(o.grammarSource))return this.getKeywordHoverContent(o.grammarSource)}}}getKeywordHoverContent(e){var n;let r=lT(e)?e.$comment:void 0;if(r||(r=(n=Z_(e.$cstNode,["ML_COMMENT"]))===null||n===void 0?void 0:n.text),r&&fT(r)){const i=dT(r).toMarkdown();if(i)return{contents:{kind:"markdown",value:i}}}}}class qO extends KO{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){const n=this.documentationProvider.getDocumentation(e);if(n)return{contents:{kind:"markdown",value:n}}}}const GO={[M.SemanticTokenTypes.class]:0,[M.SemanticTokenTypes.comment]:1,[M.SemanticTokenTypes.enum]:2,[M.SemanticTokenTypes.enumMember]:3,[M.SemanticTokenTypes.event]:4,[M.SemanticTokenTypes.function]:5,[M.SemanticTokenTypes.interface]:6,[M.SemanticTokenTypes.keyword]:7,[M.SemanticTokenTypes.macro]:8,[M.SemanticTokenTypes.method]:9,[M.SemanticTokenTypes.modifier]:10,[M.SemanticTokenTypes.namespace]:11,[M.SemanticTokenTypes.number]:12,[M.SemanticTokenTypes.operator]:13,[M.SemanticTokenTypes.parameter]:14,[M.SemanticTokenTypes.property]:15,[M.SemanticTokenTypes.regexp]:16,[M.SemanticTokenTypes.string]:17,[M.SemanticTokenTypes.struct]:18,[M.SemanticTokenTypes.type]:19,[M.SemanticTokenTypes.typeParameter]:20,[M.SemanticTokenTypes.variable]:21,[M.SemanticTokenTypes.decorator]:22},WO={[M.SemanticTokenModifiers.abstract]:1,[M.SemanticTokenModifiers.async]:2,[M.SemanticTokenModifiers.declaration]:4,[M.SemanticTokenModifiers.defaultLibrary]:8,[M.SemanticTokenModifiers.definition]:16,[M.SemanticTokenModifiers.deprecated]:32,[M.SemanticTokenModifiers.documentation]:64,[M.SemanticTokenModifiers.modification]:128,[M.SemanticTokenModifiers.readonly]:256,[M.SemanticTokenModifiers.static]:512};function zO(t){const e=[],n=[];let r=!0,i=!0,s=!0;for(const a of t)a&&(a.legend.tokenTypes.forEach((o,l)=>{const c=e[l];if(c&&c!==o)throw new Error(`Cannot merge '${c}' and '${o}' token types. They use the same index ${l}.`);e[l]=o}),a.legend.tokenModifiers.forEach((o,l)=>{const c=n[l];if(c&&c!==o)throw new Error(`Cannot merge '${c}' and '${o}' token modifier. They use the same index ${l}.`);n[l]=o}),a.full?typeof a.full=="object"&&!a.full.delta&&(i=!1):r=!1,a.range||(s=!1));return{legend:{tokenTypes:e,tokenModifiers:n},full:r&&{delta:i},range:s}}class VO extends M.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,n,r,i,s){this._tokens.push({line:e,char:n,length:r,tokenType:i,tokenModifiers:s})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(const e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,n){return e.line===n.line?e.char-n.char:e.line-n.line}}class YO{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(n=>{this.tokensBuilders.delete(n.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(n=>{var r;this.initialize((r=n.capabilities.textDocument)===null||r===void 0?void 0:r.semanticTokens)})}initialize(e){this.clientCapabilities=e}get tokenTypes(){return GO}get tokenModifiers(){return WO}get semanticTokensOptions(){return{legend:{tokenTypes:Object.keys(this.tokenTypes),tokenModifiers:Object.keys(this.tokenModifiers)},full:{delta:!0},range:!0}}async semanticHighlight(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightRange(e,n,r=le.None){return this.currentRange=n.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(n.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.buildEdits()}createAcceptor(){return n=>{"line"in n?this.highlightToken({range:{start:{line:n.line,character:n.char},end:{line:n.line,character:n.char+n.length}},type:n.type,modifier:n.modifier}):"range"in n?this.highlightToken(n):"keyword"in n?this.highlightKeyword(n):"property"in n?this.highlightProperty(n):this.highlightNode({node:n.cst,type:n.type,modifier:n.modifier})}}getDocumentTokensBuilder(e){const n=this.tokensBuilders.get(e.uri.toString());if(n)return n;const r=new VO;return this.tokensBuilders.set(e.uri.toString(),r),r}async computeHighlighting(e,n,r){const i=e.parseResult.value,s=rr(i,{range:this.currentRange}).iterator();let a;do if(a=s.next(),!a.done){await rt(r);const o=a.value;this.highlightElement(o,n)==="prune"&&s.prune()}while(!a.done)}highlightToken(e){var n;const{range:r,type:i}=e;let s=e.modifier;if(this.currentRange&&!J_(r,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;const a=this.tokenTypes[i];let o=0;if(s!==void 0){typeof s=="string"&&(s=[s]);for(const u of s){const d=this.tokenModifiers[u];o|=d}}const l=r.start.line,c=r.end.line;if(l===c){const u=r.start.character,d=r.end.character-u;this.currentTokensBuilder.push(l,u,d,a,o)}else if(!((n=this.clientCapabilities)===null||n===void 0)&&n.multilineTokenSupport){const u=r.start.character,d=this.currentDocument.textDocument.offsetAt(r.start),p=this.currentDocument.textDocument.offsetAt(r.end);this.currentTokensBuilder.push(l,u,p-d,a,o)}else{const u=r.start;let d=this.currentDocument.textDocument.offsetAt({line:l+1,character:0});this.currentTokensBuilder.push(u.line,u.character,d-u.character-1,a,o);for(let p=l+1;p<c;p++){const h=d;d=this.currentDocument.textDocument.offsetAt({line:p+1,character:0}),this.currentTokensBuilder.push(p,0,d-h-1,a,o)}this.currentTokensBuilder.push(c,0,r.end.character,a,o)}}highlightProperty(e){const n=[];if(typeof e.index=="number"){const s=dh(e.node.$cstNode,e.property,e.index);s&&n.push(s)}else n.push(...mv(e.node.$cstNode,e.property));const{type:r,modifier:i}=e;for(const s of n)this.highlightNode({node:s,type:r,modifier:i})}highlightKeyword(e){const{node:n,keyword:r,type:i,index:s,modifier:a}=e,o=[];if(typeof s=="number"){const l=gv(n.$cstNode,r,s);l&&o.push(l)}else o.push(...j$(n.$cstNode,r));for(const l of o)this.highlightNode({node:l,type:i,modifier:a})}highlightNode(e){const{node:n,type:r,modifier:i}=e,s=n.range;this.highlightToken({range:s,type:r,modifier:i})}}var p_;(function(t){function e(r,i,s){const a=new Map;Object.entries(i).forEach(([c,u])=>a.set(u,c));let o=0,l=0;return n(r.data,5).map(c=>{o+=c[0],c[0]!==0&&(l=0),l+=c[1];const u=c[2];return{offset:s.textDocument.offsetAt({line:o,character:l}),tokenType:a.get(c[3]),tokenModifiers:c[4],text:s.textDocument.getText({start:{line:o,character:l},end:{line:o,character:l+u}})}})}t.decode=e;function n(r,i){const s=[];for(let a=0;a<r.length;a+=i){const o=r.slice(a,a+i);s.push(o)}return s}})(p_||(p_={}));function XO(t){const e=[],n=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&n.push(...i.retriggerCharacters)});const r={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:n.length>0?Array.from(new Set(n)).sort():void 0};return r.triggerCharacters?r:void 0}class JO{constructor(e){this.onInitializeEmitter=new ae.Emitter,this.onInitializedEmitter=new ae.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Jp(this.services),this.services.ServiceRegistry.all.forEach(e=>Jp(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var n,r,i,s;const a=this.services.lsp.DocumentUpdateHandler,o=(n=this.services.lsp.FileOperationHandler)===null||n===void 0?void 0:n.fileOperationOptions,l=this.services.ServiceRegistry.all,c=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.Formatter}),u=l.map(x=>{var C,te;return(te=(C=x.lsp)===null||C===void 0?void 0:C.Formatter)===null||te===void 0?void 0:te.formatOnTypeOptions}).find(x=>!!x),d=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.CodeActionProvider}),p=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.SemanticTokenProvider}),h=zO(l.map(x=>{var C,te;return(te=(C=x.lsp)===null||C===void 0?void 0:C.SemanticTokenProvider)===null||te===void 0?void 0:te.semanticTokensOptions})),f=(i=(r=this.services.lsp)===null||r===void 0?void 0:r.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,y=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.DocumentLinkProvider}),$=XO(l.map(x=>{var C,te;return(te=(C=x.lsp)===null||C===void 0?void 0:C.SignatureHelp)===null||te===void 0?void 0:te.signatureHelpOptions})),v=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.TypeProvider}),m=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.ImplementationProvider}),g=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.CompletionProvider}),k=DO(l.map(x=>{var C,te;return(te=(C=x.lsp)===null||C===void 0?void 0:C.CompletionProvider)===null||te===void 0?void 0:te.completionOptions})),F=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.ReferencesProvider}),G=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.DocumentSymbolProvider}),X=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.DefinitionProvider}),ye=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.DocumentHighlightProvider}),Re=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.FoldingRangeProvider}),Te=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.HoverProvider}),P=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.RenameProvider}),b=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.CallHierarchyProvider}),T=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.TypeHierarchyProvider}),S=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.CodeLensProvider}),I=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.DeclarationProvider}),E=this.hasService(x=>{var C;return(C=x.lsp)===null||C===void 0?void 0:C.InlayHintProvider}),N=(s=this.services.lsp)===null||s===void 0?void 0:s.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:o},executeCommandProvider:f&&{commands:f},textDocumentSync:{change:ae.TextDocumentSyncKind.Incremental,openClose:!0,save:!!a.didSaveDocument,willSave:!!a.willSaveDocument,willSaveWaitUntil:!!a.willSaveDocumentWaitUntil},completionProvider:g?k:void 0,referencesProvider:F,documentSymbolProvider:G,definitionProvider:X,typeDefinitionProvider:v,documentHighlightProvider:ye,codeActionProvider:d,documentFormattingProvider:c,documentRangeFormattingProvider:c,documentOnTypeFormattingProvider:u,foldingRangeProvider:Re,hoverProvider:Te,renameProvider:P?{prepareProvider:!0}:void 0,semanticTokensProvider:p?h:void 0,signatureHelpProvider:$,implementationProvider:m,callHierarchyProvider:b?{}:void 0,typeHierarchyProvider:T?{}:void 0,documentLinkProvider:y?{resolveProvider:!1}:void 0,codeLensProvider:S?{resolveProvider:!1}:void 0,declarationProvider:I,inlayHintProvider:E?{resolveProvider:!1}:void 0,workspaceSymbolProvider:N?{resolveProvider:!!N.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){const n=this.services.lsp.Connection,r=n?Object.assign(Object.assign({},e),{register:i=>n.client.register(ae.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>n.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(r).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}}function QO(t){const e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");ZO(e,t),eD(e,t),tD(e,t),nD(e,t),rD(e,t),sD(e,t),aD(e,t),oD(e,t),lD(e,t),uD(e,t),fD(e,t),pD(e,t),iD(e,t),hD(e,t),dD(e,t),mD(e,t),gD(e,t),_D(e,t),RD(e,t),kD(e,t),wD(e,t),TD(e,t),vD(e,t),yD(e,t),cD(e,t),$D(e,t),e.onInitialize(r=>t.lsp.LanguageServer.initialize(r)),e.onInitialized(r=>{t.lsp.LanguageServer.initialized(r)}),t.workspace.TextDocuments.listen(e),e.listen()}function ZO(t,e){const n=e.lsp.DocumentUpdateHandler,r=e.workspace.TextDocuments;n.didOpenDocument&&r.onDidOpen(i=>n.didOpenDocument(i)),n.didChangeContent&&r.onDidChangeContent(i=>n.didChangeContent(i)),n.didCloseDocument&&r.onDidClose(i=>n.didCloseDocument(i)),n.didSaveDocument&&r.onDidSave(i=>n.didSaveDocument(i)),n.willSaveDocument&&r.onWillSave(i=>n.willSaveDocument(i)),n.willSaveDocumentWaitUntil&&r.onWillSaveWaitUntil(i=>n.willSaveDocumentWaitUntil(i)),n.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(i=>n.didChangeWatchedFiles(i))}function eD(t,e){const n=e.lsp.FileOperationHandler;n&&(n.didCreateFiles&&t.workspace.onDidCreateFiles(r=>n.didCreateFiles(r)),n.didRenameFiles&&t.workspace.onDidRenameFiles(r=>n.didRenameFiles(r)),n.didDeleteFiles&&t.workspace.onDidDeleteFiles(r=>n.didDeleteFiles(r)),n.willCreateFiles&&t.workspace.onWillCreateFiles(r=>n.willCreateFiles(r)),n.willRenameFiles&&t.workspace.onWillRenameFiles(r=>n.willRenameFiles(r)),n.willDeleteFiles&&t.workspace.onWillDeleteFiles(r=>n.willDeleteFiles(r)))}function tD(t,e){const n=e.workspace.DocumentBuilder;n.onUpdate(async(r,i)=>{for(const s of i)t.sendDiagnostics({uri:s.toString(),diagnostics:[]})}),n.onDocumentPhase(B.Validated,async r=>{r.diagnostics&&t.sendDiagnostics({uri:r.uri.toString(),diagnostics:r.diagnostics})})}function nD(t,e){t.onCompletion(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.CompletionProvider)===null||o===void 0?void 0:o.getCompletion(r,i,s)},e,B.IndexedReferences))}function rD(t,e){t.onReferences(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.ReferencesProvider)===null||o===void 0?void 0:o.findReferences(r,i,s)},e,B.IndexedReferences))}function iD(t,e){t.onCodeAction(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.CodeActionProvider)===null||o===void 0?void 0:o.getCodeActions(r,i,s)},e,B.Validated))}function sD(t,e){t.onDocumentSymbol(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.DocumentSymbolProvider)===null||o===void 0?void 0:o.getSymbols(r,i,s)},e,B.Parsed))}function aD(t,e){t.onDefinition(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.DefinitionProvider)===null||o===void 0?void 0:o.getDefinition(r,i,s)},e,B.IndexedReferences))}function oD(t,e){t.onTypeDefinition(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.TypeProvider)===null||o===void 0?void 0:o.getTypeDefinition(r,i,s)},e,B.IndexedReferences))}function lD(t,e){t.onImplementation(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.ImplementationProvider)===null||o===void 0?void 0:o.getImplementation(r,i,s)},e,B.IndexedReferences))}function cD(t,e){t.onDeclaration(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.DeclarationProvider)===null||o===void 0?void 0:o.getDeclaration(r,i,s)},e,B.IndexedReferences))}function uD(t,e){t.onDocumentHighlight(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.DocumentHighlightProvider)===null||o===void 0?void 0:o.getDocumentHighlight(r,i,s)},e,B.IndexedReferences))}function dD(t,e){t.onHover(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.HoverProvider)===null||o===void 0?void 0:o.getHoverContent(r,i,s)},e,B.IndexedReferences))}function fD(t,e){t.onFoldingRanges(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.FoldingRangeProvider)===null||o===void 0?void 0:o.getFoldingRanges(r,i,s)},e,B.Parsed))}function pD(t,e){t.onDocumentFormatting(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.Formatter)===null||o===void 0?void 0:o.formatDocument(r,i,s)},e,B.Parsed)),t.onDocumentRangeFormatting(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.Formatter)===null||o===void 0?void 0:o.formatDocumentRange(r,i,s)},e,B.Parsed)),t.onDocumentOnTypeFormatting(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.Formatter)===null||o===void 0?void 0:o.formatDocumentOnType(r,i,s)},e,B.Parsed))}function hD(t,e){t.onRenameRequest(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.RenameProvider)===null||o===void 0?void 0:o.rename(r,i,s)},e,B.IndexedReferences)),t.onPrepareRename(et((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.RenameProvider)===null||o===void 0?void 0:o.prepareRename(r,i,s)},e,B.IndexedReferences))}function mD(t,e){t.languages.inlayHint.on(vn((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.InlayHintProvider)===null||o===void 0?void 0:o.getInlayHints(r,i,s)},e,B.IndexedReferences))}function gD(t,e){const n={data:[]};t.languages.semanticTokens.on(vn((r,i,s,a)=>{var o;return!((o=r.lsp)===null||o===void 0)&&o.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlight(i,s,a):n},e,B.IndexedReferences)),t.languages.semanticTokens.onDelta(vn((r,i,s,a)=>{var o;return!((o=r.lsp)===null||o===void 0)&&o.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightDelta(i,s,a):n},e,B.IndexedReferences)),t.languages.semanticTokens.onRange(vn((r,i,s,a)=>{var o;return!((o=r.lsp)===null||o===void 0)&&o.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightRange(i,s,a):n},e,B.IndexedReferences))}function yD(t,e){t.onDidChangeConfiguration(n=>{n.settings&&e.workspace.ConfigurationProvider.updateConfiguration(n)})}function _D(t,e){const n=e.lsp.ExecuteCommandHandler;n&&t.onExecuteCommand(async(r,i)=>{var s;try{return await n.executeCommand(r.command,(s=r.arguments)!==null&&s!==void 0?s:[],i)}catch(a){return bn(a)}})}function vD(t,e){t.onDocumentLinks(vn((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.DocumentLinkProvider)===null||o===void 0?void 0:o.getDocumentLinks(r,i,s)},e,B.Parsed))}function RD(t,e){t.onSignatureHelp(vn((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.SignatureHelp)===null||o===void 0?void 0:o.provideSignatureHelp(r,i,s)},e,B.IndexedReferences))}function TD(t,e){t.onCodeLens(vn((n,r,i,s)=>{var a,o;return(o=(a=n.lsp)===null||a===void 0?void 0:a.CodeLensProvider)===null||o===void 0?void 0:o.provideCodeLens(r,i,s)},e,B.IndexedReferences))}function $D(t,e){var n;const r=e.lsp.WorkspaceSymbolProvider;if(r){const i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(a,o)=>{try{return await i.waitUntil(B.IndexedContent,o),await r.getSymbols(a,o)}catch(l){return bn(l)}});const s=(n=r.resolveSymbol)===null||n===void 0?void 0:n.bind(r);s&&t.onWorkspaceSymbolResolve(async(a,o)=>{try{return await i.waitUntil(B.IndexedContent,o),await s(a,o)}catch(l){return bn(l)}})}}function kD(t,e){t.languages.callHierarchy.onPrepare(vn(async(n,r,i,s)=>{var a;if(!((a=n.lsp)===null||a===void 0)&&a.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.prepareCallHierarchy(r,i,s);return o??null}return null},e,B.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(rc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.incomingCalls(r,i);return a??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(rc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.outgoingCalls(r,i);return a??null}return null},e))}function wD(t,e){e.ServiceRegistry.all.some(n=>{var r;return(r=n.lsp)===null||r===void 0?void 0:r.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(vn(async(n,r,i,s)=>{var a,o;const l=await((o=(a=n.lsp)===null||a===void 0?void 0:a.TypeHierarchyProvider)===null||o===void 0?void 0:o.prepareTypeHierarchy(r,i,s));return l??null},e,B.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(rc(async(n,r,i)=>{var s,a;const o=await((a=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.supertypes(r,i));return o??null},e)),t.languages.typeHierarchy.onSubtypes(rc(async(n,r,i)=>{var s,a;const o=await((a=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||a===void 0?void 0:a.subtypes(r,i));return o??null},e)))}function rc(t,e){const n=e.ServiceRegistry;return async(r,i)=>{const s=it.parse(r.item.uri),a=await Zh(e,i,s,B.IndexedReferences);if(a)return a;if(!n.hasServices(s)){const l=`Could not find service instance for uri: '${s}'`;return console.debug(l),bn(new Error(l))}const o=n.getServices(s);try{return await t(o,r,i)}catch(l){return bn(l)}}}function vn(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,a)=>{const o=it.parse(s.textDocument.uri),l=await Zh(e,a,o,n);if(l)return l;if(!i.hasServices(o)){const u=`Could not find service instance for uri: '${o}'`;return console.debug(u),bn(new Error(u))}const c=i.getServices(o);try{const u=await r.getOrCreateDocument(o);return await t(c,u,s,a)}catch(u){return bn(u)}}}function et(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,a)=>{const o=it.parse(s.textDocument.uri),l=await Zh(e,a,o,n);if(l)return l;if(!i.hasServices(o))return console.debug(`Could not find service instance for uri: '${o.toString()}'`),null;const c=i.getServices(o);try{const u=await r.getOrCreateDocument(o);return await t(c,u,s,a)}catch(u){return bn(u)}}}async function Zh(t,e,n,r){if(r!==void 0){const i=t.workspace.DocumentBuilder;try{await i.waitUntil(r,n,e)}catch(s){return bn(s)}}}function bn(t){if(Ys(t))return new ae.ResponseError(ae.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof ae.ResponseError)return t;throw t}class bD{getSymbolKind(e){return M.SymbolKind.Field}getCompletionItemKind(e){return M.CompletionItemKind.Reference}}class SD{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return[];const s=ar(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);return s?this.getReferences(s,n,e):[]}getReferences(e,n,r){const i=[],s=this.references.findDeclaration(e);if(s){const a={includeDeclaration:n.context.includeDeclaration};this.references.findReferences(s,a).forEach(o=>{i.push(M.Location.create(o.sourceUri.toString(),o.segment.range))})}return i}}class CD{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,n,r){const i={},s=e.parseResult.value.$cstNode;if(!s)return;const a=e.textDocument.offsetAt(n.position),o=ar(s,a,this.grammarConfig.nameRegexp);if(!o)return;const l=this.references.findDeclaration(o);if(!l)return;const c={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(l,c).forEach(d=>{const p=Ht.replace(d.segment.range,n.newName),h=d.sourceUri.toString();i[h]?i[h].push(p):i[h]=[p]}),{changes:i}}prepareRename(e,n,r){return this.renameNodeRange(e,n.position)}renameNodeRange(e,n){const r=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(n);if(r&&i){const s=ar(r,i,this.grammarConfig.nameRegexp);if(!s)return;if(this.references.findDeclaration(s)||this.isNameNode(s))return s.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&sT(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}}class AD{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,n=le.None){const r=[],i=e.query.toLowerCase();for(const s of this.indexManager.allElements())if(await rt(n),this.fuzzyMatcher.match(i,s.name)){const a=this.getWorkspaceSymbol(s);a&&r.push(a)}return r}getWorkspaceSymbol(e){const n=e.nameSegment;if(n)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:n.range,uri:e.documentUri.toString()}}}}class ZT{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new M.Emitter,this._onDidOpen=new M.Emitter,this._onDidClose=new M.Emitter,this._onDidSave=new M.Emitter,this._onWillSave=new M.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(pe.normalize(e))}set(e){const n=pe.normalize(e.uri);let r=!0;this._syncedDocuments.has(n)&&(r=!1),this._syncedDocuments.set(n,e);const i=Object.freeze({document:e});return this._onDidOpen.fire(i),this._onDidChangeContent.fire(i),r}delete(e){const n=pe.normalize(typeof e=="object"&&"uri"in e?e.uri:e),r=this._syncedDocuments.get(n);r!==void 0&&(this._syncedDocuments.delete(n),this._onDidClose.fire(Object.freeze({document:r})))}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=M.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=pe.normalize(i.uri),a=this._configuration.create(s,i.languageId,i.version,i.text);this._syncedDocuments.set(s,a);const o=Object.freeze({document:a});this._onDidOpen.fire(o),this._onDidChangeContent.fire(o)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:a}=i;if(a==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);const o=pe.normalize(i.uri);let l=this._syncedDocuments.get(o);l!==void 0&&(l=this._configuration.update(l,s,a),this._syncedDocuments.set(o,l),this._onDidChangeContent.fire(Object.freeze({document:l})))})),n.push(e.onDidCloseTextDocument(r=>{const i=pe.normalize(r.textDocument.uri),s=this._syncedDocuments.get(i);s!==void 0&&(this._syncedDocuments.delete(i),this._onDidClose.fire(Object.freeze({document:s})))})),n.push(e.onWillSaveTextDocument(r=>{const i=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{const s=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{const i=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),M.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}class ED{constructor(e){this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new M.Emitter,this._onDidSave=new M.Emitter,this._onDidChange=new M.Emitter,this._onDidClose=new M.Emitter,"listen"in e?this._cellTextDocuments=e:this._cellTextDocuments=new ZT(e)}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(pe.normalize(e))}getNotebookCell(e){const n=this.notebookCellMap.get(pe.normalize(e));return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"||"scheme"in e?e:e.document,r=this.notebookCellMap.get(pe.normalize(n));return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new Pr,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri);this.notebookDocuments.set(s,i.notebookDocument);for(const a of i.cellTextDocuments)n.openTextDocument({textDocument:a});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri),a=this.notebookDocuments.get(s);if(a===void 0)return;a.version=i.notebookDocument.version;const o=a.metadata;let l=!1;const c=i.change;c.metadata!==void 0&&(l=!0,a.metadata=c.metadata);const u=[],d=[],p=[],h=[];if(c.cells!==void 0){const m=c.cells;if(m.structure!==void 0){const g=m.structure.array;if(a.cells.splice(g.start,g.deleteCount,...g.cells!==void 0?g.cells:[]),m.structure.didOpen!==void 0)for(const k of m.structure.didOpen)n.openTextDocument({textDocument:k}),u.push(k.uri);if(m.structure.didClose)for(const k of m.structure.didClose)n.closeTextDocument({textDocument:k}),d.push(k.uri)}if(m.data!==void 0){const g=new Map(m.data.map(k=>[k.document,k]));for(let k=0;k<=a.cells.length;k++){const F=g.get(a.cells[k].document);if(F!==void 0){const G=a.cells.splice(k,1,F);if(p.push({old:G[0],new:F}),g.delete(F.document),g.size===0)break}}}if(m.textContent!==void 0)for(const g of m.textContent)n.changeTextDocument({textDocument:g.document,contentChanges:g.changes}),h.push(g.document.uri)}this.updateCellMap(a);const f={notebookDocument:a};l&&(f.metadata={old:o,new:a.metadata});const y=[];for(const m of u)y.push(this.getNotebookCell(m));const $=[];for(const m of d)$.push(this.getNotebookCell(m));const v=[];for(const m of h)v.push(this.getNotebookCell(m));(y.length>0||$.length>0||p.length>0||v.length>0)&&(f.cells={added:y,removed:$,changed:{data:p,textContent:v}}),(f.metadata!==void 0||f.cells!==void 0)&&this._onDidChange.fire(f)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.getNotebookDocument(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri),a=this.notebookDocuments.get(s);if(a!==void 0){this._onDidClose.fire(a);for(const o of i.cellTextDocuments)n.closeTextDocument({textDocument:o});this.notebookDocuments.delete(s);for(const o of a.cells)this.notebookCellMap.delete(o.document)}})),M.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}class Pr{onDidOpenTextDocument(e){return this.openHandler=e,M.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,M.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,M.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return Pr.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return Pr.NULL_DISPOSE}onDidSaveTextDocument(){return Pr.NULL_DISPOSE}}Pr.NULL_DISPOSE=Object.freeze({dispose:()=>{}});function PD(t){return Vl.merge(_T(t),ND(t))}function ND(t){return{lsp:{CompletionProvider:e=>new QT(e),DocumentSymbolProvider:e=>new LO(e),HoverProvider:e=>new qO(e),FoldingRangeProvider:e=>new UO(e),ReferencesProvider:e=>new SD(e),DefinitionProvider:e=>new xO(e),DocumentHighlightProvider:e=>new MO(e),RenameProvider:e=>new CD(e)},shared:()=>t.shared}}function ID(t){return Vl.merge(vT(t),OD(t))}function OD(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new JO(e),DocumentUpdateHandler:e=>new FO(e),WorkspaceSymbolProvider:e=>new AD(e),NodeKindProvider:()=>new bD,FuzzyMatcher:()=>new HO},workspace:{TextDocuments:()=>new ZT(Gl),NotebookDocuments:e=>new ED(e.workspace.TextDocuments)}}}var em=M;const h_="Access_group_direction",m_="Acl_extended_match",g_="Acl_extended_match_dest",wu="Acl_port_name",y_="Acl_port_value",__="Acl_protocol",v_="Acl_standard_match",R_="AlgorithmType_Options",T_="Bgp_neighbour_options",bu="Bgp_neighbour_update_source_option",Su="Bgp_update_source_interface_types",oh="COMMON";function DD(t){return Pn.isInstance(t,oh)}const $_="Configure_cmd",k_="Crypto_cmd_option",w_="Generate_cmd_option",b_="Interface_types",S_="Ip_access_list_option",C_="IP_cmd_option",A_="Ip_cmd_option_ospf_options",E_="Ip_cmd_options",P_="Key_cmd_option",N_="Line_types",I_="Logging_cmd",O_="Login_cmd",D_="Nat_direction",x_="Nat_interface_types",M_="No_ip_cmd_options",L_="No_options",F_="Ospf_interface_types",U_="Rip_interface_types",H_="Rsa_cmd_option",B_="Show_cmd_options",j_="Transport_cmd",K_="TransportInput_cmd",q_="UsageKeys_Option",G_="Username_cmd_option",Da="Access_group_in",xa="Access_group_out",Ma="Acl_any_match",La="Acl_dest_any_match",Fa="Acl_dest_host_match",Ua="Acl_dest_network_match",_i="Acl_extended_cmd",Cu="Acl_extended_deny_cmd",Au="Acl_extended_permit_cmd",Ha="Acl_host_match",Eu="ACL_NAME",Ba="Acl_network_match",Pu="ACL_NUMBER",ja="Acl_port_bgp",Ka="Acl_port_domain",qa="Acl_port_ftp",Ga="Acl_port_http",Wa="Acl_port_https",za="Acl_port_isakmp",Nu="Acl_port_match",Va="Acl_port_ntp",Ya="Acl_port_number",Iu="ACL_PORT_NUMBER",Xa="Acl_port_snmp",Ja="Acl_port_ssh",Qa="Acl_port_telnet",Za="Acl_port_tftp",eo="Acl_protocol_gre",to="Acl_protocol_icmp",no="Acl_protocol_ip",ro="Acl_protocol_tcp",io="Acl_protocol_udp",vi="Acl_standard_cmd",Ou="Acl_standard_deny_cmd",Du="Acl_standard_permit_cmd",xu="ACL_STATEMENT_NUMBER",so="AlgorithmTypeOption",Mu="Banner_cmd",Lu="Banner_cmd_option",Fu="BANNER_MESSAGE",Uu="BGP_AS_NUMBER",Hu="BGP_EBGP_MULTIHOP_NUMBER",ao="Bgp_neigbour_ebgp_multihop_option",Bu="Bgp_neighbor_cmd",oo="Bgp_neighbour_Remote_as_option",ju="Bgp_network_cmd",Ku="Bgp_router_id_cmd",lo="Bgp_update_source_interface_type_fastethernet",co="Bgp_update_source_interface_type_gigabitethernet",qu="CarrierDelay_cmd",Gu="COMMENT",uo="COMMENTLINE",Ri="Configure_cmd_options",Wu="CONSOLE_NUMBER",zu="Crypto_cmd",Vu="Description_cmd",Yu="DESCRIPTION_INPUT",fo="Domainname_cmd",Xu="DOMAINNAME_INPUT",Ju="Duplex_cmd",Qu="Duplex_option",Zu="Enable_cmds",ml="ExecTimeout_cmd";function xD(t){return Pn.isInstance(t,ml)}const po="Generate_cmd",ed="Hostname_cmd",td="HOSTNAME_INPUT",nd="INTERFACE_CARRIER_DELAY_NUMBER",rd="Interface_cmd",id="INTERFACE_NUMBER_INPUT",sd="INTERFACE_SPEED_NUMBER",Ti="Interface_type_fastethernet",$i="Interface_type_gigabitethernet",ki="Interface_type_vlan",ad="INTERFACE_VLAN_NUMBER",od="IP",ho="Ip_access_list_cmd_option",ld="IP_cmd",gl="IP_cmd_interface";function W_(t){return Pn.isInstance(t,gl)}const mo="Ip_cmd_option_access_group",ps="Ip_cmd_option_address";function z_(t){return Pn.isInstance(t,ps)}const go="Ip_cmd_option_nat",yo="Ip_cmd_option_ospf",_o="Ip_cmd_option_ospf_option_cost",vo="Ip_cmd_option_ospf_option_priority",cd="Ip_Helper_cmd",ud="Ip_nat_cmd",dd="Ip_nat_cmd_option",fd="Ip_nat_inside_cmd",pd="Ip_nat_inside_source_cmd",hd="Ip_nat_inside_source_list_cmd",md="Ip_nat_inside_source_list_interface_cmd",gd="Ip_nat_overload_cmd",Ro="Key_cmd",yl="KEYWORDS";function MD(t){return Pn.isInstance(t,yl)}const yd="Line_cmd",_d="Line_ExecTimeoutValue",To="Line_LoggingOption",$o="Line_LoginOption",wi="Line_type_console",bi="Line_type_vty",ko="MD5Option",vd="MD5Option_cmd",wo="Modulus_cmd",Rd="MODULUS_INPUT",bo="Nat_inside",So="Nat_interface_fastethernet",Co="Nat_interface_gigabitethernet",Td="NAT_INTERFACE_NUMBER_INPUT",Ao="Nat_outside",Eo="No_banner_cmd",$d="No_cmd",kd="No_cmd_interface",wd="No_cmd_interface_option",Po="No_ip_cmd",No="No_ip_cmd_option_domain_lookup",bd="OSPF_AREA_NUMBER",Sd="OSPF_COST_NUMBER",Cd="Ospf_default_information_cmd",Ad="Ospf_default_information_cmd_options",Ed="Ospf_network_cmd",Pd="Ospf_passive_interface_cmd",Nd="OSPF_PASSIVE_INTERFACE_NUMBER",Io="Ospf_passive_interface_type_fastethernet",Oo="Ospf_passive_interface_type_gigabitethernet",Id="Ospf_priority_cmd",Od="OSPF_PRIORITY_NUMBER",Dd="OSPF_PROCESS_NUMBER",xd="Ospf_redistribute_cmd",Md="Ospf_redistribute_cmd_options",Ld="Ospf_router_id_cmd",Do="PasswordOption",Fd="Ping_cmd",Ud="PRIVILEGE_INPUT",xo="PrivilegeOption",Hd="Rip_default_information_cmd",Bd="Rip_default_information_cmd_options",jd="Rip_network_cmd",Kd="Rip_no_cmd_options",qd="Rip_no_cmds",Gd="Rip_passive_interface_cmd",Wd="RIP_PASSIVE_INTERFACE_NUMBER",Mo="Rip_passive_interface_type_fastethernet",Lo="Rip_passive_interface_type_gigabitethernet",zd="Rip_redistribute_cmd",Vd="Rip_redistribute_cmd_options",Yd="Rip_version_cmd",Xd="RIP_VERSION_NUMBER",Jd="Router_cmd",Fo="Router_cmd_option",Qd="ROUTER_ID",Uo="Rsa_cmd",Zd="Script",Ho="ScryptOption",ef="ScryptOption_cmd",Bo="SecretOption",jo="Sha256Option",tf="Sha256Option_cmd",nf="Show_cmd",Ko="Show_interface_option",qo="Show_run_option",rf="Shutdown_cmd",sf="Speed_cmd",af="Speed_cmd_fe",Go="SSH_cmd",of="SSHOptions",lf="Stat",cf="SUBNETMASK",uf="Template_grundkonfig_cmd",df="Template_interface_cmd",ff="Template_ospf_cmd",pf="Template_rip_cmd",Wo="Transport_cmd_option",zo="TransportInputList",hf="TransportProto",mf="UPDATE_SOURCE_INTERFACE_NUMBER_INPUT",Vo="UsageKeys_cmd",gf="Username_cmd",yf="USERNAME_INPUT",_f="USERNAME_PASSWORD_INPUT",vf="VERSION_INPUT",Rf="VTY_NUMBER",Tf="WILDCARDMASK",Si="Acl_extended_cmds",Ci="Acl_standard_cmds",Ai="Configure_cmds",Ei="Interface_fastethernet_cmds",Pi="Interface_gigabitethernet_cmds",Ni="Interface_vlan_cmds",wr="Line_console_cmds";function LD(t){return Pn.isInstance(t,wr)}const br="Line_vty_cmds";function FD(t){return Pn.isInstance(t,br)}const Ii="Bgp_cmds",Oi="Ospf_cmds",Di="Rip_cmds",Yo="Exit_acl_extended",Xo="Exit_acl_standard",Jo="Exit_configure",Qo="Exit_interface_fastethernet",Zo="Exit_interface_gigabitethernet",el="Exit_interface_vlan",hs="Exit_line_console";function UD(t){return Pn.isInstance(t,hs)}const ms="Exit_line_vty";function HD(t){return Pn.isInstance(t,ms)}const tl="Exit_bgp",nl="Exit_ospf",rl="Exit_rip";class e$ extends Y_{getAllTypes(){return[Eu,Pu,Iu,xu,h_,Da,xa,Ma,La,Fa,Ua,_i,Si,Cu,m_,g_,Au,Ha,Ba,ja,Ka,qa,Ga,Wa,za,Nu,wu,Va,Ya,Xa,Ja,Qa,Za,y_,__,eo,to,no,ro,io,vi,Ci,Ou,v_,Du,so,R_,Fu,Uu,Hu,Mu,Lu,Ii,ao,Bu,oo,T_,bu,ju,Ku,lo,co,Su,Gu,uo,oh,Wu,qu,$_,Ri,Ai,zu,k_,Yu,Xu,Vu,fo,Ju,Qu,Zu,ml,Yo,Xo,tl,Jo,Qo,Zo,el,hs,ms,nl,rl,po,w_,td,ed,nd,id,sd,ad,od,ld,gl,C_,rd,Ei,Pi,Ti,$i,ki,b_,Ni,cd,ho,S_,mo,ps,go,yo,_o,vo,A_,E_,ud,dd,fd,pd,hd,md,gd,yl,Ro,P_,_d,To,$o,yd,wr,wi,bi,N_,br,I_,O_,ko,vd,Rd,wo,Td,D_,bo,So,Co,x_,Ao,Eo,$d,kd,wd,Po,No,M_,L_,bd,Sd,Nd,Od,Dd,Oi,Cd,Ad,F_,Ed,Pd,Io,Oo,Id,xd,Md,Ld,Ud,Do,Fd,xo,Wd,Xd,Qd,Di,Hd,Bd,U_,jd,Kd,qd,Gd,Mo,Lo,zd,Vd,Yd,Jd,Fo,Uo,H_,of,Go,cf,Zd,Ho,ef,Bo,jo,tf,nf,B_,Ko,qo,rf,sf,af,lf,uf,df,ff,pf,zo,K_,hf,j_,Wo,mf,yf,_f,q_,Vo,gf,G_,vf,Rf,Tf]}computeIsSubtype(e,n){switch(e){case Da:case xa:return this.isSubtype(h_,n);case Ma:case Ha:case Ba:return this.isSubtype(m_,n)||this.isSubtype(v_,n);case La:case Fa:case Ua:return this.isSubtype(g_,n);case _i:case vi:return this.isSubtype(S_,n);case Si:return this.isSubtype(_i,n);case ja:case Ka:case qa:case Ga:case Wa:case za:case Va:case Xa:case Ja:case Qa:case Za:return this.isSubtype(wu,n);case wu:case Ya:return this.isSubtype(y_,n);case eo:case to:case no:case ro:case io:return this.isSubtype(__,n);case Ci:return this.isSubtype(vi,n);case so:case Do:case xo:case Bo:return this.isSubtype(G_,n);case Ii:case Oi:case Di:return this.isSubtype(Fo,n);case ao:case oo:case bu:return this.isSubtype(T_,n);case lo:case co:return this.isSubtype(Su,n);case Su:return this.isSubtype(bu,n);case uo:return this.isSubtype(oh,n);case Ri:return this.isSubtype($_,n);case Ai:return this.isSubtype(Ri,n);case fo:case ho:case Go:return this.isSubtype(C_,n);case Yo:return this.isSubtype(Si,n);case Xo:return this.isSubtype(Ci,n);case tl:return this.isSubtype(Ii,n);case Jo:return this.isSubtype(Ai,n);case Qo:return this.isSubtype(Ei,n);case Zo:return this.isSubtype(Pi,n);case el:return this.isSubtype(Ni,n);case hs:return this.isSubtype(wr,n);case ms:return this.isSubtype(br,n);case nl:return this.isSubtype(Oi,n);case rl:return this.isSubtype(Di,n);case po:return this.isSubtype(P_,n);case Ei:return this.isSubtype(Ti,n);case Pi:return this.isSubtype($i,n);case Ti:case $i:case ki:return this.isSubtype(b_,n);case Ni:return this.isSubtype(ki,n);case mo:case ps:case go:case yo:return this.isSubtype(E_,n);case _o:case vo:return this.isSubtype(A_,n);case Ro:return this.isSubtype(k_,n);case wr:return this.isSubtype(wi,n);case To:return this.isSubtype(I_,n);case $o:return this.isSubtype(O_,n);case wi:case bi:return this.isSubtype(N_,n);case br:return this.isSubtype(bi,n);case ko:case Ho:case jo:return this.isSubtype(R_,n);case wo:return this.isSubtype(q_,n);case bo:case Ao:return this.isSubtype(D_,n);case So:case Co:return this.isSubtype(x_,n);case Eo:case Po:return this.isSubtype(L_,n);case No:return this.isSubtype(M_,n);case Io:case Oo:return this.isSubtype(F_,n);case Mo:case Lo:return this.isSubtype(U_,n);case Uo:return this.isSubtype(w_,n);case Ko:case qo:return this.isSubtype(B_,n);case Wo:return this.isSubtype(j_,n);case zo:return this.isSubtype(K_,n);case Vo:return this.isSubtype(H_,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Da:return{name:Da,properties:[{name:"direction"}]};case xa:return{name:xa,properties:[{name:"direction"}]};case Ma:return{name:Ma,properties:[{name:"option"}]};case La:return{name:La,properties:[{name:"option"},{name:"port"}]};case Fa:return{name:Fa,properties:[{name:"ip"},{name:"port"}]};case Ua:return{name:Ua,properties:[{name:"ip"},{name:"mask"},{name:"port"}]};case _i:return{name:_i,properties:[{name:"comment"},{name:"name"}]};case Cu:return{name:Cu,properties:[{name:"comment"},{name:"destination"},{name:"protocol"},{name:"sequence"},{name:"source"}]};case Au:return{name:Au,properties:[{name:"comment"},{name:"destination"},{name:"protocol"},{name:"sequence"},{name:"source"}]};case Ha:return{name:Ha,properties:[{name:"ip"}]};case Eu:return{name:Eu,properties:[{name:"value"}]};case Ba:return{name:Ba,properties:[{name:"ip"},{name:"mask"}]};case Pu:return{name:Pu,properties:[{name:"value"}]};case ja:return{name:ja,properties:[{name:"value"}]};case Ka:return{name:Ka,properties:[{name:"value"}]};case qa:return{name:qa,properties:[{name:"value"}]};case Ga:return{name:Ga,properties:[{name:"value"}]};case Wa:return{name:Wa,properties:[{name:"value"}]};case za:return{name:za,properties:[{name:"value"}]};case Nu:return{name:Nu,properties:[{name:"port"}]};case Va:return{name:Va,properties:[{name:"value"}]};case Ya:return{name:Ya,properties:[{name:"value"}]};case Iu:return{name:Iu,properties:[{name:"value"}]};case Xa:return{name:Xa,properties:[{name:"value"}]};case Ja:return{name:Ja,properties:[{name:"value"}]};case Qa:return{name:Qa,properties:[{name:"value"}]};case Za:return{name:Za,properties:[{name:"value"}]};case eo:return{name:eo,properties:[{name:"protocol"}]};case to:return{name:to,properties:[{name:"protocol"}]};case no:return{name:no,properties:[{name:"protocol"}]};case ro:return{name:ro,properties:[{name:"protocol"}]};case io:return{name:io,properties:[{name:"protocol"}]};case vi:return{name:vi,properties:[{name:"comment"},{name:"value"}]};case Ou:return{name:Ou,properties:[{name:"comment"},{name:"option"}]};case Du:return{name:Du,properties:[{name:"comment"},{name:"option"}]};case xu:return{name:xu,properties:[{name:"value"}]};case so:return{name:so,properties:[{name:"option"}]};case Mu:return{name:Mu,properties:[{name:"comment"},{name:"message"},{name:"option"}]};case Lu:return{name:Lu,properties:[{name:"option"}]};case Fu:return{name:Fu,properties:[{name:"message",defaultValue:[]}]};case Uu:return{name:Uu,properties:[{name:"value"}]};case Hu:return{name:Hu,properties:[{name:"value"}]};case ao:return{name:ao,properties:[{name:"multihop"}]};case Bu:return{name:Bu,properties:[{name:"comment"},{name:"neighbour"},{name:"option"}]};case oo:return{name:oo,properties:[{name:"remoteASnumber"}]};case ju:return{name:ju,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Ku:return{name:Ku,properties:[{name:"comment"},{name:"id"}]};case lo:return{name:lo,properties:[{name:"number"},{name:"type"}]};case co:return{name:co,properties:[{name:"number"},{name:"type"}]};case qu:return{name:qu,properties:[{name:"comment"},{name:"seconds"}]};case Gu:return{name:Gu,properties:[{name:"value"}]};case uo:return{name:uo,properties:[{name:"value"}]};case Ri:return{name:Ri,properties:[{name:"comment"}]};case Wu:return{name:Wu,properties:[{name:"value"}]};case zu:return{name:zu,properties:[{name:"comment"},{name:"option"}]};case Vu:return{name:Vu,properties:[{name:"comment"},{name:"value"}]};case Yu:return{name:Yu,properties:[{name:"value",defaultValue:[]}]};case fo:return{name:fo,properties:[{name:"comment"},{name:"value"}]};case Xu:return{name:Xu,properties:[{name:"value"}]};case Ju:return{name:Ju,properties:[{name:"comment"},{name:"option"}]};case Qu:return{name:Qu,properties:[{name:"option"}]};case Zu:return{name:Zu,properties:[{name:"lines",defaultValue:[]}]};case ml:return{name:ml,properties:[{name:"exectimeoutvalue"}]};case po:return{name:po,properties:[{name:"option"}]};case ed:return{name:ed,properties:[{name:"comment"},{name:"value"}]};case td:return{name:td,properties:[{name:"value"}]};case nd:return{name:nd,properties:[{name:"value"}]};case rd:return{name:rd,properties:[{name:"types"}]};case id:return{name:id,properties:[{name:"value"}]};case sd:return{name:sd,properties:[{name:"value"}]};case Ti:return{name:Ti,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case $i:return{name:$i,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ki:return{name:ki,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ad:return{name:ad,properties:[{name:"value"}]};case od:return{name:od,properties:[{name:"value"}]};case ho:return{name:ho,properties:[{name:"option"}]};case ld:return{name:ld,properties:[{name:"option"}]};case gl:return{name:gl,properties:[{name:"option"}]};case mo:return{name:mo,properties:[{name:"comment"},{name:"direction"},{name:"name"}]};case ps:return{name:ps,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case go:return{name:go,properties:[{name:"comment"},{name:"direction"}]};case yo:return{name:yo,properties:[{name:"comment"},{name:"option"}]};case _o:return{name:_o,properties:[{name:"cost"}]};case vo:return{name:vo,properties:[{name:"priority"}]};case cd:return{name:cd,properties:[{name:"comment"},{name:"value"}]};case ud:return{name:ud,properties:[{name:"option"}]};case dd:return{name:dd,properties:[{name:"option"}]};case fd:return{name:fd,properties:[{name:"option"}]};case pd:return{name:pd,properties:[{name:"option"}]};case hd:return{name:hd,properties:[{name:"listName"},{name:"option"}]};case md:return{name:md,properties:[{name:"interface"},{name:"option"}]};case gd:return{name:gd,properties:[{name:"comment"}]};case Ro:return{name:Ro,properties:[{name:"option"}]};case yl:return{name:yl,properties:[{name:"keywords"}]};case yd:return{name:yd,properties:[{name:"command"},{name:"types"}]};case _d:return{name:_d,properties:[{name:"comment"},{name:"minutes"},{name:"seconds"}]};case To:return{name:To,properties:[{name:"comment"},{name:"option"}]};case $o:return{name:$o,properties:[{name:"comment"},{name:"option"}]};case wi:return{name:wi,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case bi:return{name:bi,properties:[{name:"comment"},{name:"end"},{name:"start"},{name:"type"}]};case ko:return{name:ko,properties:[{name:"option"}]};case vd:return{name:vd,properties:[{name:"value"}]};case wo:return{name:wo,properties:[{name:"value"}]};case Rd:return{name:Rd,properties:[{name:"value"}]};case bo:return{name:bo,properties:[{name:"direction"}]};case So:return{name:So,properties:[{name:"types"}]};case Co:return{name:Co,properties:[{name:"types"}]};case Td:return{name:Td,properties:[{name:"value"}]};case Ao:return{name:Ao,properties:[{name:"direction"}]};case Eo:return{name:Eo,properties:[{name:"option"}]};case $d:return{name:$d,properties:[{name:"comment"},{name:"option"}]};case kd:return{name:kd,properties:[{name:"option"}]};case wd:return{name:wd,properties:[{name:"comment"}]};case Po:return{name:Po,properties:[{name:"option"}]};case No:return{name:No,properties:[{name:"type"}]};case bd:return{name:bd,properties:[{name:"value"}]};case Sd:return{name:Sd,properties:[{name:"value"}]};case Cd:return{name:Cd,properties:[{name:"comment"},{name:"option"}]};case Ad:return{name:Ad,properties:[{name:"option"}]};case Ed:return{name:Ed,properties:[{name:"area"},{name:"comment"},{name:"ip"},{name:"mask"}]};case Pd:return{name:Pd,properties:[{name:"comment"},{name:"types"}]};case Nd:return{name:Nd,properties:[{name:"value"}]};case Io:return{name:Io,properties:[{name:"number"},{name:"type"}]};case Oo:return{name:Oo,properties:[{name:"number"},{name:"type"}]};case Id:return{name:Id,properties:[{name:"comment"},{name:"value"}]};case Od:return{name:Od,properties:[{name:"value"}]};case Dd:return{name:Dd,properties:[{name:"value"}]};case xd:return{name:xd,properties:[{name:"comment"},{name:"option"}]};case Md:return{name:Md,properties:[{name:"option"}]};case Ld:return{name:Ld,properties:[{name:"comment"},{name:"id"}]};case Do:return{name:Do,properties:[{name:"value"}]};case Fd:return{name:Fd,properties:[{name:"comment"},{name:"ip"}]};case Ud:return{name:Ud,properties:[{name:"value"}]};case xo:return{name:xo,properties:[{name:"value"}]};case Hd:return{name:Hd,properties:[{name:"comment"},{name:"option"}]};case Bd:return{name:Bd,properties:[{name:"option"}]};case jd:return{name:jd,properties:[{name:"comment"},{name:"ip"}]};case Kd:return{name:Kd,properties:[{name:"options"}]};case qd:return{name:qd,properties:[{name:"comment"},{name:"options"}]};case Gd:return{name:Gd,properties:[{name:"types"}]};case Wd:return{name:Wd,properties:[{name:"value"}]};case Mo:return{name:Mo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Lo:return{name:Lo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case zd:return{name:zd,properties:[{name:"comment"},{name:"option"}]};case Vd:return{name:Vd,properties:[{name:"option"}]};case Yd:return{name:Yd,properties:[{name:"RipVersion"}]};case Xd:return{name:Xd,properties:[{name:"value"}]};case Jd:return{name:Jd,properties:[{name:"option"}]};case Fo:return{name:Fo,properties:[{name:"asn"},{name:"comment"},{name:"process"}]};case Qd:return{name:Qd,properties:[{name:"value"}]};case Uo:return{name:Uo,properties:[{name:"option"}]};case Zd:return{name:Zd,properties:[{name:"script"}]};case Ho:return{name:Ho,properties:[{name:"option"}]};case ef:return{name:ef,properties:[{name:"value"}]};case Bo:return{name:Bo,properties:[{name:"value"}]};case jo:return{name:jo,properties:[{name:"option"}]};case tf:return{name:tf,properties:[{name:"value"}]};case nf:return{name:nf,properties:[{name:"options"}]};case Ko:return{name:Ko,properties:[{name:"comment"},{name:"option"}]};case qo:return{name:qo,properties:[{name:"comment"},{name:"option"}]};case rf:return{name:rf,properties:[{name:"comment"}]};case sf:return{name:sf,properties:[{name:"comment"},{name:"value"}]};case af:return{name:af,properties:[{name:"comment"},{name:"value"}]};case Go:return{name:Go,properties:[{name:"option"}]};case of:return{name:of,properties:[{name:"comment"},{name:"value"}]};case lf:return{name:lf,properties:[{name:"lines",defaultValue:[]}]};case cf:return{name:cf,properties:[{name:"value"}]};case uf:return{name:uf,properties:[{name:"comment"}]};case df:return{name:df,properties:[{name:"comment"}]};case ff:return{name:ff,properties:[{name:"comment"}]};case pf:return{name:pf,properties:[{name:"comment"}]};case Wo:return{name:Wo,properties:[{name:"option"}]};case zo:return{name:zo,properties:[{name:"comment"},{name:"options",defaultValue:[]}]};case hf:return{name:hf,properties:[{name:"option"}]};case mf:return{name:mf,properties:[{name:"value"}]};case Vo:return{name:Vo,properties:[{name:"option"}]};case gf:return{name:gf,properties:[{name:"comment"},{name:"name"},{name:"options",defaultValue:[]}]};case yf:return{name:yf,properties:[{name:"value"}]};case _f:return{name:_f,properties:[{name:"value"}]};case vf:return{name:vf,properties:[{name:"value"}]};case Rf:return{name:Rf,properties:[{name:"value"}]};case Tf:return{name:Tf,properties:[{name:"value"}]};case Si:return{name:Si,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"name"}]};case Ci:return{name:Ci,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"value"}]};case Ai:return{name:Ai,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Ei:return{name:Ei,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Pi:return{name:Pi,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Ni:return{name:Ni,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case wr:return{name:wr,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case br:return{name:br,properties:[{name:"comment"},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case Ii:return{name:Ii,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case Oi:return{name:Oi,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case Di:return{name:Di,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case Yo:return{name:Yo,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"name"}]};case Xo:return{name:Xo,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"value"}]};case Jo:return{name:Jo,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]}]};case Qo:return{name:Qo,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Zo:return{name:Zo,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case el:return{name:el,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case hs:return{name:hs,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ms:return{name:ms,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case tl:return{name:tl,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};case nl:return{name:nl,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};case rl:return{name:rl,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};default:return{name:e,properties:[]}}}}const Pn=new e$;let il;const BD=()=>il??(il=tI(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "CiscoIOS",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "Script",
      "definition": {
        "$type": "Assignment",
        "feature": "script",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@1"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Stat",
      "definition": {
        "$type": "Assignment",
        "feature": "lines",
        "operator": "+=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@2"
          },
          "arguments": []
        },
        "cardinality": "+"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Enable_cmds",
      "definition": {
        "$type": "Assignment",
        "feature": "lines",
        "operator": "+=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@8"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@262"
              },
              "arguments": []
            }
          ]
        },
        "cardinality": "+"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ping_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ping"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Show_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "show"
          },
          {
            "$type": "Assignment",
            "feature": "options",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Show_cmd_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Show_run_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "run"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Show_interface_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "interface"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Configure_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "configure"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@9"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Configure_cmd_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "terminal"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@57"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "memory"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IP",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@52"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "WILDCARDMASK",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@52"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SUBNETMASK",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@52"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "COMMENT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@49"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "COMMON",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@51"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "COMMENTLINE",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@49"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "fragment": true,
      "name": "CR",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "comment",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@13"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@51"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "HOSTNAME_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "USERNAME_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "USERNAME_PASSWORD_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PRIVILEGE_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MODULUS_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VERSION_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BANNER_MESSAGE",
      "definition": {
        "$type": "Assignment",
        "feature": "message",
        "operator": "+=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        },
        "cardinality": "+"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DOMAINNAME_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OSPF_PROCESS_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OSPF_AREA_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OSPF_COST_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OSPF_PRIORITY_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "OSPF_PASSIVE_INTERFACE_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@50"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "INTERFACE_NUMBER_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@50"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DESCRIPTION_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "+=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@50"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@54"
              },
              "arguments": []
            }
          ]
        },
        "cardinality": "+"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "NAT_INTERFACE_NUMBER_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@50"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ACL_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ACL_PORT_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ACL_STATEMENT_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CONSOLE_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "VTY_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BGP_AS_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BGP_EBGP_MULTIHOP_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UPDATE_SOURCE_INTERFACE_NUMBER_INPUT",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@50"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "INTERFACE_SPEED_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "INTERFACE_CARRIER_DELAY_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "INTERFACE_VLAN_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RIP_VERSION_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@54"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "RIP_PASSIVE_INTERFACE_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@50"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ROUTER_ID",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@52"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Star",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "*"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[ \\\\t]+/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "COMMENT_TOKEN",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[#!][^\\\\r\\\\n]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INTERFACE_NUMBER",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+\\\\/[0-9]+(\\\\.[0-9]+)?/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "NL",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "\\r"
            },
            "cardinality": "?"
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "\\n"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "IPv4_DDC",
      "definition": {
        "$type": "TerminalGroup",
        "elements": [
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@54"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@54"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@54"
            }
          },
          {
            "$type": "CharacterRange",
            "left": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "TerminalRuleCall",
            "rule": {
              "$ref": "#/rules@54"
            }
          }
        ]
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INPUT_lexer",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[A-Za-z0-9\\\\-_.,]*[A-Za-z][A-Za-z0-9\\\\-_.,]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "ParserRule",
      "name": "KEYWORDS",
      "definition": {
        "$type": "Assignment",
        "feature": "keywords",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "Keyword",
              "value": "standard"
            },
            {
              "$type": "Keyword",
              "value": "extended"
            },
            {
              "$type": "Keyword",
              "value": "exit"
            },
            {
              "$type": "Keyword",
              "value": "permit"
            },
            {
              "$type": "Keyword",
              "value": "deny"
            },
            {
              "$type": "Keyword",
              "value": "any"
            },
            {
              "$type": "Keyword",
              "value": "host"
            },
            {
              "$type": "Keyword",
              "value": "ip"
            },
            {
              "$type": "Keyword",
              "value": "icmp"
            },
            {
              "$type": "Keyword",
              "value": "tcp"
            },
            {
              "$type": "Keyword",
              "value": "udp"
            },
            {
              "$type": "Keyword",
              "value": "gre"
            },
            {
              "$type": "Keyword",
              "value": "eq"
            },
            {
              "$type": "Keyword",
              "value": "isakmp"
            },
            {
              "$type": "Keyword",
              "value": "https"
            },
            {
              "$type": "Keyword",
              "value": "http"
            },
            {
              "$type": "Keyword",
              "value": "ftp"
            },
            {
              "$type": "Keyword",
              "value": "ssh"
            },
            {
              "$type": "Keyword",
              "value": "telnet"
            },
            {
              "$type": "Keyword",
              "value": "domain"
            },
            {
              "$type": "Keyword",
              "value": "tftp"
            },
            {
              "$type": "Keyword",
              "value": "snmp"
            },
            {
              "$type": "Keyword",
              "value": "ntp"
            },
            {
              "$type": "Keyword",
              "value": "bgp"
            },
            {
              "$type": "Keyword",
              "value": "router-id"
            },
            {
              "$type": "Keyword",
              "value": "neighbor"
            },
            {
              "$type": "Keyword",
              "value": "remote-as"
            },
            {
              "$type": "Keyword",
              "value": "update-source"
            },
            {
              "$type": "Keyword",
              "value": "gigabitethernet"
            },
            {
              "$type": "Keyword",
              "value": "fastethernet"
            },
            {
              "$type": "Keyword",
              "value": "ebgp-multihop"
            },
            {
              "$type": "Keyword",
              "value": "next-hop-self"
            },
            {
              "$type": "Keyword",
              "value": "route-reflector-client"
            },
            {
              "$type": "Keyword",
              "value": "network"
            },
            {
              "$type": "Keyword",
              "value": "mask"
            },
            {
              "$type": "Keyword",
              "value": "*"
            },
            {
              "$type": "Keyword",
              "value": "username"
            },
            {
              "$type": "Keyword",
              "value": "privilege"
            },
            {
              "$type": "Keyword",
              "value": "password"
            },
            {
              "$type": "Keyword",
              "value": "secret"
            },
            {
              "$type": "Keyword",
              "value": "algorithm-type"
            },
            {
              "$type": "Keyword",
              "value": "md5"
            },
            {
              "$type": "Keyword",
              "value": "scrypt"
            },
            {
              "$type": "Keyword",
              "value": "sha256"
            },
            {
              "$type": "Keyword",
              "value": "banner"
            },
            {
              "$type": "Keyword",
              "value": "config-save"
            },
            {
              "$type": "Keyword",
              "value": "exec"
            },
            {
              "$type": "Keyword",
              "value": "incoming"
            },
            {
              "$type": "Keyword",
              "value": "login"
            },
            {
              "$type": "Keyword",
              "value": "motd"
            },
            {
              "$type": "Keyword",
              "value": "prompt-timeout"
            },
            {
              "$type": "Keyword",
              "value": "slip-ppp"
            },
            {
              "$type": "Keyword",
              "value": "domain-name"
            },
            {
              "$type": "Keyword",
              "value": "version"
            },
            {
              "$type": "Keyword",
              "value": "hostname"
            },
            {
              "$type": "Keyword",
              "value": "crypto"
            },
            {
              "$type": "Keyword",
              "value": "key"
            },
            {
              "$type": "Keyword",
              "value": "generate"
            },
            {
              "$type": "Keyword",
              "value": "rsa"
            },
            {
              "$type": "Keyword",
              "value": "usage-keys"
            },
            {
              "$type": "Keyword",
              "value": "modulus"
            },
            {
              "$type": "Keyword",
              "value": "no"
            },
            {
              "$type": "Keyword",
              "value": "domain-lookup"
            },
            {
              "$type": "Keyword",
              "value": "router"
            },
            {
              "$type": "Keyword",
              "value": "ospf"
            },
            {
              "$type": "Keyword",
              "value": "rip"
            },
            {
              "$type": "Keyword",
              "value": "line"
            },
            {
              "$type": "Keyword",
              "value": "console"
            },
            {
              "$type": "Keyword",
              "value": "vty"
            },
            {
              "$type": "Keyword",
              "value": "interface"
            },
            {
              "$type": "Keyword",
              "value": "vlan"
            },
            {
              "$type": "Keyword",
              "value": "access-list"
            },
            {
              "$type": "Keyword",
              "value": "nat"
            },
            {
              "$type": "Keyword",
              "value": "inside"
            },
            {
              "$type": "Keyword",
              "value": "source"
            },
            {
              "$type": "Keyword",
              "value": "list"
            },
            {
              "$type": "Keyword",
              "value": "overload"
            },
            {
              "$type": "Keyword",
              "value": "ping"
            },
            {
              "$type": "Keyword",
              "value": "show"
            },
            {
              "$type": "Keyword",
              "value": "run"
            },
            {
              "$type": "Keyword",
              "value": "configure"
            },
            {
              "$type": "Keyword",
              "value": "terminal"
            },
            {
              "$type": "Keyword",
              "value": "memory"
            },
            {
              "$type": "Keyword",
              "value": "speed"
            },
            {
              "$type": "Keyword",
              "value": "carrier-delay"
            },
            {
              "$type": "Keyword",
              "value": "duplex"
            },
            {
              "$type": "Keyword",
              "value": "auto"
            },
            {
              "$type": "Keyword",
              "value": "full"
            },
            {
              "$type": "Keyword",
              "value": "half"
            },
            {
              "$type": "Keyword",
              "value": "address"
            },
            {
              "$type": "Keyword",
              "value": "secondary"
            },
            {
              "$type": "Keyword",
              "value": "cost"
            },
            {
              "$type": "Keyword",
              "value": "priority"
            },
            {
              "$type": "Keyword",
              "value": "outside"
            },
            {
              "$type": "Keyword",
              "value": "access-group"
            },
            {
              "$type": "Keyword",
              "value": "in"
            },
            {
              "$type": "Keyword",
              "value": "out"
            },
            {
              "$type": "Keyword",
              "value": "shutdown"
            },
            {
              "$type": "Keyword",
              "value": "description"
            },
            {
              "$type": "Keyword",
              "value": "helper-address"
            },
            {
              "$type": "Keyword",
              "value": "local"
            },
            {
              "$type": "Keyword",
              "value": "logging"
            },
            {
              "$type": "Keyword",
              "value": "synchronous"
            },
            {
              "$type": "Keyword",
              "value": "exec-timeout"
            },
            {
              "$type": "Keyword",
              "value": "area"
            },
            {
              "$type": "Keyword",
              "value": "passive-interface"
            },
            {
              "$type": "Keyword",
              "value": "default-information"
            },
            {
              "$type": "Keyword",
              "value": "originate"
            },
            {
              "$type": "Keyword",
              "value": "redistribute"
            },
            {
              "$type": "Keyword",
              "value": "static"
            },
            {
              "$type": "Keyword",
              "value": "auto-summary"
            },
            {
              "$type": "Keyword",
              "value": "/ospf"
            },
            {
              "$type": "Keyword",
              "value": "/rip"
            },
            {
              "$type": "Keyword",
              "value": "/grundkonfiguration"
            },
            {
              "$type": "Keyword",
              "value": "/interface"
            },
            {
              "$type": "Keyword",
              "value": "transport"
            },
            {
              "$type": "Keyword",
              "value": "input"
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_configure",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Configure_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@85"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@110"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@58"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@71"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@117"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@80"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@86"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@106"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@104"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@97"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@260"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@261"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@263"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@56"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Username_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "username"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@18"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "options",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@59"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Username_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@60"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@61"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@62"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@63"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PrivilegeOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "privilege"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@20"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PasswordOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "password"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SecretOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "secret"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AlgorithmTypeOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "algorithm-type"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@64"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AlgorithmType_Options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@65"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@67"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@69"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MD5Option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "md5"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@66"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MD5Option_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "secret"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ScryptOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "scrypt"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@68"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ScryptOption_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "secret"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Sha256Option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "sha256"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@70"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Sha256Option_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "secret"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@19"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Banner_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "banner"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@72"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "message",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@23"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Banner_cmd_option",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@73"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@75"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@76"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@77"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@78"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@79"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ConfigSaveOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "config-save"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ExecOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "exec"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IncomingOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "incoming"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "LoginOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "login"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "MOTDOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "motd"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PromptTimeoutOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "prompt-timeout"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SlipPPPOption",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "slip-ppp"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IP_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ip"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@81"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IP_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@82"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@83"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@115"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Domainname_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "domain-name"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@24"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SSH_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ssh"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@84"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SSHOptions",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "version"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Hostname_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "hostname"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@17"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Crypto_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "crypto"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@87"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Crypto_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@88"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Key_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "key"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@89"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Key_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@90"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Generate_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "generate"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@91"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Generate_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@92"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rsa_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "rsa"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rsa_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@94"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UsageKeys_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "usage-keys"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@95"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UsageKeys_Option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@96"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Modulus_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "modulus"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@21"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "no"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@98"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@99"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@101"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_banner_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "banner"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@100"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Banner_type",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "motd"
          },
          {
            "$type": "Keyword",
            "value": "login"
          },
          {
            "$type": "Keyword",
            "value": "exec"
          },
          {
            "$type": "Keyword",
            "value": "incoming"
          },
          {
            "$type": "Keyword",
            "value": "prompt-timeout"
          },
          {
            "$type": "Keyword",
            "value": "slip-ppp"
          },
          {
            "$type": "Keyword",
            "value": "config-save"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_ip_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ip"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@102"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_ip_cmd_options",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@103"
        },
        "arguments": []
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_ip_cmd_option_domain_lookup",
      "definition": {
        "$type": "Assignment",
        "feature": "type",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "domain-lookup"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Router_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "router"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@105"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Router_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "ospf"
              },
              {
                "$type": "Assignment",
                "feature": "process",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@220"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "rip"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@233"
                },
                "arguments": []
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "bgp"
              },
              {
                "$type": "Assignment",
                "feature": "asn",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@38"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@16"
                },
                "arguments": []
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@247"
                },
                "arguments": []
              }
            ]
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "line"
            }
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@107"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@108"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@109"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_type_console",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "console"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@36"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@194"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_type_vty",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "vty"
            }
          },
          {
            "$type": "Assignment",
            "feature": "start",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@37"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "end",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@37"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@196"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@111"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@112"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@113"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@114"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_type_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "gigabitethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@30"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@209"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_type_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "fastethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@30"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@205"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_type_vlan",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "vlan"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@43"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@217"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_access_list_cmd_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "access-list"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@116"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_access_list_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@146"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@147"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ip"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@118"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_cmd_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "nat"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@119"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_inside_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "inside"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@120"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_inside_source_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "source"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@121"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_inside_source_list_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "list"
          },
          {
            "$type": "Assignment",
            "feature": "listName",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@186"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@122"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_inside_source_list_interface_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "interface"
          },
          {
            "$type": "Assignment",
            "feature": "interface",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@124"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@123"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_nat_overload_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "overload"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@125"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@126"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_interface_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gigabitethernet"
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_interface_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fastethernet"
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IP_cmd_interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ip"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@128"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@129"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@130"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@134"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@138"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_address",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "address"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "mask",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "secondary",
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_ospf",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ospf"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@131"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_ospf_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@132"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@133"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_ospf_option_cost",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "cost"
          },
          {
            "$type": "Assignment",
            "feature": "cost",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@27"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_ospf_option_priority",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "priority"
          },
          {
            "$type": "Assignment",
            "feature": "priority",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_nat",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "nat"
          },
          {
            "$type": "Assignment",
            "feature": "direction",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_direction",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@136"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@137"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_inside",
      "definition": {
        "$type": "Assignment",
        "feature": "direction",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "inside"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Nat_outside",
      "definition": {
        "$type": "Assignment",
        "feature": "direction",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "outside"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_cmd_option_access_group",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "access-group"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@186"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "direction",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@139"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Access_group_direction",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@140"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@141"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Access_group_in",
      "definition": {
        "$type": "Assignment",
        "feature": "direction",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "in"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Access_group_out",
      "definition": {
        "$type": "Assignment",
        "feature": "direction",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "out"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Shutdown_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "shutdown"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_cmd_interface",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "no"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@144"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "No_cmd_interface_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "shutdown"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Description_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "description"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@31"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_standard_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "standard"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@150"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "extended"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@186"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@157"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_acl_standard",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_acl_extended",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_standard_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@151"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@152"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@148"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_standard_permit_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "permit"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@153"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_standard_deny_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "deny"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@153"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_standard_match",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@154"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@155"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@156"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_any_match",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "any"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_host_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "host"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_network_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "mask",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@158"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@159"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@149"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_permit_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sequence",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "permit"
          },
          {
            "$type": "Assignment",
            "feature": "protocol",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@160"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@166"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "destination",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@167"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_deny_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sequence",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "deny"
          },
          {
            "$type": "Assignment",
            "feature": "protocol",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@160"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@166"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "destination",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@167"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@161"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@162"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@163"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@164"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@165"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol_ip",
      "definition": {
        "$type": "Assignment",
        "feature": "protocol",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "ip"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol_icmp",
      "definition": {
        "$type": "Assignment",
        "feature": "protocol",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "icmp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol_tcp",
      "definition": {
        "$type": "Assignment",
        "feature": "protocol",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "tcp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol_udp",
      "definition": {
        "$type": "Assignment",
        "feature": "protocol",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "udp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_protocol_gre",
      "definition": {
        "$type": "Assignment",
        "feature": "protocol",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "gre"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_match",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@154"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@155"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@156"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_extended_match_dest",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@168"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@169"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@170"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_dest_any_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "any"
            }
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@171"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_dest_host_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "host"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@171"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_dest_network_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "mask",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@171"
              },
              "arguments": []
            },
            "cardinality": "?"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_match",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "eq"
          },
          {
            "$type": "Assignment",
            "feature": "port",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@172"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_value",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@173"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@174"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_number",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@34"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_name",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@175"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@176"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@177"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@178"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@179"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@180"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@181"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@182"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@183"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@184"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@185"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_isakmp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "isakmp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_https",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "https"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_http",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "http"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_ftp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "ftp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_ssh",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "ssh"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_telnet",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "telnet"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_domain",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "domain"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_tftp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "tftp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_snmp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "snmp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_ntp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "ntp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Acl_port_bgp",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "bgp"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ACL_NAME",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "Alternatives",
          "elements": [
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@55"
              },
              "arguments": []
            }
          ]
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Login_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "login"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@188"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_LoginOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "local"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Logging_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "logging"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@190"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_LoggingOption",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "synchronous"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ExecTimeout_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "exec-timeout"
          },
          {
            "$type": "Assignment",
            "feature": "exectimeoutvalue",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@192"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_ExecTimeoutValue",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "minutes",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@54"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "seconds",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@54"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_line_console",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_console_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@187"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@189"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@191"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@193"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_line_vty",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Line_vty_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@187"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@189"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@191"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@197"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@195"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Transport_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "transport"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@198"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Transport_cmd_option",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@199"
          },
          "arguments": []
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TransportInput_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "input"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@200"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TransportInputList",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "options",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@201"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TransportProto",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@202"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@203"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SshKeyword",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "ssh"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TelnetKeyword",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "telnet"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_interface_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_fastethernet_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@127"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@142"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@143"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@145"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@206"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@207"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@204"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Speed_cmd_fe",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "speed"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@41"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CarrierDelay_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "carrier-delay"
          },
          {
            "$type": "Assignment",
            "feature": "seconds",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@42"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_interface_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_gigabitethernet_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@127"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@142"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@143"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@145"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@210"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@215"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@208"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duplex_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "duplex"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@211"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duplex_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@212"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@213"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@214"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duplex_auto",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "auto"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duplex_full",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "full"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Duplex_half",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "half"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Speed_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "speed"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@41"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_interface_vlan",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_vlan_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@127"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@145"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@218"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@216"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ip_Helper_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ip"
          },
          {
            "$type": "Keyword",
            "value": "helper-address"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_ospf",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@221"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@222"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@223"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@231"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@227"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@229"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@219"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_router_id_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "router-id"
          },
          {
            "$type": "Assignment",
            "feature": "id",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@46"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_network_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "network"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "mask",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@11"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "area"
          },
          {
            "$type": "Assignment",
            "feature": "area",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_passive_interface_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "passive-interface"
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@224"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@225"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@226"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_passive_interface_type_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "gigabitethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@29"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_passive_interface_type_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "fastethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@29"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_default_information_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "default-information"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@228"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_default_information_cmd_options",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "originate"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_redistribute_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "redistribute"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@230"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_redistribute_cmd_options",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "static"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Ospf_priority_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "priority"
          },
          {
            "$type": "Assignment",
            "feature": "value",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_rip",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@234"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@236"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@237"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@238"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@242"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@244"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@232"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_no_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "no"
          },
          {
            "$type": "Assignment",
            "feature": "options",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@235"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_no_cmd_options",
      "definition": {
        "$type": "Assignment",
        "feature": "options",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "auto-summary"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_network_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "network"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_version_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "version"
          },
          {
            "$type": "Assignment",
            "feature": "RipVersion",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@44"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_passive_interface_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "passive-interface"
          },
          {
            "$type": "Assignment",
            "feature": "types",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@239"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@240"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@241"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_passive_interface_type_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "gigabitethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@45"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_passive_interface_type_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "fastethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@45"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_default_information_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "default-information"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@243"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_default_information_cmd_options",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "originate"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_redistribute_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "redistribute"
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@245"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Rip_redistribute_cmd_options",
      "definition": {
        "$type": "Assignment",
        "feature": "option",
        "operator": "=",
        "terminal": {
          "$type": "Keyword",
          "value": "static"
        }
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Exit_bgp",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "command",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "exit"
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "continuation",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_cmds",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@14"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@248"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@249"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@259"
                  },
                  "arguments": []
                }
              ]
            },
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@246"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_router_id_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "bgp"
          },
          {
            "$type": "Keyword",
            "value": "router-id"
          },
          {
            "$type": "Assignment",
            "feature": "id",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbor_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "neighbor"
          },
          {
            "$type": "Assignment",
            "feature": "neighbour",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "option",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@250"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbour_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@251"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@252"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@256"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@257"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@258"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbour_Remote_as_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "remote-as"
          },
          {
            "$type": "Assignment",
            "feature": "remoteASnumber",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@38"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbour_update_source_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "update-source"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@253"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_update_source_interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@254"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@255"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_update_source_interface_type_gigabitethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "gigabitethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@40"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_update_source_interface_type_fastethernet",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "fastethernet"
            }
          },
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@40"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neigbour_ebgp_multihop_option",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "ebgp-multihop"
          },
          {
            "$type": "Assignment",
            "feature": "multihop",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@39"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbour_next_hop_self_option",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "next-hop-self"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_neighbour_route_reflector_option",
      "dataType": "string",
      "definition": {
        "$type": "Keyword",
        "value": "route-reflector-client"
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Bgp_network_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "network"
          },
          {
            "$type": "Assignment",
            "feature": "ip",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "mask"
          },
          {
            "$type": "Assignment",
            "feature": "mask",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Template_ospf_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "/ospf"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Template_rip_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "/rip"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Template_grundkonfig_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "/grundkonfiguration"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Template_interface_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "/interface"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`)),jD={languageId:"cisco-ios",fileExtensions:[".ios"],caseInsensitive:!0,mode:"development"},KD={AstReflection:()=>new e$},qD={Grammar:()=>BD(),LanguageMetaData:()=>jD,parser:{}};var t$={exports:{}};(function(t){(function(e){const n="(0?\\d+|0x[a-f0-9]+)",r={fourOctet:new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`,"i"),threeOctet:new RegExp(`^${n}\\.${n}\\.${n}$`,"i"),twoOctet:new RegExp(`^${n}\\.${n}$`,"i"),longValue:new RegExp(`^${n}$`,"i")},i=new RegExp("^0[0-7]+$","i"),s=new RegExp("^0x[a-f0-9]+$","i"),a="%[0-9a-z]{1,}",o="(?:[0-9a-f]+::?)+",l={zoneIndex:new RegExp(a,"i"),native:new RegExp(`^(::)?(${o})?([0-9a-f]+)?(::)?(${a})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${n}\\.${n}\\.${n}\\.${n}(${a})?)$`,"i"),transitional:new RegExp(`^((?:${o})|(?:::)(?:${o})?)${n}\\.${n}\\.${n}\\.${n}(${a})?$`,"i")};function c(f,y){if(f.indexOf("::")!==f.lastIndexOf("::"))return null;let $=0,v=-1,m=(f.match(l.zoneIndex)||[])[0],g,k;for(m&&(m=m.substring(1),f=f.replace(/%.+$/,""));(v=f.indexOf(":",v+1))>=0;)$++;if(f.substr(0,2)==="::"&&$--,f.substr(-2,2)==="::"&&$--,$>y)return null;for(k=y-$,g=":";k--;)g+="0:";return f=f.replace("::",g),f[0]===":"&&(f=f.slice(1)),f[f.length-1]===":"&&(f=f.slice(0,-1)),y=function(){const F=f.split(":"),G=[];for(let X=0;X<F.length;X++)G.push(parseInt(F[X],16));return G}(),{parts:y,zoneId:m}}function u(f,y,$,v){if(f.length!==y.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let m=0,g;for(;v>0;){if(g=$-v,g<0&&(g=0),f[m]>>g!==y[m]>>g)return!1;v-=$,m+=1}return!0}function d(f){if(s.test(f))return parseInt(f,16);if(f[0]==="0"&&!isNaN(parseInt(f[1],10))){if(i.test(f))return parseInt(f,8);throw new Error(`ipaddr: cannot parse ${f} as octal`)}return parseInt(f,10)}function p(f,y){for(;f.length<y;)f=`0${f}`;return f}const h={};h.IPv4=function(){function f(y){if(y.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let $,v;for($=0;$<y.length;$++)if(v=y[$],!(0<=v&&v<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=y}return f.prototype.SpecialRanges={unspecified:[[new f([0,0,0,0]),8]],broadcast:[[new f([255,255,255,255]),32]],multicast:[[new f([224,0,0,0]),4]],linkLocal:[[new f([169,254,0,0]),16]],loopback:[[new f([127,0,0,0]),8]],carrierGradeNat:[[new f([100,64,0,0]),10]],private:[[new f([10,0,0,0]),8],[new f([172,16,0,0]),12],[new f([192,168,0,0]),16]],reserved:[[new f([192,0,0,0]),24],[new f([192,0,2,0]),24],[new f([192,88,99,0]),24],[new f([198,18,0,0]),15],[new f([198,51,100,0]),24],[new f([203,0,113,0]),24],[new f([240,0,0,0]),4]],as112:[[new f([192,175,48,0]),24],[new f([192,31,196,0]),24]],amt:[[new f([192,52,193,0]),24]]},f.prototype.kind=function(){return"ipv4"},f.prototype.match=function(y,$){let v;if($===void 0&&(v=y,y=v[0],$=v[1]),y.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return u(this.octets,y.octets,8,$)},f.prototype.prefixLengthFromSubnetMask=function(){let y=0,$=!1;const v={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0};let m,g,k;for(m=3;m>=0;m-=1)if(g=this.octets[m],g in v){if(k=v[g],$&&k!==0)return null;k!==8&&($=!0),y+=k}else return null;return 32-y},f.prototype.range=function(){return h.subnetMatch(this,this.SpecialRanges)},f.prototype.toByteArray=function(){return this.octets.slice(0)},f.prototype.toIPv4MappedAddress=function(){return h.IPv6.parse(`::ffff:${this.toString()}`)},f.prototype.toNormalizedString=function(){return this.toString()},f.prototype.toString=function(){return this.octets.join(".")},f}(),h.IPv4.broadcastAddressFromCIDR=function(f){try{const y=this.parseCIDR(f),$=y[0].toByteArray(),v=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[];let g=0;for(;g<4;)m.push(parseInt($[g],10)|parseInt(v[g],10)^255),g++;return new this(m)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},h.IPv4.isIPv4=function(f){return this.parser(f)!==null},h.IPv4.isValid=function(f){try{return new this(this.parser(f)),!0}catch{return!1}},h.IPv4.isValidCIDR=function(f){try{return this.parseCIDR(f),!0}catch{return!1}},h.IPv4.isValidFourPartDecimal=function(f){return!!(h.IPv4.isValid(f)&&f.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},h.IPv4.networkAddressFromCIDR=function(f){let y,$,v,m,g;try{for(y=this.parseCIDR(f),v=y[0].toByteArray(),g=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[],$=0;$<4;)m.push(parseInt(v[$],10)&parseInt(g[$],10)),$++;return new this(m)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},h.IPv4.parse=function(f){const y=this.parser(f);if(y===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(y)},h.IPv4.parseCIDR=function(f){let y;if(y=f.match(/^(.+)\/(\d+)$/)){const $=parseInt(y[2]);if($>=0&&$<=32){const v=[this.parse(y[1]),$];return Object.defineProperty(v,"toString",{value:function(){return this.join("/")}}),v}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},h.IPv4.parser=function(f){let y,$,v;if(y=f.match(r.fourOctet))return function(){const m=y.slice(1,6),g=[];for(let k=0;k<m.length;k++)$=m[k],g.push(d($));return g}();if(y=f.match(r.longValue)){if(v=d(y[1]),v>4294967295||v<0)throw new Error("ipaddr: address outside defined range");return function(){const m=[];let g;for(g=0;g<=24;g+=8)m.push(v>>g&255);return m}().reverse()}else return(y=f.match(r.twoOctet))?function(){const m=y.slice(1,4),g=[];if(v=d(m[1]),v>16777215||v<0)throw new Error("ipaddr: address outside defined range");return g.push(d(m[0])),g.push(v>>16&255),g.push(v>>8&255),g.push(v&255),g}():(y=f.match(r.threeOctet))?function(){const m=y.slice(1,5),g=[];if(v=d(m[2]),v>65535||v<0)throw new Error("ipaddr: address outside defined range");return g.push(d(m[0])),g.push(d(m[1])),g.push(v>>8&255),g.push(v&255),g}():null},h.IPv4.subnetMaskFromPrefixLength=function(f){if(f=parseInt(f),f<0||f>32)throw new Error("ipaddr: invalid IPv4 prefix length");const y=[0,0,0,0];let $=0;const v=Math.floor(f/8);for(;$<v;)y[$]=255,$++;return v<4&&(y[v]=Math.pow(2,f%8)-1<<8-f%8),new this(y)},h.IPv6=function(){function f(y,$){let v,m;if(y.length===16)for(this.parts=[],v=0;v<=14;v+=2)this.parts.push(y[v]<<8|y[v+1]);else if(y.length===8)this.parts=y;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(v=0;v<this.parts.length;v++)if(m=this.parts[v],!(0<=m&&m<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");$&&(this.zoneId=$)}return f.prototype.SpecialRanges={unspecified:[new f([0,0,0,0,0,0,0,0]),128],linkLocal:[new f([65152,0,0,0,0,0,0,0]),10],multicast:[new f([65280,0,0,0,0,0,0,0]),8],loopback:[new f([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new f([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new f([0,0,0,0,0,65535,0,0]),96],discard:[new f([256,0,0,0,0,0,0,0]),64],rfc6145:[new f([0,0,0,0,65535,0,0,0]),96],rfc6052:[new f([100,65435,0,0,0,0,0,0]),96],"6to4":[new f([8194,0,0,0,0,0,0,0]),16],teredo:[new f([8193,0,0,0,0,0,0,0]),32],benchmarking:[new f([8193,2,0,0,0,0,0,0]),48],amt:[new f([8193,3,0,0,0,0,0,0]),32],as112v6:[[new f([8193,4,274,0,0,0,0,0]),48],[new f([9760,79,32768,0,0,0,0,0]),48]],deprecated:[new f([8193,16,0,0,0,0,0,0]),28],orchid2:[new f([8193,32,0,0,0,0,0,0]),28],droneRemoteIdProtocolEntityTags:[new f([8193,48,0,0,0,0,0,0]),28],reserved:[[new f([8193,0,0,0,0,0,0,0]),23],[new f([8193,3512,0,0,0,0,0,0]),32]]},f.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},f.prototype.kind=function(){return"ipv6"},f.prototype.match=function(y,$){let v;if($===void 0&&(v=y,y=v[0],$=v[1]),y.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return u(this.parts,y.parts,16,$)},f.prototype.prefixLengthFromSubnetMask=function(){let y=0,$=!1;const v={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0};let m,g;for(let k=7;k>=0;k-=1)if(m=this.parts[k],m in v){if(g=v[m],$&&g!==0)return null;g!==16&&($=!0),y+=g}else return null;return 128-y},f.prototype.range=function(){return h.subnetMatch(this,this.SpecialRanges)},f.prototype.toByteArray=function(){let y;const $=[],v=this.parts;for(let m=0;m<v.length;m++)y=v[m],$.push(y>>8),$.push(y&255);return $},f.prototype.toFixedLengthString=function(){const y=(function(){const v=[];for(let m=0;m<this.parts.length;m++)v.push(p(this.parts[m].toString(16),4));return v}).call(this).join(":");let $="";return this.zoneId&&($=`%${this.zoneId}`),y+$},f.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");const y=this.parts.slice(-2),$=y[0],v=y[1];return new h.IPv4([$>>8,$&255,v>>8,v&255])},f.prototype.toNormalizedString=function(){const y=(function(){const v=[];for(let m=0;m<this.parts.length;m++)v.push(this.parts[m].toString(16));return v}).call(this).join(":");let $="";return this.zoneId&&($=`%${this.zoneId}`),y+$},f.prototype.toRFC5952String=function(){const y=/((^|:)(0(:|$)){2,})/g,$=this.toNormalizedString();let v=0,m=-1,g;for(;g=y.exec($);)g[0].length>m&&(v=g.index,m=g[0].length);return m<0?$:`${$.substring(0,v)}::${$.substring(v+m)}`},f.prototype.toString=function(){return this.toRFC5952String()},f}(),h.IPv6.broadcastAddressFromCIDR=function(f){try{const y=this.parseCIDR(f),$=y[0].toByteArray(),v=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[];let g=0;for(;g<16;)m.push(parseInt($[g],10)|parseInt(v[g],10)^255),g++;return new this(m)}catch(y){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${y})`)}},h.IPv6.isIPv6=function(f){return this.parser(f)!==null},h.IPv6.isValid=function(f){if(typeof f=="string"&&f.indexOf(":")===-1)return!1;try{const y=this.parser(f);return new this(y.parts,y.zoneId),!0}catch{return!1}},h.IPv6.isValidCIDR=function(f){if(typeof f=="string"&&f.indexOf(":")===-1)return!1;try{return this.parseCIDR(f),!0}catch{return!1}},h.IPv6.networkAddressFromCIDR=function(f){let y,$,v,m,g;try{for(y=this.parseCIDR(f),v=y[0].toByteArray(),g=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[],$=0;$<16;)m.push(parseInt(v[$],10)&parseInt(g[$],10)),$++;return new this(m)}catch(k){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${k})`)}},h.IPv6.parse=function(f){const y=this.parser(f);if(y.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(y.parts,y.zoneId)},h.IPv6.parseCIDR=function(f){let y,$,v;if(($=f.match(/^(.+)\/(\d+)$/))&&(y=parseInt($[2]),y>=0&&y<=128))return v=[this.parse($[1]),y],Object.defineProperty(v,"toString",{value:function(){return this.join("/")}}),v;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},h.IPv6.parser=function(f){let y,$,v,m,g,k;if(v=f.match(l.deprecatedTransitional))return this.parser(`::ffff:${v[1]}`);if(l.native.test(f))return c(f,8);if((v=f.match(l.transitional))&&(k=v[6]||"",y=v[1],v[1].endsWith("::")||(y=y.slice(0,-1)),y=c(y+k,6),y.parts)){for(g=[parseInt(v[2]),parseInt(v[3]),parseInt(v[4]),parseInt(v[5])],$=0;$<g.length;$++)if(m=g[$],!(0<=m&&m<=255))return null;return y.parts.push(g[0]<<8|g[1]),y.parts.push(g[2]<<8|g[3]),{parts:y.parts,zoneId:y.zoneId}}return null},h.IPv6.subnetMaskFromPrefixLength=function(f){if(f=parseInt(f),f<0||f>128)throw new Error("ipaddr: invalid IPv6 prefix length");const y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let $=0;const v=Math.floor(f/8);for(;$<v;)y[$]=255,$++;return v<16&&(y[v]=Math.pow(2,f%8)-1<<8-f%8),new this(y)},h.fromByteArray=function(f){const y=f.length;if(y===4)return new h.IPv4(f);if(y===16)return new h.IPv6(f);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},h.isValid=function(f){return h.IPv6.isValid(f)||h.IPv4.isValid(f)},h.isValidCIDR=function(f){return h.IPv6.isValidCIDR(f)||h.IPv4.isValidCIDR(f)},h.parse=function(f){if(h.IPv6.isValid(f))return h.IPv6.parse(f);if(h.IPv4.isValid(f))return h.IPv4.parse(f);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},h.parseCIDR=function(f){try{return h.IPv6.parseCIDR(f)}catch{try{return h.IPv4.parseCIDR(f)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},h.process=function(f){const y=this.parse(f);return y.kind()==="ipv6"&&y.isIPv4MappedAddress()?y.toIPv4Address():y},h.subnetMatch=function(f,y,$){let v,m,g,k;$==null&&($="unicast");for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)){for(g=y[m],g[0]&&!(g[0]instanceof Array)&&(g=[g]),v=0;v<g.length;v++)if(k=g[v],f.kind()===k[0].kind()&&f.match.apply(f,k))return m}return $},t.exports?t.exports=h:e.ipaddr=h})(De)})(t$);var GD=t$.exports;function WD(t){const e=t.validation.ValidationRegistry,n=t.validation.CiscoIosValidator,r={IP:n.checkIP,SUBNETMASK:n.checkSUBNETMASK,Username_cmd:n.checkUsername_cmd,BANNER_MESSAGE:n.checkBANNER_MESSAGE,Stat:n.check_Stat,Generate_cmd:n.checkGenerate_cmd,Line_types:n.checkLine_types,INTERFACE_NUMBER_INPUT:n.checkINTERFACE_NUMBER,UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:n.checkUPDATE_SOURCE_INTERFACE_NUMBER,NAT_INTERFACE_NUMBER_INPUT:n.checkNAT_INTERFACE_NUMBER,OSPF_COST_NUMBER:n.checkOSPF_COST_NUMBER,OSPF_PRIORITY_NUMBER:n.checkOSPF_PRIORITY_NUMBER,OSPF_PASSIVE_INTERFACE_NUMBER:n.checkOSPF_PASSIVE_INTERFACE_NUMBER};e.register(r,n)}class zD{checkIP(e,n){if(e.value){const r=String(e.value).split(".");for(const i of r){const s=parseInt(i,10);(s>255||s<0)&&n("error","This is not a valid IP-Address!",{node:e,property:"value"})}}}checkSUBNETMASK(e,n){if(e.value){const r=String(e.value).split(".");let i="";for(const s of r){const o=parseInt(s,10).toString(2);let l=o;for(let c=0;c<8-o.length;c++)l="0"+l;i=i+l}(i.match(/10+1/)||i.length!=32||!i.includes("0"))&&n("error","This is not a valid Subnetmask!",{node:e,property:"value"})}}checkUsername_cmd(e,n){var r;if(e.options){let i=[];for(const s of e.options)i.includes(s.$type)?n("error",`Already defined ${(r=s.$cstNode)===null||r===void 0?void 0:r.text} (duplicate)!`,{node:s}):i.push(s.$type)}}checkBANNER_MESSAGE(e,n){let r="";for(let a of e.message)MD(a)?r=r+a.keywords:r=r+a;const i=r.at(0),s=r.charAt(r.length-1);i!=s?n("error",`Delimiters ${i} and ${s} dont match!`,{node:e}):(r.substring(1,r.length-1).includes(i)||r.substring(1,r.length-1).includes(s))&&n("error",`Delimiter (${i}) can not be inside MESSAGE!`,{node:e})}checkINTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid Interface Number!",{node:e,property:"value"})}checkUPDATE_SOURCE_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+$/.test(e.value)||(/^[0-9]+\/[0-9]+\.[0-9]+$/.test(e.value)?n("error","BGP update-source does not allow Subinterfaces!",{node:e,property:"value"}):n("error","This is not a valid Interface Number!",{node:e,property:"value"}))}checkNAT_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid NAT Interface Number!",{node:e,property:"value"})}checkOSPF_COST_NUMBER(e,n){const r=parseInt(e.value,10);(Number.isNaN(r)||r<1||r>65535)&&n("error","OSPF cost must be between 1 and 65535!",{node:e,property:"value"})}checkOSPF_PRIORITY_NUMBER(e,n){const r=parseInt(e.value,10);(Number.isNaN(r)||r<0||r>255)&&n("error","OSPF priority must be between 0 and 255!",{node:e,property:"value"})}checkOSPF_PASSIVE_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid OSPF passive-interface number (use X/Y or X/Y.Vlan)!",{node:e,property:"value"})}checkGenerate_cmd(e,n){const r=tr(e),i=Array.from(Qt(r)),s=i.indexOf(e),a=i.findIndex(l=>l.$type==="Hostname_cmd"),o=i.findIndex(l=>l.$type==="Domainname_cmd");a===-1?n("error","Set a hostname before generating keys!",{node:e.$container.$container}):a>s&&n("error","A hostname must be defined before generating keys!",{node:e.$container.$container}),o===-1?n("error","Set a domain-name before generating keys!",{node:e.$container.$container}):o>s&&n("error","A domain-name must be defined before generating keys!",{node:e.$container.$container})}checkLine_types(e,n){let r=[];if(LD(e))for(const i of e.lines)if(!UD(i))r.push(i);else break;else if(FD(e))for(const i of e.lines)if(!HD(i))r.push(i);else break;else return;r.findIndex(i=>xD(i))<0&&n("info","Line mode has no exec-timeout command!",{node:e.$container,property:"command"})}check_Stat(e,n){i(e),s(e),r(e);function r(a){const o=Qt(tr(a)).filter(l=>l.$type==="No_ip_cmd_option_domain_lookup");if(o.count()>1)for(let l of o)n("warning","Script contains the <no ip domain-lookup> command more than once.",{node:l});else o.count()<=0&&n("hint","Script does not contain the <no ip domain-lookup> command.",{node:a.lines[0]})}function i(a){var o;const l=new Map,c=Qt(tr(a)).filter(u=>u.$type==="IP_cmd_interface");for(const u of c)if(W_(u)&&z_(u.option)){const d=(o=u.option.ip)===null||o===void 0?void 0:o.value;if(!d)continue;const p=l.get(d);p?(n("error",`Duplicate IP address: ${d}!`,{node:u.option,property:"ip"}),n("error",`Duplicate IP address: ${d}!`,{node:p.option,property:"ip"})):l.set(d,u)}}function s(a){var o,l,c,u;const d=[],p=Qt(tr(a)).filter(h=>h.$type==="IP_cmd_interface");for(const h of p){if(!W_(h)||!z_(h.option))continue;const f=(l=(o=h.option.ip)===null||o===void 0?void 0:o.value)===null||l===void 0?void 0:l.trim(),y=(u=(c=h.option.mask)===null||c===void 0?void 0:c.value)===null||u===void 0?void 0:u.trim();if(!(!f||!y))try{const $=y.split(".").map(k=>Number(k).toString(2).padStart(8,"0")).join("").indexOf("0"),v=$===-1?32:$,[m,g]=GD.parseCIDR(`${f}/${v}`);for(const k of d)m.kind()===k.ip.kind()&&(m.match(k.ip,k.prefix)||k.ip.match(m,g))&&(n("error",`Overlapping subnet: ${k.cidr} ↔ ${f}/${g}!`,{node:h}),n("error",`Overlapping subnet: ${f}/${g} ↔ ${k.cidr}!`,{node:k.node}));d.push({ip:m,prefix:g,cidr:`${f}/${g}`,node:h})}catch{}}}}}class VD extends oT{getScope(e){return super.getScope(e)}}const YD={label:"ping",description:"Sendet ICMP Echo-Anfragen an eine Ziel-IP-Adresse um die Erreichbarkeit zu testen.",insert:"ping",kind:10},XD={label:"IP-Address",description:"A.B.C.D",insert:"192.168.1.1",kind:12},JD={label:"Subnetmask",description:"A.B.C.D",insert:"255.255.255.0",kind:12},QD={label:"Wildcardmask",description:"A.B.C.D",insert:"0.0.0.255",kind:12},ZD={label:"<hostname>",description:"Set the hostname for this device",insert:"Router",kind:1},e1={label:"address",description:"Specify an address for this interface",insert:"address",kind:10},t1={label:"<domain-name>",description:"Set the domain-name for this device",insert:"htl3r.com",kind:1},n1={label:"2",description:"Protocol to be supported",insert:"2",kind:12},r1={label:"Interface Number",description:"X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},i1={label:"Interface Number (slot/port)",description:"Physical interface for BGP update-source (slot/port only, no subinterface).",insert:"${1:0}/${2:0}",kind:15},s1={label:"NAT Interface Number",description:"X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},a1={label:"domain-lookup",description:"stops ip domain lookup",insert:"domain-lookup",kind:10},o1={label:"description",description:"describes the interface",insert:"description",kind:10},l1={label:"<description>",description:"Set the description for this interface",insert:"To_R2",kind:1},c1={label:"<CR>",description:"possible end of a command",insert:`
`,kind:1},u1={label:"<message>",description:"The Banner message",insert:"#Authorized acces only!#",kind:1},d1={label:"OSPF Area Number",description:"Area number",insert:"10",kind:12},f1={label:"OSPF Cost",description:"Interface OSPF cost (1-65535)",insert:"10",kind:12},p1={label:"OSPF Priority",description:"Router priority (0-255)",insert:"1",kind:12},h1={label:"OSPF Passive Interface Number",description:"Passive-Interface X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},m1={label:"OSPF_PROCESS_NUMBER",description:"Area number",insert:"${1:10}",kind:15},g1={label:"RIP Passive Interface Number",description:"Passive-Interface X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},y1={label:"ACL Number",description:"Standard ACL number (0-99)",insert:"10",kind:12},_1={label:"ACL Name",description:"Extended ACL name",insert:"MY_ACL",kind:1},v1={label:"ACL Statement Number",description:"Sequence number for ACL statement",insert:"10",kind:12},R1={label:"ACL Port Number",description:"Port number (0-65535)",insert:"80",kind:12},T1={label:"permit",description:"Permit packets matching the criteria",insert:"permit",kind:10},$1={label:"deny",description:"Deny packets matching the criteria",insert:"deny",kind:10},k1={label:"permit",description:"Permit packets matching the extended criteria",insert:"permit",kind:10},w1={label:"deny",description:"Deny packets matching the extended criteria",insert:"deny",kind:10},b1={label:"any",description:"Match any source or destination",insert:"any",kind:10},S1={label:"host",description:"Match a specific host",insert:"host",kind:10},C1={label:"ip",description:"IP protocol",insert:"ip",kind:10},A1={label:"icmp",description:"ICMP protocol",insert:"icmp",kind:10},E1={label:"tcp",description:"TCP protocol",insert:"tcp",kind:10},P1={label:"udp",description:"UDP protocol",insert:"udp",kind:10},N1={label:"gre",description:"GRE protocol",insert:"gre",kind:10},I1={label:"eq",description:"Equal to port",insert:"eq",kind:10},O1={label:"isakmp",description:"ISAKMP port (500)",insert:"isakmp",kind:10},D1={label:"https",description:"HTTPS port (443)",insert:"https",kind:10},x1={label:"http",description:"HTTP port (80)",insert:"http",kind:10},M1={label:"ftp",description:"FTP port (21)",insert:"ftp",kind:10},L1={label:"ssh",description:"SSH port (22)",insert:"ssh",kind:10},F1={label:"telnet",description:"Telnet port (23)",insert:"telnet",kind:10},U1={label:"domain",description:"DNS port (53)",insert:"domain",kind:10},H1={label:"tftp",description:"TFTP port (69)",insert:"tftp",kind:10},B1={label:"snmp",description:"SNMP port (161)",insert:"snmp",kind:10},j1={label:"ntp",description:"NTP port (123)",insert:"ntp",kind:10},K1={label:"bgp",description:"BGP port (179)",insert:"bgp",kind:10},q1={label:"<username>",description:"Username for authentication",insert:"admin",kind:1},G1={label:"<password>",description:"Password for username",insert:"Cisco123!",kind:1},W1={label:"<privilege-level>",description:"Privilege level (0-15)",insert:"15",kind:12},z1={label:"<modulus>",description:"RSA key modulus size (512-4096)",insert:"2048",kind:12},V1={label:"username",description:"Create or modify user account",insert:"username",kind:10},Y1={label:"privilege",description:"Set privilege level for user",insert:"privilege",kind:10},X1={label:"password",description:"Set password for user",insert:"password",kind:10},J1={label:"secret",description:"Set encrypted password for user",insert:"secret",kind:10},Q1={label:"algorithm-type",description:"Specify encryption algorithm",insert:"algorithm-type",kind:10},Z1={label:"md5",description:"MD5 encryption algorithm",insert:"md5",kind:10},ex={label:"scrypt",description:"Scrypt encryption algorithm",insert:"scrypt",kind:10},tx={label:"sha256",description:"SHA256 encryption algorithm",insert:"sha256",kind:10},nx={label:"banner",description:"Define a banner message",insert:"banner",kind:10},rx={label:"config-save",description:"Banner displayed when saving config",insert:"config-save",kind:10},ix={label:"exec",description:"Banner displayed at EXEC mode",insert:"exec",kind:10},sx={label:"incoming",description:"Banner for incoming connections",insert:"incoming",kind:10},ax={label:"login",description:"Banner displayed at login",insert:"login",kind:10},ox={label:"motd",description:"Message of the day banner",insert:"motd",kind:10},lx={label:"prompt-timeout",description:"Banner displayed on timeout",insert:"prompt-timeout",kind:10},cx={label:"slip-ppp",description:"Banner for SLIP/PPP connections",insert:"slip-ppp",kind:10},ux={label:"crypto",description:"Cryptographic configuration",insert:"crypto",kind:10},dx={label:"key",description:"Key management",insert:"key",kind:10},fx={label:"generate",description:"Generate cryptographic keys",insert:"generate",kind:10},px={label:"rsa",description:"RSA key configuration",insert:"rsa",kind:10},hx={label:"usage-keys",description:"Specify key usage",insert:"usage-keys",kind:10},mx={label:"modulus",description:"RSA key modulus size",insert:"modulus",kind:10},gx={label:"router",description:"Enable a routing process",insert:"router",kind:10},yx={label:"BGP AS Number",description:"Autonomous System number",insert:"65000",kind:12},_x={label:"eBGP Multihop",description:"Maximum hops for eBGP (1-255)",insert:"255",kind:12},vx={label:"RIP Version",description:"RIP version (1 or 2)",insert:"2",kind:12},Rx={label:"line",description:"Configure a terminal line",insert:"line",kind:10},Tx={label:"Console Number",description:"Console line number (usually 0)",insert:"0",kind:12},$x={label:"VTY Number",description:"VTY line number range",insert:"0",kind:12},kx={label:"login",description:"Enable password checking",insert:"login",kind:10},wx={label:"local",description:"Use local username authentication",insert:"local",kind:10},bx={label:"logging",description:"Configure logging options",insert:"logging",kind:10},Sx={label:"synchronous",description:"Synchronous logging",insert:"synchronous",kind:10},Cx={label:"exec-timeout",description:"Set EXEC timeout",insert:"exec-timeout",kind:10},Ax={label:"<minutes> <seconds>",description:"Timeout in minutes and seconds",insert:"0 0",kind:1},Ex={label:"transport",description:"Configure transport protocol",insert:"transport",kind:10},Px={label:"input",description:"Configure input protocols",insert:"input",kind:10},Nx={label:"ssh",description:"SSH protocol",insert:"ssh",kind:10},Ix={label:"telnet",description:"Telnet protocol",insert:"telnet",kind:10},Ox={label:"interface",description:"Configure an interface",insert:"interface",kind:10},Dx={label:"VLAN Number",description:"VLAN interface number",insert:"10",kind:12},xx={label:"Interface Speed",description:"Interface speed in Mbps",insert:"100",kind:12},Mx={label:"Carrier Delay",description:"Carrier delay in seconds",insert:"0",kind:12},Lx={label:"shutdown",description:"Disable the interface",insert:"shutdown",kind:10},Fx={label:"no shutdown",description:"Enable the interface",insert:"no shutdown",kind:10},Ux={label:"secondary",description:"Secondary IP address",insert:"secondary",kind:10},Hx={label:"ospf",description:"OSPF interface configuration",insert:"ospf",kind:10},Bx={label:"cost",description:"OSPF interface cost",insert:"cost",kind:10},jx={label:"priority",description:"OSPF router priority",insert:"priority",kind:10},Kx={label:"nat",description:"NAT configuration",insert:"nat",kind:10},qx={label:"inside",description:"Inside NAT interface",insert:"inside",kind:10},Gx={label:"outside",description:"Outside NAT interface",insert:"outside",kind:10},Wx={label:"access-group",description:"Apply ACL to interface",insert:"access-group",kind:10},zx={label:"in",description:"Apply ACL to inbound traffic",insert:"in",kind:10},Vx={label:"out",description:"Apply ACL to outbound traffic",insert:"out",kind:10},Yx={label:"duplex",description:"Set duplex mode",insert:"duplex",kind:10},Xx={label:"auto",description:"Auto-negotiate duplex",insert:"auto",kind:10},Jx={label:"full",description:"Full duplex",insert:"full",kind:10},Qx={label:"half",description:"Half duplex",insert:"half",kind:10},Zx={label:"speed",description:"Set interface speed",insert:"speed",kind:10},eM={label:"carrier-delay",description:"Set carrier delay",insert:"carrier-delay",kind:10},tM={label:"access-list",description:"Configure access list",insert:"access-list",kind:10},nM={label:"standard",description:"Standard numbered ACL",insert:"standard",kind:10},rM={label:"extended",description:"Extended named ACL",insert:"extended",kind:10},iM={label:"ip nat",description:"NAT configuration",insert:"ip nat",kind:10},sM={label:"inside",description:"Inside NAT",insert:"inside",kind:10},aM={label:"source",description:"Source NAT",insert:"source",kind:10},oM={label:"list",description:"Use ACL for NAT",insert:"list",kind:10},lM={label:"interface",description:"Use interface for NAT",insert:"interface",kind:10},cM={label:"overload",description:"Enable PAT (Port Address Translation)",insert:"overload",kind:10},uM={label:"no",description:"Negate a command",insert:"no",kind:10},dM={label:"neighbor",description:"Configure BGP neighbor",insert:"neighbor",kind:10},fM={label:"remote-as",description:"Set remote AS number",insert:"remote-as",kind:10},pM={label:"update-source",description:"Set source interface for BGP updates",insert:"update-source",kind:10},hM={label:"ebgp-multihop",description:"Set eBGP multihop TTL",insert:"ebgp-multihop",kind:10},mM={label:"next-hop-self",description:"Set next-hop-self for neighbor",insert:"next-hop-self",kind:10},gM={label:"route-reflector-client",description:"Configure as route reflector client",insert:"route-reflector-client",kind:10},yM={label:"network",description:"Advertise network in BGP",insert:"network",kind:10},_M={label:"mask",description:"Network mask for BGP",insert:"mask",kind:10},vM={label:"router-id",description:"Set OSPF router ID",insert:"router-id",kind:10},RM={label:"Router-ID",description:"A.B.C.D – eindeutige ID des Routers im OSPF-Prozess",insert:"1.1.1.1",kind:12},TM={label:"network",description:"Advertise network in OSPF",insert:"network",kind:10},$M={label:"passive-interface",description:"Configure passive interface",insert:"passive-interface",kind:10},kM={label:"priority",description:"Set OSPF router priority",insert:"priority",kind:10},wM={label:"default-information",description:"Configure default route origination",insert:"default-information",kind:10},bM={label:"originate",description:"Originate default route",insert:"originate",kind:10},SM={label:"redistribute",description:"Redistribute routes into OSPF",insert:"redistribute",kind:10},CM={label:"static",description:"Redistribute static routes",insert:"static",kind:10},AM={label:"network",description:"Advertise network in RIP",insert:"network",kind:10},EM={label:"version",description:"Set RIP version",insert:"version",kind:10},PM={label:"passive-interface",description:"Configure passive interface",insert:"passive-interface",kind:10},NM={label:"default-information",description:"Configure default route origination",insert:"default-information",kind:10},IM={label:"originate",description:"Originate default route",insert:"originate",kind:10},OM={label:"redistribute",description:"Redistribute routes into RIP",insert:"redistribute",kind:10},DM={label:"static",description:"Redistribute static routes",insert:"static",kind:10},xM={label:"configure",description:"Enter configuration mode",insert:"configure",kind:10},MM={label:"terminal",description:"Configure from terminal",insert:"terminal",kind:10},LM={label:"memory",description:"Configure from NVRAM",insert:"memory",kind:10},FM={label:"show",description:"Display system information",insert:"show",kind:10},UM={label:"run",description:"Show running configuration",insert:"run",kind:10},HM={label:"interface",description:"Show interface status",insert:"interface",kind:10},BM={label:"domain-name",description:"Set domain name",insert:"domain-name",kind:10},jM={label:"ssh",description:"SSH configuration",insert:"ssh",kind:10},KM={label:"version",description:"SSH version",insert:"version",kind:10},qM={label:"hostname",description:"Set system hostname",insert:"hostname",kind:10},GM={label:"ip",description:"IP configuration",insert:"ip",kind:10},WM={label:"/ospf",description:"Fügt eine OSPF-Konfigurationsvorlage ein",insert:"router ospf ${1:1}\n router-id ${2:1.1.1.1}\n network ${3:__IP__} ${4:__WILDCARDMASK__} area ${5:0}\n passive-interface gigabitethernet ${6:0/0}\n default-information originate\nexit\n$0",kind:15},zM={label:"/rip",description:"Fügt eine RIP-Konfigurationsvorlage ein",insert:`router rip
 version 2
 network \${1:__IP__}
 no auto-summary
 passive-interface gigabitethernet \${2:0/0}
 default-information originate
exit
$0`,kind:15},VM={label:"/grundkonfiguration",description:"Fügt eine Grundkonfigurationsvorlage ein",insert:`configure terminal
hostname \${1:__HOSTNAME_INPUT__}
no ip domain-lookup
ip domain-name \${2:__DOMAINNAME_INPUT__}
username \${3:__USERNAME_INPUT__} algorithm-type scrypt secret \${4:__USERNAME_PASSWORD_INPUT__}
username \${3:__USERNAME_INPUT__} privilege 15
crypto key generate rsa usage-keys modulus 1024
ip ssh version 2
line console 0
 login local
 logging synchronous
 exec-timeout 0 0
exit
line vty 0 4
 login local
 logging synchronous
 exec-timeout 0 0
 transport input ssh
exit
$0`,kind:15},YM={label:"/interface",description:"Fügt eine Interface-Konfigurationsvorlage ein",insert:`interface gigabitethernet \${1:0/0}
 description \${2:Uplink}
 ip address \${3:__IP__} \${4:__SUBNETMASK__}
 no shutdown
exit
$0`,kind:15};var XM={Ping_cmd:YD,IP:XD,SUBNETMASK:JD,WILDCARDMASK:QD,HOSTNAME_INPUT:ZD,Ip_cmd_option_address:e1,DOMAINNAME_INPUT:t1,VERSION_INPUT:n1,INTERFACE_NUMBER_INPUT:r1,UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:i1,NAT_INTERFACE_NUMBER_INPUT:s1,No_ip_cmd_option_domain_lookup:a1,Description_cmd:o1,DESCRIPTION_INPUT:l1,COMMENT:c1,BANNER_MESSAGE:u1,OSPF_AREA_NUMBER:d1,OSPF_COST_NUMBER:f1,OSPF_PRIORITY_NUMBER:p1,OSPF_PASSIVE_INTERFACE_NUMBER:h1,OSPF_PROCESS_NUMBER:m1,RIP_PASSIVE_INTERFACE_NUMBER:g1,ACL_NUMBER:y1,ACL_NAME:_1,ACL_STATEMENT_NUMBER:v1,ACL_PORT_NUMBER:R1,Acl_standard_permit_cmd:T1,Acl_standard_deny_cmd:$1,Acl_extended_permit_cmd:k1,Acl_extended_deny_cmd:w1,Acl_any_match:b1,Acl_host_match:S1,Acl_protocol_ip:C1,Acl_protocol_icmp:A1,Acl_protocol_tcp:E1,Acl_protocol_udp:P1,Acl_protocol_gre:N1,Acl_port_match:I1,Acl_port_isakmp:O1,Acl_port_https:D1,Acl_port_http:x1,Acl_port_ftp:M1,Acl_port_ssh:L1,Acl_port_telnet:F1,Acl_port_domain:U1,Acl_port_tftp:H1,Acl_port_snmp:B1,Acl_port_ntp:j1,Acl_port_bgp:K1,USERNAME_INPUT:q1,USERNAME_PASSWORD_INPUT:G1,PRIVILEGE_INPUT:W1,MODULUS_INPUT:z1,Username_cmd:V1,PrivilegeOption:Y1,PasswordOption:X1,SecretOption:J1,AlgorithmTypeOption:Q1,MD5Option:Z1,ScryptOption:ex,Sha256Option:tx,Banner_cmd:nx,ConfigSaveOption:rx,ExecOption:ix,IncomingOption:sx,LoginOption:ax,MOTDOption:ox,PromptTimeoutOption:lx,SlipPPPOption:cx,Crypto_cmd:ux,Key_cmd:dx,Generate_cmd:fx,Rsa_cmd:px,UsageKeys_cmd:hx,Modulus_cmd:mx,Router_cmd:gx,BGP_AS_NUMBER:yx,BGP_EBGP_MULTIHOP_NUMBER:_x,RIP_VERSION_NUMBER:vx,Line_cmd:Rx,CONSOLE_NUMBER:Tx,VTY_NUMBER:$x,Login_cmd:kx,Line_LoginOption:wx,Logging_cmd:bx,Line_LoggingOption:Sx,ExecTimeout_cmd:Cx,Line_ExecTimeoutValue:Ax,Transport_cmd:Ex,TransportInput_cmd:Px,SshKeyword:Nx,TelnetKeyword:Ix,Interface_cmd:Ox,INTERFACE_VLAN_NUMBER:Dx,INTERFACE_SPEED_NUMBER:xx,INTERFACE_CARRIER_DELAY_NUMBER:Mx,Shutdown_cmd:Lx,No_cmd_interface:Fx,Ip_cmd_option_address_secondary:Ux,Ip_cmd_option_ospf:Hx,Ip_cmd_option_ospf_option_cost:Bx,Ip_cmd_option_ospf_option_priority:jx,Ip_cmd_option_nat:Kx,Nat_inside:qx,Nat_outside:Gx,Ip_cmd_option_access_group:Wx,Access_group_in:zx,Access_group_out:Vx,Duplex_cmd:Yx,Duplex_auto:Xx,Duplex_full:Jx,Duplex_half:Qx,Speed_cmd:Zx,CarrierDelay_cmd:eM,Ip_access_list_cmd_option:tM,Acl_standard_cmd:nM,Acl_extended_cmd:rM,Ip_nat_cmd:iM,Ip_nat_inside_cmd:sM,Ip_nat_inside_source_cmd:aM,Ip_nat_inside_source_list_cmd:oM,Ip_nat_inside_source_list_interface_cmd:lM,Ip_nat_overload_cmd:cM,No_cmd:uM,Bgp_neighbor_cmd:dM,Bgp_neighbour_Remote_as_option:fM,Bgp_neighbour_update_source_option:pM,Bgp_neigbour_ebgp_multihop_option:hM,Bgp_neighbour_next_hop_self_option:mM,Bgp_neighbour_route_reflector_option:gM,Bgp_network_cmd:yM,Bgp_network_mask:_M,Ospf_router_id_cmd:vM,ROUTER_ID:RM,Ospf_network_cmd:TM,Ospf_passive_interface_cmd:$M,Ospf_priority_cmd:kM,Ospf_default_information_cmd:wM,Ospf_default_information_cmd_options:bM,Ospf_redistribute_cmd:SM,Ospf_redistribute_cmd_options:CM,Rip_network_cmd:AM,Rip_version_cmd:EM,Rip_passive_interface_cmd:PM,Rip_default_information_cmd:NM,Rip_default_information_cmd_options:IM,Rip_redistribute_cmd:OM,Rip_redistribute_cmd_options:DM,Configure_cmd:xM,Configure_cmd_options:MM,Configure_cmd_options_memory:LM,Show_cmd:FM,Show_run_option:UM,Show_interface_option:HM,Domainname_cmd:BM,SSH_cmd:jM,SSHOptions:KM,Hostname_cmd:qM,IP_cmd:GM,Template_ospf_cmd:WM,Template_rip_cmd:zM,Template_grundkonfig_cmd:VM,Template_interface_cmd:YM};const tm=XM,V_=Object.entries(tm).reduce((t,[e,n])=>(t[e]=n.insert,t),{});class JM extends QT{constructor(e){super(e),this.services=e,this.completionOptions={triggerCharacters:["/"]},this.currentDefaults={}}async getCompletion(e,n,r){let i=[];const s=this.buildContexts(e,n.position);if(this.isCursorInComment(e,n))return M.CompletionList.create([],!0);const a=await this.getTokenDefaults();this.currentDefaults=a;const o=(l,c)=>{const u=c.insertText?Object.assign(Object.assign({},c),{insertText:this.applyDefaults(c.insertText,a)}):c,d=this.fillCompletionItem(l,u);d&&(this.applyTemplateReplacement(e,n,d),i.push(d))};for(const l of s)for(const c of l.features)this.completionFor(l,c,o);return M.CompletionList.create(this.deduplicateItems(i),!0)}completionFor(e,n,r){const i=n.type?tm[n.type]:void 0;if(i){const s=n.type&&this.currentDefaults[n.type]!==void 0?this.currentDefaults[n.type]:i.insert;r(e,{label:i.label,kind:i.kind,detail:i.description,sortText:"1",insertTextFormat:2,insertText:s})}else if(Pt(n.feature)&&n.type!="KEYWORDS")return this.completionForKeyword(e,n.feature,r)}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"",sortText:"1"})}isCursorInComment(e,n){var r,i;const s=e.textDocument.offsetAt(n.position),a=e.textDocument.getText(),c=(r=this.services.parser.Lexer.tokenize(a).hidden)!==null&&r!==void 0?r:[];for(const u of c)if(s>u.startOffset&&n.position.line+1<=((i=u.endLine)!==null&&i!==void 0?i:-1))return!0;return!1}async getTokenDefaults(){try{const e=await this.services.shared.workspace.ConfigurationProvider.getConfiguration("Crill-IOS","defaults"),n=Object.assign({},V_);if(e)for(const[r,i]of Object.entries(e))typeof i=="string"&&(n[r]=i);return n}catch{return Object.assign({},V_)}}applyDefaults(e,n){return e.replace(/__([A-Za-z0-9_]+)__/g,(r,i)=>{var s;return(s=n[i])!==null&&s!==void 0?s:r})}applyTemplateReplacement(e,n,r){if(typeof r.label!="string"||!r.label.startsWith("/")||!r.insertText)return;const i=e.textDocument.getText(),s=e.textDocument.offsetAt(n.position);let a=s;for(;a>0&&!/\s/.test(i[a-1]);)a--;if(i[a]!=="/")return;let o=s;for(;o<i.length&&!/\s/.test(i[o]);)o++;r.textEdit=M.TextEdit.replace(M.Range.create(e.textDocument.positionAt(a),e.textDocument.positionAt(o)),r.insertText)}collectFromType(e,n){const r=[],i=new Set;function s(a){if(!i.has(a)){i.add(a),a.$type===e&&r.push(a.value);for(const o in a){const l=a[o];if(Array.isArray(l))for(const c of l)c&&typeof c=="object"&&"$type"in c&&s(c);else l&&typeof l=="object"&&"$type"in l&&s(l)}}}return s(n),r}}class QM extends iT{constructor(e){super(e)}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r||this.createSilentLinkingError(e)}createSilentLinkingError(e){return Object.assign(Object.assign({},e),{message:""})}createLinkingError(e){return this.createSilentLinkingError(e)}}const ZM={COMMENT:{type:"comment"},BANNER_MESSAGE:{type:"string"},DOMAINNAME_INPUT:{type:"string"},DESCRIPTION_INPUT:{type:"string"},USERNAME_PASSWORD_INPUT:{type:"string"},USERNAME_INPUT:{type:"string"},HOSTNAME_INPUT:{type:"string"},ACL_NAME:{type:"string"},IP:{type:"number"},SUBNETMASK:{type:"number"},WILDCARDMASK:{type:"number"},ROUTER_ID:{type:"number"},OSPF_PROCESS_NUMBER:{type:"number"},OSPF_AREA_NUMBER:{type:"number"},OSPF_PASSIVE_INTERFACE_NUMBER:{type:"number"},OSPF_COST_NUMBER:{type:"number"},OSPF_PRIORITY_NUMBER:{type:"number"},VERSION_INPUT:{type:"number"},PRIVILEGE_INPUT:{type:"number"},MODULUS_INPUT:{type:"number"},INTERFACE_NUMBER_INPUT:{type:"number"},NAT_INTERFACE_NUMBER_INPUT:{type:"number"},ACL_PORT_NUMBER:{type:"number"},ACL_STATEMENT_NUMBER:{type:"number"},ACL_NUMBER:{type:"number"},CONSOLE_NUMBER:{type:"number"},VTY_NUMBER:{type:"number"},Line_ExecTimeoutValue:{type:"number"},INTERFACE_SPEED_NUMBER:{type:"number"},INTERFACE_CARRIER_DELAY_NUMBER:{type:"number"},INTERFACE_VLAN_NUMBER:{type:"number"},RIP_VERSION_NUMBER:{type:"number"},RIP_PASSIVE_INTERFACE_NUMBER:{type:"number"},BGP_EBGP_MULTIHOP_NUMBER:{type:"number"},BGP_AS_NUMBER:{type:"number"},UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:{type:"number"}};class eL extends YO{highlightElement(e,n){DD(e)&&e.$type=="COMMENTLINE"&&e.$cstNode&&n({cst:e.$cstNode,type:"comment"});const r=ZM[e.$type];r&&e.$cstNode&&n({cst:e.$cstNode,type:r.type})}}class tL extends cT{async validateDocument(e,n){return(await super.validateDocument(e,n)).filter(i=>!this.shouldSuppressDiagnostic(i))}shouldSuppressDiagnostic(e){const n=e.message;return!!(n.includes("Expecting token of type 'exit' but found ``.")||n.includes("but found: ''")||n.includes("Expecting token of type 'NL' but found ``."))}}class nL{constructor(e){this.services=e}getHoverContent(e,n){var r,i,s;const a=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(!a)return;const o=e.textDocument.offsetAt(n.position),l=lh(a,o);if(!(!l||l.offset+l.length<=o))return this.getHoverFromDetails((s=l.astNode)===null||s===void 0?void 0:s.$type)}getHoverFromDetails(e){if(!e)return;const n=tm[e];return n?{contents:{kind:"markdown",value:`**${n.label.replaceAll("<","").replaceAll(">","")}**

${n.description}`}}:void 0}}const rL={validation:{CiscoIosValidator:()=>new zD,DocumentValidator:t=>new tL(t)},references:{ScopeProvider:t=>new VD(t),Linker:t=>new QM(t)},lsp:{CompletionProvider:t=>new JM(t),SemanticTokenProvider:t=>new eL(t),HoverProvider:t=>new nL(t)}};function iL(t){const e=Yl(ID(t),KD),n=Yl(PD({shared:e}),qD,rL);return e.ServiceRegistry.register(n),WD(n),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,CiscoIos:n}}const sL=new em.BrowserMessageReader(self),aL=new em.BrowserMessageWriter(self),oL=em.createConnection(sL,aL),{shared:lL}=iL(Object.assign({connection:oL},$T));QO(lL)});export default cL();
