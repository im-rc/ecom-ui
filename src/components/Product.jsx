function Product({ product }) {
  const { id, name } = product;
  return (
    <>
      <div>
        <p>{name}</p>
        <button>Add to Cart</button>
      </div>
    </>
  );
}

export default Product;
