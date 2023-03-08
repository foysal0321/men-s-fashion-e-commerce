import React from 'react';
import './Section2.css'

const Section2 = () => {
    return (
        <div>
            <div className="main-section2 py-10 ">
                <div className="imgs">
                     <img src="https://petermason.themerex.net/wp-content/uploads/2016/11/2-layers.jpg" alt="" />                                                   
                </div>
                <div className="section2-info mx-2  md:mx-2 pb-6  ">
                    <h1>DISCOVER TRUE <br /> QUALITY</h1>
                    <p className='suit py-3'>HANDCRAFTED SUIT </p>
                    <p className='texts py-3'>We provide you with great suits that befit you and your lifestyle. Our suits are made from the highest quality fabrics and guaranteed to give you functionality, durability and comfort. Our skilled master tailors handle all of our cutting and sewing, ensuring precision in all production processes and paying attention to the details. Come to us and choose the best suit for your lifestyle.</p>
                    <button className='btn btn-outline '>Learn more</button>
                </div>
            </div>
            {/* enather section */}
            <div className="py-8">
            <div className="main-anather ">
                <div className="anather-info">
                    <h1 className='py-2'>YOUR DESIGN, WE DELIVER</h1>
                    <p className='py-2'>_Providing you with maximum level of comfort & confidence in every suit!</p>
                </div>
                <div className="anather-btn">
                    <button className='btn '>Book your Product</button>
                </div>
            </div>
            </div>
            {/* anather-section */}
            <div className="py-4">
            <div className="main-section2 py-16 ">
                <div className="imgs">
                     <img src="https://i.pinimg.com/736x/ed/39/15/ed39151e46d8f5555110c687dfd4dd29.jpg" className='shirt-img' alt="" />                                                   
                </div>
                <div className="section2-info mx-2  md:mx-2 pb-6  ">
                    <h1>PETER IN THE  <br /> MEDIA </h1>
                    <p className='suit py-3'>PRESS & ARTICLES_ </p>
                    <p className='texts py-3'>We invite you to follow us on our social media channels for the latest news and event updates! Be kept up to date with the freshest ideas of Peter Mason and his talented team, no matter where you are in the world.</p>
                    <button className='btn btn-outline '>Watch our videos</button>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Section2;