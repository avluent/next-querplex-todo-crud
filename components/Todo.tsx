import React from 'react'
import { TodoItem } from '../types/interfaces'

interface TodoProps extends TodoItem {
    editTodoItemDescription?: (
        id: string,
        description: string
    ) => void,
    toggleTodoItemDone?: (id: string) => void,
    removeTodoItem?: (id: string) => void
}

const Todo = (props: TodoProps) => {

    return (
        <div
            className={`Todo`}
        >
            <div className={`Todo-Check`}>
                <input type={`checkbox`} />
            </div>

            <div className={`Todo-Description`}>
                <p>{props.description}</p>
            </div>

            <div className={`Todo-Delete`}>
                x
            </div>
        </div>
    )
}

export default Todo