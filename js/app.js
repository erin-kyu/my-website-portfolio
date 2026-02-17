function handleFormSubmit(event) {
    event.preventDefault();

    const name    = document.getElementById('input-name').value;
    const email   = document.getElementById('input-email').value;
    const subject = document.getElementById('input-subject').value;
    const message = document.getElementById('input-message').value;

    console.log('--- Contact Form Submitted ---');
    console.log('Name:',    name);
    console.log('Email:',   email);
    console.log('Subject:', subject);
    console.log('Message:', message);
    console.log('Full form data:', { name, email, subject, message });

    const status = document.getElementById('form-status');
    status.textContent = 'Submitted! Check the console.';
    status.style.color = '#c4572a';

    document.getElementById('contact-form').reset();
}
