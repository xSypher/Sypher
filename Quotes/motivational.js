(function() {
  const motivationalQuotes = [
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
  ];
  const box = document.getElementById("motivational-quote");
  function show() {
    box.textContent = motivationalQuotes[
      Math.floor(Math.random() * motivationalQuotes.length)
    ];
  }
  if (box) {
    show();                   // preload
    box.addEventListener("click", show);
  }
})();
