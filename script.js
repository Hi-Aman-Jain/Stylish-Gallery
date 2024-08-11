document.addEventListener('DOMContentLoaded', function() {
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  let slide = document.querySelector(".slide");

  function updateContentDisplay() {
    let items = slide.querySelectorAll(".item");
    items.forEach((item, index) => {
      if (index === 1) {
        item.querySelector(".content").style.display = "block";
      } else {
        item.querySelector(".content").style.display = "none";
      }
    });
  }

  next.addEventListener("click", function () {
    let items = slide.querySelectorAll(".item");
    slide.appendChild(items[0].cloneNode(true));
    slide.removeChild(items[0]);
    updateContentDisplay();
  });

  prev.addEventListener("click", function () {
    let items = slide.querySelectorAll(".item");
    slide.prepend(items[items.length - 1].cloneNode(true));
    slide.removeChild(items[items.length - 1]);
    updateContentDisplay();
  });
});