import React from 'react'
import {Link} from 'react-router-dom'
import Middle from './Middle.js'
import './App.css'




export default React.createClass({


 render (){
   return(
   	<div className="overlay">
      <div className="mainContainer">
         <h2>Photo Album</h2>
         <div className="albumContainer">
		  <div className="album1"><div className="txtBox"> <Link className="text" to={'/Middle/' + 'album1'}>Me Every Weekend</Link>
		  </div>
		  </div>
		  <div className="album2"><div className="txtBox"><Link className="text" to={'/Middle/'+'album2'}>Car Selfies</Link>
		  </div>
		  </div>
		  <div className="album3"><div className="txtBox"><Link className="text" to={'/Middle/'+'album3'}>Childhood Photos</Link>
		  </div>
		  </div>
		  <div className="album4"><div className="txtBox"><Link className="text" to={'/Middle/'+'album4'}>When I Found Out My Ex Husband Was Cheating</Link>
		  </div>
		  </div>
		  <div className="album5"><div className="txtBox"><Link className="text" to={'/Middle/'+'album5'}>Me At School</Link>
		  </div>
		  </div>
		  <div className="album6"><div className="txtBox"><Link className="text" to={'/Middle/'+'album6'}>Concerts</Link>
		  </div>
		  </div>
		  </div>
		  </div>

     </div>
     
   )
 }
})