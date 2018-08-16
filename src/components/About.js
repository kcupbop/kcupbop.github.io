import React from 'react';

const About = () => {
  return (
    <div className="w3-container" id="about">
      <div className="w3-content" style={{
        maxWidth: '700px'
      }}>
        <h5 className="w3-center w3-padding-64">
          <span className="w3-tag-red w3-wide">ABOUT K CUP BOP</span>
        </h5>
        <p>K CUP BOP ATX</p>
        <div className="w3-panel w3-leftbar w3-light-grey">
          <p>
            <i>website under construction...</i>
          </p>
          <p>- developer</p>
        </div>
        <img
          src="/images/store.jpg"
          alt="coffeeshop"
          style={{
          width: '100%',
          maxWidth: '1000px'
        }}
          className="w3-margin-top"/>
        <p>
          <strong>Business hours: </strong>
          everyday from 11:30am to 2:00am.</p>
        <p>
          <strong>Address: </strong>
          519 E 6th St. Austin, TX 78701</p>
      </div>
    </div>
  );
};

export default About;