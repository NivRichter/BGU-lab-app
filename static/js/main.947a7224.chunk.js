/*! For license information please see main.947a7224.chunk.js.LICENSE.txt */
(this["webpackJsonpslider-app"]=this["webpackJsonpslider-app"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(2),i=n.n(c),o=n(12),r=n.n(o),s=(n(54),n(22)),l=n(23),d=n(25),u=n(24),h=(n.p,n(55),n(39)),j=n(20),b=n(10),v=n(40);v.a.initializeApp({apiKey:"AIzaSyA3Jx8S_Yh6vdOI9RRP1ybnuG_Kvox093g",authDomain:"slider-app1.firebaseapp.com",databaseURL:"https://slider-app1.firebaseio.com",projectId:"slider-app1",storageBucket:"slider-app1.appspot.com",messagingSenderId:"813536171331",appId:"1:813536171331:web:ee4f67d30e6b1f45c48bf6",measurementId:"G-2PMF6CRJ79"});var f=v.a.firestore(),p=(n(28),n(67)),O=n(65),x=n(66),g=n(69),m=n(16),S=(n(68),function(e){var t=Object(c.useState)(),n=Object(m.a)(t,2),i=n[0],o=n[1],r=Object(c.useState)(""),s=Object(m.a)(r,2),l=s[0],d=s[1],u=Object(c.useState)(""),h=Object(m.a)(u,2),j=h[0],b=h[1],v=Object(c.useState)(),f=Object(m.a)(v,2),p=f[0],O=f[1],x=Object(c.useState)([]),S=Object(m.a)(x,2),y=(S[0],S[1],Object(c.useState)(!1)),C=Object(m.a)(y,2),k=(C[0],C[1]),R=Object(c.useState)([]),D=Object(m.a)(R,2),I=D[0],E=D[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Manager Page"}),Object(a.jsxs)("h6",{children:["\u05e9\u05dd \u05d4\u05e0\u05e1\u05d9\u05d9\u05df: ",l," "]}),Object(a.jsxs)("h6",{children:["\u05d6\u05de\u05df \u05ea\u05d7\u05d9\u05dc\u05ea \u05d4\u05e0\u05d9\u05e1\u05d5\u05d9: ",j," "]}),Object(a.jsx)(g.a,{onClick:function(){e.db.orderBy("time","desc").limit(1).get().then((function(t){var n=t.docs[0],c=n.data(),r=n.id;o(r),d(c.fullname);var s=c.time.split(" ")[1].split(":");b(s[0]+":"+s[1]),k(!0),function(){if(console.log("update: "+i),void 0!=i){var t=e.db.doc(i);console.log("doc updated!"+i);t.onSnapshot((function(t){var n=t.data();console.log("Received doc snapshot:".concat(t.id," ").concat(n)),O(n),function(){if(p){var t=e.db.doc(i);console.log("doc updated!"+i);t.onSnapshot((function(e){var t=e.data();console.log("Received doc snapshot:".concat(e.id," ").concat(t));var n=[],c=t.calibrationTests;console.log("calib: "),console.log(c),c.forEach((function(e){console.log("".concat(e.testNum," : ").concat(e.value)),n.push(Object(a.jsxs)("li",{children:[e.testNum," : ",e.value]}))})),E(n)}),(function(e){console.log("Encountered error: ".concat(e))}));console.log("hiiiiii")}}()}),(function(e){console.log("Encountered error: ".concat(e))}))}}()}))},children:"\u05d4\u05e6\u05d2 \u05e4\u05e8\u05d8\u05d9 \u05e0\u05d9\u05e1\u05d5\u05d9 \u05e0\u05d5\u05db\u05d7\u05d9"}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:I})})]})}),y=n(26),C=n.n(y),k=n(31),R=n(19),D=n(32),I=(n(44),f.collection("/BGU-lab-dev")),E=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onCollectionUpdate=function(e){var t=0;e.forEach((function(e){var n=e.data();console.log(n),t=n.value})),a.setState({value:t,sliderValue:t})},a.onSliderChange=function(e){a.setState({sliderValue:e},(function(){console.log(a.state.sliderValue)}))},a.state={testCouner:0},a.handleChange=a.handleChange.bind(Object(R.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(R.a)(a)),a.handleReset=a.handleReset.bind(Object(R.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/slider-data").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"getData",value:function(){var e;return I.get().then((function(t){t.forEach((function(t){I.doc(t.id).get().then((function(t){[t].forEach((function(t){var n=t.data();console.log(t.id,n),console.log("sliderID: ".concat(n.id,", value: ").concat(n.value)),e=n.value}))}))}))})),console.log(e),e}},{key:"create",value:function(e){return I.add(e)}},{key:"update",value:function(e){I.get().then((function(t){t.forEach((function(t){I.doc(t.id).update({value:e})}))}))}},{key:"addTestScoreToDoc2",value:function(e){var t=this;I.orderBy("time","desc").limit(1).get().then((function(n){var a=n.docs[0],c=a.data(),i=(a.id,c.calibrationTests);"\u05db\u05d9\u05d5\u05dc ".concat(t.state.testCouner);t.setState((function(e){return{testCouner:e.testCouner+1}}));var o={testNum:" \u05db\u05d9\u05d5\u05dc ".concat(t.state.testCouner),value:e};i.push(o),I.doc(a.id).update({calibrationTests:i})}))}},{key:"handleChange",value:function(e){var t=this;this.setState({input:e.target.value},(function(){t.update(e.target.value,t)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addTestScoreToDoc2(this.state.sliderValue),this.setState({input:0})}},{key:"handleReset",value:function(e){e.preventDefault(),this.update(0)}},{key:"getSliderValue",value:function(){var e=Object(k.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.collection("/slider-data").doc("hIGjEMjhpHO604ed6VKp"),e.next=3,t.get();case 3:if((n=e.sent).exists){e.next=9;break}return console.log("ERROR! doc doesnt exsits on firestore"),e.abrupt("return",0);case 9:return a=n.data().value,this.setState({value:a}),console.log(a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(e){return I.doc(e).delete()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsxs)("form",{children:[Object(a.jsx)(g.a,{variant:"outline-primary",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)(g.a,{variant:"outline-primary",onClick:this.handleReset,children:"Reset"})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{style:{width:"200px"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{min:0,max:10,value:this.state.sliderValue,onChange:this.onSliderChange})}),Object(a.jsxs)("div",{children:["slider value: ",this.state.sliderValue]})]})})]})}}]),n}(c.Component),T=f.collection("/BGU-lab-dev"),w=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onCollectionUpdate=function(e){var t=0;e.forEach((function(e){var n=e.data();console.log(n),t=n.value})),a.setState({value:t,sliderValue:t})},a.onSliderChange=function(e){a.setState({sliderValue:e},(function(){console.log(a.state.sliderValue)}))},a.state={testCouner:0},a.handleChange=a.handleChange.bind(Object(R.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(R.a)(a)),a.handleReset=a.handleReset.bind(Object(R.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/slider-data").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"getData",value:function(){var e;return T.get().then((function(t){t.forEach((function(t){T.doc(t.id).get().then((function(t){[t].forEach((function(t){var n=t.data();console.log(t.id,n),console.log("sliderID: ".concat(n.id,", value: ").concat(n.value)),e=n.value}))}))}))})),console.log(e),e}},{key:"create",value:function(e){return T.add(e)}},{key:"update",value:function(e){T.get().then((function(t){t.forEach((function(t){T.doc(t.id).update({value:e})}))}))}},{key:"addTestScoreToDoc2",value:function(e){var t=this;T.orderBy("time","desc").limit(1).get().then((function(n){var a=n.docs[0],c=a.data(),i=(a.id,c.calibrationTests);"\u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da ".concat(t.state.testCouner);t.setState((function(e){return{testCouner:e.testCouner+1}}));var o={testNum:" \u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da  ".concat(t.state.testCouner),value:e};i.push(o),T.doc(a.id).update({calibrationTests:i})}))}},{key:"handleChange",value:function(e){var t=this;this.setState({input:e.target.value},(function(){t.update(e.target.value,t)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addTestScoreToDoc2(this.state.sliderValue),this.setState({input:0})}},{key:"handleReset",value:function(e){e.preventDefault(),this.update(0)}},{key:"getSliderValue",value:function(){var e=Object(k.a)(C.a.mark((function e(){var t,n,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.collection("/slider-data").doc("hIGjEMjhpHO604ed6VKp"),e.next=3,t.get();case 3:if((n=e.sent).exists){e.next=9;break}return console.log("ERROR! doc doesnt exsits on firestore"),e.abrupt("return",0);case 9:return a=n.data().value,this.setState({value:a}),console.log(a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(e){return T.doc(e).delete()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsxs)("form",{children:[Object(a.jsx)(g.a,{variant:"outline-primary",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)(g.a,{variant:"outline-primary",onClick:this.handleReset,children:"Reset"})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)(x.a,{style:{width:"200px"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(D.a,{min:0,max:10,value:this.state.sliderValue,onChange:this.onSliderChange})}),Object(a.jsxs)("div",{children:["slider value: ",this.state.sliderValue]})]})})]})}}]),n}(c.Component),V=n(47),U=n.n(V);function M(e){var t=Object(b.f)().topicId;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:t}),Object(a.jsx)("h3",{children:"\u05db\u05d9\u05d5\u05dc \u05db\u05d0\u05d1"}),Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(E,{docRefID:e.docRefID})})})})]})}function B(e){var t=Object(b.f)().topicId;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:t}),Object(a.jsx)("h3",{children:"\u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da"}),Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(w,{docRefID:e.docRefID})})})})]})}var G=function(e){var t=Object(b.g)(),n=t.path,i=(t.url,Object(c.useState)(!1)),o=Object(m.a)(i,2),r=o[0],s=o[1],l=Object(c.useState)(),d=Object(m.a)(l,2),u=d[0],h=d[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Memu - Experimenter Page"}),Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:r?Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u05d0\u05e0\u05d0 \u05d1\u05d7\u05e8 \u05e9\u05dc\u05d1 \u05d1\u05e0\u05d9\u05e1\u05d5\u05d9"}),Object(a.jsx)(j.b,{to:"/expirementer/calibration",children:Object(a.jsx)(g.a,{variant:"outline-primary",children:"\u05db\u05d9\u05d5\u05dc \u05db\u05d0\u05d1"})}),Object(a.jsx)(j.b,{to:"/expirementer/longExp",children:Object(a.jsx)(g.a,{variant:"outline-primary",children:"\u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da"})}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{exact:!0,path:n}),Object(a.jsx)(b.a,{path:"/expirementer/calibration",children:Object(a.jsx)(M,{docRefID:u})}),Object(a.jsx)(b.a,{path:"/expirementer/longExp",children:Object(a.jsx)(B,{docRefID:u})})]})]})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(g.a,{onClick:function(){s(!0),function(){var t=e.db;console.log(t),t.add({fullname:"\u05d9\u05e9\u05e8\u05d0\u05dc \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9",calibrationTests:[],longTests:[],time:U()(new Date,"yyyy-mm-dd HH:MM:ss")}).then((function(t){console.log("new doc ref: "+t.id),h(t.id),e.sendDocRefToParent(t.id)}))}()},children:"\u05d4\u05ea\u05d7\u05dc \u05e0\u05d9\u05e1\u05d5\u05d9 \u05e2\u05d1\u05d5\u05e8 \u05e0\u05e1\u05d9\u05d9\u05df \u05d7\u05d3\u05e9"})})})})})]})},P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(s.a)(this,n),(a=t.call(this,e)).getDocRefFromChild=function(e){console.log("recibed from child: ".concat(e)),a.setState({activeDocRef:e})},a.state={value:"",db:f.collection("/BGU-lab-dev"),activeDocRef:void 0};f.settings({timestampsInSnapshots:!0});return h.a.initialize("UA-180348020-1",{debug:!0}),h.a.pageview(window.location.pathname+window.location.search),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/BGU-lab-dev").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"render",value:function(){return Object(a.jsx)(p.a,{className:"App",children:Object(a.jsx)(O.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsx)(j.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{children:[Object(a.jsx)(j.b,{to:"/",children:Object(a.jsx)(g.a,{variant:"outline-primary",children:"Home"})}),Object(a.jsx)(j.b,{to:"/manager",children:Object(a.jsx)(g.a,{variant:"outline-primary",children:"manager"})}),Object(a.jsx)(j.b,{to:"/expirementer",children:Object(a.jsx)(g.a,{variant:"outline-primary",children:"expirementer"})})]}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/manager",children:Object(a.jsx)(S,{db:this.state.db,docRef:this.state.activeDocRef})}),Object(a.jsx)(b.a,{path:"/expirementer",children:Object(a.jsx)(G,{db:this.state.db,sendDocRefToParent:this.getDocRefFromChild})}),Object(a.jsx)(b.a,{path:"/"})]})]})})})})})}}]),n}(c.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),F()}},[[64,1,2]]]);
//# sourceMappingURL=main.947a7224.chunk.js.map