import React from 'react';
import Products from '../product.js';
import { Product } from './product.jsx';
import './home.css';

export const Home = () => {
  return (
    <>
      <main className="Main">
        <div className="MainTitle">Shop Our Products</div>
        <div className="Products">
          {Products.map((product) => {
            return <Product data={product} key={product.id} />;
          })}
        </div>
      </main>
      
    </>
  );
};
