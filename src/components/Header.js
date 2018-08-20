import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './Header.css';

import progress_bar from '../images/progress_bar.jpg';
import cheese_icon from '../images/cheese_icon.jpg';
import vege_icon from '../images/vege_icon.jpg';
import steak_icon from '../images/steak_icon.jpg';
import noFish_icon from '../images/noFish_icon.jpg';
import noChicken_icon from '../images/noChicken_icon.jpg';

class Header extends Component {
render() {
  return (
    <div className="header-section">
      <div className="header-container">
        <ul className="header-progress">
          <li>YOUR 12 WEEK PROGRESS</li>
          <li><img src={progress_bar} alt="progress bar"/></li>
          <li><span className="numbers-small">1 2 3 4 5 6 7 8 9 10 11 12</span></li>
        </ul>

    <div className="header-week">
      <Button className="week-btn prev"><Icon className="chevron-btn-lt" name="chevron left"/></Button>
        <p className="header-name">Week 7</p>
      <Button className="week-btn next"><Icon className="chevron-btn-rt" name="chevron right"/></Button>
    </div>

    <div className="header-food">
      <p className="header-small">SELECT YOUR PROTEIN OPTIONS</p>
        <div className="header-food-img">
          <img src={vege_icon} alt="vegtable"/>
          <img src={cheese_icon} alt="dairy"/>
          <img src={steak_icon} alt="red_meat"/>
          <img src={noFish_icon} alt="no_fish"/>
          <img src={noChicken_icon} alt="no_chicken"/>
          </div>
        </div>
    </div>
  </div>
  );
}
}

export default Header;