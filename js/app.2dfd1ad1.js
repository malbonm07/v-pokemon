(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],p=0,v=[];p<o.length;p++)s=o[p],r[s]&&v.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/v-pokemon/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01da":function(t,e,a){},"0901":function(t,e,a){"use strict";var n=a("01da"),r=a.n(n);r.a},"142d":function(t,e,a){},2051:function(t,e,a){"use strict";var n=a("142d"),r=a.n(n);r.a},3049:function(t,e,a){},3050:function(t,e,a){"use strict";var n=a("3049"),r=a.n(n);r.a},4690:function(t,e,a){},"4c6e":function(t,e,a){"use strict";var n=a("4690"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("bb71");a("da64");n["a"].use(r["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("DefaultLayout")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teal lighten-3",attrs:{fluid:""}},[a("HeaderLayout"),a("v-container",{attrs:{fluid:""}},[a("router-view")],1),a("FooterLayout"),a("Navigation")],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-toolbar",{staticClass:"teal lighten-4",attrs:{app:""}},[a("v-toolbar-side-icon",{on:{click:function(e){return t.openNavigation()}}}),a("v-toolbar-title",[t._v("POKEDEX")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:""}},[a("router-link",{staticStyle:{color:"black","text-decoration":"none",padding:"20px 10px 20px 10px"},attrs:{to:{path:"/"}}},[t._v("Search")])],1),a("v-btn",{attrs:{flat:""}},[a("router-link",{staticStyle:{color:"black","text-decoration":"none",padding:"20px 10px 20px 10px"},attrs:{to:{path:"/list"}}},[t._v("List")])],1),a("v-btn",{attrs:{flat:""}},[a("router-link",{staticStyle:{color:"black","text-decoration":"none",padding:"20px 10px 20px 10px"},attrs:{to:{path:"/about"}}},[t._v("About")])],1)],1)],1)],1)},u=[],p={name:"Header",data:function(){return{open:!1}},methods:{openNavigation:function(){this.$bus.$emit("openNavigation")}}},v=p,f=a("2877"),d=a("6544"),b=a.n(d),h=a("8336"),m=a("a523"),k=a("9910"),x=a("71d9"),_=a("2a7f"),y=a("706c"),g=Object(f["a"])(v,c,u,!1,null,null,null),w=g.exports;b()(g,{VBtn:h["a"],VContainer:m["a"],VSpacer:k["a"],VToolbar:x["a"],VToolbarItems:_["a"],VToolbarSideIcon:y["a"],VToolbarTitle:_["b"]});var O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{dark:"",height:"auto"}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-title",{staticClass:"teal"},[a("strong",{staticClass:"subheading"},[t._v("Get connected with me on social networks!")]),a("v-spacer"),a("v-btn",{staticClass:"mx-3",attrs:{dark:"",icon:""}},[a("a",{attrs:{href:"https://www.facebook.com/malbonm07",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-f"})])]),a("v-btn",{staticClass:"mx-3",attrs:{dark:"",icon:""}},[a("a",{attrs:{href:"https://twitter.com/malbonm07",target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})])]),a("v-btn",{staticClass:"mx-3",attrs:{dark:"",icon:""}},[a("a",{attrs:{href:"https://www.linkedin.com/in/malbonm07",target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})])])],1),a("v-card-actions",{staticClass:"grey darken-3 justify-center"},[t._v("\n      ©2019 — "),a("strong",[t._v("Malbonm07")])])],1)],1)},j=[],C={name:"FooterLayout",data:function(){return{}}},V=C,L=(a("0901"),a("b0af")),S=a("99d9"),T=a("12b2"),P=a("553a"),E=Object(f["a"])(V,O,j,!1,null,"5d37d999",null),$=E.exports;b()(E,{VBtn:h["a"],VCard:L["a"],VCardActions:S["a"],VCardTitle:T["a"],VFooter:P["a"],VSpacer:k["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[a("v-list",{staticClass:"pt-5",attrs:{dense:""}},[a("v-divider"),t._l(t.items,function(e){return a("v-list-tile",{key:e.title,on:{click:function(t){}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[a("router-link",{staticStyle:{color:"black","text-decoration":"none"},attrs:{to:{path:e.pathLink}}},[t._v(t._s(e.title))])],1)],1)],1)})],2)],1)},D=[],A={name:"Navigation",data:function(){return{value:!1,items:[{title:"Search",icon:"dashboard",pathLink:"/"},{title:"Pokemon's List",icon:"list",pathLink:"/list"},{title:"About",icon:"question_answer",pathLink:"/about"}],right:null}},mounted:function(){var t=this;this.$bus.$on("openNavigation",function(){t.value=!t.value})}},F=A,I=a("ce7e"),M=a("132d"),B=a("8860"),R=a("ba95"),U=a("40fe"),q=a("5d23"),H=a("f774"),K=Object(f["a"])(F,N,D,!1,null,"5009d43f",null),J=K.exports;b()(K,{VDivider:I["a"],VIcon:M["a"],VList:B["a"],VListTile:R["a"],VListTileAction:U["a"],VListTileContent:q["a"],VListTileTitle:q["c"],VNavigationDrawer:H["a"]});var Y={name:"DefaultLayout",components:{HeaderLayout:w,FooterLayout:$,Navigation:J}},G=Y,X=(a("2051"),Object(f["a"])(G,o,l,!1,null,null,null)),z=X.exports;b()(X,{VContainer:m["a"]});var Q={name:"App",components:{DefaultLayout:z},data:function(){return{}}},W=Q,Z=a("7496"),tt=Object(f["a"])(W,i,s,!1,null,null,null),et=tt.exports;b()(tt,{VApp:Z["a"]});var at=a("8c4f"),nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Search")},rt=[],it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-height":"100vh"}},[a("v-layout",{staticClass:"teal py-5",attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs10:"",md8:""}},[a("v-text-field",{attrs:{solo:"",label:"Buscar Pokemón","append-icon":"search","hide-details":""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getPokemon()}},model:{value:t.pokemonToSearch,callback:function(e){t.pokemonToSearch=e},expression:"pokemonToSearch"}})],1)],1),a("div",{staticClass:"mb-5 mt-5 viewPokeDetail"},[this.pokemons?a("v-layout",{attrs:{wrap:"","justify-center":"",fluid:""}},[t.pokemonObject?a("v-flex",{staticClass:"pa-2 pokeCard",attrs:{xs12:"",sm6:"",md6:""}},[a("pokeDetails",{attrs:{pokeObject:t.pokemonObject}})],1):t._e()],1):t._e()],1),a("v-layout",{staticClass:"pa-5",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h2",{staticClass:"text-xs-center"},[t._v("FIND YOUR FAVORITE POKEMON, CLICK ON SEARCH")])])],1)],1)},st=[],ot=(a("386d"),{apiUrl:"https://pokeapi.co/api/v2"}),lt=ot,ct=a("bc3a"),ut=a.n(ct),pt=ut.a.create({baseURL:lt.apiUrl}),vt=pt,ft={search:function(t){return vt.get("/pokemon/".concat(t),{})}},dt=ft,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.pokeObject?a("v-card",{staticClass:"orange lighten-1"},[a("v-img",{attrs:{src:this.pokeObject.sprites.front_default}}),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"headline text-xs-center"},[a("h2",[t._v(t._s(this.pokeObject.name))])])])]),a("v-card-actions",[a("v-btn",{attrs:{flat:""}},[t._v("DESCRIPTION")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",{on:{click:function(e){t.show=!t.show}}},[t._v(t._s(t.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"orange darken-2"},[a("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("v-progress-linear",{staticStyle:{"text-align":"center"},attrs:{color:t.color,height:"20",value:t.valor}},[t._v("\n            Base Exp. "+t._s(this.pokeObject.base_experience)+"\n          ")])],1),a("v-flex",{attrs:{xs4:"","align-self-start":""}},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"body-2"},[t._v("Abilities:")]),t._l(this.pokeObject.abilities,function(e){return a("v-list-tile-sub-title",[t._v("\n              "+t._s(e.ability.name)+"\n            ")])})],2)],1),a("v-flex",{attrs:{xs4:""}},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"body-2"},[t._v("Stats:")]),t._l(this.pokeObject.stats,function(e){return a("v-list-tile-sub-title",[t._v("\n              "+t._s(e.stat.name)+" "),a("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.base_stat))])])})],2)],1),a("v-flex",{attrs:{xs4:"","align-self-start":""}},[a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"body-2"},[t._v("Type:")]),a("v-list-tile-sub-title",[t._v("\n              "+t._s(this.pokeObject.types[0].type.name)+"\n            ")])],1)],1)],1)],1)],1)],1):t._e()},ht=[],mt={name:"pokeDetails",props:{pokeObject:{type:Object,required:!0}},data:function(){return{show:!1,color1:"warning"}},computed:{color:function(){return this.pokeObject.base_experience<110?"error":this.pokeObject.base_experience>110&&this.pokeObject.base_experience<190?"primary":this.pokeObject.base_experience>190?"success":void 0},valor:function(){return this.pokeObject.base_experience<110?"35":this.pokeObject.base_experience>110&&this.pokeObject.base_experience<190?"70":this.pokeObject.base_experience>190?"100":void 0}}},kt=mt,xt=a("0e8f"),_t=a("adda"),yt=a("a722"),gt=a("8e36"),wt=a("0789"),Ot=Object(f["a"])(kt,bt,ht,!1,null,"00647f17",null),jt=Ot.exports;b()(Ot,{VBtn:h["a"],VCard:L["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:T["a"],VFlex:xt["a"],VIcon:M["a"],VImg:_t["a"],VLayout:yt["a"],VListTileContent:q["a"],VListTileSubTitle:q["b"],VListTileTitle:q["c"],VProgressLinear:gt["a"],VSlideYTransition:wt["d"],VSpacer:k["a"]});var Ct={name:"search",components:{pokeDetails:jt},data:function(){return{pokemonToSearch:"",pokemons:[],pokemonObject:null}},methods:{getPokemon:function(){var t=this;dt.search(this.pokemonToSearch).then(function(e){t.pokemonObject=e.data})}}},Vt=Ct,Lt=(a("3050"),a("2677")),St=Object(f["a"])(Vt,it,st,!1,null,"02d93b32",null),Tt=St.exports;b()(St,{VFlex:xt["a"],VLayout:yt["a"],VTextField:Lt["a"]});var Pt={components:{Search:Tt}},Et=Pt,$t=Object(f["a"])(Et,nt,rt,!1,null,null,null),Nt=$t.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ListPokemon")},At=[],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[this.pokemonsListPreview?a("v-layout",{attrs:{wrap:"","justify-center":"",fluid:""}},t._l(this.pokemonsListPreview,function(t,e){return a("v-flex",{key:e.key,staticClass:"pa-2 pokeCard",attrs:{xs12:"",sm4:"",md3:""}},[a("pokeCard",{attrs:{pokeObject:t,indexPokeObject:e}})],1)}),1):t._e(),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"justify-center":""}},[a("v-flex",{attrs:{xs2:""}},[a("div",[a("v-btn",{attrs:{depressed:"",large:"",color:"primary"},on:{click:function(e){return t.seeMore(10)}}},[t._v("See More")])],1)])],1)],1)],1)},It=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return this.pokeObject?a("v-card",[a("v-img",{attrs:{src:this.pokeObject.sprites.front_default}}),a("v-card-title",{staticClass:"text-xs-center",attrs:{"primary-title":""}},[a("div",{staticStyle:{width:"100%"}},[a("div",{staticClass:"headline text-xs-center"},[a("h2",[t._v(t._s(this.pokeObject.name))])])])])],1):t._e()},Bt=[],Rt=(a("c5f6"),{name:"pokeDetails",props:{pokeObject:{type:Object,required:!0},indexPokeObject:{type:Number,required:!0}}}),Ut=Rt,qt=Object(f["a"])(Ut,Mt,Bt,!1,null,"5beb82c9",null),Ht=qt.exports;b()(qt,{VCard:L["a"],VCardTitle:T["a"],VImg:_t["a"]});var Kt={components:{pokeCard:Ht},data:function(){return{pokemonList:[],pokemonsListPreview:[],currentList:11}},created:function(){for(var t=this,e=function(e){dt.search(e).then(function(a){var n=a.data;t.pokemonList.push(n),e<=10&&t.pokemonsListPreview.push(n)})},a=1;a<=150;a++)e(a)},methods:{seeMore:function(t){var e=this.pokemonsListPreview.length+t;if(this.pokemonsListPreview.length<this.pokemonList.length)while(this.currentList<e)this.pokemonsListPreview.push(this.pokemonList[this.currentList]),this.currentList++},mostrarCurrentList:function(){console.log(this.currentList)}}},Jt=Kt,Yt=Object(f["a"])(Jt,Ft,It,!1,null,"12aa5cfb",null),Gt=Yt.exports;b()(Yt,{VBtn:h["a"],VContainer:m["a"],VFlex:xt["a"],VLayout:yt["a"]});var Xt={components:{ListPokemon:Gt}},zt=Xt,Qt=Object(f["a"])(zt,Dt,At,!1,null,"f0514210",null),Wt=Qt.exports,Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pt-5 about"},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"pb-2",attrs:{xs8:"",tag:"h1"}},[t._v("\n      ABOUT\n    ")]),a("v-flex",{attrs:{xs8:"",tag:"h2"}},[t._v("\n      This is a Simple page aplication to improve my skills like Axios, components, layout, Vuetify, Vuetify plugins, Vue router, others.\n    ")])],1)],1)},te=[],ee={},ae=ee,ne=(a("4c6e"),Object(f["a"])(ae,Zt,te,!1,null,"3cd04ef3",null)),re=ne.exports;b()(ne,{VContainer:m["a"],VFlex:xt["a"],VLayout:yt["a"]}),n["a"].use(at["a"]);var ie=new at["a"]({mode:"history",base:"/v-pokemon/",routes:[{path:"/",name:"search",component:Nt},{path:"/list",name:"list",component:Wt},{path:"/about",name:"about",component:re}]}),se=a("2f62");n["a"].use(se["a"]);var oe=new se["a"].Store({state:{},mutations:{},actions:{}}),le={install:function(t){t.prototype.$bus=new t}},ce=le;n["a"].config.productionTip=!1,n["a"].use(ce),new n["a"]({router:ie,store:oe,render:function(t){return t(et)}}).$mount("#app")}});
//# sourceMappingURL=app.2dfd1ad1.js.map