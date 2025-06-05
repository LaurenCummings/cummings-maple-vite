import '../css/Shop.css';
import { useState } from 'react';
import products from '../Products';

function Shop() {
    const [selectedProducts, setSelectedProducts] = useState("all");

    const handleChange = (event) => {
        setSelectedProducts(event.target.value);
    }
    
    const filteredData = products.filter((item) => item.category === selectedProducts || item.family === selectedProducts);

    return (
        <div className="shop">
            <h1>Our Products</h1>
            <select name="filter" onChange={handleChange}>
                <option value="all">All Products</option>
                <option value="maple coated peanuts">Peanuts</option>
                <option value="maple candy">Candy</option>
                <option value="syrup">Syrup</option>
                <option value="cotton-candy">Cotton Candy</option>
            </select>
            <div className="products">
                {filteredData.map((item) => {
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