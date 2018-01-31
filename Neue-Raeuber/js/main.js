document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tilt").addEventListener("mousemove", tiltQuestion)

  window.addEventListener("scroll", daCapoListener);

  function daCapoListener() {
  function elementScrolled(elem) {
    var docViewTop = $(window).scrollTop() - 400;
    var docViewBottom = docViewTop + $(window).height() - 100;
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    if(elementScrolled('.trigger-dacapo')) {
      $('.capo').addClass('visible');
      setTimeout(function () {
        window.removeEventListener("scroll", daCapoListener);
        $('.capo').removeClass('visible');
      }, 800);
    }
  };
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
