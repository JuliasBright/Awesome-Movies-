(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{34:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n(19),a=n.n(r),i=(n(34),n(7)),o=n(2),l=n(15),j=n(9);function d(){var e=Object(l.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  li {\n    padding: 18px 10px;\n  }\n  @media (max-width: 768px) {\n    flex-flow: column nowrap;\n    background-color: transparent;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    li {\n      // color: #fff;\n    }\n  }\n"]);return d=function(){return e},e}var b=j.a.ul(d(),(function(e){return e.open?"translateX(0)":"translateX(100%)"}));var h=Object(o.f)((function(e,t){return Object(c.jsx)("div",{className:"Navigation",open:t,children:Object(c.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)(i.b,{class:"navbar-brand",to:"/",children:"Awesome Movies"}),Object(c.jsx)("div",{children:Object(c.jsxs)(b,{class:"navbar-nav ml-auto  ",children:[Object(c.jsx)("li",{class:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(c.jsxs)(i.b,{class:"nav-link",to:"/",children:["Home",Object(c.jsx)("span",{class:"sr-only",children:"(current)"})]})}),Object(c.jsx)("li",{class:"nav-item  ".concat("/about"===e.location.pathname?"active":""),children:Object(c.jsx)(i.b,{class:"nav-link",to:"/about",children:"Latest"})}),Object(c.jsx)("li",{class:"nav-item  ".concat("/contact"===e.location.pathname?"active":""),children:Object(c.jsx)(i.b,{class:"nav-link",to:"/contact",children:"About"})})]})})]})})})}));var u=function(){return Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("footer",{class:"py-5 bg-dark fixed-bottom",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsx)("p",{class:"m-0 text-center text-white",children:"Copyright \xa9  2021 Made by Julius Bright"})})})})};n(41);var x=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("div",{className:"homestuff",children:"Welcome to Awesome Movies"}),Object(c.jsx)("a",{href:"./Latest",children:Object(c.jsx)("button",{className:"btn",children:"Click to browse"})})]}),Object(c.jsx)("div",{class:"slide-2",children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"https://cdn.dribbble.com/users/1726478/screenshots/3781908/car-dealer-loader-gif.gif"})})})]})},m=n(28),f=n(22),v=n.n(f),O=n(27),p=n(14),g=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},w=function(e){var t=e.favouriteComponent;return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(n,s){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:n.Poster,alt:"movie"}),Object(c.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:"overlay d-flex align-items-center justify-content-center",children:Object(c.jsx)(t,{})})]})}))})},N=function(){var e=Object(s.useState)([]),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)([]),i=Object(p.a)(a,2),o=i[0],l=i[1],j=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://www.omdbapi.com/?s=fast&furios&apikey=263d22d8",e.next=3,fetch("http://www.omdbapi.com/?s=fast&furios&apikey=263d22d8");case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent).Search&&r(n.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){j()}),[]),Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsxs)("h6",{children:["Latest Movies",Object(c.jsx)("i",{className:"fa fas-movie"})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(w,{movies:n,favouriteComponent:g,handleFavouritesClick:function(e){var t=[].concat(Object(m.a)(o),[e]);l(t)}})}),Object(c.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(c.jsxs)("h6",{children:["Favorates ",Object(c.jsx)("i",{className:"fa fas-movie"})]})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(w,{movies:o,favouriteComponent:g})})]})};var k=function(){return Object(c.jsx)("div",{className:"contact",children:Object(c.jsx)("div",{class:"container",children:Object(c.jsxs)("div",{class:"row align-items-center my-5",children:[Object(c.jsx)("div",{class:"col-lg-5",children:Object(c.jsx)("img",{class:"img-fluid rounded mb-4 mb-lg-0",src:"https://cdn.dribbble.com/users/512844/screenshots/5288672/racing_star.gif",alt:""})}),Object(c.jsxs)("div",{class:"col-lg-5",children:[Object(c.jsx)("h1",{class:"font-weight-light",children:"Contact"}),Object(c.jsxs)("p",{children:["Developer Information:",Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Name: Julius Bright"}),Object(c.jsx)("li",{children:"Contact: 0847576329"})]})]}),Object(c.jsx)("a",{href:"https://juliusbright.com",children:Object(c.jsx)("button",{className:"btn",children:"View Profile"})})]})]})})})};function y(){var e=Object(l.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 768px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return y=function(){return e},e}var C=j.a.div(y(),(function(e){return e.open?"#fff":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),F=function(){var e=Object(s.useState)(!1),t=Object(p.a)(e,2),n=t[0],r=t[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(C,{open:n,onClick:function(){return r(!n)},children:[Object(c.jsx)("div",{}),Object(c.jsx)("div",{}),Object(c.jsx)("div",{})]}),Object(c.jsx)("nav",{open:n})]})};var A=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(h,{}),Object(c.jsx)(F,{}),Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:function(){return Object(c.jsx)(x,{})}}),Object(c.jsx)(o.a,{path:"/about",exact:!0,component:function(){return Object(c.jsx)(N,{})}}),Object(c.jsx)(o.a,{path:"/contact",exact:!0,component:function(){return Object(c.jsx)(k,{})}})]}),Object(c.jsx)(u,{})]})})};a.a.render(Object(c.jsx)(A,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.40c5bc2f.chunk.js.map