$(window).on("load",function(){$(".se-pre-con").fadeOut("slow"),$("#menu2").hide()}),$(document).ready(function(){$("#quote-carousel").carousel({pause:!0,interval:1e4}),$("#scroll-btn").click(function(){$("#menu1").hide(),$("#menu2").show()});var o=$("#index-about").offset().top;$(window).scroll(function(){$(window).scrollTop()>o?($("#menu1").hide(),$("#menu2").show()):($("#menu1").show(),$("#menu2").hide())})});