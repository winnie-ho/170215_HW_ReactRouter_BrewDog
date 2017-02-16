import React from "react";
import BreweryInfo from "./BreweryInfo";
import BrewerySelect from "./BrewerySelect";

class Brewery extends React.Component {
  constructor(){
    super();
    this.state = {beers: [], focusBeer: null};
  }

// Functions
  componentDidMount(){
    const url = "https://api.punkapi.com/v2/beers";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => {
      if (request.status === 200){
        const data = JSON.parse(request.responseText);
        this.setState({beers: data, focusBeer: data[0]});
        console.log("beers API:", data);
        console.log("focusBeer:", this.state.focusBeer);
      }
    }
    request.send();
  }

  setFocusBeer(beer){
    this.setState({focusBeer : beer});
  }

  render(){
    console.log("at the end", this.state.focusBeer);
    return(
      <div>
        <h1>Inside Our Beers</h1>
        <BrewerySelect beers = {this.state.beers} selectBeer = {this.setFocusBeer}/>
        <BreweryInfo beer = {this.state.focusBeer}/>
      </div>
      )
  }
}

export default Brewery;