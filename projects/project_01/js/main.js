var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Script for navbar scrollspy to work
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar-example'
})