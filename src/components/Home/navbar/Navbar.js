import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../../Context/Context';
import './Navbar.css'

const Navbar = () => {
    const {user, logOut} = useContext(UseContext);

    const userlogOut=()=>{
        logOut()
        .then(result=>{ })
        .catch(err=>{
            console.error(err);
        })
      }

    const navItems = <>
    
        <Link to='/'>Home</Link> 
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
    {
        user?.email ? 
        <>
        <Link to='/dashboard'>Dashboard</Link>
        <button onClick={userlogOut} className='btn btn-xs m-2'>Log Out</button>
        </>        
        : 
        <>
         <Link to='/signup'>Sign Up</Link>
         <Link to='/login'>Log In</Link>
        </>
    }   
    </>
    return (
        <div className='nav'>
         <div className="navbar navbar1">
            <div className="">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden mt-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:mx-32 mx-32 mt-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-800 rounded-box w-52  text-center small-nav">
                   {navItems}
                </ul>
                </div>
              
            </div>
            <div className=" hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 list">
                
                <Link to='/' className='active'>Home<span className='mx-5 '>|</span></Link> 
                <Link to='/products'>Products<span className='mx-5'>|</span></Link>
                <Link to='/about'>About<span className='mx-5'>|</span></Link>
                <Link to='/contact'>Contact<span className='mx-5'>|</span></Link>
                {
                    user?.email ?
                <>
                <Link to='/dashboard'>Dashboard<span className='mx-5'>|</span></Link>
                 <button onClick={userlogOut} className='btn   btn-xs m-2 text-white'>Log Out</button>
                </>
                    :
                <>
                <Link to='/signup'>Sign Up<span className='mx-5'>|</span></Link>
                <Link to='/login'>Log In</Link>
                </>
                }
                </ul>
            </div>
            
            </div> <hr />
        </div>
    );
};

export default Navbar;