(this["webpackJsonptwitter-clone"]=this["webpackJsonptwitter-clone"]||[]).push([[5],{1022:function(e,t){},1024:function(e,t){},1044:function(e,t){},1046:function(e,t){},1058:function(e,t){},1074:function(e,t){},1076:function(e,t){},1078:function(e,t){},1218:function(e,t){},1220:function(e,t){},1227:function(e,t){},1228:function(e,t){},1244:function(e,t){},1246:function(e,t){},1254:function(e,t){},1265:function(e,t){},1334:function(e,t,n){},1335:function(e,t,n){},1336:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(276),o=n.n(i),a=(n(648),n(2)),s=n(11),u=n(42),l=n.p+"static/media/918dcx.afac549c.png",d=n(166),b=(n(1334),n(1335),n(73)),f=n(8);var h=function(e){var t=e.perc,n=(e.setPerc,e.token),r=e.setModalToken,i=e.setVisible,o=Object(c.useState)(),l=Object(u.a)(o,2),h=l[0],p=l[1],j=Object(b.e)(),m=Object(b.b)().isAuthenticated;function O(e){return y.apply(this,arguments)}function y(){return(y=Object(s.a)(Object(a.a)().mark((function e(t){var c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={contractAddress:"0x921635ac4D1bA11789C6e89b3B15b88Efe4611a7",functionName:"vote",abi:[{inputs:[{internalType:"string",name:"_ticker",type:"string"},{internalType:"bool",name:"_vote",type:"bool"}],name:"vote",outputs:[],stateMutability:"nonpayable",type:"function"}],params:{_ticker:n,_vote:t}},e.next=3,j.fetch({params:c,onSuccess:function(){console.log("vote succesful")},onError:function(e){alert(e.data.message)}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){p(t<50?"#c43d08":"green")}),[t]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"coinContainer",children:[Object(f.jsx)("div",{className:"token",children:n}),Object(f.jsxs)("div",{className:"circle",style:{boxShadow:"0 0 20px ".concat(h)},children:[Object(f.jsx)("div",{className:"wave",style:{marginTop:"".concat(100-t,"%"),boxShadow:"0 0 20px ".concat(h),backgroundColor:h}}),Object(f.jsxs)("div",{className:"percentage",children:[t,"%"]})]}),Object(f.jsxs)("div",{className:"votes",children:[Object(f.jsx)(d.a,{onClick:function(){m?O(!0):alert("Authenicate to Vote")},text:"Up",theme:"primary",type:"button"}),Object(f.jsx)(d.a,{color:"red",onClick:function(){m?O(!1):alert("Authenicate to Vote")},text:"Down",theme:"colored",type:"button"})]}),Object(f.jsx)("div",{className:"votes",children:Object(f.jsx)(d.a,{onClick:function(){r(n),i(!0)},text:"INFO",theme:"translucent",type:"button"})})]})})},p=[{token:"BTC",address:"0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",about:"Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009. Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them. Bitcoin was created, according to Nakamoto\u2019s own words, to allow \u201conline payments to be sent directly from one party to another without going through a financial institution.\u201d Some concepts for a similar type of a decentralized electronic currency precede BTC, but Bitcoin holds the distinction of being the first-ever cryptocurrency to come into actual use."},{token:"ETH",address:"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",about:"Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum\u2019s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum\u2019s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014."},{token:"LINK",address:"0x514910771AF9Ca656af840dff83E8264EcF986CA",about:"Founded in 2017, Chainlink is a blockchain abstraction layer that enables universally connected smart contracts. Through a decentralized oracle network, Chainlink allows blockchains to securely interact with external data feeds, events and payment methods, providing the critical off-chain information needed by complex smart contracts to become the dominant form of digital agreement. The Chainlink Network is driven by a large open-source community of data providers, node operators, smart contract developers, researchers, security auditors and more. The company focuses on ensuring that decentralized participation is guaranteed for all node operators and users looking to contribute to the network."}],j=function(){var e=Object(c.useState)(40),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(60),o=Object(u.a)(i,2),j=o[0],m=o[1],O=Object(c.useState)(70),y=Object(u.a)(O,2),x=y[0],k=y[1],v=Object(c.useState)(!1),g=Object(u.a)(v,2),w=g[0],C=g[1],T=Object(c.useState)(),E=Object(u.a)(T,2),N=E[0],B=E[1],I=Object(c.useState)(),F=Object(u.a)(I,2),S=F[0],A=F[1],P=Object(b.c)(),V=Object(b.b)(),z=V.Moralis,L=V.isInitialized;function M(e,t){return D.apply(this,arguments)}function D(){return(D=Object(s.a)(Object(a.a)().mark((function e(t,n){var c,r,i,o,s,u;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=z.Object.extend("Votes"),(r=new z.Query(c)).equalTo("ticker",t),r.descending("createdAt"),e.next=6,r.first();case 6:i=e.sent,o=Number(i.attributes.up),s=Number(i.attributes.down),u=Math.round(o/(o+s)*100),n(u);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){if(L){var e=function(){var e=Object(s.a)(Object(a.a)().mark((function e(){var t;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new z.Query("Votes"),e.next=3,t.subscribe();case 3:e.sent.on("update",(function(e){"LINK"===e.attributes.ticker?M("LINK",k):"ETH"===e.attributes.ticker?M("ETH",m):"BTC"===e.attributes.ticker&&M("BTC",r)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();M("BTC",r),M("ETH",m),e()}}),[L]),Object(c.useEffect)((function(){function e(){return(e=Object(s.a)(Object(a.a)().mark((function e(){var t,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={address:p[p.findIndex((function(e){return e.token===N}))].address},e.next=3,P.token.getTokenPrice(t);case 3:n=e.sent,A(n.usdPrice.toFixed(2));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}N&&function(){e.apply(this,arguments)}()}),[N]),Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"everything",children:[Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"logo",children:[Object(f.jsx)("img",{src:l,alt:"logo",height:"50px"}),"Sentiment"]}),Object(f.jsx)(d.b,{})]}),Object(f.jsx)("div",{className:"instructions",children:"You think its goin up or down Bruh?"}),Object(f.jsxs)("div",{className:"list",children:[Object(f.jsx)(h,{perc:n,setPerc:r,token:"BTC",setModalToken:B,setVisible:C}),Object(f.jsx)(h,{perc:j,setPerc:m,token:"ETH",setModalToken:B,setVisible:C}),Object(f.jsx)(h,{perc:x,setPerc:k,token:"LINK",setModalToken:B,setVisible:C})]}),Object(f.jsxs)(d.c,{isVisible:w,onCloseButtonPressed:function(){return C(!1)},hasFooter:!1,title:N,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{style:{color:"green"},children:"Price: "}),S,"$"]}),Object(f.jsx)("div",{children:Object(f.jsx)("span",{style:{color:"grey"},children:"About:"})}),Object(f.jsx)("div",{children:N&&p[p.findIndex((function(e){return e.token===N}))].about})]})]})})},m=function(e){e&&e instanceof Function&&n.e(18).then(n.bind(null,1601)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(b.a,{appId:"WymXxZkI5PRlmmpLvI9r1XKELfcyiFVY99TlwkbK",serverUrl:"https://rkhtwtzkukds.usemoralis.com:2053/server",children:Object(f.jsx)(j,{})})}),document.getElementById("root")),m()},648:function(e,t,n){},944:function(e,t){},952:function(e,t){},954:function(e,t){},955:function(e,t){},956:function(e,t){},957:function(e,t){},958:function(e,t){},959:function(e,t){},960:function(e,t){},982:function(e,t){}},[[1336,6,7]]]);
//# sourceMappingURL=main.827083e0.chunk.js.map