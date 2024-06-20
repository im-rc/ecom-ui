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
            style={
              category == selectedCategory
                ? { backgroundColor: "black", color: "white" }
                : { backgroundColor: "white" }
            }
            className="button-80"
            onClick={() => setSelectCategory(category)}
            key={index}
          >
            {category == "Table" && "Tables"}
            {category == "Top" && "Tops"}
            {category == "Chairs" && "Chairs"}
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
