import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const saveSelectedExpenseYearHandler = (enteredYearSelectedData) => {
    console.log(enteredYearSelectedData)
    setSelectedYear(enteredYearSelectedData);
  };

  const filteredByYearExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  });

  // let expenseContent = <p>No expenses found.</p>;

  // if (filteredByYearExpenses.length > 0) {
  //   expenseContent = filteredByYearExpenses.map((expense) => (
  //     <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
  //   ));
  // }

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onSaveSelectedExpenseYear={saveSelectedExpenseYearHandler}/>
      <ExpensesList items={filteredByYearExpenses} ></ExpensesList>
    </Card>
    </div>
  );
}

export default Expenses;
