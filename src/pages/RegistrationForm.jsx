// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import 'animate.css';

// const RegistrationForm = () => {

//     const { workshopName } = useParams();
//     const [formSubmitted, setFormSubmitted] = useState(false);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if all fields are filled
//     if (!formData.name || !formData.email.null || !formData.phone.null) {
//         setError('All fields are required. Please fill them out.');
//         return;
//     }

//     // Clear any previous error and proceed
//     setError('');
//     setFormSubmitted(true);

//     // Simulate form submission logic
//     // console.log('Form submitted:', { ...formData, workshop: workshopName });
//   };

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#EAE0D5] via-[#C6AC8E] to-[#5E503F] animate-fadeIn">
//       <form
//         className="w-full max-w-lg bg-[#22333B] p-8 rounded-2xl shadow-2xl text-[#EAE0D5] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
//         onSubmit={handleSubmit}
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center text-[#C6AC8E] tracking-wider animate-slideInDown">
//             Register for {workshopName}
//         </h2>

//          {/* Error Message */}
//          {error && (
//                     <div className="mb-4 text-red-500 text-center animate-fadeIn">
//                         {error}
//                     </div>
//                 )}

//         {/* Name Input */}
//         <div className="mb-6 animate-fadeInLeft delay-200">
//           <label htmlFor="name" className="block text-sm font-semibold mb-2">
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Enter your full name"
//             // required
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-6 animate-fadeInLeft delay-400">
//           <label htmlFor="email" className="block text-sm font-semibold mb-2">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Enter your email"
//             // required
//           />
//         </div>

//         {/* Phone Input */}
//         <div className="mb-6 animate-fadeInLeft delay-600">
//           <label htmlFor="phone" className="block text-sm font-semibold mb-2">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
//             placeholder="Enter your phone number"
//             // required
//           />
//         </div>

//         {/* Decorative Divider */}
//         <div className="mb-6 flex justify-center animate-ping animate-zoomIn delay-1000">
//           <div className="w-20 h-1 bg-gradient-to-l from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={() => setFormSubmitted(true)}
//           type="submit"
//           className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5E503F] to-[#22333B] text-[#EAE0D5] font-semibold tracking-wide shadow-lg transition-all duration-500 hover:from-[#C6AC8E] hover:to-[#5E503F] hover:scale-105 animate-none delay-1200"
//         >
//           Submit Registration
//         </button>

//         {/* Success Message Popup */}
        
//         {formSubmitted && (
//                     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//                         <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
//                             <h2 className="text-2xl font-bold text-[#22333B] mb-4">
//                                 Registration Successful!
//                             </h2>
//                             <p className="text-[#5E503F] mb-6">
//                                 Thank you for registering. We will contact you soon.
//                             </p>
//                             <button
//                                 onClick={() => setFormSubmitted(false)}
//                                 className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 )}


//         {/* Decorative Divider */}
//         <div className="mt-6 flex justify-center animate-ping animate-zoomIn delay-1400">
//           <div className="w-20 h-1 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
//         </div>
//       </form>

//         {/* Call to Action Section */}
//         <section className="relative z-10 mt-20 text-center">
//             <Link
//                 to={'/workshops'}
//                 className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#22333B] via-[#5E503F] to-[#0A0908] rounded-full shadow-lg hover:shadow-2xl hover:from-[#0A0908] hover:to-[#22333B] transition-all duration-300">
//                 More Workshops
//             </Link>
//         </section>
      
//     </div>
//   );
// };

// export default RegistrationForm;







import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import 'animate.css';

const RegistrationForm = () => {
    const { workshopName } = useParams(); //extracting the title from the URL
    const location = useLocation(); //extracting the state passed from navigate (the image form workshop card)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const [error, setError] = useState('');

    // Extract the image from location.state
    const { workshopImage } = location.state || {};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.name || !formData.email || !formData.phone) {
            setError('All fields are required. Please fill them out.');
            setFormSubmitted(false); // Ensure popup does not show
            return;
        }

        // Clear error and show success popup
        setError('');
        setFormSubmitted(true);
    };

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#EAE0D5] via-[#C6AC8E] to-[#5E503F] py-10 overflow-hidden animate-fadeIn">
            <div className="absolute bg-fixed opacity-90 animate-gradient blur-lg">
                <img src={workshopImage} alt={workshopName} />
            </div>
            
            <form
                className="w-full max-w-lg bg-[#22333B] p-8 rounded-2xl shadow-2xl text-[#EAE0D5] transform transition-all duration-500 hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold mb-8 text-center text-[#C6AC8E] tracking-wider animate-slideInDown">
                    Register for {workshopName}
                </h2>

                {/* Error Message */}
                {error && (
                    <div className="mb-4 max-w-md text-red-500 text-center animate-fadeIn">
                        {error}
                    </div>
                )}

                {/* Name Input */}
                <div className="mb-6 animate-fadeInLeft delay-200">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
                        placeholder="Enter your full name"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-6 animate-fadeInLeft delay-400">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Phone Input */}
                <div className="mb-6 animate-fadeInLeft delay-600">
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#5E503F] text-[#EAE0D5] placeholder-[#D6CFC7] focus:outline-none focus:ring-2 focus:ring-[#C6AC8E]"
                        placeholder="Enter your phone number"
                    />
                </div>

                {/* Decorative Divider */}
               <div className="mt-14 mb-6 flex justify-center animate-ping animate-zoomIn delay-1000">
                 <div className="w-20 h-1 bg-gradient-to-l from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
               </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-[#5E503F] to-[#22333B] text-[#EAE0D5] font-semibold tracking-wide shadow-lg transition-all duration-500 hover:from-[#C6AC8E] hover:to-[#5E503F] hover:scale-105"
                >
                    Submit Registration
                </button>

                {/* Success Message Popup */}
                {formSubmitted && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                        <div className="bg-white p-6 rounded-xl shadow-xl text-center w-96">
                            <h2 className="text-2xl font-bold text-[#22333B] mb-4">
                                Registration Successful!
                            </h2>
                            <p className="text-[#5E503F] mb-6">
                                Thank you for registering. We will contact you soon.
                            </p>
                            <button
                                onClick={() => setFormSubmitted(false)}
                                className="px-6 py-3 bg-[#22333B] text-white text-lg font-semibold rounded-lg hover:bg-[#1A282E] transition duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Decorative Divider */}
               <div className="mt-6 flex justify-center animate-ping animate-zoomIn delay-1400">
                 <div className="w-20 h-1 bg-gradient-to-r from-[#5E503F] to-[#C6AC8E] rounded-full"></div>
               </div>
            </form>

            {/* Call to Action Section */}
            <section className="relative z-10 mt-20 text-center">
                <Link
                    to={'/workshops'}
                    className="px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#22333B] via-[#5E503F] to-[#0A0908] rounded-full shadow-lg hover:shadow-2xl hover:from-[#0A0908] hover:to-[#22333B] transition-all duration-300"
                >
                    More Workshops
                </Link>
            </section>
        </div>
    );
};

export default RegistrationForm;
