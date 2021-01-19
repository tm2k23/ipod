import React from 'react';
class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log('home page is rendered with props : ',this.props);
        return(
            <div id="home" className="screenContentDiv">
                <div className="menuDiv">
                    <div className="menuHeader">
                        <span className="ipod-icon">iPod</span>
                        <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                    </div>
                    <div className="menuList">
                        <ul>
                            <li id="nowPlaying"
                                className={(this.props.activeItem=="nowPlaying")?"highlight":''}
                            >Now Playing</li>
                            <li id="music"
                                className={(this.props.activeItem=="music")?"highlight":''}
                            >Music</li>
                            <li id="games"
                                className={(this.props.activeItem=="games")?"highlight":''}
                            >Games</li>
                            <li id="settings"
                                className={(this.props.activeItem=="settings")?"highlight":''}
                            >Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;