import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import BoschLogo from '../../assets/images/bosch.png'
import TecleverLogo from '../../assets/images/teclever.png'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    const experiences = [
        {
            title: "Student Intern",
            company: "Bosch Global Software Technologies",
            logo: BoschLogo,
            location: "Coimbatore, TN",
            duration: "May 2025 – June 2025",
            responsibilities: [
                "Designed & implemented a backend data module using FastAPI & MongoDB, enabling scalable REST API access to over 100,000 records.",
                "Built a lightweight internal dashboard with Streamlit to monitor API outputs.",
                "Automated Excel-based reporting tasks using Pandas & Openpyxl, reducing work by 3-4 hours."
            ],
            certificate: "https://drive.google.com/file/d/1lnjhIHAOlN4tWOwE49WmtIxmXEtnQPmJ/view?usp=sharing" 
        },
        {
            title: "Student Trainee",
            company: "Teclever Solutions Pvt Ltd",
            logo: TecleverLogo,
            location: "Bengaluru, KA",
            duration: "Nov 2023 – Nov 2023",
            responsibilities: [
                "Gained hands-on experience in CRM concepts including objects, fields, and workflow rules for ~20 customers.",
                "Developed and executed a project on Salesforce CRM, gaining valuable practical experience."
            ],
            certificate: "https://drive.google.com/file/d/130aZzjr7QIq57W4hQ9ZjNAAHFC1Wn0sR/view?usp=sharing"
        }
    ]

    return (
        <>
            <div className="container work-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>

                    <div className="experience-grid">
                        {experiences.map((exp, idx) => (
                            <div className="experience-card" key={idx}>
                                <div className="card-header">
                                    <img src={exp.logo} alt={exp.company} className="company-logo" />
                                    <div className="header-text">
                                        <h3>{exp.title}</h3>
                                        <h4>{exp.company}</h4>
                                        <p>{exp.location} | {exp.duration}</p>
                                    </div>
                                </div>
                                <ul className="responsibility-list">
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                                {exp.certificate && (
                                    <a href={exp.certificate} className="cert-link" target="_blank" rel="noopener noreferrer">
                                        View Certificate →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Work