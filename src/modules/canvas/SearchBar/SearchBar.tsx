import { FC, useState } from 'react';
import { SearchBarProps } from '.';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar: FC<SearchBarProps> = props => {
  console.log(props);
  const [inputValue, setInputValue] = useState('');
  console.log('inputValue', inputValue);
  return (
    <div className="relative mt-2 flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        onChange={e => setInputValue(e.target.value)}
        className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
        <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </kbd>
      </div>
    </div>
  );
};

export default SearchBar;
