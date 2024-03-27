import { FC } from "react";
import { ProductCardProps } from ".";


export const ProductCard: FC<ProductCardProps> = ({
  id, price, name, color, href, productImage
}) => {
  return (
    <div key={id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        {!!productImage[0]
          ? <img
            alt={productImage[0].fields?.title?.value}
            src={productImage[0].fields?.url?.value}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
          : null
        }
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </div>
  )
}
