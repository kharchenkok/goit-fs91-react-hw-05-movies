import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../../services/fetchMovies';
import { showError } from '../../utils/ToastNotification';

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

  const formatDateString = dateString => {
    const dateObject = new Date(dateString);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      // second: 'numeric',
      // timeZoneName: 'short',
    };

    return new Intl.DateTimeFormat('en-US', options).format(dateObject);
  };

  const renderContent = content => {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  };
  return (
    <div>
      <ul>
        {movieReview.map(({ id, author, content, created_at }) => (
          <li key={id}>
            <div>
              <h2>
                {author} : {formatDateString(created_at)}
              </h2>
              {renderContent(content)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
