import React from 'react';
import PriceingCard from './priceingCard';

const Card = () => {
    const data =[
        {name:"Free", price:"0", id:3764},
        {name:"Regular", price:"9.99", id:3764},
        {name:"Premium", price:"19.99", id:3764}
    ]
    return (
     
        <div className='bg-green-300 grid md:grid-cols-3 gap-3 md:mt-[110px]'>
           
            {
                data.map(data=> <PriceingCard data={data}></PriceingCard>)
            }
        </div>
    
    );
};

export default Card;