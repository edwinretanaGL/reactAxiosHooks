import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

class TodoItems extends Component {

    deleteTodo = (e) => {
        console.log(e.currentTarget.id)
        this.props.deleteTodos(e.currentTarget.id)
    }

    createTasks = (item) =>{
        return <li key={item.id} className="list-group-item list-group-item-action">
            <div className="input-group" >
                <p className='label listLabel' key={item.id}>{item.resource.description}</p>
                <Button onClick={this.deleteTodo} id={item.id}>Delete</Button>
            </div>
        </li>
    }


    render () {
        const todoEntries = this.props.entries
        const listItems = todoEntries && todoEntries.length > 0 ? todoEntries.map(this.createTasks) : null

        return (
            <ul className="list-group listFrame">{listItems}</ul>
        )
    }
}
export default TodoItems