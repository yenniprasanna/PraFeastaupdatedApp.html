// Sample cart items to simulate an API call
const foodItems = [
    { id: 1, name: 'Pizza', price: 12.99, quantity: 1 },
    { id: 2, name: 'Burger', price: 9.99, quantity: 2 },
    { id: 3, name: 'Pasta', price: 14.49, quantity: 1 },
  ];
  
  // Initial render of the cart items
  document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
  });
  
  // Function to render cart items
  function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';  // Clear any existing items
  
    foodItems.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
  
      cartItem.innerHTML = `
        <span>${item.name} - $${item.price} x ${item.quantity}</span>
        <button onclick="removeItem(${item.id})">Remove</button>
      `;
  
      cartContainer.appendChild(cartItem);
    });
  
    updateTotal();
  }
  
  // Function to remove an item from the cart
  function removeItem(itemId) {
    const itemIndex = foodItems.findIndex(item => item.id === itemId);
    if (itemIndex !== -1) {
      foodItems.splice(itemIndex, 1);
      renderCartItems();
    }
  }
  
  // Function to update the cart total
  function updateTotal() {
    const total = foodItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('cart-total').innerText = total.toFixed(2);
  }
  