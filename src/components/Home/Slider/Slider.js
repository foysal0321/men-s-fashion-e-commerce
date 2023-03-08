import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import './Slider.css'
import { CiMail } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Slider = () => {
    //aos libary
    useEffect(()=>{
        Aos.init({duration: 900})
      },[])

    return (
        <div className="">
          <div className="carousel w-full text-white">
            <div id="slide1" className="carousel-item relative w-full item1">      
            <div className="header ">
              <div className="header-info grid grid-cols-1 md:grid-cols-3 md:lg-cols-3 text-center mt-2 lg:mt-0">
                <div className="num-email lg:flex justify-center">
                    <span className='hidden lg:block mt-1'><IoMdCall /></span>
                   <p className='mx-2 mt-1'>  +0091395867</p>
                   <span className='mx-0 lg:mx-6 py-2 lg:py-0 mt-1 hidden lg:block'>< CiMail /> </span>
                   <p className='-mx-4 email'>  matches@gmail.com</p> 
                </div>
                <div className="logo-name py-4 lg:py-0">                  
                    <h1 className='mt-0 lg:mt-0 text-4xl'>MATCHES FASHION </h1>
                    <p className='py-3'>Costom Service </p>
                </div>
                <div className="cart lg:flex justify-center py-0 lg:py-0">
                    <span className='mt-1   hidden lg:block '>< BsCart2 /></span>
                    <p className='py-2 lg:py-0 mx-2 mt-1'>  Cart $: 0.00</p>
                    <button className='mx-0 lg:mx-6 btn-sm text-white w-40 btn btn-outline'> Booking Now</button>                  
                </div>
                </div>
                    <Navbar />
                    <div className="slide-text pt-6 lg:pt-56 md:pt-40" data-aos="fade-down">
                        <h1 className=''>EMBRACE <span>YOUR</span> STYLE</h1>
                        <button data-aos="fade-down" className='mx-0 lg:mx-6 mt-6 text-white  btn btn-outline' > Booking Now</button>
                    </div>
                     <div className="hr hidden lg:block"><hr /></div> 
                </div>                    
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 icon pt-0 lg:pt-40 ">
                <a href="#slide4" className="">❮</a> 
                <a href="#slide2" className="">❯</a>
                </div>
            </div> 
 
            <div id="slide2" className="carousel-item relative w-full item2">
            <div className="header ">
            <div className="header-info grid grid-cols-1 md:grid-cols-3 md:lg-cols-3 text-center mt-2 lg:mt-0">
                <div className="num-email lg:flex justify-center">
                    <span className='hidden lg:block mt-1'><IoMdCall /></span>
                   <p className='mx-2 mt-1'>  +0091395867</p>
                   <span className='mx-0 lg:mx-6 py-2 lg:py-0 mt-1 hidden lg:block'>< CiMail /> </span>
                   <p className='-mx-4 email'>  matches@gmail.com</p> 
                </div>
                <div className="logo-name py-4 lg:py-0">
                   
                    <h1 className='mt-0 lg:mt-0 text-4xl'>MATCHES FASHION </h1>
                    <p className='py-3'>Costom Service </p>
                </div>
                <div className="cart lg:flex justify-center py-0 lg:py-0">
                    <span className='mt-1   hidden lg:block '>< BsCart2 /></span>
                    <p className='py-2 lg:py-0 mx-2 mt-1'>  Cart $: 0.00</p>
                    <button className='mx-0 lg:mx-6 btn-sm text-white w-40 btn btn-outline'> Booking Now</button>                  
                </div>
                </div>
                    <Navbar />
                    <div className="slide-text pt-6 lg:pt-40 md:pt-40">
                        <h1 className=''>STYLES <span>AND</span> TRENDS</h1>
                        <button className='mx-0 lg:mx-6 mt-6 text-white  btn btn-outline'> Make a Appoment</button>
                    </div>
                </div>             
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 icon pt-0 lg:pt-40">
                <a href="#slide1" className="">❮</a> 
                <a href="#slide3" className="">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full item3">
            <div className="header ">
            <div className="header-info grid grid-cols-1 md:grid-cols-3 md:lg-cols-3 text-center mt-2 lg:mt-0">
                <div className="num-email lg:flex justify-center">
                    <span className='hidden lg:block mt-1'><IoMdCall /></span>
                   <p className='mx-2 mt-1'>  +0091395867</p>
                   <span className='mx-0 lg:mx-6 py-2 lg:py-0 mt-1 hidden lg:block'>< CiMail /> </span>
                   <p className='-mx-4 email'>  matches@gmail.com</p> 
                </div>
                <div className="logo-name py-4 lg:py-0">
                   
                    <h1 className='mt-0 lg:mt-0 text-4xl'>MATCHES FASHION </h1>
                    <p className='py-3'>Costom Service </p>
                </div>
                <div className="cart lg:flex justify-center py-0 lg:py-0">
                    <span className='mt-1   hidden lg:block '>< BsCart2 /></span>
                    <p className='py-2 lg:py-0 mx-2 mt-1'>  Cart $: 0.00</p>
                    <button className='mx-0 lg:mx-6 btn-sm text-white w-40 btn btn-outline'> Booking Now</button>                  
                </div>
                </div>
                    <Navbar />
                    <div className="slide-text pt-6 lg:pt-40 md:pt-40">
                        <h1 className=''>COSTOM <span>MADE</span> SUITS</h1>
                        <button className='mx-0 lg:mx-6 mt-6 text-white  btn btn-outline'> Make a Appoment</button>
                    </div> 
                </div>               
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 icon pt-0 lg:pt-40">
                <a href="#slide2" className="">❮</a> 
                <a href="#slide4" className="">❯</a>
                </div>
            </div> 
          </div>
        </div>   
    );
};

export default Slider;