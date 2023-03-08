import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UseContext } from '../Context/Context';

const PrivetRout = ({children}) => {
    
    const {user, loading} = useContext(UseContext)
    const location = useLocation()

    if(loading){
        return <div className="w-80 mx-auto py-12">
            <progress className="progress w-80  "></progress>
        </div> 
    };

    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
  
};

export default PrivetRout;