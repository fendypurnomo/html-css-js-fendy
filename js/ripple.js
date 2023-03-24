const ripples = document.getElementsByClassName('ripple');
for (const ripple of ripples) {
  ripple.addEventListener('click', createRipple);
}

function createRipple(e) {
  if (this.getElementsByClassName('ripple').length > 0) {
    this.removeChild(this.childNodes[1]);
  }

  var span = document.createElement('span');
  this.appendChild(span);

  var d = Math.max(this.clientWidth, this.clientHeight);
  span.style.width = span.style.height = d + 'px';
  span.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
  span.style.top = e.clientY - this.offsetTop - d / 2 + 'px';
  span.classList.add('ripple');
}
