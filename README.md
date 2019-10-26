# reactAxiosHooks
Small sample of a ToDo App with managing state, axios and hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Before Starting

Run the following commands:
- npm install
- npm update
- npm install react-bootstrap


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Services Information

#### List: To Do
Description: Returns all To Do

Endpoint: GET: https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos

#### Create: To Do
Description: Create a new todo

Endpoint: POST: https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos

Body: { "todo": [ "todo 1", "todo 2", "todo 3" ] }

#### Delete: To Do
Description: Delete a todo

Endpoint: DELETE: https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos?id=13

QueryStringParameters: id = To Do ID


#### UPDATE: To Do
Description: Update a To Do.

Endpoint: PUT: https://h4sk8blscl.execute-api.us-east-1.amazonaws.com/dev/todos?id=12

QueryStringParameters: id = To Do ID

Body: { "todo": "free text" }