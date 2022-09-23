import React from 'react';
import SingleIcon from '../icons/SingleIcon';
import TopRight from './topright/topright';
import SearchBar from './search/searchBar';

function MainNavBar() {
  return (
    <>
      <div className="flex items-center justify-between px-5  mt-4 md:border-b border-b-0 pb-4">
        <SingleIcon />
        <SearchBar />
        <TopRight />
      </div>
    </>
  );
}

export default MainNavBar;
