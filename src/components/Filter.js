import React from "react";
import "./Filter.css";

function Filter(props) {
  const selectedYear = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="filter__container">
      <div className="filter__control">
        <div className="option__container">
          <label>Filter by year</label>
          <select onChange={selectedYear} value={props.selected}>
            <option value="">---</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className="display__container">
          <p>
            Check out the <strong>Total</strong> was spent
          </p>
        </div>
      </div>
      <h1>Here is the Graph for the {props.year}</h1>
      {/*This is to check if its working inside*/}
    </div>
  );
}

export default Filter;
