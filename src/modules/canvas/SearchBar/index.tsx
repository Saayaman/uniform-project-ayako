import { registerUniformComponent } from '@uniformdev/canvas-react';
import SearchBar from './SearchBar';

export type SearchBarProps = {
  searchItems: Types.SearchItem[] | [];
};

registerUniformComponent({
  type: 'searchBar',
  component: SearchBar,
});

export default SearchBar;
