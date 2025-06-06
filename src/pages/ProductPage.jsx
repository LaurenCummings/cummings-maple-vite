import { useLocation } from 'react-router-dom';

function ProductPage() {
    const location = useLocation();
    const product = location.state;

    console.log(product);

    return (
        <div>
            ProductPage
        </div>
    )
}

export default ProductPage;