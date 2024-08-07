function currentLightChanger() {
  let currentLight = document.querySelector(".green-dot-container").innerHTML;
  if (
    currentLight ==
    `<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">`
  ) {
    console.log("flag-1");
    document.querySelector(".green-dot-container").innerHTML =
      '<img onclick="currentLightChanger()" src="./media/2.png" class="bright-green-dot" alt="">';
  } else {
    console.log("flag-2");
    document.querySelector(".green-dot-container").innerHTML =
      '<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">';
  }
  currentLight = document.querySelector(".green-dot-container").innerHTML;
  let image = document.querySelectorAll(".vid-1");
  if (
    currentLight ==
    `<img onclick="currentLightChanger()" src="./media/1.png" class="bright-green-dot" alt="">`
  ) {
    image[0].src = "./media/vid-1.gif";
    image[1].src = "./media/vid-1.gif";
  } else {
    image[0].src = "./media/vid-2.gif";
    image[1].src = "./media/vid-2.gif";
  }
}
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".jam");

  for (let i = 0; i < reveals.length; i++) {
    const winHeight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealtop < winHeight - revealPoint) {
      reveals[i].classList.add("jam-active");
    } else {
      reveals[i].classList.remove("jam-active");
    }
  }
}
document.querySelectorAll(".about-box").forEach((box) => {
  box.style.position = "absolute";
  box.style.zIndex = 1000;

  // box.addEventListener("mousedown", function (e) {
  //   e.preventDefault();

  //   let shiftX = e.clientX - box.getBoundingClientRect().left;
  //   let shiftY = e.clientY - box.getBoundingClientRect().top;
  //   shiftX = shiftX + 20;
  //   shiftY = shiftY + 27.8;
  //   function moveAt(pageX, pageY) {
  //     box.style.left = pageX - shiftX + "px";
  //     box.style.top = pageY - shiftY + "px";
  //   }

  //   moveAt(e.pageX, e.pageY);

  //   function onMouseMove(event) {
  //     moveAt(event.pageX, event.pageY);
  //   }

  //   document.addEventListener("mousemove", onMouseMove);

  //   document.addEventListener("mouseup", function onMouseUp() {
  //     document.removeEventListener("mousemove", onMouseMove);
  //     document.removeEventListener("mouseup", onMouseUp);
  //   });

  //   box.ondragstart = function () {
  //     return false;
  //   };
  // });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  let currentIndex = 0;

  function updateCarousel() {
    const itemWidth = carousel.clientWidth;
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);

  updateCarousel();
});

document.querySelectorAll(".scroll-link").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.classList.remove("typing");
    text.classList.add("untyping");
  }, 6000);

  setTimeout(() => {
    text.classList.remove("untyping");
    text.innerHTML = "<span>Graphic</span> Designer";
    void text.offsetWidth; // Trigger reflow to restart CSS animation
    text.classList.add("typing");
  }, 10000);

  setTimeout(() => {
    text.classList.remove("typing");
    text.classList.add("untyping");
  }, 18000);

  setTimeout(() => {
    text.classList.remove("untyping");
    text.innerHTML = "<span>Website</span> Developer";
    void text.offsetWidth; // Trigger reflow to restart CSS animation
    text.classList.add("typing");
  }, 22000);
};

textLoad();
setInterval(textLoad, 24000); // Adjusted interval for complete cycle

// window.addEventListener('load', function() {
//   // Minimum display time for the preloader (2 seconds)
//   const displayTime = 2000;

//   // Function to hide the preloader
//   const hidePreloader = function() {
//       const preloader = document.getElementById('preloader');
//       preloader.style.display = 'none';
//       // Allow scrolling again
//       document.body.style.overflow = 'auto';
//   };

//   // Set a timeout to hide the preloader after 2 seconds
//   setTimeout(hidePreloader, displayTime);

//   // Prevent scrolling during preloader display
//   document.body.style.overflow = 'hidden';
// });