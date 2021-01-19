import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games'
class Screen extends React.Component {
    
    render() {
        // console.log(this.props);
        return (
            <div id="screen">
                {this.props.activeScreen==='home' && <Home activeItem={this.props.activeItem}/> } 
                {this.props.activeScreen==='games' && <Games/> } 
                {this.props.activeScreen==='settings' && <Settings/> } 
            </div>
        )
    }
}

export default Screen;