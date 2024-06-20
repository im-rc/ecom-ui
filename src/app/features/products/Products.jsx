import Product from "./Product";
import productsList from "../../data/productsList.json";

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

export default Products;
