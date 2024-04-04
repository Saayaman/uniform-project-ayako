import { FC } from 'react';
import { Disclosure, Tab } from '@headlessui/react';
import { StarIcon } from '@heroicons/react/20/solid';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { ProductOverviewProps } from '.';
import { getMediaUrl } from '@/utilities';
import ProductColors from './ProductColors';

const ProductOverview: FC<ProductOverviewProps> = props => {
  const { name, price, id, colors = [], description, images = [], details = [], rating } = props;
  console.log('props', props);
  console.log('id', id);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      {/* Image gallery */}
      <Tab.Group as="div" className="flex flex-col-reverse">
        {/* Image selector */}
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <Tab.List className="grid grid-cols-4 gap-6">
            {(!images || images.length > 0) &&
              images.map((image: Types.ContentfulImage) => (
                <Tab
                  key={image.fields.fileName.value}
                  className="relative flex h-28 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                >
                  {({ selected }) => (
                    <>
                      <span className="sr-only">{image.fields.fileName.value}</span>
                      <span className="absolute inset-0 overflow-hidden rounded-md">
                        <img
                          src={getMediaUrl(image.fields.imageUrl.value)}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </span>
                      <span
                        className={classNames(
                          'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                          selected ? 'ring-indigo-500' : 'ring-transparent'
                        )}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </Tab>
              ))}
          </Tab.List>
        </div>

        <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
          {images.map(image => (
            <Tab.Panel key={image.fields.fileName.value}>
              <img
                src={getMediaUrl(image.fields.imageUrl.value)}
                alt={'image'}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>

      {/* Product info */}
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">{name}</h1>

        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">{price}</p>
        </div>

        {/* Reviews */}
        <div className="mt-3">
          <h3 className="sr-only">Reviews</h3>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map(starRating => (
                <StarIcon
                  key={starRating}
                  className={classNames(
                    rating > starRating ? 'text-indigo-500' : 'text-gray-300',
                    'h-5 w-5 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{rating} out of 5 stars</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Description</h3>

          <div className="space-y-6 text-base text-gray-700" dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <form className="mt-6">
          {/* colors */}
          {!!colors && colors.length > 0 && <ProductColors colors={colors} />}
          <div className="mt-10 flex">
            <button
              type="submit"
              className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
            >
              Add to bag
            </button>
          </div>
        </form>

        {/* Details */}
        <section aria-labelledby="details-heading" className="mt-12">
          <h2 id="details-heading" className="sr-only">
            Additional details
          </h2>

          <div className="divide-y divide-gray-200 border-t">
            {details.length > 0 &&
              details.map((detail: Types.ProductDetails) => (
                <Disclosure as="div" key={detail.fields.title}>
                  {({ open }) => (
                    <>
                      <h3>
                        <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span
                            className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                          >
                            {detail.fields.title}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusIcon
                                className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                        <ul role="list">
                          {detail.fields.list.map(item => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductOverview;
