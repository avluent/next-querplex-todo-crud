import React, { ChangeEvent, useState } from 'react'

interface AddTodoFormProps {
    addTodoItem: (description: string) => void
}

const AddTodoForm = (props: AddTodoFormProps) => {

    const [ itemDescription, setItemDescription ] = useState<string>("")

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let target = e.target as HTMLInputElement
        setItemDescription(target.value)
    }

    const keyHandler = (e: React.KeyboardEvent) =>  {
        if (e.code === "Enter") {
            props.addTodoItem(itemDescription)
            setItemDescription("")
        }
    }

    return (
        <div className={`Add-Todo-Form`}>
            <input 
                type="text"
                aria-label='AddTodo'
                className={`Add-Todo-Form-input`}
                placeholder={`What needs to get done?`}
                onChange={e => changeHandler(e)}
                onKeyDown={e => keyHandler(e)}
                value={itemDescription}
            />

            <div
                className={`Add-Todo-Form-button`}
                onClick={e => 
                    {
                        props.addTodoItem(itemDescription)
                        setItemDescription("")
                    }}
            >
                Add
            </div>
        </div>
    )

}

export default AddTodoForm