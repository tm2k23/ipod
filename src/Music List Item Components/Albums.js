import React from 'react';
import '../stylesheets/album.css';
const Albums = (props) => {
    return (
        <div className="screenContentDiv">
            <div className="screenHeader">
                <span className="ipod-icon">iPod</span>
                <span className="battery"><i class="fas fa-battery-three-quarters"></i></span>
            </div>
            <div className="albumContainer" style={{backgroundImage:'url(musicplayerbackground.jpeg)'}}>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_timewarner/music/1486404000/srch_timewarner_A10302B0003844206J.jpg"></img>
                    <br></br>÷(Deluxe)
                </div>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_timewarner/music/thumbnail/srch_timewarner_A10302B0000074416S.jpg"></img>
                    <br></br>Zeppelin IV
                </div>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/1524772973/srch_universalmusic_00602567647492-USUM71710835.jpg"></img>
                    <br></br>Beerbongs
                </div>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1598332100/srch_universalmusic_00602527856896-USSUB1100004.jpg"></img>
                    <br></br>Nevermind
                </div>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_timewarner/music/srch_timewarner_A10302B0003692889L.jpg"></img>
                    <br></br>24K Magic
                </div>
                <div>
                    <img src="https://img.wynk.in/unsafe/180x180/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_universalmusic/music/update/1594628904/srch_universalmusic_00602547943521-USCM51600028.jpg"></img>
                    <br></br>Views
                </div>

            </div>
        </div>
    )
}
export default Albums;