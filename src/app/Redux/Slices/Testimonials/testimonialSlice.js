import { createSlice } from "@reduxjs/toolkit";
const testimoniaSlice = createSlice({
  name: "testimonials",
  initialState: {
    TestimonialsData: [
      {
    quote:
      "Strong content was always a challenge for us until Zemalt stepped in. The team crafted messages that spoke directly to our audience. Every line felt natural, clear, and persuasive. Blog posts drew attention, and ad copy boosted conversions. ",
    name: "Michael Kaizer",
    position: "CEO of Basecamp Corp",
    image: "/images/michael.png",
  },
  {
    quote:
      "They understood our brand vision clearly and turned it into a powerful logo. Each detail reflected our identity and values. The designs created lasting recognition in our market. Every option showed deep research and creativity. Zemalt delivered far more than just a logo; they gave us a symbol of trust.",
    name: "Sarah Kim",
    position: "CMO at TechBoost",
    image: "/images/sarah.png",
  },
  {
    quote:
      "Our website looked outdated before we partnered with Zemalt. The team transformed it into a modern, user-friendly site. Navigation became simple, and customers now spend more time browsing. Every section looks sharp and professional. Performance improved, and loading times dropped.",
    name: "John Lee",
    position: "Marketing Director, Zephyr",
    image: "/images/john.png",
  },
  {
    quote:
      "They designed our app interface with clarity and purpose. Every screen felt natural and easy to use. Customers praised the simple flow and stylish layouts. The designs cut confusion and improved engagement. Zemalt guided us through each stage and explained choices clearly.",
    name: "Priya Nair",
    position: "Founder, UrbanNest",
    image: "/images/priya.png",
  },
  {
    quote:
      "We relied on Zemalt for digital marketing, and the results were impressive. Campaigns targeted the right audience at the right time. Each ad carried a clear message that boosted response. Our traffic increased within weeks, and sales grew steadily.",
    name: "David Chen",
    position: "VP Growth, CloudEdge",
    image: "/images/david.png",
  },
    ],
  },
  reducers: {},
});

export default testimoniaSlice.reducer;
