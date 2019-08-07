(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{216:function(e,t,a){"use strict";a.r(t);var n=a(316),r=a.n(n),i=(a(297),a(317)),o=a.n(i),c=(a(57),a(60)),l=a.n(c),s=a(12),u=a.n(s),m=a(0),d=a.n(m),p=a(87),h=a(279),f=a.n(h),g=a(509),v=a(220),E=a(103),b=(a(116),a(85),a(58),a(91)),w=a.n(b),y=a(1),U=a.n(y),j=a(515),C=a(510),k=a(508),x=a(517),_=a(513),M=a(519),N=a(516),I=a(511),S=a(512),R=function(e){e.preventDefault();var t=e.target;t&&(t.select(),t.focus())},O=Object(v.a)({notchedOutline:{borderTopWidth:0,borderTopLeftRadius:0,borderTopRightRadius:0}})(function(e){var t=e.classes,a=w()(e,["classes"]);return d.a.createElement(j.a,Object.assign({className:t.root,InputProps:{classes:{notchedOutline:t.notchedOutline}}},a))}),D=function(e){var t=e.intl,a=e.values,n=e.loading,r=e.result,i=e.onFieldChange,o=e.onGenerateClick;return d.a.createElement(C.a,{container:!0,spacing:3},d.a.createElement(C.a,{item:!0,xs:12,sm:6},d.a.createElement(j.a,{id:"amount",value:a.amount,onChange:i,label:t.formatMessage({id:"uuid.form.Amount"}),inputProps:{min:"1",max:"20000"},type:"number",fullWidth:!0})),d.a.createElement(C.a,{item:!0,xs:12,sm:6},d.a.createElement(k.a,{fullWidth:!0},d.a.createElement(x.a,{htmlFor:"age-simple"},t.formatMessage({id:"uuid.form.Separator"})),d.a.createElement(_.a,{id:"separator",value:a.separator,onChange:i,inputProps:{id:"separator",name:"separator"},native:!0},d.a.createElement("option",{value:"\n"},t.formatMessage({id:"uuid.form.Separator.NewLine"})),d.a.createElement("option",{value:":"},t.formatMessage({id:"uuid.form.Separator.Colon"})),d.a.createElement("option",{value:";"},t.formatMessage({id:"uuid.form.Separator.Semicolon"})),d.a.createElement("option",{value:"|"},t.formatMessage({id:"uuid.form.Separator.Pipe"}))))),d.a.createElement(C.a,{item:!0},d.a.createElement(M.a,{control:d.a.createElement(N.a,{id:"upperCase",type:"checkbox",checked:a.upperCase,onChange:i}),label:t.formatMessage({id:"uuid.form.UpperCase"})})),d.a.createElement(C.a,{item:!0},d.a.createElement(M.a,{control:d.a.createElement(N.a,{id:"braces",type:"checkbox",checked:a.braces,onChange:i}),label:t.formatMessage({id:"uuid.form.Braces"})+" {}"})),d.a.createElement(C.a,{item:!0},d.a.createElement(M.a,{control:d.a.createElement(N.a,{id:"hyphens",type:"checkbox",checked:a.hyphens,onChange:i}),label:t.formatMessage({id:"uuid.form.Hyphens"})})),d.a.createElement(C.a,{container:!0,justify:"flex-end"},d.a.createElement(I.a,{color:"primary",disabled:n,onClick:o},t.formatMessage({id:"uuid.form.Generate"}))),d.a.createElement(C.a,{item:!0,xs:12},d.a.createElement(S.a,{variant:!0===n?"indeterminate":"determinate",value:100}),d.a.createElement(O,{id:"result",value:r,inputProps:{onMouseOver:R},multiline:!0,fullWidth:!0,variant:"outlined",rows:4})))};D.propTypes={intl:U.a.object,values:U.a.shape({amount:U.a.number,upperCase:U.a.bool,braces:U.a.bool,hyphens:U.a.bool,separator:U.a.string}),loading:U.a.bool.isRequired,result:U.a.string,onFieldChange:U.a.func.isRequired,onGenerateClick:U.a.func.isRequired},D.defaultProps={};var q=Object(p.injectIntl)(D),P=a(293),G=a.n(P),T=a(241),F=a(278),L=a(258),A=a(477),z=a.n(A),V=a(478),W=a.n(V),B=(a(38),a(247),a(120),a(479)),J=a.n(B),H=function(){var e=o()(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===t&&(t=1),(a=new URL(""+J.a.siteMetadata.siteUrl+J.a.siteMetadata.api.uuid)).search=new URLSearchParams({quantity:t}).toString(),e.next=5,fetch(a,{headers:{Accept:"application/json"}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();function Q(e){if(!e.ok)throw Error(""+e.status);return e.json()}var Y=function(e){return void 0===e&&(e=[]),function(t){var a=t.upperCase,n=void 0!==a&&a,r=t.braces,i=void 0!==r&&r,o=t.hyphens,c=void 0===o||o,l=t.separator,s=void 0===l?"\n":l;return e.map(function(e){var t=e;return n&&(t=t.toUpperCase()),i&&(t="{"+t+"}"),c||(t=t.replace(/-/g,"")),t}).join(s)}},K=a(484),X=Object(K.a)({spacing:4,palette:{type:"dark",primary:{main:"#78bcda"},secondary:{main:"#7ea896"}}}),Z=(a(233),a(483),{en:z.a,es:W.a}),$=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleOnFieldChange=a.onFieldChange.bind(l()(a)),a.handleOnGenerate=a.onGenerate.bind(l()(a)),a.state={formValues:{amount:1,upperCase:!1,braces:!1,hyphens:!0,separator:"\n"},loading:!1,result:""},a}u()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.handleOnGenerate(),window.addEventListener("load",this.handleOnGenerate)},a.componentWillUnmount=function(){window.removeEventListener("load",this.handleOnGenerate)},a.onFieldChange=function(e){e.persist();var t=Object.assign({},this.state.formValues),a=e.target.value;switch(e.target.type){case"number":a=e.target.valueAsNumber;break;case"checkbox":a=e.target.checked}t[e.target.id]=a,this.setState({formValues:t})},a.onGenerate=function(){var e=o()(r.a.mark(function e(){var t,a,n,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.formValues,(a=this.state.formValues.amount)>2e4?(a=2e4,this.setState({formValues:{amount:2e4}})):a<1&&(a=1),this.setState({loading:!0,formValues:Object.assign({},t,{amount:a})}),e.prev=4,e.next=7,H(a).then(Q);case 7:n=e.sent,i=Y(n)(this.state.formValues),this.setState({result:i});case 10:return e.prev=10,this.setState({loading:!1}),e.finish(10);case 13:case"end":return e.stop()}},e,this,[[4,,10,13]])}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this.props,t=e.pageContext,a=e.intl,n=e.classes,r=this.state,i=r.formValues,o=r.loading,c=r.result,l=a.formatMessage({id:"uuid.title"});return d.a.createElement(E.a,{theme:X},d.a.createElement(F.a,{className:"uuid",pageContext:t},d.a.createElement(L.a,{pageContext:t,lang:t.lang,title:l,description:a.formatMessage({id:"uuid.meta.description"}),image:G.a}),d.a.createElement("div",{className:"uuid__title"},d.a.createElement("div",{className:"uuid__title-filter"},d.a.createElement("h1",{className:"uuid__title-text"},l))),d.a.createElement("section",{className:"uuid__form"},d.a.createElement(g.a,{className:n.root},d.a.createElement(q,{values:i,loading:o,result:c,onFieldChange:this.handleOnFieldChange,onGenerateClick:this.handleOnGenerate}))),d.a.createElement("section",{className:"uuid__about markdown-section"},d.a.createElement(f.a,{source:Z[t.lang],linkTarget:"_blank",renderers:{link:T.a}}))))},t}(d.a.Component),ee=Object(p.injectIntl)(Object(v.a)(function(e){return{root:{padding:e.spacing(3,2)}}})($));t.default=ee},222:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(56),l=a.n(c);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return c.navigate});a(235);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},224:function(e,t){e.exports={localizedPath:function(e){return function(t){return e.default?t:"/"+e.path+t}}}},229:function(e,t){e.exports={en:{path:"en",name:"English",language:"en",default:!0},es:{path:"es",name:"Español",language:"es",default:!1}}},235:function(e,t,a){var n;e.exports=(n=a(254))&&n.default||n},241:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.href,a=e.children;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a)}},254:function(e,t,a){"use strict";a.r(t);a(57);var n=a(0),r=a.n(n),i=a(1),o=a.n(i),c=a(89),l=a(5),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},257:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://www.marcnuri.com",year:2019}}}}},258:function(e,t,a){"use strict";a(57);var n=a(259),r=a(0),i=a.n(r),o=a(1),c=a.n(o),l=a(222),s=a(282),u=a(260),m=a.n(u),d=a(229),p=a.n(d),h=a(224),f=function(e){var t=e.data,a=e.lang,n=e.title,r=e.description,o=e.image,c=e.pageContext,l=t.site.siteMetadata,u=[{"@context":"http://schema.org","@type":"WebSite",url:l.siteUrl,name:n,author:l.author,alternateName:l.title,inLanguage:a}],d=o&&""+l.siteUrl+o;return i.a.createElement(s.Helmet,null,i.a.createElement("meta",{charSet:"UTF-8"}),i.a.createElement("html",{lang:a}),i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),d&&i.a.createElement("meta",{name:"image",content:d}),m()(p.a).map(function(e){return i.a.createElement("link",{key:e.path,rel:"alternate",hreflang:e.language,href:Object(h.localizedPath)(e)(c.pagePath)})}),i.a.createElement("meta",{property:"og:type",content:"profile"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:site_name",content:l.author}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:l.siteUrl}),i.a.createElement("meta",{property:"og:locale",content:a}),d&&i.a.createElement("meta",{property:"og:image",content:d}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:l.social.twitter}),i.a.createElement("meta",{name:"twitter:site",content:l.social.twitter}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),d&&i.a.createElement("meta",{name:"twitter:image",content:d}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(u)))},g=function(e){return i.a.createElement(l.b,{query:"3860048025",render:function(t){return i.a.createElement(f,Object.assign({data:t},e))},data:n})};g.propTypes={lang:c.a.string.isRequired,title:c.a.string.isRequired,description:c.a.string.isRequired,image:c.a.string,pageContext:c.a.shape({pagePath:c.a.string.isRequired}).isRequired},g.defaultProps={image:null},t.a=g},259:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"https://www.marcnuri.com",title:"Marc Nuri",author:"Marc Nuri",social:{twitter:"@MarcNuri"}}}}}},278:function(e,t,a){"use strict";a(247),a(58);var n=a(60),r=a.n(n),i=a(12),o=a.n(i),c=a(0),l=a.n(c),s=a(1),u=a.n(s),m=a(222),d=a(224),p=function(e){var t=e.children;return l.a.createElement("span",{className:"header__title-short"},t)},h=function(e){var t=e.children;return l.a.createElement("span",{className:"header__title-long"},t)},f=function(e){var t=e.pageContext;return l.a.createElement("span",{onClick:function(){return function(e){(document.documentElement.scrollTop||document.body.scrollTop)>0?window.scrollTo(0,0):Object(m.c)(Object(d.localizedPath)(e.locale)("/"))}(t)}},l.a.createElement(p,null,"<"),"M",l.a.createElement(h,null,"a"),l.a.createElement(h,null,"r"),l.a.createElement(h,null,"c"),l.a.createElement(h,null," "),"N",l.a.createElement(h,null,"u"),l.a.createElement(h,null,"r"),l.a.createElement(h,null,"i"),l.a.createElement(p,null,">"))},g=function(e){var t=e.icon,a=e.url,n=e.title;return l.a.createElement("li",{className:"header__nav-bar-item"},l.a.createElement("a",{className:"header__nav-bar-item-link",href:a,title:n,rel:"noreferrer noopener"},l.a.createElement("i",{className:t})))},v=(a(233),function(e){var t=e.pageContext,a=e.scrolled;return l.a.createElement("header",{className:"header"+(a?" header--scrolled":"")},l.a.createElement("div",{className:"header__title"},l.a.createElement(f,{pageContext:t})),l.a.createElement("nav",{className:"header__nav-bar"},l.a.createElement("ul",{className:"header__nav-bar-list"},l.a.createElement(g,{url:"https://www.linkedin.com/in/marcnuri",icon:"icon-linkedin",title:"LinkedIn"}),l.a.createElement(g,{url:"https://www.github.com/manusa",icon:"icon-github-circled",title:"GitHub"}),l.a.createElement(g,{url:"https://www.twitter.com/MarcNuri",icon:"icon-twitter",title:"Twitter"}),l.a.createElement(g,{url:"https://blog.marcnuri.com",icon:"icon-edit",title:"Blog"}))))});v.propTypes={pageContext:u.a.object.isRequired,scrolled:u.a.bool.isRequired};var E=v,b=(a(57),a(256),a(116),a(85),a(245),a(257)),w=a(229),y=a.n(w),U=function(e){var t=e.data,a=e.pageContext;return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__locale"},l.a.createElement("ul",null,Object.values(y.a).map(function(e){return l.a.createElement("li",{key:e.path},l.a.createElement(m.a,{to:Object(d.localizedPath)(e)(a.pagePath)},e.name))}))),l.a.createElement("div",{className:"footer__deprecated"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(m.a,{to:Object(d.localizedPath)(a.locale)("/scrum-poker-online")},"Scrum Poker")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.marcnuri.com/adr-online"},"ADR Online")),l.a.createElement("li",null,l.a.createElement(m.a,{to:Object(d.localizedPath)(a.locale)("/uuid")},"UUID")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.marcnuri.com/iban"},"IBAN")))),l.a.createElement("div",{className:"footer__social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/marcnuri",rel:"noreferrer"},"LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/manusa",rel:"noreferrer"},"GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.twitter.com/MarcNuri",rel:"noreferrer"},"Twitter")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://blog.marcnuri.com",rel:"noreferrer"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://presentations.marcnuri.com",rel:"noreferrer"},"Talks")))),l.a.createElement("div",{className:"footer__copyright"},"© ",t.site.siteMetadata.year," ",l.a.createElement("a",{href:t.site.siteMetadata.siteUrl},"Marc Nuri")))},j=function(e){return l.a.createElement(m.b,{query:"4151219252",render:function(t){return l.a.createElement(U,Object.assign({data:t},e))},data:b})},C=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={scrolled:!1},a.handleOnScroll=a.onScroll.bind(r()(a)),a}o()(t,e);var a=t.prototype;return a.onScroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;this.setState({scrolled:e>1})},a.componentDidMount=function(){window.addEventListener("scroll",this.handleOnScroll),window.addEventListener("load",this.handleOnScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleOnScroll),window.removeEventListener("load",this.handleOnScroll)},a.render=function(){var e=this.props,t=e.pageContext,a=e.className,n=e.children,r=this.state.scrolled,i=l.a.Children.toArray(n).map(function(e){return l.a.cloneElement(e,{"data-scrolled":r.toString()})});return l.a.createElement("div",{className:a},l.a.createElement(E,{pageContext:t,scrolled:r}),i,l.a.createElement(j,{pageContext:t}))},t}(l.a.Component);C.propTypes={pageContext:u.a.object.isRequired,className:u.a.string},C.defaultProps={className:""};t.a=C},293:function(e,t,a){e.exports=a.p+"static/face-512-245e5bef1f9d5cb74fb8e68b820f9965.png"},477:function(e,t){e.exports="_Use these UUIDs at your own risk, their uniqueness is not guaranteed._\n\n## About\nThis is an online tool to generate UUID / GUID.\nUUID/GUID comes from the acronym Universally/Globally Unique Identifier,\nwhich is a 128-bit number used to identify information in computer systems.\n\nYou can check the sourcecode for the project at:\n\n[Front-End (Gatsby static site)](https://github.com/manusa/com.marcnuri.www)\n\n[Back-End (microservice)](https://github.com/manusa/com.marcnuri.uuid)\n\n## What's a version 4 UUID?\nVersion 4 UUIDs use random numbers for its generation (except for 6 bits reserved for variant and version).\nVersions 1, 2, 3 and 5 are not completely random and use information such as MAC address and date-time (1/2)\nor namespace (3/5) for its generation.\n\nThis application uses the method `randomUUID()` of the java \n[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html) class.\nThe generated keys are type 4 pseudo randomly generated UUIDs. The Java implementation \nuses [`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\nthat uses an unpredictable value as the seed in order to comply with\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) making its output strong and lowering the chances \nof collisions.\n\n## What's the difference between GUID and UUID?\nBoth terms refer to the same technical concept published in the \n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt) specification.\n\nIn general, the term GUID is most used across developers using Microsoft technologies.\n\n## More information\n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)\n\n[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)\n\n[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\n\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)\n\n[Wikipedia article](https://en.wikipedia.org/wiki/Universally_unique_identifier)\n"},478:function(e,t){e.exports="_La unícidad de las claves que aquí se proporcionan no está garantizada, usálo bajo tu responsabilidad._\n\n## Acerca de...\nEsta aplicación es un generador de claves únicas UUID/GUID.\nUn UUID es un identificador único global/universal, que es un número de 128 bits empleado\nen sistemas de computación para identificar información.\n\nEl código fuente de este proyecto está disponible en:\n\n[Front-End (Página estática generada con Gatsby)](https://github.com/manusa/com.marcnuri.www)\n\n[Back-End (microservicio)](https://github.com/manusa/com.marcnuri.uuid)\n\n## ¿Qué es un UUID versión 4?\nLos UUIDs de versión 4 emplean números aleatorios apra su generación (excepto 6 birs reservados para \nla variante y la versión). Las versiones 1, 2, 3 y 5 no son completamente aleatoriasy emplean información como\nla dirección MAC y la fecha-hora (1/2) o el namespace (3/5) para su generación.\n\nEsta aplicación utiliza el método `randomUUID()` de la clase de java \n[`java.util.UUID`](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html).\nLas claves generadas son de tipo 4. La implementación Java utiliza \n[`java.security.SecureRandom`](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\nque emplea un valor impredecible como semilla de para cumplir con \n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt) haciendo que su salida sea criptográficamente fuerte\ny minimizando las probabilidades de obtener una colisión.\n\n## ¿Cuál es la diferencia entre GUID y UUID?\nAmbos términos se refieren al mismo concepto técnico publicado en la especificación \n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt).\n\nEn general, el término GUID se emplea más entre los desarrolladores que trabajan con tecnologías\nMicrosoft.\n\n## Más información\n[RFC 4122](https://www.ietf.org/rfc/rfc4122.txt)\n\n[java.util.UUID](https://docs.oracle.com/javase/8/docs/api/java/util/UUID.html)\n\n[java.security.SecureRandom](https://docs.oracle.com/javase/8/docs/api/java/security/SecureRandom.html)\n\n[RFC 1750](https://www.ietf.org/rfc/rfc1750.txt)\n\n[Artículo en Wikipedia](https://es.wikipedia.org/wiki/Universally_unique_identifier)\n"},479:function(e,t,a){(function(t){var n=a(480);e.exports={siteMetadata:{title:"Marc Nuri",siteUrl:"https://www.marcnuri.com",year:2019,description:"I craft code",author:"Marc Nuri",social:{twitter:"@MarcNuri"},api:{uuid:"/api/uuid"}},plugins:["gatsby-plugin-react-helmet",{resolve:"gatsby-plugin-sass",options:{includePaths:[a(287).resolve(t,"node_modules")]}},{resolve:"gatsby-plugin-google-analytics",options:{trackingId:"UA-1509094-4"}},{resolve:"gatsby-plugin-sitemap",options:{serialize:n.serializer}},{resolve:"gatsby-plugin-robots-txt",options:{policy:[{userAgent:"*",allow:"/"}]}},{resolve:"gatsby-plugin-manifest",options:{short_name:"Marc Nuri",start_url:"/",background_color:"#78bcda",theme_color:"#78bcda",display:"browser",icon:"src/components/avatar/face-512-t.png"}},"gatsby-plugin-material-ui"]}}).call(this,"/")},480:function(e,t,a){a(116),a(85),a(58),a(481);var n=a(229),r=["adr-online","iban"];e.exports={serializer:function(e){var t=e.site,a=e.allSitePage,i=[];return i.push.apply(i,function(e){var t=e.site;return e.allSitePage.edges.map(function(e){return{url:""+t.siteMetadata.siteUrl+e.node.path,changefreq:"daily",priority:.7}})}({site:t,allSitePage:a})),i.push.apply(i,function(e){var t=[];return[""].concat(Object.keys(n).map(function(e){return e+"/"})).forEach(function(a){r.forEach(function(n){t.push({url:e.siteMetadata.siteUrl+"/"+a+n+"}",changefreq:"yearly",priority:.7})})}),t}(t)),i}}}}]);