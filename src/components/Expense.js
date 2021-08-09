import React from "react";
import "./Expense.css";
import ExpenseDate from "./ExpenseDate";

function Expense(props) {
  return (
    <div className="expense__container">
      <div className="expense__stuff">
        <div className="expense__date">
          <div className="date">
            <h3>Date</h3>
            <ExpenseDate date={props.date} />
          </div>
        </div>
        <div className="expense__title">
          <div className="title">
            <h3>{props.title}</h3>
            <p>
              <strong>{props.shop}</strong>
            </p>
          </div>
        </div>
        <div className="expense__amount">
          <div className="amount">
            <h3>RM {props.amount}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
