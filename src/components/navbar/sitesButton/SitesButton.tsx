import './SitesButton.css';
import { Button } from 'primereact/button';
import { useEffect } from 'react';
import PentaGay from '../../../resources/favicons/GaySigilOfBaphomet.png'
//import  GH_I from '../../../resources/favicons/github-svgrepo.svg' //Doesn't work because of a broken dependency (@svgr/webpack)

export default function SitesButton() {
    return(
    <div className="dropdown">
  <button className="sites"><img src={PentaGay} width="20px" height="20px"></img> Sites <svg width="8pt" height="8pt" viewBox="0 0 132 132" fill="#d3e0e3"><path d="M64.177 100.069a7.889 7.889 0 01-5.6-2.316l-55.98-55.98a7.92 7.92 0 010-11.196c3.086-3.085 8.105-3.092 11.196 0l50.382 50.382 50.382-50.382a7.92 7.92 0 0111.195 0c3.086 3.086 3.092 8.104 0 11.196l-55.98 55.98a7.892 7.892 0 01-5.595 2.316z"></path></svg></button>
  <div className="dropdown-content">
    <a href="https://github.com/StarterX4"><b>My GitHub</b> [https://github.com/StarterX4]</a>
    <a href="https://steamcommunity.com/id/StarterX4"><b>My Steam Profile</b> [https://steamcommunity.com/id/StarterX4]</a>
    <a href="https://aur.archlinux.org/packages?SeB=m&K=StarterX4"><b>AUR Packages I Maintain</b> [https://aur.archlinux.org/packages?SeB=m&K=StarterX4]</a>
    <a href="https://www.last.fm/user/StarterX4"><b>My Last.FM Profile</b> [https://www.last.fm/user/StarterX4]</a>
  </div>
</div>);
}
