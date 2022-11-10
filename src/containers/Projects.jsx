import React from 'react';
import "../styles/containers/Projects.css";
import image2 from '../assets/storeApp.jpg';
import image1 from '../assets/cinex.jpg';
import image0 from '../assets/data.jpg';

const Projects = () => {
    return (
        <section className='Projects'>

            <div className='Projects-container'>
                <h2 data-aos="fade-up" >Projects</h2>
                <ul data-aos="fade-up">
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src={image0}
                                    alt='fuve'
                                />
                            </div>
                            <div className='Project-info'>
                                <p>Data structures</p>
                                <p>Project about data structures with JavaScript</p>
                                <button>
                                <a href='https://github.com/jzlbornoz/Estructura-de-Datos-js'>View repositorie</a>
                                </button>
                            </div>
                        </section>

                    </li>
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src={image1}
                                    alt='cinxe' />
                            </div>
                            <div className='Project-info'>
                                <a href='https://cinex0.web.app/'>
                                    <p>Cinex App</p>
                                    <p>Entertainment Progressive Web App with a modern UI,
                                        powered by react | You can look and search a lot of movies, series and documents,
                                        calling data from MovieDB(API).</p>
                                </a>
                                <button type='button'>
                                    <a href='https://github.com/jzlbornoz/cinex-app'>View repositorie</a>
                                </button>
                            </div>
                        </section>
                    </li>
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src={image2}
                                    alt='store'
                                />
                            </div>
                            <div className='Project-info'>
                                <a href='https://store-next-app.vercel.app/'>
                                    <p>Store Next App</p>
                                    <p>
                                        E-commerce Next App, bootstrapped by react
                                        | You can look and manage the products with a dashboard,
                                        calling data from the API.
                                    </p>
                                </a>
                                <button type='button'>
                                    <a href='https://github.com/jzlbornoz/store-nextApp'>View repositorie</a>
                                </button>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export { Projects };