import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props)  => {
    return (
        <ul>
        {props.todos.map((todo, index) => { // return l'array todos dans la vue learn react / learn jsx  avec function() todo ou todo =>
        // on place une key pour savoir à quelle item du tableau li renvoie / pr éviter confusion car [...] prend tts values d'un tableau
          return (<TodoItem 
            key = {index}
            index= {index}
            todo={todo}
            toggleTodoDone={props.toggleTodoDone}
            removeTodo={props.removeTodo}
          />) // on cree un item de la liste dans un component
          // span classname APELLE CLASS {LINETHROUGH} dans Index.CSS pour barrer la liste checké sinon rien/pas de style ? :
         // en gros passe la todoitem ds todolist
       })} 
      </ul>
    )
}

export default TodoList
