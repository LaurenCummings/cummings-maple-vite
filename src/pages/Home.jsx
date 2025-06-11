import '../css/Home.css';
import leaves from '../assets/leaves.jpg';

function Home() {
    return (
        <div className="home">
            <img src={leaves} alt="leaves" />
        </div>
    )
}

export default Home;