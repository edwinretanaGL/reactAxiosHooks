import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import ToDoItems from './components/TodoItems';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      currentItem: {text:'', key:''},
    }
  }

  handleInput = e => {
    const itemText = e.target.value;
    const currentItem = { text: itemText, key: Date.now()}
    this.setState({currentItem});
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
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
            />
          </header>
        </div>
    );
  }

}

export default App;
