import '../css/ProductPage.css';
import { useLocation, Link } from 'react-router-dom';
import GradeLabel from '../components/GradeLabel';
import { FaInfoCircle } from 'react-icons/fa';

function ProductPage() {
    const location = useLocation();
    const product = location.state;

    function createWindow() {
        const newWindow = window.open('about:blank', 'myNewWindow', 'width=800,height=600');
        var newDoc = newWindow.document;
        var htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
                <title>Information on Maple Grades</title>
            </head>
            <body>
                <div id="root-new-window">
                    <h1>Maple Syrup Grades</h1>
                    <p>Maple syrup starts its life as maple sap, which is collected from maple trees. 
                    From there it is boiled down until it reaches a concentration of roughly 67% sugar. Sap 
                    that is collected later in the season requires more boiling time to reach the desired
                    concentration, which makes the finished syrup darker in color. The New York State Maple
                    Producers Association defines grades based on the color of the finished syrup, which is
                    how we determine how to label our syrup for sale. Here are the full names and descriptions of each grade:
                    </p>
                    <img src="./images/grades.jpg" alt="maple syrup grades" />
                </div>
            </body>
          </html>
        `;

        newDoc.open();
        newDoc.write(htmlContent);
        newDoc.close();
    }


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
                        <FaInfoCircle 
                            className="info-button" 
                            title="Information on Maple Grades" 
                            onClick={createWindow} 
                        />
                    }
                </div>                
            </div>
        </div>
    )
}

export default ProductPage;