import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/sanjay.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser, faBriefcase, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to='/'>
            <img src = {LogoS} alt="logo"/>
            <img className = "sub-logo" src = {LogoSubtitle} alt="Sanjay"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassName="active" to="/">
                  <FontAwesomeIcon icon = {faHome} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className = "about-link" to="/about">
                  <FontAwesomeIcon icon = {faUser} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className = "work-link" to="/work">
                  <FontAwesomeIcon icon = {faBriefcase} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className = "projects-link" to="/projects">
                  <FontAwesomeIcon icon = {faFolderOpen} color="#4d4d4e"/>
            </NavLink>

            <NavLink exact="true" activeclassName="active" className="contact-link" to="/contact">
                  <FontAwesomeIcon icon = {faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>

        <ul>
    <li>
        <a 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sanjay-a-r-74b827214/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
    </li>

    <li>
        <a 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/sanj4git">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
    </li>

    <li>
        <a 
            target="_blank"
            rel="noreferrer"
            href="https://leetcode.com/u/arsanjay0906/">
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </a>
    </li>
</ul>
    </div>
);

export default Sidebar;