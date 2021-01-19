import React from 'react';
class MusicPlayer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="screenContentDiv">
                <div className="screenHeader">
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <h1>Music Player</h1>
            </div>
        )
    }
}
const styles={
   
}
export default MusicPlayer;