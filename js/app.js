$(document).foundation()
$(document).ready(function() {
  $().offsetScroller.defaults.offsetPixels = 92;

  $('#menu a').offsetScroller();

  $().offsetScroller.scrollToHash(window.location.hash);
});
