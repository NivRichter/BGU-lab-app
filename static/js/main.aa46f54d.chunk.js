/*! For license information please see main.aa46f54d.chunk.js.LICENSE.txt */
(this["webpackJsonpslider-app"]=this["webpackJsonpslider-app"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(2),i=n.n(c),o=n(11),s=n.n(o),l=(n(54),n(20)),r=n(21),d=n(12),u=n(23),h=n(22),b=(n.p,n(55),n(36)),j=n(37);j.a.initializeApp({apiKey:"AIzaSyA3Jx8S_Yh6vdOI9RRP1ybnuG_Kvox093g",authDomain:"slider-app1.firebaseapp.com",databaseURL:"https://slider-app1.firebaseio.com",projectId:"slider-app1",storageBucket:"slider-app1.appspot.com",messagingSenderId:"813536171331",appId:"1:813536171331:web:ee4f67d30e6b1f45c48bf6",measurementId:"G-2PMF6CRJ79"});var f=j.a.firestore(),v=(n(24),n(71)),O=n(69),g=n(70),p=n(72),x=n(73),m=n(13),S=n(68),y=function(e){var t=Object(c.useState)(),n=Object(m.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(""),l=Object(m.a)(s,2),r=l[0],d=l[1],u=Object(c.useState)(""),h=Object(m.a)(u,2),b=h[0],j=h[1],f=Object(c.useState)(),v=Object(m.a)(f,2),O=v[0],g=v[1],p=Object(c.useState)([]),x=Object(m.a)(p,2),y=(x[0],x[1],Object(c.useState)(!1)),C=Object(m.a)(y,2),k=(C[0],C[1]),R=Object(c.useState)([]),T=Object(m.a)(R,2),D=T[0],w=T[1];function V(){if(console.log("update: "+i),void 0!=i){var t=e.db.doc(i);console.log("doc updated!"+i);t.onSnapshot((function(e){var t=e.data();console.log("Received doc snapshot:".concat(e.id," ").concat(t)),g(t),E()}),(function(e){console.log("Encountered error: ".concat(e))}))}}function E(){if(O){console.log("rendering new data");var t=e.db.doc(i);console.log("doc updated!"+i);t.onSnapshot((function(e){var t=e.data();console.log("Received doc snapshot:".concat(e.id," ").concat(t));var n=[],c=t.calibrationTests;console.log("calib: "),console.log(c),c.forEach((function(e){console.log("".concat(e.testNum," : ").concat(e.value)),n.push(Object(a.jsxs)("li",{children:[e.testNum," : ",e.value]}))})),w(n)}),(function(e){console.log("Encountered error: ".concat(e))}));console.log("hiiiiii")}}return Object(c.useEffect)((function(){return console.log("IN USE EFFECT"),e.db.orderBy("time","desc").limit(1).get().then((function(e){var t=e.docs[0],n=t.data(),a=t.id;o(a),g(e),d(n.fullname);var c=n.time.split(" ")[1].split(":");j(c[0]+":"+c[1]),k(!0),V(),E()})),function(){}}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Manager Page"}),Object(a.jsxs)("h6",{children:["\u05e9\u05dd \u05d4\u05e0\u05e1\u05d9\u05d9\u05df: ",r," "]}),Object(a.jsxs)("h6",{children:["\u05d6\u05de\u05df \u05ea\u05d7\u05d9\u05dc\u05ea \u05d4\u05e0\u05d9\u05e1\u05d5\u05d9: ",b," "]}),Object(a.jsx)(S.a,{onClick:function(){e.db.orderBy("time","desc").limit(1).get().then((function(e){var t=e.docs[0],n=t.data(),a=t.id;o(a),d(n.fullname);var c=n.time.split(" ")[1].split(":");j(c[0]+":"+c[1]),k(!0),V()}))},children:"\u05d4\u05e6\u05d2 \u05e4\u05e8\u05d8\u05d9 \u05e0\u05d9\u05e1\u05d5\u05d9 \u05e0\u05d5\u05db\u05d7\u05d9"}),Object(a.jsx)("div",{children:Object(a.jsx)("ul",{children:D})})]})},C=n(34),k=n.n(C),R=n(41),T=n(29),D=(n(40),f.collection("/BGU-lab-dev")),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onCollectionUpdate=function(e){var t=0;e.forEach((function(e){var n=e.data();console.log(n),t=n.value})),a.setState({value:t,sliderValue:t})},a.onSliderChange=function(e){a.setState({sliderValue:e},(function(){console.log(a.state.sliderValue)}))},a.state={testCouner:0,sliderValue:0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleReset=a.handleReset.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/slider-data").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"getData",value:function(){var e;return D.get().then((function(t){t.forEach((function(t){D.doc(t.id).get().then((function(t){[t].forEach((function(t){var n=t.data();console.log(t.id,n),console.log("sliderID: ".concat(n.id,", value: ").concat(n.value)),e=n.value}))}))}))})),console.log(e),e}},{key:"create",value:function(e){return D.add(e)}},{key:"update",value:function(e){D.get().then((function(t){t.forEach((function(t){D.doc(t.id).update({value:e})}))}))}},{key:"addTestScoreToDoc2",value:function(e){var t=this;D.orderBy("time","desc").limit(1).get().then((function(n){var a=n.docs[0],c=a.data(),i=(a.id,c.calibrationTests);"\u05db\u05d9\u05d5\u05dc ".concat(t.state.testCouner);t.setState((function(e){return{testCouner:e.testCouner+1}}));var o={testNum:" \u05db\u05d9\u05d5\u05dc ".concat(t.state.testCouner),value:e};i.push(o),D.doc(a.id).update({calibrationTests:i})}))}},{key:"handleChange",value:function(e){var t=this;this.setState({input:e.target.value},(function(){t.update(e.target.value,t)}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addTestScoreToDoc2(this.state.sliderValue),this.setState({sliderValue:0})}},{key:"handleReset",value:function(e){e.preventDefault(),this.setState({sliderValue:0})}},{key:"getSliderValue",value:function(){var e=Object(R.a)(k.a.mark((function e(){var t,n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.collection("/slider-data").doc("hIGjEMjhpHO604ed6VKp"),e.next=3,t.get();case 3:if((n=e.sent).exists){e.next=9;break}return console.log("ERROR! doc doesnt exsits on firestore"),e.abrupt("return",0);case 9:return a=n.data().value,this.setState({value:a}),console.log(a),e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(e){return D.doc(e).delete()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsxs)("form",{children:[Object(a.jsx)(S.a,{variant:"outline-primary",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)(S.a,{variant:"outline-primary",onClick:this.handleReset,children:"Reset"})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)(g.a,{style:{width:"200px"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(T.a,{min:0,max:10,defaultValue:0,value:this.state.sliderValue,onChange:this.onSliderChange,step:.1,reverse:!0,railStyle:{backgroundColor:"grey",height:200},trackStyle:{backgroundColor:"red",height:200},handleStyle:{borderColor:"black",height:200,width:20,marginLeft:-14,marginTop:0,backgroundColor:"white"}})}),Object(a.jsx)("div",{})]})})]})}}]),n}(c.Component),V=f.collection("/BGU-lab-dev"),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onCollectionUpdate=function(e){var t=0;e.forEach((function(e){var n=e.data();console.log(n),t=n.value})),a.setState({value:t,sliderValue:t})},a.onSliderChange=function(e){a.setState({sliderValue:e},(function(){console.log(a.state.sliderValue)}))},a.state={testCouner:0,sliderValue:0},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.handleReset=a.handleReset.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/slider-data").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"getData",value:function(){var e;return V.get().then((function(t){t.forEach((function(t){V.doc(t.id).get().then((function(t){[t].forEach((function(t){var n=t.data();console.log(t.id,n),console.log("sliderID: ".concat(n.id,", value: ").concat(n.value)),e=n.value}))}))}))})),console.log(e),e}},{key:"create",value:function(e){return V.add(e)}},{key:"update",value:function(e){V.get().then((function(t){t.forEach((function(t){V.doc(t.id).update({value:e})}))}))}},{key:"addTestScoreToDoc2",value:function(e){var t=this;V.orderBy("time","desc").limit(1).get().then((function(n){var a=n.docs[0],c=a.data(),i=(a.id,c.calibrationTests);"\u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da ".concat(t.state.testCouner);t.setState((function(e){return{testCouner:e.testCouner+1}}));var o={testNum:" \u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da  ".concat(t.state.testCouner),value:e};i.push(o),V.doc(a.id).update({calibrationTests:i})}))}},{key:"handleChange",value:function(e){this.setState({input:e.target.value},(function(){}))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addTestScoreToDoc2(this.state.sliderValue),this.setState({sliderValue:0})}},{key:"handleReset",value:function(e){e.preventDefault(),this.setState({sliderValue:0})}},{key:"delete",value:function(e){return V.doc(e).delete()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsxs)("form",{children:[Object(a.jsx)(S.a,{variant:"outline-primary",onClick:this.handleSubmit,children:"Submit"}),Object(a.jsx)(S.a,{variant:"outline-primary",onClick:this.handleReset,children:"Reset"})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsxs)(g.a,{style:{width:"200px"},children:[Object(a.jsx)("div",{children:Object(a.jsx)(T.a,{min:0,max:10,defaultValue:0,value:this.state.sliderValue,onChange:this.onSliderChange,step:.1,reverse:!0,railStyle:{backgroundColor:"grey",height:200},trackStyle:{backgroundColor:"red",height:200},handleStyle:{borderColor:"black",height:200,width:20,marginLeft:-14,marginTop:0,backgroundColor:"white"}})}),Object(a.jsxs)("div",{children:["slider value: ",this.state.sliderValue]})]})})]})}}]),n}(c.Component),I=n(45),U=n.n(I);function L(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u05db\u05d9\u05d5\u05dc \u05db\u05d0\u05d1"}),Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsx)(w,{docRefID:e.docRefID})})})})]})}function N(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"\u05db\u05d0\u05d1 \u05d0\u05e8\u05d5\u05da"}),Object(a.jsx)("div",{children:Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsx)(E,{docRefID:e.docRefID})})})})]})}var B=function(e){var t=Object(c.useState)(!1),n=Object(m.a)(t,2),i=n[0],o=n[1],s=Object(c.useState)(),l=Object(m.a)(s,2),r=l[0],d=l[1],u=Object(c.useState)("start"),h=Object(m.a)(u,2),b=h[0],j=h[1];return Object(a.jsx)(O.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)("h2",{children:"Memu - Experimenter Page"}),i?Object(a.jsx)(O.a,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsxs)(p.a,{style:{marginLeft:"auto",marginRight:"auto",width:"50%"},children:[Object(a.jsx)(x.a,{className:"mx-auto justify-content-center",children:Object(a.jsx)(x.a.Link,{href:"",className:"px-4",onClick:function(){return j("LongTest")},active:"LongTest"===b,children:"\u05e0\u05d9\u05e1\u05d5\u05d9 \u05d0\u05e8\u05d5\u05da"})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(x.a.Link,{href:"",className:"px-4",onClick:function(){return j("Calibration")},active:"Calibration"===b,children:"\u05db\u05d9\u05d5\u05dc \u05db\u05d0\u05d1"})})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:"start"===b?Object(a.jsx)("h3",{children:" \u05de\u05d9\u05d3 \u05e0\u05ea\u05d7\u05d9\u05dc \u05d1\u05e0\u05d9\u05e1\u05d5\u05d9 "}):"Calibration"===b?Object(a.jsx)(L,{docRefID:r}):Object(a.jsx)(N,{docRefID:r})})})]})}):Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsx)(S.a,{onClick:function(){o(!0),function(){var t=e.db;console.log(t),t.add({fullname:"\u05d9\u05e9\u05e8\u05d0\u05dc \u05d9\u05e9\u05e8\u05d0\u05dc\u05d9",calibrationTests:[],longTests:[],time:U()(new Date,"yyyy-mm-dd HH:MM:ss")}).then((function(t){console.log("new doc ref: "+t.id),d(t.id),e.sendDocRefToParent(t.id)}))}()},children:"\u05d4\u05ea\u05d7\u05dc \u05e0\u05d9\u05e1\u05d5\u05d9 \u05e2\u05d1\u05d5\u05e8 \u05e0\u05e1\u05d9\u05d9\u05df \u05d7\u05d3\u05e9"})})})]})})},M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).getDocRefFromChild=function(e){console.log("recibed from child: ".concat(e)),a.setState({activeDocRef:e})},a.state={value:"",db:f.collection("/BGU-lab-dev"),activeDocRef:void 0,activeTab:"welcome"},a.changeTab=a.changeTab.bind(Object(d.a)(a));f.settings({timestampsInSnapshots:!0});return b.a.initialize("UA-180348020-1",{debug:!0}),b.a.pageview(window.location.pathname+window.location.search),a}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.unsubscribe=f.collection("/BGU-lab-dev").onSnapshot(this.onCollectionUpdate)}},{key:"componentWillUnmount",value:function(){this.unsubscribe()}},{key:"changeTab",value:function(e){this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(v.a,{fluid:!0,className:"mx-auto justify-content-center",children:[Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:Object(a.jsxs)(p.a,{style:{marginLeft:"auto",marginRight:"auto",width:"50%"},children:[Object(a.jsx)(x.a,{className:"mx-auto justify-content-center",children:Object(a.jsx)(x.a.Link,{href:"",className:"px-4",onClick:function(){return e.changeTab("manager")},active:"manager"===this.state.activeTab,children:"\u05de\u05e0\u05d4\u05dc \u05e0\u05d9\u05e1\u05d5\u05d9"})}),Object(a.jsx)(x.a,{children:Object(a.jsx)(x.a.Link,{href:"",className:"px-4",onClick:function(){return e.changeTab("experimeneter")},active:"experimeneter"===this.state.activeTab,children:"\u05e0\u05e1\u05d9\u05d9\u05df"})})]})})}),Object(a.jsx)(O.a,{children:Object(a.jsx)(g.a,{children:"welcome"===this.state.activeTab?Object(a.jsx)("h2",{children:" \u05d3\u05e3 \u05db\u05e0\u05d9\u05e1\u05d4"}):"manager"===this.state.activeTab?Object(a.jsx)(y,{db:this.state.db,docRef:this.state.activeDocRef}):Object(a.jsx)(B,{db:this.state.db,sendDocRefToParent:this.getDocRefFromChild})})})]})})}}]),n}(c.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.aa46f54d.chunk.js.map