//import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <h1>Ecom App</h1>
      <Categories />
      <Link to={`cart`}>Cart</Link>
      <Outlet />
    </>
  );
}

export default App;
