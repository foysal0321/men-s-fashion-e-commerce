import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Allseller = () => {
    const [data,setdata] = useState([])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/sellers`)
      .then(res=>res.json())
      .then(d=> setdata(d))
    },[])

    const deleteUser=(id)=>{
      const confirmDelete = window.confirm(`Are you sure ${id.name}`)
      //console.log(id);

      if(confirmDelete){
        fetch(`http://localhost:5000/users/${id._id}`,{
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
            <h2 className='py-6 font-semibold text-2xl bg-gray-100 text-center'>All Users : {data.length}</h2>
           <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((d,i)=>  <tr key={d._id}>
        <th>{i+1}</th>
        <td>{d.name}</td>
        <td>{d.email}</td>
        <td>{d.role}</td>
        <td>
        { 
        d?.role !== 'admin' && <button className='btn-xs btn-success'>Make admin</button> 
       }
       {
        d?.role !== 'admin' && <button onClick={()=> deleteUser(d)} className='btn-xs btn-warning mx-4'>Delete</button>
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

export default Allseller;