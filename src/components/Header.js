import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow';

const imageArray = [
  'https://s19.postimg.cc/vf8r099gz/ORG_DSC08287.jpg',
  'https://s19.postimg.cc/697ssz5hf/ORG_DSC08270.jpg',
  'https://s19.postimg.cc/whixibupv/ORG_DSC08281.jpg',
  'https://s19.postimg.cc/jq4rbu837/ORG_DSC08272.jpg',
  'https://s19.postimg.cc/j5ubmueib/ORG_DSC08299.jpg',
  'https://s19.postimg.cc/k2w5ifirn/ORG_DSC08320.jpg',
  'https://s19.postimg.cc/nz9hegthf/ORG_DSC08327.jpg',
  'https://s19.postimg.cc/nmi37sis3/ORG_DSC08344.jpg',
  'https://s19.postimg.cc/6lz6z4l6b/ORG_DSC08342.jpg',
  'https://s19.postimg.cc/7gqbywaoz/ORG_DSC08296.jpg'
]

const Header = () => {
  return (
    <div
      className="bgimg w3-display-container"
      id="home"
      style={{
      marginTop: '64px'
    }}>
      <BackgroundSlideshow images={imageArray}/>
    </div>
  );
};

export default Header;