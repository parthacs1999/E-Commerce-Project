import React, { useState } from 'react';
import myData from '../data';
import Cards from './Cards';

export default function Products({ size }) {
    const [filter, setFilter] = useState(myData);

    const filterResult = (categ) => {
        const updatedList = myData.filter((x) => x.category === categ);
        setFilter(updatedList);
    }

    return (
        <>

            <div className='buttons d-flex justify-content-center mb-5 pb-5 my-5'>
                <button className='btn btn-outline-dark me-2' onClick={() => filterResult("men's clothing")}> Men's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterResult("women's clothing")}> Women's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterResult("jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark me-2' onClick={() => filterResult("electronics")}>Electronics</button>
            </div>
            <div className='container my-5 py-5'>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {filter.map((item) => <Cards key={item.id} item={item} />)}
                </div>
            </div>

        </>
    );
}
