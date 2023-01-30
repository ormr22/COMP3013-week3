import './AlbumSelection.css';
import AlbumList from './AlbumList';

const AlbumSelection = (props) => {
  return (
    <>
      <h2>Select an Album:</h2>
      <AlbumList albumArray={props.data} />
    </>
  );
};

export default AlbumSelection;
