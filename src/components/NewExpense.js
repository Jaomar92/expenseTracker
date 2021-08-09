import React, { useState } from "react";
import "./NewExpense.css";

function NewExpense(props) {
  const [formControl, setFormControl] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newShop, setNewShop] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const handleChangeShop = (event) => {
    setNewShop(event.target.value);
  };

  const handleNewAmount = (event) => {
    setNewAmount(event.target.value);
  };

  const handleNewDate = (event) => {
    setNewDate(event.target.value);
  };

  const handleAdd = () => {
    setFormControl(true);
  };
  const handleCancel = () => {
    setFormControl(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: newTitle,
      shop: newShop,
      amount: newAmount,
      date: new Date(newDate),
    };
    // Its date: new Date() not newDate
    //new Date( needs a parameter of date state)

    props.onSaveData(expenseData);
    setNewTitle("");
    setNewShop("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <div className="expense__form__container">
      {formControl === false ? (
        <div className="add__new">
          <div className="add__new__button">
            <button onClick={handleAdd}>Add New Expense</button>
          </div>
        </div>
      ) : (
        <div className="expense__form">
          <form onSubmit={handleSubmit}>
            <div className="form__control">
              <div className="container">
                <div className="form__label">
                  <label>Particulars : </label>
                </div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={handleChangeTitle}
                />
                <div className="form__label">
                  <label>Shop : </label>
                </div>
                <input
                  type="text"
                  value={newShop}
                  onChange={handleChangeShop}
                />
                <div className="form__label">
                  <label>Amount : </label>
                </div>
                <div className="form__bottom">
                  <input
                    type="number"
                    value={newAmount}
                    onChange={handleNewAmount}
                  />
                  <div className="date__form">
                    <div className="date__stuff">
                      <label>Date : </label>
                      <input
                        type="date"
                        min="2021-08-01"
                        max="2026-07-31"
                        onChange={handleNewDate}
                        value={newDate}
                      />
                    </div>
                    <div className="submit__cancel">
                      <button type="cancel" onClick={handleCancel}>
                        Cancel
                      </button>
                      <button type="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default NewExpense;
