/* eslint-disable default-case */
// reducer is a function named after resource in redux store it is incharege of managing

import { CREATE_TODO, REMOVE_TODO } from "./actions";

//anywhere any action is fired in the application the reduccer is called
// args passed in reducer are current state and action that was triggered.
// action is object from actions.js with type and payload values
//reducer takes in the current state and returns updated state based on action




export const todos = (state=[], action) =>{
const {type, payload} = action;

switch(type) {
case CREATE_TODO : {
    const {text} = payload;
    const newTodo = {
        text,
        isCompleted:false,
    };
    return state.concat(newTodo);
}
case REMOVE_TODO : {
    const {text} = payload;
    return state.filter(todo => todo.text !== text);
}
default:
    return state

}

}