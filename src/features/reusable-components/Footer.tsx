import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-6">HUB E-commerce</h2>

        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="/" className="text-sm hover:underline">Home</a>
          <a href="/products" className="text-sm hover:underline">Products</a>
          <a href="#" className="text-sm hover:underline">Shipping Info</a>
          <a href="#" className="text-sm hover:underline">Returns</a>
        </nav>

        <div className="flex items-center justify-center gap-6 mb-6">
          
          <a href="#" aria-label="share" className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faShareNodes} className="h-6 w-6" />
          </a>

          <a href="mailto:info@luxe.com" aria-label="email" className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6" />
          </a>

          <a href="/" aria-label="website" className="text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
          </a>
        </div>

        <hr className="border-gray-300 mb-6" />

        <p className="text-center text-sm text-gray-500">© {year} HUB E-commerce. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;