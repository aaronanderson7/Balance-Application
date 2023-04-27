import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

// export and define a function with the same name as your page


export const EditPage = ({food}) => {
    const [date, setDate] = useState(food.date);
    const [calories, setCalories] = useState(food.calories);
    const [carbohydrates, setCarbohydrates] = useState(food.carbohydrates);
    const [protein, setProtein] = useState(food.protein);
    const [fruitandveg, setFruitandveg] = useState(food.fruitsandveg);
    const [fat, setFat] = useState(food.fat);
    const [sugar, setSugar] = useState(food.sugar);
    const [comments, setComments] = useState(food.comments);

    const redirect = useNavigate();

    const editFood = async() => {
        const response = await fetch(`/log/${food._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                date: date,
                calories: calories,
                carbohydrates: carbohydrates,
                protein: protein,
                fruitandveg: fruitandveg,
                fat: fat,
                sugar: sugar,
                comments: comments,
            }),
            headers: {
                'Content-Type': 'food/json',
            }
        });

        if (response.status === 201){
            alert("Successfully edited the application. Great Job!")
        } else {
            const errMessage = await response.json();
            alert(`Failed to edit the application with id = ${food._id} with status = ${response.status}. ${errMessage.Error}`)
        }
        redirect('/log');
    
    }


    return (
        <>
        <article>
            <h2>Food Entry</h2>
            <p>Edit a completed food entry here!
            </p>

            <form onSubmit = {(e) => {e.preventDefault();}}>
                <table id = "foodentry">
                    <caption>Edit an existing food entry in the log. </caption>
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
                            <td><button class = "wait" onClick = {editFood} id = "submit">Save</button></td>

                        </tr>
                    </tbody>
                </table>
            </form>
        </article>
        </>
    );
}

export default EditPage;
