function Product({ product, addItemToCart }) {
  const { id, name, price } = product;

  // const removeItemFromCart = (item) => {
  //   dispatch({ type: "REMOVE_ITEM", payload: item });
  // };

  return (
    <>
      <div>
        <p>{name}</p>
        <p>${price}</p>
        <button onClick={() => addItemToCart({ id, name, price })}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default Product;
