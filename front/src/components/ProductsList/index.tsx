import React, { FC, useEffect, useState } from 'react';

import { getSpecificNumberOfProducts } from '../../services/ProductsServices';

interface Product {
    title: string;
}

const ProductsList: FC = () => {
    const [products, setProducts] = useState([]);
    const [numberOfProducts, setNumberOfProducts] = useState('10');

    useEffect(() => {
        const fetchData = async () => {
            const data = await getSpecificNumberOfProducts(numberOfProducts);
            setProducts(data);
        }

        fetchData();
    }, [numberOfProducts])

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfProducts(event.target.value);
    }

    if(products.length === 0) return <>Aucun produit disponible</>
    
    return (
        <>
            <p>Nombre de produits à afficher :</p>
            <input type="text" value={numberOfProducts} onChange={handleChange} />
            <ul>
            {products.map((product: Product) => {
                return <li>{product.title}</li>;
            })}
            </ul>
        </>
    );
}

export default ProductsList;