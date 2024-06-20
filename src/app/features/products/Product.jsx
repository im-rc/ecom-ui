function Product({ product, addItemToCart }) {
  const { id, name, price } = product;

  return (
    <>
      <div>
        <p>{name}</p>
        <p>${price}</p>
        {/* <button onClick={() => addItemToCart({ id, name, price })}>
          Add to Cart
        </button> */}
      </div>
    </>
  );
}

export default Product;
