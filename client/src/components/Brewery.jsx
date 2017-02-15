import React from "react";
import BreweryList from "./BreweryList";
import BrewerySelect from "./BrewerySelect";

class Brewery extends React.Component {
  constructor(){
    super();
    this.state = {beers: []};
  }

// Functions
  componentDidMount(){
    const url = "https://api.punkapi.com/v2/beers";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText);
        this.setState({beers: data});
        console.log("beers API:", data);
      }
    }
    request.send();
  }

  render(){
    return(
      <div>
        <h1>Inside Our Beers</h1>
        <BrewerySelect beers = {this.state.beers}/>
        <BreweryList beers = {this.state.beers}/>
      </div>
      )
  }
}

export default Brewery;