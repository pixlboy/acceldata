import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import StarRating from "./StarRating/StarRating";

function Summary() {
  const [items, setItems] = useState([]);
  const [itemsCopy, setItemsCopy] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("items")) {
      setItems(JSON.parse(localStorage.getItem("items")));
      setItemsCopy(JSON.parse(localStorage.getItem("items")));
    }
  }, []);

  const searchByName = (value) => {
    const temp = items.filter((item) => {
      return item.Name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
    setItemsCopy(temp);
  };

  return (
    <div>
      <h1>Summary</h1>
      <div>
        <Table className="w-100">
          <thead>
            <tr>
              <th>
                Customer{" "}
                <input
                  type="text"
                  defaultValue=""
                  placeholder="Search Customer"
                  onChange={(e) => searchByName(e.target.value)}
                />
              </th>
              <th>Bun</th>
              <th>Cheese</th>
              <th>Cutlets</th>
              <th>Salad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsCopy.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.Name}</td>
                  <td>{item.Bun}</td>
                  <td>{item.Cheese}</td>
                  <td>{item.Cutlets}</td>
                  <td>{item.Salad}</td>
                  <td>{item.Total}</td>
                  <td>
                    <StarRating />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Summary;
