(function() {
  const loveQuotes = [
    "You are the source of my joy, the center of my world and the whole of my heart.",
    "Everywhere I look I am reminded of your love. You are my world.",
    "You stole my heart, but I’ll let you keep it.",
    "I still fall for you every day."
  ];
  const box = document.getElementById("love-quote");
  function show() {
    box.textContent = loveQuotes[
      Math.floor(Math.random() * loveQuotes.length)
    ];
  }
  if (box) {
    show();                   // preload
    box.addEventListener("click", show);
  }
})();
