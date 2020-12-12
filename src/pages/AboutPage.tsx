import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <div>
            <h1>Страница информации</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, beatae placeat! Dolor molestiae fugiat
                quae maiores repellat pariatur aut ut?
            </p>
            <button className="btn" onClick={() => history.push('./')}>
                Обратно к списку дел
            </button>
        </div>
    );
};
