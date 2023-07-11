import React from 'react'
import { NavLink } from 'react-router-dom'
import './Error.css'

function Error() {
  return (
   <>
   <div className="emain">

   
   <div>this is the error page of the webwite</div>
   <div>Page not Found</div>
<NavLink to="/signin">Go To Home</NavLink>

</div>
   </>
  )
}

export default Error