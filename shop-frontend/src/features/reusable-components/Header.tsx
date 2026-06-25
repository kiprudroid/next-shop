import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faSearch , faBars} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Header =  () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 text-black m-4 px-4 py-4 flex flex-row mt-5 p-4 items-center justify-between rounded-lg shadow-md">
      <div className="left flex items-center">
            <FontAwesomeIcon icon={faBars} className="h-6 mr-4" />

            <Link href="/" className="text-lg font-semibold text-black">
            <h1 className="text-2xl font-bold">JHUB Shop</h1>
            </Link>
      </div>

      <div className="right flex items-center">
        <nav>
          <ul className="flex gap-6 list-none">
            <li>
              <a href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            </li>
            {/* <li>
              <a href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            </li> */}
            <li>
              <a href="/#WhyUs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Us</a>
            </li>
            <li>
              <a href="/#FeaturedProducts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Featured Products</a>
            </li>
          </ul>
        </nav>  
      
            
            <Link href="/products" className="text-lg font-semibold text-blue-600 mr-4">
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 mr-2 ml-3"  />
            </Link>

      </div>

    </header>
  );
}

export default Header;