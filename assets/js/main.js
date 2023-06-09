// Start Header

// Add Class Active To Header Nav And Remove 
const active = document.querySelectorAll("#navbarSupportedContent .nav-link");

active.forEach((e) => {
  e.addEventListener("click", removeActiveNavbar);
})

// Remove Active Class From All Lis And Add Class Active Only To Current
function removeActiveNavbar() {
  active.forEach((e) => {
    e.classList.remove("active")
    this.classList.add("active")
  })
}

// End Header

// Start Statistic 
let counters = document.querySelectorAll(".number");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  let updateCounter = () => {
    let target = +counter.getAttribute("data-target");
    // console.log(typeof target, target);

    let count = +counter.innerHTML;

    let increment = target / 10000;

    if (count < target) {
      counter.innerHTML = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateCounter();
});
// End Statistic 

// Start Projects
let switcherList = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".gallery .all");

switcherList.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add Class Active Only To Current
function removeActive() {
  switcherList.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active", "rounded-pill");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block"
  })
}
// End Projects

//Back To Top
let contact = document.querySelector(".btn-social-buttons");
let btnUp = document.querySelector(".top-btn");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    btnUp.classList.add("active");
    contact.classList.add("show");
  } else {
    btnUp.classList.remove("active");
    contact.classList.remove("show");
  }
  btnUp.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
};