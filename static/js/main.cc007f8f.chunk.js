(this.webpackJsonpgoolebooks=this.webpackJsonpgoolebooks||[]).push([[0],{31:function(e,t,c){},51:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(5),s=c.n(o),i=(c(31),c(8)),l=c(21),r=c.n(l),d=c(85),u=(c(50),c(51),c(22)),j=c.n(u),m=(c(52),c(23)),b=c.n(m),h=(c(24),c(1));var f=function(){Object(n.useEffect)((function(){j.a.init()}),[]);var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),l=s[0],u=s[1],m=Object(n.useState)(!1),f=Object(i.a)(m,2);f[0],f[1];var g=c.map((function(e,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-md-4 mb-5 m-auto ","data-aos":"zoom-in-down","data-aos-delay":"300",children:Object(h.jsxs)("div",{className:"card rounded shadow d-block m-auto",children:[Object(h.jsx)("img",{className:"card-img-top",src:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail,alt:"error while loading image"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title text-center",children:e.volumeInfo.title}),Object(h.jsxs)("div",{className:"info",children:[Object(h.jsx)("p",{className:"card-subtitle",children:e.volumeInfo.subtitle}),Object(h.jsxs)("p",{className:"title",children:["Author: ",e.volumeInfo.authors]}),Object(h.jsxs)("p",{children:["Published on: ",e.volumeInfo.publishedDate]}),Object(h.jsxs)("p",{children:["Rating: ",""+e.volumeInfo.averageRating," || Categories: ",""+e.volumeInfo.categories]}),Object(h.jsxs)("p",{children:[""+e.volumeInfo.pageCount,"-Pages || Price: ",e.saleInfo.retailPrice&&e.saleInfo.retailPrice.amount," \u20b9"]})]})]})]})})})}));return Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("h1",{className:"text-center",children:"Search Your Books Here \ud83d\udcd6"}),Object(h.jsx)("div",{className:"col-md-4 input",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("input",{type:"text",placeholder:"Book name",className:"col-md-4 form-control",value:l,onChange:function(e){u(e.target.value)},required:!0}),Object(h.jsx)(d.a,{variant:"contained",className:"btn",color:"success",onClick:function(e){e.preventDefault(),""!=l?r.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(l)).then((function(e){a(e.data.items)})).catch((function(e){console.log(e)})):b.a.fire({icon:"error",title:"Please enter book name",text:"Error while searching!"})},children:"GET DATA"})]})}),Object(h.jsx)("div",{className:"row",children:g})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),g()}},[[68,1,2]]]);
//# sourceMappingURL=main.cc007f8f.chunk.js.map