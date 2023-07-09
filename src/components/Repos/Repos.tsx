import './Repos.css';
import TiddlerSection from './sections/TiddlerSection';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Repos() {
    return (
        <>
            <Navbar />
            <div
                className="repos"
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
