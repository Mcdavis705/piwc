
const servicesData = [
  {
    id: 1,
    title: "Sunday Service",
    day: "Sunday",
    time: "10:00 AM - 11:30 AM",
    description: "Join us for our main worship service with hymns, prayer, and a sermon. All are welcome!",
    icon: "🙏"
  },
  {
    id: 2,
    title: "Youth Fellowship",
    day: "Friday",
    time: "4:00 PM - 5:30 PM",
    description: "A fun and engaging gathering for middle and high school students to connect and grow in faith.",
    icon: "🎉"
  },
  {
    id: 3,
    title: "Mid-week Bible Study",
    day: "Tuesdays",
    time: "7:00 PM",
    description: "Dive deeper into the scriptures with our small group Bible study. Newcomers are always welcome.",
    icon: "📖"
  },
  {
    id: 4,
    title: "Community Outreach",
    day: "Saturdays",
    time: "9:00 AM",
    description: "A chance to serve our local community through various projects. Check the bulletin for the week's activity.",
    icon: "🤝"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map(service => (
            <div key={service.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-4 text-3xl text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-gray-800 rounded-full mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-2">{service.title}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-4">{service.day} - {service.time}</p>
              <p className="text-center text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;