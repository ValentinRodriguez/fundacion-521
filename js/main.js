$(document).ready(function () {
    
    // insert current year footer
    var currentYear= new Date().getFullYear();  
    $("#year-now").append( currentYear );
    
    // SCROLL
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 90) {
            $(".navbar").addClass("navbar-shrink");
            $(".navbar").addClass("fixed-top");
            $(".nav-link").addClass("letter-white");
            $(".navbar .nav-item i").addClass("letter-white");
        } else {
            $(".navbar").removeClass("navbar-shrink");
            $(".navbar").removeClass("fixed-top");
            $(".nav-link").removeClass("letter-white");
            $(".navbar .nav-item i").removeClass("letter-white");
        }
    })

    // $(window).resize(function(){
    //     if($(window).width()<991){
    //         $(".dip-cert .container .row").addClass("owl-carousel features-carousel");
    //     } 
    //     else {
    //         $(".dip-cert .container .row").removeClass("owl-carousel features-carousel");
    //     }
    // });

    //CAROUSEL FEATURES
    $('.features-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            800: {
                items: 2,
            },
            // breakpoint from 768 up
            // 1000 : {
            //     items : 3,
            // }
        }
    });
    var owl = $('.owl-carousel');
    $('#customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('#customNextBtn2').click(function () {
        owl.trigger('next.owl.carousel');
    })

})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

