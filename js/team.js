/**********team section**********/ 
// slick slider


    $('.teamDetails').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.teamPic'
      });
      $('.teamPic').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.teamDetails',
        dots: false,
        centerMode: true,
      //   centerPadding: '148.6px',
        focusOnSelect: true
      });









