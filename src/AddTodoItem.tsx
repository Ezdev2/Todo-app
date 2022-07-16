import React, {Component, useState} from 'react';
import { ListItem } from './ListItem';

const todos = [
    {
      text: 'test 1',
      ok: false,
    },
    {
      text: 'test 2',
      ok: true,
    },
];

// let [myTodos, setMyTodos] = useState(todos);

export class AddTodoItem extends Component{
    state = {
        text: "",
        ok: true,
    };
    handleInput = (event: { target: { value: any; }; }) => {
        this.setState({ text: event.target.value });
        };
    
    logValue = () => {
        alert(this.state.text);
        };

    pushTodo = () => {
        todos.push(this.state);
        console.log(todos);
        
    }

    render() {
        if (todos.length > 0) {
            for (let i = 0; i <= todos.length; i++) {
                return (
                    <div>
                        <ListItem todo={todos[i]}/>
                    </div>
                )
            }
        }
        else return (
        <div>
            <input onChange={this.handleInput} placeholder="Enter name" />
            <button onClick={this.pushTodo}>Log value</button>
        </div>
        );
    }
}
