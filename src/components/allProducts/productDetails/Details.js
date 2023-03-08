import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyModal from '../buyModal/BuyModal';
import './Details.css'

const Details = () => {
    const data = useLoaderData()
     const [modal,setmodal] = useState(null)
    const {name,image,orginal_price,location,resale_price,seller_name,use,post_time
    } = data
    
    //console.log(data);
    return (
        <div className='top-details'>
            <div className="main-details py-10">
                <img src={image} alt="" />
                <div className="details-info mx-8 mt-0">
                    <h1> {name}</h1>
                    <p className='orginal-price'>Orginal Price : $ <span>{orginal_price}</span> </p>
                    <p>Resale Price : $ {resale_price}</p>
                    <p>Location : {location}</p>
                    <p>Seller Name : {seller_name}</p>
                    <p>Used : {use}</p>
                    <p>Posted Time : {post_time}</p>
                    <label onClick={()=> setmodal(data)}
                     htmlFor="booking-modal"
                     className='btn btn-outline btn-sm m-2'
                     >Buy Now</label>
                    
                </div>
                {
                    modal && 
                    <BuyModal 
                    data={modal}
                    setmodal={setmodal}
                    />
                }
            </div>
        </div>
    );
};

export default Details;