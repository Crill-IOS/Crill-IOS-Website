var NT=Object.defineProperty;var IT=(t,e,n)=>e in t?NT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var DT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Dn=(t,e,n)=>IT(t,typeof e!="symbol"?e+"":e,n);var CO=DT((Rt,wt)=>{function Je(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function en(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function OT(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function sl(t){return typeof t=="object"&&t!==null&&Je(t.container)&&en(t.reference)&&typeof t.message=="string"}class wy{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,n){return Je(e)&&this.isSubtype(e.$type,n)}isSubtype(e,n){if(e===n)return!0;let r=this.subtypes[e];r||(r=this.subtypes[e]={});const i=r[n];if(i!==void 0)return i;{const s=this.computeIsSubtype(e,n);return r[n]=s,s}}getAllSubTypes(e){const n=this.allSubtypes[e];if(n)return n;{const r=this.getAllTypes(),i=[];for(const s of r)this.isSubtype(s,e)&&i.push(s);return this.allSubtypes[e]=i,i}}}function ar(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function ks(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function ky(t){return ar(t)&&typeof t.fullText=="string"}class Ye{constructor(e,n){this.startFn=e,this.nextFn=n}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){const e=this.iterator();let n=0,r=e.next();for(;!r.done;)n++,r=e.next();return n}toArray(){const e=[],n=this.iterator();let r;do r=n.next(),r.value!==void 0&&e.push(r.value);while(!r.done);return e}toSet(){return new Set(this)}toMap(e,n){const r=this.map(i=>[e?e(i):i,n?n(i):i]);return new Map(r)}toString(){return this.join()}concat(e){return new Ye(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),n=>{let r;if(!n.firstDone){do if(r=this.nextFn(n.first),!r.done)return r;while(!r.done);n.firstDone=!0}do if(r=n.iterator.next(),!r.done)return r;while(!r.done);return _t})}join(e=","){const n=this.iterator();let r="",i,s=!1;do i=n.next(),i.done||(s&&(r+=e),r+=xT(i.value)),s=!0;while(!i.done);return r}indexOf(e,n=0){const r=this.iterator();let i=0,s=r.next();for(;!s.done;){if(i>=n&&s.value===e)return i;s=r.next(),i++}return-1}every(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(!e(r.value))return!1;r=n.next()}return!0}some(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return!0;r=n.next()}return!1}forEach(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;)e(i.value,r),i=n.next(),r++}map(e){return new Ye(this.startFn,n=>{const{done:r,value:i}=this.nextFn(n);return r?_t:{done:!1,value:e(i)}})}filter(e){return new Ye(this.startFn,n=>{let r;do if(r=this.nextFn(n),!r.done&&e(r.value))return r;while(!r.done);return _t})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,n){const r=this.iterator();let i=n,s=r.next();for(;!s.done;)i===void 0?i=s.value:i=e(i,s.value),s=r.next();return i}reduceRight(e,n){return this.recursiveReduce(this.iterator(),e,n)}recursiveReduce(e,n,r){const i=e.next();if(i.done)return r;const s=this.recursiveReduce(e,n,r);return s===void 0?i.value:n(s,i.value)}find(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return r.value;r=n.next()}}findIndex(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;){if(e(i.value))return r;i=n.next(),r++}return-1}includes(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(r.value===e)return!0;r=n.next()}return!1}flatMap(e){return new Ye(()=>({this:this.startFn()}),n=>{do{if(n.iterator){const s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}const{done:r,value:i}=this.nextFn(n.this);if(!r){const s=e(i);if(yl(s))n.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}}while(n.iterator);return _t})}flat(e){if(e===void 0&&(e=1),e<=0)return this;const n=e>1?this.flat(e-1):this;return new Ye(()=>({this:n.startFn()}),r=>{do{if(r.iterator){const o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}const{done:i,value:s}=n.nextFn(r.this);if(!i)if(yl(s))r.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}while(r.iterator);return _t})}head(){const n=this.iterator().next();if(!n.done)return n.value}tail(e=1){return new Ye(()=>{const n=this.startFn();for(let r=0;r<e;r++)if(this.nextFn(n).done)return n;return n},this.nextFn)}limit(e){return new Ye(()=>({size:0,state:this.startFn()}),n=>(n.size++,n.size>e?_t:this.nextFn(n.state)))}distinct(e){return new Ye(()=>({set:new Set,internalState:this.startFn()}),n=>{let r;do if(r=this.nextFn(n.internalState),!r.done){const i=e?e(r.value):r.value;if(!n.set.has(i))return n.set.add(i),r}while(!r.done);return _t})}exclude(e,n){const r=new Set;for(const i of e){const s=n?n(i):i;r.add(s)}return this.filter(i=>{const s=n?n(i):i;return!r.has(s)})}}function xT(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function yl(t){return!!t&&typeof t[Symbol.iterator]=="function"}const LT=new Ye(()=>{},()=>_t),_t=Object.freeze({done:!0,value:void 0});function Re(...t){if(t.length===1){const e=t[0];if(e instanceof Ye)return e;if(yl(e))return new Ye(()=>e[Symbol.iterator](),n=>n.next());if(typeof e.length=="number")return new Ye(()=>({index:0}),n=>n.index<e.length?{done:!1,value:e[n.index++]}:_t)}return t.length>1?new Ye(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){const n=e.iterator.next();if(!n.done)return n;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){const n=t[e.collIndex++];yl(n)?e.iterator=n[Symbol.iterator]():n&&typeof n.length=="number"&&(e.array=n)}}while(e.iterator||e.array||e.collIndex<t.length);return _t}):LT}class vl extends Ye{constructor(e,n,r){super(()=>({iterators:r!=null&&r.includeRoot?[[e][Symbol.iterator]()]:[n(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){const o=i.iterators[i.iterators.length-1].next();if(o.done)i.iterators.pop();else return i.iterators.push(n(o.value)[Symbol.iterator]()),o}return _t})}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}}var ud;(function(t){function e(s){return s.reduce((o,a)=>o+a,0)}t.sum=e;function n(s){return s.reduce((o,a)=>o*a,0)}t.product=n;function r(s){return s.reduce((o,a)=>Math.min(o,a))}t.min=r;function i(s){return s.reduce((o,a)=>Math.max(o,a))}t.max=i})(ud||(ud={}));function _l(t){return new vl(t,e=>ar(e)?e.content:[],{includeRoot:!0})}function MT(t){return _l(t).filter(ks)}function FT(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function dd(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Tl(t){if(!t)return;const{offset:e,end:n,range:r}=t;return{range:r,offset:e,end:n,length:n-e}}var pn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})(pn||(pn={}));function HT(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return pn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return pn.After;const n=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,r=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return n&&r?pn.Inside:n?pn.OverlapBack:r?pn.OverlapFront:pn.Outside}function by(t,e){return HT(t,e)>pn.After}const Sy=/^[\w\p{L}]$/u;function lr(t,e,n=Sy){if(t){if(e>0){const r=e-t.offset,i=t.text.charAt(r);n.test(i)||e--}return Cy(t,e)}}function $y(t,e){if(t){const n=jT(t,!0);if(n&&zh(n,e))return n;if(ky(t)){const r=t.content.findIndex(i=>!i.hidden);for(let i=r-1;i>=0;i--){const s=t.content[i];if(zh(s,e))return s}}}}function zh(t,e){return ks(t)&&e.includes(t.tokenType.name)}function Cy(t,e){if(ks(t))return t;if(ar(t)){const n=Ey(t,e,!1);if(n)return Cy(n,e)}}function fd(t,e){if(ks(t))return t;if(ar(t)){const n=Ey(t,e,!0);if(n)return fd(n,e)}}function Ey(t,e,n){let r=0,i=t.content.length-1,s;for(;r<=i;){const o=Math.floor((r+i)/2),a=t.content[o];if(a.offset<=e&&a.end>e)return a;a.end<=e?(s=n?a:void 0,r=o+1):i=o-1}return s}function jT(t,e=!0){for(;t.container;){const n=t.container;let r=n.content.indexOf(t);for(;r>0;){r--;const i=n.content[r];if(e||!i.hidden)return i}t=n}}class Py extends Error{constructor(e,n){super(e?`${n} at ${e.range.start.line}:${e.range.start.character}`:n)}}function bs(t){throw new Error("Error! The input value was not handled.")}const oo="AbstractRule",ao="AbstractType",Zc="Condition",Vh="TypeDefinition",eu="ValueLiteral",wi="AbstractElement";function Ay(t){return ie.isInstance(t,wi)}const lo="ArrayLiteral",co="ArrayType",ki="BooleanLiteral";function UT(t){return ie.isInstance(t,ki)}const bi="Conjunction";function qT(t){return ie.isInstance(t,bi)}const Si="Disjunction";function BT(t){return ie.isInstance(t,Si)}const uo="Grammar",tu="GrammarImport",$i="InferredType";function Ny(t){return ie.isInstance(t,$i)}const Ci="Interface";function Iy(t){return ie.isInstance(t,Ci)}const nu="NamedArgument",Ei="Negation";function KT(t){return ie.isInstance(t,Ei)}const fo="NumberLiteral",ho="Parameter",Pi="ParameterReference";function WT(t){return ie.isInstance(t,Pi)}const Ai="ParserRule";function it(t){return ie.isInstance(t,Ai)}const po="ReferenceType",ol="ReturnType";function GT(t){return ie.isInstance(t,ol)}const Ni="SimpleType";function zT(t){return ie.isInstance(t,Ni)}const mo="StringLiteral",Er="TerminalRule";function Xn(t){return ie.isInstance(t,Er)}const Ii="Type";function Dy(t){return ie.isInstance(t,Ii)}const ru="TypeAttribute",go="UnionType",Di="Action";function Ss(t){return ie.isInstance(t,Di)}const Oi="Alternatives";function eh(t){return ie.isInstance(t,Oi)}const xi="Assignment";function rn(t){return ie.isInstance(t,xi)}const Li="CharacterRange";function VT(t){return ie.isInstance(t,Li)}const Mi="CrossReference";function $s(t){return ie.isInstance(t,Mi)}const Fi="EndOfFile";function YT(t){return ie.isInstance(t,Fi)}const Hi="Group";function cr(t){return ie.isInstance(t,Hi)}const ji="Keyword";function Dt(t){return ie.isInstance(t,ji)}const Ui="NegatedToken";function XT(t){return ie.isInstance(t,Ui)}const qi="RegexToken";function JT(t){return ie.isInstance(t,qi)}const Bi="RuleCall";function Rn(t){return ie.isInstance(t,Bi)}const Ki="TerminalAlternatives";function QT(t){return ie.isInstance(t,Ki)}const Wi="TerminalGroup";function ZT(t){return ie.isInstance(t,Wi)}const Gi="TerminalRuleCall";function eR(t){return ie.isInstance(t,Gi)}const zi="UnorderedGroup";function th(t){return ie.isInstance(t,zi)}const Vi="UntilToken";function tR(t){return ie.isInstance(t,Vi)}const Yi="Wildcard";function nR(t){return ie.isInstance(t,Yi)}class Oy extends wy{getAllTypes(){return[wi,oo,ao,Di,Oi,lo,co,xi,ki,Li,Zc,bi,Mi,Si,Fi,uo,tu,Hi,$i,Ci,ji,nu,Ui,Ei,fo,ho,Pi,Ai,po,qi,ol,Bi,Ni,mo,Ki,Wi,Er,Gi,Ii,ru,Vh,go,zi,Vi,eu,Yi]}computeIsSubtype(e,n){switch(e){case Di:case Oi:case xi:case Li:case Mi:case Fi:case Hi:case ji:case Ui:case qi:case Bi:case Ki:case Wi:case Gi:case zi:case Vi:case Yi:return this.isSubtype(wi,n);case lo:case fo:case mo:return this.isSubtype(eu,n);case co:case po:case Ni:case go:return this.isSubtype(Vh,n);case ki:return this.isSubtype(Zc,n)||this.isSubtype(eu,n);case bi:case Si:case Ei:case Pi:return this.isSubtype(Zc,n);case $i:case Ci:case Ii:return this.isSubtype(ao,n);case Ai:return this.isSubtype(oo,n)||this.isSubtype(ao,n);case Er:return this.isSubtype(oo,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return ao;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return oo;case"Grammar:usedGrammars":return uo;case"NamedArgument:parameter":case"ParameterReference:parameter":return ho;case"TerminalRuleCall:rule":return Er;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case wi:return{name:wi,properties:[{name:"cardinality"},{name:"lookahead"}]};case lo:return{name:lo,properties:[{name:"elements",defaultValue:[]}]};case co:return{name:co,properties:[{name:"elementType"}]};case ki:return{name:ki,properties:[{name:"true",defaultValue:!1}]};case bi:return{name:bi,properties:[{name:"left"},{name:"right"}]};case Si:return{name:Si,properties:[{name:"left"},{name:"right"}]};case uo:return{name:uo,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case tu:return{name:tu,properties:[{name:"path"}]};case $i:return{name:$i,properties:[{name:"name"}]};case Ci:return{name:Ci,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case nu:return{name:nu,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Ei:return{name:Ei,properties:[{name:"value"}]};case fo:return{name:fo,properties:[{name:"value"}]};case ho:return{name:ho,properties:[{name:"name"}]};case Pi:return{name:Pi,properties:[{name:"parameter"}]};case Ai:return{name:Ai,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case po:return{name:po,properties:[{name:"referenceType"}]};case ol:return{name:ol,properties:[{name:"name"}]};case Ni:return{name:Ni,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case mo:return{name:mo,properties:[{name:"value"}]};case Er:return{name:Er,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case Ii:return{name:Ii,properties:[{name:"name"},{name:"type"}]};case ru:return{name:ru,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case go:return{name:go,properties:[{name:"types",defaultValue:[]}]};case Di:return{name:Di,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case Oi:return{name:Oi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case xi:return{name:xi,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Li:return{name:Li,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case Mi:return{name:Mi,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Fi:return{name:Fi,properties:[{name:"cardinality"},{name:"lookahead"}]};case Hi:return{name:Hi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case ji:return{name:ji,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case Ui:return{name:Ui,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case qi:return{name:qi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case Bi:return{name:Bi,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case Ki:return{name:Ki,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Wi:return{name:Wi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Gi:return{name:Gi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case zi:return{name:zi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Vi:return{name:Vi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case Yi:return{name:Yi,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}}const ie=new Oy;function rR(t){for(const[e,n]of Object.entries(t))e.startsWith("$")||(Array.isArray(n)?n.forEach((r,i)=>{Je(r)&&(r.$container=t,r.$containerProperty=e,r.$containerIndex=i)}):Je(n)&&(n.$container=t,n.$containerProperty=e))}function On(t,e){let n=t;for(;n;){if(e(n))return n;n=n.$container}}function sn(t){const n=rr(t).$document;if(!n)throw new Error("AST node has no document.");return n}function rr(t){for(;t.$container;)t=t.$container;return t}function ic(t,e){if(!t)throw new Error("Node must be an AstNode.");const n=e==null?void 0:e.range;return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),r=>{for(;r.keyIndex<r.keys.length;){const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=t[i];if(Je(s)){if(r.keyIndex++,hd(s,n))return{done:!1,value:s}}else if(Array.isArray(s)){for(;r.arrayIndex<s.length;){const o=r.arrayIndex++,a=s[o];if(Je(a)&&hd(a,n))return{done:!1,value:a}}r.arrayIndex=0}}r.keyIndex++}return _t})}function tn(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new vl(t,n=>ic(n,e))}function sr(t,e){if(t){if(e!=null&&e.range&&!hd(t,e.range))return new vl(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new vl(t,n=>ic(n,e),{includeRoot:!0})}function hd(t,e){var n;if(!e)return!0;const r=(n=t.$cstNode)===null||n===void 0?void 0:n.range;return r?by(r,e):!1}function xy(t){return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){const n=e.keys[e.keyIndex];if(!n.startsWith("$")){const r=t[n];if(en(r))return e.keyIndex++,{done:!1,value:{reference:r,container:t,property:n}};if(Array.isArray(r)){for(;e.arrayIndex<r.length;){const i=e.arrayIndex++,s=r[i];if(en(s))return{done:!1,value:{reference:s,container:t,property:n,index:i}}}e.arrayIndex=0}}e.keyIndex++}return _t})}function Ly(t,e){const n=t.getTypeMetaData(e.$type),r=e;for(const i of n.properties)i.defaultValue!==void 0&&r[i.name]===void 0&&(r[i.name]=My(i.defaultValue))}function My(t){return Array.isArray(t)?[...t.map(My)]:t}function K(t){return t.charCodeAt(0)}function iu(t,e){Array.isArray(t)?t.forEach(function(n){e.push(n)}):e.push(t)}function mi(t,e){if(t[e]===!0)throw"duplicate flag "+e;t[e],t[e]=!0}function br(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function iR(){throw Error("Internal Error - Should never get here!")}function Yh(t){return t.type==="Character"}const Rl=[];for(let t=K("0");t<=K("9");t++)Rl.push(t);const wl=[K("_")].concat(Rl);for(let t=K("a");t<=K("z");t++)wl.push(t);for(let t=K("A");t<=K("Z");t++)wl.push(t);const Xh=[K(" "),K("\f"),K(`
`),K("\r"),K("	"),K("\v"),K("	"),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K("\u2028"),K("\u2029"),K(" "),K(" "),K("　"),K("\uFEFF")],sR=/[0-9a-fA-F]/,yo=/[0-9]/,oR=/[1-9]/;class Fy{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");const n=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":mi(r,"global");break;case"i":mi(r,"ignoreCase");break;case"m":mi(r,"multiLine");break;case"u":mi(r,"unicode");break;case"y":mi(r,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:r,value:n,loc:this.loc(0)}}disjunction(){const e=[],n=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(n)}}alternative(){const e=[],n=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}br(n);const r=this.disjunction();return this.consumeChar(")"),{type:n,value:r,loc:this.loc(e)}}return iR()}quantifier(e=!1){let n;const r=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":const i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let s;this.isDigit()?(s=this.integerIncludingZero(),n={atLeast:i,atMost:s}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&n===void 0)return;br(n);break}if(!(e===!0&&n===void 0)&&br(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(r),n}atom(){let e;const n=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}if(e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),br(e))return e.loc=this.loc(n),this.isQuantifier()&&(e.quantifier=this.quantifier()),e}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[K(`
`),K("\r"),K("\u2028"),K("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,n=!1;switch(this.popChar()){case"d":e=Rl;break;case"D":e=Rl,n=!0;break;case"s":e=Xh;break;case"S":e=Xh,n=!0;break;case"w":e=wl;break;case"W":e=wl,n=!0;break}if(br(e))return{type:"Set",value:e,complement:n}}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=K("\f");break;case"n":e=K(`
`);break;case"r":e=K("\r");break;case"t":e=K("	");break;case"v":e=K("\v");break}if(br(e))return{type:"Character",value:e}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:K("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:K(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:const e=this.popChar();return{type:"Character",value:K(e)}}}characterClass(){const e=[];let n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){const r=this.classAtom();if(r.type,Yh(r)&&this.isRangeDash()){this.consumeChar("-");const i=this.classAtom();if(i.type,Yh(i)){if(i.value<r.value)throw Error("Range out of order in character class");e.push({from:r.value,to:i.value})}else iu(r.value,e),e.push(K("-")),iu(i.value,e)}else iu(r.value,e)}return this.consumeChar("]"),{type:"Set",complement:n,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:K("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}const n=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:n};return e&&(r.idx=this.groupIdx),r}positiveInteger(){let e=this.popChar();if(oR.test(e)===!1)throw Error("Expecting a positive integer");for(;yo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(yo.test(e)===!1)throw Error("Expecting an integer");for(;yo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:K(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return yo.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){const e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let n="";for(let i=0;i<e;i++){const s=this.popChar();if(sR.test(s)===!1)throw Error("Expecting a HexDecimal digits");n+=s}return{type:"Character",value:parseInt(n,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){const e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}}class sc{visitChildren(e){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&(r.type!==void 0?this.visit(r):Array.isArray(r)&&r.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}const aR=/\r?\n/gm,lR=new Fy;class cR extends sc{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){const n=String.fromCharCode(e.value);if(!this.multiline&&n===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const r=oc(n);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitSet(e){if(!this.multiline){const n=this.regex.substring(e.loc.begin,e.loc.end),r=new RegExp(n);this.multiline=!!`
`.match(r)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const n=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}}const su=new cR;function uR(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),su.reset(t),su.visit(lR.pattern(t)),su.multiline}catch{return!1}}const dR=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function Hy(t){const e=typeof t=="string"?new RegExp(t):t;return dR.some(n=>e.test(n))}function oc(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function fR(t,e){const n=hR(t),r=e.match(n);return!!r&&r[0].length>0}function hR(t){typeof t=="string"&&(t=new RegExp(t));const e=t,n=t.source;let r=0;function i(){let s="",o;function a(c){s+=n.substr(r,c),r+=c}function l(c){s+="(?:"+n.substr(r,c)+"|$)",r+=c}for(;r<n.length;)switch(n[r]){case"\\":switch(n[r+1]){case"c":l(3);break;case"x":l(4);break;case"u":e.unicode?n[r+2]==="{"?l(n.indexOf("}",r)-r+1):l(6):l(2);break;case"p":case"P":e.unicode?l(n.indexOf("}",r)-r+1):l(2);break;case"k":l(n.indexOf(">",r)-r+1);break;default:l(2);break}break;case"[":o=/\[(?:\\.|.)*?\]/g,o.lastIndex=r,o=o.exec(n)||[],l(o[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":o=/\{\d+,?\d*\}/g,o.lastIndex=r,o=o.exec(n),o?a(o[0].length):l(1);break;case"(":if(n[r+1]==="?")switch(n[r+2]){case":":s+="(?:",r+=3,s+=i()+"|$)";break;case"=":s+="(?=",r+=3,s+=i()+")";break;case"!":o=r,r+=3,i(),s+=n.substr(o,r-o);break;case"<":switch(n[r+3]){case"=":case"!":o=r,r+=4,i(),s+=n.substr(o,r-o);break;default:a(n.indexOf(">",r)-r+1),s+=i()+"|$)";break}break}else a(1),s+=i()+"|$)";break;case")":return++r,s;default:l(1);break}return s}return new RegExp(i(),t.flags)}function pd(t){return t.rules.find(e=>it(e)&&e.entry)}function pR(t){return t.rules.filter(e=>Xn(e)&&e.hidden)}function jy(t,e){const n=new Set,r=pd(t);if(!r)return new Set(t.rules);const i=[r].concat(pR(t));for(const o of i)Uy(o,n,e);const s=new Set;for(const o of t.rules)(n.has(o.name)||Xn(o)&&o.hidden)&&s.add(o);return s}function Uy(t,e,n){e.add(t.name),tn(t).forEach(r=>{if(Rn(r)||n){const i=r.rule.ref;i&&!e.has(i.name)&&Uy(i,e,n)}})}function qy(t){if(t.terminal)return t.terminal;if(t.type.ref){const e=Gy(t.type.ref);return e==null?void 0:e.terminal}}function mR(t){return t.hidden&&!Hy(lc(t))}function By(t,e){return!t||!e?[]:rh(t,e,t.astNode,!0)}function nh(t,e,n){if(!t||!e)return;const r=rh(t,e,t.astNode,!0);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function rh(t,e,n,r){if(!r){const i=On(t.grammarSource,rn);if(i&&i.feature===e)return[t]}return ar(t)&&t.astNode===n?t.content.flatMap(i=>rh(i,e,n,!1)):[]}function gR(t,e){return t?Wy(t,e,t==null?void 0:t.astNode):[]}function Ky(t,e,n){if(!t)return;const r=Wy(t,e,t==null?void 0:t.astNode);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function Wy(t,e,n){if(t.astNode!==n)return[];if(Dt(t.grammarSource)&&t.grammarSource.value===e)return[t];const r=_l(t).iterator();let i;const s=[];do if(i=r.next(),!i.done){const o=i.value;o.astNode===n?Dt(o.grammarSource)&&o.grammarSource.value===e&&s.push(o):r.prune()}while(!i.done);return s}function yR(t){var e;const n=t.astNode;for(;n===((e=t.container)===null||e===void 0?void 0:e.astNode);){const r=On(t.grammarSource,rn);if(r)return r;t=t.container}}function Gy(t){let e=t;return Ny(e)&&(Ss(e.$container)?e=e.$container.$container:it(e.$container)?e=e.$container:bs(e.$container)),zy(t,e,new Map)}function zy(t,e,n){var r;function i(s,o){let a;return On(s,rn)||(a=zy(o,o,n)),n.set(t,a),a}if(n.has(t))return n.get(t);n.set(t,void 0);for(const s of tn(e)){if(rn(s)&&s.feature.toLowerCase()==="name")return n.set(t,s),s;if(Rn(s)&&it(s.rule.ref))return i(s,s.rule.ref);if(zT(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref))return i(s,s.typeRef.ref)}}function as(t,e){return t==="?"||t==="*"||cr(e)&&!!e.guardCondition}function vR(t){return t==="*"||t==="+"}function Vy(t){return Yy(t,new Set)}function Yy(t,e){if(e.has(t))return!0;e.add(t);for(const n of tn(t))if(Rn(n)){if(!n.rule.ref||it(n.rule.ref)&&!Yy(n.rule.ref,e))return!1}else{if(rn(n))return!1;if(Ss(n))return!1}return!!t.definition}function Cs(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){const e=t.returnType.ref;if(e){if(it(e))return e.name;if(Iy(e)||Dy(e))return e.name}}}function ac(t){var e;if(it(t))return Vy(t)?t.name:(e=Cs(t))!==null&&e!==void 0?e:t.name;if(Iy(t)||Dy(t)||GT(t))return t.name;if(Ss(t)){const n=_R(t);if(n)return n}else if(Ny(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function _R(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return ac(t.type.ref)}function TR(t){var e,n,r;return Xn(t)?(n=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&n!==void 0?n:"string":(r=Cs(t))!==null&&r!==void 0?r:t.name}function lc(t){const e={s:!1,i:!1,u:!1},n=ei(t.definition,e),r=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(n,r)}const ih=/[\s\S]/.source;function ei(t,e){if(QT(t))return RR(t);if(ZT(t))return wR(t);if(VT(t))return SR(t);if(eR(t)){const n=t.rule.ref;if(!n)throw new Error("Missing rule reference.");return yn(ei(n.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(XT(t))return bR(t);if(tR(t))return kR(t);if(JT(t)){const n=t.regex.lastIndexOf("/"),r=t.regex.substring(1,n),i=t.regex.substring(n+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),yn(r,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(nR(t))return yn(ih,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function RR(t){return yn(t.elements.map(e=>ei(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function wR(t){return yn(t.elements.map(e=>ei(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function kR(t){return yn(`${ih}*?${ei(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function bR(t){return yn(`(?!${ei(t.terminal)})${ih}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function SR(t){return t.right?yn(`[${ou(t.left)}-${ou(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):yn(ou(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function ou(t){return oc(t.value)}function yn(t,e){var n;return(e.wrap!==!1||e.lookahead)&&(t=`(${(n=e.lookahead)!==null&&n!==void 0?n:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function $R(t){const e=[],n=t.Grammar;for(const r of n.rules)Xn(r)&&mR(r)&&uR(lc(r))&&e.push(r.name);return{multilineCommentRules:e,nameRegexp:Sy}}var Xy=typeof global=="object"&&global&&global.Object===Object&&global,CR=typeof self=="object"&&self&&self.Object===Object&&self,ln=Xy||CR||Function("return this")(),Ot=ln.Symbol,Jy=Object.prototype,ER=Jy.hasOwnProperty,PR=Jy.toString,gi=Ot?Ot.toStringTag:void 0;function AR(t){var e=ER.call(t,gi),n=t[gi];try{t[gi]=void 0;var r=!0}catch{}var i=PR.call(t);return r&&(e?t[gi]=n:delete t[gi]),i}var NR=Object.prototype,IR=NR.toString;function DR(t){return IR.call(t)}var OR="[object Null]",xR="[object Undefined]",Jh=Ot?Ot.toStringTag:void 0;function Jn(t){return t==null?t===void 0?xR:OR:Jh&&Jh in Object(t)?AR(t):DR(t)}function Kt(t){return t!=null&&typeof t=="object"}var LR="[object Symbol]";function Es(t){return typeof t=="symbol"||Kt(t)&&Jn(t)==LR}function cc(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var ee=Array.isArray,Qh=Ot?Ot.prototype:void 0,Zh=Qh?Qh.toString:void 0;function Qy(t){if(typeof t=="string")return t;if(ee(t))return cc(t,Qy)+"";if(Es(t))return Zh?Zh.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var MR=/\s/;function FR(t){for(var e=t.length;e--&&MR.test(t.charAt(e)););return e}var HR=/^\s+/;function jR(t){return t&&t.slice(0,FR(t)+1).replace(HR,"")}function xt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ep=NaN,UR=/^[-+]0x[0-9a-f]+$/i,qR=/^0b[01]+$/i,BR=/^0o[0-7]+$/i,KR=parseInt;function WR(t){if(typeof t=="number")return t;if(Es(t))return ep;if(xt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=jR(t);var n=qR.test(t);return n||BR.test(t)?KR(t.slice(2),n?2:8):UR.test(t)?ep:+t}var tp=1/0,GR=17976931348623157e292;function zR(t){if(!t)return t===0?t:0;if(t=WR(t),t===tp||t===-tp){var e=t<0?-1:1;return e*GR}return t===t?t:0}function uc(t){var e=zR(t),n=e%1;return e===e?n?e-n:e:0}function ur(t){return t}var VR="[object AsyncFunction]",YR="[object Function]",XR="[object GeneratorFunction]",JR="[object Proxy]";function Cn(t){if(!xt(t))return!1;var e=Jn(t);return e==YR||e==XR||e==VR||e==JR}var au=ln["__core-js_shared__"],np=function(){var t=/[^.]+$/.exec(au&&au.keys&&au.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function QR(t){return!!np&&np in t}var ZR=Function.prototype,ew=ZR.toString;function gr(t){if(t!=null){try{return ew.call(t)}catch{}try{return t+""}catch{}}return""}var tw=/[\\^$.*+?()[\]{}|]/g,nw=/^\[object .+?Constructor\]$/,rw=Function.prototype,iw=Object.prototype,sw=rw.toString,ow=iw.hasOwnProperty,aw=RegExp("^"+sw.call(ow).replace(tw,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lw(t){if(!xt(t)||QR(t))return!1;var e=Cn(t)?aw:nw;return e.test(gr(t))}function cw(t,e){return t==null?void 0:t[e]}function yr(t,e){var n=cw(t,e);return lw(n)?n:void 0}var md=yr(ln,"WeakMap"),rp=Object.create,uw=function(){function t(){}return function(e){if(!xt(e))return{};if(rp)return rp(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function dw(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function qe(){}function fw(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var hw=800,pw=16,mw=Date.now;function gw(t){var e=0,n=0;return function(){var r=mw(),i=pw-(r-n);if(n=r,i>0){if(++e>=hw)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function yw(t){return function(){return t}}var kl=function(){try{var t=yr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),vw=kl?function(t,e){return kl(t,"toString",{configurable:!0,enumerable:!1,value:yw(e),writable:!0})}:ur,_w=gw(vw);function Zy(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function ev(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function Tw(t){return t!==t}function Rw(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function sh(t,e,n){return e===e?Rw(t,e,n):ev(t,Tw,n)}function tv(t,e){var n=t==null?0:t.length;return!!n&&sh(t,e,0)>-1}var ww=9007199254740991,kw=/^(?:0|[1-9]\d*)$/;function dc(t,e){var n=typeof t;return e=e??ww,!!e&&(n=="number"||n!="symbol"&&kw.test(t))&&t>-1&&t%1==0&&t<e}function oh(t,e,n){e=="__proto__"&&kl?kl(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Ps(t,e){return t===e||t!==t&&e!==e}var bw=Object.prototype,Sw=bw.hasOwnProperty;function fc(t,e,n){var r=t[e];(!(Sw.call(t,e)&&Ps(r,n))||n===void 0&&!(e in t))&&oh(t,e,n)}function As(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=void 0;l===void 0&&(l=t[a]),i?oh(n,a,l):fc(n,a,l)}return n}var ip=Math.max;function $w(t,e,n){return e=ip(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=ip(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),dw(t,this,a)}}function ah(t,e){return _w($w(t,e,ur),t+"")}var Cw=9007199254740991;function lh(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Cw}function cn(t){return t!=null&&lh(t.length)&&!Cn(t)}function nv(t,e,n){if(!xt(n))return!1;var r=typeof e;return(r=="number"?cn(n)&&dc(e,n.length):r=="string"&&e in n)?Ps(n[e],t):!1}function Ew(t){return ah(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&nv(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var Pw=Object.prototype;function Ns(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Pw;return t===n}function Aw(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Nw="[object Arguments]";function sp(t){return Kt(t)&&Jn(t)==Nw}var rv=Object.prototype,Iw=rv.hasOwnProperty,Dw=rv.propertyIsEnumerable,hc=sp(function(){return arguments}())?sp:function(t){return Kt(t)&&Iw.call(t,"callee")&&!Dw.call(t,"callee")};function Ow(){return!1}var iv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,op=iv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,xw=op&&op.exports===iv,ap=xw?ln.Buffer:void 0,Lw=ap?ap.isBuffer:void 0,ls=Lw||Ow,Mw="[object Arguments]",Fw="[object Array]",Hw="[object Boolean]",jw="[object Date]",Uw="[object Error]",qw="[object Function]",Bw="[object Map]",Kw="[object Number]",Ww="[object Object]",Gw="[object RegExp]",zw="[object Set]",Vw="[object String]",Yw="[object WeakMap]",Xw="[object ArrayBuffer]",Jw="[object DataView]",Qw="[object Float32Array]",Zw="[object Float64Array]",ek="[object Int8Array]",tk="[object Int16Array]",nk="[object Int32Array]",rk="[object Uint8Array]",ik="[object Uint8ClampedArray]",sk="[object Uint16Array]",ok="[object Uint32Array]",me={};me[Qw]=me[Zw]=me[ek]=me[tk]=me[nk]=me[rk]=me[ik]=me[sk]=me[ok]=!0;me[Mw]=me[Fw]=me[Xw]=me[Hw]=me[Jw]=me[jw]=me[Uw]=me[qw]=me[Bw]=me[Kw]=me[Ww]=me[Gw]=me[zw]=me[Vw]=me[Yw]=!1;function ak(t){return Kt(t)&&lh(t.length)&&!!me[Jn(t)]}function pc(t){return function(e){return t(e)}}var sv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,ss=sv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,lk=ss&&ss.exports===sv,lu=lk&&Xy.process,Kn=function(){try{var t=ss&&ss.require&&ss.require("util").types;return t||lu&&lu.binding&&lu.binding("util")}catch{}}(),lp=Kn&&Kn.isTypedArray,ch=lp?pc(lp):ak,ck=Object.prototype,uk=ck.hasOwnProperty;function ov(t,e){var n=ee(t),r=!n&&hc(t),i=!n&&!r&&ls(t),s=!n&&!r&&!i&&ch(t),o=n||r||i||s,a=o?Aw(t.length,String):[],l=a.length;for(var c in t)(e||uk.call(t,c))&&!(o&&(c=="length"||i&&(c=="offset"||c=="parent")||s&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||dc(c,l)))&&a.push(c);return a}function av(t,e){return function(n){return t(e(n))}}var dk=av(Object.keys,Object),fk=Object.prototype,hk=fk.hasOwnProperty;function lv(t){if(!Ns(t))return dk(t);var e=[];for(var n in Object(t))hk.call(t,n)&&n!="constructor"&&e.push(n);return e}function Lt(t){return cn(t)?ov(t):lv(t)}var pk=Object.prototype,mk=pk.hasOwnProperty,bt=Ew(function(t,e){if(Ns(e)||cn(e)){As(e,Lt(e),t);return}for(var n in e)mk.call(e,n)&&fc(t,n,e[n])});function gk(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var yk=Object.prototype,vk=yk.hasOwnProperty;function _k(t){if(!xt(t))return gk(t);var e=Ns(t),n=[];for(var r in t)r=="constructor"&&(e||!vk.call(t,r))||n.push(r);return n}function uh(t){return cn(t)?ov(t,!0):_k(t)}var Tk=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Rk=/^\w*$/;function dh(t,e){if(ee(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Es(t)?!0:Rk.test(t)||!Tk.test(t)||e!=null&&t in Object(e)}var cs=yr(Object,"create");function wk(){this.__data__=cs?cs(null):{},this.size=0}function kk(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var bk="__lodash_hash_undefined__",Sk=Object.prototype,$k=Sk.hasOwnProperty;function Ck(t){var e=this.__data__;if(cs){var n=e[t];return n===bk?void 0:n}return $k.call(e,t)?e[t]:void 0}var Ek=Object.prototype,Pk=Ek.hasOwnProperty;function Ak(t){var e=this.__data__;return cs?e[t]!==void 0:Pk.call(e,t)}var Nk="__lodash_hash_undefined__";function Ik(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=cs&&e===void 0?Nk:e,this}function dr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dr.prototype.clear=wk;dr.prototype.delete=kk;dr.prototype.get=Ck;dr.prototype.has=Ak;dr.prototype.set=Ik;function Dk(){this.__data__=[],this.size=0}function mc(t,e){for(var n=t.length;n--;)if(Ps(t[n][0],e))return n;return-1}var Ok=Array.prototype,xk=Ok.splice;function Lk(t){var e=this.__data__,n=mc(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():xk.call(e,n,1),--this.size,!0}function Mk(t){var e=this.__data__,n=mc(e,t);return n<0?void 0:e[n][1]}function Fk(t){return mc(this.__data__,t)>-1}function Hk(t,e){var n=this.__data__,r=mc(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function En(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}En.prototype.clear=Dk;En.prototype.delete=Lk;En.prototype.get=Mk;En.prototype.has=Fk;En.prototype.set=Hk;var us=yr(ln,"Map");function jk(){this.size=0,this.__data__={hash:new dr,map:new(us||En),string:new dr}}function Uk(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function gc(t,e){var n=t.__data__;return Uk(e)?n[typeof e=="string"?"string":"hash"]:n.map}function qk(t){var e=gc(this,t).delete(t);return this.size-=e?1:0,e}function Bk(t){return gc(this,t).get(t)}function Kk(t){return gc(this,t).has(t)}function Wk(t,e){var n=gc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Pn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pn.prototype.clear=jk;Pn.prototype.delete=qk;Pn.prototype.get=Bk;Pn.prototype.has=Kk;Pn.prototype.set=Wk;var Gk="Expected a function";function fh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Gk);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(fh.Cache||Pn),n}fh.Cache=Pn;var zk=500;function Vk(t){var e=fh(t,function(r){return n.size===zk&&n.clear(),r}),n=e.cache;return e}var Yk=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Xk=/\\(\\)?/g,Jk=Vk(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Yk,function(n,r,i,s){e.push(i?s.replace(Xk,"$1"):r||n)}),e});function Qk(t){return t==null?"":Qy(t)}function yc(t,e){return ee(t)?t:dh(t,e)?[t]:Jk(Qk(t))}function Is(t){if(typeof t=="string"||Es(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function hh(t,e){e=yc(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Is(e[n++])];return n&&n==r?t:void 0}function Zk(t,e,n){var r=t==null?void 0:hh(t,e);return r===void 0?n:r}function ph(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var cp=Ot?Ot.isConcatSpreadable:void 0;function eb(t){return ee(t)||hc(t)||!!(cp&&t&&t[cp])}function mh(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=eb),i||(i=[]);++s<o;){var a=t[s];n(a)?ph(i,a):r||(i[i.length]=a)}return i}function It(t){var e=t==null?0:t.length;return e?mh(t):[]}var cv=av(Object.getPrototypeOf,Object);function uv(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function tb(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function nb(){this.__data__=new En,this.size=0}function rb(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function ib(t){return this.__data__.get(t)}function sb(t){return this.__data__.has(t)}var ob=200;function ab(t,e){var n=this.__data__;if(n instanceof En){var r=n.__data__;if(!us||r.length<ob-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Pn(r)}return n.set(t,e),this.size=n.size,this}function nn(t){var e=this.__data__=new En(t);this.size=e.size}nn.prototype.clear=nb;nn.prototype.delete=rb;nn.prototype.get=ib;nn.prototype.has=sb;nn.prototype.set=ab;function lb(t,e){return t&&As(e,Lt(e),t)}function cb(t,e){return t&&As(e,uh(e),t)}var dv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,up=dv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,ub=up&&up.exports===dv,dp=ub?ln.Buffer:void 0,fp=dp?dp.allocUnsafe:void 0;function db(t,e){var n=t.length,r=fp?fp(n):new t.constructor(n);return t.copy(r),r}function gh(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function fv(){return[]}var fb=Object.prototype,hb=fb.propertyIsEnumerable,hp=Object.getOwnPropertySymbols,yh=hp?function(t){return t==null?[]:(t=Object(t),gh(hp(t),function(e){return hb.call(t,e)}))}:fv;function pb(t,e){return As(t,yh(t),e)}var mb=Object.getOwnPropertySymbols,hv=mb?function(t){for(var e=[];t;)ph(e,yh(t)),t=cv(t);return e}:fv;function gb(t,e){return As(t,hv(t),e)}function pv(t,e,n){var r=e(t);return ee(t)?r:ph(r,n(t))}function gd(t){return pv(t,Lt,yh)}function yb(t){return pv(t,uh,hv)}var yd=yr(ln,"DataView"),vd=yr(ln,"Promise"),Nr=yr(ln,"Set"),pp="[object Map]",vb="[object Object]",mp="[object Promise]",gp="[object Set]",yp="[object WeakMap]",vp="[object DataView]",_b=gr(yd),Tb=gr(us),Rb=gr(vd),wb=gr(Nr),kb=gr(md),Pt=Jn;(yd&&Pt(new yd(new ArrayBuffer(1)))!=vp||us&&Pt(new us)!=pp||vd&&Pt(vd.resolve())!=mp||Nr&&Pt(new Nr)!=gp||md&&Pt(new md)!=yp)&&(Pt=function(t){var e=Jn(t),n=e==vb?t.constructor:void 0,r=n?gr(n):"";if(r)switch(r){case _b:return vp;case Tb:return pp;case Rb:return mp;case wb:return gp;case kb:return yp}return e});var bb=Object.prototype,Sb=bb.hasOwnProperty;function $b(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&Sb.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var bl=ln.Uint8Array;function Cb(t){var e=new t.constructor(t.byteLength);return new bl(e).set(new bl(t)),e}function Eb(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Pb=/\w*$/;function Ab(t){var e=new t.constructor(t.source,Pb.exec(t));return e.lastIndex=t.lastIndex,e}var _p=Ot?Ot.prototype:void 0,Tp=_p?_p.valueOf:void 0;function Nb(t){return Tp?Object(Tp.call(t)):{}}function Ib(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Db="[object Boolean]",Ob="[object Date]",xb="[object Map]",Lb="[object Number]",Mb="[object RegExp]",Fb="[object Set]",Hb="[object String]",jb="[object Symbol]",Ub="[object ArrayBuffer]",qb="[object DataView]",Bb="[object Float32Array]",Kb="[object Float64Array]",Wb="[object Int8Array]",Gb="[object Int16Array]",zb="[object Int32Array]",Vb="[object Uint8Array]",Yb="[object Uint8ClampedArray]",Xb="[object Uint16Array]",Jb="[object Uint32Array]";function Qb(t,e,n){var r=t.constructor;switch(e){case Ub:return Cb(t);case Db:case Ob:return new r(+t);case qb:return Eb(t);case Bb:case Kb:case Wb:case Gb:case zb:case Vb:case Yb:case Xb:case Jb:return Ib(t);case xb:return new r;case Lb:case Hb:return new r(t);case Mb:return Ab(t);case Fb:return new r;case jb:return Nb(t)}}function Zb(t){return typeof t.constructor=="function"&&!Ns(t)?uw(cv(t)):{}}var eS="[object Map]";function tS(t){return Kt(t)&&Pt(t)==eS}var Rp=Kn&&Kn.isMap,nS=Rp?pc(Rp):tS,rS="[object Set]";function iS(t){return Kt(t)&&Pt(t)==rS}var wp=Kn&&Kn.isSet,sS=wp?pc(wp):iS,oS=2,mv="[object Arguments]",aS="[object Array]",lS="[object Boolean]",cS="[object Date]",uS="[object Error]",gv="[object Function]",dS="[object GeneratorFunction]",fS="[object Map]",hS="[object Number]",yv="[object Object]",pS="[object RegExp]",mS="[object Set]",gS="[object String]",yS="[object Symbol]",vS="[object WeakMap]",_S="[object ArrayBuffer]",TS="[object DataView]",RS="[object Float32Array]",wS="[object Float64Array]",kS="[object Int8Array]",bS="[object Int16Array]",SS="[object Int32Array]",$S="[object Uint8Array]",CS="[object Uint8ClampedArray]",ES="[object Uint16Array]",PS="[object Uint32Array]",fe={};fe[mv]=fe[aS]=fe[_S]=fe[TS]=fe[lS]=fe[cS]=fe[RS]=fe[wS]=fe[kS]=fe[bS]=fe[SS]=fe[fS]=fe[hS]=fe[yv]=fe[pS]=fe[mS]=fe[gS]=fe[yS]=fe[$S]=fe[CS]=fe[ES]=fe[PS]=!0;fe[uS]=fe[gv]=fe[vS]=!1;function al(t,e,n,r,i,s){var o,a=e&oS;if(o!==void 0)return o;if(!xt(t))return t;var l=ee(t);if(l)return o=$b(t),fw(t,o);var c=Pt(t),u=c==gv||c==dS;if(ls(t))return db(t);if(c==yv||c==mv||u&&!i)return o=u?{}:Zb(t),a?gb(t,cb(o,t)):pb(t,lb(o,t));if(!fe[c])return i?t:{};o=Qb(t,c),s||(s=new nn);var f=s.get(t);if(f)return f;s.set(t,o),sS(t)?t.forEach(function(d){o.add(al(d,e,n,d,t,s))}):nS(t)&&t.forEach(function(d,v){o.set(v,al(d,e,n,v,t,s))});var m=gd,g=l?void 0:m(t);return Zy(g||t,function(d,v){g&&(v=d,d=t[v]),fc(o,v,al(d,e,n,v,t,s))}),o}var AS=4;function Ze(t){return al(t,AS)}function Ds(t){for(var e=-1,n=t==null?0:t.length,r=0,i=[];++e<n;){var s=t[e];s&&(i[r++]=s)}return i}var NS="__lodash_hash_undefined__";function IS(t){return this.__data__.set(t,NS),this}function DS(t){return this.__data__.has(t)}function xr(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Pn;++e<n;)this.add(t[e])}xr.prototype.add=xr.prototype.push=IS;xr.prototype.has=DS;function vv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function vh(t,e){return t.has(e)}var OS=1,xS=2;function _v(t,e,n,r,i,s){var o=n&OS,a=t.length,l=e.length;if(a!=l&&!(o&&l>a))return!1;var c=s.get(t),u=s.get(e);if(c&&u)return c==e&&u==t;var f=-1,m=!0,g=n&xS?new xr:void 0;for(s.set(t,e),s.set(e,t);++f<a;){var d=t[f],v=e[f];if(r)var R=o?r(v,d,f,e,t,s):r(d,v,f,t,e,s);if(R!==void 0){if(R)continue;m=!1;break}if(g){if(!vv(e,function(_,h){if(!vh(g,h)&&(d===_||i(d,_,n,r,s)))return g.push(h)})){m=!1;break}}else if(!(d===v||i(d,v,n,r,s))){m=!1;break}}return s.delete(t),s.delete(e),m}function LS(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function _h(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var MS=1,FS=2,HS="[object Boolean]",jS="[object Date]",US="[object Error]",qS="[object Map]",BS="[object Number]",KS="[object RegExp]",WS="[object Set]",GS="[object String]",zS="[object Symbol]",VS="[object ArrayBuffer]",YS="[object DataView]",kp=Ot?Ot.prototype:void 0,cu=kp?kp.valueOf:void 0;function XS(t,e,n,r,i,s,o){switch(n){case YS:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case VS:return!(t.byteLength!=e.byteLength||!s(new bl(t),new bl(e)));case HS:case jS:case BS:return Ps(+t,+e);case US:return t.name==e.name&&t.message==e.message;case KS:case GS:return t==e+"";case qS:var a=LS;case WS:var l=r&MS;if(a||(a=_h),t.size!=e.size&&!l)return!1;var c=o.get(t);if(c)return c==e;r|=FS,o.set(t,e);var u=_v(a(t),a(e),r,i,s,o);return o.delete(t),u;case zS:if(cu)return cu.call(t)==cu.call(e)}return!1}var JS=1,QS=Object.prototype,ZS=QS.hasOwnProperty;function e$(t,e,n,r,i,s){var o=n&JS,a=gd(t),l=a.length,c=gd(e),u=c.length;if(l!=u&&!o)return!1;for(var f=l;f--;){var m=a[f];if(!(o?m in e:ZS.call(e,m)))return!1}var g=s.get(t),d=s.get(e);if(g&&d)return g==e&&d==t;var v=!0;s.set(t,e),s.set(e,t);for(var R=o;++f<l;){m=a[f];var _=t[m],h=e[m];if(r)var p=o?r(h,_,m,e,t,s):r(_,h,m,t,e,s);if(!(p===void 0?_===h||i(_,h,n,r,s):p)){v=!1;break}R||(R=m=="constructor")}if(v&&!R){var w=t.constructor,F=e.constructor;w!=F&&"constructor"in t&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof F=="function"&&F instanceof F)&&(v=!1)}return s.delete(t),s.delete(e),v}var t$=1,bp="[object Arguments]",Sp="[object Array]",vo="[object Object]",n$=Object.prototype,$p=n$.hasOwnProperty;function r$(t,e,n,r,i,s){var o=ee(t),a=ee(e),l=o?Sp:Pt(t),c=a?Sp:Pt(e);l=l==bp?vo:l,c=c==bp?vo:c;var u=l==vo,f=c==vo,m=l==c;if(m&&ls(t)){if(!ls(e))return!1;o=!0,u=!1}if(m&&!u)return s||(s=new nn),o||ch(t)?_v(t,e,n,r,i,s):XS(t,e,l,n,r,i,s);if(!(n&t$)){var g=u&&$p.call(t,"__wrapped__"),d=f&&$p.call(e,"__wrapped__");if(g||d){var v=g?t.value():t,R=d?e.value():e;return s||(s=new nn),i(v,R,n,r,s)}}return m?(s||(s=new nn),e$(t,e,n,r,i,s)):!1}function Th(t,e,n,r,i){return t===e?!0:t==null||e==null||!Kt(t)&&!Kt(e)?t!==t&&e!==e:r$(t,e,n,r,Th,i)}var i$=1,s$=2;function o$(t,e,n,r){var i=n.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var o=n[i];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return!1}for(;++i<s;){o=n[i];var a=o[0],l=t[a],c=o[1];if(o[2]){if(l===void 0&&!(a in t))return!1}else{var u=new nn,f;if(!(f===void 0?Th(c,l,i$|s$,r,u):f))return!1}}return!0}function Tv(t){return t===t&&!xt(t)}function a$(t){for(var e=Lt(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,Tv(i)]}return e}function Rv(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function l$(t){var e=a$(t);return e.length==1&&e[0][2]?Rv(e[0][0],e[0][1]):function(n){return n===t||o$(n,t,e)}}function c$(t,e){return t!=null&&e in Object(t)}function wv(t,e,n){e=yc(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Is(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&lh(i)&&dc(o,i)&&(ee(t)||hc(t)))}function u$(t,e){return t!=null&&wv(t,e,c$)}var d$=1,f$=2;function h$(t,e){return dh(t)&&Tv(e)?Rv(Is(t),e):function(n){var r=Zk(n,t);return r===void 0&&r===e?u$(n,t):Th(e,r,d$|f$)}}function p$(t){return function(e){return e==null?void 0:e[t]}}function m$(t){return function(e){return hh(e,t)}}function g$(t){return dh(t)?p$(Is(t)):m$(t)}function Gt(t){return typeof t=="function"?t:t==null?ur:typeof t=="object"?ee(t)?h$(t[0],t[1]):l$(t):g$(t)}function y$(t,e,n,r){for(var i=-1,s=t==null?0:t.length;++i<s;){var o=t[i];e(r,o,n(o),t)}return r}function v$(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var l=o[++i];if(n(s[l],l,s)===!1)break}return e}}var _$=v$();function T$(t,e){return t&&_$(t,e,Lt)}function R$(t,e){return function(n,r){if(n==null)return n;if(!cn(n))return t(n,r);for(var i=n.length,s=-1,o=Object(n);++s<i&&r(o[s],s,o)!==!1;);return n}}var vr=R$(T$);function w$(t,e,n,r){return vr(t,function(i,s,o){e(r,i,n(i),o)}),r}function k$(t,e){return function(n,r){var i=ee(n)?y$:w$,s=e?e():{};return i(n,t,Gt(r),s)}}var kv=Object.prototype,b$=kv.hasOwnProperty,Rh=ah(function(t,e){t=Object(t);var n=-1,r=e.length,i=r>2?e[2]:void 0;for(i&&nv(e[0],e[1],i)&&(r=1);++n<r;)for(var s=e[n],o=uh(s),a=-1,l=o.length;++a<l;){var c=o[a],u=t[c];(u===void 0||Ps(u,kv[c])&&!b$.call(t,c))&&(t[c]=s[c])}return t});function Cp(t){return Kt(t)&&cn(t)}var S$=200;function $$(t,e,n,r){var i=-1,s=tv,o=!0,a=t.length,l=[],c=e.length;if(!a)return l;e.length>=S$&&(s=vh,o=!1,e=new xr(e));e:for(;++i<a;){var u=t[i],f=u;if(u=u!==0?u:0,o&&f===f){for(var m=c;m--;)if(e[m]===f)continue e;l.push(u)}else s(e,f,r)||l.push(u)}return l}var vc=ah(function(t,e){return Cp(t)?$$(t,mh(e,1,Cp,!0)):[]});function Lr(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function Ve(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:uc(e),uv(t,e<0?0:e,r)):[]}function ds(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:uc(e),e=r-e,uv(t,0,e<0?0:e)):[]}function C$(t){return typeof t=="function"?t:ur}function q(t,e){var n=ee(t)?Zy:vr;return n(t,C$(e))}function E$(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function P$(t,e){var n=!0;return vr(t,function(r,i,s){return n=!!e(r,i,s),n}),n}function qt(t,e,n){var r=ee(t)?E$:P$;return r(t,Gt(e))}function bv(t,e){var n=[];return vr(t,function(r,i,s){e(r,i,s)&&n.push(r)}),n}function St(t,e){var n=ee(t)?gh:bv;return n(t,Gt(e))}function A$(t){return function(e,n,r){var i=Object(e);if(!cn(e)){var s=Gt(n);e=Lt(e),n=function(a){return s(i[a],a,i)}}var o=t(e,n,r);return o>-1?i[s?e[o]:o]:void 0}}var N$=Math.max;function I$(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:uc(n);return i<0&&(i=N$(r+i,0)),ev(t,Gt(e),i)}var Mr=A$(I$);function Wt(t){return t&&t.length?t[0]:void 0}function D$(t,e){var n=-1,r=cn(t)?Array(t.length):[];return vr(t,function(i,s,o){r[++n]=e(i,s,o)}),r}function M(t,e){var n=ee(t)?cc:D$;return n(t,Gt(e))}function kt(t,e){return mh(M(t,e))}var O$=Object.prototype,x$=O$.hasOwnProperty,L$=k$(function(t,e,n){x$.call(t,n)?t[n].push(e):oh(t,n,[e])}),M$=Object.prototype,F$=M$.hasOwnProperty;function H$(t,e){return t!=null&&F$.call(t,e)}function B(t,e){return t!=null&&wv(t,e,H$)}var j$="[object String]";function mt(t){return typeof t=="string"||!ee(t)&&Kt(t)&&Jn(t)==j$}function U$(t,e){return cc(e,function(n){return t[n]})}function Be(t){return t==null?[]:U$(t,Lt(t))}var q$=Math.max;function dt(t,e,n,r){t=cn(t)?t:Be(t),n=n?uc(n):0;var i=t.length;return n<0&&(n=q$(i+n,0)),mt(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&sh(t,e,n)>-1}function Ep(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=0;return sh(t,e,i)}var B$="[object Map]",K$="[object Set]",W$=Object.prototype,G$=W$.hasOwnProperty;function ce(t){if(t==null)return!0;if(cn(t)&&(ee(t)||typeof t=="string"||typeof t.splice=="function"||ls(t)||ch(t)||hc(t)))return!t.length;var e=Pt(t);if(e==B$||e==K$)return!t.size;if(Ns(t))return!lv(t).length;for(var n in t)if(G$.call(t,n))return!1;return!0}var z$="[object RegExp]";function V$(t){return Kt(t)&&Jn(t)==z$}var Pp=Kn&&Kn.isRegExp,wn=Pp?pc(Pp):V$;function kn(t){return t===void 0}function Y$(t,e){return t<e}function X$(t,e,n){for(var r=-1,i=t.length;++r<i;){var s=t[r],o=e(s);if(o!=null&&(a===void 0?o===o&&!Es(o):n(o,a)))var a=o,l=s}return l}function J$(t){return t&&t.length?X$(t,ur,Y$):void 0}var Q$="Expected a function";function Z$(t){if(typeof t!="function")throw new TypeError(Q$);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function eC(t,e,n,r){if(!xt(t))return t;e=yc(e,t);for(var i=-1,s=e.length,o=s-1,a=t;a!=null&&++i<s;){var l=Is(e[i]),c=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(i!=o){var u=a[l];c=void 0,c===void 0&&(c=xt(u)?u:dc(e[i+1])?[]:{})}fc(a,l,c),a=a[l]}return t}function tC(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=hh(t,o);n(a,o)&&eC(s,yc(o,t),a)}return s}function zt(t,e){if(t==null)return{};var n=cc(yb(t),function(r){return[r]});return e=Gt(e),tC(t,n,function(r,i){return e(r,i[0])})}function nC(t,e,n,r,i){return i(t,function(s,o,a){n=r?(r=!1,s):e(n,s,o,a)}),n}function lt(t,e,n){var r=ee(t)?tb:nC,i=arguments.length<3;return r(t,Gt(e),n,i,vr)}function _c(t,e){var n=ee(t)?gh:bv;return n(t,Z$(Gt(e)))}function rC(t,e){var n;return vr(t,function(r,i,s){return n=e(r,i,s),!n}),!!n}function Sv(t,e,n){var r=ee(t)?vv:rC;return r(t,Gt(e))}var iC=1/0,sC=Nr&&1/_h(new Nr([,-0]))[1]==iC?function(t){return new Nr(t)}:qe,oC=200;function $v(t,e,n){var r=-1,i=tv,s=t.length,o=!0,a=[],l=a;if(s>=oC){var c=e?null:sC(t);if(c)return _h(c);o=!1,i=vh,l=new xr}else l=e?[]:a;e:for(;++r<s;){var u=t[r],f=e?e(u):u;if(u=u!==0?u:0,o&&f===f){for(var m=l.length;m--;)if(l[m]===f)continue e;e&&l.push(f),a.push(u)}else i(l,f,n)||(l!==a&&l.push(f),a.push(u))}return a}function wh(t){return t&&t.length?$v(t):[]}function aC(t,e){return t&&t.length?$v(t,Gt(e)):[]}function _d(t){console&&console.error&&console.error(`Error: ${t}`)}function Cv(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Ev(t){const e=new Date().getTime(),n=t();return{time:new Date().getTime()-e,value:n}}function Pv(t){function e(){}e.prototype=t;const n=new e;function r(){return typeof n.bar}return r(),r(),t}function lC(t){return cC(t)?t.LABEL:t.name}function cC(t){return mt(t.LABEL)&&t.LABEL!==""}class un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),q(this.definition,n=>{n.accept(e)})}}class ct extends un{constructor(e){super([]),this.idx=1,bt(this,zt(e,n=>n!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class ti extends un{constructor(e){super(e.definition),this.orgText="",bt(this,zt(e,n=>n!==void 0))}}class gt extends un{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,bt(this,zt(e,n=>n!==void 0))}}class Qe extends un{constructor(e){super(e.definition),this.idx=1,bt(this,zt(e,n=>n!==void 0))}}class $t extends un{constructor(e){super(e.definition),this.idx=1,bt(this,zt(e,n=>n!==void 0))}}class Ct extends un{constructor(e){super(e.definition),this.idx=1,bt(this,zt(e,n=>n!==void 0))}}class $e extends un{constructor(e){super(e.definition),this.idx=1,bt(this,zt(e,n=>n!==void 0))}}class yt extends un{constructor(e){super(e.definition),this.idx=1,bt(this,zt(e,n=>n!==void 0))}}class vt extends un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,bt(this,zt(e,n=>n!==void 0))}}class ge{constructor(e){this.idx=1,bt(this,zt(e,n=>n!==void 0))}accept(e){e.visit(this)}}function uC(t){return M(t,ll)}function ll(t){function e(n){return M(n,ll)}if(t instanceof ct){const n={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return mt(t.label)&&(n.label=t.label),n}else{if(t instanceof gt)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Qe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof $t)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Ct)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:ll(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof yt)return{type:"RepetitionWithSeparator",idx:t.idx,separator:ll(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof $e)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof vt)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ge){const n={type:"Terminal",name:t.terminalType.name,label:lC(t.terminalType),idx:t.idx};mt(t.label)&&(n.terminalLabel=t.label);const r=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=wn(r)?r.source:r),n}else{if(t instanceof ti)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}class ni{visit(e){const n=e;switch(n.constructor){case ct:return this.visitNonTerminal(n);case gt:return this.visitAlternative(n);case Qe:return this.visitOption(n);case $t:return this.visitRepetitionMandatory(n);case Ct:return this.visitRepetitionMandatoryWithSeparator(n);case yt:return this.visitRepetitionWithSeparator(n);case $e:return this.visitRepetition(n);case vt:return this.visitAlternation(n);case ge:return this.visitTerminal(n);case ti:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function dC(t){return t instanceof gt||t instanceof Qe||t instanceof $e||t instanceof $t||t instanceof Ct||t instanceof yt||t instanceof ge||t instanceof ti}function Sl(t,e=[]){return t instanceof Qe||t instanceof $e||t instanceof yt?!0:t instanceof vt?Sv(t.definition,r=>Sl(r,e)):t instanceof ct&&dt(e,t)?!1:t instanceof un?(t instanceof ct&&e.push(t),qt(t.definition,r=>Sl(r,e))):!1}function fC(t){return t instanceof vt}function Qt(t){if(t instanceof ct)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof vt)return"OR";if(t instanceof $t)return"AT_LEAST_ONE";if(t instanceof Ct)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof $e)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}class Tc{walk(e,n=[]){q(e.definition,(r,i)=>{const s=Ve(e.definition,i+1);if(r instanceof ct)this.walkProdRef(r,s,n);else if(r instanceof ge)this.walkTerminal(r,s,n);else if(r instanceof gt)this.walkFlat(r,s,n);else if(r instanceof Qe)this.walkOption(r,s,n);else if(r instanceof $t)this.walkAtLeastOne(r,s,n);else if(r instanceof Ct)this.walkAtLeastOneSep(r,s,n);else if(r instanceof yt)this.walkManySep(r,s,n);else if(r instanceof $e)this.walkMany(r,s,n);else if(r instanceof vt)this.walkOr(r,s,n);else throw Error("non exhaustive match")})}walkTerminal(e,n,r){}walkProdRef(e,n,r){}walkFlat(e,n,r){const i=n.concat(r);this.walk(e,i)}walkOption(e,n,r){const i=n.concat(r);this.walk(e,i)}walkAtLeastOne(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkAtLeastOneSep(e,n,r){const i=Ap(e,n,r);this.walk(e,i)}walkMany(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkManySep(e,n,r){const i=Ap(e,n,r);this.walk(e,i)}walkOr(e,n,r){const i=n.concat(r);q(e.definition,s=>{const o=new gt({definition:[s]});this.walk(o,i)})}}function Ap(t,e,n){return[new Qe({definition:[new ge({terminalType:t.separator})].concat(t.definition)})].concat(e,n)}function Os(t){if(t instanceof ct)return Os(t.referencedRule);if(t instanceof ge)return mC(t);if(dC(t))return hC(t);if(fC(t))return pC(t);throw Error("non exhaustive match")}function hC(t){let e=[];const n=t.definition;let r=0,i=n.length>r,s,o=!0;for(;i&&o;)s=n[r],o=Sl(s),e=e.concat(Os(s)),r=r+1,i=n.length>r;return wh(e)}function pC(t){const e=M(t.definition,n=>Os(n));return wh(It(e))}function mC(t){return[t.terminalType]}const Av="_~IN~_";class gC extends Tc{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,n,r){}walkProdRef(e,n,r){const i=vC(e.referencedRule,e.idx)+this.topProd.name,s=n.concat(r),o=new gt({definition:s}),a=Os(o);this.follows[i]=a}}function yC(t){const e={};return q(t,n=>{const r=new gC(n).startWalking();bt(e,r)}),e}function vC(t,e){return t.name+e+Av}let cl={};const _C=new Fy;function Rc(t){const e=t.toString();if(cl.hasOwnProperty(e))return cl[e];{const n=_C.pattern(e);return cl[e]=n,n}}function TC(){cl={}}const Nv="Complement Sets are not supported for first char optimization",$l=`Unable to use "first char" lexer optimizations:
`;function RC(t,e=!1){try{const n=Rc(t);return Td(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===Nv)e&&Cv(`${$l}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let r="";e&&(r=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),_d(`${$l}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r)}}return[]}function Td(t,e,n){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)Td(t.value[i],e,n);break;case"Alternative":const r=t.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}const o=s;switch(o.type){case"Character":_o(o.value,e,n);break;case"Set":if(o.complement===!0)throw Error(Nv);q(o.value,l=>{if(typeof l=="number")_o(l,e,n);else{const c=l;if(n===!0)for(let u=c.from;u<=c.to;u++)_o(u,e,n);else{for(let u=c.from;u<=c.to&&u<Ji;u++)_o(u,e,n);if(c.to>=Ji){const u=c.from>=Ji?c.from:Ji,f=c.to,m=Wn(u),g=Wn(f);for(let d=m;d<=g;d++)e[d]=d}}}});break;case"Group":Td(o.value,e,n);break;default:throw Error("Non Exhaustive Match")}const a=o.quantifier!==void 0&&o.quantifier.atLeast===0;if(o.type==="Group"&&Rd(o)===!1||o.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Be(e)}function _o(t,e,n){const r=Wn(t);e[r]=r,n===!0&&wC(t,e)}function wC(t,e){const n=String.fromCharCode(t),r=n.toUpperCase();if(r!==n){const i=Wn(r.charCodeAt(0));e[i]=i}else{const i=n.toLowerCase();if(i!==n){const s=Wn(i.charCodeAt(0));e[s]=s}}}function Np(t,e){return Mr(t.value,n=>{if(typeof n=="number")return dt(e,n);{const r=n;return Mr(e,i=>r.from<=i&&i<=r.to)!==void 0}})}function Rd(t){const e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ee(t.value)?qt(t.value,Rd):Rd(t.value):!1}class kC extends sc{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){dt(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?Np(e,this.targetCharCodes)===void 0&&(this.found=!0):Np(e,this.targetCharCodes)!==void 0&&(this.found=!0)}}function kh(t,e){if(e instanceof RegExp){const n=Rc(e),r=new kC(t);return r.visit(n),r.found}else return Mr(e,n=>dt(t,n.charCodeAt(0)))!==void 0}const fr="PATTERN",Xi="defaultMode",To="modes";let Iv=typeof new RegExp("(?:)").sticky=="boolean";function bC(t,e){e=Rh(e,{useSticky:Iv,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(h,p)=>p()});const n=e.tracer;n("initCharCodeToOptimizedIndexMap",()=>{zC()});let r;n("Reject Lexer.NA",()=>{r=_c(t,h=>h[fr]===pt.NA)});let i=!1,s;n("Transform Patterns",()=>{i=!1,s=M(r,h=>{const p=h[fr];if(wn(p)){const w=p.source;return w.length===1&&w!=="^"&&w!=="$"&&w!=="."&&!p.ignoreCase?w:w.length===2&&w[0]==="\\"&&!dt(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],w[1])?w[1]:e.useSticky?Dp(p):Ip(p)}else{if(Cn(p))return i=!0,{exec:p};if(typeof p=="object")return i=!0,p;if(typeof p=="string"){if(p.length===1)return p;{const w=p.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),F=new RegExp(w);return e.useSticky?Dp(F):Ip(F)}}else throw Error("non exhaustive match")}})});let o,a,l,c,u;n("misc mapping",()=>{o=M(r,h=>h.tokenTypeIdx),a=M(r,h=>{const p=h.GROUP;if(p!==pt.SKIPPED){if(mt(p))return p;if(kn(p))return!1;throw Error("non exhaustive match")}}),l=M(r,h=>{const p=h.LONGER_ALT;if(p)return ee(p)?M(p,F=>Ep(r,F)):[Ep(r,p)]}),c=M(r,h=>h.PUSH_MODE),u=M(r,h=>B(h,"POP_MODE"))});let f;n("Line Terminator Handling",()=>{const h=xv(e.lineTerminatorCharacters);f=M(r,p=>!1),e.positionTracking!=="onlyOffset"&&(f=M(r,p=>B(p,"LINE_BREAKS")?!!p.LINE_BREAKS:Ov(p,h)===!1&&kh(h,p.PATTERN)))});let m,g,d,v;n("Misc Mapping #2",()=>{m=M(r,Dv),g=M(s,KC),d=lt(r,(h,p)=>{const w=p.GROUP;return mt(w)&&w!==pt.SKIPPED&&(h[w]=[]),h},{}),v=M(s,(h,p)=>({pattern:s[p],longerAlt:l[p],canLineTerminator:f[p],isCustom:m[p],short:g[p],group:a[p],push:c[p],pop:u[p],tokenTypeIdx:o[p],tokenType:r[p]}))});let R=!0,_=[];return e.safeMode||n("First Char Optimization",()=>{_=lt(r,(h,p,w)=>{if(typeof p.PATTERN=="string"){const F=p.PATTERN.charCodeAt(0),G=Wn(F);uu(h,G,v[w])}else if(ee(p.START_CHARS_HINT)){let F;q(p.START_CHARS_HINT,G=>{const J=typeof G=="string"?G.charCodeAt(0):G,ke=Wn(J);F!==ke&&(F=ke,uu(h,ke,v[w]))})}else if(wn(p.PATTERN))if(p.PATTERN.unicode)R=!1,e.ensureOptimizations&&_d(`${$l}	Unable to analyze < ${p.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{const F=RC(p.PATTERN,e.ensureOptimizations);ce(F)&&(R=!1),q(F,G=>{uu(h,G,v[w])})}else e.ensureOptimizations&&_d(`${$l}	TokenType: <${p.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),R=!1;return h},[])}),{emptyGroups:d,patternIdxToConfig:v,charCodeToPatternIdxToConfig:_,hasCustom:i,canBeOptimized:R}}function SC(t,e){let n=[];const r=CC(t);n=n.concat(r.errors);const i=EC(r.valid),s=i.valid;return n=n.concat(i.errors),n=n.concat($C(s)),n=n.concat(LC(s)),n=n.concat(MC(s,e)),n=n.concat(FC(s)),n}function $C(t){let e=[];const n=St(t,r=>wn(r[fr]));return e=e.concat(AC(n)),e=e.concat(DC(n)),e=e.concat(OC(n)),e=e.concat(xC(n)),e=e.concat(NC(n)),e}function CC(t){const e=St(t,i=>!B(i,fr)),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Ce.MISSING_PATTERN,tokenTypes:[i]})),r=vc(t,e);return{errors:n,valid:r}}function EC(t){const e=St(t,i=>{const s=i[fr];return!wn(s)&&!Cn(s)&&!B(s,"exec")&&!mt(s)}),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ce.INVALID_PATTERN,tokenTypes:[i]})),r=vc(t,e);return{errors:n,valid:r}}const PC=/[^\\][$]/;function AC(t){class e extends sc{constructor(){super(...arguments),this.found=!1}visitEndAnchor(s){this.found=!0}}const n=St(t,i=>{const s=i.PATTERN;try{const o=Rc(s),a=new e;return a.visit(o),a.found}catch{return PC.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ce.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function NC(t){const e=St(t,r=>r.PATTERN.test(""));return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",type:Ce.EMPTY_MATCH_PATTERN,tokenTypes:[r]}))}const IC=/[^\\[][\^]|^\^/;function DC(t){class e extends sc{constructor(){super(...arguments),this.found=!1}visitStartAnchor(s){this.found=!0}}const n=St(t,i=>{const s=i.PATTERN;try{const o=Rc(s),a=new e;return a.visit(o),a.found}catch{return IC.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ce.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function OC(t){const e=St(t,r=>{const i=r[fr];return i instanceof RegExp&&(i.multiline||i.global)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ce.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[r]}))}function xC(t){const e=[];let n=M(t,s=>lt(t,(o,a)=>(s.PATTERN.source===a.PATTERN.source&&!dt(e,a)&&a.PATTERN!==pt.NA&&(e.push(a),o.push(a)),o),[]));n=Ds(n);const r=St(n,s=>s.length>1);return M(r,s=>{const o=M(s,l=>l.name);return{message:`The same RegExp pattern ->${Wt(s).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,type:Ce.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}})}function LC(t){const e=St(t,r=>{if(!B(r,"GROUP"))return!1;const i=r.GROUP;return i!==pt.SKIPPED&&i!==pt.NA&&!mt(i)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ce.INVALID_GROUP_TYPE_FOUND,tokenTypes:[r]}))}function MC(t,e){const n=St(t,i=>i.PUSH_MODE!==void 0&&!dt(e,i.PUSH_MODE));return M(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Ce.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function FC(t){const e=[],n=lt(t,(r,i,s)=>{const o=i.PATTERN;return o===pt.NA||(mt(o)?r.push({str:o,idx:s,tokenType:i}):wn(o)&&jC(o)&&r.push({str:o.source,idx:s,tokenType:i})),r},[]);return q(t,(r,i)=>{q(n,({str:s,idx:o,tokenType:a})=>{if(i<o&&HC(s,r.PATTERN)){const l=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:l,type:Ce.UNREACHABLE_PATTERN,tokenTypes:[r,a]})}})}),e}function HC(t,e){if(wn(e)){const n=e.exec(t);return n!==null&&n.index===0}else{if(Cn(e))return e(t,0,[],{});if(B(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function jC(t){return Mr([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>t.source.indexOf(n)!==-1)===void 0}function Ip(t){const e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function Dp(t){const e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function UC(t,e,n){const r=[];return B(t,Xi)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Xi+`> property in its definition
`,type:Ce.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),B(t,To)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+To+`> property in its definition
`,type:Ce.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),B(t,To)&&B(t,Xi)&&!B(t.modes,t.defaultMode)&&r.push({message:`A MultiMode Lexer cannot be initialized with a ${Xi}: <${t.defaultMode}>which does not exist
`,type:Ce.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),B(t,To)&&q(t.modes,(i,s)=>{q(i,(o,a)=>{if(kn(o))r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${a}>
`,type:Ce.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(B(o,"LONGER_ALT")){const l=ee(o.LONGER_ALT)?o.LONGER_ALT:[o.LONGER_ALT];q(l,c=>{!kn(c)&&!dt(i,c)&&r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${c.name}> on token <${o.name}> outside of mode <${s}>
`,type:Ce.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),r}function qC(t,e,n){const r=[];let i=!1;const s=Ds(It(Be(t.modes))),o=_c(s,l=>l[fr]===pt.NA),a=xv(n);return e&&q(o,l=>{const c=Ov(l,a);if(c!==!1){const f={message:GC(l,c),type:c.issue,tokenType:l};r.push(f)}else B(l,"LINE_BREAKS")?l.LINE_BREAKS===!0&&(i=!0):kh(a,l.PATTERN)&&(i=!0)}),e&&!i&&r.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ce.NO_LINE_BREAKS_FLAGS}),r}function BC(t){const e={},n=Lt(t);return q(n,r=>{const i=t[r];if(ee(i))e[r]=[];else throw Error("non exhaustive match")}),e}function Dv(t){const e=t.PATTERN;if(wn(e))return!1;if(Cn(e))return!0;if(B(e,"exec"))return!0;if(mt(e))return!1;throw Error("non exhaustive match")}function KC(t){return mt(t)&&t.length===1?t.charCodeAt(0):!1}const WC={test:function(t){const e=t.length;for(let n=this.lastIndex;n<e;n++){const r=t.charCodeAt(n);if(r===10)return this.lastIndex=n+1,!0;if(r===13)return t.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},lastIndex:0};function Ov(t,e){if(B(t,"LINE_BREAKS"))return!1;if(wn(t.PATTERN)){try{kh(e,t.PATTERN)}catch(n){return{issue:Ce.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(mt(t.PATTERN))return!1;if(Dv(t))return{issue:Ce.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function GC(t,e){if(e.issue===Ce.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ce.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function xv(t){return M(t,n=>mt(n)?n.charCodeAt(0):n)}function uu(t,e,n){t[e]===void 0?t[e]=[n]:t[e].push(n)}const Ji=256;let ul=[];function Wn(t){return t<Ji?t:ul[t]}function zC(){if(ce(ul)){ul=new Array(65536);for(let t=0;t<65536;t++)ul[t]=t>255?255+~~(t/255):t}}function xs(t,e){const n=t.tokenTypeIdx;return n===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[n]===!0}function Cl(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}let Op=1;const Lv={};function Ls(t){const e=VC(t);YC(e),JC(e),XC(e),q(e,n=>{n.isParent=n.categoryMatches.length>0})}function VC(t){let e=Ze(t),n=t,r=!0;for(;r;){n=Ds(It(M(n,s=>s.CATEGORIES)));const i=vc(n,e);e=e.concat(i),ce(i)?r=!1:n=i}return e}function YC(t){q(t,e=>{Fv(e)||(Lv[Op]=e,e.tokenTypeIdx=Op++),xp(e)&&!ee(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),xp(e)||(e.CATEGORIES=[]),QC(e)||(e.categoryMatches=[]),ZC(e)||(e.categoryMatchesMap={})})}function XC(t){q(t,e=>{e.categoryMatches=[],q(e.categoryMatchesMap,(n,r)=>{e.categoryMatches.push(Lv[r].tokenTypeIdx)})})}function JC(t){q(t,e=>{Mv([],e)})}function Mv(t,e){q(t,n=>{e.categoryMatchesMap[n.tokenTypeIdx]=!0}),q(e.CATEGORIES,n=>{const r=t.concat(e);dt(r,n)||Mv(r,n)})}function Fv(t){return B(t,"tokenTypeIdx")}function xp(t){return B(t,"CATEGORIES")}function QC(t){return B(t,"categoryMatches")}function ZC(t){return B(t,"categoryMatchesMap")}function eE(t){return B(t,"tokenTypeIdx")}const wd={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,n,r,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`}};var Ce;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ce||(Ce={}));const Qi={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:wd,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Qi);class pt{constructor(e,n=Qi){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,s)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;const o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${i}>`);const{time:a,value:l}=Ev(s),c=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&c(`${o}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,l}else return s()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=bt({},Qi,n);const r=this.config.traceInitPerf;r===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof r=="number"&&(this.traceInitMaxIdent=r,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,s=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Qi.lineTerminatorsPattern)this.config.lineTerminatorsPattern=WC;else if(this.config.lineTerminatorCharacters===Qi.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ee(e)?i={modes:{defaultMode:Ze(e)},defaultMode:Xi}:(s=!1,i=Ze(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(UC(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(qC(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},q(i.modes,(a,l)=>{i.modes[l]=_c(a,c=>kn(c))});const o=Lt(i.modes);if(q(i.modes,(a,l)=>{this.TRACE_INIT(`Mode: <${l}> processing`,()=>{if(this.modes.push(l),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(SC(a,o))}),ce(this.lexerDefinitionErrors)){Ls(a);let c;this.TRACE_INIT("analyzeTokenTypes",()=>{c=bC(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[l]=c.patternIdxToConfig,this.charCodeToPatternIdxToConfig[l]=c.charCodeToPatternIdxToConfig,this.emptyGroups=bt({},this.emptyGroups,c.emptyGroups),this.hasCustom=c.hasCustom||this.hasCustom,this.canModeBeOptimized[l]=c.canBeOptimized}})}),this.defaultMode=i.defaultMode,!ce(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){const l=M(this.lexerDefinitionErrors,c=>c.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+l)}q(this.lexerDefinitionWarning,a=>{Cv(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Iv?(this.chopInput=ur,this.match=this.matchWithTest):(this.updateLastIndex=qe,this.match=this.matchWithExec),s&&(this.handleModes=qe),this.trackStartLines===!1&&(this.computeNewColumn=ur),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=qe),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{const a=lt(this.canModeBeOptimized,(l,c,u)=>(c===!1&&l.push(u),l),[]);if(n.ensureOptimizations&&!ce(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{TC()}),this.TRACE_INIT("toFastProperties",()=>{Pv(this)})})}tokenize(e,n=this.defaultMode){if(!ce(this.lexerDefinitionErrors)){const i=M(this.lexerDefinitionErrors,s=>s.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,n)}tokenizeInternal(e,n){let r,i,s,o,a,l,c,u,f,m,g,d,v,R,_;const h=e,p=h.length;let w=0,F=0;const G=this.hasCustom?0:Math.floor(e.length/10),J=new Array(G),ke=[];let Ee=this.trackStartLines?1:void 0,Pe=this.trackStartLines?1:void 0;const A=BC(this.emptyGroups),E=this.trackStartLines,k=this.config.lineTerminatorsPattern;let C=0,N=[],P=[];const O=[],He=[];Object.freeze(He);let x;function S(){return N}function te(ye){const je=Wn(ye),Ge=P[je];return Ge===void 0?He:Ge}const Vt=ye=>{if(O.length===1&&ye.tokenType.PUSH_MODE===void 0){const je=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ye);ke.push({offset:ye.startOffset,line:ye.startLine,column:ye.startColumn,length:ye.image.length,message:je})}else{O.pop();const je=Lr(O);N=this.patternIdxToConfig[je],P=this.charCodeToPatternIdxToConfig[je],C=N.length;const Ge=this.canModeBeOptimized[je]&&this.config.safeMode===!1;P&&Ge?x=te:x=S}};function Yt(ye){O.push(ye),P=this.charCodeToPatternIdxToConfig[ye],N=this.patternIdxToConfig[ye],C=N.length,C=N.length;const je=this.canModeBeOptimized[ye]&&this.config.safeMode===!1;P&&je?x=te:x=S}Yt.call(this,n);let Le;const Xt=this.config.recoveryEnabled;for(;w<p;){l=null;const ye=h.charCodeAt(w),je=x(ye),Ge=je.length;for(r=0;r<Ge;r++){Le=je[r];const ve=Le.pattern;c=null;const ze=Le.short;if(ze!==!1?ye===ze&&(l=ve):Le.isCustom===!0?(_=ve.exec(h,w,J,A),_!==null?(l=_[0],_.payload!==void 0&&(c=_.payload)):l=null):(this.updateLastIndex(ve,w),l=this.match(ve,e,w)),l!==null){if(a=Le.longerAlt,a!==void 0){const Ae=a.length;for(s=0;s<Ae;s++){const V=N[a[s]],Ke=V.pattern;if(u=null,V.isCustom===!0?(_=Ke.exec(h,w,J,A),_!==null?(o=_[0],_.payload!==void 0&&(u=_.payload)):o=null):(this.updateLastIndex(Ke,w),o=this.match(Ke,e,w)),o&&o.length>l.length){l=o,c=u,Le=V;break}}}break}}if(l!==null){if(f=l.length,m=Le.group,m!==void 0&&(g=Le.tokenTypeIdx,d=this.createTokenInstance(l,w,g,Le.tokenType,Ee,Pe,f),this.handlePayload(d,c),m===!1?F=this.addToken(J,F,d):A[m].push(d)),e=this.chopInput(e,f),w=w+f,Pe=this.computeNewColumn(Pe,f),E===!0&&Le.canLineTerminator===!0){let ve=0,ze,Ae;k.lastIndex=0;do ze=k.test(l),ze===!0&&(Ae=k.lastIndex-1,ve++);while(ze===!0);ve!==0&&(Ee=Ee+ve,Pe=f-Ae,this.updateTokenEndLineColumnLocation(d,m,Ae,ve,Ee,Pe,f))}this.handleModes(Le,Vt,Yt,d)}else{const ve=w,ze=Ee,Ae=Pe;let V=Xt===!1;for(;V===!1&&w<p;)for(e=this.chopInput(e,1),w++,i=0;i<C;i++){const Ke=N[i],ue=Ke.pattern,ft=Ke.short;if(ft!==!1?h.charCodeAt(w)===ft&&(V=!0):Ke.isCustom===!0?V=ue.exec(h,w,J,A)!==null:(this.updateLastIndex(ue,w),V=ue.exec(e)!==null),V===!0)break}if(v=w-ve,Pe=this.computeNewColumn(Pe,v),R=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(h,ve,v,ze,Ae),ke.push({offset:ve,line:ze,column:Ae,length:v,message:R}),Xt===!1)break}}return this.hasCustom||(J.length=F),{tokens:J,groups:A,errors:ke}}handleModes(e,n,r,i){if(e.pop===!0){const s=e.push;n(i),s!==void 0&&r.call(this,s)}else e.push!==void 0&&r.call(this,e.push)}chopInput(e,n){return e.substring(n)}updateLastIndex(e,n){e.lastIndex=n}updateTokenEndLineColumnLocation(e,n,r,i,s,o,a){let l,c;n!==void 0&&(l=r===a-1,c=l?-1:0,i===1&&l===!0||(e.endLine=s+c,e.endColumn=o-1+-c))}computeNewColumn(e,n){return e+n}createOffsetOnlyToken(e,n,r,i){return{image:e,startOffset:n,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,n,r,i,s,o){return{image:e,startOffset:n,startLine:s,startColumn:o,tokenTypeIdx:r,tokenType:i}}createFullToken(e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:n+a-1,startLine:s,endLine:s,startColumn:o,endColumn:o+a-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,n,r){return e.push(r),n}addTokenUsingMemberAccess(e,n,r){return e[n]=r,n++,n}handlePayloadNoCustom(e,n){}handlePayloadWithCustom(e,n){n!==null&&(e.payload=n)}matchWithTest(e,n,r){return e.test(n)===!0?n.substring(r,e.lastIndex):null}matchWithExec(e,n){const r=e.exec(n);return r!==null?r[0]:null}}pt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";pt.NA=/NOT_APPLICABLE/;function Ir(t){return Hv(t)?t.LABEL:t.name}function Hv(t){return mt(t.LABEL)&&t.LABEL!==""}const tE="parent",Lp="categories",Mp="label",Fp="group",Hp="push_mode",jp="pop_mode",Up="longer_alt",qp="line_breaks",Bp="start_chars_hint";function jv(t){return nE(t)}function nE(t){const e=t.pattern,n={};if(n.name=t.name,kn(e)||(n.PATTERN=e),B(t,tE))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return B(t,Lp)&&(n.CATEGORIES=t[Lp]),Ls([n]),B(t,Mp)&&(n.LABEL=t[Mp]),B(t,Fp)&&(n.GROUP=t[Fp]),B(t,jp)&&(n.POP_MODE=t[jp]),B(t,Hp)&&(n.PUSH_MODE=t[Hp]),B(t,Up)&&(n.LONGER_ALT=t[Up]),B(t,qp)&&(n.LINE_BREAKS=t[qp]),B(t,Bp)&&(n.START_CHARS_HINT=t[Bp]),n}const Gn=jv({name:"EOF",pattern:pt.NA});Ls([Gn]);function bh(t,e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:r,startLine:i,endLine:s,startColumn:o,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Uv(t,e){return xs(t,e)}const Ar={buildMismatchTokenMessage({expected:t,actual:e,previous:n,ruleName:r}){return`Expecting ${Hv(t)?`--> ${Ir(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:n,customUserDescription:r,ruleName:i}){const s="Expecting: ",a=`
but found: '`+Wt(e).image+"'";if(r)return s+r+a;{const l=lt(t,(m,g)=>m.concat(g),[]),c=M(l,m=>`[${M(m,g=>Ir(g)).join(", ")}]`),f=`one of these possible Token sequences:
${M(c,(m,g)=>`  ${g+1}. ${m}`).join(`
`)}`;return s+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:n,ruleName:r}){const i="Expecting: ",o=`
but found: '`+Wt(e).image+"'";if(n)return i+n+o;{const l=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${M(t,c=>`[${M(c,u=>Ir(u)).join(",")}]`).join(" ,")}>`;return i+l+o}}};Object.freeze(Ar);const rE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},ir={buildDuplicateFoundError(t,e){function n(u){return u instanceof ge?u.terminalType.name:u instanceof ct?u.nonTerminalName:""}const r=t.name,i=Wt(e),s=i.idx,o=Qt(i),a=n(i),l=s>0;let c=`->${o}${l?s:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return c=c.replace(/[ \t]+/g," "),c=c.replace(/\s\s+/g,`
`),c},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){const e=M(t.prefixPath,i=>Ir(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){const e=M(t.prefixPath,i=>Ir(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r},buildEmptyRepetitionError(t){let e=Qt(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){const e=t.topLevelRule.name,n=M(t.leftRecursionPath,s=>s.name),r=`${e} --> ${n.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof ti?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function iE(t,e){const n=new sE(t,e);return n.resolveRefs(),n.errors}class sE extends ni{constructor(e,n){super(),this.nameToTopRule=e,this.errMsgProvider=n,this.errors=[]}resolveRefs(){q(Be(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){const n=this.nameToTopRule[e.nonTerminalName];if(n)e.referencedRule=n;else{const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:ut.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class oE extends Tc{constructor(e,n){super(),this.topProd=e,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Ze(this.path.ruleStack).reverse(),this.occurrenceStack=Ze(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,n=[]){this.found||super.walk(e,n)}walkProdRef(e,n,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){const i=n.concat(r);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){ce(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}}class aE extends oE{constructor(e,n){super(e,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,n,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){const i=n.concat(r),s=new gt({definition:i});this.possibleTokTypes=Os(s),this.found=!0}}}class wc extends Tc{constructor(e,n){super(),this.topRule=e,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}}class lE extends wc{walkMany(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,n,r)}}class Kp extends wc{walkManySep(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,n,r)}}class cE extends wc{walkAtLeastOne(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,n,r)}}class Wp extends wc{walkAtLeastOneSep(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,n,r)}}function kd(t,e,n=[]){n=Ze(n);let r=[],i=0;function s(a){return a.concat(Ve(t,i+1))}function o(a){const l=kd(s(a),e,n);return r.concat(l)}for(;n.length<e&&i<t.length;){const a=t[i];if(a instanceof gt)return o(a.definition);if(a instanceof ct)return o(a.definition);if(a instanceof Qe)r=o(a.definition);else if(a instanceof $t){const l=a.definition.concat([new $e({definition:a.definition})]);return o(l)}else if(a instanceof Ct){const l=[new gt({definition:a.definition}),new $e({definition:[new ge({terminalType:a.separator})].concat(a.definition)})];return o(l)}else if(a instanceof yt){const l=a.definition.concat([new $e({definition:[new ge({terminalType:a.separator})].concat(a.definition)})]);r=o(l)}else if(a instanceof $e){const l=a.definition.concat([new $e({definition:a.definition})]);r=o(l)}else{if(a instanceof vt)return q(a.definition,l=>{ce(l.definition)===!1&&(r=o(l.definition))}),r;if(a instanceof ge)n.push(a.terminalType);else throw Error("non exhaustive match")}i++}return r.push({partialPath:n,suffixDef:Ve(t,i)}),r}function qv(t,e,n,r){const i="EXIT_NONE_TERMINAL",s=[i],o="EXIT_ALTERNATIVE";let a=!1;const l=e.length,c=l-r-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!ce(f);){const m=f.pop();if(m===o){a&&Lr(f).idx<=c&&f.pop();continue}const g=m.def,d=m.idx,v=m.ruleStack,R=m.occurrenceStack;if(ce(g))continue;const _=g[0];if(_===i){const h={idx:d,def:Ve(g),ruleStack:ds(v),occurrenceStack:ds(R)};f.push(h)}else if(_ instanceof ge)if(d<l-1){const h=d+1,p=e[h];if(n(p,_.terminalType)){const w={idx:h,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(w)}}else if(d===l-1)u.push({nextTokenType:_.terminalType,nextTokenOccurrence:_.idx,ruleStack:v,occurrenceStack:R}),a=!0;else throw Error("non exhaustive match");else if(_ instanceof ct){const h=Ze(v);h.push(_.nonTerminalName);const p=Ze(R);p.push(_.idx);const w={idx:d,def:_.definition.concat(s,Ve(g)),ruleStack:h,occurrenceStack:p};f.push(w)}else if(_ instanceof Qe){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p={idx:d,def:_.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R};f.push(p)}else if(_ instanceof $t){const h=new $e({definition:_.definition,idx:_.idx}),p=_.definition.concat([h],Ve(g)),w={idx:d,def:p,ruleStack:v,occurrenceStack:R};f.push(w)}else if(_ instanceof Ct){const h=new ge({terminalType:_.separator}),p=new $e({definition:[h].concat(_.definition),idx:_.idx}),w=_.definition.concat([p],Ve(g)),F={idx:d,def:w,ruleStack:v,occurrenceStack:R};f.push(F)}else if(_ instanceof yt){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p=new ge({terminalType:_.separator}),w=new $e({definition:[p].concat(_.definition),idx:_.idx}),F=_.definition.concat([w],Ve(g)),G={idx:d,def:F,ruleStack:v,occurrenceStack:R};f.push(G)}else if(_ instanceof $e){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p=new $e({definition:_.definition,idx:_.idx}),w=_.definition.concat([p],Ve(g)),F={idx:d,def:w,ruleStack:v,occurrenceStack:R};f.push(F)}else if(_ instanceof vt)for(let h=_.definition.length-1;h>=0;h--){const p=_.definition[h],w={idx:d,def:p.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R};f.push(w),f.push(o)}else if(_ instanceof gt)f.push({idx:d,def:_.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R});else if(_ instanceof ti)f.push(uE(_,d,v,R));else throw Error("non exhaustive match")}return u}function uE(t,e,n,r){const i=Ze(n);i.push(t.name);const s=Ze(r);return s.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:s}}var Te;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Te||(Te={}));function Sh(t){if(t instanceof Qe||t==="Option")return Te.OPTION;if(t instanceof $e||t==="Repetition")return Te.REPETITION;if(t instanceof $t||t==="RepetitionMandatory")return Te.REPETITION_MANDATORY;if(t instanceof Ct||t==="RepetitionMandatoryWithSeparator")return Te.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof yt||t==="RepetitionWithSeparator")return Te.REPETITION_WITH_SEPARATOR;if(t instanceof vt||t==="Alternation")return Te.ALTERNATION;throw Error("non exhaustive match")}function Gp(t){const{occurrence:e,rule:n,prodType:r,maxLookahead:i}=t,s=Sh(r);return s===Te.ALTERNATION?kc(e,n,i):bc(e,n,s,i)}function dE(t,e,n,r,i,s){const o=kc(t,e,n),a=Wv(o)?Cl:xs;return s(o,r,a,i)}function fE(t,e,n,r,i,s){const o=bc(t,e,i,n),a=Wv(o)?Cl:xs;return s(o[0],a,r)}function hE(t,e,n,r){const i=t.length,s=qt(t,o=>qt(o,a=>a.length===1));if(e)return function(o){const a=M(o,l=>l.GATE);for(let l=0;l<i;l++){const c=t[l],u=c.length,f=a[l];if(!(f!==void 0&&f.call(this)===!1))e:for(let m=0;m<u;m++){const g=c[m],d=g.length;for(let v=0;v<d;v++){const R=this.LA(v+1);if(n(R,g[v])===!1)continue e}return l}}};if(s&&!r){const o=M(t,l=>It(l)),a=lt(o,(l,c,u)=>(q(c,f=>{B(l,f.tokenTypeIdx)||(l[f.tokenTypeIdx]=u),q(f.categoryMatches,m=>{B(l,m)||(l[m]=u)})}),l),{});return function(){const l=this.LA(1);return a[l.tokenTypeIdx]}}else return function(){for(let o=0;o<i;o++){const a=t[o],l=a.length;e:for(let c=0;c<l;c++){const u=a[c],f=u.length;for(let m=0;m<f;m++){const g=this.LA(m+1);if(n(g,u[m])===!1)continue e}return o}}}}function pE(t,e,n){const r=qt(t,s=>s.length===1),i=t.length;if(r&&!n){const s=It(t);if(s.length===1&&ce(s[0].categoryMatches)){const a=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{const o=lt(s,(a,l,c)=>(a[l.tokenTypeIdx]=!0,q(l.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){const a=this.LA(1);return o[a.tokenTypeIdx]===!0}}}else return function(){e:for(let s=0;s<i;s++){const o=t[s],a=o.length;for(let l=0;l<a;l++){const c=this.LA(l+1);if(e(c,o[l])===!1)continue e}return!0}return!1}}class mE extends Tc{constructor(e,n,r){super(),this.topProd=e,this.targetOccurrence=n,this.targetProdType=r}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,n,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=r.concat(i),!0):!1}walkOption(e,n,r){this.checkIsTarget(e,Te.OPTION,n,r)||super.walkOption(e,n,r)}walkAtLeastOne(e,n,r){this.checkIsTarget(e,Te.REPETITION_MANDATORY,n,r)||super.walkOption(e,n,r)}walkAtLeastOneSep(e,n,r){this.checkIsTarget(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}walkMany(e,n,r){this.checkIsTarget(e,Te.REPETITION,n,r)||super.walkOption(e,n,r)}walkManySep(e,n,r){this.checkIsTarget(e,Te.REPETITION_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}}class Bv extends ni{constructor(e,n,r){super(),this.targetOccurrence=e,this.targetProdType=n,this.targetRef=r,this.result=[]}checkIsTarget(e,n){e.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,Te.OPTION)}visitRepetition(e){this.checkIsTarget(e,Te.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,Te.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,Te.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,Te.ALTERNATION)}}function zp(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=[];return e}function du(t){let e=[""];for(let n=0;n<t.length;n++){const r=t[n],i=[];for(let s=0;s<e.length;s++){const o=e[s];i.push(o+"_"+r.tokenTypeIdx);for(let a=0;a<r.categoryMatches.length;a++){const l="_"+r.categoryMatches[a];i.push(o+l)}}e=i}return e}function gE(t,e,n){for(let r=0;r<t.length;r++){if(r===n)continue;const i=t[r];for(let s=0;s<e.length;s++){const o=e[s];if(i[o]===!0)return!1}}return!0}function Kv(t,e){const n=M(t,o=>kd([o],1)),r=zp(n.length),i=M(n,o=>{const a={};return q(o,l=>{const c=du(l.partialPath);q(c,u=>{a[u]=!0})}),a});let s=n;for(let o=1;o<=e;o++){const a=s;s=zp(a.length);for(let l=0;l<a.length;l++){const c=a[l];for(let u=0;u<c.length;u++){const f=c[u].partialPath,m=c[u].suffixDef,g=du(f);if(gE(i,g,l)||ce(m)||f.length===e){const v=r[l];if(bd(v,f)===!1){v.push(f);for(let R=0;R<g.length;R++){const _=g[R];i[l][_]=!0}}}else{const v=kd(m,o+1,f);s[l]=s[l].concat(v),q(v,R=>{const _=du(R.partialPath);q(_,h=>{i[l][h]=!0})})}}}}return r}function kc(t,e,n,r){const i=new Bv(t,Te.ALTERNATION,r);return e.accept(i),Kv(i.result,n)}function bc(t,e,n,r){const i=new Bv(t,n);e.accept(i);const s=i.result,a=new mE(e,t,n).startWalking(),l=new gt({definition:s}),c=new gt({definition:a});return Kv([l,c],r)}function bd(t,e){e:for(let n=0;n<t.length;n++){const r=t[n];if(r.length===e.length){for(let i=0;i<r.length;i++){const s=e[i],o=r[i];if((s===o||o.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function yE(t,e){return t.length<e.length&&qt(t,(n,r)=>{const i=e[r];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}function Wv(t){return qt(t,e=>qt(e,n=>qt(n,r=>ce(r.categoryMatches))))}function vE(t){const e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return M(e,n=>Object.assign({type:ut.CUSTOM_LOOKAHEAD_VALIDATION},n))}function _E(t,e,n,r){const i=kt(t,l=>TE(l,n)),s=IE(t,e,n),o=kt(t,l=>EE(l,n)),a=kt(t,l=>kE(l,t,r,n));return i.concat(s,o,a)}function TE(t,e){const n=new wE;t.accept(n);const r=n.allProductions,i=L$(r,RE),s=zt(i,a=>a.length>1);return M(Be(s),a=>{const l=Wt(a),c=e.buildDuplicateFoundError(t,a),u=Qt(l),f={message:c,type:ut.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:l.idx},m=Gv(l);return m&&(f.parameter=m),f})}function RE(t){return`${Qt(t)}_#_${t.idx}_#_${Gv(t)}`}function Gv(t){return t instanceof ge?t.terminalType.name:t instanceof ct?t.nonTerminalName:""}class wE extends ni{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function kE(t,e,n,r){const i=[];if(lt(e,(o,a)=>a.name===t.name?o+1:o,0)>1){const o=r.buildDuplicateRuleNameError({topLevelRule:t,grammarName:n});i.push({message:o,type:ut.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function bE(t,e,n){const r=[];let i;return dt(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,r.push({message:i,type:ut.INVALID_RULE_OVERRIDE,ruleName:t})),r}function zv(t,e,n,r=[]){const i=[],s=dl(e.definition);if(ce(s))return[];{const o=t.name;dt(s,t)&&i.push({message:n.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:r}),type:ut.LEFT_RECURSION,ruleName:o});const l=vc(s,r.concat([t])),c=kt(l,u=>{const f=Ze(r);return f.push(u),zv(t,u,n,f)});return i.concat(c)}}function dl(t){let e=[];if(ce(t))return e;const n=Wt(t);if(n instanceof ct)e.push(n.referencedRule);else if(n instanceof gt||n instanceof Qe||n instanceof $t||n instanceof Ct||n instanceof yt||n instanceof $e)e=e.concat(dl(n.definition));else if(n instanceof vt)e=It(M(n.definition,s=>dl(s.definition)));else if(!(n instanceof ge))throw Error("non exhaustive match");const r=Sl(n),i=t.length>1;if(r&&i){const s=Ve(t);return e.concat(dl(s))}else return e}class $h extends ni{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}}function SE(t,e){const n=new $h;t.accept(n);const r=n.alternations;return kt(r,s=>{const o=ds(s.definition);return kt(o,(a,l)=>{const c=qv([a],[],xs,1);return ce(c)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:s,emptyChoiceIdx:l}),type:ut.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:s.idx,alternative:l+1}]:[]})})}function $E(t,e,n){const r=new $h;t.accept(r);let i=r.alternations;return i=_c(i,o=>o.ignoreAmbiguities===!0),kt(i,o=>{const a=o.idx,l=o.maxLookahead||e,c=kc(a,t,l,o),u=AE(c,o,t,n),f=NE(c,o,t,n);return u.concat(f)})}class CE extends ni{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function EE(t,e){const n=new $h;t.accept(n);const r=n.alternations;return kt(r,s=>s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:s}),type:ut.TOO_MANY_ALTS,ruleName:t.name,occurrence:s.idx}]:[])}function PE(t,e,n){const r=[];return q(t,i=>{const s=new CE;i.accept(s);const o=s.allProductions;q(o,a=>{const l=Sh(a),c=a.maxLookahead||e,u=a.idx,m=bc(u,i,l,c)[0];if(ce(It(m))){const g=n.buildEmptyRepetitionError({topLevelRule:i,repetition:a});r.push({message:g,type:ut.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),r}function AE(t,e,n,r){const i=[],s=lt(t,(a,l,c)=>(e.definition[c].ignoreAmbiguities===!0||q(l,u=>{const f=[c];q(t,(m,g)=>{c!==g&&bd(m,u)&&e.definition[g].ignoreAmbiguities!==!0&&f.push(g)}),f.length>1&&!bd(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return M(s,a=>{const l=M(a.alts,u=>u+1);return{message:r.buildAlternationAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:l,prefixPath:a.path}),type:ut.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:e.idx,alternatives:a.alts}})}function NE(t,e,n,r){const i=lt(t,(o,a,l)=>{const c=M(a,u=>({idx:l,path:u}));return o.concat(c)},[]);return Ds(kt(i,o=>{if(e.definition[o.idx].ignoreAmbiguities===!0)return[];const l=o.idx,c=o.path,u=St(i,m=>e.definition[m.idx].ignoreAmbiguities!==!0&&m.idx<l&&yE(m.path,c));return M(u,m=>{const g=[m.idx+1,l+1],d=e.idx===0?"":e.idx;return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:g,prefixPath:m.path}),type:ut.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:d,alternatives:g}})}))}function IE(t,e,n){const r=[],i=M(e,s=>s.name);return q(t,s=>{const o=s.name;if(dt(i,o)){const a=n.buildNamespaceConflictError(s);r.push({message:a,type:ut.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:o})}}),r}function DE(t){const e=Rh(t,{errMsgProvider:rE}),n={};return q(t.rules,r=>{n[r.name]=r}),iE(n,e.errMsgProvider)}function OE(t){return t=Rh(t,{errMsgProvider:ir}),_E(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}const Vv="MismatchedTokenException",Yv="NoViableAltException",Xv="EarlyExitException",Jv="NotAllInputParsedException",Qv=[Vv,Yv,Xv,Jv];Object.freeze(Qv);function El(t){return dt(Qv,t.name)}class Sc extends Error{constructor(e,n){super(e),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class Zv extends Sc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Vv}}class xE extends Sc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Yv}}class LE extends Sc{constructor(e,n){super(e,n),this.name=Jv}}class ME extends Sc{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Xv}}const fu={},e_="InRuleRecoveryException";class FE extends Error{constructor(e){super(e),this.name=e_}}class HE{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=B(e,"recoveryEnabled")?e.recoveryEnabled:bn.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=jE)}getTokenToInsert(e){const n=bh(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,n,r,i){const s=this.findReSyncTokenType(),o=this.exportLexerState(),a=[];let l=!1;const c=this.LA(1);let u=this.LA(1);const f=()=>{const m=this.LA(0),g=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:c,previous:m,ruleName:this.getCurrRuleFullName()}),d=new Zv(g,c,this.LA(0));d.resyncedTokens=ds(a),this.SAVE_ERROR(d)};for(;!l;)if(this.tokenMatcher(u,i)){f();return}else if(r.call(this)){f(),e.apply(this,n);return}else this.tokenMatcher(u,s)?l=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(o)}shouldInRepetitionRecoveryBeTried(e,n,r){return!(r===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,n)))}getFollowsForInRuleRecovery(e,n){const r=this.getCurrentGrammarPath(e,n);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,n){if(this.canRecoverWithSingleTokenInsertion(e,n))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){const r=this.SKIP_TOKEN();return this.consumeToken(),r}throw new FE("sad sad panda")}canPerformInRuleRecovery(e,n){return this.canRecoverWithSingleTokenInsertion(e,n)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,n){if(!this.canTokenTypeBeInsertedInRecovery(e)||ce(n))return!1;const r=this.LA(1);return Mr(n,s=>this.tokenMatcher(r,s))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){const n=this.getCurrFollowKey(),r=this.getFollowSetFromFollowKey(n);return dt(r,e)}findReSyncTokenType(){const e=this.flattenFollowSet();let n=this.LA(1),r=2;for(;;){const i=Mr(e,s=>Uv(n,s));if(i!==void 0)return i;n=this.LA(r),r++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return fu;const e=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),r=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(r)}}buildFullFollowKeyStack(){const e=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return M(e,(r,i)=>i===0?fu:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){const e=M(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return It(e)}getFollowSetFromFollowKey(e){if(e===fu)return[Gn];const n=e.ruleName+e.idxInCallingRule+Av+e.inRule;return this.resyncFollows[n]}addToResyncTokens(e,n){return this.tokenMatcher(e,Gn)||n.push(e),n}reSyncTo(e){const n=[];let r=this.LA(1);for(;this.tokenMatcher(r,e)===!1;)r=this.SKIP_TOKEN(),this.addToResyncTokens(r,n);return ds(n)}attemptInRepetitionRecovery(e,n,r,i,s,o,a){}getCurrentGrammarPath(e,n){const r=this.getHumanReadableRuleStack(),i=Ze(this.RULE_OCCURRENCE_STACK);return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:n}}getHumanReadableRuleStack(){return M(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}}function jE(t,e,n,r,i,s,o){const a=this.getKeyForAutomaticLookahead(r,i);let l=this.firstAfterRepMap[a];if(l===void 0){const m=this.getCurrRuleFullName(),g=this.getGAstProductions()[m];l=new s(g,i).startWalking(),this.firstAfterRepMap[a]=l}let c=l.token,u=l.occurrence;const f=l.isEndOfRule;this.RULE_STACK.length===1&&f&&c===void 0&&(c=Gn,u=1),!(c===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(c,u,o)&&this.tryInRepetitionRecovery(t,e,n,c)}const UE=4,Qn=8,t_=1<<Qn,n_=2<<Qn,Sd=3<<Qn,$d=4<<Qn,Cd=5<<Qn,fl=6<<Qn;function hu(t,e,n){return n|e|t}class Ch{constructor(e){var n;this.maxLookahead=(n=e==null?void 0:e.maxLookahead)!==null&&n!==void 0?n:bn.maxLookahead}validate(e){const n=this.validateNoLeftRecursion(e.rules);if(ce(n)){const r=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...n,...r,...i,...s]}return n}validateNoLeftRecursion(e){return kt(e,n=>zv(n,n,ir))}validateEmptyOrAlternatives(e){return kt(e,n=>SE(n,ir))}validateAmbiguousAlternationAlternatives(e,n){return kt(e,r=>$E(r,n,ir))}validateSomeNonEmptyLookaheadPath(e,n){return PE(e,n,ir)}buildLookaheadForAlternation(e){return dE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,hE)}buildLookaheadForOptional(e){return fE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,Sh(e.prodType),pE)}}class qE{initLooksAhead(e){this.dynamicTokensEnabled=B(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:bn.dynamicTokensEnabled,this.maxLookahead=B(e,"maxLookahead")?e.maxLookahead:bn.maxLookahead,this.lookaheadStrategy=B(e,"lookaheadStrategy")?e.lookaheadStrategy:new Ch({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){q(e,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{const{alternation:r,repetition:i,option:s,repetitionMandatory:o,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:l}=KE(n);q(r,c=>{const u=c.idx===0?"":c.idx;this.TRACE_INIT(`${Qt(c)}${u}`,()=>{const f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:c.idx,rule:n,maxLookahead:c.maxLookahead||this.maxLookahead,hasPredicates:c.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),m=hu(this.fullRuleNameToShort[n.name],t_,c.idx);this.setLaFuncCache(m,f)})}),q(i,c=>{this.computeLookaheadFunc(n,c.idx,Sd,"Repetition",c.maxLookahead,Qt(c))}),q(s,c=>{this.computeLookaheadFunc(n,c.idx,n_,"Option",c.maxLookahead,Qt(c))}),q(o,c=>{this.computeLookaheadFunc(n,c.idx,$d,"RepetitionMandatory",c.maxLookahead,Qt(c))}),q(a,c=>{this.computeLookaheadFunc(n,c.idx,fl,"RepetitionMandatoryWithSeparator",c.maxLookahead,Qt(c))}),q(l,c=>{this.computeLookaheadFunc(n,c.idx,Cd,"RepetitionWithSeparator",c.maxLookahead,Qt(c))})})})}computeLookaheadFunc(e,n,r,i,s,o){this.TRACE_INIT(`${o}${n===0?"":n}`,()=>{const a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),l=hu(this.fullRuleNameToShort[e.name],r,n);this.setLaFuncCache(l,a)})}getKeyForAutomaticLookahead(e,n){const r=this.getLastExplicitRuleShortName();return hu(r,e,n)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,n){this.lookAheadFuncsCache.set(e,n)}}class BE extends ni{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const Ro=new BE;function KE(t){Ro.reset(),t.accept(Ro);const e=Ro.dslMethods;return Ro.reset(),e}function Vp(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function Yp(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function WE(t,e,n){t.children[n]===void 0?t.children[n]=[e]:t.children[n].push(e)}function GE(t,e,n){t.children[e]===void 0?t.children[e]=[n]:t.children[e].push(n)}const zE="name";function r_(t,e){Object.defineProperty(t,zE,{enumerable:!1,configurable:!0,writable:!1,value:e})}function VE(t,e){const n=Lt(t),r=n.length;for(let i=0;i<r;i++){const s=n[i],o=t[s],a=o.length;for(let l=0;l<a;l++){const c=o[l];c.tokenTypeIdx===void 0&&this[c.name](c.children,e)}}}function YE(t,e){const n=function(){};r_(n,t+"BaseSemantics");const r={visit:function(i,s){if(ee(i)&&(i=i[0]),!kn(i))return this[i.name](i.children,s)},validateVisitor:function(){const i=JE(this,e);if(!ce(i)){const s=M(i,o=>o.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g,`
	`)}`)}}};return n.prototype=r,n.prototype.constructor=n,n._RULE_NAMES=e,n}function XE(t,e,n){const r=function(){};r_(r,t+"BaseSemanticsWithDefaults");const i=Object.create(n.prototype);return q(e,s=>{i[s]=VE}),r.prototype=i,r.prototype.constructor=r,r}var Ed;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(Ed||(Ed={}));function JE(t,e){return QE(t,e)}function QE(t,e){const n=St(e,i=>Cn(t[i])===!1),r=M(n,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:Ed.MISSING_METHOD,methodName:i}));return Ds(r)}class ZE{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=B(e,"nodeLocationTracking")?e.nodeLocationTracking:bn.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=qe,this.cstFinallyStateUpdate=qe,this.cstPostTerminal=qe,this.cstPostNonTerminal=qe,this.cstPostRule=qe;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Yp,this.setNodeLocationFromNode=Yp,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Vp,this.setNodeLocationFromNode=Vp,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=qe,this.setInitialNodeLocation=qe;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const n=this.LA(1);e.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){const n={name:e,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?(r.endOffset=n.endOffset,r.endLine=n.endLine,r.endColumn=n.endColumn):(r.startOffset=NaN,r.startLine=NaN,r.startColumn=NaN)}cstPostRuleOnlyOffset(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?r.endOffset=n.endOffset:r.startOffset=NaN}cstPostTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];WE(r,n,e),this.setNodeLocationFromToken(r.location,n)}cstPostNonTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];GE(r,n,e),this.setNodeLocationFromNode(r.location,e.location)}getBaseCstVisitorConstructor(){if(kn(this.baseCstVisitorConstructor)){const e=YE(this.className,Lt(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(kn(this.baseCstVisitorWithDefaultsConstructor)){const e=XE(this.className,Lt(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class eP{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Al}LA(e){const n=this.currIdx+e;return n<0||this.tokVectorLength<=n?Al:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class tP{ACTION(e){return e.call(this)}consume(e,n,r){return this.consumeInternal(n,e,r)}subrule(e,n,r){return this.subruleInternal(n,e,r)}option(e,n){return this.optionInternal(n,e)}or(e,n){return this.orInternal(n,e)}many(e,n){return this.manyInternal(e,n)}atLeastOne(e,n){return this.atLeastOneInternal(e,n)}CONSUME(e,n){return this.consumeInternal(e,0,n)}CONSUME1(e,n){return this.consumeInternal(e,1,n)}CONSUME2(e,n){return this.consumeInternal(e,2,n)}CONSUME3(e,n){return this.consumeInternal(e,3,n)}CONSUME4(e,n){return this.consumeInternal(e,4,n)}CONSUME5(e,n){return this.consumeInternal(e,5,n)}CONSUME6(e,n){return this.consumeInternal(e,6,n)}CONSUME7(e,n){return this.consumeInternal(e,7,n)}CONSUME8(e,n){return this.consumeInternal(e,8,n)}CONSUME9(e,n){return this.consumeInternal(e,9,n)}SUBRULE(e,n){return this.subruleInternal(e,0,n)}SUBRULE1(e,n){return this.subruleInternal(e,1,n)}SUBRULE2(e,n){return this.subruleInternal(e,2,n)}SUBRULE3(e,n){return this.subruleInternal(e,3,n)}SUBRULE4(e,n){return this.subruleInternal(e,4,n)}SUBRULE5(e,n){return this.subruleInternal(e,5,n)}SUBRULE6(e,n){return this.subruleInternal(e,6,n)}SUBRULE7(e,n){return this.subruleInternal(e,7,n)}SUBRULE8(e,n){return this.subruleInternal(e,8,n)}SUBRULE9(e,n){return this.subruleInternal(e,9,n)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,n,r=Nl){if(dt(this.definedRulesNames,e)){const o={message:ir.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ut.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);const i=this.defineRule(e,n,r);return this[e]=i,i}OVERRIDE_RULE(e,n,r=Nl){const i=bE(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,n,r);return this[e]=s,s}BACKTRACK(e,n){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{return e.apply(this,n),!0}catch(i){if(El(i))return!1;throw i}finally{this.reloadRecogState(r),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return uC(Be(this.gastProductionsCache))}}class nP{initRecognizerEngine(e,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Cl,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},B(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ee(e)){if(ce(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ee(e))this.tokensMap=lt(e,(s,o)=>(s[o.name]=o,s),{});else if(B(e,"modes")&&qt(It(Be(e.modes)),eE)){const s=It(Be(e.modes)),o=wh(s);this.tokensMap=lt(o,(a,l)=>(a[l.name]=l,a),{})}else if(xt(e))this.tokensMap=Ze(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Gn;const r=B(e,"modes")?It(Be(e.modes)):Be(e),i=qt(r,s=>ce(s.categoryMatches));this.tokenMatcher=i?Cl:xs,Ls(Be(this.tokensMap))}defineRule(e,n,r){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);const i=B(r,"resyncEnabled")?r.resyncEnabled:Nl.resyncEnabled,s=B(r,"recoveryValueFunc")?r.recoveryValueFunc:Nl.recoveryValueFunc,o=this.ruleShortNameIdx<<UE+Qn;this.ruleShortNameIdx++,this.shortRuleNameToFull[o]=e,this.fullRuleNameToShort[e]=o;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u);const f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:n})}invokeRuleCatch(e,n,r){const i=this.RULE_STACK.length===1,s=n&&!this.isBackTracking()&&this.recoveryEnabled;if(El(e)){const o=e;if(s){const a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(o.resyncedTokens=this.reSyncTo(a),this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];return l.recoveredNode=!0,l}else return r(e);else{if(this.outputCst){const l=this.CST_STACK[this.CST_STACK.length-1];l.recoveredNode=!0,o.partialCstResult=l}throw o}}else{if(i)return this.moveToTerminatedState(),r(e);throw o}}else throw e}optionInternal(e,n){const r=this.getKeyForAutomaticLookahead(n_,n);return this.optionInternalLogic(e,n,r)}optionInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof e!="function"){s=e.DEF;const o=e.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=e;if(i.call(this)===!0)return s.call(this)}atLeastOneInternal(e,n){const r=this.getKeyForAutomaticLookahead($d,e);return this.atLeastOneInternalLogic(e,n,r)}atLeastOneInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const o=n.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=n;if(i.call(this)===!0){let o=this.doSingleRepetition(s);for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s)}else throw this.raiseEarlyExitException(e,Te.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,n],i,$d,e,cE)}atLeastOneSepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(fl,e);this.atLeastOneSepFirstInternalLogic(e,n,r)}atLeastOneSepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,Wp],a,fl,e,Wp)}else throw this.raiseEarlyExitException(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(e,n){const r=this.getKeyForAutomaticLookahead(Sd,e);return this.manyInternalLogic(e,n,r)}manyInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const a=n.GATE;if(a!==void 0){const l=i;i=()=>a.call(this)&&l.call(this)}}else s=n;let o=!0;for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s);this.attemptInRepetitionRecovery(this.manyInternal,[e,n],i,Sd,e,lE,o)}manySepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(Cd,e);this.manySepFirstInternalLogic(e,n,r)}manySepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,Kp],a,Cd,e,Kp)}}repetitionSepSecondInternal(e,n,r,i,s){for(;r();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,n,r,i,s],r,fl,e,s)}doSingleRepetition(e){const n=this.getLexerPosition();return e.call(this),this.getLexerPosition()>n}orInternal(e,n){const r=this.getKeyForAutomaticLookahead(t_,n),i=ee(e)?e:e.DEF,o=this.getLaFuncFromCache(r).call(this,i);if(o!==void 0)return i[o].ALT.call(this);this.raiseNoAltException(n,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){const e=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new LE(n,e))}}subruleInternal(e,n,r){let i;try{const s=r!==void 0?r.ARGS:void 0;return this.subruleIdx=n,i=e.apply(this,s),this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName),i}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,n,r){throw El(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:r),delete e.partialCstResult),e}consumeInternal(e,n,r){let i;try{const s=this.LA(1);this.tokenMatcher(s,e)===!0?(this.consumeToken(),i=s):this.consumeInternalError(e,s,r)}catch(s){i=this.consumeInternalRecovery(e,n,s)}return this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i),i}consumeInternalError(e,n,r){let i;const s=this.LA(0);throw r!==void 0&&r.ERR_MSG?i=r.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:n,previous:s,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Zv(i,n,s))}consumeInternalRecovery(e,n,r){if(this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking()){const i=this.getFollowsForInRuleRecovery(e,n);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===e_?r:s}}else throw r}saveRecogState(){const e=this.errors,n=Ze(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,n,r){this.RULE_OCCURRENCE_STACK.push(r),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Gn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}}class rP{initErrorHandler(e){this._errors=[],this.errorMessageProvider=B(e,"errorMessageProvider")?e.errorMessageProvider:bn.errorMessageProvider}SAVE_ERROR(e){if(El(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Ze(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Ze(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,n,r){const i=this.getCurrRuleFullName(),s=this.getGAstProductions()[i],a=bc(e,s,n,this.maxLookahead)[0],l=[];for(let u=1;u<=this.maxLookahead;u++)l.push(this.LA(u));const c=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:l,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new ME(c,this.LA(1),this.LA(0)))}raiseNoAltException(e,n){const r=this.getCurrRuleFullName(),i=this.getGAstProductions()[r],s=kc(e,i,this.maxLookahead),o=[];for(let c=1;c<=this.maxLookahead;c++)o.push(this.LA(c));const a=this.LA(0),l=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:o,previous:a,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new xE(l,this.LA(1),a))}}class iP{initContentAssist(){}computeContentAssist(e,n){const r=this.gastProductionsCache[e];if(kn(r))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return qv([r],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){const n=Wt(e.ruleStack),i=this.getGAstProductions()[n];return new aE(i,e).startWalking()}}const $c={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze($c);const Xp=!0,Jp=Math.pow(2,Qn)-1,i_=jv({name:"RECORDING_PHASE_TOKEN",pattern:pt.NA});Ls([i_]);const s_=bh(i_,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(s_);const sP={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class oP{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){const n=e>0?e:"";this[`CONSUME${n}`]=function(r,i){return this.consumeInternalRecord(r,e,i)},this[`SUBRULE${n}`]=function(r,i){return this.subruleInternalRecord(r,e,i)},this[`OPTION${n}`]=function(r){return this.optionInternalRecord(r,e)},this[`OR${n}`]=function(r){return this.orInternalRecord(r,e)},this[`MANY${n}`]=function(r){this.manyInternalRecord(e,r)},this[`MANY_SEP${n}`]=function(r){this.manySepFirstInternalRecord(e,r)},this[`AT_LEAST_ONE${n}`]=function(r){this.atLeastOneInternalRecord(e,r)},this[`AT_LEAST_ONE_SEP${n}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)}}this.consume=function(e,n,r){return this.consumeInternalRecord(n,e,r)},this.subrule=function(e,n,r){return this.subruleInternalRecord(n,e,r)},this.option=function(e,n){return this.optionInternalRecord(n,e)},this.or=function(e,n){return this.orInternalRecord(n,e)},this.many=function(e,n){this.manyInternalRecord(e,n)},this.atLeastOne=function(e,n){this.atLeastOneInternalRecord(e,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{const e=this;for(let n=0;n<10;n++){const r=n>0?n:"";delete e[`CONSUME${r}`],delete e[`SUBRULE${r}`],delete e[`OPTION${r}`],delete e[`OR${r}`],delete e[`MANY${r}`],delete e[`MANY_SEP${r}`],delete e[`AT_LEAST_ONE${r}`],delete e[`AT_LEAST_ONE_SEP${r}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,n){return()=>!0}LA_RECORD(e){return Al}topLevelRuleRecord(e,n){try{const r=new ti({definition:[],name:e});return r.name=e,this.recordingProdStack.push(r),n.call(this),this.recordingProdStack.pop(),r}catch(r){if(r.KNOWN_RECORDER_ERROR!==!0)try{r.message=r.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}throw r}}optionInternalRecord(e,n){return yi.call(this,Qe,e,n)}atLeastOneInternalRecord(e,n){yi.call(this,$t,n,e)}atLeastOneSepFirstInternalRecord(e,n){yi.call(this,Ct,n,e,Xp)}manyInternalRecord(e,n){yi.call(this,$e,n,e)}manySepFirstInternalRecord(e,n){yi.call(this,yt,n,e,Xp)}orInternalRecord(e,n){return aP.call(this,e,n)}subruleInternalRecord(e,n,r){if(Pl(n),!e||B(e,"ruleName")===!1){const a=new Error(`<SUBRULE${Qp(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}const i=Lr(this.recordingProdStack),s=e.ruleName,o=new ct({idx:n,nonTerminalName:s,label:r==null?void 0:r.LABEL,referencedRule:void 0});return i.definition.push(o),this.outputCst?sP:$c}consumeInternalRecord(e,n,r){if(Pl(n),!Fv(e)){const o=new Error(`<CONSUME${Qp(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw o.KNOWN_RECORDER_ERROR=!0,o}const i=Lr(this.recordingProdStack),s=new ge({idx:n,terminalType:e,label:r==null?void 0:r.LABEL});return i.definition.push(s),s_}}function yi(t,e,n,r=!1){Pl(n);const i=Lr(this.recordingProdStack),s=Cn(e)?e:e.DEF,o=new t({definition:[],idx:n});return r&&(o.separator=e.SEP),B(e,"MAX_LOOKAHEAD")&&(o.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(o),s.call(this),i.definition.push(o),this.recordingProdStack.pop(),$c}function aP(t,e){Pl(e);const n=Lr(this.recordingProdStack),r=ee(t)===!1,i=r===!1?t:t.DEF,s=new vt({definition:[],idx:e,ignoreAmbiguities:r&&t.IGNORE_AMBIGUITIES===!0});B(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD);const o=Sv(i,a=>Cn(a.GATE));return s.hasPredicates=o,n.definition.push(s),q(i,a=>{const l=new gt({definition:[]});s.definition.push(l),B(a,"IGNORE_AMBIGUITIES")?l.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:B(a,"GATE")&&(l.ignoreAmbiguities=!0),this.recordingProdStack.push(l),a.ALT.call(this),this.recordingProdStack.pop()}),$c}function Qp(t){return t===0?"":`${t}`}function Pl(t){if(t<0||t>Jp){const e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${Jp+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}class lP{initPerformanceTracer(e){if(B(e,"traceInitPerf")){const n=e.traceInitPerf,r=typeof n=="number";this.traceInitMaxIdent=r?n:1/0,this.traceInitPerf=r?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=bn.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,n){if(this.traceInitPerf===!0){this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${r}--> <${e}>`);const{time:i,value:s}=Ev(n),o=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&o(`${r}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,s}else return n()}}function cP(t,e){e.forEach(n=>{const r=n.prototype;Object.getOwnPropertyNames(r).forEach(i=>{if(i==="constructor")return;const s=Object.getOwnPropertyDescriptor(r,i);s&&(s.get||s.set)?Object.defineProperty(t.prototype,i,s):t.prototype[i]=n.prototype[i]})})}const Al=bh(Gn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Al);const bn=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Ar,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Nl=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0});var ut;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ut||(ut={}));function Zp(t=void 0){return function(){return t}}class Ms{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;const n=this.className;this.TRACE_INIT("toFastProps",()=>{Pv(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),q(this.definedRulesNames,i=>{const o=this[i].originalGrammarAction;let a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,o)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let r=[];if(this.TRACE_INIT("Grammar Resolving",()=>{r=DE({rules:Be(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(r)}),this.TRACE_INIT("Grammar Validations",()=>{if(ce(r)&&this.skipValidations===!1){const i=OE({rules:Be(this.gastProductionsCache),tokenTypes:Be(this.tokensMap),errMsgProvider:ir,grammarName:n}),s=vE({lookaheadStrategy:this.lookaheadStrategy,rules:Be(this.gastProductionsCache),tokenTypes:Be(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,s)}}),ce(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=yC(Be(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,s;(s=(i=this.lookaheadStrategy).initialize)===null||s===void 0||s.call(i,{rules:Be(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Be(this.gastProductionsCache))})),!Ms.DEFER_DEFINITION_ERRORS_HANDLING&&!ce(this.definitionErrors))throw e=M(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,n){this.definitionErrors=[],this.selfAnalysisDone=!1;const r=this;if(r.initErrorHandler(n),r.initLexerAdapter(),r.initLooksAhead(n),r.initRecognizerEngine(e,n),r.initRecoverable(n),r.initTreeBuilder(n),r.initContentAssist(),r.initGastRecorder(n),r.initPerformanceTracer(n),B(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=B(n,"skipValidations")?n.skipValidations:bn.skipValidations}}Ms.DEFER_DEFINITION_ERRORS_HANDLING=!1;cP(Ms,[HE,qE,ZE,eP,nP,tP,rP,iP,oP,lP]);class uP extends Ms{constructor(e,n=bn){const r=Ze(n);r.outputCst=!1,super(e,r)}}function Fr(t,e,n){return`${t.name}_${e}_${n}`}const zn=1,dP=2,o_=4,a_=5,Fs=7,fP=8,hP=9,pP=10,mP=11,l_=12;class Eh{constructor(e){this.target=e}isEpsilon(){return!1}}class Ph extends Eh{constructor(e,n){super(e),this.tokenType=n}}class c_ extends Eh{constructor(e){super(e)}isEpsilon(){return!0}}class Ah extends Eh{constructor(e,n,r){super(e),this.rule=n,this.followState=r}isEpsilon(){return!0}}function gP(t){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};yP(e,t);const n=t.length;for(let r=0;r<n;r++){const i=t[r],s=_r(e,i,i);s!==void 0&&EP(e,i,s)}return e}function yP(t,e){const n=e.length;for(let r=0;r<n;r++){const i=e[r],s=We(t,i,void 0,{type:dP}),o=We(t,i,void 0,{type:Fs});s.stop=o,t.ruleToStartState.set(i,s),t.ruleToStopState.set(i,o)}}function u_(t,e,n){return n instanceof ge?Nh(t,e,n.terminalType,n):n instanceof ct?CP(t,e,n):n instanceof vt?wP(t,e,n):n instanceof Qe?kP(t,e,n):n instanceof $e?vP(t,e,n):n instanceof yt?_P(t,e,n):n instanceof $t?TP(t,e,n):n instanceof Ct?RP(t,e,n):_r(t,e,n)}function vP(t,e,n){const r=We(t,e,n,{type:a_});Zn(t,r);const i=ri(t,e,r,n,_r(t,e,n));return f_(t,e,n,i)}function _P(t,e,n){const r=We(t,e,n,{type:a_});Zn(t,r);const i=ri(t,e,r,n,_r(t,e,n)),s=Nh(t,e,n.separator,n);return f_(t,e,n,i,s)}function TP(t,e,n){const r=We(t,e,n,{type:o_});Zn(t,r);const i=ri(t,e,r,n,_r(t,e,n));return d_(t,e,n,i)}function RP(t,e,n){const r=We(t,e,n,{type:o_});Zn(t,r);const i=ri(t,e,r,n,_r(t,e,n)),s=Nh(t,e,n.separator,n);return d_(t,e,n,i,s)}function wP(t,e,n){const r=We(t,e,n,{type:zn});Zn(t,r);const i=M(n.definition,o=>u_(t,e,o));return ri(t,e,r,n,...i)}function kP(t,e,n){const r=We(t,e,n,{type:zn});Zn(t,r);const i=ri(t,e,r,n,_r(t,e,n));return bP(t,e,n,i)}function _r(t,e,n){const r=St(M(n.definition,i=>u_(t,e,i)),i=>i!==void 0);return r.length===1?r[0]:r.length===0?void 0:$P(t,r)}function d_(t,e,n,r,i){const s=r.left,o=r.right,a=We(t,e,n,{type:mP});Zn(t,a);const l=We(t,e,n,{type:l_});return s.loopback=a,l.loopback=a,t.decisionMap[Fr(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",n.idx)]=a,Me(o,a),i===void 0?(Me(a,s),Me(a,l)):(Me(a,l),Me(a,i.left),Me(i.right,s)),{left:s,right:l}}function f_(t,e,n,r,i){const s=r.left,o=r.right,a=We(t,e,n,{type:pP});Zn(t,a);const l=We(t,e,n,{type:l_}),c=We(t,e,n,{type:hP});return a.loopback=c,l.loopback=c,Me(a,s),Me(a,l),Me(o,c),i!==void 0?(Me(c,l),Me(c,i.left),Me(i.right,s)):Me(c,a),t.decisionMap[Fr(e,i?"RepetitionWithSeparator":"Repetition",n.idx)]=a,{left:a,right:l}}function bP(t,e,n,r){const i=r.left,s=r.right;return Me(i,s),t.decisionMap[Fr(e,"Option",n.idx)]=i,r}function Zn(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function ri(t,e,n,r,...i){const s=We(t,e,r,{type:fP,start:n});n.end=s;for(const a of i)a!==void 0?(Me(n,a.left),Me(a.right,s)):Me(n,s);const o={left:n,right:s};return t.decisionMap[Fr(e,SP(r),r.idx)]=n,o}function SP(t){if(t instanceof vt)return"Alternation";if(t instanceof Qe)return"Option";if(t instanceof $e)return"Repetition";if(t instanceof yt)return"RepetitionWithSeparator";if(t instanceof $t)return"RepetitionMandatory";if(t instanceof Ct)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function $P(t,e){const n=e.length;for(let s=0;s<n-1;s++){const o=e[s];let a;o.left.transitions.length===1&&(a=o.left.transitions[0]);const l=a instanceof Ah,c=a,u=e[s+1].left;o.left.type===zn&&o.right.type===zn&&a!==void 0&&(l&&c.followState===o.right||a.target===o.right)?(l?c.followState=u:a.target=u,PP(t,o.right)):Me(o.right,u)}const r=e[0],i=e[n-1];return{left:r.left,right:i.right}}function Nh(t,e,n,r){const i=We(t,e,r,{type:zn}),s=We(t,e,r,{type:zn});return Ih(i,new Ph(s,n)),{left:i,right:s}}function CP(t,e,n){const r=n.referencedRule,i=t.ruleToStartState.get(r),s=We(t,e,n,{type:zn}),o=We(t,e,n,{type:zn}),a=new Ah(i,r,o);return Ih(s,a),{left:s,right:o}}function EP(t,e,n){const r=t.ruleToStartState.get(e);Me(r,n.left);const i=t.ruleToStopState.get(e);return Me(n.right,i),{left:r,right:i}}function Me(t,e){const n=new c_(e);Ih(t,n)}function We(t,e,n,r){const i=Object.assign({atn:t,production:n,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},r);return t.states.push(i),i}function Ih(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function PP(t,e){t.states.splice(t.states.indexOf(e),1)}const Il={};class Pd{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){const n=h_(e);n in this.map||(this.map[n]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return M(this.configs,e=>e.alt)}get key(){let e="";for(const n in this.map)e+=n+":";return e}}function h_(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(n=>n.stateNumber.toString()).join("_")}`}function AP(t,e){const n={};return r=>{const i=r.toString();let s=n[i];return s!==void 0||(s={atnStartState:t,decision:e,states:{}},n[i]=s),s}}class p_{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,n){this.predicates[e]=n}toString(){let e="";const n=this.predicates.length;for(let r=0;r<n;r++)e+=this.predicates[r]===!0?"1":"0";return e}}const em=new p_;class NP extends Ch{constructor(e){var n;super(),this.logging=(n=e==null?void 0:e.logging)!==null&&n!==void 0?n:r=>console.log(r)}initialize(e){this.atn=gP(e.rules),this.dfas=IP(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){const{prodOccurrence:n,rule:r,hasPredicates:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,l=Fr(r,"Alternation",n),u=this.atn.decisionMap[l].decision,f=M(Gp({maxLookahead:1,occurrence:n,prodType:"Alternation",rule:r}),m=>M(m,g=>g[0]));if(tm(f,!1)&&!s){const m=lt(f,(g,d,v)=>(q(d,R=>{R&&(g[R.tokenTypeIdx]=v,q(R.categoryMatches,_=>{g[_]=v}))}),g),{});return i?function(g){var d;const v=this.LA(1),R=m[v.tokenTypeIdx];if(g!==void 0&&R!==void 0){const _=(d=g[R])===null||d===void 0?void 0:d.GATE;if(_!==void 0&&_.call(this)===!1)return}return R}:function(){const g=this.LA(1);return m[g.tokenTypeIdx]}}else return i?function(m){const g=new p_,d=m===void 0?0:m.length;for(let R=0;R<d;R++){const _=m==null?void 0:m[R].GATE;g.set(R,_===void 0||_.call(this))}const v=pu.call(this,o,u,g,a);return typeof v=="number"?v:void 0}:function(){const m=pu.call(this,o,u,em,a);return typeof m=="number"?m:void 0}}buildLookaheadForOptional(e){const{prodOccurrence:n,rule:r,prodType:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,l=Fr(r,i,n),u=this.atn.decisionMap[l].decision,f=M(Gp({maxLookahead:1,occurrence:n,prodType:i,rule:r}),m=>M(m,g=>g[0]));if(tm(f)&&f[0][0]&&!s){const m=f[0],g=It(m);if(g.length===1&&ce(g[0].categoryMatches)){const v=g[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===v}}else{const d=lt(g,(v,R)=>(R!==void 0&&(v[R.tokenTypeIdx]=!0,q(R.categoryMatches,_=>{v[_]=!0})),v),{});return function(){const v=this.LA(1);return d[v.tokenTypeIdx]===!0}}}return function(){const m=pu.call(this,o,u,em,a);return typeof m=="object"?!1:m===0}}}function tm(t,e=!0){const n=new Set;for(const r of t){const i=new Set;for(const s of r){if(s===void 0){if(e)break;return!1}const o=[s.tokenTypeIdx].concat(s.categoryMatches);for(const a of o)if(n.has(a)){if(!i.has(a))return!1}else n.add(a),i.add(a)}}return!0}function IP(t){const e=t.decisionStates.length,n=Array(e);for(let r=0;r<e;r++)n[r]=AP(t.decisionStates[r],r);return n}function pu(t,e,n,r){const i=t[e](n);let s=i.start;if(s===void 0){const a=BP(i.atnStartState);s=g_(i,m_(a)),i.start=s}return DP.apply(this,[i,s,n,r])}function DP(t,e,n,r){let i=e,s=1;const o=[];let a=this.LA(s++);for(;;){let l=HP(i,a);if(l===void 0&&(l=OP.apply(this,[t,i,a,s,n,r])),l===Il)return FP(o,i,a);if(l.isAcceptState===!0)return l.prediction;i=l,o.push(a),a=this.LA(s++)}}function OP(t,e,n,r,i,s){const o=jP(e.configs,n,i);if(o.size===0)return nm(t,e,n,Il),Il;let a=m_(o);const l=qP(o,i);if(l!==void 0)a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l;else if(zP(o)){const c=J$(o.alts);a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c,xP.apply(this,[t,r,o.alts,s])}return a=nm(t,e,n,a),a}function xP(t,e,n,r){const i=[];for(let c=1;c<=e;c++)i.push(this.LA(c).tokenType);const s=t.atnStartState,o=s.rule,a=s.production,l=LP({topLevelRule:o,ambiguityIndices:n,production:a,prefixPath:i});r(l)}function LP(t){const e=M(t.prefixPath,i=>Ir(i)).join(", "),n=t.production.idx===0?"":t.production.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${MP(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r}function MP(t){if(t instanceof ct)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof vt)return"OR";if(t instanceof $t)return"AT_LEAST_ONE";if(t instanceof Ct)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof $e)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}function FP(t,e,n){const r=kt(e.configs.elements,s=>s.state.transitions),i=aC(r.filter(s=>s instanceof Ph).map(s=>s.tokenType),s=>s.tokenTypeIdx);return{actualToken:n,possibleTokenTypes:i,tokenPath:t}}function HP(t,e){return t.edges[e.tokenTypeIdx]}function jP(t,e,n){const r=new Pd,i=[];for(const o of t.elements){if(n.is(o.alt)===!1)continue;if(o.state.type===Fs){i.push(o);continue}const a=o.state.transitions.length;for(let l=0;l<a;l++){const c=o.state.transitions[l],u=UP(c,e);u!==void 0&&r.add({state:u,alt:o.alt,stack:o.stack})}}let s;if(i.length===0&&r.size===1&&(s=r),s===void 0){s=new Pd;for(const o of r.elements)Dl(o,s)}if(i.length>0&&!WP(s))for(const o of i)s.add(o);return s}function UP(t,e){if(t instanceof Ph&&Uv(e,t.tokenType))return t.target}function qP(t,e){let n;for(const r of t.elements)if(e.is(r.alt)===!0){if(n===void 0)n=r.alt;else if(n!==r.alt)return}return n}function m_(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function nm(t,e,n,r){return r=g_(t,r),e.edges[n.tokenTypeIdx]=r,r}function g_(t,e){if(e===Il)return e;const n=e.configs.key,r=t.states[n];return r!==void 0?r:(e.configs.finalize(),t.states[n]=e,e)}function BP(t){const e=new Pd,n=t.transitions.length;for(let r=0;r<n;r++){const s={state:t.transitions[r].target,alt:r,stack:[]};Dl(s,e)}return e}function Dl(t,e){const n=t.state;if(n.type===Fs){if(t.stack.length>0){const i=[...t.stack],o={state:i.pop(),alt:t.alt,stack:i};Dl(o,e)}else e.add(t);return}n.epsilonOnlyTransitions||e.add(t);const r=n.transitions.length;for(let i=0;i<r;i++){const s=n.transitions[i],o=KP(t,s);o!==void 0&&Dl(o,e)}}function KP(t,e){if(e instanceof c_)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Ah){const n=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:n}}}function WP(t){for(const e of t.elements)if(e.state.type===Fs)return!0;return!1}function GP(t){for(const e of t.elements)if(e.state.type!==Fs)return!1;return!0}function zP(t){if(GP(t))return!0;const e=VP(t.elements);return YP(e)&&!XP(e)}function VP(t){const e=new Map;for(const n of t){const r=h_(n,!1);let i=e.get(r);i===void 0&&(i={},e.set(r,i)),i[n.alt]=!0}return e}function YP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function XP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var Ad;(function(t){function e(n){return typeof n=="string"}t.is=e})(Ad||(Ad={}));var Ol;(function(t){function e(n){return typeof n=="string"}t.is=e})(Ol||(Ol={}));var Nd;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Nd||(Nd={}));var fs;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(fs||(fs={}));var re;(function(t){function e(r,i){return r===Number.MAX_VALUE&&(r=fs.MAX_VALUE),i===Number.MAX_VALUE&&(i=fs.MAX_VALUE),{line:r,character:i}}t.create=e;function n(r){let i=r;return b.objectLiteral(i)&&b.uinteger(i.line)&&b.uinteger(i.character)}t.is=n})(re||(re={}));var Q;(function(t){function e(r,i,s,o){if(b.uinteger(r)&&b.uinteger(i)&&b.uinteger(s)&&b.uinteger(o))return{start:re.create(r,i),end:re.create(s,o)};if(re.is(r)&&re.is(i))return{start:r,end:i};throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`)}t.create=e;function n(r){let i=r;return b.objectLiteral(i)&&re.is(i.start)&&re.is(i.end)}t.is=n})(Q||(Q={}));var hs;(function(t){function e(r,i){return{uri:r,range:i}}t.create=e;function n(r){let i=r;return b.objectLiteral(i)&&Q.is(i.range)&&(b.string(i.uri)||b.undefined(i.uri))}t.is=n})(hs||(hs={}));var Id;(function(t){function e(r,i,s,o){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:o}}t.create=e;function n(r){let i=r;return b.objectLiteral(i)&&Q.is(i.targetRange)&&b.string(i.targetUri)&&Q.is(i.targetSelectionRange)&&(Q.is(i.originSelectionRange)||b.undefined(i.originSelectionRange))}t.is=n})(Id||(Id={}));var xl;(function(t){function e(r,i,s,o){return{red:r,green:i,blue:s,alpha:o}}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&b.numberRange(i.red,0,1)&&b.numberRange(i.green,0,1)&&b.numberRange(i.blue,0,1)&&b.numberRange(i.alpha,0,1)}t.is=n})(xl||(xl={}));var Dd;(function(t){function e(r,i){return{range:r,color:i}}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&Q.is(i.range)&&xl.is(i.color)}t.is=n})(Dd||(Dd={}));var Od;(function(t){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&b.string(i.label)&&(b.undefined(i.textEdit)||Bt.is(i))&&(b.undefined(i.additionalTextEdits)||b.typedArray(i.additionalTextEdits,Bt.is))}t.is=n})(Od||(Od={}));var xd;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(xd||(xd={}));var Ld;(function(t){function e(r,i,s,o,a,l){const c={startLine:r,endLine:i};return b.defined(s)&&(c.startCharacter=s),b.defined(o)&&(c.endCharacter=o),b.defined(a)&&(c.kind=a),b.defined(l)&&(c.collapsedText=l),c}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&b.uinteger(i.startLine)&&b.uinteger(i.startLine)&&(b.undefined(i.startCharacter)||b.uinteger(i.startCharacter))&&(b.undefined(i.endCharacter)||b.uinteger(i.endCharacter))&&(b.undefined(i.kind)||b.string(i.kind))}t.is=n})(Ld||(Ld={}));var Ll;(function(t){function e(r,i){return{location:r,message:i}}t.create=e;function n(r){let i=r;return b.defined(i)&&hs.is(i.location)&&b.string(i.message)}t.is=n})(Ll||(Ll={}));var Md;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Md||(Md={}));var Fd;(function(t){t.Unnecessary=1,t.Deprecated=2})(Fd||(Fd={}));var Hd;(function(t){function e(n){const r=n;return b.objectLiteral(r)&&b.string(r.href)}t.is=e})(Hd||(Hd={}));var ps;(function(t){function e(r,i,s,o,a,l){let c={range:r,message:i};return b.defined(s)&&(c.severity=s),b.defined(o)&&(c.code=o),b.defined(a)&&(c.source=a),b.defined(l)&&(c.relatedInformation=l),c}t.create=e;function n(r){var i;let s=r;return b.defined(s)&&Q.is(s.range)&&b.string(s.message)&&(b.number(s.severity)||b.undefined(s.severity))&&(b.integer(s.code)||b.string(s.code)||b.undefined(s.code))&&(b.undefined(s.codeDescription)||b.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(b.string(s.source)||b.undefined(s.source))&&(b.undefined(s.relatedInformation)||b.typedArray(s.relatedInformation,Ll.is))}t.is=n})(ps||(ps={}));var hr;(function(t){function e(r,i,...s){let o={title:r,command:i};return b.defined(s)&&s.length>0&&(o.arguments=s),o}t.create=e;function n(r){let i=r;return b.defined(i)&&b.string(i.title)&&b.string(i.command)}t.is=n})(hr||(hr={}));var Bt;(function(t){function e(s,o){return{range:s,newText:o}}t.replace=e;function n(s,o){return{range:{start:s,end:s},newText:o}}t.insert=n;function r(s){return{range:s,newText:""}}t.del=r;function i(s){const o=s;return b.objectLiteral(o)&&b.string(o.newText)&&Q.is(o.range)}t.is=i})(Bt||(Bt={}));var or;(function(t){function e(r,i,s){const o={label:r};return i!==void 0&&(o.needsConfirmation=i),s!==void 0&&(o.description=s),o}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&b.string(i.label)&&(b.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(b.string(i.description)||i.description===void 0)}t.is=n})(or||(or={}));var Xe;(function(t){function e(n){const r=n;return b.string(r)}t.is=e})(Xe||(Xe={}));var mn;(function(t){function e(s,o,a){return{range:s,newText:o,annotationId:a}}t.replace=e;function n(s,o,a){return{range:{start:s,end:s},newText:o,annotationId:a}}t.insert=n;function r(s,o){return{range:s,newText:"",annotationId:o}}t.del=r;function i(s){const o=s;return Bt.is(o)&&(or.is(o.annotationId)||Xe.is(o.annotationId))}t.is=i})(mn||(mn={}));var ms;(function(t){function e(r,i){return{textDocument:r,edits:i}}t.create=e;function n(r){let i=r;return b.defined(i)&&gs.is(i.textDocument)&&Array.isArray(i.edits)}t.is=n})(ms||(ms={}));var Hr;(function(t){function e(r,i,s){let o={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="create"&&b.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Hr||(Hr={}));var jr;(function(t){function e(r,i,s,o){let a={kind:"rename",oldUri:r,newUri:i};return s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)&&(a.options=s),o!==void 0&&(a.annotationId=o),a}t.create=e;function n(r){let i=r;return i&&i.kind==="rename"&&b.string(i.oldUri)&&b.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||b.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||b.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(jr||(jr={}));var Ur;(function(t){function e(r,i,s){let o={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="delete"&&b.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||b.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||b.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Ur||(Ur={}));var Ml;(function(t){function e(n){let r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i=>b.string(i.kind)?Hr.is(i)||jr.is(i)||Ur.is(i):ms.is(i)))}t.is=e})(Ml||(Ml={}));class wo{constructor(e,n){this.edits=e,this.changeAnnotations=n}insert(e,n,r){let i,s;if(r===void 0?i=Bt.insert(e,n):Xe.is(r)?(s=r,i=mn.insert(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.insert(e,n,s)),this.edits.push(i),s!==void 0)return s}replace(e,n,r){let i,s;if(r===void 0?i=Bt.replace(e,n):Xe.is(r)?(s=r,i=mn.replace(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.replace(e,n,s)),this.edits.push(i),s!==void 0)return s}delete(e,n){let r,i;if(n===void 0?r=Bt.del(e):Xe.is(n)?(i=n,r=mn.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=mn.del(e,i)),this.edits.push(r),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}}class rm{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,n){let r;if(Xe.is(e)?r=e:(r=this.nextId(),n=e),this._annotations[r]!==void 0)throw new Error(`Id ${r} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${r}`);return this._annotations[r]=n,this._size++,r}nextId(){return this._counter++,this._counter.toString()}}class JP{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new rm(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(n=>{if(ms.is(n)){const r=new wo(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach(n=>{const r=new wo(e.changes[n]);this._textEditChanges[n]=r})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(gs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");const n={uri:e.uri,version:e.version};let r=this._textEditChanges[n.uri];if(!r){const i=[],s={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(s),r=new wo(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[e];if(!n){let r=[];this._workspaceEdit.changes[e]=r,n=new wo(r),this._textEditChanges[e]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new rm,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;or.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Hr.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=Hr.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}renameFile(e,n,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let s;or.is(r)||Xe.is(r)?s=r:i=r;let o,a;if(s===void 0?o=jr.create(e,n,i):(a=Xe.is(s)?s:this._changeAnnotations.manage(s),o=jr.create(e,n,i,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a}deleteFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;or.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Ur.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=Ur.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}}var jd;(function(t){function e(r){return{uri:r}}t.create=e;function n(r){let i=r;return b.defined(i)&&b.string(i.uri)}t.is=n})(jd||(jd={}));var Ud;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return b.defined(i)&&b.string(i.uri)&&b.integer(i.version)}t.is=n})(Ud||(Ud={}));var gs;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return b.defined(i)&&b.string(i.uri)&&(i.version===null||b.integer(i.version))}t.is=n})(gs||(gs={}));var qd;(function(t){function e(r,i,s,o){return{uri:r,languageId:i,version:s,text:o}}t.create=e;function n(r){let i=r;return b.defined(i)&&b.string(i.uri)&&b.string(i.languageId)&&b.integer(i.version)&&b.string(i.text)}t.is=n})(qd||(qd={}));var Fl;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(n){const r=n;return r===t.PlainText||r===t.Markdown}t.is=e})(Fl||(Fl={}));var qr;(function(t){function e(n){const r=n;return b.objectLiteral(n)&&Fl.is(r.kind)&&b.string(r.value)}t.is=e})(qr||(qr={}));var Bd;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Bd||(Bd={}));var Kd;(function(t){t.PlainText=1,t.Snippet=2})(Kd||(Kd={}));var Wd;(function(t){t.Deprecated=1})(Wd||(Wd={}));var Gd;(function(t){function e(r,i,s){return{newText:r,insert:i,replace:s}}t.create=e;function n(r){const i=r;return i&&b.string(i.newText)&&Q.is(i.insert)&&Q.is(i.replace)}t.is=n})(Gd||(Gd={}));var zd;(function(t){t.asIs=1,t.adjustIndentation=2})(zd||(zd={}));var Vd;(function(t){function e(n){const r=n;return r&&(b.string(r.detail)||r.detail===void 0)&&(b.string(r.description)||r.description===void 0)}t.is=e})(Vd||(Vd={}));var Yd;(function(t){function e(n){return{label:n}}t.create=e})(Yd||(Yd={}));var Xd;(function(t){function e(n,r){return{items:n||[],isIncomplete:!!r}}t.create=e})(Xd||(Xd={}));var ys;(function(t){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function n(r){const i=r;return b.string(i)||b.objectLiteral(i)&&b.string(i.language)&&b.string(i.value)}t.is=n})(ys||(ys={}));var Jd;(function(t){function e(n){let r=n;return!!r&&b.objectLiteral(r)&&(qr.is(r.contents)||ys.is(r.contents)||b.typedArray(r.contents,ys.is))&&(n.range===void 0||Q.is(n.range))}t.is=e})(Jd||(Jd={}));var Qd;(function(t){function e(n,r){return r?{label:n,documentation:r}:{label:n}}t.create=e})(Qd||(Qd={}));var Zd;(function(t){function e(n,r,...i){let s={label:n};return b.defined(r)&&(s.documentation=r),b.defined(i)?s.parameters=i:s.parameters=[],s}t.create=e})(Zd||(Zd={}));var ef;(function(t){t.Text=1,t.Read=2,t.Write=3})(ef||(ef={}));var tf;(function(t){function e(n,r){let i={range:n};return b.number(r)&&(i.kind=r),i}t.create=e})(tf||(tf={}));var nf;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(nf||(nf={}));var rf;(function(t){t.Deprecated=1})(rf||(rf={}));var sf;(function(t){function e(n,r,i,s,o){let a={name:n,kind:r,location:{uri:s,range:i}};return o&&(a.containerName=o),a}t.create=e})(sf||(sf={}));var of;(function(t){function e(n,r,i,s){return s!==void 0?{name:n,kind:r,location:{uri:i,range:s}}:{name:n,kind:r,location:{uri:i}}}t.create=e})(of||(of={}));var af;(function(t){function e(r,i,s,o,a,l){let c={name:r,detail:i,kind:s,range:o,selectionRange:a};return l!==void 0&&(c.children=l),c}t.create=e;function n(r){let i=r;return i&&b.string(i.name)&&b.number(i.kind)&&Q.is(i.range)&&Q.is(i.selectionRange)&&(i.detail===void 0||b.string(i.detail))&&(i.deprecated===void 0||b.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=n})(af||(af={}));var lf;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(lf||(lf={}));var vs;(function(t){t.Invoked=1,t.Automatic=2})(vs||(vs={}));var cf;(function(t){function e(r,i,s){let o={diagnostics:r};return i!=null&&(o.only=i),s!=null&&(o.triggerKind=s),o}t.create=e;function n(r){let i=r;return b.defined(i)&&b.typedArray(i.diagnostics,ps.is)&&(i.only===void 0||b.typedArray(i.only,b.string))&&(i.triggerKind===void 0||i.triggerKind===vs.Invoked||i.triggerKind===vs.Automatic)}t.is=n})(cf||(cf={}));var uf;(function(t){function e(r,i,s){let o={title:r},a=!0;return typeof i=="string"?(a=!1,o.kind=i):hr.is(i)?o.command=i:o.edit=i,a&&s!==void 0&&(o.kind=s),o}t.create=e;function n(r){let i=r;return i&&b.string(i.title)&&(i.diagnostics===void 0||b.typedArray(i.diagnostics,ps.is))&&(i.kind===void 0||b.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||hr.is(i.command))&&(i.isPreferred===void 0||b.boolean(i.isPreferred))&&(i.edit===void 0||Ml.is(i.edit))}t.is=n})(uf||(uf={}));var df;(function(t){function e(r,i){let s={range:r};return b.defined(i)&&(s.data=i),s}t.create=e;function n(r){let i=r;return b.defined(i)&&Q.is(i.range)&&(b.undefined(i.command)||hr.is(i.command))}t.is=n})(df||(df={}));var ff;(function(t){function e(r,i){return{tabSize:r,insertSpaces:i}}t.create=e;function n(r){let i=r;return b.defined(i)&&b.uinteger(i.tabSize)&&b.boolean(i.insertSpaces)}t.is=n})(ff||(ff={}));var hf;(function(t){function e(r,i,s){return{range:r,target:i,data:s}}t.create=e;function n(r){let i=r;return b.defined(i)&&Q.is(i.range)&&(b.undefined(i.target)||b.string(i.target))}t.is=n})(hf||(hf={}));var pf;(function(t){function e(r,i){return{range:r,parent:i}}t.create=e;function n(r){let i=r;return b.objectLiteral(i)&&Q.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=n})(pf||(pf={}));var mf;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(mf||(mf={}));var gf;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(gf||(gf={}));var yf;(function(t){function e(n){const r=n;return b.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}t.is=e})(yf||(yf={}));var vf;(function(t){function e(r,i){return{range:r,text:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&b.string(i.text)}t.is=n})(vf||(vf={}));var _f;(function(t){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&b.boolean(i.caseSensitiveLookup)&&(b.string(i.variableName)||i.variableName===void 0)}t.is=n})(_f||(_f={}));var Tf;(function(t){function e(r,i){return{range:r,expression:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&(b.string(i.expression)||i.expression===void 0)}t.is=n})(Tf||(Tf={}));var Rf;(function(t){function e(r,i){return{frameId:r,stoppedLocation:i}}t.create=e;function n(r){const i=r;return b.defined(i)&&Q.is(r.stoppedLocation)}t.is=n})(Rf||(Rf={}));var Hl;(function(t){t.Type=1,t.Parameter=2;function e(n){return n===1||n===2}t.is=e})(Hl||(Hl={}));var jl;(function(t){function e(r){return{value:r}}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&(i.tooltip===void 0||b.string(i.tooltip)||qr.is(i.tooltip))&&(i.location===void 0||hs.is(i.location))&&(i.command===void 0||hr.is(i.command))}t.is=n})(jl||(jl={}));var wf;(function(t){function e(r,i,s){const o={position:r,label:i};return s!==void 0&&(o.kind=s),o}t.create=e;function n(r){const i=r;return b.objectLiteral(i)&&re.is(i.position)&&(b.string(i.label)||b.typedArray(i.label,jl.is))&&(i.kind===void 0||Hl.is(i.kind))&&i.textEdits===void 0||b.typedArray(i.textEdits,Bt.is)&&(i.tooltip===void 0||b.string(i.tooltip)||qr.is(i.tooltip))&&(i.paddingLeft===void 0||b.boolean(i.paddingLeft))&&(i.paddingRight===void 0||b.boolean(i.paddingRight))}t.is=n})(wf||(wf={}));var kf;(function(t){function e(n){return{kind:"snippet",value:n}}t.createSnippet=e})(kf||(kf={}));var bf;(function(t){function e(n,r,i,s){return{insertText:n,filterText:r,range:i,command:s}}t.create=e})(bf||(bf={}));var Sf;(function(t){function e(n){return{items:n}}t.create=e})(Sf||(Sf={}));var $f;(function(t){t.Invoked=0,t.Automatic=1})($f||($f={}));var Cf;(function(t){function e(n,r){return{range:n,text:r}}t.create=e})(Cf||(Cf={}));var Ef;(function(t){function e(n,r){return{triggerKind:n,selectedCompletionInfo:r}}t.create=e})(Ef||(Ef={}));var Pf;(function(t){function e(n){const r=n;return b.objectLiteral(r)&&Ol.is(r.uri)&&b.string(r.name)}t.is=e})(Pf||(Pf={}));const QP=[`
`,`\r
`,"\r"];var Af;(function(t){function e(s,o,a,l){return new ZP(s,o,a,l)}t.create=e;function n(s){let o=s;return!!(b.defined(o)&&b.string(o.uri)&&(b.undefined(o.languageId)||b.string(o.languageId))&&b.uinteger(o.lineCount)&&b.func(o.getText)&&b.func(o.positionAt)&&b.func(o.offsetAt))}t.is=n;function r(s,o){let a=s.getText(),l=i(o,(u,f)=>{let m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m}),c=a.length;for(let u=l.length-1;u>=0;u--){let f=l[u],m=s.offsetAt(f.range.start),g=s.offsetAt(f.range.end);if(g<=c)a=a.substring(0,m)+f.newText+a.substring(g,a.length);else throw new Error("Overlapping edit");c=m}return a}t.applyEdits=r;function i(s,o){if(s.length<=1)return s;const a=s.length/2|0,l=s.slice(0,a),c=s.slice(a);i(l,o),i(c,o);let u=0,f=0,m=0;for(;u<l.length&&f<c.length;)o(l[u],c[f])<=0?s[m++]=l[u++]:s[m++]=c[f++];for(;u<l.length;)s[m++]=l[u++];for(;f<c.length;)s[m++]=c[f++];return s}})(Af||(Af={}));let ZP=class{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],n=this._content,r=!0;for(let i=0;i<n.length;i++){r&&(e.push(i),r=!1);let s=n.charAt(i);r=s==="\r"||s===`
`,s==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}r&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let n=this.getLineOffsets(),r=0,i=n.length;if(i===0)return re.create(0,e);for(;r<i;){let o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}let s=r-1;return re.create(s,e-n[s])}offsetAt(e){let n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;let r=n[e.line],i=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,i),r)}get lineCount(){return this.getLineOffsets().length}};var b;(function(t){const e=Object.prototype.toString;function n(g){return typeof g<"u"}t.defined=n;function r(g){return typeof g>"u"}t.undefined=r;function i(g){return g===!0||g===!1}t.boolean=i;function s(g){return e.call(g)==="[object String]"}t.string=s;function o(g){return e.call(g)==="[object Number]"}t.number=o;function a(g,d,v){return e.call(g)==="[object Number]"&&d<=g&&g<=v}t.numberRange=a;function l(g){return e.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}t.integer=l;function c(g){return e.call(g)==="[object Number]"&&0<=g&&g<=2147483647}t.uinteger=c;function u(g){return e.call(g)==="[object Function]"}t.func=u;function f(g){return g!==null&&typeof g=="object"}t.objectLiteral=f;function m(g,d){return Array.isArray(g)&&g.every(d)}t.typedArray=m})(b||(b={}));var eA=Object.freeze({__proto__:null,get AnnotatedTextEdit(){return mn},get ChangeAnnotation(){return or},get ChangeAnnotationIdentifier(){return Xe},get CodeAction(){return uf},get CodeActionContext(){return cf},get CodeActionKind(){return lf},get CodeActionTriggerKind(){return vs},get CodeDescription(){return Hd},get CodeLens(){return df},get Color(){return xl},get ColorInformation(){return Dd},get ColorPresentation(){return Od},get Command(){return hr},get CompletionItem(){return Yd},get CompletionItemKind(){return Bd},get CompletionItemLabelDetails(){return Vd},get CompletionItemTag(){return Wd},get CompletionList(){return Xd},get CreateFile(){return Hr},get DeleteFile(){return Ur},get Diagnostic(){return ps},get DiagnosticRelatedInformation(){return Ll},get DiagnosticSeverity(){return Md},get DiagnosticTag(){return Fd},get DocumentHighlight(){return tf},get DocumentHighlightKind(){return ef},get DocumentLink(){return hf},get DocumentSymbol(){return af},get DocumentUri(){return Ad},EOL:QP,get FoldingRange(){return Ld},get FoldingRangeKind(){return xd},get FormattingOptions(){return ff},get Hover(){return Jd},get InlayHint(){return wf},get InlayHintKind(){return Hl},get InlayHintLabelPart(){return jl},get InlineCompletionContext(){return Ef},get InlineCompletionItem(){return bf},get InlineCompletionList(){return Sf},get InlineCompletionTriggerKind(){return $f},get InlineValueContext(){return Rf},get InlineValueEvaluatableExpression(){return Tf},get InlineValueText(){return vf},get InlineValueVariableLookup(){return _f},get InsertReplaceEdit(){return Gd},get InsertTextFormat(){return Kd},get InsertTextMode(){return zd},get Location(){return hs},get LocationLink(){return Id},get MarkedString(){return ys},get MarkupContent(){return qr},get MarkupKind(){return Fl},get OptionalVersionedTextDocumentIdentifier(){return gs},get ParameterInformation(){return Qd},get Position(){return re},get Range(){return Q},get RenameFile(){return jr},get SelectedCompletionInfo(){return Cf},get SelectionRange(){return pf},get SemanticTokenModifiers(){return gf},get SemanticTokenTypes(){return mf},get SemanticTokens(){return yf},get SignatureInformation(){return Zd},get StringValue(){return kf},get SymbolInformation(){return sf},get SymbolKind(){return nf},get SymbolTag(){return rf},get TextDocument(){return Af},get TextDocumentEdit(){return ms},get TextDocumentIdentifier(){return jd},get TextDocumentItem(){return qd},get TextEdit(){return Bt},get URI(){return Ol},get VersionedTextDocumentIdentifier(){return Ud},WorkspaceChange:JP,get WorkspaceEdit(){return Ml},get WorkspaceFolder(){return Pf},get WorkspaceSymbol(){return of},get integer(){return Nd},get uinteger(){return fs}});class tA{constructor(){this.nodeStack=[]}get current(){var e;return(e=this.nodeStack[this.nodeStack.length-1])!==null&&e!==void 0?e:this.rootNode}buildRootNode(e){return this.rootNode=new v_(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){const n=new Dh;return n.grammarSource=e,n.root=this.rootNode,this.current.content.push(n),this.nodeStack.push(n),n}buildLeafNode(e,n){const r=new Nf(e.startOffset,e.image.length,dd(e),e.tokenType,!n);return r.grammarSource=n,r.root=this.rootNode,this.current.content.push(r),r}removeNode(e){const n=e.container;if(n){const r=n.content.indexOf(e);r>=0&&n.content.splice(r,1)}}addHiddenNodes(e){const n=[];for(const s of e){const o=new Nf(s.startOffset,s.image.length,dd(s),s.tokenType,!0);o.root=this.rootNode,n.push(o)}let r=this.current,i=!1;if(r.content.length>0){r.content.push(...n);return}for(;r.container;){const s=r.container.content.indexOf(r);if(s>0){r.container.content.splice(s,0,...n),i=!0;break}r=r.container}i||this.rootNode.content.unshift(...n)}construct(e){const n=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=n;const r=this.nodeStack.pop();(r==null?void 0:r.content.length)===0&&this.removeNode(r)}}class y_{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,n;const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(n=this.container)===null||n===void 0?void 0:n.astNode;if(!r)throw new Error("This node has no associated AST element");return r}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class Nf extends y_{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,n,r,i,s=!1){super(),this._hidden=s,this._offset=e,this._tokenType=i,this._length=n,this._range=r}}class Dh extends y_{constructor(){super(...arguments),this.content=new Oh(this)}get children(){return this.content}get offset(){var e,n;return(n=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&n!==void 0?n:0}get length(){return this.end-this.offset}get end(){var e,n;return(n=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&n!==void 0?n:0}get range(){const e=this.firstNonHiddenNode,n=this.lastNonHiddenNode;if(e&&n){if(this._rangeCache===void 0){const{range:r}=e,{range:i}=n;this._rangeCache={start:r.start,end:i.end.line<r.start.line?r.start:i.end}}return this._rangeCache}else return{start:re.create(0,0),end:re.create(0,0)}}get firstNonHiddenNode(){for(const e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const n=this.content[e];if(!n.hidden)return n}return this.content[this.content.length-1]}}class Oh extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Oh.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,n,...r){return this.addParents(r),super.splice(e,n,...r)}addParents(e){for(const n of e)n.container=this.parent}}class v_ extends Dh{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}}const If=Symbol("Datatype");function mu(t){return t.$type===If}const im="​",__=t=>t.endsWith(im)?t:t+im;class T_{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;const n=this.lexer.definition,r=e.LanguageMetaData.mode==="production";this.wrapper=new oA(n,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,n){this.wrapper.wrapOr(e,n)}optional(e,n){this.wrapper.wrapOption(e,n)}many(e,n){this.wrapper.wrapMany(e,n)}atLeastOne(e,n){this.wrapper.wrapAtLeastOne(e,n)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class nA extends T_{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new tA,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,n){const r=this.computeRuleType(e),i=this.wrapper.DEFINE_RULE(__(e.name),this.startImplementation(r,n).bind(this));return this.allRules.set(e.name,i),e.entry&&(this.mainRule=i),i}computeRuleType(e){if(!e.fragment){if(Vy(e))return If;{const n=Cs(e);return n??e.name}}}parse(e,n={}){this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=n.rule?this.allRules.get(n.rule):this.mainRule;if(!i)throw new Error(n.rule?`No rule found with name '${n.rule}'`:"No main rule available.");const s=this.doParse(i);return this.nodeBuilder.addHiddenNodes(r.hidden),this.unorderedGroups.clear(),this.lexerResult=void 0,{value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors}}doParse(e){let n=e.call(this.wrapper,{});if(this.stack.length>0&&(n=this.construct()),n===void 0)throw new Error("No result from parser");if(this.stack.length>0)throw new Error("Parser stack is not empty after parsing");return n}startImplementation(e,n){return r=>{const i=!this.isRecording()&&e!==void 0;if(i){const s={$type:e};this.stack.push(s),e===If&&(s.value="")}return n(r),i?this.construct():void 0}}extractHiddenTokens(e){const n=this.lexerResult.hidden;if(!n.length)return[];const r=e.startOffset;for(let i=0;i<n.length;i++)if(n[i].startOffset>r)return n.splice(0,i);return n.splice(0,n.length)}consume(e,n,r){const i=this.wrapper.wrapConsume(e,n);if(!this.isRecording()&&this.isValidToken(i)){const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);const o=this.nodeBuilder.buildLeafNode(i,r),{assignment:a,isCrossRef:l}=this.getAssignment(r),c=this.current;if(a){const u=Dt(r)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,u,o,l)}else if(mu(c)){let u=i.image;Dt(r)||(u=this.converter.convert(u,o).toString()),c.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,n,r,i,s){let o;!this.isRecording()&&!r&&(o=this.nodeBuilder.buildCompositeNode(i));let a;try{a=this.wrapper.wrapSubrule(e,n,s)}finally{this.isRecording()||(a===void 0&&!r&&(a=this.construct()),a!==void 0&&o&&o.length>0&&this.performSubruleAssignment(a,i,o))}}performSubruleAssignment(e,n,r){const{assignment:i,isCrossRef:s}=this.getAssignment(n);if(i)this.assign(i.operator,i.feature,e,r,s);else if(!i){const o=this.current;if(mu(o))o.value+=e.toString();else if(typeof e=="object"&&e){const l=this.assignWithoutOverride(e,o);this.stack.pop(),this.stack.push(l)}}}action(e,n){if(!this.isRecording()){let r=this.current;if(n.feature&&n.operator){r=this.construct(),this.nodeBuilder.removeNode(r.$cstNode),this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);const s={$type:e};this.stack.push(s),this.assign(n.operator,n.feature,r,r.$cstNode,!1)}else r.$type=e}}construct(){if(this.isRecording())return;const e=this.current;return rR(e),this.nodeBuilder.construct(e),this.stack.pop(),mu(e)?this.converter.convert(e.value,e.$cstNode):(Ly(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){const n=On(e,rn);this.assignmentMap.set(e,{assignment:n,isCrossRef:n?$s(n.terminal):!1})}return this.assignmentMap.get(e)}assign(e,n,r,i,s){const o=this.current;let a;switch(s&&typeof r=="string"?a=this.linker.buildReference(o,n,i,r):a=r,e){case"=":{o[n]=a;break}case"?=":{o[n]=!0;break}case"+=":Array.isArray(o[n])||(o[n]=[]),o[n].push(a)}}assignWithoutOverride(e,n){for(const[i,s]of Object.entries(n)){const o=e[i];o===void 0?e[i]=s:Array.isArray(o)&&Array.isArray(s)&&(s.push(...o),e[i]=s)}const r=e.$cstNode;return r&&(r.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}}class rA{buildMismatchTokenMessage(e){return Ar.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Ar.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Ar.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Ar.buildEarlyExitMessage(e)}}class R_ extends rA{buildMismatchTokenMessage({expected:e,actual:n}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${n.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}}class iA extends T_{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();const n=this.lexer.tokenize(e,{mode:"partial"});return this.tokens=n.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,n){const r=this.wrapper.DEFINE_RULE(__(e.name),this.startImplementation(n).bind(this));return this.allRules.set(e.name,r),e.entry&&(this.mainRule=r),r}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return n=>{const r=this.keepStackSize();try{e(n)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){const e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,n,r){this.wrapper.wrapConsume(e,n),this.isRecording()||(this.lastElementStack=[...this.elementStack,r],this.nextTokenIndex=this.currIdx+1)}subrule(e,n,r,i,s){this.before(i),this.wrapper.wrapSubrule(e,n,s),this.after(i)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){const n=this.elementStack.lastIndexOf(e);n>=0&&this.elementStack.splice(n)}}get currIdx(){return this.wrapper.currIdx}}const sA={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new R_};class oA extends uP{constructor(e,n){const r=n&&"maxLookahead"in n;super(e,Object.assign(Object.assign(Object.assign({},sA),{lookaheadStrategy:r?new Ch({maxLookahead:n.maxLookahead}):new NP({logging:n.skipValidations?()=>{}:void 0})}),n))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,n,r){return this.RULE(e,n,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,n){return this.consume(e,n,void 0)}wrapSubrule(e,n,r){return this.subrule(e,n,{ARGS:[r]})}wrapOr(e,n){this.or(e,n)}wrapOption(e,n){this.option(e,n)}wrapMany(e,n){this.many(e,n)}wrapAtLeastOne(e,n){this.atLeastOne(e,n)}}function w_(t,e,n){return aA({parser:e,tokens:n,ruleNames:new Map},t),e}function aA(t,e){const n=jy(e,!1),r=Re(e.rules).filter(it).filter(i=>n.has(i));for(const i of r){const s=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(i,pr(s,i.definition))}}function pr(t,e,n=!1){let r;if(Dt(e))r=pA(t,e);else if(Ss(e))r=lA(t,e);else if(rn(e))r=pr(t,e.terminal);else if($s(e))r=k_(t,e);else if(Rn(e))r=cA(t,e);else if(eh(e))r=dA(t,e);else if(th(e))r=fA(t,e);else if(cr(e))r=hA(t,e);else if(YT(e)){const i=t.consume++;r=()=>t.parser.consume(i,Gn,e)}else throw new Py(e.$cstNode,`Unexpected element type: ${e.$type}`);return b_(t,n?void 0:Ul(e),r,e.cardinality)}function lA(t,e){const n=ac(e);return()=>t.parser.action(n,e)}function cA(t,e){const n=e.rule.ref;if(it(n)){const r=t.subrule++,i=n.fragment,s=e.arguments.length>0?uA(n,e.arguments):()=>({});return o=>t.parser.subrule(r,S_(t,n),i,e,s(o))}else if(Xn(n)){const r=t.consume++,i=Df(t,n.name);return()=>t.parser.consume(r,i,e)}else if(n)bs();else throw new Py(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)}function uA(t,e){const n=e.map(r=>gn(r.value));return r=>{const i={};for(let s=0;s<n.length;s++){const o=t.parameters[s],a=n[s];i[o.name]=a(r)}return i}}function gn(t){if(BT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)||n(r)}else if(qT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)&&n(r)}else if(KT(t)){const e=gn(t.value);return n=>!e(n)}else if(WT(t)){const e=t.parameter.ref.name;return n=>n!==void 0&&n[e]===!0}else if(UT(t)){const e=!!t.true;return()=>e}bs()}function dA(t,e){if(e.elements.length===1)return pr(t,e.elements[0]);{const n=[];for(const i of e.elements){const s={ALT:pr(t,i,!0)},o=Ul(i);o&&(s.GATE=gn(o)),n.push(s)}const r=t.or++;return i=>t.parser.alternatives(r,n.map(s=>{const o={ALT:()=>s.ALT(i)},a=s.GATE;return a&&(o.GATE=()=>a(i)),o}))}}function fA(t,e){if(e.elements.length===1)return pr(t,e.elements[0]);const n=[];for(const a of e.elements){const l={ALT:pr(t,a,!0)},c=Ul(a);c&&(l.GATE=gn(c)),n.push(l)}const r=t.or++,i=(a,l)=>{const c=l.getRuleStack().join("-");return`uGroup_${a}_${c}`},s=a=>t.parser.alternatives(r,n.map((l,c)=>{const u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(l.ALT(a),!f.isRecording()){const g=i(r,f);f.unorderedGroups.get(g)||f.unorderedGroups.set(g,[]);const d=f.unorderedGroups.get(g);typeof(d==null?void 0:d[c])>"u"&&(d[c]=!0)}};const m=l.GATE;return m?u.GATE=()=>m(a):u.GATE=()=>{const g=f.unorderedGroups.get(i(r,f));return!(g!=null&&g[c])},u})),o=b_(t,Ul(e),s,"*");return a=>{o(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(r,t.parser))}}function hA(t,e){const n=e.elements.map(r=>pr(t,r));return r=>n.forEach(i=>i(r))}function Ul(t){if(cr(t))return t.guardCondition}function k_(t,e,n=e.terminal){if(n)if(Rn(n)&&it(n.rule.ref)){const r=n.rule.ref,i=t.subrule++;return s=>t.parser.subrule(i,S_(t,r),!1,e,s)}else if(Rn(n)&&Xn(n.rule.ref)){const r=t.consume++,i=Df(t,n.rule.ref.name);return()=>t.parser.consume(r,i,e)}else if(Dt(n)){const r=t.consume++,i=Df(t,n.value);return()=>t.parser.consume(r,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);const r=Gy(e.type.ref),i=r==null?void 0:r.terminal;if(!i)throw new Error("Could not find name assignment for type: "+ac(e.type.ref));return k_(t,e,i)}}function pA(t,e){const n=t.consume++,r=t.tokens[e.value];if(!r)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(n,r,e)}function b_(t,e,n,r){const i=e&&gn(e);if(!r)if(i){const s=t.or++;return o=>t.parser.alternatives(s,[{ALT:()=>n(o),GATE:()=>i(o)},{ALT:Zp(),GATE:()=>!i(o)}])}else return n;if(r==="*"){const s=t.many++;return o=>t.parser.many(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else if(r==="+"){const s=t.many++;if(i){const o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>t.parser.atLeastOne(s,{DEF:()=>n(a)}),GATE:()=>i(a)},{ALT:Zp(),GATE:()=>!i(a)}])}else return o=>t.parser.atLeastOne(s,{DEF:()=>n(o)})}else if(r==="?"){const s=t.optional++;return o=>t.parser.optional(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else bs()}function S_(t,e){const n=mA(t,e),r=t.parser.getRule(n);if(!r)throw new Error(`Rule "${n}" not found."`);return r}function mA(t,e){if(it(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let n=e,r=n.$container,i=e.$type;for(;!it(r);)(cr(r)||eh(r)||th(r))&&(i=r.elements.indexOf(n).toString()+":"+i),n=r,r=r.$container;return i=r.name+":"+i,t.ruleNames.set(e,i),i}}function Df(t,e){const n=t.tokens[e];if(!n)throw new Error(`Token "${e}" not found."`);return n}function gA(t){const e=t.Grammar,n=t.parser.Lexer,r=new iA(t);return w_(e,r,n.definition),r.finalize(),r}function yA(t){const e=vA(t);return e.finalize(),e}function vA(t){const e=t.Grammar,n=t.parser.Lexer,r=new nA(t);return w_(e,r,n.definition)}class _A{constructor(){this.diagnostics=[]}buildTokens(e,n){const r=Re(jy(e,!1)),i=this.buildTerminalTokens(r),s=this.buildKeywordTokens(r,i,n);return s.push(...i),s}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){const e=[...this.diagnostics];return this.diagnostics=[],e}buildTerminalTokens(e){return e.filter(Xn).filter(n=>!n.fragment).map(n=>this.buildTerminalToken(n)).toArray()}buildTerminalToken(e){const n=lc(e),r=this.requiresCustomPattern(n)?this.regexPatternFunction(n):n,i={name:e.name,PATTERN:r};return typeof r=="function"&&(i.LINE_BREAKS=!0),e.hidden&&(i.GROUP=Hy(n)?pt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){const n=new RegExp(e,e.flags+"y");return(r,i)=>(n.lastIndex=i,n.exec(r))}buildKeywordTokens(e,n,r){return e.filter(it).flatMap(i=>tn(i).filter(Dt)).distinct(i=>i.value).toArray().sort((i,s)=>s.value.length-i.value.length).map(i=>this.buildKeywordToken(i,n,!!(r!=null&&r.caseInsensitive)))}buildKeywordToken(e,n,r){const i=this.buildKeywordPattern(e,r),s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,n)};return typeof i=="function"&&(s.LINE_BREAKS=!0),s}buildKeywordPattern(e,n){return n?new RegExp(oc(e.value),"i"):e.value}findLongerAlt(e,n){return n.reduce((r,i)=>{const s=i==null?void 0:i.PATTERN;return s!=null&&s.source&&fR("^"+s.source+"$",e.value)&&r.push(i),r},[])}}class TA{convert(e,n){let r=n.grammarSource;if($s(r)&&(r=qy(r)),Rn(r)){const i=r.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,n)}return e}runConverter(e,n,r){var i;switch(e.name.toUpperCase()){case"INT":return hn.convertInt(n);case"STRING":return hn.convertString(n);case"ID":return hn.convertID(n)}switch((i=TR(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return hn.convertNumber(n);case"boolean":return hn.convertBoolean(n);case"bigint":return hn.convertBigint(n);case"date":return hn.convertDate(n);default:return n}}}var hn;(function(t){function e(c){let u="";for(let f=1;f<c.length-1;f++){const m=c.charAt(f);if(m==="\\"){const g=c.charAt(++f);u+=n(g)}else u+=m}return u}t.convertString=e;function n(c){switch(c){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return c}}function r(c){return c.charAt(0)==="^"?c.substring(1):c}t.convertID=r;function i(c){return parseInt(c)}t.convertInt=i;function s(c){return BigInt(c)}t.convertBigint=s;function o(c){return new Date(c)}t.convertDate=o;function a(c){return Number(c)}t.convertNumber=a;function l(c){return c.toLowerCase()==="true"}t.convertBoolean=l})(hn||(hn={}));var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function RA(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Vn={},An={};Object.defineProperty(An,"__esModule",{value:!0});let Of;function xf(){if(Of===void 0)throw new Error("No runtime abstraction layer installed");return Of}(function(t){function e(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");Of=n}t.install=e})(xf||(xf={}));An.default=xf;var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.stringArray=Fe.array=Fe.func=Fe.error=Fe.number=Fe.string=Fe.boolean=void 0;function wA(t){return t===!0||t===!1}Fe.boolean=wA;function $_(t){return typeof t=="string"||t instanceof String}Fe.string=$_;function kA(t){return typeof t=="number"||t instanceof Number}Fe.number=kA;function bA(t){return t instanceof Error}Fe.error=bA;function SA(t){return typeof t=="function"}Fe.func=SA;function C_(t){return Array.isArray(t)}Fe.array=C_;function $A(t){return C_(t)&&t.every(e=>$_(e))}Fe.stringArray=$A;var on={};Object.defineProperty(on,"__esModule",{value:!0});var E_=on.Emitter=on.Event=void 0;const CA=An;var sm;(function(t){const e={dispose(){}};t.None=function(){return e}})(sm||(on.Event=sm={}));class EA{add(e,n=null,r){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(n),Array.isArray(r)&&r.push({dispose:()=>this.remove(e,n)})}remove(e,n=null){if(!this._callbacks)return;let r=!1;for(let i=0,s=this._callbacks.length;i<s;i++)if(this._callbacks[i]===e)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else r=!0;if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];const n=[],r=this._callbacks.slice(0),i=this._contexts.slice(0);for(let s=0,o=r.length;s<o;s++)try{n.push(r[s].apply(i[s],e))}catch(a){(0,CA.default)().console.error(a)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}}class Cc{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,n,r)=>{this._callbacks||(this._callbacks=new EA),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,n);const i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,n),i.dispose=Cc._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}}E_=on.Emitter=Cc;Cc._noop=function(){};var le;Object.defineProperty(Vn,"__esModule",{value:!0});var xh=Vn.CancellationTokenSource=le=Vn.CancellationToken=void 0;const PA=An,AA=Fe,Lf=on;var ql;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Lf.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Lf.Event.None});function e(n){const r=n;return r&&(r===t.None||r===t.Cancelled||AA.boolean(r.isCancellationRequested)&&!!r.onCancellationRequested)}t.is=e})(ql||(le=Vn.CancellationToken=ql={}));const NA=Object.freeze(function(t,e){const n=(0,PA.default)().timer.setTimeout(t.bind(e),0);return{dispose(){n.dispose()}}});class om{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?NA:(this._emitter||(this._emitter=new Lf.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}}class IA{get token(){return this._token||(this._token=new om),this._token}cancel(){this._token?this._token.cancel():this._token=ql.Cancelled}dispose(){this._token?this._token instanceof om&&this._token.dispose():this._token=ql.None}}xh=Vn.CancellationTokenSource=IA;function DA(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}let hl=0,OA=10;function xA(){return hl=performance.now(),new xh}const Bl=Symbol("OperationCancelled");function Hs(t){return t===Bl}async function ot(t){if(t===le.None)return;const e=performance.now();if(e-hl>=OA&&(hl=e,await DA(),hl=performance.now()),t.isCancellationRequested)throw Bl}class Lh{constructor(){this.promise=new Promise((e,n)=>{this.resolve=r=>(e(r),this),this.reject=r=>(n(r),this)})}}class _s{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){const n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){for(const r of e)if(_s.isIncremental(r)){const i=A_(r.range),s=this.offsetAt(i.start),o=this.offsetAt(i.end);this._content=this._content.substring(0,s)+r.text+this._content.substring(o,this._content.length);const a=Math.max(i.start.line,0),l=Math.max(i.end.line,0);let c=this._lineOffsets;const u=am(r.text,!1,s);if(l-a===u.length)for(let m=0,g=u.length;m<g;m++)c[m+a+1]=u[m];else u.length<1e4?c.splice(a+1,l-a,...u):this._lineOffsets=c=c.slice(0,a+1).concat(u,c.slice(l+1));const f=r.text.length-(o-s);if(f!==0)for(let m=a+1+u.length,g=c.length;m<g;m++)c[m]=c[m]+f}else if(_s.isFull(r))this._content=r.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=am(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);const n=this.getLineOffsets();let r=0,i=n.length;if(i===0)return{line:0,character:e};for(;r<i;){const o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}const s=r-1;return e=this.ensureBeforeEOL(e,n[s]),{line:s,character:e-n[s]}}offsetAt(e){const n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;const r=n[e.line];if(e.character<=0)return r;const i=e.line+1<n.length?n[e.line+1]:this._content.length,s=Math.min(r+e.character,i);return this.ensureBeforeEOL(s,r)}ensureBeforeEOL(e,n){for(;e>n&&P_(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}}var Kl;(function(t){function e(i,s,o,a){return new _s(i,s,o,a)}t.create=e;function n(i,s,o){if(i instanceof _s)return i.update(s,o),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=n;function r(i,s){const o=i.getText(),a=Mf(s.map(LA),(u,f)=>{const m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m});let l=0;const c=[];for(const u of a){const f=i.offsetAt(u.range.start);if(f<l)throw new Error("Overlapping edit");f>l&&c.push(o.substring(l,f)),u.newText.length&&c.push(u.newText),l=i.offsetAt(u.range.end)}return c.push(o.substr(l)),c.join("")}t.applyEdits=r})(Kl||(Kl={}));function Mf(t,e){if(t.length<=1)return t;const n=t.length/2|0,r=t.slice(0,n),i=t.slice(n);Mf(r,e),Mf(i,e);let s=0,o=0,a=0;for(;s<r.length&&o<i.length;)e(r[s],i[o])<=0?t[a++]=r[s++]:t[a++]=i[o++];for(;s<r.length;)t[a++]=r[s++];for(;o<i.length;)t[a++]=i[o++];return t}function am(t,e,n=0){const r=e?[n]:[];for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);P_(s)&&(s===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,r.push(n+i+1))}return r}function P_(t){return t===13||t===10}function A_(t){const e=t.start,n=t.end;return e.line>n.line||e.line===n.line&&e.character>n.character?{start:n,end:e}:t}function LA(t){const e=A_(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var N_;(()=>{var t={470:i=>{function s(l){if(typeof l!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(l))}function o(l,c){for(var u,f="",m=0,g=-1,d=0,v=0;v<=l.length;++v){if(v<l.length)u=l.charCodeAt(v);else{if(u===47)break;u=47}if(u===47){if(!(g===v-1||d===1))if(g!==v-1&&d===2){if(f.length<2||m!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var R=f.lastIndexOf("/");if(R!==f.length-1){R===-1?(f="",m=0):m=(f=f.slice(0,R)).length-1-f.lastIndexOf("/"),g=v,d=0;continue}}else if(f.length===2||f.length===1){f="",m=0,g=v,d=0;continue}}c&&(f.length>0?f+="/..":f="..",m=2)}else f.length>0?f+="/"+l.slice(g+1,v):f=l.slice(g+1,v),m=v-g-1;g=v,d=0}else u===46&&d!==-1?++d:d=-1}return f}var a={resolve:function(){for(var l,c="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var m;f>=0?m=arguments[f]:(l===void 0&&(l=process.cwd()),m=l),s(m),m.length!==0&&(c=m+"/"+c,u=m.charCodeAt(0)===47)}return c=o(c,!u),u?c.length>0?"/"+c:"/":c.length>0?c:"."},normalize:function(l){if(s(l),l.length===0)return".";var c=l.charCodeAt(0)===47,u=l.charCodeAt(l.length-1)===47;return(l=o(l,!c)).length!==0||c||(l="."),l.length>0&&u&&(l+="/"),c?"/"+l:l},isAbsolute:function(l){return s(l),l.length>0&&l.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var l,c=0;c<arguments.length;++c){var u=arguments[c];s(u),u.length>0&&(l===void 0?l=u:l+="/"+u)}return l===void 0?".":a.normalize(l)},relative:function(l,c){if(s(l),s(c),l===c||(l=a.resolve(l))===(c=a.resolve(c)))return"";for(var u=1;u<l.length&&l.charCodeAt(u)===47;++u);for(var f=l.length,m=f-u,g=1;g<c.length&&c.charCodeAt(g)===47;++g);for(var d=c.length-g,v=m<d?m:d,R=-1,_=0;_<=v;++_){if(_===v){if(d>v){if(c.charCodeAt(g+_)===47)return c.slice(g+_+1);if(_===0)return c.slice(g+_)}else m>v&&(l.charCodeAt(u+_)===47?R=_:_===0&&(R=0));break}var h=l.charCodeAt(u+_);if(h!==c.charCodeAt(g+_))break;h===47&&(R=_)}var p="";for(_=u+R+1;_<=f;++_)_!==f&&l.charCodeAt(_)!==47||(p.length===0?p+="..":p+="/..");return p.length>0?p+c.slice(g+R):(g+=R,c.charCodeAt(g)===47&&++g,c.slice(g))},_makeLong:function(l){return l},dirname:function(l){if(s(l),l.length===0)return".";for(var c=l.charCodeAt(0),u=c===47,f=-1,m=!0,g=l.length-1;g>=1;--g)if((c=l.charCodeAt(g))===47){if(!m){f=g;break}}else m=!1;return f===-1?u?"/":".":u&&f===1?"//":l.slice(0,f)},basename:function(l,c){if(c!==void 0&&typeof c!="string")throw new TypeError('"ext" argument must be a string');s(l);var u,f=0,m=-1,g=!0;if(c!==void 0&&c.length>0&&c.length<=l.length){if(c.length===l.length&&c===l)return"";var d=c.length-1,v=-1;for(u=l.length-1;u>=0;--u){var R=l.charCodeAt(u);if(R===47){if(!g){f=u+1;break}}else v===-1&&(g=!1,v=u+1),d>=0&&(R===c.charCodeAt(d)?--d==-1&&(m=u):(d=-1,m=v))}return f===m?m=v:m===-1&&(m=l.length),l.slice(f,m)}for(u=l.length-1;u>=0;--u)if(l.charCodeAt(u)===47){if(!g){f=u+1;break}}else m===-1&&(g=!1,m=u+1);return m===-1?"":l.slice(f,m)},extname:function(l){s(l);for(var c=-1,u=0,f=-1,m=!0,g=0,d=l.length-1;d>=0;--d){var v=l.charCodeAt(d);if(v!==47)f===-1&&(m=!1,f=d+1),v===46?c===-1?c=d:g!==1&&(g=1):c!==-1&&(g=-1);else if(!m){u=d+1;break}}return c===-1||f===-1||g===0||g===1&&c===f-1&&c===u+1?"":l.slice(c,f)},format:function(l){if(l===null||typeof l!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof l);return function(c,u){var f=u.dir||u.root,m=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+m:f+"/"+m:m}(0,l)},parse:function(l){s(l);var c={root:"",dir:"",base:"",ext:"",name:""};if(l.length===0)return c;var u,f=l.charCodeAt(0),m=f===47;m?(c.root="/",u=1):u=0;for(var g=-1,d=0,v=-1,R=!0,_=l.length-1,h=0;_>=u;--_)if((f=l.charCodeAt(_))!==47)v===-1&&(R=!1,v=_+1),f===46?g===-1?g=_:h!==1&&(h=1):g!==-1&&(h=-1);else if(!R){d=_+1;break}return g===-1||v===-1||h===0||h===1&&g===v-1&&g===d+1?v!==-1&&(c.base=c.name=d===0&&m?l.slice(1,v):l.slice(d,v)):(d===0&&m?(c.name=l.slice(1,g),c.base=l.slice(1,v)):(c.name=l.slice(d,g),c.base=l.slice(d,v)),c.ext=l.slice(g,v)),d>0?c.dir=l.slice(0,d-1):m&&(c.dir="/"),c},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function n(i){var s=e[i];if(s!==void 0)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(i,s)=>{for(var o in s)n.o(s,o)&&!n.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:s[o]})},n.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{let i;n.r(r),n.d(r,{URI:()=>m,Utils:()=>Pe}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);const s=/^\w[\w\d+.-]*$/,o=/^\//,a=/^\/\//;function l(A,E){if(!A.scheme&&E)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${A.authority}", path: "${A.path}", query: "${A.query}", fragment: "${A.fragment}"}`);if(A.scheme&&!s.test(A.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(A.path){if(A.authority){if(!o.test(A.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(A.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}const c="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class m{constructor(E,k,C,N,P,O=!1){Dn(this,"scheme");Dn(this,"authority");Dn(this,"path");Dn(this,"query");Dn(this,"fragment");typeof E=="object"?(this.scheme=E.scheme||c,this.authority=E.authority||c,this.path=E.path||c,this.query=E.query||c,this.fragment=E.fragment||c):(this.scheme=function(He,x){return He||x?He:"file"}(E,O),this.authority=k||c,this.path=function(He,x){switch(He){case"https":case"http":case"file":x?x[0]!==u&&(x=u+x):x=u}return x}(this.scheme,C||c),this.query=N||c,this.fragment=P||c,l(this,O))}static isUri(E){return E instanceof m||!!E&&typeof E.authority=="string"&&typeof E.fragment=="string"&&typeof E.path=="string"&&typeof E.query=="string"&&typeof E.scheme=="string"&&typeof E.fsPath=="string"&&typeof E.with=="function"&&typeof E.toString=="function"}get fsPath(){return h(this)}with(E){if(!E)return this;let{scheme:k,authority:C,path:N,query:P,fragment:O}=E;return k===void 0?k=this.scheme:k===null&&(k=c),C===void 0?C=this.authority:C===null&&(C=c),N===void 0?N=this.path:N===null&&(N=c),P===void 0?P=this.query:P===null&&(P=c),O===void 0?O=this.fragment:O===null&&(O=c),k===this.scheme&&C===this.authority&&N===this.path&&P===this.query&&O===this.fragment?this:new d(k,C,N,P,O)}static parse(E,k=!1){const C=f.exec(E);return C?new d(C[2]||c,G(C[4]||c),G(C[5]||c),G(C[7]||c),G(C[9]||c),k):new d(c,c,c,c,c)}static file(E){let k=c;if(i&&(E=E.replace(/\\/g,u)),E[0]===u&&E[1]===u){const C=E.indexOf(u,2);C===-1?(k=E.substring(2),E=u):(k=E.substring(2,C),E=E.substring(C)||u)}return new d("file",k,E,c,c)}static from(E){const k=new d(E.scheme,E.authority,E.path,E.query,E.fragment);return l(k,!0),k}toString(E=!1){return p(this,E)}toJSON(){return this}static revive(E){if(E){if(E instanceof m)return E;{const k=new d(E);return k._formatted=E.external,k._fsPath=E._sep===g?E.fsPath:null,k}}return E}}const g=i?1:void 0;class d extends m{constructor(){super(...arguments);Dn(this,"_formatted",null);Dn(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=h(this)),this._fsPath}toString(k=!1){return k?p(this,!0):(this._formatted||(this._formatted=p(this,!1)),this._formatted)}toJSON(){const k={$mid:1};return this._fsPath&&(k.fsPath=this._fsPath,k._sep=g),this._formatted&&(k.external=this._formatted),this.path&&(k.path=this.path),this.scheme&&(k.scheme=this.scheme),this.authority&&(k.authority=this.authority),this.query&&(k.query=this.query),this.fragment&&(k.fragment=this.fragment),k}}const v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function R(A,E,k){let C,N=-1;for(let P=0;P<A.length;P++){const O=A.charCodeAt(P);if(O>=97&&O<=122||O>=65&&O<=90||O>=48&&O<=57||O===45||O===46||O===95||O===126||E&&O===47||k&&O===91||k&&O===93||k&&O===58)N!==-1&&(C+=encodeURIComponent(A.substring(N,P)),N=-1),C!==void 0&&(C+=A.charAt(P));else{C===void 0&&(C=A.substr(0,P));const He=v[O];He!==void 0?(N!==-1&&(C+=encodeURIComponent(A.substring(N,P)),N=-1),C+=He):N===-1&&(N=P)}}return N!==-1&&(C+=encodeURIComponent(A.substring(N))),C!==void 0?C:A}function _(A){let E;for(let k=0;k<A.length;k++){const C=A.charCodeAt(k);C===35||C===63?(E===void 0&&(E=A.substr(0,k)),E+=v[C]):E!==void 0&&(E+=A[k])}return E!==void 0?E:A}function h(A,E){let k;return k=A.authority&&A.path.length>1&&A.scheme==="file"?`//${A.authority}${A.path}`:A.path.charCodeAt(0)===47&&(A.path.charCodeAt(1)>=65&&A.path.charCodeAt(1)<=90||A.path.charCodeAt(1)>=97&&A.path.charCodeAt(1)<=122)&&A.path.charCodeAt(2)===58?A.path[1].toLowerCase()+A.path.substr(2):A.path,i&&(k=k.replace(/\//g,"\\")),k}function p(A,E){const k=E?_:R;let C="",{scheme:N,authority:P,path:O,query:He,fragment:x}=A;if(N&&(C+=N,C+=":"),(P||N==="file")&&(C+=u,C+=u),P){let S=P.indexOf("@");if(S!==-1){const te=P.substr(0,S);P=P.substr(S+1),S=te.lastIndexOf(":"),S===-1?C+=k(te,!1,!1):(C+=k(te.substr(0,S),!1,!1),C+=":",C+=k(te.substr(S+1),!1,!0)),C+="@"}P=P.toLowerCase(),S=P.lastIndexOf(":"),S===-1?C+=k(P,!1,!0):(C+=k(P.substr(0,S),!1,!0),C+=P.substr(S))}if(O){if(O.length>=3&&O.charCodeAt(0)===47&&O.charCodeAt(2)===58){const S=O.charCodeAt(1);S>=65&&S<=90&&(O=`/${String.fromCharCode(S+32)}:${O.substr(3)}`)}else if(O.length>=2&&O.charCodeAt(1)===58){const S=O.charCodeAt(0);S>=65&&S<=90&&(O=`${String.fromCharCode(S+32)}:${O.substr(2)}`)}C+=k(O,!0,!1)}return He&&(C+="?",C+=k(He,!1,!1)),x&&(C+="#",C+=E?x:R(x,!1,!1)),C}function w(A){try{return decodeURIComponent(A)}catch{return A.length>3?A.substr(0,3)+w(A.substr(3)):A}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function G(A){return A.match(F)?A.replace(F,E=>w(E)):A}var J=n(470);const ke=J.posix||J,Ee="/";var Pe;(function(A){A.joinPath=function(E,...k){return E.with({path:ke.join(E.path,...k)})},A.resolvePath=function(E,...k){let C=E.path,N=!1;C[0]!==Ee&&(C=Ee+C,N=!0);let P=ke.resolve(C,...k);return N&&P[0]===Ee&&!E.authority&&(P=P.substring(1)),E.with({path:P})},A.dirname=function(E){if(E.path.length===0||E.path===Ee)return E;let k=ke.dirname(E.path);return k.length===1&&k.charCodeAt(0)===46&&(k=""),E.with({path:k})},A.basename=function(E){return ke.basename(E.path)},A.extname=function(E){return ke.extname(E.path)}})(Pe||(Pe={}))})(),N_=r})();const{URI:at,Utils:vi}=N_;var he;(function(t){t.basename=vi.basename,t.dirname=vi.dirname,t.extname=vi.extname,t.joinPath=vi.joinPath,t.resolvePath=vi.resolvePath;const e=typeof process=="object"&&(process==null?void 0:process.platform)==="win32";function n(s,o){return(s==null?void 0:s.toString())===(o==null?void 0:o.toString())}t.equals=n;function r(s,o){const a=typeof s=="string"?at.parse(s).path:s.path,l=typeof o=="string"?at.parse(o).path:o.path,c=a.split("/").filter(d=>d.length>0),u=l.split("/").filter(d=>d.length>0);if(e){const d=/^[A-Z]:$/;if(c[0]&&d.test(c[0])&&(c[0]=c[0].toLowerCase()),u[0]&&d.test(u[0])&&(u[0]=u[0].toLowerCase()),c[0]!==u[0])return l.substring(1)}let f=0;for(;f<c.length&&c[f]===u[f];f++);const m="../".repeat(c.length-f),g=u.slice(f).join("/");return m+g}t.relative=r;function i(s){return at.parse(s.toString()).toString()}t.normalize=i})(he||(he={}));var U;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(U||(U={}));class MA{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,n=le.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,n)}fromTextDocument(e,n,r){return n=n??at.parse(e.uri),le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromString(e,n,r){return le.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromModel(e,n){return this.create(n,{$model:e})}create(e,n,r){if(typeof n=="string"){const i=this.parse(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else if("$model"in n){const i={value:n.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}async createAsync(e,n,r){if(typeof n=="string"){const i=await this.parseAsync(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else{const i=await this.parseAsync(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}createLangiumDocument(e,n,r,i){let s;if(r)s={parseResult:e,uri:n,state:U.Parsed,references:[],textDocument:r};else{const o=this.createTextDocumentGetter(n,i);s={parseResult:e,uri:n,state:U.Parsed,references:[],get textDocument(){return o()}}}return e.value.$document=s,s}async update(e,n){var r,i;const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText,o=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=o?o.getText():await this.fileSystemProvider.readFile(e.uri);if(o)Object.defineProperty(e,"textDocument",{value:o});else{const l=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:l})}return s!==a&&(e.parseResult=await this.parseAsync(e.uri,a,n),e.parseResult.value.$document=e),e.state=U.Parsed,e}parse(e,n,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n,r)}parseAsync(e,n,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n,r)}createTextDocumentGetter(e,n){const r=this.serviceRegistry;let i;return()=>i??(i=Kl.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,n??""))}}class FA{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return Re(this.documentMap.values())}addDocument(e){const n=e.uri.toString();if(this.documentMap.has(n))throw new Error(`A document with the URI '${n}' is already present.`);this.documentMap.set(n,e)}getDocument(e){const n=e.toString();return this.documentMap.get(n)}async getOrCreateDocument(e,n){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,n),this.addDocument(r),r)}createDocument(e,n,r){if(r)return this.langiumDocumentFactory.fromString(n,e,r).then(i=>(this.addDocument(i),i));{const i=this.langiumDocumentFactory.fromString(n,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(this.serviceRegistry.getServices(e).references.Linker.unlink(r),r.state=U.Changed,r.precomputedScopes=void 0,r.diagnostics=void 0),r}deleteDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(r.state=U.Changed,this.documentMap.delete(n)),r}}const gu=Symbol("ref_resolving");class I_{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,n=le.None){for(const r of sr(e.parseResult.value))await ot(n),xy(r).forEach(i=>this.doLink(i,e))}doLink(e,n){var r;const i=e.reference;if(i._ref===void 0){i._ref=gu;try{const s=this.getCandidate(e);if(sl(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){const o=this.loadAstNode(s);i._ref=o??this.createLinkingError(e,s)}else i._ref=void 0}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const o=(r=s.message)!==null&&r!==void 0?r:String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${o}`})}n.references.push(i)}}unlink(e){for(const n of e.references)delete n._ref,delete n._nodeDescription;e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,n,r,i){const s=this,o={$refNode:r,$refText:i,get ref(){var a;if(Je(this._ref))return this._ref;if(OT(this._nodeDescription)){const l=s.loadAstNode(this._nodeDescription);this._ref=l??s.createLinkingError({reference:o,container:e,property:n},this._nodeDescription)}else if(this._ref===void 0){this._ref=gu;const l=rr(e).$document,c=s.getLinkedNode({reference:o,container:e,property:n});if(c.error&&l&&l.state<U.ComputedScopes)return this._ref=void 0;this._ref=(a=c.node)!==null&&a!==void 0?a:c.error,this._nodeDescription=c.descr,l==null||l.references.push(this)}else if(this._ref===gu)throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);return Je(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return sl(this._ref)?this._ref:void 0}};return o}getLinkedNode(e){var n;try{const r=this.getCandidate(e);if(sl(r))return{error:r};const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=(n=r.message)!==null&&n!==void 0?n:String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}}loadAstNode(e){if(e.node)return e.node;const n=this.langiumDocuments().getDocument(e.documentUri);if(n)return this.astNodeLocator.getAstNode(n.parseResult.value,e.path)}createLinkingError(e,n){const r=rr(e.container).$document;r&&r.state<U.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:n})}}function D_(t){return typeof t.name=="string"}class HA{getName(e){if(D_(e))return e.name}getNameNode(e){return nh(e.$cstNode,"name")}}class jA{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){const n=yR(e),r=e.astNode;if(n&&r){const i=r[n.feature];if(en(i))return i.ref;if(Array.isArray(i)){for(const s of i)if(en(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end)return s.ref}}if(r){const i=this.nameProvider.getNameNode(r);if(i&&(i===e||FT(e,i)))return r}}}findDeclarationNode(e){const n=this.findDeclaration(e);if(n!=null&&n.$cstNode){const r=this.nameProvider.getNameNode(n);return r??n.$cstNode}}findReferences(e,n){const r=[];if(n.includeDeclaration){const s=this.getReferenceToSelf(e);s&&r.push(s)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return n.documentUri&&(i=i.filter(s=>he.equals(s.sourceUri,n.documentUri))),r.push(...i),Re(r)}getReferenceToSelf(e){const n=this.nameProvider.getNameNode(e);if(n){const r=sn(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:Tl(n),local:!0}}}}class Wl{constructor(e){if(this.map=new Map,e)for(const[n,r]of e)this.add(n,r)}get size(){return ud.sum(Re(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,n){if(n===void 0)return this.map.delete(e);{const r=this.map.get(e);if(r){const i=r.indexOf(n);if(i>=0)return r.length===1?this.map.delete(e):r.splice(i,1),!0}return!1}}get(e){var n;return(n=this.map.get(e))!==null&&n!==void 0?n:[]}has(e,n){if(n===void 0)return this.map.has(e);{const r=this.map.get(e);return r?r.indexOf(n)>=0:!1}}add(e,n){return this.map.has(e)?this.map.get(e).push(n):this.map.set(e,[n]),this}addAll(e,n){return this.map.has(e)?this.map.get(e).push(...n):this.map.set(e,Array.from(n)),this}forEach(e){this.map.forEach((n,r)=>n.forEach(i=>e(i,r,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return Re(this.map.entries()).flatMap(([e,n])=>n.map(r=>[e,r]))}keys(){return Re(this.map.keys())}values(){return Re(this.map.values()).flat()}entriesGroupedByKey(){return Re(this.map.entries())}}class lm{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(const[n,r]of e)this.set(n,r)}clear(){this.map.clear(),this.inverse.clear()}set(e,n){return this.map.set(e,n),this.inverse.set(n,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const n=this.map.get(e);return n!==void 0?(this.map.delete(e),this.inverse.delete(n),!0):!1}}class UA{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,n=le.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,n)}async computeExportsForNode(e,n,r=ic,i=le.None){const s=[];this.exportNode(e,s,n);for(const o of r(e))await ot(i),this.exportNode(o,s,n);return s}exportNode(e,n,r){const i=this.nameProvider.getName(e);i&&n.push(this.descriptions.createDescription(e,i,r))}async computeLocalScopes(e,n=le.None){const r=e.parseResult.value,i=new Wl;for(const s of tn(r))await ot(n),this.processNode(s,e,i);return i}processNode(e,n,r){const i=e.$container;if(i){const s=this.nameProvider.getName(e);s&&r.add(i,this.descriptions.createDescription(e,s,n))}}}class cm{constructor(e,n,r){var i;this.elements=e,this.outerScope=n,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const n=this.caseInsensitive?this.elements.find(r=>r.name.toLowerCase()===e.toLowerCase()):this.elements.find(r=>r.name===e);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}}class qA{constructor(e,n,r){var i;this.elements=new Map,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1;for(const s of e){const o=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(o,s)}this.outerScope=n}getElement(e){const n=this.caseInsensitive?e.toLowerCase():e,r=this.elements.get(n);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=Re(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}}class O_{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}}class BA extends O_{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,n){this.throwIfDisposed(),this.cache.set(e,n)}get(e,n){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(n){const r=n();return this.cache.set(e,r),r}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}}class KA extends O_{constructor(e){super(),this.cache=new Map,this.converter=e??(n=>n)}has(e,n){return this.throwIfDisposed(),this.cacheForContext(e).has(n)}set(e,n,r){this.throwIfDisposed(),this.cacheForContext(e).set(n,r)}get(e,n,r){this.throwIfDisposed();const i=this.cacheForContext(e);if(i.has(n))return i.get(n);if(r){const s=r();return i.set(n,s),s}else return}delete(e,n){return this.throwIfDisposed(),this.cacheForContext(e).delete(n)}clear(e){if(this.throwIfDisposed(),e){const n=this.converter(e);this.cache.delete(n)}else this.cache.clear()}cacheForContext(e){const n=this.converter(e);let r=this.cache.get(n);return r||(r=new Map,this.cache.set(n,r)),r}}class WA extends BA{constructor(e,n){super(),n?(this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n,()=>{this.clear()})),this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{i.length>0&&this.clear()}))):this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}}class x_{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new WA(e.shared)}getScope(e){const n=[],r=this.reflection.getReferenceType(e),i=sn(e.container).precomputedScopes;if(i){let o=e.container;do{const a=i.get(o);a.length>0&&n.push(Re(a).filter(l=>this.reflection.isSubtype(l.type,r))),o=o.$container}while(o)}let s=this.getGlobalScope(r,e);for(let o=n.length-1;o>=0;o--)s=this.createScope(n[o],s);return s}createScope(e,n,r){return new cm(Re(e),n,r)}createScopeForNodes(e,n,r){const i=Re(e).map(s=>{const o=this.nameProvider.getName(s);if(o)return this.descriptions.createDescription(s,o)}).nonNullable();return new cm(i,n,r)}getGlobalScope(e,n){return this.globalScopeCache.get(e,()=>new qA(this.indexManager.allElements(e)))}}function L_(t){return typeof t.$comment=="string"}function um(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}class GA{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,n){const r=n??{},i=n==null?void 0:n.replacer,s=(a,l)=>this.replacer(a,l,r),o=i?(a,l)=>i(a,l,s):s;try{return this.currentDocument=sn(e),JSON.stringify(e,o,n==null?void 0:n.space)}finally{this.currentDocument=void 0}}deserialize(e,n){const r=n??{},i=JSON.parse(e);return this.linkNode(i,i,r),i}replacer(e,n,{refText:r,sourceText:i,textRegions:s,comments:o,uriConverter:a}){var l,c,u,f;if(!this.ignoreProperties.has(e))if(en(n)){const m=n.ref,g=r?n.$refText:void 0;if(m){const d=sn(m);let v="";this.currentDocument&&this.currentDocument!==d&&(a?v=a(d.uri,n):v=d.uri.toString());const R=this.astNodeLocator.getAstNodePath(m);return{$ref:`${v}#${R}`,$refText:g}}else return{$error:(c=(l=n.error)===null||l===void 0?void 0:l.message)!==null&&c!==void 0?c:"Could not resolve reference",$refText:g}}else if(Je(n)){let m;if(s&&(m=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},n)),(!e||n.$document)&&(m!=null&&m.$textRegion)&&(m.$textRegion.documentURI=(u=this.currentDocument)===null||u===void 0?void 0:u.uri.toString())),i&&!e&&(m??(m=Object.assign({},n)),m.$sourceText=(f=n.$cstNode)===null||f===void 0?void 0:f.text),o){m??(m=Object.assign({},n));const g=this.commentProvider.getComment(n);g&&(m.$comment=g.replace(/\r/g,""))}return m??n}else return n}addAstNodeRegionWithAssignmentsTo(e){const n=r=>({offset:r.offset,end:r.end,length:r.length,range:r.range});if(e.$cstNode){const r=e.$textRegion=n(e.$cstNode),i=r.assignments={};return Object.keys(e).filter(s=>!s.startsWith("$")).forEach(s=>{const o=By(e.$cstNode,s).map(n);o.length!==0&&(i[s]=o)}),e}}linkNode(e,n,r,i,s,o){for(const[l,c]of Object.entries(e))if(Array.isArray(c))for(let u=0;u<c.length;u++){const f=c[u];um(f)?c[u]=this.reviveReference(e,l,n,f,r):Je(f)&&this.linkNode(f,n,r,e,l,u)}else um(c)?e[l]=this.reviveReference(e,l,n,c,r):Je(c)&&this.linkNode(c,n,r,e,l);const a=e;a.$container=i,a.$containerProperty=s,a.$containerIndex=o}reviveReference(e,n,r,i,s){let o=i.$refText,a=i.$error;if(i.$ref){const l=this.getRefNode(r,i.$ref,s.uriConverter);if(Je(l))return o||(o=this.nameProvider.getName(l)),{$refText:o??"",ref:l};a=l}if(a){const l={$refText:o??""};return l.error={container:e,property:n,message:a,reference:l},l}else return}getRefNode(e,n,r){try{const i=n.indexOf("#");if(i===0){const l=this.astNodeLocator.getAstNode(e,n.substring(1));return l||"Could not resolve path: "+n}if(i<0){const l=r?r(n):at.parse(n),c=this.langiumDocuments.getDocument(l);return c?c.parseResult.value:"Could not find document for URI: "+n}const s=r?r(n.substring(0,i)):at.parse(n.substring(0,i)),o=this.langiumDocuments.getDocument(s);if(!o)return"Could not find document for URI: "+n;if(i===n.length-1)return o.parseResult.value;const a=this.astNodeLocator.getAstNode(o.parseResult.value,n.substring(i+1));return a||"Could not resolve URI: "+n}catch(i){return String(i)}}}class zA{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.fileNameMap=new Map,this.textDocuments=e==null?void 0:e.workspace.TextDocuments}register(e){const n=e.LanguageMetaData;for(const r of n.fileExtensions)this.fileExtensionMap.has(r)&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileExtensionMap.set(r,e);if(n.fileNames)for(const r of n.fileNames)this.fileNameMap.has(r)&&console.warn(`The file name ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileNameMap.set(r,e);this.languageIdMap.set(n.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var n,r,i;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");const s=(r=(n=this.textDocuments)===null||n===void 0?void 0:n.get(e))===null||r===void 0?void 0:r.languageId;if(s!==void 0){const c=this.languageIdMap.get(s);if(c)return c}const o=he.extname(e),a=he.basename(e),l=(i=this.fileNameMap.get(a))!==null&&i!==void 0?i:this.fileExtensionMap.get(o);if(!l)throw s?new Error(`The service registry contains no services for the extension '${o}' for language '${s}'.`):new Error(`The service registry contains no services for the extension '${o}'.`);return l}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}}function Zi(t){return{code:t}}var Gl;(function(t){t.all=["fast","slow","built-in"]})(Gl||(Gl={}));class VA{constructor(e){this.entries=new Wl,this.entriesBefore=[],this.entriesAfter=[],this.reflection=e.shared.AstReflection}register(e,n=this,r="fast"){if(r==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(const[i,s]of Object.entries(e)){const o=s;if(Array.isArray(o))for(const a of o){const l={check:this.wrapValidationException(a,n),category:r};this.addEntry(i,l)}else if(typeof o=="function"){const a={check:this.wrapValidationException(o,n),category:r};this.addEntry(i,a)}else bs()}}wrapValidationException(e,n){return async(r,i,s)=>{await this.handleException(()=>e.call(n,r,i,s),"An error occurred during validation",i,r)}}async handleException(e,n,r,i){try{await e()}catch(s){if(Hs(s))throw s;console.error(`${n}:`,s),s instanceof Error&&s.stack&&console.error(s.stack);const o=s instanceof Error?s.message:String(s);r("error",`${n}: ${o}`,{node:i})}}addEntry(e,n){if(e==="AstNode"){this.entries.add("AstNode",n);return}for(const r of this.reflection.getAllSubTypes(e))this.entries.add(r,n)}getChecks(e,n){let r=Re(this.entries.get(e)).concat(this.entries.get("AstNode"));return n&&(r=r.filter(i=>n.includes(i.category))),r.map(i=>i.check)}registerBeforeDocument(e,n=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",n))}registerAfterDocument(e,n=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",n))}wrapPreparationException(e,n,r){return async(i,s,o,a)=>{await this.handleException(()=>e.call(r,i,s,o,a),n,s,i)}}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class YA{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,n={},r=le.None){const i=e.parseResult,s=[];if(await ot(r),(!n.categories||n.categories.includes("built-in"))&&(this.processLexingErrors(i,s,n),n.stopAfterLexingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.LexingError})||(this.processParsingErrors(i,s,n),n.stopAfterParsingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.ParsingError}))||(this.processLinkingErrors(e,s,n),n.stopAfterLinkingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.LinkingError}))))return s;try{s.push(...await this.validateAst(i.value,n,r))}catch(o){if(Hs(o))throw o;console.error("An error occurred during validation:",o)}return await ot(r),s}processLexingErrors(e,n,r){var i,s,o;const a=[...e.lexerErrors,...(s=(i=e.lexerReport)===null||i===void 0?void 0:i.diagnostics)!==null&&s!==void 0?s:[]];for(const l of a){const c=(o=l.severity)!==null&&o!==void 0?o:"error",u={severity:yu(c),range:{start:{line:l.line-1,character:l.column-1},end:{line:l.line-1,character:l.column+l.length-1}},message:l.message,data:JA(c),source:this.getSource()};n.push(u)}}processParsingErrors(e,n,r){for(const i of e.parserErrors){let s;if(isNaN(i.token.startOffset)){if("previousToken"in i){const o=i.previousToken;if(isNaN(o.startOffset)){const a={line:0,character:0};s={start:a,end:a}}else{const a={line:o.endLine-1,character:o.endColumn};s={start:a,end:a}}}}else s=dd(i.token);if(s){const o={severity:yu("error"),range:s,message:i.message,data:Zi(jt.ParsingError),source:this.getSource()};n.push(o)}}}processLinkingErrors(e,n,r){for(const i of e.references){const s=i.error;if(s){const o={node:s.container,property:s.property,index:s.index,data:{code:jt.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};n.push(this.toDiagnostic("error",s.message,o))}}}async validateAst(e,n,r=le.None){const i=[],s=(o,a,l)=>{i.push(this.toDiagnostic(o,a,l))};return await this.validateAstBefore(e,n,s,r),await this.validateAstNodes(e,n,s,r),await this.validateAstAfter(e,n,s,r),i}async validateAstBefore(e,n,r,i=le.None){var s;const o=this.validationRegistry.checksBefore;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}async validateAstNodes(e,n,r,i=le.None){await Promise.all(sr(e).map(async s=>{await ot(i);const o=this.validationRegistry.getChecks(s.$type,n.categories);for(const a of o)await a(s,r,i)}))}async validateAstAfter(e,n,r,i=le.None){var s;const o=this.validationRegistry.checksAfter;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}toDiagnostic(e,n,r){return{message:n,range:XA(r),severity:yu(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function XA(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=nh(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Ky(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function yu(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}function JA(t){switch(t){case"error":return Zi(jt.LexingError);case"warning":return Zi(jt.LexingWarning);case"info":return Zi(jt.LexingInfo);case"hint":return Zi(jt.LexingHint);default:throw new Error("Invalid diagnostic severity: "+t)}}var jt;(function(t){t.LexingError="lexing-error",t.LexingWarning="lexing-warning",t.LexingInfo="lexing-info",t.LexingHint="lexing-hint",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(jt||(jt={}));class QA{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,n,r){const i=r??sn(e);n??(n=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if(!n)throw new Error(`Node at path ${s} has no name.`);let o;const a=()=>{var l;return o??(o=Tl((l=this.nameProvider.getNameNode(e))!==null&&l!==void 0?l:e.$cstNode))};return{node:e,name:n,get nameSegment(){return a()},selectionSegment:Tl(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class ZA{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,n=le.None){const r=[],i=e.parseResult.value;for(const s of sr(i))await ot(n),xy(s).filter(o=>!sl(o)).forEach(o=>{const a=this.createDescription(o);a&&r.push(a)});return r}createDescription(e){const n=e.reference.$nodeDescription,r=e.reference.$refNode;if(!n||!r)return;const i=sn(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:n.documentUri,targetPath:n.path,segment:Tl(r),local:he.equals(n.documentUri,i)}}}class e0{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){const n=this.getAstNodePath(e.$container),r=this.getPathSegment(e);return n+this.segmentSeparator+r}return""}getPathSegment({$containerProperty:e,$containerIndex:n}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return n!==void 0?e+this.indexSeparator+n:e}getAstNode(e,n){return n.split(this.segmentSeparator).reduce((i,s)=>{if(!i||s.length===0)return i;const o=s.indexOf(this.indexSeparator);if(o>0){const a=s.substring(0,o),l=parseInt(s.substring(o+1)),c=i[a];return c==null?void 0:c[l]}return i[s]},e)}}class t0{constructor(e){this._ready=new Lh,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new E_,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var n,r;this.workspaceConfig=(r=(n=e.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&r!==void 0?r:!1}async initialized(e){if(this.workspaceConfig){if(e.register){const n=this.serviceRegistry.all;e.register({section:n.map(r=>this.toSectionName(r.LanguageMetaData.languageId))})}if(e.fetchConfiguration){const n=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),r=await e.fetchConfiguration(n);n.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(n=>{const r=e.settings[n];this.updateSectionConfiguration(n,r),this.onConfigurationSectionUpdateEmitter.fire({section:n,configuration:r})})}updateSectionConfiguration(e,n){this.settings[e]=n}async getConfiguration(e,n){await this.ready;const r=this.toSectionName(e);if(this.settings[r])return this.settings[r][n]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var os;(function(t){function e(n){return{dispose:async()=>await n()}}t.create=e})(os||(os={}));class n0{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Wl,this.documentPhaseListeners=new Wl,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=U.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,n={},r=le.None){var i,s;for(const o of e){const a=o.uri.toString();if(o.state===U.Validated){if(typeof n.validation=="boolean"&&n.validation)o.state=U.IndexedReferences,o.diagnostics=void 0,this.buildState.delete(a);else if(typeof n.validation=="object"){const l=this.buildState.get(a),c=(i=l==null?void 0:l.result)===null||i===void 0?void 0:i.validationChecks;if(c){const f=((s=n.validation.categories)!==null&&s!==void 0?s:Gl.all).filter(m=>!c.includes(m));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},n.validation),{categories:f})},result:l.result}),o.state=U.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=U.Changed,await this.emitUpdate(e.map(o=>o.uri),[]),await this.buildDocuments(e,n,r)}async update(e,n,r=le.None){this.currentState=U.Changed;for(const o of n)this.langiumDocuments.deleteDocument(o),this.buildState.delete(o.toString()),this.indexManager.remove(o);for(const o of e){if(!this.langiumDocuments.invalidateDocument(o)){const l=this.langiumDocumentFactory.fromModel({$type:"INVALID"},o);l.state=U.Changed,this.langiumDocuments.addDocument(l)}this.buildState.delete(o.toString())}const i=Re(e).concat(n).map(o=>o.toString()).toSet();this.langiumDocuments.all.filter(o=>!i.has(o.uri.toString())&&this.shouldRelink(o,i)).forEach(o=>{this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o),o.state=Math.min(o.state,U.ComputedScopes),o.diagnostics=void 0}),await this.emitUpdate(e,n),await ot(r);const s=this.sortDocuments(this.langiumDocuments.all.filter(o=>{var a;return o.state<U.Linked||!(!((a=this.buildState.get(o.uri.toString()))===null||a===void 0)&&a.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)}async emitUpdate(e,n){await Promise.all(this.updateListeners.map(r=>r(e,n)))}sortDocuments(e){let n=0,r=e.length-1;for(;n<r;){for(;n<e.length&&this.hasTextDocument(e[n]);)n++;for(;r>=0&&!this.hasTextDocument(e[r]);)r--;n<r&&([e[n],e[r]]=[e[r],e[n]])}return e}hasTextDocument(e){var n;return!!(!((n=this.textDocuments)===null||n===void 0)&&n.get(e.uri))}shouldRelink(e,n){return e.references.some(r=>r.error!==void 0)?!0:this.indexManager.isAffected(e,n)}onUpdate(e){return this.updateListeners.push(e),os.create(()=>{const n=this.updateListeners.indexOf(e);n>=0&&this.updateListeners.splice(n,1)})}async buildDocuments(e,n,r){this.prepareBuild(e,n),await this.runCancelable(e,U.Parsed,r,o=>this.langiumDocumentFactory.update(o,r)),await this.runCancelable(e,U.IndexedContent,r,o=>this.indexManager.updateContent(o,r)),await this.runCancelable(e,U.ComputedScopes,r,async o=>{const a=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await a.computeLocalScopes(o,r)});const i=e.filter(o=>this.shouldLink(o));await this.runCancelable(i,U.Linked,r,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,r)),await this.runCancelable(i,U.IndexedReferences,r,o=>this.indexManager.updateReferences(o,r));const s=e.filter(o=>this.shouldValidate(o));await this.runCancelable(s,U.Validated,r,o=>this.validate(o,r));for(const o of e){const a=this.buildState.get(o.uri.toString());a&&(a.completed=!0)}}prepareBuild(e,n){for(const r of e){const i=r.uri.toString(),s=this.buildState.get(i);(!s||s.completed)&&this.buildState.set(i,{completed:!1,options:n,result:s==null?void 0:s.result})}}async runCancelable(e,n,r,i){const s=e.filter(a=>a.state<n);for(const a of s)await ot(r),await i(a),a.state=n,await this.notifyDocumentPhase(a,n,r);const o=e.filter(a=>a.state===n);await this.notifyBuildPhase(o,n,r),this.currentState=n}onBuildPhase(e,n){return this.buildPhaseListeners.add(e,n),os.create(()=>{this.buildPhaseListeners.delete(e,n)})}onDocumentPhase(e,n){return this.documentPhaseListeners.add(e,n),os.create(()=>{this.documentPhaseListeners.delete(e,n)})}waitUntil(e,n,r){let i;if(n&&"path"in n?i=n:r=n,r??(r=le.None),i){const s=this.langiumDocuments.getDocument(i);if(s&&s.state>=e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):r.isCancellationRequested?Promise.reject(Bl):new Promise((s,o)=>{const a=this.onBuildPhase(e,()=>{if(a.dispose(),l.dispose(),i){const c=this.langiumDocuments.getDocument(i);s(c==null?void 0:c.uri)}else s(void 0)}),l=r.onCancellationRequested(()=>{a.dispose(),l.dispose(),o(Bl)})})}async notifyDocumentPhase(e,n,r){const s=this.documentPhaseListeners.get(n).slice();for(const o of s)try{await o(e,r)}catch(a){if(!Hs(a))throw a}}async notifyBuildPhase(e,n,r){if(e.length===0)return;const s=this.buildPhaseListeners.get(n).slice();for(const o of s)await ot(r),await o(e,r)}shouldLink(e){var n;return(n=this.getBuildOptions(e).eagerLinking)!==null&&n!==void 0?n:!0}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,n){var r,i;const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,o=this.getBuildOptions(e).validation,a=typeof o=="object"?o:void 0,l=await s.validateDocument(e,a,n);e.diagnostics?e.diagnostics.push(...l):e.diagnostics=l;const c=this.buildState.get(e.uri.toString());if(c){(r=c.result)!==null&&r!==void 0||(c.result={});const u=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Gl.all;c.result.validationChecks?c.result.validationChecks.push(...u):c.result.validationChecks=[...u]}}getBuildOptions(e){var n,r;return(r=(n=this.buildState.get(e.uri.toString()))===null||n===void 0?void 0:n.options)!==null&&r!==void 0?r:{}}}class r0{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new KA,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,n){const r=sn(e).uri,i=[];return this.referenceIndex.forEach(s=>{s.forEach(o=>{he.equals(o.targetUri,r)&&o.targetPath===n&&i.push(o)})}),Re(i)}allElements(e,n){let r=Re(this.symbolIndex.keys());return n&&(r=r.filter(i=>!n||n.has(i))),r.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,n){var r;return n?this.symbolByTypeIndex.get(e,n,()=>{var s;return((s=this.symbolIndex.get(e))!==null&&s!==void 0?s:[]).filter(a=>this.astReflection.isSubtype(a.type,n))}):(r=this.symbolIndex.get(e))!==null&&r!==void 0?r:[]}remove(e){const n=e.toString();this.symbolIndex.delete(n),this.symbolByTypeIndex.clear(n),this.referenceIndex.delete(n)}async updateContent(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,n),s=e.uri.toString();this.symbolIndex.set(s,i),this.symbolByTypeIndex.clear(s)}async updateReferences(e,n=le.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,n);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,n){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i=>!i.local&&n.has(i.targetUri.toString())):!1}}class i0{constructor(e){this.initialBuildOptions={},this._ready=new Lh,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){var n;this.folders=(n=e.workspaceFolders)!==null&&n!==void 0?n:void 0}initialized(e){return this.mutex.write(n=>{var r;return this.initializeWorkspace((r=this.folders)!==null&&r!==void 0?r:[],n)})}async initializeWorkspace(e,n=le.None){const r=await this.performStartup(e);await ot(n),await this.documentBuilder.build(r,this.initialBuildOptions,n)}async performStartup(e){const n=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),r=this.serviceRegistry.all.flatMap(o=>{var a;return(a=o.LanguageMetaData.fileNames)!==null&&a!==void 0?a:[]}),i=[],s=o=>{i.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,s),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,{fileExtensions:n,fileNames:r},s))),this._ready.resolve(),i}loadAdditionalDocuments(e,n){return Promise.resolve()}getRootFolder(e){return at.parse(e.uri)}async traverseFolder(e,n,r,i){const s=await this.fileSystemProvider.readDirectory(n);await Promise.all(s.map(async o=>{if(this.includeEntry(e,o,r)){if(o.isDirectory)await this.traverseFolder(e,o.uri,r,i);else if(o.isFile){const a=await this.langiumDocuments.getOrCreateDocument(o.uri);i(a)}}}))}includeEntry(e,n,r){const i=he.basename(n.uri);return i.startsWith(".")?!1:n.isDirectory?i!=="node_modules"&&i!=="out":n.isFile?r.fileExtensions.includes(he.extname(n.uri))||r.fileNames.includes(he.basename(n.uri)):!1}}class s0{buildUnexpectedCharactersMessage(e,n,r,i,s){return wd.buildUnexpectedCharactersMessage(e,n,r,i,s)}buildUnableToPopLexerModeMessage(e){return wd.buildUnableToPopLexerModeMessage(e)}}const o0={mode:"full"};class a0{constructor(e){this.errorMessageProvider=e.parser.LexerErrorMessageProvider,this.tokenBuilder=e.parser.TokenBuilder;const n=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(n);const r=dm(n)?Object.values(n):n,i=e.LanguageMetaData.mode==="production";this.chevrotainLexer=new pt(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})}get definition(){return this.tokenTypes}tokenize(e,n=o0){var r,i,s;const o=this.chevrotainLexer.tokenize(e);return{tokens:o.tokens,errors:o.errors,hidden:(r=o.groups.hidden)!==null&&r!==void 0?r:[],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)}}toTokenTypeDictionary(e){if(dm(e))return e;const n=M_(e)?Object.values(e.modes).flat():e,r={};return n.forEach(i=>r[i.name]=i),r}}function l0(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function M_(t){return t&&"modes"in t&&"defaultMode"in t}function dm(t){return!l0(t)&&!M_(t)}function F_(t,e,n){let r,i;typeof t=="string"?(i=e,r=n):(i=t.range.start,r=e),i||(i=re.create(0,0));const s=j_(t),o=Mh(r),a=u0({lines:s,position:i,options:o});return m0({index:0,tokens:a,position:i})}function H_(t,e){const n=Mh(e),r=j_(t);if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=n.start,a=n.end;return!!(o!=null&&o.exec(i))&&!!(a!=null&&a.exec(s))}function j_(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(aR)}const fm=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,c0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function u0(t){var e,n,r;const i=[];let s=t.position.line,o=t.position.character;for(let a=0;a<t.lines.length;a++){const l=a===0,c=a===t.lines.length-1;let u=t.lines[a],f=0;if(l&&t.options.start){const g=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);g&&(f=g.index+g[0].length)}else{const g=(n=t.options.line)===null||n===void 0?void 0:n.exec(u);g&&(f=g.index+g[0].length)}if(c){const g=(r=t.options.end)===null||r===void 0?void 0:r.exec(u);g&&(u=u.substring(0,g.index))}if(u=u.substring(0,p0(u)),Ff(u,f)>=u.length){if(i.length>0){const g=re.create(s,o);i.push({type:"break",content:"",range:Q.create(g,g)})}}else{fm.lastIndex=f;const g=fm.exec(u);if(g){const d=g[0],v=g[1],R=re.create(s,o+f),_=re.create(s,o+f+d.length);i.push({type:"tag",content:v,range:Q.create(R,_)}),f+=d.length,f=Ff(u,f)}if(f<u.length){const d=u.substring(f),v=Array.from(d.matchAll(c0));i.push(...d0(v,d,s,o+f))}}s++,o=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function d0(t,e,n,r){const i=[];if(t.length===0){const s=re.create(n,r),o=re.create(n,r+e.length);i.push({type:"text",content:e,range:Q.create(s,o)})}else{let s=0;for(const a of t){const l=a.index,c=e.substring(s,l);c.length>0&&i.push({type:"text",content:e.substring(s,l),range:Q.create(re.create(n,s+r),re.create(n,l+r))});let u=c.length+1;const f=a[1];if(i.push({type:"inline-tag",content:f,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+f.length+r))}),u+=f.length,a.length===4){u+=a[2].length;const m=a[3];i.push({type:"text",content:m,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+m.length+r))})}else i.push({type:"text",content:"",range:Q.create(re.create(n,s+u+r),re.create(n,s+u+r))});s=l+a[0].length}const o=e.substring(s);o.length>0&&i.push({type:"text",content:o,range:Q.create(re.create(n,s+r),re.create(n,s+r+o.length))})}return i}const f0=/\S/,h0=/\s*$/;function Ff(t,e){const n=t.substring(e).match(f0);return n?e+n.index:t.length}function p0(t){const e=t.match(h0);if(e&&typeof e.index=="number")return e.index}function m0(t){var e,n,r,i;const s=re.create(t.position.line,t.position.character);if(t.tokens.length===0)return new hm([],Q.create(s,s));const o=[];for(;t.index<t.tokens.length;){const c=g0(t,o[o.length-1]);c&&o.push(c)}const a=(n=(e=o[0])===null||e===void 0?void 0:e.range.start)!==null&&n!==void 0?n:s,l=(i=(r=o[o.length-1])===null||r===void 0?void 0:r.range.end)!==null&&i!==void 0?i:s;return new hm(o,Q.create(a,l))}function g0(t,e){const n=t.tokens[t.index];if(n.type==="tag")return q_(t,!1);if(n.type==="text"||n.type==="inline-tag")return U_(t);y0(n,e),t.index++}function y0(t,e){if(e){const n=new K_("",t.range);"inlines"in e?e.inlines.push(n):e.content.inlines.push(n)}}function U_(t){let e=t.tokens[t.index];const n=e;let r=e;const i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(v0(t)),r=e,e=t.tokens[t.index];return new Hf(i,Q.create(n.range.start,r.range.end))}function v0(t){return t.tokens[t.index].type==="inline-tag"?q_(t,!0):B_(t)}function q_(t,e){const n=t.tokens[t.index++],r=n.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){const s=B_(t);return new _u(r,new Hf([s],s.range),e,Q.create(n.range.start,s.range.end))}else{const s=U_(t);return new _u(r,s,e,Q.create(n.range.start,s.range.end))}else{const s=n.range;return new _u(r,new Hf([],s),e,s)}}function B_(t){const e=t.tokens[t.index++];return new K_(e.content,e.range)}function Mh(t){if(!t)return Mh({start:"/**",end:"*/",line:"*"});const{start:e,end:n,line:r}=t;return{start:vu(e,!0),end:vu(n,!1),line:vu(r,!0)}}function vu(t,e){if(typeof t=="string"||typeof t=="object"){const n=typeof t=="string"?oc(t):t.source;return e?new RegExp(`^\\s*${n}`):new RegExp(`\\s*${n}\\s*$`)}else return t}class hm{constructor(e,n){this.elements=e,this.range=n}getTag(e){return this.getAllTags().find(n=>n.name===e)}getTags(e){return this.getAllTags().filter(n=>n.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(const n of this.elements)if(e.length===0)e=n.toString();else{const r=n.toString();e+=pm(e)+r}return e.trim()}toMarkdown(e){let n="";for(const r of this.elements)if(n.length===0)n=r.toMarkdown(e);else{const i=r.toMarkdown(e);n+=pm(n)+i}return n.trim()}}class _u{constructor(e,n,r,i){this.name=e,this.content=n,this.inline=r,this.range=i}toString(){let e=`@${this.name}`;const n=this.content.toString();return this.content.inlines.length===1?e=`${e} ${n}`:this.content.inlines.length>1&&(e=`${e}
${n}`),this.inline?`{${e}}`:e}toMarkdown(e){var n,r;return(r=(n=e==null?void 0:e.renderTag)===null||n===void 0?void 0:n.call(e,this))!==null&&r!==void 0?r:this.toMarkdownDefault(e)}toMarkdownDefault(e){const n=this.content.toMarkdown(e);if(this.inline){const s=_0(this.name,n,e??{});if(typeof s=="string")return s}let r="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?r="*":(e==null?void 0:e.tag)==="bold"?r="**":(e==null?void 0:e.tag)==="bold-italic"&&(r="***");let i=`${r}@${this.name}${r}`;return this.content.inlines.length===1?i=`${i} — ${n}`:this.content.inlines.length>1&&(i=`${i}
${n}`),this.inline?`{${i}}`:i}}function _0(t,e,n){var r,i;if(t==="linkplain"||t==="linkcode"||t==="link"){const s=e.indexOf(" ");let o=e;if(s>0){const l=Ff(e,s);o=e.substring(l),e=e.substring(0,s)}return(t==="linkcode"||t==="link"&&n.link==="code")&&(o=`\`${o}\``),(i=(r=n.renderLink)===null||r===void 0?void 0:r.call(n,e,o))!==null&&i!==void 0?i:T0(e,o)}}function T0(t,e){try{return at.parse(t,!0),`[${e}](${t})`}catch{return t}}class Hf{constructor(e,n){this.inlines=e,this.range=n}toString(){let e="";for(let n=0;n<this.inlines.length;n++){const r=this.inlines[n],i=this.inlines[n+1];e+=r.toString(),i&&i.range.start.line>r.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let n="";for(let r=0;r<this.inlines.length;r++){const i=this.inlines[r],s=this.inlines[r+1];n+=i.toMarkdown(e),s&&s.range.start.line>i.range.start.line&&(n+=`
`)}return n}}class K_{constructor(e,n){this.text=e,this.range=n}toString(){return this.text}toMarkdown(){return this.text}}function pm(t){return t.endsWith(`
`)?`
`:`

`}class R0{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){const n=this.commentProvider.getComment(e);if(n&&H_(n))return F_(n).toMarkdown({renderLink:(i,s)=>this.documentationLinkRenderer(e,i,s),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,n,r){var i;const s=(i=this.findNameInPrecomputedScopes(e,n))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,n);if(s&&s.nameSegment){const o=s.nameSegment.range.start.line+1,a=s.nameSegment.range.start.character+1,l=s.documentUri.with({fragment:`L${o},${a}`});return`[${r}](${l.toString()})`}else return}documentationTagRenderer(e,n){}findNameInPrecomputedScopes(e,n){const i=sn(e).precomputedScopes;if(!i)return;let s=e;do{const a=i.get(s).find(l=>l.name===n);if(a)return a;s=s.$container}while(s)}findNameInGlobalScope(e,n){return this.indexManager.allElements().find(i=>i.name===n)}}class w0{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var n;return L_(e)?e.$comment:(n=$y(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||n===void 0?void 0:n.text}}class k0{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,n){return Promise.resolve(this.syncParser.parse(e))}}class b0{constructor(){this.previousTokenSource=new xh,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();const n=xA();return this.previousTokenSource=n,this.enqueue(this.writeQueue,e,n.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,n,r=le.None){const i=new Lh,s={action:n,deferred:i,cancellationToken:r};return e.push(s),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;const e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:n,deferred:r,cancellationToken:i})=>{try{const s=await Promise.resolve().then(()=>n(i));r.resolve(s)}catch(s){Hs(s)?r.resolve(void 0):r.reject(s)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}}class S0{constructor(e){this.grammarElementIdMap=new lm,this.tokenTypeIdMap=new lm,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(n=>Object.assign(Object.assign({},n),{message:n.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}dehydrateLexerReport(e){return e}createDehyrationContext(e){const n=new Map,r=new Map;for(const i of sr(e))n.set(i,{});if(e.$cstNode)for(const i of _l(e.$cstNode))r.set(i,{});return{astNodes:n,cstNodes:r}}dehydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(r.$cstNode=this.dehydrateCstNode(e.$cstNode,n));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.dehydrateAstNode(a,n)):en(a)?o.push(this.dehydrateReference(a,n)):o.push(a)}else Je(s)?r[i]=this.dehydrateAstNode(s,n):en(s)?r[i]=this.dehydrateReference(s,n):s!==void 0&&(r[i]=s);return r}dehydrateReference(e,n){const r={};return r.$refText=e.$refText,e.$refNode&&(r.$refNode=n.cstNodes.get(e.$refNode)),r}dehydrateCstNode(e,n){const r=n.cstNodes.get(e);return ky(e)?r.fullText=e.fullText:r.grammarSource=this.getGrammarElementId(e.grammarSource),r.hidden=e.hidden,r.astNode=n.astNodes.get(e.astNode),ar(e)?r.content=e.content.map(i=>this.dehydrateCstNode(i,n)):ks(e)&&(r.tokenType=e.tokenType.name,r.offset=e.offset,r.length=e.length,r.startLine=e.range.start.line,r.startColumn=e.range.start.character,r.endLine=e.range.end.line,r.endColumn=e.range.end.character),r}hydrate(e){const n=e.value,r=this.createHydrationContext(n);return"$cstNode"in n&&this.hydrateCstNode(n.$cstNode,r),{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(n,r)}}createHydrationContext(e){const n=new Map,r=new Map;for(const s of sr(e))n.set(s,{});let i;if(e.$cstNode)for(const s of _l(e.$cstNode)){let o;"fullText"in s?(o=new v_(s.fullText),i=o):"content"in s?o=new Dh:"tokenType"in s&&(o=this.hydrateCstLeafNode(s)),o&&(r.set(s,o),o.root=i)}return{astNodes:n,cstNodes:r}}hydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode&&(r.$cstNode=n.cstNodes.get(e.$cstNode));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.setParent(this.hydrateAstNode(a,n),r)):en(a)?o.push(this.hydrateReference(a,r,i,n)):o.push(a)}else Je(s)?r[i]=this.setParent(this.hydrateAstNode(s,n),r):en(s)?r[i]=this.hydrateReference(s,r,i,n):s!==void 0&&(r[i]=s);return r}setParent(e,n){return e.$container=n,e}hydrateReference(e,n,r,i){return this.linker.buildReference(n,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,n,r=0){const i=n.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=n.astNodes.get(e.astNode),ar(i))for(const s of e.content){const o=this.hydrateCstNode(s,n,r++);i.content.push(o)}return i}hydrateCstLeafNode(e){const n=this.getTokenType(e.tokenType),r=e.offset,i=e.length,s=e.startLine,o=e.startColumn,a=e.endLine,l=e.endColumn,c=e.hidden;return new Nf(r,i,{start:{line:s,character:o},end:{line:a,character:l}},n,c)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if(e)return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.getKey(e)}createGrammarElementIdMap(){let e=0;for(const n of sr(this.grammar))Ay(n)&&this.grammarElementIdMap.set(n,e++)}}function W_(t){return{documentation:{CommentProvider:e=>new w0(e),DocumentationProvider:e=>new R0(e)},parser:{AsyncParser:e=>new k0(e),GrammarConfig:e=>$R(e),LangiumParser:e=>yA(e),CompletionParser:e=>gA(e),ValueConverter:()=>new TA,TokenBuilder:()=>new _A,Lexer:e=>new a0(e),ParserErrorMessageProvider:()=>new R_,LexerErrorMessageProvider:()=>new s0},workspace:{AstNodeLocator:()=>new e0,AstNodeDescriptionProvider:e=>new QA(e),ReferenceDescriptionProvider:e=>new ZA(e)},references:{Linker:e=>new I_(e),NameProvider:()=>new HA,ScopeProvider:e=>new x_(e),ScopeComputation:e=>new UA(e),References:e=>new jA(e)},serializer:{Hydrator:e=>new S0(e),JsonSerializer:e=>new GA(e)},validation:{DocumentValidator:e=>new YA(e),ValidationRegistry:e=>new VA(e)},shared:()=>t.shared}}function G_(t){return{ServiceRegistry:e=>new zA(e),workspace:{LangiumDocuments:e=>new FA(e),LangiumDocumentFactory:e=>new MA(e),DocumentBuilder:e=>new n0(e),IndexManager:e=>new r0(e),WorkspaceManager:e=>new i0(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new b0,ConfigurationProvider:e=>new t0(e)}}}var zl;(function(t){t.merge=(e,n)=>Yl(Yl({},e),n)})(zl||(zl={}));function Vl(t,e,n,r,i,s,o,a,l){const c=[t,e,n,r,i,s,o,a,l].reduce(Yl,{});return V_(c)}const z_=Symbol("isProxy");function jf(t){if(t&&t[z_])for(const e of Object.values(t))jf(e);return t}function V_(t,e){const n=new Proxy({},{deleteProperty:()=>!1,set:()=>{throw new Error("Cannot set property on injected service container")},get:(r,i)=>i===z_?!0:gm(r,i,t,e||n),getOwnPropertyDescriptor:(r,i)=>(gm(r,i,t,e||n),Object.getOwnPropertyDescriptor(r,i)),has:(r,i)=>i in t,ownKeys:()=>[...Object.getOwnPropertyNames(t)]});return n}const mm=Symbol();function gm(t,e,n,r){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===mm)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in n){const i=n[e];t[e]=mm;try{t[e]=typeof i=="function"?i(r):V_(i,r)}catch(s){throw t[e]=s instanceof Error?s:void 0,s}return t[e]}else return}function Yl(t,e){if(e){for(const[n,r]of Object.entries(e))if(r!==void 0){const i=t[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"?t[n]=Yl(i,r):t[n]=r}}return t}class $0{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}const Y_={fileSystemProvider:()=>new $0},C0={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},E0={AstReflection:()=>new Oy};function P0(){const t=Vl(G_(Y_),E0),e=Vl(W_({shared:t}),C0);return t.ServiceRegistry.register(e),e}function A0(t){var e;const n=P0(),r=n.serializer.JsonSerializer.deserialize(t);return n.shared.workspace.LangiumDocumentFactory.fromModel(r,at.parse(`memory://${(e=r.name)!==null&&e!==void 0?e:"grammar"}.langium`)),r}var L={},Uf={},vn={},oe={},Tr={},Fh={},Xl={},j={};Object.defineProperty(j,"__esModule",{value:!0});j.Message=j.NotificationType9=j.NotificationType8=j.NotificationType7=j.NotificationType6=j.NotificationType5=j.NotificationType4=j.NotificationType3=j.NotificationType2=j.NotificationType1=j.NotificationType0=j.NotificationType=j.RequestType9=j.RequestType8=j.RequestType7=j.RequestType6=j.RequestType5=j.RequestType4=j.RequestType3=j.RequestType2=j.RequestType1=j.RequestType=j.RequestType0=j.AbstractMessageSignature=j.ParameterStructures=j.ResponseError=j.ErrorCodes=void 0;const nr=Fe;var qf;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(qf||(j.ErrorCodes=qf={}));class Hh extends Error{constructor(e,n,r){super(n),this.code=nr.number(e)?e:qf.UnknownErrorCode,this.data=r,Object.setPrototypeOf(this,Hh.prototype)}toJson(){const e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}}j.ResponseError=Hh;class nt{constructor(e){this.kind=e}static is(e){return e===nt.auto||e===nt.byName||e===nt.byPosition}toString(){return this.kind}}j.ParameterStructures=nt;nt.auto=new nt("auto");nt.byPosition=new nt("byPosition");nt.byName=new nt("byName");class we{constructor(e,n){this.method=e,this.numberOfParams=n}get parameterStructures(){return nt.auto}}j.AbstractMessageSignature=we;class N0 extends we{constructor(e){super(e,0)}}j.RequestType0=N0;class I0 extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.RequestType=I0;class D0 extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.RequestType1=D0;class O0 extends we{constructor(e){super(e,2)}}j.RequestType2=O0;class x0 extends we{constructor(e){super(e,3)}}j.RequestType3=x0;class L0 extends we{constructor(e){super(e,4)}}j.RequestType4=L0;class M0 extends we{constructor(e){super(e,5)}}j.RequestType5=M0;class F0 extends we{constructor(e){super(e,6)}}j.RequestType6=F0;class H0 extends we{constructor(e){super(e,7)}}j.RequestType7=H0;class j0 extends we{constructor(e){super(e,8)}}j.RequestType8=j0;class U0 extends we{constructor(e){super(e,9)}}j.RequestType9=U0;class q0 extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.NotificationType=q0;class B0 extends we{constructor(e){super(e,0)}}j.NotificationType0=B0;class K0 extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.NotificationType1=K0;class W0 extends we{constructor(e){super(e,2)}}j.NotificationType2=W0;class G0 extends we{constructor(e){super(e,3)}}j.NotificationType3=G0;class z0 extends we{constructor(e){super(e,4)}}j.NotificationType4=z0;class V0 extends we{constructor(e){super(e,5)}}j.NotificationType5=V0;class Y0 extends we{constructor(e){super(e,6)}}j.NotificationType6=Y0;class X0 extends we{constructor(e){super(e,7)}}j.NotificationType7=X0;class J0 extends we{constructor(e){super(e,8)}}j.NotificationType8=J0;class Q0 extends we{constructor(e){super(e,9)}}j.NotificationType9=Q0;var ym;(function(t){function e(i){const s=i;return s&&nr.string(s.method)&&(nr.string(s.id)||nr.number(s.id))}t.isRequest=e;function n(i){const s=i;return s&&nr.string(s.method)&&i.id===void 0}t.isNotification=n;function r(i){const s=i;return s&&(s.result!==void 0||!!s.error)&&(nr.string(s.id)||nr.number(s.id)||s.id===null)}t.isResponse=r})(ym||(j.Message=ym={}));var _n={},vm;Object.defineProperty(_n,"__esModule",{value:!0});_n.LRUCache=_n.LinkedMap=_n.Touch=void 0;var et;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(et||(_n.Touch=et={}));class X_{constructor(){this[vm]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,n=et.None){const r=this._map.get(e);if(r)return n!==et.None&&this.touch(r,n),r.value}set(e,n,r=et.None){let i=this._map.get(e);if(i)i.value=n,r!==et.None&&this.touch(i,r);else{switch(i={key:e,value:n,next:void 0,previous:void 0},r){case et.None:this.addItemLast(i);break;case et.First:this.addItemFirst(i);break;case et.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){const n=this._map.get(e);if(n)return this._map.delete(e),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");const e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,n){const r=this._state;let i=this._head;for(;i;){if(n?e.bind(n)(i.value,i.key,this):e(i.value,i.key,this),this._state!==r)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}values(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}entries(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}[(vm=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let n=this._head,r=this.size;for(;n&&r>e;)this._map.delete(n.key),n=n.next,r--;this._head=n,this._size=r,n&&(n.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{const n=e.next,r=e.previous;if(!n||!r)throw new Error("Invalid list");n.previous=r,r.next=n}e.next=void 0,e.previous=void 0,this._state++}touch(e,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==et.First&&n!==et.Last)){if(n===et.First){if(e===this._head)return;const r=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(r.previous=i,i.next=r),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(n===et.Last){if(e===this._tail)return;const r=e.next,i=e.previous;e===this._head?(r.previous=void 0,this._head=r):(r.previous=i,i.next=r),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){const e=[];return this.forEach((n,r)=>{e.push([r,n])}),e}fromJSON(e){this.clear();for(const[n,r]of e)this.set(n,r)}}_n.LinkedMap=X_;class Z0 extends X_{constructor(e,n=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,n=et.AsNew){return super.get(e,n)}peek(e){return super.get(e,et.None)}set(e,n){return super.set(e,n,et.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}}_n.LRUCache=Z0;var Ec={};Object.defineProperty(Ec,"__esModule",{value:!0});Ec.Disposable=void 0;var _m;(function(t){function e(n){return{dispose:n}}t.create=e})(_m||(Ec.Disposable=_m={}));var Br={};Object.defineProperty(Br,"__esModule",{value:!0});Br.SharedArrayReceiverStrategy=Br.SharedArraySenderStrategy=void 0;const eN=Vn;var Ts;(function(t){t.Continue=0,t.Cancelled=1})(Ts||(Ts={}));class tN{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;const n=new SharedArrayBuffer(4),r=new Int32Array(n,0,1);r[0]=Ts.Continue,this.buffers.set(e.id,n),e.$cancellationData=n}async sendCancellation(e,n){const r=this.buffers.get(n);if(r===void 0)return;const i=new Int32Array(r,0,1);Atomics.store(i,0,Ts.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}}Br.SharedArraySenderStrategy=tN;class nN{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ts.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}}class rN{constructor(e){this.token=new nN(e)}cancel(){}dispose(){}}class iN{constructor(){this.kind="request"}createCancellationTokenSource(e){const n=e.$cancellationData;return n===void 0?new eN.CancellationTokenSource:new rN(n)}}Br.SharedArrayReceiverStrategy=iN;var xn={},js={};Object.defineProperty(js,"__esModule",{value:!0});js.Semaphore=void 0;const sN=An;class oN{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((n,r)=>{this._waiting.push({thunk:e,resolve:n,reject:r}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,sN.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;const e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{const n=e.thunk();n instanceof Promise?n.then(r=>{this._active--,e.resolve(r),this.runNext()},r=>{this._active--,e.reject(r),this.runNext()}):(this._active--,e.resolve(n),this.runNext())}catch(n){this._active--,e.reject(n),this.runNext()}}}js.Semaphore=oN;Object.defineProperty(xn,"__esModule",{value:!0});xn.ReadableStreamMessageReader=xn.AbstractMessageReader=xn.MessageReader=void 0;const Bf=An,Pr=Fe,Tu=on,aN=js;var Tm;(function(t){function e(n){let r=n;return r&&Pr.func(r.listen)&&Pr.func(r.dispose)&&Pr.func(r.onError)&&Pr.func(r.onClose)&&Pr.func(r.onPartialMessage)}t.is=e})(Tm||(xn.MessageReader=Tm={}));class J_{constructor(){this.errorEmitter=new Tu.Emitter,this.closeEmitter=new Tu.Emitter,this.partialMessageEmitter=new Tu.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Pr.string(e.message)?e.message:"unknown"}`)}}xn.AbstractMessageReader=J_;var Kf;(function(t){function e(n){let r,i;const s=new Map;let o;const a=new Map;if(n===void 0||typeof n=="string")r=n??"utf-8";else{if(r=n.charset??"utf-8",n.contentDecoder!==void 0&&(i=n.contentDecoder,s.set(i.name,i)),n.contentDecoders!==void 0)for(const l of n.contentDecoders)s.set(l.name,l);if(n.contentTypeDecoder!==void 0&&(o=n.contentTypeDecoder,a.set(o.name,o)),n.contentTypeDecoders!==void 0)for(const l of n.contentTypeDecoders)a.set(l.name,l)}return o===void 0&&(o=(0,Bf.default)().applicationJson.decoder,a.set(o.name,o)),{charset:r,contentDecoder:i,contentDecoders:s,contentTypeDecoder:o,contentTypeDecoders:a}}t.fromOptions=e})(Kf||(Kf={}));class lN extends J_{constructor(e,n){super(),this.readable=e,this.options=Kf.fromOptions(n),this.buffer=(0,Bf.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new aN.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;const n=this.readable.onData(r=>{this.onData(r)});return this.readable.onError(r=>this.fireError(r)),this.readable.onClose(()=>this.fireClose()),n}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){const r=this.buffer.tryReadHeaders(!0);if(!r)return;const i=r.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`));return}const s=parseInt(i);if(isNaN(s)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=s}const n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{const r=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(r,this.options);this.callback(i)}).catch(r=>{this.fireError(r)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Bf.default)().timer.setTimeout((e,n)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}}xn.ReadableStreamMessageReader=lN;var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.WriteableStreamMessageWriter=Ln.AbstractMessageWriter=Ln.MessageWriter=void 0;const Rm=An,es=Fe,cN=js,wm=on,uN="Content-Length: ",km=`\r
`;var bm;(function(t){function e(n){let r=n;return r&&es.func(r.dispose)&&es.func(r.onClose)&&es.func(r.onError)&&es.func(r.write)}t.is=e})(bm||(Ln.MessageWriter=bm={}));class Q_{constructor(){this.errorEmitter=new wm.Emitter,this.closeEmitter=new wm.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,n,r){this.errorEmitter.fire([this.asError(e),n,r])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${es.string(e.message)?e.message:"unknown"}`)}}Ln.AbstractMessageWriter=Q_;var Wf;(function(t){function e(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,Rm.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,Rm.default)().applicationJson.encoder}}t.fromOptions=e})(Wf||(Wf={}));class dN extends Q_{constructor(e,n){super(),this.writable=e,this.options=Wf.fromOptions(n),this.errorCount=0,this.writeSemaphore=new cN.Semaphore(1),this.writable.onError(r=>this.fireError(r)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(r=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(r):r).then(r=>{const i=[];return i.push(uN,r.byteLength.toString(),km),i.push(km),this.doWrite(e,i,r)},r=>{throw this.fireError(r),r}))}async doWrite(e,n,r){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(r)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,n){this.errorCount++,this.fireError(e,n,this.errorCount)}end(){this.writable.end()}}Ln.WriteableStreamMessageWriter=dN;var Pc={};Object.defineProperty(Pc,"__esModule",{value:!0});Pc.AbstractMessageBuffer=void 0;const fN=13,hN=10,pN=`\r
`;class mN{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){const n=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let n=0,r=0,i=0,s=0;e:for(;r<this._chunks.length;){const c=this._chunks[r];for(i=0;i<c.length;){switch(c[i]){case fN:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case hN:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}s+=c.byteLength,r++}if(n!==4)return;const o=this._read(s+i),a=new Map,l=this.toString(o,"ascii").split(pN);if(l.length<2)return a;for(let c=0;c<l.length-2;c++){const u=l[c],f=u.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${u}`);const m=u.substr(0,f),g=u.substr(f+1).trim();a.set(e?m.toLowerCase():m,g)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){const s=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(s)}if(this._chunks[0].byteLength>e){const s=this._chunks[0],o=this.asNative(s,e);return this._chunks[0]=s.slice(e),this._totalLength-=e,o}const n=this.allocNative(e);let r=0,i=0;for(;e>0;){const s=this._chunks[i];if(s.byteLength>e){const o=s.slice(0,e);n.set(o,r),r+=e,this._chunks[i]=s.slice(e),this._totalLength-=e,e-=e}else n.set(s,r),r+=s.byteLength,this._chunks.shift(),this._totalLength-=s.byteLength,e-=s.byteLength}return n}}Pc.AbstractMessageBuffer=mN;var Z_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.ConnectionOptions=t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.RequestCancellationReceiverStrategy=t.IdCancellationReceiverStrategy=t.ConnectionStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=t.NullLogger=t.ProgressType=t.ProgressToken=void 0;const e=An,n=Fe,r=j,i=_n,s=on,o=Vn;var a;(function(k){k.type=new r.NotificationType("$/cancelRequest")})(a||(a={}));var l;(function(k){function C(N){return typeof N=="string"||typeof N=="number"}k.is=C})(l||(t.ProgressToken=l={}));var c;(function(k){k.type=new r.NotificationType("$/progress")})(c||(c={}));class u{constructor(){}}t.ProgressType=u;var f;(function(k){function C(N){return n.func(N)}k.is=C})(f||(f={})),t.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var m;(function(k){k[k.Off=0]="Off",k[k.Messages=1]="Messages",k[k.Compact=2]="Compact",k[k.Verbose=3]="Verbose"})(m||(t.Trace=m={}));var g;(function(k){k.Off="off",k.Messages="messages",k.Compact="compact",k.Verbose="verbose"})(g||(t.TraceValues=g={})),function(k){function C(P){if(!n.string(P))return k.Off;switch(P=P.toLowerCase(),P){case"off":return k.Off;case"messages":return k.Messages;case"compact":return k.Compact;case"verbose":return k.Verbose;default:return k.Off}}k.fromString=C;function N(P){switch(P){case k.Off:return"off";case k.Messages:return"messages";case k.Compact:return"compact";case k.Verbose:return"verbose";default:return"off"}}k.toString=N}(m||(t.Trace=m={}));var d;(function(k){k.Text="text",k.JSON="json"})(d||(t.TraceFormat=d={})),function(k){function C(N){return n.string(N)?(N=N.toLowerCase(),N==="json"?k.JSON:k.Text):k.Text}k.fromString=C}(d||(t.TraceFormat=d={}));var v;(function(k){k.type=new r.NotificationType("$/setTrace")})(v||(t.SetTraceNotification=v={}));var R;(function(k){k.type=new r.NotificationType("$/logTrace")})(R||(t.LogTraceNotification=R={}));var _;(function(k){k[k.Closed=1]="Closed",k[k.Disposed=2]="Disposed",k[k.AlreadyListening=3]="AlreadyListening"})(_||(t.ConnectionErrors=_={}));class h extends Error{constructor(C,N){super(N),this.code=C,Object.setPrototypeOf(this,h.prototype)}}t.ConnectionError=h;var p;(function(k){function C(N){const P=N;return P&&n.func(P.cancelUndispatched)}k.is=C})(p||(t.ConnectionStrategy=p={}));var w;(function(k){function C(N){const P=N;return P&&(P.kind===void 0||P.kind==="id")&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}k.is=C})(w||(t.IdCancellationReceiverStrategy=w={}));var F;(function(k){function C(N){const P=N;return P&&P.kind==="request"&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}k.is=C})(F||(t.RequestCancellationReceiverStrategy=F={}));var G;(function(k){k.Message=Object.freeze({createCancellationTokenSource(N){return new o.CancellationTokenSource}});function C(N){return w.is(N)||F.is(N)}k.is=C})(G||(t.CancellationReceiverStrategy=G={}));var J;(function(k){k.Message=Object.freeze({sendCancellation(N,P){return N.sendNotification(a.type,{id:P})},cleanup(N){}});function C(N){const P=N;return P&&n.func(P.sendCancellation)&&n.func(P.cleanup)}k.is=C})(J||(t.CancellationSenderStrategy=J={}));var ke;(function(k){k.Message=Object.freeze({receiver:G.Message,sender:J.Message});function C(N){const P=N;return P&&G.is(P.receiver)&&J.is(P.sender)}k.is=C})(ke||(t.CancellationStrategy=ke={}));var Ee;(function(k){function C(N){const P=N;return P&&n.func(P.handleMessage)}k.is=C})(Ee||(t.MessageStrategy=Ee={}));var Pe;(function(k){function C(N){const P=N;return P&&(ke.is(P.cancellationStrategy)||p.is(P.connectionStrategy)||Ee.is(P.messageStrategy))}k.is=C})(Pe||(t.ConnectionOptions=Pe={}));var A;(function(k){k[k.New=1]="New",k[k.Listening=2]="Listening",k[k.Closed=3]="Closed",k[k.Disposed=4]="Disposed"})(A||(A={}));function E(k,C,N,P){const O=N!==void 0?N:t.NullLogger;let He=0,x=0,S=0;const te="2.0";let Vt;const Yt=new Map;let Le;const Xt=new Map,ye=new Map;let je,Ge=new i.LinkedMap,ve=new Map,ze=new Set,Ae=new Map,V=m.Off,Ke=d.Text,ue,ft=A.New;const wr=new s.Emitter,ii=new s.Emitter,si=new s.Emitter,oi=new s.Emitter,ai=new s.Emitter,Ft=P&&P.cancellationStrategy?P.cancellationStrategy:ke.Message;function li(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}function qs(T){return T===null?"res-unknown-"+(++S).toString():"res-"+T.toString()}function Bs(){return"not-"+(++x).toString()}function Ks(T,$){r.Message.isRequest($)?T.set(li($.id),$):r.Message.isResponse($)?T.set(qs($.id),$):T.set(Bs(),$)}function Ws(T){}function ci(){return ft===A.Listening}function ui(){return ft===A.Closed}function dn(){return ft===A.Disposed}function di(){(ft===A.New||ft===A.Listening)&&(ft=A.Closed,ii.fire(void 0))}function Gs(T){wr.fire([T,void 0,void 0])}function zs(T){wr.fire(T)}k.onClose(di),k.onError(Gs),C.onClose(di),C.onError(zs);function fi(){je||Ge.size===0||(je=(0,e.default)().timer.setImmediate(()=>{je=void 0,Vs()}))}function hi(T){r.Message.isRequest(T)?Xs(T):r.Message.isNotification(T)?Qs(T):r.Message.isResponse(T)?Js(T):Zs(T)}function Vs(){if(Ge.size===0)return;const T=Ge.shift();try{const $=P==null?void 0:P.messageStrategy;Ee.is($)?$.handleMessage(T,hi):hi(T)}finally{fi()}}const Ys=T=>{try{if(r.Message.isNotification(T)&&T.method===a.type.method){const $=T.params.id,I=li($),H=Ge.get(I);if(r.Message.isRequest(H)){const ae=P==null?void 0:P.connectionStrategy,de=ae&&ae.cancelUndispatched?ae.cancelUndispatched(H,Ws):void 0;if(de&&(de.error!==void 0||de.result!==void 0)){Ge.delete(I),Ae.delete($),de.id=H.id,er(de,T.method,Date.now()),C.write(de).catch(()=>O.error("Sending response for canceled message failed."));return}}const pe=Ae.get($);if(pe!==void 0){pe.cancel(),kr(T);return}else ze.add($)}Ks(Ge,T)}finally{fi()}};function Xs(T){if(dn())return;function $(Z,_e,se){const Ue={jsonrpc:te,id:T.id};Z instanceof r.ResponseError?Ue.error=Z.toJson():Ue.result=Z===void 0?null:Z,er(Ue,_e,se),C.write(Ue).catch(()=>O.error("Sending response failed."))}function I(Z,_e,se){const Ue={jsonrpc:te,id:T.id,error:Z.toJson()};er(Ue,_e,se),C.write(Ue).catch(()=>O.error("Sending response failed."))}function H(Z,_e,se){Z===void 0&&(Z=null);const Ue={jsonrpc:te,id:T.id,result:Z};er(Ue,_e,se),C.write(Ue).catch(()=>O.error("Sending response failed."))}no(T);const pe=Yt.get(T.method);let ae,de;pe&&(ae=pe.type,de=pe.handler);const De=Date.now();if(de||Vt){const Z=T.id??String(Date.now()),_e=w.is(Ft.receiver)?Ft.receiver.createCancellationTokenSource(Z):Ft.receiver.createCancellationTokenSource(T);T.id!==null&&ze.has(T.id)&&_e.cancel(),T.id!==null&&Ae.set(Z,_e);try{let se;if(de)if(T.params===void 0){if(ae!==void 0&&ae.numberOfParams!==0){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines ${ae.numberOfParams} params but received none.`),T.method,De);return}se=de(_e.token)}else if(Array.isArray(T.params)){if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byName){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,De);return}se=de(...T.params,_e.token)}else{if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byPosition){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,De);return}se=de(T.params,_e.token)}else Vt&&(se=Vt(T.method,T.params,_e.token));const Ue=se;se?Ue.then?Ue.then(st=>{Ae.delete(Z),$(st,T.method,De)},st=>{Ae.delete(Z),st instanceof r.ResponseError?I(st,T.method,De):st&&n.string(st.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${st.message}`),T.method,De):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,De)}):(Ae.delete(Z),$(se,T.method,De)):(Ae.delete(Z),H(se,T.method,De))}catch(se){Ae.delete(Z),se instanceof r.ResponseError?$(se,T.method,De):se&&n.string(se.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${se.message}`),T.method,De):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,De)}}else I(new r.ResponseError(r.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,De)}function Js(T){if(!dn())if(T.id===null)T.error?O.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):O.error("Received response message without id. No further error information provided.");else{const $=T.id,I=ve.get($);if(ro(T,I),I!==void 0){ve.delete($);try{if(T.error){const H=T.error;I.reject(new r.ResponseError(H.code,H.message,H.data))}else if(T.result!==void 0)I.resolve(T.result);else throw new Error("Should never happen.")}catch(H){H.message?O.error(`Response handler '${I.method}' failed with message: ${H.message}`):O.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}function Qs(T){if(dn())return;let $,I;if(T.method===a.type.method){const H=T.params.id;ze.delete(H),kr(T);return}else{const H=Xt.get(T.method);H&&(I=H.handler,$=H.type)}if(I||Le)try{if(kr(T),I)if(T.params===void 0)$!==void 0&&$.numberOfParams!==0&&$.parameterStructures!==r.ParameterStructures.byName&&O.error(`Notification ${T.method} defines ${$.numberOfParams} params but received none.`),I();else if(Array.isArray(T.params)){const H=T.params;T.method===c.type.method&&H.length===2&&l.is(H[0])?I({token:H[0],value:H[1]}):($!==void 0&&($.parameterStructures===r.ParameterStructures.byName&&O.error(`Notification ${T.method} defines parameters by name but received parameters by position`),$.numberOfParams!==T.params.length&&O.error(`Notification ${T.method} defines ${$.numberOfParams} params but received ${H.length} arguments`)),I(...H))}else $!==void 0&&$.parameterStructures===r.ParameterStructures.byPosition&&O.error(`Notification ${T.method} defines parameters by position but received parameters by name`),I(T.params);else Le&&Le(T.method,T.params)}catch(H){H.message?O.error(`Notification handler '${T.method}' failed with message: ${H.message}`):O.error(`Notification handler '${T.method}' failed unexpectedly.`)}else si.fire(T)}function Zs(T){if(!T){O.error("Received empty message.");return}O.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);const $=T;if(n.string($.id)||n.number($.id)){const I=$.id,H=ve.get(I);H&&H.reject(new Error("The received response has neither a result nor an error property."))}}function Ht(T){if(T!=null)switch(V){case m.Verbose:return JSON.stringify(T,null,4);case m.Compact:return JSON.stringify(T);default:return}}function eo(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let $;(V===m.Verbose||V===m.Compact)&&T.params&&($=`Params: ${Ht(T.params)}

`),ue.log(`Sending request '${T.method} - (${T.id})'.`,$)}else fn("send-request",T)}function to(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let $;(V===m.Verbose||V===m.Compact)&&(T.params?$=`Params: ${Ht(T.params)}

`:$=`No parameters provided.

`),ue.log(`Sending notification '${T.method}'.`,$)}else fn("send-notification",T)}function er(T,$,I){if(!(V===m.Off||!ue))if(Ke===d.Text){let H;(V===m.Verbose||V===m.Compact)&&(T.error&&T.error.data?H=`Error data: ${Ht(T.error.data)}

`:T.result?H=`Result: ${Ht(T.result)}

`:T.error===void 0&&(H=`No result returned.

`)),ue.log(`Sending response '${$} - (${T.id})'. Processing request took ${Date.now()-I}ms`,H)}else fn("send-response",T)}function no(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let $;(V===m.Verbose||V===m.Compact)&&T.params&&($=`Params: ${Ht(T.params)}

`),ue.log(`Received request '${T.method} - (${T.id})'.`,$)}else fn("receive-request",T)}function kr(T){if(!(V===m.Off||!ue||T.method===R.type.method))if(Ke===d.Text){let $;(V===m.Verbose||V===m.Compact)&&(T.params?$=`Params: ${Ht(T.params)}

`:$=`No parameters provided.

`),ue.log(`Received notification '${T.method}'.`,$)}else fn("receive-notification",T)}function ro(T,$){if(!(V===m.Off||!ue))if(Ke===d.Text){let I;if((V===m.Verbose||V===m.Compact)&&(T.error&&T.error.data?I=`Error data: ${Ht(T.error.data)}

`:T.result?I=`Result: ${Ht(T.result)}

`:T.error===void 0&&(I=`No result returned.

`)),$){const H=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";ue.log(`Received response '${$.method} - (${T.id})' in ${Date.now()-$.timerStart}ms.${H}`,I)}else ue.log(`Received response ${T.id} without active response promise.`,I)}else fn("receive-response",T)}function fn(T,$){if(!ue||V===m.Off)return;const I={isLSPMessage:!0,type:T,message:$,timestamp:Date.now()};ue.log(I)}function Nn(){if(ui())throw new h(_.Closed,"Connection is closed.");if(dn())throw new h(_.Disposed,"Connection is disposed.")}function io(){if(ci())throw new h(_.AlreadyListening,"Connection is already listening")}function so(){if(!ci())throw new Error("Call listen() first.")}function In(T){return T===void 0?null:T}function pi(T){if(T!==null)return T}function y(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}function Ne(T,$){switch(T){case r.ParameterStructures.auto:return y($)?pi($):[In($)];case r.ParameterStructures.byName:if(!y($))throw new Error("Received parameters by name but param is not an object literal.");return pi($);case r.ParameterStructures.byPosition:return[In($)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}function Ie(T,$){let I;const H=T.numberOfParams;switch(H){case 0:I=void 0;break;case 1:I=Ne(T.parameterStructures,$[0]);break;default:I=[];for(let pe=0;pe<$.length&&pe<H;pe++)I.push(In($[pe]));if($.length<H)for(let pe=$.length;pe<H;pe++)I.push(null);break}return I}const W={sendNotification:(T,...$)=>{Nn();let I,H;if(n.string(T)){I=T;const ae=$[0];let de=0,De=r.ParameterStructures.auto;r.ParameterStructures.is(ae)&&(de=1,De=ae);let Z=$.length;const _e=Z-de;switch(_e){case 0:H=void 0;break;case 1:H=Ne(De,$[de]);break;default:if(De===r.ParameterStructures.byName)throw new Error(`Received ${_e} parameters for 'by Name' notification parameter structure.`);H=$.slice(de,Z).map(se=>In(se));break}}else{const ae=$;I=T.method,H=Ie(T,ae)}const pe={jsonrpc:te,method:I,params:H};return to(pe),C.write(pe).catch(ae=>{throw O.error("Sending notification failed."),ae})},onNotification:(T,$)=>{Nn();let I;return n.func(T)?Le=T:$&&(n.string(T)?(I=T,Xt.set(T,{type:void 0,handler:$})):(I=T.method,Xt.set(T.method,{type:T,handler:$}))),{dispose:()=>{I!==void 0?Xt.delete(I):Le=void 0}}},onProgress:(T,$,I)=>{if(ye.has($))throw new Error(`Progress handler for token ${$} already registered`);return ye.set($,I),{dispose:()=>{ye.delete($)}}},sendProgress:(T,$,I)=>W.sendNotification(c.type,{token:$,value:I}),onUnhandledProgress:oi.event,sendRequest:(T,...$)=>{Nn(),so();let I,H,pe;if(n.string(T)){I=T;const Z=$[0],_e=$[$.length-1];let se=0,Ue=r.ParameterStructures.auto;r.ParameterStructures.is(Z)&&(se=1,Ue=Z);let st=$.length;o.CancellationToken.is(_e)&&(st=st-1,pe=_e);const Jt=st-se;switch(Jt){case 0:H=void 0;break;case 1:H=Ne(Ue,$[se]);break;default:if(Ue===r.ParameterStructures.byName)throw new Error(`Received ${Jt} parameters for 'by Name' request parameter structure.`);H=$.slice(se,st).map(AT=>In(AT));break}}else{const Z=$;I=T.method,H=Ie(T,Z);const _e=T.numberOfParams;pe=o.CancellationToken.is(Z[_e])?Z[_e]:void 0}const ae=He++;let de;pe&&(de=pe.onCancellationRequested(()=>{const Z=Ft.sender.sendCancellation(W,ae);return Z===void 0?(O.log(`Received no promise from cancellation strategy when cancelling id ${ae}`),Promise.resolve()):Z.catch(()=>{O.log(`Sending cancellation messages for id ${ae} failed`)})}));const De={jsonrpc:te,id:ae,method:I,params:H};return eo(De),typeof Ft.sender.enableCancellation=="function"&&Ft.sender.enableCancellation(De),new Promise(async(Z,_e)=>{const se=Jt=>{Z(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},Ue=Jt=>{_e(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},st={method:I,timerStart:Date.now(),resolve:se,reject:Ue};try{await C.write(De),ve.set(ae,st)}catch(Jt){throw O.error("Sending request failed."),st.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError,Jt.message?Jt.message:"Unknown reason")),Jt}})},onRequest:(T,$)=>{Nn();let I=null;return f.is(T)?(I=void 0,Vt=T):n.string(T)?(I=null,$!==void 0&&(I=T,Yt.set(T,{handler:$,type:void 0}))):$!==void 0&&(I=T.method,Yt.set(T.method,{type:T,handler:$})),{dispose:()=>{I!==null&&(I!==void 0?Yt.delete(I):Vt=void 0)}}},hasPendingResponse:()=>ve.size>0,trace:async(T,$,I)=>{let H=!1,pe=d.Text;I!==void 0&&(n.boolean(I)?H=I:(H=I.sendNotification||!1,pe=I.traceFormat||d.Text)),V=T,Ke=pe,V===m.Off?ue=void 0:ue=$,H&&!ui()&&!dn()&&await W.sendNotification(v.type,{value:m.toString(T)})},onError:wr.event,onClose:ii.event,onUnhandledNotification:si.event,onDispose:ai.event,end:()=>{C.end()},dispose:()=>{if(dn())return;ft=A.Disposed,ai.fire(void 0);const T=new r.ResponseError(r.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(const $ of ve.values())$.reject(T);ve=new Map,Ae=new Map,ze=new Set,Ge=new i.LinkedMap,n.func(C.dispose)&&C.dispose(),n.func(k.dispose)&&k.dispose()},listen:()=>{Nn(),io(),ft=A.Listening,k.listen(Ys)},inspect:()=>{(0,e.default)().console.log("inspect")}};return W.onNotification(R.type,T=>{if(V===m.Off||!ue)return;const $=V===m.Verbose||V===m.Compact;ue.log(T.message,$?T.verbose:void 0)}),W.onNotification(c.type,T=>{const $=ye.get(T.token);$?$(T.value):oi.fire(T)}),W}t.createMessageConnection=E})(Z_);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressType=t.ProgressToken=t.createMessageConnection=t.NullLogger=t.ConnectionOptions=t.ConnectionStrategy=t.AbstractMessageBuffer=t.WriteableStreamMessageWriter=t.AbstractMessageWriter=t.MessageWriter=t.ReadableStreamMessageReader=t.AbstractMessageReader=t.MessageReader=t.SharedArrayReceiverStrategy=t.SharedArraySenderStrategy=t.CancellationToken=t.CancellationTokenSource=t.Emitter=t.Event=t.Disposable=t.LRUCache=t.Touch=t.LinkedMap=t.ParameterStructures=t.NotificationType9=t.NotificationType8=t.NotificationType7=t.NotificationType6=t.NotificationType5=t.NotificationType4=t.NotificationType3=t.NotificationType2=t.NotificationType1=t.NotificationType0=t.NotificationType=t.ErrorCodes=t.ResponseError=t.RequestType9=t.RequestType8=t.RequestType7=t.RequestType6=t.RequestType5=t.RequestType4=t.RequestType3=t.RequestType2=t.RequestType1=t.RequestType0=t.RequestType=t.Message=t.RAL=void 0,t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=void 0;const e=j;Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return e.Message}}),Object.defineProperty(t,"RequestType",{enumerable:!0,get:function(){return e.RequestType}}),Object.defineProperty(t,"RequestType0",{enumerable:!0,get:function(){return e.RequestType0}}),Object.defineProperty(t,"RequestType1",{enumerable:!0,get:function(){return e.RequestType1}}),Object.defineProperty(t,"RequestType2",{enumerable:!0,get:function(){return e.RequestType2}}),Object.defineProperty(t,"RequestType3",{enumerable:!0,get:function(){return e.RequestType3}}),Object.defineProperty(t,"RequestType4",{enumerable:!0,get:function(){return e.RequestType4}}),Object.defineProperty(t,"RequestType5",{enumerable:!0,get:function(){return e.RequestType5}}),Object.defineProperty(t,"RequestType6",{enumerable:!0,get:function(){return e.RequestType6}}),Object.defineProperty(t,"RequestType7",{enumerable:!0,get:function(){return e.RequestType7}}),Object.defineProperty(t,"RequestType8",{enumerable:!0,get:function(){return e.RequestType8}}),Object.defineProperty(t,"RequestType9",{enumerable:!0,get:function(){return e.RequestType9}}),Object.defineProperty(t,"ResponseError",{enumerable:!0,get:function(){return e.ResponseError}}),Object.defineProperty(t,"ErrorCodes",{enumerable:!0,get:function(){return e.ErrorCodes}}),Object.defineProperty(t,"NotificationType",{enumerable:!0,get:function(){return e.NotificationType}}),Object.defineProperty(t,"NotificationType0",{enumerable:!0,get:function(){return e.NotificationType0}}),Object.defineProperty(t,"NotificationType1",{enumerable:!0,get:function(){return e.NotificationType1}}),Object.defineProperty(t,"NotificationType2",{enumerable:!0,get:function(){return e.NotificationType2}}),Object.defineProperty(t,"NotificationType3",{enumerable:!0,get:function(){return e.NotificationType3}}),Object.defineProperty(t,"NotificationType4",{enumerable:!0,get:function(){return e.NotificationType4}}),Object.defineProperty(t,"NotificationType5",{enumerable:!0,get:function(){return e.NotificationType5}}),Object.defineProperty(t,"NotificationType6",{enumerable:!0,get:function(){return e.NotificationType6}}),Object.defineProperty(t,"NotificationType7",{enumerable:!0,get:function(){return e.NotificationType7}}),Object.defineProperty(t,"NotificationType8",{enumerable:!0,get:function(){return e.NotificationType8}}),Object.defineProperty(t,"NotificationType9",{enumerable:!0,get:function(){return e.NotificationType9}}),Object.defineProperty(t,"ParameterStructures",{enumerable:!0,get:function(){return e.ParameterStructures}});const n=_n;Object.defineProperty(t,"LinkedMap",{enumerable:!0,get:function(){return n.LinkedMap}}),Object.defineProperty(t,"LRUCache",{enumerable:!0,get:function(){return n.LRUCache}}),Object.defineProperty(t,"Touch",{enumerable:!0,get:function(){return n.Touch}});const r=Ec;Object.defineProperty(t,"Disposable",{enumerable:!0,get:function(){return r.Disposable}});const i=on;Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return i.Emitter}});const s=Vn;Object.defineProperty(t,"CancellationTokenSource",{enumerable:!0,get:function(){return s.CancellationTokenSource}}),Object.defineProperty(t,"CancellationToken",{enumerable:!0,get:function(){return s.CancellationToken}});const o=Br;Object.defineProperty(t,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return o.SharedArraySenderStrategy}}),Object.defineProperty(t,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return o.SharedArrayReceiverStrategy}});const a=xn;Object.defineProperty(t,"MessageReader",{enumerable:!0,get:function(){return a.MessageReader}}),Object.defineProperty(t,"AbstractMessageReader",{enumerable:!0,get:function(){return a.AbstractMessageReader}}),Object.defineProperty(t,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return a.ReadableStreamMessageReader}});const l=Ln;Object.defineProperty(t,"MessageWriter",{enumerable:!0,get:function(){return l.MessageWriter}}),Object.defineProperty(t,"AbstractMessageWriter",{enumerable:!0,get:function(){return l.AbstractMessageWriter}}),Object.defineProperty(t,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return l.WriteableStreamMessageWriter}});const c=Pc;Object.defineProperty(t,"AbstractMessageBuffer",{enumerable:!0,get:function(){return c.AbstractMessageBuffer}});const u=Z_;Object.defineProperty(t,"ConnectionStrategy",{enumerable:!0,get:function(){return u.ConnectionStrategy}}),Object.defineProperty(t,"ConnectionOptions",{enumerable:!0,get:function(){return u.ConnectionOptions}}),Object.defineProperty(t,"NullLogger",{enumerable:!0,get:function(){return u.NullLogger}}),Object.defineProperty(t,"createMessageConnection",{enumerable:!0,get:function(){return u.createMessageConnection}}),Object.defineProperty(t,"ProgressToken",{enumerable:!0,get:function(){return u.ProgressToken}}),Object.defineProperty(t,"ProgressType",{enumerable:!0,get:function(){return u.ProgressType}}),Object.defineProperty(t,"Trace",{enumerable:!0,get:function(){return u.Trace}}),Object.defineProperty(t,"TraceValues",{enumerable:!0,get:function(){return u.TraceValues}}),Object.defineProperty(t,"TraceFormat",{enumerable:!0,get:function(){return u.TraceFormat}}),Object.defineProperty(t,"SetTraceNotification",{enumerable:!0,get:function(){return u.SetTraceNotification}}),Object.defineProperty(t,"LogTraceNotification",{enumerable:!0,get:function(){return u.LogTraceNotification}}),Object.defineProperty(t,"ConnectionErrors",{enumerable:!0,get:function(){return u.ConnectionErrors}}),Object.defineProperty(t,"ConnectionError",{enumerable:!0,get:function(){return u.ConnectionError}}),Object.defineProperty(t,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return u.CancellationReceiverStrategy}}),Object.defineProperty(t,"CancellationSenderStrategy",{enumerable:!0,get:function(){return u.CancellationSenderStrategy}}),Object.defineProperty(t,"CancellationStrategy",{enumerable:!0,get:function(){return u.CancellationStrategy}}),Object.defineProperty(t,"MessageStrategy",{enumerable:!0,get:function(){return u.MessageStrategy}});const f=An;t.RAL=f.default})(Xl);Object.defineProperty(Fh,"__esModule",{value:!0});const Zt=Xl;class Ac extends Zt.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return Ac.emptyBuffer}fromString(e,n){return new TextEncoder().encode(e)}toString(e,n){return n==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(n).decode(e)}asNative(e,n){return n===void 0?e:e.slice(0,n)}allocNative(e){return new Uint8Array(e)}}Ac.emptyBuffer=new Uint8Array(0);class gN{constructor(e){this.socket=e,this._onData=new Zt.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Zt.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}}class yN{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,n){if(typeof e=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}}const vN=new TextEncoder,eT=Object.freeze({messageBuffer:Object.freeze({create:t=>new Ac(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(vN.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new gN(t),asWritableStream:t=>new yN(t)}),console,timer:Object.freeze({setTimeout(t,e,...n){const r=setTimeout(t,e,...n);return{dispose:()=>clearTimeout(r)}},setImmediate(t,...e){const n=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(n)}},setInterval(t,e,...n){const r=setInterval(t,e,...n);return{dispose:()=>clearInterval(r)}}})});function Gf(){return eT}(function(t){function e(){Zt.RAL.install(eT)}t.install=e})(Gf||(Gf={}));Fh.default=Gf;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(l,c,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(c,u);(!m||("get"in m?!c.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,f,m)}:function(l,c,u,f){f===void 0&&(f=u),l[f]=c[u]}),n=xe&&xe.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.BrowserMessageWriter=t.BrowserMessageReader=void 0,Fh.default.install();const i=Xl;n(Xl,t);class s extends i.AbstractMessageReader{constructor(c){super(),this._onData=new i.Emitter,this._messageListener=u=>{this._onData.fire(u.data)},c.addEventListener("error",u=>this.fireError(u)),c.onmessage=this._messageListener}listen(c){return this._onData.event(c)}}t.BrowserMessageReader=s;class o extends i.AbstractMessageWriter{constructor(c){super(),this.port=c,this.errorCount=0,c.addEventListener("error",u=>this.fireError(u))}write(c){try{return this.port.postMessage(c),Promise.resolve()}catch(u){return this.handleError(u,c),Promise.reject(u)}}handleError(c,u){this.errorCount++,this.fireError(c,u,this.errorCount)}end(){}}t.BrowserMessageWriter=o;function a(l,c,u,f){return u===void 0&&(u=i.NullLogger),i.ConnectionStrategy.is(f)&&(f={connectionStrategy:f}),(0,i.createMessageConnection)(l,c,u,f)}t.createMessageConnection=a})(Tr);var Sm=Tr,tT={},jh=RA(eA),X={};Object.defineProperty(X,"__esModule",{value:!0});X.ProtocolNotificationType=X.ProtocolNotificationType0=X.ProtocolRequestType=X.ProtocolRequestType0=X.RegistrationType=X.MessageDirection=void 0;const Kr=Tr;var $m;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})($m||(X.MessageDirection=$m={}));class _N{constructor(e){this.method=e}}X.RegistrationType=_N;class TN extends Kr.RequestType0{constructor(e){super(e)}}X.ProtocolRequestType0=TN;class RN extends Kr.RequestType{constructor(e){super(e,Kr.ParameterStructures.byName)}}X.ProtocolRequestType=RN;class wN extends Kr.NotificationType0{constructor(e){super(e)}}X.ProtocolNotificationType0=wN;class kN extends Kr.NotificationType{constructor(e){super(e,Kr.ParameterStructures.byName)}}X.ProtocolNotificationType=kN;var nT={},Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.objectLiteral=Se.typedArray=Se.stringArray=Se.array=Se.func=Se.error=Se.number=Se.string=Se.boolean=void 0;function bN(t){return t===!0||t===!1}Se.boolean=bN;function rT(t){return typeof t=="string"||t instanceof String}Se.string=rT;function SN(t){return typeof t=="number"||t instanceof Number}Se.number=SN;function $N(t){return t instanceof Error}Se.error=$N;function CN(t){return typeof t=="function"}Se.func=CN;function iT(t){return Array.isArray(t)}Se.array=iT;function EN(t){return iT(t)&&t.every(e=>rT(e))}Se.stringArray=EN;function PN(t,e){return Array.isArray(t)&&t.every(e)}Se.typedArray=PN;function AN(t){return t!==null&&typeof t=="object"}Se.objectLiteral=AN;var Nc={};Object.defineProperty(Nc,"__esModule",{value:!0});Nc.ImplementationRequest=void 0;const Cm=X;var Em;(function(t){t.method="textDocument/implementation",t.messageDirection=Cm.MessageDirection.clientToServer,t.type=new Cm.ProtocolRequestType(t.method)})(Em||(Nc.ImplementationRequest=Em={}));var Ic={};Object.defineProperty(Ic,"__esModule",{value:!0});Ic.TypeDefinitionRequest=void 0;const Pm=X;var Am;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Pm.MessageDirection.clientToServer,t.type=new Pm.ProtocolRequestType(t.method)})(Am||(Ic.TypeDefinitionRequest=Am={}));var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.DidChangeWorkspaceFoldersNotification=Wr.WorkspaceFoldersRequest=void 0;const Jl=X;var Nm;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Jl.MessageDirection.serverToClient,t.type=new Jl.ProtocolRequestType0(t.method)})(Nm||(Wr.WorkspaceFoldersRequest=Nm={}));var Im;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Jl.MessageDirection.clientToServer,t.type=new Jl.ProtocolNotificationType(t.method)})(Im||(Wr.DidChangeWorkspaceFoldersNotification=Im={}));var Dc={};Object.defineProperty(Dc,"__esModule",{value:!0});Dc.ConfigurationRequest=void 0;const Dm=X;var Om;(function(t){t.method="workspace/configuration",t.messageDirection=Dm.MessageDirection.serverToClient,t.type=new Dm.ProtocolRequestType(t.method)})(Om||(Dc.ConfigurationRequest=Om={}));var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.ColorPresentationRequest=Gr.DocumentColorRequest=void 0;const Ql=X;var xm;(function(t){t.method="textDocument/documentColor",t.messageDirection=Ql.MessageDirection.clientToServer,t.type=new Ql.ProtocolRequestType(t.method)})(xm||(Gr.DocumentColorRequest=xm={}));var Lm;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Ql.MessageDirection.clientToServer,t.type=new Ql.ProtocolRequestType(t.method)})(Lm||(Gr.ColorPresentationRequest=Lm={}));var zr={};Object.defineProperty(zr,"__esModule",{value:!0});zr.FoldingRangeRefreshRequest=zr.FoldingRangeRequest=void 0;const Zl=X;var Mm;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Zl.MessageDirection.clientToServer,t.type=new Zl.ProtocolRequestType(t.method)})(Mm||(zr.FoldingRangeRequest=Mm={}));var Fm;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=Zl.MessageDirection.serverToClient,t.type=new Zl.ProtocolRequestType0(t.method)})(Fm||(zr.FoldingRangeRefreshRequest=Fm={}));var Oc={};Object.defineProperty(Oc,"__esModule",{value:!0});Oc.DeclarationRequest=void 0;const Hm=X;var jm;(function(t){t.method="textDocument/declaration",t.messageDirection=Hm.MessageDirection.clientToServer,t.type=new Hm.ProtocolRequestType(t.method)})(jm||(Oc.DeclarationRequest=jm={}));var xc={};Object.defineProperty(xc,"__esModule",{value:!0});xc.SelectionRangeRequest=void 0;const Um=X;var qm;(function(t){t.method="textDocument/selectionRange",t.messageDirection=Um.MessageDirection.clientToServer,t.type=new Um.ProtocolRequestType(t.method)})(qm||(xc.SelectionRangeRequest=qm={}));var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.WorkDoneProgressCancelNotification=Mn.WorkDoneProgressCreateRequest=Mn.WorkDoneProgress=void 0;const NN=Tr,ec=X;var Bm;(function(t){t.type=new NN.ProgressType;function e(n){return n===t.type}t.is=e})(Bm||(Mn.WorkDoneProgress=Bm={}));var Km;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=ec.MessageDirection.serverToClient,t.type=new ec.ProtocolRequestType(t.method)})(Km||(Mn.WorkDoneProgressCreateRequest=Km={}));var Wm;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=ec.MessageDirection.clientToServer,t.type=new ec.ProtocolNotificationType(t.method)})(Wm||(Mn.WorkDoneProgressCancelNotification=Wm={}));var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.CallHierarchyOutgoingCallsRequest=Fn.CallHierarchyIncomingCallsRequest=Fn.CallHierarchyPrepareRequest=void 0;const Vr=X;var Gm;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(Gm||(Fn.CallHierarchyPrepareRequest=Gm={}));var zm;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(zm||(Fn.CallHierarchyIncomingCallsRequest=zm={}));var Vm;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(Vm||(Fn.CallHierarchyOutgoingCallsRequest=Vm={}));var ht={};Object.defineProperty(ht,"__esModule",{value:!0});ht.SemanticTokensRefreshRequest=ht.SemanticTokensRangeRequest=ht.SemanticTokensDeltaRequest=ht.SemanticTokensRequest=ht.SemanticTokensRegistrationType=ht.TokenFormat=void 0;const Sn=X;var Ym;(function(t){t.Relative="relative"})(Ym||(ht.TokenFormat=Ym={}));var Rs;(function(t){t.method="textDocument/semanticTokens",t.type=new Sn.RegistrationType(t.method)})(Rs||(ht.SemanticTokensRegistrationType=Rs={}));var Xm;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(Xm||(ht.SemanticTokensRequest=Xm={}));var Jm;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(Jm||(ht.SemanticTokensDeltaRequest=Jm={}));var Qm;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(Qm||(ht.SemanticTokensRangeRequest=Qm={}));var Zm;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Sn.MessageDirection.serverToClient,t.type=new Sn.ProtocolRequestType0(t.method)})(Zm||(ht.SemanticTokensRefreshRequest=Zm={}));var Lc={};Object.defineProperty(Lc,"__esModule",{value:!0});Lc.ShowDocumentRequest=void 0;const eg=X;var tg;(function(t){t.method="window/showDocument",t.messageDirection=eg.MessageDirection.serverToClient,t.type=new eg.ProtocolRequestType(t.method)})(tg||(Lc.ShowDocumentRequest=tg={}));var Mc={};Object.defineProperty(Mc,"__esModule",{value:!0});Mc.LinkedEditingRangeRequest=void 0;const ng=X;var rg;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=ng.MessageDirection.clientToServer,t.type=new ng.ProtocolRequestType(t.method)})(rg||(Mc.LinkedEditingRangeRequest=rg={}));var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.WillDeleteFilesRequest=tt.DidDeleteFilesNotification=tt.DidRenameFilesNotification=tt.WillRenameFilesRequest=tt.DidCreateFilesNotification=tt.WillCreateFilesRequest=tt.FileOperationPatternKind=void 0;const Mt=X;var ig;(function(t){t.file="file",t.folder="folder"})(ig||(tt.FileOperationPatternKind=ig={}));var sg;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(sg||(tt.WillCreateFilesRequest=sg={}));var og;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(og||(tt.DidCreateFilesNotification=og={}));var ag;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(ag||(tt.WillRenameFilesRequest=ag={}));var lg;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(lg||(tt.DidRenameFilesNotification=lg={}));var cg;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(cg||(tt.DidDeleteFilesNotification=cg={}));var ug;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(ug||(tt.WillDeleteFilesRequest=ug={}));var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.MonikerRequest=Hn.MonikerKind=Hn.UniquenessLevel=void 0;const dg=X;var fg;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(fg||(Hn.UniquenessLevel=fg={}));var hg;(function(t){t.$import="import",t.$export="export",t.local="local"})(hg||(Hn.MonikerKind=hg={}));var pg;(function(t){t.method="textDocument/moniker",t.messageDirection=dg.MessageDirection.clientToServer,t.type=new dg.ProtocolRequestType(t.method)})(pg||(Hn.MonikerRequest=pg={}));var jn={};Object.defineProperty(jn,"__esModule",{value:!0});jn.TypeHierarchySubtypesRequest=jn.TypeHierarchySupertypesRequest=jn.TypeHierarchyPrepareRequest=void 0;const Yr=X;var mg;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(mg||(jn.TypeHierarchyPrepareRequest=mg={}));var gg;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(gg||(jn.TypeHierarchySupertypesRequest=gg={}));var yg;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Yr.MessageDirection.clientToServer,t.type=new Yr.ProtocolRequestType(t.method)})(yg||(jn.TypeHierarchySubtypesRequest=yg={}));var Xr={};Object.defineProperty(Xr,"__esModule",{value:!0});Xr.InlineValueRefreshRequest=Xr.InlineValueRequest=void 0;const tc=X;var vg;(function(t){t.method="textDocument/inlineValue",t.messageDirection=tc.MessageDirection.clientToServer,t.type=new tc.ProtocolRequestType(t.method)})(vg||(Xr.InlineValueRequest=vg={}));var _g;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=tc.MessageDirection.serverToClient,t.type=new tc.ProtocolRequestType0(t.method)})(_g||(Xr.InlineValueRefreshRequest=_g={}));var Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.InlayHintRefreshRequest=Un.InlayHintResolveRequest=Un.InlayHintRequest=void 0;const Jr=X;var Tg;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method)})(Tg||(Un.InlayHintRequest=Tg={}));var Rg;(function(t){t.method="inlayHint/resolve",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method)})(Rg||(Un.InlayHintResolveRequest=Rg={}));var wg;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Jr.MessageDirection.serverToClient,t.type=new Jr.ProtocolRequestType0(t.method)})(wg||(Un.InlayHintRefreshRequest=wg={}));var At={};Object.defineProperty(At,"__esModule",{value:!0});At.DiagnosticRefreshRequest=At.WorkspaceDiagnosticRequest=At.DocumentDiagnosticRequest=At.DocumentDiagnosticReportKind=At.DiagnosticServerCancellationData=void 0;const sT=Tr,IN=Se,Qr=X;var kg;(function(t){function e(n){const r=n;return r&&IN.boolean(r.retriggerRequest)}t.is=e})(kg||(At.DiagnosticServerCancellationData=kg={}));var bg;(function(t){t.Full="full",t.Unchanged="unchanged"})(bg||(At.DocumentDiagnosticReportKind=bg={}));var Sg;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Qr.MessageDirection.clientToServer,t.type=new Qr.ProtocolRequestType(t.method),t.partialResult=new sT.ProgressType})(Sg||(At.DocumentDiagnosticRequest=Sg={}));var $g;(function(t){t.method="workspace/diagnostic",t.messageDirection=Qr.MessageDirection.clientToServer,t.type=new Qr.ProtocolRequestType(t.method),t.partialResult=new sT.ProgressType})($g||(At.WorkspaceDiagnosticRequest=$g={}));var Cg;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Qr.MessageDirection.serverToClient,t.type=new Qr.ProtocolRequestType0(t.method)})(Cg||(At.DiagnosticRefreshRequest=Cg={}));var be={};Object.defineProperty(be,"__esModule",{value:!0});be.DidCloseNotebookDocumentNotification=be.DidSaveNotebookDocumentNotification=be.DidChangeNotebookDocumentNotification=be.NotebookCellArrayChange=be.DidOpenNotebookDocumentNotification=be.NotebookDocumentSyncRegistrationType=be.NotebookDocument=be.NotebookCell=be.ExecutionSummary=be.NotebookCellKind=void 0;const ws=jh,Ut=Se,an=X;var zf;(function(t){t.Markup=1,t.Code=2;function e(n){return n===1||n===2}t.is=e})(zf||(be.NotebookCellKind=zf={}));var Vf;(function(t){function e(i,s){const o={executionOrder:i};return(s===!0||s===!1)&&(o.success=s),o}t.create=e;function n(i){const s=i;return Ut.objectLiteral(s)&&ws.uinteger.is(s.executionOrder)&&(s.success===void 0||Ut.boolean(s.success))}t.is=n;function r(i,s){return i===s?!0:i==null||s===null||s===void 0?!1:i.executionOrder===s.executionOrder&&i.success===s.success}t.equals=r})(Vf||(be.ExecutionSummary=Vf={}));var nc;(function(t){function e(s,o){return{kind:s,document:o}}t.create=e;function n(s){const o=s;return Ut.objectLiteral(o)&&zf.is(o.kind)&&ws.DocumentUri.is(o.document)&&(o.metadata===void 0||Ut.objectLiteral(o.metadata))}t.is=n;function r(s,o){const a=new Set;return s.document!==o.document&&a.add("document"),s.kind!==o.kind&&a.add("kind"),s.executionSummary!==o.executionSummary&&a.add("executionSummary"),(s.metadata!==void 0||o.metadata!==void 0)&&!i(s.metadata,o.metadata)&&a.add("metadata"),(s.executionSummary!==void 0||o.executionSummary!==void 0)&&!Vf.equals(s.executionSummary,o.executionSummary)&&a.add("executionSummary"),a}t.diff=r;function i(s,o){if(s===o)return!0;if(s==null||o===null||o===void 0||typeof s!=typeof o||typeof s!="object")return!1;const a=Array.isArray(s),l=Array.isArray(o);if(a!==l)return!1;if(a&&l){if(s.length!==o.length)return!1;for(let c=0;c<s.length;c++)if(!i(s[c],o[c]))return!1}if(Ut.objectLiteral(s)&&Ut.objectLiteral(o)){const c=Object.keys(s),u=Object.keys(o);if(c.length!==u.length||(c.sort(),u.sort(),!i(c,u)))return!1;for(let f=0;f<c.length;f++){const m=c[f];if(!i(s[m],o[m]))return!1}}return!0}})(nc||(be.NotebookCell=nc={}));var Eg;(function(t){function e(r,i,s,o){return{uri:r,notebookType:i,version:s,cells:o}}t.create=e;function n(r){const i=r;return Ut.objectLiteral(i)&&Ut.string(i.uri)&&ws.integer.is(i.version)&&Ut.typedArray(i.cells,nc.is)}t.is=n})(Eg||(be.NotebookDocument=Eg={}));var Zr;(function(t){t.method="notebookDocument/sync",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.RegistrationType(t.method)})(Zr||(be.NotebookDocumentSyncRegistrationType=Zr={}));var Pg;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Pg||(be.DidOpenNotebookDocumentNotification=Pg={}));var Ag;(function(t){function e(r){const i=r;return Ut.objectLiteral(i)&&ws.uinteger.is(i.start)&&ws.uinteger.is(i.deleteCount)&&(i.cells===void 0||Ut.typedArray(i.cells,nc.is))}t.is=e;function n(r,i,s){const o={start:r,deleteCount:i};return s!==void 0&&(o.cells=s),o}t.create=n})(Ag||(be.NotebookCellArrayChange=Ag={}));var Ng;(function(t){t.method="notebookDocument/didChange",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Ng||(be.DidChangeNotebookDocumentNotification=Ng={}));var Ig;(function(t){t.method="notebookDocument/didSave",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Ig||(be.DidSaveNotebookDocumentNotification=Ig={}));var Dg;(function(t){t.method="notebookDocument/didClose",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Zr.method})(Dg||(be.DidCloseNotebookDocumentNotification=Dg={}));var Fc={};Object.defineProperty(Fc,"__esModule",{value:!0});Fc.InlineCompletionRequest=void 0;const Og=X;var xg;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=Og.MessageDirection.clientToServer,t.type=new Og.ProtocolRequestType(t.method)})(xg||(Fc.InlineCompletionRequest=xg={}));(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSymbolRequest=t.CodeActionResolveRequest=t.CodeActionRequest=t.DocumentSymbolRequest=t.DocumentHighlightRequest=t.ReferencesRequest=t.DefinitionRequest=t.SignatureHelpRequest=t.SignatureHelpTriggerKind=t.HoverRequest=t.CompletionResolveRequest=t.CompletionRequest=t.CompletionTriggerKind=t.PublishDiagnosticsNotification=t.WatchKind=t.RelativePattern=t.FileChangeType=t.DidChangeWatchedFilesNotification=t.WillSaveTextDocumentWaitUntilRequest=t.WillSaveTextDocumentNotification=t.TextDocumentSaveReason=t.DidSaveTextDocumentNotification=t.DidCloseTextDocumentNotification=t.DidChangeTextDocumentNotification=t.TextDocumentContentChangeEvent=t.DidOpenTextDocumentNotification=t.TextDocumentSyncKind=t.TelemetryEventNotification=t.LogMessageNotification=t.ShowMessageRequest=t.ShowMessageNotification=t.MessageType=t.DidChangeConfigurationNotification=t.ExitNotification=t.ShutdownRequest=t.InitializedNotification=t.InitializeErrorCodes=t.InitializeRequest=t.WorkDoneProgressOptions=t.TextDocumentRegistrationOptions=t.StaticRegistrationOptions=t.PositionEncodingKind=t.FailureHandlingKind=t.ResourceOperationKind=t.UnregistrationRequest=t.RegistrationRequest=t.DocumentSelector=t.NotebookCellTextDocumentFilter=t.NotebookDocumentFilter=t.TextDocumentFilter=void 0,t.MonikerRequest=t.MonikerKind=t.UniquenessLevel=t.WillDeleteFilesRequest=t.DidDeleteFilesNotification=t.WillRenameFilesRequest=t.DidRenameFilesNotification=t.WillCreateFilesRequest=t.DidCreateFilesNotification=t.FileOperationPatternKind=t.LinkedEditingRangeRequest=t.ShowDocumentRequest=t.SemanticTokensRegistrationType=t.SemanticTokensRefreshRequest=t.SemanticTokensRangeRequest=t.SemanticTokensDeltaRequest=t.SemanticTokensRequest=t.TokenFormat=t.CallHierarchyPrepareRequest=t.CallHierarchyOutgoingCallsRequest=t.CallHierarchyIncomingCallsRequest=t.WorkDoneProgressCancelNotification=t.WorkDoneProgressCreateRequest=t.WorkDoneProgress=t.SelectionRangeRequest=t.DeclarationRequest=t.FoldingRangeRefreshRequest=t.FoldingRangeRequest=t.ColorPresentationRequest=t.DocumentColorRequest=t.ConfigurationRequest=t.DidChangeWorkspaceFoldersNotification=t.WorkspaceFoldersRequest=t.TypeDefinitionRequest=t.ImplementationRequest=t.ApplyWorkspaceEditRequest=t.ExecuteCommandRequest=t.PrepareRenameRequest=t.RenameRequest=t.PrepareSupportDefaultBehavior=t.DocumentOnTypeFormattingRequest=t.DocumentRangesFormattingRequest=t.DocumentRangeFormattingRequest=t.DocumentFormattingRequest=t.DocumentLinkResolveRequest=t.DocumentLinkRequest=t.CodeLensRefreshRequest=t.CodeLensResolveRequest=t.CodeLensRequest=t.WorkspaceSymbolResolveRequest=void 0,t.InlineCompletionRequest=t.DidCloseNotebookDocumentNotification=t.DidSaveNotebookDocumentNotification=t.DidChangeNotebookDocumentNotification=t.NotebookCellArrayChange=t.DidOpenNotebookDocumentNotification=t.NotebookDocumentSyncRegistrationType=t.NotebookDocument=t.NotebookCell=t.ExecutionSummary=t.NotebookCellKind=t.DiagnosticRefreshRequest=t.WorkspaceDiagnosticRequest=t.DocumentDiagnosticRequest=t.DocumentDiagnosticReportKind=t.DiagnosticServerCancellationData=t.InlayHintRefreshRequest=t.InlayHintResolveRequest=t.InlayHintRequest=t.InlineValueRefreshRequest=t.InlineValueRequest=t.TypeHierarchySupertypesRequest=t.TypeHierarchySubtypesRequest=t.TypeHierarchyPrepareRequest=void 0;const e=X,n=jh,r=Se,i=Nc;Object.defineProperty(t,"ImplementationRequest",{enumerable:!0,get:function(){return i.ImplementationRequest}});const s=Ic;Object.defineProperty(t,"TypeDefinitionRequest",{enumerable:!0,get:function(){return s.TypeDefinitionRequest}});const o=Wr;Object.defineProperty(t,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return o.WorkspaceFoldersRequest}}),Object.defineProperty(t,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return o.DidChangeWorkspaceFoldersNotification}});const a=Dc;Object.defineProperty(t,"ConfigurationRequest",{enumerable:!0,get:function(){return a.ConfigurationRequest}});const l=Gr;Object.defineProperty(t,"DocumentColorRequest",{enumerable:!0,get:function(){return l.DocumentColorRequest}}),Object.defineProperty(t,"ColorPresentationRequest",{enumerable:!0,get:function(){return l.ColorPresentationRequest}});const c=zr;Object.defineProperty(t,"FoldingRangeRequest",{enumerable:!0,get:function(){return c.FoldingRangeRequest}}),Object.defineProperty(t,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return c.FoldingRangeRefreshRequest}});const u=Oc;Object.defineProperty(t,"DeclarationRequest",{enumerable:!0,get:function(){return u.DeclarationRequest}});const f=xc;Object.defineProperty(t,"SelectionRangeRequest",{enumerable:!0,get:function(){return f.SelectionRangeRequest}});const m=Mn;Object.defineProperty(t,"WorkDoneProgress",{enumerable:!0,get:function(){return m.WorkDoneProgress}}),Object.defineProperty(t,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return m.WorkDoneProgressCreateRequest}}),Object.defineProperty(t,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return m.WorkDoneProgressCancelNotification}});const g=Fn;Object.defineProperty(t,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyIncomingCallsRequest}}),Object.defineProperty(t,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyOutgoingCallsRequest}}),Object.defineProperty(t,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return g.CallHierarchyPrepareRequest}});const d=ht;Object.defineProperty(t,"TokenFormat",{enumerable:!0,get:function(){return d.TokenFormat}}),Object.defineProperty(t,"SemanticTokensRequest",{enumerable:!0,get:function(){return d.SemanticTokensRequest}}),Object.defineProperty(t,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return d.SemanticTokensDeltaRequest}}),Object.defineProperty(t,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return d.SemanticTokensRangeRequest}}),Object.defineProperty(t,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return d.SemanticTokensRefreshRequest}}),Object.defineProperty(t,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return d.SemanticTokensRegistrationType}});const v=Lc;Object.defineProperty(t,"ShowDocumentRequest",{enumerable:!0,get:function(){return v.ShowDocumentRequest}});const R=Mc;Object.defineProperty(t,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return R.LinkedEditingRangeRequest}});const _=tt;Object.defineProperty(t,"FileOperationPatternKind",{enumerable:!0,get:function(){return _.FileOperationPatternKind}}),Object.defineProperty(t,"DidCreateFilesNotification",{enumerable:!0,get:function(){return _.DidCreateFilesNotification}}),Object.defineProperty(t,"WillCreateFilesRequest",{enumerable:!0,get:function(){return _.WillCreateFilesRequest}}),Object.defineProperty(t,"DidRenameFilesNotification",{enumerable:!0,get:function(){return _.DidRenameFilesNotification}}),Object.defineProperty(t,"WillRenameFilesRequest",{enumerable:!0,get:function(){return _.WillRenameFilesRequest}}),Object.defineProperty(t,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return _.DidDeleteFilesNotification}}),Object.defineProperty(t,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return _.WillDeleteFilesRequest}});const h=Hn;Object.defineProperty(t,"UniquenessLevel",{enumerable:!0,get:function(){return h.UniquenessLevel}}),Object.defineProperty(t,"MonikerKind",{enumerable:!0,get:function(){return h.MonikerKind}}),Object.defineProperty(t,"MonikerRequest",{enumerable:!0,get:function(){return h.MonikerRequest}});const p=jn;Object.defineProperty(t,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return p.TypeHierarchyPrepareRequest}}),Object.defineProperty(t,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return p.TypeHierarchySubtypesRequest}}),Object.defineProperty(t,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return p.TypeHierarchySupertypesRequest}});const w=Xr;Object.defineProperty(t,"InlineValueRequest",{enumerable:!0,get:function(){return w.InlineValueRequest}}),Object.defineProperty(t,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return w.InlineValueRefreshRequest}});const F=Un;Object.defineProperty(t,"InlayHintRequest",{enumerable:!0,get:function(){return F.InlayHintRequest}}),Object.defineProperty(t,"InlayHintResolveRequest",{enumerable:!0,get:function(){return F.InlayHintResolveRequest}}),Object.defineProperty(t,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return F.InlayHintRefreshRequest}});const G=At;Object.defineProperty(t,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return G.DiagnosticServerCancellationData}}),Object.defineProperty(t,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return G.DocumentDiagnosticReportKind}}),Object.defineProperty(t,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return G.DocumentDiagnosticRequest}}),Object.defineProperty(t,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return G.WorkspaceDiagnosticRequest}}),Object.defineProperty(t,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return G.DiagnosticRefreshRequest}});const J=be;Object.defineProperty(t,"NotebookCellKind",{enumerable:!0,get:function(){return J.NotebookCellKind}}),Object.defineProperty(t,"ExecutionSummary",{enumerable:!0,get:function(){return J.ExecutionSummary}}),Object.defineProperty(t,"NotebookCell",{enumerable:!0,get:function(){return J.NotebookCell}}),Object.defineProperty(t,"NotebookDocument",{enumerable:!0,get:function(){return J.NotebookDocument}}),Object.defineProperty(t,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return J.NotebookDocumentSyncRegistrationType}}),Object.defineProperty(t,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidOpenNotebookDocumentNotification}}),Object.defineProperty(t,"NotebookCellArrayChange",{enumerable:!0,get:function(){return J.NotebookCellArrayChange}}),Object.defineProperty(t,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidChangeNotebookDocumentNotification}}),Object.defineProperty(t,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidSaveNotebookDocumentNotification}}),Object.defineProperty(t,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidCloseNotebookDocumentNotification}});const ke=Fc;Object.defineProperty(t,"InlineCompletionRequest",{enumerable:!0,get:function(){return ke.InlineCompletionRequest}});var Ee;(function(y){function Ne(Ie){const W=Ie;return r.string(W)||r.string(W.language)||r.string(W.scheme)||r.string(W.pattern)}y.is=Ne})(Ee||(t.TextDocumentFilter=Ee={}));var Pe;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(r.string(W.notebookType)||r.string(W.scheme)||r.string(W.pattern))}y.is=Ne})(Pe||(t.NotebookDocumentFilter=Pe={}));var A;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(r.string(W.notebook)||Pe.is(W.notebook))&&(W.language===void 0||r.string(W.language))}y.is=Ne})(A||(t.NotebookCellTextDocumentFilter=A={}));var E;(function(y){function Ne(Ie){if(!Array.isArray(Ie))return!1;for(let W of Ie)if(!r.string(W)&&!Ee.is(W)&&!A.is(W))return!1;return!0}y.is=Ne})(E||(t.DocumentSelector=E={}));var k;(function(y){y.method="client/registerCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(k||(t.RegistrationRequest=k={}));var C;(function(y){y.method="client/unregisterCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(C||(t.UnregistrationRequest=C={}));var N;(function(y){y.Create="create",y.Rename="rename",y.Delete="delete"})(N||(t.ResourceOperationKind=N={}));var P;(function(y){y.Abort="abort",y.Transactional="transactional",y.TextOnlyTransactional="textOnlyTransactional",y.Undo="undo"})(P||(t.FailureHandlingKind=P={}));var O;(function(y){y.UTF8="utf-8",y.UTF16="utf-16",y.UTF32="utf-32"})(O||(t.PositionEncodingKind=O={}));var He;(function(y){function Ne(Ie){const W=Ie;return W&&r.string(W.id)&&W.id.length>0}y.hasId=Ne})(He||(t.StaticRegistrationOptions=He={}));var x;(function(y){function Ne(Ie){const W=Ie;return W&&(W.documentSelector===null||E.is(W.documentSelector))}y.is=Ne})(x||(t.TextDocumentRegistrationOptions=x={}));var S;(function(y){function Ne(W){const T=W;return r.objectLiteral(T)&&(T.workDoneProgress===void 0||r.boolean(T.workDoneProgress))}y.is=Ne;function Ie(W){const T=W;return T&&r.boolean(T.workDoneProgress)}y.hasWorkDoneProgress=Ie})(S||(t.WorkDoneProgressOptions=S={}));var te;(function(y){y.method="initialize",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(te||(t.InitializeRequest=te={}));var Vt;(function(y){y.unknownProtocolVersion=1})(Vt||(t.InitializeErrorCodes=Vt={}));var Yt;(function(y){y.method="initialized",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Yt||(t.InitializedNotification=Yt={}));var Le;(function(y){y.method="shutdown",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType0(y.method)})(Le||(t.ShutdownRequest=Le={}));var Xt;(function(y){y.method="exit",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType0(y.method)})(Xt||(t.ExitNotification=Xt={}));var ye;(function(y){y.method="workspace/didChangeConfiguration",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ye||(t.DidChangeConfigurationNotification=ye={}));var je;(function(y){y.Error=1,y.Warning=2,y.Info=3,y.Log=4,y.Debug=5})(je||(t.MessageType=je={}));var Ge;(function(y){y.method="window/showMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ge||(t.ShowMessageNotification=Ge={}));var ve;(function(y){y.method="window/showMessageRequest",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(ve||(t.ShowMessageRequest=ve={}));var ze;(function(y){y.method="window/logMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(ze||(t.LogMessageNotification=ze={}));var Ae;(function(y){y.method="telemetry/event",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ae||(t.TelemetryEventNotification=Ae={}));var V;(function(y){y.None=0,y.Full=1,y.Incremental=2})(V||(t.TextDocumentSyncKind=V={}));var Ke;(function(y){y.method="textDocument/didOpen",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Ke||(t.DidOpenTextDocumentNotification=Ke={}));var ue;(function(y){function Ne(W){let T=W;return T!=null&&typeof T.text=="string"&&T.range!==void 0&&(T.rangeLength===void 0||typeof T.rangeLength=="number")}y.isIncremental=Ne;function Ie(W){let T=W;return T!=null&&typeof T.text=="string"&&T.range===void 0&&T.rangeLength===void 0}y.isFull=Ie})(ue||(t.TextDocumentContentChangeEvent=ue={}));var ft;(function(y){y.method="textDocument/didChange",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ft||(t.DidChangeTextDocumentNotification=ft={}));var wr;(function(y){y.method="textDocument/didClose",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(wr||(t.DidCloseTextDocumentNotification=wr={}));var ii;(function(y){y.method="textDocument/didSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ii||(t.DidSaveTextDocumentNotification=ii={}));var si;(function(y){y.Manual=1,y.AfterDelay=2,y.FocusOut=3})(si||(t.TextDocumentSaveReason=si={}));var oi;(function(y){y.method="textDocument/willSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(oi||(t.WillSaveTextDocumentNotification=oi={}));var ai;(function(y){y.method="textDocument/willSaveWaitUntil",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ai||(t.WillSaveTextDocumentWaitUntilRequest=ai={}));var Ft;(function(y){y.method="workspace/didChangeWatchedFiles",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Ft||(t.DidChangeWatchedFilesNotification=Ft={}));var li;(function(y){y.Created=1,y.Changed=2,y.Deleted=3})(li||(t.FileChangeType=li={}));var qs;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(n.URI.is(W.baseUri)||n.WorkspaceFolder.is(W.baseUri))&&r.string(W.pattern)}y.is=Ne})(qs||(t.RelativePattern=qs={}));var Bs;(function(y){y.Create=1,y.Change=2,y.Delete=4})(Bs||(t.WatchKind=Bs={}));var Ks;(function(y){y.method="textDocument/publishDiagnostics",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ks||(t.PublishDiagnosticsNotification=Ks={}));var Ws;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.TriggerForIncompleteCompletions=3})(Ws||(t.CompletionTriggerKind=Ws={}));var ci;(function(y){y.method="textDocument/completion",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ci||(t.CompletionRequest=ci={}));var ui;(function(y){y.method="completionItem/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ui||(t.CompletionResolveRequest=ui={}));var dn;(function(y){y.method="textDocument/hover",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(dn||(t.HoverRequest=dn={}));var di;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.ContentChange=3})(di||(t.SignatureHelpTriggerKind=di={}));var Gs;(function(y){y.method="textDocument/signatureHelp",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Gs||(t.SignatureHelpRequest=Gs={}));var zs;(function(y){y.method="textDocument/definition",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(zs||(t.DefinitionRequest=zs={}));var fi;(function(y){y.method="textDocument/references",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fi||(t.ReferencesRequest=fi={}));var hi;(function(y){y.method="textDocument/documentHighlight",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(hi||(t.DocumentHighlightRequest=hi={}));var Vs;(function(y){y.method="textDocument/documentSymbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Vs||(t.DocumentSymbolRequest=Vs={}));var Ys;(function(y){y.method="textDocument/codeAction",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ys||(t.CodeActionRequest=Ys={}));var Xs;(function(y){y.method="codeAction/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Xs||(t.CodeActionResolveRequest=Xs={}));var Js;(function(y){y.method="workspace/symbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Js||(t.WorkspaceSymbolRequest=Js={}));var Qs;(function(y){y.method="workspaceSymbol/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Qs||(t.WorkspaceSymbolResolveRequest=Qs={}));var Zs;(function(y){y.method="textDocument/codeLens",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Zs||(t.CodeLensRequest=Zs={}));var Ht;(function(y){y.method="codeLens/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ht||(t.CodeLensResolveRequest=Ht={}));var eo;(function(y){y.method="workspace/codeLens/refresh",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType0(y.method)})(eo||(t.CodeLensRefreshRequest=eo={}));var to;(function(y){y.method="textDocument/documentLink",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(to||(t.DocumentLinkRequest=to={}));var er;(function(y){y.method="documentLink/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(er||(t.DocumentLinkResolveRequest=er={}));var no;(function(y){y.method="textDocument/formatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(no||(t.DocumentFormattingRequest=no={}));var kr;(function(y){y.method="textDocument/rangeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(kr||(t.DocumentRangeFormattingRequest=kr={}));var ro;(function(y){y.method="textDocument/rangesFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ro||(t.DocumentRangesFormattingRequest=ro={}));var fn;(function(y){y.method="textDocument/onTypeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fn||(t.DocumentOnTypeFormattingRequest=fn={}));var Nn;(function(y){y.Identifier=1})(Nn||(t.PrepareSupportDefaultBehavior=Nn={}));var io;(function(y){y.method="textDocument/rename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(io||(t.RenameRequest=io={}));var so;(function(y){y.method="textDocument/prepareRename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(so||(t.PrepareRenameRequest=so={}));var In;(function(y){y.method="workspace/executeCommand",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(In||(t.ExecuteCommandRequest=In={}));var pi;(function(y){y.method="workspace/applyEdit",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType("workspace/applyEdit")})(pi||(t.ApplyWorkspaceEditRequest=pi={}))})(nT);var Hc={};Object.defineProperty(Hc,"__esModule",{value:!0});Hc.createProtocolConnection=void 0;const Lg=Tr;function DN(t,e,n,r){return Lg.ConnectionStrategy.is(r)&&(r={connectionStrategy:r}),(0,Lg.createMessageConnection)(t,e,n,r)}Hc.createProtocolConnection=DN;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,l,c)}:function(s,o,a,l){l===void 0&&(l=a),s[l]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.LSPErrorCodes=t.createProtocolConnection=void 0,n(Tr,t),n(jh,t),n(X,t),n(nT,t);var r=Hc;Object.defineProperty(t,"createProtocolConnection",{enumerable:!0,get:function(){return r.createProtocolConnection}});var i;(function(s){s.lspReservedErrorRangeStart=-32899,s.RequestFailed=-32803,s.ServerCancelled=-32802,s.ContentModified=-32801,s.RequestCancelled=-32800,s.lspReservedErrorRangeEnd=-32800})(i||(t.LSPErrorCodes=i={}))})(tT);(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,l){l===void 0&&(l=a);var c=Object.getOwnPropertyDescriptor(o,a);(!c||("get"in c?!o.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,l,c)}:function(s,o,a,l){l===void 0&&(l=a),s[l]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.createProtocolConnection=void 0;const r=Sm;n(Sm,t),n(tT,t);function i(s,o,a,l){return(0,r.createMessageConnection)(s,o,a,l)}t.createProtocolConnection=i})(oe);Object.defineProperty(vn,"__esModule",{value:!0});vn.SemanticTokensBuilder=vn.SemanticTokensDiff=vn.SemanticTokensFeature=void 0;const ko=oe,ON=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(ko.SemanticTokensRefreshRequest.type),on:e=>{const n=ko.SemanticTokensRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onDelta:e=>{const n=ko.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onRange:e=>{const n=ko.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};vn.SemanticTokensFeature=ON;class oT{constructor(e,n){this.originalSequence=e,this.modifiedSequence=n}computeDiff(){const e=this.originalSequence.length,n=this.modifiedSequence.length;let r=0;for(;r<n&&r<e&&this.originalSequence[r]===this.modifiedSequence[r];)r++;if(r<n&&r<e){let i=e-1,s=n-1;for(;i>=r&&s>=r&&this.originalSequence[i]===this.modifiedSequence[s];)i--,s--;(i<r||s<r)&&(i++,s++);const o=i-r+1,a=this.modifiedSequence.slice(r,s+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:r,deleteCount:o-1}]:[{start:r,deleteCount:o,data:a}]}else return r<n?[{start:r,deleteCount:0,data:this.modifiedSequence.slice(r)}]:r<e?[{start:r,deleteCount:e-r}]:[]}}vn.SemanticTokensDiff=oT;let xN=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,n,r,i,s){let o=e,a=n;this._dataLen>0&&(o-=this._prevLine,o===0&&(a-=this._prevChar)),this._data[this._dataLen++]=o,this._data[this._dataLen++]=a,this._data[this._dataLen++]=r,this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._prevLine=e,this._prevChar=n}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new oT(this._prevData,this._data).computeDiff()}:this.build()}};vn.SemanticTokensBuilder=xN;var jc={};Object.defineProperty(jc,"__esModule",{value:!0});jc.InlineCompletionFeature=void 0;const LN=oe,MN=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(LN.InlineCompletionRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};jc.InlineCompletionFeature=MN;var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.TextDocuments=void 0;const tr=oe;class FN{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new tr.Emitter,this._onDidOpen=new tr.Emitter,this._onDidClose=new tr.Emitter,this._onDidSave=new tr.Emitter,this._onWillSave=new tr.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=tr.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,s);const o=Object.freeze({document:s});this._onDidOpen.fire(o),this._onDidChangeContent.fire(o)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,s,o),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),n.push(e.onDidCloseTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(r.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(e.onWillSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{let s=this._syncedDocuments.get(r.textDocument.uri);return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),tr.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}Us.TextDocuments=FN;var mr={};Object.defineProperty(mr,"__esModule",{value:!0});mr.NotebookDocuments=mr.NotebookSyncFeature=void 0;const Nt=oe,Mg=Us,HN=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Nt.DidOpenNotebookDocumentNotification.type,n=>{e(n)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Nt.DidChangeNotebookDocumentNotification.type,n=>{e(n)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Nt.DidSaveNotebookDocumentNotification.type,n=>{e(n)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Nt.DidCloseNotebookDocumentNotification.type,n=>{e(n)})}}};mr.NotebookSyncFeature=HN;let aT=class pl{onDidOpenTextDocument(e){return this.openHandler=e,Nt.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Nt.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Nt.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return pl.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return pl.NULL_DISPOSE}onDidSaveTextDocument(){return pl.NULL_DISPOSE}};aT.NULL_DISPOSE=Object.freeze({dispose:()=>{}});class jN{constructor(e){e instanceof Mg.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Mg.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Nt.Emitter,this._onDidChange=new Nt.Emitter,this._onDidSave=new Nt.Emitter,this._onDidClose=new Nt.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){const n=this.notebookCellMap.get(e);return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"?e:e.document,r=this.notebookCellMap.get(n);return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new aT,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(const s of i.cellTextDocuments)n.openTextDocument({textDocument:s});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s===void 0)return;s.version=i.notebookDocument.version;const o=s.metadata;let a=!1;const l=i.change;l.metadata!==void 0&&(a=!0,s.metadata=l.metadata);const c=[],u=[],f=[],m=[];if(l.cells!==void 0){const _=l.cells;if(_.structure!==void 0){const h=_.structure.array;if(s.cells.splice(h.start,h.deleteCount,...h.cells!==void 0?h.cells:[]),_.structure.didOpen!==void 0)for(const p of _.structure.didOpen)n.openTextDocument({textDocument:p}),c.push(p.uri);if(_.structure.didClose)for(const p of _.structure.didClose)n.closeTextDocument({textDocument:p}),u.push(p.uri)}if(_.data!==void 0){const h=new Map(_.data.map(p=>[p.document,p]));for(let p=0;p<=s.cells.length;p++){const w=h.get(s.cells[p].document);if(w!==void 0){const F=s.cells.splice(p,1,w);if(f.push({old:F[0],new:w}),h.delete(w.document),h.size===0)break}}}if(_.textContent!==void 0)for(const h of _.textContent)n.changeTextDocument({textDocument:h.document,contentChanges:h.changes}),m.push(h.document.uri)}this.updateCellMap(s);const g={notebookDocument:s};a&&(g.metadata={old:o,new:s.metadata});const d=[];for(const _ of c)d.push(this.getNotebookCell(_));const v=[];for(const _ of u)v.push(this.getNotebookCell(_));const R=[];for(const _ of m)R.push(this.getNotebookCell(_));(d.length>0||v.length>0||f.length>0||R.length>0)&&(g.cells={added:d,removed:v,changed:{data:f,textContent:R}}),(g.metadata!==void 0||g.cells!==void 0)&&this._onDidChange.fire(g)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s!==void 0){this._onDidClose.fire(s);for(const o of i.cellTextDocuments)n.closeTextDocument({textDocument:o});this.notebookDocuments.delete(i.notebookDocument.uri);for(const o of s.cells)this.notebookCellMap.delete(o.document)}})),Nt.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}mr.NotebookDocuments=jN;var ne={},Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.thenable=Oe.typedArray=Oe.stringArray=Oe.array=Oe.func=Oe.error=Oe.number=Oe.string=Oe.boolean=void 0;function UN(t){return t===!0||t===!1}Oe.boolean=UN;function lT(t){return typeof t=="string"||t instanceof String}Oe.string=lT;function qN(t){return typeof t=="number"||t instanceof Number}Oe.number=qN;function BN(t){return t instanceof Error}Oe.error=BN;function cT(t){return typeof t=="function"}Oe.func=cT;function uT(t){return Array.isArray(t)}Oe.array=uT;function KN(t){return uT(t)&&t.every(e=>lT(e))}Oe.stringArray=KN;function WN(t,e){return Array.isArray(t)&&t.every(e)}Oe.typedArray=WN;function GN(t){return t&&cT(t.then)}Oe.thenable=GN;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.generateUuid=Tt.parse=Tt.isUUID=Tt.v4=Tt.empty=void 0;class Uh{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}}class Y extends Uh{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return Y._oneOf(Y._chars)}constructor(){super([Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-","4",Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._oneOf(Y._timeHighBits),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex()].join(""))}}Y._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Y._timeHighBits=["8","9","a","b"];Tt.empty=new Uh("00000000-0000-0000-0000-000000000000");function dT(){return new Y}Tt.v4=dT;const zN=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function fT(t){return zN.test(t)}Tt.isUUID=fT;function VN(t){if(!fT(t))throw new Error("invalid uuid");return new Uh(t)}Tt.parse=VN;function YN(){return dT().asHex()}Tt.generateUuid=YN;var qn={};Object.defineProperty(qn,"__esModule",{value:!0});qn.attachPartialResult=qn.ProgressFeature=qn.attachWorkDone=void 0;const Bn=oe,XN=Tt;class Yn{constructor(e,n){this._connection=e,this._token=n,Yn.Instances.set(this._token,this)}begin(e,n,r,i){let s={kind:"begin",title:e,percentage:n,message:r,cancellable:i};this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,s)}report(e,n){let r={kind:"report"};typeof e=="number"?(r.percentage=e,n!==void 0&&(r.message=n)):r.message=e,this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,r)}done(){Yn.Instances.delete(this._token),this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,{kind:"end"})}}Yn.Instances=new Map;class Fg extends Yn{constructor(e,n){super(e,n),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}}class qh{constructor(){}begin(){}report(){}done(){}}class Hg extends qh{constructor(){super(),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}}function JN(t,e){if(e===void 0||e.workDoneToken===void 0)return new qh;const n=e.workDoneToken;return delete e.workDoneToken,new Yn(t,n)}qn.attachWorkDone=JN;const QN=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var n;super.initialize(e),((n=e==null?void 0:e.window)==null?void 0:n.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(Bn.WorkDoneProgressCancelNotification.type,r=>{let i=Yn.Instances.get(r.token);(i instanceof Fg||i instanceof Hg)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new qh:new Yn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){const e=(0,XN.generateUuid)();return this.connection.sendRequest(Bn.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Fg(this.connection,e))}else return Promise.resolve(new Hg)}};qn.ProgressFeature=QN;var Yf;(function(t){t.type=new Bn.ProgressType})(Yf||(Yf={}));class ZN{constructor(e,n){this._connection=e,this._token=n}report(e){this._connection.sendProgress(Yf.type,this._token,e)}}function eI(t,e){if(e===void 0||e.partialResultToken===void 0)return;const n=e.partialResultToken;return delete e.partialResultToken,new ZN(t,n)}qn.attachPartialResult=eI;var Uc={};Object.defineProperty(Uc,"__esModule",{value:!0});Uc.ConfigurationFeature=void 0;const tI=oe,nI=Oe,rI=t=>class extends t{getConfiguration(e){return e?nI.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let n={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(tI.ConfigurationRequest.type,n).then(r=>Array.isArray(r)?Array.isArray(e)?r:r[0]:Array.isArray(e)?[]:null)}};Uc.ConfigurationFeature=rI;var qc={};Object.defineProperty(qc,"__esModule",{value:!0});qc.WorkspaceFoldersFeature=void 0;const bo=oe,iI=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let n=e.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new bo.Emitter,this.connection.onNotification(bo.DidChangeWorkspaceFoldersNotification.type,r=>{this._onDidChangeWorkspaceFolders.fire(r.event)}))}fillServerCapabilities(e){var r,i;super.fillServerCapabilities(e);const n=(i=(r=e.workspace)==null?void 0:r.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(bo.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(bo.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};qc.WorkspaceFoldersFeature=iI;var Bc={};Object.defineProperty(Bc,"__esModule",{value:!0});Bc.CallHierarchyFeature=void 0;const Ru=oe,sI=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Ru.CallHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onIncomingCalls:e=>{const n=Ru.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onOutgoingCalls:e=>{const n=Ru.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Bc.CallHierarchyFeature=sI;var Kc={};Object.defineProperty(Kc,"__esModule",{value:!0});Kc.ShowDocumentFeature=void 0;const oI=oe,aI=t=>class extends t{showDocument(e){return this.connection.sendRequest(oI.ShowDocumentRequest.type,e)}};Kc.ShowDocumentFeature=aI;var Wc={};Object.defineProperty(Wc,"__esModule",{value:!0});Wc.FileOperationsFeature=void 0;const Sr=oe,lI=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Sr.DidCreateFilesNotification.type,n=>{e(n)})}onDidRenameFiles(e){return this.connection.onNotification(Sr.DidRenameFilesNotification.type,n=>{e(n)})}onDidDeleteFiles(e){return this.connection.onNotification(Sr.DidDeleteFilesNotification.type,n=>{e(n)})}onWillCreateFiles(e){return this.connection.onRequest(Sr.WillCreateFilesRequest.type,(n,r)=>e(n,r))}onWillRenameFiles(e){return this.connection.onRequest(Sr.WillRenameFilesRequest.type,(n,r)=>e(n,r))}onWillDeleteFiles(e){return this.connection.onRequest(Sr.WillDeleteFilesRequest.type,(n,r)=>e(n,r))}};Wc.FileOperationsFeature=lI;var Gc={};Object.defineProperty(Gc,"__esModule",{value:!0});Gc.LinkedEditingRangeFeature=void 0;const cI=oe,uI=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(cI.LinkedEditingRangeRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0))}};Gc.LinkedEditingRangeFeature=uI;var zc={};Object.defineProperty(zc,"__esModule",{value:!0});zc.TypeHierarchyFeature=void 0;const wu=oe,dI=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(wu.TypeHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onSupertypes:e=>{const n=wu.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onSubtypes:e=>{const n=wu.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};zc.TypeHierarchyFeature=dI;var Vc={};Object.defineProperty(Vc,"__esModule",{value:!0});Vc.InlineValueFeature=void 0;const jg=oe,fI=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(jg.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(jg.InlineValueRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Vc.InlineValueFeature=fI;var Yc={};Object.defineProperty(Yc,"__esModule",{value:!0});Yc.FoldingRangeFeature=void 0;const Ug=oe,hI=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Ug.FoldingRangeRefreshRequest.type),on:e=>{const n=Ug.FoldingRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Yc.FoldingRangeFeature=hI;var Xc={};Object.defineProperty(Xc,"__esModule",{value:!0});Xc.InlayHintFeature=void 0;const ku=oe,pI=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(ku.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(ku.InlayHintRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n))),resolve:e=>this.connection.onRequest(ku.InlayHintResolveRequest.type,(n,r)=>e(n,r))}}};Xc.InlayHintFeature=pI;var Jc={};Object.defineProperty(Jc,"__esModule",{value:!0});Jc.DiagnosticFeature=void 0;const _i=oe,mI=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(_i.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(_i.DocumentDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(_i.DocumentDiagnosticRequest.partialResult,n))),onWorkspace:e=>this.connection.onRequest(_i.WorkspaceDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(_i.WorkspaceDiagnosticRequest.partialResult,n)))}}};Jc.DiagnosticFeature=mI;var Qc={};Object.defineProperty(Qc,"__esModule",{value:!0});Qc.MonikerFeature=void 0;const gI=oe,yI=t=>class extends t{get moniker(){return{on:e=>{const n=gI.MonikerRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Qc.MonikerFeature=yI;Object.defineProperty(ne,"__esModule",{value:!0});ne.createConnection=ne.combineFeatures=ne.combineNotebooksFeatures=ne.combineLanguagesFeatures=ne.combineWorkspaceFeatures=ne.combineWindowFeatures=ne.combineClientFeatures=ne.combineTracerFeatures=ne.combineTelemetryFeatures=ne.combineConsoleFeatures=ne._NotebooksImpl=ne._LanguagesImpl=ne.BulkUnregistration=ne.BulkRegistration=ne.ErrorMessageTracker=void 0;const D=oe,Et=Oe,Xf=Tt,z=qn,vI=Uc,_I=qc,TI=Bc,RI=vn,wI=Kc,kI=Wc,bI=Gc,SI=zc,$I=Vc,CI=Yc,EI=Xc,PI=Jc,AI=mr,NI=Qc;function bu(t){if(t!==null)return t}class II{constructor(){this._messages=Object.create(null)}add(e){let n=this._messages[e];n||(n=0),n++,this._messages[e]=n}sendErrors(e){Object.keys(this._messages).forEach(n=>{e.window.showErrorMessage(n)})}}ne.ErrorMessageTracker=II;class qg{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,n){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:n}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}}class DI{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...n){let r={type:D.MessageType.Error,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(bu)}showWarningMessage(e,...n){let r={type:D.MessageType.Warning,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(bu)}showInformationMessage(e,...n){let r={type:D.MessageType.Info,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(bu)}}const Bg=(0,wI.ShowDocumentFeature)((0,z.ProgressFeature)(DI));var Kg;(function(t){function e(){return new hT}t.create=e})(Kg||(ne.BulkRegistration=Kg={}));class hT{constructor(){this._registrations=[],this._registered=new Set}add(e,n){const r=Et.string(e)?e:e.method;if(this._registered.has(r))throw new Error(`${r} is already added to this registration`);const i=Xf.generateUuid();this._registrations.push({id:i,method:r,registerOptions:n||{}}),this._registered.add(r)}asRegistrationParams(){return{registrations:this._registrations}}}var Wg;(function(t){function e(){return new Jf(void 0,[])}t.create=e})(Wg||(ne.BulkUnregistration=Wg={}));class Jf{constructor(e,n){this._connection=e,this._unregistrations=new Map,n.forEach(r=>{this._unregistrations.set(r.method,r)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let r of this._unregistrations.values())e.push(r);let n={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){const n=Et.string(e)?e:e.method,r=this._unregistrations.get(n);if(!r)return!1;let i={unregisterations:[r]};return this._connection.sendRequest(D.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},s=>{this._connection.console.info(`Un-registering request handler for ${r.id} failed.`)}),!0}}class Gg{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,n,r){return e instanceof hT?this.registerMany(e):e instanceof Jf?this.registerSingle1(e,n,r):this.registerSingle2(e,n)}registerSingle1(e,n,r){const i=Et.string(n)?n:n.method,s=Xf.generateUuid();let o={registrations:[{id:s,method:i,registerOptions:r||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,o).then(a=>(e.add({id:s,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,n){const r=Et.string(e)?e:e.method,i=Xf.generateUuid();let s={registrations:[{id:i,method:r,registerOptions:n||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,s).then(o=>D.Disposable.create(()=>{this.unregisterSingle(i,r).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),o=>(this.connection.console.info(`Registering request handler for ${r} failed.`),Promise.reject(o)))}unregisterSingle(e,n){let r={unregisterations:[{id:e,method:n}]};return this.connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let n=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,n).then(()=>new Jf(this._connection,n.registrations.map(r=>({id:r.id,method:r.method}))),r=>(this.connection.console.info("Bulk registration failed."),Promise.reject(r)))}}class OI{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function n(i){return i&&!!i.edit}let r=n(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,r)}}const zg=(0,kI.FileOperationsFeature)((0,_I.WorkspaceFoldersFeature)((0,vI.ConfigurationFeature)(OI)));class Vg{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,n){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?n:void 0}).catch(()=>{})}}class Yg{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}}class pT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._LanguagesImpl=pT;const Xg=(0,CI.FoldingRangeFeature)((0,NI.MonikerFeature)((0,PI.DiagnosticFeature)((0,EI.InlayHintFeature)((0,$I.InlineValueFeature)((0,SI.TypeHierarchyFeature)((0,bI.LinkedEditingRangeFeature)((0,RI.SemanticTokensFeature)((0,TI.CallHierarchyFeature)(pT)))))))));class mT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._NotebooksImpl=mT;const Jg=(0,AI.NotebookSyncFeature)(mT);function gT(t,e){return function(n){return e(t(n))}}ne.combineConsoleFeatures=gT;function yT(t,e){return function(n){return e(t(n))}}ne.combineTelemetryFeatures=yT;function vT(t,e){return function(n){return e(t(n))}}ne.combineTracerFeatures=vT;function _T(t,e){return function(n){return e(t(n))}}ne.combineClientFeatures=_T;function TT(t,e){return function(n){return e(t(n))}}ne.combineWindowFeatures=TT;function RT(t,e){return function(n){return e(t(n))}}ne.combineWorkspaceFeatures=RT;function wT(t,e){return function(n){return e(t(n))}}ne.combineLanguagesFeatures=wT;function kT(t,e){return function(n){return e(t(n))}}ne.combineNotebooksFeatures=kT;function xI(t,e){function n(i,s,o){return i&&s?o(i,s):i||s}return{__brand:"features",console:n(t.console,e.console,gT),tracer:n(t.tracer,e.tracer,vT),telemetry:n(t.telemetry,e.telemetry,yT),client:n(t.client,e.client,_T),window:n(t.window,e.window,TT),workspace:n(t.workspace,e.workspace,RT),languages:n(t.languages,e.languages,wT),notebooks:n(t.notebooks,e.notebooks,kT)}}ne.combineFeatures=xI;function LI(t,e,n){const r=n&&n.console?new(n.console(qg)):new qg,i=t(r);r.rawAttach(i);const s=n&&n.tracer?new(n.tracer(Vg)):new Vg,o=n&&n.telemetry?new(n.telemetry(Yg)):new Yg,a=n&&n.client?new(n.client(Gg)):new Gg,l=n&&n.window?new(n.window(Bg)):new Bg,c=n&&n.workspace?new(n.workspace(zg)):new zg,u=n&&n.languages?new(n.languages(Xg)):new Xg,f=n&&n.notebooks?new(n.notebooks(Jg)):new Jg,m=[r,s,o,a,l,c,u,f];function g(h){return h instanceof Promise?h:Et.thenable(h)?new Promise((p,w)=>{h.then(F=>p(F),F=>w(F))}):Promise.resolve(h)}let d,v,R,_={listen:()=>i.listen(),sendRequest:(h,...p)=>i.sendRequest(Et.string(h)?h:h.method,...p),onRequest:(h,p)=>i.onRequest(h,p),sendNotification:(h,p)=>{const w=Et.string(h)?h:h.method;return i.sendNotification(w,p)},onNotification:(h,p)=>i.onNotification(h,p),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:h=>(v=h,{dispose:()=>{v=void 0}}),onInitialized:h=>i.onNotification(D.InitializedNotification.type,h),onShutdown:h=>(d=h,{dispose:()=>{d=void 0}}),onExit:h=>(R=h,{dispose:()=>{R=void 0}}),get console(){return r},get telemetry(){return o},get tracer(){return s},get client(){return a},get window(){return l},get workspace(){return c},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:h=>i.onNotification(D.DidChangeConfigurationNotification.type,h),onDidChangeWatchedFiles:h=>i.onNotification(D.DidChangeWatchedFilesNotification.type,h),__textDocumentSync:void 0,onDidOpenTextDocument:h=>i.onNotification(D.DidOpenTextDocumentNotification.type,h),onDidChangeTextDocument:h=>i.onNotification(D.DidChangeTextDocumentNotification.type,h),onDidCloseTextDocument:h=>i.onNotification(D.DidCloseTextDocumentNotification.type,h),onWillSaveTextDocument:h=>i.onNotification(D.WillSaveTextDocumentNotification.type,h),onWillSaveTextDocumentWaitUntil:h=>i.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,h),onDidSaveTextDocument:h=>i.onNotification(D.DidSaveTextDocumentNotification.type,h),sendDiagnostics:h=>i.sendNotification(D.PublishDiagnosticsNotification.type,h),onHover:h=>i.onRequest(D.HoverRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onCompletion:h=>i.onRequest(D.CompletionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCompletionResolve:h=>i.onRequest(D.CompletionResolveRequest.type,h),onSignatureHelp:h=>i.onRequest(D.SignatureHelpRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDeclaration:h=>i.onRequest(D.DeclarationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDefinition:h=>i.onRequest(D.DefinitionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onTypeDefinition:h=>i.onRequest(D.TypeDefinitionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onImplementation:h=>i.onRequest(D.ImplementationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onReferences:h=>i.onRequest(D.ReferencesRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentHighlight:h=>i.onRequest(D.DocumentHighlightRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentSymbol:h=>i.onRequest(D.DocumentSymbolRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onWorkspaceSymbol:h=>i.onRequest(D.WorkspaceSymbolRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onWorkspaceSymbolResolve:h=>i.onRequest(D.WorkspaceSymbolResolveRequest.type,h),onCodeAction:h=>i.onRequest(D.CodeActionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCodeActionResolve:h=>i.onRequest(D.CodeActionResolveRequest.type,(p,w)=>h(p,w)),onCodeLens:h=>i.onRequest(D.CodeLensRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCodeLensResolve:h=>i.onRequest(D.CodeLensResolveRequest.type,(p,w)=>h(p,w)),onDocumentFormatting:h=>i.onRequest(D.DocumentFormattingRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDocumentRangeFormatting:h=>i.onRequest(D.DocumentRangeFormattingRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDocumentOnTypeFormatting:h=>i.onRequest(D.DocumentOnTypeFormattingRequest.type,(p,w)=>h(p,w)),onRenameRequest:h=>i.onRequest(D.RenameRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onPrepareRename:h=>i.onRequest(D.PrepareRenameRequest.type,(p,w)=>h(p,w)),onDocumentLinks:h=>i.onRequest(D.DocumentLinkRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentLinkResolve:h=>i.onRequest(D.DocumentLinkResolveRequest.type,(p,w)=>h(p,w)),onDocumentColor:h=>i.onRequest(D.DocumentColorRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onColorPresentation:h=>i.onRequest(D.ColorPresentationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onFoldingRanges:h=>i.onRequest(D.FoldingRangeRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onSelectionRanges:h=>i.onRequest(D.SelectionRangeRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onExecuteCommand:h=>i.onRequest(D.ExecuteCommandRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),dispose:()=>i.dispose()};for(let h of m)h.attach(_);return i.onRequest(D.InitializeRequest.type,h=>{e.initialize(h),Et.string(h.trace)&&(s.trace=D.Trace.fromString(h.trace));for(let p of m)p.initialize(h.capabilities);if(v){let p=v(h,new D.CancellationTokenSource().token,(0,z.attachWorkDone)(i,h),void 0);return g(p).then(w=>{if(w instanceof D.ResponseError)return w;let F=w;F||(F={capabilities:{}});let G=F.capabilities;G||(G={},F.capabilities=G),G.textDocumentSync===void 0||G.textDocumentSync===null?G.textDocumentSync=Et.number(_.__textDocumentSync)?_.__textDocumentSync:D.TextDocumentSyncKind.None:!Et.number(G.textDocumentSync)&&!Et.number(G.textDocumentSync.change)&&(G.textDocumentSync.change=Et.number(_.__textDocumentSync)?_.__textDocumentSync:D.TextDocumentSyncKind.None);for(let J of m)J.fillServerCapabilities(G);return F})}else{let p={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let w of m)w.fillServerCapabilities(p.capabilities);return p}}),i.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,d)return d(new D.CancellationTokenSource().token)}),i.onNotification(D.ExitNotification.type,()=>{try{R&&R()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(D.SetTraceNotification.type,h=>{s.trace=D.Trace.fromString(h.value)}),_}ne.createConnection=LI;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(l,c,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(c,u);(!m||("get"in m?!c.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(l,f,m)}:function(l,c,u,f){f===void 0&&(f=u),l[f]=c[u]}),n=xe&&xe.__exportStar||function(l,c){for(var u in l)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&e(c,l,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProposedFeatures=t.NotebookDocuments=t.TextDocuments=t.SemanticTokensBuilder=void 0;const r=vn;Object.defineProperty(t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return r.SemanticTokensBuilder}});const i=jc;n(oe,t);const s=Us;Object.defineProperty(t,"TextDocuments",{enumerable:!0,get:function(){return s.TextDocuments}});const o=mr;Object.defineProperty(t,"NotebookDocuments",{enumerable:!0,get:function(){return o.NotebookDocuments}}),n(ne,t);var a;(function(l){l.all={__brand:"features",languages:i.InlineCompletionFeature}})(a||(t.ProposedFeatures=a={}))})(Uf);var MI=oe;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(a,l,c,u){u===void 0&&(u=c);var f=Object.getOwnPropertyDescriptor(l,c);(!f||("get"in f?!l.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return l[c]}}),Object.defineProperty(a,u,f)}:function(a,l,c,u){u===void 0&&(u=c),a[u]=l[c]}),n=xe&&xe.__exportStar||function(a,l){for(var c in a)c!=="default"&&!Object.prototype.hasOwnProperty.call(l,c)&&e(l,a,c)};Object.defineProperty(t,"__esModule",{value:!0}),t.createConnection=void 0;const r=Uf;n(MI,t),n(Uf,t);let i=!1;const s={initialize:a=>{},get shutdownReceived(){return i},set shutdownReceived(a){i=a},exit:a=>{}};function o(a,l,c,u){let f,m,g,d;a!==void 0&&a.__brand==="features"&&(f=a,a=l,l=c,c=u),r.ConnectionStrategy.is(a)||r.ConnectionOptions.is(a)?d=a:(m=a,g=l,d=c);const v=R=>(0,r.createProtocolConnection)(m,g,R,d);return(0,r.createConnection)(v,s,f)}t.createConnection=o})(L);function Qg(t,e){const n={stacks:t,tokens:e};return FI(n),n.stacks.flat().forEach(i=>{i.property=void 0}),ST(n.stacks).map(i=>i[i.length-1])}function Bh(t){const{next:e,cardinalities:n,visited:r,plus:i}=t,s=[],o=e.feature;if(r.has(o))return[];cr(o)||r.add(o);let a,l=o;for(;l.$container;)if(cr(l.$container)){a=l.$container;break}else if(Ay(l.$container))l=l.$container;else break;if(vR(l.cardinality)){const c=Dr({next:{feature:l,type:e.type},cardinalities:n,visited:r,plus:i});for(const u of c)i.add(u.feature);s.push(...c)}if(a){const c=a.elements.indexOf(l);c!==void 0&&c<a.elements.length-1&&s.push(...bT({feature:a,type:e.type},c+1,n,r,i)),s.every(u=>as(u.feature.cardinality,u.feature)||as(n.get(u.feature))||i.has(u.feature))&&s.push(...Bh({next:{feature:a,type:e.type},cardinalities:n,visited:r,plus:i}))}return s}function Qf(t){return Je(t)&&(t={feature:t}),Dr({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Dr(t){var e,n,r;const{next:i,cardinalities:s,visited:o,plus:a}=t;if(i===void 0)return[];const{feature:l,type:c}=i;if(cr(l))return o.has(l)?[]:(o.add(l),bT(i,0,s,o,a).map(u=>So(u,l.cardinality,s)));if(eh(l)||th(l))return l.elements.flatMap(u=>Dr({next:{feature:u,type:c,property:i.property},cardinalities:s,visited:o,plus:a})).map(u=>So(u,l.cardinality,s));if(rn(l)){const u={feature:l.terminal,type:c,property:(e=i.property)!==null&&e!==void 0?e:l.feature};return Dr({next:u,cardinalities:s,visited:o,plus:a}).map(f=>So(f,l.cardinality,s))}else{if(Ss(l))return Bh({next:{feature:l,type:ac(l),property:(n=i.property)!==null&&n!==void 0?n:l.feature},cardinalities:s,visited:o,plus:a});if(Rn(l)&&it(l.rule.ref)){const u=l.rule.ref,f={feature:u.definition,type:u.fragment||u.dataType?void 0:(r=Cs(u))!==null&&r!==void 0?r:u.name,property:i.property};return Dr({next:f,cardinalities:s,visited:o,plus:a}).map(m=>So(m,l.cardinality,s))}else return[i]}}function So(t,e,n){return n.set(t.feature,e),t}function bT(t,e,n,r,i){var s;const o=[];let a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},o.push(...Dr({next:a,cardinalities:n,visited:r,plus:i})),!!as((s=a.feature.cardinality)!==null&&s!==void 0?s:n.get(a.feature),a.feature)););return o}function FI(t){for(const e of t.tokens){const n=ST(t.stacks,e);t.stacks=n}}function ST(t,e){const n=[];for(const r of t)n.push(...HI(r,e));return n}function HI(t,e){const n=new Map,r=new Set(t.map(s=>s.feature).filter(jI)),i=[];for(;t.length>0;){const s=t.pop(),o=Bh({next:s,cardinalities:n,plus:r,visited:new Set}).filter(a=>e?Kh(a.feature,e):!0);for(const a of o)i.push([...t,a]);if(!o.every(a=>as(a.feature.cardinality,a.feature)||as(n.get(a.feature))))break}return i}function jI(t){if(t.cardinality==="+")return!0;const e=On(t,rn);return!!(e&&e.cardinality==="+")}function Kh(t,e){if(Dt(t))return t.value===e.image;if(Rn(t))return UI(t.rule.ref,e);if($s(t)){const n=qy(t);if(n)return Kh(n,e)}return!1}function UI(t,e){return it(t)?Qf(t.definition).some(r=>Kh(r.feature,e)):Xn(t)?lc(t).test(e.image):!1}function qI(t){const e=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.triggerCharacters)!==null&&i!==void 0?i:[]}))),n=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:n.length>0?n:void 0}}class $T{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,n,r){const i=[],s=this.buildContexts(e,n.position),o=(c,u)=>{const f=this.fillCompletionItem(c,u);f&&i.push(f)},a=c=>Dt(c.feature)?c.feature.value:c.feature,l=[];for(const c of s)if(await Promise.all(Re(c.features).distinct(a).exclude(l).map(u=>this.completionFor(c,u,o))),l.push(...c.features),!this.continueCompletion(i))break;return L.CompletionList.create(this.deduplicateItems(i),!0)}deduplicateItems(e){return Re(e).distinct(n=>`${n.kind}_${n.label}_${n.detail}`).toArray()}findFeaturesAt(e,n){const r=e.getText({start:L.Position.create(0,0),end:e.positionAt(n)}),i=this.completionParser.parse(r),s=i.tokens;if(i.tokenIndex===0){const l=pd(this.grammar),c=Qf({feature:l.definition,type:Cs(l)});return s.length>0?(s.shift(),Qg(c.map(u=>[u]),s)):c}const o=[...s].splice(i.tokenIndex);return Qg([i.elementStack.map(l=>({feature:l}))],o)}*buildContexts(e,n){var r,i;const s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument,a=o.getText(),l=o.offsetAt(n),c={document:e,textDocument:o,offset:l,position:n},u=this.findDataTypeRuleStart(s,l);if(u){const[h,p]=u,w=(r=fd(s,h))===null||r===void 0?void 0:r.astNode;yield Object.assign(Object.assign({},c),{node:w,tokenOffset:h,tokenEndOffset:p,features:this.findFeaturesAt(o,h)})}const{nextTokenStart:f,nextTokenEnd:m,previousTokenStart:g,previousTokenEnd:d}=this.backtrackToAnyToken(a,l);let v=f;l<=f&&g!==void 0&&(v=g);const R=(i=fd(s,v))===null||i===void 0?void 0:i.astNode;let _=!0;if(g!==void 0&&d!==void 0&&d===l&&(yield Object.assign(Object.assign({},c),{node:R,tokenOffset:g,tokenEndOffset:d,features:this.findFeaturesAt(o,g)}),_=this.performNextTokenCompletion(e,a.substring(g,d),g,d),_&&(yield Object.assign(Object.assign({},c),{node:R,tokenOffset:d,tokenEndOffset:d,features:this.findFeaturesAt(o,d)}))),R)_&&(yield Object.assign(Object.assign({},c),{node:R,tokenOffset:f,tokenEndOffset:m,features:this.findFeaturesAt(o,f)}));else{const h=pd(this.grammar);if(!h)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},c),{tokenOffset:f,tokenEndOffset:m,features:Qf(h.definition)})}}performNextTokenCompletion(e,n,r,i){return new RegExp("\\P{L}$","u").test(n)}findDataTypeRuleStart(e,n){var r,i;let s=lr(e,n,this.grammarConfig.nameRegexp),o=!!(!((r=On(s==null?void 0:s.grammarSource,it))===null||r===void 0)&&r.dataType);if(o){for(;o;)s=s==null?void 0:s.container,o=!!(!((i=On(s==null?void 0:s.grammarSource,it))===null||i===void 0)&&i.dataType);if(s)return[s.offset,s.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,n){const r=this.lexer.tokenize(e).tokens;if(r.length===0)return{nextTokenStart:n,nextTokenEnd:n};let i;for(const s of r){if(s.startOffset>=n)return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(s.endOffset>=n)return{nextTokenStart:s.startOffset,nextTokenEnd:s.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=s}return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,n,r){if(Dt(n.feature))return this.completionForKeyword(e,n.feature,r);if($s(n.feature)&&e.node)return this.completionForCrossReference(e,n,r)}completionForCrossReference(e,n,r){const i=On(n.feature,rn);let s=e.node;if(i&&s){n.type&&(s={$type:n.type,$container:s,$containerProperty:n.property},Ly(this.astReflection,s));const o={reference:{$refText:""},container:s,property:i.feature};try{for(const a of this.getReferenceCandidates(o,e))r(e,this.createReferenceCompletionItem(a))}catch(a){console.error(a)}}}getReferenceCandidates(e,n){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){const n=this.nodeKindProvider.getCompletionItemKind(e),r=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:n,documentation:r,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;const n=this.documentationProvider.getDocumentation(e.node);if(n)return{kind:"markdown",value:n}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return L.CompletionItemKind.Keyword}filterKeyword(e,n){return new RegExp("\\p{L}","u").test(n.value)}fillCompletionItem(e,n){var r,i;let s;if(typeof n.label=="string")s=n.label;else if("node"in n){const c=this.nameProvider.getName(n.node);if(!c)return;s=c}else if("nodeDescription"in n)s=n.nodeDescription.name;else return;let o;typeof((r=n.textEdit)===null||r===void 0?void 0:r.newText)=="string"?o=n.textEdit.newText:typeof n.insertText=="string"?o=n.insertText:o=s;const a=(i=n.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,s,o);return a?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:a,label:s}:void 0}buildCompletionTextEdit(e,n,r){const s=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(s,n)){const o=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:r,range:{start:o,end:a}}}else return}}class BI{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,n,r){const i=e.parseResult.value;if(i.$cstNode){const s=i.$cstNode,o=lr(s,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,n)}}collectLocationLinks(e,n){var r;const i=this.findLink(e);if(i)return[L.LocationLink.create(i.targetDocument.textDocument.uri,((r=i.target.astNode.$cstNode)!==null&&r!==void 0?r:i.target).range,i.target.range,i.source.range)]}findLink(e){const n=this.references.findDeclarationNode(e);if(n!=null&&n.astNode){const r=sn(n.astNode);if(n&&r)return{source:e,target:n,targetDocument:r}}}}class KI{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return;const s=lr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!s)return;const o=this.references.findDeclaration(s);if(o){const a=he.equals(sn(o).uri,e.uri),l={documentUri:e.uri,includeDeclaration:a};return this.references.findReferences(o,l).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return L.DocumentHighlight.create(e.segment.range)}}class WI{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e,n,r){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,n){const r=n.$cstNode,i=this.nameProvider.getNameNode(n);if(i&&r){const s=this.nameProvider.getName(n);return[{kind:this.nodeKindProvider.getSymbolKind(n),name:s||i.text,range:r.range,selectionRange:i.range,children:this.getChildSymbols(e,n)}]}else return this.getChildSymbols(e,n)||[]}getChildSymbols(e,n){const r=[];for(const i of ic(n)){const s=this.getSymbol(e,i);r.push(...s)}if(r.length>0)return r}}class GI{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let n=!1;e.lsp.LanguageServer.onInitialize(r=>{var i,s;n=!!(!((s=(i=r.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||s===void 0)&&s.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(r=>{n&&this.registerFileWatcher(e)})}registerFileWatcher(e){const n=[],r=Re(e.ServiceRegistry.all).flatMap(s=>s.LanguageMetaData.fileExtensions).map(s=>s.startsWith(".")?s.substring(1):s).distinct().toArray();r.length>0&&n.push({globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`});const i=Re(e.ServiceRegistry.all).flatMap(s=>{var o;return(o=s.LanguageMetaData.fileNames)!==null&&o!==void 0?o:[]}).distinct().toArray();if(i.length>0&&n.push({globPattern:i.length===1?`**/${i[0]}`:`**/{${i.join(",")}}`}),n.length>0){const s=e.lsp.Connection,o={watchers:n};s==null||s.client.register(L.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,n){e=e.filter(r=>this.serviceRegistry.hasServices(r)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(r=>this.documentBuilder.update(e,n,r))}).catch(r=>{console.error("Workspace initialization failed. Could not perform document update.",r)})}didChangeContent(e){this.fireDocumentUpdate([at.parse(e.document.uri)],[])}didChangeWatchedFiles(e){const n=Re(e.changes).filter(i=>i.type!==L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray(),r=Re(e.changes).filter(i=>i.type===L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray();this.fireDocumentUpdate(n,r)}}class zI{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e,n,r){const i=[],s=o=>i.push(o);return this.collectFolding(e,s),i}collectFolding(e,n){var r;const i=(r=e.parseResult)===null||r===void 0?void 0:r.value;if(i){if(this.shouldProcessContent(i)){const s=tn(i).iterator();let o;do if(o=s.next(),!o.done){const a=o.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,n),this.shouldProcessContent(a)||s.prune()}while(!o.done)}this.collectCommentFolding(e,i,n)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,n,r){const i=n.$cstNode;if(i){const s=this.toFoldingRange(e,i);s&&r(s)}}collectCommentFolding(e,n,r){const i=n.$cstNode;if(i){for(const s of MT(i))if(this.commentNames.includes(s.tokenType.name)){const o=this.toFoldingRange(e,s,L.FoldingRangeKind.Comment);o&&r(o)}}}toFoldingRange(e,n,r){const i=n.range,s=i.start;let o=i.end;if(!(o.line-s.line<2))return this.includeLastFoldingLine(n,r)||(o=e.textDocument.positionAt(e.textDocument.offsetAt({line:o.line,character:0})-1)),L.FoldingRange.create(s.line,o.line,s.character,o.character,r)}includeLastFoldingLine(e,n){if(n===L.FoldingRangeKind.Comment)return!1;const r=e.text,i=r.charAt(r.length-1);return!(i==="}"||i===")"||i==="]")}}class VI{match(e,n){if(e.length===0)return!0;let r=!1,i,s=0;const o=n.length;for(let a=0;a<o;a++){const l=n.charCodeAt(a),c=e.charCodeAt(s);if((l===c||this.toUpperCharCode(l)===this.toUpperCharCode(c))&&(r||(r=i===void 0||this.isWordTransition(i,l)),r&&s++,s===e.length))return!0;i=l}return!1}isWordTransition(e,n){return Zg<=e&&e<=ey&&YI<=n&&n<=XI||e===ty&&n!==ty}toUpperCharCode(e){return Zg<=e&&e<=ey?e-32:e}}const Zg=97,ey=122,YI=65,XI=90,ty=95;class JI{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,n){var r,i;const s=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(s){const o=e.textDocument.offsetAt(n.position),a=lr(s,o,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>o){const l=this.references.findDeclaration(a);if(l)return this.getAstNodeHoverContent(l);if(Dt(a.grammarSource))return this.getKeywordHoverContent(a.grammarSource)}}}getKeywordHoverContent(e){var n;let r=L_(e)?e.$comment:void 0;if(r||(r=(n=$y(e.$cstNode,["ML_COMMENT"]))===null||n===void 0?void 0:n.text),r&&H_(r)){const i=F_(r).toMarkdown();if(i)return{contents:{kind:"markdown",value:i}}}}}class QI extends JI{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){const n=this.documentationProvider.getDocumentation(e);if(n)return{contents:{kind:"markdown",value:n}}}}const ZI={[L.SemanticTokenTypes.class]:0,[L.SemanticTokenTypes.comment]:1,[L.SemanticTokenTypes.enum]:2,[L.SemanticTokenTypes.enumMember]:3,[L.SemanticTokenTypes.event]:4,[L.SemanticTokenTypes.function]:5,[L.SemanticTokenTypes.interface]:6,[L.SemanticTokenTypes.keyword]:7,[L.SemanticTokenTypes.macro]:8,[L.SemanticTokenTypes.method]:9,[L.SemanticTokenTypes.modifier]:10,[L.SemanticTokenTypes.namespace]:11,[L.SemanticTokenTypes.number]:12,[L.SemanticTokenTypes.operator]:13,[L.SemanticTokenTypes.parameter]:14,[L.SemanticTokenTypes.property]:15,[L.SemanticTokenTypes.regexp]:16,[L.SemanticTokenTypes.string]:17,[L.SemanticTokenTypes.struct]:18,[L.SemanticTokenTypes.type]:19,[L.SemanticTokenTypes.typeParameter]:20,[L.SemanticTokenTypes.variable]:21,[L.SemanticTokenTypes.decorator]:22},eD={[L.SemanticTokenModifiers.abstract]:1,[L.SemanticTokenModifiers.async]:2,[L.SemanticTokenModifiers.declaration]:4,[L.SemanticTokenModifiers.defaultLibrary]:8,[L.SemanticTokenModifiers.definition]:16,[L.SemanticTokenModifiers.deprecated]:32,[L.SemanticTokenModifiers.documentation]:64,[L.SemanticTokenModifiers.modification]:128,[L.SemanticTokenModifiers.readonly]:256,[L.SemanticTokenModifiers.static]:512};function tD(t){const e=[],n=[];let r=!0,i=!0,s=!0;for(const o of t)o&&(o.legend.tokenTypes.forEach((a,l)=>{const c=e[l];if(c&&c!==a)throw new Error(`Cannot merge '${c}' and '${a}' token types. They use the same index ${l}.`);e[l]=a}),o.legend.tokenModifiers.forEach((a,l)=>{const c=n[l];if(c&&c!==a)throw new Error(`Cannot merge '${c}' and '${a}' token modifier. They use the same index ${l}.`);n[l]=a}),o.full?typeof o.full=="object"&&!o.full.delta&&(i=!1):r=!1,o.range||(s=!1));return{legend:{tokenTypes:e,tokenModifiers:n},full:r&&{delta:i},range:s}}class nD extends L.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,n,r,i,s){this._tokens.push({line:e,char:n,length:r,tokenType:i,tokenModifiers:s})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(const e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,n){return e.line===n.line?e.char-n.char:e.line-n.line}}class rD{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(n=>{this.tokensBuilders.delete(n.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(n=>{var r;this.initialize((r=n.capabilities.textDocument)===null||r===void 0?void 0:r.semanticTokens)})}initialize(e){this.clientCapabilities=e}get tokenTypes(){return ZI}get tokenModifiers(){return eD}get semanticTokensOptions(){return{legend:{tokenTypes:Object.keys(this.tokenTypes),tokenModifiers:Object.keys(this.tokenModifiers)},full:{delta:!0},range:!0}}async semanticHighlight(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightRange(e,n,r=le.None){return this.currentRange=n.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,n,r=le.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(n.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.buildEdits()}createAcceptor(){return n=>{"line"in n?this.highlightToken({range:{start:{line:n.line,character:n.char},end:{line:n.line,character:n.char+n.length}},type:n.type,modifier:n.modifier}):"range"in n?this.highlightToken(n):"keyword"in n?this.highlightKeyword(n):"property"in n?this.highlightProperty(n):this.highlightNode({node:n.cst,type:n.type,modifier:n.modifier})}}getDocumentTokensBuilder(e){const n=this.tokensBuilders.get(e.uri.toString());if(n)return n;const r=new nD;return this.tokensBuilders.set(e.uri.toString(),r),r}async computeHighlighting(e,n,r){const i=e.parseResult.value,s=sr(i,{range:this.currentRange}).iterator();let o;do if(o=s.next(),!o.done){await ot(r);const a=o.value;this.highlightElement(a,n)==="prune"&&s.prune()}while(!o.done)}highlightToken(e){var n;const{range:r,type:i}=e;let s=e.modifier;if(this.currentRange&&!by(r,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;const o=this.tokenTypes[i];let a=0;if(s!==void 0){typeof s=="string"&&(s=[s]);for(const u of s){const f=this.tokenModifiers[u];a|=f}}const l=r.start.line,c=r.end.line;if(l===c){const u=r.start.character,f=r.end.character-u;this.currentTokensBuilder.push(l,u,f,o,a)}else if(!((n=this.clientCapabilities)===null||n===void 0)&&n.multilineTokenSupport){const u=r.start.character,f=this.currentDocument.textDocument.offsetAt(r.start),m=this.currentDocument.textDocument.offsetAt(r.end);this.currentTokensBuilder.push(l,u,m-f,o,a)}else{const u=r.start;let f=this.currentDocument.textDocument.offsetAt({line:l+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,o,a);for(let m=l+1;m<c;m++){const g=f;f=this.currentDocument.textDocument.offsetAt({line:m+1,character:0}),this.currentTokensBuilder.push(m,0,f-g-1,o,a)}this.currentTokensBuilder.push(c,0,r.end.character,o,a)}}highlightProperty(e){const n=[];if(typeof e.index=="number"){const s=nh(e.node.$cstNode,e.property,e.index);s&&n.push(s)}else n.push(...By(e.node.$cstNode,e.property));const{type:r,modifier:i}=e;for(const s of n)this.highlightNode({node:s,type:r,modifier:i})}highlightKeyword(e){const{node:n,keyword:r,type:i,index:s,modifier:o}=e,a=[];if(typeof s=="number"){const l=Ky(n.$cstNode,r,s);l&&a.push(l)}else a.push(...gR(n.$cstNode,r));for(const l of a)this.highlightNode({node:l,type:i,modifier:o})}highlightNode(e){const{node:n,type:r,modifier:i}=e,s=n.range;this.highlightToken({range:s,type:r,modifier:i})}}var ny;(function(t){function e(r,i,s){const o=new Map;Object.entries(i).forEach(([c,u])=>o.set(u,c));let a=0,l=0;return n(r.data,5).map(c=>{a+=c[0],c[0]!==0&&(l=0),l+=c[1];const u=c[2];return{offset:s.textDocument.offsetAt({line:a,character:l}),tokenType:o.get(c[3]),tokenModifiers:c[4],text:s.textDocument.getText({start:{line:a,character:l},end:{line:a,character:l+u}})}})}t.decode=e;function n(r,i){const s=[];for(let o=0;o<r.length;o+=i){const a=r.slice(o,o+i);s.push(a)}return s}})(ny||(ny={}));function iD(t){const e=[],n=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&n.push(...i.retriggerCharacters)});const r={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:n.length>0?Array.from(new Set(n)).sort():void 0};return r.triggerCharacters?r:void 0}class sD{constructor(e){this.onInitializeEmitter=new oe.Emitter,this.onInitializedEmitter=new oe.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){jf(this.services),this.services.ServiceRegistry.all.forEach(e=>jf(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var n,r,i,s;const o=this.services.lsp.DocumentUpdateHandler,a=(n=this.services.lsp.FileOperationHandler)===null||n===void 0?void 0:n.fileOperationOptions,l=this.services.ServiceRegistry.all,c=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.Formatter}),u=l.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.Formatter)===null||te===void 0?void 0:te.formatOnTypeOptions}).find(x=>!!x),f=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CodeActionProvider}),m=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.SemanticTokenProvider}),g=tD(l.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.SemanticTokenProvider)===null||te===void 0?void 0:te.semanticTokensOptions})),d=(i=(r=this.services.lsp)===null||r===void 0?void 0:r.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,v=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentLinkProvider}),R=iD(l.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.SignatureHelp)===null||te===void 0?void 0:te.signatureHelpOptions})),_=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.TypeProvider}),h=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.ImplementationProvider}),p=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CompletionProvider}),w=qI(l.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.CompletionProvider)===null||te===void 0?void 0:te.completionOptions})),F=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.ReferencesProvider}),G=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentSymbolProvider}),J=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DefinitionProvider}),ke=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentHighlightProvider}),Ee=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.FoldingRangeProvider}),Pe=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.HoverProvider}),A=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.RenameProvider}),E=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CallHierarchyProvider}),k=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.TypeHierarchyProvider}),C=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CodeLensProvider}),N=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DeclarationProvider}),P=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.InlayHintProvider}),O=(s=this.services.lsp)===null||s===void 0?void 0:s.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:a},executeCommandProvider:d&&{commands:d},textDocumentSync:{change:oe.TextDocumentSyncKind.Incremental,openClose:!0,save:!!o.didSaveDocument,willSave:!!o.willSaveDocument,willSaveWaitUntil:!!o.willSaveDocumentWaitUntil},completionProvider:p?w:void 0,referencesProvider:F,documentSymbolProvider:G,definitionProvider:J,typeDefinitionProvider:_,documentHighlightProvider:ke,codeActionProvider:f,documentFormattingProvider:c,documentRangeFormattingProvider:c,documentOnTypeFormattingProvider:u,foldingRangeProvider:Ee,hoverProvider:Pe,renameProvider:A?{prepareProvider:!0}:void 0,semanticTokensProvider:m?g:void 0,signatureHelpProvider:R,implementationProvider:h,callHierarchyProvider:E?{}:void 0,typeHierarchyProvider:k?{}:void 0,documentLinkProvider:v?{resolveProvider:!1}:void 0,codeLensProvider:C?{resolveProvider:!1}:void 0,declarationProvider:N,inlayHintProvider:P?{resolveProvider:!1}:void 0,workspaceSymbolProvider:O?{resolveProvider:!!O.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){const n=this.services.lsp.Connection,r=n?Object.assign(Object.assign({},e),{register:i=>n.client.register(oe.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>n.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(r).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}}function oD(t){const e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");aD(e,t),lD(e,t),cD(e,t),uD(e,t),dD(e,t),hD(e,t),pD(e,t),mD(e,t),gD(e,t),vD(e,t),TD(e,t),RD(e,t),fD(e,t),wD(e,t),_D(e,t),kD(e,t),bD(e,t),$D(e,t),ED(e,t),ND(e,t),ID(e,t),PD(e,t),CD(e,t),SD(e,t),yD(e,t),AD(e,t),e.onInitialize(r=>t.lsp.LanguageServer.initialize(r)),e.onInitialized(r=>{t.lsp.LanguageServer.initialized(r)}),t.workspace.TextDocuments.listen(e),e.listen()}function aD(t,e){const n=e.lsp.DocumentUpdateHandler,r=e.workspace.TextDocuments;n.didOpenDocument&&r.onDidOpen(i=>n.didOpenDocument(i)),n.didChangeContent&&r.onDidChangeContent(i=>n.didChangeContent(i)),n.didCloseDocument&&r.onDidClose(i=>n.didCloseDocument(i)),n.didSaveDocument&&r.onDidSave(i=>n.didSaveDocument(i)),n.willSaveDocument&&r.onWillSave(i=>n.willSaveDocument(i)),n.willSaveDocumentWaitUntil&&r.onWillSaveWaitUntil(i=>n.willSaveDocumentWaitUntil(i)),n.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(i=>n.didChangeWatchedFiles(i))}function lD(t,e){const n=e.lsp.FileOperationHandler;n&&(n.didCreateFiles&&t.workspace.onDidCreateFiles(r=>n.didCreateFiles(r)),n.didRenameFiles&&t.workspace.onDidRenameFiles(r=>n.didRenameFiles(r)),n.didDeleteFiles&&t.workspace.onDidDeleteFiles(r=>n.didDeleteFiles(r)),n.willCreateFiles&&t.workspace.onWillCreateFiles(r=>n.willCreateFiles(r)),n.willRenameFiles&&t.workspace.onWillRenameFiles(r=>n.willRenameFiles(r)),n.willDeleteFiles&&t.workspace.onWillDeleteFiles(r=>n.willDeleteFiles(r)))}function cD(t,e){const n=e.workspace.DocumentBuilder;n.onUpdate(async(r,i)=>{for(const s of i)t.sendDiagnostics({uri:s.toString(),diagnostics:[]})}),n.onDocumentPhase(U.Validated,async r=>{r.diagnostics&&t.sendDiagnostics({uri:r.uri.toString(),diagnostics:r.diagnostics})})}function uD(t,e){t.onCompletion(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(r,i,s)},e,U.IndexedReferences))}function dD(t,e){t.onReferences(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(r,i,s)},e,U.IndexedReferences))}function fD(t,e){t.onCodeAction(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(r,i,s)},e,U.Validated))}function hD(t,e){t.onDocumentSymbol(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(r,i,s)},e,U.Parsed))}function pD(t,e){t.onDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(r,i,s)},e,U.IndexedReferences))}function mD(t,e){t.onTypeDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(r,i,s)},e,U.IndexedReferences))}function gD(t,e){t.onImplementation(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(r,i,s)},e,U.IndexedReferences))}function yD(t,e){t.onDeclaration(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(r,i,s)},e,U.IndexedReferences))}function vD(t,e){t.onDocumentHighlight(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(r,i,s)},e,U.IndexedReferences))}function _D(t,e){t.onHover(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(r,i,s)},e,U.IndexedReferences))}function TD(t,e){t.onFoldingRanges(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(r,i,s)},e,U.Parsed))}function RD(t,e){t.onDocumentFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocument(r,i,s)},e,U.Parsed)),t.onDocumentRangeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(r,i,s)},e,U.Parsed)),t.onDocumentOnTypeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(r,i,s)},e,U.Parsed))}function wD(t,e){t.onRenameRequest(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.rename(r,i,s)},e,U.IndexedReferences)),t.onPrepareRename(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.prepareRename(r,i,s)},e,U.IndexedReferences))}function kD(t,e){t.languages.inlayHint.on(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(r,i,s)},e,U.IndexedReferences))}function bD(t,e){const n={data:[]};t.languages.semanticTokens.on(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlight(i,s,o):n},e,U.IndexedReferences)),t.languages.semanticTokens.onDelta(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightDelta(i,s,o):n},e,U.IndexedReferences)),t.languages.semanticTokens.onRange(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightRange(i,s,o):n},e,U.IndexedReferences))}function SD(t,e){t.onDidChangeConfiguration(n=>{n.settings&&e.workspace.ConfigurationProvider.updateConfiguration(n)})}function $D(t,e){const n=e.lsp.ExecuteCommandHandler;n&&t.onExecuteCommand(async(r,i)=>{var s;try{return await n.executeCommand(r.command,(s=r.arguments)!==null&&s!==void 0?s:[],i)}catch(o){return $n(o)}})}function CD(t,e){t.onDocumentLinks(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(r,i,s)},e,U.Parsed))}function ED(t,e){t.onSignatureHelp(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(r,i,s)},e,U.IndexedReferences))}function PD(t,e){t.onCodeLens(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(r,i,s)},e,U.IndexedReferences))}function AD(t,e){var n;const r=e.lsp.WorkspaceSymbolProvider;if(r){const i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(o,a)=>{try{return await i.waitUntil(U.IndexedContent,a),await r.getSymbols(o,a)}catch(l){return $n(l)}});const s=(n=r.resolveSymbol)===null||n===void 0?void 0:n.bind(r);s&&t.onWorkspaceSymbolResolve(async(o,a)=>{try{return await i.waitUntil(U.IndexedContent,a),await s(o,a)}catch(l){return $n(l)}})}}function ND(t,e){t.languages.callHierarchy.onPrepare(Tn(async(n,r,i,s)=>{var o;if(!((o=n.lsp)===null||o===void 0)&&o.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.prepareCallHierarchy(r,i,s);return a??null}return null},e,U.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(rc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.incomingCalls(r,i);return o??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(rc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.outgoingCalls(r,i);return o??null}return null},e))}function ID(t,e){e.ServiceRegistry.all.some(n=>{var r;return(r=n.lsp)===null||r===void 0?void 0:r.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Tn(async(n,r,i,s)=>{var o,a;const l=await((a=(o=n.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(r,i,s));return l??null},e,U.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(rc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.supertypes(r,i));return a??null},e)),t.languages.typeHierarchy.onSubtypes(rc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.subtypes(r,i));return a??null},e)))}function rc(t,e){const n=e.ServiceRegistry;return async(r,i)=>{const s=at.parse(r.item.uri),o=await Wh(e,i,s,U.IndexedReferences);if(o)return o;if(!n.hasServices(s)){const l=`Could not find service instance for uri: '${s}'`;return console.debug(l),$n(new Error(l))}const a=n.getServices(s);try{return await t(a,r,i)}catch(l){return $n(l)}}}function Tn(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),l=await Wh(e,o,a,n);if(l)return l;if(!i.hasServices(a)){const u=`Could not find service instance for uri: '${a}'`;return console.debug(u),$n(new Error(u))}const c=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(c,u,s,o)}catch(u){return $n(u)}}}function rt(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),l=await Wh(e,o,a,n);if(l)return l;if(!i.hasServices(a))return console.debug(`Could not find service instance for uri: '${a.toString()}'`),null;const c=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(c,u,s,o)}catch(u){return $n(u)}}}async function Wh(t,e,n,r){if(r!==void 0){const i=t.workspace.DocumentBuilder;try{await i.waitUntil(r,n,e)}catch(s){return $n(s)}}}function $n(t){if(Hs(t))return new oe.ResponseError(oe.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof oe.ResponseError)return t;throw t}class DD{getSymbolKind(e){return L.SymbolKind.Field}getCompletionItemKind(e){return L.CompletionItemKind.Reference}}class OD{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return[];const s=lr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);return s?this.getReferences(s,n,e):[]}getReferences(e,n,r){const i=[],s=this.references.findDeclaration(e);if(s){const o={includeDeclaration:n.context.includeDeclaration};this.references.findReferences(s,o).forEach(a=>{i.push(L.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}}class xD{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,n,r){const i={},s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument.offsetAt(n.position),a=lr(s,o,this.grammarConfig.nameRegexp);if(!a)return;const l=this.references.findDeclaration(a);if(!l)return;const c={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(l,c).forEach(f=>{const m=Bt.replace(f.segment.range,n.newName),g=f.sourceUri.toString();i[g]?i[g].push(m):i[g]=[m]}),{changes:i}}prepareRename(e,n,r){return this.renameNodeRange(e,n.position)}renameNodeRange(e,n){const r=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(n);if(r&&i){const s=lr(r,i,this.grammarConfig.nameRegexp);if(!s)return;if(this.references.findDeclaration(s)||this.isNameNode(s))return s.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&D_(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}}class LD{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,n=le.None){const r=[],i=e.query.toLowerCase();for(const s of this.indexManager.allElements())if(await ot(n),this.fuzzyMatcher.match(i,s.name)){const o=this.getWorkspaceSymbol(s);o&&r.push(o)}return r}getWorkspaceSymbol(e){const n=e.nameSegment;if(n)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:n.range,uri:e.documentUri.toString()}}}}class CT{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new L.Emitter,this._onDidOpen=new L.Emitter,this._onDidClose=new L.Emitter,this._onDidSave=new L.Emitter,this._onWillSave=new L.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(he.normalize(e))}set(e){const n=he.normalize(e.uri);let r=!0;this._syncedDocuments.has(n)&&(r=!1),this._syncedDocuments.set(n,e);const i=Object.freeze({document:e});return this._onDidOpen.fire(i),this._onDidChangeContent.fire(i),r}delete(e){const n=he.normalize(typeof e=="object"&&"uri"in e?e.uri:e),r=this._syncedDocuments.get(n);r!==void 0&&(this._syncedDocuments.delete(n),this._onDidClose.fire(Object.freeze({document:r})))}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=L.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=he.normalize(i.uri),o=this._configuration.create(s,i.languageId,i.version,i.text);this._syncedDocuments.set(s,o);const a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);const a=he.normalize(i.uri);let l=this._syncedDocuments.get(a);l!==void 0&&(l=this._configuration.update(l,s,o),this._syncedDocuments.set(a,l),this._onDidChangeContent.fire(Object.freeze({document:l})))})),n.push(e.onDidCloseTextDocument(r=>{const i=he.normalize(r.textDocument.uri),s=this._syncedDocuments.get(i);s!==void 0&&(this._syncedDocuments.delete(i),this._onDidClose.fire(Object.freeze({document:s})))})),n.push(e.onWillSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{const s=this._syncedDocuments.get(he.normalize(r.textDocument.uri));return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),L.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}class MD{constructor(e){this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new L.Emitter,this._onDidSave=new L.Emitter,this._onDidChange=new L.Emitter,this._onDidClose=new L.Emitter,"listen"in e?this._cellTextDocuments=e:this._cellTextDocuments=new CT(e)}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(he.normalize(e))}getNotebookCell(e){const n=this.notebookCellMap.get(he.normalize(e));return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"||"scheme"in e?e:e.document,r=this.notebookCellMap.get(he.normalize(n));return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new Or,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri);this.notebookDocuments.set(s,i.notebookDocument);for(const o of i.cellTextDocuments)n.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o===void 0)return;o.version=i.notebookDocument.version;const a=o.metadata;let l=!1;const c=i.change;c.metadata!==void 0&&(l=!0,o.metadata=c.metadata);const u=[],f=[],m=[],g=[];if(c.cells!==void 0){const h=c.cells;if(h.structure!==void 0){const p=h.structure.array;if(o.cells.splice(p.start,p.deleteCount,...p.cells!==void 0?p.cells:[]),h.structure.didOpen!==void 0)for(const w of h.structure.didOpen)n.openTextDocument({textDocument:w}),u.push(w.uri);if(h.structure.didClose)for(const w of h.structure.didClose)n.closeTextDocument({textDocument:w}),f.push(w.uri)}if(h.data!==void 0){const p=new Map(h.data.map(w=>[w.document,w]));for(let w=0;w<=o.cells.length;w++){const F=p.get(o.cells[w].document);if(F!==void 0){const G=o.cells.splice(w,1,F);if(m.push({old:G[0],new:F}),p.delete(F.document),p.size===0)break}}}if(h.textContent!==void 0)for(const p of h.textContent)n.changeTextDocument({textDocument:p.document,contentChanges:p.changes}),g.push(p.document.uri)}this.updateCellMap(o);const d={notebookDocument:o};l&&(d.metadata={old:a,new:o.metadata});const v=[];for(const h of u)v.push(this.getNotebookCell(h));const R=[];for(const h of f)R.push(this.getNotebookCell(h));const _=[];for(const h of g)_.push(this.getNotebookCell(h));(v.length>0||R.length>0||m.length>0||_.length>0)&&(d.cells={added:v,removed:R,changed:{data:m,textContent:_}}),(d.metadata!==void 0||d.cells!==void 0)&&this._onDidChange.fire(d)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.getNotebookDocument(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o!==void 0){this._onDidClose.fire(o);for(const a of i.cellTextDocuments)n.closeTextDocument({textDocument:a});this.notebookDocuments.delete(s);for(const a of o.cells)this.notebookCellMap.delete(a.document)}})),L.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}class Or{onDidOpenTextDocument(e){return this.openHandler=e,L.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,L.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,L.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return Or.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return Or.NULL_DISPOSE}onDidSaveTextDocument(){return Or.NULL_DISPOSE}}Or.NULL_DISPOSE=Object.freeze({dispose:()=>{}});function FD(t){return zl.merge(W_(t),HD(t))}function HD(t){return{lsp:{CompletionProvider:e=>new $T(e),DocumentSymbolProvider:e=>new WI(e),HoverProvider:e=>new QI(e),FoldingRangeProvider:e=>new zI(e),ReferencesProvider:e=>new OD(e),DefinitionProvider:e=>new BI(e),DocumentHighlightProvider:e=>new KI(e),RenameProvider:e=>new xD(e)},shared:()=>t.shared}}function jD(t){return zl.merge(G_(t),UD(t))}function UD(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new sD(e),DocumentUpdateHandler:e=>new GI(e),WorkspaceSymbolProvider:e=>new LD(e),NodeKindProvider:()=>new DD,FuzzyMatcher:()=>new VI},workspace:{TextDocuments:()=>new CT(Kl),NotebookDocuments:e=>new MD(e.workspace.TextDocuments)}}}var Gh=L;const ry="AlgorithmType_Options",$o="Bgp_cmds",iy="Bgp_neighbour_options",Su="Bgp_neighbour_update_source_option",$u="Bgp_update_source_interface_types",ml="COMMON";function qD(t){return Rr.isInstance(t,ml)}const Cu="Configure_cmd",Co="Configure_cmds",sy="Crypto_cmd_option",Eu="Enable_cmds",Pu="ExecTimeout_cmd",oy="Generate_cmd_option",$r="Interface_fastethernet_cmds",Cr="Interface_gigabitethernet_cmds",Zf="Interface_types";function BD(t){return Rr.isInstance(t,Zf)}const Ti="Interface_vlan_cmds",ay="IP_cmd_option",ly="Ip_cmd_options",cy="Key_cmd_option",Eo="Line_console_cmds",uy="Line_types",Ri="Line_vty_cmds",Au="Logging_cmd",Nu="Login_cmd",dy="No_ip_cmd_options",fy="No_options",Po="Ospf_cmds",hy="Ospf_interface_types",Ao="Rip_cmds",py="Rip_interface_types",my="Router_cmd_option",gy="Rsa_cmd_option",Iu="Transport_cmd",yy="TransportInput_cmd",vy="UsageKeys_Option",_y="Username_cmd_option",No="AlgorithmTypeOption",Io="Banner_cmd",Du="Banner_cmd_option",Ou="BANNER_MESSAGE",Do="Bgp_cmd",Oo="Bgp_neigbour_ebgp_multihop_option",xo="Bgp_neighbor_cmd",Lo="Bgp_neighbour_Remote_as_option",Mo="Bgp_network_cmd",Fo="Bgp_router_id_cmd",Ho="Bgp_update_source_interface_number",jo="Bgp_update_source_interface_type_fastethernet",Uo="Bgp_update_source_interface_type_gigabitethernet",qo="CarrierDelay_cmd",xu="COMMENT",Bo="COMMENTLINE",Ko="Configure_cmd_options",Wo="Crypto_cmd",Go="Description_cmd",zo="Domainname_cmd",Lu="DOMAINNAME_INPUT",Vo="Duplex_cmd",Mu="Duplex_option",ts="Exit";function KD(t){return Rr.isInstance(t,ts)}const Yo="Generate_cmd",Xo="Hostname_cmd",Fu="HOSTNAME_INPUT",Jo="Interface_cmd",Qo="Interface_number",Zo="Interface_type_fastethernet",ea="Interface_type_gigabitethernet",ta="Interface_type_vlan",Hu="IP",na="IP_cmd",ns="IP_cmd_interface";function Ty(t){return Rr.isInstance(t,ns)}const rs="Ip_cmd_option_address";function Ry(t){return Rr.isInstance(t,rs)}const ra="Ip_cmd_option_ospf",ia="Ip_Helper_cmd",sa="Key_cmd",gl="KEYWORDS";function WD(t){return Rr.isInstance(t,gl)}const oa="Line_cmd",is="Line_ExecTimeoutValue";function GD(t){return Rr.isInstance(t,is)}const aa="Line_LoggingOption",la="Line_LoginOption",ca="Line_type_console",ua="Line_type_vty",da="MD5Option",ju="MD5Option_cmd",fa="Modulus_cmd",Uu="MODULUS_INPUT",ha="No_banner_cmd",pa="No_cmd",ma="No_cmd_interface",qu="No_cmd_interface_option",ga="No_ip_cmd",ya="No_ip_cmd_option_domain_lookup",Bu="OSPF_AREA_NUMBER",va="Ospf_cmd",_a="Ospf_default_information_cmd",Ku="Ospf_default_information_cmd_options",Ta="Ospf_network_cmd",Ra="Ospf_passive_interface_cmd",wa="Ospf_passive_interface_number",ka="Ospf_passive_interface_type_fastethernet",ba="Ospf_passive_interface_type_gigabitethernet",Sa="Ospf_priority_cmd",Wu="OSPF_PROCESS_NUMBER",$a="Ospf_redistribute_cmd",Gu="Ospf_redistribute_cmd_options",Ca="Ospf_router_id_cmd",Ea="PasswordOption",Pa="Ping_cmd",zu="PRIVILEGE_INPUT",Aa="PrivilegeOption",Na="Rip_cmd",Ia="Rip_default_information_cmd",Vu="Rip_default_information_cmd_options",Da="Rip_network_cmd",Yu="Rip_no_cmd_options",Oa="Rip_no_cmds",xa="Rip_passive_interface_cmd",La="Rip_passive_interface_number",Ma="Rip_passive_interface_type_fastethernet",Fa="Rip_passive_interface_type_gigabitethernet",Xu="Rip_passive_Sub_Interface_number",Ha="Rip_redistribute_cmd",Ju="Rip_redistribute_cmd_options",ja="Rip_version_cmd",Ua="Router_cmd",qa="Rsa_cmd",Qu="Script",Ba="ScryptOption",Zu="ScryptOption_cmd",Ka="SecretOption",Wa="Sha256Option",ed="Sha256Option_cmd",Ga="Show_cmd",td="Show_cmd_options",za="Shutdown_cmd",Va="Speed_cmd",Ya="Speed_cmd_fe",Xa="SSH_cmd",nd="SSHOptions",rd="Stat",id="SUBNETMASK",Ja="Transport_cmd_option",Qa="TransportInputList",sd="TransportProto",Za="UsageKeys_cmd",el="Username_cmd",od="USERNAME_INPUT",ad="USERNAME_PASSWORD_INPUT",ld="VERSION_INPUT",cd="WILDCARDMASK",tl="Bgp_update_source_Sub_Interface_number",nl="Sub_Interface_number",rl="Ospf_passive_Sub_Interface_number";class ET extends wy{getAllTypes(){return[No,ry,Ou,Io,Du,Do,$o,Oo,xo,Lo,iy,Su,Mo,Fo,tl,Ho,jo,Uo,$u,xu,Bo,ml,qo,Cu,Ko,Co,Wo,sy,Lu,Go,zo,Vo,Mu,Eu,Pu,ts,Yo,oy,Fu,Xo,Hu,na,ns,ay,Jo,$r,Cr,Qo,Zo,ea,ta,Zf,Ti,ia,rs,ra,ly,gl,sa,cy,is,aa,la,oa,Eo,ca,ua,uy,Ri,Au,Nu,da,ju,Uu,fa,ha,pa,ma,qu,ga,ya,dy,fy,Bu,Wu,va,Po,_a,Ku,hy,Ta,rl,Ra,wa,ka,ba,Sa,$a,Gu,Ca,zu,Ea,Pa,Aa,Na,Ao,Ia,Vu,py,Da,Yu,Oa,Xu,xa,La,Ma,Fa,Ha,Ju,ja,Ua,my,qa,gy,nd,Xa,id,Qu,Ba,Zu,Ka,Wa,ed,Ga,td,za,Va,Ya,rd,nl,Qa,yy,sd,Iu,Ja,od,ad,vy,Za,el,_y,ld,cd]}computeIsSubtype(e,n){switch(e){case No:case Ea:case Aa:case Ka:return this.isSubtype(_y,n);case Io:case Wo:case Xo:case Jo:case na:case oa:case pa:case Ua:case el:return this.isSubtype(Co,n);case Do:case va:case Na:return this.isSubtype(my,n);case Oo:case Lo:case Su:return this.isSubtype(iy,n);case xo:case Mo:case Fo:return this.isSubtype($o,n);case jo:case Uo:return this.isSubtype($u,n);case $u:return this.isSubtype(Su,n);case tl:return this.isSubtype(Ho,n);case qo:case Ya:return this.isSubtype($r,n);case Bo:return this.isSubtype(ml,n);case ml:return this.isSubtype($o,n)||this.isSubtype(Co,n)||this.isSubtype(Eu,n)||this.isSubtype($r,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n)||this.isSubtype(Eo,n)||this.isSubtype(Ri,n)||this.isSubtype(Po,n)||this.isSubtype(Ao,n);case Cu:case Pa:case Ga:return this.isSubtype(Eu,n);case Ko:return this.isSubtype(Cu,n);case Go:case ns:return this.isSubtype($r,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n);case zo:case Xa:return this.isSubtype(ay,n);case Vo:case Va:return this.isSubtype(Cr,n);case Pu:case Au:case Nu:return this.isSubtype(Eo,n)||this.isSubtype(Ri,n);case ts:return this.isSubtype($o,n)||this.isSubtype(Co,n)||this.isSubtype($r,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n)||this.isSubtype(Eo,n)||this.isSubtype(Ri,n)||this.isSubtype(Po,n)||this.isSubtype(Ao,n);case Yo:return this.isSubtype(cy,n);case Zo:case ea:case ta:return this.isSubtype(Zf,n);case rs:case ra:return this.isSubtype(ly,n);case ia:return this.isSubtype(Ti,n);case sa:return this.isSubtype(sy,n);case is:return this.isSubtype(Pu,n);case aa:return this.isSubtype(Au,n);case la:return this.isSubtype(Nu,n);case ca:case ua:return this.isSubtype(uy,n);case da:case Ba:case Wa:return this.isSubtype(ry,n);case fa:return this.isSubtype(vy,n);case ha:case ga:return this.isSubtype(fy,n);case ma:case za:return this.isSubtype($r,n)||this.isSubtype(Cr,n);case ya:return this.isSubtype(dy,n);case _a:case Ta:case Ra:case Sa:case $a:case Ca:return this.isSubtype(Po,n);case ka:case ba:return this.isSubtype(hy,n);case rl:return this.isSubtype(wa,n);case Ia:case Da:case Oa:case xa:case Ha:case ja:return this.isSubtype(Ao,n);case Ma:case Fa:return this.isSubtype(py,n);case qa:return this.isSubtype(oy,n);case nl:return this.isSubtype(Qo,n)||this.isSubtype(La,n);case Iu:return this.isSubtype(Ri,n);case Ja:return this.isSubtype(Iu,n);case Qa:return this.isSubtype(yy,n);case Za:return this.isSubtype(gy,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case No:return{name:No,properties:[{name:"option"}]};case Io:return{name:Io,properties:[{name:"comment"},{name:"message"},{name:"option"}]};case Du:return{name:Du,properties:[{name:"option"}]};case Ou:return{name:Ou,properties:[{name:"message",defaultValue:[]}]};case Do:return{name:Do,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Oo:return{name:Oo,properties:[{name:"multihop"}]};case xo:return{name:xo,properties:[{name:"comment"},{name:"neighbour"},{name:"option"}]};case Lo:return{name:Lo,properties:[{name:"remoteASnumber"}]};case Mo:return{name:Mo,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Fo:return{name:Fo,properties:[{name:"comment"},{name:"id"}]};case Ho:return{name:Ho,properties:[{name:"number"}]};case jo:return{name:jo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Uo:return{name:Uo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case qo:return{name:qo,properties:[{name:"comment"},{name:"seconds"}]};case xu:return{name:xu,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Bo:return{name:Bo,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Ko:return{name:Ko,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Wo:return{name:Wo,properties:[{name:"comment"},{name:"option"}]};case Go:return{name:Go,properties:[{name:"comment"},{name:"value"}]};case zo:return{name:zo,properties:[{name:"comment"},{name:"value"}]};case Lu:return{name:Lu,properties:[{name:"value"}]};case Vo:return{name:Vo,properties:[{name:"comment"},{name:"option"}]};case Mu:return{name:Mu,properties:[{name:"option"}]};case ts:return{name:ts,properties:[{name:"command"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Yo:return{name:Yo,properties:[{name:"option"}]};case Xo:return{name:Xo,properties:[{name:"comment"},{name:"value"}]};case Fu:return{name:Fu,properties:[{name:"value"}]};case Jo:return{name:Jo,properties:[{name:"types"}]};case Qo:return{name:Qo,properties:[{name:"number"}]};case Zo:return{name:Zo,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ea:return{name:ea,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ta:return{name:ta,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Hu:return{name:Hu,properties:[{name:"value"}]};case na:return{name:na,properties:[{name:"option"}]};case ns:return{name:ns,properties:[{name:"option"}]};case rs:return{name:rs,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case ra:return{name:ra,properties:[{name:"comment"},{name:"option"}]};case ia:return{name:ia,properties:[{name:"comment"},{name:"value"}]};case sa:return{name:sa,properties:[{name:"option"}]};case gl:return{name:gl,properties:[{name:"keywords"}]};case oa:return{name:oa,properties:[{name:"command"},{name:"types"}]};case is:return{name:is,properties:[{name:"comment"},{name:"minutes"},{name:"seconds"}]};case aa:return{name:aa,properties:[{name:"comment"},{name:"option"}]};case la:return{name:la,properties:[{name:"comment"},{name:"option"}]};case ca:return{name:ca,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ua:return{name:ua,properties:[{name:"comment"},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case da:return{name:da,properties:[{name:"option"}]};case ju:return{name:ju,properties:[{name:"value"}]};case fa:return{name:fa,properties:[{name:"value"}]};case Uu:return{name:Uu,properties:[{name:"value"}]};case ha:return{name:ha,properties:[{name:"option"}]};case pa:return{name:pa,properties:[{name:"comment"},{name:"option"}]};case ma:return{name:ma,properties:[{name:"option"}]};case qu:return{name:qu,properties:[{name:"comment"}]};case ga:return{name:ga,properties:[{name:"option"}]};case ya:return{name:ya,properties:[{name:"type"}]};case Bu:return{name:Bu,properties:[{name:"value"}]};case va:return{name:va,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case _a:return{name:_a,properties:[{name:"comment"},{name:"option"}]};case Ku:return{name:Ku,properties:[{name:"option"}]};case Ta:return{name:Ta,properties:[{name:"area"},{name:"comment"},{name:"ip"},{name:"mask"}]};case Ra:return{name:Ra,properties:[{name:"types"}]};case wa:return{name:wa,properties:[{name:"number"}]};case ka:return{name:ka,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ba:return{name:ba,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Sa:return{name:Sa,properties:[{name:"comment"},{name:"value"}]};case Wu:return{name:Wu,properties:[{name:"value"}]};case $a:return{name:$a,properties:[{name:"comment"},{name:"option"}]};case Gu:return{name:Gu,properties:[{name:"option"}]};case Ca:return{name:Ca,properties:[{name:"comment"},{name:"id"}]};case Ea:return{name:Ea,properties:[{name:"value"}]};case Pa:return{name:Pa,properties:[{name:"comment"},{name:"ip"}]};case zu:return{name:zu,properties:[{name:"value"}]};case Aa:return{name:Aa,properties:[{name:"value"}]};case Na:return{name:Na,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Ia:return{name:Ia,properties:[{name:"comment"},{name:"option"}]};case Vu:return{name:Vu,properties:[{name:"option"}]};case Da:return{name:Da,properties:[{name:"comment"},{name:"ip"}]};case Yu:return{name:Yu,properties:[{name:"options"}]};case Oa:return{name:Oa,properties:[{name:"comment"},{name:"options"}]};case xa:return{name:xa,properties:[{name:"types"}]};case La:return{name:La,properties:[{name:"number"}]};case Ma:return{name:Ma,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Fa:return{name:Fa,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Xu:return{name:Xu,properties:[{name:"sub"}]};case Ha:return{name:Ha,properties:[{name:"comment"},{name:"option"}]};case Ju:return{name:Ju,properties:[{name:"option"}]};case ja:return{name:ja,properties:[{name:"RipVersion"}]};case Ua:return{name:Ua,properties:[{name:"option"}]};case qa:return{name:qa,properties:[{name:"option"}]};case Qu:return{name:Qu,properties:[{name:"script"}]};case Ba:return{name:Ba,properties:[{name:"option"}]};case Zu:return{name:Zu,properties:[{name:"value"}]};case Ka:return{name:Ka,properties:[{name:"value"}]};case Wa:return{name:Wa,properties:[{name:"option"}]};case ed:return{name:ed,properties:[{name:"value"}]};case Ga:return{name:Ga,properties:[{name:"options"}]};case td:return{name:td,properties:[{name:"comment"},{name:"option"}]};case za:return{name:za,properties:[{name:"comment"}]};case Va:return{name:Va,properties:[{name:"comment"},{name:"value"}]};case Ya:return{name:Ya,properties:[{name:"comment"},{name:"value"}]};case Xa:return{name:Xa,properties:[{name:"option"}]};case nd:return{name:nd,properties:[{name:"comment"},{name:"value"}]};case rd:return{name:rd,properties:[{name:"lines",defaultValue:[]}]};case id:return{name:id,properties:[{name:"value"}]};case Ja:return{name:Ja,properties:[{name:"option"}]};case Qa:return{name:Qa,properties:[{name:"comment"},{name:"options",defaultValue:[]}]};case sd:return{name:sd,properties:[{name:"option"}]};case Za:return{name:Za,properties:[{name:"option"}]};case el:return{name:el,properties:[{name:"comment"},{name:"name"},{name:"options",defaultValue:[]}]};case od:return{name:od,properties:[{name:"value"}]};case ad:return{name:ad,properties:[{name:"value"}]};case ld:return{name:ld,properties:[{name:"value"}]};case cd:return{name:cd,properties:[{name:"value"}]};case tl:return{name:tl,properties:[{name:"number"},{name:"sub"}]};case nl:return{name:nl,properties:[{name:"number"},{name:"sub"}]};case rl:return{name:rl,properties:[{name:"number"},{name:"sub"}]};default:return{name:e,properties:[]}}}}const Rr=new ET;let il;const zD=()=>il??(il=A0(`{
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
                  "$ref": "#/rules@15"
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
                "value": "interface"
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@15"
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
                  "$ref": "#/rules@15"
                },
                "arguments": []
              },
              {
                "$type": "Assignment",
                "feature": "lines",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@35"
                  },
                  "arguments": []
                },
                "cardinality": "+"
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
                  "$ref": "#/rules@15"
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
            "$ref": "#/rules@30"
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
            "$ref": "#/rules@30"
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
            "$ref": "#/rules@30"
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
      "name": "Exit",
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
      "name": "COMMENT",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "delim",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "#"
                },
                {
                  "$type": "Keyword",
                  "value": "!"
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@16"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
              "$ref": "#/rules@29"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@14"
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
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "delim",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "#"
                },
                {
                  "$type": "Keyword",
                  "value": "!"
                }
              ]
            }
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@16"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
                "$ref": "#/rules@12"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@29"
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
      "name": "INPUT",
      "dataType": "string",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@31"
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
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
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
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
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
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
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
            "$ref": "#/rules@32"
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
            "$ref": "#/rules@32"
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
            "$ref": "#/rules@32"
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
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
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
                "$ref": "#/rules@31"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@33"
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
            "$ref": "#/rules@32"
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
            "$ref": "#/rules@32"
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
              "$ref": "#/rules@32"
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
              "$ref": "#/rules@32"
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
              "$ref": "#/rules@32"
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
              "$ref": "#/rules@32"
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
              "value": "/"
            },
            {
              "$type": "Keyword",
              "value": "."
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
              "value": "exit"
            },
            {
              "$type": "Keyword",
              "value": "#"
            },
            {
              "$type": "Keyword",
              "value": "!"
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
              "value": "ip"
            },
            {
              "$type": "Keyword",
              "value": "domain-name"
            },
            {
              "$type": "Keyword",
              "value": "ssh"
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
              "value": "ospf"
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
              "value": "rip"
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
            },
            {
              "$type": "Keyword",
              "value": "telnet"
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
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
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
          }
        ]
      },
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@63"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@88"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@36"
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
              "$ref": "#/rules@58"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@84"
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
              "$ref": "#/rules@34"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@75"
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
                "$ref": "#/rules@37"
              },
              "arguments": []
            },
            "cardinality": "*"
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
      "name": "Username_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@38"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@39"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@40"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
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
                "$ref": "#/rules@42"
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
              "$ref": "#/rules@43"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@45"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@47"
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
                "$ref": "#/rules@46"
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
                "$ref": "#/rules@48"
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
                "$ref": "#/rules@50"
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
                "$ref": "#/rules@51"
              },
              "arguments": []
            },
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
                "$ref": "#/rules@53"
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
                "$ref": "#/rules@55"
              },
              "arguments": []
            },
            {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@56"
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
                "$ref": "#/rules@59"
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
          }
        ]
      },
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
                "$ref": "#/rules@62"
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
                "$ref": "#/rules@65"
              },
              "arguments": []
            }
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
      "name": "Crypto_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@66"
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
      "name": "Key_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@68"
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
      "name": "Generate_cmd_option",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@70"
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
                "$ref": "#/rules@71"
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
          "$ref": "#/rules@72"
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
                "$ref": "#/rules@73"
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
          "$ref": "#/rules@74"
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
                "$ref": "#/rules@76"
              },
              "arguments": []
            }
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
      "name": "No_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
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
              "$ref": "#/rules@79"
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
                "$ref": "#/rules@78"
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
      "name": "No_ip_cmd_options",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@81"
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
      "name": "Router_cmd_option",
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
              "$ref": "#/rules@148"
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
                "$ref": "#/rules@85"
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
              "$ref": "#/rules@86"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@87"
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@111"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
                "$ref": "#/rules@32"
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@112"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
      "name": "Interface_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@90"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@91"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@92"
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
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@123"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@120"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@130"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "/"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@94"
            },
            "arguments": [],
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
      "name": "Sub_Interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sub",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
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
      "name": "Exit_interface",
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
                "$ref": "#/rules@97"
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
              "$ref": "#/rules@98"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@99"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@10"
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
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "Keyword",
                  "value": "cost"
                },
                {
                  "$type": "Keyword",
                  "value": "priority"
                }
              ]
            }
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
                "$ref": "#/rules@16"
              },
              "arguments": []
            }
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
      "name": "Exit_line",
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
              "$ref": "#/rules@106"
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
      "name": "ExecTimeout_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "exec-timeout"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@110"
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
                "$ref": "#/rules@32"
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
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
      "name": "Line_console_cmds",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
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
              "$ref": "#/rules@107"
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
              "$ref": "#/rules@104"
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
      "name": "Line_vty_cmds",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
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
              "$ref": "#/rules@107"
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
              "$ref": "#/rules@113"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@104"
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
      "name": "Transport_cmd_option",
      "definition": {
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
      },
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
              "$ref": "#/rules@116"
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
                "$ref": "#/rules@117"
              },
              "arguments": []
            },
            "cardinality": "+"
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
                "$ref": "#/rules@118"
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
      "name": "Interface_fastethernet_cmds",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@96"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@100"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@101"
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
              "$ref": "#/rules@121"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@122"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@95"
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
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
      "name": "Interface_gigabitethernet_cmds",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@96"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@100"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@101"
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
              "$ref": "#/rules@124"
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
              "$ref": "#/rules@95"
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
                "$ref": "#/rules@125"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@126"
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
                "$ref": "#/rules@127"
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
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
      "name": "Interface_vlan_cmds",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@96"
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
              "$ref": "#/rules@131"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@95"
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
      "name": "Ospf_cmd",
      "definition": {
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@134"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
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
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@137"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@147"
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@9"
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
                "$ref": "#/rules@138"
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
      "name": "Ospf_interface_types",
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
                "$ref": "#/rules@141"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@141"
              },
              "arguments": []
            }
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
      "name": "Ospf_passive_interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "/"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@142"
            },
            "arguments": [],
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
      "name": "Ospf_passive_Sub_Interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sub",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
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
                "$ref": "#/rules@144"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@146"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
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
      "name": "Rip_cmd",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "rip"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@150"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
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
              "$ref": "#/rules@163"
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
                "$ref": "#/rules@152"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@156"
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
                "$ref": "#/rules@159"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@159"
              },
              "arguments": []
            }
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
      "name": "Rip_passive_interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "/"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@94"
            },
            "arguments": [],
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
      "name": "Rip_passive_Sub_Interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sub",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
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
                "$ref": "#/rules@162"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@164"
              },
              "arguments": []
            }
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
      "name": "Bgp_cmd",
      "definition": {
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
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@167"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
      "inferredType": {
        "$type": "InferredType",
        "name": "Exit"
      },
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@35"
              },
              "arguments": []
            },
            "cardinality": "+"
          }
        ]
      },
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
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
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
              "$ref": "#/rules@166"
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@170"
              },
              "arguments": []
            }
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
      "name": "Bgp_neighbour_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@171"
            },
            "arguments": []
          },
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
          }
        ]
      },
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
      "name": "Bgp_update_source_interface_types",
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
          }
        ]
      },
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
                "$ref": "#/rules@176"
              },
              "arguments": []
            }
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
                "$ref": "#/rules@176"
              },
              "arguments": []
            }
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
      "name": "Bgp_update_source_interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "number",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@32"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "/"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@177"
            },
            "arguments": [],
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
      "name": "Bgp_update_source_Sub_Interface_number",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "sub",
            "operator": "=",
            "terminal": {
              "$type": "Keyword",
              "value": "."
            }
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@32"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@8"
              },
              "arguments": []
            }
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
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`)),VD={languageId:"cisco-ios",fileExtensions:[".ios"],caseInsensitive:!0,mode:"development"},YD={AstReflection:()=>new ET},XD={Grammar:()=>zD(),LanguageMetaData:()=>VD,parser:{}};var PT={exports:{}};(function(t){(function(e){const n="(0?\\d+|0x[a-f0-9]+)",r={fourOctet:new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`,"i"),threeOctet:new RegExp(`^${n}\\.${n}\\.${n}$`,"i"),twoOctet:new RegExp(`^${n}\\.${n}$`,"i"),longValue:new RegExp(`^${n}$`,"i")},i=new RegExp("^0[0-7]+$","i"),s=new RegExp("^0x[a-f0-9]+$","i"),o="%[0-9a-z]{1,}",a="(?:[0-9a-f]+::?)+",l={zoneIndex:new RegExp(o,"i"),native:new RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${o})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${n}\\.${n}\\.${n}\\.${n}(${o})?)$`,"i"),transitional:new RegExp(`^((?:${a})|(?:::)(?:${a})?)${n}\\.${n}\\.${n}\\.${n}(${o})?$`,"i")};function c(d,v){if(d.indexOf("::")!==d.lastIndexOf("::"))return null;let R=0,_=-1,h=(d.match(l.zoneIndex)||[])[0],p,w;for(h&&(h=h.substring(1),d=d.replace(/%.+$/,""));(_=d.indexOf(":",_+1))>=0;)R++;if(d.substr(0,2)==="::"&&R--,d.substr(-2,2)==="::"&&R--,R>v)return null;for(w=v-R,p=":";w--;)p+="0:";return d=d.replace("::",p),d[0]===":"&&(d=d.slice(1)),d[d.length-1]===":"&&(d=d.slice(0,-1)),v=function(){const F=d.split(":"),G=[];for(let J=0;J<F.length;J++)G.push(parseInt(F[J],16));return G}(),{parts:v,zoneId:h}}function u(d,v,R,_){if(d.length!==v.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let h=0,p;for(;_>0;){if(p=R-_,p<0&&(p=0),d[h]>>p!==v[h]>>p)return!1;_-=R,h+=1}return!0}function f(d){if(s.test(d))return parseInt(d,16);if(d[0]==="0"&&!isNaN(parseInt(d[1],10))){if(i.test(d))return parseInt(d,8);throw new Error(`ipaddr: cannot parse ${d} as octal`)}return parseInt(d,10)}function m(d,v){for(;d.length<v;)d=`0${d}`;return d}const g={};g.IPv4=function(){function d(v){if(v.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let R,_;for(R=0;R<v.length;R++)if(_=v[R],!(0<=_&&_<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=v}return d.prototype.SpecialRanges={unspecified:[[new d([0,0,0,0]),8]],broadcast:[[new d([255,255,255,255]),32]],multicast:[[new d([224,0,0,0]),4]],linkLocal:[[new d([169,254,0,0]),16]],loopback:[[new d([127,0,0,0]),8]],carrierGradeNat:[[new d([100,64,0,0]),10]],private:[[new d([10,0,0,0]),8],[new d([172,16,0,0]),12],[new d([192,168,0,0]),16]],reserved:[[new d([192,0,0,0]),24],[new d([192,0,2,0]),24],[new d([192,88,99,0]),24],[new d([198,18,0,0]),15],[new d([198,51,100,0]),24],[new d([203,0,113,0]),24],[new d([240,0,0,0]),4]],as112:[[new d([192,175,48,0]),24],[new d([192,31,196,0]),24]],amt:[[new d([192,52,193,0]),24]]},d.prototype.kind=function(){return"ipv4"},d.prototype.match=function(v,R){let _;if(R===void 0&&(_=v,v=_[0],R=_[1]),v.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return u(this.octets,v.octets,8,R)},d.prototype.prefixLengthFromSubnetMask=function(){let v=0,R=!1;const _={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0};let h,p,w;for(h=3;h>=0;h-=1)if(p=this.octets[h],p in _){if(w=_[p],R&&w!==0)return null;w!==8&&(R=!0),v+=w}else return null;return 32-v},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){return this.octets.slice(0)},d.prototype.toIPv4MappedAddress=function(){return g.IPv6.parse(`::ffff:${this.toString()}`)},d.prototype.toNormalizedString=function(){return this.toString()},d.prototype.toString=function(){return this.octets.join(".")},d}(),g.IPv4.broadcastAddressFromCIDR=function(d){try{const v=this.parseCIDR(d),R=v[0].toByteArray(),_=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[];let p=0;for(;p<4;)h.push(parseInt(R[p],10)|parseInt(_[p],10)^255),p++;return new this(h)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.isIPv4=function(d){return this.parser(d)!==null},g.IPv4.isValid=function(d){try{return new this(this.parser(d)),!0}catch{return!1}},g.IPv4.isValidCIDR=function(d){try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv4.isValidFourPartDecimal=function(d){return!!(g.IPv4.isValid(d)&&d.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},g.IPv4.networkAddressFromCIDR=function(d){let v,R,_,h,p;try{for(v=this.parseCIDR(d),_=v[0].toByteArray(),p=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[],R=0;R<4;)h.push(parseInt(_[R],10)&parseInt(p[R],10)),R++;return new this(h)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.parse=function(d){const v=this.parser(d);if(v===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(v)},g.IPv4.parseCIDR=function(d){let v;if(v=d.match(/^(.+)\/(\d+)$/)){const R=parseInt(v[2]);if(R>=0&&R<=32){const _=[this.parse(v[1]),R];return Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},g.IPv4.parser=function(d){let v,R,_;if(v=d.match(r.fourOctet))return function(){const h=v.slice(1,6),p=[];for(let w=0;w<h.length;w++)R=h[w],p.push(f(R));return p}();if(v=d.match(r.longValue)){if(_=f(v[1]),_>4294967295||_<0)throw new Error("ipaddr: address outside defined range");return function(){const h=[];let p;for(p=0;p<=24;p+=8)h.push(_>>p&255);return h}().reverse()}else return(v=d.match(r.twoOctet))?function(){const h=v.slice(1,4),p=[];if(_=f(h[1]),_>16777215||_<0)throw new Error("ipaddr: address outside defined range");return p.push(f(h[0])),p.push(_>>16&255),p.push(_>>8&255),p.push(_&255),p}():(v=d.match(r.threeOctet))?function(){const h=v.slice(1,5),p=[];if(_=f(h[2]),_>65535||_<0)throw new Error("ipaddr: address outside defined range");return p.push(f(h[0])),p.push(f(h[1])),p.push(_>>8&255),p.push(_&255),p}():null},g.IPv4.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>32)throw new Error("ipaddr: invalid IPv4 prefix length");const v=[0,0,0,0];let R=0;const _=Math.floor(d/8);for(;R<_;)v[R]=255,R++;return _<4&&(v[_]=Math.pow(2,d%8)-1<<8-d%8),new this(v)},g.IPv6=function(){function d(v,R){let _,h;if(v.length===16)for(this.parts=[],_=0;_<=14;_+=2)this.parts.push(v[_]<<8|v[_+1]);else if(v.length===8)this.parts=v;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(_=0;_<this.parts.length;_++)if(h=this.parts[_],!(0<=h&&h<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");R&&(this.zoneId=R)}return d.prototype.SpecialRanges={unspecified:[new d([0,0,0,0,0,0,0,0]),128],linkLocal:[new d([65152,0,0,0,0,0,0,0]),10],multicast:[new d([65280,0,0,0,0,0,0,0]),8],loopback:[new d([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new d([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new d([0,0,0,0,0,65535,0,0]),96],discard:[new d([256,0,0,0,0,0,0,0]),64],rfc6145:[new d([0,0,0,0,65535,0,0,0]),96],rfc6052:[new d([100,65435,0,0,0,0,0,0]),96],"6to4":[new d([8194,0,0,0,0,0,0,0]),16],teredo:[new d([8193,0,0,0,0,0,0,0]),32],benchmarking:[new d([8193,2,0,0,0,0,0,0]),48],amt:[new d([8193,3,0,0,0,0,0,0]),32],as112v6:[[new d([8193,4,274,0,0,0,0,0]),48],[new d([9760,79,32768,0,0,0,0,0]),48]],deprecated:[new d([8193,16,0,0,0,0,0,0]),28],orchid2:[new d([8193,32,0,0,0,0,0,0]),28],droneRemoteIdProtocolEntityTags:[new d([8193,48,0,0,0,0,0,0]),28],reserved:[[new d([8193,0,0,0,0,0,0,0]),23],[new d([8193,3512,0,0,0,0,0,0]),32]]},d.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},d.prototype.kind=function(){return"ipv6"},d.prototype.match=function(v,R){let _;if(R===void 0&&(_=v,v=_[0],R=_[1]),v.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return u(this.parts,v.parts,16,R)},d.prototype.prefixLengthFromSubnetMask=function(){let v=0,R=!1;const _={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0};let h,p;for(let w=7;w>=0;w-=1)if(h=this.parts[w],h in _){if(p=_[h],R&&p!==0)return null;p!==16&&(R=!0),v+=p}else return null;return 128-v},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){let v;const R=[],_=this.parts;for(let h=0;h<_.length;h++)v=_[h],R.push(v>>8),R.push(v&255);return R},d.prototype.toFixedLengthString=function(){const v=(function(){const _=[];for(let h=0;h<this.parts.length;h++)_.push(m(this.parts[h].toString(16),4));return _}).call(this).join(":");let R="";return this.zoneId&&(R=`%${this.zoneId}`),v+R},d.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");const v=this.parts.slice(-2),R=v[0],_=v[1];return new g.IPv4([R>>8,R&255,_>>8,_&255])},d.prototype.toNormalizedString=function(){const v=(function(){const _=[];for(let h=0;h<this.parts.length;h++)_.push(this.parts[h].toString(16));return _}).call(this).join(":");let R="";return this.zoneId&&(R=`%${this.zoneId}`),v+R},d.prototype.toRFC5952String=function(){const v=/((^|:)(0(:|$)){2,})/g,R=this.toNormalizedString();let _=0,h=-1,p;for(;p=v.exec(R);)p[0].length>h&&(_=p.index,h=p[0].length);return h<0?R:`${R.substring(0,_)}::${R.substring(_+h)}`},d.prototype.toString=function(){return this.toRFC5952String()},d}(),g.IPv6.broadcastAddressFromCIDR=function(d){try{const v=this.parseCIDR(d),R=v[0].toByteArray(),_=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[];let p=0;for(;p<16;)h.push(parseInt(R[p],10)|parseInt(_[p],10)^255),p++;return new this(h)}catch(v){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${v})`)}},g.IPv6.isIPv6=function(d){return this.parser(d)!==null},g.IPv6.isValid=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{const v=this.parser(d);return new this(v.parts,v.zoneId),!0}catch{return!1}},g.IPv6.isValidCIDR=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv6.networkAddressFromCIDR=function(d){let v,R,_,h,p;try{for(v=this.parseCIDR(d),_=v[0].toByteArray(),p=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[],R=0;R<16;)h.push(parseInt(_[R],10)&parseInt(p[R],10)),R++;return new this(h)}catch(w){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${w})`)}},g.IPv6.parse=function(d){const v=this.parser(d);if(v.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(v.parts,v.zoneId)},g.IPv6.parseCIDR=function(d){let v,R,_;if((R=d.match(/^(.+)\/(\d+)$/))&&(v=parseInt(R[2]),v>=0&&v<=128))return _=[this.parse(R[1]),v],Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},g.IPv6.parser=function(d){let v,R,_,h,p,w;if(_=d.match(l.deprecatedTransitional))return this.parser(`::ffff:${_[1]}`);if(l.native.test(d))return c(d,8);if((_=d.match(l.transitional))&&(w=_[6]||"",v=_[1],_[1].endsWith("::")||(v=v.slice(0,-1)),v=c(v+w,6),v.parts)){for(p=[parseInt(_[2]),parseInt(_[3]),parseInt(_[4]),parseInt(_[5])],R=0;R<p.length;R++)if(h=p[R],!(0<=h&&h<=255))return null;return v.parts.push(p[0]<<8|p[1]),v.parts.push(p[2]<<8|p[3]),{parts:v.parts,zoneId:v.zoneId}}return null},g.IPv6.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>128)throw new Error("ipaddr: invalid IPv6 prefix length");const v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let R=0;const _=Math.floor(d/8);for(;R<_;)v[R]=255,R++;return _<16&&(v[_]=Math.pow(2,d%8)-1<<8-d%8),new this(v)},g.fromByteArray=function(d){const v=d.length;if(v===4)return new g.IPv4(d);if(v===16)return new g.IPv6(d);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},g.isValid=function(d){return g.IPv6.isValid(d)||g.IPv4.isValid(d)},g.isValidCIDR=function(d){return g.IPv6.isValidCIDR(d)||g.IPv4.isValidCIDR(d)},g.parse=function(d){if(g.IPv6.isValid(d))return g.IPv6.parse(d);if(g.IPv4.isValid(d))return g.IPv4.parse(d);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},g.parseCIDR=function(d){try{return g.IPv6.parseCIDR(d)}catch{try{return g.IPv4.parseCIDR(d)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},g.process=function(d){const v=this.parse(d);return v.kind()==="ipv6"&&v.isIPv4MappedAddress()?v.toIPv4Address():v},g.subnetMatch=function(d,v,R){let _,h,p,w;R==null&&(R="unicast");for(h in v)if(Object.prototype.hasOwnProperty.call(v,h)){for(p=v[h],p[0]&&!(p[0]instanceof Array)&&(p=[p]),_=0;_<p.length;_++)if(w=p[_],d.kind()===w[0].kind()&&d.match.apply(d,w))return h}return R},t.exports?t.exports=g:e.ipaddr=g})(xe)})(PT);var JD=PT.exports;function QD(t){const e=t.validation.ValidationRegistry,n=t.validation.CiscoIosValidator,r={IP:n.checkIP,SUBNETMASK:n.checkSUBNETMASK,Username_cmd:n.checkUsername_cmd,BANNER_MESSAGE:n.checkBANNER_MESSAGE,Stat:n.check_Stat,Generate_cmd:n.checkGenerate_cmd,Line_types:n.checkLine_types};e.register(r,n)}class ZD{checkIP(e,n){if(e.value){const r=String(e.value).split(".");for(const i of r){const s=parseInt(i,10);(s>255||s<0)&&n("error","This is not a valid IP-Address!",{node:e,property:"value"})}}}checkSUBNETMASK(e,n){if(e.value){const r=String(e.value).split(".");let i="";for(const s of r){const a=parseInt(s,10).toString(2);let l=a;for(let c=0;c<8-a.length;c++)l="0"+l;i=i+l}(i.match(/10+1/)||i.length!=32||!i.includes("0"))&&n("error","This is not a valid Subnetmask!",{node:e,property:"value"})}}checkUsername_cmd(e,n){var r;if(e.options){let i=[];for(const s of e.options)i.includes(s.$type)?n("error",`Already defined ${(r=s.$cstNode)===null||r===void 0?void 0:r.text} (duplicate)!`,{node:s}):i.push(s.$type)}}checkBANNER_MESSAGE(e,n){let r="";for(let o of e.message)WD(o)?r=r+o.keywords:r=r+o;const i=r.at(0),s=r.charAt(r.length-1);i!=s?n("error",`Delimiters ${i} and ${s} dont match!`,{node:e}):(r.substring(1,r.length-1).includes(i)||r.substring(1,r.length-1).includes(s))&&n("error",`Delimiter (${i}) can not be inside MESSAGE!`,{node:e})}checkGenerate_cmd(e,n){const r=rr(e),i=Array.from(tn(r)),s=i.indexOf(e),o=i.findIndex(l=>l.$type==="Hostname_cmd"),a=i.findIndex(l=>l.$type==="Domainname_cmd");o===-1?n("error","Set a hostname before generating keys!",{node:e.$container.$container}):o>s&&n("error","A hostname must be defined before generating keys!",{node:e.$container.$container}),a===-1?n("error","Set a domain-name before generating keys!",{node:e.$container.$container}):a>s&&n("error","A domain-name must be defined before generating keys!",{node:e.$container.$container})}checkLine_types(e,n){let r=[];for(let i of e.lines)if(!KD(i))r.push(i);else break;r.findIndex(i=>GD(i))<0&&n("info","Line mode has no exec-timeout command!",{node:e.$container,property:"command"})}check_Stat(e,n){i(e),s(e),r(e);function r(o){const a=tn(rr(o)).filter(l=>l.$type==="No_ip_cmd_option_domain_lookup");if(a.count()>1)for(let l of a)n("warning","Script contains the <no ip domain-lookup> command more than once.",{node:l});else a.count()<=0&&n("hint","Script does not contain the <no ip domain-lookup> command.",{node:o.lines[0]})}function i(o){var a;const l=new Map,c=tn(rr(o)).filter(u=>u.$type==="IP_cmd_interface");for(const u of c)if(Ty(u)&&Ry(u.option)){const f=(a=u.option.ip)===null||a===void 0?void 0:a.value;if(!f)continue;const m=l.get(f);m?(n("error",`Duplicate IP address: ${f}!`,{node:u.option,property:"ip"}),n("error",`Duplicate IP address: ${f}!`,{node:m.option,property:"ip"})):l.set(f,u)}}function s(o){var a,l,c,u;const f=[],m=tn(rr(o)).filter(g=>g.$type==="IP_cmd_interface");for(const g of m){if(!Ty(g)||!Ry(g.option))continue;const d=(l=(a=g.option.ip)===null||a===void 0?void 0:a.value)===null||l===void 0?void 0:l.trim(),v=(u=(c=g.option.mask)===null||c===void 0?void 0:c.value)===null||u===void 0?void 0:u.trim();if(!(!d||!v))try{const R=v.split(".").map(w=>Number(w).toString(2).padStart(8,"0")).join("").indexOf("0"),_=R===-1?32:R,[h,p]=JD.parseCIDR(`${d}/${_}`);for(const w of f)h.kind()===w.ip.kind()&&(h.match(w.ip,w.prefix)||w.ip.match(h,p))&&(n("error",`Overlapping subnet: ${w.cidr} ↔ ${d}/${p}!`,{node:g}),n("error",`Overlapping subnet: ${d}/${p} ↔ ${w.cidr}!`,{node:w.node}));f.push({ip:h,prefix:p,cidr:`${d}/${p}`,node:g})}catch{}}}}}class eO extends x_{getScope(e){return super.getScope(e)}}const tO={label:"IP-Address lol",description:"ip....",insert:"1.2.3.4"},nO={label:"Subnetmask",description:"subnetmask...",insert:"255.255.255.0"},rO={label:"Wildcardmask",description:"wildcardmask...",insert:"0.0.0.255"},iO={label:"<hostname>",description:"This Systems Network Name",insert:"R1"},sO={label:"address",description:"set an address to this interface",insert:"address"},oO={label:"<Domain Name>",description:"The Domain Name of the Device",insert:"4CN.at"},aO={label:"2",description:"Protocol to be supported",insert:"2"},lO={label:".xx",description:"",insert:".10"},cO={label:"x/x",description:"number of the interface to be entered",insert:`\${1:0}/\${2:0}
ip address 192.168.1.0 255.255.255.0
no shutdown
exit
$0`},uO={label:"domain-lookup",description:"stops ip domain lookup",insert:"domain-lookup"},dO={label:"description",description:"describes the interface",insert:"description"},fO={label:"<CR>",description:"possible end of a command",insert:`
`},hO={label:"<message>",description:"The Banner message",insert:"#Authorized acces only!#"},pO={label:"OSPF Area Number",description:"Area number",insert:"10"},mO={label:"OSPF_PROCESS_NUMBER",description:"Area number",insert:`\${1:10}
network 192.168.1.0 0.0.0.255 area 10
exit
$0`};var gO={IP:tO,SUBNETMASK:nO,WILDCARDMASK:rO,HOSTNAME_INPUT:iO,Ip_cmd_option_address:sO,DOMAINNAME_INPUT:oO,VERSION_INPUT:aO,Sub_Interface_number:lO,Interface_number:cO,No_ip_cmd_option_domain_lookup:uO,Description_cmd:dO,COMMENT:fO,BANNER_MESSAGE:hO,OSPF_AREA_NUMBER:pO,OSPF_PROCESS_NUMBER:mO};class yO extends $T{constructor(e){super(e),this.services=e}async getCompletion(e,n,r){let i=[];const s=this.buildContexts(e,n.position);if(this.isCursorInComment(e,n))return L.CompletionList.create([],!0);const o=(a,l)=>{const c=this.fillCompletionItem(a,l);c&&i.push(c)};for(const a of s)for(const l of a.features)this.completionFor(a,l,o);return L.CompletionList.create(this.deduplicateItems(i),!0)}completionFor(e,n,r){console.log(n);let i;if(i=gO[n.type],i)r(e,{label:i.label,detail:i.description,sortText:"1",kind:1,insertTextFormat:2,insertText:i.insert});else if(Dt(n.feature)&&n.type!="KEYWORDS")return this.completionForKeyword(e,n.feature,r)}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"From OLD logic",sortText:"1"})}isCursorInComment(e,n){var r,i;const s=e.textDocument.offsetAt(n.position),o=e.textDocument.getText(),c=(r=this.services.parser.Lexer.tokenize(o).hidden)!==null&&r!==void 0?r:[];for(const u of c)if(s>u.startOffset&&n.position.line+1<=((i=u.endLine)!==null&&i!==void 0?i:-1))return!0;return!1}collectFromType(e,n){const r=[],i=new Set;function s(o){if(!i.has(o)){i.add(o),o.$type===e&&r.push(o.value);for(const a in o){const l=o[a];if(Array.isArray(l))for(const c of l)c&&typeof c=="object"&&"$type"in c&&s(c);else l&&typeof l=="object"&&"$type"in l&&s(l)}}}return s(n),r}}class vO extends I_{constructor(e){super(e)}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r||this.createSilentLinkingError(e)}createSilentLinkingError(e){return Object.assign(Object.assign({},e),{message:""})}createLinkingError(e){return this.createSilentLinkingError(e)}}const _O={COMMON:{type:"comment"},COMMENT:{type:"comment"},HOSTNAME_INPUT:{type:"string"},USERNAME_INPUT:{type:"string"},BANNER_MESSAGE:{type:"string"},DOMAINNAME_INPUT:{type:"string"},Interface_number:{type:"string"},VERSION_INPUT:{type:"string"},MODULUS_INPUT:{type:"string"},PRIVILEGE_INPUT:{type:"string"},USERNAME_PASSWORD_INPUT:{type:"string"},IP:{type:"string"},SUBNETMASK:{type:"string"},WILDCARDMASK:{type:"string"},OSPF_AREA_NUMBER:{type:"string"},OSPF_PROCESS_NUMBER:{type:"number"}};class TO extends rD{highlightElement(e,n){if(BD(e)){n({node:e,property:"type",type:"variable"});return}qD(e)&&e.$type=="COMMENTLINE"&&e.$cstNode&&n({cst:e.$cstNode,type:"comment"});const r=_O[e.$type];r&&e.$cstNode&&n({cst:e.$cstNode,type:r.type})}}const RO={validation:{CiscoIosValidator:()=>new ZD},references:{ScopeProvider:t=>new eO(t),Linker:t=>new vO(t)},lsp:{CompletionProvider:t=>new yO(t),SemanticTokenProvider:t=>new TO(t)}};function wO(t){const e=Vl(jD(t),YD),n=Vl(FD({shared:e}),XD,RO);return e.ServiceRegistry.register(n),QD(n),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,CiscoIos:n}}const kO=new Gh.BrowserMessageReader(self),bO=new Gh.BrowserMessageWriter(self),SO=Gh.createConnection(kO,bO),{shared:$O}=wO(Object.assign({connection:SO},Y_));oD($O)});export default CO();
