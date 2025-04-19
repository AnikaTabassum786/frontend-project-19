import React, { useState } from 'react';
import bannerImg from '../../assets/images/banner.png'
import PhonesContainer from '../../components/PhonesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)

    const [searchText, setSearchText] = useState('')
    const [phones,setPhones] = useState(data)
    console.log(searchText)
    // const handleSearch = ( e,text )=>{
    //    e.preventDefault()
    //    const searchedPhone = data.filter(phone=>
    //     phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
    //     phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
    //    )
    //    console.log(text)
    //    setPhones(searchedPhone)
    // }
    const handleSearch = (e) => {
        e.preventDefault();
    
        const text = searchText.trim().toLowerCase();
    
        if (text === '') {
            setPhones(data); // Reset to all if input is empty
            return;
        }
    
        const searchedPhone = data.filter(phone =>
            phone?.name?.toLowerCase().includes(text) ||
            phone?.brand?.toLowerCase().includes(text)
        );
    
        setPhones(searchedPhone);
        setSearchText('')
    };
    

    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-1/3 h-1/3  mt-20' src={bannerImg} alt="" />
                <p className='text-7xl'>Browse, Search, View, Buy</p>
                <p className='mt-4'>Best place to browse, search, view details and purchase of top flagship phones of the current time - FlagshipFaceOff</p>
            </div>

            {/* Search */}
            <div className='flex justify-center items-center mt-4'>
                <div>
                <form  onSubmit={handleSearch} className='flex gap-4'>
                   
                        <input 
                        value={searchText}
                        onChange={e=>setSearchText(e.target.value)}
                        type="search" placeholder='Search' className='border-2 border-gray-200' />
                        <div>
                            <button type='submit' className='btn'>Search</button>
                        </div>
                    </form>
                </div>
            </div>

            <PhonesContainer phones={phones}></PhonesContainer>
        </div>
    );
};

export default Home;