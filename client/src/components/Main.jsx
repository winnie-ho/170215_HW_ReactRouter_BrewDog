import React from "react";
import Home from "./Home";
import Brewery from "./Brewery";
import Collection from "./Collection";
import {Link} from "react-router";

class Main extends React.Component {
  constructor(){
    super();
    this.state = {beers: []};
  }

  // componentDidMount(){
  //   const url = "https://api.punkapi.com/v2/beers";
  //   const request = new XMLHttpRequest();
  //   request.open("GET", url);
  //   request.onload = () => {
  //     if (request.status === 200){
  //       const data = JSON.parse(request.responseText);
  //       this.setState({beers: data});
  //       // console.log("beers API:", data);
  //     }
  //   }
  //   request.send();
  // }

  render(){
    return (
        <div>
        <h1>BrewDog Beers</h1>
          <Link to = "/home">Home</Link>
          <Link to = "/brewery">Brewery</Link>
          <Link to = "/collection">Collection</Link>
          <hr/>
          {this.props.children}
          <div>
          </div>
        </div>
      )
  }

}

export default Main;

