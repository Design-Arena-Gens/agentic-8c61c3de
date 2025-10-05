export default function Services() {
  const services = [
    { name: "Women's Haircut", price: "$50" },
    { name: "Men's Haircut", price: "$30" },
    { name: "Children's Haircut", price: "$25" },
    { name: "Hair Coloring", price: "$80 onwards" },
    { name: "Highlights", price: "$120 onwards" },
    { name: "Manicure", price: "$25" },
    { name: "Pedicure", price: "$35" },
    { name: "Gel Manicure", price: "$40" },
    { name: "Basic Facial", price: "$60" },
    { name: "Deep Cleansing Facial", price: "$85" },
    { name: "Makeup Application", price: "$55" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.name}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <h2 className="text-xl font-bold">{service.name}</h2>
            <p className="text-lg font-semibold text-pink-500">
              {service.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
