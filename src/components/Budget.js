import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch,remaining, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {

        setNewBudget(event.target.value);
        console.log(newBudget + " " + totalExpenses);
        if(event.target.value <= totalExpenses) {
            console.log("too low");
            setNewBudget(budget);
            alert("The value cannot go below current expenditure of £"+ totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
            return;
        }
        else if(event.target.value >= 20000) {
            alert("The value cannot go above 20000");
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;