import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Playlist from './Playlist/Playlist';
import Tracklist from './Tracklist/Tracklist';
import Track from './Track/Track'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SearchBar />
        <SearchResults />
        <Playlist />
        <Tracklist />
        <Track />
        <p>
          Jammming Project @ Codecademy
        </p>
        <button>Save to Spotify</button>
        <button>Search</button>
      </header>
    </div>
  );
}

export default App;
