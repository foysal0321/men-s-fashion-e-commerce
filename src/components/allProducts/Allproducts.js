import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Products.css'

const Allproducts = () => {

    const data = useLoaderData()


    return (
        <div className='py-10'>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 main-products">
                {
                    data.map(p=>  <div key={p._id} className="card card-compact  bg-base-100 shadow-md m-5">
                    <figure><img src={p.image} alt="Shoes" /></figure>
                    <div className="card-body cart-info">
                    <h2 className="card-title">{p.name}</h2>
                    <p>$ {p.resale_price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/cetegori/${p.cetegori}/${p._id}`}>
                        <button className="btn btn-outline btn-sm">Buy Now</button> 
                    </Link>
                   
                    </div>
                 </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default Allproducts;

 