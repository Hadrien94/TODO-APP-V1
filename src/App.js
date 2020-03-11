import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Salam Cheik',
      newTodo: '',
      todos: [{
        title: 'react',
        done: false
      }
      ]
    };
  }
   // AUTRE FACON HOOKS this.formSubmitted = this.formSubmitted.bind(this)
  // con instancie le this dans le constructeur pour qu il corresponde au seul this de formsubmitted 

  newTodoChanged(event) {
    //console.log(event.target.value); toujours checker si l event donnee retour en 
    // but the this.setState is not the this.newTodoChanged on doit passe levent du component dans onchange (event) => this.newTodoChanged(event)
    this.setState({
      newTodo: event.target.value
    });

  }

  formSubmitted(event) {

    event.preventDefault();
    this.setState({
      newTodo: '',   // cleardaform   à chaque changement de value={this.state.newTodo} car les données seront dans le State newTodo
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false

      }] //"..." says take all da values that are in da array 
      // NE JAMAIS MODIFIER UN STATE DANS REACT/ PLUTOT EN CREER UN NOUVEAU
    });
  }


  toggleTodoDone(event, index) { // on passe index en param pour l'index
   // console.log(event.target.checked);
    const todos = [...this.state.todos];// on cree une copie de  l'array spread [...] same Object.assignES5
    todos[index] = {...todos[index],  //  on crée une copie de l'index du tableau copié
      done: event.target.checked // et on update la porpieté en console à l'interieur de cette array / on fait sa pour eviter de changer le state dans une methode
    };
    this.setState({ 
      todos // on renvoie l'index de la todos

    });
  }



removeTodo(index) {
  const todos = [...this.state.todos];
  todos.splice(index, 1); // splice modifie l'array  pour aller choper l'index du boutton et le remove "1 evite de remove tout"
  this.setState({ 
    todos // on renvoie l'index de la todos

  });
}


allDone() {
  const todos = this.state.todos.map(todo => {  // on creer un nouveau tableau avec toutes les propriété te todos MAIS AVEC Done:true les qu'on traverse/map
    return { 
      title: todo.title, // on selectione porpietétitle de todo / same que [...todo] si il y a que deux propietés dans le constructor
      done: true  //on le met à true
    };
  });

this.setState({
  todos
});

}
  


  // (event) => this.formSubmitted(event) same thing as this.formSubmitted.bind(this)
  render() {
    return (
      <div className='App'>
        <h1>{this.state.message}</h1>
        <NewTodoForm formSubmitted={this.formSubmitted.bind(this)} // bind (this) on utilise le this de methode formsubmitted
         newTodo={this.state.newTodo}
         newTodoChanged={this.newTodoChanged.bind(this)}/>  
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
        todos={this.state.todos}
        toggleTodoDone={this.toggleTodoDone.bind(this)}
        removeTodo={this.removeTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;