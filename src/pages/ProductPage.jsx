import '../css/ProductPage.css';
import { useLocation, Link } from 'react-router-dom';
import GradeLabel from '../components/GradeLabel';
import { FaInfoCircle } from 'react-icons/fa';

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
                    { product.description && product.description.map((description_line, index) => {
                        return (
                            <p key={index}>{description_line}</p>
                        )
                    })}
                    { product.size &&
                        <p>Size: {product.size}</p>
                    }
                    <p>Price: ${product.price.toFixed(2)}</p>
                    { product.grades && 
                        <p>Available in</p>
                    }
                    <div className="product-grades">
                        { product.grades && product.grades.map((grade, index) => {
                            return (
                                <GradeLabel key={index} grade={grade} />                  
                            )    
                        })}
                    </div>                
                    { product.grades && 
                        <Link to="/Grades" target="_blank">
                            <FaInfoCircle className="info-button" />
                        </Link>
                    }
                </div>                
            </div>
        </div>
    )
}

export default ProductPage;