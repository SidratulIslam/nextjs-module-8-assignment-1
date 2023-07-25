import React, { useState } from 'react';

function IncomePage() {
    const [income, setIncome] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const handleAddIncome = () => {
        const amount = parseFloat(prompt('Enter the income amount'));
        const source = prompt('Enter the income source');
        if (amount && source) {
            setIncome(income + amount);
            setTransactions([...transactions, { amount, source }]);
        }
    };

    return (
        <div className="income-page">
            <h1>Income Page</h1>
            <h2>Total Income: {income}</h2>
            <button onClick={handleAddIncome}>Add Income</button>
            <table>
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Source</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.amount}</td>
                        <td>{transaction.source}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default IncomePage;
