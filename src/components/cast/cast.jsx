import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmCastById } from 'API/api';
import { List, Item, Text } from './cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castObject, setCastObject] = useState({});
  const { cast } = castObject;

  useEffect(() => {
    async function getCast() {
      try {
        setCastObject({});
        const searchCast = await getFilmCastById(movieId);
        console.log(searchCast);
        setCastObject(searchCast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    }
    getCast();
  }, [movieId]);

  return (
    <section>
      <List>
        {cast &&
          cast.map(item => (
            <Item key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : 'https://via.placeholder.com/200x300.png?text=Foto+Not+Available'
                }
                alt={item.original_name}
              />
              <Text>{item.original_name}</Text>
              <Text>{item.character}</Text>
            </Item>
          ))}
      </List>
    </section>
  );
};

export default Cast;
