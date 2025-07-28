const Languages = () => {
  const languages = [
    { name: "English", level: "Fluent (C1)" },
    { name: "German", level: "Intermediate (B1, actively improving)" },
  ];

  return (
    <section
      id="languages"
      className="min-h-screen bg-[#0F172A] px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
        Languages
      </h2>
      <div className="max-w-xl mx-auto space-y-6 text-white">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="border border-gray-700 p-4 rounded-lg flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-blue-300">{lang.name}</h3>
            <p className="text-sm text-gray-300">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
