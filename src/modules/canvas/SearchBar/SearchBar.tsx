import { FC, Fragment, useState } from 'react';
import { SearchBarProps } from '.';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';

const SearchBar: FC<SearchBarProps> = ({ searchItems }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredItems, setFilteredItems] = useState(searchItems);

  const filterData = (value: string) => {
    setInputValue(value);
    const searchKeys: string[] = ['name', 'product'];
    const filtered: Types.SearchItem[] = searchItems.filter((item: Types.SearchItem) =>
      searchKeys.some((key: string): boolean => item[key].toString().includes(value))
    );
    setFilteredItems(filtered);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Search
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search the name of the product"
          aria-describedby="price-currency"
          onChange={e => filterData(e.target.value)}
          value={inputValue}
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <MagnifyingGlassIcon />
        </div>
        <Transition
          as={Fragment}
          show={filteredItems.length > 0 && !!inputValue}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <ul className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {filteredItems.map(item => (
                <li key={item.product}>
                  <a
                    href={`/products/${item.product}`}
                    className={'hover:bg-gray-100 text-gray-900 block px-4 py-2 text-sm'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </Transition>
      </div>
    </div>
  );
};

export default SearchBar;
