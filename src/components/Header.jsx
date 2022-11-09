import React from 'react';
import "../styles/components/Header.css";

const Header = () => {
    return (
        <section className='Header'>
            <div className='Header-title'>Javier Albornoz</div>
            <ul>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </section>
    )
}

export { Header };