import React from 'react';
import PaymentForm from './PaymentForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';
import './Payment.css'

const stripePromise = loadStripe('pk_test_51M5ucYJBgbucjrBLRJwaiURn5tPhnnX2eF3FJNMM9azJxeJfCNUYFzsDhT8vTEVyE0bqVNGFQZTV3A0ea2W6Le7q0086sfdYLW');

const Payment = () => {
    const data = useLoaderData()
    const {price, name} = data
    //console.log(data.name);
    return (
        <div className="main_payment">
                      
        <div className='py-12 mx-5  payment'>
        <h3 className='text-2xl font-bold py-2'>Payment for <span>{name} </span> </h3>
        <h5 className='font-bold py-1'>pay ${price}  </h5>

        <div className=" form py-10">
         <Elements stripe={stripePromise}>
            <PaymentForm 
            data={data}
            />
         </Elements>
         
        </div>
    </div>
    </div>
    );
};

export default Payment;