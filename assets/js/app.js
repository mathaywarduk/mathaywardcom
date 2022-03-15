const showClass = "opacity-100";
const hideClass = "opacity-0";

function Hoverer(el) {
  const targetSelector = el.dataset.hoverTarget;
  const targets = document.querySelectorAll(targetSelector);

  el.addEventListener("mouseover", function() {
    console.log('mouseover');

    targets.forEach(function(el) {
      el.classList.add(showClass);
      el.classList.remove(hideClass);
    });
  });

  el.addEventListener("mouseout", function() {
    console.log('mouseout');

    targets.forEach(function(el) {
      el.classList.add(hideClass);
      el.classList.remove(showClass);
    });
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  [...document.querySelectorAll("[data-hover-show]")].map((el) => Hoverer(el));
});