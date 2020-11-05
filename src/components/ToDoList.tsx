import React from 'react';
import { ItemPops } from '..';
import ToDoListItem from './ToDoListItem';

const ToDoList: React.FC<ItemPops[]> = (todos) => {
    const elements = todos.map((item) => {
        return (
            <li key={item.id}>
                <ToDoListItem {...item} />
            </li>
        );
    });

    return <ul>{elements}</ul>;
};

export default ToDoList;
