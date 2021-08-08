import * as React from 'react';
import {Card} from '../UI/Card';
import {ExpenseItem} from './ExpenseItem';
import {NewExpense} from '../NewExpense/NewExpense';
import {useState} from 'react';
import {ExpensesFilter} from './ExpensesFilter';
import './Expenses.scss';

export const Expenses = (props: any) => {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const addExpenseHandler = (expense: any) => {
    console.log('in app');
    console.log(expense);
  };

  return (<>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  </>)
}