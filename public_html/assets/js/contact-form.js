// === CONTACT FORM - Placeholder validation ===
// TODO: Connect to backend when ready

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const name = form.querySelector('[name="name"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      const message = form.querySelector('[name="message"]')?.value.trim();
      
      if (!name || !email || !message) {
        alert('Proszę wypełnić wszystkie pola.');
        return;
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Proszę podać prawidłowy adres email.');
        return;
      }
      
      // TODO: Send to backend
      console.log('Form data:', { name, email, message });
      alert('Dziękujemy za wiadomość! Skontaktujemy się wkrótce.');
      form.reset();
    });
  }
});
