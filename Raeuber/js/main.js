document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tilt").addEventListener("mousemove", tiltQuestion)
});

tiltQuestion = function() {
  e = window.event
  posX = e.clientX
  posY = e.clientY

  middleX = document.querySelector(".tilt").clientWidth / 2
  middleY = window.innerHeight / 2

  if(posX < middleX) {
    document.querySelector(".tilt").classList.remove("maus-rechts")
    document.querySelector(".tilt").classList.add("maus-links")
  } else {
    document.querySelector(".tilt").classList.remove("maus-links")
    document.querySelector(".tilt").classList.add("maus-rechts")
  }

  if(posY < middleY) {
    document.querySelector(".tilt").classList.remove("maus-unten")
    document.querySelector(".tilt").classList.add("maus-oben")
  } else {
    document.querySelector(".tilt").classList.remove("maus-oben")
    document.querySelector(".tilt").classList.add("maus-unten")
  }
}
