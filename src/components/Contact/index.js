import Loader from 'react-loaders';
import './index.scss';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AnimatedLetter from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { useState, useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6feog9o',
            'template_w9mmvnd',
            refForm.current,
            'TdoCiC2ccyeNzwkEI',

        )
        .then(
            () =>{
                alert("Message sent succcessfully");
                window.location.reload(false);
            },
            () => {
                alert('Failed to send message, please try again')
            }
        )

    }

    return (
        <>

            <div className = 'container contact-page'>
                <div className = "text-zone">

                    <h1>
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />

                    </h1>

                    <p>
                    I am interested in freelance opportunities – especially ambitious or large projects. 
                    However, if you have other request or question, don't hesitate to contact me using below form either.
                    </p>

                    <div className = 'contact-form'>

                        <form ref = {refForm} onSubmit={sendEmail}>
                            <ul>

                                <li className = 'half'>
                                    <input type = 'text' name = "name" placeholder="Name" required/>
                                </li>

                                <li className = 'half'>
                                    <input type = 'email' name = "email" placeholder="Email" required/>
                                </li>

                                <li>
                                    <input type = 'text' name = "subject" placeholder="Subject" required/>
                                </li>

                                <li>
                                    <textarea placeholder = "Message" name = "message" required></textarea>
                                </li>

                                <li>
                                    <input type = 'submit' className='flat-button' value = "SEND"/>
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>
                <div className = 'info-map'>
                    Sanjay AR,
                    <br />
                    India,
                    <br />
                    Coimbatore, Tamilnadu <br />
                    <span>arsanjay0906@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[11.0168, 76.9558]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[11.0168, 76.9558]}>
                            <Popup>
                                🌟 Based in Coimbatore<br/>
                                Where the weather is pleasant and the work ethic is strong 💪<br/>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <Loader type="pacman"/>
            </div>

        </>
    )

};

export default Contact;