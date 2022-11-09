import React from 'react';
import "../styles/containers/Projects.css";

const Projects = () => {
    return (
        <section className='Projects'>

            <div className='Projects-container'>
                <h2>Projects</h2>
                <ul>
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src='https://dvyvvujm9h0uq.cloudfront.net/com/articles/1649236630-143717-matthewjpg.png'
                                    alt='fuve'
                                />
                            </div>
                            <div className='Project-info'>
                                <p>Data structures</p>
                                <p>Project about data structures with JavaScript</p>
                                <button>View repositorie</button>
                            </div>
                        </section>

                    </li>
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src='https://cdn-proxy.slickplan.com/wp-content/uploads/2022/06/ux-portfolio-example-1.jpg'
                                    alt='cinxe' />
                            </div>
                            <div className='Project-info'>
                                <p>Cinex App</p>
                                <p>Entertainment Progressive Web App with a modern UI,
                                    powered by react | You can look and search a lot of movies, series and documents,
                                    calling data from MovieDB(API).</p>
                                <button>View repositorie</button>
                            </div>
                        </section>
                    </li>
                    <li>
                        <section className='Projects-card'>
                            <div>
                                <img
                                    src='https://media.slidesgo.com/storage/10521395/conversions/18-uiux-designer-portfolio-thumb.jpg'
                                    alt='store'
                                />
                            </div>
                            <div className='Project-info'>
                                <p>Store Next App</p>
                                <p>E-commerce Next App, bootstrapped by react
                                    | You can look and manage the products with a dashboard, calling data from the API.</p>
                                <button>View repositorie</button>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export { Projects };