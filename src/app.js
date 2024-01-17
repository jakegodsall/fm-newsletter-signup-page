const form = document.getElementById("signup__form");

const mainPage = document.getElementById("main-page");
const thankyouPage = document.getElementById("thankyou-page");
const dismissButton = document.getElementById("thankyou__dismissBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  mainPage.classList.add("hidden");
  thankyouPage.classList.add("show");
});

dismissButton.addEventListener("click", () => {
  mainPage.classList.remove("hidden");
  thankyouPage.classList.remove("show");
});
