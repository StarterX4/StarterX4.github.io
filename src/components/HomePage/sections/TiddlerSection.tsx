import './TiddlerSection.css';

export default function TiddlerSection() {
	return (
		<div className="section">
			<span
				className="text">
				<p>A hobby dev and gamer, based in Central 🇪🇺 Europe.</p>
				<p>Projects I recently work on:</p>
				<ul>
					<li><a href='https://github.com/StarterX4/L4AddonEnforcer'>L4AddonEnforcer</a></li></ul><br/>
				<p style={{paddingLeft: '2rem'}}>An addon manager 
				that lets you easily install (and manage them) addons to the <code>gameinfo.txt</code> file, 
				and therefore let you use them on official versus/scavenge servers
				(after Valve <a href='https://www.l4d.com/blog/post.php?id=45465'>blocked workshop addons</a> from <a href='https://www.reddit.com/r/l4d2/comments/9te397/new_l4d2_update_disables_addons_in_versus_mode/'>official servers in 2018</a>,
				for so-called <i>cheating</i>. But who plays seriously on official servers? there are PuG-type servers (like <a href='http://errorservers.eu/'>Error</a> or <a href='https://cedapug.com/'>CEDApug</a>) to play seriously on.
				L4AddonEnforcer even has a switch to temporarily replace the modded gameinfo with vanilla backup to let you play on PuG servers).</p>
				
				<p><i>(To see more, check <a href="https://github.com/starterx4">My GitHub</a>)</i></p>
				<br/>
				<p>Projects I recently actively help develop:</p>
				
				<ul>
				<li><a href='https://Kether.pl'>Kether.pl</a> <a href='https://github.com/Krevik/Kether.pl-L4D2-Server'>L4D2 T1/Zonemod Server</a> (IP: <a href='steam://connect/51.83.217.86:29800'>51.83.217.86:29800</a> (IP link to join directly))</li>
				</ul>
				<br/><br/>
                <p>Projects I worked on in the past:</p>
				
				<p><small><i>Left 4 Dead 2</i></small></p>
				<ul>
				<li><a href='https://github.com/StarterX4/Sat-Scavenge-L4D2-Server'>Satanixon's Scavenge Server</a></li>
				</ul>
				<br/>
				<p><small><i>Open Fortress</i></small></p>
				<ul>
				<li><a href='https://github.com/StarterX4/Satanixons-OF-Server'>Satanixon's OF Server</a></li>
				</ul>
				<br/>
				<p><small><i>Counter Strike 1.6</i></small></p>
				<ul>
				<li><a href='https://github.com/StarterX4/Satanixons-CS1.6-Server'>Szatański Serwer CS 1.6</a></li>
				</ul>

				<br/>
			</span>
		</div>
	);
}
