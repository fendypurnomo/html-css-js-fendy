const bgHover = document.getElementsByClassName('bg-hover');

for (let i = 0; i < bgHover.length; i++) {
  let hover = bgHover[i];
  hover.addEventListener('mouseenter', function () {
    hover.classList.add('bg-body-secondary');
  });
  hover.addEventListener('mouseleave', function () {
    hover.classList.remove('bg-body-secondary');
  });
}
