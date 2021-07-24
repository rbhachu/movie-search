import { useState } from 'react';
import useFetch from './useFetch'; // import custom fetch hook from useFetch.js
import imageHeaderLogo from '../images/logo.png' // header logo
import LoadingAnimation from '../images/Preloader.svg'; // import image
import SearchMovies from './searchMovies'; // 
import ScrollToTop from './scrolltoTop'
import BurgerMenu from './burgerMenu'; // import burgermenu
import Footer from './Footer'; // import footer
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Home () { // url coming from searchForm as props

    // states
    const [query, setQuery] = useState(''); // search query value state
    const [url, setUrl] = useState(''); // url value state
    const [formerror, setFormError] = useState(null); // form error state
    const { fetchdata, fetchstatus, error, length } = useFetch(url, query); // get hook states from useFetch.js
    const [page] = useState(1); // page value state, default is page 1
    // page counter - to work on later for infinite scrolling
    // const { fetchdata, fetchdatapages, fetchdatatotal, fetchstatus, error, length } = useFetch(url, query); // get hook states from useFetch.js
    // console.log(`Current Page: ${page}`) // current page
    // console.log(`Total Pages: ${fetchdatapages}`) // total pages
    // console.log(`Total Results: ${fetchdatatotal}`) // total results



    // function handleSubmit(e) {    
    function handleSubmit(e) {
        e.preventDefault(); // stop page refresh on submit  
        window.scrollTo({ // scroll back to top of page on each search request
            top: 0,
            behavior: "smooth"
        });

        setFormError(null); // reset form error message

        // FOR TESTING ONLY
        // console.log(`e: ${e.target.textContent}`) // gets inner html value <element>innertext</element>
        // console.log(`e: ${e.target.className}`) // gets class value ie className="thisclass"
        // console.log(`e: ${e.target.tagName}`) // gets element type ie p, li, span etc
        // console.log(`e: ${e.target.value.length}`) // gets element type ie p, li, span etc
        // console.log(`e-click: ${e} + setQuery: ${setQuery} + query: ${query}`);    
        // console.log(`e-form: ${e} + setQuery: ${setQuery} + query: ${query}`);   

        // if search from direct from toplinks
        if(e.target.className === 'nomatch') {
            //setContainerClass(true); // show container
            document.body.style.overflow = 'visible';
            setDivClass(true);
            setFormError(null);
            const query = e.target.textContent;
            setQuery(e.target.textContent);
            setUrl(`https://api.themoviedb.org/4/search/movie?api_key=${process.env.REACT_APP_API_PATH}&language=en-US&page=${page}&include_adult=false&sort_by=release_date.desc&query=${query.replace(/\s/g, '+')}`)   
        /*
        // if search empty
        } else if ( (!query && !query.length > 0) ) {
        ///setUrl('adads');
        //setUrl(`https://api.themoviedb.org/4/search/movie?api_key=${process.env.REACT_APP_API_PATH}&language=en-US&page=${page}&include_adult=false&sort_by=release_date.desc&query=`)
        setContainerClass(false); // hide container
        setFormError('Please enter a Movie to Search.'); // alert if form empty
        */
        // if search from form input
        } else { 
            //setContainerClass(true); // show container
            setFormError(null);
            setUrl(`https://api.themoviedb.org/4/search/movie?api_key=${process.env.REACT_APP_API_PATH}&language=en-US&page=${page}&include_adult=false&sort_by=release_date.desc&query=${query.replace(/\s/g, '+')}`)   
        };

    };

    // Top Movie Links
    const topMovies = ['Transformers', 'Batman', 'Spider Man', 'Tron Legacy', 'Kill Bill', 'Star Wars'];
    let keyval = 1;
    const topMovieLinks = topMovies.map((movielink) =>
        <li key={keyval++} onClick={handleSubmit} className={query.toLowerCase() === movielink.toLowerCase() ? 'match' : 'nomatch'}>{movielink}</li>
    );


    // toggle burger menu
    const [divClass, setDivClass] = useState(true) // default 'true' to ensure cards reset on load and face up
    const setToggle = () => { // on click event toggle classes
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setDivClass(!divClass); // flips between true/false onclick
        document.body.style.overflow = 'hidden'; // temp disable scroll when burger menu shows
    };

    // close burger menu
    function closeBurger () {
        //create function for close
        //alert("test");
        //const scrollToTop = () => {
            //window.scrollTo({
            //  top: 0,
            //  behavior: "smooth"
        // });
            //window.scrollTo(0);
        //  };
        setDivClass(true);
        document.body.style.overflow = 'visible';
    }



    return (

        <div class="wrapper">

            <header className={ !url ? 'home' : 'search' }>

                <div>
                    <h1>
                        <span className="hide-text">Movie Search</span>
                        <img src={imageHeaderLogo} width="450" height="94" alt="Movie Search" title="Movie Search" />
                    </h1>             
                </div>


                <div className="input-wrapper">

                    <span aria-label="Menu" title="Menu" className="icon-burger-form" onClick={setToggle}><FontAwesomeIcon icon={faBars} /></span>

                    <form name="search" onSubmit={handleSubmit}>
                    
                        <label title="Home" htmlFor="query">
                            <h2><a href="/"><span className="hide-text">Home</span></a></h2>
                        </label>
                        <input
                            type="search"
                            name="query"
                            value={query}
                            className="input"
                            onChange={(e) => setQuery(e.target.value)}
                            onClick={(e) => setQuery('')} // clear form on click
                            placeholder="enter movie name"
                            title="enter movie name"
                            //required
                        />
                        <button className="button" type="submit" title="Search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>

            </header>


            <section className={ !url ? 'section page-main' : 'section search page-main' }>
                { error && <div className="error"><span>{ error }</span></div> }
                { formerror && <div className="error"><span>{ formerror }</span></div> }
                { fetchstatus && <div className="loading"><img src={ LoadingAnimation } alt="Searching" title="Searching" /></div> }

                <div className={ ( length > 0 ) ? 'container' : 'container update' }>
                    { fetchdata && <SearchMovies fetchdata={fetchdata} /> }
                </div>
            </section>

            <div className={divClass ? 'toggle-hide' : 'toggle-show'}>
                <BurgerMenu topMovieLinks={topMovieLinks} setToggle={setToggle} closeBurger={closeBurger} />
            </div>

            {/*<footer className={ !url ? 'hide' : 'show' }>
                <Footer />
            </footer>*/}

            <ScrollToTop /> 

        </div>

    );
    
}