"use server";

import axiosInstance from "@/lib/axios";
import { StrapiAdapter } from "@/lib/StrapiAdapter";
import dummyActivities from "@/database/activities";
import dummyTestimonials from "@/database/testimonials";

export async function getActivities() {
    try {
        const response = await axiosInstance.get('/aktivitass?populate=*');
        const activities = response.data.data;

        // If no activities, return dummy data
        if (!activities || activities.length === 0) {
            return dummyActivities;
        }

        // Transform API data using adapter
        return activities.map(activity => StrapiAdapter.adaptActivity(activity));
    } catch (error) {
        console.error('Error fetching activities:', error);
        // Return dummy data on error
        return dummyActivities;
    }
}

export async function getTestimonials() {
    try {
        const response = await axiosInstance.get('/testimonis?populate=*');
        const testimonials = response.data.data;

        // If less than 3 testimonials, return dummy data
        if (!testimonials || testimonials.length < 3) {
            return dummyTestimonials;
        }

        // Transform API data using adapter
        return testimonials.map(testimoni => StrapiAdapter.adaptTestimoni(testimoni));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        // Return dummy data on error
        return dummyTestimonials;
    }
}

