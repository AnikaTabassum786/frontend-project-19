import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const PhoneDetails = () => {
    const data = useLoaderData();
    // console.log(data)

    const {id} = useParams();
    const paramsId = parseInt(id)

    const singlePhone = data.find(phone=>phone.id===paramsId)
    console.log(singlePhone)

    const {name,image,brand,model,storage,price,camera_info,description}= singlePhone
    console.log(price)
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={image} alt="" />
            </div>

            <div className='flex flex-col gap-4 justify-start mt-4'>
                <div className='text-7xl'>
                  {name}
                </div>
                <div className='text-5xl'>Details</div>
                <div>
                  <span className='text-xl font-bold'>Brand:</span> {brand}
                </div>
                <div>
                  <span className='text-xl font-bold'>Model:</span> {model}
                </div>
                <div>
                  <span className='text-xl font-bold'>Storage:</span> {storage}
                </div>
                <div>
                  {/* <span className='text-xl font-bold'>Price:</span> {price} */}
                  
                    {Object.keys(price).map((item, i) => (
                        <li className="travelcompany-input" key={i}>
                          <span className="input-label">key: {i} Name: {price[item]}</span>
                        </li>
                      ))}
                  
                </div>
                <div>
                  <span className='text-xl font-bold'>Description:</span> {description}
                </div>
                <div>
                  <span className='text-xl font-bold'>Camera info:</span> {camera_info}
                </div> 


                
            </div>
            
        </div>
    );
};

export default PhoneDetails;