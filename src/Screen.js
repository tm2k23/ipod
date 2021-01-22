import React from 'react';

/* below imports are to import all the screen components */
import Home from './Home';
import Settings from './Home List Item Components/Settings';
import Games from './Home List Item Components/Games'
import MusicPlayer from './Music List Item Components/MusicPlayer';
import MusicMenu from './Home List Item Components/MusicMenu';
import Artists from './Music List Item Components/Artists';
import Albums from './Music List Item Components/Albums';
class Screen extends React.Component { // screen component class 
    render() {
        return (
            <div id="screen">
                {/* below is the conditional rendering of the screen compontnts depending upon 
                the value of activeScreen in state received here by props */}

                {this.props.activeScreen==='home' && <Home activeItem={this.props.activeItem}/> } 
                {this.props.activeScreen==='games' && <Games/> } 
                {this.props.activeScreen==='settings' && <Settings/> } 
                {this.props.activeScreen==='nowPlaying' && <MusicPlayer setPlayerMounted={this.props.setPlayerMounted}/>}
                {this.props.activeScreen==='music'&& <MusicMenu activeMusicItem={this.props.activeMusicItem}/>}
                {this.props.activeScreen==='allSongs' && <MusicPlayer setPlayerMounted={this.props.setPlayerMounted}/>}
                {this.props.activeScreen==='artists' && <Artists/>}
                {this.props.activeScreen==='albums' && <Albums/>}
            </div>
        )
    }
}

export default Screen;