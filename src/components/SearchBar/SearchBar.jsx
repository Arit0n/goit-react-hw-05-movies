import { getSearch } from 'API/api';
import { Formik, Form } from 'formik';
import { useState } from 'react';
import { SearchList } from '../SerchList/SearchList';

import { StyledField, Button, StyledForm } from './SearchBar.styled';

export const SearchBar = () => {
  const [searchFilm, setSearchFilm] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchFilm = search => {
    setSearchFilm([]);
    async function getSearchFilm() {
      try {
        setLoading(true);
        const searchList = await getSearch(search);
        setSearchFilm(searchList.results);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
    getSearchFilm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(values, actions) => {
          if (!values.search) {
            //   return notify;
          } else {
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
      {<SearchList film={searchFilm} />}
    </div>
  );
};
