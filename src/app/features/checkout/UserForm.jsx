import React, { useState } from "react";
import "./UserForm.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useToast } from "@hanseo0507/react-toast";
import { clearCart } from "../cart/cartSlice";

const UserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { items, totalPrice } = cart;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const getOrderInformation = () => {
    const cartItems = items.map((item) => ({
      id: item.id,
      category: item.category,
    }));
    const payload = {
      user: {
        name: username,
        email: email,
      },
      order: {
        amount: totalPrice,
        items: cartItems,
      },
    };

    return payload;
  };

  const placeOrder = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/order", data);
      console.log("Response:", response.data);
      // Handle success
      toast.success("Order placed successfully");

      //clear the form after submission
      setUsername("");
      setEmail("");

      //clear the cart
      dispatch(clearCart());
      //navigate to home
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      // Handle error - for example, show an error message
      toast.error("sorry! cannot accept orders now");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getOrderInformation();

    //make an api call
    placeOrder(data);
  };

  return (
    <form className="user-form-container" onSubmit={handleSubmit}>
      <p>please provide your information : </p>
      <div>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
          placeholder="username"
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
          placeholder="email"
        />
      </div>
      <p style={{ fontSize: "20px" }}>Total Amount: ${totalPrice}</p>
      <button type="submit" className="button-41">
        place your order
      </button>
    </form>
  );
};

export default UserForm;
