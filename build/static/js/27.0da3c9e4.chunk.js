(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[27],{682:function(e,a,t){e.exports=t.p+"static/media/Front.e0b9e173.jpg"},706:function(e){e.exports=JSON.parse('[{"id":1,"title":"Join the Movement <br> #GSD100","image":"/assets/img/slider/slider-31.jpg"},{"id":2,"title":"Join the Movement <br> #GSD100","image":"/assets/img/slider/slider-34.jpg"},{"id":2,"title":"Join the Movement <br> #GSD100","image":"/assets/img/slider/slider-32.jpg"}]')},707:function(e,a,t){e.exports=t.p+"static/media/busiman.58f252f5.png"},710:function(e,a,t){"use strict";var n=t(183),l=t(184),s=t(185),r=t(186),i=t(0),c=t.n(i),m=(t(105),t(577)),o=t(549),d=t(743),u=t(550),g=t(627),p=(t(711),t(712),t(713),t(714),t(6)),E=t(67),b=t(715),f=t.n(b),v=t(682),h=t.n(v),N=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).state={ByCategoryList:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/admin/getproductCategory/").then((function(a){console.log(a),e.setState({ByCategoryList:a.data.data})}))}},{key:"render",value:function(){var e;null===(e=this.state.ByCategoryList)||void 0===e||e.map((function(e){var a;return c.a.createElement("div",null,c.a.createElement(m.a,{lg:"4"},c.a.createElement(p.c,{to:"/shop-list-standard/".concat(null===(a=e.data)||void 0===a?void 0:a._id)},c.a.createElement("img",{src:f.a,alt:""}))),c.a.createElement(m.a,{lg:"4"}))}));return c.a.createElement(o.a,{className:"main mb-2"},c.a.createElement(d.a,{className:"mb-5"},c.a.createElement(u.a,{className:"m-2"},c.a.createElement(m.a,{lg:"12"},c.a.createElement("h1",{style:{fontWeight:"bold"}},"Browse By Category"),c.a.createElement("span",{className:"ex-btn"},c.a.createElement(g.a,{color:"",className:"btn-expand",onClick:function(e){window.location.href="/shop-grid-two-column",console.log("ok")}},"Explore All"))))),c.a.createElement(d.a,{className:"d-flex align-items-center justify-content-center"},c.a.createElement(u.a,null,c.a.createElement(m.a,{lg:"4"},c.a.createElement(p.c,{to:"/shop-grid-men-column"},c.a.createElement("img",{src:f.a,alt:"img",height:"300vh",width:"100%"}))),c.a.createElement(m.a,{lg:"4"},c.a.createElement(p.c,{to:"/shop-grid-women-column"},c.a.createElement("img",{src:h.a,alt:"img",height:"300vh",width:"100%"}))),c.a.createElement(m.a,{lg:"4"},c.a.createElement(p.c,{to:"/shop-grid-kids-column"},c.a.createElement("img",{src:f.a,alt:"img",height:"300vh",width:"100%"}))))))}}]),t}(c.a.Component);a.a=N},711:function(e,a,t){},712:function(e,a,t){e.exports=t.p+"static/media/men.d3712790.jpg"},713:function(e,a,t){e.exports=t.p+"static/media/women.a056abed.jpg"},714:function(e,a,t){e.exports=t.p+"static/media/kid.1255d88f.jpg"},715:function(e,a,t){e.exports=t.p+"static/media/shirt-1.b103957f.png"},716:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/brand-logo/brand-logo-1.png"},{"id":"2","image":"/assets/img/brand-logo/brand-logo-2.png"},{"id":"3","image":"/assets/img/brand-logo/brand-logo-3.png"},{"id":"4","image":"/assets/img/brand-logo/brand-logo-4.png"},{"id":"5","image":"/assets/img/brand-logo/brand-logo-5.png"}]')},717:function(e,a,t){e.exports=t.p+"static/media/03 Masterohtkd.ec23b92e.jpg"},718:function(e,a,t){e.exports=t.p+"static/media/04 Masterohtkd.d9cf2bf0.jpg"},719:function(e,a,t){e.exports=t.p+"static/media/05 Masterohtkd.87e40ed5.jpg"},720:function(e,a,t){e.exports=t.p+"static/media/06 Masterohtkd.c95bcada.jpg"},721:function(e,a,t){e.exports=t.p+"static/media/07 Masterohtkd.d7a63276.jpg"},722:function(e,a,t){e.exports=t.p+"static/media/08 Masterohtkd.8311d7cb.jpg"},723:function(e,a,t){e.exports=t.p+"static/media/09 Masterohtkd.1415233b.jpg"},724:function(e,a,t){e.exports=t.p+"static/media/10 Masterohtkd.9f2dc810.jpg"},725:function(e,a,t){e.exports=t.p+"static/media/11 Masterohtkd.ff70261b.jpg"},737:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(570),r=t.n(s),i=t(706),c=t(762),m=t(6),o=(t(707),function(e){var a=e.data,t=e.sliderClass;return l.a.createElement("div",{className:"single-slider-2 slider-height-2 d-flex align-items-center bg-img ".concat(t||""),style:{backgroundImage:"url(".concat(""+a.image,")")}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-8 col-lg-8 col-md-8 col-12"},l.a.createElement("div",{className:"slider-content-brown slider-content-2 slider-content-2--white slider-animated-1 text-left"},l.a.createElement("h3",{className:"animated no-style text-left",dangerouslySetInnerHTML:{__html:a.title}}),l.a.createElement("p",{className:"animated"},l.a.createElement("span",{style:{marginRight:5}},l.a.createElement(c.a,{fontSize:25,className:"mr-2"})),"GSD100, C/O, Brizebond Technologies Private Limited (GSD100) takes your privacy very seriously."),l.a.createElement("p",{className:"animated"},l.a.createElement("span",{style:{marginRight:5}},l.a.createElement(c.a,{fontSize:25,className:"mr-2"})),"GSD100, C/O, Brizebond Technologies Private Limited (GSD100) takes your privacy very seriously."),l.a.createElement("p",{className:"animated"},l.a.createElement("span",{style:{marginRight:5}},l.a.createElement(c.a,{fontSize:25,className:"mr-2"})),"GSD100, C/O, Brizebond Technologies Private Limited (GSD100) takes your privacy very seriously."),l.a.createElement("div",{className:"slider-btn-brown btn-hover"},l.a.createElement(m.c,{className:"animated",to:""+a.url},"Get Drive")))))))});a.a=function(){var e={effect:"fade",loop:!0,speed:1e3,autoplay:{delay:5e3,disableOnInteraction:!1},watchSlidesVisibility:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},renderPrevButton:function(){return l.a.createElement("button",{className:"swiper-button-prev ht-swiper-button-nav"},l.a.createElement("i",{className:"pe-7s-angle-left"}))},renderNextButton:function(){return l.a.createElement("button",{className:"swiper-button-next ht-swiper-button-nav"},l.a.createElement("i",{className:"pe-7s-angle-right"}))}};return l.a.createElement("div",{className:"slider-area"},l.a.createElement("div",{className:"slider-active nav-style-1"},l.a.createElement(r.a,e,i&&i.map((function(e,a){return l.a.createElement(o,{data:e,key:a,sliderClass:"swiper-slide"})})))))}},738:function(e,a,t){"use strict";var n=t(0),l=t.n(n),s=t(570),r=t.n(s),i=function(e){var a=e.data,t=e.sliderClassName,n=e.spaceBottomClass;return l.a.createElement("div",{className:"single-brand-logo ".concat(t||""," ").concat(n||"")},l.a.createElement("img",{src:""+a.image,alt:""}))},c=t(716);a.a=function(e){var a=e.spaceBottomClass,t=e.spaceTopClass,n={loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},grabCursor:!0,breakpoints:{1024:{slidesPerView:5},768:{slidesPerView:4},640:{slidesPerView:3},320:{slidesPerView:2}}};return l.a.createElement("div",{className:"brand-logo-area ".concat(a||"","  ").concat(t||"")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"brand-logo-active"},l.a.createElement(r.a,n,c&&c.map((function(e,a){return l.a.createElement(i,{data:e,key:a,sliderClassName:"swiper-slide",spaceBottomClass:"mb-30"})}))))))}},748:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=(t(180),t(549)),r=t(550),i=t(577),c=t(742),m=t(6),o=t(717),d=t.n(o),u=t(718),g=t.n(u),p=t(719),E=t.n(p),b=(t(720),t(721)),f=t.n(b),v=t(722),h=t.n(v),N=t(723),y=t.n(N),C=t(724),w=t.n(C),x=t(725),k=t.n(x);a.default=function(e){e.data,e.spaceBottomClass;return l.a.createElement(s.a,{fluid:!0,className:"mb-4"},l.a.createElement("section",{className:"srevicegrid"},l.a.createElement(s.a,null,l.a.createElement("h1",null,"SETUP YOUR REMINDER"),l.a.createElement("p",{style:{color:"#ffffff"}},"What We Do "),l.a.createElement(r.a,null,l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:d.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:g.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:E.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:f.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:h.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:y.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:w.a,alt:"",width:"100%"})))),l.a.createElement(i.a,{md:"3"},l.a.createElement(m.c,null,l.a.createElement(c.a,{className:"mt-4"},l.a.createElement("img",{src:k.a,alt:"",width:"100%"}))))))))}},765:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/icon-img/usdt.png","title":" 1 USDT= 75 INR","subtitle":""},{"id":2,"image":"/assets/img/icon-img/Tron-back.png","title":"1 TRX= 6 INR","subtitle":""},{"id":3,"image":"/assets/img/icon-img/soxy.png","title":" 1 SOXY= 3 INR","subtitle":""}]')},766:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/banner/banner-43.jpg","title":"Wooden Chair (06)","url":"/shop-grid-standard"}]')},770:function(e){e.exports=JSON.parse('[{"id":1,"image":"/assets/img/blog/blog-13.jpg","category":["lifestyle","men"],"title":"A guide to latest trends","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":2,"image":"/assets/img/blog/blog-14.jpg","category":["lifestyle"],"title":"Five ways to lead a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"},{"id":3,"image":"/assets/img/blog/blog-15.jpg","category":["lifestyle"],"title":"Tips on having a happy life","url":"/blog-details-standard","author":"Admin","authorUrl":"/blog-standard"}]')},771:function(e){e.exports=JSON.parse('[{"id":"1","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-1.png","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]')},891:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(558),r=t.n(s),i=t(180),c=t(738),m=(t(765),t(766),t(182)),o=t(183),d=t(184),u=t(185),g=t(186),p=t(6),E=t(895),b=t(890),f=t(3),v=t(549),h=t(550),N=t(577),y=t(609),C=t(629),w=t(627),x=t(67),k=t(615),j=t.n(k),S=(l.a.Component,t(737)),B=t(710),O=t(748),D=function(e){var a=e.spaceBottomClass;return l.a.createElement("div",{className:"banner-area ".concat(a||"")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-4 pb-30"},l.a.createElement("div",{className:"single-banner-3"},l.a.createElement(p.c,{to:"/"},l.a.createElement("img",{src:"/assets/img/banner/banner-46.png",alt:"",className:"img-fluid"})))),l.a.createElement("div",{className:"col-lg-4 pb-30"},l.a.createElement("div",{className:"single-banner-3"},l.a.createElement(p.c,{to:"/"},l.a.createElement("img",{src:"/assets/img/banner/banner-47.jpg",alt:"",className:"img-fluid"})))),l.a.createElement("div",{className:"col-lg-4 pb-30"},l.a.createElement("div",{className:"single-banner-3"},l.a.createElement(p.c,{to:"/"},l.a.createElement("img",{src:"/assets/img/banner/banner-48.png",alt:"",className:"img-fluid"})))))))},T=t(770),M=function(e){var a=e.singlePost;return l.a.createElement("div",{className:"col-lg-4 col-sm-6"},l.a.createElement("div",{className:"blog-wrap-3 mb-30 scroll-zoom"},l.a.createElement("div",{className:"blog-img mb-30"},l.a.createElement(p.c,{to:""+a.url},l.a.createElement("img",{src:""+a.image,alt:""}))),l.a.createElement("div",{className:"blog-content-wrap"},l.a.createElement("div",{className:"blog-category-names blog-category-names--style2"},a.category.map((function(e,a){return l.a.createElement("span",{className:"red",key:a},(a?", ":"")+e)}))),l.a.createElement("div",{className:"blog-content"},l.a.createElement("h3",null,l.a.createElement(p.c,{to:""+a.url},a.title)),l.a.createElement("span",null,l.a.createElement(p.c,{to:""+a.url},"Read More"))))))},P=function(e){var a=e.titleText,t=e.subtitleText,n=e.positionClass,s=e.spaceClass,r=e.borderClass;return l.a.createElement("div",{className:"section-title-8 ".concat(n||""," ").concat(s||""," ").concat(r||"")},l.a.createElement("h2",null,a),l.a.createElement("p",null,t))},G=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass;return l.a.createElement("div",{className:"blog-area ".concat(a||""," ").concat(t||"")},l.a.createElement("div",{className:"container"},l.a.createElement(P,{titleText:"Our Blog",positionClass:"text-center",borderClass:"bottom-border",spaceClass:"mb-55"}),l.a.createElement("div",{className:"row"},T.map((function(e){return l.a.createElement(M,{singlePost:e,key:e.id})})))))},J=t(570),R=t.n(J),I=t(771),L=function(e){var a=e.data,t=e.sliderClass,n=e.testimonialClass;return l.a.createElement("div",{className:"".concat(n||"single-testimonial"," text-center ").concat(t||"")},l.a.createElement("img",{src:""+a.image,alt:""}),l.a.createElement("p",null,a.content),l.a.createElement("div",{className:"client-info"},l.a.createElement("i",{className:"fa fa-map-signs"}),l.a.createElement("h5",null,a.customerName),l.a.createElement("span",null,a.title)))},q=function(e){var a=e.spaceTopClass,t=e.spaceBottomClass,n=e.spaceLeftClass,s=e.spaceRightClass,r=e.bgColorClass,i=e.testimonialClass,c=(e.backgroundImage,{slidesPerView:1,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1}});return l.a.createElement("div",{className:"testimonial-area ".concat(a||"","  ").concat(t||""," ").concat(n||"","  ").concat(s||""," ").concat(r||"")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-12 ml-auto mr-auto"},l.a.createElement("div",{className:"testimonial-active nav-style-1 nav-testi-style"},l.a.createElement(R.a,c,I&&I.map((function(e,a){return l.a.createElement(L,{data:e,key:a,sliderClass:"swiper-slide",testimonialClass:i})}))))))))};a.default=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,"GSD"),l.a.createElement("meta",{name:"description",content:"Furniture home of flone react minimalist eCommerce template."})),l.a.createElement(i.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-1",headerPositionClass:"header-absolute"},l.a.createElement(S.a,null),l.a.createElement(D,{spaceBottomClass:"pb-70 pt-70"}),l.a.createElement(O.default,null),l.a.createElement(B.a,null),l.a.createElement(c.a,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"}),l.a.createElement(G,{spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}),l.a.createElement(q,{spaceBottomClass:"pb-95",spaceTopClass:"pt-100"})))}}}]);
//# sourceMappingURL=27.0da3c9e4.chunk.js.map