(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){t.exports=n.p+"static/media/trump.bb7b2b94.jpeg"},19:function(t,e,n){t.exports=n(46)},25:function(t,e,n){},43:function(t,e,n){},44:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),i=n(2),u=n(3),s=n(5),h=n(4),l=n(6),p=(n(25),n(17)),m=n.n(p),d=n(18),b=n.n(d),f=(n(43),function(t){function e(t){return Object(i.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,t))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("h1",null,this.props.title))}}]),e}(o.a.Component)),g=(n(44),function(t){function e(){return Object(i.a)(this,e),Object(s.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(l.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"trumpThought"},o.a.createElement("img",{src:this.props.trumpPic,alt:"Donald Trump"}),o.a.createElement("p",null,this.props.thought))}}]),e}(o.a.Component)),j=(n(45),o.a.Component,"https://api.whatdoestrumpthink.com/api/v1/quotes/random"),O=function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).loadThought=function(){b.a.get(j).then(function(t){console.log(t),n.setState({thought:t.data.message})}).catch(function(t){console.log(t),n.setState({thought:"(\u25c9\u03c9\u25c9)   Error accessing to brain of Trump   (\u25c9\u03c9\u25c9)"})})},n.state={thought:"Loading..."},n}return Object(l.a)(e,t),Object(u.a)(e,[{key:"componentWillMount",value:function(){this.loadThought()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,{title:"What does trump think?"}),o.a.createElement(g,{thought:this.state.thought,trumpPic:m.a}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b96c8cdf.chunk.js.map