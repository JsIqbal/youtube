import React, { Component } from 'react';
import { ListItem } from '../../youtube';

function VideoList (props) {

        const { items, handleSelect } = props;
        return (
            <div className='col-lg-4 vid-measure'>
            {
                items.map(item => (
                        <ListItem
                            imgUrl = { item.snippet.thumbnails.high.url }
                            title = { item.snippet.title }
                            videoId ={ item.id.videoId }
                            description = { item.snippet.description }
                            handleSelect = { handleSelect }
                            channelTitle = {item.snippet.channelTitle}
                        />
                    )
                )
            }
        </div>
        );
}
 
export default VideoList;