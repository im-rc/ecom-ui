import { useDispatch } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { useState } from "react";
import "./Product.css";
import { useToast } from "@hanseo0507/react-toast";

function Product({ product }) {
  const { id, name, price } = product;
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const { toast } = useToast();

  return (
    <>
      <div className="card">
        <div className="card-container">
          <p>{name}</p>
          <p>${price}</p>

          <button
            className="button-33"
            onClick={() => {
              if (!isAdded) {
                dispatch(addItemToCart(product));
                setIsAdded(true);
                toast.success(`${name} Added to Cart`);
              }
            }}
          >
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
