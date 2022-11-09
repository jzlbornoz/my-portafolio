import React from 'react';
import '../styles/containers/About.css';

const About = () => {
    return (
        <section className='About'>
            <h2>About</h2>
            <section className='About-container'>
                <div>
                    <h3>Who am I?</h3>
                    <p>
                        I am Javier Albornoz, Web Developer and software engineering student with experience in the web development.
                    </p>
                </div>
                <div className='About-skils'>
                    <h3>Skils</h3>
                    <ul>
                        <li className='About-html'>
                            <i className="fa-brands fa-html5 fa-2xl" />
                        </li>
                        <li className='About-css'>
                            <i className="fa-brands fa-css3-alt fa-2xl" />
                        </li>
                        <li className='About-js'>
                            <i className="fa-brands fa-js fa-2xl" />
                        </li>
                        <li className='About-react'>
                            <i className="fa-brands fa-react fa-2xl" />
                        </li>
                        <li className='About-next'>
                            <img  
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png' 
                            alt='next'
                            width={70}
                            heigth={70}
                            />
                        </li>
                        <li className='About-node'>
                            <i className="fa-brands fa-node fa-2xl" />
                        </li>
                        <li className='About-git'>
                            <i className="fa-brands fa-git-alt fa-2xl" />
                        </li>
                        <li className='About-linux'>
                            <i className="fa-brands fa-linux fa-2xl" />
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export { About };