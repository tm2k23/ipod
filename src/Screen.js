import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games'
import MusicPlayer from './MusicPlayer';
import MusicMenu from './MusicMenu';
import Artists from './Artists';
import Albums from './Albums';
class Screen extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <div id="screen">
                {this.props.activeScreen==='home' && <Home activeItem={this.props.activeItem}/> } 
                {this.props.activeScreen==='games' && <Games/> } 
                {this.props.activeScreen==='settings' && <Settings/> } 
                {this.props.activeScreen==='nowPlaying' && <MusicPlayer/>}
                {this.props.activeScreen==='music'&& <MusicMenu activeMusicItem={this.props.activeMusicItem}/>}
                {this.props.activeScreen==='allSongs' && <MusicPlayer/>}
                {this.props.activeScreen==='artists' && <Artists/>}
                {this.props.activeScreen==='albums' && <Albums/>}
            </div>
        )
    }
}

export default Screen;