import '../css/Shop.css';
import products from '../Products';

function Shop() {
    return (
        <div className="shop">
            <h1>Our Products</h1>
            <select name="filter">
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