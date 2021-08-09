import React from "react";
import Expense from "./Expense";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === props.year;
  });
  return (
    <div className="expenses__container">
      <div className="expenses__items">
        <h1>Year Is Suppose To Be Below</h1>
        <div>
          <h1>{props.year}</h1>
        </div>
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0 && (
          <div className="no__props">
            <p>No expenses found </p>
          </div>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              title={expense.title}
              shop={expense.shop}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </div>
    </div>
  );
}

export default Expenses;

// Gonna need to Tidy up the code later.
//There is something Wrong with the Date
