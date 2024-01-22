const form = document.getElementById("signup-form");
const emailElement = document.getElementById("email");

const signupPage = document.getElementById("signup-page");
const thankyouPage = document.getElementById("thankyou-page");
const dismissButton = document.getElementById("thankyou-dismissBtn");

function validateEmailString(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

class FormElementValidator {
  constructor(formElement, validator, errorDOM) {
    this.formElement = formElement;
    this.validator = validator;
    this.errorDOM = errorDOM;
  }

  inputIsEmpty() {
    return this.formElement.value.trim().length === 0;
  }

  validateInput() {
    return this.inputIsEmpty() || this.validator(this.formElement.value);
  }

  makeErrorMessageVisible() {
    this.errorDOM.classList.add("show");
  }

  makeErrorMessageInvisble() {
    this.errorDOM.classList.remove("show");
  }

  validate() {
    if (!this.validateInput()) {
      this.makeErrorMessageVisible(this.errorDOM);
      console.log("Not valid");
    } else {
      this.makeErrorMessageInvisble(this.errorDOM);
      console.log("valid");
    }
  }
}

emailElement.addEventListener("change", () => {
  const errorDOMElement = document.getElementById("signup__validationMessage");
  const emailValidator = new FormElementValidator(
    emailElement,
    validateEmailString,
    errorDOMElement
  );

  emailValidator.validate();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  signupPage.classList.add("hidden");
  thankyouPage.classList.add("show");
});

dismissButton.addEventListener("click", () => {
  signupPage.classList.remove("hidden");
  thankyouPage.classList.remove("show");
});
