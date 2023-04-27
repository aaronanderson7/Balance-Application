import React from 'react';

import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";


function Food({food, onDelete, onEdit}) {
    return (
        <tr>
            <td>{food.date}</td>
            <td>{food.calories}</td>
            <td>{food.carbohydrates}</td>
            <td>{food.protein}</td>
            <td>{food.fruitsandveg}</td>
            <td>{food.fat}</td>
            <td>{food.sugar}</td>
            <td>{food.comments}</td>
            <td><AiFillEdit onClick = {() => onEdit(food._id)}/></td>
            <td><AiFillDelete onClick = {() => onDelete(food._id)}/></td>
            <td></td>
        </tr>
    );
}

export default Food;