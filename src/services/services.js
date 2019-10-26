import axios from 'axios';

export default {
    getTodos,
    createTodos,
    deleteTodos,
}

async function getTodos () {
    let todosList = []

    await axios.get('https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos')
        .then(res => {
            todosList = res.data;
        })
    return todosList.data
}

async function createTodos (text) {
    ///let todosList = []

    const body = {
        'todo': [text]
    }

    await axios.post('https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos', body)
        .then(res => {
            //todosList = res.data
        })
    //return todosList.data
}

async function deleteTodos (id) {
    await  axios.delete(`https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos?id=${id}`)
        .then(console.log(`eliminado item ${id}`))
}
