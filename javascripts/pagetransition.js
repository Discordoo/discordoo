/*$('body').mPageTransition();

$('body').mPageTransition({

  // the color value that the page will fade to
  color: "#ffc107",

  // animation speed in milliseconds
  fadeOutTime: 10,
  fadeInTime: 10

});*/

if (false) {

  document$.subscribe(() => {
    const elements = document.getElementsByTagName('main');

    for (let element of elements) {
      if (!element.classList.contains('animsition')) element.classList.add('animsition')
    }
  })

  $(document).ready(function() {
    $(".animsition").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 200,
      outDuration: 200,
      linkElement: 'a:not([target="_blank"]):not([href*="#"])',
      // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
      loading: true,
      loadingParentElement: 'main', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    });
  });

}
