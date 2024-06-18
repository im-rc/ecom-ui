import { useState } from "react";
import Product from "../components/Product";
import productsList from "../data/productsList.json";

function Products({ category }) {
  const products = productsList.filter(
    (product) => product.category === category
  );

  return (
    <>
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
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
