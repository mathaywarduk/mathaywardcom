const showClasses = ["fade-up", "fade-down"];
const hideClasses = ["opacity-0"];

function Hoverer(el) {
  const targetSelector = el.dataset.hoverTarget;
  const targets = document.querySelectorAll(targetSelector);

  el.addEventListener("mouseover", function() {
    targets.forEach(function(el, i) {
      el.classList.add(showClasses[i % 2]);
      el.classList.remove(...hideClasses);
    });
  });

  el.addEventListener("mouseout", function() {
    targets.forEach(function(el, i) {
      el.classList.add(...hideClasses);
      el.classList.remove(showClasses[i % 2]);
    });
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  [...document.querySelectorAll("[data-hover-show]")].map((el) => Hoverer(el));
});