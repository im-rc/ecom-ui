import Header from "../header/Header";

function Checkout() {
  //checkout page that collects essential user details.
  return (
    <div>
      <Header />
      <h2>Checkout Page</h2>
      <p>user information</p>
      <input placeholder="name" />
      <br />
      <br />
      <input placeholder="email" />
      <br />
      <br />
      <button>place your order</button>
    </div>
  );
}

export default Checkout;
