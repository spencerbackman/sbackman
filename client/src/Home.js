import React from 'react';
import portrait from './images/portrait.jpg';
import { Link } from 'react-router-dom';
import './scss/home.css';

function Home() {
    return (
        <div className="container">
            <section className="header-section">
                <img src={portrait} 
                    className="portrait" 
                    alt="Portrait of me"/>
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
                        target="_blank" 
                        rel="noreferrer noopener">
                        <i className="fab fa-github-square home-logo"
                            id="github-home">
                        </i>
                    </a>
                    <a className="home-logo-link" 
                        href="https://www.linkedin.com/in/spencer-backman-b89826157/" 
                        target="_blank" 
                        rel="noreferrer noopener">
                        <i className="fab fa-linkedin home-logo" 
                            id="linkedin-home">
                        </i>
                    </a>
                    <Link className="home-resume-link" to="/resume">
                        Resume
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home;