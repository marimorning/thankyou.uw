
$(function() {
 $('.page-title').hide().fadeIn(3000);
});



$(function() {
 $('.logo2').fadeIn(3000);
   });

$(function() {
 $('#title').fadeIn(3000);
});

 
   
   $(window).on('load scroll', function (){

    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if(scrollPos > boxOffset - wh + 100 ){
        $(this).addClass(animated);
      }
    });
  
  });

  jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 500) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });

  $(function() {
    $('.page-title2').hide().fadeIn(3000);
   });

   $(function() {
    $('.button').hide().fadeIn(3000);
   });

   $(function() {
    $('.name').hide().fadeIn(3000);
   });