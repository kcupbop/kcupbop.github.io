import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../images/cupbop1.jpg';
import image2 from '../images/cupbop2.jpg';
import image3 from '../images/store.jpg';
import image4 from '../images/store1.jpg';

const Header = () => {
  return (
    <div className="bgimg w3-display-container" id="home" style={{marginTop: '64px'}}>
      {/* <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag w3-large">Open from 11:30am to 2:00am</span>
      </div>
      <div className="w3-display-middle w3-center">
        <span className="w3-text-white w3-jumbo">Korean
          <br/>
          CUP BOP</span>
      </div>
      <div className="w3-display-bottomright w3-center w3-padding-large">
        <span className="w3-tag w3-large">519 E 6th St. Austin, TX 78701</span>
      </div> */}
      <BackgroundSlideshow images={[ image1, image2, image3, image4 ]} animationDelay='5000'/>
    </div>
  );
};

export default Header;