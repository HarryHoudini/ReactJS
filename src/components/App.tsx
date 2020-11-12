import React from 'react';
import { Navbar } from './Navbar';
import { TodoForm } from './TodoForm';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt2">
                <TodoForm />
            </div>
        </div>
    );
};

export default App;
