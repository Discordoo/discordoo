/*$('body').mPageTransition();

$('body').mPageTransition({

  // the color value that the page will fade to
  color: "#ffc107",

  // animation speed in milliseconds
  fadeOutTime: 10,
  fadeInTime: 10

});*/

if (window.jQuery && window.innerWidth > 1220) {

  document$.subscribe(() => {
    const elements = document.getElementsByTagName('main');

    for (let element of elements) {
      if (!element.classList.contains('animsition')) element.classList.add('animsition')
    }
  })

  function animate() {
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
      onLoadEvent: false,
      browser: [ 'animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay : false,
      overlayClass : 'animsition-overlay-slide',
      overlayParentElement : 'body',
      transition: function(url){ window.location.href = url; }
    })

    $('main').animsition('in')
  }

  $(document).onload(() => {
    animate()
  })

  let baseUrl = document.location.href

  function observe() {
    const targetNode = document.querySelector('[data-md-component="main"]');

    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {

        if (mutation.type === 'attributes') {
          if (mutation.target.baseURI.replace(/#(.)+/g, '') !== baseUrl.replace(/#(.)+/g, '')) {

            baseUrl = mutation.target.baseURI

            animate()

            observer.disconnect()
            observe()
          }
        }
      })
    });

    observer.observe(targetNode, { attributes: true, childList: true, subtree: true });
  }

  observe()

}

