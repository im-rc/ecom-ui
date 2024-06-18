import { Link } from "react-router-dom";

function Cart({ cartState }) {
  // const clearCart = () => {
  //   dispatch({ type: "CLEAR_CART" });
  // };
  return (
    <div>
      <div>
        <h3>Cart Items:</h3>
        <ul>
          {cartState &&
            cartState.cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}{" "}
                {/* <button onClick={() => removeItemFromCart(item)}>Remove</button> */}
              </li>
            ))}
        </ul>
        <p>Total Items: {cartState && cartState.totalItems}</p>
        <p>Total Amount: ${cartState && cartState.totalAmount}</p>
        {/* <button onClick={clearCart}>Clear Cart</button> */}
      </div>

      <Link to={`checkout`}>proceed to checkout</Link>
    </div>
  );
}
export default Cart;
