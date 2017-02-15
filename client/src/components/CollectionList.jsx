import React from "react";
import Beer from "./beer";

class CollectionList extends React.Component {
  constructor(){
    super();
  }

  //Functions
  render(){
    const beerNodes = this.props.beers.map((beer, index)=>{
      return(
        <Beer key = {beer.id}>
          <div className = "collection-container">
            <div className = "beer">
            <h4> {beer.name} </h4>
            <img width = "90" src = {beer.image_url}/>
            </div>
          </div>
        </Beer>
      );     
    });
    return (
      <div className = "collection-list">
        {beerNodes}
      </div>
      );
  }
}

let breweryList = new CollectionList();

export default CollectionList;