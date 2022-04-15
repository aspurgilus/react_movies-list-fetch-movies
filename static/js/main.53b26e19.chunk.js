(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var s=c(6),i=c.n(s),n=(c(13),c(8)),a=c(2),l=c(1),r=(c(14),c(15),c(16),c(0)),j=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.Title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.Plot,Object(r.jsx)("br",{})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(j,{movie:e},e.imdbID)}))})},d=(c(18),c(7)),m=c.n(d);var b=function(e){var t=e.onAdd,c=Object(l.useState)(""),s=Object(a.a)(c,2),i=s[0],n=s[1],o=Object(l.useState)(null),d=Object(a.a)(o,2),b=d[0],u=d[1],h=Object(l.useState)(!1),O=Object(a.a)(h,2),v=O[0],x=O[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),null!==b&&(t(b),n(""),u(null))},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{type:"text",id:"movie-title",placeholder:"Enter a title to search",className:m()("input",{"is-danger":v}),value:i,onChange:function(e){n(e.target.value),x(!1)}})}),v&&Object(r.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"button",className:"button is-light",onClick:function(){var e;(e=i,fetch("".concat("https://omdbapi.com/?apikey=c309e626&t=").concat(e)).then((function(e){return e.json()}))).then((function(e){"True"===e.Response?u(e):x(!0)}))},children:"Find a movie"})}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit",className:"button is-primary",disabled:null===b,children:"Add to the list"})})]})]}),b&&!v&&Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(j,{movie:b})]})]})},u=function(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(b,{onAdd:function(e){c.some((function(t){return t.imdbID===e.imdbID}))||s([].concat(Object(n.a)(c),[e]))}})})]})};i.a.render(Object(r.jsx)(u,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.53b26e19.chunk.js.map