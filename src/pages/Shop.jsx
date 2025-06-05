import products from '../Products';

function Shop() {
    return (
        <div>
            {products.map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Shop;