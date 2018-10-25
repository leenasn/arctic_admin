//= require jquery
//= require jquery_ujs
//= require active_admin/base

$(document).on('turbolinks:load', function(){
  $('.header-item .has_nested>a').attr("data-turbolinks",false)
})
$(function() {
  $(document).on('click touchstart', '#sidebar', function(e) {
    if($(e.target).attr('id') == $(e.currentTarget).attr('id')){
      var position = $(this).position();
      var width = $(this).width();
      if (e.pageX < position.left || e.pageX == undefined) {
        if ($(this).css('right') == '0px') {
          $(this).animate({
            right: "-="+width
          }, 600, function() {
            animationFilterDone = true;
          });
        } else {
          $(this).animate({
            right: "+="+width
          }, 600, function() {
            animationFilterDone = true;
          });
        }
      }
    }
  });

  var animationDone = true;
  $(document).on('click touchstart', '#utility_nav', function(e) {
    var position = $(this).position();
    var tabs = $('#tabs');
    var width = Math.round(tabs[0].getBoundingClientRect().width);
    if (e.pageX < (position.left + 40)) {
      if(animationDone == true) {
        animationDone = false;
        if (tabs.css('left') == '0px') {
          tabs.animate({
            left: "-="+width
          }, 400, function() {
            animationDone = true;
          });
        } else {
          tabs.animate({
            left: "+="+width
          }, 400, function() {
            animationDone = true;
          });
        }
      }
    }
  });

  // $(document).on('click', 'body', function(e) {
  //   var tabs = $('#tabs');
  //   var width = Math.round(tabs[0].getBoundingClientRect().width);
  //   if (tabs.css('left') == '0px') {
  //     if (e.pageX > width && e.pageY > 60) {
  //       if(animationDone == true) {
  //         animationDone = false;
  //         tabs.animate({
  //           left: "-="+width
  //         }, 400, function() {
  //           animationDone = true;
  //         });
  //       }
  //     }
  //   }
  // });

  $(document).on('click', '#tabs .has_nested', function(e) {
    if ($(this).hasClass('open') == true) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
    }
  });

  $(document).on('click', '.header-item .has_nested', function(e) {
    if ($(this).hasClass('current') == true) {
      $(this).removeClass('current');
    } else {
      $(this).addClass('current');
    }
  });
});
