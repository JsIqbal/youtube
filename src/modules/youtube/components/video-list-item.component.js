import React, { Component } from 'react';

function ListItem (props) {
    const { handleSelect, imgUrl, title, videoId, description, channelTitle } = props;
    return (
        <div class="list-group-item"
            onClick = { () => handleSelect(videoId, title, description) }>
            
            <div className='row'>
                <div className='col-lg-6 mr-auto'> 
                    <img className='list-image' src={imgUrl}/> 
                </div>
                <div className='col-lg-6 ps-0'> 
                    <div> 
                        <span className='heading-wrap'>
                            <p className='list-heading'>{title}</p> 
                        </span>
                        <p className='list-description'>{ channelTitle }</p>
                    </div> 
                </div>
            </div>
        </div>
    );
}
 
export default ListItem;