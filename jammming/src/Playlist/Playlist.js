import React from 'react';
import '../App.css';

import TrackList from '../TrackList/TrackList';

function Playlist() {
    return (
        <div>
            <TrackList 
                tracks={"track1"}
                key={1} 
                isRemoval={true} 
                onAdd={true}
                onRemove={true} 
            />
        </div>
    );
};

export default Playlist;