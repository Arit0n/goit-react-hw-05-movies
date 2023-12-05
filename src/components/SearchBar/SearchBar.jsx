import { getSearch } from 'API/api';
import { Formik } from 'formik';
import { useState } from 'react';
import { SearchList } from '../SerchList/SearchList';

import { StyledField, Button, StyledForm } from './SearchBar.styled';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';

  const onSearchFilm = searchFilm => {
    searchParams.set('search', '');
    setSearchParams(searchParams);
    setSearchFilm([]);
    async function getSearchFilm() {
      try {
        setLoading(true);
        const searchList = await getSearch(searchFilm);
        setSearchFilm(searchList.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    searchParams.set('search', searchFilm);
    setSearchParams(searchParams);
    getSearchFilm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          search: search,
        }}
        onSubmit={(values, actions) => {
          if (!values.search) {
            //   return notify;
          } else {
            console.log(values.search);
            onSearchFilm(values.search);
            actions.resetForm();
          }
        }}
      >
        <StyledForm>
          <StyledField
            name="search"
            id="search"
            type="text"
            autoСomplete="off"
            autofocus
            placeholder="Search films"
          />
          <Button type="submit" disabled={loading}>
            Search
          </Button>
        </StyledForm>
      </Formik>
      <SearchList film={searchFilm} />
    </div>
  );
};
