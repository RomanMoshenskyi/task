import React from 'react';
import instragrmIcon from './img/instagram.png';
import twitterIcon from './img/twitter-alt_12107622.png';
import facebookIcon from './img/facebooklogo.png';
import linkedinIcon from './img/linkedin.png';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id='contacts' className="footer-theme-background"></div>  

        <div className="footer-theme-icons">
          <a href="https://www.instagram.com/roma_.rm/profilecard" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <img src={instragrmIcon} alt="Instagram" width="22" height="22" />
          </a>
          <a href="https://x.com/roma_rm03?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" width="22" height="22" />
          </a>
          <a href="https://www.facebook.com/share/19zKoMumyv/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" width="22" height="22" />
          </a>
          <a href="https://at.linkedin.com/in/roman-moshenskyi-745171282" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={linkedinIcon} alt="Linkedin" width="22" height="22" />
          </a>
        </div>
        <div className="footer-theme-text">
          © Roman Moshenskyi 2025.
        </div>
      </div>
    );
  }
}


export default Footer;