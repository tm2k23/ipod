import Pad from './App Sub Components/Pad'; // this is the pad component of ipod i.e. touch pad and buttons
import Screen from './App Sub Components/Screen'; // this is the screen component of the ipod 
import React from 'react';
import song from './songs/onmyway.mp3';
class App extends React.Component {
  constructor(){ // constructor of App Class
    super(); // to call the constructor of React.Component
    this.state={ // defining the state 
      activeScreen:'home', // active screen in the screen component 
      activeItem:'nowPlaying', // active item in the home menu list 
      activeMusicItem:'allSongs', // active itme in the music menu list 
      isPlayerMounted:false // tells if the music-player component was mounted once, this state is because,
      // music wont be played just after starting the app on pressing the play-pause button
      // play-pause button will start working only after user tries to play the music once
    }
  }

  homeMenu = ['nowPlaying', 'music', 'games', 'settings']; // array of items in home menu list
  musicMenu = ['allSongs','artists','albums']; // array of items in music menu list 
  
  /* this function is to change the active itme in menu and is passed as props to the pad component because 
  active menu item is changed from rotation on pad */ 
  changeActiveItem=(itemToSet)=>{
    // if the active screen is home screen then change the active home menu item in state
    if(this.state.activeScreen==='home'){
      this.setState({
        activeItem:itemToSet
      })
    }
    // if the active screen is music-menu screen then change the active music menu item in state
    if(this.state.activeScreen==='music'){
      this.setState({
        activeMusicItem:itemToSet
      })
    }
  }

  /* this function is to change set the active screen, active screen is controlled by pad components middle button
  so it is passed as props to the pad component and is called when the middle button is clicked */
  setActiveScreen=()=>{
    // if the active screen is home screen then activeScreen is going to be the one from the list on home menu
    if(this.state.activeScreen==='home'  ){
      this.setState({
        activeScreen:this.state.activeItem
      })
    }
    // if the active screen is music-menu screen then activeScreen is going to be the one from the list on music menu
    if(this.state.activeScreen==='music'){
      this.setState({
        activeScreen:this.state.activeMusicItem
      })
    }
  }

  /* this function is to go back to previous page, when menu button is pressed ,
  passed as props to pad component and is called when menu button is pressed
  after that active screen is changed in the state   */
  setMenuPage=()=>{

    /* if the active screen will be the one from the items in the music menu then it need to go back to the music menu */
    if(this.musicMenu.includes(this.state.activeScreen)){
      this.setState({
        activeScreen:'music'
      })
    }

     /* else if the active screen will be the one from the items in the home menu then it need to go back to the home menu */
    else{
      this.setState({
        activeScreen:'home'
      })
    }
  }

  /* this function is to set the state once the player is mounted
  i.e. music is played once by the user, 
  until and unless music wont be played once by the user, play-pause button on pad wont work 
  this function is passed as props to the screen component and thereafter passed to music player component 
  and is called once the music player is mounted*/
  setPlayerMounted=()=>{
    if(this.state.isPlayerMounted == false)
      document.getElementsByTagName('audio')[0].play(); // autoplay the music when player is mounted for the first time
    this.setState({
      isPlayerMounted:true // set player mounted as true in the state 
    })
  }

  render(){ // this is the render function
    /* what is inside return ? 
    a div app, inside which there is anoth div ipod
    it has three things 
    1. audio (it is not in the music player component because, music need to be played if the player component is not there )
    2. Screen component 
    3 Pad component */
    return (
      <div className="App">
        <div id="ipod">
          <audio > 
            <source src={song}></source>
          </audio>
          <Screen // all the props passed to this component are mention above with the reasons why they are passed
            activeScreen={this.state.activeScreen}
            activeItem={this.state.activeItem}
            activeMusicItem={this.state.activeMusicItem}
            setPlayerMounted={this.setPlayerMounted}
            // setActiveScreen={this.setActiveScreen}
          />
          <Pad // all the props passed to this component are mention above with the reasons why they are passed
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
