import React from 'react';
class Artists extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="screenContentDiv">
                <div className="screenHeader">
                    <span className="ipod-icon">iPod</span>
                    <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
                </div>
                <h1>Artists Component</h1>
            </div>
        )
    }
}
const styles={
   
}
export default Artists;