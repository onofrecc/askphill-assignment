export const sliderFunctionality = () => {
  window.onload = function () {
    // DOM element(s)
    let slider = document.querySelector(".slider");
    let sliderInner = document.querySelector(".slider-inner");

    // Slider variables
    let pressed = false,
      startX,
      x;

    // Mousedown eventlistener
    slider.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - sliderInner.offsetLeft;
      slider.style.cursor = "grabbing";
    });

    // mouseneter
    slider.addEventListener("mouseenter", () => {
      slider.style.cursor = "grab";
    });

    // mouseup
    slider.addEventListener("mouseup", () => {
      slider.style.cursor = "grab";
    });

    // window
    window.addEventListener("mouseup", () => {
      pressed = false;
    });

    // Slider mousemove event listener
    slider.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();

      x = e.offsetX;

      sliderInner.style.left = `${x - startX}px`;

      checkBoundry();
    });

    // Check boundry of outer and inner sliders
    function checkBoundry() {
      let outer = slider.getBoundingClientRect(),
        inner = sliderInner.getBoundingClientRect();

      if (parseInt(sliderInner.style.left) > 0) {
        sliderInner.style.left = "0px";
      } else if (inner.right < outer.right) {
        sliderInner.style.left = `-${inner.width - outer.width}px`;
      }
    }
  }
}
