function addToCart() {
    // Get the selected color
    let color;
    const colorInputs = document.getElementsByName('color');
    for (const input of colorInputs) {
        if (input.checked) {
            color = input.value;
            break;
        }
    }

    // Get the selected size
    let size;
    const sizeInputs = document.getElementsByName('size');
    for (const input of sizeInputs) {
        if (input.checked) {
            size = input.value;
            break;
        }
    }

    // Get the quantity
    const quantity = parseInt(document.getElementById('quantity').value);

    // Get the original and discounted prices
    const originalPrice = 1450.00; // Original price
    const discountedPrice = 1299.00; // Discounted price

    // Calculate the discount percentage
    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;

    // Calculate the total price
    const totalPrice = discountedPrice * quantity;

    // Construct the cart message
    const cartMessage = `${quantity} Embrace Sideboard with color ${color} and size ${size} Added to Cart`;

    // Update the discount into in HTML
    const discountInfo = document.getElementById('discount-info');
    discountInfo.innerHTML = `<del>$${originalPrice.toFixed(2)}</del> <span id="discount-percentage" style="color: red;">(${discountPercentage.toFixed(2)}% off)</span>`;

    // Display the total price on a new line
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    totalPriceElement.style.display = 'block';

    // Display the cart message
    const cartMessageElement = document.getElementById('cart-message');
    cartMessageElement.textContent = cartMessage;
    cartMessageElement.style.display = 'block';
}


