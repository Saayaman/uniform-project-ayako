import { BackgroundDecorator, WithoutContainerDecorator } from '../BasePage';
import { AccordionItemDecorator } from '../../modules/canvas/AccordionItem';
import { CardDecorator } from '../../modules/canvas/Card';
import { FeatureDecorator } from '../../modules/canvas/Feature';

// Basic Decorators Set for the Component Starter Kit
// Activate visual editing doc: https://docs.uniform.app/docs/guides/composition/visual-editing/activate-visual-editing
const CSKDecorators = [
  AccordionItemDecorator,
  CardDecorator,
  FeatureDecorator,
  WithoutContainerDecorator,
  BackgroundDecorator,
];

export default CSKDecorators;
