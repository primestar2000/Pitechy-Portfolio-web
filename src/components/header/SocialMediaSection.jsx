import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../assets/firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faYoutube, faInstagram, faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
  const [socialMediaCollection, setSocialMediaCollection] = useState([]);

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const docRef = collection(db, 'socialmedia');
        const socialmediaList = await getDocs(docRef);
        setSocialMediaCollection(socialmediaList.docs.map(doc => doc.data()));
      } catch (error) {
        console.log(error);
      }
    };
    fetchSocial();
  }, []);

  return (
    <div className='flex gap-6 my-6 justify-center lg:justify-start'>
      {socialMediaCollection.map((data, index) => (
        <a key={index} href={data.socialLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon 
            className="text-gray-200 hover:text-yellow-400 hover:scale-110 transition-transform duration-300"
            icon={fontObject[data.iconData]} 
            size="xl" // Adjust size if needed
          />
        </a>
      ))}
    </div>
  );
}
