import React from 'react';

const ProductCard = ({ product}) => {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.name} style={{width:'200px', borderRadius:'15px'}}/>
        <h4>{product.name}</h4>
        <p>Fiyat: {product.price}₺</p>
    </div>
  );
};

export default ProductCard;