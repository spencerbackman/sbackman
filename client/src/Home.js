import React from 'react';
import portrait from './images/portrait.jpg';
import portraitW from './images/webp/portrait.webp';
import { Link } from 'react-router-dom';
import resume from "./images/Spencer_Backman's_Resume.pdf"
import './scss/home.css';

function Home() {
    return (
        <div className="container">
            <section className="header-section">
                <picture>
                    <source srcSet={portraitW} type="img/webp"/>
                    <img src={portrait} 
                        className="portrait" 
                        alt="Portrait of me"/>
                </picture>
                <h1 className="header"> 
                    <span>S</span>
                    <span>p</span>
                    <span>e</span>
                    <span>n</span>
                    <span>c</span>
                    <span>e</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>B</span>
                    <span>a</span>
                    <span>c</span>
                    <span>k</span>
                    <span>m</span>
                    <span>a</span>
                    <span>n</span>
                </h1>
                <h2 className="header2">
                    <span> F </span>
                    <span> u </span>
                    <span> l </span>
                    <span> l </span>
                    <span> s </span>
                    <span> t </span>
                    <span> a </span>
                    <span> c </span>
                    <span> k </span>
                    <span> &nbsp; </span>
                    <span> d </span>
                    <span> e </span>
                    <span> v </span>
                    <span> e </span>
                    <span> l </span>
                    <span> o </span>
                    <span> p </span>
                    <span> e </span>
                    <span> r </span>
                    <span> &nbsp; </span>
                    <span> & </span>
                    <span> &nbsp; </span>
                    <span> d </span>
                    <span> e </span>
                    <span> s </span>
                    <span> i </span>
                    <span> g </span>
                    <span> n </span>
                    <span> e </span>
                    <span> r </span>
                </h2>
                <div className="home-logo-holder">
                    <a className="home-logo-link"
                        href="https://github.com/spencerbackman" 
                        aria-label="Check out my Github Profile"
                        target="_blank" 
                        rel="noreferrer noopener">
                        <i className="fab fa-github-square home-logo"
                            id="github-home">
                        </i>
                    </a>
                    <a className="home-logo-link" 
                        href="https://www.linkedin.com/in/spencer-backman-b89826157/" 
                        aria-label="Check out my Linkedin Profile"
                        target="_blank" 
                        rel="noreferrer noopener">
                        <i className="fab fa-linkedin home-logo" 
                            id="linkedin-home">
                        </i>
                    </a>
                    <a href={resume} className="home-resume-link">
                        Resume
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Home;