const motivationalQuotes = [
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it."
];

function getRandomMotivational() {
  const random = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[random];
}

document.addEventListener("DOMContentLoaded", () => {
  const motivationalBox = document.getElementById("motivational-quote");
  motivationalBox.textContent = getRandomMotivational();
  motivationalBox.addEventListener("click", () => {
    motivationalBox.textContent = getRandomMotivational();
  });
});
