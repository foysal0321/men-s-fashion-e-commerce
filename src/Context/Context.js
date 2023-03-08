import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile} from 'firebase/auth'
import app from '../firebase/Firebaseconfig';


const auth = getAuth(app)
const googleAuth = new GoogleAuthProvider()


export const UseContext = createContext()

const Context = ({children}) => {
    const [loading,setloading] = useState(true);
    const [user,setuser] = useState(false);

    const createUser = (email,pass)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signUser =(email,pass)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logOut = ()=>{
        setloading(true)
        return signOut(auth)
    }

    const updateUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const signGoogle = () =>{
       setloading(true)
       return signInWithPopup(auth, googleAuth)
    }

    useEffect(()=> {
        const unscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)
        })
        return () => unscribe()
    },[])

    const info ={
        createUser, signUser, logOut, signGoogle, updateUser, user, loading
    }
    return (
        <div>
            <UseContext.Provider value={info}>
                {children}
            </UseContext.Provider>
        </div>
    );
};

export default Context;