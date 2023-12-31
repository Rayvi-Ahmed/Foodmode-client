import React, { useContext } from 'react';
import {useLocation, Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    const location =useLocation

    if(loading){
        return <button className="btn loading">loading</button>
    }

    if(user){
        return children
    }
    return <Navigate state={{from:location}} to={'/login'} replace></Navigate>

};

export default PrivateRoute;