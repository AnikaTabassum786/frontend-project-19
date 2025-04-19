import React from 'react';
import bannerImg from '../../assets/images/banner.png'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <img className='w-1/3 h-1/3  mt-20' src={bannerImg} alt="" />
                <p className='text-7xl'>Browse, Search, View, Buy</p>
                <p className='mt-4'>Best place to browse, search, view details and purchase of top flagship phones of the current time - FlagshipFaceOff</p>
            </div>

            {/* Search */}
           <div className='flex justify-center items-center mt-4'>
              <div className='flex gap-4'>
              <label className="input ">

<svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
    >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
    </g>
</svg>
<input type="search" required placeholder="Search" />
           </label>
            <div>
                <button className='btn'>Search</button>
            </div>
              </div>
           </div>
        </div>
    );
};

export default Home;