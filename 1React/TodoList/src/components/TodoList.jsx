// Implement a React component called TodoList that renders a list of todo items. Each todo item should have a checkbox and a label. Clicking the checkbox should mark the item as completed.

import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            label: "first todo",
            completed: false
        },
        {
            id: 2,
            label: "second todo",
            completed: false
        },
        {
            id: 3,
            label: "third todo",
            completed: false
        },
        {
            id: 4,
            label: "fourth todo",
            completed: false
        }
    ])

    const checkboxHandler = (todoId) => {
        const updatedTodo = todos.map((todo) => (
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        ))
        setTodos(updatedTodo)
    }

    return (
        <div>
            <ul>
                {todos.map((todo) =>
                    <li key={todo.id}>
                        <label>{todo.label}</label>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => (checkboxHandler(todo.id))}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default TodoList
