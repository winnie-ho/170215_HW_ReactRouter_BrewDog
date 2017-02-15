import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import Home from "./components/Home";
import Brewery from "./components/Brewery";
import Collection from "./components/Collection";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

window.onload = () => {
  ReactDOM.render(
    <Router history = {browserHistory}>
      <Route path = "/" component = {Main}>
        <IndexRoute component = {Home}/>
        <Route path = "home" component = {Home}/>
        <Route path = "brewery" component = {Brewery}/>
        <Route path = "collection" component = {Collection}/>
      </Route>
    </Router>,

    document.getElementById("app")
    );
}