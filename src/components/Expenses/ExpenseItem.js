import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHanlderChangeTitle = () => {
    setTitle('Updated!');
    console.log('Button Clicked !!!')
  };

  return (
    <li>
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={clickHanlderChangeTitle}>Change Title</button> */}
    </Card>
    </li>
  );
}

export default ExpenseItem;
