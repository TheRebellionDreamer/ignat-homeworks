(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__8WR15",avatar:"Message_avatar__3FT3j",content:"Message_content__Ltxgc",angle:"Message_angle__1T-oN",name:"Message_name__Tzmp0",text:"Message_text__2fXBO",time:"Message_time__HOFTG"}},,,,function(e,a,t){e.exports={header:"Header_header__39g_n",navigation:"Header_navigation__3Ml2I",link:"Header_link__33Aq0",active:"Header_active__2wV7N"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3XH9u",errorInput:"SuperInputText_errorInput__3ei0N",error:"SuperInputText_error__2J82S"}},function(e,a,t){e.exports={root:"Greeting_root__1IThw",inputContainer:"Greeting_inputContainer__1BGHP",error:"Greeting_error__1uvQ8"}},function(e,a,t){e.exports={blue:"HW4_blue__2RJeg",column:"HW4_column__2ZS4I",testSpanError:"HW4_testSpanError___Mj8X"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__kF06l",checkbox:"SuperCheckbox_checkbox__Imn1x",spanClassName:"SuperCheckbox_spanClassName__1K9ch"}},function(e,a,t){e.exports={affair:"Affair_affair__3skNw",text:"Affair_text__1rsXT"}},function(e,a,t){e.exports={affairs:"Affairs_affairs__HryGq","button-container":"Affairs_button-container__1tiuJ"}},function(e,a,t){e.exports={default:"SuperButton_default__-BXUG",red:"SuperButton_red__1kaz_"}},function(e,a,t){e.exports={root:"SuperSelect_root__1S9j-",option:"SuperSelect_option__33I2a"}},function(e,a,t){e.exports={root:"SuperRadio_root__3rCI9",radio:"SuperRadio_radio__3l3uR"}},,,,,function(e,a,t){e.exports={root:"SuperEditableSpan_root__2lBO_"}},function(e,a,t){e.exports={App:"App_App__1Sc4o"}},,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=(t(31),t(7)),u=t(9),i=t.n(u),s=t(1);var m=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},p=t(5),E=t.n(p);var d=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{src:e.avatar,alt:e.name,className:E.a.avatar}),r.a.createElement("div",{className:E.a.angle}),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",{className:E.a.text},e.message),r.a.createElement("div",{className:E.a.time},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",v="some text",h="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement(d,{avatar:f,name:_,message:v,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(2),C=t(14),k=t.n(C);var N=function(e){var a=e.affair,t=e.deleteAffairCallback;return r.a.createElement("div",{className:k.a.affair},r.a.createElement("div",{className:k.a.text},r.a.createElement("span",null,a.name),r.a.createElement("span",null,a.priority)),r.a.createElement("button",{onClick:function(){t(a._id)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))},O=t(15),x=t.n(O);var j=function(e){var a=e.setFilter,t=e.deleteAffairCallback,n=e.data.map((function(e){return r.a.createElement(N,{key:e._id,affair:e,deleteAffairCallback:t})}));return r.a.createElement("div",{className:x.a.affairs},n,r.a.createElement("div",{className:x.a["button-container"]},r.a.createElement("button",{onClick:function(){a("all")}},"All"),r.a.createElement("button",{onClick:function(){a("high")}},"High"),r.a.createElement("button",{onClick:function(){a("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){a("low")}},"Low")))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(S),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),u=o[0],i=o[1],s=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(25),T=t(21),A=t(22),I=t.n(A),H=t(11),B=t.n(H),F=Object(n.forwardRef)((function(e,a){var t=e.name,n=e.setNameCallback,l=e.addUser,c=e.error,o=e.totalUsers,u=I()(B.a.inputContainer,Object(T.a)({},B.a.error,c));return r.a.createElement("div",{className:B.a.root},r.a.createElement("div",{className:u},r.a.createElement("input",{value:t,onChange:n,ref:a}),c&&r.a.createElement("span",null,c)),r.a.createElement("button",{onClick:l},"add"),r.a.createElement("span",null,o))})),M=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(g.a)(i,2),m=s[0],p=s[1],E=Object(n.useRef)(null),d=a.length;return r.a.createElement(F,{ref:E,name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){var e,a=o.trim();if(!a)return null===(e=E.current)||void 0===e||e.focus(),void p("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f");t(a),alert("Hello ".concat(a,"!")),u(""),p("")},error:m,totalUsers:d})},J=t(34);var P=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(M,{users:t,addUserCallback:function(e){l([].concat(Object(w.a)(t),[{_id:Object(J.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=t(4),R=t(10),W=t.n(R),U=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],X=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(G.a)(e,U),s=" ".concat(W.a.error?W.a.error:""," ").concat(u||""),m="".concat(W.a.superInput," ").concat(c?W.a.errorInput:""," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},K=t(12),q=t.n(K),z=t(16),D=t.n(z),L=["red","className"],Z=function(e){var a=e.red,t=e.className,n=Object(G.a)(e,L),l="".concat(a?D.a.red:""," ").concat(D.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Q=t(13),V=t.n(Q),Y=["type","onChange","onChangeChecked","className","spanClassName","children"],$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(G.a)(e,Y),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:V.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t?t(e.currentTarget.checked):a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var ee=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(g.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:q.a.column},r.a.createElement(X,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:q.a.testSpanError}),r.a.createElement(X,{className:q.a.blue}),r.a.createElement(Z,null,"default"),r.a.createElement(Z,{red:!0,onClick:o},"delete "),r.a.createElement(Z,{disabled:!0},"disabled"),r.a.createElement($,{checked:s,onChangeChecked:m},"some text "),r.a.createElement($,{checked:s,onChange:function(e){m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},ae=t(23),te=t.n(ae),ne=["autoFocus","onBlur","onEnter","spanProps"],re=["children","onDoubleClick","className"],le=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(G.a)(e,ne),o=Object(n.useState)(!1),u=Object(g.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,E=m.onDoubleClick,d=m.className,f=Object(G.a)(m,re),_="".concat(te.a.root," ").concat(d);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(X,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),E&&E(e)},className:_},f),p||c.value))};function ce(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function oe(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ce("test",{x:"A",y:1});oe("test",{x:"",y:0});var ue=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(le,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(Z,{onClick:function(){ce("editable-span-value",t)}},"save"),r.a.createElement(Z,{onClick:function(){var e=oe("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))},ie=t(17),se=t.n(ie),me=["options","onChange","onChangeOption"],pe=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(G.a)(e,me),c=a?a.map((function(e,a){return r.a.createElement("option",{key:"".concat(e,".").concat(a),value:e,className:se.a.option},e)})):[],o=se.a.root+(l.className?" "+l.className:"");return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l,{className:o}),c)},Ee=t(18),de=t.n(Ee),fe=["type","name","options","value","onChange","onChangeOption"],_e=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(G.a)(e,fe),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:de.a.root},r.a.createElement("input",{type:"radio",onChange:o,value:e,name:a,checked:e===n,className:de.a.radio}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},ve=["x","y","z"];var he=function(){var e=Object(n.useState)(ve[1]),a=Object(g.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(pe,{options:ve,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(_e,{name:"radio",options:ve,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var be=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(P,null),r.a.createElement(ee,null),r.a.createElement(ue,null),r.a.createElement(he,null))},ge="/pre-junior",Ce="/junior",ke="/junior-plus",Ne="/*";var Oe=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:ge})}),r.a.createElement(s.b,{path:ge,element:r.a.createElement(be,null)}),r.a.createElement(s.b,{path:Ne,element:r.a.createElement(m,null)})))},xe=function(e){var a=e.isActive;return"".concat(i.a.link," ").concat(a?i.a.active:"")};var je=function(){var e=[{to:ge,text:"Pre-junior"},{to:Ce,text:"Junior"},{to:ke,text:"Junior+"}];return r.a.createElement("header",{className:i.a.header},r.a.createElement("nav",{className:i.a.navigation},e.map((function(e){var a=e.text,t=e.to;return r.a.createElement(o.b,{key:t,to:t,children:a,className:xe})}))))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(je,null),r.a.createElement(Oe,null)))},ye=t(24),we=t.n(ye);var Te=function(){return r.a.createElement("div",{className:we.a.App},"react homeworks",r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.d0529700.chunk.js.map