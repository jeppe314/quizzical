(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(27)},19:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),s=n.n(r),l=(n(19),n(1)),o=n(8),u=n(2),i=(n(21),n(4));function d(e){var t=e.shuffledAnswers.map(function(t){var n=e.gameState,a={backgroundColor:1===n&&t===e.selectedAnswer?"#8b9ed4":2===n&&t===e.correctAnswer?"#4EB26C":2===n&&t!==e.correctAnswer?"#d15259":"white",opacity:1===n||2===n&&t===e.selectedAnswer&&e.correctAnswer===t?"1":"0.5",border:t===e.selectedAnswer?"3px solid black":""};return c.a.createElement("button",{key:Object(i.a)(),quenum:e.num,id:e.id,style:a,className:"answer",onClick:function(){return e.holdAnswer(e.id,t)}},t)});return c.a.createElement("div",{className:"question-div"},c.a.createElement("p",{className:"question"},e.question),c.a.createElement("div",{className:"answers-div"},t))}var m=n(5),f=n(6);n(25);var b=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)({amount:6,difficulty:"hard",type:"",categories:""}),b=Object(u.a)(s,2),w=b[0],v=b[1],p=Object(a.useState)([]),E=Object(u.a)(p,2),h=E[0],A=E[1],y=Object(a.useState)(0),j=Object(u.a)(y,2),N=j[0],O=j[1],q=0,g=function(){fetch("https://opentdb.com/api.php?amount=".concat(w.amount,"&difficulty=").concat(w.difficulty,"&").concat(w.type)).then(function(e){return e.json()}).then(function(e){return A(e.results.map(function(e){return{id:Object(i.a)(),question:Object(m.decode)(e.question),correctAnswer:Object(m.decode)(e.correct_answer),shuffledAnswers:(t=Object(m.decode)(e.correct_answer),n=e.incorrect_answers,[t].concat(Object(o.a)(n)).map(function(e){return{value:e,sort:Math.random()}}).sort(function(e,t){return e.sort-t.sort}).map(function(e){return e.value})),selectedAnswer:""};var t,n}))}),setTimeout(function(){return r(1)},600)};var k=function(e,t){if(2!==n){var a=h.map(function(n){return n.id===e&&""===n.selectedAnswer?Object(l.a)({},n,{selectedAnswer:t}):n.id===e&&n.selectedAnswer===t?Object(l.a)({},n,{selectedAnswer:""}):n.id===e&&t!==n.selectedAnswer?Object(l.a)({},n,{selectedAnswer:t}):Object(l.a)({},n)});A(a)}},S=c.a.createElement("h3",{className:"result-el"},N," correct answers!"),C=1===n?c.a.createElement("button",{className:"submitBtn",onClick:function(){return function(){var e=0;h.forEach(function(t){return t.correctAnswer===t.selectedAnswer?e++:e}),O(e),r(2),window.scrollTo(0,document.body.scrollHeight)}()}},"Submit quiz"):c.a.createElement("button",{className:"submitBtn newGame",onClick:function(){return g()}},"Play again"),B=c.a.createElement("div",{className:"start-container"},c.a.createElement("h1",{className:"start-title"},"VEM VET MEST"),c.a.createElement("div",{className:"settings-el"},c.a.createElement(f.a,{className:"dropdown",placeholder:"Select an option",options:[{value:"",label:"All question types"},{value:"type=multiple",label:"Multiple choice"},{value:"type=boolean",label:"True or False"}],value:"",onChange:function(e){return function(e){v(function(t){return Object(l.a)({},t,{type:e.value})})}(e)}}),c.a.createElement(f.a,{className:"dropdown",placeholder:"Difficulty",options:[{value:"easy",label:"Easy difficulty"},{value:"medium",label:"Medium difficulty"},{value:"hard",label:"Hard difficulty"}],value:"easy",onChange:function(e){return function(e){v(function(t){return Object(l.a)({},t,{difficulty:e.value})})}(e)}}),c.a.createElement(f.a,{className:"dropdown",placeholder:"Number of questions",options:[{value:"2",label:"2 questions"},{value:"4",label:"4 questions"},{value:"6",label:"6 questions"},{value:"8",label:"8 questions"},{value:"10",label:"10 questions"}],value:"6",onChange:function(e){return function(e){v(function(t){return Object(l.a)({},t,{amount:e.value})})}(e)}}),c.a.createElement("button",{className:"startBtn",onClick:function(){return g()}},"Start game"))),M=h.map(function(e){return c.a.createElement(d,{key:e.id,id:e.id,gameState:n,num:q+=1,question:e.question,correctAnswer:e.correctAnswer,shuffledAnswers:e.shuffledAnswers,selectedAnswer:e.selectedAnswer,holdAnswer:k})}),T=c.a.createElement("div",{className:"quiz-container"},c.a.createElement("h2",null,"QUIZ"),M,2===n&&S,c.a.createElement("div",{className:"after-div"},C,2===n&&c.a.createElement("button",{className:"submitBtn home",onClick:function(){r(0)}},"Home")));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"blob-left"}),c.a.createElement("div",{className:"blob-right"}),0===n&&B,n>=1&&T)};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)))}},[[10,2,1]]]);
//# sourceMappingURL=main.e64c8732.chunk.js.map