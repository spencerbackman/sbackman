import React, { useReducer } from 'react';
import './scss/styles.scss';
import Projects from './Projects';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import ScrollTo from 'react-scroll-into-view';
import './scss/nav.css';

const initialState = { isToggled: false }

function reducer(state, action) {

    switch(action.type) {
        case 'toggle':
            return { isToggled: !state.isToggled };
        case 'close':
            return { isToggled: false }
        default: 
            throw new Error();
    }
}
     
export default function App() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div id="app-container">
            <div className="navbar">
                <div onClick={() => dispatch({ type: 'toggle' })} 
                    className={state.isToggled ? "toggle-button checked" : "toggle-button"}>
                    <span className="bar" id="bar1"/>
                    <div className="bar" id="bar2"/>
                    <div className="bar" id="bar3"/>
                </div>
                <ScrollTo selector="#homeComponent">
                    <h2 onClick={() => dispatch({ type: 'close' })} className="nav-header">
                        Spencer Backman
                    </h2>
                </ScrollTo>
                <div className={state.isToggled ? "nav-link-container nav-toggled" : "nav-link-container nav-closed"}>
                    <ScrollTo alignToTop={true} selector="#aboutComponent"> 
                        <button onClick={() => dispatch({ type: 'close' })} className="nav-link">
                            About 
                        </button>
                    </ScrollTo> 
                    <ScrollTo alignToTop={true} selector="#projectComponent">
                        <button onClick={() => dispatch({ type: 'close' })} className="nav-link">
                            Projects
                        </button>
                    </ScrollTo>
                    <ScrollTo alignToTop={true} selector="#contactComponent">
                        <button onClick={() => dispatch({ type: 'close' })} className="nav-link">
                            Contact
                        </button>
                    </ScrollTo>
                    <a onClick={() => dispatch({ type: 'close' })}
                        className="nav-link" 
                        href="https://www.linkedin.com/in/spencer-backman-b89826157/" 
                        target="_blank" 
                        rel="noreferrer noopener"> 
                        <i className="fab fa-linkedin-in"></i> 
                    </a>
                    <a onClick={() => dispatch({ type: 'close' })}
                        className="nav-link" 
                        href="https://github.com/spencerbackman" 
                        target="_blank" 
                        rel="noreferrer noopener"> 
                        <i className="fab fa-github"></i> 
                    </a>
                </div>
            </div>
            <ul className="app-router">
                <li id="homeComponent">
                    <Home />
                </li>
                <li id="aboutComponent">
                    <About />
                </li>
                <li id="projectComponent">
                    <Projects />
                </li>
                <li id="contactComponent">
                    <Contact />
                </li>
            </ul>
        </div>
    )
}