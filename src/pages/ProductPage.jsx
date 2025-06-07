import '../css/ProductPage.css';
import { useLocation } from 'react-router-dom';
import GradeLabel from '../components/GradeLabel';

function ProductPage() {
    const location = useLocation();
    const product = location.state;

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <GradeLabel grade={product.name} />
            <img src={product.image} alt={product.name} />
            <p>{product.size}</p>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description}</p>
            { product.grades && 
                <p>Available in </p>
            }
            { product.grades && product.grades.map((grade, index) => {
                return (
                    <GradeLabel key={index} grade={grade} />                  
                )    
            })}
        </div>
    )
}

export default ProductPage;