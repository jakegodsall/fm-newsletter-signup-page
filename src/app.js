// Form elements
const formElement = document.getElementById("signup-form");
const emailInputElement = document.getElementById("email");
const submitButtonElement = document.getElementById("signup-submitButton");

const signupPage = document.getElementById("signup-page");
const thankyouPage = document.getElementById("thankyou-page");
const dismissButton = document.getElementById("thankyou-dismissBtn");

function validateEmailString(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

class FormInputElementValidator {
  constructor(
    inputElement,
    errorMessageElement,
    submitButtonElement,
    validator
  ) {
    this.inputElement = inputElement;
    this.errorMessageElement = errorMessageElement;
    this.submitButtonElement = submitButtonElement;
    this.validator = validator;
  }

  inputIsEmpty() {
    return this.inputElement.value.trim().length === 0;
  }

  validateInput() {
    return this.inputIsEmpty() || this.validator(this.inputElement.value);
  }

  validateAndRender() {
    if (!this.validateInput()) {
      this.inputElement.classList.add("error-state");
      this.errorMessageElement.classList.add("show");
      this.submitButtonElement.classList.add("error-state");
    } else {
      this.inputElement.classList.remove("error-state");
      this.errorMessageElement.classList.remove("show");
      this.submitButtonElement.classList.remove("error-state");
    }

    return this.validateInput();
  }
}

const errorMessageElementElement = document.getElementById(
  "signup__validationMessage"
);

const emailValidator = new FormInputElementValidator(
  emailInputElement,
  errorMessageElementElement,
  submitButtonElement,
  validateEmailString
);

emailInputElement.addEventListener("change", () => {
  emailValidator.validateAndRender();
});

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailValidator.validateInput()) {
    signupPage.classList.add("hidden");
    thankyouPage.classList.add("show");
  }
});

dismissButton.addEventListener("click", () => {
  signupPage.classList.remove("hidden");
  thankyouPage.classList.remove("show");
});
