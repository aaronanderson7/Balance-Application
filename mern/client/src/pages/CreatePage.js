import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// export and define a function with the same name as your page

export const CreatePage = () => {
    const [date, setDate] = useState('2023-04-24');
    const [calories, setCalories] = useState(200);
    const [carbohydrates, setCarbohydrates] = useState(40);
    const [protein, setProtein] = useState(20);
    const [fruitandveg, setFruitandveg] = useState(15);
    const [fat, setFat] = useState(10);
    const [sugar, setSugar] = useState(20);
    const [comments, setComments] = useState('Healthy & Balanced Meal');

    const redirect = useNavigate();

    const addFood = async() => {
        const newFood = {calories, carbohydrates, protein, fruitandveg, fat, sugar}
        const response = await fetch('/log', {
            method: 'post',
            body: JSON.stringify(newFood),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (response.status === 201) {
            alert ("Successfully added the food. Great Job!");
            redirect('/log')
        } else {
            alert(`Failed to add the new application with satus code = ${response.status}`);
            redirect('/log')
        }
    };

    return (
        <>
        <article>
            <h2>Food Entry</h2>
            <p>Enter in your food entry below according to the specified macronutrients.
                Please note that it may be a little time-consuming to know the exact quantities
                of macronutrients, so feel free to estimate. Balance is all about attaining a better
                picture of your overall nutrition, rather than just tracking calories. 
            </p>
            <p> Once you've completed your food log, press "SAVE" to add a new entry to your food history. <strong>Don't worry, food entries
                can be edited later after saving! </strong>
            </p>

            <form onSubmit = {(e) => {e.preventDefault();}}>
                <table id = "foodentry">
                    <caption>Add a food entry to the log. </caption>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Calories (kCal) </td>
                            <td>Carbohydrates (g)</td>
                            <td>Protein (g) </td>
                            <td>Fruits/Veg (g) </td>
                            <td>Fat (g)</td>
                            <td>Sugar (g) </td>
                            <td>Comments</td>
                            <td>Edit </td>
                            <td>Delete </td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label for = "date" class = "required">
                                <input
                                    type = "date"
                                    input = "date"
                                    id = "appdate"
                                    name = "date"
                                    value = {date} 
                                    required
                                    onChange = {e => setDate(e.target.value)}
                                    pattern = "\d{2}-\d{2}-\d{2}"
                                    />
                                </label>
                            </td>


                            <td><label for = "calories" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {calories}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setCalories(e.target.value)}
                                    id = "calories"
                                />
                            </label>
                            </td>

                            <td><label for = "carbohydrates" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {carbohydrates}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setCarbohydrates(e.target.value)}
                                    id = "carbohydrates"
                                />
                            </label>
                            </td>

                            <td><label for = "protein" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {protein}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setProtein(e.target.value)}
                                    id = "protein"
                                />
                            </label>
                            </td>

                            <td><label for = "fruitsandveg" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {fruitandveg}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setFruitandveg(e.target.value)}
                                    id = "fruitsandveg"
                                />
                            </label>
                            </td>

                            <td><label for = "fat" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {fat}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setFat(e.target.value)}
                                    id = "fat"
                                />
                            </label>
                            </td>

                            <td><label for = "sugar" class = "required">
                                <input 
                                    input = "number"
                                    type = "number"
                                    value = {sugar}
                                    min = "0"
                                    max = "100000000"
                                    required
                                    onChange = {e => setSugar(e.target.value)}
                                    id = "sugar"
                                />
                            </label>
                            </td>

                            <td><label for = "comments" class = "required">
                                <input
                                    input = "text"
                                    value = {comments}
                                    required
                                    onChange = {e => setComments(e.target.value)}
                                    id = "comments"/>
                            </label></td>
                            <td></td>
                            <td></td>
                            <td><button class = "wait" onClick = {addFood} id = "submit">Save</button></td>

                        </tr>
                    </tbody>
                </table>
            </form>
        </article>
        </>
    );

}

export default CreatePage;
