import React from 'react';
import ReactDOM from 'react-dom';

const ToDoList = () => {
    const items = ['Learn react', 'Build Awesome App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1].toUpperCase()}</li>
        </ul>
    );
};
const ToDoList2 = () => {
    return (
        <ul>
            <li>Learn</li>
            <li>Buil</li>
        </ul>
    );
};

const AppHeader = () => {
    return <h1>My ToDo List </h1>;
};

const SearchPanel = () => {
    return <input type="text" placeholder="search" />;
};

const App = () => {
    const login = <span>Login please</span>;
    return (
        <div>
            {login}
            <span>{new Date().toString()}</span>
            <AppHeader />
            <SearchPanel />
            <ToDoList />
            <ToDoList2 />
            <ToDoList2 />
            <ToDoList />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById('root'));
