import React from 'react';
import './Blog.css'

const About = () => {
    return (
        <div className='py-16 blog'>   
        <h1 className='py-2'>About Us_</h1>      
           <div className="blog-main"> 

            <img src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_fashion_cms_aboutus.jpg?v=1655353913" alt="" />
            <h2 className='pt-4'> OUR STORY</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <h2 className='pt-8'>Our Mission</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <h2 className='pt-12 mb-6'>Our Vision</h2>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

            <div className="company-info py-20 ">
                <img src="https://media.istockphoto.com/id/1197952617/photo/latin-american-guy-trying-out-a-sweater-on-top-at-a-mens-clothing-store.jpg?s=612x612&w=0&k=20&c=_sSeE9C91e0jCQ6zlMgEDJZdk7qdZD0m6U2G5UNnL1s=" alt="" />
                <div className="company-details">
                <h2 className='pt-8'>The Company</h2>
            <p>THE FASHION STORE caters to thoughtful shoppers who appreciate unique designs and top quality pieces you just can’t find anywhere else. We are constantly curating fresh new collections and looking for the next big thing our customers will love. Founded in Vienna in 2019, we are proud to be your Online Clothing Shop that you can rely on for our expert service and care.</p>
                </div>
            </div>
            <div className="company-service py-12 ">
                <div className="service1">
                <h4 className='py-3'> FAST AND FREE DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
                </div>
                <div className="service2">
                <h4 className='py-3'> 24/7 CUSTOMER SUPPORT</h4>
                <p>Friendly 24/7 customer support</p>
                </div>
                <div className="service3">
                <h4 className='py-3'> MONEY BACK GUARANTEE</h4>
                <p>We return money within 30 days</p>
                </div>
                
                
           

            </div>
           </div>
            
        </div>
    );
};

export default About; 


{/* <img src="https://www.golocalprov.com/cache/images/cached/cache/images/remote/https_s3.amazonaws.com/media.golocalprov.com/BeautyFashion/Blueprint5_Store_Wideview_4868_3046_90.jpg" alt="" /> */}