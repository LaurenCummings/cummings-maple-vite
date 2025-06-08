import '../css/ProductPage.css';
import { useLocation } from 'react-router-dom';
import GradeLabel from '../components/GradeLabel';

function ProductPage() {
    const location = useLocation();
    const product = location.state;

    return (
        <div className="product-page">
            <h1>{product.name}</h1>
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />   
                </div>
                <div className="product-info">
                    <p>{product.size}</p>
                    <p>${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                    { product.grades && 
                        <p>Available in </p>
                    }
                    <div className="product-grades">
                        { product.grades && product.grades.map((grade, index) => {
                            return (
                                <GradeLabel key={index} grade={grade} />                  
                            )    
                        })}
                    </div>                
                </div>                
            </div>
        </div>
    )
}

export default ProductPage;