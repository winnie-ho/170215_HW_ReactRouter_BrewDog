import React from "react";
import BreweryList from "./BreweryList";

class Brewery extends React.Component {
  render(){
    return(
      <div>
        <h1>Inside Our Beers</h1>
        <BreweryList />

      </div>
      )
  }
}

export default Brewery;