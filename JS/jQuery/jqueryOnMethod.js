$(function () {
  // how to determine a right click
  $(document).on("mousedown" || "keydown", function (e) {
    e.preventDefault();

    switch (e.which) {
      case 1:
        console.log("clicked left mouse button");
        break;
      case 2:
        console.log("miracle! there is no 2 option on laptops...");
        break;
      case 3:
        console.log("clicked right mouse button");
        break;
    }
  });

  // custom context menu - pageX and pageY
  // Y = top and bottom
  // X = left and right

  $(document).on("contextmenu", function () {
    return false; //stops windows automatic right click context menu
  });

 

  $(document).on("mousedown" || "keydown", function (e) {
    e.stopPropagation();

    if (e.which == 3) {

      // is method

      $('.hidden').hide();

      if ($(e.target).is('img')){
          $('.saveimg, .newtab').show();
      }




      console.log(e.pageY, e.pageX);

        $('#context').css({
            top: e.pageY,
            left: e.pageX
        });
        $('#context').fadeIn();
        return false;
    }

        $('#context').fadeOut();

    
  });

  //dropdown functionality
  $('[data-trigger="dropdown"]').on("mouseenter", function () {
    var submenu = $(this).parent().find(".submenu");
    submenu.fadeIn(500);

    $(".profile-menu").on("mouseleave", function () {
      submenu.fadeOut(400);
    });
  });
});
