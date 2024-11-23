alert("Hello Nice Person, I am Polina, UX Designer");
console.log("Hello Nice Person, I am Polina, UX Designer")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
