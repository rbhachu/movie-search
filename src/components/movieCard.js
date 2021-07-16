import { useState } from 'react';
import IconStar from '../images/star-solid-y.png'; // import image
import PlaceHolder from '../images/image-placeholder.png'; // import image

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
    const setToggle = () => { // on click event toggle classes
        setCardClass(!cardClass);
    };

    return (
        <div onClick={setToggle} className={cardClass ? 'not-flipped' : 'flipped'}>

            {/* FRONT CARD */}
            <div className={cardClass ? 'card-front' : 'card-back'} width="460" height="278">
                <img
                    className="card-image"
                    // src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${moviePoster}`} // old static image path
                    src={moviePoster}
                    alt={movieTitle + ' poster image'}
                    title={movieTitle + ' poster image'}
                    width="185"
                    height="278"
                />
                <div className="card-content-front">
                    <h3 className="card-title">{movieTitleShort}</h3>
                    <div className="card-info">
                        <span className="card-date">
                            {movieDate}
                        </span>
                        <span className="card-rating"><img src={IconStar} width="12" height="12" alt="Star Rating" title="Star Rating" />
                            {movieRating}/10
                        </span>
                    </div>
                    <p className="card-desc">
                        {movieDescriptionShort}
                        <br />{ movieDescriptionShort.length > 106 ? (<span title="More Details" className="more-info">More Details</span>) : '' }
                    </p>
                </div>
            </div>

            {/* BACK CARD */}
            <div className={cardClass ? 'card-back' : 'card-front'} width="460" height="278">
                <div className="card-content-back">
                    <h3 className="card-title">{movieTitle}</h3>
                    <div className="card-info">
                        <span className="card-date">
                            {movieDate}
                        </span>
                        <span className="card-rating"><img src={IconStar} width="12" height="12" alt="Star Rating" title="Star Rating" />
                            {movieRating}/10
                        </span>
                    </div>
                    <p className="card-desc">
                        {movieDescription}
                        {/*<br /><span title="Go Back" className="go-back">Go Back</span>*/}
                    </p>
                </div>

                

            </div>

        </div>

    );
    
}