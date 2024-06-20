import "./App.css";
import Categories from "./features/categories/Categories";
import Cart from "./features/cart/Cart";
import Header from "./features/header/Header";
function App() {
  return (
    <>
      <Header />
      <div className="row">
        <div className="column">
          <Categories />
        </div>
        <div className="column">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
