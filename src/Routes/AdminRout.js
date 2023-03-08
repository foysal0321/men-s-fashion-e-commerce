import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UseContext } from '../Context/Context';
import UseAdmin from '../hooks/UseAdmin';

const AdminRout = ({children}) => {
    const {user, loading} = useContext(UseContext)
    const [isadmin, adminLoding] = UseAdmin(user?.email)
    const location = useLocation();

    if(loading || adminLoding){
        return <progress className="progress w-56"></progress>
    }
   if(user && isadmin){
    return children;
   }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRout;