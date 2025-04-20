import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStorePhone, removePhone } from '../../utils/addToDB';
import PhoneCard from '../../components/PhoneCard';
import { TbRuler } from 'react-icons/tb';
import { SiTruenas } from 'react-icons/si';

const Favorites = () => {

    const data = useLoaderData();
    console.log(data)

    const [fav, setfav] = useState([])

    useEffect(()=>{
      const storePhoneData = getStorePhone()
      const convertedStoreBooks = storePhoneData.map(id=>parseInt(id))
      const myFavList = data.filter(phone => convertedStoreBooks.includes(phone.id))
      setfav(myFavList)

    },[])

    if(fav.length<1){
        return <div className='text-center mt-10 text-5xl'>Not selected</div>

    }

    // const handleDelete=(id)=>{
    //     removePhone(id)
    //     setfav(getStorePhone())
    // }

  const handleDelete = (id) => {
    removePhone(id)
    setfav(prev => prev.filter(phone => phone.id !== id))
}


    return (
        <div className='container mx-auto'>
            Favorites
            <div className='grid grid-cols-3 gap-4'>
                {
                    fav.map(phone=><PhoneCard phone={phone} deleteable={true} handleDelete={handleDelete}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;