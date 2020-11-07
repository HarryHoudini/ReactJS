import React from 'react';
import { Navbar } from './Navbar';
import { TodoForm } from './TodoForm';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};

const App: React.FC = () => {
    const items: ItemPops[] = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Build React', important: true, id: 2 },
        { label: 'Have a lunch', important: true, id: 3 },
    ];

    const login = <span>Login please</span>;
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
