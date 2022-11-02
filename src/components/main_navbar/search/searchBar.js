function SearchBar() {
  return (
    <div className="flex border-2 mx-4 h-14 items-center px-4 rounded-full shadow-lg justify-between md:w-96 w-full">
      <div className="md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="ml-3 md:hidden">
        <p className="text-sm font-semibold">Where to?</p>
        <ul className="flex font-extralight text-sm gap-1">
          <li>Anywhere</li>
          <li>&#183;</li>
          <li>Any week</li>
          <li>&#183;</li>
          <li>Add guest</li>
        </ul>
      </div>
      <div className="mr-8 hidden md:flex">
        <ul className="flex font-normal text-base gap-3">
          <li>Anywhere</li>
          <li className="bg-gray-200 w-0.5" />
          <li>Any week</li>
          <li className="bg-gray-200 w-0.5" />
          <li className=" text-gray-400">Add guest</li>
        </ul>
      </div>
      <div className="md:block hidden p-2 bg-red-500 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="border-2 p-2 rounded-full md:hidden block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
