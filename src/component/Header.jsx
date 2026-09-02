import React from 'react';
import { NavLink } from 'react-router';

function Header(props) {
    return (
        <>
            <NavLink to='/count'>Count</NavLink>
            <NavLink to='/password'>Password</NavLink>
            <NavLink to='/products/5'>Products</NavLink>
            <NavLink to='/employee'>Employee</NavLink>
            <NavLink to='/validationyupformik'>Formik</NavLink>
            <NavLink to='/counter'>Counter</NavLink>
        </>
    );
}

export default Header;