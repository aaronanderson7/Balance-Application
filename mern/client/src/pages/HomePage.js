import React from 'react';

function HomePage() {
    return (
        <>
            <h2>Balance</h2>
            <p>
                Have you ever felt like nutritional apps are too focused on calories? Well, welcome to Balance, the app that 
                provides a more comprehensive picture of your daily nutrition. Balance keeps track of entered meals, and provides
                useful metrics in nutritional balance to construct a well rounded healthy diet.
            </p>
            <h3>Your Unique Nutritional Metrics for Today:</h3>
            <p>The Circle Graph displays percentages for macronutrients that you have fulfilled today, and areas of improvement. The bar graph
                tracks your traditional calories, but don't just get caught up in the numbers. Nutrition is about a healthy balanced diet, not just
                calorie tracking. 
            </p>
            <img src = 'images/graph.png' ></img>

            <p></p>
        </>
    )
} 

export default HomePage;