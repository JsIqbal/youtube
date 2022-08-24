import React, { Component } from 'react';
import SearchBar from './Top-navbar.component';

class Nav extends Component {
    render() { 
        const { handleChange } = this.props;

        return (
            <div className='search-bar'>
                <SearchBar handleChange = { handleChange } />
            </div>
        );
    }
}

export default Nav;