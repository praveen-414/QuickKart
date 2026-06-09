import { FaShippingFast, FaLock, FaHeadset, FaTags } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      desc: "Get your products delivered quickly and safely to your doorstep.",
    },
    {
      icon: <FaLock />,
      title: "Secure Payments",
      desc: "Your transactions are protected with advanced security systems.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Our team is always available to help you anytime, anywhere.",
    },
    {
      icon: <FaTags />,
      title: "Best Deals",
      desc: "Enjoy the best prices and exclusive offers on all products.",
    },
  ];

  return (
    <section className="w-full mx-auto bg-gray-100 py-15 rounded mt-10">
      <div className="flex flex-col gap-3 mb-10">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
        <p className="text-center">
          We provide top-notch services to ensure the best shopping experience.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 w-[85vw] mx-auto">
        {/* service card  */}
        {services.map((service, index) => {
          return (
            <div
              className="flex flex-col items-center pt-5 gap-3 px-5 pb-5 bg-white rounded"
              key={index}
            >
              <span className="text-5xl">{service.icon}</span>
              <h3 className="font-bold text-xl">{service.title}</h3>
              <p className="text-gray-700"> {service.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
