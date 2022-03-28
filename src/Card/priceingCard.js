import React from 'react';

const PriceingCard = (props) => {
    const { name, price } = props.data
    return (
        <div className='bg-white mb-8 mt-8 border-8 border-green-300'>
            <h1 className='text-center text-3xl p-4 mt-4 bg-green-300 m-5 rounded-lg'>{name}</h1>
            <p className=' text-center text-6xl p-2'>{price}</p>
        </div>
    );
};

export default PriceingCard;