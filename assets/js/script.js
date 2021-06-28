
/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        //$('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
    });

});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > 767) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            /*bgImage = $('.introduction').find('img'),*/
            menuBgImages = $('.menu > div img');

        if (introWidth > introHeight) {

            /*bgImage.css({
                width: '100%',
                height: 'auto'
            });*/
            menuBgImages.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            /*bgImage.css({
                width: '100%',
                height: 'auto'
            });*/
            menuBgImages.css({
                width: '100%',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    function removeHash () {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }

    function hideBoots4Menu()
    {
        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                display: 'none'
            });
        });
    }


    // Hide Menu
    $('.menu').on('click', '.menu_button' , function () {
        hideBoots4Menu();
    }, { passive: true });


    // Show Reletive Page Onclick

    $('.menu').on('click', 'div.menu_button' , function(){
        var selectedPage = $(this).data('url_target');
        window.location.hash = selectedPage;
        $('#'+selectedPage).fadeIn(1200);
        $(window).scrollTop(0);
    }, { passive: true });


    $('.menu').on('click', 'div.profile-btn', function () {
        setTimeout(function(){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 100);
    });

    $('.menu').on('click', 'div.portfolio-btn', function () {
        setTimeout(function(){
            $('#projects').mixItUp();
        }, 100);
    });

    $('.menu').on('click', 'div.gallery-btn', function () {
        setTimeout(function(){
            $('.pop-up-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                gallery:{
                    enabled:true
                }
            });
        }, 100);
    });


    /*===============================================================
                Working Contact Form
    ================================================================*/

    $("#contactForm").submit(function (e) {

        e.preventDefault();
        var $ = jQuery;

        var postData = $(this).serializeArray(),
            formURL = $(this).attr("action"),
            $cfResponse = $('#contactFormResponse'),
            $cfsubmit = $("#cfsubmit"),
            cfsubmitText = $cfsubmit.text();

        $cfsubmit.text("Sending...");


        $.ajax(
            {
                url: formURL,
                type: "POST",
                data: postData,
                success: function (data) {
                    $cfResponse.html(data);
                    $cfsubmit.text(cfsubmitText);
                    $('#contactForm input[name=name]').val('');
                    $('#contactForm input[name=email]').val('');
                    $('#contactForm textarea[name=message]').val('');
                },
                error: function (data) {
                    alert("Just kidding! This form isn't fully up and running just yet. In the meantime, message me on LinkedIn or check back again soon!");
                }
            });

        return false;

    });


    // Close Button, Hide Menu

    $('body').on('click', '.close-btn', function () {
        window.location.hash="";
        $('.home-page').css({
            display: 'block'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.page').fadeOut(800);
        removeHash ();
        $(window).scrollTop(0);
    });

    /* ----------------------------------------
        Tooltip Starter for Social Media Icons
       ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();


    // location redirect to first load
    if(window.location.hash !== "" && window.location.hash) {
        var redirectPage = window.location.hash.slice(1);
        $('*[data-url_target="'+redirectPage+'"]').trigger('click');
    }


    /*--------------popup------------*/
    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true
    });

});
