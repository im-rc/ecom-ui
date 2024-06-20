import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { useState } from "react";
import "./Product.css";

function Product({ product }) {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);

  return (
    <>
      <div class="card">
        <div class="card-container">
          <p>{name}</p>
          <p>${price}</p>
          {!isAdded ? (
            <button
              className="button-33"
              onClick={() => {
                dispatch(addItemToCart(product));
                setIsAdded(true);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <p>Added</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
