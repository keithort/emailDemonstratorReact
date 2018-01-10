import React, { Component } from 'react'
import AICPA from './logo-aicpa-soc.png'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="grid container">
          <div className="col-xs-12 col-md-3">
            <h4>Questions?</h4>
            <a href="mailto:sales@nextdeal.us">sales@nextdeal.us</a><br />
            877-711-7226
          </div>
          <div className="col-xs-12 col-md-3">
            <h4>About NextDeal</h4>
            <ul id="menu-footer" className="menu">
              <li className="about-us"><a href="https://www.nextdeal.us/about-us.php">About Us</a></li>
              <li className="privacy-policy"><a href="https://www.nextdeal.us/privacy-policy.php">Privacy Policy</a></li>
              <li className="terms-and-conditions"><a href="https://www.nextdeal.us/legal.php">Terms and Conditions</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-3">
            <h4>Address</h4>
            NextDeal<br />
            4307 Vineland Rd.<br />
            Suite H-11<br />
            Orlando, FL 32811
          </div>
          <div className="col-xs-12 col-md-3">
            <img src={AICPA} alt="AICPA/SOC Compliant" />
          </div>
        </div>
        <div>
          Copyright 2018 DigitalDocs.net, LLC
        </div>
      </footer>
    )
  }
}