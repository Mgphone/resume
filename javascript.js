document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  const languages = document.querySelectorAll(".language");
  languages.forEach((languages) => {
    const spans = languages.querySelectorAll("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].classList.add("text-bg-success");
    }
  });
});
