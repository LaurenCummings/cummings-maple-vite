import '../css/Shop.css';
import { useState, useEffect } from 'react';
import products from '../Products';
import { Link } from 'react-router-dom';

function Shop() {
    const [selectedProducts, setSelectedProducts] = useState("all");
    const [filteredData, setFilteredData] = useState(products);

    const handleChange = (event) => {
        setSelectedProducts(event.target.value);
    }

    useEffect(() => {
        if (selectedProducts === "all") {
            setFilteredData(products);
        } else {
            const filteredProducts = products.filter((item) => item.category === selectedProducts || item.family === selectedProducts);
            setFilteredData(filteredProducts)
        }
    }, [selectedProducts])

    return (
        <div className="shop">
            <h1>Our Products</h1>
            <h3>Available for shipment. Please call for pricing.</h3>
            <select name="filter" onChange={handleChange}>
                <option value="all">All Products</option>
                <option value="syrup">Maple Syrup</option>
                <option value="molded maple sugar">Molded Maple Sugar</option>
                <option value="maple coated peanuts">Maple Coated Peanuts</option>
                <option value="cream">Maple Cream</option>
                <option value="sugar">Granulated Maple Sugar</option>
                <option value="cotton-candy">Maple Cotton Candy</option>
            </select>
            <div className="products">
                {filteredData.map((item) => {
                    return (
                        <div key={item.id} className="product">
                            <Link to={`/${item.name}`} state={ item }>
                                <img src={item.image} alt={item.name} />
                            </Link>
                            <h2>{item.name}</h2>
                            { item.size &&
                                <p>{item.size}</p>
                            }
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                    )
                })}
            </div>            
        </div>
    )
}

export default Shop;