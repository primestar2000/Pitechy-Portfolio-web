import { faGithubSquare, faLinkedin, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
    <section id="contact" className="w-full py-10 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-gray-800 dark:to-gray-900 text-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-10 px-4 lg:px-10">
            
            {/* Contact Information */}
            <div className="hidden lg:flex flex-col w-[400px] p-6 bg-gray-800 rounded-3xl shadow-lg">
                <p className="text-yellow-400 text-xl font-semibold mb-6">Get In Touch</p>
                <div className="flex items-center gap-4 mb-4">
                    <FontAwesomeIcon icon={faLocationDot} className="text-yellow-400 text-2xl" />
                    <p className="text-gray-300">Phase 3 Gwagwalada, Abuja</p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-2xl" />
                    <p className="text-gray-300">primestar2000@gmail.com</p>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-yellow-400 text-2xl" />
                    <p className="text-gray-300">Stephen Simon</p>
                </div>
                <div className="flex items-center gap-4 mb-6">
                    <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-2xl" />
                    <p className="text-gray-300">+234 8052630338</p>
                </div>
                <div className="flex justify-center gap-6">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitterSquare} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
                    </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="w-full max-w-md mx-auto lg:mx-0 p-6 bg-gray-800 rounded-3xl shadow-lg">
                <form className="flex flex-col space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm text-gray-300 mb-1">Name</label>
                        <input type="text" id="name" className="p-3 bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" placeholder="Your Name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm text-gray-300 mb-1">Email</label>
                        <input type="email" id="email" className="p-3 bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" placeholder="Your Email" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm text-gray-300 mb-1">Message</label>
                        <textarea id="message" className="p-3 bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" rows="4" placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit" className="bg-yellow-400 text-gray-800 font-bold text-lg px-6 py-3 rounded-md hover:bg-yellow-300 transition-colors duration-300">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;
