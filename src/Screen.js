import React from 'react';
import Home from './Home';
import Settings from './Settings';
import Games from './Games'
class Screen extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div id="screen">
                <Home/>
            </div>
        )
    }
}

export default Screen;