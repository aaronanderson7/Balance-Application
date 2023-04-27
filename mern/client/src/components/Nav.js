import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="../addfood">Add Food Entry</Link>
            <Link to="/log">Food Entry History</Link>
            <Link>Log In</Link>
        </nav>
    );

}

export default Nav;