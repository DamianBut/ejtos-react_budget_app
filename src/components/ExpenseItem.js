import React, { useContext } from 'react';
import { FiX } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';


const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FaPlus size='1.5em' onClick={event=> increaseAllocation(props.name)}></FaPlus></td>
        <td><FiX size='2em' onClick={handleDeleteExpense}></FiX></td>
        </tr>
    );
};

export default ExpenseItem;
