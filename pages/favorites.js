import React from 'react'
import FavProduct from '../components/FavProduct';
import Header from '../components/Header'
import FavProduct from '../components/FavProduct';
import { useStateValue } from '../components/StateProvider';

<<<<<<< HEAD
function favorites() {
=======
function Favorites() {
  const [{favs}, dispatcher] = useStateValue()
>>>>>>> 3f869bf (changes--)

    const [{favs}, dispatcher] = useStateValue()
    
    return (

<<<<<<< HEAD
        <>
            <Header />
            <div>

                    <div className=" top-14 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0 " id="chec-div">
                        <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                            <div className="flex md:flex-row flex-col justify-end" id="cart">
                                <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                                    
                                    <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Your favorites</p>

                                        {favs.map(item => (

                                        <FavProduct 
                                            key={item.id}
                                            id={item.id}
                                            imageUrl = {item.image}
                                            title = {item.title}
                                            productPrice = {item.price}
                                            productRating = {item.rating}
                                        />
                                        ))}

                                    
                                    
                                </div>
                                <div className="xl:w-1/1 md:w-1/3 w-full bg-gray-100 h-full">
                                    <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                        <div>
                                            <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                            <div className="flex items-center justify-between pt-16">
                                                <p className="text-base leading-none text-gray-800">Subtotal</p>
                                                <p className="text-base leading-none text-gray-800"></p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                                <p className="text-2xl leading-normal text-gray-800">Total</p>
                                                <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                                                </p>
                                            </div>
                                            <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                                Move to Bag
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
=======
            <div className=" top-14 w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0 " id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                            
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Favorites</p>

                                {favs.map(item => (
                                <FavProduct 
                                    id={item.id}
                                    imageUrl = {item.image}
                                    title = {item.title}
                                    productPrice = {item.price}
                                    productRating = {item.rating}
                                />
                                ))}

                            
                            
>>>>>>> 3f869bf (changes--)
                        </div>
                    </div>
                
            </div>
            

            <style>
                {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
            </style>
        </>
    );

}

export default favorites