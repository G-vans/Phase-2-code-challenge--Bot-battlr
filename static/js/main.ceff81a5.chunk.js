(this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]=this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),s=c(6),a=c.n(s),l=c(7),r=c(5),o={Assault:"icon military",Defender:"icon shield",Support:"icon plus circle",Medic:"icon ambulance",Witch:"icon magic",Captain:"icon star"};var d=function(e){var t=e.bot,c=e.handleClick,i=e.handleDelete;return Object(n.jsxs)("div",{className:"ui column",children:[Object(n.jsxs)("div",{className:"ui card",onClick:function(){return c(t)},children:[Object(n.jsx)("div",{className:"image",children:Object(n.jsx)("img",{alt:"oh no!",src:t.avatar_url})}),Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("div",{className:"header",children:[t.name,Object(n.jsx)("i",{className:o[t.bot_class]})]}),Object(n.jsx)("div",{className:"meta text-wrap",children:Object(n.jsx)("small",{children:t.catchphrase.substring(0,32)})})]}),Object(n.jsxs)("div",{className:"extra content",children:[Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon heartbeat"}),t.health]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon lightning"}),t.damage]}),Object(n.jsxs)("span",{children:[Object(n.jsx)("i",{className:"icon shield"}),t.armor]}),Object(n.jsx)("span",{children:Object(n.jsx)("div",{className:"ui center aligned segment basic",children:Object(n.jsx)("button",{title:"Delete this bot",className:"ui mini red button",onClick:function(e){e.stopPropagation(),i(t)},children:"x"})})})]})]},t.id),Object(n.jsx)("br",{})]})};var j=function(e){var t=e.bots,c=e.handleClick,i=e.handeleDelete,s=t.map((function(e){return Object(n.jsx)(d,{bot:e,handleClick:c,handleDelete:i},e.id)}));return Object(n.jsx)("div",{className:"ui segment inverted olive bot-army",children:Object(n.jsxs)("div",{className:"ui five column grid",children:[Object(n.jsx)("h4",{children:"Your Army Bots will appear here."}),Object(n.jsx)("div",{className:"row bot-army-row",children:s})]})})};var h=function(e){var t=e.bots,c=e.handleClick,i=e.handleDelete,s=t.map((function(e){return Object(n.jsx)(d,{bot:e,handleClick:c,handleDelete:i},e.id)}));return Object(n.jsxs)("div",{className:"ui four column grid",children:[Object(n.jsx)("h3",{className:"heading",children:"Bots Collection List"}),Object(n.jsx)("div",{className:"row",children:s})]})};var b=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)([]),o=Object(r.a)(a,2),d=o[0],b=o[1];function u(e){fetch("http://localhost:8002/bots/".concat(e.id),{method:"DELETE"}).then((function(){s((function(t){return t.filter((function(t){return t.id!==e.id}))})),b((function(t){return t.filter((function(t){return t.id!==e.id}))}))}))}return Object(i.useEffect)((function(){fetch("http://localhost:8002/bots").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),console.log(c),Object(n.jsxs)("div",{children:[Object(n.jsx)(j,{bots:d,handleClick:function(e){alert("Bot :".concat(e.bot_class," will be removed from the army")),b((function(t){return t.filter((function(t){return t.id!==e.id}))}))},handleDelete:u}),Object(n.jsx)(h,{bots:c,handleClick:function(e){d.includes(e)||(console.log("You have been added to the army"),b((function(t){return[].concat(Object(l.a)(t),[e])})),alert("Bot :".concat(e.bot_class," has been added to the army")))},handleDelete:u})]})};var u=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b,{})})};c(13);a.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ceff81a5.chunk.js.map