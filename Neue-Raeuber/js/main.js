document.addEventListener("DOMContentLoaded", function() {
  var s = skrollr.init({
    //forceHeight: false,
    smoothScrolling: false
  });

  setTimeout(function () {
    $('.name').addClass('visible');
    console.log('yo');
  }, 900);

  console.log('ok')
});
