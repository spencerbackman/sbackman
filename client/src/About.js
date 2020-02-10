import React from 'react';
import chef from './images/chef-hat.svg';
import './scss/about.css';

export default function About() {
        return (
            <div className="about-page">
                <h2 className="about-header"> 
                    About Me
                </h2>
                <p className="skill-par"> 
                    I'm a Full-Stack Developer for a Web Design & Marketing Agency in Grenada, Ms. 
                    I build, design, maintain, and optimize websites for clients.  
                    The frameworks and tools I use include React, Node, Sass, Express, MongoDB, Adobe (Illustrator, Photoshop, & XD), and Google (Analytics, Adwords & Webmaster Tools).  
                    <br/> <br/>
                    I follow best practices in web design to keep the interface simple, user-intuitive, and responsive.  I value learning and I challenge myself to learn more every day.  I make intelligent decisions to keep my work organized, maintainable and fast. 
                </p>
                <div className="about-container">
                    <h2 className="about-header2">
                        What I Do
                    </h2>
                    <ul className="about-list-container">
                        <li className="about-list">
                            <i className="material-icons about-list-icon" id="web_design">devices</i>
                            Web Design
                        </li>
                        <li className="about-list">
                            <i className="fab fa-html5 about-list-icon" id="html"></i>
                            HTML
                        </li>
                        <li className="about-list">
                            <i className="fab fa-react about-list-icon" id="react"></i>
                            React.js
                        </li>
                        <li className="about-list">
                            <i className="fab fa-js-square about-list-icon" id="javascript"></i>
                            Javascript
                        </li>
                        <li className="about-list">
                            <i className="fab fa-node-js about-list-icon" id="node"></i>
                            Node
                        </li>
                        <li className="about-list">
                            <i className="fab fa-sass about-list-icon" id="sass"></i>
                            CSS/SASS
                        </li>
                        <li className="about-list">
                            <i className="fab fa-searchengin about-list-icon" id="seo"></i>
                            SEO
                        </li>
                        <li className="about-list">
                            <i className="fas fa-cart-arrow-down about-list-icon" id="ecommerce"></i>
                            E-Commerce
                        </li>
                        <li className="about-list">
                            <i className="fab fa-wordpress about-list-icon" id="wordpress"></i>
                            Wordpress
                        </li>
                        <li className="about-list">
                            <i className="fab fa-adobe about-list-icon" id="adobe"></i>
                            Adobe
                        </li>
                    </ul>
                    <h2 className="about-header2">
                        Life outside work
                    </h2>
                    <ul className="about-me-wrapper" >
                        <li className="about-me" id="coffee"> <i className="fas fa-coffee"></i> Coffee & Tea </li>
                        <li className="about-me"><i className="fas fa-futbol"></i> Soccer </li>
                        <li className="about-me"><i className="fas fa-puzzle-piece"></i> Puzzles </li>
                        <li className="about-me"><i className="fas fa-gamepad"></i> Video Games </li>
                        <li className="about-me"> <img src={chef} className="icon" alt="Chef Hat"/> Cooking  </li>
                        <li className="about-me"><i className="fas fa-seedling"></i> Plants </li>
                        <li className="about-me"><i className="fas fa-hiking"></i> Hiking </li> 
                        <li className="about-me"><i className="fas fa-bicycle"></i> Biking </li>  
                        <li className="about-me"><i className="fas fa-skiing"></i> Skiing </li>
                        <li className="about-me"><i className="fas fa-bookmark"></i> Reading </li>
                    </ul>  
                </div> 
            </div>
        )
}