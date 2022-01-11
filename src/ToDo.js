import React, { useState } from 'react';

export default function ToDo() {
    const [todos, setTodos] = useState([
        {text: 'Buy a winter jacket'},
        {text: 'Learn more about React Hooks'},
    ])

    const loopThroughToDo = (todos) => {
        return todos.map(todo => <li>
            <p>{todo.text}</p>
        </li>)
    }
    return (
        <div>
            <ul>
                {loopThroughToDo(todos)}
            </ul>
        </div>
    )
}
