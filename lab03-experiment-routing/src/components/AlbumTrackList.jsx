import './AlbumTrackList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const AlbumTrackList = (props) => {
  console.log(props.trackList);
  const mappedTrackList = props.trackList.tracks.map((track) => (
    <li key={Math.random() * 9 + 1}>
      {track}{' '}
      <FontAwesomeIcon className="green" icon={faCirclePlay}></FontAwesomeIcon>
    </li>
  ));
  console.log(mappedTrackList);

  return (
    <div className="track-list-view-container">
      <ol>{mappedTrackList}</ol>
    </div>
  );
};

export default AlbumTrackList;
