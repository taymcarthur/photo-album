import React from 'react'
import photos from './photos.json'
import './App.css'


export default React.createClass({

  getInitialState(){
    return {
      photo:photos.filter(end=>{
        return Number(end.img) === Number(this.props.match.params.endImg) 
      })[0]
    }
  },

  handleBack(e){
    e.preventDefault()
    this.props.history.goBack()
  },

  render(){
   var photo = this.state.photo
   return(
     <div>
     <button className="button" onClick={this.handleBack}>BACK</button>
       <div className="endImg">
         <img className="lrgImg" src={photo.lrg_photo + photo.img} alt="Cool Shit" />
       </div>
       <ul>
         <li > {photo.tags} </li>
         <hr width="40%"/>
         <li>{photo.city}, {photo.state}</li>
         <hr width="40%"/>
         <li>{photo.date}</li>

       </ul>



     </div>
   )
 }
})