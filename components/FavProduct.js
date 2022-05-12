import React from 'react'
import { useStateValue } from './StateProvider'


function FavProduct({id, imageUrl, title, productPrice, productRating}) {
    const [{favs},dispatcher] = useStateValue() 
    const removeFromFavs = () => {
        dispatcher({
            type : 'REMOVE_FROM_FAV',
            id : id,
        })}
    return (
        <div>
           <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                                            <div className="w-1/4">
                                                <img src={imageUrl} alt="true" className="w-full h-full object-center object-cover" />
                                            </div>
                                            <div className="md:pl-3 md:w-3/4">
                                                <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p>
                                                <div className="flex items-center justify-between w-full pt-1">
                                                    <p className="text-base font-black leading-none text-gray-800">{title}</p>
                                                    <select className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none">
                                                        <option>01</option>
                                                    </select>
                                                </div>
                                                <p className="text-xs leading-3 text-gray-600 pt-2"> {Array(productRating).fill().map(() => (<>⭐</>))}</p>
                                                <div className="flex items-center justify-between pt-5 pr-6">
                                                    <div className="flex itemms-center">
                                                        <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Move to basket</p>
                                                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" onClick={removeFromFavs}>Remove</p>
                                                    </div>
                                                    <p className="text-base font-black leading-none text-gray-800">{productPrice}</p>
                                                </div>
                                            </div>
                                        </div>
    
        </div>
    
        
    
      )
}

export default FavProduct
