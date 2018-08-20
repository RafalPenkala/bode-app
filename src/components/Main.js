import React, { Component } from 'react'

import './Main.css';
import inactive_shake from '../images/inactive_shake.png';
import active_shake from '../images/active_shake.png';
import inactive_workout from '../images/inactive_workout.jpg';
import active_workout from '../images/active_workout.jpg';
import check from '../images/active_checkbox.jpg';
import printer from '../images/printer_icon.png';
import smiley from '../images/smiley_icon.png';


class Main extends Component {
render() {
  return (
    <div className="testing-bckground">
    <main className="testing-width">
      <table className="table testing-width">

        <thead>
          <tr>
            <td></td>
            <td className="th-green">DAY 64</td>
            <td className="th-orange orange-brd-top">DAY 65</td>
            <td className="th-green">DAY 66</td>
            <td className="th-green">DAY 67</td>
            <td className="th-green">DAY 68</td>
            <td className="th-green">DAY 69</td>
            <td className="th-green">DAY 70</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><b>6:00</b> AM</td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td className="orange-brd-mid">Bod&#183;&#275; Shake <img className="shake" alt="shake" src={active_shake}/></td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td rowSpan="5" className="guilt-sign"><span className="rotate-sign"><img className="smiley" alt="smiley icon" src={smiley}/>GUILT-FREE DAY</span></td>
          </tr>

          <tr>
            <td><b>9:00</b> AM</td>
            <td>Ham and Swiss Roll Ups</td>
            <td className="orange-brd-mid">Ham and Swiss Roll Ups</td>
            <td>Grilled Steak (HC)</td>
            <td>Ham and Swiss Roll Ups</td>
            <td>Ham and Swiss Roll Ups</td>
            <td>Grilled Steak (HC)</td>
          </tr>

          <tr>
            <td><b>12:00</b> PM</td>
            <td>Turkey Melt</td>
            <td className="orange-brd-mid">Turkey Melt</td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td>Turkey Melt</td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
            <td>Bod&#183;&#275; Shake <img className="shake" alt="shake" src={inactive_shake}/></td>
          </tr>

          <tr>
            <td><b>3:00</b> PM</td>
            <td>Bod&#183;&#275; Burn With Mozzarella and Tomato Slices</td>
            <td className="orange-brd-mid">Bod&#183;&#275; Burn With Mozzarella and Tomato Slices</td>
            <td>Bod&#183;&#275; Burn and Whole-Wheat English Muffin with Butter Spray</td>
            <td>Bod&#183;&#275; Burn With Mozzarella and Tomato Slices</td>
            <td>Bod&#183;&#275; Burn With Mozzarella and Tomato Slices</td>
            <td>Bod&#183;&#275; Burn and Whole-Wheat English Muffin with Butter Spray</td>
          </tr>

          <tr>
            <td><b>6:00</b> PM</td>
            <td>Turkey Melt</td>
            <td className="orange-brd-mid">Turkey Melt</td>
            <td>Garlic Lime Chicken (HC)</td>
            <td>Turkey Melt</td>
            <td>Turkey Melt</td>
            <td>Garlic Lime Chicken (HC)</td>
          </tr>

          <tr>
            <td className="wave no-bottom-left"></td>
            <td className="wave">LOW-CARB</td>
            <td className="wave orange-brd-mid">LOW-CARB</td>
            <td className="wave">HIGH-CARB</td>
            <td className="wave">LOW-CARB</td>
            <td className="wave">LOW-CARB</td>
            <td className="wave">HIGH-CARB</td>
            <td rowSpan="2" className="wave no-bottom-left"><img className="testing-wave-printer" src={printer} alt="printer"/><span className="testing-wave-print">Print</span></td>
          </tr>

          <tr>
            <td className="workout-grey-border no-left"><b>Workout</b>&#9656;</td>
            <td className="wave no-bottom"><img className="testing-wave" src={active_workout} alt="dumbbell"/><img className="testing-wave ok" src={check} alt="ok sign"/></td>
            <td className="wave orange-brd-btm"><img className="testing-wave" src={active_workout} alt="dumbbell"/><img className="testing-wave ok" src={check} alt="ok sign"/></td>
            <td className="wave no-bottom"><img className="testing-wave" src={inactive_workout} alt="dumbbell"/></td>
            <td className="wave no-bottom"><img className="testing-wave"src={inactive_workout} alt="dumbbell"/></td>
            <td className="wave no-bottom"><img className="testing-wave"src={inactive_workout} alt="dumbbell"/></td>
            <td className="wave no-bottom"><img className="testing-wave"src={inactive_workout} alt="dumbbell"/></td>
          </tr>
        </tbody>
      </table>
    </main>
    </div>
  );
}
}

export default Main;