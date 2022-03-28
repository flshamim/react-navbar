import React from 'react';

const NavbarItem = (props) => {
    const {name, link} =props.data
    return (
        <div>
           <ul>
           <span><a className='no-underline text-xl mr-20' href={link}>{name}</a></span>
           </ul>
        </div>
    );
};

export default NavbarItem;