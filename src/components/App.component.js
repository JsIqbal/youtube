import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav.component';
import VideoDetails from './video_detail.component';
import VideoList from './video_list.component';

class App extends Component {
    state = {
        searchTerm: '',
        data: {},
        videoId: '',
        title: '',
        description: ''
    }

    handleChange = ({ target: { value: searchTerm } }) => this.setState({ ...this.state, searchTerm });

    trigger = () => {
        console.log("triggered")
        const baseUrl = 'https://www.googleapis.com/youtube/v3/search?key=';
        const key = 'AIzaSyBd4SOTYQlu-tCyW6PsPmt0_1XSUB-WCoY&type=';
        const type = 'video&part=';
        const part = 'snippet&q=';
        const q = this.state.searchTerm;
        
        const url = `${baseUrl}${key}${type}${part}${q}`;

        axios.get(url)
            .then(({ data }) => this.setState({ ...this.state, data }))
            .catch(err => console.log(err));
    }

    handleSelect = (videoId, title, description) => this.setState({ ...this.state, videoId, title, description });

    render () {
        return(
            <div className='container'>
                <div className='row'>
                    <span>
                        <Nav 
                            handleChange = { this.handleChange } 
                            trigger = { this.trigger }
                        />
                    </span>
                </div>

                <div className='row'>
                    <VideoDetails 
                        videoId = { this.state.videoId } 
                        title = { this.state.title } 
                        description = { this.state.description }
                    />

                    <VideoList 
                        items = { this.state.data.items || [] }
                        handleSelect = {this.handleSelect}
                    />
                </div>
            </div>
        );
    }
}

export default App;