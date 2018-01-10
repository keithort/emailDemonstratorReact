import React, { Component } from "react";
import Logo from './logo-abcbest.jpg'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container grid centered">
          <div className="col-xs-12 col-md-3">
            <img src={Logo} alt="ABC Best Title" />
          </div>
          <div className="col-xs-12 col-md-9">
            <h1>NextDeal&#8482; Email Demonstrator</h1>
          </div>
        </div>
      </header>
    )
  }
}