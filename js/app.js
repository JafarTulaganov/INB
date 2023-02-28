const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active__tab");
    });
    target.classList.add("active__tab");
    tabs.forEach((tab) => {
      tab.classList.remove("active__tab");
    });
    tab.classList.add("active__tab");
  });
});

let navToggle = document.getElementById("burger");
navCollapse = document.getElementById("links");
mainBtn = document.getElementById("main");
leastBtn = document.getElementById("least");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navCollapse.classList.toggle("show-menu");
    navToggle.classList.toggle("close-btn");
  });
}

if (mainBtn) {
  mainBtn.addEventListener("click", () => {
    leastBtn.classList.toggle("show-drop");
  });
}

new Swiper(".newsSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 8,
  breakpoints: {
    767: {
      slidesPerView: 2.9,
      spaceBetween: 20,
    },
  },
});
new Swiper(".partSwiper", {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 1,
  },
  speed: 30000,
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 48,
    },
  },
});

new Swiper(".otherSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    767: {
      slidesPerView: 4,
      spaceBetween: 48,
    },
  },
});

let listBtn = document.getElementById("list");
let gridBtn = document.getElementById("grid");
let items = document.getElementById("items");

listBtn.addEventListener("click", () => {
  items.classList.add("type__list");
  items.classList.remove("type__grid");
  gridBtn.classList.remove("active");
  listBtn.classList.add("active");
});

gridBtn.addEventListener("click", () => {
  items.classList.add("type__grid");
  items.classList.remove("type__list");
  listBtn.classList.remove("active");
  gridBtn.classList.add("active");
});
