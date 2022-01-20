import React from 'react';

const Album = ({albumCover,albumTitle,album,artist})=>{
    return(
        <>
        <div className = "containerAlbum">
        <img src={albumCover} alt="Album-cover" className="album_img" />
        <div className="album_info">
          <p>{albumTitle}</p>
          <p>{album}</p>
          <span className="album_category">{artist}</span>
        </div>
        </div>
        </>
    )
}
export default Album;