import Pad from './Pad';
import Screen from './Screen';
import React from 'react';
import song from './onmyway.mp3';
// import ZingTouch from 'zingtouch';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      activeScreen:'home',
      activeItem:'nowPlaying',
      activeMusicItem:'allSongs',
      isPlayerMounted:false
    }
  }
  homeMenu = ['nowPlaying', 'music', 'games', 'settings'];
  musicMenu = ['allSongs','artists','albums'];
  changeActiveItem=(itemToSet)=>{
    if(this.state.activeScreen==='home'   ){
      // console.log('change active item called and is set to ',itemToSet);
      this.setState({
        activeItem:itemToSet
      })
    }
    if(this.state.activeScreen==='music'){
      // console.log('change active music item called and is set to ',itemToSet);
      this.setState({
        activeMusicItem:itemToSet
      })
    }
  }
  setActiveScreen=(screenToSet)=>{
    // console.log(screenToSet);
    // console.log(this.state.activeItem);
    if(this.state.activeScreen==='home'  ){
      // console.log('new active screen set');
      this.setState({
        activeScreen:this.state.activeItem
      })
    }
    if(this.state.activeScreen==='music'){
      // console.log('new active screen set');
      this.setState({
        activeScreen:this.state.activeMusicItem
      })
    }
  }
  setMenuPage=()=>{
    if(this.musicMenu.includes(this.state.activeScreen)){
      this.setState({
        activeScreen:'music'
      })
    }else{
      this.setState({
        activeScreen:'home'
      })
    }
  }
  setPlayerMounted=()=>{
    // console.log('Player is mounted ');
    this.setState({
      isPlayerMounted:true
    })
  }
  render(){
    return (
      <div className="App">
        <div id="ipod">
          <audio controls >
            <source src={song}></source>
          </audio>
          <Screen 
            activeScreen={this.state.activeScreen}
            activeItem={this.state.activeItem}
            activeMusicItem={this.state.activeMusicItem}
            setPlayerMounted={this.setPlayerMounted}
            // setActiveScreen={this.setActiveScreen}
          />
          <Pad 
            activeScreen={this.state.activeScreen}
            setMenuPage={this.setMenuPage}
            changeActiveItem={this.changeActiveItem} 
            setActiveScreen={this.setActiveScreen}
            isPlayerMounted={this.state.isPlayerMounted}
          />
        </div>
      </div>
    );
  }
}

export default App;
