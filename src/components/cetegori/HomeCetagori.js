import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCeta.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Section1 from '../extraSections/section1/Section1';

const HomeCetagori = () => {
   

    //aos libary
    useEffect(()=>{
        Aos.init({duration: 900})
      },[])

    return (
        <div>
            <Section1 />
            <div className="main-ceta py-10">
                <div className="ceta-info text-center py-6">
                    <h2>OUR TRENDY <span className='font-bold py-3'>PRODUCTS</span> </h2>
                    <Link to='/cetegori/blazer'>Blazer</Link>
                    <Link to='/cetegori/shirt'>Shirt</Link>
                    <Link to='/cetegori/watch'>Watch</Link>
                </div>
                <div className="cetaimgs">
                    <div className="ceta1" data-aos="fade-down">
                        <h1><span>Blazer</span>  Collections</h1>
                        <Link to='/cetegori/blazer'>
                         <button className='btn btn-outline btn-sm'>Shop Now</button>
                        </Link>
                    </div>
                    <div className="ceta2">
                        <h1><span>Shirt</span>  Collections</h1>
                        <Link to='/cetegori/shirt'>
                         <button className='btn btn-outline btn-sm'>Shop Now</button>
                        </Link>
                    </div>
                    <div className="ceta3" data-aos="fade-up">
                        <h1><span>Watch</span>  Collections</h1>
                        <Link to='/cetegori/watch'>
                         <button className='btn btn-outline btn-sm'>Shop Now</button>
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCetagori;