import './HomePage.css';
import TiddlerSection from './sections/TiddlerSection';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function HomePage() {
    return (
        <>
            <Navbar />
            <div
                className="home-page"
                style={{
                    backgroundColor: '#323232',
                }}
            >
                <TiddlerSection />
            </div>
            <Footer />
        </>
    );
}
