import React, { Component } from 'react'

class TodoItems extends Component {

    createTasks(item) {
        return <li key={item.key} className="list-group-item list-group-item-action">
            <div className="input-group" >
                <p className='label listLabel' key={item.id}>{item.resource.description}</p>
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