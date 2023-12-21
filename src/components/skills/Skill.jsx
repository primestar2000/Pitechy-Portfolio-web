import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faFacebookF, faYoutube, faInstagram, faReact, faCss3 } from '@fortawesome/free-brands-svg-icons'
import { defaults } from 'autoprefixer';
const Skill = ({icon, title, color}) => (
    <>
    <div className='flex justify-center items-center gap-2'>
        <FontAwesomeIcon color={color}  className={` hover:text-violet-500 hover:scale-125  transition-all ease-in-out delay-100 ease`} size={"2x"} icon={icon} />
        <p className='text-slate-500 dark:text-white font-bold text-lg capitalize'>{title}</p>
    </div>
    </>
);
export default Skill;