import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../../Context/Context';
import './Navbar2.css'

const Navbar2 = () => {
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
     <button onClick={userlogOut} className='btn btn-secondary btn-xs m-2'>Log Out</button>
      </>
      :
      <>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
      </>
    }    
    <p className='py-2 lg:py-0 mx-2 mt-1'>  Cart $: 0.00</p>
    <button className='navbtn mx-9  btn-sm text-white w-40 btn btn-outline'> Booking Now</button>
    
    </>
    return (
        <div className='nav nav2 py-4'>    
            <div className="navbar navbar2">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-800 text-center rounded-box w-64 small-nav2">
        {navItems}
      </ul>
    </div>
        <div className="btn btn-ghost normal-case text-2xl py-2 name"> MATCHES FASHION      
        </div>                           
  </div>
  <div className="navbar-center hidden lg:flex menus">
    <ul className="menu menu-horizontal px-1">      
        <Link to='/'>Home<span className='mx-5'>|</span></Link>
        <Link to='/products'>Products<span className='mx-5'>|</span></Link>
        <Link to='/about'>About<span className='mx-5'>|</span></Link>
        <Link to='/contact'>Contact<span className='mx-5'>|</span></Link>
        {
        user?.email ?
        <>
        <Link to='/dashboard'>Dashboard<span className='mx-5'>|</span></Link>
        <button onClick={userlogOut} className='btn btn-secondary btn-xs m-2'>Log Out</button>
        </>
        :
        <>
        <Link to='/signup'>Sign Up<span className='mx-5'>|</span></Link>
        <Link to='/login'>Log In <span className='mx-5'>|</span></Link>
        </>
      }               
        <p className='py-2 lg:py-0 mx-2 mt-1'>  Cart $: 0.00</p>
    </ul>
  </div>
  <div className="navbar-end ">                                   
        <button className='hidden md:block lg:block mx-0 lg:mx-6 btn-sm  w-40 btn btn-outline navbtn'> Booking Now</button>                  
  </div>
</div>
        </div>
    );
};

export default Navbar2;