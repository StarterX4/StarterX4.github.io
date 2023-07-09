import './TiddlerSection.css';

export default function TiddlerSection() {
    return (
        <div className="RepSection">
            <div className="left1">
                <span
                    className="text">
                    <span className="archblu">Arch</span> / <span className="manjarogren">Manjaro</span> repositories <br/><br/>
                    <code>
                    [stx4-any] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/any/stx4
                    </code><br/><br/><code>
                    [stx4-x86_64] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/x86_64/stx4
                    </code><br/><br/><code>
                    [stx4-aarch64] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/aarch64/stx4
                    </code><br/><br/><code>
                    [stx4-riscv64] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/riscv64/stx4
                    </code><br/><br/>
                </span>
            </div>
            <div className="right1">
                <span
                    className="text">

                    Equinox Desktop Environment (EDE)<br/> <br/>
                    <code>
                    [ede-any] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/any/ede
                    </code><br/><br/><code>
                    [ede-i686] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/i686/ede
                    </code><br/><br/><code>
                    [ede-x64] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/x86_64/ede
                    </code><br/><br/><code>
                    [ede-archbsd_amd64] <br/>
                    SigLevel = Never <br/>
                    Server = https://starterx4.github.io/repos/arch/bsd-amd64/ede
                    </code>
                </span>
            </div>
            <div className="left2">
                <span
                    className="text">
                    <br/><br/>
                    F-Droid Non-Free Archival Repo<br/> <br/>
                    <code>
                    https://starterx4.github.io/repos/fdroid/repo
                    </code><br/><br/>
                </span>
            </div>
        </div>
    );
}
