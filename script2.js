
  




  document.getElementById('find-slots').addEventListener('click', function () {
    const deliveryDate = document.getElementById('delivery-date').value;

    if (!deliveryDate) {
        alert('Please select a delivery date.');
        return;
    }

    // Get current date and time, and compare it with the selected date
    const today = new Date();
    const selectedDate = new Date(deliveryDate);
    
    // Remove time part for proper comparison (we only care about the date)
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    // Check if the selected date is in the past
    if (selectedDate < today) {
        alert('Please select a future date or today.');
        return;
    }

    // Get available time slots for the selected date
    const timeSlots = getAvailableTimeSlots();

    // Clear any previous time slots displayed
    const slotsContainer = document.getElementById('time-slots');
    slotsContainer.innerHTML = '';

    // Get the available slots for the selected date
    const availableSlots = timeSlots[selectedDate.toISOString().split('T')[0]] || [];

    if (availableSlots.length === 0) {
        slotsContainer.innerHTML = '<p>No available time slots for the selected date.</p>';
        return;
    }

    // Display the available time slots
    availableSlots.forEach(slot => {
        const slotDiv = document.createElement('div');
        slotDiv.classList.add('slot');
        slotDiv.textContent = slot;
        slotsContainer.appendChild(slotDiv);
    });
});

// Function to simulate fetching available time slots
function getAvailableTimeSlots() {
    // Mock time slots for different dates
    return {
        '2024-11-25': ['10:00 AM - 12:00 PM', '1:00 PM - 3:00 PM', '5:00 PM - 7:00 PM'],
        '2024-11-26': ['9:00 AM - 11:00 AM', '12:00 PM - 2:00 PM', '3:00 PM - 5:00 PM'],
        '2024-11-27': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 4:00 PM'],
        '2024-11-28': ['9:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '3:00 PM - 8:00 PM'],
        '2024-11-29': ['7:00 AM - 10:00 AM', '12:00 AM - 2:00 PM', '3:00 PM - 6:00 PM'],
        '2024-11-30': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 8:00 PM'],
        '2024-12-1': ['7:00 AM - 9:00 AM', '12:00 AM - 1:00 PM', '3:00 PM - 4:00 PM'],
        '2024-12-2': ['9:00 AM - 10:00 AM', '11:00 AM - 2:00 PM', '4:00 PM - 7:00 PM'],
        '2024-12-3': ['8:00 AM - 11:00 AM', '12:00 AM - 2:00 PM', '3:00 PM - 8:00 PM'],
        '2024-12-4': ['7:00 AM - 9:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 4:00 PM'],
        '2024-12-5': ['9:00 AM - 11:00 AM', '12:00 AM - 2:00 PM', '3:00 PM - 5:00 PM'],
        '2024-12-6': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 7:00 PM'],
        '2024-12-7': ['9:00 AM - 10:00 AM', '1:00 AM - 2:00 PM', '4:00 PM - 8:00 PM'],
        '2024-12-8': ['8:00 AM - 12:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 9:00 PM'],
        '2024-12-9': ['10:00 AM - 11:00 AM', '1:00 AM - 4:00 PM', '5:00 PM - 6:00 PM'],
        '2024-12-10': ['9:00 AM - 10:00 AM', '2:00 AM - 4:00 PM', '4:00 PM - 5:00 PM'],
        '2024-12-11': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
        '2024-12-12': ['9:00 AM - 10:00 AM', '12:00 AM - 1:00 PM', '3:00 PM - 7:00 PM'],
        '2024-12-13': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 8:00 PM'],
        '2024-12-14': ['9:00 AM - 10:00 AM', '12:00 AM - 1:00 PM', '4:00 PM - 9:00 PM'],
        '2024-12-15': ['7:00 AM - 9:00 AM', '11:00 AM - 1:00 PM', '4:00 PM - 8:00 PM'],
        '2024-12-16': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 7:00 PM'],
        '2024-12-17': ['9:00 AM - 10:00 AM', '1:00 AM - 3:00 PM', '4:00 PM - 6:00 PM'],
        '2024-12-18': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 5:00 PM'],
        '2024-12-19': ['9:00 AM - 10:00 AM', '1200 AM - 1:00 PM', '5:00 PM - 8:00 PM'],
        '2024-12-20': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 9:00 PM'],
        '2024-12-21': ['9:00 AM - 10:00 AM', '2:00 AM - 4:00 PM', '5:00 PM - 7:00 PM'],
        '2024-12-22': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
        '2024-12-23': ['7:00 AM - 9:00 AM', '11:00 AM - 1:00 PM', '4:00 PM - 8:00 PM'],
        '2024-12-24': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 9:00 PM'],
        '2024-12-25': ['9:00 AM - 10:00 AM', '1:00 AM - 2:00 PM', '3:00 PM - 5:00 PM'],
        '2024-12-26': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 6:00 PM'],
        '2024-12-27': ['7:00 AM - 10:00 AM', '12:00 AM - 1:00 PM', '4:00 PM - 7:00 PM'],
        '2024-12-28': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '7:00 PM - 8:00 PM'],
    
        '2024-12-29': ['9:00 AM - 10:00 AM', '1:00 AM - 4:00 PM', '5:00 PM - 6:00 PM'],
        '2024-12-30': ['8:00 AM - 10:00 AM', '11:00 AM - 1:00 PM', '2:00 PM - 7:00 PM'],
        '2024-12-31': ['7:00 AM - 10:00 AM', '12:00 AM - 1:00 PM', '2:00 PM - 8:00 PM'],
        '2025-1-1': ['7:00 AM - 10:00 AM', '10:00 AM - 3:00 PM', '3:00 PM - 10:00 PM'],
    
    


    };
}