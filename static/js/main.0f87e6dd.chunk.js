(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{30:function(e,t,n){e.exports=n(41)},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l),o=n(15),m=n(23),u=n.n(m);var i=function(){return c.a.createElement("header",null,c.a.createElement("h1",{className:"ml-3"},c.a.createElement(u.a,null),"Take Note"))};var s=function(){const e=(new Date).getFullYear();return c.a.createElement("footer",{className:"footer text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"Copyright \u24d2 ",e)))},E=n(25),d=n.n(E);var p=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(d.a,null)))},f=n(21),v=n(26),b=n.n(v),h=n(56),N=n(57);var g=function(e){const t=Object(a.useState)(!1),n=Object(o.a)(t,2),l=n[0],r=n[1],m=Object(a.useState)({title:"",content:""}),u=Object(o.a)(m,2),i=u[0],s=u[1];function E(e){const t=e.target,n=t.name,a=t.value;s(e=>Object(f.a)(Object(f.a)({},e),{},{[n]:a}))}return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"create-note col-7 col-sm-7 col-md-6"},l&&c.a.createElement("input",{name:"title",onChange:E,value:i.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:E,value:i.content,placeholder:"Take a note...",rows:l?3:1}),c.a.createElement(N.a,{in:l},c.a.createElement(h.a,{onClick:function(t){e.onAdd(i),s({title:"",content:""}),t.preventDefault()}},c.a.createElement(b.a,null))))))};var j=function(){const e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],l=t[1];function r(e){l(t=>t.filter((t,n)=>n!==e))}return c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(g,{onAdd:function(e){l(t=>[...t,e])}}),n.map((e,t)=>c.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:r})),c.a.createElement(s,null))};r.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.0f87e6dd.chunk.js.map