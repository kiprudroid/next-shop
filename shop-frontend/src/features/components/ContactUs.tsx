const ContactUs = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white p-8 rounded">
          <h2 className="text-2xl font-bold mb-2 text-center">Get in Touch</h2>
          <p className="text-gray-600 text-center mb-6">Have questions? We're here to help you refine your lifestyle.</p>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" placeholder="john@example.com" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" required />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 ">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="How can we help you?" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400" required></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-800 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;