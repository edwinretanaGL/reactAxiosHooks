import React, { useEffect, useState } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoItems from './components/TodoItems';
import awsService from './services/services'

const App = () => {
 const [currentItem, setCurrentItem] = useState({ text: ''})
 const [items, setItems] = useState([])

  async function getTodos () {
    const toDoList = await awsService.getTodos()
    setItems(toDoList)
  }

  useEffect ( () => {
      const fetchData = async () => {
          await getTodos()
      }
      fetchData()
  }, [])

  const handleInput = e => {
    const itemText = e.target.value;
    const newItem = { text: itemText}
    setCurrentItem(newItem);
  }
  const addItem = async e => {
    e.preventDefault()
    const newItem = currentItem
    if (newItem.text !== '') {
      console.log(newItem)

      await awsService.createTodos(currentItem.text)
      getTodos()

      setCurrentItem({text: ''})
    }
  }

  const deleteTodos = async (id) => {
      await awsService.deleteTodos(id);
      getTodos()
  }

  const inputElement= React.createRef()

    return (
        <div className="">
          <header className="">
            <ToDoList
                addItem={addItem}
                inputElement={inputElement}
                handleInput={handleInput}
                currentItem={currentItem}
            />
            <ToDoItems
                entries={items}
                deleteTodos={deleteTodos}
            />
          </header>
        </div>
    );

}

export default App;
