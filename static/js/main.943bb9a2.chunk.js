(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(16),i=n.n(c),r=(n(22),n(10)),b=n(0),o=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"title",children:Object(b.jsx)("h1",{children:e.title})}),Object(b.jsx)("button",{className:"btn",onClick:e.handleClick,children:"CLICK"})]})},j=n(32),l=[{title:"Calculus by Michael Spivak",statements:[{id:1,statement:"square root of two is irrational"},{id:2,statement:"there are infinite number of prime numbers"},{id:3,statement:"y=x^2 is a continuous at 0"},{id:4,statement:"e is irrational"},{id:5,statement:"pi is irrational"}]},{title:"Linear Algebra by Stephen Friedberg",statements:[]},{title:"Contemporary Abstract Algebra by Joseph Gallian",statements:[]}],d=function(e){var t=Object(s.useState)(e.statements),n=Object(r.a)(t,2),a=n[0],c=n[1];Object(s.useEffect)((function(){c(e.statements)}),[e.statements]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("ol",{children:a.map((function(t){var n=t.id,s=t.statement;return Object(b.jsxs)("li",{className:"sentences",children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:s})}),Object(b.jsx)("button",{children:"EDIT"}),Object(b.jsx)("button",{onClick:function(){return function(t){var n=a.filter((function(e){return e.id!==t}));c(n),l[e.index].statements=n}(n)},children:"REMOVE"})]},n)}))}),Object(b.jsx)("div",{className:"form",children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=a.concat({id:Object(j.a)(),statement:document.getElementById("statement").value});c(n),l[e.index].statements=n,document.getElementById("statement").value=""},children:[Object(b.jsx)("input",{type:"text",name:"axiom",id:"statement",required:"required"}),Object(b.jsx)("button",{children:"ADD"})]})})]})},m=n(7),u=n(2),h=function(){return Object(b.jsxs)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:[Object(b.jsx)(m.b,{to:"/books",className:"navbar-brand",children:"MathRepo"}),Object(b.jsx)("div",{className:"collapse navbar-collapse",children:Object(b.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(m.b,{to:"/books",className:"nav-link",children:"Math Books"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(m.b,{to:"/books/create",className:"nav-link",children:"Create Book"})}),Object(b.jsx)("li",{className:"navbar-item",children:Object(b.jsx)(m.b,{to:"/books/:bookId/edit",className:"nav-link",children:"Edit Book"})})]})})]})},x=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"this is mathbook lists"})})},O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"this is edit book section"})})},v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"this is book create section"})})};n(29);var p=function(){var e=Object(s.useState)(l[0]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(0),i=Object(r.a)(c,2),j=i[0],p=i[1];return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(h,{}),Object(b.jsx)("br",{}),Object(b.jsx)(u.a,{path:"/books",exact:!0,component:x}),Object(b.jsx)(u.a,{path:"/books/:bookId/edit",exact:!0,component:O}),Object(b.jsx)(u.a,{path:"/books/create",exact:!0,component:v}),Object(b.jsx)("div",{className:"header",children:Object(b.jsx)(o,{title:n.title,handleClick:function(){l[j+1]?(a(l[j+1]),p((function(e){return e+1}))):(a(l[0]),p(0))}})}),Object(b.jsx)("div",{className:"mainbody",children:Object(b.jsx)(d,{statements:n.statements,index:j})})]})})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.943bb9a2.chunk.js.map