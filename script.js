document.addEventListener('DOMContentLoaded', function() {
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  let slide = document.querySelector(".slide");

  function applyBlackAndWhiteFilter() {
    let items = slide.querySelectorAll(".item");
    items.forEach(item => {
      item.style.filter = "grayscale(100%)";
    });
  }

  function updateContentDisplay() {
    let items = slide.querySelectorAll(".item");
    items.forEach((item, index) => {
      if (index === 1) {
        item.querySelector(".content").style.display = "block";
        item.style.filter = "grayscale(0%)"; // Show active image in color
      } else {
        item.querySelector(".content").style.display = "none";
        item.style.filter = "grayscale(100%)"; // Apply black and white filter
      }
    });
  }

  function setupSmallImages() {
    let items = slide.querySelectorAll(".item");
    items.forEach((item, index) => {
      if (index > 1) { // Skip the first two items (main images)
        item.addEventListener("mouseenter", function() {
          this.style.filter = "grayscale(0%)";
        });

        item.addEventListener("mouseleave", function() {
          if (this !== slide.children[1]) {
            this.style.filter = "grayscale(100%)";
          }
        });
      }
    });
  }

  next.addEventListener("click", function () {
    let items = slide.querySelectorAll(".item");
    slide.appendChild(items[0].cloneNode(true));
    slide.removeChild(items[0]);
    updateContentDisplay();
    setupSmallImages(); // Reattach event listeners
  });

  prev.addEventListener("click", function () {
    let items = slide.querySelectorAll(".item");
    slide.prepend(items[items.length - 1].cloneNode(true));
    slide.removeChild(items[items.length - 1]);
    updateContentDisplay();
    setupSmallImages(); // Reattach event listeners
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") next.click();
    if (e.key === "ArrowLeft") prev.click();
  });

  // Initial setup
  applyBlackAndWhiteFilter();
  setupSmallImages();
  updateContentDisplay();
});