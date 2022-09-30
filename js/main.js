

  $(function () {

    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });

    $('.slider').slick({
      autoplay: true,         //自動再生
      autoplaySpeed: 2000,　  //自動再生のスピード
      speed: 800,     　 //スライドするスピード
      dots: true,　　　　　　//スライドしたのドット
      arrows: false,          //左右の矢印
      infinite: true,　　　　//スライドのループ
      pauseOnHover: false,   //ホバーしたときにスライドを一時停止しない　
      centerMode:true,
	    centerPadding:"20%",
  });
    

  
  });