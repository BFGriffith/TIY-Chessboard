(function(window) {
    /*
    window.chess = {

    }
    */
alert("jQuery?");
    $('.NextMove').click(function() {
      $('.rank-2 > .file-d').removeClass('WhitePawn');
      $('.rank-4 > .file-d').addClass('WhitePawn');
      console.log("Click:BOOM!");
});
/*
    _.forEach(..., function(element, ...) {
      element.addEventListener('click', function() {
        console.log("This works for all of the buttons!!");

      });

    });
*/
})(window);
