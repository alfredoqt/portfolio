(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),i=n.n(o),c=(n(54),n(4)),l=n(5),s=n(8),m=n(6),p=n(9),d=n(105),u=n(107),f=n(104),h=n(106),b=n(11),g=[{name:"about",icon:b.a,id:"32432sfadsad32"},{name:"projects",icon:b.d,id:"224sdsa325"},{name:"skills",icon:b.e,id:"32jdssakaj32"},{name:"resume",icon:b.c,id:"32432sgfds"},{name:"contact",icon:b.b,id:"344343dsfd3"}],v=n(40),x=n(41),y=n.n(x),w=n(16),j=n.n(w),E=n(17),O=n.n(E),k={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},z={shortest:.15,shorter:.2,short:.25,standard:.3,complex:.375,enteringScreen:.225,leavingScreen:.195},S={root:{padding:"8px 0",color:"#c7d1d8",display:"flex",alignItems:"center",cursor:"pointer",fill:"#c7d1d8",transition:{easing:k,duration:z,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,a=void 0===n?z.standard:n,r=t.easing,o=void 0===r?k.easeInOut:r,i=t.delay,c=void 0===i?0:i;return e.map(function(e){return"".concat(e," ").concat(a,"s ").concat(o," ").concat(c,"s")}).join(", ")}}.create(["color","fill","borderLeft"]),borderLeft:"0rem","&:hover":{color:"white",fill:"white",borderLeft:".3rem solid white"}},active:{color:"white",fill:"white",borderLeft:".3rem solid white"}};var C=j()(S)(function(e){var t=e.name,n=e.icon,a=e.onClick,o=e.classes,i=e.active,c=O()(o.root,Object(v.a)({},o.active,i));return r.a.createElement("div",{className:c,onClick:a},r.a.createElement(y.a,{path:n,size:1.4,color:"inherit",style:{margin:"0 15px"}}),r.a.createElement("span",{style:{fontSize:"1.6rem",textTransform:"capitalize"}},t))}),I=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){var t=n.props.history;"resume"!==e?t.push(e):window.open("https://alfredoqt.sfo2.digitaloceanspaces.com/Resume.pdf","_self")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props.location,n=e.location;return t.pathname.split("/")[1]!==n.pathname.split("/")[1]}},{key:"render",value:function(){var e=this,t=this.props.location.pathname.split("/")[1];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",width:"100%"}},g.map(function(n){return r.a.createElement(C,{name:n.name,key:n.id,icon:n.icon,active:n.name===t,onClick:function(){return e.handleClick(n.name)}})}))}}]),t}(r.a.Component),T=Object(h.a)(I),W=n(48),A=n(45),B=n.n(A);var F=j()({root:{width:"152px",borderRadius:"50%",boxShadow:"0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)"}})(function(e){var t=e.classes,n=e.className,a=Object(W.a)(e,["classes","className"]);return r.a.createElement("img",Object.assign({src:B.a,alt:"Profile",className:O()(t.root,n)},a))}),L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).navigateToMain=function(){n.props.history.push("/")},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px 0"}},r.a.createElement(F,{style:{marginBottom:"15px",cursor:"pointer"},onClick:this.navigateToMain}),r.a.createElement("div",{style:{cursor:"pointer"},onClick:this.navigateToMain},r.a.createElement("p",{style:{color:"#c7d1d8",marginBottom:"10px",textTransform:"uppercase",fontSize:"2rem",fontWeight:"bold",textAlign:"center"}},"Alfredo Quintero"),r.a.createElement("p",{style:{color:"#c7d1d8",textTransform:"uppercase",fontSize:"1.4rem",textAlign:"center"}},"Full Stack Developer")))}}]),t}(r.a.Component),D=Object(h.a)(L);var M=function(){return r.a.createElement("aside",{style:{backgroundColor:"#283e4a",width:"20%",height:"100vh",overflow:"hidden",position:"fixed",top:0,left:0,bottom:0,zIndex:2}},r.a.createElement(D,null),r.a.createElement(T,null))},N=n(46),H=n.n(N);var J=function(){return r.a.createElement("div",{style:{background:"url(".concat(H.a,") no-repeat center center fixed"),backgroundSize:"cover",height:"100%"}},r.a.createElement("div",{style:{padding:"8rem 3rem"}},r.a.createElement("h1",{style:{color:"#131313",textTransform:"uppercase",fontWeight:"bold",fontSize:"4.8rem",textShadow:"0px 2px 2px rgba(255, 255, 255, 0.4)",marginBottom:"1.6rem"}},"Hi, I'm Alfredo"),r.a.createElement("h2",{style:{color:"#131313",fontSize:"2.4rem",textShadow:"0px 2px 2px rgba(255, 255, 255, 0.4)"}},"Full stack developer with a passion for developing applications that improve people's lives.")))},R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("div",{style:{position:"absolute",top:0,left:"20%",bottom:0,width:"80%"}},r.a.createElement(J,null)))}}]),t}(a.Component);var q=function(){return r.a.createElement("div",{style:{padding:"3rem 2rem"}},r.a.createElement("h2",{style:{color:"#283e4a",textTransform:"uppercase",fontSize:"4.8rem",marginBottom:"2rem"}},"About Me"),r.a.createElement("p",{style:{fontSize:"1.6rem",lineHeight:1.6,fontWeight:300,color:"#131313",marginBottom:"1rem"}},"I'm a Full Stack Web Developer with two years of programming experience."," ","I enjoy learning new things and solving problems in an efficient and creative way."," ","When I'm not coding, you'll find me reading horror and science fiction novels or working out."),r.a.createElement("p",{style:{fontSize:"1.6rem",lineHeight:1.6,fontWeight:300,color:"#131313"}},"I spend the last year doing projects"))},P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,null),r.a.createElement("div",{style:{marginLeft:"20%"}},r.a.createElement(q,null)))}}]),t}(a.Component),Q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(u.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:R}),r.a.createElement(f.a,{path:"/about",component:P})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,n){e.exports=n.p+"static/media/download.57d91ebb.png"},46:function(e,t,n){e.exports=n.p+"static/media/welcome.8090709b.png"},49:function(e,t,n){e.exports=n(103)},54:function(e,t,n){}},[[49,2,1]]]);
//# sourceMappingURL=main.ca241bd4.chunk.js.map