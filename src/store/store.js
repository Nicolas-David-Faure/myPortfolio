import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/appBook/languages";

export const store = configureStore({
    reducer: {
        languages: languages.reducer
    },
  })
