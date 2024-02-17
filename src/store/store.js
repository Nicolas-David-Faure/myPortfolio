import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/appBook/languages";
import { screenSlice } from "./slice/screen/screenSlice";

export const store = configureStore({
    reducer: {
        languages: languages.reducer,
        screenSlice: screenSlice.reducer,
    },
  })
