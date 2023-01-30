import './AlbumCoverImg.css';

const AlbumCoverImg = (props) => {
  return (
    <div className="album-cover-image">
      <img src={props.image} />
    </div>
  );
};

export default AlbumCoverImg;
