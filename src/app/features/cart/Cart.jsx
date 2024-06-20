import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { items, totalPrice, totalQuantity } = cart;

  return (
    <div>
      <div>
        <h3>Cart Items: {totalQuantity}</h3>
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} - id:{item.id}
                {/* <button onClick={() => removeItemFromCart(item)}>Remove</button> */}
              </li>
            ))}
        </ul>
        <p>Total Amount: ${totalPrice}</p>
        {/* <button onClick={clearCart}>Clear Cart</button> */}
      </div>
      <div className="button-89">
        <Link className="link" to={`checkout`}>
          Checkout
        </Link>
      </div>
    </div>
  );
}
export default Cart;
