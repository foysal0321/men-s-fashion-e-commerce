import React, { useEffect, useState } from 'react';

const UseSeller = (email) => {
    const [isSeller,setSeller] = useState(false)
    const [sellerLoding,setSellerLoding] = useState(true)

    useEffect(()=>{
        fetch(`http://localhost:5000/users/sellers/${email}`)
        .then(res=>res.json())
        .then(data=>{
           // console.log(data);
            setSeller(data.isSeller)
            setSellerLoding(false)
        })
    },[email])
    return [isSeller, sellerLoding]
    
};

export default UseSeller;