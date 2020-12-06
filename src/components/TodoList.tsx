import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
    todos: ITodo[];
    onToggle?: (id: number) => void;
    onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemove, onToggle }: TodoListProps) => {
    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }
                return (
                    <li className={classes.join(' ')} key={todo.id} onChange={onToggle?.bind(null, todo.id)}>
                        <label>
                            <input type="checkbox" checked={todo.completed} />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>
                                delete
                            </i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};
