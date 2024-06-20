import Header from "../header/Header";
import UserForm from "./UserForm";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Checkout() {
  //checkout page that collects essential user details.
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h2>
        <IoArrowBackOutline
          onClick={() => {
            navigate("/");
          }}
        />{" "}
        Checkout
      </h2>
      <UserForm />
    </div>
  );
}

export default Checkout;
