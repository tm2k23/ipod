import React from 'react';
class MusicPlayer extends React.Component{ //  MusicPlayer class component 
    componentDidMount(){
        // this function is executed when the component is mounted
        var self=this;
        var track = document.getElementsByTagName('audio')[0];
        this.props.setPlayerMounted(); // change the state to indicate that is player is mounted once 
        //and now music can be played via play-pause button on pad
        
        // add event listener so that time on the screen updates when time of the track updates 
        track.addEventListener('timeupdate',self.updateTrackTime);  

        // set the runner width according to the % of track completed 
        document.getElementById('runner').style.width=(track.currentTime/track.duration)*100 + '%';
    }
    componentWillUnmount(){
        /* this will be executed when the component unmounts i.e. when the screen changes

        ->>>> purpose ??
        ===>>>>this is used because timeupdate event listener is added when the component mounts,
        and its callback fetches the DOM Objects which is in the musicplayer component
        if the event listener wont be removed, it will show an error as that DOM object wont be available*/
        var self=this;
        var track = document.getElementsByTagName('audio')[0];
        // remove the eventlistener
        track.removeEventListener('timeupdate',self.updateTrackTime);
    }
    
    // this function updates the time, on the screen
    updateTrackTime=()=>{
        var track = document.getElementsByTagName('audio')[0]; // fetch the track
        document.getElementById('runner').style.width=(track.currentTime/track.duration)*100 + '%'; // increase the width
        var currTimeDiv = document.getElementById('currentTime'); // current time div
        var currTime = Math.floor(track.currentTime).toString(); // change it tostring
        currTimeDiv.innerHTML = this.formatSecondsAsTime(currTime); // format the time from sec to min:sec
    };

    // function to change the time from sec to hr:min:sec
    formatSecondsAsTime(secs, format) {
        var hr  = Math.floor(secs / 3600);
        var min = Math.floor((secs - (hr * 3600))/60);
        var sec = Math.floor(secs - (hr * 3600) -  (min * 60));
        if (min < 10){ 
          min = "0" + min; 
        }
        if (sec < 10){ 
          sec  = "0" + sec;
        }
        return min + ':' + sec;
    };

    render(){
        return(
            <div className="screenContentDiv" style={{backgroundImage:'url(musicplayerbackground.jpeg)',position:'relative'}}>
                <div className="screenHeader">
                    {/* screen header as in rest of the screens */}
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <div>
                    {/* song poster */}
                    <img src="alanwalker.jpeg" style={styles.songPoster}></img>
                    <div style={styles.songDetailsDiv}>
                        {/* song details div */}
                        <h2>On My Way</h2>
                        <div style={styles.songHistory}>
                            Alan Walker<br></br>
                            Sabrina Carpenter<br></br>
                            21 March 2019
                        </div>
                    </div>
                </div>
                <br></br>
                {/* current time div  */}
                <div style={styles.currentTime} id="currentTime">{this.formatSecondsAsTime(document.getElementsByTagName('audio')[0].currentTime)}</div>
                
                {/* track % completion indicatordiv  
                 it has a base and a runner isdie that div whose width changes accoding to the % of track completed */}
                <div style={styles.base}>
                    <div style={styles.runner} id="runner"><i class="fas fa-circle" style={styles.runnerPointer}></i></div>
                </div>

                {/* duration time div */}
                <div style={styles.duration} id="duration">{this.formatSecondsAsTime(document.getElementsByTagName('audio')[0].duration)}</div>
            </div>
        )
    }
}
const styles={
    //  styling the Music Player Component
    songPoster:{
        height:'150px',
        width:'150px',
        borderRadius:'50%',
        marginTop:'30px',
        marginLeft:'20px'
    },
    songDetailsDiv:{
        width:'40%',
        display:'inline-block',
        marginTop:'30px',
        marginLeft:'15px',
        verticalAlign:'top',
        color:'white'
    },
    songHistory:{
        color:"#62de65"
    },
    base:{
        width:'55%',
        height:'8px',
        backgroundColor:'#e0d7d0',
        // marginLeft:'12.5px',
        // display:'inline-block',
        position:'absolute',
        bottom:'45px',
        left:'75px',
        borderRadius:'20px'
    },
    runner:{
        height:'100%',
        backgroundColor:'#58bb48',
        borderRadius:'20px',
    },
    runnerPointer:{
        float:'right',
        color:'#6ba1d8',
        fontSize:"1.5rem",
        marginTop:'-7px',
        marginRight:'-20px',
        transition:"all 0s linear"
    },
    currentTime:{
        display:'inline-block',
        marginLeft:'25px',
        color:"white",
        marginTop:"14px",
        fontSize:'0.9rem'
    },
    duration:{
        display:'inline-block',
        color:"white",
        fontSize:'0.9rem',
        float:'right',
        marginTop:"14px",
        marginRight:'25px'
    }
}
export default MusicPlayer; // export the component 