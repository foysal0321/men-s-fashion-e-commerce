import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { RiFacebookLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
    return (
      <>
      <footer className="footer p-10 bg-zinc-900 text-white ">
      <div className='footer-name'>
        <span className="footer-title ">MEN'S FASHION</span> 
        <p >Formal wear is clothing that is worn to formal <br />
         events such as weddings, debutant
        balls, cotillions, <br /> and functions such as state dinners.</p>
        <div className="logos py-3">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="" />
          <img className='mx-4' src="https://w7.pngwing.com/pngs/654/477/png-transparent-card-master-master-card-master-card-new-logo-method-new-logo-payment-logos-icon.png" alt="" />
          <img className='mx-4' src="https://w1.pngwing.com/pngs/747/816/png-transparent-mastercard-logo-payoneer-text-area.png" alt="" />
          <img className='mx-4' src="https://e7.pngegg.com/pngimages/698/379/png-clipart-bkash-logo-united-states-service-cherish-company-text.png" alt="" />
        </div>
      </div> 
      <div className='links'>
        <span className="footer-title">Products</span> 
        <Link >Blazer</Link> 
        <Link >Shirt</Link> 
        <Link >Watch</Link> 
        <Link >Formal</Link>
      </div> 
      <div className='links'>
        <span className="footer-title">Links</span> 
        <Link to='/'>Home</Link> 
        <Link to='/about'>About Us</Link> 
        <Link to='/contact'>Contact Us</Link> 
        <Link to='/fetures'>Fetures</Link>
      </div> 
      <div>
        <span className="footer-title">Newsletter</span> 
        <p className='formall'>Formal wear is clothing that is worn to formal <br />
         events</p> <hr />
         <div className="form-control w-80">
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>

          <div className="social mt-4">
            <Link> <RiFacebookLine /> </Link>
          <Link className='mx-4'> <BsInstagram /> </Link>
         <Link className='mx-4'> <GrLinkedinOption /> </Link>
         <Link className='mx-4'> <AiOutlineYoutube /> </Link>
          </div>
    
      </div>
    
    </footer>
      <div className=' bg-zinc-900 text-white'>
    <p className='text-center py-4 last-textt'>Copyright © 2023 - All right reserved by Matches Fashion Ltd</p>
   
  </div>
    </>
    );
}; 


 
export default Footer;