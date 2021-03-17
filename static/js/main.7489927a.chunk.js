(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={container:"src_container__12MZc"}},11:function(t,e,n){t.exports={contactListItem:"contactListItem_contactListItem__1luOg",btnRemove:"contactListItem_btnRemove__oVHF3"}},13:function(t,e,n){t.exports={inputFilter:"filter_inputFilter__UnLCP"}},2:function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2leNd",contactInput:"contactForm_contactInput__2jPQs",btn:"contactForm_btn__1YAmF"}},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),o=n.n(r),s=n(10),i=n.n(s),l=n(3),u=n(14),m=n(4),b=n(5),h=n(8),d=n(7),j=n(6),p=n(2),f=n.n(p),O=n(0),v=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target.name;t.setState(Object(l.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;(0,t.props.addContact)(a,c),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.contactForm,children:[Object(O.jsxs)("label",{htmlFor:"name",children:["Name",Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"name",type:"text",className:f.a.contactInput,placeholder:"insert a name",onChange:this.handleChange,value:e})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{htmlFor:"number",className:f.a.label,children:["Number",Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"number",type:"text",className:f.a.contactInput,placeholder:"insert a number",onChange:this.handleChange,value:n})]}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})}}]),n}(a.Component),x=n(11),g=n.n(x),C=function(t){var e=t.id,n=t.name,a=t.number,c=t.handleRemove;return Object(O.jsxs)("li",{className:g.a.contactListItem,children:[Object(O.jsx)("span",{children:n}),Object(O.jsx)("span",{children:a}),Object(O.jsx)("button",{onClick:function(){return c(e)},className:g.a.btnRemove,children:"Delete"})]})},_=function(t){var e=t.visibleContacts,n=t.handleRemove;return e.length?Object(O.jsx)("ul",{children:e.map((function(t){var e=t.id,a=void 0===e?Object(j.uuid)():e,c=t.name,r=t.number;return Object(O.jsx)(C,{id:a,name:c,number:r,handleRemove:n},a)}))}):Object(O.jsx)("p",{children:"Phonebook is empty!"})},y=n(13),N=n.n(y),F=function(t){var e=t.filter,n=t.handleChange;return Object(O.jsxs)("label",{children:["Find contacts by name",Object(O.jsx)("input",{className:N.a.inputFilter,name:"filter",type:"text",placeholder:"search contact",onChange:n,value:e})]})};F.defaultProps={value:""};var S=F,k=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:Object(j.uuid)(),name:e,number:n},c=t.state.contacts.find((function(t){return t.name===e})),r=t.state.contacts.find((function(t){return t.number===n}));c?alert("This contact NAME already exists as Name:".concat(c.name," Tel:").concat(c.number)):r?alert("This contact NUMBER already exists as  Tel:".concat(r.number," Name:").concat(r.name)):e.length?n.length?t.setState((function(t){return{contacts:[].concat(Object(u.a)(t.contacts),[a])}})):alert("Please, enter the contact number"):alert("Please, enter the contact name")},t.handleRemove=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChange=function(e){var n=e.target.name;t.setState(Object(l.a)({},n,e.target.value))},t}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"getFilteredContacts",value:function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getFilteredContacts(e,n);return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:i.a.container,children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(v,{addContact:this.addContact}),Object(O.jsx)("hr",{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(S,{filter:this.state.filter,handleChange:this.handleChange}),Object(O.jsx)(_,{visibleContacts:a,handleRemove:this.handleRemove})]})})}}]),n}(a.Component);o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7489927a.chunk.js.map