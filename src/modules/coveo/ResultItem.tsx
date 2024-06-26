/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC } from 'react';
import { ComponentProps } from '@uniformdev/canvas-react';
// @ts-ignore: Expected error if the module is not yet installed
import { Result } from '@coveo/headless';
import Card from '../canvas/Card';

type ResultItemProps = ComponentProps<{
  item: Result;
}>;

const ResultItem: FC<ResultItemProps> = ({ item, component }) => {
  const {
    buttonStyle,
    buttonLink,
    buttonCopy,
    badgeSize,
    badgeStyle,
    lineCountRestriction,
    objectFit,
    overlayColor,
    overlayOpacity,
    textColorVariant,
  } = component.parameters || {};

  return (
    <Card
      image={item.raw.ec_thumbnails as string}
      title={item.title}
      description={item.raw.description as string}
      badge={item?.raw?.sub_category as string}
      badgeStyle={(badgeStyle?.value as Types.BadgeStyles) || 'primary'}
      buttonStyle={(buttonStyle?.value as Types.ButtonStyles) || 'primary'}
      lineCountRestriction={(lineCountRestriction?.value as Types.AvailableMaxLineCount) || '5'}
      badgeSize={(badgeSize?.value as Types.BadgeSize) || 'sm'}
      buttonCopy={buttonCopy?.value as string}
      objectFit={objectFit?.value as Types.AvailableObjectFit}
      overlayColor={overlayColor?.value as Types.AvailableColor}
      overlayOpacity={overlayOpacity?.value as Types.AvailableOpacity}
      buttonLink={
        // Emulate dynamic values for categories pages without dynamic input feature
        (buttonLink?.value
          ? {
              ...(buttonLink?.value as Types.ProjectMapLink),
              dynamicInputValues: {
                'product-slug': item.raw.slug,
              },
            }
          : undefined) as Types.ProjectMapLink | undefined
      }
      useCustomTextElements
      textColorVariant={textColorVariant?.value as Types.AvailableTextColorVariant | undefined}
      component={component}
    />
  );
};

export default ResultItem;
