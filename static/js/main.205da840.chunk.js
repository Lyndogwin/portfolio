(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{28:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var s=t(1),c=t.n(s),n=t(19),i=t.n(n),l=t(8),r=t(9),d=t(11),b=t(10),o=(t(28),t(0)),j=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("section",{className:"hero is-success",children:Object(o.jsxs)("div",{className:"hero-body",children:[Object(o.jsx)("p",{className:"title",children:"Brandon Bost"}),Object(o.jsx)("p",{className:"subtitle",children:"Software Engineer and Video game developer"})]})}),Object(o.jsxs)("div",{className:"tile is-ancestor",children:[Object(o.jsxs)("div",{className:"tile is-4 is-vertical is-parent",children:[Object(o.jsx)("div",{className:"tile is-child box",children:Object(o.jsx)("p",{className:"title",children:"About"})}),Object(o.jsx)("div",{className:"tile is-child box",children:Object(o.jsx)("p",{className:"title",children:"Goals"})})]}),Object(o.jsx)("div",{className:"tile is-parent",children:Object(o.jsx)("div",{className:"tile is-child box",children:Object(o.jsx)("p",{className:"title",children:"Projects"})})})]})]})}}]),t}(c.a.Component),h=t(20),m=t(13),v=t.n(m);Object(m.init)("".concat("user_lIakUgFS2sHCfOIFlFV43"));var x=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={name:"",email:"",feedback:""},s}return Object(r.a)(t,[{key:"sendMessage",value:function(e){e.preventDefault();var a={from_name:this.state.name,email:this.state.email,to_name:"Brandon",feedback:this.state.feedback};v.a.send("service_j9zwru8","template_d9sifmt",a).then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("Your message was not able to be sent",e)})),this.setState({name:"",email:"",feedback:""})}},{key:"handleInputChange",value:function(e){e.preventDefault();var a=e.target,t=a.id,s=a.value;console.log("".concat(t," : ").concat(s)),this.setState(Object(h.a)({},t,s))}},{key:"render",value:function(){return Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Name"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{id:"name",className:"input",type:"text",onChange:this.handleInputChange.bind(this),value:this.state.name,placeholder:"e.g Alex Smith"})})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Email"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{id:"email",className:"input",type:"email",onChange:this.handleInputChange.bind(this),value:this.state.email,placeholder:"e.g. alexsmith@gmail.com"})})]}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",children:"Message"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("textarea",{id:"feedback",className:"textarea",onChange:this.handleInputChange.bind(this),value:this.state.feedback,placeholder:"Textarea"})})]}),Object(o.jsx)("div",{className:"field is-grouped",children:Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{className:"button is-link",onClick:this.sendMessage.bind(this),children:"Send"})})})]})})}}]),t}(c.a.Component),u=t(21),O=t(2),p=function(e){Object(d.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=a.call.apply(a,[this].concat(c))).state={active_burger:!1,active_sentax:""},e.expandNav=function(){e.state.active_burger?e.setState({active_sentax:"",active_burger:!1}):e.setState({active_sentax:"is-active",active_burger:!0})},e}return Object(r.a)(t,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation",children:[Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)("a",{className:"navbar-item",href:"https://bulma.io",children:Object(o.jsx)("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28",alt:"Logo"})}),Object(o.jsxs)("a",{role:"button",className:"navbar-burger ".concat(this.state.active_sentax),"aria-label":"menu","aria-expanded":"false","data-target":"navbarOptions",onClick:this.expandNav,children:[Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"}),Object(o.jsx)("span",{"aria-hidden":"true"})]})]}),Object(o.jsxs)("div",{id:"navbarOptions",className:"navbar-menu ".concat(this.state.active_sentax),children:[Object(o.jsxs)("div",{className:"navbar-start",children:[Object(o.jsx)("a",{className:"navbar-item",href:"/portfolio/",children:"Home"}),Object(o.jsx)("a",{className:"navbar-item",href:"/portfolio/#/contact",children:"Contact"}),Object(o.jsxs)("div",{className:"navbar-item has-dropdown is-hoverable",children:[Object(o.jsx)("a",{className:"navbar-link",children:"More"}),Object(o.jsxs)("div",{className:"navbar-dropdown",children:[Object(o.jsx)("a",{className:"navbar-item",href:"https://github.com/Lyndogwin",children:"GitHub"}),Object(o.jsx)("a",{className:"navbar-item",href:"www.linkedin.com/in/brandonbost0110",children:"Linkdin"}),Object(o.jsx)("hr",{className:"navbar-divider"}),Object(o.jsx)("a",{className:"navbar-item",children:"Report an issue with this site"})]})]})]}),Object(o.jsx)("div",{className:"navbar-end"})]})]}),Object(o.jsx)(u.a,{basename:"/portfolio",children:Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{path:"/",component:j,exact:!0}),Object(o.jsx)(O.a,{path:"/contact/",component:x})]})})]})}}]),t}(c.a.Component);i.a.render(Object(o.jsx)(p,{}),document.querySelector("#root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.205da840.chunk.js.map