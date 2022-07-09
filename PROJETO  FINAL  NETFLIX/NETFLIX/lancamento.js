  var owl = $('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    autoHeight:true,
    margin:4,
    video:true,
    lazyLoad:true,
  
  
    responsive:{
        1000:{
            items:1
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
