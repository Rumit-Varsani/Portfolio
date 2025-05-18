import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jg1d8fn",      // replace with your service ID
        "template_v1lrurc",     // replace with your template ID
        form.current,
        "5mMgII3FsJI8tF-YZ"       // replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0F172A] px-6 md:px-20 py-16 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 mb-4">Contact</h2>
        <p className="text-gray-300 mb-12">Have a project in mind or want to collaborate? Feel free to reach out!</p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-[#1E293B] p-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="flex-1 p-3 bg-[#0F172A] border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="flex-1 p-3 bg-[#0F172A] border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-[#0F172A] border border-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>

       
      </div>
    </section>
  );
};

export default Contact;
