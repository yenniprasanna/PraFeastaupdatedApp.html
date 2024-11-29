// Wait until the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select form elements
    const purchaseButton = document.querySelector('.btn-primary');
    const firstNameField = document.getElementById('firstName');
    const lastNameField = document.getElementById('lastName');
    const phoneField = document.getElementById('form18');
    const emailField = document.getElementById('form19');
    const address1Field = document.getElementById('form14');
    const cityField = document.getElementById('form17');
    const zipField = document.getElementById('form16');

    const orderSummary = document.querySelector('.list-group');
    const totalAmountElement = document.querySelector('.list-group .border-top strong:last-child');

    // Add event listener to the purchase button
    purchaseButton.addEventListener('click', (event) => {
        // Prevent the default behavior
        event.preventDefault();

        // Perform validation
        let isValid = true;

        clearErrors();

        if (!firstNameField.value.trim()) {
            isValid = false;
            displayError(firstNameField, 'First name is required');
        }
        if (!lastNameField.value.trim()) {
            isValid = false;
            displayError(lastNameField, 'Last name is required');
        }
        if (!phoneField.value.trim()) {
            isValid = false;
            displayError(phoneField, 'Phone number is required');
        }
        if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
            isValid = false;
            displayError(emailField, 'Valid email is required');
        }
        if (!address1Field.value.trim()) {
            isValid = false;
            displayError(address1Field, 'Address Line 1 is required');
        }
        if (!cityField.value.trim()) {
            isValid = false;
            displayError(cityField, 'City is required');
        }
        if (!zipField.value.trim()) {
            isValid = false;
            displayError(zipField, 'ZIP code is required');
        }

        // If validation passes, proceed to confirmation
        if (isValid) {
            alert('Your order has been placed successfully!');
            // Redirect to order confirmation
            window.location.href = 'order_confirmation.html';
        }
    });

    // Utility function to display error messages
    function displayError(input, message) {
        const errorMessage = document.createElement('small');
        errorMessage.className = 'error-message text-danger';
        errorMessage.textContent = message;
        input.parentNode.appendChild(errorMessage);
    }

    // Utility function to clear errors
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(error => error.remove());
    }

    // Utility function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Utility function to calculate total amount dynamically
    function calculateTotal() {
        let total = 0;

        // Iterate through order items
        orderSummary.querySelectorAll('li:not(.border-top)').forEach(item => {
            const price = parseInt(item.querySelector('span:last-child').textContent.replace('INR', '').trim());
            total += price;
        });

        totalAmountElement.textContent = `${total} INR`;
    }

    // Call the total calculation function
    calculateTotal();
});
