import { HeartIcon,PlusIcon } from '@heroicons/react/outline'
import products from "../components/products.json"
import { useStateValue } from './StateProvider'
import ProductCard from '../components/ProductCard'


  export default function Example() {



    return (
      <div className="bg-white">

  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
          </div>
      </div>
    )
  }