import React, { useState } from 'react';
import NavbarItem from './NavbarItem';
import { MenuIcon } from '@heroicons/react/solid'
const Navbar = () => {
    const route = [
        { name: "Home", id: 4735, link: "#home" },
        { name: "About", id: 7356, link: "#about" },
        { name: "Service", id: 4736, link: "#service" },
        { name: "Contract", id: 4356, link: "#contract" }
    ]
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-green-300 m-0 '>
            <div onClick={() => setOpen(!open)}>
                <MenuIcon className='w-10 h-10 md:hidden m-0 '></MenuIcon>
               
            </div>
            <div className={` md:flex justify-center absolute duration-500 bg-green-300 w-full p-10 ease-in m-0 ${open ? 'top-10' :'m-0 top-[-200px] md:top-0'}`}>
                <hr className='text-gray-900' />
                {
                    route.map(data => <NavbarItem data={data}></NavbarItem>)
                }
            </div>

        </div>
    );
};

export default Navbar;