import { Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <h1>cart</h1>
      <p>list of products in cart</p>

      <Link to={`checkout`}>proceed to checkout</Link>
    </div>
  );
}
export default Cart;
