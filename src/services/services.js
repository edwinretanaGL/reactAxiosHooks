import axios from 'axios';

export default {
    getTodos,
}

async function getTodos () {
    let todosList = []

    await axios.get('https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos')
        .then(res => {
            todosList = res.data;
        })
    return todosList.data
}