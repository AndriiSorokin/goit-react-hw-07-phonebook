(this["webpackJsonpreact-hw-06-phonebook"]=this["webpackJsonpreact-hw-06-phonebook"]||[]).push([[0],{36:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c,r,o=n(0),a=n.n(o),u=n(10),i=n.n(u),s=(n(36),n(6)),b=n(14),l=n(2),j=n(4),f=Object(l.b)("contact/fetchContact/Request"),d=Object(l.b)("contact/fetchContactSuccess"),h=Object(l.b)("contact/fetchContactError"),O=Object(l.b)("contact/addContact/Request"),p=Object(l.b)("contact/addContactSuccess"),m=Object(l.b)("contact/addContactError"),v=Object(l.b)("contact/deleteContactRequest"),x=Object(l.b)("contact/deleteContactSuccess"),g=Object(l.b)("contact/deleteContactError"),C=Object(l.b)("contact/filter"),y=n(3),k=Object(l.c)([],(c={},Object(j.a)(c,d,(function(t,e){return e.payload})),Object(j.a)(c,p,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(j.a)(c,x,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),_=Object(l.c)("",Object(j.a)({},C,(function(t,e){return e.payload}))),S=Object(l.c)(!1,(r={},Object(j.a)(r,O,(function(){return!0})),Object(j.a)(r,p,(function(){return!1})),Object(j.a)(r,m,(function(){return!1})),Object(j.a)(r,v,(function(){return!0})),Object(j.a)(r,x,(function(){return!1})),Object(j.a)(r,g,(function(){return!1})),Object(j.a)(r,f,(function(){return!0})),Object(j.a)(r,d,(function(){return!1})),Object(j.a)(r,h,(function(){return!1})),r)),w=Object(y.c)({items:k,filter:_,loading:S}),N=n(31),E=n.n(N),B=n(8),D=[].concat(Object(b.a)(Object(l.d)({serializableCheck:{ignoredActions:[B.a,B.f,B.b,B.c,B.d,B.e]}})),[E.a]),F=Object(l.a)({reducer:{contacts:w},middleware:D,devTools:!1}),H={store:F,persistor:Object(B.g)(F)},P=n(12),U=n(13),A=n(16),R=n(15),V=n(9),q=n.n(V);q.a.defaults.baseURL="http://localhost:3000";var L=n(11),G=function(t){return t.contacts.filter},J={getFilter:G,getVisibleUser:Object(L.a)([function(t){return t.contacts.items},G],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},M=n(7),z=n.n(M),I=n(1),T=function(t){Object(A.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(P.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",phone:""},t.inputHandler=function(e){var n=e.target,c=n.value,r=n.name;t.setState(Object(j.a)({},r,c))},t.submitHandler=function(e){e.preventDefault();var n=t.state.name;if(t.props.contacts.find((function(t){return t.name===n})))return alert("".concat(n," is alredy contact!")),void t.reset();t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",phone:""})},t}return Object(U.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.phone;return Object(I.jsxs)("form",{className:z.a.form,onSubmit:this.submitHandler,autoComplete:"off",children:[Object(I.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter name",type:"text",name:"name",value:e}),Object(I.jsx)("input",{onChange:this.inputHandler,placeholder:"Enter phone",type:"text",name:"phone",value:n}),Object(I.jsx)("button",{className:z.a.btn,type:"submit",children:"Add contacts"})]})}}]),n}(o.Component),K=Object(s.b)((function(t){return{contacts:J.getVisibleUser(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){var e=t.name,n=t.phone;return function(t){var c={name:e,phone:n};t(O()),q.a.post("/contacts",c).then((function(e){var n=e.data;return t(p(n))})).catch((function(e){return t(m(e))}))}}(e))}}}))(T),Q=Object(s.b)((function(t){return{contacts:J.getVisibleUser(t)}}),(function(t){return{deleteNumber:function(e){return t(function(t){return function(e){e(v()),q.a.delete("/contacts/".concat(t)).then((function(){return e(x(t))})).catch((function(t){return e(g(t))}))}}(e))}}}))((function(t){var e=t.contacts,n=t.deleteNumber;return console.log(e),Object(I.jsx)("div",{children:Object(I.jsx)("ul",{children:e.map((function(t){return Object(I.jsxs)("li",{children:[Object(I.jsxs)("span",{children:[t.name," : ",t.phone]}),Object(I.jsx)("button",{className:z.a.btnDelete,onClick:function(){return n(t.id)},type:"button",children:"delete"})]},t.id)}))})})})),W=Object(s.b)((function(t){return{value:J.getFilter(t)}}),(function(t){return{onChange:function(e){return t(C(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(I.jsxs)("div",{className:z.a.form,children:[Object(I.jsx)("p",{children:"Find contact by name"}),Object(I.jsx)("input",{type:"text",placeholder:"Find",value:e,onChange:n})]})})),X=function(t){Object(A.a)(n,t);var e=Object(R.a)(n);function n(){var t;Object(P.a)(this,n);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[]},t}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNumber()}},{key:"render",value:function(){var t=this.props;return console.log(t),Object(I.jsxs)("div",{className:z.a.container,children:[Object(I.jsx)("h1",{children:"PhoneBook"}),Object(I.jsx)(K,{}),Object(I.jsx)(W,{}),Object(I.jsx)(Q,{})]})}}]),n}(o.Component),Y=Object(s.b)((function(t){return{contact:J.getVisibleUser(t)}}),(function(t){return{fetchNumber:function(){return t((function(t){t(f()),q.a.get("/contacts").then((function(e){var n=e.data;return t(d(n))})).catch((function(e){return t(h(e))}))}))}}}))(X),Z=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(Y,{})})};i.a.render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(s.a,{store:H.store,children:Object(I.jsx)(Z,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={container:"PhoneBook_container__3SDuF",form:"PhoneBook_form__2FrpE",btn:"PhoneBook_btn__lGfGp",btnDelete:"PhoneBook_btnDelete__1xO3e"}}},[[63,1,2]]]);
//# sourceMappingURL=main.c93ba551.chunk.js.map