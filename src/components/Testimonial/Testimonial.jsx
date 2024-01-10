import userAlternativeImg from "../../assets/images/user_alternative.png";
const Testimonial = ({data}) => {
return(
    <>
        <div className="p-5 w-fit h-fit">
            <div className="max-w-[350px] p-4 w-full max-h-fit h-[200px] dark:bg-slate-800 rounded-xl flex-col relative flex shadow-md">
                <div className="w-20 h-20 bg-slate-700 rounded-full self-center absolute -top-10 ">
                    {
                        data.image ?
                        <img className="w-full h-full object-cover rounded-full" src={data.image} alt="" />
                        :
                        <img className="w-full h-full object-cover bg-white rounded-full" src={userAlternativeImg} alt="" />
                    
                    }
                </div>
                <div className="relative flex flex-col gap-1 top-10">
                    <p className=" dark:text-white text-center">{data.username}</p>
                    <p className="text-sm text-center text-slate-500 dark:text-white italic cursive">{data.title}</p>
                    <p className="text-[11px] text-slate-500 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur earum eligendi, fugiat iste nemo error ullam minima dolorum dolorem in sint quis et  </p>
                </div>
            </div>
        </div>
    </>
)
}

export default Testimonial;