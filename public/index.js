const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formMessage.textContent = 'Thank you for your message!';
      formMessage.style.color = 'green';
      form.reset();
    } else {
      formMessage.textContent = 'Oops! Something went wrong.';
      formMessage.style.color = 'red';
    }
  } catch (error) {
    formMessage.textContent = 'Oops! Something went wrong.';
    formMessage.style.color = 'red';
  }
});
