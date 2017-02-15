import React from "react";
import BreweryDetail from "./BreweryDetail";

class BreweryList extends React.Component {
  constructor(){
    super();
  }

  //Functions
  render(){
    const beerNodes = this.props.beers.map((beer, index)=>{
      return(
        <BreweryDetail key = {beer.id}>
          <div className = "brewery-container">
            <div className = "beer">
            <h4> {beer.name} </h4>
            <p> {beer.tagline} </p>
            <img width = "90" src = {beer.image_url}/>
            </div>
          </div>
        </BreweryDetail>
      );     
    });
    return (
      <div className = "brewery-list">
      <p>The stuff inside our magic beer!</p>
      {beerNodes}
      </div>
      );
  }
}

let breweryList = new BreweryList();

export default BreweryList;