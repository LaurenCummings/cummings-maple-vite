import '../css/ProductPage.css';
import { useLocation } from 'react-router-dom';

function ProductPage() {
    const location = useLocation();
    const product = location.state;

    console.log(product);

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
        </div>
    )
}

export default ProductPage;