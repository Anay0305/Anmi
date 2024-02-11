function appendToInput(number) {
    var userInput = document.getElementById('lock_inputDisplay').textContent;
    if (userInput.length < 4) {
        userInput += number;
        updateInputDisplay(userInput);
    }
}

function clearInput() {
    var userInput = document.getElementById('lock_inputDisplay').textContent;
    userInput = userInput.slice(0, -1);
    updateInputDisplay(userInput);
}

function updateInputDisplay(userInput) {
    document.getElementById('lock_inputDisplay').textContent = userInput;
}

function checkPIN() {
    fetch("database.json")
      .then(response => response.json())
      .then(data => {
        var correctAnswer = data.pin;
        var userInput = document.getElementById('lock_inputDisplay').textContent;
        if (userInput === correctAnswer) {
            document.getElementById('testing').classList.remove('noshow');
            document.querySelector('.bg').classList.add('fade-out');
            setTimeout(() => {
              window.location.href = "#home";
          }, 1000);
            setTimeout(() => {
                document.querySelector('.lock_container').remove();
            }, 500);
            document.body.classList.remove('no-scroll');
        } else {
            alert("Incorrect PIN. Please try again.");
            userInput = ''; // Clear PIN input
            updateInputDisplay(userInput);
        }
      });
}

const quoteTextElement = document.getElementById('quoteText');

// Function to display a random quote
function displayRandomQuote() {
  fetch("database.json")
      .then(response => response.json())
      .then(data => {
        const quotes = data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteTextElement.innerText = `${quotes[randomIndex]}`;
        // Add 'show' class to trigger the animation
        quoteTextElement.classList.add('show');
        // Remove 'show' class after the animation completes
        setTimeout(() => {
          quoteTextElement.classList.remove('show');
        }, 3000); // Adjust the time based on your animation duration
      });
}
// Display a random quote on page load
displayRandomQuote();
// Set interval to display a new quote every 5 seconds (5000 milliseconds)
setInterval(() => {
  displayRandomQuote();
}, 6000);

function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');  // Parse hexadecimal components
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  // Return RGB representation
  return `rgba(${r}, ${g}, ${b}, 0.7)`;
}
const root = document.querySelector(":root");
const themeToggle = document.querySelector("#navbar__logo");
let currentTheme = 0;
themeToggle.addEventListener("click", () => {
  fetch("database.json")
      .then(response => response.json())
      .then(data => {
        const themes = data.themes;
        currentTheme++;
        if (currentTheme == themes.length) {
          currentTheme = 0;
        }
        root.style.setProperty("--main-accent", themes[currentTheme]);
        root.style.setProperty("--secondary", hexToRgb(themes[currentTheme]));
      });
});

const stamp = document.querySelector('.stamp');
const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');
const special___ = document.querySelector('.special__section');
const h_special = document.getElementById('heading_special');

let isFlapped = false;

stamp.addEventListener('click', () => {
  stamp.style.visibility = "hidden";
  letter.style.visibility = "visible";
  envelope.classList.add('flap');
  h_special.classList.add('noshow')
  setTimeout(() => {
    envelope.classList.add('closed');
  }, 2000);
  setTimeout(() => {
    envelope.style.visibility = "hidden";
  }, 2000);
  isFlapped = true;
});

letter.addEventListener('click', () => {
  envelope.classList.add('e_open');
  envelope.classList.remove('closed');
  setTimeout(() => {
    envelope.style.visibility = "visible";
    envelope.classList.remove('flap');
    letter.style.visibility = "hidden";
    stamp.style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    envelope.classList.add('e_close');
    h_special.classList.remove('noshow');
  }, 3000)
  setTimeout(() => {
    envelope.classList.remove('e_close');
    envelope.classList.remove('e_open');
  }, 4000)
  isFlapped = false;
});

const hamburger = document.querySelector("#mobile-menu");
const tabs = document.querySelector(".navbar__menu");
//display hamburger menue
const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  tabs.classList.toggle("active");
};
// script.js

document.addEventListener("DOMContentLoaded", function () {
  fetch("database.json")
    .then(response => response.json())
    .then(data => {
      appendTimelineMessages(data.memorableMoments, "memorable");
    });
  });

document.addEventListener("DOMContentLoaded", function() {
  const imageContainer = document.getElementById("imageContainer");
  const numberOfImages = 12; // Assuming you have 8 images

  // Loop through each image and create span elements with img elements inside
  for (let i = 1; i <= numberOfImages; i++) {
    const span = document.createElement("span");
    span.style.setProperty("--i", i);

    const img = document.createElement("img");
    img.src = `Photos/L${i}.jpg`; // Set the source dynamically
    img.alt = `Image ${i}`;

    span.appendChild(img);
    imageContainer.appendChild(span);
  }
});

function appendTimelineMessages(messages, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const timelineList = container.querySelector("ul");
  messages.forEach(message => {
    const listItem = document.createElement("li");
    const h1 = message.date ? `<h1>${formatDate(message.date)}</h1>` : "";
    const messageContent = `
      <div class="timeline__content">
        ${h1}
        <p>${message.message}</p>
      </div>
    `;
    listItem.innerHTML = messageContent;
    timelineList.appendChild(listItem);
  });}

function formatDate(dateString) {
  const day = parseInt(dateString.substring(8));
  const month = parseInt(dateString.substring(5, 7));
  const year = parseInt(dateString.substring(0,4));
  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    return `${day}${ordinalSuffixOf(day)} ${monthNames[month - 1]}, ${year}`;
  }

  function ordinalSuffixOf(n) {
    const s=["th","st","nd","rd"], v=n%100;
    return (s[(v-20)%10]||s[v]||s[0]);
  }
hamburger.addEventListener("click", mobileMenu);
const update_btn = document.querySelector("#btn_update");
update_btn.addEventListener("click", function () {
  document.querySelector("#love_code").classList.remove("noshow");
  document.querySelector("#btn_update").classList.remove("update_btn");
  document.querySelector("#btn_update").classList.add("submit_btn");
  document.querySelector("#btn_update").textContent = "Submit";
});
const navLogo = document.querySelector("#navbar__logo");
const highlightMenu = () => {
  const activeElement = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#gallery-page");
  const resumeMenu = document.querySelector("#memories-page");
  const stackMenu = document.querySelector("#special-page");
  let scrollPos = window.scrollY;
  if (window.innerWidth > 960 && scrollPos < 500) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    resumeMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2300) {
    resumeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    stackMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 4000) {
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

const els = document.querySelectorAll("[type='radio']");
for (const el of els)
  el.addEventListener("input", e => reorder(e.target, els));
reorder(els[0], els);

function reorder(targetEl, els) {
  const nItems = els.length;
  let processedUncheck = 0;
  for (const el of els) {
    const containerEl = el.nextElementSibling;
    if (el === targetEl) {//checked radio
      containerEl.style.setProperty("--w", "100%");
      containerEl.style.setProperty("--l", "0");
    }
    else {//unchecked radios
      containerEl.style.setProperty("--w", `${100/(nItems-1)}%`);
      containerEl.style.setProperty("--l", `${processedUncheck * 100/(nItems-1)}%`);
      processedUncheck += 1;
    }
  }
}