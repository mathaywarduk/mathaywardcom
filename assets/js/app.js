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

function updateImage(el, src, srcset) {
  if (el.getAttribute("src") != src) {
    el.setAttribute("src", src);
    if (typeof(srcset) != "undefined") {
        el.setAttribute("srcset", srcset);
    }
  }
}

function isInView(el) {
  const box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

function BlurLoad(el) {
  const src = el.dataset.src;
  const srcset = el.dataset.srcset;

  // if in viewport and not large image
  if (isInView(el)) {
    updateImage(el, src, srcset);
  }

  // check on scroll/resize if in viewport
  document.addEventListener('scroll', function(e) {
    if (isInView(el)) {
      updateImage(el, src, srcset);
    }
  });
  document.addEventListener('resize', function(e) {
    if (isInView(el)) {
      updateImage(el, src, srcset);
    }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  [...document.querySelectorAll("[data-hover-show]")].map((el) => Hoverer(el));
  [...document.querySelectorAll("[data-blur-load]")].map((el) => BlurLoad(el));
});