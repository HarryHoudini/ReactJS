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
    return (
        <div>
            <Navbar />
            <div className="container mt2">
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todos} />
            </div>
        </div>
    );
};

export default App;
