import React from 'react'
import {Link} from 'react-router-dom'
import photos from './photos.json'
import './App.css'
import Front from './Front'
export default React.createClass({


getInitialState(){
 return{
     photo:photos.filter(middle=>{
     
       return (middle.album) === (this.props.match.params.middleAlbum)
     })
   }
 },

 handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

 render () {
   return(
   
      <div className="mainContainer2">
      	<h2>Album</h2>
      	<button onClick={this.handleBack}>BACK</button>
      	<div className="otherContainer">
	      	<div className="albumOptions">
		         <ul>
		         	<li><Link className="text" to={'/album1/'}>Album 1</Link>
		         	</li>
		         	<li><Link className="text" to={'/album2/'}>Album 2</Link>
		         	</li>
		         	<li><Link className="text" to={'/album3/'}>Album 3</Link>
		         	</li>
		         	<li><Link className="text" to={'/album4/'}>Album 4</Link>
		         	</li>
		         	<li><Link className="text" to={'/album5/'}>Album 5</Link>
		         	</li>
		         	<li><Link className="text" to={'/album6/'}>Album 6</Link>
		         	</li>
		         </ul>
	         </div>
	     
	      	<div className="Album">
	         <ul className="liPhotos">
	         {this.state.photo.map(photo=>(

	           <li className="liPhoto" key={'photos' + photo.id}>
		            <Link to={'/End/' + photo.img}>
		            <img src={photo.mid_photo + photo.index} alt={photos.id} /> <br/>
		             <span>{photo.tags}</span> <br/> 
		             <span>{photo.city}, {photo.state}</span><br/> 
		             <span>{photo.heart} {photo.date}</span>
		             </Link>
	             </li>
	           ))}

	         
	          </ul>
	        </div>
	    </div>
      </div>
     
   )
 }
})