import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import Todo from '../components/Todo'
import { TodoItem } from '../types/interfaces'
import axios from 'axios'
import { uuid } from 'uuidv4'

const Home: NextPage = () => {

  const [ todoItemList, setTodoItemList ] = useState<TodoItem[]>([])

  enum FilterEnum {
    'open' = 'open',
    'done' = 'done'
  }

  // make single call to api to fetch todos
  useEffect(() => {

    axios.get('/api/todos', {
      auth: {
        username: 'querplex',
        password: 'Passwort'
      }
    }).then(res => {
      setTodoItemList(res.data)
    }).catch(err => {
      console.error(err)
    })

  },[])

  // Todo handling functions
  const addTodoItem = (description: string) => {

    if (description === "") return

    let newItem = {
      id: uuid(),
      description: description,
      isDone: false
    }

    // console.log("added", newItem)
    setTodoItemList([...todoItemList, newItem])
  }

  const filterTodoItems = (todoItems: TodoItem[], filterType: string) => {

  }

  const editTodoItemDescription = (id: string, description: string) => {

  }

  const toggleTodoItemDone = (id: string) => {

  }

  const removeTodoItem = (id: string) => {

  }


  return (
    <div className={`container`}>

      <Head>
        <title>Querplex Todo CRUD Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`main`}>

        <h1 className={`title`}>
          Todo List
        </h1>

        <AddTodoForm addTodoItem={addTodoItem} />

        <TodoList>

          {todoItemList.map((todo: TodoItem, index: number) => {
            return (
              <Todo 
                key={index}
                id={todo.id}
                description={todo.description}
                isDone={todo.isDone}
                editTodoItemDescription={editTodoItemDescription}
                toggleTodoItemDone={toggleTodoItemDone}
                removeTodoItem={removeTodoItem}
              />
            )
          })}

        </TodoList>

      </main>

      <footer className={`footer`}>
      </footer>
    </div>
  )
}

export default Home
