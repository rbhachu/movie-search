import { useState } from 'react';
import IconLinked from '../images/linkedin-brands-y.png'; // import image
import IconBlogger from '../images/blogger-brands-y.png'; // import image
import IconGit from '../images/github-brands-y.png'; // import image
import IconStack from '../images/stack-overflow-brands-y.png'; // import image
import tmdbLogo from '../images/tmdb-logo.png'; // import image

export default function Footer () { // url coming from searchForm as props

    //toggleDiv hide/show footer details
    const [divClass, setDivClass] = useState(true) // default 'true' to ensure closed on page load
    const setDivToggle = () => { // on click event toggle classes
        setDivClass(!divClass);
    };

    return (
        <div className={divClass ? 'divClosed' : 'divOpen'}>

            <div className="row-top" onClick={setDivToggle}>
                <p>
                    <span className="p-title">Created by Rishi Singh Bhachu &copy; {new Date().getFullYear()}</span>
                    <span title="Open/Close" className={divClass ? 'icon-plus' : 'icon-minus'}></span>
                </p>
            </div>

            <div className="divWrapper">

                <div className="col1">
                    <p>
                        Website concept created using React.JS, HTML and CSS, with no additional NPM modules or Plugins.
                    </p>
                    <p>
                        For enquires, please contact me via LinkedIn, or check out my Blog, Github or Stack Overflow for further projects and contributions too.
                    </p>
                    <p>
                        API provided by:&nbsp;
                        <a href="https://www.themoviedb.org/documentation/api" title="The Movie DB" rel="noopener noreferrer" target="_blank">
                        <img src={tmdbLogo} width="109" height="9" alt="TMDB" />
                        </a>
                    </p>
                    <p>
                        Icons provided by:&nbsp; 
                        <a href="http://fontawesome.com" title="FontAwesome" rel="noopener noreferrer" target="_blank">
                        FontAwesome
                        </a>
                    </p>
                </div>

                <div className="col2">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/rishisinghbhachu/" className="icon" title="Linkedin" rel="noopener noreferrer" target="_blank"><img src={IconLinked} alt="Linkedin" width="25" height="25" />Linkedin</a></li>
                        <li><a href="https://bhachublog.com" className="icon" title="Blog" rel="noopener noreferrer" target="_blank"><img src={IconBlogger} alt="Blog" width="25" height="25" />Blog</a></li>
                        <li><a href="https://github.com/rbhachu" className="icon" title="Github" rel="noopener noreferrer" target="_blank"><img src={IconGit} alt="Github" width="25" height="25" />Github</a></li>
                        <li><a href="https://stackoverflow.com/users/5238978/rishi-singh" className="icon" title="Stack Overflow" rel="noopener noreferrer" target="_blank"><img src={IconStack} alt="Stack Overflow" width="25" height="25" />Stack<br/>Overflow</a></li>
                    </ul>
                </div>

            </div>

        </div>
    )

}