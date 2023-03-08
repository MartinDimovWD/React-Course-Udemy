import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const addExpenseFormHandler = () => {
    setContent(
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={onCancelHandler}
      />
    );
  };
  const addExpenseBtn = (
    <button onClick={addExpenseFormHandler}>Add Expense</button>
  );

  const [content, setContent] = useState(addExpenseBtn);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const onCancelHandler = () => {
    setContent(addExpenseBtn);
  };

  return <div className="new-expense">{content}</div>;
}

export default NewExpense;
