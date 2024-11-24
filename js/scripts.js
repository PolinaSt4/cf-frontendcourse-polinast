function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
    document.addEventListener('click', outsideClickListener);
  } else {
    x.className = 'navtoggle';
    document.removeEventListener('click', outsideClickListener);
  }
}
