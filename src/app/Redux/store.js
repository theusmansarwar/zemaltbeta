"use client";
import { configureStore } from '@reduxjs/toolkit';
import testimonialReducers from './Slices/Testimonials/testimonialSlice';

export const store = configureStore({
  reducer: {
    testimonials: testimonialReducers,
  }
});