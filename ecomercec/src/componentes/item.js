import React, { useState } from "react";
import Item from './itemList';
import jbl from '../imagenes/jbl.png';
import jbl4 from '../imagenes/jbl4.png';
import jbP from '../imagenes/jblP.png';

const Products = () => {

    const [products, setProducts ] = useState([
        {
            id:1,
            name:"Parlante",
            img: jbl,
        },
        {
            id:2,
            name:"Parlante2",
            img: jbl4,
        },
        {
            id:3,
            name:"Parlante3",
            img: jbP,
        },
    ]);
    
    return (
        <div className="row">
            {products.map((products) => {
                return (
                <Item 
                  name={products.name} 
                  img={products.img} 
                  />
                );
            })}
        </div>
    );
};

export default Products;