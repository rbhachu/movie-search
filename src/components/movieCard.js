import { useState } from 'react';
import PlaceHolder from '../images/image-placeholder.png'; // import image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function MovieCard({ movie }) { // import movie props

    // temp hack to ensure cards show full width if no movie description
    const filler = `\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0\u00A0 \u00A0`;

    // movie title short char limit 26
    const movieTitle = movie.title ? movie.title : 'Title not found'; // check if empty
    const movieTitleShort = movieTitle.length > 26 ? `${movieTitle.substring(0, 26)}...` : movieTitle; // trim length if exceeds max allowed val + add '...' to end
  
    // movie release date
    const movieDate = movie.release_date ? `(${movie.release_date.substring(0, 4)})` : '-'; // check if empty + show year only

    // movie rating
    const movieRating = movie.vote_average ? movie.vote_average : '-'; // check if empty

    // movie description short char limit 106
    const movieDescription = movie.overview ? movie.overview  : `Description not found` ; // check if empty
    const movieDescriptionCheck = movieDescription.length < 80 ? `${movieDescription} ${filler}` : movieDescription; // add filler text if description too short

    const movieDescriptionShort = movieDescription.length > 106 ? `${movieDescription.substring(0, 106)}...` : movieDescriptionCheck; // trim length if exceeds max allowed val + add '...' to end

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

                (<div className="card-front">
                    <div className="card-front-wrapper">
                        <div className="card-image">
                            <img
                                // src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${moviePoster}`} // old static image path
                                src={moviePoster}
                                alt={movieTitle + ' poster image'}
                                title={movieTitle + ' poster image'}
                                width="185"
                                height="278"
                            />
                        </div>
                        <div className="card-content-front">
                            <h3 className="card-title">{movieTitleShort}</h3>
                            <div className="card-info">
                                <span className="card-date">
                                    {movieDate}
                                </span>
                                <span className="card-rating" alt="Star Rating" title="Star Rating"><FontAwesomeIcon icon={faStar} className="icon-star" />
                                    {movieRating}/10
                                </span>
                            </div>
                            <p className="card-desc">
                                {movieDescriptionShort}
                            </p>
                        </div>
                    </div>
                </div>)

            :
                (<div className="card-back">
                    <div className="card-content-back">
                        <h3 className="card-title">{movieTitle}</h3>
                        <div className="card-info">
                            <span className="card-date">
                                {movieDate}
                            </span>
                            <span className="card-rating" alt="Star Rating" title="Star Rating"><FontAwesomeIcon icon={faStar} className="icon-star" />
                                {movieRating}/10
                            </span>
                        </div>
                        <p className="card-desc">
                            {movieDescriptionCheck}
                        </p>
                    </div>
                </div>)

            }

        </div>

    );
    
}