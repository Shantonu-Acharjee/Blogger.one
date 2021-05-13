$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse'); 
    }); 


    /*-----------------------
    Owl-crousel for Blog Start
    --------------------------*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        dots:false,
        nav:true,
        navText:[$('.owl-nav-prev'),$('.owl-nav-next')],
    });















    /*-----------------------
    Owl-crousel for Blog End
    --------------------------*/

















});
