/*$('body').mPageTransition();

$('body').mPageTransition({

  // the color value that the page will fade to
  color: "#ffc107",

  // animation speed in milliseconds
  fadeOutTime: 10,
  fadeInTime: 10

});*/

if (window.jQuery && window.innerWidth > 1220) {

  const head = document.getElementsByTagName('head')[0]

  /* const scriptElement = document.createElement('script')
  scriptElement.src = 'https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/js/animsition.min.js'
  scriptElement.onreadystatechange = window.onreadystatechange
  scriptElement.onload = window.onload
  head.appendChild(scriptElement) */

  const linkElement = document.createElement('link')
  linkElement.rel = 'stylesheet'
  linkElement.href = 'https://cdnjs.cloudflare.com/ajax/libs/animsition/4.0.2/css/animsition.min.css'
  head.appendChild(linkElement)

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
      loading: false,
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
    })
  })
}

