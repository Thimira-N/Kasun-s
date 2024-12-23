import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <div className="bg-[#EAE0D5] min-h-screen flex flex-col">
    {/* Header Section */}
    <header className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" style={{ backgroundImage: "url('/assets/images/contact-hero.jpg')" }}>
      <div className="absolute inset-0 bg-[#0A0908] bg-opacity-50"
          style={{background: "linear-gradient(135deg, #0A0908, #22333B)",}}></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-wider" style={{ color: '#EAE0D5' }}>Get in Touch</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto" style={{ color: '#C6AC8E' }}>
          We’d love to hear from you. Whether it’s a question, collaboration, or just a kind word, let’s connect.
        </p>
      </div>
    </header>

    {/* Main Content */}
    <div className="flex-grow py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6" style={{ color: '#0A0908' }}>Contact Us</h2>
        <p className="text-center text-lg mb-10" style={{ color: '#5E503F' }}>
          Reach out to us via the form below, and we’ll respond within 24 hours. Let’s build something extraordinary together.
        </p>
        <div className="bg-gradient-to-tl from-[#F9F5F0] to-[#C6AC8E] p-8 rounded-3xl shadow-xl border border-[#C6AC8E]">
          <ContactForm />
        </div>
      </div>
    </div>

    {/* Visit Us Section */}
    <div className="bg-[#22333B] py-12">
      <div className="container mx-auto text-center text-[#EAE0D5]">
        <h3 className="text-3xl font-semibold mb-4">Visit Us</h3>
        <p className="text-lg mb-4">123 Sri Lankan Craft Lane, Colombo 03, Sri Lanka</p>
        <p className="text-lg mb-4">Phone: +94 123 456 789</p>
        <p className="text-lg">Email: info@kasunjayasekara.com</p>
      </div>
    </div>
  </div>
);

export default Contact;

















// import React from 'react';
// import ContactForm from '../components/ContactForm';

// const Contact = () => (
//   <div className="bg-[#EAE0D5] min-h-screen flex flex-col">
//     {/* Header Section */}
//     <header
//       className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white shadow-xl"
//       style={{ backgroundImage: "url('/assets/images/contact-hero.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-[#0A0908] bg-opacity-60"></div>
//       <div className="relative z-10 text-center px-6 max-w-4xl">
//         <h1 className="text-6xl font-bold tracking-wide mb-4 text-[#EAE0D5]">
//           Get in Touch
//         </h1>
//         <p className="text-lg leading-relaxed text-[#C6AC8E]">
//           We’d love to hear from you. Whether it’s a question, collaboration, or just a kind word, let’s connect and make something incredible.
//         </p>
//       </div>
//     </header>

//     {/* Main Content */}
//     <main className="flex-grow py-16 px-6 bg-gradient-to-br from-[#FAF8F6] to-[#EAE0D5]">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-5xl font-bold text-center mb-8 text-[#0A0908]">
//           Contact Us
//         </h2>
//         <p className="text-center text-lg leading-relaxed mb-12 text-[#5E503F]">
//           Reach out to us via the form below, and we’ll respond within 24 hours. Let’s build something extraordinary together.
//         </p>
//         <div className="bg-white p-12 rounded-3xl shadow-2xl border-2 border-[#C6AC8E]">
//           <ContactForm />
//         </div>
//       </div>
//     </main>

//     {/* Visit Us Section */}
//     <section className="bg-[#22333B] py-14">
//       <div className="max-w-3xl mx-auto text-center text-[#EAE0D5]">
//         <h3 className="text-4xl font-semibold mb-6">Visit Us</h3>
//         <p className="text-lg mb-4 leading-relaxed">
//           123 Sri Lankan Craft Lane, Colombo 03, Sri Lanka
//         </p>
//         <p className="text-lg mb-4">Phone: +94 123 456 789</p>
//         <p className="text-lg">
//           Email: <a href="mailto:info@kasunjayasekara.com" className="underline text-[#C6AC8E]">info@kasunjayasekara.com</a>
//         </p>
//       </div>
//     </section>
//   </div>
// );

// export default Contact;
