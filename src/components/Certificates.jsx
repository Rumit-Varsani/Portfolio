const Certificates = () => {
  const certificates = [
    {
      title: "Namaste JavaScript",
      issuer: "NamasteDev",
      link: "https://namastedev.com/varsanirumit/certificates/namaste-javascript",
    },
    {
      title: "Namaste React",
      issuer: "NamasteDev",
      link: "https://namastedev.com/varsanirumit/certificates/namaste-react",
    },
    {
      title: "Python: Beginner to Advanced For Data Professionals",
      issuer: "CodeBasics",
      link: "https://codebasics.io/certificate/CB-48-103631",
    },
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#0F172A] px-6 md:px-20 py-16"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
        Certificates
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 text-white">
        {certificates.map((cert, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-300">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">
              Issued by: {cert.issuer}
            </p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-400 border border-blue-400 rounded px-3 py-1 hover:bg-blue-500 hover:text-white transition"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
