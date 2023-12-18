var btn = document.querySelectorAll(".drum");
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    clickfun(this.innerHTML);
    animateIt(this.innerHTML);
  });
}

document.addEventListener("keydown", function (event) {
  clickfun(event.key);
  animateIt(event.key);
});
function clickfun(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "i":
      var audio = new Audio("./sounds/sexy.mp3");
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      break;
    default:
      break;
  }

  audio.play();
}

function animateIt(x) {
  var X = "." + x;
  var target = document.querySelector(X);
  target.classList.add("pressed");
  setTimeout(function () {
    target.classList.remove("pressed");
  }, 100);
}
