(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={wrapper:"Style_wrapper__3HBUC",form:"Style_form__y-ZB_",input:"Style_input__1vvNq",btn:"Style_btn__1WIh6",filter:"Style_filter__8nqIZ",list:"Style_list__34XfG",item:"Style_item__1rqqk"}},27:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),o=n(7),i=n.n(o),u=n(8),s=n(9),l=n(11),b=n(10),j=n(6),m=n(5),d=n(28),h=n(4),f=Object(h.b)("contact/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(d.a)(),name:e,number:n}}})),p=Object(h.b)("contact/delete"),O=Object(h.b)("contact/filter"),v=n(2),y=n.n(v),x=n(1),_=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,r=n.value;t.setState(Object(j.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.onSubmitData(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("form",{onSubmit:this.handleFormSubmit,className:y.a.form,children:[Object(x.jsxs)("label",{htmlFor:this.nameInputId,children:["Name:",Object(x.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId,className:y.a.input})]}),Object(x.jsxs)("label",{htmlFor:this.numberInputId,children:["Phone:",Object(x.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId,className:y.a.input})]}),Object(x.jsx)("button",{type:"submit",className:y.a.btn,children:"Add contact"})]})}}]),n}(r.Component),C=Object(m.b)(null,(function(t){return{onSubmitData:function(e){return t(f(e))}}}))(_),g=Object(m.b)((function(t){var e=t.filter,n=t.items,a=e.toLowerCase();return{contacts:n.filter((function(t){return t.name.toLowerCase().includes(a)}))}}),(function(t){return{onDeteleContact:function(e){return t(p(e))}}}))((function(t){var e=t.contacts,n=t.onDeteleContact;return Object(x.jsx)("ul",{className:y.a.list,children:void 0!==e&&e.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(x.jsxs)("li",{className:y.a.item,children:[a,": ",r,";",Object(x.jsx)("button",{onClick:function(){return n(e)},children:"Delete contact"})]},e)}))})})),S=Object(m.b)((function(t){return{value:t.filter}}),(function(t){return{onChange:function(e){return t(O(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsxs)("label",{className:y.a.filter,children:["Filter by name:",Object(x.jsx)("input",{type:"text",value:e,onChange:n})]})})),I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[],filter:""},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:y.a.wrapper,children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(C,{onSubmitData:this.formSubmitData}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(S,{}),Object(x.jsx)(g,{})]})}}]),n}(r.Component),w=n(15),N=n(3),k=Object(h.c)([],(a={},Object(j.a)(a,f,(function(t,e){var n=e.payload;console.log(n);var a=n.name;return t.find((function(t){return t.name.toLowerCase()===a.toLowerCase()}))&&alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 !"),[n].concat(Object(w.a)(t))})),Object(j.a)(a,p,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),A=Object(h.c)("",Object(j.a)({},O,(function(t,e){return e.payload}))),D=Object(N.b)({items:k,filter:A}),q=Object(h.a)({reducer:D,devTools:!0});n(26);i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(m.a,{store:q,children:Object(x.jsx)(I,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6e0dfd99.chunk.js.map