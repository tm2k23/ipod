import { render } from '@testing-library/react';
import React from 'react';
import ZingTouch from 'zingtouch';
class Pad extends React.Component {
    render() {
        return (
            <div id="pad">
                <div className="padButton" id="menu" style={{ fontWeight: 'bolder' }}>
                    <i class="fas fa-bars"></i>
                </div>
                <div id="midRow">
                    <div className="padButton" id="backward" style={{ marginRight: 12 }}>
                        <i class="fas fa-fast-backward"></i>
                    </div>
                    <div id="mid"></div>
                    <div className="padButton" id="forward" style={{ marginLeft: 12 }}>
                        <i class="fas fa-fast-forward"></i>
                    </div>
                </div>
                <div className="padButton" id="playpause">
                    <i class="fas fa-play"></i><i class="fas fa-pause"></i>
                </div>
            </div>
        )
    };
}

// var touchArea = document.getElementById("pad");
// var myRegion = new ZingTouch.Region(touchArea);

// myRegion.bind(touchArea, 'rotate', function(event) {
//     console.log(event);
// });

export default Pad;