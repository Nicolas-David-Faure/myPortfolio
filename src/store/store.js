import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/appBook/languages";
import { screenSlice } from "./slice/screen/screenSlice";
import { activityBarSlice } from "./slice/activityBar/activityBarSlice";
export const store = configureStore({
    reducer: {
        languages: languages.reducer,
        screenSlice: screenSlice.reducer,
        activityBarSlice: activityBarSlice.reducer,
    },
  })
