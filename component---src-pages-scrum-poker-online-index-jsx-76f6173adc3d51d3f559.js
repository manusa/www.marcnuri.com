(self.webpackChunk_marcnuri_www_marcnuri_com=self.webpackChunk_marcnuri_www_marcnuri_com||[]).push([[94],{5505:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})},9918:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=n(7326),a=n(4578),o=n(7294),i=n(5444),c=n(8972),l=function(e){var t=e.children;return o.createElement("span",{className:"header__title-short"},t)},s=function(e){var t=e.children;return o.createElement("span",{className:"header__title-long"},t)},u=function(e){var t=e.pageContext;return o.createElement("span",{onClick:function(){return function(e){(document.documentElement.scrollTop||document.body.scrollTop)>0?window.scrollTo(0,0):(0,i.navigate)((0,c.localizedPath)(e.locale)("/"))}(t)}},o.createElement(l,null,"<"),"M",o.createElement(s,null,"a"),o.createElement(s,null,"r"),o.createElement(s,null,"c"),o.createElement(s,null," "),"N",o.createElement(s,null,"u"),o.createElement(s,null,"r"),o.createElement(s,null,"i"),o.createElement(l,null,">"))},p=function(e){var t=e.icon,n=e.url,r=e.title;return o.createElement("li",{className:"header__nav-bar-item"},o.createElement("a",{className:"header__nav-bar-item-link",href:n,title:r,rel:"noreferrer noopener"},o.createElement("i",{className:t})))},d=function(e){var t=e.pageContext,n=e.scrolled;return o.createElement("header",{className:"header"+(n?" header--scrolled":"")},o.createElement("div",{className:"header__title"},o.createElement(u,{pageContext:t})),o.createElement("nav",{className:"header__nav-bar"},o.createElement("ul",{className:"header__nav-bar-list"},o.createElement(p,{url:"https://www.linkedin.com/in/marcnuri",icon:"icon-linkedin",title:"LinkedIn"}),o.createElement(p,{url:"https://www.github.com/manusa",icon:"icon-github-circled",title:"GitHub"}),o.createElement(p,{url:"https://www.twitter.com/MarcNuri",icon:"icon-twitter",title:"Twitter"}),o.createElement(p,{url:"https://blog.marcnuri.com",icon:"icon-edit",title:"Blog"}))))},m=n(5369),f=n.n(m),v=function(e){var t=e.data,n=e.pageContext;return o.createElement("div",{className:"footer"},o.createElement("div",{className:"footer__locale"},o.createElement("ul",null,Object.values(f()).map((function(e){return o.createElement("li",{key:e.path},o.createElement(i.Link,{to:(0,c.localizedPath)(e)(n.pagePath)},e.name))})))),o.createElement("div",{className:"footer__deprecated"},o.createElement("ul",null,o.createElement("li",null,o.createElement(i.Link,{to:(0,c.localizedPath)(n.locale)("/scrum-poker-online")},"Scrum Poker")),o.createElement("li",null,o.createElement(i.Link,{to:(0,c.localizedPath)(n.locale)("/uuid")},"UUID")),o.createElement("li",null,o.createElement(i.Link,{to:(0,c.localizedPath)(n.locale)("/base64-encoder-decoder")},"Base64")),o.createElement("li",null,o.createElement("a",{href:"https://www.marcnuri.com/adr-online"},"ADR Online")),o.createElement("li",null,o.createElement("a",{href:"https://www.marcnuri.com/iban"},"IBAN")))),o.createElement("div",{className:"footer__social"},o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:"https://www.linkedin.com/in/marcnuri",rel:"noreferrer"},"LinkedIn")),o.createElement("li",null,o.createElement("a",{href:"https://www.github.com/manusa",rel:"noreferrer"},"GitHub")),o.createElement("li",null,o.createElement("a",{href:"https://www.twitter.com/MarcNuri",rel:"noreferrer"},"Twitter")),o.createElement("li",null,o.createElement("a",{href:"https://blog.marcnuri.com",rel:"noreferrer"},"Blog")),o.createElement("li",null,o.createElement("a",{href:"https://presentations.marcnuri.com",rel:"noreferrer"},"Talks")))),o.createElement("div",{className:"footer__copyright"},"© ",t.site.siteMetadata.year," ",o.createElement("a",{href:t.site.siteMetadata.siteUrl},"Marc Nuri")))},h=function(e){return o.createElement(i.StaticQuery,{query:"586315219",render:function(t){return o.createElement(v,Object.assign({data:t},e))}})},_=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={scrolled:!1},n.handleOnScroll=n.onScroll.bind((0,r.Z)(n)),n}(0,a.Z)(t,e);var n=t.prototype;return n.onScroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.setState({scrolled:e>1})},n.componentDidMount=function(){window.addEventListener("scroll",this.handleOnScroll),window.addEventListener("load",this.handleOnScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleOnScroll),window.removeEventListener("load",this.handleOnScroll)},n.render=function(){var e=this.props,t=e.pageContext,n=e.className,r=e.children,a=this.state.scrolled,i=o.Children.toArray(r).map((function(e){return o.cloneElement(e,{"data-scrolled":a.toString()})}));return o.createElement("div",{className:n},o.createElement(d,{pageContext:t,scrolled:a}),i,o.createElement(h,{pageContext:t}))},t}(o.Component);_.defaultProps={className:""};var E=_},7868:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(7294),a=n(7326),o=n(4578),i=n(5505),c=n(8080),l=n(5333),s=n(8613),u=n.n(s),p=n(1209),d=n(9918),m=n(6811),f=function(e){var t=e.className,n=e.onClick,a=e.children;return r.createElement("div",{className:(0,i.Z)("poker-card",t),onClick:n},r.createElement("div",{className:"poker-card__container"},r.createElement("div",{className:"poker-card__card"},a)))};f.defaultProps={className:null,onClick:null};var v=f,h=function(e){var t=e.onClick,n=e.children;return r.createElement(v,{className:"poker-card--flipped",onClick:t},r.createElement("div",{className:"poker-card__outer-border"},r.createElement("div",{className:"poker-card__inner-border"},r.createElement("div",{className:"poker-card__inner"},n))))};h.defaultProps={onClick:null};var _=h,E=function(e){var t=e.symbol,n=e.onClick;return r.createElement(v,{className:"poker-card--front",onClick:n},r.createElement("div",{className:"poker-card__background"},r.createElement("div",{className:"poker-card__inner-background"})),r.createElement("div",{className:"poker-card__column-container"},r.createElement("div",{className:"poker-card__row-top"},r.createElement("div",{className:"poker-card__symbol poker-card__symbol--left"},r.createElement("svg",{viewBox:"0 0 30 18"},r.createElement("text",{y:"13"},t))),r.createElement("div",{className:"poker-card__symbol poker-card__symbol--right"},r.createElement("svg",{viewBox:"0 0 30 18"},r.createElement("text",{x:"100%",y:"13",textAnchor:"end"},t)))),r.createElement("div",{className:"poker-card__row-middle"},r.createElement("svg",{viewBox:"0 0 30 18"},r.createElement("text",{x:"50%",y:"13",textAnchor:"middle"},t))),r.createElement("div",{className:"poker-card__row-bottom"},r.createElement("div",{className:"poker-card__symbol poker-card__symbol--left"},r.createElement("svg",{viewBox:"0 0 30 18"},r.createElement("text",{x:"100%",y:"13",textAnchor:"end"},t))),r.createElement("div",{className:"poker-card__symbol poker-card__symbol--right"},r.createElement("svg",{viewBox:"0 0 30 18"},r.createElement("text",{y:"13"},t))))))};E.defaultProps={onClick:null};var y=E,k=n(1747),g=n.n(k),b=function(e,t){void 0===t&&(t={});var n={x:null,y:null,z:null,time:new Date};g()(t,{threshold:15,timeout:400});return function(r){var a=t,o=a.threshold,i=a.timeout,c=n.x,l=n.y,s=n.z,u=n.time;n.time=new Date,n.x=r.acceleration.x,n.y=r.acceleration.y,n.z=r.acceleration.z;var p=n.x,d=n.y,m=n.z;n.time-u<i&&(Math.abs(p-c)>o||Math.abs(d-l)>o||Math.abs(m-s)>o)&&e()}},x={en:"## About\n\n[Planning Poker](https://en.wikipedia.org/wiki/Planning_poker), \na.k.a. Scrum Poker, is a consensus based technique to estimate and plan development\ngoals in agile teams.\n\nIn a typical Scrum Poker session, members of the team make estimates by playing cards upside down\ninstead of saying them out loud. When all members have their estimates ready, cards are revealed\nall at once and estimates are then discussed amongst the members of the Agile team.\n\n## Scrum Poker App\n\nThis is an online version of the estimation cards deck.\n\n### How to play\n\n1. Pick a card from the deck\n2. Show the flipped card to the group\n3. Once all of the estimations are ready, shake your phone/device to reveal your card\n4. Tap on the card to start again\n\n### Devices not supporting device motion events\n\nIt's possible your device doesn't support the HTML 5 feature used to detect if it is moving. In\nthat case, simply click/tap on the flipped card to reveal its value.\n",es:'## Planning Póker\n\n[Planning Póker](https://es.wikipedia.org/wiki/Planning_poker), \ntambién conocido como Scrum Poker, es una técnica basada en el consenso para la estimación y \nplanificación de objetivos de desarrollo en equipos ágiles.\n\nEn una sesión típica de Scrum poker, los miembros del equipo hacen estimaciones colocando\ncartas boca abajo con el valor de la estimación en lugar de decirlas en alto.\nUna vez todos los miembros del equipo tienen listas sus estimaciones, todas las cartas se muestran a\nla vez. Posteriormente se debaten los valores entre los miembroes del equipo Agile.\n\n## Scrum Poker App\n\nEsta es una versión online de la baraja de cartas para la estimación de tareas.\n\n### Cómo jugar\n\n1. Elige una carta de la baraja\n2. Muestra el reverso de la carta al grupo\n3. Cuándo todas las estimaciones estén listas, agita tu dispositivo/teléfono para revelar tu carta\n4. Pulsa sobre la carta para volver a comenzar\n\n### Dispositivos que no soportan eventos "device motion"\n\nEs posible que tu dispositivo no soporte la funcionalidad HTML 5 para detectar si se está moviendo.\nEn ese caso, simplemente pulsa sobre el reverso de la carta para revelar su valor.\n'},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={selectedCard:null,flipped:!0},n.handleFlipCard=n.flipCard.bind((0,a.Z)(n)),n.shiver=b(n.onShake.bind((0,a.Z)(n))),n}(0,o.Z)(t,e);var n=t.prototype;return n.selectCard=function(e){this.setState({selectedCard:e,flipped:!!e})},n.flipCard=function(e){u()(e,"stopPropagation"),this.setState({flipped:!this.state.flipped})},n.onShake=function(){var e=this.state,t=e.selectedCard,n=e.flipped;t&&n&&this.flipCard()},n.componentDidMount=function(){window.DeviceMotionEvent&&window.addEventListener("devicemotion",this.shiver)},n.componentWillUnmount=function(){window.removeEventListener("devicemotion",this.shiver)},n.render=function(){var e=this,t=this.props,n=t.pageContext,a=t.intl,o=this.state,l=o.selectedCard,s=o.flipped,u=a.formatMessage({id:"scrum.poker.title"}),f=a.formatMessage({id:"scrum.poker.meta.description"});return r.createElement(d.Z,{className:"scrum-poker",pageContext:n},r.createElement(m.Z,{pageContext:n,lang:n.lang,title:u,description:f}),r.createElement("div",{className:"scrum-poker__title"},r.createElement("div",{className:"scrum-poker__title-filter"},r.createElement("h1",{className:"scrum-poker__title-text"},u))),r.createElement("section",{className:"scrum-poker__deck"},r.createElement("div",{className:"scrum-poker__deck-cards"},["0","1/2","1","2","3","5","8","13","20","40","100","?","∞"].map((function(t){return r.createElement(y,{key:t,symbol:t,onClick:function(){return e.selectCard(t)}})})))),r.createElement("section",{className:"scrum-poker__about markdown-section"},r.createElement(c.Z,{children:x[n.lang],linkTarget:"_blank",components:{a:p.Z}})),r.createElement("div",{className:(0,i.Z)("scrum-poker__selected-card",l&&"scrum-poker__selected-card--visible",!s&&"scrum-poker__selected-card--revealed",s&&"scrum-poker__selected-card--flipped"),onClick:function(){return e.selectCard(null)}},r.createElement("div",{className:"scrum-poker__selected-card-container"},r.createElement(_,{onClick:this.handleFlipCard}),r.createElement(y,{symbol:l,onClick:function(){return e.selectCard(null)}}))))},t}(r.Component),N=(0,l.ZP)(w),C=function(e){return r.createElement(N,e)}},1989:function(e,t,n){var r=n(1789),a=n(401),o=n(7667),i=n(1327),c=n(1866);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,e.exports=l},8407:function(e,t,n){var r=n(7040),a=n(4125),o=n(2117),i=n(7529),c=n(3399);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,e.exports=l},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3369:function(e,t,n){var r=n(4785),a=n(1285),o=n(6e3),i=n(9916),c=n(5265);function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=a,l.prototype.get=o,l.prototype.has=i,l.prototype.set=c,e.exports=l},6874:function(e){e.exports=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}},8470:function(e,t,n){var r=n(7813);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},8458:function(e,t,n){var r=n(3560),a=n(5346),o=n(3218),i=n(346),c=/^\[object .+?Constructor\]$/,l=Function.prototype,s=Object.prototype,u=l.toString,p=s.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!o(e)||a(e))&&(r(e)?d:c).test(i(e))}},313:function(e,t,n){var r=n(3218),a=n(5726),o=n(8021),i=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=a(e),n=[];for(var c in e)("constructor"!=c||!t&&i.call(e,c))&&n.push(c);return n}},5976:function(e,t,n){var r=n(6557),a=n(5357),o=n(61);e.exports=function(e,t){return o(a(e,t,r),e+"")}},6560:function(e,t,n){var r=n(5703),a=n(8777),o=n(6557),i=a?function(e,t){return a(e,"toString",{configurable:!0,enumerable:!1,value:r(t),writable:!0})}:o;e.exports=i},531:function(e,t,n){var r=n(2705),a=n(9932),o=n(1469),i=n(3448),c=r?r.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(o(t))return a(t,e)+"";if(i(t))return l?l.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},1811:function(e,t,n){var r=n(1469),a=n(5403),o=n(5514),i=n(9833);e.exports=function(e,t){return r(e)?e:a(e,t)?[e]:o(i(e))}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},8777:function(e,t,n){var r=n(852),a=function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch(t){}}();e.exports=a},5050:function(e,t,n){var r=n(7019);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},852:function(e,t,n){var r=n(8458),a=n(7801);e.exports=function(e,t){var n=a(e,t);return r(n)?n:void 0}},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},1789:function(e,t,n){var r=n(4536);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},401:function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},7667:function(e,t,n){var r=n(4536),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return a.call(t,e)?t[e]:void 0}},1327:function(e,t,n){var r=n(4536),a=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:a.call(t,e)}},1866:function(e,t,n){var r=n(4536);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},6612:function(e,t,n){var r=n(7813),a=n(8612),o=n(5776),i=n(3218);e.exports=function(e,t,n){if(!i(n))return!1;var c=typeof t;return!!("number"==c?a(n)&&o(t,n.length):"string"==c&&t in n)&&r(n[t],e)}},5403:function(e,t,n){var r=n(1469),a=n(3448),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!a(e))||(i.test(e)||!o.test(e)||null!=t&&e in Object(t))}},7019:function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},5346:function(e,t,n){var r,a=n(4429),o=(r=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!o&&o in e}},7040:function(e){e.exports=function(){this.__data__=[],this.size=0}},4125:function(e,t,n){var r=n(8470),a=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():a.call(t,n,1),--this.size,!0)}},2117:function(e,t,n){var r=n(8470);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},7529:function(e,t,n){var r=n(8470);e.exports=function(e){return r(this.__data__,e)>-1}},3399:function(e,t,n){var r=n(8470);e.exports=function(e,t){var n=this.__data__,a=r(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}},4785:function(e,t,n){var r=n(1989),a=n(8407),o=n(7071);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||a),string:new r}}},1285:function(e,t,n){var r=n(5050);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},6e3:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).get(e)}},9916:function(e,t,n){var r=n(5050);e.exports=function(e){return r(this,e).has(e)}},5265:function(e,t,n){var r=n(5050);e.exports=function(e,t){var n=r(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}},4523:function(e,t,n){var r=n(8306);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},4536:function(e,t,n){var r=n(852)(Object,"create");e.exports=r},8021:function(e){e.exports=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}},5357:function(e,t,n){var r=n(6874),a=Math.max;e.exports=function(e,t,n){return t=a(void 0===t?e.length-1:t,0),function(){for(var o=arguments,i=-1,c=a(o.length-t,0),l=Array(c);++i<c;)l[i]=o[t+i];i=-1;for(var s=Array(t+1);++i<t;)s[i]=o[i];return s[t]=n(l),r(e,this,s)}}},61:function(e,t,n){var r=n(6560),a=n(1275)(r);e.exports=a},1275:function(e){var t=Date.now;e.exports=function(e){var n=0,r=0;return function(){var a=t(),o=16-(a-r);if(r=a,o>0){if(++n>=800)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}},5514:function(e,t,n){var r=n(4523),a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(a,(function(e,n,r,a){t.push(r?a.replace(o,"$1"):n||e)})),t}));e.exports=i},327:function(e,t,n){var r=n(3448);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(n){}try{return e+""}catch(n){}}return""}},5703:function(e){e.exports=function(e){return function(){return e}}},1747:function(e,t,n){var r=n(5976),a=n(7813),o=n(6612),i=n(1704),c=Object.prototype,l=c.hasOwnProperty,s=r((function(e,t){e=Object(e);var n=-1,r=t.length,s=r>2?t[2]:void 0;for(s&&o(t[0],t[1],s)&&(r=1);++n<r;)for(var u=t[n],p=i(u),d=-1,m=p.length;++d<m;){var f=p[d],v=e[f];(void 0===v||a(v,c[f])&&!l.call(e,f))&&(e[f]=u[f])}return e}));e.exports=s},7813:function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},6557:function(e){e.exports=function(e){return e}},3448:function(e,t,n){var r=n(4239),a=n(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==r(e)}},1704:function(e,t,n){var r=n(4636),a=n(313),o=n(8612);e.exports=function(e){return o(e)?r(e,!0):a(e)}},8306:function(e,t,n){var r=n(3369);function a(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],o=n.cache;if(o.has(a))return o.get(a);var i=e.apply(this,r);return n.cache=o.set(a,i)||o,i};return n.cache=new(a.Cache||r),n}a.Cache=r,e.exports=a},8613:function(e,t,n){var r=n(1811),a=n(3560),o=n(327);e.exports=function(e,t,n){var i=-1,c=(t=r(t,e)).length;for(c||(c=1,e=void 0);++i<c;){var l=null==e?void 0:e[o(t[i])];void 0===l&&(i=c,l=n),e=a(l)?l.call(e):l}return e}},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}}}]);