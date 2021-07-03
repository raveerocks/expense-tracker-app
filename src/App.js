import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'New TV',
		amount: 179.88,
		date: new Date(2021, 1, 2),
	},
	{
		id: 'e2',
		title: 'X Box',
		amount: 404.99,
		date: new Date(2020, 2, 9),
	},
	{
		id: 'e3',
		title: 'Bluetooth',
		amount: 90.93,
		date: new Date(2021, 5, 7),
	},
	{
		id: 'e4',
		title: 'Wireless Earbuds',
		amount: 120.65,
		date: new Date(2020, 7, 8),
	},
];

const App = () => {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default App;
