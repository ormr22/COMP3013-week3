import './App.css';
import albums from './data';
import AlbumViewArea from './components/AlbumViewArea';
import AlbumSelection from './components/AlbumSelection';

function App() {
  return (
    <div className="App">
      <h3>Lab 3</h3>
      <AlbumViewArea data={albums} />
      <AlbumSelection data={albums} />
    </div>
  );
}

export default App;
