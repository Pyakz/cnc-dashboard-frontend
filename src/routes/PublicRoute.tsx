import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {
    Route,
    Redirect,
  } from "react-router-dom";
const PublicRoute = ({ component:Component,role, ...rest }:any) => {

    const auth = useSelector((state:any) => state.auth)
    // const user = useSelector((state:any) => state.user)

    const dispatch = useDispatch()
  
    useEffect(() => {
 
      const token = localStorage.getItem('accessToken');
      const role = localStorage.getItem('role');
      token ? dispatch({ type:'LOGIN' }) : dispatch({ type:'LOGOUT' })
      dispatch({ type:role })

      
    },[dispatch])
  

    
    return (
      auth.isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <Route {...rest} render={({ props }:any) => <Component {...props} /> }/>
        )
      ) 
  
}

export default PublicRoute
