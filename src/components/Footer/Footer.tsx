import './Footer.css';
import DcLogo from '../..//resources/favicons/discord-mark-blue.png'

export default function Footer() {
    return (
        <footer style={{ height: 'auto' }}>
           <p>If you still want to peek inside <code>/github/pages/starterx4</code>:</p>
<ul><li><span>
<a href="https://github.com/StarterX4/StarterX4.github.io" rel="noopener noreferrer" target="_blank">https://github.com/StarterX4/StarterX4.github.io</a>
</span></li></ul>
        <span className="contact">  Contact:<br/>
                ✉️ starterx4[ÄṪ]gmail[ḊÔṪ]com <br/>
                <img src={DcLogo} width="20px" height="15px"></img> StarterX4(#0254)</span>
        </footer>
    );
}
