import React from 'react';

import './Design.css'

function FetchMovie(props) {
  //var srcc = "https://image.tmdb.org/t/p/w34" + {props.imgUrl}
  return (
    <table>
    <tr>
      <td>
      <div className="ImgContainer">
      <img src ={`https://image.tmdb.org/t/p/original${props.imgUrl}`} alt="lol"></img>
      </div>
      </td>
      <td className="Information">
      <div className="TextContainer">
      <div className="Title">{props.title}</div>
  <div className="Rating" >{props.vote_average}</div>
    <hr />
  <div className="Description">{props.overview}</div>
    </div>
    
      </td>
    </tr>
    
  </table>
)
}
  
  export default FetchMovie;
  