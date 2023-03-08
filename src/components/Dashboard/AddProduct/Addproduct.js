import React, { useContext } from 'react';
import { UseContext } from '../../../Context/Context';
import './Addproduct.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproduct = () => {
    const {user} = useContext(UseContext)

    const handleProduct =(e)=>{
        e.preventDefault()
        const form = e.target;
        const item = form.item.value;
        const price = form.price.value;
        const orginalPrice = form.orginalPrice.value;
        const location = form.location.value;
        const phone = form.phone.value;
        const use = form.use.value;
        const review = form.review.value;
        const seller = form.seller.value;
        const cetagori = form.cetagori.value;
        const img = form.img.value;
        const useR = user?.email
        const time = new Date()
      
        const addItem={
            cetegori: cetagori,
            name: item,
            resale_price : price,
            orginal_price: orginalPrice,
            location: location,
            phone: phone,
            use: use,
            review: review,
            seller_name: seller,        
            image: img,
            useR: useR,
            post_time: time,
            verify: true,
            isAdvertics: false
        }
        //post data
        fetch(`http://localhost:5000/products/`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'               
            },
            body: JSON.stringify(addItem)
        })
        .then(res=>res.json())
        .then(data=>{         
            if(data.acknowledged){
                 toast.success('Success booking')
                 form.reset()                
            }
            else{
                console.log(data.message);
            }          
        })
        //console.log(addItem);
       
    }

    return (
        <div>
            <div className='py-0 add-item'>
        <h2 className='text-3xl py-6 font-bold text-center bg-gray-100'>Add A Product</h2>
        <form onSubmit={handleProduct} className='mx-5 form'> 
        <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Product name </span>
    </label>
        <input name='item' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" required/>        
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Resale price </span>
    </label>
        <input name='price' type="number" placeholder="price" className="input input-bordered w-full max-w-xs" required />        
    </div>
    </div>
    <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Orginal price </span>
    </label>
        <input name='orginalPrice' type="number" placeholder="price" className="input input-bordered w-full max-w-xs" />        
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Location</span>
    </label>
        <input name='location' type="text" placeholder="location" className="input input-bordered w-full max-w-xs" required/>       
    </div>
    </div>
    <div className="flex flex-wrap">  
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Phone</span>
    </label>
        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full max-w-xs" required/>       
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Years of use </span>
    </label>
        <input name='use' type="text" placeholder="years of use" className="input input-bordered w-full max-w-xs" required/>       
    </div>
    </div>
    <div className="flex flex-wrap">  
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Review </span>
    </label>
        <input name='review' type="text" placeholder="review" className="input input-bordered w-full max-w-xs" required />       
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Seller name </span>
    </label>
        <input name='seller' type="text" placeholder="seller" className="input input-bordered w-full max-w-xs" required />       
    </div>
    </div>
    <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Cetagory</span>
    </label>
    <select className="select select-bordered select-ghost w-full max-w-xs"
   name='cetagori' > 
        <option >Select cetagori</option>
              <option value="blazer">blazer</option>  
              <option value="shirt">shirt</option>  
              <option value="watch">watch</option>  
        </select>
    </div> 
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Photo</span>
    </label>
        <input name='img' type="text" placeholder="Type url" className="input input-bordered w-full max-w-xs " required />                        
    </div>   
     </div>           
        <button className='btn btn-accent mx-2 mt-2'>Add Item</button>
        </form>
    </div>
        </div>
    );
};

export default Addproduct;