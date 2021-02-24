// series of functions that means you can write quick code
// needs to be include in script tag BEFORE js script
// all jquery statements begin with $, target goes inside()

$(function () {
  

  $("#text").html("new text using jquery");

  $(".my-input").val("new input val!");

  $('#go-button').html("GO!")

  var el = document.getElementById("text");
  console.log("el in vanilla js:", el);
  console.log("el in jquery:", $(el));

  $('#go-button').on('mouseleave',function(){
    alert("ah, yes.")
  })
});

//mouseleave mouseenter mouseup mousedown