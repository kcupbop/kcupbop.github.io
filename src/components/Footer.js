import React from 'react';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
  return (
    <footer className="w3-center w3-light-grey w3-padding-48 w3-large">
      <p>Copyright @2018 K CUPBOP Inc.</p>
      <a href="tel:7868775451">(786) 877-5451</a>
      <p>519 E 6th St Austin, TX</p>
      <div>
        <SocialIcon url="https://www.facebook.com/" />
        <SocialIcon url="https://www.instagram.com/" />
        <SocialIcon url="https://www.snapchat.com/" />
        <SocialIcon url="https://www.yelp.com/biz/k-cupbop-austin-2?osq=cupbop" />
      </div>
    </footer>
  );
};

export default Footer;