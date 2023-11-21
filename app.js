function updateQuantity(inputId, delta) {
    var quantityInput = document.getElementById(inputId);
    var currentQuantity = parseInt(quantityInput.value, 10);
    var newQuantity = Math.max(1, currentQuantity + delta);
    quantityInput.value = newQuantity;
  }

  function addToCart(productId) {
    var quantityInput = document.getElementById('quantity' + productId);
    var quantity = parseInt(quantityInput.value, 10);
    var productName = document.querySelector('.product-card[data-id="' + productId + '"] .product-title').textContent;
    var productPrice = parseInt(document.querySelector('.product-card[data-id="' + productId + '"] .product-price').textContent.replace('₹ ', ''), 10);
    
    var cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productId]) {
      cart[productId].quantity += quantity;
    } else {
      cart[productId] = {
        name: productName,
        price: productPrice,
        quantity: quantity,
      };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }

  function removeItem(productId) {
    var cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productId]) {
      delete cart[productId];
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartDisplay();
    }
  }

  function updateCartDisplay() {
    var cartContainer = document.getElementById('cart');
    var cartTotalElement = document.getElementById('cart-total');
    var cart = JSON.parse(localStorage.getItem('cart')) || {};
    var cartTotal = 0;

    cartContainer.innerHTML = '';
    for (var productId in cart) {
      var item = cart[productId];
      var listItem = document.createElement('li');
      listItem.classList.add('cart-item');
      listItem.innerHTML = `
        <span>${item.name}</span>
        <span>Price: ₹ ${item.price}</span>
        <span>Quantity: ${item.quantity}</span>
        <span>Total: ₹ ${item.price * item.quantity}</span>
        <button class="remove-item-button" onclick="removeItem('${productId}')">Remove Item</button>
      `;
      cartContainer.appendChild(listItem);
      cartTotal += item.price * item.quantity;
    }

    cartTotalElement.textContent = cartTotal;
  }

  updateCartDisplay(); // Initial display
