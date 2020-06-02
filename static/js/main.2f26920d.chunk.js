(this["webpackJsonpxdk-app"]=this["webpackJsonpxdk-app"]||[]).push([[0],{22:function(e,t,a){},230:function(e,t,a){e.exports=a(419)},235:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(17),l=a.n(i),c=(a(235),a(22),a(33)),o=a.n(c),s=a(53),m=a(11),p=a(12),d=a(14),u=a(13),h=a(455),v=a(448),f=a(447),E=a(449),b=a(450),g=a(94),y=a(457),x=a(451),w=a(452),O=a(8),k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,dataSource:null},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;if(null==this.props.data)return r.a.createElement("div",null,"Loading...");var t=function(e){var t=new Date(1*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()},a=this.props.data.filter((function(t){return t.DeviceId==e.props.device})).map((function(e){return{time:e.TimeStamp,accel_x:e.data.accel_x,accel_y:e.data.accel_y,accel_z:e.data.accel_z,accel_mag:e.data.accel_mag}})),n=a.filter((function(t){return t.time>e.props.timeLimit})),i=Object.keys(n).map((function(e){return{time:t(n[e].time),accel_x:n[e].accel_x,accel_y:a[e].accel_y,accel_z:a[e].accel_z,accel_mag:a[e].accel_mag}}));return r.a.createElement("div",{style:{paddingBottom:"56%",position:"relative"}},r.a.createElement("div",{style:{position:"absolute",width:"90%",height:"90%",maxHeight:"250px"}},r.a.createElement("h3",{style:{textAlign:"center"}},"Acceleration"),r.a.createElement(O.g,null,r.a.createElement(O.f,{data:i,margin:{top:5,right:5,left:5,bottom:0}},r.a.createElement(O.i,{dataKey:"time",xAxisId:0}),r.a.createElement(O.j,null),r.a.createElement(O.h,null),r.a.createElement(O.c,{stroke:"#f5f5f5"}),r.a.createElement(O.e,{type:"monotone",dataKey:"accel_x",stroke:"#ff9800",isAnimationActive:!1}),r.a.createElement(O.e,{type:"monotone",dataKey:"accel_y",stroke:"#2196f3",isAnimationActive:!1}),r.a.createElement(O.e,{type:"monotone",dataKey:"accel_z",stroke:"#4caf50",isAnimationActive:!1}),r.a.createElement(O.d,{width:100,wrapperStyle:{top:-50,right:-15,backgroundColor:"#f5f5f5",border:"1px solid #d5d5d5",borderRadius:3,lineHeight:"10px"}})))))}}]),a}(n.Component),j=(n.Component,n.Component,n.Component,n.Component,n.Component,n.Component,function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={device:null},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("b",null,"Device: "),this.props.device)}}]),a}(n.Component)),C=a(446),D=a(423),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,dataSource:null},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;if(null==this.props.data)return r.a.createElement("i",null,"Last reading:");var t=this.props.data.filter((function(t){return t.DeviceId==e.props.device}));return null==this.props.device?r.a.createElement("i",null,"Last reading:"):r.a.createElement("i",null,"Last reading: ",function(e){var t=new Date(1*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()],r=t.getDate(),i=t.getHours(),l=t.getMinutes(),c=t.getSeconds();return 1==r.toString().length&&(r="0"+r),1==i.toString().length&&(i="0"+i),1==l.toString().length&&(l="0"+l),1==c.toString().length&&(c="0"+c),r+" "+n+" "+a+" "+i+":"+l+":"+c}(t[t.length-1].TimeStamp))}}]),a}(n.Component),N=a(445),L=a(443),A=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"timeConverter",value:function(e){var t=new Date(1*e),a=t.getFullYear(),n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()];return t.getDate()+" "+n+" "+a+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()}},{key:"render",value:function(){var e=this;if(null!==this.props.data){var t=this.props.data.filter((function(t){return t.DeviceId===e.props.device&&t.TimeStamp>e.props.timeLimit})),a=Object.keys(t).map((function(a){return{TimeStamp:e.timeConverter(t[a].TimeStamp),data:t[a].data}}));return r.a.createElement("div",{style:{paddingBottom:"56%",position:"relative"}},r.a.createElement("div",{style:{position:"absolute",width:"90%",height:"90%",maxHeight:"250px"}},r.a.createElement("h3",{style:{textAlign:"center"}},this.props.title),r.a.createElement(O.g,null,r.a.createElement(O.f,{data:a,margin:{top:5,right:5,left:5,bottom:50}},r.a.createElement(O.i,{dataKey:"TimeStamp"}),r.a.createElement(O.j,{dataKey:this.props.yKey}),r.a.createElement(O.h,null),r.a.createElement(O.c,{stroke:"#f5f5f5"}),r.a.createElement(O.e,{type:"monotone",dataKey:this.props.yKey,stroke:this.props.lineColor,yAxisId:0,isAnimationActive:!1})))))}}}]),a}(n.Component),I=Object(L.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})),M=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).timeLimitDay=function(){var e=Date.now()-864e5;n.setState({timeLimit:e})},n.timeLimitWeek=function(){var e=Date.now()-6048e5;n.setState({timeLimit:e})},n.timeLimitMonth=function(){var e=Date.now()-2592e6;n.setState({timeLimit:e})},n.state={timeLimit:0,device:null},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:I.root},r.a.createElement(N.a,{style:{marginInlineEnd:"10px",backgroundColor:"White"},variant:"outlined",size:"small",onClick:this.timeLimitDay},"1 day"),r.a.createElement(N.a,{style:{marginInlineEnd:"10px",backgroundColor:"White"},variant:"outlined",size:"small",onClick:this.timeLimitWeek},"1 week"),r.a.createElement(N.a,{style:{marginInlineEnd:"10px",backgroundColor:"White"},variant:"outlined",size:"small",onClick:this.timeLimitMonth},"1 month"),r.a.createElement("p",null),r.a.createElement(C.a,{container:!0,spacing:4},r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(D.a,{className:I.paper,style:{maxHeight:"270px"}},r.a.createElement(A,{title:"Temperature",yKey:"data.temp",lineColor:"#ff9800",data:this.props.data,timeLimit:this.state.timeLimit,device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(D.a,{className:I.paper,style:{maxHeight:"270px"}},r.a.createElement(A,{title:"Humidity",yKey:"data.humidity",lineColor:"#2196f3",data:this.props.data,timeLimit:this.state.timeLimit,device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(D.a,{className:I.paper,style:{maxHeight:"270px"}},r.a.createElement(k,{title:"Acceleration",yKey:"temp",data:this.props.data,timeLimit:this.state.timeLimit,device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,md:6},r.a.createElement(D.a,{className:I.paper,style:{maxHeight:"270px"}},r.a.createElement(A,{title:"Battery",yKey:"data.battery",lineColor:"#4caf50",data:this.props.data,timeLimit:this.state.timeLimit,device:this.props.device})))))}}]),a}(n.Component),T=a(421),_=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"render",value:function(){var e=this;if(null==this.props.data)return r.a.createElement("div",null,"Loading...");if(null==this.props.device)return r.a.createElement("b",null,this.props.title,":");var t=this.props.data.filter((function(t){return t.DeviceId==e.props.device}));return r.a.createElement("div",null,r.a.createElement("b",null,this.props.title,": "),t[t.length-1].data[this.props.variable],this.props.units)}}]),a}(n.Component),z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={device:null},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement("h2",{style:{marginBottom:"10px"}},"Recent"),r.a.createElement(S,{data:this.props.data,device:this.props.device}),r.a.createElement("p",null),r.a.createElement(C.a,{container:!0,spacing:4},r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(D.a,{className:e.paper},r.a.createElement(j,{device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(D.a,{className:e.paper},r.a.createElement(_,{title:"Temperature",variable:"temp",units:"\xb0C",data:this.props.data,device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(D.a,{className:e.paper},r.a.createElement(_,{title:"Humidity",variable:"humidity",units:"%",data:this.props.data,device:this.props.device}))),r.a.createElement(C.a,{item:!0,xs:12,sm:6,md:3},r.a.createElement(D.a,{className:e.paper},r.a.createElement(_,{title:"Battery",variable:"battery",data:this.props.data,device:this.props.device})))),r.a.createElement("h2",{style:{marginBottom:"10px"}},"Charts"),r.a.createElement(M,{data:this.props.data,device:this.props.device}))}}]),a}(n.Component),B=Object(T.a)((function(e){return{root:{flexGrow:1},paper:{padding:10,textAlign:"center",color:"Black"}}}))(z),H=a(46),K=a.n(H),G=a(45),J=a.n(G),P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={data:null,device:null,ids:null},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://hx63ml0hmc.execute-api.us-west-1.amazonaws.com/dev");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.body.Items,r=n.map((function(e){return e.DeviceId})),i=Array.from(new Set(r)),this.setState({data:n,ids:i},(function(){})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return null==this.state.data?r.a.createElement("div",null,"loading..."):r.a.createElement("div",{className:t.root},r.a.createElement(f.a,null),r.a.createElement(v.a,{position:"fixed",className:t.appBar},r.a.createElement(E.a,null,r.a.createElement(g.a,{variant:"h6",noWrap:!0,className:t.title},"XDK Dashboard"),r.a.createElement(N.a,{color:"inherit",variant:"outlined",onClick:function(){e.componentDidMount()}},r.a.createElement(J.a,null)))),r.a.createElement(h.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper}},r.a.createElement(E.a,null),r.a.createElement("div",{className:t.drawerContainer},r.a.createElement(b.a,null,this.state.ids.map((function(a,n){return r.a.createElement(y.a,{button:!0,onClick:function(){return e.setState({device:a})},key:a},r.a.createElement(x.a,null,r.a.createElement(K.a,null)),r.a.createElement(w.a,{classes:{primary:t.listItemText},primary:a}))}))))),r.a.createElement("main",{className:t.content},r.a.createElement(E.a,null),r.a.createElement(B,{data:this.state.data,device:this.state.device})))}}]),a}(n.Component);Object(T.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:2e3},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:10},title:{flexGrow:1},listItemText:{fontSize:"14px"}}}))(P),a(194),Object(L.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)},title:{flexGrow:1}}}));var W=a(40),F=a(9),Y=a(454),R=a(456),U=a(453),X=a(91),$=a.n(X),q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={mobileOpen:!1,data:null,device:null,ids:null},e.handleDrawerToggle=function(){e.setState((function(e){return{mobileOpen:!e.mobileOpen}}))},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(o.a.mark((function e(){var t,a,n,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://hx63ml0hmc.execute-api.us-west-1.amazonaws.com/dev");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.body.Items,r=n.map((function(e){return e.DeviceId})),i=Array.from(new Set(r)),this.setState({data:n,ids:i},(function(){})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.theme;if(null==this.state.data)return r.a.createElement("div",null,"loading...");var i=r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(U.a,null),r.a.createElement("h3",{style:{paddingLeft:"20px"}},"Devices"),r.a.createElement(b.a,null,this.state.ids.map((function(t){return r.a.createElement(y.a,{button:!0,onClick:function(){return e.setState({mobileOpen:!1,device:t})},key:t},r.a.createElement(x.a,null,r.a.createElement(K.a,null)),r.a.createElement(w.a,{classes:{primary:a.listItemText},primary:t}))}))));return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,{position:"fixed",className:a.appBar},r.a.createElement(E.a,null,r.a.createElement(Y.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:a.navIconHide},r.a.createElement($.a,null)),r.a.createElement(g.a,{variant:"h6",color:"inherit",noWrap:!0,className:a.title},"XDK Dashboard"),r.a.createElement(N.a,{color:"inherit",variant:"outlined",onClick:function(){e.componentDidMount()}},r.a.createElement(J.a,null)))),r.a.createElement(R.a,{smUp:!0},r.a.createElement(h.a,{variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},i)),r.a.createElement(R.a,{xsDown:!0,implementation:"css"},r.a.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:a.drawerPaper}},i)),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(B,{data:this.state.data,device:this.state.device})))}}]),a}(r.a.Component),Q=Object(F.a)((function(e){return{root:{flexGrow:1,zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:Object(W.a)({position:"absolute",marginLeft:240},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(240,"px)")}),navIconHide:Object(W.a)({},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerContainer:{overflow:"auto"},drawerPaper:Object(W.a)({width:240},e.breakpoints.up("sm"),{position:"relative"}),content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit},title:{flexGrow:1}}}),{withTheme:!0})(q),V=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={mobileOpen:!1},e.handleDrawerToggle=function(){e.setState((function(e){return{mobileOpen:!e.mobileOpen}}))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=r.a.createElement("div",null,r.a.createElement("div",{className:t.toolbar}));return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{className:t.appBar},r.a.createElement(E.a,null,r.a.createElement(Y.a,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerToggle,className:t.navIconHide},r.a.createElement($.a,null)),r.a.createElement(g.a,{variant:"title",color:"inherit",noWrap:!0},"Responsive drawer"))),r.a.createElement(R.a,{mdUp:!0},r.a.createElement(h.a,{variant:"temporary",anchor:"rtl"===a.direction?"right":"left",open:this.state.mobileOpen,onClose:this.handleDrawerToggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},n)),r.a.createElement(R.a,{smDown:!0,implementation:"css"},r.a.createElement(h.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper}},n)),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(g.a,{noWrap:!0},"You think water moves fast? You should see ice.")))}}]),a}(r.a.Component),Z=(Object(F.a)((function(e){return{root:{flexGrow:1,height:430,zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},appBar:Object(W.a)({position:"absolute",marginLeft:240},e.breakpoints.up("md"),{width:"calc(100% - ".concat(240,"px)")}),navIconHide:Object(W.a)({},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:Object(W.a)({width:240},e.breakpoints.up("md"),{position:"relative"}),content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing.unit}}}),{withTheme:!0})(V),Object(L.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));var ee=function(){var e=Z();return r.a.createElement("div",{className:e.root},r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[230,1,2]]]);
//# sourceMappingURL=main.2f26920d.chunk.js.map