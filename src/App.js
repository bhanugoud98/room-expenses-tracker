import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Summary from "./components/Summary";
import "./styles.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  if (!user) return <Login onLogin={setUser} />;

  function handleAddExpense(exp) {
    setExpenses([...expenses, exp]);
  }

  return (
    <div className="app-bg">
      <h1>Roommate Expense Tracker</h1>
      <ExpenseForm onAdd={handleAddExpense} />
      <ExpenseList expenses={expenses.filter(e => e.date === new Date().toISOString().split('T')[0])} />
      <Summary expenses={expenses} />
    </div>
  );
}

export default App;
