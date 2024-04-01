import { registerUniformComponent } from '@uniformdev/canvas-react';
import { Hero } from './Hero';
import { withoutContainer } from '@/hocs/withoutContainer';

export type HeroProps = {
  title: string;
  description: string;
  buttonText?: string;
  href?: Types.ProjectMapLink;
  // imageUrl: string;
  // imageAlt: string;
  image?: Types.UniformImage;
  buttonStyle?: Types.ButtonStyles;
  fullWidth?: boolean;

};

export enum HeroVariant {
  ImageLeft = 'imageLeft',
  ImageRight = 'imageRight',
  BackgroundImage = 'backgroundImage',
  TwoColumns = 'twoColumns',
}

registerUniformComponent({
  type: 'hero',
  component: withoutContainer(Hero, true),
});


export default withoutContainer(Hero, true);
