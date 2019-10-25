import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class TodoList extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={this.props.addItem} className="inputForm">
                    <input
                        className="form-control"
                        placeholder="Task"
                        ref={this.props.inputElement}
                        value={this.props.currentItem.text}
                        onChange={this.props.handleInput}
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="btn"> Add Todo
                    </Button>
                </Form>
            </div>
        )
    }
}
export default TodoList