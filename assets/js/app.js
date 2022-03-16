const showClasses = ["fade-up"];
const hideClasses = ["opacity-0"];

function Hoverer(el) {
  const targetSelector = el.dataset.hoverTarget;
  const targets = document.querySelectorAll(targetSelector);

  el.addEventListener("mouseover", function() {
    targets.forEach(function(el) {
      el.classList.add(...showClasses);
      el.classList.remove(...hideClasses);
    });
  });

  el.addEventListener("mouseout", function() {
    targets.forEach(function(el) {
      el.classList.add(...hideClasses);
      el.classList.remove(...showClasses);
    });
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  [...document.querySelectorAll("[data-hover-show]")].map((el) => Hoverer(el));
});