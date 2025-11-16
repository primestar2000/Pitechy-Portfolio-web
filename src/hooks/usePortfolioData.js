import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../assets/firebase-config';

// Fetch active projects
export const useProjects = () => {
    return useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            try {
                // Fetch all projects and filter for active ones (status can be true, 1, or "1")
                const snapshot = await getDocs(collection(db, 'projects'));
                const allProjects = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                // Filter for active projects (status is truthy)
                return allProjects.filter(project => project.status);
            } catch (error) {
                console.error('Error fetching projects:', error);
                throw error;
            }
        },
    });
};

// Fetch categories
export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const snapshot = await getDocs(collection(db, 'categories'));
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        },
    });
};

// Fetch social media links
export const useSocialMedia = () => {
    return useQuery({
        queryKey: ['socialMedia'],
        queryFn: async () => {
            try {
                const snapshot = await getDocs(collection(db, 'socialmedia'));
                return snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Error fetching social media:', error);
                throw error;
            }
        },
    });
};

// Fetch skills and categories
export const useSkills = () => {
    const skillsQuery = useQuery({
        queryKey: ['skills'],
        queryFn: async () => {
            try {
                const q = query(collection(db, 'skills'), where('status', '==', true));
                const snapshot = await getDocs(q);
                return snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            } catch (error) {
                console.error('Error fetching skills:', error);
                throw error;
            }
        },
    });

    const categoriesQuery = useQuery({
        queryKey: ['skillCategories'],
        queryFn: async () => {
            try {
                const q = query(collection(db, 'skillCategories'), where('status', '==', true));
                const snapshot = await getDocs(q);
                return snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })).sort((a, b) => (a.order || 0) - (b.order || 0));
            } catch (error) {
                console.error('Error fetching skill categories:', error);
                throw error;
            }
        },
    });

    return {
        skills: skillsQuery.data,
        skillCategories: categoriesQuery.data,
        isLoading: skillsQuery.isLoading || categoriesQuery.isLoading,
        error: skillsQuery.error || categoriesQuery.error,
    };
};
