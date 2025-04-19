import React, { useEffect, useState } from 'react';
import PhoneCard from './PhoneCard';

const PhonesContainer = ({phones}) => {

    const [displayPhone, setDisplayPhone] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(()=>{
         if(showAll){
            setDisplayPhone(phones)
         }
         else{
            setDisplayPhone(phones.slice(0,6))
         }
    },[phones,showAll])

    return (
        <div>
            {/* Phones Container {phones.length} */}

            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                    displayPhone.map(phone=><PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }
            </div>
            <div><button onClick={()=>{
                setShowAll(!showAll)
                if(showAll) window.scrollTo(0,500)
            }} className='btn my-10'>{showAll?'Show Less':'Show All'}</button></div>
        </div>
    );
};

export default PhonesContainer;