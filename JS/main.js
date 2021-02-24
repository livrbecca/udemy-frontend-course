var btn = document.getElementById("go-button");

function buttonClicked() {
  console.log("button clicked");
  btn.removeEventListener("click", buttonClicked);
  document.getElementById("text").innerHTML = "Don't!";
  console.log(document.getElementById("text").innerHTML);

  var customText = document.getElementsByClassName("my-input");
  var textArea = document.getElementsByClassName("my-textarea");

  var results = document.getElementById("text2");
  results.innerHTML = "Hello, " + customText[0].value + "<br />";
  results.innerHTML += "Message: " + textArea[0].value;
}

btn.addEventListener("click", buttonClicked);

// only fires the button once

var hobbies = ["sleep", "nap", "anime", "coding"];

// console.log("I love", hobbies.pop());
// console.log(hobbies);
// hobbies.push("Sims 2");
// console.log(hobbies);

// pop removes the last item AND returns it
//push adds
// length - 1 returns last item in array

// console.log(hobbies[hobbies.length - 1]);

//looping through arrays
hobbies.forEach(function (i, index) {
  console.log("I like", i, "and it's index is", index);
});

//removes and returns first item in array
// console.log(hobbies.shift());

// add item to beginning of array
console.log(hobbies.unshift("skincare"));
console.log(hobbies);
