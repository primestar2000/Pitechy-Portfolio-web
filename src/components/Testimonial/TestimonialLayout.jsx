import { testimonial_data } from "../../assets/data";
import Testimonial from "./Testimonial";

const TestimonialLayout = () => (
    <>
        <section id="work" className="w-full p-2 lg:p-10 dark:bg-slate-900">
            <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Testimonials</h2>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:justify-evenly relative top-10">
                {testimonial_data.map((data)=>{
                            return(<Testimonial key={data.id} data={data} />)
                })}
            </div>
        </section>
    </>
);

export default TestimonialLayout;