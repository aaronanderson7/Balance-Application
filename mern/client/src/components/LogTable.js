import React from 'react';
import Food from './LogRow';

import { Link } from 'react-router-dom';
import {AiFillFileAdd} from 'react-icons/ai';

function FoodList({foods, onDelete, onEdit}) {
    return (
        <table id = "foods">
            <caption>Add and Edit Your Food History Log.</caption>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Calories (kCal)</td>
                    <td>Carbohydrates (g)</td>
                    <td>Protein (g)</td>
                    <td>Fruits and Vegetables (g)</td>
                    <td>Fat (g)</td>
                    <td>Sugar (g)</td>
                    <td>Comments</td>
                    <td>Edit</td>
                    <td>Delete</td>
                    <td><Link to="/addfood" class = "add_button"><AiFillFileAdd/></Link></td>
                </tr>
            </thead>
            <tbody>
                {foods.map((food, i) => 
                <Food 
                    food = {food}
                    key = {i}
                    onDelete = {onDelete}
                    onEdit = {onEdit}
                    />)}
            </tbody>
        </table>
    )
}

export default FoodList
