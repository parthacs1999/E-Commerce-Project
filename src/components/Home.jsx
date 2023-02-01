import React from 'react'
import Navbar from './Navbar'

import Products from './Products'
export default function Home({ size }) {
    return (
        <>
            <Navbar size={size} />
            <div className='hero'>
                <div className="card bg-dark text-white border-0">
                    <img src="/assets/bg.jpg" className="card-img" alt="BackgroundImage" height="500px" />
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <div className='container'>
                            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                        </div>
                    </div>
                </div>
                <Products />
            </div>
        </>
    )
}
