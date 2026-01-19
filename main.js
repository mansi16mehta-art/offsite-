// main.js
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: contactForm.name.value,
    email: contactForm.email.value,
    phone: contactForm.phone.value,
    message: contactForm.message.value,
  };

  try {
    const response = await fetch("/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      formMessage.style.color = "green";
      formMessage.textContent = result.message;
      contactForm.reset();
    } else {
      formMessage.style.color = "red";
      formMessage.textContent = result.message;
    }
  } catch (error) {
    console.error(error);
    formMessage.style.color = "red";
    formMessage.textContent = "Unable to send message. Please try again.";
  }
});
