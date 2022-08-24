import React, { Component } from 'react';
import ListItem from './video-list-item.component';

class VideoList extends Component {
    render() { 
        const { items, handleSelect } = this.props;
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
}
 
export default VideoList;