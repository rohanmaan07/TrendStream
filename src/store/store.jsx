import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/MovieSlice'; // Adjust the path as necessary
import tvReducer from './reducers/TvSlice'; // Adjust the path as necessary
import personReducer from './reducers/PersonSlice'; // Adjust the path as necessary

const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person:personReducer,
    
  },
});

export default store; // Default export
