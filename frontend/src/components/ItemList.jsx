import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addToCart = async (itemId) => {
    await axios.post(
      "http://localhost:5000/api/carts",
      { itemId },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    alert("Item added to cart");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Items</h2>
      {items.map((item) => (
        <div key={item._id} style={{ marginBottom: "10px" }}>
          <b>{item.name}</b> - ₹{item.price}
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => addToCart(item._id)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}