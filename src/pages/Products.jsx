import Product from "../components/Product";

function Products() {
  const productsList = [
    {
      id: 1,
      name: "Lounge Chair",
      price: 2000,
      category: "Chairs",
    },
    {
      id: 2,
      name: "Dining Chair",
      price: 1800,
      category: "Chairs",
    },
    {
      id: 3,
      name: "Table1",
      price: 3000,
      category: "Table",
    },
    {
      id: 4,
      name: "Table2",
      price: 3200,
      category: "Table",
    },
    {
      id: 5,
      name: "Table3",
      price: 3100,
      category: "Table",
    },
    {
      id: 5,
      name: "Dining Top",
      price: 900,
      category: "Top",
    },
  ];

  return (
    <>
      <h2>List of products</h2>
      {productsList.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </>
  );
}

export default Products;
