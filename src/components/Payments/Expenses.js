import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesRange from "./ExpensesRange";

const Expenses = (props) => {
  const [filteredRange, setFilteredRange] = useState(0);

  const filterChangeHandlerRange = (filteredRange) => {
    setFilteredRange(filteredRange);
  };
  console.log("filteredRange", typeof filteredRange); // 이게 타입이 문자형이라 값이 안나오고 있었음.;;

  // range
  const filteredExpensesRange = props.items.filter((expense) => {
    console.log("price", typeof expense.amount);
    return expense.amount.toString() === filteredRange; // 그래서 투 스트링으로 숫자를 문자로 바꿔줘서 해결됨.
  });
  console.log("filteredExpensesRange", filteredExpensesRange);

  //
  return (
    <Card className="expenses">
      <ExpensesRange
        ranged={filteredRange}
        onChangeFilterRange={filterChangeHandlerRange}
      />
      {filteredRange > 0 ? (
        filteredExpensesRange.map((item, idx) => (
          <ExpenseItem
            key={idx}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))
      ) : (
        <p>값을 올려 조회해 보아요.</p>
      )}
    </Card>
  );
};

export default Expenses;
