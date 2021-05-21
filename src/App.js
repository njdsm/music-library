import MusicTable from './Components/MusicTable/musicTable';
import axios from 'axios';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    songs: [],
    dataReady: false
  }

  async makeGetRequest() {
    try{
        let response = await axios.get('http://127.0.0.1:8000/music/')
        console.log(response.data)
        response.data.map((song) => {
          this.setState({songs: [...this.state.songs, song]})
        })
       
        console.log(this)
    }
    catch (ex) {
        console.log("error in API call: " + ex);
    }
  }

  componentDidMount() {
    this.makeGetRequest()
  }

  render(){
    return (
        <div className="App">
            <MusicTable songs={this.state.songs}/>
        </div>
      );
  }
}

export default App;
