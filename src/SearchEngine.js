import React from 'react';
import FetchMovie from "./FetchMovie"
import './Design.css'

class SearchEngine extends React.Component {
  constructor(){
    super()
    this.state = {
        searchTerm : "",
      title : "",
      poster_path : "",
      vote_average : 0,
      overview : "",
      imgUrl : "https://image.tmdb.org/t/p/w342/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      collection : []
    }
    //this.handleChange=this.handleChange.bind(this)
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
    fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.searchTerm}&api_key=3873ba12aec3a0826303ee52803a6094`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        collection : data.results
      })
    })
    return(
        <SearchEngine word={this.state.searchTerm} />
    )
}
  /* handleChange(event){
    event.preventDefault()
    const randNum = Math.floor(Math.random()* this.state.collection.length)
    this.setState({
      title : this.state.collection[randNum].title,
      vote_average : this.state.collection[randNum].vote_average,
      overview : this.state.collection[randNum].overview,
      imgUrl : "https://image.tmdb.org/t/p/w342" + this.state.collection[randNum].poster_path
    })
  } */
  render(){
    const movieArr = this.state.collection.map((item,i) => <FetchMovie 
     title = {this.state.collection[i].title}
     vote_average = {this.state.collection[i].vote_average}
     overview = {this.state.collection[i].overview}
     imgUrl = {this.state.collection[i].poster_path}

     />)
  return (
    <div>
      {/*<button onClick={this.handleChange}>Click Me</button>*/}
      <input className="searchOpt" placeholder="Search For Movies..." type="text" onChange={this.handleChange} />
        <button onClick={this.handleSubmit}><b>Go</b></button>
      
      {movieArr}
      
    </div>
  )
}
}

export default SearchEngine;
