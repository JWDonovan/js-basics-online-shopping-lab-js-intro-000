var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let obj = { itemName: item };
 obj.itemPrice = Math.floor(Math.random() * (100 - 1) + 1);

 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    let string = 'In your cart, you have ';

    for (let i = 0; i < cart.length; i++) {
      let plus = `${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;

      if (cart.length === 1) {
        string += plus;
      } else {
        string += plus + ', ';
      }
    }

    return string + '.';
  }
}

function total() {
  // write your code here
  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseInt(cart[i].itemPrice);
  }

  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  let index = getCart().indexOf()
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == 'undefined') {
    return 'Sorry, we don\'t have a credit card on file for you.';
  } else {

  }
}
