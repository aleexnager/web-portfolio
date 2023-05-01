/*===== toggle icon navbar =====*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*===== scroll sections active link =====*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    };
  });

  /*===== sticky navbar =====*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /*===== remove toggle icon and navbar when click navbar link (scroll) =====*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*===== scroll reveal =====*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*===== scroll langages list =====*/

ScrollReveal().reveal(".lang-box6, .lang-box1", { origin: "top" });
ScrollReveal().reveal(".lang-box4, .lang-box7", { origin: "bottom" });
ScrollReveal().reveal(".lang-box2, .lang-box5", { origin: "left" });
ScrollReveal().reveal(".lang-box3, .lang-box8", { origin: "right" });

/*===== typed js =====*/
const typed = new Typed(".multiple-text", {
  strings: ["Computer Science Engineer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  backDelay: 2500,
  loop: true
});

/*===== hover mobile =====*/
function showLang() {
  var base = event.currentTarget.querySelector('.base');
  var title = event.currentTarget.querySelector('.title');
  var icon = event.currentTarget.querySelector('.icon');

  if (base.style.filter === 'drop-shadow(0 0 10px var(--color))') {
    // Si ya se ha modificado el elemento antes, se aplican los estilos iniciales
    base.style.filter = '';
    base.style.animationPlayState = '';
    title.style.transform = '';
    title.style.color = '';
    title.style.textShadow = '';
    title.style.animation = '';
    title.style.transitionDelay = '';
    title.style.opacity = '';
    icon.style.transform = '';
    icon.style.color = '';
    icon.style.filter = '';
    icon.style.animation = '';
  } else {
    // Si no se ha modificado antes, se aplican los nuevos estilos
    base.style.filter = 'drop-shadow(0 0 10px var(--color))';
    base.style.animationPlayState = 'paused';
    title.style.transform = 'rotateY(30deg) skewY(-24deg) translateY(-90px)';
    title.style.color = 'var(--color)';
    title.style.textShadow = '0 0 10px var(--color)';
    title.style.animation = 'wave 1s ease-in-out infinite';
    title.style.transitionDelay = '0.1s';
    title.style.opacity = '1';
    icon.style.transform = 'rotateY(30deg) skewY(-24deg) translateY(-160px)';
    icon.style.color = 'var(--color)';
    icon.style.filter = 'drop-shadow(0 0 3px var(--color))';
    icon.style.animation = 'wave 1s ease-in-out infinite';
  }
}

/*===== html loop effect =====*/
