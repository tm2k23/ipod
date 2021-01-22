/* below imports are to import all the screen components */
import Home from './Home';
import Settings from '../Home List Item Components/Settings';
import Games from '../Home List Item Components/Games'
import MusicPlayer from '../Music List Item Components/MusicPlayer';
import MusicMenu from '../Home List Item Components/MusicMenu';
import Artists from '../Music List Item Components/Artists';
import Albums from '../Music List Item Components/Albums';
const Screen =(props) =>{ // screen function component 
    return (
        <div id="screen">
            {/* below is the conditional rendering of the screen compontnts depending upon 
            the value of activeScreen in state received here by props */}

            {props.activeScreen==='home' && <Home activeItem={props.activeItem}/> } 
            {props.activeScreen==='games' && <Games/> } 
            {props.activeScreen==='settings' && <Settings/> } 
            {props.activeScreen==='nowPlaying' && <MusicPlayer setPlayerMounted={props.setPlayerMounted}/>}
            {props.activeScreen==='music'&& <MusicMenu activeMusicItem={props.activeMusicItem}/>}
            {props.activeScreen==='allSongs' && <MusicPlayer setPlayerMounted={props.setPlayerMounted}/>}
            {props.activeScreen==='artists' && <Artists/>}
            {props.activeScreen==='albums' && <Albums/>}
        </div>
    )
    
}

export default Screen;