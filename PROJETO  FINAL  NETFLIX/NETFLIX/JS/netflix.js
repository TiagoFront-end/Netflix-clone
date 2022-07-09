
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
   autoplay:true,
   autoplayTimeout: 10000,
   center: true,
  merge: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
