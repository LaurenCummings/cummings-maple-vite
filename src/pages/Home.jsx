import '../css/Home.css';
import trees from '../assets/trees.jpg';
import bucket from '../assets/bucket.jpg';
import bottles from '../assets/bottles.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <img className="banner" src={trees} alt="trees" />
            <div className="home-about-us">
                <img className="home-about-us-img" src={bucket} alt="bucket" />
                <div className="home-about-us-info">
                    <p>We've been producing maple products in Palmyra, NY for over 30 years.</p>
                    <Link to="/About">
                        <button>Read Our Story</button>  
                    </Link>
                </div>
            </div>
            <div className="home-products">
                <img src={bottles} alt="bottles" />
                <img src={bottles} alt="bottles" />
                <Link to="/Products">
                    <button>View Our Products</button>
                </Link>
            </div>
            <div className="home-contact-us">
                <p>We are located at</p>
                <p>2814 Harris Rd</p>
                <p>Palmyra, NY</p>
                <p>Please call ahead if you would like to visit!</p>
                <p>(315) 576-0203</p>
            </div>
        </div>
    )
}

export default Home;