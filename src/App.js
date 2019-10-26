import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoItems from './components/TodoItems';
import awsService from './services/services'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentItem: {text:''},
    }
  }

  getTodos = async () => {
    const toDoList = await awsService.getTodos()
      this.setState({ items: toDoList})
  }

  componentDidMount() {
      this.getTodos()
  }

    handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now()}
    this.setState({currentItem});
  }
  addItem = async e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)

      await awsService.createTodos(this.state.currentItem.text)
      this.getTodos()

      this.setState({
        currentItem: { text: '' },
      })
    }
  }

  deleteTodos = async (id) => {
      await awsService.deleteTodos(id);
      this.getTodos()
  }

  inputElement= React.createRef()

  render () {
    return (
        <div className="">
          <header className="">
            <ToDoList
                addItem={this.addItem}
                inputElement={this.inputElement}
                handleInput={this.handleInput}
                currentItem={this.state.currentItem}
            />
            <ToDoItems
                entries={this.state.items}
                deleteTodos={this.deleteTodos}
            />
          </header>
        </div>
    );
  }

}

export default App;
