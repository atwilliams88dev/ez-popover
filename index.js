/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,i,e=null)=>{for(;i!==e;){const e=i.nextSibling;t.removeChild(i),i=e}},e=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${e}--\x3e`,o=new RegExp(`${e}|${s}`);class n{constructor(t,i){this.parts=[],this.element=i;const s=[],n=[],h=document.createTreeWalker(i.content,133,null,!1);let l=0,d=-1,u=0;const{strings:p,values:{length:f}}=t;for(;u<f;){const t=h.nextNode();if(null!==t){if(d++,1===t.nodeType){if(t.hasAttributes()){const i=t.attributes,{length:e}=i;let s=0;for(let t=0;t<e;t++)r(i[t].name,"$lit$")&&s++;for(;s-- >0;){const i=p[u],e=a.exec(i)[2],s=e.toLowerCase()+"$lit$",n=t.getAttribute(s);t.removeAttribute(s);const r=n.split(o);this.parts.push({type:"attribute",index:d,name:e,strings:r}),u+=r.length-1}}"TEMPLATE"===t.tagName&&(n.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const i=t.data;if(i.indexOf(e)>=0){const e=t.parentNode,n=i.split(o),h=n.length-1;for(let i=0;i<h;i++){let s,o=n[i];if(""===o)s=c();else{const t=a.exec(o);null!==t&&r(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(o)}e.insertBefore(s,t),this.parts.push({type:"node",index:++d})}""===n[h]?(e.insertBefore(c(),t),s.push(t)):t.data=n[h],u+=h}}else if(8===t.nodeType)if(t.data===e){const i=t.parentNode;null!==t.previousSibling&&d!==l||(d++,i.insertBefore(c(),t)),l=d,this.parts.push({type:"node",index:d}),null===t.nextSibling?t.data="":(s.push(t),d--),u++}else{let i=-1;for(;-1!==(i=t.data.indexOf(e,i+1));)this.parts.push({type:"node",index:-1}),u++}}else h.currentNode=n.pop()}for(const t of s)t.parentNode.removeChild(t)}}const r=(t,i)=>{const e=t.length-i.length;return e>=0&&t.slice(e)===i},h=t=>-1!==t.index,c=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function l(t,i){const{element:{content:e},parts:s}=t,o=document.createTreeWalker(e,133,null,!1);let n=u(s),r=s[n],h=-1,c=0;const a=[];let l=null;for(;o.nextNode();){h++;const t=o.currentNode;for(t.previousSibling===l&&(l=null),i.has(t)&&(a.push(t),null===l&&(l=t)),null!==l&&c++;void 0!==r&&r.index===h;)r.index=null!==l?-1:r.index-c,n=u(s,n),r=s[n]}a.forEach(t=>t.parentNode.removeChild(t))}const d=t=>{let i=11===t.nodeType?0:1;const e=document.createTreeWalker(t,133,null,!1);for(;e.nextNode();)i++;return i},u=(t,i=-1)=>{for(let e=i+1;e<t.length;e++){const i=t[e];if(h(i))return e}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,f=t=>"function"==typeof t&&p.has(t),v={},w={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,i,e){this.t=[],this.template=t,this.processor=i,this.options=e}update(t){let i=0;for(const e of this.t)void 0!==e&&e.setValue(t[i]),i++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const i=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,o=document.createTreeWalker(i,133,null,!1);let n,r=0,c=0,a=o.nextNode();for(;r<s.length;)if(n=s[r],h(n)){for(;c<n.index;)c++,"TEMPLATE"===a.nodeName&&(e.push(a),o.currentNode=a.content),null===(a=o.nextNode())&&(o.currentNode=e.pop(),a=o.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(i),customElements.upgrade(i)),i}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${e} `;class _{constructor(t,i,e,s){this.strings=t,this.values=i,this.type=e,this.processor=s}getHTML(){const t=this.strings.length-1;let i="",o=!1;for(let n=0;n<t;n++){const t=this.strings[n],r=t.lastIndexOf("\x3c!--");o=(r>-1||o)&&-1===t.indexOf("--\x3e",r+1);const h=a.exec(t);i+=null===h?t+(o?y:s):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+e}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=t=>null===t||!("object"==typeof t||"function"==typeof t),g=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class x{constructor(t,i,e){this.dirty=!0,this.element=t,this.name=i,this.strings=e,this.parts=[];for(let t=0;t<e.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,i=t.length-1;let e="";for(let s=0;s<i;s++){e+=t[s];const i=this.parts[s];if(void 0!==i){const t=i.value;if(b(t)||!g(t))e+="string"==typeof t?t:String(t);else for(const i of t)e+="string"==typeof i?i:String(i)}}return e+=t[i],e}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===v||b(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=v,t(this)}this.value!==v&&this.committer.commit()}}class ${constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=c()),t.s(this.endNode=c())}insertAfterPart(t){t.s(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=v,t(this)}const t=this.i;t!==v&&(b(t)?t!==this.value&&this.o(t):t instanceof _?this.h(t):t instanceof Node?this.l(t):g(t)?this.u(t):t===w?(this.value=w,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const i=this.startNode.nextSibling,e="string"==typeof(t=null==t?"":t)?t:String(t);i===this.endNode.previousSibling&&3===i.nodeType?i.data=e:this.l(document.createTextNode(e)),this.value=t}h(t){const i=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===i)this.value.update(t.values);else{const e=new m(i,t.processor,this.options),s=e._clone();e.update(t.values),this.l(s),this.value=e}}u(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let e,s=0;for(const o of t)e=i[s],void 0===e&&(e=new $(this.options),i.push(e),0===s?e.appendIntoPart(this):e.insertAfterPart(i[s-1])),e.setValue(o),e.commit(),s++;s<i.length&&(i.length=s,this.clear(e&&e.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class A{constructor(t,i,e){if(this.value=void 0,this.i=void 0,2!==e.length||""!==e[0]||""!==e[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=e}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=v,t(this)}if(this.i===v)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=v}}class C extends x{constructor(t,i,e){super(t,i,e),this.single=2===e.length&&""===e[0]&&""===e[1]}_createPart(){return new k(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class k extends S{}let P=!1;(()=>{try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,i,e){this.value=void 0,this.i=void 0,this.element=t,this.eventName=i,this.eventContext=e,this.p=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=v,t(this)}if(this.i===v)return;const t=this.i,i=this.value,e=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),s=null!=t&&(null==i||e);e&&this.element.removeEventListener(this.eventName,this.p,this.v),s&&(this.v=O(t),this.element.addEventListener(this.eventName,this.p,this.v)),this.value=t,this.i=v}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const O=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function T(t){let i=j.get(t.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},j.set(t.type,i));let s=i.stringsArray.get(t.strings);if(void 0!==s)return s;const o=t.strings.join(e);return s=i.keyString.get(o),void 0===s&&(s=new n(t,t.getTemplateElement()),i.keyString.set(o,s)),i.stringsArray.set(t.strings,s),s}const j=new Map,E=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,i,e,s){const o=i[0];if("."===o){return new C(t,i.slice(1),e).parts}return"@"===o?[new M(t,i.slice(1),s.eventContext)]:"?"===o?[new A(t,i.slice(1),e)]:new x(t,i,e).parts}handleTextExpression(t){return new $(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const W=(t,...i)=>new _(t,i,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,N=(t,i)=>`${t}--${i}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const V=t=>i=>{const s=N(i.type,t);let o=j.get(s);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},j.set(s,o));let r=o.stringsArray.get(i.strings);if(void 0!==r)return r;const h=i.strings.join(e);if(r=o.keyString.get(h),void 0===r){const e=i.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(e,t),r=new n(i,e),o.keyString.set(h,r)}return o.stringsArray.set(i.strings,r),r},F=["html","svg"],q=new Set,B=(t,i,e)=>{q.add(t);const s=e?e.element:document.createElement("template"),o=i.querySelectorAll("style"),{length:n}=o;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<n;t++){const i=o[t];i.parentNode.removeChild(i),r.textContent+=i.textContent}(t=>{F.forEach(i=>{const e=j.get(N(i,t));void 0!==e&&e.keyString.forEach(t=>{const{element:{content:i}}=t,e=new Set;Array.from(i.querySelectorAll("style")).forEach(t=>{e.add(t)}),l(t,e)})})})(t);const h=s.content;e?function(t,i,e=null){const{element:{content:s},parts:o}=t;if(null==e)return void s.appendChild(i);const n=document.createTreeWalker(s,133,null,!1);let r=u(o),h=0,c=-1;for(;n.nextNode();){for(c++,n.currentNode===e&&(h=d(i),e.parentNode.insertBefore(i,e));-1!==r&&o[r].index===c;){if(h>0){for(;-1!==r;)o[r].index+=h,r=u(o,r);return}r=u(o,r)}}}(e,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)i.insertBefore(c.cloneNode(!0),i.firstChild);else if(e){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),l(e,t)}};window.JSCompiler_renameProperty=(t,i)=>t;const I={toAttribute(t,i){switch(i){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){switch(i){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},L=(t,i)=>i!==t&&(i==i||t==t),R={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:L};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,e)=>{const s=this._attributeNameForProperty(e,i);void 0!==s&&(this._attributeToPropertyMap.set(s,e),t.push(s))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(t,i=R){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const e="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(e){const s=this[t];this[i]=e,this._requestUpdate(t,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||R}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of i)this.createProperty(e,t[e])}}static _attributeNameForProperty(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,i,e=L){return e(t,i)}static _propertyValueFromAttribute(t,i){const e=i.type,s=i.converter||I,o="function"==typeof s?s:s.fromAttribute;return o?o(t,e):t}static _propertyValueToAttribute(t,i){if(void 0===i.reflect)return;const e=i.type,s=i.converter;return(s&&s.toAttribute||I.toAttribute)(t,e)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,e){i!==e&&this._attributeToProperty(t,e)}_propertyToAttribute(t,i,e=R){const s=this.constructor,o=s._attributeNameForProperty(t,e);if(void 0!==o){const t=s._propertyValueToAttribute(i,e);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(o):this.setAttribute(o,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const e=this.constructor,s=e._attributeToPropertyMap.get(t);if(void 0!==s){const t=e.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=e._propertyValueFromAttribute(i,t),this._updateState=-17&this._updateState}}_requestUpdate(t,i){let e=!0;if(void 0!==t){const s=this.constructor,o=s.getPropertyOptions(t);s._valueHasChanged(this[t],i,o.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,o))):e=!1}!this._hasRequestedUpdate&&e&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this._requestUpdate(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?Object.assign(Object.assign({},i),{finisher(e){e.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(e){e.createProperty(i.key,t)}};function D(t){return(i,e)=>void 0!==e?((t,i,e)=>{i.constructor.createProperty(e,t)})(t,i,e):H(t,i)}function X(t){return D({attribute:!1,hasChanged:null==t?void 0:t.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class K{constructor(t,i){if(i!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Q={};class Z extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const i=(t,e)=>t.reduceRight((t,e)=>Array.isArray(e)?i(e,t):(t.add(e),t),e),e=i(t,new Set),s=[];e.forEach(t=>s.unshift(t)),this._styles=s}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==Q&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,this.renderRoot.appendChild(i)}))}render(){return Q}}Z.finalized=!0,Z.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const o=s.scopeName,n=E.has(e),r=z&&11===e.nodeType&&!!e.host,h=r&&!q.has(o),c=h?document.createDocumentFragment():e;if(((t,e,s)=>{let o=E.get(e);void 0===o&&(i(e,e.firstChild),E.set(e,o=new $(Object.assign({templateFactory:T},s))),o.appendInto(e)),o.setValue(t),o.commit()})(t,c,Object.assign({templateFactory:V(o)},s)),h){const t=E.get(c);E.delete(c);const s=t.value instanceof m?t.value.template:void 0;B(o,c,s),i(e,e.firstChild),e.appendChild(c),E.set(e,t)}!n&&r&&window.ShadyCSS.styleElement(e.host)};for(var tt=function(t){var i={exports:{}};return t(i,i.exports),i.exports}((function(t){var i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(i){var e=new Uint8Array(16);t.exports=function(){return i(e),e}}else{var s=new Array(16);t.exports=function(){for(var t,i=0;i<16;i++)0==(3&i)&&(t=4294967296*Math.random()),s[i]=t>>>((3&i)<<3)&255;return s}}})),it=[],et=0;et<256;++et)it[et]=(et+256).toString(16).substr(1);var st,ot,nt=function(t,i){var e=i||0,s=it;return[s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],"-",s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]],s[t[e++]]].join("")},rt=0,ht=0;var ct=function(t,i,e){var s=i&&e||0,o=i||[],n=(t=t||{}).node||st,r=void 0!==t.clockseq?t.clockseq:ot;if(null==n||null==r){var h=tt();null==n&&(n=st=[1|h[0],h[1],h[2],h[3],h[4],h[5]]),null==r&&(r=ot=16383&(h[6]<<8|h[7]))}var c=void 0!==t.msecs?t.msecs:(new Date).getTime(),a=void 0!==t.nsecs?t.nsecs:ht+1,l=c-rt+(a-ht)/1e4;if(l<0&&void 0===t.clockseq&&(r=r+1&16383),(l<0||c>rt)&&void 0===t.nsecs&&(a=0),a>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");rt=c,ht=a,ot=r;var d=(1e4*(268435455&(c+=122192928e5))+a)%4294967296;o[s++]=d>>>24&255,o[s++]=d>>>16&255,o[s++]=d>>>8&255,o[s++]=255&d;var u=c/4294967296*1e4&268435455;o[s++]=u>>>8&255,o[s++]=255&u,o[s++]=u>>>24&15|16,o[s++]=u>>>16&255,o[s++]=r>>>8|128,o[s++]=255&r;for(var p=0;p<6;++p)o[s+p]=n[p];return i||nt(o)};var at=function(t,i,e){var s=i&&e||0;"string"==typeof t&&(i="binary"===t?new Array(16):null,t=null);var o=(t=t||{}).random||(t.rng||tt)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,i)for(var n=0;n<16;++n)i[s+n]=o[n];return i||nt(o)},lt=at;lt.v1=ct,lt.v4=at;var dt=lt,ut=function(t,i,e,s){for(var o,n=arguments.length,r=n<3?i:null===s?s=Object.getOwnPropertyDescriptor(i,e):s,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,e,r):o(i,e))||r);return n>3&&r&&Object.defineProperty(i,e,r),r};let pt=class extends Z{constructor(){super(...arguments),this.popoverWrapper=`popWrapper-${dt.v4()}`,this.popoverTarget=`popTarget-${dt.v4()}`,this.popoverBody=`popBody-${dt.v4()}`,this.id=dt.v4(),this.keyframes=[],this.keyframeOptions={},this.disableHover=!1}togglePopover(){var t,i;const e=this.getTargetLocation(),{left:s,right:o,y:n,width:r}=e;this.setPopoverLocation(s,o,n,r);let h=null===(i=null===(t=document.querySelector(`#${this.id}`))||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(`#${this.popoverBody}`);null==h||h.classList.toggle("h-hide")}showPopover(){var t,i;const e=this.getTargetLocation(),{left:s,right:o,y:n,width:r}=e;this.setPopoverLocation(s,o,n,r);let h=null===(i=null===(t=document.querySelector(`#${this.id}`))||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(`#${this.popoverBody}`);null==h||h.classList.remove("h-hide")}hidePopover(){var t,i;let e=null===(i=null===(t=document.querySelector(`#${this.id}`))||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(`#${this.popoverBody}`);null==e||e.classList.add("h-hide")}getTargetLocation(){var t,i;let e=null===(i=null===(t=document.querySelector(`#${this.id}`))||void 0===t?void 0:t.shadowRoot)||void 0===i?void 0:i.querySelector(`#${this.popoverTarget}`);return null==e?void 0:e.getBoundingClientRect().toJSON()}setPopoverLocation(t,i,e,s){var o;let n=null===(o=document.querySelector(`#${this.id}`).shadowRoot)||void 0===o?void 0:o.querySelector(`#${this.popoverBody}`);if(n){let o=n.getBoundingClientRect().width/2,h=n.getBoundingClientRect().height,c=document.querySelector("body").getBoundingClientRect(),a="top";function r(){return t>o&&o<c.width-i?s/2-o:t>o&&o>c.width-i?-1*(2*o-s/2):t<o&&o<c.width-i?s/2:(console.log("else clause"),s/2-o)}a=e>h+100?"top":"bottom",this.keyframes.length>0&&this.keyframeOptions?n.animate(this.keyframes,this.keyframeOptions):n.animate([{opacity:0,transform:`\n              translateX(${r()}px) \n              translateY(${"top"===a?-h-60:30}px)`},{opacity:1,transform:`\n              translateX(${r()}px) \n              translateY(${"top"===a?-h-40:10}px)`}],{duration:200,fill:"forwards",iterations:1,easing:"ease-out"})}}connectedCallback(){super.connectedCallback(),setTimeout(()=>{const t=this.getTargetLocation(),{left:i,right:e,y:s,width:o}=t;this.setPopoverLocation(i,e,s,o)})}render(){return W`
      <div class="c-popover" id="${this.popoverWrapper}">
        <span id="${this.popoverTarget}" class="c-popover__target">
          <slot
            @click="${this.togglePopover}"
            @mouseenter="${!1===this.disableHover&&this.showPopover}"
            @mouseleave="${!1===this.disableHover&&this.hidePopover}"
            name="popover__target"
          ></slot>
        </span>
        <div class="c-popover__main h-hide" id="${this.popoverBody}">
          <slot name="popover__body"></slot>
        </div>
      </div>
    `}};var ft;pt.styles=((t,...i)=>{const e=i.reduce((i,e,s)=>i+(t=>{if(t instanceof K)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[s+1],t[0]);return new K(e,G)})`
    :host {
      --font__family: Arial;
      --font__size: 17px;
      --color__background: #333;
      --color__text: white;
      --popover__padding: 4px 16px;
      --popover__border-radius: 8px;
      --popover__textAlign: center;
      --popover__maxWidth: 380px;
      --popover__minWidth: 175px;
      --popover__border: none;
      --popover__boxShadow: none;
    }

    .c-popover {
      font-family: var(--font__family);
      position: relative;
    }
    .c-popover__main ::slotted(*) {
      background-color: var(--color__background);
      color: var(--color__text);
      max-width: var(--popover__maxWidth);
      text-align: var(--popover__textAlign);
      min-width: var(--popover__minWidth);
      font-size: var(--font__size);
    }
    .c-popover__main {
      font-family: Arial;
      background: var(--color__background);
      color: var(--color__text);
      padding: var(--popover__padding);
      border-radius: var(--popover__border-radius);
      position: absolute;
      min-width: var(--popover__minWidth);
      max-width: var(--popover__maxWidth);
      border: var(--popover__border);
      box-shadow: var(--popover__boxShadow);
    }
    .h-hide {
      visibility: hidden !important;
    }
  `,ut([X()],pt.prototype,"popoverWrapper",void 0),ut([X()],pt.prototype,"popoverTarget",void 0),ut([X()],pt.prototype,"popoverBody",void 0),ut([D({type:String})],pt.prototype,"id",void 0),ut([D()],pt.prototype,"keyframes",void 0),ut([D()],pt.prototype,"keyframeOptions",void 0),ut([D({type:Boolean})],pt.prototype,"disableHover",void 0),pt=ut([(ft="ez-popover",t=>"function"==typeof t?((t,i)=>(window.customElements.define(t,i),i))(ft,t):((t,i)=>{const{kind:e,elements:s}=i;return{kind:e,elements:s,finisher(i){window.customElements.define(t,i)}}})(ft,t))],pt);export{pt as Popover};
