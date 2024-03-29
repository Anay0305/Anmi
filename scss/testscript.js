// Connection URI
const uri = "http://localhost:3000/api/moments";

// Function to fetch memorable moments from the backend
async function fetchMemorableMoments() {
  try {
    const response = await fetch(uri, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (!response.ok) {
      console.error('Failed to fetch memorable moments');
    }
    const moments = await response.json();
    console.log(moments)
    return moments;
  } catch (error) {
    console.error('Error fetching memorable moments:', error);
    throw error;
  }
}

// Function to add a new memorable moment to the backend
async function addMemorableMoment(date, message) {
  try {
    const response = await fetch(uri, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ date, message }),
    });
    if (!response.ok) {
      throw new Error('Failed to add memorable moment');
    }
    const newMoment = await response.json();
    return newMoment;
  } catch (error) {
    console.error('Error adding memorable moment:', error);
    throw error;
  }
}


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

function hexToRgb(hex) {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse hexadecimal components
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Return RGB representation
  return `rgba(${r}, ${g}, ${b}, 0.7)`;
}

function checkPASS() {  
  const passwordInput = document.getElementById("love_code");
  const password = passwordInput.value;

  if (password === "Anmi@2911") {
      document.querySelector("#before_memo_questions").classList.add("noshow");
      document.querySelector("#memo_qts").classList.remove("noshow");
      passwordInput.value = "";
  } else {
    passwordInput.value = "";
    document.querySelector("#love_code").classList.add("noshow");
    document.querySelector("#btn_submit").classList.add("noshow");
    document.querySelector("#btn_update").classList.remove("noshow");
  }
}

const root = document.querySelector(":root");
const themeToggle = document.querySelector("#navbar__logo");
let currentTheme = 0;
themeToggle.addEventListener("click", () => {
  currentTheme++;
  if (currentTheme == themes.length) {
    currentTheme = 0;
  }
  root.style.setProperty("--main-accent", themes[currentTheme]);
  root.style.setProperty("--secondary", hexToRgb(themes[currentTheme]));
});

const hamburger = document.querySelector("#mobile-menu");
const tabs = document.querySelector(".navbar__menu");
//display hamburger menue
const mobileMenu = () => {
  hamburger.classList.toggle("is-active");
  tabs.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", async function () {
  // Fetch and display memorable moments from the backend
  try {
    const moments = await fetchMemorableMoments();
    console.log(moments)
    moments.forEach(data => {
      appendTimelineMessages(data, "memorable");
    });
  } catch (error) {
    console.error('An error occurred:', error);
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
  });
}

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
  document.querySelector("#btn_submit").classList.remove("noshow");
  document.querySelector("#btn_update").classList.add("noshow");
});

const submitButton = document.getElementById('btn_submit_memo');

// Add event listener to the submit button
submitButton.addEventListener('click', () => {
    // Get input values
    var date = document.querySelector('.input_date_memo').value;
    var message = document.querySelector('.input_text_memo').value;

    addMemorableMoment(date, message)
    const container = document.getElementById(memorable);
    if (!container) return;
  
    const timelineList = container.querySelector("ul");
    const listItem = document.createElement("li");
    const h1 = message.date ? `<h1>${formatDate(date)}</h1>` : "";
    const messageContent = `
      <div class="timeline__content">
        ${h1}
        <p>${message}</p>
      </div>
    `;
    listItem.innerHTML = messageContent;
    timelineList.appendChild(listItem);
    document.querySelector("#love_code").classList.add("noshow");
    document.querySelector("#btn_submit").classList.add("noshow");
    document.querySelector("#btn_update").classList.remove("noshow");
});

//highlight active menu
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