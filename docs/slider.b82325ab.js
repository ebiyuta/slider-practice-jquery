parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kiAr":[function(require,module,exports) {
!function(s){s.fn.slider=function(t){var i,e=this,a=t.interval?t.interval:3e3,l=t.arrows,d=t.autoplay,c=t.dots;if(null==t.arrows&&(l=!0),null==t.autoplay&&(d=!0),null==t.dots&&(c=!0),c){e.after('<ul class="js_slideDots"></ul>');for(var n=0;n<e.children().length;n++)s(".js_slideDots").append('<li class="js_slideDots_item"><button data="'.concat(n,'"></button></li>'));s(".js_slideDots").children().first().addClass("is_activeDots"),s(".js_slideDots_item button").on("click",function(){!function(t){var i=s(".is_active");s(".js_slideDots").children().removeClass("is_activeDots"),s(".js_slideDots").children(":eq(".concat(t,")")).addClass("is_activeDots"),i.removeClass("is_active").fadeOut(),e.children(":eq(".concat(t,")")).addClass("is_active").fadeIn(),d&&(r(),o())}(s(this).attr("data"))})}function o(){i=setInterval(function(){v()},a)}function r(){clearInterval(i)}function v(){var t=s(".is_active"),i=s(".is_activeDots");e.children().index(s(".is_active"))==e.children().length-1?(t.removeClass("is_active").fadeOut(),e.children().first().addClass("is_active").fadeIn(),c&&(i.removeClass("is_activeDots"),s(".js_slideDots").children().first().addClass("is_activeDots"))):(t.removeClass("is_active").fadeOut(),t.next().addClass("is_active").fadeIn(),c&&(i.removeClass("is_activeDots"),i.next().addClass("is_activeDots"))),d&&(r(),o())}l&&(e.wrap('<div class="js_slideWrapper"></div>'),e.after('<button class="js_slideButton next"></button>'),e.before('<button class="js_slideButton prev"></button>')),d&&o(),e.children().first().addClass("is_active").css("display","list-item"),e.addClass("js_slider"),s(".next").on("click",function(){v()}),s(".prev").on("click",function(){var t,i;t=s(".is_active"),i=s(".is_activeDots"),0==e.children().index(s(".is_active"))?(t.removeClass("is_active").fadeOut(),e.children().last().addClass("is_active").fadeIn(),c&&(i.removeClass("is_activeDots"),s(".js_slideDots").children().last().addClass("is_activeDots"))):(t.removeClass("is_active").fadeOut(),t.prev().addClass("is_active").fadeIn(),c&&(i.removeClass("is_activeDots"),i.prev().addClass("is_activeDots"))),d&&(r(),o())})}}(jQuery);
},{}]},{},["kiAr"], null)
//# sourceMappingURL=/slider.b82325ab.js.map