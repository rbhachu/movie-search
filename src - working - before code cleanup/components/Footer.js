//import { useState } from 'react';
//import IconLinked from '../images/linkedin-brands-y.png'; // import image
//import IconBlogger from '../images/blogger-brands-y.png'; // import image
//import IconGit from '../images/github-brands-y.png'; // import image
//import IconStack from '../images/stack-overflow-brands-y.png'; // import image
//import tmdbLogo from '../images/tmdb-logo.png'; // import image

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin, faStackOverflow, faBlogger} from "@fortawesome/free-brands-svg-icons";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

export default function Footer () { // url coming from searchForm as props

    return (
        <>

            <div className="footer-wrapper">
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

                <div className="footer-text">
                    <ul>
                        <li>
                            &copy; {new Date().getFullYear()} Rishi Singh Bhachu
                        </li>
                        <li>
                            <span className="disc-text">PWA enabled app, built with React, HTML, CSS, FontAwesome &amp; The Movie DB API</span>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )

}