import React from 'react';
import { NavLink } from 'react-router';

function Header(props) {
    return (
        <>
            <NavLink to='/count'>Count</NavLink>
            <NavLink to='/password'>Password</NavLink>
            <NavLink to='/products/5'>Products</NavLink>
        </>
    );
}

export default Header;