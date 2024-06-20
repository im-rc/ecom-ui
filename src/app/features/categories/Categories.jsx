import { useState } from "react";
import Products from "../products/Products";
import "./Categories.css";

const Categories = () => {
  const categories = ["Chairs", "Table", "Top"];
  const [selectedCategory, setSelectCategory] = useState("Chairs");
  return (
    <>
      <div>
        <h2>Categories</h2>
        {categories.map((category, index) => (
          <button
            className="button-80"
            onClick={() => setSelectCategory(category)}
            key={index}
          >
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
