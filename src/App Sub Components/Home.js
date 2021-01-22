// Home functional component
const Home = (props) => {
    return(
        <div id="home" className="screenContentDiv" style={{backgroundImage: 'url(home-background.jpeg)'}}>
            {/* this is the main home div */}
            <div className="menuDiv">
                {/* this is the menu div */}
                <div className="menuHeader">
                    {/* this is the header which contains a battery fontawesome icon */}
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <div className="menuList">
                    {/* this div in the menu list div and containg the kist of items */}
                    <ul>
                        <li id="nowPlaying"
                            className={(props.activeItem=="nowPlaying")?"highlight":''}
                            // class is added to highlight it only if it is the active item
                        >Now Playing</li>
                        <li id="music"
                            className={(props.activeItem=="music")?"highlight":''}
                        >Music</li>
                        <li id="games"
                            className={(props.activeItem=="games")?"highlight":''}
                        >Games</li>
                        <li id="settings"
                            className={(props.activeItem=="settings")?"highlight":''}
                        >Settings</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Home; // export the home component