(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(22),i=a.n(n),r=(a(31),a(32),a(10)),l=a(3),o=a(5),j=a(1);var m=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0];return t[1],Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsx)("div",{className:"navbar",children:Object(j.jsxs)("div",{className:"nav-container",children:[Object(j.jsx)("h1",{className:"navBrand",children:"Larry's ToDo App!"}),Object(j.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/",className:"nav-links",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/Todolist.js",className:"nav-links",children:"ToDo List"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(r.b,{to:"/Form.js",className:"nav-links",children:"Feedback"})})]})]})})})},d=a.p+"static/media/IMG_2959.65317f0b.png";var b=function(){return Object(j.jsxs)("div",{className:"content-a",children:[Object(j.jsx)("h1",{className:"welcomeHome",children:"Welcome to my ToDo App"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"homeimage",children:Object(j.jsx)("img",{src:d,alt:"Larry Avatar",className:"avatar"})})]})},u=a(20);var O=function(e){var t=Object(c.useState)(e.edit?e.edit.value:""),a=Object(o.a)(t,2),s=a[0],n=a[1],i=Object(c.useRef)(null);Object(c.useEffect)((function(){i.current.focus()}));var r=function(e){n(e.target.value)};return Object(j.jsx)("form",{className:"todo-form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:s}),n("")},children:e.edit?Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Update your item",value:s,name:"text",className:"todo-input edit",onChange:r,ref:i}),Object(j.jsx)("button",{className:"todo-button edit",children:"Update"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Add a todo",value:s,name:"text",className:"todo-input",onChange:r,ref:i}),Object(j.jsx)("button",{className:"todo-button",children:"Add todo"})]})})},x=a(25),h=a(26),v=function(e){var t=e.todos,a=e.completeTodo,s=e.removeTodo,n=e.updateTodo,i=Object(c.useState)({id:null,value:""}),r=Object(o.a)(i,2),l=r[0],m=r[1];return l.id?Object(j.jsx)(O,{edit:l,onSubmit:function(e){n(l.id,e),m({id:null,value:""})}}):t.map((function(e,t){return Object(j.jsxs)("div",{className:e.isComplete?"todo-row complete":"todo-row",children:[Object(j.jsx)("div",{onClick:function(){return a(e.id)},children:e.text},e.id),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)(x.a,{onClick:function(){return s(e.id)},className:"delete-icon"}),Object(j.jsx)(h.a,{onClick:function(){return m({id:e.id,value:e.text})},className:"edit-icon"})]})]},t)}))};var f=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsxs)("div",{className:"content-a",children:[Object(j.jsx)("h1",{className:"todoTitle",children:"What's the plan for today?"}),Object(j.jsx)(O,{onSubmit:function(e){if(e.text&&!/^\s*$/.test(e.text)){var t=[e].concat(Object(u.a)(a));s(t)}}}),Object(j.jsx)(v,{todos:a,completeTodo:function(e){var t=a.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));s(t)},removeTodo:function(e){var t=Object(u.a)(a).filter((function(t){return t.id!==e}));s(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&s((function(a){return a.map((function(a){return a.id===e?t:a}))}))}})]})},p=a(14),N=a(19),g=function(e,t){var a=Object(c.useState)({firstname:"",lastname:"",email:"",textbox:""}),s=Object(o.a)(a,2),n=s[0],i=s[1],r=Object(c.useState)({}),l=Object(o.a)(r,2),j=l[0],m=l[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),u=b[0],O=b[1];return Object(c.useEffect)((function(){0===Object.keys(j).length&&u&&e()}),[j]),{handleChange:function(e){var t=e.target,a=t.name,c=t.value;i(Object(N.a)(Object(N.a)({},n),{},Object(p.a)({},a,c)))},values:n,handleSubmit:function(e){e.preventDefault(),m(t(n)),O(!0)},errors:j}};function S(e){var t={};return e.firstname.trim()||(t.firstname="First Name required"),e.lastname.trim()||(t.lastname="Last Name required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email required",t}var y=function(e){var t=e.submitForm,a=g(t,S),c=a.handleChange,s=a.values,n=a.handleSubmit,i=a.errors;return Object(j.jsx)("div",{className:"blackboard",children:Object(j.jsxs)("form",{className:"form1",onSubmit:n,children:[Object(j.jsx)("h1",{children:"Leave me some Feedback!"}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"firstname",className:"form-label",children:"First Name:"}),Object(j.jsx)("input",{type:"text",name:"firstname",className:"form-input",placeholder:"Enter here",value:s.firstname,onChange:c}),i.firstname&&Object(j.jsx)("p",{children:i.firstname})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"lastname",className:"form-label",children:"Last Name:"}),Object(j.jsx)("input",{type:"text",name:"lastname",className:"form-input",placeholder:"Enter here",value:s.lastname,onChange:c})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email:"}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",className:"form-input",placeholder:"Enter here",value:s.email,onChange:c}),Object(j.jsx)("br",{}),i.email&&Object(j.jsx)("p",{children:i.email})]}),Object(j.jsxs)("div",{className:"form-inputs",children:[Object(j.jsx)("label",{htmlFor:"textbox",className:"form-label",children:"Message:"}),Object(j.jsx)("textarea",{type:"text",name:"textbox",className:"form-input",placeholder:"Enter here",rows:"4",cols:"50",value:s.textbox,onChange:c}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"formsubmit",children:Object(j.jsx)("p",{className:"form-input",children:Object(j.jsx)("input",{id:"formbutton",type:"submit",value:"Send"})})})]})})},C=a.p+"static/media/IMG_2960.bfca2855.png",k=function(){return Object(j.jsxs)("div",{className:"form-content-right",children:[Object(j.jsx)("div",{className:"form-success",children:Object(j.jsx)("h1",{children:"We have received your message!"})}),Object(j.jsx)("div",{className:"successimage",children:Object(j.jsx)("img",{src:C,alt:"Larry Avatar",className:"avatar2"})})]})},F=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(j.jsx)("div",{className:"content-a",children:a?Object(j.jsx)(k,{}):Object(j.jsx)(y,{submitForm:function(){s(!0)}})})};var T=function(){return Object(j.jsxs)(r.a,{children:[Object(j.jsx)(m,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,component:b}),Object(j.jsx)(l.a,{path:"/Todolist.js",component:f}),Object(j.jsx)(l.a,{path:"/Form.js",component:F})]})]})};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.87084829.chunk.js.map