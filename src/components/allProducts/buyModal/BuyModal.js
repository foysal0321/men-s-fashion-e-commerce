import React, { useContext } from 'react';
import { UseContext } from '../../../Context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BuyModal = ({data, setmodal}) => {
    const {user} = useContext(UseContext)
    const {name, resale_price, image} = data

    const bookingBtn=(e)=>{
        e.preventDefault();
        const form = e.target;
         const buyer_name = form.buyername.value;
        const email = form.email.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking ={
            name: name,
            buyer_name: buyer_name,
            email: email,
            price: resale_price,
            phone: phone,
            location: location,
            image: image
        }
        fetch(`http://localhost:5000/bookings`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Booking Success',{
                    position : "top-center",
                    autoClose: 3000,
                });
            } else{
                alert(data.message)
            }
          //console.log(data);
        })
        .catch(err=> console.log(err))       
        form.reset()
    }
    return (
        <div>
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">Item: {name}</h3>
                <form onSubmit={bookingBtn} className='grid grid-cols-1 gap-3 mt-10'>                         
                <input name='buyername' readOnly defaultValue={user?.displayName} type="text" placeholder="Your name" className="input input-bordered w-full " />
                <input name='email' readOnly value={user?.email} type="email" placeholder="Your email" className="input input-bordered w-full " />
                <input name='price' readOnly  type="text" value={`$${resale_price}`} className="input input-bordered w-full " />
                <input name='phone' type="number" placeholder="Your phone" className="input input-bordered w-full " required/> 
                <input name='location' type="text" placeholder="Location" className="input input-bordered w-full " required/> 
                <input type="submit" value="Submit" className=' w-full btn  text-white '/>            
                </form>
            </div>
            </div> 
        </>
        </div>
    );
};

export default BuyModal;