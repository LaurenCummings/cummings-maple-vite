import '../css/Home.css';
import trees from '../assets/trees.jpg';
import bucket from '../assets/bucket.jpg';
import leafFamily from '../assets/leafFamily.jpg';
import jugFamily from '../assets/jugFamily.jpg';
import bottleFamily from '../assets/bottleFamily2.jpg';
import aboutUs from '../assets/aboutUs.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <img className="banner" src={trees} alt="trees" />
            <div className="home-about-us">
                <img className="home-about-us-img" src={bucket} alt="bucket" />
                <div className="home-about-us-info">
                    <p>We've been producing Maple Products in Palmyra, NY for over 30 years.</p>
                    <Link to="/About">
                        <button>Read About Our Operation</button>  
                    </Link>
                </div>
            </div>
            <div className="home-products">
                <div className="home-products-images">
                    <img src={leafFamily} alt="glass leaves filled with maple syrup" />
                    <img src={jugFamily} alt="containers of maple syrup" />
                    <img src={bottleFamily} alt="bottles of maple syrup" />                    
                </div>
                <Link to="/Products">
                    <button>View Our Products</button>
                </Link>
            </div>
            <div className="home-contact-us">
                <img src={aboutUs} alt="barn" />
                <div className="home-contact-us-info">
                    <p>We are located at:</p>
                    <p>2814 Harris Rd</p>
                    <p>Palmyra, NY</p>
                    <p>Please call ahead if you would like to visit!</p>
                    <p>Phone: (315) 576-0203</p>    
                </div>

            </div>
        </div>
    )
}

export default Home;