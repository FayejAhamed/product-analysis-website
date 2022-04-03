import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex gap-4 text-xl justify-center font-bold '>
            <Link to='/' >Home</Link>
            <Link to='/reviews'>Reviews</Link>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/blogs'>Blogs</Link>
        </div>
    );
};

export default Header;