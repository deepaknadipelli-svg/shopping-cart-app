import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/cart",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setItems(res.data.items || []);
    } catch (err) {
      console.error("Failed to load cart", err);
    }
  };

  if (items.length === 0) {
    return <h2 style={{ padding: "20px" }}>Cart is empty</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Cart</h2>

      {items.map((item) => (
        <div key={item._id}>
          {item.name} - ₹{item.price}
        </div>
      ))}

      <button style={{ marginTop: "20px" }}>
        Place Order
      </button>
    </div>
  );
}