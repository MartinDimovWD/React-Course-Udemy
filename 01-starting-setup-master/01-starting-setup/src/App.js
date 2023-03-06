import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 2),
    },
    {
      title: "Electricity",
      amount: 63.55,
      date: new Date(2022, 2, 12),
    },
    {
      title: "Groceries",
      amount: 189.78,
      date: new Date(2022, 2, 21),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
}

export default App;
