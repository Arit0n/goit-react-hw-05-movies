import { toast } from 'react-hot-toast';
import { StyledInput, Button, StyledForm } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value;

    if (!query) {
      toast.error('Please enter something');
      return;
    }

    onSubmit(query);
    e.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput name="query" type="text" placeholder="Search movies" />
      <Button type="submit">Search</Button>
    </StyledForm>
  );
};
