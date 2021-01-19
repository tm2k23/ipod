import React from 'react';
class Home extends React.Component{
    constructor(){
        super();
        // console.log(this.props);
    }
    homeMenu = ['nowPlaying', 'music', 'games', 'settings'];
    highlightActiveItem=()=>{
        // console.log(this.props);
        // console.log(document.getElementById(this.props.activeItem));
        var previousItemIndex=(this.homeMenu.indexOf(this.props.activeItem)-1);
        previousItemIndex=(previousItemIndex>3)?0:previousItemIndex;
        previousItemIndex=(previousItemIndex<0)?3:previousItemIndex;
        console.log('Previous Index : ',previousItemIndex , ' Current Index : ', this.homeMenu.indexOf(this.props.activeItem));
        document.getElementById(this.homeMenu[previousItemIndex]).style.backgroundColor='transparent';
        document.getElementById(this.props.activeItem).style.backgroundColor='rgb(251,212,131)';
    }
    componentDidMount(){
        // this.highlightActiveItem();
    }
    componentDidUpdate(){
        // this.highlightActiveItem();
    }
    render(){
        // this.highlightIt();
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