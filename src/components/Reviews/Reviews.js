import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';
import ReviewsList from './ReviewsList.jsx';

const Reviews = () => {
  const [movieReview, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReview = () => {
      getMovieReviews(movieId)
        .then(({ results }) => {
          setMovieReview(results);
        })
        .catch(error => showError(error.message));
    };
    fetchMovieReview();
  }, [movieId]);

  return (
    <div>
      <>
        {movieReview && movieReview.length > 0 ? (
          <ReviewsList movieReview={movieReview} />
        ) : (
          <p> We don`t have any reviews for this movie</p>
        )}
      </>
    </div>
  );
};

export default Reviews;
