(function( $ ) {
  $.fn.slider = function(obj) {
      const that = this,
            interval = obj.interval ? obj.interval : 3000;
          
      //MEMO : 初期値をtrueに（もっと良いやり方ありそう）
      let   arrows = obj.arrows,
            autoplay = obj.autoplay,
            dots = obj.dots;
            if (obj.arrows == undefined){
              arrows = true
            }
            if (obj.autoplay == undefined){
              autoplay = true
            }
            if (obj.dots == undefined){
              dots = true
            }

      //MEMO : dotsがtrueであればDOMを生成し関数も用意
      if (dots) {
        that.after(`<ul class="js_slideDots"></ul>`);
        for (let i=0; i<that.children().length; i++) {
          $(".js_slideDots").append(`<li class="js_slideDots_item"><button data="${i}"></button></li>`);
        }
        $(".js_slideDots").children().first().addClass('is_activeDots')
    
        function slideOperationDots (index) {
          const $displaySlide = $('.is_active');
          $(".js_slideDots").children().removeClass('is_activeDots')
          $(".js_slideDots").children(`:eq(${index})`).addClass('is_activeDots')
          $displaySlide.removeClass('is_active').fadeOut();
          that.children(`:eq(${index})`).addClass('is_active').fadeIn();
          if (autoplay) {
            stopAutoPlay();
            startAutoPlay();
          }
        }
    
        $('.js_slideDots_item button').on('click', function() {
          const index = $(this).attr("data")
          slideOperationDots(index)
        });
      }
    
      //MEMO : arrowsがtrueであればDOMを生成
      if (arrows){
        that.wrap('<div class="js_slideWrapper"></div>')
        that.after('<button class="js_slideButton next"></button>');
        that.before('<button class="js_slideButton prev"></button>');
      }
    
      //MEMO : autoplayがtrueであれば関数を実行
      let setAutoPlay;

      function startAutoPlay(){
        setAutoPlay = setInterval(function(){
          slideNext();
        } , interval);
      }

      function stopAutoPlay(){
        clearInterval(setAutoPlay);
      }

      if (autoplay) {
        startAutoPlay();
      }
    
      //MEMO : まずは一番目のスライドを表示する
      that.children().first().addClass('is_active').css("display", "list-item");
      that.addClass('js_slider')
    
      //MEMO : 次へのarrowを押した時と自動再生の処理
      function slideNext () {
        const $displaySlide = $('.is_active');
        const $displayDots = $('.is_activeDots');
        let slideIndex = that.children().index($('.is_active'));
        if(slideIndex == that.children().length - 1){
          $displaySlide.removeClass('is_active').fadeOut();
          that.children().first().addClass('is_active').fadeIn();
    
          //MEMO : Dotsの操作
          if (dots) {
            $displayDots.removeClass('is_activeDots');
            $(".js_slideDots").children().first().addClass('is_activeDots');
          }
        } else {
          $displaySlide.removeClass('is_active').fadeOut();
          $displaySlide.next().addClass('is_active').fadeIn();
    
          //MEMO : Dotsの操作
          if (dots) {
            $displayDots.removeClass('is_activeDots');
            $displayDots.next().addClass('is_activeDots');
          }
        }
        if (autoplay) {
          stopAutoPlay();
          startAutoPlay();
        }
      }
    
      //MEMO : 前へのarrowを押した時の処理
      function slidePrev () {
        const $displaySlide = $('.is_active');
        const $displayDots = $('.is_activeDots');
        let slideIndex = that.children().index($('.is_active'));
        if(slideIndex == 0){
          $displaySlide.removeClass('is_active').fadeOut();
          that.children().last().addClass('is_active').fadeIn();
    
          //MEMO : Dotsの操作
          if (dots) {
            $displayDots.removeClass('is_activeDots');
            $(".js_slideDots").children().last().addClass('is_activeDots');
          }
        } else {
         $displaySlide.removeClass('is_active').fadeOut();
         $displaySlide.prev().addClass('is_active').fadeIn();
    
         //MEMO : Dotsの操作
         if (dots) {
          $displayDots.removeClass('is_activeDots');
          $displayDots.prev().addClass('is_activeDots');
         }
        }
        if (autoplay) {
          stopAutoPlay();
          startAutoPlay();
        }
      }
    
      $('.next').on('click', function() {
        slideNext();
      });
      $('.prev').on('click', function() {
        slidePrev();
      });

  };
})( jQuery );