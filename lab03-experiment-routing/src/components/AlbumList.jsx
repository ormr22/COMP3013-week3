import './AlbumList.css';

const AlbumList = (props) => {
  console.log(props.albumArray);
  const albumList = props.albumArray.map((album) => {
    return (
      <li key={album.id}>
        <img className="album-icon" src={album.coverImg} />
        {album.name}
      </li>
    );
  });

  return <ul>{albumList}</ul>;
};

export default AlbumList;
