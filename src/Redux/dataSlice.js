import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventsData: [
    {
      id: "LaughterTherapy1522026",
      type: "Laughter Therapy",
      title: "Vipul Goyal Unleashed",
      location: "Laugh and Vibe Club, Koregaon Park, Pune",
      coverimg: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-U2F0LCAxNCBGZWI%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00468092-nlaqaljavu-portrait.jpg",
      bannerimg: "https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-vipul-goyal-live-0-2025-10-24-t-14-0-2.jpg",
      date: "Sat 15 Feb 2026",
      time: "6:15 PM",
      duration: "1 hour 15 minutes",
      locationlink: "https://www.google.com/maps/search/?api=1&query=18.538300,73.907700",
      price: "899",
      ticketcount: 40,
      about: "Caution: This is a riot..a laugh riot! \n TVF`s hugely popular web series `Humorously Yours` will now come to your city, yeah.. you can experience the jokes LIVE. Vipul Goyal with his trove of relatable jokes and cult-y punchlines will have you laughing like a hyena. \n Join in for a rib-tickling laugh!"
    },
    {
      id: "MusicConcert20032026",
      type: "Music Events",
      title: "Arijit Singh Live",
      location: "D.Y. Patil Stadium, Nerul, Navi Mumbai",
      coverimg: "/image.png",
      bannerimg: "/image.png",
      date: "Fri 20 Mar 2026",
      time: "7:00 PM",
      duration: "3 hours",
      locationlink: "https://www.google.com/maps/search/?api=1&query=19.0434,73.0245",
      price: "2499",
      ticketcount: 150,
      about: "Get ready to be mesmerized by the soulful voice of Arijit Singh. Experience an evening filled with love, melody, and rhythm as he performs his chart-topping hits live in concert. A night you won't forget!"
    },
    {
      id: "TreasureHunt22032026",
      type: "Outdoor Events",
      title: "The Great City Treasure Hunt",
      location: "Start Point: Shaniwar Wada, Pune",
      coverimg: "/shaniwar.png",
      bannerimg: "/shaniwar.png",
      date: "Sun 22 Mar 2026",
      time: "8:00 AM",
      duration: "4 hours",
      locationlink: "https://www.google.com/maps/search/?api=1&query=18.5196,73.8554",
      price: "499",
      ticketcount: 100,
      about: "Join us for an exciting treasure hunt across the historic city of Pune. Solve clues, find hidden gems, and compete for amazing prizes. Perfect for friends and families looking for a Sunday adventure!"
    }
  ],
  nightShows: [],
  currEvent: undefined,
  currCount: 1, // Default to 1 to avoid undefined issues
  currentUser: null, // For auth simulation
  bookings: [] // To store booked events
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setNightShows: (state, action) => {
      state.nightShows = action.payload;
    },
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
    setCurrEvent: (state, action) => {
      state.currEvent = action.payload;
    },
    setCurrCount: (state, action) => {
      state.currCount = action.payload;
    },
    // New Actions
    loginUser: (state, action) => {
      state.currentUser = action.payload; // Payload should be { name, email }
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    addBooking: (state, action) => {
      // payload: { eventId, title, date, count, amount, bookingId }
      state.bookings.push(action.payload);
    }
  },
});

export const { setNightShows, setEventsData, setCurrEvent, setCurrCount, loginUser, logoutUser, addBooking } = dataSlice.actions;
export default dataSlice.reducer;
