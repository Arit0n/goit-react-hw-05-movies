import { getFilmReviewsById } from 'API/api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeaderReviews, Item } from './Reviews.styled';

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
    <section>
      <ul>
        {results && results.length > 0 ? (
          results.map(item => (
            <Item key={item.id}>
              <HeaderReviews>Author: {item.author}</HeaderReviews>
              <p>{item.content}</p>
            </Item>
          ))
        ) : (
          <p>Вибачайте, наразі відгуки недоступні для цього фільму.</p>
        )}
      </ul>
    </section>
  );
};
export default Reviews;
