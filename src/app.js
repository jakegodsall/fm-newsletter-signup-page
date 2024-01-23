// Retrieving DOM elements for form and its components
const formElement = document.getElementById("signup-form");
const emailInputElement = document.getElementById("email");
const submitButtonElement = document.getElementById("signup-submitButton");
const errorMessageElement = document.getElementById(
  "signup__validationMessage"
);

// Pages
const signupPage = document.getElementById("signup-page");
const thankyouPage = document.getElementById("thankyou-page");

// Thankyou Page elements
const dismissButton = document.getElementById("thankyou-dismissBtn");

// Function to validate an email string using a regular expression
function validateEmailString(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Class to handle the validation of a form input element
class FormInputElementValidator {
  constructor(
    inputElement,
    errorMessageElement,
    submitButtonElement,
    validator
  ) {
    this.inputElement = inputElement; // The input element to be validated
    this.errorMessageElement = errorMessageElement; // Element to display error message
    this.submitButtonElement = submitButtonElement; // Submit button of the form
    this.validator = validator; // Validation function to use
  }

  // Method to check if the input field is empty
  isEmpty() {
    return this.inputElement.value.trim().length === 0;
  }

  // Method to check if the input is valid (not empty and passes the validator function)
  isValid() {
    return !this.isEmpty() && this.validator(this.inputElement.value);
  }

  // Method to validate the input and update the UI accordingly
  validateAndRender() {
    if (!this.isValid()) {
      this.inputElement.classList.add("error-state");
      this.errorMessageElement.classList.add("show");
      this.submitButtonElement.classList.add("error-state");
    } else {
      this.inputElement.classList.remove("error-state");
      this.errorMessageElement.classList.remove("show");
      this.submitButtonElement.classList.remove("error-state");
    }

    return this.isValid();
  }
}

// Create an instance of FormInputElementValidator for email validation
const emailValidator = new FormInputElementValidator(
  emailInputElement,
  errorMessageElement,
  submitButtonElement,
  validateEmailString
);

// EVENT LISTENERS

// Add event listener for change event on email input for validation
emailInputElement.addEventListener("change", () => {
  emailValidator.validateAndRender();
});

// Add event listener for form submission
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailValidator.isEmpty() || !emailValidator.isValid()) {
    emailValidator.validateAndRender();
  } else {
    const fd = new FormData(formElement);
    const obj = Object.fromEntries(fd.entries());

    const emailElement = document.getElementById("thankyou-email");

    emailElement.innerText = obj.email;

    signupPage.classList.add("hidden");
    thankyouPage.classList.add("show");
  }
});

// Add event listener for dismiss button on thank you page
dismissButton.addEventListener("click", () => {
  signupPage.classList.remove("hidden");
  thankyouPage.classList.remove("show");
});
