(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),c=n(7),s=n.n(c),a=n(8),i=n(6),u=n(15),h=n(16),b=(n(27),n(28),n(2)),d=n(3),l=n(5),j=n(4),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={count:0},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return Object(r.jsx)("h1",{className:"f2",children:"Robot Friends"})}}]),n}(o.Component),p=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){var t=e.id,n=e.name,o=e.email;return Object(r.jsxs)("div",{className:"bg-light-green dib tc br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:o})]})]})},g=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(f,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},v=function(e){return Object(r.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(d.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Ooops, that is not good"}):this.props.children}}]),n}(o.Component),x=(n(29),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",C="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED",E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,c=e.isPending,s=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return c?Object(r.jsx)("h1",{children:"Loading..."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)(O,{}),Object(r.jsx)(p,{searchChange:n}),Object(r.jsx)(v,{children:Object(r.jsx)(m,{children:Object(r.jsx)(g,{robots:s})})})]})}}]),n}(o.Component),S=Object(a.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:x,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:C,payload:t})})).catch((function(t){return e({type:R,payload:t})}))}))}}}))(E),F={searchField:""},w={isPending:!1,robots:[],error:""},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},k=Object(u.createLogger)(),L=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case x:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case C:return Object.assign({},e,{isPending:!1,robots:t.payload});case R:return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),N=Object(i.d)(L,Object(i.a)(h.a,k));s.a.render(Object(r.jsx)(a.a,{store:N,children:Object(r.jsx)(S,{})}),document.getElementById("root")),P()}},[[30,1,2]]]);
//# sourceMappingURL=main.150bd2b6.chunk.js.map