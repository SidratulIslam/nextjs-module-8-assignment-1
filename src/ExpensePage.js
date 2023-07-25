import React, { useState } from 'react';

function ExpensePage() {
    const [expense, setExpense] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const handleAddExpense = () => {
        const amount = parseFloat(prompt('Enter the expense amount'));
        const category = prompt('Enter the expense category');
        if (amount && category) {
            setExpense(expense + amount);
            setTransactions([...transactions, { amount, category }]);
        }
    };

    return (
        <div className="expense-page">
            <h1>Expense Page</h1>
            <h2>Total Expense: {expense}</h2>
            <button onClick={handleAddExpense}>Add Expense</button>
            <table>
                <thead>
                <tr>
                    <th>Amount</th>
                    <th>Category</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index}>
                        <td>{transaction.amount}</td>
                        <td>{transaction.category}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpensePage;
