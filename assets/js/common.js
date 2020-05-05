const entryBg = document.querySelectorAll('.js-entry-bg');
const bgClass = ['color01', 'color02', 'color03', 'color04'];

Array.prototype.forEach.call(entryBg, function(el) {
  let color = bgClass[Math.floor(Math.random() * bgClass.length)];
  el.classList.add(color);
});