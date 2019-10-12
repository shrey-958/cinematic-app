import React from 'react';
import FetchMovie from "./FetchMovie"
import SearchEngine from "./SearchEngine"
import './Design.css'

class Search extends React.Component {
  constructor(){
    super()
    this.state = {

      searchTerm : ""
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleChange(event){
    this.setState({
        searchTerm : event.target.value
        
        
    })
    console.log(this.state.searchTerm)
        
    
}
handleSubmit(event){
    console.log(this.state.searchTerm)
    return(
        <SearchEngine word={this.state.searchTerm} />
    )
}

render(){
    return(
        <div>
        <input placeholder="Search For Movies..." type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Go</button>
        
        </div>
    )
}
}
export default Search
