// reducers.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the TypeScript types for state
interface UserState {
  user: User | null;
}

// Define the TypeScript types for user
interface User {
  id: number;
  username: string;
  // Add other user properties as needed
}

// Define the initial state
const initialState: UserState = {
  user: null,
};

// Create a slice for user state management
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state:UserState, action: PayloadAction<User>) => {
      state.user = action.payload; // Set the user data in the state
    },
    clearUser: (state:UserState) => {
      state.user = null; // Clear user data when logging out
    },
  },
});

// Export the action creators and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
