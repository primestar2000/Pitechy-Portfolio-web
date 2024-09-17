import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../assets/firebase-config';
import { toast } from 'react-toastify';

export default function useFirebaseCreate() {
  const [isLoading, setIsLoading] = useState(false);
  const [docRef, setDocRef] = useState(null);
    const [isCompleted, SetIsCompleted] = useState(false);
  const sendData = async (formData, collectionTitle, setFormData) => {
    setIsLoading(true);
    const {name, email, message} = formData;
    if(name && email && message ){
        if (email.includes("@")) {
            
            try {
              const docRef = await addDoc(collection(db, collectionTitle), formData);
              setDocRef(docRef);
              toast.success('Message successfully sent!');
              SetIsCompleted(true);
              console.log(docRef);
            } catch (error) {
              toast.error('Something went wrong');
              console.error(error);
            } finally {
              setIsLoading(false);
            }
        } else {
            
            toast.error("Invalid Email");
            setIsLoading(false);
        }
    }else{
        toast.error("Ensure No Field is Empty");
        setIsLoading(false);
    }
  };

  return { isLoading, docRef, sendData, isCompleted };
}
