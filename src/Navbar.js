import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/income">Income</Link>
            <Link to="/expense">Expense</Link>
        </div>
    );
}

export default Navbar;
