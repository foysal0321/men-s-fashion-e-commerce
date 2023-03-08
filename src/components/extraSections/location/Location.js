import React from 'react';
import './Location.css'

const Location = () => {
    return (
        <div>
            <div className="main-contact py-12">
                <div className="imgs">
                 <img src="https://petermason.themerex.net/wp-content/uploads/2016/11/background-17.jpg" alt="" />
                 <div className='mapouter'><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=eskaton road&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                </div>
                <div className="contact-info">
                    <h1>CONTACT INFO</h1>
                    <p className='py-5 mt-8'>Have a question? Our team always ready to help. Feel free and come to us anytime, we are glad to see you at our studio.</p>
                    <p className='mt-6'>2277 Lorem Ave., San Diego, CA 22553</p> 
                    <p className='py-2'>Monday - Friday: 10 am - 10pm</p>
                    <p>Sunday: 11 am - 9pm</p>   
                    <p className='py-2'>123 - 456 - 7890   </p>
 
                </div>
            </div>
        </div>
    );
};

export default Location;