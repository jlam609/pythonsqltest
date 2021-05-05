import React, { useState } from "react";
import { Typography, Button, TextField } from "@material-ui/core";

const Budget: React.FC = () => {
  let [item, setItem] = useState("");
  let [amount, setAmount] = useState(0);
  let [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        item: item,
        amount: amount,
      },
    ]);
    setAmount(0);
    setItem("");
  };
  return (
    <div className="budget-container">
      <Typography variant="h1"> Welcome to Budget Assistance</Typography>
      <Typography variant="h3"> Add Item Here</Typography>
      {list && list.length
        ? list.map((listItem, idx) => {
            return (
              <div key={idx}>
                <p>{listItem.item}</p>
                <p>{listItem.amount}</p>
              </div>
            );
          })
        : null}
      <form onSubmit={handleSubmit}>
        <TextField
          label="Item"
          placeholder="Enter Item Name Here"
          value={item}
          onChange={(e) => {
            e.stopPropagation();
            setItem(e.target.value);
          }}
        />
        <hr />
        <TextField
          label="Amount"
          value={amount}
          onChange={(e) => {
            e.stopPropagation();
            let newAmount = parseInt(e.target.value)
              ? parseInt(e.target.value)
              : !e.target.value
              ? 0
              : amount;
            setAmount(newAmount);
          }}
        />
        <hr />
        <Button disabled={item && amount ? false : true} onClick={handleSubmit}>
          Submit Item
        </Button>
      </form>
    </div>
  );
};

export default Budget;
