!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["antd","classnames","noop","object-assign","prop-types","react"],t):"object"==typeof exports?exports.ReactAntDragger=t(require("antd"),require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react")):e.ReactAntDragger=t(e.antd,e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react)}(this,function(e,t,r,n,o,a){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),a=n(o);t.default=a.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(7),d=n(f),m=r(6),y=n(m),g=r(3),b=n(g),h=r(4),x=n(h),j=r(5),v=(n(j),r(2)),_=(s=i=function(e){function t(){var e,r,n,o;a(this,t);for(var c=arguments.length,i=Array(c),s=0;s<c;s++)i[s]=arguments[s];return r=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n._onChange=function(e){var t=n.props.onChange;t(e)},o=r,u(n,o)}return c(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,n=(e.text,e.hint,e.extra),a=o(e,["className","children","text","hint","extra"]);return d.default.createElement("section",l({"data-align":"flex-start",className:(0,b.default)("webkit-sassui-flex-lauto-rfixed react-ant-dragger",t)},a),d.default.createElement(v.Upload.Dragger,l({},a,{className:"left",onChange:this._onChange}),d.default.createElement("p",{className:"ant-upload-drag-icon"},d.default.createElement(v.Icon,{type:"inbox"})),d.default.createElement("p",{className:"ant-upload-text"},"拖拽文件到此完成上传"),d.default.createElement("p",{className:"ant-upload-hint"},"支持png/jpg/jpeg/gif/bmp 等常见格式"),r),n&&d.default.createElement("aside",{className:"right extra"},n))}}]),t}(f.PureComponent),i.propTypes={className:y.default.string,extra:y.default.element},i.defaultProps={name:"file",multiple:!0,action:"//jsonplaceholder.typicode.com/posts/",onChange:x.default},s);t.default=_},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a}])});
//# sourceMappingURL=react-ant-dragger.js.map