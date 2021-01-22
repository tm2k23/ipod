//  this is the music menu component (functional component)

const MusicMenu = (props) => {
    return(
        <div id="home" className="screenContentDiv" style={{backgroundImage: 'url(home-background.jpeg)'}}>
            <div className="menuDiv">
                <div className="menuHeader">
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <div className="menuList">
                    {/* this div in the music menu list div and containg the list of items */}
                    <ul>
                        <li id="allSomgs"
                            className={(props.activeMusicItem==="allSongs")?"highlight":''}
                            // class is added to highlight it only if it is the active item
                        >All Songs</li>
                        <li id="artists"
                            className={(props.activeMusicItem==="artists")?"highlight":''}
                        >Artists</li>
                        <li id="albums"
                            className={(props.activeMusicItem==="albums")?"highlight":''}
                        >Albums</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default MusicMenu; // export the component