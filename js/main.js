/*TODO remember to minify and replace main.min.js*/
$(window).load(checkFooter());
// Check if footer is at the bottom of the page/window. Moves footer to the bottom if not
function checkFooter() {
  if($("body").height() < $(window).height()){
    $("footer").css("z-index",2);
    $("footer").css("width","100%");
    $("footer").css("bottom",0);
    $("footer").css("position","fixed");
  }
  return false;
}
// Scroll to tag with ID using animation
function scrollToID(elementID) {
    $('html,body').animate({
      scrollTop: $(elementID).offset().top
    }, 1000);
    return false;
}
// Default scroll to div when pressing a link
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// Set Modal Div values when modal is shown
$('#galleryModal').on('show.bs.modal', function (event) {
  var element = $(event.relatedTarget);
  var modal = $(this);
  modal.find('.modal-title').text(element.attr('alt'));
  $('#modalImage').attr('src', element.attr('src'));
});
// Show Tablet Mode side menu on Hamburger button press
$('#hamburger').click( function(e) {
  e.preventDefault();
  if ($('.hidden-sm-alt').css("display") == "none") {
    $('.hidden-sm-alt').css("display","block");
    $('#menu').css("height","100%");
    $('#menu').css("height","100vh");
  }else {
    $('.hidden-sm-alt').removeAttr("style");
    $('#menu').removeAttr("style");
  }

  return false;
});
// Hide Tablet Mode side menu on window/page resize
$(window).on('resize', function(){
  $('.hidden-sm-alt').removeAttr("style");
  $('#menu').removeAttr("style");
});
