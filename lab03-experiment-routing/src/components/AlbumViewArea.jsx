import './AlbumVIewArea.css';
import AlbumCoverImg from './AlbumCoverImg';
import AlbumTrackList from './AlbumTrackList';

const AlbumViewArea = (props) => {
  return (
    <div className="flex">
      <AlbumCoverImg image={props.data[0].coverImg} />
      <AlbumTrackList trackList={props.data[0]} />
    </div>
  );
};

export default AlbumViewArea;
