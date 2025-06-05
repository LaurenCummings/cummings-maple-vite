import products from '../Products';

function Shop() {
    return (
        <div>
            {products.map((item) => {
                return (
                    <h2>{item.name}</h2>
                )
            })}
        </div>
    )
}

export default Shop;