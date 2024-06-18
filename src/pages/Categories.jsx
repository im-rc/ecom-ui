import { useState } from "react";
import Product from "../components/Product";
import productsList from "../data/productsList.json";
import { useReducer } from "react";
import { cartReducer, initialState } from "../cartReducer";
import Cart from "../components/Cart";

function Products({ category }) {
  const products = productsList.filter(
    (product) => product.category === category
  );

  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    console.log(item);
    dispatch({ type: "ADD_ITEM", payload: item });
  };
  return (
    <>
      <div>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              addItemToCart={addItemToCart}
            />
          );
        })}
        <div>
          <Cart cartState={cartState}></Cart>
        </div>
      </div>
    </>
  );
}

const Categories = () => {
  const categories = ["Chairs", "Table", "Top"];
  const [selectedCategory, setSelectCategory] = useState("Chairs");
  return (
    <>
      <div>
        <h2>Categories</h2>
        {categories.map((category, index) => (
          <button onClick={() => setSelectCategory(category)} key={index}>
            {category}
          </button>
        ))}
      </div>
      <div>
        <Products category={selectedCategory} />
      </div>
    </>
  );
};

export default Categories;
