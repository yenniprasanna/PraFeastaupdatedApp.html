// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get form elements
    const form = document.getElementById('form');
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('msg');

    // Add a submit event listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting immediately

        // Validate form fields
        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const message = messageField.value.trim();
        
        let isValid = true;

        // Clear previous error messages
        form.querySelectorAll('.error-message').forEach(error => error.remove());

        // Name validation
        if (!name) {
            isValid = false;
            displayError(nameField, 'Name is required');
        }

        // Email validation
        if (!email) {
            isValid = false;
            displayError(emailField, 'Email is required');
        } else if (!isValidEmail(email)) {
            isValid = false;
            displayError(emailField, 'Invalid email format');
        }

        // Message validation
        if (!message) {
            isValid = false;
            displayError(messageField, 'Message is required');
        }

        // If valid, process the form submission
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form fields
        }
    });

    // Utility function to display error messages
    function displayError(input, message) {
        const errorMessage = document.createElement('small');
        errorMessage.className = 'error-message text-danger';
        errorMessage.textContent = message;
        input.parentNode.appendChild(errorMessage);
    }

    // Utility function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
