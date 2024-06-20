import "./App.css";
import Categories from "./features/categories/Categories";
import Cart from "./features/cart/Cart";
import Header from "./features/header/Header";
function App() {
  return (
    <>
      <Header />
      <div class="row">
        <div class="column">
          <Categories />
        </div>
        <div class="column">
          <Cart />
        </div>
      </div>
    </>
  );
}

export default App;
