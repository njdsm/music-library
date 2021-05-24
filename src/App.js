import MusicTable from './Components/MusicTable/musicTable';
import SongCreateForm from './Components/SongForm/songForm';
import NavBar from './Components/NavBar/navBar';
// import UpdateSongModal from './Components/UpdateModal/updateModal';
import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    songs: [],
    searchResults: [],
    // show: false
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  async makeGetRequest() {
    try{
        let response = await axios.get('http://127.0.0.1:8000/music/')
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
    try{
      const response = await axios.get('http://127.0.0.1:8000/music/')
      const result = response.data.filter(songs => {
        if (songs.id === query){
          return songs
        }
        else if (songs.artist.toLowerCase().includes(query.toLowerCase())){
          return songs
        }
        else if (songs.title.toLowerCase().includes(query.toLowerCase())){
          return songs
        }
        else if (songs.release_date.includes(query)){
          return songs
        }
        else if (songs.album.toLowerCase().includes(query.toLowerCase())){
          return songs
        }
        else if (songs.genre.toLowerCase().includes(query.toLowerCase())){
          return songs
        }
      })
      this.setState({searchResults: []})
      result.map((song) => {
        this.setState({searchResults: [...this.state.searchResults, song]})
      })
    }
    catch (ex) {
      console.log("error searching for songs: " + ex);
    }
  }

  // async updateSong(song){
  //   return song
  // }

  render(){
    return (
        <div className="App bg-dark">
          <NavBar searchAll={(query) => this.searchAll(query)}/>
          {/* <UpdateSongModal show={this.state.show} updateSong={(song) => this.updateSong(song)}/> */}
          <div><h1 align="center" className="bg-dark text-white">Search Results</h1></div>
          <MusicTable songs={this.state.searchResults} updateSong={(id) => this.updateSong(id)} deleteSong={(id) => this.deleteSong(id)}/>
          <div><h1 align="center" className="bg-dark text-white">Create New Song</h1></div>
          <SongCreateForm func={(title, artist, album, release_date, genre) => this.addNewSong(title, artist, album, release_date, genre)} />
          <div><h1 align="center" className="bg-dark text-white">All Songs</h1></div>
          <MusicTable songs={this.state.songs} updateSong={(id) => this.updateSong(id)} deleteSong={(id) => this.deleteSong(id)}/>
      </div>
    );
  }
}

export default App;
