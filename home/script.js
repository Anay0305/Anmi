// Change the quote text dynamically
const quoteTextElement = document.getElementById('quoteText');
const quotes = [
    '“Love is composed of a single soul inhabiting two bodies.” - Aristotle',
    '“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.” - Maya Angelou',
    '“I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.” - Nicholas Sparks',
    '“You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.” - Dr. Seuss',
    '“The best thing to hold onto in life is each other.” - Audrey Hepburn',
    '“You are the source of my joy, the center of my world, and the whole of my heart.” - Unknown',
    '“Love is not just looking at each other, it’s looking in the same direction.” - Antoine de Saint-Exupéry',
    '“I love you not because of who you are, but because of who I am when I am with you.” - Roy Croft',
    '“The greatest happiness you can have is knowing that you are loved for who you are, and nothing more.” - Angelita Lim',
    '“To love and be loved is to feel the sun from both sides.” - David Viscott',
    '“Love is like the wind, you can’t see it but you can feel it.” - Nicholas Sparks',
    '“You are the answer to every prayer I’ve offered.” - Nicholas Sparks',
    '“I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.” - Leo Christopher',
    '“Love is an endless mystery, for it has nothing else to explain it.” - Rabindranath Tagore',
    '“My heart is, and always will be, yours.” - Jane Austen'
  ];
  

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteTextElement.innerText = `${quotes[randomIndex]}`;

  // Add 'show' class to trigger the animation
  quoteTextElement.classList.add('show');

  // Remove 'show' class after the animation completes
  setTimeout(() => {
    quoteTextElement.classList.remove('show');
  }, 3000); // Adjust the time based on your animation duration
}

// Display a random quote on page load
displayRandomQuote();

// Set interval to display a new quote every 5 seconds (5000 milliseconds)
setInterval(() => {
  displayRandomQuote();
}, 6000);

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.style.visibility = (navbar.style.visibility === "hidden") ? "visible" : "hidden";
}

// typed js
const typed = new Typed(".typing", {
  strings: ["Join the coding of Robolution!","Join the era of magical Robolution!","Learn magic of technologies through projects !","Express yourself with magical English !"],
  loop: true,
  typeSpeed: 80,
  backSpeed: 40,
});

// Theme changer
const themes = [
  "#ff6600",
  "#9affe1",
  "#abff9a",
  "#ff9a9a",
  "#f5ff9a",
  "#9aadff",
  "#ffd280",
  "#adff6b",
  "#6bfaff",
  "#55F7DD",
  "#7BF774",
  "#F770F4",
  "#E2F780",
  
];
const root = document.querySelector(":root");
const themeToggle = document.querySelector("#main-name");
let currentTheme = 0;
themeToggle.addEventListener("click", () => {
  currentTheme++;
  if (currentTheme == themes.length) {
    currentTheme = 0;
  }
  root.style.setProperty("--main-accent", themes[currentTheme]);
});

const hamburger = document.querySelector("#mobile-menu");
const tabs = document.querySelector(".navbar__menu");
//display hamburger menue
const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  tabs.classList.toggle("active");
};

hamburger.addEventListener("click", mobileMenu);

// experience projects toggle
const exp = document.querySelector("#exp__btn");
const prj = document.querySelector("#prj__btn");

prj.addEventListener("click", function () {
  prj.classList.add("active__btn");
  exp.classList.remove("active__btn");
  document.querySelector("#projects").classList.remove("noshow");
  document.querySelector("#experience").classList.add("noshow");
});

exp.addEventListener("click", function () {
  exp.classList.add("active__btn");
  prj.classList.remove("active__btn");
  document.querySelector("#experience").classList.remove("noshow");
  document.querySelector("#projects").classList.add("noshow");
});

//highlight active menu
const navLogo = document.querySelector("#navbar__logo");
const highlightMenu = () => {
  const activeElement = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const resumeMenu = document.querySelector("#resume-page");
  const stackMenu = document.querySelector("#stack-page");

  let scrollPos = window.scrollY;
  if (window.innerWidth > 960 && scrollPos < 500) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 900) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    resumeMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1500) {
    resumeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    stackMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3000) {
    stackMenu.classList.add("highlight");
    resumeMenu.classList.remove("highlight");

    return;
  }

  if (
    (activeElement && window.innerWidth < 960 && scrollPos < 600) ||
    activeElement
  ) {
    activeElement.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//close mobile menu on item click
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    hamburger.classList.toggle("is-active");
    tabs.classList.remove("active");
  }
};

tabs.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);