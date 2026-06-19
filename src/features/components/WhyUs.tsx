import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faLock } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: "Free Shipping",
    description: "Complementary delivery on all orders over Ksh. 150, All around Nairobi.",
    icon: <FontAwesomeIcon icon={faTruck} className="h-6 w-6" />,
  },
  {
    title: "24/7 Support",
    description: "Our dedicated customer service team is here to assist you anytime.",
    icon: <FontAwesomeIcon icon={faHeadset} className="h-6 w-6" />,
  },
  {
    title: "Secure Checkout",
    description: "Your payment information is protected with industry-leading security measures.",
    icon: <FontAwesomeIcon icon={faLock} className="h-6 w-6" />,
  },
];

const WhyUS = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-gray-900">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUS;