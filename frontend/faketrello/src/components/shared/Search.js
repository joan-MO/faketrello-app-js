import React from 'react';

const Search = ({value, handleChange }) => {
    return (
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='search' onChange={handleChange} value={value}/>
        </form>
    )
}


export default Search;