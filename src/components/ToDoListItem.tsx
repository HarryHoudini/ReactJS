import React from 'react';

type Props = { label: string; important?: boolean };

const ToDoListItem = ({ label, important = false }: Props): JSX.Element => {
    const style = {
        color: important ? 'tomato' : 'black',
    };
    return <span style={style}>{label}</span>;
};
export default ToDoListItem;
