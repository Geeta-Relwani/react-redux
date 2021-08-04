import React,{useState} from 'react'
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';


//connect is a higher order function i.e it accepts 2 args



const NewTodoForm = ({todos, onCreatePressed}) =>{

    const [inputValue,setInputValue] = useState('');

return(
    <div className="new-todo-form">
        <input type="text" className="new-todo-input" 
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        />
        <button 
        onClick ={()=> {
            const isDuplicateText = 
            todos.some(todo=> todo.text ===inputValue);
            if(!isDuplicateText){
            onCreatePressed(inputValue);
            setInputValue('');
            }
        }}
        className="new-todo-button">Create Todo</button>
    </div>
)
}

//maps state to props so that the object properties can be passed as props
// eg we passed todos as props in const newTodoForm

const mapStateToProps = state =>({
    todos :state.todos,
});


//dispatch is a function that allows app to trigger action that redux store will respond to 

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);