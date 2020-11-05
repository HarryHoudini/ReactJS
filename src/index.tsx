import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import ToDoList from './components/ToDoList';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};

const App = () => {
    const items: ItemPops[] = [
        { label: 'Drink coffee', important: false, id: 1 },
        { label: 'Build React', important: true, id: 2 },
        { label: 'Have a lunch', important: true, id: 3 },
    ];

    const login = <span>Login please</span>;
    return (
        <div>
            {login}
            <AppHeader />
            <SearchPanel />
            <ToDoList todos={items} />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
