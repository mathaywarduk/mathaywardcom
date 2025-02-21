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

function updateImage(el, img, srcset) {
    // Check if source elements already exist
    let sources = el.querySelectorAll("source");

    if (typeof(srcset) != "undefined" && sources.length < 1) {


      const webpSrcSet = srcset.replaceAll('?w=', '?fm=webp&w=');

      // Create source element for JPG
      const jpgSource = document.createElement("source");
      jpgSource.setAttribute("srcset", srcset);
      jpgSource.setAttribute("type", "image/jpeg");

      // Create source element for WEBP
      const webpSource = document.createElement("source");
      webpSource.setAttribute("srcset", webpSrcSet);
      webpSource.setAttribute("type", "image/webp");

      // Add source elements
      el.prepend(jpgSource);
      el.prepend(webpSource);
    }
}

function isInView(el) {
  const box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

function BlurLoad(el) {
  const img = el.querySelector("img");
  const srcset = img.dataset.srcset;

  // if in viewport and not large image
  if (isInView(el)) {
    updateImage(el, img, srcset);
  }

  // check on scroll/resize if in viewport
  document.addEventListener('scroll', function(e) {
    if (isInView(el)) {
      updateImage(el, img, srcset);
    }
  });
  document.addEventListener('resize', function(e) {
    if (isInView(el)) {
      updateImage(el, img, srcset);
    }
  });
}

function ImageTags(el) {
  el.style.cursor = "pointer";
  const tags = el.querySelectorAll('[data-image-tag]');
  el.addEventListener("click", function() {
    tags.forEach(function(item) {
      item.classList.toggle('opacity-0');
      item.classList.toggle('opacity-100');
    });
  });
}

function playPauseVideo(video) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function Reels(el) {
  const muteButton = el.parentNode.querySelector('[data-reel-mute]');
  const playButton = el.parentNode.querySelector('[data-reel-play]');

  el.addEventListener("click", function() {
    playPauseVideo(el);
    el.parentNode.classList.toggle('active');
  }); 

  playButton.addEventListener("click", function() {
    playPauseVideo(el);
    el.parentNode.classList.toggle('active');
  });
  
  muteButton.addEventListener("click", function() {
    el.muted = !el.muted;
    this.classList.toggle('active');
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  [...document.querySelectorAll("[data-hover-show]")].map((el) => Hoverer(el));
  [...document.querySelectorAll("[data-blur-load]")].map((el) => BlurLoad(el));
  [...document.querySelectorAll("[data-image-tag-src]")].map((el) => ImageTags(el));
  [...document.querySelectorAll("[data-reel]")].map((el) => Reels(el));
});