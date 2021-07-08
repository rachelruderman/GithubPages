/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(() => {
  $("#preloader")
    .delay(350)
    .fadeOut("slow", () => {
      // $('.profile-page, .portfolio-page, .service-page, .contact-page').hide();
    });
});

$(document).ready(() => {
  /*  ---------------------
         Homepage Responsive
        ---------------------  */

  function homepageResponsive() {
    // Homepage Main Portions Responsive

    const windowsWidth = $(window).width();
    const windowsHeight = $(window).height();

    if (windowsWidth > 767) {
      $(".introduction , .menu").css({
        width: "50%",
        height: "100%",
      });
    } else {
      $(".introduction , .menu").css({
        width: "100%",
        height: "50%",
      });
    }

    // Homepage Profile Image Responsive

    const introWidth = $(".introduction").width();
    const introHeight = $(".introduction").height();
    /* bgImage = $('.introduction').find('img'), */
    const menuBgImages = $(".menu > li img");

    if (introWidth > introHeight) {
      /* bgImage.css({
                width: '100%',
                height: 'auto'
            }); */
      menuBgImages.css({
        width: "100%",
        height: "auto",
      });
    } else {
      /* bgImage.css({
                width: '100%',
                height: 'auto'
            }); */
      menuBgImages.css({
        width: "100%",
        height: "100%",
      });
    }
  }

  $(window).on("load resize", homepageResponsive);

  /*  --------------
         Menu Settings
        --------------  */

  function removeHash() {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }

  function hideBoots4Menu() {
    const introWidth = $(".introduction").width();
    const menuWidth = $(".menu").width();

    $(".introduction").animate(
      {
        left: `-${introWidth}`,
      },
      1000,
      "easeOutQuart"
    );
    $(".menu").animate(
      {
        left: menuWidth,
      },
      1000,
      "easeOutQuart",
      () => {
        $(".home-page").css({
          display: "none",
        });
      }
    );
  }

  // Hide Menu
  $(".menu").on("click", ".menu_button", () => {
    hideBoots4Menu();
  });

  // Show Reletive Page Onclick

  $(".menu").on("click", "li.menu_button", function () {
    const selectedPage = $(this).data("url_target");
    window.location.hash = selectedPage;
    $(`#${selectedPage}`).fadeIn(1200);
    $(window).scrollTop(0);
  });

  $(".menu").on("click", "li.profile-btn", () => {
    setTimeout(() => {
      $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1500,
              easing: "swing",
              step(now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }, 100);
  });

  $(".menu").on("click", "li.portfolio-btn", () => {
    setTimeout(() => {
      $("#projects").mixItUp();
    }, 100);
  });

  $(".menu").on("click", "li.gallery-btn", () => {
    setTimeout(() => {
      $(".pop-up-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
          enabled: true,
        },
      });
    }, 100);
  });

  // Close Button, Hide Menu

  $("body").on("click", ".close-btn", () => {
    window.location.hash = "";
    $(".home-page").css({
      display: "block",
    });
    $(".introduction, .menu").animate(
      {
        left: 0,
      },
      1000,
      "easeOutQuart"
    );
    $(".page").fadeOut(800);
    removeHash();
    $(window).scrollTop(0);
  });

  /* ----------------------------------------
        Tooltip Starter for Social Media Icons
       ----------------------------------------  */

  $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
    placement: "bottom",
  });

  $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

  // location redirect to first load
  if (window.location.hash !== "" && window.location.hash) {
    const redirectPage = window.location.hash.slice(1);
    $(`*[data-url_target="${redirectPage}"]`).trigger("click");
  }

  /* --------------popup------------*/
  $(".open-popup-link").magnificPopup({
    type: "inline",
    midClick: true,
  });
});
