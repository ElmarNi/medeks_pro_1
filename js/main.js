$(document).ready(function () {
  $('#slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    nav: true
  });
  $('#projects .owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    items: 1.3,
    dots: true,
    nav: true
  });
  $('#referanceLogos .owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000
  });
  $('#productcategories .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav:true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    responsiveClass:true,
    responsive: {
      0:{
        items: 1
      },
      768:{
        items: 2
      },
      992:{
        items: 3
      },
      1200:{
        items: 5
      }
    }
  });
  $("header .open-menu").click(function (e) {
    e.preventDefault();
    $("header .open-menu i").addClass("d-none");
    $(".small-screen-menu-nav nav").addClass("active");
    $("body").addClass("overflow-hidden");
    $(".small-screen-overlay").addClass("active");
  });
  $(".small-screen-menu-nav .close-menu").click(function (e) {
    e.preventDefault();
    $("header .open-menu i").removeClass("d-none");
    $(".small-screen-menu-nav nav").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $(".small-screen-overlay").removeClass("active");
    $(".small-screen-menu-nav .submenu ul").removeClass("active");
    $(".small-screen-menu-nav .submenu i").removeClass("active");
  });
  $(".small-screen-menu-nav .submenu a").click(function (e) {
    e.preventDefault();
    $(".small-screen-menu-nav .submenu ul").toggleClass("active");
    $(this).parent().toggleClass("active");
    $(this).children().last().toggleClass("active");
  });
  $("#large-screens .languages").click(function (e) {
    e.preventDefault();
    $("#large-screens .languages ul").toggleClass("active");
    $("#large-screens .languages i").toggleClass("active");
  });
  $("#large-screens .languages").first().click(function (e) {
    e.preventDefault();
  });
  getMobileOperatingSystem()
});
$(window).resize(function () {
  if ($(".small-screen-menu-nav nav").hasClass("active")) {
    $("header .open-menu i").removeClass("d-none");
    $(".small-screen-menu-nav nav").removeClass("active");
    $("body").removeClass("overflow-hidden");
    $("header .open-menu").removeClass("d-none");
    $(".small-screen-overlay").removeClass("active");
  }

  if (!$(".small-screen-menu-nav nav").hasClass("active")) {
    $(".small-screen-menu-nav .submenu ul").removeClass("active");
    $(".small-screen-menu-nav .submenu i").removeClass("active");
  }
});
function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        $("#callToaction").addClass("bgAtch")
        $("#about .right-side").addClass("bgAtch")
    }
}
