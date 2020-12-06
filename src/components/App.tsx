import React, { useState } from 'react';
import { ITodo } from '../interfaces';
import Navbar from './Navbar';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};
const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        };

        // setTodos([newTodo, ...todos]);
        setTodos((prev) => [newTodo, ...prev]);
    };

    const toggleHandler = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }),
        );
    };

    const removeHandler = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            <Navbar />
            <div className="container mt2">
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
            </div>
        </div>
    );
};

export default App;
