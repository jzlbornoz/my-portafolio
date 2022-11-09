import React from 'react';
import '../styles/containers/Experience.css';

const Experience = () => {
    return (
        <section className='Experience'>
            <h2>About</h2>
            <section className='Experience-container'>
            <div>
            <h3>Who am I?</h3>
            <p>
                I am Javier Albornoz, Web Developer and software engineering student.
            </p>
            </div>
            <div>
                <h3>Skils</h3>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Js</li>
                    <li>React</li>
                    <li>NodeJs</li>
                    <li>Git</li>
                    <li>Linux</li>
                </ul>
            </div>
            </section>
        </section>
    )
}

export { Experience };