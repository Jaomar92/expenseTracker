import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.totalMax > 0) {
    barFillHeight = Math.round((props.value / props.totalMax) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

// To change style of JSX element you need a style attribute followed by {{}}

export default ChartBar;
