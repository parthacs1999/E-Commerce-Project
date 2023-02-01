import React from 'react';

export default function Cards({item}) {
  return (
    <>
        <div className='col-md-3 mb-4 '>
            <div class="card h-100 text-center p-4" key={item.id}>
                <img src={item.image} class="card-img-top" alt={item.title} height="250px"/>
                    <div class="card-body">
                        <h5 class="card-title mb-0">{item.title.substring(0,12)}...</h5>
                            <p class="card-text lead fw-bold">${item.price}</p>
                            <a href={`/products/${item.id}`} class="btn btn-outline-dark">Buy Now</a>
                    </div>
            </div>
        </div>
    </>
  );
}
