$(document).ready(function(){

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // slick for
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });

    // Center slider
    $('.center').slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});

    $(document).ready(function(){
      var owl = $('.owl-carousel');
      owl.owlCarousel({
          loop:true,
          nav:true,
          margin:10,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },            
              960:{
                  items:5
              },
              1200:{
                  items:6
              }
          }
      });

      owl.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              owl.trigger('next.owl');
          } else {
              owl.trigger('prev.owl');
          }
          e.preventDefault();
      });


      
      $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });


    var spiral = function (t)
    {
        var s = t + 1.0;

        return {
            x: 300.0 + 50.0 * s * Math.cos(2.0 * Math.PI * s - 0.5 * Math.PI),
            y: 300.0 + 50.0 * s * Math.sin(2.0 * Math.PI * s - 0.5 * Math.PI)
        };
    };

    $('#text4').curvedText({
        curve:    spiral,
        domain:   [0.0, 3.0],
        viewport: { x: 0.0, y: 0.0, width: 600.0, height: 600.0 }
    });

    $(document).ready(function() {
      var t2 = new Circlebar({
        element: ".circle-2",
        maxValue: 152,
        dialWidth: 10,
        fontColor: "#777",
        fontSize: "30px",
        skin: "fire",
        type: "progress"
      });

      var t3 = new Circlebar({
        element: ".circle-3",
        maxValue: 152,
        dialWidth: 10,
        fontColor: "#777",
        fontSize: "30px",
        skin: "fire",
        type: "progress"
      });

      var t4 = new Circlebar({
        element: ".circle-4",
        maxValue: 152,
        dialWidth: 10,
        fontColor: "#777",
        fontSize: "30px",
        skin: "fire",
        type: "progress"
      });
   });

  




});


wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



  wow2 = new WOW(
    {
    boxClass:     'wow2',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow2.init();

  
