import React, { useState } from 'react';
import './Shop.css';

const Shop = () => {
   
    const products = [
      { id: 1, name: 'Product 1', price: '$10', image: 'Images/OIP.jpg' },
      { id: 2, name: 'Product 2', price: '$20', image: 'Images/image2.jpg' },
      { id: 3, name: 'Product 3', price: '$30', image: 'Images/OIP.jpg' },
      { id: 4, name: 'Product 4', price: '$40', image: 'Images/image2.jpg' },
      { id: 5, name: 'Product 5', price: '$50', image: 'Images/OIP.jpg' },
      { id: 6, name: 'Product 6', price: '$60', image: 'Images/image2.jpg' },
    ];
  
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
  
   
    const addToCart = (productId) => {
     
      console.log('Added to cart:', productId);
    };
  
    return (
      <div className="shop-container">
        <div className="filters">
          
          <button onClick={() => setSelectedCategory('guns')}>Guns</button>
          <button onClick={() => setSelectedCategory('clothing')}>Clothing</button>
          <button onClick={() => setSelectedCategory('knives')}>Knives</button>
          
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search'
          />
        </div>
        <div className="products">
          {products
            .filter((product) => {
            
              if (selectedCategory) {
                return product.category === selectedCategory;
              }
             
              return product.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((product) => (
              <div key={product.id} className="product">
                <img src={product.image} alt={product.name} />
                <div className="product-details">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                </div>
                <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shop;
