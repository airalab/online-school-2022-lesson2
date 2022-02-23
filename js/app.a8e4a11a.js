(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([1,"chunk-vendors"]),n()})({0:function(e,t){},"0037":function(e,t,n){},1:function(e,t,n){e.exports=n("56d7")},"19b2":function(e,t,n){"use strict";n("0037")},2:function(e,t){},3:function(e,t){},4:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"app"},r=Object(o["f"])("div",{class:"app-title"},[Object(o["f"])("div",{class:"layout"},[Object(o["f"])("h1",null,[Object(o["g"])(" Lesson 2 Test > "),Object(o["f"])("a",{href:"https://robonomics.academy/",target:"_blank"},"Online Robonomics school 2022")])])],-1);function i(e,t,n,i,s,c){var u=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["e"])("div",a,[r,Object(o["h"])(u)])}var s=n("1da1"),c=(n("96cf"),n("fe43")),u=n.n(c),l=n("e79d"),f=n("0b67"),d={endpoint:"wss://kusama.rpc.robonomics.network/",isDevelopmentAccounts:!1,subscription:"4GgRRojuoQwKCZP9wkB69ZxJY4JprmHtpzEzqJLjnqu4jk1r",discord:"https://discord.com/invite/5UWNGNaAUf"},h=new l["Robonomics"]({endpoint:d.endpoint});h.setAccountManager(new u.a(f["a"]));var b=h,p={name:"App",created:function(){return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b.run();case 2:return e.next=4,u.a.initPlugin(b.accountManager.keyring,{isDevelopment:d.isDevelopmentAccounts});case 4:case"end":return e.stop()}}),e)})))()}},m=(n("70d0"),n("6b0d")),g=n.n(m);const y=g()(p,[["render",i]]);var w=y,j=n("6c02"),O={class:"layout"},v=Object(o["f"])("div",null,[Object(o["f"])("h1",null,"Dear participant!"),Object(o["f"])("p",null," You are invited to take this test for lesson 2, which is dedicated to the first chapter of the Robonomics Whitepaper 2022 “At the Intersection of Cybernetics and Economics”. The test is designed to encourage you to reflect on the ideas covered in the lesson, and you will not find answers to some questions directly in the whitepaper. You will need to think about them by yourself , so be careful. "),Object(o["f"])("p",null," To pass the test, you need to score 10 correct answers out of 17 (60%, the standard value in academic practice). Correct answers and a list of those who successfully completed the lesson will be published on the final day of the school. ")],-1),k={key:1};function q(e,t,n,a,r,i){var s=Object(o["x"])("Account"),c=Object(o["x"])("Sender");return Object(o["q"])(),Object(o["e"])("div",null,[Object(o["f"])("section",null,[Object(o["f"])("div",O,[v,r.isReady?(Object(o["q"])(),Object(o["e"])(o["a"],{key:0},[Object(o["h"])(s,{class:"block"}),Object(o["h"])(c)],64)):(Object(o["q"])(),Object(o["e"])("div",k,"Please wait"))])])])}n("b0c0");var T=function(e){return Object(o["t"])("data-v-0b248dd0"),e=e(),Object(o["r"])(),e},x={style:{"margin-bottom":"0"}},S=T((function(){return Object(o["f"])("h3",null,"1. Your account",-1)})),R=T((function(){return Object(o["f"])("p",null,[Object(o["f"])("i",null,"[Robonomics parachain format]")],-1)})),P=["value"],z={key:1},I={class:"account"},A=T((function(){return Object(o["f"])("br",null,null,-1)})),_=T((function(){return Object(o["f"])("span",{class:"copy"},"Copy address",-1)})),C=T((function(){return Object(o["f"])("span",{class:"copied"},"Address copied!",-1)})),M=[_,C],W={key:2},D=Object(o["g"])(" Create or activate your account in "),N=T((function(){return Object(o["f"])("a",{href:"https://polkadot.js.org/extension/",target:"_blank"},"Polkadot.js extension",-1)})),L=[D,N];function U(e,t,n,a,r,i){return Object(o["q"])(),Object(o["e"])("section",x,[S,R,Object(o["f"])("section",null,[r.accounts.length>1?Object(o["E"])((Object(o["q"])(),Object(o["e"])("select",{key:0,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.account=e})},[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(r.accounts,(function(e,t){return Object(o["q"])(),Object(o["e"])("option",{key:t,value:e.address},Object(o["z"])(e.meta.isTesting?"dev":"")+" "+Object(o["z"])(e.meta.name),9,P)})),128))],512)),[[o["C"],r.account]]):Object(o["d"])("",!0),r.accounts.length>0?(Object(o["q"])(),Object(o["e"])("p",z,[Object(o["f"])("b",I,Object(o["z"])(r.account),1),A,Object(o["f"])("a",{class:"copyLink",href:"javascript:;",onClick:t[1]||(t[1]=Object(o["F"])((function(e){return i.clipboard(r.account,e)}),["prevent"]))},M)])):Object(o["d"])("",!0),0===r.accounts.length?(Object(o["q"])(),Object(o["e"])("p",W,L)):Object(o["d"])("",!0)])])}n("d81d"),n("d3b7"),n("25f0"),n("caad"),n("2532");var B={data:function(){return{account:null,accounts:[],devices:[]}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.rws.getDevices(d.subscription);case 2:n=t.sent,n.isEmpty||(e.devices=n.toArray().map((function(e){return e.toString()}))),b.accountManager.onReady((function(){e.accounts=b.accountManager.getAccounts(),e.accounts.length&&(e.account=e.accounts[0].address)}));case 5:case"end":return t.stop()}}),t)})))()},computed:{isRws:function(){return!!this.devices.includes(this.account)}},watch:{account:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.accountManager.selectAccountByAddress(e);case 2:case"end":return t.stop()}}),t)})))()},isRws:function(){this.isRws?b.accountManager.useSubscription(d.subscription):b.accountManager.useSubscription(!1)}},methods:{clipboard:function(e,t){navigator.clipboard.writeText(e).then((function(){t.target.closest("a").classList.add("on"),setTimeout((function(){t.target.closest("a").classList.remove("on")}),5e3)}))}}};n("19b2");const J=g()(B,[["render",U],["__scopeId","data-v-0b248dd0"]]);var Y=J,E=function(e){return Object(o["t"])("data-v-22517556"),e=e(),Object(o["r"])(),e},Q=E((function(){return Object(o["f"])("h3",null,"2. Your answers",-1)})),V={key:0,class:"msg"},G=E((function(){return Object(o["f"])("h4",null,"Your answers has been sent",-1)})),H=["href"],Z={key:1};function $(e,t,n,a,r,i){var s=Object(o["x"])("Quiz");return Object(o["q"])(),Object(o["e"])("div",null,[Q,Object(o["h"])(s,{onSubmit:i.send,loader:r.loader},null,8,["onSubmit","loader"]),r.result?(Object(o["q"])(),Object(o["e"])("div",V,[G,Object(o["f"])("ol",null,[Object(o["f"])("li",null,[Object(o["f"])("a",{href:"https://robonomics.subscan.io/extrinsic/".concat(r.result),target:"_blank"},"View tx explorer",8,H)])])])):Object(o["d"])("",!0),r.error?(Object(o["q"])(),Object(o["e"])("div",Z,Object(o["z"])(r.error),1)):Object(o["d"])("",!0)])}n("e9c4"),n("99af");var F=Object(o["g"])("  "),K=["type","onUpdate:modelValue","value"],X={key:0,disabled:"",style:{"font-style":"italic"}},ee=["disabled"],te={key:2,class:"error"},ne={key:3,class:"tip"},oe=Object(o["g"])(" You need IoT subscription for transaction fee. Ask in "),ae=["href"],re=Object(o["g"])(" to add your account to the Learning Winter School 2022 subscription. ");function ie(e,t,n,a,r,i){return Object(o["q"])(),Object(o["e"])("section",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(r.questions,(function(e,t){return Object(o["q"])(),Object(o["e"])("div",{key:t,class:"answer"},[Object(o["f"])("h2",null,"Question "+Object(o["z"])(t+1)+": "+Object(o["z"])(e.question),1),Object(o["f"])("ul",null,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(e.answers,(function(n,a){return Object(o["q"])(),Object(o["e"])("li",{key:a},[Object(o["f"])("label",null,[Object(o["f"])("b",null,Object(o["z"])(a)+")",1),F,Object(o["E"])(Object(o["f"])("input",{type:e.multiple?"checkbox":"radio","onUpdate:modelValue":function(e){return r.form[t]=e},value:a},null,8,K),[[o["B"],r.form[t]]]),Object(o["g"])(" "+Object(o["z"])(n),1)])])})),128))])])})),128)),n.loader?(Object(o["q"])(),Object(o["e"])("button",X," Please wait ")):(Object(o["q"])(),Object(o["e"])("button",{key:1,onClick:t[0]||(t[0]=function(){return i.submit&&i.submit.apply(i,arguments)}),disabled:!r.isSubscription||r.error}," Sign and send ",8,ee)),r.error?(Object(o["q"])(),Object(o["e"])("div",te,Object(o["z"])(r.error),1)):Object(o["d"])("",!0),r.isSubscription?Object(o["d"])("",!0):(Object(o["q"])(),Object(o["e"])("div",ne,[oe,Object(o["f"])("a",{href:r.discord,target:"_blank"},"Discord",8,ae),re]))])}var se=n("beb6"),ce={};for(var ue in se)ce[ue]=se[ue].multiple?[]:null;var le={props:["loader"],data:function(){return{questions:se,form:ce,isSubscription:!1,discord:d.discord,error:!1}},created:function(){var e=this;setInterval((function(){e.isSubscription=b.accountManager.subscription}),1e3)},watch:{form:{handler:function(){var e=!1;for(var t in this.form)if(null===this.form[t]||0===this.form[t].length){e="all questions must be answered";break}this.error=e},deep:!0,immediate:!0}},methods:{submit:function(){this.error||this.$emit("submit",this.form)}}};n("d13d");const fe=g()(le,[["render",ie],["__scopeId","data-v-278aaee5"]]);var de=fe,he={components:{Quiz:de},data:function(){return{result:null,error:null,unsubscribe:null,loader:!1}},unmounted:function(){this.unsubscribe&&this.unsubscribe()},methods:{send:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.error="",t.result="",t.loader=!0,n.prev=3,o=b.datalog.write(JSON.stringify({lesson:2,data:e})),n.next=7,b.accountManager.signAndSend(o);case 7:a=n.sent,t.result="".concat(a.blockNumber,"-").concat(a.txIndex),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](3),t.error=n.t0.message;case 14:t.loader=!1;case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))()}}};n("a510");const be=g()(he,[["render",$],["__scopeId","data-v-22517556"]]);var pe=be,me={components:{Account:Y,Sender:pe},data:function(){return{isReady:!1}},created:function(){var e=this;b.onReady((function(){e.isReady=!0}))}};const ge=g()(me,[["render",q]]);var ye=ge,we=Object(j["a"])({history:Object(j["b"])(),routes:[{path:"/",name:"main",component:ye}]}),je=we;Object(o["c"])(w).use(je).mount("#app")},"70d0":function(e,t,n){"use strict";n("c4af")},a510:function(e,t,n){"use strict";n("ca55")},beb6:function(e){e.exports=JSON.parse('[{"question":"Why does the emergence of the robot economy look like a logical continuation of the human economy? (multiple answers)","answers":{"a":"There will be too many robots and devices to prevent them from becoming a direct part of economic processes.","b":"New supply chains will run too fast for humans.","c":"The transaction costs of the human economy do not allow humanity to develop sufficiently.","d":"There are already gaps in the supply chains of firms, it is more profitable to transfer the management of firms to automation."},"multiple":true},{"question":"Transaction costs are a consequence of…","answers":{"a":"the rational behavior of economic agents","b":"bounded rationality of economic agents and complexity of the world around us","c":"the use of market mechanisms","d":"the irrational behavior of economic agents"},"multiple":false},{"question":"How does the market affect the size of firms?","answers":{"a":"The size of firms depends on the internal costs of producing a product compared to the transaction costs of obtaining a similar product through market exchange transactions.","b":"The higher the transaction costs, the lower the profit of the company, and as a result, the smaller its size.","c":"The larger the market, the larger the firms represented in it.","d":"The size of firms depends on the bounded rationality of those market participants who refuse to directly participate in the exchange and agree to participate in the work of the firm."},"multiple":false},{"question":"Why hasn\'t a gigantic firm manufacturing everything in the world yet appeared according to Coase?","answers":{"a":"The sum of the transaction costs of one giant firm will outweigh the profits from the production of its goods.","b":"Competing companies just don\'t let that happen, that\'s the nature of the free market.","c":"At some point, the costs of organizing the creation of a new product within one firm will exceed the costs of creating the same product through exchange transactions.","d":"The antimonopoly authorities do not allow such firms to appear."},"multiple":false},{"question":"In which case will the transaction costs of the aircraft refueling firm decrease?","answers":{"a":"The firm will install video surveillance cameras on the refueling unit.","b":"The firm will offer airlines increased rates for refueling.","c":"The firm will replace refueling units and human operators with refueling robots.","d":"The firm will connect a digital system for processing and tracking refueling orders."},"multiple":false},{"question":"If robofirms arise and spread everywhere, then what will people do? (multiple answers)","answers":{"a":"People will simply buy goods and services from robofirms.","b":"People will engage in creative and intellectual activities.","c":"People will invest in robofirms and receive dividends.","d":"People will create handmade goods that will be highly valued.","e":"People will technically check robofirms."},"multiple":true},{"question":"The term \\"cyber-physical system\\" does not have a general strict definition. Indicate the most correct meaning that reflects the main point of the concept.","answers":{"a":"CPS is a mutual integration of the physical processes with the software and networking.","b":"CPS is a communication protocol between heterogeneous devices.","c":"CPS is an integration of devices and software.","d":"CPS is a gigantic world cybernetic system that unites everything."},"multiple":false},{"question":"Which of the following is NOT an example of a cyber-physical system?","answers":{"a":"Google Maps","b":"Smart Home","c":"Proportional-integral-derivative (PID) controller","d":"Smart factory"},"multiple":false},{"question":"A characteristic attribute of any industrial revolution is:","answers":{"a":"Transition from an agrarian society to an industrial one","b":"Rapid introduction of technologies in the most important areas of the human economy","c":"Rapid changes in the political structure of states","d":"Use of computing devices in production"},"multiple":false},{"question":"What is the fundamental difference between the fourth industrial revolution and the third?","answers":{"a":"Use of digital technologies in production processes.","b":"Introduction of industrial robots into production cycles that can work automatically.","c":"The trend is to create digital and shareable products to buyers around the world.","d":"The emergence of large-scale automatic cycles of data collection, processing and decision-making without human intervention."},"multiple":false},{"question":"What is Norbert Wiener\'s principle that he suggests as a guide to productive research?","answers":{"a":"The most productive research comes from adding a digital approach to technical fields.","b":"It is necessary to concentrate on particular cases in order to then highlight general patterns.","c":"Living beings are mysterious in nature, researching them can lead to many scientific works.","d":"The most productive research is obtained if you apply an interdisciplinary approach, and look for patterns in different areas."},"multiple":false},{"question":"What makes cryptocurrencies the first money that autonomous systems can manage?","answers":{"a":"Due to the digital nature of cryptocurrencies, the autonomous system will be protected from hacking and fraud.","b":"Autonomous systems can store cryptocurrency in personal wallets, use to accept payments and pay bills on their own.","c":"No one will be able to stop an autonomous system from completing a task if it has been paid with an immutable blockchain.","d":"Using cryptocurrencies, autonomous systems will be able to pass the Turing test."},"multiple":false},{"question":"Why are the possibilities of the Bitcoin cryptocurrency in its current form not enough for the functioning of the robot economy?","answers":{"a":"The robot will have to download the entire blockchain in order to use the crypto wallet.","b":"Bitcoin is subject to a 51% attack probability, which makes it unsafe for autonomous economic agents.","c":"Bitcoin transactions contain only payment information, while autonomous economic agents require programmable business logic.","d":"Due to the high volatility of Bitcoin, the work of autonomous economic agents can be disrupted at any time."},"multiple":false},{"question":"What are the advantages of establishing contractual relationships between cyber-physical systems when they interact?","answers":{"a":"In a contractual format, devices cannot escape human control.","b":"In a contractual format automatic services of different companies can cooperate while maintaining the interests of companies and its security.","c":"In a contractual format, it is necessary to create standardized methods for connecting different systems of companies.","d":"In a contractual format, machine-to-machine interaction requires less electricity."},"multiple":false},{"question":"Let\'s assume that the fee for conducting transactions in the Ethereum network is $200. In which of the following scenarios do you think the operation of the robot economy is still profitable? (multiple answers)","answers":{"a":"consistent workflow between two smart factories","b":"collecting data from a network of civil monitoring sensors","c":"automatic refueling of tankers","d":"quick selfies for Instagram with a hired drone","e":"automatic pizza delivery","f":"coffee shop with waffle maker robot"},"multiple":true},{"question":"What is teleology?","answers":{"a":"The study of religious dogmas.","b":"The study of human behavior, regardless of the final goal setting.","c":"The study of the causes of the behavior of artificial intelligence.","d":"The study of explaining the development of someone or something as a function of its final goals."},"multiple":false},{"question":"What is praxeology?","answers":{"a":"The study of the effectiveness of practical activities.","b":"The study of the best practical software for economics.","c":"The study of the practical usefulness of autonomous systems.","d":"The study of effective human management in a firm"},"multiple":false}]')},c4af:function(e,t,n){},ca55:function(e,t,n){},d13d:function(e,t,n){"use strict";n("e3a4")},e3a4:function(e,t,n){}});
//# sourceMappingURL=app.a8e4a11a.js.map