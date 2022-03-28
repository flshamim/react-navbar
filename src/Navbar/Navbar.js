import React from 'react';

const Navbar = () => {
        const route =[
            {name:"Home", id: 4735, link:"#home"},
            {name:"About", id: 7356, link:"#about"},
            {name:"Service", id: 4736, link:"#service"},
            {name:"Contract", id: 4356, link:"#contract"}
        ]
    return (
        <div>
            {
                route.map(data =>console.log(data) )
            }
        </div>
    );
};

export default Navbar;