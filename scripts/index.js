
let lastScrollTop = window.pageYOffset

/**
 * Submit subscribe form handler
 */
function submitForm() {
  alert('Your are subscribed to news letters!')
}

/**
 * Check if subscribe form should be visible on mobile screen
 */
function checkSubscribeVisibility() {
  const currentScroll = window.pageYOffset
  const subscribeForm = document.getElementById('subscribe-form')

  if (currentScroll > lastScrollTop) {
    subscribeForm.style.opacity = "0";
    subscribeForm.style.maxHeight = "0";
    subscribeForm.style.marginTop = "0";
  } else {
    subscribeForm.style.opacity = "1";
    subscribeForm.style.maxHeight = "500px";
  }

  lastScrollTop = currentScroll
}

window.addEventListener('scroll', checkSubscribeVisibility);
