var vT=Object.defineProperty;var _T=(t,e,n)=>e in t?vT(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var TT=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var In=(t,e,n)=>_T(t,typeof e!="symbol"?e+"":e,n);var AD=TT((vt,_t)=>{function Xe(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function Jt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function RT(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function tc(t){return typeof t=="object"&&t!==null&&Xe(t.container)&&Jt(t.reference)&&typeof t.message=="string"}class uy{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,n){return Xe(e)&&this.isSubtype(e.$type,n)}isSubtype(e,n){if(e===n)return!0;let r=this.subtypes[e];r||(r=this.subtypes[e]={});const i=r[n];if(i!==void 0)return i;{const s=this.computeIsSubtype(e,n);return r[n]=s,s}}getAllSubTypes(e){const n=this.allSubtypes[e];if(n)return n;{const r=this.getAllTypes(),i=[];for(const s of r)this.isSubtype(s,e)&&i.push(s);return this.allSubtypes[e]=i,i}}}function ir(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function _s(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function dy(t){return ir(t)&&typeof t.fullText=="string"}class Ve{constructor(e,n){this.startFn=e,this.nextFn=n}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){const e=this.iterator();let n=0,r=e.next();for(;!r.done;)n++,r=e.next();return n}toArray(){const e=[],n=this.iterator();let r;do r=n.next(),r.value!==void 0&&e.push(r.value);while(!r.done);return e}toSet(){return new Set(this)}toMap(e,n){const r=this.map(i=>[e?e(i):i,n?n(i):i]);return new Map(r)}toString(){return this.join()}concat(e){return new Ve(()=>({first:this.startFn(),firstDone:!1,iterator:e[Symbol.iterator]()}),n=>{let r;if(!n.firstDone){do if(r=this.nextFn(n.first),!r.done)return r;while(!r.done);n.firstDone=!0}do if(r=n.iterator.next(),!r.done)return r;while(!r.done);return gt})}join(e=","){const n=this.iterator();let r="",i,s=!1;do i=n.next(),i.done||(s&&(r+=e),r+=wT(i.value)),s=!0;while(!i.done);return r}indexOf(e,n=0){const r=this.iterator();let i=0,s=r.next();for(;!s.done;){if(i>=n&&s.value===e)return i;s=r.next(),i++}return-1}every(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(!e(r.value))return!1;r=n.next()}return!0}some(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return!0;r=n.next()}return!1}forEach(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;)e(i.value,r),i=n.next(),r++}map(e){return new Ve(this.startFn,n=>{const{done:r,value:i}=this.nextFn(n);return r?gt:{done:!1,value:e(i)}})}filter(e){return new Ve(this.startFn,n=>{let r;do if(r=this.nextFn(n),!r.done&&e(r.value))return r;while(!r.done);return gt})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,n){const r=this.iterator();let i=n,s=r.next();for(;!s.done;)i===void 0?i=s.value:i=e(i,s.value),s=r.next();return i}reduceRight(e,n){return this.recursiveReduce(this.iterator(),e,n)}recursiveReduce(e,n,r){const i=e.next();if(i.done)return r;const s=this.recursiveReduce(e,n,r);return s===void 0?i.value:n(s,i.value)}find(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(e(r.value))return r.value;r=n.next()}}findIndex(e){const n=this.iterator();let r=0,i=n.next();for(;!i.done;){if(e(i.value))return r;i=n.next(),r++}return-1}includes(e){const n=this.iterator();let r=n.next();for(;!r.done;){if(r.value===e)return!0;r=n.next()}return!1}flatMap(e){return new Ve(()=>({this:this.startFn()}),n=>{do{if(n.iterator){const s=n.iterator.next();if(s.done)n.iterator=void 0;else return s}const{done:r,value:i}=this.nextFn(n.this);if(!r){const s=e(i);if(fc(s))n.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}}while(n.iterator);return gt})}flat(e){if(e===void 0&&(e=1),e<=0)return this;const n=e>1?this.flat(e-1):this;return new Ve(()=>({this:n.startFn()}),r=>{do{if(r.iterator){const o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}const{done:i,value:s}=n.nextFn(r.this);if(!i)if(fc(s))r.iterator=s[Symbol.iterator]();else return{done:!1,value:s}}while(r.iterator);return gt})}head(){const n=this.iterator().next();if(!n.done)return n.value}tail(e=1){return new Ve(()=>{const n=this.startFn();for(let r=0;r<e;r++)if(this.nextFn(n).done)return n;return n},this.nextFn)}limit(e){return new Ve(()=>({size:0,state:this.startFn()}),n=>(n.size++,n.size>e?gt:this.nextFn(n.state)))}distinct(e){return new Ve(()=>({set:new Set,internalState:this.startFn()}),n=>{let r;do if(r=this.nextFn(n.internalState),!r.done){const i=e?e(r.value):r.value;if(!n.set.has(i))return n.set.add(i),r}while(!r.done);return gt})}exclude(e,n){const r=new Set;for(const i of e){const s=n?n(i):i;r.add(s)}return this.filter(i=>{const s=n?n(i):i;return!r.has(s)})}}function wT(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function fc(t){return!!t&&typeof t[Symbol.iterator]=="function"}const bT=new Ve(()=>{},()=>gt),gt=Object.freeze({done:!0,value:void 0});function ke(...t){if(t.length===1){const e=t[0];if(e instanceof Ve)return e;if(fc(e))return new Ve(()=>e[Symbol.iterator](),n=>n.next());if(typeof e.length=="number")return new Ve(()=>({index:0}),n=>n.index<e.length?{done:!1,value:e[n.index++]}:gt)}return t.length>1?new Ve(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){const n=e.iterator.next();if(!n.done)return n;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){const n=t[e.collIndex++];fc(n)?e.iterator=n[Symbol.iterator]():n&&typeof n.length=="number"&&(e.array=n)}}while(e.iterator||e.array||e.collIndex<t.length);return gt}):bT}class hc extends Ve{constructor(e,n,r){super(()=>({iterators:r!=null&&r.includeRoot?[[e][Symbol.iterator]()]:[n(e)[Symbol.iterator]()],pruned:!1}),i=>{for(i.pruned&&(i.iterators.pop(),i.pruned=!1);i.iterators.length>0;){const o=i.iterators[i.iterators.length-1].next();if(o.done)i.iterators.pop();else return i.iterators.push(n(o.value)[Symbol.iterator]()),o}return gt})}iterator(){const e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}}var ed;(function(t){function e(s){return s.reduce((o,a)=>o+a,0)}t.sum=e;function n(s){return s.reduce((o,a)=>o*a,0)}t.product=n;function r(s){return s.reduce((o,a)=>Math.min(o,a))}t.min=r;function i(s){return s.reduce((o,a)=>Math.max(o,a))}t.max=i})(ed||(ed={}));function pc(t){return new hc(t,e=>ir(e)?e.content:[],{includeRoot:!0})}function kT(t){return pc(t).filter(_s)}function ST(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function td(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function mc(t){if(!t)return;const{offset:e,end:n,range:r}=t;return{range:r,offset:e,end:n,length:n-e}}var pn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside",t[t.Outside=5]="Outside"})(pn||(pn={}));function CT(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<=e.start.character)return pn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>=e.end.character)return pn.After;const n=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,r=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return n&&r?pn.Inside:n?pn.OverlapBack:r?pn.OverlapFront:pn.Outside}function fy(t,e){return CT(t,e)>pn.After}const hy=/^[\w\p{L}]$/u;function sr(t,e,n=hy){if(t){if(e>0){const r=e-t.offset,i=t.text.charAt(r);n.test(i)||e--}return my(t,e)}}function py(t,e){if(t){const n=$T(t,!0);if(n&&Dh(n,e))return n;if(dy(t)){const r=t.content.findIndex(i=>!i.hidden);for(let i=r-1;i>=0;i--){const s=t.content[i];if(Dh(s,e))return s}}}}function Dh(t,e){return _s(t)&&e.includes(t.tokenType.name)}function my(t,e){if(_s(t))return t;if(ir(t)){const n=gy(t,e,!1);if(n)return my(n,e)}}function nd(t,e){if(_s(t))return t;if(ir(t)){const n=gy(t,e,!0);if(n)return nd(n,e)}}function gy(t,e,n){let r=0,i=t.content.length-1,s;for(;r<=i;){const o=Math.floor((r+i)/2),a=t.content[o];if(a.offset<=e&&a.end>e)return a;a.end<=e?(s=n?a:void 0,r=o+1):i=o-1}return s}function $T(t,e=!0){for(;t.container;){const n=t.container;let r=n.content.indexOf(t);for(;r>0;){r--;const i=n.content[r];if(e||!i.hidden)return i}t=n}}class yy extends Error{constructor(e,n){super(e?`${n} at ${e.range.start.line}:${e.range.start.character}`:n)}}function Ts(t){throw new Error("Error! The input value was not handled.")}const to="AbstractRule",no="AbstractType",Wl="Condition",Oh="TypeDefinition",Gl="ValueLiteral",Ti="AbstractElement";function vy(t){return ie.isInstance(t,Ti)}const ro="ArrayLiteral",io="ArrayType",Ri="BooleanLiteral";function ET(t){return ie.isInstance(t,Ri)}const wi="Conjunction";function PT(t){return ie.isInstance(t,wi)}const bi="Disjunction";function AT(t){return ie.isInstance(t,bi)}const so="Grammar",zl="GrammarImport",ki="InferredType";function _y(t){return ie.isInstance(t,ki)}const Si="Interface";function Ty(t){return ie.isInstance(t,Si)}const Vl="NamedArgument",Ci="Negation";function NT(t){return ie.isInstance(t,Ci)}const oo="NumberLiteral",ao="Parameter",$i="ParameterReference";function IT(t){return ie.isInstance(t,$i)}const Ei="ParserRule";function tt(t){return ie.isInstance(t,Ei)}const co="ReferenceType",nc="ReturnType";function DT(t){return ie.isInstance(t,nc)}const Pi="SimpleType";function OT(t){return ie.isInstance(t,Pi)}const lo="StringLiteral",kr="TerminalRule";function zn(t){return ie.isInstance(t,kr)}const Ai="Type";function Ry(t){return ie.isInstance(t,Ai)}const Yl="TypeAttribute",uo="UnionType",Ni="Action";function Rs(t){return ie.isInstance(t,Ni)}const Ii="Alternatives";function qf(t){return ie.isInstance(t,Ii)}const Di="Assignment";function en(t){return ie.isInstance(t,Di)}const Oi="CharacterRange";function xT(t){return ie.isInstance(t,Oi)}const xi="CrossReference";function ws(t){return ie.isInstance(t,xi)}const Li="EndOfFile";function LT(t){return ie.isInstance(t,Li)}const Mi="Group";function or(t){return ie.isInstance(t,Mi)}const Fi="Keyword";function At(t){return ie.isInstance(t,Fi)}const Hi="NegatedToken";function MT(t){return ie.isInstance(t,Hi)}const ji="RegexToken";function FT(t){return ie.isInstance(t,ji)}const qi="RuleCall";function Tn(t){return ie.isInstance(t,qi)}const Ui="TerminalAlternatives";function HT(t){return ie.isInstance(t,Ui)}const Bi="TerminalGroup";function jT(t){return ie.isInstance(t,Bi)}const Ki="TerminalRuleCall";function qT(t){return ie.isInstance(t,Ki)}const Wi="UnorderedGroup";function Uf(t){return ie.isInstance(t,Wi)}const Gi="UntilToken";function UT(t){return ie.isInstance(t,Gi)}const zi="Wildcard";function BT(t){return ie.isInstance(t,zi)}class wy extends uy{getAllTypes(){return[Ti,to,no,Ni,Ii,ro,io,Di,Ri,Oi,Wl,wi,xi,bi,Li,so,zl,Mi,ki,Si,Fi,Vl,Hi,Ci,oo,ao,$i,Ei,co,ji,nc,qi,Pi,lo,Ui,Bi,kr,Ki,Ai,Yl,Oh,uo,Wi,Gi,Gl,zi]}computeIsSubtype(e,n){switch(e){case Ni:case Ii:case Di:case Oi:case xi:case Li:case Mi:case Fi:case Hi:case ji:case qi:case Ui:case Bi:case Ki:case Wi:case Gi:case zi:return this.isSubtype(Ti,n);case ro:case oo:case lo:return this.isSubtype(Gl,n);case io:case co:case Pi:case uo:return this.isSubtype(Oh,n);case Ri:return this.isSubtype(Wl,n)||this.isSubtype(Gl,n);case wi:case bi:case Ci:case $i:return this.isSubtype(Wl,n);case ki:case Si:case Ai:return this.isSubtype(no,n);case Ei:return this.isSubtype(to,n)||this.isSubtype(no,n);case kr:return this.isSubtype(to,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return no;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return to;case"Grammar:usedGrammars":return so;case"NamedArgument:parameter":case"ParameterReference:parameter":return ao;case"TerminalRuleCall:rule":return kr;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Ti:return{name:Ti,properties:[{name:"cardinality"},{name:"lookahead"}]};case ro:return{name:ro,properties:[{name:"elements",defaultValue:[]}]};case io:return{name:io,properties:[{name:"elementType"}]};case Ri:return{name:Ri,properties:[{name:"true",defaultValue:!1}]};case wi:return{name:wi,properties:[{name:"left"},{name:"right"}]};case bi:return{name:bi,properties:[{name:"left"},{name:"right"}]};case so:return{name:so,properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case zl:return{name:zl,properties:[{name:"path"}]};case ki:return{name:ki,properties:[{name:"name"}]};case Si:return{name:Si,properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case Vl:return{name:Vl,properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case Ci:return{name:Ci,properties:[{name:"value"}]};case oo:return{name:oo,properties:[{name:"value"}]};case ao:return{name:ao,properties:[{name:"name"}]};case $i:return{name:$i,properties:[{name:"parameter"}]};case Ei:return{name:Ei,properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case co:return{name:co,properties:[{name:"referenceType"}]};case nc:return{name:nc,properties:[{name:"name"}]};case Pi:return{name:Pi,properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case lo:return{name:lo,properties:[{name:"value"}]};case kr:return{name:kr,properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case Ai:return{name:Ai,properties:[{name:"name"},{name:"type"}]};case Yl:return{name:Yl,properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case uo:return{name:uo,properties:[{name:"types",defaultValue:[]}]};case Ni:return{name:Ni,properties:[{name:"cardinality"},{name:"feature"},{name:"inferredType"},{name:"lookahead"},{name:"operator"},{name:"type"}]};case Ii:return{name:Ii,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Di:return{name:Di,properties:[{name:"cardinality"},{name:"feature"},{name:"lookahead"},{name:"operator"},{name:"terminal"}]};case Oi:return{name:Oi,properties:[{name:"cardinality"},{name:"left"},{name:"lookahead"},{name:"right"}]};case xi:return{name:xi,properties:[{name:"cardinality"},{name:"deprecatedSyntax",defaultValue:!1},{name:"lookahead"},{name:"terminal"},{name:"type"}]};case Li:return{name:Li,properties:[{name:"cardinality"},{name:"lookahead"}]};case Mi:return{name:Mi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"guardCondition"},{name:"lookahead"}]};case Fi:return{name:Fi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"value"}]};case Hi:return{name:Hi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case ji:return{name:ji,properties:[{name:"cardinality"},{name:"lookahead"},{name:"regex"}]};case qi:return{name:qi,properties:[{name:"arguments",defaultValue:[]},{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case Ui:return{name:Ui,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Bi:return{name:Bi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Ki:return{name:Ki,properties:[{name:"cardinality"},{name:"lookahead"},{name:"rule"}]};case Wi:return{name:Wi,properties:[{name:"cardinality"},{name:"elements",defaultValue:[]},{name:"lookahead"}]};case Gi:return{name:Gi,properties:[{name:"cardinality"},{name:"lookahead"},{name:"terminal"}]};case zi:return{name:zi,properties:[{name:"cardinality"},{name:"lookahead"}]};default:return{name:e,properties:[]}}}}const ie=new wy;function KT(t){for(const[e,n]of Object.entries(t))e.startsWith("$")||(Array.isArray(n)?n.forEach((r,i)=>{Xe(r)&&(r.$container=t,r.$containerProperty=e,r.$containerIndex=i)}):Xe(n)&&(n.$container=t,n.$containerProperty=e))}function Dn(t,e){let n=t;for(;n;){if(e(n))return n;n=n.$container}}function tn(t){const n=er(t).$document;if(!n)throw new Error("AST node has no document.");return n}function er(t){for(;t.$container;)t=t.$container;return t}function Qc(t,e){if(!t)throw new Error("Node must be an AstNode.");const n=e==null?void 0:e.range;return new Ve(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),r=>{for(;r.keyIndex<r.keys.length;){const i=r.keys[r.keyIndex];if(!i.startsWith("$")){const s=t[i];if(Xe(s)){if(r.keyIndex++,rd(s,n))return{done:!1,value:s}}else if(Array.isArray(s)){for(;r.arrayIndex<s.length;){const o=r.arrayIndex++,a=s[o];if(Xe(a)&&rd(a,n))return{done:!1,value:a}}r.arrayIndex=0}}r.keyIndex++}return gt})}function Qt(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new hc(t,n=>Qc(n,e))}function nr(t,e){if(t){if(e!=null&&e.range&&!rd(t,e.range))return new hc(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new hc(t,n=>Qc(n,e),{includeRoot:!0})}function rd(t,e){var n;if(!e)return!0;const r=(n=t.$cstNode)===null||n===void 0?void 0:n.range;return r?fy(r,e):!1}function by(t){return new Ve(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){const n=e.keys[e.keyIndex];if(!n.startsWith("$")){const r=t[n];if(Jt(r))return e.keyIndex++,{done:!1,value:{reference:r,container:t,property:n}};if(Array.isArray(r)){for(;e.arrayIndex<r.length;){const i=e.arrayIndex++,s=r[i];if(Jt(s))return{done:!1,value:{reference:s,container:t,property:n,index:i}}}e.arrayIndex=0}}e.keyIndex++}return gt})}function ky(t,e){const n=t.getTypeMetaData(e.$type),r=e;for(const i of n.properties)i.defaultValue!==void 0&&r[i.name]===void 0&&(r[i.name]=Sy(i.defaultValue))}function Sy(t){return Array.isArray(t)?[...t.map(Sy)]:t}function K(t){return t.charCodeAt(0)}function Xl(t,e){Array.isArray(t)?t.forEach(function(n){e.push(n)}):e.push(t)}function ui(t,e){if(t[e]===!0)throw"duplicate flag "+e;t[e],t[e]=!0}function Tr(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function WT(){throw Error("Internal Error - Should never get here!")}function xh(t){return t.type==="Character"}const gc=[];for(let t=K("0");t<=K("9");t++)gc.push(t);const yc=[K("_")].concat(gc);for(let t=K("a");t<=K("z");t++)yc.push(t);for(let t=K("A");t<=K("Z");t++)yc.push(t);const Lh=[K(" "),K("\f"),K(`
`),K("\r"),K("	"),K("\v"),K("	"),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K(" "),K("\u2028"),K("\u2029"),K(" "),K(" "),K("　"),K("\uFEFF")],GT=/[0-9a-fA-F]/,fo=/[0-9]/,zT=/[1-9]/;class Cy{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");const n=this.disjunction();this.consumeChar("/");const r={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":ui(r,"global");break;case"i":ui(r,"ignoreCase");break;case"m":ui(r,"multiLine");break;case"u":ui(r,"unicode");break;case"y":ui(r,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:r,value:n,loc:this.loc(0)}}disjunction(){const e=[],n=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(n)}}alternative(){const e=[],n=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(n)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){const e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let n;switch(this.popChar()){case"=":n="Lookahead";break;case"!":n="NegativeLookahead";break}Tr(n);const r=this.disjunction();return this.consumeChar(")"),{type:n,value:r,loc:this.loc(e)}}return WT()}quantifier(e=!1){let n;const r=this.idx;switch(this.popChar()){case"*":n={atLeast:0,atMost:1/0};break;case"+":n={atLeast:1,atMost:1/0};break;case"?":n={atLeast:0,atMost:1};break;case"{":const i=this.integerIncludingZero();switch(this.popChar()){case"}":n={atLeast:i,atMost:i};break;case",":let s;this.isDigit()?(s=this.integerIncludingZero(),n={atLeast:i,atMost:s}):n={atLeast:i,atMost:1/0},this.consumeChar("}");break}if(e===!0&&n===void 0)return;Tr(n);break}if(!(e===!0&&n===void 0)&&Tr(n))return this.peekChar(0)==="?"?(this.consumeChar("?"),n.greedy=!1):n.greedy=!0,n.type="Quantifier",n.loc=this.loc(r),n}atom(){let e;const n=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}if(e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Tr(e))return e.loc=this.loc(n),this.isQuantifier()&&(e.quantifier=this.quantifier()),e}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[K(`
`),K("\r"),K("\u2028"),K("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,n=!1;switch(this.popChar()){case"d":e=gc;break;case"D":e=gc,n=!0;break;case"s":e=Lh;break;case"S":e=Lh,n=!0;break;case"w":e=yc;break;case"W":e=yc,n=!0;break}if(Tr(e))return{type:"Set",value:e,complement:n}}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=K("\f");break;case"n":e=K(`
`);break;case"r":e=K("\r");break;case"t":e=K("	");break;case"v":e=K("\v");break}if(Tr(e))return{type:"Character",value:e}}controlLetterEscapeAtom(){this.consumeChar("c");const e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:K("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){const e=this.popChar();return{type:"Character",value:K(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:const e=this.popChar();return{type:"Character",value:K(e)}}}characterClass(){const e=[];let n=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),n=!0);this.isClassAtom();){const r=this.classAtom();if(r.type,xh(r)&&this.isRangeDash()){this.consumeChar("-");const i=this.classAtom();if(i.type,xh(i)){if(i.value<r.value)throw Error("Range out of order in character class");e.push({from:r.value,to:i.value})}else Xl(r.value,e),e.push(K("-")),Xl(i.value,e)}else Xl(r.value,e)}return this.consumeChar("]"),{type:"Set",complement:n,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:K("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}const n=this.disjunction();this.consumeChar(")");const r={type:"Group",capturing:e,value:n};return e&&(r.idx=this.groupIdx),r}positiveInteger(){let e=this.popChar();if(zT.test(e)===!1)throw Error("Expecting a positive integer");for(;fo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(fo.test(e)===!1)throw Error("Expecting an integer");for(;fo.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){const e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:K(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return fo.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){const e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let n="";for(let i=0;i<e;i++){const s=this.popChar();if(GT.test(s)===!1)throw Error("Expecting a HexDecimal digits");n+=s}return{type:"Character",value:parseInt(n,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){const e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}}class Zc{visitChildren(e){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&(r.type!==void 0?this.visit(r):Array.isArray(r)&&r.forEach(i=>{this.visit(i)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}}const VT=/\r?\n/gm,YT=new Cy;class XT extends Zc{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){const n=String.fromCharCode(e.value);if(!this.multiline&&n===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const r=el(n);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitSet(e){if(!this.multiline){const n=this.regex.substring(e.loc.begin,e.loc.end),r=new RegExp(n);this.multiline=!!`
`.match(r)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{const n=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}}const Jl=new XT;function JT(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),Jl.reset(t),Jl.visit(YT.pattern(t)),Jl.multiline}catch{return!1}}const QT=`\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");function $y(t){const e=typeof t=="string"?new RegExp(t):t;return QT.some(n=>e.test(n))}function el(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ZT(t,e){const n=eR(t),r=e.match(n);return!!r&&r[0].length>0}function eR(t){typeof t=="string"&&(t=new RegExp(t));const e=t,n=t.source;let r=0;function i(){let s="",o;function a(l){s+=n.substr(r,l),r+=l}function c(l){s+="(?:"+n.substr(r,l)+"|$)",r+=l}for(;r<n.length;)switch(n[r]){case"\\":switch(n[r+1]){case"c":c(3);break;case"x":c(4);break;case"u":e.unicode?n[r+2]==="{"?c(n.indexOf("}",r)-r+1):c(6):c(2);break;case"p":case"P":e.unicode?c(n.indexOf("}",r)-r+1):c(2);break;case"k":c(n.indexOf(">",r)-r+1);break;default:c(2);break}break;case"[":o=/\[(?:\\.|.)*?\]/g,o.lastIndex=r,o=o.exec(n)||[],c(o[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":a(1);break;case"{":o=/\{\d+,?\d*\}/g,o.lastIndex=r,o=o.exec(n),o?a(o[0].length):c(1);break;case"(":if(n[r+1]==="?")switch(n[r+2]){case":":s+="(?:",r+=3,s+=i()+"|$)";break;case"=":s+="(?=",r+=3,s+=i()+")";break;case"!":o=r,r+=3,i(),s+=n.substr(o,r-o);break;case"<":switch(n[r+3]){case"=":case"!":o=r,r+=4,i(),s+=n.substr(o,r-o);break;default:a(n.indexOf(">",r)-r+1),s+=i()+"|$)";break}break}else a(1),s+=i()+"|$)";break;case")":return++r,s;default:c(1);break}return s}return new RegExp(i(),t.flags)}function id(t){return t.rules.find(e=>tt(e)&&e.entry)}function tR(t){return t.rules.filter(e=>zn(e)&&e.hidden)}function Ey(t,e){const n=new Set,r=id(t);if(!r)return new Set(t.rules);const i=[r].concat(tR(t));for(const o of i)Py(o,n,e);const s=new Set;for(const o of t.rules)(n.has(o.name)||zn(o)&&o.hidden)&&s.add(o);return s}function Py(t,e,n){e.add(t.name),Qt(t).forEach(r=>{if(Tn(r)||n){const i=r.rule.ref;i&&!e.has(i.name)&&Py(i,e,n)}})}function Ay(t){if(t.terminal)return t.terminal;if(t.type.ref){const e=Oy(t.type.ref);return e==null?void 0:e.terminal}}function nR(t){return t.hidden&&!$y(nl(t))}function Ny(t,e){return!t||!e?[]:Kf(t,e,t.astNode,!0)}function Bf(t,e,n){if(!t||!e)return;const r=Kf(t,e,t.astNode,!0);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function Kf(t,e,n,r){if(!r){const i=Dn(t.grammarSource,en);if(i&&i.feature===e)return[t]}return ir(t)&&t.astNode===n?t.content.flatMap(i=>Kf(i,e,n,!1)):[]}function rR(t,e){return t?Dy(t,e,t==null?void 0:t.astNode):[]}function Iy(t,e,n){if(!t)return;const r=Dy(t,e,t==null?void 0:t.astNode);if(r.length!==0)return n!==void 0?n=Math.max(0,Math.min(n,r.length-1)):n=0,r[n]}function Dy(t,e,n){if(t.astNode!==n)return[];if(At(t.grammarSource)&&t.grammarSource.value===e)return[t];const r=pc(t).iterator();let i;const s=[];do if(i=r.next(),!i.done){const o=i.value;o.astNode===n?At(o.grammarSource)&&o.grammarSource.value===e&&s.push(o):r.prune()}while(!i.done);return s}function iR(t){var e;const n=t.astNode;for(;n===((e=t.container)===null||e===void 0?void 0:e.astNode);){const r=Dn(t.grammarSource,en);if(r)return r;t=t.container}}function Oy(t){let e=t;return _y(e)&&(Rs(e.$container)?e=e.$container.$container:tt(e.$container)?e=e.$container:Ts(e.$container)),xy(t,e,new Map)}function xy(t,e,n){var r;function i(s,o){let a;return Dn(s,en)||(a=xy(o,o,n)),n.set(t,a),a}if(n.has(t))return n.get(t);n.set(t,void 0);for(const s of Qt(e)){if(en(s)&&s.feature.toLowerCase()==="name")return n.set(t,s),s;if(Tn(s)&&tt(s.rule.ref))return i(s,s.rule.ref);if(OT(s)&&(!((r=s.typeRef)===null||r===void 0)&&r.ref))return i(s,s.typeRef.ref)}}function is(t,e){return t==="?"||t==="*"||or(e)&&!!e.guardCondition}function sR(t){return t==="*"||t==="+"}function Ly(t){return My(t,new Set)}function My(t,e){if(e.has(t))return!0;e.add(t);for(const n of Qt(t))if(Tn(n)){if(!n.rule.ref||tt(n.rule.ref)&&!My(n.rule.ref,e))return!1}else{if(en(n))return!1;if(Rs(n))return!1}return!!t.definition}function bs(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){const e=t.returnType.ref;if(e){if(tt(e))return e.name;if(Ty(e)||Ry(e))return e.name}}}function tl(t){var e;if(tt(t))return Ly(t)?t.name:(e=bs(t))!==null&&e!==void 0?e:t.name;if(Ty(t)||Ry(t)||DT(t))return t.name;if(Rs(t)){const n=oR(t);if(n)return n}else if(_y(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function oR(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return tl(t.type.ref)}function aR(t){var e,n,r;return zn(t)?(n=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&n!==void 0?n:"string":(r=bs(t))!==null&&r!==void 0?r:t.name}function nl(t){const e={s:!1,i:!1,u:!1},n=Vr(t.definition,e),r=Object.entries(e).filter(([,i])=>i).map(([i])=>i).join("");return new RegExp(n,r)}const Wf=/[\s\S]/.source;function Vr(t,e){if(HT(t))return cR(t);if(jT(t))return lR(t);if(xT(t))return fR(t);if(qT(t)){const n=t.rule.ref;if(!n)throw new Error("Missing rule reference.");return yn(Vr(n.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(MT(t))return dR(t);if(UT(t))return uR(t);if(FT(t)){const n=t.regex.lastIndexOf("/"),r=t.regex.substring(1,n),i=t.regex.substring(n+1);return e&&(e.i=i.includes("i"),e.s=i.includes("s"),e.u=i.includes("u")),yn(r,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(BT(t))return yn(Wf,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t==null?void 0:t.$type}`)}}}function cR(t){return yn(t.elements.map(e=>Vr(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function lR(t){return yn(t.elements.map(e=>Vr(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function uR(t){return yn(`${Wf}*?${Vr(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function dR(t){return yn(`(?!${Vr(t.terminal)})${Wf}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function fR(t){return t.right?yn(`[${Ql(t.left)}-${Ql(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):yn(Ql(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Ql(t){return el(t.value)}function yn(t,e){var n;return(e.wrap!==!1||e.lookahead)&&(t=`(${(n=e.lookahead)!==null&&n!==void 0?n:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function hR(t){const e=[],n=t.Grammar;for(const r of n.rules)zn(r)&&nR(r)&&JT(nl(r))&&e.push(r.name);return{multilineCommentRules:e,nameRegexp:hy}}var Fy=typeof global=="object"&&global&&global.Object===Object&&global,pR=typeof self=="object"&&self&&self.Object===Object&&self,sn=Fy||pR||Function("return this")(),Nt=sn.Symbol,Hy=Object.prototype,mR=Hy.hasOwnProperty,gR=Hy.toString,di=Nt?Nt.toStringTag:void 0;function yR(t){var e=mR.call(t,di),n=t[di];try{t[di]=void 0;var r=!0}catch{}var i=gR.call(t);return r&&(e?t[di]=n:delete t[di]),i}var vR=Object.prototype,_R=vR.toString;function TR(t){return _R.call(t)}var RR="[object Null]",wR="[object Undefined]",Mh=Nt?Nt.toStringTag:void 0;function Vn(t){return t==null?t===void 0?wR:RR:Mh&&Mh in Object(t)?yR(t):TR(t)}function qt(t){return t!=null&&typeof t=="object"}var bR="[object Symbol]";function ks(t){return typeof t=="symbol"||qt(t)&&Vn(t)==bR}function rl(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var ee=Array.isArray,Fh=Nt?Nt.prototype:void 0,Hh=Fh?Fh.toString:void 0;function jy(t){if(typeof t=="string")return t;if(ee(t))return rl(t,jy)+"";if(ks(t))return Hh?Hh.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}var kR=/\s/;function SR(t){for(var e=t.length;e--&&kR.test(t.charAt(e)););return e}var CR=/^\s+/;function $R(t){return t&&t.slice(0,SR(t)+1).replace(CR,"")}function It(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var jh=NaN,ER=/^[-+]0x[0-9a-f]+$/i,PR=/^0b[01]+$/i,AR=/^0o[0-7]+$/i,NR=parseInt;function IR(t){if(typeof t=="number")return t;if(ks(t))return jh;if(It(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=It(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=$R(t);var n=PR.test(t);return n||AR.test(t)?NR(t.slice(2),n?2:8):ER.test(t)?jh:+t}var qh=1/0,DR=17976931348623157e292;function OR(t){if(!t)return t===0?t:0;if(t=IR(t),t===qh||t===-qh){var e=t<0?-1:1;return e*DR}return t===t?t:0}function il(t){var e=OR(t),n=e%1;return e===e?n?e-n:e:0}function ar(t){return t}var xR="[object AsyncFunction]",LR="[object Function]",MR="[object GeneratorFunction]",FR="[object Proxy]";function Cn(t){if(!It(t))return!1;var e=Vn(t);return e==LR||e==MR||e==xR||e==FR}var Zl=sn["__core-js_shared__"],Uh=function(){var t=/[^.]+$/.exec(Zl&&Zl.keys&&Zl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function HR(t){return!!Uh&&Uh in t}var jR=Function.prototype,qR=jR.toString;function hr(t){if(t!=null){try{return qR.call(t)}catch{}try{return t+""}catch{}}return""}var UR=/[\\^$.*+?()[\]{}|]/g,BR=/^\[object .+?Constructor\]$/,KR=Function.prototype,WR=Object.prototype,GR=KR.toString,zR=WR.hasOwnProperty,VR=RegExp("^"+GR.call(zR).replace(UR,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function YR(t){if(!It(t)||HR(t))return!1;var e=Cn(t)?VR:BR;return e.test(hr(t))}function XR(t,e){return t==null?void 0:t[e]}function pr(t,e){var n=XR(t,e);return YR(n)?n:void 0}var sd=pr(sn,"WeakMap"),Bh=Object.create,JR=function(){function t(){}return function(e){if(!It(e))return{};if(Bh)return Bh(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function QR(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function qe(){}function ZR(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}var ew=800,tw=16,nw=Date.now;function rw(t){var e=0,n=0;return function(){var r=nw(),i=tw-(r-n);if(n=r,i>0){if(++e>=ew)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function iw(t){return function(){return t}}var vc=function(){try{var t=pr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),sw=vc?function(t,e){return vc(t,"toString",{configurable:!0,enumerable:!1,value:iw(e),writable:!0})}:ar,ow=rw(sw);function qy(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}function Uy(t,e,n,r){for(var i=t.length,s=n+-1;++s<i;)if(e(t[s],s,t))return s;return-1}function aw(t){return t!==t}function cw(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Gf(t,e,n){return e===e?cw(t,e,n):Uy(t,aw,n)}function By(t,e){var n=t==null?0:t.length;return!!n&&Gf(t,e,0)>-1}var lw=9007199254740991,uw=/^(?:0|[1-9]\d*)$/;function sl(t,e){var n=typeof t;return e=e??lw,!!e&&(n=="number"||n!="symbol"&&uw.test(t))&&t>-1&&t%1==0&&t<e}function zf(t,e,n){e=="__proto__"&&vc?vc(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Ss(t,e){return t===e||t!==t&&e!==e}var dw=Object.prototype,fw=dw.hasOwnProperty;function ol(t,e,n){var r=t[e];(!(fw.call(t,e)&&Ss(r,n))||n===void 0&&!(e in t))&&zf(t,e,n)}function Cs(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],c=void 0;c===void 0&&(c=t[a]),i?zf(n,a,c):ol(n,a,c)}return n}var Kh=Math.max;function hw(t,e,n){return e=Kh(e===void 0?t.length-1:e,0),function(){for(var r=arguments,i=-1,s=Kh(r.length-e,0),o=Array(s);++i<s;)o[i]=r[e+i];i=-1;for(var a=Array(e+1);++i<e;)a[i]=r[i];return a[e]=n(o),QR(t,this,a)}}function Vf(t,e){return ow(hw(t,e,ar),t+"")}var pw=9007199254740991;function Yf(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=pw}function on(t){return t!=null&&Yf(t.length)&&!Cn(t)}function Ky(t,e,n){if(!It(n))return!1;var r=typeof e;return(r=="number"?on(n)&&sl(e,n.length):r=="string"&&e in n)?Ss(n[e],t):!1}function mw(t){return Vf(function(e,n){var r=-1,i=n.length,s=i>1?n[i-1]:void 0,o=i>2?n[2]:void 0;for(s=t.length>3&&typeof s=="function"?(i--,s):void 0,o&&Ky(n[0],n[1],o)&&(s=i<3?void 0:s,i=1),e=Object(e);++r<i;){var a=n[r];a&&t(e,a,r,s)}return e})}var gw=Object.prototype;function $s(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||gw;return t===n}function yw(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var vw="[object Arguments]";function Wh(t){return qt(t)&&Vn(t)==vw}var Wy=Object.prototype,_w=Wy.hasOwnProperty,Tw=Wy.propertyIsEnumerable,al=Wh(function(){return arguments}())?Wh:function(t){return qt(t)&&_w.call(t,"callee")&&!Tw.call(t,"callee")};function Rw(){return!1}var Gy=typeof vt=="object"&&vt&&!vt.nodeType&&vt,Gh=Gy&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,ww=Gh&&Gh.exports===Gy,zh=ww?sn.Buffer:void 0,bw=zh?zh.isBuffer:void 0,ss=bw||Rw,kw="[object Arguments]",Sw="[object Array]",Cw="[object Boolean]",$w="[object Date]",Ew="[object Error]",Pw="[object Function]",Aw="[object Map]",Nw="[object Number]",Iw="[object Object]",Dw="[object RegExp]",Ow="[object Set]",xw="[object String]",Lw="[object WeakMap]",Mw="[object ArrayBuffer]",Fw="[object DataView]",Hw="[object Float32Array]",jw="[object Float64Array]",qw="[object Int8Array]",Uw="[object Int16Array]",Bw="[object Int32Array]",Kw="[object Uint8Array]",Ww="[object Uint8ClampedArray]",Gw="[object Uint16Array]",zw="[object Uint32Array]",me={};me[Hw]=me[jw]=me[qw]=me[Uw]=me[Bw]=me[Kw]=me[Ww]=me[Gw]=me[zw]=!0;me[kw]=me[Sw]=me[Mw]=me[Cw]=me[Fw]=me[$w]=me[Ew]=me[Pw]=me[Aw]=me[Nw]=me[Iw]=me[Dw]=me[Ow]=me[xw]=me[Lw]=!1;function Vw(t){return qt(t)&&Yf(t.length)&&!!me[Vn(t)]}function cl(t){return function(e){return t(e)}}var zy=typeof vt=="object"&&vt&&!vt.nodeType&&vt,ns=zy&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,Yw=ns&&ns.exports===zy,eu=Yw&&Fy.process,qn=function(){try{var t=ns&&ns.require&&ns.require("util").types;return t||eu&&eu.binding&&eu.binding("util")}catch{}}(),Vh=qn&&qn.isTypedArray,Xf=Vh?cl(Vh):Vw,Xw=Object.prototype,Jw=Xw.hasOwnProperty;function Vy(t,e){var n=ee(t),r=!n&&al(t),i=!n&&!r&&ss(t),s=!n&&!r&&!i&&Xf(t),o=n||r||i||s,a=o?yw(t.length,String):[],c=a.length;for(var l in t)(e||Jw.call(t,l))&&!(o&&(l=="length"||i&&(l=="offset"||l=="parent")||s&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||sl(l,c)))&&a.push(l);return a}function Yy(t,e){return function(n){return t(e(n))}}var Qw=Yy(Object.keys,Object),Zw=Object.prototype,eb=Zw.hasOwnProperty;function Xy(t){if(!$s(t))return Qw(t);var e=[];for(var n in Object(t))eb.call(t,n)&&n!="constructor"&&e.push(n);return e}function Dt(t){return on(t)?Vy(t):Xy(t)}var tb=Object.prototype,nb=tb.hasOwnProperty,Rt=mw(function(t,e){if($s(e)||on(e)){Cs(e,Dt(e),t);return}for(var n in e)nb.call(e,n)&&ol(t,n,e[n])});function rb(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var ib=Object.prototype,sb=ib.hasOwnProperty;function ob(t){if(!It(t))return rb(t);var e=$s(t),n=[];for(var r in t)r=="constructor"&&(e||!sb.call(t,r))||n.push(r);return n}function Jf(t){return on(t)?Vy(t,!0):ob(t)}var ab=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cb=/^\w*$/;function Qf(t,e){if(ee(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||ks(t)?!0:cb.test(t)||!ab.test(t)||e!=null&&t in Object(e)}var os=pr(Object,"create");function lb(){this.__data__=os?os(null):{},this.size=0}function ub(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var db="__lodash_hash_undefined__",fb=Object.prototype,hb=fb.hasOwnProperty;function pb(t){var e=this.__data__;if(os){var n=e[t];return n===db?void 0:n}return hb.call(e,t)?e[t]:void 0}var mb=Object.prototype,gb=mb.hasOwnProperty;function yb(t){var e=this.__data__;return os?e[t]!==void 0:gb.call(e,t)}var vb="__lodash_hash_undefined__";function _b(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=os&&e===void 0?vb:e,this}function cr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}cr.prototype.clear=lb;cr.prototype.delete=ub;cr.prototype.get=pb;cr.prototype.has=yb;cr.prototype.set=_b;function Tb(){this.__data__=[],this.size=0}function ll(t,e){for(var n=t.length;n--;)if(Ss(t[n][0],e))return n;return-1}var Rb=Array.prototype,wb=Rb.splice;function bb(t){var e=this.__data__,n=ll(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():wb.call(e,n,1),--this.size,!0}function kb(t){var e=this.__data__,n=ll(e,t);return n<0?void 0:e[n][1]}function Sb(t){return ll(this.__data__,t)>-1}function Cb(t,e){var n=this.__data__,r=ll(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function $n(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}$n.prototype.clear=Tb;$n.prototype.delete=bb;$n.prototype.get=kb;$n.prototype.has=Sb;$n.prototype.set=Cb;var as=pr(sn,"Map");function $b(){this.size=0,this.__data__={hash:new cr,map:new(as||$n),string:new cr}}function Eb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ul(t,e){var n=t.__data__;return Eb(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Pb(t){var e=ul(this,t).delete(t);return this.size-=e?1:0,e}function Ab(t){return ul(this,t).get(t)}function Nb(t){return ul(this,t).has(t)}function Ib(t,e){var n=ul(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function En(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}En.prototype.clear=$b;En.prototype.delete=Pb;En.prototype.get=Ab;En.prototype.has=Nb;En.prototype.set=Ib;var Db="Expected a function";function Zf(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Db);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(Zf.Cache||En),n}Zf.Cache=En;var Ob=500;function xb(t){var e=Zf(t,function(r){return n.size===Ob&&n.clear(),r}),n=e.cache;return e}var Lb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mb=/\\(\\)?/g,Fb=xb(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Lb,function(n,r,i,s){e.push(i?s.replace(Mb,"$1"):r||n)}),e});function Hb(t){return t==null?"":jy(t)}function dl(t,e){return ee(t)?t:Qf(t,e)?[t]:Fb(Hb(t))}function Es(t){if(typeof t=="string"||ks(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function eh(t,e){e=dl(e,t);for(var n=0,r=e.length;t!=null&&n<r;)t=t[Es(e[n++])];return n&&n==r?t:void 0}function jb(t,e,n){var r=t==null?void 0:eh(t,e);return r===void 0?n:r}function th(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var Yh=Nt?Nt.isConcatSpreadable:void 0;function qb(t){return ee(t)||al(t)||!!(Yh&&t&&t[Yh])}function nh(t,e,n,r,i){var s=-1,o=t.length;for(n||(n=qb),i||(i=[]);++s<o;){var a=t[s];n(a)?th(i,a):r||(i[i.length]=a)}return i}function Pt(t){var e=t==null?0:t.length;return e?nh(t):[]}var Jy=Yy(Object.getPrototypeOf,Object);function Qy(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}function Ub(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}function Bb(){this.__data__=new $n,this.size=0}function Kb(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function Wb(t){return this.__data__.get(t)}function Gb(t){return this.__data__.has(t)}var zb=200;function Vb(t,e){var n=this.__data__;if(n instanceof $n){var r=n.__data__;if(!as||r.length<zb-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new En(r)}return n.set(t,e),this.size=n.size,this}function Zt(t){var e=this.__data__=new $n(t);this.size=e.size}Zt.prototype.clear=Bb;Zt.prototype.delete=Kb;Zt.prototype.get=Wb;Zt.prototype.has=Gb;Zt.prototype.set=Vb;function Yb(t,e){return t&&Cs(e,Dt(e),t)}function Xb(t,e){return t&&Cs(e,Jf(e),t)}var Zy=typeof vt=="object"&&vt&&!vt.nodeType&&vt,Xh=Zy&&typeof _t=="object"&&_t&&!_t.nodeType&&_t,Jb=Xh&&Xh.exports===Zy,Jh=Jb?sn.Buffer:void 0,Qh=Jh?Jh.allocUnsafe:void 0;function Qb(t,e){var n=t.length,r=Qh?Qh(n):new t.constructor(n);return t.copy(r),r}function rh(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function ev(){return[]}var Zb=Object.prototype,ek=Zb.propertyIsEnumerable,Zh=Object.getOwnPropertySymbols,ih=Zh?function(t){return t==null?[]:(t=Object(t),rh(Zh(t),function(e){return ek.call(t,e)}))}:ev;function tk(t,e){return Cs(t,ih(t),e)}var nk=Object.getOwnPropertySymbols,tv=nk?function(t){for(var e=[];t;)th(e,ih(t)),t=Jy(t);return e}:ev;function rk(t,e){return Cs(t,tv(t),e)}function nv(t,e,n){var r=e(t);return ee(t)?r:th(r,n(t))}function od(t){return nv(t,Dt,ih)}function ik(t){return nv(t,Jf,tv)}var ad=pr(sn,"DataView"),cd=pr(sn,"Promise"),Cr=pr(sn,"Set"),ep="[object Map]",sk="[object Object]",tp="[object Promise]",np="[object Set]",rp="[object WeakMap]",ip="[object DataView]",ok=hr(ad),ak=hr(as),ck=hr(cd),lk=hr(Cr),uk=hr(sd),Ct=Vn;(ad&&Ct(new ad(new ArrayBuffer(1)))!=ip||as&&Ct(new as)!=ep||cd&&Ct(cd.resolve())!=tp||Cr&&Ct(new Cr)!=np||sd&&Ct(new sd)!=rp)&&(Ct=function(t){var e=Vn(t),n=e==sk?t.constructor:void 0,r=n?hr(n):"";if(r)switch(r){case ok:return ip;case ak:return ep;case ck:return tp;case lk:return np;case uk:return rp}return e});var dk=Object.prototype,fk=dk.hasOwnProperty;function hk(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&fk.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var _c=sn.Uint8Array;function pk(t){var e=new t.constructor(t.byteLength);return new _c(e).set(new _c(t)),e}function mk(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var gk=/\w*$/;function yk(t){var e=new t.constructor(t.source,gk.exec(t));return e.lastIndex=t.lastIndex,e}var sp=Nt?Nt.prototype:void 0,op=sp?sp.valueOf:void 0;function vk(t){return op?Object(op.call(t)):{}}function _k(t,e){var n=t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var Tk="[object Boolean]",Rk="[object Date]",wk="[object Map]",bk="[object Number]",kk="[object RegExp]",Sk="[object Set]",Ck="[object String]",$k="[object Symbol]",Ek="[object ArrayBuffer]",Pk="[object DataView]",Ak="[object Float32Array]",Nk="[object Float64Array]",Ik="[object Int8Array]",Dk="[object Int16Array]",Ok="[object Int32Array]",xk="[object Uint8Array]",Lk="[object Uint8ClampedArray]",Mk="[object Uint16Array]",Fk="[object Uint32Array]";function Hk(t,e,n){var r=t.constructor;switch(e){case Ek:return pk(t);case Tk:case Rk:return new r(+t);case Pk:return mk(t);case Ak:case Nk:case Ik:case Dk:case Ok:case xk:case Lk:case Mk:case Fk:return _k(t);case wk:return new r;case bk:case Ck:return new r(t);case kk:return yk(t);case Sk:return new r;case $k:return vk(t)}}function jk(t){return typeof t.constructor=="function"&&!$s(t)?JR(Jy(t)):{}}var qk="[object Map]";function Uk(t){return qt(t)&&Ct(t)==qk}var ap=qn&&qn.isMap,Bk=ap?cl(ap):Uk,Kk="[object Set]";function Wk(t){return qt(t)&&Ct(t)==Kk}var cp=qn&&qn.isSet,Gk=cp?cl(cp):Wk,zk=2,rv="[object Arguments]",Vk="[object Array]",Yk="[object Boolean]",Xk="[object Date]",Jk="[object Error]",iv="[object Function]",Qk="[object GeneratorFunction]",Zk="[object Map]",eS="[object Number]",sv="[object Object]",tS="[object RegExp]",nS="[object Set]",rS="[object String]",iS="[object Symbol]",sS="[object WeakMap]",oS="[object ArrayBuffer]",aS="[object DataView]",cS="[object Float32Array]",lS="[object Float64Array]",uS="[object Int8Array]",dS="[object Int16Array]",fS="[object Int32Array]",hS="[object Uint8Array]",pS="[object Uint8ClampedArray]",mS="[object Uint16Array]",gS="[object Uint32Array]",fe={};fe[rv]=fe[Vk]=fe[oS]=fe[aS]=fe[Yk]=fe[Xk]=fe[cS]=fe[lS]=fe[uS]=fe[dS]=fe[fS]=fe[Zk]=fe[eS]=fe[sv]=fe[tS]=fe[nS]=fe[rS]=fe[iS]=fe[hS]=fe[pS]=fe[mS]=fe[gS]=!0;fe[Jk]=fe[iv]=fe[sS]=!1;function rc(t,e,n,r,i,s){var o,a=e&zk;if(o!==void 0)return o;if(!It(t))return t;var c=ee(t);if(c)return o=hk(t),ZR(t,o);var l=Ct(t),u=l==iv||l==Qk;if(ss(t))return Qb(t);if(l==sv||l==rv||u&&!i)return o=u?{}:jk(t),a?rk(t,Xb(o,t)):tk(t,Yb(o,t));if(!fe[l])return i?t:{};o=Hk(t,l),s||(s=new Zt);var f=s.get(t);if(f)return f;s.set(t,o),Gk(t)?t.forEach(function(d){o.add(rc(d,e,n,d,t,s))}):Bk(t)&&t.forEach(function(d,y){o.set(y,rc(d,e,n,y,t,s))});var h=od,p=c?void 0:h(t);return qy(p||t,function(d,y){p&&(y=d,d=t[y]),ol(o,y,rc(d,e,n,y,t,s))}),o}var yS=4;function Qe(t){return rc(t,yS)}function Ps(t){for(var e=-1,n=t==null?0:t.length,r=0,i=[];++e<n;){var s=t[e];s&&(i[r++]=s)}return i}var vS="__lodash_hash_undefined__";function _S(t){return this.__data__.set(t,vS),this}function TS(t){return this.__data__.has(t)}function Ar(t){var e=-1,n=t==null?0:t.length;for(this.__data__=new En;++e<n;)this.add(t[e])}Ar.prototype.add=Ar.prototype.push=_S;Ar.prototype.has=TS;function ov(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function sh(t,e){return t.has(e)}var RS=1,wS=2;function av(t,e,n,r,i,s){var o=n&RS,a=t.length,c=e.length;if(a!=c&&!(o&&c>a))return!1;var l=s.get(t),u=s.get(e);if(l&&u)return l==e&&u==t;var f=-1,h=!0,p=n&wS?new Ar:void 0;for(s.set(t,e),s.set(e,t);++f<a;){var d=t[f],y=e[f];if(r)var w=o?r(y,d,f,e,t,s):r(d,y,f,t,e,s);if(w!==void 0){if(w)continue;h=!1;break}if(p){if(!ov(e,function(_,m){if(!sh(p,m)&&(d===_||i(d,_,n,r,s)))return p.push(m)})){h=!1;break}}else if(!(d===y||i(d,y,n,r,s))){h=!1;break}}return s.delete(t),s.delete(e),h}function bS(t){var e=-1,n=Array(t.size);return t.forEach(function(r,i){n[++e]=[i,r]}),n}function oh(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var kS=1,SS=2,CS="[object Boolean]",$S="[object Date]",ES="[object Error]",PS="[object Map]",AS="[object Number]",NS="[object RegExp]",IS="[object Set]",DS="[object String]",OS="[object Symbol]",xS="[object ArrayBuffer]",LS="[object DataView]",lp=Nt?Nt.prototype:void 0,tu=lp?lp.valueOf:void 0;function MS(t,e,n,r,i,s,o){switch(n){case LS:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case xS:return!(t.byteLength!=e.byteLength||!s(new _c(t),new _c(e)));case CS:case $S:case AS:return Ss(+t,+e);case ES:return t.name==e.name&&t.message==e.message;case NS:case DS:return t==e+"";case PS:var a=bS;case IS:var c=r&kS;if(a||(a=oh),t.size!=e.size&&!c)return!1;var l=o.get(t);if(l)return l==e;r|=SS,o.set(t,e);var u=av(a(t),a(e),r,i,s,o);return o.delete(t),u;case OS:if(tu)return tu.call(t)==tu.call(e)}return!1}var FS=1,HS=Object.prototype,jS=HS.hasOwnProperty;function qS(t,e,n,r,i,s){var o=n&FS,a=od(t),c=a.length,l=od(e),u=l.length;if(c!=u&&!o)return!1;for(var f=c;f--;){var h=a[f];if(!(o?h in e:jS.call(e,h)))return!1}var p=s.get(t),d=s.get(e);if(p&&d)return p==e&&d==t;var y=!0;s.set(t,e),s.set(e,t);for(var w=o;++f<c;){h=a[f];var _=t[h],m=e[h];if(r)var g=o?r(m,_,h,e,t,s):r(_,m,h,t,e,s);if(!(g===void 0?_===m||i(_,m,n,r,s):g)){y=!1;break}w||(w=h=="constructor")}if(y&&!w){var b=t.constructor,F=e.constructor;b!=F&&"constructor"in t&&"constructor"in e&&!(typeof b=="function"&&b instanceof b&&typeof F=="function"&&F instanceof F)&&(y=!1)}return s.delete(t),s.delete(e),y}var US=1,up="[object Arguments]",dp="[object Array]",ho="[object Object]",BS=Object.prototype,fp=BS.hasOwnProperty;function KS(t,e,n,r,i,s){var o=ee(t),a=ee(e),c=o?dp:Ct(t),l=a?dp:Ct(e);c=c==up?ho:c,l=l==up?ho:l;var u=c==ho,f=l==ho,h=c==l;if(h&&ss(t)){if(!ss(e))return!1;o=!0,u=!1}if(h&&!u)return s||(s=new Zt),o||Xf(t)?av(t,e,n,r,i,s):MS(t,e,c,n,r,i,s);if(!(n&US)){var p=u&&fp.call(t,"__wrapped__"),d=f&&fp.call(e,"__wrapped__");if(p||d){var y=p?t.value():t,w=d?e.value():e;return s||(s=new Zt),i(y,w,n,r,s)}}return h?(s||(s=new Zt),qS(t,e,n,r,i,s)):!1}function ah(t,e,n,r,i){return t===e?!0:t==null||e==null||!qt(t)&&!qt(e)?t!==t&&e!==e:KS(t,e,n,r,ah,i)}var WS=1,GS=2;function zS(t,e,n,r){var i=n.length,s=i;if(t==null)return!s;for(t=Object(t);i--;){var o=n[i];if(o[2]?o[1]!==t[o[0]]:!(o[0]in t))return!1}for(;++i<s;){o=n[i];var a=o[0],c=t[a],l=o[1];if(o[2]){if(c===void 0&&!(a in t))return!1}else{var u=new Zt,f;if(!(f===void 0?ah(l,c,WS|GS,r,u):f))return!1}}return!0}function cv(t){return t===t&&!It(t)}function VS(t){for(var e=Dt(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,cv(i)]}return e}function lv(t,e){return function(n){return n==null?!1:n[t]===e&&(e!==void 0||t in Object(n))}}function YS(t){var e=VS(t);return e.length==1&&e[0][2]?lv(e[0][0],e[0][1]):function(n){return n===t||zS(n,t,e)}}function XS(t,e){return t!=null&&e in Object(t)}function uv(t,e,n){e=dl(e,t);for(var r=-1,i=e.length,s=!1;++r<i;){var o=Es(e[r]);if(!(s=t!=null&&n(t,o)))break;t=t[o]}return s||++r!=i?s:(i=t==null?0:t.length,!!i&&Yf(i)&&sl(o,i)&&(ee(t)||al(t)))}function JS(t,e){return t!=null&&uv(t,e,XS)}var QS=1,ZS=2;function eC(t,e){return Qf(t)&&cv(e)?lv(Es(t),e):function(n){var r=jb(n,t);return r===void 0&&r===e?JS(n,t):ah(e,r,QS|ZS)}}function tC(t){return function(e){return e==null?void 0:e[t]}}function nC(t){return function(e){return eh(e,t)}}function rC(t){return Qf(t)?tC(Es(t)):nC(t)}function Bt(t){return typeof t=="function"?t:t==null?ar:typeof t=="object"?ee(t)?eC(t[0],t[1]):YS(t):rC(t)}function iC(t,e,n,r){for(var i=-1,s=t==null?0:t.length;++i<s;){var o=t[i];e(r,o,n(o),t)}return r}function sC(t){return function(e,n,r){for(var i=-1,s=Object(e),o=r(e),a=o.length;a--;){var c=o[++i];if(n(s[c],c,s)===!1)break}return e}}var oC=sC();function aC(t,e){return t&&oC(t,e,Dt)}function cC(t,e){return function(n,r){if(n==null)return n;if(!on(n))return t(n,r);for(var i=n.length,s=-1,o=Object(n);++s<i&&r(o[s],s,o)!==!1;);return n}}var mr=cC(aC);function lC(t,e,n,r){return mr(t,function(i,s,o){e(r,i,n(i),o)}),r}function uC(t,e){return function(n,r){var i=ee(n)?iC:lC,s=e?e():{};return i(n,t,Bt(r),s)}}var dv=Object.prototype,dC=dv.hasOwnProperty,ch=Vf(function(t,e){t=Object(t);var n=-1,r=e.length,i=r>2?e[2]:void 0;for(i&&Ky(e[0],e[1],i)&&(r=1);++n<r;)for(var s=e[n],o=Jf(s),a=-1,c=o.length;++a<c;){var l=o[a],u=t[l];(u===void 0||Ss(u,dv[l])&&!dC.call(t,l))&&(t[l]=s[l])}return t});function hp(t){return qt(t)&&on(t)}var fC=200;function hC(t,e,n,r){var i=-1,s=By,o=!0,a=t.length,c=[],l=e.length;if(!a)return c;e.length>=fC&&(s=sh,o=!1,e=new Ar(e));e:for(;++i<a;){var u=t[i],f=u;if(u=u!==0?u:0,o&&f===f){for(var h=l;h--;)if(e[h]===f)continue e;c.push(u)}else s(e,f,r)||c.push(u)}return c}var fl=Vf(function(t,e){return hp(t)?hC(t,nh(e,1,hp,!0)):[]});function Nr(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}function ze(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:il(e),Qy(t,e<0?0:e,r)):[]}function cs(t,e,n){var r=t==null?0:t.length;return r?(e=e===void 0?1:il(e),e=r-e,Qy(t,0,e<0?0:e)):[]}function pC(t){return typeof t=="function"?t:ar}function U(t,e){var n=ee(t)?qy:mr;return n(t,pC(e))}function mC(t,e){for(var n=-1,r=t==null?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function gC(t,e){var n=!0;return mr(t,function(r,i,s){return n=!!e(r,i,s),n}),n}function Ht(t,e,n){var r=ee(t)?mC:gC;return r(t,Bt(e))}function fv(t,e){var n=[];return mr(t,function(r,i,s){e(r,i,s)&&n.push(r)}),n}function wt(t,e){var n=ee(t)?rh:fv;return n(t,Bt(e))}function yC(t){return function(e,n,r){var i=Object(e);if(!on(e)){var s=Bt(n);e=Dt(e),n=function(a){return s(i[a],a,i)}}var o=t(e,n,r);return o>-1?i[s?e[o]:o]:void 0}}var vC=Math.max;function _C(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=n==null?0:il(n);return i<0&&(i=vC(r+i,0)),Uy(t,Bt(e),i)}var Ir=yC(_C);function Ut(t){return t&&t.length?t[0]:void 0}function TC(t,e){var n=-1,r=on(t)?Array(t.length):[];return mr(t,function(i,s,o){r[++n]=e(i,s,o)}),r}function M(t,e){var n=ee(t)?rl:TC;return n(t,Bt(e))}function Tt(t,e){return nh(M(t,e))}var RC=Object.prototype,wC=RC.hasOwnProperty,bC=uC(function(t,e,n){wC.call(t,n)?t[n].push(e):zf(t,n,[e])}),kC=Object.prototype,SC=kC.hasOwnProperty;function CC(t,e){return t!=null&&SC.call(t,e)}function B(t,e){return t!=null&&uv(t,e,CC)}var $C="[object String]";function ft(t){return typeof t=="string"||!ee(t)&&qt(t)&&Vn(t)==$C}function EC(t,e){return rl(e,function(n){return t[n]})}function Ue(t){return t==null?[]:EC(t,Dt(t))}var PC=Math.max;function ct(t,e,n,r){t=on(t)?t:Ue(t),n=n?il(n):0;var i=t.length;return n<0&&(n=PC(i+n,0)),ft(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&Gf(t,e,n)>-1}function pp(t,e,n){var r=t==null?0:t.length;if(!r)return-1;var i=0;return Gf(t,e,i)}var AC="[object Map]",NC="[object Set]",IC=Object.prototype,DC=IC.hasOwnProperty;function le(t){if(t==null)return!0;if(on(t)&&(ee(t)||typeof t=="string"||typeof t.splice=="function"||ss(t)||Xf(t)||al(t)))return!t.length;var e=Ct(t);if(e==AC||e==NC)return!t.size;if($s(t))return!Xy(t).length;for(var n in t)if(DC.call(t,n))return!1;return!0}var OC="[object RegExp]";function xC(t){return qt(t)&&Vn(t)==OC}var mp=qn&&qn.isRegExp,Rn=mp?cl(mp):xC;function wn(t){return t===void 0}function LC(t,e){return t<e}function MC(t,e,n){for(var r=-1,i=t.length;++r<i;){var s=t[r],o=e(s);if(o!=null&&(a===void 0?o===o&&!ks(o):n(o,a)))var a=o,c=s}return c}function FC(t){return t&&t.length?MC(t,ar,LC):void 0}var HC="Expected a function";function jC(t){if(typeof t!="function")throw new TypeError(HC);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}function qC(t,e,n,r){if(!It(t))return t;e=dl(e,t);for(var i=-1,s=e.length,o=s-1,a=t;a!=null&&++i<s;){var c=Es(e[i]),l=n;if(c==="__proto__"||c==="constructor"||c==="prototype")return t;if(i!=o){var u=a[c];l=void 0,l===void 0&&(l=It(u)?u:sl(e[i+1])?[]:{})}ol(a,c,l),a=a[c]}return t}function UC(t,e,n){for(var r=-1,i=e.length,s={};++r<i;){var o=e[r],a=eh(t,o);n(a,o)&&qC(s,dl(o,t),a)}return s}function Kt(t,e){if(t==null)return{};var n=rl(ik(t),function(r){return[r]});return e=Bt(e),UC(t,n,function(r,i){return e(r,i[0])})}function BC(t,e,n,r,i){return i(t,function(s,o,a){n=r?(r=!1,s):e(n,s,o,a)}),n}function st(t,e,n){var r=ee(t)?Ub:BC,i=arguments.length<3;return r(t,Bt(e),n,i,mr)}function hl(t,e){var n=ee(t)?rh:fv;return n(t,jC(Bt(e)))}function KC(t,e){var n;return mr(t,function(r,i,s){return n=e(r,i,s),!n}),!!n}function hv(t,e,n){var r=ee(t)?ov:KC;return r(t,Bt(e))}var WC=1/0,GC=Cr&&1/oh(new Cr([,-0]))[1]==WC?function(t){return new Cr(t)}:qe,zC=200;function pv(t,e,n){var r=-1,i=By,s=t.length,o=!0,a=[],c=a;if(s>=zC){var l=e?null:GC(t);if(l)return oh(l);o=!1,i=sh,c=new Ar}else c=e?[]:a;e:for(;++r<s;){var u=t[r],f=e?e(u):u;if(u=u!==0?u:0,o&&f===f){for(var h=c.length;h--;)if(c[h]===f)continue e;e&&c.push(f),a.push(u)}else i(c,f,n)||(c!==a&&c.push(f),a.push(u))}return a}function lh(t){return t&&t.length?pv(t):[]}function VC(t,e){return t&&t.length?pv(t,Bt(e)):[]}function ld(t){console&&console.error&&console.error(`Error: ${t}`)}function mv(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function gv(t){const e=new Date().getTime(),n=t();return{time:new Date().getTime()-e,value:n}}function yv(t){function e(){}e.prototype=t;const n=new e;function r(){return typeof n.bar}return r(),r(),t}function YC(t){return XC(t)?t.LABEL:t.name}function XC(t){return ft(t.LABEL)&&t.LABEL!==""}class an{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),U(this.definition,n=>{n.accept(e)})}}class ot extends an{constructor(e){super([]),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}}class Yr extends an{constructor(e){super(e.definition),this.orgText="",Rt(this,Kt(e,n=>n!==void 0))}}class ht extends an{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Rt(this,Kt(e,n=>n!==void 0))}}class Je extends an{constructor(e){super(e.definition),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}}class bt extends an{constructor(e){super(e.definition),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}}class kt extends an{constructor(e){super(e.definition),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}}class $e extends an{constructor(e){super(e.definition),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}}class pt extends an{constructor(e){super(e.definition),this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}}class mt extends an{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Rt(this,Kt(e,n=>n!==void 0))}}class ge{constructor(e){this.idx=1,Rt(this,Kt(e,n=>n!==void 0))}accept(e){e.visit(this)}}function JC(t){return M(t,ic)}function ic(t){function e(n){return M(n,ic)}if(t instanceof ot){const n={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return ft(t.label)&&(n.label=t.label),n}else{if(t instanceof ht)return{type:"Alternative",definition:e(t.definition)};if(t instanceof Je)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof bt)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof kt)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:ic(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof pt)return{type:"RepetitionWithSeparator",idx:t.idx,separator:ic(new ge({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof $e)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof mt)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ge){const n={type:"Terminal",name:t.terminalType.name,label:YC(t.terminalType),idx:t.idx};ft(t.label)&&(n.terminalLabel=t.label);const r=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(n.pattern=Rn(r)?r.source:r),n}else{if(t instanceof Yr)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}class Xr{visit(e){const n=e;switch(n.constructor){case ot:return this.visitNonTerminal(n);case ht:return this.visitAlternative(n);case Je:return this.visitOption(n);case bt:return this.visitRepetitionMandatory(n);case kt:return this.visitRepetitionMandatoryWithSeparator(n);case pt:return this.visitRepetitionWithSeparator(n);case $e:return this.visitRepetition(n);case mt:return this.visitAlternation(n);case ge:return this.visitTerminal(n);case Yr:return this.visitRule(n);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}}function QC(t){return t instanceof ht||t instanceof Je||t instanceof $e||t instanceof bt||t instanceof kt||t instanceof pt||t instanceof ge||t instanceof Yr}function Tc(t,e=[]){return t instanceof Je||t instanceof $e||t instanceof pt?!0:t instanceof mt?hv(t.definition,r=>Tc(r,e)):t instanceof ot&&ct(e,t)?!1:t instanceof an?(t instanceof ot&&e.push(t),Ht(t.definition,r=>Tc(r,e))):!1}function ZC(t){return t instanceof mt}function Yt(t){if(t instanceof ot)return"SUBRULE";if(t instanceof Je)return"OPTION";if(t instanceof mt)return"OR";if(t instanceof bt)return"AT_LEAST_ONE";if(t instanceof kt)return"AT_LEAST_ONE_SEP";if(t instanceof pt)return"MANY_SEP";if(t instanceof $e)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}class pl{walk(e,n=[]){U(e.definition,(r,i)=>{const s=ze(e.definition,i+1);if(r instanceof ot)this.walkProdRef(r,s,n);else if(r instanceof ge)this.walkTerminal(r,s,n);else if(r instanceof ht)this.walkFlat(r,s,n);else if(r instanceof Je)this.walkOption(r,s,n);else if(r instanceof bt)this.walkAtLeastOne(r,s,n);else if(r instanceof kt)this.walkAtLeastOneSep(r,s,n);else if(r instanceof pt)this.walkManySep(r,s,n);else if(r instanceof $e)this.walkMany(r,s,n);else if(r instanceof mt)this.walkOr(r,s,n);else throw Error("non exhaustive match")})}walkTerminal(e,n,r){}walkProdRef(e,n,r){}walkFlat(e,n,r){const i=n.concat(r);this.walk(e,i)}walkOption(e,n,r){const i=n.concat(r);this.walk(e,i)}walkAtLeastOne(e,n,r){const i=[new Je({definition:e.definition})].concat(n,r);this.walk(e,i)}walkAtLeastOneSep(e,n,r){const i=gp(e,n,r);this.walk(e,i)}walkMany(e,n,r){const i=[new Je({definition:e.definition})].concat(n,r);this.walk(e,i)}walkManySep(e,n,r){const i=gp(e,n,r);this.walk(e,i)}walkOr(e,n,r){const i=n.concat(r);U(e.definition,s=>{const o=new ht({definition:[s]});this.walk(o,i)})}}function gp(t,e,n){return[new Je({definition:[new ge({terminalType:t.separator})].concat(t.definition)})].concat(e,n)}function As(t){if(t instanceof ot)return As(t.referencedRule);if(t instanceof ge)return n$(t);if(QC(t))return e$(t);if(ZC(t))return t$(t);throw Error("non exhaustive match")}function e$(t){let e=[];const n=t.definition;let r=0,i=n.length>r,s,o=!0;for(;i&&o;)s=n[r],o=Tc(s),e=e.concat(As(s)),r=r+1,i=n.length>r;return lh(e)}function t$(t){const e=M(t.definition,n=>As(n));return lh(Pt(e))}function n$(t){return[t.terminalType]}const vv="_~IN~_";class r$ extends pl{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,n,r){}walkProdRef(e,n,r){const i=s$(e.referencedRule,e.idx)+this.topProd.name,s=n.concat(r),o=new ht({definition:s}),a=As(o);this.follows[i]=a}}function i$(t){const e={};return U(t,n=>{const r=new r$(n).startWalking();Rt(e,r)}),e}function s$(t,e){return t.name+e+vv}let sc={};const o$=new Cy;function ml(t){const e=t.toString();if(sc.hasOwnProperty(e))return sc[e];{const n=o$.pattern(e);return sc[e]=n,n}}function a$(){sc={}}const _v="Complement Sets are not supported for first char optimization",Rc=`Unable to use "first char" lexer optimizations:
`;function c$(t,e=!1){try{const n=ml(t);return ud(n.value,{},n.flags.ignoreCase)}catch(n){if(n.message===_v)e&&mv(`${Rc}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let r="";e&&(r=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),ld(`${Rc}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+r)}}return[]}function ud(t,e,n){switch(t.type){case"Disjunction":for(let i=0;i<t.value.length;i++)ud(t.value[i],e,n);break;case"Alternative":const r=t.value;for(let i=0;i<r.length;i++){const s=r[i];switch(s.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}const o=s;switch(o.type){case"Character":po(o.value,e,n);break;case"Set":if(o.complement===!0)throw Error(_v);U(o.value,c=>{if(typeof c=="number")po(c,e,n);else{const l=c;if(n===!0)for(let u=l.from;u<=l.to;u++)po(u,e,n);else{for(let u=l.from;u<=l.to&&u<Yi;u++)po(u,e,n);if(l.to>=Yi){const u=l.from>=Yi?l.from:Yi,f=l.to,h=Un(u),p=Un(f);for(let d=h;d<=p;d++)e[d]=d}}}});break;case"Group":ud(o.value,e,n);break;default:throw Error("Non Exhaustive Match")}const a=o.quantifier!==void 0&&o.quantifier.atLeast===0;if(o.type==="Group"&&dd(o)===!1||o.type!=="Group"&&a===!1)break}break;default:throw Error("non exhaustive match!")}return Ue(e)}function po(t,e,n){const r=Un(t);e[r]=r,n===!0&&l$(t,e)}function l$(t,e){const n=String.fromCharCode(t),r=n.toUpperCase();if(r!==n){const i=Un(r.charCodeAt(0));e[i]=i}else{const i=n.toLowerCase();if(i!==n){const s=Un(i.charCodeAt(0));e[s]=s}}}function yp(t,e){return Ir(t.value,n=>{if(typeof n=="number")return ct(e,n);{const r=n;return Ir(e,i=>r.from<=i&&i<=r.to)!==void 0}})}function dd(t){const e=t.quantifier;return e&&e.atLeast===0?!0:t.value?ee(t.value)?Ht(t.value,dd):dd(t.value):!1}class u$ extends Zc{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){ct(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?yp(e,this.targetCharCodes)===void 0&&(this.found=!0):yp(e,this.targetCharCodes)!==void 0&&(this.found=!0)}}function uh(t,e){if(e instanceof RegExp){const n=ml(e),r=new u$(t);return r.visit(n),r.found}else return Ir(e,n=>ct(t,n.charCodeAt(0)))!==void 0}const lr="PATTERN",Vi="defaultMode",mo="modes";let Tv=typeof new RegExp("(?:)").sticky=="boolean";function d$(t,e){e=ch(e,{useSticky:Tv,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(m,g)=>g()});const n=e.tracer;n("initCharCodeToOptimizedIndexMap",()=>{O$()});let r;n("Reject Lexer.NA",()=>{r=hl(t,m=>m[lr]===dt.NA)});let i=!1,s;n("Transform Patterns",()=>{i=!1,s=M(r,m=>{const g=m[lr];if(Rn(g)){const b=g.source;return b.length===1&&b!=="^"&&b!=="$"&&b!=="."&&!g.ignoreCase?b:b.length===2&&b[0]==="\\"&&!ct(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],b[1])?b[1]:e.useSticky?_p(g):vp(g)}else{if(Cn(g))return i=!0,{exec:g};if(typeof g=="object")return i=!0,g;if(typeof g=="string"){if(g.length===1)return g;{const b=g.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),F=new RegExp(b);return e.useSticky?_p(F):vp(F)}}else throw Error("non exhaustive match")}})});let o,a,c,l,u;n("misc mapping",()=>{o=M(r,m=>m.tokenTypeIdx),a=M(r,m=>{const g=m.GROUP;if(g!==dt.SKIPPED){if(ft(g))return g;if(wn(g))return!1;throw Error("non exhaustive match")}}),c=M(r,m=>{const g=m.LONGER_ALT;if(g)return ee(g)?M(g,F=>pp(r,F)):[pp(r,g)]}),l=M(r,m=>m.PUSH_MODE),u=M(r,m=>B(m,"POP_MODE"))});let f;n("Line Terminator Handling",()=>{const m=bv(e.lineTerminatorCharacters);f=M(r,g=>!1),e.positionTracking!=="onlyOffset"&&(f=M(r,g=>B(g,"LINE_BREAKS")?!!g.LINE_BREAKS:wv(g,m)===!1&&uh(m,g.PATTERN)))});let h,p,d,y;n("Misc Mapping #2",()=>{h=M(r,Rv),p=M(s,N$),d=st(r,(m,g)=>{const b=g.GROUP;return ft(b)&&b!==dt.SKIPPED&&(m[b]=[]),m},{}),y=M(s,(m,g)=>({pattern:s[g],longerAlt:c[g],canLineTerminator:f[g],isCustom:h[g],short:p[g],group:a[g],push:l[g],pop:u[g],tokenTypeIdx:o[g],tokenType:r[g]}))});let w=!0,_=[];return e.safeMode||n("First Char Optimization",()=>{_=st(r,(m,g,b)=>{if(typeof g.PATTERN=="string"){const F=g.PATTERN.charCodeAt(0),W=Un(F);nu(m,W,y[b])}else if(ee(g.START_CHARS_HINT)){let F;U(g.START_CHARS_HINT,W=>{const X=typeof W=="string"?W.charCodeAt(0):W,ye=Un(X);F!==ye&&(F=ye,nu(m,ye,y[b]))})}else if(Rn(g.PATTERN))if(g.PATTERN.unicode)w=!1,e.ensureOptimizations&&ld(`${Rc}	Unable to analyze < ${g.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{const F=c$(g.PATTERN,e.ensureOptimizations);le(F)&&(w=!1),U(F,W=>{nu(m,W,y[b])})}else e.ensureOptimizations&&ld(`${Rc}	TokenType: <${g.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),w=!1;return m},[])}),{emptyGroups:d,patternIdxToConfig:y,charCodeToPatternIdxToConfig:_,hasCustom:i,canBeOptimized:w}}function f$(t,e){let n=[];const r=p$(t);n=n.concat(r.errors);const i=m$(r.valid),s=i.valid;return n=n.concat(i.errors),n=n.concat(h$(s)),n=n.concat(b$(s)),n=n.concat(k$(s,e)),n=n.concat(S$(s)),n}function h$(t){let e=[];const n=wt(t,r=>Rn(r[lr]));return e=e.concat(y$(n)),e=e.concat(T$(n)),e=e.concat(R$(n)),e=e.concat(w$(n)),e=e.concat(v$(n)),e}function p$(t){const e=wt(t,i=>!B(i,lr)),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- missing static 'PATTERN' property",type:Ee.MISSING_PATTERN,tokenTypes:[i]})),r=fl(t,e);return{errors:n,valid:r}}function m$(t){const e=wt(t,i=>{const s=i[lr];return!Rn(s)&&!Cn(s)&&!B(s,"exec")&&!ft(s)}),n=M(e,i=>({message:"Token Type: ->"+i.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ee.INVALID_PATTERN,tokenTypes:[i]})),r=fl(t,e);return{errors:n,valid:r}}const g$=/[^\\][$]/;function y$(t){class e extends Zc{constructor(){super(...arguments),this.found=!1}visitEndAnchor(s){this.found=!0}}const n=wt(t,i=>{const s=i.PATTERN;try{const o=ml(s),a=new e;return a.visit(o),a.found}catch{return g$.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ee.EOI_ANCHOR_FOUND,tokenTypes:[i]}))}function v$(t){const e=wt(t,r=>r.PATTERN.test(""));return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' must not match an empty string",type:Ee.EMPTY_MATCH_PATTERN,tokenTypes:[r]}))}const _$=/[^\\[][\^]|^\^/;function T$(t){class e extends Zc{constructor(){super(...arguments),this.found=!1}visitStartAnchor(s){this.found=!0}}const n=wt(t,i=>{const s=i.PATTERN;try{const o=ml(s),a=new e;return a.visit(o),a.found}catch{return _$.test(s.source)}});return M(n,i=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+i.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ee.SOI_ANCHOR_FOUND,tokenTypes:[i]}))}function R$(t){const e=wt(t,r=>{const i=r[lr];return i instanceof RegExp&&(i.multiline||i.global)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ee.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[r]}))}function w$(t){const e=[];let n=M(t,s=>st(t,(o,a)=>(s.PATTERN.source===a.PATTERN.source&&!ct(e,a)&&a.PATTERN!==dt.NA&&(e.push(a),o.push(a)),o),[]));n=Ps(n);const r=wt(n,s=>s.length>1);return M(r,s=>{const o=M(s,c=>c.name);return{message:`The same RegExp pattern ->${Ut(s).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,type:Ee.DUPLICATE_PATTERNS_FOUND,tokenTypes:s}})}function b$(t){const e=wt(t,r=>{if(!B(r,"GROUP"))return!1;const i=r.GROUP;return i!==dt.SKIPPED&&i!==dt.NA&&!ft(i)});return M(e,r=>({message:"Token Type: ->"+r.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ee.INVALID_GROUP_TYPE_FOUND,tokenTypes:[r]}))}function k$(t,e){const n=wt(t,i=>i.PUSH_MODE!==void 0&&!ct(e,i.PUSH_MODE));return M(n,i=>({message:`Token Type: ->${i.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${i.PUSH_MODE}<-which does not exist`,type:Ee.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[i]}))}function S$(t){const e=[],n=st(t,(r,i,s)=>{const o=i.PATTERN;return o===dt.NA||(ft(o)?r.push({str:o,idx:s,tokenType:i}):Rn(o)&&$$(o)&&r.push({str:o.source,idx:s,tokenType:i})),r},[]);return U(t,(r,i)=>{U(n,({str:s,idx:o,tokenType:a})=>{if(i<o&&C$(s,r.PATTERN)){const c=`Token: ->${a.name}<- can never be matched.
Because it appears AFTER the Token Type ->${r.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:c,type:Ee.UNREACHABLE_PATTERN,tokenTypes:[r,a]})}})}),e}function C$(t,e){if(Rn(e)){const n=e.exec(t);return n!==null&&n.index===0}else{if(Cn(e))return e(t,0,[],{});if(B(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function $$(t){return Ir([".","\\","[","]","|","^","$","(",")","?","*","+","{"],n=>t.source.indexOf(n)!==-1)===void 0}function vp(t){const e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function _p(t){const e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function E$(t,e,n){const r=[];return B(t,Vi)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+Vi+`> property in its definition
`,type:Ee.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),B(t,mo)||r.push({message:"A MultiMode Lexer cannot be initialized without a <"+mo+`> property in its definition
`,type:Ee.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),B(t,mo)&&B(t,Vi)&&!B(t.modes,t.defaultMode)&&r.push({message:`A MultiMode Lexer cannot be initialized with a ${Vi}: <${t.defaultMode}>which does not exist
`,type:Ee.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),B(t,mo)&&U(t.modes,(i,s)=>{U(i,(o,a)=>{if(wn(o))r.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${s}> at index: <${a}>
`,type:Ee.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(B(o,"LONGER_ALT")){const c=ee(o.LONGER_ALT)?o.LONGER_ALT:[o.LONGER_ALT];U(c,l=>{!wn(l)&&!ct(i,l)&&r.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${o.name}> outside of mode <${s}>
`,type:Ee.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),r}function P$(t,e,n){const r=[];let i=!1;const s=Ps(Pt(Ue(t.modes))),o=hl(s,c=>c[lr]===dt.NA),a=bv(n);return e&&U(o,c=>{const l=wv(c,a);if(l!==!1){const f={message:D$(c,l),type:l.issue,tokenType:c};r.push(f)}else B(c,"LINE_BREAKS")?c.LINE_BREAKS===!0&&(i=!0):uh(a,c.PATTERN)&&(i=!0)}),e&&!i&&r.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ee.NO_LINE_BREAKS_FLAGS}),r}function A$(t){const e={},n=Dt(t);return U(n,r=>{const i=t[r];if(ee(i))e[r]=[];else throw Error("non exhaustive match")}),e}function Rv(t){const e=t.PATTERN;if(Rn(e))return!1;if(Cn(e))return!0;if(B(e,"exec"))return!0;if(ft(e))return!1;throw Error("non exhaustive match")}function N$(t){return ft(t)&&t.length===1?t.charCodeAt(0):!1}const I$={test:function(t){const e=t.length;for(let n=this.lastIndex;n<e;n++){const r=t.charCodeAt(n);if(r===10)return this.lastIndex=n+1,!0;if(r===13)return t.charCodeAt(n+1)===10?this.lastIndex=n+2:this.lastIndex=n+1,!0}return!1},lastIndex:0};function wv(t,e){if(B(t,"LINE_BREAKS"))return!1;if(Rn(t.PATTERN)){try{uh(e,t.PATTERN)}catch(n){return{issue:Ee.IDENTIFY_TERMINATOR,errMsg:n.message}}return!1}else{if(ft(t.PATTERN))return!1;if(Rv(t))return{issue:Ee.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function D$(t,e){if(e.issue===Ee.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ee.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function bv(t){return M(t,n=>ft(n)?n.charCodeAt(0):n)}function nu(t,e,n){t[e]===void 0?t[e]=[n]:t[e].push(n)}const Yi=256;let oc=[];function Un(t){return t<Yi?t:oc[t]}function O$(){if(le(oc)){oc=new Array(65536);for(let t=0;t<65536;t++)oc[t]=t>255?255+~~(t/255):t}}function Ns(t,e){const n=t.tokenTypeIdx;return n===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[n]===!0}function wc(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}let Tp=1;const kv={};function Is(t){const e=x$(t);L$(e),F$(e),M$(e),U(e,n=>{n.isParent=n.categoryMatches.length>0})}function x$(t){let e=Qe(t),n=t,r=!0;for(;r;){n=Ps(Pt(M(n,s=>s.CATEGORIES)));const i=fl(n,e);e=e.concat(i),le(i)?r=!1:n=i}return e}function L$(t){U(t,e=>{Cv(e)||(kv[Tp]=e,e.tokenTypeIdx=Tp++),Rp(e)&&!ee(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),Rp(e)||(e.CATEGORIES=[]),H$(e)||(e.categoryMatches=[]),j$(e)||(e.categoryMatchesMap={})})}function M$(t){U(t,e=>{e.categoryMatches=[],U(e.categoryMatchesMap,(n,r)=>{e.categoryMatches.push(kv[r].tokenTypeIdx)})})}function F$(t){U(t,e=>{Sv([],e)})}function Sv(t,e){U(t,n=>{e.categoryMatchesMap[n.tokenTypeIdx]=!0}),U(e.CATEGORIES,n=>{const r=t.concat(e);ct(r,n)||Sv(r,n)})}function Cv(t){return B(t,"tokenTypeIdx")}function Rp(t){return B(t,"CATEGORIES")}function H$(t){return B(t,"categoryMatches")}function j$(t){return B(t,"categoryMatchesMap")}function q$(t){return B(t,"tokenTypeIdx")}const fd={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,n,r,i){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${n} characters.`}};var Ee;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ee||(Ee={}));const Xi={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:fd,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Xi);class dt{constructor(e,n=Xi){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(i,s)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;const o=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${o}--> <${i}>`);const{time:a,value:c}=gv(s),l=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${o}<-- <${i}> time: ${a}ms`),this.traceInitIndent--,c}else return s()},typeof n=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Rt({},Xi,n);const r=this.config.traceInitPerf;r===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof r=="number"&&(this.traceInitMaxIdent=r,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let i,s=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Xi.lineTerminatorsPattern)this.config.lineTerminatorsPattern=I$;else if(this.config.lineTerminatorCharacters===Xi.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(n.safeMode&&n.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),ee(e)?i={modes:{defaultMode:Qe(e)},defaultMode:Vi}:(s=!1,i=Qe(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(E$(i,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(P$(i,this.trackStartLines,this.config.lineTerminatorCharacters))})),i.modes=i.modes?i.modes:{},U(i.modes,(a,c)=>{i.modes[c]=hl(a,l=>wn(l))});const o=Dt(i.modes);if(U(i.modes,(a,c)=>{this.TRACE_INIT(`Mode: <${c}> processing`,()=>{if(this.modes.push(c),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(f$(a,o))}),le(this.lexerDefinitionErrors)){Is(a);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=d$(a,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:n.positionTracking,ensureOptimizations:n.ensureOptimizations,safeMode:n.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[c]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[c]=l.charCodeToPatternIdxToConfig,this.emptyGroups=Rt({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[c]=l.canBeOptimized}})}),this.defaultMode=i.defaultMode,!le(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){const c=M(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+c)}U(this.lexerDefinitionWarning,a=>{mv(a.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Tv?(this.chopInput=ar,this.match=this.matchWithTest):(this.updateLastIndex=qe,this.match=this.matchWithExec),s&&(this.handleModes=qe),this.trackStartLines===!1&&(this.computeNewColumn=ar),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=qe),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{const a=st(this.canModeBeOptimized,(c,l,u)=>(l===!1&&c.push(u),c),[]);if(n.ensureOptimizations&&!le(a))throw Error(`Lexer Modes: < ${a.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{a$()}),this.TRACE_INIT("toFastProperties",()=>{yv(this)})})}tokenize(e,n=this.defaultMode){if(!le(this.lexerDefinitionErrors)){const i=M(this.lexerDefinitionErrors,s=>s.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+i)}return this.tokenizeInternal(e,n)}tokenizeInternal(e,n){let r,i,s,o,a,c,l,u,f,h,p,d,y,w,_;const m=e,g=m.length;let b=0,F=0;const W=this.hasCustom?0:Math.floor(e.length/10),X=new Array(W),ye=[];let Te=this.trackStartLines?1:void 0,Re=this.trackStartLines?1:void 0;const A=A$(this.emptyGroups),S=this.trackStartLines,R=this.config.lineTerminatorsPattern;let C=0,I=[],P=[];const N=[],Fe=[];Object.freeze(Fe);let x;function $(){return I}function te(ve){const He=Un(ve),We=P[He];return We===void 0?Fe:We}const Wt=ve=>{if(N.length===1&&ve.tokenType.PUSH_MODE===void 0){const He=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ve);ye.push({offset:ve.startOffset,line:ve.startLine,column:ve.startColumn,length:ve.image.length,message:He})}else{N.pop();const He=Nr(N);I=this.patternIdxToConfig[He],P=this.charCodeToPatternIdxToConfig[He],C=I.length;const We=this.canModeBeOptimized[He]&&this.config.safeMode===!1;P&&We?x=te:x=$}};function Gt(ve){N.push(ve),P=this.charCodeToPatternIdxToConfig[ve],I=this.patternIdxToConfig[ve],C=I.length,C=I.length;const He=this.canModeBeOptimized[ve]&&this.config.safeMode===!1;P&&He?x=te:x=$}Gt.call(this,n);let xe;const zt=this.config.recoveryEnabled;for(;b<g;){c=null;const ve=m.charCodeAt(b),He=x(ve),We=He.length;for(r=0;r<We;r++){xe=He[r];const _e=xe.pattern;l=null;const Ge=xe.short;if(Ge!==!1?ve===Ge&&(c=_e):xe.isCustom===!0?(_=_e.exec(m,b,X,A),_!==null?(c=_[0],_.payload!==void 0&&(l=_.payload)):c=null):(this.updateLastIndex(_e,b),c=this.match(_e,e,b)),c!==null){if(a=xe.longerAlt,a!==void 0){const Pe=a.length;for(s=0;s<Pe;s++){const V=I[a[s]],Be=V.pattern;if(u=null,V.isCustom===!0?(_=Be.exec(m,b,X,A),_!==null?(o=_[0],_.payload!==void 0&&(u=_.payload)):o=null):(this.updateLastIndex(Be,b),o=this.match(Be,e,b)),o&&o.length>c.length){c=o,l=u,xe=V;break}}}break}}if(c!==null){if(f=c.length,h=xe.group,h!==void 0&&(p=xe.tokenTypeIdx,d=this.createTokenInstance(c,b,p,xe.tokenType,Te,Re,f),this.handlePayload(d,l),h===!1?F=this.addToken(X,F,d):A[h].push(d)),e=this.chopInput(e,f),b=b+f,Re=this.computeNewColumn(Re,f),S===!0&&xe.canLineTerminator===!0){let _e=0,Ge,Pe;R.lastIndex=0;do Ge=R.test(c),Ge===!0&&(Pe=R.lastIndex-1,_e++);while(Ge===!0);_e!==0&&(Te=Te+_e,Re=f-Pe,this.updateTokenEndLineColumnLocation(d,h,Pe,_e,Te,Re,f))}this.handleModes(xe,Wt,Gt,d)}else{const _e=b,Ge=Te,Pe=Re;let V=zt===!1;for(;V===!1&&b<g;)for(e=this.chopInput(e,1),b++,i=0;i<C;i++){const Be=I[i],ue=Be.pattern,lt=Be.short;if(lt!==!1?m.charCodeAt(b)===lt&&(V=!0):Be.isCustom===!0?V=ue.exec(m,b,X,A)!==null:(this.updateLastIndex(ue,b),V=ue.exec(e)!==null),V===!0)break}if(y=b-_e,Re=this.computeNewColumn(Re,y),w=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(m,_e,y,Ge,Pe),ye.push({offset:_e,line:Ge,column:Pe,length:y,message:w}),zt===!1)break}}return this.hasCustom||(X.length=F),{tokens:X,groups:A,errors:ye}}handleModes(e,n,r,i){if(e.pop===!0){const s=e.push;n(i),s!==void 0&&r.call(this,s)}else e.push!==void 0&&r.call(this,e.push)}chopInput(e,n){return e.substring(n)}updateLastIndex(e,n){e.lastIndex=n}updateTokenEndLineColumnLocation(e,n,r,i,s,o,a){let c,l;n!==void 0&&(c=r===a-1,l=c?-1:0,i===1&&c===!0||(e.endLine=s+l,e.endColumn=o-1+-l))}computeNewColumn(e,n){return e+n}createOffsetOnlyToken(e,n,r,i){return{image:e,startOffset:n,tokenTypeIdx:r,tokenType:i}}createStartOnlyToken(e,n,r,i,s,o){return{image:e,startOffset:n,startLine:s,startColumn:o,tokenTypeIdx:r,tokenType:i}}createFullToken(e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:n+a-1,startLine:s,endLine:s,startColumn:o,endColumn:o+a-1,tokenTypeIdx:r,tokenType:i}}addTokenUsingPush(e,n,r){return e.push(r),n}addTokenUsingMemberAccess(e,n,r){return e[n]=r,n++,n}handlePayloadNoCustom(e,n){}handlePayloadWithCustom(e,n){n!==null&&(e.payload=n)}matchWithTest(e,n,r){return e.test(n)===!0?n.substring(r,e.lastIndex):null}matchWithExec(e,n){const r=e.exec(n);return r!==null?r[0]:null}}dt.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";dt.NA=/NOT_APPLICABLE/;function $r(t){return $v(t)?t.LABEL:t.name}function $v(t){return ft(t.LABEL)&&t.LABEL!==""}const U$="parent",wp="categories",bp="label",kp="group",Sp="push_mode",Cp="pop_mode",$p="longer_alt",Ep="line_breaks",Pp="start_chars_hint";function Ev(t){return B$(t)}function B$(t){const e=t.pattern,n={};if(n.name=t.name,wn(e)||(n.PATTERN=e),B(t,U$))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return B(t,wp)&&(n.CATEGORIES=t[wp]),Is([n]),B(t,bp)&&(n.LABEL=t[bp]),B(t,kp)&&(n.GROUP=t[kp]),B(t,Cp)&&(n.POP_MODE=t[Cp]),B(t,Sp)&&(n.PUSH_MODE=t[Sp]),B(t,$p)&&(n.LONGER_ALT=t[$p]),B(t,Ep)&&(n.LINE_BREAKS=t[Ep]),B(t,Pp)&&(n.START_CHARS_HINT=t[Pp]),n}const Bn=Ev({name:"EOF",pattern:dt.NA});Is([Bn]);function dh(t,e,n,r,i,s,o,a){return{image:e,startOffset:n,endOffset:r,startLine:i,endLine:s,startColumn:o,endColumn:a,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function Pv(t,e){return Ns(t,e)}const Sr={buildMismatchTokenMessage({expected:t,actual:e,previous:n,ruleName:r}){return`Expecting ${$v(t)?`--> ${$r(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:n,customUserDescription:r,ruleName:i}){const s="Expecting: ",a=`
but found: '`+Ut(e).image+"'";if(r)return s+r+a;{const c=st(t,(h,p)=>h.concat(p),[]),l=M(c,h=>`[${M(h,p=>$r(p)).join(", ")}]`),f=`one of these possible Token sequences:
${M(l,(h,p)=>`  ${p+1}. ${h}`).join(`
`)}`;return s+f+a}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:n,ruleName:r}){const i="Expecting: ",o=`
but found: '`+Ut(e).image+"'";if(n)return i+n+o;{const c=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${M(t,l=>`[${M(l,u=>$r(u)).join(",")}]`).join(" ,")}>`;return i+c+o}}};Object.freeze(Sr);const K$={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},tr={buildDuplicateFoundError(t,e){function n(u){return u instanceof ge?u.terminalType.name:u instanceof ot?u.nonTerminalName:""}const r=t.name,i=Ut(e),s=i.idx,o=Yt(i),a=n(i),c=s>0;let l=`->${o}${c?s:""}<- ${a?`with argument: ->${a}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${r}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){const e=M(t.prefixPath,i=>$r(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){const e=M(t.prefixPath,i=>$r(i)).join(", "),n=t.alternation.idx===0?"":t.alternation.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r},buildEmptyRepetitionError(t){let e=Yt(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){const e=t.topLevelRule.name,n=M(t.leftRecursionPath,s=>s.name),r=`${e} --> ${n.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${r}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Yr?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function W$(t,e){const n=new G$(t,e);return n.resolveRefs(),n.errors}class G$ extends Xr{constructor(e,n){super(),this.nameToTopRule=e,this.errMsgProvider=n,this.errors=[]}resolveRefs(){U(Ue(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){const n=this.nameToTopRule[e.nonTerminalName];if(n)e.referencedRule=n;else{const r=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:r,type:at.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}}class z$ extends pl{constructor(e,n){super(),this.topProd=e,this.path=n,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Qe(this.path.ruleStack).reverse(),this.occurrenceStack=Qe(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,n=[]){this.found||super.walk(e,n)}walkProdRef(e,n,r){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){const i=n.concat(r);this.updateExpectedNext(),this.walk(e.referencedRule,i)}}updateExpectedNext(){le(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}}class V$ extends z${constructor(e,n){super(e,n),this.path=n,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,n,r){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){const i=n.concat(r),s=new ht({definition:i});this.possibleTokTypes=As(s),this.found=!0}}}class gl extends pl{constructor(e,n){super(),this.topRule=e,this.occurrence=n,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}}class Y$ extends gl{walkMany(e,n,r){if(e.idx===this.occurrence){const i=Ut(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkMany(e,n,r)}}class Ap extends gl{walkManySep(e,n,r){if(e.idx===this.occurrence){const i=Ut(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkManySep(e,n,r)}}class X$ extends gl{walkAtLeastOne(e,n,r){if(e.idx===this.occurrence){const i=Ut(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOne(e,n,r)}}class Np extends gl{walkAtLeastOneSep(e,n,r){if(e.idx===this.occurrence){const i=Ut(n.concat(r));this.result.isEndOfRule=i===void 0,i instanceof ge&&(this.result.token=i.terminalType,this.result.occurrence=i.idx)}else super.walkAtLeastOneSep(e,n,r)}}function hd(t,e,n=[]){n=Qe(n);let r=[],i=0;function s(a){return a.concat(ze(t,i+1))}function o(a){const c=hd(s(a),e,n);return r.concat(c)}for(;n.length<e&&i<t.length;){const a=t[i];if(a instanceof ht)return o(a.definition);if(a instanceof ot)return o(a.definition);if(a instanceof Je)r=o(a.definition);else if(a instanceof bt){const c=a.definition.concat([new $e({definition:a.definition})]);return o(c)}else if(a instanceof kt){const c=[new ht({definition:a.definition}),new $e({definition:[new ge({terminalType:a.separator})].concat(a.definition)})];return o(c)}else if(a instanceof pt){const c=a.definition.concat([new $e({definition:[new ge({terminalType:a.separator})].concat(a.definition)})]);r=o(c)}else if(a instanceof $e){const c=a.definition.concat([new $e({definition:a.definition})]);r=o(c)}else{if(a instanceof mt)return U(a.definition,c=>{le(c.definition)===!1&&(r=o(c.definition))}),r;if(a instanceof ge)n.push(a.terminalType);else throw Error("non exhaustive match")}i++}return r.push({partialPath:n,suffixDef:ze(t,i)}),r}function Av(t,e,n,r){const i="EXIT_NONE_TERMINAL",s=[i],o="EXIT_ALTERNATIVE";let a=!1;const c=e.length,l=c-r-1,u=[],f=[];for(f.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!le(f);){const h=f.pop();if(h===o){a&&Nr(f).idx<=l&&f.pop();continue}const p=h.def,d=h.idx,y=h.ruleStack,w=h.occurrenceStack;if(le(p))continue;const _=p[0];if(_===i){const m={idx:d,def:ze(p),ruleStack:cs(y),occurrenceStack:cs(w)};f.push(m)}else if(_ instanceof ge)if(d<c-1){const m=d+1,g=e[m];if(n(g,_.terminalType)){const b={idx:m,def:ze(p),ruleStack:y,occurrenceStack:w};f.push(b)}}else if(d===c-1)u.push({nextTokenType:_.terminalType,nextTokenOccurrence:_.idx,ruleStack:y,occurrenceStack:w}),a=!0;else throw Error("non exhaustive match");else if(_ instanceof ot){const m=Qe(y);m.push(_.nonTerminalName);const g=Qe(w);g.push(_.idx);const b={idx:d,def:_.definition.concat(s,ze(p)),ruleStack:m,occurrenceStack:g};f.push(b)}else if(_ instanceof Je){const m={idx:d,def:ze(p),ruleStack:y,occurrenceStack:w};f.push(m),f.push(o);const g={idx:d,def:_.definition.concat(ze(p)),ruleStack:y,occurrenceStack:w};f.push(g)}else if(_ instanceof bt){const m=new $e({definition:_.definition,idx:_.idx}),g=_.definition.concat([m],ze(p)),b={idx:d,def:g,ruleStack:y,occurrenceStack:w};f.push(b)}else if(_ instanceof kt){const m=new ge({terminalType:_.separator}),g=new $e({definition:[m].concat(_.definition),idx:_.idx}),b=_.definition.concat([g],ze(p)),F={idx:d,def:b,ruleStack:y,occurrenceStack:w};f.push(F)}else if(_ instanceof pt){const m={idx:d,def:ze(p),ruleStack:y,occurrenceStack:w};f.push(m),f.push(o);const g=new ge({terminalType:_.separator}),b=new $e({definition:[g].concat(_.definition),idx:_.idx}),F=_.definition.concat([b],ze(p)),W={idx:d,def:F,ruleStack:y,occurrenceStack:w};f.push(W)}else if(_ instanceof $e){const m={idx:d,def:ze(p),ruleStack:y,occurrenceStack:w};f.push(m),f.push(o);const g=new $e({definition:_.definition,idx:_.idx}),b=_.definition.concat([g],ze(p)),F={idx:d,def:b,ruleStack:y,occurrenceStack:w};f.push(F)}else if(_ instanceof mt)for(let m=_.definition.length-1;m>=0;m--){const g=_.definition[m],b={idx:d,def:g.definition.concat(ze(p)),ruleStack:y,occurrenceStack:w};f.push(b),f.push(o)}else if(_ instanceof ht)f.push({idx:d,def:_.definition.concat(ze(p)),ruleStack:y,occurrenceStack:w});else if(_ instanceof Yr)f.push(J$(_,d,y,w));else throw Error("non exhaustive match")}return u}function J$(t,e,n,r){const i=Qe(n);i.push(t.name);const s=Qe(r);return s.push(1),{idx:e,def:t.definition,ruleStack:i,occurrenceStack:s}}var be;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(be||(be={}));function fh(t){if(t instanceof Je||t==="Option")return be.OPTION;if(t instanceof $e||t==="Repetition")return be.REPETITION;if(t instanceof bt||t==="RepetitionMandatory")return be.REPETITION_MANDATORY;if(t instanceof kt||t==="RepetitionMandatoryWithSeparator")return be.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof pt||t==="RepetitionWithSeparator")return be.REPETITION_WITH_SEPARATOR;if(t instanceof mt||t==="Alternation")return be.ALTERNATION;throw Error("non exhaustive match")}function Ip(t){const{occurrence:e,rule:n,prodType:r,maxLookahead:i}=t,s=fh(r);return s===be.ALTERNATION?yl(e,n,i):vl(e,n,s,i)}function Q$(t,e,n,r,i,s){const o=yl(t,e,n),a=Dv(o)?wc:Ns;return s(o,r,a,i)}function Z$(t,e,n,r,i,s){const o=vl(t,e,i,n),a=Dv(o)?wc:Ns;return s(o[0],a,r)}function eE(t,e,n,r){const i=t.length,s=Ht(t,o=>Ht(o,a=>a.length===1));if(e)return function(o){const a=M(o,c=>c.GATE);for(let c=0;c<i;c++){const l=t[c],u=l.length,f=a[c];if(!(f!==void 0&&f.call(this)===!1))e:for(let h=0;h<u;h++){const p=l[h],d=p.length;for(let y=0;y<d;y++){const w=this.LA(y+1);if(n(w,p[y])===!1)continue e}return c}}};if(s&&!r){const o=M(t,c=>Pt(c)),a=st(o,(c,l,u)=>(U(l,f=>{B(c,f.tokenTypeIdx)||(c[f.tokenTypeIdx]=u),U(f.categoryMatches,h=>{B(c,h)||(c[h]=u)})}),c),{});return function(){const c=this.LA(1);return a[c.tokenTypeIdx]}}else return function(){for(let o=0;o<i;o++){const a=t[o],c=a.length;e:for(let l=0;l<c;l++){const u=a[l],f=u.length;for(let h=0;h<f;h++){const p=this.LA(h+1);if(n(p,u[h])===!1)continue e}return o}}}}function tE(t,e,n){const r=Ht(t,s=>s.length===1),i=t.length;if(r&&!n){const s=Pt(t);if(s.length===1&&le(s[0].categoryMatches)){const a=s[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===a}}else{const o=st(s,(a,c,l)=>(a[c.tokenTypeIdx]=!0,U(c.categoryMatches,u=>{a[u]=!0}),a),[]);return function(){const a=this.LA(1);return o[a.tokenTypeIdx]===!0}}}else return function(){e:for(let s=0;s<i;s++){const o=t[s],a=o.length;for(let c=0;c<a;c++){const l=this.LA(c+1);if(e(l,o[c])===!1)continue e}return!0}return!1}}class nE extends pl{constructor(e,n,r){super(),this.topProd=e,this.targetOccurrence=n,this.targetProdType=r}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,n,r,i){return e.idx===this.targetOccurrence&&this.targetProdType===n?(this.restDef=r.concat(i),!0):!1}walkOption(e,n,r){this.checkIsTarget(e,be.OPTION,n,r)||super.walkOption(e,n,r)}walkAtLeastOne(e,n,r){this.checkIsTarget(e,be.REPETITION_MANDATORY,n,r)||super.walkOption(e,n,r)}walkAtLeastOneSep(e,n,r){this.checkIsTarget(e,be.REPETITION_MANDATORY_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}walkMany(e,n,r){this.checkIsTarget(e,be.REPETITION,n,r)||super.walkOption(e,n,r)}walkManySep(e,n,r){this.checkIsTarget(e,be.REPETITION_WITH_SEPARATOR,n,r)||super.walkOption(e,n,r)}}class Nv extends Xr{constructor(e,n,r){super(),this.targetOccurrence=e,this.targetProdType=n,this.targetRef=r,this.result=[]}checkIsTarget(e,n){e.idx===this.targetOccurrence&&this.targetProdType===n&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,be.OPTION)}visitRepetition(e){this.checkIsTarget(e,be.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,be.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,be.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,be.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,be.ALTERNATION)}}function Dp(t){const e=new Array(t);for(let n=0;n<t;n++)e[n]=[];return e}function ru(t){let e=[""];for(let n=0;n<t.length;n++){const r=t[n],i=[];for(let s=0;s<e.length;s++){const o=e[s];i.push(o+"_"+r.tokenTypeIdx);for(let a=0;a<r.categoryMatches.length;a++){const c="_"+r.categoryMatches[a];i.push(o+c)}}e=i}return e}function rE(t,e,n){for(let r=0;r<t.length;r++){if(r===n)continue;const i=t[r];for(let s=0;s<e.length;s++){const o=e[s];if(i[o]===!0)return!1}}return!0}function Iv(t,e){const n=M(t,o=>hd([o],1)),r=Dp(n.length),i=M(n,o=>{const a={};return U(o,c=>{const l=ru(c.partialPath);U(l,u=>{a[u]=!0})}),a});let s=n;for(let o=1;o<=e;o++){const a=s;s=Dp(a.length);for(let c=0;c<a.length;c++){const l=a[c];for(let u=0;u<l.length;u++){const f=l[u].partialPath,h=l[u].suffixDef,p=ru(f);if(rE(i,p,c)||le(h)||f.length===e){const y=r[c];if(pd(y,f)===!1){y.push(f);for(let w=0;w<p.length;w++){const _=p[w];i[c][_]=!0}}}else{const y=hd(h,o+1,f);s[c]=s[c].concat(y),U(y,w=>{const _=ru(w.partialPath);U(_,m=>{i[c][m]=!0})})}}}}return r}function yl(t,e,n,r){const i=new Nv(t,be.ALTERNATION,r);return e.accept(i),Iv(i.result,n)}function vl(t,e,n,r){const i=new Nv(t,n);e.accept(i);const s=i.result,a=new nE(e,t,n).startWalking(),c=new ht({definition:s}),l=new ht({definition:a});return Iv([c,l],r)}function pd(t,e){e:for(let n=0;n<t.length;n++){const r=t[n];if(r.length===e.length){for(let i=0;i<r.length;i++){const s=e[i],o=r[i];if((s===o||o.categoryMatchesMap[s.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function iE(t,e){return t.length<e.length&&Ht(t,(n,r)=>{const i=e[r];return n===i||i.categoryMatchesMap[n.tokenTypeIdx]})}function Dv(t){return Ht(t,e=>Ht(e,n=>Ht(n,r=>le(r.categoryMatches))))}function sE(t){const e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return M(e,n=>Object.assign({type:at.CUSTOM_LOOKAHEAD_VALIDATION},n))}function oE(t,e,n,r){const i=Tt(t,c=>aE(c,n)),s=_E(t,e,n),o=Tt(t,c=>mE(c,n)),a=Tt(t,c=>uE(c,t,r,n));return i.concat(s,o,a)}function aE(t,e){const n=new lE;t.accept(n);const r=n.allProductions,i=bC(r,cE),s=Kt(i,a=>a.length>1);return M(Ue(s),a=>{const c=Ut(a),l=e.buildDuplicateFoundError(t,a),u=Yt(c),f={message:l,type:at.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:u,occurrence:c.idx},h=Ov(c);return h&&(f.parameter=h),f})}function cE(t){return`${Yt(t)}_#_${t.idx}_#_${Ov(t)}`}function Ov(t){return t instanceof ge?t.terminalType.name:t instanceof ot?t.nonTerminalName:""}class lE extends Xr{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}}function uE(t,e,n,r){const i=[];if(st(e,(o,a)=>a.name===t.name?o+1:o,0)>1){const o=r.buildDuplicateRuleNameError({topLevelRule:t,grammarName:n});i.push({message:o,type:at.DUPLICATE_RULE_NAME,ruleName:t.name})}return i}function dE(t,e,n){const r=[];let i;return ct(e,t)||(i=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${n}<-as it is not defined in any of the super grammars `,r.push({message:i,type:at.INVALID_RULE_OVERRIDE,ruleName:t})),r}function xv(t,e,n,r=[]){const i=[],s=ac(e.definition);if(le(s))return[];{const o=t.name;ct(s,t)&&i.push({message:n.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:r}),type:at.LEFT_RECURSION,ruleName:o});const c=fl(s,r.concat([t])),l=Tt(c,u=>{const f=Qe(r);return f.push(u),xv(t,u,n,f)});return i.concat(l)}}function ac(t){let e=[];if(le(t))return e;const n=Ut(t);if(n instanceof ot)e.push(n.referencedRule);else if(n instanceof ht||n instanceof Je||n instanceof bt||n instanceof kt||n instanceof pt||n instanceof $e)e=e.concat(ac(n.definition));else if(n instanceof mt)e=Pt(M(n.definition,s=>ac(s.definition)));else if(!(n instanceof ge))throw Error("non exhaustive match");const r=Tc(n),i=t.length>1;if(r&&i){const s=ze(t);return e.concat(ac(s))}else return e}class hh extends Xr{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}}function fE(t,e){const n=new hh;t.accept(n);const r=n.alternations;return Tt(r,s=>{const o=cs(s.definition);return Tt(o,(a,c)=>{const l=Av([a],[],Ns,1);return le(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:s,emptyChoiceIdx:c}),type:at.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:s.idx,alternative:c+1}]:[]})})}function hE(t,e,n){const r=new hh;t.accept(r);let i=r.alternations;return i=hl(i,o=>o.ignoreAmbiguities===!0),Tt(i,o=>{const a=o.idx,c=o.maxLookahead||e,l=yl(a,t,c,o),u=yE(l,o,t,n),f=vE(l,o,t,n);return u.concat(f)})}class pE extends Xr{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}}function mE(t,e){const n=new hh;t.accept(n);const r=n.alternations;return Tt(r,s=>s.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:s}),type:at.TOO_MANY_ALTS,ruleName:t.name,occurrence:s.idx}]:[])}function gE(t,e,n){const r=[];return U(t,i=>{const s=new pE;i.accept(s);const o=s.allProductions;U(o,a=>{const c=fh(a),l=a.maxLookahead||e,u=a.idx,h=vl(u,i,c,l)[0];if(le(Pt(h))){const p=n.buildEmptyRepetitionError({topLevelRule:i,repetition:a});r.push({message:p,type:at.NO_NON_EMPTY_LOOKAHEAD,ruleName:i.name})}})}),r}function yE(t,e,n,r){const i=[],s=st(t,(a,c,l)=>(e.definition[l].ignoreAmbiguities===!0||U(c,u=>{const f=[l];U(t,(h,p)=>{l!==p&&pd(h,u)&&e.definition[p].ignoreAmbiguities!==!0&&f.push(p)}),f.length>1&&!pd(i,u)&&(i.push(u),a.push({alts:f,path:u}))}),a),[]);return M(s,a=>{const c=M(a.alts,u=>u+1);return{message:r.buildAlternationAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:c,prefixPath:a.path}),type:at.AMBIGUOUS_ALTS,ruleName:n.name,occurrence:e.idx,alternatives:a.alts}})}function vE(t,e,n,r){const i=st(t,(o,a,c)=>{const l=M(a,u=>({idx:c,path:u}));return o.concat(l)},[]);return Ps(Tt(i,o=>{if(e.definition[o.idx].ignoreAmbiguities===!0)return[];const c=o.idx,l=o.path,u=wt(i,h=>e.definition[h.idx].ignoreAmbiguities!==!0&&h.idx<c&&iE(h.path,l));return M(u,h=>{const p=[h.idx+1,c+1],d=e.idx===0?"":e.idx;return{message:r.buildAlternationPrefixAmbiguityError({topLevelRule:n,alternation:e,ambiguityIndices:p,prefixPath:h.path}),type:at.AMBIGUOUS_PREFIX_ALTS,ruleName:n.name,occurrence:d,alternatives:p}})}))}function _E(t,e,n){const r=[],i=M(e,s=>s.name);return U(t,s=>{const o=s.name;if(ct(i,o)){const a=n.buildNamespaceConflictError(s);r.push({message:a,type:at.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:o})}}),r}function TE(t){const e=ch(t,{errMsgProvider:K$}),n={};return U(t.rules,r=>{n[r.name]=r}),W$(n,e.errMsgProvider)}function RE(t){return t=ch(t,{errMsgProvider:tr}),oE(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}const Lv="MismatchedTokenException",Mv="NoViableAltException",Fv="EarlyExitException",Hv="NotAllInputParsedException",jv=[Lv,Mv,Fv,Hv];Object.freeze(jv);function bc(t){return ct(jv,t.name)}class _l extends Error{constructor(e,n){super(e),this.token=n,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}class qv extends _l{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Lv}}class wE extends _l{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Mv}}class bE extends _l{constructor(e,n){super(e,n),this.name=Hv}}class kE extends _l{constructor(e,n,r){super(e,n),this.previousToken=r,this.name=Fv}}const iu={},Uv="InRuleRecoveryException";class SE extends Error{constructor(e){super(e),this.name=Uv}}class CE{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=B(e,"recoveryEnabled")?e.recoveryEnabled:bn.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=$E)}getTokenToInsert(e){const n=dh(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return n.isInsertedInRecovery=!0,n}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,n,r,i){const s=this.findReSyncTokenType(),o=this.exportLexerState(),a=[];let c=!1;const l=this.LA(1);let u=this.LA(1);const f=()=>{const h=this.LA(0),p=this.errorMessageProvider.buildMismatchTokenMessage({expected:i,actual:l,previous:h,ruleName:this.getCurrRuleFullName()}),d=new qv(p,l,this.LA(0));d.resyncedTokens=cs(a),this.SAVE_ERROR(d)};for(;!c;)if(this.tokenMatcher(u,i)){f();return}else if(r.call(this)){f(),e.apply(this,n);return}else this.tokenMatcher(u,s)?c=!0:(u=this.SKIP_TOKEN(),this.addToResyncTokens(u,a));this.importLexerState(o)}shouldInRepetitionRecoveryBeTried(e,n,r){return!(r===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,n)))}getFollowsForInRuleRecovery(e,n){const r=this.getCurrentGrammarPath(e,n);return this.getNextPossibleTokenTypes(r)}tryInRuleRecovery(e,n){if(this.canRecoverWithSingleTokenInsertion(e,n))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){const r=this.SKIP_TOKEN();return this.consumeToken(),r}throw new SE("sad sad panda")}canPerformInRuleRecovery(e,n){return this.canRecoverWithSingleTokenInsertion(e,n)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,n){if(!this.canTokenTypeBeInsertedInRecovery(e)||le(n))return!1;const r=this.LA(1);return Ir(n,s=>this.tokenMatcher(r,s))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){const n=this.getCurrFollowKey(),r=this.getFollowSetFromFollowKey(n);return ct(r,e)}findReSyncTokenType(){const e=this.flattenFollowSet();let n=this.LA(1),r=2;for(;;){const i=Ir(e,s=>Pv(n,s));if(i!==void 0)return i;n=this.LA(r),r++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return iu;const e=this.getLastExplicitRuleShortName(),n=this.getLastExplicitRuleOccurrenceIndex(),r=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:n,inRule:this.shortRuleNameToFullName(r)}}buildFullFollowKeyStack(){const e=this.RULE_STACK,n=this.RULE_OCCURRENCE_STACK;return M(e,(r,i)=>i===0?iu:{ruleName:this.shortRuleNameToFullName(r),idxInCallingRule:n[i],inRule:this.shortRuleNameToFullName(e[i-1])})}flattenFollowSet(){const e=M(this.buildFullFollowKeyStack(),n=>this.getFollowSetFromFollowKey(n));return Pt(e)}getFollowSetFromFollowKey(e){if(e===iu)return[Bn];const n=e.ruleName+e.idxInCallingRule+vv+e.inRule;return this.resyncFollows[n]}addToResyncTokens(e,n){return this.tokenMatcher(e,Bn)||n.push(e),n}reSyncTo(e){const n=[];let r=this.LA(1);for(;this.tokenMatcher(r,e)===!1;)r=this.SKIP_TOKEN(),this.addToResyncTokens(r,n);return cs(n)}attemptInRepetitionRecovery(e,n,r,i,s,o,a){}getCurrentGrammarPath(e,n){const r=this.getHumanReadableRuleStack(),i=Qe(this.RULE_OCCURRENCE_STACK);return{ruleStack:r,occurrenceStack:i,lastTok:e,lastTokOccurrence:n}}getHumanReadableRuleStack(){return M(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}}function $E(t,e,n,r,i,s,o){const a=this.getKeyForAutomaticLookahead(r,i);let c=this.firstAfterRepMap[a];if(c===void 0){const h=this.getCurrRuleFullName(),p=this.getGAstProductions()[h];c=new s(p,i).startWalking(),this.firstAfterRepMap[a]=c}let l=c.token,u=c.occurrence;const f=c.isEndOfRule;this.RULE_STACK.length===1&&f&&l===void 0&&(l=Bn,u=1),!(l===void 0||u===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,u,o)&&this.tryInRepetitionRecovery(t,e,n,l)}const EE=4,Yn=8,Bv=1<<Yn,Kv=2<<Yn,md=3<<Yn,gd=4<<Yn,yd=5<<Yn,cc=6<<Yn;function su(t,e,n){return n|e|t}class ph{constructor(e){var n;this.maxLookahead=(n=e==null?void 0:e.maxLookahead)!==null&&n!==void 0?n:bn.maxLookahead}validate(e){const n=this.validateNoLeftRecursion(e.rules);if(le(n)){const r=this.validateEmptyOrAlternatives(e.rules),i=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),s=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...n,...r,...i,...s]}return n}validateNoLeftRecursion(e){return Tt(e,n=>xv(n,n,tr))}validateEmptyOrAlternatives(e){return Tt(e,n=>fE(n,tr))}validateAmbiguousAlternationAlternatives(e,n){return Tt(e,r=>hE(r,n,tr))}validateSomeNonEmptyLookaheadPath(e,n){return gE(e,n,tr)}buildLookaheadForAlternation(e){return Q$(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,eE)}buildLookaheadForOptional(e){return Z$(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,fh(e.prodType),tE)}}class PE{initLooksAhead(e){this.dynamicTokensEnabled=B(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:bn.dynamicTokensEnabled,this.maxLookahead=B(e,"maxLookahead")?e.maxLookahead:bn.maxLookahead,this.lookaheadStrategy=B(e,"lookaheadStrategy")?e.lookaheadStrategy:new ph({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){U(e,n=>{this.TRACE_INIT(`${n.name} Rule Lookahead`,()=>{const{alternation:r,repetition:i,option:s,repetitionMandatory:o,repetitionMandatoryWithSeparator:a,repetitionWithSeparator:c}=NE(n);U(r,l=>{const u=l.idx===0?"":l.idx;this.TRACE_INIT(`${Yt(l)}${u}`,()=>{const f=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:n,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),h=su(this.fullRuleNameToShort[n.name],Bv,l.idx);this.setLaFuncCache(h,f)})}),U(i,l=>{this.computeLookaheadFunc(n,l.idx,md,"Repetition",l.maxLookahead,Yt(l))}),U(s,l=>{this.computeLookaheadFunc(n,l.idx,Kv,"Option",l.maxLookahead,Yt(l))}),U(o,l=>{this.computeLookaheadFunc(n,l.idx,gd,"RepetitionMandatory",l.maxLookahead,Yt(l))}),U(a,l=>{this.computeLookaheadFunc(n,l.idx,cc,"RepetitionMandatoryWithSeparator",l.maxLookahead,Yt(l))}),U(c,l=>{this.computeLookaheadFunc(n,l.idx,yd,"RepetitionWithSeparator",l.maxLookahead,Yt(l))})})})}computeLookaheadFunc(e,n,r,i,s,o){this.TRACE_INIT(`${o}${n===0?"":n}`,()=>{const a=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:n,rule:e,maxLookahead:s||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:i}),c=su(this.fullRuleNameToShort[e.name],r,n);this.setLaFuncCache(c,a)})}getKeyForAutomaticLookahead(e,n){const r=this.getLastExplicitRuleShortName();return su(r,e,n)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,n){this.lookAheadFuncsCache.set(e,n)}}class AE extends Xr{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}}const go=new AE;function NE(t){go.reset(),t.accept(go);const e=go.dslMethods;return go.reset(),e}function Op(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function xp(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function IE(t,e,n){t.children[n]===void 0?t.children[n]=[e]:t.children[n].push(e)}function DE(t,e,n){t.children[e]===void 0?t.children[e]=[n]:t.children[e].push(n)}const OE="name";function Wv(t,e){Object.defineProperty(t,OE,{enumerable:!1,configurable:!0,writable:!1,value:e})}function xE(t,e){const n=Dt(t),r=n.length;for(let i=0;i<r;i++){const s=n[i],o=t[s],a=o.length;for(let c=0;c<a;c++){const l=o[c];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function LE(t,e){const n=function(){};Wv(n,t+"BaseSemantics");const r={visit:function(i,s){if(ee(i)&&(i=i[0]),!wn(i))return this[i.name](i.children,s)},validateVisitor:function(){const i=FE(this,e);if(!le(i)){const s=M(i,o=>o.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${s.join(`

`).replace(/\n/g,`
	`)}`)}}};return n.prototype=r,n.prototype.constructor=n,n._RULE_NAMES=e,n}function ME(t,e,n){const r=function(){};Wv(r,t+"BaseSemanticsWithDefaults");const i=Object.create(n.prototype);return U(e,s=>{i[s]=xE}),r.prototype=i,r.prototype.constructor=r,r}var vd;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(vd||(vd={}));function FE(t,e){return HE(t,e)}function HE(t,e){const n=wt(e,i=>Cn(t[i])===!1),r=M(n,i=>({msg:`Missing visitor method: <${i}> on ${t.constructor.name} CST Visitor.`,type:vd.MISSING_METHOD,methodName:i}));return Ps(r)}class jE{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=B(e,"nodeLocationTracking")?e.nodeLocationTracking:bn.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=qe,this.cstFinallyStateUpdate=qe,this.cstPostTerminal=qe,this.cstPostNonTerminal=qe,this.cstPostRule=qe;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=xp,this.setNodeLocationFromNode=xp,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=Op,this.setNodeLocationFromNode=Op,this.cstPostRule=qe,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=qe,this.setNodeLocationFromNode=qe,this.cstPostRule=qe,this.setInitialNodeLocation=qe;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){const n=this.LA(1);e.location={startOffset:n.startOffset,startLine:n.startLine,startColumn:n.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){const n={name:e,children:Object.create(null)};this.setInitialNodeLocation(n),this.CST_STACK.push(n)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?(r.endOffset=n.endOffset,r.endLine=n.endLine,r.endColumn=n.endColumn):(r.startOffset=NaN,r.startLine=NaN,r.startColumn=NaN)}cstPostRuleOnlyOffset(e){const n=this.LA(0),r=e.location;r.startOffset<=n.startOffset?r.endOffset=n.endOffset:r.startOffset=NaN}cstPostTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];IE(r,n,e),this.setNodeLocationFromToken(r.location,n)}cstPostNonTerminal(e,n){const r=this.CST_STACK[this.CST_STACK.length-1];DE(r,n,e),this.setNodeLocationFromNode(r.location,e.location)}getBaseCstVisitorConstructor(){if(wn(this.baseCstVisitorConstructor)){const e=LE(this.className,Dt(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(wn(this.baseCstVisitorWithDefaultsConstructor)){const e=ME(this.className,Dt(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){const e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){const e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}}class qE{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Sc}LA(e){const n=this.currIdx+e;return n<0||this.tokVectorLength<=n?Sc:this.tokVector[n]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}}class UE{ACTION(e){return e.call(this)}consume(e,n,r){return this.consumeInternal(n,e,r)}subrule(e,n,r){return this.subruleInternal(n,e,r)}option(e,n){return this.optionInternal(n,e)}or(e,n){return this.orInternal(n,e)}many(e,n){return this.manyInternal(e,n)}atLeastOne(e,n){return this.atLeastOneInternal(e,n)}CONSUME(e,n){return this.consumeInternal(e,0,n)}CONSUME1(e,n){return this.consumeInternal(e,1,n)}CONSUME2(e,n){return this.consumeInternal(e,2,n)}CONSUME3(e,n){return this.consumeInternal(e,3,n)}CONSUME4(e,n){return this.consumeInternal(e,4,n)}CONSUME5(e,n){return this.consumeInternal(e,5,n)}CONSUME6(e,n){return this.consumeInternal(e,6,n)}CONSUME7(e,n){return this.consumeInternal(e,7,n)}CONSUME8(e,n){return this.consumeInternal(e,8,n)}CONSUME9(e,n){return this.consumeInternal(e,9,n)}SUBRULE(e,n){return this.subruleInternal(e,0,n)}SUBRULE1(e,n){return this.subruleInternal(e,1,n)}SUBRULE2(e,n){return this.subruleInternal(e,2,n)}SUBRULE3(e,n){return this.subruleInternal(e,3,n)}SUBRULE4(e,n){return this.subruleInternal(e,4,n)}SUBRULE5(e,n){return this.subruleInternal(e,5,n)}SUBRULE6(e,n){return this.subruleInternal(e,6,n)}SUBRULE7(e,n){return this.subruleInternal(e,7,n)}SUBRULE8(e,n){return this.subruleInternal(e,8,n)}SUBRULE9(e,n){return this.subruleInternal(e,9,n)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,n,r=Cc){if(ct(this.definedRulesNames,e)){const o={message:tr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:at.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(o)}this.definedRulesNames.push(e);const i=this.defineRule(e,n,r);return this[e]=i,i}OVERRIDE_RULE(e,n,r=Cc){const i=dE(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(i);const s=this.defineRule(e,n,r);return this[e]=s,s}BACKTRACK(e,n){return function(){this.isBackTrackingStack.push(1);const r=this.saveRecogState();try{return e.apply(this,n),!0}catch(i){if(bc(i))return!1;throw i}finally{this.reloadRecogState(r),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return JC(Ue(this.gastProductionsCache))}}class BE{initRecognizerEngine(e,n){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=wc,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},B(n,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(ee(e)){if(le(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(ee(e))this.tokensMap=st(e,(s,o)=>(s[o.name]=o,s),{});else if(B(e,"modes")&&Ht(Pt(Ue(e.modes)),q$)){const s=Pt(Ue(e.modes)),o=lh(s);this.tokensMap=st(o,(a,c)=>(a[c.name]=c,a),{})}else if(It(e))this.tokensMap=Qe(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=Bn;const r=B(e,"modes")?Pt(Ue(e.modes)):Ue(e),i=Ht(r,s=>le(s.categoryMatches));this.tokenMatcher=i?wc:Ns,Is(Ue(this.tokensMap))}defineRule(e,n,r){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);const i=B(r,"resyncEnabled")?r.resyncEnabled:Cc.resyncEnabled,s=B(r,"recoveryValueFunc")?r.recoveryValueFunc:Cc.recoveryValueFunc,o=this.ruleShortNameIdx<<EE+Yn;this.ruleShortNameIdx++,this.shortRuleNameToFull[o]=e,this.fullRuleNameToShort[e]=o;let a;return this.outputCst===!0?a=function(...u){try{this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u);const f=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(f),f}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}}:a=function(...u){try{return this.ruleInvocationStateUpdate(o,e,this.subruleIdx),n.apply(this,u)}catch(f){return this.invokeRuleCatch(f,i,s)}finally{this.ruleFinallyStateUpdate()}},Object.assign(a,{ruleName:e,originalGrammarAction:n})}invokeRuleCatch(e,n,r){const i=this.RULE_STACK.length===1,s=n&&!this.isBackTracking()&&this.recoveryEnabled;if(bc(e)){const o=e;if(s){const a=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(a))if(o.resyncedTokens=this.reSyncTo(a),this.outputCst){const c=this.CST_STACK[this.CST_STACK.length-1];return c.recoveredNode=!0,c}else return r(e);else{if(this.outputCst){const c=this.CST_STACK[this.CST_STACK.length-1];c.recoveredNode=!0,o.partialCstResult=c}throw o}}else{if(i)return this.moveToTerminatedState(),r(e);throw o}}else throw e}optionInternal(e,n){const r=this.getKeyForAutomaticLookahead(Kv,n);return this.optionInternalLogic(e,n,r)}optionInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof e!="function"){s=e.DEF;const o=e.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=e;if(i.call(this)===!0)return s.call(this)}atLeastOneInternal(e,n){const r=this.getKeyForAutomaticLookahead(gd,e);return this.atLeastOneInternalLogic(e,n,r)}atLeastOneInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const o=n.GATE;if(o!==void 0){const a=i;i=()=>o.call(this)&&a.call(this)}}else s=n;if(i.call(this)===!0){let o=this.doSingleRepetition(s);for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s)}else throw this.raiseEarlyExitException(e,be.REPETITION_MANDATORY,n.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,n],i,gd,e,X$)}atLeastOneSepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(cc,e);this.atLeastOneSepFirstInternalLogic(e,n,r)}atLeastOneSepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,Np],a,cc,e,Np)}else throw this.raiseEarlyExitException(e,be.REPETITION_MANDATORY_WITH_SEPARATOR,n.ERR_MSG)}manyInternal(e,n){const r=this.getKeyForAutomaticLookahead(md,e);return this.manyInternalLogic(e,n,r)}manyInternalLogic(e,n,r){let i=this.getLaFuncFromCache(r),s;if(typeof n!="function"){s=n.DEF;const a=n.GATE;if(a!==void 0){const c=i;i=()=>a.call(this)&&c.call(this)}}else s=n;let o=!0;for(;i.call(this)===!0&&o===!0;)o=this.doSingleRepetition(s);this.attemptInRepetitionRecovery(this.manyInternal,[e,n],i,md,e,Y$,o)}manySepFirstInternal(e,n){const r=this.getKeyForAutomaticLookahead(yd,e);this.manySepFirstInternalLogic(e,n,r)}manySepFirstInternalLogic(e,n,r){const i=n.DEF,s=n.SEP;if(this.getLaFuncFromCache(r).call(this)===!0){i.call(this);const a=()=>this.tokenMatcher(this.LA(1),s);for(;this.tokenMatcher(this.LA(1),s)===!0;)this.CONSUME(s),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,s,a,i,Ap],a,yd,e,Ap)}}repetitionSepSecondInternal(e,n,r,i,s){for(;r();)this.CONSUME(n),i.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,n,r,i,s],r,cc,e,s)}doSingleRepetition(e){const n=this.getLexerPosition();return e.call(this),this.getLexerPosition()>n}orInternal(e,n){const r=this.getKeyForAutomaticLookahead(Bv,n),i=ee(e)?e:e.DEF,o=this.getLaFuncFromCache(r).call(this,i);if(o!==void 0)return i[o].ALT.call(this);this.raiseNoAltException(n,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){const e=this.LA(1),n=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new bE(n,e))}}subruleInternal(e,n,r){let i;try{const s=r!==void 0?r.ARGS:void 0;return this.subruleIdx=n,i=e.apply(this,s),this.cstPostNonTerminal(i,r!==void 0&&r.LABEL!==void 0?r.LABEL:e.ruleName),i}catch(s){throw this.subruleInternalError(s,r,e.ruleName)}}subruleInternalError(e,n,r){throw bc(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,n!==void 0&&n.LABEL!==void 0?n.LABEL:r),delete e.partialCstResult),e}consumeInternal(e,n,r){let i;try{const s=this.LA(1);this.tokenMatcher(s,e)===!0?(this.consumeToken(),i=s):this.consumeInternalError(e,s,r)}catch(s){i=this.consumeInternalRecovery(e,n,s)}return this.cstPostTerminal(r!==void 0&&r.LABEL!==void 0?r.LABEL:e.name,i),i}consumeInternalError(e,n,r){let i;const s=this.LA(0);throw r!==void 0&&r.ERR_MSG?i=r.ERR_MSG:i=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:n,previous:s,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new qv(i,n,s))}consumeInternalRecovery(e,n,r){if(this.recoveryEnabled&&r.name==="MismatchedTokenException"&&!this.isBackTracking()){const i=this.getFollowsForInRuleRecovery(e,n);try{return this.tryInRuleRecovery(e,i)}catch(s){throw s.name===Uv?r:s}}else throw r}saveRecogState(){const e=this.errors,n=Qe(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:n,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,n,r){this.RULE_OCCURRENCE_STACK.push(r),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(n)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){const e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),Bn)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}}class KE{initErrorHandler(e){this._errors=[],this.errorMessageProvider=B(e,"errorMessageProvider")?e.errorMessageProvider:bn.errorMessageProvider}SAVE_ERROR(e){if(bc(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Qe(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Qe(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,n,r){const i=this.getCurrRuleFullName(),s=this.getGAstProductions()[i],a=vl(e,s,n,this.maxLookahead)[0],c=[];for(let u=1;u<=this.maxLookahead;u++)c.push(this.LA(u));const l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:a,actual:c,previous:this.LA(0),customUserDescription:r,ruleName:i});throw this.SAVE_ERROR(new kE(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,n){const r=this.getCurrRuleFullName(),i=this.getGAstProductions()[r],s=yl(e,i,this.maxLookahead),o=[];for(let l=1;l<=this.maxLookahead;l++)o.push(this.LA(l));const a=this.LA(0),c=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:s,actual:o,previous:a,customUserDescription:n,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new wE(c,this.LA(1),a))}}class WE{initContentAssist(){}computeContentAssist(e,n){const r=this.gastProductionsCache[e];if(wn(r))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Av([r],n,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){const n=Ut(e.ruleStack),i=this.getGAstProductions()[n];return new V$(i,e).startWalking()}}const Tl={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(Tl);const Lp=!0,Mp=Math.pow(2,Yn)-1,Gv=Ev({name:"RECORDING_PHASE_TOKEN",pattern:dt.NA});Is([Gv]);const zv=dh(Gv,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(zv);const GE={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}};class zE{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){const n=e>0?e:"";this[`CONSUME${n}`]=function(r,i){return this.consumeInternalRecord(r,e,i)},this[`SUBRULE${n}`]=function(r,i){return this.subruleInternalRecord(r,e,i)},this[`OPTION${n}`]=function(r){return this.optionInternalRecord(r,e)},this[`OR${n}`]=function(r){return this.orInternalRecord(r,e)},this[`MANY${n}`]=function(r){this.manyInternalRecord(e,r)},this[`MANY_SEP${n}`]=function(r){this.manySepFirstInternalRecord(e,r)},this[`AT_LEAST_ONE${n}`]=function(r){this.atLeastOneInternalRecord(e,r)},this[`AT_LEAST_ONE_SEP${n}`]=function(r){this.atLeastOneSepFirstInternalRecord(e,r)}}this.consume=function(e,n,r){return this.consumeInternalRecord(n,e,r)},this.subrule=function(e,n,r){return this.subruleInternalRecord(n,e,r)},this.option=function(e,n){return this.optionInternalRecord(n,e)},this.or=function(e,n){return this.orInternalRecord(n,e)},this.many=function(e,n){this.manyInternalRecord(e,n)},this.atLeastOne=function(e,n){this.atLeastOneInternalRecord(e,n)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{const e=this;for(let n=0;n<10;n++){const r=n>0?n:"";delete e[`CONSUME${r}`],delete e[`SUBRULE${r}`],delete e[`OPTION${r}`],delete e[`OR${r}`],delete e[`MANY${r}`],delete e[`MANY_SEP${r}`],delete e[`AT_LEAST_ONE${r}`],delete e[`AT_LEAST_ONE_SEP${r}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,n){return()=>!0}LA_RECORD(e){return Sc}topLevelRuleRecord(e,n){try{const r=new Yr({definition:[],name:e});return r.name=e,this.recordingProdStack.push(r),n.call(this),this.recordingProdStack.pop(),r}catch(r){if(r.KNOWN_RECORDER_ERROR!==!0)try{r.message=r.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw r}throw r}}optionInternalRecord(e,n){return fi.call(this,Je,e,n)}atLeastOneInternalRecord(e,n){fi.call(this,bt,n,e)}atLeastOneSepFirstInternalRecord(e,n){fi.call(this,kt,n,e,Lp)}manyInternalRecord(e,n){fi.call(this,$e,n,e)}manySepFirstInternalRecord(e,n){fi.call(this,pt,n,e,Lp)}orInternalRecord(e,n){return VE.call(this,e,n)}subruleInternalRecord(e,n,r){if(kc(n),!e||B(e,"ruleName")===!1){const a=new Error(`<SUBRULE${Fp(n)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw a.KNOWN_RECORDER_ERROR=!0,a}const i=Nr(this.recordingProdStack),s=e.ruleName,o=new ot({idx:n,nonTerminalName:s,label:r==null?void 0:r.LABEL,referencedRule:void 0});return i.definition.push(o),this.outputCst?GE:Tl}consumeInternalRecord(e,n,r){if(kc(n),!Cv(e)){const o=new Error(`<CONSUME${Fp(n)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw o.KNOWN_RECORDER_ERROR=!0,o}const i=Nr(this.recordingProdStack),s=new ge({idx:n,terminalType:e,label:r==null?void 0:r.LABEL});return i.definition.push(s),zv}}function fi(t,e,n,r=!1){kc(n);const i=Nr(this.recordingProdStack),s=Cn(e)?e:e.DEF,o=new t({definition:[],idx:n});return r&&(o.separator=e.SEP),B(e,"MAX_LOOKAHEAD")&&(o.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(o),s.call(this),i.definition.push(o),this.recordingProdStack.pop(),Tl}function VE(t,e){kc(e);const n=Nr(this.recordingProdStack),r=ee(t)===!1,i=r===!1?t:t.DEF,s=new mt({definition:[],idx:e,ignoreAmbiguities:r&&t.IGNORE_AMBIGUITIES===!0});B(t,"MAX_LOOKAHEAD")&&(s.maxLookahead=t.MAX_LOOKAHEAD);const o=hv(i,a=>Cn(a.GATE));return s.hasPredicates=o,n.definition.push(s),U(i,a=>{const c=new ht({definition:[]});s.definition.push(c),B(a,"IGNORE_AMBIGUITIES")?c.ignoreAmbiguities=a.IGNORE_AMBIGUITIES:B(a,"GATE")&&(c.ignoreAmbiguities=!0),this.recordingProdStack.push(c),a.ALT.call(this),this.recordingProdStack.pop()}),Tl}function Fp(t){return t===0?"":`${t}`}function kc(t){if(t<0||t>Mp){const e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${Mp+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}class YE{initPerformanceTracer(e){if(B(e,"traceInitPerf")){const n=e.traceInitPerf,r=typeof n=="number";this.traceInitMaxIdent=r?n:1/0,this.traceInitPerf=r?n>0:n}else this.traceInitMaxIdent=0,this.traceInitPerf=bn.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,n){if(this.traceInitPerf===!0){this.traceInitIndent++;const r=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${r}--> <${e}>`);const{time:i,value:s}=gv(n),o=i>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&o(`${r}<-- <${e}> time: ${i}ms`),this.traceInitIndent--,s}else return n()}}function XE(t,e){e.forEach(n=>{const r=n.prototype;Object.getOwnPropertyNames(r).forEach(i=>{if(i==="constructor")return;const s=Object.getOwnPropertyDescriptor(r,i);s&&(s.get||s.set)?Object.defineProperty(t.prototype,i,s):t.prototype[i]=n.prototype[i]})})}const Sc=dh(Bn,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Sc);const bn=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Sr,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Cc=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0});var at;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(at||(at={}));function Hp(t=void 0){return function(){return t}}class Ds{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;const n=this.className;this.TRACE_INIT("toFastProps",()=>{yv(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),U(this.definedRulesNames,i=>{const o=this[i].originalGrammarAction;let a;this.TRACE_INIT(`${i} Rule`,()=>{a=this.topLevelRuleRecord(i,o)}),this.gastProductionsCache[i]=a})}finally{this.disableRecording()}});let r=[];if(this.TRACE_INIT("Grammar Resolving",()=>{r=TE({rules:Ue(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(r)}),this.TRACE_INIT("Grammar Validations",()=>{if(le(r)&&this.skipValidations===!1){const i=RE({rules:Ue(this.gastProductionsCache),tokenTypes:Ue(this.tokensMap),errMsgProvider:tr,grammarName:n}),s=sE({lookaheadStrategy:this.lookaheadStrategy,rules:Ue(this.gastProductionsCache),tokenTypes:Ue(this.tokensMap),grammarName:n});this.definitionErrors=this.definitionErrors.concat(i,s)}}),le(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{const i=i$(Ue(this.gastProductionsCache));this.resyncFollows=i}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var i,s;(s=(i=this.lookaheadStrategy).initialize)===null||s===void 0||s.call(i,{rules:Ue(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(Ue(this.gastProductionsCache))})),!Ds.DEFER_DEFINITION_ERRORS_HANDLING&&!le(this.definitionErrors))throw e=M(this.definitionErrors,i=>i.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,n){this.definitionErrors=[],this.selfAnalysisDone=!1;const r=this;if(r.initErrorHandler(n),r.initLexerAdapter(),r.initLooksAhead(n),r.initRecognizerEngine(e,n),r.initRecoverable(n),r.initTreeBuilder(n),r.initContentAssist(),r.initGastRecorder(n),r.initPerformanceTracer(n),B(n,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=B(n,"skipValidations")?n.skipValidations:bn.skipValidations}}Ds.DEFER_DEFINITION_ERRORS_HANDLING=!1;XE(Ds,[CE,PE,jE,qE,BE,UE,KE,WE,zE,YE]);class JE extends Ds{constructor(e,n=bn){const r=Qe(n);r.outputCst=!1,super(e,r)}}function Dr(t,e,n){return`${t.name}_${e}_${n}`}const Kn=1,QE=2,Vv=4,Yv=5,Os=7,ZE=8,eP=9,tP=10,nP=11,Xv=12;class mh{constructor(e){this.target=e}isEpsilon(){return!1}}class gh extends mh{constructor(e,n){super(e),this.tokenType=n}}class Jv extends mh{constructor(e){super(e)}isEpsilon(){return!0}}class yh extends mh{constructor(e,n,r){super(e),this.rule=n,this.followState=r}isEpsilon(){return!0}}function rP(t){const e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};iP(e,t);const n=t.length;for(let r=0;r<n;r++){const i=t[r],s=gr(e,i,i);s!==void 0&&mP(e,i,s)}return e}function iP(t,e){const n=e.length;for(let r=0;r<n;r++){const i=e[r],s=Ke(t,i,void 0,{type:QE}),o=Ke(t,i,void 0,{type:Os});s.stop=o,t.ruleToStartState.set(i,s),t.ruleToStopState.set(i,o)}}function Qv(t,e,n){return n instanceof ge?vh(t,e,n.terminalType,n):n instanceof ot?pP(t,e,n):n instanceof mt?lP(t,e,n):n instanceof Je?uP(t,e,n):n instanceof $e?sP(t,e,n):n instanceof pt?oP(t,e,n):n instanceof bt?aP(t,e,n):n instanceof kt?cP(t,e,n):gr(t,e,n)}function sP(t,e,n){const r=Ke(t,e,n,{type:Yv});Xn(t,r);const i=Jr(t,e,r,n,gr(t,e,n));return e_(t,e,n,i)}function oP(t,e,n){const r=Ke(t,e,n,{type:Yv});Xn(t,r);const i=Jr(t,e,r,n,gr(t,e,n)),s=vh(t,e,n.separator,n);return e_(t,e,n,i,s)}function aP(t,e,n){const r=Ke(t,e,n,{type:Vv});Xn(t,r);const i=Jr(t,e,r,n,gr(t,e,n));return Zv(t,e,n,i)}function cP(t,e,n){const r=Ke(t,e,n,{type:Vv});Xn(t,r);const i=Jr(t,e,r,n,gr(t,e,n)),s=vh(t,e,n.separator,n);return Zv(t,e,n,i,s)}function lP(t,e,n){const r=Ke(t,e,n,{type:Kn});Xn(t,r);const i=M(n.definition,o=>Qv(t,e,o));return Jr(t,e,r,n,...i)}function uP(t,e,n){const r=Ke(t,e,n,{type:Kn});Xn(t,r);const i=Jr(t,e,r,n,gr(t,e,n));return dP(t,e,n,i)}function gr(t,e,n){const r=wt(M(n.definition,i=>Qv(t,e,i)),i=>i!==void 0);return r.length===1?r[0]:r.length===0?void 0:hP(t,r)}function Zv(t,e,n,r,i){const s=r.left,o=r.right,a=Ke(t,e,n,{type:nP});Xn(t,a);const c=Ke(t,e,n,{type:Xv});return s.loopback=a,c.loopback=a,t.decisionMap[Dr(e,i?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",n.idx)]=a,Le(o,a),i===void 0?(Le(a,s),Le(a,c)):(Le(a,c),Le(a,i.left),Le(i.right,s)),{left:s,right:c}}function e_(t,e,n,r,i){const s=r.left,o=r.right,a=Ke(t,e,n,{type:tP});Xn(t,a);const c=Ke(t,e,n,{type:Xv}),l=Ke(t,e,n,{type:eP});return a.loopback=l,c.loopback=l,Le(a,s),Le(a,c),Le(o,l),i!==void 0?(Le(l,c),Le(l,i.left),Le(i.right,s)):Le(l,a),t.decisionMap[Dr(e,i?"RepetitionWithSeparator":"Repetition",n.idx)]=a,{left:a,right:c}}function dP(t,e,n,r){const i=r.left,s=r.right;return Le(i,s),t.decisionMap[Dr(e,"Option",n.idx)]=i,r}function Xn(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Jr(t,e,n,r,...i){const s=Ke(t,e,r,{type:ZE,start:n});n.end=s;for(const a of i)a!==void 0?(Le(n,a.left),Le(a.right,s)):Le(n,s);const o={left:n,right:s};return t.decisionMap[Dr(e,fP(r),r.idx)]=n,o}function fP(t){if(t instanceof mt)return"Alternation";if(t instanceof Je)return"Option";if(t instanceof $e)return"Repetition";if(t instanceof pt)return"RepetitionWithSeparator";if(t instanceof bt)return"RepetitionMandatory";if(t instanceof kt)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function hP(t,e){const n=e.length;for(let s=0;s<n-1;s++){const o=e[s];let a;o.left.transitions.length===1&&(a=o.left.transitions[0]);const c=a instanceof yh,l=a,u=e[s+1].left;o.left.type===Kn&&o.right.type===Kn&&a!==void 0&&(c&&l.followState===o.right||a.target===o.right)?(c?l.followState=u:a.target=u,gP(t,o.right)):Le(o.right,u)}const r=e[0],i=e[n-1];return{left:r.left,right:i.right}}function vh(t,e,n,r){const i=Ke(t,e,r,{type:Kn}),s=Ke(t,e,r,{type:Kn});return _h(i,new gh(s,n)),{left:i,right:s}}function pP(t,e,n){const r=n.referencedRule,i=t.ruleToStartState.get(r),s=Ke(t,e,n,{type:Kn}),o=Ke(t,e,n,{type:Kn}),a=new yh(i,r,o);return _h(s,a),{left:s,right:o}}function mP(t,e,n){const r=t.ruleToStartState.get(e);Le(r,n.left);const i=t.ruleToStopState.get(e);return Le(n.right,i),{left:r,right:i}}function Le(t,e){const n=new Jv(e);_h(t,n)}function Ke(t,e,n,r){const i=Object.assign({atn:t,production:n,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},r);return t.states.push(i),i}function _h(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function gP(t,e){t.states.splice(t.states.indexOf(e),1)}const $c={};class _d{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){const n=t_(e);n in this.map||(this.map[n]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return M(this.configs,e=>e.alt)}get key(){let e="";for(const n in this.map)e+=n+":";return e}}function t_(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(n=>n.stateNumber.toString()).join("_")}`}function yP(t,e){const n={};return r=>{const i=r.toString();let s=n[i];return s!==void 0||(s={atnStartState:t,decision:e,states:{}},n[i]=s),s}}class n_{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,n){this.predicates[e]=n}toString(){let e="";const n=this.predicates.length;for(let r=0;r<n;r++)e+=this.predicates[r]===!0?"1":"0";return e}}const jp=new n_;class vP extends ph{constructor(e){var n;super(),this.logging=(n=e==null?void 0:e.logging)!==null&&n!==void 0?n:r=>console.log(r)}initialize(e){this.atn=rP(e.rules),this.dfas=_P(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){const{prodOccurrence:n,rule:r,hasPredicates:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,c=Dr(r,"Alternation",n),u=this.atn.decisionMap[c].decision,f=M(Ip({maxLookahead:1,occurrence:n,prodType:"Alternation",rule:r}),h=>M(h,p=>p[0]));if(qp(f,!1)&&!s){const h=st(f,(p,d,y)=>(U(d,w=>{w&&(p[w.tokenTypeIdx]=y,U(w.categoryMatches,_=>{p[_]=y}))}),p),{});return i?function(p){var d;const y=this.LA(1),w=h[y.tokenTypeIdx];if(p!==void 0&&w!==void 0){const _=(d=p[w])===null||d===void 0?void 0:d.GATE;if(_!==void 0&&_.call(this)===!1)return}return w}:function(){const p=this.LA(1);return h[p.tokenTypeIdx]}}else return i?function(h){const p=new n_,d=h===void 0?0:h.length;for(let w=0;w<d;w++){const _=h==null?void 0:h[w].GATE;p.set(w,_===void 0||_.call(this))}const y=ou.call(this,o,u,p,a);return typeof y=="number"?y:void 0}:function(){const h=ou.call(this,o,u,jp,a);return typeof h=="number"?h:void 0}}buildLookaheadForOptional(e){const{prodOccurrence:n,rule:r,prodType:i,dynamicTokensEnabled:s}=e,o=this.dfas,a=this.logging,c=Dr(r,i,n),u=this.atn.decisionMap[c].decision,f=M(Ip({maxLookahead:1,occurrence:n,prodType:i,rule:r}),h=>M(h,p=>p[0]));if(qp(f)&&f[0][0]&&!s){const h=f[0],p=Pt(h);if(p.length===1&&le(p[0].categoryMatches)){const y=p[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===y}}else{const d=st(p,(y,w)=>(w!==void 0&&(y[w.tokenTypeIdx]=!0,U(w.categoryMatches,_=>{y[_]=!0})),y),{});return function(){const y=this.LA(1);return d[y.tokenTypeIdx]===!0}}}return function(){const h=ou.call(this,o,u,jp,a);return typeof h=="object"?!1:h===0}}}function qp(t,e=!0){const n=new Set;for(const r of t){const i=new Set;for(const s of r){if(s===void 0){if(e)break;return!1}const o=[s.tokenTypeIdx].concat(s.categoryMatches);for(const a of o)if(n.has(a)){if(!i.has(a))return!1}else n.add(a),i.add(a)}}return!0}function _P(t){const e=t.decisionStates.length,n=Array(e);for(let r=0;r<e;r++)n[r]=yP(t.decisionStates[r],r);return n}function ou(t,e,n,r){const i=t[e](n);let s=i.start;if(s===void 0){const a=AP(i.atnStartState);s=i_(i,r_(a)),i.start=s}return TP.apply(this,[i,s,n,r])}function TP(t,e,n,r){let i=e,s=1;const o=[];let a=this.LA(s++);for(;;){let c=CP(i,a);if(c===void 0&&(c=RP.apply(this,[t,i,a,s,n,r])),c===$c)return SP(o,i,a);if(c.isAcceptState===!0)return c.prediction;i=c,o.push(a),a=this.LA(s++)}}function RP(t,e,n,r,i,s){const o=$P(e.configs,n,i);if(o.size===0)return Up(t,e,n,$c),$c;let a=r_(o);const c=PP(o,i);if(c!==void 0)a.isAcceptState=!0,a.prediction=c,a.configs.uniqueAlt=c;else if(OP(o)){const l=FC(o.alts);a.isAcceptState=!0,a.prediction=l,a.configs.uniqueAlt=l,wP.apply(this,[t,r,o.alts,s])}return a=Up(t,e,n,a),a}function wP(t,e,n,r){const i=[];for(let l=1;l<=e;l++)i.push(this.LA(l).tokenType);const s=t.atnStartState,o=s.rule,a=s.production,c=bP({topLevelRule:o,ambiguityIndices:n,production:a,prefixPath:i});r(c)}function bP(t){const e=M(t.prefixPath,i=>$r(i)).join(", "),n=t.production.idx===0?"":t.production.idx;let r=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${kP(t.production)}${n}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return r=r+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,r}function kP(t){if(t instanceof ot)return"SUBRULE";if(t instanceof Je)return"OPTION";if(t instanceof mt)return"OR";if(t instanceof bt)return"AT_LEAST_ONE";if(t instanceof kt)return"AT_LEAST_ONE_SEP";if(t instanceof pt)return"MANY_SEP";if(t instanceof $e)return"MANY";if(t instanceof ge)return"CONSUME";throw Error("non exhaustive match")}function SP(t,e,n){const r=Tt(e.configs.elements,s=>s.state.transitions),i=VC(r.filter(s=>s instanceof gh).map(s=>s.tokenType),s=>s.tokenTypeIdx);return{actualToken:n,possibleTokenTypes:i,tokenPath:t}}function CP(t,e){return t.edges[e.tokenTypeIdx]}function $P(t,e,n){const r=new _d,i=[];for(const o of t.elements){if(n.is(o.alt)===!1)continue;if(o.state.type===Os){i.push(o);continue}const a=o.state.transitions.length;for(let c=0;c<a;c++){const l=o.state.transitions[c],u=EP(l,e);u!==void 0&&r.add({state:u,alt:o.alt,stack:o.stack})}}let s;if(i.length===0&&r.size===1&&(s=r),s===void 0){s=new _d;for(const o of r.elements)Ec(o,s)}if(i.length>0&&!IP(s))for(const o of i)s.add(o);return s}function EP(t,e){if(t instanceof gh&&Pv(e,t.tokenType))return t.target}function PP(t,e){let n;for(const r of t.elements)if(e.is(r.alt)===!0){if(n===void 0)n=r.alt;else if(n!==r.alt)return}return n}function r_(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function Up(t,e,n,r){return r=i_(t,r),e.edges[n.tokenTypeIdx]=r,r}function i_(t,e){if(e===$c)return e;const n=e.configs.key,r=t.states[n];return r!==void 0?r:(e.configs.finalize(),t.states[n]=e,e)}function AP(t){const e=new _d,n=t.transitions.length;for(let r=0;r<n;r++){const s={state:t.transitions[r].target,alt:r,stack:[]};Ec(s,e)}return e}function Ec(t,e){const n=t.state;if(n.type===Os){if(t.stack.length>0){const i=[...t.stack],o={state:i.pop(),alt:t.alt,stack:i};Ec(o,e)}else e.add(t);return}n.epsilonOnlyTransitions||e.add(t);const r=n.transitions.length;for(let i=0;i<r;i++){const s=n.transitions[i],o=NP(t,s);o!==void 0&&Ec(o,e)}}function NP(t,e){if(e instanceof Jv)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof yh){const n=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:n}}}function IP(t){for(const e of t.elements)if(e.state.type===Os)return!0;return!1}function DP(t){for(const e of t.elements)if(e.state.type!==Os)return!1;return!0}function OP(t){if(DP(t))return!0;const e=xP(t.elements);return LP(e)&&!MP(e)}function xP(t){const e=new Map;for(const n of t){const r=t_(n,!1);let i=e.get(r);i===void 0&&(i={},e.set(r,i)),i[n.alt]=!0}return e}function LP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function MP(t){for(const e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}var Td;(function(t){function e(n){return typeof n=="string"}t.is=e})(Td||(Td={}));var Pc;(function(t){function e(n){return typeof n=="string"}t.is=e})(Pc||(Pc={}));var Rd;(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(Rd||(Rd={}));var ls;(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(n){return typeof n=="number"&&t.MIN_VALUE<=n&&n<=t.MAX_VALUE}t.is=e})(ls||(ls={}));var re;(function(t){function e(r,i){return r===Number.MAX_VALUE&&(r=ls.MAX_VALUE),i===Number.MAX_VALUE&&(i=ls.MAX_VALUE),{line:r,character:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&k.uinteger(i.line)&&k.uinteger(i.character)}t.is=n})(re||(re={}));var Q;(function(t){function e(r,i,s,o){if(k.uinteger(r)&&k.uinteger(i)&&k.uinteger(s)&&k.uinteger(o))return{start:re.create(r,i),end:re.create(s,o)};if(re.is(r)&&re.is(i))return{start:r,end:i};throw new Error(`Range#create called with invalid arguments[${r}, ${i}, ${s}, ${o}]`)}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&re.is(i.start)&&re.is(i.end)}t.is=n})(Q||(Q={}));var us;(function(t){function e(r,i){return{uri:r,range:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.range)&&(k.string(i.uri)||k.undefined(i.uri))}t.is=n})(us||(us={}));var wd;(function(t){function e(r,i,s,o){return{targetUri:r,targetRange:i,targetSelectionRange:s,originSelectionRange:o}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.targetRange)&&k.string(i.targetUri)&&Q.is(i.targetSelectionRange)&&(Q.is(i.originSelectionRange)||k.undefined(i.originSelectionRange))}t.is=n})(wd||(wd={}));var Ac;(function(t){function e(r,i,s,o){return{red:r,green:i,blue:s,alpha:o}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.numberRange(i.red,0,1)&&k.numberRange(i.green,0,1)&&k.numberRange(i.blue,0,1)&&k.numberRange(i.alpha,0,1)}t.is=n})(Ac||(Ac={}));var bd;(function(t){function e(r,i){return{range:r,color:i}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&Q.is(i.range)&&Ac.is(i.color)}t.is=n})(bd||(bd={}));var kd;(function(t){function e(r,i,s){return{label:r,textEdit:i,additionalTextEdits:s}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.string(i.label)&&(k.undefined(i.textEdit)||jt.is(i))&&(k.undefined(i.additionalTextEdits)||k.typedArray(i.additionalTextEdits,jt.is))}t.is=n})(kd||(kd={}));var Sd;(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Sd||(Sd={}));var Cd;(function(t){function e(r,i,s,o,a,c){const l={startLine:r,endLine:i};return k.defined(s)&&(l.startCharacter=s),k.defined(o)&&(l.endCharacter=o),k.defined(a)&&(l.kind=a),k.defined(c)&&(l.collapsedText=c),l}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.uinteger(i.startLine)&&k.uinteger(i.startLine)&&(k.undefined(i.startCharacter)||k.uinteger(i.startCharacter))&&(k.undefined(i.endCharacter)||k.uinteger(i.endCharacter))&&(k.undefined(i.kind)||k.string(i.kind))}t.is=n})(Cd||(Cd={}));var Nc;(function(t){function e(r,i){return{location:r,message:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&us.is(i.location)&&k.string(i.message)}t.is=n})(Nc||(Nc={}));var $d;(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})($d||($d={}));var Ed;(function(t){t.Unnecessary=1,t.Deprecated=2})(Ed||(Ed={}));var Pd;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&k.string(r.href)}t.is=e})(Pd||(Pd={}));var ds;(function(t){function e(r,i,s,o,a,c){let l={range:r,message:i};return k.defined(s)&&(l.severity=s),k.defined(o)&&(l.code=o),k.defined(a)&&(l.source=a),k.defined(c)&&(l.relatedInformation=c),l}t.create=e;function n(r){var i;let s=r;return k.defined(s)&&Q.is(s.range)&&k.string(s.message)&&(k.number(s.severity)||k.undefined(s.severity))&&(k.integer(s.code)||k.string(s.code)||k.undefined(s.code))&&(k.undefined(s.codeDescription)||k.string((i=s.codeDescription)===null||i===void 0?void 0:i.href))&&(k.string(s.source)||k.undefined(s.source))&&(k.undefined(s.relatedInformation)||k.typedArray(s.relatedInformation,Nc.is))}t.is=n})(ds||(ds={}));var ur;(function(t){function e(r,i,...s){let o={title:r,command:i};return k.defined(s)&&s.length>0&&(o.arguments=s),o}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.title)&&k.string(i.command)}t.is=n})(ur||(ur={}));var jt;(function(t){function e(s,o){return{range:s,newText:o}}t.replace=e;function n(s,o){return{range:{start:s,end:s},newText:o}}t.insert=n;function r(s){return{range:s,newText:""}}t.del=r;function i(s){const o=s;return k.objectLiteral(o)&&k.string(o.newText)&&Q.is(o.range)}t.is=i})(jt||(jt={}));var rr;(function(t){function e(r,i,s){const o={label:r};return i!==void 0&&(o.needsConfirmation=i),s!==void 0&&(o.description=s),o}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&k.string(i.label)&&(k.boolean(i.needsConfirmation)||i.needsConfirmation===void 0)&&(k.string(i.description)||i.description===void 0)}t.is=n})(rr||(rr={}));var Ye;(function(t){function e(n){const r=n;return k.string(r)}t.is=e})(Ye||(Ye={}));var mn;(function(t){function e(s,o,a){return{range:s,newText:o,annotationId:a}}t.replace=e;function n(s,o,a){return{range:{start:s,end:s},newText:o,annotationId:a}}t.insert=n;function r(s,o){return{range:s,newText:"",annotationId:o}}t.del=r;function i(s){const o=s;return jt.is(o)&&(rr.is(o.annotationId)||Ye.is(o.annotationId))}t.is=i})(mn||(mn={}));var fs;(function(t){function e(r,i){return{textDocument:r,edits:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&hs.is(i.textDocument)&&Array.isArray(i.edits)}t.is=n})(fs||(fs={}));var Or;(function(t){function e(r,i,s){let o={kind:"create",uri:r};return i!==void 0&&(i.overwrite!==void 0||i.ignoreIfExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="create"&&k.string(i.uri)&&(i.options===void 0||(i.options.overwrite===void 0||k.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||k.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(Or||(Or={}));var xr;(function(t){function e(r,i,s,o){let a={kind:"rename",oldUri:r,newUri:i};return s!==void 0&&(s.overwrite!==void 0||s.ignoreIfExists!==void 0)&&(a.options=s),o!==void 0&&(a.annotationId=o),a}t.create=e;function n(r){let i=r;return i&&i.kind==="rename"&&k.string(i.oldUri)&&k.string(i.newUri)&&(i.options===void 0||(i.options.overwrite===void 0||k.boolean(i.options.overwrite))&&(i.options.ignoreIfExists===void 0||k.boolean(i.options.ignoreIfExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(xr||(xr={}));var Lr;(function(t){function e(r,i,s){let o={kind:"delete",uri:r};return i!==void 0&&(i.recursive!==void 0||i.ignoreIfNotExists!==void 0)&&(o.options=i),s!==void 0&&(o.annotationId=s),o}t.create=e;function n(r){let i=r;return i&&i.kind==="delete"&&k.string(i.uri)&&(i.options===void 0||(i.options.recursive===void 0||k.boolean(i.options.recursive))&&(i.options.ignoreIfNotExists===void 0||k.boolean(i.options.ignoreIfNotExists)))&&(i.annotationId===void 0||Ye.is(i.annotationId))}t.is=n})(Lr||(Lr={}));var Ic;(function(t){function e(n){let r=n;return r&&(r.changes!==void 0||r.documentChanges!==void 0)&&(r.documentChanges===void 0||r.documentChanges.every(i=>k.string(i.kind)?Or.is(i)||xr.is(i)||Lr.is(i):fs.is(i)))}t.is=e})(Ic||(Ic={}));class yo{constructor(e,n){this.edits=e,this.changeAnnotations=n}insert(e,n,r){let i,s;if(r===void 0?i=jt.insert(e,n):Ye.is(r)?(s=r,i=mn.insert(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.insert(e,n,s)),this.edits.push(i),s!==void 0)return s}replace(e,n,r){let i,s;if(r===void 0?i=jt.replace(e,n):Ye.is(r)?(s=r,i=mn.replace(e,n,r)):(this.assertChangeAnnotations(this.changeAnnotations),s=this.changeAnnotations.manage(r),i=mn.replace(e,n,s)),this.edits.push(i),s!==void 0)return s}delete(e,n){let r,i;if(n===void 0?r=jt.del(e):Ye.is(n)?(i=n,r=mn.del(e,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=mn.del(e,i)),this.edits.push(r),i!==void 0)return i}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}}class Bp{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,n){let r;if(Ye.is(e)?r=e:(r=this.nextId(),n=e),this._annotations[r]!==void 0)throw new Error(`Id ${r} is already in use.`);if(n===void 0)throw new Error(`No annotation provided for id ${r}`);return this._annotations[r]=n,this._size++,r}nextId(){return this._counter++,this._counter.toString()}}class FP{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new Bp(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(n=>{if(fs.is(n)){const r=new yo(n.edits,this._changeAnnotations);this._textEditChanges[n.textDocument.uri]=r}})):e.changes&&Object.keys(e.changes).forEach(n=>{const r=new yo(e.changes[n]);this._textEditChanges[n]=r})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(hs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");const n={uri:e.uri,version:e.version};let r=this._textEditChanges[n.uri];if(!r){const i=[],s={textDocument:n,edits:i};this._workspaceEdit.documentChanges.push(s),r=new yo(i,this._changeAnnotations),this._textEditChanges[n.uri]=r}return r}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let n=this._textEditChanges[e];if(!n){let r=[];this._workspaceEdit.changes[e]=r,n=new yo(r),this._textEditChanges[e]=n}return n}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new Bp,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;rr.is(n)||Ye.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Or.create(e,r):(o=Ye.is(i)?i:this._changeAnnotations.manage(i),s=Or.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}renameFile(e,n,r,i){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let s;rr.is(r)||Ye.is(r)?s=r:i=r;let o,a;if(s===void 0?o=xr.create(e,n,i):(a=Ye.is(s)?s:this._changeAnnotations.manage(s),o=xr.create(e,n,i,a)),this._workspaceEdit.documentChanges.push(o),a!==void 0)return a}deleteFile(e,n,r){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let i;rr.is(n)||Ye.is(n)?i=n:r=n;let s,o;if(i===void 0?s=Lr.create(e,r):(o=Ye.is(i)?i:this._changeAnnotations.manage(i),s=Lr.create(e,r,o)),this._workspaceEdit.documentChanges.push(s),o!==void 0)return o}}var Ad;(function(t){function e(r){return{uri:r}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)}t.is=n})(Ad||(Ad={}));var Nd;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&k.integer(i.version)}t.is=n})(Nd||(Nd={}));var hs;(function(t){function e(r,i){return{uri:r,version:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&(i.version===null||k.integer(i.version))}t.is=n})(hs||(hs={}));var Id;(function(t){function e(r,i,s,o){return{uri:r,languageId:i,version:s,text:o}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.string(i.uri)&&k.string(i.languageId)&&k.integer(i.version)&&k.string(i.text)}t.is=n})(Id||(Id={}));var Dc;(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(n){const r=n;return r===t.PlainText||r===t.Markdown}t.is=e})(Dc||(Dc={}));var Mr;(function(t){function e(n){const r=n;return k.objectLiteral(n)&&Dc.is(r.kind)&&k.string(r.value)}t.is=e})(Mr||(Mr={}));var Dd;(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Dd||(Dd={}));var Od;(function(t){t.PlainText=1,t.Snippet=2})(Od||(Od={}));var xd;(function(t){t.Deprecated=1})(xd||(xd={}));var Ld;(function(t){function e(r,i,s){return{newText:r,insert:i,replace:s}}t.create=e;function n(r){const i=r;return i&&k.string(i.newText)&&Q.is(i.insert)&&Q.is(i.replace)}t.is=n})(Ld||(Ld={}));var Md;(function(t){t.asIs=1,t.adjustIndentation=2})(Md||(Md={}));var Fd;(function(t){function e(n){const r=n;return r&&(k.string(r.detail)||r.detail===void 0)&&(k.string(r.description)||r.description===void 0)}t.is=e})(Fd||(Fd={}));var Hd;(function(t){function e(n){return{label:n}}t.create=e})(Hd||(Hd={}));var jd;(function(t){function e(n,r){return{items:n||[],isIncomplete:!!r}}t.create=e})(jd||(jd={}));var ps;(function(t){function e(r){return r.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function n(r){const i=r;return k.string(i)||k.objectLiteral(i)&&k.string(i.language)&&k.string(i.value)}t.is=n})(ps||(ps={}));var qd;(function(t){function e(n){let r=n;return!!r&&k.objectLiteral(r)&&(Mr.is(r.contents)||ps.is(r.contents)||k.typedArray(r.contents,ps.is))&&(n.range===void 0||Q.is(n.range))}t.is=e})(qd||(qd={}));var Ud;(function(t){function e(n,r){return r?{label:n,documentation:r}:{label:n}}t.create=e})(Ud||(Ud={}));var Bd;(function(t){function e(n,r,...i){let s={label:n};return k.defined(r)&&(s.documentation=r),k.defined(i)?s.parameters=i:s.parameters=[],s}t.create=e})(Bd||(Bd={}));var Kd;(function(t){t.Text=1,t.Read=2,t.Write=3})(Kd||(Kd={}));var Wd;(function(t){function e(n,r){let i={range:n};return k.number(r)&&(i.kind=r),i}t.create=e})(Wd||(Wd={}));var Gd;(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Gd||(Gd={}));var zd;(function(t){t.Deprecated=1})(zd||(zd={}));var Vd;(function(t){function e(n,r,i,s,o){let a={name:n,kind:r,location:{uri:s,range:i}};return o&&(a.containerName=o),a}t.create=e})(Vd||(Vd={}));var Yd;(function(t){function e(n,r,i,s){return s!==void 0?{name:n,kind:r,location:{uri:i,range:s}}:{name:n,kind:r,location:{uri:i}}}t.create=e})(Yd||(Yd={}));var Xd;(function(t){function e(r,i,s,o,a,c){let l={name:r,detail:i,kind:s,range:o,selectionRange:a};return c!==void 0&&(l.children=c),l}t.create=e;function n(r){let i=r;return i&&k.string(i.name)&&k.number(i.kind)&&Q.is(i.range)&&Q.is(i.selectionRange)&&(i.detail===void 0||k.string(i.detail))&&(i.deprecated===void 0||k.boolean(i.deprecated))&&(i.children===void 0||Array.isArray(i.children))&&(i.tags===void 0||Array.isArray(i.tags))}t.is=n})(Xd||(Xd={}));var Jd;(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(Jd||(Jd={}));var ms;(function(t){t.Invoked=1,t.Automatic=2})(ms||(ms={}));var Qd;(function(t){function e(r,i,s){let o={diagnostics:r};return i!=null&&(o.only=i),s!=null&&(o.triggerKind=s),o}t.create=e;function n(r){let i=r;return k.defined(i)&&k.typedArray(i.diagnostics,ds.is)&&(i.only===void 0||k.typedArray(i.only,k.string))&&(i.triggerKind===void 0||i.triggerKind===ms.Invoked||i.triggerKind===ms.Automatic)}t.is=n})(Qd||(Qd={}));var Zd;(function(t){function e(r,i,s){let o={title:r},a=!0;return typeof i=="string"?(a=!1,o.kind=i):ur.is(i)?o.command=i:o.edit=i,a&&s!==void 0&&(o.kind=s),o}t.create=e;function n(r){let i=r;return i&&k.string(i.title)&&(i.diagnostics===void 0||k.typedArray(i.diagnostics,ds.is))&&(i.kind===void 0||k.string(i.kind))&&(i.edit!==void 0||i.command!==void 0)&&(i.command===void 0||ur.is(i.command))&&(i.isPreferred===void 0||k.boolean(i.isPreferred))&&(i.edit===void 0||Ic.is(i.edit))}t.is=n})(Zd||(Zd={}));var ef;(function(t){function e(r,i){let s={range:r};return k.defined(i)&&(s.data=i),s}t.create=e;function n(r){let i=r;return k.defined(i)&&Q.is(i.range)&&(k.undefined(i.command)||ur.is(i.command))}t.is=n})(ef||(ef={}));var tf;(function(t){function e(r,i){return{tabSize:r,insertSpaces:i}}t.create=e;function n(r){let i=r;return k.defined(i)&&k.uinteger(i.tabSize)&&k.boolean(i.insertSpaces)}t.is=n})(tf||(tf={}));var nf;(function(t){function e(r,i,s){return{range:r,target:i,data:s}}t.create=e;function n(r){let i=r;return k.defined(i)&&Q.is(i.range)&&(k.undefined(i.target)||k.string(i.target))}t.is=n})(nf||(nf={}));var rf;(function(t){function e(r,i){return{range:r,parent:i}}t.create=e;function n(r){let i=r;return k.objectLiteral(i)&&Q.is(i.range)&&(i.parent===void 0||t.is(i.parent))}t.is=n})(rf||(rf={}));var sf;(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(sf||(sf={}));var of;(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(of||(of={}));var af;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&(r.resultId===void 0||typeof r.resultId=="string")&&Array.isArray(r.data)&&(r.data.length===0||typeof r.data[0]=="number")}t.is=e})(af||(af={}));var cf;(function(t){function e(r,i){return{range:r,text:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&k.string(i.text)}t.is=n})(cf||(cf={}));var lf;(function(t){function e(r,i,s){return{range:r,variableName:i,caseSensitiveLookup:s}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&k.boolean(i.caseSensitiveLookup)&&(k.string(i.variableName)||i.variableName===void 0)}t.is=n})(lf||(lf={}));var uf;(function(t){function e(r,i){return{range:r,expression:i}}t.create=e;function n(r){const i=r;return i!=null&&Q.is(i.range)&&(k.string(i.expression)||i.expression===void 0)}t.is=n})(uf||(uf={}));var df;(function(t){function e(r,i){return{frameId:r,stoppedLocation:i}}t.create=e;function n(r){const i=r;return k.defined(i)&&Q.is(r.stoppedLocation)}t.is=n})(df||(df={}));var Oc;(function(t){t.Type=1,t.Parameter=2;function e(n){return n===1||n===2}t.is=e})(Oc||(Oc={}));var xc;(function(t){function e(r){return{value:r}}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&(i.tooltip===void 0||k.string(i.tooltip)||Mr.is(i.tooltip))&&(i.location===void 0||us.is(i.location))&&(i.command===void 0||ur.is(i.command))}t.is=n})(xc||(xc={}));var ff;(function(t){function e(r,i,s){const o={position:r,label:i};return s!==void 0&&(o.kind=s),o}t.create=e;function n(r){const i=r;return k.objectLiteral(i)&&re.is(i.position)&&(k.string(i.label)||k.typedArray(i.label,xc.is))&&(i.kind===void 0||Oc.is(i.kind))&&i.textEdits===void 0||k.typedArray(i.textEdits,jt.is)&&(i.tooltip===void 0||k.string(i.tooltip)||Mr.is(i.tooltip))&&(i.paddingLeft===void 0||k.boolean(i.paddingLeft))&&(i.paddingRight===void 0||k.boolean(i.paddingRight))}t.is=n})(ff||(ff={}));var hf;(function(t){function e(n){return{kind:"snippet",value:n}}t.createSnippet=e})(hf||(hf={}));var pf;(function(t){function e(n,r,i,s){return{insertText:n,filterText:r,range:i,command:s}}t.create=e})(pf||(pf={}));var mf;(function(t){function e(n){return{items:n}}t.create=e})(mf||(mf={}));var gf;(function(t){t.Invoked=0,t.Automatic=1})(gf||(gf={}));var yf;(function(t){function e(n,r){return{range:n,text:r}}t.create=e})(yf||(yf={}));var vf;(function(t){function e(n,r){return{triggerKind:n,selectedCompletionInfo:r}}t.create=e})(vf||(vf={}));var _f;(function(t){function e(n){const r=n;return k.objectLiteral(r)&&Pc.is(r.uri)&&k.string(r.name)}t.is=e})(_f||(_f={}));const HP=[`
`,`\r
`,"\r"];var Tf;(function(t){function e(s,o,a,c){return new jP(s,o,a,c)}t.create=e;function n(s){let o=s;return!!(k.defined(o)&&k.string(o.uri)&&(k.undefined(o.languageId)||k.string(o.languageId))&&k.uinteger(o.lineCount)&&k.func(o.getText)&&k.func(o.positionAt)&&k.func(o.offsetAt))}t.is=n;function r(s,o){let a=s.getText(),c=i(o,(u,f)=>{let h=u.range.start.line-f.range.start.line;return h===0?u.range.start.character-f.range.start.character:h}),l=a.length;for(let u=c.length-1;u>=0;u--){let f=c[u],h=s.offsetAt(f.range.start),p=s.offsetAt(f.range.end);if(p<=l)a=a.substring(0,h)+f.newText+a.substring(p,a.length);else throw new Error("Overlapping edit");l=h}return a}t.applyEdits=r;function i(s,o){if(s.length<=1)return s;const a=s.length/2|0,c=s.slice(0,a),l=s.slice(a);i(c,o),i(l,o);let u=0,f=0,h=0;for(;u<c.length&&f<l.length;)o(c[u],l[f])<=0?s[h++]=c[u++]:s[h++]=l[f++];for(;u<c.length;)s[h++]=c[u++];for(;f<l.length;)s[h++]=l[f++];return s}})(Tf||(Tf={}));let jP=class{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){this._content=e.text,this._version=n,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],n=this._content,r=!0;for(let i=0;i<n.length;i++){r&&(e.push(i),r=!1);let s=n.charAt(i);r=s==="\r"||s===`
`,s==="\r"&&i+1<n.length&&n.charAt(i+1)===`
`&&i++}r&&n.length>0&&e.push(n.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let n=this.getLineOffsets(),r=0,i=n.length;if(i===0)return re.create(0,e);for(;r<i;){let o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}let s=r-1;return re.create(s,e-n[s])}offsetAt(e){let n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;let r=n[e.line],i=e.line+1<n.length?n[e.line+1]:this._content.length;return Math.max(Math.min(r+e.character,i),r)}get lineCount(){return this.getLineOffsets().length}};var k;(function(t){const e=Object.prototype.toString;function n(p){return typeof p<"u"}t.defined=n;function r(p){return typeof p>"u"}t.undefined=r;function i(p){return p===!0||p===!1}t.boolean=i;function s(p){return e.call(p)==="[object String]"}t.string=s;function o(p){return e.call(p)==="[object Number]"}t.number=o;function a(p,d,y){return e.call(p)==="[object Number]"&&d<=p&&p<=y}t.numberRange=a;function c(p){return e.call(p)==="[object Number]"&&-2147483648<=p&&p<=2147483647}t.integer=c;function l(p){return e.call(p)==="[object Number]"&&0<=p&&p<=2147483647}t.uinteger=l;function u(p){return e.call(p)==="[object Function]"}t.func=u;function f(p){return p!==null&&typeof p=="object"}t.objectLiteral=f;function h(p,d){return Array.isArray(p)&&p.every(d)}t.typedArray=h})(k||(k={}));var qP=Object.freeze({__proto__:null,get AnnotatedTextEdit(){return mn},get ChangeAnnotation(){return rr},get ChangeAnnotationIdentifier(){return Ye},get CodeAction(){return Zd},get CodeActionContext(){return Qd},get CodeActionKind(){return Jd},get CodeActionTriggerKind(){return ms},get CodeDescription(){return Pd},get CodeLens(){return ef},get Color(){return Ac},get ColorInformation(){return bd},get ColorPresentation(){return kd},get Command(){return ur},get CompletionItem(){return Hd},get CompletionItemKind(){return Dd},get CompletionItemLabelDetails(){return Fd},get CompletionItemTag(){return xd},get CompletionList(){return jd},get CreateFile(){return Or},get DeleteFile(){return Lr},get Diagnostic(){return ds},get DiagnosticRelatedInformation(){return Nc},get DiagnosticSeverity(){return $d},get DiagnosticTag(){return Ed},get DocumentHighlight(){return Wd},get DocumentHighlightKind(){return Kd},get DocumentLink(){return nf},get DocumentSymbol(){return Xd},get DocumentUri(){return Td},EOL:HP,get FoldingRange(){return Cd},get FoldingRangeKind(){return Sd},get FormattingOptions(){return tf},get Hover(){return qd},get InlayHint(){return ff},get InlayHintKind(){return Oc},get InlayHintLabelPart(){return xc},get InlineCompletionContext(){return vf},get InlineCompletionItem(){return pf},get InlineCompletionList(){return mf},get InlineCompletionTriggerKind(){return gf},get InlineValueContext(){return df},get InlineValueEvaluatableExpression(){return uf},get InlineValueText(){return cf},get InlineValueVariableLookup(){return lf},get InsertReplaceEdit(){return Ld},get InsertTextFormat(){return Od},get InsertTextMode(){return Md},get Location(){return us},get LocationLink(){return wd},get MarkedString(){return ps},get MarkupContent(){return Mr},get MarkupKind(){return Dc},get OptionalVersionedTextDocumentIdentifier(){return hs},get ParameterInformation(){return Ud},get Position(){return re},get Range(){return Q},get RenameFile(){return xr},get SelectedCompletionInfo(){return yf},get SelectionRange(){return rf},get SemanticTokenModifiers(){return of},get SemanticTokenTypes(){return sf},get SemanticTokens(){return af},get SignatureInformation(){return Bd},get StringValue(){return hf},get SymbolInformation(){return Vd},get SymbolKind(){return Gd},get SymbolTag(){return zd},get TextDocument(){return Tf},get TextDocumentEdit(){return fs},get TextDocumentIdentifier(){return Ad},get TextDocumentItem(){return Id},get TextEdit(){return jt},get URI(){return Pc},get VersionedTextDocumentIdentifier(){return Nd},WorkspaceChange:FP,get WorkspaceEdit(){return Ic},get WorkspaceFolder(){return _f},get WorkspaceSymbol(){return Yd},get integer(){return Rd},get uinteger(){return ls}});class UP{constructor(){this.nodeStack=[]}get current(){var e;return(e=this.nodeStack[this.nodeStack.length-1])!==null&&e!==void 0?e:this.rootNode}buildRootNode(e){return this.rootNode=new o_(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){const n=new Th;return n.grammarSource=e,n.root=this.rootNode,this.current.content.push(n),this.nodeStack.push(n),n}buildLeafNode(e,n){const r=new Rf(e.startOffset,e.image.length,td(e),e.tokenType,!n);return r.grammarSource=n,r.root=this.rootNode,this.current.content.push(r),r}removeNode(e){const n=e.container;if(n){const r=n.content.indexOf(e);r>=0&&n.content.splice(r,1)}}addHiddenNodes(e){const n=[];for(const s of e){const o=new Rf(s.startOffset,s.image.length,td(s),s.tokenType,!0);o.root=this.rootNode,n.push(o)}let r=this.current,i=!1;if(r.content.length>0){r.content.push(...n);return}for(;r.container;){const s=r.container.content.indexOf(r);if(s>0){r.container.content.splice(s,0,...n),i=!0;break}r=r.container}i||this.rootNode.content.unshift(...n)}construct(e){const n=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=n;const r=this.nodeStack.pop();(r==null?void 0:r.content.length)===0&&this.removeNode(r)}}class s_{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,n;const r=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(n=this.container)===null||n===void 0?void 0:n.astNode;if(!r)throw new Error("This node has no associated AST element");return r}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}}class Rf extends s_{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,n,r,i,s=!1){super(),this._hidden=s,this._offset=e,this._tokenType=i,this._length=n,this._range=r}}class Th extends s_{constructor(){super(...arguments),this.content=new Rh(this)}get children(){return this.content}get offset(){var e,n;return(n=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&n!==void 0?n:0}get length(){return this.end-this.offset}get end(){var e,n;return(n=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&n!==void 0?n:0}get range(){const e=this.firstNonHiddenNode,n=this.lastNonHiddenNode;if(e&&n){if(this._rangeCache===void 0){const{range:r}=e,{range:i}=n;this._rangeCache={start:r.start,end:i.end.line<r.start.line?r.start:i.end}}return this._rangeCache}else return{start:re.create(0,0),end:re.create(0,0)}}get firstNonHiddenNode(){for(const e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){const n=this.content[e];if(!n.hidden)return n}return this.content[this.content.length-1]}}class Rh extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,Rh.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,n,...r){return this.addParents(r),super.splice(e,n,...r)}addParents(e){for(const n of e)n.container=this.parent}}class o_ extends Th{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}}const wf=Symbol("Datatype");function au(t){return t.$type===wf}const Kp="​",a_=t=>t.endsWith(Kp)?t:t+Kp;class c_{constructor(e){this._unorderedGroups=new Map,this.allRules=new Map,this.lexer=e.parser.Lexer;const n=this.lexer.definition,r=e.LanguageMetaData.mode==="production";this.wrapper=new zP(n,Object.assign(Object.assign({},e.parser.ParserConfig),{skipValidations:r,errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,n){this.wrapper.wrapOr(e,n)}optional(e,n){this.wrapper.wrapOption(e,n)}many(e,n){this.wrapper.wrapMany(e,n)}atLeastOne(e,n){this.wrapper.wrapAtLeastOne(e,n)}getRule(e){return this.allRules.get(e)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}}class BP extends c_{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new UP,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,n){const r=this.computeRuleType(e),i=this.wrapper.DEFINE_RULE(a_(e.name),this.startImplementation(r,n).bind(this));return this.allRules.set(e.name,i),e.entry&&(this.mainRule=i),i}computeRuleType(e){if(!e.fragment){if(Ly(e))return wf;{const n=bs(e);return n??e.name}}}parse(e,n={}){this.nodeBuilder.buildRootNode(e);const r=this.lexerResult=this.lexer.tokenize(e);this.wrapper.input=r.tokens;const i=n.rule?this.allRules.get(n.rule):this.mainRule;if(!i)throw new Error(n.rule?`No rule found with name '${n.rule}'`:"No main rule available.");const s=this.doParse(i);return this.nodeBuilder.addHiddenNodes(r.hidden),this.unorderedGroups.clear(),this.lexerResult=void 0,{value:s,lexerErrors:r.errors,lexerReport:r.report,parserErrors:this.wrapper.errors}}doParse(e){let n=e.call(this.wrapper,{});if(this.stack.length>0&&(n=this.construct()),n===void 0)throw new Error("No result from parser");if(this.stack.length>0)throw new Error("Parser stack is not empty after parsing");return n}startImplementation(e,n){return r=>{const i=!this.isRecording()&&e!==void 0;if(i){const s={$type:e};this.stack.push(s),e===wf&&(s.value="")}return n(r),i?this.construct():void 0}}extractHiddenTokens(e){const n=this.lexerResult.hidden;if(!n.length)return[];const r=e.startOffset;for(let i=0;i<n.length;i++)if(n[i].startOffset>r)return n.splice(0,i);return n.splice(0,n.length)}consume(e,n,r){const i=this.wrapper.wrapConsume(e,n);if(!this.isRecording()&&this.isValidToken(i)){const s=this.extractHiddenTokens(i);this.nodeBuilder.addHiddenNodes(s);const o=this.nodeBuilder.buildLeafNode(i,r),{assignment:a,isCrossRef:c}=this.getAssignment(r),l=this.current;if(a){const u=At(r)?i.image:this.converter.convert(i.image,o);this.assign(a.operator,a.feature,u,o,c)}else if(au(l)){let u=i.image;At(r)||(u=this.converter.convert(u,o).toString()),l.value+=u}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,n,r,i,s){let o;!this.isRecording()&&!r&&(o=this.nodeBuilder.buildCompositeNode(i));let a;try{a=this.wrapper.wrapSubrule(e,n,s)}finally{this.isRecording()||(a===void 0&&!r&&(a=this.construct()),a!==void 0&&o&&o.length>0&&this.performSubruleAssignment(a,i,o))}}performSubruleAssignment(e,n,r){const{assignment:i,isCrossRef:s}=this.getAssignment(n);if(i)this.assign(i.operator,i.feature,e,r,s);else if(!i){const o=this.current;if(au(o))o.value+=e.toString();else if(typeof e=="object"&&e){const c=this.assignWithoutOverride(e,o);this.stack.pop(),this.stack.push(c)}}}action(e,n){if(!this.isRecording()){let r=this.current;if(n.feature&&n.operator){r=this.construct(),this.nodeBuilder.removeNode(r.$cstNode),this.nodeBuilder.buildCompositeNode(n).content.push(r.$cstNode);const s={$type:e};this.stack.push(s),this.assign(n.operator,n.feature,r,r.$cstNode,!1)}else r.$type=e}}construct(){if(this.isRecording())return;const e=this.current;return KT(e),this.nodeBuilder.construct(e),this.stack.pop(),au(e)?this.converter.convert(e.value,e.$cstNode):(ky(this.astReflection,e),e)}getAssignment(e){if(!this.assignmentMap.has(e)){const n=Dn(e,en);this.assignmentMap.set(e,{assignment:n,isCrossRef:n?ws(n.terminal):!1})}return this.assignmentMap.get(e)}assign(e,n,r,i,s){const o=this.current;let a;switch(s&&typeof r=="string"?a=this.linker.buildReference(o,n,i,r):a=r,e){case"=":{o[n]=a;break}case"?=":{o[n]=!0;break}case"+=":Array.isArray(o[n])||(o[n]=[]),o[n].push(a)}}assignWithoutOverride(e,n){for(const[i,s]of Object.entries(n)){const o=e[i];o===void 0?e[i]=s:Array.isArray(o)&&Array.isArray(s)&&(s.push(...o),e[i]=s)}const r=e.$cstNode;return r&&(r.astNode=void 0,e.$cstNode=void 0),e}get definitionErrors(){return this.wrapper.definitionErrors}}class KP{buildMismatchTokenMessage(e){return Sr.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Sr.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Sr.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Sr.buildEarlyExitMessage(e)}}class l_ extends KP{buildMismatchTokenMessage({expected:e,actual:n}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${n.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}}class WP extends c_{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();const n=this.lexer.tokenize(e,{mode:"partial"});return this.tokens=n.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,n){const r=this.wrapper.DEFINE_RULE(a_(e.name),this.startImplementation(n).bind(this));return this.allRules.set(e.name,r),e.entry&&(this.mainRule=r),r}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return n=>{const r=this.keepStackSize();try{e(n)}finally{this.resetStackSize(r)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){const e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,n,r){this.wrapper.wrapConsume(e,n),this.isRecording()||(this.lastElementStack=[...this.elementStack,r],this.nextTokenIndex=this.currIdx+1)}subrule(e,n,r,i,s){this.before(i),this.wrapper.wrapSubrule(e,n,s),this.after(i)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){const n=this.elementStack.lastIndexOf(e);n>=0&&this.elementStack.splice(n)}}get currIdx(){return this.wrapper.currIdx}}const GP={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new l_};class zP extends JE{constructor(e,n){const r=n&&"maxLookahead"in n;super(e,Object.assign(Object.assign(Object.assign({},GP),{lookaheadStrategy:r?new ph({maxLookahead:n.maxLookahead}):new vP({logging:n.skipValidations?()=>{}:void 0})}),n))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,n,r){return this.RULE(e,n,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,n){return this.consume(e,n,void 0)}wrapSubrule(e,n,r){return this.subrule(e,n,{ARGS:[r]})}wrapOr(e,n){this.or(e,n)}wrapOption(e,n){this.option(e,n)}wrapMany(e,n){this.many(e,n)}wrapAtLeastOne(e,n){this.atLeastOne(e,n)}}function u_(t,e,n){return VP({parser:e,tokens:n,ruleNames:new Map},t),e}function VP(t,e){const n=Ey(e,!1),r=ke(e.rules).filter(tt).filter(i=>n.has(i));for(const i of r){const s=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});t.parser.rule(i,dr(s,i.definition))}}function dr(t,e,n=!1){let r;if(At(e))r=t0(t,e);else if(Rs(e))r=YP(t,e);else if(en(e))r=dr(t,e.terminal);else if(ws(e))r=d_(t,e);else if(Tn(e))r=XP(t,e);else if(qf(e))r=QP(t,e);else if(Uf(e))r=ZP(t,e);else if(or(e))r=e0(t,e);else if(LT(e)){const i=t.consume++;r=()=>t.parser.consume(i,Bn,e)}else throw new yy(e.$cstNode,`Unexpected element type: ${e.$type}`);return f_(t,n?void 0:Lc(e),r,e.cardinality)}function YP(t,e){const n=tl(e);return()=>t.parser.action(n,e)}function XP(t,e){const n=e.rule.ref;if(tt(n)){const r=t.subrule++,i=n.fragment,s=e.arguments.length>0?JP(n,e.arguments):()=>({});return o=>t.parser.subrule(r,h_(t,n),i,e,s(o))}else if(zn(n)){const r=t.consume++,i=bf(t,n.name);return()=>t.parser.consume(r,i,e)}else if(n)Ts();else throw new yy(e.$cstNode,`Undefined rule: ${e.rule.$refText}`)}function JP(t,e){const n=e.map(r=>gn(r.value));return r=>{const i={};for(let s=0;s<n.length;s++){const o=t.parameters[s],a=n[s];i[o.name]=a(r)}return i}}function gn(t){if(AT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)||n(r)}else if(PT(t)){const e=gn(t.left),n=gn(t.right);return r=>e(r)&&n(r)}else if(NT(t)){const e=gn(t.value);return n=>!e(n)}else if(IT(t)){const e=t.parameter.ref.name;return n=>n!==void 0&&n[e]===!0}else if(ET(t)){const e=!!t.true;return()=>e}Ts()}function QP(t,e){if(e.elements.length===1)return dr(t,e.elements[0]);{const n=[];for(const i of e.elements){const s={ALT:dr(t,i,!0)},o=Lc(i);o&&(s.GATE=gn(o)),n.push(s)}const r=t.or++;return i=>t.parser.alternatives(r,n.map(s=>{const o={ALT:()=>s.ALT(i)},a=s.GATE;return a&&(o.GATE=()=>a(i)),o}))}}function ZP(t,e){if(e.elements.length===1)return dr(t,e.elements[0]);const n=[];for(const a of e.elements){const c={ALT:dr(t,a,!0)},l=Lc(a);l&&(c.GATE=gn(l)),n.push(c)}const r=t.or++,i=(a,c)=>{const l=c.getRuleStack().join("-");return`uGroup_${a}_${l}`},s=a=>t.parser.alternatives(r,n.map((c,l)=>{const u={ALT:()=>!0},f=t.parser;u.ALT=()=>{if(c.ALT(a),!f.isRecording()){const p=i(r,f);f.unorderedGroups.get(p)||f.unorderedGroups.set(p,[]);const d=f.unorderedGroups.get(p);typeof(d==null?void 0:d[l])>"u"&&(d[l]=!0)}};const h=c.GATE;return h?u.GATE=()=>h(a):u.GATE=()=>{const p=f.unorderedGroups.get(i(r,f));return!(p!=null&&p[l])},u})),o=f_(t,Lc(e),s,"*");return a=>{o(a),t.parser.isRecording()||t.parser.unorderedGroups.delete(i(r,t.parser))}}function e0(t,e){const n=e.elements.map(r=>dr(t,r));return r=>n.forEach(i=>i(r))}function Lc(t){if(or(t))return t.guardCondition}function d_(t,e,n=e.terminal){if(n)if(Tn(n)&&tt(n.rule.ref)){const r=n.rule.ref,i=t.subrule++;return s=>t.parser.subrule(i,h_(t,r),!1,e,s)}else if(Tn(n)&&zn(n.rule.ref)){const r=t.consume++,i=bf(t,n.rule.ref.name);return()=>t.parser.consume(r,i,e)}else if(At(n)){const r=t.consume++,i=bf(t,n.value);return()=>t.parser.consume(r,i,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);const r=Oy(e.type.ref),i=r==null?void 0:r.terminal;if(!i)throw new Error("Could not find name assignment for type: "+tl(e.type.ref));return d_(t,e,i)}}function t0(t,e){const n=t.consume++,r=t.tokens[e.value];if(!r)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(n,r,e)}function f_(t,e,n,r){const i=e&&gn(e);if(!r)if(i){const s=t.or++;return o=>t.parser.alternatives(s,[{ALT:()=>n(o),GATE:()=>i(o)},{ALT:Hp(),GATE:()=>!i(o)}])}else return n;if(r==="*"){const s=t.many++;return o=>t.parser.many(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else if(r==="+"){const s=t.many++;if(i){const o=t.or++;return a=>t.parser.alternatives(o,[{ALT:()=>t.parser.atLeastOne(s,{DEF:()=>n(a)}),GATE:()=>i(a)},{ALT:Hp(),GATE:()=>!i(a)}])}else return o=>t.parser.atLeastOne(s,{DEF:()=>n(o)})}else if(r==="?"){const s=t.optional++;return o=>t.parser.optional(s,{DEF:()=>n(o),GATE:i?()=>i(o):void 0})}else Ts()}function h_(t,e){const n=n0(t,e),r=t.parser.getRule(n);if(!r)throw new Error(`Rule "${n}" not found."`);return r}function n0(t,e){if(tt(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let n=e,r=n.$container,i=e.$type;for(;!tt(r);)(or(r)||qf(r)||Uf(r))&&(i=r.elements.indexOf(n).toString()+":"+i),n=r,r=r.$container;return i=r.name+":"+i,t.ruleNames.set(e,i),i}}function bf(t,e){const n=t.tokens[e];if(!n)throw new Error(`Token "${e}" not found."`);return n}function r0(t){const e=t.Grammar,n=t.parser.Lexer,r=new WP(t);return u_(e,r,n.definition),r.finalize(),r}function i0(t){const e=s0(t);return e.finalize(),e}function s0(t){const e=t.Grammar,n=t.parser.Lexer,r=new BP(t);return u_(e,r,n.definition)}class o0{constructor(){this.diagnostics=[]}buildTokens(e,n){const r=ke(Ey(e,!1)),i=this.buildTerminalTokens(r),s=this.buildKeywordTokens(r,i,n);return s.push(...i),s}flushLexingReport(e){return{diagnostics:this.popDiagnostics()}}popDiagnostics(){const e=[...this.diagnostics];return this.diagnostics=[],e}buildTerminalTokens(e){return e.filter(zn).filter(n=>!n.fragment).map(n=>this.buildTerminalToken(n)).toArray()}buildTerminalToken(e){const n=nl(e),r=this.requiresCustomPattern(n)?this.regexPatternFunction(n):n,i={name:e.name,PATTERN:r};return typeof r=="function"&&(i.LINE_BREAKS=!0),e.hidden&&(i.GROUP=$y(n)?dt.SKIPPED:"hidden"),i}requiresCustomPattern(e){return e.flags.includes("u")||e.flags.includes("s")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){const n=new RegExp(e,e.flags+"y");return(r,i)=>(n.lastIndex=i,n.exec(r))}buildKeywordTokens(e,n,r){return e.filter(tt).flatMap(i=>Qt(i).filter(At)).distinct(i=>i.value).toArray().sort((i,s)=>s.value.length-i.value.length).map(i=>this.buildKeywordToken(i,n,!!(r!=null&&r.caseInsensitive)))}buildKeywordToken(e,n,r){const i=this.buildKeywordPattern(e,r),s={name:e.value,PATTERN:i,LONGER_ALT:this.findLongerAlt(e,n)};return typeof i=="function"&&(s.LINE_BREAKS=!0),s}buildKeywordPattern(e,n){return n?new RegExp(el(e.value),"i"):e.value}findLongerAlt(e,n){return n.reduce((r,i)=>{const s=i==null?void 0:i.PATTERN;return s!=null&&s.source&&ZT("^"+s.source+"$",e.value)&&r.push(i),r},[])}}class a0{convert(e,n){let r=n.grammarSource;if(ws(r)&&(r=Ay(r)),Tn(r)){const i=r.rule.ref;if(!i)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(i,e,n)}return e}runConverter(e,n,r){var i;switch(e.name.toUpperCase()){case"INT":return hn.convertInt(n);case"STRING":return hn.convertString(n);case"ID":return hn.convertID(n)}switch((i=aR(e))===null||i===void 0?void 0:i.toLowerCase()){case"number":return hn.convertNumber(n);case"boolean":return hn.convertBoolean(n);case"bigint":return hn.convertBigint(n);case"date":return hn.convertDate(n);default:return n}}}var hn;(function(t){function e(l){let u="";for(let f=1;f<l.length-1;f++){const h=l.charAt(f);if(h==="\\"){const p=l.charAt(++f);u+=n(p)}else u+=h}return u}t.convertString=e;function n(l){switch(l){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return l}}function r(l){return l.charAt(0)==="^"?l.substring(1):l}t.convertID=r;function i(l){return parseInt(l)}t.convertInt=i;function s(l){return BigInt(l)}t.convertBigint=s;function o(l){return new Date(l)}t.convertDate=o;function a(l){return Number(l)}t.convertNumber=a;function c(l){return l.toLowerCase()==="true"}t.convertBoolean=c})(hn||(hn={}));var Oe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function c0(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Wn={},Pn={};Object.defineProperty(Pn,"__esModule",{value:!0});let kf;function Sf(){if(kf===void 0)throw new Error("No runtime abstraction layer installed");return kf}(function(t){function e(n){if(n===void 0)throw new Error("No runtime abstraction layer provided");kf=n}t.install=e})(Sf||(Sf={}));Pn.default=Sf;var Me={};Object.defineProperty(Me,"__esModule",{value:!0});Me.stringArray=Me.array=Me.func=Me.error=Me.number=Me.string=Me.boolean=void 0;function l0(t){return t===!0||t===!1}Me.boolean=l0;function p_(t){return typeof t=="string"||t instanceof String}Me.string=p_;function u0(t){return typeof t=="number"||t instanceof Number}Me.number=u0;function d0(t){return t instanceof Error}Me.error=d0;function f0(t){return typeof t=="function"}Me.func=f0;function m_(t){return Array.isArray(t)}Me.array=m_;function h0(t){return m_(t)&&t.every(e=>p_(e))}Me.stringArray=h0;var nn={};Object.defineProperty(nn,"__esModule",{value:!0});var g_=nn.Emitter=nn.Event=void 0;const p0=Pn;var Wp;(function(t){const e={dispose(){}};t.None=function(){return e}})(Wp||(nn.Event=Wp={}));class m0{add(e,n=null,r){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(n),Array.isArray(r)&&r.push({dispose:()=>this.remove(e,n)})}remove(e,n=null){if(!this._callbacks)return;let r=!1;for(let i=0,s=this._callbacks.length;i<s;i++)if(this._callbacks[i]===e)if(this._contexts[i]===n){this._callbacks.splice(i,1),this._contexts.splice(i,1);return}else r=!0;if(r)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];const n=[],r=this._callbacks.slice(0),i=this._contexts.slice(0);for(let s=0,o=r.length;s<o;s++)try{n.push(r[s].apply(i[s],e))}catch(a){(0,p0.default)().console.error(a)}return n}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}}class Rl{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,n,r)=>{this._callbacks||(this._callbacks=new m0),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,n);const i={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,n),i.dispose=Rl._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(r)&&r.push(i),i}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}}g_=nn.Emitter=Rl;Rl._noop=function(){};var ce;Object.defineProperty(Wn,"__esModule",{value:!0});var wh=Wn.CancellationTokenSource=ce=Wn.CancellationToken=void 0;const g0=Pn,y0=Me,Cf=nn;var Mc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Cf.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Cf.Event.None});function e(n){const r=n;return r&&(r===t.None||r===t.Cancelled||y0.boolean(r.isCancellationRequested)&&!!r.onCancellationRequested)}t.is=e})(Mc||(ce=Wn.CancellationToken=Mc={}));const v0=Object.freeze(function(t,e){const n=(0,g0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){n.dispose()}}});class Gp{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?v0:(this._emitter||(this._emitter=new Cf.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}}class _0{get token(){return this._token||(this._token=new Gp),this._token}cancel(){this._token?this._token.cancel():this._token=Mc.Cancelled}dispose(){this._token?this._token instanceof Gp&&this._token.dispose():this._token=Mc.None}}wh=Wn.CancellationTokenSource=_0;function T0(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}let lc=0,R0=10;function w0(){return lc=performance.now(),new wh}const Fc=Symbol("OperationCancelled");function xs(t){return t===Fc}async function rt(t){if(t===ce.None)return;const e=performance.now();if(e-lc>=R0&&(lc=e,await T0(),lc=performance.now()),t.isCancellationRequested)throw Fc}class bh{constructor(){this.promise=new Promise((e,n)=>{this.resolve=r=>(e(r),this),this.reject=r=>(n(r),this)})}}class gs{constructor(e,n,r,i){this._uri=e,this._languageId=n,this._version=r,this._content=i,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){const n=this.offsetAt(e.start),r=this.offsetAt(e.end);return this._content.substring(n,r)}return this._content}update(e,n){for(const r of e)if(gs.isIncremental(r)){const i=v_(r.range),s=this.offsetAt(i.start),o=this.offsetAt(i.end);this._content=this._content.substring(0,s)+r.text+this._content.substring(o,this._content.length);const a=Math.max(i.start.line,0),c=Math.max(i.end.line,0);let l=this._lineOffsets;const u=zp(r.text,!1,s);if(c-a===u.length)for(let h=0,p=u.length;h<p;h++)l[h+a+1]=u[h];else u.length<1e4?l.splice(a+1,c-a,...u):this._lineOffsets=l=l.slice(0,a+1).concat(u,l.slice(c+1));const f=r.text.length-(o-s);if(f!==0)for(let h=a+1+u.length,p=l.length;h<p;h++)l[h]=l[h]+f}else if(gs.isFull(r))this._content=r.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=n}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=zp(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);const n=this.getLineOffsets();let r=0,i=n.length;if(i===0)return{line:0,character:e};for(;r<i;){const o=Math.floor((r+i)/2);n[o]>e?i=o:r=o+1}const s=r-1;return e=this.ensureBeforeEOL(e,n[s]),{line:s,character:e-n[s]}}offsetAt(e){const n=this.getLineOffsets();if(e.line>=n.length)return this._content.length;if(e.line<0)return 0;const r=n[e.line];if(e.character<=0)return r;const i=e.line+1<n.length?n[e.line+1]:this._content.length,s=Math.min(r+e.character,i);return this.ensureBeforeEOL(s,r)}ensureBeforeEOL(e,n){for(;e>n&&y_(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range!==void 0&&(n.rangeLength===void 0||typeof n.rangeLength=="number")}static isFull(e){const n=e;return n!=null&&typeof n.text=="string"&&n.range===void 0&&n.rangeLength===void 0}}var Hc;(function(t){function e(i,s,o,a){return new gs(i,s,o,a)}t.create=e;function n(i,s,o){if(i instanceof gs)return i.update(s,o),i;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=n;function r(i,s){const o=i.getText(),a=$f(s.map(b0),(u,f)=>{const h=u.range.start.line-f.range.start.line;return h===0?u.range.start.character-f.range.start.character:h});let c=0;const l=[];for(const u of a){const f=i.offsetAt(u.range.start);if(f<c)throw new Error("Overlapping edit");f>c&&l.push(o.substring(c,f)),u.newText.length&&l.push(u.newText),c=i.offsetAt(u.range.end)}return l.push(o.substr(c)),l.join("")}t.applyEdits=r})(Hc||(Hc={}));function $f(t,e){if(t.length<=1)return t;const n=t.length/2|0,r=t.slice(0,n),i=t.slice(n);$f(r,e),$f(i,e);let s=0,o=0,a=0;for(;s<r.length&&o<i.length;)e(r[s],i[o])<=0?t[a++]=r[s++]:t[a++]=i[o++];for(;s<r.length;)t[a++]=r[s++];for(;o<i.length;)t[a++]=i[o++];return t}function zp(t,e,n=0){const r=e?[n]:[];for(let i=0;i<t.length;i++){const s=t.charCodeAt(i);y_(s)&&(s===13&&i+1<t.length&&t.charCodeAt(i+1)===10&&i++,r.push(n+i+1))}return r}function y_(t){return t===13||t===10}function v_(t){const e=t.start,n=t.end;return e.line>n.line||e.line===n.line&&e.character>n.character?{start:n,end:e}:t}function b0(t){const e=v_(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var __;(()=>{var t={470:i=>{function s(c){if(typeof c!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(c))}function o(c,l){for(var u,f="",h=0,p=-1,d=0,y=0;y<=c.length;++y){if(y<c.length)u=c.charCodeAt(y);else{if(u===47)break;u=47}if(u===47){if(!(p===y-1||d===1))if(p!==y-1&&d===2){if(f.length<2||h!==2||f.charCodeAt(f.length-1)!==46||f.charCodeAt(f.length-2)!==46){if(f.length>2){var w=f.lastIndexOf("/");if(w!==f.length-1){w===-1?(f="",h=0):h=(f=f.slice(0,w)).length-1-f.lastIndexOf("/"),p=y,d=0;continue}}else if(f.length===2||f.length===1){f="",h=0,p=y,d=0;continue}}l&&(f.length>0?f+="/..":f="..",h=2)}else f.length>0?f+="/"+c.slice(p+1,y):f=c.slice(p+1,y),h=y-p-1;p=y,d=0}else u===46&&d!==-1?++d:d=-1}return f}var a={resolve:function(){for(var c,l="",u=!1,f=arguments.length-1;f>=-1&&!u;f--){var h;f>=0?h=arguments[f]:(c===void 0&&(c=process.cwd()),h=c),s(h),h.length!==0&&(l=h+"/"+l,u=h.charCodeAt(0)===47)}return l=o(l,!u),u?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(c){if(s(c),c.length===0)return".";var l=c.charCodeAt(0)===47,u=c.charCodeAt(c.length-1)===47;return(c=o(c,!l)).length!==0||l||(c="."),c.length>0&&u&&(c+="/"),l?"/"+c:c},isAbsolute:function(c){return s(c),c.length>0&&c.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var c,l=0;l<arguments.length;++l){var u=arguments[l];s(u),u.length>0&&(c===void 0?c=u:c+="/"+u)}return c===void 0?".":a.normalize(c)},relative:function(c,l){if(s(c),s(l),c===l||(c=a.resolve(c))===(l=a.resolve(l)))return"";for(var u=1;u<c.length&&c.charCodeAt(u)===47;++u);for(var f=c.length,h=f-u,p=1;p<l.length&&l.charCodeAt(p)===47;++p);for(var d=l.length-p,y=h<d?h:d,w=-1,_=0;_<=y;++_){if(_===y){if(d>y){if(l.charCodeAt(p+_)===47)return l.slice(p+_+1);if(_===0)return l.slice(p+_)}else h>y&&(c.charCodeAt(u+_)===47?w=_:_===0&&(w=0));break}var m=c.charCodeAt(u+_);if(m!==l.charCodeAt(p+_))break;m===47&&(w=_)}var g="";for(_=u+w+1;_<=f;++_)_!==f&&c.charCodeAt(_)!==47||(g.length===0?g+="..":g+="/..");return g.length>0?g+l.slice(p+w):(p+=w,l.charCodeAt(p)===47&&++p,l.slice(p))},_makeLong:function(c){return c},dirname:function(c){if(s(c),c.length===0)return".";for(var l=c.charCodeAt(0),u=l===47,f=-1,h=!0,p=c.length-1;p>=1;--p)if((l=c.charCodeAt(p))===47){if(!h){f=p;break}}else h=!1;return f===-1?u?"/":".":u&&f===1?"//":c.slice(0,f)},basename:function(c,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');s(c);var u,f=0,h=-1,p=!0;if(l!==void 0&&l.length>0&&l.length<=c.length){if(l.length===c.length&&l===c)return"";var d=l.length-1,y=-1;for(u=c.length-1;u>=0;--u){var w=c.charCodeAt(u);if(w===47){if(!p){f=u+1;break}}else y===-1&&(p=!1,y=u+1),d>=0&&(w===l.charCodeAt(d)?--d==-1&&(h=u):(d=-1,h=y))}return f===h?h=y:h===-1&&(h=c.length),c.slice(f,h)}for(u=c.length-1;u>=0;--u)if(c.charCodeAt(u)===47){if(!p){f=u+1;break}}else h===-1&&(p=!1,h=u+1);return h===-1?"":c.slice(f,h)},extname:function(c){s(c);for(var l=-1,u=0,f=-1,h=!0,p=0,d=c.length-1;d>=0;--d){var y=c.charCodeAt(d);if(y!==47)f===-1&&(h=!1,f=d+1),y===46?l===-1?l=d:p!==1&&(p=1):l!==-1&&(p=-1);else if(!h){u=d+1;break}}return l===-1||f===-1||p===0||p===1&&l===f-1&&l===u+1?"":c.slice(l,f)},format:function(c){if(c===null||typeof c!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof c);return function(l,u){var f=u.dir||u.root,h=u.base||(u.name||"")+(u.ext||"");return f?f===u.root?f+h:f+"/"+h:h}(0,c)},parse:function(c){s(c);var l={root:"",dir:"",base:"",ext:"",name:""};if(c.length===0)return l;var u,f=c.charCodeAt(0),h=f===47;h?(l.root="/",u=1):u=0;for(var p=-1,d=0,y=-1,w=!0,_=c.length-1,m=0;_>=u;--_)if((f=c.charCodeAt(_))!==47)y===-1&&(w=!1,y=_+1),f===46?p===-1?p=_:m!==1&&(m=1):p!==-1&&(m=-1);else if(!w){d=_+1;break}return p===-1||y===-1||m===0||m===1&&p===y-1&&p===d+1?y!==-1&&(l.base=l.name=d===0&&h?c.slice(1,y):c.slice(d,y)):(d===0&&h?(l.name=c.slice(1,p),l.base=c.slice(1,y)):(l.name=c.slice(d,p),l.base=c.slice(d,y)),l.ext=c.slice(p,y)),d>0?l.dir=c.slice(0,d-1):h&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};a.posix=a,i.exports=a}},e={};function n(i){var s=e[i];if(s!==void 0)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(i,s)=>{for(var o in s)n.o(s,o)&&!n.o(i,o)&&Object.defineProperty(i,o,{enumerable:!0,get:s[o]})},n.o=(i,s)=>Object.prototype.hasOwnProperty.call(i,s),n.r=i=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})};var r={};(()=>{let i;n.r(r),n.d(r,{URI:()=>h,Utils:()=>Re}),typeof process=="object"?i=process.platform==="win32":typeof navigator=="object"&&(i=navigator.userAgent.indexOf("Windows")>=0);const s=/^\w[\w\d+.-]*$/,o=/^\//,a=/^\/\//;function c(A,S){if(!A.scheme&&S)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${A.authority}", path: "${A.path}", query: "${A.query}", fragment: "${A.fragment}"}`);if(A.scheme&&!s.test(A.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(A.path){if(A.authority){if(!o.test(A.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(a.test(A.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}const l="",u="/",f=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class h{constructor(S,R,C,I,P,N=!1){In(this,"scheme");In(this,"authority");In(this,"path");In(this,"query");In(this,"fragment");typeof S=="object"?(this.scheme=S.scheme||l,this.authority=S.authority||l,this.path=S.path||l,this.query=S.query||l,this.fragment=S.fragment||l):(this.scheme=function(Fe,x){return Fe||x?Fe:"file"}(S,N),this.authority=R||l,this.path=function(Fe,x){switch(Fe){case"https":case"http":case"file":x?x[0]!==u&&(x=u+x):x=u}return x}(this.scheme,C||l),this.query=I||l,this.fragment=P||l,c(this,N))}static isUri(S){return S instanceof h||!!S&&typeof S.authority=="string"&&typeof S.fragment=="string"&&typeof S.path=="string"&&typeof S.query=="string"&&typeof S.scheme=="string"&&typeof S.fsPath=="string"&&typeof S.with=="function"&&typeof S.toString=="function"}get fsPath(){return m(this)}with(S){if(!S)return this;let{scheme:R,authority:C,path:I,query:P,fragment:N}=S;return R===void 0?R=this.scheme:R===null&&(R=l),C===void 0?C=this.authority:C===null&&(C=l),I===void 0?I=this.path:I===null&&(I=l),P===void 0?P=this.query:P===null&&(P=l),N===void 0?N=this.fragment:N===null&&(N=l),R===this.scheme&&C===this.authority&&I===this.path&&P===this.query&&N===this.fragment?this:new d(R,C,I,P,N)}static parse(S,R=!1){const C=f.exec(S);return C?new d(C[2]||l,W(C[4]||l),W(C[5]||l),W(C[7]||l),W(C[9]||l),R):new d(l,l,l,l,l)}static file(S){let R=l;if(i&&(S=S.replace(/\\/g,u)),S[0]===u&&S[1]===u){const C=S.indexOf(u,2);C===-1?(R=S.substring(2),S=u):(R=S.substring(2,C),S=S.substring(C)||u)}return new d("file",R,S,l,l)}static from(S){const R=new d(S.scheme,S.authority,S.path,S.query,S.fragment);return c(R,!0),R}toString(S=!1){return g(this,S)}toJSON(){return this}static revive(S){if(S){if(S instanceof h)return S;{const R=new d(S);return R._formatted=S.external,R._fsPath=S._sep===p?S.fsPath:null,R}}return S}}const p=i?1:void 0;class d extends h{constructor(){super(...arguments);In(this,"_formatted",null);In(this,"_fsPath",null)}get fsPath(){return this._fsPath||(this._fsPath=m(this)),this._fsPath}toString(R=!1){return R?g(this,!0):(this._formatted||(this._formatted=g(this,!1)),this._formatted)}toJSON(){const R={$mid:1};return this._fsPath&&(R.fsPath=this._fsPath,R._sep=p),this._formatted&&(R.external=this._formatted),this.path&&(R.path=this.path),this.scheme&&(R.scheme=this.scheme),this.authority&&(R.authority=this.authority),this.query&&(R.query=this.query),this.fragment&&(R.fragment=this.fragment),R}}const y={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function w(A,S,R){let C,I=-1;for(let P=0;P<A.length;P++){const N=A.charCodeAt(P);if(N>=97&&N<=122||N>=65&&N<=90||N>=48&&N<=57||N===45||N===46||N===95||N===126||S&&N===47||R&&N===91||R&&N===93||R&&N===58)I!==-1&&(C+=encodeURIComponent(A.substring(I,P)),I=-1),C!==void 0&&(C+=A.charAt(P));else{C===void 0&&(C=A.substr(0,P));const Fe=y[N];Fe!==void 0?(I!==-1&&(C+=encodeURIComponent(A.substring(I,P)),I=-1),C+=Fe):I===-1&&(I=P)}}return I!==-1&&(C+=encodeURIComponent(A.substring(I))),C!==void 0?C:A}function _(A){let S;for(let R=0;R<A.length;R++){const C=A.charCodeAt(R);C===35||C===63?(S===void 0&&(S=A.substr(0,R)),S+=y[C]):S!==void 0&&(S+=A[R])}return S!==void 0?S:A}function m(A,S){let R;return R=A.authority&&A.path.length>1&&A.scheme==="file"?`//${A.authority}${A.path}`:A.path.charCodeAt(0)===47&&(A.path.charCodeAt(1)>=65&&A.path.charCodeAt(1)<=90||A.path.charCodeAt(1)>=97&&A.path.charCodeAt(1)<=122)&&A.path.charCodeAt(2)===58?A.path[1].toLowerCase()+A.path.substr(2):A.path,i&&(R=R.replace(/\//g,"\\")),R}function g(A,S){const R=S?_:w;let C="",{scheme:I,authority:P,path:N,query:Fe,fragment:x}=A;if(I&&(C+=I,C+=":"),(P||I==="file")&&(C+=u,C+=u),P){let $=P.indexOf("@");if($!==-1){const te=P.substr(0,$);P=P.substr($+1),$=te.lastIndexOf(":"),$===-1?C+=R(te,!1,!1):(C+=R(te.substr(0,$),!1,!1),C+=":",C+=R(te.substr($+1),!1,!0)),C+="@"}P=P.toLowerCase(),$=P.lastIndexOf(":"),$===-1?C+=R(P,!1,!0):(C+=R(P.substr(0,$),!1,!0),C+=P.substr($))}if(N){if(N.length>=3&&N.charCodeAt(0)===47&&N.charCodeAt(2)===58){const $=N.charCodeAt(1);$>=65&&$<=90&&(N=`/${String.fromCharCode($+32)}:${N.substr(3)}`)}else if(N.length>=2&&N.charCodeAt(1)===58){const $=N.charCodeAt(0);$>=65&&$<=90&&(N=`${String.fromCharCode($+32)}:${N.substr(2)}`)}C+=R(N,!0,!1)}return Fe&&(C+="?",C+=R(Fe,!1,!1)),x&&(C+="#",C+=S?x:w(x,!1,!1)),C}function b(A){try{return decodeURIComponent(A)}catch{return A.length>3?A.substr(0,3)+b(A.substr(3)):A}}const F=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function W(A){return A.match(F)?A.replace(F,S=>b(S)):A}var X=n(470);const ye=X.posix||X,Te="/";var Re;(function(A){A.joinPath=function(S,...R){return S.with({path:ye.join(S.path,...R)})},A.resolvePath=function(S,...R){let C=S.path,I=!1;C[0]!==Te&&(C=Te+C,I=!0);let P=ye.resolve(C,...R);return I&&P[0]===Te&&!S.authority&&(P=P.substring(1)),S.with({path:P})},A.dirname=function(S){if(S.path.length===0||S.path===Te)return S;let R=ye.dirname(S.path);return R.length===1&&R.charCodeAt(0)===46&&(R=""),S.with({path:R})},A.basename=function(S){return ye.basename(S.path)},A.extname=function(S){return ye.extname(S.path)}})(Re||(Re={}))})(),__=r})();const{URI:it,Utils:hi}=__;var he;(function(t){t.basename=hi.basename,t.dirname=hi.dirname,t.extname=hi.extname,t.joinPath=hi.joinPath,t.resolvePath=hi.resolvePath;const e=typeof process=="object"&&(process==null?void 0:process.platform)==="win32";function n(s,o){return(s==null?void 0:s.toString())===(o==null?void 0:o.toString())}t.equals=n;function r(s,o){const a=typeof s=="string"?it.parse(s).path:s.path,c=typeof o=="string"?it.parse(o).path:o.path,l=a.split("/").filter(d=>d.length>0),u=c.split("/").filter(d=>d.length>0);if(e){const d=/^[A-Z]:$/;if(l[0]&&d.test(l[0])&&(l[0]=l[0].toLowerCase()),u[0]&&d.test(u[0])&&(u[0]=u[0].toLowerCase()),l[0]!==u[0])return c.substring(1)}let f=0;for(;f<l.length&&l[f]===u[f];f++);const h="../".repeat(l.length-f),p=u.slice(f).join("/");return h+p}t.relative=r;function i(s){return it.parse(s.toString()).toString()}t.normalize=i})(he||(he={}));var q;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(q||(q={}));class k0{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,n=ce.None){const r=await this.fileSystemProvider.readFile(e);return this.createAsync(e,r,n)}fromTextDocument(e,n,r){return n=n??it.parse(e.uri),ce.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromString(e,n,r){return ce.is(r)?this.createAsync(n,e,r):this.create(n,e,r)}fromModel(e,n){return this.create(n,{$model:e})}create(e,n,r){if(typeof n=="string"){const i=this.parse(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else if("$model"in n){const i={value:n.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(i,e)}else{const i=this.parse(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}async createAsync(e,n,r){if(typeof n=="string"){const i=await this.parseAsync(e,n,r);return this.createLangiumDocument(i,e,void 0,n)}else{const i=await this.parseAsync(e,n.getText(),r);return this.createLangiumDocument(i,e,n)}}createLangiumDocument(e,n,r,i){let s;if(r)s={parseResult:e,uri:n,state:q.Parsed,references:[],textDocument:r};else{const o=this.createTextDocumentGetter(n,i);s={parseResult:e,uri:n,state:q.Parsed,references:[],get textDocument(){return o()}}}return e.value.$document=s,s}async update(e,n){var r,i;const s=(r=e.parseResult.value.$cstNode)===null||r===void 0?void 0:r.root.fullText,o=(i=this.textDocuments)===null||i===void 0?void 0:i.get(e.uri.toString()),a=o?o.getText():await this.fileSystemProvider.readFile(e.uri);if(o)Object.defineProperty(e,"textDocument",{value:o});else{const c=this.createTextDocumentGetter(e.uri,a);Object.defineProperty(e,"textDocument",{get:c})}return s!==a&&(e.parseResult=await this.parseAsync(e.uri,a,n),e.parseResult.value.$document=e),e.state=q.Parsed,e}parse(e,n,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(n,r)}parseAsync(e,n,r){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(n,r)}createTextDocumentGetter(e,n){const r=this.serviceRegistry;let i;return()=>i??(i=Hc.create(e.toString(),r.getServices(e).LanguageMetaData.languageId,0,n??""))}}class S0{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.serviceRegistry=e.ServiceRegistry}get all(){return ke(this.documentMap.values())}addDocument(e){const n=e.uri.toString();if(this.documentMap.has(n))throw new Error(`A document with the URI '${n}' is already present.`);this.documentMap.set(n,e)}getDocument(e){const n=e.toString();return this.documentMap.get(n)}async getOrCreateDocument(e,n){let r=this.getDocument(e);return r||(r=await this.langiumDocumentFactory.fromUri(e,n),this.addDocument(r),r)}createDocument(e,n,r){if(r)return this.langiumDocumentFactory.fromString(n,e,r).then(i=>(this.addDocument(i),i));{const i=this.langiumDocumentFactory.fromString(n,e);return this.addDocument(i),i}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(this.serviceRegistry.getServices(e).references.Linker.unlink(r),r.state=q.Changed,r.precomputedScopes=void 0,r.diagnostics=void 0),r}deleteDocument(e){const n=e.toString(),r=this.documentMap.get(n);return r&&(r.state=q.Changed,this.documentMap.delete(n)),r}}const cu=Symbol("ref_resolving");class T_{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,n=ce.None){for(const r of nr(e.parseResult.value))await rt(n),by(r).forEach(i=>this.doLink(i,e))}doLink(e,n){var r;const i=e.reference;if(i._ref===void 0){i._ref=cu;try{const s=this.getCandidate(e);if(tc(s))i._ref=s;else if(i._nodeDescription=s,this.langiumDocuments().hasDocument(s.documentUri)){const o=this.loadAstNode(s);i._ref=o??this.createLinkingError(e,s)}else i._ref=void 0}catch(s){console.error(`An error occurred while resolving reference to '${i.$refText}':`,s);const o=(r=s.message)!==null&&r!==void 0?r:String(s);i._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${i.$refText}': ${o}`})}n.references.push(i)}}unlink(e){for(const n of e.references)delete n._ref,delete n._nodeDescription;e.references=[]}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r??this.createLinkingError(e)}buildReference(e,n,r,i){const s=this,o={$refNode:r,$refText:i,get ref(){var a;if(Xe(this._ref))return this._ref;if(RT(this._nodeDescription)){const c=s.loadAstNode(this._nodeDescription);this._ref=c??s.createLinkingError({reference:o,container:e,property:n},this._nodeDescription)}else if(this._ref===void 0){this._ref=cu;const c=er(e).$document,l=s.getLinkedNode({reference:o,container:e,property:n});if(l.error&&c&&c.state<q.ComputedScopes)return this._ref=void 0;this._ref=(a=l.node)!==null&&a!==void 0?a:l.error,this._nodeDescription=l.descr,c==null||c.references.push(this)}else if(this._ref===cu)throw new Error(`Cyclic reference resolution detected: ${s.astNodeLocator.getAstNodePath(e)}/${n} (symbol '${i}')`);return Xe(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return tc(this._ref)?this._ref:void 0}};return o}getLinkedNode(e){var n;try{const r=this.getCandidate(e);if(tc(r))return{error:r};const i=this.loadAstNode(r);return i?{node:i,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`,r);const i=(n=r.message)!==null&&n!==void 0?n:String(r);return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${i}`})}}}loadAstNode(e){if(e.node)return e.node;const n=this.langiumDocuments().getDocument(e.documentUri);if(n)return this.astNodeLocator.getAstNode(n.parseResult.value,e.path)}createLinkingError(e,n){const r=er(e.container).$document;r&&r.state<q.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${r.uri}).`);const i=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${i} named '${e.reference.$refText}'.`,targetDescription:n})}}function R_(t){return typeof t.name=="string"}class C0{getName(e){if(R_(e))return e.name}getNameNode(e){return Bf(e.$cstNode,"name")}}class $0{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){const n=iR(e),r=e.astNode;if(n&&r){const i=r[n.feature];if(Jt(i))return i.ref;if(Array.isArray(i)){for(const s of i)if(Jt(s)&&s.$refNode&&s.$refNode.offset<=e.offset&&s.$refNode.end>=e.end)return s.ref}}if(r){const i=this.nameProvider.getNameNode(r);if(i&&(i===e||ST(e,i)))return r}}}findDeclarationNode(e){const n=this.findDeclaration(e);if(n!=null&&n.$cstNode){const r=this.nameProvider.getNameNode(n);return r??n.$cstNode}}findReferences(e,n){const r=[];if(n.includeDeclaration){const s=this.getReferenceToSelf(e);s&&r.push(s)}let i=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return n.documentUri&&(i=i.filter(s=>he.equals(s.sourceUri,n.documentUri))),r.push(...i),ke(r)}getReferenceToSelf(e){const n=this.nameProvider.getNameNode(e);if(n){const r=tn(e),i=this.nodeLocator.getAstNodePath(e);return{sourceUri:r.uri,sourcePath:i,targetUri:r.uri,targetPath:i,segment:mc(n),local:!0}}}}class jc{constructor(e){if(this.map=new Map,e)for(const[n,r]of e)this.add(n,r)}get size(){return ed.sum(ke(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,n){if(n===void 0)return this.map.delete(e);{const r=this.map.get(e);if(r){const i=r.indexOf(n);if(i>=0)return r.length===1?this.map.delete(e):r.splice(i,1),!0}return!1}}get(e){var n;return(n=this.map.get(e))!==null&&n!==void 0?n:[]}has(e,n){if(n===void 0)return this.map.has(e);{const r=this.map.get(e);return r?r.indexOf(n)>=0:!1}}add(e,n){return this.map.has(e)?this.map.get(e).push(n):this.map.set(e,[n]),this}addAll(e,n){return this.map.has(e)?this.map.get(e).push(...n):this.map.set(e,Array.from(n)),this}forEach(e){this.map.forEach((n,r)=>n.forEach(i=>e(i,r,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return ke(this.map.entries()).flatMap(([e,n])=>n.map(r=>[e,r]))}keys(){return ke(this.map.keys())}values(){return ke(this.map.values()).flat()}entriesGroupedByKey(){return ke(this.map.entries())}}class Vp{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(const[n,r]of e)this.set(n,r)}clear(){this.map.clear(),this.inverse.clear()}set(e,n){return this.map.set(e,n),this.inverse.set(n,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){const n=this.map.get(e);return n!==void 0?(this.map.delete(e),this.inverse.delete(n),!0):!1}}class E0{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,n=ce.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,n)}async computeExportsForNode(e,n,r=Qc,i=ce.None){const s=[];this.exportNode(e,s,n);for(const o of r(e))await rt(i),this.exportNode(o,s,n);return s}exportNode(e,n,r){const i=this.nameProvider.getName(e);i&&n.push(this.descriptions.createDescription(e,i,r))}async computeLocalScopes(e,n=ce.None){const r=e.parseResult.value,i=new jc;for(const s of Qt(r))await rt(n),this.processNode(s,e,i);return i}processNode(e,n,r){const i=e.$container;if(i){const s=this.nameProvider.getName(e);s&&r.add(i,this.descriptions.createDescription(e,s,n))}}}class Yp{constructor(e,n,r){var i;this.elements=e,this.outerScope=n,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){const n=this.caseInsensitive?this.elements.find(r=>r.name.toLowerCase()===e.toLowerCase()):this.elements.find(r=>r.name===e);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}}class P0{constructor(e,n,r){var i;this.elements=new Map,this.caseInsensitive=(i=r==null?void 0:r.caseInsensitive)!==null&&i!==void 0?i:!1;for(const s of e){const o=this.caseInsensitive?s.name.toLowerCase():s.name;this.elements.set(o,s)}this.outerScope=n}getElement(e){const n=this.caseInsensitive?e.toLowerCase():e,r=this.elements.get(n);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=ke(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}}class w_{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}}class A0 extends w_{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,n){this.throwIfDisposed(),this.cache.set(e,n)}get(e,n){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(n){const r=n();return this.cache.set(e,r),r}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}}class N0 extends w_{constructor(e){super(),this.cache=new Map,this.converter=e??(n=>n)}has(e,n){return this.throwIfDisposed(),this.cacheForContext(e).has(n)}set(e,n,r){this.throwIfDisposed(),this.cacheForContext(e).set(n,r)}get(e,n,r){this.throwIfDisposed();const i=this.cacheForContext(e);if(i.has(n))return i.get(n);if(r){const s=r();return i.set(n,s),s}else return}delete(e,n){return this.throwIfDisposed(),this.cacheForContext(e).delete(n)}clear(e){if(this.throwIfDisposed(),e){const n=this.converter(e);this.cache.delete(n)}else this.cache.clear()}cacheForContext(e){const n=this.converter(e);let r=this.cache.get(n);return r||(r=new Map,this.cache.set(n,r)),r}}class I0 extends A0{constructor(e,n){super(),n?(this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(n,()=>{this.clear()})),this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((r,i)=>{i.length>0&&this.clear()}))):this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}}class b_{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new I0(e.shared)}getScope(e){const n=[],r=this.reflection.getReferenceType(e),i=tn(e.container).precomputedScopes;if(i){let o=e.container;do{const a=i.get(o);a.length>0&&n.push(ke(a).filter(c=>this.reflection.isSubtype(c.type,r))),o=o.$container}while(o)}let s=this.getGlobalScope(r,e);for(let o=n.length-1;o>=0;o--)s=this.createScope(n[o],s);return s}createScope(e,n,r){return new Yp(ke(e),n,r)}createScopeForNodes(e,n,r){const i=ke(e).map(s=>{const o=this.nameProvider.getName(s);if(o)return this.descriptions.createDescription(s,o)}).nonNullable();return new Yp(i,n,r)}getGlobalScope(e,n){return this.globalScopeCache.get(e,()=>new P0(this.indexManager.allElements(e)))}}function k_(t){return typeof t.$comment=="string"}function Xp(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}class D0{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,n){const r=n??{},i=n==null?void 0:n.replacer,s=(a,c)=>this.replacer(a,c,r),o=i?(a,c)=>i(a,c,s):s;try{return this.currentDocument=tn(e),JSON.stringify(e,o,n==null?void 0:n.space)}finally{this.currentDocument=void 0}}deserialize(e,n){const r=n??{},i=JSON.parse(e);return this.linkNode(i,i,r),i}replacer(e,n,{refText:r,sourceText:i,textRegions:s,comments:o,uriConverter:a}){var c,l,u,f;if(!this.ignoreProperties.has(e))if(Jt(n)){const h=n.ref,p=r?n.$refText:void 0;if(h){const d=tn(h);let y="";this.currentDocument&&this.currentDocument!==d&&(a?y=a(d.uri,n):y=d.uri.toString());const w=this.astNodeLocator.getAstNodePath(h);return{$ref:`${y}#${w}`,$refText:p}}else return{$error:(l=(c=n.error)===null||c===void 0?void 0:c.message)!==null&&l!==void 0?l:"Could not resolve reference",$refText:p}}else if(Xe(n)){let h;if(s&&(h=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},n)),(!e||n.$document)&&(h!=null&&h.$textRegion)&&(h.$textRegion.documentURI=(u=this.currentDocument)===null||u===void 0?void 0:u.uri.toString())),i&&!e&&(h??(h=Object.assign({},n)),h.$sourceText=(f=n.$cstNode)===null||f===void 0?void 0:f.text),o){h??(h=Object.assign({},n));const p=this.commentProvider.getComment(n);p&&(h.$comment=p.replace(/\r/g,""))}return h??n}else return n}addAstNodeRegionWithAssignmentsTo(e){const n=r=>({offset:r.offset,end:r.end,length:r.length,range:r.range});if(e.$cstNode){const r=e.$textRegion=n(e.$cstNode),i=r.assignments={};return Object.keys(e).filter(s=>!s.startsWith("$")).forEach(s=>{const o=Ny(e.$cstNode,s).map(n);o.length!==0&&(i[s]=o)}),e}}linkNode(e,n,r,i,s,o){for(const[c,l]of Object.entries(e))if(Array.isArray(l))for(let u=0;u<l.length;u++){const f=l[u];Xp(f)?l[u]=this.reviveReference(e,c,n,f,r):Xe(f)&&this.linkNode(f,n,r,e,c,u)}else Xp(l)?e[c]=this.reviveReference(e,c,n,l,r):Xe(l)&&this.linkNode(l,n,r,e,c);const a=e;a.$container=i,a.$containerProperty=s,a.$containerIndex=o}reviveReference(e,n,r,i,s){let o=i.$refText,a=i.$error;if(i.$ref){const c=this.getRefNode(r,i.$ref,s.uriConverter);if(Xe(c))return o||(o=this.nameProvider.getName(c)),{$refText:o??"",ref:c};a=c}if(a){const c={$refText:o??""};return c.error={container:e,property:n,message:a,reference:c},c}else return}getRefNode(e,n,r){try{const i=n.indexOf("#");if(i===0){const c=this.astNodeLocator.getAstNode(e,n.substring(1));return c||"Could not resolve path: "+n}if(i<0){const c=r?r(n):it.parse(n),l=this.langiumDocuments.getDocument(c);return l?l.parseResult.value:"Could not find document for URI: "+n}const s=r?r(n.substring(0,i)):it.parse(n.substring(0,i)),o=this.langiumDocuments.getDocument(s);if(!o)return"Could not find document for URI: "+n;if(i===n.length-1)return o.parseResult.value;const a=this.astNodeLocator.getAstNode(o.parseResult.value,n.substring(i+1));return a||"Could not resolve URI: "+n}catch(i){return String(i)}}}class O0{get map(){return this.fileExtensionMap}constructor(e){this.languageIdMap=new Map,this.fileExtensionMap=new Map,this.fileNameMap=new Map,this.textDocuments=e==null?void 0:e.workspace.TextDocuments}register(e){const n=e.LanguageMetaData;for(const r of n.fileExtensions)this.fileExtensionMap.has(r)&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileExtensionMap.set(r,e);if(n.fileNames)for(const r of n.fileNames)this.fileNameMap.has(r)&&console.warn(`The file name ${r} is used by multiple languages. It is now assigned to '${n.languageId}'.`),this.fileNameMap.set(r,e);this.languageIdMap.set(n.languageId,e),this.languageIdMap.size===1?this.singleton=e:this.singleton=void 0}getServices(e){var n,r,i;if(this.singleton!==void 0)return this.singleton;if(this.languageIdMap.size===0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");const s=(r=(n=this.textDocuments)===null||n===void 0?void 0:n.get(e))===null||r===void 0?void 0:r.languageId;if(s!==void 0){const l=this.languageIdMap.get(s);if(l)return l}const o=he.extname(e),a=he.basename(e),c=(i=this.fileNameMap.get(a))!==null&&i!==void 0?i:this.fileExtensionMap.get(o);if(!c)throw s?new Error(`The service registry contains no services for the extension '${o}' for language '${s}'.`):new Error(`The service registry contains no services for the extension '${o}'.`);return c}hasServices(e){try{return this.getServices(e),!0}catch{return!1}}get all(){return Array.from(this.languageIdMap.values())}}function Ji(t){return{code:t}}var qc;(function(t){t.all=["fast","slow","built-in"]})(qc||(qc={}));class x0{constructor(e){this.entries=new jc,this.entriesBefore=[],this.entriesAfter=[],this.reflection=e.shared.AstReflection}register(e,n=this,r="fast"){if(r==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(const[i,s]of Object.entries(e)){const o=s;if(Array.isArray(o))for(const a of o){const c={check:this.wrapValidationException(a,n),category:r};this.addEntry(i,c)}else if(typeof o=="function"){const a={check:this.wrapValidationException(o,n),category:r};this.addEntry(i,a)}else Ts()}}wrapValidationException(e,n){return async(r,i,s)=>{await this.handleException(()=>e.call(n,r,i,s),"An error occurred during validation",i,r)}}async handleException(e,n,r,i){try{await e()}catch(s){if(xs(s))throw s;console.error(`${n}:`,s),s instanceof Error&&s.stack&&console.error(s.stack);const o=s instanceof Error?s.message:String(s);r("error",`${n}: ${o}`,{node:i})}}addEntry(e,n){if(e==="AstNode"){this.entries.add("AstNode",n);return}for(const r of this.reflection.getAllSubTypes(e))this.entries.add(r,n)}getChecks(e,n){let r=ke(this.entries.get(e)).concat(this.entries.get("AstNode"));return n&&(r=r.filter(i=>n.includes(i.category))),r.map(i=>i.check)}registerBeforeDocument(e,n=this){this.entriesBefore.push(this.wrapPreparationException(e,"An error occurred during set-up of the validation",n))}registerAfterDocument(e,n=this){this.entriesAfter.push(this.wrapPreparationException(e,"An error occurred during tear-down of the validation",n))}wrapPreparationException(e,n,r){return async(i,s,o,a)=>{await this.handleException(()=>e.call(r,i,s,o,a),n,s,i)}}get checksBefore(){return this.entriesBefore}get checksAfter(){return this.entriesAfter}}class L0{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,n={},r=ce.None){const i=e.parseResult,s=[];if(await rt(r),(!n.categories||n.categories.includes("built-in"))&&(this.processLexingErrors(i,s,n),n.stopAfterLexingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Mt.LexingError})||(this.processParsingErrors(i,s,n),n.stopAfterParsingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Mt.ParsingError}))||(this.processLinkingErrors(e,s,n),n.stopAfterLinkingErrors&&s.some(o=>{var a;return((a=o.data)===null||a===void 0?void 0:a.code)===Mt.LinkingError}))))return s;try{s.push(...await this.validateAst(i.value,n,r))}catch(o){if(xs(o))throw o;console.error("An error occurred during validation:",o)}return await rt(r),s}processLexingErrors(e,n,r){var i,s,o;const a=[...e.lexerErrors,...(s=(i=e.lexerReport)===null||i===void 0?void 0:i.diagnostics)!==null&&s!==void 0?s:[]];for(const c of a){const l=(o=c.severity)!==null&&o!==void 0?o:"error",u={severity:lu(l),range:{start:{line:c.line-1,character:c.column-1},end:{line:c.line-1,character:c.column+c.length-1}},message:c.message,data:F0(l),source:this.getSource()};n.push(u)}}processParsingErrors(e,n,r){for(const i of e.parserErrors){let s;if(isNaN(i.token.startOffset)){if("previousToken"in i){const o=i.previousToken;if(isNaN(o.startOffset)){const a={line:0,character:0};s={start:a,end:a}}else{const a={line:o.endLine-1,character:o.endColumn};s={start:a,end:a}}}}else s=td(i.token);if(s){const o={severity:lu("error"),range:s,message:i.message,data:Ji(Mt.ParsingError),source:this.getSource()};n.push(o)}}}processLinkingErrors(e,n,r){for(const i of e.references){const s=i.error;if(s){const o={node:s.container,property:s.property,index:s.index,data:{code:Mt.LinkingError,containerType:s.container.$type,property:s.property,refText:s.reference.$refText}};n.push(this.toDiagnostic("error",s.message,o))}}}async validateAst(e,n,r=ce.None){const i=[],s=(o,a,c)=>{i.push(this.toDiagnostic(o,a,c))};return await this.validateAstBefore(e,n,s,r),await this.validateAstNodes(e,n,s,r),await this.validateAstAfter(e,n,s,r),i}async validateAstBefore(e,n,r,i=ce.None){var s;const o=this.validationRegistry.checksBefore;for(const a of o)await rt(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}async validateAstNodes(e,n,r,i=ce.None){await Promise.all(nr(e).map(async s=>{await rt(i);const o=this.validationRegistry.getChecks(s.$type,n.categories);for(const a of o)await a(s,r,i)}))}async validateAstAfter(e,n,r,i=ce.None){var s;const o=this.validationRegistry.checksAfter;for(const a of o)await rt(i),await a(e,r,(s=n.categories)!==null&&s!==void 0?s:[],i)}toDiagnostic(e,n,r){return{message:n,range:M0(r),severity:lu(e),code:r.code,codeDescription:r.codeDescription,tags:r.tags,relatedInformation:r.relatedInformation,data:r.data,source:this.getSource()}}getSource(){return this.metadata.languageId}}function M0(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Bf(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Iy(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function lu(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}function F0(t){switch(t){case"error":return Ji(Mt.LexingError);case"warning":return Ji(Mt.LexingWarning);case"info":return Ji(Mt.LexingInfo);case"hint":return Ji(Mt.LexingHint);default:throw new Error("Invalid diagnostic severity: "+t)}}var Mt;(function(t){t.LexingError="lexing-error",t.LexingWarning="lexing-warning",t.LexingInfo="lexing-info",t.LexingHint="lexing-hint",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(Mt||(Mt={}));class H0{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,n,r){const i=r??tn(e);n??(n=this.nameProvider.getName(e));const s=this.astNodeLocator.getAstNodePath(e);if(!n)throw new Error(`Node at path ${s} has no name.`);let o;const a=()=>{var c;return o??(o=mc((c=this.nameProvider.getNameNode(e))!==null&&c!==void 0?c:e.$cstNode))};return{node:e,name:n,get nameSegment(){return a()},selectionSegment:mc(e.$cstNode),type:e.$type,documentUri:i.uri,path:s}}}class j0{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,n=ce.None){const r=[],i=e.parseResult.value;for(const s of nr(i))await rt(n),by(s).filter(o=>!tc(o)).forEach(o=>{const a=this.createDescription(o);a&&r.push(a)});return r}createDescription(e){const n=e.reference.$nodeDescription,r=e.reference.$refNode;if(!n||!r)return;const i=tn(e.container).uri;return{sourceUri:i,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:n.documentUri,targetPath:n.path,segment:mc(r),local:he.equals(n.documentUri,i)}}}class q0{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){const n=this.getAstNodePath(e.$container),r=this.getPathSegment(e);return n+this.segmentSeparator+r}return""}getPathSegment({$containerProperty:e,$containerIndex:n}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return n!==void 0?e+this.indexSeparator+n:e}getAstNode(e,n){return n.split(this.segmentSeparator).reduce((i,s)=>{if(!i||s.length===0)return i;const o=s.indexOf(this.indexSeparator);if(o>0){const a=s.substring(0,o),c=parseInt(s.substring(o+1)),l=i[a];return l==null?void 0:l[c]}return i[s]},e)}}class U0{constructor(e){this._ready=new bh,this.settings={},this.workspaceConfig=!1,this.onConfigurationSectionUpdateEmitter=new g_,this.serviceRegistry=e.ServiceRegistry}get ready(){return this._ready.promise}initialize(e){var n,r;this.workspaceConfig=(r=(n=e.capabilities.workspace)===null||n===void 0?void 0:n.configuration)!==null&&r!==void 0?r:!1}async initialized(e){if(this.workspaceConfig){if(e.register){const n=this.serviceRegistry.all;e.register({section:n.map(r=>this.toSectionName(r.LanguageMetaData.languageId))})}if(e.fetchConfiguration){const n=this.serviceRegistry.all.map(i=>({section:this.toSectionName(i.LanguageMetaData.languageId)})),r=await e.fetchConfiguration(n);n.forEach((i,s)=>{this.updateSectionConfiguration(i.section,r[s])})}}this._ready.resolve()}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(n=>{const r=e.settings[n];this.updateSectionConfiguration(n,r),this.onConfigurationSectionUpdateEmitter.fire({section:n,configuration:r})})}updateSectionConfiguration(e,n){this.settings[e]=n}async getConfiguration(e,n){await this.ready;const r=this.toSectionName(e);if(this.settings[r])return this.settings[r][n]}toSectionName(e){return`${e}`}get onConfigurationSectionUpdate(){return this.onConfigurationSectionUpdateEmitter.event}}var rs;(function(t){function e(n){return{dispose:async()=>await n()}}t.create=e})(rs||(rs={}));class B0{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new jc,this.documentPhaseListeners=new jc,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=q.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.textDocuments=e.workspace.TextDocuments,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,n={},r=ce.None){var i,s;for(const o of e){const a=o.uri.toString();if(o.state===q.Validated){if(typeof n.validation=="boolean"&&n.validation)o.state=q.IndexedReferences,o.diagnostics=void 0,this.buildState.delete(a);else if(typeof n.validation=="object"){const c=this.buildState.get(a),l=(i=c==null?void 0:c.result)===null||i===void 0?void 0:i.validationChecks;if(l){const f=((s=n.validation.categories)!==null&&s!==void 0?s:qc.all).filter(h=>!l.includes(h));f.length>0&&(this.buildState.set(a,{completed:!1,options:{validation:Object.assign(Object.assign({},n.validation),{categories:f})},result:c.result}),o.state=q.IndexedReferences)}}}else this.buildState.delete(a)}this.currentState=q.Changed,await this.emitUpdate(e.map(o=>o.uri),[]),await this.buildDocuments(e,n,r)}async update(e,n,r=ce.None){this.currentState=q.Changed;for(const o of n)this.langiumDocuments.deleteDocument(o),this.buildState.delete(o.toString()),this.indexManager.remove(o);for(const o of e){if(!this.langiumDocuments.invalidateDocument(o)){const c=this.langiumDocumentFactory.fromModel({$type:"INVALID"},o);c.state=q.Changed,this.langiumDocuments.addDocument(c)}this.buildState.delete(o.toString())}const i=ke(e).concat(n).map(o=>o.toString()).toSet();this.langiumDocuments.all.filter(o=>!i.has(o.uri.toString())&&this.shouldRelink(o,i)).forEach(o=>{this.serviceRegistry.getServices(o.uri).references.Linker.unlink(o),o.state=Math.min(o.state,q.ComputedScopes),o.diagnostics=void 0}),await this.emitUpdate(e,n),await rt(r);const s=this.sortDocuments(this.langiumDocuments.all.filter(o=>{var a;return o.state<q.Linked||!(!((a=this.buildState.get(o.uri.toString()))===null||a===void 0)&&a.completed)}).toArray());await this.buildDocuments(s,this.updateBuildOptions,r)}async emitUpdate(e,n){await Promise.all(this.updateListeners.map(r=>r(e,n)))}sortDocuments(e){let n=0,r=e.length-1;for(;n<r;){for(;n<e.length&&this.hasTextDocument(e[n]);)n++;for(;r>=0&&!this.hasTextDocument(e[r]);)r--;n<r&&([e[n],e[r]]=[e[r],e[n]])}return e}hasTextDocument(e){var n;return!!(!((n=this.textDocuments)===null||n===void 0)&&n.get(e.uri))}shouldRelink(e,n){return e.references.some(r=>r.error!==void 0)?!0:this.indexManager.isAffected(e,n)}onUpdate(e){return this.updateListeners.push(e),rs.create(()=>{const n=this.updateListeners.indexOf(e);n>=0&&this.updateListeners.splice(n,1)})}async buildDocuments(e,n,r){this.prepareBuild(e,n),await this.runCancelable(e,q.Parsed,r,o=>this.langiumDocumentFactory.update(o,r)),await this.runCancelable(e,q.IndexedContent,r,o=>this.indexManager.updateContent(o,r)),await this.runCancelable(e,q.ComputedScopes,r,async o=>{const a=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await a.computeLocalScopes(o,r)});const i=e.filter(o=>this.shouldLink(o));await this.runCancelable(i,q.Linked,r,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,r)),await this.runCancelable(i,q.IndexedReferences,r,o=>this.indexManager.updateReferences(o,r));const s=e.filter(o=>this.shouldValidate(o));await this.runCancelable(s,q.Validated,r,o=>this.validate(o,r));for(const o of e){const a=this.buildState.get(o.uri.toString());a&&(a.completed=!0)}}prepareBuild(e,n){for(const r of e){const i=r.uri.toString(),s=this.buildState.get(i);(!s||s.completed)&&this.buildState.set(i,{completed:!1,options:n,result:s==null?void 0:s.result})}}async runCancelable(e,n,r,i){const s=e.filter(a=>a.state<n);for(const a of s)await rt(r),await i(a),a.state=n,await this.notifyDocumentPhase(a,n,r);const o=e.filter(a=>a.state===n);await this.notifyBuildPhase(o,n,r),this.currentState=n}onBuildPhase(e,n){return this.buildPhaseListeners.add(e,n),rs.create(()=>{this.buildPhaseListeners.delete(e,n)})}onDocumentPhase(e,n){return this.documentPhaseListeners.add(e,n),rs.create(()=>{this.documentPhaseListeners.delete(e,n)})}waitUntil(e,n,r){let i;if(n&&"path"in n?i=n:r=n,r??(r=ce.None),i){const s=this.langiumDocuments.getDocument(i);if(s&&s.state>=e)return Promise.resolve(i)}return this.currentState>=e?Promise.resolve(void 0):r.isCancellationRequested?Promise.reject(Fc):new Promise((s,o)=>{const a=this.onBuildPhase(e,()=>{if(a.dispose(),c.dispose(),i){const l=this.langiumDocuments.getDocument(i);s(l==null?void 0:l.uri)}else s(void 0)}),c=r.onCancellationRequested(()=>{a.dispose(),c.dispose(),o(Fc)})})}async notifyDocumentPhase(e,n,r){const s=this.documentPhaseListeners.get(n).slice();for(const o of s)try{await o(e,r)}catch(a){if(!xs(a))throw a}}async notifyBuildPhase(e,n,r){if(e.length===0)return;const s=this.buildPhaseListeners.get(n).slice();for(const o of s)await rt(r),await o(e,r)}shouldLink(e){var n;return(n=this.getBuildOptions(e).eagerLinking)!==null&&n!==void 0?n:!0}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,n){var r,i;const s=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,o=this.getBuildOptions(e).validation,a=typeof o=="object"?o:void 0,c=await s.validateDocument(e,a,n);e.diagnostics?e.diagnostics.push(...c):e.diagnostics=c;const l=this.buildState.get(e.uri.toString());if(l){(r=l.result)!==null&&r!==void 0||(l.result={});const u=(i=a==null?void 0:a.categories)!==null&&i!==void 0?i:qc.all;l.result.validationChecks?l.result.validationChecks.push(...u):l.result.validationChecks=[...u]}}getBuildOptions(e){var n,r;return(r=(n=this.buildState.get(e.uri.toString()))===null||n===void 0?void 0:n.options)!==null&&r!==void 0?r:{}}}class K0{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new N0,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,n){const r=tn(e).uri,i=[];return this.referenceIndex.forEach(s=>{s.forEach(o=>{he.equals(o.targetUri,r)&&o.targetPath===n&&i.push(o)})}),ke(i)}allElements(e,n){let r=ke(this.symbolIndex.keys());return n&&(r=r.filter(i=>!n||n.has(i))),r.map(i=>this.getFileDescriptions(i,e)).flat()}getFileDescriptions(e,n){var r;return n?this.symbolByTypeIndex.get(e,n,()=>{var s;return((s=this.symbolIndex.get(e))!==null&&s!==void 0?s:[]).filter(a=>this.astReflection.isSubtype(a.type,n))}):(r=this.symbolIndex.get(e))!==null&&r!==void 0?r:[]}remove(e){const n=e.toString();this.symbolIndex.delete(n),this.symbolByTypeIndex.clear(n),this.referenceIndex.delete(n)}async updateContent(e,n=ce.None){const i=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,n),s=e.uri.toString();this.symbolIndex.set(s,i),this.symbolByTypeIndex.clear(s)}async updateReferences(e,n=ce.None){const i=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,n);this.referenceIndex.set(e.uri.toString(),i)}isAffected(e,n){const r=this.referenceIndex.get(e.uri.toString());return r?r.some(i=>!i.local&&n.has(i.targetUri.toString())):!1}}class W0{constructor(e){this.initialBuildOptions={},this._ready=new bh,this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}get ready(){return this._ready.promise}get workspaceFolders(){return this.folders}initialize(e){var n;this.folders=(n=e.workspaceFolders)!==null&&n!==void 0?n:void 0}initialized(e){return this.mutex.write(n=>{var r;return this.initializeWorkspace((r=this.folders)!==null&&r!==void 0?r:[],n)})}async initializeWorkspace(e,n=ce.None){const r=await this.performStartup(e);await rt(n),await this.documentBuilder.build(r,this.initialBuildOptions,n)}async performStartup(e){const n=this.serviceRegistry.all.flatMap(o=>o.LanguageMetaData.fileExtensions),r=this.serviceRegistry.all.flatMap(o=>{var a;return(a=o.LanguageMetaData.fileNames)!==null&&a!==void 0?a:[]}),i=[],s=o=>{i.push(o),this.langiumDocuments.hasDocument(o.uri)||this.langiumDocuments.addDocument(o)};return await this.loadAdditionalDocuments(e,s),await Promise.all(e.map(o=>[o,this.getRootFolder(o)]).map(async o=>this.traverseFolder(...o,{fileExtensions:n,fileNames:r},s))),this._ready.resolve(),i}loadAdditionalDocuments(e,n){return Promise.resolve()}getRootFolder(e){return it.parse(e.uri)}async traverseFolder(e,n,r,i){const s=await this.fileSystemProvider.readDirectory(n);await Promise.all(s.map(async o=>{if(this.includeEntry(e,o,r)){if(o.isDirectory)await this.traverseFolder(e,o.uri,r,i);else if(o.isFile){const a=await this.langiumDocuments.getOrCreateDocument(o.uri);i(a)}}}))}includeEntry(e,n,r){const i=he.basename(n.uri);return i.startsWith(".")?!1:n.isDirectory?i!=="node_modules"&&i!=="out":n.isFile?r.fileExtensions.includes(he.extname(n.uri))||r.fileNames.includes(he.basename(n.uri)):!1}}class G0{buildUnexpectedCharactersMessage(e,n,r,i,s){return fd.buildUnexpectedCharactersMessage(e,n,r,i,s)}buildUnableToPopLexerModeMessage(e){return fd.buildUnableToPopLexerModeMessage(e)}}const z0={mode:"full"};class V0{constructor(e){this.errorMessageProvider=e.parser.LexerErrorMessageProvider,this.tokenBuilder=e.parser.TokenBuilder;const n=this.tokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(n);const r=Jp(n)?Object.values(n):n,i=e.LanguageMetaData.mode==="production";this.chevrotainLexer=new dt(r,{positionTracking:"full",skipValidations:i,errorMessageProvider:this.errorMessageProvider})}get definition(){return this.tokenTypes}tokenize(e,n=z0){var r,i,s;const o=this.chevrotainLexer.tokenize(e);return{tokens:o.tokens,errors:o.errors,hidden:(r=o.groups.hidden)!==null&&r!==void 0?r:[],report:(s=(i=this.tokenBuilder).flushLexingReport)===null||s===void 0?void 0:s.call(i,e)}}toTokenTypeDictionary(e){if(Jp(e))return e;const n=S_(e)?Object.values(e.modes).flat():e,r={};return n.forEach(i=>r[i.name]=i),r}}function Y0(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function S_(t){return t&&"modes"in t&&"defaultMode"in t}function Jp(t){return!Y0(t)&&!S_(t)}function C_(t,e,n){let r,i;typeof t=="string"?(i=e,r=n):(i=t.range.start,r=e),i||(i=re.create(0,0));const s=E_(t),o=kh(r),a=J0({lines:s,position:i,options:o});return nA({index:0,tokens:a,position:i})}function $_(t,e){const n=kh(e),r=E_(t);if(r.length===0)return!1;const i=r[0],s=r[r.length-1],o=n.start,a=n.end;return!!(o!=null&&o.exec(i))&&!!(a!=null&&a.exec(s))}function E_(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(VT)}const Qp=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,X0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function J0(t){var e,n,r;const i=[];let s=t.position.line,o=t.position.character;for(let a=0;a<t.lines.length;a++){const c=a===0,l=a===t.lines.length-1;let u=t.lines[a],f=0;if(c&&t.options.start){const p=(e=t.options.start)===null||e===void 0?void 0:e.exec(u);p&&(f=p.index+p[0].length)}else{const p=(n=t.options.line)===null||n===void 0?void 0:n.exec(u);p&&(f=p.index+p[0].length)}if(l){const p=(r=t.options.end)===null||r===void 0?void 0:r.exec(u);p&&(u=u.substring(0,p.index))}if(u=u.substring(0,tA(u)),Ef(u,f)>=u.length){if(i.length>0){const p=re.create(s,o);i.push({type:"break",content:"",range:Q.create(p,p)})}}else{Qp.lastIndex=f;const p=Qp.exec(u);if(p){const d=p[0],y=p[1],w=re.create(s,o+f),_=re.create(s,o+f+d.length);i.push({type:"tag",content:y,range:Q.create(w,_)}),f+=d.length,f=Ef(u,f)}if(f<u.length){const d=u.substring(f),y=Array.from(d.matchAll(X0));i.push(...Q0(y,d,s,o+f))}}s++,o=0}return i.length>0&&i[i.length-1].type==="break"?i.slice(0,-1):i}function Q0(t,e,n,r){const i=[];if(t.length===0){const s=re.create(n,r),o=re.create(n,r+e.length);i.push({type:"text",content:e,range:Q.create(s,o)})}else{let s=0;for(const a of t){const c=a.index,l=e.substring(s,c);l.length>0&&i.push({type:"text",content:e.substring(s,c),range:Q.create(re.create(n,s+r),re.create(n,c+r))});let u=l.length+1;const f=a[1];if(i.push({type:"inline-tag",content:f,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+f.length+r))}),u+=f.length,a.length===4){u+=a[2].length;const h=a[3];i.push({type:"text",content:h,range:Q.create(re.create(n,s+u+r),re.create(n,s+u+h.length+r))})}else i.push({type:"text",content:"",range:Q.create(re.create(n,s+u+r),re.create(n,s+u+r))});s=c+a[0].length}const o=e.substring(s);o.length>0&&i.push({type:"text",content:o,range:Q.create(re.create(n,s+r),re.create(n,s+r+o.length))})}return i}const Z0=/\S/,eA=/\s*$/;function Ef(t,e){const n=t.substring(e).match(Z0);return n?e+n.index:t.length}function tA(t){const e=t.match(eA);if(e&&typeof e.index=="number")return e.index}function nA(t){var e,n,r,i;const s=re.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Zp([],Q.create(s,s));const o=[];for(;t.index<t.tokens.length;){const l=rA(t,o[o.length-1]);l&&o.push(l)}const a=(n=(e=o[0])===null||e===void 0?void 0:e.range.start)!==null&&n!==void 0?n:s,c=(i=(r=o[o.length-1])===null||r===void 0?void 0:r.range.end)!==null&&i!==void 0?i:s;return new Zp(o,Q.create(a,c))}function rA(t,e){const n=t.tokens[t.index];if(n.type==="tag")return A_(t,!1);if(n.type==="text"||n.type==="inline-tag")return P_(t);iA(n,e),t.index++}function iA(t,e){if(e){const n=new I_("",t.range);"inlines"in e?e.inlines.push(n):e.content.inlines.push(n)}}function P_(t){let e=t.tokens[t.index];const n=e;let r=e;const i=[];for(;e&&e.type!=="break"&&e.type!=="tag";)i.push(sA(t)),r=e,e=t.tokens[t.index];return new Pf(i,Q.create(n.range.start,r.range.end))}function sA(t){return t.tokens[t.index].type==="inline-tag"?A_(t,!0):N_(t)}function A_(t,e){const n=t.tokens[t.index++],r=n.content.substring(1),i=t.tokens[t.index];if((i==null?void 0:i.type)==="text")if(e){const s=N_(t);return new du(r,new Pf([s],s.range),e,Q.create(n.range.start,s.range.end))}else{const s=P_(t);return new du(r,s,e,Q.create(n.range.start,s.range.end))}else{const s=n.range;return new du(r,new Pf([],s),e,s)}}function N_(t){const e=t.tokens[t.index++];return new I_(e.content,e.range)}function kh(t){if(!t)return kh({start:"/**",end:"*/",line:"*"});const{start:e,end:n,line:r}=t;return{start:uu(e,!0),end:uu(n,!1),line:uu(r,!0)}}function uu(t,e){if(typeof t=="string"||typeof t=="object"){const n=typeof t=="string"?el(t):t.source;return e?new RegExp(`^\\s*${n}`):new RegExp(`\\s*${n}\\s*$`)}else return t}class Zp{constructor(e,n){this.elements=e,this.range=n}getTag(e){return this.getAllTags().find(n=>n.name===e)}getTags(e){return this.getAllTags().filter(n=>n.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(const n of this.elements)if(e.length===0)e=n.toString();else{const r=n.toString();e+=em(e)+r}return e.trim()}toMarkdown(e){let n="";for(const r of this.elements)if(n.length===0)n=r.toMarkdown(e);else{const i=r.toMarkdown(e);n+=em(n)+i}return n.trim()}}class du{constructor(e,n,r,i){this.name=e,this.content=n,this.inline=r,this.range=i}toString(){let e=`@${this.name}`;const n=this.content.toString();return this.content.inlines.length===1?e=`${e} ${n}`:this.content.inlines.length>1&&(e=`${e}
${n}`),this.inline?`{${e}}`:e}toMarkdown(e){var n,r;return(r=(n=e==null?void 0:e.renderTag)===null||n===void 0?void 0:n.call(e,this))!==null&&r!==void 0?r:this.toMarkdownDefault(e)}toMarkdownDefault(e){const n=this.content.toMarkdown(e);if(this.inline){const s=oA(this.name,n,e??{});if(typeof s=="string")return s}let r="";(e==null?void 0:e.tag)==="italic"||(e==null?void 0:e.tag)===void 0?r="*":(e==null?void 0:e.tag)==="bold"?r="**":(e==null?void 0:e.tag)==="bold-italic"&&(r="***");let i=`${r}@${this.name}${r}`;return this.content.inlines.length===1?i=`${i} — ${n}`:this.content.inlines.length>1&&(i=`${i}
${n}`),this.inline?`{${i}}`:i}}function oA(t,e,n){var r,i;if(t==="linkplain"||t==="linkcode"||t==="link"){const s=e.indexOf(" ");let o=e;if(s>0){const c=Ef(e,s);o=e.substring(c),e=e.substring(0,s)}return(t==="linkcode"||t==="link"&&n.link==="code")&&(o=`\`${o}\``),(i=(r=n.renderLink)===null||r===void 0?void 0:r.call(n,e,o))!==null&&i!==void 0?i:aA(e,o)}}function aA(t,e){try{return it.parse(t,!0),`[${e}](${t})`}catch{return t}}class Pf{constructor(e,n){this.inlines=e,this.range=n}toString(){let e="";for(let n=0;n<this.inlines.length;n++){const r=this.inlines[n],i=this.inlines[n+1];e+=r.toString(),i&&i.range.start.line>r.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let n="";for(let r=0;r<this.inlines.length;r++){const i=this.inlines[r],s=this.inlines[r+1];n+=i.toMarkdown(e),s&&s.range.start.line>i.range.start.line&&(n+=`
`)}return n}}class I_{constructor(e,n){this.text=e,this.range=n}toString(){return this.text}toMarkdown(){return this.text}}function em(t){return t.endsWith(`
`)?`
`:`

`}class cA{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){const n=this.commentProvider.getComment(e);if(n&&$_(n))return C_(n).toMarkdown({renderLink:(i,s)=>this.documentationLinkRenderer(e,i,s),renderTag:i=>this.documentationTagRenderer(e,i)})}documentationLinkRenderer(e,n,r){var i;const s=(i=this.findNameInPrecomputedScopes(e,n))!==null&&i!==void 0?i:this.findNameInGlobalScope(e,n);if(s&&s.nameSegment){const o=s.nameSegment.range.start.line+1,a=s.nameSegment.range.start.character+1,c=s.documentUri.with({fragment:`L${o},${a}`});return`[${r}](${c.toString()})`}else return}documentationTagRenderer(e,n){}findNameInPrecomputedScopes(e,n){const i=tn(e).precomputedScopes;if(!i)return;let s=e;do{const a=i.get(s).find(c=>c.name===n);if(a)return a;s=s.$container}while(s)}findNameInGlobalScope(e,n){return this.indexManager.allElements().find(i=>i.name===n)}}class lA{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var n;return k_(e)?e.$comment:(n=py(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||n===void 0?void 0:n.text}}class uA{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e,n){return Promise.resolve(this.syncParser.parse(e))}}class dA{constructor(){this.previousTokenSource=new wh,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();const n=w0();return this.previousTokenSource=n,this.enqueue(this.writeQueue,e,n.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,n,r=ce.None){const i=new bh,s={action:n,deferred:i,cancellationToken:r};return e.push(s),this.performNextOperation(),i.promise}async performNextOperation(){if(!this.done)return;const e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:n,deferred:r,cancellationToken:i})=>{try{const s=await Promise.resolve().then(()=>n(i));r.resolve(s)}catch(s){xs(s)?r.resolve(void 0):r.reject(s)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}}class fA{constructor(e){this.grammarElementIdMap=new Vp,this.tokenTypeIdMap=new Vp,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport?this.dehydrateLexerReport(e.lexerReport):void 0,parserErrors:e.parserErrors.map(n=>Object.assign(Object.assign({},n),{message:n.message})),value:this.dehydrateAstNode(e.value,this.createDehyrationContext(e.value))}}dehydrateLexerReport(e){return e}createDehyrationContext(e){const n=new Map,r=new Map;for(const i of nr(e))n.set(i,{});if(e.$cstNode)for(const i of pc(e.$cstNode))r.set(i,{});return{astNodes:n,cstNodes:r}}dehydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(r.$cstNode=this.dehydrateCstNode(e.$cstNode,n));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Xe(a)?o.push(this.dehydrateAstNode(a,n)):Jt(a)?o.push(this.dehydrateReference(a,n)):o.push(a)}else Xe(s)?r[i]=this.dehydrateAstNode(s,n):Jt(s)?r[i]=this.dehydrateReference(s,n):s!==void 0&&(r[i]=s);return r}dehydrateReference(e,n){const r={};return r.$refText=e.$refText,e.$refNode&&(r.$refNode=n.cstNodes.get(e.$refNode)),r}dehydrateCstNode(e,n){const r=n.cstNodes.get(e);return dy(e)?r.fullText=e.fullText:r.grammarSource=this.getGrammarElementId(e.grammarSource),r.hidden=e.hidden,r.astNode=n.astNodes.get(e.astNode),ir(e)?r.content=e.content.map(i=>this.dehydrateCstNode(i,n)):_s(e)&&(r.tokenType=e.tokenType.name,r.offset=e.offset,r.length=e.length,r.startLine=e.range.start.line,r.startColumn=e.range.start.character,r.endLine=e.range.end.line,r.endColumn=e.range.end.character),r}hydrate(e){const n=e.value,r=this.createHydrationContext(n);return"$cstNode"in n&&this.hydrateCstNode(n.$cstNode,r),{lexerErrors:e.lexerErrors,lexerReport:e.lexerReport,parserErrors:e.parserErrors,value:this.hydrateAstNode(n,r)}}createHydrationContext(e){const n=new Map,r=new Map;for(const s of nr(e))n.set(s,{});let i;if(e.$cstNode)for(const s of pc(e.$cstNode)){let o;"fullText"in s?(o=new o_(s.fullText),i=o):"content"in s?o=new Th:"tokenType"in s&&(o=this.hydrateCstLeafNode(s)),o&&(r.set(s,o),o.root=i)}return{astNodes:n,cstNodes:r}}hydrateAstNode(e,n){const r=n.astNodes.get(e);r.$type=e.$type,r.$containerIndex=e.$containerIndex,r.$containerProperty=e.$containerProperty,e.$cstNode&&(r.$cstNode=n.cstNodes.get(e.$cstNode));for(const[i,s]of Object.entries(e))if(!i.startsWith("$"))if(Array.isArray(s)){const o=[];r[i]=o;for(const a of s)Xe(a)?o.push(this.setParent(this.hydrateAstNode(a,n),r)):Jt(a)?o.push(this.hydrateReference(a,r,i,n)):o.push(a)}else Xe(s)?r[i]=this.setParent(this.hydrateAstNode(s,n),r):Jt(s)?r[i]=this.hydrateReference(s,r,i,n):s!==void 0&&(r[i]=s);return r}setParent(e,n){return e.$container=n,e}hydrateReference(e,n,r,i){return this.linker.buildReference(n,r,i.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,n,r=0){const i=n.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(i.grammarSource=this.getGrammarElement(e.grammarSource)),i.astNode=n.astNodes.get(e.astNode),ir(i))for(const s of e.content){const o=this.hydrateCstNode(s,n,r++);i.content.push(o)}return i}hydrateCstLeafNode(e){const n=this.getTokenType(e.tokenType),r=e.offset,i=e.length,s=e.startLine,o=e.startColumn,a=e.endLine,c=e.endColumn,l=e.hidden;return new Rf(r,i,{start:{line:s,character:o},end:{line:a,character:c}},n,l)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){if(e)return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.get(e)}getGrammarElement(e){return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),this.grammarElementIdMap.getKey(e)}createGrammarElementIdMap(){let e=0;for(const n of nr(this.grammar))vy(n)&&this.grammarElementIdMap.set(n,e++)}}function D_(t){return{documentation:{CommentProvider:e=>new lA(e),DocumentationProvider:e=>new cA(e)},parser:{AsyncParser:e=>new uA(e),GrammarConfig:e=>hR(e),LangiumParser:e=>i0(e),CompletionParser:e=>r0(e),ValueConverter:()=>new a0,TokenBuilder:()=>new o0,Lexer:e=>new V0(e),ParserErrorMessageProvider:()=>new l_,LexerErrorMessageProvider:()=>new G0},workspace:{AstNodeLocator:()=>new q0,AstNodeDescriptionProvider:e=>new H0(e),ReferenceDescriptionProvider:e=>new j0(e)},references:{Linker:e=>new T_(e),NameProvider:()=>new C0,ScopeProvider:e=>new b_(e),ScopeComputation:e=>new E0(e),References:e=>new $0(e)},serializer:{Hydrator:e=>new fA(e),JsonSerializer:e=>new D0(e)},validation:{DocumentValidator:e=>new L0(e),ValidationRegistry:e=>new x0(e)},shared:()=>t.shared}}function O_(t){return{ServiceRegistry:e=>new O0(e),workspace:{LangiumDocuments:e=>new S0(e),LangiumDocumentFactory:e=>new k0(e),DocumentBuilder:e=>new B0(e),IndexManager:e=>new K0(e),WorkspaceManager:e=>new W0(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new dA,ConfigurationProvider:e=>new U0(e)}}}var Uc;(function(t){t.merge=(e,n)=>Kc(Kc({},e),n)})(Uc||(Uc={}));function Bc(t,e,n,r,i,s,o,a,c){const l=[t,e,n,r,i,s,o,a,c].reduce(Kc,{});return L_(l)}const x_=Symbol("isProxy");function Af(t){if(t&&t[x_])for(const e of Object.values(t))Af(e);return t}function L_(t,e){const n=new Proxy({},{deleteProperty:()=>!1,set:()=>{throw new Error("Cannot set property on injected service container")},get:(r,i)=>i===x_?!0:nm(r,i,t,e||n),getOwnPropertyDescriptor:(r,i)=>(nm(r,i,t,e||n),Object.getOwnPropertyDescriptor(r,i)),has:(r,i)=>i in t,ownKeys:()=>[...Object.getOwnPropertyNames(t)]});return n}const tm=Symbol();function nm(t,e,n,r){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===tm)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in n){const i=n[e];t[e]=tm;try{t[e]=typeof i=="function"?i(r):L_(i,r)}catch(s){throw t[e]=s instanceof Error?s:void 0,s}return t[e]}else return}function Kc(t,e){if(e){for(const[n,r]of Object.entries(e))if(r!==void 0){const i=t[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"?t[n]=Kc(i,r):t[n]=r}}return t}class hA{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}}const M_={fileSystemProvider:()=>new hA},pA={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},mA={AstReflection:()=>new wy};function gA(){const t=Bc(O_(M_),mA),e=Bc(D_({shared:t}),pA);return t.ServiceRegistry.register(e),e}function yA(t){var e;const n=gA(),r=n.serializer.JsonSerializer.deserialize(t);return n.shared.workspace.LangiumDocumentFactory.fromModel(r,it.parse(`memory://${(e=r.name)!==null&&e!==void 0?e:"grammar"}.langium`)),r}var L={},Nf={},vn={},oe={},yr={},Sh={},fu={},j={},rm;function F_(){if(rm)return j;rm=1,Object.defineProperty(j,"__esModule",{value:!0}),j.Message=j.NotificationType9=j.NotificationType8=j.NotificationType7=j.NotificationType6=j.NotificationType5=j.NotificationType4=j.NotificationType3=j.NotificationType2=j.NotificationType1=j.NotificationType0=j.NotificationType=j.RequestType9=j.RequestType8=j.RequestType7=j.RequestType6=j.RequestType5=j.RequestType4=j.RequestType3=j.RequestType2=j.RequestType1=j.RequestType=j.RequestType0=j.AbstractMessageSignature=j.ParameterStructures=j.ResponseError=j.ErrorCodes=void 0;const t=Me;var e;(function(S){S.ParseError=-32700,S.InvalidRequest=-32600,S.MethodNotFound=-32601,S.InvalidParams=-32602,S.InternalError=-32603,S.jsonrpcReservedErrorRangeStart=-32099,S.serverErrorStart=-32099,S.MessageWriteError=-32099,S.MessageReadError=-32098,S.PendingResponseRejected=-32097,S.ConnectionInactive=-32096,S.ServerNotInitialized=-32002,S.UnknownErrorCode=-32001,S.jsonrpcReservedErrorRangeEnd=-32e3,S.serverErrorEnd=-32e3})(e||(j.ErrorCodes=e={}));class n extends Error{constructor(R,C,I){super(C),this.code=t.number(R)?R:e.UnknownErrorCode,this.data=I,Object.setPrototypeOf(this,n.prototype)}toJson(){const R={code:this.code,message:this.message};return this.data!==void 0&&(R.data=this.data),R}}j.ResponseError=n;class r{constructor(R){this.kind=R}static is(R){return R===r.auto||R===r.byName||R===r.byPosition}toString(){return this.kind}}j.ParameterStructures=r,r.auto=new r("auto"),r.byPosition=new r("byPosition"),r.byName=new r("byName");class i{constructor(R,C){this.method=R,this.numberOfParams=C}get parameterStructures(){return r.auto}}j.AbstractMessageSignature=i;class s extends i{constructor(R){super(R,0)}}j.RequestType0=s;class o extends i{constructor(R,C=r.auto){super(R,1),this._parameterStructures=C}get parameterStructures(){return this._parameterStructures}}j.RequestType=o;class a extends i{constructor(R,C=r.auto){super(R,1),this._parameterStructures=C}get parameterStructures(){return this._parameterStructures}}j.RequestType1=a;class c extends i{constructor(R){super(R,2)}}j.RequestType2=c;class l extends i{constructor(R){super(R,3)}}j.RequestType3=l;class u extends i{constructor(R){super(R,4)}}j.RequestType4=u;class f extends i{constructor(R){super(R,5)}}j.RequestType5=f;class h extends i{constructor(R){super(R,6)}}j.RequestType6=h;class p extends i{constructor(R){super(R,7)}}j.RequestType7=p;class d extends i{constructor(R){super(R,8)}}j.RequestType8=d;class y extends i{constructor(R){super(R,9)}}j.RequestType9=y;class w extends i{constructor(R,C=r.auto){super(R,1),this._parameterStructures=C}get parameterStructures(){return this._parameterStructures}}j.NotificationType=w;class _ extends i{constructor(R){super(R,0)}}j.NotificationType0=_;class m extends i{constructor(R,C=r.auto){super(R,1),this._parameterStructures=C}get parameterStructures(){return this._parameterStructures}}j.NotificationType1=m;class g extends i{constructor(R){super(R,2)}}j.NotificationType2=g;class b extends i{constructor(R){super(R,3)}}j.NotificationType3=b;class F extends i{constructor(R){super(R,4)}}j.NotificationType4=F;class W extends i{constructor(R){super(R,5)}}j.NotificationType5=W;class X extends i{constructor(R){super(R,6)}}j.NotificationType6=X;class ye extends i{constructor(R){super(R,7)}}j.NotificationType7=ye;class Te extends i{constructor(R){super(R,8)}}j.NotificationType8=Te;class Re extends i{constructor(R){super(R,9)}}j.NotificationType9=Re;var A;return function(S){function R(P){const N=P;return N&&t.string(N.method)&&(t.string(N.id)||t.number(N.id))}S.isRequest=R;function C(P){const N=P;return N&&t.string(N.method)&&P.id===void 0}S.isNotification=C;function I(P){const N=P;return N&&(N.result!==void 0||!!N.error)&&(t.string(N.id)||t.number(N.id)||N.id===null)}S.isResponse=I}(A||(j.Message=A={})),j}var un={},im;function H_(){if(im)return un;im=1;var t;Object.defineProperty(un,"__esModule",{value:!0}),un.LRUCache=un.LinkedMap=un.Touch=void 0;var e;(function(i){i.None=0,i.First=1,i.AsOld=i.First,i.Last=2,i.AsNew=i.Last})(e||(un.Touch=e={}));class n{constructor(){this[t]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){var s;return(s=this._head)==null?void 0:s.value}get last(){var s;return(s=this._tail)==null?void 0:s.value}has(s){return this._map.has(s)}get(s,o=e.None){const a=this._map.get(s);if(a)return o!==e.None&&this.touch(a,o),a.value}set(s,o,a=e.None){let c=this._map.get(s);if(c)c.value=o,a!==e.None&&this.touch(c,a);else{switch(c={key:s,value:o,next:void 0,previous:void 0},a){case e.None:this.addItemLast(c);break;case e.First:this.addItemFirst(c);break;case e.Last:this.addItemLast(c);break;default:this.addItemLast(c);break}this._map.set(s,c),this._size++}return this}delete(s){return!!this.remove(s)}remove(s){const o=this._map.get(s);if(o)return this._map.delete(s),this.removeItem(o),this._size--,o.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");const s=this._head;return this._map.delete(s.key),this.removeItem(s),this._size--,s.value}forEach(s,o){const a=this._state;let c=this._head;for(;c;){if(o?s.bind(o)(c.value,c.key,this):s(c.value,c.key,this),this._state!==a)throw new Error("LinkedMap got modified during iteration.");c=c.next}}keys(){const s=this._state;let o=this._head;const a={[Symbol.iterator]:()=>a,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(o){const c={value:o.key,done:!1};return o=o.next,c}else return{value:void 0,done:!0}}};return a}values(){const s=this._state;let o=this._head;const a={[Symbol.iterator]:()=>a,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(o){const c={value:o.value,done:!1};return o=o.next,c}else return{value:void 0,done:!0}}};return a}entries(){const s=this._state;let o=this._head;const a={[Symbol.iterator]:()=>a,next:()=>{if(this._state!==s)throw new Error("LinkedMap got modified during iteration.");if(o){const c={value:[o.key,o.value],done:!1};return o=o.next,c}else return{value:void 0,done:!0}}};return a}[(t=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(s){if(s>=this.size)return;if(s===0){this.clear();return}let o=this._head,a=this.size;for(;o&&a>s;)this._map.delete(o.key),o=o.next,a--;this._head=o,this._size=a,o&&(o.previous=void 0),this._state++}addItemFirst(s){if(!this._head&&!this._tail)this._tail=s;else if(this._head)s.next=this._head,this._head.previous=s;else throw new Error("Invalid list");this._head=s,this._state++}addItemLast(s){if(!this._head&&!this._tail)this._head=s;else if(this._tail)s.previous=this._tail,this._tail.next=s;else throw new Error("Invalid list");this._tail=s,this._state++}removeItem(s){if(s===this._head&&s===this._tail)this._head=void 0,this._tail=void 0;else if(s===this._head){if(!s.next)throw new Error("Invalid list");s.next.previous=void 0,this._head=s.next}else if(s===this._tail){if(!s.previous)throw new Error("Invalid list");s.previous.next=void 0,this._tail=s.previous}else{const o=s.next,a=s.previous;if(!o||!a)throw new Error("Invalid list");o.previous=a,a.next=o}s.next=void 0,s.previous=void 0,this._state++}touch(s,o){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(o!==e.First&&o!==e.Last)){if(o===e.First){if(s===this._head)return;const a=s.next,c=s.previous;s===this._tail?(c.next=void 0,this._tail=c):(a.previous=c,c.next=a),s.previous=void 0,s.next=this._head,this._head.previous=s,this._head=s,this._state++}else if(o===e.Last){if(s===this._tail)return;const a=s.next,c=s.previous;s===this._head?(a.previous=void 0,this._head=a):(a.previous=c,c.next=a),s.next=void 0,s.previous=this._tail,this._tail.next=s,this._tail=s,this._state++}}}toJSON(){const s=[];return this.forEach((o,a)=>{s.push([a,o])}),s}fromJSON(s){this.clear();for(const[o,a]of s)this.set(o,a)}}un.LinkedMap=n;class r extends n{constructor(s,o=1){super(),this._limit=s,this._ratio=Math.min(Math.max(0,o),1)}get limit(){return this._limit}set limit(s){this._limit=s,this.checkTrim()}get ratio(){return this._ratio}set ratio(s){this._ratio=Math.min(Math.max(0,s),1),this.checkTrim()}get(s,o=e.AsNew){return super.get(s,o)}peek(s){return super.get(s,e.None)}set(s,o){return super.set(s,o,e.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}}return un.LRUCache=r,un}var pi={},sm;function vA(){if(sm)return pi;sm=1,Object.defineProperty(pi,"__esModule",{value:!0}),pi.Disposable=void 0;var t;return function(e){function n(r){return{dispose:r}}e.create=n}(t||(pi.Disposable=t={})),pi}var Qn={},om;function _A(){if(om)return Qn;om=1,Object.defineProperty(Qn,"__esModule",{value:!0}),Qn.SharedArrayReceiverStrategy=Qn.SharedArraySenderStrategy=void 0;const t=Wn;var e;(function(o){o.Continue=0,o.Cancelled=1})(e||(e={}));class n{constructor(){this.buffers=new Map}enableCancellation(a){if(a.id===null)return;const c=new SharedArrayBuffer(4),l=new Int32Array(c,0,1);l[0]=e.Continue,this.buffers.set(a.id,c),a.$cancellationData=c}async sendCancellation(a,c){const l=this.buffers.get(c);if(l===void 0)return;const u=new Int32Array(l,0,1);Atomics.store(u,0,e.Cancelled)}cleanup(a){this.buffers.delete(a)}dispose(){this.buffers.clear()}}Qn.SharedArraySenderStrategy=n;class r{constructor(a){this.data=new Int32Array(a,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===e.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}}class i{constructor(a){this.token=new r(a)}cancel(){}dispose(){}}class s{constructor(){this.kind="request"}createCancellationTokenSource(a){const c=a.$cancellationData;return c===void 0?new t.CancellationTokenSource:new i(c)}}return Qn.SharedArrayReceiverStrategy=s,Qn}var dn={},mi={},am;function j_(){if(am)return mi;am=1,Object.defineProperty(mi,"__esModule",{value:!0}),mi.Semaphore=void 0;const t=Pn;class e{constructor(r=1){if(r<=0)throw new Error("Capacity must be greater than 0");this._capacity=r,this._active=0,this._waiting=[]}lock(r){return new Promise((i,s)=>{this._waiting.push({thunk:r,resolve:i,reject:s}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,t.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;const r=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{const i=r.thunk();i instanceof Promise?i.then(s=>{this._active--,r.resolve(s),this.runNext()},s=>{this._active--,r.reject(s),this.runNext()}):(this._active--,r.resolve(i),this.runNext())}catch(i){this._active--,r.reject(i),this.runNext()}}}return mi.Semaphore=e,mi}var cm;function TA(){if(cm)return dn;cm=1,Object.defineProperty(dn,"__esModule",{value:!0}),dn.ReadableStreamMessageReader=dn.AbstractMessageReader=dn.MessageReader=void 0;const t=Pn,e=Me,n=nn,r=j_();var i;(function(c){function l(u){let f=u;return f&&e.func(f.listen)&&e.func(f.dispose)&&e.func(f.onError)&&e.func(f.onClose)&&e.func(f.onPartialMessage)}c.is=l})(i||(dn.MessageReader=i={}));class s{constructor(){this.errorEmitter=new n.Emitter,this.closeEmitter=new n.Emitter,this.partialMessageEmitter=new n.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(l){this.errorEmitter.fire(this.asError(l))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(l){this.partialMessageEmitter.fire(l)}asError(l){return l instanceof Error?l:new Error(`Reader received error. Reason: ${e.string(l.message)?l.message:"unknown"}`)}}dn.AbstractMessageReader=s;var o;(function(c){function l(u){let f,h;const p=new Map;let d;const y=new Map;if(u===void 0||typeof u=="string")f=u??"utf-8";else{if(f=u.charset??"utf-8",u.contentDecoder!==void 0&&(h=u.contentDecoder,p.set(h.name,h)),u.contentDecoders!==void 0)for(const w of u.contentDecoders)p.set(w.name,w);if(u.contentTypeDecoder!==void 0&&(d=u.contentTypeDecoder,y.set(d.name,d)),u.contentTypeDecoders!==void 0)for(const w of u.contentTypeDecoders)y.set(w.name,w)}return d===void 0&&(d=(0,t.default)().applicationJson.decoder,y.set(d.name,d)),{charset:f,contentDecoder:h,contentDecoders:p,contentTypeDecoder:d,contentTypeDecoders:y}}c.fromOptions=l})(o||(o={}));class a extends s{constructor(l,u){super(),this.readable=l,this.options=o.fromOptions(u),this.buffer=(0,t.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new r.Semaphore(1)}set partialMessageTimeout(l){this._partialMessageTimeout=l}get partialMessageTimeout(){return this._partialMessageTimeout}listen(l){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=l;const u=this.readable.onData(f=>{this.onData(f)});return this.readable.onError(f=>this.fireError(f)),this.readable.onClose(()=>this.fireClose()),u}onData(l){try{for(this.buffer.append(l);;){if(this.nextMessageLength===-1){const f=this.buffer.tryReadHeaders(!0);if(!f)return;const h=f.get("content-length");if(!h){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(f))}`));return}const p=parseInt(h);if(isNaN(p)){this.fireError(new Error(`Content-Length value must be a number. Got ${h}`));return}this.nextMessageLength=p}const u=this.buffer.tryReadBody(this.nextMessageLength);if(u===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{const f=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(u):u,h=await this.options.contentTypeDecoder.decode(f,this.options);this.callback(h)}).catch(f=>{this.fireError(f)})}}catch(u){this.fireError(u)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,t.default)().timer.setTimeout((l,u)=>{this.partialMessageTimer=void 0,l===this.messageToken&&(this.firePartialMessage({messageToken:l,waitingTime:u}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}}return dn.ReadableStreamMessageReader=a,dn}var fn={},lm;function RA(){if(lm)return fn;lm=1,Object.defineProperty(fn,"__esModule",{value:!0}),fn.WriteableStreamMessageWriter=fn.AbstractMessageWriter=fn.MessageWriter=void 0;const t=Pn,e=Me,n=j_(),r=nn,i="Content-Length: ",s=`\r
`;var o;(function(u){function f(h){let p=h;return p&&e.func(p.dispose)&&e.func(p.onClose)&&e.func(p.onError)&&e.func(p.write)}u.is=f})(o||(fn.MessageWriter=o={}));class a{constructor(){this.errorEmitter=new r.Emitter,this.closeEmitter=new r.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(f,h,p){this.errorEmitter.fire([this.asError(f),h,p])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(f){return f instanceof Error?f:new Error(`Writer received error. Reason: ${e.string(f.message)?f.message:"unknown"}`)}}fn.AbstractMessageWriter=a;var c;(function(u){function f(h){return h===void 0||typeof h=="string"?{charset:h??"utf-8",contentTypeEncoder:(0,t.default)().applicationJson.encoder}:{charset:h.charset??"utf-8",contentEncoder:h.contentEncoder,contentTypeEncoder:h.contentTypeEncoder??(0,t.default)().applicationJson.encoder}}u.fromOptions=f})(c||(c={}));class l extends a{constructor(f,h){super(),this.writable=f,this.options=c.fromOptions(h),this.errorCount=0,this.writeSemaphore=new n.Semaphore(1),this.writable.onError(p=>this.fireError(p)),this.writable.onClose(()=>this.fireClose())}async write(f){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(f,this.options).then(p=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(p):p).then(p=>{const d=[];return d.push(i,p.byteLength.toString(),s),d.push(s),this.doWrite(f,d,p)},p=>{throw this.fireError(p),p}))}async doWrite(f,h,p){try{return await this.writable.write(h.join(""),"ascii"),this.writable.write(p)}catch(d){return this.handleError(d,f),Promise.reject(d)}}handleError(f,h){this.errorCount++,this.fireError(f,h,this.errorCount)}end(){this.writable.end()}}return fn.WriteableStreamMessageWriter=l,fn}var gi={},um;function wA(){if(um)return gi;um=1,Object.defineProperty(gi,"__esModule",{value:!0}),gi.AbstractMessageBuffer=void 0;const t=13,e=10,n=`\r
`;class r{constructor(s="utf-8"){this._encoding=s,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(s){const o=typeof s=="string"?this.fromString(s,this._encoding):s;this._chunks.push(o),this._totalLength+=o.byteLength}tryReadHeaders(s=!1){if(this._chunks.length===0)return;let o=0,a=0,c=0,l=0;e:for(;a<this._chunks.length;){const p=this._chunks[a];for(c=0;c<p.length;){switch(p[c]){case t:switch(o){case 0:o=1;break;case 2:o=3;break;default:o=0}break;case e:switch(o){case 1:o=2;break;case 3:o=4,c++;break e;default:o=0}break;default:o=0}c++}l+=p.byteLength,a++}if(o!==4)return;const u=this._read(l+c),f=new Map,h=this.toString(u,"ascii").split(n);if(h.length<2)return f;for(let p=0;p<h.length-2;p++){const d=h[p],y=d.indexOf(":");if(y===-1)throw new Error(`Message header must separate key and value using ':'
${d}`);const w=d.substr(0,y),_=d.substr(y+1).trim();f.set(s?w.toLowerCase():w,_)}return f}tryReadBody(s){if(!(this._totalLength<s))return this._read(s)}get numberOfBytes(){return this._totalLength}_read(s){if(s===0)return this.emptyBuffer();if(s>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===s){const l=this._chunks[0];return this._chunks.shift(),this._totalLength-=s,this.asNative(l)}if(this._chunks[0].byteLength>s){const l=this._chunks[0],u=this.asNative(l,s);return this._chunks[0]=l.slice(s),this._totalLength-=s,u}const o=this.allocNative(s);let a=0,c=0;for(;s>0;){const l=this._chunks[c];if(l.byteLength>s){const u=l.slice(0,s);o.set(u,a),a+=s,this._chunks[c]=l.slice(s),this._totalLength-=s,s-=s}else o.set(l,a),a+=l.byteLength,this._chunks.shift(),this._totalLength-=l.byteLength,s-=l.byteLength}return o}}return gi.AbstractMessageBuffer=r,gi}var hu={},dm;function bA(){return dm||(dm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.ConnectionOptions=t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.RequestCancellationReceiverStrategy=t.IdCancellationReceiverStrategy=t.ConnectionStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=t.NullLogger=t.ProgressType=t.ProgressToken=void 0;const e=Pn,n=Me,r=F_(),i=H_(),s=nn,o=Wn;var a;(function(R){R.type=new r.NotificationType("$/cancelRequest")})(a||(a={}));var c;(function(R){function C(I){return typeof I=="string"||typeof I=="number"}R.is=C})(c||(t.ProgressToken=c={}));var l;(function(R){R.type=new r.NotificationType("$/progress")})(l||(l={}));class u{constructor(){}}t.ProgressType=u;var f;(function(R){function C(I){return n.func(I)}R.is=C})(f||(f={})),t.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var h;(function(R){R[R.Off=0]="Off",R[R.Messages=1]="Messages",R[R.Compact=2]="Compact",R[R.Verbose=3]="Verbose"})(h||(t.Trace=h={}));var p;(function(R){R.Off="off",R.Messages="messages",R.Compact="compact",R.Verbose="verbose"})(p||(t.TraceValues=p={})),function(R){function C(P){if(!n.string(P))return R.Off;switch(P=P.toLowerCase(),P){case"off":return R.Off;case"messages":return R.Messages;case"compact":return R.Compact;case"verbose":return R.Verbose;default:return R.Off}}R.fromString=C;function I(P){switch(P){case R.Off:return"off";case R.Messages:return"messages";case R.Compact:return"compact";case R.Verbose:return"verbose";default:return"off"}}R.toString=I}(h||(t.Trace=h={}));var d;(function(R){R.Text="text",R.JSON="json"})(d||(t.TraceFormat=d={})),function(R){function C(I){return n.string(I)?(I=I.toLowerCase(),I==="json"?R.JSON:R.Text):R.Text}R.fromString=C}(d||(t.TraceFormat=d={}));var y;(function(R){R.type=new r.NotificationType("$/setTrace")})(y||(t.SetTraceNotification=y={}));var w;(function(R){R.type=new r.NotificationType("$/logTrace")})(w||(t.LogTraceNotification=w={}));var _;(function(R){R[R.Closed=1]="Closed",R[R.Disposed=2]="Disposed",R[R.AlreadyListening=3]="AlreadyListening"})(_||(t.ConnectionErrors=_={}));class m extends Error{constructor(C,I){super(I),this.code=C,Object.setPrototypeOf(this,m.prototype)}}t.ConnectionError=m;var g;(function(R){function C(I){const P=I;return P&&n.func(P.cancelUndispatched)}R.is=C})(g||(t.ConnectionStrategy=g={}));var b;(function(R){function C(I){const P=I;return P&&(P.kind===void 0||P.kind==="id")&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}R.is=C})(b||(t.IdCancellationReceiverStrategy=b={}));var F;(function(R){function C(I){const P=I;return P&&P.kind==="request"&&n.func(P.createCancellationTokenSource)&&(P.dispose===void 0||n.func(P.dispose))}R.is=C})(F||(t.RequestCancellationReceiverStrategy=F={}));var W;(function(R){R.Message=Object.freeze({createCancellationTokenSource(I){return new o.CancellationTokenSource}});function C(I){return b.is(I)||F.is(I)}R.is=C})(W||(t.CancellationReceiverStrategy=W={}));var X;(function(R){R.Message=Object.freeze({sendCancellation(I,P){return I.sendNotification(a.type,{id:P})},cleanup(I){}});function C(I){const P=I;return P&&n.func(P.sendCancellation)&&n.func(P.cleanup)}R.is=C})(X||(t.CancellationSenderStrategy=X={}));var ye;(function(R){R.Message=Object.freeze({receiver:W.Message,sender:X.Message});function C(I){const P=I;return P&&W.is(P.receiver)&&X.is(P.sender)}R.is=C})(ye||(t.CancellationStrategy=ye={}));var Te;(function(R){function C(I){const P=I;return P&&n.func(P.handleMessage)}R.is=C})(Te||(t.MessageStrategy=Te={}));var Re;(function(R){function C(I){const P=I;return P&&(ye.is(P.cancellationStrategy)||g.is(P.connectionStrategy)||Te.is(P.messageStrategy))}R.is=C})(Re||(t.ConnectionOptions=Re={}));var A;(function(R){R[R.New=1]="New",R[R.Listening=2]="Listening",R[R.Closed=3]="Closed",R[R.Disposed=4]="Disposed"})(A||(A={}));function S(R,C,I,P){const N=I!==void 0?I:t.NullLogger;let Fe=0,x=0,$=0;const te="2.0";let Wt;const Gt=new Map;let xe;const zt=new Map,ve=new Map;let He,We=new i.LinkedMap,_e=new Map,Ge=new Set,Pe=new Map,V=h.Off,Be=d.Text,ue,lt=A.New;const vr=new s.Emitter,Zr=new s.Emitter,ei=new s.Emitter,ti=new s.Emitter,ni=new s.Emitter,xt=P&&P.cancellationStrategy?P.cancellationStrategy:ye.Message;function ri(T){if(T===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+T.toString()}function Ms(T){return T===null?"res-unknown-"+(++$).toString():"res-"+T.toString()}function Fs(){return"not-"+(++x).toString()}function Hs(T,E){r.Message.isRequest(E)?T.set(ri(E.id),E):r.Message.isResponse(E)?T.set(Ms(E.id),E):T.set(Fs(),E)}function js(T){}function ii(){return lt===A.Listening}function si(){return lt===A.Closed}function cn(){return lt===A.Disposed}function oi(){(lt===A.New||lt===A.Listening)&&(lt=A.Closed,Zr.fire(void 0))}function qs(T){vr.fire([T,void 0,void 0])}function Us(T){vr.fire(T)}R.onClose(oi),R.onError(qs),C.onClose(oi),C.onError(Us);function ai(){He||We.size===0||(He=(0,e.default)().timer.setImmediate(()=>{He=void 0,Bs()}))}function ci(T){r.Message.isRequest(T)?Ws(T):r.Message.isNotification(T)?zs(T):r.Message.isResponse(T)?Gs(T):Vs(T)}function Bs(){if(We.size===0)return;const T=We.shift();try{const E=P==null?void 0:P.messageStrategy;Te.is(E)?E.handleMessage(T,ci):ci(T)}finally{ai()}}const Ks=T=>{try{if(r.Message.isNotification(T)&&T.method===a.type.method){const E=T.params.id,D=ri(E),H=We.get(D);if(r.Message.isRequest(H)){const ae=P==null?void 0:P.connectionStrategy,de=ae&&ae.cancelUndispatched?ae.cancelUndispatched(H,js):void 0;if(de&&(de.error!==void 0||de.result!==void 0)){We.delete(D),Pe.delete(E),de.id=H.id,Jn(de,T.method,Date.now()),C.write(de).catch(()=>N.error("Sending response for canceled message failed."));return}}const pe=Pe.get(E);if(pe!==void 0){pe.cancel(),_r(T);return}else Ge.add(E)}Hs(We,T)}finally{ai()}};function Ws(T){if(cn())return;function E(Z,we,se){const je={jsonrpc:te,id:T.id};Z instanceof r.ResponseError?je.error=Z.toJson():je.result=Z===void 0?null:Z,Jn(je,we,se),C.write(je).catch(()=>N.error("Sending response failed."))}function D(Z,we,se){const je={jsonrpc:te,id:T.id,error:Z.toJson()};Jn(je,we,se),C.write(je).catch(()=>N.error("Sending response failed."))}function H(Z,we,se){Z===void 0&&(Z=null);const je={jsonrpc:te,id:T.id,result:Z};Jn(je,we,se),C.write(je).catch(()=>N.error("Sending response failed."))}Js(T);const pe=Gt.get(T.method);let ae,de;pe&&(ae=pe.type,de=pe.handler);const Ie=Date.now();if(de||Wt){const Z=T.id??String(Date.now()),we=b.is(xt.receiver)?xt.receiver.createCancellationTokenSource(Z):xt.receiver.createCancellationTokenSource(T);T.id!==null&&Ge.has(T.id)&&we.cancel(),T.id!==null&&Pe.set(Z,we);try{let se;if(de)if(T.params===void 0){if(ae!==void 0&&ae.numberOfParams!==0){D(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines ${ae.numberOfParams} params but received none.`),T.method,Ie);return}se=de(we.token)}else if(Array.isArray(T.params)){if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byName){D(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by name but received parameters by position`),T.method,Ie);return}se=de(...T.params,we.token)}else{if(ae!==void 0&&ae.parameterStructures===r.ParameterStructures.byPosition){D(new r.ResponseError(r.ErrorCodes.InvalidParams,`Request ${T.method} defines parameters by position but received parameters by name`),T.method,Ie);return}se=de(T.params,we.token)}else Wt&&(se=Wt(T.method,T.params,we.token));const je=se;se?je.then?je.then(nt=>{Pe.delete(Z),E(nt,T.method,Ie)},nt=>{Pe.delete(Z),nt instanceof r.ResponseError?D(nt,T.method,Ie):nt&&n.string(nt.message)?D(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${nt.message}`),T.method,Ie):D(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,Ie)}):(Pe.delete(Z),E(se,T.method,Ie)):(Pe.delete(Z),H(se,T.method,Ie))}catch(se){Pe.delete(Z),se instanceof r.ResponseError?E(se,T.method,Ie):se&&n.string(se.message)?D(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed with message: ${se.message}`),T.method,Ie):D(new r.ResponseError(r.ErrorCodes.InternalError,`Request ${T.method} failed unexpectedly without providing any details.`),T.method,Ie)}}else D(new r.ResponseError(r.ErrorCodes.MethodNotFound,`Unhandled method ${T.method}`),T.method,Ie)}function Gs(T){if(!cn())if(T.id===null)T.error?N.error(`Received response message without id: Error is: 
${JSON.stringify(T.error,void 0,4)}`):N.error("Received response message without id. No further error information provided.");else{const E=T.id,D=_e.get(E);if(Qs(T,D),D!==void 0){_e.delete(E);try{if(T.error){const H=T.error;D.reject(new r.ResponseError(H.code,H.message,H.data))}else if(T.result!==void 0)D.resolve(T.result);else throw new Error("Should never happen.")}catch(H){H.message?N.error(`Response handler '${D.method}' failed with message: ${H.message}`):N.error(`Response handler '${D.method}' failed unexpectedly.`)}}}}function zs(T){if(cn())return;let E,D;if(T.method===a.type.method){const H=T.params.id;Ge.delete(H),_r(T);return}else{const H=zt.get(T.method);H&&(D=H.handler,E=H.type)}if(D||xe)try{if(_r(T),D)if(T.params===void 0)E!==void 0&&E.numberOfParams!==0&&E.parameterStructures!==r.ParameterStructures.byName&&N.error(`Notification ${T.method} defines ${E.numberOfParams} params but received none.`),D();else if(Array.isArray(T.params)){const H=T.params;T.method===l.type.method&&H.length===2&&c.is(H[0])?D({token:H[0],value:H[1]}):(E!==void 0&&(E.parameterStructures===r.ParameterStructures.byName&&N.error(`Notification ${T.method} defines parameters by name but received parameters by position`),E.numberOfParams!==T.params.length&&N.error(`Notification ${T.method} defines ${E.numberOfParams} params but received ${H.length} arguments`)),D(...H))}else E!==void 0&&E.parameterStructures===r.ParameterStructures.byPosition&&N.error(`Notification ${T.method} defines parameters by position but received parameters by name`),D(T.params);else xe&&xe(T.method,T.params)}catch(H){H.message?N.error(`Notification handler '${T.method}' failed with message: ${H.message}`):N.error(`Notification handler '${T.method}' failed unexpectedly.`)}else ei.fire(T)}function Vs(T){if(!T){N.error("Received empty message.");return}N.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(T,null,4)}`);const E=T;if(n.string(E.id)||n.number(E.id)){const D=E.id,H=_e.get(D);H&&H.reject(new Error("The received response has neither a result nor an error property."))}}function Lt(T){if(T!=null)switch(V){case h.Verbose:return JSON.stringify(T,null,4);case h.Compact:return JSON.stringify(T);default:return}}function Ys(T){if(!(V===h.Off||!ue))if(Be===d.Text){let E;(V===h.Verbose||V===h.Compact)&&T.params&&(E=`Params: ${Lt(T.params)}

`),ue.log(`Sending request '${T.method} - (${T.id})'.`,E)}else ln("send-request",T)}function Xs(T){if(!(V===h.Off||!ue))if(Be===d.Text){let E;(V===h.Verbose||V===h.Compact)&&(T.params?E=`Params: ${Lt(T.params)}

`:E=`No parameters provided.

`),ue.log(`Sending notification '${T.method}'.`,E)}else ln("send-notification",T)}function Jn(T,E,D){if(!(V===h.Off||!ue))if(Be===d.Text){let H;(V===h.Verbose||V===h.Compact)&&(T.error&&T.error.data?H=`Error data: ${Lt(T.error.data)}

`:T.result?H=`Result: ${Lt(T.result)}

`:T.error===void 0&&(H=`No result returned.

`)),ue.log(`Sending response '${E} - (${T.id})'. Processing request took ${Date.now()-D}ms`,H)}else ln("send-response",T)}function Js(T){if(!(V===h.Off||!ue))if(Be===d.Text){let E;(V===h.Verbose||V===h.Compact)&&T.params&&(E=`Params: ${Lt(T.params)}

`),ue.log(`Received request '${T.method} - (${T.id})'.`,E)}else ln("receive-request",T)}function _r(T){if(!(V===h.Off||!ue||T.method===w.type.method))if(Be===d.Text){let E;(V===h.Verbose||V===h.Compact)&&(T.params?E=`Params: ${Lt(T.params)}

`:E=`No parameters provided.

`),ue.log(`Received notification '${T.method}'.`,E)}else ln("receive-notification",T)}function Qs(T,E){if(!(V===h.Off||!ue))if(Be===d.Text){let D;if((V===h.Verbose||V===h.Compact)&&(T.error&&T.error.data?D=`Error data: ${Lt(T.error.data)}

`:T.result?D=`Result: ${Lt(T.result)}

`:T.error===void 0&&(D=`No result returned.

`)),E){const H=T.error?` Request failed: ${T.error.message} (${T.error.code}).`:"";ue.log(`Received response '${E.method} - (${T.id})' in ${Date.now()-E.timerStart}ms.${H}`,D)}else ue.log(`Received response ${T.id} without active response promise.`,D)}else ln("receive-response",T)}function ln(T,E){if(!ue||V===h.Off)return;const D={isLSPMessage:!0,type:T,message:E,timestamp:Date.now()};ue.log(D)}function An(){if(si())throw new m(_.Closed,"Connection is closed.");if(cn())throw new m(_.Disposed,"Connection is disposed.")}function Zs(){if(ii())throw new m(_.AlreadyListening,"Connection is already listening")}function eo(){if(!ii())throw new Error("Call listen() first.")}function Nn(T){return T===void 0?null:T}function li(T){if(T!==null)return T}function v(T){return T!=null&&!Array.isArray(T)&&typeof T=="object"}function Ae(T,E){switch(T){case r.ParameterStructures.auto:return v(E)?li(E):[Nn(E)];case r.ParameterStructures.byName:if(!v(E))throw new Error("Received parameters by name but param is not an object literal.");return li(E);case r.ParameterStructures.byPosition:return[Nn(E)];default:throw new Error(`Unknown parameter structure ${T.toString()}`)}}function Ne(T,E){let D;const H=T.numberOfParams;switch(H){case 0:D=void 0;break;case 1:D=Ae(T.parameterStructures,E[0]);break;default:D=[];for(let pe=0;pe<E.length&&pe<H;pe++)D.push(Nn(E[pe]));if(E.length<H)for(let pe=E.length;pe<H;pe++)D.push(null);break}return D}const G={sendNotification:(T,...E)=>{An();let D,H;if(n.string(T)){D=T;const ae=E[0];let de=0,Ie=r.ParameterStructures.auto;r.ParameterStructures.is(ae)&&(de=1,Ie=ae);let Z=E.length;const we=Z-de;switch(we){case 0:H=void 0;break;case 1:H=Ae(Ie,E[de]);break;default:if(Ie===r.ParameterStructures.byName)throw new Error(`Received ${we} parameters for 'by Name' notification parameter structure.`);H=E.slice(de,Z).map(se=>Nn(se));break}}else{const ae=E;D=T.method,H=Ne(T,ae)}const pe={jsonrpc:te,method:D,params:H};return Xs(pe),C.write(pe).catch(ae=>{throw N.error("Sending notification failed."),ae})},onNotification:(T,E)=>{An();let D;return n.func(T)?xe=T:E&&(n.string(T)?(D=T,zt.set(T,{type:void 0,handler:E})):(D=T.method,zt.set(T.method,{type:T,handler:E}))),{dispose:()=>{D!==void 0?zt.delete(D):xe=void 0}}},onProgress:(T,E,D)=>{if(ve.has(E))throw new Error(`Progress handler for token ${E} already registered`);return ve.set(E,D),{dispose:()=>{ve.delete(E)}}},sendProgress:(T,E,D)=>G.sendNotification(l.type,{token:E,value:D}),onUnhandledProgress:ti.event,sendRequest:(T,...E)=>{An(),eo();let D,H,pe;if(n.string(T)){D=T;const Z=E[0],we=E[E.length-1];let se=0,je=r.ParameterStructures.auto;r.ParameterStructures.is(Z)&&(se=1,je=Z);let nt=E.length;o.CancellationToken.is(we)&&(nt=nt-1,pe=we);const Vt=nt-se;switch(Vt){case 0:H=void 0;break;case 1:H=Ae(je,E[se]);break;default:if(je===r.ParameterStructures.byName)throw new Error(`Received ${Vt} parameters for 'by Name' request parameter structure.`);H=E.slice(se,nt).map(yT=>Nn(yT));break}}else{const Z=E;D=T.method,H=Ne(T,Z);const we=T.numberOfParams;pe=o.CancellationToken.is(Z[we])?Z[we]:void 0}const ae=Fe++;let de;pe&&(de=pe.onCancellationRequested(()=>{const Z=xt.sender.sendCancellation(G,ae);return Z===void 0?(N.log(`Received no promise from cancellation strategy when cancelling id ${ae}`),Promise.resolve()):Z.catch(()=>{N.log(`Sending cancellation messages for id ${ae} failed`)})}));const Ie={jsonrpc:te,id:ae,method:D,params:H};return Ys(Ie),typeof xt.sender.enableCancellation=="function"&&xt.sender.enableCancellation(Ie),new Promise(async(Z,we)=>{const se=Vt=>{Z(Vt),xt.sender.cleanup(ae),de==null||de.dispose()},je=Vt=>{we(Vt),xt.sender.cleanup(ae),de==null||de.dispose()},nt={method:D,timerStart:Date.now(),resolve:se,reject:je};try{await C.write(Ie),_e.set(ae,nt)}catch(Vt){throw N.error("Sending request failed."),nt.reject(new r.ResponseError(r.ErrorCodes.MessageWriteError,Vt.message?Vt.message:"Unknown reason")),Vt}})},onRequest:(T,E)=>{An();let D=null;return f.is(T)?(D=void 0,Wt=T):n.string(T)?(D=null,E!==void 0&&(D=T,Gt.set(T,{handler:E,type:void 0}))):E!==void 0&&(D=T.method,Gt.set(T.method,{type:T,handler:E})),{dispose:()=>{D!==null&&(D!==void 0?Gt.delete(D):Wt=void 0)}}},hasPendingResponse:()=>_e.size>0,trace:async(T,E,D)=>{let H=!1,pe=d.Text;D!==void 0&&(n.boolean(D)?H=D:(H=D.sendNotification||!1,pe=D.traceFormat||d.Text)),V=T,Be=pe,V===h.Off?ue=void 0:ue=E,H&&!si()&&!cn()&&await G.sendNotification(y.type,{value:h.toString(T)})},onError:vr.event,onClose:Zr.event,onUnhandledNotification:ei.event,onDispose:ni.event,end:()=>{C.end()},dispose:()=>{if(cn())return;lt=A.Disposed,ni.fire(void 0);const T=new r.ResponseError(r.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(const E of _e.values())E.reject(T);_e=new Map,Pe=new Map,Ge=new Set,We=new i.LinkedMap,n.func(C.dispose)&&C.dispose(),n.func(R.dispose)&&R.dispose()},listen:()=>{An(),Zs(),lt=A.Listening,R.listen(Ks)},inspect:()=>{(0,e.default)().console.log("inspect")}};return G.onNotification(w.type,T=>{if(V===h.Off||!ue)return;const E=V===h.Verbose||V===h.Compact;ue.log(T.message,E?T.verbose:void 0)}),G.onNotification(l.type,T=>{const E=ve.get(T.token);E?E(T.value):ti.fire(T)}),G}t.createMessageConnection=S}(hu)),hu}var fm;function If(){return fm||(fm=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressType=t.ProgressToken=t.createMessageConnection=t.NullLogger=t.ConnectionOptions=t.ConnectionStrategy=t.AbstractMessageBuffer=t.WriteableStreamMessageWriter=t.AbstractMessageWriter=t.MessageWriter=t.ReadableStreamMessageReader=t.AbstractMessageReader=t.MessageReader=t.SharedArrayReceiverStrategy=t.SharedArraySenderStrategy=t.CancellationToken=t.CancellationTokenSource=t.Emitter=t.Event=t.Disposable=t.LRUCache=t.Touch=t.LinkedMap=t.ParameterStructures=t.NotificationType9=t.NotificationType8=t.NotificationType7=t.NotificationType6=t.NotificationType5=t.NotificationType4=t.NotificationType3=t.NotificationType2=t.NotificationType1=t.NotificationType0=t.NotificationType=t.ErrorCodes=t.ResponseError=t.RequestType9=t.RequestType8=t.RequestType7=t.RequestType6=t.RequestType5=t.RequestType4=t.RequestType3=t.RequestType2=t.RequestType1=t.RequestType0=t.RequestType=t.Message=t.RAL=void 0,t.MessageStrategy=t.CancellationStrategy=t.CancellationSenderStrategy=t.CancellationReceiverStrategy=t.ConnectionError=t.ConnectionErrors=t.LogTraceNotification=t.SetTraceNotification=t.TraceFormat=t.TraceValues=t.Trace=void 0;const e=F_();Object.defineProperty(t,"Message",{enumerable:!0,get:function(){return e.Message}}),Object.defineProperty(t,"RequestType",{enumerable:!0,get:function(){return e.RequestType}}),Object.defineProperty(t,"RequestType0",{enumerable:!0,get:function(){return e.RequestType0}}),Object.defineProperty(t,"RequestType1",{enumerable:!0,get:function(){return e.RequestType1}}),Object.defineProperty(t,"RequestType2",{enumerable:!0,get:function(){return e.RequestType2}}),Object.defineProperty(t,"RequestType3",{enumerable:!0,get:function(){return e.RequestType3}}),Object.defineProperty(t,"RequestType4",{enumerable:!0,get:function(){return e.RequestType4}}),Object.defineProperty(t,"RequestType5",{enumerable:!0,get:function(){return e.RequestType5}}),Object.defineProperty(t,"RequestType6",{enumerable:!0,get:function(){return e.RequestType6}}),Object.defineProperty(t,"RequestType7",{enumerable:!0,get:function(){return e.RequestType7}}),Object.defineProperty(t,"RequestType8",{enumerable:!0,get:function(){return e.RequestType8}}),Object.defineProperty(t,"RequestType9",{enumerable:!0,get:function(){return e.RequestType9}}),Object.defineProperty(t,"ResponseError",{enumerable:!0,get:function(){return e.ResponseError}}),Object.defineProperty(t,"ErrorCodes",{enumerable:!0,get:function(){return e.ErrorCodes}}),Object.defineProperty(t,"NotificationType",{enumerable:!0,get:function(){return e.NotificationType}}),Object.defineProperty(t,"NotificationType0",{enumerable:!0,get:function(){return e.NotificationType0}}),Object.defineProperty(t,"NotificationType1",{enumerable:!0,get:function(){return e.NotificationType1}}),Object.defineProperty(t,"NotificationType2",{enumerable:!0,get:function(){return e.NotificationType2}}),Object.defineProperty(t,"NotificationType3",{enumerable:!0,get:function(){return e.NotificationType3}}),Object.defineProperty(t,"NotificationType4",{enumerable:!0,get:function(){return e.NotificationType4}}),Object.defineProperty(t,"NotificationType5",{enumerable:!0,get:function(){return e.NotificationType5}}),Object.defineProperty(t,"NotificationType6",{enumerable:!0,get:function(){return e.NotificationType6}}),Object.defineProperty(t,"NotificationType7",{enumerable:!0,get:function(){return e.NotificationType7}}),Object.defineProperty(t,"NotificationType8",{enumerable:!0,get:function(){return e.NotificationType8}}),Object.defineProperty(t,"NotificationType9",{enumerable:!0,get:function(){return e.NotificationType9}}),Object.defineProperty(t,"ParameterStructures",{enumerable:!0,get:function(){return e.ParameterStructures}});const n=H_();Object.defineProperty(t,"LinkedMap",{enumerable:!0,get:function(){return n.LinkedMap}}),Object.defineProperty(t,"LRUCache",{enumerable:!0,get:function(){return n.LRUCache}}),Object.defineProperty(t,"Touch",{enumerable:!0,get:function(){return n.Touch}});const r=vA();Object.defineProperty(t,"Disposable",{enumerable:!0,get:function(){return r.Disposable}});const i=nn;Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return i.Event}}),Object.defineProperty(t,"Emitter",{enumerable:!0,get:function(){return i.Emitter}});const s=Wn;Object.defineProperty(t,"CancellationTokenSource",{enumerable:!0,get:function(){return s.CancellationTokenSource}}),Object.defineProperty(t,"CancellationToken",{enumerable:!0,get:function(){return s.CancellationToken}});const o=_A();Object.defineProperty(t,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return o.SharedArraySenderStrategy}}),Object.defineProperty(t,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return o.SharedArrayReceiverStrategy}});const a=TA();Object.defineProperty(t,"MessageReader",{enumerable:!0,get:function(){return a.MessageReader}}),Object.defineProperty(t,"AbstractMessageReader",{enumerable:!0,get:function(){return a.AbstractMessageReader}}),Object.defineProperty(t,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return a.ReadableStreamMessageReader}});const c=RA();Object.defineProperty(t,"MessageWriter",{enumerable:!0,get:function(){return c.MessageWriter}}),Object.defineProperty(t,"AbstractMessageWriter",{enumerable:!0,get:function(){return c.AbstractMessageWriter}}),Object.defineProperty(t,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return c.WriteableStreamMessageWriter}});const l=wA();Object.defineProperty(t,"AbstractMessageBuffer",{enumerable:!0,get:function(){return l.AbstractMessageBuffer}});const u=bA();Object.defineProperty(t,"ConnectionStrategy",{enumerable:!0,get:function(){return u.ConnectionStrategy}}),Object.defineProperty(t,"ConnectionOptions",{enumerable:!0,get:function(){return u.ConnectionOptions}}),Object.defineProperty(t,"NullLogger",{enumerable:!0,get:function(){return u.NullLogger}}),Object.defineProperty(t,"createMessageConnection",{enumerable:!0,get:function(){return u.createMessageConnection}}),Object.defineProperty(t,"ProgressToken",{enumerable:!0,get:function(){return u.ProgressToken}}),Object.defineProperty(t,"ProgressType",{enumerable:!0,get:function(){return u.ProgressType}}),Object.defineProperty(t,"Trace",{enumerable:!0,get:function(){return u.Trace}}),Object.defineProperty(t,"TraceValues",{enumerable:!0,get:function(){return u.TraceValues}}),Object.defineProperty(t,"TraceFormat",{enumerable:!0,get:function(){return u.TraceFormat}}),Object.defineProperty(t,"SetTraceNotification",{enumerable:!0,get:function(){return u.SetTraceNotification}}),Object.defineProperty(t,"LogTraceNotification",{enumerable:!0,get:function(){return u.LogTraceNotification}}),Object.defineProperty(t,"ConnectionErrors",{enumerable:!0,get:function(){return u.ConnectionErrors}}),Object.defineProperty(t,"ConnectionError",{enumerable:!0,get:function(){return u.ConnectionError}}),Object.defineProperty(t,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return u.CancellationReceiverStrategy}}),Object.defineProperty(t,"CancellationSenderStrategy",{enumerable:!0,get:function(){return u.CancellationSenderStrategy}}),Object.defineProperty(t,"CancellationStrategy",{enumerable:!0,get:function(){return u.CancellationStrategy}}),Object.defineProperty(t,"MessageStrategy",{enumerable:!0,get:function(){return u.MessageStrategy}});const f=Pn;t.RAL=f.default}(fu)),fu}Object.defineProperty(Sh,"__esModule",{value:!0});const Xt=If();class wl extends Xt.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return wl.emptyBuffer}fromString(e,n){return new TextEncoder().encode(e)}toString(e,n){return n==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(n).decode(e)}asNative(e,n){return n===void 0?e:e.slice(0,n)}allocNative(e){return new Uint8Array(e)}}wl.emptyBuffer=new Uint8Array(0);class kA{constructor(e){this.socket=e,this._onData=new Xt.Emitter,this._messageListener=n=>{n.data.arrayBuffer().then(i=>{this._onData.fire(new Uint8Array(i))},()=>{(0,Xt.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Xt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Xt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Xt.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}}class SA{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Xt.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Xt.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Xt.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,n){if(typeof e=="string"){if(n!==void 0&&n!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${n}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}}const CA=new TextEncoder,q_=Object.freeze({messageBuffer:Object.freeze({create:t=>new wl(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(CA.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new kA(t),asWritableStream:t=>new SA(t)}),console,timer:Object.freeze({setTimeout(t,e,...n){const r=setTimeout(t,e,...n);return{dispose:()=>clearTimeout(r)}},setImmediate(t,...e){const n=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(n)}},setInterval(t,e,...n){const r=setInterval(t,e,...n);return{dispose:()=>clearInterval(r)}}})});function Df(){return q_}(function(t){function e(){Xt.RAL.install(q_)}t.install=e})(Df||(Df={}));Sh.default=Df;(function(t){var e=Oe&&Oe.__createBinding||(Object.create?function(c,l,u,f){f===void 0&&(f=u);var h=Object.getOwnPropertyDescriptor(l,u);(!h||("get"in h?!l.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(c,f,h)}:function(c,l,u,f){f===void 0&&(f=u),c[f]=l[u]}),n=Oe&&Oe.__exportStar||function(c,l){for(var u in c)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,c,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.createMessageConnection=t.BrowserMessageWriter=t.BrowserMessageReader=void 0,Sh.default.install();const i=If();n(If(),t);class s extends i.AbstractMessageReader{constructor(l){super(),this._onData=new i.Emitter,this._messageListener=u=>{this._onData.fire(u.data)},l.addEventListener("error",u=>this.fireError(u)),l.onmessage=this._messageListener}listen(l){return this._onData.event(l)}}t.BrowserMessageReader=s;class o extends i.AbstractMessageWriter{constructor(l){super(),this.port=l,this.errorCount=0,l.addEventListener("error",u=>this.fireError(u))}write(l){try{return this.port.postMessage(l),Promise.resolve()}catch(u){return this.handleError(u,l),Promise.reject(u)}}handleError(l,u){this.errorCount++,this.fireError(l,u,this.errorCount)}end(){}}t.BrowserMessageWriter=o;function a(c,l,u,f){return u===void 0&&(u=i.NullLogger),i.ConnectionStrategy.is(f)&&(f={connectionStrategy:f}),(0,i.createMessageConnection)(c,l,u,f)}t.createMessageConnection=a})(yr);var hm=yr,U_={},Ch=c0(qP),J={};Object.defineProperty(J,"__esModule",{value:!0});J.ProtocolNotificationType=J.ProtocolNotificationType0=J.ProtocolRequestType=J.ProtocolRequestType0=J.RegistrationType=J.MessageDirection=void 0;const Fr=yr;var pm;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(pm||(J.MessageDirection=pm={}));class $A{constructor(e){this.method=e}}J.RegistrationType=$A;class EA extends Fr.RequestType0{constructor(e){super(e)}}J.ProtocolRequestType0=EA;class PA extends Fr.RequestType{constructor(e){super(e,Fr.ParameterStructures.byName)}}J.ProtocolRequestType=PA;class AA extends Fr.NotificationType0{constructor(e){super(e)}}J.ProtocolNotificationType0=AA;class NA extends Fr.NotificationType{constructor(e){super(e,Fr.ParameterStructures.byName)}}J.ProtocolNotificationType=NA;var B_={},Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});Ce.objectLiteral=Ce.typedArray=Ce.stringArray=Ce.array=Ce.func=Ce.error=Ce.number=Ce.string=Ce.boolean=void 0;function IA(t){return t===!0||t===!1}Ce.boolean=IA;function K_(t){return typeof t=="string"||t instanceof String}Ce.string=K_;function DA(t){return typeof t=="number"||t instanceof Number}Ce.number=DA;function OA(t){return t instanceof Error}Ce.error=OA;function xA(t){return typeof t=="function"}Ce.func=xA;function W_(t){return Array.isArray(t)}Ce.array=W_;function LA(t){return W_(t)&&t.every(e=>K_(e))}Ce.stringArray=LA;function MA(t,e){return Array.isArray(t)&&t.every(e)}Ce.typedArray=MA;function FA(t){return t!==null&&typeof t=="object"}Ce.objectLiteral=FA;var bl={};Object.defineProperty(bl,"__esModule",{value:!0});bl.ImplementationRequest=void 0;const mm=J;var gm;(function(t){t.method="textDocument/implementation",t.messageDirection=mm.MessageDirection.clientToServer,t.type=new mm.ProtocolRequestType(t.method)})(gm||(bl.ImplementationRequest=gm={}));var kl={};Object.defineProperty(kl,"__esModule",{value:!0});kl.TypeDefinitionRequest=void 0;const ym=J;var vm;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=ym.MessageDirection.clientToServer,t.type=new ym.ProtocolRequestType(t.method)})(vm||(kl.TypeDefinitionRequest=vm={}));var Hr={};Object.defineProperty(Hr,"__esModule",{value:!0});Hr.DidChangeWorkspaceFoldersNotification=Hr.WorkspaceFoldersRequest=void 0;const Wc=J;var _m;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Wc.MessageDirection.serverToClient,t.type=new Wc.ProtocolRequestType0(t.method)})(_m||(Hr.WorkspaceFoldersRequest=_m={}));var Tm;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Wc.MessageDirection.clientToServer,t.type=new Wc.ProtocolNotificationType(t.method)})(Tm||(Hr.DidChangeWorkspaceFoldersNotification=Tm={}));var Sl={};Object.defineProperty(Sl,"__esModule",{value:!0});Sl.ConfigurationRequest=void 0;const Rm=J;var wm;(function(t){t.method="workspace/configuration",t.messageDirection=Rm.MessageDirection.serverToClient,t.type=new Rm.ProtocolRequestType(t.method)})(wm||(Sl.ConfigurationRequest=wm={}));var jr={};Object.defineProperty(jr,"__esModule",{value:!0});jr.ColorPresentationRequest=jr.DocumentColorRequest=void 0;const Gc=J;var bm;(function(t){t.method="textDocument/documentColor",t.messageDirection=Gc.MessageDirection.clientToServer,t.type=new Gc.ProtocolRequestType(t.method)})(bm||(jr.DocumentColorRequest=bm={}));var km;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=Gc.MessageDirection.clientToServer,t.type=new Gc.ProtocolRequestType(t.method)})(km||(jr.ColorPresentationRequest=km={}));var qr={};Object.defineProperty(qr,"__esModule",{value:!0});qr.FoldingRangeRefreshRequest=qr.FoldingRangeRequest=void 0;const zc=J;var Sm;(function(t){t.method="textDocument/foldingRange",t.messageDirection=zc.MessageDirection.clientToServer,t.type=new zc.ProtocolRequestType(t.method)})(Sm||(qr.FoldingRangeRequest=Sm={}));var Cm;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=zc.MessageDirection.serverToClient,t.type=new zc.ProtocolRequestType0(t.method)})(Cm||(qr.FoldingRangeRefreshRequest=Cm={}));var Cl={};Object.defineProperty(Cl,"__esModule",{value:!0});Cl.DeclarationRequest=void 0;const $m=J;var Em;(function(t){t.method="textDocument/declaration",t.messageDirection=$m.MessageDirection.clientToServer,t.type=new $m.ProtocolRequestType(t.method)})(Em||(Cl.DeclarationRequest=Em={}));var $l={};Object.defineProperty($l,"__esModule",{value:!0});$l.SelectionRangeRequest=void 0;const Pm=J;var Am;(function(t){t.method="textDocument/selectionRange",t.messageDirection=Pm.MessageDirection.clientToServer,t.type=new Pm.ProtocolRequestType(t.method)})(Am||($l.SelectionRangeRequest=Am={}));var On={};Object.defineProperty(On,"__esModule",{value:!0});On.WorkDoneProgressCancelNotification=On.WorkDoneProgressCreateRequest=On.WorkDoneProgress=void 0;const HA=yr,Vc=J;var Nm;(function(t){t.type=new HA.ProgressType;function e(n){return n===t.type}t.is=e})(Nm||(On.WorkDoneProgress=Nm={}));var Im;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=Vc.MessageDirection.serverToClient,t.type=new Vc.ProtocolRequestType(t.method)})(Im||(On.WorkDoneProgressCreateRequest=Im={}));var Dm;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=Vc.MessageDirection.clientToServer,t.type=new Vc.ProtocolNotificationType(t.method)})(Dm||(On.WorkDoneProgressCancelNotification=Dm={}));var xn={};Object.defineProperty(xn,"__esModule",{value:!0});xn.CallHierarchyOutgoingCallsRequest=xn.CallHierarchyIncomingCallsRequest=xn.CallHierarchyPrepareRequest=void 0;const Ur=J;var Om;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=Ur.MessageDirection.clientToServer,t.type=new Ur.ProtocolRequestType(t.method)})(Om||(xn.CallHierarchyPrepareRequest=Om={}));var xm;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=Ur.MessageDirection.clientToServer,t.type=new Ur.ProtocolRequestType(t.method)})(xm||(xn.CallHierarchyIncomingCallsRequest=xm={}));var Lm;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=Ur.MessageDirection.clientToServer,t.type=new Ur.ProtocolRequestType(t.method)})(Lm||(xn.CallHierarchyOutgoingCallsRequest=Lm={}));var ut={};Object.defineProperty(ut,"__esModule",{value:!0});ut.SemanticTokensRefreshRequest=ut.SemanticTokensRangeRequest=ut.SemanticTokensDeltaRequest=ut.SemanticTokensRequest=ut.SemanticTokensRegistrationType=ut.TokenFormat=void 0;const kn=J;var Mm;(function(t){t.Relative="relative"})(Mm||(ut.TokenFormat=Mm={}));var ys;(function(t){t.method="textDocument/semanticTokens",t.type=new kn.RegistrationType(t.method)})(ys||(ut.SemanticTokensRegistrationType=ys={}));var Fm;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=kn.MessageDirection.clientToServer,t.type=new kn.ProtocolRequestType(t.method),t.registrationMethod=ys.method})(Fm||(ut.SemanticTokensRequest=Fm={}));var Hm;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=kn.MessageDirection.clientToServer,t.type=new kn.ProtocolRequestType(t.method),t.registrationMethod=ys.method})(Hm||(ut.SemanticTokensDeltaRequest=Hm={}));var jm;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=kn.MessageDirection.clientToServer,t.type=new kn.ProtocolRequestType(t.method),t.registrationMethod=ys.method})(jm||(ut.SemanticTokensRangeRequest=jm={}));var qm;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=kn.MessageDirection.serverToClient,t.type=new kn.ProtocolRequestType0(t.method)})(qm||(ut.SemanticTokensRefreshRequest=qm={}));var El={};Object.defineProperty(El,"__esModule",{value:!0});El.ShowDocumentRequest=void 0;const Um=J;var Bm;(function(t){t.method="window/showDocument",t.messageDirection=Um.MessageDirection.serverToClient,t.type=new Um.ProtocolRequestType(t.method)})(Bm||(El.ShowDocumentRequest=Bm={}));var Pl={};Object.defineProperty(Pl,"__esModule",{value:!0});Pl.LinkedEditingRangeRequest=void 0;const Km=J;var Wm;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=Km.MessageDirection.clientToServer,t.type=new Km.ProtocolRequestType(t.method)})(Wm||(Pl.LinkedEditingRangeRequest=Wm={}));var Ze={};Object.defineProperty(Ze,"__esModule",{value:!0});Ze.WillDeleteFilesRequest=Ze.DidDeleteFilesNotification=Ze.DidRenameFilesNotification=Ze.WillRenameFilesRequest=Ze.DidCreateFilesNotification=Ze.WillCreateFilesRequest=Ze.FileOperationPatternKind=void 0;const Ot=J;var Gm;(function(t){t.file="file",t.folder="folder"})(Gm||(Ze.FileOperationPatternKind=Gm={}));var zm;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolRequestType(t.method)})(zm||(Ze.WillCreateFilesRequest=zm={}));var Vm;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolNotificationType(t.method)})(Vm||(Ze.DidCreateFilesNotification=Vm={}));var Ym;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolRequestType(t.method)})(Ym||(Ze.WillRenameFilesRequest=Ym={}));var Xm;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolNotificationType(t.method)})(Xm||(Ze.DidRenameFilesNotification=Xm={}));var Jm;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolNotificationType(t.method)})(Jm||(Ze.DidDeleteFilesNotification=Jm={}));var Qm;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Ot.MessageDirection.clientToServer,t.type=new Ot.ProtocolRequestType(t.method)})(Qm||(Ze.WillDeleteFilesRequest=Qm={}));var Ln={};Object.defineProperty(Ln,"__esModule",{value:!0});Ln.MonikerRequest=Ln.MonikerKind=Ln.UniquenessLevel=void 0;const Zm=J;var eg;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(eg||(Ln.UniquenessLevel=eg={}));var tg;(function(t){t.$import="import",t.$export="export",t.local="local"})(tg||(Ln.MonikerKind=tg={}));var ng;(function(t){t.method="textDocument/moniker",t.messageDirection=Zm.MessageDirection.clientToServer,t.type=new Zm.ProtocolRequestType(t.method)})(ng||(Ln.MonikerRequest=ng={}));var Mn={};Object.defineProperty(Mn,"__esModule",{value:!0});Mn.TypeHierarchySubtypesRequest=Mn.TypeHierarchySupertypesRequest=Mn.TypeHierarchyPrepareRequest=void 0;const Br=J;var rg;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=Br.MessageDirection.clientToServer,t.type=new Br.ProtocolRequestType(t.method)})(rg||(Mn.TypeHierarchyPrepareRequest=rg={}));var ig;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=Br.MessageDirection.clientToServer,t.type=new Br.ProtocolRequestType(t.method)})(ig||(Mn.TypeHierarchySupertypesRequest=ig={}));var sg;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=Br.MessageDirection.clientToServer,t.type=new Br.ProtocolRequestType(t.method)})(sg||(Mn.TypeHierarchySubtypesRequest=sg={}));var Kr={};Object.defineProperty(Kr,"__esModule",{value:!0});Kr.InlineValueRefreshRequest=Kr.InlineValueRequest=void 0;const Yc=J;var og;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Yc.MessageDirection.clientToServer,t.type=new Yc.ProtocolRequestType(t.method)})(og||(Kr.InlineValueRequest=og={}));var ag;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Yc.MessageDirection.serverToClient,t.type=new Yc.ProtocolRequestType0(t.method)})(ag||(Kr.InlineValueRefreshRequest=ag={}));var Fn={};Object.defineProperty(Fn,"__esModule",{value:!0});Fn.InlayHintRefreshRequest=Fn.InlayHintResolveRequest=Fn.InlayHintRequest=void 0;const Wr=J;var cg;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Wr.MessageDirection.clientToServer,t.type=new Wr.ProtocolRequestType(t.method)})(cg||(Fn.InlayHintRequest=cg={}));var lg;(function(t){t.method="inlayHint/resolve",t.messageDirection=Wr.MessageDirection.clientToServer,t.type=new Wr.ProtocolRequestType(t.method)})(lg||(Fn.InlayHintResolveRequest=lg={}));var ug;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Wr.MessageDirection.serverToClient,t.type=new Wr.ProtocolRequestType0(t.method)})(ug||(Fn.InlayHintRefreshRequest=ug={}));var $t={};Object.defineProperty($t,"__esModule",{value:!0});$t.DiagnosticRefreshRequest=$t.WorkspaceDiagnosticRequest=$t.DocumentDiagnosticRequest=$t.DocumentDiagnosticReportKind=$t.DiagnosticServerCancellationData=void 0;const G_=yr,jA=Ce,Gr=J;var dg;(function(t){function e(n){const r=n;return r&&jA.boolean(r.retriggerRequest)}t.is=e})(dg||($t.DiagnosticServerCancellationData=dg={}));var fg;(function(t){t.Full="full",t.Unchanged="unchanged"})(fg||($t.DocumentDiagnosticReportKind=fg={}));var hg;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolRequestType(t.method),t.partialResult=new G_.ProgressType})(hg||($t.DocumentDiagnosticRequest=hg={}));var pg;(function(t){t.method="workspace/diagnostic",t.messageDirection=Gr.MessageDirection.clientToServer,t.type=new Gr.ProtocolRequestType(t.method),t.partialResult=new G_.ProgressType})(pg||($t.WorkspaceDiagnosticRequest=pg={}));var mg;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Gr.MessageDirection.serverToClient,t.type=new Gr.ProtocolRequestType0(t.method)})(mg||($t.DiagnosticRefreshRequest=mg={}));var Se={};Object.defineProperty(Se,"__esModule",{value:!0});Se.DidCloseNotebookDocumentNotification=Se.DidSaveNotebookDocumentNotification=Se.DidChangeNotebookDocumentNotification=Se.NotebookCellArrayChange=Se.DidOpenNotebookDocumentNotification=Se.NotebookDocumentSyncRegistrationType=Se.NotebookDocument=Se.NotebookCell=Se.ExecutionSummary=Se.NotebookCellKind=void 0;const vs=Ch,Ft=Ce,rn=J;var Of;(function(t){t.Markup=1,t.Code=2;function e(n){return n===1||n===2}t.is=e})(Of||(Se.NotebookCellKind=Of={}));var xf;(function(t){function e(i,s){const o={executionOrder:i};return(s===!0||s===!1)&&(o.success=s),o}t.create=e;function n(i){const s=i;return Ft.objectLiteral(s)&&vs.uinteger.is(s.executionOrder)&&(s.success===void 0||Ft.boolean(s.success))}t.is=n;function r(i,s){return i===s?!0:i==null||s===null||s===void 0?!1:i.executionOrder===s.executionOrder&&i.success===s.success}t.equals=r})(xf||(Se.ExecutionSummary=xf={}));var Xc;(function(t){function e(s,o){return{kind:s,document:o}}t.create=e;function n(s){const o=s;return Ft.objectLiteral(o)&&Of.is(o.kind)&&vs.DocumentUri.is(o.document)&&(o.metadata===void 0||Ft.objectLiteral(o.metadata))}t.is=n;function r(s,o){const a=new Set;return s.document!==o.document&&a.add("document"),s.kind!==o.kind&&a.add("kind"),s.executionSummary!==o.executionSummary&&a.add("executionSummary"),(s.metadata!==void 0||o.metadata!==void 0)&&!i(s.metadata,o.metadata)&&a.add("metadata"),(s.executionSummary!==void 0||o.executionSummary!==void 0)&&!xf.equals(s.executionSummary,o.executionSummary)&&a.add("executionSummary"),a}t.diff=r;function i(s,o){if(s===o)return!0;if(s==null||o===null||o===void 0||typeof s!=typeof o||typeof s!="object")return!1;const a=Array.isArray(s),c=Array.isArray(o);if(a!==c)return!1;if(a&&c){if(s.length!==o.length)return!1;for(let l=0;l<s.length;l++)if(!i(s[l],o[l]))return!1}if(Ft.objectLiteral(s)&&Ft.objectLiteral(o)){const l=Object.keys(s),u=Object.keys(o);if(l.length!==u.length||(l.sort(),u.sort(),!i(l,u)))return!1;for(let f=0;f<l.length;f++){const h=l[f];if(!i(s[h],o[h]))return!1}}return!0}})(Xc||(Se.NotebookCell=Xc={}));var gg;(function(t){function e(r,i,s,o){return{uri:r,notebookType:i,version:s,cells:o}}t.create=e;function n(r){const i=r;return Ft.objectLiteral(i)&&Ft.string(i.uri)&&vs.integer.is(i.version)&&Ft.typedArray(i.cells,Xc.is)}t.is=n})(gg||(Se.NotebookDocument=gg={}));var zr;(function(t){t.method="notebookDocument/sync",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.RegistrationType(t.method)})(zr||(Se.NotebookDocumentSyncRegistrationType=zr={}));var yg;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=zr.method})(yg||(Se.DidOpenNotebookDocumentNotification=yg={}));var vg;(function(t){function e(r){const i=r;return Ft.objectLiteral(i)&&vs.uinteger.is(i.start)&&vs.uinteger.is(i.deleteCount)&&(i.cells===void 0||Ft.typedArray(i.cells,Xc.is))}t.is=e;function n(r,i,s){const o={start:r,deleteCount:i};return s!==void 0&&(o.cells=s),o}t.create=n})(vg||(Se.NotebookCellArrayChange=vg={}));var _g;(function(t){t.method="notebookDocument/didChange",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=zr.method})(_g||(Se.DidChangeNotebookDocumentNotification=_g={}));var Tg;(function(t){t.method="notebookDocument/didSave",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=zr.method})(Tg||(Se.DidSaveNotebookDocumentNotification=Tg={}));var Rg;(function(t){t.method="notebookDocument/didClose",t.messageDirection=rn.MessageDirection.clientToServer,t.type=new rn.ProtocolNotificationType(t.method),t.registrationMethod=zr.method})(Rg||(Se.DidCloseNotebookDocumentNotification=Rg={}));var Al={};Object.defineProperty(Al,"__esModule",{value:!0});Al.InlineCompletionRequest=void 0;const wg=J;var bg;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=wg.MessageDirection.clientToServer,t.type=new wg.ProtocolRequestType(t.method)})(bg||(Al.InlineCompletionRequest=bg={}));(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.WorkspaceSymbolRequest=t.CodeActionResolveRequest=t.CodeActionRequest=t.DocumentSymbolRequest=t.DocumentHighlightRequest=t.ReferencesRequest=t.DefinitionRequest=t.SignatureHelpRequest=t.SignatureHelpTriggerKind=t.HoverRequest=t.CompletionResolveRequest=t.CompletionRequest=t.CompletionTriggerKind=t.PublishDiagnosticsNotification=t.WatchKind=t.RelativePattern=t.FileChangeType=t.DidChangeWatchedFilesNotification=t.WillSaveTextDocumentWaitUntilRequest=t.WillSaveTextDocumentNotification=t.TextDocumentSaveReason=t.DidSaveTextDocumentNotification=t.DidCloseTextDocumentNotification=t.DidChangeTextDocumentNotification=t.TextDocumentContentChangeEvent=t.DidOpenTextDocumentNotification=t.TextDocumentSyncKind=t.TelemetryEventNotification=t.LogMessageNotification=t.ShowMessageRequest=t.ShowMessageNotification=t.MessageType=t.DidChangeConfigurationNotification=t.ExitNotification=t.ShutdownRequest=t.InitializedNotification=t.InitializeErrorCodes=t.InitializeRequest=t.WorkDoneProgressOptions=t.TextDocumentRegistrationOptions=t.StaticRegistrationOptions=t.PositionEncodingKind=t.FailureHandlingKind=t.ResourceOperationKind=t.UnregistrationRequest=t.RegistrationRequest=t.DocumentSelector=t.NotebookCellTextDocumentFilter=t.NotebookDocumentFilter=t.TextDocumentFilter=void 0,t.MonikerRequest=t.MonikerKind=t.UniquenessLevel=t.WillDeleteFilesRequest=t.DidDeleteFilesNotification=t.WillRenameFilesRequest=t.DidRenameFilesNotification=t.WillCreateFilesRequest=t.DidCreateFilesNotification=t.FileOperationPatternKind=t.LinkedEditingRangeRequest=t.ShowDocumentRequest=t.SemanticTokensRegistrationType=t.SemanticTokensRefreshRequest=t.SemanticTokensRangeRequest=t.SemanticTokensDeltaRequest=t.SemanticTokensRequest=t.TokenFormat=t.CallHierarchyPrepareRequest=t.CallHierarchyOutgoingCallsRequest=t.CallHierarchyIncomingCallsRequest=t.WorkDoneProgressCancelNotification=t.WorkDoneProgressCreateRequest=t.WorkDoneProgress=t.SelectionRangeRequest=t.DeclarationRequest=t.FoldingRangeRefreshRequest=t.FoldingRangeRequest=t.ColorPresentationRequest=t.DocumentColorRequest=t.ConfigurationRequest=t.DidChangeWorkspaceFoldersNotification=t.WorkspaceFoldersRequest=t.TypeDefinitionRequest=t.ImplementationRequest=t.ApplyWorkspaceEditRequest=t.ExecuteCommandRequest=t.PrepareRenameRequest=t.RenameRequest=t.PrepareSupportDefaultBehavior=t.DocumentOnTypeFormattingRequest=t.DocumentRangesFormattingRequest=t.DocumentRangeFormattingRequest=t.DocumentFormattingRequest=t.DocumentLinkResolveRequest=t.DocumentLinkRequest=t.CodeLensRefreshRequest=t.CodeLensResolveRequest=t.CodeLensRequest=t.WorkspaceSymbolResolveRequest=void 0,t.InlineCompletionRequest=t.DidCloseNotebookDocumentNotification=t.DidSaveNotebookDocumentNotification=t.DidChangeNotebookDocumentNotification=t.NotebookCellArrayChange=t.DidOpenNotebookDocumentNotification=t.NotebookDocumentSyncRegistrationType=t.NotebookDocument=t.NotebookCell=t.ExecutionSummary=t.NotebookCellKind=t.DiagnosticRefreshRequest=t.WorkspaceDiagnosticRequest=t.DocumentDiagnosticRequest=t.DocumentDiagnosticReportKind=t.DiagnosticServerCancellationData=t.InlayHintRefreshRequest=t.InlayHintResolveRequest=t.InlayHintRequest=t.InlineValueRefreshRequest=t.InlineValueRequest=t.TypeHierarchySupertypesRequest=t.TypeHierarchySubtypesRequest=t.TypeHierarchyPrepareRequest=void 0;const e=J,n=Ch,r=Ce,i=bl;Object.defineProperty(t,"ImplementationRequest",{enumerable:!0,get:function(){return i.ImplementationRequest}});const s=kl;Object.defineProperty(t,"TypeDefinitionRequest",{enumerable:!0,get:function(){return s.TypeDefinitionRequest}});const o=Hr;Object.defineProperty(t,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return o.WorkspaceFoldersRequest}}),Object.defineProperty(t,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return o.DidChangeWorkspaceFoldersNotification}});const a=Sl;Object.defineProperty(t,"ConfigurationRequest",{enumerable:!0,get:function(){return a.ConfigurationRequest}});const c=jr;Object.defineProperty(t,"DocumentColorRequest",{enumerable:!0,get:function(){return c.DocumentColorRequest}}),Object.defineProperty(t,"ColorPresentationRequest",{enumerable:!0,get:function(){return c.ColorPresentationRequest}});const l=qr;Object.defineProperty(t,"FoldingRangeRequest",{enumerable:!0,get:function(){return l.FoldingRangeRequest}}),Object.defineProperty(t,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return l.FoldingRangeRefreshRequest}});const u=Cl;Object.defineProperty(t,"DeclarationRequest",{enumerable:!0,get:function(){return u.DeclarationRequest}});const f=$l;Object.defineProperty(t,"SelectionRangeRequest",{enumerable:!0,get:function(){return f.SelectionRangeRequest}});const h=On;Object.defineProperty(t,"WorkDoneProgress",{enumerable:!0,get:function(){return h.WorkDoneProgress}}),Object.defineProperty(t,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return h.WorkDoneProgressCreateRequest}}),Object.defineProperty(t,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return h.WorkDoneProgressCancelNotification}});const p=xn;Object.defineProperty(t,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return p.CallHierarchyIncomingCallsRequest}}),Object.defineProperty(t,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return p.CallHierarchyOutgoingCallsRequest}}),Object.defineProperty(t,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return p.CallHierarchyPrepareRequest}});const d=ut;Object.defineProperty(t,"TokenFormat",{enumerable:!0,get:function(){return d.TokenFormat}}),Object.defineProperty(t,"SemanticTokensRequest",{enumerable:!0,get:function(){return d.SemanticTokensRequest}}),Object.defineProperty(t,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return d.SemanticTokensDeltaRequest}}),Object.defineProperty(t,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return d.SemanticTokensRangeRequest}}),Object.defineProperty(t,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return d.SemanticTokensRefreshRequest}}),Object.defineProperty(t,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return d.SemanticTokensRegistrationType}});const y=El;Object.defineProperty(t,"ShowDocumentRequest",{enumerable:!0,get:function(){return y.ShowDocumentRequest}});const w=Pl;Object.defineProperty(t,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return w.LinkedEditingRangeRequest}});const _=Ze;Object.defineProperty(t,"FileOperationPatternKind",{enumerable:!0,get:function(){return _.FileOperationPatternKind}}),Object.defineProperty(t,"DidCreateFilesNotification",{enumerable:!0,get:function(){return _.DidCreateFilesNotification}}),Object.defineProperty(t,"WillCreateFilesRequest",{enumerable:!0,get:function(){return _.WillCreateFilesRequest}}),Object.defineProperty(t,"DidRenameFilesNotification",{enumerable:!0,get:function(){return _.DidRenameFilesNotification}}),Object.defineProperty(t,"WillRenameFilesRequest",{enumerable:!0,get:function(){return _.WillRenameFilesRequest}}),Object.defineProperty(t,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return _.DidDeleteFilesNotification}}),Object.defineProperty(t,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return _.WillDeleteFilesRequest}});const m=Ln;Object.defineProperty(t,"UniquenessLevel",{enumerable:!0,get:function(){return m.UniquenessLevel}}),Object.defineProperty(t,"MonikerKind",{enumerable:!0,get:function(){return m.MonikerKind}}),Object.defineProperty(t,"MonikerRequest",{enumerable:!0,get:function(){return m.MonikerRequest}});const g=Mn;Object.defineProperty(t,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return g.TypeHierarchyPrepareRequest}}),Object.defineProperty(t,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return g.TypeHierarchySubtypesRequest}}),Object.defineProperty(t,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return g.TypeHierarchySupertypesRequest}});const b=Kr;Object.defineProperty(t,"InlineValueRequest",{enumerable:!0,get:function(){return b.InlineValueRequest}}),Object.defineProperty(t,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return b.InlineValueRefreshRequest}});const F=Fn;Object.defineProperty(t,"InlayHintRequest",{enumerable:!0,get:function(){return F.InlayHintRequest}}),Object.defineProperty(t,"InlayHintResolveRequest",{enumerable:!0,get:function(){return F.InlayHintResolveRequest}}),Object.defineProperty(t,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return F.InlayHintRefreshRequest}});const W=$t;Object.defineProperty(t,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return W.DiagnosticServerCancellationData}}),Object.defineProperty(t,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return W.DocumentDiagnosticReportKind}}),Object.defineProperty(t,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return W.DocumentDiagnosticRequest}}),Object.defineProperty(t,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return W.WorkspaceDiagnosticRequest}}),Object.defineProperty(t,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return W.DiagnosticRefreshRequest}});const X=Se;Object.defineProperty(t,"NotebookCellKind",{enumerable:!0,get:function(){return X.NotebookCellKind}}),Object.defineProperty(t,"ExecutionSummary",{enumerable:!0,get:function(){return X.ExecutionSummary}}),Object.defineProperty(t,"NotebookCell",{enumerable:!0,get:function(){return X.NotebookCell}}),Object.defineProperty(t,"NotebookDocument",{enumerable:!0,get:function(){return X.NotebookDocument}}),Object.defineProperty(t,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return X.NotebookDocumentSyncRegistrationType}}),Object.defineProperty(t,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidOpenNotebookDocumentNotification}}),Object.defineProperty(t,"NotebookCellArrayChange",{enumerable:!0,get:function(){return X.NotebookCellArrayChange}}),Object.defineProperty(t,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidChangeNotebookDocumentNotification}}),Object.defineProperty(t,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidSaveNotebookDocumentNotification}}),Object.defineProperty(t,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return X.DidCloseNotebookDocumentNotification}});const ye=Al;Object.defineProperty(t,"InlineCompletionRequest",{enumerable:!0,get:function(){return ye.InlineCompletionRequest}});var Te;(function(v){function Ae(Ne){const G=Ne;return r.string(G)||r.string(G.language)||r.string(G.scheme)||r.string(G.pattern)}v.is=Ae})(Te||(t.TextDocumentFilter=Te={}));var Re;(function(v){function Ae(Ne){const G=Ne;return r.objectLiteral(G)&&(r.string(G.notebookType)||r.string(G.scheme)||r.string(G.pattern))}v.is=Ae})(Re||(t.NotebookDocumentFilter=Re={}));var A;(function(v){function Ae(Ne){const G=Ne;return r.objectLiteral(G)&&(r.string(G.notebook)||Re.is(G.notebook))&&(G.language===void 0||r.string(G.language))}v.is=Ae})(A||(t.NotebookCellTextDocumentFilter=A={}));var S;(function(v){function Ae(Ne){if(!Array.isArray(Ne))return!1;for(let G of Ne)if(!r.string(G)&&!Te.is(G)&&!A.is(G))return!1;return!0}v.is=Ae})(S||(t.DocumentSelector=S={}));var R;(function(v){v.method="client/registerCapability",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolRequestType(v.method)})(R||(t.RegistrationRequest=R={}));var C;(function(v){v.method="client/unregisterCapability",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolRequestType(v.method)})(C||(t.UnregistrationRequest=C={}));var I;(function(v){v.Create="create",v.Rename="rename",v.Delete="delete"})(I||(t.ResourceOperationKind=I={}));var P;(function(v){v.Abort="abort",v.Transactional="transactional",v.TextOnlyTransactional="textOnlyTransactional",v.Undo="undo"})(P||(t.FailureHandlingKind=P={}));var N;(function(v){v.UTF8="utf-8",v.UTF16="utf-16",v.UTF32="utf-32"})(N||(t.PositionEncodingKind=N={}));var Fe;(function(v){function Ae(Ne){const G=Ne;return G&&r.string(G.id)&&G.id.length>0}v.hasId=Ae})(Fe||(t.StaticRegistrationOptions=Fe={}));var x;(function(v){function Ae(Ne){const G=Ne;return G&&(G.documentSelector===null||S.is(G.documentSelector))}v.is=Ae})(x||(t.TextDocumentRegistrationOptions=x={}));var $;(function(v){function Ae(G){const T=G;return r.objectLiteral(T)&&(T.workDoneProgress===void 0||r.boolean(T.workDoneProgress))}v.is=Ae;function Ne(G){const T=G;return T&&r.boolean(T.workDoneProgress)}v.hasWorkDoneProgress=Ne})($||(t.WorkDoneProgressOptions=$={}));var te;(function(v){v.method="initialize",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(te||(t.InitializeRequest=te={}));var Wt;(function(v){v.unknownProtocolVersion=1})(Wt||(t.InitializeErrorCodes=Wt={}));var Gt;(function(v){v.method="initialized",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(Gt||(t.InitializedNotification=Gt={}));var xe;(function(v){v.method="shutdown",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType0(v.method)})(xe||(t.ShutdownRequest=xe={}));var zt;(function(v){v.method="exit",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType0(v.method)})(zt||(t.ExitNotification=zt={}));var ve;(function(v){v.method="workspace/didChangeConfiguration",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(ve||(t.DidChangeConfigurationNotification=ve={}));var He;(function(v){v.Error=1,v.Warning=2,v.Info=3,v.Log=4,v.Debug=5})(He||(t.MessageType=He={}));var We;(function(v){v.method="window/showMessage",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolNotificationType(v.method)})(We||(t.ShowMessageNotification=We={}));var _e;(function(v){v.method="window/showMessageRequest",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolRequestType(v.method)})(_e||(t.ShowMessageRequest=_e={}));var Ge;(function(v){v.method="window/logMessage",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolNotificationType(v.method)})(Ge||(t.LogMessageNotification=Ge={}));var Pe;(function(v){v.method="telemetry/event",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolNotificationType(v.method)})(Pe||(t.TelemetryEventNotification=Pe={}));var V;(function(v){v.None=0,v.Full=1,v.Incremental=2})(V||(t.TextDocumentSyncKind=V={}));var Be;(function(v){v.method="textDocument/didOpen",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(Be||(t.DidOpenTextDocumentNotification=Be={}));var ue;(function(v){function Ae(G){let T=G;return T!=null&&typeof T.text=="string"&&T.range!==void 0&&(T.rangeLength===void 0||typeof T.rangeLength=="number")}v.isIncremental=Ae;function Ne(G){let T=G;return T!=null&&typeof T.text=="string"&&T.range===void 0&&T.rangeLength===void 0}v.isFull=Ne})(ue||(t.TextDocumentContentChangeEvent=ue={}));var lt;(function(v){v.method="textDocument/didChange",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(lt||(t.DidChangeTextDocumentNotification=lt={}));var vr;(function(v){v.method="textDocument/didClose",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(vr||(t.DidCloseTextDocumentNotification=vr={}));var Zr;(function(v){v.method="textDocument/didSave",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(Zr||(t.DidSaveTextDocumentNotification=Zr={}));var ei;(function(v){v.Manual=1,v.AfterDelay=2,v.FocusOut=3})(ei||(t.TextDocumentSaveReason=ei={}));var ti;(function(v){v.method="textDocument/willSave",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(ti||(t.WillSaveTextDocumentNotification=ti={}));var ni;(function(v){v.method="textDocument/willSaveWaitUntil",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(ni||(t.WillSaveTextDocumentWaitUntilRequest=ni={}));var xt;(function(v){v.method="workspace/didChangeWatchedFiles",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolNotificationType(v.method)})(xt||(t.DidChangeWatchedFilesNotification=xt={}));var ri;(function(v){v.Created=1,v.Changed=2,v.Deleted=3})(ri||(t.FileChangeType=ri={}));var Ms;(function(v){function Ae(Ne){const G=Ne;return r.objectLiteral(G)&&(n.URI.is(G.baseUri)||n.WorkspaceFolder.is(G.baseUri))&&r.string(G.pattern)}v.is=Ae})(Ms||(t.RelativePattern=Ms={}));var Fs;(function(v){v.Create=1,v.Change=2,v.Delete=4})(Fs||(t.WatchKind=Fs={}));var Hs;(function(v){v.method="textDocument/publishDiagnostics",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolNotificationType(v.method)})(Hs||(t.PublishDiagnosticsNotification=Hs={}));var js;(function(v){v.Invoked=1,v.TriggerCharacter=2,v.TriggerForIncompleteCompletions=3})(js||(t.CompletionTriggerKind=js={}));var ii;(function(v){v.method="textDocument/completion",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(ii||(t.CompletionRequest=ii={}));var si;(function(v){v.method="completionItem/resolve",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(si||(t.CompletionResolveRequest=si={}));var cn;(function(v){v.method="textDocument/hover",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(cn||(t.HoverRequest=cn={}));var oi;(function(v){v.Invoked=1,v.TriggerCharacter=2,v.ContentChange=3})(oi||(t.SignatureHelpTriggerKind=oi={}));var qs;(function(v){v.method="textDocument/signatureHelp",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(qs||(t.SignatureHelpRequest=qs={}));var Us;(function(v){v.method="textDocument/definition",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Us||(t.DefinitionRequest=Us={}));var ai;(function(v){v.method="textDocument/references",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(ai||(t.ReferencesRequest=ai={}));var ci;(function(v){v.method="textDocument/documentHighlight",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(ci||(t.DocumentHighlightRequest=ci={}));var Bs;(function(v){v.method="textDocument/documentSymbol",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Bs||(t.DocumentSymbolRequest=Bs={}));var Ks;(function(v){v.method="textDocument/codeAction",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Ks||(t.CodeActionRequest=Ks={}));var Ws;(function(v){v.method="codeAction/resolve",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Ws||(t.CodeActionResolveRequest=Ws={}));var Gs;(function(v){v.method="workspace/symbol",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Gs||(t.WorkspaceSymbolRequest=Gs={}));var zs;(function(v){v.method="workspaceSymbol/resolve",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(zs||(t.WorkspaceSymbolResolveRequest=zs={}));var Vs;(function(v){v.method="textDocument/codeLens",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Vs||(t.CodeLensRequest=Vs={}));var Lt;(function(v){v.method="codeLens/resolve",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Lt||(t.CodeLensResolveRequest=Lt={}));var Ys;(function(v){v.method="workspace/codeLens/refresh",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolRequestType0(v.method)})(Ys||(t.CodeLensRefreshRequest=Ys={}));var Xs;(function(v){v.method="textDocument/documentLink",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Xs||(t.DocumentLinkRequest=Xs={}));var Jn;(function(v){v.method="documentLink/resolve",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Jn||(t.DocumentLinkResolveRequest=Jn={}));var Js;(function(v){v.method="textDocument/formatting",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Js||(t.DocumentFormattingRequest=Js={}));var _r;(function(v){v.method="textDocument/rangeFormatting",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(_r||(t.DocumentRangeFormattingRequest=_r={}));var Qs;(function(v){v.method="textDocument/rangesFormatting",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Qs||(t.DocumentRangesFormattingRequest=Qs={}));var ln;(function(v){v.method="textDocument/onTypeFormatting",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(ln||(t.DocumentOnTypeFormattingRequest=ln={}));var An;(function(v){v.Identifier=1})(An||(t.PrepareSupportDefaultBehavior=An={}));var Zs;(function(v){v.method="textDocument/rename",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Zs||(t.RenameRequest=Zs={}));var eo;(function(v){v.method="textDocument/prepareRename",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(eo||(t.PrepareRenameRequest=eo={}));var Nn;(function(v){v.method="workspace/executeCommand",v.messageDirection=e.MessageDirection.clientToServer,v.type=new e.ProtocolRequestType(v.method)})(Nn||(t.ExecuteCommandRequest=Nn={}));var li;(function(v){v.method="workspace/applyEdit",v.messageDirection=e.MessageDirection.serverToClient,v.type=new e.ProtocolRequestType("workspace/applyEdit")})(li||(t.ApplyWorkspaceEditRequest=li={}))})(B_);var Nl={};Object.defineProperty(Nl,"__esModule",{value:!0});Nl.createProtocolConnection=void 0;const kg=yr;function qA(t,e,n,r){return kg.ConnectionStrategy.is(r)&&(r={connectionStrategy:r}),(0,kg.createMessageConnection)(t,e,n,r)}Nl.createProtocolConnection=qA;(function(t){var e=Oe&&Oe.__createBinding||(Object.create?function(s,o,a,c){c===void 0&&(c=a);var l=Object.getOwnPropertyDescriptor(o,a);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,c,l)}:function(s,o,a,c){c===void 0&&(c=a),s[c]=o[a]}),n=Oe&&Oe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.LSPErrorCodes=t.createProtocolConnection=void 0,n(yr,t),n(Ch,t),n(J,t),n(B_,t);var r=Nl;Object.defineProperty(t,"createProtocolConnection",{enumerable:!0,get:function(){return r.createProtocolConnection}});var i;(function(s){s.lspReservedErrorRangeStart=-32899,s.RequestFailed=-32803,s.ServerCancelled=-32802,s.ContentModified=-32801,s.RequestCancelled=-32800,s.lspReservedErrorRangeEnd=-32800})(i||(t.LSPErrorCodes=i={}))})(U_);(function(t){var e=Oe&&Oe.__createBinding||(Object.create?function(s,o,a,c){c===void 0&&(c=a);var l=Object.getOwnPropertyDescriptor(o,a);(!l||("get"in l?!o.__esModule:l.writable||l.configurable))&&(l={enumerable:!0,get:function(){return o[a]}}),Object.defineProperty(s,c,l)}:function(s,o,a,c){c===void 0&&(c=a),s[c]=o[a]}),n=Oe&&Oe.__exportStar||function(s,o){for(var a in s)a!=="default"&&!Object.prototype.hasOwnProperty.call(o,a)&&e(o,s,a)};Object.defineProperty(t,"__esModule",{value:!0}),t.createProtocolConnection=void 0;const r=hm;n(hm,t),n(U_,t);function i(s,o,a,c){return(0,r.createMessageConnection)(s,o,a,c)}t.createProtocolConnection=i})(oe);Object.defineProperty(vn,"__esModule",{value:!0});vn.SemanticTokensBuilder=vn.SemanticTokensDiff=vn.SemanticTokensFeature=void 0;const vo=oe,UA=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(vo.SemanticTokensRefreshRequest.type),on:e=>{const n=vo.SemanticTokensRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onDelta:e=>{const n=vo.SemanticTokensDeltaRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onRange:e=>{const n=vo.SemanticTokensRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};vn.SemanticTokensFeature=UA;class z_{constructor(e,n){this.originalSequence=e,this.modifiedSequence=n}computeDiff(){const e=this.originalSequence.length,n=this.modifiedSequence.length;let r=0;for(;r<n&&r<e&&this.originalSequence[r]===this.modifiedSequence[r];)r++;if(r<n&&r<e){let i=e-1,s=n-1;for(;i>=r&&s>=r&&this.originalSequence[i]===this.modifiedSequence[s];)i--,s--;(i<r||s<r)&&(i++,s++);const o=i-r+1,a=this.modifiedSequence.slice(r,s+1);return a.length===1&&a[0]===this.originalSequence[i]?[{start:r,deleteCount:o-1}]:[{start:r,deleteCount:o,data:a}]}else return r<n?[{start:r,deleteCount:0,data:this.modifiedSequence.slice(r)}]:r<e?[{start:r,deleteCount:e-r}]:[]}}vn.SemanticTokensDiff=z_;let BA=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,n,r,i,s){let o=e,a=n;this._dataLen>0&&(o-=this._prevLine,o===0&&(a-=this._prevChar)),this._data[this._dataLen++]=o,this._data[this._dataLen++]=a,this._data[this._dataLen++]=r,this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._prevLine=e,this._prevChar=n}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new z_(this._prevData,this._data).computeDiff()}:this.build()}};vn.SemanticTokensBuilder=BA;var Il={};Object.defineProperty(Il,"__esModule",{value:!0});Il.InlineCompletionFeature=void 0;const KA=oe,WA=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(KA.InlineCompletionRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};Il.InlineCompletionFeature=WA;var Ls={};Object.defineProperty(Ls,"__esModule",{value:!0});Ls.TextDocuments=void 0;const Zn=oe;class GA{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new Zn.Emitter,this._onDidOpen=new Zn.Emitter,this._onDidClose=new Zn.Emitter,this._onDidSave=new Zn.Emitter,this._onWillSave=new Zn.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=Zn.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=this._configuration.create(i.uri,i.languageId,i.version,i.text);this._syncedDocuments.set(i.uri,s);const o=Object.freeze({document:s});this._onDidOpen.fire(o),this._onDidChangeContent.fire(o)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);let a=this._syncedDocuments.get(i.uri);a!==void 0&&(a=this._configuration.update(a,s,o),this._syncedDocuments.set(i.uri,a),this._onDidChangeContent.fire(Object.freeze({document:a})))})),n.push(e.onDidCloseTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&(this._syncedDocuments.delete(r.textDocument.uri),this._onDidClose.fire(Object.freeze({document:i})))})),n.push(e.onWillSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{let s=this._syncedDocuments.get(r.textDocument.uri);return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{let i=this._syncedDocuments.get(r.textDocument.uri);i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),Zn.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}Ls.TextDocuments=GA;var fr={};Object.defineProperty(fr,"__esModule",{value:!0});fr.NotebookDocuments=fr.NotebookSyncFeature=void 0;const Et=oe,Sg=Ls,zA=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Et.DidOpenNotebookDocumentNotification.type,n=>{e(n)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Et.DidChangeNotebookDocumentNotification.type,n=>{e(n)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Et.DidSaveNotebookDocumentNotification.type,n=>{e(n)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Et.DidCloseNotebookDocumentNotification.type,n=>{e(n)})}}};fr.NotebookSyncFeature=zA;let V_=class uc{onDidOpenTextDocument(e){return this.openHandler=e,Et.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Et.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Et.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return uc.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return uc.NULL_DISPOSE}onDidSaveTextDocument(){return uc.NULL_DISPOSE}};V_.NULL_DISPOSE=Object.freeze({dispose:()=>{}});class VA{constructor(e){e instanceof Sg.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new Sg.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Et.Emitter,this._onDidChange=new Et.Emitter,this._onDidSave=new Et.Emitter,this._onDidClose=new Et.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){const n=this.notebookCellMap.get(e);return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"?e:e.document,r=this.notebookCellMap.get(n);return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new V_,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{this.notebookDocuments.set(i.notebookDocument.uri,i.notebookDocument);for(const s of i.cellTextDocuments)n.openTextDocument({textDocument:s});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s===void 0)return;s.version=i.notebookDocument.version;const o=s.metadata;let a=!1;const c=i.change;c.metadata!==void 0&&(a=!0,s.metadata=c.metadata);const l=[],u=[],f=[],h=[];if(c.cells!==void 0){const _=c.cells;if(_.structure!==void 0){const m=_.structure.array;if(s.cells.splice(m.start,m.deleteCount,...m.cells!==void 0?m.cells:[]),_.structure.didOpen!==void 0)for(const g of _.structure.didOpen)n.openTextDocument({textDocument:g}),l.push(g.uri);if(_.structure.didClose)for(const g of _.structure.didClose)n.closeTextDocument({textDocument:g}),u.push(g.uri)}if(_.data!==void 0){const m=new Map(_.data.map(g=>[g.document,g]));for(let g=0;g<=s.cells.length;g++){const b=m.get(s.cells[g].document);if(b!==void 0){const F=s.cells.splice(g,1,b);if(f.push({old:F[0],new:b}),m.delete(b.document),m.size===0)break}}}if(_.textContent!==void 0)for(const m of _.textContent)n.changeTextDocument({textDocument:m.document,contentChanges:m.changes}),h.push(m.document.uri)}this.updateCellMap(s);const p={notebookDocument:s};a&&(p.metadata={old:o,new:s.metadata});const d=[];for(const _ of l)d.push(this.getNotebookCell(_));const y=[];for(const _ of u)y.push(this.getNotebookCell(_));const w=[];for(const _ of h)w.push(this.getNotebookCell(_));(d.length>0||y.length>0||f.length>0||w.length>0)&&(p.cells={added:d,removed:y,changed:{data:f,textContent:w}}),(p.metadata!==void 0||p.cells!==void 0)&&this._onDidChange.fire(p)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=this.notebookDocuments.get(i.notebookDocument.uri);if(s!==void 0){this._onDidClose.fire(s);for(const o of i.cellTextDocuments)n.closeTextDocument({textDocument:o});this.notebookDocuments.delete(i.notebookDocument.uri);for(const o of s.cells)this.notebookCellMap.delete(o.document)}})),Et.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}fr.NotebookDocuments=VA;var ne={},De={};Object.defineProperty(De,"__esModule",{value:!0});De.thenable=De.typedArray=De.stringArray=De.array=De.func=De.error=De.number=De.string=De.boolean=void 0;function YA(t){return t===!0||t===!1}De.boolean=YA;function Y_(t){return typeof t=="string"||t instanceof String}De.string=Y_;function XA(t){return typeof t=="number"||t instanceof Number}De.number=XA;function JA(t){return t instanceof Error}De.error=JA;function X_(t){return typeof t=="function"}De.func=X_;function J_(t){return Array.isArray(t)}De.array=J_;function QA(t){return J_(t)&&t.every(e=>Y_(e))}De.stringArray=QA;function ZA(t,e){return Array.isArray(t)&&t.every(e)}De.typedArray=ZA;function eN(t){return t&&X_(t.then)}De.thenable=eN;var yt={};Object.defineProperty(yt,"__esModule",{value:!0});yt.generateUuid=yt.parse=yt.isUUID=yt.v4=yt.empty=void 0;class $h{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}}class Y extends $h{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return Y._oneOf(Y._chars)}constructor(){super([Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-","4",Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._oneOf(Y._timeHighBits),Y._randomHex(),Y._randomHex(),Y._randomHex(),"-",Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex(),Y._randomHex()].join(""))}}Y._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];Y._timeHighBits=["8","9","a","b"];yt.empty=new $h("00000000-0000-0000-0000-000000000000");function Q_(){return new Y}yt.v4=Q_;const tN=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Z_(t){return tN.test(t)}yt.isUUID=Z_;function nN(t){if(!Z_(t))throw new Error("invalid uuid");return new $h(t)}yt.parse=nN;function rN(){return Q_().asHex()}yt.generateUuid=rN;var Hn={};Object.defineProperty(Hn,"__esModule",{value:!0});Hn.attachPartialResult=Hn.ProgressFeature=Hn.attachWorkDone=void 0;const jn=oe,iN=yt;class Gn{constructor(e,n){this._connection=e,this._token=n,Gn.Instances.set(this._token,this)}begin(e,n,r,i){let s={kind:"begin",title:e,percentage:n,message:r,cancellable:i};this._connection.sendProgress(jn.WorkDoneProgress.type,this._token,s)}report(e,n){let r={kind:"report"};typeof e=="number"?(r.percentage=e,n!==void 0&&(r.message=n)):r.message=e,this._connection.sendProgress(jn.WorkDoneProgress.type,this._token,r)}done(){Gn.Instances.delete(this._token),this._connection.sendProgress(jn.WorkDoneProgress.type,this._token,{kind:"end"})}}Gn.Instances=new Map;class Cg extends Gn{constructor(e,n){super(e,n),this._source=new jn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}}class Eh{constructor(){}begin(){}report(){}done(){}}class $g extends Eh{constructor(){super(),this._source=new jn.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}}function sN(t,e){if(e===void 0||e.workDoneToken===void 0)return new Eh;const n=e.workDoneToken;return delete e.workDoneToken,new Gn(t,n)}Hn.attachWorkDone=sN;const oN=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){var n;super.initialize(e),((n=e==null?void 0:e.window)==null?void 0:n.workDoneProgress)===!0&&(this._progressSupported=!0,this.connection.onNotification(jn.WorkDoneProgressCancelNotification.type,r=>{let i=Gn.Instances.get(r.token);(i instanceof Cg||i instanceof $g)&&i.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Eh:new Gn(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){const e=(0,iN.generateUuid)();return this.connection.sendRequest(jn.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Cg(this.connection,e))}else return Promise.resolve(new $g)}};Hn.ProgressFeature=oN;var Lf;(function(t){t.type=new jn.ProgressType})(Lf||(Lf={}));class aN{constructor(e,n){this._connection=e,this._token=n}report(e){this._connection.sendProgress(Lf.type,this._token,e)}}function cN(t,e){if(e===void 0||e.partialResultToken===void 0)return;const n=e.partialResultToken;return delete e.partialResultToken,new aN(t,n)}Hn.attachPartialResult=cN;var Dl={};Object.defineProperty(Dl,"__esModule",{value:!0});Dl.ConfigurationFeature=void 0;const lN=oe,uN=De,dN=t=>class extends t{getConfiguration(e){return e?uN.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let n={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(lN.ConfigurationRequest.type,n).then(r=>Array.isArray(r)?Array.isArray(e)?r:r[0]:Array.isArray(e)?[]:null)}};Dl.ConfigurationFeature=dN;var Ol={};Object.defineProperty(Ol,"__esModule",{value:!0});Ol.WorkspaceFoldersFeature=void 0;const _o=oe,fN=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let n=e.workspace;n&&n.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new _o.Emitter,this.connection.onNotification(_o.DidChangeWorkspaceFoldersNotification.type,r=>{this._onDidChangeWorkspaceFolders.fire(r.event)}))}fillServerCapabilities(e){var r,i;super.fillServerCapabilities(e);const n=(i=(r=e.workspace)==null?void 0:r.workspaceFolders)==null?void 0:i.changeNotifications;this._notificationIsAutoRegistered=n===!0||typeof n=="string"}getWorkspaceFolders(){return this.connection.sendRequest(_o.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(_o.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Ol.WorkspaceFoldersFeature=fN;var xl={};Object.defineProperty(xl,"__esModule",{value:!0});xl.CallHierarchyFeature=void 0;const pu=oe,hN=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(pu.CallHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onIncomingCalls:e=>{const n=pu.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onOutgoingCalls:e=>{const n=pu.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};xl.CallHierarchyFeature=hN;var Ll={};Object.defineProperty(Ll,"__esModule",{value:!0});Ll.ShowDocumentFeature=void 0;const pN=oe,mN=t=>class extends t{showDocument(e){return this.connection.sendRequest(pN.ShowDocumentRequest.type,e)}};Ll.ShowDocumentFeature=mN;var Ml={};Object.defineProperty(Ml,"__esModule",{value:!0});Ml.FileOperationsFeature=void 0;const Rr=oe,gN=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Rr.DidCreateFilesNotification.type,n=>{e(n)})}onDidRenameFiles(e){return this.connection.onNotification(Rr.DidRenameFilesNotification.type,n=>{e(n)})}onDidDeleteFiles(e){return this.connection.onNotification(Rr.DidDeleteFilesNotification.type,n=>{e(n)})}onWillCreateFiles(e){return this.connection.onRequest(Rr.WillCreateFilesRequest.type,(n,r)=>e(n,r))}onWillRenameFiles(e){return this.connection.onRequest(Rr.WillRenameFilesRequest.type,(n,r)=>e(n,r))}onWillDeleteFiles(e){return this.connection.onRequest(Rr.WillDeleteFilesRequest.type,(n,r)=>e(n,r))}};Ml.FileOperationsFeature=gN;var Fl={};Object.defineProperty(Fl,"__esModule",{value:!0});Fl.LinkedEditingRangeFeature=void 0;const yN=oe,vN=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(yN.LinkedEditingRangeRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0))}};Fl.LinkedEditingRangeFeature=vN;var Hl={};Object.defineProperty(Hl,"__esModule",{value:!0});Hl.TypeHierarchyFeature=void 0;const mu=oe,_N=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(mu.TypeHierarchyPrepareRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),void 0)),onSupertypes:e=>{const n=mu.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))},onSubtypes:e=>{const n=mu.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Hl.TypeHierarchyFeature=_N;var jl={};Object.defineProperty(jl,"__esModule",{value:!0});jl.InlineValueFeature=void 0;const Eg=oe,TN=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Eg.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Eg.InlineValueRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n)))}}};jl.InlineValueFeature=TN;var ql={};Object.defineProperty(ql,"__esModule",{value:!0});ql.FoldingRangeFeature=void 0;const Pg=oe,RN=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Pg.FoldingRangeRefreshRequest.type),on:e=>{const n=Pg.FoldingRangeRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};ql.FoldingRangeFeature=RN;var Ul={};Object.defineProperty(Ul,"__esModule",{value:!0});Ul.InlayHintFeature=void 0;const gu=oe,wN=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(gu.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(gu.InlayHintRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n))),resolve:e=>this.connection.onRequest(gu.InlayHintResolveRequest.type,(n,r)=>e(n,r))}}};Ul.InlayHintFeature=wN;var Bl={};Object.defineProperty(Bl,"__esModule",{value:!0});Bl.DiagnosticFeature=void 0;const yi=oe,bN=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(yi.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(yi.DocumentDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(yi.DocumentDiagnosticRequest.partialResult,n))),onWorkspace:e=>this.connection.onRequest(yi.WorkspaceDiagnosticRequest.type,(n,r)=>e(n,r,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(yi.WorkspaceDiagnosticRequest.partialResult,n)))}}};Bl.DiagnosticFeature=bN;var Kl={};Object.defineProperty(Kl,"__esModule",{value:!0});Kl.MonikerFeature=void 0;const kN=oe,SN=t=>class extends t{get moniker(){return{on:e=>{const n=kN.MonikerRequest.type;return this.connection.onRequest(n,(r,i)=>e(r,i,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(n,r)))}}}};Kl.MonikerFeature=SN;Object.defineProperty(ne,"__esModule",{value:!0});ne.createConnection=ne.combineFeatures=ne.combineNotebooksFeatures=ne.combineLanguagesFeatures=ne.combineWorkspaceFeatures=ne.combineWindowFeatures=ne.combineClientFeatures=ne.combineTracerFeatures=ne.combineTelemetryFeatures=ne.combineConsoleFeatures=ne._NotebooksImpl=ne._LanguagesImpl=ne.BulkUnregistration=ne.BulkRegistration=ne.ErrorMessageTracker=void 0;const O=oe,St=De,Mf=yt,z=Hn,CN=Dl,$N=Ol,EN=xl,PN=vn,AN=Ll,NN=Ml,IN=Fl,DN=Hl,ON=jl,xN=ql,LN=Ul,MN=Bl,FN=fr,HN=Kl;function yu(t){if(t!==null)return t}class jN{constructor(){this._messages=Object.create(null)}add(e){let n=this._messages[e];n||(n=0),n++,this._messages[e]=n}sendErrors(e){Object.keys(this._messages).forEach(n=>{e.window.showErrorMessage(n)})}}ne.ErrorMessageTracker=jN;class Ag{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(O.MessageType.Error,e)}warn(e){this.send(O.MessageType.Warning,e)}info(e){this.send(O.MessageType.Info,e)}log(e){this.send(O.MessageType.Log,e)}debug(e){this.send(O.MessageType.Debug,e)}send(e,n){this._rawConnection&&this._rawConnection.sendNotification(O.LogMessageNotification.type,{type:e,message:n}).catch(()=>{(0,O.RAL)().console.error("Sending log message failed")})}}class qN{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...n){let r={type:O.MessageType.Error,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(yu)}showWarningMessage(e,...n){let r={type:O.MessageType.Warning,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(yu)}showInformationMessage(e,...n){let r={type:O.MessageType.Info,message:e,actions:n};return this.connection.sendRequest(O.ShowMessageRequest.type,r).then(yu)}}const Ng=(0,AN.ShowDocumentFeature)((0,z.ProgressFeature)(qN));var Ig;(function(t){function e(){return new eT}t.create=e})(Ig||(ne.BulkRegistration=Ig={}));class eT{constructor(){this._registrations=[],this._registered=new Set}add(e,n){const r=St.string(e)?e:e.method;if(this._registered.has(r))throw new Error(`${r} is already added to this registration`);const i=Mf.generateUuid();this._registrations.push({id:i,method:r,registerOptions:n||{}}),this._registered.add(r)}asRegistrationParams(){return{registrations:this._registrations}}}var Dg;(function(t){function e(){return new Ff(void 0,[])}t.create=e})(Dg||(ne.BulkUnregistration=Dg={}));class Ff{constructor(e,n){this._connection=e,this._unregistrations=new Map,n.forEach(r=>{this._unregistrations.set(r.method,r)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let r of this._unregistrations.values())e.push(r);let n={unregisterations:e};this._connection.sendRequest(O.UnregistrationRequest.type,n).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){const n=St.string(e)?e:e.method,r=this._unregistrations.get(n);if(!r)return!1;let i={unregisterations:[r]};return this._connection.sendRequest(O.UnregistrationRequest.type,i).then(()=>{this._unregistrations.delete(n)},s=>{this._connection.console.info(`Un-registering request handler for ${r.id} failed.`)}),!0}}class Og{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,n,r){return e instanceof eT?this.registerMany(e):e instanceof Ff?this.registerSingle1(e,n,r):this.registerSingle2(e,n)}registerSingle1(e,n,r){const i=St.string(n)?n:n.method,s=Mf.generateUuid();let o={registrations:[{id:s,method:i,registerOptions:r||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(O.RegistrationRequest.type,o).then(a=>(e.add({id:s,method:i}),e),a=>(this.connection.console.info(`Registering request handler for ${i} failed.`),Promise.reject(a)))}registerSingle2(e,n){const r=St.string(e)?e:e.method,i=Mf.generateUuid();let s={registrations:[{id:i,method:r,registerOptions:n||{}}]};return this.connection.sendRequest(O.RegistrationRequest.type,s).then(o=>O.Disposable.create(()=>{this.unregisterSingle(i,r).catch(()=>{this.connection.console.info(`Un-registering capability with id ${i} failed.`)})}),o=>(this.connection.console.info(`Registering request handler for ${r} failed.`),Promise.reject(o)))}unregisterSingle(e,n){let r={unregisterations:[{id:e,method:n}]};return this.connection.sendRequest(O.UnregistrationRequest.type,r).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let n=e.asRegistrationParams();return this.connection.sendRequest(O.RegistrationRequest.type,n).then(()=>new Ff(this._connection,n.registrations.map(r=>({id:r.id,method:r.method}))),r=>(this.connection.console.info("Bulk registration failed."),Promise.reject(r)))}}class UN{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function n(i){return i&&!!i.edit}let r=n(e)?e:{edit:e};return this.connection.sendRequest(O.ApplyWorkspaceEditRequest.type,r)}}const xg=(0,NN.FileOperationsFeature)((0,$N.WorkspaceFoldersFeature)((0,CN.ConfigurationFeature)(UN)));class Lg{constructor(){this._trace=O.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,n){this._trace!==O.Trace.Off&&this.connection.sendNotification(O.LogTraceNotification.type,{message:e,verbose:this._trace===O.Trace.Verbose?n:void 0}).catch(()=>{})}}class Mg{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(O.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}}class tT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._LanguagesImpl=tT;const Fg=(0,xN.FoldingRangeFeature)((0,HN.MonikerFeature)((0,MN.DiagnosticFeature)((0,LN.InlayHintFeature)((0,ON.InlineValueFeature)((0,DN.TypeHierarchyFeature)((0,IN.LinkedEditingRangeFeature)((0,PN.SemanticTokensFeature)((0,EN.CallHierarchyFeature)(tT)))))))));class nT{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,z.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,n){return(0,z.attachPartialResult)(this.connection,n)}}ne._NotebooksImpl=nT;const Hg=(0,FN.NotebookSyncFeature)(nT);function rT(t,e){return function(n){return e(t(n))}}ne.combineConsoleFeatures=rT;function iT(t,e){return function(n){return e(t(n))}}ne.combineTelemetryFeatures=iT;function sT(t,e){return function(n){return e(t(n))}}ne.combineTracerFeatures=sT;function oT(t,e){return function(n){return e(t(n))}}ne.combineClientFeatures=oT;function aT(t,e){return function(n){return e(t(n))}}ne.combineWindowFeatures=aT;function cT(t,e){return function(n){return e(t(n))}}ne.combineWorkspaceFeatures=cT;function lT(t,e){return function(n){return e(t(n))}}ne.combineLanguagesFeatures=lT;function uT(t,e){return function(n){return e(t(n))}}ne.combineNotebooksFeatures=uT;function BN(t,e){function n(i,s,o){return i&&s?o(i,s):i||s}return{__brand:"features",console:n(t.console,e.console,rT),tracer:n(t.tracer,e.tracer,sT),telemetry:n(t.telemetry,e.telemetry,iT),client:n(t.client,e.client,oT),window:n(t.window,e.window,aT),workspace:n(t.workspace,e.workspace,cT),languages:n(t.languages,e.languages,lT),notebooks:n(t.notebooks,e.notebooks,uT)}}ne.combineFeatures=BN;function KN(t,e,n){const r=n&&n.console?new(n.console(Ag)):new Ag,i=t(r);r.rawAttach(i);const s=n&&n.tracer?new(n.tracer(Lg)):new Lg,o=n&&n.telemetry?new(n.telemetry(Mg)):new Mg,a=n&&n.client?new(n.client(Og)):new Og,c=n&&n.window?new(n.window(Ng)):new Ng,l=n&&n.workspace?new(n.workspace(xg)):new xg,u=n&&n.languages?new(n.languages(Fg)):new Fg,f=n&&n.notebooks?new(n.notebooks(Hg)):new Hg,h=[r,s,o,a,c,l,u,f];function p(m){return m instanceof Promise?m:St.thenable(m)?new Promise((g,b)=>{m.then(F=>g(F),F=>b(F))}):Promise.resolve(m)}let d,y,w,_={listen:()=>i.listen(),sendRequest:(m,...g)=>i.sendRequest(St.string(m)?m:m.method,...g),onRequest:(m,g)=>i.onRequest(m,g),sendNotification:(m,g)=>{const b=St.string(m)?m:m.method;return i.sendNotification(b,g)},onNotification:(m,g)=>i.onNotification(m,g),onProgress:i.onProgress,sendProgress:i.sendProgress,onInitialize:m=>(y=m,{dispose:()=>{y=void 0}}),onInitialized:m=>i.onNotification(O.InitializedNotification.type,m),onShutdown:m=>(d=m,{dispose:()=>{d=void 0}}),onExit:m=>(w=m,{dispose:()=>{w=void 0}}),get console(){return r},get telemetry(){return o},get tracer(){return s},get client(){return a},get window(){return c},get workspace(){return l},get languages(){return u},get notebooks(){return f},onDidChangeConfiguration:m=>i.onNotification(O.DidChangeConfigurationNotification.type,m),onDidChangeWatchedFiles:m=>i.onNotification(O.DidChangeWatchedFilesNotification.type,m),__textDocumentSync:void 0,onDidOpenTextDocument:m=>i.onNotification(O.DidOpenTextDocumentNotification.type,m),onDidChangeTextDocument:m=>i.onNotification(O.DidChangeTextDocumentNotification.type,m),onDidCloseTextDocument:m=>i.onNotification(O.DidCloseTextDocumentNotification.type,m),onWillSaveTextDocument:m=>i.onNotification(O.WillSaveTextDocumentNotification.type,m),onWillSaveTextDocumentWaitUntil:m=>i.onRequest(O.WillSaveTextDocumentWaitUntilRequest.type,m),onDidSaveTextDocument:m=>i.onNotification(O.DidSaveTextDocumentNotification.type,m),sendDiagnostics:m=>i.sendNotification(O.PublishDiagnosticsNotification.type,m),onHover:m=>i.onRequest(O.HoverRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),onCompletion:m=>i.onRequest(O.CompletionRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCompletionResolve:m=>i.onRequest(O.CompletionResolveRequest.type,m),onSignatureHelp:m=>i.onRequest(O.SignatureHelpRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),onDeclaration:m=>i.onRequest(O.DeclarationRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDefinition:m=>i.onRequest(O.DefinitionRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onTypeDefinition:m=>i.onRequest(O.TypeDefinitionRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onImplementation:m=>i.onRequest(O.ImplementationRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onReferences:m=>i.onRequest(O.ReferencesRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentHighlight:m=>i.onRequest(O.DocumentHighlightRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentSymbol:m=>i.onRequest(O.DocumentSymbolRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onWorkspaceSymbol:m=>i.onRequest(O.WorkspaceSymbolRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onWorkspaceSymbolResolve:m=>i.onRequest(O.WorkspaceSymbolResolveRequest.type,m),onCodeAction:m=>i.onRequest(O.CodeActionRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCodeActionResolve:m=>i.onRequest(O.CodeActionResolveRequest.type,(g,b)=>m(g,b)),onCodeLens:m=>i.onRequest(O.CodeLensRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onCodeLensResolve:m=>i.onRequest(O.CodeLensResolveRequest.type,(g,b)=>m(g,b)),onDocumentFormatting:m=>i.onRequest(O.DocumentFormattingRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),onDocumentRangeFormatting:m=>i.onRequest(O.DocumentRangeFormattingRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),onDocumentOnTypeFormatting:m=>i.onRequest(O.DocumentOnTypeFormattingRequest.type,(g,b)=>m(g,b)),onRenameRequest:m=>i.onRequest(O.RenameRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),onPrepareRename:m=>i.onRequest(O.PrepareRenameRequest.type,(g,b)=>m(g,b)),onDocumentLinks:m=>i.onRequest(O.DocumentLinkRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onDocumentLinkResolve:m=>i.onRequest(O.DocumentLinkResolveRequest.type,(g,b)=>m(g,b)),onDocumentColor:m=>i.onRequest(O.DocumentColorRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onColorPresentation:m=>i.onRequest(O.ColorPresentationRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onFoldingRanges:m=>i.onRequest(O.FoldingRangeRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onSelectionRanges:m=>i.onRequest(O.SelectionRangeRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),(0,z.attachPartialResult)(i,g))),onExecuteCommand:m=>i.onRequest(O.ExecuteCommandRequest.type,(g,b)=>m(g,b,(0,z.attachWorkDone)(i,g),void 0)),dispose:()=>i.dispose()};for(let m of h)m.attach(_);return i.onRequest(O.InitializeRequest.type,m=>{e.initialize(m),St.string(m.trace)&&(s.trace=O.Trace.fromString(m.trace));for(let g of h)g.initialize(m.capabilities);if(y){let g=y(m,new O.CancellationTokenSource().token,(0,z.attachWorkDone)(i,m),void 0);return p(g).then(b=>{if(b instanceof O.ResponseError)return b;let F=b;F||(F={capabilities:{}});let W=F.capabilities;W||(W={},F.capabilities=W),W.textDocumentSync===void 0||W.textDocumentSync===null?W.textDocumentSync=St.number(_.__textDocumentSync)?_.__textDocumentSync:O.TextDocumentSyncKind.None:!St.number(W.textDocumentSync)&&!St.number(W.textDocumentSync.change)&&(W.textDocumentSync.change=St.number(_.__textDocumentSync)?_.__textDocumentSync:O.TextDocumentSyncKind.None);for(let X of h)X.fillServerCapabilities(W);return F})}else{let g={capabilities:{textDocumentSync:O.TextDocumentSyncKind.None}};for(let b of h)b.fillServerCapabilities(g.capabilities);return g}}),i.onRequest(O.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,d)return d(new O.CancellationTokenSource().token)}),i.onNotification(O.ExitNotification.type,()=>{try{w&&w()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),i.onNotification(O.SetTraceNotification.type,m=>{s.trace=O.Trace.fromString(m.value)}),_}ne.createConnection=KN;(function(t){var e=Oe&&Oe.__createBinding||(Object.create?function(c,l,u,f){f===void 0&&(f=u);var h=Object.getOwnPropertyDescriptor(l,u);(!h||("get"in h?!l.__esModule:h.writable||h.configurable))&&(h={enumerable:!0,get:function(){return l[u]}}),Object.defineProperty(c,f,h)}:function(c,l,u,f){f===void 0&&(f=u),c[f]=l[u]}),n=Oe&&Oe.__exportStar||function(c,l){for(var u in c)u!=="default"&&!Object.prototype.hasOwnProperty.call(l,u)&&e(l,c,u)};Object.defineProperty(t,"__esModule",{value:!0}),t.ProposedFeatures=t.NotebookDocuments=t.TextDocuments=t.SemanticTokensBuilder=void 0;const r=vn;Object.defineProperty(t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return r.SemanticTokensBuilder}});const i=Il;n(oe,t);const s=Ls;Object.defineProperty(t,"TextDocuments",{enumerable:!0,get:function(){return s.TextDocuments}});const o=fr;Object.defineProperty(t,"NotebookDocuments",{enumerable:!0,get:function(){return o.NotebookDocuments}}),n(ne,t);var a;(function(c){c.all={__brand:"features",languages:i.InlineCompletionFeature}})(a||(t.ProposedFeatures=a={}))})(Nf);var WN=oe;(function(t){var e=Oe&&Oe.__createBinding||(Object.create?function(a,c,l,u){u===void 0&&(u=l);var f=Object.getOwnPropertyDescriptor(c,l);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(a,u,f)}:function(a,c,l,u){u===void 0&&(u=l),a[u]=c[l]}),n=Oe&&Oe.__exportStar||function(a,c){for(var l in a)l!=="default"&&!Object.prototype.hasOwnProperty.call(c,l)&&e(c,a,l)};Object.defineProperty(t,"__esModule",{value:!0}),t.createConnection=void 0;const r=Nf;n(WN,t),n(Nf,t);let i=!1;const s={initialize:a=>{},get shutdownReceived(){return i},set shutdownReceived(a){i=a},exit:a=>{}};function o(a,c,l,u){let f,h,p,d;a!==void 0&&a.__brand==="features"&&(f=a,a=c,c=l,l=u),r.ConnectionStrategy.is(a)||r.ConnectionOptions.is(a)?d=a:(h=a,p=c,d=l);const y=w=>(0,r.createProtocolConnection)(h,p,w,d);return(0,r.createConnection)(y,s,f)}t.createConnection=o})(L);function jg(t,e){const n={stacks:t,tokens:e};return GN(n),n.stacks.flat().forEach(i=>{i.property=void 0}),fT(n.stacks).map(i=>i[i.length-1])}function Ph(t){const{next:e,cardinalities:n,visited:r,plus:i}=t,s=[],o=e.feature;if(r.has(o))return[];or(o)||r.add(o);let a,c=o;for(;c.$container;)if(or(c.$container)){a=c.$container;break}else if(vy(c.$container))c=c.$container;else break;if(sR(c.cardinality)){const l=Er({next:{feature:c,type:e.type},cardinalities:n,visited:r,plus:i});for(const u of l)i.add(u.feature);s.push(...l)}if(a){const l=a.elements.indexOf(c);l!==void 0&&l<a.elements.length-1&&s.push(...dT({feature:a,type:e.type},l+1,n,r,i)),s.every(u=>is(u.feature.cardinality,u.feature)||is(n.get(u.feature))||i.has(u.feature))&&s.push(...Ph({next:{feature:a,type:e.type},cardinalities:n,visited:r,plus:i}))}return s}function Hf(t){return Xe(t)&&(t={feature:t}),Er({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Er(t){var e,n,r;const{next:i,cardinalities:s,visited:o,plus:a}=t;if(i===void 0)return[];const{feature:c,type:l}=i;if(or(c))return o.has(c)?[]:(o.add(c),dT(i,0,s,o,a).map(u=>To(u,c.cardinality,s)));if(qf(c)||Uf(c))return c.elements.flatMap(u=>Er({next:{feature:u,type:l,property:i.property},cardinalities:s,visited:o,plus:a})).map(u=>To(u,c.cardinality,s));if(en(c)){const u={feature:c.terminal,type:l,property:(e=i.property)!==null&&e!==void 0?e:c.feature};return Er({next:u,cardinalities:s,visited:o,plus:a}).map(f=>To(f,c.cardinality,s))}else{if(Rs(c))return Ph({next:{feature:c,type:tl(c),property:(n=i.property)!==null&&n!==void 0?n:c.feature},cardinalities:s,visited:o,plus:a});if(Tn(c)&&tt(c.rule.ref)){const u=c.rule.ref,f={feature:u.definition,type:u.fragment||u.dataType?void 0:(r=bs(u))!==null&&r!==void 0?r:u.name,property:i.property};return Er({next:f,cardinalities:s,visited:o,plus:a}).map(h=>To(h,c.cardinality,s))}else return[i]}}function To(t,e,n){return n.set(t.feature,e),t}function dT(t,e,n,r,i){var s;const o=[];let a;for(;e<t.feature.elements.length&&(a={feature:t.feature.elements[e++],type:t.type},o.push(...Er({next:a,cardinalities:n,visited:r,plus:i})),!!is((s=a.feature.cardinality)!==null&&s!==void 0?s:n.get(a.feature),a.feature)););return o}function GN(t){for(const e of t.tokens){const n=fT(t.stacks,e);t.stacks=n}}function fT(t,e){const n=[];for(const r of t)n.push(...zN(r,e));return n}function zN(t,e){const n=new Map,r=new Set(t.map(s=>s.feature).filter(VN)),i=[];for(;t.length>0;){const s=t.pop(),o=Ph({next:s,cardinalities:n,plus:r,visited:new Set}).filter(a=>e?Ah(a.feature,e):!0);for(const a of o)i.push([...t,a]);if(!o.every(a=>is(a.feature.cardinality,a.feature)||is(n.get(a.feature))))break}return i}function VN(t){if(t.cardinality==="+")return!0;const e=Dn(t,en);return!!(e&&e.cardinality==="+")}function Ah(t,e){if(At(t))return t.value===e.image;if(Tn(t))return YN(t.rule.ref,e);if(ws(t)){const n=Ay(t);if(n)return Ah(n,e)}return!1}function YN(t,e){return tt(t)?Hf(t.definition).some(r=>Ah(r.feature,e)):zn(t)?nl(t).test(e.image):!1}function XN(t){const e=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.triggerCharacters)!==null&&i!==void 0?i:[]}))),n=Array.from(new Set(t.flatMap(r=>{var i;return(i=r==null?void 0:r.allCommitCharacters)!==null&&i!==void 0?i:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:n.length>0?n:void 0}}class hT{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection,this.documentationProvider=e.documentation.DocumentationProvider}async getCompletion(e,n,r){const i=[],s=this.buildContexts(e,n.position),o=(l,u)=>{const f=this.fillCompletionItem(l,u);f&&i.push(f)},a=l=>At(l.feature)?l.feature.value:l.feature,c=[];for(const l of s)if(await Promise.all(ke(l.features).distinct(a).exclude(c).map(u=>this.completionFor(l,u,o))),c.push(...l.features),!this.continueCompletion(i))break;return L.CompletionList.create(this.deduplicateItems(i),!0)}deduplicateItems(e){return ke(e).distinct(n=>`${n.kind}_${n.label}_${n.detail}`).toArray()}findFeaturesAt(e,n){const r=e.getText({start:L.Position.create(0,0),end:e.positionAt(n)}),i=this.completionParser.parse(r),s=i.tokens;if(i.tokenIndex===0){const c=id(this.grammar),l=Hf({feature:c.definition,type:bs(c)});return s.length>0?(s.shift(),jg(l.map(u=>[u]),s)):l}const o=[...s].splice(i.tokenIndex);return jg([i.elementStack.map(c=>({feature:c}))],o)}*buildContexts(e,n){var r,i;const s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument,a=o.getText(),c=o.offsetAt(n),l={document:e,textDocument:o,offset:c,position:n},u=this.findDataTypeRuleStart(s,c);if(u){const[m,g]=u,b=(r=nd(s,m))===null||r===void 0?void 0:r.astNode;yield Object.assign(Object.assign({},l),{node:b,tokenOffset:m,tokenEndOffset:g,features:this.findFeaturesAt(o,m)})}const{nextTokenStart:f,nextTokenEnd:h,previousTokenStart:p,previousTokenEnd:d}=this.backtrackToAnyToken(a,c);let y=f;c<=f&&p!==void 0&&(y=p);const w=(i=nd(s,y))===null||i===void 0?void 0:i.astNode;let _=!0;if(p!==void 0&&d!==void 0&&d===c&&(yield Object.assign(Object.assign({},l),{node:w,tokenOffset:p,tokenEndOffset:d,features:this.findFeaturesAt(o,p)}),_=this.performNextTokenCompletion(e,a.substring(p,d),p,d),_&&(yield Object.assign(Object.assign({},l),{node:w,tokenOffset:d,tokenEndOffset:d,features:this.findFeaturesAt(o,d)}))),w)_&&(yield Object.assign(Object.assign({},l),{node:w,tokenOffset:f,tokenEndOffset:h,features:this.findFeaturesAt(o,f)}));else{const m=id(this.grammar);if(!m)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:f,tokenEndOffset:h,features:Hf(m.definition)})}}performNextTokenCompletion(e,n,r,i){return new RegExp("\\P{L}$","u").test(n)}findDataTypeRuleStart(e,n){var r,i;let s=sr(e,n,this.grammarConfig.nameRegexp),o=!!(!((r=Dn(s==null?void 0:s.grammarSource,tt))===null||r===void 0)&&r.dataType);if(o){for(;o;)s=s==null?void 0:s.container,o=!!(!((i=Dn(s==null?void 0:s.grammarSource,tt))===null||i===void 0)&&i.dataType);if(s)return[s.offset,s.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,n){const r=this.lexer.tokenize(e).tokens;if(r.length===0)return{nextTokenStart:n,nextTokenEnd:n};let i;for(const s of r){if(s.startOffset>=n)return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};if(s.endOffset>=n)return{nextTokenStart:s.startOffset,nextTokenEnd:s.endOffset+1,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0};i=s}return{nextTokenStart:n,nextTokenEnd:n,previousTokenStart:i?i.startOffset:void 0,previousTokenEnd:i?i.endOffset+1:void 0}}completionFor(e,n,r){if(At(n.feature))return this.completionForKeyword(e,n.feature,r);if(ws(n.feature)&&e.node)return this.completionForCrossReference(e,n,r)}completionForCrossReference(e,n,r){const i=Dn(n.feature,en);let s=e.node;if(i&&s){n.type&&(s={$type:n.type,$container:s,$containerProperty:n.property},ky(this.astReflection,s));const o={reference:{$refText:""},container:s,property:i.feature};try{for(const a of this.getReferenceCandidates(o,e))r(e,this.createReferenceCompletionItem(a))}catch(a){console.error(a)}}}getReferenceCandidates(e,n){return this.scopeProvider.getScope(e).getAllElements()}createReferenceCompletionItem(e){const n=this.nodeKindProvider.getCompletionItemKind(e),r=this.getReferenceDocumentation(e);return{nodeDescription:e,kind:n,documentation:r,detail:e.type,sortText:"0"}}getReferenceDocumentation(e){if(!e.node)return;const n=this.documentationProvider.getDocumentation(e.node);if(n)return{kind:"markdown",value:n}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"Keyword",sortText:"1"})}getKeywordCompletionItemKind(e){return L.CompletionItemKind.Keyword}filterKeyword(e,n){return new RegExp("\\p{L}","u").test(n.value)}fillCompletionItem(e,n){var r,i;let s;if(typeof n.label=="string")s=n.label;else if("node"in n){const l=this.nameProvider.getName(n.node);if(!l)return;s=l}else if("nodeDescription"in n)s=n.nodeDescription.name;else return;let o;typeof((r=n.textEdit)===null||r===void 0?void 0:r.newText)=="string"?o=n.textEdit.newText:typeof n.insertText=="string"?o=n.insertText:o=s;const a=(i=n.textEdit)!==null&&i!==void 0?i:this.buildCompletionTextEdit(e,s,o);return a?{additionalTextEdits:n.additionalTextEdits,command:n.command,commitCharacters:n.commitCharacters,data:n.data,detail:n.detail,documentation:n.documentation,filterText:n.filterText,insertText:n.insertText,insertTextFormat:n.insertTextFormat,insertTextMode:n.insertTextMode,kind:n.kind,labelDetails:n.labelDetails,preselect:n.preselect,sortText:n.sortText,tags:n.tags,textEditText:n.textEditText,textEdit:a,label:s}:void 0}buildCompletionTextEdit(e,n,r){const s=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(s,n)){const o=e.textDocument.positionAt(e.tokenOffset),a=e.position;return{newText:r,range:{start:o,end:a}}}else return}}class JN{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,n,r){const i=e.parseResult.value;if(i.$cstNode){const s=i.$cstNode,o=sr(s,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,n)}}collectLocationLinks(e,n){var r;const i=this.findLink(e);if(i)return[L.LocationLink.create(i.targetDocument.textDocument.uri,((r=i.target.astNode.$cstNode)!==null&&r!==void 0?r:i.target).range,i.target.range,i.source.range)]}findLink(e){const n=this.references.findDeclarationNode(e);if(n!=null&&n.astNode){const r=tn(n.astNode);if(n&&r)return{source:e,target:n,targetDocument:r}}}}class QN{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return;const s=sr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);if(!s)return;const o=this.references.findDeclaration(s);if(o){const a=he.equals(tn(o).uri,e.uri),c={documentUri:e.uri,includeDeclaration:a};return this.references.findReferences(o,c).map(u=>this.createDocumentHighlight(u)).toArray()}}createDocumentHighlight(e){return L.DocumentHighlight.create(e.segment.range)}}class ZN{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e,n,r){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,n){const r=n.$cstNode,i=this.nameProvider.getNameNode(n);if(i&&r){const s=this.nameProvider.getName(n);return[{kind:this.nodeKindProvider.getSymbolKind(n),name:s||i.text,range:r.range,selectionRange:i.range,children:this.getChildSymbols(e,n)}]}else return this.getChildSymbols(e,n)||[]}getChildSymbols(e,n){const r=[];for(const i of Qc(n)){const s=this.getSymbol(e,i);r.push(...s)}if(r.length>0)return r}}class eI{constructor(e){this.workspaceManager=e.workspace.WorkspaceManager,this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock,this.serviceRegistry=e.ServiceRegistry;let n=!1;e.lsp.LanguageServer.onInitialize(r=>{var i,s;n=!!(!((s=(i=r.capabilities.workspace)===null||i===void 0?void 0:i.didChangeWatchedFiles)===null||s===void 0)&&s.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(r=>{n&&this.registerFileWatcher(e)})}registerFileWatcher(e){const n=[],r=ke(e.ServiceRegistry.all).flatMap(s=>s.LanguageMetaData.fileExtensions).map(s=>s.startsWith(".")?s.substring(1):s).distinct().toArray();r.length>0&&n.push({globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`});const i=ke(e.ServiceRegistry.all).flatMap(s=>{var o;return(o=s.LanguageMetaData.fileNames)!==null&&o!==void 0?o:[]}).distinct().toArray();if(i.length>0&&n.push({globPattern:i.length===1?`**/${i[0]}`:`**/{${i.join(",")}}`}),n.length>0){const s=e.lsp.Connection,o={watchers:n};s==null||s.client.register(L.DidChangeWatchedFilesNotification.type,o)}}fireDocumentUpdate(e,n){e=e.filter(r=>this.serviceRegistry.hasServices(r)),this.workspaceManager.ready.then(()=>{this.workspaceLock.write(r=>this.documentBuilder.update(e,n,r))}).catch(r=>{console.error("Workspace initialization failed. Could not perform document update.",r)})}didChangeContent(e){this.fireDocumentUpdate([it.parse(e.document.uri)],[])}didChangeWatchedFiles(e){const n=ke(e.changes).filter(i=>i.type!==L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>it.parse(i.uri)).toArray(),r=ke(e.changes).filter(i=>i.type===L.FileChangeType.Deleted).distinct(i=>i.uri).map(i=>it.parse(i.uri)).toArray();this.fireDocumentUpdate(n,r)}}class tI{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e,n,r){const i=[],s=o=>i.push(o);return this.collectFolding(e,s),i}collectFolding(e,n){var r;const i=(r=e.parseResult)===null||r===void 0?void 0:r.value;if(i){if(this.shouldProcessContent(i)){const s=Qt(i).iterator();let o;do if(o=s.next(),!o.done){const a=o.value;this.shouldProcess(a)&&this.collectObjectFolding(e,a,n),this.shouldProcessContent(a)||s.prune()}while(!o.done)}this.collectCommentFolding(e,i,n)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,n,r){const i=n.$cstNode;if(i){const s=this.toFoldingRange(e,i);s&&r(s)}}collectCommentFolding(e,n,r){const i=n.$cstNode;if(i){for(const s of kT(i))if(this.commentNames.includes(s.tokenType.name)){const o=this.toFoldingRange(e,s,L.FoldingRangeKind.Comment);o&&r(o)}}}toFoldingRange(e,n,r){const i=n.range,s=i.start;let o=i.end;if(!(o.line-s.line<2))return this.includeLastFoldingLine(n,r)||(o=e.textDocument.positionAt(e.textDocument.offsetAt({line:o.line,character:0})-1)),L.FoldingRange.create(s.line,o.line,s.character,o.character,r)}includeLastFoldingLine(e,n){if(n===L.FoldingRangeKind.Comment)return!1;const r=e.text,i=r.charAt(r.length-1);return!(i==="}"||i===")"||i==="]")}}class nI{match(e,n){if(e.length===0)return!0;let r=!1,i,s=0;const o=n.length;for(let a=0;a<o;a++){const c=n.charCodeAt(a),l=e.charCodeAt(s);if((c===l||this.toUpperCharCode(c)===this.toUpperCharCode(l))&&(r||(r=i===void 0||this.isWordTransition(i,c)),r&&s++,s===e.length))return!0;i=c}return!1}isWordTransition(e,n){return qg<=e&&e<=Ug&&rI<=n&&n<=iI||e===Bg&&n!==Bg}toUpperCharCode(e){return qg<=e&&e<=Ug?e-32:e}}const qg=97,Ug=122,rI=65,iI=90,Bg=95;class sI{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,n){var r,i;const s=(i=(r=e.parseResult)===null||r===void 0?void 0:r.value)===null||i===void 0?void 0:i.$cstNode;if(s){const o=e.textDocument.offsetAt(n.position),a=sr(s,o,this.grammarConfig.nameRegexp);if(a&&a.offset+a.length>o){const c=this.references.findDeclaration(a);if(c)return this.getAstNodeHoverContent(c);if(At(a.grammarSource))return this.getKeywordHoverContent(a.grammarSource)}}}getKeywordHoverContent(e){var n;let r=k_(e)?e.$comment:void 0;if(r||(r=(n=py(e.$cstNode,["ML_COMMENT"]))===null||n===void 0?void 0:n.text),r&&$_(r)){const i=C_(r).toMarkdown();if(i)return{contents:{kind:"markdown",value:i}}}}}class oI extends sI{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){const n=this.documentationProvider.getDocumentation(e);if(n)return{contents:{kind:"markdown",value:n}}}}const aI={[L.SemanticTokenTypes.class]:0,[L.SemanticTokenTypes.comment]:1,[L.SemanticTokenTypes.enum]:2,[L.SemanticTokenTypes.enumMember]:3,[L.SemanticTokenTypes.event]:4,[L.SemanticTokenTypes.function]:5,[L.SemanticTokenTypes.interface]:6,[L.SemanticTokenTypes.keyword]:7,[L.SemanticTokenTypes.macro]:8,[L.SemanticTokenTypes.method]:9,[L.SemanticTokenTypes.modifier]:10,[L.SemanticTokenTypes.namespace]:11,[L.SemanticTokenTypes.number]:12,[L.SemanticTokenTypes.operator]:13,[L.SemanticTokenTypes.parameter]:14,[L.SemanticTokenTypes.property]:15,[L.SemanticTokenTypes.regexp]:16,[L.SemanticTokenTypes.string]:17,[L.SemanticTokenTypes.struct]:18,[L.SemanticTokenTypes.type]:19,[L.SemanticTokenTypes.typeParameter]:20,[L.SemanticTokenTypes.variable]:21,[L.SemanticTokenTypes.decorator]:22},cI={[L.SemanticTokenModifiers.abstract]:1,[L.SemanticTokenModifiers.async]:2,[L.SemanticTokenModifiers.declaration]:4,[L.SemanticTokenModifiers.defaultLibrary]:8,[L.SemanticTokenModifiers.definition]:16,[L.SemanticTokenModifiers.deprecated]:32,[L.SemanticTokenModifiers.documentation]:64,[L.SemanticTokenModifiers.modification]:128,[L.SemanticTokenModifiers.readonly]:256,[L.SemanticTokenModifiers.static]:512};function lI(t){const e=[],n=[];let r=!0,i=!0,s=!0;for(const o of t)o&&(o.legend.tokenTypes.forEach((a,c)=>{const l=e[c];if(l&&l!==a)throw new Error(`Cannot merge '${l}' and '${a}' token types. They use the same index ${c}.`);e[c]=a}),o.legend.tokenModifiers.forEach((a,c)=>{const l=n[c];if(l&&l!==a)throw new Error(`Cannot merge '${l}' and '${a}' token modifier. They use the same index ${c}.`);n[c]=a}),o.full?typeof o.full=="object"&&!o.full.delta&&(i=!1):r=!1,o.range||(s=!1));return{legend:{tokenTypes:e,tokenModifiers:n},full:r&&{delta:i},range:s}}class uI extends L.SemanticTokensBuilder{constructor(){super(...arguments),this._tokens=[]}push(e,n,r,i,s){this._tokens.push({line:e,char:n,length:r,tokenType:i,tokenModifiers:s})}build(){return this.applyTokens(),super.build()}buildEdits(){return this.applyTokens(),super.buildEdits()}flush(){this.previousResult(this.id)}applyTokens(){for(const e of this._tokens.sort(this.compareTokens))super.push(e.line,e.char,e.length,e.tokenType,e.tokenModifiers);this._tokens=[]}compareTokens(e,n){return e.line===n.line?e.char-n.char:e.line-n.line}}class dI{constructor(e){this.tokensBuilders=new Map,e.shared.workspace.TextDocuments.onDidClose(n=>{this.tokensBuilders.delete(n.document.uri)}),e.shared.lsp.LanguageServer.onInitialize(n=>{var r;this.initialize((r=n.capabilities.textDocument)===null||r===void 0?void 0:r.semanticTokens)})}initialize(e){this.clientCapabilities=e}get tokenTypes(){return aI}get tokenModifiers(){return cI}get semanticTokensOptions(){return{legend:{tokenTypes:Object.keys(this.tokenTypes),tokenModifiers:Object.keys(this.tokenModifiers)},full:{delta:!0},range:!0}}async semanticHighlight(e,n,r=ce.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightRange(e,n,r=ce.None){return this.currentRange=n.range,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.flush(),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.build()}async semanticHighlightDelta(e,n,r=ce.None){return this.currentRange=void 0,this.currentDocument=e,this.currentTokensBuilder=this.getDocumentTokensBuilder(e),this.currentTokensBuilder.previousResult(n.previousResultId),await this.computeHighlighting(e,this.createAcceptor(),r),this.currentTokensBuilder.buildEdits()}createAcceptor(){return n=>{"line"in n?this.highlightToken({range:{start:{line:n.line,character:n.char},end:{line:n.line,character:n.char+n.length}},type:n.type,modifier:n.modifier}):"range"in n?this.highlightToken(n):"keyword"in n?this.highlightKeyword(n):"property"in n?this.highlightProperty(n):this.highlightNode({node:n.cst,type:n.type,modifier:n.modifier})}}getDocumentTokensBuilder(e){const n=this.tokensBuilders.get(e.uri.toString());if(n)return n;const r=new uI;return this.tokensBuilders.set(e.uri.toString(),r),r}async computeHighlighting(e,n,r){const i=e.parseResult.value,s=nr(i,{range:this.currentRange}).iterator();let o;do if(o=s.next(),!o.done){await rt(r);const a=o.value;this.highlightElement(a,n)==="prune"&&s.prune()}while(!o.done)}highlightToken(e){var n;const{range:r,type:i}=e;let s=e.modifier;if(this.currentRange&&!fy(r,this.currentRange)||!this.currentDocument||!this.currentTokensBuilder)return;const o=this.tokenTypes[i];let a=0;if(s!==void 0){typeof s=="string"&&(s=[s]);for(const u of s){const f=this.tokenModifiers[u];a|=f}}const c=r.start.line,l=r.end.line;if(c===l){const u=r.start.character,f=r.end.character-u;this.currentTokensBuilder.push(c,u,f,o,a)}else if(!((n=this.clientCapabilities)===null||n===void 0)&&n.multilineTokenSupport){const u=r.start.character,f=this.currentDocument.textDocument.offsetAt(r.start),h=this.currentDocument.textDocument.offsetAt(r.end);this.currentTokensBuilder.push(c,u,h-f,o,a)}else{const u=r.start;let f=this.currentDocument.textDocument.offsetAt({line:c+1,character:0});this.currentTokensBuilder.push(u.line,u.character,f-u.character-1,o,a);for(let h=c+1;h<l;h++){const p=f;f=this.currentDocument.textDocument.offsetAt({line:h+1,character:0}),this.currentTokensBuilder.push(h,0,f-p-1,o,a)}this.currentTokensBuilder.push(l,0,r.end.character,o,a)}}highlightProperty(e){const n=[];if(typeof e.index=="number"){const s=Bf(e.node.$cstNode,e.property,e.index);s&&n.push(s)}else n.push(...Ny(e.node.$cstNode,e.property));const{type:r,modifier:i}=e;for(const s of n)this.highlightNode({node:s,type:r,modifier:i})}highlightKeyword(e){const{node:n,keyword:r,type:i,index:s,modifier:o}=e,a=[];if(typeof s=="number"){const c=Iy(n.$cstNode,r,s);c&&a.push(c)}else a.push(...rR(n.$cstNode,r));for(const c of a)this.highlightNode({node:c,type:i,modifier:o})}highlightNode(e){const{node:n,type:r,modifier:i}=e,s=n.range;this.highlightToken({range:s,type:r,modifier:i})}}var Kg;(function(t){function e(r,i,s){const o=new Map;Object.entries(i).forEach(([l,u])=>o.set(u,l));let a=0,c=0;return n(r.data,5).map(l=>{a+=l[0],l[0]!==0&&(c=0),c+=l[1];const u=l[2];return{offset:s.textDocument.offsetAt({line:a,character:c}),tokenType:o.get(l[3]),tokenModifiers:l[4],text:s.textDocument.getText({start:{line:a,character:c},end:{line:a,character:c+u}})}})}t.decode=e;function n(r,i){const s=[];for(let o=0;o<r.length;o+=i){const a=r.slice(o,o+i);s.push(a)}return s}})(Kg||(Kg={}));function fI(t){const e=[],n=[];t.forEach(i=>{i!=null&&i.triggerCharacters&&e.push(...i.triggerCharacters),i!=null&&i.retriggerCharacters&&n.push(...i.retriggerCharacters)});const r={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:n.length>0?Array.from(new Set(n)).sort():void 0};return r.triggerCharacters?r:void 0}class hI{constructor(e){this.onInitializeEmitter=new oe.Emitter,this.onInitializedEmitter=new oe.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){Af(this.services),this.services.ServiceRegistry.all.forEach(e=>Af(e))}hasService(e){return this.services.ServiceRegistry.all.some(r=>e(r)!==void 0)}buildInitializeResult(e){var n,r,i,s;const o=this.services.lsp.DocumentUpdateHandler,a=(n=this.services.lsp.FileOperationHandler)===null||n===void 0?void 0:n.fileOperationOptions,c=this.services.ServiceRegistry.all,l=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.Formatter}),u=c.map(x=>{var $,te;return(te=($=x.lsp)===null||$===void 0?void 0:$.Formatter)===null||te===void 0?void 0:te.formatOnTypeOptions}).find(x=>!!x),f=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.CodeActionProvider}),h=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.SemanticTokenProvider}),p=lI(c.map(x=>{var $,te;return(te=($=x.lsp)===null||$===void 0?void 0:$.SemanticTokenProvider)===null||te===void 0?void 0:te.semanticTokensOptions})),d=(i=(r=this.services.lsp)===null||r===void 0?void 0:r.ExecuteCommandHandler)===null||i===void 0?void 0:i.commands,y=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.DocumentLinkProvider}),w=fI(c.map(x=>{var $,te;return(te=($=x.lsp)===null||$===void 0?void 0:$.SignatureHelp)===null||te===void 0?void 0:te.signatureHelpOptions})),_=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.TypeProvider}),m=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.ImplementationProvider}),g=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.CompletionProvider}),b=XN(c.map(x=>{var $,te;return(te=($=x.lsp)===null||$===void 0?void 0:$.CompletionProvider)===null||te===void 0?void 0:te.completionOptions})),F=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.ReferencesProvider}),W=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.DocumentSymbolProvider}),X=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.DefinitionProvider}),ye=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.DocumentHighlightProvider}),Te=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.FoldingRangeProvider}),Re=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.HoverProvider}),A=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.RenameProvider}),S=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.CallHierarchyProvider}),R=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.TypeHierarchyProvider}),C=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.CodeLensProvider}),I=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.DeclarationProvider}),P=this.hasService(x=>{var $;return($=x.lsp)===null||$===void 0?void 0:$.InlayHintProvider}),N=(s=this.services.lsp)===null||s===void 0?void 0:s.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:a},executeCommandProvider:d&&{commands:d},textDocumentSync:{change:oe.TextDocumentSyncKind.Incremental,openClose:!0,save:!!o.didSaveDocument,willSave:!!o.willSaveDocument,willSaveWaitUntil:!!o.willSaveDocumentWaitUntil},completionProvider:g?b:void 0,referencesProvider:F,documentSymbolProvider:W,definitionProvider:X,typeDefinitionProvider:_,documentHighlightProvider:ye,codeActionProvider:f,documentFormattingProvider:l,documentRangeFormattingProvider:l,documentOnTypeFormattingProvider:u,foldingRangeProvider:Te,hoverProvider:Re,renameProvider:A?{prepareProvider:!0}:void 0,semanticTokensProvider:h?p:void 0,signatureHelpProvider:w,implementationProvider:m,callHierarchyProvider:S?{}:void 0,typeHierarchyProvider:R?{}:void 0,documentLinkProvider:y?{resolveProvider:!1}:void 0,codeLensProvider:C?{resolveProvider:!1}:void 0,declarationProvider:I,inlayHintProvider:P?{resolveProvider:!1}:void 0,workspaceSymbolProvider:N?{resolveProvider:!!N.resolveSymbol}:void 0}}}initialized(e){this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}fireInitializedOnDefaultServices(e){const n=this.services.lsp.Connection,r=n?Object.assign(Object.assign({},e),{register:i=>n.client.register(oe.DidChangeConfigurationNotification.type,i),fetchConfiguration:i=>n.workspace.getConfiguration(i)}):e;this.services.workspace.ConfigurationProvider.initialized(r).catch(i=>console.error("Error in ConfigurationProvider initialization:",i)),this.services.workspace.WorkspaceManager.initialized(e).catch(i=>console.error("Error in WorkspaceManager initialization:",i))}}function pI(t){const e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");mI(e,t),gI(e,t),yI(e,t),vI(e,t),_I(e,t),RI(e,t),wI(e,t),bI(e,t),kI(e,t),CI(e,t),EI(e,t),PI(e,t),TI(e,t),AI(e,t),$I(e,t),NI(e,t),II(e,t),OI(e,t),LI(e,t),HI(e,t),jI(e,t),MI(e,t),xI(e,t),DI(e,t),SI(e,t),FI(e,t),e.onInitialize(r=>t.lsp.LanguageServer.initialize(r)),e.onInitialized(r=>{t.lsp.LanguageServer.initialized(r)}),t.workspace.TextDocuments.listen(e),e.listen()}function mI(t,e){const n=e.lsp.DocumentUpdateHandler,r=e.workspace.TextDocuments;n.didOpenDocument&&r.onDidOpen(i=>n.didOpenDocument(i)),n.didChangeContent&&r.onDidChangeContent(i=>n.didChangeContent(i)),n.didCloseDocument&&r.onDidClose(i=>n.didCloseDocument(i)),n.didSaveDocument&&r.onDidSave(i=>n.didSaveDocument(i)),n.willSaveDocument&&r.onWillSave(i=>n.willSaveDocument(i)),n.willSaveDocumentWaitUntil&&r.onWillSaveWaitUntil(i=>n.willSaveDocumentWaitUntil(i)),n.didChangeWatchedFiles&&t.onDidChangeWatchedFiles(i=>n.didChangeWatchedFiles(i))}function gI(t,e){const n=e.lsp.FileOperationHandler;n&&(n.didCreateFiles&&t.workspace.onDidCreateFiles(r=>n.didCreateFiles(r)),n.didRenameFiles&&t.workspace.onDidRenameFiles(r=>n.didRenameFiles(r)),n.didDeleteFiles&&t.workspace.onDidDeleteFiles(r=>n.didDeleteFiles(r)),n.willCreateFiles&&t.workspace.onWillCreateFiles(r=>n.willCreateFiles(r)),n.willRenameFiles&&t.workspace.onWillRenameFiles(r=>n.willRenameFiles(r)),n.willDeleteFiles&&t.workspace.onWillDeleteFiles(r=>n.willDeleteFiles(r)))}function yI(t,e){const n=e.workspace.DocumentBuilder;n.onUpdate(async(r,i)=>{for(const s of i)t.sendDiagnostics({uri:s.toString(),diagnostics:[]})}),n.onDocumentPhase(q.Validated,async r=>{r.diagnostics&&t.sendDiagnostics({uri:r.uri.toString(),diagnostics:r.diagnostics})})}function vI(t,e){t.onCompletion(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CompletionProvider)===null||a===void 0?void 0:a.getCompletion(r,i,s)},e,q.IndexedReferences))}function _I(t,e){t.onReferences(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ReferencesProvider)===null||a===void 0?void 0:a.findReferences(r,i,s)},e,q.IndexedReferences))}function TI(t,e){t.onCodeAction(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeActionProvider)===null||a===void 0?void 0:a.getCodeActions(r,i,s)},e,q.Validated))}function RI(t,e){t.onDocumentSymbol(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentSymbolProvider)===null||a===void 0?void 0:a.getSymbols(r,i,s)},e,q.Parsed))}function wI(t,e){t.onDefinition(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DefinitionProvider)===null||a===void 0?void 0:a.getDefinition(r,i,s)},e,q.IndexedReferences))}function bI(t,e){t.onTypeDefinition(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.TypeProvider)===null||a===void 0?void 0:a.getTypeDefinition(r,i,s)},e,q.IndexedReferences))}function kI(t,e){t.onImplementation(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.ImplementationProvider)===null||a===void 0?void 0:a.getImplementation(r,i,s)},e,q.IndexedReferences))}function SI(t,e){t.onDeclaration(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DeclarationProvider)===null||a===void 0?void 0:a.getDeclaration(r,i,s)},e,q.IndexedReferences))}function CI(t,e){t.onDocumentHighlight(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentHighlightProvider)===null||a===void 0?void 0:a.getDocumentHighlight(r,i,s)},e,q.IndexedReferences))}function $I(t,e){t.onHover(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.HoverProvider)===null||a===void 0?void 0:a.getHoverContent(r,i,s)},e,q.IndexedReferences))}function EI(t,e){t.onFoldingRanges(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.FoldingRangeProvider)===null||a===void 0?void 0:a.getFoldingRanges(r,i,s)},e,q.Parsed))}function PI(t,e){t.onDocumentFormatting(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocument(r,i,s)},e,q.Parsed)),t.onDocumentRangeFormatting(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentRange(r,i,s)},e,q.Parsed)),t.onDocumentOnTypeFormatting(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.Formatter)===null||a===void 0?void 0:a.formatDocumentOnType(r,i,s)},e,q.Parsed))}function AI(t,e){t.onRenameRequest(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.rename(r,i,s)},e,q.IndexedReferences)),t.onPrepareRename(et((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.RenameProvider)===null||a===void 0?void 0:a.prepareRename(r,i,s)},e,q.IndexedReferences))}function NI(t,e){t.languages.inlayHint.on(_n((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.InlayHintProvider)===null||a===void 0?void 0:a.getInlayHints(r,i,s)},e,q.IndexedReferences))}function II(t,e){const n={data:[]};t.languages.semanticTokens.on(_n((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlight(i,s,o):n},e,q.IndexedReferences)),t.languages.semanticTokens.onDelta(_n((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightDelta(i,s,o):n},e,q.IndexedReferences)),t.languages.semanticTokens.onRange(_n((r,i,s,o)=>{var a;return!((a=r.lsp)===null||a===void 0)&&a.SemanticTokenProvider?r.lsp.SemanticTokenProvider.semanticHighlightRange(i,s,o):n},e,q.IndexedReferences))}function DI(t,e){t.onDidChangeConfiguration(n=>{n.settings&&e.workspace.ConfigurationProvider.updateConfiguration(n)})}function OI(t,e){const n=e.lsp.ExecuteCommandHandler;n&&t.onExecuteCommand(async(r,i)=>{var s;try{return await n.executeCommand(r.command,(s=r.arguments)!==null&&s!==void 0?s:[],i)}catch(o){return Sn(o)}})}function xI(t,e){t.onDocumentLinks(_n((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.DocumentLinkProvider)===null||a===void 0?void 0:a.getDocumentLinks(r,i,s)},e,q.Parsed))}function LI(t,e){t.onSignatureHelp(_n((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.SignatureHelp)===null||a===void 0?void 0:a.provideSignatureHelp(r,i,s)},e,q.IndexedReferences))}function MI(t,e){t.onCodeLens(_n((n,r,i,s)=>{var o,a;return(a=(o=n.lsp)===null||o===void 0?void 0:o.CodeLensProvider)===null||a===void 0?void 0:a.provideCodeLens(r,i,s)},e,q.IndexedReferences))}function FI(t,e){var n;const r=e.lsp.WorkspaceSymbolProvider;if(r){const i=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(o,a)=>{try{return await i.waitUntil(q.IndexedContent,a),await r.getSymbols(o,a)}catch(c){return Sn(c)}});const s=(n=r.resolveSymbol)===null||n===void 0?void 0:n.bind(r);s&&t.onWorkspaceSymbolResolve(async(o,a)=>{try{return await i.waitUntil(q.IndexedContent,a),await s(o,a)}catch(c){return Sn(c)}})}}function HI(t,e){t.languages.callHierarchy.onPrepare(_n(async(n,r,i,s)=>{var o;if(!((o=n.lsp)===null||o===void 0)&&o.CallHierarchyProvider){const a=await n.lsp.CallHierarchyProvider.prepareCallHierarchy(r,i,s);return a??null}return null},e,q.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(Jc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.incomingCalls(r,i);return o??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(Jc(async(n,r,i)=>{var s;if(!((s=n.lsp)===null||s===void 0)&&s.CallHierarchyProvider){const o=await n.lsp.CallHierarchyProvider.outgoingCalls(r,i);return o??null}return null},e))}function jI(t,e){e.ServiceRegistry.all.some(n=>{var r;return(r=n.lsp)===null||r===void 0?void 0:r.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(_n(async(n,r,i,s)=>{var o,a;const c=await((a=(o=n.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||a===void 0?void 0:a.prepareTypeHierarchy(r,i,s));return c??null},e,q.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(Jc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.supertypes(r,i));return a??null},e)),t.languages.typeHierarchy.onSubtypes(Jc(async(n,r,i)=>{var s,o;const a=await((o=(s=n.lsp)===null||s===void 0?void 0:s.TypeHierarchyProvider)===null||o===void 0?void 0:o.subtypes(r,i));return a??null},e)))}function Jc(t,e){const n=e.ServiceRegistry;return async(r,i)=>{const s=it.parse(r.item.uri),o=await Nh(e,i,s,q.IndexedReferences);if(o)return o;if(!n.hasServices(s)){const c=`Could not find service instance for uri: '${s}'`;return console.debug(c),Sn(new Error(c))}const a=n.getServices(s);try{return await t(a,r,i)}catch(c){return Sn(c)}}}function _n(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=it.parse(s.textDocument.uri),c=await Nh(e,o,a,n);if(c)return c;if(!i.hasServices(a)){const u=`Could not find service instance for uri: '${a}'`;return console.debug(u),Sn(new Error(u))}const l=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(l,u,s,o)}catch(u){return Sn(u)}}}function et(t,e,n){const r=e.workspace.LangiumDocuments,i=e.ServiceRegistry;return async(s,o)=>{const a=it.parse(s.textDocument.uri),c=await Nh(e,o,a,n);if(c)return c;if(!i.hasServices(a))return console.debug(`Could not find service instance for uri: '${a.toString()}'`),null;const l=i.getServices(a);try{const u=await r.getOrCreateDocument(a);return await t(l,u,s,o)}catch(u){return Sn(u)}}}async function Nh(t,e,n,r){if(r!==void 0){const i=t.workspace.DocumentBuilder;try{await i.waitUntil(r,n,e)}catch(s){return Sn(s)}}}function Sn(t){if(xs(t))return new oe.ResponseError(oe.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof oe.ResponseError)return t;throw t}class qI{getSymbolKind(e){return L.SymbolKind.Field}getCompletionItemKind(e){return L.CompletionItemKind.Reference}}class UI{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,n,r){const i=e.parseResult.value.$cstNode;if(!i)return[];const s=sr(i,e.textDocument.offsetAt(n.position),this.grammarConfig.nameRegexp);return s?this.getReferences(s,n,e):[]}getReferences(e,n,r){const i=[],s=this.references.findDeclaration(e);if(s){const o={includeDeclaration:n.context.includeDeclaration};this.references.findReferences(s,o).forEach(a=>{i.push(L.Location.create(a.sourceUri.toString(),a.segment.range))})}return i}}class BI{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,n,r){const i={},s=e.parseResult.value.$cstNode;if(!s)return;const o=e.textDocument.offsetAt(n.position),a=sr(s,o,this.grammarConfig.nameRegexp);if(!a)return;const c=this.references.findDeclaration(a);if(!c)return;const l={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(c,l).forEach(f=>{const h=jt.replace(f.segment.range,n.newName),p=f.sourceUri.toString();i[p]?i[p].push(h):i[p]=[h]}),{changes:i}}prepareRename(e,n,r){return this.renameNodeRange(e,n.position)}renameNodeRange(e,n){const r=e.parseResult.value.$cstNode,i=e.textDocument.offsetAt(n);if(r&&i){const s=sr(r,i,this.grammarConfig.nameRegexp);if(!s)return;if(this.references.findDeclaration(s)||this.isNameNode(s))return s.range}}isNameNode(e){return(e==null?void 0:e.astNode)&&R_(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}}class KI{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,n=ce.None){const r=[],i=e.query.toLowerCase();for(const s of this.indexManager.allElements())if(await rt(n),this.fuzzyMatcher.match(i,s.name)){const o=this.getWorkspaceSymbol(s);o&&r.push(o)}return r}getWorkspaceSymbol(e){const n=e.nameSegment;if(n)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:n.range,uri:e.documentUri.toString()}}}}class pT{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new L.Emitter,this._onDidOpen=new L.Emitter,this._onDidClose=new L.Emitter,this._onDidSave=new L.Emitter,this._onWillSave=new L.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(he.normalize(e))}set(e){const n=he.normalize(e.uri);let r=!0;this._syncedDocuments.has(n)&&(r=!1),this._syncedDocuments.set(n,e);const i=Object.freeze({document:e});return this._onDidOpen.fire(i),this._onDidChangeContent.fire(i),r}delete(e){const n=he.normalize(typeof e=="object"&&"uri"in e?e.uri:e),r=this._syncedDocuments.get(n);r!==void 0&&(this._syncedDocuments.delete(n),this._onDidClose.fire(Object.freeze({document:r})))}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=L.TextDocumentSyncKind.Incremental;const n=[];return n.push(e.onDidOpenTextDocument(r=>{const i=r.textDocument,s=he.normalize(i.uri),o=this._configuration.create(s,i.languageId,i.version,i.text);this._syncedDocuments.set(s,o);const a=Object.freeze({document:o});this._onDidOpen.fire(a),this._onDidChangeContent.fire(a)})),n.push(e.onDidChangeTextDocument(r=>{const i=r.textDocument,s=r.contentChanges;if(s.length===0)return;const{version:o}=i;if(o==null)throw new Error(`Received document change event for ${i.uri} without valid version identifier`);const a=he.normalize(i.uri);let c=this._syncedDocuments.get(a);c!==void 0&&(c=this._configuration.update(c,s,o),this._syncedDocuments.set(a,c),this._onDidChangeContent.fire(Object.freeze({document:c})))})),n.push(e.onDidCloseTextDocument(r=>{const i=he.normalize(r.textDocument.uri),s=this._syncedDocuments.get(i);s!==void 0&&(this._syncedDocuments.delete(i),this._onDidClose.fire(Object.freeze({document:s})))})),n.push(e.onWillSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onWillSave.fire(Object.freeze({document:i,reason:r.reason}))})),n.push(e.onWillSaveTextDocumentWaitUntil((r,i)=>{const s=this._syncedDocuments.get(he.normalize(r.textDocument.uri));return s!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:s,reason:r.reason}),i):[]})),n.push(e.onDidSaveTextDocument(r=>{const i=this._syncedDocuments.get(he.normalize(r.textDocument.uri));i!==void 0&&this._onDidSave.fire(Object.freeze({document:i}))})),L.Disposable.create(()=>{n.forEach(r=>r.dispose())})}}class WI{constructor(e){this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new L.Emitter,this._onDidSave=new L.Emitter,this._onDidChange=new L.Emitter,this._onDidClose=new L.Emitter,"listen"in e?this._cellTextDocuments=e:this._cellTextDocuments=new pT(e)}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(he.normalize(e))}getNotebookCell(e){const n=this.notebookCellMap.get(he.normalize(e));return n&&n[0]}findNotebookDocumentForCell(e){const n=typeof e=="string"||"scheme"in e?e:e.document,r=this.notebookCellMap.get(he.normalize(n));return r&&r[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){const n=new Pr,r=[];return r.push(this.cellTextDocuments.listen(n)),r.push(e.notebooks.synchronization.onDidOpenNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri);this.notebookDocuments.set(s,i.notebookDocument);for(const o of i.cellTextDocuments)n.openTextDocument({textDocument:o});this.updateCellMap(i.notebookDocument),this._onDidOpen.fire(i.notebookDocument)})),r.push(e.notebooks.synchronization.onDidChangeNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o===void 0)return;o.version=i.notebookDocument.version;const a=o.metadata;let c=!1;const l=i.change;l.metadata!==void 0&&(c=!0,o.metadata=l.metadata);const u=[],f=[],h=[],p=[];if(l.cells!==void 0){const m=l.cells;if(m.structure!==void 0){const g=m.structure.array;if(o.cells.splice(g.start,g.deleteCount,...g.cells!==void 0?g.cells:[]),m.structure.didOpen!==void 0)for(const b of m.structure.didOpen)n.openTextDocument({textDocument:b}),u.push(b.uri);if(m.structure.didClose)for(const b of m.structure.didClose)n.closeTextDocument({textDocument:b}),f.push(b.uri)}if(m.data!==void 0){const g=new Map(m.data.map(b=>[b.document,b]));for(let b=0;b<=o.cells.length;b++){const F=g.get(o.cells[b].document);if(F!==void 0){const W=o.cells.splice(b,1,F);if(h.push({old:W[0],new:F}),g.delete(F.document),g.size===0)break}}}if(m.textContent!==void 0)for(const g of m.textContent)n.changeTextDocument({textDocument:g.document,contentChanges:g.changes}),p.push(g.document.uri)}this.updateCellMap(o);const d={notebookDocument:o};c&&(d.metadata={old:a,new:o.metadata});const y=[];for(const m of u)y.push(this.getNotebookCell(m));const w=[];for(const m of f)w.push(this.getNotebookCell(m));const _=[];for(const m of p)_.push(this.getNotebookCell(m));(y.length>0||w.length>0||h.length>0||_.length>0)&&(d.cells={added:y,removed:w,changed:{data:h,textContent:_}}),(d.metadata!==void 0||d.cells!==void 0)&&this._onDidChange.fire(d)})),r.push(e.notebooks.synchronization.onDidSaveNotebookDocument(i=>{const s=this.getNotebookDocument(i.notebookDocument.uri);s!==void 0&&this._onDidSave.fire(s)})),r.push(e.notebooks.synchronization.onDidCloseNotebookDocument(i=>{const s=he.normalize(i.notebookDocument.uri),o=this.notebookDocuments.get(s);if(o!==void 0){this._onDidClose.fire(o);for(const a of i.cellTextDocuments)n.closeTextDocument({textDocument:a});this.notebookDocuments.delete(s);for(const a of o.cells)this.notebookCellMap.delete(a.document)}})),L.Disposable.create(()=>{r.forEach(i=>i.dispose())})}updateCellMap(e){for(const n of e.cells)this.notebookCellMap.set(n.document,[n,e])}}class Pr{onDidOpenTextDocument(e){return this.openHandler=e,L.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,L.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,L.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return Pr.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return Pr.NULL_DISPOSE}onDidSaveTextDocument(){return Pr.NULL_DISPOSE}}Pr.NULL_DISPOSE=Object.freeze({dispose:()=>{}});function GI(t){return Uc.merge(D_(t),zI(t))}function zI(t){return{lsp:{CompletionProvider:e=>new hT(e),DocumentSymbolProvider:e=>new ZN(e),HoverProvider:e=>new oI(e),FoldingRangeProvider:e=>new tI(e),ReferencesProvider:e=>new UI(e),DefinitionProvider:e=>new JN(e),DocumentHighlightProvider:e=>new QN(e),RenameProvider:e=>new BI(e)},shared:()=>t.shared}}function VI(t){return Uc.merge(O_(t),YI(t))}function YI(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new hI(e),DocumentUpdateHandler:e=>new eI(e),WorkspaceSymbolProvider:e=>new KI(e),NodeKindProvider:()=>new qI,FuzzyMatcher:()=>new nI},workspace:{TextDocuments:()=>new pT(Hc),NotebookDocuments:e=>new WI(e.workspace.TextDocuments)}}}var Ih=L;const Wg="AlgorithmType_Options",Ro="Bgp_cmds",Gg="Bgp_neighbour_options",vu="Bgp_neighbour_update_source_option",_u="Bgp_update_source_interface_types",dc="COMMON";function XI(t){return Qr.isInstance(t,dc)}const Tu="Configure_cmd",wo="Configure_cmds",zg="Crypto_cmd_option",Ru="Enable_cmds",wu="ExecTimeout_cmd",Vg="Generate_cmd_option",wr="Interface_fastethernet_cmds",br="Interface_gigabitethernet_cmds",jf="Interface_types";function JI(t){return Qr.isInstance(t,jf)}const vi="Interface_vlan_cmds",Yg="IP_cmd_option",Xg="Ip_cmd_options",Jg="Key_cmd_option",bo="Line_console_cmds",Qg="Line_types",_i="Line_vty_cmds",bu="Logging_cmd",ku="Login_cmd",Zg="No_ip_cmd_options",ey="No_options",ko="Ospf_cmds",ty="Ospf_interface_types",So="Rip_cmds",ny="Rip_interface_types",ry="Router_cmd_option",iy="Rsa_cmd_option",Su="Transport_cmd",sy="TransportInput_cmd",oy="UsageKeys_Option",ay="Username_cmd_option",Co="AlgorithmTypeOption",$o="Banner_cmd",Cu="Banner_cmd_option",$u="BANNER_MESSAGE",Eo="Bgp_cmd",Po="Bgp_neigbour_ebgp_multihop_option",Ao="Bgp_neighbor_cmd",No="Bgp_neighbour_Remote_as_option",Io="Bgp_network_cmd",Do="Bgp_router_id_cmd",Oo="Bgp_update_source_interface_number",xo="Bgp_update_source_interface_type_fastethernet",Lo="Bgp_update_source_interface_type_gigabitethernet",Mo="CarrierDelay_cmd",Eu="COMMENT",Fo="COMMENTLINE",Ho="Configure_cmd_options",jo="Crypto_cmd",qo="Description_cmd",Uo="Domainname_cmd",Pu="DOMAINNAME_INPUT",Bo="Duplex_cmd",Au="Duplex_option",Qi="Exit";function QI(t){return Qr.isInstance(t,Qi)}const Ko="Generate_cmd",Wo="Hostname_cmd",Go="Hostname_Input",zo="Interface_cmd",Vo="Interface_number",Yo="Interface_type_fastethernet",Xo="Interface_type_gigabitethernet",Jo="Interface_type_vlan",Nu="IP",Qo="IP_cmd",Zi="IP_cmd_interface";function cy(t){return Qr.isInstance(t,Zi)}const es="Ip_cmd_option_address";function ly(t){return Qr.isInstance(t,es)}const Zo="Ip_cmd_option_ospf",ea="Ip_Helper_cmd",ta="Key_cmd",na="Line_cmd",ts="Line_ExecTimeoutValue";function ZI(t){return Qr.isInstance(t,ts)}const ra="Line_LoggingOption",ia="Line_LoginOption",sa="Line_type_console",oa="Line_type_vty",aa="MD5Option",Iu="MD5Option_cmd",ca="Modulus_cmd",Du="MODULUS_INPUT",la="No_banner_cmd",ua="No_cmd",da="No_cmd_interface",Ou="No_cmd_interface_option",fa="No_ip_cmd",ha="No_ip_cmd_option_domain_lookup",pa="Ospf_cmd",ma="Ospf_default_information_cmd",xu="Ospf_default_information_cmd_options",ga="Ospf_network_cmd",ya="Ospf_passive_interface_cmd",va="Ospf_passive_interface_number",_a="Ospf_passive_interface_type_fastethernet",Ta="Ospf_passive_interface_type_gigabitethernet",Ra="Ospf_priority_cmd",Lu="OSPF_PROCESS_NUMBER",wa="Ospf_redistribute_cmd",Mu="Ospf_redistribute_cmd_options",ba="Ospf_router_id_cmd",ka="PasswordOption",Sa="Ping_cmd",Ca="PrivilegeOption",$a="Rip_cmd",Ea="Rip_default_information_cmd",Fu="Rip_default_information_cmd_options",Pa="Rip_network_cmd",Hu="Rip_no_cmd_options",Aa="Rip_no_cmds",Na="Rip_passive_interface_cmd",Ia="Rip_passive_interface_number",Da="Rip_passive_interface_type_fastethernet",Oa="Rip_passive_interface_type_gigabitethernet",ju="Rip_passive_Sub_Interface_number",xa="Rip_redistribute_cmd",qu="Rip_redistribute_cmd_options",La="Rip_version_cmd",Ma="Router_cmd",Fa="Rsa_cmd",Uu="Script",Ha="ScryptOption",Bu="ScryptOption_cmd",ja="SecretOption",qa="Sha256Option",Ku="Sha256Option_cmd",Ua="Show_cmd",Wu="Show_cmd_options",Ba="Shutdown_cmd",Ka="Speed_cmd",Wa="Speed_cmd_fe",Ga="SSH_cmd",Gu="SSHOptions",zu="Stat",Vu="SUBNETMASK",za="Transport_cmd_option",Va="TransportInputList",Yu="TransportProto",Ya="UsageKeys_cmd",Xa="Username_cmd",Xu="USERNAME_INPUT",Ju="USERNAME_PASSWORD_INPUT",Qu="VERSION_INPUT",Zu="WILDCARDMASK",Ja="Bgp_update_source_Sub_Interface_number",Qa="Sub_Interface_number",Za="Ospf_passive_Sub_Interface_number";class mT extends uy{getAllTypes(){return[Co,Wg,$u,$o,Cu,Eo,Ro,Po,Ao,No,Gg,vu,Io,Do,Ja,Oo,xo,Lo,_u,Eu,Fo,dc,Mo,Tu,Ho,wo,jo,zg,Pu,qo,Uo,Bo,Au,Ru,wu,Qi,Ko,Vg,Go,Wo,Nu,Qo,Zi,Yg,zo,wr,br,Vo,Yo,Xo,Jo,jf,vi,ea,es,Zo,Xg,ta,Jg,ts,ra,ia,na,bo,sa,oa,Qg,_i,bu,ku,aa,Iu,Du,ca,la,ua,da,Ou,fa,ha,Zg,ey,Lu,pa,ko,ma,xu,ty,ga,Za,ya,va,_a,Ta,Ra,wa,Mu,ba,ka,Sa,Ca,$a,So,Ea,Fu,ny,Pa,Hu,Aa,ju,Na,Ia,Da,Oa,xa,qu,La,Ma,ry,Fa,iy,Gu,Ga,Vu,Uu,Ha,Bu,ja,qa,Ku,Ua,Wu,Ba,Ka,Wa,zu,Qa,Va,sy,Yu,Su,za,Xu,Ju,oy,Ya,Xa,ay,Qu,Zu]}computeIsSubtype(e,n){switch(e){case Co:case ka:case Ca:case ja:return this.isSubtype(ay,n);case $o:case jo:case Wo:case zo:case Qo:case na:case ua:case Ma:case Xa:return this.isSubtype(wo,n);case Eo:case pa:case $a:return this.isSubtype(ry,n);case Po:case No:case vu:return this.isSubtype(Gg,n);case Ao:case Io:case Do:return this.isSubtype(Ro,n);case xo:case Lo:return this.isSubtype(_u,n);case _u:return this.isSubtype(vu,n);case Ja:return this.isSubtype(Oo,n);case Mo:case Wa:return this.isSubtype(wr,n);case Fo:return this.isSubtype(dc,n);case dc:return this.isSubtype(Ro,n)||this.isSubtype(wo,n)||this.isSubtype(Ru,n)||this.isSubtype(wr,n)||this.isSubtype(br,n)||this.isSubtype(vi,n)||this.isSubtype(bo,n)||this.isSubtype(_i,n)||this.isSubtype(ko,n)||this.isSubtype(So,n);case Tu:case Sa:case Ua:return this.isSubtype(Ru,n);case Ho:return this.isSubtype(Tu,n);case qo:case Zi:return this.isSubtype(wr,n)||this.isSubtype(br,n)||this.isSubtype(vi,n);case Uo:case Ga:return this.isSubtype(Yg,n);case Bo:case Ka:return this.isSubtype(br,n);case wu:case bu:case ku:return this.isSubtype(bo,n)||this.isSubtype(_i,n);case Qi:return this.isSubtype(Ro,n)||this.isSubtype(wo,n)||this.isSubtype(wr,n)||this.isSubtype(br,n)||this.isSubtype(vi,n)||this.isSubtype(bo,n)||this.isSubtype(_i,n)||this.isSubtype(ko,n)||this.isSubtype(So,n);case Ko:return this.isSubtype(Jg,n);case Yo:case Xo:case Jo:return this.isSubtype(jf,n);case es:case Zo:return this.isSubtype(Xg,n);case ea:return this.isSubtype(vi,n);case ta:return this.isSubtype(zg,n);case ts:return this.isSubtype(wu,n);case ra:return this.isSubtype(bu,n);case ia:return this.isSubtype(ku,n);case sa:case oa:return this.isSubtype(Qg,n);case aa:case Ha:case qa:return this.isSubtype(Wg,n);case ca:return this.isSubtype(oy,n);case la:case fa:return this.isSubtype(ey,n);case da:case Ba:return this.isSubtype(wr,n)||this.isSubtype(br,n);case ha:return this.isSubtype(Zg,n);case ma:case ga:case ya:case Ra:case wa:case ba:return this.isSubtype(ko,n);case _a:case Ta:return this.isSubtype(ty,n);case Za:return this.isSubtype(va,n);case Ea:case Pa:case Aa:case Na:case xa:case La:return this.isSubtype(So,n);case Da:case Oa:return this.isSubtype(ny,n);case Fa:return this.isSubtype(Vg,n);case Qa:return this.isSubtype(Vo,n)||this.isSubtype(Ia,n);case Su:return this.isSubtype(_i,n);case za:return this.isSubtype(Su,n);case Va:return this.isSubtype(sy,n);case Ya:return this.isSubtype(iy,n);default:return!1}}getReferenceType(e){const n=`${e.container.$type}:${e.property}`;switch(n){case"Ping_cmd:hostname":return Go;default:throw new Error(`${n} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case Co:return{name:Co,properties:[{name:"option"}]};case $o:return{name:$o,properties:[{name:"comment"},{name:"message"},{name:"option"}]};case Cu:return{name:Cu,properties:[{name:"option"}]};case $u:return{name:$u,properties:[{name:"message",defaultValue:[]}]};case Eo:return{name:Eo,properties:[{name:"asn"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Po:return{name:Po,properties:[{name:"multihop"}]};case Ao:return{name:Ao,properties:[{name:"comment"},{name:"neighbour"},{name:"option"}]};case No:return{name:No,properties:[{name:"remoteASnumber"}]};case Io:return{name:Io,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Do:return{name:Do,properties:[{name:"comment"},{name:"id"}]};case Oo:return{name:Oo,properties:[{name:"number"}]};case xo:return{name:xo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Lo:return{name:Lo,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Mo:return{name:Mo,properties:[{name:"comment"},{name:"seconds"}]};case Eu:return{name:Eu,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Fo:return{name:Fo,properties:[{name:"delim"},{name:"text",defaultValue:[]}]};case Ho:return{name:Ho,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case jo:return{name:jo,properties:[{name:"comment"},{name:"option"}]};case qo:return{name:qo,properties:[{name:"comment"},{name:"value"}]};case Uo:return{name:Uo,properties:[{name:"comment"},{name:"value"}]};case Pu:return{name:Pu,properties:[{name:"value"}]};case Bo:return{name:Bo,properties:[{name:"comment"},{name:"option"}]};case Au:return{name:Au,properties:[{name:"option"}]};case Qi:return{name:Qi,properties:[{name:"command"},{name:"comment"},{name:"lines",defaultValue:[]}]};case Ko:return{name:Ko,properties:[{name:"option"}]};case Wo:return{name:Wo,properties:[{name:"comment"},{name:"value"}]};case Go:return{name:Go,properties:[{name:"name"}]};case zo:return{name:zo,properties:[{name:"types"}]};case Vo:return{name:Vo,properties:[{name:"number"}]};case Yo:return{name:Yo,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Xo:return{name:Xo,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Jo:return{name:Jo,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case Nu:return{name:Nu,properties:[{name:"value"}]};case Qo:return{name:Qo,properties:[{name:"option"}]};case Zi:return{name:Zi,properties:[{name:"option"}]};case es:return{name:es,properties:[{name:"comment"},{name:"ip"},{name:"mask"}]};case Zo:return{name:Zo,properties:[{name:"comment"},{name:"option"}]};case ea:return{name:ea,properties:[{name:"comment"},{name:"value"}]};case ta:return{name:ta,properties:[{name:"option"}]};case na:return{name:na,properties:[{name:"command"},{name:"types"}]};case ts:return{name:ts,properties:[{name:"comment"},{name:"minutes"},{name:"seconds"}]};case ra:return{name:ra,properties:[{name:"comment"},{name:"option"}]};case ia:return{name:ia,properties:[{name:"comment"},{name:"option"}]};case sa:return{name:sa,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"number"},{name:"type"}]};case oa:return{name:oa,properties:[{name:"comment"},{name:"end"},{name:"lines",defaultValue:[]},{name:"start"},{name:"type"}]};case aa:return{name:aa,properties:[{name:"option"}]};case Iu:return{name:Iu,properties:[{name:"value"}]};case ca:return{name:ca,properties:[{name:"value"}]};case Du:return{name:Du,properties:[{name:"value"}]};case la:return{name:la,properties:[{name:"option"}]};case ua:return{name:ua,properties:[{name:"comment"},{name:"option"}]};case da:return{name:da,properties:[{name:"comment"},{name:"option"}]};case Ou:return{name:Ou,properties:[{name:"comment"}]};case fa:return{name:fa,properties:[{name:"option"}]};case ha:return{name:ha,properties:[{name:"type"}]};case pa:return{name:pa,properties:[{name:"comment"},{name:"lines",defaultValue:[]},{name:"process"}]};case ma:return{name:ma,properties:[{name:"comment"},{name:"option"}]};case xu:return{name:xu,properties:[{name:"option"}]};case ga:return{name:ga,properties:[{name:"area"},{name:"comment"},{name:"ip"},{name:"mask"}]};case ya:return{name:ya,properties:[{name:"types"}]};case va:return{name:va,properties:[{name:"number"}]};case _a:return{name:_a,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Ta:return{name:Ta,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Ra:return{name:Ra,properties:[{name:"comment"},{name:"value"}]};case Lu:return{name:Lu,properties:[{name:"value"}]};case wa:return{name:wa,properties:[{name:"comment"},{name:"option"}]};case Mu:return{name:Mu,properties:[{name:"option"}]};case ba:return{name:ba,properties:[{name:"comment"},{name:"id"}]};case ka:return{name:ka,properties:[{name:"value"}]};case Sa:return{name:Sa,properties:[{name:"comment"},{name:"hostname"},{name:"ip"}]};case Ca:return{name:Ca,properties:[{name:"value"}]};case $a:return{name:$a,properties:[{name:"comment"},{name:"lines",defaultValue:[]}]};case Ea:return{name:Ea,properties:[{name:"comment"},{name:"option"}]};case Fu:return{name:Fu,properties:[{name:"option"}]};case Pa:return{name:Pa,properties:[{name:"comment"},{name:"ip"}]};case Hu:return{name:Hu,properties:[{name:"options"}]};case Aa:return{name:Aa,properties:[{name:"comment"},{name:"options"}]};case Na:return{name:Na,properties:[{name:"types"}]};case Ia:return{name:Ia,properties:[{name:"number"}]};case Da:return{name:Da,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case Oa:return{name:Oa,properties:[{name:"comment"},{name:"number"},{name:"type"}]};case ju:return{name:ju,properties:[{name:"sub"}]};case xa:return{name:xa,properties:[{name:"comment"},{name:"option"}]};case qu:return{name:qu,properties:[{name:"option"}]};case La:return{name:La,properties:[{name:"RipVersion"}]};case Ma:return{name:Ma,properties:[{name:"option"}]};case Fa:return{name:Fa,properties:[{name:"option"}]};case Uu:return{name:Uu,properties:[{name:"script"}]};case Ha:return{name:Ha,properties:[{name:"option"}]};case Bu:return{name:Bu,properties:[{name:"value"}]};case ja:return{name:ja,properties:[{name:"value"}]};case qa:return{name:qa,properties:[{name:"option"}]};case Ku:return{name:Ku,properties:[{name:"value"}]};case Ua:return{name:Ua,properties:[{name:"options"}]};case Wu:return{name:Wu,properties:[{name:"comment"},{name:"option"}]};case Ba:return{name:Ba,properties:[{name:"comment"}]};case Ka:return{name:Ka,properties:[{name:"comment"},{name:"value"}]};case Wa:return{name:Wa,properties:[{name:"comment"},{name:"value"}]};case Ga:return{name:Ga,properties:[{name:"option"}]};case Gu:return{name:Gu,properties:[{name:"comment"},{name:"value"}]};case zu:return{name:zu,properties:[{name:"lines",defaultValue:[]}]};case Vu:return{name:Vu,properties:[{name:"value"}]};case za:return{name:za,properties:[{name:"option"}]};case Va:return{name:Va,properties:[{name:"comment"},{name:"options",defaultValue:[]}]};case Yu:return{name:Yu,properties:[{name:"option"}]};case Ya:return{name:Ya,properties:[{name:"option"}]};case Xa:return{name:Xa,properties:[{name:"comment"},{name:"name"},{name:"options",defaultValue:[]}]};case Xu:return{name:Xu,properties:[{name:"value"}]};case Ju:return{name:Ju,properties:[{name:"value"}]};case Qu:return{name:Qu,properties:[{name:"value"}]};case Zu:return{name:Zu,properties:[{name:"value"}]};case Ja:return{name:Ja,properties:[{name:"number"},{name:"sub"}]};case Qa:return{name:Qa,properties:[{name:"number"},{name:"sub"}]};case Za:return{name:Za,properties:[{name:"number"},{name:"sub"}]};default:return{name:e,properties:[]}}}}const Qr=new mT;let ec;const eD=()=>ec??(ec=yA(`{
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
}`)),tD={languageId:"cisco-ios",fileExtensions:[".ios"],caseInsensitive:!1,mode:"development"},nD={AstReflection:()=>new mT},rD={Grammar:()=>eD(),LanguageMetaData:()=>tD,parser:{}};var gT={exports:{}};(function(t){(function(e){const n="(0?\\d+|0x[a-f0-9]+)",r={fourOctet:new RegExp(`^${n}\\.${n}\\.${n}\\.${n}$`,"i"),threeOctet:new RegExp(`^${n}\\.${n}\\.${n}$`,"i"),twoOctet:new RegExp(`^${n}\\.${n}$`,"i"),longValue:new RegExp(`^${n}$`,"i")},i=new RegExp("^0[0-7]+$","i"),s=new RegExp("^0x[a-f0-9]+$","i"),o="%[0-9a-z]{1,}",a="(?:[0-9a-f]+::?)+",c={zoneIndex:new RegExp(o,"i"),native:new RegExp(`^(::)?(${a})?([0-9a-f]+)?(::)?(${o})?$`,"i"),deprecatedTransitional:new RegExp(`^(?:::)(${n}\\.${n}\\.${n}\\.${n}(${o})?)$`,"i"),transitional:new RegExp(`^((?:${a})|(?:::)(?:${a})?)${n}\\.${n}\\.${n}\\.${n}(${o})?$`,"i")};function l(d,y){if(d.indexOf("::")!==d.lastIndexOf("::"))return null;let w=0,_=-1,m=(d.match(c.zoneIndex)||[])[0],g,b;for(m&&(m=m.substring(1),d=d.replace(/%.+$/,""));(_=d.indexOf(":",_+1))>=0;)w++;if(d.substr(0,2)==="::"&&w--,d.substr(-2,2)==="::"&&w--,w>y)return null;for(b=y-w,g=":";b--;)g+="0:";return d=d.replace("::",g),d[0]===":"&&(d=d.slice(1)),d[d.length-1]===":"&&(d=d.slice(0,-1)),y=function(){const F=d.split(":"),W=[];for(let X=0;X<F.length;X++)W.push(parseInt(F[X],16));return W}(),{parts:y,zoneId:m}}function u(d,y,w,_){if(d.length!==y.length)throw new Error("ipaddr: cannot match CIDR for objects with different lengths");let m=0,g;for(;_>0;){if(g=w-_,g<0&&(g=0),d[m]>>g!==y[m]>>g)return!1;_-=w,m+=1}return!0}function f(d){if(s.test(d))return parseInt(d,16);if(d[0]==="0"&&!isNaN(parseInt(d[1],10))){if(i.test(d))return parseInt(d,8);throw new Error(`ipaddr: cannot parse ${d} as octal`)}return parseInt(d,10)}function h(d,y){for(;d.length<y;)d=`0${d}`;return d}const p={};p.IPv4=function(){function d(y){if(y.length!==4)throw new Error("ipaddr: ipv4 octet count should be 4");let w,_;for(w=0;w<y.length;w++)if(_=y[w],!(0<=_&&_<=255))throw new Error("ipaddr: ipv4 octet should fit in 8 bits");this.octets=y}return d.prototype.SpecialRanges={unspecified:[[new d([0,0,0,0]),8]],broadcast:[[new d([255,255,255,255]),32]],multicast:[[new d([224,0,0,0]),4]],linkLocal:[[new d([169,254,0,0]),16]],loopback:[[new d([127,0,0,0]),8]],carrierGradeNat:[[new d([100,64,0,0]),10]],private:[[new d([10,0,0,0]),8],[new d([172,16,0,0]),12],[new d([192,168,0,0]),16]],reserved:[[new d([192,0,0,0]),24],[new d([192,0,2,0]),24],[new d([192,88,99,0]),24],[new d([198,18,0,0]),15],[new d([198,51,100,0]),24],[new d([203,0,113,0]),24],[new d([240,0,0,0]),4]],as112:[[new d([192,175,48,0]),24],[new d([192,31,196,0]),24]],amt:[[new d([192,52,193,0]),24]]},d.prototype.kind=function(){return"ipv4"},d.prototype.match=function(y,w){let _;if(w===void 0&&(_=y,y=_[0],w=_[1]),y.kind()!=="ipv4")throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");return u(this.octets,y.octets,8,w)},d.prototype.prefixLengthFromSubnetMask=function(){let y=0,w=!1;const _={0:8,128:7,192:6,224:5,240:4,248:3,252:2,254:1,255:0};let m,g,b;for(m=3;m>=0;m-=1)if(g=this.octets[m],g in _){if(b=_[g],w&&b!==0)return null;b!==8&&(w=!0),y+=b}else return null;return 32-y},d.prototype.range=function(){return p.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){return this.octets.slice(0)},d.prototype.toIPv4MappedAddress=function(){return p.IPv6.parse(`::ffff:${this.toString()}`)},d.prototype.toNormalizedString=function(){return this.toString()},d.prototype.toString=function(){return this.octets.join(".")},d}(),p.IPv4.broadcastAddressFromCIDR=function(d){try{const y=this.parseCIDR(d),w=y[0].toByteArray(),_=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[];let g=0;for(;g<4;)m.push(parseInt(w[g],10)|parseInt(_[g],10)^255),g++;return new this(m)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},p.IPv4.isIPv4=function(d){return this.parser(d)!==null},p.IPv4.isValid=function(d){try{return new this(this.parser(d)),!0}catch{return!1}},p.IPv4.isValidCIDR=function(d){try{return this.parseCIDR(d),!0}catch{return!1}},p.IPv4.isValidFourPartDecimal=function(d){return!!(p.IPv4.isValid(d)&&d.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/))},p.IPv4.networkAddressFromCIDR=function(d){let y,w,_,m,g;try{for(y=this.parseCIDR(d),_=y[0].toByteArray(),g=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[],w=0;w<4;)m.push(parseInt(_[w],10)&parseInt(g[w],10)),w++;return new this(m)}catch{throw new Error("ipaddr: the address does not have IPv4 CIDR format")}},p.IPv4.parse=function(d){const y=this.parser(d);if(y===null)throw new Error("ipaddr: string is not formatted like an IPv4 Address");return new this(y)},p.IPv4.parseCIDR=function(d){let y;if(y=d.match(/^(.+)\/(\d+)$/)){const w=parseInt(y[2]);if(w>=0&&w<=32){const _=[this.parse(y[1]),w];return Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_}}throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range")},p.IPv4.parser=function(d){let y,w,_;if(y=d.match(r.fourOctet))return function(){const m=y.slice(1,6),g=[];for(let b=0;b<m.length;b++)w=m[b],g.push(f(w));return g}();if(y=d.match(r.longValue)){if(_=f(y[1]),_>4294967295||_<0)throw new Error("ipaddr: address outside defined range");return function(){const m=[];let g;for(g=0;g<=24;g+=8)m.push(_>>g&255);return m}().reverse()}else return(y=d.match(r.twoOctet))?function(){const m=y.slice(1,4),g=[];if(_=f(m[1]),_>16777215||_<0)throw new Error("ipaddr: address outside defined range");return g.push(f(m[0])),g.push(_>>16&255),g.push(_>>8&255),g.push(_&255),g}():(y=d.match(r.threeOctet))?function(){const m=y.slice(1,5),g=[];if(_=f(m[2]),_>65535||_<0)throw new Error("ipaddr: address outside defined range");return g.push(f(m[0])),g.push(f(m[1])),g.push(_>>8&255),g.push(_&255),g}():null},p.IPv4.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>32)throw new Error("ipaddr: invalid IPv4 prefix length");const y=[0,0,0,0];let w=0;const _=Math.floor(d/8);for(;w<_;)y[w]=255,w++;return _<4&&(y[_]=Math.pow(2,d%8)-1<<8-d%8),new this(y)},p.IPv6=function(){function d(y,w){let _,m;if(y.length===16)for(this.parts=[],_=0;_<=14;_+=2)this.parts.push(y[_]<<8|y[_+1]);else if(y.length===8)this.parts=y;else throw new Error("ipaddr: ipv6 part count should be 8 or 16");for(_=0;_<this.parts.length;_++)if(m=this.parts[_],!(0<=m&&m<=65535))throw new Error("ipaddr: ipv6 part should fit in 16 bits");w&&(this.zoneId=w)}return d.prototype.SpecialRanges={unspecified:[new d([0,0,0,0,0,0,0,0]),128],linkLocal:[new d([65152,0,0,0,0,0,0,0]),10],multicast:[new d([65280,0,0,0,0,0,0,0]),8],loopback:[new d([0,0,0,0,0,0,0,1]),128],uniqueLocal:[new d([64512,0,0,0,0,0,0,0]),7],ipv4Mapped:[new d([0,0,0,0,0,65535,0,0]),96],discard:[new d([256,0,0,0,0,0,0,0]),64],rfc6145:[new d([0,0,0,0,65535,0,0,0]),96],rfc6052:[new d([100,65435,0,0,0,0,0,0]),96],"6to4":[new d([8194,0,0,0,0,0,0,0]),16],teredo:[new d([8193,0,0,0,0,0,0,0]),32],benchmarking:[new d([8193,2,0,0,0,0,0,0]),48],amt:[new d([8193,3,0,0,0,0,0,0]),32],as112v6:[[new d([8193,4,274,0,0,0,0,0]),48],[new d([9760,79,32768,0,0,0,0,0]),48]],deprecated:[new d([8193,16,0,0,0,0,0,0]),28],orchid2:[new d([8193,32,0,0,0,0,0,0]),28],droneRemoteIdProtocolEntityTags:[new d([8193,48,0,0,0,0,0,0]),28],reserved:[[new d([8193,0,0,0,0,0,0,0]),23],[new d([8193,3512,0,0,0,0,0,0]),32]]},d.prototype.isIPv4MappedAddress=function(){return this.range()==="ipv4Mapped"},d.prototype.kind=function(){return"ipv6"},d.prototype.match=function(y,w){let _;if(w===void 0&&(_=y,y=_[0],w=_[1]),y.kind()!=="ipv6")throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");return u(this.parts,y.parts,16,w)},d.prototype.prefixLengthFromSubnetMask=function(){let y=0,w=!1;const _={0:16,32768:15,49152:14,57344:13,61440:12,63488:11,64512:10,65024:9,65280:8,65408:7,65472:6,65504:5,65520:4,65528:3,65532:2,65534:1,65535:0};let m,g;for(let b=7;b>=0;b-=1)if(m=this.parts[b],m in _){if(g=_[m],w&&g!==0)return null;g!==16&&(w=!0),y+=g}else return null;return 128-y},d.prototype.range=function(){return p.subnetMatch(this,this.SpecialRanges)},d.prototype.toByteArray=function(){let y;const w=[],_=this.parts;for(let m=0;m<_.length;m++)y=_[m],w.push(y>>8),w.push(y&255);return w},d.prototype.toFixedLengthString=function(){const y=(function(){const _=[];for(let m=0;m<this.parts.length;m++)_.push(h(this.parts[m].toString(16),4));return _}).call(this).join(":");let w="";return this.zoneId&&(w=`%${this.zoneId}`),y+w},d.prototype.toIPv4Address=function(){if(!this.isIPv4MappedAddress())throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");const y=this.parts.slice(-2),w=y[0],_=y[1];return new p.IPv4([w>>8,w&255,_>>8,_&255])},d.prototype.toNormalizedString=function(){const y=(function(){const _=[];for(let m=0;m<this.parts.length;m++)_.push(this.parts[m].toString(16));return _}).call(this).join(":");let w="";return this.zoneId&&(w=`%${this.zoneId}`),y+w},d.prototype.toRFC5952String=function(){const y=/((^|:)(0(:|$)){2,})/g,w=this.toNormalizedString();let _=0,m=-1,g;for(;g=y.exec(w);)g[0].length>m&&(_=g.index,m=g[0].length);return m<0?w:`${w.substring(0,_)}::${w.substring(_+m)}`},d.prototype.toString=function(){return this.toRFC5952String()},d}(),p.IPv6.broadcastAddressFromCIDR=function(d){try{const y=this.parseCIDR(d),w=y[0].toByteArray(),_=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[];let g=0;for(;g<16;)m.push(parseInt(w[g],10)|parseInt(_[g],10)^255),g++;return new this(m)}catch(y){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${y})`)}},p.IPv6.isIPv6=function(d){return this.parser(d)!==null},p.IPv6.isValid=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{const y=this.parser(d);return new this(y.parts,y.zoneId),!0}catch{return!1}},p.IPv6.isValidCIDR=function(d){if(typeof d=="string"&&d.indexOf(":")===-1)return!1;try{return this.parseCIDR(d),!0}catch{return!1}},p.IPv6.networkAddressFromCIDR=function(d){let y,w,_,m,g;try{for(y=this.parseCIDR(d),_=y[0].toByteArray(),g=this.subnetMaskFromPrefixLength(y[1]).toByteArray(),m=[],w=0;w<16;)m.push(parseInt(_[w],10)&parseInt(g[w],10)),w++;return new this(m)}catch(b){throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${b})`)}},p.IPv6.parse=function(d){const y=this.parser(d);if(y.parts===null)throw new Error("ipaddr: string is not formatted like an IPv6 Address");return new this(y.parts,y.zoneId)},p.IPv6.parseCIDR=function(d){let y,w,_;if((w=d.match(/^(.+)\/(\d+)$/))&&(y=parseInt(w[2]),y>=0&&y<=128))return _=[this.parse(w[1]),y],Object.defineProperty(_,"toString",{value:function(){return this.join("/")}}),_;throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range")},p.IPv6.parser=function(d){let y,w,_,m,g,b;if(_=d.match(c.deprecatedTransitional))return this.parser(`::ffff:${_[1]}`);if(c.native.test(d))return l(d,8);if((_=d.match(c.transitional))&&(b=_[6]||"",y=_[1],_[1].endsWith("::")||(y=y.slice(0,-1)),y=l(y+b,6),y.parts)){for(g=[parseInt(_[2]),parseInt(_[3]),parseInt(_[4]),parseInt(_[5])],w=0;w<g.length;w++)if(m=g[w],!(0<=m&&m<=255))return null;return y.parts.push(g[0]<<8|g[1]),y.parts.push(g[2]<<8|g[3]),{parts:y.parts,zoneId:y.zoneId}}return null},p.IPv6.subnetMaskFromPrefixLength=function(d){if(d=parseInt(d),d<0||d>128)throw new Error("ipaddr: invalid IPv6 prefix length");const y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];let w=0;const _=Math.floor(d/8);for(;w<_;)y[w]=255,w++;return _<16&&(y[_]=Math.pow(2,d%8)-1<<8-d%8),new this(y)},p.fromByteArray=function(d){const y=d.length;if(y===4)return new p.IPv4(d);if(y===16)return new p.IPv6(d);throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address")},p.isValid=function(d){return p.IPv6.isValid(d)||p.IPv4.isValid(d)},p.isValidCIDR=function(d){return p.IPv6.isValidCIDR(d)||p.IPv4.isValidCIDR(d)},p.parse=function(d){if(p.IPv6.isValid(d))return p.IPv6.parse(d);if(p.IPv4.isValid(d))return p.IPv4.parse(d);throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format")},p.parseCIDR=function(d){try{return p.IPv6.parseCIDR(d)}catch{try{return p.IPv4.parseCIDR(d)}catch{throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format")}}},p.process=function(d){const y=this.parse(d);return y.kind()==="ipv6"&&y.isIPv4MappedAddress()?y.toIPv4Address():y},p.subnetMatch=function(d,y,w){let _,m,g,b;w==null&&(w="unicast");for(m in y)if(Object.prototype.hasOwnProperty.call(y,m)){for(g=y[m],g[0]&&!(g[0]instanceof Array)&&(g=[g]),_=0;_<g.length;_++)if(b=g[_],d.kind()===b[0].kind()&&d.match.apply(d,b))return m}return w},t.exports?t.exports=p:e.ipaddr=p})(Oe)})(gT);var iD=gT.exports;function sD(t){const e=t.validation.ValidationRegistry,n=t.validation.CiscoIosValidator,r={IP:n.checkIP,SUBNETMASK:n.checkSUBNETMASK,Username_cmd:n.checkUsername_cmd,BANNER_MESSAGE:n.checkBANNER_MESSAGE,Stat:n.check_Stat,Generate_cmd:n.checkGenerate_cmd,Line_types:n.checkLine_types};e.register(r,n)}class oD{checkIP(e,n){if(e.value){const r=String(e.value).split(".");for(const i of r){const s=parseInt(i,10);(s>255||s<0)&&n("error","This is not a valid IP-Address!",{node:e,property:"value"})}}}checkSUBNETMASK(e,n){if(e.value){const r=String(e.value).split(".");let i="";for(const s of r){const a=parseInt(s,10).toString(2);let c=a;for(let l=0;l<8-a.length;l++)c="0"+c;i=i+c}(i.match(/10+1/)||i.length!=32||!i.includes("0"))&&n("error","This is not a valid Subnetmask!",{node:e,property:"value"})}}checkUsername_cmd(e,n){var r;if(e.options){let i=[];for(const s of e.options)i.includes(s.$type)?n("error",`Already defined ${(r=s.$cstNode)===null||r===void 0?void 0:r.text} (duplicate)!`,{node:s}):i.push(s.$type)}}checkBANNER_MESSAGE(e,n){let r=e.message.join("");const i=r.at(0),s=r.charAt(r.length-1);i!=s?n("error",`Delimiters ${i} and ${s} dont match!`,{node:e}):(r.substring(1,r.length-1).includes(i)||r.substring(1,r.length-1).includes(s))&&n("error",`Delimiter (${i}) can not be inside MESSAGE!`,{node:e})}checkGenerate_cmd(e,n){const r=er(e),i=Array.from(Qt(r)),s=i.indexOf(e),o=i.findIndex(c=>c.$type==="Hostname_cmd"),a=i.findIndex(c=>c.$type==="Domainname_cmd");o===-1?n("error","Set a hostname before generating keys!",{node:e.$container.$container}):o>s&&n("error","A hostname must be defined before generating keys!",{node:e.$container.$container}),a===-1?n("error","Set a domain-name before generating keys!",{node:e.$container.$container}):a>s&&n("error","A domain-name must be defined before generating keys!",{node:e.$container.$container})}checkLine_types(e,n){let r=[];for(let i of e.lines)if(!QI(i))r.push(i);else break;r.findIndex(i=>ZI(i))<0&&n("info","Line mode has no exec-timeout command!",{node:e.$container,property:"command"})}check_Stat(e,n){i(e),s(e),r(e);function r(o){const a=Qt(er(o)).filter(c=>c.$type==="No_ip_cmd_option_domain_lookup");if(a.count()>1)for(let c of a)n("warning","Script contains the <no ip domain-lookup> command more than once.",{node:c});else a.count()<=0&&n("hint","Script does not contain the <no ip domain-lookup> command.",{node:o.lines[0]})}function i(o){var a;const c=new Map,l=Qt(er(o)).filter(u=>u.$type==="IP_cmd_interface");for(const u of l)if(cy(u)&&ly(u.option)){const f=(a=u.option.ip)===null||a===void 0?void 0:a.value;if(!f)continue;const h=c.get(f);h?(n("error",`Duplicate IP address: ${f}!`,{node:u.option,property:"ip"}),n("error",`Duplicate IP address: ${f}!`,{node:h.option,property:"ip"})):c.set(f,u)}}function s(o){var a,c,l,u;const f=[],h=Qt(er(o)).filter(p=>p.$type==="IP_cmd_interface");for(const p of h){if(!cy(p)||!ly(p.option))continue;const d=(c=(a=p.option.ip)===null||a===void 0?void 0:a.value)===null||c===void 0?void 0:c.trim(),y=(u=(l=p.option.mask)===null||l===void 0?void 0:l.value)===null||u===void 0?void 0:u.trim();if(!(!d||!y))try{const w=y.split(".").map(b=>Number(b).toString(2).padStart(8,"0")).join("").indexOf("0"),_=w===-1?32:w,[m,g]=iD.parseCIDR(`${d}/${_}`);for(const b of f)m.kind()===b.ip.kind()&&(m.match(b.ip,b.prefix)||b.ip.match(m,g))&&(n("error",`Overlapping subnet: ${b.cidr} ↔ ${d}/${g}!`,{node:p}),n("error",`Overlapping subnet: ${d}/${g} ↔ ${b.cidr}!`,{node:b.node}));f.push({ip:m,prefix:g,cidr:`${d}/${g}`,node:p})}catch{}}}}}class aD extends b_{getScope(e){return super.getScope(e)}}const cD={label:"IP-Address lol",description:"ip....",insert:"1.2.3.4"},lD={label:"Subnetmask",description:"subnetmask...",insert:"255.255.255.0"},uD={label:"hostname",description:"This Systems Network Name",insert:"R1"},dD={label:"address",description:"set an address to this interface",insert:"address"},fD={label:"<Domain Name>",description:"The Domain Name of the Device",insert:"4CN.at"},hD={label:"2",description:"Protocol to be supported",insert:"2"},pD={label:".xx",description:"",insert:".10"},mD={label:"x/x",description:"number of the interface to be entered",insert:"${1:0}/${2:0}\nno shutdown\n$0"},gD={label:"domain-lookup",description:"stops ip domain lookup",insert:"domain-lookup"},yD={label:"description",description:"describes the interface",insert:"description"},vD={label:"<CR>",description:"possible end of a command",insert:`
`};var _D={IP:cD,SUBNETMASK:lD,Hostname_Input:uD,Ip_cmd_option_address:dD,DOMAINNAME_INPUT:fD,VERSION_INPUT:hD,Sub_Interface_number:pD,Interface_number:mD,No_ip_cmd_option_domain_lookup:gD,Description_cmd:yD,COMMENT:vD};class TD extends hT{constructor(e){super(e),this.services=e}async getCompletion(e,n,r){let i=[];const s=this.buildContexts(e,n.position);if(this.isCursorInComment(e,n))return L.CompletionList.create([],!0);const o=(a,c)=>{const l=this.fillCompletionItem(a,c);l&&i.push(l)};for(const a of s)for(const c of a.features)this.completionFor(a,c,o);return L.CompletionList.create(this.deduplicateItems(i),!0)}completionFor(e,n,r){let i;if(n.type){if(i=_D[n.type],i)r(e,{label:i.label,detail:i.description,sortText:"1",kind:1,insertTextFormat:2,insertText:i.insert});else if(At(n.feature))return this.completionForKeyword(e,n.feature,r)}}completionForKeyword(e,n,r){this.filterKeyword(e,n)&&r(e,{label:n.value,kind:this.getKeywordCompletionItemKind(n),detail:"From OLD logic",sortText:"1"})}isCursorInComment(e,n){var r,i;const s=e.textDocument.offsetAt(n.position),o=e.textDocument.getText(),l=(r=this.services.parser.Lexer.tokenize(o).hidden)!==null&&r!==void 0?r:[];for(const u of l)if(s>u.startOffset&&n.position.line+1<=((i=u.endLine)!==null&&i!==void 0?i:-1))return!0;return!1}collectFromType(e,n){const r=[],i=new Set;function s(o){if(!i.has(o)){i.add(o),o.$type===e&&r.push(o.value);for(const a in o){const c=o[a];if(Array.isArray(c))for(const l of c)l&&typeof l=="object"&&"$type"in l&&s(l);else c&&typeof c=="object"&&"$type"in c&&s(c)}}}return s(n),r}}class RD extends T_{constructor(e){super(e)}getCandidate(e){const r=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return r||this.createSilentLinkingError(e)}createSilentLinkingError(e){return Object.assign(Object.assign({},e),{message:""})}createLinkingError(e){return this.createSilentLinkingError(e)}}const wD={COMMON:{type:"comment"},COMMENT:{type:"comment"},Hostname_Input:{type:"string"},USERNAME_INPUT:{type:"string"},BANNER_MESSAGE:{type:"string"},DOMAINNAME_INPUT:{type:"string"},Interface_number:{type:"string"},VERSION_INPUT:{type:"string"},MODULUS_INPUT:{type:"string"},USERNAME_PASSWORD_INPUT:{type:"string"},IP:{type:"string"},SUBNETMASK:{type:"string"},OSPF_PROCESS_NUMBER:{type:"number"}};class bD extends dI{highlightElement(e,n){if(JI(e)){n({node:e,property:"type",type:"variable"});return}XI(e)&&e.$type=="COMMENTLINE"&&e.$cstNode&&n({cst:e.$cstNode,type:"comment"});const r=wD[e.$type];r&&e.$cstNode&&n({cst:e.$cstNode,type:r.type})}}const kD={validation:{CiscoIosValidator:()=>new oD},references:{ScopeProvider:t=>new aD(t),Linker:t=>new RD(t)},lsp:{CompletionProvider:t=>new TD(t),SemanticTokenProvider:t=>new bD(t)}};function SD(t){const e=Bc(VI(t),nD),n=Bc(GI({shared:e}),rD,kD);return e.ServiceRegistry.register(n),sD(n),t.connection||e.workspace.ConfigurationProvider.initialized({}),{shared:e,CiscoIos:n}}const CD=new Ih.BrowserMessageReader(self),$D=new Ih.BrowserMessageWriter(self),ED=Ih.createConnection(CD,$D),{shared:PD}=SD(Object.assign({connection:ED},M_));pI(PD)});export default AD();
