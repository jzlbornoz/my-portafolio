import React from 'react';
import '../styles/containers/Landing.css';

const Landing = () => {
    return (
        <section className='Landing'>
            <div className='Landing-container' data-aos="fade-right">
           <div className='Landing-bar'></div>
                <div>
                <h1> I am Javier Albornoz</h1>
                <h2>React Developer</h2>
                </div>
                
            </div>
        </section>
    )
}

export { Landing };