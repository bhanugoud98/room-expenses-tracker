import React, { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!item || !amount) return;
    onAdd({
      item,
      amount: parseFloat(amount),
      date: new Date().toISOString().split('T')[0],
      image,
    });
    setItem("");
    setAmount("");
    setImage(null);
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result);
      reader.readAsDataURL(file);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <input
        placeholder="Item name"
        value={item}
        onChange={e => setItem(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        required
      />
      <input type="file" accept="image/*" onChange={handleImage} />
      <button type="submit">Add Expense</button>
    </form>
  );
}
