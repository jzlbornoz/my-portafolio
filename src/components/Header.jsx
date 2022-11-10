import React from 'react';
import "../styles/components/Header.css";

const Header = () => {
    const scrollToAbout = () => {
        window.scrollTo({
            top: 95 * window.innerHeight / 100, behavior: 'smooth'
        });
    };
    const scrollToProjects = () => { window.scrollTo({
        top: 205 * window.innerHeight / 100, behavior: 'smooth'
    }); };

    return (
        <section className='Header'>
            <div className='Header-title'>Javier Albornoz</div>
            <ul>
                <li onClick={() => scrollToAbout()}>About</li>
                <li onClick={() => scrollToProjects()}>Projects</li>
            </ul>
        </section>
    )
}

export { Header };