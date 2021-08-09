import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div>
      {" "}
      <p>
        <strong>
          {day} . {month} . {year}
        </strong>
      </p>
    </div>
  );
}

export default ExpenseDate;
