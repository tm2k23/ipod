import React from 'react';
class MusicPlayer extends React.Component{
    componentDidMount(){
        var self=this;
        var track = document.getElementsByTagName('audio')[0];
        this.props.setPlayerMounted();
        track.addEventListener('timeupdate',self.updateTrackTime);
        document.getElementById('runner').style.width=(track.currentTime/track.duration)*100 + '%';
    }
    componentWillUnmount(){
        var self=this;
        console.log('component un mounted');
        var track = document.getElementsByTagName('audio')[0];
        track.removeEventListener('timeupdate',self.updateTrackTime);
        console.log('event listener removed');
    }
    updateTrackTime=()=>{
        var track = document.getElementsByTagName('audio')[0];
        document.getElementById('runner').style.width=(track.currentTime/track.duration)*100 + '%';
        console.log('time is getting updated ');
        var currTimeDiv = document.getElementById('currentTime');
        var durationDiv = document.getElementById('duration');
        var currTime = Math.floor(track.currentTime).toString(); 
        var duration = Math.floor(track.duration).toString();
        currTimeDiv.innerHTML = this.formatSecondsAsTime(currTime);
        if (isNaN(duration)){
            durationDiv.innerHTML = '00:00';
        } 
        else{
            durationDiv.innerHTML = this.formatSecondsAsTime(duration);
        }
    };
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
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <div>
                    <img src="alanwalker.jpeg" style={styles.songPoster}></img>
                    <div style={styles.songDetailsDiv}>
                        <h2>On My Way</h2>
                        <div style={styles.songHistory}>
                            Alan Walker<br></br>
                            Sabrina Carpenter<br></br>
                            21 March 2019
                        </div>
                    </div>
                </div>
                <br></br>
                <div style={styles.currentTime} id="currentTime">{this.formatSecondsAsTime(document.getElementsByTagName('audio')[0].currentTime)}</div>
                <div style={styles.base}>
                    <div style={styles.runner} id="runner"><i class="fas fa-circle" style={styles.runnerPointer}></i></div>
                </div>
                <div style={styles.duration} id="duration">{this.formatSecondsAsTime(document.getElementsByTagName('audio')[0].duration)}</div>
            </div>
        )
    }
}
const styles={
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
export default MusicPlayer;