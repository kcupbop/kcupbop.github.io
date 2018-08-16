import React from 'react';

const Location = () => {
  return (
    <div
      className="w3-container"
      id="where"
      style={{
      paddingBottom: '30px'
    }}>
      <div className="w3-content" style={{
        maxWidth: '700px'
      }}>
        <h5 className="w3-center w3-padding-48">
          <span className="w3-tag-red w3-wide">WHERE TO FIND US</span>
        </h5>
        <p>Find us at 519 E 6th St Austin, TX</p>
        <div
          id="googleMap"
          style={{
          width: '100%',
          height: '400px'
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1722.9822073661785!2d-97.73760151078521!3d30.266595103906283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b53a593160a1%3A0xf96ea8822b26d410!2sK+CUPBOP!5e0!3m2!1sen!2sus!4v1532400657589"
            id="iframe-map"
            title="google-map"
            width="100%"
            height="400px"
            frameBorder="0"
            style={{
            border: 0
          }}
            allowFullScreen></iframe>
        </div>
      </div>
    </div>

  );
};

export default Location;