import React, {useState} from 'react';
import { ListItem } from './ListItem';
import '../src/App.css';

const defaultTodo = [
    {
      text: 'Ma première tâche',
      ok: false,
    },
  ];

const App: React.FC = () => {
    const [todos, setTodo] = useState(defaultTodo);
    const [item, setItem] = useState({text:'', ok:true});

    const handleInput = (event: { target: { value: any; }; }) => {
      setItem({ text: event.target.value, ok: false });
      };
    
    const pushTodo = () => {
          todos.push(item);
          setTodo(todos);
      };
    return (
      <div className='app'>
        <h2>Todo App - EL1P2</h2>
          <input onChange={handleInput} placeholder="Entrer votre tâche" className='input'/>
          <button onClick={pushTodo} className="button">Ajouter</button>
          
          <div className='list'>
          {todos.map(todo => <ListItem todo={todo}/>)}
          </div>
      </div>
  );
};

export default App;