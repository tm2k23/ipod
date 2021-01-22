import React from 'react';
class MusicMenu extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        // document.getElementById('allSomgs').classList.add('highlight');
    }
    render(){
        // console.log('home page is rendered with props : ',this.props);
        return(
            <div id="home" className="screenContentDiv">
                <div className="menuDiv">
                    <div className="menuHeader">
                        <span className="ipod-icon">iPod</span>
                        <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                    </div>
                    <div className="menuList">
                        <ul>
                            <li id="allSomgs"
                                className={(this.props.activeMusicItem==="allSongs")?"highlight":''}
                            >All Songs</li>
                            <li id="artists"
                                className={(this.props.activeMusicItem==="artists")?"highlight":''}
                            >Artists</li>
                            <li id="albums"
                                className={(this.props.activeMusicItem==="albums")?"highlight":''}
                            >Albums</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default MusicMenu;