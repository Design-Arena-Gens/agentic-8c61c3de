export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">About Us</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1599387737255-34a1533a4363?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Salon Interior"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-lg">
            Glamour Salon is a premier hair and beauty salon located in the
            heart of the city. We are dedicated to providing our clients with
            the highest quality services in a warm and friendly environment.
          </p>
          <p className="text-lg mt-4">
            Our team of experienced and talented stylists are passionate about
            what they do and are committed to making you look and feel your
            best. We use only the finest products to ensure that your hair and
            skin are healthy and beautiful.
          </p>
        </div>
      </div>
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-4 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1614283233556-f35b7c82a13a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stylist 1"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Jessica</h3>
            <p>Lead Stylist</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stylist 2"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Emily</h3>
            <p>Color Specialist</p>
          </div>
          <div className="border p-4 rounded-lg text-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Stylist 3"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Sarah</h3>
            <p>Manicurist</p>
          </div>
        </div>
      </div>
    </div>
  );
}
