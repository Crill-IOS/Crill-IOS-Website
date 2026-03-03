var a$=Object.defineProperty;var l$=(t,e,n)=>e in t?a$(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c$=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Dn=(t,e,n)=>l$(t,typeof e!="symbol"?e+"":e,n);var HL=c$((Tt,$t)=>{function Je(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function en(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function u$(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function ul(t){return typeof t=="object"&&t!==null&&Je(t.container)&&en(t.reference)&&typeof t.message=="string"}class J_{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,n){return Je(e)&&this.isSubtype(e.$type,n)}isSubtype(e,n){if(e===n)return!0;let r=this.subtypes[e];r||(r=this.subtypes[e]={});const i=r[n];if(i!==void 0)return i;{const s=this.computeIsSubtype(e,n);return r[n]=s,s}}getAllSubTypes(e){const n=this.allSubtypes[e];if(n)return n;{const r=this.getAllTypes(),i=[];for(const s of r)this.isSubtype(s,e)&&i.push(s);return this.allSubtypes[e]=i,i}}}function lr(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Ls(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function Q_(t){return lr(t)&&typeof t.fullText=="string"}class Ye{constructor(e,n){this.startFn=e,this.nextFn=n}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){const e=this.iterator();let n=0,r=e.next();for(;!r.done;)n++,r=e.next();return n}toArray(){const e=[],n=this.iterator();let r;do r=n.next(),r.value!==void 0&&e.push(r.value);while(!r.done);return e}toSet(){return new Set(this)}toMap(e,n){const r=this.map(i=>[e?e(i):i,n?n(i):i]);return new Map(r)}toString(){return this.join()}concat(e){return new Ye(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),n=>{let r;if(!n.firstDone){do if(r=this.nextFn(n.first),!r.done)return r;while(!r.done);n.firstDone=!0}do if(r=n.iterator.next(),!r.done)return r;while(!r.done);return vt})}join(e=","){const n=this.iterator();let r="",i,s=!1;do i=n.next(),i.done||(s&&(r+=e),r+=d$(i.value)),s=!0;while(!i.done);return r}indexOf(e,n=0){const r=this.iterator();let i=0,s=r.next();for(;!s.done;){if(i>=n&&s.value===e)return i;s=r.next(),i++}return-1}every(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(!e(r.value))return!1;r=n.next()}return!0}some(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return!0;r=n.next()}return!1}forEach(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;)e(i.value,r),i=n.next(),r++}map(e){return new Ye(this.startFn,n=>{const{done:r,value:i}=this.nextFn(n);return r?vt:{done:!1,value:e(i)}})}filter(e){return new Ye(this.startFn,n=>{let r;do if(r=this.nextFn(n),!r.done&&e(r.value))return r;while(!r.done);return vt})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,n){const r=this.iterator();let i=n,s=r.next();for(;!s.done;)i===void 0?i=s.value:i=e(i,s.value),s=r.next();return i}reduceRight(e,n){return this.recursiveReduce(this.iterator(),e,n)}recursiveReduce(e,n,r){const i=e.next();if(i.done)return r;const s=this.recursiveReduce(e,n,r);return s===void 0?i.value:n(s,i.value)}find(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return r.value;r=n.next()}}findIndex(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;){if(e(i.value))return r;i=n.next(),r++}return-1}includes(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(r.value===e)return!0;r=n.next()}return!1}flatMap(e){return new Ye(()=>({this:this.startFn()}),n=>{do{if(n.iterator){const s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}const{done:r,value:i}=this.nextFn(n.this);if(!r){const s=e(i);if(kl(s))n.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}}while(n.iterator);return vt})}flat(e){if(e===void 0&&(e=1),e<=0)return this;const n=e>1?this.flat(e-1):this;return new Ye(()=>({this:n.startFn()}),r=>{do{if(r.iterator){const o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}const{done:i,value:s}=n.nextFn(r.this);if(!i)if(kl(s))r.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}while(r.iterator);return vt})}head(){const n=this.iterator().next();if(!n.done)return n.value}tail(e=1){return new Ye(()=>{const n=this.startFn();for(let r=0;r<e;r++)if(this.nextFn(n).done)return n;return n},this.nextFn)}limit(e){return new Ye(()=>({size:0,state:this.startFn()}),n=>(n.size++,n.size>e?vt:this.nextFn(n.state)))}distinct(e){return new Ye(()=>({set:new Set,internalState:this.startFn()}),n=>{let r;do if(r=this.nextFn(n.internalState),!r.done){const i=e?e(r.value):r.value;if(!n.set.has(i))return n.set.add(i),r}while(!r.done);return vt})}exclude(e,n){const r=new Set;for(const i of e){const s=n?n(i):i;r.add(s)}return this.filter(i=>{const s=n?n(i):i;return!r.has(s)})}}function d$(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function kl(t){return!!t&&typeof t[Symbol.iterator]=="function"}const f$=new Ye(()=>{},()=>vt),vt=Object.freeze({done:!0,value:void 0});function Te(...t){if(t.length===1){const e=t[0];if(e instanceof Ye)return e;if(kl(e))return new Ye(()=>e[Symbol.iterator](),n=>n.next());if(typeof e.length=="number")return new Ye(()=>({index:0}),n=>n.index<e.length?{done:!1,value:e[n.index++]}:vt)}return t.length>1?new Ye(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){const n=e.iterator.next();if(!n.done)return n;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){const n=t[e.collIndex++];kl(n)?e.iterator=n[Symbol.iterator]():n&&typeof n.length=="number"&&(e.array=n)}}while(e.iterator||e.array||e.collIndex<t.length);return vt}):f$}class wl extends Ye{constructor(e,n,r){super(()=>({iterators:r!=null&&r.includeRoot?[[e][Symbol.iterator]()]:[n(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){const o=i.iterators[i.iterators.length-1].next();if(o.done)i.iterators.pop();else return i.iterators.push(n(o.value)[Symbol.iterator]()),o}return vt})}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}}var wf;(function(t){function e(s){return s.reduce((o,a)=>o+a,0)}t.sum=e;function n(s){return s.reduce((o,a)=>o*a,0)}t.product=n;function r(s){return s.reduce((o,a)=>Math.min(o,a))}t.min=r;function i(s){return s.reduce((o,a)=>Math.max(o,a))}t.max=i})(wf||(wf={}));function bl(t){return new wl(t,e=>lr(e)?e.content:[],{includeRoot:!0})}function p$(t){return bl(t).filter(Ls)}function h$(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function bf(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Sl(t){if(!t)return;const{offset:e,end:n,range:r}=t;return{range:r,offset:e,end:n,length:n-e}}var hn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})(hn||(hn={}));function m$(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return hn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return hn.After;const n=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,r=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return n&&r?hn.Inside:n?hn.OverlapBack:r?hn.OverlapFront:hn.Outside}function Z_(t,e){return m$(t,e)>hn.After}const ev=/^[\w\p{L}]$/u;function cr(t,e,n=ev){if(t){if(e>0){const r=e-t.offset,i=t.text.charAt(r);n.test(i)||e--}return ph(t,e)}}function tv(t,e){if(t){const n=g$(t,!0);if(n&&am(n,e))return n;if(Q_(t)){const r=t.content.findIndex(i=>!i.hidden);for(let i=r-1;i>=0;i--){const s=t.content[i];if(am(s,e))return s}}}}function am(t,e){return Ls(t)&&e.includes(t.tokenType.name)}function ph(t,e){if(Ls(t))return t;if(lr(t)){const n=nv(t,e,!1);if(n)return ph(n,e)}}function Sf(t,e){if(Ls(t))return t;if(lr(t)){const n=nv(t,e,!0);if(n)return Sf(n,e)}}function nv(t,e,n){let r=0,i=t.content.length-1,s;for(;r<=i;){const o=Math.floor((r+i)/2),a=t.content[o];if(a.offset<=e&&a.end>e)return a;a.end<=e?(s=n?a:void 0,r=o+1):i=o-1}return s}function g$(t,e=!0){for(;t.container;){const n=t.container;let r=n.content.indexOf(t);for(;r>0;){r--;const i=n.content[r];if(e||!i.hidden)return i}t=n}}class rv extends Error{constructor(e,n){super(e?`${n} at ${e.range.start.line}:${e.range.start.character}`:n)}}function Fs(t){throw new Error("Error! The input value was not handled.")}const To="AbstractRule",$o="AbstractType",su="Condition",lm="TypeDefinition",ou="ValueLiteral",Li="AbstractElement";function iv(t){return ie.isInstance(t,Li)}const ko="ArrayLiteral",wo="ArrayType",Fi="BooleanLiteral";function y$(t){return ie.isInstance(t,Fi)}const Ui="Conjunction";function _$(t){return ie.isInstance(t,Ui)}const Hi="Disjunction";function v$(t){return ie.isInstance(t,Hi)}const bo="Grammar",au="GrammarImport",Bi="InferredType";function sv(t){return ie.isInstance(t,Bi)}const ji="Interface";function ov(t){return ie.isInstance(t,ji)}const lu="NamedArgument",Ki="Negation";function R$(t){return ie.isInstance(t,Ki)}const So="NumberLiteral",Co="Parameter",qi="ParameterReference";function T$(t){return ie.isInstance(t,qi)}const Gi="ParserRule";function it(t){return ie.isInstance(t,Gi)}const Ao="ReferenceType",dl="ReturnType";function $$(t){return ie.isInstance(t,dl)}const Wi="SimpleType";function k$(t){return ie.isInstance(t,Wi)}const Eo="StringLiteral",Sr="TerminalRule";function Jn(t){return ie.isInstance(t,Sr)}const zi="Type";function av(t){return ie.isInstance(t,zi)}const cu="TypeAttribute",Po="UnionType",Vi="Action";function Us(t){return ie.isInstance(t,Vi)}const Yi="Alternatives";function hh(t){return ie.isInstance(t,Yi)}const Xi="Assignment";function rn(t){return ie.isInstance(t,Xi)}const Ji="CharacterRange";function w$(t){return ie.isInstance(t,Ji)}const Qi="CrossReference";function Hs(t){return ie.isInstance(t,Qi)}const Zi="EndOfFile";function b$(t){return ie.isInstance(t,Zi)}const es="Group";function ur(t){return ie.isInstance(t,es)}const ts="Keyword";function Ot(t){return ie.isInstance(t,ts)}const ns="NegatedToken";function S$(t){return ie.isInstance(t,ns)}const rs="RegexToken";function C$(t){return ie.isInstance(t,rs)}const is="RuleCall";function Tn(t){return ie.isInstance(t,is)}const ss="TerminalAlternatives";function A$(t){return ie.isInstance(t,ss)}const os="TerminalGroup";function E$(t){return ie.isInstance(t,os)}const as="TerminalRuleCall";function P$(t){return ie.isInstance(t,as)}const ls="UnorderedGroup";function mh(t){return ie.isInstance(t,ls)}const cs="UntilToken";function N$(t){return ie.isInstance(t,cs)}const us="Wildcard";function I$(t){return ie.isInstance(t,us)}class lv extends J_{getAllTypes(){return[Li,To,$o,Vi,Yi,ko,wo,Xi,Fi,Ji,su,Ui,Qi,Hi,Zi,bo,au,es,Bi,ji,ts,lu,ns,Ki,So,Co,qi,Gi,Ao,rs,dl,is,Wi,Eo,ss,os,Sr,as,zi,cu,lm,Po,ls,cs,ou,us]}computeIsSubtype(e,n){switch(e){case Vi:case Yi:case Xi:case Ji:case Qi:case Zi:case es:case ts:case ns:case rs:case is:case ss:case os:case as:case ls:case cs:case us:return this.isSubtype(Li,n);case ko:case So:case Eo:return this.isSubtype(ou,n);case wo:case Ao:case Wi:case Po:return this.isSubtype(lm,n);case Fi:return this.isSubtype(su,n)||this.isSubtype(ou,n);case Ui:case Hi:case Ki:case qi:return this.isSubtype(su,n);case Bi:case ji:case zi:return this.isSubtype($o,n);case Gi:return this.isSubtype(To,n)||this.isSubtype($o,n);case Sr:return this.isSubtype(To,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return $o;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return To;case"Grammar:usedGrammars":return bo;case"NamedArgument:parameter":case"ParameterReference:parameter":return Co;case"TerminalRuleCall:rule":return Sr;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Li:return{name:Li,properties:[{name:"cardinality"},{name:"lookahead"}]};case ko:return{name:ko,properties:[{name:"elements",defaultValue:[]}]};case wo:return{name:wo,properties:[{name:"elementType"}]};case Fi:return{name:Fi,properties:[{name:"true",defaultValue:!1}]};case Ui:return{name:Ui,properties:[{name:"left"},{name:"right"}]};case Hi:return{name:Hi,properties:[{name:"left"},{name:"right"}]};case bo:return{name:bo,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case au:return{name:au,properties:[{name:"path"}]};case Bi:return{name:Bi,properties:[{name:"name"}]};case ji:return{name:ji,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case lu:return{name:lu,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Ki:return{name:Ki,properties:[{name:"value"}]};case So:return{name:So,properties:[{name:"value"}]};case Co:return{name:Co,properties:[{name:"name"}]};case qi:return{name:qi,properties:[{name:"parameter"}]};case Gi:return{name:Gi,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case Ao:return{name:Ao,properties:[{name:"referenceType"}]};case dl:return{name:dl,properties:[{name:"name"}]};case Wi:return{name:Wi,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case Eo:return{name:Eo,properties:[{name:"value"}]};case Sr:return{name:Sr,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case zi:return{name:zi,properties:[{name:"name"},{name:"type"}]};case cu:return{name:cu,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case Po:return{name:Po,properties:[{name:"types",defaultValue:[]}]};case Vi:return{name:Vi,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case Yi:return{name:Yi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Xi:return{name:Xi,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Ji:return{name:Ji,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case Qi:return{name:Qi,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Zi:return{name:Zi,properties:[{name:"cardinality"},{name:"lookahead"}]};case es:return{name:es,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case ts:return{name:ts,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case ns:return{name:ns,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case rs:return{name:rs,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case is:return{name:is,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case ss:return{name:ss,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case os:return{name:os,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case as:return{name:as,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case ls:return{name:ls,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case cs:return{name:cs,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case us:return{name:us,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}}const ie=new lv;function O$(t){for(const[e,n]of Object.entries(t))e.startsWith("$")||(Array.isArray(n)?n.forEach((r,i)=>{Je(r)&&(r.$container=t,r.$containerProperty=e,r.$containerIndex=i)}):Je(n)&&(n.$container=t,n.$containerProperty=e))}function xn(t,e){let n=t;for(;n;){if(e(n))return n;n=n.$container}}function sn(t){const n=ir(t).$document;if(!n)throw new Error("AST node has no document.");return n}function ir(t){for(;t.$container;)t=t.$container;return t}function uc(t,e){if(!t)throw new Error("Node must be an AstNode.");const n=e==null?void 0:e.range;return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),r=>{for(;r.keyIndex<r.keys.length;){const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=t[i];if(Je(s)){if(r.keyIndex++,Cf(s,n))return{done:!1,value:s}}else if(Array.isArray(s)){for(;r.arrayIndex<s.length;){const o=r.arrayIndex++,a=s[o];if(Je(a)&&Cf(a,n))return{done:!1,value:a}}r.arrayIndex=0}}r.keyIndex++}return vt})}function tn(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new wl(t,n=>uc(n,e))}function or(t,e){if(t){if(e!=null&&e.range&&!Cf(t,e.range))return new wl(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new wl(t,n=>uc(n,e),{includeRoot:!0})}function Cf(t,e){var n;if(!e)return!0;const r=(n=t.$cstNode)===null||n===void 0?void 0:n.range;return r?Z_(r,e):!1}function cv(t){return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){const n=e.keys[e.keyIndex];if(!n.startsWith("$")){const r=t[n];if(en(r))return e.keyIndex++,{done:!1,value:{reference:r,container:t,property:n}};if(Array.isArray(r)){for(;e.arrayIndex<r.length;){const i=e.arrayIndex++,s=r[i];if(en(s))return{done:!1,value:{reference:s,container:t,property:n,index:i}}}e.arrayIndex=0}}e.keyIndex++}return vt})}function uv(t,e){const n=t.getTypeMetaData(e.$type),r=e;for(const i of n.properties)i.defaultValue!==void 0&&r[i.name]===void 0&&(r[i.name]=dv(i.defaultValue))}function dv(t){return Array.isArray(t)?[...t.map(dv)]:t}function q(t){return t.charCodeAt(0)}function uu(t,e){Array.isArray(t)?t.forEach(function(n){e.push(n)}):e.push(t)}function mi(t,e){if(t[e]===!0)throw"duplicate flag "+e;t[e],t[e]=!0}function wr(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function D$(){throw Error("Internal Error - Should never get here!")}function cm(t){return t.type==="Character"}const Cl=[];for(let t=q("0");t<=q("9");t++)Cl.push(t);const Al=[q("_")].concat(Cl);for(let t=q("a");t<=q("z");t++)Al.push(t);for(let t=q("A");t<=q("Z");t++)Al.push(t);const um=[q(" "),q("\f"),q(`
`),q("\r"),q("	"),q("\v"),q("	"),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q(" "),q("\u2028"),q("\u2029"),q(" "),q(" "),q("　"),q("\uFEFF")],x$=/[0-9a-fA-F]/,No=/[0-9]/,M$=/[1-9]/;class fv{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");const n=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":mi(r,"global");break;case"i":mi(r,"ignoreCase");break;case"m":mi(r,"multiLine");break;case"u":mi(r,"unicode");break;case"y":mi(r,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:r,value:n,loc:this.loc(0)}}disjunction(){const e=[],n=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(n)}}alternative(){const e=[],n=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}wr(n);const r=this.disjunction();return this.consumeChar(")"),{type:n,value:r,loc:this.loc(e)}}return D$()}quantifier(e=!1){let n;const r=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":const i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let s;this.isDigit()?(s=this.integerIncludingZero(),n={atLeast:i,atMost:s}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&n===void 0)return;wr(n);break}if(!(e===!0&&n===void 0)&&wr(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(r),n}atom(){let e;const n=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}if(e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),wr(e))return e.loc=this.loc(n),this.isQuantifier()&&(e.quantifier=this.quantifier()),e}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[q(`
`),q("\r"),q("\u2028"),q("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,n=!1;switch(this.popChar()){case"d":e=Cl;break;case"D":e=Cl,n=!0;break;case"s":e=um;break;case"S":e=um,n=!0;break;case"w":e=Al;break;case"W":e=Al,n=!0;break}if(wr(e))return{type:"Set",value:e,complement:n}}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=q("\f");break;case"n":e=q(`
`);break;case"r":e=q("\r");break;case"t":e=q("	");break;case"v":e=q("\v");break}if(wr(e))return{type:"Character",value:e}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:q("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:q(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:const e=this.popChar();return{type:"Character",value:q(e)}}}characterClass(){const e=[];let n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){const r=this.classAtom();if(r.type,cm(r)&&this.isRangeDash()){this.consumeChar("-");const i=this.classAtom();if(i.type,cm(i)){if(i.value<r.value)throw Error("Range out of order in character class");e.push({from:r.value,to:i.value})}else uu(r.value,e),e.push(q("-")),uu(i.value,e)}else uu(r.value,e)}return this.consumeChar("]"),{type:"Set",complement:n,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:q("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}const n=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:n};return e&&(r.idx=this.groupIdx),r}positiveInteger(){let e=this.popChar();if(M$.test(e)===!1)throw Error("Expecting a positive integer");for(;No.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(No.test(e)===!1)throw Error("Expecting an integer");for(;No.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:q(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return No.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){const e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let n="";for(let i=0;i<e;i++){const s=this.popChar();if(x$.test(s)===!1)throw Error("Expecting a HexDecimal digits");n+=s}return{type:"Character",value:parseInt(n,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){const e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}}class dc{visitChildren(e){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&(r.type!==void 0?this.visit(r):Array.isArray(r)&&r.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}const L$=/\r?\n/gm,F$=new fv;class U$ extends dc{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){const n=String.fromCharCode(e.value);if(!this.multiline&&n===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const r=fc(n);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitSet(e){if(!this.multiline){const n=this.regex.substring(e.loc.begin,e.loc.end),r=new RegExp(n);this.multiline=!!`
`.match(r)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const n=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}}const du=new U$;function H$(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),du.reset(t),du.visit(F$.pattern(t)),du.multiline}catch{return!1}}const B$=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function pv(t){const e=typeof t=="string"?new RegExp(t):t;return B$.some(n=>e.test(n))}function fc(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function j$(t,e){const n=K$(t),r=e.match(n);return!!r&&r[0].length>0}function K$(t){typeof t=="string"&&(t=new RegExp(t));const e=t,n=t.source;let r=0;function i(){let s="",o;function a(c){s+=n.substr(r,c),r+=c}function l(c){s+="(?:"+n.substr(r,c)+"|$)",r+=c}for(;r<n.length;)switch(n[r]){case"\\":switch(n[r+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?n[r+2]==="{"?l(n.indexOf("}",r)-r+1):l(6):l(2);break;case"p":case"P":e.unicode?l(n.indexOf("}",r)-r+1):l(2);break;case"k":l(n.indexOf(">",r)-r+1);break;default:l(2);break}break;case"[":o=/\[(?:\\.|.)*?\]/g,o.lastIndex=r,o=o.exec(n)||[],l(o[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":o=/\{\d+,?\d*\}/g,o.lastIndex=r,o=o.exec(n),o?a(o[0].length):l(1);break;case"(":if(n[r+1]==="?")switch(n[r+2]){case":":s+="(?:",r+=3,s+=i()+"|$)";break;case"=":s+="(?=",r+=3,s+=i()+")";break;case"!":o=r,r+=3,i(),s+=n.substr(o,r-o);break;case"<":switch(n[r+3]){case"=":case"!":o=r,r+=4,i(),s+=n.substr(o,r-o);break;default:a(n.indexOf(">",r)-r+1),s+=i()+"|$)";break}break}else a(1),s+=i()+"|$)";break;case")":return++r,s;default:l(1);break}return s}return new RegExp(i(),t.flags)}function Af(t){return t.rules.find(e=>it(e)&&e.entry)}function q$(t){return t.rules.filter(e=>Jn(e)&&e.hidden)}function hv(t,e){const n=new Set,r=Af(t);if(!r)return new Set(t.rules);const i=[r].concat(q$(t));for(const o of i)mv(o,n,e);const s=new Set;for(const o of t.rules)(n.has(o.name)||Jn(o)&&o.hidden)&&s.add(o);return s}function mv(t,e,n){e.add(t.name),tn(t).forEach(r=>{if(Tn(r)||n){const i=r.rule.ref;i&&!e.has(i.name)&&mv(i,e,n)}})}function gv(t){if(t.terminal)return t.terminal;if(t.type.ref){const e=Rv(t.type.ref);return e==null?void 0:e.terminal}}function G$(t){return t.hidden&&!pv(hc(t))}function yv(t,e){return!t||!e?[]:yh(t,e,t.astNode,!0)}function gh(t,e,n){if(!t||!e)return;const r=yh(t,e,t.astNode,!0);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function yh(t,e,n,r){if(!r){const i=xn(t.grammarSource,rn);if(i&&i.feature===e)return[t]}return lr(t)&&t.astNode===n?t.content.flatMap(i=>yh(i,e,n,!1)):[]}function W$(t,e){return t?vv(t,e,t==null?void 0:t.astNode):[]}function _v(t,e,n){if(!t)return;const r=vv(t,e,t==null?void 0:t.astNode);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function vv(t,e,n){if(t.astNode!==n)return[];if(Ot(t.grammarSource)&&t.grammarSource.value===e)return[t];const r=bl(t).iterator();let i;const s=[];do if(i=r.next(),!i.done){const o=i.value;o.astNode===n?Ot(o.grammarSource)&&o.grammarSource.value===e&&s.push(o):r.prune()}while(!i.done);return s}function z$(t){var e;const n=t.astNode;for(;n===((e=t.container)===null||e===void 0?void 0:e.astNode);){const r=xn(t.grammarSource,rn);if(r)return r;t=t.container}}function Rv(t){let e=t;return sv(e)&&(Us(e.$container)?e=e.$container.$container:it(e.$container)?e=e.$container:Fs(e.$container)),Tv(t,e,new Map)}function Tv(t,e,n){var r;function i(s,o){let a;return xn(s,rn)||(a=Tv(o,o,n)),n.set(t,a),a}if(n.has(t))return n.get(t);n.set(t,void 0);for(const s of tn(e)){if(rn(s)&&s.feature.toLowerCase()==="name")return n.set(t,s),s;if(Tn(s)&&it(s.rule.ref))return i(s,s.rule.ref);if(k$(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref))return i(s,s.typeRef.ref)}}function Ts(t,e){return t==="?"||t==="*"||ur(e)&&!!e.guardCondition}function V$(t){return t==="*"||t==="+"}function $v(t){return kv(t,new Set)}function kv(t,e){if(e.has(t))return!0;e.add(t);for(const n of tn(t))if(Tn(n)){if(!n.rule.ref||it(n.rule.ref)&&!kv(n.rule.ref,e))return!1}else{if(rn(n))return!1;if(Us(n))return!1}return!!t.definition}function Bs(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){const e=t.returnType.ref;if(e){if(it(e))return e.name;if(ov(e)||av(e))return e.name}}}function pc(t){var e;if(it(t))return $v(t)?t.name:(e=Bs(t))!==null&&e!==void 0?e:t.name;if(ov(t)||av(t)||$$(t))return t.name;if(Us(t)){const n=Y$(t);if(n)return n}else if(sv(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function Y$(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return pc(t.type.ref)}function X$(t){var e,n,r;return Jn(t)?(n=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&n!==void 0?n:"string":(r=Bs(t))!==null&&r!==void 0?r:t.name}function hc(t){const e={s:!1,i:!1,u:!1},n=ei(t.definition,e),r=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(n,r)}const _h=/[\s\S]/.source;function ei(t,e){if(A$(t))return J$(t);if(E$(t))return Q$(t);if(w$(t))return tk(t);if(P$(t)){const n=t.rule.ref;if(!n)throw new Error("Missing rule reference.");return yn(ei(n.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(S$(t))return ek(t);if(N$(t))return Z$(t);if(C$(t)){const n=t.regex.lastIndexOf("/"),r=t.regex.substring(1,n),i=t.regex.substring(n+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),yn(r,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(I$(t))return yn(_h,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function J$(t){return yn(t.elements.map(e=>ei(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function Q$(t){return yn(t.elements.map(e=>ei(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function Z$(t){return yn(`${_h}*?${ei(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function ek(t){return yn(`(?!${ei(t.terminal)})${_h}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function tk(t){return t.right?yn(`[${fu(t.left)}-${fu(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):yn(fu(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function fu(t){return fc(t.value)}function yn(t,e){var n;return(e.wrap!==!1||e.lookahead)&&(t=`(${(n=e.lookahead)!==null&&n!==void 0?n:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function nk(t){const e=[],n=t.Grammar;for(const r of n.rules)Jn(r)&&G$(r)&&H$(hc(r))&&e.push(r.name);return{multilineCommentRules:e,nameRegexp:ev}}var wv=typeof global=="object"&&global&&global.Object===Object&&global,rk=typeof self=="object"&&self&&self.Object===Object&&self,ln=wv||rk||Function("return this")(),Dt=ln.Symbol,bv=Object.prototype,ik=bv.hasOwnProperty,sk=bv.toString,gi=Dt?Dt.toStringTag:void 0;function ok(t){var e=ik.call(t,gi),n=t[gi];try{t[gi]=void 0;var r=!0}catch{}var i=sk.call(t);return r&&(e?t[gi]=n:delete t[gi]),i}var ak=Object.prototype,lk=ak.toString;function ck(t){return lk.call(t)}var uk="[object Null]",dk="[object Undefined]",dm=Dt?Dt.toStringTag:void 0;function Qn(t){return t==null?t===void 0?dk:uk:dm&&dm in Object(t)?ok(t):ck(t)}function qt(t){return t!=null&&typeof t=="object"}var fk="[object Symbol]";function js(t){return typeof t=="symbol"||qt(t)&&Qn(t)==fk}function mc(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var ee=Array.isArray,fm=Dt?Dt.prototype:void 0,pm=fm?fm.toString:void 0;function Sv(t){if(typeof t=="string")return t;if(ee(t))return mc(t,Sv)+"";if(js(t))return pm?pm.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var pk=/\s/;function hk(t){for(var e=t.length;e--&&pk.test(t.charAt(e)););return e}var mk=/^\s+/;function gk(t){return t&&t.slice(0,hk(t)+1).replace(mk,"")}function xt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var hm=NaN,yk=/^[-+]0x[0-9a-f]+$/i,_k=/^0b[01]+$/i,vk=/^0o[0-7]+$/i,Rk=parseInt;function Tk(t){if(typeof t=="number")return t;if(js(t))return hm;if(xt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=gk(t);var n=_k.test(t);return n||vk.test(t)?Rk(t.slice(2),n?2:8):yk.test(t)?hm:+t}var mm=1/0,$k=17976931348623157e292;function kk(t){if(!t)return t===0?t:0;if(t=Tk(t),t===mm||t===-mm){var e=t<0?-1:1;return e*$k}return t===t?t:0}function gc(t){var e=kk(t),n=e%1;return e===e?n?e-n:e:0}function dr(t){return t}var wk="[object AsyncFunction]",bk="[object Function]",Sk="[object GeneratorFunction]",Ck="[object Proxy]";function Cn(t){if(!xt(t))return!1;var e=Qn(t);return e==bk||e==Sk||e==wk||e==Ck}var pu=ln["__core-js_shared__"],gm=function(){var t=/[^.]+$/.exec(pu&&pu.keys&&pu.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Ak(t){return!!gm&&gm in t}var Ek=Function.prototype,Pk=Ek.toString;function yr(t){if(t!=null){try{return Pk.call(t)}catch{}try{return t+""}catch{}}return""}var Nk=/[\\^$.*+?()[\]{}|]/g,Ik=/^\[object .+?Constructor\]$/,Ok=Function.prototype,Dk=Object.prototype,xk=Ok.toString,Mk=Dk.hasOwnProperty,Lk=RegExp("^"+xk.call(Mk).replace(Nk,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Fk(t){if(!xt(t)||Ak(t))return!1;var e=Cn(t)?Lk:Ik;return e.test(yr(t))}function Uk(t,e){return t==null?void 0:t[e]}function _r(t,e){var n=Uk(t,e);return Fk(n)?n:void 0}var Ef=_r(ln,"WeakMap"),ym=Object.create,Hk=function(){function t(){}return function(e){if(!xt(e))return{};if(ym)return ym(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Bk(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function je(){}function jk(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var Kk=800,qk=16,Gk=Date.now;function Wk(t){var e=0,n=0;return function(){var r=Gk(),i=qk-(r-n);if(n=r,i>0){if(++e>=Kk)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function zk(t){return function(){return t}}var El=function(){try{var t=_r(Object,"defineProperty");return t({},"",{}),t}catch{}}(),Vk=El?function(t,e){return El(t,"toString",{configurable:!0,enumerable:!1,value:zk(e),writable:!0})}:dr,Yk=Wk(Vk);function Cv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Av(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function Xk(t){return t!==t}function Jk(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function vh(t,e,n){return e===e?Jk(t,e,n):Av(t,Xk,n)}function Ev(t,e){var n=t==null?0:t.length;return!!n&&vh(t,e,0)>-1}var Qk=9007199254740991,Zk=/^(?:0|[1-9]\d*)$/;function yc(t,e){var n=typeof t;return e=e??Qk,!!e&&(n=="number"||n!="symbol"&&Zk.test(t))&&t>-1&&t%1==0&&t<e}function Rh(t,e,n){e=="__proto__"&&El?El(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Ks(t,e){return t===e||t!==t&&e!==e}var ew=Object.prototype,tw=ew.hasOwnProperty;function _c(t,e,n){var r=t[e];(!(tw.call(t,e)&&Ks(r,n))||n===void 0&&!(e in t))&&Rh(t,e,n)}function qs(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=void 0;l===void 0&&(l=t[a]),i?Rh(n,a,l):_c(n,a,l)}return n}var _m=Math.max;function nw(t,e,n){return e=_m(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=_m(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),Bk(t,this,a)}}function Th(t,e){return Yk(nw(t,e,dr),t+"")}var rw=9007199254740991;function $h(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=rw}function cn(t){return t!=null&&$h(t.length)&&!Cn(t)}function Pv(t,e,n){if(!xt(n))return!1;var r=typeof e;return(r=="number"?cn(n)&&yc(e,n.length):r=="string"&&e in n)?Ks(n[e],t):!1}function iw(t){return Th(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&Pv(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var sw=Object.prototype;function Gs(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||sw;return t===n}function ow(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var aw="[object Arguments]";function vm(t){return qt(t)&&Qn(t)==aw}var Nv=Object.prototype,lw=Nv.hasOwnProperty,cw=Nv.propertyIsEnumerable,vc=vm(function(){return arguments}())?vm:function(t){return qt(t)&&lw.call(t,"callee")&&!cw.call(t,"callee")};function uw(){return!1}var Iv=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,Rm=Iv&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,dw=Rm&&Rm.exports===Iv,Tm=dw?ln.Buffer:void 0,fw=Tm?Tm.isBuffer:void 0,$s=fw||uw,pw="[object Arguments]",hw="[object Array]",mw="[object Boolean]",gw="[object Date]",yw="[object Error]",_w="[object Function]",vw="[object Map]",Rw="[object Number]",Tw="[object Object]",$w="[object RegExp]",kw="[object Set]",ww="[object String]",bw="[object WeakMap]",Sw="[object ArrayBuffer]",Cw="[object DataView]",Aw="[object Float32Array]",Ew="[object Float64Array]",Pw="[object Int8Array]",Nw="[object Int16Array]",Iw="[object Int32Array]",Ow="[object Uint8Array]",Dw="[object Uint8ClampedArray]",xw="[object Uint16Array]",Mw="[object Uint32Array]",me={};me[Aw]=me[Ew]=me[Pw]=me[Nw]=me[Iw]=me[Ow]=me[Dw]=me[xw]=me[Mw]=!0;me[pw]=me[hw]=me[Sw]=me[mw]=me[Cw]=me[gw]=me[yw]=me[_w]=me[vw]=me[Rw]=me[Tw]=me[$w]=me[kw]=me[ww]=me[bw]=!1;function Lw(t){return qt(t)&&$h(t.length)&&!!me[Qn(t)]}function Rc(t){return function(e){return t(e)}}var Ov=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,vs=Ov&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,Fw=vs&&vs.exports===Ov,hu=Fw&&wv.process,Gn=function(){try{var t=vs&&vs.require&&vs.require("util").types;return t||hu&&hu.binding&&hu.binding("util")}catch{}}(),$m=Gn&&Gn.isTypedArray,kh=$m?Rc($m):Lw,Uw=Object.prototype,Hw=Uw.hasOwnProperty;function Dv(t,e){var n=ee(t),r=!n&&vc(t),i=!n&&!r&&$s(t),s=!n&&!r&&!i&&kh(t),o=n||r||i||s,a=o?ow(t.length,String):[],l=a.length;for(var c in t)(e||Hw.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||yc(c,l)))&&a.push(c);return a}function xv(t,e){return function(n){return t(e(n))}}var Bw=xv(Object.keys,Object),jw=Object.prototype,Kw=jw.hasOwnProperty;function Mv(t){if(!Gs(t))return Bw(t);var e=[];for(var n in Object(t))Kw.call(t,n)&&n!="constructor"&&e.push(n);return e}function Mt(t){return cn(t)?Dv(t):Mv(t)}var qw=Object.prototype,Gw=qw.hasOwnProperty,wt=iw(function(t,e){if(Gs(e)||cn(e)){qs(e,Mt(e),t);return}for(var n in e)Gw.call(e,n)&&_c(t,n,e[n])});function Ww(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var zw=Object.prototype,Vw=zw.hasOwnProperty;function Yw(t){if(!xt(t))return Ww(t);var e=Gs(t),n=[];for(var r in t)r=="constructor"&&(e||!Vw.call(t,r))||n.push(r);return n}function wh(t){return cn(t)?Dv(t,!0):Yw(t)}var Xw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jw=/^\w*$/;function bh(t,e){if(ee(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||js(t)?!0:Jw.test(t)||!Xw.test(t)||e!=null&&t in Object(e)}var ks=_r(Object,"create");function Qw(){this.__data__=ks?ks(null):{},this.size=0}function Zw(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var eb="__lodash_hash_undefined__",tb=Object.prototype,nb=tb.hasOwnProperty;function rb(t){var e=this.__data__;if(ks){var n=e[t];return n===eb?void 0:n}return nb.call(e,t)?e[t]:void 0}var ib=Object.prototype,sb=ib.hasOwnProperty;function ob(t){var e=this.__data__;return ks?e[t]!==void 0:sb.call(e,t)}var ab="__lodash_hash_undefined__";function lb(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ks&&e===void 0?ab:e,this}function fr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}fr.prototype.clear=Qw;fr.prototype.delete=Zw;fr.prototype.get=rb;fr.prototype.has=ob;fr.prototype.set=lb;function cb(){this.__data__=[],this.size=0}function Tc(t,e){for(var n=t.length;n--;)if(Ks(t[n][0],e))return n;return-1}var ub=Array.prototype,db=ub.splice;function fb(t){var e=this.__data__,n=Tc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():db.call(e,n,1),--this.size,!0}function pb(t){var e=this.__data__,n=Tc(e,t);return n<0?void 0:e[n][1]}function hb(t){return Tc(this.__data__,t)>-1}function mb(t,e){var n=this.__data__,r=Tc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function An(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}An.prototype.clear=cb;An.prototype.delete=fb;An.prototype.get=pb;An.prototype.has=hb;An.prototype.set=mb;var ws=_r(ln,"Map");function gb(){this.size=0,this.__data__={hash:new fr,map:new(ws||An),string:new fr}}function yb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function $c(t,e){var n=t.__data__;return yb(e)?n[typeof e=="string"?"string":"hash"]:n.map}function _b(t){var e=$c(this,t).delete(t);return this.size-=e?1:0,e}function vb(t){return $c(this,t).get(t)}function Rb(t){return $c(this,t).has(t)}function Tb(t,e){var n=$c(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function En(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}En.prototype.clear=gb;En.prototype.delete=_b;En.prototype.get=vb;En.prototype.has=Rb;En.prototype.set=Tb;var $b="Expected a function";function Sh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError($b);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Sh.Cache||En),n}Sh.Cache=En;var kb=500;function wb(t){var e=Sh(t,function(r){return n.size===kb&&n.clear(),r}),n=e.cache;return e}var bb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Sb=/\\(\\)?/g,Cb=wb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(bb,function(n,r,i,s){e.push(i?s.replace(Sb,"$1"):r||n)}),e});function Ab(t){return t==null?"":Sv(t)}function kc(t,e){return ee(t)?t:bh(t,e)?[t]:Cb(Ab(t))}function Ws(t){if(typeof t=="string"||js(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Ch(t,e){e=kc(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Ws(e[n++])];return n&&n==r?t:void 0}function Eb(t,e,n){var r=t==null?void 0:Ch(t,e);return r===void 0?n:r}function Ah(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var km=Dt?Dt.isConcatSpreadable:void 0;function Pb(t){return ee(t)||vc(t)||!!(km&&t&&t[km])}function Eh(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=Pb),i||(i=[]);++s<o;){var a=t[s];n(a)?Ah(i,a):r||(i[i.length]=a)}return i}function It(t){var e=t==null?0:t.length;return e?Eh(t):[]}var Lv=xv(Object.getPrototypeOf,Object);function Fv(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function Nb(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function Ib(){this.__data__=new An,this.size=0}function Ob(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Db(t){return this.__data__.get(t)}function xb(t){return this.__data__.has(t)}var Mb=200;function Lb(t,e){var n=this.__data__;if(n instanceof An){var r=n.__data__;if(!ws||r.length<Mb-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new En(r)}return n.set(t,e),this.size=n.size,this}function nn(t){var e=this.__data__=new An(t);this.size=e.size}nn.prototype.clear=Ib;nn.prototype.delete=Ob;nn.prototype.get=Db;nn.prototype.has=xb;nn.prototype.set=Lb;function Fb(t,e){return t&&qs(e,Mt(e),t)}function Ub(t,e){return t&&qs(e,wh(e),t)}var Uv=typeof Tt=="object"&&Tt&&!Tt.nodeType&&Tt,wm=Uv&&typeof $t=="object"&&$t&&!$t.nodeType&&$t,Hb=wm&&wm.exports===Uv,bm=Hb?ln.Buffer:void 0,Sm=bm?bm.allocUnsafe:void 0;function Bb(t,e){var n=t.length,r=Sm?Sm(n):new t.constructor(n);return t.copy(r),r}function Ph(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function Hv(){return[]}var jb=Object.prototype,Kb=jb.propertyIsEnumerable,Cm=Object.getOwnPropertySymbols,Nh=Cm?function(t){return t==null?[]:(t=Object(t),Ph(Cm(t),function(e){return Kb.call(t,e)}))}:Hv;function qb(t,e){return qs(t,Nh(t),e)}var Gb=Object.getOwnPropertySymbols,Bv=Gb?function(t){for(var e=[];t;)Ah(e,Nh(t)),t=Lv(t);return e}:Hv;function Wb(t,e){return qs(t,Bv(t),e)}function jv(t,e,n){var r=e(t);return ee(t)?r:Ah(r,n(t))}function Pf(t){return jv(t,Mt,Nh)}function zb(t){return jv(t,wh,Bv)}var Nf=_r(ln,"DataView"),If=_r(ln,"Promise"),Nr=_r(ln,"Set"),Am="[object Map]",Vb="[object Object]",Em="[object Promise]",Pm="[object Set]",Nm="[object WeakMap]",Im="[object DataView]",Yb=yr(Nf),Xb=yr(ws),Jb=yr(If),Qb=yr(Nr),Zb=yr(Ef),Et=Qn;(Nf&&Et(new Nf(new ArrayBuffer(1)))!=Im||ws&&Et(new ws)!=Am||If&&Et(If.resolve())!=Em||Nr&&Et(new Nr)!=Pm||Ef&&Et(new Ef)!=Nm)&&(Et=function(t){var e=Qn(t),n=e==Vb?t.constructor:void 0,r=n?yr(n):"";if(r)switch(r){case Yb:return Im;case Xb:return Am;case Jb:return Em;case Qb:return Pm;case Zb:return Nm}return e});var eS=Object.prototype,tS=eS.hasOwnProperty;function nS(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&tS.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var Pl=ln.Uint8Array;function rS(t){var e=new t.constructor(t.byteLength);return new Pl(e).set(new Pl(t)),e}function iS(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var sS=/\w*$/;function oS(t){var e=new t.constructor(t.source,sS.exec(t));return e.lastIndex=t.lastIndex,e}var Om=Dt?Dt.prototype:void 0,Dm=Om?Om.valueOf:void 0;function aS(t){return Dm?Object(Dm.call(t)):{}}function lS(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var cS="[object Boolean]",uS="[object Date]",dS="[object Map]",fS="[object Number]",pS="[object RegExp]",hS="[object Set]",mS="[object String]",gS="[object Symbol]",yS="[object ArrayBuffer]",_S="[object DataView]",vS="[object Float32Array]",RS="[object Float64Array]",TS="[object Int8Array]",$S="[object Int16Array]",kS="[object Int32Array]",wS="[object Uint8Array]",bS="[object Uint8ClampedArray]",SS="[object Uint16Array]",CS="[object Uint32Array]";function AS(t,e,n){var r=t.constructor;switch(e){case yS:return rS(t);case cS:case uS:return new r(+t);case _S:return iS(t);case vS:case RS:case TS:case $S:case kS:case wS:case bS:case SS:case CS:return lS(t);case dS:return new r;case fS:case mS:return new r(t);case pS:return oS(t);case hS:return new r;case gS:return aS(t)}}function ES(t){return typeof t.constructor=="function"&&!Gs(t)?Hk(Lv(t)):{}}var PS="[object Map]";function NS(t){return qt(t)&&Et(t)==PS}var xm=Gn&&Gn.isMap,IS=xm?Rc(xm):NS,OS="[object Set]";function DS(t){return qt(t)&&Et(t)==OS}var Mm=Gn&&Gn.isSet,xS=Mm?Rc(Mm):DS,MS=2,Kv="[object Arguments]",LS="[object Array]",FS="[object Boolean]",US="[object Date]",HS="[object Error]",qv="[object Function]",BS="[object GeneratorFunction]",jS="[object Map]",KS="[object Number]",Gv="[object Object]",qS="[object RegExp]",GS="[object Set]",WS="[object String]",zS="[object Symbol]",VS="[object WeakMap]",YS="[object ArrayBuffer]",XS="[object DataView]",JS="[object Float32Array]",QS="[object Float64Array]",ZS="[object Int8Array]",eC="[object Int16Array]",tC="[object Int32Array]",nC="[object Uint8Array]",rC="[object Uint8ClampedArray]",iC="[object Uint16Array]",sC="[object Uint32Array]",fe={};fe[Kv]=fe[LS]=fe[YS]=fe[XS]=fe[FS]=fe[US]=fe[JS]=fe[QS]=fe[ZS]=fe[eC]=fe[tC]=fe[jS]=fe[KS]=fe[Gv]=fe[qS]=fe[GS]=fe[WS]=fe[zS]=fe[nC]=fe[rC]=fe[iC]=fe[sC]=!0;fe[HS]=fe[qv]=fe[VS]=!1;function fl(t,e,n,r,i,s){var o,a=e&MS;if(o!==void 0)return o;if(!xt(t))return t;var l=ee(t);if(l)return o=nS(t),jk(t,o);var c=Et(t),u=c==qv||c==BS;if($s(t))return Bb(t);if(c==Gv||c==Kv||u&&!i)return o=u?{}:ES(t),a?Wb(t,Ub(o,t)):qb(t,Fb(o,t));if(!fe[c])return i?t:{};o=AS(t,c),s||(s=new nn);var f=s.get(t);if(f)return f;s.set(t,o),xS(t)?t.forEach(function(d){o.add(fl(d,e,n,d,t,s))}):IS(t)&&t.forEach(function(d,_){o.set(_,fl(d,e,n,_,t,s))});var m=Pf,g=l?void 0:m(t);return Cv(g||t,function(d,_){g&&(_=d,d=t[_]),_c(o,_,fl(d,e,n,_,t,s))}),o}var oC=4;function Ze(t){return fl(t,oC)}function zs(t){for(var e=-1,n=t==null?0:t.length,r=0,i=[];++e<n;){var s=t[e];s&&(i[r++]=s)}return i}var aC="__lodash_hash_undefined__";function lC(t){return this.__data__.set(t,aC),this}function cC(t){return this.__data__.has(t)}function xr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new En;++e<n;)this.add(t[e])}xr.prototype.add=xr.prototype.push=lC;xr.prototype.has=cC;function Wv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function Ih(t,e){return t.has(e)}var uC=1,dC=2;function zv(t,e,n,r,i,s){var o=n&uC,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t),u=s.get(e);if(c&&u)return c==e&&u==t;var f=-1,m=!0,g=n&dC?new xr:void 0;for(s.set(t,e),s.set(e,t);++f<a;){var d=t[f],_=e[f];if(r)var T=o?r(_,d,f,e,t,s):r(d,_,f,t,e,s);if(T!==void 0){if(T)continue;m=!1;break}if(g){if(!Wv(e,function(v,p){if(!Ih(g,p)&&(d===v||i(d,v,n,r,s)))return g.push(p)})){m=!1;break}}else if(!(d===_||i(d,_,n,r,s))){m=!1;break}}return s.delete(t),s.delete(e),m}function fC(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function Oh(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var pC=1,hC=2,mC="[object Boolean]",gC="[object Date]",yC="[object Error]",_C="[object Map]",vC="[object Number]",RC="[object RegExp]",TC="[object Set]",$C="[object String]",kC="[object Symbol]",wC="[object ArrayBuffer]",bC="[object DataView]",Lm=Dt?Dt.prototype:void 0,mu=Lm?Lm.valueOf:void 0;function SC(t,e,n,r,i,s,o){switch(n){case bC:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case wC:return!(t.byteLength!=e.byteLength||!s(new Pl(t),new Pl(e)));case mC:case gC:case vC:return Ks(+t,+e);case yC:return t.name==e.name&&t.message==e.message;case RC:case $C:return t==e+"";case _C:var a=fC;case TC:var l=r&pC;if(a||(a=Oh),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;r|=hC,o.set(t,e);var u=zv(a(t),a(e),r,i,s,o);return o.delete(t),u;case kC:if(mu)return mu.call(t)==mu.call(e)}return!1}var CC=1,AC=Object.prototype,EC=AC.hasOwnProperty;function PC(t,e,n,r,i,s){var o=n&CC,a=Pf(t),l=a.length,c=Pf(e),u=c.length;if(l!=u&&!o)return!1;for(var f=l;f--;){var m=a[f];if(!(o?m in e:EC.call(e,m)))return!1}var g=s.get(t),d=s.get(e);if(g&&d)return g==e&&d==t;var _=!0;s.set(t,e),s.set(e,t);for(var T=o;++f<l;){m=a[f];var v=t[m],p=e[m];if(r)var h=o?r(p,v,m,e,t,s):r(v,p,m,t,e,s);if(!(h===void 0?v===p||i(v,p,n,r,s):h)){_=!1;break}T||(T=m=="constructor")}if(_&&!T){var $=t.constructor,F=e.constructor;$!=F&&"constructor"in t&&"constructor"in e&&!(typeof $=="function"&&$ instanceof $&&typeof F=="function"&&F instanceof F)&&(_=!1)}return s.delete(t),s.delete(e),_}var NC=1,Fm="[object Arguments]",Um="[object Array]",Io="[object Object]",IC=Object.prototype,Hm=IC.hasOwnProperty;function OC(t,e,n,r,i,s){var o=ee(t),a=ee(e),l=o?Um:Et(t),c=a?Um:Et(e);l=l==Fm?Io:l,c=c==Fm?Io:c;var u=l==Io,f=c==Io,m=l==c;if(m&&$s(t)){if(!$s(e))return!1;o=!0,u=!1}if(m&&!u)return s||(s=new nn),o||kh(t)?zv(t,e,n,r,i,s):SC(t,e,l,n,r,i,s);if(!(n&NC)){var g=u&&Hm.call(t,"__wrapped__"),d=f&&Hm.call(e,"__wrapped__");if(g||d){var _=g?t.value():t,T=d?e.value():e;return s||(s=new nn),i(_,T,n,r,s)}}return m?(s||(s=new nn),PC(t,e,n,r,i,s)):!1}function Dh(t,e,n,r,i){return t===e?!0:t==null||e==null||!qt(t)&&!qt(e)?t!==t&&e!==e:OC(t,e,n,r,Dh,i)}var DC=1,xC=2;function MC(t,e,n,r){var i=n.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var o=n[i];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return!1}for(;++i<s;){o=n[i];var a=o[0],l=t[a],c=o[1];if(o[2]){if(l===void 0&&!(a in t))return!1}else{var u=new nn,f;if(!(f===void 0?Dh(c,l,DC|xC,r,u):f))return!1}}return!0}function Vv(t){return t===t&&!xt(t)}function LC(t){for(var e=Mt(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Vv(i)]}return e}function Yv(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function FC(t){var e=LC(t);return e.length==1&&e[0][2]?Yv(e[0][0],e[0][1]):function(n){return n===t||MC(n,t,e)}}function UC(t,e){return t!=null&&e in Object(t)}function Xv(t,e,n){e=kc(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Ws(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&$h(i)&&yc(o,i)&&(ee(t)||vc(t)))}function HC(t,e){return t!=null&&Xv(t,e,UC)}var BC=1,jC=2;function KC(t,e){return bh(t)&&Vv(e)?Yv(Ws(t),e):function(n){var r=Eb(n,t);return r===void 0&&r===e?HC(n,t):Dh(e,r,BC|jC)}}function qC(t){return function(e){return e==null?void 0:e[t]}}function GC(t){return function(e){return Ch(e,t)}}function WC(t){return bh(t)?qC(Ws(t)):GC(t)}function Wt(t){return typeof t=="function"?t:t==null?dr:typeof t=="object"?ee(t)?KC(t[0],t[1]):FC(t):WC(t)}function zC(t,e,n,r){for(var i=-1,s=t==null?0:t.length;++i<s;){var o=t[i];e(r,o,n(o),t)}return r}function VC(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[++i];if(n(s[l],l,s)===!1)break}return e}}var YC=VC();function XC(t,e){return t&&YC(t,e,Mt)}function JC(t,e){return function(n,r){if(n==null)return n;if(!cn(n))return t(n,r);for(var i=n.length,s=-1,o=Object(n);++s<i&&r(o[s],s,o)!==!1;);return n}}var vr=JC(XC);function QC(t,e,n,r){return vr(t,function(i,s,o){e(r,i,n(i),o)}),r}function ZC(t,e){return function(n,r){var i=ee(n)?zC:QC,s=e?e():{};return i(n,t,Wt(r),s)}}var Jv=Object.prototype,eA=Jv.hasOwnProperty,xh=Th(function(t,e){t=Object(t);var n=-1,r=e.length,i=r>2?e[2]:void 0;for(i&&Pv(e[0],e[1],i)&&(r=1);++n<r;)for(var s=e[n],o=wh(s),a=-1,l=o.length;++a<l;){var c=o[a],u=t[c];(u===void 0||Ks(u,Jv[c])&&!eA.call(t,c))&&(t[c]=s[c])}return t});function Bm(t){return qt(t)&&cn(t)}var tA=200;function nA(t,e,n,r){var i=-1,s=Ev,o=!0,a=t.length,l=[],c=e.length;if(!a)return l;e.length>=tA&&(s=Ih,o=!1,e=new xr(e));e:for(;++i<a;){var u=t[i],f=u;if(u=u!==0?u:0,o&&f===f){for(var m=c;m--;)if(e[m]===f)continue e;l.push(u)}else s(e,f,r)||l.push(u)}return l}var wc=Th(function(t,e){return Bm(t)?nA(t,Eh(e,1,Bm,!0)):[]});function Mr(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function Ve(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:gc(e),Fv(t,e<0?0:e,r)):[]}function bs(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:gc(e),e=r-e,Fv(t,0,e<0?0:e)):[]}function rA(t){return typeof t=="function"?t:dr}function j(t,e){var n=ee(t)?Cv:vr;return n(t,rA(e))}function iA(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function sA(t,e){var n=!0;return vr(t,function(r,i,s){return n=!!e(r,i,s),n}),n}function jt(t,e,n){var r=ee(t)?iA:sA;return r(t,Wt(e))}function Qv(t,e){var n=[];return vr(t,function(r,i,s){e(r,i,s)&&n.push(r)}),n}function bt(t,e){var n=ee(t)?Ph:Qv;return n(t,Wt(e))}function oA(t){return function(e,n,r){var i=Object(e);if(!cn(e)){var s=Wt(n);e=Mt(e),n=function(a){return s(i[a],a,i)}}var o=t(e,n,r);return o>-1?i[s?e[o]:o]:void 0}}var aA=Math.max;function lA(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:gc(n);return i<0&&(i=aA(r+i,0)),Av(t,Wt(e),i)}var Lr=oA(lA);function Gt(t){return t&&t.length?t[0]:void 0}function cA(t,e){var n=-1,r=cn(t)?Array(t.length):[];return vr(t,function(i,s,o){r[++n]=e(i,s,o)}),r}function L(t,e){var n=ee(t)?mc:cA;return n(t,Wt(e))}function kt(t,e){return Eh(L(t,e))}var uA=Object.prototype,dA=uA.hasOwnProperty,fA=ZC(function(t,e,n){dA.call(t,n)?t[n].push(e):Rh(t,n,[e])}),pA=Object.prototype,hA=pA.hasOwnProperty;function mA(t,e){return t!=null&&hA.call(t,e)}function K(t,e){return t!=null&&Xv(t,e,mA)}var gA="[object String]";function mt(t){return typeof t=="string"||!ee(t)&&qt(t)&&Qn(t)==gA}function yA(t,e){return mc(e,function(n){return t[n]})}function Ke(t){return t==null?[]:yA(t,Mt(t))}var _A=Math.max;function dt(t,e,n,r){t=cn(t)?t:Ke(t),n=n?gc(n):0;var i=t.length;return n<0&&(n=_A(i+n,0)),mt(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&vh(t,e,n)>-1}function jm(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=0;return vh(t,e,i)}var vA="[object Map]",RA="[object Set]",TA=Object.prototype,$A=TA.hasOwnProperty;function ce(t){if(t==null)return!0;if(cn(t)&&(ee(t)||typeof t=="string"||typeof t.splice=="function"||$s(t)||kh(t)||vc(t)))return!t.length;var e=Et(t);if(e==vA||e==RA)return!t.size;if(Gs(t))return!Mv(t).length;for(var n in t)if($A.call(t,n))return!1;return!0}var kA="[object RegExp]";function wA(t){return qt(t)&&Qn(t)==kA}var Km=Gn&&Gn.isRegExp,$n=Km?Rc(Km):wA;function kn(t){return t===void 0}function bA(t,e){return t<e}function SA(t,e,n){for(var r=-1,i=t.length;++r<i;){var s=t[r],o=e(s);if(o!=null&&(a===void 0?o===o&&!js(o):n(o,a)))var a=o,l=s}return l}function CA(t){return t&&t.length?SA(t,dr,bA):void 0}var AA="Expected a function";function EA(t){if(typeof t!="function")throw new TypeError(AA);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function PA(t,e,n,r){if(!xt(t))return t;e=kc(e,t);for(var i=-1,s=e.length,o=s-1,a=t;a!=null&&++i<s;){var l=Ws(e[i]),c=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=o){var u=a[l];c=void 0,c===void 0&&(c=xt(u)?u:yc(e[i+1])?[]:{})}_c(a,l,c),a=a[l]}return t}function NA(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=Ch(t,o);n(a,o)&&PA(s,kc(o,t),a)}return s}function zt(t,e){if(t==null)return{};var n=mc(zb(t),function(r){return[r]});return e=Wt(e),NA(t,n,function(r,i){return e(r,i[0])})}function IA(t,e,n,r,i){return i(t,function(s,o,a){n=r?(r=!1,s):e(n,s,o,a)}),n}function lt(t,e,n){var r=ee(t)?Nb:IA,i=arguments.length<3;return r(t,Wt(e),n,i,vr)}function bc(t,e){var n=ee(t)?Ph:Qv;return n(t,EA(Wt(e)))}function OA(t,e){var n;return vr(t,function(r,i,s){return n=e(r,i,s),!n}),!!n}function Zv(t,e,n){var r=ee(t)?Wv:OA;return r(t,Wt(e))}var DA=1/0,xA=Nr&&1/Oh(new Nr([,-0]))[1]==DA?function(t){return new Nr(t)}:je,MA=200;function eR(t,e,n){var r=-1,i=Ev,s=t.length,o=!0,a=[],l=a;if(s>=MA){var c=e?null:xA(t);if(c)return Oh(c);o=!1,i=Ih,l=new xr}else l=e?[]:a;e:for(;++r<s;){var u=t[r],f=e?e(u):u;if(u=u!==0?u:0,o&&f===f){for(var m=l.length;m--;)if(l[m]===f)continue e;e&&l.push(f),a.push(u)}else i(l,f,n)||(l!==a&&l.push(f),a.push(u))}return a}function Mh(t){return t&&t.length?eR(t):[]}function LA(t,e){return t&&t.length?eR(t,Wt(e)):[]}function Of(t){console&&console.error&&console.error(`Error: ${t}`)}function tR(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function nR(t){const e=new Date().getTime(),n=t();return{time:new Date().getTime()-e,value:n}}function rR(t){function e(){}e.prototype=t;const n=new e;function r(){return typeof n.bar}return r(),r(),t}function FA(t){return UA(t)?t.LABEL:t.name}function UA(t){return mt(t.LABEL)&&t.LABEL!==""}class un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),j(this.definition,n=>{n.accept(e)})}}class ct extends un{constructor(e){super([]),this.idx=1,wt(this,zt(e,n=>n!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class ti extends un{constructor(e){super(e.definition),this.orgText="",wt(this,zt(e,n=>n!==void 0))}}class gt extends un{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,wt(this,zt(e,n=>n!==void 0))}}class Qe extends un{constructor(e){super(e.definition),this.idx=1,wt(this,zt(e,n=>n!==void 0))}}class St extends un{constructor(e){super(e.definition),this.idx=1,wt(this,zt(e,n=>n!==void 0))}}class Ct extends un{constructor(e){super(e.definition),this.idx=1,wt(this,zt(e,n=>n!==void 0))}}class Se extends un{constructor(e){super(e.definition),this.idx=1,wt(this,zt(e,n=>n!==void 0))}}class yt extends un{constructor(e){super(e.definition),this.idx=1,wt(this,zt(e,n=>n!==void 0))}}class _t extends un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,wt(this,zt(e,n=>n!==void 0))}}class ge{constructor(e){this.idx=1,wt(this,zt(e,n=>n!==void 0))}accept(e){e.visit(this)}}function HA(t){return L(t,pl)}function pl(t){function e(n){return L(n,pl)}if(t instanceof ct){const n={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return mt(t.label)&&(n.label=t.label),n}else{if(t instanceof gt)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Qe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof St)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Ct)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:pl(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof yt)return{type:"RepetitionWithSeparator",idx:t.idx,separator:pl(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Se)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof _t)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ge){const n={type:"Terminal",name:t.terminalType.name,label:FA(t.terminalType),idx:t.idx};mt(t.label)&&(n.terminalLabel=t.label);const r=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=$n(r)?r.source:r),n}else{if(t instanceof ti)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}class ni{visit(e){const n=e;switch(n.constructor){case ct:return this.visitNonTerminal(n);case gt:return this.visitAlternative(n);case Qe:return this.visitOption(n);case St:return this.visitRepetitionMandatory(n);case Ct:return this.visitRepetitionMandatoryWithSeparator(n);case yt:return this.visitRepetitionWithSeparator(n);case Se:return this.visitRepetition(n);case _t:return this.visitAlternation(n);case ge:return this.visitTerminal(n);case ti:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function BA(t){return t instanceof gt||t instanceof Qe||t instanceof Se||t instanceof St||t instanceof Ct||t instanceof yt||t instanceof ge||t instanceof ti}function Nl(t,e=[]){return t instanceof Qe||t instanceof Se||t instanceof yt?!0:t instanceof _t?Zv(t.definition,r=>Nl(r,e)):t instanceof ct&&dt(e,t)?!1:t instanceof un?(t instanceof ct&&e.push(t),jt(t.definition,r=>Nl(r,e))):!1}function jA(t){return t instanceof _t}function Qt(t){if(t instanceof ct)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof _t)return"OR";if(t instanceof St)return"AT_LEAST_ONE";if(t instanceof Ct)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof Se)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}class Sc{walk(e,n=[]){j(e.definition,(r,i)=>{const s=Ve(e.definition,i+1);if(r instanceof ct)this.walkProdRef(r,s,n);else if(r instanceof ge)this.walkTerminal(r,s,n);else if(r instanceof gt)this.walkFlat(r,s,n);else if(r instanceof Qe)this.walkOption(r,s,n);else if(r instanceof St)this.walkAtLeastOne(r,s,n);else if(r instanceof Ct)this.walkAtLeastOneSep(r,s,n);else if(r instanceof yt)this.walkManySep(r,s,n);else if(r instanceof Se)this.walkMany(r,s,n);else if(r instanceof _t)this.walkOr(r,s,n);else throw Error("non exhaustive match")})}walkTerminal(e,n,r){}walkProdRef(e,n,r){}walkFlat(e,n,r){const i=n.concat(r);this.walk(e,i)}walkOption(e,n,r){const i=n.concat(r);this.walk(e,i)}walkAtLeastOne(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkAtLeastOneSep(e,n,r){const i=qm(e,n,r);this.walk(e,i)}walkMany(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkManySep(e,n,r){const i=qm(e,n,r);this.walk(e,i)}walkOr(e,n,r){const i=n.concat(r);j(e.definition,s=>{const o=new gt({definition:[s]});this.walk(o,i)})}}function qm(t,e,n){return[new Qe({definition:[new ge({terminalType:t.separator})].concat(t.definition)})].concat(e,n)}function Vs(t){if(t instanceof ct)return Vs(t.referencedRule);if(t instanceof ge)return GA(t);if(BA(t))return KA(t);if(jA(t))return qA(t);throw Error("non exhaustive match")}function KA(t){let e=[];const n=t.definition;let r=0,i=n.length>r,s,o=!0;for(;i&&o;)s=n[r],o=Nl(s),e=e.concat(Vs(s)),r=r+1,i=n.length>r;return Mh(e)}function qA(t){const e=L(t.definition,n=>Vs(n));return Mh(It(e))}function GA(t){return[t.terminalType]}const iR="_~IN~_";class WA extends Sc{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,n,r){}walkProdRef(e,n,r){const i=VA(e.referencedRule,e.idx)+this.topProd.name,s=n.concat(r),o=new gt({definition:s}),a=Vs(o);this.follows[i]=a}}function zA(t){const e={};return j(t,n=>{const r=new WA(n).startWalking();wt(e,r)}),e}function VA(t,e){return t.name+e+iR}let hl={};const YA=new fv;function Cc(t){const e=t.toString();if(hl.hasOwnProperty(e))return hl[e];{const n=YA.pattern(e);return hl[e]=n,n}}function XA(){hl={}}const sR="Complement Sets are not supported for first char optimization",Il=`Unable to use "first char" lexer optimizations:
`;function JA(t,e=!1){try{const n=Cc(t);return Df(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===sR)e&&tR(`${Il}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let r="";e&&(r=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Of(`${Il}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r)}}return[]}function Df(t,e,n){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)Df(t.value[i],e,n);break;case"Alternative":const r=t.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}const o=s;switch(o.type){case"Character":Oo(o.value,e,n);break;case"Set":if(o.complement===!0)throw Error(sR);j(o.value,l=>{if(typeof l=="number")Oo(l,e,n);else{const c=l;if(n===!0)for(let u=c.from;u<=c.to;u++)Oo(u,e,n);else{for(let u=c.from;u<=c.to&&u<fs;u++)Oo(u,e,n);if(c.to>=fs){const u=c.from>=fs?c.from:fs,f=c.to,m=Wn(u),g=Wn(f);for(let d=m;d<=g;d++)e[d]=d}}}});break;case"Group":Df(o.value,e,n);break;default:throw Error("Non Exhaustive Match")}const a=o.quantifier!==void 0&&o.quantifier.atLeast===0;if(o.type==="Group"&&xf(o)===!1||o.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Ke(e)}function Oo(t,e,n){const r=Wn(t);e[r]=r,n===!0&&QA(t,e)}function QA(t,e){const n=String.fromCharCode(t),r=n.toUpperCase();if(r!==n){const i=Wn(r.charCodeAt(0));e[i]=i}else{const i=n.toLowerCase();if(i!==n){const s=Wn(i.charCodeAt(0));e[s]=s}}}function Gm(t,e){return Lr(t.value,n=>{if(typeof n=="number")return dt(e,n);{const r=n;return Lr(e,i=>r.from<=i&&i<=r.to)!==void 0}})}function xf(t){const e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ee(t.value)?jt(t.value,xf):xf(t.value):!1}class ZA extends dc{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){dt(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?Gm(e,this.targetCharCodes)===void 0&&(this.found=!0):Gm(e,this.targetCharCodes)!==void 0&&(this.found=!0)}}function Lh(t,e){if(e instanceof RegExp){const n=Cc(e),r=new ZA(t);return r.visit(n),r.found}else return Lr(e,n=>dt(t,n.charCodeAt(0)))!==void 0}const pr="PATTERN",ds="defaultMode",Do="modes";let oR=typeof new RegExp("(?:)").sticky=="boolean";function eE(t,e){e=xh(e,{useSticky:oR,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(p,h)=>h()});const n=e.tracer;n("initCharCodeToOptimizedIndexMap",()=>{kE()});let r;n("Reject Lexer.NA",()=>{r=bc(t,p=>p[pr]===ht.NA)});let i=!1,s;n("Transform Patterns",()=>{i=!1,s=L(r,p=>{const h=p[pr];if($n(h)){const $=h.source;return $.length===1&&$!=="^"&&$!=="$"&&$!=="."&&!h.ignoreCase?$:$.length===2&&$[0]==="\\"&&!dt(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],$[1])?$[1]:e.useSticky?zm(h):Wm(h)}else{if(Cn(h))return i=!0,{exec:h};if(typeof h=="object")return i=!0,h;if(typeof h=="string"){if(h.length===1)return h;{const $=h.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),F=new RegExp($);return e.useSticky?zm(F):Wm(F)}}else throw Error("non exhaustive match")}})});let o,a,l,c,u;n("misc mapping",()=>{o=L(r,p=>p.tokenTypeIdx),a=L(r,p=>{const h=p.GROUP;if(h!==ht.SKIPPED){if(mt(h))return h;if(kn(h))return!1;throw Error("non exhaustive match")}}),l=L(r,p=>{const h=p.LONGER_ALT;if(h)return ee(h)?L(h,F=>jm(r,F)):[jm(r,h)]}),c=L(r,p=>p.PUSH_MODE),u=L(r,p=>K(p,"POP_MODE"))});let f;n("Line Terminator Handling",()=>{const p=cR(e.lineTerminatorCharacters);f=L(r,h=>!1),e.positionTracking!=="onlyOffset"&&(f=L(r,h=>K(h,"LINE_BREAKS")?!!h.LINE_BREAKS:lR(h,p)===!1&&Lh(p,h.PATTERN)))});let m,g,d,_;n("Misc Mapping #2",()=>{m=L(r,aR),g=L(s,RE),d=lt(r,(p,h)=>{const $=h.GROUP;return mt($)&&$!==ht.SKIPPED&&(p[$]=[]),p},{}),_=L(s,(p,h)=>({pattern:s[h],longerAlt:l[h],canLineTerminator:f[h],isCustom:m[h],short:g[h],group:a[h],push:c[h],pop:u[h],tokenTypeIdx:o[h],tokenType:r[h]}))});let T=!0,v=[];return e.safeMode||n("First Char Optimization",()=>{v=lt(r,(p,h,$)=>{if(typeof h.PATTERN=="string"){const F=h.PATTERN.charCodeAt(0),W=Wn(F);gu(p,W,_[$])}else if(ee(h.START_CHARS_HINT)){let F;j(h.START_CHARS_HINT,W=>{const J=typeof W=="string"?W.charCodeAt(0):W,ke=Wn(J);F!==ke&&(F=ke,gu(p,ke,_[$]))})}else if($n(h.PATTERN))if(h.PATTERN.unicode)T=!1,e.ensureOptimizations&&Of(`${Il}	Unable to analyze < ${h.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{const F=JA(h.PATTERN,e.ensureOptimizations);ce(F)&&(T=!1),j(F,W=>{gu(p,W,_[$])})}else e.ensureOptimizations&&Of(`${Il}	TokenType: <${h.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),T=!1;return p},[])}),{emptyGroups:d,patternIdxToConfig:_,charCodeToPatternIdxToConfig:v,hasCustom:i,canBeOptimized:T}}function tE(t,e){let n=[];const r=rE(t);n=n.concat(r.errors);const i=iE(r.valid),s=i.valid;return n=n.concat(i.errors),n=n.concat(nE(s)),n=n.concat(fE(s)),n=n.concat(pE(s,e)),n=n.concat(hE(s)),n}function nE(t){let e=[];const n=bt(t,r=>$n(r[pr]));return e=e.concat(oE(n)),e=e.concat(cE(n)),e=e.concat(uE(n)),e=e.concat(dE(n)),e=e.concat(aE(n)),e}function rE(t){const e=bt(t,i=>!K(i,pr)),n=L(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Ce.MISSING_PATTERN,tokenTypes:[i]})),r=wc(t,e);return{errors:n,valid:r}}function iE(t){const e=bt(t,i=>{const s=i[pr];return!$n(s)&&!Cn(s)&&!K(s,"exec")&&!mt(s)}),n=L(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ce.INVALID_PATTERN,tokenTypes:[i]})),r=wc(t,e);return{errors:n,valid:r}}const sE=/[^\\][$]/;function oE(t){class e extends dc{constructor(){super(...arguments),this.found=!1}visitEndAnchor(s){this.found=!0}}const n=bt(t,i=>{const s=i.PATTERN;try{const o=Cc(s),a=new e;return a.visit(o),a.found}catch{return sE.test(s.source)}});return L(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ce.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function aE(t){const e=bt(t,r=>r.PATTERN.test(""));return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",type:Ce.EMPTY_MATCH_PATTERN,tokenTypes:[r]}))}const lE=/[^\\[][\^]|^\^/;function cE(t){class e extends dc{constructor(){super(...arguments),this.found=!1}visitStartAnchor(s){this.found=!0}}const n=bt(t,i=>{const s=i.PATTERN;try{const o=Cc(s),a=new e;return a.visit(o),a.found}catch{return lE.test(s.source)}});return L(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ce.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function uE(t){const e=bt(t,r=>{const i=r[pr];return i instanceof RegExp&&(i.multiline||i.global)});return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ce.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[r]}))}function dE(t){const e=[];let n=L(t,s=>lt(t,(o,a)=>(s.PATTERN.source===a.PATTERN.source&&!dt(e,a)&&a.PATTERN!==ht.NA&&(e.push(a),o.push(a)),o),[]));n=zs(n);const r=bt(n,s=>s.length>1);return L(r,s=>{const o=L(s,l=>l.name);return{message:`The same RegExp pattern ->${Gt(s).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,type:Ce.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}})}function fE(t){const e=bt(t,r=>{if(!K(r,"GROUP"))return!1;const i=r.GROUP;return i!==ht.SKIPPED&&i!==ht.NA&&!mt(i)});return L(e,r=>({message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ce.INVALID_GROUP_TYPE_FOUND,tokenTypes:[r]}))}function pE(t,e){const n=bt(t,i=>i.PUSH_MODE!==void 0&&!dt(e,i.PUSH_MODE));return L(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Ce.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function hE(t){const e=[],n=lt(t,(r,i,s)=>{const o=i.PATTERN;return o===ht.NA||(mt(o)?r.push({str:o,idx:s,tokenType:i}):$n(o)&&gE(o)&&r.push({str:o.source,idx:s,tokenType:i})),r},[]);return j(t,(r,i)=>{j(n,({str:s,idx:o,tokenType:a})=>{if(i<o&&mE(s,r.PATTERN)){const l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:Ce.UNREACHABLE_PATTERN,tokenTypes:[r,a]})}})}),e}function mE(t,e){if($n(e)){const n=e.exec(t);return n!==null&&n.index===0}else{if(Cn(e))return e(t,0,[],{});if(K(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function gE(t){return Lr([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>t.source.indexOf(n)!==-1)===void 0}function Wm(t){const e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function zm(t){const e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function yE(t,e,n){const r=[];return K(t,ds)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+ds+`> property in its definition
`,type:Ce.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),K(t,Do)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Do+`> property in its definition
`,type:Ce.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),K(t,Do)&&K(t,ds)&&!K(t.modes,t.defaultMode)&&r.push({message:`A MultiMode Lexer cannot be initialized with a ${ds}: <${t.defaultMode}>which does not exist
`,type:Ce.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),K(t,Do)&&j(t.modes,(i,s)=>{j(i,(o,a)=>{if(kn(o))r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${a}>
`,type:Ce.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(K(o,"LONGER_ALT")){const l=ee(o.LONGER_ALT)?o.LONGER_ALT:[o.LONGER_ALT];j(l,c=>{!kn(c)&&!dt(i,c)&&r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${o.name}> outside of mode <${s}>
`,type:Ce.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),r}function _E(t,e,n){const r=[];let i=!1;const s=zs(It(Ke(t.modes))),o=bc(s,l=>l[pr]===ht.NA),a=cR(n);return e&&j(o,l=>{const c=lR(l,a);if(c!==!1){const f={message:$E(l,c),type:c.issue,tokenType:l};r.push(f)}else K(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):Lh(a,l.PATTERN)&&(i=!0)}),e&&!i&&r.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ce.NO_LINE_BREAKS_FLAGS}),r}function vE(t){const e={},n=Mt(t);return j(n,r=>{const i=t[r];if(ee(i))e[r]=[];else throw Error("non exhaustive match")}),e}function aR(t){const e=t.PATTERN;if($n(e))return!1;if(Cn(e))return!0;if(K(e,"exec"))return!0;if(mt(e))return!1;throw Error("non exhaustive match")}function RE(t){return mt(t)&&t.length===1?t.charCodeAt(0):!1}const TE={test:function(t){const e=t.length;for(let n=this.lastIndex;n<e;n++){const r=t.charCodeAt(n);if(r===10)return this.lastIndex=n+1,!0;if(r===13)return t.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},lastIndex:0};function lR(t,e){if(K(t,"LINE_BREAKS"))return!1;if($n(t.PATTERN)){try{Lh(e,t.PATTERN)}catch(n){return{issue:Ce.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(mt(t.PATTERN))return!1;if(aR(t))return{issue:Ce.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function $E(t,e){if(e.issue===Ce.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ce.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function cR(t){return L(t,n=>mt(n)?n.charCodeAt(0):n)}function gu(t,e,n){t[e]===void 0?t[e]=[n]:t[e].push(n)}const fs=256;let ml=[];function Wn(t){return t<fs?t:ml[t]}function kE(){if(ce(ml)){ml=new Array(65536);for(let t=0;t<65536;t++)ml[t]=t>255?255+~~(t/255):t}}function Ys(t,e){const n=t.tokenTypeIdx;return n===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[n]===!0}function Ol(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}let Vm=1;const uR={};function Xs(t){const e=wE(t);bE(e),CE(e),SE(e),j(e,n=>{n.isParent=n.categoryMatches.length>0})}function wE(t){let e=Ze(t),n=t,r=!0;for(;r;){n=zs(It(L(n,s=>s.CATEGORIES)));const i=wc(n,e);e=e.concat(i),ce(i)?r=!1:n=i}return e}function bE(t){j(t,e=>{fR(e)||(uR[Vm]=e,e.tokenTypeIdx=Vm++),Ym(e)&&!ee(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),Ym(e)||(e.CATEGORIES=[]),AE(e)||(e.categoryMatches=[]),EE(e)||(e.categoryMatchesMap={})})}function SE(t){j(t,e=>{e.categoryMatches=[],j(e.categoryMatchesMap,(n,r)=>{e.categoryMatches.push(uR[r].tokenTypeIdx)})})}function CE(t){j(t,e=>{dR([],e)})}function dR(t,e){j(t,n=>{e.categoryMatchesMap[n.tokenTypeIdx]=!0}),j(e.CATEGORIES,n=>{const r=t.concat(e);dt(r,n)||dR(r,n)})}function fR(t){return K(t,"tokenTypeIdx")}function Ym(t){return K(t,"CATEGORIES")}function AE(t){return K(t,"categoryMatches")}function EE(t){return K(t,"categoryMatchesMap")}function PE(t){return K(t,"tokenTypeIdx")}const Mf={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,n,r,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`}};var Ce;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ce||(Ce={}));const ps={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Mf,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(ps);class ht{constructor(e,n=ps){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,s)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;const o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${i}>`);const{time:a,value:l}=nR(s),c=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&c(`${o}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return s()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=wt({},ps,n);const r=this.config.traceInitPerf;r===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof r=="number"&&(this.traceInitMaxIdent=r,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,s=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===ps.lineTerminatorsPattern)this.config.lineTerminatorsPattern=TE;else if(this.config.lineTerminatorCharacters===ps.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ee(e)?i={modes:{defaultMode:Ze(e)},defaultMode:ds}:(s=!1,i=Ze(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(yE(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(_E(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},j(i.modes,(a,l)=>{i.modes[l]=bc(a,c=>kn(c))});const o=Mt(i.modes);if(j(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(tE(a,o))}),ce(this.lexerDefinitionErrors)){Xs(a);let c;this.TRACE_INIT("analyzeTokenTypes",()=>{c=eE(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=c.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=c.charCodeToPatternIdxToConfig,this.emptyGroups=wt({},this.emptyGroups,c.emptyGroups),this.hasCustom=c.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=c.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ce(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){const l=L(this.lexerDefinitionErrors,c=>c.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}j(this.lexerDefinitionWarning,a=>{tR(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(oR?(this.chopInput=dr,this.match=this.matchWithTest):(this.updateLastIndex=je,this.match=this.matchWithExec),s&&(this.handleModes=je),this.trackStartLines===!1&&(this.computeNewColumn=dr),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=je),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{const a=lt(this.canModeBeOptimized,(l,c,u)=>(c===!1&&l.push(u),l),[]);if(n.ensureOptimizations&&!ce(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{XA()}),this.TRACE_INIT("toFastProperties",()=>{rR(this)})})}tokenize(e,n=this.defaultMode){if(!ce(this.lexerDefinitionErrors)){const i=L(this.lexerDefinitionErrors,s=>s.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,n)}tokenizeInternal(e,n){let r,i,s,o,a,l,c,u,f,m,g,d,_,T,v;const p=e,h=p.length;let $=0,F=0;const W=this.hasCustom?0:Math.floor(e.length/10),J=new Array(W),ke=[];let Ae=this.trackStartLines?1:void 0,Ee=this.trackStartLines?1:void 0;const P=vE(this.emptyGroups),A=this.trackStartLines,k=this.config.lineTerminatorsPattern;let C=0,N=[],E=[];const D=[],Ue=[];Object.freeze(Ue);let x;function b(){return N}function te(ye){const He=Wn(ye),We=E[He];return We===void 0?Ue:We}const Vt=ye=>{if(D.length===1&&ye.tokenType.PUSH_MODE===void 0){const He=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ye);ke.push({offset:ye.startOffset,line:ye.startLine,column:ye.startColumn,length:ye.image.length,message:He})}else{D.pop();const He=Mr(D);N=this.patternIdxToConfig[He],E=this.charCodeToPatternIdxToConfig[He],C=N.length;const We=this.canModeBeOptimized[He]&&this.config.safeMode===!1;E&&We?x=te:x=b}};function Yt(ye){D.push(ye),E=this.charCodeToPatternIdxToConfig[ye],N=this.patternIdxToConfig[ye],C=N.length,C=N.length;const He=this.canModeBeOptimized[ye]&&this.config.safeMode===!1;E&&He?x=te:x=b}Yt.call(this,n);let Me;const Xt=this.config.recoveryEnabled;for(;$<h;){l=null;const ye=p.charCodeAt($),He=x(ye),We=He.length;for(r=0;r<We;r++){Me=He[r];const _e=Me.pattern;c=null;const ze=Me.short;if(ze!==!1?ye===ze&&(l=_e):Me.isCustom===!0?(v=_e.exec(p,$,J,P),v!==null?(l=v[0],v.payload!==void 0&&(c=v.payload)):l=null):(this.updateLastIndex(_e,$),l=this.match(_e,e,$)),l!==null){if(a=Me.longerAlt,a!==void 0){const Pe=a.length;for(s=0;s<Pe;s++){const V=N[a[s]],qe=V.pattern;if(u=null,V.isCustom===!0?(v=qe.exec(p,$,J,P),v!==null?(o=v[0],v.payload!==void 0&&(u=v.payload)):o=null):(this.updateLastIndex(qe,$),o=this.match(qe,e,$)),o&&o.length>l.length){l=o,c=u,Me=V;break}}}break}}if(l!==null){if(f=l.length,m=Me.group,m!==void 0&&(g=Me.tokenTypeIdx,d=this.createTokenInstance(l,$,g,Me.tokenType,Ae,Ee,f),this.handlePayload(d,c),m===!1?F=this.addToken(J,F,d):P[m].push(d)),e=this.chopInput(e,f),$=$+f,Ee=this.computeNewColumn(Ee,f),A===!0&&Me.canLineTerminator===!0){let _e=0,ze,Pe;k.lastIndex=0;do ze=k.test(l),ze===!0&&(Pe=k.lastIndex-1,_e++);while(ze===!0);_e!==0&&(Ae=Ae+_e,Ee=f-Pe,this.updateTokenEndLineColumnLocation(d,m,Pe,_e,Ae,Ee,f))}this.handleModes(Me,Vt,Yt,d)}else{const _e=$,ze=Ae,Pe=Ee;let V=Xt===!1;for(;V===!1&&$<h;)for(e=this.chopInput(e,1),$++,i=0;i<C;i++){const qe=N[i],ue=qe.pattern,ft=qe.short;if(ft!==!1?p.charCodeAt($)===ft&&(V=!0):qe.isCustom===!0?V=ue.exec(p,$,J,P)!==null:(this.updateLastIndex(ue,$),V=ue.exec(e)!==null),V===!0)break}if(_=$-_e,Ee=this.computeNewColumn(Ee,_),T=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(p,_e,_,ze,Pe),ke.push({offset:_e,line:ze,column:Pe,length:_,message:T}),Xt===!1)break}}return this.hasCustom||(J.length=F),{tokens:J,groups:P,errors:ke}}handleModes(e,n,r,i){if(e.pop===!0){const s=e.push;n(i),s!==void 0&&r.call(this,s)}else e.push!==void 0&&r.call(this,e.push)}chopInput(e,n){return e.substring(n)}updateLastIndex(e,n){e.lastIndex=n}updateTokenEndLineColumnLocation(e,n,r,i,s,o,a){let l,c;n!==void 0&&(l=r===a-1,c=l?-1:0,i===1&&l===!0||(e.endLine=s+c,e.endColumn=o-1+-c))}computeNewColumn(e,n){return e+n}createOffsetOnlyToken(e,n,r,i){return{image:e,startOffset:n,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,n,r,i,s,o){return{image:e,startOffset:n,startLine:s,startColumn:o,tokenTypeIdx:r,tokenType:i}}createFullToken(e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:n+a-1,startLine:s,endLine:s,startColumn:o,endColumn:o+a-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,n,r){return e.push(r),n}addTokenUsingMemberAccess(e,n,r){return e[n]=r,n++,n}handlePayloadNoCustom(e,n){}handlePayloadWithCustom(e,n){n!==null&&(e.payload=n)}matchWithTest(e,n,r){return e.test(n)===!0?n.substring(r,e.lastIndex):null}matchWithExec(e,n){const r=e.exec(n);return r!==null?r[0]:null}}ht.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";ht.NA=/NOT_APPLICABLE/;function Ir(t){return pR(t)?t.LABEL:t.name}function pR(t){return mt(t.LABEL)&&t.LABEL!==""}const NE="parent",Xm="categories",Jm="label",Qm="group",Zm="push_mode",eg="pop_mode",tg="longer_alt",ng="line_breaks",rg="start_chars_hint";function hR(t){return IE(t)}function IE(t){const e=t.pattern,n={};if(n.name=t.name,kn(e)||(n.PATTERN=e),K(t,NE))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return K(t,Xm)&&(n.CATEGORIES=t[Xm]),Xs([n]),K(t,Jm)&&(n.LABEL=t[Jm]),K(t,Qm)&&(n.GROUP=t[Qm]),K(t,eg)&&(n.POP_MODE=t[eg]),K(t,Zm)&&(n.PUSH_MODE=t[Zm]),K(t,tg)&&(n.LONGER_ALT=t[tg]),K(t,ng)&&(n.LINE_BREAKS=t[ng]),K(t,rg)&&(n.START_CHARS_HINT=t[rg]),n}const zn=hR({name:"EOF",pattern:ht.NA});Xs([zn]);function Fh(t,e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:r,startLine:i,endLine:s,startColumn:o,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function mR(t,e){return Ys(t,e)}const Pr={buildMismatchTokenMessage({expected:t,actual:e,previous:n,ruleName:r}){return`Expecting ${pR(t)?`--> ${Ir(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:n,customUserDescription:r,ruleName:i}){const s="Expecting: ",a=`
but found: '`+Gt(e).image+"'";if(r)return s+r+a;{const l=lt(t,(m,g)=>m.concat(g),[]),c=L(l,m=>`[${L(m,g=>Ir(g)).join(", ")}]`),f=`one of these possible Token sequences:
${L(c,(m,g)=>`  ${g+1}. ${m}`).join(`
`)}`;return s+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:n,ruleName:r}){const i="Expecting: ",o=`
but found: '`+Gt(e).image+"'";if(n)return i+n+o;{const l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${L(t,c=>`[${L(c,u=>Ir(u)).join(",")}]`).join(" ,")}>`;return i+l+o}}};Object.freeze(Pr);const OE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},sr={buildDuplicateFoundError(t,e){function n(u){return u instanceof ge?u.terminalType.name:u instanceof ct?u.nonTerminalName:""}const r=t.name,i=Gt(e),s=i.idx,o=Qt(i),a=n(i),l=s>0;let c=`->${o}${l?s:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){const e=L(t.prefixPath,i=>Ir(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){const e=L(t.prefixPath,i=>Ir(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r},buildEmptyRepetitionError(t){let e=Qt(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){const e=t.topLevelRule.name,n=L(t.leftRecursionPath,s=>s.name),r=`${e} --> ${n.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof ti?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function DE(t,e){const n=new xE(t,e);return n.resolveRefs(),n.errors}class xE extends ni{constructor(e,n){super(),this.nameToTopRule=e,this.errMsgProvider=n,this.errors=[]}resolveRefs(){j(Ke(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){const n=this.nameToTopRule[e.nonTerminalName];if(n)e.referencedRule=n;else{const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:ut.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class ME extends Sc{constructor(e,n){super(),this.topProd=e,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Ze(this.path.ruleStack).reverse(),this.occurrenceStack=Ze(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,n=[]){this.found||super.walk(e,n)}walkProdRef(e,n,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){const i=n.concat(r);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ce(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}}class LE extends ME{constructor(e,n){super(e,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,n,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){const i=n.concat(r),s=new gt({definition:i});this.possibleTokTypes=Vs(s),this.found=!0}}}class Ac extends Sc{constructor(e,n){super(),this.topRule=e,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}}class FE extends Ac{walkMany(e,n,r){if(e.idx===this.occurrence){const i=Gt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,n,r)}}class ig extends Ac{walkManySep(e,n,r){if(e.idx===this.occurrence){const i=Gt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,n,r)}}class UE extends Ac{walkAtLeastOne(e,n,r){if(e.idx===this.occurrence){const i=Gt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,n,r)}}class sg extends Ac{walkAtLeastOneSep(e,n,r){if(e.idx===this.occurrence){const i=Gt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,n,r)}}function Lf(t,e,n=[]){n=Ze(n);let r=[],i=0;function s(a){return a.concat(Ve(t,i+1))}function o(a){const l=Lf(s(a),e,n);return r.concat(l)}for(;n.length<e&&i<t.length;){const a=t[i];if(a instanceof gt)return o(a.definition);if(a instanceof ct)return o(a.definition);if(a instanceof Qe)r=o(a.definition);else if(a instanceof St){const l=a.definition.concat([new Se({definition:a.definition})]);return o(l)}else if(a instanceof Ct){const l=[new gt({definition:a.definition}),new Se({definition:[new ge({terminalType:a.separator})].concat(a.definition)})];return o(l)}else if(a instanceof yt){const l=a.definition.concat([new Se({definition:[new ge({terminalType:a.separator})].concat(a.definition)})]);r=o(l)}else if(a instanceof Se){const l=a.definition.concat([new Se({definition:a.definition})]);r=o(l)}else{if(a instanceof _t)return j(a.definition,l=>{ce(l.definition)===!1&&(r=o(l.definition))}),r;if(a instanceof ge)n.push(a.terminalType);else throw Error("non exhaustive match")}i++}return r.push({partialPath:n,suffixDef:Ve(t,i)}),r}function gR(t,e,n,r){const i="EXIT_NONE_TERMINAL",s=[i],o="EXIT_ALTERNATIVE";let a=!1;const l=e.length,c=l-r-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ce(f);){const m=f.pop();if(m===o){a&&Mr(f).idx<=c&&f.pop();continue}const g=m.def,d=m.idx,_=m.ruleStack,T=m.occurrenceStack;if(ce(g))continue;const v=g[0];if(v===i){const p={idx:d,def:Ve(g),ruleStack:bs(_),occurrenceStack:bs(T)};f.push(p)}else if(v instanceof ge)if(d<l-1){const p=d+1,h=e[p];if(n(h,v.terminalType)){const $={idx:p,def:Ve(g),ruleStack:_,occurrenceStack:T};f.push($)}}else if(d===l-1)u.push({nextTokenType:v.terminalType,nextTokenOccurrence:v.idx,ruleStack:_,occurrenceStack:T}),a=!0;else throw Error("non exhaustive match");else if(v instanceof ct){const p=Ze(_);p.push(v.nonTerminalName);const h=Ze(T);h.push(v.idx);const $={idx:d,def:v.definition.concat(s,Ve(g)),ruleStack:p,occurrenceStack:h};f.push($)}else if(v instanceof Qe){const p={idx:d,def:Ve(g),ruleStack:_,occurrenceStack:T};f.push(p),f.push(o);const h={idx:d,def:v.definition.concat(Ve(g)),ruleStack:_,occurrenceStack:T};f.push(h)}else if(v instanceof St){const p=new Se({definition:v.definition,idx:v.idx}),h=v.definition.concat([p],Ve(g)),$={idx:d,def:h,ruleStack:_,occurrenceStack:T};f.push($)}else if(v instanceof Ct){const p=new ge({terminalType:v.separator}),h=new Se({definition:[p].concat(v.definition),idx:v.idx}),$=v.definition.concat([h],Ve(g)),F={idx:d,def:$,ruleStack:_,occurrenceStack:T};f.push(F)}else if(v instanceof yt){const p={idx:d,def:Ve(g),ruleStack:_,occurrenceStack:T};f.push(p),f.push(o);const h=new ge({terminalType:v.separator}),$=new Se({definition:[h].concat(v.definition),idx:v.idx}),F=v.definition.concat([$],Ve(g)),W={idx:d,def:F,ruleStack:_,occurrenceStack:T};f.push(W)}else if(v instanceof Se){const p={idx:d,def:Ve(g),ruleStack:_,occurrenceStack:T};f.push(p),f.push(o);const h=new Se({definition:v.definition,idx:v.idx}),$=v.definition.concat([h],Ve(g)),F={idx:d,def:$,ruleStack:_,occurrenceStack:T};f.push(F)}else if(v instanceof _t)for(let p=v.definition.length-1;p>=0;p--){const h=v.definition[p],$={idx:d,def:h.definition.concat(Ve(g)),ruleStack:_,occurrenceStack:T};f.push($),f.push(o)}else if(v instanceof gt)f.push({idx:d,def:v.definition.concat(Ve(g)),ruleStack:_,occurrenceStack:T});else if(v instanceof ti)f.push(HE(v,d,_,T));else throw Error("non exhaustive match")}return u}function HE(t,e,n,r){const i=Ze(n);i.push(t.name);const s=Ze(r);return s.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:s}}var Re;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Re||(Re={}));function Uh(t){if(t instanceof Qe||t==="Option")return Re.OPTION;if(t instanceof Se||t==="Repetition")return Re.REPETITION;if(t instanceof St||t==="RepetitionMandatory")return Re.REPETITION_MANDATORY;if(t instanceof Ct||t==="RepetitionMandatoryWithSeparator")return Re.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof yt||t==="RepetitionWithSeparator")return Re.REPETITION_WITH_SEPARATOR;if(t instanceof _t||t==="Alternation")return Re.ALTERNATION;throw Error("non exhaustive match")}function og(t){const{occurrence:e,rule:n,prodType:r,maxLookahead:i}=t,s=Uh(r);return s===Re.ALTERNATION?Ec(e,n,i):Pc(e,n,s,i)}function BE(t,e,n,r,i,s){const o=Ec(t,e,n),a=vR(o)?Ol:Ys;return s(o,r,a,i)}function jE(t,e,n,r,i,s){const o=Pc(t,e,i,n),a=vR(o)?Ol:Ys;return s(o[0],a,r)}function KE(t,e,n,r){const i=t.length,s=jt(t,o=>jt(o,a=>a.length===1));if(e)return function(o){const a=L(o,l=>l.GATE);for(let l=0;l<i;l++){const c=t[l],u=c.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let m=0;m<u;m++){const g=c[m],d=g.length;for(let _=0;_<d;_++){const T=this.LA(_+1);if(n(T,g[_])===!1)continue e}return l}}};if(s&&!r){const o=L(t,l=>It(l)),a=lt(o,(l,c,u)=>(j(c,f=>{K(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=u),j(f.categoryMatches,m=>{K(l,m)||(l[m]=u)})}),l),{});return function(){const l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let o=0;o<i;o++){const a=t[o],l=a.length;e:for(let c=0;c<l;c++){const u=a[c],f=u.length;for(let m=0;m<f;m++){const g=this.LA(m+1);if(n(g,u[m])===!1)continue e}return o}}}}function qE(t,e,n){const r=jt(t,s=>s.length===1),i=t.length;if(r&&!n){const s=It(t);if(s.length===1&&ce(s[0].categoryMatches)){const a=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{const o=lt(s,(a,l,c)=>(a[l.tokenTypeIdx]=!0,j(l.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){const a=this.LA(1);return o[a.tokenTypeIdx]===!0}}}else return function(){e:for(let s=0;s<i;s++){const o=t[s],a=o.length;for(let l=0;l<a;l++){const c=this.LA(l+1);if(e(c,o[l])===!1)continue e}return!0}return!1}}class GE extends Sc{constructor(e,n,r){super(),this.topProd=e,this.targetOccurrence=n,this.targetProdType=r}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,n,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=r.concat(i),!0):!1}walkOption(e,n,r){this.checkIsTarget(e,Re.OPTION,n,r)||super.walkOption(e,n,r)}walkAtLeastOne(e,n,r){this.checkIsTarget(e,Re.REPETITION_MANDATORY,n,r)||super.walkOption(e,n,r)}walkAtLeastOneSep(e,n,r){this.checkIsTarget(e,Re.REPETITION_MANDATORY_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}walkMany(e,n,r){this.checkIsTarget(e,Re.REPETITION,n,r)||super.walkOption(e,n,r)}walkManySep(e,n,r){this.checkIsTarget(e,Re.REPETITION_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}}class yR extends ni{constructor(e,n,r){super(),this.targetOccurrence=e,this.targetProdType=n,this.targetRef=r,this.result=[]}checkIsTarget(e,n){e.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,Re.OPTION)}visitRepetition(e){this.checkIsTarget(e,Re.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,Re.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,Re.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,Re.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,Re.ALTERNATION)}}function ag(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=[];return e}function yu(t){let e=[""];for(let n=0;n<t.length;n++){const r=t[n],i=[];for(let s=0;s<e.length;s++){const o=e[s];i.push(o+"_"+r.tokenTypeIdx);for(let a=0;a<r.categoryMatches.length;a++){const l="_"+r.categoryMatches[a];i.push(o+l)}}e=i}return e}function WE(t,e,n){for(let r=0;r<t.length;r++){if(r===n)continue;const i=t[r];for(let s=0;s<e.length;s++){const o=e[s];if(i[o]===!0)return!1}}return!0}function _R(t,e){const n=L(t,o=>Lf([o],1)),r=ag(n.length),i=L(n,o=>{const a={};return j(o,l=>{const c=yu(l.partialPath);j(c,u=>{a[u]=!0})}),a});let s=n;for(let o=1;o<=e;o++){const a=s;s=ag(a.length);for(let l=0;l<a.length;l++){const c=a[l];for(let u=0;u<c.length;u++){const f=c[u].partialPath,m=c[u].suffixDef,g=yu(f);if(WE(i,g,l)||ce(m)||f.length===e){const _=r[l];if(Ff(_,f)===!1){_.push(f);for(let T=0;T<g.length;T++){const v=g[T];i[l][v]=!0}}}else{const _=Lf(m,o+1,f);s[l]=s[l].concat(_),j(_,T=>{const v=yu(T.partialPath);j(v,p=>{i[l][p]=!0})})}}}}return r}function Ec(t,e,n,r){const i=new yR(t,Re.ALTERNATION,r);return e.accept(i),_R(i.result,n)}function Pc(t,e,n,r){const i=new yR(t,n);e.accept(i);const s=i.result,a=new GE(e,t,n).startWalking(),l=new gt({definition:s}),c=new gt({definition:a});return _R([l,c],r)}function Ff(t,e){e:for(let n=0;n<t.length;n++){const r=t[n];if(r.length===e.length){for(let i=0;i<r.length;i++){const s=e[i],o=r[i];if((s===o||o.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function zE(t,e){return t.length<e.length&&jt(t,(n,r)=>{const i=e[r];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}function vR(t){return jt(t,e=>jt(e,n=>jt(n,r=>ce(r.categoryMatches))))}function VE(t){const e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return L(e,n=>Object.assign({type:ut.CUSTOM_LOOKAHEAD_VALIDATION},n))}function YE(t,e,n,r){const i=kt(t,l=>XE(l,n)),s=lP(t,e,n),o=kt(t,l=>iP(l,n)),a=kt(t,l=>ZE(l,t,r,n));return i.concat(s,o,a)}function XE(t,e){const n=new QE;t.accept(n);const r=n.allProductions,i=fA(r,JE),s=zt(i,a=>a.length>1);return L(Ke(s),a=>{const l=Gt(a),c=e.buildDuplicateFoundError(t,a),u=Qt(l),f={message:c,type:ut.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:l.idx},m=RR(l);return m&&(f.parameter=m),f})}function JE(t){return`${Qt(t)}_#_${t.idx}_#_${RR(t)}`}function RR(t){return t instanceof ge?t.terminalType.name:t instanceof ct?t.nonTerminalName:""}class QE extends ni{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function ZE(t,e,n,r){const i=[];if(lt(e,(o,a)=>a.name===t.name?o+1:o,0)>1){const o=r.buildDuplicateRuleNameError({topLevelRule:t,grammarName:n});i.push({message:o,type:ut.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function eP(t,e,n){const r=[];let i;return dt(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,r.push({message:i,type:ut.INVALID_RULE_OVERRIDE,ruleName:t})),r}function TR(t,e,n,r=[]){const i=[],s=gl(e.definition);if(ce(s))return[];{const o=t.name;dt(s,t)&&i.push({message:n.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:r}),type:ut.LEFT_RECURSION,ruleName:o});const l=wc(s,r.concat([t])),c=kt(l,u=>{const f=Ze(r);return f.push(u),TR(t,u,n,f)});return i.concat(c)}}function gl(t){let e=[];if(ce(t))return e;const n=Gt(t);if(n instanceof ct)e.push(n.referencedRule);else if(n instanceof gt||n instanceof Qe||n instanceof St||n instanceof Ct||n instanceof yt||n instanceof Se)e=e.concat(gl(n.definition));else if(n instanceof _t)e=It(L(n.definition,s=>gl(s.definition)));else if(!(n instanceof ge))throw Error("non exhaustive match");const r=Nl(n),i=t.length>1;if(r&&i){const s=Ve(t);return e.concat(gl(s))}else return e}class Hh extends ni{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}}function tP(t,e){const n=new Hh;t.accept(n);const r=n.alternations;return kt(r,s=>{const o=bs(s.definition);return kt(o,(a,l)=>{const c=gR([a],[],Ys,1);return ce(c)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:s,emptyChoiceIdx:l}),type:ut.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:s.idx,alternative:l+1}]:[]})})}function nP(t,e,n){const r=new Hh;t.accept(r);let i=r.alternations;return i=bc(i,o=>o.ignoreAmbiguities===!0),kt(i,o=>{const a=o.idx,l=o.maxLookahead||e,c=Ec(a,t,l,o),u=oP(c,o,t,n),f=aP(c,o,t,n);return u.concat(f)})}class rP extends ni{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function iP(t,e){const n=new Hh;t.accept(n);const r=n.alternations;return kt(r,s=>s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:s}),type:ut.TOO_MANY_ALTS,ruleName:t.name,occurrence:s.idx}]:[])}function sP(t,e,n){const r=[];return j(t,i=>{const s=new rP;i.accept(s);const o=s.allProductions;j(o,a=>{const l=Uh(a),c=a.maxLookahead||e,u=a.idx,m=Pc(u,i,l,c)[0];if(ce(It(m))){const g=n.buildEmptyRepetitionError({topLevelRule:i,repetition:a});r.push({message:g,type:ut.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),r}function oP(t,e,n,r){const i=[],s=lt(t,(a,l,c)=>(e.definition[c].ignoreAmbiguities===!0||j(l,u=>{const f=[c];j(t,(m,g)=>{c!==g&&Ff(m,u)&&e.definition[g].ignoreAmbiguities!==!0&&f.push(g)}),f.length>1&&!Ff(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return L(s,a=>{const l=L(a.alts,u=>u+1);return{message:r.buildAlternationAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:ut.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:e.idx,alternatives:a.alts}})}function aP(t,e,n,r){const i=lt(t,(o,a,l)=>{const c=L(a,u=>({idx:l,path:u}));return o.concat(c)},[]);return zs(kt(i,o=>{if(e.definition[o.idx].ignoreAmbiguities===!0)return[];const l=o.idx,c=o.path,u=bt(i,m=>e.definition[m.idx].ignoreAmbiguities!==!0&&m.idx<l&&zE(m.path,c));return L(u,m=>{const g=[m.idx+1,l+1],d=e.idx===0?"":e.idx;return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:g,prefixPath:m.path}),type:ut.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:d,alternatives:g}})}))}function lP(t,e,n){const r=[],i=L(e,s=>s.name);return j(t,s=>{const o=s.name;if(dt(i,o)){const a=n.buildNamespaceConflictError(s);r.push({message:a,type:ut.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:o})}}),r}function cP(t){const e=xh(t,{errMsgProvider:OE}),n={};return j(t.rules,r=>{n[r.name]=r}),DE(n,e.errMsgProvider)}function uP(t){return t=xh(t,{errMsgProvider:sr}),YE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}const $R="MismatchedTokenException",kR="NoViableAltException",wR="EarlyExitException",bR="NotAllInputParsedException",SR=[$R,kR,wR,bR];Object.freeze(SR);function Dl(t){return dt(SR,t.name)}class Nc extends Error{constructor(e,n){super(e),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class CR extends Nc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=$R}}class dP extends Nc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=kR}}class fP extends Nc{constructor(e,n){super(e,n),this.name=bR}}class pP extends Nc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=wR}}const _u={},AR="InRuleRecoveryException";class hP extends Error{constructor(e){super(e),this.name=AR}}class mP{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=K(e,"recoveryEnabled")?e.recoveryEnabled:wn.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=gP)}getTokenToInsert(e){const n=Fh(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,n,r,i){const s=this.findReSyncTokenType(),o=this.exportLexerState(),a=[];let l=!1;const c=this.LA(1);let u=this.LA(1);const f=()=>{const m=this.LA(0),g=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:c,previous:m,ruleName:this.getCurrRuleFullName()}),d=new CR(g,c,this.LA(0));d.resyncedTokens=bs(a),this.SAVE_ERROR(d)};for(;!l;)if(this.tokenMatcher(u,i)){f();return}else if(r.call(this)){f(),e.apply(this,n);return}else this.tokenMatcher(u,s)?l=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(o)}shouldInRepetitionRecoveryBeTried(e,n,r){return!(r===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,n)))}getFollowsForInRuleRecovery(e,n){const r=this.getCurrentGrammarPath(e,n);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,n){if(this.canRecoverWithSingleTokenInsertion(e,n))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){const r=this.SKIP_TOKEN();return this.consumeToken(),r}throw new hP("sad sad panda")}canPerformInRuleRecovery(e,n){return this.canRecoverWithSingleTokenInsertion(e,n)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,n){if(!this.canTokenTypeBeInsertedInRecovery(e)||ce(n))return!1;const r=this.LA(1);return Lr(n,s=>this.tokenMatcher(r,s))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){const n=this.getCurrFollowKey(),r=this.getFollowSetFromFollowKey(n);return dt(r,e)}findReSyncTokenType(){const e=this.flattenFollowSet();let n=this.LA(1),r=2;for(;;){const i=Lr(e,s=>mR(n,s));if(i!==void 0)return i;n=this.LA(r),r++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return _u;const e=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),r=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(r)}}buildFullFollowKeyStack(){const e=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return L(e,(r,i)=>i===0?_u:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){const e=L(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return It(e)}getFollowSetFromFollowKey(e){if(e===_u)return[zn];const n=e.ruleName+e.idxInCallingRule+iR+e.inRule;return this.resyncFollows[n]}addToResyncTokens(e,n){return this.tokenMatcher(e,zn)||n.push(e),n}reSyncTo(e){const n=[];let r=this.LA(1);for(;this.tokenMatcher(r,e)===!1;)r=this.SKIP_TOKEN(),this.addToResyncTokens(r,n);return bs(n)}attemptInRepetitionRecovery(e,n,r,i,s,o,a){}getCurrentGrammarPath(e,n){const r=this.getHumanReadableRuleStack(),i=Ze(this.RULE_OCCURRENCE_STACK);return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:n}}getHumanReadableRuleStack(){return L(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}}function gP(t,e,n,r,i,s,o){const a=this.getKeyForAutomaticLookahead(r,i);let l=this.firstAfterRepMap[a];if(l===void 0){const m=this.getCurrRuleFullName(),g=this.getGAstProductions()[m];l=new s(g,i).startWalking(),this.firstAfterRepMap[a]=l}let c=l.token,u=l.occurrence;const f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&c===void 0&&(c=zn,u=1),!(c===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(c,u,o)&&this.tryInRepetitionRecovery(t,e,n,c)}const yP=4,Zn=8,ER=1<<Zn,PR=2<<Zn,Uf=3<<Zn,Hf=4<<Zn,Bf=5<<Zn,yl=6<<Zn;function vu(t,e,n){return n|e|t}class Bh{constructor(e){var n;this.maxLookahead=(n=e==null?void 0:e.maxLookahead)!==null&&n!==void 0?n:wn.maxLookahead}validate(e){const n=this.validateNoLeftRecursion(e.rules);if(ce(n)){const r=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...n,...r,...i,...s]}return n}validateNoLeftRecursion(e){return kt(e,n=>TR(n,n,sr))}validateEmptyOrAlternatives(e){return kt(e,n=>tP(n,sr))}validateAmbiguousAlternationAlternatives(e,n){return kt(e,r=>nP(r,n,sr))}validateSomeNonEmptyLookaheadPath(e,n){return sP(e,n,sr)}buildLookaheadForAlternation(e){return BE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,KE)}buildLookaheadForOptional(e){return jE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Uh(e.prodType),qE)}}class _P{initLooksAhead(e){this.dynamicTokensEnabled=K(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:wn.dynamicTokensEnabled,this.maxLookahead=K(e,"maxLookahead")?e.maxLookahead:wn.maxLookahead,this.lookaheadStrategy=K(e,"lookaheadStrategy")?e.lookaheadStrategy:new Bh({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){j(e,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{const{alternation:r,repetition:i,option:s,repetitionMandatory:o,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=RP(n);j(r,c=>{const u=c.idx===0?"":c.idx;this.TRACE_INIT(`${Qt(c)}${u}`,()=>{const f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:c.idx,rule:n,maxLookahead:c.maxLookahead||this.maxLookahead,hasPredicates:c.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),m=vu(this.fullRuleNameToShort[n.name],ER,c.idx);this.setLaFuncCache(m,f)})}),j(i,c=>{this.computeLookaheadFunc(n,c.idx,Uf,"Repetition",c.maxLookahead,Qt(c))}),j(s,c=>{this.computeLookaheadFunc(n,c.idx,PR,"Option",c.maxLookahead,Qt(c))}),j(o,c=>{this.computeLookaheadFunc(n,c.idx,Hf,"RepetitionMandatory",c.maxLookahead,Qt(c))}),j(a,c=>{this.computeLookaheadFunc(n,c.idx,yl,"RepetitionMandatoryWithSeparator",c.maxLookahead,Qt(c))}),j(l,c=>{this.computeLookaheadFunc(n,c.idx,Bf,"RepetitionWithSeparator",c.maxLookahead,Qt(c))})})})}computeLookaheadFunc(e,n,r,i,s,o){this.TRACE_INIT(`${o}${n===0?"":n}`,()=>{const a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=vu(this.fullRuleNameToShort[e.name],r,n);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,n){const r=this.getLastExplicitRuleShortName();return vu(r,e,n)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,n){this.lookAheadFuncsCache.set(e,n)}}class vP extends ni{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const xo=new vP;function RP(t){xo.reset(),t.accept(xo);const e=xo.dslMethods;return xo.reset(),e}function lg(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function cg(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function TP(t,e,n){t.children[n]===void 0?t.children[n]=[e]:t.children[n].push(e)}function $P(t,e,n){t.children[e]===void 0?t.children[e]=[n]:t.children[e].push(n)}const kP="name";function NR(t,e){Object.defineProperty(t,kP,{enumerable:!1,configurable:!0,writable:!1,value:e})}function wP(t,e){const n=Mt(t),r=n.length;for(let i=0;i<r;i++){const s=n[i],o=t[s],a=o.length;for(let l=0;l<a;l++){const c=o[l];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}}function bP(t,e){const n=function(){};NR(n,t+"BaseSemantics");const r={visit:function(i,s){if(ee(i)&&(i=i[0]),!kn(i))return this[i.name](i.children,s)},validateVisitor:function(){const i=CP(this,e);if(!ce(i)){const s=L(i,o=>o.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g,`
	`)}`)}}};return n.prototype=r,n.prototype.constructor=n,n._RULE_NAMES=e,n}function SP(t,e,n){const r=function(){};NR(r,t+"BaseSemanticsWithDefaults");const i=Object.create(n.prototype);return j(e,s=>{i[s]=wP}),r.prototype=i,r.prototype.constructor=r,r}var jf;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(jf||(jf={}));function CP(t,e){return AP(t,e)}function AP(t,e){const n=bt(e,i=>Cn(t[i])===!1),r=L(n,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:jf.MISSING_METHOD,methodName:i}));return zs(r)}class EP{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=K(e,"nodeLocationTracking")?e.nodeLocationTracking:wn.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=je,this.cstFinallyStateUpdate=je,this.cstPostTerminal=je,this.cstPostNonTerminal=je,this.cstPostRule=je;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=cg,this.setNodeLocationFromNode=cg,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=lg,this.setNodeLocationFromNode=lg,this.cstPostRule=je,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=je,this.setNodeLocationFromNode=je,this.cstPostRule=je,this.setInitialNodeLocation=je;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const n=this.LA(1);e.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){const n={name:e,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?(r.endOffset=n.endOffset,r.endLine=n.endLine,r.endColumn=n.endColumn):(r.startOffset=NaN,r.startLine=NaN,r.startColumn=NaN)}cstPostRuleOnlyOffset(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?r.endOffset=n.endOffset:r.startOffset=NaN}cstPostTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];TP(r,n,e),this.setNodeLocationFromToken(r.location,n)}cstPostNonTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];$P(r,n,e),this.setNodeLocationFromNode(r.location,e.location)}getBaseCstVisitorConstructor(){if(kn(this.baseCstVisitorConstructor)){const e=bP(this.className,Mt(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(kn(this.baseCstVisitorWithDefaultsConstructor)){const e=SP(this.className,Mt(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class PP{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Ml}LA(e){const n=this.currIdx+e;return n<0||this.tokVectorLength<=n?Ml:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class NP{ACTION(e){return e.call(this)}consume(e,n,r){return this.consumeInternal(n,e,r)}subrule(e,n,r){return this.subruleInternal(n,e,r)}option(e,n){return this.optionInternal(n,e)}or(e,n){return this.orInternal(n,e)}many(e,n){return this.manyInternal(e,n)}atLeastOne(e,n){return this.atLeastOneInternal(e,n)}CONSUME(e,n){return this.consumeInternal(e,0,n)}CONSUME1(e,n){return this.consumeInternal(e,1,n)}CONSUME2(e,n){return this.consumeInternal(e,2,n)}CONSUME3(e,n){return this.consumeInternal(e,3,n)}CONSUME4(e,n){return this.consumeInternal(e,4,n)}CONSUME5(e,n){return this.consumeInternal(e,5,n)}CONSUME6(e,n){return this.consumeInternal(e,6,n)}CONSUME7(e,n){return this.consumeInternal(e,7,n)}CONSUME8(e,n){return this.consumeInternal(e,8,n)}CONSUME9(e,n){return this.consumeInternal(e,9,n)}SUBRULE(e,n){return this.subruleInternal(e,0,n)}SUBRULE1(e,n){return this.subruleInternal(e,1,n)}SUBRULE2(e,n){return this.subruleInternal(e,2,n)}SUBRULE3(e,n){return this.subruleInternal(e,3,n)}SUBRULE4(e,n){return this.subruleInternal(e,4,n)}SUBRULE5(e,n){return this.subruleInternal(e,5,n)}SUBRULE6(e,n){return this.subruleInternal(e,6,n)}SUBRULE7(e,n){return this.subruleInternal(e,7,n)}SUBRULE8(e,n){return this.subruleInternal(e,8,n)}SUBRULE9(e,n){return this.subruleInternal(e,9,n)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,n,r=Ll){if(dt(this.definedRulesNames,e)){const o={message:sr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ut.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);const i=this.defineRule(e,n,r);return this[e]=i,i}OVERRIDE_RULE(e,n,r=Ll){const i=eP(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,n,r);return this[e]=s,s}BACKTRACK(e,n){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{return e.apply(this,n),!0}catch(i){if(Dl(i))return!1;throw i}finally{this.reloadRecogState(r),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return HA(Ke(this.gastProductionsCache))}}class IP{initRecognizerEngine(e,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ol,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},K(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ee(e)){if(ce(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ee(e))this.tokensMap=lt(e,(s,o)=>(s[o.name]=o,s),{});else if(K(e,"modes")&&jt(It(Ke(e.modes)),PE)){const s=It(Ke(e.modes)),o=Mh(s);this.tokensMap=lt(o,(a,l)=>(a[l.name]=l,a),{})}else if(xt(e))this.tokensMap=Ze(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=zn;const r=K(e,"modes")?It(Ke(e.modes)):Ke(e),i=jt(r,s=>ce(s.categoryMatches));this.tokenMatcher=i?Ol:Ys,Xs(Ke(this.tokensMap))}defineRule(e,n,r){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);const i=K(r,"resyncEnabled")?r.resyncEnabled:Ll.resyncEnabled,s=K(r,"recoveryValueFunc")?r.recoveryValueFunc:Ll.recoveryValueFunc,o=this.ruleShortNameIdx<<yP+Zn;this.ruleShortNameIdx++,this.shortRuleNameToFull[o]=e,this.fullRuleNameToShort[e]=o;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u);const f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:n})}invokeRuleCatch(e,n,r){const i=this.RULE_STACK.length===1,s=n&&!this.isBackTracking()&&this.recoveryEnabled;if(Dl(e)){const o=e;if(s){const a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(o.resyncedTokens=this.reSyncTo(a),this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return r(e);else{if(this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,o.partialCstResult=l}throw o}}else{if(i)return this.moveToTerminatedState(),r(e);throw o}}else throw e}optionInternal(e,n){const r=this.getKeyForAutomaticLookahead(PR,n);return this.optionInternalLogic(e,n,r)}optionInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof e!="function"){s=e.DEF;const o=e.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=e;if(i.call(this)===!0)return s.call(this)}atLeastOneInternal(e,n){const r=this.getKeyForAutomaticLookahead(Hf,e);return this.atLeastOneInternalLogic(e,n,r)}atLeastOneInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const o=n.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=n;if(i.call(this)===!0){let o=this.doSingleRepetition(s);for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s)}else throw this.raiseEarlyExitException(e,Re.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,n],i,Hf,e,UE)}atLeastOneSepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(yl,e);this.atLeastOneSepFirstInternalLogic(e,n,r)}atLeastOneSepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,sg],a,yl,e,sg)}else throw this.raiseEarlyExitException(e,Re.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(e,n){const r=this.getKeyForAutomaticLookahead(Uf,e);return this.manyInternalLogic(e,n,r)}manyInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const a=n.GATE;if(a!==void 0){const l=i;i=()=>a.call(this)&&l.call(this)}}else s=n;let o=!0;for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s);this.attemptInRepetitionRecovery(this.manyInternal,[e,n],i,Uf,e,FE,o)}manySepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(Bf,e);this.manySepFirstInternalLogic(e,n,r)}manySepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,ig],a,Bf,e,ig)}}repetitionSepSecondInternal(e,n,r,i,s){for(;r();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,n,r,i,s],r,yl,e,s)}doSingleRepetition(e){const n=this.getLexerPosition();return e.call(this),this.getLexerPosition()>n}orInternal(e,n){const r=this.getKeyForAutomaticLookahead(ER,n),i=ee(e)?e:e.DEF,o=this.getLaFuncFromCache(r).call(this,i);if(o!==void 0)return i[o].ALT.call(this);this.raiseNoAltException(n,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){const e=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new fP(n,e))}}subruleInternal(e,n,r){let i;try{const s=r!==void 0?r.ARGS:void 0;return this.subruleIdx=n,i=e.apply(this,s),this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName),i}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,n,r){throw Dl(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:r),delete e.partialCstResult),e}consumeInternal(e,n,r){let i;try{const s=this.LA(1);this.tokenMatcher(s,e)===!0?(this.consumeToken(),i=s):this.consumeInternalError(e,s,r)}catch(s){i=this.consumeInternalRecovery(e,n,s)}return this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i),i}consumeInternalError(e,n,r){let i;const s=this.LA(0);throw r!==void 0&&r.ERR_MSG?i=r.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:n,previous:s,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new CR(i,n,s))}consumeInternalRecovery(e,n,r){if(this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking()){const i=this.getFollowsForInRuleRecovery(e,n);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===AR?r:s}}else throw r}saveRecogState(){const e=this.errors,n=Ze(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,n,r){this.RULE_OCCURRENCE_STACK.push(r),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),zn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}}class OP{initErrorHandler(e){this._errors=[],this.errorMessageProvider=K(e,"errorMessageProvider")?e.errorMessageProvider:wn.errorMessageProvider}SAVE_ERROR(e){if(Dl(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Ze(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Ze(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,n,r){const i=this.getCurrRuleFullName(),s=this.getGAstProductions()[i],a=Pc(e,s,n,this.maxLookahead)[0],l=[];for(let u=1;u<=this.maxLookahead;u++)l.push(this.LA(u));const c=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new pP(c,this.LA(1),this.LA(0)))}raiseNoAltException(e,n){const r=this.getCurrRuleFullName(),i=this.getGAstProductions()[r],s=Ec(e,i,this.maxLookahead),o=[];for(let c=1;c<=this.maxLookahead;c++)o.push(this.LA(c));const a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:o,previous:a,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new dP(l,this.LA(1),a))}}class DP{initContentAssist(){}computeContentAssist(e,n){const r=this.gastProductionsCache[e];if(kn(r))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return gR([r],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){const n=Gt(e.ruleStack),i=this.getGAstProductions()[n];return new LE(i,e).startWalking()}}const Ic={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Ic);const ug=!0,dg=Math.pow(2,Zn)-1,IR=hR({name:"RECORDING_PHASE_TOKEN",pattern:ht.NA});Xs([IR]);const OR=Fh(IR,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(OR);const xP={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class MP{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){const n=e>0?e:"";this[`CONSUME${n}`]=function(r,i){return this.consumeInternalRecord(r,e,i)},this[`SUBRULE${n}`]=function(r,i){return this.subruleInternalRecord(r,e,i)},this[`OPTION${n}`]=function(r){return this.optionInternalRecord(r,e)},this[`OR${n}`]=function(r){return this.orInternalRecord(r,e)},this[`MANY${n}`]=function(r){this.manyInternalRecord(e,r)},this[`MANY_SEP${n}`]=function(r){this.manySepFirstInternalRecord(e,r)},this[`AT_LEAST_ONE${n}`]=function(r){this.atLeastOneInternalRecord(e,r)},this[`AT_LEAST_ONE_SEP${n}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)}}this.consume=function(e,n,r){return this.consumeInternalRecord(n,e,r)},this.subrule=function(e,n,r){return this.subruleInternalRecord(n,e,r)},this.option=function(e,n){return this.optionInternalRecord(n,e)},this.or=function(e,n){return this.orInternalRecord(n,e)},this.many=function(e,n){this.manyInternalRecord(e,n)},this.atLeastOne=function(e,n){this.atLeastOneInternalRecord(e,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{const e=this;for(let n=0;n<10;n++){const r=n>0?n:"";delete e[`CONSUME${r}`],delete e[`SUBRULE${r}`],delete e[`OPTION${r}`],delete e[`OR${r}`],delete e[`MANY${r}`],delete e[`MANY_SEP${r}`],delete e[`AT_LEAST_ONE${r}`],delete e[`AT_LEAST_ONE_SEP${r}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,n){return()=>!0}LA_RECORD(e){return Ml}topLevelRuleRecord(e,n){try{const r=new ti({definition:[],name:e});return r.name=e,this.recordingProdStack.push(r),n.call(this),this.recordingProdStack.pop(),r}catch(r){if(r.KNOWN_RECORDER_ERROR!==!0)try{r.message=r.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}throw r}}optionInternalRecord(e,n){return yi.call(this,Qe,e,n)}atLeastOneInternalRecord(e,n){yi.call(this,St,n,e)}atLeastOneSepFirstInternalRecord(e,n){yi.call(this,Ct,n,e,ug)}manyInternalRecord(e,n){yi.call(this,Se,n,e)}manySepFirstInternalRecord(e,n){yi.call(this,yt,n,e,ug)}orInternalRecord(e,n){return LP.call(this,e,n)}subruleInternalRecord(e,n,r){if(xl(n),!e||K(e,"ruleName")===!1){const a=new Error(`<SUBRULE${fg(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}const i=Mr(this.recordingProdStack),s=e.ruleName,o=new ct({idx:n,nonTerminalName:s,label:r==null?void 0:r.LABEL,referencedRule:void 0});return i.definition.push(o),this.outputCst?xP:Ic}consumeInternalRecord(e,n,r){if(xl(n),!fR(e)){const o=new Error(`<CONSUME${fg(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw o.KNOWN_RECORDER_ERROR=!0,o}const i=Mr(this.recordingProdStack),s=new ge({idx:n,terminalType:e,label:r==null?void 0:r.LABEL});return i.definition.push(s),OR}}function yi(t,e,n,r=!1){xl(n);const i=Mr(this.recordingProdStack),s=Cn(e)?e:e.DEF,o=new t({definition:[],idx:n});return r&&(o.separator=e.SEP),K(e,"MAX_LOOKAHEAD")&&(o.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(o),s.call(this),i.definition.push(o),this.recordingProdStack.pop(),Ic}function LP(t,e){xl(e);const n=Mr(this.recordingProdStack),r=ee(t)===!1,i=r===!1?t:t.DEF,s=new _t({definition:[],idx:e,ignoreAmbiguities:r&&t.IGNORE_AMBIGUITIES===!0});K(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD);const o=Zv(i,a=>Cn(a.GATE));return s.hasPredicates=o,n.definition.push(s),j(i,a=>{const l=new gt({definition:[]});s.definition.push(l),K(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:K(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),Ic}function fg(t){return t===0?"":`${t}`}function xl(t){if(t<0||t>dg){const e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${dg+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}class FP{initPerformanceTracer(e){if(K(e,"traceInitPerf")){const n=e.traceInitPerf,r=typeof n=="number";this.traceInitMaxIdent=r?n:1/0,this.traceInitPerf=r?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=wn.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,n){if(this.traceInitPerf===!0){this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${r}--> <${e}>`);const{time:i,value:s}=nR(n),o=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&o(`${r}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,s}else return n()}}function UP(t,e){e.forEach(n=>{const r=n.prototype;Object.getOwnPropertyNames(r).forEach(i=>{if(i==="constructor")return;const s=Object.getOwnPropertyDescriptor(r,i);s&&(s.get||s.set)?Object.defineProperty(t.prototype,i,s):t.prototype[i]=n.prototype[i]})})}const Ml=Fh(zn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Ml);const wn=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Pr,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Ll=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0});var ut;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ut||(ut={}));function pg(t=void 0){return function(){return t}}class Js{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;const n=this.className;this.TRACE_INIT("toFastProps",()=>{rR(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),j(this.definedRulesNames,i=>{const o=this[i].originalGrammarAction;let a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,o)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let r=[];if(this.TRACE_INIT("Grammar Resolving",()=>{r=cP({rules:Ke(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(r)}),this.TRACE_INIT("Grammar Validations",()=>{if(ce(r)&&this.skipValidations===!1){const i=uP({rules:Ke(this.gastProductionsCache),tokenTypes:Ke(this.tokensMap),errMsgProvider:sr,grammarName:n}),s=VE({lookaheadStrategy:this.lookaheadStrategy,rules:Ke(this.gastProductionsCache),tokenTypes:Ke(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,s)}}),ce(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=zA(Ke(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,s;(s=(i=this.lookaheadStrategy).initialize)===null||s===void 0||s.call(i,{rules:Ke(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ke(this.gastProductionsCache))})),!Js.DEFER_DEFINITION_ERRORS_HANDLING&&!ce(this.definitionErrors))throw e=L(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,n){this.definitionErrors=[],this.selfAnalysisDone=!1;const r=this;if(r.initErrorHandler(n),r.initLexerAdapter(),r.initLooksAhead(n),r.initRecognizerEngine(e,n),r.initRecoverable(n),r.initTreeBuilder(n),r.initContentAssist(),r.initGastRecorder(n),r.initPerformanceTracer(n),K(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=K(n,"skipValidations")?n.skipValidations:wn.skipValidations}}Js.DEFER_DEFINITION_ERRORS_HANDLING=!1;UP(Js,[mP,_P,EP,PP,IP,NP,OP,DP,MP,FP]);class HP extends Js{constructor(e,n=wn){const r=Ze(n);r.outputCst=!1,super(e,r)}}function Fr(t,e,n){return`${t.name}_${e}_${n}`}const Vn=1,BP=2,DR=4,xR=5,Qs=7,jP=8,KP=9,qP=10,GP=11,MR=12;class jh{constructor(e){this.target=e}isEpsilon(){return!1}}class Kh extends jh{constructor(e,n){super(e),this.tokenType=n}}class LR extends jh{constructor(e){super(e)}isEpsilon(){return!0}}class qh extends jh{constructor(e,n,r){super(e),this.rule=n,this.followState=r}isEpsilon(){return!0}}function WP(t){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};zP(e,t);const n=t.length;for(let r=0;r<n;r++){const i=t[r],s=Rr(e,i,i);s!==void 0&&iN(e,i,s)}return e}function zP(t,e){const n=e.length;for(let r=0;r<n;r++){const i=e[r],s=Ge(t,i,void 0,{type:BP}),o=Ge(t,i,void 0,{type:Qs});s.stop=o,t.ruleToStartState.set(i,s),t.ruleToStopState.set(i,o)}}function FR(t,e,n){return n instanceof ge?Gh(t,e,n.terminalType,n):n instanceof ct?rN(t,e,n):n instanceof _t?QP(t,e,n):n instanceof Qe?ZP(t,e,n):n instanceof Se?VP(t,e,n):n instanceof yt?YP(t,e,n):n instanceof St?XP(t,e,n):n instanceof Ct?JP(t,e,n):Rr(t,e,n)}function VP(t,e,n){const r=Ge(t,e,n,{type:xR});er(t,r);const i=ri(t,e,r,n,Rr(t,e,n));return HR(t,e,n,i)}function YP(t,e,n){const r=Ge(t,e,n,{type:xR});er(t,r);const i=ri(t,e,r,n,Rr(t,e,n)),s=Gh(t,e,n.separator,n);return HR(t,e,n,i,s)}function XP(t,e,n){const r=Ge(t,e,n,{type:DR});er(t,r);const i=ri(t,e,r,n,Rr(t,e,n));return UR(t,e,n,i)}function JP(t,e,n){const r=Ge(t,e,n,{type:DR});er(t,r);const i=ri(t,e,r,n,Rr(t,e,n)),s=Gh(t,e,n.separator,n);return UR(t,e,n,i,s)}function QP(t,e,n){const r=Ge(t,e,n,{type:Vn});er(t,r);const i=L(n.definition,o=>FR(t,e,o));return ri(t,e,r,n,...i)}function ZP(t,e,n){const r=Ge(t,e,n,{type:Vn});er(t,r);const i=ri(t,e,r,n,Rr(t,e,n));return eN(t,e,n,i)}function Rr(t,e,n){const r=bt(L(n.definition,i=>FR(t,e,i)),i=>i!==void 0);return r.length===1?r[0]:r.length===0?void 0:nN(t,r)}function UR(t,e,n,r,i){const s=r.left,o=r.right,a=Ge(t,e,n,{type:GP});er(t,a);const l=Ge(t,e,n,{type:MR});return s.loopback=a,l.loopback=a,t.decisionMap[Fr(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",n.idx)]=a,Le(o,a),i===void 0?(Le(a,s),Le(a,l)):(Le(a,l),Le(a,i.left),Le(i.right,s)),{left:s,right:l}}function HR(t,e,n,r,i){const s=r.left,o=r.right,a=Ge(t,e,n,{type:qP});er(t,a);const l=Ge(t,e,n,{type:MR}),c=Ge(t,e,n,{type:KP});return a.loopback=c,l.loopback=c,Le(a,s),Le(a,l),Le(o,c),i!==void 0?(Le(c,l),Le(c,i.left),Le(i.right,s)):Le(c,a),t.decisionMap[Fr(e,i?"RepetitionWithSeparator":"Repetition",n.idx)]=a,{left:a,right:l}}function eN(t,e,n,r){const i=r.left,s=r.right;return Le(i,s),t.decisionMap[Fr(e,"Option",n.idx)]=i,r}function er(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function ri(t,e,n,r,...i){const s=Ge(t,e,r,{type:jP,start:n});n.end=s;for(const a of i)a!==void 0?(Le(n,a.left),Le(a.right,s)):Le(n,s);const o={left:n,right:s};return t.decisionMap[Fr(e,tN(r),r.idx)]=n,o}function tN(t){if(t instanceof _t)return"Alternation";if(t instanceof Qe)return"Option";if(t instanceof Se)return"Repetition";if(t instanceof yt)return"RepetitionWithSeparator";if(t instanceof St)return"RepetitionMandatory";if(t instanceof Ct)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function nN(t,e){const n=e.length;for(let s=0;s<n-1;s++){const o=e[s];let a;o.left.transitions.length===1&&(a=o.left.transitions[0]);const l=a instanceof qh,c=a,u=e[s+1].left;o.left.type===Vn&&o.right.type===Vn&&a!==void 0&&(l&&c.followState===o.right||a.target===o.right)?(l?c.followState=u:a.target=u,sN(t,o.right)):Le(o.right,u)}const r=e[0],i=e[n-1];return{left:r.left,right:i.right}}function Gh(t,e,n,r){const i=Ge(t,e,r,{type:Vn}),s=Ge(t,e,r,{type:Vn});return Wh(i,new Kh(s,n)),{left:i,right:s}}function rN(t,e,n){const r=n.referencedRule,i=t.ruleToStartState.get(r),s=Ge(t,e,n,{type:Vn}),o=Ge(t,e,n,{type:Vn}),a=new qh(i,r,o);return Wh(s,a),{left:s,right:o}}function iN(t,e,n){const r=t.ruleToStartState.get(e);Le(r,n.left);const i=t.ruleToStopState.get(e);return Le(n.right,i),{left:r,right:i}}function Le(t,e){const n=new LR(e);Wh(t,n)}function Ge(t,e,n,r){const i=Object.assign({atn:t,production:n,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},r);return t.states.push(i),i}function Wh(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function sN(t,e){t.states.splice(t.states.indexOf(e),1)}const Fl={};class Kf{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){const n=BR(e);n in this.map||(this.map[n]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return L(this.configs,e=>e.alt)}get key(){let e="";for(const n in this.map)e+=n+":";return e}}function BR(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(n=>n.stateNumber.toString()).join("_")}`}function oN(t,e){const n={};return r=>{const i=r.toString();let s=n[i];return s!==void 0||(s={atnStartState:t,decision:e,states:{}},n[i]=s),s}}class jR{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,n){this.predicates[e]=n}toString(){let e="";const n=this.predicates.length;for(let r=0;r<n;r++)e+=this.predicates[r]===!0?"1":"0";return e}}const hg=new jR;class aN extends Bh{constructor(e){var n;super(),this.logging=(n=e==null?void 0:e.logging)!==null&&n!==void 0?n:r=>console.log(r)}initialize(e){this.atn=WP(e.rules),this.dfas=lN(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){const{prodOccurrence:n,rule:r,hasPredicates:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,l=Fr(r,"Alternation",n),u=this.atn.decisionMap[l].decision,f=L(og({maxLookahead:1,occurrence:n,prodType:"Alternation",rule:r}),m=>L(m,g=>g[0]));if(mg(f,!1)&&!s){const m=lt(f,(g,d,_)=>(j(d,T=>{T&&(g[T.tokenTypeIdx]=_,j(T.categoryMatches,v=>{g[v]=_}))}),g),{});return i?function(g){var d;const _=this.LA(1),T=m[_.tokenTypeIdx];if(g!==void 0&&T!==void 0){const v=(d=g[T])===null||d===void 0?void 0:d.GATE;if(v!==void 0&&v.call(this)===!1)return}return T}:function(){const g=this.LA(1);return m[g.tokenTypeIdx]}}else return i?function(m){const g=new jR,d=m===void 0?0:m.length;for(let T=0;T<d;T++){const v=m==null?void 0:m[T].GATE;g.set(T,v===void 0||v.call(this))}const _=Ru.call(this,o,u,g,a);return typeof _=="number"?_:void 0}:function(){const m=Ru.call(this,o,u,hg,a);return typeof m=="number"?m:void 0}}buildLookaheadForOptional(e){const{prodOccurrence:n,rule:r,prodType:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,l=Fr(r,i,n),u=this.atn.decisionMap[l].decision,f=L(og({maxLookahead:1,occurrence:n,prodType:i,rule:r}),m=>L(m,g=>g[0]));if(mg(f)&&f[0][0]&&!s){const m=f[0],g=It(m);if(g.length===1&&ce(g[0].categoryMatches)){const _=g[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===_}}else{const d=lt(g,(_,T)=>(T!==void 0&&(_[T.tokenTypeIdx]=!0,j(T.categoryMatches,v=>{_[v]=!0})),_),{});return function(){const _=this.LA(1);return d[_.tokenTypeIdx]===!0}}}return function(){const m=Ru.call(this,o,u,hg,a);return typeof m=="object"?!1:m===0}}}function mg(t,e=!0){const n=new Set;for(const r of t){const i=new Set;for(const s of r){if(s===void 0){if(e)break;return!1}const o=[s.tokenTypeIdx].concat(s.categoryMatches);for(const a of o)if(n.has(a)){if(!i.has(a))return!1}else n.add(a),i.add(a)}}return!0}function lN(t){const e=t.decisionStates.length,n=Array(e);for(let r=0;r<e;r++)n[r]=oN(t.decisionStates[r],r);return n}function Ru(t,e,n,r){const i=t[e](n);let s=i.start;if(s===void 0){const a=vN(i.atnStartState);s=qR(i,KR(a)),i.start=s}return cN.apply(this,[i,s,n,r])}function cN(t,e,n,r){let i=e,s=1;const o=[];let a=this.LA(s++);for(;;){let l=mN(i,a);if(l===void 0&&(l=uN.apply(this,[t,i,a,s,n,r])),l===Fl)return hN(o,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,o.push(a),a=this.LA(s++)}}function uN(t,e,n,r,i,s){const o=gN(e.configs,n,i);if(o.size===0)return gg(t,e,n,Fl),Fl;let a=KR(o);const l=_N(o,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(kN(o)){const c=CA(o.alts);a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c,dN.apply(this,[t,r,o.alts,s])}return a=gg(t,e,n,a),a}function dN(t,e,n,r){const i=[];for(let c=1;c<=e;c++)i.push(this.LA(c).tokenType);const s=t.atnStartState,o=s.rule,a=s.production,l=fN({topLevelRule:o,ambiguityIndices:n,production:a,prefixPath:i});r(l)}function fN(t){const e=L(t.prefixPath,i=>Ir(i)).join(", "),n=t.production.idx===0?"":t.production.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${pN(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r}function pN(t){if(t instanceof ct)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof _t)return"OR";if(t instanceof St)return"AT_LEAST_ONE";if(t instanceof Ct)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof Se)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}function hN(t,e,n){const r=kt(e.configs.elements,s=>s.state.transitions),i=LA(r.filter(s=>s instanceof Kh).map(s=>s.tokenType),s=>s.tokenTypeIdx);return{actualToken:n,possibleTokenTypes:i,tokenPath:t}}function mN(t,e){return t.edges[e.tokenTypeIdx]}function gN(t,e,n){const r=new Kf,i=[];for(const o of t.elements){if(n.is(o.alt)===!1)continue;if(o.state.type===Qs){i.push(o);continue}const a=o.state.transitions.length;for(let l=0;l<a;l++){const c=o.state.transitions[l],u=yN(c,e);u!==void 0&&r.add({state:u,alt:o.alt,stack:o.stack})}}let s;if(i.length===0&&r.size===1&&(s=r),s===void 0){s=new Kf;for(const o of r.elements)Ul(o,s)}if(i.length>0&&!TN(s))for(const o of i)s.add(o);return s}function yN(t,e){if(t instanceof Kh&&mR(e,t.tokenType))return t.target}function _N(t,e){let n;for(const r of t.elements)if(e.is(r.alt)===!0){if(n===void 0)n=r.alt;else if(n!==r.alt)return}return n}function KR(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function gg(t,e,n,r){return r=qR(t,r),e.edges[n.tokenTypeIdx]=r,r}function qR(t,e){if(e===Fl)return e;const n=e.configs.key,r=t.states[n];return r!==void 0?r:(e.configs.finalize(),t.states[n]=e,e)}function vN(t){const e=new Kf,n=t.transitions.length;for(let r=0;r<n;r++){const s={state:t.transitions[r].target,alt:r,stack:[]};Ul(s,e)}return e}function Ul(t,e){const n=t.state;if(n.type===Qs){if(t.stack.length>0){const i=[...t.stack],o={state:i.pop(),alt:t.alt,stack:i};Ul(o,e)}else e.add(t);return}n.epsilonOnlyTransitions||e.add(t);const r=n.transitions.length;for(let i=0;i<r;i++){const s=n.transitions[i],o=RN(t,s);o!==void 0&&Ul(o,e)}}function RN(t,e){if(e instanceof LR)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof qh){const n=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:n}}}function TN(t){for(const e of t.elements)if(e.state.type===Qs)return!0;return!1}function $N(t){for(const e of t.elements)if(e.state.type!==Qs)return!1;return!0}function kN(t){if($N(t))return!0;const e=wN(t.elements);return bN(e)&&!SN(e)}function wN(t){const e=new Map;for(const n of t){const r=BR(n,!1);let i=e.get(r);i===void 0&&(i={},e.set(r,i)),i[n.alt]=!0}return e}function bN(t){for(const e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function SN(t){for(const e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var qf;(function(t){function e(n){return typeof n=="string"}t.is=e})(qf||(qf={}));var Hl;(function(t){function e(n){return typeof n=="string"}t.is=e})(Hl||(Hl={}));var Gf;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Gf||(Gf={}));var Ss;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Ss||(Ss={}));var re;(function(t){function e(r,i){return r===Number.MAX_VALUE&&(r=Ss.MAX_VALUE),i===Number.MAX_VALUE&&(i=Ss.MAX_VALUE),{line:r,character:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&w.uinteger(i.line)&&w.uinteger(i.character)}t.is=n})(re||(re={}));var Q;(function(t){function e(r,i,s,o){if(w.uinteger(r)&&w.uinteger(i)&&w.uinteger(s)&&w.uinteger(o))return{start:re.create(r,i),end:re.create(s,o)};if(re.is(r)&&re.is(i))return{start:r,end:i};throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`)}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&re.is(i.start)&&re.is(i.end)}t.is=n})(Q||(Q={}));var Cs;(function(t){function e(r,i){return{uri:r,range:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.range)&&(w.string(i.uri)||w.undefined(i.uri))}t.is=n})(Cs||(Cs={}));var Wf;(function(t){function e(r,i,s,o){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:o}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.targetRange)&&w.string(i.targetUri)&&Q.is(i.targetSelectionRange)&&(Q.is(i.originSelectionRange)||w.undefined(i.originSelectionRange))}t.is=n})(Wf||(Wf={}));var Bl;(function(t){function e(r,i,s,o){return{red:r,green:i,blue:s,alpha:o}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.numberRange(i.red,0,1)&&w.numberRange(i.green,0,1)&&w.numberRange(i.blue,0,1)&&w.numberRange(i.alpha,0,1)}t.is=n})(Bl||(Bl={}));var zf;(function(t){function e(r,i){return{range:r,color:i}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&Q.is(i.range)&&Bl.is(i.color)}t.is=n})(zf||(zf={}));var Vf;(function(t){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.string(i.label)&&(w.undefined(i.textEdit)||Kt.is(i))&&(w.undefined(i.additionalTextEdits)||w.typedArray(i.additionalTextEdits,Kt.is))}t.is=n})(Vf||(Vf={}));var Yf;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Yf||(Yf={}));var Xf;(function(t){function e(r,i,s,o,a,l){const c={startLine:r,endLine:i};return w.defined(s)&&(c.startCharacter=s),w.defined(o)&&(c.endCharacter=o),w.defined(a)&&(c.kind=a),w.defined(l)&&(c.collapsedText=l),c}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.uinteger(i.startLine)&&w.uinteger(i.startLine)&&(w.undefined(i.startCharacter)||w.uinteger(i.startCharacter))&&(w.undefined(i.endCharacter)||w.uinteger(i.endCharacter))&&(w.undefined(i.kind)||w.string(i.kind))}t.is=n})(Xf||(Xf={}));var jl;(function(t){function e(r,i){return{location:r,message:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&Cs.is(i.location)&&w.string(i.message)}t.is=n})(jl||(jl={}));var Jf;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Jf||(Jf={}));var Qf;(function(t){t.Unnecessary=1,t.Deprecated=2})(Qf||(Qf={}));var Zf;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&w.string(r.href)}t.is=e})(Zf||(Zf={}));var As;(function(t){function e(r,i,s,o,a,l){let c={range:r,message:i};return w.defined(s)&&(c.severity=s),w.defined(o)&&(c.code=o),w.defined(a)&&(c.source=a),w.defined(l)&&(c.relatedInformation=l),c}t.create=e;function n(r){var i;let s=r;return w.defined(s)&&Q.is(s.range)&&w.string(s.message)&&(w.number(s.severity)||w.undefined(s.severity))&&(w.integer(s.code)||w.string(s.code)||w.undefined(s.code))&&(w.undefined(s.codeDescription)||w.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(w.string(s.source)||w.undefined(s.source))&&(w.undefined(s.relatedInformation)||w.typedArray(s.relatedInformation,jl.is))}t.is=n})(As||(As={}));var hr;(function(t){function e(r,i,...s){let o={title:r,command:i};return w.defined(s)&&s.length>0&&(o.arguments=s),o}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.title)&&w.string(i.command)}t.is=n})(hr||(hr={}));var Kt;(function(t){function e(s,o){return{range:s,newText:o}}t.replace=e;function n(s,o){return{range:{start:s,end:s},newText:o}}t.insert=n;function r(s){return{range:s,newText:""}}t.del=r;function i(s){const o=s;return w.objectLiteral(o)&&w.string(o.newText)&&Q.is(o.range)}t.is=i})(Kt||(Kt={}));var ar;(function(t){function e(r,i,s){const o={label:r};return i!==void 0&&(o.needsConfirmation=i),s!==void 0&&(o.description=s),o}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&w.string(i.label)&&(w.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(w.string(i.description)||i.description===void 0)}t.is=n})(ar||(ar={}));var Xe;(function(t){function e(n){const r=n;return w.string(r)}t.is=e})(Xe||(Xe={}));var mn;(function(t){function e(s,o,a){return{range:s,newText:o,annotationId:a}}t.replace=e;function n(s,o,a){return{range:{start:s,end:s},newText:o,annotationId:a}}t.insert=n;function r(s,o){return{range:s,newText:"",annotationId:o}}t.del=r;function i(s){const o=s;return Kt.is(o)&&(ar.is(o.annotationId)||Xe.is(o.annotationId))}t.is=i})(mn||(mn={}));var Es;(function(t){function e(r,i){return{textDocument:r,edits:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&Ps.is(i.textDocument)&&Array.isArray(i.edits)}t.is=n})(Es||(Es={}));var Ur;(function(t){function e(r,i,s){let o={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="create"&&w.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||w.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||w.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Ur||(Ur={}));var Hr;(function(t){function e(r,i,s,o){let a={kind:"rename",oldUri:r,newUri:i};return s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)&&(a.options=s),o!==void 0&&(a.annotationId=o),a}t.create=e;function n(r){let i=r;return i&&i.kind==="rename"&&w.string(i.oldUri)&&w.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||w.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||w.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Hr||(Hr={}));var Br;(function(t){function e(r,i,s){let o={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="delete"&&w.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||w.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||w.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Br||(Br={}));var Kl;(function(t){function e(n){let r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i=>w.string(i.kind)?Ur.is(i)||Hr.is(i)||Br.is(i):Es.is(i)))}t.is=e})(Kl||(Kl={}));class Mo{constructor(e,n){this.edits=e,this.changeAnnotations=n}insert(e,n,r){let i,s;if(r===void 0?i=Kt.insert(e,n):Xe.is(r)?(s=r,i=mn.insert(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.insert(e,n,s)),this.edits.push(i),s!==void 0)return s}replace(e,n,r){let i,s;if(r===void 0?i=Kt.replace(e,n):Xe.is(r)?(s=r,i=mn.replace(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.replace(e,n,s)),this.edits.push(i),s!==void 0)return s}delete(e,n){let r,i;if(n===void 0?r=Kt.del(e):Xe.is(n)?(i=n,r=mn.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=mn.del(e,i)),this.edits.push(r),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}}class yg{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,n){let r;if(Xe.is(e)?r=e:(r=this.nextId(),n=e),this._annotations[r]!==void 0)throw new Error(`Id ${r} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${r}`);return this._annotations[r]=n,this._size++,r}nextId(){return this._counter++,this._counter.toString()}}class CN{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new yg(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(n=>{if(Es.is(n)){const r=new Mo(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach(n=>{const r=new Mo(e.changes[n]);this._textEditChanges[n]=r})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Ps.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");const n={uri:e.uri,version:e.version};let r=this._textEditChanges[n.uri];if(!r){const i=[],s={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(s),r=new Mo(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[e];if(!n){let r=[];this._workspaceEdit.changes[e]=r,n=new Mo(r),this._textEditChanges[e]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new yg,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;ar.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Ur.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=Ur.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}renameFile(e,n,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let s;ar.is(r)||Xe.is(r)?s=r:i=r;let o,a;if(s===void 0?o=Hr.create(e,n,i):(a=Xe.is(s)?s:this._changeAnnotations.manage(s),o=Hr.create(e,n,i,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a}deleteFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;ar.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Br.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=Br.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}}var ep;(function(t){function e(r){return{uri:r}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)}t.is=n})(ep||(ep={}));var tp;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&w.integer(i.version)}t.is=n})(tp||(tp={}));var Ps;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&(i.version===null||w.integer(i.version))}t.is=n})(Ps||(Ps={}));var np;(function(t){function e(r,i,s,o){return{uri:r,languageId:i,version:s,text:o}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.string(i.uri)&&w.string(i.languageId)&&w.integer(i.version)&&w.string(i.text)}t.is=n})(np||(np={}));var ql;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(n){const r=n;return r===t.PlainText||r===t.Markdown}t.is=e})(ql||(ql={}));var jr;(function(t){function e(n){const r=n;return w.objectLiteral(n)&&ql.is(r.kind)&&w.string(r.value)}t.is=e})(jr||(jr={}));var rp;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(rp||(rp={}));var ip;(function(t){t.PlainText=1,t.Snippet=2})(ip||(ip={}));var sp;(function(t){t.Deprecated=1})(sp||(sp={}));var op;(function(t){function e(r,i,s){return{newText:r,insert:i,replace:s}}t.create=e;function n(r){const i=r;return i&&w.string(i.newText)&&Q.is(i.insert)&&Q.is(i.replace)}t.is=n})(op||(op={}));var ap;(function(t){t.asIs=1,t.adjustIndentation=2})(ap||(ap={}));var lp;(function(t){function e(n){const r=n;return r&&(w.string(r.detail)||r.detail===void 0)&&(w.string(r.description)||r.description===void 0)}t.is=e})(lp||(lp={}));var cp;(function(t){function e(n){return{label:n}}t.create=e})(cp||(cp={}));var up;(function(t){function e(n,r){return{items:n||[],isIncomplete:!!r}}t.create=e})(up||(up={}));var Ns;(function(t){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function n(r){const i=r;return w.string(i)||w.objectLiteral(i)&&w.string(i.language)&&w.string(i.value)}t.is=n})(Ns||(Ns={}));var dp;(function(t){function e(n){let r=n;return!!r&&w.objectLiteral(r)&&(jr.is(r.contents)||Ns.is(r.contents)||w.typedArray(r.contents,Ns.is))&&(n.range===void 0||Q.is(n.range))}t.is=e})(dp||(dp={}));var fp;(function(t){function e(n,r){return r?{label:n,documentation:r}:{label:n}}t.create=e})(fp||(fp={}));var pp;(function(t){function e(n,r,...i){let s={label:n};return w.defined(r)&&(s.documentation=r),w.defined(i)?s.parameters=i:s.parameters=[],s}t.create=e})(pp||(pp={}));var hp;(function(t){t.Text=1,t.Read=2,t.Write=3})(hp||(hp={}));var mp;(function(t){function e(n,r){let i={range:n};return w.number(r)&&(i.kind=r),i}t.create=e})(mp||(mp={}));var gp;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(gp||(gp={}));var yp;(function(t){t.Deprecated=1})(yp||(yp={}));var _p;(function(t){function e(n,r,i,s,o){let a={name:n,kind:r,location:{uri:s,range:i}};return o&&(a.containerName=o),a}t.create=e})(_p||(_p={}));var vp;(function(t){function e(n,r,i,s){return s!==void 0?{name:n,kind:r,location:{uri:i,range:s}}:{name:n,kind:r,location:{uri:i}}}t.create=e})(vp||(vp={}));var Rp;(function(t){function e(r,i,s,o,a,l){let c={name:r,detail:i,kind:s,range:o,selectionRange:a};return l!==void 0&&(c.children=l),c}t.create=e;function n(r){let i=r;return i&&w.string(i.name)&&w.number(i.kind)&&Q.is(i.range)&&Q.is(i.selectionRange)&&(i.detail===void 0||w.string(i.detail))&&(i.deprecated===void 0||w.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=n})(Rp||(Rp={}));var Tp;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(Tp||(Tp={}));var Is;(function(t){t.Invoked=1,t.Automatic=2})(Is||(Is={}));var $p;(function(t){function e(r,i,s){let o={diagnostics:r};return i!=null&&(o.only=i),s!=null&&(o.triggerKind=s),o}t.create=e;function n(r){let i=r;return w.defined(i)&&w.typedArray(i.diagnostics,As.is)&&(i.only===void 0||w.typedArray(i.only,w.string))&&(i.triggerKind===void 0||i.triggerKind===Is.Invoked||i.triggerKind===Is.Automatic)}t.is=n})($p||($p={}));var kp;(function(t){function e(r,i,s){let o={title:r},a=!0;return typeof i=="string"?(a=!1,o.kind=i):hr.is(i)?o.command=i:o.edit=i,a&&s!==void 0&&(o.kind=s),o}t.create=e;function n(r){let i=r;return i&&w.string(i.title)&&(i.diagnostics===void 0||w.typedArray(i.diagnostics,As.is))&&(i.kind===void 0||w.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||hr.is(i.command))&&(i.isPreferred===void 0||w.boolean(i.isPreferred))&&(i.edit===void 0||Kl.is(i.edit))}t.is=n})(kp||(kp={}));var wp;(function(t){function e(r,i){let s={range:r};return w.defined(i)&&(s.data=i),s}t.create=e;function n(r){let i=r;return w.defined(i)&&Q.is(i.range)&&(w.undefined(i.command)||hr.is(i.command))}t.is=n})(wp||(wp={}));var bp;(function(t){function e(r,i){return{tabSize:r,insertSpaces:i}}t.create=e;function n(r){let i=r;return w.defined(i)&&w.uinteger(i.tabSize)&&w.boolean(i.insertSpaces)}t.is=n})(bp||(bp={}));var Sp;(function(t){function e(r,i,s){return{range:r,target:i,data:s}}t.create=e;function n(r){let i=r;return w.defined(i)&&Q.is(i.range)&&(w.undefined(i.target)||w.string(i.target))}t.is=n})(Sp||(Sp={}));var Cp;(function(t){function e(r,i){return{range:r,parent:i}}t.create=e;function n(r){let i=r;return w.objectLiteral(i)&&Q.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=n})(Cp||(Cp={}));var Ap;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(Ap||(Ap={}));var Ep;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(Ep||(Ep={}));var Pp;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}t.is=e})(Pp||(Pp={}));var Np;(function(t){function e(r,i){return{range:r,text:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&w.string(i.text)}t.is=n})(Np||(Np={}));var Ip;(function(t){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&w.boolean(i.caseSensitiveLookup)&&(w.string(i.variableName)||i.variableName===void 0)}t.is=n})(Ip||(Ip={}));var Op;(function(t){function e(r,i){return{range:r,expression:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&(w.string(i.expression)||i.expression===void 0)}t.is=n})(Op||(Op={}));var Dp;(function(t){function e(r,i){return{frameId:r,stoppedLocation:i}}t.create=e;function n(r){const i=r;return w.defined(i)&&Q.is(r.stoppedLocation)}t.is=n})(Dp||(Dp={}));var Gl;(function(t){t.Type=1,t.Parameter=2;function e(n){return n===1||n===2}t.is=e})(Gl||(Gl={}));var Wl;(function(t){function e(r){return{value:r}}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&(i.tooltip===void 0||w.string(i.tooltip)||jr.is(i.tooltip))&&(i.location===void 0||Cs.is(i.location))&&(i.command===void 0||hr.is(i.command))}t.is=n})(Wl||(Wl={}));var xp;(function(t){function e(r,i,s){const o={position:r,label:i};return s!==void 0&&(o.kind=s),o}t.create=e;function n(r){const i=r;return w.objectLiteral(i)&&re.is(i.position)&&(w.string(i.label)||w.typedArray(i.label,Wl.is))&&(i.kind===void 0||Gl.is(i.kind))&&i.textEdits===void 0||w.typedArray(i.textEdits,Kt.is)&&(i.tooltip===void 0||w.string(i.tooltip)||jr.is(i.tooltip))&&(i.paddingLeft===void 0||w.boolean(i.paddingLeft))&&(i.paddingRight===void 0||w.boolean(i.paddingRight))}t.is=n})(xp||(xp={}));var Mp;(function(t){function e(n){return{kind:"snippet",value:n}}t.createSnippet=e})(Mp||(Mp={}));var Lp;(function(t){function e(n,r,i,s){return{insertText:n,filterText:r,range:i,command:s}}t.create=e})(Lp||(Lp={}));var Fp;(function(t){function e(n){return{items:n}}t.create=e})(Fp||(Fp={}));var Up;(function(t){t.Invoked=0,t.Automatic=1})(Up||(Up={}));var Hp;(function(t){function e(n,r){return{range:n,text:r}}t.create=e})(Hp||(Hp={}));var Bp;(function(t){function e(n,r){return{triggerKind:n,selectedCompletionInfo:r}}t.create=e})(Bp||(Bp={}));var jp;(function(t){function e(n){const r=n;return w.objectLiteral(r)&&Hl.is(r.uri)&&w.string(r.name)}t.is=e})(jp||(jp={}));const AN=[`
`,`\r
`,"\r"];var Kp;(function(t){function e(s,o,a,l){return new EN(s,o,a,l)}t.create=e;function n(s){let o=s;return!!(w.defined(o)&&w.string(o.uri)&&(w.undefined(o.languageId)||w.string(o.languageId))&&w.uinteger(o.lineCount)&&w.func(o.getText)&&w.func(o.positionAt)&&w.func(o.offsetAt))}t.is=n;function r(s,o){let a=s.getText(),l=i(o,(u,f)=>{let m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m}),c=a.length;for(let u=l.length-1;u>=0;u--){let f=l[u],m=s.offsetAt(f.range.start),g=s.offsetAt(f.range.end);if(g<=c)a=a.substring(0,m)+f.newText+a.substring(g,a.length);else throw new Error("Overlapping edit");c=m}return a}t.applyEdits=r;function i(s,o){if(s.length<=1)return s;const a=s.length/2|0,l=s.slice(0,a),c=s.slice(a);i(l,o),i(c,o);let u=0,f=0,m=0;for(;u<l.length&&f<c.length;)o(l[u],c[f])<=0?s[m++]=l[u++]:s[m++]=c[f++];for(;u<l.length;)s[m++]=l[u++];for(;f<c.length;)s[m++]=c[f++];return s}})(Kp||(Kp={}));let EN=class{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],n=this._content,r=!0;for(let i=0;i<n.length;i++){r&&(e.push(i),r=!1);let s=n.charAt(i);r=s==="\r"||s===`
`,s==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}r&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let n=this.getLineOffsets(),r=0,i=n.length;if(i===0)return re.create(0,e);for(;r<i;){let o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}let s=r-1;return re.create(s,e-n[s])}offsetAt(e){let n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;let r=n[e.line],i=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,i),r)}get lineCount(){return this.getLineOffsets().length}};var w;(function(t){const e=Object.prototype.toString;function n(g){return typeof g<"u"}t.defined=n;function r(g){return typeof g>"u"}t.undefined=r;function i(g){return g===!0||g===!1}t.boolean=i;function s(g){return e.call(g)==="[object String]"}t.string=s;function o(g){return e.call(g)==="[object Number]"}t.number=o;function a(g,d,_){return e.call(g)==="[object Number]"&&d<=g&&g<=_}t.numberRange=a;function l(g){return e.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}t.integer=l;function c(g){return e.call(g)==="[object Number]"&&0<=g&&g<=2147483647}t.uinteger=c;function u(g){return e.call(g)==="[object Function]"}t.func=u;function f(g){return g!==null&&typeof g=="object"}t.objectLiteral=f;function m(g,d){return Array.isArray(g)&&g.every(d)}t.typedArray=m})(w||(w={}));var PN=Object.freeze({__proto__:null,get AnnotatedTextEdit(){return mn},get ChangeAnnotation(){return ar},get ChangeAnnotationIdentifier(){return Xe},get CodeAction(){return kp},get CodeActionContext(){return $p},get CodeActionKind(){return Tp},get CodeActionTriggerKind(){return Is},get CodeDescription(){return Zf},get CodeLens(){return wp},get Color(){return Bl},get ColorInformation(){return zf},get ColorPresentation(){return Vf},get Command(){return hr},get CompletionItem(){return cp},get CompletionItemKind(){return rp},get CompletionItemLabelDetails(){return lp},get CompletionItemTag(){return sp},get CompletionList(){return up},get CreateFile(){return Ur},get DeleteFile(){return Br},get Diagnostic(){return As},get DiagnosticRelatedInformation(){return jl},get DiagnosticSeverity(){return Jf},get DiagnosticTag(){return Qf},get DocumentHighlight(){return mp},get DocumentHighlightKind(){return hp},get DocumentLink(){return Sp},get DocumentSymbol(){return Rp},get DocumentUri(){return qf},EOL:AN,get FoldingRange(){return Xf},get FoldingRangeKind(){return Yf},get FormattingOptions(){return bp},get Hover(){return dp},get InlayHint(){return xp},get InlayHintKind(){return Gl},get InlayHintLabelPart(){return Wl},get InlineCompletionContext(){return Bp},get InlineCompletionItem(){return Lp},get InlineCompletionList(){return Fp},get InlineCompletionTriggerKind(){return Up},get InlineValueContext(){return Dp},get InlineValueEvaluatableExpression(){return Op},get InlineValueText(){return Np},get InlineValueVariableLookup(){return Ip},get InsertReplaceEdit(){return op},get InsertTextFormat(){return ip},get InsertTextMode(){return ap},get Location(){return Cs},get LocationLink(){return Wf},get MarkedString(){return Ns},get MarkupContent(){return jr},get MarkupKind(){return ql},get OptionalVersionedTextDocumentIdentifier(){return Ps},get ParameterInformation(){return fp},get Position(){return re},get Range(){return Q},get RenameFile(){return Hr},get SelectedCompletionInfo(){return Hp},get SelectionRange(){return Cp},get SemanticTokenModifiers(){return Ep},get SemanticTokenTypes(){return Ap},get SemanticTokens(){return Pp},get SignatureInformation(){return pp},get StringValue(){return Mp},get SymbolInformation(){return _p},get SymbolKind(){return gp},get SymbolTag(){return yp},get TextDocument(){return Kp},get TextDocumentEdit(){return Es},get TextDocumentIdentifier(){return ep},get TextDocumentItem(){return np},get TextEdit(){return Kt},get URI(){return Hl},get VersionedTextDocumentIdentifier(){return tp},WorkspaceChange:CN,get WorkspaceEdit(){return Kl},get WorkspaceFolder(){return jp},get WorkspaceSymbol(){return vp},get integer(){return Gf},get uinteger(){return Ss}});class NN{constructor(){this.nodeStack=[]}get current(){var e;return(e=this.nodeStack[this.nodeStack.length-1])!==null&&e!==void 0?e:this.rootNode}buildRootNode(e){return this.rootNode=new WR(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){const n=new zh;return n.grammarSource=e,n.root=this.rootNode,this.current.content.push(n),this.nodeStack.push(n),n}buildLeafNode(e,n){const r=new qp(e.startOffset,e.image.length,bf(e),e.tokenType,!n);return r.grammarSource=n,r.root=this.rootNode,this.current.content.push(r),r}removeNode(e){const n=e.container;if(n){const r=n.content.indexOf(e);r>=0&&n.content.splice(r,1)}}addHiddenNodes(e){const n=[];for(const s of e){const o=new qp(s.startOffset,s.image.length,bf(s),s.tokenType,!0);o.root=this.rootNode,n.push(o)}let r=this.current,i=!1;if(r.content.length>0){r.content.push(...n);return}for(;r.container;){const s=r.container.content.indexOf(r);if(s>0){r.container.content.splice(s,0,...n),i=!0;break}r=r.container}i||this.rootNode.content.unshift(...n)}construct(e){const n=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=n;const r=this.nodeStack.pop();(r==null?void 0:r.content.length)===0&&this.removeNode(r)}}class GR{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,n;const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(n=this.container)===null||n===void 0?void 0:n.astNode;if(!r)throw new Error("This node has no associated AST element");return r}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class qp extends GR{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,n,r,i,s=!1){super(),this._hidden=s,this._offset=e,this._tokenType=i,this._length=n,this._range=r}}class zh extends GR{constructor(){super(...arguments),this.content=new Vh(this)}get children(){return this.content}get offset(){var e,n;return(n=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&n!==void 0?n:0}get length(){return this.end-this.offset}get end(){var e,n;return(n=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&n!==void 0?n:0}get range(){const e=this.firstNonHiddenNode,n=this.lastNonHiddenNode;if(e&&n){if(this._rangeCache===void 0){const{range:r}=e,{range:i}=n;this._rangeCache={start:r.start,end:i.end.line<r.start.line?r.start:i.end}}return this._rangeCache}else return{start:re.create(0,0),end:re.create(0,0)}}get firstNonHiddenNode(){for(const e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const n=this.content[e];if(!n.hidden)return n}return this.content[this.content.length-1]}}class Vh extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Vh.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,n,...r){return this.addParents(r),super.splice(e,n,...r)}addParents(e){for(const n of e)n.container=this.parent}}class WR extends zh{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}}const Gp=Symbol("Datatype");function Tu(t){return t.$type===Gp}const _g="​",zR=t=>t.endsWith(_g)?t:t+_g;class VR{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;const n=this.lexer.definition,r=e.LanguageMetaData.mode==="production";this.wrapper=new MN(n,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,n){this.wrapper.wrapOr(e,n)}optional(e,n){this.wrapper.wrapOption(e,n)}many(e,n){this.wrapper.wrapMany(e,n)}atLeastOne(e,n){this.wrapper.wrapAtLeastOne(e,n)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class IN extends VR{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new NN,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,n){const r=this.computeRuleType(e),i=this.wrapper.DEFINE_RULE(zR(e.name),this.startImplementation(r,n).bind(this));return this.allRules.set(e.name,i),e.entry&&(this.mainRule=i),i}computeRuleType(e){if(!e.fragment){if($v(e))return Gp;{const n=Bs(e);return n??e.name}}}parse(e,n={}){this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=n.rule?this.allRules.get(n.rule):this.mainRule;if(!i)throw new Error(n.rule?`No rule found with name '${n.rule}'`:"No main rule available.");const s=this.doParse(i);return this.nodeBuilder.addHiddenNodes(r.hidden),this.unorderedGroups.clear(),this.lexerResult=void 0,{value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors}}doParse(e){let n=e.call(this.wrapper,{});if(this.stack.length>0&&(n=this.construct()),n===void 0)throw new Error("No result from parser");if(this.stack.length>0)throw new Error("Parser stack is not empty after parsing");return n}startImplementation(e,n){return r=>{const i=!this.isRecording()&&e!==void 0;if(i){const s={$type:e};this.stack.push(s),e===Gp&&(s.value="")}return n(r),i?this.construct():void 0}}extractHiddenTokens(e){const n=this.lexerResult.hidden;if(!n.length)return[];const r=e.startOffset;for(let i=0;i<n.length;i++)if(n[i].startOffset>r)return n.splice(0,i);return n.splice(0,n.length)}consume(e,n,r){const i=this.wrapper.wrapConsume(e,n);if(!this.isRecording()&&this.isValidToken(i)){const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);const o=this.nodeBuilder.buildLeafNode(i,r),{assignment:a,isCrossRef:l}=this.getAssignment(r),c=this.current;if(a){const u=Ot(r)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,u,o,l)}else if(Tu(c)){let u=i.image;Ot(r)||(u=this.converter.convert(u,o).toString()),c.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,n,r,i,s){let o;!this.isRecording()&&!r&&(o=this.nodeBuilder.buildCompositeNode(i));let a;try{a=this.wrapper.wrapSubrule(e,n,s)}finally{this.isRecording()||(a===void 0&&!r&&(a=this.construct()),a!==void 0&&o&&o.length>0&&this.performSubruleAssignment(a,i,o))}}performSubruleAssignment(e,n,r){const{assignment:i,isCrossRef:s}=this.getAssignment(n);if(i)this.assign(i.operator,i.feature,e,r,s);else if(!i){const o=this.current;if(Tu(o))o.value+=e.toString();else if(typeof e=="object"&&e){const l=this.assignWithoutOverride(e,o);this.stack.pop(),this.stack.push(l)}}}action(e,n){if(!this.isRecording()){let r=this.current;if(n.feature&&n.operator){r=this.construct(),this.nodeBuilder.removeNode(r.$cstNode),this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);const s={$type:e};this.stack.push(s),this.assign(n.operator,n.feature,r,r.$cstNode,!1)}else r.$type=e}}construct(){if(this.isRecording())return;const e=this.current;return O$(e),this.nodeBuilder.construct(e),this.stack.pop(),Tu(e)?this.converter.convert(e.value,e.$cstNode):(uv(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){const n=xn(e,rn);this.assignmentMap.set(e,{assignment:n,isCrossRef:n?Hs(n.terminal):!1})}return this.assignmentMap.get(e)}assign(e,n,r,i,s){const o=this.current;let a;switch(s&&typeof r=="string"?a=this.linker.buildReference(o,n,i,r):a=r,e){case"=":{o[n]=a;break}case"?=":{o[n]=!0;break}case"+=":Array.isArray(o[n])||(o[n]=[]),o[n].push(a)}}assignWithoutOverride(e,n){for(const[i,s]of Object.entries(n)){const o=e[i];o===void 0?e[i]=s:Array.isArray(o)&&Array.isArray(s)&&(s.push(...o),e[i]=s)}const r=e.$cstNode;return r&&(r.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}}class ON{buildMismatchTokenMessage(e){return Pr.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Pr.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Pr.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Pr.buildEarlyExitMessage(e)}}class YR extends ON{buildMismatchTokenMessage({expected:e,actual:n}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${n.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}}class DN extends VR{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();const n=this.lexer.tokenize(e,{mode:"partial"});return this.tokens=n.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,n){const r=this.wrapper.DEFINE_RULE(zR(e.name),this.startImplementation(n).bind(this));return this.allRules.set(e.name,r),e.entry&&(this.mainRule=r),r}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return n=>{const r=this.keepStackSize();try{e(n)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){const e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,n,r){this.wrapper.wrapConsume(e,n),this.isRecording()||(this.lastElementStack=[...this.elementStack,r],this.nextTokenIndex=this.currIdx+1)}subrule(e,n,r,i,s){this.before(i),this.wrapper.wrapSubrule(e,n,s),this.after(i)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){const n=this.elementStack.lastIndexOf(e);n>=0&&this.elementStack.splice(n)}}get currIdx(){return this.wrapper.currIdx}}const xN={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new YR};class MN extends HP{constructor(e,n){const r=n&&"maxLookahead"in n;super(e,Object.assign(Object.assign(Object.assign({},xN),{lookaheadStrategy:r?new Bh({maxLookahead:n.maxLookahead}):new aN({logging:n.skipValidations?()=>{}:void 0})}),n))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,n,r){return this.RULE(e,n,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,n){return this.consume(e,n,void 0)}wrapSubrule(e,n,r){return this.subrule(e,n,{ARGS:[r]})}wrapOr(e,n){this.or(e,n)}wrapOption(e,n){this.option(e,n)}wrapMany(e,n){this.many(e,n)}wrapAtLeastOne(e,n){this.atLeastOne(e,n)}}function XR(t,e,n){return LN({parser:e,tokens:n,ruleNames:new Map},t),e}function LN(t,e){const n=hv(e,!1),r=Te(e.rules).filter(it).filter(i=>n.has(i));for(const i of r){const s=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(i,mr(s,i.definition))}}function mr(t,e,n=!1){let r;if(Ot(e))r=qN(t,e);else if(Us(e))r=FN(t,e);else if(rn(e))r=mr(t,e.terminal);else if(Hs(e))r=JR(t,e);else if(Tn(e))r=UN(t,e);else if(hh(e))r=BN(t,e);else if(mh(e))r=jN(t,e);else if(ur(e))r=KN(t,e);else if(b$(e)){const i=t.consume++;r=()=>t.parser.consume(i,zn,e)}else throw new rv(e.$cstNode,`Unexpected element type: ${e.$type}`);return QR(t,n?void 0:zl(e),r,e.cardinality)}function FN(t,e){const n=pc(e);return()=>t.parser.action(n,e)}function UN(t,e){const n=e.rule.ref;if(it(n)){const r=t.subrule++,i=n.fragment,s=e.arguments.length>0?HN(n,e.arguments):()=>({});return o=>t.parser.subrule(r,ZR(t,n),i,e,s(o))}else if(Jn(n)){const r=t.consume++,i=Wp(t,n.name);return()=>t.parser.consume(r,i,e)}else if(n)Fs();else throw new rv(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)}function HN(t,e){const n=e.map(r=>gn(r.value));return r=>{const i={};for(let s=0;s<n.length;s++){const o=t.parameters[s],a=n[s];i[o.name]=a(r)}return i}}function gn(t){if(v$(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)||n(r)}else if(_$(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)&&n(r)}else if(R$(t)){const e=gn(t.value);return n=>!e(n)}else if(T$(t)){const e=t.parameter.ref.name;return n=>n!==void 0&&n[e]===!0}else if(y$(t)){const e=!!t.true;return()=>e}Fs()}function BN(t,e){if(e.elements.length===1)return mr(t,e.elements[0]);{const n=[];for(const i of e.elements){const s={ALT:mr(t,i,!0)},o=zl(i);o&&(s.GATE=gn(o)),n.push(s)}const r=t.or++;return i=>t.parser.alternatives(r,n.map(s=>{const o={ALT:()=>s.ALT(i)},a=s.GATE;return a&&(o.GATE=()=>a(i)),o}))}}function jN(t,e){if(e.elements.length===1)return mr(t,e.elements[0]);const n=[];for(const a of e.elements){const l={ALT:mr(t,a,!0)},c=zl(a);c&&(l.GATE=gn(c)),n.push(l)}const r=t.or++,i=(a,l)=>{const c=l.getRuleStack().join("-");return`uGroup_${a}_${c}`},s=a=>t.parser.alternatives(r,n.map((l,c)=>{const u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(l.ALT(a),!f.isRecording()){const g=i(r,f);f.unorderedGroups.get(g)||f.unorderedGroups.set(g,[]);const d=f.unorderedGroups.get(g);typeof(d==null?void 0:d[c])>"u"&&(d[c]=!0)}};const m=l.GATE;return m?u.GATE=()=>m(a):u.GATE=()=>{const g=f.unorderedGroups.get(i(r,f));return!(g!=null&&g[c])},u})),o=QR(t,zl(e),s,"*");return a=>{o(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(r,t.parser))}}function KN(t,e){const n=e.elements.map(r=>mr(t,r));return r=>n.forEach(i=>i(r))}function zl(t){if(ur(t))return t.guardCondition}function JR(t,e,n=e.terminal){if(n)if(Tn(n)&&it(n.rule.ref)){const r=n.rule.ref,i=t.subrule++;return s=>t.parser.subrule(i,ZR(t,r),!1,e,s)}else if(Tn(n)&&Jn(n.rule.ref)){const r=t.consume++,i=Wp(t,n.rule.ref.name);return()=>t.parser.consume(r,i,e)}else if(Ot(n)){const r=t.consume++,i=Wp(t,n.value);return()=>t.parser.consume(r,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);const r=Rv(e.type.ref),i=r==null?void 0:r.terminal;if(!i)throw new Error("Could not find name assignment for type: "+pc(e.type.ref));return JR(t,e,i)}}function qN(t,e){const n=t.consume++,r=t.tokens[e.value];if(!r)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(n,r,e)}function QR(t,e,n,r){const i=e&&gn(e);if(!r)if(i){const s=t.or++;return o=>t.parser.alternatives(s,[{ALT:()=>n(o),GATE:()=>i(o)},{ALT:pg(),GATE:()=>!i(o)}])}else return n;if(r==="*"){const s=t.many++;return o=>t.parser.many(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else if(r==="+"){const s=t.many++;if(i){const o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>t.parser.atLeastOne(s,{DEF:()=>n(a)}),GATE:()=>i(a)},{ALT:pg(),GATE:()=>!i(a)}])}else return o=>t.parser.atLeastOne(s,{DEF:()=>n(o)})}else if(r==="?"){const s=t.optional++;return o=>t.parser.optional(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else Fs()}function ZR(t,e){const n=GN(t,e),r=t.parser.getRule(n);if(!r)throw new Error(`Rule "${n}" not found."`);return r}function GN(t,e){if(it(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let n=e,r=n.$container,i=e.$type;for(;!it(r);)(ur(r)||hh(r)||mh(r))&&(i=r.elements.indexOf(n).toString()+":"+i),n=r,r=r.$container;return i=r.name+":"+i,t.ruleNames.set(e,i),i}}function Wp(t,e){const n=t.tokens[e];if(!n)throw new Error(`Token "${e}" not found."`);return n}function WN(t){const e=t.Grammar,n=t.parser.Lexer,r=new DN(t);return XR(e,r,n.definition),r.finalize(),r}function zN(t){const e=VN(t);return e.finalize(),e}function VN(t){const e=t.Grammar,n=t.parser.Lexer,r=new IN(t);return XR(e,r,n.definition)}class YN{constructor(){this.diagnostics=[]}buildTokens(e,n){const r=Te(hv(e,!1)),i=this.buildTerminalTokens(r),s=this.buildKeywordTokens(r,i,n);return s.push(...i),s}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){const e=[...this.diagnostics];return this.diagnostics=[],e}buildTerminalTokens(e){return e.filter(Jn).filter(n=>!n.fragment).map(n=>this.buildTerminalToken(n)).toArray()}buildTerminalToken(e){const n=hc(e),r=this.requiresCustomPattern(n)?this.regexPatternFunction(n):n,i={name:e.name,PATTERN:r};return typeof r=="function"&&(i.LINE_BREAKS=!0),e.hidden&&(i.GROUP=pv(n)?ht.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){const n=new RegExp(e,e.flags+"y");return(r,i)=>(n.lastIndex=i,n.exec(r))}buildKeywordTokens(e,n,r){return e.filter(it).flatMap(i=>tn(i).filter(Ot)).distinct(i=>i.value).toArray().sort((i,s)=>s.value.length-i.value.length).map(i=>this.buildKeywordToken(i,n,!!(r!=null&&r.caseInsensitive)))}buildKeywordToken(e,n,r){const i=this.buildKeywordPattern(e,r),s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,n)};return typeof i=="function"&&(s.LINE_BREAKS=!0),s}buildKeywordPattern(e,n){return n?new RegExp(fc(e.value),"i"):e.value}findLongerAlt(e,n){return n.reduce((r,i)=>{const s=i==null?void 0:i.PATTERN;return s!=null&&s.source&&j$("^"+s.source+"$",e.value)&&r.push(i),r},[])}}class XN{convert(e,n){let r=n.grammarSource;if(Hs(r)&&(r=gv(r)),Tn(r)){const i=r.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,n)}return e}runConverter(e,n,r){var i;switch(e.name.toUpperCase()){case"INT":return pn.convertInt(n);case"STRING":return pn.convertString(n);case"ID":return pn.convertID(n)}switch((i=X$(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return pn.convertNumber(n);case"boolean":return pn.convertBoolean(n);case"bigint":return pn.convertBigint(n);case"date":return pn.convertDate(n);default:return n}}}var pn;(function(t){function e(c){let u="";for(let f=1;f<c.length-1;f++){const m=c.charAt(f);if(m==="\\"){const g=c.charAt(++f);u+=n(g)}else u+=m}return u}t.convertString=e;function n(c){switch(c){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return c}}function r(c){return c.charAt(0)==="^"?c.substring(1):c}t.convertID=r;function i(c){return parseInt(c)}t.convertInt=i;function s(c){return BigInt(c)}t.convertBigint=s;function o(c){return new Date(c)}t.convertDate=o;function a(c){return Number(c)}t.convertNumber=a;function l(c){return c.toLowerCase()==="true"}t.convertBoolean=l})(pn||(pn={}));var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function JN(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Yn={},Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});let zp;function Vp(){if(zp===void 0)throw new Error("No runtime abstraction layer installed");return zp}(function(t){function e(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");zp=n}t.install=e})(Vp||(Vp={}));Pn.default=Vp;var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.stringArray=Fe.array=Fe.func=Fe.error=Fe.number=Fe.string=Fe.boolean=void 0;function QN(t){return t===!0||t===!1}Fe.boolean=QN;function eT(t){return typeof t=="string"||t instanceof String}Fe.string=eT;function ZN(t){return typeof t=="number"||t instanceof Number}Fe.number=ZN;function e0(t){return t instanceof Error}Fe.error=e0;function t0(t){return typeof t=="function"}Fe.func=t0;function tT(t){return Array.isArray(t)}Fe.array=tT;function n0(t){return tT(t)&&t.every(e=>eT(e))}Fe.stringArray=n0;var on={};Object.defineProperty(on,"__esModule",{value:!0});var nT=on.Emitter=on.Event=void 0;const r0=Pn;var vg;(function(t){const e={dispose(){}};t.None=function(){return e}})(vg||(on.Event=vg={}));class i0{add(e,n=null,r){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(n),Array.isArray(r)&&r.push({dispose:()=>this.remove(e,n)})}remove(e,n=null){if(!this._callbacks)return;let r=!1;for(let i=0,s=this._callbacks.length;i<s;i++)if(this._callbacks[i]===e)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else r=!0;if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];const n=[],r=this._callbacks.slice(0),i=this._contexts.slice(0);for(let s=0,o=r.length;s<o;s++)try{n.push(r[s].apply(i[s],e))}catch(a){(0,r0.default)().console.error(a)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}}class Oc{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,n,r)=>{this._callbacks||(this._callbacks=new i0),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,n);const i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,n),i.dispose=Oc._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}}nT=on.Emitter=Oc;Oc._noop=function(){};var le;Object.defineProperty(Yn,"__esModule",{value:!0});var Yh=Yn.CancellationTokenSource=le=Yn.CancellationToken=void 0;const s0=Pn,o0=Fe,Yp=on;var Vl;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Yp.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Yp.Event.None});function e(n){const r=n;return r&&(r===t.None||r===t.Cancelled||o0.boolean(r.isCancellationRequested)&&!!r.onCancellationRequested)}t.is=e})(Vl||(le=Yn.CancellationToken=Vl={}));const a0=Object.freeze(function(t,e){const n=(0,s0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){n.dispose()}}});class Rg{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?a0:(this._emitter||(this._emitter=new Yp.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}}class l0{get token(){return this._token||(this._token=new Rg),this._token}cancel(){this._token?this._token.cancel():this._token=Vl.Cancelled}dispose(){this._token?this._token instanceof Rg&&this._token.dispose():this._token=Vl.None}}Yh=Yn.CancellationTokenSource=l0;function c0(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}let _l=0,u0=10;function d0(){return _l=performance.now(),new Yh}const Yl=Symbol("OperationCancelled");function Zs(t){return t===Yl}async function ot(t){if(t===le.None)return;const e=performance.now();if(e-_l>=u0&&(_l=e,await c0(),_l=performance.now()),t.isCancellationRequested)throw Yl}class Xh{constructor(){this.promise=new Promise((e,n)=>{this.resolve=r=>(e(r),this),this.reject=r=>(n(r),this)})}}class Os{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){const n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){for(const r of e)if(Os.isIncremental(r)){const i=iT(r.range),s=this.offsetAt(i.start),o=this.offsetAt(i.end);this._content=this._content.substring(0,s)+r.text+this._content.substring(o,this._content.length);const a=Math.max(i.start.line,0),l=Math.max(i.end.line,0);let c=this._lineOffsets;const u=Tg(r.text,!1,s);if(l-a===u.length)for(let m=0,g=u.length;m<g;m++)c[m+a+1]=u[m];else u.length<1e4?c.splice(a+1,l-a,...u):this._lineOffsets=c=c.slice(0,a+1).concat(u,c.slice(l+1));const f=r.text.length-(o-s);if(f!==0)for(let m=a+1+u.length,g=c.length;m<g;m++)c[m]=c[m]+f}else if(Os.isFull(r))this._content=r.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=Tg(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);const n=this.getLineOffsets();let r=0,i=n.length;if(i===0)return{line:0,character:e};for(;r<i;){const o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}const s=r-1;return e=this.ensureBeforeEOL(e,n[s]),{line:s,character:e-n[s]}}offsetAt(e){const n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;const r=n[e.line];if(e.character<=0)return r;const i=e.line+1<n.length?n[e.line+1]:this._content.length,s=Math.min(r+e.character,i);return this.ensureBeforeEOL(s,r)}ensureBeforeEOL(e,n){for(;e>n&&rT(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}}var Xl;(function(t){function e(i,s,o,a){return new Os(i,s,o,a)}t.create=e;function n(i,s,o){if(i instanceof Os)return i.update(s,o),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=n;function r(i,s){const o=i.getText(),a=Xp(s.map(f0),(u,f)=>{const m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m});let l=0;const c=[];for(const u of a){const f=i.offsetAt(u.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&c.push(o.substring(l,f)),u.newText.length&&c.push(u.newText),l=i.offsetAt(u.range.end)}return c.push(o.substr(l)),c.join("")}t.applyEdits=r})(Xl||(Xl={}));function Xp(t,e){if(t.length<=1)return t;const n=t.length/2|0,r=t.slice(0,n),i=t.slice(n);Xp(r,e),Xp(i,e);let s=0,o=0,a=0;for(;s<r.length&&o<i.length;)e(r[s],i[o])<=0?t[a++]=r[s++]:t[a++]=i[o++];for(;s<r.length;)t[a++]=r[s++];for(;o<i.length;)t[a++]=i[o++];return t}function Tg(t,e,n=0){const r=e?[n]:[];for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);rT(s)&&(s===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,r.push(n+i+1))}return r}function rT(t){return t===13||t===10}function iT(t){const e=t.start,n=t.end;return e.line>n.line||e.line===n.line&&e.character>n.character?{start:n,end:e}:t}function f0(t){const e=iT(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var sT;(()=>{var t={470:i=>{function s(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function o(l,c){for(var u,f="",m=0,g=-1,d=0,_=0;_<=l.length;++_){if(_<l.length)u=l.charCodeAt(_);else{if(u===47)break;u=47}if(u===47){if(!(g===_-1||d===1))if(g!==_-1&&d===2){if(f.length<2||m!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var T=f.lastIndexOf("/");if(T!==f.length-1){T===-1?(f="",m=0):m=(f=f.slice(0,T)).length-1-f.lastIndexOf("/"),g=_,d=0;continue}}else if(f.length===2||f.length===1){f="",m=0,g=_,d=0;continue}}c&&(f.length>0?f+="/..":f="..",m=2)}else f.length>0?f+="/"+l.slice(g+1,_):f=l.slice(g+1,_),m=_-g-1;g=_,d=0}else u===46&&d!==-1?++d:d=-1}return f}var a={resolve:function(){for(var l,c="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var m;f>=0?m=arguments[f]:(l===void 0&&(l=process.cwd()),m=l),s(m),m.length!==0&&(c=m+"/"+c,u=m.charCodeAt(0)===47)}return c=o(c,!u),u?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(l){if(s(l),l.length===0)return".";var c=l.charCodeAt(0)===47,u=l.charCodeAt(l.length-1)===47;return(l=o(l,!c)).length!==0||c||(l="."),l.length>0&&u&&(l+="/"),c?"/"+l:l},isAbsolute:function(l){return s(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,c=0;c<arguments.length;++c){var u=arguments[c];s(u),u.length>0&&(l===void 0?l=u:l+="/"+u)}return l===void 0?".":a.normalize(l)},relative:function(l,c){if(s(l),s(c),l===c||(l=a.resolve(l))===(c=a.resolve(c)))return"";for(var u=1;u<l.length&&l.charCodeAt(u)===47;++u);for(var f=l.length,m=f-u,g=1;g<c.length&&c.charCodeAt(g)===47;++g);for(var d=c.length-g,_=m<d?m:d,T=-1,v=0;v<=_;++v){if(v===_){if(d>_){if(c.charCodeAt(g+v)===47)return c.slice(g+v+1);if(v===0)return c.slice(g+v)}else m>_&&(l.charCodeAt(u+v)===47?T=v:v===0&&(T=0));break}var p=l.charCodeAt(u+v);if(p!==c.charCodeAt(g+v))break;p===47&&(T=v)}var h="";for(v=u+T+1;v<=f;++v)v!==f&&l.charCodeAt(v)!==47||(h.length===0?h+="..":h+="/..");return h.length>0?h+c.slice(g+T):(g+=T,c.charCodeAt(g)===47&&++g,c.slice(g))},_makeLong:function(l){return l},dirname:function(l){if(s(l),l.length===0)return".";for(var c=l.charCodeAt(0),u=c===47,f=-1,m=!0,g=l.length-1;g>=1;--g)if((c=l.charCodeAt(g))===47){if(!m){f=g;break}}else m=!1;return f===-1?u?"/":".":u&&f===1?"//":l.slice(0,f)},basename:function(l,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');s(l);var u,f=0,m=-1,g=!0;if(c!==void 0&&c.length>0&&c.length<=l.length){if(c.length===l.length&&c===l)return"";var d=c.length-1,_=-1;for(u=l.length-1;u>=0;--u){var T=l.charCodeAt(u);if(T===47){if(!g){f=u+1;break}}else _===-1&&(g=!1,_=u+1),d>=0&&(T===c.charCodeAt(d)?--d==-1&&(m=u):(d=-1,m=_))}return f===m?m=_:m===-1&&(m=l.length),l.slice(f,m)}for(u=l.length-1;u>=0;--u)if(l.charCodeAt(u)===47){if(!g){f=u+1;break}}else m===-1&&(g=!1,m=u+1);return m===-1?"":l.slice(f,m)},extname:function(l){s(l);for(var c=-1,u=0,f=-1,m=!0,g=0,d=l.length-1;d>=0;--d){var _=l.charCodeAt(d);if(_!==47)f===-1&&(m=!1,f=d+1),_===46?c===-1?c=d:g!==1&&(g=1):c!==-1&&(g=-1);else if(!m){u=d+1;break}}return c===-1||f===-1||g===0||g===1&&c===f-1&&c===u+1?"":l.slice(c,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(c,u){var f=u.dir||u.root,m=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+m:f+"/"+m:m}(0,l)},parse:function(l){s(l);var c={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return c;var u,f=l.charCodeAt(0),m=f===47;m?(c.root="/",u=1):u=0;for(var g=-1,d=0,_=-1,T=!0,v=l.length-1,p=0;v>=u;--v)if((f=l.charCodeAt(v))!==47)_===-1&&(T=!1,_=v+1),f===46?g===-1?g=v:p!==1&&(p=1):g!==-1&&(p=-1);else if(!T){d=v+1;break}return g===-1||_===-1||p===0||p===1&&g===_-1&&g===d+1?_!==-1&&(c.base=c.name=d===0&&m?l.slice(1,_):l.slice(d,_)):(d===0&&m?(c.name=l.slice(1,g),c.base=l.slice(1,_)):(c.name=l.slice(d,g),c.base=l.slice(d,_)),c.ext=l.slice(g,_)),d>0?c.dir=l.slice(0,d-1):m&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function n(i){var s=e[i];if(s!==void 0)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(i,s)=>{for(var o in s)n.o(s,o)&&!n.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:s[o]})},n.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{let i;n.r(r),n.d(r,{URI:()=>m,Utils:()=>Ee}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);const s=/^\w[\w\d+.-]*$/,o=/^\//,a=/^\/\//;function l(P,A){if(!P.scheme&&A)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${P.authority}", path: "${P.path}", query: "${P.query}", fragment: "${P.fragment}"}`);if(P.scheme&&!s.test(P.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(P.path){if(P.authority){if(!o.test(P.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(P.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}const c="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class m{constructor(A,k,C,N,E,D=!1){Dn(this,"scheme");Dn(this,"authority");Dn(this,"path");Dn(this,"query");Dn(this,"fragment");typeof A=="object"?(this.scheme=A.scheme||c,this.authority=A.authority||c,this.path=A.path||c,this.query=A.query||c,this.fragment=A.fragment||c):(this.scheme=function(Ue,x){return Ue||x?Ue:"file"}(A,D),this.authority=k||c,this.path=function(Ue,x){switch(Ue){case"https":case"http":case"file":x?x[0]!==u&&(x=u+x):x=u}return x}(this.scheme,C||c),this.query=N||c,this.fragment=E||c,l(this,D))}static isUri(A){return A instanceof m||!!A&&typeof A.authority=="string"&&typeof A.fragment=="string"&&typeof A.path=="string"&&typeof A.query=="string"&&typeof A.scheme=="string"&&typeof A.fsPath=="string"&&typeof A.with=="function"&&typeof A.toString=="function"}get fsPath(){return p(this)}with(A){if(!A)return this;let{scheme:k,authority:C,path:N,query:E,fragment:D}=A;return k===void 0?k=this.scheme:k===null&&(k=c),C===void 0?C=this.authority:C===null&&(C=c),N===void 0?N=this.path:N===null&&(N=c),E===void 0?E=this.query:E===null&&(E=c),D===void 0?D=this.fragment:D===null&&(D=c),k===this.scheme&&C===this.authority&&N===this.path&&E===this.query&&D===this.fragment?this:new d(k,C,N,E,D)}static parse(A,k=!1){const C=f.exec(A);return C?new d(C[2]||c,W(C[4]||c),W(C[5]||c),W(C[7]||c),W(C[9]||c),k):new d(c,c,c,c,c)}static file(A){let k=c;if(i&&(A=A.replace(/\\/g,u)),A[0]===u&&A[1]===u){const C=A.indexOf(u,2);C===-1?(k=A.substring(2),A=u):(k=A.substring(2,C),A=A.substring(C)||u)}return new d("file",k,A,c,c)}static from(A){const k=new d(A.scheme,A.authority,A.path,A.query,A.fragment);return l(k,!0),k}toString(A=!1){return h(this,A)}toJSON(){return this}static revive(A){if(A){if(A instanceof m)return A;{const k=new d(A);return k._formatted=A.external,k._fsPath=A._sep===g?A.fsPath:null,k}}return A}}const g=i?1:void 0;class d extends m{constructor(){super(...arguments);Dn(this,"_formatted",null);Dn(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=p(this)),this._fsPath}toString(k=!1){return k?h(this,!0):(this._formatted||(this._formatted=h(this,!1)),this._formatted)}toJSON(){const k={$mid:1};return this._fsPath&&(k.fsPath=this._fsPath,k._sep=g),this._formatted&&(k.external=this._formatted),this.path&&(k.path=this.path),this.scheme&&(k.scheme=this.scheme),this.authority&&(k.authority=this.authority),this.query&&(k.query=this.query),this.fragment&&(k.fragment=this.fragment),k}}const _={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function T(P,A,k){let C,N=-1;for(let E=0;E<P.length;E++){const D=P.charCodeAt(E);if(D>=97&&D<=122||D>=65&&D<=90||D>=48&&D<=57||D===45||D===46||D===95||D===126||A&&D===47||k&&D===91||k&&D===93||k&&D===58)N!==-1&&(C+=encodeURIComponent(P.substring(N,E)),N=-1),C!==void 0&&(C+=P.charAt(E));else{C===void 0&&(C=P.substr(0,E));const Ue=_[D];Ue!==void 0?(N!==-1&&(C+=encodeURIComponent(P.substring(N,E)),N=-1),C+=Ue):N===-1&&(N=E)}}return N!==-1&&(C+=encodeURIComponent(P.substring(N))),C!==void 0?C:P}function v(P){let A;for(let k=0;k<P.length;k++){const C=P.charCodeAt(k);C===35||C===63?(A===void 0&&(A=P.substr(0,k)),A+=_[C]):A!==void 0&&(A+=P[k])}return A!==void 0?A:P}function p(P,A){let k;return k=P.authority&&P.path.length>1&&P.scheme==="file"?`//${P.authority}${P.path}`:P.path.charCodeAt(0)===47&&(P.path.charCodeAt(1)>=65&&P.path.charCodeAt(1)<=90||P.path.charCodeAt(1)>=97&&P.path.charCodeAt(1)<=122)&&P.path.charCodeAt(2)===58?P.path[1].toLowerCase()+P.path.substr(2):P.path,i&&(k=k.replace(/\//g,"\\")),k}function h(P,A){const k=A?v:T;let C="",{scheme:N,authority:E,path:D,query:Ue,fragment:x}=P;if(N&&(C+=N,C+=":"),(E||N==="file")&&(C+=u,C+=u),E){let b=E.indexOf("@");if(b!==-1){const te=E.substr(0,b);E=E.substr(b+1),b=te.lastIndexOf(":"),b===-1?C+=k(te,!1,!1):(C+=k(te.substr(0,b),!1,!1),C+=":",C+=k(te.substr(b+1),!1,!0)),C+="@"}E=E.toLowerCase(),b=E.lastIndexOf(":"),b===-1?C+=k(E,!1,!0):(C+=k(E.substr(0,b),!1,!0),C+=E.substr(b))}if(D){if(D.length>=3&&D.charCodeAt(0)===47&&D.charCodeAt(2)===58){const b=D.charCodeAt(1);b>=65&&b<=90&&(D=`/${String.fromCharCode(b+32)}:${D.substr(3)}`)}else if(D.length>=2&&D.charCodeAt(1)===58){const b=D.charCodeAt(0);b>=65&&b<=90&&(D=`${String.fromCharCode(b+32)}:${D.substr(2)}`)}C+=k(D,!0,!1)}return Ue&&(C+="?",C+=k(Ue,!1,!1)),x&&(C+="#",C+=A?x:T(x,!1,!1)),C}function $(P){try{return decodeURIComponent(P)}catch{return P.length>3?P.substr(0,3)+$(P.substr(3)):P}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function W(P){return P.match(F)?P.replace(F,A=>$(A)):P}var J=n(470);const ke=J.posix||J,Ae="/";var Ee;(function(P){P.joinPath=function(A,...k){return A.with({path:ke.join(A.path,...k)})},P.resolvePath=function(A,...k){let C=A.path,N=!1;C[0]!==Ae&&(C=Ae+C,N=!0);let E=ke.resolve(C,...k);return N&&E[0]===Ae&&!A.authority&&(E=E.substring(1)),A.with({path:E})},P.dirname=function(A){if(A.path.length===0||A.path===Ae)return A;let k=ke.dirname(A.path);return k.length===1&&k.charCodeAt(0)===46&&(k=""),A.with({path:k})},P.basename=function(A){return ke.basename(A.path)},P.extname=function(A){return ke.extname(A.path)}})(Ee||(Ee={}))})(),sT=r})();const{URI:at,Utils:_i}=sT;var pe;(function(t){t.basename=_i.basename,t.dirname=_i.dirname,t.extname=_i.extname,t.joinPath=_i.joinPath,t.resolvePath=_i.resolvePath;const e=typeof process=="object"&&(process==null?void 0:process.platform)==="win32";function n(s,o){return(s==null?void 0:s.toString())===(o==null?void 0:o.toString())}t.equals=n;function r(s,o){const a=typeof s=="string"?at.parse(s).path:s.path,l=typeof o=="string"?at.parse(o).path:o.path,c=a.split("/").filter(d=>d.length>0),u=l.split("/").filter(d=>d.length>0);if(e){const d=/^[A-Z]:$/;if(c[0]&&d.test(c[0])&&(c[0]=c[0].toLowerCase()),u[0]&&d.test(u[0])&&(u[0]=u[0].toLowerCase()),c[0]!==u[0])return l.substring(1)}let f=0;for(;f<c.length&&c[f]===u[f];f++);const m="../".repeat(c.length-f),g=u.slice(f).join("/");return m+g}t.relative=r;function i(s){return at.parse(s.toString()).toString()}t.normalize=i})(pe||(pe={}));var B;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(B||(B={}));class p0{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,n=le.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,n)}fromTextDocument(e,n,r){return n=n??at.parse(e.uri),le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromString(e,n,r){return le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromModel(e,n){return this.create(n,{$model:e})}create(e,n,r){if(typeof n=="string"){const i=this.parse(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else if("$model"in n){const i={value:n.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}async createAsync(e,n,r){if(typeof n=="string"){const i=await this.parseAsync(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else{const i=await this.parseAsync(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}createLangiumDocument(e,n,r,i){let s;if(r)s={parseResult:e,uri:n,state:B.Parsed,references:[],textDocument:r};else{const o=this.createTextDocumentGetter(n,i);s={parseResult:e,uri:n,state:B.Parsed,references:[],get textDocument(){return o()}}}return e.value.$document=s,s}async update(e,n){var r,i;const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText,o=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=o?o.getText():await this.fileSystemProvider.readFile(e.uri);if(o)Object.defineProperty(e,"textDocument",{value:o});else{const l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return s!==a&&(e.parseResult=await this.parseAsync(e.uri,a,n),e.parseResult.value.$document=e),e.state=B.Parsed,e}parse(e,n,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n,r)}parseAsync(e,n,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n,r)}createTextDocumentGetter(e,n){const r=this.serviceRegistry;let i;return()=>i??(i=Xl.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,n??""))}}class h0{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return Te(this.documentMap.values())}addDocument(e){const n=e.uri.toString();if(this.documentMap.has(n))throw new Error(`A document with the URI '${n}' is already present.`);this.documentMap.set(n,e)}getDocument(e){const n=e.toString();return this.documentMap.get(n)}async getOrCreateDocument(e,n){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,n),this.addDocument(r),r)}createDocument(e,n,r){if(r)return this.langiumDocumentFactory.fromString(n,e,r).then(i=>(this.addDocument(i),i));{const i=this.langiumDocumentFactory.fromString(n,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(this.serviceRegistry.getServices(e).references.Linker.unlink(r),r.state=B.Changed,r.precomputedScopes=void 0,r.diagnostics=void 0),r}deleteDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(r.state=B.Changed,this.documentMap.delete(n)),r}}const $u=Symbol("ref_resolving");class oT{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,n=le.None){for(const r of or(e.parseResult.value))await ot(n),cv(r).forEach(i=>this.doLink(i,e))}doLink(e,n){var r;const i=e.reference;if(i._ref===void 0){i._ref=$u;try{const s=this.getCandidate(e);if(ul(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){const o=this.loadAstNode(s);i._ref=o??this.createLinkingError(e,s)}else i._ref=void 0}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const o=(r=s.message)!==null&&r!==void 0?r:String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${o}`})}n.references.push(i)}}unlink(e){for(const n of e.references)delete n._ref,delete n._nodeDescription;e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,n,r,i){const s=this,o={$refNode:r,$refText:i,get ref(){var a;if(Je(this._ref))return this._ref;if(u$(this._nodeDescription)){const l=s.loadAstNode(this._nodeDescription);this._ref=l??s.createLinkingError({reference:o,container:e,property:n},this._nodeDescription)}else if(this._ref===void 0){this._ref=$u;const l=ir(e).$document,c=s.getLinkedNode({reference:o,container:e,property:n});if(c.error&&l&&l.state<B.ComputedScopes)return this._ref=void 0;this._ref=(a=c.node)!==null&&a!==void 0?a:c.error,this._nodeDescription=c.descr,l==null||l.references.push(this)}else if(this._ref===$u)throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);return Je(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return ul(this._ref)?this._ref:void 0}};return o}getLinkedNode(e){var n;try{const r=this.getCandidate(e);if(ul(r))return{error:r};const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=(n=r.message)!==null&&n!==void 0?n:String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}}loadAstNode(e){if(e.node)return e.node;const n=this.langiumDocuments().getDocument(e.documentUri);if(n)return this.astNodeLocator.getAstNode(n.parseResult.value,e.path)}createLinkingError(e,n){const r=ir(e.container).$document;r&&r.state<B.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:n})}}function aT(t){return typeof t.name=="string"}class m0{getName(e){if(aT(e))return e.name}getNameNode(e){return gh(e.$cstNode,"name")}}class g0{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){const n=z$(e),r=e.astNode;if(n&&r){const i=r[n.feature];if(en(i))return i.ref;if(Array.isArray(i)){for(const s of i)if(en(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end)return s.ref}}if(r){const i=this.nameProvider.getNameNode(r);if(i&&(i===e||h$(e,i)))return r}}}findDeclarationNode(e){const n=this.findDeclaration(e);if(n!=null&&n.$cstNode){const r=this.nameProvider.getNameNode(n);return r??n.$cstNode}}findReferences(e,n){const r=[];if(n.includeDeclaration){const s=this.getReferenceToSelf(e);s&&r.push(s)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return n.documentUri&&(i=i.filter(s=>pe.equals(s.sourceUri,n.documentUri))),r.push(...i),Te(r)}getReferenceToSelf(e){const n=this.nameProvider.getNameNode(e);if(n){const r=sn(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:Sl(n),local:!0}}}}class Jl{constructor(e){if(this.map=new Map,e)for(const[n,r]of e)this.add(n,r)}get size(){return wf.sum(Te(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,n){if(n===void 0)return this.map.delete(e);{const r=this.map.get(e);if(r){const i=r.indexOf(n);if(i>=0)return r.length===1?this.map.delete(e):r.splice(i,1),!0}return!1}}get(e){var n;return(n=this.map.get(e))!==null&&n!==void 0?n:[]}has(e,n){if(n===void 0)return this.map.has(e);{const r=this.map.get(e);return r?r.indexOf(n)>=0:!1}}add(e,n){return this.map.has(e)?this.map.get(e).push(n):this.map.set(e,[n]),this}addAll(e,n){return this.map.has(e)?this.map.get(e).push(...n):this.map.set(e,Array.from(n)),this}forEach(e){this.map.forEach((n,r)=>n.forEach(i=>e(i,r,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return Te(this.map.entries()).flatMap(([e,n])=>n.map(r=>[e,r]))}keys(){return Te(this.map.keys())}values(){return Te(this.map.values()).flat()}entriesGroupedByKey(){return Te(this.map.entries())}}class $g{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(const[n,r]of e)this.set(n,r)}clear(){this.map.clear(),this.inverse.clear()}set(e,n){return this.map.set(e,n),this.inverse.set(n,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const n=this.map.get(e);return n!==void 0?(this.map.delete(e),this.inverse.delete(n),!0):!1}}class y0{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,n=le.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,n)}async computeExportsForNode(e,n,r=uc,i=le.None){const s=[];this.exportNode(e,s,n);for(const o of r(e))await ot(i),this.exportNode(o,s,n);return s}exportNode(e,n,r){const i=this.nameProvider.getName(e);i&&n.push(this.descriptions.createDescription(e,i,r))}async computeLocalScopes(e,n=le.None){const r=e.parseResult.value,i=new Jl;for(const s of tn(r))await ot(n),this.processNode(s,e,i);return i}processNode(e,n,r){const i=e.$container;if(i){const s=this.nameProvider.getName(e);s&&r.add(i,this.descriptions.createDescription(e,s,n))}}}class kg{constructor(e,n,r){var i;this.elements=e,this.outerScope=n,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const n=this.caseInsensitive?this.elements.find(r=>r.name.toLowerCase()===e.toLowerCase()):this.elements.find(r=>r.name===e);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}}class _0{constructor(e,n,r){var i;this.elements=new Map,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1;for(const s of e){const o=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(o,s)}this.outerScope=n}getElement(e){const n=this.caseInsensitive?e.toLowerCase():e,r=this.elements.get(n);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=Te(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}}class lT{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}}class v0 extends lT{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,n){this.throwIfDisposed(),this.cache.set(e,n)}get(e,n){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(n){const r=n();return this.cache.set(e,r),r}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}}class R0 extends lT{constructor(e){super(),this.cache=new Map,this.converter=e??(n=>n)}has(e,n){return this.throwIfDisposed(),this.cacheForContext(e).has(n)}set(e,n,r){this.throwIfDisposed(),this.cacheForContext(e).set(n,r)}get(e,n,r){this.throwIfDisposed();const i=this.cacheForContext(e);if(i.has(n))return i.get(n);if(r){const s=r();return i.set(n,s),s}else return}delete(e,n){return this.throwIfDisposed(),this.cacheForContext(e).delete(n)}clear(e){if(this.throwIfDisposed(),e){const n=this.converter(e);this.cache.delete(n)}else this.cache.clear()}cacheForContext(e){const n=this.converter(e);let r=this.cache.get(n);return r||(r=new Map,this.cache.set(n,r)),r}}class T0 extends v0{constructor(e,n){super(),n?(this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n,()=>{this.clear()})),this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{i.length>0&&this.clear()}))):this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}}class cT{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new T0(e.shared)}getScope(e){const n=[],r=this.reflection.getReferenceType(e),i=sn(e.container).precomputedScopes;if(i){let o=e.container;do{const a=i.get(o);a.length>0&&n.push(Te(a).filter(l=>this.reflection.isSubtype(l.type,r))),o=o.$container}while(o)}let s=this.getGlobalScope(r,e);for(let o=n.length-1;o>=0;o--)s=this.createScope(n[o],s);return s}createScope(e,n,r){return new kg(Te(e),n,r)}createScopeForNodes(e,n,r){const i=Te(e).map(s=>{const o=this.nameProvider.getName(s);if(o)return this.descriptions.createDescription(s,o)}).nonNullable();return new kg(i,n,r)}getGlobalScope(e,n){return this.globalScopeCache.get(e,()=>new _0(this.indexManager.allElements(e)))}}function uT(t){return typeof t.$comment=="string"}function wg(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}class $0{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,n){const r=n??{},i=n==null?void 0:n.replacer,s=(a,l)=>this.replacer(a,l,r),o=i?(a,l)=>i(a,l,s):s;try{return this.currentDocument=sn(e),JSON.stringify(e,o,n==null?void 0:n.space)}finally{this.currentDocument=void 0}}deserialize(e,n){const r=n??{},i=JSON.parse(e);return this.linkNode(i,i,r),i}replacer(e,n,{refText:r,sourceText:i,textRegions:s,comments:o,uriConverter:a}){var l,c,u,f;if(!this.ignoreProperties.has(e))if(en(n)){const m=n.ref,g=r?n.$refText:void 0;if(m){const d=sn(m);let _="";this.currentDocument&&this.currentDocument!==d&&(a?_=a(d.uri,n):_=d.uri.toString());const T=this.astNodeLocator.getAstNodePath(m);return{$ref:`${_}#${T}`,$refText:g}}else return{$error:(c=(l=n.error)===null||l===void 0?void 0:l.message)!==null&&c!==void 0?c:"Could not resolve reference",$refText:g}}else if(Je(n)){let m;if(s&&(m=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},n)),(!e||n.$document)&&(m!=null&&m.$textRegion)&&(m.$textRegion.documentURI=(u=this.currentDocument)===null||u===void 0?void 0:u.uri.toString())),i&&!e&&(m??(m=Object.assign({},n)),m.$sourceText=(f=n.$cstNode)===null||f===void 0?void 0:f.text),o){m??(m=Object.assign({},n));const g=this.commentProvider.getComment(n);g&&(m.$comment=g.replace(/\r/g,""))}return m??n}else return n}addAstNodeRegionWithAssignmentsTo(e){const n=r=>({offset:r.offset,end:r.end,length:r.length,range:r.range});if(e.$cstNode){const r=e.$textRegion=n(e.$cstNode),i=r.assignments={};return Object.keys(e).filter(s=>!s.startsWith("$")).forEach(s=>{const o=yv(e.$cstNode,s).map(n);o.length!==0&&(i[s]=o)}),e}}linkNode(e,n,r,i,s,o){for(const[l,c]of Object.entries(e))if(Array.isArray(c))for(let u=0;u<c.length;u++){const f=c[u];wg(f)?c[u]=this.reviveReference(e,l,n,f,r):Je(f)&&this.linkNode(f,n,r,e,l,u)}else wg(c)?e[l]=this.reviveReference(e,l,n,c,r):Je(c)&&this.linkNode(c,n,r,e,l);const a=e;a.$container=i,a.$containerProperty=s,a.$containerIndex=o}reviveReference(e,n,r,i,s){let o=i.$refText,a=i.$error;if(i.$ref){const l=this.getRefNode(r,i.$ref,s.uriConverter);if(Je(l))return o||(o=this.nameProvider.getName(l)),{$refText:o??"",ref:l};a=l}if(a){const l={$refText:o??""};return l.error={container:e,property:n,message:a,reference:l},l}else return}getRefNode(e,n,r){try{const i=n.indexOf("#");if(i===0){const l=this.astNodeLocator.getAstNode(e,n.substring(1));return l||"Could not resolve path: "+n}if(i<0){const l=r?r(n):at.parse(n),c=this.langiumDocuments.getDocument(l);return c?c.parseResult.value:"Could not find document for URI: "+n}const s=r?r(n.substring(0,i)):at.parse(n.substring(0,i)),o=this.langiumDocuments.getDocument(s);if(!o)return"Could not find document for URI: "+n;if(i===n.length-1)return o.parseResult.value;const a=this.astNodeLocator.getAstNode(o.parseResult.value,n.substring(i+1));return a||"Could not resolve URI: "+n}catch(i){return String(i)}}}class k0{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.fileNameMap=new Map,this.textDocuments=e==null?void 0:e.workspace.TextDocuments}register(e){const n=e.LanguageMetaData;for(const r of n.fileExtensions)this.fileExtensionMap.has(r)&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileExtensionMap.set(r,e);if(n.fileNames)for(const r of n.fileNames)this.fileNameMap.has(r)&&console.warn(`The file name ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileNameMap.set(r,e);this.languageIdMap.set(n.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var n,r,i;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");const s=(r=(n=this.textDocuments)===null||n===void 0?void 0:n.get(e))===null||r===void 0?void 0:r.languageId;if(s!==void 0){const c=this.languageIdMap.get(s);if(c)return c}const o=pe.extname(e),a=pe.basename(e),l=(i=this.fileNameMap.get(a))!==null&&i!==void 0?i:this.fileExtensionMap.get(o);if(!l)throw s?new Error(`The service registry contains no services for the extension '${o}' for language '${s}'.`):new Error(`The service registry contains no services for the extension '${o}'.`);return l}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}}function hs(t){return{code:t}}var Ql;(function(t){t.all=["fast","slow","built-in"]})(Ql||(Ql={}));class w0{constructor(e){this.entries=new Jl,this.entriesBefore=[],this.entriesAfter=[],this.reflection=e.shared.AstReflection}register(e,n=this,r="fast"){if(r==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(const[i,s]of Object.entries(e)){const o=s;if(Array.isArray(o))for(const a of o){const l={check:this.wrapValidationException(a,n),category:r};this.addEntry(i,l)}else if(typeof o=="function"){const a={check:this.wrapValidationException(o,n),category:r};this.addEntry(i,a)}else Fs()}}wrapValidationException(e,n){return async(r,i,s)=>{await this.handleException(()=>e.call(n,r,i,s),"An error occurred during validation",i,r)}}async handleException(e,n,r,i){try{await e()}catch(s){if(Zs(s))throw s;console.error(`${n}:`,s),s instanceof Error&&s.stack&&console.error(s.stack);const o=s instanceof Error?s.message:String(s);r("error",`${n}: ${o}`,{node:i})}}addEntry(e,n){if(e==="AstNode"){this.entries.add("AstNode",n);return}for(const r of this.reflection.getAllSubTypes(e))this.entries.add(r,n)}getChecks(e,n){let r=Te(this.entries.get(e)).concat(this.entries.get("AstNode"));return n&&(r=r.filter(i=>n.includes(i.category))),r.map(i=>i.check)}registerBeforeDocument(e,n=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",n))}registerAfterDocument(e,n=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",n))}wrapPreparationException(e,n,r){return async(i,s,o,a)=>{await this.handleException(()=>e.call(r,i,s,o,a),n,s,i)}}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class dT{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,n={},r=le.None){const i=e.parseResult,s=[];if(await ot(r),(!n.categories||n.categories.includes("built-in"))&&(this.processLexingErrors(i,s,n),n.stopAfterLexingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Ht.LexingError})||(this.processParsingErrors(i,s,n),n.stopAfterParsingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Ht.ParsingError}))||(this.processLinkingErrors(e,s,n),n.stopAfterLinkingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Ht.LinkingError}))))return s;try{s.push(...await this.validateAst(i.value,n,r))}catch(o){if(Zs(o))throw o;console.error("An error occurred during validation:",o)}return await ot(r),s}processLexingErrors(e,n,r){var i,s,o;const a=[...e.lexerErrors,...(s=(i=e.lexerReport)===null||i===void 0?void 0:i.diagnostics)!==null&&s!==void 0?s:[]];for(const l of a){const c=(o=l.severity)!==null&&o!==void 0?o:"error",u={severity:ku(c),range:{start:{line:l.line-1,character:l.column-1},end:{line:l.line-1,character:l.column+l.length-1}},message:l.message,data:S0(c),source:this.getSource()};n.push(u)}}processParsingErrors(e,n,r){for(const i of e.parserErrors){let s;if(isNaN(i.token.startOffset)){if("previousToken"in i){const o=i.previousToken;if(isNaN(o.startOffset)){const a={line:0,character:0};s={start:a,end:a}}else{const a={line:o.endLine-1,character:o.endColumn};s={start:a,end:a}}}}else s=bf(i.token);if(s){const o={severity:ku("error"),range:s,message:i.message,data:hs(Ht.ParsingError),source:this.getSource()};n.push(o)}}}processLinkingErrors(e,n,r){for(const i of e.references){const s=i.error;if(s){const o={node:s.container,property:s.property,index:s.index,data:{code:Ht.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};n.push(this.toDiagnostic("error",s.message,o))}}}async validateAst(e,n,r=le.None){const i=[],s=(o,a,l)=>{i.push(this.toDiagnostic(o,a,l))};return await this.validateAstBefore(e,n,s,r),await this.validateAstNodes(e,n,s,r),await this.validateAstAfter(e,n,s,r),i}async validateAstBefore(e,n,r,i=le.None){var s;const o=this.validationRegistry.checksBefore;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}async validateAstNodes(e,n,r,i=le.None){await Promise.all(or(e).map(async s=>{await ot(i);const o=this.validationRegistry.getChecks(s.$type,n.categories);for(const a of o)await a(s,r,i)}))}async validateAstAfter(e,n,r,i=le.None){var s;const o=this.validationRegistry.checksAfter;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}toDiagnostic(e,n,r){return{message:n,range:b0(r),severity:ku(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function b0(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=gh(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=_v(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function ku(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}function S0(t){switch(t){case"error":return hs(Ht.LexingError);case"warning":return hs(Ht.LexingWarning);case"info":return hs(Ht.LexingInfo);case"hint":return hs(Ht.LexingHint);default:throw new Error("Invalid diagnostic severity: "+t)}}var Ht;(function(t){t.LexingError="lexing-error",t.LexingWarning="lexing-warning",t.LexingInfo="lexing-info",t.LexingHint="lexing-hint",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(Ht||(Ht={}));class C0{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,n,r){const i=r??sn(e);n??(n=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if(!n)throw new Error(`Node at path ${s} has no name.`);let o;const a=()=>{var l;return o??(o=Sl((l=this.nameProvider.getNameNode(e))!==null&&l!==void 0?l:e.$cstNode))};return{node:e,name:n,get nameSegment(){return a()},selectionSegment:Sl(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class A0{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,n=le.None){const r=[],i=e.parseResult.value;for(const s of or(i))await ot(n),cv(s).filter(o=>!ul(o)).forEach(o=>{const a=this.createDescription(o);a&&r.push(a)});return r}createDescription(e){const n=e.reference.$nodeDescription,r=e.reference.$refNode;if(!n||!r)return;const i=sn(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:n.documentUri,targetPath:n.path,segment:Sl(r),local:pe.equals(n.documentUri,i)}}}class E0{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){const n=this.getAstNodePath(e.$container),r=this.getPathSegment(e);return n+this.segmentSeparator+r}return""}getPathSegment({$containerProperty:e,$containerIndex:n}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return n!==void 0?e+this.indexSeparator+n:e}getAstNode(e,n){return n.split(this.segmentSeparator).reduce((i,s)=>{if(!i||s.length===0)return i;const o=s.indexOf(this.indexSeparator);if(o>0){const a=s.substring(0,o),l=parseInt(s.substring(o+1)),c=i[a];return c==null?void 0:c[l]}return i[s]},e)}}class P0{constructor(e){this._ready=new Xh,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new nT,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var n,r;this.workspaceConfig=(r=(n=e.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&r!==void 0?r:!1}async initialized(e){if(this.workspaceConfig){if(e.register){const n=this.serviceRegistry.all;e.register({section:n.map(r=>this.toSectionName(r.LanguageMetaData.languageId))})}if(e.fetchConfiguration){const n=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),r=await e.fetchConfiguration(n);n.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(n=>{const r=e.settings[n];this.updateSectionConfiguration(n,r),this.onConfigurationSectionUpdateEmitter.fire({section:n,configuration:r})})}updateSectionConfiguration(e,n){this.settings[e]=n}async getConfiguration(e,n){await this.ready;const r=this.toSectionName(e);if(this.settings[r])return this.settings[r][n]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var Rs;(function(t){function e(n){return{dispose:async()=>await n()}}t.create=e})(Rs||(Rs={}));class N0{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Jl,this.documentPhaseListeners=new Jl,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=B.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,n={},r=le.None){var i,s;for(const o of e){const a=o.uri.toString();if(o.state===B.Validated){if(typeof n.validation=="boolean"&&n.validation)o.state=B.IndexedReferences,o.diagnostics=void 0,this.buildState.delete(a);else if(typeof n.validation=="object"){const l=this.buildState.get(a),c=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(c){const f=((s=n.validation.categories)!==null&&s!==void 0?s:Ql.all).filter(m=>!c.includes(m));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},n.validation),{categories:f})},result:l.result}),o.state=B.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=B.Changed,await this.emitUpdate(e.map(o=>o.uri),[]),await this.buildDocuments(e,n,r)}async update(e,n,r=le.None){this.currentState=B.Changed;for(const o of n)this.langiumDocuments.deleteDocument(o),this.buildState.delete(o.toString()),this.indexManager.remove(o);for(const o of e){if(!this.langiumDocuments.invalidateDocument(o)){const l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},o);l.state=B.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(o.toString())}const i=Te(e).concat(n).map(o=>o.toString()).toSet();this.langiumDocuments.all.filter(o=>!i.has(o.uri.toString())&&this.shouldRelink(o,i)).forEach(o=>{this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o),o.state=Math.min(o.state,B.ComputedScopes),o.diagnostics=void 0}),await this.emitUpdate(e,n),await ot(r);const s=this.sortDocuments(this.langiumDocuments.all.filter(o=>{var a;return o.state<B.Linked||!(!((a=this.buildState.get(o.uri.toString()))===null||a===void 0)&&a.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)}async emitUpdate(e,n){await Promise.all(this.updateListeners.map(r=>r(e,n)))}sortDocuments(e){let n=0,r=e.length-1;for(;n<r;){for(;n<e.length&&this.hasTextDocument(e[n]);)n++;for(;r>=0&&!this.hasTextDocument(e[r]);)r--;n<r&&([e[n],e[r]]=[e[r],e[n]])}return e}hasTextDocument(e){var n;return!!(!((n=this.textDocuments)===null||n===void 0)&&n.get(e.uri))}shouldRelink(e,n){return e.references.some(r=>r.error!==void 0)?!0:this.indexManager.isAffected(e,n)}onUpdate(e){return this.updateListeners.push(e),Rs.create(()=>{const n=this.updateListeners.indexOf(e);n>=0&&this.updateListeners.splice(n,1)})}async buildDocuments(e,n,r){this.prepareBuild(e,n),await this.runCancelable(e,B.Parsed,r,o=>this.langiumDocumentFactory.update(o,r)),await this.runCancelable(e,B.IndexedContent,r,o=>this.indexManager.updateContent(o,r)),await this.runCancelable(e,B.ComputedScopes,r,async o=>{const a=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await a.computeLocalScopes(o,r)});const i=e.filter(o=>this.shouldLink(o));await this.runCancelable(i,B.Linked,r,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,r)),await this.runCancelable(i,B.IndexedReferences,r,o=>this.indexManager.updateReferences(o,r));const s=e.filter(o=>this.shouldValidate(o));await this.runCancelable(s,B.Validated,r,o=>this.validate(o,r));for(const o of e){const a=this.buildState.get(o.uri.toString());a&&(a.completed=!0)}}prepareBuild(e,n){for(const r of e){const i=r.uri.toString(),s=this.buildState.get(i);(!s||s.completed)&&this.buildState.set(i,{completed:!1,options:n,result:s==null?void 0:s.result})}}async runCancelable(e,n,r,i){const s=e.filter(a=>a.state<n);for(const a of s)await ot(r),await i(a),a.state=n,await this.notifyDocumentPhase(a,n,r);const o=e.filter(a=>a.state===n);await this.notifyBuildPhase(o,n,r),this.currentState=n}onBuildPhase(e,n){return this.buildPhaseListeners.add(e,n),Rs.create(()=>{this.buildPhaseListeners.delete(e,n)})}onDocumentPhase(e,n){return this.documentPhaseListeners.add(e,n),Rs.create(()=>{this.documentPhaseListeners.delete(e,n)})}waitUntil(e,n,r){let i;if(n&&"path"in n?i=n:r=n,r??(r=le.None),i){const s=this.langiumDocuments.getDocument(i);if(s&&s.state>=e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):r.isCancellationRequested?Promise.reject(Yl):new Promise((s,o)=>{const a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){const c=this.langiumDocuments.getDocument(i);s(c==null?void 0:c.uri)}else s(void 0)}),l=r.onCancellationRequested(()=>{a.dispose(),l.dispose(),o(Yl)})})}async notifyDocumentPhase(e,n,r){const s=this.documentPhaseListeners.get(n).slice();for(const o of s)try{await o(e,r)}catch(a){if(!Zs(a))throw a}}async notifyBuildPhase(e,n,r){if(e.length===0)return;const s=this.buildPhaseListeners.get(n).slice();for(const o of s)await ot(r),await o(e,r)}shouldLink(e){var n;return(n=this.getBuildOptions(e).eagerLinking)!==null&&n!==void 0?n:!0}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,n){var r,i;const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,o=this.getBuildOptions(e).validation,a=typeof o=="object"?o:void 0,l=await s.validateDocument(e,a,n);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;const c=this.buildState.get(e.uri.toString());if(c){(r=c.result)!==null&&r!==void 0||(c.result={});const u=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Ql.all;c.result.validationChecks?c.result.validationChecks.push(...u):c.result.validationChecks=[...u]}}getBuildOptions(e){var n,r;return(r=(n=this.buildState.get(e.uri.toString()))===null||n===void 0?void 0:n.options)!==null&&r!==void 0?r:{}}}class I0{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new R0,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,n){const r=sn(e).uri,i=[];return this.referenceIndex.forEach(s=>{s.forEach(o=>{pe.equals(o.targetUri,r)&&o.targetPath===n&&i.push(o)})}),Te(i)}allElements(e,n){let r=Te(this.symbolIndex.keys());return n&&(r=r.filter(i=>!n||n.has(i))),r.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,n){var r;return n?this.symbolByTypeIndex.get(e,n,()=>{var s;return((s=this.symbolIndex.get(e))!==null&&s!==void 0?s:[]).filter(a=>this.astReflection.isSubtype(a.type,n))}):(r=this.symbolIndex.get(e))!==null&&r!==void 0?r:[]}remove(e){const n=e.toString();this.symbolIndex.delete(n),this.symbolByTypeIndex.clear(n),this.referenceIndex.delete(n)}async updateContent(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,n),s=e.uri.toString();this.symbolIndex.set(s,i),this.symbolByTypeIndex.clear(s)}async updateReferences(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,n);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,n){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i=>!i.local&&n.has(i.targetUri.toString())):!1}}class O0{constructor(e){this.initialBuildOptions={},this._ready=new Xh,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){var n;this.folders=(n=e.workspaceFolders)!==null&&n!==void 0?n:void 0}initialized(e){return this.mutex.write(n=>{var r;return this.initializeWorkspace((r=this.folders)!==null&&r!==void 0?r:[],n)})}async initializeWorkspace(e,n=le.None){const r=await this.performStartup(e);await ot(n),await this.documentBuilder.build(r,this.initialBuildOptions,n)}async performStartup(e){const n=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),r=this.serviceRegistry.all.flatMap(o=>{var a;return(a=o.LanguageMetaData.fileNames)!==null&&a!==void 0?a:[]}),i=[],s=o=>{i.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,s),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,{fileExtensions:n,fileNames:r},s))),this._ready.resolve(),i}loadAdditionalDocuments(e,n){return Promise.resolve()}getRootFolder(e){return at.parse(e.uri)}async traverseFolder(e,n,r,i){const s=await this.fileSystemProvider.readDirectory(n);await Promise.all(s.map(async o=>{if(this.includeEntry(e,o,r)){if(o.isDirectory)await this.traverseFolder(e,o.uri,r,i);else if(o.isFile){const a=await this.langiumDocuments.getOrCreateDocument(o.uri);i(a)}}}))}includeEntry(e,n,r){const i=pe.basename(n.uri);return i.startsWith(".")?!1:n.isDirectory?i!=="node_modules"&&i!=="out":n.isFile?r.fileExtensions.includes(pe.extname(n.uri))||r.fileNames.includes(pe.basename(n.uri)):!1}}class D0{buildUnexpectedCharactersMessage(e,n,r,i,s){return Mf.buildUnexpectedCharactersMessage(e,n,r,i,s)}buildUnableToPopLexerModeMessage(e){return Mf.buildUnableToPopLexerModeMessage(e)}}const x0={mode:"full"};class M0{constructor(e){this.errorMessageProvider=e.parser.LexerErrorMessageProvider,this.tokenBuilder=e.parser.TokenBuilder;const n=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(n);const r=bg(n)?Object.values(n):n,i=e.LanguageMetaData.mode==="production";this.chevrotainLexer=new ht(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})}get definition(){return this.tokenTypes}tokenize(e,n=x0){var r,i,s;const o=this.chevrotainLexer.tokenize(e);return{tokens:o.tokens,errors:o.errors,hidden:(r=o.groups.hidden)!==null&&r!==void 0?r:[],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)}}toTokenTypeDictionary(e){if(bg(e))return e;const n=fT(e)?Object.values(e.modes).flat():e,r={};return n.forEach(i=>r[i.name]=i),r}}function L0(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function fT(t){return t&&"modes"in t&&"defaultMode"in t}function bg(t){return!L0(t)&&!fT(t)}function pT(t,e,n){let r,i;typeof t=="string"?(i=e,r=n):(i=t.range.start,r=e),i||(i=re.create(0,0));const s=mT(t),o=Jh(r),a=U0({lines:s,position:i,options:o});return q0({index:0,tokens:a,position:i})}function hT(t,e){const n=Jh(e),r=mT(t);if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=n.start,a=n.end;return!!(o!=null&&o.exec(i))&&!!(a!=null&&a.exec(s))}function mT(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(L$)}const Sg=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,F0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function U0(t){var e,n,r;const i=[];let s=t.position.line,o=t.position.character;for(let a=0;a<t.lines.length;a++){const l=a===0,c=a===t.lines.length-1;let u=t.lines[a],f=0;if(l&&t.options.start){const g=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);g&&(f=g.index+g[0].length)}else{const g=(n=t.options.line)===null||n===void 0?void 0:n.exec(u);g&&(f=g.index+g[0].length)}if(c){const g=(r=t.options.end)===null||r===void 0?void 0:r.exec(u);g&&(u=u.substring(0,g.index))}if(u=u.substring(0,K0(u)),Jp(u,f)>=u.length){if(i.length>0){const g=re.create(s,o);i.push({type:"break",content:"",range:Q.create(g,g)})}}else{Sg.lastIndex=f;const g=Sg.exec(u);if(g){const d=g[0],_=g[1],T=re.create(s,o+f),v=re.create(s,o+f+d.length);i.push({type:"tag",content:_,range:Q.create(T,v)}),f+=d.length,f=Jp(u,f)}if(f<u.length){const d=u.substring(f),_=Array.from(d.matchAll(F0));i.push(...H0(_,d,s,o+f))}}s++,o=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function H0(t,e,n,r){const i=[];if(t.length===0){const s=re.create(n,r),o=re.create(n,r+e.length);i.push({type:"text",content:e,range:Q.create(s,o)})}else{let s=0;for(const a of t){const l=a.index,c=e.substring(s,l);c.length>0&&i.push({type:"text",content:e.substring(s,l),range:Q.create(re.create(n,s+r),re.create(n,l+r))});let u=c.length+1;const f=a[1];if(i.push({type:"inline-tag",content:f,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+f.length+r))}),u+=f.length,a.length===4){u+=a[2].length;const m=a[3];i.push({type:"text",content:m,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+m.length+r))})}else i.push({type:"text",content:"",range:Q.create(re.create(n,s+u+r),re.create(n,s+u+r))});s=l+a[0].length}const o=e.substring(s);o.length>0&&i.push({type:"text",content:o,range:Q.create(re.create(n,s+r),re.create(n,s+r+o.length))})}return i}const B0=/\S/,j0=/\s*$/;function Jp(t,e){const n=t.substring(e).match(B0);return n?e+n.index:t.length}function K0(t){const e=t.match(j0);if(e&&typeof e.index=="number")return e.index}function q0(t){var e,n,r,i;const s=re.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Cg([],Q.create(s,s));const o=[];for(;t.index<t.tokens.length;){const c=G0(t,o[o.length-1]);c&&o.push(c)}const a=(n=(e=o[0])===null||e===void 0?void 0:e.range.start)!==null&&n!==void 0?n:s,l=(i=(r=o[o.length-1])===null||r===void 0?void 0:r.range.end)!==null&&i!==void 0?i:s;return new Cg(o,Q.create(a,l))}function G0(t,e){const n=t.tokens[t.index];if(n.type==="tag")return yT(t,!1);if(n.type==="text"||n.type==="inline-tag")return gT(t);W0(n,e),t.index++}function W0(t,e){if(e){const n=new vT("",t.range);"inlines"in e?e.inlines.push(n):e.content.inlines.push(n)}}function gT(t){let e=t.tokens[t.index];const n=e;let r=e;const i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(z0(t)),r=e,e=t.tokens[t.index];return new Qp(i,Q.create(n.range.start,r.range.end))}function z0(t){return t.tokens[t.index].type==="inline-tag"?yT(t,!0):_T(t)}function yT(t,e){const n=t.tokens[t.index++],r=n.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){const s=_T(t);return new bu(r,new Qp([s],s.range),e,Q.create(n.range.start,s.range.end))}else{const s=gT(t);return new bu(r,s,e,Q.create(n.range.start,s.range.end))}else{const s=n.range;return new bu(r,new Qp([],s),e,s)}}function _T(t){const e=t.tokens[t.index++];return new vT(e.content,e.range)}function Jh(t){if(!t)return Jh({start:"/**",end:"*/",line:"*"});const{start:e,end:n,line:r}=t;return{start:wu(e,!0),end:wu(n,!1),line:wu(r,!0)}}function wu(t,e){if(typeof t=="string"||typeof t=="object"){const n=typeof t=="string"?fc(t):t.source;return e?new RegExp(`^\\s*${n}`):new RegExp(`\\s*${n}\\s*$`)}else return t}class Cg{constructor(e,n){this.elements=e,this.range=n}getTag(e){return this.getAllTags().find(n=>n.name===e)}getTags(e){return this.getAllTags().filter(n=>n.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(const n of this.elements)if(e.length===0)e=n.toString();else{const r=n.toString();e+=Ag(e)+r}return e.trim()}toMarkdown(e){let n="";for(const r of this.elements)if(n.length===0)n=r.toMarkdown(e);else{const i=r.toMarkdown(e);n+=Ag(n)+i}return n.trim()}}class bu{constructor(e,n,r,i){this.name=e,this.content=n,this.inline=r,this.range=i}toString(){let e=`@${this.name}`;const n=this.content.toString();return this.content.inlines.length===1?e=`${e} ${n}`:this.content.inlines.length>1&&(e=`${e}
${n}`),this.inline?`{${e}}`:e}toMarkdown(e){var n,r;return(r=(n=e==null?void 0:e.renderTag)===null||n===void 0?void 0:n.call(e,this))!==null&&r!==void 0?r:this.toMarkdownDefault(e)}toMarkdownDefault(e){const n=this.content.toMarkdown(e);if(this.inline){const s=V0(this.name,n,e??{});if(typeof s=="string")return s}let r="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?r="*":(e==null?void 0:e.tag)==="bold"?r="**":(e==null?void 0:e.tag)==="bold-italic"&&(r="***");let i=`${r}@${this.name}${r}`;return this.content.inlines.length===1?i=`${i} — ${n}`:this.content.inlines.length>1&&(i=`${i}
${n}`),this.inline?`{${i}}`:i}}function V0(t,e,n){var r,i;if(t==="linkplain"||t==="linkcode"||t==="link"){const s=e.indexOf(" ");let o=e;if(s>0){const l=Jp(e,s);o=e.substring(l),e=e.substring(0,s)}return(t==="linkcode"||t==="link"&&n.link==="code")&&(o=`\`${o}\``),(i=(r=n.renderLink)===null||r===void 0?void 0:r.call(n,e,o))!==null&&i!==void 0?i:Y0(e,o)}}function Y0(t,e){try{return at.parse(t,!0),`[${e}](${t})`}catch{return t}}class Qp{constructor(e,n){this.inlines=e,this.range=n}toString(){let e="";for(let n=0;n<this.inlines.length;n++){const r=this.inlines[n],i=this.inlines[n+1];e+=r.toString(),i&&i.range.start.line>r.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let n="";for(let r=0;r<this.inlines.length;r++){const i=this.inlines[r],s=this.inlines[r+1];n+=i.toMarkdown(e),s&&s.range.start.line>i.range.start.line&&(n+=`
`)}return n}}class vT{constructor(e,n){this.text=e,this.range=n}toString(){return this.text}toMarkdown(){return this.text}}function Ag(t){return t.endsWith(`
`)?`
`:`

`}class X0{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){const n=this.commentProvider.getComment(e);if(n&&hT(n))return pT(n).toMarkdown({renderLink:(i,s)=>this.documentationLinkRenderer(e,i,s),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,n,r){var i;const s=(i=this.findNameInPrecomputedScopes(e,n))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,n);if(s&&s.nameSegment){const o=s.nameSegment.range.start.line+1,a=s.nameSegment.range.start.character+1,l=s.documentUri.with({fragment:`L${o},${a}`});return`[${r}](${l.toString()})`}else return}documentationTagRenderer(e,n){}findNameInPrecomputedScopes(e,n){const i=sn(e).precomputedScopes;if(!i)return;let s=e;do{const a=i.get(s).find(l=>l.name===n);if(a)return a;s=s.$container}while(s)}findNameInGlobalScope(e,n){return this.indexManager.allElements().find(i=>i.name===n)}}class J0{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var n;return uT(e)?e.$comment:(n=tv(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||n===void 0?void 0:n.text}}class Q0{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,n){return Promise.resolve(this.syncParser.parse(e))}}class Z0{constructor(){this.previousTokenSource=new Yh,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();const n=d0();return this.previousTokenSource=n,this.enqueue(this.writeQueue,e,n.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,n,r=le.None){const i=new Xh,s={action:n,deferred:i,cancellationToken:r};return e.push(s),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;const e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:n,deferred:r,cancellationToken:i})=>{try{const s=await Promise.resolve().then(()=>n(i));r.resolve(s)}catch(s){Zs(s)?r.resolve(void 0):r.reject(s)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}}class eI{constructor(e){this.grammarElementIdMap=new $g,this.tokenTypeIdMap=new $g,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(n=>Object.assign(Object.assign({},n),{message:n.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}dehydrateLexerReport(e){return e}createDehyrationContext(e){const n=new Map,r=new Map;for(const i of or(e))n.set(i,{});if(e.$cstNode)for(const i of bl(e.$cstNode))r.set(i,{});return{astNodes:n,cstNodes:r}}dehydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(r.$cstNode=this.dehydrateCstNode(e.$cstNode,n));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.dehydrateAstNode(a,n)):en(a)?o.push(this.dehydrateReference(a,n)):o.push(a)}else Je(s)?r[i]=this.dehydrateAstNode(s,n):en(s)?r[i]=this.dehydrateReference(s,n):s!==void 0&&(r[i]=s);return r}dehydrateReference(e,n){const r={};return r.$refText=e.$refText,e.$refNode&&(r.$refNode=n.cstNodes.get(e.$refNode)),r}dehydrateCstNode(e,n){const r=n.cstNodes.get(e);return Q_(e)?r.fullText=e.fullText:r.grammarSource=this.getGrammarElementId(e.grammarSource),r.hidden=e.hidden,r.astNode=n.astNodes.get(e.astNode),lr(e)?r.content=e.content.map(i=>this.dehydrateCstNode(i,n)):Ls(e)&&(r.tokenType=e.tokenType.name,r.offset=e.offset,r.length=e.length,r.startLine=e.range.start.line,r.startColumn=e.range.start.character,r.endLine=e.range.end.line,r.endColumn=e.range.end.character),r}hydrate(e){const n=e.value,r=this.createHydrationContext(n);return"$cstNode"in n&&this.hydrateCstNode(n.$cstNode,r),{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(n,r)}}createHydrationContext(e){const n=new Map,r=new Map;for(const s of or(e))n.set(s,{});let i;if(e.$cstNode)for(const s of bl(e.$cstNode)){let o;"fullText"in s?(o=new WR(s.fullText),i=o):"content"in s?o=new zh:"tokenType"in s&&(o=this.hydrateCstLeafNode(s)),o&&(r.set(s,o),o.root=i)}return{astNodes:n,cstNodes:r}}hydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode&&(r.$cstNode=n.cstNodes.get(e.$cstNode));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.setParent(this.hydrateAstNode(a,n),r)):en(a)?o.push(this.hydrateReference(a,r,i,n)):o.push(a)}else Je(s)?r[i]=this.setParent(this.hydrateAstNode(s,n),r):en(s)?r[i]=this.hydrateReference(s,r,i,n):s!==void 0&&(r[i]=s);return r}setParent(e,n){return e.$container=n,e}hydrateReference(e,n,r,i){return this.linker.buildReference(n,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,n,r=0){const i=n.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=n.astNodes.get(e.astNode),lr(i))for(const s of e.content){const o=this.hydrateCstNode(s,n,r++);i.content.push(o)}return i}hydrateCstLeafNode(e){const n=this.getTokenType(e.tokenType),r=e.offset,i=e.length,s=e.startLine,o=e.startColumn,a=e.endLine,l=e.endColumn,c=e.hidden;return new qp(r,i,{start:{line:s,character:o},end:{line:a,character:l}},n,c)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if(e)return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.getKey(e)}createGrammarElementIdMap(){let e=0;for(const n of or(this.grammar))iv(n)&&this.grammarElementIdMap.set(n,e++)}}function RT(t){return{documentation:{CommentProvider:e=>new J0(e),DocumentationProvider:e=>new X0(e)},parser:{AsyncParser:e=>new Q0(e),GrammarConfig:e=>nk(e),LangiumParser:e=>zN(e),CompletionParser:e=>WN(e),ValueConverter:()=>new XN,TokenBuilder:()=>new YN,Lexer:e=>new M0(e),ParserErrorMessageProvider:()=>new YR,LexerErrorMessageProvider:()=>new D0},workspace:{AstNodeLocator:()=>new E0,AstNodeDescriptionProvider:e=>new C0(e),ReferenceDescriptionProvider:e=>new A0(e)},references:{Linker:e=>new oT(e),NameProvider:()=>new m0,ScopeProvider:e=>new cT(e),ScopeComputation:e=>new y0(e),References:e=>new g0(e)},serializer:{Hydrator:e=>new eI(e),JsonSerializer:e=>new $0(e)},validation:{DocumentValidator:e=>new dT(e),ValidationRegistry:e=>new w0(e)},shared:()=>t.shared}}function TT(t){return{ServiceRegistry:e=>new k0(e),workspace:{LangiumDocuments:e=>new h0(e),LangiumDocumentFactory:e=>new p0(e),DocumentBuilder:e=>new N0(e),IndexManager:e=>new I0(e),WorkspaceManager:e=>new O0(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new Z0,ConfigurationProvider:e=>new P0(e)}}}var Zl;(function(t){t.merge=(e,n)=>tc(tc({},e),n)})(Zl||(Zl={}));function ec(t,e,n,r,i,s,o,a,l){const c=[t,e,n,r,i,s,o,a,l].reduce(tc,{});return kT(c)}const $T=Symbol("isProxy");function Zp(t){if(t&&t[$T])for(const e of Object.values(t))Zp(e);return t}function kT(t,e){const n=new Proxy({},{deleteProperty:()=>!1,set:()=>{throw new Error("Cannot set property on injected service container")},get:(r,i)=>i===$T?!0:Pg(r,i,t,e||n),getOwnPropertyDescriptor:(r,i)=>(Pg(r,i,t,e||n),Object.getOwnPropertyDescriptor(r,i)),has:(r,i)=>i in t,ownKeys:()=>[...Object.getOwnPropertyNames(t)]});return n}const Eg=Symbol();function Pg(t,e,n,r){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===Eg)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in n){const i=n[e];t[e]=Eg;try{t[e]=typeof i=="function"?i(r):kT(i,r)}catch(s){throw t[e]=s instanceof Error?s:void 0,s}return t[e]}else return}function tc(t,e){if(e){for(const[n,r]of Object.entries(e))if(r!==void 0){const i=t[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"?t[n]=tc(i,r):t[n]=r}}return t}class tI{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}const wT={fileSystemProvider:()=>new tI},nI={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},rI={AstReflection:()=>new lv};function iI(){const t=ec(TT(wT),rI),e=ec(RT({shared:t}),nI);return t.ServiceRegistry.register(e),e}function sI(t){var e;const n=iI(),r=n.serializer.JsonSerializer.deserialize(t);return n.shared.workspace.LangiumDocumentFactory.fromModel(r,at.parse(`memory://${(e=r.name)!==null&&e!==void 0?e:"grammar"}.langium`)),r}var M={},eh={},_n={},oe={},Tr={},Qh={},nc={},H={};Object.defineProperty(H,"__esModule",{value:!0});H.Message=H.NotificationType9=H.NotificationType8=H.NotificationType7=H.NotificationType6=H.NotificationType5=H.NotificationType4=H.NotificationType3=H.NotificationType2=H.NotificationType1=H.NotificationType0=H.NotificationType=H.RequestType9=H.RequestType8=H.RequestType7=H.RequestType6=H.RequestType5=H.RequestType4=H.RequestType3=H.RequestType2=H.RequestType1=H.RequestType=H.RequestType0=H.AbstractMessageSignature=H.ParameterStructures=H.ResponseError=H.ErrorCodes=void 0;const rr=Fe;var th;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(th||(H.ErrorCodes=th={}));class Zh extends Error{constructor(e,n,r){super(n),this.code=rr.number(e)?e:th.UnknownErrorCode,this.data=r,Object.setPrototypeOf(this,Zh.prototype)}toJson(){const e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}}H.ResponseError=Zh;class nt{constructor(e){this.kind=e}static is(e){return e===nt.auto||e===nt.byName||e===nt.byPosition}toString(){return this.kind}}H.ParameterStructures=nt;nt.auto=new nt("auto");nt.byPosition=new nt("byPosition");nt.byName=new nt("byName");class $e{constructor(e,n){this.method=e,this.numberOfParams=n}get parameterStructures(){return nt.auto}}H.AbstractMessageSignature=$e;class oI extends $e{constructor(e){super(e,0)}}H.RequestType0=oI;class aI extends $e{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}H.RequestType=aI;class lI extends $e{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}H.RequestType1=lI;class cI extends $e{constructor(e){super(e,2)}}H.RequestType2=cI;class uI extends $e{constructor(e){super(e,3)}}H.RequestType3=uI;class dI extends $e{constructor(e){super(e,4)}}H.RequestType4=dI;class fI extends $e{constructor(e){super(e,5)}}H.RequestType5=fI;class pI extends $e{constructor(e){super(e,6)}}H.RequestType6=pI;class hI extends $e{constructor(e){super(e,7)}}H.RequestType7=hI;class mI extends $e{constructor(e){super(e,8)}}H.RequestType8=mI;class gI extends $e{constructor(e){super(e,9)}}H.RequestType9=gI;class yI extends $e{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}H.NotificationType=yI;class _I extends $e{constructor(e){super(e,0)}}H.NotificationType0=_I;class vI extends $e{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}H.NotificationType1=vI;class RI extends $e{constructor(e){super(e,2)}}H.NotificationType2=RI;class TI extends $e{constructor(e){super(e,3)}}H.NotificationType3=TI;class $I extends $e{constructor(e){super(e,4)}}H.NotificationType4=$I;class kI extends $e{constructor(e){super(e,5)}}H.NotificationType5=kI;class wI extends $e{constructor(e){super(e,6)}}H.NotificationType6=wI;class bI extends $e{constructor(e){super(e,7)}}H.NotificationType7=bI;class SI extends $e{constructor(e){super(e,8)}}H.NotificationType8=SI;class CI extends $e{constructor(e){super(e,9)}}H.NotificationType9=CI;var Ng;(function(t){function e(i){const s=i;return s&&rr.string(s.method)&&(rr.string(s.id)||rr.number(s.id))}t.isRequest=e;function n(i){const s=i;return s&&rr.string(s.method)&&i.id===void 0}t.isNotification=n;function r(i){const s=i;return s&&(s.result!==void 0||!!s.error)&&(rr.string(s.id)||rr.number(s.id)||s.id===null)}t.isResponse=r})(Ng||(H.Message=Ng={}));var vn={},Ig;Object.defineProperty(vn,"__esModule",{value:!0});vn.LRUCache=vn.LinkedMap=vn.Touch=void 0;var et;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(et||(vn.Touch=et={}));class bT{constructor(){this[Ig]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,n=et.None){const r=this._map.get(e);if(r)return n!==et.None&&this.touch(r,n),r.value}set(e,n,r=et.None){let i=this._map.get(e);if(i)i.value=n,r!==et.None&&this.touch(i,r);else{switch(i={key:e,value:n,next:void 0,previous:void 0},r){case et.None:this.addItemLast(i);break;case et.First:this.addItemFirst(i);break;case et.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){const n=this._map.get(e);if(n)return this._map.delete(e),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");const e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,n){const r=this._state;let i=this._head;for(;i;){if(n?e.bind(n)(i.value,i.key,this):e(i.value,i.key,this),this._state!==r)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}values(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}entries(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}[(Ig=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let n=this._head,r=this.size;for(;n&&r>e;)this._map.delete(n.key),n=n.next,r--;this._head=n,this._size=r,n&&(n.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{const n=e.next,r=e.previous;if(!n||!r)throw new Error("Invalid list");n.previous=r,r.next=n}e.next=void 0,e.previous=void 0,this._state++}touch(e,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==et.First&&n!==et.Last)){if(n===et.First){if(e===this._head)return;const r=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(r.previous=i,i.next=r),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(n===et.Last){if(e===this._tail)return;const r=e.next,i=e.previous;e===this._head?(r.previous=void 0,this._head=r):(r.previous=i,i.next=r),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){const e=[];return this.forEach((n,r)=>{e.push([r,n])}),e}fromJSON(e){this.clear();for(const[n,r]of e)this.set(n,r)}}vn.LinkedMap=bT;class AI extends bT{constructor(e,n=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,n=et.AsNew){return super.get(e,n)}peek(e){return super.get(e,et.None)}set(e,n){return super.set(e,n,et.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}}vn.LRUCache=AI;var Dc={};Object.defineProperty(Dc,"__esModule",{value:!0});Dc.Disposable=void 0;var Og;(function(t){function e(n){return{dispose:n}}t.create=e})(Og||(Dc.Disposable=Og={}));var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.SharedArrayReceiverStrategy=Kr.SharedArraySenderStrategy=void 0;const EI=Yn;var Ds;(function(t){t.Continue=0,t.Cancelled=1})(Ds||(Ds={}));class PI{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;const n=new SharedArrayBuffer(4),r=new Int32Array(n,0,1);r[0]=Ds.Continue,this.buffers.set(e.id,n),e.$cancellationData=n}async sendCancellation(e,n){const r=this.buffers.get(n);if(r===void 0)return;const i=new Int32Array(r,0,1);Atomics.store(i,0,Ds.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}}Kr.SharedArraySenderStrategy=PI;class NI{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ds.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}}class II{constructor(e){this.token=new NI(e)}cancel(){}dispose(){}}class OI{constructor(){this.kind="request"}createCancellationTokenSource(e){const n=e.$cancellationData;return n===void 0?new EI.CancellationTokenSource:new II(n)}}Kr.SharedArrayReceiverStrategy=OI;var Mn={},eo={};Object.defineProperty(eo,"__esModule",{value:!0});eo.Semaphore=void 0;const DI=Pn;class xI{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((n,r)=>{this._waiting.push({thunk:e,resolve:n,reject:r}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,DI.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;const e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{const n=e.thunk();n instanceof Promise?n.then(r=>{this._active--,e.resolve(r),this.runNext()},r=>{this._active--,e.reject(r),this.runNext()}):(this._active--,e.resolve(n),this.runNext())}catch(n){this._active--,e.reject(n),this.runNext()}}}eo.Semaphore=xI;Object.defineProperty(Mn,"__esModule",{value:!0});Mn.ReadableStreamMessageReader=Mn.AbstractMessageReader=Mn.MessageReader=void 0;const nh=Pn,Cr=Fe,Su=on,MI=eo;var Dg;(function(t){function e(n){let r=n;return r&&Cr.func(r.listen)&&Cr.func(r.dispose)&&Cr.func(r.onError)&&Cr.func(r.onClose)&&Cr.func(r.onPartialMessage)}t.is=e})(Dg||(Mn.MessageReader=Dg={}));class ST{constructor(){this.errorEmitter=new Su.Emitter,this.closeEmitter=new Su.Emitter,this.partialMessageEmitter=new Su.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Cr.string(e.message)?e.message:"unknown"}`)}}Mn.AbstractMessageReader=ST;var rh;(function(t){function e(n){let r,i;const s=new Map;let o;const a=new Map;if(n===void 0||typeof n=="string")r=n??"utf-8";else{if(r=n.charset??"utf-8",n.contentDecoder!==void 0&&(i=n.contentDecoder,s.set(i.name,i)),n.contentDecoders!==void 0)for(const l of n.contentDecoders)s.set(l.name,l);if(n.contentTypeDecoder!==void 0&&(o=n.contentTypeDecoder,a.set(o.name,o)),n.contentTypeDecoders!==void 0)for(const l of n.contentTypeDecoders)a.set(l.name,l)}return o===void 0&&(o=(0,nh.default)().applicationJson.decoder,a.set(o.name,o)),{charset:r,contentDecoder:i,contentDecoders:s,contentTypeDecoder:o,contentTypeDecoders:a}}t.fromOptions=e})(rh||(rh={}));class LI extends ST{constructor(e,n){super(),this.readable=e,this.options=rh.fromOptions(n),this.buffer=(0,nh.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new MI.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;const n=this.readable.onData(r=>{this.onData(r)});return this.readable.onError(r=>this.fireError(r)),this.readable.onClose(()=>this.fireClose()),n}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){const r=this.buffer.tryReadHeaders(!0);if(!r)return;const i=r.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`));return}const s=parseInt(i);if(isNaN(s)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=s}const n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{const r=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(r,this.options);this.callback(i)}).catch(r=>{this.fireError(r)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,nh.default)().timer.setTimeout((e,n)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}}Mn.ReadableStreamMessageReader=LI;var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.WriteableStreamMessageWriter=Ln.AbstractMessageWriter=Ln.MessageWriter=void 0;const xg=Pn,ms=Fe,FI=eo,Mg=on,UI="Content-Length: ",Lg=`\r
`;var Fg;(function(t){function e(n){let r=n;return r&&ms.func(r.dispose)&&ms.func(r.onClose)&&ms.func(r.onError)&&ms.func(r.write)}t.is=e})(Fg||(Ln.MessageWriter=Fg={}));class CT{constructor(){this.errorEmitter=new Mg.Emitter,this.closeEmitter=new Mg.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,n,r){this.errorEmitter.fire([this.asError(e),n,r])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${ms.string(e.message)?e.message:"unknown"}`)}}Ln.AbstractMessageWriter=CT;var ih;(function(t){function e(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,xg.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,xg.default)().applicationJson.encoder}}t.fromOptions=e})(ih||(ih={}));class HI extends CT{constructor(e,n){super(),this.writable=e,this.options=ih.fromOptions(n),this.errorCount=0,this.writeSemaphore=new FI.Semaphore(1),this.writable.onError(r=>this.fireError(r)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(r=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(r):r).then(r=>{const i=[];return i.push(UI,r.byteLength.toString(),Lg),i.push(Lg),this.doWrite(e,i,r)},r=>{throw this.fireError(r),r}))}async doWrite(e,n,r){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(r)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,n){this.errorCount++,this.fireError(e,n,this.errorCount)}end(){this.writable.end()}}Ln.WriteableStreamMessageWriter=HI;var xc={};Object.defineProperty(xc,"__esModule",{value:!0});xc.AbstractMessageBuffer=void 0;const BI=13,jI=10,KI=`\r
`;class qI{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){const n=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let n=0,r=0,i=0,s=0;e:for(;r<this._chunks.length;){const c=this._chunks[r];for(i=0;i<c.length;){switch(c[i]){case BI:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case jI:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}s+=c.byteLength,r++}if(n!==4)return;const o=this._read(s+i),a=new Map,l=this.toString(o,"ascii").split(KI);if(l.length<2)return a;for(let c=0;c<l.length-2;c++){const u=l[c],f=u.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${u}`);const m=u.substr(0,f),g=u.substr(f+1).trim();a.set(e?m.toLowerCase():m,g)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){const s=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(s)}if(this._chunks[0].byteLength>e){const s=this._chunks[0],o=this.asNative(s,e);return this._chunks[0]=s.slice(e),this._totalLength-=e,o}const n=this.allocNative(e);let r=0,i=0;for(;e>0;){const s=this._chunks[i];if(s.byteLength>e){const o=s.slice(0,e);n.set(o,r),r+=e,this._chunks[i]=s.slice(e),this._totalLength-=e,e-=e}else n.set(s,r),r+=s.byteLength,this._chunks.shift(),this._totalLength-=s.byteLength,e-=s.byteLength}return n}}xc.AbstractMessageBuffer=qI;var AT={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.ConnectionOptions=t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.RequestCancellationReceiverStrategy=t.IdCancellationReceiverStrategy=t.ConnectionStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=t.NullLogger=t.ProgressType=t.ProgressToken=void 0;const e=Pn,n=Fe,r=H,i=vn,s=on,o=Yn;var a;(function(k){k.type=new r.NotificationType("$/cancelRequest")})(a||(a={}));var l;(function(k){function C(N){return typeof N=="string"||typeof N=="number"}k.is=C})(l||(t.ProgressToken=l={}));var c;(function(k){k.type=new r.NotificationType("$/progress")})(c||(c={}));class u{constructor(){}}t.ProgressType=u;var f;(function(k){function C(N){return n.func(N)}k.is=C})(f||(f={})),t.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var m;(function(k){k[k.Off=0]="Off",k[k.Messages=1]="Messages",k[k.Compact=2]="Compact",k[k.Verbose=3]="Verbose"})(m||(t.Trace=m={}));var g;(function(k){k.Off="off",k.Messages="messages",k.Compact="compact",k.Verbose="verbose"})(g||(t.TraceValues=g={})),function(k){function C(E){if(!n.string(E))return k.Off;switch(E=E.toLowerCase(),E){case"off":return k.Off;case"messages":return k.Messages;case"compact":return k.Compact;case"verbose":return k.Verbose;default:return k.Off}}k.fromString=C;function N(E){switch(E){case k.Off:return"off";case k.Messages:return"messages";case k.Compact:return"compact";case k.Verbose:return"verbose";default:return"off"}}k.toString=N}(m||(t.Trace=m={}));var d;(function(k){k.Text="text",k.JSON="json"})(d||(t.TraceFormat=d={})),function(k){function C(N){return n.string(N)?(N=N.toLowerCase(),N==="json"?k.JSON:k.Text):k.Text}k.fromString=C}(d||(t.TraceFormat=d={}));var _;(function(k){k.type=new r.NotificationType("$/setTrace")})(_||(t.SetTraceNotification=_={}));var T;(function(k){k.type=new r.NotificationType("$/logTrace")})(T||(t.LogTraceNotification=T={}));var v;(function(k){k[k.Closed=1]="Closed",k[k.Disposed=2]="Disposed",k[k.AlreadyListening=3]="AlreadyListening"})(v||(t.ConnectionErrors=v={}));class p extends Error{constructor(C,N){super(N),this.code=C,Object.setPrototypeOf(this,p.prototype)}}t.ConnectionError=p;var h;(function(k){function C(N){const E=N;return E&&n.func(E.cancelUndispatched)}k.is=C})(h||(t.ConnectionStrategy=h={}));var $;(function(k){function C(N){const E=N;return E&&(E.kind===void 0||E.kind==="id")&&n.func(E.createCancellationTokenSource)&&(E.dispose===void 0||n.func(E.dispose))}k.is=C})($||(t.IdCancellationReceiverStrategy=$={}));var F;(function(k){function C(N){const E=N;return E&&E.kind==="request"&&n.func(E.createCancellationTokenSource)&&(E.dispose===void 0||n.func(E.dispose))}k.is=C})(F||(t.RequestCancellationReceiverStrategy=F={}));var W;(function(k){k.Message=Object.freeze({createCancellationTokenSource(N){return new o.CancellationTokenSource}});function C(N){return $.is(N)||F.is(N)}k.is=C})(W||(t.CancellationReceiverStrategy=W={}));var J;(function(k){k.Message=Object.freeze({sendCancellation(N,E){return N.sendNotification(a.type,{id:E})},cleanup(N){}});function C(N){const E=N;return E&&n.func(E.sendCancellation)&&n.func(E.cleanup)}k.is=C})(J||(t.CancellationSenderStrategy=J={}));var ke;(function(k){k.Message=Object.freeze({receiver:W.Message,sender:J.Message});function C(N){const E=N;return E&&W.is(E.receiver)&&J.is(E.sender)}k.is=C})(ke||(t.CancellationStrategy=ke={}));var Ae;(function(k){function C(N){const E=N;return E&&n.func(E.handleMessage)}k.is=C})(Ae||(t.MessageStrategy=Ae={}));var Ee;(function(k){function C(N){const E=N;return E&&(ke.is(E.cancellationStrategy)||h.is(E.connectionStrategy)||Ae.is(E.messageStrategy))}k.is=C})(Ee||(t.ConnectionOptions=Ee={}));var P;(function(k){k[k.New=1]="New",k[k.Listening=2]="Listening",k[k.Closed=3]="Closed",k[k.Disposed=4]="Disposed"})(P||(P={}));function A(k,C,N,E){const D=N!==void 0?N:t.NullLogger;let Ue=0,x=0,b=0;const te="2.0";let Vt;const Yt=new Map;let Me;const Xt=new Map,ye=new Map;let He,We=new i.LinkedMap,_e=new Map,ze=new Set,Pe=new Map,V=m.Off,qe=d.Text,ue,ft=P.New;const $r=new s.Emitter,ii=new s.Emitter,si=new s.Emitter,oi=new s.Emitter,ai=new s.Emitter,Ft=E&&E.cancellationStrategy?E.cancellationStrategy:ke.Message;function li(R){if(R===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+R.toString()}function no(R){return R===null?"res-unknown-"+(++b).toString():"res-"+R.toString()}function ro(){return"not-"+(++x).toString()}function io(R,S){r.Message.isRequest(S)?R.set(li(S.id),S):r.Message.isResponse(S)?R.set(no(S.id),S):R.set(ro(),S)}function so(R){}function ci(){return ft===P.Listening}function ui(){return ft===P.Closed}function dn(){return ft===P.Disposed}function di(){(ft===P.New||ft===P.Listening)&&(ft=P.Closed,ii.fire(void 0))}function oo(R){$r.fire([R,void 0,void 0])}function ao(R){$r.fire(R)}k.onClose(di),k.onError(oo),C.onClose(di),C.onError(ao);function fi(){He||We.size===0||(He=(0,e.default)().timer.setImmediate(()=>{He=void 0,lo()}))}function pi(R){r.Message.isRequest(R)?uo(R):r.Message.isNotification(R)?po(R):r.Message.isResponse(R)?fo(R):ho(R)}function lo(){if(We.size===0)return;const R=We.shift();try{const S=E==null?void 0:E.messageStrategy;Ae.is(S)?S.handleMessage(R,pi):pi(R)}finally{fi()}}const co=R=>{try{if(r.Message.isNotification(R)&&R.method===a.type.method){const S=R.params.id,I=li(S),U=We.get(I);if(r.Message.isRequest(U)){const ae=E==null?void 0:E.connectionStrategy,de=ae&&ae.cancelUndispatched?ae.cancelUndispatched(U,so):void 0;if(de&&(de.error!==void 0||de.result!==void 0)){We.delete(I),Pe.delete(S),de.id=U.id,tr(de,R.method,Date.now()),C.write(de).catch(()=>D.error("Sending response for canceled message failed."));return}}const he=Pe.get(S);if(he!==void 0){he.cancel(),kr(R);return}else ze.add(S)}io(We,R)}finally{fi()}};function uo(R){if(dn())return;function S(Z,ve,se){const Be={jsonrpc:te,id:R.id};Z instanceof r.ResponseError?Be.error=Z.toJson():Be.result=Z===void 0?null:Z,tr(Be,ve,se),C.write(Be).catch(()=>D.error("Sending response failed."))}function I(Z,ve,se){const Be={jsonrpc:te,id:R.id,error:Z.toJson()};tr(Be,ve,se),C.write(Be).catch(()=>D.error("Sending response failed."))}function U(Z,ve,se){Z===void 0&&(Z=null);const Be={jsonrpc:te,id:R.id,result:Z};tr(Be,ve,se),C.write(Be).catch(()=>D.error("Sending response failed."))}yo(R);const he=Yt.get(R.method);let ae,de;he&&(ae=he.type,de=he.handler);const Oe=Date.now();if(de||Vt){const Z=R.id??String(Date.now()),ve=$.is(Ft.receiver)?Ft.receiver.createCancellationTokenSource(Z):Ft.receiver.createCancellationTokenSource(R);R.id!==null&&ze.has(R.id)&&ve.cancel(),R.id!==null&&Pe.set(Z,ve);try{let se;if(de)if(R.params===void 0){if(ae!==void 0&&ae.numberOfParams!==0){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines ${ae.numberOfParams} params but received none.`),R.method,Oe);return}se=de(ve.token)}else if(Array.isArray(R.params)){if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byName){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by name but received parameters by position`),R.method,Oe);return}se=de(...R.params,ve.token)}else{if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byPosition){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${R.method} defines parameters by position but received parameters by name`),R.method,Oe);return}se=de(R.params,ve.token)}else Vt&&(se=Vt(R.method,R.params,ve.token));const Be=se;se?Be.then?Be.then(st=>{Pe.delete(Z),S(st,R.method,Oe)},st=>{Pe.delete(Z),st instanceof r.ResponseError?I(st,R.method,Oe):st&&n.string(st.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${st.message}`),R.method,Oe):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,Oe)}):(Pe.delete(Z),S(se,R.method,Oe)):(Pe.delete(Z),U(se,R.method,Oe))}catch(se){Pe.delete(Z),se instanceof r.ResponseError?S(se,R.method,Oe):se&&n.string(se.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed with message: ${se.message}`),R.method,Oe):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${R.method} failed unexpectedly without providing any details.`),R.method,Oe)}}else I(new r.ResponseError(r.ErrorCodes.MethodNotFound,`Unhandled method ${R.method}`),R.method,Oe)}function fo(R){if(!dn())if(R.id===null)R.error?D.error(`Received response message without id: Error is: 
${JSON.stringify(R.error,void 0,4)}`):D.error("Received response message without id. No further error information provided.");else{const S=R.id,I=_e.get(S);if(_o(R,I),I!==void 0){_e.delete(S);try{if(R.error){const U=R.error;I.reject(new r.ResponseError(U.code,U.message,U.data))}else if(R.result!==void 0)I.resolve(R.result);else throw new Error("Should never happen.")}catch(U){U.message?D.error(`Response handler '${I.method}' failed with message: ${U.message}`):D.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}function po(R){if(dn())return;let S,I;if(R.method===a.type.method){const U=R.params.id;ze.delete(U),kr(R);return}else{const U=Xt.get(R.method);U&&(I=U.handler,S=U.type)}if(I||Me)try{if(kr(R),I)if(R.params===void 0)S!==void 0&&S.numberOfParams!==0&&S.parameterStructures!==r.ParameterStructures.byName&&D.error(`Notification ${R.method} defines ${S.numberOfParams} params but received none.`),I();else if(Array.isArray(R.params)){const U=R.params;R.method===c.type.method&&U.length===2&&l.is(U[0])?I({token:U[0],value:U[1]}):(S!==void 0&&(S.parameterStructures===r.ParameterStructures.byName&&D.error(`Notification ${R.method} defines parameters by name but received parameters by position`),S.numberOfParams!==R.params.length&&D.error(`Notification ${R.method} defines ${S.numberOfParams} params but received ${U.length} arguments`)),I(...U))}else S!==void 0&&S.parameterStructures===r.ParameterStructures.byPosition&&D.error(`Notification ${R.method} defines parameters by position but received parameters by name`),I(R.params);else Me&&Me(R.method,R.params)}catch(U){U.message?D.error(`Notification handler '${R.method}' failed with message: ${U.message}`):D.error(`Notification handler '${R.method}' failed unexpectedly.`)}else si.fire(R)}function ho(R){if(!R){D.error("Received empty message.");return}D.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(R,null,4)}`);const S=R;if(n.string(S.id)||n.number(S.id)){const I=S.id,U=_e.get(I);U&&U.reject(new Error("The received response has neither a result nor an error property."))}}function Ut(R){if(R!=null)switch(V){case m.Verbose:return JSON.stringify(R,null,4);case m.Compact:return JSON.stringify(R);default:return}}function mo(R){if(!(V===m.Off||!ue))if(qe===d.Text){let S;(V===m.Verbose||V===m.Compact)&&R.params&&(S=`Params: ${Ut(R.params)}

`),ue.log(`Sending request '${R.method} - (${R.id})'.`,S)}else fn("send-request",R)}function go(R){if(!(V===m.Off||!ue))if(qe===d.Text){let S;(V===m.Verbose||V===m.Compact)&&(R.params?S=`Params: ${Ut(R.params)}

`:S=`No parameters provided.

`),ue.log(`Sending notification '${R.method}'.`,S)}else fn("send-notification",R)}function tr(R,S,I){if(!(V===m.Off||!ue))if(qe===d.Text){let U;(V===m.Verbose||V===m.Compact)&&(R.error&&R.error.data?U=`Error data: ${Ut(R.error.data)}

`:R.result?U=`Result: ${Ut(R.result)}

`:R.error===void 0&&(U=`No result returned.

`)),ue.log(`Sending response '${S} - (${R.id})'. Processing request took ${Date.now()-I}ms`,U)}else fn("send-response",R)}function yo(R){if(!(V===m.Off||!ue))if(qe===d.Text){let S;(V===m.Verbose||V===m.Compact)&&R.params&&(S=`Params: ${Ut(R.params)}

`),ue.log(`Received request '${R.method} - (${R.id})'.`,S)}else fn("receive-request",R)}function kr(R){if(!(V===m.Off||!ue||R.method===T.type.method))if(qe===d.Text){let S;(V===m.Verbose||V===m.Compact)&&(R.params?S=`Params: ${Ut(R.params)}

`:S=`No parameters provided.

`),ue.log(`Received notification '${R.method}'.`,S)}else fn("receive-notification",R)}function _o(R,S){if(!(V===m.Off||!ue))if(qe===d.Text){let I;if((V===m.Verbose||V===m.Compact)&&(R.error&&R.error.data?I=`Error data: ${Ut(R.error.data)}

`:R.result?I=`Result: ${Ut(R.result)}

`:R.error===void 0&&(I=`No result returned.

`)),S){const U=R.error?` Request failed: ${R.error.message} (${R.error.code}).`:"";ue.log(`Received response '${S.method} - (${R.id})' in ${Date.now()-S.timerStart}ms.${U}`,I)}else ue.log(`Received response ${R.id} without active response promise.`,I)}else fn("receive-response",R)}function fn(R,S){if(!ue||V===m.Off)return;const I={isLSPMessage:!0,type:R,message:S,timestamp:Date.now()};ue.log(I)}function In(){if(ui())throw new p(v.Closed,"Connection is closed.");if(dn())throw new p(v.Disposed,"Connection is disposed.")}function vo(){if(ci())throw new p(v.AlreadyListening,"Connection is already listening")}function Ro(){if(!ci())throw new Error("Call listen() first.")}function On(R){return R===void 0?null:R}function hi(R){if(R!==null)return R}function y(R){return R!=null&&!Array.isArray(R)&&typeof R=="object"}function Ne(R,S){switch(R){case r.ParameterStructures.auto:return y(S)?hi(S):[On(S)];case r.ParameterStructures.byName:if(!y(S))throw new Error("Received parameters by name but param is not an object literal.");return hi(S);case r.ParameterStructures.byPosition:return[On(S)];default:throw new Error(`Unknown parameter structure ${R.toString()}`)}}function Ie(R,S){let I;const U=R.numberOfParams;switch(U){case 0:I=void 0;break;case 1:I=Ne(R.parameterStructures,S[0]);break;default:I=[];for(let he=0;he<S.length&&he<U;he++)I.push(On(S[he]));if(S.length<U)for(let he=S.length;he<U;he++)I.push(null);break}return I}const G={sendNotification:(R,...S)=>{In();let I,U;if(n.string(R)){I=R;const ae=S[0];let de=0,Oe=r.ParameterStructures.auto;r.ParameterStructures.is(ae)&&(de=1,Oe=ae);let Z=S.length;const ve=Z-de;switch(ve){case 0:U=void 0;break;case 1:U=Ne(Oe,S[de]);break;default:if(Oe===r.ParameterStructures.byName)throw new Error(`Received ${ve} parameters for 'by Name' notification parameter structure.`);U=S.slice(de,Z).map(se=>On(se));break}}else{const ae=S;I=R.method,U=Ie(R,ae)}const he={jsonrpc:te,method:I,params:U};return go(he),C.write(he).catch(ae=>{throw D.error("Sending notification failed."),ae})},onNotification:(R,S)=>{In();let I;return n.func(R)?Me=R:S&&(n.string(R)?(I=R,Xt.set(R,{type:void 0,handler:S})):(I=R.method,Xt.set(R.method,{type:R,handler:S}))),{dispose:()=>{I!==void 0?Xt.delete(I):Me=void 0}}},onProgress:(R,S,I)=>{if(ye.has(S))throw new Error(`Progress handler for token ${S} already registered`);return ye.set(S,I),{dispose:()=>{ye.delete(S)}}},sendProgress:(R,S,I)=>G.sendNotification(c.type,{token:S,value:I}),onUnhandledProgress:oi.event,sendRequest:(R,...S)=>{In(),Ro();let I,U,he;if(n.string(R)){I=R;const Z=S[0],ve=S[S.length-1];let se=0,Be=r.ParameterStructures.auto;r.ParameterStructures.is(Z)&&(se=1,Be=Z);let st=S.length;o.CancellationToken.is(ve)&&(st=st-1,he=ve);const Jt=st-se;switch(Jt){case 0:U=void 0;break;case 1:U=Ne(Be,S[se]);break;default:if(Be===r.ParameterStructures.byName)throw new Error(`Received ${Jt} parameters for 'by Name' request parameter structure.`);U=S.slice(se,st).map(o$=>On(o$));break}}else{const Z=S;I=R.method,U=Ie(R,Z);const ve=R.numberOfParams;he=o.CancellationToken.is(Z[ve])?Z[ve]:void 0}const ae=Ue++;let de;he&&(de=he.onCancellationRequested(()=>{const Z=Ft.sender.sendCancellation(G,ae);return Z===void 0?(D.log(`Received no promise from cancellation strategy when cancelling id ${ae}`),Promise.resolve()):Z.catch(()=>{D.log(`Sending cancellation messages for id ${ae} failed`)})}));const Oe={jsonrpc:te,id:ae,method:I,params:U};return mo(Oe),typeof Ft.sender.enableCancellation=="function"&&Ft.sender.enableCancellation(Oe),new Promise(async(Z,ve)=>{const se=Jt=>{Z(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},Be=Jt=>{ve(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},st={method:I,timerStart:Date.now(),resolve:se,reject:Be};try{await C.write(Oe),_e.set(ae,st)}catch(Jt){throw D.error("Sending request failed."),st.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError,Jt.message?Jt.message:"Unknown reason")),Jt}})},onRequest:(R,S)=>{In();let I=null;return f.is(R)?(I=void 0,Vt=R):n.string(R)?(I=null,S!==void 0&&(I=R,Yt.set(R,{handler:S,type:void 0}))):S!==void 0&&(I=R.method,Yt.set(R.method,{type:R,handler:S})),{dispose:()=>{I!==null&&(I!==void 0?Yt.delete(I):Vt=void 0)}}},hasPendingResponse:()=>_e.size>0,trace:async(R,S,I)=>{let U=!1,he=d.Text;I!==void 0&&(n.boolean(I)?U=I:(U=I.sendNotification||!1,he=I.traceFormat||d.Text)),V=R,qe=he,V===m.Off?ue=void 0:ue=S,U&&!ui()&&!dn()&&await G.sendNotification(_.type,{value:m.toString(R)})},onError:$r.event,onClose:ii.event,onUnhandledNotification:si.event,onDispose:ai.event,end:()=>{C.end()},dispose:()=>{if(dn())return;ft=P.Disposed,ai.fire(void 0);const R=new r.ResponseError(r.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(const S of _e.values())S.reject(R);_e=new Map,Pe=new Map,ze=new Set,We=new i.LinkedMap,n.func(C.dispose)&&C.dispose(),n.func(k.dispose)&&k.dispose()},listen:()=>{In(),vo(),ft=P.Listening,k.listen(co)},inspect:()=>{(0,e.default)().console.log("inspect")}};return G.onNotification(T.type,R=>{if(V===m.Off||!ue)return;const S=V===m.Verbose||V===m.Compact;ue.log(R.message,S?R.verbose:void 0)}),G.onNotification(c.type,R=>{const S=ye.get(R.token);S?S(R.value):oi.fire(R)}),G}t.createMessageConnection=A})(AT);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressType=t.ProgressToken=t.createMessageConnection=t.NullLogger=t.ConnectionOptions=t.ConnectionStrategy=t.AbstractMessageBuffer=t.WriteableStreamMessageWriter=t.AbstractMessageWriter=t.MessageWriter=t.ReadableStreamMessageReader=t.AbstractMessageReader=t.MessageReader=t.SharedArrayReceiverStrategy=t.SharedArraySenderStrategy=t.CancellationToken=t.CancellationTokenSource=t.Emitter=t.Event=t.Disposable=t.LRUCache=t.Touch=t.LinkedMap=t.ParameterStructures=t.NotificationType9=t.NotificationType8=t.NotificationType7=t.NotificationType6=t.NotificationType5=t.NotificationType4=t.NotificationType3=t.NotificationType2=t.NotificationType1=t.NotificationType0=t.NotificationType=t.ErrorCodes=t.ResponseError=t.RequestType9=t.RequestType8=t.RequestType7=t.RequestType6=t.RequestType5=t.RequestType4=t.RequestType3=t.RequestType2=t.RequestType1=t.RequestType0=t.RequestType=t.Message=t.RAL=void 0,t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=void 0;const e=H;Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return e.Message}}),Object.defineProperty(t,"RequestType",{enumerable:!0,get:function(){return e.RequestType}}),Object.defineProperty(t,"RequestType0",{enumerable:!0,get:function(){return e.RequestType0}}),Object.defineProperty(t,"RequestType1",{enumerable:!0,get:function(){return e.RequestType1}}),Object.defineProperty(t,"RequestType2",{enumerable:!0,get:function(){return e.RequestType2}}),Object.defineProperty(t,"RequestType3",{enumerable:!0,get:function(){return e.RequestType3}}),Object.defineProperty(t,"RequestType4",{enumerable:!0,get:function(){return e.RequestType4}}),Object.defineProperty(t,"RequestType5",{enumerable:!0,get:function(){return e.RequestType5}}),Object.defineProperty(t,"RequestType6",{enumerable:!0,get:function(){return e.RequestType6}}),Object.defineProperty(t,"RequestType7",{enumerable:!0,get:function(){return e.RequestType7}}),Object.defineProperty(t,"RequestType8",{enumerable:!0,get:function(){return e.RequestType8}}),Object.defineProperty(t,"RequestType9",{enumerable:!0,get:function(){return e.RequestType9}}),Object.defineProperty(t,"ResponseError",{enumerable:!0,get:function(){return e.ResponseError}}),Object.defineProperty(t,"ErrorCodes",{enumerable:!0,get:function(){return e.ErrorCodes}}),Object.defineProperty(t,"NotificationType",{enumerable:!0,get:function(){return e.NotificationType}}),Object.defineProperty(t,"NotificationType0",{enumerable:!0,get:function(){return e.NotificationType0}}),Object.defineProperty(t,"NotificationType1",{enumerable:!0,get:function(){return e.NotificationType1}}),Object.defineProperty(t,"NotificationType2",{enumerable:!0,get:function(){return e.NotificationType2}}),Object.defineProperty(t,"NotificationType3",{enumerable:!0,get:function(){return e.NotificationType3}}),Object.defineProperty(t,"NotificationType4",{enumerable:!0,get:function(){return e.NotificationType4}}),Object.defineProperty(t,"NotificationType5",{enumerable:!0,get:function(){return e.NotificationType5}}),Object.defineProperty(t,"NotificationType6",{enumerable:!0,get:function(){return e.NotificationType6}}),Object.defineProperty(t,"NotificationType7",{enumerable:!0,get:function(){return e.NotificationType7}}),Object.defineProperty(t,"NotificationType8",{enumerable:!0,get:function(){return e.NotificationType8}}),Object.defineProperty(t,"NotificationType9",{enumerable:!0,get:function(){return e.NotificationType9}}),Object.defineProperty(t,"ParameterStructures",{enumerable:!0,get:function(){return e.ParameterStructures}});const n=vn;Object.defineProperty(t,"LinkedMap",{enumerable:!0,get:function(){return n.LinkedMap}}),Object.defineProperty(t,"LRUCache",{enumerable:!0,get:function(){return n.LRUCache}}),Object.defineProperty(t,"Touch",{enumerable:!0,get:function(){return n.Touch}});const r=Dc;Object.defineProperty(t,"Disposable",{enumerable:!0,get:function(){return r.Disposable}});const i=on;Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return i.Emitter}});const s=Yn;Object.defineProperty(t,"CancellationTokenSource",{enumerable:!0,get:function(){return s.CancellationTokenSource}}),Object.defineProperty(t,"CancellationToken",{enumerable:!0,get:function(){return s.CancellationToken}});const o=Kr;Object.defineProperty(t,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return o.SharedArraySenderStrategy}}),Object.defineProperty(t,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return o.SharedArrayReceiverStrategy}});const a=Mn;Object.defineProperty(t,"MessageReader",{enumerable:!0,get:function(){return a.MessageReader}}),Object.defineProperty(t,"AbstractMessageReader",{enumerable:!0,get:function(){return a.AbstractMessageReader}}),Object.defineProperty(t,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return a.ReadableStreamMessageReader}});const l=Ln;Object.defineProperty(t,"MessageWriter",{enumerable:!0,get:function(){return l.MessageWriter}}),Object.defineProperty(t,"AbstractMessageWriter",{enumerable:!0,get:function(){return l.AbstractMessageWriter}}),Object.defineProperty(t,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return l.WriteableStreamMessageWriter}});const c=xc;Object.defineProperty(t,"AbstractMessageBuffer",{enumerable:!0,get:function(){return c.AbstractMessageBuffer}});const u=AT;Object.defineProperty(t,"ConnectionStrategy",{enumerable:!0,get:function(){return u.ConnectionStrategy}}),Object.defineProperty(t,"ConnectionOptions",{enumerable:!0,get:function(){return u.ConnectionOptions}}),Object.defineProperty(t,"NullLogger",{enumerable:!0,get:function(){return u.NullLogger}}),Object.defineProperty(t,"createMessageConnection",{enumerable:!0,get:function(){return u.createMessageConnection}}),Object.defineProperty(t,"ProgressToken",{enumerable:!0,get:function(){return u.ProgressToken}}),Object.defineProperty(t,"ProgressType",{enumerable:!0,get:function(){return u.ProgressType}}),Object.defineProperty(t,"Trace",{enumerable:!0,get:function(){return u.Trace}}),Object.defineProperty(t,"TraceValues",{enumerable:!0,get:function(){return u.TraceValues}}),Object.defineProperty(t,"TraceFormat",{enumerable:!0,get:function(){return u.TraceFormat}}),Object.defineProperty(t,"SetTraceNotification",{enumerable:!0,get:function(){return u.SetTraceNotification}}),Object.defineProperty(t,"LogTraceNotification",{enumerable:!0,get:function(){return u.LogTraceNotification}}),Object.defineProperty(t,"ConnectionErrors",{enumerable:!0,get:function(){return u.ConnectionErrors}}),Object.defineProperty(t,"ConnectionError",{enumerable:!0,get:function(){return u.ConnectionError}}),Object.defineProperty(t,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return u.CancellationReceiverStrategy}}),Object.defineProperty(t,"CancellationSenderStrategy",{enumerable:!0,get:function(){return u.CancellationSenderStrategy}}),Object.defineProperty(t,"CancellationStrategy",{enumerable:!0,get:function(){return u.CancellationStrategy}}),Object.defineProperty(t,"MessageStrategy",{enumerable:!0,get:function(){return u.MessageStrategy}});const f=Pn;t.RAL=f.default})(nc);Object.defineProperty(Qh,"__esModule",{value:!0});const Zt=nc;class Mc extends Zt.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return Mc.emptyBuffer}fromString(e,n){return new TextEncoder().encode(e)}toString(e,n){return n==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(n).decode(e)}asNative(e,n){return n===void 0?e:e.slice(0,n)}allocNative(e){return new Uint8Array(e)}}Mc.emptyBuffer=new Uint8Array(0);class GI{constructor(e){this.socket=e,this._onData=new Zt.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Zt.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}}class WI{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,n){if(typeof e=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}}const zI=new TextEncoder,ET=Object.freeze({messageBuffer:Object.freeze({create:t=>new Mc(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(zI.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new GI(t),asWritableStream:t=>new WI(t)}),console,timer:Object.freeze({setTimeout(t,e,...n){const r=setTimeout(t,e,...n);return{dispose:()=>clearTimeout(r)}},setImmediate(t,...e){const n=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(n)}},setInterval(t,e,...n){const r=setInterval(t,e,...n);return{dispose:()=>clearInterval(r)}}})});function sh(){return ET}(function(t){function e(){Zt.RAL.install(ET)}t.install=e})(sh||(sh={}));Qh.default=sh;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(l,c,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(c,u);(!m||("get"in m?!c.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,f,m)}:function(l,c,u,f){f===void 0&&(f=u),l[f]=c[u]}),n=xe&&xe.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.BrowserMessageWriter=t.BrowserMessageReader=void 0,Qh.default.install();const i=nc;n(nc,t);class s extends i.AbstractMessageReader{constructor(c){super(),this._onData=new i.Emitter,this._messageListener=u=>{this._onData.fire(u.data)},c.addEventListener("error",u=>this.fireError(u)),c.onmessage=this._messageListener}listen(c){return this._onData.event(c)}}t.BrowserMessageReader=s;class o extends i.AbstractMessageWriter{constructor(c){super(),this.port=c,this.errorCount=0,c.addEventListener("error",u=>this.fireError(u))}write(c){try{return this.port.postMessage(c),Promise.resolve()}catch(u){return this.handleError(u,c),Promise.reject(u)}}handleError(c,u){this.errorCount++,this.fireError(c,u,this.errorCount)}end(){}}t.BrowserMessageWriter=o;function a(l,c,u,f){return u===void 0&&(u=i.NullLogger),i.ConnectionStrategy.is(f)&&(f={connectionStrategy:f}),(0,i.createMessageConnection)(l,c,u,f)}t.createMessageConnection=a})(Tr);var Ug=Tr,PT={},em=JN(PN),X={};Object.defineProperty(X,"__esModule",{value:!0});X.ProtocolNotificationType=X.ProtocolNotificationType0=X.ProtocolRequestType=X.ProtocolRequestType0=X.RegistrationType=X.MessageDirection=void 0;const qr=Tr;var Hg;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(Hg||(X.MessageDirection=Hg={}));class VI{constructor(e){this.method=e}}X.RegistrationType=VI;class YI extends qr.RequestType0{constructor(e){super(e)}}X.ProtocolRequestType0=YI;class XI extends qr.RequestType{constructor(e){super(e,qr.ParameterStructures.byName)}}X.ProtocolRequestType=XI;class JI extends qr.NotificationType0{constructor(e){super(e)}}X.ProtocolNotificationType0=JI;class QI extends qr.NotificationType{constructor(e){super(e,qr.ParameterStructures.byName)}}X.ProtocolNotificationType=QI;var NT={},be={};Object.defineProperty(be,"__esModule",{value:!0});be.objectLiteral=be.typedArray=be.stringArray=be.array=be.func=be.error=be.number=be.string=be.boolean=void 0;function ZI(t){return t===!0||t===!1}be.boolean=ZI;function IT(t){return typeof t=="string"||t instanceof String}be.string=IT;function eO(t){return typeof t=="number"||t instanceof Number}be.number=eO;function tO(t){return t instanceof Error}be.error=tO;function nO(t){return typeof t=="function"}be.func=nO;function OT(t){return Array.isArray(t)}be.array=OT;function rO(t){return OT(t)&&t.every(e=>IT(e))}be.stringArray=rO;function iO(t,e){return Array.isArray(t)&&t.every(e)}be.typedArray=iO;function sO(t){return t!==null&&typeof t=="object"}be.objectLiteral=sO;var Lc={};Object.defineProperty(Lc,"__esModule",{value:!0});Lc.ImplementationRequest=void 0;const Bg=X;var jg;(function(t){t.method="textDocument/implementation",t.messageDirection=Bg.MessageDirection.clientToServer,t.type=new Bg.ProtocolRequestType(t.method)})(jg||(Lc.ImplementationRequest=jg={}));var Fc={};Object.defineProperty(Fc,"__esModule",{value:!0});Fc.TypeDefinitionRequest=void 0;const Kg=X;var qg;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Kg.MessageDirection.clientToServer,t.type=new Kg.ProtocolRequestType(t.method)})(qg||(Fc.TypeDefinitionRequest=qg={}));var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.DidChangeWorkspaceFoldersNotification=Gr.WorkspaceFoldersRequest=void 0;const rc=X;var Gg;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=rc.MessageDirection.serverToClient,t.type=new rc.ProtocolRequestType0(t.method)})(Gg||(Gr.WorkspaceFoldersRequest=Gg={}));var Wg;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=rc.MessageDirection.clientToServer,t.type=new rc.ProtocolNotificationType(t.method)})(Wg||(Gr.DidChangeWorkspaceFoldersNotification=Wg={}));var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.ConfigurationRequest=void 0;const zg=X;var Vg;(function(t){t.method="workspace/configuration",t.messageDirection=zg.MessageDirection.serverToClient,t.type=new zg.ProtocolRequestType(t.method)})(Vg||(Uc.ConfigurationRequest=Vg={}));var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.ColorPresentationRequest=Wr.DocumentColorRequest=void 0;const ic=X;var Yg;(function(t){t.method="textDocument/documentColor",t.messageDirection=ic.MessageDirection.clientToServer,t.type=new ic.ProtocolRequestType(t.method)})(Yg||(Wr.DocumentColorRequest=Yg={}));var Xg;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=ic.MessageDirection.clientToServer,t.type=new ic.ProtocolRequestType(t.method)})(Xg||(Wr.ColorPresentationRequest=Xg={}));var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.FoldingRangeRefreshRequest=zr.FoldingRangeRequest=void 0;const sc=X;var Jg;(function(t){t.method="textDocument/foldingRange",t.messageDirection=sc.MessageDirection.clientToServer,t.type=new sc.ProtocolRequestType(t.method)})(Jg||(zr.FoldingRangeRequest=Jg={}));var Qg;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=sc.MessageDirection.serverToClient,t.type=new sc.ProtocolRequestType0(t.method)})(Qg||(zr.FoldingRangeRefreshRequest=Qg={}));var Hc={};Object.defineProperty(Hc,"__esModule",{value:!0});Hc.DeclarationRequest=void 0;const Zg=X;var ey;(function(t){t.method="textDocument/declaration",t.messageDirection=Zg.MessageDirection.clientToServer,t.type=new Zg.ProtocolRequestType(t.method)})(ey||(Hc.DeclarationRequest=ey={}));var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});Bc.SelectionRangeRequest=void 0;const ty=X;var ny;(function(t){t.method="textDocument/selectionRange",t.messageDirection=ty.MessageDirection.clientToServer,t.type=new ty.ProtocolRequestType(t.method)})(ny||(Bc.SelectionRangeRequest=ny={}));var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.WorkDoneProgressCancelNotification=Fn.WorkDoneProgressCreateRequest=Fn.WorkDoneProgress=void 0;const oO=Tr,oc=X;var ry;(function(t){t.type=new oO.ProgressType;function e(n){return n===t.type}t.is=e})(ry||(Fn.WorkDoneProgress=ry={}));var iy;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=oc.MessageDirection.serverToClient,t.type=new oc.ProtocolRequestType(t.method)})(iy||(Fn.WorkDoneProgressCreateRequest=iy={}));var sy;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=oc.MessageDirection.clientToServer,t.type=new oc.ProtocolNotificationType(t.method)})(sy||(Fn.WorkDoneProgressCancelNotification=sy={}));var Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.CallHierarchyOutgoingCallsRequest=Un.CallHierarchyIncomingCallsRequest=Un.CallHierarchyPrepareRequest=void 0;const Vr=X;var oy;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(oy||(Un.CallHierarchyPrepareRequest=oy={}));var ay;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(ay||(Un.CallHierarchyIncomingCallsRequest=ay={}));var ly;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(ly||(Un.CallHierarchyOutgoingCallsRequest=ly={}));var pt={};Object.defineProperty(pt,"__esModule",{value:!0});pt.SemanticTokensRefreshRequest=pt.SemanticTokensRangeRequest=pt.SemanticTokensDeltaRequest=pt.SemanticTokensRequest=pt.SemanticTokensRegistrationType=pt.TokenFormat=void 0;const bn=X;var cy;(function(t){t.Relative="relative"})(cy||(pt.TokenFormat=cy={}));var xs;(function(t){t.method="textDocument/semanticTokens",t.type=new bn.RegistrationType(t.method)})(xs||(pt.SemanticTokensRegistrationType=xs={}));var uy;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=bn.MessageDirection.clientToServer,t.type=new bn.ProtocolRequestType(t.method),t.registrationMethod=xs.method})(uy||(pt.SemanticTokensRequest=uy={}));var dy;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=bn.MessageDirection.clientToServer,t.type=new bn.ProtocolRequestType(t.method),t.registrationMethod=xs.method})(dy||(pt.SemanticTokensDeltaRequest=dy={}));var fy;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=bn.MessageDirection.clientToServer,t.type=new bn.ProtocolRequestType(t.method),t.registrationMethod=xs.method})(fy||(pt.SemanticTokensRangeRequest=fy={}));var py;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=bn.MessageDirection.serverToClient,t.type=new bn.ProtocolRequestType0(t.method)})(py||(pt.SemanticTokensRefreshRequest=py={}));var jc={};Object.defineProperty(jc,"__esModule",{value:!0});jc.ShowDocumentRequest=void 0;const hy=X;var my;(function(t){t.method="window/showDocument",t.messageDirection=hy.MessageDirection.serverToClient,t.type=new hy.ProtocolRequestType(t.method)})(my||(jc.ShowDocumentRequest=my={}));var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0});Kc.LinkedEditingRangeRequest=void 0;const gy=X;var yy;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=gy.MessageDirection.clientToServer,t.type=new gy.ProtocolRequestType(t.method)})(yy||(Kc.LinkedEditingRangeRequest=yy={}));var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.WillDeleteFilesRequest=tt.DidDeleteFilesNotification=tt.DidRenameFilesNotification=tt.WillRenameFilesRequest=tt.DidCreateFilesNotification=tt.WillCreateFilesRequest=tt.FileOperationPatternKind=void 0;const Lt=X;var _y;(function(t){t.file="file",t.folder="folder"})(_y||(tt.FileOperationPatternKind=_y={}));var vy;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolRequestType(t.method)})(vy||(tt.WillCreateFilesRequest=vy={}));var Ry;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolNotificationType(t.method)})(Ry||(tt.DidCreateFilesNotification=Ry={}));var Ty;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolRequestType(t.method)})(Ty||(tt.WillRenameFilesRequest=Ty={}));var $y;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolNotificationType(t.method)})($y||(tt.DidRenameFilesNotification=$y={}));var ky;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolNotificationType(t.method)})(ky||(tt.DidDeleteFilesNotification=ky={}));var wy;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Lt.MessageDirection.clientToServer,t.type=new Lt.ProtocolRequestType(t.method)})(wy||(tt.WillDeleteFilesRequest=wy={}));var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.MonikerRequest=Hn.MonikerKind=Hn.UniquenessLevel=void 0;const by=X;var Sy;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Sy||(Hn.UniquenessLevel=Sy={}));var Cy;(function(t){t.$import="import",t.$export="export",t.local="local"})(Cy||(Hn.MonikerKind=Cy={}));var Ay;(function(t){t.method="textDocument/moniker",t.messageDirection=by.MessageDirection.clientToServer,t.type=new by.ProtocolRequestType(t.method)})(Ay||(Hn.MonikerRequest=Ay={}));var Bn={};Object.defineProperty(Bn,"__esModule",{value:!0});Bn.TypeHierarchySubtypesRequest=Bn.TypeHierarchySupertypesRequest=Bn.TypeHierarchyPrepareRequest=void 0;const Yr=X;var Ey;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(Ey||(Bn.TypeHierarchyPrepareRequest=Ey={}));var Py;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(Py||(Bn.TypeHierarchySupertypesRequest=Py={}));var Ny;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(Ny||(Bn.TypeHierarchySubtypesRequest=Ny={}));var Xr={};Object.defineProperty(Xr,"__esModule",{value:!0});Xr.InlineValueRefreshRequest=Xr.InlineValueRequest=void 0;const ac=X;var Iy;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ac.MessageDirection.clientToServer,t.type=new ac.ProtocolRequestType(t.method)})(Iy||(Xr.InlineValueRequest=Iy={}));var Oy;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ac.MessageDirection.serverToClient,t.type=new ac.ProtocolRequestType0(t.method)})(Oy||(Xr.InlineValueRefreshRequest=Oy={}));var jn={};Object.defineProperty(jn,"__esModule",{value:!0});jn.InlayHintRefreshRequest=jn.InlayHintResolveRequest=jn.InlayHintRequest=void 0;const Jr=X;var Dy;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method)})(Dy||(jn.InlayHintRequest=Dy={}));var xy;(function(t){t.method="inlayHint/resolve",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method)})(xy||(jn.InlayHintResolveRequest=xy={}));var My;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Jr.MessageDirection.serverToClient,t.type=new Jr.ProtocolRequestType0(t.method)})(My||(jn.InlayHintRefreshRequest=My={}));var Pt={};Object.defineProperty(Pt,"__esModule",{value:!0});Pt.DiagnosticRefreshRequest=Pt.WorkspaceDiagnosticRequest=Pt.DocumentDiagnosticRequest=Pt.DocumentDiagnosticReportKind=Pt.DiagnosticServerCancellationData=void 0;const DT=Tr,aO=be,Qr=X;var Ly;(function(t){function e(n){const r=n;return r&&aO.boolean(r.retriggerRequest)}t.is=e})(Ly||(Pt.DiagnosticServerCancellationData=Ly={}));var Fy;(function(t){t.Full="full",t.Unchanged="unchanged"})(Fy||(Pt.DocumentDiagnosticReportKind=Fy={}));var Uy;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Qr.MessageDirection.clientToServer,t.type=new Qr.ProtocolRequestType(t.method),t.partialResult=new DT.ProgressType})(Uy||(Pt.DocumentDiagnosticRequest=Uy={}));var Hy;(function(t){t.method="workspace/diagnostic",t.messageDirection=Qr.MessageDirection.clientToServer,t.type=new Qr.ProtocolRequestType(t.method),t.partialResult=new DT.ProgressType})(Hy||(Pt.WorkspaceDiagnosticRequest=Hy={}));var By;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Qr.MessageDirection.serverToClient,t.type=new Qr.ProtocolRequestType0(t.method)})(By||(Pt.DiagnosticRefreshRequest=By={}));var we={};Object.defineProperty(we,"__esModule",{value:!0});we.DidCloseNotebookDocumentNotification=we.DidSaveNotebookDocumentNotification=we.DidChangeNotebookDocumentNotification=we.NotebookCellArrayChange=we.DidOpenNotebookDocumentNotification=we.NotebookDocumentSyncRegistrationType=we.NotebookDocument=we.NotebookCell=we.ExecutionSummary=we.NotebookCellKind=void 0;const Ms=em,Bt=be,an=X;var oh;(function(t){t.Markup=1,t.Code=2;function e(n){return n===1||n===2}t.is=e})(oh||(we.NotebookCellKind=oh={}));var ah;(function(t){function e(i,s){const o={executionOrder:i};return(s===!0||s===!1)&&(o.success=s),o}t.create=e;function n(i){const s=i;return Bt.objectLiteral(s)&&Ms.uinteger.is(s.executionOrder)&&(s.success===void 0||Bt.boolean(s.success))}t.is=n;function r(i,s){return i===s?!0:i==null||s===null||s===void 0?!1:i.executionOrder===s.executionOrder&&i.success===s.success}t.equals=r})(ah||(we.ExecutionSummary=ah={}));var lc;(function(t){function e(s,o){return{kind:s,document:o}}t.create=e;function n(s){const o=s;return Bt.objectLiteral(o)&&oh.is(o.kind)&&Ms.DocumentUri.is(o.document)&&(o.metadata===void 0||Bt.objectLiteral(o.metadata))}t.is=n;function r(s,o){const a=new Set;return s.document!==o.document&&a.add("document"),s.kind!==o.kind&&a.add("kind"),s.executionSummary!==o.executionSummary&&a.add("executionSummary"),(s.metadata!==void 0||o.metadata!==void 0)&&!i(s.metadata,o.metadata)&&a.add("metadata"),(s.executionSummary!==void 0||o.executionSummary!==void 0)&&!ah.equals(s.executionSummary,o.executionSummary)&&a.add("executionSummary"),a}t.diff=r;function i(s,o){if(s===o)return!0;if(s==null||o===null||o===void 0||typeof s!=typeof o||typeof s!="object")return!1;const a=Array.isArray(s),l=Array.isArray(o);if(a!==l)return!1;if(a&&l){if(s.length!==o.length)return!1;for(let c=0;c<s.length;c++)if(!i(s[c],o[c]))return!1}if(Bt.objectLiteral(s)&&Bt.objectLiteral(o)){const c=Object.keys(s),u=Object.keys(o);if(c.length!==u.length||(c.sort(),u.sort(),!i(c,u)))return!1;for(let f=0;f<c.length;f++){const m=c[f];if(!i(s[m],o[m]))return!1}}return!0}})(lc||(we.NotebookCell=lc={}));var jy;(function(t){function e(r,i,s,o){return{uri:r,notebookType:i,version:s,cells:o}}t.create=e;function n(r){const i=r;return Bt.objectLiteral(i)&&Bt.string(i.uri)&&Ms.integer.is(i.version)&&Bt.typedArray(i.cells,lc.is)}t.is=n})(jy||(we.NotebookDocument=jy={}));var Zr;(function(t){t.method="notebookDocument/sync",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.RegistrationType(t.method)})(Zr||(we.NotebookDocumentSyncRegistrationType=Zr={}));var Ky;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Ky||(we.DidOpenNotebookDocumentNotification=Ky={}));var qy;(function(t){function e(r){const i=r;return Bt.objectLiteral(i)&&Ms.uinteger.is(i.start)&&Ms.uinteger.is(i.deleteCount)&&(i.cells===void 0||Bt.typedArray(i.cells,lc.is))}t.is=e;function n(r,i,s){const o={start:r,deleteCount:i};return s!==void 0&&(o.cells=s),o}t.create=n})(qy||(we.NotebookCellArrayChange=qy={}));var Gy;(function(t){t.method="notebookDocument/didChange",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Gy||(we.DidChangeNotebookDocumentNotification=Gy={}));var Wy;(function(t){t.method="notebookDocument/didSave",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Wy||(we.DidSaveNotebookDocumentNotification=Wy={}));var zy;(function(t){t.method="notebookDocument/didClose",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(zy||(we.DidCloseNotebookDocumentNotification=zy={}));var qc={};Object.defineProperty(qc,"__esModule",{value:!0});qc.InlineCompletionRequest=void 0;const Vy=X;var Yy;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=Vy.MessageDirection.clientToServer,t.type=new Vy.ProtocolRequestType(t.method)})(Yy||(qc.InlineCompletionRequest=Yy={}));(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSymbolRequest=t.CodeActionResolveRequest=t.CodeActionRequest=t.DocumentSymbolRequest=t.DocumentHighlightRequest=t.ReferencesRequest=t.DefinitionRequest=t.SignatureHelpRequest=t.SignatureHelpTriggerKind=t.HoverRequest=t.CompletionResolveRequest=t.CompletionRequest=t.CompletionTriggerKind=t.PublishDiagnosticsNotification=t.WatchKind=t.RelativePattern=t.FileChangeType=t.DidChangeWatchedFilesNotification=t.WillSaveTextDocumentWaitUntilRequest=t.WillSaveTextDocumentNotification=t.TextDocumentSaveReason=t.DidSaveTextDocumentNotification=t.DidCloseTextDocumentNotification=t.DidChangeTextDocumentNotification=t.TextDocumentContentChangeEvent=t.DidOpenTextDocumentNotification=t.TextDocumentSyncKind=t.TelemetryEventNotification=t.LogMessageNotification=t.ShowMessageRequest=t.ShowMessageNotification=t.MessageType=t.DidChangeConfigurationNotification=t.ExitNotification=t.ShutdownRequest=t.InitializedNotification=t.InitializeErrorCodes=t.InitializeRequest=t.WorkDoneProgressOptions=t.TextDocumentRegistrationOptions=t.StaticRegistrationOptions=t.PositionEncodingKind=t.FailureHandlingKind=t.ResourceOperationKind=t.UnregistrationRequest=t.RegistrationRequest=t.DocumentSelector=t.NotebookCellTextDocumentFilter=t.NotebookDocumentFilter=t.TextDocumentFilter=void 0,t.MonikerRequest=t.MonikerKind=t.UniquenessLevel=t.WillDeleteFilesRequest=t.DidDeleteFilesNotification=t.WillRenameFilesRequest=t.DidRenameFilesNotification=t.WillCreateFilesRequest=t.DidCreateFilesNotification=t.FileOperationPatternKind=t.LinkedEditingRangeRequest=t.ShowDocumentRequest=t.SemanticTokensRegistrationType=t.SemanticTokensRefreshRequest=t.SemanticTokensRangeRequest=t.SemanticTokensDeltaRequest=t.SemanticTokensRequest=t.TokenFormat=t.CallHierarchyPrepareRequest=t.CallHierarchyOutgoingCallsRequest=t.CallHierarchyIncomingCallsRequest=t.WorkDoneProgressCancelNotification=t.WorkDoneProgressCreateRequest=t.WorkDoneProgress=t.SelectionRangeRequest=t.DeclarationRequest=t.FoldingRangeRefreshRequest=t.FoldingRangeRequest=t.ColorPresentationRequest=t.DocumentColorRequest=t.ConfigurationRequest=t.DidChangeWorkspaceFoldersNotification=t.WorkspaceFoldersRequest=t.TypeDefinitionRequest=t.ImplementationRequest=t.ApplyWorkspaceEditRequest=t.ExecuteCommandRequest=t.PrepareRenameRequest=t.RenameRequest=t.PrepareSupportDefaultBehavior=t.DocumentOnTypeFormattingRequest=t.DocumentRangesFormattingRequest=t.DocumentRangeFormattingRequest=t.DocumentFormattingRequest=t.DocumentLinkResolveRequest=t.DocumentLinkRequest=t.CodeLensRefreshRequest=t.CodeLensResolveRequest=t.CodeLensRequest=t.WorkspaceSymbolResolveRequest=void 0,t.InlineCompletionRequest=t.DidCloseNotebookDocumentNotification=t.DidSaveNotebookDocumentNotification=t.DidChangeNotebookDocumentNotification=t.NotebookCellArrayChange=t.DidOpenNotebookDocumentNotification=t.NotebookDocumentSyncRegistrationType=t.NotebookDocument=t.NotebookCell=t.ExecutionSummary=t.NotebookCellKind=t.DiagnosticRefreshRequest=t.WorkspaceDiagnosticRequest=t.DocumentDiagnosticRequest=t.DocumentDiagnosticReportKind=t.DiagnosticServerCancellationData=t.InlayHintRefreshRequest=t.InlayHintResolveRequest=t.InlayHintRequest=t.InlineValueRefreshRequest=t.InlineValueRequest=t.TypeHierarchySupertypesRequest=t.TypeHierarchySubtypesRequest=t.TypeHierarchyPrepareRequest=void 0;const e=X,n=em,r=be,i=Lc;Object.defineProperty(t,"ImplementationRequest",{enumerable:!0,get:function(){return i.ImplementationRequest}});const s=Fc;Object.defineProperty(t,"TypeDefinitionRequest",{enumerable:!0,get:function(){return s.TypeDefinitionRequest}});const o=Gr;Object.defineProperty(t,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return o.WorkspaceFoldersRequest}}),Object.defineProperty(t,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return o.DidChangeWorkspaceFoldersNotification}});const a=Uc;Object.defineProperty(t,"ConfigurationRequest",{enumerable:!0,get:function(){return a.ConfigurationRequest}});const l=Wr;Object.defineProperty(t,"DocumentColorRequest",{enumerable:!0,get:function(){return l.DocumentColorRequest}}),Object.defineProperty(t,"ColorPresentationRequest",{enumerable:!0,get:function(){return l.ColorPresentationRequest}});const c=zr;Object.defineProperty(t,"FoldingRangeRequest",{enumerable:!0,get:function(){return c.FoldingRangeRequest}}),Object.defineProperty(t,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return c.FoldingRangeRefreshRequest}});const u=Hc;Object.defineProperty(t,"DeclarationRequest",{enumerable:!0,get:function(){return u.DeclarationRequest}});const f=Bc;Object.defineProperty(t,"SelectionRangeRequest",{enumerable:!0,get:function(){return f.SelectionRangeRequest}});const m=Fn;Object.defineProperty(t,"WorkDoneProgress",{enumerable:!0,get:function(){return m.WorkDoneProgress}}),Object.defineProperty(t,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return m.WorkDoneProgressCreateRequest}}),Object.defineProperty(t,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return m.WorkDoneProgressCancelNotification}});const g=Un;Object.defineProperty(t,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyIncomingCallsRequest}}),Object.defineProperty(t,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyOutgoingCallsRequest}}),Object.defineProperty(t,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return g.CallHierarchyPrepareRequest}});const d=pt;Object.defineProperty(t,"TokenFormat",{enumerable:!0,get:function(){return d.TokenFormat}}),Object.defineProperty(t,"SemanticTokensRequest",{enumerable:!0,get:function(){return d.SemanticTokensRequest}}),Object.defineProperty(t,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return d.SemanticTokensDeltaRequest}}),Object.defineProperty(t,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return d.SemanticTokensRangeRequest}}),Object.defineProperty(t,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return d.SemanticTokensRefreshRequest}}),Object.defineProperty(t,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return d.SemanticTokensRegistrationType}});const _=jc;Object.defineProperty(t,"ShowDocumentRequest",{enumerable:!0,get:function(){return _.ShowDocumentRequest}});const T=Kc;Object.defineProperty(t,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return T.LinkedEditingRangeRequest}});const v=tt;Object.defineProperty(t,"FileOperationPatternKind",{enumerable:!0,get:function(){return v.FileOperationPatternKind}}),Object.defineProperty(t,"DidCreateFilesNotification",{enumerable:!0,get:function(){return v.DidCreateFilesNotification}}),Object.defineProperty(t,"WillCreateFilesRequest",{enumerable:!0,get:function(){return v.WillCreateFilesRequest}}),Object.defineProperty(t,"DidRenameFilesNotification",{enumerable:!0,get:function(){return v.DidRenameFilesNotification}}),Object.defineProperty(t,"WillRenameFilesRequest",{enumerable:!0,get:function(){return v.WillRenameFilesRequest}}),Object.defineProperty(t,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return v.DidDeleteFilesNotification}}),Object.defineProperty(t,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return v.WillDeleteFilesRequest}});const p=Hn;Object.defineProperty(t,"UniquenessLevel",{enumerable:!0,get:function(){return p.UniquenessLevel}}),Object.defineProperty(t,"MonikerKind",{enumerable:!0,get:function(){return p.MonikerKind}}),Object.defineProperty(t,"MonikerRequest",{enumerable:!0,get:function(){return p.MonikerRequest}});const h=Bn;Object.defineProperty(t,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return h.TypeHierarchyPrepareRequest}}),Object.defineProperty(t,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return h.TypeHierarchySubtypesRequest}}),Object.defineProperty(t,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return h.TypeHierarchySupertypesRequest}});const $=Xr;Object.defineProperty(t,"InlineValueRequest",{enumerable:!0,get:function(){return $.InlineValueRequest}}),Object.defineProperty(t,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return $.InlineValueRefreshRequest}});const F=jn;Object.defineProperty(t,"InlayHintRequest",{enumerable:!0,get:function(){return F.InlayHintRequest}}),Object.defineProperty(t,"InlayHintResolveRequest",{enumerable:!0,get:function(){return F.InlayHintResolveRequest}}),Object.defineProperty(t,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return F.InlayHintRefreshRequest}});const W=Pt;Object.defineProperty(t,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return W.DiagnosticServerCancellationData}}),Object.defineProperty(t,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return W.DocumentDiagnosticReportKind}}),Object.defineProperty(t,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return W.DocumentDiagnosticRequest}}),Object.defineProperty(t,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return W.WorkspaceDiagnosticRequest}}),Object.defineProperty(t,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return W.DiagnosticRefreshRequest}});const J=we;Object.defineProperty(t,"NotebookCellKind",{enumerable:!0,get:function(){return J.NotebookCellKind}}),Object.defineProperty(t,"ExecutionSummary",{enumerable:!0,get:function(){return J.ExecutionSummary}}),Object.defineProperty(t,"NotebookCell",{enumerable:!0,get:function(){return J.NotebookCell}}),Object.defineProperty(t,"NotebookDocument",{enumerable:!0,get:function(){return J.NotebookDocument}}),Object.defineProperty(t,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return J.NotebookDocumentSyncRegistrationType}}),Object.defineProperty(t,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidOpenNotebookDocumentNotification}}),Object.defineProperty(t,"NotebookCellArrayChange",{enumerable:!0,get:function(){return J.NotebookCellArrayChange}}),Object.defineProperty(t,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidChangeNotebookDocumentNotification}}),Object.defineProperty(t,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidSaveNotebookDocumentNotification}}),Object.defineProperty(t,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidCloseNotebookDocumentNotification}});const ke=qc;Object.defineProperty(t,"InlineCompletionRequest",{enumerable:!0,get:function(){return ke.InlineCompletionRequest}});var Ae;(function(y){function Ne(Ie){const G=Ie;return r.string(G)||r.string(G.language)||r.string(G.scheme)||r.string(G.pattern)}y.is=Ne})(Ae||(t.TextDocumentFilter=Ae={}));var Ee;(function(y){function Ne(Ie){const G=Ie;return r.objectLiteral(G)&&(r.string(G.notebookType)||r.string(G.scheme)||r.string(G.pattern))}y.is=Ne})(Ee||(t.NotebookDocumentFilter=Ee={}));var P;(function(y){function Ne(Ie){const G=Ie;return r.objectLiteral(G)&&(r.string(G.notebook)||Ee.is(G.notebook))&&(G.language===void 0||r.string(G.language))}y.is=Ne})(P||(t.NotebookCellTextDocumentFilter=P={}));var A;(function(y){function Ne(Ie){if(!Array.isArray(Ie))return!1;for(let G of Ie)if(!r.string(G)&&!Ae.is(G)&&!P.is(G))return!1;return!0}y.is=Ne})(A||(t.DocumentSelector=A={}));var k;(function(y){y.method="client/registerCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(k||(t.RegistrationRequest=k={}));var C;(function(y){y.method="client/unregisterCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(C||(t.UnregistrationRequest=C={}));var N;(function(y){y.Create="create",y.Rename="rename",y.Delete="delete"})(N||(t.ResourceOperationKind=N={}));var E;(function(y){y.Abort="abort",y.Transactional="transactional",y.TextOnlyTransactional="textOnlyTransactional",y.Undo="undo"})(E||(t.FailureHandlingKind=E={}));var D;(function(y){y.UTF8="utf-8",y.UTF16="utf-16",y.UTF32="utf-32"})(D||(t.PositionEncodingKind=D={}));var Ue;(function(y){function Ne(Ie){const G=Ie;return G&&r.string(G.id)&&G.id.length>0}y.hasId=Ne})(Ue||(t.StaticRegistrationOptions=Ue={}));var x;(function(y){function Ne(Ie){const G=Ie;return G&&(G.documentSelector===null||A.is(G.documentSelector))}y.is=Ne})(x||(t.TextDocumentRegistrationOptions=x={}));var b;(function(y){function Ne(G){const R=G;return r.objectLiteral(R)&&(R.workDoneProgress===void 0||r.boolean(R.workDoneProgress))}y.is=Ne;function Ie(G){const R=G;return R&&r.boolean(R.workDoneProgress)}y.hasWorkDoneProgress=Ie})(b||(t.WorkDoneProgressOptions=b={}));var te;(function(y){y.method="initialize",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(te||(t.InitializeRequest=te={}));var Vt;(function(y){y.unknownProtocolVersion=1})(Vt||(t.InitializeErrorCodes=Vt={}));var Yt;(function(y){y.method="initialized",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Yt||(t.InitializedNotification=Yt={}));var Me;(function(y){y.method="shutdown",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType0(y.method)})(Me||(t.ShutdownRequest=Me={}));var Xt;(function(y){y.method="exit",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType0(y.method)})(Xt||(t.ExitNotification=Xt={}));var ye;(function(y){y.method="workspace/didChangeConfiguration",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ye||(t.DidChangeConfigurationNotification=ye={}));var He;(function(y){y.Error=1,y.Warning=2,y.Info=3,y.Log=4,y.Debug=5})(He||(t.MessageType=He={}));var We;(function(y){y.method="window/showMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(We||(t.ShowMessageNotification=We={}));var _e;(function(y){y.method="window/showMessageRequest",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(_e||(t.ShowMessageRequest=_e={}));var ze;(function(y){y.method="window/logMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(ze||(t.LogMessageNotification=ze={}));var Pe;(function(y){y.method="telemetry/event",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Pe||(t.TelemetryEventNotification=Pe={}));var V;(function(y){y.None=0,y.Full=1,y.Incremental=2})(V||(t.TextDocumentSyncKind=V={}));var qe;(function(y){y.method="textDocument/didOpen",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(qe||(t.DidOpenTextDocumentNotification=qe={}));var ue;(function(y){function Ne(G){let R=G;return R!=null&&typeof R.text=="string"&&R.range!==void 0&&(R.rangeLength===void 0||typeof R.rangeLength=="number")}y.isIncremental=Ne;function Ie(G){let R=G;return R!=null&&typeof R.text=="string"&&R.range===void 0&&R.rangeLength===void 0}y.isFull=Ie})(ue||(t.TextDocumentContentChangeEvent=ue={}));var ft;(function(y){y.method="textDocument/didChange",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ft||(t.DidChangeTextDocumentNotification=ft={}));var $r;(function(y){y.method="textDocument/didClose",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})($r||(t.DidCloseTextDocumentNotification=$r={}));var ii;(function(y){y.method="textDocument/didSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ii||(t.DidSaveTextDocumentNotification=ii={}));var si;(function(y){y.Manual=1,y.AfterDelay=2,y.FocusOut=3})(si||(t.TextDocumentSaveReason=si={}));var oi;(function(y){y.method="textDocument/willSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(oi||(t.WillSaveTextDocumentNotification=oi={}));var ai;(function(y){y.method="textDocument/willSaveWaitUntil",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ai||(t.WillSaveTextDocumentWaitUntilRequest=ai={}));var Ft;(function(y){y.method="workspace/didChangeWatchedFiles",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Ft||(t.DidChangeWatchedFilesNotification=Ft={}));var li;(function(y){y.Created=1,y.Changed=2,y.Deleted=3})(li||(t.FileChangeType=li={}));var no;(function(y){function Ne(Ie){const G=Ie;return r.objectLiteral(G)&&(n.URI.is(G.baseUri)||n.WorkspaceFolder.is(G.baseUri))&&r.string(G.pattern)}y.is=Ne})(no||(t.RelativePattern=no={}));var ro;(function(y){y.Create=1,y.Change=2,y.Delete=4})(ro||(t.WatchKind=ro={}));var io;(function(y){y.method="textDocument/publishDiagnostics",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(io||(t.PublishDiagnosticsNotification=io={}));var so;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.TriggerForIncompleteCompletions=3})(so||(t.CompletionTriggerKind=so={}));var ci;(function(y){y.method="textDocument/completion",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ci||(t.CompletionRequest=ci={}));var ui;(function(y){y.method="completionItem/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ui||(t.CompletionResolveRequest=ui={}));var dn;(function(y){y.method="textDocument/hover",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(dn||(t.HoverRequest=dn={}));var di;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.ContentChange=3})(di||(t.SignatureHelpTriggerKind=di={}));var oo;(function(y){y.method="textDocument/signatureHelp",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(oo||(t.SignatureHelpRequest=oo={}));var ao;(function(y){y.method="textDocument/definition",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ao||(t.DefinitionRequest=ao={}));var fi;(function(y){y.method="textDocument/references",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fi||(t.ReferencesRequest=fi={}));var pi;(function(y){y.method="textDocument/documentHighlight",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(pi||(t.DocumentHighlightRequest=pi={}));var lo;(function(y){y.method="textDocument/documentSymbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(lo||(t.DocumentSymbolRequest=lo={}));var co;(function(y){y.method="textDocument/codeAction",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(co||(t.CodeActionRequest=co={}));var uo;(function(y){y.method="codeAction/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(uo||(t.CodeActionResolveRequest=uo={}));var fo;(function(y){y.method="workspace/symbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fo||(t.WorkspaceSymbolRequest=fo={}));var po;(function(y){y.method="workspaceSymbol/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(po||(t.WorkspaceSymbolResolveRequest=po={}));var ho;(function(y){y.method="textDocument/codeLens",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ho||(t.CodeLensRequest=ho={}));var Ut;(function(y){y.method="codeLens/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ut||(t.CodeLensResolveRequest=Ut={}));var mo;(function(y){y.method="workspace/codeLens/refresh",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType0(y.method)})(mo||(t.CodeLensRefreshRequest=mo={}));var go;(function(y){y.method="textDocument/documentLink",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(go||(t.DocumentLinkRequest=go={}));var tr;(function(y){y.method="documentLink/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(tr||(t.DocumentLinkResolveRequest=tr={}));var yo;(function(y){y.method="textDocument/formatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(yo||(t.DocumentFormattingRequest=yo={}));var kr;(function(y){y.method="textDocument/rangeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(kr||(t.DocumentRangeFormattingRequest=kr={}));var _o;(function(y){y.method="textDocument/rangesFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(_o||(t.DocumentRangesFormattingRequest=_o={}));var fn;(function(y){y.method="textDocument/onTypeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fn||(t.DocumentOnTypeFormattingRequest=fn={}));var In;(function(y){y.Identifier=1})(In||(t.PrepareSupportDefaultBehavior=In={}));var vo;(function(y){y.method="textDocument/rename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(vo||(t.RenameRequest=vo={}));var Ro;(function(y){y.method="textDocument/prepareRename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ro||(t.PrepareRenameRequest=Ro={}));var On;(function(y){y.method="workspace/executeCommand",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(On||(t.ExecuteCommandRequest=On={}));var hi;(function(y){y.method="workspace/applyEdit",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType("workspace/applyEdit")})(hi||(t.ApplyWorkspaceEditRequest=hi={}))})(NT);var Gc={};Object.defineProperty(Gc,"__esModule",{value:!0});Gc.createProtocolConnection=void 0;const Xy=Tr;function lO(t,e,n,r){return Xy.ConnectionStrategy.is(r)&&(r={connectionStrategy:r}),(0,Xy.createMessageConnection)(t,e,n,r)}Gc.createProtocolConnection=lO;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,l,c)}:function(s,o,a,l){l===void 0&&(l=a),s[l]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.LSPErrorCodes=t.createProtocolConnection=void 0,n(Tr,t),n(em,t),n(X,t),n(NT,t);var r=Gc;Object.defineProperty(t,"createProtocolConnection",{enumerable:!0,get:function(){return r.createProtocolConnection}});var i;(function(s){s.lspReservedErrorRangeStart=-32899,s.RequestFailed=-32803,s.ServerCancelled=-32802,s.ContentModified=-32801,s.RequestCancelled=-32800,s.lspReservedErrorRangeEnd=-32800})(i||(t.LSPErrorCodes=i={}))})(PT);(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,l,c)}:function(s,o,a,l){l===void 0&&(l=a),s[l]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.createProtocolConnection=void 0;const r=Ug;n(Ug,t),n(PT,t);function i(s,o,a,l){return(0,r.createMessageConnection)(s,o,a,l)}t.createProtocolConnection=i})(oe);Object.defineProperty(_n,"__esModule",{value:!0});_n.SemanticTokensBuilder=_n.SemanticTokensDiff=_n.SemanticTokensFeature=void 0;const Lo=oe,cO=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(Lo.SemanticTokensRefreshRequest.type),on:e=>{const n=Lo.SemanticTokensRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onDelta:e=>{const n=Lo.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onRange:e=>{const n=Lo.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};_n.SemanticTokensFeature=cO;class xT{constructor(e,n){this.originalSequence=e,this.modifiedSequence=n}computeDiff(){const e=this.originalSequence.length,n=this.modifiedSequence.length;let r=0;for(;r<n&&r<e&&this.originalSequence[r]===this.modifiedSequence[r];)r++;if(r<n&&r<e){let i=e-1,s=n-1;for(;i>=r&&s>=r&&this.originalSequence[i]===this.modifiedSequence[s];)i--,s--;(i<r||s<r)&&(i++,s++);const o=i-r+1,a=this.modifiedSequence.slice(r,s+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:r,deleteCount:o-1}]:[{start:r,deleteCount:o,data:a}]}else return r<n?[{start:r,deleteCount:0,data:this.modifiedSequence.slice(r)}]:r<e?[{start:r,deleteCount:e-r}]:[]}}_n.SemanticTokensDiff=xT;let uO=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,n,r,i,s){let o=e,a=n;this._dataLen>0&&(o-=this._prevLine,o===0&&(a-=this._prevChar)),this._data[this._dataLen++]=o,this._data[this._dataLen++]=a,this._data[this._dataLen++]=r,this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._prevLine=e,this._prevChar=n}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new xT(this._prevData,this._data).computeDiff()}:this.build()}};_n.SemanticTokensBuilder=uO;var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});Wc.InlineCompletionFeature=void 0;const dO=oe,fO=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(dO.InlineCompletionRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Wc.InlineCompletionFeature=fO;var to={};Object.defineProperty(to,"__esModule",{value:!0});to.TextDocuments=void 0;const nr=oe;class pO{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new nr.Emitter,this._onDidOpen=new nr.Emitter,this._onDidClose=new nr.Emitter,this._onDidSave=new nr.Emitter,this._onWillSave=new nr.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=nr.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,s);const o=Object.freeze({document:s});this._onDidOpen.fire(o),this._onDidChangeContent.fire(o)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,s,o),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),n.push(e.onDidCloseTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(r.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(e.onWillSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{let s=this._syncedDocuments.get(r.textDocument.uri);return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),nr.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}to.TextDocuments=pO;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});gr.NotebookDocuments=gr.NotebookSyncFeature=void 0;const Nt=oe,Jy=to,hO=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Nt.DidOpenNotebookDocumentNotification.type,n=>{e(n)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Nt.DidChangeNotebookDocumentNotification.type,n=>{e(n)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Nt.DidSaveNotebookDocumentNotification.type,n=>{e(n)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Nt.DidCloseNotebookDocumentNotification.type,n=>{e(n)})}}};gr.NotebookSyncFeature=hO;let MT=class vl{onDidOpenTextDocument(e){return this.openHandler=e,Nt.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Nt.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Nt.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return vl.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return vl.NULL_DISPOSE}onDidSaveTextDocument(){return vl.NULL_DISPOSE}};MT.NULL_DISPOSE=Object.freeze({dispose:()=>{}});class mO{constructor(e){e instanceof Jy.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Jy.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Nt.Emitter,this._onDidChange=new Nt.Emitter,this._onDidSave=new Nt.Emitter,this._onDidClose=new Nt.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){const n=this.notebookCellMap.get(e);return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"?e:e.document,r=this.notebookCellMap.get(n);return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new MT,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(const s of i.cellTextDocuments)n.openTextDocument({textDocument:s});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s===void 0)return;s.version=i.notebookDocument.version;const o=s.metadata;let a=!1;const l=i.change;l.metadata!==void 0&&(a=!0,s.metadata=l.metadata);const c=[],u=[],f=[],m=[];if(l.cells!==void 0){const v=l.cells;if(v.structure!==void 0){const p=v.structure.array;if(s.cells.splice(p.start,p.deleteCount,...p.cells!==void 0?p.cells:[]),v.structure.didOpen!==void 0)for(const h of v.structure.didOpen)n.openTextDocument({textDocument:h}),c.push(h.uri);if(v.structure.didClose)for(const h of v.structure.didClose)n.closeTextDocument({textDocument:h}),u.push(h.uri)}if(v.data!==void 0){const p=new Map(v.data.map(h=>[h.document,h]));for(let h=0;h<=s.cells.length;h++){const $=p.get(s.cells[h].document);if($!==void 0){const F=s.cells.splice(h,1,$);if(f.push({old:F[0],new:$}),p.delete($.document),p.size===0)break}}}if(v.textContent!==void 0)for(const p of v.textContent)n.changeTextDocument({textDocument:p.document,contentChanges:p.changes}),m.push(p.document.uri)}this.updateCellMap(s);const g={notebookDocument:s};a&&(g.metadata={old:o,new:s.metadata});const d=[];for(const v of c)d.push(this.getNotebookCell(v));const _=[];for(const v of u)_.push(this.getNotebookCell(v));const T=[];for(const v of m)T.push(this.getNotebookCell(v));(d.length>0||_.length>0||f.length>0||T.length>0)&&(g.cells={added:d,removed:_,changed:{data:f,textContent:T}}),(g.metadata!==void 0||g.cells!==void 0)&&this._onDidChange.fire(g)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s!==void 0){this._onDidClose.fire(s);for(const o of i.cellTextDocuments)n.closeTextDocument({textDocument:o});this.notebookDocuments.delete(i.notebookDocument.uri);for(const o of s.cells)this.notebookCellMap.delete(o.document)}})),Nt.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}gr.NotebookDocuments=mO;var ne={},De={};Object.defineProperty(De,"__esModule",{value:!0});De.thenable=De.typedArray=De.stringArray=De.array=De.func=De.error=De.number=De.string=De.boolean=void 0;function gO(t){return t===!0||t===!1}De.boolean=gO;function LT(t){return typeof t=="string"||t instanceof String}De.string=LT;function yO(t){return typeof t=="number"||t instanceof Number}De.number=yO;function _O(t){return t instanceof Error}De.error=_O;function FT(t){return typeof t=="function"}De.func=FT;function UT(t){return Array.isArray(t)}De.array=UT;function vO(t){return UT(t)&&t.every(e=>LT(e))}De.stringArray=vO;function RO(t,e){return Array.isArray(t)&&t.every(e)}De.typedArray=RO;function TO(t){return t&&FT(t.then)}De.thenable=TO;var Rt={};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.generateUuid=Rt.parse=Rt.isUUID=Rt.v4=Rt.empty=void 0;class tm{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}}class Y extends tm{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return Y._oneOf(Y._chars)}constructor(){super([Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-","4",Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._oneOf(Y._timeHighBits),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex()].join(""))}}Y._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Y._timeHighBits=["8","9","a","b"];Rt.empty=new tm("00000000-0000-0000-0000-000000000000");function HT(){return new Y}Rt.v4=HT;const $O=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function BT(t){return $O.test(t)}Rt.isUUID=BT;function kO(t){if(!BT(t))throw new Error("invalid uuid");return new tm(t)}Rt.parse=kO;function wO(){return HT().asHex()}Rt.generateUuid=wO;var Kn={};Object.defineProperty(Kn,"__esModule",{value:!0});Kn.attachPartialResult=Kn.ProgressFeature=Kn.attachWorkDone=void 0;const qn=oe,bO=Rt;class Xn{constructor(e,n){this._connection=e,this._token=n,Xn.Instances.set(this._token,this)}begin(e,n,r,i){let s={kind:"begin",title:e,percentage:n,message:r,cancellable:i};this._connection.sendProgress(qn.WorkDoneProgress.type,this._token,s)}report(e,n){let r={kind:"report"};typeof e=="number"?(r.percentage=e,n!==void 0&&(r.message=n)):r.message=e,this._connection.sendProgress(qn.WorkDoneProgress.type,this._token,r)}done(){Xn.Instances.delete(this._token),this._connection.sendProgress(qn.WorkDoneProgress.type,this._token,{kind:"end"})}}Xn.Instances=new Map;class Qy extends Xn{constructor(e,n){super(e,n),this._source=new qn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}}class nm{constructor(){}begin(){}report(){}done(){}}class Zy extends nm{constructor(){super(),this._source=new qn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}}function SO(t,e){if(e===void 0||e.workDoneToken===void 0)return new nm;const n=e.workDoneToken;return delete e.workDoneToken,new Xn(t,n)}Kn.attachWorkDone=SO;const CO=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var n;super.initialize(e),((n=e==null?void 0:e.window)==null?void 0:n.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(qn.WorkDoneProgressCancelNotification.type,r=>{let i=Xn.Instances.get(r.token);(i instanceof Qy||i instanceof Zy)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new nm:new Xn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){const e=(0,bO.generateUuid)();return this.connection.sendRequest(qn.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Qy(this.connection,e))}else return Promise.resolve(new Zy)}};Kn.ProgressFeature=CO;var lh;(function(t){t.type=new qn.ProgressType})(lh||(lh={}));class AO{constructor(e,n){this._connection=e,this._token=n}report(e){this._connection.sendProgress(lh.type,this._token,e)}}function EO(t,e){if(e===void 0||e.partialResultToken===void 0)return;const n=e.partialResultToken;return delete e.partialResultToken,new AO(t,n)}Kn.attachPartialResult=EO;var zc={};Object.defineProperty(zc,"__esModule",{value:!0});zc.ConfigurationFeature=void 0;const PO=oe,NO=De,IO=t=>class extends t{getConfiguration(e){return e?NO.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let n={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(PO.ConfigurationRequest.type,n).then(r=>Array.isArray(r)?Array.isArray(e)?r:r[0]:Array.isArray(e)?[]:null)}};zc.ConfigurationFeature=IO;var Vc={};Object.defineProperty(Vc,"__esModule",{value:!0});Vc.WorkspaceFoldersFeature=void 0;const Fo=oe,OO=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let n=e.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Fo.Emitter,this.connection.onNotification(Fo.DidChangeWorkspaceFoldersNotification.type,r=>{this._onDidChangeWorkspaceFolders.fire(r.event)}))}fillServerCapabilities(e){var r,i;super.fillServerCapabilities(e);const n=(i=(r=e.workspace)==null?void 0:r.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Fo.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Fo.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Vc.WorkspaceFoldersFeature=OO;var Yc={};Object.defineProperty(Yc,"__esModule",{value:!0});Yc.CallHierarchyFeature=void 0;const Cu=oe,DO=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Cu.CallHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onIncomingCalls:e=>{const n=Cu.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onOutgoingCalls:e=>{const n=Cu.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Yc.CallHierarchyFeature=DO;var Xc={};Object.defineProperty(Xc,"__esModule",{value:!0});Xc.ShowDocumentFeature=void 0;const xO=oe,MO=t=>class extends t{showDocument(e){return this.connection.sendRequest(xO.ShowDocumentRequest.type,e)}};Xc.ShowDocumentFeature=MO;var Jc={};Object.defineProperty(Jc,"__esModule",{value:!0});Jc.FileOperationsFeature=void 0;const br=oe,LO=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(br.DidCreateFilesNotification.type,n=>{e(n)})}onDidRenameFiles(e){return this.connection.onNotification(br.DidRenameFilesNotification.type,n=>{e(n)})}onDidDeleteFiles(e){return this.connection.onNotification(br.DidDeleteFilesNotification.type,n=>{e(n)})}onWillCreateFiles(e){return this.connection.onRequest(br.WillCreateFilesRequest.type,(n,r)=>e(n,r))}onWillRenameFiles(e){return this.connection.onRequest(br.WillRenameFilesRequest.type,(n,r)=>e(n,r))}onWillDeleteFiles(e){return this.connection.onRequest(br.WillDeleteFilesRequest.type,(n,r)=>e(n,r))}};Jc.FileOperationsFeature=LO;var Qc={};Object.defineProperty(Qc,"__esModule",{value:!0});Qc.LinkedEditingRangeFeature=void 0;const FO=oe,UO=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(FO.LinkedEditingRangeRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0))}};Qc.LinkedEditingRangeFeature=UO;var Zc={};Object.defineProperty(Zc,"__esModule",{value:!0});Zc.TypeHierarchyFeature=void 0;const Au=oe,HO=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Au.TypeHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onSupertypes:e=>{const n=Au.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onSubtypes:e=>{const n=Au.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Zc.TypeHierarchyFeature=HO;var eu={};Object.defineProperty(eu,"__esModule",{value:!0});eu.InlineValueFeature=void 0;const e_=oe,BO=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(e_.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(e_.InlineValueRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};eu.InlineValueFeature=BO;var tu={};Object.defineProperty(tu,"__esModule",{value:!0});tu.FoldingRangeFeature=void 0;const t_=oe,jO=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(t_.FoldingRangeRefreshRequest.type),on:e=>{const n=t_.FoldingRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};tu.FoldingRangeFeature=jO;var nu={};Object.defineProperty(nu,"__esModule",{value:!0});nu.InlayHintFeature=void 0;const Eu=oe,KO=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Eu.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Eu.InlayHintRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n))),resolve:e=>this.connection.onRequest(Eu.InlayHintResolveRequest.type,(n,r)=>e(n,r))}}};nu.InlayHintFeature=KO;var ru={};Object.defineProperty(ru,"__esModule",{value:!0});ru.DiagnosticFeature=void 0;const vi=oe,qO=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(vi.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(vi.DocumentDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(vi.DocumentDiagnosticRequest.partialResult,n))),onWorkspace:e=>this.connection.onRequest(vi.WorkspaceDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(vi.WorkspaceDiagnosticRequest.partialResult,n)))}}};ru.DiagnosticFeature=qO;var iu={};Object.defineProperty(iu,"__esModule",{value:!0});iu.MonikerFeature=void 0;const GO=oe,WO=t=>class extends t{get moniker(){return{on:e=>{const n=GO.MonikerRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};iu.MonikerFeature=WO;Object.defineProperty(ne,"__esModule",{value:!0});ne.createConnection=ne.combineFeatures=ne.combineNotebooksFeatures=ne.combineLanguagesFeatures=ne.combineWorkspaceFeatures=ne.combineWindowFeatures=ne.combineClientFeatures=ne.combineTracerFeatures=ne.combineTelemetryFeatures=ne.combineConsoleFeatures=ne._NotebooksImpl=ne._LanguagesImpl=ne.BulkUnregistration=ne.BulkRegistration=ne.ErrorMessageTracker=void 0;const O=oe,At=De,ch=Rt,z=Kn,zO=zc,VO=Vc,YO=Yc,XO=_n,JO=Xc,QO=Jc,ZO=Qc,eD=Zc,tD=eu,nD=tu,rD=nu,iD=ru,sD=gr,oD=iu;function Pu(t){if(t!==null)return t}class aD{constructor(){this._messages=Object.create(null)}add(e){let n=this._messages[e];n||(n=0),n++,this._messages[e]=n}sendErrors(e){Object.keys(this._messages).forEach(n=>{e.window.showErrorMessage(n)})}}ne.ErrorMessageTracker=aD;class n_{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(O.MessageType.Error,e)}warn(e){this.send(O.MessageType.Warning,e)}info(e){this.send(O.MessageType.Info,e)}log(e){this.send(O.MessageType.Log,e)}debug(e){this.send(O.MessageType.Debug,e)}send(e,n){this._rawConnection&&this._rawConnection.sendNotification(O.LogMessageNotification.type,{type:e,message:n}).catch(()=>{(0,O.RAL)().console.error("Sending log message failed")})}}class lD{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...n){let r={type:O.MessageType.Error,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(Pu)}showWarningMessage(e,...n){let r={type:O.MessageType.Warning,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(Pu)}showInformationMessage(e,...n){let r={type:O.MessageType.Info,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(Pu)}}const r_=(0,JO.ShowDocumentFeature)((0,z.ProgressFeature)(lD));var i_;(function(t){function e(){return new jT}t.create=e})(i_||(ne.BulkRegistration=i_={}));class jT{constructor(){this._registrations=[],this._registered=new Set}add(e,n){const r=At.string(e)?e:e.method;if(this._registered.has(r))throw new Error(`${r} is already added to this registration`);const i=ch.generateUuid();this._registrations.push({id:i,method:r,registerOptions:n||{}}),this._registered.add(r)}asRegistrationParams(){return{registrations:this._registrations}}}var s_;(function(t){function e(){return new uh(void 0,[])}t.create=e})(s_||(ne.BulkUnregistration=s_={}));class uh{constructor(e,n){this._connection=e,this._unregistrations=new Map,n.forEach(r=>{this._unregistrations.set(r.method,r)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let r of this._unregistrations.values())e.push(r);let n={unregisterations:e};this._connection.sendRequest(O.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){const n=At.string(e)?e:e.method,r=this._unregistrations.get(n);if(!r)return!1;let i={unregisterations:[r]};return this._connection.sendRequest(O.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},s=>{this._connection.console.info(`Un-registering request handler for ${r.id} failed.`)}),!0}}class o_{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,n,r){return e instanceof jT?this.registerMany(e):e instanceof uh?this.registerSingle1(e,n,r):this.registerSingle2(e,n)}registerSingle1(e,n,r){const i=At.string(n)?n:n.method,s=ch.generateUuid();let o={registrations:[{id:s,method:i,registerOptions:r||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(O.RegistrationRequest.type,o).then(a=>(e.add({id:s,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,n){const r=At.string(e)?e:e.method,i=ch.generateUuid();let s={registrations:[{id:i,method:r,registerOptions:n||{}}]};return this.connection.sendRequest(O.RegistrationRequest.type,s).then(o=>O.Disposable.create(()=>{this.unregisterSingle(i,r).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),o=>(this.connection.console.info(`Registering request handler for ${r} failed.`),Promise.reject(o)))}unregisterSingle(e,n){let r={unregisterations:[{id:e,method:n}]};return this.connection.sendRequest(O.UnregistrationRequest.type,r).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let n=e.asRegistrationParams();return this.connection.sendRequest(O.RegistrationRequest.type,n).then(()=>new uh(this._connection,n.registrations.map(r=>({id:r.id,method:r.method}))),r=>(this.connection.console.info("Bulk registration failed."),Promise.reject(r)))}}class cD{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function n(i){return i&&!!i.edit}let r=n(e)?e:{edit:e};return this.connection.sendRequest(O.ApplyWorkspaceEditRequest.type,r)}}const a_=(0,QO.FileOperationsFeature)((0,VO.WorkspaceFoldersFeature)((0,zO.ConfigurationFeature)(cD)));class l_{constructor(){this._trace=O.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,n){this._trace!==O.Trace.Off&&this.connection.sendNotification(O.LogTraceNotification.type,{message:e,verbose:this._trace===O.Trace.Verbose?n:void 0}).catch(()=>{})}}class c_{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(O.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}}class KT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._LanguagesImpl=KT;const u_=(0,nD.FoldingRangeFeature)((0,oD.MonikerFeature)((0,iD.DiagnosticFeature)((0,rD.InlayHintFeature)((0,tD.InlineValueFeature)((0,eD.TypeHierarchyFeature)((0,ZO.LinkedEditingRangeFeature)((0,XO.SemanticTokensFeature)((0,YO.CallHierarchyFeature)(KT)))))))));class qT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._NotebooksImpl=qT;const d_=(0,sD.NotebookSyncFeature)(qT);function GT(t,e){return function(n){return e(t(n))}}ne.combineConsoleFeatures=GT;function WT(t,e){return function(n){return e(t(n))}}ne.combineTelemetryFeatures=WT;function zT(t,e){return function(n){return e(t(n))}}ne.combineTracerFeatures=zT;function VT(t,e){return function(n){return e(t(n))}}ne.combineClientFeatures=VT;function YT(t,e){return function(n){return e(t(n))}}ne.combineWindowFeatures=YT;function XT(t,e){return function(n){return e(t(n))}}ne.combineWorkspaceFeatures=XT;function JT(t,e){return function(n){return e(t(n))}}ne.combineLanguagesFeatures=JT;function QT(t,e){return function(n){return e(t(n))}}ne.combineNotebooksFeatures=QT;function uD(t,e){function n(i,s,o){return i&&s?o(i,s):i||s}return{__brand:"features",console:n(t.console,e.console,GT),tracer:n(t.tracer,e.tracer,zT),telemetry:n(t.telemetry,e.telemetry,WT),client:n(t.client,e.client,VT),window:n(t.window,e.window,YT),workspace:n(t.workspace,e.workspace,XT),languages:n(t.languages,e.languages,JT),notebooks:n(t.notebooks,e.notebooks,QT)}}ne.combineFeatures=uD;function dD(t,e,n){const r=n&&n.console?new(n.console(n_)):new n_,i=t(r);r.rawAttach(i);const s=n&&n.tracer?new(n.tracer(l_)):new l_,o=n&&n.telemetry?new(n.telemetry(c_)):new c_,a=n&&n.client?new(n.client(o_)):new o_,l=n&&n.window?new(n.window(r_)):new r_,c=n&&n.workspace?new(n.workspace(a_)):new a_,u=n&&n.languages?new(n.languages(u_)):new u_,f=n&&n.notebooks?new(n.notebooks(d_)):new d_,m=[r,s,o,a,l,c,u,f];function g(p){return p instanceof Promise?p:At.thenable(p)?new Promise((h,$)=>{p.then(F=>h(F),F=>$(F))}):Promise.resolve(p)}let d,_,T,v={listen:()=>i.listen(),sendRequest:(p,...h)=>i.sendRequest(At.string(p)?p:p.method,...h),onRequest:(p,h)=>i.onRequest(p,h),sendNotification:(p,h)=>{const $=At.string(p)?p:p.method;return i.sendNotification($,h)},onNotification:(p,h)=>i.onNotification(p,h),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:p=>(_=p,{dispose:()=>{_=void 0}}),onInitialized:p=>i.onNotification(O.InitializedNotification.type,p),onShutdown:p=>(d=p,{dispose:()=>{d=void 0}}),onExit:p=>(T=p,{dispose:()=>{T=void 0}}),get console(){return r},get telemetry(){return o},get tracer(){return s},get client(){return a},get window(){return l},get workspace(){return c},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:p=>i.onNotification(O.DidChangeConfigurationNotification.type,p),onDidChangeWatchedFiles:p=>i.onNotification(O.DidChangeWatchedFilesNotification.type,p),__textDocumentSync:void 0,onDidOpenTextDocument:p=>i.onNotification(O.DidOpenTextDocumentNotification.type,p),onDidChangeTextDocument:p=>i.onNotification(O.DidChangeTextDocumentNotification.type,p),onDidCloseTextDocument:p=>i.onNotification(O.DidCloseTextDocumentNotification.type,p),onWillSaveTextDocument:p=>i.onNotification(O.WillSaveTextDocumentNotification.type,p),onWillSaveTextDocumentWaitUntil:p=>i.onRequest(O.WillSaveTextDocumentWaitUntilRequest.type,p),onDidSaveTextDocument:p=>i.onNotification(O.DidSaveTextDocumentNotification.type,p),sendDiagnostics:p=>i.sendNotification(O.PublishDiagnosticsNotification.type,p),onHover:p=>i.onRequest(O.HoverRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),onCompletion:p=>i.onRequest(O.CompletionRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onCompletionResolve:p=>i.onRequest(O.CompletionResolveRequest.type,p),onSignatureHelp:p=>i.onRequest(O.SignatureHelpRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),onDeclaration:p=>i.onRequest(O.DeclarationRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onDefinition:p=>i.onRequest(O.DefinitionRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onTypeDefinition:p=>i.onRequest(O.TypeDefinitionRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onImplementation:p=>i.onRequest(O.ImplementationRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onReferences:p=>i.onRequest(O.ReferencesRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onDocumentHighlight:p=>i.onRequest(O.DocumentHighlightRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onDocumentSymbol:p=>i.onRequest(O.DocumentSymbolRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onWorkspaceSymbol:p=>i.onRequest(O.WorkspaceSymbolRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onWorkspaceSymbolResolve:p=>i.onRequest(O.WorkspaceSymbolResolveRequest.type,p),onCodeAction:p=>i.onRequest(O.CodeActionRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onCodeActionResolve:p=>i.onRequest(O.CodeActionResolveRequest.type,(h,$)=>p(h,$)),onCodeLens:p=>i.onRequest(O.CodeLensRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onCodeLensResolve:p=>i.onRequest(O.CodeLensResolveRequest.type,(h,$)=>p(h,$)),onDocumentFormatting:p=>i.onRequest(O.DocumentFormattingRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),onDocumentRangeFormatting:p=>i.onRequest(O.DocumentRangeFormattingRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),onDocumentOnTypeFormatting:p=>i.onRequest(O.DocumentOnTypeFormattingRequest.type,(h,$)=>p(h,$)),onRenameRequest:p=>i.onRequest(O.RenameRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),onPrepareRename:p=>i.onRequest(O.PrepareRenameRequest.type,(h,$)=>p(h,$)),onDocumentLinks:p=>i.onRequest(O.DocumentLinkRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onDocumentLinkResolve:p=>i.onRequest(O.DocumentLinkResolveRequest.type,(h,$)=>p(h,$)),onDocumentColor:p=>i.onRequest(O.DocumentColorRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onColorPresentation:p=>i.onRequest(O.ColorPresentationRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onFoldingRanges:p=>i.onRequest(O.FoldingRangeRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onSelectionRanges:p=>i.onRequest(O.SelectionRangeRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),(0,z.attachPartialResult)(i,h))),onExecuteCommand:p=>i.onRequest(O.ExecuteCommandRequest.type,(h,$)=>p(h,$,(0,z.attachWorkDone)(i,h),void 0)),dispose:()=>i.dispose()};for(let p of m)p.attach(v);return i.onRequest(O.InitializeRequest.type,p=>{e.initialize(p),At.string(p.trace)&&(s.trace=O.Trace.fromString(p.trace));for(let h of m)h.initialize(p.capabilities);if(_){let h=_(p,new O.CancellationTokenSource().token,(0,z.attachWorkDone)(i,p),void 0);return g(h).then($=>{if($ instanceof O.ResponseError)return $;let F=$;F||(F={capabilities:{}});let W=F.capabilities;W||(W={},F.capabilities=W),W.textDocumentSync===void 0||W.textDocumentSync===null?W.textDocumentSync=At.number(v.__textDocumentSync)?v.__textDocumentSync:O.TextDocumentSyncKind.None:!At.number(W.textDocumentSync)&&!At.number(W.textDocumentSync.change)&&(W.textDocumentSync.change=At.number(v.__textDocumentSync)?v.__textDocumentSync:O.TextDocumentSyncKind.None);for(let J of m)J.fillServerCapabilities(W);return F})}else{let h={capabilities:{textDocumentSync:O.TextDocumentSyncKind.None}};for(let $ of m)$.fillServerCapabilities(h.capabilities);return h}}),i.onRequest(O.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,d)return d(new O.CancellationTokenSource().token)}),i.onNotification(O.ExitNotification.type,()=>{try{T&&T()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(O.SetTraceNotification.type,p=>{s.trace=O.Trace.fromString(p.value)}),v}ne.createConnection=dD;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(l,c,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(c,u);(!m||("get"in m?!c.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,f,m)}:function(l,c,u,f){f===void 0&&(f=u),l[f]=c[u]}),n=xe&&xe.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProposedFeatures=t.NotebookDocuments=t.TextDocuments=t.SemanticTokensBuilder=void 0;const r=_n;Object.defineProperty(t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return r.SemanticTokensBuilder}});const i=Wc;n(oe,t);const s=to;Object.defineProperty(t,"TextDocuments",{enumerable:!0,get:function(){return s.TextDocuments}});const o=gr;Object.defineProperty(t,"NotebookDocuments",{enumerable:!0,get:function(){return o.NotebookDocuments}}),n(ne,t);var a;(function(l){l.all={__brand:"features",languages:i.InlineCompletionFeature}})(a||(t.ProposedFeatures=a={}))})(eh);var fD=oe;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(a,l,c,u){u===void 0&&(u=c);var f=Object.getOwnPropertyDescriptor(l,c);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(a,u,f)}:function(a,l,c,u){u===void 0&&(u=c),a[u]=l[c]}),n=xe&&xe.__exportStar||function(a,l){for(var c in a)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&e(l,a,c)};Object.defineProperty(t,"__esModule",{value:!0}),t.createConnection=void 0;const r=eh;n(fD,t),n(eh,t);let i=!1;const s={initialize:a=>{},get shutdownReceived(){return i},set shutdownReceived(a){i=a},exit:a=>{}};function o(a,l,c,u){let f,m,g,d;a!==void 0&&a.__brand==="features"&&(f=a,a=l,l=c,c=u),r.ConnectionStrategy.is(a)||r.ConnectionOptions.is(a)?d=a:(m=a,g=l,d=c);const _=T=>(0,r.createProtocolConnection)(m,g,T,d);return(0,r.createConnection)(_,s,f)}t.createConnection=o})(M);function f_(t,e){const n={stacks:t,tokens:e};return pD(n),n.stacks.flat().forEach(i=>{i.property=void 0}),e$(n.stacks).map(i=>i[i.length-1])}function rm(t){const{next:e,cardinalities:n,visited:r,plus:i}=t,s=[],o=e.feature;if(r.has(o))return[];ur(o)||r.add(o);let a,l=o;for(;l.$container;)if(ur(l.$container)){a=l.$container;break}else if(iv(l.$container))l=l.$container;else break;if(V$(l.cardinality)){const c=Or({next:{feature:l,type:e.type},cardinalities:n,visited:r,plus:i});for(const u of c)i.add(u.feature);s.push(...c)}if(a){const c=a.elements.indexOf(l);c!==void 0&&c<a.elements.length-1&&s.push(...ZT({feature:a,type:e.type},c+1,n,r,i)),s.every(u=>Ts(u.feature.cardinality,u.feature)||Ts(n.get(u.feature))||i.has(u.feature))&&s.push(...rm({next:{feature:a,type:e.type},cardinalities:n,visited:r,plus:i}))}return s}function dh(t){return Je(t)&&(t={feature:t}),Or({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Or(t){var e,n,r;const{next:i,cardinalities:s,visited:o,plus:a}=t;if(i===void 0)return[];const{feature:l,type:c}=i;if(ur(l))return o.has(l)?[]:(o.add(l),ZT(i,0,s,o,a).map(u=>Uo(u,l.cardinality,s)));if(hh(l)||mh(l))return l.elements.flatMap(u=>Or({next:{feature:u,type:c,property:i.property},cardinalities:s,visited:o,plus:a})).map(u=>Uo(u,l.cardinality,s));if(rn(l)){const u={feature:l.terminal,type:c,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Or({next:u,cardinalities:s,visited:o,plus:a}).map(f=>Uo(f,l.cardinality,s))}else{if(Us(l))return rm({next:{feature:l,type:pc(l),property:(n=i.property)!==null&&n!==void 0?n:l.feature},cardinalities:s,visited:o,plus:a});if(Tn(l)&&it(l.rule.ref)){const u=l.rule.ref,f={feature:u.definition,type:u.fragment||u.dataType?void 0:(r=Bs(u))!==null&&r!==void 0?r:u.name,property:i.property};return Or({next:f,cardinalities:s,visited:o,plus:a}).map(m=>Uo(m,l.cardinality,s))}else return[i]}}function Uo(t,e,n){return n.set(t.feature,e),t}function ZT(t,e,n,r,i){var s;const o=[];let a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},o.push(...Or({next:a,cardinalities:n,visited:r,plus:i})),!!Ts((s=a.feature.cardinality)!==null&&s!==void 0?s:n.get(a.feature),a.feature)););return o}function pD(t){for(const e of t.tokens){const n=e$(t.stacks,e);t.stacks=n}}function e$(t,e){const n=[];for(const r of t)n.push(...hD(r,e));return n}function hD(t,e){const n=new Map,r=new Set(t.map(s=>s.feature).filter(mD)),i=[];for(;t.length>0;){const s=t.pop(),o=rm({next:s,cardinalities:n,plus:r,visited:new Set}).filter(a=>e?im(a.feature,e):!0);for(const a of o)i.push([...t,a]);if(!o.every(a=>Ts(a.feature.cardinality,a.feature)||Ts(n.get(a.feature))))break}return i}function mD(t){if(t.cardinality==="+")return!0;const e=xn(t,rn);return!!(e&&e.cardinality==="+")}function im(t,e){if(Ot(t))return t.value===e.image;if(Tn(t))return gD(t.rule.ref,e);if(Hs(t)){const n=gv(t);if(n)return im(n,e)}return!1}function gD(t,e){return it(t)?dh(t.definition).some(r=>im(r.feature,e)):Jn(t)?hc(t).test(e.image):!1}function yD(t){const e=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.triggerCharacters)!==null&&i!==void 0?i:[]}))),n=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:n.length>0?n:void 0}}class t${constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,n,r){const i=[],s=this.buildContexts(e,n.position),o=(c,u)=>{const f=this.fillCompletionItem(c,u);f&&i.push(f)},a=c=>Ot(c.feature)?c.feature.value:c.feature,l=[];for(const c of s)if(await Promise.all(Te(c.features).distinct(a).exclude(l).map(u=>this.completionFor(c,u,o))),l.push(...c.features),!this.continueCompletion(i))break;return M.CompletionList.create(this.deduplicateItems(i),!0)}deduplicateItems(e){return Te(e).distinct(n=>`${n.kind}_${n.label}_${n.detail}`).toArray()}findFeaturesAt(e,n){const r=e.getText({start:M.Position.create(0,0),end:e.positionAt(n)}),i=this.completionParser.parse(r),s=i.tokens;if(i.tokenIndex===0){const l=Af(this.grammar),c=dh({feature:l.definition,type:Bs(l)});return s.length>0?(s.shift(),f_(c.map(u=>[u]),s)):c}const o=[...s].splice(i.tokenIndex);return f_([i.elementStack.map(l=>({feature:l}))],o)}*buildContexts(e,n){var r,i;const s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument,a=o.getText(),l=o.offsetAt(n),c={document:e,textDocument:o,offset:l,position:n},u=this.findDataTypeRuleStart(s,l);if(u){const[p,h]=u,$=(r=Sf(s,p))===null||r===void 0?void 0:r.astNode;yield Object.assign(Object.assign({},c),{node:$,tokenOffset:p,tokenEndOffset:h,features:this.findFeaturesAt(o,p)})}const{nextTokenStart:f,nextTokenEnd:m,previousTokenStart:g,previousTokenEnd:d}=this.backtrackToAnyToken(a,l);let _=f;l<=f&&g!==void 0&&(_=g);const T=(i=Sf(s,_))===null||i===void 0?void 0:i.astNode;let v=!0;if(g!==void 0&&d!==void 0&&d===l&&(yield Object.assign(Object.assign({},c),{node:T,tokenOffset:g,tokenEndOffset:d,features:this.findFeaturesAt(o,g)}),v=this.performNextTokenCompletion(e,a.substring(g,d),g,d),v&&(yield Object.assign(Object.assign({},c),{node:T,tokenOffset:d,tokenEndOffset:d,features:this.findFeaturesAt(o,d)}))),T)v&&(yield Object.assign(Object.assign({},c),{node:T,tokenOffset:f,tokenEndOffset:m,features:this.findFeaturesAt(o,f)}));else{const p=Af(this.grammar);if(!p)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},c),{tokenOffset:f,tokenEndOffset:m,features:dh(p.definition)})}}performNextTokenCompletion(e,n,r,i){return new RegExp("\\P{L}$","u").test(n)}findDataTypeRuleStart(e,n){var r,i;let s=cr(e,n,this.grammarConfig.nameRegexp),o=!!(!((r=xn(s==null?void 0:s.grammarSource,it))===null||r===void 0)&&r.dataType);if(o){for(;o;)s=s==null?void 0:s.container,o=!!(!((i=xn(s==null?void 0:s.grammarSource,it))===null||i===void 0)&&i.dataType);if(s)return[s.offset,s.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,n){const r=this.lexer.tokenize(e).tokens;if(r.length===0)return{nextTokenStart:n,nextTokenEnd:n};let i;for(const s of r){if(s.startOffset>=n)return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(s.endOffset>=n)return{nextTokenStart:s.startOffset,nextTokenEnd:s.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=s}return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,n,r){if(Ot(n.feature))return this.completionForKeyword(e,n.feature,r);if(Hs(n.feature)&&e.node)return this.completionForCrossReference(e,n,r)}completionForCrossReference(e,n,r){const i=xn(n.feature,rn);let s=e.node;if(i&&s){n.type&&(s={$type:n.type,$container:s,$containerProperty:n.property},uv(this.astReflection,s));const o={reference:{$refText:""},container:s,property:i.feature};try{for(const a of this.getReferenceCandidates(o,e))r(e,this.createReferenceCompletionItem(a))}catch(a){console.error(a)}}}getReferenceCandidates(e,n){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){const n=this.nodeKindProvider.getCompletionItemKind(e),r=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:n,documentation:r,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;const n=this.documentationProvider.getDocumentation(e.node);if(n)return{kind:"markdown",value:n}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return M.CompletionItemKind.Keyword}filterKeyword(e,n){return new RegExp("\\p{L}","u").test(n.value)}fillCompletionItem(e,n){var r,i;let s;if(typeof n.label=="string")s=n.label;else if("node"in n){const c=this.nameProvider.getName(n.node);if(!c)return;s=c}else if("nodeDescription"in n)s=n.nodeDescription.name;else return;let o;typeof((r=n.textEdit)===null||r===void 0?void 0:r.newText)=="string"?o=n.textEdit.newText:typeof n.insertText=="string"?o=n.insertText:o=s;const a=(i=n.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,s,o);return a?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:a,label:s}:void 0}buildCompletionTextEdit(e,n,r){const s=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(s,n)){const o=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:r,range:{start:o,end:a}}}else return}}class _D{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,n,r){const i=e.parseResult.value;if(i.$cstNode){const s=i.$cstNode,o=cr(s,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,n)}}collectLocationLinks(e,n){var r;const i=this.findLink(e);if(i)return[M.LocationLink.create(i.targetDocument.textDocument.uri,((r=i.target.astNode.$cstNode)!==null&&r!==void 0?r:i.target).range,i.target.range,i.source.range)]}findLink(e){const n=this.references.findDeclarationNode(e);if(n!=null&&n.astNode){const r=sn(n.astNode);if(n&&r)return{source:e,target:n,targetDocument:r}}}}class vD{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return;const s=cr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!s)return;const o=this.references.findDeclaration(s);if(o){const a=pe.equals(sn(o).uri,e.uri),l={documentUri:e.uri,includeDeclaration:a};return this.references.findReferences(o,l).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return M.DocumentHighlight.create(e.segment.range)}}class RD{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e,n,r){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,n){const r=n.$cstNode,i=this.nameProvider.getNameNode(n);if(i&&r){const s=this.nameProvider.getName(n);return[{kind:this.nodeKindProvider.getSymbolKind(n),name:s||i.text,range:r.range,selectionRange:i.range,children:this.getChildSymbols(e,n)}]}else return this.getChildSymbols(e,n)||[]}getChildSymbols(e,n){const r=[];for(const i of uc(n)){const s=this.getSymbol(e,i);r.push(...s)}if(r.length>0)return r}}class TD{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let n=!1;e.lsp.LanguageServer.onInitialize(r=>{var i,s;n=!!(!((s=(i=r.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||s===void 0)&&s.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(r=>{n&&this.registerFileWatcher(e)})}registerFileWatcher(e){const n=[],r=Te(e.ServiceRegistry.all).flatMap(s=>s.LanguageMetaData.fileExtensions).map(s=>s.startsWith(".")?s.substring(1):s).distinct().toArray();r.length>0&&n.push({globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`});const i=Te(e.ServiceRegistry.all).flatMap(s=>{var o;return(o=s.LanguageMetaData.fileNames)!==null&&o!==void 0?o:[]}).distinct().toArray();if(i.length>0&&n.push({globPattern:i.length===1?`**/${i[0]}`:`**/{${i.join(",")}}`}),n.length>0){const s=e.lsp.Connection,o={watchers:n};s==null||s.client.register(M.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,n){e=e.filter(r=>this.serviceRegistry.hasServices(r)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(r=>this.documentBuilder.update(e,n,r))}).catch(r=>{console.error("Workspace initialization failed. Could not perform document update.",r)})}didChangeContent(e){this.fireDocumentUpdate([at.parse(e.document.uri)],[])}didChangeWatchedFiles(e){const n=Te(e.changes).filter(i=>i.type!==M.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray(),r=Te(e.changes).filter(i=>i.type===M.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray();this.fireDocumentUpdate(n,r)}}class $D{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e,n,r){const i=[],s=o=>i.push(o);return this.collectFolding(e,s),i}collectFolding(e,n){var r;const i=(r=e.parseResult)===null||r===void 0?void 0:r.value;if(i){if(this.shouldProcessContent(i)){const s=tn(i).iterator();let o;do if(o=s.next(),!o.done){const a=o.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,n),this.shouldProcessContent(a)||s.prune()}while(!o.done)}this.collectCommentFolding(e,i,n)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,n,r){const i=n.$cstNode;if(i){const s=this.toFoldingRange(e,i);s&&r(s)}}collectCommentFolding(e,n,r){const i=n.$cstNode;if(i){for(const s of p$(i))if(this.commentNames.includes(s.tokenType.name)){const o=this.toFoldingRange(e,s,M.FoldingRangeKind.Comment);o&&r(o)}}}toFoldingRange(e,n,r){const i=n.range,s=i.start;let o=i.end;if(!(o.line-s.line<2))return this.includeLastFoldingLine(n,r)||(o=e.textDocument.positionAt(e.textDocument.offsetAt({line:o.line,character:0})-1)),M.FoldingRange.create(s.line,o.line,s.character,o.character,r)}includeLastFoldingLine(e,n){if(n===M.FoldingRangeKind.Comment)return!1;const r=e.text,i=r.charAt(r.length-1);return!(i==="}"||i===")"||i==="]")}}class kD{match(e,n){if(e.length===0)return!0;let r=!1,i,s=0;const o=n.length;for(let a=0;a<o;a++){const l=n.charCodeAt(a),c=e.charCodeAt(s);if((l===c||this.toUpperCharCode(l)===this.toUpperCharCode(c))&&(r||(r=i===void 0||this.isWordTransition(i,l)),r&&s++,s===e.length))return!0;i=l}return!1}isWordTransition(e,n){return p_<=e&&e<=h_&&wD<=n&&n<=bD||e===m_&&n!==m_}toUpperCharCode(e){return p_<=e&&e<=h_?e-32:e}}const p_=97,h_=122,wD=65,bD=90,m_=95;class SD{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,n){var r,i;const s=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(s){const o=e.textDocument.offsetAt(n.position),a=cr(s,o,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>o){const l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l);if(Ot(a.grammarSource))return this.getKeywordHoverContent(a.grammarSource)}}}getKeywordHoverContent(e){var n;let r=uT(e)?e.$comment:void 0;if(r||(r=(n=tv(e.$cstNode,["ML_COMMENT"]))===null||n===void 0?void 0:n.text),r&&hT(r)){const i=pT(r).toMarkdown();if(i)return{contents:{kind:"markdown",value:i}}}}}class CD extends SD{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){const n=this.documentationProvider.getDocumentation(e);if(n)return{contents:{kind:"markdown",value:n}}}}const AD={[M.SemanticTokenTypes.class]:0,[M.SemanticTokenTypes.comment]:1,[M.SemanticTokenTypes.enum]:2,[M.SemanticTokenTypes.enumMember]:3,[M.SemanticTokenTypes.event]:4,[M.SemanticTokenTypes.function]:5,[M.SemanticTokenTypes.interface]:6,[M.SemanticTokenTypes.keyword]:7,[M.SemanticTokenTypes.macro]:8,[M.SemanticTokenTypes.method]:9,[M.SemanticTokenTypes.modifier]:10,[M.SemanticTokenTypes.namespace]:11,[M.SemanticTokenTypes.number]:12,[M.SemanticTokenTypes.operator]:13,[M.SemanticTokenTypes.parameter]:14,[M.SemanticTokenTypes.property]:15,[M.SemanticTokenTypes.regexp]:16,[M.SemanticTokenTypes.string]:17,[M.SemanticTokenTypes.struct]:18,[M.SemanticTokenTypes.type]:19,[M.SemanticTokenTypes.typeParameter]:20,[M.SemanticTokenTypes.variable]:21,[M.SemanticTokenTypes.decorator]:22},ED={[M.SemanticTokenModifiers.abstract]:1,[M.SemanticTokenModifiers.async]:2,[M.SemanticTokenModifiers.declaration]:4,[M.SemanticTokenModifiers.defaultLibrary]:8,[M.SemanticTokenModifiers.definition]:16,[M.SemanticTokenModifiers.deprecated]:32,[M.SemanticTokenModifiers.documentation]:64,[M.SemanticTokenModifiers.modification]:128,[M.SemanticTokenModifiers.readonly]:256,[M.SemanticTokenModifiers.static]:512};function PD(t){const e=[],n=[];let r=!0,i=!0,s=!0;for(const o of t)o&&(o.legend.tokenTypes.forEach((a,l)=>{const c=e[l];if(c&&c!==a)throw new Error(`Cannot merge '${c}' and '${a}' token types. They use the same index ${l}.`);e[l]=a}),o.legend.tokenModifiers.forEach((a,l)=>{const c=n[l];if(c&&c!==a)throw new Error(`Cannot merge '${c}' and '${a}' token modifier. They use the same index ${l}.`);n[l]=a}),o.full?typeof o.full=="object"&&!o.full.delta&&(i=!1):r=!1,o.range||(s=!1));return{legend:{tokenTypes:e,tokenModifiers:n},full:r&&{delta:i},range:s}}class ND extends M.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,n,r,i,s){this._tokens.push({line:e,char:n,length:r,tokenType:i,tokenModifiers:s})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(const e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,n){return e.line===n.line?e.char-n.char:e.line-n.line}}class ID{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(n=>{this.tokensBuilders.delete(n.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(n=>{var r;this.initialize((r=n.capabilities.textDocument)===null||r===void 0?void 0:r.semanticTokens)})}initialize(e){this.clientCapabilities=e}get tokenTypes(){return AD}get tokenModifiers(){return ED}get semanticTokensOptions(){return{legend:{tokenTypes:Object.keys(this.tokenTypes),tokenModifiers:Object.keys(this.tokenModifiers)},full:{delta:!0},range:!0}}async semanticHighlight(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightRange(e,n,r=le.None){return this.currentRange=n.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(n.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.buildEdits()}createAcceptor(){return n=>{"line"in n?this.highlightToken({range:{start:{line:n.line,character:n.char},end:{line:n.line,character:n.char+n.length}},type:n.type,modifier:n.modifier}):"range"in n?this.highlightToken(n):"keyword"in n?this.highlightKeyword(n):"property"in n?this.highlightProperty(n):this.highlightNode({node:n.cst,type:n.type,modifier:n.modifier})}}getDocumentTokensBuilder(e){const n=this.tokensBuilders.get(e.uri.toString());if(n)return n;const r=new ND;return this.tokensBuilders.set(e.uri.toString(),r),r}async computeHighlighting(e,n,r){const i=e.parseResult.value,s=or(i,{range:this.currentRange}).iterator();let o;do if(o=s.next(),!o.done){await ot(r);const a=o.value;this.highlightElement(a,n)==="prune"&&s.prune()}while(!o.done)}highlightToken(e){var n;const{range:r,type:i}=e;let s=e.modifier;if(this.currentRange&&!Z_(r,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;const o=this.tokenTypes[i];let a=0;if(s!==void 0){typeof s=="string"&&(s=[s]);for(const u of s){const f=this.tokenModifiers[u];a|=f}}const l=r.start.line,c=r.end.line;if(l===c){const u=r.start.character,f=r.end.character-u;this.currentTokensBuilder.push(l,u,f,o,a)}else if(!((n=this.clientCapabilities)===null||n===void 0)&&n.multilineTokenSupport){const u=r.start.character,f=this.currentDocument.textDocument.offsetAt(r.start),m=this.currentDocument.textDocument.offsetAt(r.end);this.currentTokensBuilder.push(l,u,m-f,o,a)}else{const u=r.start;let f=this.currentDocument.textDocument.offsetAt({line:l+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,o,a);for(let m=l+1;m<c;m++){const g=f;f=this.currentDocument.textDocument.offsetAt({line:m+1,character:0}),this.currentTokensBuilder.push(m,0,f-g-1,o,a)}this.currentTokensBuilder.push(c,0,r.end.character,o,a)}}highlightProperty(e){const n=[];if(typeof e.index=="number"){const s=gh(e.node.$cstNode,e.property,e.index);s&&n.push(s)}else n.push(...yv(e.node.$cstNode,e.property));const{type:r,modifier:i}=e;for(const s of n)this.highlightNode({node:s,type:r,modifier:i})}highlightKeyword(e){const{node:n,keyword:r,type:i,index:s,modifier:o}=e,a=[];if(typeof s=="number"){const l=_v(n.$cstNode,r,s);l&&a.push(l)}else a.push(...W$(n.$cstNode,r));for(const l of a)this.highlightNode({node:l,type:i,modifier:o})}highlightNode(e){const{node:n,type:r,modifier:i}=e,s=n.range;this.highlightToken({range:s,type:r,modifier:i})}}var g_;(function(t){function e(r,i,s){const o=new Map;Object.entries(i).forEach(([c,u])=>o.set(u,c));let a=0,l=0;return n(r.data,5).map(c=>{a+=c[0],c[0]!==0&&(l=0),l+=c[1];const u=c[2];return{offset:s.textDocument.offsetAt({line:a,character:l}),tokenType:o.get(c[3]),tokenModifiers:c[4],text:s.textDocument.getText({start:{line:a,character:l},end:{line:a,character:l+u}})}})}t.decode=e;function n(r,i){const s=[];for(let o=0;o<r.length;o+=i){const a=r.slice(o,o+i);s.push(a)}return s}})(g_||(g_={}));function OD(t){const e=[],n=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&n.push(...i.retriggerCharacters)});const r={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:n.length>0?Array.from(new Set(n)).sort():void 0};return r.triggerCharacters?r:void 0}class DD{constructor(e){this.onInitializeEmitter=new oe.Emitter,this.onInitializedEmitter=new oe.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Zp(this.services),this.services.ServiceRegistry.all.forEach(e=>Zp(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var n,r,i,s;const o=this.services.lsp.DocumentUpdateHandler,a=(n=this.services.lsp.FileOperationHandler)===null||n===void 0?void 0:n.fileOperationOptions,l=this.services.ServiceRegistry.all,c=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.Formatter}),u=l.map(x=>{var b,te;return(te=(b=x.lsp)===null||b===void 0?void 0:b.Formatter)===null||te===void 0?void 0:te.formatOnTypeOptions}).find(x=>!!x),f=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.CodeActionProvider}),m=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.SemanticTokenProvider}),g=PD(l.map(x=>{var b,te;return(te=(b=x.lsp)===null||b===void 0?void 0:b.SemanticTokenProvider)===null||te===void 0?void 0:te.semanticTokensOptions})),d=(i=(r=this.services.lsp)===null||r===void 0?void 0:r.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,_=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.DocumentLinkProvider}),T=OD(l.map(x=>{var b,te;return(te=(b=x.lsp)===null||b===void 0?void 0:b.SignatureHelp)===null||te===void 0?void 0:te.signatureHelpOptions})),v=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.TypeProvider}),p=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.ImplementationProvider}),h=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.CompletionProvider}),$=yD(l.map(x=>{var b,te;return(te=(b=x.lsp)===null||b===void 0?void 0:b.CompletionProvider)===null||te===void 0?void 0:te.completionOptions})),F=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.ReferencesProvider}),W=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.DocumentSymbolProvider}),J=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.DefinitionProvider}),ke=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.DocumentHighlightProvider}),Ae=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.FoldingRangeProvider}),Ee=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.HoverProvider}),P=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.RenameProvider}),A=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.CallHierarchyProvider}),k=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.TypeHierarchyProvider}),C=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.CodeLensProvider}),N=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.DeclarationProvider}),E=this.hasService(x=>{var b;return(b=x.lsp)===null||b===void 0?void 0:b.InlayHintProvider}),D=(s=this.services.lsp)===null||s===void 0?void 0:s.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:a},executeCommandProvider:d&&{commands:d},textDocumentSync:{change:oe.TextDocumentSyncKind.Incremental,openClose:!0,save:!!o.didSaveDocument,willSave:!!o.willSaveDocument,willSaveWaitUntil:!!o.willSaveDocumentWaitUntil},completionProvider:h?$:void 0,referencesProvider:F,documentSymbolProvider:W,definitionProvider:J,typeDefinitionProvider:v,documentHighlightProvider:ke,codeActionProvider:f,documentFormattingProvider:c,documentRangeFormattingProvider:c,documentOnTypeFormattingProvider:u,foldingRangeProvider:Ae,hoverProvider:Ee,renameProvider:P?{prepareProvider:!0}:void 0,semanticTokensProvider:m?g:void 0,signatureHelpProvider:T,implementationProvider:p,callHierarchyProvider:A?{}:void 0,typeHierarchyProvider:k?{}:void 0,documentLinkProvider:_?{resolveProvider:!1}:void 0,codeLensProvider:C?{resolveProvider:!1}:void 0,declarationProvider:N,inlayHintProvider:E?{resolveProvider:!1}:void 0,workspaceSymbolProvider:D?{resolveProvider:!!D.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){const n=this.services.lsp.Connection,r=n?Object.assign(Object.assign({},e),{register:i=>n.client.register(oe.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>n.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(r).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}}function xD(t){const e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");MD(e,t),LD(e,t),FD(e,t),UD(e,t),HD(e,t),jD(e,t),KD(e,t),qD(e,t),GD(e,t),zD(e,t),YD(e,t),XD(e,t),BD(e,t),JD(e,t),VD(e,t),QD(e,t),ZD(e,t),t1(e,t),r1(e,t),o1(e,t),a1(e,t),i1(e,t),n1(e,t),e1(e,t),WD(e,t),s1(e,t),e.onInitialize(r=>t.lsp.LanguageServer.initialize(r)),e.onInitialized(r=>{t.lsp.LanguageServer.initialized(r)}),t.workspace.TextDocuments.listen(e),e.listen()}function MD(t,e){const n=e.lsp.DocumentUpdateHandler,r=e.workspace.TextDocuments;n.didOpenDocument&&r.onDidOpen(i=>n.didOpenDocument(i)),n.didChangeContent&&r.onDidChangeContent(i=>n.didChangeContent(i)),n.didCloseDocument&&r.onDidClose(i=>n.didCloseDocument(i)),n.didSaveDocument&&r.onDidSave(i=>n.didSaveDocument(i)),n.willSaveDocument&&r.onWillSave(i=>n.willSaveDocument(i)),n.willSaveDocumentWaitUntil&&r.onWillSaveWaitUntil(i=>n.willSaveDocumentWaitUntil(i)),n.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(i=>n.didChangeWatchedFiles(i))}function LD(t,e){const n=e.lsp.FileOperationHandler;n&&(n.didCreateFiles&&t.workspace.onDidCreateFiles(r=>n.didCreateFiles(r)),n.didRenameFiles&&t.workspace.onDidRenameFiles(r=>n.didRenameFiles(r)),n.didDeleteFiles&&t.workspace.onDidDeleteFiles(r=>n.didDeleteFiles(r)),n.willCreateFiles&&t.workspace.onWillCreateFiles(r=>n.willCreateFiles(r)),n.willRenameFiles&&t.workspace.onWillRenameFiles(r=>n.willRenameFiles(r)),n.willDeleteFiles&&t.workspace.onWillDeleteFiles(r=>n.willDeleteFiles(r)))}function FD(t,e){const n=e.workspace.DocumentBuilder;n.onUpdate(async(r,i)=>{for(const s of i)t.sendDiagnostics({uri:s.toString(),diagnostics:[]})}),n.onDocumentPhase(B.Validated,async r=>{r.diagnostics&&t.sendDiagnostics({uri:r.uri.toString(),diagnostics:r.diagnostics})})}function UD(t,e){t.onCompletion(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(r,i,s)},e,B.IndexedReferences))}function HD(t,e){t.onReferences(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(r,i,s)},e,B.IndexedReferences))}function BD(t,e){t.onCodeAction(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(r,i,s)},e,B.Validated))}function jD(t,e){t.onDocumentSymbol(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(r,i,s)},e,B.Parsed))}function KD(t,e){t.onDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(r,i,s)},e,B.IndexedReferences))}function qD(t,e){t.onTypeDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(r,i,s)},e,B.IndexedReferences))}function GD(t,e){t.onImplementation(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(r,i,s)},e,B.IndexedReferences))}function WD(t,e){t.onDeclaration(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(r,i,s)},e,B.IndexedReferences))}function zD(t,e){t.onDocumentHighlight(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(r,i,s)},e,B.IndexedReferences))}function VD(t,e){t.onHover(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(r,i,s)},e,B.IndexedReferences))}function YD(t,e){t.onFoldingRanges(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(r,i,s)},e,B.Parsed))}function XD(t,e){t.onDocumentFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocument(r,i,s)},e,B.Parsed)),t.onDocumentRangeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(r,i,s)},e,B.Parsed)),t.onDocumentOnTypeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(r,i,s)},e,B.Parsed))}function JD(t,e){t.onRenameRequest(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.rename(r,i,s)},e,B.IndexedReferences)),t.onPrepareRename(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.prepareRename(r,i,s)},e,B.IndexedReferences))}function QD(t,e){t.languages.inlayHint.on(Rn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(r,i,s)},e,B.IndexedReferences))}function ZD(t,e){const n={data:[]};t.languages.semanticTokens.on(Rn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlight(i,s,o):n},e,B.IndexedReferences)),t.languages.semanticTokens.onDelta(Rn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightDelta(i,s,o):n},e,B.IndexedReferences)),t.languages.semanticTokens.onRange(Rn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightRange(i,s,o):n},e,B.IndexedReferences))}function e1(t,e){t.onDidChangeConfiguration(n=>{n.settings&&e.workspace.ConfigurationProvider.updateConfiguration(n)})}function t1(t,e){const n=e.lsp.ExecuteCommandHandler;n&&t.onExecuteCommand(async(r,i)=>{var s;try{return await n.executeCommand(r.command,(s=r.arguments)!==null&&s!==void 0?s:[],i)}catch(o){return Sn(o)}})}function n1(t,e){t.onDocumentLinks(Rn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(r,i,s)},e,B.Parsed))}function r1(t,e){t.onSignatureHelp(Rn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(r,i,s)},e,B.IndexedReferences))}function i1(t,e){t.onCodeLens(Rn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(r,i,s)},e,B.IndexedReferences))}function s1(t,e){var n;const r=e.lsp.WorkspaceSymbolProvider;if(r){const i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(o,a)=>{try{return await i.waitUntil(B.IndexedContent,a),await r.getSymbols(o,a)}catch(l){return Sn(l)}});const s=(n=r.resolveSymbol)===null||n===void 0?void 0:n.bind(r);s&&t.onWorkspaceSymbolResolve(async(o,a)=>{try{return await i.waitUntil(B.IndexedContent,a),await s(o,a)}catch(l){return Sn(l)}})}}function o1(t,e){t.languages.callHierarchy.onPrepare(Rn(async(n,r,i,s)=>{var o;if(!((o=n.lsp)===null||o===void 0)&&o.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.prepareCallHierarchy(r,i,s);return a??null}return null},e,B.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(cc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.incomingCalls(r,i);return o??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(cc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.outgoingCalls(r,i);return o??null}return null},e))}function a1(t,e){e.ServiceRegistry.all.some(n=>{var r;return(r=n.lsp)===null||r===void 0?void 0:r.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Rn(async(n,r,i,s)=>{var o,a;const l=await((a=(o=n.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(r,i,s));return l??null},e,B.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(cc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.supertypes(r,i));return a??null},e)),t.languages.typeHierarchy.onSubtypes(cc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.subtypes(r,i));return a??null},e)))}function cc(t,e){const n=e.ServiceRegistry;return async(r,i)=>{const s=at.parse(r.item.uri),o=await sm(e,i,s,B.IndexedReferences);if(o)return o;if(!n.hasServices(s)){const l=`Could not find service instance for uri: '${s}'`;return console.debug(l),Sn(new Error(l))}const a=n.getServices(s);try{return await t(a,r,i)}catch(l){return Sn(l)}}}function Rn(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),l=await sm(e,o,a,n);if(l)return l;if(!i.hasServices(a)){const u=`Could not find service instance for uri: '${a}'`;return console.debug(u),Sn(new Error(u))}const c=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(c,u,s,o)}catch(u){return Sn(u)}}}function rt(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),l=await sm(e,o,a,n);if(l)return l;if(!i.hasServices(a))return console.debug(`Could not find service instance for uri: '${a.toString()}'`),null;const c=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(c,u,s,o)}catch(u){return Sn(u)}}}async function sm(t,e,n,r){if(r!==void 0){const i=t.workspace.DocumentBuilder;try{await i.waitUntil(r,n,e)}catch(s){return Sn(s)}}}function Sn(t){if(Zs(t))return new oe.ResponseError(oe.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof oe.ResponseError)return t;throw t}class l1{getSymbolKind(e){return M.SymbolKind.Field}getCompletionItemKind(e){return M.CompletionItemKind.Reference}}class c1{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return[];const s=cr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);return s?this.getReferences(s,n,e):[]}getReferences(e,n,r){const i=[],s=this.references.findDeclaration(e);if(s){const o={includeDeclaration:n.context.includeDeclaration};this.references.findReferences(s,o).forEach(a=>{i.push(M.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}}class u1{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,n,r){const i={},s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument.offsetAt(n.position),a=cr(s,o,this.grammarConfig.nameRegexp);if(!a)return;const l=this.references.findDeclaration(a);if(!l)return;const c={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(l,c).forEach(f=>{const m=Kt.replace(f.segment.range,n.newName),g=f.sourceUri.toString();i[g]?i[g].push(m):i[g]=[m]}),{changes:i}}prepareRename(e,n,r){return this.renameNodeRange(e,n.position)}renameNodeRange(e,n){const r=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(n);if(r&&i){const s=cr(r,i,this.grammarConfig.nameRegexp);if(!s)return;if(this.references.findDeclaration(s)||this.isNameNode(s))return s.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&aT(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}}class d1{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,n=le.None){const r=[],i=e.query.toLowerCase();for(const s of this.indexManager.allElements())if(await ot(n),this.fuzzyMatcher.match(i,s.name)){const o=this.getWorkspaceSymbol(s);o&&r.push(o)}return r}getWorkspaceSymbol(e){const n=e.nameSegment;if(n)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:n.range,uri:e.documentUri.toString()}}}}class n${constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new M.Emitter,this._onDidOpen=new M.Emitter,this._onDidClose=new M.Emitter,this._onDidSave=new M.Emitter,this._onWillSave=new M.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(pe.normalize(e))}set(e){const n=pe.normalize(e.uri);let r=!0;this._syncedDocuments.has(n)&&(r=!1),this._syncedDocuments.set(n,e);const i=Object.freeze({document:e});return this._onDidOpen.fire(i),this._onDidChangeContent.fire(i),r}delete(e){const n=pe.normalize(typeof e=="object"&&"uri"in e?e.uri:e),r=this._syncedDocuments.get(n);r!==void 0&&(this._syncedDocuments.delete(n),this._onDidClose.fire(Object.freeze({document:r})))}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=M.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=pe.normalize(i.uri),o=this._configuration.create(s,i.languageId,i.version,i.text);this._syncedDocuments.set(s,o);const a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);const a=pe.normalize(i.uri);let l=this._syncedDocuments.get(a);l!==void 0&&(l=this._configuration.update(l,s,o),this._syncedDocuments.set(a,l),this._onDidChangeContent.fire(Object.freeze({document:l})))})),n.push(e.onDidCloseTextDocument(r=>{const i=pe.normalize(r.textDocument.uri),s=this._syncedDocuments.get(i);s!==void 0&&(this._syncedDocuments.delete(i),this._onDidClose.fire(Object.freeze({document:s})))})),n.push(e.onWillSaveTextDocument(r=>{const i=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{const s=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{const i=this._syncedDocuments.get(pe.normalize(r.textDocument.uri));i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),M.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}class f1{constructor(e){this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new M.Emitter,this._onDidSave=new M.Emitter,this._onDidChange=new M.Emitter,this._onDidClose=new M.Emitter,"listen"in e?this._cellTextDocuments=e:this._cellTextDocuments=new n$(e)}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(pe.normalize(e))}getNotebookCell(e){const n=this.notebookCellMap.get(pe.normalize(e));return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"||"scheme"in e?e:e.document,r=this.notebookCellMap.get(pe.normalize(n));return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new Dr,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri);this.notebookDocuments.set(s,i.notebookDocument);for(const o of i.cellTextDocuments)n.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o===void 0)return;o.version=i.notebookDocument.version;const a=o.metadata;let l=!1;const c=i.change;c.metadata!==void 0&&(l=!0,o.metadata=c.metadata);const u=[],f=[],m=[],g=[];if(c.cells!==void 0){const p=c.cells;if(p.structure!==void 0){const h=p.structure.array;if(o.cells.splice(h.start,h.deleteCount,...h.cells!==void 0?h.cells:[]),p.structure.didOpen!==void 0)for(const $ of p.structure.didOpen)n.openTextDocument({textDocument:$}),u.push($.uri);if(p.structure.didClose)for(const $ of p.structure.didClose)n.closeTextDocument({textDocument:$}),f.push($.uri)}if(p.data!==void 0){const h=new Map(p.data.map($=>[$.document,$]));for(let $=0;$<=o.cells.length;$++){const F=h.get(o.cells[$].document);if(F!==void 0){const W=o.cells.splice($,1,F);if(m.push({old:W[0],new:F}),h.delete(F.document),h.size===0)break}}}if(p.textContent!==void 0)for(const h of p.textContent)n.changeTextDocument({textDocument:h.document,contentChanges:h.changes}),g.push(h.document.uri)}this.updateCellMap(o);const d={notebookDocument:o};l&&(d.metadata={old:a,new:o.metadata});const _=[];for(const p of u)_.push(this.getNotebookCell(p));const T=[];for(const p of f)T.push(this.getNotebookCell(p));const v=[];for(const p of g)v.push(this.getNotebookCell(p));(_.length>0||T.length>0||m.length>0||v.length>0)&&(d.cells={added:_,removed:T,changed:{data:m,textContent:v}}),(d.metadata!==void 0||d.cells!==void 0)&&this._onDidChange.fire(d)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.getNotebookDocument(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=pe.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o!==void 0){this._onDidClose.fire(o);for(const a of i.cellTextDocuments)n.closeTextDocument({textDocument:a});this.notebookDocuments.delete(s);for(const a of o.cells)this.notebookCellMap.delete(a.document)}})),M.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}class Dr{onDidOpenTextDocument(e){return this.openHandler=e,M.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,M.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,M.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return Dr.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return Dr.NULL_DISPOSE}onDidSaveTextDocument(){return Dr.NULL_DISPOSE}}Dr.NULL_DISPOSE=Object.freeze({dispose:()=>{}});function p1(t){return Zl.merge(RT(t),h1(t))}function h1(t){return{lsp:{CompletionProvider:e=>new t$(e),DocumentSymbolProvider:e=>new RD(e),HoverProvider:e=>new CD(e),FoldingRangeProvider:e=>new $D(e),ReferencesProvider:e=>new c1(e),DefinitionProvider:e=>new _D(e),DocumentHighlightProvider:e=>new vD(e),RenameProvider:e=>new u1(e)},shared:()=>t.shared}}function m1(t){return Zl.merge(TT(t),g1(t))}function g1(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new DD(e),DocumentUpdateHandler:e=>new TD(e),WorkspaceSymbolProvider:e=>new d1(e),NodeKindProvider:()=>new l1,FuzzyMatcher:()=>new kD},workspace:{TextDocuments:()=>new n$(Xl),NotebookDocuments:e=>new f1(e.workspace.TextDocuments)}}}var om=M;const y_="Access_group_direction",__="Acl_extended_match",v_="Acl_extended_match_dest",Nu="Acl_port_name",R_="Acl_port_value",T_="Acl_protocol",$_="Acl_standard_match",k_="AlgorithmType_Options",w_="Bgp_neighbour_options",Iu="Bgp_neighbour_update_source_option",Ou="Bgp_update_source_interface_types",fh="COMMON";function y1(t){return Nn.isInstance(t,fh)}const b_="Configure_cmd",S_="Crypto_cmd_option",C_="Generate_cmd_option",A_="Interface_types",E_="Ip_access_list_option",P_="IP_cmd_option",N_="Ip_cmd_option_ospf_options",I_="Ip_cmd_options",O_="Key_cmd_option",D_="Line_types",x_="Logging_cmd",M_="Login_cmd",L_="Nat_direction",F_="Nat_interface_types",U_="No_ip_cmd_options",H_="No_options",B_="Ospf_interface_types",j_="Rip_interface_types",K_="Rsa_cmd_option",q_="Show_cmd_options",G_="Transport_cmd",W_="TransportInput_cmd",z_="UsageKeys_Option",V_="Username_cmd_option",Ho="Access_group_in",Bo="Access_group_out",jo="Acl_any_match",Ko="Acl_dest_any_match",qo="Acl_dest_host_match",Go="Acl_dest_network_match",Ri="Acl_extended_cmd",Du="Acl_extended_deny_cmd",xu="Acl_extended_permit_cmd",Wo="Acl_host_match",Mu="ACL_NAME",zo="Acl_network_match",Lu="ACL_NUMBER",Vo="Acl_port_bgp",Yo="Acl_port_domain",Xo="Acl_port_ftp",Jo="Acl_port_http",Qo="Acl_port_https",Zo="Acl_port_isakmp",Fu="Acl_port_match",ea="Acl_port_ntp",ta="Acl_port_number",Uu="ACL_PORT_NUMBER",na="Acl_port_snmp",ra="Acl_port_ssh",ia="Acl_port_telnet",sa="Acl_port_tftp",oa="Acl_protocol_gre",aa="Acl_protocol_icmp",la="Acl_protocol_ip",ca="Acl_protocol_tcp",ua="Acl_protocol_udp",Ti="Acl_standard_cmd",Hu="Acl_standard_deny_cmd",Bu="Acl_standard_permit_cmd",ju="ACL_STATEMENT_NUMBER",da="AlgorithmTypeOption",Ku="Banner_cmd",qu="Banner_cmd_option",Gu="BANNER_MESSAGE",Wu="BGP_AS_NUMBER",zu="BGP_EBGP_MULTIHOP_NUMBER",fa="Bgp_neigbour_ebgp_multihop_option",Vu="Bgp_neighbor_cmd",pa="Bgp_neighbour_Remote_as_option",Yu="Bgp_network_cmd",Xu="Bgp_router_id_cmd",ha="Bgp_update_source_interface_type_fastethernet",ma="Bgp_update_source_interface_type_gigabitethernet",Ju="CarrierDelay_cmd",Qu="COMMENT",ga="COMMENTLINE",$i="Configure_cmd_options",Zu="CONSOLE_NUMBER",ed="Crypto_cmd",td="Description_cmd",nd="DESCRIPTION_INPUT",ya="Domainname_cmd",rd="DOMAINNAME_INPUT",id="Duplex_cmd",sd="Duplex_option",od="Enable_cmds",Rl="ExecTimeout_cmd";function _1(t){return Nn.isInstance(t,Rl)}const _a="Generate_cmd",ad="Hostname_cmd",ld="HOSTNAME_INPUT",cd="INTERFACE_CARRIER_DELAY_NUMBER",ud="Interface_cmd",dd="INTERFACE_NUMBER_INPUT",fd="INTERFACE_SPEED_NUMBER",ki="Interface_type_fastethernet",wi="Interface_type_gigabitethernet",bi="Interface_type_vlan",pd="INTERFACE_VLAN_NUMBER",hd="IP",va="Ip_access_list_cmd_option",md="IP_cmd",Tl="IP_cmd_interface";function Y_(t){return Nn.isInstance(t,Tl)}const Ra="Ip_cmd_option_access_group",gs="Ip_cmd_option_address";function X_(t){return Nn.isInstance(t,gs)}const Ta="Ip_cmd_option_nat",$a="Ip_cmd_option_ospf",ka="Ip_cmd_option_ospf_option_cost",wa="Ip_cmd_option_ospf_option_priority",gd="Ip_Helper_cmd",yd="Ip_nat_cmd",_d="Ip_nat_cmd_option",vd="Ip_nat_inside_cmd",Rd="Ip_nat_inside_source_cmd",Td="Ip_nat_inside_source_list_cmd",$d="Ip_nat_inside_source_list_interface_cmd",kd="Ip_nat_overload_cmd",ba="Key_cmd",$l="KEYWORDS";function v1(t){return Nn.isInstance(t,$l)}const wd="Line_cmd",bd="Line_ExecTimeoutValue",Sa="Line_LoggingOption",Ca="Line_LoginOption",Si="Line_type_console",Ci="Line_type_vty",Aa="MD5Option",Sd="MD5Option_cmd",Ea="Modulus_cmd",Cd="MODULUS_INPUT",Pa="Nat_inside",Na="Nat_interface_fastethernet",Ia="Nat_interface_gigabitethernet",Ad="NAT_INTERFACE_NUMBER_INPUT",Oa="Nat_outside",Da="No_banner_cmd",Ed="No_cmd",Pd="No_cmd_interface",Nd="No_cmd_interface_option",xa="No_ip_cmd",Ma="No_ip_cmd_option_domain_lookup",Id="OSPF_AREA_NUMBER",Od="OSPF_COST_NUMBER",Dd="Ospf_default_information_cmd",xd="Ospf_default_information_cmd_options",Md="Ospf_network_cmd",Ld="Ospf_passive_interface_cmd",Fd="OSPF_PASSIVE_INTERFACE_NUMBER",La="Ospf_passive_interface_type_fastethernet",Fa="Ospf_passive_interface_type_gigabitethernet",Ud="Ospf_priority_cmd",Hd="OSPF_PRIORITY_NUMBER",Bd="OSPF_PROCESS_NUMBER",jd="Ospf_redistribute_cmd",Kd="Ospf_redistribute_cmd_options",qd="Ospf_router_id_cmd",Ua="PasswordOption",Gd="Ping_cmd",Wd="PRIVILEGE_INPUT",Ha="PrivilegeOption",zd="Rip_default_information_cmd",Vd="Rip_default_information_cmd_options",Yd="Rip_network_cmd",Xd="Rip_no_cmd_options",Jd="Rip_no_cmds",Qd="Rip_passive_interface_cmd",Zd="RIP_PASSIVE_INTERFACE_NUMBER",Ba="Rip_passive_interface_type_fastethernet",ja="Rip_passive_interface_type_gigabitethernet",ef="Rip_redistribute_cmd",tf="Rip_redistribute_cmd_options",nf="Rip_version_cmd",rf="RIP_VERSION_NUMBER",sf="Router_cmd",Ka="Router_cmd_option",qa="Rsa_cmd",of="Script",Ga="ScryptOption",af="ScryptOption_cmd",Wa="SecretOption",za="Sha256Option",lf="Sha256Option_cmd",cf="Show_cmd",Va="Show_interface_option",Ya="Show_run_option",uf="Shutdown_cmd",df="Speed_cmd",ff="Speed_cmd_fe",Xa="SSH_cmd",pf="SSHOptions",hf="Stat",mf="SUBNETMASK",Ja="Transport_cmd_option",Qa="TransportInputList",gf="TransportProto",yf="UPDATE_SOURCE_INTERFACE_NUMBER_INPUT",Za="UsageKeys_cmd",_f="Username_cmd",vf="USERNAME_INPUT",Rf="USERNAME_PASSWORD_INPUT",Tf="VERSION_INPUT",$f="VTY_NUMBER",kf="WILDCARDMASK",Ai="Acl_extended_cmds",Ei="Acl_standard_cmds",Pi="Configure_cmds",Ni="Interface_fastethernet_cmds",Ii="Interface_gigabitethernet_cmds",Oi="Interface_vlan_cmds",Ar="Line_console_cmds";function R1(t){return Nn.isInstance(t,Ar)}const Er="Line_vty_cmds";function T1(t){return Nn.isInstance(t,Er)}const Di="Bgp_cmds",xi="Ospf_cmds",Mi="Rip_cmds",el="Exit_acl_extended",tl="Exit_acl_standard",nl="Exit_configure",rl="Exit_interface_fastethernet",il="Exit_interface_gigabitethernet",sl="Exit_interface_vlan",ys="Exit_line_console";function $1(t){return Nn.isInstance(t,ys)}const _s="Exit_line_vty";function k1(t){return Nn.isInstance(t,_s)}const ol="Exit_bgp",al="Exit_ospf",ll="Exit_rip";class r$ extends J_{getAllTypes(){return[Mu,Lu,Uu,ju,y_,Ho,Bo,jo,Ko,qo,Go,Ri,Ai,Du,__,v_,xu,Wo,zo,Vo,Yo,Xo,Jo,Qo,Zo,Fu,Nu,ea,ta,na,ra,ia,sa,R_,T_,oa,aa,la,ca,ua,Ti,Ei,Hu,$_,Bu,da,k_,Gu,Wu,zu,Ku,qu,Di,fa,Vu,pa,w_,Iu,Yu,Xu,ha,ma,Ou,Qu,ga,fh,Zu,Ju,b_,$i,Pi,ed,S_,nd,rd,td,ya,id,sd,od,Rl,el,tl,ol,nl,rl,il,sl,ys,_s,al,ll,_a,C_,ld,ad,cd,dd,fd,pd,hd,md,Tl,P_,ud,Ni,Ii,ki,wi,bi,A_,Oi,gd,va,E_,Ra,gs,Ta,$a,ka,wa,N_,I_,yd,_d,vd,Rd,Td,$d,kd,$l,ba,O_,bd,Sa,Ca,wd,Ar,Si,Ci,D_,Er,x_,M_,Aa,Sd,Cd,Ea,Ad,L_,Pa,Na,Ia,F_,Oa,Da,Ed,Pd,Nd,xa,Ma,U_,H_,Id,Od,Fd,Hd,Bd,xi,Dd,xd,B_,Md,Ld,La,Fa,Ud,jd,Kd,qd,Wd,Ua,Gd,Ha,Zd,rf,Mi,zd,Vd,j_,Yd,Xd,Jd,Qd,Ba,ja,ef,tf,nf,sf,Ka,qa,K_,pf,Xa,mf,of,Ga,af,Wa,za,lf,cf,q_,Va,Ya,uf,df,ff,hf,Qa,W_,gf,G_,Ja,yf,vf,Rf,z_,Za,_f,V_,Tf,$f,kf]}computeIsSubtype(e,n){switch(e){case Ho:case Bo:return this.isSubtype(y_,n);case jo:case Wo:case zo:return this.isSubtype(__,n)||this.isSubtype($_,n);case Ko:case qo:case Go:return this.isSubtype(v_,n);case Ri:case Ti:return this.isSubtype(E_,n);case Ai:return this.isSubtype(Ri,n);case Vo:case Yo:case Xo:case Jo:case Qo:case Zo:case ea:case na:case ra:case ia:case sa:return this.isSubtype(Nu,n);case Nu:case ta:return this.isSubtype(R_,n);case oa:case aa:case la:case ca:case ua:return this.isSubtype(T_,n);case Ei:return this.isSubtype(Ti,n);case da:case Ua:case Ha:case Wa:return this.isSubtype(V_,n);case Di:case xi:case Mi:return this.isSubtype(Ka,n);case fa:case pa:case Iu:return this.isSubtype(w_,n);case ha:case ma:return this.isSubtype(Ou,n);case Ou:return this.isSubtype(Iu,n);case ga:return this.isSubtype(fh,n);case $i:return this.isSubtype(b_,n);case Pi:return this.isSubtype($i,n);case ya:case va:case Xa:return this.isSubtype(P_,n);case el:return this.isSubtype(Ai,n);case tl:return this.isSubtype(Ei,n);case ol:return this.isSubtype(Di,n);case nl:return this.isSubtype(Pi,n);case rl:return this.isSubtype(Ni,n);case il:return this.isSubtype(Ii,n);case sl:return this.isSubtype(Oi,n);case ys:return this.isSubtype(Ar,n);case _s:return this.isSubtype(Er,n);case al:return this.isSubtype(xi,n);case ll:return this.isSubtype(Mi,n);case _a:return this.isSubtype(O_,n);case Ni:return this.isSubtype(ki,n);case Ii:return this.isSubtype(wi,n);case ki:case wi:case bi:return this.isSubtype(A_,n);case Oi:return this.isSubtype(bi,n);case Ra:case gs:case Ta:case $a:return this.isSubtype(I_,n);case ka:case wa:return this.isSubtype(N_,n);case ba:return this.isSubtype(S_,n);case Ar:return this.isSubtype(Si,n);case Sa:return this.isSubtype(x_,n);case Ca:return this.isSubtype(M_,n);case Si:case Ci:return this.isSubtype(D_,n);case Er:return this.isSubtype(Ci,n);case Aa:case Ga:case za:return this.isSubtype(k_,n);case Ea:return this.isSubtype(z_,n);case Pa:case Oa:return this.isSubtype(L_,n);case Na:case Ia:return this.isSubtype(F_,n);case Da:case xa:return this.isSubtype(H_,n);case Ma:return this.isSubtype(U_,n);case La:case Fa:return this.isSubtype(B_,n);case Ba:case ja:return this.isSubtype(j_,n);case qa:return this.isSubtype(C_,n);case Va:case Ya:return this.isSubtype(q_,n);case Ja:return this.isSubtype(G_,n);case Qa:return this.isSubtype(W_,n);case Za:return this.isSubtype(K_,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Ho:return{name:Ho,properties:[{name:"direction"}]};case Bo:return{name:Bo,properties:[{name:"direction"}]};case jo:return{name:jo,properties:[{name:"option"}]};case Ko:return{name:Ko,properties:[{name:"option"},{name:"port"}]};case qo:return{name:qo,properties:[{name:"ip"},{name:"port"}]};case Go:return{name:Go,properties:[{name:"ip"},{name:"mask"},{name:"port"}]};case Ri:return{name:Ri,properties:[{name:"comment"},{name:"name"}]};case Du:return{name:Du,properties:[{name:"comment"},{name:"destination"},{name:"protocol"},{name:"sequence"},{name:"source"}]};case xu:return{name:xu,properties:[{name:"comment"},{name:"destination"},{name:"protocol"},{name:"sequence"},{name:"source"}]};case Wo:return{name:Wo,properties:[{name:"ip"}]};case Mu:return{name:Mu,properties:[{name:"value"}]};case zo:return{name:zo,properties:[{name:"ip"},{name:"mask"}]};case Lu:return{name:Lu,properties:[{name:"value"}]};case Vo:return{name:Vo,properties:[{name:"value"}]};case Yo:return{name:Yo,properties:[{name:"value"}]};case Xo:return{name:Xo,properties:[{name:"value"}]};case Jo:return{name:Jo,properties:[{name:"value"}]};case Qo:return{name:Qo,properties:[{name:"value"}]};case Zo:return{name:Zo,properties:[{name:"value"}]};case Fu:return{name:Fu,properties:[{name:"port"}]};case ea:return{name:ea,properties:[{name:"value"}]};case ta:return{name:ta,properties:[{name:"value"}]};case Uu:return{name:Uu,properties:[{name:"value"}]};case na:return{name:na,properties:[{name:"value"}]};case ra:return{name:ra,properties:[{name:"value"}]};case ia:return{name:ia,properties:[{name:"value"}]};case sa:return{name:sa,properties:[{name:"value"}]};case oa:return{name:oa,properties:[{name:"protocol"}]};case aa:return{name:aa,properties:[{name:"protocol"}]};case la:return{name:la,properties:[{name:"protocol"}]};case ca:return{name:ca,properties:[{name:"protocol"}]};case ua:return{name:ua,properties:[{name:"protocol"}]};case Ti:return{name:Ti,properties:[{name:"comment"},{name:"value"}]};case Hu:return{name:Hu,properties:[{name:"comment"},{name:"option"}]};case Bu:return{name:Bu,properties:[{name:"comment"},{name:"option"}]};case ju:return{name:ju,properties:[{name:"value"}]};case da:return{name:da,properties:[{name:"option"}]};case Ku:return{name:Ku,properties:[{name:"comment"},{name:"message"},{name:"option"}]};case qu:return{name:qu,properties:[{name:"option"}]};case Gu:return{name:Gu,properties:[{name:"message",defaultValue:[]}]};case Wu:return{name:Wu,properties:[{name:"value"}]};case zu:return{name:zu,properties:[{name:"value"}]};case fa:return{name:fa,properties:[{name:"multihop"}]};case Vu:return{name:Vu,properties:[{name:"comment"},{name:"neighbour"},{name:"option"}]};case pa:return{name:pa,properties:[{name:"remoteASnumber"}]};case Yu:return{name:Yu,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Xu:return{name:Xu,properties:[{name:"comment"},{name:"id"}]};case ha:return{name:ha,properties:[{name:"number"},{name:"type"}]};case ma:return{name:ma,properties:[{name:"number"},{name:"type"}]};case Ju:return{name:Ju,properties:[{name:"comment"},{name:"seconds"}]};case Qu:return{name:Qu,properties:[{name:"value"}]};case ga:return{name:ga,properties:[{name:"value"}]};case $i:return{name:$i,properties:[{name:"comment"}]};case Zu:return{name:Zu,properties:[{name:"value"}]};case ed:return{name:ed,properties:[{name:"comment"},{name:"option"}]};case td:return{name:td,properties:[{name:"comment"},{name:"value"}]};case nd:return{name:nd,properties:[{name:"value",defaultValue:[]}]};case ya:return{name:ya,properties:[{name:"comment"},{name:"value"}]};case rd:return{name:rd,properties:[{name:"value"}]};case id:return{name:id,properties:[{name:"comment"},{name:"option"}]};case sd:return{name:sd,properties:[{name:"option"}]};case od:return{name:od,properties:[{name:"lines",defaultValue:[]}]};case Rl:return{name:Rl,properties:[{name:"exectimeoutvalue"}]};case _a:return{name:_a,properties:[{name:"option"}]};case ad:return{name:ad,properties:[{name:"comment"},{name:"value"}]};case ld:return{name:ld,properties:[{name:"value"}]};case cd:return{name:cd,properties:[{name:"value"}]};case ud:return{name:ud,properties:[{name:"types"}]};case dd:return{name:dd,properties:[{name:"value"}]};case fd:return{name:fd,properties:[{name:"value"}]};case ki:return{name:ki,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case wi:return{name:wi,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case bi:return{name:bi,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case pd:return{name:pd,properties:[{name:"value"}]};case hd:return{name:hd,properties:[{name:"value"}]};case va:return{name:va,properties:[{name:"option"}]};case md:return{name:md,properties:[{name:"option"}]};case Tl:return{name:Tl,properties:[{name:"option"}]};case Ra:return{name:Ra,properties:[{name:"comment"},{name:"direction"},{name:"name"}]};case gs:return{name:gs,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Ta:return{name:Ta,properties:[{name:"comment"},{name:"direction"}]};case $a:return{name:$a,properties:[{name:"comment"},{name:"option"}]};case ka:return{name:ka,properties:[{name:"cost"}]};case wa:return{name:wa,properties:[{name:"priority"}]};case gd:return{name:gd,properties:[{name:"comment"},{name:"value"}]};case yd:return{name:yd,properties:[{name:"option"}]};case _d:return{name:_d,properties:[{name:"option"}]};case vd:return{name:vd,properties:[{name:"option"}]};case Rd:return{name:Rd,properties:[{name:"option"}]};case Td:return{name:Td,properties:[{name:"listName"},{name:"option"}]};case $d:return{name:$d,properties:[{name:"interface"},{name:"option"}]};case kd:return{name:kd,properties:[{name:"comment"}]};case ba:return{name:ba,properties:[{name:"option"}]};case $l:return{name:$l,properties:[{name:"keywords"}]};case wd:return{name:wd,properties:[{name:"command"},{name:"types"}]};case bd:return{name:bd,properties:[{name:"comment"},{name:"minutes"},{name:"seconds"}]};case Sa:return{name:Sa,properties:[{name:"comment"},{name:"option"}]};case Ca:return{name:Ca,properties:[{name:"comment"},{name:"option"}]};case Si:return{name:Si,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Ci:return{name:Ci,properties:[{name:"comment"},{name:"end"},{name:"start"},{name:"type"}]};case Aa:return{name:Aa,properties:[{name:"option"}]};case Sd:return{name:Sd,properties:[{name:"value"}]};case Ea:return{name:Ea,properties:[{name:"value"}]};case Cd:return{name:Cd,properties:[{name:"value"}]};case Pa:return{name:Pa,properties:[{name:"direction"}]};case Na:return{name:Na,properties:[{name:"types"}]};case Ia:return{name:Ia,properties:[{name:"types"}]};case Ad:return{name:Ad,properties:[{name:"value"}]};case Oa:return{name:Oa,properties:[{name:"direction"}]};case Da:return{name:Da,properties:[{name:"option"}]};case Ed:return{name:Ed,properties:[{name:"comment"},{name:"option"}]};case Pd:return{name:Pd,properties:[{name:"option"}]};case Nd:return{name:Nd,properties:[{name:"comment"}]};case xa:return{name:xa,properties:[{name:"option"}]};case Ma:return{name:Ma,properties:[{name:"type"}]};case Id:return{name:Id,properties:[{name:"value"}]};case Od:return{name:Od,properties:[{name:"value"}]};case Dd:return{name:Dd,properties:[{name:"comment"},{name:"option"}]};case xd:return{name:xd,properties:[{name:"option"}]};case Md:return{name:Md,properties:[{name:"area"},{name:"comment"},{name:"ip"},{name:"mask"}]};case Ld:return{name:Ld,properties:[{name:"comment"},{name:"types"}]};case Fd:return{name:Fd,properties:[{name:"value"}]};case La:return{name:La,properties:[{name:"number"},{name:"type"}]};case Fa:return{name:Fa,properties:[{name:"number"},{name:"type"}]};case Ud:return{name:Ud,properties:[{name:"comment"},{name:"value"}]};case Hd:return{name:Hd,properties:[{name:"value"}]};case Bd:return{name:Bd,properties:[{name:"value"}]};case jd:return{name:jd,properties:[{name:"comment"},{name:"option"}]};case Kd:return{name:Kd,properties:[{name:"option"}]};case qd:return{name:qd,properties:[{name:"comment"},{name:"id"}]};case Ua:return{name:Ua,properties:[{name:"value"}]};case Gd:return{name:Gd,properties:[{name:"comment"},{name:"ip"}]};case Wd:return{name:Wd,properties:[{name:"value"}]};case Ha:return{name:Ha,properties:[{name:"value"}]};case zd:return{name:zd,properties:[{name:"comment"},{name:"option"}]};case Vd:return{name:Vd,properties:[{name:"option"}]};case Yd:return{name:Yd,properties:[{name:"comment"},{name:"ip"}]};case Xd:return{name:Xd,properties:[{name:"options"}]};case Jd:return{name:Jd,properties:[{name:"comment"},{name:"options"}]};case Qd:return{name:Qd,properties:[{name:"types"}]};case Zd:return{name:Zd,properties:[{name:"value"}]};case Ba:return{name:Ba,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ja:return{name:ja,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ef:return{name:ef,properties:[{name:"comment"},{name:"option"}]};case tf:return{name:tf,properties:[{name:"option"}]};case nf:return{name:nf,properties:[{name:"RipVersion"}]};case rf:return{name:rf,properties:[{name:"value"}]};case sf:return{name:sf,properties:[{name:"option"}]};case Ka:return{name:Ka,properties:[{name:"asn"},{name:"comment"},{name:"process"}]};case qa:return{name:qa,properties:[{name:"option"}]};case of:return{name:of,properties:[{name:"script"}]};case Ga:return{name:Ga,properties:[{name:"option"}]};case af:return{name:af,properties:[{name:"value"}]};case Wa:return{name:Wa,properties:[{name:"value"}]};case za:return{name:za,properties:[{name:"option"}]};case lf:return{name:lf,properties:[{name:"value"}]};case cf:return{name:cf,properties:[{name:"options"}]};case Va:return{name:Va,properties:[{name:"comment"},{name:"option"}]};case Ya:return{name:Ya,properties:[{name:"comment"},{name:"option"}]};case uf:return{name:uf,properties:[{name:"comment"}]};case df:return{name:df,properties:[{name:"comment"},{name:"value"}]};case ff:return{name:ff,properties:[{name:"comment"},{name:"value"}]};case Xa:return{name:Xa,properties:[{name:"option"}]};case pf:return{name:pf,properties:[{name:"comment"},{name:"value"}]};case hf:return{name:hf,properties:[{name:"lines",defaultValue:[]}]};case mf:return{name:mf,properties:[{name:"value"}]};case Ja:return{name:Ja,properties:[{name:"option"}]};case Qa:return{name:Qa,properties:[{name:"comment"},{name:"options",defaultValue:[]}]};case gf:return{name:gf,properties:[{name:"option"}]};case yf:return{name:yf,properties:[{name:"value"}]};case Za:return{name:Za,properties:[{name:"option"}]};case _f:return{name:_f,properties:[{name:"comment"},{name:"name"},{name:"options",defaultValue:[]}]};case vf:return{name:vf,properties:[{name:"value"}]};case Rf:return{name:Rf,properties:[{name:"value"}]};case Tf:return{name:Tf,properties:[{name:"value"}]};case $f:return{name:$f,properties:[{name:"value"}]};case kf:return{name:kf,properties:[{name:"value"}]};case Ai:return{name:Ai,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"name"}]};case Ei:return{name:Ei,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"value"}]};case Pi:return{name:Pi,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Ni:return{name:Ni,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Ii:return{name:Ii,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Oi:return{name:Oi,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Ar:return{name:Ar,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Er:return{name:Er,properties:[{name:"comment"},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case Di:return{name:Di,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case xi:return{name:xi,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case Mi:return{name:Mi,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case el:return{name:el,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"name"}]};case tl:return{name:tl,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"value"}]};case nl:return{name:nl,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]}]};case rl:return{name:rl,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case il:return{name:il,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case sl:return{name:sl,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ys:return{name:ys,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case _s:return{name:_s,properties:[{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case ol:return{name:ol,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};case al:return{name:al,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};case ll:return{name:ll,properties:[{name:"asn"},{name:"command"},{name:"comment"},{name:"continuation",defaultValue:[]},{name:"lines",defaultValue:[]},{name:"process"}]};default:return{name:e,properties:[]}}}}const Nn=new r$;let cl;const w1=()=>cl??(cl=sI(`{
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
                  "$ref": "#/rules@56"
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
            "$ref": "#/rules@51"
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
            "$ref": "#/rules@51"
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
            "$ref": "#/rules@51"
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
            "$ref": "#/rules@48"
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
              "$ref": "#/rules@50"
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
            "$ref": "#/rules@48"
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
              "$ref": "#/rules@50"
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
                "$ref": "#/rules@52"
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
                "$ref": "#/rules@52"
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
                "$ref": "#/rules@52"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
                "$ref": "#/rules@52"
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
                "$ref": "#/rules@52"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
      "name": "INTERFACE_NUMBER_INPUT",
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
                "$ref": "#/rules@52"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@54"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@49"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@53"
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
      "name": "ACL_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
      "name": "INTERFACE_SPEED_NUMBER",
      "definition": {
        "$type": "Assignment",
        "feature": "value",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
            "$ref": "#/rules@53"
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
              "$ref": "#/rules@53"
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
              "$ref": "#/rules@53"
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
              "$ref": "#/rules@53"
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
              "$ref": "#/rules@53"
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
                    "$ref": "#/rules@84"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@109"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@57"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@70"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@116"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@79"
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
                    "$ref": "#/rules@105"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@103"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@96"
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
              "$ref": "#/rules@55"
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
                "$ref": "#/rules@58"
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
              "$ref": "#/rules@59"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@63"
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
              "$ref": "#/rules@64"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@66"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@68"
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
                "$ref": "#/rules@65"
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
                "$ref": "#/rules@67"
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
                "$ref": "#/rules@69"
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
                "$ref": "#/rules@71"
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
                "$ref": "#/rules@72"
              },
              "arguments": []
            },
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
                "$ref": "#/rules@80"
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
              "$ref": "#/rules@81"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@83"
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
                "$ref": "#/rules@86"
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
          "$ref": "#/rules@87"
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
                "$ref": "#/rules@88"
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
          "$ref": "#/rules@89"
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
                "$ref": "#/rules@90"
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
          "$ref": "#/rules@91"
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
                "$ref": "#/rules@92"
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
          "$ref": "#/rules@93"
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
                "$ref": "#/rules@94"
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
          "$ref": "#/rules@95"
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
                "$ref": "#/rules@97"
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
              "$ref": "#/rules@98"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@100"
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
                "$ref": "#/rules@99"
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
                "$ref": "#/rules@101"
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
          "$ref": "#/rules@102"
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
                "$ref": "#/rules@104"
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
                  "$ref": "#/rules@219"
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
                  "$ref": "#/rules@232"
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
                  "$ref": "#/rules@246"
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
                "$ref": "#/rules@106"
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
              "$ref": "#/rules@107"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@108"
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
                "$ref": "#/rules@110"
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
              "$ref": "#/rules@111"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@115"
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
              "$ref": "#/rules@145"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@146"
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
                "$ref": "#/rules@117"
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
                "$ref": "#/rules@185"
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
                "$ref": "#/rules@123"
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
              "$ref": "#/rules@124"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@125"
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
                "$ref": "#/rules@127"
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
              "$ref": "#/rules@128"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@133"
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
                "$ref": "#/rules@130"
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
              "$ref": "#/rules@131"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@132"
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
                "$ref": "#/rules@134"
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
              "$ref": "#/rules@135"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@136"
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
                "$ref": "#/rules@185"
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
                "$ref": "#/rules@138"
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
              "$ref": "#/rules@139"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@140"
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
                "$ref": "#/rules@143"
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
                "$ref": "#/rules@185"
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
                "$ref": "#/rules@56"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@150"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@151"
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
                "$ref": "#/rules@152"
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
                "$ref": "#/rules@152"
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
              "$ref": "#/rules@153"
            },
            "arguments": []
          },
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
                    "$ref": "#/rules@157"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@158"
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
                "$ref": "#/rules@159"
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
                "$ref": "#/rules@165"
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
                "$ref": "#/rules@166"
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
                "$ref": "#/rules@159"
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
                "$ref": "#/rules@165"
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
                "$ref": "#/rules@166"
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
              "$ref": "#/rules@160"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@153"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@167"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@170"
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
                "$ref": "#/rules@170"
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
                "$ref": "#/rules@170"
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
                "$ref": "#/rules@171"
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
              "$ref": "#/rules@172"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@173"
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
              "$ref": "#/rules@174"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@52"
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
              "$ref": "#/rules@187"
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
              "$ref": "#/rules@189"
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
                "$ref": "#/rules@191"
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
                "$ref": "#/rules@53"
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
                "$ref": "#/rules@53"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@186"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@188"
                  },
                  "arguments": []
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
            "cardinality": "*"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@192"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@186"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@188"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@190"
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
            "cardinality": "*"
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
              "$ref": "#/rules@197"
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
            "$ref": "#/rules@198"
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
              "$ref": "#/rules@199"
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
                "$ref": "#/rules@200"
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
                "$ref": "#/rules@201"
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
                "$ref": "#/rules@202"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@126"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@141"
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
                    "$ref": "#/rules@144"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@205"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@206"
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
              "$ref": "#/rules@203"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@126"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@141"
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
                    "$ref": "#/rules@144"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@209"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@214"
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
              "$ref": "#/rules@207"
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
                "$ref": "#/rules@210"
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
                "$ref": "#/rules@211"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@126"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@144"
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
            "cardinality": "*"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@220"
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
                    "$ref": "#/rules@230"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@226"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@228"
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
              "$ref": "#/rules@218"
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
                "$ref": "#/rules@223"
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
              "$ref": "#/rules@224"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@225"
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
                "$ref": "#/rules@227"
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
                "$ref": "#/rules@229"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@233"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@235"
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
                    "$ref": "#/rules@241"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@243"
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
              "$ref": "#/rules@231"
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
                "$ref": "#/rules@234"
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
                "$ref": "#/rules@238"
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
              "$ref": "#/rules@239"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@240"
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
                "$ref": "#/rules@242"
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
                "$ref": "#/rules@244"
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
                "$ref": "#/rules@56"
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
                    "$ref": "#/rules@247"
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
                    "$ref": "#/rules@258"
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
              "$ref": "#/rules@245"
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
                "$ref": "#/rules@249"
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
              "$ref": "#/rules@250"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@255"
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
              "$ref": "#/rules@252"
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
              "$ref": "#/rules@253"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@254"
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
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`)),b1={languageId:"cisco-ios",fileExtensions:[".ios"],caseInsensitive:!0,mode:"development"},S1={AstReflection:()=>new r$},C1={Grammar:()=>w1(),LanguageMetaData:()=>b1,parser:{}};var i$={exports:{}};(function(t){(function(e){const n="(0?\\d+|0x[a-f0-9]+)",r={fourOctet:new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`,"i"),threeOctet:new RegExp(`^${n}\\.${n}\\.${n}$`,"i"),twoOctet:new RegExp(`^${n}\\.${n}$`,"i"),longValue:new RegExp(`^${n}$`,"i")},i=new RegExp("^0[0-7]+$","i"),s=new RegExp("^0x[a-f0-9]+$","i"),o="%[0-9a-z]{1,}",a="(?:[0-9a-f]+::?)+",l={zoneIndex:new RegExp(o,"i"),native:new RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${o})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${n}\\.${n}\\.${n}\\.${n}(${o})?)$`,"i"),transitional:new RegExp(`^((?:${a})|(?:::)(?:${a})?)${n}\\.${n}\\.${n}\\.${n}(${o})?$`,"i")};function c(d,_){if(d.indexOf("::")!==d.lastIndexOf("::"))return null;let T=0,v=-1,p=(d.match(l.zoneIndex)||[])[0],h,$;for(p&&(p=p.substring(1),d=d.replace(/%.+$/,""));(v=d.indexOf(":",v+1))>=0;)T++;if(d.substr(0,2)==="::"&&T--,d.substr(-2,2)==="::"&&T--,T>_)return null;for($=_-T,h=":";$--;)h+="0:";return d=d.replace("::",h),d[0]===":"&&(d=d.slice(1)),d[d.length-1]===":"&&(d=d.slice(0,-1)),_=function(){const F=d.split(":"),W=[];for(let J=0;J<F.length;J++)W.push(parseInt(F[J],16));return W}(),{parts:_,zoneId:p}}function u(d,_,T,v){if(d.length!==_.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let p=0,h;for(;v>0;){if(h=T-v,h<0&&(h=0),d[p]>>h!==_[p]>>h)return!1;v-=T,p+=1}return!0}function f(d){if(s.test(d))return parseInt(d,16);if(d[0]==="0"&&!isNaN(parseInt(d[1],10))){if(i.test(d))return parseInt(d,8);throw new Error(`ipaddr: cannot parse ${d} as octal`)}return parseInt(d,10)}function m(d,_){for(;d.length<_;)d=`0${d}`;return d}const g={};g.IPv4=function(){function d(_){if(_.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let T,v;for(T=0;T<_.length;T++)if(v=_[T],!(0<=v&&v<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=_}return d.prototype.SpecialRanges={unspecified:[[new d([0,0,0,0]),8]],broadcast:[[new d([255,255,255,255]),32]],multicast:[[new d([224,0,0,0]),4]],linkLocal:[[new d([169,254,0,0]),16]],loopback:[[new d([127,0,0,0]),8]],carrierGradeNat:[[new d([100,64,0,0]),10]],private:[[new d([10,0,0,0]),8],[new d([172,16,0,0]),12],[new d([192,168,0,0]),16]],reserved:[[new d([192,0,0,0]),24],[new d([192,0,2,0]),24],[new d([192,88,99,0]),24],[new d([198,18,0,0]),15],[new d([198,51,100,0]),24],[new d([203,0,113,0]),24],[new d([240,0,0,0]),4]],as112:[[new d([192,175,48,0]),24],[new d([192,31,196,0]),24]],amt:[[new d([192,52,193,0]),24]]},d.prototype.kind=function(){return"ipv4"},d.prototype.match=function(_,T){let v;if(T===void 0&&(v=_,_=v[0],T=v[1]),_.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return u(this.octets,_.octets,8,T)},d.prototype.prefixLengthFromSubnetMask=function(){let _=0,T=!1;const v={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0};let p,h,$;for(p=3;p>=0;p-=1)if(h=this.octets[p],h in v){if($=v[h],T&&$!==0)return null;$!==8&&(T=!0),_+=$}else return null;return 32-_},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){return this.octets.slice(0)},d.prototype.toIPv4MappedAddress=function(){return g.IPv6.parse(`::ffff:${this.toString()}`)},d.prototype.toNormalizedString=function(){return this.toString()},d.prototype.toString=function(){return this.octets.join(".")},d}(),g.IPv4.broadcastAddressFromCIDR=function(d){try{const _=this.parseCIDR(d),T=_[0].toByteArray(),v=this.subnetMaskFromPrefixLength(_[1]).toByteArray(),p=[];let h=0;for(;h<4;)p.push(parseInt(T[h],10)|parseInt(v[h],10)^255),h++;return new this(p)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.isIPv4=function(d){return this.parser(d)!==null},g.IPv4.isValid=function(d){try{return new this(this.parser(d)),!0}catch{return!1}},g.IPv4.isValidCIDR=function(d){try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv4.isValidFourPartDecimal=function(d){return!!(g.IPv4.isValid(d)&&d.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},g.IPv4.networkAddressFromCIDR=function(d){let _,T,v,p,h;try{for(_=this.parseCIDR(d),v=_[0].toByteArray(),h=this.subnetMaskFromPrefixLength(_[1]).toByteArray(),p=[],T=0;T<4;)p.push(parseInt(v[T],10)&parseInt(h[T],10)),T++;return new this(p)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.parse=function(d){const _=this.parser(d);if(_===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(_)},g.IPv4.parseCIDR=function(d){let _;if(_=d.match(/^(.+)\/(\d+)$/)){const T=parseInt(_[2]);if(T>=0&&T<=32){const v=[this.parse(_[1]),T];return Object.defineProperty(v,"toString",{value:function(){return this.join("/")}}),v}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},g.IPv4.parser=function(d){let _,T,v;if(_=d.match(r.fourOctet))return function(){const p=_.slice(1,6),h=[];for(let $=0;$<p.length;$++)T=p[$],h.push(f(T));return h}();if(_=d.match(r.longValue)){if(v=f(_[1]),v>4294967295||v<0)throw new Error("ipaddr: address outside defined range");return function(){const p=[];let h;for(h=0;h<=24;h+=8)p.push(v>>h&255);return p}().reverse()}else return(_=d.match(r.twoOctet))?function(){const p=_.slice(1,4),h=[];if(v=f(p[1]),v>16777215||v<0)throw new Error("ipaddr: address outside defined range");return h.push(f(p[0])),h.push(v>>16&255),h.push(v>>8&255),h.push(v&255),h}():(_=d.match(r.threeOctet))?function(){const p=_.slice(1,5),h=[];if(v=f(p[2]),v>65535||v<0)throw new Error("ipaddr: address outside defined range");return h.push(f(p[0])),h.push(f(p[1])),h.push(v>>8&255),h.push(v&255),h}():null},g.IPv4.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>32)throw new Error("ipaddr: invalid IPv4 prefix length");const _=[0,0,0,0];let T=0;const v=Math.floor(d/8);for(;T<v;)_[T]=255,T++;return v<4&&(_[v]=Math.pow(2,d%8)-1<<8-d%8),new this(_)},g.IPv6=function(){function d(_,T){let v,p;if(_.length===16)for(this.parts=[],v=0;v<=14;v+=2)this.parts.push(_[v]<<8|_[v+1]);else if(_.length===8)this.parts=_;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(v=0;v<this.parts.length;v++)if(p=this.parts[v],!(0<=p&&p<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");T&&(this.zoneId=T)}return d.prototype.SpecialRanges={unspecified:[new d([0,0,0,0,0,0,0,0]),128],linkLocal:[new d([65152,0,0,0,0,0,0,0]),10],multicast:[new d([65280,0,0,0,0,0,0,0]),8],loopback:[new d([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new d([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new d([0,0,0,0,0,65535,0,0]),96],discard:[new d([256,0,0,0,0,0,0,0]),64],rfc6145:[new d([0,0,0,0,65535,0,0,0]),96],rfc6052:[new d([100,65435,0,0,0,0,0,0]),96],"6to4":[new d([8194,0,0,0,0,0,0,0]),16],teredo:[new d([8193,0,0,0,0,0,0,0]),32],benchmarking:[new d([8193,2,0,0,0,0,0,0]),48],amt:[new d([8193,3,0,0,0,0,0,0]),32],as112v6:[[new d([8193,4,274,0,0,0,0,0]),48],[new d([9760,79,32768,0,0,0,0,0]),48]],deprecated:[new d([8193,16,0,0,0,0,0,0]),28],orchid2:[new d([8193,32,0,0,0,0,0,0]),28],droneRemoteIdProtocolEntityTags:[new d([8193,48,0,0,0,0,0,0]),28],reserved:[[new d([8193,0,0,0,0,0,0,0]),23],[new d([8193,3512,0,0,0,0,0,0]),32]]},d.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},d.prototype.kind=function(){return"ipv6"},d.prototype.match=function(_,T){let v;if(T===void 0&&(v=_,_=v[0],T=v[1]),_.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return u(this.parts,_.parts,16,T)},d.prototype.prefixLengthFromSubnetMask=function(){let _=0,T=!1;const v={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0};let p,h;for(let $=7;$>=0;$-=1)if(p=this.parts[$],p in v){if(h=v[p],T&&h!==0)return null;h!==16&&(T=!0),_+=h}else return null;return 128-_},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){let _;const T=[],v=this.parts;for(let p=0;p<v.length;p++)_=v[p],T.push(_>>8),T.push(_&255);return T},d.prototype.toFixedLengthString=function(){const _=(function(){const v=[];for(let p=0;p<this.parts.length;p++)v.push(m(this.parts[p].toString(16),4));return v}).call(this).join(":");let T="";return this.zoneId&&(T=`%${this.zoneId}`),_+T},d.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");const _=this.parts.slice(-2),T=_[0],v=_[1];return new g.IPv4([T>>8,T&255,v>>8,v&255])},d.prototype.toNormalizedString=function(){const _=(function(){const v=[];for(let p=0;p<this.parts.length;p++)v.push(this.parts[p].toString(16));return v}).call(this).join(":");let T="";return this.zoneId&&(T=`%${this.zoneId}`),_+T},d.prototype.toRFC5952String=function(){const _=/((^|:)(0(:|$)){2,})/g,T=this.toNormalizedString();let v=0,p=-1,h;for(;h=_.exec(T);)h[0].length>p&&(v=h.index,p=h[0].length);return p<0?T:`${T.substring(0,v)}::${T.substring(v+p)}`},d.prototype.toString=function(){return this.toRFC5952String()},d}(),g.IPv6.broadcastAddressFromCIDR=function(d){try{const _=this.parseCIDR(d),T=_[0].toByteArray(),v=this.subnetMaskFromPrefixLength(_[1]).toByteArray(),p=[];let h=0;for(;h<16;)p.push(parseInt(T[h],10)|parseInt(v[h],10)^255),h++;return new this(p)}catch(_){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${_})`)}},g.IPv6.isIPv6=function(d){return this.parser(d)!==null},g.IPv6.isValid=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{const _=this.parser(d);return new this(_.parts,_.zoneId),!0}catch{return!1}},g.IPv6.isValidCIDR=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv6.networkAddressFromCIDR=function(d){let _,T,v,p,h;try{for(_=this.parseCIDR(d),v=_[0].toByteArray(),h=this.subnetMaskFromPrefixLength(_[1]).toByteArray(),p=[],T=0;T<16;)p.push(parseInt(v[T],10)&parseInt(h[T],10)),T++;return new this(p)}catch($){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${$})`)}},g.IPv6.parse=function(d){const _=this.parser(d);if(_.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(_.parts,_.zoneId)},g.IPv6.parseCIDR=function(d){let _,T,v;if((T=d.match(/^(.+)\/(\d+)$/))&&(_=parseInt(T[2]),_>=0&&_<=128))return v=[this.parse(T[1]),_],Object.defineProperty(v,"toString",{value:function(){return this.join("/")}}),v;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},g.IPv6.parser=function(d){let _,T,v,p,h,$;if(v=d.match(l.deprecatedTransitional))return this.parser(`::ffff:${v[1]}`);if(l.native.test(d))return c(d,8);if((v=d.match(l.transitional))&&($=v[6]||"",_=v[1],v[1].endsWith("::")||(_=_.slice(0,-1)),_=c(_+$,6),_.parts)){for(h=[parseInt(v[2]),parseInt(v[3]),parseInt(v[4]),parseInt(v[5])],T=0;T<h.length;T++)if(p=h[T],!(0<=p&&p<=255))return null;return _.parts.push(h[0]<<8|h[1]),_.parts.push(h[2]<<8|h[3]),{parts:_.parts,zoneId:_.zoneId}}return null},g.IPv6.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>128)throw new Error("ipaddr: invalid IPv6 prefix length");const _=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let T=0;const v=Math.floor(d/8);for(;T<v;)_[T]=255,T++;return v<16&&(_[v]=Math.pow(2,d%8)-1<<8-d%8),new this(_)},g.fromByteArray=function(d){const _=d.length;if(_===4)return new g.IPv4(d);if(_===16)return new g.IPv6(d);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},g.isValid=function(d){return g.IPv6.isValid(d)||g.IPv4.isValid(d)},g.isValidCIDR=function(d){return g.IPv6.isValidCIDR(d)||g.IPv4.isValidCIDR(d)},g.parse=function(d){if(g.IPv6.isValid(d))return g.IPv6.parse(d);if(g.IPv4.isValid(d))return g.IPv4.parse(d);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},g.parseCIDR=function(d){try{return g.IPv6.parseCIDR(d)}catch{try{return g.IPv4.parseCIDR(d)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},g.process=function(d){const _=this.parse(d);return _.kind()==="ipv6"&&_.isIPv4MappedAddress()?_.toIPv4Address():_},g.subnetMatch=function(d,_,T){let v,p,h,$;T==null&&(T="unicast");for(p in _)if(Object.prototype.hasOwnProperty.call(_,p)){for(h=_[p],h[0]&&!(h[0]instanceof Array)&&(h=[h]),v=0;v<h.length;v++)if($=h[v],d.kind()===$[0].kind()&&d.match.apply(d,$))return p}return T},t.exports?t.exports=g:e.ipaddr=g})(xe)})(i$);var A1=i$.exports;function E1(t){const e=t.validation.ValidationRegistry,n=t.validation.CiscoIosValidator,r={IP:n.checkIP,SUBNETMASK:n.checkSUBNETMASK,Username_cmd:n.checkUsername_cmd,BANNER_MESSAGE:n.checkBANNER_MESSAGE,Stat:n.check_Stat,Generate_cmd:n.checkGenerate_cmd,Line_types:n.checkLine_types,INTERFACE_NUMBER_INPUT:n.checkINTERFACE_NUMBER,UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:n.checkUPDATE_SOURCE_INTERFACE_NUMBER,NAT_INTERFACE_NUMBER_INPUT:n.checkNAT_INTERFACE_NUMBER,OSPF_COST_NUMBER:n.checkOSPF_COST_NUMBER,OSPF_PRIORITY_NUMBER:n.checkOSPF_PRIORITY_NUMBER,OSPF_PASSIVE_INTERFACE_NUMBER:n.checkOSPF_PASSIVE_INTERFACE_NUMBER};e.register(r,n)}class P1{checkIP(e,n){if(e.value){const r=String(e.value).split(".");for(const i of r){const s=parseInt(i,10);(s>255||s<0)&&n("error","This is not a valid IP-Address!",{node:e,property:"value"})}}}checkSUBNETMASK(e,n){if(e.value){const r=String(e.value).split(".");let i="";for(const s of r){const a=parseInt(s,10).toString(2);let l=a;for(let c=0;c<8-a.length;c++)l="0"+l;i=i+l}(i.match(/10+1/)||i.length!=32||!i.includes("0"))&&n("error","This is not a valid Subnetmask!",{node:e,property:"value"})}}checkUsername_cmd(e,n){var r;if(e.options){let i=[];for(const s of e.options)i.includes(s.$type)?n("error",`Already defined ${(r=s.$cstNode)===null||r===void 0?void 0:r.text} (duplicate)!`,{node:s}):i.push(s.$type)}}checkBANNER_MESSAGE(e,n){let r="";for(let o of e.message)v1(o)?r=r+o.keywords:r=r+o;const i=r.at(0),s=r.charAt(r.length-1);i!=s?n("error",`Delimiters ${i} and ${s} dont match!`,{node:e}):(r.substring(1,r.length-1).includes(i)||r.substring(1,r.length-1).includes(s))&&n("error",`Delimiter (${i}) can not be inside MESSAGE!`,{node:e})}checkINTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid Interface Number!",{node:e,property:"value"})}checkUPDATE_SOURCE_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+$/.test(e.value)||(/^[0-9]+\/[0-9]+\.[0-9]+$/.test(e.value)?n("error","BGP update-source does not allow Subinterfaces!",{node:e,property:"value"}):n("error","This is not a valid Interface Number!",{node:e,property:"value"}))}checkNAT_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid NAT Interface Number!",{node:e,property:"value"})}checkOSPF_COST_NUMBER(e,n){const r=parseInt(e.value,10);(Number.isNaN(r)||r<1||r>65535)&&n("error","OSPF cost must be between 1 and 65535!",{node:e,property:"value"})}checkOSPF_PRIORITY_NUMBER(e,n){const r=parseInt(e.value,10);(Number.isNaN(r)||r<0||r>255)&&n("error","OSPF priority must be between 0 and 255!",{node:e,property:"value"})}checkOSPF_PASSIVE_INTERFACE_NUMBER(e,n){/^[0-9]+\/[0-9]+(\.[0-9]+)?$/.test(e.value)||n("error","This is not a valid OSPF passive-interface number (use X/Y or X/Y.Vlan)!",{node:e,property:"value"})}checkGenerate_cmd(e,n){const r=ir(e),i=Array.from(tn(r)),s=i.indexOf(e),o=i.findIndex(l=>l.$type==="Hostname_cmd"),a=i.findIndex(l=>l.$type==="Domainname_cmd");o===-1?n("error","Set a hostname before generating keys!",{node:e.$container.$container}):o>s&&n("error","A hostname must be defined before generating keys!",{node:e.$container.$container}),a===-1?n("error","Set a domain-name before generating keys!",{node:e.$container.$container}):a>s&&n("error","A domain-name must be defined before generating keys!",{node:e.$container.$container})}checkLine_types(e,n){let r=[];if(R1(e))for(const i of e.lines)if(!$1(i))r.push(i);else break;else if(T1(e))for(const i of e.lines)if(!k1(i))r.push(i);else break;else return;r.findIndex(i=>_1(i))<0&&n("info","Line mode has no exec-timeout command!",{node:e.$container,property:"command"})}check_Stat(e,n){i(e),s(e),r(e);function r(o){const a=tn(ir(o)).filter(l=>l.$type==="No_ip_cmd_option_domain_lookup");if(a.count()>1)for(let l of a)n("warning","Script contains the <no ip domain-lookup> command more than once.",{node:l});else a.count()<=0&&n("hint","Script does not contain the <no ip domain-lookup> command.",{node:o.lines[0]})}function i(o){var a;const l=new Map,c=tn(ir(o)).filter(u=>u.$type==="IP_cmd_interface");for(const u of c)if(Y_(u)&&X_(u.option)){const f=(a=u.option.ip)===null||a===void 0?void 0:a.value;if(!f)continue;const m=l.get(f);m?(n("error",`Duplicate IP address: ${f}!`,{node:u.option,property:"ip"}),n("error",`Duplicate IP address: ${f}!`,{node:m.option,property:"ip"})):l.set(f,u)}}function s(o){var a,l,c,u;const f=[],m=tn(ir(o)).filter(g=>g.$type==="IP_cmd_interface");for(const g of m){if(!Y_(g)||!X_(g.option))continue;const d=(l=(a=g.option.ip)===null||a===void 0?void 0:a.value)===null||l===void 0?void 0:l.trim(),_=(u=(c=g.option.mask)===null||c===void 0?void 0:c.value)===null||u===void 0?void 0:u.trim();if(!(!d||!_))try{const T=_.split(".").map($=>Number($).toString(2).padStart(8,"0")).join("").indexOf("0"),v=T===-1?32:T,[p,h]=A1.parseCIDR(`${d}/${v}`);for(const $ of f)p.kind()===$.ip.kind()&&(p.match($.ip,$.prefix)||$.ip.match(p,h))&&(n("error",`Overlapping subnet: ${$.cidr} ↔ ${d}/${h}!`,{node:g}),n("error",`Overlapping subnet: ${d}/${h} ↔ ${$.cidr}!`,{node:$.node}));f.push({ip:p,prefix:h,cidr:`${d}/${h}`,node:g})}catch{}}}}}class N1 extends cT{getScope(e){return super.getScope(e)}}const I1={label:"ping",description:"Sendet ICMP Echo-Anfragen an eine Ziel-IP-Adresse um die Erreichbarkeit zu testen.",insert:"ping",kind:10},O1={label:"IP-Address",description:"A.B.C.D",insert:"1.2.3.4",kind:12},D1={label:"Subnetmask",description:"A.B.C.D",insert:"255.255.255.0",kind:12},x1={label:"Wildcardmask",description:"A.B.C.D",insert:"0.0.0.255",kind:12},M1={label:"<hostname>",description:"Set the hostname for this device",insert:"R1",kind:1},L1={label:"address",description:"Specify an address for this interface",insert:"address",kind:10},F1={label:"<domain-name>",description:"Set the domain-name for this device",insert:"htl3r.com",kind:1},U1={label:"2",description:"Protocol to be supported",insert:"2",kind:12},H1={label:"Interface Number",description:"X/Y(.Vlan)",insert:`\${1:0}/\${2:0}
ip address 192.168.1.0 255.255.255.0
no shutdown
exit
$0`,kind:15},B1={label:"Interface Number (slot/port)",description:"Physical interface for BGP update-source (slot/port only, no subinterface).",insert:"${1:0}/${2:0}",kind:15},j1={label:"NAT Interface Number",description:"X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},K1={label:"domain-lookup",description:"stops ip domain lookup",insert:"domain-lookup",kind:10},q1={label:"description",description:"describes the interface",insert:"description",kind:10},G1={label:"<description>",description:"Set the description for this interface",insert:"To_R2",kind:1},W1={label:"<CR>",description:"possible end of a command",insert:`
`,kind:1},z1={label:"<message>",description:"The Banner message",insert:"#Authorized acces only!#",kind:1},V1={label:"OSPF Area Number",description:"Area number",insert:"10",kind:12},Y1={label:"OSPF Cost",description:"Interface OSPF cost (1-65535)",insert:"10",kind:12},X1={label:"OSPF Priority",description:"Router priority (0-255)",insert:"1",kind:12},J1={label:"OSPF Passive Interface Number",description:"Passive-Interface X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},Q1={label:"OSPF_PROCESS_NUMBER",description:"Area number",insert:`\${1:10}
network 192.168.1.0 0.0.0.255 area 10
exit
$0`,kind:15},Z1={label:"RIP Passive Interface Number",description:"Passive-Interface X/Y(.Vlan)",insert:"${1:0}/${2:0}",kind:15},ex={label:"ACL Number",description:"Standard ACL number (0-99)",insert:"10",kind:12},tx={label:"ACL Name",description:"Extended ACL name",insert:"MY_ACL",kind:1},nx={label:"ACL Statement Number",description:"Sequence number for ACL statement",insert:"10",kind:12},rx={label:"ACL Port Number",description:"Port number (0-65535)",insert:"80",kind:12},ix={label:"permit",description:"Permit packets matching the criteria",insert:"permit",kind:10},sx={label:"deny",description:"Deny packets matching the criteria",insert:"deny",kind:10},ox={label:"permit",description:"Permit packets matching the extended criteria",insert:"permit",kind:10},ax={label:"deny",description:"Deny packets matching the extended criteria",insert:"deny",kind:10},lx={label:"any",description:"Match any source or destination",insert:"any",kind:10},cx={label:"host",description:"Match a specific host",insert:"host",kind:10},ux={label:"ip",description:"IP protocol",insert:"ip",kind:10},dx={label:"icmp",description:"ICMP protocol",insert:"icmp",kind:10},fx={label:"tcp",description:"TCP protocol",insert:"tcp",kind:10},px={label:"udp",description:"UDP protocol",insert:"udp",kind:10},hx={label:"gre",description:"GRE protocol",insert:"gre",kind:10},mx={label:"eq",description:"Equal to port",insert:"eq",kind:10},gx={label:"isakmp",description:"ISAKMP port (500)",insert:"isakmp",kind:10},yx={label:"https",description:"HTTPS port (443)",insert:"https",kind:10},_x={label:"http",description:"HTTP port (80)",insert:"http",kind:10},vx={label:"ftp",description:"FTP port (21)",insert:"ftp",kind:10},Rx={label:"ssh",description:"SSH port (22)",insert:"ssh",kind:10},Tx={label:"telnet",description:"Telnet port (23)",insert:"telnet",kind:10},$x={label:"domain",description:"DNS port (53)",insert:"domain",kind:10},kx={label:"tftp",description:"TFTP port (69)",insert:"tftp",kind:10},wx={label:"snmp",description:"SNMP port (161)",insert:"snmp",kind:10},bx={label:"ntp",description:"NTP port (123)",insert:"ntp",kind:10},Sx={label:"bgp",description:"BGP port (179)",insert:"bgp",kind:10},Cx={label:"<username>",description:"Username for authentication",insert:"admin",kind:1},Ax={label:"<password>",description:"Password for username",insert:"password123",kind:1},Ex={label:"<privilege-level>",description:"Privilege level (0-15)",insert:"15",kind:12},Px={label:"<modulus>",description:"RSA key modulus size (512-4096)",insert:"2048",kind:12},Nx={label:"username",description:"Create or modify user account",insert:"username",kind:10},Ix={label:"privilege",description:"Set privilege level for user",insert:"privilege",kind:10},Ox={label:"password",description:"Set password for user",insert:"password",kind:10},Dx={label:"secret",description:"Set encrypted password for user",insert:"secret",kind:10},xx={label:"algorithm-type",description:"Specify encryption algorithm",insert:"algorithm-type",kind:10},Mx={label:"md5",description:"MD5 encryption algorithm",insert:"md5",kind:10},Lx={label:"scrypt",description:"Scrypt encryption algorithm",insert:"scrypt",kind:10},Fx={label:"sha256",description:"SHA256 encryption algorithm",insert:"sha256",kind:10},Ux={label:"banner",description:"Define a banner message",insert:"banner",kind:10},Hx={label:"config-save",description:"Banner displayed when saving config",insert:"config-save",kind:10},Bx={label:"exec",description:"Banner displayed at EXEC mode",insert:"exec",kind:10},jx={label:"incoming",description:"Banner for incoming connections",insert:"incoming",kind:10},Kx={label:"login",description:"Banner displayed at login",insert:"login",kind:10},qx={label:"motd",description:"Message of the day banner",insert:"motd",kind:10},Gx={label:"prompt-timeout",description:"Banner displayed on timeout",insert:"prompt-timeout",kind:10},Wx={label:"slip-ppp",description:"Banner for SLIP/PPP connections",insert:"slip-ppp",kind:10},zx={label:"crypto",description:"Cryptographic configuration",insert:"crypto",kind:10},Vx={label:"key",description:"Key management",insert:"key",kind:10},Yx={label:"generate",description:"Generate cryptographic keys",insert:"generate",kind:10},Xx={label:"rsa",description:"RSA key configuration",insert:"rsa",kind:10},Jx={label:"usage-keys",description:"Specify key usage",insert:"usage-keys",kind:10},Qx={label:"modulus",description:"RSA key modulus size",insert:"modulus",kind:10},Zx={label:"router",description:"Enable a routing process",insert:"router",kind:10},eM={label:"BGP AS Number",description:"Autonomous System number",insert:"65000",kind:12},tM={label:"eBGP Multihop",description:"Maximum hops for eBGP (1-255)",insert:"255",kind:12},nM={label:"RIP Version",description:"RIP version (1 or 2)",insert:"2",kind:12},rM={label:"line",description:"Configure a terminal line",insert:"line",kind:10},iM={label:"Console Number",description:"Console line number (usually 0)",insert:"0",kind:12},sM={label:"VTY Number",description:"VTY line number range",insert:"0",kind:12},oM={label:"login",description:"Enable password checking",insert:"login",kind:10},aM={label:"local",description:"Use local username authentication",insert:"local",kind:10},lM={label:"logging",description:"Configure logging options",insert:"logging",kind:10},cM={label:"synchronous",description:"Synchronous logging",insert:"synchronous",kind:10},uM={label:"exec-timeout",description:"Set EXEC timeout",insert:"exec-timeout",kind:10},dM={label:"<minutes> <seconds>",description:"Timeout in minutes and seconds",insert:"0 0",kind:1},fM={label:"transport",description:"Configure transport protocol",insert:"transport",kind:10},pM={label:"input",description:"Configure input protocols",insert:"input",kind:10},hM={label:"ssh",description:"SSH protocol",insert:"ssh",kind:10},mM={label:"telnet",description:"Telnet protocol",insert:"telnet",kind:10},gM={label:"interface",description:"Configure an interface",insert:"interface",kind:10},yM={label:"VLAN Number",description:"VLAN interface number",insert:"10",kind:12},_M={label:"Interface Speed",description:"Interface speed in Mbps",insert:"100",kind:12},vM={label:"Carrier Delay",description:"Carrier delay in seconds",insert:"0",kind:12},RM={label:"shutdown",description:"Disable the interface",insert:"shutdown",kind:10},TM={label:"no shutdown",description:"Enable the interface",insert:"no shutdown",kind:10},$M={label:"secondary",description:"Secondary IP address",insert:"secondary",kind:10},kM={label:"ospf",description:"OSPF interface configuration",insert:"ospf",kind:10},wM={label:"cost",description:"OSPF interface cost",insert:"cost",kind:10},bM={label:"priority",description:"OSPF router priority",insert:"priority",kind:10},SM={label:"nat",description:"NAT configuration",insert:"nat",kind:10},CM={label:"inside",description:"Inside NAT interface",insert:"inside",kind:10},AM={label:"outside",description:"Outside NAT interface",insert:"outside",kind:10},EM={label:"access-group",description:"Apply ACL to interface",insert:"access-group",kind:10},PM={label:"in",description:"Apply ACL to inbound traffic",insert:"in",kind:10},NM={label:"out",description:"Apply ACL to outbound traffic",insert:"out",kind:10},IM={label:"duplex",description:"Set duplex mode",insert:"duplex",kind:10},OM={label:"auto",description:"Auto-negotiate duplex",insert:"auto",kind:10},DM={label:"full",description:"Full duplex",insert:"full",kind:10},xM={label:"half",description:"Half duplex",insert:"half",kind:10},MM={label:"speed",description:"Set interface speed",insert:"speed",kind:10},LM={label:"carrier-delay",description:"Set carrier delay",insert:"carrier-delay",kind:10},FM={label:"access-list",description:"Configure access list",insert:"access-list",kind:10},UM={label:"standard",description:"Standard numbered ACL",insert:"standard",kind:10},HM={label:"extended",description:"Extended named ACL",insert:"extended",kind:10},BM={label:"ip nat",description:"NAT configuration",insert:"ip nat",kind:10},jM={label:"inside",description:"Inside NAT",insert:"inside",kind:10},KM={label:"source",description:"Source NAT",insert:"source",kind:10},qM={label:"list",description:"Use ACL for NAT",insert:"list",kind:10},GM={label:"interface",description:"Use interface for NAT",insert:"interface",kind:10},WM={label:"overload",description:"Enable PAT (Port Address Translation)",insert:"overload",kind:10},zM={label:"no",description:"Negate a command",insert:"no",kind:10},VM={label:"neighbor",description:"Configure BGP neighbor",insert:"neighbor",kind:10},YM={label:"remote-as",description:"Set remote AS number",insert:"remote-as",kind:10},XM={label:"update-source",description:"Set source interface for BGP updates",insert:"update-source",kind:10},JM={label:"ebgp-multihop",description:"Set eBGP multihop TTL",insert:"ebgp-multihop",kind:10},QM={label:"next-hop-self",description:"Set next-hop-self for neighbor",insert:"next-hop-self",kind:10},ZM={label:"route-reflector-client",description:"Configure as route reflector client",insert:"route-reflector-client",kind:10},eL={label:"network",description:"Advertise network in BGP",insert:"network",kind:10},tL={label:"mask",description:"Network mask for BGP",insert:"mask",kind:10},nL={label:"router-id",description:"Set OSPF router ID",insert:"router-id",kind:10},rL={label:"network",description:"Advertise network in OSPF",insert:"network",kind:10},iL={label:"passive-interface",description:"Configure passive interface",insert:"passive-interface",kind:10},sL={label:"priority",description:"Set OSPF router priority",insert:"priority",kind:10},oL={label:"default-information",description:"Configure default route origination",insert:"default-information",kind:10},aL={label:"originate",description:"Originate default route",insert:"originate",kind:10},lL={label:"redistribute",description:"Redistribute routes into OSPF",insert:"redistribute",kind:10},cL={label:"static",description:"Redistribute static routes",insert:"static",kind:10},uL={label:"network",description:"Advertise network in RIP",insert:"network",kind:10},dL={label:"version",description:"Set RIP version",insert:"version",kind:10},fL={label:"passive-interface",description:"Configure passive interface",insert:"passive-interface",kind:10},pL={label:"default-information",description:"Configure default route origination",insert:"default-information",kind:10},hL={label:"originate",description:"Originate default route",insert:"originate",kind:10},mL={label:"redistribute",description:"Redistribute routes into RIP",insert:"redistribute",kind:10},gL={label:"static",description:"Redistribute static routes",insert:"static",kind:10},yL={label:"configure",description:"Enter configuration mode",insert:"configure",kind:10},_L={label:"terminal",description:"Configure from terminal",insert:"terminal",kind:10},vL={label:"memory",description:"Configure from NVRAM",insert:"memory",kind:10},RL={label:"show",description:"Display system information",insert:"show",kind:10},TL={label:"run",description:"Show running configuration",insert:"run",kind:10},$L={label:"interface",description:"Show interface status",insert:"interface",kind:10},kL={label:"domain-name",description:"Set domain name",insert:"domain-name",kind:10},wL={label:"ssh",description:"SSH configuration",insert:"ssh",kind:10},bL={label:"version",description:"SSH version",insert:"version",kind:10},SL={label:"hostname",description:"Set system hostname",insert:"hostname",kind:10},CL={label:"ip",description:"IP configuration",insert:"ip",kind:10};var s$={Ping_cmd:I1,IP:O1,SUBNETMASK:D1,WILDCARDMASK:x1,HOSTNAME_INPUT:M1,Ip_cmd_option_address:L1,DOMAINNAME_INPUT:F1,VERSION_INPUT:U1,INTERFACE_NUMBER_INPUT:H1,UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:B1,NAT_INTERFACE_NUMBER_INPUT:j1,No_ip_cmd_option_domain_lookup:K1,Description_cmd:q1,DESCRIPTION_INPUT:G1,COMMENT:W1,BANNER_MESSAGE:z1,OSPF_AREA_NUMBER:V1,OSPF_COST_NUMBER:Y1,OSPF_PRIORITY_NUMBER:X1,OSPF_PASSIVE_INTERFACE_NUMBER:J1,OSPF_PROCESS_NUMBER:Q1,RIP_PASSIVE_INTERFACE_NUMBER:Z1,ACL_NUMBER:ex,ACL_NAME:tx,ACL_STATEMENT_NUMBER:nx,ACL_PORT_NUMBER:rx,Acl_standard_permit_cmd:ix,Acl_standard_deny_cmd:sx,Acl_extended_permit_cmd:ox,Acl_extended_deny_cmd:ax,Acl_any_match:lx,Acl_host_match:cx,Acl_protocol_ip:ux,Acl_protocol_icmp:dx,Acl_protocol_tcp:fx,Acl_protocol_udp:px,Acl_protocol_gre:hx,Acl_port_match:mx,Acl_port_isakmp:gx,Acl_port_https:yx,Acl_port_http:_x,Acl_port_ftp:vx,Acl_port_ssh:Rx,Acl_port_telnet:Tx,Acl_port_domain:$x,Acl_port_tftp:kx,Acl_port_snmp:wx,Acl_port_ntp:bx,Acl_port_bgp:Sx,USERNAME_INPUT:Cx,USERNAME_PASSWORD_INPUT:Ax,PRIVILEGE_INPUT:Ex,MODULUS_INPUT:Px,Username_cmd:Nx,PrivilegeOption:Ix,PasswordOption:Ox,SecretOption:Dx,AlgorithmTypeOption:xx,MD5Option:Mx,ScryptOption:Lx,Sha256Option:Fx,Banner_cmd:Ux,ConfigSaveOption:Hx,ExecOption:Bx,IncomingOption:jx,LoginOption:Kx,MOTDOption:qx,PromptTimeoutOption:Gx,SlipPPPOption:Wx,Crypto_cmd:zx,Key_cmd:Vx,Generate_cmd:Yx,Rsa_cmd:Xx,UsageKeys_cmd:Jx,Modulus_cmd:Qx,Router_cmd:Zx,BGP_AS_NUMBER:eM,BGP_EBGP_MULTIHOP_NUMBER:tM,RIP_VERSION_NUMBER:nM,Line_cmd:rM,CONSOLE_NUMBER:iM,VTY_NUMBER:sM,Login_cmd:oM,Line_LoginOption:aM,Logging_cmd:lM,Line_LoggingOption:cM,ExecTimeout_cmd:uM,Line_ExecTimeoutValue:dM,Transport_cmd:fM,TransportInput_cmd:pM,SshKeyword:hM,TelnetKeyword:mM,Interface_cmd:gM,INTERFACE_VLAN_NUMBER:yM,INTERFACE_SPEED_NUMBER:_M,INTERFACE_CARRIER_DELAY_NUMBER:vM,Shutdown_cmd:RM,No_cmd_interface:TM,Ip_cmd_option_address_secondary:$M,Ip_cmd_option_ospf:kM,Ip_cmd_option_ospf_option_cost:wM,Ip_cmd_option_ospf_option_priority:bM,Ip_cmd_option_nat:SM,Nat_inside:CM,Nat_outside:AM,Ip_cmd_option_access_group:EM,Access_group_in:PM,Access_group_out:NM,Duplex_cmd:IM,Duplex_auto:OM,Duplex_full:DM,Duplex_half:xM,Speed_cmd:MM,CarrierDelay_cmd:LM,Ip_access_list_cmd_option:FM,Acl_standard_cmd:UM,Acl_extended_cmd:HM,Ip_nat_cmd:BM,Ip_nat_inside_cmd:jM,Ip_nat_inside_source_cmd:KM,Ip_nat_inside_source_list_cmd:qM,Ip_nat_inside_source_list_interface_cmd:GM,Ip_nat_overload_cmd:WM,No_cmd:zM,Bgp_neighbor_cmd:VM,Bgp_neighbour_Remote_as_option:YM,Bgp_neighbour_update_source_option:XM,Bgp_neigbour_ebgp_multihop_option:JM,Bgp_neighbour_next_hop_self_option:QM,Bgp_neighbour_route_reflector_option:ZM,Bgp_network_cmd:eL,Bgp_network_mask:tL,Ospf_router_id_cmd:nL,Ospf_network_cmd:rL,Ospf_passive_interface_cmd:iL,Ospf_priority_cmd:sL,Ospf_default_information_cmd:oL,Ospf_default_information_cmd_options:aL,Ospf_redistribute_cmd:lL,Ospf_redistribute_cmd_options:cL,Rip_network_cmd:uL,Rip_version_cmd:dL,Rip_passive_interface_cmd:fL,Rip_default_information_cmd:pL,Rip_default_information_cmd_options:hL,Rip_redistribute_cmd:mL,Rip_redistribute_cmd_options:gL,Configure_cmd:yL,Configure_cmd_options:_L,Configure_cmd_options_memory:vL,Show_cmd:RL,Show_run_option:TL,Show_interface_option:$L,Domainname_cmd:kL,SSH_cmd:wL,SSHOptions:bL,Hostname_cmd:SL,IP_cmd:CL};class AL extends t${constructor(e){super(e),this.services=e}async getCompletion(e,n,r){let i=[];const s=this.buildContexts(e,n.position);if(this.isCursorInComment(e,n))return M.CompletionList.create([],!0);const o=(a,l)=>{const c=this.fillCompletionItem(a,l);c&&i.push(c)};for(const a of s)for(const l of a.features)this.completionFor(a,l,o);return M.CompletionList.create(this.deduplicateItems(i),!0)}completionFor(e,n,r){console.log(n);let i;if(i=s$[n.type],i)r(e,{label:i.label,kind:i.kind,detail:i.description,sortText:"1",insertTextFormat:2,insertText:i.insert});else if(Ot(n.feature)&&n.type!="KEYWORDS")return this.completionForKeyword(e,n.feature,r)}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"",sortText:"1"})}isCursorInComment(e,n){var r,i;const s=e.textDocument.offsetAt(n.position),o=e.textDocument.getText(),c=(r=this.services.parser.Lexer.tokenize(o).hidden)!==null&&r!==void 0?r:[];for(const u of c)if(s>u.startOffset&&n.position.line+1<=((i=u.endLine)!==null&&i!==void 0?i:-1))return!0;return!1}collectFromType(e,n){const r=[],i=new Set;function s(o){if(!i.has(o)){i.add(o),o.$type===e&&r.push(o.value);for(const a in o){const l=o[a];if(Array.isArray(l))for(const c of l)c&&typeof c=="object"&&"$type"in c&&s(c);else l&&typeof l=="object"&&"$type"in l&&s(l)}}}return s(n),r}}class EL extends oT{constructor(e){super(e)}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r||this.createSilentLinkingError(e)}createSilentLinkingError(e){return Object.assign(Object.assign({},e),{message:""})}createLinkingError(e){return this.createSilentLinkingError(e)}}const PL={COMMENT:{type:"comment"},BANNER_MESSAGE:{type:"string"},DOMAINNAME_INPUT:{type:"string"},DESCRIPTION_INPUT:{type:"string"},USERNAME_PASSWORD_INPUT:{type:"string"},USERNAME_INPUT:{type:"string"},HOSTNAME_INPUT:{type:"string"},ACL_NAME:{type:"string"},IP:{type:"number"},SUBNETMASK:{type:"number"},WILDCARDMASK:{type:"number"},OSPF_PROCESS_NUMBER:{type:"number"},OSPF_AREA_NUMBER:{type:"number"},OSPF_PASSIVE_INTERFACE_NUMBER:{type:"number"},OSPF_COST_NUMBER:{type:"number"},OSPF_PRIORITY_NUMBER:{type:"number"},VERSION_INPUT:{type:"number"},PRIVILEGE_INPUT:{type:"number"},MODULUS_INPUT:{type:"number"},INTERFACE_NUMBER_INPUT:{type:"number"},NAT_INTERFACE_NUMBER_INPUT:{type:"number"},ACL_PORT_NUMBER:{type:"number"},ACL_STATEMENT_NUMBER:{type:"number"},ACL_NUMBER:{type:"number"},CONSOLE_NUMBER:{type:"number"},VTY_NUMBER:{type:"number"},Line_ExecTimeoutValue:{type:"number"},INTERFACE_SPEED_NUMBER:{type:"number"},INTERFACE_CARRIER_DELAY_NUMBER:{type:"number"},INTERFACE_VLAN_NUMBER:{type:"number"},RIP_VERSION_NUMBER:{type:"number"},RIP_PASSIVE_INTERFACE_NUMBER:{type:"number"},BGP_EBGP_MULTIHOP_NUMBER:{type:"number"},BGP_AS_NUMBER:{type:"number"},UPDATE_SOURCE_INTERFACE_NUMBER_INPUT:{type:"number"}};class NL extends ID{highlightElement(e,n){y1(e)&&e.$type=="COMMENTLINE"&&e.$cstNode&&n({cst:e.$cstNode,type:"comment"});const r=PL[e.$type];r&&e.$cstNode&&n({cst:e.$cstNode,type:r.type})}}class IL extends dT{async validateDocument(e,n){return(await super.validateDocument(e,n)).filter(i=>!this.shouldSuppressDiagnostic(i))}shouldSuppressDiagnostic(e){const n=e.message;return!!(n.includes("Expecting token of type 'exit' but found ``.")||n.includes("but found: ''")||n.includes("Expecting token of type 'NL' but found ``."))}}class OL{constructor(e){this.services=e,this.commandDetails=s$}getHoverContent(e,n){var r,i,s;const o=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(!o)return;const a=e.textDocument.offsetAt(n.position),l=ph(o,a);if(!(!l||l.offset+l.length<=a))return this.getHoverFromDetails((s=l.astNode)===null||s===void 0?void 0:s.$type)}getHoverFromDetails(e){if(!e)return;const n=this.commandDetails[e];return n?{contents:{kind:"markdown",value:`**${n.label.replaceAll("<","").replaceAll(">","")}**

${n.description}`}}:void 0}}const DL={validation:{CiscoIosValidator:()=>new P1,DocumentValidator:t=>new IL(t)},references:{ScopeProvider:t=>new N1(t),Linker:t=>new EL(t)},lsp:{CompletionProvider:t=>new AL(t),SemanticTokenProvider:t=>new NL(t),HoverProvider:t=>new OL(t)}};function xL(t){const e=ec(m1(t),S1),n=ec(p1({shared:e}),C1,DL);return e.ServiceRegistry.register(n),E1(n),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,CiscoIos:n}}const ML=new om.BrowserMessageReader(self),LL=new om.BrowserMessageWriter(self),FL=om.createConnection(ML,LL),{shared:UL}=xL(Object.assign({connection:FL},wT));xD(UL)});export default HL();
