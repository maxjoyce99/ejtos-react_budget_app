import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

      const plusButtonStyle = {
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px', // Set width to 30px
        height: '30px', // Set height to 30px
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        padding: '0px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        lineHeight: '30px', // Ensure vertical centering
        position: 'absolute'
      };

      const minusButtonStyle = {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '30px', // Set width to 30px
        height: '30px', // Set height to 30px
        fontSize: '36px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease',
        lineHeight: '24px', // Ensure vertical centering
        textAlign: 'center',
        margin: 0
      };


    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        console.log("Decrease Allocation");

        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={plusButtonStyle} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={minusButtonStyle} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
