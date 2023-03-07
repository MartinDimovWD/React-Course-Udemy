import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  { id: 1, title: "Car Insurance", amount: 294.67, date: new Date(2022, 2, 2) },
  { id: 2, title: "Electricity", amount: 63.55, date: new Date(2022, 2, 12) },
  { id: 3, title: "Groceries", amount: 189.78, date: new Date(2022, 2, 21) },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
