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
        <p>
          <strong>Business hours:
          </strong>
          {' '}
          Everyday from 11:30am to 2:00am</p>
        <p>
          <strong>Address:
          </strong>
          {' '}
          519 E 6th St. Austin, TX 78701</p>
        <p>We are located in the heart of ATX downtown!</p>
        <div className="w3-panel w3-leftbar w3-light-grey">
          <p>
            Coming soon...
          </p>
          <ul>
            <li>
              BBQ BEEF RIP CUPBOP
            </li>
            <li>CLEAR NOODLE (VEGAN OPTION)</li>
          </ul>
        </div>
        <img
          src="https://s19.postimg.cc/f9gzqvodv/ORG_DSC08301.jpg"
          alt="about-cupbop"
          style={{
          width: '100%',
          maxWidth: '700px'
        }}
          className="w3-margin-top"/>

      </div>
    </div>
  );
};

export default About;