// Get the form element
var form = document.querySelector("section form");

// Listen for the submit event on the form
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the input elements from the form
  var nameInput = form.querySelector("input[type='text']");
  var emailInput = form.querySelector("input[type='email']");
  var messageInput = form.querySelector("textarea");

  // Get the values from the inputs
  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

  // Check if all the inputs are filled
  if (name.length == 0 || email.length == 0 || message.length == 0) {
    alert("Please fill in all the fields.");
    return;
  }

  // Show a success message
  alert("Thank you for contacting us, " + name + ". We will get back to you soon.");

  // Reset the form
  form.reset();
});