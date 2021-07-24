import { useState } from 'react';
//import IconStar from '../images/star-solid-y.png'; // import image
import PlaceHolder from '../images/image-placeholder.png'; // import image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faHandPointRight } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie }) { // import movie props

    // movie title short char limit 26
    const movieTitle = movie.title ? movie.title : 'Title not found'; // check if empty
    const movieTitleShort = movieTitle.length > 26 ? `${movieTitle.substring(0, 26)}...` : movieTitle; // trim length if exceeds max allowed val + add '...' to end
  
    // movie release date
    const movieDate = movie.release_date ? `(${movie.release_date.substring(0, 4)})` : '-'; // check if empty + show year only

    // movie rating
    const movieRating = movie.vote_average ? movie.vote_average : '-'; // check if empty

    // movie description short char limit 106
    const movieDescription = movie.overview ? movie.overview : 'Description not found'; // check if empty
    const movieDescriptionShort = movieDescription.length > 106 ? `${movieDescription.substring(0, 106)}...` : movieDescription; // trim length if exceeds max allowed val + add '...' to end

    // const moviePoster = ((movie.poster_path) ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}` : PlaceHolder) // v3
    const moviePoster = ((movie.poster_path) ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}` : PlaceHolder) // v4

    // flip classes
    const [cardClass, setCardClass] = useState(true) // default 'true' to ensure cards reset on load and face up
    const setToggler = () => { // on click event toggle classes
        setCardClass(!cardClass);
    //alert("test");
    };

    return (
        <div onClick={setToggler}>


            { cardClass ? 

                (<div>
                    <h1>card 1</h1>
                    <br />
                    <br />
                    <br />
                </div>)

            :

                (<div>
                    <h1>card 2</h1>
                    <br />
                    <br />
                    <br />
                </div>)

            }

        </div>

    );
    
}