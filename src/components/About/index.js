import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPython,
    faGitAlt,
    faJava,
    faDocker,
    faReact,
    faGithub
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container about-page">
            <div className="text-zone">
    <h1>
        <AnimatedLetter
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
        />
    </h1>

    <p>I'm a <b>third-year Computer Science student</b> at Amrita University, Coimbatore, passionate about backend development and solving algorithmic challenges.</p>
    <p>I've <b>interned</b> at <b>Bosch Global Software Technologies</b> building scalable REST APIs with FastAPI & MongoDB, and enjoy exploring AI/ML applications through hands-on projects.</p>
    <p>With 200+ problems solved on LeetCode and competitive programming wins, I love breaking down complex problems into elegant solutions.</p>

    <p className="resume-link">
    <a href="https://drive.google.com/file/d/1NuA3s0cLD9EIsh03jUVWgv4NdcBhoXIC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
        View my resume →
    </a>
</p>

<div className="cta-section">
    <a href="/work" className="cta-button">
        View My Work Experience →
    </a>
    <a href="/projects" className="cta-button">
        View My Projects →
    </a>
</div>
</div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faPython} color="#3776AB" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faGitAlt} color="#F05032" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJava} color="#007396" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faDocker} color="#2496ED" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faReact} color="#61DAFB" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGithub} color="#181717" />
                        </div>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default About
