import React from 'react'

interface TodoListProps {
    children: JSX.Element|JSX.Element[]
}

const TodoList = (props: TodoListProps) => {

    return (
        <div className={`card`}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>

            {props.children}

        </div>
    )
}

export default TodoList