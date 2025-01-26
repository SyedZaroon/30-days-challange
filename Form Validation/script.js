var nameError = document.getElementsByClassName("text-error")[0]; // Access the first element
var phoneError = document.getElementsByClassName("phone-error")[0];
var emailError = document.getElementsByClassName("email-error")[0];
var messageError = document.getElementsByClassName("message-error")[0];
var submitError = document.getElementsByClassName("submit-error")[0];

function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
    nameError.innerHTML = "Full name is required";
    return false;
  }

  nameError.innerHTML =
    '<i class="fas fa-check-circle" style="color: green;"></i>';
  return true;
}

function validatePhone() {
  const phone = document.getElementById("contact-phone").value

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone number is required";
    return false;
  }

  if (phone.length !== 11) {
    phoneError.innerHTML = "number should be 11 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Phone number must be numeric";
    return false;
  }

  phoneError.innerHTML =
    '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  const email = document.getElementById("email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailRegex)) {
    emailError.innerHTML = "Enter a valid email address";
    return false;
  }

  emailError.innerHTML =
    '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm(e) {
  
  if (!validateName() || !validatePhone() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the errors above";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 4000);
    return false;
  }

  else {
    submitError.style.display = "block";
    submitError.style.color = "green";
    submitError.innerHTML = "Submit Sucessfully";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 4000);
    return false;
  }
}
