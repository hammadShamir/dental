(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{1748:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return s(9966)}])},8915:function(e,a,s){"use strict";var l=s(5893);s(7294);var n=s(1664),t=s.n(n);let c=e=>{let{pageTitle:a,homePageUrl:s,homePageText:n,activePageText:c,imgClass:i}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"page-title-area ".concat(i),children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsx)("div",{className:"d-table-cell",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"page-title-content",children:[(0,l.jsx)("h2",{children:a}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(t(),{href:s,children:n})}),(0,l.jsx)("li",{className:"active",children:c})]})]})})})})})})};a.Z=c},3827:function(e,a,s){"use strict";var l=s(5893),n=s(7294),t=s(1163),c=s(1664),i=s.n(c),r=s(6458),o=s(9259);let d=()=>{let[e,a]=(0,n.useState)(""),s=(0,t.useRouter)(),[c,d]=(0,n.useState)(o.fi),m=c.map(a=>(0,l.jsxs)("li",{className:"nav-item",children:[a.dropDown?(0,l.jsxs)(i(),{href:"",onClick:e=>{e.preventDefault()},className:"nav-link ".concat(e=="/".concat(a.name.split(" ")[0].toLowerCase(),"}/")&&"active"),children:[a.name,a.dropDown&&(0,l.jsx)("i",{className:"bx bx-plus"})]}):(0,l.jsxs)(i(),{href:"home"===a.name.split(" ")[0].toLowerCase()?"/":"/".concat(a.name.split(" ")[0].toLowerCase(),"/"),className:"nav-link ".concat(e=="/".concat(a.name.split(" ")[0].toLowerCase(),"}/")&&"active"),children:[a.name,a.dropDown&&(0,l.jsx)("i",{className:"bx bx-plus"})]}),a.dropDown&&(0,l.jsx)("ul",{className:"dropdown-menu",children:a.dropDown.map(a=>(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(i(),{href:"/".concat(a.href.toLowerCase(),"/"),className:"nav-link ".concat(e=="/".concat(a.href.toLowerCase(),"/")&&"active"),children:a.element})}))})]}));(0,n.useEffect)(()=>{a(s.asPath)},[s]);let[h,x]=n.useState(!0),u=()=>{x(!h)};return n.useEffect(()=>{let e=document.getElementById("navbar");document.addEventListener("scroll",()=>{window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})}),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("header",{className:"header-area",children:[(0,l.jsx)(r.Z,{}),(0,l.jsx)("div",{className:"nav-area nav-area-seven",children:(0,l.jsx)("div",{id:"navbar",className:"navbar-area",children:(0,l.jsx)("div",{className:"main-nav",children:(0,l.jsx)("nav",{className:"navbar navbar-expand-md navbar-light",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(i(),{href:"/",className:"navbar-brand d-flex justify-content-left align-items-center",children:[(0,l.jsx)("img",{width:70,src:"/img/about/logo.png",alt:"logo"}),(0,l.jsxs)("div",{className:"d-flex flex-column",children:[(0,l.jsx)("h4",{className:"m-0",style:{color:"#01D8F0",letterSpacing:"0.1ch"},children:"Esthetix"}),(0,l.jsx)("p",{className:"p-0 ",style:{color:"white"},children:"Dental Center"})]})]}),(0,l.jsxs)("button",{onClick:u,className:h?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:[(0,l.jsx)("span",{className:"icon-bar top-bar"}),(0,l.jsx)("span",{className:"icon-bar middle-bar"}),(0,l.jsx)("span",{className:"icon-bar bottom-bar"})]}),(0,l.jsx)("div",{className:h?"collapse navbar-collapse":"collapse navbar-collapse show",id:"navbarSupportedContent",children:(0,l.jsx)("ul",{className:"navbar-nav m-auto gap-4",children:m})}),(0,l.jsx)("div",{className:"others-option d-flex align-items-center ",style:{height:"45px"},children:(0,l.jsx)("div",{className:"subscribe d-flex justify-content-center align-items-center",style:{height:"100%"},children:(0,l.jsx)("a",{href:"/appointment",className:"default-btn",children:"Appointment"})})})]})})})})})]})})};a.Z=d},9966:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return m}});var l=s(5893),n=s(7294),t=s(3827),c=s(8915),i=s(6519),r=s(5171),o=s(9259);let d=()=>{let[e,a]=(0,n.useState)(!1),[s,d]=(0,n.useState)(""),m=()=>{a(!1)};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{}),(0,l.jsx)(c.Z,{pageTitle:"Our Galley",homePageUrl:"/",homePageText:"Home",activePageText:"Our Gallery",imgClass:"bg-3"}),(0,l.jsx)("div",{className:"doctors-area-two pt-100 pb-70",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"section-title",children:[(0,l.jsx)("span",{className:"top-title",children:"Our Doctors"}),(0,l.jsx)("h2",{children:"Our Gallery"}),(0,l.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta, temporibus."})]}),(0,l.jsxs)("div",{className:"row justify-content-center",children:[o.lj&&o.lj.map((e,s)=>(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,l.jsx)("div",{className:"single-doctors-two",style:{cursor:"pointer"},onClick:()=>{d(e.url),a(!0)},children:(0,l.jsx)("div",{className:"doctor-img",children:(0,l.jsx)("img",{src:e.url,alt:"Image"})})})},s)})),e&&(0,l.jsxs)("div",{id:"myModal",className:"modal",onClick:m,children:[(0,l.jsx)("span",{className:"close",children:"\xd7"}),(0,l.jsx)("img",{className:"modal-content",id:"img01",src:s})]})]})]})}),(0,l.jsx)(i.Z,{}),(0,l.jsx)(r.Z,{})]})};var m=d},1163:function(e,a,s){e.exports=s(6885)}},function(e){e.O(0,[664,524,774,888,179],function(){return e(e.s=1748)}),_N_E=e.O()}]);