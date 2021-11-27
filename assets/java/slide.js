$(document).ready(function(){
    $('.slide-24h').slick({
    slidesToShow: 6,
    slidesToScroll:6,
    infinite: true,
    dots:false,
    centerMode: false,
    responsive: [
        {
          breakpoint: 998,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        
       
      ]
    });
  });

  $(document).ready(function(){
    $('.next-7-day').slick({
    slidesToShow: 6,
    slidesToScroll:6,
    infinite: true,
    dots:false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 998,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
    });
  });
  $(document).ready(function(){
    $('.chart-slide').slick({
    slidesToShow: 2,
    slidesToScroll:2,
    infinite: true,
    dots:false,
    centerMode: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
    });
  });

  