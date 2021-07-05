import React from "react"
import githubIcon from "../assets/github.png"
import linkedinIcon from "../assets/linkedin.png"

function Footer() {
    return (
        <footer className="credits">

            <div>
                by <a className="name" href="https://github.com/FernandaRicciardi" target="_blank" rel="noreferrer">FERNANDA RICCIARDI</a>
            </div>

            <div className="links">
                <a href="https://github.com/FernandaRicciardi" target="_blank" rel="noreferrer">
                            <img src={githubIcon} alt="GitHub icon" />
                </a>

                <a href="https://www.linkedin.com/in/fernanda-ricciardi/" target="_blank" rel="noreferrer">
                            <img src={linkedinIcon} alt="GitHub icon" />
                </a>
            </div>
            
        </footer>
    )
}

export default Footer;