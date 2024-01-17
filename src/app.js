const form = document.getElementById("signup-form");

const signupPage = document.getElementById("signup-page");
const thankyouPage = document.getElementById("thankyou-page");
const dismissButton = document.getElementById("thankyou-dismissBtn");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  signupPage.classList.add("hidden");
  thankyouPage.classList.add("show");
});

dismissButton.addEventListener("click", () => {
  signupPage.classList.remove("hidden");
  thankyouPage.classList.remove("show");
});
