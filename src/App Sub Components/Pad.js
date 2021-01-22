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

    /* this function is called once the pad component is mounted */
    rotate=()=>{
        const touchArea = document.getElementById("pad"); // fetch the "#pad" DOM

        // setting up zingtouch to handle the rotate event 
        const myRegion = new ZingTouch.Region(touchArea); // create a new region
        var activeMenuIndex=0; // initially the first element in the list is active i.e. 0th index element in the homeMenu array list
        var changeInAngle=0; // this is to observe the change in angle, active item changes on 15 degree rotation
        const self=this; // keeping the "this" in self because value of this will be changed when I need to use this "this" inside another function
        myRegion.bind(touchArea, 'rotate', function (event) { // bind region with the rotate event
            changeInAngle++; // increase the value of change in angle
            var distanceFromLast=event.detail.distanceFromLast; // gives the value of distance from last
            if(distanceFromLast>0){ // if the value of distance from last is positive, it means it is rotated clockwise
                if(changeInAngle>15){ // if the change in angle is >15
                    activeMenuIndex++; // then increase the value of index
                    // if the home screen is active then item will be changed in home menu
                    // else will be changed in music menu list
                    if(self.props.activeScreen === "home")
                    {
                        activeMenuIndex=(activeMenuIndex>3)?0:activeMenuIndex; // handle the edge case i.e. when index value >3 switch it to 0
                        changeInAngle=0; // and make it as zero so that other 15 degree move is observed
                        self.props.changeActiveItem(self.homeMenu[activeMenuIndex]) // change the active item
                    }else{
                        activeMenuIndex=(activeMenuIndex>2)?0:activeMenuIndex; //when index value >2 switch it to 0
                        changeInAngle=0;
                        self.props.changeActiveItem(self.musicMenu[activeMenuIndex]);
                    }
                }
            }
            /* this is the case when it will rotated in left direction  */
            else{
                if(changeInAngle>15){ // when 15 degree is rotated
                    activeMenuIndex--; // decrease the index value i.e. move up in the list 
                    if(self.props.activeScreen === "home")
                    {
                        activeMenuIndex=(activeMenuIndex<0)?3:activeMenuIndex;  //when index value <0 switch it to last i.e. 3
                        changeInAngle=0;
                        self.props.changeActiveItem(self.homeMenu[activeMenuIndex]);
                    }else{
                        activeMenuIndex=(activeMenuIndex<0)?2:activeMenuIndex;  //when index value <0 switch it to last i.e. 2
                        changeInAngle=0;
                        self.props.changeActiveItem(self.musicMenu[activeMenuIndex]);
                    }
                }
            }
        })
    }

    // this is call back function for play pause button click 
    playPause=(song)=>{
        // button only works only if the user opens player atleast once
        if(this.props.isPlayerMounted === true){
            if(song[0].paused===true){
                song[0].play(); // if the song is paused, play it 
            }
            else{
                song[0].pause();// else pause it 
            }
        }
    }

    render() {
        return (
            // this is the pad component 
            <div id="pad">  
                <div className="padButton" id="menu"
                style={{ fontWeight: 'bolder' }}
                onClick={()=>{this.props.setMenuPage()}} >
                    {/* font awesome ison of menu button */}
                    <i className="fas fa-bars"></i> 
                </div>
                <div id="midRow">
                    {/* this is the middle row and contains previous and next button and center div working as ok button */}
                    <div className="padButton" id="backward" style={{ marginRight: 12 }}>
                        <i className="fas fa-fast-backward"></i>
                    </div>
                    
                    {/* this works as an OK button which sets the activeItem as screen */}
                    <div id="mid" onClick={() => { this.props.setActiveScreen() }}></div>
                    <div className="padButton" id="forward" style={{ marginLeft: 12 }}>
                        <i className="fas fa-fast-forward"></i>
                    </div>
                </div>
                <div className="padButton" id="playpause" onClick={()=>{this.playPause(document.getElementsByTagName('audio'))}}>
                    {/* this is the play pause toggle button */}
                    <i className="fas fa-play"></i><i class="fas fa-pause"></i>
                </div>
            </div>
        )
    };
}

export default Pad;