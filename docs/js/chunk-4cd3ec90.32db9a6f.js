(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cd3ec90"],{"13cc":function(t,i,e){"use strict";var a=e("84ba"),s=e.n(a);s.a},1500:function(t,i,e){},"3cc9":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"slide-enter-active",attrs:{id:"detailContrainer"}},[e("Header",{attrs:{title:"影片详情"}},[e("i",{staticClass:"iconfont icon-right",on:{touchstart:t.handleToBack}})]),t.isLoading?e("loading"):e("div",{staticClass:"contentDetail",attrs:{id:"content"}},[e("div",{staticClass:"detail_list"},[e("div",{staticClass:"detail_list_bg",style:{background:"url("+t.detailMovie.img.replace(/w\.h/,"148.208")+")"}}),e("div",{staticClass:"detail_list_filter"}),e("div",{staticClass:"detail_list_content"},[e("div",{staticClass:"detail_list_img"},[e("img",{attrs:{src:t._f("setWH")(t.detailMovie.img,"148.208"),alt:""}})]),e("div",{staticClass:"detail_list_info"},[e("h2",[t._v(t._s(t.detailMovie.nm))]),e("p",[t._v(t._s(t.detailMovie.enm))]),e("p",[t._v(t._s(t.detailMovie.sc))]),e("p",[t._v(t._s(t.detailMovie.cat))]),e("p",[t._v(t._s(t.detailMovie.src)+" / "+t._s(t.detailMovie.dur)+"分钟")]),e("p",[t._v(t._s(t.detailMovie.pubDesc))])])])]),e("div",{staticClass:"detail_intro"},[e("p",[t._v(t._s(t.detailMovie.dra))])]),e("div",{ref:"detail_player",staticClass:"detail_player swiper-container"},[e("ul",{staticClass:"swiper-wrapper"},t._l(t.detailMovie.photos,function(i,a){return e("li",{key:a,staticClass:"swiper-slide"},[e("div",[e("img",{attrs:{src:t._f("setWH")(i,"140.127"),alt:""}})])])}),0)])])],1)},s=[],l=e("981c"),n={name:"Detail",data:function(){return{detailMovie:{},isLoading:!0}},props:["movieId"],components:{Header:l["a"]},methods:{handleToBack:function(){this.$router.back()}},mounted:function(){var t=this;this.axios.get("/api/detailmovie?movieId="+this.movieId).then(function(i){var e=i.data.msg;"ok"==e&&(t.isLoading=!1,t.detailMovie=i.data.data.detailMovie,t.$nextTick(function(){new Swiper(t.$refs.detail_player,{slidesPerView:"auto",freeMode:!0,freeModeSticky:!0})}))})}},c=n,d=(e("13cc"),e("17cc")),o=Object(d["a"])(c,a,s,!1,null,"9bd20672",null);i["default"]=o.exports},6072:function(t,i,e){"use strict";var a=e("1500"),s=e.n(a);s.a},"84ba":function(t,i,e){},"981c":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("header",{attrs:{id:"header"}},[t._t("default"),e("h1",[t._v(t._s(t.title))])],2)])},s=[],l={name:"Header",props:{title:{type:String,default:"喵喵电影"}}},n=l,c=(e("6072"),e("17cc")),d=Object(c["a"])(n,a,s,!1,null,"30a4c135",null);i["a"]=d.exports}}]);
//# sourceMappingURL=chunk-4cd3ec90.32db9a6f.js.map