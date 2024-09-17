import { faGithubSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaSection from "../header/SocialMediaSection";
import { useState, useEffect} from "react";
import useFirebaseCreate from "../../hooks/firbaseCreate";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const collectionTitle = "contact_message";
    const { isLoading, docRef, sendData, isCompleted } = useFirebaseCreate();

    useEffect(()=>{
        console.log(isCompleted)
    },[isCompleted])
    
    const handleFormFill = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value }
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(formData, collectionTitle, setFormData);
        if(isCompleted){
            setFormData({name: "", email: "", message: ""});
        }
    
    }
    return(

  <section id="contact" className="w-full py-10 lg:py-20 bg-gradient-to-r from-blue-600 to-teal-500 dark:from-gray-800 dark:to-gray-900 text-white">
    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Contact Me</h2>
    <div className="container mx-auto p-4 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6">
          <p className="text-yellow-400 text-xl font-semibold mb-6 text-center lg:text-left">Get In Touch</p>
          <ul className="list-none mb-6">
            <li className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow-400 lg:text-2xl" />
              <p className="text-gray-300 text-xs lg:text-lg">Phase 3 Gwagwalada, Abuja</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 lg:text-2xl" />
              <p className="text-gray-300 text-xs lg:text-lg">primestar2000@gmail.com</p>
            </li>
            <li className="flex items-center gap-4 mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-400 lg:text-2xl" />
              <p className="text-gray-300 text-xs lg:text-lg">+234 8052630338</p>
            </li>
          </ul>
          <div className="flex justify-center gap-6">
            <SocialMediaSection />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-3xl shadow-lg p-6">
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-xs text-gray-300 mb-1">Name</label>
              <input
              onChange={
                (e)=>{handleFormFill(e)}
              }
              name="name"
              value={formData.name}
              type="text" id="name" className="p-1 lg:p-2 text-sm bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" placeholder="Your Name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs text-gray-300 mb-1">Email</label>
              <input 
              name="email"
              value={formData.email}
              onChange={
                (e)=>{handleFormFill(e)}
              } type="email" id="email" className="p-1 lg:p-2 text-sm bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" placeholder="Your Email" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs text-gray-300 mb-1">Message</label>
              <textarea 
              value={formData.message}
              name="message"
              onChange={
                (e)=>{handleFormFill(e)}
              } id="message" className="p-1 lg:p-2 text-sm bg-gray-900 text-gray-300 rounded-md border border-gray-600 focus:outline-none focus:border-yellow-400 transition-colors duration-300" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button onClick={handleSubmit} type="submit" className="bg-yellow-400 text-gray-800 font-bold text-lg px-6 py-1 lg:p-2 rounded-md hover:bg-yellow-300 transition-colors duration-300">
              { isLoading ? 
              (
                <>             
                <FontAwesomeIcon icon={faSpinner} spin={true} />
                Submiting
                </>
              )
              :"Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Contact;