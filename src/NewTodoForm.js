import React from 'react';

const NewTodoForm = (props) => { // props passe des proprieté  au lieu this.formSubmitted js on go props.
    // || this.state.newTodo = props.newTodo || resume on tej tout le js y compris => (event)
    return (

        <form onSubmit={props.formSubmitted}> 
<label htmlFor="newTodo">New Todo</label>
<input onChange={props.newTodoChanged} id="newTodo" name="newTodo" value={props.newTodo} />  
<button type="submit">Add TO-DO</button>
</form>

    )
}




export default NewTodoForm;

