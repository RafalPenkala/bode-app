import React, { Component } from 'react'
import { Image, Icon } from 'semantic-ui-react'

import './Navigation.css';
import face_icon from '../images/face_icon.png';


class Navigation extends Component {
render() {
  return (
    <nav id="nav">
      <a className="dropdown-menu"></a>
      <section className="top-section">
        <ul className="App-navigation menu">
        <li className="App-navigation-left"> <a href="#">DASHBOARD</a></li>
          <li className="App-navigation-left"> <a href="#">RECIPES</a></li>
          <li className="App-navigation-left"> <a href="#">CHALLENGE</a></li>
          <li className="App-navigation-right"> <a href="#"><Image src={face_icon} avatar/>Olivia Wilde<Icon name='angle down'/></a></li>
        </ul>
      </section>
    </nav>
  );
}
}

export default Navigation;