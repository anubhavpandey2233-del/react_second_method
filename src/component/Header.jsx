import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router';

function Header(props) {
    const cartData = useSelector(state => state.cart)
    console.log(cartData);
    return (
        <>
            <NavLink to='/count'>Count</NavLink>
            <NavLink to='/password'>Password</NavLink>
            <NavLink to='/products/5'>Products</NavLink>
            <NavLink to='/employee'>Employee</NavLink>
            <NavLink to='/validationyupformik'>Formik</NavLink>
            <NavLink to='/counter'>Counter</NavLink>

            <NavLink to='/cart'> <h2>Cart:{cartData?.cart?.reduce((acc, v) => acc + v.qty, 0)}</h2></NavLink>

        </>
    );
}

export default Header;