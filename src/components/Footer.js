import React from "react";

export class Footer extends React.Component {

  render() {
    return (
      <div>
      <div className="topReverse"></div>
      <div className="curriculum" onclick="window.location.hash='back'">
        <div className="footer-social-icons">
          <h4 className="_14">Follow us on</h4>
          <ul className="social-icons">
            <li><a href="https://www.facebook.com/lavalabusc/?ref=nf" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/lavalabusc?lang=en" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
            <li><a href="https://www.linkedin.com/company-beta/3663395/" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/usclavalab/" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
          </ul>
        </div>
        <a href="design-guidelines.pdf"><b>Design Guidelines</b></a>
        <br />
      </div>
      </div>
    );
  }

}
export default Footer;
