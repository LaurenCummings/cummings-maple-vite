import '../css/Home.css';
import trees from '../assets/trees.jpg';
import bucket from '../assets/bucket.jpg';

function Home() {
    return (
        <div className="home">
            <img className="banner" src={trees} alt="trees" />
            <div className="home-about-us">
                <img className="home-about-us-img" src={bucket} alt="bucket" />
                <h2>View Our Products</h2>
            </div>
            <div className="home-products">

            </div>
            <div className="home-contact-us">

            </div>
        </div>
    )
}

export default Home;