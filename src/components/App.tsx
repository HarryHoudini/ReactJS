import React, { useState } from 'react';
import Navbar from './Navbar';
import { TodoForm } from './TodoForm';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};
const App: React.FC = () => {
    const [todos, setTodos] = useState([]);

    const addHandler = (title: string) => {
        console.log('Add New Todo', title);
    };
    return (
        <div>
            <Navbar />
            <div className="container mt2">
                <TodoForm onAdd={addHandler} />
            </div>
        </div>
    );
};

export default App;
