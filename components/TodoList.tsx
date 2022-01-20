import React from 'react'

interface TodoListProps {
    children: JSX.Element|JSX.Element[]
}

const TodoList = (props: TodoListProps) => {

    return (
        <div className={`Todo-List-card`}>

            {props.children}

        </div>
    )
}

export default TodoList