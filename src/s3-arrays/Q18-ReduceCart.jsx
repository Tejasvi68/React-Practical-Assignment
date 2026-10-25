
function ReduceCart() {
  const cart = [
    { item: "pen", price: 10 },
    { item: "book", price: 50 }
  ];

  const totalPrice = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  console.log("Cart:", cart);
  console.log("Total Price:", totalPrice);

  return (
    <div>
      <h3>Question 18: Reduce Cart Total</h3>

      <h4>Shopping Cart:</h4>

      <ul>
        {cart.map((product) => (
          <li key={product.item}>
            {product.item} - ₹{product.price}
          </li>
        ))}
      </ul>

      <p><strong>Total Price: ₹{totalPrice}</strong></p>
    </div>
  );
}

export default ReduceCart;
