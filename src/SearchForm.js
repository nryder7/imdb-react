import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { search, setSearch } = useGlobalContext();
  return (
    <section className='search-form'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className='form-input'
          type='text'
          value={search}
          placeholder='enter movie name'
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchForm;
