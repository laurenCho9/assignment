import React, { useEffect, useState } from "react";

// import './ExpensesFilter.css';

const ExpensesRange = (props) => {
  // input range의 값을 변경할 때마다 호출되는 이벤트 핸들러
  const ChangeHandler = (event) => {
    props.onChangeFilterRange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div>
          <input
            type="range"
            name="minValue"
            min={0}
            max={100}
            step={1}
            value={props.ranged}
            onChange={ChangeHandler}
          />
          <div>
            <p>Min Value: {props.ranged}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesRange;
