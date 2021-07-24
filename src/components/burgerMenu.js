import { useState } from 'react';
import imageHeaderLogo from '../images/logo.png' // header logo
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faStackOverflow, faBlogger} from "@fortawesome/free-brands-svg-icons";
import { faHashtag, faWindowClose, faHome, faSearch, faStar  } from "@fortawesome/free-solid-svg-icons";

export default function BurgerMenu ({ topMovieLinks, setToggle, closeBurger }) { // url coming from searchForm as props

    return (
        <>
            <div className="burgermenu-wrapper">


                <div className="burgermenu">

                    <div>
                        <div className="wrap">
                            <img className="burger-logo" src={imageHeaderLogo} width="225" height="47" alt="Movie Search" title="Movie Search" />
                            <span aria-label="close menu" title="close menu" onClick={closeBurger} className="icon-close"><FontAwesomeIcon icon={faWindowClose} /></span>
                        </div>

                        <div>
                        <h3><a onClick={setToggle} href="/"><FontAwesomeIcon icon={faHome} className="icon-burger" />Home</a></h3>
                        <h3><FontAwesomeIcon icon={faStar} className="icon-burger" />Top Searches</h3>
                            <ul className="top-links">
                                {topMovieLinks}
                            </ul>
                        </div>
                    </div>


                    <div>
                        <div className="footer-text">
                                <ul>
                                    <li>
                                       <h3>&copy; {new Date().getFullYear()} Rishi Singh Bhachu</h3>
                                    </li>
                                    <li>
                                        <span className="disc-text">PWA enabled app, built with React, HTML, CSS, FontAwesome &amp; The Movie DB API</span>
                                    </li>
                                </ul>
                        </div>
                        <div className="footer-icons">
                            <ul>
                                <li>
                                    <a 
                                        href="https://bhachublog.com" 
                                        className="icon" 
                                        title="BhachuBlog" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faBlogger} />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/rbhachu" 
                                        className="icon" 
                                        title="Github" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://stackoverflow.com/users/5238978/rishi-singh" 
                                        className="icon" 
                                        title="StackOverflow" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faStackOverflow} />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://rbhachu.hashnode.dev" 
                                        className="icon" 
                                        title="Hashnode" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faHashtag} />
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.linkedin.com/in/rishisinghbhachu" 
                                        className="icon" 
                                        title="Linkedin" 
                                        rel="noopener noreferrer" 
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon icon={faLinkedin}  />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )

}