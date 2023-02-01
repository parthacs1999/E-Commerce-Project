import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import myData from '../data';

export default function Product({ handleClick, size }) {

    const { id } = useParams();

    const product = myData.find(element => element.id === Number(id));


    const ShowProduct = () => {
        return (
            <>

                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase test-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>
                        Rating {product.rating && product.rating.rate}
                        <i className='fa fa-star'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => handleClick(product)}>Add to Cart</button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className='container py-5'>
                <div className='row py-5'>
                    <ShowProduct />
                </div>
            </div>
        </div>
    );
}
