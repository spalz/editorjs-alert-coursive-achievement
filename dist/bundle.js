!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AlertCursiveAchievement=t():e.AlertCursiveAchievement=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t){e.exports='<svg width="23" height="18" viewBox="0 0 23 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7703 4.5524C18.0698 4.52356 18.8236 4.41661 19.2658 4.04735C19.4654 3.87992 19.7723 3.9776 19.8526 4.22502C20.027 4.75705 20.2136 5.53648 20.1707 6.34383C20.1642 6.46568 20.208 6.58382 20.2883 6.67497C20.6903 7.13167 21.8696 8.73985 21.8696 11.8893C21.8696 15.686 18.1453 17.5593 11.3322 16.8534C5.00692 16.1976 1 12.1563 1 8.77711C1 5.84162 3.09722 4.53937 3.64858 4.24824C3.73534 4.20173 3.79785 4.12083 3.81837 4.02503C3.88554 3.71901 4.00216 3.02984 3.8277 2.50153C3.73254 2.21133 3.98816 1.93133 4.28204 2.01504C4.64494 2.11828 5.07129 2.33311 5.46312 2.76841C5.53309 2.84561 5.63944 2.87913 5.743 2.86145C6.85691 2.67357 13.0833 1.78344 17.5389 4.49942C17.6089 4.54127 17.6891 4.55984 17.7703 4.5524Z" stroke="currentColor" stroke-width="2" fill="none"></path></svg>'},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n(0),o=n.n(r);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}
/**
 * AlertCursiveAchievement block for the Editor.js.
 *
 * @author Vishal Telangre
 * @license MIT
 */n(2).toString();var f=function(){function e(t){var n=t.data,r=t.config,o=t.api,i=t.readOnly;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.api=o,this.defaultType=r.defaultType||e.DEFAULT_TYPE,this.messagePlaceholder=r.messagePlaceholder||e.DEFAULT_MESSAGE_PLACEHOLDER,this.data={type:e.ALERT_TYPES.includes(n.type)?n.type:this.defaultType,message:n.message||""},this.container=void 0,this.readOnly=i}return d(e,[{key:"CSS",get:function(){return{settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive,wrapper:"cdx-alert-coursive-achievement",wrapperForType:function(e){return"cdx-alert-coursive-achievement-".concat(e)},message:"cdx-alert__message"}}}],[{key:"toolbox",get:function(){return{icon:o.a,title:"Ачивки"}}},{key:"enableLineBreaks",get:function(){return!0}},{key:"DEFAULT_TYPE",get:function(){return"cat"}},{key:"DEFAULT_MESSAGE_PLACEHOLDER",get:function(){return"Тут текст для ачивки"}},{key:"ALERT_TYPES",get:function(){return["cat","chil","egg","fish","go","izi","wolf"]}}]),d(e,[{key:"render",value:function(){var e=[this.CSS.wrapper,this.CSS.wrapperForType(this.data.type)];this.container=this._make("div",e);var t=this._make("div",[this.CSS.message],{contentEditable:!this.readOnly,innerHTML:this.data.message});return t.dataset.placeholder=this.messagePlaceholder,this.container.appendChild(t),this.container}},{key:"renderSettings",value:function(){var t=this,n=this._make("div");return e.ALERT_TYPES.forEach((function(e){var r=t._make("div",[t.CSS.settingsButton,t.CSS.wrapper,t.CSS.wrapperForType(e)],{innerHTML:e,title:e});t.data.type===e&&r.classList.add(t.CSS.settingsButtonActive),r.addEventListener("click",(function(){t._changeAlertCursiveAchievementType(e),n.querySelectorAll(".".concat(t.CSS.settingsButton)).forEach((function(e){return e.classList.remove(t.CSS.settingsButtonActive)})),r.classList.add(t.CSS.settingsButtonActive)})),n.appendChild(r)})),n}},{key:"_changeAlertCursiveAchievementType",value:function(t){var n=this;this.data.type=t,e.ALERT_TYPES.forEach((function(e){var r=n.CSS.wrapperForType(e);n.container.classList.remove(r),t===e&&n.container.classList.add(r)}))}},{key:"save",value:function(e){var t=e.querySelector(".".concat(this.CSS.message));return s(s({},this.data),{},{message:t.innerHTML})}},{key:"_make",value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=document.createElement(e);Array.isArray(n)?(t=o.classList).add.apply(t,i(n)):n&&o.classList.add(n);for(var c in r)o[c]=r[c];return o}},{key:"onPaste",value:function(e){var t=e.detail.data;this.data={type:this.defaultType,message:t.innerHTML||""}}}],[{key:"isReadOnlySupported",get:function(){return!0}},{key:"conversionConfig",get:function(){var e=this;return{export:function(e){return e.message},import:function(t){return{message:t,type:e.DEFAULT_TYPE}}}}},{key:"sanitize",get:function(){return{type:!1,message:!0}}}]),e}()},function(e,t,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var d=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(c[d].references++,c[d].updater(f)):c.push({identifier:l,updater:g(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function v(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function g(e,t){var n,r,o;if(t.singleton){var i=h++;n=p||(p=u(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=u(t),r=v.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);c[o].references--}for(var i=s(e,t),u=0;u<n.length;u++){var l=a(n[u]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}n=i}}}},function(e,t,n){(t=n(5)(!1)).push([e.i,".cdx-alert-coursive-achievement {\n  position: relative;\n  padding: 10px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  color: #ffffff;\n}\n\n.cdx-alert-coursive-achievement__message {\n  outline: none;\n}\n\n.cdx-alert-coursive-achievement\n  [contentEditable='true'][data-placeholder]::before {\n  position: absolute;\n  content: attr(data-placeholder);\n  color: #ffffff;\n  font-weight: normal;\n  opacity: 0;\n}\n\n.cdx-alert-coursive-achievement\n  [contentEditable='true'][data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.cdx-alert-coursive-achievement\n  [contentEditable='true'][data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.cdx-alert-coursive-achievement-cat {\n  background-color: #db95e1;\n}\n.cdx-alert-coursive-achievement-cat:hover,\n.cdx-alert-coursive-achievement-cat.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-cat:focus {\n  background-color: #db95e1;\n}\n.cdx-alert-coursive-achievement-chil {\n  background-color: #e2daa1;\n  color: #111111;\n}\n.cdx-alert-coursive-achievement-chil:hover,\n.cdx-alert-coursive-achievement-chil.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-chil:focus {\n  background-color: #e2daa1;\n  color: #111111;\n}\n.cdx-alert-coursive-achievement-egg {\n  background-color: #ff8568;\n}\n.cdx-alert-coursive-achievement-egg:hover,\n.cdx-alert-coursive-achievement-egg.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-egg:focus {\n  background-color: #ff8568;\n}\n.cdx-alert-coursive-achievement-fish {\n  background-color: #8ec8f9;\n}\n.cdx-alert-coursive-achievement-fish:hover,\n.cdx-alert-coursive-achievement-fish.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-fish:focus {\n  background-color: #8ec8f9;\n}\n.cdx-alert-coursive-achievement-go {\n  background-color: #c4adff;\n}\n.cdx-alert-coursive-achievement-go:hover,\n.cdx-alert-coursive-achievement-go.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-go:focus {\n  background-color: #c4adff;\n}\n.cdx-alert-coursive-achievement-izi {\n  background-color: #e2daa1;\n  color: #111111;\n}\n.cdx-alert-coursive-achievement-izi:hover,\n.cdx-alert-coursive-achievement-izi.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-izi:focus {\n  background-color: #e2daa1;\n  color: #111111;\n}\n.cdx-alert-coursive-achievement-wolf {\n  background-color: #bedb7a;\n}\n.cdx-alert-coursive-achievement-wolf:hover,\n.cdx-alert-coursive-achievement-wolf.ce-settings__button--focused,\n.cdx-alert-coursive-achievement-wolf:focus {\n  background-color: #bedb7a;\n}\n\n.cdx-alert-coursive-achievement.cdx-settings-button {\n  margin: 3px;\n  height: 28px;\n  padding: 0 5px !important;\n  opacity: 0.8;\n}\n\n.cdx-alert-coursive-achievement.cdx-settings-button:hover {\n  opacity: 1;\n}\n\n.cdx-alert-coursive-achievement.cdx-settings-button--active,\n.cdx-alert-coursive-achievement.ce-settings__button--focused {\n  font-weight: bold;\n  opacity: 0.9;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var c,a,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}}]).default}));