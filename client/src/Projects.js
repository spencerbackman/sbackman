import React from 'react';
import mlhsv from './images/mlhsv.png';
import mlhsvW from './images/webp/mlhsv.webp';
import localgrenada from './images/localgrenada2.png';
import localGrenadaW from './images/webp/localgrenada2.webp';
import deltaFowlers from './images/deltafowlers.png';
import deltaW from './images/webp/deltafowlers.webp';
import grenadaBadBoys from './images/grenadaBadBoys.png';
import gbbW from './images/webp/grenadaBadBoys.webp'
import ndori from './images/ndori.png';
import ndoriW from './images/webp/ndori.webp'
import wemakeads from './images/wemakeads.png';
import wemakeadsW from './images/webp/wemakeads.webp'
import sellittome from './images/sellittome.png';
import sellittomeW from './images/webp/sellittome.webp'
import woodsLogging from './images/woodsLogging.png';
import woodsLoggingW from './images/webp/woodsLogging.webp';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './scss/projects.css';

function Projects() {
    return (
        <div id="project-section">
            <h1 className="projects-header">
                My Work   
            </h1>
            <div className="project-container">
                <div className="project-holder">
                    <Zoom>
                        <a href="https://www.sellittome.com" target="_blank" rel="noopener noreferrer" className="site=image-holder">
                            <picture>
                                <source srcSet={sellittomeW} type="image/webp" />
                                <img src={sellittome} alt="Sell It To Me"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade left>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Sell It To Me </h3>
                            <p className="project-framework"> React, Sass, Node, Express, MongoDb, Redux </p>
                            <p className="project-description">
                                Sell It To Me is an online car buying company. 
                            </p>
                            <a href="https://www.sellittome.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button"> 
                                sellittome.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder" href="https://www.mylocalhuntsville.com" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source srcSet={mlhsvW} type="image/webp" />
                                <img src={mlhsv} alt="My Local Huntsville"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade right>
                        <div className="about-project-holder">
                            <h3 className="project-title"> My Local Huntsville </h3>
                            <p className="project-framework"> React, Sass </p>
                            <p className="project-description"> 
                                Extension of Whitfield Media. Built to promote businesses and be a local guide for people that live and visit Huntsville, Al.   
                            </p>
                            <a href="https://www.mylocalhuntsville.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button">
                                mylocalhuntsville.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a href="https://www.brentwoodsloggingequipmentsales.com" target="_blank" rel="noopener noreferrer" className="site-image-holder">
                            <picture>
                                <source srcSet={woodsLoggingW} type="image/webp" />
                                <img src={woodsLogging} alt="Brent Woods Logging Equipment Sales"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade left>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Brent Woods Logging Equipment Sales </h3>
                            <p className="project-framework"> React, Sass, Node, Express, MongoDb, Redux </p>
                            <p className="project-description">
                                Brent Woods Logging Equipment Sales is a showcase of logging equipment for sale.
                            </p>
                            <a href="https://www.brentwoodsloggingequipmentsales.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button"> 
                                woodsloggingsales.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder" href="https://www.wemakeads.com" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source srcSet={wemakeadsW} type="image/webp" />
                                <img src={wemakeads} alt="Whitfield Media"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade right>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Whitfield Media </h3>
                            <p className="project-framework"> React, Sass </p>
                            <p className="project-description"> 
                                Whitfield Media is an Digital Marketing & Web Design Company I currently work for. We offer Advertising, Marketing, Advertising, Graphic Designs, Billboards, and Website Solutions for businesses including Sayle Oil, Ndori, Cleveland State Bank, Kirk Auto Company, and North Sunflower Academy.
                            </p>
                            <a href="https://www.wemakeads.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button"> 
                                wemakeads.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder" href="https://www.localgrenada.com" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source srcSet={localGrenadaW} type="image/webp" />
                                <img src={localgrenada} alt="localgrenada.com"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade left>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Local Grenada </h3>
                            <p className="project-framework"> React, Sass </p>
                            <p className="project-description"> 
                                Local Grenada is a part of Whitfield Media, is a website about Grenada, Ms and to help promote it.
                            </p>
                            <a href="https://www.localgrenada.com" target="_blank" rel="noopener noreferrer" className="cta-button"> 
                                localgrenada.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder" href="https://deltafowlers.com" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source srcSet={deltaW} type="image/webp" />
                                <img src={deltaFowlers} alt="Delta Fowlers Apparel"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade right>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Delta Fowlers Apparel </h3>
                            <p className="project-framework"> Squarespace </p>
                            <p className="project-description"> 
                                Father and son E-Commerce website selling Delta Fowler duck hunting merchandise. 
                            </p>
                            <a href="https://deltafowlers.com" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button"> 
                                deltafowlers.com
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder"  href="https://www.grenadabadboys.net" target="_blank" rel="noopener noreferrer">
                            <picture>
                                <source srcSet={gbbW} type="image/webp" />
                                <img src={grenadaBadBoys} alt="Grenada Bad Boys"/>
                            </picture>
                        </a>
                    </Zoom>
                    <Fade left>
                        <div className="about-project-holder">
                            <h3 className="project-title"> 
                                Grenada Bad Boys 
                            </h3>
                            <p className="project-framework"> 
                                Squarespace 
                            </p>
                            <p className="project-description"> 
                                Powersport, Boat, and Exmark dealership website to showcase what they have for offer.
                            </p>
                            <a href="https://www.grenadabadboys.net" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cta-button"> 
                                grenadabadboys.net 
                            </a>
                        </div>
                    </Fade>
                </div>
                <div className="project-holder">
                    <Zoom>
                        <a className="site-image-holder" 
                            href="https://ndori.org" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <picture>
                                <source srcSet={ndoriW} type="image/webp" />
                                <img src={ndori} alt="The National Diabetes & Obesity Research Institute"/>    
                            </picture>
                        </a>
                    </Zoom>
                    <Fade right>
                        <div className="about-project-holder">
                            <h3 className="project-title"> Ndori </h3>
                            <p className="project-framework"> Wordpress </p>
                            <p className="project-description"> 
                                The National Diabetes & Obesity Research Institute is a Health Clinic specializing in Diabetes & Obesity located in Biloxi, Ms.
                            </p>
                            <a href="https://ndori.org" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="cta-button"> 
                                ndori.org
                            </a>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Projects