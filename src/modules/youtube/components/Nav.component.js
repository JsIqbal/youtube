import React, { Component } from 'react';
import { SearchBar } from '../../youtube';

function Nav (props) {
        const { handleChange, trigger } = props;

        return (
            <div className='search-bar'>
                <SearchBar 
                    handleChange = { handleChange } 
                    trigger = { trigger }
                />
            </div>
        );
}

export default Nav;