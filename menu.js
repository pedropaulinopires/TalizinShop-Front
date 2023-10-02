let btnMenu = document.getElementById("btnMenu");
let divsMenuMobile = [...btnMenu.children];
let menuDesktop = document.getElementById("menuDesktop");
let menuOverlay = document.getElementById("menuOverlay");
let backgroundMenu = document.getElementById("backgroundMenu");
let itensMenu = [...document.querySelectorAll("#menuOverlay a")];

let menuAtivo = (bool) => {
  if (bool) {
    divsMenuMobile.forEach((ele) => {
      ele.classList.add("active");
    });
  } else {
    divsMenuMobile.forEach((ele) => {
      ele.classList.remove("active");
    });
  }
};

window.addEventListener("scroll", () => {
  if (!menuOverlay.classList.contains("active")) {
    if (window.pageYOffset > 40) {
      menuAtivo(true);
    } else {
      menuAtivo(false);
    }
  }
});

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  backgroundMenu.classList.toggle("active");
  if (!menuMobile.classList.contains("active")) {
    menuAtivo(true);
  } else if (
    window.pageYOffset <= 40 &&
    menuMobile.classList.contains("active")
  ) {
    menuAtivo(true);
  }
});

backgroundMenu.addEventListener("click", () => {
  btnMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
  backgroundMenu.classList.remove("active");

  if (!menuMobile.classList.contains("active")) {
    menuAtivo(true);
  } else if (
    window.pageYOffset <= 40 &&
    menuMobile.classList.contains("active")
  ) {
    menuAtivo(false);
  }
});

itensMenu.forEach((ele) => {
  ele.addEventListener("click", () => {
    btnMenu.classList.remove("active");
    menuOverlay.classList.toggle("active");
    backgroundMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 30) {
    menuDesktop.classList.add('active')
  } else {
    menuDesktop.classList.remove('active')
  }
});
