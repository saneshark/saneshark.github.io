document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // Add code to handle form submission here (e.g., sending data to a server)
      alert("Form submitted successfully!");
    });
});
