// -- After the document is ready
$(function() {
  // Find all YouTube and Vimeo videos
  var $allVideos = $("iframe[src*='www.youtube.com'], iframe[src*='player.vimeo.com']");

  // Figure out and save aspect ratio for each video
  $allVideos.each(function() {
    $(this)
      .data('aspectRatio', this.height / this.width)
      // and remove the hard coded width/height
      .removeAttr('height')
      .removeAttr('width');
  });

  // When the window is resized
  $(window).resize(function() {
    // Resize all videos according to their own aspect ratio
    $allVideos.each(function() {
      var $el = $(this);
      // Get parent width of this video
      if ($el.parent().width() > 900) {
      	var newWidth = 0.6*($el.parent().width());
      }
      else if ($el.parent().width() < 760) {
      	var newWidth = $el.parent().width();
      }	
      else {
      	var newWidth = 0.85*($el.parent().width());
      }
      $el
        .width(newWidth)
        .height(newWidth * $el.data('aspectRatio'));
    });

  // Kick off one resize to fix all videos on page load
  }).resize();
});
