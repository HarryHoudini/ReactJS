import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodoPage';

export type ItemPops = {
    label: string;
    important: boolean;
    id: number;
};
const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container mt2">
                <Switch>
                    <Route component={TodosPage} path="/" exact />
                    <Route component={AboutPage} path="/about" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
