import React, { useCallback } from 'react';
import './Playlist.css';

import TrackList from '../TrackList/TrackList';

function Playlist(props) {
    const handleNameChange = useCallback(
        (e) => {
            props.onNameChange(e.target.value);    
        }, 
        [props.onNameChange]
    );

    return (
        <div className="Playlist">
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <TrackList
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="Playlist-save" onClick={props.onSave}>
                SAVE
            </button>
        </div>
    );
};

export default Playlist;