import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../assets/firebase-config';
import Tag from '../tags/Tag';

export default function CategorySection({ project }) {
    const [projectCatList, setProjectCatList] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                // Fetch all categories from Firestore
                const categoriesCollection = collection(db, "categories");
                const categoriesSnapshot = await getDocs(categoriesCollection);
                
                // Filter categories that are in the project.categories array
                const projectCategories = categoriesSnapshot.docs
                    .filter(categoryDoc => project.categories.includes(categoryDoc.id))
                    .map(categoryDoc => ({ id: categoryDoc.id, ...categoryDoc.data() }));

                setProjectCatList(projectCategories);
                console.log(projectCategories);  // For debugging
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, [project.categories]);  // Only runs when project.categories changes

    return (
        <div>
            <h3>Project Categories</h3>
            <ul className='flex flex-wrap'>
                {projectCatList.map(category => (
                    <Tag key={category.id} content={category} />
                ))}
            </ul>
        </div>
    );
}
