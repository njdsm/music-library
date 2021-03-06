import React from 'react';
import './songForm.css';

class SongCreateForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {title: '', artist: '', album: '', release_date: '', likes: 0, genre: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.func(this.state.title, this.state.artist, this.state.album, this.state.release_date, this.state.genre)
    }

    render(){
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <div className="label">
                    <label>Title: </label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                </div>
                <div className="label">
                    <label>Artist: </label>
                    <input type="text" name="artist" value={this.state.artist} onChange={this.handleChange}/>
                </div>
                <div className="label">
                    <label>Album: </label>
                    <input type="text" name="album" value={this.state.album} onChange={this.handleChange}/>
                </div>
                <div className="label">
                    <label>Release Date: </label>
                    <input type="date" name="release_date" value={this.state.release_date} onChange={this.handleChange}/>
                </div>
                <div className="label">
                    <label>Genre: </label>
                    <input type="text" name="genre" value={this.state.genre} onChange={this.handleChange}/>
                </div>
                <button>Submit</button>
                
            </form>
        )
    }
}

export default SongCreateForm