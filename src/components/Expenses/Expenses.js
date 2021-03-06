import * as React from 'react'
import { Card } from '../UI/Card'
import { NewExpense } from '../NewExpense/NewExpense'
import { useState } from 'react'
import { ExpensesFilter } from './ExpensesFilter'
import './Expenses.scss'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12),
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
]

export const Expenses = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    }
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </>
    )
}
