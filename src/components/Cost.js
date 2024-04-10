import React, { useState } from "react";
import "./cost.css";
import Summary from "./Summary";

function OhItem(props) {
  return (
    <div className="oh-item">
      <div style={{ flex: 4 }}>
        <input
          value={props.data.description}
          placeholder="Description"
          onChange={(event) => {
            props.setItemValue("description", event.target.value);
          }}
        />
      </div>
      <div style={{ flex: 1 }}>
        <input
          value={props.data.amount}
          placeholder="amount"
          onChange={(event) => {
            props.setItemValue("amount", event.target.value);
          }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <div className="dropdown">
          <div className="dropdown-select">{props.data.occurance}</div>
          <div className="dropdown-options">
            <div
              className="dropdown-option"
              onClick={() => props.setItemValue("occurance", "monthly")}
            >
              Monthly
            </div>
            <div
              className="dropdown-option"
              onClick={() => props.setItemValue("occurance", "annually")}
            >
              Annually
            </div>
          </div>
        </div>
        {props.totalItems > 1 && (
          <button className="delete-button" onClick={props.deleteItem}>
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default function Cost() {
  const [ohItems, setOhItem] = useState([
    {
      description: "",
      amount: 0,
      occurance: "monthly",
    },
  ]);

  const getTotalAmount = () => {
    let total = 0;
    ohItems.forEach((ohItem) => {
      total +=
        ohItem.occurance === "monthly"
          ? parseFloat(ohItem.amount)
          : parseFloat(ohItem.amount) / 12;
    });
    return total;
  };

  return (
    <div className="oh-container">
      <div className="oh-header">
        <div style={{ flex: 4 , color:"#3D475C" , fontSize:"14px"}}>Description</div>
        <div style={{ flex: 1 , color:"#3D475C" , fontSize:"14px" }}>Amount</div>
        <div style={{ flex: 2 , color:"#3D475C" ,fontSize:"14px"}}>Occurrence</div>
      </div>
      <div className="oh-list">
        {ohItems.map((ohItem, idx) => {
          return (
            <OhItem
              totalItems={ohItems.length}
              setItemValue={(key, value) => {
                const items = [...ohItems];
                items[idx] = {
                  ...items[idx],
                  [key]: value,
                };
                setOhItem(items);
              }}
              deleteItem={() => {
                const items = [...ohItems];
                items.splice(idx, 1);
                setOhItem(items);
              }}
              data={ohItem}
              key={`ohitem_${idx}`}
            />
          );
        })}
      </div>
      <div>
        <button
          className="add"
          onClick={() => {
            setOhItem([
              ...ohItems,
              {
                description: "",
                amount: 0,
                occurance: "monthly",
              },
            ]);
            getTotalAmount();
          }}
        >
          Add Item
        </button>
      </div>
      <div className="summary-container">
        <Summary totalAmount={getTotalAmount()} />
      </div>
    </div>
  );
}
