import React, { useEffect } from 'react';
import './Sections1.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Section1 = () => {
     //aos libary
     useEffect(()=>{
        Aos.init({duration: 900})
      },[])

    return (
        <div className='py-12'>
            <div className="section1-info text-center">
                <h1 className=''>MEN'S FORMAL <span>WEAR!</span> </h1>
                 <p className='pt-4 '>Formal wear is a fashion term that describes a specific type of clothing. In England it is referred to <br /> as Formal Dress.  Formal wear is clothing that is worn to formal events such as weddings, debutant<br /> balls, cotillions, and higher  government functions such as state dinners.</p>
            </div>
            <div className="main-imgs py-8">
                <div className="first-img" data-aos="fade-in">
                   <h1>Formal Men Outfit</h1>
                </div>
                <div className="last-img">
                 <div className="last2-img grid grid-cols-1 lg:grid-cols-2">
                    <div className="p1-img" data-aos="fade-down">
                    <h1>Formal Blazer</h1>
                    </div>
                    <div className="p2-img" data-aos="fade-up">
                    <h1>Check Shirt</h1>
                    </div>
                 </div>
                 <div className="end-img" data-aos="fade-up">
                    <h1>Luxury Watch</h1>
           </div>
                </div>
            </div>
           
        </div>
    );
};

export default Section1;