import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    //Approach 1
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    //Approach 2
    // const [userInput, setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        //Approach 1
        setEnteredTitle(event.target.value);

        //IF out state updatea depends on the previous state. We have 2 approaches.
        // Always use Approach 1 which guarantees React to properly use old state and
        //update the new state.
        // Approach 1.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // });
        // Approach 2. We save the previous state with userInput for other params.
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
    };

    const amountChangeHandler = (event) => {
        //Approach 1
        setEnteredAmount(event.target.value);

        //IF out state updatea depends on the previous state. We have 2 approaches.
        // Always use Approach 1 which guarantees React to properly use old state and
        //update the new state.
        // Approach 1.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // });
        //  Approach 2. We save the previous state with userInput for other params.
        //  setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    };

    const dateChangeHandler = (event) => {
        //Approach 1
        setEnteredDate(event.target.value);

        //IF out state updatea depends on the previous state. We have 2 approaches.
        // Always use Approach 1 which guarantees React to properly use old state and
        //update the new state.
        // Approach 1.
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
        //  Approach 2. We save the previous state with userInput for other params.
        //  setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })
    };

    const submitHanlder = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (<form onSubmit={submitHanlder}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>);
};

export default ExpenseForm