const loveQuotes = [
  "You are the source of my joy, the center of my world and the whole of my heart.",
  "Everywhere I look I am reminded of your love. You are my world.",
  "You stole my heart, but I’ll let you keep it.",
  "I still fall for you every day."
];

function getRandomLove() {
  const random = Math.floor(Math.random() * loveQuotes.length);
  return loveQuotes[random];
}

document.addEventListener("DOMContentLoaded", () => {
  const loveBox = document.getElementById("love-quote");
  loveBox.textContent = getRandomLove();
  loveBox.addEventListener("click", () => {
    loveBox.textContent = getRandomLove();
  });
});
