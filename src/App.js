import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import IncomePage from './IncomePage';
import ExpensePage from './ExpensePage';
import Navbar from './Navbar';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/income" element={<IncomePage />} />
                <Route path="/expense" element={<ExpensePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
