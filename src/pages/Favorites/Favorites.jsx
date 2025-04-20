import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStorePhone } from '../../utils/addToDB';
import PhoneCard from '../../components/PhoneCard';

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


    return (
        <div className='container mx-auto'>
            Favorites
            <div className='grid grid-cols-3 gap-4'>
                {
                    fav.map(phone=><PhoneCard phone={phone}></PhoneCard>)
                }
            </div>
        </div>
    );
};

export default Favorites;