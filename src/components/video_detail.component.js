import React, { Component } from 'react';

class VideoDetails extends Component {
    render() {
        const { videoId, title, description } = this.props;
        return (
            <div className='col-lg-8 mb-4'>
                <div className='video'>
                    <iframe 
                        width = "100%" 
                        height = "468" 
                        src = { `https://www.youtube.com/embed/${ videoId }` } 
                        frameborder = "0" 
                        allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div className='details'>
                    <h6>{ title }</h6>
                    
                    <div> <p>{ description }</p> </div>
                </div>
            </div>
        );
    }
}
 
export default VideoDetails;