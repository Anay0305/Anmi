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
  navbar.style.display = (navbar.style.display === "none") ? "block" : "none";
}
