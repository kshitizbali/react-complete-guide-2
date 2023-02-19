import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const saveSelectedExpenseYearHandler = (enteredYearSelectedData) => {
    console.log(enteredYearSelectedData)
    setSelectedYear(enteredYearSelectedData);
  };

  const filteredByYearExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  });

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveSelectedExpenseYear={saveSelectedExpenseYearHandler}/>
      {filteredByYearExpenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
      ))}
    </Card>
    </div>
  );
}

export default Expenses;
