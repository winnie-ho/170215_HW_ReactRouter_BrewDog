import React from "react";
import CollectionList from "./CollectionList";

class Collection extends React.Component {
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
        // console.log("beers API:", data);
      }
    }
    request.send();
  }

  render(){
    return (
        <div>
          <h1>Our Beers</h1>
          <CollectionList beers = {this.state.beers}/>
        </div>
      );
  }

}


export default Collection;

