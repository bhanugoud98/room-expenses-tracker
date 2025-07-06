import React from "react";

export default function ExpenseList({ expenses }) {
  return (
    <div className="expense-list">
      <h3>Today's Expenses</h3>
      <ul>
        {expenses.map((exp, idx) => (
          <li key={idx}>
            {exp.item} - ₹{exp.amount} ({exp.date})
            {exp.image && <img src={exp.image} alt="receipt" width="50" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
