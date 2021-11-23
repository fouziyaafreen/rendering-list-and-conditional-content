import React, { useState } from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle]= useState(props.title);
  
const clickHandler = () => {
  setTitle('Afreen');
  console.log(title);
};
  return (
    <li>
    <Card className='expense-item'>
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h1>{title}</h1>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
