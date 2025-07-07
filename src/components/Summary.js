import React from "react";

const ROOM_RENT = 8500; // updated rent for 3 members
const USERS = ["ARAVIND", "MANOHAR", "MAHESH"];

export default function Summary({ expenses }) {
  // Calculate monthly totals
  const currentMonth = new Date().toISOString().slice(0, 7);
  const monthlyExpenses = expenses.filter(
    exp => exp.date.slice(0, 7) === currentMonth
  );
  const total = monthlyExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const perPerson = (total + ROOM_RENT) / USERS.length;

  return (
    <div className="summary">
      <h3>Monthly Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expenses</th>
            <th>Room Rent</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {USERS.map(name => (
            <tr key={name}>
              <td>{name}</td>
              <td>₹{(total / USERS.length).toFixed(2)}</td>
              <td>₹{(ROOM_RENT / USERS.length).toFixed(2)}</td>
              <td>₹{perPerson.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td><b>Total</b></td>
            <td>₹{total.toFixed(2)}</td>
            <td>₹{ROOM_RENT.toFixed(2)}</td>
            <td>₹{(total + ROOM_RENT).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
