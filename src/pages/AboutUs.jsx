import '../css/AboutUs.css';
import aboutUs from '../assets/aboutUs.jpg';

function AboutUs() {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            <div className="about-us-info">
                <img src={aboutUs} alt="barn" />
                <div className="description">
                    <p>
                        Cummings Maple is a family sugaring operation located
                        in the rolling hills of Palmyra, New York. Trees are 
                        tapped in early Spring when days start to warm and nights
                        are below freezing. The sap is collected and boiled daily
                        during the sap runs, typically taking 45 gallons of sap
                        to produce 1 gallon of Pure Maple Syrup. In addition to 
                        Maple Syrup, we make maple molded sugar, maple cream, 
                        granulated maple sugar, maple coated peanuts, and maple 
                        cotton candy.
                    </p>
                    <p>
                        We enjoy giving tours of our operation during the Maple 
                        Season.                   
                    </p>
                </div>                
            </div>
        </div>
    )
}

export default AboutUs;