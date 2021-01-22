
const Settings=(props)=>{
    return(
        <div className="screenContentDiv">
            <div className="screenHeader">
                {/* screen header div */}
                <span className="ipod-icon">iPod</span>
                <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
            </div>
            <div style={styles.settingBody}>
                {/* this is the settings div and just contains one font awesone icon */}
                <i class="fas fa-cog"></i>
            </div>
        </div>
    )
}
const styles={
    // stying of Settings Component
    settingBody:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'200px',
        width:'100%',
        height:'93%',
        borderRadius:'0px 0px 10px 10px',
        marginTop:'0px',
        backgroundColor:"#9c8be8",
        color:'#ccf0cd'
    }
}
export default Settings; // export the component