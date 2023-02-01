import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';
export default function Navbar({ size }) {
    const { user, logOut } = useUserAuth();
    const handleLogOut = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/home">Rockerzs</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addproduct">Add Product</NavLink>
                            </li>

                        </ul>
                        <div className='buttons'>
                            <button className='btn btn-outline-dark'>
                                Welcome {user && user.email}
                            </button>
                            <button className='btn btn-outline-dark ms-2' onClick={handleLogOut}>
                                Log out
                            </button>
                            <NavLink to='/cart' className='btn btn-outline-dark ms-2'>
                                <i className="fa fa-shopping-cart me-1"></i>Cart({size})
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
