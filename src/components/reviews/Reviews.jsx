import { getFilmReviewsById } from 'API/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  ReviewsHeader,
  ReviewsSection,
  TitleReviews,
  List,
  Item,
  NotFoundReviews,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const { results } = reviews;

  useEffect(() => {
    async function getReviews() {
      try {
        setReviews({});
        const searchReviews = await getFilmReviewsById(movieId);
        console.log(searchReviews);
        setReviews(searchReviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <ReviewsSection>
      {console.log('tyt')}
      <ReviewsHeader>Reviews</ReviewsHeader>
      {reviews.results && reviews.results.length ? (
        <List>
          {results.map(item => (
            <Item key={item.id}>
              <TitleReviews>Author: {item.author}</TitleReviews>
              <p>{item.content}</p>
            </Item>
          ))}
        </List>
      ) : (
        <NotFoundReviews>
          Вибачайте, наразі відгуки недоступні для цього фільму.
        </NotFoundReviews>
      )}
    </ReviewsSection>
  );
};
export default Reviews;
