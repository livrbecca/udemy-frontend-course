$(function () {

    // prevent default
    // use [] to target attributes 

    $('[href="https://www2.gogoanime.sh/fruits-basket-2019-episode-5"]').on('click', function(e){
        console.log("linking to Fruits basket episode 5...")
        e.preventDefault();
    });


  // Dropdown
  $('[data-trigger="dropdown"]').on("mouseenter", function () {
    var submenu = $(this).parent().find(".submenu");
    submenu.fadeIn(500);

    $(".profile-menu").on("mouseleave", function () {
      submenu.fadeOut(400);
    });
  });

  //Appending content
  // targting multiple element using e - event.

  $("#prepend, #append, #replace").on("click", function (e) {
      e.preventDefault(); // this stops the form submitting and going to error page
    var el = $(e.currentTarget);
    var action = el.attr("id");
    var content = $(".text").val();

    if (action == "prepend") {
      console.log("preprending...");
      $("#main").prepend(content);
    } else if (action == "append") {
      console.log("appending...");
      $("#main").append(content);
    } else if (action == "replace") {
      console.log("replacing...");
      $("#main").html(content);
    }

    //leaves text box empty, outside of if statement
    $(".text").val("");
  });




});
