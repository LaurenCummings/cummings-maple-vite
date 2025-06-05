import '../css/Shop.css';
import { useState } from 'react';
import products from '../Products';

function Shop() {
    const [selectedProducts, setSelectedProducts] = useState("all");

    const handleChange = (event) => {
        setSelectedProducts(event.target.value);
    }
    console.log(selectedProducts);

    return (
        <div className="shop">
            <h1>Our Products</h1>
            <select name="filter" onChange={handleChange}>
                <option value="all">All Products</option>
                <option value="peanuts">Peanuts</option>
                <option value="candy">Candy</option>
                <option value="syrup">Syrup</option>
                <option value="cotton-candy">Cotton Candy</option>
            </select>
            <div className="products">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="product">
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <p>{item.size}</p>
                            <p>${item.price}</p>
                        </div>
                    )
                })}
            </div>            
        </div>
    )
}

export default Shop;