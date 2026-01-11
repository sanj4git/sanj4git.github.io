import './index.scss'
import AnimatedLetter from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import neuralNet from '../../assets/images/neural-network.jpeg';
import examRag from '../../assets/images/exam-rag.png';
import rfid from '../../assets/images/rfid.webp';
import consensus from '../../assets/images/consensus.jpeg';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [currentProject, setCurrentProject] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    // Add your projects here
    const projects = [
        {
            title: "Exam RAG - AI Powered Question Paper Retrieval",
            description: "An intelligent system that transforms how students search for past exam papers using semantic search instead of traditional keyword matching.",
            technologies: ["Python", "Flask", "LangChain", "SentenceTransformers", "SQLite"],
            features: [
                "AI pipeline to crawl and extract past exam papers",
                "Semantic embeddings for context-aware search",
                "Flask web interface for natural language queries",
                "Structured database with 100+ past papers"
            ],
            github: "https://github.com/harshitar31/exam_rag",
            live: null,
            image: examRag
        },

        {
            title: "Consensus – Learning-Aware Generative AI System",
            description: "A learning-aware generative AI platform leveraging an LLM Council for controlled, curriculum-aligned content generation.",
            technologies: [
            "React",
            "Express.js",
            "MongoDB",
            "FastAPI",
            "LangChain",
            "SentenceTransformers",
            "Large Language Models (LLMs)"
            ],
            features: [
                "LLM Council architecture for content verification and reduced hallucinations",
                "Learning-aware generation ensuring curriculum alignment and pedagogical validity",
                "Chained LLM workflows using LangChain for controlled reasoning",
                "Semantic retrieval with SentenceTransformers for context-aware responses",
                "Scalable full-stack architecture with React, Express, FastAPI, and MongoDB"
            ],
              
            github: "https://github.com/Shyam-Sundar-Raju/Consensus",
            live: null,
            image: consensus
        },

        {
            title: "Neural Network from Scratch",
            description: "A simple, educational implementation of a neural network from scratch using only NumPy",
            technologies: ["Python", "Numpy", "Matplotlib"],
            features: [
                "Manual implementation of forward propagation",
                "Manual implementation of backward propagation",
                " Gradient descent optimization",
                "Pure NumPy - no deep learning frameworks"
            ],
            github: "https://github.com/sanj4git/Neural-Network-from-Scratch",
            live: null,
            image: neuralNet
        },
        {
            title: "Hospital Management System",
            description: "A comprehensive system leveraging advanced data structures to efficiently manage hospital operations and prioritize patient care.",
            technologies: ["Python", "Data Structures", "Algorithms"],
            features: [
                "Patient prioritization using Heaps",
                "Shortest path routing with Dijkstra's Algorithm",
                "Efficient data management with AVL Trees",
                "Graph-based hospital resource allocation"
            ],
            github: "https://github.com/SudharsanSaravanan/Hospital_Mangement_System",
            live: null,
            image: null
        },

        {
            title: "RFID based Self Checkout System",
            description: "The Smart Self-Checkout System is an embedded system designed to automate the retail billing process using RFID technology, OLED display, and Bluetooth communication.",
            technologies: ["STM32", "RFID", "Bluetooth", "UART"],
            features: [
                "Each product has a unique RFID tag.",
                "If a match is found, the item is added to the cart; ",
                "The SSD1306 OLED screen provides real-time feedback",
                "Bluetooth based mobile application for cart details."
            ],
            github: "https://github.com/isha050/RFID-Self-Checkout-System",
            live: null,
            image: rfid
        }
    ]

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 2) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 2 + projects.length) % projects.length)
    }

    const currentProj = projects[currentProject]
    const nextProj = projects[(currentProject + 1) % projects.length]

    return (
        <>
            <div className="container projects-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                    </h1>

                    <div className="projects-carousel">
                        <button className="nav-button prev" onClick={prevProject}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className="project-container">
                            {[currentProj, nextProj].map((proj, idx) => (
                                <div key={idx} className="project-card">
                                    {proj.image ? (
                                        <div className="project-image">
                                            <img src={proj.image} alt={proj.title} />
                                        </div>
                                    ) : (
                                        <div className="project-placeholder">
                                            <div className="placeholder-icon">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </div>
                                        </div>
                                    )}

                                    <div className="project-content">
                                        <div className="project-header">
                                            <h2>{proj.title}</h2>
                                            <div className="project-links">
                                                {proj.github && (
                                                    <a href={proj.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                                                        <FontAwesomeIcon icon={faGithub} />
                                                    </a>
                                                )}
                                                {proj.live && (
                                                    <a href={proj.live} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="project-description">{proj.description}</p>

                                        <div className="tech-stack">
                                            {proj.technologies.map((tech, i) => (
                                                <span key={i} className="tech-tag">{tech}</span>
                                            ))}
                                        </div>

                                        <div className="project-features">
                                            <h3>Key Features:</h3>
                                            <ul>
                                                {proj.features.map((feature, i) => (
                                                    <li key={i}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="nav-button next" onClick={nextProject}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                    <div className="carousel-indicators">
                        {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === Math.floor(currentProject / 2) ? 'active' : ''}`}
                                onClick={() => setCurrentProject(index * 2)}
                            />
                        ))}
                    </div>

                    <div className="project-counter">
                        <span>{Math.floor(currentProject / 2) + 1} / {Math.ceil(projects.length / 2)}</span>
                    </div>
                </div>
            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Projects