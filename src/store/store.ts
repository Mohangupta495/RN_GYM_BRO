// store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './reducers/useSlice'; // Import your reducers
import { useDispatch } from 'react-redux';

// Define the root state type
export type RootState = ReturnType<typeof rootReducer>;

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if you have more
});

// Create the Redux store
const store = configureStore({
  reducer: rootReducer,
  // You can add middleware, enhancers, etc. here
});

// Export a hook for using useDispatch with correct types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
