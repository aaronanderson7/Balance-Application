import React from 'react';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

import FoodList from '../components/LogTable.js';


function LogPage({setFood}) {
    const [foods, setFoods] = useState([]);

    const redirect = useNavigate();

    const loadFoods = async() => {
        const response = await fetch('/log');
        const foods = await response.json();
        setFoods(foods);
    };

    const onDelete = async _id =>{
        const response = await fetch(`/log/${_id}`, {method: "DELETE"});
        if (response.status === 204) {
            const getResponse = await fetch('/log');
            const foods = await getResponse.json();
            setFoods(foods);
        } else {
            console.error(`Failed to delete the application with id = ${_id}, status code = ${response.status}`)
        }
    };

    const onEdit = async food => {
        setFood(food);
        redirect('/edit-application');
    };

    useEffect(() => {
        console.log("effect function called")
        loadFoods();
    }, []);

    return(
        <>
            <h2>Food History Log</h2>
            <p> The Food History Log keeps a detailed record of current and past food entries.</p>
            <FoodList foods = {foods} onDelete = {onDelete} onEdit = {onEdit} />
        
    
        </>
    );
}

export default LogPage;