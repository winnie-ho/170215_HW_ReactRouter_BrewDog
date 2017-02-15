import React from "react";

class BrewerySelect extends React.Component {
  constructor(){
    super();
    this.state = {selectedIndex: undefined};
    console.log(this);
  }

  //Functions
  handleChange(event){
    var newIndex = event.target.value;
    console.log(newIndex);
    this.setState({selectedIndex: newIndex});
    this.props.selectBeer(this.props.beers[newIndex]);
    console.log("props in BrewerySelect", this.props);
  }

  render() {
    let options = this.props.beers.map(function(beer, index){
      return <option value = {index} key = {index}> {beer.name} </option>
    })
    return (
      <select id = "beers" value = {this.state.selectedIndex} onChange = {this.handleChange}>
        {options}
      </select>
    );
  }
} 


export default BrewerySelect;
