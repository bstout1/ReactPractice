import React, { useState, useCallback } from 'react';

import './SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback( (e) => {
        setTerm(e.target.value);
    },
    []
    );

    const search = useCallback( () => {
        props.onSearch(term);
    }, [props.onSearch, term]);

    return (
        <div className="SearchBar">
            <input placeholder="Enter A Song Title" onChange={handleTermChange} />
            <button className="SearchBUtton" onClick={search}>
                Search
            </button>
        </div>    
    );
}

export default SearchBar;