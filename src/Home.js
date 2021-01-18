import React from 'react';
class Home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="home" className="screenContentDiv">
                <div className="menuDiv">
                    <div className="menuHeader">
                        <span className="ipod-icon">iPod</span>
                        <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                    </div>
                    <div className="menuList">
                        <ul>
                            <li>Now Playing</li>
                            <li>Music</li>
                            <li>Games</li>
                            <li>Settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;