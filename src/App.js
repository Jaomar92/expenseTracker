import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import Filter from "./components/Filter";
import Nav from "./components/Nav";
import NewExpense from "./components/NewExpense";

const buy = [
  {
    id: 1,
    title: "NZXT PC CASING",
    shop: "Shoppee",
    amount: 700.0,
    date: new Date(2021, 6, 30),
  },
  {
    id: 2,
    title: "NZXT Water cooler",
    shop: "Shoppee",
    amount: 700.0,
    date: new Date(2022, 6, 30),
  },
  {
    id: 3,
    title: "Crazy Horse Leather",
    shop: "Shoppee",
    amount: 200.0,
    date: new Date(2023, 7, 30),
  },
  {
    id: 4,
    title: "CSS courses",
    shop: "Udemy",
    amount: 50.0,
    date: new Date(2024, 6, 30),
  },
];

function App() {
  const [year, setYear] = useState("");

  const [items, setItems] = useState(buy);

  const toEnlist = (e) => {
    const expenseData = {
      ...e,
      id: Math.floor(Math.random()),
    };
    setItems((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  /*Adding an id fixed the Problem*/
  const onChangeFilter = (selectedYear) => {
    setYear(selectedYear);
  };
  return (
    <div className="App">
      <Nav />
      <div className="header">
        <h1> Welcome to Jeffs SPA </h1>
      </div>
      <div className="form__expense">
        <NewExpense onSaveData={toEnlist} />
      </div>
      <div className="filter">
        <Filter onChangeFilter={onChangeFilter} year={year} />
      </div>
      <div className="expenses">
        <Expenses items={items} year={year} />
      </div>
    </div>
  );
}

export default App;
