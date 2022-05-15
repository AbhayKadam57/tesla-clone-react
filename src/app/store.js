import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carSlice";
import footerReducer from "../features/footer/footer"


export const store = configureStore({
  reducer: {
      car:carReducer,
      footer:footerReducer
  },
});
