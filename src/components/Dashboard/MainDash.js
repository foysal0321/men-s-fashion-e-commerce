import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UseContext } from '../../Context/Context';
import UseAdmin from '../../hooks/UseAdmin';
import UseSeller from '../../hooks/UseSeller';
import Footer from '../Footer/Footer';
import Navbar2 from '../Home/navbar/Navbar2';
import './MainDash.css'

const MainDash = () => {
    const {user} = useContext(UseContext);
    const [isadmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    return (
        <div className="">
            <Navbar2 />        
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden">Open drawer</label> 
        <Outlet />
        </div>  
        <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-3 w-80 bg-slate-100 text-base-content">
    <div className="card  bg-base-100">
              <div className="card-body text-center bg-slate-100 rounded-xl">
                <h2 className="text-xl">{user?.displayName}</h2>
                <p>{user?.email}</p>
                <div className="card-actions ">
                  <button className="btn btn-outline btn-sm mt-3 mx-8 ">Send verify request</button>
                </div>
              </div> <hr />
            </div> 
      <Link to='/dashboard'>My Orders</Link> 
      {
        isSeller && <>
         <Link to='/dashboard/addproduct'>Add Product</Link>
        <Link to='/dashboard/myproducts'>My Products</Link>       
        </>
      }
      {
        isadmin && <>
        <Link to='/dashboard/addproduct'>Add Product</Link>
        <Link to='/dashboard/myproducts'>My Products</Link> 
        <Link to='/dashboard/allseller'>All Seller</Link>
        <Link to='/dashboard/allbuyer'>All Buyer</Link>
        <Link to='/dashboard/alluser'>All Users</Link>
        </>
      }    
     
    </ul>
  
  </div>
</div>
    <Footer />
</div>
    );
};

export default MainDash;