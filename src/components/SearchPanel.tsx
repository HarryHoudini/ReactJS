import React from 'react';
const SearchPanel = (): JSX.Element => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '2em',
    };
    return <input type="text" placeholder={searchText} style={searchStyle} className="fooo" />;
};

export default SearchPanel;
