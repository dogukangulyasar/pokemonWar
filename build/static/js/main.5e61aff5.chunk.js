(this.webpackJsonppokemonwar=this.webpackJsonppokemonwar||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var o,n,s,c=a(0),i=a(1),l=a.n(i),r=a(8),p=a.n(r),m=(a(14),a(2)),d=a(3),u=a(5),h=a(4),k=a(6),b=a.n(k),f=[],g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={logs:"",insideMap:[],x:0,y:0,pokemon:null,pokemonsFaction1:[{Name:"Pikachu",Icon:"https://www.flaticon.com/svg/static/icons/svg/188/188987.svg",AttackPower:null,DefensePower:null,TotalHealth:null,id:1,canUsable:!0},{Name:"Bulbasaur",Icon:"http://www.rw-designer.com/icon-image/14434-256x256x8.png",AttackPower:null,DefensePower:null,TotalHealth:null,id:2,canUsable:!0},{Name:"Snorlax",Icon:"https://www.flaticon.com/svg/static/icons/svg/189/189001.svg",AttackPower:null,DefensePower:null,TotalHealth:null,id:3,canUsable:!0},{Name:"Charizard",Icon:"https://cdn.dribbble.com/users/1088894/screenshots/2631953/charizard-shot.jpg?compress=1&resize=800x600",AttackPower:null,DefensePower:null,TotalHealth:null,id:4,canUsable:!0},{Name:"Mewtwo",Icon:"https://i.pinimg.com/originals/ef/07/74/ef0774a46a2116d3201c252459328540.jpg",AttackPower:null,DefensePower:null,TotalHealth:null,id:5,canUsable:!0},{Name:"Ditto",Icon:"https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/ditto-pokemon-nintendo-video-game-gaming-gartoon-monster-512.png",AttackPower:null,DefensePower:null,TotalHealth:null,id:6,canUsable:!0}]},e.createArea=function(t,a){e.state.x=t,e.state.y=a,o?b.a.circle([e.state.x,e.state.y],{color:"red",fillColor:"red",fillOpacity:.5,radius:1500}).addTo(o):o=b.a.map("mapid").setView([51.505,-.09],13),e.render()},e.setAttack=function(t){var a,n;if(e.prevIdMarker!=t)if(a=prompt("Attack From (id):"),n=prompt("Attack To (id):"),n-=1,(a-=1)+1<=3){if(n+1>3){var s=e.state.pokemonsFaction1[a].AttackPower-e.state.pokemonsFaction1[n].DefensePower;if(s>0&&(e.state.pokemonsFaction1[n].TotalHealth=e.state.pokemonsFaction1[n].TotalHealth-s),alert(e.state.pokemonsFaction1[a].Name+" attacked to "+e.state.pokemonsFaction1[n].Name+" it damages:"+s+" health of attacked: "+e.state.pokemonsFaction1[n].TotalHealth),e.state.pokemonsFaction1[n].TotalHealth<=0){e.prevIdMarker=t,e.state.pokemonsFaction1[n-1].canUsable=!1,alert(e.state.pokemonsFaction1[n].Name+" is defeat!");var c=[];f.forEach((function(e){e._id==t?o.removeLayer(e):c.push(e)})),f=c}}else alert("Cannot attack same faction! Please do not try again -_-");e.prevIdMarker=t}else if(a+1>3)if(n+1<=3){var i=e.state.pokemonsFaction1[a].AttackPower-e.state.pokemonsFaction1[n].DefensePower;if(i>0&&(e.state.pokemonsFaction1[n].TotalHealth=e.state.pokemonsFaction1[n].TotalHealth-i),e.state.pokemonsFaction1[n].TotalHealth=e.state.pokemonsFaction1[n].TotalHealth-i,console.log(e.state.pokemonsFaction1[n]),alert(e.state.pokemonsFaction1[a].Name+" attacked to "+e.state.pokemonsFaction1[n].Name+" it damages:"+i+" health of attacked: "+e.state.pokemonsFaction1[n].TotalHealth),e.prevIdMarker=t,e.state.pokemonsFaction1[n].TotalHealth<=0){e.prevIdMarker=t,alert(e.state.pokemonsFaction1[n].Name+" is defeat!");c=[];f.forEach((function(e){e._id==t?o.removeLayer(e):c.push(e)})),f=c}}else alert("Cannot attack same faction! Please do not try again -_-")},e.setChanges=function(t){if(e.state.pokemonsFaction1[t.id-1].canUsable){var a,n=b.a.icon({iconUrl:t.Icon,shadowUrl:t.Icon,iconSize:[38,64],shadowSize:[0,0],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]});a=f.length<1?0:f[f.length-1]._id+1,e.pokemon1=b.a.marker([e.state.x,e.state.y],{icon:n,draggable:!0}).on("click",(function(){e.pokemon1.bindPopup(t.Name+"<b> <br /> Please click icon one more to set attributes of pokemon <br /> After set attributes next click will attack </b>").openPopup().on("click",(function(){null==e.state.pokemonsFaction1[t.id-1].AttackPower?e.Attack():e.state.insideMap.some((function(e){return e<3}))&&e.state.insideMap.some((function(e){return e>3}))&&e.setAttack(a)}))})),e.pokemon1._id=a,o.addLayer(e.pokemon1),f.push(e.pokemon1);var s=e.pokemon1.getLatLng().lat,c=e.pokemon1.getLatLng().lng,i=e.pokemon1;e.pokemon1.on("dragend",(function(e){var t=i.getLatLng().lat,a=i.getLatLng().lng;t<s+.01&&t>s-.01&&a<c+.025&&a>c-.025?(document.getElementById("latitude").value=t,document.getElementById("longitude").value=a):(i.getLatLng().lat=s,i.getLatLng().lng=c)}))}},e.Attack=function(){var t=e.props.pokemonId.id-1;if(e.state.pokemonsFaction1[t].canUsable){var a=prompt("Attack Power"),o=prompt("Defense Power"),n=prompt("Total Health");null!=a?e.state.pokemonsFaction1[t].AttackPower=a:alert("Cannot use as null"),null!=o?e.state.pokemonsFaction1[t].DefensePower=o:alert("Cannot use as null"),null!=n?e.state.pokemonsFaction1[t].TotalHealth=n:alert("Cannot use as null"),e.state.pokemonsFaction1[t].canUsable=!1,e.state.insideMap.push(t+1)}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){o=b.a.map("mapid").setView([51.505,-.09],13),b.a.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiZGd1bHlhc2FyIiwiYSI6ImNrajYwZjdoYzYzNTIyc2xiNGkwZHFibW0ifQ.mqAXzMxXZJ197aIL5DsOQA"}).addTo(o)}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"btn-group",role:"group","aria-label":"Basic mixed styles example",children:Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.createArea(prompt("X (Location of see in map 51.505)"),prompt("Y (Location of see in map -0.09)"))},children:"Create area "})}),Object(c.jsxs)("form",{hidden:!0,children:[Object(c.jsx)("label",{htmlFor:"latitude",children:"Latitude:"}),Object(c.jsx)("input",{id:"latitude",type:"text"}),Object(c.jsx)("label",{htmlFor:"longitude",children:"Longitude:"}),Object(c.jsx)("input",{id:"longitude",type:"text"})]}),Object(c.jsx)("div",{id:"mapid",style:{width:"100%",height:"800px"}}),null!=this.props.pokemonId?this.setChanges(this.props.pokemonId):null]})}}]),a}(l.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={"pokemons-faction1":[{Name:"Pikachu",Icon:"https://www.flaticon.com/svg/static/icons/svg/188/188987.svg",AttackPower:"",DefensePower:"",TotalHealth:"",id:1,canUsable:!0},{Name:"Bulbasaur",Icon:"http://www.rw-designer.com/icon-image/14434-256x256x8.png",AttackPower:"",DefensePower:"",TotalHealth:"",id:2,canUsable:!0},{Name:"Snorlax",Icon:"https://www.flaticon.com/svg/static/icons/svg/189/189001.svg",AttackPower:"",DefensePower:"",TotalHealth:"",id:3,canUsable:!0}],"pokemons-faction2":[{Name:"Charizard",Icon:"https://cdn.dribbble.com/users/1088894/screenshots/2631953/charizard-shot.jpg?compress=1&resize=800x600",AttackPower:"",DefensePower:"",TotalHealth:"",id:4,canUsable:!0},{Name:"Mewtwo",Icon:"https://i.pinimg.com/originals/ef/07/74/ef0774a46a2116d3201c252459328540.jpg",AttackPower:"",DefensePower:"",TotalHealth:"",id:5,canUsable:!0},{Name:"Ditto",Icon:"https://cdn2.iconfinder.com/data/icons/pokemon-filledoutline/64/ditto-pokemon-nintendo-video-game-gaming-gartoon-monster-512.png",AttackPower:"",DefensePower:"",TotalHealth:"",id:6,canUsable:!0}]},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Faction 1"}),Object(c.jsx)("div",{id:"faction-1",children:Object(c.jsx)("ul",{className:"list-group",children:this.state["pokemons-faction1"].map((function(t){return Object(c.jsx)("button",{onClick:function(){return e.props.pokemonCall(t)},children:Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[t.Name,Object(c.jsx)("img",{src:t.Icon,style:{width:"30px",height:"30px"},alt:"Pokemon Icon"}),Object(c.jsxs)("span",{className:"badge badge-primary badge-pill",children:["Pokemon Id: ",t.id," "]})]})},t.id)}))})}),Object(c.jsx)("h4",{children:"Faction 2"}),Object(c.jsx)("div",{id:"faction-2",children:Object(c.jsx)("ul",{className:"list-group",children:this.state["pokemons-faction2"].map((function(t){return Object(c.jsx)("button",{onClick:function(){return e.props.pokemonCall(t)},children:Object(c.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[t.Name,Object(c.jsx)("img",{src:t.Icon,style:{width:"30px",height:"30px"},alt:"Pokemon Icon"}),Object(c.jsxs)("span",{className:"badge badge-primary badge-pill",children:["Pokemon Id: ",t.id," "]})]})},t.id)}))})})]})}}]),a}(l.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(j,{pokemonCall:this.props.pokemonCall2}),Object(c.jsx)("div",{})]})}}]),a}(l.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).pokemonCall3=function(t){e.setState({pokemonId:t})},e.area=function(e,t){n=e,s=t},e.state={pokemonId:null},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)(g,{x:n||51.505,y:s||-.09,pokemonId:this.state.pokemonId})}),Object(c.jsx)("div",{className:"col-6",children:Object(c.jsx)(w,{area:this.area,pokemonCall2:this.pokemonCall3})})]})}}]),a}(l.a.Component);p.a.render(Object(c.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5e61aff5.chunk.js.map