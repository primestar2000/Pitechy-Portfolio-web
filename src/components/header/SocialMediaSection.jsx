import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faYoutube, faInstagram, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useSocialMedia } from '../../hooks/usePortfolioData';
import Loader from '../Projects/Loader';

// Map icon names to FontAwesome icons
const fontObject = {
  faTwitter,
  faFacebookF,
  faYoutube,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faXTwitter
};

export default function SocialMediaSection() {
  const { data: socialMediaCollection, isLoading } = useSocialMedia();

  if (isLoading) {
    return <Loader title={"Social Links"} textSize={"14px"} />;
  }

  return (
    <div className='flex gap-6 my-6 justify-center lg:justify-start'>
      {socialMediaCollection?.map((data, index) => (
        <motion.a
          key={index}
          href={data.socialLink}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon
            className="text-gray-200 hover:text-yellow-400 transition-colors duration-300"
            icon={fontObject[data.iconData]}
            size="xl"
          />
        </motion.a>
      ))}
    </div>
  );
}
