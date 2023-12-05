import { getSearch } from 'API/api';
import { useEffect, useState } from 'react';
import { SearchList } from 'components/SerchList/SearchList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Movies = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') || '';
    if (!query) {
      setSearchFilm([]);
      return;
    }
    const getMovies = async () => {
      try {
        const { results } = await getSearch(query);

        if (results.length === 0) {
          toast.dismiss();
          toast.error('No movies found');
          setSearchFilm([]);
        } else {
          setSearchFilm(results);
        }
      } catch (error) {
        toast.error(error.message);
        setSearchFilm([]);
      }
    };

    getMovies();
  }, [searchParams]);

  const handleSubmit = query => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <SearchList film={searchFilm} />
    </div>
  );
};

export default Movies;
