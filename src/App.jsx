//import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Categories from "./pages/Categories";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <h1>Ecom App</h1>
      <Categories />
    </>
  );
}

export default App;
