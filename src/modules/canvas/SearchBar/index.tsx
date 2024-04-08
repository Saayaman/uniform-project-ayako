import { registerUniformComponent } from '@uniformdev/canvas-react';
import SearchBar from './SearchBar';

export type SearchBarProps = {
  searchInfo: Types.CloudinaryImage;
};

registerUniformComponent({
  type: 'searchBar',
  component: SearchBar,
});

export default SearchBar;
