import React, { Component } from 'react';
import { SearchBar } from '../../youtube';

class Nav extends Component {
    render() { 
        const { handleChange, trigger } = this.props;

        return (
            <div className='search-bar'>
                <SearchBar 
                    handleChange = { handleChange } 
                    trigger = { trigger }
                />
            </div>
        );
    }
}

export default Nav;