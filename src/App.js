import MusicTable from './Components/MusicTable/musicTable';
import SongCreateForm from './Components/SongForm/songForm';
import NavBar from './Components/NavBar/navBar';
import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    songs: [],
    searchResults: [],
    dataReady: false
  }

  async makeGetRequest() {
    try{
        let response = await axios.get('http://127.0.0.1:8000/music/')
        console.log(response.data)
        response.data.map((song) => {
          this.setState({songs: [...this.state.songs, song]})
        })
    }
    catch (ex) {
        console.log("error in API call: " + ex);
    }
  }

  componentDidMount() {
    this.makeGetRequest()
  }

  async deleteSong(id){
    try{
      await axios.delete('http://127.0.0.1:8000/music/' + id + '/');
      this.state.songs = this.deletedSong(this.state.songs, id)
      this.setState(this.state.songs)
    }
    catch (ex) {
      console.log("error deleting song: " + ex);
    }
  }

  deletedSong(songs, id){
    let newSongs = []
    songs.map((song) => {
      if (song.id !== id){
        newSongs.push(song)
      }
    })
    return newSongs
  }

  async addNewSong(title, artist, album, release_date, genre){
    let newSong = {
      'title': title,
      'artist': artist, 
      'album': album, 
      'release_date': release_date, 
      'likes': 0, 
      'genre': genre
    }
    try{
      const result = await axios.post('http://127.0.0.1:8000/music/', newSong)
      newSong.id = result.data.id
      this.setState({songs: [...this.state.songs, newSong]})
    }
    catch (ex) {
      console.log("error creating song: " + ex);
    }
  }

  async searchAll(query){
    debugger
    console.log(query)
    try{
      const response = await axios.get('http://127.0.0.1:8000/music/')
      const result = response.data.filter(songs => {
        if (songs.id === query){
          return songs
        }
        else if (songs.artist.includes(query)){
          return songs
        }
        else if (songs.title.includes(query)){
          return songs
        }
        else if (songs.release_date.includes(query)){
          return songs
        }
        else if (songs.album.includes(query)){
          return songs
        }
        else if (songs.genre.includes(query)){
          return songs
        }
      })
      result.map((song) => {
        this.setState({searchResults: [...this.state.searchResults, song]})
      })
    }
    catch (ex) {
      console.log("error searching for songs: " + ex);
    }
  }

  render(){
    return (
        <div className="App">
            <NavBar searchAll={(query) => this.searchAll(query)}/>
            <div><h1 align="center" className="bg-dark text-white">Search Results</h1></div>
            <MusicTable songs={this.state.searchResults} deleteSong={(id) => this.deleteSong(id)}/>
            <div><h1 align="center" className="bg-dark text-white">Create New Song</h1></div>
            <SongCreateForm func={(title, artist, album, release_date, genre) => this.addNewSong(title, artist, album, release_date, genre)} />
            <div><h1 align="center" className="bg-dark text-white">All Songs</h1></div>
            <MusicTable songs={this.state.songs} deleteSong={(id) => this.deleteSong(id)}/>

        </div>
      );
  }
}

export default App;
