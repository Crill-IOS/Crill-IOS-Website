var ET=Object.defineProperty;var PT=(t,e,n)=>e in t?ET(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var AT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Dn=(t,e,n)=>PT(t,typeof e!="symbol"?e+"":e,n);var _O=AT((Rt,wt)=>{function Je(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function en(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function NT(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function oc(t){return typeof t=="object"&&t!==null&&Je(t.container)&&en(t.reference)&&typeof t.message=="string"}class _y{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,n){return Je(e)&&this.isSubtype(e.$type,n)}isSubtype(e,n){if(e===n)return!0;let r=this.subtypes[e];r||(r=this.subtypes[e]={});const i=r[n];if(i!==void 0)return i;{const s=this.computeIsSubtype(e,n);return r[n]=s,s}}getAllSubTypes(e){const n=this.allSubtypes[e];if(n)return n;{const r=this.getAllTypes(),i=[];for(const s of r)this.isSubtype(s,e)&&i.push(s);return this.allSubtypes[e]=i,i}}}function ar(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function bs(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function Ty(t){return ar(t)&&typeof t.fullText=="string"}class Ye{constructor(e,n){this.startFn=e,this.nextFn=n}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){const e=this.iterator();let n=0,r=e.next();for(;!r.done;)n++,r=e.next();return n}toArray(){const e=[],n=this.iterator();let r;do r=n.next(),r.value!==void 0&&e.push(r.value);while(!r.done);return e}toSet(){return new Set(this)}toMap(e,n){const r=this.map(i=>[e?e(i):i,n?n(i):i]);return new Map(r)}toString(){return this.join()}concat(e){return new Ye(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),n=>{let r;if(!n.firstDone){do if(r=this.nextFn(n.first),!r.done)return r;while(!r.done);n.firstDone=!0}do if(r=n.iterator.next(),!r.done)return r;while(!r.done);return _t})}join(e=","){const n=this.iterator();let r="",i,s=!1;do i=n.next(),i.done||(s&&(r+=e),r+=IT(i.value)),s=!0;while(!i.done);return r}indexOf(e,n=0){const r=this.iterator();let i=0,s=r.next();for(;!s.done;){if(i>=n&&s.value===e)return i;s=r.next(),i++}return-1}every(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(!e(r.value))return!1;r=n.next()}return!0}some(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return!0;r=n.next()}return!1}forEach(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;)e(i.value,r),i=n.next(),r++}map(e){return new Ye(this.startFn,n=>{const{done:r,value:i}=this.nextFn(n);return r?_t:{done:!1,value:e(i)}})}filter(e){return new Ye(this.startFn,n=>{let r;do if(r=this.nextFn(n),!r.done&&e(r.value))return r;while(!r.done);return _t})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,n){const r=this.iterator();let i=n,s=r.next();for(;!s.done;)i===void 0?i=s.value:i=e(i,s.value),s=r.next();return i}reduceRight(e,n){return this.recursiveReduce(this.iterator(),e,n)}recursiveReduce(e,n,r){const i=e.next();if(i.done)return r;const s=this.recursiveReduce(e,n,r);return s===void 0?i.value:n(s,i.value)}find(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return r.value;r=n.next()}}findIndex(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;){if(e(i.value))return r;i=n.next(),r++}return-1}includes(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(r.value===e)return!0;r=n.next()}return!1}flatMap(e){return new Ye(()=>({this:this.startFn()}),n=>{do{if(n.iterator){const s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}const{done:r,value:i}=this.nextFn(n.this);if(!r){const s=e(i);if(yc(s))n.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}}while(n.iterator);return _t})}flat(e){if(e===void 0&&(e=1),e<=0)return this;const n=e>1?this.flat(e-1):this;return new Ye(()=>({this:n.startFn()}),r=>{do{if(r.iterator){const o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}const{done:i,value:s}=n.nextFn(r.this);if(!i)if(yc(s))r.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}while(r.iterator);return _t})}head(){const n=this.iterator().next();if(!n.done)return n.value}tail(e=1){return new Ye(()=>{const n=this.startFn();for(let r=0;r<e;r++)if(this.nextFn(n).done)return n;return n},this.nextFn)}limit(e){return new Ye(()=>({size:0,state:this.startFn()}),n=>(n.size++,n.size>e?_t:this.nextFn(n.state)))}distinct(e){return new Ye(()=>({set:new Set,internalState:this.startFn()}),n=>{let r;do if(r=this.nextFn(n.internalState),!r.done){const i=e?e(r.value):r.value;if(!n.set.has(i))return n.set.add(i),r}while(!r.done);return _t})}exclude(e,n){const r=new Set;for(const i of e){const s=n?n(i):i;r.add(s)}return this.filter(i=>{const s=n?n(i):i;return!r.has(s)})}}function IT(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function yc(t){return!!t&&typeof t[Symbol.iterator]=="function"}const DT=new Ye(()=>{},()=>_t),_t=Object.freeze({done:!0,value:void 0});function Re(...t){if(t.length===1){const e=t[0];if(e instanceof Ye)return e;if(yc(e))return new Ye(()=>e[Symbol.iterator](),n=>n.next());if(typeof e.length=="number")return new Ye(()=>({index:0}),n=>n.index<e.length?{done:!1,value:e[n.index++]}:_t)}return t.length>1?new Ye(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){const n=e.iterator.next();if(!n.done)return n;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){const n=t[e.collIndex++];yc(n)?e.iterator=n[Symbol.iterator]():n&&typeof n.length=="number"&&(e.array=n)}}while(e.iterator||e.array||e.collIndex<t.length);return _t}):DT}class vc extends Ye{constructor(e,n,r){super(()=>({iterators:r!=null&&r.includeRoot?[[e][Symbol.iterator]()]:[n(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){const o=i.iterators[i.iterators.length-1].next();if(o.done)i.iterators.pop();else return i.iterators.push(n(o.value)[Symbol.iterator]()),o}return _t})}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}}var ad;(function(t){function e(s){return s.reduce((o,a)=>o+a,0)}t.sum=e;function n(s){return s.reduce((o,a)=>o*a,0)}t.product=n;function r(s){return s.reduce((o,a)=>Math.min(o,a))}t.min=r;function i(s){return s.reduce((o,a)=>Math.max(o,a))}t.max=i})(ad||(ad={}));function _c(t){return new vc(t,e=>ar(e)?e.content:[],{includeRoot:!0})}function OT(t){return _c(t).filter(bs)}function xT(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function cd(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function Tc(t){if(!t)return;const{offset:e,end:n,range:r}=t;return{range:r,offset:e,end:n,length:n-e}}var pn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})(pn||(pn={}));function LT(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return pn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return pn.After;const n=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,r=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return n&&r?pn.Inside:n?pn.OverlapBack:r?pn.OverlapFront:pn.Outside}function Ry(t,e){return LT(t,e)>pn.After}const wy=/^[\w\p{L}]$/u;function cr(t,e,n=wy){if(t){if(e>0){const r=e-t.offset,i=t.text.charAt(r);n.test(i)||e--}return ky(t,e)}}function by(t,e){if(t){const n=MT(t,!0);if(n&&Kh(n,e))return n;if(Ty(t)){const r=t.content.findIndex(i=>!i.hidden);for(let i=r-1;i>=0;i--){const s=t.content[i];if(Kh(s,e))return s}}}}function Kh(t,e){return bs(t)&&e.includes(t.tokenType.name)}function ky(t,e){if(bs(t))return t;if(ar(t)){const n=Sy(t,e,!1);if(n)return ky(n,e)}}function ld(t,e){if(bs(t))return t;if(ar(t)){const n=Sy(t,e,!0);if(n)return ld(n,e)}}function Sy(t,e,n){let r=0,i=t.content.length-1,s;for(;r<=i;){const o=Math.floor((r+i)/2),a=t.content[o];if(a.offset<=e&&a.end>e)return a;a.end<=e?(s=n?a:void 0,r=o+1):i=o-1}return s}function MT(t,e=!0){for(;t.container;){const n=t.container;let r=n.content.indexOf(t);for(;r>0;){r--;const i=n.content[r];if(e||!i.hidden)return i}t=n}}class Cy extends Error{constructor(e,n){super(e?`${n} at ${e.range.start.line}:${e.range.start.character}`:n)}}function ks(t){throw new Error("Error! The input value was not handled.")}const oo="AbstractRule",ao="AbstractType",Zl="Condition",Wh="TypeDefinition",eu="ValueLiteral",wi="AbstractElement";function $y(t){return ie.isInstance(t,wi)}const co="ArrayLiteral",lo="ArrayType",bi="BooleanLiteral";function FT(t){return ie.isInstance(t,bi)}const ki="Conjunction";function HT(t){return ie.isInstance(t,ki)}const Si="Disjunction";function jT(t){return ie.isInstance(t,Si)}const uo="Grammar",tu="GrammarImport",Ci="InferredType";function Ey(t){return ie.isInstance(t,Ci)}const $i="Interface";function Py(t){return ie.isInstance(t,$i)}const nu="NamedArgument",Ei="Negation";function UT(t){return ie.isInstance(t,Ei)}const fo="NumberLiteral",ho="Parameter",Pi="ParameterReference";function qT(t){return ie.isInstance(t,Pi)}const Ai="ParserRule";function it(t){return ie.isInstance(t,Ai)}const po="ReferenceType",ac="ReturnType";function BT(t){return ie.isInstance(t,ac)}const Ni="SimpleType";function KT(t){return ie.isInstance(t,Ni)}const mo="StringLiteral",$r="TerminalRule";function Xn(t){return ie.isInstance(t,$r)}const Ii="Type";function Ay(t){return ie.isInstance(t,Ii)}const ru="TypeAttribute",go="UnionType",Di="Action";function Ss(t){return ie.isInstance(t,Di)}const Oi="Alternatives";function Jf(t){return ie.isInstance(t,Oi)}const xi="Assignment";function rn(t){return ie.isInstance(t,xi)}const Li="CharacterRange";function WT(t){return ie.isInstance(t,Li)}const Mi="CrossReference";function Cs(t){return ie.isInstance(t,Mi)}const Fi="EndOfFile";function GT(t){return ie.isInstance(t,Fi)}const Hi="Group";function lr(t){return ie.isInstance(t,Hi)}const ji="Keyword";function Dt(t){return ie.isInstance(t,ji)}const Ui="NegatedToken";function zT(t){return ie.isInstance(t,Ui)}const qi="RegexToken";function VT(t){return ie.isInstance(t,qi)}const Bi="RuleCall";function Rn(t){return ie.isInstance(t,Bi)}const Ki="TerminalAlternatives";function YT(t){return ie.isInstance(t,Ki)}const Wi="TerminalGroup";function XT(t){return ie.isInstance(t,Wi)}const Gi="TerminalRuleCall";function JT(t){return ie.isInstance(t,Gi)}const zi="UnorderedGroup";function Qf(t){return ie.isInstance(t,zi)}const Vi="UntilToken";function QT(t){return ie.isInstance(t,Vi)}const Yi="Wildcard";function ZT(t){return ie.isInstance(t,Yi)}class Ny extends _y{getAllTypes(){return[wi,oo,ao,Di,Oi,co,lo,xi,bi,Li,Zl,ki,Mi,Si,Fi,uo,tu,Hi,Ci,$i,ji,nu,Ui,Ei,fo,ho,Pi,Ai,po,qi,ac,Bi,Ni,mo,Ki,Wi,$r,Gi,Ii,ru,Wh,go,zi,Vi,eu,Yi]}computeIsSubtype(e,n){switch(e){case Di:case Oi:case xi:case Li:case Mi:case Fi:case Hi:case ji:case Ui:case qi:case Bi:case Ki:case Wi:case Gi:case zi:case Vi:case Yi:return this.isSubtype(wi,n);case co:case fo:case mo:return this.isSubtype(eu,n);case lo:case po:case Ni:case go:return this.isSubtype(Wh,n);case bi:return this.isSubtype(Zl,n)||this.isSubtype(eu,n);case ki:case Si:case Ei:case Pi:return this.isSubtype(Zl,n);case Ci:case $i:case Ii:return this.isSubtype(ao,n);case Ai:return this.isSubtype(oo,n)||this.isSubtype(ao,n);case $r:return this.isSubtype(oo,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return ao;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return oo;case"Grammar:usedGrammars":return uo;case"NamedArgument:parameter":case"ParameterReference:parameter":return ho;case"TerminalRuleCall:rule":return $r;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case wi:return{name:wi,properties:[{name:"cardinality"},{name:"lookahead"}]};case co:return{name:co,properties:[{name:"elements",defaultValue:[]}]};case lo:return{name:lo,properties:[{name:"elementType"}]};case bi:return{name:bi,properties:[{name:"true",defaultValue:!1}]};case ki:return{name:ki,properties:[{name:"left"},{name:"right"}]};case Si:return{name:Si,properties:[{name:"left"},{name:"right"}]};case uo:return{name:uo,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case tu:return{name:tu,properties:[{name:"path"}]};case Ci:return{name:Ci,properties:[{name:"name"}]};case $i:return{name:$i,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case nu:return{name:nu,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Ei:return{name:Ei,properties:[{name:"value"}]};case fo:return{name:fo,properties:[{name:"value"}]};case ho:return{name:ho,properties:[{name:"name"}]};case Pi:return{name:Pi,properties:[{name:"parameter"}]};case Ai:return{name:Ai,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case po:return{name:po,properties:[{name:"referenceType"}]};case ac:return{name:ac,properties:[{name:"name"}]};case Ni:return{name:Ni,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case mo:return{name:mo,properties:[{name:"value"}]};case $r:return{name:$r,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case Ii:return{name:Ii,properties:[{name:"name"},{name:"type"}]};case ru:return{name:ru,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case go:return{name:go,properties:[{name:"types",defaultValue:[]}]};case Di:return{name:Di,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case Oi:return{name:Oi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case xi:return{name:xi,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Li:return{name:Li,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case Mi:return{name:Mi,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Fi:return{name:Fi,properties:[{name:"cardinality"},{name:"lookahead"}]};case Hi:return{name:Hi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case ji:return{name:ji,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case Ui:return{name:Ui,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case qi:return{name:qi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case Bi:return{name:Bi,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case Ki:return{name:Ki,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Wi:return{name:Wi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Gi:return{name:Gi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case zi:return{name:zi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Vi:return{name:Vi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case Yi:return{name:Yi,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}}const ie=new Ny;function eR(t){for(const[e,n]of Object.entries(t))e.startsWith("$")||(Array.isArray(n)?n.forEach((r,i)=>{Je(r)&&(r.$container=t,r.$containerProperty=e,r.$containerIndex=i)}):Je(n)&&(n.$container=t,n.$containerProperty=e))}function On(t,e){let n=t;for(;n;){if(e(n))return n;n=n.$container}}function sn(t){const n=rr(t).$document;if(!n)throw new Error("AST node has no document.");return n}function rr(t){for(;t.$container;)t=t.$container;return t}function il(t,e){if(!t)throw new Error("Node must be an AstNode.");const n=e==null?void 0:e.range;return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),r=>{for(;r.keyIndex<r.keys.length;){const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=t[i];if(Je(s)){if(r.keyIndex++,ud(s,n))return{done:!1,value:s}}else if(Array.isArray(s)){for(;r.arrayIndex<s.length;){const o=r.arrayIndex++,a=s[o];if(Je(a)&&ud(a,n))return{done:!1,value:a}}r.arrayIndex=0}}r.keyIndex++}return _t})}function tn(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new vc(t,n=>il(n,e))}function sr(t,e){if(t){if(e!=null&&e.range&&!ud(t,e.range))return new vc(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new vc(t,n=>il(n,e),{includeRoot:!0})}function ud(t,e){var n;if(!e)return!0;const r=(n=t.$cstNode)===null||n===void 0?void 0:n.range;return r?Ry(r,e):!1}function Iy(t){return new Ye(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){const n=e.keys[e.keyIndex];if(!n.startsWith("$")){const r=t[n];if(en(r))return e.keyIndex++,{done:!1,value:{reference:r,container:t,property:n}};if(Array.isArray(r)){for(;e.arrayIndex<r.length;){const i=e.arrayIndex++,s=r[i];if(en(s))return{done:!1,value:{reference:s,container:t,property:n,index:i}}}e.arrayIndex=0}}e.keyIndex++}return _t})}function Dy(t,e){const n=t.getTypeMetaData(e.$type),r=e;for(const i of n.properties)i.defaultValue!==void 0&&r[i.name]===void 0&&(r[i.name]=Oy(i.defaultValue))}function Oy(t){return Array.isArray(t)?[...t.map(Oy)]:t}function K(t){return t.charCodeAt(0)}function iu(t,e){Array.isArray(t)?t.forEach(function(n){e.push(n)}):e.push(t)}function mi(t,e){if(t[e]===!0)throw"duplicate flag "+e;t[e],t[e]=!0}function br(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function tR(){throw Error("Internal Error - Should never get here!")}function Gh(t){return t.type==="Character"}const Rc=[];for(let t=K("0");t<=K("9");t++)Rc.push(t);const wc=[K("_")].concat(Rc);for(let t=K("a");t<=K("z");t++)wc.push(t);for(let t=K("A");t<=K("Z");t++)wc.push(t);const zh=[K(" "),K("\f"),K(`
`),K("\r"),K("	"),K("\v"),K("	"),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K("\u2028"),K("\u2029"),K(" "),K(" "),K("　"),K("\uFEFF")],nR=/[0-9a-fA-F]/,yo=/[0-9]/,rR=/[1-9]/;class xy{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");const n=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":mi(r,"global");break;case"i":mi(r,"ignoreCase");break;case"m":mi(r,"multiLine");break;case"u":mi(r,"unicode");break;case"y":mi(r,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:r,value:n,loc:this.loc(0)}}disjunction(){const e=[],n=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(n)}}alternative(){const e=[],n=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}br(n);const r=this.disjunction();return this.consumeChar(")"),{type:n,value:r,loc:this.loc(e)}}return tR()}quantifier(e=!1){let n;const r=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":const i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let s;this.isDigit()?(s=this.integerIncludingZero(),n={atLeast:i,atMost:s}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&n===void 0)return;br(n);break}if(!(e===!0&&n===void 0)&&br(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(r),n}atom(){let e;const n=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}if(e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),br(e))return e.loc=this.loc(n),this.isQuantifier()&&(e.quantifier=this.quantifier()),e}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[K(`
`),K("\r"),K("\u2028"),K("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,n=!1;switch(this.popChar()){case"d":e=Rc;break;case"D":e=Rc,n=!0;break;case"s":e=zh;break;case"S":e=zh,n=!0;break;case"w":e=wc;break;case"W":e=wc,n=!0;break}if(br(e))return{type:"Set",value:e,complement:n}}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=K("\f");break;case"n":e=K(`
`);break;case"r":e=K("\r");break;case"t":e=K("	");break;case"v":e=K("\v");break}if(br(e))return{type:"Character",value:e}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:K("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:K(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:const e=this.popChar();return{type:"Character",value:K(e)}}}characterClass(){const e=[];let n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){const r=this.classAtom();if(r.type,Gh(r)&&this.isRangeDash()){this.consumeChar("-");const i=this.classAtom();if(i.type,Gh(i)){if(i.value<r.value)throw Error("Range out of order in character class");e.push({from:r.value,to:i.value})}else iu(r.value,e),e.push(K("-")),iu(i.value,e)}else iu(r.value,e)}return this.consumeChar("]"),{type:"Set",complement:n,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:K("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}const n=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:n};return e&&(r.idx=this.groupIdx),r}positiveInteger(){let e=this.popChar();if(rR.test(e)===!1)throw Error("Expecting a positive integer");for(;yo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(yo.test(e)===!1)throw Error("Expecting an integer");for(;yo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:K(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return yo.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){const e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let n="";for(let i=0;i<e;i++){const s=this.popChar();if(nR.test(s)===!1)throw Error("Expecting a HexDecimal digits");n+=s}return{type:"Character",value:parseInt(n,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){const e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}}class sl{visitChildren(e){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&(r.type!==void 0?this.visit(r):Array.isArray(r)&&r.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}const iR=/\r?\n/gm,sR=new xy;class oR extends sl{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){const n=String.fromCharCode(e.value);if(!this.multiline&&n===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const r=ol(n);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitSet(e){if(!this.multiline){const n=this.regex.substring(e.loc.begin,e.loc.end),r=new RegExp(n);this.multiline=!!`
`.match(r)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const n=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}}const su=new oR;function aR(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),su.reset(t),su.visit(sR.pattern(t)),su.multiline}catch{return!1}}const cR=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function Ly(t){const e=typeof t=="string"?new RegExp(t):t;return cR.some(n=>e.test(n))}function ol(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lR(t,e){const n=uR(t),r=e.match(n);return!!r&&r[0].length>0}function uR(t){typeof t=="string"&&(t=new RegExp(t));const e=t,n=t.source;let r=0;function i(){let s="",o;function a(l){s+=n.substr(r,l),r+=l}function c(l){s+="(?:"+n.substr(r,l)+"|$)",r+=l}for(;r<n.length;)switch(n[r]){case"\\":switch(n[r+1]){case"c":c(3);break;case"x":c(4);break;case"u":e.unicode?n[r+2]==="{"?c(n.indexOf("}",r)-r+1):c(6):c(2);break;case"p":case"P":e.unicode?c(n.indexOf("}",r)-r+1):c(2);break;case"k":c(n.indexOf(">",r)-r+1);break;default:c(2);break}break;case"[":o=/\[(?:\\.|.)*?\]/g,o.lastIndex=r,o=o.exec(n)||[],c(o[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":o=/\{\d+,?\d*\}/g,o.lastIndex=r,o=o.exec(n),o?a(o[0].length):c(1);break;case"(":if(n[r+1]==="?")switch(n[r+2]){case":":s+="(?:",r+=3,s+=i()+"|$)";break;case"=":s+="(?=",r+=3,s+=i()+")";break;case"!":o=r,r+=3,i(),s+=n.substr(o,r-o);break;case"<":switch(n[r+3]){case"=":case"!":o=r,r+=4,i(),s+=n.substr(o,r-o);break;default:a(n.indexOf(">",r)-r+1),s+=i()+"|$)";break}break}else a(1),s+=i()+"|$)";break;case")":return++r,s;default:c(1);break}return s}return new RegExp(i(),t.flags)}function dd(t){return t.rules.find(e=>it(e)&&e.entry)}function dR(t){return t.rules.filter(e=>Xn(e)&&e.hidden)}function My(t,e){const n=new Set,r=dd(t);if(!r)return new Set(t.rules);const i=[r].concat(dR(t));for(const o of i)Fy(o,n,e);const s=new Set;for(const o of t.rules)(n.has(o.name)||Xn(o)&&o.hidden)&&s.add(o);return s}function Fy(t,e,n){e.add(t.name),tn(t).forEach(r=>{if(Rn(r)||n){const i=r.rule.ref;i&&!e.has(i.name)&&Fy(i,e,n)}})}function Hy(t){if(t.terminal)return t.terminal;if(t.type.ref){const e=By(t.type.ref);return e==null?void 0:e.terminal}}function fR(t){return t.hidden&&!Ly(cl(t))}function jy(t,e){return!t||!e?[]:eh(t,e,t.astNode,!0)}function Zf(t,e,n){if(!t||!e)return;const r=eh(t,e,t.astNode,!0);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function eh(t,e,n,r){if(!r){const i=On(t.grammarSource,rn);if(i&&i.feature===e)return[t]}return ar(t)&&t.astNode===n?t.content.flatMap(i=>eh(i,e,n,!1)):[]}function hR(t,e){return t?qy(t,e,t==null?void 0:t.astNode):[]}function Uy(t,e,n){if(!t)return;const r=qy(t,e,t==null?void 0:t.astNode);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function qy(t,e,n){if(t.astNode!==n)return[];if(Dt(t.grammarSource)&&t.grammarSource.value===e)return[t];const r=_c(t).iterator();let i;const s=[];do if(i=r.next(),!i.done){const o=i.value;o.astNode===n?Dt(o.grammarSource)&&o.grammarSource.value===e&&s.push(o):r.prune()}while(!i.done);return s}function pR(t){var e;const n=t.astNode;for(;n===((e=t.container)===null||e===void 0?void 0:e.astNode);){const r=On(t.grammarSource,rn);if(r)return r;t=t.container}}function By(t){let e=t;return Ey(e)&&(Ss(e.$container)?e=e.$container.$container:it(e.$container)?e=e.$container:ks(e.$container)),Ky(t,e,new Map)}function Ky(t,e,n){var r;function i(s,o){let a;return On(s,rn)||(a=Ky(o,o,n)),n.set(t,a),a}if(n.has(t))return n.get(t);n.set(t,void 0);for(const s of tn(e)){if(rn(s)&&s.feature.toLowerCase()==="name")return n.set(t,s),s;if(Rn(s)&&it(s.rule.ref))return i(s,s.rule.ref);if(KT(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref))return i(s,s.typeRef.ref)}}function as(t,e){return t==="?"||t==="*"||lr(e)&&!!e.guardCondition}function mR(t){return t==="*"||t==="+"}function Wy(t){return Gy(t,new Set)}function Gy(t,e){if(e.has(t))return!0;e.add(t);for(const n of tn(t))if(Rn(n)){if(!n.rule.ref||it(n.rule.ref)&&!Gy(n.rule.ref,e))return!1}else{if(rn(n))return!1;if(Ss(n))return!1}return!!t.definition}function $s(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){const e=t.returnType.ref;if(e){if(it(e))return e.name;if(Py(e)||Ay(e))return e.name}}}function al(t){var e;if(it(t))return Wy(t)?t.name:(e=$s(t))!==null&&e!==void 0?e:t.name;if(Py(t)||Ay(t)||BT(t))return t.name;if(Ss(t)){const n=gR(t);if(n)return n}else if(Ey(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function gR(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return al(t.type.ref)}function yR(t){var e,n,r;return Xn(t)?(n=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&n!==void 0?n:"string":(r=$s(t))!==null&&r!==void 0?r:t.name}function cl(t){const e={s:!1,i:!1,u:!1},n=Zr(t.definition,e),r=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(n,r)}const th=/[\s\S]/.source;function Zr(t,e){if(YT(t))return vR(t);if(XT(t))return _R(t);if(WT(t))return wR(t);if(JT(t)){const n=t.rule.ref;if(!n)throw new Error("Missing rule reference.");return yn(Zr(n.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(zT(t))return RR(t);if(QT(t))return TR(t);if(VT(t)){const n=t.regex.lastIndexOf("/"),r=t.regex.substring(1,n),i=t.regex.substring(n+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),yn(r,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(ZT(t))return yn(th,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function vR(t){return yn(t.elements.map(e=>Zr(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function _R(t){return yn(t.elements.map(e=>Zr(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function TR(t){return yn(`${th}*?${Zr(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function RR(t){return yn(`(?!${Zr(t.terminal)})${th}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function wR(t){return t.right?yn(`[${ou(t.left)}-${ou(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):yn(ou(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function ou(t){return ol(t.value)}function yn(t,e){var n;return(e.wrap!==!1||e.lookahead)&&(t=`(${(n=e.lookahead)!==null&&n!==void 0?n:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function bR(t){const e=[],n=t.Grammar;for(const r of n.rules)Xn(r)&&fR(r)&&aR(cl(r))&&e.push(r.name);return{multilineCommentRules:e,nameRegexp:wy}}var zy=typeof global=="object"&&global&&global.Object===Object&&global,kR=typeof self=="object"&&self&&self.Object===Object&&self,cn=zy||kR||Function("return this")(),Ot=cn.Symbol,Vy=Object.prototype,SR=Vy.hasOwnProperty,CR=Vy.toString,gi=Ot?Ot.toStringTag:void 0;function $R(t){var e=SR.call(t,gi),n=t[gi];try{t[gi]=void 0;var r=!0}catch{}var i=CR.call(t);return r&&(e?t[gi]=n:delete t[gi]),i}var ER=Object.prototype,PR=ER.toString;function AR(t){return PR.call(t)}var NR="[object Null]",IR="[object Undefined]",Vh=Ot?Ot.toStringTag:void 0;function Jn(t){return t==null?t===void 0?IR:NR:Vh&&Vh in Object(t)?$R(t):AR(t)}function Kt(t){return t!=null&&typeof t=="object"}var DR="[object Symbol]";function Es(t){return typeof t=="symbol"||Kt(t)&&Jn(t)==DR}function ll(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var ee=Array.isArray,Yh=Ot?Ot.prototype:void 0,Xh=Yh?Yh.toString:void 0;function Yy(t){if(typeof t=="string")return t;if(ee(t))return ll(t,Yy)+"";if(Es(t))return Xh?Xh.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var OR=/\s/;function xR(t){for(var e=t.length;e--&&OR.test(t.charAt(e)););return e}var LR=/^\s+/;function MR(t){return t&&t.slice(0,xR(t)+1).replace(LR,"")}function xt(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Jh=NaN,FR=/^[-+]0x[0-9a-f]+$/i,HR=/^0b[01]+$/i,jR=/^0o[0-7]+$/i,UR=parseInt;function qR(t){if(typeof t=="number")return t;if(Es(t))return Jh;if(xt(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=xt(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=MR(t);var n=HR.test(t);return n||jR.test(t)?UR(t.slice(2),n?2:8):FR.test(t)?Jh:+t}var Qh=1/0,BR=17976931348623157e292;function KR(t){if(!t)return t===0?t:0;if(t=qR(t),t===Qh||t===-Qh){var e=t<0?-1:1;return e*BR}return t===t?t:0}function ul(t){var e=KR(t),n=e%1;return e===e?n?e-n:e:0}function ur(t){return t}var WR="[object AsyncFunction]",GR="[object Function]",zR="[object GeneratorFunction]",VR="[object Proxy]";function $n(t){if(!xt(t))return!1;var e=Jn(t);return e==GR||e==zR||e==WR||e==VR}var au=cn["__core-js_shared__"],Zh=function(){var t=/[^.]+$/.exec(au&&au.keys&&au.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function YR(t){return!!Zh&&Zh in t}var XR=Function.prototype,JR=XR.toString;function gr(t){if(t!=null){try{return JR.call(t)}catch{}try{return t+""}catch{}}return""}var QR=/[\\^$.*+?()[\]{}|]/g,ZR=/^\[object .+?Constructor\]$/,ew=Function.prototype,tw=Object.prototype,nw=ew.toString,rw=tw.hasOwnProperty,iw=RegExp("^"+nw.call(rw).replace(QR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function sw(t){if(!xt(t)||YR(t))return!1;var e=$n(t)?iw:ZR;return e.test(gr(t))}function ow(t,e){return t==null?void 0:t[e]}function yr(t,e){var n=ow(t,e);return sw(n)?n:void 0}var fd=yr(cn,"WeakMap"),ep=Object.create,aw=function(){function t(){}return function(e){if(!xt(e))return{};if(ep)return ep(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function cw(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function qe(){}function lw(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var uw=800,dw=16,fw=Date.now;function hw(t){var e=0,n=0;return function(){var r=fw(),i=dw-(r-n);if(n=r,i>0){if(++e>=uw)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function pw(t){return function(){return t}}var bc=function(){try{var t=yr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),mw=bc?function(t,e){return bc(t,"toString",{configurable:!0,enumerable:!1,value:pw(e),writable:!0})}:ur,gw=hw(mw);function Xy(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Jy(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function yw(t){return t!==t}function vw(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function nh(t,e,n){return e===e?vw(t,e,n):Jy(t,yw,n)}function Qy(t,e){var n=t==null?0:t.length;return!!n&&nh(t,e,0)>-1}var _w=9007199254740991,Tw=/^(?:0|[1-9]\d*)$/;function dl(t,e){var n=typeof t;return e=e??_w,!!e&&(n=="number"||n!="symbol"&&Tw.test(t))&&t>-1&&t%1==0&&t<e}function rh(t,e,n){e=="__proto__"&&bc?bc(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Ps(t,e){return t===e||t!==t&&e!==e}var Rw=Object.prototype,ww=Rw.hasOwnProperty;function fl(t,e,n){var r=t[e];(!(ww.call(t,e)&&Ps(r,n))||n===void 0&&!(e in t))&&rh(t,e,n)}function As(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],c=void 0;c===void 0&&(c=t[a]),i?rh(n,a,c):fl(n,a,c)}return n}var tp=Math.max;function bw(t,e,n){return e=tp(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=tp(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),cw(t,this,a)}}function ih(t,e){return gw(bw(t,e,ur),t+"")}var kw=9007199254740991;function sh(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=kw}function ln(t){return t!=null&&sh(t.length)&&!$n(t)}function Zy(t,e,n){if(!xt(n))return!1;var r=typeof e;return(r=="number"?ln(n)&&dl(e,n.length):r=="string"&&e in n)?Ps(n[e],t):!1}function Sw(t){return ih(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&Zy(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var Cw=Object.prototype;function Ns(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||Cw;return t===n}function $w(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var Ew="[object Arguments]";function np(t){return Kt(t)&&Jn(t)==Ew}var ev=Object.prototype,Pw=ev.hasOwnProperty,Aw=ev.propertyIsEnumerable,hl=np(function(){return arguments}())?np:function(t){return Kt(t)&&Pw.call(t,"callee")&&!Aw.call(t,"callee")};function Nw(){return!1}var tv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,rp=tv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,Iw=rp&&rp.exports===tv,ip=Iw?cn.Buffer:void 0,Dw=ip?ip.isBuffer:void 0,cs=Dw||Nw,Ow="[object Arguments]",xw="[object Array]",Lw="[object Boolean]",Mw="[object Date]",Fw="[object Error]",Hw="[object Function]",jw="[object Map]",Uw="[object Number]",qw="[object Object]",Bw="[object RegExp]",Kw="[object Set]",Ww="[object String]",Gw="[object WeakMap]",zw="[object ArrayBuffer]",Vw="[object DataView]",Yw="[object Float32Array]",Xw="[object Float64Array]",Jw="[object Int8Array]",Qw="[object Int16Array]",Zw="[object Int32Array]",eb="[object Uint8Array]",tb="[object Uint8ClampedArray]",nb="[object Uint16Array]",rb="[object Uint32Array]",me={};me[Yw]=me[Xw]=me[Jw]=me[Qw]=me[Zw]=me[eb]=me[tb]=me[nb]=me[rb]=!0;me[Ow]=me[xw]=me[zw]=me[Lw]=me[Vw]=me[Mw]=me[Fw]=me[Hw]=me[jw]=me[Uw]=me[qw]=me[Bw]=me[Kw]=me[Ww]=me[Gw]=!1;function ib(t){return Kt(t)&&sh(t.length)&&!!me[Jn(t)]}function pl(t){return function(e){return t(e)}}var nv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,ss=nv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,sb=ss&&ss.exports===nv,cu=sb&&zy.process,Kn=function(){try{var t=ss&&ss.require&&ss.require("util").types;return t||cu&&cu.binding&&cu.binding("util")}catch{}}(),sp=Kn&&Kn.isTypedArray,oh=sp?pl(sp):ib,ob=Object.prototype,ab=ob.hasOwnProperty;function rv(t,e){var n=ee(t),r=!n&&hl(t),i=!n&&!r&&cs(t),s=!n&&!r&&!i&&oh(t),o=n||r||i||s,a=o?$w(t.length,String):[],c=a.length;for(var l in t)(e||ab.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||dl(l,c)))&&a.push(l);return a}function iv(t,e){return function(n){return t(e(n))}}var cb=iv(Object.keys,Object),lb=Object.prototype,ub=lb.hasOwnProperty;function sv(t){if(!Ns(t))return cb(t);var e=[];for(var n in Object(t))ub.call(t,n)&&n!="constructor"&&e.push(n);return e}function Lt(t){return ln(t)?rv(t):sv(t)}var db=Object.prototype,fb=db.hasOwnProperty,kt=Sw(function(t,e){if(Ns(e)||ln(e)){As(e,Lt(e),t);return}for(var n in e)fb.call(e,n)&&fl(t,n,e[n])});function hb(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var pb=Object.prototype,mb=pb.hasOwnProperty;function gb(t){if(!xt(t))return hb(t);var e=Ns(t),n=[];for(var r in t)r=="constructor"&&(e||!mb.call(t,r))||n.push(r);return n}function ah(t){return ln(t)?rv(t,!0):gb(t)}var yb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,vb=/^\w*$/;function ch(t,e){if(ee(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||Es(t)?!0:vb.test(t)||!yb.test(t)||e!=null&&t in Object(e)}var ls=yr(Object,"create");function _b(){this.__data__=ls?ls(null):{},this.size=0}function Tb(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Rb="__lodash_hash_undefined__",wb=Object.prototype,bb=wb.hasOwnProperty;function kb(t){var e=this.__data__;if(ls){var n=e[t];return n===Rb?void 0:n}return bb.call(e,t)?e[t]:void 0}var Sb=Object.prototype,Cb=Sb.hasOwnProperty;function $b(t){var e=this.__data__;return ls?e[t]!==void 0:Cb.call(e,t)}var Eb="__lodash_hash_undefined__";function Pb(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=ls&&e===void 0?Eb:e,this}function dr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}dr.prototype.clear=_b;dr.prototype.delete=Tb;dr.prototype.get=kb;dr.prototype.has=$b;dr.prototype.set=Pb;function Ab(){this.__data__=[],this.size=0}function ml(t,e){for(var n=t.length;n--;)if(Ps(t[n][0],e))return n;return-1}var Nb=Array.prototype,Ib=Nb.splice;function Db(t){var e=this.__data__,n=ml(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():Ib.call(e,n,1),--this.size,!0}function Ob(t){var e=this.__data__,n=ml(e,t);return n<0?void 0:e[n][1]}function xb(t){return ml(this.__data__,t)>-1}function Lb(t,e){var n=this.__data__,r=ml(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function En(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}En.prototype.clear=Ab;En.prototype.delete=Db;En.prototype.get=Ob;En.prototype.has=xb;En.prototype.set=Lb;var us=yr(cn,"Map");function Mb(){this.size=0,this.__data__={hash:new dr,map:new(us||En),string:new dr}}function Fb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function gl(t,e){var n=t.__data__;return Fb(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Hb(t){var e=gl(this,t).delete(t);return this.size-=e?1:0,e}function jb(t){return gl(this,t).get(t)}function Ub(t){return gl(this,t).has(t)}function qb(t,e){var n=gl(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function Pn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Pn.prototype.clear=Mb;Pn.prototype.delete=Hb;Pn.prototype.get=jb;Pn.prototype.has=Ub;Pn.prototype.set=qb;var Bb="Expected a function";function lh(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Bb);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(lh.Cache||Pn),n}lh.Cache=Pn;var Kb=500;function Wb(t){var e=lh(t,function(r){return n.size===Kb&&n.clear(),r}),n=e.cache;return e}var Gb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,zb=/\\(\\)?/g,Vb=Wb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Gb,function(n,r,i,s){e.push(i?s.replace(zb,"$1"):r||n)}),e});function Yb(t){return t==null?"":Yy(t)}function yl(t,e){return ee(t)?t:ch(t,e)?[t]:Vb(Yb(t))}function Is(t){if(typeof t=="string"||Es(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function uh(t,e){e=yl(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Is(e[n++])];return n&&n==r?t:void 0}function Xb(t,e,n){var r=t==null?void 0:uh(t,e);return r===void 0?n:r}function dh(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var op=Ot?Ot.isConcatSpreadable:void 0;function Jb(t){return ee(t)||hl(t)||!!(op&&t&&t[op])}function fh(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=Jb),i||(i=[]);++s<o;){var a=t[s];n(a)?dh(i,a):r||(i[i.length]=a)}return i}function It(t){var e=t==null?0:t.length;return e?fh(t):[]}var ov=iv(Object.getPrototypeOf,Object);function av(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function Qb(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function Zb(){this.__data__=new En,this.size=0}function ek(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function tk(t){return this.__data__.get(t)}function nk(t){return this.__data__.has(t)}var rk=200;function ik(t,e){var n=this.__data__;if(n instanceof En){var r=n.__data__;if(!us||r.length<rk-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Pn(r)}return n.set(t,e),this.size=n.size,this}function nn(t){var e=this.__data__=new En(t);this.size=e.size}nn.prototype.clear=Zb;nn.prototype.delete=ek;nn.prototype.get=tk;nn.prototype.has=nk;nn.prototype.set=ik;function sk(t,e){return t&&As(e,Lt(e),t)}function ok(t,e){return t&&As(e,ah(e),t)}var cv=typeof Rt=="object"&&Rt&&!Rt.nodeType&&Rt,ap=cv&&typeof wt=="object"&&wt&&!wt.nodeType&&wt,ak=ap&&ap.exports===cv,cp=ak?cn.Buffer:void 0,lp=cp?cp.allocUnsafe:void 0;function ck(t,e){var n=t.length,r=lp?lp(n):new t.constructor(n);return t.copy(r),r}function hh(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function lv(){return[]}var lk=Object.prototype,uk=lk.propertyIsEnumerable,up=Object.getOwnPropertySymbols,ph=up?function(t){return t==null?[]:(t=Object(t),hh(up(t),function(e){return uk.call(t,e)}))}:lv;function dk(t,e){return As(t,ph(t),e)}var fk=Object.getOwnPropertySymbols,uv=fk?function(t){for(var e=[];t;)dh(e,ph(t)),t=ov(t);return e}:lv;function hk(t,e){return As(t,uv(t),e)}function dv(t,e,n){var r=e(t);return ee(t)?r:dh(r,n(t))}function hd(t){return dv(t,Lt,ph)}function pk(t){return dv(t,ah,uv)}var pd=yr(cn,"DataView"),md=yr(cn,"Promise"),Ar=yr(cn,"Set"),dp="[object Map]",mk="[object Object]",fp="[object Promise]",hp="[object Set]",pp="[object WeakMap]",mp="[object DataView]",gk=gr(pd),yk=gr(us),vk=gr(md),_k=gr(Ar),Tk=gr(fd),Pt=Jn;(pd&&Pt(new pd(new ArrayBuffer(1)))!=mp||us&&Pt(new us)!=dp||md&&Pt(md.resolve())!=fp||Ar&&Pt(new Ar)!=hp||fd&&Pt(new fd)!=pp)&&(Pt=function(t){var e=Jn(t),n=e==mk?t.constructor:void 0,r=n?gr(n):"";if(r)switch(r){case gk:return mp;case yk:return dp;case vk:return fp;case _k:return hp;case Tk:return pp}return e});var Rk=Object.prototype,wk=Rk.hasOwnProperty;function bk(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&wk.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var kc=cn.Uint8Array;function kk(t){var e=new t.constructor(t.byteLength);return new kc(e).set(new kc(t)),e}function Sk(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var Ck=/\w*$/;function $k(t){var e=new t.constructor(t.source,Ck.exec(t));return e.lastIndex=t.lastIndex,e}var gp=Ot?Ot.prototype:void 0,yp=gp?gp.valueOf:void 0;function Ek(t){return yp?Object(yp.call(t)):{}}function Pk(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Ak="[object Boolean]",Nk="[object Date]",Ik="[object Map]",Dk="[object Number]",Ok="[object RegExp]",xk="[object Set]",Lk="[object String]",Mk="[object Symbol]",Fk="[object ArrayBuffer]",Hk="[object DataView]",jk="[object Float32Array]",Uk="[object Float64Array]",qk="[object Int8Array]",Bk="[object Int16Array]",Kk="[object Int32Array]",Wk="[object Uint8Array]",Gk="[object Uint8ClampedArray]",zk="[object Uint16Array]",Vk="[object Uint32Array]";function Yk(t,e,n){var r=t.constructor;switch(e){case Fk:return kk(t);case Ak:case Nk:return new r(+t);case Hk:return Sk(t);case jk:case Uk:case qk:case Bk:case Kk:case Wk:case Gk:case zk:case Vk:return Pk(t);case Ik:return new r;case Dk:case Lk:return new r(t);case Ok:return $k(t);case xk:return new r;case Mk:return Ek(t)}}function Xk(t){return typeof t.constructor=="function"&&!Ns(t)?aw(ov(t)):{}}var Jk="[object Map]";function Qk(t){return Kt(t)&&Pt(t)==Jk}var vp=Kn&&Kn.isMap,Zk=vp?pl(vp):Qk,eS="[object Set]";function tS(t){return Kt(t)&&Pt(t)==eS}var _p=Kn&&Kn.isSet,nS=_p?pl(_p):tS,rS=2,fv="[object Arguments]",iS="[object Array]",sS="[object Boolean]",oS="[object Date]",aS="[object Error]",hv="[object Function]",cS="[object GeneratorFunction]",lS="[object Map]",uS="[object Number]",pv="[object Object]",dS="[object RegExp]",fS="[object Set]",hS="[object String]",pS="[object Symbol]",mS="[object WeakMap]",gS="[object ArrayBuffer]",yS="[object DataView]",vS="[object Float32Array]",_S="[object Float64Array]",TS="[object Int8Array]",RS="[object Int16Array]",wS="[object Int32Array]",bS="[object Uint8Array]",kS="[object Uint8ClampedArray]",SS="[object Uint16Array]",CS="[object Uint32Array]",fe={};fe[fv]=fe[iS]=fe[gS]=fe[yS]=fe[sS]=fe[oS]=fe[vS]=fe[_S]=fe[TS]=fe[RS]=fe[wS]=fe[lS]=fe[uS]=fe[pv]=fe[dS]=fe[fS]=fe[hS]=fe[pS]=fe[bS]=fe[kS]=fe[SS]=fe[CS]=!0;fe[aS]=fe[hv]=fe[mS]=!1;function cc(t,e,n,r,i,s){var o,a=e&rS;if(o!==void 0)return o;if(!xt(t))return t;var c=ee(t);if(c)return o=bk(t),lw(t,o);var l=Pt(t),u=l==hv||l==cS;if(cs(t))return ck(t);if(l==pv||l==fv||u&&!i)return o=u?{}:Xk(t),a?hk(t,ok(o,t)):dk(t,sk(o,t));if(!fe[l])return i?t:{};o=Yk(t,l),s||(s=new nn);var f=s.get(t);if(f)return f;s.set(t,o),nS(t)?t.forEach(function(d){o.add(cc(d,e,n,d,t,s))}):Zk(t)&&t.forEach(function(d,v){o.set(v,cc(d,e,n,v,t,s))});var m=hd,g=c?void 0:m(t);return Xy(g||t,function(d,v){g&&(v=d,d=t[v]),fl(o,v,cc(d,e,n,v,t,s))}),o}var $S=4;function Ze(t){return cc(t,$S)}function Ds(t){for(var e=-1,n=t==null?0:t.length,r=0,i=[];++e<n;){var s=t[e];s&&(i[r++]=s)}return i}var ES="__lodash_hash_undefined__";function PS(t){return this.__data__.set(t,ES),this}function AS(t){return this.__data__.has(t)}function Or(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new Pn;++e<n;)this.add(t[e])}Or.prototype.add=Or.prototype.push=PS;Or.prototype.has=AS;function mv(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function mh(t,e){return t.has(e)}var NS=1,IS=2;function gv(t,e,n,r,i,s){var o=n&NS,a=t.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=s.get(t),u=s.get(e);if(l&&u)return l==e&&u==t;var f=-1,m=!0,g=n&IS?new Or:void 0;for(s.set(t,e),s.set(e,t);++f<a;){var d=t[f],v=e[f];if(r)var R=o?r(v,d,f,e,t,s):r(d,v,f,t,e,s);if(R!==void 0){if(R)continue;m=!1;break}if(g){if(!mv(e,function(_,h){if(!mh(g,h)&&(d===_||i(d,_,n,r,s)))return g.push(h)})){m=!1;break}}else if(!(d===v||i(d,v,n,r,s))){m=!1;break}}return s.delete(t),s.delete(e),m}function DS(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function gh(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var OS=1,xS=2,LS="[object Boolean]",MS="[object Date]",FS="[object Error]",HS="[object Map]",jS="[object Number]",US="[object RegExp]",qS="[object Set]",BS="[object String]",KS="[object Symbol]",WS="[object ArrayBuffer]",GS="[object DataView]",Tp=Ot?Ot.prototype:void 0,lu=Tp?Tp.valueOf:void 0;function zS(t,e,n,r,i,s,o){switch(n){case GS:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case WS:return!(t.byteLength!=e.byteLength||!s(new kc(t),new kc(e)));case LS:case MS:case jS:return Ps(+t,+e);case FS:return t.name==e.name&&t.message==e.message;case US:case BS:return t==e+"";case HS:var a=DS;case qS:var c=r&OS;if(a||(a=gh),t.size!=e.size&&!c)return!1;var l=o.get(t);if(l)return l==e;r|=xS,o.set(t,e);var u=gv(a(t),a(e),r,i,s,o);return o.delete(t),u;case KS:if(lu)return lu.call(t)==lu.call(e)}return!1}var VS=1,YS=Object.prototype,XS=YS.hasOwnProperty;function JS(t,e,n,r,i,s){var o=n&VS,a=hd(t),c=a.length,l=hd(e),u=l.length;if(c!=u&&!o)return!1;for(var f=c;f--;){var m=a[f];if(!(o?m in e:XS.call(e,m)))return!1}var g=s.get(t),d=s.get(e);if(g&&d)return g==e&&d==t;var v=!0;s.set(t,e),s.set(e,t);for(var R=o;++f<c;){m=a[f];var _=t[m],h=e[m];if(r)var p=o?r(h,_,m,e,t,s):r(_,h,m,t,e,s);if(!(p===void 0?_===h||i(_,h,n,r,s):p)){v=!1;break}R||(R=m=="constructor")}if(v&&!R){var w=t.constructor,F=e.constructor;w!=F&&"constructor"in t&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof F=="function"&&F instanceof F)&&(v=!1)}return s.delete(t),s.delete(e),v}var QS=1,Rp="[object Arguments]",wp="[object Array]",vo="[object Object]",ZS=Object.prototype,bp=ZS.hasOwnProperty;function eC(t,e,n,r,i,s){var o=ee(t),a=ee(e),c=o?wp:Pt(t),l=a?wp:Pt(e);c=c==Rp?vo:c,l=l==Rp?vo:l;var u=c==vo,f=l==vo,m=c==l;if(m&&cs(t)){if(!cs(e))return!1;o=!0,u=!1}if(m&&!u)return s||(s=new nn),o||oh(t)?gv(t,e,n,r,i,s):zS(t,e,c,n,r,i,s);if(!(n&QS)){var g=u&&bp.call(t,"__wrapped__"),d=f&&bp.call(e,"__wrapped__");if(g||d){var v=g?t.value():t,R=d?e.value():e;return s||(s=new nn),i(v,R,n,r,s)}}return m?(s||(s=new nn),JS(t,e,n,r,i,s)):!1}function yh(t,e,n,r,i){return t===e?!0:t==null||e==null||!Kt(t)&&!Kt(e)?t!==t&&e!==e:eC(t,e,n,r,yh,i)}var tC=1,nC=2;function rC(t,e,n,r){var i=n.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var o=n[i];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return!1}for(;++i<s;){o=n[i];var a=o[0],c=t[a],l=o[1];if(o[2]){if(c===void 0&&!(a in t))return!1}else{var u=new nn,f;if(!(f===void 0?yh(l,c,tC|nC,r,u):f))return!1}}return!0}function yv(t){return t===t&&!xt(t)}function iC(t){for(var e=Lt(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,yv(i)]}return e}function vv(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function sC(t){var e=iC(t);return e.length==1&&e[0][2]?vv(e[0][0],e[0][1]):function(n){return n===t||rC(n,t,e)}}function oC(t,e){return t!=null&&e in Object(t)}function _v(t,e,n){e=yl(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Is(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&sh(i)&&dl(o,i)&&(ee(t)||hl(t)))}function aC(t,e){return t!=null&&_v(t,e,oC)}var cC=1,lC=2;function uC(t,e){return ch(t)&&yv(e)?vv(Is(t),e):function(n){var r=Xb(n,t);return r===void 0&&r===e?aC(n,t):yh(e,r,cC|lC)}}function dC(t){return function(e){return e==null?void 0:e[t]}}function fC(t){return function(e){return uh(e,t)}}function hC(t){return ch(t)?dC(Is(t)):fC(t)}function Gt(t){return typeof t=="function"?t:t==null?ur:typeof t=="object"?ee(t)?uC(t[0],t[1]):sC(t):hC(t)}function pC(t,e,n,r){for(var i=-1,s=t==null?0:t.length;++i<s;){var o=t[i];e(r,o,n(o),t)}return r}function mC(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var c=o[++i];if(n(s[c],c,s)===!1)break}return e}}var gC=mC();function yC(t,e){return t&&gC(t,e,Lt)}function vC(t,e){return function(n,r){if(n==null)return n;if(!ln(n))return t(n,r);for(var i=n.length,s=-1,o=Object(n);++s<i&&r(o[s],s,o)!==!1;);return n}}var vr=vC(yC);function _C(t,e,n,r){return vr(t,function(i,s,o){e(r,i,n(i),o)}),r}function TC(t,e){return function(n,r){var i=ee(n)?pC:_C,s=e?e():{};return i(n,t,Gt(r),s)}}var Tv=Object.prototype,RC=Tv.hasOwnProperty,vh=ih(function(t,e){t=Object(t);var n=-1,r=e.length,i=r>2?e[2]:void 0;for(i&&Zy(e[0],e[1],i)&&(r=1);++n<r;)for(var s=e[n],o=ah(s),a=-1,c=o.length;++a<c;){var l=o[a],u=t[l];(u===void 0||Ps(u,Tv[l])&&!RC.call(t,l))&&(t[l]=s[l])}return t});function kp(t){return Kt(t)&&ln(t)}var wC=200;function bC(t,e,n,r){var i=-1,s=Qy,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;e.length>=wC&&(s=mh,o=!1,e=new Or(e));e:for(;++i<a;){var u=t[i],f=u;if(u=u!==0?u:0,o&&f===f){for(var m=l;m--;)if(e[m]===f)continue e;c.push(u)}else s(e,f,r)||c.push(u)}return c}var vl=ih(function(t,e){return kp(t)?bC(t,fh(e,1,kp,!0)):[]});function xr(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function Ve(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:ul(e),av(t,e<0?0:e,r)):[]}function ds(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:ul(e),e=r-e,av(t,0,e<0?0:e)):[]}function kC(t){return typeof t=="function"?t:ur}function q(t,e){var n=ee(t)?Xy:vr;return n(t,kC(e))}function SC(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function CC(t,e){var n=!0;return vr(t,function(r,i,s){return n=!!e(r,i,s),n}),n}function qt(t,e,n){var r=ee(t)?SC:CC;return r(t,Gt(e))}function Rv(t,e){var n=[];return vr(t,function(r,i,s){e(r,i,s)&&n.push(r)}),n}function St(t,e){var n=ee(t)?hh:Rv;return n(t,Gt(e))}function $C(t){return function(e,n,r){var i=Object(e);if(!ln(e)){var s=Gt(n);e=Lt(e),n=function(a){return s(i[a],a,i)}}var o=t(e,n,r);return o>-1?i[s?e[o]:o]:void 0}}var EC=Math.max;function PC(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:ul(n);return i<0&&(i=EC(r+i,0)),Jy(t,Gt(e),i)}var Lr=$C(PC);function Wt(t){return t&&t.length?t[0]:void 0}function AC(t,e){var n=-1,r=ln(t)?Array(t.length):[];return vr(t,function(i,s,o){r[++n]=e(i,s,o)}),r}function M(t,e){var n=ee(t)?ll:AC;return n(t,Gt(e))}function bt(t,e){return fh(M(t,e))}var NC=Object.prototype,IC=NC.hasOwnProperty,DC=TC(function(t,e,n){IC.call(t,n)?t[n].push(e):rh(t,n,[e])}),OC=Object.prototype,xC=OC.hasOwnProperty;function LC(t,e){return t!=null&&xC.call(t,e)}function B(t,e){return t!=null&&_v(t,e,LC)}var MC="[object String]";function mt(t){return typeof t=="string"||!ee(t)&&Kt(t)&&Jn(t)==MC}function FC(t,e){return ll(e,function(n){return t[n]})}function Be(t){return t==null?[]:FC(t,Lt(t))}var HC=Math.max;function dt(t,e,n,r){t=ln(t)?t:Be(t),n=n?ul(n):0;var i=t.length;return n<0&&(n=HC(i+n,0)),mt(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&nh(t,e,n)>-1}function Sp(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=0;return nh(t,e,i)}var jC="[object Map]",UC="[object Set]",qC=Object.prototype,BC=qC.hasOwnProperty;function le(t){if(t==null)return!0;if(ln(t)&&(ee(t)||typeof t=="string"||typeof t.splice=="function"||cs(t)||oh(t)||hl(t)))return!t.length;var e=Pt(t);if(e==jC||e==UC)return!t.size;if(Ns(t))return!sv(t).length;for(var n in t)if(BC.call(t,n))return!1;return!0}var KC="[object RegExp]";function WC(t){return Kt(t)&&Jn(t)==KC}var Cp=Kn&&Kn.isRegExp,wn=Cp?pl(Cp):WC;function bn(t){return t===void 0}function GC(t,e){return t<e}function zC(t,e,n){for(var r=-1,i=t.length;++r<i;){var s=t[r],o=e(s);if(o!=null&&(a===void 0?o===o&&!Es(o):n(o,a)))var a=o,c=s}return c}function VC(t){return t&&t.length?zC(t,ur,GC):void 0}var YC="Expected a function";function XC(t){if(typeof t!="function")throw new TypeError(YC);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function JC(t,e,n,r){if(!xt(t))return t;e=yl(e,t);for(var i=-1,s=e.length,o=s-1,a=t;a!=null&&++i<s;){var c=Is(e[i]),l=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(i!=o){var u=a[c];l=void 0,l===void 0&&(l=xt(u)?u:dl(e[i+1])?[]:{})}fl(a,c,l),a=a[c]}return t}function QC(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=uh(t,o);n(a,o)&&JC(s,yl(o,t),a)}return s}function zt(t,e){if(t==null)return{};var n=ll(pk(t),function(r){return[r]});return e=Gt(e),QC(t,n,function(r,i){return e(r,i[0])})}function ZC(t,e,n,r,i){return i(t,function(s,o,a){n=r?(r=!1,s):e(n,s,o,a)}),n}function ct(t,e,n){var r=ee(t)?Qb:ZC,i=arguments.length<3;return r(t,Gt(e),n,i,vr)}function _l(t,e){var n=ee(t)?hh:Rv;return n(t,XC(Gt(e)))}function e$(t,e){var n;return vr(t,function(r,i,s){return n=e(r,i,s),!n}),!!n}function wv(t,e,n){var r=ee(t)?mv:e$;return r(t,Gt(e))}var t$=1/0,n$=Ar&&1/gh(new Ar([,-0]))[1]==t$?function(t){return new Ar(t)}:qe,r$=200;function bv(t,e,n){var r=-1,i=Qy,s=t.length,o=!0,a=[],c=a;if(s>=r$){var l=e?null:n$(t);if(l)return gh(l);o=!1,i=mh,c=new Or}else c=e?[]:a;e:for(;++r<s;){var u=t[r],f=e?e(u):u;if(u=u!==0?u:0,o&&f===f){for(var m=c.length;m--;)if(c[m]===f)continue e;e&&c.push(f),a.push(u)}else i(c,f,n)||(c!==a&&c.push(f),a.push(u))}return a}function _h(t){return t&&t.length?bv(t):[]}function i$(t,e){return t&&t.length?bv(t,Gt(e)):[]}function gd(t){console&&console.error&&console.error(`Error: ${t}`)}function kv(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Sv(t){const e=new Date().getTime(),n=t();return{time:new Date().getTime()-e,value:n}}function Cv(t){function e(){}e.prototype=t;const n=new e;function r(){return typeof n.bar}return r(),r(),t}function s$(t){return o$(t)?t.LABEL:t.name}function o$(t){return mt(t.LABEL)&&t.LABEL!==""}class un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),q(this.definition,n=>{n.accept(e)})}}class lt extends un{constructor(e){super([]),this.idx=1,kt(this,zt(e,n=>n!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class ei extends un{constructor(e){super(e.definition),this.orgText="",kt(this,zt(e,n=>n!==void 0))}}class gt extends un{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,kt(this,zt(e,n=>n!==void 0))}}class Qe extends un{constructor(e){super(e.definition),this.idx=1,kt(this,zt(e,n=>n!==void 0))}}class Ct extends un{constructor(e){super(e.definition),this.idx=1,kt(this,zt(e,n=>n!==void 0))}}class $t extends un{constructor(e){super(e.definition),this.idx=1,kt(this,zt(e,n=>n!==void 0))}}class Ce extends un{constructor(e){super(e.definition),this.idx=1,kt(this,zt(e,n=>n!==void 0))}}class yt extends un{constructor(e){super(e.definition),this.idx=1,kt(this,zt(e,n=>n!==void 0))}}class vt extends un{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,kt(this,zt(e,n=>n!==void 0))}}class ge{constructor(e){this.idx=1,kt(this,zt(e,n=>n!==void 0))}accept(e){e.visit(this)}}function a$(t){return M(t,lc)}function lc(t){function e(n){return M(n,lc)}if(t instanceof lt){const n={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return mt(t.label)&&(n.label=t.label),n}else{if(t instanceof gt)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Qe)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof Ct)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof $t)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:lc(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof yt)return{type:"RepetitionWithSeparator",idx:t.idx,separator:lc(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof Ce)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof vt)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ge){const n={type:"Terminal",name:t.terminalType.name,label:s$(t.terminalType),idx:t.idx};mt(t.label)&&(n.terminalLabel=t.label);const r=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=wn(r)?r.source:r),n}else{if(t instanceof ei)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}class ti{visit(e){const n=e;switch(n.constructor){case lt:return this.visitNonTerminal(n);case gt:return this.visitAlternative(n);case Qe:return this.visitOption(n);case Ct:return this.visitRepetitionMandatory(n);case $t:return this.visitRepetitionMandatoryWithSeparator(n);case yt:return this.visitRepetitionWithSeparator(n);case Ce:return this.visitRepetition(n);case vt:return this.visitAlternation(n);case ge:return this.visitTerminal(n);case ei:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function c$(t){return t instanceof gt||t instanceof Qe||t instanceof Ce||t instanceof Ct||t instanceof $t||t instanceof yt||t instanceof ge||t instanceof ei}function Sc(t,e=[]){return t instanceof Qe||t instanceof Ce||t instanceof yt?!0:t instanceof vt?wv(t.definition,r=>Sc(r,e)):t instanceof lt&&dt(e,t)?!1:t instanceof un?(t instanceof lt&&e.push(t),qt(t.definition,r=>Sc(r,e))):!1}function l$(t){return t instanceof vt}function Qt(t){if(t instanceof lt)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof vt)return"OR";if(t instanceof Ct)return"AT_LEAST_ONE";if(t instanceof $t)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof Ce)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}class Tl{walk(e,n=[]){q(e.definition,(r,i)=>{const s=Ve(e.definition,i+1);if(r instanceof lt)this.walkProdRef(r,s,n);else if(r instanceof ge)this.walkTerminal(r,s,n);else if(r instanceof gt)this.walkFlat(r,s,n);else if(r instanceof Qe)this.walkOption(r,s,n);else if(r instanceof Ct)this.walkAtLeastOne(r,s,n);else if(r instanceof $t)this.walkAtLeastOneSep(r,s,n);else if(r instanceof yt)this.walkManySep(r,s,n);else if(r instanceof Ce)this.walkMany(r,s,n);else if(r instanceof vt)this.walkOr(r,s,n);else throw Error("non exhaustive match")})}walkTerminal(e,n,r){}walkProdRef(e,n,r){}walkFlat(e,n,r){const i=n.concat(r);this.walk(e,i)}walkOption(e,n,r){const i=n.concat(r);this.walk(e,i)}walkAtLeastOne(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkAtLeastOneSep(e,n,r){const i=$p(e,n,r);this.walk(e,i)}walkMany(e,n,r){const i=[new Qe({definition:e.definition})].concat(n,r);this.walk(e,i)}walkManySep(e,n,r){const i=$p(e,n,r);this.walk(e,i)}walkOr(e,n,r){const i=n.concat(r);q(e.definition,s=>{const o=new gt({definition:[s]});this.walk(o,i)})}}function $p(t,e,n){return[new Qe({definition:[new ge({terminalType:t.separator})].concat(t.definition)})].concat(e,n)}function Os(t){if(t instanceof lt)return Os(t.referencedRule);if(t instanceof ge)return f$(t);if(c$(t))return u$(t);if(l$(t))return d$(t);throw Error("non exhaustive match")}function u$(t){let e=[];const n=t.definition;let r=0,i=n.length>r,s,o=!0;for(;i&&o;)s=n[r],o=Sc(s),e=e.concat(Os(s)),r=r+1,i=n.length>r;return _h(e)}function d$(t){const e=M(t.definition,n=>Os(n));return _h(It(e))}function f$(t){return[t.terminalType]}const $v="_~IN~_";class h$ extends Tl{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,n,r){}walkProdRef(e,n,r){const i=m$(e.referencedRule,e.idx)+this.topProd.name,s=n.concat(r),o=new gt({definition:s}),a=Os(o);this.follows[i]=a}}function p$(t){const e={};return q(t,n=>{const r=new h$(n).startWalking();kt(e,r)}),e}function m$(t,e){return t.name+e+$v}let uc={};const g$=new xy;function Rl(t){const e=t.toString();if(uc.hasOwnProperty(e))return uc[e];{const n=g$.pattern(e);return uc[e]=n,n}}function y$(){uc={}}const Ev="Complement Sets are not supported for first char optimization",Cc=`Unable to use "first char" lexer optimizations:
`;function v$(t,e=!1){try{const n=Rl(t);return yd(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===Ev)e&&kv(`${Cc}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let r="";e&&(r=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),gd(`${Cc}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r)}}return[]}function yd(t,e,n){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)yd(t.value[i],e,n);break;case"Alternative":const r=t.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}const o=s;switch(o.type){case"Character":_o(o.value,e,n);break;case"Set":if(o.complement===!0)throw Error(Ev);q(o.value,c=>{if(typeof c=="number")_o(c,e,n);else{const l=c;if(n===!0)for(let u=l.from;u<=l.to;u++)_o(u,e,n);else{for(let u=l.from;u<=l.to&&u<Ji;u++)_o(u,e,n);if(l.to>=Ji){const u=l.from>=Ji?l.from:Ji,f=l.to,m=Wn(u),g=Wn(f);for(let d=m;d<=g;d++)e[d]=d}}}});break;case"Group":yd(o.value,e,n);break;default:throw Error("Non Exhaustive Match")}const a=o.quantifier!==void 0&&o.quantifier.atLeast===0;if(o.type==="Group"&&vd(o)===!1||o.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Be(e)}function _o(t,e,n){const r=Wn(t);e[r]=r,n===!0&&_$(t,e)}function _$(t,e){const n=String.fromCharCode(t),r=n.toUpperCase();if(r!==n){const i=Wn(r.charCodeAt(0));e[i]=i}else{const i=n.toLowerCase();if(i!==n){const s=Wn(i.charCodeAt(0));e[s]=s}}}function Ep(t,e){return Lr(t.value,n=>{if(typeof n=="number")return dt(e,n);{const r=n;return Lr(e,i=>r.from<=i&&i<=r.to)!==void 0}})}function vd(t){const e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ee(t.value)?qt(t.value,vd):vd(t.value):!1}class T$ extends sl{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){dt(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?Ep(e,this.targetCharCodes)===void 0&&(this.found=!0):Ep(e,this.targetCharCodes)!==void 0&&(this.found=!0)}}function Th(t,e){if(e instanceof RegExp){const n=Rl(e),r=new T$(t);return r.visit(n),r.found}else return Lr(e,n=>dt(t,n.charCodeAt(0)))!==void 0}const fr="PATTERN",Xi="defaultMode",To="modes";let Pv=typeof new RegExp("(?:)").sticky=="boolean";function R$(t,e){e=vh(e,{useSticky:Pv,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(h,p)=>p()});const n=e.tracer;n("initCharCodeToOptimizedIndexMap",()=>{K$()});let r;n("Reject Lexer.NA",()=>{r=_l(t,h=>h[fr]===pt.NA)});let i=!1,s;n("Transform Patterns",()=>{i=!1,s=M(r,h=>{const p=h[fr];if(wn(p)){const w=p.source;return w.length===1&&w!=="^"&&w!=="$"&&w!=="."&&!p.ignoreCase?w:w.length===2&&w[0]==="\\"&&!dt(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],w[1])?w[1]:e.useSticky?Ap(p):Pp(p)}else{if($n(p))return i=!0,{exec:p};if(typeof p=="object")return i=!0,p;if(typeof p=="string"){if(p.length===1)return p;{const w=p.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),F=new RegExp(w);return e.useSticky?Ap(F):Pp(F)}}else throw Error("non exhaustive match")}})});let o,a,c,l,u;n("misc mapping",()=>{o=M(r,h=>h.tokenTypeIdx),a=M(r,h=>{const p=h.GROUP;if(p!==pt.SKIPPED){if(mt(p))return p;if(bn(p))return!1;throw Error("non exhaustive match")}}),c=M(r,h=>{const p=h.LONGER_ALT;if(p)return ee(p)?M(p,F=>Sp(r,F)):[Sp(r,p)]}),l=M(r,h=>h.PUSH_MODE),u=M(r,h=>B(h,"POP_MODE"))});let f;n("Line Terminator Handling",()=>{const h=Iv(e.lineTerminatorCharacters);f=M(r,p=>!1),e.positionTracking!=="onlyOffset"&&(f=M(r,p=>B(p,"LINE_BREAKS")?!!p.LINE_BREAKS:Nv(p,h)===!1&&Th(h,p.PATTERN)))});let m,g,d,v;n("Misc Mapping #2",()=>{m=M(r,Av),g=M(s,U$),d=ct(r,(h,p)=>{const w=p.GROUP;return mt(w)&&w!==pt.SKIPPED&&(h[w]=[]),h},{}),v=M(s,(h,p)=>({pattern:s[p],longerAlt:c[p],canLineTerminator:f[p],isCustom:m[p],short:g[p],group:a[p],push:l[p],pop:u[p],tokenTypeIdx:o[p],tokenType:r[p]}))});let R=!0,_=[];return e.safeMode||n("First Char Optimization",()=>{_=ct(r,(h,p,w)=>{if(typeof p.PATTERN=="string"){const F=p.PATTERN.charCodeAt(0),G=Wn(F);uu(h,G,v[w])}else if(ee(p.START_CHARS_HINT)){let F;q(p.START_CHARS_HINT,G=>{const J=typeof G=="string"?G.charCodeAt(0):G,be=Wn(J);F!==be&&(F=be,uu(h,be,v[w]))})}else if(wn(p.PATTERN))if(p.PATTERN.unicode)R=!1,e.ensureOptimizations&&gd(`${Cc}	Unable to analyze < ${p.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{const F=v$(p.PATTERN,e.ensureOptimizations);le(F)&&(R=!1),q(F,G=>{uu(h,G,v[w])})}else e.ensureOptimizations&&gd(`${Cc}	TokenType: <${p.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),R=!1;return h},[])}),{emptyGroups:d,patternIdxToConfig:v,charCodeToPatternIdxToConfig:_,hasCustom:i,canBeOptimized:R}}function w$(t,e){let n=[];const r=k$(t);n=n.concat(r.errors);const i=S$(r.valid),s=i.valid;return n=n.concat(i.errors),n=n.concat(b$(s)),n=n.concat(D$(s)),n=n.concat(O$(s,e)),n=n.concat(x$(s)),n}function b$(t){let e=[];const n=St(t,r=>wn(r[fr]));return e=e.concat($$(n)),e=e.concat(A$(n)),e=e.concat(N$(n)),e=e.concat(I$(n)),e=e.concat(E$(n)),e}function k$(t){const e=St(t,i=>!B(i,fr)),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:$e.MISSING_PATTERN,tokenTypes:[i]})),r=vl(t,e);return{errors:n,valid:r}}function S$(t){const e=St(t,i=>{const s=i[fr];return!wn(s)&&!$n(s)&&!B(s,"exec")&&!mt(s)}),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:$e.INVALID_PATTERN,tokenTypes:[i]})),r=vl(t,e);return{errors:n,valid:r}}const C$=/[^\\][$]/;function $$(t){class e extends sl{constructor(){super(...arguments),this.found=!1}visitEndAnchor(s){this.found=!0}}const n=St(t,i=>{const s=i.PATTERN;try{const o=Rl(s),a=new e;return a.visit(o),a.found}catch{return C$.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:$e.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function E$(t){const e=St(t,r=>r.PATTERN.test(""));return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",type:$e.EMPTY_MATCH_PATTERN,tokenTypes:[r]}))}const P$=/[^\\[][\^]|^\^/;function A$(t){class e extends sl{constructor(){super(...arguments),this.found=!1}visitStartAnchor(s){this.found=!0}}const n=St(t,i=>{const s=i.PATTERN;try{const o=Rl(s),a=new e;return a.visit(o),a.found}catch{return P$.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:$e.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function N$(t){const e=St(t,r=>{const i=r[fr];return i instanceof RegExp&&(i.multiline||i.global)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:$e.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[r]}))}function I$(t){const e=[];let n=M(t,s=>ct(t,(o,a)=>(s.PATTERN.source===a.PATTERN.source&&!dt(e,a)&&a.PATTERN!==pt.NA&&(e.push(a),o.push(a)),o),[]));n=Ds(n);const r=St(n,s=>s.length>1);return M(r,s=>{const o=M(s,c=>c.name);return{message:`The same RegExp pattern ->${Wt(s).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,type:$e.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}})}function D$(t){const e=St(t,r=>{if(!B(r,"GROUP"))return!1;const i=r.GROUP;return i!==pt.SKIPPED&&i!==pt.NA&&!mt(i)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:$e.INVALID_GROUP_TYPE_FOUND,tokenTypes:[r]}))}function O$(t,e){const n=St(t,i=>i.PUSH_MODE!==void 0&&!dt(e,i.PUSH_MODE));return M(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:$e.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function x$(t){const e=[],n=ct(t,(r,i,s)=>{const o=i.PATTERN;return o===pt.NA||(mt(o)?r.push({str:o,idx:s,tokenType:i}):wn(o)&&M$(o)&&r.push({str:o.source,idx:s,tokenType:i})),r},[]);return q(t,(r,i)=>{q(n,({str:s,idx:o,tokenType:a})=>{if(i<o&&L$(s,r.PATTERN)){const c=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:$e.UNREACHABLE_PATTERN,tokenTypes:[r,a]})}})}),e}function L$(t,e){if(wn(e)){const n=e.exec(t);return n!==null&&n.index===0}else{if($n(e))return e(t,0,[],{});if(B(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function M$(t){return Lr([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>t.source.indexOf(n)!==-1)===void 0}function Pp(t){const e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function Ap(t){const e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function F$(t,e,n){const r=[];return B(t,Xi)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Xi+`> property in its definition
`,type:$e.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),B(t,To)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+To+`> property in its definition
`,type:$e.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),B(t,To)&&B(t,Xi)&&!B(t.modes,t.defaultMode)&&r.push({message:`A MultiMode Lexer cannot be initialized with a ${Xi}: <${t.defaultMode}>which does not exist
`,type:$e.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),B(t,To)&&q(t.modes,(i,s)=>{q(i,(o,a)=>{if(bn(o))r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${a}>
`,type:$e.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(B(o,"LONGER_ALT")){const c=ee(o.LONGER_ALT)?o.LONGER_ALT:[o.LONGER_ALT];q(c,l=>{!bn(l)&&!dt(i,l)&&r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${o.name}> outside of mode <${s}>
`,type:$e.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),r}function H$(t,e,n){const r=[];let i=!1;const s=Ds(It(Be(t.modes))),o=_l(s,c=>c[fr]===pt.NA),a=Iv(n);return e&&q(o,c=>{const l=Nv(c,a);if(l!==!1){const f={message:B$(c,l),type:l.issue,tokenType:c};r.push(f)}else B(c,"LINE_BREAKS")?c.LINE_BREAKS===!0&&(i=!0):Th(a,c.PATTERN)&&(i=!0)}),e&&!i&&r.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:$e.NO_LINE_BREAKS_FLAGS}),r}function j$(t){const e={},n=Lt(t);return q(n,r=>{const i=t[r];if(ee(i))e[r]=[];else throw Error("non exhaustive match")}),e}function Av(t){const e=t.PATTERN;if(wn(e))return!1;if($n(e))return!0;if(B(e,"exec"))return!0;if(mt(e))return!1;throw Error("non exhaustive match")}function U$(t){return mt(t)&&t.length===1?t.charCodeAt(0):!1}const q$={test:function(t){const e=t.length;for(let n=this.lastIndex;n<e;n++){const r=t.charCodeAt(n);if(r===10)return this.lastIndex=n+1,!0;if(r===13)return t.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},lastIndex:0};function Nv(t,e){if(B(t,"LINE_BREAKS"))return!1;if(wn(t.PATTERN)){try{Th(e,t.PATTERN)}catch(n){return{issue:$e.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(mt(t.PATTERN))return!1;if(Av(t))return{issue:$e.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function B$(t,e){if(e.issue===$e.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===$e.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function Iv(t){return M(t,n=>mt(n)?n.charCodeAt(0):n)}function uu(t,e,n){t[e]===void 0?t[e]=[n]:t[e].push(n)}const Ji=256;let dc=[];function Wn(t){return t<Ji?t:dc[t]}function K$(){if(le(dc)){dc=new Array(65536);for(let t=0;t<65536;t++)dc[t]=t>255?255+~~(t/255):t}}function xs(t,e){const n=t.tokenTypeIdx;return n===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[n]===!0}function $c(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}let Np=1;const Dv={};function Ls(t){const e=W$(t);G$(e),V$(e),z$(e),q(e,n=>{n.isParent=n.categoryMatches.length>0})}function W$(t){let e=Ze(t),n=t,r=!0;for(;r;){n=Ds(It(M(n,s=>s.CATEGORIES)));const i=vl(n,e);e=e.concat(i),le(i)?r=!1:n=i}return e}function G$(t){q(t,e=>{xv(e)||(Dv[Np]=e,e.tokenTypeIdx=Np++),Ip(e)&&!ee(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),Ip(e)||(e.CATEGORIES=[]),Y$(e)||(e.categoryMatches=[]),X$(e)||(e.categoryMatchesMap={})})}function z$(t){q(t,e=>{e.categoryMatches=[],q(e.categoryMatchesMap,(n,r)=>{e.categoryMatches.push(Dv[r].tokenTypeIdx)})})}function V$(t){q(t,e=>{Ov([],e)})}function Ov(t,e){q(t,n=>{e.categoryMatchesMap[n.tokenTypeIdx]=!0}),q(e.CATEGORIES,n=>{const r=t.concat(e);dt(r,n)||Ov(r,n)})}function xv(t){return B(t,"tokenTypeIdx")}function Ip(t){return B(t,"CATEGORIES")}function Y$(t){return B(t,"categoryMatches")}function X$(t){return B(t,"categoryMatchesMap")}function J$(t){return B(t,"tokenTypeIdx")}const _d={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,n,r,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`}};var $e;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})($e||($e={}));const Qi={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:_d,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Qi);class pt{constructor(e,n=Qi){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,s)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;const o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${i}>`);const{time:a,value:c}=Sv(s),l=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${o}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,c}else return s()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=kt({},Qi,n);const r=this.config.traceInitPerf;r===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof r=="number"&&(this.traceInitMaxIdent=r,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,s=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Qi.lineTerminatorsPattern)this.config.lineTerminatorsPattern=q$;else if(this.config.lineTerminatorCharacters===Qi.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ee(e)?i={modes:{defaultMode:Ze(e)},defaultMode:Xi}:(s=!1,i=Ze(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(F$(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(H$(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},q(i.modes,(a,c)=>{i.modes[c]=_l(a,l=>bn(l))});const o=Lt(i.modes);if(q(i.modes,(a,c)=>{this.TRACE_INIT(`Mode: <${c}> processing`,()=>{if(this.modes.push(c),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(w$(a,o))}),le(this.lexerDefinitionErrors)){Ls(a);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=R$(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[c]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[c]=l.charCodeToPatternIdxToConfig,this.emptyGroups=kt({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[c]=l.canBeOptimized}})}),this.defaultMode=i.defaultMode,!le(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){const c=M(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}q(this.lexerDefinitionWarning,a=>{kv(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Pv?(this.chopInput=ur,this.match=this.matchWithTest):(this.updateLastIndex=qe,this.match=this.matchWithExec),s&&(this.handleModes=qe),this.trackStartLines===!1&&(this.computeNewColumn=ur),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=qe),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{const a=ct(this.canModeBeOptimized,(c,l,u)=>(l===!1&&c.push(u),c),[]);if(n.ensureOptimizations&&!le(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{y$()}),this.TRACE_INIT("toFastProperties",()=>{Cv(this)})})}tokenize(e,n=this.defaultMode){if(!le(this.lexerDefinitionErrors)){const i=M(this.lexerDefinitionErrors,s=>s.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,n)}tokenizeInternal(e,n){let r,i,s,o,a,c,l,u,f,m,g,d,v,R,_;const h=e,p=h.length;let w=0,F=0;const G=this.hasCustom?0:Math.floor(e.length/10),J=new Array(G),be=[];let Ee=this.trackStartLines?1:void 0,Pe=this.trackStartLines?1:void 0;const A=j$(this.emptyGroups),E=this.trackStartLines,b=this.config.lineTerminatorsPattern;let $=0,N=[],P=[];const O=[],He=[];Object.freeze(He);let x;function S(){return N}function te(ye){const je=Wn(ye),Ge=P[je];return Ge===void 0?He:Ge}const Vt=ye=>{if(O.length===1&&ye.tokenType.PUSH_MODE===void 0){const je=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ye);be.push({offset:ye.startOffset,line:ye.startLine,column:ye.startColumn,length:ye.image.length,message:je})}else{O.pop();const je=xr(O);N=this.patternIdxToConfig[je],P=this.charCodeToPatternIdxToConfig[je],$=N.length;const Ge=this.canModeBeOptimized[je]&&this.config.safeMode===!1;P&&Ge?x=te:x=S}};function Yt(ye){O.push(ye),P=this.charCodeToPatternIdxToConfig[ye],N=this.patternIdxToConfig[ye],$=N.length,$=N.length;const je=this.canModeBeOptimized[ye]&&this.config.safeMode===!1;P&&je?x=te:x=S}Yt.call(this,n);let Le;const Xt=this.config.recoveryEnabled;for(;w<p;){c=null;const ye=h.charCodeAt(w),je=x(ye),Ge=je.length;for(r=0;r<Ge;r++){Le=je[r];const ve=Le.pattern;l=null;const ze=Le.short;if(ze!==!1?ye===ze&&(c=ve):Le.isCustom===!0?(_=ve.exec(h,w,J,A),_!==null?(c=_[0],_.payload!==void 0&&(l=_.payload)):c=null):(this.updateLastIndex(ve,w),c=this.match(ve,e,w)),c!==null){if(a=Le.longerAlt,a!==void 0){const Ae=a.length;for(s=0;s<Ae;s++){const V=N[a[s]],Ke=V.pattern;if(u=null,V.isCustom===!0?(_=Ke.exec(h,w,J,A),_!==null?(o=_[0],_.payload!==void 0&&(u=_.payload)):o=null):(this.updateLastIndex(Ke,w),o=this.match(Ke,e,w)),o&&o.length>c.length){c=o,l=u,Le=V;break}}}break}}if(c!==null){if(f=c.length,m=Le.group,m!==void 0&&(g=Le.tokenTypeIdx,d=this.createTokenInstance(c,w,g,Le.tokenType,Ee,Pe,f),this.handlePayload(d,l),m===!1?F=this.addToken(J,F,d):A[m].push(d)),e=this.chopInput(e,f),w=w+f,Pe=this.computeNewColumn(Pe,f),E===!0&&Le.canLineTerminator===!0){let ve=0,ze,Ae;b.lastIndex=0;do ze=b.test(c),ze===!0&&(Ae=b.lastIndex-1,ve++);while(ze===!0);ve!==0&&(Ee=Ee+ve,Pe=f-Ae,this.updateTokenEndLineColumnLocation(d,m,Ae,ve,Ee,Pe,f))}this.handleModes(Le,Vt,Yt,d)}else{const ve=w,ze=Ee,Ae=Pe;let V=Xt===!1;for(;V===!1&&w<p;)for(e=this.chopInput(e,1),w++,i=0;i<$;i++){const Ke=N[i],ue=Ke.pattern,ft=Ke.short;if(ft!==!1?h.charCodeAt(w)===ft&&(V=!0):Ke.isCustom===!0?V=ue.exec(h,w,J,A)!==null:(this.updateLastIndex(ue,w),V=ue.exec(e)!==null),V===!0)break}if(v=w-ve,Pe=this.computeNewColumn(Pe,v),R=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(h,ve,v,ze,Ae),be.push({offset:ve,line:ze,column:Ae,length:v,message:R}),Xt===!1)break}}return this.hasCustom||(J.length=F),{tokens:J,groups:A,errors:be}}handleModes(e,n,r,i){if(e.pop===!0){const s=e.push;n(i),s!==void 0&&r.call(this,s)}else e.push!==void 0&&r.call(this,e.push)}chopInput(e,n){return e.substring(n)}updateLastIndex(e,n){e.lastIndex=n}updateTokenEndLineColumnLocation(e,n,r,i,s,o,a){let c,l;n!==void 0&&(c=r===a-1,l=c?-1:0,i===1&&c===!0||(e.endLine=s+l,e.endColumn=o-1+-l))}computeNewColumn(e,n){return e+n}createOffsetOnlyToken(e,n,r,i){return{image:e,startOffset:n,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,n,r,i,s,o){return{image:e,startOffset:n,startLine:s,startColumn:o,tokenTypeIdx:r,tokenType:i}}createFullToken(e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:n+a-1,startLine:s,endLine:s,startColumn:o,endColumn:o+a-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,n,r){return e.push(r),n}addTokenUsingMemberAccess(e,n,r){return e[n]=r,n++,n}handlePayloadNoCustom(e,n){}handlePayloadWithCustom(e,n){n!==null&&(e.payload=n)}matchWithTest(e,n,r){return e.test(n)===!0?n.substring(r,e.lastIndex):null}matchWithExec(e,n){const r=e.exec(n);return r!==null?r[0]:null}}pt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";pt.NA=/NOT_APPLICABLE/;function Nr(t){return Lv(t)?t.LABEL:t.name}function Lv(t){return mt(t.LABEL)&&t.LABEL!==""}const Q$="parent",Dp="categories",Op="label",xp="group",Lp="push_mode",Mp="pop_mode",Fp="longer_alt",Hp="line_breaks",jp="start_chars_hint";function Mv(t){return Z$(t)}function Z$(t){const e=t.pattern,n={};if(n.name=t.name,bn(e)||(n.PATTERN=e),B(t,Q$))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return B(t,Dp)&&(n.CATEGORIES=t[Dp]),Ls([n]),B(t,Op)&&(n.LABEL=t[Op]),B(t,xp)&&(n.GROUP=t[xp]),B(t,Mp)&&(n.POP_MODE=t[Mp]),B(t,Lp)&&(n.PUSH_MODE=t[Lp]),B(t,Fp)&&(n.LONGER_ALT=t[Fp]),B(t,Hp)&&(n.LINE_BREAKS=t[Hp]),B(t,jp)&&(n.START_CHARS_HINT=t[jp]),n}const Gn=Mv({name:"EOF",pattern:pt.NA});Ls([Gn]);function Rh(t,e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:r,startLine:i,endLine:s,startColumn:o,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Fv(t,e){return xs(t,e)}const Pr={buildMismatchTokenMessage({expected:t,actual:e,previous:n,ruleName:r}){return`Expecting ${Lv(t)?`--> ${Nr(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:n,customUserDescription:r,ruleName:i}){const s="Expecting: ",a=`
but found: '`+Wt(e).image+"'";if(r)return s+r+a;{const c=ct(t,(m,g)=>m.concat(g),[]),l=M(c,m=>`[${M(m,g=>Nr(g)).join(", ")}]`),f=`one of these possible Token sequences:
${M(l,(m,g)=>`  ${g+1}. ${m}`).join(`
`)}`;return s+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:n,ruleName:r}){const i="Expecting: ",o=`
but found: '`+Wt(e).image+"'";if(n)return i+n+o;{const c=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${M(t,l=>`[${M(l,u=>Nr(u)).join(",")}]`).join(" ,")}>`;return i+c+o}}};Object.freeze(Pr);const eE={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},ir={buildDuplicateFoundError(t,e){function n(u){return u instanceof ge?u.terminalType.name:u instanceof lt?u.nonTerminalName:""}const r=t.name,i=Wt(e),s=i.idx,o=Qt(i),a=n(i),c=s>0;let l=`->${o}${c?s:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){const e=M(t.prefixPath,i=>Nr(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){const e=M(t.prefixPath,i=>Nr(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
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
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof ei?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function tE(t,e){const n=new nE(t,e);return n.resolveRefs(),n.errors}class nE extends ti{constructor(e,n){super(),this.nameToTopRule=e,this.errMsgProvider=n,this.errors=[]}resolveRefs(){q(Be(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){const n=this.nameToTopRule[e.nonTerminalName];if(n)e.referencedRule=n;else{const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:ut.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class rE extends Tl{constructor(e,n){super(),this.topProd=e,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Ze(this.path.ruleStack).reverse(),this.occurrenceStack=Ze(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,n=[]){this.found||super.walk(e,n)}walkProdRef(e,n,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){const i=n.concat(r);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){le(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}}class iE extends rE{constructor(e,n){super(e,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,n,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){const i=n.concat(r),s=new gt({definition:i});this.possibleTokTypes=Os(s),this.found=!0}}}class wl extends Tl{constructor(e,n){super(),this.topRule=e,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}}class sE extends wl{walkMany(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,n,r)}}class Up extends wl{walkManySep(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,n,r)}}class oE extends wl{walkAtLeastOne(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,n,r)}}class qp extends wl{walkAtLeastOneSep(e,n,r){if(e.idx===this.occurrence){const i=Wt(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,n,r)}}function Td(t,e,n=[]){n=Ze(n);let r=[],i=0;function s(a){return a.concat(Ve(t,i+1))}function o(a){const c=Td(s(a),e,n);return r.concat(c)}for(;n.length<e&&i<t.length;){const a=t[i];if(a instanceof gt)return o(a.definition);if(a instanceof lt)return o(a.definition);if(a instanceof Qe)r=o(a.definition);else if(a instanceof Ct){const c=a.definition.concat([new Ce({definition:a.definition})]);return o(c)}else if(a instanceof $t){const c=[new gt({definition:a.definition}),new Ce({definition:[new ge({terminalType:a.separator})].concat(a.definition)})];return o(c)}else if(a instanceof yt){const c=a.definition.concat([new Ce({definition:[new ge({terminalType:a.separator})].concat(a.definition)})]);r=o(c)}else if(a instanceof Ce){const c=a.definition.concat([new Ce({definition:a.definition})]);r=o(c)}else{if(a instanceof vt)return q(a.definition,c=>{le(c.definition)===!1&&(r=o(c.definition))}),r;if(a instanceof ge)n.push(a.terminalType);else throw Error("non exhaustive match")}i++}return r.push({partialPath:n,suffixDef:Ve(t,i)}),r}function Hv(t,e,n,r){const i="EXIT_NONE_TERMINAL",s=[i],o="EXIT_ALTERNATIVE";let a=!1;const c=e.length,l=c-r-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!le(f);){const m=f.pop();if(m===o){a&&xr(f).idx<=l&&f.pop();continue}const g=m.def,d=m.idx,v=m.ruleStack,R=m.occurrenceStack;if(le(g))continue;const _=g[0];if(_===i){const h={idx:d,def:Ve(g),ruleStack:ds(v),occurrenceStack:ds(R)};f.push(h)}else if(_ instanceof ge)if(d<c-1){const h=d+1,p=e[h];if(n(p,_.terminalType)){const w={idx:h,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(w)}}else if(d===c-1)u.push({nextTokenType:_.terminalType,nextTokenOccurrence:_.idx,ruleStack:v,occurrenceStack:R}),a=!0;else throw Error("non exhaustive match");else if(_ instanceof lt){const h=Ze(v);h.push(_.nonTerminalName);const p=Ze(R);p.push(_.idx);const w={idx:d,def:_.definition.concat(s,Ve(g)),ruleStack:h,occurrenceStack:p};f.push(w)}else if(_ instanceof Qe){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p={idx:d,def:_.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R};f.push(p)}else if(_ instanceof Ct){const h=new Ce({definition:_.definition,idx:_.idx}),p=_.definition.concat([h],Ve(g)),w={idx:d,def:p,ruleStack:v,occurrenceStack:R};f.push(w)}else if(_ instanceof $t){const h=new ge({terminalType:_.separator}),p=new Ce({definition:[h].concat(_.definition),idx:_.idx}),w=_.definition.concat([p],Ve(g)),F={idx:d,def:w,ruleStack:v,occurrenceStack:R};f.push(F)}else if(_ instanceof yt){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p=new ge({terminalType:_.separator}),w=new Ce({definition:[p].concat(_.definition),idx:_.idx}),F=_.definition.concat([w],Ve(g)),G={idx:d,def:F,ruleStack:v,occurrenceStack:R};f.push(G)}else if(_ instanceof Ce){const h={idx:d,def:Ve(g),ruleStack:v,occurrenceStack:R};f.push(h),f.push(o);const p=new Ce({definition:_.definition,idx:_.idx}),w=_.definition.concat([p],Ve(g)),F={idx:d,def:w,ruleStack:v,occurrenceStack:R};f.push(F)}else if(_ instanceof vt)for(let h=_.definition.length-1;h>=0;h--){const p=_.definition[h],w={idx:d,def:p.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R};f.push(w),f.push(o)}else if(_ instanceof gt)f.push({idx:d,def:_.definition.concat(Ve(g)),ruleStack:v,occurrenceStack:R});else if(_ instanceof ei)f.push(aE(_,d,v,R));else throw Error("non exhaustive match")}return u}function aE(t,e,n,r){const i=Ze(n);i.push(t.name);const s=Ze(r);return s.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:s}}var Te;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Te||(Te={}));function wh(t){if(t instanceof Qe||t==="Option")return Te.OPTION;if(t instanceof Ce||t==="Repetition")return Te.REPETITION;if(t instanceof Ct||t==="RepetitionMandatory")return Te.REPETITION_MANDATORY;if(t instanceof $t||t==="RepetitionMandatoryWithSeparator")return Te.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof yt||t==="RepetitionWithSeparator")return Te.REPETITION_WITH_SEPARATOR;if(t instanceof vt||t==="Alternation")return Te.ALTERNATION;throw Error("non exhaustive match")}function Bp(t){const{occurrence:e,rule:n,prodType:r,maxLookahead:i}=t,s=wh(r);return s===Te.ALTERNATION?bl(e,n,i):kl(e,n,s,i)}function cE(t,e,n,r,i,s){const o=bl(t,e,n),a=qv(o)?$c:xs;return s(o,r,a,i)}function lE(t,e,n,r,i,s){const o=kl(t,e,i,n),a=qv(o)?$c:xs;return s(o[0],a,r)}function uE(t,e,n,r){const i=t.length,s=qt(t,o=>qt(o,a=>a.length===1));if(e)return function(o){const a=M(o,c=>c.GATE);for(let c=0;c<i;c++){const l=t[c],u=l.length,f=a[c];if(!(f!==void 0&&f.call(this)===!1))e:for(let m=0;m<u;m++){const g=l[m],d=g.length;for(let v=0;v<d;v++){const R=this.LA(v+1);if(n(R,g[v])===!1)continue e}return c}}};if(s&&!r){const o=M(t,c=>It(c)),a=ct(o,(c,l,u)=>(q(l,f=>{B(c,f.tokenTypeIdx)||(c[f.tokenTypeIdx]=u),q(f.categoryMatches,m=>{B(c,m)||(c[m]=u)})}),c),{});return function(){const c=this.LA(1);return a[c.tokenTypeIdx]}}else return function(){for(let o=0;o<i;o++){const a=t[o],c=a.length;e:for(let l=0;l<c;l++){const u=a[l],f=u.length;for(let m=0;m<f;m++){const g=this.LA(m+1);if(n(g,u[m])===!1)continue e}return o}}}}function dE(t,e,n){const r=qt(t,s=>s.length===1),i=t.length;if(r&&!n){const s=It(t);if(s.length===1&&le(s[0].categoryMatches)){const a=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{const o=ct(s,(a,c,l)=>(a[c.tokenTypeIdx]=!0,q(c.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){const a=this.LA(1);return o[a.tokenTypeIdx]===!0}}}else return function(){e:for(let s=0;s<i;s++){const o=t[s],a=o.length;for(let c=0;c<a;c++){const l=this.LA(c+1);if(e(l,o[c])===!1)continue e}return!0}return!1}}class fE extends Tl{constructor(e,n,r){super(),this.topProd=e,this.targetOccurrence=n,this.targetProdType=r}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,n,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=r.concat(i),!0):!1}walkOption(e,n,r){this.checkIsTarget(e,Te.OPTION,n,r)||super.walkOption(e,n,r)}walkAtLeastOne(e,n,r){this.checkIsTarget(e,Te.REPETITION_MANDATORY,n,r)||super.walkOption(e,n,r)}walkAtLeastOneSep(e,n,r){this.checkIsTarget(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}walkMany(e,n,r){this.checkIsTarget(e,Te.REPETITION,n,r)||super.walkOption(e,n,r)}walkManySep(e,n,r){this.checkIsTarget(e,Te.REPETITION_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}}class jv extends ti{constructor(e,n,r){super(),this.targetOccurrence=e,this.targetProdType=n,this.targetRef=r,this.result=[]}checkIsTarget(e,n){e.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,Te.OPTION)}visitRepetition(e){this.checkIsTarget(e,Te.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,Te.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,Te.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,Te.ALTERNATION)}}function Kp(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=[];return e}function du(t){let e=[""];for(let n=0;n<t.length;n++){const r=t[n],i=[];for(let s=0;s<e.length;s++){const o=e[s];i.push(o+"_"+r.tokenTypeIdx);for(let a=0;a<r.categoryMatches.length;a++){const c="_"+r.categoryMatches[a];i.push(o+c)}}e=i}return e}function hE(t,e,n){for(let r=0;r<t.length;r++){if(r===n)continue;const i=t[r];for(let s=0;s<e.length;s++){const o=e[s];if(i[o]===!0)return!1}}return!0}function Uv(t,e){const n=M(t,o=>Td([o],1)),r=Kp(n.length),i=M(n,o=>{const a={};return q(o,c=>{const l=du(c.partialPath);q(l,u=>{a[u]=!0})}),a});let s=n;for(let o=1;o<=e;o++){const a=s;s=Kp(a.length);for(let c=0;c<a.length;c++){const l=a[c];for(let u=0;u<l.length;u++){const f=l[u].partialPath,m=l[u].suffixDef,g=du(f);if(hE(i,g,c)||le(m)||f.length===e){const v=r[c];if(Rd(v,f)===!1){v.push(f);for(let R=0;R<g.length;R++){const _=g[R];i[c][_]=!0}}}else{const v=Td(m,o+1,f);s[c]=s[c].concat(v),q(v,R=>{const _=du(R.partialPath);q(_,h=>{i[c][h]=!0})})}}}}return r}function bl(t,e,n,r){const i=new jv(t,Te.ALTERNATION,r);return e.accept(i),Uv(i.result,n)}function kl(t,e,n,r){const i=new jv(t,n);e.accept(i);const s=i.result,a=new fE(e,t,n).startWalking(),c=new gt({definition:s}),l=new gt({definition:a});return Uv([c,l],r)}function Rd(t,e){e:for(let n=0;n<t.length;n++){const r=t[n];if(r.length===e.length){for(let i=0;i<r.length;i++){const s=e[i],o=r[i];if((s===o||o.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function pE(t,e){return t.length<e.length&&qt(t,(n,r)=>{const i=e[r];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}function qv(t){return qt(t,e=>qt(e,n=>qt(n,r=>le(r.categoryMatches))))}function mE(t){const e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return M(e,n=>Object.assign({type:ut.CUSTOM_LOOKAHEAD_VALIDATION},n))}function gE(t,e,n,r){const i=bt(t,c=>yE(c,n)),s=PE(t,e,n),o=bt(t,c=>SE(c,n)),a=bt(t,c=>TE(c,t,r,n));return i.concat(s,o,a)}function yE(t,e){const n=new _E;t.accept(n);const r=n.allProductions,i=DC(r,vE),s=zt(i,a=>a.length>1);return M(Be(s),a=>{const c=Wt(a),l=e.buildDuplicateFoundError(t,a),u=Qt(c),f={message:l,type:ut.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:c.idx},m=Bv(c);return m&&(f.parameter=m),f})}function vE(t){return`${Qt(t)}_#_${t.idx}_#_${Bv(t)}`}function Bv(t){return t instanceof ge?t.terminalType.name:t instanceof lt?t.nonTerminalName:""}class _E extends ti{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function TE(t,e,n,r){const i=[];if(ct(e,(o,a)=>a.name===t.name?o+1:o,0)>1){const o=r.buildDuplicateRuleNameError({topLevelRule:t,grammarName:n});i.push({message:o,type:ut.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function RE(t,e,n){const r=[];let i;return dt(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,r.push({message:i,type:ut.INVALID_RULE_OVERRIDE,ruleName:t})),r}function Kv(t,e,n,r=[]){const i=[],s=fc(e.definition);if(le(s))return[];{const o=t.name;dt(s,t)&&i.push({message:n.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:r}),type:ut.LEFT_RECURSION,ruleName:o});const c=vl(s,r.concat([t])),l=bt(c,u=>{const f=Ze(r);return f.push(u),Kv(t,u,n,f)});return i.concat(l)}}function fc(t){let e=[];if(le(t))return e;const n=Wt(t);if(n instanceof lt)e.push(n.referencedRule);else if(n instanceof gt||n instanceof Qe||n instanceof Ct||n instanceof $t||n instanceof yt||n instanceof Ce)e=e.concat(fc(n.definition));else if(n instanceof vt)e=It(M(n.definition,s=>fc(s.definition)));else if(!(n instanceof ge))throw Error("non exhaustive match");const r=Sc(n),i=t.length>1;if(r&&i){const s=Ve(t);return e.concat(fc(s))}else return e}class bh extends ti{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}}function wE(t,e){const n=new bh;t.accept(n);const r=n.alternations;return bt(r,s=>{const o=ds(s.definition);return bt(o,(a,c)=>{const l=Hv([a],[],xs,1);return le(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:s,emptyChoiceIdx:c}),type:ut.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:s.idx,alternative:c+1}]:[]})})}function bE(t,e,n){const r=new bh;t.accept(r);let i=r.alternations;return i=_l(i,o=>o.ignoreAmbiguities===!0),bt(i,o=>{const a=o.idx,c=o.maxLookahead||e,l=bl(a,t,c,o),u=$E(l,o,t,n),f=EE(l,o,t,n);return u.concat(f)})}class kE extends ti{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function SE(t,e){const n=new bh;t.accept(n);const r=n.alternations;return bt(r,s=>s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:s}),type:ut.TOO_MANY_ALTS,ruleName:t.name,occurrence:s.idx}]:[])}function CE(t,e,n){const r=[];return q(t,i=>{const s=new kE;i.accept(s);const o=s.allProductions;q(o,a=>{const c=wh(a),l=a.maxLookahead||e,u=a.idx,m=kl(u,i,c,l)[0];if(le(It(m))){const g=n.buildEmptyRepetitionError({topLevelRule:i,repetition:a});r.push({message:g,type:ut.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),r}function $E(t,e,n,r){const i=[],s=ct(t,(a,c,l)=>(e.definition[l].ignoreAmbiguities===!0||q(c,u=>{const f=[l];q(t,(m,g)=>{l!==g&&Rd(m,u)&&e.definition[g].ignoreAmbiguities!==!0&&f.push(g)}),f.length>1&&!Rd(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return M(s,a=>{const c=M(a.alts,u=>u+1);return{message:r.buildAlternationAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:c,prefixPath:a.path}),type:ut.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:e.idx,alternatives:a.alts}})}function EE(t,e,n,r){const i=ct(t,(o,a,c)=>{const l=M(a,u=>({idx:c,path:u}));return o.concat(l)},[]);return Ds(bt(i,o=>{if(e.definition[o.idx].ignoreAmbiguities===!0)return[];const c=o.idx,l=o.path,u=St(i,m=>e.definition[m.idx].ignoreAmbiguities!==!0&&m.idx<c&&pE(m.path,l));return M(u,m=>{const g=[m.idx+1,c+1],d=e.idx===0?"":e.idx;return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:g,prefixPath:m.path}),type:ut.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:d,alternatives:g}})}))}function PE(t,e,n){const r=[],i=M(e,s=>s.name);return q(t,s=>{const o=s.name;if(dt(i,o)){const a=n.buildNamespaceConflictError(s);r.push({message:a,type:ut.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:o})}}),r}function AE(t){const e=vh(t,{errMsgProvider:eE}),n={};return q(t.rules,r=>{n[r.name]=r}),tE(n,e.errMsgProvider)}function NE(t){return t=vh(t,{errMsgProvider:ir}),gE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}const Wv="MismatchedTokenException",Gv="NoViableAltException",zv="EarlyExitException",Vv="NotAllInputParsedException",Yv=[Wv,Gv,zv,Vv];Object.freeze(Yv);function Ec(t){return dt(Yv,t.name)}class Sl extends Error{constructor(e,n){super(e),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class Xv extends Sl{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Wv}}class IE extends Sl{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Gv}}class DE extends Sl{constructor(e,n){super(e,n),this.name=Vv}}class OE extends Sl{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=zv}}const fu={},Jv="InRuleRecoveryException";class xE extends Error{constructor(e){super(e),this.name=Jv}}class LE{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=B(e,"recoveryEnabled")?e.recoveryEnabled:kn.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=ME)}getTokenToInsert(e){const n=Rh(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,n,r,i){const s=this.findReSyncTokenType(),o=this.exportLexerState(),a=[];let c=!1;const l=this.LA(1);let u=this.LA(1);const f=()=>{const m=this.LA(0),g=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:l,previous:m,ruleName:this.getCurrRuleFullName()}),d=new Xv(g,l,this.LA(0));d.resyncedTokens=ds(a),this.SAVE_ERROR(d)};for(;!c;)if(this.tokenMatcher(u,i)){f();return}else if(r.call(this)){f(),e.apply(this,n);return}else this.tokenMatcher(u,s)?c=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(o)}shouldInRepetitionRecoveryBeTried(e,n,r){return!(r===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,n)))}getFollowsForInRuleRecovery(e,n){const r=this.getCurrentGrammarPath(e,n);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,n){if(this.canRecoverWithSingleTokenInsertion(e,n))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){const r=this.SKIP_TOKEN();return this.consumeToken(),r}throw new xE("sad sad panda")}canPerformInRuleRecovery(e,n){return this.canRecoverWithSingleTokenInsertion(e,n)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,n){if(!this.canTokenTypeBeInsertedInRecovery(e)||le(n))return!1;const r=this.LA(1);return Lr(n,s=>this.tokenMatcher(r,s))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){const n=this.getCurrFollowKey(),r=this.getFollowSetFromFollowKey(n);return dt(r,e)}findReSyncTokenType(){const e=this.flattenFollowSet();let n=this.LA(1),r=2;for(;;){const i=Lr(e,s=>Fv(n,s));if(i!==void 0)return i;n=this.LA(r),r++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return fu;const e=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),r=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(r)}}buildFullFollowKeyStack(){const e=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return M(e,(r,i)=>i===0?fu:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){const e=M(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return It(e)}getFollowSetFromFollowKey(e){if(e===fu)return[Gn];const n=e.ruleName+e.idxInCallingRule+$v+e.inRule;return this.resyncFollows[n]}addToResyncTokens(e,n){return this.tokenMatcher(e,Gn)||n.push(e),n}reSyncTo(e){const n=[];let r=this.LA(1);for(;this.tokenMatcher(r,e)===!1;)r=this.SKIP_TOKEN(),this.addToResyncTokens(r,n);return ds(n)}attemptInRepetitionRecovery(e,n,r,i,s,o,a){}getCurrentGrammarPath(e,n){const r=this.getHumanReadableRuleStack(),i=Ze(this.RULE_OCCURRENCE_STACK);return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:n}}getHumanReadableRuleStack(){return M(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}}function ME(t,e,n,r,i,s,o){const a=this.getKeyForAutomaticLookahead(r,i);let c=this.firstAfterRepMap[a];if(c===void 0){const m=this.getCurrRuleFullName(),g=this.getGAstProductions()[m];c=new s(g,i).startWalking(),this.firstAfterRepMap[a]=c}let l=c.token,u=c.occurrence;const f=c.isEndOfRule;this.RULE_STACK.length===1&&f&&l===void 0&&(l=Gn,u=1),!(l===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,u,o)&&this.tryInRepetitionRecovery(t,e,n,l)}const FE=4,Qn=8,Qv=1<<Qn,Zv=2<<Qn,wd=3<<Qn,bd=4<<Qn,kd=5<<Qn,hc=6<<Qn;function hu(t,e,n){return n|e|t}class kh{constructor(e){var n;this.maxLookahead=(n=e==null?void 0:e.maxLookahead)!==null&&n!==void 0?n:kn.maxLookahead}validate(e){const n=this.validateNoLeftRecursion(e.rules);if(le(n)){const r=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...n,...r,...i,...s]}return n}validateNoLeftRecursion(e){return bt(e,n=>Kv(n,n,ir))}validateEmptyOrAlternatives(e){return bt(e,n=>wE(n,ir))}validateAmbiguousAlternationAlternatives(e,n){return bt(e,r=>bE(r,n,ir))}validateSomeNonEmptyLookaheadPath(e,n){return CE(e,n,ir)}buildLookaheadForAlternation(e){return cE(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,uE)}buildLookaheadForOptional(e){return lE(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,wh(e.prodType),dE)}}class HE{initLooksAhead(e){this.dynamicTokensEnabled=B(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:kn.dynamicTokensEnabled,this.maxLookahead=B(e,"maxLookahead")?e.maxLookahead:kn.maxLookahead,this.lookaheadStrategy=B(e,"lookaheadStrategy")?e.lookaheadStrategy:new kh({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){q(e,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{const{alternation:r,repetition:i,option:s,repetitionMandatory:o,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:c}=UE(n);q(r,l=>{const u=l.idx===0?"":l.idx;this.TRACE_INIT(`${Qt(l)}${u}`,()=>{const f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:n,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),m=hu(this.fullRuleNameToShort[n.name],Qv,l.idx);this.setLaFuncCache(m,f)})}),q(i,l=>{this.computeLookaheadFunc(n,l.idx,wd,"Repetition",l.maxLookahead,Qt(l))}),q(s,l=>{this.computeLookaheadFunc(n,l.idx,Zv,"Option",l.maxLookahead,Qt(l))}),q(o,l=>{this.computeLookaheadFunc(n,l.idx,bd,"RepetitionMandatory",l.maxLookahead,Qt(l))}),q(a,l=>{this.computeLookaheadFunc(n,l.idx,hc,"RepetitionMandatoryWithSeparator",l.maxLookahead,Qt(l))}),q(c,l=>{this.computeLookaheadFunc(n,l.idx,kd,"RepetitionWithSeparator",l.maxLookahead,Qt(l))})})})}computeLookaheadFunc(e,n,r,i,s,o){this.TRACE_INIT(`${o}${n===0?"":n}`,()=>{const a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),c=hu(this.fullRuleNameToShort[e.name],r,n);this.setLaFuncCache(c,a)})}getKeyForAutomaticLookahead(e,n){const r=this.getLastExplicitRuleShortName();return hu(r,e,n)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,n){this.lookAheadFuncsCache.set(e,n)}}class jE extends ti{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const Ro=new jE;function UE(t){Ro.reset(),t.accept(Ro);const e=Ro.dslMethods;return Ro.reset(),e}function Wp(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function Gp(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function qE(t,e,n){t.children[n]===void 0?t.children[n]=[e]:t.children[n].push(e)}function BE(t,e,n){t.children[e]===void 0?t.children[e]=[n]:t.children[e].push(n)}const KE="name";function e_(t,e){Object.defineProperty(t,KE,{enumerable:!1,configurable:!0,writable:!1,value:e})}function WE(t,e){const n=Lt(t),r=n.length;for(let i=0;i<r;i++){const s=n[i],o=t[s],a=o.length;for(let c=0;c<a;c++){const l=o[c];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function GE(t,e){const n=function(){};e_(n,t+"BaseSemantics");const r={visit:function(i,s){if(ee(i)&&(i=i[0]),!bn(i))return this[i.name](i.children,s)},validateVisitor:function(){const i=VE(this,e);if(!le(i)){const s=M(i,o=>o.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g,`
	`)}`)}}};return n.prototype=r,n.prototype.constructor=n,n._RULE_NAMES=e,n}function zE(t,e,n){const r=function(){};e_(r,t+"BaseSemanticsWithDefaults");const i=Object.create(n.prototype);return q(e,s=>{i[s]=WE}),r.prototype=i,r.prototype.constructor=r,r}var Sd;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(Sd||(Sd={}));function VE(t,e){return YE(t,e)}function YE(t,e){const n=St(e,i=>$n(t[i])===!1),r=M(n,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:Sd.MISSING_METHOD,methodName:i}));return Ds(r)}class XE{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=B(e,"nodeLocationTracking")?e.nodeLocationTracking:kn.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=qe,this.cstFinallyStateUpdate=qe,this.cstPostTerminal=qe,this.cstPostNonTerminal=qe,this.cstPostRule=qe;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Gp,this.setNodeLocationFromNode=Gp,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Wp,this.setNodeLocationFromNode=Wp,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=qe,this.setInitialNodeLocation=qe;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const n=this.LA(1);e.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){const n={name:e,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?(r.endOffset=n.endOffset,r.endLine=n.endLine,r.endColumn=n.endColumn):(r.startOffset=NaN,r.startLine=NaN,r.startColumn=NaN)}cstPostRuleOnlyOffset(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?r.endOffset=n.endOffset:r.startOffset=NaN}cstPostTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];qE(r,n,e),this.setNodeLocationFromToken(r.location,n)}cstPostNonTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];BE(r,n,e),this.setNodeLocationFromNode(r.location,e.location)}getBaseCstVisitorConstructor(){if(bn(this.baseCstVisitorConstructor)){const e=GE(this.className,Lt(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(bn(this.baseCstVisitorWithDefaultsConstructor)){const e=zE(this.className,Lt(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class JE{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Ac}LA(e){const n=this.currIdx+e;return n<0||this.tokVectorLength<=n?Ac:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class QE{ACTION(e){return e.call(this)}consume(e,n,r){return this.consumeInternal(n,e,r)}subrule(e,n,r){return this.subruleInternal(n,e,r)}option(e,n){return this.optionInternal(n,e)}or(e,n){return this.orInternal(n,e)}many(e,n){return this.manyInternal(e,n)}atLeastOne(e,n){return this.atLeastOneInternal(e,n)}CONSUME(e,n){return this.consumeInternal(e,0,n)}CONSUME1(e,n){return this.consumeInternal(e,1,n)}CONSUME2(e,n){return this.consumeInternal(e,2,n)}CONSUME3(e,n){return this.consumeInternal(e,3,n)}CONSUME4(e,n){return this.consumeInternal(e,4,n)}CONSUME5(e,n){return this.consumeInternal(e,5,n)}CONSUME6(e,n){return this.consumeInternal(e,6,n)}CONSUME7(e,n){return this.consumeInternal(e,7,n)}CONSUME8(e,n){return this.consumeInternal(e,8,n)}CONSUME9(e,n){return this.consumeInternal(e,9,n)}SUBRULE(e,n){return this.subruleInternal(e,0,n)}SUBRULE1(e,n){return this.subruleInternal(e,1,n)}SUBRULE2(e,n){return this.subruleInternal(e,2,n)}SUBRULE3(e,n){return this.subruleInternal(e,3,n)}SUBRULE4(e,n){return this.subruleInternal(e,4,n)}SUBRULE5(e,n){return this.subruleInternal(e,5,n)}SUBRULE6(e,n){return this.subruleInternal(e,6,n)}SUBRULE7(e,n){return this.subruleInternal(e,7,n)}SUBRULE8(e,n){return this.subruleInternal(e,8,n)}SUBRULE9(e,n){return this.subruleInternal(e,9,n)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,n,r=Nc){if(dt(this.definedRulesNames,e)){const o={message:ir.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ut.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);const i=this.defineRule(e,n,r);return this[e]=i,i}OVERRIDE_RULE(e,n,r=Nc){const i=RE(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,n,r);return this[e]=s,s}BACKTRACK(e,n){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{return e.apply(this,n),!0}catch(i){if(Ec(i))return!1;throw i}finally{this.reloadRecogState(r),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return a$(Be(this.gastProductionsCache))}}class ZE{initRecognizerEngine(e,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=$c,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},B(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ee(e)){if(le(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ee(e))this.tokensMap=ct(e,(s,o)=>(s[o.name]=o,s),{});else if(B(e,"modes")&&qt(It(Be(e.modes)),J$)){const s=It(Be(e.modes)),o=_h(s);this.tokensMap=ct(o,(a,c)=>(a[c.name]=c,a),{})}else if(xt(e))this.tokensMap=Ze(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Gn;const r=B(e,"modes")?It(Be(e.modes)):Be(e),i=qt(r,s=>le(s.categoryMatches));this.tokenMatcher=i?$c:xs,Ls(Be(this.tokensMap))}defineRule(e,n,r){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);const i=B(r,"resyncEnabled")?r.resyncEnabled:Nc.resyncEnabled,s=B(r,"recoveryValueFunc")?r.recoveryValueFunc:Nc.recoveryValueFunc,o=this.ruleShortNameIdx<<FE+Qn;this.ruleShortNameIdx++,this.shortRuleNameToFull[o]=e,this.fullRuleNameToShort[e]=o;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u);const f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:n})}invokeRuleCatch(e,n,r){const i=this.RULE_STACK.length===1,s=n&&!this.isBackTracking()&&this.recoveryEnabled;if(Ec(e)){const o=e;if(s){const a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(o.resyncedTokens=this.reSyncTo(a),this.outputCst){const c=this.CST_STACK[this.CST_STACK.length-1];return c.recoveredNode=!0,c}else return r(e);else{if(this.outputCst){const c=this.CST_STACK[this.CST_STACK.length-1];c.recoveredNode=!0,o.partialCstResult=c}throw o}}else{if(i)return this.moveToTerminatedState(),r(e);throw o}}else throw e}optionInternal(e,n){const r=this.getKeyForAutomaticLookahead(Zv,n);return this.optionInternalLogic(e,n,r)}optionInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof e!="function"){s=e.DEF;const o=e.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=e;if(i.call(this)===!0)return s.call(this)}atLeastOneInternal(e,n){const r=this.getKeyForAutomaticLookahead(bd,e);return this.atLeastOneInternalLogic(e,n,r)}atLeastOneInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const o=n.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=n;if(i.call(this)===!0){let o=this.doSingleRepetition(s);for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s)}else throw this.raiseEarlyExitException(e,Te.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,n],i,bd,e,oE)}atLeastOneSepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(hc,e);this.atLeastOneSepFirstInternalLogic(e,n,r)}atLeastOneSepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,qp],a,hc,e,qp)}else throw this.raiseEarlyExitException(e,Te.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(e,n){const r=this.getKeyForAutomaticLookahead(wd,e);return this.manyInternalLogic(e,n,r)}manyInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const a=n.GATE;if(a!==void 0){const c=i;i=()=>a.call(this)&&c.call(this)}}else s=n;let o=!0;for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s);this.attemptInRepetitionRecovery(this.manyInternal,[e,n],i,wd,e,sE,o)}manySepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(kd,e);this.manySepFirstInternalLogic(e,n,r)}manySepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,Up],a,kd,e,Up)}}repetitionSepSecondInternal(e,n,r,i,s){for(;r();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,n,r,i,s],r,hc,e,s)}doSingleRepetition(e){const n=this.getLexerPosition();return e.call(this),this.getLexerPosition()>n}orInternal(e,n){const r=this.getKeyForAutomaticLookahead(Qv,n),i=ee(e)?e:e.DEF,o=this.getLaFuncFromCache(r).call(this,i);if(o!==void 0)return i[o].ALT.call(this);this.raiseNoAltException(n,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){const e=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new DE(n,e))}}subruleInternal(e,n,r){let i;try{const s=r!==void 0?r.ARGS:void 0;return this.subruleIdx=n,i=e.apply(this,s),this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName),i}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,n,r){throw Ec(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:r),delete e.partialCstResult),e}consumeInternal(e,n,r){let i;try{const s=this.LA(1);this.tokenMatcher(s,e)===!0?(this.consumeToken(),i=s):this.consumeInternalError(e,s,r)}catch(s){i=this.consumeInternalRecovery(e,n,s)}return this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i),i}consumeInternalError(e,n,r){let i;const s=this.LA(0);throw r!==void 0&&r.ERR_MSG?i=r.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:n,previous:s,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Xv(i,n,s))}consumeInternalRecovery(e,n,r){if(this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking()){const i=this.getFollowsForInRuleRecovery(e,n);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===Jv?r:s}}else throw r}saveRecogState(){const e=this.errors,n=Ze(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,n,r){this.RULE_OCCURRENCE_STACK.push(r),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Gn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}}class eP{initErrorHandler(e){this._errors=[],this.errorMessageProvider=B(e,"errorMessageProvider")?e.errorMessageProvider:kn.errorMessageProvider}SAVE_ERROR(e){if(Ec(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Ze(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Ze(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,n,r){const i=this.getCurrRuleFullName(),s=this.getGAstProductions()[i],a=kl(e,s,n,this.maxLookahead)[0],c=[];for(let u=1;u<=this.maxLookahead;u++)c.push(this.LA(u));const l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:c,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new OE(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,n){const r=this.getCurrRuleFullName(),i=this.getGAstProductions()[r],s=bl(e,i,this.maxLookahead),o=[];for(let l=1;l<=this.maxLookahead;l++)o.push(this.LA(l));const a=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:o,previous:a,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new IE(c,this.LA(1),a))}}class tP{initContentAssist(){}computeContentAssist(e,n){const r=this.gastProductionsCache[e];if(bn(r))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Hv([r],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){const n=Wt(e.ruleStack),i=this.getGAstProductions()[n];return new iE(i,e).startWalking()}}const Cl={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Cl);const zp=!0,Vp=Math.pow(2,Qn)-1,t_=Mv({name:"RECORDING_PHASE_TOKEN",pattern:pt.NA});Ls([t_]);const n_=Rh(t_,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(n_);const nP={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class rP{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){const n=e>0?e:"";this[`CONSUME${n}`]=function(r,i){return this.consumeInternalRecord(r,e,i)},this[`SUBRULE${n}`]=function(r,i){return this.subruleInternalRecord(r,e,i)},this[`OPTION${n}`]=function(r){return this.optionInternalRecord(r,e)},this[`OR${n}`]=function(r){return this.orInternalRecord(r,e)},this[`MANY${n}`]=function(r){this.manyInternalRecord(e,r)},this[`MANY_SEP${n}`]=function(r){this.manySepFirstInternalRecord(e,r)},this[`AT_LEAST_ONE${n}`]=function(r){this.atLeastOneInternalRecord(e,r)},this[`AT_LEAST_ONE_SEP${n}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)}}this.consume=function(e,n,r){return this.consumeInternalRecord(n,e,r)},this.subrule=function(e,n,r){return this.subruleInternalRecord(n,e,r)},this.option=function(e,n){return this.optionInternalRecord(n,e)},this.or=function(e,n){return this.orInternalRecord(n,e)},this.many=function(e,n){this.manyInternalRecord(e,n)},this.atLeastOne=function(e,n){this.atLeastOneInternalRecord(e,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{const e=this;for(let n=0;n<10;n++){const r=n>0?n:"";delete e[`CONSUME${r}`],delete e[`SUBRULE${r}`],delete e[`OPTION${r}`],delete e[`OR${r}`],delete e[`MANY${r}`],delete e[`MANY_SEP${r}`],delete e[`AT_LEAST_ONE${r}`],delete e[`AT_LEAST_ONE_SEP${r}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,n){return()=>!0}LA_RECORD(e){return Ac}topLevelRuleRecord(e,n){try{const r=new ei({definition:[],name:e});return r.name=e,this.recordingProdStack.push(r),n.call(this),this.recordingProdStack.pop(),r}catch(r){if(r.KNOWN_RECORDER_ERROR!==!0)try{r.message=r.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}throw r}}optionInternalRecord(e,n){return yi.call(this,Qe,e,n)}atLeastOneInternalRecord(e,n){yi.call(this,Ct,n,e)}atLeastOneSepFirstInternalRecord(e,n){yi.call(this,$t,n,e,zp)}manyInternalRecord(e,n){yi.call(this,Ce,n,e)}manySepFirstInternalRecord(e,n){yi.call(this,yt,n,e,zp)}orInternalRecord(e,n){return iP.call(this,e,n)}subruleInternalRecord(e,n,r){if(Pc(n),!e||B(e,"ruleName")===!1){const a=new Error(`<SUBRULE${Yp(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}const i=xr(this.recordingProdStack),s=e.ruleName,o=new lt({idx:n,nonTerminalName:s,label:r==null?void 0:r.LABEL,referencedRule:void 0});return i.definition.push(o),this.outputCst?nP:Cl}consumeInternalRecord(e,n,r){if(Pc(n),!xv(e)){const o=new Error(`<CONSUME${Yp(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw o.KNOWN_RECORDER_ERROR=!0,o}const i=xr(this.recordingProdStack),s=new ge({idx:n,terminalType:e,label:r==null?void 0:r.LABEL});return i.definition.push(s),n_}}function yi(t,e,n,r=!1){Pc(n);const i=xr(this.recordingProdStack),s=$n(e)?e:e.DEF,o=new t({definition:[],idx:n});return r&&(o.separator=e.SEP),B(e,"MAX_LOOKAHEAD")&&(o.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(o),s.call(this),i.definition.push(o),this.recordingProdStack.pop(),Cl}function iP(t,e){Pc(e);const n=xr(this.recordingProdStack),r=ee(t)===!1,i=r===!1?t:t.DEF,s=new vt({definition:[],idx:e,ignoreAmbiguities:r&&t.IGNORE_AMBIGUITIES===!0});B(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD);const o=wv(i,a=>$n(a.GATE));return s.hasPredicates=o,n.definition.push(s),q(i,a=>{const c=new gt({definition:[]});s.definition.push(c),B(a,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:B(a,"GATE")&&(c.ignoreAmbiguities=!0),this.recordingProdStack.push(c),a.ALT.call(this),this.recordingProdStack.pop()}),Cl}function Yp(t){return t===0?"":`${t}`}function Pc(t){if(t<0||t>Vp){const e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${Vp+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}class sP{initPerformanceTracer(e){if(B(e,"traceInitPerf")){const n=e.traceInitPerf,r=typeof n=="number";this.traceInitMaxIdent=r?n:1/0,this.traceInitPerf=r?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=kn.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,n){if(this.traceInitPerf===!0){this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${r}--> <${e}>`);const{time:i,value:s}=Sv(n),o=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&o(`${r}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,s}else return n()}}function oP(t,e){e.forEach(n=>{const r=n.prototype;Object.getOwnPropertyNames(r).forEach(i=>{if(i==="constructor")return;const s=Object.getOwnPropertyDescriptor(r,i);s&&(s.get||s.set)?Object.defineProperty(t.prototype,i,s):t.prototype[i]=n.prototype[i]})})}const Ac=Rh(Gn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Ac);const kn=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Pr,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Nc=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0});var ut;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ut||(ut={}));function Xp(t=void 0){return function(){return t}}class Ms{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;const n=this.className;this.TRACE_INIT("toFastProps",()=>{Cv(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),q(this.definedRulesNames,i=>{const o=this[i].originalGrammarAction;let a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,o)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let r=[];if(this.TRACE_INIT("Grammar Resolving",()=>{r=AE({rules:Be(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(r)}),this.TRACE_INIT("Grammar Validations",()=>{if(le(r)&&this.skipValidations===!1){const i=NE({rules:Be(this.gastProductionsCache),tokenTypes:Be(this.tokensMap),errMsgProvider:ir,grammarName:n}),s=mE({lookaheadStrategy:this.lookaheadStrategy,rules:Be(this.gastProductionsCache),tokenTypes:Be(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,s)}}),le(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=p$(Be(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,s;(s=(i=this.lookaheadStrategy).initialize)===null||s===void 0||s.call(i,{rules:Be(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Be(this.gastProductionsCache))})),!Ms.DEFER_DEFINITION_ERRORS_HANDLING&&!le(this.definitionErrors))throw e=M(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,n){this.definitionErrors=[],this.selfAnalysisDone=!1;const r=this;if(r.initErrorHandler(n),r.initLexerAdapter(),r.initLooksAhead(n),r.initRecognizerEngine(e,n),r.initRecoverable(n),r.initTreeBuilder(n),r.initContentAssist(),r.initGastRecorder(n),r.initPerformanceTracer(n),B(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=B(n,"skipValidations")?n.skipValidations:kn.skipValidations}}Ms.DEFER_DEFINITION_ERRORS_HANDLING=!1;oP(Ms,[LE,HE,XE,JE,ZE,QE,eP,tP,rP,sP]);class aP extends Ms{constructor(e,n=kn){const r=Ze(n);r.outputCst=!1,super(e,r)}}function Mr(t,e,n){return`${t.name}_${e}_${n}`}const zn=1,cP=2,r_=4,i_=5,Fs=7,lP=8,uP=9,dP=10,fP=11,s_=12;class Sh{constructor(e){this.target=e}isEpsilon(){return!1}}class Ch extends Sh{constructor(e,n){super(e),this.tokenType=n}}class o_ extends Sh{constructor(e){super(e)}isEpsilon(){return!0}}class $h extends Sh{constructor(e,n,r){super(e),this.rule=n,this.followState=r}isEpsilon(){return!0}}function hP(t){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};pP(e,t);const n=t.length;for(let r=0;r<n;r++){const i=t[r],s=_r(e,i,i);s!==void 0&&SP(e,i,s)}return e}function pP(t,e){const n=e.length;for(let r=0;r<n;r++){const i=e[r],s=We(t,i,void 0,{type:cP}),o=We(t,i,void 0,{type:Fs});s.stop=o,t.ruleToStartState.set(i,s),t.ruleToStopState.set(i,o)}}function a_(t,e,n){return n instanceof ge?Eh(t,e,n.terminalType,n):n instanceof lt?kP(t,e,n):n instanceof vt?_P(t,e,n):n instanceof Qe?TP(t,e,n):n instanceof Ce?mP(t,e,n):n instanceof yt?gP(t,e,n):n instanceof Ct?yP(t,e,n):n instanceof $t?vP(t,e,n):_r(t,e,n)}function mP(t,e,n){const r=We(t,e,n,{type:i_});Zn(t,r);const i=ni(t,e,r,n,_r(t,e,n));return l_(t,e,n,i)}function gP(t,e,n){const r=We(t,e,n,{type:i_});Zn(t,r);const i=ni(t,e,r,n,_r(t,e,n)),s=Eh(t,e,n.separator,n);return l_(t,e,n,i,s)}function yP(t,e,n){const r=We(t,e,n,{type:r_});Zn(t,r);const i=ni(t,e,r,n,_r(t,e,n));return c_(t,e,n,i)}function vP(t,e,n){const r=We(t,e,n,{type:r_});Zn(t,r);const i=ni(t,e,r,n,_r(t,e,n)),s=Eh(t,e,n.separator,n);return c_(t,e,n,i,s)}function _P(t,e,n){const r=We(t,e,n,{type:zn});Zn(t,r);const i=M(n.definition,o=>a_(t,e,o));return ni(t,e,r,n,...i)}function TP(t,e,n){const r=We(t,e,n,{type:zn});Zn(t,r);const i=ni(t,e,r,n,_r(t,e,n));return RP(t,e,n,i)}function _r(t,e,n){const r=St(M(n.definition,i=>a_(t,e,i)),i=>i!==void 0);return r.length===1?r[0]:r.length===0?void 0:bP(t,r)}function c_(t,e,n,r,i){const s=r.left,o=r.right,a=We(t,e,n,{type:fP});Zn(t,a);const c=We(t,e,n,{type:s_});return s.loopback=a,c.loopback=a,t.decisionMap[Mr(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",n.idx)]=a,Me(o,a),i===void 0?(Me(a,s),Me(a,c)):(Me(a,c),Me(a,i.left),Me(i.right,s)),{left:s,right:c}}function l_(t,e,n,r,i){const s=r.left,o=r.right,a=We(t,e,n,{type:dP});Zn(t,a);const c=We(t,e,n,{type:s_}),l=We(t,e,n,{type:uP});return a.loopback=l,c.loopback=l,Me(a,s),Me(a,c),Me(o,l),i!==void 0?(Me(l,c),Me(l,i.left),Me(i.right,s)):Me(l,a),t.decisionMap[Mr(e,i?"RepetitionWithSeparator":"Repetition",n.idx)]=a,{left:a,right:c}}function RP(t,e,n,r){const i=r.left,s=r.right;return Me(i,s),t.decisionMap[Mr(e,"Option",n.idx)]=i,r}function Zn(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function ni(t,e,n,r,...i){const s=We(t,e,r,{type:lP,start:n});n.end=s;for(const a of i)a!==void 0?(Me(n,a.left),Me(a.right,s)):Me(n,s);const o={left:n,right:s};return t.decisionMap[Mr(e,wP(r),r.idx)]=n,o}function wP(t){if(t instanceof vt)return"Alternation";if(t instanceof Qe)return"Option";if(t instanceof Ce)return"Repetition";if(t instanceof yt)return"RepetitionWithSeparator";if(t instanceof Ct)return"RepetitionMandatory";if(t instanceof $t)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function bP(t,e){const n=e.length;for(let s=0;s<n-1;s++){const o=e[s];let a;o.left.transitions.length===1&&(a=o.left.transitions[0]);const c=a instanceof $h,l=a,u=e[s+1].left;o.left.type===zn&&o.right.type===zn&&a!==void 0&&(c&&l.followState===o.right||a.target===o.right)?(c?l.followState=u:a.target=u,CP(t,o.right)):Me(o.right,u)}const r=e[0],i=e[n-1];return{left:r.left,right:i.right}}function Eh(t,e,n,r){const i=We(t,e,r,{type:zn}),s=We(t,e,r,{type:zn});return Ph(i,new Ch(s,n)),{left:i,right:s}}function kP(t,e,n){const r=n.referencedRule,i=t.ruleToStartState.get(r),s=We(t,e,n,{type:zn}),o=We(t,e,n,{type:zn}),a=new $h(i,r,o);return Ph(s,a),{left:s,right:o}}function SP(t,e,n){const r=t.ruleToStartState.get(e);Me(r,n.left);const i=t.ruleToStopState.get(e);return Me(n.right,i),{left:r,right:i}}function Me(t,e){const n=new o_(e);Ph(t,n)}function We(t,e,n,r){const i=Object.assign({atn:t,production:n,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},r);return t.states.push(i),i}function Ph(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function CP(t,e){t.states.splice(t.states.indexOf(e),1)}const Ic={};class Cd{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){const n=u_(e);n in this.map||(this.map[n]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return M(this.configs,e=>e.alt)}get key(){let e="";for(const n in this.map)e+=n+":";return e}}function u_(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(n=>n.stateNumber.toString()).join("_")}`}function $P(t,e){const n={};return r=>{const i=r.toString();let s=n[i];return s!==void 0||(s={atnStartState:t,decision:e,states:{}},n[i]=s),s}}class d_{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,n){this.predicates[e]=n}toString(){let e="";const n=this.predicates.length;for(let r=0;r<n;r++)e+=this.predicates[r]===!0?"1":"0";return e}}const Jp=new d_;class EP extends kh{constructor(e){var n;super(),this.logging=(n=e==null?void 0:e.logging)!==null&&n!==void 0?n:r=>console.log(r)}initialize(e){this.atn=hP(e.rules),this.dfas=PP(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){const{prodOccurrence:n,rule:r,hasPredicates:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,c=Mr(r,"Alternation",n),u=this.atn.decisionMap[c].decision,f=M(Bp({maxLookahead:1,occurrence:n,prodType:"Alternation",rule:r}),m=>M(m,g=>g[0]));if(Qp(f,!1)&&!s){const m=ct(f,(g,d,v)=>(q(d,R=>{R&&(g[R.tokenTypeIdx]=v,q(R.categoryMatches,_=>{g[_]=v}))}),g),{});return i?function(g){var d;const v=this.LA(1),R=m[v.tokenTypeIdx];if(g!==void 0&&R!==void 0){const _=(d=g[R])===null||d===void 0?void 0:d.GATE;if(_!==void 0&&_.call(this)===!1)return}return R}:function(){const g=this.LA(1);return m[g.tokenTypeIdx]}}else return i?function(m){const g=new d_,d=m===void 0?0:m.length;for(let R=0;R<d;R++){const _=m==null?void 0:m[R].GATE;g.set(R,_===void 0||_.call(this))}const v=pu.call(this,o,u,g,a);return typeof v=="number"?v:void 0}:function(){const m=pu.call(this,o,u,Jp,a);return typeof m=="number"?m:void 0}}buildLookaheadForOptional(e){const{prodOccurrence:n,rule:r,prodType:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,c=Mr(r,i,n),u=this.atn.decisionMap[c].decision,f=M(Bp({maxLookahead:1,occurrence:n,prodType:i,rule:r}),m=>M(m,g=>g[0]));if(Qp(f)&&f[0][0]&&!s){const m=f[0],g=It(m);if(g.length===1&&le(g[0].categoryMatches)){const v=g[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===v}}else{const d=ct(g,(v,R)=>(R!==void 0&&(v[R.tokenTypeIdx]=!0,q(R.categoryMatches,_=>{v[_]=!0})),v),{});return function(){const v=this.LA(1);return d[v.tokenTypeIdx]===!0}}}return function(){const m=pu.call(this,o,u,Jp,a);return typeof m=="object"?!1:m===0}}}function Qp(t,e=!0){const n=new Set;for(const r of t){const i=new Set;for(const s of r){if(s===void 0){if(e)break;return!1}const o=[s.tokenTypeIdx].concat(s.categoryMatches);for(const a of o)if(n.has(a)){if(!i.has(a))return!1}else n.add(a),i.add(a)}}return!0}function PP(t){const e=t.decisionStates.length,n=Array(e);for(let r=0;r<e;r++)n[r]=$P(t.decisionStates[r],r);return n}function pu(t,e,n,r){const i=t[e](n);let s=i.start;if(s===void 0){const a=jP(i.atnStartState);s=h_(i,f_(a)),i.start=s}return AP.apply(this,[i,s,n,r])}function AP(t,e,n,r){let i=e,s=1;const o=[];let a=this.LA(s++);for(;;){let c=LP(i,a);if(c===void 0&&(c=NP.apply(this,[t,i,a,s,n,r])),c===Ic)return xP(o,i,a);if(c.isAcceptState===!0)return c.prediction;i=c,o.push(a),a=this.LA(s++)}}function NP(t,e,n,r,i,s){const o=MP(e.configs,n,i);if(o.size===0)return Zp(t,e,n,Ic),Ic;let a=f_(o);const c=HP(o,i);if(c!==void 0)a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c;else if(KP(o)){const l=VC(o.alts);a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l,IP.apply(this,[t,r,o.alts,s])}return a=Zp(t,e,n,a),a}function IP(t,e,n,r){const i=[];for(let l=1;l<=e;l++)i.push(this.LA(l).tokenType);const s=t.atnStartState,o=s.rule,a=s.production,c=DP({topLevelRule:o,ambiguityIndices:n,production:a,prefixPath:i});r(c)}function DP(t){const e=M(t.prefixPath,i=>Nr(i)).join(", "),n=t.production.idx===0?"":t.production.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${OP(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r}function OP(t){if(t instanceof lt)return"SUBRULE";if(t instanceof Qe)return"OPTION";if(t instanceof vt)return"OR";if(t instanceof Ct)return"AT_LEAST_ONE";if(t instanceof $t)return"AT_LEAST_ONE_SEP";if(t instanceof yt)return"MANY_SEP";if(t instanceof Ce)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}function xP(t,e,n){const r=bt(e.configs.elements,s=>s.state.transitions),i=i$(r.filter(s=>s instanceof Ch).map(s=>s.tokenType),s=>s.tokenTypeIdx);return{actualToken:n,possibleTokenTypes:i,tokenPath:t}}function LP(t,e){return t.edges[e.tokenTypeIdx]}function MP(t,e,n){const r=new Cd,i=[];for(const o of t.elements){if(n.is(o.alt)===!1)continue;if(o.state.type===Fs){i.push(o);continue}const a=o.state.transitions.length;for(let c=0;c<a;c++){const l=o.state.transitions[c],u=FP(l,e);u!==void 0&&r.add({state:u,alt:o.alt,stack:o.stack})}}let s;if(i.length===0&&r.size===1&&(s=r),s===void 0){s=new Cd;for(const o of r.elements)Dc(o,s)}if(i.length>0&&!qP(s))for(const o of i)s.add(o);return s}function FP(t,e){if(t instanceof Ch&&Fv(e,t.tokenType))return t.target}function HP(t,e){let n;for(const r of t.elements)if(e.is(r.alt)===!0){if(n===void 0)n=r.alt;else if(n!==r.alt)return}return n}function f_(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function Zp(t,e,n,r){return r=h_(t,r),e.edges[n.tokenTypeIdx]=r,r}function h_(t,e){if(e===Ic)return e;const n=e.configs.key,r=t.states[n];return r!==void 0?r:(e.configs.finalize(),t.states[n]=e,e)}function jP(t){const e=new Cd,n=t.transitions.length;for(let r=0;r<n;r++){const s={state:t.transitions[r].target,alt:r,stack:[]};Dc(s,e)}return e}function Dc(t,e){const n=t.state;if(n.type===Fs){if(t.stack.length>0){const i=[...t.stack],o={state:i.pop(),alt:t.alt,stack:i};Dc(o,e)}else e.add(t);return}n.epsilonOnlyTransitions||e.add(t);const r=n.transitions.length;for(let i=0;i<r;i++){const s=n.transitions[i],o=UP(t,s);o!==void 0&&Dc(o,e)}}function UP(t,e){if(e instanceof o_)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof $h){const n=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:n}}}function qP(t){for(const e of t.elements)if(e.state.type===Fs)return!0;return!1}function BP(t){for(const e of t.elements)if(e.state.type!==Fs)return!1;return!0}function KP(t){if(BP(t))return!0;const e=WP(t.elements);return GP(e)&&!zP(e)}function WP(t){const e=new Map;for(const n of t){const r=u_(n,!1);let i=e.get(r);i===void 0&&(i={},e.set(r,i)),i[n.alt]=!0}return e}function GP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function zP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var $d;(function(t){function e(n){return typeof n=="string"}t.is=e})($d||($d={}));var Oc;(function(t){function e(n){return typeof n=="string"}t.is=e})(Oc||(Oc={}));var Ed;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Ed||(Ed={}));var fs;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(fs||(fs={}));var re;(function(t){function e(r,i){return r===Number.MAX_VALUE&&(r=fs.MAX_VALUE),i===Number.MAX_VALUE&&(i=fs.MAX_VALUE),{line:r,character:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&k.uinteger(i.line)&&k.uinteger(i.character)}t.is=n})(re||(re={}));var Q;(function(t){function e(r,i,s,o){if(k.uinteger(r)&&k.uinteger(i)&&k.uinteger(s)&&k.uinteger(o))return{start:re.create(r,i),end:re.create(s,o)};if(re.is(r)&&re.is(i))return{start:r,end:i};throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`)}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&re.is(i.start)&&re.is(i.end)}t.is=n})(Q||(Q={}));var hs;(function(t){function e(r,i){return{uri:r,range:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.range)&&(k.string(i.uri)||k.undefined(i.uri))}t.is=n})(hs||(hs={}));var Pd;(function(t){function e(r,i,s,o){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:o}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.targetRange)&&k.string(i.targetUri)&&Q.is(i.targetSelectionRange)&&(Q.is(i.originSelectionRange)||k.undefined(i.originSelectionRange))}t.is=n})(Pd||(Pd={}));var xc;(function(t){function e(r,i,s,o){return{red:r,green:i,blue:s,alpha:o}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.numberRange(i.red,0,1)&&k.numberRange(i.green,0,1)&&k.numberRange(i.blue,0,1)&&k.numberRange(i.alpha,0,1)}t.is=n})(xc||(xc={}));var Ad;(function(t){function e(r,i){return{range:r,color:i}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&Q.is(i.range)&&xc.is(i.color)}t.is=n})(Ad||(Ad={}));var Nd;(function(t){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.string(i.label)&&(k.undefined(i.textEdit)||Bt.is(i))&&(k.undefined(i.additionalTextEdits)||k.typedArray(i.additionalTextEdits,Bt.is))}t.is=n})(Nd||(Nd={}));var Id;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Id||(Id={}));var Dd;(function(t){function e(r,i,s,o,a,c){const l={startLine:r,endLine:i};return k.defined(s)&&(l.startCharacter=s),k.defined(o)&&(l.endCharacter=o),k.defined(a)&&(l.kind=a),k.defined(c)&&(l.collapsedText=c),l}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.uinteger(i.startLine)&&k.uinteger(i.startLine)&&(k.undefined(i.startCharacter)||k.uinteger(i.startCharacter))&&(k.undefined(i.endCharacter)||k.uinteger(i.endCharacter))&&(k.undefined(i.kind)||k.string(i.kind))}t.is=n})(Dd||(Dd={}));var Lc;(function(t){function e(r,i){return{location:r,message:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&hs.is(i.location)&&k.string(i.message)}t.is=n})(Lc||(Lc={}));var Od;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Od||(Od={}));var xd;(function(t){t.Unnecessary=1,t.Deprecated=2})(xd||(xd={}));var Ld;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&k.string(r.href)}t.is=e})(Ld||(Ld={}));var ps;(function(t){function e(r,i,s,o,a,c){let l={range:r,message:i};return k.defined(s)&&(l.severity=s),k.defined(o)&&(l.code=o),k.defined(a)&&(l.source=a),k.defined(c)&&(l.relatedInformation=c),l}t.create=e;function n(r){var i;let s=r;return k.defined(s)&&Q.is(s.range)&&k.string(s.message)&&(k.number(s.severity)||k.undefined(s.severity))&&(k.integer(s.code)||k.string(s.code)||k.undefined(s.code))&&(k.undefined(s.codeDescription)||k.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(k.string(s.source)||k.undefined(s.source))&&(k.undefined(s.relatedInformation)||k.typedArray(s.relatedInformation,Lc.is))}t.is=n})(ps||(ps={}));var hr;(function(t){function e(r,i,...s){let o={title:r,command:i};return k.defined(s)&&s.length>0&&(o.arguments=s),o}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.title)&&k.string(i.command)}t.is=n})(hr||(hr={}));var Bt;(function(t){function e(s,o){return{range:s,newText:o}}t.replace=e;function n(s,o){return{range:{start:s,end:s},newText:o}}t.insert=n;function r(s){return{range:s,newText:""}}t.del=r;function i(s){const o=s;return k.objectLiteral(o)&&k.string(o.newText)&&Q.is(o.range)}t.is=i})(Bt||(Bt={}));var or;(function(t){function e(r,i,s){const o={label:r};return i!==void 0&&(o.needsConfirmation=i),s!==void 0&&(o.description=s),o}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.string(i.label)&&(k.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(k.string(i.description)||i.description===void 0)}t.is=n})(or||(or={}));var Xe;(function(t){function e(n){const r=n;return k.string(r)}t.is=e})(Xe||(Xe={}));var mn;(function(t){function e(s,o,a){return{range:s,newText:o,annotationId:a}}t.replace=e;function n(s,o,a){return{range:{start:s,end:s},newText:o,annotationId:a}}t.insert=n;function r(s,o){return{range:s,newText:"",annotationId:o}}t.del=r;function i(s){const o=s;return Bt.is(o)&&(or.is(o.annotationId)||Xe.is(o.annotationId))}t.is=i})(mn||(mn={}));var ms;(function(t){function e(r,i){return{textDocument:r,edits:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&gs.is(i.textDocument)&&Array.isArray(i.edits)}t.is=n})(ms||(ms={}));var Fr;(function(t){function e(r,i,s){let o={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="create"&&k.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||k.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||k.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Fr||(Fr={}));var Hr;(function(t){function e(r,i,s,o){let a={kind:"rename",oldUri:r,newUri:i};return s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)&&(a.options=s),o!==void 0&&(a.annotationId=o),a}t.create=e;function n(r){let i=r;return i&&i.kind==="rename"&&k.string(i.oldUri)&&k.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||k.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||k.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(Hr||(Hr={}));var jr;(function(t){function e(r,i,s){let o={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="delete"&&k.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||k.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||k.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Xe.is(i.annotationId))}t.is=n})(jr||(jr={}));var Mc;(function(t){function e(n){let r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i=>k.string(i.kind)?Fr.is(i)||Hr.is(i)||jr.is(i):ms.is(i)))}t.is=e})(Mc||(Mc={}));class wo{constructor(e,n){this.edits=e,this.changeAnnotations=n}insert(e,n,r){let i,s;if(r===void 0?i=Bt.insert(e,n):Xe.is(r)?(s=r,i=mn.insert(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.insert(e,n,s)),this.edits.push(i),s!==void 0)return s}replace(e,n,r){let i,s;if(r===void 0?i=Bt.replace(e,n):Xe.is(r)?(s=r,i=mn.replace(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.replace(e,n,s)),this.edits.push(i),s!==void 0)return s}delete(e,n){let r,i;if(n===void 0?r=Bt.del(e):Xe.is(n)?(i=n,r=mn.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=mn.del(e,i)),this.edits.push(r),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}}class em{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,n){let r;if(Xe.is(e)?r=e:(r=this.nextId(),n=e),this._annotations[r]!==void 0)throw new Error(`Id ${r} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${r}`);return this._annotations[r]=n,this._size++,r}nextId(){return this._counter++,this._counter.toString()}}class VP{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new em(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(n=>{if(ms.is(n)){const r=new wo(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach(n=>{const r=new wo(e.changes[n]);this._textEditChanges[n]=r})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(gs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");const n={uri:e.uri,version:e.version};let r=this._textEditChanges[n.uri];if(!r){const i=[],s={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(s),r=new wo(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[e];if(!n){let r=[];this._workspaceEdit.changes[e]=r,n=new wo(r),this._textEditChanges[e]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new em,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;or.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Fr.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=Fr.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}renameFile(e,n,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let s;or.is(r)||Xe.is(r)?s=r:i=r;let o,a;if(s===void 0?o=Hr.create(e,n,i):(a=Xe.is(s)?s:this._changeAnnotations.manage(s),o=Hr.create(e,n,i,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a}deleteFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;or.is(n)||Xe.is(n)?i=n:r=n;let s,o;if(i===void 0?s=jr.create(e,r):(o=Xe.is(i)?i:this._changeAnnotations.manage(i),s=jr.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}}var Md;(function(t){function e(r){return{uri:r}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)}t.is=n})(Md||(Md={}));var Fd;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&k.integer(i.version)}t.is=n})(Fd||(Fd={}));var gs;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&(i.version===null||k.integer(i.version))}t.is=n})(gs||(gs={}));var Hd;(function(t){function e(r,i,s,o){return{uri:r,languageId:i,version:s,text:o}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&k.string(i.languageId)&&k.integer(i.version)&&k.string(i.text)}t.is=n})(Hd||(Hd={}));var Fc;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(n){const r=n;return r===t.PlainText||r===t.Markdown}t.is=e})(Fc||(Fc={}));var Ur;(function(t){function e(n){const r=n;return k.objectLiteral(n)&&Fc.is(r.kind)&&k.string(r.value)}t.is=e})(Ur||(Ur={}));var jd;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(jd||(jd={}));var Ud;(function(t){t.PlainText=1,t.Snippet=2})(Ud||(Ud={}));var qd;(function(t){t.Deprecated=1})(qd||(qd={}));var Bd;(function(t){function e(r,i,s){return{newText:r,insert:i,replace:s}}t.create=e;function n(r){const i=r;return i&&k.string(i.newText)&&Q.is(i.insert)&&Q.is(i.replace)}t.is=n})(Bd||(Bd={}));var Kd;(function(t){t.asIs=1,t.adjustIndentation=2})(Kd||(Kd={}));var Wd;(function(t){function e(n){const r=n;return r&&(k.string(r.detail)||r.detail===void 0)&&(k.string(r.description)||r.description===void 0)}t.is=e})(Wd||(Wd={}));var Gd;(function(t){function e(n){return{label:n}}t.create=e})(Gd||(Gd={}));var zd;(function(t){function e(n,r){return{items:n||[],isIncomplete:!!r}}t.create=e})(zd||(zd={}));var ys;(function(t){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function n(r){const i=r;return k.string(i)||k.objectLiteral(i)&&k.string(i.language)&&k.string(i.value)}t.is=n})(ys||(ys={}));var Vd;(function(t){function e(n){let r=n;return!!r&&k.objectLiteral(r)&&(Ur.is(r.contents)||ys.is(r.contents)||k.typedArray(r.contents,ys.is))&&(n.range===void 0||Q.is(n.range))}t.is=e})(Vd||(Vd={}));var Yd;(function(t){function e(n,r){return r?{label:n,documentation:r}:{label:n}}t.create=e})(Yd||(Yd={}));var Xd;(function(t){function e(n,r,...i){let s={label:n};return k.defined(r)&&(s.documentation=r),k.defined(i)?s.parameters=i:s.parameters=[],s}t.create=e})(Xd||(Xd={}));var Jd;(function(t){t.Text=1,t.Read=2,t.Write=3})(Jd||(Jd={}));var Qd;(function(t){function e(n,r){let i={range:n};return k.number(r)&&(i.kind=r),i}t.create=e})(Qd||(Qd={}));var Zd;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Zd||(Zd={}));var ef;(function(t){t.Deprecated=1})(ef||(ef={}));var tf;(function(t){function e(n,r,i,s,o){let a={name:n,kind:r,location:{uri:s,range:i}};return o&&(a.containerName=o),a}t.create=e})(tf||(tf={}));var nf;(function(t){function e(n,r,i,s){return s!==void 0?{name:n,kind:r,location:{uri:i,range:s}}:{name:n,kind:r,location:{uri:i}}}t.create=e})(nf||(nf={}));var rf;(function(t){function e(r,i,s,o,a,c){let l={name:r,detail:i,kind:s,range:o,selectionRange:a};return c!==void 0&&(l.children=c),l}t.create=e;function n(r){let i=r;return i&&k.string(i.name)&&k.number(i.kind)&&Q.is(i.range)&&Q.is(i.selectionRange)&&(i.detail===void 0||k.string(i.detail))&&(i.deprecated===void 0||k.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=n})(rf||(rf={}));var sf;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(sf||(sf={}));var vs;(function(t){t.Invoked=1,t.Automatic=2})(vs||(vs={}));var of;(function(t){function e(r,i,s){let o={diagnostics:r};return i!=null&&(o.only=i),s!=null&&(o.triggerKind=s),o}t.create=e;function n(r){let i=r;return k.defined(i)&&k.typedArray(i.diagnostics,ps.is)&&(i.only===void 0||k.typedArray(i.only,k.string))&&(i.triggerKind===void 0||i.triggerKind===vs.Invoked||i.triggerKind===vs.Automatic)}t.is=n})(of||(of={}));var af;(function(t){function e(r,i,s){let o={title:r},a=!0;return typeof i=="string"?(a=!1,o.kind=i):hr.is(i)?o.command=i:o.edit=i,a&&s!==void 0&&(o.kind=s),o}t.create=e;function n(r){let i=r;return i&&k.string(i.title)&&(i.diagnostics===void 0||k.typedArray(i.diagnostics,ps.is))&&(i.kind===void 0||k.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||hr.is(i.command))&&(i.isPreferred===void 0||k.boolean(i.isPreferred))&&(i.edit===void 0||Mc.is(i.edit))}t.is=n})(af||(af={}));var cf;(function(t){function e(r,i){let s={range:r};return k.defined(i)&&(s.data=i),s}t.create=e;function n(r){let i=r;return k.defined(i)&&Q.is(i.range)&&(k.undefined(i.command)||hr.is(i.command))}t.is=n})(cf||(cf={}));var lf;(function(t){function e(r,i){return{tabSize:r,insertSpaces:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.uinteger(i.tabSize)&&k.boolean(i.insertSpaces)}t.is=n})(lf||(lf={}));var uf;(function(t){function e(r,i,s){return{range:r,target:i,data:s}}t.create=e;function n(r){let i=r;return k.defined(i)&&Q.is(i.range)&&(k.undefined(i.target)||k.string(i.target))}t.is=n})(uf||(uf={}));var df;(function(t){function e(r,i){return{range:r,parent:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=n})(df||(df={}));var ff;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(ff||(ff={}));var hf;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(hf||(hf={}));var pf;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}t.is=e})(pf||(pf={}));var mf;(function(t){function e(r,i){return{range:r,text:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&k.string(i.text)}t.is=n})(mf||(mf={}));var gf;(function(t){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&k.boolean(i.caseSensitiveLookup)&&(k.string(i.variableName)||i.variableName===void 0)}t.is=n})(gf||(gf={}));var yf;(function(t){function e(r,i){return{range:r,expression:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&(k.string(i.expression)||i.expression===void 0)}t.is=n})(yf||(yf={}));var vf;(function(t){function e(r,i){return{frameId:r,stoppedLocation:i}}t.create=e;function n(r){const i=r;return k.defined(i)&&Q.is(r.stoppedLocation)}t.is=n})(vf||(vf={}));var Hc;(function(t){t.Type=1,t.Parameter=2;function e(n){return n===1||n===2}t.is=e})(Hc||(Hc={}));var jc;(function(t){function e(r){return{value:r}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&(i.tooltip===void 0||k.string(i.tooltip)||Ur.is(i.tooltip))&&(i.location===void 0||hs.is(i.location))&&(i.command===void 0||hr.is(i.command))}t.is=n})(jc||(jc={}));var _f;(function(t){function e(r,i,s){const o={position:r,label:i};return s!==void 0&&(o.kind=s),o}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&re.is(i.position)&&(k.string(i.label)||k.typedArray(i.label,jc.is))&&(i.kind===void 0||Hc.is(i.kind))&&i.textEdits===void 0||k.typedArray(i.textEdits,Bt.is)&&(i.tooltip===void 0||k.string(i.tooltip)||Ur.is(i.tooltip))&&(i.paddingLeft===void 0||k.boolean(i.paddingLeft))&&(i.paddingRight===void 0||k.boolean(i.paddingRight))}t.is=n})(_f||(_f={}));var Tf;(function(t){function e(n){return{kind:"snippet",value:n}}t.createSnippet=e})(Tf||(Tf={}));var Rf;(function(t){function e(n,r,i,s){return{insertText:n,filterText:r,range:i,command:s}}t.create=e})(Rf||(Rf={}));var wf;(function(t){function e(n){return{items:n}}t.create=e})(wf||(wf={}));var bf;(function(t){t.Invoked=0,t.Automatic=1})(bf||(bf={}));var kf;(function(t){function e(n,r){return{range:n,text:r}}t.create=e})(kf||(kf={}));var Sf;(function(t){function e(n,r){return{triggerKind:n,selectedCompletionInfo:r}}t.create=e})(Sf||(Sf={}));var Cf;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&Oc.is(r.uri)&&k.string(r.name)}t.is=e})(Cf||(Cf={}));const YP=[`
`,`\r
`,"\r"];var $f;(function(t){function e(s,o,a,c){return new XP(s,o,a,c)}t.create=e;function n(s){let o=s;return!!(k.defined(o)&&k.string(o.uri)&&(k.undefined(o.languageId)||k.string(o.languageId))&&k.uinteger(o.lineCount)&&k.func(o.getText)&&k.func(o.positionAt)&&k.func(o.offsetAt))}t.is=n;function r(s,o){let a=s.getText(),c=i(o,(u,f)=>{let m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m}),l=a.length;for(let u=c.length-1;u>=0;u--){let f=c[u],m=s.offsetAt(f.range.start),g=s.offsetAt(f.range.end);if(g<=l)a=a.substring(0,m)+f.newText+a.substring(g,a.length);else throw new Error("Overlapping edit");l=m}return a}t.applyEdits=r;function i(s,o){if(s.length<=1)return s;const a=s.length/2|0,c=s.slice(0,a),l=s.slice(a);i(c,o),i(l,o);let u=0,f=0,m=0;for(;u<c.length&&f<l.length;)o(c[u],l[f])<=0?s[m++]=c[u++]:s[m++]=l[f++];for(;u<c.length;)s[m++]=c[u++];for(;f<l.length;)s[m++]=l[f++];return s}})($f||($f={}));let XP=class{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],n=this._content,r=!0;for(let i=0;i<n.length;i++){r&&(e.push(i),r=!1);let s=n.charAt(i);r=s==="\r"||s===`
`,s==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}r&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let n=this.getLineOffsets(),r=0,i=n.length;if(i===0)return re.create(0,e);for(;r<i;){let o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}let s=r-1;return re.create(s,e-n[s])}offsetAt(e){let n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;let r=n[e.line],i=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,i),r)}get lineCount(){return this.getLineOffsets().length}};var k;(function(t){const e=Object.prototype.toString;function n(g){return typeof g<"u"}t.defined=n;function r(g){return typeof g>"u"}t.undefined=r;function i(g){return g===!0||g===!1}t.boolean=i;function s(g){return e.call(g)==="[object String]"}t.string=s;function o(g){return e.call(g)==="[object Number]"}t.number=o;function a(g,d,v){return e.call(g)==="[object Number]"&&d<=g&&g<=v}t.numberRange=a;function c(g){return e.call(g)==="[object Number]"&&-2147483648<=g&&g<=2147483647}t.integer=c;function l(g){return e.call(g)==="[object Number]"&&0<=g&&g<=2147483647}t.uinteger=l;function u(g){return e.call(g)==="[object Function]"}t.func=u;function f(g){return g!==null&&typeof g=="object"}t.objectLiteral=f;function m(g,d){return Array.isArray(g)&&g.every(d)}t.typedArray=m})(k||(k={}));var JP=Object.freeze({__proto__:null,get AnnotatedTextEdit(){return mn},get ChangeAnnotation(){return or},get ChangeAnnotationIdentifier(){return Xe},get CodeAction(){return af},get CodeActionContext(){return of},get CodeActionKind(){return sf},get CodeActionTriggerKind(){return vs},get CodeDescription(){return Ld},get CodeLens(){return cf},get Color(){return xc},get ColorInformation(){return Ad},get ColorPresentation(){return Nd},get Command(){return hr},get CompletionItem(){return Gd},get CompletionItemKind(){return jd},get CompletionItemLabelDetails(){return Wd},get CompletionItemTag(){return qd},get CompletionList(){return zd},get CreateFile(){return Fr},get DeleteFile(){return jr},get Diagnostic(){return ps},get DiagnosticRelatedInformation(){return Lc},get DiagnosticSeverity(){return Od},get DiagnosticTag(){return xd},get DocumentHighlight(){return Qd},get DocumentHighlightKind(){return Jd},get DocumentLink(){return uf},get DocumentSymbol(){return rf},get DocumentUri(){return $d},EOL:YP,get FoldingRange(){return Dd},get FoldingRangeKind(){return Id},get FormattingOptions(){return lf},get Hover(){return Vd},get InlayHint(){return _f},get InlayHintKind(){return Hc},get InlayHintLabelPart(){return jc},get InlineCompletionContext(){return Sf},get InlineCompletionItem(){return Rf},get InlineCompletionList(){return wf},get InlineCompletionTriggerKind(){return bf},get InlineValueContext(){return vf},get InlineValueEvaluatableExpression(){return yf},get InlineValueText(){return mf},get InlineValueVariableLookup(){return gf},get InsertReplaceEdit(){return Bd},get InsertTextFormat(){return Ud},get InsertTextMode(){return Kd},get Location(){return hs},get LocationLink(){return Pd},get MarkedString(){return ys},get MarkupContent(){return Ur},get MarkupKind(){return Fc},get OptionalVersionedTextDocumentIdentifier(){return gs},get ParameterInformation(){return Yd},get Position(){return re},get Range(){return Q},get RenameFile(){return Hr},get SelectedCompletionInfo(){return kf},get SelectionRange(){return df},get SemanticTokenModifiers(){return hf},get SemanticTokenTypes(){return ff},get SemanticTokens(){return pf},get SignatureInformation(){return Xd},get StringValue(){return Tf},get SymbolInformation(){return tf},get SymbolKind(){return Zd},get SymbolTag(){return ef},get TextDocument(){return $f},get TextDocumentEdit(){return ms},get TextDocumentIdentifier(){return Md},get TextDocumentItem(){return Hd},get TextEdit(){return Bt},get URI(){return Oc},get VersionedTextDocumentIdentifier(){return Fd},WorkspaceChange:VP,get WorkspaceEdit(){return Mc},get WorkspaceFolder(){return Cf},get WorkspaceSymbol(){return nf},get integer(){return Ed},get uinteger(){return fs}});class QP{constructor(){this.nodeStack=[]}get current(){var e;return(e=this.nodeStack[this.nodeStack.length-1])!==null&&e!==void 0?e:this.rootNode}buildRootNode(e){return this.rootNode=new m_(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){const n=new Ah;return n.grammarSource=e,n.root=this.rootNode,this.current.content.push(n),this.nodeStack.push(n),n}buildLeafNode(e,n){const r=new Ef(e.startOffset,e.image.length,cd(e),e.tokenType,!n);return r.grammarSource=n,r.root=this.rootNode,this.current.content.push(r),r}removeNode(e){const n=e.container;if(n){const r=n.content.indexOf(e);r>=0&&n.content.splice(r,1)}}addHiddenNodes(e){const n=[];for(const s of e){const o=new Ef(s.startOffset,s.image.length,cd(s),s.tokenType,!0);o.root=this.rootNode,n.push(o)}let r=this.current,i=!1;if(r.content.length>0){r.content.push(...n);return}for(;r.container;){const s=r.container.content.indexOf(r);if(s>0){r.container.content.splice(s,0,...n),i=!0;break}r=r.container}i||this.rootNode.content.unshift(...n)}construct(e){const n=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=n;const r=this.nodeStack.pop();(r==null?void 0:r.content.length)===0&&this.removeNode(r)}}class p_{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,n;const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(n=this.container)===null||n===void 0?void 0:n.astNode;if(!r)throw new Error("This node has no associated AST element");return r}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class Ef extends p_{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,n,r,i,s=!1){super(),this._hidden=s,this._offset=e,this._tokenType=i,this._length=n,this._range=r}}class Ah extends p_{constructor(){super(...arguments),this.content=new Nh(this)}get children(){return this.content}get offset(){var e,n;return(n=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&n!==void 0?n:0}get length(){return this.end-this.offset}get end(){var e,n;return(n=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&n!==void 0?n:0}get range(){const e=this.firstNonHiddenNode,n=this.lastNonHiddenNode;if(e&&n){if(this._rangeCache===void 0){const{range:r}=e,{range:i}=n;this._rangeCache={start:r.start,end:i.end.line<r.start.line?r.start:i.end}}return this._rangeCache}else return{start:re.create(0,0),end:re.create(0,0)}}get firstNonHiddenNode(){for(const e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const n=this.content[e];if(!n.hidden)return n}return this.content[this.content.length-1]}}class Nh extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Nh.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,n,...r){return this.addParents(r),super.splice(e,n,...r)}addParents(e){for(const n of e)n.container=this.parent}}class m_ extends Ah{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}}const Pf=Symbol("Datatype");function mu(t){return t.$type===Pf}const tm="​",g_=t=>t.endsWith(tm)?t:t+tm;class y_{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;const n=this.lexer.definition,r=e.LanguageMetaData.mode==="production";this.wrapper=new r0(n,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,n){this.wrapper.wrapOr(e,n)}optional(e,n){this.wrapper.wrapOption(e,n)}many(e,n){this.wrapper.wrapMany(e,n)}atLeastOne(e,n){this.wrapper.wrapAtLeastOne(e,n)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class ZP extends y_{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new QP,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,n){const r=this.computeRuleType(e),i=this.wrapper.DEFINE_RULE(g_(e.name),this.startImplementation(r,n).bind(this));return this.allRules.set(e.name,i),e.entry&&(this.mainRule=i),i}computeRuleType(e){if(!e.fragment){if(Wy(e))return Pf;{const n=$s(e);return n??e.name}}}parse(e,n={}){this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=n.rule?this.allRules.get(n.rule):this.mainRule;if(!i)throw new Error(n.rule?`No rule found with name '${n.rule}'`:"No main rule available.");const s=this.doParse(i);return this.nodeBuilder.addHiddenNodes(r.hidden),this.unorderedGroups.clear(),this.lexerResult=void 0,{value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors}}doParse(e){let n=e.call(this.wrapper,{});if(this.stack.length>0&&(n=this.construct()),n===void 0)throw new Error("No result from parser");if(this.stack.length>0)throw new Error("Parser stack is not empty after parsing");return n}startImplementation(e,n){return r=>{const i=!this.isRecording()&&e!==void 0;if(i){const s={$type:e};this.stack.push(s),e===Pf&&(s.value="")}return n(r),i?this.construct():void 0}}extractHiddenTokens(e){const n=this.lexerResult.hidden;if(!n.length)return[];const r=e.startOffset;for(let i=0;i<n.length;i++)if(n[i].startOffset>r)return n.splice(0,i);return n.splice(0,n.length)}consume(e,n,r){const i=this.wrapper.wrapConsume(e,n);if(!this.isRecording()&&this.isValidToken(i)){const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);const o=this.nodeBuilder.buildLeafNode(i,r),{assignment:a,isCrossRef:c}=this.getAssignment(r),l=this.current;if(a){const u=Dt(r)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,u,o,c)}else if(mu(l)){let u=i.image;Dt(r)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,n,r,i,s){let o;!this.isRecording()&&!r&&(o=this.nodeBuilder.buildCompositeNode(i));let a;try{a=this.wrapper.wrapSubrule(e,n,s)}finally{this.isRecording()||(a===void 0&&!r&&(a=this.construct()),a!==void 0&&o&&o.length>0&&this.performSubruleAssignment(a,i,o))}}performSubruleAssignment(e,n,r){const{assignment:i,isCrossRef:s}=this.getAssignment(n);if(i)this.assign(i.operator,i.feature,e,r,s);else if(!i){const o=this.current;if(mu(o))o.value+=e.toString();else if(typeof e=="object"&&e){const c=this.assignWithoutOverride(e,o);this.stack.pop(),this.stack.push(c)}}}action(e,n){if(!this.isRecording()){let r=this.current;if(n.feature&&n.operator){r=this.construct(),this.nodeBuilder.removeNode(r.$cstNode),this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);const s={$type:e};this.stack.push(s),this.assign(n.operator,n.feature,r,r.$cstNode,!1)}else r.$type=e}}construct(){if(this.isRecording())return;const e=this.current;return eR(e),this.nodeBuilder.construct(e),this.stack.pop(),mu(e)?this.converter.convert(e.value,e.$cstNode):(Dy(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){const n=On(e,rn);this.assignmentMap.set(e,{assignment:n,isCrossRef:n?Cs(n.terminal):!1})}return this.assignmentMap.get(e)}assign(e,n,r,i,s){const o=this.current;let a;switch(s&&typeof r=="string"?a=this.linker.buildReference(o,n,i,r):a=r,e){case"=":{o[n]=a;break}case"?=":{o[n]=!0;break}case"+=":Array.isArray(o[n])||(o[n]=[]),o[n].push(a)}}assignWithoutOverride(e,n){for(const[i,s]of Object.entries(n)){const o=e[i];o===void 0?e[i]=s:Array.isArray(o)&&Array.isArray(s)&&(s.push(...o),e[i]=s)}const r=e.$cstNode;return r&&(r.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}}class e0{buildMismatchTokenMessage(e){return Pr.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Pr.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Pr.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Pr.buildEarlyExitMessage(e)}}class v_ extends e0{buildMismatchTokenMessage({expected:e,actual:n}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${n.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}}class t0 extends y_{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();const n=this.lexer.tokenize(e,{mode:"partial"});return this.tokens=n.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,n){const r=this.wrapper.DEFINE_RULE(g_(e.name),this.startImplementation(n).bind(this));return this.allRules.set(e.name,r),e.entry&&(this.mainRule=r),r}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return n=>{const r=this.keepStackSize();try{e(n)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){const e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,n,r){this.wrapper.wrapConsume(e,n),this.isRecording()||(this.lastElementStack=[...this.elementStack,r],this.nextTokenIndex=this.currIdx+1)}subrule(e,n,r,i,s){this.before(i),this.wrapper.wrapSubrule(e,n,s),this.after(i)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){const n=this.elementStack.lastIndexOf(e);n>=0&&this.elementStack.splice(n)}}get currIdx(){return this.wrapper.currIdx}}const n0={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new v_};class r0 extends aP{constructor(e,n){const r=n&&"maxLookahead"in n;super(e,Object.assign(Object.assign(Object.assign({},n0),{lookaheadStrategy:r?new kh({maxLookahead:n.maxLookahead}):new EP({logging:n.skipValidations?()=>{}:void 0})}),n))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,n,r){return this.RULE(e,n,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,n){return this.consume(e,n,void 0)}wrapSubrule(e,n,r){return this.subrule(e,n,{ARGS:[r]})}wrapOr(e,n){this.or(e,n)}wrapOption(e,n){this.option(e,n)}wrapMany(e,n){this.many(e,n)}wrapAtLeastOne(e,n){this.atLeastOne(e,n)}}function __(t,e,n){return i0({parser:e,tokens:n,ruleNames:new Map},t),e}function i0(t,e){const n=My(e,!1),r=Re(e.rules).filter(it).filter(i=>n.has(i));for(const i of r){const s=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(i,pr(s,i.definition))}}function pr(t,e,n=!1){let r;if(Dt(e))r=d0(t,e);else if(Ss(e))r=s0(t,e);else if(rn(e))r=pr(t,e.terminal);else if(Cs(e))r=T_(t,e);else if(Rn(e))r=o0(t,e);else if(Jf(e))r=c0(t,e);else if(Qf(e))r=l0(t,e);else if(lr(e))r=u0(t,e);else if(GT(e)){const i=t.consume++;r=()=>t.parser.consume(i,Gn,e)}else throw new Cy(e.$cstNode,`Unexpected element type: ${e.$type}`);return R_(t,n?void 0:Uc(e),r,e.cardinality)}function s0(t,e){const n=al(e);return()=>t.parser.action(n,e)}function o0(t,e){const n=e.rule.ref;if(it(n)){const r=t.subrule++,i=n.fragment,s=e.arguments.length>0?a0(n,e.arguments):()=>({});return o=>t.parser.subrule(r,w_(t,n),i,e,s(o))}else if(Xn(n)){const r=t.consume++,i=Af(t,n.name);return()=>t.parser.consume(r,i,e)}else if(n)ks();else throw new Cy(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)}function a0(t,e){const n=e.map(r=>gn(r.value));return r=>{const i={};for(let s=0;s<n.length;s++){const o=t.parameters[s],a=n[s];i[o.name]=a(r)}return i}}function gn(t){if(jT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)||n(r)}else if(HT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)&&n(r)}else if(UT(t)){const e=gn(t.value);return n=>!e(n)}else if(qT(t)){const e=t.parameter.ref.name;return n=>n!==void 0&&n[e]===!0}else if(FT(t)){const e=!!t.true;return()=>e}ks()}function c0(t,e){if(e.elements.length===1)return pr(t,e.elements[0]);{const n=[];for(const i of e.elements){const s={ALT:pr(t,i,!0)},o=Uc(i);o&&(s.GATE=gn(o)),n.push(s)}const r=t.or++;return i=>t.parser.alternatives(r,n.map(s=>{const o={ALT:()=>s.ALT(i)},a=s.GATE;return a&&(o.GATE=()=>a(i)),o}))}}function l0(t,e){if(e.elements.length===1)return pr(t,e.elements[0]);const n=[];for(const a of e.elements){const c={ALT:pr(t,a,!0)},l=Uc(a);l&&(c.GATE=gn(l)),n.push(c)}const r=t.or++,i=(a,c)=>{const l=c.getRuleStack().join("-");return`uGroup_${a}_${l}`},s=a=>t.parser.alternatives(r,n.map((c,l)=>{const u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(c.ALT(a),!f.isRecording()){const g=i(r,f);f.unorderedGroups.get(g)||f.unorderedGroups.set(g,[]);const d=f.unorderedGroups.get(g);typeof(d==null?void 0:d[l])>"u"&&(d[l]=!0)}};const m=c.GATE;return m?u.GATE=()=>m(a):u.GATE=()=>{const g=f.unorderedGroups.get(i(r,f));return!(g!=null&&g[l])},u})),o=R_(t,Uc(e),s,"*");return a=>{o(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(r,t.parser))}}function u0(t,e){const n=e.elements.map(r=>pr(t,r));return r=>n.forEach(i=>i(r))}function Uc(t){if(lr(t))return t.guardCondition}function T_(t,e,n=e.terminal){if(n)if(Rn(n)&&it(n.rule.ref)){const r=n.rule.ref,i=t.subrule++;return s=>t.parser.subrule(i,w_(t,r),!1,e,s)}else if(Rn(n)&&Xn(n.rule.ref)){const r=t.consume++,i=Af(t,n.rule.ref.name);return()=>t.parser.consume(r,i,e)}else if(Dt(n)){const r=t.consume++,i=Af(t,n.value);return()=>t.parser.consume(r,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);const r=By(e.type.ref),i=r==null?void 0:r.terminal;if(!i)throw new Error("Could not find name assignment for type: "+al(e.type.ref));return T_(t,e,i)}}function d0(t,e){const n=t.consume++,r=t.tokens[e.value];if(!r)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(n,r,e)}function R_(t,e,n,r){const i=e&&gn(e);if(!r)if(i){const s=t.or++;return o=>t.parser.alternatives(s,[{ALT:()=>n(o),GATE:()=>i(o)},{ALT:Xp(),GATE:()=>!i(o)}])}else return n;if(r==="*"){const s=t.many++;return o=>t.parser.many(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else if(r==="+"){const s=t.many++;if(i){const o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>t.parser.atLeastOne(s,{DEF:()=>n(a)}),GATE:()=>i(a)},{ALT:Xp(),GATE:()=>!i(a)}])}else return o=>t.parser.atLeastOne(s,{DEF:()=>n(o)})}else if(r==="?"){const s=t.optional++;return o=>t.parser.optional(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else ks()}function w_(t,e){const n=f0(t,e),r=t.parser.getRule(n);if(!r)throw new Error(`Rule "${n}" not found."`);return r}function f0(t,e){if(it(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let n=e,r=n.$container,i=e.$type;for(;!it(r);)(lr(r)||Jf(r)||Qf(r))&&(i=r.elements.indexOf(n).toString()+":"+i),n=r,r=r.$container;return i=r.name+":"+i,t.ruleNames.set(e,i),i}}function Af(t,e){const n=t.tokens[e];if(!n)throw new Error(`Token "${e}" not found."`);return n}function h0(t){const e=t.Grammar,n=t.parser.Lexer,r=new t0(t);return __(e,r,n.definition),r.finalize(),r}function p0(t){const e=m0(t);return e.finalize(),e}function m0(t){const e=t.Grammar,n=t.parser.Lexer,r=new ZP(t);return __(e,r,n.definition)}class g0{constructor(){this.diagnostics=[]}buildTokens(e,n){const r=Re(My(e,!1)),i=this.buildTerminalTokens(r),s=this.buildKeywordTokens(r,i,n);return s.push(...i),s}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){const e=[...this.diagnostics];return this.diagnostics=[],e}buildTerminalTokens(e){return e.filter(Xn).filter(n=>!n.fragment).map(n=>this.buildTerminalToken(n)).toArray()}buildTerminalToken(e){const n=cl(e),r=this.requiresCustomPattern(n)?this.regexPatternFunction(n):n,i={name:e.name,PATTERN:r};return typeof r=="function"&&(i.LINE_BREAKS=!0),e.hidden&&(i.GROUP=Ly(n)?pt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){const n=new RegExp(e,e.flags+"y");return(r,i)=>(n.lastIndex=i,n.exec(r))}buildKeywordTokens(e,n,r){return e.filter(it).flatMap(i=>tn(i).filter(Dt)).distinct(i=>i.value).toArray().sort((i,s)=>s.value.length-i.value.length).map(i=>this.buildKeywordToken(i,n,!!(r!=null&&r.caseInsensitive)))}buildKeywordToken(e,n,r){const i=this.buildKeywordPattern(e,r),s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,n)};return typeof i=="function"&&(s.LINE_BREAKS=!0),s}buildKeywordPattern(e,n){return n?new RegExp(ol(e.value),"i"):e.value}findLongerAlt(e,n){return n.reduce((r,i)=>{const s=i==null?void 0:i.PATTERN;return s!=null&&s.source&&lR("^"+s.source+"$",e.value)&&r.push(i),r},[])}}class y0{convert(e,n){let r=n.grammarSource;if(Cs(r)&&(r=Hy(r)),Rn(r)){const i=r.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,n)}return e}runConverter(e,n,r){var i;switch(e.name.toUpperCase()){case"INT":return hn.convertInt(n);case"STRING":return hn.convertString(n);case"ID":return hn.convertID(n)}switch((i=yR(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return hn.convertNumber(n);case"boolean":return hn.convertBoolean(n);case"bigint":return hn.convertBigint(n);case"date":return hn.convertDate(n);default:return n}}}var hn;(function(t){function e(l){let u="";for(let f=1;f<l.length-1;f++){const m=l.charAt(f);if(m==="\\"){const g=l.charAt(++f);u+=n(g)}else u+=m}return u}t.convertString=e;function n(l){switch(l){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return l}}function r(l){return l.charAt(0)==="^"?l.substring(1):l}t.convertID=r;function i(l){return parseInt(l)}t.convertInt=i;function s(l){return BigInt(l)}t.convertBigint=s;function o(l){return new Date(l)}t.convertDate=o;function a(l){return Number(l)}t.convertNumber=a;function c(l){return l.toLowerCase()==="true"}t.convertBoolean=c})(hn||(hn={}));var xe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function v0(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Vn={},An={};Object.defineProperty(An,"__esModule",{value:!0});let Nf;function If(){if(Nf===void 0)throw new Error("No runtime abstraction layer installed");return Nf}(function(t){function e(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");Nf=n}t.install=e})(If||(If={}));An.default=If;var Fe={};Object.defineProperty(Fe,"__esModule",{value:!0});Fe.stringArray=Fe.array=Fe.func=Fe.error=Fe.number=Fe.string=Fe.boolean=void 0;function _0(t){return t===!0||t===!1}Fe.boolean=_0;function b_(t){return typeof t=="string"||t instanceof String}Fe.string=b_;function T0(t){return typeof t=="number"||t instanceof Number}Fe.number=T0;function R0(t){return t instanceof Error}Fe.error=R0;function w0(t){return typeof t=="function"}Fe.func=w0;function k_(t){return Array.isArray(t)}Fe.array=k_;function b0(t){return k_(t)&&t.every(e=>b_(e))}Fe.stringArray=b0;var on={};Object.defineProperty(on,"__esModule",{value:!0});var S_=on.Emitter=on.Event=void 0;const k0=An;var nm;(function(t){const e={dispose(){}};t.None=function(){return e}})(nm||(on.Event=nm={}));class S0{add(e,n=null,r){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(n),Array.isArray(r)&&r.push({dispose:()=>this.remove(e,n)})}remove(e,n=null){if(!this._callbacks)return;let r=!1;for(let i=0,s=this._callbacks.length;i<s;i++)if(this._callbacks[i]===e)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else r=!0;if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];const n=[],r=this._callbacks.slice(0),i=this._contexts.slice(0);for(let s=0,o=r.length;s<o;s++)try{n.push(r[s].apply(i[s],e))}catch(a){(0,k0.default)().console.error(a)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}}class $l{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,n,r)=>{this._callbacks||(this._callbacks=new S0),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,n);const i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,n),i.dispose=$l._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}}S_=on.Emitter=$l;$l._noop=function(){};var ce;Object.defineProperty(Vn,"__esModule",{value:!0});var Ih=Vn.CancellationTokenSource=ce=Vn.CancellationToken=void 0;const C0=An,$0=Fe,Df=on;var qc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Df.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Df.Event.None});function e(n){const r=n;return r&&(r===t.None||r===t.Cancelled||$0.boolean(r.isCancellationRequested)&&!!r.onCancellationRequested)}t.is=e})(qc||(ce=Vn.CancellationToken=qc={}));const E0=Object.freeze(function(t,e){const n=(0,C0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){n.dispose()}}});class rm{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?E0:(this._emitter||(this._emitter=new Df.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}}class P0{get token(){return this._token||(this._token=new rm),this._token}cancel(){this._token?this._token.cancel():this._token=qc.Cancelled}dispose(){this._token?this._token instanceof rm&&this._token.dispose():this._token=qc.None}}Ih=Vn.CancellationTokenSource=P0;function A0(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}let pc=0,N0=10;function I0(){return pc=performance.now(),new Ih}const Bc=Symbol("OperationCancelled");function Hs(t){return t===Bc}async function ot(t){if(t===ce.None)return;const e=performance.now();if(e-pc>=N0&&(pc=e,await A0(),pc=performance.now()),t.isCancellationRequested)throw Bc}class Dh{constructor(){this.promise=new Promise((e,n)=>{this.resolve=r=>(e(r),this),this.reject=r=>(n(r),this)})}}class _s{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){const n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){for(const r of e)if(_s.isIncremental(r)){const i=$_(r.range),s=this.offsetAt(i.start),o=this.offsetAt(i.end);this._content=this._content.substring(0,s)+r.text+this._content.substring(o,this._content.length);const a=Math.max(i.start.line,0),c=Math.max(i.end.line,0);let l=this._lineOffsets;const u=im(r.text,!1,s);if(c-a===u.length)for(let m=0,g=u.length;m<g;m++)l[m+a+1]=u[m];else u.length<1e4?l.splice(a+1,c-a,...u):this._lineOffsets=l=l.slice(0,a+1).concat(u,l.slice(c+1));const f=r.text.length-(o-s);if(f!==0)for(let m=a+1+u.length,g=l.length;m<g;m++)l[m]=l[m]+f}else if(_s.isFull(r))this._content=r.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=im(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);const n=this.getLineOffsets();let r=0,i=n.length;if(i===0)return{line:0,character:e};for(;r<i;){const o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}const s=r-1;return e=this.ensureBeforeEOL(e,n[s]),{line:s,character:e-n[s]}}offsetAt(e){const n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;const r=n[e.line];if(e.character<=0)return r;const i=e.line+1<n.length?n[e.line+1]:this._content.length,s=Math.min(r+e.character,i);return this.ensureBeforeEOL(s,r)}ensureBeforeEOL(e,n){for(;e>n&&C_(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}}var Kc;(function(t){function e(i,s,o,a){return new _s(i,s,o,a)}t.create=e;function n(i,s,o){if(i instanceof _s)return i.update(s,o),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=n;function r(i,s){const o=i.getText(),a=Of(s.map(D0),(u,f)=>{const m=u.range.start.line-f.range.start.line;return m===0?u.range.start.character-f.range.start.character:m});let c=0;const l=[];for(const u of a){const f=i.offsetAt(u.range.start);if(f<c)throw new Error("Overlapping edit");f>c&&l.push(o.substring(c,f)),u.newText.length&&l.push(u.newText),c=i.offsetAt(u.range.end)}return l.push(o.substr(c)),l.join("")}t.applyEdits=r})(Kc||(Kc={}));function Of(t,e){if(t.length<=1)return t;const n=t.length/2|0,r=t.slice(0,n),i=t.slice(n);Of(r,e),Of(i,e);let s=0,o=0,a=0;for(;s<r.length&&o<i.length;)e(r[s],i[o])<=0?t[a++]=r[s++]:t[a++]=i[o++];for(;s<r.length;)t[a++]=r[s++];for(;o<i.length;)t[a++]=i[o++];return t}function im(t,e,n=0){const r=e?[n]:[];for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);C_(s)&&(s===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,r.push(n+i+1))}return r}function C_(t){return t===13||t===10}function $_(t){const e=t.start,n=t.end;return e.line>n.line||e.line===n.line&&e.character>n.character?{start:n,end:e}:t}function D0(t){const e=$_(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var E_;(()=>{var t={470:i=>{function s(c){if(typeof c!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(c))}function o(c,l){for(var u,f="",m=0,g=-1,d=0,v=0;v<=c.length;++v){if(v<c.length)u=c.charCodeAt(v);else{if(u===47)break;u=47}if(u===47){if(!(g===v-1||d===1))if(g!==v-1&&d===2){if(f.length<2||m!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var R=f.lastIndexOf("/");if(R!==f.length-1){R===-1?(f="",m=0):m=(f=f.slice(0,R)).length-1-f.lastIndexOf("/"),g=v,d=0;continue}}else if(f.length===2||f.length===1){f="",m=0,g=v,d=0;continue}}l&&(f.length>0?f+="/..":f="..",m=2)}else f.length>0?f+="/"+c.slice(g+1,v):f=c.slice(g+1,v),m=v-g-1;g=v,d=0}else u===46&&d!==-1?++d:d=-1}return f}var a={resolve:function(){for(var c,l="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var m;f>=0?m=arguments[f]:(c===void 0&&(c=process.cwd()),m=c),s(m),m.length!==0&&(l=m+"/"+l,u=m.charCodeAt(0)===47)}return l=o(l,!u),u?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(c){if(s(c),c.length===0)return".";var l=c.charCodeAt(0)===47,u=c.charCodeAt(c.length-1)===47;return(c=o(c,!l)).length!==0||l||(c="."),c.length>0&&u&&(c+="/"),l?"/"+c:c},isAbsolute:function(c){return s(c),c.length>0&&c.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var c,l=0;l<arguments.length;++l){var u=arguments[l];s(u),u.length>0&&(c===void 0?c=u:c+="/"+u)}return c===void 0?".":a.normalize(c)},relative:function(c,l){if(s(c),s(l),c===l||(c=a.resolve(c))===(l=a.resolve(l)))return"";for(var u=1;u<c.length&&c.charCodeAt(u)===47;++u);for(var f=c.length,m=f-u,g=1;g<l.length&&l.charCodeAt(g)===47;++g);for(var d=l.length-g,v=m<d?m:d,R=-1,_=0;_<=v;++_){if(_===v){if(d>v){if(l.charCodeAt(g+_)===47)return l.slice(g+_+1);if(_===0)return l.slice(g+_)}else m>v&&(c.charCodeAt(u+_)===47?R=_:_===0&&(R=0));break}var h=c.charCodeAt(u+_);if(h!==l.charCodeAt(g+_))break;h===47&&(R=_)}var p="";for(_=u+R+1;_<=f;++_)_!==f&&c.charCodeAt(_)!==47||(p.length===0?p+="..":p+="/..");return p.length>0?p+l.slice(g+R):(g+=R,l.charCodeAt(g)===47&&++g,l.slice(g))},_makeLong:function(c){return c},dirname:function(c){if(s(c),c.length===0)return".";for(var l=c.charCodeAt(0),u=l===47,f=-1,m=!0,g=c.length-1;g>=1;--g)if((l=c.charCodeAt(g))===47){if(!m){f=g;break}}else m=!1;return f===-1?u?"/":".":u&&f===1?"//":c.slice(0,f)},basename:function(c,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');s(c);var u,f=0,m=-1,g=!0;if(l!==void 0&&l.length>0&&l.length<=c.length){if(l.length===c.length&&l===c)return"";var d=l.length-1,v=-1;for(u=c.length-1;u>=0;--u){var R=c.charCodeAt(u);if(R===47){if(!g){f=u+1;break}}else v===-1&&(g=!1,v=u+1),d>=0&&(R===l.charCodeAt(d)?--d==-1&&(m=u):(d=-1,m=v))}return f===m?m=v:m===-1&&(m=c.length),c.slice(f,m)}for(u=c.length-1;u>=0;--u)if(c.charCodeAt(u)===47){if(!g){f=u+1;break}}else m===-1&&(g=!1,m=u+1);return m===-1?"":c.slice(f,m)},extname:function(c){s(c);for(var l=-1,u=0,f=-1,m=!0,g=0,d=c.length-1;d>=0;--d){var v=c.charCodeAt(d);if(v!==47)f===-1&&(m=!1,f=d+1),v===46?l===-1?l=d:g!==1&&(g=1):l!==-1&&(g=-1);else if(!m){u=d+1;break}}return l===-1||f===-1||g===0||g===1&&l===f-1&&l===u+1?"":c.slice(l,f)},format:function(c){if(c===null||typeof c!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof c);return function(l,u){var f=u.dir||u.root,m=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+m:f+"/"+m:m}(0,c)},parse:function(c){s(c);var l={root:"",dir:"",base:"",ext:"",name:""};if(c.length===0)return l;var u,f=c.charCodeAt(0),m=f===47;m?(l.root="/",u=1):u=0;for(var g=-1,d=0,v=-1,R=!0,_=c.length-1,h=0;_>=u;--_)if((f=c.charCodeAt(_))!==47)v===-1&&(R=!1,v=_+1),f===46?g===-1?g=_:h!==1&&(h=1):g!==-1&&(h=-1);else if(!R){d=_+1;break}return g===-1||v===-1||h===0||h===1&&g===v-1&&g===d+1?v!==-1&&(l.base=l.name=d===0&&m?c.slice(1,v):c.slice(d,v)):(d===0&&m?(l.name=c.slice(1,g),l.base=c.slice(1,v)):(l.name=c.slice(d,g),l.base=c.slice(d,v)),l.ext=c.slice(g,v)),d>0?l.dir=c.slice(0,d-1):m&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function n(i){var s=e[i];if(s!==void 0)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(i,s)=>{for(var o in s)n.o(s,o)&&!n.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:s[o]})},n.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{let i;n.r(r),n.d(r,{URI:()=>m,Utils:()=>Pe}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);const s=/^\w[\w\d+.-]*$/,o=/^\//,a=/^\/\//;function c(A,E){if(!A.scheme&&E)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${A.authority}", path: "${A.path}", query: "${A.query}", fragment: "${A.fragment}"}`);if(A.scheme&&!s.test(A.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(A.path){if(A.authority){if(!o.test(A.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(A.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}const l="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class m{constructor(E,b,$,N,P,O=!1){Dn(this,"scheme");Dn(this,"authority");Dn(this,"path");Dn(this,"query");Dn(this,"fragment");typeof E=="object"?(this.scheme=E.scheme||l,this.authority=E.authority||l,this.path=E.path||l,this.query=E.query||l,this.fragment=E.fragment||l):(this.scheme=function(He,x){return He||x?He:"file"}(E,O),this.authority=b||l,this.path=function(He,x){switch(He){case"https":case"http":case"file":x?x[0]!==u&&(x=u+x):x=u}return x}(this.scheme,$||l),this.query=N||l,this.fragment=P||l,c(this,O))}static isUri(E){return E instanceof m||!!E&&typeof E.authority=="string"&&typeof E.fragment=="string"&&typeof E.path=="string"&&typeof E.query=="string"&&typeof E.scheme=="string"&&typeof E.fsPath=="string"&&typeof E.with=="function"&&typeof E.toString=="function"}get fsPath(){return h(this)}with(E){if(!E)return this;let{scheme:b,authority:$,path:N,query:P,fragment:O}=E;return b===void 0?b=this.scheme:b===null&&(b=l),$===void 0?$=this.authority:$===null&&($=l),N===void 0?N=this.path:N===null&&(N=l),P===void 0?P=this.query:P===null&&(P=l),O===void 0?O=this.fragment:O===null&&(O=l),b===this.scheme&&$===this.authority&&N===this.path&&P===this.query&&O===this.fragment?this:new d(b,$,N,P,O)}static parse(E,b=!1){const $=f.exec(E);return $?new d($[2]||l,G($[4]||l),G($[5]||l),G($[7]||l),G($[9]||l),b):new d(l,l,l,l,l)}static file(E){let b=l;if(i&&(E=E.replace(/\\/g,u)),E[0]===u&&E[1]===u){const $=E.indexOf(u,2);$===-1?(b=E.substring(2),E=u):(b=E.substring(2,$),E=E.substring($)||u)}return new d("file",b,E,l,l)}static from(E){const b=new d(E.scheme,E.authority,E.path,E.query,E.fragment);return c(b,!0),b}toString(E=!1){return p(this,E)}toJSON(){return this}static revive(E){if(E){if(E instanceof m)return E;{const b=new d(E);return b._formatted=E.external,b._fsPath=E._sep===g?E.fsPath:null,b}}return E}}const g=i?1:void 0;class d extends m{constructor(){super(...arguments);Dn(this,"_formatted",null);Dn(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=h(this)),this._fsPath}toString(b=!1){return b?p(this,!0):(this._formatted||(this._formatted=p(this,!1)),this._formatted)}toJSON(){const b={$mid:1};return this._fsPath&&(b.fsPath=this._fsPath,b._sep=g),this._formatted&&(b.external=this._formatted),this.path&&(b.path=this.path),this.scheme&&(b.scheme=this.scheme),this.authority&&(b.authority=this.authority),this.query&&(b.query=this.query),this.fragment&&(b.fragment=this.fragment),b}}const v={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function R(A,E,b){let $,N=-1;for(let P=0;P<A.length;P++){const O=A.charCodeAt(P);if(O>=97&&O<=122||O>=65&&O<=90||O>=48&&O<=57||O===45||O===46||O===95||O===126||E&&O===47||b&&O===91||b&&O===93||b&&O===58)N!==-1&&($+=encodeURIComponent(A.substring(N,P)),N=-1),$!==void 0&&($+=A.charAt(P));else{$===void 0&&($=A.substr(0,P));const He=v[O];He!==void 0?(N!==-1&&($+=encodeURIComponent(A.substring(N,P)),N=-1),$+=He):N===-1&&(N=P)}}return N!==-1&&($+=encodeURIComponent(A.substring(N))),$!==void 0?$:A}function _(A){let E;for(let b=0;b<A.length;b++){const $=A.charCodeAt(b);$===35||$===63?(E===void 0&&(E=A.substr(0,b)),E+=v[$]):E!==void 0&&(E+=A[b])}return E!==void 0?E:A}function h(A,E){let b;return b=A.authority&&A.path.length>1&&A.scheme==="file"?`//${A.authority}${A.path}`:A.path.charCodeAt(0)===47&&(A.path.charCodeAt(1)>=65&&A.path.charCodeAt(1)<=90||A.path.charCodeAt(1)>=97&&A.path.charCodeAt(1)<=122)&&A.path.charCodeAt(2)===58?A.path[1].toLowerCase()+A.path.substr(2):A.path,i&&(b=b.replace(/\//g,"\\")),b}function p(A,E){const b=E?_:R;let $="",{scheme:N,authority:P,path:O,query:He,fragment:x}=A;if(N&&($+=N,$+=":"),(P||N==="file")&&($+=u,$+=u),P){let S=P.indexOf("@");if(S!==-1){const te=P.substr(0,S);P=P.substr(S+1),S=te.lastIndexOf(":"),S===-1?$+=b(te,!1,!1):($+=b(te.substr(0,S),!1,!1),$+=":",$+=b(te.substr(S+1),!1,!0)),$+="@"}P=P.toLowerCase(),S=P.lastIndexOf(":"),S===-1?$+=b(P,!1,!0):($+=b(P.substr(0,S),!1,!0),$+=P.substr(S))}if(O){if(O.length>=3&&O.charCodeAt(0)===47&&O.charCodeAt(2)===58){const S=O.charCodeAt(1);S>=65&&S<=90&&(O=`/${String.fromCharCode(S+32)}:${O.substr(3)}`)}else if(O.length>=2&&O.charCodeAt(1)===58){const S=O.charCodeAt(0);S>=65&&S<=90&&(O=`${String.fromCharCode(S+32)}:${O.substr(2)}`)}$+=b(O,!0,!1)}return He&&($+="?",$+=b(He,!1,!1)),x&&($+="#",$+=E?x:R(x,!1,!1)),$}function w(A){try{return decodeURIComponent(A)}catch{return A.length>3?A.substr(0,3)+w(A.substr(3)):A}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function G(A){return A.match(F)?A.replace(F,E=>w(E)):A}var J=n(470);const be=J.posix||J,Ee="/";var Pe;(function(A){A.joinPath=function(E,...b){return E.with({path:be.join(E.path,...b)})},A.resolvePath=function(E,...b){let $=E.path,N=!1;$[0]!==Ee&&($=Ee+$,N=!0);let P=be.resolve($,...b);return N&&P[0]===Ee&&!E.authority&&(P=P.substring(1)),E.with({path:P})},A.dirname=function(E){if(E.path.length===0||E.path===Ee)return E;let b=be.dirname(E.path);return b.length===1&&b.charCodeAt(0)===46&&(b=""),E.with({path:b})},A.basename=function(E){return be.basename(E.path)},A.extname=function(E){return be.extname(E.path)}})(Pe||(Pe={}))})(),E_=r})();const{URI:at,Utils:vi}=E_;var he;(function(t){t.basename=vi.basename,t.dirname=vi.dirname,t.extname=vi.extname,t.joinPath=vi.joinPath,t.resolvePath=vi.resolvePath;const e=typeof process=="object"&&(process==null?void 0:process.platform)==="win32";function n(s,o){return(s==null?void 0:s.toString())===(o==null?void 0:o.toString())}t.equals=n;function r(s,o){const a=typeof s=="string"?at.parse(s).path:s.path,c=typeof o=="string"?at.parse(o).path:o.path,l=a.split("/").filter(d=>d.length>0),u=c.split("/").filter(d=>d.length>0);if(e){const d=/^[A-Z]:$/;if(l[0]&&d.test(l[0])&&(l[0]=l[0].toLowerCase()),u[0]&&d.test(u[0])&&(u[0]=u[0].toLowerCase()),l[0]!==u[0])return c.substring(1)}let f=0;for(;f<l.length&&l[f]===u[f];f++);const m="../".repeat(l.length-f),g=u.slice(f).join("/");return m+g}t.relative=r;function i(s){return at.parse(s.toString()).toString()}t.normalize=i})(he||(he={}));var U;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(U||(U={}));class O0{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,n=ce.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,n)}fromTextDocument(e,n,r){return n=n??at.parse(e.uri),ce.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromString(e,n,r){return ce.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromModel(e,n){return this.create(n,{$model:e})}create(e,n,r){if(typeof n=="string"){const i=this.parse(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else if("$model"in n){const i={value:n.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}async createAsync(e,n,r){if(typeof n=="string"){const i=await this.parseAsync(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else{const i=await this.parseAsync(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}createLangiumDocument(e,n,r,i){let s;if(r)s={parseResult:e,uri:n,state:U.Parsed,references:[],textDocument:r};else{const o=this.createTextDocumentGetter(n,i);s={parseResult:e,uri:n,state:U.Parsed,references:[],get textDocument(){return o()}}}return e.value.$document=s,s}async update(e,n){var r,i;const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText,o=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=o?o.getText():await this.fileSystemProvider.readFile(e.uri);if(o)Object.defineProperty(e,"textDocument",{value:o});else{const c=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:c})}return s!==a&&(e.parseResult=await this.parseAsync(e.uri,a,n),e.parseResult.value.$document=e),e.state=U.Parsed,e}parse(e,n,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n,r)}parseAsync(e,n,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n,r)}createTextDocumentGetter(e,n){const r=this.serviceRegistry;let i;return()=>i??(i=Kc.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,n??""))}}class x0{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return Re(this.documentMap.values())}addDocument(e){const n=e.uri.toString();if(this.documentMap.has(n))throw new Error(`A document with the URI '${n}' is already present.`);this.documentMap.set(n,e)}getDocument(e){const n=e.toString();return this.documentMap.get(n)}async getOrCreateDocument(e,n){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,n),this.addDocument(r),r)}createDocument(e,n,r){if(r)return this.langiumDocumentFactory.fromString(n,e,r).then(i=>(this.addDocument(i),i));{const i=this.langiumDocumentFactory.fromString(n,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(this.serviceRegistry.getServices(e).references.Linker.unlink(r),r.state=U.Changed,r.precomputedScopes=void 0,r.diagnostics=void 0),r}deleteDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(r.state=U.Changed,this.documentMap.delete(n)),r}}const gu=Symbol("ref_resolving");class P_{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,n=ce.None){for(const r of sr(e.parseResult.value))await ot(n),Iy(r).forEach(i=>this.doLink(i,e))}doLink(e,n){var r;const i=e.reference;if(i._ref===void 0){i._ref=gu;try{const s=this.getCandidate(e);if(oc(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){const o=this.loadAstNode(s);i._ref=o??this.createLinkingError(e,s)}else i._ref=void 0}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const o=(r=s.message)!==null&&r!==void 0?r:String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${o}`})}n.references.push(i)}}unlink(e){for(const n of e.references)delete n._ref,delete n._nodeDescription;e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,n,r,i){const s=this,o={$refNode:r,$refText:i,get ref(){var a;if(Je(this._ref))return this._ref;if(NT(this._nodeDescription)){const c=s.loadAstNode(this._nodeDescription);this._ref=c??s.createLinkingError({reference:o,container:e,property:n},this._nodeDescription)}else if(this._ref===void 0){this._ref=gu;const c=rr(e).$document,l=s.getLinkedNode({reference:o,container:e,property:n});if(l.error&&c&&c.state<U.ComputedScopes)return this._ref=void 0;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr,c==null||c.references.push(this)}else if(this._ref===gu)throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);return Je(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return oc(this._ref)?this._ref:void 0}};return o}getLinkedNode(e){var n;try{const r=this.getCandidate(e);if(oc(r))return{error:r};const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=(n=r.message)!==null&&n!==void 0?n:String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}}loadAstNode(e){if(e.node)return e.node;const n=this.langiumDocuments().getDocument(e.documentUri);if(n)return this.astNodeLocator.getAstNode(n.parseResult.value,e.path)}createLinkingError(e,n){const r=rr(e.container).$document;r&&r.state<U.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:n})}}function A_(t){return typeof t.name=="string"}class L0{getName(e){if(A_(e))return e.name}getNameNode(e){return Zf(e.$cstNode,"name")}}class M0{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){const n=pR(e),r=e.astNode;if(n&&r){const i=r[n.feature];if(en(i))return i.ref;if(Array.isArray(i)){for(const s of i)if(en(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end)return s.ref}}if(r){const i=this.nameProvider.getNameNode(r);if(i&&(i===e||xT(e,i)))return r}}}findDeclarationNode(e){const n=this.findDeclaration(e);if(n!=null&&n.$cstNode){const r=this.nameProvider.getNameNode(n);return r??n.$cstNode}}findReferences(e,n){const r=[];if(n.includeDeclaration){const s=this.getReferenceToSelf(e);s&&r.push(s)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return n.documentUri&&(i=i.filter(s=>he.equals(s.sourceUri,n.documentUri))),r.push(...i),Re(r)}getReferenceToSelf(e){const n=this.nameProvider.getNameNode(e);if(n){const r=sn(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:Tc(n),local:!0}}}}class Wc{constructor(e){if(this.map=new Map,e)for(const[n,r]of e)this.add(n,r)}get size(){return ad.sum(Re(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,n){if(n===void 0)return this.map.delete(e);{const r=this.map.get(e);if(r){const i=r.indexOf(n);if(i>=0)return r.length===1?this.map.delete(e):r.splice(i,1),!0}return!1}}get(e){var n;return(n=this.map.get(e))!==null&&n!==void 0?n:[]}has(e,n){if(n===void 0)return this.map.has(e);{const r=this.map.get(e);return r?r.indexOf(n)>=0:!1}}add(e,n){return this.map.has(e)?this.map.get(e).push(n):this.map.set(e,[n]),this}addAll(e,n){return this.map.has(e)?this.map.get(e).push(...n):this.map.set(e,Array.from(n)),this}forEach(e){this.map.forEach((n,r)=>n.forEach(i=>e(i,r,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return Re(this.map.entries()).flatMap(([e,n])=>n.map(r=>[e,r]))}keys(){return Re(this.map.keys())}values(){return Re(this.map.values()).flat()}entriesGroupedByKey(){return Re(this.map.entries())}}class sm{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(const[n,r]of e)this.set(n,r)}clear(){this.map.clear(),this.inverse.clear()}set(e,n){return this.map.set(e,n),this.inverse.set(n,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const n=this.map.get(e);return n!==void 0?(this.map.delete(e),this.inverse.delete(n),!0):!1}}class F0{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,n=ce.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,n)}async computeExportsForNode(e,n,r=il,i=ce.None){const s=[];this.exportNode(e,s,n);for(const o of r(e))await ot(i),this.exportNode(o,s,n);return s}exportNode(e,n,r){const i=this.nameProvider.getName(e);i&&n.push(this.descriptions.createDescription(e,i,r))}async computeLocalScopes(e,n=ce.None){const r=e.parseResult.value,i=new Wc;for(const s of tn(r))await ot(n),this.processNode(s,e,i);return i}processNode(e,n,r){const i=e.$container;if(i){const s=this.nameProvider.getName(e);s&&r.add(i,this.descriptions.createDescription(e,s,n))}}}class om{constructor(e,n,r){var i;this.elements=e,this.outerScope=n,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const n=this.caseInsensitive?this.elements.find(r=>r.name.toLowerCase()===e.toLowerCase()):this.elements.find(r=>r.name===e);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}}class H0{constructor(e,n,r){var i;this.elements=new Map,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1;for(const s of e){const o=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(o,s)}this.outerScope=n}getElement(e){const n=this.caseInsensitive?e.toLowerCase():e,r=this.elements.get(n);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=Re(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}}class N_{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}}class j0 extends N_{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,n){this.throwIfDisposed(),this.cache.set(e,n)}get(e,n){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(n){const r=n();return this.cache.set(e,r),r}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}}class U0 extends N_{constructor(e){super(),this.cache=new Map,this.converter=e??(n=>n)}has(e,n){return this.throwIfDisposed(),this.cacheForContext(e).has(n)}set(e,n,r){this.throwIfDisposed(),this.cacheForContext(e).set(n,r)}get(e,n,r){this.throwIfDisposed();const i=this.cacheForContext(e);if(i.has(n))return i.get(n);if(r){const s=r();return i.set(n,s),s}else return}delete(e,n){return this.throwIfDisposed(),this.cacheForContext(e).delete(n)}clear(e){if(this.throwIfDisposed(),e){const n=this.converter(e);this.cache.delete(n)}else this.cache.clear()}cacheForContext(e){const n=this.converter(e);let r=this.cache.get(n);return r||(r=new Map,this.cache.set(n,r)),r}}class q0 extends j0{constructor(e,n){super(),n?(this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n,()=>{this.clear()})),this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{i.length>0&&this.clear()}))):this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}}class I_{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new q0(e.shared)}getScope(e){const n=[],r=this.reflection.getReferenceType(e),i=sn(e.container).precomputedScopes;if(i){let o=e.container;do{const a=i.get(o);a.length>0&&n.push(Re(a).filter(c=>this.reflection.isSubtype(c.type,r))),o=o.$container}while(o)}let s=this.getGlobalScope(r,e);for(let o=n.length-1;o>=0;o--)s=this.createScope(n[o],s);return s}createScope(e,n,r){return new om(Re(e),n,r)}createScopeForNodes(e,n,r){const i=Re(e).map(s=>{const o=this.nameProvider.getName(s);if(o)return this.descriptions.createDescription(s,o)}).nonNullable();return new om(i,n,r)}getGlobalScope(e,n){return this.globalScopeCache.get(e,()=>new H0(this.indexManager.allElements(e)))}}function D_(t){return typeof t.$comment=="string"}function am(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}class B0{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,n){const r=n??{},i=n==null?void 0:n.replacer,s=(a,c)=>this.replacer(a,c,r),o=i?(a,c)=>i(a,c,s):s;try{return this.currentDocument=sn(e),JSON.stringify(e,o,n==null?void 0:n.space)}finally{this.currentDocument=void 0}}deserialize(e,n){const r=n??{},i=JSON.parse(e);return this.linkNode(i,i,r),i}replacer(e,n,{refText:r,sourceText:i,textRegions:s,comments:o,uriConverter:a}){var c,l,u,f;if(!this.ignoreProperties.has(e))if(en(n)){const m=n.ref,g=r?n.$refText:void 0;if(m){const d=sn(m);let v="";this.currentDocument&&this.currentDocument!==d&&(a?v=a(d.uri,n):v=d.uri.toString());const R=this.astNodeLocator.getAstNodePath(m);return{$ref:`${v}#${R}`,$refText:g}}else return{$error:(l=(c=n.error)===null||c===void 0?void 0:c.message)!==null&&l!==void 0?l:"Could not resolve reference",$refText:g}}else if(Je(n)){let m;if(s&&(m=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},n)),(!e||n.$document)&&(m!=null&&m.$textRegion)&&(m.$textRegion.documentURI=(u=this.currentDocument)===null||u===void 0?void 0:u.uri.toString())),i&&!e&&(m??(m=Object.assign({},n)),m.$sourceText=(f=n.$cstNode)===null||f===void 0?void 0:f.text),o){m??(m=Object.assign({},n));const g=this.commentProvider.getComment(n);g&&(m.$comment=g.replace(/\r/g,""))}return m??n}else return n}addAstNodeRegionWithAssignmentsTo(e){const n=r=>({offset:r.offset,end:r.end,length:r.length,range:r.range});if(e.$cstNode){const r=e.$textRegion=n(e.$cstNode),i=r.assignments={};return Object.keys(e).filter(s=>!s.startsWith("$")).forEach(s=>{const o=jy(e.$cstNode,s).map(n);o.length!==0&&(i[s]=o)}),e}}linkNode(e,n,r,i,s,o){for(const[c,l]of Object.entries(e))if(Array.isArray(l))for(let u=0;u<l.length;u++){const f=l[u];am(f)?l[u]=this.reviveReference(e,c,n,f,r):Je(f)&&this.linkNode(f,n,r,e,c,u)}else am(l)?e[c]=this.reviveReference(e,c,n,l,r):Je(l)&&this.linkNode(l,n,r,e,c);const a=e;a.$container=i,a.$containerProperty=s,a.$containerIndex=o}reviveReference(e,n,r,i,s){let o=i.$refText,a=i.$error;if(i.$ref){const c=this.getRefNode(r,i.$ref,s.uriConverter);if(Je(c))return o||(o=this.nameProvider.getName(c)),{$refText:o??"",ref:c};a=c}if(a){const c={$refText:o??""};return c.error={container:e,property:n,message:a,reference:c},c}else return}getRefNode(e,n,r){try{const i=n.indexOf("#");if(i===0){const c=this.astNodeLocator.getAstNode(e,n.substring(1));return c||"Could not resolve path: "+n}if(i<0){const c=r?r(n):at.parse(n),l=this.langiumDocuments.getDocument(c);return l?l.parseResult.value:"Could not find document for URI: "+n}const s=r?r(n.substring(0,i)):at.parse(n.substring(0,i)),o=this.langiumDocuments.getDocument(s);if(!o)return"Could not find document for URI: "+n;if(i===n.length-1)return o.parseResult.value;const a=this.astNodeLocator.getAstNode(o.parseResult.value,n.substring(i+1));return a||"Could not resolve URI: "+n}catch(i){return String(i)}}}class K0{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.fileNameMap=new Map,this.textDocuments=e==null?void 0:e.workspace.TextDocuments}register(e){const n=e.LanguageMetaData;for(const r of n.fileExtensions)this.fileExtensionMap.has(r)&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileExtensionMap.set(r,e);if(n.fileNames)for(const r of n.fileNames)this.fileNameMap.has(r)&&console.warn(`The file name ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileNameMap.set(r,e);this.languageIdMap.set(n.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var n,r,i;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");const s=(r=(n=this.textDocuments)===null||n===void 0?void 0:n.get(e))===null||r===void 0?void 0:r.languageId;if(s!==void 0){const l=this.languageIdMap.get(s);if(l)return l}const o=he.extname(e),a=he.basename(e),c=(i=this.fileNameMap.get(a))!==null&&i!==void 0?i:this.fileExtensionMap.get(o);if(!c)throw s?new Error(`The service registry contains no services for the extension '${o}' for language '${s}'.`):new Error(`The service registry contains no services for the extension '${o}'.`);return c}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}}function Zi(t){return{code:t}}var Gc;(function(t){t.all=["fast","slow","built-in"]})(Gc||(Gc={}));class W0{constructor(e){this.entries=new Wc,this.entriesBefore=[],this.entriesAfter=[],this.reflection=e.shared.AstReflection}register(e,n=this,r="fast"){if(r==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(const[i,s]of Object.entries(e)){const o=s;if(Array.isArray(o))for(const a of o){const c={check:this.wrapValidationException(a,n),category:r};this.addEntry(i,c)}else if(typeof o=="function"){const a={check:this.wrapValidationException(o,n),category:r};this.addEntry(i,a)}else ks()}}wrapValidationException(e,n){return async(r,i,s)=>{await this.handleException(()=>e.call(n,r,i,s),"An error occurred during validation",i,r)}}async handleException(e,n,r,i){try{await e()}catch(s){if(Hs(s))throw s;console.error(`${n}:`,s),s instanceof Error&&s.stack&&console.error(s.stack);const o=s instanceof Error?s.message:String(s);r("error",`${n}: ${o}`,{node:i})}}addEntry(e,n){if(e==="AstNode"){this.entries.add("AstNode",n);return}for(const r of this.reflection.getAllSubTypes(e))this.entries.add(r,n)}getChecks(e,n){let r=Re(this.entries.get(e)).concat(this.entries.get("AstNode"));return n&&(r=r.filter(i=>n.includes(i.category))),r.map(i=>i.check)}registerBeforeDocument(e,n=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",n))}registerAfterDocument(e,n=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",n))}wrapPreparationException(e,n,r){return async(i,s,o,a)=>{await this.handleException(()=>e.call(r,i,s,o,a),n,s,i)}}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class G0{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,n={},r=ce.None){const i=e.parseResult,s=[];if(await ot(r),(!n.categories||n.categories.includes("built-in"))&&(this.processLexingErrors(i,s,n),n.stopAfterLexingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.LexingError})||(this.processParsingErrors(i,s,n),n.stopAfterParsingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.ParsingError}))||(this.processLinkingErrors(e,s,n),n.stopAfterLinkingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===jt.LinkingError}))))return s;try{s.push(...await this.validateAst(i.value,n,r))}catch(o){if(Hs(o))throw o;console.error("An error occurred during validation:",o)}return await ot(r),s}processLexingErrors(e,n,r){var i,s,o;const a=[...e.lexerErrors,...(s=(i=e.lexerReport)===null||i===void 0?void 0:i.diagnostics)!==null&&s!==void 0?s:[]];for(const c of a){const l=(o=c.severity)!==null&&o!==void 0?o:"error",u={severity:yu(l),range:{start:{line:c.line-1,character:c.column-1},end:{line:c.line-1,character:c.column+c.length-1}},message:c.message,data:V0(l),source:this.getSource()};n.push(u)}}processParsingErrors(e,n,r){for(const i of e.parserErrors){let s;if(isNaN(i.token.startOffset)){if("previousToken"in i){const o=i.previousToken;if(isNaN(o.startOffset)){const a={line:0,character:0};s={start:a,end:a}}else{const a={line:o.endLine-1,character:o.endColumn};s={start:a,end:a}}}}else s=cd(i.token);if(s){const o={severity:yu("error"),range:s,message:i.message,data:Zi(jt.ParsingError),source:this.getSource()};n.push(o)}}}processLinkingErrors(e,n,r){for(const i of e.references){const s=i.error;if(s){const o={node:s.container,property:s.property,index:s.index,data:{code:jt.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};n.push(this.toDiagnostic("error",s.message,o))}}}async validateAst(e,n,r=ce.None){const i=[],s=(o,a,c)=>{i.push(this.toDiagnostic(o,a,c))};return await this.validateAstBefore(e,n,s,r),await this.validateAstNodes(e,n,s,r),await this.validateAstAfter(e,n,s,r),i}async validateAstBefore(e,n,r,i=ce.None){var s;const o=this.validationRegistry.checksBefore;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}async validateAstNodes(e,n,r,i=ce.None){await Promise.all(sr(e).map(async s=>{await ot(i);const o=this.validationRegistry.getChecks(s.$type,n.categories);for(const a of o)await a(s,r,i)}))}async validateAstAfter(e,n,r,i=ce.None){var s;const o=this.validationRegistry.checksAfter;for(const a of o)await ot(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}toDiagnostic(e,n,r){return{message:n,range:z0(r),severity:yu(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function z0(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Zf(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Uy(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function yu(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}function V0(t){switch(t){case"error":return Zi(jt.LexingError);case"warning":return Zi(jt.LexingWarning);case"info":return Zi(jt.LexingInfo);case"hint":return Zi(jt.LexingHint);default:throw new Error("Invalid diagnostic severity: "+t)}}var jt;(function(t){t.LexingError="lexing-error",t.LexingWarning="lexing-warning",t.LexingInfo="lexing-info",t.LexingHint="lexing-hint",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(jt||(jt={}));class Y0{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,n,r){const i=r??sn(e);n??(n=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if(!n)throw new Error(`Node at path ${s} has no name.`);let o;const a=()=>{var c;return o??(o=Tc((c=this.nameProvider.getNameNode(e))!==null&&c!==void 0?c:e.$cstNode))};return{node:e,name:n,get nameSegment(){return a()},selectionSegment:Tc(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class X0{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,n=ce.None){const r=[],i=e.parseResult.value;for(const s of sr(i))await ot(n),Iy(s).filter(o=>!oc(o)).forEach(o=>{const a=this.createDescription(o);a&&r.push(a)});return r}createDescription(e){const n=e.reference.$nodeDescription,r=e.reference.$refNode;if(!n||!r)return;const i=sn(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:n.documentUri,targetPath:n.path,segment:Tc(r),local:he.equals(n.documentUri,i)}}}class J0{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){const n=this.getAstNodePath(e.$container),r=this.getPathSegment(e);return n+this.segmentSeparator+r}return""}getPathSegment({$containerProperty:e,$containerIndex:n}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return n!==void 0?e+this.indexSeparator+n:e}getAstNode(e,n){return n.split(this.segmentSeparator).reduce((i,s)=>{if(!i||s.length===0)return i;const o=s.indexOf(this.indexSeparator);if(o>0){const a=s.substring(0,o),c=parseInt(s.substring(o+1)),l=i[a];return l==null?void 0:l[c]}return i[s]},e)}}class Q0{constructor(e){this._ready=new Dh,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new S_,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var n,r;this.workspaceConfig=(r=(n=e.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&r!==void 0?r:!1}async initialized(e){if(this.workspaceConfig){if(e.register){const n=this.serviceRegistry.all;e.register({section:n.map(r=>this.toSectionName(r.LanguageMetaData.languageId))})}if(e.fetchConfiguration){const n=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),r=await e.fetchConfiguration(n);n.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(n=>{const r=e.settings[n];this.updateSectionConfiguration(n,r),this.onConfigurationSectionUpdateEmitter.fire({section:n,configuration:r})})}updateSectionConfiguration(e,n){this.settings[e]=n}async getConfiguration(e,n){await this.ready;const r=this.toSectionName(e);if(this.settings[r])return this.settings[r][n]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var os;(function(t){function e(n){return{dispose:async()=>await n()}}t.create=e})(os||(os={}));class Z0{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Wc,this.documentPhaseListeners=new Wc,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=U.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,n={},r=ce.None){var i,s;for(const o of e){const a=o.uri.toString();if(o.state===U.Validated){if(typeof n.validation=="boolean"&&n.validation)o.state=U.IndexedReferences,o.diagnostics=void 0,this.buildState.delete(a);else if(typeof n.validation=="object"){const c=this.buildState.get(a),l=(i=c==null?void 0:c.result)===null||i===void 0?void 0:i.validationChecks;if(l){const f=((s=n.validation.categories)!==null&&s!==void 0?s:Gc.all).filter(m=>!l.includes(m));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},n.validation),{categories:f})},result:c.result}),o.state=U.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=U.Changed,await this.emitUpdate(e.map(o=>o.uri),[]),await this.buildDocuments(e,n,r)}async update(e,n,r=ce.None){this.currentState=U.Changed;for(const o of n)this.langiumDocuments.deleteDocument(o),this.buildState.delete(o.toString()),this.indexManager.remove(o);for(const o of e){if(!this.langiumDocuments.invalidateDocument(o)){const c=this.langiumDocumentFactory.fromModel({$type:"INVALID"},o);c.state=U.Changed,this.langiumDocuments.addDocument(c)}this.buildState.delete(o.toString())}const i=Re(e).concat(n).map(o=>o.toString()).toSet();this.langiumDocuments.all.filter(o=>!i.has(o.uri.toString())&&this.shouldRelink(o,i)).forEach(o=>{this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o),o.state=Math.min(o.state,U.ComputedScopes),o.diagnostics=void 0}),await this.emitUpdate(e,n),await ot(r);const s=this.sortDocuments(this.langiumDocuments.all.filter(o=>{var a;return o.state<U.Linked||!(!((a=this.buildState.get(o.uri.toString()))===null||a===void 0)&&a.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)}async emitUpdate(e,n){await Promise.all(this.updateListeners.map(r=>r(e,n)))}sortDocuments(e){let n=0,r=e.length-1;for(;n<r;){for(;n<e.length&&this.hasTextDocument(e[n]);)n++;for(;r>=0&&!this.hasTextDocument(e[r]);)r--;n<r&&([e[n],e[r]]=[e[r],e[n]])}return e}hasTextDocument(e){var n;return!!(!((n=this.textDocuments)===null||n===void 0)&&n.get(e.uri))}shouldRelink(e,n){return e.references.some(r=>r.error!==void 0)?!0:this.indexManager.isAffected(e,n)}onUpdate(e){return this.updateListeners.push(e),os.create(()=>{const n=this.updateListeners.indexOf(e);n>=0&&this.updateListeners.splice(n,1)})}async buildDocuments(e,n,r){this.prepareBuild(e,n),await this.runCancelable(e,U.Parsed,r,o=>this.langiumDocumentFactory.update(o,r)),await this.runCancelable(e,U.IndexedContent,r,o=>this.indexManager.updateContent(o,r)),await this.runCancelable(e,U.ComputedScopes,r,async o=>{const a=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await a.computeLocalScopes(o,r)});const i=e.filter(o=>this.shouldLink(o));await this.runCancelable(i,U.Linked,r,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,r)),await this.runCancelable(i,U.IndexedReferences,r,o=>this.indexManager.updateReferences(o,r));const s=e.filter(o=>this.shouldValidate(o));await this.runCancelable(s,U.Validated,r,o=>this.validate(o,r));for(const o of e){const a=this.buildState.get(o.uri.toString());a&&(a.completed=!0)}}prepareBuild(e,n){for(const r of e){const i=r.uri.toString(),s=this.buildState.get(i);(!s||s.completed)&&this.buildState.set(i,{completed:!1,options:n,result:s==null?void 0:s.result})}}async runCancelable(e,n,r,i){const s=e.filter(a=>a.state<n);for(const a of s)await ot(r),await i(a),a.state=n,await this.notifyDocumentPhase(a,n,r);const o=e.filter(a=>a.state===n);await this.notifyBuildPhase(o,n,r),this.currentState=n}onBuildPhase(e,n){return this.buildPhaseListeners.add(e,n),os.create(()=>{this.buildPhaseListeners.delete(e,n)})}onDocumentPhase(e,n){return this.documentPhaseListeners.add(e,n),os.create(()=>{this.documentPhaseListeners.delete(e,n)})}waitUntil(e,n,r){let i;if(n&&"path"in n?i=n:r=n,r??(r=ce.None),i){const s=this.langiumDocuments.getDocument(i);if(s&&s.state>=e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):r.isCancellationRequested?Promise.reject(Bc):new Promise((s,o)=>{const a=this.onBuildPhase(e,()=>{if(a.dispose(),c.dispose(),i){const l=this.langiumDocuments.getDocument(i);s(l==null?void 0:l.uri)}else s(void 0)}),c=r.onCancellationRequested(()=>{a.dispose(),c.dispose(),o(Bc)})})}async notifyDocumentPhase(e,n,r){const s=this.documentPhaseListeners.get(n).slice();for(const o of s)try{await o(e,r)}catch(a){if(!Hs(a))throw a}}async notifyBuildPhase(e,n,r){if(e.length===0)return;const s=this.buildPhaseListeners.get(n).slice();for(const o of s)await ot(r),await o(e,r)}shouldLink(e){var n;return(n=this.getBuildOptions(e).eagerLinking)!==null&&n!==void 0?n:!0}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,n){var r,i;const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,o=this.getBuildOptions(e).validation,a=typeof o=="object"?o:void 0,c=await s.validateDocument(e,a,n);e.diagnostics?e.diagnostics.push(...c):e.diagnostics=c;const l=this.buildState.get(e.uri.toString());if(l){(r=l.result)!==null&&r!==void 0||(l.result={});const u=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:Gc.all;l.result.validationChecks?l.result.validationChecks.push(...u):l.result.validationChecks=[...u]}}getBuildOptions(e){var n,r;return(r=(n=this.buildState.get(e.uri.toString()))===null||n===void 0?void 0:n.options)!==null&&r!==void 0?r:{}}}class eA{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new U0,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,n){const r=sn(e).uri,i=[];return this.referenceIndex.forEach(s=>{s.forEach(o=>{he.equals(o.targetUri,r)&&o.targetPath===n&&i.push(o)})}),Re(i)}allElements(e,n){let r=Re(this.symbolIndex.keys());return n&&(r=r.filter(i=>!n||n.has(i))),r.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,n){var r;return n?this.symbolByTypeIndex.get(e,n,()=>{var s;return((s=this.symbolIndex.get(e))!==null&&s!==void 0?s:[]).filter(a=>this.astReflection.isSubtype(a.type,n))}):(r=this.symbolIndex.get(e))!==null&&r!==void 0?r:[]}remove(e){const n=e.toString();this.symbolIndex.delete(n),this.symbolByTypeIndex.clear(n),this.referenceIndex.delete(n)}async updateContent(e,n=ce.None){const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,n),s=e.uri.toString();this.symbolIndex.set(s,i),this.symbolByTypeIndex.clear(s)}async updateReferences(e,n=ce.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,n);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,n){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i=>!i.local&&n.has(i.targetUri.toString())):!1}}class tA{constructor(e){this.initialBuildOptions={},this._ready=new Dh,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){var n;this.folders=(n=e.workspaceFolders)!==null&&n!==void 0?n:void 0}initialized(e){return this.mutex.write(n=>{var r;return this.initializeWorkspace((r=this.folders)!==null&&r!==void 0?r:[],n)})}async initializeWorkspace(e,n=ce.None){const r=await this.performStartup(e);await ot(n),await this.documentBuilder.build(r,this.initialBuildOptions,n)}async performStartup(e){const n=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),r=this.serviceRegistry.all.flatMap(o=>{var a;return(a=o.LanguageMetaData.fileNames)!==null&&a!==void 0?a:[]}),i=[],s=o=>{i.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,s),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,{fileExtensions:n,fileNames:r},s))),this._ready.resolve(),i}loadAdditionalDocuments(e,n){return Promise.resolve()}getRootFolder(e){return at.parse(e.uri)}async traverseFolder(e,n,r,i){const s=await this.fileSystemProvider.readDirectory(n);await Promise.all(s.map(async o=>{if(this.includeEntry(e,o,r)){if(o.isDirectory)await this.traverseFolder(e,o.uri,r,i);else if(o.isFile){const a=await this.langiumDocuments.getOrCreateDocument(o.uri);i(a)}}}))}includeEntry(e,n,r){const i=he.basename(n.uri);return i.startsWith(".")?!1:n.isDirectory?i!=="node_modules"&&i!=="out":n.isFile?r.fileExtensions.includes(he.extname(n.uri))||r.fileNames.includes(he.basename(n.uri)):!1}}class nA{buildUnexpectedCharactersMessage(e,n,r,i,s){return _d.buildUnexpectedCharactersMessage(e,n,r,i,s)}buildUnableToPopLexerModeMessage(e){return _d.buildUnableToPopLexerModeMessage(e)}}const rA={mode:"full"};class iA{constructor(e){this.errorMessageProvider=e.parser.LexerErrorMessageProvider,this.tokenBuilder=e.parser.TokenBuilder;const n=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(n);const r=cm(n)?Object.values(n):n,i=e.LanguageMetaData.mode==="production";this.chevrotainLexer=new pt(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})}get definition(){return this.tokenTypes}tokenize(e,n=rA){var r,i,s;const o=this.chevrotainLexer.tokenize(e);return{tokens:o.tokens,errors:o.errors,hidden:(r=o.groups.hidden)!==null&&r!==void 0?r:[],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)}}toTokenTypeDictionary(e){if(cm(e))return e;const n=O_(e)?Object.values(e.modes).flat():e,r={};return n.forEach(i=>r[i.name]=i),r}}function sA(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function O_(t){return t&&"modes"in t&&"defaultMode"in t}function cm(t){return!sA(t)&&!O_(t)}function x_(t,e,n){let r,i;typeof t=="string"?(i=e,r=n):(i=t.range.start,r=e),i||(i=re.create(0,0));const s=M_(t),o=Oh(r),a=aA({lines:s,position:i,options:o});return fA({index:0,tokens:a,position:i})}function L_(t,e){const n=Oh(e),r=M_(t);if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=n.start,a=n.end;return!!(o!=null&&o.exec(i))&&!!(a!=null&&a.exec(s))}function M_(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(iR)}const lm=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,oA=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function aA(t){var e,n,r;const i=[];let s=t.position.line,o=t.position.character;for(let a=0;a<t.lines.length;a++){const c=a===0,l=a===t.lines.length-1;let u=t.lines[a],f=0;if(c&&t.options.start){const g=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);g&&(f=g.index+g[0].length)}else{const g=(n=t.options.line)===null||n===void 0?void 0:n.exec(u);g&&(f=g.index+g[0].length)}if(l){const g=(r=t.options.end)===null||r===void 0?void 0:r.exec(u);g&&(u=u.substring(0,g.index))}if(u=u.substring(0,dA(u)),xf(u,f)>=u.length){if(i.length>0){const g=re.create(s,o);i.push({type:"break",content:"",range:Q.create(g,g)})}}else{lm.lastIndex=f;const g=lm.exec(u);if(g){const d=g[0],v=g[1],R=re.create(s,o+f),_=re.create(s,o+f+d.length);i.push({type:"tag",content:v,range:Q.create(R,_)}),f+=d.length,f=xf(u,f)}if(f<u.length){const d=u.substring(f),v=Array.from(d.matchAll(oA));i.push(...cA(v,d,s,o+f))}}s++,o=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function cA(t,e,n,r){const i=[];if(t.length===0){const s=re.create(n,r),o=re.create(n,r+e.length);i.push({type:"text",content:e,range:Q.create(s,o)})}else{let s=0;for(const a of t){const c=a.index,l=e.substring(s,c);l.length>0&&i.push({type:"text",content:e.substring(s,c),range:Q.create(re.create(n,s+r),re.create(n,c+r))});let u=l.length+1;const f=a[1];if(i.push({type:"inline-tag",content:f,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+f.length+r))}),u+=f.length,a.length===4){u+=a[2].length;const m=a[3];i.push({type:"text",content:m,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+m.length+r))})}else i.push({type:"text",content:"",range:Q.create(re.create(n,s+u+r),re.create(n,s+u+r))});s=c+a[0].length}const o=e.substring(s);o.length>0&&i.push({type:"text",content:o,range:Q.create(re.create(n,s+r),re.create(n,s+r+o.length))})}return i}const lA=/\S/,uA=/\s*$/;function xf(t,e){const n=t.substring(e).match(lA);return n?e+n.index:t.length}function dA(t){const e=t.match(uA);if(e&&typeof e.index=="number")return e.index}function fA(t){var e,n,r,i;const s=re.create(t.position.line,t.position.character);if(t.tokens.length===0)return new um([],Q.create(s,s));const o=[];for(;t.index<t.tokens.length;){const l=hA(t,o[o.length-1]);l&&o.push(l)}const a=(n=(e=o[0])===null||e===void 0?void 0:e.range.start)!==null&&n!==void 0?n:s,c=(i=(r=o[o.length-1])===null||r===void 0?void 0:r.range.end)!==null&&i!==void 0?i:s;return new um(o,Q.create(a,c))}function hA(t,e){const n=t.tokens[t.index];if(n.type==="tag")return H_(t,!1);if(n.type==="text"||n.type==="inline-tag")return F_(t);pA(n,e),t.index++}function pA(t,e){if(e){const n=new U_("",t.range);"inlines"in e?e.inlines.push(n):e.content.inlines.push(n)}}function F_(t){let e=t.tokens[t.index];const n=e;let r=e;const i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(mA(t)),r=e,e=t.tokens[t.index];return new Lf(i,Q.create(n.range.start,r.range.end))}function mA(t){return t.tokens[t.index].type==="inline-tag"?H_(t,!0):j_(t)}function H_(t,e){const n=t.tokens[t.index++],r=n.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){const s=j_(t);return new _u(r,new Lf([s],s.range),e,Q.create(n.range.start,s.range.end))}else{const s=F_(t);return new _u(r,s,e,Q.create(n.range.start,s.range.end))}else{const s=n.range;return new _u(r,new Lf([],s),e,s)}}function j_(t){const e=t.tokens[t.index++];return new U_(e.content,e.range)}function Oh(t){if(!t)return Oh({start:"/**",end:"*/",line:"*"});const{start:e,end:n,line:r}=t;return{start:vu(e,!0),end:vu(n,!1),line:vu(r,!0)}}function vu(t,e){if(typeof t=="string"||typeof t=="object"){const n=typeof t=="string"?ol(t):t.source;return e?new RegExp(`^\\s*${n}`):new RegExp(`\\s*${n}\\s*$`)}else return t}class um{constructor(e,n){this.elements=e,this.range=n}getTag(e){return this.getAllTags().find(n=>n.name===e)}getTags(e){return this.getAllTags().filter(n=>n.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(const n of this.elements)if(e.length===0)e=n.toString();else{const r=n.toString();e+=dm(e)+r}return e.trim()}toMarkdown(e){let n="";for(const r of this.elements)if(n.length===0)n=r.toMarkdown(e);else{const i=r.toMarkdown(e);n+=dm(n)+i}return n.trim()}}class _u{constructor(e,n,r,i){this.name=e,this.content=n,this.inline=r,this.range=i}toString(){let e=`@${this.name}`;const n=this.content.toString();return this.content.inlines.length===1?e=`${e} ${n}`:this.content.inlines.length>1&&(e=`${e}
${n}`),this.inline?`{${e}}`:e}toMarkdown(e){var n,r;return(r=(n=e==null?void 0:e.renderTag)===null||n===void 0?void 0:n.call(e,this))!==null&&r!==void 0?r:this.toMarkdownDefault(e)}toMarkdownDefault(e){const n=this.content.toMarkdown(e);if(this.inline){const s=gA(this.name,n,e??{});if(typeof s=="string")return s}let r="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?r="*":(e==null?void 0:e.tag)==="bold"?r="**":(e==null?void 0:e.tag)==="bold-italic"&&(r="***");let i=`${r}@${this.name}${r}`;return this.content.inlines.length===1?i=`${i} — ${n}`:this.content.inlines.length>1&&(i=`${i}
${n}`),this.inline?`{${i}}`:i}}function gA(t,e,n){var r,i;if(t==="linkplain"||t==="linkcode"||t==="link"){const s=e.indexOf(" ");let o=e;if(s>0){const c=xf(e,s);o=e.substring(c),e=e.substring(0,s)}return(t==="linkcode"||t==="link"&&n.link==="code")&&(o=`\`${o}\``),(i=(r=n.renderLink)===null||r===void 0?void 0:r.call(n,e,o))!==null&&i!==void 0?i:yA(e,o)}}function yA(t,e){try{return at.parse(t,!0),`[${e}](${t})`}catch{return t}}class Lf{constructor(e,n){this.inlines=e,this.range=n}toString(){let e="";for(let n=0;n<this.inlines.length;n++){const r=this.inlines[n],i=this.inlines[n+1];e+=r.toString(),i&&i.range.start.line>r.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let n="";for(let r=0;r<this.inlines.length;r++){const i=this.inlines[r],s=this.inlines[r+1];n+=i.toMarkdown(e),s&&s.range.start.line>i.range.start.line&&(n+=`
`)}return n}}class U_{constructor(e,n){this.text=e,this.range=n}toString(){return this.text}toMarkdown(){return this.text}}function dm(t){return t.endsWith(`
`)?`
`:`

`}class vA{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){const n=this.commentProvider.getComment(e);if(n&&L_(n))return x_(n).toMarkdown({renderLink:(i,s)=>this.documentationLinkRenderer(e,i,s),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,n,r){var i;const s=(i=this.findNameInPrecomputedScopes(e,n))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,n);if(s&&s.nameSegment){const o=s.nameSegment.range.start.line+1,a=s.nameSegment.range.start.character+1,c=s.documentUri.with({fragment:`L${o},${a}`});return`[${r}](${c.toString()})`}else return}documentationTagRenderer(e,n){}findNameInPrecomputedScopes(e,n){const i=sn(e).precomputedScopes;if(!i)return;let s=e;do{const a=i.get(s).find(c=>c.name===n);if(a)return a;s=s.$container}while(s)}findNameInGlobalScope(e,n){return this.indexManager.allElements().find(i=>i.name===n)}}class _A{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var n;return D_(e)?e.$comment:(n=by(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||n===void 0?void 0:n.text}}class TA{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,n){return Promise.resolve(this.syncParser.parse(e))}}class RA{constructor(){this.previousTokenSource=new Ih,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();const n=I0();return this.previousTokenSource=n,this.enqueue(this.writeQueue,e,n.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,n,r=ce.None){const i=new Dh,s={action:n,deferred:i,cancellationToken:r};return e.push(s),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;const e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:n,deferred:r,cancellationToken:i})=>{try{const s=await Promise.resolve().then(()=>n(i));r.resolve(s)}catch(s){Hs(s)?r.resolve(void 0):r.reject(s)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}}class wA{constructor(e){this.grammarElementIdMap=new sm,this.tokenTypeIdMap=new sm,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(n=>Object.assign(Object.assign({},n),{message:n.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}dehydrateLexerReport(e){return e}createDehyrationContext(e){const n=new Map,r=new Map;for(const i of sr(e))n.set(i,{});if(e.$cstNode)for(const i of _c(e.$cstNode))r.set(i,{});return{astNodes:n,cstNodes:r}}dehydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(r.$cstNode=this.dehydrateCstNode(e.$cstNode,n));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.dehydrateAstNode(a,n)):en(a)?o.push(this.dehydrateReference(a,n)):o.push(a)}else Je(s)?r[i]=this.dehydrateAstNode(s,n):en(s)?r[i]=this.dehydrateReference(s,n):s!==void 0&&(r[i]=s);return r}dehydrateReference(e,n){const r={};return r.$refText=e.$refText,e.$refNode&&(r.$refNode=n.cstNodes.get(e.$refNode)),r}dehydrateCstNode(e,n){const r=n.cstNodes.get(e);return Ty(e)?r.fullText=e.fullText:r.grammarSource=this.getGrammarElementId(e.grammarSource),r.hidden=e.hidden,r.astNode=n.astNodes.get(e.astNode),ar(e)?r.content=e.content.map(i=>this.dehydrateCstNode(i,n)):bs(e)&&(r.tokenType=e.tokenType.name,r.offset=e.offset,r.length=e.length,r.startLine=e.range.start.line,r.startColumn=e.range.start.character,r.endLine=e.range.end.line,r.endColumn=e.range.end.character),r}hydrate(e){const n=e.value,r=this.createHydrationContext(n);return"$cstNode"in n&&this.hydrateCstNode(n.$cstNode,r),{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(n,r)}}createHydrationContext(e){const n=new Map,r=new Map;for(const s of sr(e))n.set(s,{});let i;if(e.$cstNode)for(const s of _c(e.$cstNode)){let o;"fullText"in s?(o=new m_(s.fullText),i=o):"content"in s?o=new Ah:"tokenType"in s&&(o=this.hydrateCstLeafNode(s)),o&&(r.set(s,o),o.root=i)}return{astNodes:n,cstNodes:r}}hydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode&&(r.$cstNode=n.cstNodes.get(e.$cstNode));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Je(a)?o.push(this.setParent(this.hydrateAstNode(a,n),r)):en(a)?o.push(this.hydrateReference(a,r,i,n)):o.push(a)}else Je(s)?r[i]=this.setParent(this.hydrateAstNode(s,n),r):en(s)?r[i]=this.hydrateReference(s,r,i,n):s!==void 0&&(r[i]=s);return r}setParent(e,n){return e.$container=n,e}hydrateReference(e,n,r,i){return this.linker.buildReference(n,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,n,r=0){const i=n.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=n.astNodes.get(e.astNode),ar(i))for(const s of e.content){const o=this.hydrateCstNode(s,n,r++);i.content.push(o)}return i}hydrateCstLeafNode(e){const n=this.getTokenType(e.tokenType),r=e.offset,i=e.length,s=e.startLine,o=e.startColumn,a=e.endLine,c=e.endColumn,l=e.hidden;return new Ef(r,i,{start:{line:s,character:o},end:{line:a,character:c}},n,l)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if(e)return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.getKey(e)}createGrammarElementIdMap(){let e=0;for(const n of sr(this.grammar))$y(n)&&this.grammarElementIdMap.set(n,e++)}}function q_(t){return{documentation:{CommentProvider:e=>new _A(e),DocumentationProvider:e=>new vA(e)},parser:{AsyncParser:e=>new TA(e),GrammarConfig:e=>bR(e),LangiumParser:e=>p0(e),CompletionParser:e=>h0(e),ValueConverter:()=>new y0,TokenBuilder:()=>new g0,Lexer:e=>new iA(e),ParserErrorMessageProvider:()=>new v_,LexerErrorMessageProvider:()=>new nA},workspace:{AstNodeLocator:()=>new J0,AstNodeDescriptionProvider:e=>new Y0(e),ReferenceDescriptionProvider:e=>new X0(e)},references:{Linker:e=>new P_(e),NameProvider:()=>new L0,ScopeProvider:e=>new I_(e),ScopeComputation:e=>new F0(e),References:e=>new M0(e)},serializer:{Hydrator:e=>new wA(e),JsonSerializer:e=>new B0(e)},validation:{DocumentValidator:e=>new G0(e),ValidationRegistry:e=>new W0(e)},shared:()=>t.shared}}function B_(t){return{ServiceRegistry:e=>new K0(e),workspace:{LangiumDocuments:e=>new x0(e),LangiumDocumentFactory:e=>new O0(e),DocumentBuilder:e=>new Z0(e),IndexManager:e=>new eA(e),WorkspaceManager:e=>new tA(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new RA,ConfigurationProvider:e=>new Q0(e)}}}var zc;(function(t){t.merge=(e,n)=>Yc(Yc({},e),n)})(zc||(zc={}));function Vc(t,e,n,r,i,s,o,a,c){const l=[t,e,n,r,i,s,o,a,c].reduce(Yc,{});return W_(l)}const K_=Symbol("isProxy");function Mf(t){if(t&&t[K_])for(const e of Object.values(t))Mf(e);return t}function W_(t,e){const n=new Proxy({},{deleteProperty:()=>!1,set:()=>{throw new Error("Cannot set property on injected service container")},get:(r,i)=>i===K_?!0:hm(r,i,t,e||n),getOwnPropertyDescriptor:(r,i)=>(hm(r,i,t,e||n),Object.getOwnPropertyDescriptor(r,i)),has:(r,i)=>i in t,ownKeys:()=>[...Object.getOwnPropertyNames(t)]});return n}const fm=Symbol();function hm(t,e,n,r){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===fm)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in n){const i=n[e];t[e]=fm;try{t[e]=typeof i=="function"?i(r):W_(i,r)}catch(s){throw t[e]=s instanceof Error?s:void 0,s}return t[e]}else return}function Yc(t,e){if(e){for(const[n,r]of Object.entries(e))if(r!==void 0){const i=t[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"?t[n]=Yc(i,r):t[n]=r}}return t}class bA{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}const G_={fileSystemProvider:()=>new bA},kA={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},SA={AstReflection:()=>new Ny};function CA(){const t=Vc(B_(G_),SA),e=Vc(q_({shared:t}),kA);return t.ServiceRegistry.register(e),e}function $A(t){var e;const n=CA(),r=n.serializer.JsonSerializer.deserialize(t);return n.shared.workspace.LangiumDocumentFactory.fromModel(r,at.parse(`memory://${(e=r.name)!==null&&e!==void 0?e:"grammar"}.langium`)),r}var L={},Ff={},vn={},oe={},Tr={},xh={},Xc={},j={};Object.defineProperty(j,"__esModule",{value:!0});j.Message=j.NotificationType9=j.NotificationType8=j.NotificationType7=j.NotificationType6=j.NotificationType5=j.NotificationType4=j.NotificationType3=j.NotificationType2=j.NotificationType1=j.NotificationType0=j.NotificationType=j.RequestType9=j.RequestType8=j.RequestType7=j.RequestType6=j.RequestType5=j.RequestType4=j.RequestType3=j.RequestType2=j.RequestType1=j.RequestType=j.RequestType0=j.AbstractMessageSignature=j.ParameterStructures=j.ResponseError=j.ErrorCodes=void 0;const nr=Fe;var Hf;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Hf||(j.ErrorCodes=Hf={}));class Lh extends Error{constructor(e,n,r){super(n),this.code=nr.number(e)?e:Hf.UnknownErrorCode,this.data=r,Object.setPrototypeOf(this,Lh.prototype)}toJson(){const e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}}j.ResponseError=Lh;class nt{constructor(e){this.kind=e}static is(e){return e===nt.auto||e===nt.byName||e===nt.byPosition}toString(){return this.kind}}j.ParameterStructures=nt;nt.auto=new nt("auto");nt.byPosition=new nt("byPosition");nt.byName=new nt("byName");class we{constructor(e,n){this.method=e,this.numberOfParams=n}get parameterStructures(){return nt.auto}}j.AbstractMessageSignature=we;class EA extends we{constructor(e){super(e,0)}}j.RequestType0=EA;class PA extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.RequestType=PA;class AA extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.RequestType1=AA;class NA extends we{constructor(e){super(e,2)}}j.RequestType2=NA;class IA extends we{constructor(e){super(e,3)}}j.RequestType3=IA;class DA extends we{constructor(e){super(e,4)}}j.RequestType4=DA;class OA extends we{constructor(e){super(e,5)}}j.RequestType5=OA;class xA extends we{constructor(e){super(e,6)}}j.RequestType6=xA;class LA extends we{constructor(e){super(e,7)}}j.RequestType7=LA;class MA extends we{constructor(e){super(e,8)}}j.RequestType8=MA;class FA extends we{constructor(e){super(e,9)}}j.RequestType9=FA;class HA extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.NotificationType=HA;class jA extends we{constructor(e){super(e,0)}}j.NotificationType0=jA;class UA extends we{constructor(e,n=nt.auto){super(e,1),this._parameterStructures=n}get parameterStructures(){return this._parameterStructures}}j.NotificationType1=UA;class qA extends we{constructor(e){super(e,2)}}j.NotificationType2=qA;class BA extends we{constructor(e){super(e,3)}}j.NotificationType3=BA;class KA extends we{constructor(e){super(e,4)}}j.NotificationType4=KA;class WA extends we{constructor(e){super(e,5)}}j.NotificationType5=WA;class GA extends we{constructor(e){super(e,6)}}j.NotificationType6=GA;class zA extends we{constructor(e){super(e,7)}}j.NotificationType7=zA;class VA extends we{constructor(e){super(e,8)}}j.NotificationType8=VA;class YA extends we{constructor(e){super(e,9)}}j.NotificationType9=YA;var pm;(function(t){function e(i){const s=i;return s&&nr.string(s.method)&&(nr.string(s.id)||nr.number(s.id))}t.isRequest=e;function n(i){const s=i;return s&&nr.string(s.method)&&i.id===void 0}t.isNotification=n;function r(i){const s=i;return s&&(s.result!==void 0||!!s.error)&&(nr.string(s.id)||nr.number(s.id)||s.id===null)}t.isResponse=r})(pm||(j.Message=pm={}));var _n={},mm;Object.defineProperty(_n,"__esModule",{value:!0});_n.LRUCache=_n.LinkedMap=_n.Touch=void 0;var et;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(et||(_n.Touch=et={}));class z_{constructor(){this[mm]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var e;return(e=this._head)==null?void 0:e.value}get last(){var e;return(e=this._tail)==null?void 0:e.value}has(e){return this._map.has(e)}get(e,n=et.None){const r=this._map.get(e);if(r)return n!==et.None&&this.touch(r,n),r.value}set(e,n,r=et.None){let i=this._map.get(e);if(i)i.value=n,r!==et.None&&this.touch(i,r);else{switch(i={key:e,value:n,next:void 0,previous:void 0},r){case et.None:this.addItemLast(i);break;case et.First:this.addItemFirst(i);break;case et.Last:this.addItemLast(i);break;default:this.addItemLast(i);break}this._map.set(e,i),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){const n=this._map.get(e);if(n)return this._map.delete(e),this.removeItem(n),this._size--,n.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");const e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,n){const r=this._state;let i=this._head;for(;i;){if(n?e.bind(n)(i.value,i.key,this):e(i.value,i.key,this),this._state!==r)throw new Error("LinkedMap got modified during iteration.");i=i.next}}keys(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.key,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}values(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:n.value,done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}entries(){const e=this._state;let n=this._head;const r={[Symbol.iterator]:()=>r,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(n){const i={value:[n.key,n.value],done:!1};return n=n.next,i}else return{value:void 0,done:!0}}};return r}[(mm=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let n=this._head,r=this.size;for(;n&&r>e;)this._map.delete(n.key),n=n.next,r--;this._head=n,this._size=r,n&&(n.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{const n=e.next,r=e.previous;if(!n||!r)throw new Error("Invalid list");n.previous=r,r.next=n}e.next=void 0,e.previous=void 0,this._state++}touch(e,n){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(n!==et.First&&n!==et.Last)){if(n===et.First){if(e===this._head)return;const r=e.next,i=e.previous;e===this._tail?(i.next=void 0,this._tail=i):(r.previous=i,i.next=r),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(n===et.Last){if(e===this._tail)return;const r=e.next,i=e.previous;e===this._head?(r.previous=void 0,this._head=r):(r.previous=i,i.next=r),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){const e=[];return this.forEach((n,r)=>{e.push([r,n])}),e}fromJSON(e){this.clear();for(const[n,r]of e)this.set(n,r)}}_n.LinkedMap=z_;class XA extends z_{constructor(e,n=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,n),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,n=et.AsNew){return super.get(e,n)}peek(e){return super.get(e,et.None)}set(e,n){return super.set(e,n,et.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}}_n.LRUCache=XA;var El={};Object.defineProperty(El,"__esModule",{value:!0});El.Disposable=void 0;var gm;(function(t){function e(n){return{dispose:n}}t.create=e})(gm||(El.Disposable=gm={}));var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.SharedArrayReceiverStrategy=qr.SharedArraySenderStrategy=void 0;const JA=Vn;var Ts;(function(t){t.Continue=0,t.Cancelled=1})(Ts||(Ts={}));class QA{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;const n=new SharedArrayBuffer(4),r=new Int32Array(n,0,1);r[0]=Ts.Continue,this.buffers.set(e.id,n),e.$cancellationData=n}async sendCancellation(e,n){const r=this.buffers.get(n);if(r===void 0)return;const i=new Int32Array(r,0,1);Atomics.store(i,0,Ts.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}}qr.SharedArraySenderStrategy=QA;class ZA{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===Ts.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}}class eN{constructor(e){this.token=new ZA(e)}cancel(){}dispose(){}}class tN{constructor(){this.kind="request"}createCancellationTokenSource(e){const n=e.$cancellationData;return n===void 0?new JA.CancellationTokenSource:new eN(n)}}qr.SharedArrayReceiverStrategy=tN;var xn={},js={};Object.defineProperty(js,"__esModule",{value:!0});js.Semaphore=void 0;const nN=An;class rN{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((n,r)=>{this._waiting.push({thunk:e,resolve:n,reject:r}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,nN.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;const e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{const n=e.thunk();n instanceof Promise?n.then(r=>{this._active--,e.resolve(r),this.runNext()},r=>{this._active--,e.reject(r),this.runNext()}):(this._active--,e.resolve(n),this.runNext())}catch(n){this._active--,e.reject(n),this.runNext()}}}js.Semaphore=rN;Object.defineProperty(xn,"__esModule",{value:!0});xn.ReadableStreamMessageReader=xn.AbstractMessageReader=xn.MessageReader=void 0;const jf=An,Er=Fe,Tu=on,iN=js;var ym;(function(t){function e(n){let r=n;return r&&Er.func(r.listen)&&Er.func(r.dispose)&&Er.func(r.onError)&&Er.func(r.onClose)&&Er.func(r.onPartialMessage)}t.is=e})(ym||(xn.MessageReader=ym={}));class V_{constructor(){this.errorEmitter=new Tu.Emitter,this.closeEmitter=new Tu.Emitter,this.partialMessageEmitter=new Tu.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${Er.string(e.message)?e.message:"unknown"}`)}}xn.AbstractMessageReader=V_;var Uf;(function(t){function e(n){let r,i;const s=new Map;let o;const a=new Map;if(n===void 0||typeof n=="string")r=n??"utf-8";else{if(r=n.charset??"utf-8",n.contentDecoder!==void 0&&(i=n.contentDecoder,s.set(i.name,i)),n.contentDecoders!==void 0)for(const c of n.contentDecoders)s.set(c.name,c);if(n.contentTypeDecoder!==void 0&&(o=n.contentTypeDecoder,a.set(o.name,o)),n.contentTypeDecoders!==void 0)for(const c of n.contentTypeDecoders)a.set(c.name,c)}return o===void 0&&(o=(0,jf.default)().applicationJson.decoder,a.set(o.name,o)),{charset:r,contentDecoder:i,contentDecoders:s,contentTypeDecoder:o,contentTypeDecoders:a}}t.fromOptions=e})(Uf||(Uf={}));class sN extends V_{constructor(e,n){super(),this.readable=e,this.options=Uf.fromOptions(n),this.buffer=(0,jf.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new iN.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;const n=this.readable.onData(r=>{this.onData(r)});return this.readable.onError(r=>this.fireError(r)),this.readable.onClose(()=>this.fireClose()),n}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){const r=this.buffer.tryReadHeaders(!0);if(!r)return;const i=r.get("content-length");if(!i){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(r))}`));return}const s=parseInt(i);if(isNaN(s)){this.fireError(new Error(`Content-Length value must be a number. Got ${i}`));return}this.nextMessageLength=s}const n=this.buffer.tryReadBody(this.nextMessageLength);if(n===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{const r=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(n):n,i=await this.options.contentTypeDecoder.decode(r,this.options);this.callback(i)}).catch(r=>{this.fireError(r)})}}catch(n){this.fireError(n)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,jf.default)().timer.setTimeout((e,n)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:n}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}}xn.ReadableStreamMessageReader=sN;var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.WriteableStreamMessageWriter=Ln.AbstractMessageWriter=Ln.MessageWriter=void 0;const vm=An,es=Fe,oN=js,_m=on,aN="Content-Length: ",Tm=`\r
`;var Rm;(function(t){function e(n){let r=n;return r&&es.func(r.dispose)&&es.func(r.onClose)&&es.func(r.onError)&&es.func(r.write)}t.is=e})(Rm||(Ln.MessageWriter=Rm={}));class Y_{constructor(){this.errorEmitter=new _m.Emitter,this.closeEmitter=new _m.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,n,r){this.errorEmitter.fire([this.asError(e),n,r])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${es.string(e.message)?e.message:"unknown"}`)}}Ln.AbstractMessageWriter=Y_;var qf;(function(t){function e(n){return n===void 0||typeof n=="string"?{charset:n??"utf-8",contentTypeEncoder:(0,vm.default)().applicationJson.encoder}:{charset:n.charset??"utf-8",contentEncoder:n.contentEncoder,contentTypeEncoder:n.contentTypeEncoder??(0,vm.default)().applicationJson.encoder}}t.fromOptions=e})(qf||(qf={}));class cN extends Y_{constructor(e,n){super(),this.writable=e,this.options=qf.fromOptions(n),this.errorCount=0,this.writeSemaphore=new oN.Semaphore(1),this.writable.onError(r=>this.fireError(r)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(r=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(r):r).then(r=>{const i=[];return i.push(aN,r.byteLength.toString(),Tm),i.push(Tm),this.doWrite(e,i,r)},r=>{throw this.fireError(r),r}))}async doWrite(e,n,r){try{return await this.writable.write(n.join(""),"ascii"),this.writable.write(r)}catch(i){return this.handleError(i,e),Promise.reject(i)}}handleError(e,n){this.errorCount++,this.fireError(e,n,this.errorCount)}end(){this.writable.end()}}Ln.WriteableStreamMessageWriter=cN;var Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});Pl.AbstractMessageBuffer=void 0;const lN=13,uN=10,dN=`\r
`;class fN{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){const n=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(n),this._totalLength+=n.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let n=0,r=0,i=0,s=0;e:for(;r<this._chunks.length;){const l=this._chunks[r];for(i=0;i<l.length;){switch(l[i]){case lN:switch(n){case 0:n=1;break;case 2:n=3;break;default:n=0}break;case uN:switch(n){case 1:n=2;break;case 3:n=4,i++;break e;default:n=0}break;default:n=0}i++}s+=l.byteLength,r++}if(n!==4)return;const o=this._read(s+i),a=new Map,c=this.toString(o,"ascii").split(dN);if(c.length<2)return a;for(let l=0;l<c.length-2;l++){const u=c[l],f=u.indexOf(":");if(f===-1)throw new Error(`Message header must separate key and value using ':'
${u}`);const m=u.substr(0,f),g=u.substr(f+1).trim();a.set(e?m.toLowerCase():m,g)}return a}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){const s=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(s)}if(this._chunks[0].byteLength>e){const s=this._chunks[0],o=this.asNative(s,e);return this._chunks[0]=s.slice(e),this._totalLength-=e,o}const n=this.allocNative(e);let r=0,i=0;for(;e>0;){const s=this._chunks[i];if(s.byteLength>e){const o=s.slice(0,e);n.set(o,r),r+=e,this._chunks[i]=s.slice(e),this._totalLength-=e,e-=e}else n.set(s,r),r+=s.byteLength,this._chunks.shift(),this._totalLength-=s.byteLength,e-=s.byteLength}return n}}Pl.AbstractMessageBuffer=fN;var X_={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.ConnectionOptions=t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.RequestCancellationReceiverStrategy=t.IdCancellationReceiverStrategy=t.ConnectionStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=t.NullLogger=t.ProgressType=t.ProgressToken=void 0;const e=An,n=Fe,r=j,i=_n,s=on,o=Vn;var a;(function(b){b.type=new r.NotificationType("$/cancelRequest")})(a||(a={}));var c;(function(b){function $(N){return typeof N=="string"||typeof N=="number"}b.is=$})(c||(t.ProgressToken=c={}));var l;(function(b){b.type=new r.NotificationType("$/progress")})(l||(l={}));class u{constructor(){}}t.ProgressType=u;var f;(function(b){function $(N){return n.func(N)}b.is=$})(f||(f={})),t.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var m;(function(b){b[b.Off=0]="Off",b[b.Messages=1]="Messages",b[b.Compact=2]="Compact",b[b.Verbose=3]="Verbose"})(m||(t.Trace=m={}));var g;(function(b){b.Off="off",b.Messages="messages",b.Compact="compact",b.Verbose="verbose"})(g||(t.TraceValues=g={})),function(b){function $(P){if(!n.string(P))return b.Off;switch(P=P.toLowerCase(),P){case"off":return b.Off;case"messages":return b.Messages;case"compact":return b.Compact;case"verbose":return b.Verbose;default:return b.Off}}b.fromString=$;function N(P){switch(P){case b.Off:return"off";case b.Messages:return"messages";case b.Compact:return"compact";case b.Verbose:return"verbose";default:return"off"}}b.toString=N}(m||(t.Trace=m={}));var d;(function(b){b.Text="text",b.JSON="json"})(d||(t.TraceFormat=d={})),function(b){function $(N){return n.string(N)?(N=N.toLowerCase(),N==="json"?b.JSON:b.Text):b.Text}b.fromString=$}(d||(t.TraceFormat=d={}));var v;(function(b){b.type=new r.NotificationType("$/setTrace")})(v||(t.SetTraceNotification=v={}));var R;(function(b){b.type=new r.NotificationType("$/logTrace")})(R||(t.LogTraceNotification=R={}));var _;(function(b){b[b.Closed=1]="Closed",b[b.Disposed=2]="Disposed",b[b.AlreadyListening=3]="AlreadyListening"})(_||(t.ConnectionErrors=_={}));class h extends Error{constructor($,N){super(N),this.code=$,Object.setPrototypeOf(this,h.prototype)}}t.ConnectionError=h;var p;(function(b){function $(N){const P=N;return P&&n.func(P.cancelUndispatched)}b.is=$})(p||(t.ConnectionStrategy=p={}));var w;(function(b){function $(N){const P=N;return P&&(P.kind===void 0||P.kind==="id")&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}b.is=$})(w||(t.IdCancellationReceiverStrategy=w={}));var F;(function(b){function $(N){const P=N;return P&&P.kind==="request"&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}b.is=$})(F||(t.RequestCancellationReceiverStrategy=F={}));var G;(function(b){b.Message=Object.freeze({createCancellationTokenSource(N){return new o.CancellationTokenSource}});function $(N){return w.is(N)||F.is(N)}b.is=$})(G||(t.CancellationReceiverStrategy=G={}));var J;(function(b){b.Message=Object.freeze({sendCancellation(N,P){return N.sendNotification(a.type,{id:P})},cleanup(N){}});function $(N){const P=N;return P&&n.func(P.sendCancellation)&&n.func(P.cleanup)}b.is=$})(J||(t.CancellationSenderStrategy=J={}));var be;(function(b){b.Message=Object.freeze({receiver:G.Message,sender:J.Message});function $(N){const P=N;return P&&G.is(P.receiver)&&J.is(P.sender)}b.is=$})(be||(t.CancellationStrategy=be={}));var Ee;(function(b){function $(N){const P=N;return P&&n.func(P.handleMessage)}b.is=$})(Ee||(t.MessageStrategy=Ee={}));var Pe;(function(b){function $(N){const P=N;return P&&(be.is(P.cancellationStrategy)||p.is(P.connectionStrategy)||Ee.is(P.messageStrategy))}b.is=$})(Pe||(t.ConnectionOptions=Pe={}));var A;(function(b){b[b.New=1]="New",b[b.Listening=2]="Listening",b[b.Closed=3]="Closed",b[b.Disposed=4]="Disposed"})(A||(A={}));function E(b,$,N,P){const O=N!==void 0?N:t.NullLogger;let He=0,x=0,S=0;const te="2.0";let Vt;const Yt=new Map;let Le;const Xt=new Map,ye=new Map;let je,Ge=new i.LinkedMap,ve=new Map,ze=new Set,Ae=new Map,V=m.Off,Ke=d.Text,ue,ft=A.New;const Rr=new s.Emitter,ii=new s.Emitter,si=new s.Emitter,oi=new s.Emitter,ai=new s.Emitter,Ft=P&&P.cancellationStrategy?P.cancellationStrategy:be.Message;function ci(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}function qs(T){return T===null?"res-unknown-"+(++S).toString():"res-"+T.toString()}function Bs(){return"not-"+(++x).toString()}function Ks(T,C){r.Message.isRequest(C)?T.set(ci(C.id),C):r.Message.isResponse(C)?T.set(qs(C.id),C):T.set(Bs(),C)}function Ws(T){}function li(){return ft===A.Listening}function ui(){return ft===A.Closed}function dn(){return ft===A.Disposed}function di(){(ft===A.New||ft===A.Listening)&&(ft=A.Closed,ii.fire(void 0))}function Gs(T){Rr.fire([T,void 0,void 0])}function zs(T){Rr.fire(T)}b.onClose(di),b.onError(Gs),$.onClose(di),$.onError(zs);function fi(){je||Ge.size===0||(je=(0,e.default)().timer.setImmediate(()=>{je=void 0,Vs()}))}function hi(T){r.Message.isRequest(T)?Xs(T):r.Message.isNotification(T)?Qs(T):r.Message.isResponse(T)?Js(T):Zs(T)}function Vs(){if(Ge.size===0)return;const T=Ge.shift();try{const C=P==null?void 0:P.messageStrategy;Ee.is(C)?C.handleMessage(T,hi):hi(T)}finally{fi()}}const Ys=T=>{try{if(r.Message.isNotification(T)&&T.method===a.type.method){const C=T.params.id,I=ci(C),H=Ge.get(I);if(r.Message.isRequest(H)){const ae=P==null?void 0:P.connectionStrategy,de=ae&&ae.cancelUndispatched?ae.cancelUndispatched(H,Ws):void 0;if(de&&(de.error!==void 0||de.result!==void 0)){Ge.delete(I),Ae.delete(C),de.id=H.id,er(de,T.method,Date.now()),$.write(de).catch(()=>O.error("Sending response for canceled message failed."));return}}const pe=Ae.get(C);if(pe!==void 0){pe.cancel(),wr(T);return}else ze.add(C)}Ks(Ge,T)}finally{fi()}};function Xs(T){if(dn())return;function C(Z,_e,se){const Ue={jsonrpc:te,id:T.id};Z instanceof r.ResponseError?Ue.error=Z.toJson():Ue.result=Z===void 0?null:Z,er(Ue,_e,se),$.write(Ue).catch(()=>O.error("Sending response failed."))}function I(Z,_e,se){const Ue={jsonrpc:te,id:T.id,error:Z.toJson()};er(Ue,_e,se),$.write(Ue).catch(()=>O.error("Sending response failed."))}function H(Z,_e,se){Z===void 0&&(Z=null);const Ue={jsonrpc:te,id:T.id,result:Z};er(Ue,_e,se),$.write(Ue).catch(()=>O.error("Sending response failed."))}no(T);const pe=Yt.get(T.method);let ae,de;pe&&(ae=pe.type,de=pe.handler);const De=Date.now();if(de||Vt){const Z=T.id??String(Date.now()),_e=w.is(Ft.receiver)?Ft.receiver.createCancellationTokenSource(Z):Ft.receiver.createCancellationTokenSource(T);T.id!==null&&ze.has(T.id)&&_e.cancel(),T.id!==null&&Ae.set(Z,_e);try{let se;if(de)if(T.params===void 0){if(ae!==void 0&&ae.numberOfParams!==0){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines ${ae.numberOfParams} params but received none.`),T.method,De);return}se=de(_e.token)}else if(Array.isArray(T.params)){if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byName){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,De);return}se=de(...T.params,_e.token)}else{if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byPosition){I(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,De);return}se=de(T.params,_e.token)}else Vt&&(se=Vt(T.method,T.params,_e.token));const Ue=se;se?Ue.then?Ue.then(st=>{Ae.delete(Z),C(st,T.method,De)},st=>{Ae.delete(Z),st instanceof r.ResponseError?I(st,T.method,De):st&&n.string(st.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${st.message}`),T.method,De):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,De)}):(Ae.delete(Z),C(se,T.method,De)):(Ae.delete(Z),H(se,T.method,De))}catch(se){Ae.delete(Z),se instanceof r.ResponseError?C(se,T.method,De):se&&n.string(se.message)?I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${se.message}`),T.method,De):I(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,De)}}else I(new r.ResponseError(r.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,De)}function Js(T){if(!dn())if(T.id===null)T.error?O.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):O.error("Received response message without id. No further error information provided.");else{const C=T.id,I=ve.get(C);if(ro(T,I),I!==void 0){ve.delete(C);try{if(T.error){const H=T.error;I.reject(new r.ResponseError(H.code,H.message,H.data))}else if(T.result!==void 0)I.resolve(T.result);else throw new Error("Should never happen.")}catch(H){H.message?O.error(`Response handler '${I.method}' failed with message: ${H.message}`):O.error(`Response handler '${I.method}' failed unexpectedly.`)}}}}function Qs(T){if(dn())return;let C,I;if(T.method===a.type.method){const H=T.params.id;ze.delete(H),wr(T);return}else{const H=Xt.get(T.method);H&&(I=H.handler,C=H.type)}if(I||Le)try{if(wr(T),I)if(T.params===void 0)C!==void 0&&C.numberOfParams!==0&&C.parameterStructures!==r.ParameterStructures.byName&&O.error(`Notification ${T.method} defines ${C.numberOfParams} params but received none.`),I();else if(Array.isArray(T.params)){const H=T.params;T.method===l.type.method&&H.length===2&&c.is(H[0])?I({token:H[0],value:H[1]}):(C!==void 0&&(C.parameterStructures===r.ParameterStructures.byName&&O.error(`Notification ${T.method} defines parameters by name but received parameters by position`),C.numberOfParams!==T.params.length&&O.error(`Notification ${T.method} defines ${C.numberOfParams} params but received ${H.length} arguments`)),I(...H))}else C!==void 0&&C.parameterStructures===r.ParameterStructures.byPosition&&O.error(`Notification ${T.method} defines parameters by position but received parameters by name`),I(T.params);else Le&&Le(T.method,T.params)}catch(H){H.message?O.error(`Notification handler '${T.method}' failed with message: ${H.message}`):O.error(`Notification handler '${T.method}' failed unexpectedly.`)}else si.fire(T)}function Zs(T){if(!T){O.error("Received empty message.");return}O.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);const C=T;if(n.string(C.id)||n.number(C.id)){const I=C.id,H=ve.get(I);H&&H.reject(new Error("The received response has neither a result nor an error property."))}}function Ht(T){if(T!=null)switch(V){case m.Verbose:return JSON.stringify(T,null,4);case m.Compact:return JSON.stringify(T);default:return}}function eo(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let C;(V===m.Verbose||V===m.Compact)&&T.params&&(C=`Params: ${Ht(T.params)}

`),ue.log(`Sending request '${T.method} - (${T.id})'.`,C)}else fn("send-request",T)}function to(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let C;(V===m.Verbose||V===m.Compact)&&(T.params?C=`Params: ${Ht(T.params)}

`:C=`No parameters provided.

`),ue.log(`Sending notification '${T.method}'.`,C)}else fn("send-notification",T)}function er(T,C,I){if(!(V===m.Off||!ue))if(Ke===d.Text){let H;(V===m.Verbose||V===m.Compact)&&(T.error&&T.error.data?H=`Error data: ${Ht(T.error.data)}

`:T.result?H=`Result: ${Ht(T.result)}

`:T.error===void 0&&(H=`No result returned.

`)),ue.log(`Sending response '${C} - (${T.id})'. Processing request took ${Date.now()-I}ms`,H)}else fn("send-response",T)}function no(T){if(!(V===m.Off||!ue))if(Ke===d.Text){let C;(V===m.Verbose||V===m.Compact)&&T.params&&(C=`Params: ${Ht(T.params)}

`),ue.log(`Received request '${T.method} - (${T.id})'.`,C)}else fn("receive-request",T)}function wr(T){if(!(V===m.Off||!ue||T.method===R.type.method))if(Ke===d.Text){let C;(V===m.Verbose||V===m.Compact)&&(T.params?C=`Params: ${Ht(T.params)}

`:C=`No parameters provided.

`),ue.log(`Received notification '${T.method}'.`,C)}else fn("receive-notification",T)}function ro(T,C){if(!(V===m.Off||!ue))if(Ke===d.Text){let I;if((V===m.Verbose||V===m.Compact)&&(T.error&&T.error.data?I=`Error data: ${Ht(T.error.data)}

`:T.result?I=`Result: ${Ht(T.result)}

`:T.error===void 0&&(I=`No result returned.

`)),C){const H=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";ue.log(`Received response '${C.method} - (${T.id})' in ${Date.now()-C.timerStart}ms.${H}`,I)}else ue.log(`Received response ${T.id} without active response promise.`,I)}else fn("receive-response",T)}function fn(T,C){if(!ue||V===m.Off)return;const I={isLSPMessage:!0,type:T,message:C,timestamp:Date.now()};ue.log(I)}function Nn(){if(ui())throw new h(_.Closed,"Connection is closed.");if(dn())throw new h(_.Disposed,"Connection is disposed.")}function io(){if(li())throw new h(_.AlreadyListening,"Connection is already listening")}function so(){if(!li())throw new Error("Call listen() first.")}function In(T){return T===void 0?null:T}function pi(T){if(T!==null)return T}function y(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}function Ne(T,C){switch(T){case r.ParameterStructures.auto:return y(C)?pi(C):[In(C)];case r.ParameterStructures.byName:if(!y(C))throw new Error("Received parameters by name but param is not an object literal.");return pi(C);case r.ParameterStructures.byPosition:return[In(C)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}function Ie(T,C){let I;const H=T.numberOfParams;switch(H){case 0:I=void 0;break;case 1:I=Ne(T.parameterStructures,C[0]);break;default:I=[];for(let pe=0;pe<C.length&&pe<H;pe++)I.push(In(C[pe]));if(C.length<H)for(let pe=C.length;pe<H;pe++)I.push(null);break}return I}const W={sendNotification:(T,...C)=>{Nn();let I,H;if(n.string(T)){I=T;const ae=C[0];let de=0,De=r.ParameterStructures.auto;r.ParameterStructures.is(ae)&&(de=1,De=ae);let Z=C.length;const _e=Z-de;switch(_e){case 0:H=void 0;break;case 1:H=Ne(De,C[de]);break;default:if(De===r.ParameterStructures.byName)throw new Error(`Received ${_e} parameters for 'by Name' notification parameter structure.`);H=C.slice(de,Z).map(se=>In(se));break}}else{const ae=C;I=T.method,H=Ie(T,ae)}const pe={jsonrpc:te,method:I,params:H};return to(pe),$.write(pe).catch(ae=>{throw O.error("Sending notification failed."),ae})},onNotification:(T,C)=>{Nn();let I;return n.func(T)?Le=T:C&&(n.string(T)?(I=T,Xt.set(T,{type:void 0,handler:C})):(I=T.method,Xt.set(T.method,{type:T,handler:C}))),{dispose:()=>{I!==void 0?Xt.delete(I):Le=void 0}}},onProgress:(T,C,I)=>{if(ye.has(C))throw new Error(`Progress handler for token ${C} already registered`);return ye.set(C,I),{dispose:()=>{ye.delete(C)}}},sendProgress:(T,C,I)=>W.sendNotification(l.type,{token:C,value:I}),onUnhandledProgress:oi.event,sendRequest:(T,...C)=>{Nn(),so();let I,H,pe;if(n.string(T)){I=T;const Z=C[0],_e=C[C.length-1];let se=0,Ue=r.ParameterStructures.auto;r.ParameterStructures.is(Z)&&(se=1,Ue=Z);let st=C.length;o.CancellationToken.is(_e)&&(st=st-1,pe=_e);const Jt=st-se;switch(Jt){case 0:H=void 0;break;case 1:H=Ne(Ue,C[se]);break;default:if(Ue===r.ParameterStructures.byName)throw new Error(`Received ${Jt} parameters for 'by Name' request parameter structure.`);H=C.slice(se,st).map($T=>In($T));break}}else{const Z=C;I=T.method,H=Ie(T,Z);const _e=T.numberOfParams;pe=o.CancellationToken.is(Z[_e])?Z[_e]:void 0}const ae=He++;let de;pe&&(de=pe.onCancellationRequested(()=>{const Z=Ft.sender.sendCancellation(W,ae);return Z===void 0?(O.log(`Received no promise from cancellation strategy when cancelling id ${ae}`),Promise.resolve()):Z.catch(()=>{O.log(`Sending cancellation messages for id ${ae} failed`)})}));const De={jsonrpc:te,id:ae,method:I,params:H};return eo(De),typeof Ft.sender.enableCancellation=="function"&&Ft.sender.enableCancellation(De),new Promise(async(Z,_e)=>{const se=Jt=>{Z(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},Ue=Jt=>{_e(Jt),Ft.sender.cleanup(ae),de==null||de.dispose()},st={method:I,timerStart:Date.now(),resolve:se,reject:Ue};try{await $.write(De),ve.set(ae,st)}catch(Jt){throw O.error("Sending request failed."),st.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError,Jt.message?Jt.message:"Unknown reason")),Jt}})},onRequest:(T,C)=>{Nn();let I=null;return f.is(T)?(I=void 0,Vt=T):n.string(T)?(I=null,C!==void 0&&(I=T,Yt.set(T,{handler:C,type:void 0}))):C!==void 0&&(I=T.method,Yt.set(T.method,{type:T,handler:C})),{dispose:()=>{I!==null&&(I!==void 0?Yt.delete(I):Vt=void 0)}}},hasPendingResponse:()=>ve.size>0,trace:async(T,C,I)=>{let H=!1,pe=d.Text;I!==void 0&&(n.boolean(I)?H=I:(H=I.sendNotification||!1,pe=I.traceFormat||d.Text)),V=T,Ke=pe,V===m.Off?ue=void 0:ue=C,H&&!ui()&&!dn()&&await W.sendNotification(v.type,{value:m.toString(T)})},onError:Rr.event,onClose:ii.event,onUnhandledNotification:si.event,onDispose:ai.event,end:()=>{$.end()},dispose:()=>{if(dn())return;ft=A.Disposed,ai.fire(void 0);const T=new r.ResponseError(r.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(const C of ve.values())C.reject(T);ve=new Map,Ae=new Map,ze=new Set,Ge=new i.LinkedMap,n.func($.dispose)&&$.dispose(),n.func(b.dispose)&&b.dispose()},listen:()=>{Nn(),io(),ft=A.Listening,b.listen(Ys)},inspect:()=>{(0,e.default)().console.log("inspect")}};return W.onNotification(R.type,T=>{if(V===m.Off||!ue)return;const C=V===m.Verbose||V===m.Compact;ue.log(T.message,C?T.verbose:void 0)}),W.onNotification(l.type,T=>{const C=ye.get(T.token);C?C(T.value):oi.fire(T)}),W}t.createMessageConnection=E})(X_);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressType=t.ProgressToken=t.createMessageConnection=t.NullLogger=t.ConnectionOptions=t.ConnectionStrategy=t.AbstractMessageBuffer=t.WriteableStreamMessageWriter=t.AbstractMessageWriter=t.MessageWriter=t.ReadableStreamMessageReader=t.AbstractMessageReader=t.MessageReader=t.SharedArrayReceiverStrategy=t.SharedArraySenderStrategy=t.CancellationToken=t.CancellationTokenSource=t.Emitter=t.Event=t.Disposable=t.LRUCache=t.Touch=t.LinkedMap=t.ParameterStructures=t.NotificationType9=t.NotificationType8=t.NotificationType7=t.NotificationType6=t.NotificationType5=t.NotificationType4=t.NotificationType3=t.NotificationType2=t.NotificationType1=t.NotificationType0=t.NotificationType=t.ErrorCodes=t.ResponseError=t.RequestType9=t.RequestType8=t.RequestType7=t.RequestType6=t.RequestType5=t.RequestType4=t.RequestType3=t.RequestType2=t.RequestType1=t.RequestType0=t.RequestType=t.Message=t.RAL=void 0,t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=void 0;const e=j;Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return e.Message}}),Object.defineProperty(t,"RequestType",{enumerable:!0,get:function(){return e.RequestType}}),Object.defineProperty(t,"RequestType0",{enumerable:!0,get:function(){return e.RequestType0}}),Object.defineProperty(t,"RequestType1",{enumerable:!0,get:function(){return e.RequestType1}}),Object.defineProperty(t,"RequestType2",{enumerable:!0,get:function(){return e.RequestType2}}),Object.defineProperty(t,"RequestType3",{enumerable:!0,get:function(){return e.RequestType3}}),Object.defineProperty(t,"RequestType4",{enumerable:!0,get:function(){return e.RequestType4}}),Object.defineProperty(t,"RequestType5",{enumerable:!0,get:function(){return e.RequestType5}}),Object.defineProperty(t,"RequestType6",{enumerable:!0,get:function(){return e.RequestType6}}),Object.defineProperty(t,"RequestType7",{enumerable:!0,get:function(){return e.RequestType7}}),Object.defineProperty(t,"RequestType8",{enumerable:!0,get:function(){return e.RequestType8}}),Object.defineProperty(t,"RequestType9",{enumerable:!0,get:function(){return e.RequestType9}}),Object.defineProperty(t,"ResponseError",{enumerable:!0,get:function(){return e.ResponseError}}),Object.defineProperty(t,"ErrorCodes",{enumerable:!0,get:function(){return e.ErrorCodes}}),Object.defineProperty(t,"NotificationType",{enumerable:!0,get:function(){return e.NotificationType}}),Object.defineProperty(t,"NotificationType0",{enumerable:!0,get:function(){return e.NotificationType0}}),Object.defineProperty(t,"NotificationType1",{enumerable:!0,get:function(){return e.NotificationType1}}),Object.defineProperty(t,"NotificationType2",{enumerable:!0,get:function(){return e.NotificationType2}}),Object.defineProperty(t,"NotificationType3",{enumerable:!0,get:function(){return e.NotificationType3}}),Object.defineProperty(t,"NotificationType4",{enumerable:!0,get:function(){return e.NotificationType4}}),Object.defineProperty(t,"NotificationType5",{enumerable:!0,get:function(){return e.NotificationType5}}),Object.defineProperty(t,"NotificationType6",{enumerable:!0,get:function(){return e.NotificationType6}}),Object.defineProperty(t,"NotificationType7",{enumerable:!0,get:function(){return e.NotificationType7}}),Object.defineProperty(t,"NotificationType8",{enumerable:!0,get:function(){return e.NotificationType8}}),Object.defineProperty(t,"NotificationType9",{enumerable:!0,get:function(){return e.NotificationType9}}),Object.defineProperty(t,"ParameterStructures",{enumerable:!0,get:function(){return e.ParameterStructures}});const n=_n;Object.defineProperty(t,"LinkedMap",{enumerable:!0,get:function(){return n.LinkedMap}}),Object.defineProperty(t,"LRUCache",{enumerable:!0,get:function(){return n.LRUCache}}),Object.defineProperty(t,"Touch",{enumerable:!0,get:function(){return n.Touch}});const r=El;Object.defineProperty(t,"Disposable",{enumerable:!0,get:function(){return r.Disposable}});const i=on;Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return i.Emitter}});const s=Vn;Object.defineProperty(t,"CancellationTokenSource",{enumerable:!0,get:function(){return s.CancellationTokenSource}}),Object.defineProperty(t,"CancellationToken",{enumerable:!0,get:function(){return s.CancellationToken}});const o=qr;Object.defineProperty(t,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return o.SharedArraySenderStrategy}}),Object.defineProperty(t,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return o.SharedArrayReceiverStrategy}});const a=xn;Object.defineProperty(t,"MessageReader",{enumerable:!0,get:function(){return a.MessageReader}}),Object.defineProperty(t,"AbstractMessageReader",{enumerable:!0,get:function(){return a.AbstractMessageReader}}),Object.defineProperty(t,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return a.ReadableStreamMessageReader}});const c=Ln;Object.defineProperty(t,"MessageWriter",{enumerable:!0,get:function(){return c.MessageWriter}}),Object.defineProperty(t,"AbstractMessageWriter",{enumerable:!0,get:function(){return c.AbstractMessageWriter}}),Object.defineProperty(t,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return c.WriteableStreamMessageWriter}});const l=Pl;Object.defineProperty(t,"AbstractMessageBuffer",{enumerable:!0,get:function(){return l.AbstractMessageBuffer}});const u=X_;Object.defineProperty(t,"ConnectionStrategy",{enumerable:!0,get:function(){return u.ConnectionStrategy}}),Object.defineProperty(t,"ConnectionOptions",{enumerable:!0,get:function(){return u.ConnectionOptions}}),Object.defineProperty(t,"NullLogger",{enumerable:!0,get:function(){return u.NullLogger}}),Object.defineProperty(t,"createMessageConnection",{enumerable:!0,get:function(){return u.createMessageConnection}}),Object.defineProperty(t,"ProgressToken",{enumerable:!0,get:function(){return u.ProgressToken}}),Object.defineProperty(t,"ProgressType",{enumerable:!0,get:function(){return u.ProgressType}}),Object.defineProperty(t,"Trace",{enumerable:!0,get:function(){return u.Trace}}),Object.defineProperty(t,"TraceValues",{enumerable:!0,get:function(){return u.TraceValues}}),Object.defineProperty(t,"TraceFormat",{enumerable:!0,get:function(){return u.TraceFormat}}),Object.defineProperty(t,"SetTraceNotification",{enumerable:!0,get:function(){return u.SetTraceNotification}}),Object.defineProperty(t,"LogTraceNotification",{enumerable:!0,get:function(){return u.LogTraceNotification}}),Object.defineProperty(t,"ConnectionErrors",{enumerable:!0,get:function(){return u.ConnectionErrors}}),Object.defineProperty(t,"ConnectionError",{enumerable:!0,get:function(){return u.ConnectionError}}),Object.defineProperty(t,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return u.CancellationReceiverStrategy}}),Object.defineProperty(t,"CancellationSenderStrategy",{enumerable:!0,get:function(){return u.CancellationSenderStrategy}}),Object.defineProperty(t,"CancellationStrategy",{enumerable:!0,get:function(){return u.CancellationStrategy}}),Object.defineProperty(t,"MessageStrategy",{enumerable:!0,get:function(){return u.MessageStrategy}});const f=An;t.RAL=f.default})(Xc);Object.defineProperty(xh,"__esModule",{value:!0});const Zt=Xc;class Al extends Zt.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return Al.emptyBuffer}fromString(e,n){return new TextEncoder().encode(e)}toString(e,n){return n==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(n).decode(e)}asNative(e,n){return n===void 0?e:e.slice(0,n)}allocNative(e){return new Uint8Array(e)}}Al.emptyBuffer=new Uint8Array(0);class hN{constructor(e){this.socket=e,this._onData=new Zt.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Zt.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}}class pN{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Zt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Zt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Zt.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,n){if(typeof e=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}}const mN=new TextEncoder,J_=Object.freeze({messageBuffer:Object.freeze({create:t=>new Al(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(mN.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new hN(t),asWritableStream:t=>new pN(t)}),console,timer:Object.freeze({setTimeout(t,e,...n){const r=setTimeout(t,e,...n);return{dispose:()=>clearTimeout(r)}},setImmediate(t,...e){const n=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(n)}},setInterval(t,e,...n){const r=setInterval(t,e,...n);return{dispose:()=>clearInterval(r)}}})});function Bf(){return J_}(function(t){function e(){Zt.RAL.install(J_)}t.install=e})(Bf||(Bf={}));xh.default=Bf;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(c,l,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(l,u);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(c,f,m)}:function(c,l,u,f){f===void 0&&(f=u),c[f]=l[u]}),n=xe&&xe.__exportStar||function(c,l){for(var u in c)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,c,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.BrowserMessageWriter=t.BrowserMessageReader=void 0,xh.default.install();const i=Xc;n(Xc,t);class s extends i.AbstractMessageReader{constructor(l){super(),this._onData=new i.Emitter,this._messageListener=u=>{this._onData.fire(u.data)},l.addEventListener("error",u=>this.fireError(u)),l.onmessage=this._messageListener}listen(l){return this._onData.event(l)}}t.BrowserMessageReader=s;class o extends i.AbstractMessageWriter{constructor(l){super(),this.port=l,this.errorCount=0,l.addEventListener("error",u=>this.fireError(u))}write(l){try{return this.port.postMessage(l),Promise.resolve()}catch(u){return this.handleError(u,l),Promise.reject(u)}}handleError(l,u){this.errorCount++,this.fireError(l,u,this.errorCount)}end(){}}t.BrowserMessageWriter=o;function a(c,l,u,f){return u===void 0&&(u=i.NullLogger),i.ConnectionStrategy.is(f)&&(f={connectionStrategy:f}),(0,i.createMessageConnection)(c,l,u,f)}t.createMessageConnection=a})(Tr);var wm=Tr,Q_={},Mh=v0(JP),X={};Object.defineProperty(X,"__esModule",{value:!0});X.ProtocolNotificationType=X.ProtocolNotificationType0=X.ProtocolRequestType=X.ProtocolRequestType0=X.RegistrationType=X.MessageDirection=void 0;const Br=Tr;var bm;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(bm||(X.MessageDirection=bm={}));class gN{constructor(e){this.method=e}}X.RegistrationType=gN;class yN extends Br.RequestType0{constructor(e){super(e)}}X.ProtocolRequestType0=yN;class vN extends Br.RequestType{constructor(e){super(e,Br.ParameterStructures.byName)}}X.ProtocolRequestType=vN;class _N extends Br.NotificationType0{constructor(e){super(e)}}X.ProtocolNotificationType0=_N;class TN extends Br.NotificationType{constructor(e){super(e,Br.ParameterStructures.byName)}}X.ProtocolNotificationType=TN;var Z_={},Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.objectLiteral=Se.typedArray=Se.stringArray=Se.array=Se.func=Se.error=Se.number=Se.string=Se.boolean=void 0;function RN(t){return t===!0||t===!1}Se.boolean=RN;function eT(t){return typeof t=="string"||t instanceof String}Se.string=eT;function wN(t){return typeof t=="number"||t instanceof Number}Se.number=wN;function bN(t){return t instanceof Error}Se.error=bN;function kN(t){return typeof t=="function"}Se.func=kN;function tT(t){return Array.isArray(t)}Se.array=tT;function SN(t){return tT(t)&&t.every(e=>eT(e))}Se.stringArray=SN;function CN(t,e){return Array.isArray(t)&&t.every(e)}Se.typedArray=CN;function $N(t){return t!==null&&typeof t=="object"}Se.objectLiteral=$N;var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.ImplementationRequest=void 0;const km=X;var Sm;(function(t){t.method="textDocument/implementation",t.messageDirection=km.MessageDirection.clientToServer,t.type=new km.ProtocolRequestType(t.method)})(Sm||(Nl.ImplementationRequest=Sm={}));var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.TypeDefinitionRequest=void 0;const Cm=X;var $m;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=Cm.MessageDirection.clientToServer,t.type=new Cm.ProtocolRequestType(t.method)})($m||(Il.TypeDefinitionRequest=$m={}));var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.DidChangeWorkspaceFoldersNotification=Kr.WorkspaceFoldersRequest=void 0;const Jc=X;var Em;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Jc.MessageDirection.serverToClient,t.type=new Jc.ProtocolRequestType0(t.method)})(Em||(Kr.WorkspaceFoldersRequest=Em={}));var Pm;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Jc.MessageDirection.clientToServer,t.type=new Jc.ProtocolNotificationType(t.method)})(Pm||(Kr.DidChangeWorkspaceFoldersNotification=Pm={}));var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.ConfigurationRequest=void 0;const Am=X;var Nm;(function(t){t.method="workspace/configuration",t.messageDirection=Am.MessageDirection.serverToClient,t.type=new Am.ProtocolRequestType(t.method)})(Nm||(Dl.ConfigurationRequest=Nm={}));var Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});Wr.ColorPresentationRequest=Wr.DocumentColorRequest=void 0;const Qc=X;var Im;(function(t){t.method="textDocument/documentColor",t.messageDirection=Qc.MessageDirection.clientToServer,t.type=new Qc.ProtocolRequestType(t.method)})(Im||(Wr.DocumentColorRequest=Im={}));var Dm;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Qc.MessageDirection.clientToServer,t.type=new Qc.ProtocolRequestType(t.method)})(Dm||(Wr.ColorPresentationRequest=Dm={}));var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0});Gr.FoldingRangeRefreshRequest=Gr.FoldingRangeRequest=void 0;const Zc=X;var Om;(function(t){t.method="textDocument/foldingRange",t.messageDirection=Zc.MessageDirection.clientToServer,t.type=new Zc.ProtocolRequestType(t.method)})(Om||(Gr.FoldingRangeRequest=Om={}));var xm;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=Zc.MessageDirection.serverToClient,t.type=new Zc.ProtocolRequestType0(t.method)})(xm||(Gr.FoldingRangeRefreshRequest=xm={}));var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.DeclarationRequest=void 0;const Lm=X;var Mm;(function(t){t.method="textDocument/declaration",t.messageDirection=Lm.MessageDirection.clientToServer,t.type=new Lm.ProtocolRequestType(t.method)})(Mm||(Ol.DeclarationRequest=Mm={}));var xl={};Object.defineProperty(xl,"__esModule",{value:!0});xl.SelectionRangeRequest=void 0;const Fm=X;var Hm;(function(t){t.method="textDocument/selectionRange",t.messageDirection=Fm.MessageDirection.clientToServer,t.type=new Fm.ProtocolRequestType(t.method)})(Hm||(xl.SelectionRangeRequest=Hm={}));var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.WorkDoneProgressCancelNotification=Mn.WorkDoneProgressCreateRequest=Mn.WorkDoneProgress=void 0;const EN=Tr,el=X;var jm;(function(t){t.type=new EN.ProgressType;function e(n){return n===t.type}t.is=e})(jm||(Mn.WorkDoneProgress=jm={}));var Um;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=el.MessageDirection.serverToClient,t.type=new el.ProtocolRequestType(t.method)})(Um||(Mn.WorkDoneProgressCreateRequest=Um={}));var qm;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=el.MessageDirection.clientToServer,t.type=new el.ProtocolNotificationType(t.method)})(qm||(Mn.WorkDoneProgressCancelNotification=qm={}));var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.CallHierarchyOutgoingCallsRequest=Fn.CallHierarchyIncomingCallsRequest=Fn.CallHierarchyPrepareRequest=void 0;const zr=X;var Bm;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=zr.MessageDirection.clientToServer,t.type=new zr.ProtocolRequestType(t.method)})(Bm||(Fn.CallHierarchyPrepareRequest=Bm={}));var Km;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=zr.MessageDirection.clientToServer,t.type=new zr.ProtocolRequestType(t.method)})(Km||(Fn.CallHierarchyIncomingCallsRequest=Km={}));var Wm;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=zr.MessageDirection.clientToServer,t.type=new zr.ProtocolRequestType(t.method)})(Wm||(Fn.CallHierarchyOutgoingCallsRequest=Wm={}));var ht={};Object.defineProperty(ht,"__esModule",{value:!0});ht.SemanticTokensRefreshRequest=ht.SemanticTokensRangeRequest=ht.SemanticTokensDeltaRequest=ht.SemanticTokensRequest=ht.SemanticTokensRegistrationType=ht.TokenFormat=void 0;const Sn=X;var Gm;(function(t){t.Relative="relative"})(Gm||(ht.TokenFormat=Gm={}));var Rs;(function(t){t.method="textDocument/semanticTokens",t.type=new Sn.RegistrationType(t.method)})(Rs||(ht.SemanticTokensRegistrationType=Rs={}));var zm;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(zm||(ht.SemanticTokensRequest=zm={}));var Vm;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(Vm||(ht.SemanticTokensDeltaRequest=Vm={}));var Ym;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Sn.MessageDirection.clientToServer,t.type=new Sn.ProtocolRequestType(t.method),t.registrationMethod=Rs.method})(Ym||(ht.SemanticTokensRangeRequest=Ym={}));var Xm;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Sn.MessageDirection.serverToClient,t.type=new Sn.ProtocolRequestType0(t.method)})(Xm||(ht.SemanticTokensRefreshRequest=Xm={}));var Ll={};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ShowDocumentRequest=void 0;const Jm=X;var Qm;(function(t){t.method="window/showDocument",t.messageDirection=Jm.MessageDirection.serverToClient,t.type=new Jm.ProtocolRequestType(t.method)})(Qm||(Ll.ShowDocumentRequest=Qm={}));var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.LinkedEditingRangeRequest=void 0;const Zm=X;var eg;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=Zm.MessageDirection.clientToServer,t.type=new Zm.ProtocolRequestType(t.method)})(eg||(Ml.LinkedEditingRangeRequest=eg={}));var tt={};Object.defineProperty(tt,"__esModule",{value:!0});tt.WillDeleteFilesRequest=tt.DidDeleteFilesNotification=tt.DidRenameFilesNotification=tt.WillRenameFilesRequest=tt.DidCreateFilesNotification=tt.WillCreateFilesRequest=tt.FileOperationPatternKind=void 0;const Mt=X;var tg;(function(t){t.file="file",t.folder="folder"})(tg||(tt.FileOperationPatternKind=tg={}));var ng;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(ng||(tt.WillCreateFilesRequest=ng={}));var rg;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(rg||(tt.DidCreateFilesNotification=rg={}));var ig;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(ig||(tt.WillRenameFilesRequest=ig={}));var sg;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(sg||(tt.DidRenameFilesNotification=sg={}));var og;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolNotificationType(t.method)})(og||(tt.DidDeleteFilesNotification=og={}));var ag;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Mt.MessageDirection.clientToServer,t.type=new Mt.ProtocolRequestType(t.method)})(ag||(tt.WillDeleteFilesRequest=ag={}));var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.MonikerRequest=Hn.MonikerKind=Hn.UniquenessLevel=void 0;const cg=X;var lg;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(lg||(Hn.UniquenessLevel=lg={}));var ug;(function(t){t.$import="import",t.$export="export",t.local="local"})(ug||(Hn.MonikerKind=ug={}));var dg;(function(t){t.method="textDocument/moniker",t.messageDirection=cg.MessageDirection.clientToServer,t.type=new cg.ProtocolRequestType(t.method)})(dg||(Hn.MonikerRequest=dg={}));var jn={};Object.defineProperty(jn,"__esModule",{value:!0});jn.TypeHierarchySubtypesRequest=jn.TypeHierarchySupertypesRequest=jn.TypeHierarchyPrepareRequest=void 0;const Vr=X;var fg;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(fg||(jn.TypeHierarchyPrepareRequest=fg={}));var hg;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(hg||(jn.TypeHierarchySupertypesRequest=hg={}));var pg;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Vr.MessageDirection.clientToServer,t.type=new Vr.ProtocolRequestType(t.method)})(pg||(jn.TypeHierarchySubtypesRequest=pg={}));var Yr={};Object.defineProperty(Yr,"__esModule",{value:!0});Yr.InlineValueRefreshRequest=Yr.InlineValueRequest=void 0;const tl=X;var mg;(function(t){t.method="textDocument/inlineValue",t.messageDirection=tl.MessageDirection.clientToServer,t.type=new tl.ProtocolRequestType(t.method)})(mg||(Yr.InlineValueRequest=mg={}));var gg;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=tl.MessageDirection.serverToClient,t.type=new tl.ProtocolRequestType0(t.method)})(gg||(Yr.InlineValueRefreshRequest=gg={}));var Un={};Object.defineProperty(Un,"__esModule",{value:!0});Un.InlayHintRefreshRequest=Un.InlayHintResolveRequest=Un.InlayHintRequest=void 0;const Xr=X;var yg;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Xr.MessageDirection.clientToServer,t.type=new Xr.ProtocolRequestType(t.method)})(yg||(Un.InlayHintRequest=yg={}));var vg;(function(t){t.method="inlayHint/resolve",t.messageDirection=Xr.MessageDirection.clientToServer,t.type=new Xr.ProtocolRequestType(t.method)})(vg||(Un.InlayHintResolveRequest=vg={}));var _g;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Xr.MessageDirection.serverToClient,t.type=new Xr.ProtocolRequestType0(t.method)})(_g||(Un.InlayHintRefreshRequest=_g={}));var At={};Object.defineProperty(At,"__esModule",{value:!0});At.DiagnosticRefreshRequest=At.WorkspaceDiagnosticRequest=At.DocumentDiagnosticRequest=At.DocumentDiagnosticReportKind=At.DiagnosticServerCancellationData=void 0;const nT=Tr,PN=Se,Jr=X;var Tg;(function(t){function e(n){const r=n;return r&&PN.boolean(r.retriggerRequest)}t.is=e})(Tg||(At.DiagnosticServerCancellationData=Tg={}));var Rg;(function(t){t.Full="full",t.Unchanged="unchanged"})(Rg||(At.DocumentDiagnosticReportKind=Rg={}));var wg;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method),t.partialResult=new nT.ProgressType})(wg||(At.DocumentDiagnosticRequest=wg={}));var bg;(function(t){t.method="workspace/diagnostic",t.messageDirection=Jr.MessageDirection.clientToServer,t.type=new Jr.ProtocolRequestType(t.method),t.partialResult=new nT.ProgressType})(bg||(At.WorkspaceDiagnosticRequest=bg={}));var kg;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Jr.MessageDirection.serverToClient,t.type=new Jr.ProtocolRequestType0(t.method)})(kg||(At.DiagnosticRefreshRequest=kg={}));var ke={};Object.defineProperty(ke,"__esModule",{value:!0});ke.DidCloseNotebookDocumentNotification=ke.DidSaveNotebookDocumentNotification=ke.DidChangeNotebookDocumentNotification=ke.NotebookCellArrayChange=ke.DidOpenNotebookDocumentNotification=ke.NotebookDocumentSyncRegistrationType=ke.NotebookDocument=ke.NotebookCell=ke.ExecutionSummary=ke.NotebookCellKind=void 0;const ws=Mh,Ut=Se,an=X;var Kf;(function(t){t.Markup=1,t.Code=2;function e(n){return n===1||n===2}t.is=e})(Kf||(ke.NotebookCellKind=Kf={}));var Wf;(function(t){function e(i,s){const o={executionOrder:i};return(s===!0||s===!1)&&(o.success=s),o}t.create=e;function n(i){const s=i;return Ut.objectLiteral(s)&&ws.uinteger.is(s.executionOrder)&&(s.success===void 0||Ut.boolean(s.success))}t.is=n;function r(i,s){return i===s?!0:i==null||s===null||s===void 0?!1:i.executionOrder===s.executionOrder&&i.success===s.success}t.equals=r})(Wf||(ke.ExecutionSummary=Wf={}));var nl;(function(t){function e(s,o){return{kind:s,document:o}}t.create=e;function n(s){const o=s;return Ut.objectLiteral(o)&&Kf.is(o.kind)&&ws.DocumentUri.is(o.document)&&(o.metadata===void 0||Ut.objectLiteral(o.metadata))}t.is=n;function r(s,o){const a=new Set;return s.document!==o.document&&a.add("document"),s.kind!==o.kind&&a.add("kind"),s.executionSummary!==o.executionSummary&&a.add("executionSummary"),(s.metadata!==void 0||o.metadata!==void 0)&&!i(s.metadata,o.metadata)&&a.add("metadata"),(s.executionSummary!==void 0||o.executionSummary!==void 0)&&!Wf.equals(s.executionSummary,o.executionSummary)&&a.add("executionSummary"),a}t.diff=r;function i(s,o){if(s===o)return!0;if(s==null||o===null||o===void 0||typeof s!=typeof o||typeof s!="object")return!1;const a=Array.isArray(s),c=Array.isArray(o);if(a!==c)return!1;if(a&&c){if(s.length!==o.length)return!1;for(let l=0;l<s.length;l++)if(!i(s[l],o[l]))return!1}if(Ut.objectLiteral(s)&&Ut.objectLiteral(o)){const l=Object.keys(s),u=Object.keys(o);if(l.length!==u.length||(l.sort(),u.sort(),!i(l,u)))return!1;for(let f=0;f<l.length;f++){const m=l[f];if(!i(s[m],o[m]))return!1}}return!0}})(nl||(ke.NotebookCell=nl={}));var Sg;(function(t){function e(r,i,s,o){return{uri:r,notebookType:i,version:s,cells:o}}t.create=e;function n(r){const i=r;return Ut.objectLiteral(i)&&Ut.string(i.uri)&&ws.integer.is(i.version)&&Ut.typedArray(i.cells,nl.is)}t.is=n})(Sg||(ke.NotebookDocument=Sg={}));var Qr;(function(t){t.method="notebookDocument/sync",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.RegistrationType(t.method)})(Qr||(ke.NotebookDocumentSyncRegistrationType=Qr={}));var Cg;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Qr.method})(Cg||(ke.DidOpenNotebookDocumentNotification=Cg={}));var $g;(function(t){function e(r){const i=r;return Ut.objectLiteral(i)&&ws.uinteger.is(i.start)&&ws.uinteger.is(i.deleteCount)&&(i.cells===void 0||Ut.typedArray(i.cells,nl.is))}t.is=e;function n(r,i,s){const o={start:r,deleteCount:i};return s!==void 0&&(o.cells=s),o}t.create=n})($g||(ke.NotebookCellArrayChange=$g={}));var Eg;(function(t){t.method="notebookDocument/didChange",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Qr.method})(Eg||(ke.DidChangeNotebookDocumentNotification=Eg={}));var Pg;(function(t){t.method="notebookDocument/didSave",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Qr.method})(Pg||(ke.DidSaveNotebookDocumentNotification=Pg={}));var Ag;(function(t){t.method="notebookDocument/didClose",t.messageDirection=an.MessageDirection.clientToServer,t.type=new an.ProtocolNotificationType(t.method),t.registrationMethod=Qr.method})(Ag||(ke.DidCloseNotebookDocumentNotification=Ag={}));var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});Fl.InlineCompletionRequest=void 0;const Ng=X;var Ig;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=Ng.MessageDirection.clientToServer,t.type=new Ng.ProtocolRequestType(t.method)})(Ig||(Fl.InlineCompletionRequest=Ig={}));(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSymbolRequest=t.CodeActionResolveRequest=t.CodeActionRequest=t.DocumentSymbolRequest=t.DocumentHighlightRequest=t.ReferencesRequest=t.DefinitionRequest=t.SignatureHelpRequest=t.SignatureHelpTriggerKind=t.HoverRequest=t.CompletionResolveRequest=t.CompletionRequest=t.CompletionTriggerKind=t.PublishDiagnosticsNotification=t.WatchKind=t.RelativePattern=t.FileChangeType=t.DidChangeWatchedFilesNotification=t.WillSaveTextDocumentWaitUntilRequest=t.WillSaveTextDocumentNotification=t.TextDocumentSaveReason=t.DidSaveTextDocumentNotification=t.DidCloseTextDocumentNotification=t.DidChangeTextDocumentNotification=t.TextDocumentContentChangeEvent=t.DidOpenTextDocumentNotification=t.TextDocumentSyncKind=t.TelemetryEventNotification=t.LogMessageNotification=t.ShowMessageRequest=t.ShowMessageNotification=t.MessageType=t.DidChangeConfigurationNotification=t.ExitNotification=t.ShutdownRequest=t.InitializedNotification=t.InitializeErrorCodes=t.InitializeRequest=t.WorkDoneProgressOptions=t.TextDocumentRegistrationOptions=t.StaticRegistrationOptions=t.PositionEncodingKind=t.FailureHandlingKind=t.ResourceOperationKind=t.UnregistrationRequest=t.RegistrationRequest=t.DocumentSelector=t.NotebookCellTextDocumentFilter=t.NotebookDocumentFilter=t.TextDocumentFilter=void 0,t.MonikerRequest=t.MonikerKind=t.UniquenessLevel=t.WillDeleteFilesRequest=t.DidDeleteFilesNotification=t.WillRenameFilesRequest=t.DidRenameFilesNotification=t.WillCreateFilesRequest=t.DidCreateFilesNotification=t.FileOperationPatternKind=t.LinkedEditingRangeRequest=t.ShowDocumentRequest=t.SemanticTokensRegistrationType=t.SemanticTokensRefreshRequest=t.SemanticTokensRangeRequest=t.SemanticTokensDeltaRequest=t.SemanticTokensRequest=t.TokenFormat=t.CallHierarchyPrepareRequest=t.CallHierarchyOutgoingCallsRequest=t.CallHierarchyIncomingCallsRequest=t.WorkDoneProgressCancelNotification=t.WorkDoneProgressCreateRequest=t.WorkDoneProgress=t.SelectionRangeRequest=t.DeclarationRequest=t.FoldingRangeRefreshRequest=t.FoldingRangeRequest=t.ColorPresentationRequest=t.DocumentColorRequest=t.ConfigurationRequest=t.DidChangeWorkspaceFoldersNotification=t.WorkspaceFoldersRequest=t.TypeDefinitionRequest=t.ImplementationRequest=t.ApplyWorkspaceEditRequest=t.ExecuteCommandRequest=t.PrepareRenameRequest=t.RenameRequest=t.PrepareSupportDefaultBehavior=t.DocumentOnTypeFormattingRequest=t.DocumentRangesFormattingRequest=t.DocumentRangeFormattingRequest=t.DocumentFormattingRequest=t.DocumentLinkResolveRequest=t.DocumentLinkRequest=t.CodeLensRefreshRequest=t.CodeLensResolveRequest=t.CodeLensRequest=t.WorkspaceSymbolResolveRequest=void 0,t.InlineCompletionRequest=t.DidCloseNotebookDocumentNotification=t.DidSaveNotebookDocumentNotification=t.DidChangeNotebookDocumentNotification=t.NotebookCellArrayChange=t.DidOpenNotebookDocumentNotification=t.NotebookDocumentSyncRegistrationType=t.NotebookDocument=t.NotebookCell=t.ExecutionSummary=t.NotebookCellKind=t.DiagnosticRefreshRequest=t.WorkspaceDiagnosticRequest=t.DocumentDiagnosticRequest=t.DocumentDiagnosticReportKind=t.DiagnosticServerCancellationData=t.InlayHintRefreshRequest=t.InlayHintResolveRequest=t.InlayHintRequest=t.InlineValueRefreshRequest=t.InlineValueRequest=t.TypeHierarchySupertypesRequest=t.TypeHierarchySubtypesRequest=t.TypeHierarchyPrepareRequest=void 0;const e=X,n=Mh,r=Se,i=Nl;Object.defineProperty(t,"ImplementationRequest",{enumerable:!0,get:function(){return i.ImplementationRequest}});const s=Il;Object.defineProperty(t,"TypeDefinitionRequest",{enumerable:!0,get:function(){return s.TypeDefinitionRequest}});const o=Kr;Object.defineProperty(t,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return o.WorkspaceFoldersRequest}}),Object.defineProperty(t,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return o.DidChangeWorkspaceFoldersNotification}});const a=Dl;Object.defineProperty(t,"ConfigurationRequest",{enumerable:!0,get:function(){return a.ConfigurationRequest}});const c=Wr;Object.defineProperty(t,"DocumentColorRequest",{enumerable:!0,get:function(){return c.DocumentColorRequest}}),Object.defineProperty(t,"ColorPresentationRequest",{enumerable:!0,get:function(){return c.ColorPresentationRequest}});const l=Gr;Object.defineProperty(t,"FoldingRangeRequest",{enumerable:!0,get:function(){return l.FoldingRangeRequest}}),Object.defineProperty(t,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return l.FoldingRangeRefreshRequest}});const u=Ol;Object.defineProperty(t,"DeclarationRequest",{enumerable:!0,get:function(){return u.DeclarationRequest}});const f=xl;Object.defineProperty(t,"SelectionRangeRequest",{enumerable:!0,get:function(){return f.SelectionRangeRequest}});const m=Mn;Object.defineProperty(t,"WorkDoneProgress",{enumerable:!0,get:function(){return m.WorkDoneProgress}}),Object.defineProperty(t,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return m.WorkDoneProgressCreateRequest}}),Object.defineProperty(t,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return m.WorkDoneProgressCancelNotification}});const g=Fn;Object.defineProperty(t,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyIncomingCallsRequest}}),Object.defineProperty(t,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return g.CallHierarchyOutgoingCallsRequest}}),Object.defineProperty(t,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return g.CallHierarchyPrepareRequest}});const d=ht;Object.defineProperty(t,"TokenFormat",{enumerable:!0,get:function(){return d.TokenFormat}}),Object.defineProperty(t,"SemanticTokensRequest",{enumerable:!0,get:function(){return d.SemanticTokensRequest}}),Object.defineProperty(t,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return d.SemanticTokensDeltaRequest}}),Object.defineProperty(t,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return d.SemanticTokensRangeRequest}}),Object.defineProperty(t,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return d.SemanticTokensRefreshRequest}}),Object.defineProperty(t,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return d.SemanticTokensRegistrationType}});const v=Ll;Object.defineProperty(t,"ShowDocumentRequest",{enumerable:!0,get:function(){return v.ShowDocumentRequest}});const R=Ml;Object.defineProperty(t,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return R.LinkedEditingRangeRequest}});const _=tt;Object.defineProperty(t,"FileOperationPatternKind",{enumerable:!0,get:function(){return _.FileOperationPatternKind}}),Object.defineProperty(t,"DidCreateFilesNotification",{enumerable:!0,get:function(){return _.DidCreateFilesNotification}}),Object.defineProperty(t,"WillCreateFilesRequest",{enumerable:!0,get:function(){return _.WillCreateFilesRequest}}),Object.defineProperty(t,"DidRenameFilesNotification",{enumerable:!0,get:function(){return _.DidRenameFilesNotification}}),Object.defineProperty(t,"WillRenameFilesRequest",{enumerable:!0,get:function(){return _.WillRenameFilesRequest}}),Object.defineProperty(t,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return _.DidDeleteFilesNotification}}),Object.defineProperty(t,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return _.WillDeleteFilesRequest}});const h=Hn;Object.defineProperty(t,"UniquenessLevel",{enumerable:!0,get:function(){return h.UniquenessLevel}}),Object.defineProperty(t,"MonikerKind",{enumerable:!0,get:function(){return h.MonikerKind}}),Object.defineProperty(t,"MonikerRequest",{enumerable:!0,get:function(){return h.MonikerRequest}});const p=jn;Object.defineProperty(t,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return p.TypeHierarchyPrepareRequest}}),Object.defineProperty(t,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return p.TypeHierarchySubtypesRequest}}),Object.defineProperty(t,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return p.TypeHierarchySupertypesRequest}});const w=Yr;Object.defineProperty(t,"InlineValueRequest",{enumerable:!0,get:function(){return w.InlineValueRequest}}),Object.defineProperty(t,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return w.InlineValueRefreshRequest}});const F=Un;Object.defineProperty(t,"InlayHintRequest",{enumerable:!0,get:function(){return F.InlayHintRequest}}),Object.defineProperty(t,"InlayHintResolveRequest",{enumerable:!0,get:function(){return F.InlayHintResolveRequest}}),Object.defineProperty(t,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return F.InlayHintRefreshRequest}});const G=At;Object.defineProperty(t,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return G.DiagnosticServerCancellationData}}),Object.defineProperty(t,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return G.DocumentDiagnosticReportKind}}),Object.defineProperty(t,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return G.DocumentDiagnosticRequest}}),Object.defineProperty(t,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return G.WorkspaceDiagnosticRequest}}),Object.defineProperty(t,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return G.DiagnosticRefreshRequest}});const J=ke;Object.defineProperty(t,"NotebookCellKind",{enumerable:!0,get:function(){return J.NotebookCellKind}}),Object.defineProperty(t,"ExecutionSummary",{enumerable:!0,get:function(){return J.ExecutionSummary}}),Object.defineProperty(t,"NotebookCell",{enumerable:!0,get:function(){return J.NotebookCell}}),Object.defineProperty(t,"NotebookDocument",{enumerable:!0,get:function(){return J.NotebookDocument}}),Object.defineProperty(t,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return J.NotebookDocumentSyncRegistrationType}}),Object.defineProperty(t,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidOpenNotebookDocumentNotification}}),Object.defineProperty(t,"NotebookCellArrayChange",{enumerable:!0,get:function(){return J.NotebookCellArrayChange}}),Object.defineProperty(t,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidChangeNotebookDocumentNotification}}),Object.defineProperty(t,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidSaveNotebookDocumentNotification}}),Object.defineProperty(t,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return J.DidCloseNotebookDocumentNotification}});const be=Fl;Object.defineProperty(t,"InlineCompletionRequest",{enumerable:!0,get:function(){return be.InlineCompletionRequest}});var Ee;(function(y){function Ne(Ie){const W=Ie;return r.string(W)||r.string(W.language)||r.string(W.scheme)||r.string(W.pattern)}y.is=Ne})(Ee||(t.TextDocumentFilter=Ee={}));var Pe;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(r.string(W.notebookType)||r.string(W.scheme)||r.string(W.pattern))}y.is=Ne})(Pe||(t.NotebookDocumentFilter=Pe={}));var A;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(r.string(W.notebook)||Pe.is(W.notebook))&&(W.language===void 0||r.string(W.language))}y.is=Ne})(A||(t.NotebookCellTextDocumentFilter=A={}));var E;(function(y){function Ne(Ie){if(!Array.isArray(Ie))return!1;for(let W of Ie)if(!r.string(W)&&!Ee.is(W)&&!A.is(W))return!1;return!0}y.is=Ne})(E||(t.DocumentSelector=E={}));var b;(function(y){y.method="client/registerCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(b||(t.RegistrationRequest=b={}));var $;(function(y){y.method="client/unregisterCapability",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})($||(t.UnregistrationRequest=$={}));var N;(function(y){y.Create="create",y.Rename="rename",y.Delete="delete"})(N||(t.ResourceOperationKind=N={}));var P;(function(y){y.Abort="abort",y.Transactional="transactional",y.TextOnlyTransactional="textOnlyTransactional",y.Undo="undo"})(P||(t.FailureHandlingKind=P={}));var O;(function(y){y.UTF8="utf-8",y.UTF16="utf-16",y.UTF32="utf-32"})(O||(t.PositionEncodingKind=O={}));var He;(function(y){function Ne(Ie){const W=Ie;return W&&r.string(W.id)&&W.id.length>0}y.hasId=Ne})(He||(t.StaticRegistrationOptions=He={}));var x;(function(y){function Ne(Ie){const W=Ie;return W&&(W.documentSelector===null||E.is(W.documentSelector))}y.is=Ne})(x||(t.TextDocumentRegistrationOptions=x={}));var S;(function(y){function Ne(W){const T=W;return r.objectLiteral(T)&&(T.workDoneProgress===void 0||r.boolean(T.workDoneProgress))}y.is=Ne;function Ie(W){const T=W;return T&&r.boolean(T.workDoneProgress)}y.hasWorkDoneProgress=Ie})(S||(t.WorkDoneProgressOptions=S={}));var te;(function(y){y.method="initialize",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(te||(t.InitializeRequest=te={}));var Vt;(function(y){y.unknownProtocolVersion=1})(Vt||(t.InitializeErrorCodes=Vt={}));var Yt;(function(y){y.method="initialized",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Yt||(t.InitializedNotification=Yt={}));var Le;(function(y){y.method="shutdown",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType0(y.method)})(Le||(t.ShutdownRequest=Le={}));var Xt;(function(y){y.method="exit",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType0(y.method)})(Xt||(t.ExitNotification=Xt={}));var ye;(function(y){y.method="workspace/didChangeConfiguration",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ye||(t.DidChangeConfigurationNotification=ye={}));var je;(function(y){y.Error=1,y.Warning=2,y.Info=3,y.Log=4,y.Debug=5})(je||(t.MessageType=je={}));var Ge;(function(y){y.method="window/showMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ge||(t.ShowMessageNotification=Ge={}));var ve;(function(y){y.method="window/showMessageRequest",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType(y.method)})(ve||(t.ShowMessageRequest=ve={}));var ze;(function(y){y.method="window/logMessage",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(ze||(t.LogMessageNotification=ze={}));var Ae;(function(y){y.method="telemetry/event",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ae||(t.TelemetryEventNotification=Ae={}));var V;(function(y){y.None=0,y.Full=1,y.Incremental=2})(V||(t.TextDocumentSyncKind=V={}));var Ke;(function(y){y.method="textDocument/didOpen",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Ke||(t.DidOpenTextDocumentNotification=Ke={}));var ue;(function(y){function Ne(W){let T=W;return T!=null&&typeof T.text=="string"&&T.range!==void 0&&(T.rangeLength===void 0||typeof T.rangeLength=="number")}y.isIncremental=Ne;function Ie(W){let T=W;return T!=null&&typeof T.text=="string"&&T.range===void 0&&T.rangeLength===void 0}y.isFull=Ie})(ue||(t.TextDocumentContentChangeEvent=ue={}));var ft;(function(y){y.method="textDocument/didChange",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ft||(t.DidChangeTextDocumentNotification=ft={}));var Rr;(function(y){y.method="textDocument/didClose",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Rr||(t.DidCloseTextDocumentNotification=Rr={}));var ii;(function(y){y.method="textDocument/didSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(ii||(t.DidSaveTextDocumentNotification=ii={}));var si;(function(y){y.Manual=1,y.AfterDelay=2,y.FocusOut=3})(si||(t.TextDocumentSaveReason=si={}));var oi;(function(y){y.method="textDocument/willSave",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(oi||(t.WillSaveTextDocumentNotification=oi={}));var ai;(function(y){y.method="textDocument/willSaveWaitUntil",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ai||(t.WillSaveTextDocumentWaitUntilRequest=ai={}));var Ft;(function(y){y.method="workspace/didChangeWatchedFiles",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolNotificationType(y.method)})(Ft||(t.DidChangeWatchedFilesNotification=Ft={}));var ci;(function(y){y.Created=1,y.Changed=2,y.Deleted=3})(ci||(t.FileChangeType=ci={}));var qs;(function(y){function Ne(Ie){const W=Ie;return r.objectLiteral(W)&&(n.URI.is(W.baseUri)||n.WorkspaceFolder.is(W.baseUri))&&r.string(W.pattern)}y.is=Ne})(qs||(t.RelativePattern=qs={}));var Bs;(function(y){y.Create=1,y.Change=2,y.Delete=4})(Bs||(t.WatchKind=Bs={}));var Ks;(function(y){y.method="textDocument/publishDiagnostics",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolNotificationType(y.method)})(Ks||(t.PublishDiagnosticsNotification=Ks={}));var Ws;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.TriggerForIncompleteCompletions=3})(Ws||(t.CompletionTriggerKind=Ws={}));var li;(function(y){y.method="textDocument/completion",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(li||(t.CompletionRequest=li={}));var ui;(function(y){y.method="completionItem/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ui||(t.CompletionResolveRequest=ui={}));var dn;(function(y){y.method="textDocument/hover",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(dn||(t.HoverRequest=dn={}));var di;(function(y){y.Invoked=1,y.TriggerCharacter=2,y.ContentChange=3})(di||(t.SignatureHelpTriggerKind=di={}));var Gs;(function(y){y.method="textDocument/signatureHelp",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Gs||(t.SignatureHelpRequest=Gs={}));var zs;(function(y){y.method="textDocument/definition",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(zs||(t.DefinitionRequest=zs={}));var fi;(function(y){y.method="textDocument/references",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fi||(t.ReferencesRequest=fi={}));var hi;(function(y){y.method="textDocument/documentHighlight",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(hi||(t.DocumentHighlightRequest=hi={}));var Vs;(function(y){y.method="textDocument/documentSymbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Vs||(t.DocumentSymbolRequest=Vs={}));var Ys;(function(y){y.method="textDocument/codeAction",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ys||(t.CodeActionRequest=Ys={}));var Xs;(function(y){y.method="codeAction/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Xs||(t.CodeActionResolveRequest=Xs={}));var Js;(function(y){y.method="workspace/symbol",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Js||(t.WorkspaceSymbolRequest=Js={}));var Qs;(function(y){y.method="workspaceSymbol/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Qs||(t.WorkspaceSymbolResolveRequest=Qs={}));var Zs;(function(y){y.method="textDocument/codeLens",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Zs||(t.CodeLensRequest=Zs={}));var Ht;(function(y){y.method="codeLens/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(Ht||(t.CodeLensResolveRequest=Ht={}));var eo;(function(y){y.method="workspace/codeLens/refresh",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType0(y.method)})(eo||(t.CodeLensRefreshRequest=eo={}));var to;(function(y){y.method="textDocument/documentLink",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(to||(t.DocumentLinkRequest=to={}));var er;(function(y){y.method="documentLink/resolve",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(er||(t.DocumentLinkResolveRequest=er={}));var no;(function(y){y.method="textDocument/formatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(no||(t.DocumentFormattingRequest=no={}));var wr;(function(y){y.method="textDocument/rangeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(wr||(t.DocumentRangeFormattingRequest=wr={}));var ro;(function(y){y.method="textDocument/rangesFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(ro||(t.DocumentRangesFormattingRequest=ro={}));var fn;(function(y){y.method="textDocument/onTypeFormatting",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(fn||(t.DocumentOnTypeFormattingRequest=fn={}));var Nn;(function(y){y.Identifier=1})(Nn||(t.PrepareSupportDefaultBehavior=Nn={}));var io;(function(y){y.method="textDocument/rename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(io||(t.RenameRequest=io={}));var so;(function(y){y.method="textDocument/prepareRename",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(so||(t.PrepareRenameRequest=so={}));var In;(function(y){y.method="workspace/executeCommand",y.messageDirection=e.MessageDirection.clientToServer,y.type=new e.ProtocolRequestType(y.method)})(In||(t.ExecuteCommandRequest=In={}));var pi;(function(y){y.method="workspace/applyEdit",y.messageDirection=e.MessageDirection.serverToClient,y.type=new e.ProtocolRequestType("workspace/applyEdit")})(pi||(t.ApplyWorkspaceEditRequest=pi={}))})(Z_);var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.createProtocolConnection=void 0;const Dg=Tr;function AN(t,e,n,r){return Dg.ConnectionStrategy.is(r)&&(r={connectionStrategy:r}),(0,Dg.createMessageConnection)(t,e,n,r)}Hl.createProtocolConnection=AN;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,c){c===void 0&&(c=a);var l=Object.getOwnPropertyDescriptor(o,a);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,c,l)}:function(s,o,a,c){c===void 0&&(c=a),s[c]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.LSPErrorCodes=t.createProtocolConnection=void 0,n(Tr,t),n(Mh,t),n(X,t),n(Z_,t);var r=Hl;Object.defineProperty(t,"createProtocolConnection",{enumerable:!0,get:function(){return r.createProtocolConnection}});var i;(function(s){s.lspReservedErrorRangeStart=-32899,s.RequestFailed=-32803,s.ServerCancelled=-32802,s.ContentModified=-32801,s.RequestCancelled=-32800,s.lspReservedErrorRangeEnd=-32800})(i||(t.LSPErrorCodes=i={}))})(Q_);(function(t){var e=xe&&xe.__createBinding||(Object.create?function(s,o,a,c){c===void 0&&(c=a);var l=Object.getOwnPropertyDescriptor(o,a);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,c,l)}:function(s,o,a,c){c===void 0&&(c=a),s[c]=o[a]}),n=xe&&xe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.createProtocolConnection=void 0;const r=wm;n(wm,t),n(Q_,t);function i(s,o,a,c){return(0,r.createMessageConnection)(s,o,a,c)}t.createProtocolConnection=i})(oe);Object.defineProperty(vn,"__esModule",{value:!0});vn.SemanticTokensBuilder=vn.SemanticTokensDiff=vn.SemanticTokensFeature=void 0;const bo=oe,NN=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(bo.SemanticTokensRefreshRequest.type),on:e=>{const n=bo.SemanticTokensRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onDelta:e=>{const n=bo.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onRange:e=>{const n=bo.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};vn.SemanticTokensFeature=NN;class rT{constructor(e,n){this.originalSequence=e,this.modifiedSequence=n}computeDiff(){const e=this.originalSequence.length,n=this.modifiedSequence.length;let r=0;for(;r<n&&r<e&&this.originalSequence[r]===this.modifiedSequence[r];)r++;if(r<n&&r<e){let i=e-1,s=n-1;for(;i>=r&&s>=r&&this.originalSequence[i]===this.modifiedSequence[s];)i--,s--;(i<r||s<r)&&(i++,s++);const o=i-r+1,a=this.modifiedSequence.slice(r,s+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:r,deleteCount:o-1}]:[{start:r,deleteCount:o,data:a}]}else return r<n?[{start:r,deleteCount:0,data:this.modifiedSequence.slice(r)}]:r<e?[{start:r,deleteCount:e-r}]:[]}}vn.SemanticTokensDiff=rT;let IN=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,n,r,i,s){let o=e,a=n;this._dataLen>0&&(o-=this._prevLine,o===0&&(a-=this._prevChar)),this._data[this._dataLen++]=o,this._data[this._dataLen++]=a,this._data[this._dataLen++]=r,this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._prevLine=e,this._prevChar=n}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new rT(this._prevData,this._data).computeDiff()}:this.build()}};vn.SemanticTokensBuilder=IN;var jl={};Object.defineProperty(jl,"__esModule",{value:!0});jl.InlineCompletionFeature=void 0;const DN=oe,ON=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(DN.InlineCompletionRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};jl.InlineCompletionFeature=ON;var Us={};Object.defineProperty(Us,"__esModule",{value:!0});Us.TextDocuments=void 0;const tr=oe;class xN{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new tr.Emitter,this._onDidOpen=new tr.Emitter,this._onDidClose=new tr.Emitter,this._onDidSave=new tr.Emitter,this._onWillSave=new tr.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=tr.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,s);const o=Object.freeze({document:s});this._onDidOpen.fire(o),this._onDidChangeContent.fire(o)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,s,o),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),n.push(e.onDidCloseTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(r.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(e.onWillSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{let s=this._syncedDocuments.get(r.textDocument.uri);return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),tr.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}Us.TextDocuments=xN;var mr={};Object.defineProperty(mr,"__esModule",{value:!0});mr.NotebookDocuments=mr.NotebookSyncFeature=void 0;const Nt=oe,Og=Us,LN=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Nt.DidOpenNotebookDocumentNotification.type,n=>{e(n)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Nt.DidChangeNotebookDocumentNotification.type,n=>{e(n)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Nt.DidSaveNotebookDocumentNotification.type,n=>{e(n)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Nt.DidCloseNotebookDocumentNotification.type,n=>{e(n)})}}};mr.NotebookSyncFeature=LN;let iT=class mc{onDidOpenTextDocument(e){return this.openHandler=e,Nt.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Nt.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Nt.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return mc.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return mc.NULL_DISPOSE}onDidSaveTextDocument(){return mc.NULL_DISPOSE}};iT.NULL_DISPOSE=Object.freeze({dispose:()=>{}});class MN{constructor(e){e instanceof Og.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Og.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Nt.Emitter,this._onDidChange=new Nt.Emitter,this._onDidSave=new Nt.Emitter,this._onDidClose=new Nt.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){const n=this.notebookCellMap.get(e);return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"?e:e.document,r=this.notebookCellMap.get(n);return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new iT,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(const s of i.cellTextDocuments)n.openTextDocument({textDocument:s});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s===void 0)return;s.version=i.notebookDocument.version;const o=s.metadata;let a=!1;const c=i.change;c.metadata!==void 0&&(a=!0,s.metadata=c.metadata);const l=[],u=[],f=[],m=[];if(c.cells!==void 0){const _=c.cells;if(_.structure!==void 0){const h=_.structure.array;if(s.cells.splice(h.start,h.deleteCount,...h.cells!==void 0?h.cells:[]),_.structure.didOpen!==void 0)for(const p of _.structure.didOpen)n.openTextDocument({textDocument:p}),l.push(p.uri);if(_.structure.didClose)for(const p of _.structure.didClose)n.closeTextDocument({textDocument:p}),u.push(p.uri)}if(_.data!==void 0){const h=new Map(_.data.map(p=>[p.document,p]));for(let p=0;p<=s.cells.length;p++){const w=h.get(s.cells[p].document);if(w!==void 0){const F=s.cells.splice(p,1,w);if(f.push({old:F[0],new:w}),h.delete(w.document),h.size===0)break}}}if(_.textContent!==void 0)for(const h of _.textContent)n.changeTextDocument({textDocument:h.document,contentChanges:h.changes}),m.push(h.document.uri)}this.updateCellMap(s);const g={notebookDocument:s};a&&(g.metadata={old:o,new:s.metadata});const d=[];for(const _ of l)d.push(this.getNotebookCell(_));const v=[];for(const _ of u)v.push(this.getNotebookCell(_));const R=[];for(const _ of m)R.push(this.getNotebookCell(_));(d.length>0||v.length>0||f.length>0||R.length>0)&&(g.cells={added:d,removed:v,changed:{data:f,textContent:R}}),(g.metadata!==void 0||g.cells!==void 0)&&this._onDidChange.fire(g)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s!==void 0){this._onDidClose.fire(s);for(const o of i.cellTextDocuments)n.closeTextDocument({textDocument:o});this.notebookDocuments.delete(i.notebookDocument.uri);for(const o of s.cells)this.notebookCellMap.delete(o.document)}})),Nt.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}mr.NotebookDocuments=MN;var ne={},Oe={};Object.defineProperty(Oe,"__esModule",{value:!0});Oe.thenable=Oe.typedArray=Oe.stringArray=Oe.array=Oe.func=Oe.error=Oe.number=Oe.string=Oe.boolean=void 0;function FN(t){return t===!0||t===!1}Oe.boolean=FN;function sT(t){return typeof t=="string"||t instanceof String}Oe.string=sT;function HN(t){return typeof t=="number"||t instanceof Number}Oe.number=HN;function jN(t){return t instanceof Error}Oe.error=jN;function oT(t){return typeof t=="function"}Oe.func=oT;function aT(t){return Array.isArray(t)}Oe.array=aT;function UN(t){return aT(t)&&t.every(e=>sT(e))}Oe.stringArray=UN;function qN(t,e){return Array.isArray(t)&&t.every(e)}Oe.typedArray=qN;function BN(t){return t&&oT(t.then)}Oe.thenable=BN;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.generateUuid=Tt.parse=Tt.isUUID=Tt.v4=Tt.empty=void 0;class Fh{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}}class Y extends Fh{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return Y._oneOf(Y._chars)}constructor(){super([Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-","4",Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._oneOf(Y._timeHighBits),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex()].join(""))}}Y._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Y._timeHighBits=["8","9","a","b"];Tt.empty=new Fh("00000000-0000-0000-0000-000000000000");function cT(){return new Y}Tt.v4=cT;const KN=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function lT(t){return KN.test(t)}Tt.isUUID=lT;function WN(t){if(!lT(t))throw new Error("invalid uuid");return new Fh(t)}Tt.parse=WN;function GN(){return cT().asHex()}Tt.generateUuid=GN;var qn={};Object.defineProperty(qn,"__esModule",{value:!0});qn.attachPartialResult=qn.ProgressFeature=qn.attachWorkDone=void 0;const Bn=oe,zN=Tt;class Yn{constructor(e,n){this._connection=e,this._token=n,Yn.Instances.set(this._token,this)}begin(e,n,r,i){let s={kind:"begin",title:e,percentage:n,message:r,cancellable:i};this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,s)}report(e,n){let r={kind:"report"};typeof e=="number"?(r.percentage=e,n!==void 0&&(r.message=n)):r.message=e,this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,r)}done(){Yn.Instances.delete(this._token),this._connection.sendProgress(Bn.WorkDoneProgress.type,this._token,{kind:"end"})}}Yn.Instances=new Map;class xg extends Yn{constructor(e,n){super(e,n),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}}class Hh{constructor(){}begin(){}report(){}done(){}}class Lg extends Hh{constructor(){super(),this._source=new Bn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}}function VN(t,e){if(e===void 0||e.workDoneToken===void 0)return new Hh;const n=e.workDoneToken;return delete e.workDoneToken,new Yn(t,n)}qn.attachWorkDone=VN;const YN=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var n;super.initialize(e),((n=e==null?void 0:e.window)==null?void 0:n.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(Bn.WorkDoneProgressCancelNotification.type,r=>{let i=Yn.Instances.get(r.token);(i instanceof xg||i instanceof Lg)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Hh:new Yn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){const e=(0,zN.generateUuid)();return this.connection.sendRequest(Bn.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new xg(this.connection,e))}else return Promise.resolve(new Lg)}};qn.ProgressFeature=YN;var Gf;(function(t){t.type=new Bn.ProgressType})(Gf||(Gf={}));class XN{constructor(e,n){this._connection=e,this._token=n}report(e){this._connection.sendProgress(Gf.type,this._token,e)}}function JN(t,e){if(e===void 0||e.partialResultToken===void 0)return;const n=e.partialResultToken;return delete e.partialResultToken,new XN(t,n)}qn.attachPartialResult=JN;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.ConfigurationFeature=void 0;const QN=oe,ZN=Oe,eI=t=>class extends t{getConfiguration(e){return e?ZN.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let n={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(QN.ConfigurationRequest.type,n).then(r=>Array.isArray(r)?Array.isArray(e)?r:r[0]:Array.isArray(e)?[]:null)}};Ul.ConfigurationFeature=eI;var ql={};Object.defineProperty(ql,"__esModule",{value:!0});ql.WorkspaceFoldersFeature=void 0;const ko=oe,tI=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let n=e.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new ko.Emitter,this.connection.onNotification(ko.DidChangeWorkspaceFoldersNotification.type,r=>{this._onDidChangeWorkspaceFolders.fire(r.event)}))}fillServerCapabilities(e){var r,i;super.fillServerCapabilities(e);const n=(i=(r=e.workspace)==null?void 0:r.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(ko.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(ko.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};ql.WorkspaceFoldersFeature=tI;var Bl={};Object.defineProperty(Bl,"__esModule",{value:!0});Bl.CallHierarchyFeature=void 0;const Ru=oe,nI=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Ru.CallHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onIncomingCalls:e=>{const n=Ru.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onOutgoingCalls:e=>{const n=Ru.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Bl.CallHierarchyFeature=nI;var Kl={};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.ShowDocumentFeature=void 0;const rI=oe,iI=t=>class extends t{showDocument(e){return this.connection.sendRequest(rI.ShowDocumentRequest.type,e)}};Kl.ShowDocumentFeature=iI;var Wl={};Object.defineProperty(Wl,"__esModule",{value:!0});Wl.FileOperationsFeature=void 0;const kr=oe,sI=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(kr.DidCreateFilesNotification.type,n=>{e(n)})}onDidRenameFiles(e){return this.connection.onNotification(kr.DidRenameFilesNotification.type,n=>{e(n)})}onDidDeleteFiles(e){return this.connection.onNotification(kr.DidDeleteFilesNotification.type,n=>{e(n)})}onWillCreateFiles(e){return this.connection.onRequest(kr.WillCreateFilesRequest.type,(n,r)=>e(n,r))}onWillRenameFiles(e){return this.connection.onRequest(kr.WillRenameFilesRequest.type,(n,r)=>e(n,r))}onWillDeleteFiles(e){return this.connection.onRequest(kr.WillDeleteFilesRequest.type,(n,r)=>e(n,r))}};Wl.FileOperationsFeature=sI;var Gl={};Object.defineProperty(Gl,"__esModule",{value:!0});Gl.LinkedEditingRangeFeature=void 0;const oI=oe,aI=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(oI.LinkedEditingRangeRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0))}};Gl.LinkedEditingRangeFeature=aI;var zl={};Object.defineProperty(zl,"__esModule",{value:!0});zl.TypeHierarchyFeature=void 0;const wu=oe,cI=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(wu.TypeHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onSupertypes:e=>{const n=wu.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onSubtypes:e=>{const n=wu.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};zl.TypeHierarchyFeature=cI;var Vl={};Object.defineProperty(Vl,"__esModule",{value:!0});Vl.InlineValueFeature=void 0;const Mg=oe,lI=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Mg.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Mg.InlineValueRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Vl.InlineValueFeature=lI;var Yl={};Object.defineProperty(Yl,"__esModule",{value:!0});Yl.FoldingRangeFeature=void 0;const Fg=oe,uI=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Fg.FoldingRangeRefreshRequest.type),on:e=>{const n=Fg.FoldingRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Yl.FoldingRangeFeature=uI;var Xl={};Object.defineProperty(Xl,"__esModule",{value:!0});Xl.InlayHintFeature=void 0;const bu=oe,dI=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(bu.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(bu.InlayHintRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n))),resolve:e=>this.connection.onRequest(bu.InlayHintResolveRequest.type,(n,r)=>e(n,r))}}};Xl.InlayHintFeature=dI;var Jl={};Object.defineProperty(Jl,"__esModule",{value:!0});Jl.DiagnosticFeature=void 0;const _i=oe,fI=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(_i.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(_i.DocumentDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(_i.DocumentDiagnosticRequest.partialResult,n))),onWorkspace:e=>this.connection.onRequest(_i.WorkspaceDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(_i.WorkspaceDiagnosticRequest.partialResult,n)))}}};Jl.DiagnosticFeature=fI;var Ql={};Object.defineProperty(Ql,"__esModule",{value:!0});Ql.MonikerFeature=void 0;const hI=oe,pI=t=>class extends t{get moniker(){return{on:e=>{const n=hI.MonikerRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Ql.MonikerFeature=pI;Object.defineProperty(ne,"__esModule",{value:!0});ne.createConnection=ne.combineFeatures=ne.combineNotebooksFeatures=ne.combineLanguagesFeatures=ne.combineWorkspaceFeatures=ne.combineWindowFeatures=ne.combineClientFeatures=ne.combineTracerFeatures=ne.combineTelemetryFeatures=ne.combineConsoleFeatures=ne._NotebooksImpl=ne._LanguagesImpl=ne.BulkUnregistration=ne.BulkRegistration=ne.ErrorMessageTracker=void 0;const D=oe,Et=Oe,zf=Tt,z=qn,mI=Ul,gI=ql,yI=Bl,vI=vn,_I=Kl,TI=Wl,RI=Gl,wI=zl,bI=Vl,kI=Yl,SI=Xl,CI=Jl,$I=mr,EI=Ql;function ku(t){if(t!==null)return t}class PI{constructor(){this._messages=Object.create(null)}add(e){let n=this._messages[e];n||(n=0),n++,this._messages[e]=n}sendErrors(e){Object.keys(this._messages).forEach(n=>{e.window.showErrorMessage(n)})}}ne.ErrorMessageTracker=PI;class Hg{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,n){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:n}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}}class AI{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...n){let r={type:D.MessageType.Error,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}showWarningMessage(e,...n){let r={type:D.MessageType.Warning,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}showInformationMessage(e,...n){let r={type:D.MessageType.Info,message:e,actions:n};return this.connection.sendRequest(D.ShowMessageRequest.type,r).then(ku)}}const jg=(0,_I.ShowDocumentFeature)((0,z.ProgressFeature)(AI));var Ug;(function(t){function e(){return new uT}t.create=e})(Ug||(ne.BulkRegistration=Ug={}));class uT{constructor(){this._registrations=[],this._registered=new Set}add(e,n){const r=Et.string(e)?e:e.method;if(this._registered.has(r))throw new Error(`${r} is already added to this registration`);const i=zf.generateUuid();this._registrations.push({id:i,method:r,registerOptions:n||{}}),this._registered.add(r)}asRegistrationParams(){return{registrations:this._registrations}}}var qg;(function(t){function e(){return new Vf(void 0,[])}t.create=e})(qg||(ne.BulkUnregistration=qg={}));class Vf{constructor(e,n){this._connection=e,this._unregistrations=new Map,n.forEach(r=>{this._unregistrations.set(r.method,r)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let r of this._unregistrations.values())e.push(r);let n={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){const n=Et.string(e)?e:e.method,r=this._unregistrations.get(n);if(!r)return!1;let i={unregisterations:[r]};return this._connection.sendRequest(D.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},s=>{this._connection.console.info(`Un-registering request handler for ${r.id} failed.`)}),!0}}class Bg{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,n,r){return e instanceof uT?this.registerMany(e):e instanceof Vf?this.registerSingle1(e,n,r):this.registerSingle2(e,n)}registerSingle1(e,n,r){const i=Et.string(n)?n:n.method,s=zf.generateUuid();let o={registrations:[{id:s,method:i,registerOptions:r||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,o).then(a=>(e.add({id:s,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,n){const r=Et.string(e)?e:e.method,i=zf.generateUuid();let s={registrations:[{id:i,method:r,registerOptions:n||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,s).then(o=>D.Disposable.create(()=>{this.unregisterSingle(i,r).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),o=>(this.connection.console.info(`Registering request handler for ${r} failed.`),Promise.reject(o)))}unregisterSingle(e,n){let r={unregisterations:[{id:e,method:n}]};return this.connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let n=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,n).then(()=>new Vf(this._connection,n.registrations.map(r=>({id:r.id,method:r.method}))),r=>(this.connection.console.info("Bulk registration failed."),Promise.reject(r)))}}class NI{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function n(i){return i&&!!i.edit}let r=n(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,r)}}const Kg=(0,TI.FileOperationsFeature)((0,gI.WorkspaceFoldersFeature)((0,mI.ConfigurationFeature)(NI)));class Wg{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,n){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?n:void 0}).catch(()=>{})}}class Gg{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}}class dT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._LanguagesImpl=dT;const zg=(0,kI.FoldingRangeFeature)((0,EI.MonikerFeature)((0,CI.DiagnosticFeature)((0,SI.InlayHintFeature)((0,bI.InlineValueFeature)((0,wI.TypeHierarchyFeature)((0,RI.LinkedEditingRangeFeature)((0,vI.SemanticTokensFeature)((0,yI.CallHierarchyFeature)(dT)))))))));class fT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._NotebooksImpl=fT;const Vg=(0,$I.NotebookSyncFeature)(fT);function hT(t,e){return function(n){return e(t(n))}}ne.combineConsoleFeatures=hT;function pT(t,e){return function(n){return e(t(n))}}ne.combineTelemetryFeatures=pT;function mT(t,e){return function(n){return e(t(n))}}ne.combineTracerFeatures=mT;function gT(t,e){return function(n){return e(t(n))}}ne.combineClientFeatures=gT;function yT(t,e){return function(n){return e(t(n))}}ne.combineWindowFeatures=yT;function vT(t,e){return function(n){return e(t(n))}}ne.combineWorkspaceFeatures=vT;function _T(t,e){return function(n){return e(t(n))}}ne.combineLanguagesFeatures=_T;function TT(t,e){return function(n){return e(t(n))}}ne.combineNotebooksFeatures=TT;function II(t,e){function n(i,s,o){return i&&s?o(i,s):i||s}return{__brand:"features",console:n(t.console,e.console,hT),tracer:n(t.tracer,e.tracer,mT),telemetry:n(t.telemetry,e.telemetry,pT),client:n(t.client,e.client,gT),window:n(t.window,e.window,yT),workspace:n(t.workspace,e.workspace,vT),languages:n(t.languages,e.languages,_T),notebooks:n(t.notebooks,e.notebooks,TT)}}ne.combineFeatures=II;function DI(t,e,n){const r=n&&n.console?new(n.console(Hg)):new Hg,i=t(r);r.rawAttach(i);const s=n&&n.tracer?new(n.tracer(Wg)):new Wg,o=n&&n.telemetry?new(n.telemetry(Gg)):new Gg,a=n&&n.client?new(n.client(Bg)):new Bg,c=n&&n.window?new(n.window(jg)):new jg,l=n&&n.workspace?new(n.workspace(Kg)):new Kg,u=n&&n.languages?new(n.languages(zg)):new zg,f=n&&n.notebooks?new(n.notebooks(Vg)):new Vg,m=[r,s,o,a,c,l,u,f];function g(h){return h instanceof Promise?h:Et.thenable(h)?new Promise((p,w)=>{h.then(F=>p(F),F=>w(F))}):Promise.resolve(h)}let d,v,R,_={listen:()=>i.listen(),sendRequest:(h,...p)=>i.sendRequest(Et.string(h)?h:h.method,...p),onRequest:(h,p)=>i.onRequest(h,p),sendNotification:(h,p)=>{const w=Et.string(h)?h:h.method;return i.sendNotification(w,p)},onNotification:(h,p)=>i.onNotification(h,p),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:h=>(v=h,{dispose:()=>{v=void 0}}),onInitialized:h=>i.onNotification(D.InitializedNotification.type,h),onShutdown:h=>(d=h,{dispose:()=>{d=void 0}}),onExit:h=>(R=h,{dispose:()=>{R=void 0}}),get console(){return r},get telemetry(){return o},get tracer(){return s},get client(){return a},get window(){return c},get workspace(){return l},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:h=>i.onNotification(D.DidChangeConfigurationNotification.type,h),onDidChangeWatchedFiles:h=>i.onNotification(D.DidChangeWatchedFilesNotification.type,h),__textDocumentSync:void 0,onDidOpenTextDocument:h=>i.onNotification(D.DidOpenTextDocumentNotification.type,h),onDidChangeTextDocument:h=>i.onNotification(D.DidChangeTextDocumentNotification.type,h),onDidCloseTextDocument:h=>i.onNotification(D.DidCloseTextDocumentNotification.type,h),onWillSaveTextDocument:h=>i.onNotification(D.WillSaveTextDocumentNotification.type,h),onWillSaveTextDocumentWaitUntil:h=>i.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,h),onDidSaveTextDocument:h=>i.onNotification(D.DidSaveTextDocumentNotification.type,h),sendDiagnostics:h=>i.sendNotification(D.PublishDiagnosticsNotification.type,h),onHover:h=>i.onRequest(D.HoverRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onCompletion:h=>i.onRequest(D.CompletionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCompletionResolve:h=>i.onRequest(D.CompletionResolveRequest.type,h),onSignatureHelp:h=>i.onRequest(D.SignatureHelpRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDeclaration:h=>i.onRequest(D.DeclarationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDefinition:h=>i.onRequest(D.DefinitionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onTypeDefinition:h=>i.onRequest(D.TypeDefinitionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onImplementation:h=>i.onRequest(D.ImplementationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onReferences:h=>i.onRequest(D.ReferencesRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentHighlight:h=>i.onRequest(D.DocumentHighlightRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentSymbol:h=>i.onRequest(D.DocumentSymbolRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onWorkspaceSymbol:h=>i.onRequest(D.WorkspaceSymbolRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onWorkspaceSymbolResolve:h=>i.onRequest(D.WorkspaceSymbolResolveRequest.type,h),onCodeAction:h=>i.onRequest(D.CodeActionRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCodeActionResolve:h=>i.onRequest(D.CodeActionResolveRequest.type,(p,w)=>h(p,w)),onCodeLens:h=>i.onRequest(D.CodeLensRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onCodeLensResolve:h=>i.onRequest(D.CodeLensResolveRequest.type,(p,w)=>h(p,w)),onDocumentFormatting:h=>i.onRequest(D.DocumentFormattingRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDocumentRangeFormatting:h=>i.onRequest(D.DocumentRangeFormattingRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onDocumentOnTypeFormatting:h=>i.onRequest(D.DocumentOnTypeFormattingRequest.type,(p,w)=>h(p,w)),onRenameRequest:h=>i.onRequest(D.RenameRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),onPrepareRename:h=>i.onRequest(D.PrepareRenameRequest.type,(p,w)=>h(p,w)),onDocumentLinks:h=>i.onRequest(D.DocumentLinkRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onDocumentLinkResolve:h=>i.onRequest(D.DocumentLinkResolveRequest.type,(p,w)=>h(p,w)),onDocumentColor:h=>i.onRequest(D.DocumentColorRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onColorPresentation:h=>i.onRequest(D.ColorPresentationRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onFoldingRanges:h=>i.onRequest(D.FoldingRangeRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onSelectionRanges:h=>i.onRequest(D.SelectionRangeRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),(0,z.attachPartialResult)(i,p))),onExecuteCommand:h=>i.onRequest(D.ExecuteCommandRequest.type,(p,w)=>h(p,w,(0,z.attachWorkDone)(i,p),void 0)),dispose:()=>i.dispose()};for(let h of m)h.attach(_);return i.onRequest(D.InitializeRequest.type,h=>{e.initialize(h),Et.string(h.trace)&&(s.trace=D.Trace.fromString(h.trace));for(let p of m)p.initialize(h.capabilities);if(v){let p=v(h,new D.CancellationTokenSource().token,(0,z.attachWorkDone)(i,h),void 0);return g(p).then(w=>{if(w instanceof D.ResponseError)return w;let F=w;F||(F={capabilities:{}});let G=F.capabilities;G||(G={},F.capabilities=G),G.textDocumentSync===void 0||G.textDocumentSync===null?G.textDocumentSync=Et.number(_.__textDocumentSync)?_.__textDocumentSync:D.TextDocumentSyncKind.None:!Et.number(G.textDocumentSync)&&!Et.number(G.textDocumentSync.change)&&(G.textDocumentSync.change=Et.number(_.__textDocumentSync)?_.__textDocumentSync:D.TextDocumentSyncKind.None);for(let J of m)J.fillServerCapabilities(G);return F})}else{let p={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let w of m)w.fillServerCapabilities(p.capabilities);return p}}),i.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,d)return d(new D.CancellationTokenSource().token)}),i.onNotification(D.ExitNotification.type,()=>{try{R&&R()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(D.SetTraceNotification.type,h=>{s.trace=D.Trace.fromString(h.value)}),_}ne.createConnection=DI;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(c,l,u,f){f===void 0&&(f=u);var m=Object.getOwnPropertyDescriptor(l,u);(!m||("get"in m?!l.__esModule:m.writable||m.configurable))&&(m={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(c,f,m)}:function(c,l,u,f){f===void 0&&(f=u),c[f]=l[u]}),n=xe&&xe.__exportStar||function(c,l){for(var u in c)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,c,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProposedFeatures=t.NotebookDocuments=t.TextDocuments=t.SemanticTokensBuilder=void 0;const r=vn;Object.defineProperty(t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return r.SemanticTokensBuilder}});const i=jl;n(oe,t);const s=Us;Object.defineProperty(t,"TextDocuments",{enumerable:!0,get:function(){return s.TextDocuments}});const o=mr;Object.defineProperty(t,"NotebookDocuments",{enumerable:!0,get:function(){return o.NotebookDocuments}}),n(ne,t);var a;(function(c){c.all={__brand:"features",languages:i.InlineCompletionFeature}})(a||(t.ProposedFeatures=a={}))})(Ff);var OI=oe;(function(t){var e=xe&&xe.__createBinding||(Object.create?function(a,c,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(c,l);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(a,u,f)}:function(a,c,l,u){u===void 0&&(u=l),a[u]=c[l]}),n=xe&&xe.__exportStar||function(a,c){for(var l in a)l!=="default"&&!Object.prototype.hasOwnProperty.call(c,l)&&e(c,a,l)};Object.defineProperty(t,"__esModule",{value:!0}),t.createConnection=void 0;const r=Ff;n(OI,t),n(Ff,t);let i=!1;const s={initialize:a=>{},get shutdownReceived(){return i},set shutdownReceived(a){i=a},exit:a=>{}};function o(a,c,l,u){let f,m,g,d;a!==void 0&&a.__brand==="features"&&(f=a,a=c,c=l,l=u),r.ConnectionStrategy.is(a)||r.ConnectionOptions.is(a)?d=a:(m=a,g=c,d=l);const v=R=>(0,r.createProtocolConnection)(m,g,R,d);return(0,r.createConnection)(v,s,f)}t.createConnection=o})(L);function Yg(t,e){const n={stacks:t,tokens:e};return xI(n),n.stacks.flat().forEach(i=>{i.property=void 0}),wT(n.stacks).map(i=>i[i.length-1])}function jh(t){const{next:e,cardinalities:n,visited:r,plus:i}=t,s=[],o=e.feature;if(r.has(o))return[];lr(o)||r.add(o);let a,c=o;for(;c.$container;)if(lr(c.$container)){a=c.$container;break}else if($y(c.$container))c=c.$container;else break;if(mR(c.cardinality)){const l=Ir({next:{feature:c,type:e.type},cardinalities:n,visited:r,plus:i});for(const u of l)i.add(u.feature);s.push(...l)}if(a){const l=a.elements.indexOf(c);l!==void 0&&l<a.elements.length-1&&s.push(...RT({feature:a,type:e.type},l+1,n,r,i)),s.every(u=>as(u.feature.cardinality,u.feature)||as(n.get(u.feature))||i.has(u.feature))&&s.push(...jh({next:{feature:a,type:e.type},cardinalities:n,visited:r,plus:i}))}return s}function Yf(t){return Je(t)&&(t={feature:t}),Ir({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Ir(t){var e,n,r;const{next:i,cardinalities:s,visited:o,plus:a}=t;if(i===void 0)return[];const{feature:c,type:l}=i;if(lr(c))return o.has(c)?[]:(o.add(c),RT(i,0,s,o,a).map(u=>So(u,c.cardinality,s)));if(Jf(c)||Qf(c))return c.elements.flatMap(u=>Ir({next:{feature:u,type:l,property:i.property},cardinalities:s,visited:o,plus:a})).map(u=>So(u,c.cardinality,s));if(rn(c)){const u={feature:c.terminal,type:l,property:(e=i.property)!==null&&e!==void 0?e:c.feature};return Ir({next:u,cardinalities:s,visited:o,plus:a}).map(f=>So(f,c.cardinality,s))}else{if(Ss(c))return jh({next:{feature:c,type:al(c),property:(n=i.property)!==null&&n!==void 0?n:c.feature},cardinalities:s,visited:o,plus:a});if(Rn(c)&&it(c.rule.ref)){const u=c.rule.ref,f={feature:u.definition,type:u.fragment||u.dataType?void 0:(r=$s(u))!==null&&r!==void 0?r:u.name,property:i.property};return Ir({next:f,cardinalities:s,visited:o,plus:a}).map(m=>So(m,c.cardinality,s))}else return[i]}}function So(t,e,n){return n.set(t.feature,e),t}function RT(t,e,n,r,i){var s;const o=[];let a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},o.push(...Ir({next:a,cardinalities:n,visited:r,plus:i})),!!as((s=a.feature.cardinality)!==null&&s!==void 0?s:n.get(a.feature),a.feature)););return o}function xI(t){for(const e of t.tokens){const n=wT(t.stacks,e);t.stacks=n}}function wT(t,e){const n=[];for(const r of t)n.push(...LI(r,e));return n}function LI(t,e){const n=new Map,r=new Set(t.map(s=>s.feature).filter(MI)),i=[];for(;t.length>0;){const s=t.pop(),o=jh({next:s,cardinalities:n,plus:r,visited:new Set}).filter(a=>e?Uh(a.feature,e):!0);for(const a of o)i.push([...t,a]);if(!o.every(a=>as(a.feature.cardinality,a.feature)||as(n.get(a.feature))))break}return i}function MI(t){if(t.cardinality==="+")return!0;const e=On(t,rn);return!!(e&&e.cardinality==="+")}function Uh(t,e){if(Dt(t))return t.value===e.image;if(Rn(t))return FI(t.rule.ref,e);if(Cs(t)){const n=Hy(t);if(n)return Uh(n,e)}return!1}function FI(t,e){return it(t)?Yf(t.definition).some(r=>Uh(r.feature,e)):Xn(t)?cl(t).test(e.image):!1}function HI(t){const e=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.triggerCharacters)!==null&&i!==void 0?i:[]}))),n=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:n.length>0?n:void 0}}class bT{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,n,r){const i=[],s=this.buildContexts(e,n.position),o=(l,u)=>{const f=this.fillCompletionItem(l,u);f&&i.push(f)},a=l=>Dt(l.feature)?l.feature.value:l.feature,c=[];for(const l of s)if(await Promise.all(Re(l.features).distinct(a).exclude(c).map(u=>this.completionFor(l,u,o))),c.push(...l.features),!this.continueCompletion(i))break;return L.CompletionList.create(this.deduplicateItems(i),!0)}deduplicateItems(e){return Re(e).distinct(n=>`${n.kind}_${n.label}_${n.detail}`).toArray()}findFeaturesAt(e,n){const r=e.getText({start:L.Position.create(0,0),end:e.positionAt(n)}),i=this.completionParser.parse(r),s=i.tokens;if(i.tokenIndex===0){const c=dd(this.grammar),l=Yf({feature:c.definition,type:$s(c)});return s.length>0?(s.shift(),Yg(l.map(u=>[u]),s)):l}const o=[...s].splice(i.tokenIndex);return Yg([i.elementStack.map(c=>({feature:c}))],o)}*buildContexts(e,n){var r,i;const s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument,a=o.getText(),c=o.offsetAt(n),l={document:e,textDocument:o,offset:c,position:n},u=this.findDataTypeRuleStart(s,c);if(u){const[h,p]=u,w=(r=ld(s,h))===null||r===void 0?void 0:r.astNode;yield Object.assign(Object.assign({},l),{node:w,tokenOffset:h,tokenEndOffset:p,features:this.findFeaturesAt(o,h)})}const{nextTokenStart:f,nextTokenEnd:m,previousTokenStart:g,previousTokenEnd:d}=this.backtrackToAnyToken(a,c);let v=f;c<=f&&g!==void 0&&(v=g);const R=(i=ld(s,v))===null||i===void 0?void 0:i.astNode;let _=!0;if(g!==void 0&&d!==void 0&&d===c&&(yield Object.assign(Object.assign({},l),{node:R,tokenOffset:g,tokenEndOffset:d,features:this.findFeaturesAt(o,g)}),_=this.performNextTokenCompletion(e,a.substring(g,d),g,d),_&&(yield Object.assign(Object.assign({},l),{node:R,tokenOffset:d,tokenEndOffset:d,features:this.findFeaturesAt(o,d)}))),R)_&&(yield Object.assign(Object.assign({},l),{node:R,tokenOffset:f,tokenEndOffset:m,features:this.findFeaturesAt(o,f)}));else{const h=dd(this.grammar);if(!h)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:f,tokenEndOffset:m,features:Yf(h.definition)})}}performNextTokenCompletion(e,n,r,i){return new RegExp("\\P{L}$","u").test(n)}findDataTypeRuleStart(e,n){var r,i;let s=cr(e,n,this.grammarConfig.nameRegexp),o=!!(!((r=On(s==null?void 0:s.grammarSource,it))===null||r===void 0)&&r.dataType);if(o){for(;o;)s=s==null?void 0:s.container,o=!!(!((i=On(s==null?void 0:s.grammarSource,it))===null||i===void 0)&&i.dataType);if(s)return[s.offset,s.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,n){const r=this.lexer.tokenize(e).tokens;if(r.length===0)return{nextTokenStart:n,nextTokenEnd:n};let i;for(const s of r){if(s.startOffset>=n)return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(s.endOffset>=n)return{nextTokenStart:s.startOffset,nextTokenEnd:s.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=s}return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,n,r){if(Dt(n.feature))return this.completionForKeyword(e,n.feature,r);if(Cs(n.feature)&&e.node)return this.completionForCrossReference(e,n,r)}completionForCrossReference(e,n,r){const i=On(n.feature,rn);let s=e.node;if(i&&s){n.type&&(s={$type:n.type,$container:s,$containerProperty:n.property},Dy(this.astReflection,s));const o={reference:{$refText:""},container:s,property:i.feature};try{for(const a of this.getReferenceCandidates(o,e))r(e,this.createReferenceCompletionItem(a))}catch(a){console.error(a)}}}getReferenceCandidates(e,n){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){const n=this.nodeKindProvider.getCompletionItemKind(e),r=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:n,documentation:r,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;const n=this.documentationProvider.getDocumentation(e.node);if(n)return{kind:"markdown",value:n}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return L.CompletionItemKind.Keyword}filterKeyword(e,n){return new RegExp("\\p{L}","u").test(n.value)}fillCompletionItem(e,n){var r,i;let s;if(typeof n.label=="string")s=n.label;else if("node"in n){const l=this.nameProvider.getName(n.node);if(!l)return;s=l}else if("nodeDescription"in n)s=n.nodeDescription.name;else return;let o;typeof((r=n.textEdit)===null||r===void 0?void 0:r.newText)=="string"?o=n.textEdit.newText:typeof n.insertText=="string"?o=n.insertText:o=s;const a=(i=n.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,s,o);return a?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:a,label:s}:void 0}buildCompletionTextEdit(e,n,r){const s=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(s,n)){const o=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:r,range:{start:o,end:a}}}else return}}class jI{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,n,r){const i=e.parseResult.value;if(i.$cstNode){const s=i.$cstNode,o=cr(s,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,n)}}collectLocationLinks(e,n){var r;const i=this.findLink(e);if(i)return[L.LocationLink.create(i.targetDocument.textDocument.uri,((r=i.target.astNode.$cstNode)!==null&&r!==void 0?r:i.target).range,i.target.range,i.source.range)]}findLink(e){const n=this.references.findDeclarationNode(e);if(n!=null&&n.astNode){const r=sn(n.astNode);if(n&&r)return{source:e,target:n,targetDocument:r}}}}class UI{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return;const s=cr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!s)return;const o=this.references.findDeclaration(s);if(o){const a=he.equals(sn(o).uri,e.uri),c={documentUri:e.uri,includeDeclaration:a};return this.references.findReferences(o,c).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return L.DocumentHighlight.create(e.segment.range)}}class qI{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e,n,r){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,n){const r=n.$cstNode,i=this.nameProvider.getNameNode(n);if(i&&r){const s=this.nameProvider.getName(n);return[{kind:this.nodeKindProvider.getSymbolKind(n),name:s||i.text,range:r.range,selectionRange:i.range,children:this.getChildSymbols(e,n)}]}else return this.getChildSymbols(e,n)||[]}getChildSymbols(e,n){const r=[];for(const i of il(n)){const s=this.getSymbol(e,i);r.push(...s)}if(r.length>0)return r}}class BI{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let n=!1;e.lsp.LanguageServer.onInitialize(r=>{var i,s;n=!!(!((s=(i=r.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||s===void 0)&&s.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(r=>{n&&this.registerFileWatcher(e)})}registerFileWatcher(e){const n=[],r=Re(e.ServiceRegistry.all).flatMap(s=>s.LanguageMetaData.fileExtensions).map(s=>s.startsWith(".")?s.substring(1):s).distinct().toArray();r.length>0&&n.push({globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`});const i=Re(e.ServiceRegistry.all).flatMap(s=>{var o;return(o=s.LanguageMetaData.fileNames)!==null&&o!==void 0?o:[]}).distinct().toArray();if(i.length>0&&n.push({globPattern:i.length===1?`**/${i[0]}`:`**/{${i.join(",")}}`}),n.length>0){const s=e.lsp.Connection,o={watchers:n};s==null||s.client.register(L.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,n){e=e.filter(r=>this.serviceRegistry.hasServices(r)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(r=>this.documentBuilder.update(e,n,r))}).catch(r=>{console.error("Workspace initialization failed. Could not perform document update.",r)})}didChangeContent(e){this.fireDocumentUpdate([at.parse(e.document.uri)],[])}didChangeWatchedFiles(e){const n=Re(e.changes).filter(i=>i.type!==L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray(),r=Re(e.changes).filter(i=>i.type===L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>at.parse(i.uri)).toArray();this.fireDocumentUpdate(n,r)}}class KI{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e,n,r){const i=[],s=o=>i.push(o);return this.collectFolding(e,s),i}collectFolding(e,n){var r;const i=(r=e.parseResult)===null||r===void 0?void 0:r.value;if(i){if(this.shouldProcessContent(i)){const s=tn(i).iterator();let o;do if(o=s.next(),!o.done){const a=o.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,n),this.shouldProcessContent(a)||s.prune()}while(!o.done)}this.collectCommentFolding(e,i,n)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,n,r){const i=n.$cstNode;if(i){const s=this.toFoldingRange(e,i);s&&r(s)}}collectCommentFolding(e,n,r){const i=n.$cstNode;if(i){for(const s of OT(i))if(this.commentNames.includes(s.tokenType.name)){const o=this.toFoldingRange(e,s,L.FoldingRangeKind.Comment);o&&r(o)}}}toFoldingRange(e,n,r){const i=n.range,s=i.start;let o=i.end;if(!(o.line-s.line<2))return this.includeLastFoldingLine(n,r)||(o=e.textDocument.positionAt(e.textDocument.offsetAt({line:o.line,character:0})-1)),L.FoldingRange.create(s.line,o.line,s.character,o.character,r)}includeLastFoldingLine(e,n){if(n===L.FoldingRangeKind.Comment)return!1;const r=e.text,i=r.charAt(r.length-1);return!(i==="}"||i===")"||i==="]")}}class WI{match(e,n){if(e.length===0)return!0;let r=!1,i,s=0;const o=n.length;for(let a=0;a<o;a++){const c=n.charCodeAt(a),l=e.charCodeAt(s);if((c===l||this.toUpperCharCode(c)===this.toUpperCharCode(l))&&(r||(r=i===void 0||this.isWordTransition(i,c)),r&&s++,s===e.length))return!0;i=c}return!1}isWordTransition(e,n){return Xg<=e&&e<=Jg&&GI<=n&&n<=zI||e===Qg&&n!==Qg}toUpperCharCode(e){return Xg<=e&&e<=Jg?e-32:e}}const Xg=97,Jg=122,GI=65,zI=90,Qg=95;class VI{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,n){var r,i;const s=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(s){const o=e.textDocument.offsetAt(n.position),a=cr(s,o,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>o){const c=this.references.findDeclaration(a);if(c)return this.getAstNodeHoverContent(c);if(Dt(a.grammarSource))return this.getKeywordHoverContent(a.grammarSource)}}}getKeywordHoverContent(e){var n;let r=D_(e)?e.$comment:void 0;if(r||(r=(n=by(e.$cstNode,["ML_COMMENT"]))===null||n===void 0?void 0:n.text),r&&L_(r)){const i=x_(r).toMarkdown();if(i)return{contents:{kind:"markdown",value:i}}}}}class YI extends VI{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){const n=this.documentationProvider.getDocumentation(e);if(n)return{contents:{kind:"markdown",value:n}}}}const XI={[L.SemanticTokenTypes.class]:0,[L.SemanticTokenTypes.comment]:1,[L.SemanticTokenTypes.enum]:2,[L.SemanticTokenTypes.enumMember]:3,[L.SemanticTokenTypes.event]:4,[L.SemanticTokenTypes.function]:5,[L.SemanticTokenTypes.interface]:6,[L.SemanticTokenTypes.keyword]:7,[L.SemanticTokenTypes.macro]:8,[L.SemanticTokenTypes.method]:9,[L.SemanticTokenTypes.modifier]:10,[L.SemanticTokenTypes.namespace]:11,[L.SemanticTokenTypes.number]:12,[L.SemanticTokenTypes.operator]:13,[L.SemanticTokenTypes.parameter]:14,[L.SemanticTokenTypes.property]:15,[L.SemanticTokenTypes.regexp]:16,[L.SemanticTokenTypes.string]:17,[L.SemanticTokenTypes.struct]:18,[L.SemanticTokenTypes.type]:19,[L.SemanticTokenTypes.typeParameter]:20,[L.SemanticTokenTypes.variable]:21,[L.SemanticTokenTypes.decorator]:22},JI={[L.SemanticTokenModifiers.abstract]:1,[L.SemanticTokenModifiers.async]:2,[L.SemanticTokenModifiers.declaration]:4,[L.SemanticTokenModifiers.defaultLibrary]:8,[L.SemanticTokenModifiers.definition]:16,[L.SemanticTokenModifiers.deprecated]:32,[L.SemanticTokenModifiers.documentation]:64,[L.SemanticTokenModifiers.modification]:128,[L.SemanticTokenModifiers.readonly]:256,[L.SemanticTokenModifiers.static]:512};function QI(t){const e=[],n=[];let r=!0,i=!0,s=!0;for(const o of t)o&&(o.legend.tokenTypes.forEach((a,c)=>{const l=e[c];if(l&&l!==a)throw new Error(`Cannot merge '${l}' and '${a}' token types. They use the same index ${c}.`);e[c]=a}),o.legend.tokenModifiers.forEach((a,c)=>{const l=n[c];if(l&&l!==a)throw new Error(`Cannot merge '${l}' and '${a}' token modifier. They use the same index ${c}.`);n[c]=a}),o.full?typeof o.full=="object"&&!o.full.delta&&(i=!1):r=!1,o.range||(s=!1));return{legend:{tokenTypes:e,tokenModifiers:n},full:r&&{delta:i},range:s}}class ZI extends L.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,n,r,i,s){this._tokens.push({line:e,char:n,length:r,tokenType:i,tokenModifiers:s})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(const e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,n){return e.line===n.line?e.char-n.char:e.line-n.line}}class eD{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(n=>{this.tokensBuilders.delete(n.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(n=>{var r;this.initialize((r=n.capabilities.textDocument)===null||r===void 0?void 0:r.semanticTokens)})}initialize(e){this.clientCapabilities=e}get tokenTypes(){return XI}get tokenModifiers(){return JI}get semanticTokensOptions(){return{legend:{tokenTypes:Object.keys(this.tokenTypes),tokenModifiers:Object.keys(this.tokenModifiers)},full:{delta:!0},range:!0}}async semanticHighlight(e,n,r=ce.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightRange(e,n,r=ce.None){return this.currentRange=n.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,n,r=ce.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(n.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.buildEdits()}createAcceptor(){return n=>{"line"in n?this.highlightToken({range:{start:{line:n.line,character:n.char},end:{line:n.line,character:n.char+n.length}},type:n.type,modifier:n.modifier}):"range"in n?this.highlightToken(n):"keyword"in n?this.highlightKeyword(n):"property"in n?this.highlightProperty(n):this.highlightNode({node:n.cst,type:n.type,modifier:n.modifier})}}getDocumentTokensBuilder(e){const n=this.tokensBuilders.get(e.uri.toString());if(n)return n;const r=new ZI;return this.tokensBuilders.set(e.uri.toString(),r),r}async computeHighlighting(e,n,r){const i=e.parseResult.value,s=sr(i,{range:this.currentRange}).iterator();let o;do if(o=s.next(),!o.done){await ot(r);const a=o.value;this.highlightElement(a,n)==="prune"&&s.prune()}while(!o.done)}highlightToken(e){var n;const{range:r,type:i}=e;let s=e.modifier;if(this.currentRange&&!Ry(r,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;const o=this.tokenTypes[i];let a=0;if(s!==void 0){typeof s=="string"&&(s=[s]);for(const u of s){const f=this.tokenModifiers[u];a|=f}}const c=r.start.line,l=r.end.line;if(c===l){const u=r.start.character,f=r.end.character-u;this.currentTokensBuilder.push(c,u,f,o,a)}else if(!((n=this.clientCapabilities)===null||n===void 0)&&n.multilineTokenSupport){const u=r.start.character,f=this.currentDocument.textDocument.offsetAt(r.start),m=this.currentDocument.textDocument.offsetAt(r.end);this.currentTokensBuilder.push(c,u,m-f,o,a)}else{const u=r.start;let f=this.currentDocument.textDocument.offsetAt({line:c+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,o,a);for(let m=c+1;m<l;m++){const g=f;f=this.currentDocument.textDocument.offsetAt({line:m+1,character:0}),this.currentTokensBuilder.push(m,0,f-g-1,o,a)}this.currentTokensBuilder.push(l,0,r.end.character,o,a)}}highlightProperty(e){const n=[];if(typeof e.index=="number"){const s=Zf(e.node.$cstNode,e.property,e.index);s&&n.push(s)}else n.push(...jy(e.node.$cstNode,e.property));const{type:r,modifier:i}=e;for(const s of n)this.highlightNode({node:s,type:r,modifier:i})}highlightKeyword(e){const{node:n,keyword:r,type:i,index:s,modifier:o}=e,a=[];if(typeof s=="number"){const c=Uy(n.$cstNode,r,s);c&&a.push(c)}else a.push(...hR(n.$cstNode,r));for(const c of a)this.highlightNode({node:c,type:i,modifier:o})}highlightNode(e){const{node:n,type:r,modifier:i}=e,s=n.range;this.highlightToken({range:s,type:r,modifier:i})}}var Zg;(function(t){function e(r,i,s){const o=new Map;Object.entries(i).forEach(([l,u])=>o.set(u,l));let a=0,c=0;return n(r.data,5).map(l=>{a+=l[0],l[0]!==0&&(c=0),c+=l[1];const u=l[2];return{offset:s.textDocument.offsetAt({line:a,character:c}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:s.textDocument.getText({start:{line:a,character:c},end:{line:a,character:c+u}})}})}t.decode=e;function n(r,i){const s=[];for(let o=0;o<r.length;o+=i){const a=r.slice(o,o+i);s.push(a)}return s}})(Zg||(Zg={}));function tD(t){const e=[],n=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&n.push(...i.retriggerCharacters)});const r={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:n.length>0?Array.from(new Set(n)).sort():void 0};return r.triggerCharacters?r:void 0}class nD{constructor(e){this.onInitializeEmitter=new oe.Emitter,this.onInitializedEmitter=new oe.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Mf(this.services),this.services.ServiceRegistry.all.forEach(e=>Mf(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var n,r,i,s;const o=this.services.lsp.DocumentUpdateHandler,a=(n=this.services.lsp.FileOperationHandler)===null||n===void 0?void 0:n.fileOperationOptions,c=this.services.ServiceRegistry.all,l=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.Formatter}),u=c.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.Formatter)===null||te===void 0?void 0:te.formatOnTypeOptions}).find(x=>!!x),f=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CodeActionProvider}),m=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.SemanticTokenProvider}),g=QI(c.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.SemanticTokenProvider)===null||te===void 0?void 0:te.semanticTokensOptions})),d=(i=(r=this.services.lsp)===null||r===void 0?void 0:r.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,v=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentLinkProvider}),R=tD(c.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.SignatureHelp)===null||te===void 0?void 0:te.signatureHelpOptions})),_=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.TypeProvider}),h=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.ImplementationProvider}),p=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CompletionProvider}),w=HI(c.map(x=>{var S,te;return(te=(S=x.lsp)===null||S===void 0?void 0:S.CompletionProvider)===null||te===void 0?void 0:te.completionOptions})),F=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.ReferencesProvider}),G=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentSymbolProvider}),J=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DefinitionProvider}),be=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DocumentHighlightProvider}),Ee=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.FoldingRangeProvider}),Pe=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.HoverProvider}),A=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.RenameProvider}),E=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CallHierarchyProvider}),b=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.TypeHierarchyProvider}),$=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.CodeLensProvider}),N=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.DeclarationProvider}),P=this.hasService(x=>{var S;return(S=x.lsp)===null||S===void 0?void 0:S.InlayHintProvider}),O=(s=this.services.lsp)===null||s===void 0?void 0:s.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:a},executeCommandProvider:d&&{commands:d},textDocumentSync:{change:oe.TextDocumentSyncKind.Incremental,openClose:!0,save:!!o.didSaveDocument,willSave:!!o.willSaveDocument,willSaveWaitUntil:!!o.willSaveDocumentWaitUntil},completionProvider:p?w:void 0,referencesProvider:F,documentSymbolProvider:G,definitionProvider:J,typeDefinitionProvider:_,documentHighlightProvider:be,codeActionProvider:f,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:Ee,hoverProvider:Pe,renameProvider:A?{prepareProvider:!0}:void 0,semanticTokensProvider:m?g:void 0,signatureHelpProvider:R,implementationProvider:h,callHierarchyProvider:E?{}:void 0,typeHierarchyProvider:b?{}:void 0,documentLinkProvider:v?{resolveProvider:!1}:void 0,codeLensProvider:$?{resolveProvider:!1}:void 0,declarationProvider:N,inlayHintProvider:P?{resolveProvider:!1}:void 0,workspaceSymbolProvider:O?{resolveProvider:!!O.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){const n=this.services.lsp.Connection,r=n?Object.assign(Object.assign({},e),{register:i=>n.client.register(oe.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>n.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(r).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}}function rD(t){const e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");iD(e,t),sD(e,t),oD(e,t),aD(e,t),cD(e,t),uD(e,t),dD(e,t),fD(e,t),hD(e,t),mD(e,t),yD(e,t),vD(e,t),lD(e,t),_D(e,t),gD(e,t),TD(e,t),RD(e,t),bD(e,t),SD(e,t),ED(e,t),PD(e,t),CD(e,t),kD(e,t),wD(e,t),pD(e,t),$D(e,t),e.onInitialize(r=>t.lsp.LanguageServer.initialize(r)),e.onInitialized(r=>{t.lsp.LanguageServer.initialized(r)}),t.workspace.TextDocuments.listen(e),e.listen()}function iD(t,e){const n=e.lsp.DocumentUpdateHandler,r=e.workspace.TextDocuments;n.didOpenDocument&&r.onDidOpen(i=>n.didOpenDocument(i)),n.didChangeContent&&r.onDidChangeContent(i=>n.didChangeContent(i)),n.didCloseDocument&&r.onDidClose(i=>n.didCloseDocument(i)),n.didSaveDocument&&r.onDidSave(i=>n.didSaveDocument(i)),n.willSaveDocument&&r.onWillSave(i=>n.willSaveDocument(i)),n.willSaveDocumentWaitUntil&&r.onWillSaveWaitUntil(i=>n.willSaveDocumentWaitUntil(i)),n.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(i=>n.didChangeWatchedFiles(i))}function sD(t,e){const n=e.lsp.FileOperationHandler;n&&(n.didCreateFiles&&t.workspace.onDidCreateFiles(r=>n.didCreateFiles(r)),n.didRenameFiles&&t.workspace.onDidRenameFiles(r=>n.didRenameFiles(r)),n.didDeleteFiles&&t.workspace.onDidDeleteFiles(r=>n.didDeleteFiles(r)),n.willCreateFiles&&t.workspace.onWillCreateFiles(r=>n.willCreateFiles(r)),n.willRenameFiles&&t.workspace.onWillRenameFiles(r=>n.willRenameFiles(r)),n.willDeleteFiles&&t.workspace.onWillDeleteFiles(r=>n.willDeleteFiles(r)))}function oD(t,e){const n=e.workspace.DocumentBuilder;n.onUpdate(async(r,i)=>{for(const s of i)t.sendDiagnostics({uri:s.toString(),diagnostics:[]})}),n.onDocumentPhase(U.Validated,async r=>{r.diagnostics&&t.sendDiagnostics({uri:r.uri.toString(),diagnostics:r.diagnostics})})}function aD(t,e){t.onCompletion(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(r,i,s)},e,U.IndexedReferences))}function cD(t,e){t.onReferences(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(r,i,s)},e,U.IndexedReferences))}function lD(t,e){t.onCodeAction(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(r,i,s)},e,U.Validated))}function uD(t,e){t.onDocumentSymbol(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(r,i,s)},e,U.Parsed))}function dD(t,e){t.onDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(r,i,s)},e,U.IndexedReferences))}function fD(t,e){t.onTypeDefinition(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(r,i,s)},e,U.IndexedReferences))}function hD(t,e){t.onImplementation(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(r,i,s)},e,U.IndexedReferences))}function pD(t,e){t.onDeclaration(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(r,i,s)},e,U.IndexedReferences))}function mD(t,e){t.onDocumentHighlight(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(r,i,s)},e,U.IndexedReferences))}function gD(t,e){t.onHover(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(r,i,s)},e,U.IndexedReferences))}function yD(t,e){t.onFoldingRanges(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(r,i,s)},e,U.Parsed))}function vD(t,e){t.onDocumentFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocument(r,i,s)},e,U.Parsed)),t.onDocumentRangeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(r,i,s)},e,U.Parsed)),t.onDocumentOnTypeFormatting(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(r,i,s)},e,U.Parsed))}function _D(t,e){t.onRenameRequest(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.rename(r,i,s)},e,U.IndexedReferences)),t.onPrepareRename(rt((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.prepareRename(r,i,s)},e,U.IndexedReferences))}function TD(t,e){t.languages.inlayHint.on(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(r,i,s)},e,U.IndexedReferences))}function RD(t,e){const n={data:[]};t.languages.semanticTokens.on(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlight(i,s,o):n},e,U.IndexedReferences)),t.languages.semanticTokens.onDelta(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightDelta(i,s,o):n},e,U.IndexedReferences)),t.languages.semanticTokens.onRange(Tn((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightRange(i,s,o):n},e,U.IndexedReferences))}function wD(t,e){t.onDidChangeConfiguration(n=>{n.settings&&e.workspace.ConfigurationProvider.updateConfiguration(n)})}function bD(t,e){const n=e.lsp.ExecuteCommandHandler;n&&t.onExecuteCommand(async(r,i)=>{var s;try{return await n.executeCommand(r.command,(s=r.arguments)!==null&&s!==void 0?s:[],i)}catch(o){return Cn(o)}})}function kD(t,e){t.onDocumentLinks(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(r,i,s)},e,U.Parsed))}function SD(t,e){t.onSignatureHelp(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(r,i,s)},e,U.IndexedReferences))}function CD(t,e){t.onCodeLens(Tn((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(r,i,s)},e,U.IndexedReferences))}function $D(t,e){var n;const r=e.lsp.WorkspaceSymbolProvider;if(r){const i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(o,a)=>{try{return await i.waitUntil(U.IndexedContent,a),await r.getSymbols(o,a)}catch(c){return Cn(c)}});const s=(n=r.resolveSymbol)===null||n===void 0?void 0:n.bind(r);s&&t.onWorkspaceSymbolResolve(async(o,a)=>{try{return await i.waitUntil(U.IndexedContent,a),await s(o,a)}catch(c){return Cn(c)}})}}function ED(t,e){t.languages.callHierarchy.onPrepare(Tn(async(n,r,i,s)=>{var o;if(!((o=n.lsp)===null||o===void 0)&&o.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.prepareCallHierarchy(r,i,s);return a??null}return null},e,U.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(rl(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.incomingCalls(r,i);return o??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(rl(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.outgoingCalls(r,i);return o??null}return null},e))}function PD(t,e){e.ServiceRegistry.all.some(n=>{var r;return(r=n.lsp)===null||r===void 0?void 0:r.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Tn(async(n,r,i,s)=>{var o,a;const c=await((a=(o=n.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(r,i,s));return c??null},e,U.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(rl(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.supertypes(r,i));return a??null},e)),t.languages.typeHierarchy.onSubtypes(rl(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.subtypes(r,i));return a??null},e)))}function rl(t,e){const n=e.ServiceRegistry;return async(r,i)=>{const s=at.parse(r.item.uri),o=await qh(e,i,s,U.IndexedReferences);if(o)return o;if(!n.hasServices(s)){const c=`Could not find service instance for uri: '${s}'`;return console.debug(c),Cn(new Error(c))}const a=n.getServices(s);try{return await t(a,r,i)}catch(c){return Cn(c)}}}function Tn(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),c=await qh(e,o,a,n);if(c)return c;if(!i.hasServices(a)){const u=`Could not find service instance for uri: '${a}'`;return console.debug(u),Cn(new Error(u))}const l=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(l,u,s,o)}catch(u){return Cn(u)}}}function rt(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=at.parse(s.textDocument.uri),c=await qh(e,o,a,n);if(c)return c;if(!i.hasServices(a))return console.debug(`Could not find service instance for uri: '${a.toString()}'`),null;const l=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(l,u,s,o)}catch(u){return Cn(u)}}}async function qh(t,e,n,r){if(r!==void 0){const i=t.workspace.DocumentBuilder;try{await i.waitUntil(r,n,e)}catch(s){return Cn(s)}}}function Cn(t){if(Hs(t))return new oe.ResponseError(oe.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof oe.ResponseError)return t;throw t}class AD{getSymbolKind(e){return L.SymbolKind.Field}getCompletionItemKind(e){return L.CompletionItemKind.Reference}}class ND{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return[];const s=cr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);return s?this.getReferences(s,n,e):[]}getReferences(e,n,r){const i=[],s=this.references.findDeclaration(e);if(s){const o={includeDeclaration:n.context.includeDeclaration};this.references.findReferences(s,o).forEach(a=>{i.push(L.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}}class ID{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,n,r){const i={},s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument.offsetAt(n.position),a=cr(s,o,this.grammarConfig.nameRegexp);if(!a)return;const c=this.references.findDeclaration(a);if(!c)return;const l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(c,l).forEach(f=>{const m=Bt.replace(f.segment.range,n.newName),g=f.sourceUri.toString();i[g]?i[g].push(m):i[g]=[m]}),{changes:i}}prepareRename(e,n,r){return this.renameNodeRange(e,n.position)}renameNodeRange(e,n){const r=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(n);if(r&&i){const s=cr(r,i,this.grammarConfig.nameRegexp);if(!s)return;if(this.references.findDeclaration(s)||this.isNameNode(s))return s.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&A_(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}}class DD{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,n=ce.None){const r=[],i=e.query.toLowerCase();for(const s of this.indexManager.allElements())if(await ot(n),this.fuzzyMatcher.match(i,s.name)){const o=this.getWorkspaceSymbol(s);o&&r.push(o)}return r}getWorkspaceSymbol(e){const n=e.nameSegment;if(n)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:n.range,uri:e.documentUri.toString()}}}}class kT{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new L.Emitter,this._onDidOpen=new L.Emitter,this._onDidClose=new L.Emitter,this._onDidSave=new L.Emitter,this._onWillSave=new L.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(he.normalize(e))}set(e){const n=he.normalize(e.uri);let r=!0;this._syncedDocuments.has(n)&&(r=!1),this._syncedDocuments.set(n,e);const i=Object.freeze({document:e});return this._onDidOpen.fire(i),this._onDidChangeContent.fire(i),r}delete(e){const n=he.normalize(typeof e=="object"&&"uri"in e?e.uri:e),r=this._syncedDocuments.get(n);r!==void 0&&(this._syncedDocuments.delete(n),this._onDidClose.fire(Object.freeze({document:r})))}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=L.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=he.normalize(i.uri),o=this._configuration.create(s,i.languageId,i.version,i.text);this._syncedDocuments.set(s,o);const a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);const a=he.normalize(i.uri);let c=this._syncedDocuments.get(a);c!==void 0&&(c=this._configuration.update(c,s,o),this._syncedDocuments.set(a,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(e.onDidCloseTextDocument(r=>{const i=he.normalize(r.textDocument.uri),s=this._syncedDocuments.get(i);s!==void 0&&(this._syncedDocuments.delete(i),this._onDidClose.fire(Object.freeze({document:s})))})),n.push(e.onWillSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{const s=this._syncedDocuments.get(he.normalize(r.textDocument.uri));return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),L.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}class OD{constructor(e){this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new L.Emitter,this._onDidSave=new L.Emitter,this._onDidChange=new L.Emitter,this._onDidClose=new L.Emitter,"listen"in e?this._cellTextDocuments=e:this._cellTextDocuments=new kT(e)}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(he.normalize(e))}getNotebookCell(e){const n=this.notebookCellMap.get(he.normalize(e));return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"||"scheme"in e?e:e.document,r=this.notebookCellMap.get(he.normalize(n));return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new Dr,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri);this.notebookDocuments.set(s,i.notebookDocument);for(const o of i.cellTextDocuments)n.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o===void 0)return;o.version=i.notebookDocument.version;const a=o.metadata;let c=!1;const l=i.change;l.metadata!==void 0&&(c=!0,o.metadata=l.metadata);const u=[],f=[],m=[],g=[];if(l.cells!==void 0){const h=l.cells;if(h.structure!==void 0){const p=h.structure.array;if(o.cells.splice(p.start,p.deleteCount,...p.cells!==void 0?p.cells:[]),h.structure.didOpen!==void 0)for(const w of h.structure.didOpen)n.openTextDocument({textDocument:w}),u.push(w.uri);if(h.structure.didClose)for(const w of h.structure.didClose)n.closeTextDocument({textDocument:w}),f.push(w.uri)}if(h.data!==void 0){const p=new Map(h.data.map(w=>[w.document,w]));for(let w=0;w<=o.cells.length;w++){const F=p.get(o.cells[w].document);if(F!==void 0){const G=o.cells.splice(w,1,F);if(m.push({old:G[0],new:F}),p.delete(F.document),p.size===0)break}}}if(h.textContent!==void 0)for(const p of h.textContent)n.changeTextDocument({textDocument:p.document,contentChanges:p.changes}),g.push(p.document.uri)}this.updateCellMap(o);const d={notebookDocument:o};c&&(d.metadata={old:a,new:o.metadata});const v=[];for(const h of u)v.push(this.getNotebookCell(h));const R=[];for(const h of f)R.push(this.getNotebookCell(h));const _=[];for(const h of g)_.push(this.getNotebookCell(h));(v.length>0||R.length>0||m.length>0||_.length>0)&&(d.cells={added:v,removed:R,changed:{data:m,textContent:_}}),(d.metadata!==void 0||d.cells!==void 0)&&this._onDidChange.fire(d)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.getNotebookDocument(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o!==void 0){this._onDidClose.fire(o);for(const a of i.cellTextDocuments)n.closeTextDocument({textDocument:a});this.notebookDocuments.delete(s);for(const a of o.cells)this.notebookCellMap.delete(a.document)}})),L.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}class Dr{onDidOpenTextDocument(e){return this.openHandler=e,L.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,L.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,L.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return Dr.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return Dr.NULL_DISPOSE}onDidSaveTextDocument(){return Dr.NULL_DISPOSE}}Dr.NULL_DISPOSE=Object.freeze({dispose:()=>{}});function xD(t){return zc.merge(q_(t),LD(t))}function LD(t){return{lsp:{CompletionProvider:e=>new bT(e),DocumentSymbolProvider:e=>new qI(e),HoverProvider:e=>new YI(e),FoldingRangeProvider:e=>new KI(e),ReferencesProvider:e=>new ND(e),DefinitionProvider:e=>new jI(e),DocumentHighlightProvider:e=>new UI(e),RenameProvider:e=>new ID(e)},shared:()=>t.shared}}function MD(t){return zc.merge(B_(t),FD(t))}function FD(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new nD(e),DocumentUpdateHandler:e=>new BI(e),WorkspaceSymbolProvider:e=>new DD(e),NodeKindProvider:()=>new AD,FuzzyMatcher:()=>new WI},workspace:{TextDocuments:()=>new kT(Kc),NotebookDocuments:e=>new OD(e.workspace.TextDocuments)}}}var Bh=L;const ey="AlgorithmType_Options",Co="Bgp_cmds",ty="Bgp_neighbour_options",Su="Bgp_neighbour_update_source_option",Cu="Bgp_update_source_interface_types",gc="COMMON";function HD(t){return ri.isInstance(t,gc)}const $u="Configure_cmd",$o="Configure_cmds",ny="Crypto_cmd_option",Eu="Enable_cmds",Pu="ExecTimeout_cmd",ry="Generate_cmd_option",Sr="Interface_fastethernet_cmds",Cr="Interface_gigabitethernet_cmds",Xf="Interface_types";function jD(t){return ri.isInstance(t,Xf)}const Ti="Interface_vlan_cmds",iy="IP_cmd_option",sy="Ip_cmd_options",oy="Key_cmd_option",Eo="Line_console_cmds",ay="Line_types",Ri="Line_vty_cmds",Au="Logging_cmd",Nu="Login_cmd",cy="No_ip_cmd_options",ly="No_options",Po="Ospf_cmds",uy="Ospf_interface_types",Ao="Rip_cmds",dy="Rip_interface_types",fy="Router_cmd_option",hy="Rsa_cmd_option",Iu="Transport_cmd",py="TransportInput_cmd",my="UsageKeys_Option",gy="Username_cmd_option",No="AlgorithmTypeOption",Io="Banner_cmd",Du="Banner_cmd_option",Ou="BANNER_MESSAGE",Do="Bgp_cmd",Oo="Bgp_neigbour_ebgp_multihop_option",xo="Bgp_neighbor_cmd",Lo="Bgp_neighbour_Remote_as_option",Mo="Bgp_network_cmd",Fo="Bgp_router_id_cmd",Ho="Bgp_update_source_interface_number",jo="Bgp_update_source_interface_type_fastethernet",Uo="Bgp_update_source_interface_type_gigabitethernet",qo="CarrierDelay_cmd",xu="COMMENT",Bo="COMMENTLINE",Ko="Configure_cmd_options",Wo="Crypto_cmd",Go="Description_cmd",zo="Domainname_cmd",Lu="DOMAINNAME_INPUT",Vo="Duplex_cmd",Mu="Duplex_option",ts="Exit";function UD(t){return ri.isInstance(t,ts)}const Yo="Generate_cmd",Xo="Hostname_cmd",Jo="Hostname_Input",Qo="Interface_cmd",Zo="Interface_number",ea="Interface_type_fastethernet",ta="Interface_type_gigabitethernet",na="Interface_type_vlan",Fu="IP",ra="IP_cmd",ns="IP_cmd_interface";function yy(t){return ri.isInstance(t,ns)}const rs="Ip_cmd_option_address";function vy(t){return ri.isInstance(t,rs)}const ia="Ip_cmd_option_ospf",sa="Ip_Helper_cmd",oa="Key_cmd",aa="Line_cmd",is="Line_ExecTimeoutValue";function qD(t){return ri.isInstance(t,is)}const ca="Line_LoggingOption",la="Line_LoginOption",ua="Line_type_console",da="Line_type_vty",fa="MD5Option",Hu="MD5Option_cmd",ha="Modulus_cmd",ju="MODULUS_INPUT",pa="No_banner_cmd",ma="No_cmd",ga="No_cmd_interface",Uu="No_cmd_interface_option",ya="No_ip_cmd",va="No_ip_cmd_option_domain_lookup",_a="Ospf_cmd",Ta="Ospf_default_information_cmd",qu="Ospf_default_information_cmd_options",Ra="Ospf_network_cmd",wa="Ospf_passive_interface_cmd",ba="Ospf_passive_interface_number",ka="Ospf_passive_interface_type_fastethernet",Sa="Ospf_passive_interface_type_gigabitethernet",Ca="Ospf_priority_cmd",Bu="OSPF_PROCESS_NUMBER",$a="Ospf_redistribute_cmd",Ku="Ospf_redistribute_cmd_options",Ea="Ospf_router_id_cmd",Pa="PasswordOption",Aa="Ping_cmd",Na="PrivilegeOption",Ia="Rip_cmd",Da="Rip_default_information_cmd",Wu="Rip_default_information_cmd_options",Oa="Rip_network_cmd",Gu="Rip_no_cmd_options",xa="Rip_no_cmds",La="Rip_passive_interface_cmd",Ma="Rip_passive_interface_number",Fa="Rip_passive_interface_type_fastethernet",Ha="Rip_passive_interface_type_gigabitethernet",zu="Rip_passive_Sub_Interface_number",ja="Rip_redistribute_cmd",Vu="Rip_redistribute_cmd_options",Ua="Rip_version_cmd",qa="Router_cmd",Ba="Rsa_cmd",Yu="Script",Ka="ScryptOption",Xu="ScryptOption_cmd",Wa="SecretOption",Ga="Sha256Option",Ju="Sha256Option_cmd",za="Show_cmd",Qu="Show_cmd_options",Va="Shutdown_cmd",Ya="Speed_cmd",Xa="Speed_cmd_fe",Ja="SSH_cmd",Zu="SSHOptions",ed="Stat",td="SUBNETMASK",Qa="Transport_cmd_option",Za="TransportInputList",nd="TransportProto",ec="UsageKeys_cmd",tc="Username_cmd",rd="USERNAME_INPUT",id="USERNAME_PASSWORD_INPUT",sd="VERSION_INPUT",od="WILDCARDMASK",nc="Bgp_update_source_Sub_Interface_number",rc="Sub_Interface_number",ic="Ospf_passive_Sub_Interface_number";class ST extends _y{getAllTypes(){return[No,ey,Ou,Io,Du,Do,Co,Oo,xo,Lo,ty,Su,Mo,Fo,nc,Ho,jo,Uo,Cu,xu,Bo,gc,qo,$u,Ko,$o,Wo,ny,Lu,Go,zo,Vo,Mu,Eu,Pu,ts,Yo,ry,Jo,Xo,Fu,ra,ns,iy,Qo,Sr,Cr,Zo,ea,ta,na,Xf,Ti,sa,rs,ia,sy,oa,oy,is,ca,la,aa,Eo,ua,da,ay,Ri,Au,Nu,fa,Hu,ju,ha,pa,ma,ga,Uu,ya,va,cy,ly,Bu,_a,Po,Ta,qu,uy,Ra,ic,wa,ba,ka,Sa,Ca,$a,Ku,Ea,Pa,Aa,Na,Ia,Ao,Da,Wu,dy,Oa,Gu,xa,zu,La,Ma,Fa,Ha,ja,Vu,Ua,qa,fy,Ba,hy,Zu,Ja,td,Yu,Ka,Xu,Wa,Ga,Ju,za,Qu,Va,Ya,Xa,ed,rc,Za,py,nd,Iu,Qa,rd,id,my,ec,tc,gy,sd,od]}computeIsSubtype(e,n){switch(e){case No:case Pa:case Na:case Wa:return this.isSubtype(gy,n);case Io:case Wo:case Xo:case Qo:case ra:case aa:case ma:case qa:case tc:return this.isSubtype($o,n);case Do:case _a:case Ia:return this.isSubtype(fy,n);case Oo:case Lo:case Su:return this.isSubtype(ty,n);case xo:case Mo:case Fo:return this.isSubtype(Co,n);case jo:case Uo:return this.isSubtype(Cu,n);case Cu:return this.isSubtype(Su,n);case nc:return this.isSubtype(Ho,n);case qo:case Xa:return this.isSubtype(Sr,n);case Bo:return this.isSubtype(gc,n);case gc:return this.isSubtype(Co,n)||this.isSubtype($o,n)||this.isSubtype(Eu,n)||this.isSubtype(Sr,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n)||this.isSubtype(Eo,n)||this.isSubtype(Ri,n)||this.isSubtype(Po,n)||this.isSubtype(Ao,n);case $u:case Aa:case za:return this.isSubtype(Eu,n);case Ko:return this.isSubtype($u,n);case Go:case ns:return this.isSubtype(Sr,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n);case zo:case Ja:return this.isSubtype(iy,n);case Vo:case Ya:return this.isSubtype(Cr,n);case Pu:case Au:case Nu:return this.isSubtype(Eo,n)||this.isSubtype(Ri,n);case ts:return this.isSubtype(Co,n)||this.isSubtype($o,n)||this.isSubtype(Sr,n)||this.isSubtype(Cr,n)||this.isSubtype(Ti,n)||this.isSubtype(Eo,n)||this.isSubtype(Ri,n)||this.isSubtype(Po,n)||this.isSubtype(Ao,n);case Yo:return this.isSubtype(oy,n);case ea:case ta:case na:return this.isSubtype(Xf,n);case rs:case ia:return this.isSubtype(sy,n);case sa:return this.isSubtype(Ti,n);case oa:return this.isSubtype(ny,n);case is:return this.isSubtype(Pu,n);case ca:return this.isSubtype(Au,n);case la:return this.isSubtype(Nu,n);case ua:case da:return this.isSubtype(ay,n);case fa:case Ka:case Ga:return this.isSubtype(ey,n);case ha:return this.isSubtype(my,n);case pa:case ya:return this.isSubtype(ly,n);case ga:case Va:return this.isSubtype(Sr,n)||this.isSubtype(Cr,n);case va:return this.isSubtype(cy,n);case Ta:case Ra:case wa:case Ca:case $a:case Ea:return this.isSubtype(Po,n);case ka:case Sa:return this.isSubtype(uy,n);case ic:return this.isSubtype(ba,n);case Da:case Oa:case xa:case La:case ja:case Ua:return this.isSubtype(Ao,n);case Fa:case Ha:return this.isSubtype(dy,n);case Ba:return this.isSubtype(ry,n);case rc:return this.isSubtype(Zo,n)||this.isSubtype(Ma,n);case Iu:return this.isSubtype(Ri,n);case Qa:return this.isSubtype(Iu,n);case Za:return this.isSubtype(py,n);case ec:return this.isSubtype(hy,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Ping_cmd:hostname":return Jo;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case No:return{name:No,properties:[{name:"option"}]};case Io:return{name:Io,properties:[{name:"comment"},{name:"message"},{name:"option"}]};case Du:return{name:Du,properties:[{name:"option"}]};case Ou:return{name:Ou,properties:[{name:"message",defaultValue:[]}]};case Do:return{name:Do,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Oo:return{name:Oo,properties:[{name:"multihop"}]};case xo:return{name:xo,properties:[{name:"comment"},{name:"neighbour"},{name:"option"}]};case Lo:return{name:Lo,properties:[{name:"remoteASnumber"}]};case Mo:return{name:Mo,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Fo:return{name:Fo,properties:[{name:"comment"},{name:"id"}]};case Ho:return{name:Ho,properties:[{name:"number"}]};case jo:return{name:jo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Uo:return{name:Uo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case qo:return{name:qo,properties:[{name:"comment"},{name:"seconds"}]};case xu:return{name:xu,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Bo:return{name:Bo,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Ko:return{name:Ko,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Wo:return{name:Wo,properties:[{name:"comment"},{name:"option"}]};case Go:return{name:Go,properties:[{name:"comment"},{name:"value"}]};case zo:return{name:zo,properties:[{name:"comment"},{name:"value"}]};case Lu:return{name:Lu,properties:[{name:"value"}]};case Vo:return{name:Vo,properties:[{name:"comment"},{name:"option"}]};case Mu:return{name:Mu,properties:[{name:"option"}]};case ts:return{name:ts,properties:[{name:"command"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Yo:return{name:Yo,properties:[{name:"option"}]};case Xo:return{name:Xo,properties:[{name:"comment"},{name:"value"}]};case Jo:return{name:Jo,properties:[{name:"name"}]};case Qo:return{name:Qo,properties:[{name:"types"}]};case Zo:return{name:Zo,properties:[{name:"number"}]};case ea:return{name:ea,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case ta:return{name:ta,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case na:return{name:na,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Fu:return{name:Fu,properties:[{name:"value"}]};case ra:return{name:ra,properties:[{name:"option"}]};case ns:return{name:ns,properties:[{name:"option"}]};case rs:return{name:rs,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case ia:return{name:ia,properties:[{name:"comment"},{name:"option"}]};case sa:return{name:sa,properties:[{name:"comment"},{name:"value"}]};case oa:return{name:oa,properties:[{name:"option"}]};case aa:return{name:aa,properties:[{name:"command"},{name:"types"}]};case is:return{name:is,properties:[{name:"comment"},{name:"minutes"},{name:"seconds"}]};case ca:return{name:ca,properties:[{name:"comment"},{name:"option"}]};case la:return{name:la,properties:[{name:"comment"},{name:"option"}]};case ua:return{name:ua,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case da:return{name:da,properties:[{name:"comment"},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case fa:return{name:fa,properties:[{name:"option"}]};case Hu:return{name:Hu,properties:[{name:"value"}]};case ha:return{name:ha,properties:[{name:"value"}]};case ju:return{name:ju,properties:[{name:"value"}]};case pa:return{name:pa,properties:[{name:"option"}]};case ma:return{name:ma,properties:[{name:"comment"},{name:"option"}]};case ga:return{name:ga,properties:[{name:"comment"},{name:"option"}]};case Uu:return{name:Uu,properties:[{name:"comment"}]};case ya:return{name:ya,properties:[{name:"option"}]};case va:return{name:va,properties:[{name:"type"}]};case _a:return{name:_a,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case Ta:return{name:Ta,properties:[{name:"comment"},{name:"option"}]};case qu:return{name:qu,properties:[{name:"option"}]};case Ra:return{name:Ra,properties:[{name:"area"},{name:"comment"},{name:"ip"},{name:"mask"}]};case wa:return{name:wa,properties:[{name:"types"}]};case ba:return{name:ba,properties:[{name:"number"}]};case ka:return{name:ka,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Sa:return{name:Sa,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Ca:return{name:Ca,properties:[{name:"comment"},{name:"value"}]};case Bu:return{name:Bu,properties:[{name:"value"}]};case $a:return{name:$a,properties:[{name:"comment"},{name:"option"}]};case Ku:return{name:Ku,properties:[{name:"option"}]};case Ea:return{name:Ea,properties:[{name:"comment"},{name:"id"}]};case Pa:return{name:Pa,properties:[{name:"value"}]};case Aa:return{name:Aa,properties:[{name:"comment"},{name:"hostname"},{name:"ip"}]};case Na:return{name:Na,properties:[{name:"value"}]};case Ia:return{name:Ia,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Da:return{name:Da,properties:[{name:"comment"},{name:"option"}]};case Wu:return{name:Wu,properties:[{name:"option"}]};case Oa:return{name:Oa,properties:[{name:"comment"},{name:"ip"}]};case Gu:return{name:Gu,properties:[{name:"options"}]};case xa:return{name:xa,properties:[{name:"comment"},{name:"options"}]};case La:return{name:La,properties:[{name:"types"}]};case Ma:return{name:Ma,properties:[{name:"number"}]};case Fa:return{name:Fa,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Ha:return{name:Ha,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case zu:return{name:zu,properties:[{name:"sub"}]};case ja:return{name:ja,properties:[{name:"comment"},{name:"option"}]};case Vu:return{name:Vu,properties:[{name:"option"}]};case Ua:return{name:Ua,properties:[{name:"RipVersion"}]};case qa:return{name:qa,properties:[{name:"option"}]};case Ba:return{name:Ba,properties:[{name:"option"}]};case Yu:return{name:Yu,properties:[{name:"script"}]};case Ka:return{name:Ka,properties:[{name:"option"}]};case Xu:return{name:Xu,properties:[{name:"value"}]};case Wa:return{name:Wa,properties:[{name:"value"}]};case Ga:return{name:Ga,properties:[{name:"option"}]};case Ju:return{name:Ju,properties:[{name:"value"}]};case za:return{name:za,properties:[{name:"options"}]};case Qu:return{name:Qu,properties:[{name:"comment"},{name:"option"}]};case Va:return{name:Va,properties:[{name:"comment"}]};case Ya:return{name:Ya,properties:[{name:"comment"},{name:"value"}]};case Xa:return{name:Xa,properties:[{name:"comment"},{name:"value"}]};case Ja:return{name:Ja,properties:[{name:"option"}]};case Zu:return{name:Zu,properties:[{name:"comment"},{name:"value"}]};case ed:return{name:ed,properties:[{name:"lines",defaultValue:[]}]};case td:return{name:td,properties:[{name:"value"}]};case Qa:return{name:Qa,properties:[{name:"option"}]};case Za:return{name:Za,properties:[{name:"comment"},{name:"options",defaultValue:[]}]};case nd:return{name:nd,properties:[{name:"option"}]};case ec:return{name:ec,properties:[{name:"option"}]};case tc:return{name:tc,properties:[{name:"comment"},{name:"name"},{name:"options",defaultValue:[]}]};case rd:return{name:rd,properties:[{name:"value"}]};case id:return{name:id,properties:[{name:"value"}]};case sd:return{name:sd,properties:[{name:"value"}]};case od:return{name:od,properties:[{name:"value"}]};case nc:return{name:nc,properties:[{name:"number"},{name:"sub"}]};case rc:return{name:rc,properties:[{name:"number"},{name:"sub"}]};case ic:return{name:ic,properties:[{name:"number"},{name:"sub"}]};default:return{name:e,properties:[]}}}}const ri=new ST;let sc;const BD=()=>sc??(sc=$A(`{
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
              "$ref": "#/rules@14"
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
            "$type": "Alternatives",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "hostname",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@11"
                  },
                  "deprecatedSyntax": false
                }
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
              }
            ]
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
                  "$ref": "#/rules@16"
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
                    "$ref": "#/rules@33"
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
            "$ref": "#/rules@28"
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
            "$ref": "#/rules@28"
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
            "$ref": "#/rules@28"
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
      "name": "Hostname_Input",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@17"
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
                "$ref": "#/rules@17"
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
              "$ref": "#/rules@27"
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
                "$ref": "#/rules@17"
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
                "$ref": "#/rules@13"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@27"
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
              "$ref": "#/rules@31"
            },
            "arguments": []
          }
        ]
      },
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
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@17"
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
      "name": "USERNAME_PASSWORD_INPUT",
      "definition": {
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
      "name": "VERSION_INPUT",
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
      "name": "BANNER_MESSAGE",
      "definition": {
        "$type": "Assignment",
        "feature": "message",
        "operator": "+=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@17"
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
      "name": "DOMAINNAME_INPUT",
      "definition": {
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
              "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
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
        "regex": "/[A-Za-z0-9\\\\-_.]*[A-Za-z][A-Za-z0-9\\\\-_.]*/"
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
      "dataType": "string",
      "definition": {
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
      },
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
              "$ref": "#/rules@12"
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
              "$ref": "#/rules@14"
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
              "$ref": "#/rules@86"
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
              "$ref": "#/rules@47"
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
              "$ref": "#/rules@62"
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
              "$ref": "#/rules@80"
            },
            "arguments": []
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
              "$ref": "#/rules@73"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@35"
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
              "$ref": "#/rules@36"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@37"
            },
            "arguments": []
          },
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
          }
        ]
      },
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
                "$ref": "#/rules@30"
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
      "name": "AlgorithmType_Options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@41"
            },
            "arguments": []
          },
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
          }
        ]
      },
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
                "$ref": "#/rules@48"
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
                "$ref": "#/rules@49"
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
      "name": "IP_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
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
              "$ref": "#/rules@59"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@60"
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
                "$ref": "#/rules@21"
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
                "$ref": "#/rules@11"
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
                "$ref": "#/rules@63"
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
          "$ref": "#/rules@64"
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
      "name": "Key_cmd_option",
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
      "name": "Generate_cmd_option",
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
      "name": "Rsa_cmd_option",
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
      "name": "UsageKeys_Option",
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
                "$ref": "#/rules@74"
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
              "$ref": "#/rules@75"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@77"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@76"
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
      "name": "No_ip_cmd_options",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@79"
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
      "name": "Router_cmd_option",
      "definition": {
        "$type": "Alternatives",
        "elements": [
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
              "$ref": "#/rules@146"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@163"
            },
            "arguments": []
          }
        ]
      },
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
      "name": "Line_types",
      "definition": {
        "$type": "Alternatives",
        "elements": [
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
              "$ref": "#/rules@85"
            },
            "arguments": []
          }
        ]
      },
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@109"
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
                "$ref": "#/rules@30"
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@110"
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
                "$ref": "#/rules@87"
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
              "$ref": "#/rules@88"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@89"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@90"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@91"
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@121"
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
                "$ref": "#/rules@91"
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@118"
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@128"
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
                "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@92"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          }
        ]
      },
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
              "$ref": "#/rules@12"
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
                "$ref": "#/rules@33"
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
      "name": "Ip_cmd_options",
      "definition": {
        "$type": "Alternatives",
        "elements": [
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
              "$ref": "#/rules@97"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@100"
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
              "$ref": "#/rules@12"
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
                "$ref": "#/rules@33"
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
                "$ref": "#/rules@30"
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
          }
        ]
      },
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
              "$ref": "#/rules@14"
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
              "$ref": "#/rules@102"
            },
            "arguments": []
          }
        ]
      },
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
              "$ref": "#/rules@14"
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
              "$ref": "#/rules@111"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@102"
            },
            "arguments": []
          }
        ]
      },
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
              "$ref": "#/rules@112"
            },
            "arguments": []
          }
        ]
      },
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
            "$ref": "#/rules@113"
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
                "$ref": "#/rules@115"
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
                "$ref": "#/rules@116"
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
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@94"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@119"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@120"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@93"
            },
            "arguments": []
          }
        ]
      },
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
          }
        ]
      },
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
          }
        ]
      },
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
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@94"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@122"
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
              "$ref": "#/rules@93"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@123"
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
                "$ref": "#/rules@125"
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
                "$ref": "#/rules@126"
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
          }
        ]
      },
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
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@94"
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
              "$ref": "#/rules@129"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@93"
            },
            "arguments": []
          }
        ]
      },
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@132"
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
              "$ref": "#/rules@12"
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
                "$ref": "#/rules@33"
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
              "$ref": "#/rules@14"
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
              "$ref": "#/rules@134"
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
              "$ref": "#/rules@145"
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
              "$ref": "#/rules@143"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@131"
            },
            "arguments": []
          }
        ]
      },
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
          }
        ]
      },
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
                "$ref": "#/rules@136"
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
              "$ref": "#/rules@137"
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
                "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@140"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@142"
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
                "$ref": "#/rules@144"
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
          }
        ]
      },
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
              "$ref": "#/rules@16"
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
                "$ref": "#/rules@148"
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
              "$ref": "#/rules@12"
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
                "$ref": "#/rules@33"
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
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@149"
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
              "$ref": "#/rules@159"
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
                "$ref": "#/rules@150"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@30"
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
                "$ref": "#/rules@154"
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
                "$ref": "#/rules@157"
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
                "$ref": "#/rules@157"
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
                "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@92"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@160"
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
                "$ref": "#/rules@162"
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
            "$type": "Assignment",
            "feature": "lines",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@165"
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
              "$ref": "#/rules@12"
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
                "$ref": "#/rules@33"
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
              "$ref": "#/rules@14"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@166"
            },
            "arguments": []
          },
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
              "$ref": "#/rules@179"
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
                "$ref": "#/rules@168"
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
          }
        ]
      },
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
                "$ref": "#/rules@30"
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
              "$ref": "#/rules@171"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@174"
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
                "$ref": "#/rules@174"
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
                "$ref": "#/rules@30"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@175"
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
              "$ref": "#/rules@30"
            },
            "arguments": []
          }
        ]
      },
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
                "$ref": "#/rules@30"
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
}`)),KD={languageId:"cisco-ios",fileExtensions:[".ios"],caseInsensitive:!1,mode:"development"},WD={AstReflection:()=>new ST},GD={Grammar:()=>BD(),LanguageMetaData:()=>KD,parser:{}};var CT={exports:{}};(function(t){(function(e){const n="(0?\\d+|0x[a-f0-9]+)",r={fourOctet:new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`,"i"),threeOctet:new RegExp(`^${n}\\.${n}\\.${n}$`,"i"),twoOctet:new RegExp(`^${n}\\.${n}$`,"i"),longValue:new RegExp(`^${n}$`,"i")},i=new RegExp("^0[0-7]+$","i"),s=new RegExp("^0x[a-f0-9]+$","i"),o="%[0-9a-z]{1,}",a="(?:[0-9a-f]+::?)+",c={zoneIndex:new RegExp(o,"i"),native:new RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${o})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${n}\\.${n}\\.${n}\\.${n}(${o})?)$`,"i"),transitional:new RegExp(`^((?:${a})|(?:::)(?:${a})?)${n}\\.${n}\\.${n}\\.${n}(${o})?$`,"i")};function l(d,v){if(d.indexOf("::")!==d.lastIndexOf("::"))return null;let R=0,_=-1,h=(d.match(c.zoneIndex)||[])[0],p,w;for(h&&(h=h.substring(1),d=d.replace(/%.+$/,""));(_=d.indexOf(":",_+1))>=0;)R++;if(d.substr(0,2)==="::"&&R--,d.substr(-2,2)==="::"&&R--,R>v)return null;for(w=v-R,p=":";w--;)p+="0:";return d=d.replace("::",p),d[0]===":"&&(d=d.slice(1)),d[d.length-1]===":"&&(d=d.slice(0,-1)),v=function(){const F=d.split(":"),G=[];for(let J=0;J<F.length;J++)G.push(parseInt(F[J],16));return G}(),{parts:v,zoneId:h}}function u(d,v,R,_){if(d.length!==v.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let h=0,p;for(;_>0;){if(p=R-_,p<0&&(p=0),d[h]>>p!==v[h]>>p)return!1;_-=R,h+=1}return!0}function f(d){if(s.test(d))return parseInt(d,16);if(d[0]==="0"&&!isNaN(parseInt(d[1],10))){if(i.test(d))return parseInt(d,8);throw new Error(`ipaddr: cannot parse ${d} as octal`)}return parseInt(d,10)}function m(d,v){for(;d.length<v;)d=`0${d}`;return d}const g={};g.IPv4=function(){function d(v){if(v.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let R,_;for(R=0;R<v.length;R++)if(_=v[R],!(0<=_&&_<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=v}return d.prototype.SpecialRanges={unspecified:[[new d([0,0,0,0]),8]],broadcast:[[new d([255,255,255,255]),32]],multicast:[[new d([224,0,0,0]),4]],linkLocal:[[new d([169,254,0,0]),16]],loopback:[[new d([127,0,0,0]),8]],carrierGradeNat:[[new d([100,64,0,0]),10]],private:[[new d([10,0,0,0]),8],[new d([172,16,0,0]),12],[new d([192,168,0,0]),16]],reserved:[[new d([192,0,0,0]),24],[new d([192,0,2,0]),24],[new d([192,88,99,0]),24],[new d([198,18,0,0]),15],[new d([198,51,100,0]),24],[new d([203,0,113,0]),24],[new d([240,0,0,0]),4]],as112:[[new d([192,175,48,0]),24],[new d([192,31,196,0]),24]],amt:[[new d([192,52,193,0]),24]]},d.prototype.kind=function(){return"ipv4"},d.prototype.match=function(v,R){let _;if(R===void 0&&(_=v,v=_[0],R=_[1]),v.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return u(this.octets,v.octets,8,R)},d.prototype.prefixLengthFromSubnetMask=function(){let v=0,R=!1;const _={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0};let h,p,w;for(h=3;h>=0;h-=1)if(p=this.octets[h],p in _){if(w=_[p],R&&w!==0)return null;w!==8&&(R=!0),v+=w}else return null;return 32-v},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){return this.octets.slice(0)},d.prototype.toIPv4MappedAddress=function(){return g.IPv6.parse(`::ffff:${this.toString()}`)},d.prototype.toNormalizedString=function(){return this.toString()},d.prototype.toString=function(){return this.octets.join(".")},d}(),g.IPv4.broadcastAddressFromCIDR=function(d){try{const v=this.parseCIDR(d),R=v[0].toByteArray(),_=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[];let p=0;for(;p<4;)h.push(parseInt(R[p],10)|parseInt(_[p],10)^255),p++;return new this(h)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.isIPv4=function(d){return this.parser(d)!==null},g.IPv4.isValid=function(d){try{return new this(this.parser(d)),!0}catch{return!1}},g.IPv4.isValidCIDR=function(d){try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv4.isValidFourPartDecimal=function(d){return!!(g.IPv4.isValid(d)&&d.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},g.IPv4.networkAddressFromCIDR=function(d){let v,R,_,h,p;try{for(v=this.parseCIDR(d),_=v[0].toByteArray(),p=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[],R=0;R<4;)h.push(parseInt(_[R],10)&parseInt(p[R],10)),R++;return new this(h)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},g.IPv4.parse=function(d){const v=this.parser(d);if(v===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(v)},g.IPv4.parseCIDR=function(d){let v;if(v=d.match(/^(.+)\/(\d+)$/)){const R=parseInt(v[2]);if(R>=0&&R<=32){const _=[this.parse(v[1]),R];return Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},g.IPv4.parser=function(d){let v,R,_;if(v=d.match(r.fourOctet))return function(){const h=v.slice(1,6),p=[];for(let w=0;w<h.length;w++)R=h[w],p.push(f(R));return p}();if(v=d.match(r.longValue)){if(_=f(v[1]),_>4294967295||_<0)throw new Error("ipaddr: address outside defined range");return function(){const h=[];let p;for(p=0;p<=24;p+=8)h.push(_>>p&255);return h}().reverse()}else return(v=d.match(r.twoOctet))?function(){const h=v.slice(1,4),p=[];if(_=f(h[1]),_>16777215||_<0)throw new Error("ipaddr: address outside defined range");return p.push(f(h[0])),p.push(_>>16&255),p.push(_>>8&255),p.push(_&255),p}():(v=d.match(r.threeOctet))?function(){const h=v.slice(1,5),p=[];if(_=f(h[2]),_>65535||_<0)throw new Error("ipaddr: address outside defined range");return p.push(f(h[0])),p.push(f(h[1])),p.push(_>>8&255),p.push(_&255),p}():null},g.IPv4.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>32)throw new Error("ipaddr: invalid IPv4 prefix length");const v=[0,0,0,0];let R=0;const _=Math.floor(d/8);for(;R<_;)v[R]=255,R++;return _<4&&(v[_]=Math.pow(2,d%8)-1<<8-d%8),new this(v)},g.IPv6=function(){function d(v,R){let _,h;if(v.length===16)for(this.parts=[],_=0;_<=14;_+=2)this.parts.push(v[_]<<8|v[_+1]);else if(v.length===8)this.parts=v;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(_=0;_<this.parts.length;_++)if(h=this.parts[_],!(0<=h&&h<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");R&&(this.zoneId=R)}return d.prototype.SpecialRanges={unspecified:[new d([0,0,0,0,0,0,0,0]),128],linkLocal:[new d([65152,0,0,0,0,0,0,0]),10],multicast:[new d([65280,0,0,0,0,0,0,0]),8],loopback:[new d([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new d([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new d([0,0,0,0,0,65535,0,0]),96],discard:[new d([256,0,0,0,0,0,0,0]),64],rfc6145:[new d([0,0,0,0,65535,0,0,0]),96],rfc6052:[new d([100,65435,0,0,0,0,0,0]),96],"6to4":[new d([8194,0,0,0,0,0,0,0]),16],teredo:[new d([8193,0,0,0,0,0,0,0]),32],benchmarking:[new d([8193,2,0,0,0,0,0,0]),48],amt:[new d([8193,3,0,0,0,0,0,0]),32],as112v6:[[new d([8193,4,274,0,0,0,0,0]),48],[new d([9760,79,32768,0,0,0,0,0]),48]],deprecated:[new d([8193,16,0,0,0,0,0,0]),28],orchid2:[new d([8193,32,0,0,0,0,0,0]),28],droneRemoteIdProtocolEntityTags:[new d([8193,48,0,0,0,0,0,0]),28],reserved:[[new d([8193,0,0,0,0,0,0,0]),23],[new d([8193,3512,0,0,0,0,0,0]),32]]},d.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},d.prototype.kind=function(){return"ipv6"},d.prototype.match=function(v,R){let _;if(R===void 0&&(_=v,v=_[0],R=_[1]),v.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return u(this.parts,v.parts,16,R)},d.prototype.prefixLengthFromSubnetMask=function(){let v=0,R=!1;const _={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0};let h,p;for(let w=7;w>=0;w-=1)if(h=this.parts[w],h in _){if(p=_[h],R&&p!==0)return null;p!==16&&(R=!0),v+=p}else return null;return 128-v},d.prototype.range=function(){return g.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){let v;const R=[],_=this.parts;for(let h=0;h<_.length;h++)v=_[h],R.push(v>>8),R.push(v&255);return R},d.prototype.toFixedLengthString=function(){const v=(function(){const _=[];for(let h=0;h<this.parts.length;h++)_.push(m(this.parts[h].toString(16),4));return _}).call(this).join(":");let R="";return this.zoneId&&(R=`%${this.zoneId}`),v+R},d.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");const v=this.parts.slice(-2),R=v[0],_=v[1];return new g.IPv4([R>>8,R&255,_>>8,_&255])},d.prototype.toNormalizedString=function(){const v=(function(){const _=[];for(let h=0;h<this.parts.length;h++)_.push(this.parts[h].toString(16));return _}).call(this).join(":");let R="";return this.zoneId&&(R=`%${this.zoneId}`),v+R},d.prototype.toRFC5952String=function(){const v=/((^|:)(0(:|$)){2,})/g,R=this.toNormalizedString();let _=0,h=-1,p;for(;p=v.exec(R);)p[0].length>h&&(_=p.index,h=p[0].length);return h<0?R:`${R.substring(0,_)}::${R.substring(_+h)}`},d.prototype.toString=function(){return this.toRFC5952String()},d}(),g.IPv6.broadcastAddressFromCIDR=function(d){try{const v=this.parseCIDR(d),R=v[0].toByteArray(),_=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[];let p=0;for(;p<16;)h.push(parseInt(R[p],10)|parseInt(_[p],10)^255),p++;return new this(h)}catch(v){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${v})`)}},g.IPv6.isIPv6=function(d){return this.parser(d)!==null},g.IPv6.isValid=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{const v=this.parser(d);return new this(v.parts,v.zoneId),!0}catch{return!1}},g.IPv6.isValidCIDR=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{return this.parseCIDR(d),!0}catch{return!1}},g.IPv6.networkAddressFromCIDR=function(d){let v,R,_,h,p;try{for(v=this.parseCIDR(d),_=v[0].toByteArray(),p=this.subnetMaskFromPrefixLength(v[1]).toByteArray(),h=[],R=0;R<16;)h.push(parseInt(_[R],10)&parseInt(p[R],10)),R++;return new this(h)}catch(w){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${w})`)}},g.IPv6.parse=function(d){const v=this.parser(d);if(v.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(v.parts,v.zoneId)},g.IPv6.parseCIDR=function(d){let v,R,_;if((R=d.match(/^(.+)\/(\d+)$/))&&(v=parseInt(R[2]),v>=0&&v<=128))return _=[this.parse(R[1]),v],Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},g.IPv6.parser=function(d){let v,R,_,h,p,w;if(_=d.match(c.deprecatedTransitional))return this.parser(`::ffff:${_[1]}`);if(c.native.test(d))return l(d,8);if((_=d.match(c.transitional))&&(w=_[6]||"",v=_[1],_[1].endsWith("::")||(v=v.slice(0,-1)),v=l(v+w,6),v.parts)){for(p=[parseInt(_[2]),parseInt(_[3]),parseInt(_[4]),parseInt(_[5])],R=0;R<p.length;R++)if(h=p[R],!(0<=h&&h<=255))return null;return v.parts.push(p[0]<<8|p[1]),v.parts.push(p[2]<<8|p[3]),{parts:v.parts,zoneId:v.zoneId}}return null},g.IPv6.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>128)throw new Error("ipaddr: invalid IPv6 prefix length");const v=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let R=0;const _=Math.floor(d/8);for(;R<_;)v[R]=255,R++;return _<16&&(v[_]=Math.pow(2,d%8)-1<<8-d%8),new this(v)},g.fromByteArray=function(d){const v=d.length;if(v===4)return new g.IPv4(d);if(v===16)return new g.IPv6(d);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},g.isValid=function(d){return g.IPv6.isValid(d)||g.IPv4.isValid(d)},g.isValidCIDR=function(d){return g.IPv6.isValidCIDR(d)||g.IPv4.isValidCIDR(d)},g.parse=function(d){if(g.IPv6.isValid(d))return g.IPv6.parse(d);if(g.IPv4.isValid(d))return g.IPv4.parse(d);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},g.parseCIDR=function(d){try{return g.IPv6.parseCIDR(d)}catch{try{return g.IPv4.parseCIDR(d)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},g.process=function(d){const v=this.parse(d);return v.kind()==="ipv6"&&v.isIPv4MappedAddress()?v.toIPv4Address():v},g.subnetMatch=function(d,v,R){let _,h,p,w;R==null&&(R="unicast");for(h in v)if(Object.prototype.hasOwnProperty.call(v,h)){for(p=v[h],p[0]&&!(p[0]instanceof Array)&&(p=[p]),_=0;_<p.length;_++)if(w=p[_],d.kind()===w[0].kind()&&d.match.apply(d,w))return h}return R},t.exports?t.exports=g:e.ipaddr=g})(xe)})(CT);var zD=CT.exports;function VD(t){const e=t.validation.ValidationRegistry,n=t.validation.CiscoIosValidator,r={IP:n.checkIP,SUBNETMASK:n.checkSUBNETMASK,Username_cmd:n.checkUsername_cmd,BANNER_MESSAGE:n.checkBANNER_MESSAGE,Stat:n.check_Stat,Generate_cmd:n.checkGenerate_cmd,Line_types:n.checkLine_types};e.register(r,n)}class YD{checkIP(e,n){if(e.value){const r=String(e.value).split(".");for(const i of r){const s=parseInt(i,10);(s>255||s<0)&&n("error","This is not a valid IP-Address!",{node:e,property:"value"})}}}checkSUBNETMASK(e,n){if(e.value){const r=String(e.value).split(".");let i="";for(const s of r){const a=parseInt(s,10).toString(2);let c=a;for(let l=0;l<8-a.length;l++)c="0"+c;i=i+c}(i.match(/10+1/)||i.length!=32||!i.includes("0"))&&n("error","This is not a valid Subnetmask!",{node:e,property:"value"})}}checkUsername_cmd(e,n){var r;if(e.options){let i=[];for(const s of e.options)i.includes(s.$type)?n("error",`Already defined ${(r=s.$cstNode)===null||r===void 0?void 0:r.text} (duplicate)!`,{node:s}):i.push(s.$type)}}checkBANNER_MESSAGE(e,n){let r=e.message.join("");const i=r.at(0),s=r.charAt(r.length-1);i!=s?n("error",`Delimiters ${i} and ${s} dont match!`,{node:e}):(r.substring(1,r.length-1).includes(i)||r.substring(1,r.length-1).includes(s))&&n("error",`Delimiter (${i}) can not be inside MESSAGE!`,{node:e})}checkGenerate_cmd(e,n){const r=rr(e),i=Array.from(tn(r)),s=i.indexOf(e),o=i.findIndex(c=>c.$type==="Hostname_cmd"),a=i.findIndex(c=>c.$type==="Domainname_cmd");o===-1?n("error","Set a hostname before generating keys!",{node:e.$container.$container}):o>s&&n("error","A hostname must be defined before generating keys!",{node:e.$container.$container}),a===-1?n("error","Set a domain-name before generating keys!",{node:e.$container.$container}):a>s&&n("error","A domain-name must be defined before generating keys!",{node:e.$container.$container})}checkLine_types(e,n){let r=[];for(let i of e.lines)if(!UD(i))r.push(i);else break;r.findIndex(i=>qD(i))<0&&n("info","Line mode has no exec-timeout command!",{node:e.$container,property:"command"})}check_Stat(e,n){i(e),s(e),r(e);function r(o){const a=tn(rr(o)).filter(c=>c.$type==="No_ip_cmd_option_domain_lookup");if(a.count()>1)for(let c of a)n("warning","Script contains the <no ip domain-lookup> command more than once.",{node:c});else a.count()<=0&&n("hint","Script does not contain the <no ip domain-lookup> command.",{node:o.lines[0]})}function i(o){var a;const c=new Map,l=tn(rr(o)).filter(u=>u.$type==="IP_cmd_interface");for(const u of l)if(yy(u)&&vy(u.option)){const f=(a=u.option.ip)===null||a===void 0?void 0:a.value;if(!f)continue;const m=c.get(f);m?(n("error",`Duplicate IP address: ${f}!`,{node:u.option,property:"ip"}),n("error",`Duplicate IP address: ${f}!`,{node:m.option,property:"ip"})):c.set(f,u)}}function s(o){var a,c,l,u;const f=[],m=tn(rr(o)).filter(g=>g.$type==="IP_cmd_interface");for(const g of m){if(!yy(g)||!vy(g.option))continue;const d=(c=(a=g.option.ip)===null||a===void 0?void 0:a.value)===null||c===void 0?void 0:c.trim(),v=(u=(l=g.option.mask)===null||l===void 0?void 0:l.value)===null||u===void 0?void 0:u.trim();if(!(!d||!v))try{const R=v.split(".").map(w=>Number(w).toString(2).padStart(8,"0")).join("").indexOf("0"),_=R===-1?32:R,[h,p]=zD.parseCIDR(`${d}/${_}`);for(const w of f)h.kind()===w.ip.kind()&&(h.match(w.ip,w.prefix)||w.ip.match(h,p))&&(n("error",`Overlapping subnet: ${w.cidr} ↔ ${d}/${p}!`,{node:g}),n("error",`Overlapping subnet: ${d}/${p} ↔ ${w.cidr}!`,{node:w.node}));f.push({ip:h,prefix:p,cidr:`${d}/${p}`,node:g})}catch{}}}}}class XD extends I_{getScope(e){return super.getScope(e)}}const JD={label:"IP-Address lol",description:"ip....",insert:"1.2.3.4"},QD={label:"Subnetmask",description:"subnetmask...",insert:"255.255.255.0"},ZD={label:"hostname",description:"This Systems Network Name",insert:"R1"},eO={label:"address",description:"set an address to this interface",insert:"address"},tO={label:"<Domain Name>",description:"The Domain Name of the Device",insert:"4CN.at"},nO={label:"2",description:"Protocol to be supported",insert:"2"},rO={label:".xx",description:"",insert:".10"},iO={label:"x/x",description:"number of the interface to be entered",insert:"${1:0}/${2:0}\nno shutdown\n$0"},sO={label:"domain-lookup",description:"stops ip domain lookup",insert:"domain-lookup"},oO={label:"description",description:"describes the interface",insert:"description"},aO={label:"<CR>",description:"possible end of a command",insert:`
`};var cO={IP:JD,SUBNETMASK:QD,Hostname_Input:ZD,Ip_cmd_option_address:eO,DOMAINNAME_INPUT:tO,VERSION_INPUT:nO,Sub_Interface_number:rO,Interface_number:iO,No_ip_cmd_option_domain_lookup:sO,Description_cmd:oO,COMMENT:aO};class lO extends bT{constructor(e){super(e),this.services=e}async getCompletion(e,n,r){let i=[];const s=this.buildContexts(e,n.position);if(this.isCursorInComment(e,n))return L.CompletionList.create([],!0);const o=(a,c)=>{const l=this.fillCompletionItem(a,c);l&&i.push(l)};for(const a of s)for(const c of a.features)this.completionFor(a,c,o);return L.CompletionList.create(this.deduplicateItems(i),!0)}completionFor(e,n,r){let i;if(n.type){if(i=cO[n.type],i)r(e,{label:i.label,detail:i.description,sortText:"1",kind:1,insertTextFormat:2,insertText:i.insert});else if(Dt(n.feature))return this.completionForKeyword(e,n.feature,r)}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"From OLD logic",sortText:"1"})}isCursorInComment(e,n){var r,i;const s=e.textDocument.offsetAt(n.position),o=e.textDocument.getText(),l=(r=this.services.parser.Lexer.tokenize(o).hidden)!==null&&r!==void 0?r:[];for(const u of l)if(s>u.startOffset&&n.position.line+1<=((i=u.endLine)!==null&&i!==void 0?i:-1))return!0;return!1}collectFromType(e,n){const r=[],i=new Set;function s(o){if(!i.has(o)){i.add(o),o.$type===e&&r.push(o.value);for(const a in o){const c=o[a];if(Array.isArray(c))for(const l of c)l&&typeof l=="object"&&"$type"in l&&s(l);else c&&typeof c=="object"&&"$type"in c&&s(c)}}}return s(n),r}}class uO extends P_{constructor(e){super(e)}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r||this.createSilentLinkingError(e)}createSilentLinkingError(e){return Object.assign(Object.assign({},e),{message:""})}createLinkingError(e){return this.createSilentLinkingError(e)}}const dO={COMMON:{type:"comment"},COMMENT:{type:"comment"},Hostname_Input:{type:"string"},USERNAME_INPUT:{type:"string"},BANNER_MESSAGE:{type:"string"},DOMAINNAME_INPUT:{type:"string"},Interface_number:{type:"string"},VERSION_INPUT:{type:"string"},MODULUS_INPUT:{type:"string"},USERNAME_PASSWORD_INPUT:{type:"string"},IP:{type:"string"},SUBNETMASK:{type:"string"},OSPF_PROCESS_NUMBER:{type:"number"}};class fO extends eD{highlightElement(e,n){if(jD(e)){n({node:e,property:"type",type:"variable"});return}HD(e)&&e.$type=="COMMENTLINE"&&e.$cstNode&&n({cst:e.$cstNode,type:"comment"});const r=dO[e.$type];r&&e.$cstNode&&n({cst:e.$cstNode,type:r.type})}}const hO={validation:{CiscoIosValidator:()=>new YD},references:{ScopeProvider:t=>new XD(t),Linker:t=>new uO(t)},lsp:{CompletionProvider:t=>new lO(t),SemanticTokenProvider:t=>new fO(t)}};function pO(t){const e=Vc(MD(t),WD),n=Vc(xD({shared:e}),GD,hO);return e.ServiceRegistry.register(n),VD(n),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,CiscoIos:n}}const mO=new Bh.BrowserMessageReader(self),gO=new Bh.BrowserMessageWriter(self),yO=Bh.createConnection(mO,gO),{shared:vO}=pO(Object.assign({connection:yO},G_));rD(vO)});export default _O();
