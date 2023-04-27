import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import LogPage from './pages/LogPage.js';
import CreatePage from './pages/CreatePage.js';
import EditPage from './pages/EditPage.js';
// import LoginPage from './pages/Login.js';

import './App.css';


function App() {
    const [food, setFood] = useState([]);
    return (
        <div>
            <BrowserRouter> <Nav class = "nav"/>

            <header>
                <h1>Balance </h1> 
            </header>

            

            <main>
                <section>
                    <Routes>
                        <Route path="/" exact element = {<HomePage />} />
                        <Route path = '/log' element = {<LogPage setFood = {setFood} />} />
                        <Route path = '/addfood' element = {<CreatePage />} />
                        <Route path = '/editfood' element = {<EditPage food = {food} />} />
                        
                    </Routes>

                </section>
                <p>
                <Link to="../addfood">Add Food Entry (Clicking on this link will add a new entry to your food log)</Link>
                </p>
                <p>
                <Link to="../log">Food Log (Clicking on this link will take you to your food log history)</Link>
                </p>
                <p>
                <Link to ='/'>Take me Home </Link>
                </p>
            </main>
            <footer>
                <p>&copy; 2023 Aaron Anderson</p>
            </footer>

            </BrowserRouter>
        </div>
    );
}

export default App;
