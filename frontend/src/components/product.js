import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './rating';

export default function Product(props){
    const {product} =props;
    return(
        <div>
              <div key={product._id} 
              className="card">
                                <Link to= {`/product/${product._id}`}>
                                    <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="medium"
                                    />
                                </Link>
                                <div className="card-body">
                                <Link to= {`/product/${product._id}`}>
                                        <h2 className="">{product.name}</h2>
                                    </Link>
                                <Rating 
                                rating={product.rating}
                                numReviews={product.numReviews}
                                ></Rating>
                                        <div className="row">
           <div className="price">${product.price}</div>
           <div>
             <Link to={`/seller/${product.seller._id}`}>
             {product.seller.name}
               </Link>
           </div>
         </div>
                                   </div>
                                </div>
        </div>
    );
}
