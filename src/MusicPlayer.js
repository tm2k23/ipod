import React from 'react';
class MusicPlayer extends React.Component{
    constructor(){
        super();
        
    }
    componentDidMount(){
        var self=this;
        var track = document.getElementsByTagName('audio')[0];
        this.props.setPlayerMounted();
        track.addEventListener('timeupdate',self.updateTrackTime);
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
                <span style={{marginLeft:'5px',color:"white"}} id="currentTime">00:00</span>
                <div style={styles.base}>
                    <div style={styles.runner}><i class="fas fa-circle" style={styles.runnerPointer}></i></div>
                </div>
                <span style={{color:"white"}} id="duration">{this.formatSecondsAsTime(document.getElementsByTagName('audio')[0].duration)}</span>
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
        width:'70%',
        height:'8px',
        backgroundColor:'#e0d7d0',
        // marginLeft:'12.5px',
        // display:'inline-block',
        position:'absolute',
        bottom:'45px',
        left:'55px',
        borderRadius:'20px'
    },
    runner:{
        width:'50%',
        height:'100%',
        backgroundColor:'#58bb48',
        borderRadius:'20px'
    },
    runnerPointer:{
        float:'right',
        color:'#6ba1d8',
        fontSize:"1.5rem",
        marginTop:'-7px',
        marginRight:'-10px'
    }
}
export default MusicPlayer;