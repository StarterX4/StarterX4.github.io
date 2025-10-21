import './Footer.css';
import DC from '../../resources/favicons/discord-mark-blue.png';

export default function Footer() {
    return (
        <footer style={{ height: 'auto' }}>
           <p>If you still want to peek inside <code>/github/pages/starterx4</code>:</p>
<ul><li><span>
<a href="https://github.com/StarterX4/StarterX4.github.io" rel="noopener noreferrer" target="_blank">https://github.com/StarterX4/StarterX4.github.io</a>
</span></li></ul>
        <span className="contact"><p>   Contact:<br/>
                ✉️ starterx4[ÄṪ]gmail[ḊÔṪ]com <br/>
                <img src={DC} width="17px" height="13px" alt="DC"></img> StarterX4</p></span>
        </footer>
    );
}
