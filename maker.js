$(document).ready(function(){
  $(".maker-main .mk-header .mk-header-content a").click(function(){
    console.log("test");
    $(".maker-main .mk-header .mk-header-pop").removeClass('disp-none');
    $('body').css("overflow", "hidden");
  });
  $(".maker-main .mk-header .mk-header-pop i").click(function(){
    $(".maker-main .mk-header .mk-header-pop").addClass('disp-none');
    $('body').css("overflow", "initial");
  });
  let imgTimer = function() {
    let container = $(".maker-bg-img").find("ul");
    setTimeout(function() {
        let currElem = $(container).find("li.active");
        let nextElem = currElem.next();
        $(nextElem).css("left", "100%");
        $(currElem).animate({
          left: "-100%"
        }, 1000, function() {
          currElem.removeClass("active");
        });
        $(nextElem).animate({
            left: 0
        }, 1000, function() {
          //
        });
        nextElem.addClass("active");
        $(container).append(currElem);
        imgTimer();
    }, 5000);
  };
  imgTimer();

  let contentContainer = $(".mk-testimony-content").find("ul");
  let picContainer = $(".mk-testimony-pictures").find("ul");
  
  let testimonialSlide = function() {
    let currElem = $(picContainer).find("li.active");
    let nextElem = $(currElem).attr("data-image") == 6 ? $(picContainer).find("li").first() : currElem.next();
    let contentElem = $(contentContainer).find("li[data-id='" + $(nextElem).attr("data-image") + "']");
    $(contentContainer).find("li").removeClass("active");
    $(contentElem).addClass("active", 1000);
    $(picContainer).find("li").removeClass("active");
    $(nextElem).addClass("active", 1000);
  };
  let testimonialTimer = setInterval(testimonialSlide, 2000);

  $(picContainer).find("li").on("click", function() {
    clearInterval(testimonialTimer);
    let contentElem = $(contentContainer).find("li[data-id='" + $(this).attr("data-image") + "']");
    $(contentContainer).find("li").removeClass("active");
    $(contentElem).addClass("active", 1000);
    $(picContainer).find("li").removeClass("active");
    $(this).addClass("active", 1000);
    testimonialTimer = setInterval(testimonialSlide, 2000);
  });
  $('.mk-banner-content img').click(function() {
    $('.mk-banner-content .mk-popvideo').removeClass('disp-none');
    $('body').css("overflow", "hidden");
  });
  $('.mk-banner-content i').click(function() {
    $('.mk-banner-content .mk-popvideo').addClass('disp-none');
    $('body').css("overflow", "initial");
  });
  $(".mk-carousel-prev").click(function() {
    var currentbtn = $(this);
    var movevalue = $(currentbtn).siblings('div').find('li').outerWidth(true);
    $(currentbtn).siblings('div').children('ul').animate({ left: '+=' +movevalue }, 500, function() {
      $(currentbtn).siblings('div').find("li:last-child").prependTo($(currentbtn).siblings('div').children('ul'));
      $(currentbtn).siblings('div').children('ul').css("left", "");
    });
  });
  $(".mk-carousel-next").click(function() {
    var currentbtn = $(this);
    var movevalue = $(currentbtn).siblings('div').find('li').outerWidth(true);
    $(currentbtn).siblings('div').children('ul').animate({ left: '-=' +movevalue }, 500, function() {
      $(currentbtn).siblings('div').find("li:first-child").appendTo($(currentbtn).siblings('div').children('ul'));
      $(currentbtn).siblings('div').children('ul').css("left", "");
    });
  });
});


