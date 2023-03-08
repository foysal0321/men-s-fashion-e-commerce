import React, { useContext, useEffect, useState } from 'react';
import { UseContext } from '../../../Context/Context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyProducts = () => {

    const {user} = useContext(UseContext)
    const [data,setdata] = useState([])

    useEffect(()=>{
      fetch(`http://localhost:5000/products?useR=${user?.email}`)
      .then(res=>res.json())
      .then(d=> setdata(d))
    },[])

    const deleteProduct=(id)=>{
      const confirmDelete = window.confirm(`Are you sure ${id.name}`)
      //console.log(id);

      if(confirmDelete){
        fetch(`http://localhost:5000/products/${id._id}`,{
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
          <h2 className='py-6 font-semibold text-2xl bg-gray-100 text-center'>My Products : {data.length}</h2>
           <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Post date</th>
        <th>Status</th>
        <th>Advertise</th>
        <th>Action</th>
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
        <td>{d.cetegori}</td>
        <td>{d.post_time.slice(0,10)}</td>
        <td>Avlabile</td>
        <td><button className='btn btn-xs'>Advertise</button></td>
        <td><button onClick={()=> deleteProduct(d)} className='btn btn-xs btn-error text-white'>
          delete</button>
          </td>
      </tr>)
      }    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;