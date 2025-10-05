export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border p-2 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600"
            >
              Send Message
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <p className="text-lg">123 Glamour St, Beauty City, 12345</p>
          <p className="text-lg mt-2">Phone: (123) 456-7890</p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.3375034662!2d-74.2598654582451!3d40.69714941932242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700036558331!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
