import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { items, totalPrice, totalQuantity } = cart;

  return (
    <div className="cart">
      <div>
        {!totalQuantity ? (
          <h3>
            <FiShoppingCart /> shopping cart is empty
          </h3>
        ) : (
          <h3>
            {" "}
            <FiShoppingCart /> Cart Items: ({totalQuantity}){" "}
          </h3>
        )}

        {items &&
          items.map((item) => (
            <div className="cart-item" key={item.id}>
              {item.name} - ${item.price}
            </div>
          ))}

        {items.length ? (
          <p style={{ fontSize: "20px" }}>Total Amount: ${totalPrice}</p>
        ) : (
          " "
        )}
      </div>
      {items.length ? (
        <div className="button-89">
          <Link className="link" to={`checkout`}>
            Checkout
          </Link>
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
export default Cart;
