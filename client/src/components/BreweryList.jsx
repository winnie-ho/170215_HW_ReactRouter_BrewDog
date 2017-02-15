import React from "react";
import Beer from "./beer";

class BreweryList extends React.Component {
  constructor(){
    super();
  }

  //Functions
  render(){
    const beerNodes = this.props.beers.map((beer, index)=>{
      return(
        <Beer key = {beer.id}>
          <div className = "brewery-container">
            <div className = "beer">
            <h4> {beer.name} </h4>
            <img width = "90" src = {beer.image_url}/>
            </div>
          </div>
        </Beer>
      );     
    });
    return (
      <div className = "brewery-list">
        {beerNodes}
      </div>
      );
  }
}

let breweryList = new BreweryList();

export default BreweryList;