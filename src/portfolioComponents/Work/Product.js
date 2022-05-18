import React from 'react';
import './Product.css';

function Product(link,img) {
  return (
    <div className='product'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
           <img src={img} alt="imgalt" className="p-img" />
        </a>
    </div>
  )
}

export default Product;