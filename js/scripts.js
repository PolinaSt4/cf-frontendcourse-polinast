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

function outsideClickListener(event) {
  var menu = document.getElementById('myNavtoggle');
  if (!menu.contains(event.target) && menu.className.includes('responsive')) {
    menu.className = 'navtoggle'; // Close the menu
    document.removeEventListener('click', outsideClickListener); // Remove the listener
  }
}
