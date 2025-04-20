import React from 'react';
import { Link } from 'react-router';
import { TiDelete } from "react-icons/ti";

const PhoneCard = ({ phone, deleteable, handleDelete }) => {
    // console.log(phone)
    const { name, description, image, id } = phone
    return (
        <div >
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <Link to={`/phone-details/${id}`}>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </Link>
                </div>
            </div>

            {deleteable && (
                <div
                    onClick={() => handleDelete(id)}
                    className='bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute '
                >

                    <TiDelete
                        size={20}
                        className='text-gray-100 group-hover:text-gray-900'
                    />
                </div>
            )}
        </div>
    );
};

export default PhoneCard;