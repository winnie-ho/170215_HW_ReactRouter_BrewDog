import React from "react";
import BreweryDetail from "./BreweryDetail";

class BreweryInfo extends React.Component {
  constructor(){
    super();
  }

  //Functions
  render(){
    console.log(this.props);
      return(
        <BreweryDetail>
          <div>
            <div className = "beer">
            <h4>Something</h4>
            </div>
          </div>
        </BreweryDetail>
      );     
    return (
      <div>
      <p>The stuff inside our magic beer!</p>
      </div>
      );
  }
}



export default BreweryInfo;
            // <p> {this.props.beer.tagline} </p>
            // <img width = "90" src = {this.props.beer.image_url}/>