export default function Home() {
  return (
    <div>
      <section className="text-center my-16">
        <h1 className="text-5xl font-bold text-pink-500">
          Welcome to Glamour Salon
        </h1>
        <p className="text-xl mt-4 text-gray-600">
          Your one-stop for beauty and elegance.
        </p>
        <button className="mt-8 bg-pink-500 text-white px-8 py-3 rounded-full font-bold hover:bg-pink-600">
          Book an Appointment
        </button>
      </section>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Haircuts & Styling</h3>
            <p>
              Get the perfect cut and style that suits you. Our stylists are
              experts in the latest trends.
            </p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Manicures & Pedicures</h3>
            <p>
              Pamper yourself with our luxurious manicures and pedicures. Your
              nails will thank you.
            </p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Facials & Skincare</h3>
            <p>
              Rejuvenate your skin with our customized facials and skincare
              treatments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}