import { RadioGroup } from '@headlessui/react';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';
import { ColorProps } from '.';

const ProductColors: FC<ColorProps> = ({ colors = [] }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  useEffect(() => {
    if (colors) {
      setSelectedColor(colors[0]);
    }
  }, []);

  return (
    <div>
      <h3 className="text-sm text-gray-600">Color</h3>
      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
        <span className="flex items-center space-x-3">
          {colors.map((color: Types.Color) => (
            <RadioGroup.Option
              key={color.fields.name.value}
              value={color}
              className={({ active, checked }) =>
                classNames(
                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                  color.fields.ringColor.value,
                  active && checked ? 'ring ring-offset-1' : '',
                  !active && checked ? 'ring-2' : ''
                )
              }
            >
              <RadioGroup.Label as="span" className="sr-only">
                {color.fields.name.value}
              </RadioGroup.Label>
              <span
                aria-hidden="true"
                className={classNames(
                  color.fields.bgColor.value,
                  'h-8 w-8 rounded-full border border-black border-opacity-10'
                )}
              />
            </RadioGroup.Option>
          ))}
        </span>
      </RadioGroup>
    </div>
  );
};

export default ProductColors;
