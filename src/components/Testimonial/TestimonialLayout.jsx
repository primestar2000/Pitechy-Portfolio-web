import { testimonial_data } from "../../assets/data";
import Testimonial from "./Testimonial";

const TestimonialLayout = () => (
    <>
        <section id="testimonial" className="w-fulls p-2 lg:p-10 dark:bg-slate-900">
            <div className="max-w-[1920px] mx-auto">
                <h2 className="text-[30px] my-10 text-slate-500 font-bold text-center">Testimonials</h2>
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:justify-evenly relative ">
                    {testimonial_data.map((data)=>{
                        return(<Testimonial key={data.id} data={data} />)
                    })}
                </div>
            </div>
        </section>
    </>
);

export default TestimonialLayout;