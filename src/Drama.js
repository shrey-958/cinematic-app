import React from 'react';
import FetchMovie from "./FetchMovie"

class Drama extends React.Component {
  constructor(){
    super()
    this.state = {
      
      title : "",
      poster_path : "",
      vote_average : 0,
      overview : "",
      imgUrl : "https://image.tmdb.org/t/p/w342/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
      collection : []
    }
    //this.handleChange=this.handleChange.bind(this)
    
  }
  componentDidMount()
  {
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=3873ba12aec3a0826303ee52803a6094&language=en-US&page=1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        collection : data.results
      })
    })
   
    
   
    
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
     title = {this.state.collection[i].original_name}
     vote_average = {this.state.collection[i].vote_average}
     overview = {this.state.collection[i].overview}
     imgUrl = {this.state.collection[i].poster_path}

     />)
  return (
    <div>
      {/*<button onClick={this.handleChange}>Click Me</button>*/}
      
      {movieArr}
      
    </div>
  )
}
}

export default Drama;
