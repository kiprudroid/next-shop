import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart ,faSearch , faBars} from '@fortawesome/free-solid-svg-icons'

const Header =  () => {
  return (
    <header className="bg-gray-50 border-b border-gray-200 text-black m-4 px-4 py-4 flex flex-row mt-5 p-4 items-center justify-between rounded-lg shadow-md">
      <div className="left flex items-center">
            <FontAwesomeIcon icon={faBars} className="h-6 mr-2" />
            <h1 className="text-2xl font-bold">JHUB Shop</h1>
      </div>
      <div className="right flex items-center">
            <FontAwesomeIcon icon={faSearch} className="h-6 mr-2" />
            <FontAwesomeIcon icon={faShoppingCart} className="h-6 mr-2" />

      </div>

    </header>
  );
}

export default Header;