import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Checkout({ cart }) {
    return (
        <div>
            <div className="container text-center ">
                <h1>Thanks for shopping with us</h1>
                <h2 className='py-3'>Your Order
                    will be shipped in few days.
                </h2>

                <NavLink to='/home' className='btn btn-outline-dark' style={{ color: 'green' }}>⬅Back to home</NavLink>

            </div>
        </div>
    );
}
