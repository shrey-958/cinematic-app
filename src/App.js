import React from 'react';
import './App.css';  
import NavBar from "./NavBar"
import Popular from "./Popular"
import InTheatre from "./InTheatre"
import Drama from "./Drama"
import Kids from "./Kids"
import Search from "./Search"
import SearchEngine from "./SearchEngine"
import FetchMovie from "./FetchMovie"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

 

class App extends React.Component {
  render(){
    return(
     <Router>
     <NavBar />
     <Switch>
     <Route path="/" exact component={Popular} />
     <Route path="/intheatre" exact component={InTheatre} />
     <Route path="/drama" exact component={Drama} />
     <Route path="/kids" exact component={Kids} />
     <Route path="/search" exact component={SearchEngine} />

     </Switch>
     
     </Router>
    )
  }

}

export default App;
