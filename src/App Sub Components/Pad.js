import { render } from '@testing-library/react';
import React from 'react';
// zingtouch is the library to use the rotate touch event to travel through the menu items based upon the angle rotated
import ZingTouch from 'zingtouch'; 
class Pad extends React.Component { // Pad component class 
    componentDidMount() {
        this.rotate(); // this is to add event listener or to set up zingtouch once the Pad component is mounted 
    }

    // keeping an array of items in menu,will be needed to traverse throught the list on rotate 
    homeMenu = ['nowPlaying', 'music', 'games', 'settings'];
    musicMenu = ['allSongs','artists','albums'];

    /* this function is called onece the pad component is mounted */
    rotate=()=>{
        const touchArea = document.getElementById("pad");

        
        const myRegion = new ZingTouch.Region(touchArea);
        var activeMenuIndex=0;
        var changeInAngle=0;
        const self=this;
        myRegion.bind(touchArea, 'rotate', function (event) {
            // console.log(event.detail);
            changeInAngle++;
            var distanceFromLast=event.detail.distanceFromLast;
            // console.log('distance : ',distanceFromLast," angle : ",angle);
            if(distanceFromLast>0){
                if(changeInAngle>15){
                    activeMenuIndex++;
                    if(self.props.activeScreen === "home")
                    {
                        // console.log(self.props.activeScreen);
                        activeMenuIndex=(activeMenuIndex>3)?0:activeMenuIndex;
                        // console.log('angle changed by ',changeInAngle,' degree, change index to : ',activeMenuIndex);
                        changeInAngle=0;
                        self.props.changeActiveItem(self.homeMenu[activeMenuIndex])
                    }else{
                        activeMenuIndex=(activeMenuIndex>2)?0:activeMenuIndex;
                        changeInAngle=0;
                        self.props.changeActiveItem(self.musicMenu[activeMenuIndex]);
                    }
                }
            }else{
                if(changeInAngle>15){
                    activeMenuIndex--;
                    if(self.props.activeScreen === "home")
                    {
                        activeMenuIndex=(activeMenuIndex<0)?3:activeMenuIndex;
                        // console.log('angle changed by ',changeInAngle,' degree, change index to : ',activeMenuIndex);
                        changeInAngle=0;
                        self.props.changeActiveItem(self.homeMenu[activeMenuIndex]);
                    }else{
                        activeMenuIndex=(activeMenuIndex<0)?2:activeMenuIndex;
                        changeInAngle=0;
                        self.props.changeActiveItem(self.musicMenu[activeMenuIndex]);
                    }
                }
            }
        })
    }
    playPause=(song)=>{
        if(this.props.isPlayerMounted === true){
            console.log(song[0].paused);
            if(song[0].paused===true){
                song[0].play();    
            }
            else{
                song[0].pause();
            }
        }
    }

    render() {
        return (
            <div id="pad">
                <div className="padButton" id="menu"
                style={{ fontWeight: 'bolder' }}
                onClick={()=>{this.props.setMenuPage()}} >
                    <i className="fas fa-bars"></i>
                </div>
                <div id="midRow">
                    <div className="padButton" id="backward" style={{ marginRight: 12 }}>
                        <i className="fas fa-fast-backward"></i>
                    </div>
                    <div id="mid" onClick={() => { this.props.setActiveScreen('games') }}></div>
                    <div className="padButton" id="forward" style={{ marginLeft: 12 }}>
                        <i className="fas fa-fast-forward"></i>
                    </div>
                </div>
                <div className="padButton" id="playpause" onClick={()=>{this.playPause(document.getElementsByTagName('audio'))}}>
                    <i className="fas fa-play"></i><i class="fas fa-pause"></i>
                </div>
            </div>
        )
    };
}

export default Pad;