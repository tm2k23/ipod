import Pad from './Pad';
import Screen from './Screen';
import React from 'react';
// import ZingTouch from 'zingtouch';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      activeScreen:'home',
      activeItem:'nowPlaying'
    }
  }
  changeActiveItem=(itemToSet)=>{
    console.log('change active item called and is set to ',itemToSet);
    this.setState({
      activeItem:itemToSet
    })
  }
  setActiveScreen=(screenToSet)=>{
    // console.log(screenToSet);
    // console.log(this.state.activeItem);
    this.setState({
      activeScreen:this.state.activeItem
    })
  }
  setHomePage=()=>{
    this.setState({
      activeScreen:'home'
    })
  }
  render(){
    return (
      <div className="App">
        <div id="ipod">
          <Screen 
            activeScreen={this.state.activeScreen}
            activeItem={this.state.activeItem}
          />
          <Pad 
            activeScreen={this.state.activeScreen}
            setHomePage={this.setHomePage}
            changeActiveItem={this.changeActiveItem} 
            setActiveScreen={this.setActiveScreen}
          />
        </div>
      </div>
    );
  }
}

export default App;
