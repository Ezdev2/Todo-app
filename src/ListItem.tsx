import React from 'react';

interface Todo {
    text: string;
    ok: boolean;
  }

interface Props {
    todo: Todo;
}

export const ListItem: React.FC<Props> = ({ todo }) => {
    const handleCheck = (event: { target: { value: any; }; }) => {
        if (event.target.value == 'on') {
            todo.ok = true;
        }
    }
  return (
    <li>
      <label
        style={{ textDecoration: todo.ok ? 'line-through' : undefined }}
      >
        <input type="checkbox" checked={todo.ok} onChange={handleCheck}/> {todo.text}
        <hr />
      </label>
    </li>
  );
};