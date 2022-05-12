import { HeartIcon, PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { useStateValue } from './StateProvider'

export default function ProductCard({product}) {
    const [{basket},{favourites},dispatch] = useStateValue();
    console.log(basket)
    const addtoBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : product.id,
                title: product.title,
                image : product.imageUrl,
                rating : product.productRating,
                price : product.productPrice

            },
        },
      {
          type : 'ADD_TO_FAV',
          item : {
            id : product.id,
                  title: product.title,
                  image : product.imageUrl,
                  rating : product.productRating,
                  price : product.productPrice
          },
        });
    };

    const [{favs}, dispatcher] = useStateValue();
    console.log(favs)
    const addtoFav = () => {
      dispatcher({
        type : 'ADD_TO_FAV',
        item : {
                id : product.id,
                title: product.title,
                image : product.imageUrl,
                rating : product.productRating,
                price : product.productPrice

        }
      })
    }
  return (
  <div className="group relative">
    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-80 lg:h-80 lg:aspect-none">
      <img
        src={product.imageUrl}
       
        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
      />
      
    </div>
    <HeartIcon className='text-white h-[30px] absolute justify-center m-auto right-5 top-5 sm:top-0 sm:right-2 z-10 hover:cursor-grab ' onClick={addtoFav} />
     <PlusIcon className='text-white h-[30px] absolute justify-center m-auto right-5 top-20 sm:top-12 sm:right-2 z-10 hover:cursor-grab ' onClick={addtoBasket}/>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href='#'>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.heading}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500"> {Array(product.productRating).fill().map(() => (<>⭐</>))}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">Rs. {product.productPrice}</p>
    </div>
  </div>
  )
}

