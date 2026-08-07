import { useState, useEffect } from "react";
import axios from "axios";

export default function Orders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-9188.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="order-container">
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Order Type</th>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.mode}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
