import React, { useState } from 'react'
import { TodoItem } from '../types/interfaces'

interface TodoProps extends TodoItem {
    editTodoItemDescription: (
        id: string,
        description: string
    ) => void,
    toggleTodoItemDone: (id: string) => void,
    removeTodoItem: (id: string) => void
}

const Todo = (props: TodoProps) => {

    const [ editMode, setEditMode ] = useState<boolean>(false)
    const [ description, setDescription ] = useState<string>(props.description)
    const [ checked, setChecked ] = useState<boolean>(props.isDone)

    const toggleEditMode = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (!editMode)
            setEditMode(!editMode)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setEditMode(false)
            props.editTodoItemDescription(props.id, description)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let target = e.target as HTMLInputElement
        setDescription(target.value)
    }

    const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(!checked)
        props.toggleTodoItemDone(props.id)
    }

    return (
        <div
            className={`Todo`}
        >
            <div className={`Todo-Check`}>
                <input 
                    type={`checkbox`} 
                    checked={props.isDone}
                    onChange={e => handleCheck(e)}
                />
            </div>

            <div 
                className={`Todo-Description`}
                onClick={toggleEditMode}
            >
                {!editMode ?
                    <p 
                        className={props.isDone ? 'cross-out' : ''}
                    >
                        {props.description}
                    </p>
                :
                    <p>
                        <input 
                            type={`text`}
                            className={`Todo-input`}
                            defaultValue={props.description}
                            onKeyDown={e => handleKeyDown(e)}
                            onChange={e => handleChange(e)}
                        />
                    </p>
                }
            </div>

            <div 
                className={`Todo-Delete`}
                onClick={e => props.removeTodoItem(props.id)}
            >
                x
            </div>
        </div>
    )
}

export default Todo