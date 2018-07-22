!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DomJsonTree=t()}(this,function(){"use strict";var s="http://www.w3.org/1999/xlink",a={},p=[],d=Array.isArray,j=function(e,t){var n={};for(var r in e)n[r]=e[r];for(var r in t)n[r]=t[r];return n},u=function(e){return e.currentTarget.events[e.type](e)},_=function(e,t,n,r,o){if("key"===t);else if("style"===t)for(var l in j(n,r)){var i=null==r||null==r[l]?"":r[l];"-"===l[0]?e[t].setProperty(l,i):e[t][l]=i}else if("o"===t[0]&&"n"===t[1])e.events||(e.events={}),null==(e.events[t=t.slice(2)]=r)?e.removeEventListener(t,u):null==n&&e.addEventListener(t,u);else{var a=null==r||!1===r;if(t in e&&"list"!==t&&"draggable"!==t&&"spellcheck"!==t&&"translate"!==t&&!o)e[t]=null==r?"":r,a&&e.removeAttribute(t);else o&&t!==(t=t.replace(/^xlink:?/,""))?a?e.removeAttributeNS(s,t):e.setAttributeNS(s,t,r):a?e.removeAttribute(t):e.setAttribute(t,r)}},x=function(e,t,n){var r=2===e.type?document.createTextNode(e.name):(n=n||"svg"===e.name)?document.createElementNS("http://www.w3.org/2000/svg",e.name):document.createElement(e.name),o=e.props;o.oncreate&&t.push(function(){o.oncreate(r)});for(var l=0,i=e.children.length;l<i;l++)r.appendChild(x(e.children[l],t,n));for(var a in o)_(r,a,null,o[a],n);return e.element=r},o=function(e){for(var t=0,n=e.children.length;t<n;t++)o(e.children[t]);var r=e.props.ondestroy;return null!=r&&r(e.element),e.element},P=function(e,t){var n=function(){e.removeChild(o(t))},r=t.props&&t.props.onremove;null!=r?r(t.element,n):n()},T=function(e){return null==e?null:e.key},S=function(e,t,n,r,o,l){if(r===n);else if(null!=n&&2===n.type&&2===r.type)n.name!==r.name&&(t.nodeValue=r.name);else if(null==n||n.name!==r.name){var i=e.insertBefore(x(r,o,l),t);null!=n&&P(e,n),t=i}else{var a,s,p;!function(e,t,n,r,o,l){for(var i in j(t,n))("value"===i||"checked"===i?e[i]:t[i])!==n[i]&&_(e,i,t[i],n[i],o);var a=l?n.oncreate:n.onupdate;null!=a&&r.push(function(){a(e,t)})}(t,n.props,r.props,o,l=l||"svg"===r.name,1===n.type);for(var d,u=n.children,c=0,y=u.length-1,f=r.children,g=0,m=f.length-1;g<=m&&c<=y&&(p=T(u[c]),d=T(f[g]),null!=p&&p===d);)S(t,u[c].element,u[c],f[g],o,l),c++,g++;for(;g<=m&&c<=y&&(p=T(u[y]),d=T(f[m]),null!=p&&p===d);)S(t,u[y].element,u[y],f[m],o,l),y--,m--;if(y<c)for(;g<=m;)t.insertBefore(x(f[g++],o,l),(s=u[c])&&s.element);else if(m<g)for(;c<=y;)P(t,u[c++]);else{for(var h=function(e,t,n){for(var r,o,l={};t<=n;t++)null!=(r=(o=e[t]).key)&&(l[r]=o);return l}(u,c,y),b={};g<=m;)p=T(s=u[c]),d=T(f[g]),b[p]||null!=d&&d===T(u[c+1])?(null==p&&P(t,s),c++):null==d||1===n.type?(null==p&&(S(t,s&&s.element,s,f[g],o,l),g++),c++):(p===d?(S(t,s.element,s,f[g],o,l),b[d]=!0,c++):null!=(a=h[d])?(S(t,t.insertBefore(a.element,s&&s.element),a,f[g],o,l),b[d]=!0):S(t,s&&s.element,null,f[g],o,l),g++);for(;c<=y;)null==T(s=u[c++])&&P(t,s);for(var v in h)null==b[v]&&P(t,h[v])}}return r.element=t},c=function(e,t,n,r,o,l){return{name:e,props:t,children:n,element:r,key:o,type:l}},l=function(e,t){for(var n,r=arguments,o=[],l=[],i=arguments.length;2<i--;)o.push(r[i]);for(null!=(t=null==t?{}:t).children&&(o.length<=0&&o.push(t.children),delete t.children);0<o.length;)if(d(n=o.pop()))for(i=n.length;0<i--;)o.push(n[i]);else!1===n||!0===n||null==n||l.push("object"==typeof n?n:c(n,a,p,void 0,null,2));return"function"==typeof e?e(t,t.children=l):c(e,t,l,null,t.key,0)},i={Object:{margin:0,padding:0,boxSizing:"border-box",lineHeight:"1",paddingLeft:"1em",position:"relative"},Arrow:{margin:0,padding:0,boxSizing:"border-box",display:"block",width:".5em",height:".3em",position:"absolute",top:".2em",left:0,borderLeft:".5em solid #555",borderTop:".3em solid transparent",borderBottom:".3em solid transparent",transform:"rotate(90deg)"},Content:{margin:0,padding:0,boxSizing:"border-box",width:"100%"},Value:{margin:0,padding:0,boxSizing:"border-box",paddingLeft:"1em"},Property:{margin:0,padding:0,boxSizing:"border-box",marginBottom:".5em",cursor:"pointer"},Property_Key:{margin:0,padding:0,boxSizing:"border-box",color:"#708"},Property_Colon:{margin:0,padding:0,boxSizing:"border-box",color:"#555"},Property_Type:{margin:0,padding:0,boxSizing:"border-box",color:"#997"},"Property_Type-number":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"},"Property_Type-string":{margin:0,padding:0,boxSizing:"border-box",color:"#a11"},"Property_Type-boolean":{margin:0,padding:0,boxSizing:"border-box",color:"rgb(50, 0, 255)"}},e=function(e,t){this.json=e,this.container=t,this.node};return e.prototype.rendar=function(){this._update()},e.prototype._update=function(){this.node=function(e,t,n){var r=[];for(S(n,n.children[0],e,t,r);0<r.length;)r.pop()();return t}(this.node,this._view(),this.container)},e.prototype._view=function(){var t=this,n=[];return Object.keys(this.json).forEach(function(e){n.push(t._getObjectTemplate(e,t.json[e]))}),l("div",{class:"djt-Content",style:i.Content},n)},e.prototype._getKeyTemplate=function(e,t){if(this._isPrimitiveType(t)){var n=typeof t,r="string"==n?'"'+t+'"':t.toString();return l("div",{class:"djt-Property",style:i.Property},[l("span",{class:"djt-Property_Key",style:i.Property_Key},e),l("span",{class:"djt-Property_Colon",style:i.Property_Colon},": "),l("span",{class:"djt-Property_Type",style:i["Property_Type-"+n]},r)])}var o="number"==typeof t.length?"Array["+t.length+"]":"Object";return l("div",{class:"djt-Property",style:i.Property,"data-djt-toggle":"open",onclick:function(e){var t=e.target.classList.contains("djt-Property")?e.target:e.target.parentNode;"open"==t.dataset.djtToggle?(t.dataset.djtToggle="close",t.nextElementSibling.style.display="none",t.parentNode.querySelector(".djt-Arrow").style.transform="none"):(t.dataset.djtToggle="open",t.nextElementSibling.style.display="block",t.parentNode.querySelector(".djt-Arrow").style.transform="rotate(90deg)")}},[l("span",{class:"djt-Property_Key",style:i.Property_Key},e),l("span",{class:"djt-Property_Colon",style:i.Property_Colon},": "),l("span",{class:"djt-Property_Type",style:i.Property_Type},o)])},e.prototype._getValueTemplate=function(t){var n=this,r=[];return Object.keys(t).forEach(function(e){r.push(n._getObjectTemplate(e,t[e]))}),l("div",{class:"djt-Value",style:i.Value},r)},e.prototype._getObjectTemplate=function(e,t){var n=[];return this._isPrimitiveType(t)?n.push(this._getKeyTemplate(e,t)):(n.push(l("span",{class:"djt-Arrow",style:i.Arrow},"")),n.push(this._getKeyTemplate(e,t)),n.push(this._getValueTemplate(t))),l("div",{key:e,class:"djt-object",style:i.Object},n)},e.prototype._isPrimitiveType=function(e){return!e||"object"!=typeof e},e});
