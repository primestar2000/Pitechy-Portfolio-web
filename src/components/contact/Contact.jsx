import { faGithubSquare, faLinkedin, faLinkedinIn, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLandmark, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
return (    <>
        <section id="contact" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Contact Me</h2>
            <div className=" flex shadow-md justify-center lg:p-10 rounded-3xl">
                <div className="w-full flex flex-col items-center lg:justify-between lg:flex-row">
                    <div className="hidden w-[400px] flex-1 p-6 lg:flex flex-col justify-center rounded-3xl space-y-6 bg-blue-950">
                        <p className="text-slate-400 text-[20px] font-semibold">Get In touch</p>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faLocationDot} className="text-slate-500 text-2xl" />
                            <p className="text-slate-500">Phase 3 gwagwalada, Abuja</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-slate-500 text-2xl" />
                            <p className="text-slate-500">primestar2000@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-slate-500 text-2xl" />
                            <p className="text-slate-500">Stephen simon</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faPhone} className="text-slate-500 text-2xl" />
                            <p className="text-slate-500">+234 8052630338</p>
                        </div>
                        <div className="flex justify-center gap-6">       
                            <FontAwesomeIcon icon={faGithubSquare} className="text-[40px] text-slate-400" />
                            <FontAwesomeIcon icon={faTwitterSquare} className="text-[40px] text-slate-400" />
                            <FontAwesomeIcon icon={faLinkedin} className="text-[40px] text-slate-400" />
                        </div>
                    </div>
                    <div className="w-full max-w-[400px] p-4 flex flex-col space-y-6">
                        <div className="w-full p-2 border-[2px] border-solid border-slate-500 rounded-md">
                            <input type="text" name="" id="" className="w-full bg-transparent dark:text-slate-300  outline-none" placeholder="Name" />
                        </div>
                        <div className="w-full p-2 border-[2px] border-solid border-slate-500 rounded-md">
                            <input type="email" name="" id="" className="w-full bg-transparent dark:text-slate-300  outline-none" placeholder="Email" />
                        </div>
                        <div className="w-full p-2 border-[2px] border-solid border-slate-500 rounded-md">
                            <textarea type="text" name="" id="" className="w-full bg-transparent dark:text-slate-300  outline-none" placeholder="Message" />
                        </div>
                        <button className="w-full p-2 border-none  bg-violet-500 text-white rounded-md">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>)
}

export default Contact;