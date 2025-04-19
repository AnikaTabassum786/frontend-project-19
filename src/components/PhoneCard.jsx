import React from 'react';
import { Link } from 'react-router';

const PhoneCard = ({ phone }) => {
    // console.log(phone)
    const { name, description,image,id } = phone
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
        </div>
    );
};

export default PhoneCard;