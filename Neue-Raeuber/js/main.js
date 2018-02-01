document.addEventListener("DOMContentLoaded", function() {
  var s = skrollr.init({
    //forceHeight: false,
    smoothScrolling: false
  });

  // setTimeout(function () {
  //   $('.name').addClass('visible');
  //   console.log('yo');
  // }, 1005);

  window.onscroll = function() {myFunction()};

  function myFunction() {
    setTimeout(function () {
      $('.name').addClass('visible');
      console.log('yo');
    }, 1);
  }

  console.log('ok')
});
