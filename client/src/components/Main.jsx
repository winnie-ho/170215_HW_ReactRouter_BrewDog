import React from "react";
import Home from "./Home";
import Brewery from "./Brewery";
import Contact from "./Contact";
import {Link} from "react-router";

class Main extends React.Component {
  render(){
    return (
        <div>
        <h1>BrewDog Beers</h1>
          <Link to = "/home">Home</Link>
          <Link to = "/brewery">Brewery</Link>
          <Link to = "/contact">Contact</Link>
          <hr/>
          {this.props.children}
        </div>
      )
  }

}

let main = new Main();

export default Main;

