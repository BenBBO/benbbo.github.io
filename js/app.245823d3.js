(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"2d006":function(t,e,i){"use strict";i("8caf")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("Acceuil"),i("Prestation",{staticClass:"zone-container"}),i("Tarifs",{staticClass:"zone-container"}),i("About",{staticClass:"zone-container"})],1)},n=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-navbar",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}],attrs:{toggleable:"lg",sticky:!0,id:"header-nav-bar"}},[i("div",{staticClass:"container"},[i("b-navbar-toggle",{attrs:{target:"nav-collapse"}},[i("i",{staticClass:"fas fa-bars"})]),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{href:"#app"}},[t._v("Acceuil")]),i("b-nav-item",{attrs:{href:"#prestation"}},[t._v("Prestations")]),i("b-nav-item",{attrs:{href:"#tarif"}},[t._v("Tarifs")]),i("b-nav-item",{attrs:{href:"#about"}},[t._v("A propos")]),i("b-nav-item",{attrs:{href:"#contact"}},[t._v("Contact")])],1)],1)],1)])},l=[],c={name:"Header"},o=c,u=(i("d5af"),i("2877")),d=Object(u["a"])(o,r,l,!1,null,"2e51214f",null),p=d.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex",attrs:{id:"home"}},[i("div",{staticClass:"description align-self-center p-5"},[i("div",{staticClass:"catch-phrase"},[t._v("Travaillons ensemble pour demain")]),i("div",{staticClass:"name"},[t._v("Barbara Bouillet")]),i("p",{staticClass:"titre"},[t._v("Assistante dentaire indépendante.")]),i("p",{staticClass:"prestations"},[t._v(" Acompagnatrice à l'hygiène bucco-dentaire (tout public). Aide à l'évasion et à la détente au soin des enfants. "),i("br"),t._v(" Artisanat en pose de facettes lumineers. Assistanat en 4 ou 6 mains en implantologie, chirurgie ou tout type de soin. ")]),i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"}},[t._v("Prestations")])])])}],m={name:"Main"},b=m,C=(i("e31c"),Object(u["a"])(b,v,f,!1,null,"24eff7d0",null)),_=C.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"prestation"}},[i("h1",{staticClass:"main-title"},[t._v("Prestations")]),i("div",{staticClass:"row"},[i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Enfants",iconName:"child",color:"#FEAEC7",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."}}),i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Prévention",color:"#89001C",iconName:"hand-holding-medical",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."}}),i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Techniques",color:"#3F6E82",iconName:"comment-medical",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."}}),i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Travail au fauteuil",color:"#FF7F26",iconName:"tooth",description:t.travailFauteuil}}),i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Accueil",color:"#CBA528",iconName:"info-circle",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."}}),i("PrestationCard",{staticClass:"col-lg-4 col-md-6 mt-4",attrs:{title:"Stérilisation et stocks",color:"#C3C3C3",iconName:"hand-sparkles",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at."}})],1)])},g=[],y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],class:["prestation-card",t.isVisible?"visibleCard":""]},[i("div",{staticClass:"face face1",style:{background:t.color}},[i("div",{staticClass:"content"},[i("i",{class:["fas","fa-"+t.iconName]}),i("h3",[t._v(t._s(t.title))])])]),i("div",{staticClass:"face face2"},[i("div",{staticClass:"content"},[i("p",{domProps:{innerHTML:t._s(t.description)}})])])])},x=[],A={name:"PrestationCard",props:{color:{type:String},iconName:{type:String},title:{type:String},description:{type:String}},data:function(){return{isVisible:!1}},methods:{visibilityChanged:function(t){this.isVisible=t}}},E=A,P=(i("757b"),Object(u["a"])(E,y,x,!1,null,"1748078a",null)),j=P.exports,T=i("f8d0"),O=i.n(T),L={name:"Prestation",components:{PrestationCard:j},data:function(){return{travailFauteuil:O.a}}},k=L,q=Object(u["a"])(k,h,g,!1,null,"33b52eba",null),w=q.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tarif-container",attrs:{id:"tarif"}},[i("div",{staticClass:"container"},[i("h1",{staticClass:"main-title"},[t._v(" Tarifs ")]),i("h2",{staticClass:"subtitle"},[t._v("Tarifs HT. TVA non applicable art. 293 du GGI")]),i("div",{staticClass:"d-flex table-container justify-content-evenly align-items-stretch"},[i("div",{staticClass:"tarif-table"},[i("h2",{staticClass:"heading"},[t._v(" Préventions ")]),i("div",{staticClass:"block"},[i("p",[t._v("Individuelles Adultes ou Enfants "),i("ul",{staticClass:"options"},[i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("1h à 1h30")]),i("div",{staticClass:"price"},[t._v("65 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Les rendez-vous suivants dans les mêmes créneaux")]),i("div",{staticClass:"price"},[t._v("65 €")])])])])]),i("div",{staticClass:"block"},[i("p",[t._v("Collectives Enfants (3 max) "),i("ul",{staticClass:"options"},[i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("1h à 1h30")]),i("div",{staticClass:"price"},[t._v("65 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Les rendez-vous suivants dans les mêmes créneaux")]),i("div",{staticClass:"price"},[t._v("65 €")])])])])])]),i("div",{staticClass:"tarif-table"},[i("h2",{staticClass:"heading"},[t._v(" Services ")]),i("div",{staticClass:"block"},[i("p",[t._v("Assistanat pour Enfants "),i("ul",{staticClass:"options"},[i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Heure")]),i("div",{staticClass:"price"},[t._v("33 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("1/2 Journée (4h)")]),i("div",{staticClass:"price"},[t._v("120 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Journée (8h)")]),i("div",{staticClass:"price"},[t._v("220 €")])])])])]),i("div",{staticClass:"block"},[i("p",[t._v("Assistanat en Omnipratique "),i("ul",{staticClass:"options"},[i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("1/2 Journée (4h)")]),i("div",{staticClass:"price"},[t._v("114 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Journée (8h)")]),i("div",{staticClass:"price"},[t._v("210 €")])])])])]),i("div",{staticClass:"block"},[i("p",[t._v("Assistanat en omnipratique et collage de Facettes "),i("ul",{staticClass:"options"},[i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Heure")]),i("div",{staticClass:"price"},[t._v("35 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("1/2 Journée (4h)")]),i("div",{staticClass:"price"},[t._v("132 €")])]),i("li",{staticClass:"d-flex"},[i("div",{staticClass:"duration"},[t._v("Journée (8h)")]),i("div",{staticClass:"price"},[t._v("240 €")])])])])])])])])])}],N={name:"Tarifs"},D=N,J=(i("2d006"),Object(u["a"])(D,F,S,!1,null,"72dbc836",null)),$=J.exports,M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"about"}},[i("h1",{staticClass:"main-title"},[t._v("A propos")]),t._m(0),i("div",{staticClass:"timeline-container"},[i("Timeline",{attrs:{dates:t.formations,title:"Formations et expériences professionnelles"}})],1)])},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"about-description"},[s("img",{attrs:{src:i("eb4a")}}),s("p",[t._v(" Barbara Bouillet née en 1986. Diplômée en tant qu’Assistante Dentaire au CQFD de Fontaine en 2009. ")]),s("p",[t._v(" Tout d’abord baignée dans l’univers des enfants, je me voyais plutôt éducatrice de jeunes enfants. Je les considère comme mes muses qui avec leur boule d’énergie me transportent dans leur monde aussi imaginaire que réel. ")]),s("p",[t._v(" Des personnes m’ont offert la chance de mettre cet univers entre parenthèse, afin de grandir, d’évoluer, de comprendre, d’apprendre pour mieux appréhender demain. Longtemps je me suis cherchée dans toutes ces formations et ces conférences qui m’ont passionnées et nourries de connaissance. Entre les facettes, les huiles essentielles, les ATM, les troubles du comportement, les implants, l’accompagnement à l’hygiène bucco-dentaire, la PNL, l’hypnose, la parodontite…. ")]),s("p",[t._v(" Aujourd’hui grâce à mes formateurs, à ma vie, je me propulse dans une autre dimension, afin de me surpasser pour allier un métier, une passion, une envie…. ")]),s("p",[t._v("Tout se tisse pour construire une belle histoire.")]),s("p",[t._v("Merci à toutes ces personnes qui ont contribuées à l’écrire.")])])])}],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-container"},[i("h2",[t._v(t._s(t.title))]),i("div",{staticClass:"flex-parent"},[i("div",{staticClass:"input-flex-container"},[t._l(t.dates,(function(e,s){return[i("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],key:"input-"+s,attrs:{type:"radio",name:"timeline-dot",id:"input-"+s},domProps:{value:""+s,checked:t._q(t.selectedDate,""+s)},on:{change:function(e){t.selectedDate=""+s}}}),i("div",{key:"dot-"+s,staticClass:"dot-info"},[i("label",{staticClass:"year",attrs:{for:"input-"+s}},[t._v(t._s(e.date))]),i("label",{staticClass:"label",attrs:{for:"input-"+s}},[t._v(t._s(e.label))])])]})),i("div",{attrs:{id:"timeline-descriptions-wrapper"}},[t._v(" "+t._s(t.description)+" ")])],2)])])},B=[],Q=(i("a4d3"),i("e01a"),{name:"Timeline",props:{dates:{type:Array,required:!0},title:{type:String}},data:function(){return{selectedDate:0}},computed:{description:function(){var t=this.dates[this.selectedDate];return t?t.description:null}}}),U=Q,z=(i("573f"),Object(u["a"])(U,I,B,!1,null,"788e58c0",null)),G=z.exports,V={name:"About",components:{Timeline:G},data:function(){return{formations:[{date:"2008-2009",label:"Formation Assistante dentaire",description:"Formation qualifiante à Fontaine.",id:1},{date:"2011",label:"Logiciel JULIE",description:"Approfondissement logiciel JULIE avec Julie à Rillieu la Pape.",id:2},{date:"2013",label:"Facettes LUMINEERS",description:"Tecalliage à Grenoble.",id:3},{date:"2015",label:"I top explication à l'hygiène",description:"Curaprox à Lyon.",id:4},{date:"2015",label:"Programmation Neuro-Linguistique",description:"M.Giorgi à Lyon.",id:5},{date:"2015-2016",label:"Hypnose Ericksonienne",description:"Gema à Lyon.",id:6},{date:"2018",label:"Hypnose Ericksonienne",description:"Adentia à Paris.",id:7},{date:"2018",label:"Hygiène et stérilisation",description:"UFSBD.",id:8},{date:"2020",label:"Education à la santé orale des patients",description:"UFSBD.",id:9}]}}},R=V,K=(i("87db"),Object(u["a"])(R,M,H,!1,null,"1376a7ca",null)),W=K.exports,X={components:{Header:p,Acceuil:_,Prestation:w,Tarifs:$,About:W}},Y=X,Z=(i("5c0b"),Object(u["a"])(Y,a,n,!1,null,null,null)),tt=Z.exports,et=i("8c4f");s["default"].use(et["a"]);var it=[],st=new et["a"]({routes:it}),at=st,nt=i("85fe"),rt=i("5f5b"),lt=i("b1e0");i("ab8b"),i("2dd8");s["default"].use(rt["a"]),s["default"].use(lt["a"]),s["default"].directive("observe-visibility",nt["a"]),s["default"].config.productionTip=!1,new s["default"]({router:at,render:function(t){return t(tt)}}).$mount("#app")},"573f":function(t,e,i){"use strict";i("9aaf")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"6d89":function(t,e,i){},"71c9":function(t,e,i){},"757b":function(t,e,i){"use strict";i("71c9")},8660:function(t,e,i){},"87db":function(t,e,i){"use strict";i("8660")},"8caf":function(t,e,i){},"9aaf":function(t,e,i){},"9c0c":function(t,e,i){},d5af:function(t,e,i){"use strict";i("6d89")},e31c:function(t,e,i){"use strict";i("f6bf")},eb4a:function(t,e,i){t.exports=i.p+"img/bab-face.fccdf1d2.jpg"},f6bf:function(t,e,i){},f8d0:function(t,e){var i="<ul> <li><b>Anticiper</b> les gestes du Docteur en soin</li> <li>Installer une salle stérile pour la chirurgie</li> <li>Assister à la pose d'un implant</li> <li>Assister au scellement de la facette LUMINEERS</li> <li>Ecouter et accompagner la respiration du patient pour le détendre</li> <li>Accompagner les soins par l'imaginaire pour les enfants et les adolescents</li> </ul>";t.exports=i}});
//# sourceMappingURL=app.245823d3.js.map