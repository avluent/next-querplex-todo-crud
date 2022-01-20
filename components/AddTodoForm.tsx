import React from 'react'

interface AddTodoFormProps {

}

const AddTodoForm = (props: AddTodoFormProps) => {


    return (
        <p className={`description`}>
            <input 
                type="text"
                aria-label='AddTodo'
                defaultValue={`What needs to get done`}
            />

            <button
                aria-label='SubmitTodo'
            >
                Add
            </button>
        </p>
    )

}

export default AddTodoForm