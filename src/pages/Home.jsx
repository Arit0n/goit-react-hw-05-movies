import { useState, useEffect } from 'react';
import { getTopFilm } from 'API/api';
import { Loader } from 'components/Loader/Loader';

import { TrandingList } from 'components/TrandingList/TrandingList';

const HomePage = () => {
  const [listMovies, setListMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getValues() {
      try {
        setLoading(true);
        const { results } = await getTopFilm();
        setListMovies(results);
      } catch (error) {
        console.error('Error search top films:', error);
      } finally {
        setLoading(false);
      }
    }
    getValues();
  }, []);

  return <>{loading ? <Loader /> : <TrandingList films={listMovies} />}</>;
};

export default HomePage;
