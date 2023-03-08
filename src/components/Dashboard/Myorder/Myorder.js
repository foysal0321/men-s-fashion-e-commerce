import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseContext } from '../../../Context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Myorder = () => {
  const {user} = useContext(UseContext)
  const [data,setdata] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    .then(res=>res.json())
    .then(d=> setdata(d))
  },[])

  const deleteProduct=(id)=>{
    const confirmDelete = window.confirm(`Are you sure ${id.name}`)
    //console.log(id);

    if(confirmDelete){
      fetch(`http://localhost:5000/bookings/${id._id}`,{
          method: 'DELETE',           
      })
      .then(res=>res.json())
      .then(d=>{
          if(d.deletedCount > 0){
            toast.success('Successfully Delete',{
              position : "top-center",
              autoClose: 2000,
          });
              const remain = data.filter(v=> v._id !== id._id)
              setdata(remain)             
          }          
      })
    }              
  }

    return (
        <div>
          <h2 className='py-6 font-semibold text-2xl bg-gray-100 text-center'>My Orders : {data.length}</h2>
           <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>Number</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((d,i)=>  <tr key={d._id}>
        <th>{i+1}</th>
        <td>
        <div className="avatar">
            <div className="w-14 rounded-full">
                <img src={d.image} />
            </div>
        </div>
        </td>
        <td>{d.name}</td>
        <td>$ {d.price}</td>
        <td><button onClick={()=> deleteProduct(d)} className='btn btn-xs btn-accent text-white'>
          delete</button>
          </td>
        <td>
          {
                d.price && !d.paid && <Link to={`/dashboard/payment/${d._id}`}>
                <button className='btn btn-xs '>pay</button>
                </Link>
          }
          {
                 d.price && d.paid && <span className='text-green-600 font-bold'>Paid</span>
          }
       </td>
      </tr>)
      }    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myorder;