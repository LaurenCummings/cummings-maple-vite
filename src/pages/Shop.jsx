import products from '../Products';

function Shop() {
    return (
        <div className="products">
            {products.map((item) => {
                return (
                    <div key={item.id} className="product">
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop;