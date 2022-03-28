import React from 'react';
import { ArrowCircleRightIcon, CheckCircleIcon } from '@heroicons/react/solid'
const PriceingCard = (props) => {
    const { name, price } = props.data

    return (
        <div className='bg-white mb-8 mt-8 border-8 rounded-lg border-green-300'>
            <h1 className='text-center text-3xl p-4 mt-4 bg-green-300 m-5 rounded-lg'>{name}</h1>
            <p className=' text-center text-6xl p-2'>{price}</p>
            <p className='ml-5'>Benifits:</p>
            <p className='flex items-center pl-4'>
                <CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                <p> Awesome Features</p>
            </p>
            <p className='flex items-center pl-4'>
                <CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                <p>Life-Time free</p>
            </p>
            <p className='flex items-center pl-4 pb'>
                <CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                <p>Crazy Deals</p>
            </p>
            <p className='flex items-center pl-4 pb-10'>
                <CheckCircleIcon className='w-5 h-5 text-green-500 mr-2'></CheckCircleIcon>
                <p>Lucky Deals</p>
            </p>

            <button className='flex justify-center items-center bg-green-400 p-2 font-bold w-full rounded'>
                Buy Now <ArrowCircleRightIcon className='w-10 h-10 text-white' ></ArrowCircleRightIcon>
            </button>
            
        </div>
    );
};

export default PriceingCard;